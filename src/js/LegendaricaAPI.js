/*
* LegendaricaAPI.js
* The implementation of Legendarica API module for a Legendarica Absolute game.
*
* By Lottarend
*
* License : https://github.com/StanislavSmetaninSSM/Legendarica/blob/main/LICENSE (MIT)
*/

const APIModule = (function getAPIModule() {
    //----- API Params -----//

    let doNotParse = false;
    let useStreaming = false;

    //Connection and prompt data
    let model = "";
    let apiKey = "";
    let prompt = "";
    let systemInstructions = "";

    //Model parameters
    let frequencyPenalty = "";
    let presencePenalty = "";
    let repetitionPenalty = "";
    let temperature = "";
    let topP = "";
    let topK = "";
    let maxTokens = "";

    //Token information objects
    let tokenCostCurrent = {};
    let tokenCostSum = {};

    //other
    let messageParseErrorMessage = "";
    let aiProviderStreamingErrorMessage = "";
    const emptyResponseErrorMessage = "Data doesn't contain a response text. Probably blocked by filters";

    //prompts
    let predefinedSystemPrompts = [];

    //----- API Functions -----//

    function sanitizeString(str) {
        return str.replace(/<script.*?>.*?<\/script>/gi, "").replace(/```json/g, "").replace(/```/g, "").replace(/by_pass/g, "\n").replace(/<script/g, '').replace(/$/g, '');
    }

    function sanitizeResponse(content) {
        let sanitizedString = sanitizeString(content ?? '').replace(/{\n/g, '{').replace(/\n}/g, '}').replace(/,}/g, '}').replace(/;}/g, '}').replace(/«/g, '').replace(/»/g, '').replace(/\n{/g, '{').replace(/\n{/g, '{');
        sanitizedString = sanitizedString.replace(/\n/g, '  ');

        const indexOfStart = sanitizedString.indexOf("{");
        if (indexOfStart > -1)
            sanitizedString = sanitizedString.substring(indexOfStart);

        const indexOfEnd = sanitizedString.lastIndexOf("}");
        if (indexOfStart > -1)
            sanitizedString = sanitizedString.substring(0, indexOfEnd + 1);

        return sanitizedString;
    }

    function parseMessage(sanitizedString) {
        try {
            if (doNotParse)
                return sanitizedString;
            return JSON.parse(sanitizedString);
        } catch {
            throw messageParseErrorMessage + sanitizedString;
        }
    }

    async function getStreamingMessageParts(response) {
        const buffer = await receiveStreamingMessage(response);
        return buffer.split('\n').filter(data => data).map(data => data.trim());
    }

    async function getOpenAIStreamingMessageResponse(response) {
        const streamingMessages = await getStreamingMessageParts(response);
        
        let finalResponse = "";
        for (const message of streamingMessages) {
            let jsonData = {};

            const messageStartIndex = message?.indexOf(":");
            if (!messageStartIndex || messageStartIndex < 0 || messageStartIndex + 1 > message.length - 1) continue;
            const data = message.substring(messageStartIndex + 1).trim();

            if (!data) continue;
            if (data == "[DONE]") break;

            try {
                jsonData = JSON.parse(data);
            } catch {
                throw messageParseErrorMessage + finalResponse;
            }

            if (jsonData.error)
                throw jsonData.error;

            if (jsonData.choices)
                finalResponse += jsonData.choices[0]?.delta?.content;
        }

        return finalResponse;
    }

    async function receiveStreamingMessage(response) {
        try {
            if (!response.ok)
                throw new Error(`HTTP error ${response.status}`);

            const reader = response.body.getReader();
            const decoder = new TextDecoder();
            let buffer = "";

            while (true) {
                const { done, value } = await reader.read();

                buffer += decoder.decode(value, { stream: true });
                if (done)
                    break;
            }

            return buffer;
        } catch (error) {
            throw aiProviderStreamingErrorMessage + `: ${error}`;
        }
    }

    return {
        initialize: function (parameters) {
            doNotParse = parameters.doNotParse;
            useStreaming = parameters.useStreaming;

            //Connection and prompt data
            model = parameters.model;
            apiKey = parameters.apiKey;
            prompt = parameters.prompt;
            systemInstructions = parameters.systemInstructions;

            //Model parameters
            frequencyPenalty = parameters.frequencyPenalty;
            presencePenalty = parameters.presencePenalty;
            repetitionPenalty = parameters.repetitionPenalty;
            temperature = parameters.temperature;
            topP = parameters.topP;
            topK = parameters.topK;
            maxTokens = parameters.maxTokens;

            //Token information objects
            tokenCostSum = parameters.tokenCostSum;

            //other
            messageParseErrorMessage = parameters.messageParseErrorMessage;
            aiProviderStreamingErrorMessage = parameters.aiProviderStreamingErrorMessage;

            predefinedSystemPrompts = parameters.predefinedSystemPrompts ?? [];
            if (predefinedSystemPrompts.length > 0)
                systemInstructions = predefinedSystemPrompts.join('\n') + '\n' + systemInstructions;            
        },

        get tokenCostCurrent() {
            return tokenCostCurrent;
        },

        get tokenCostSum() {
            return tokenCostSum;
        },

        sendOpenrouterRequest: async function () {
            const messages = [];

            if (systemInstructions) {
                messages.push({
                    role: "system",
                    content: systemInstructions
                });
            }
            messages.push({
                role: "user",
                content: prompt
            });

            const request = await fetch("https://openrouter.ai/api/v1/chat/completions", {
                method: "POST",
                headers: {
                    "Authorization": `Bearer ${apiKey}`,
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    model: `${model}`,
                    messages: messages,
                    temperature: Number(temperature),
                    repetition_penalty: Number(repetitionPenalty),
                    top_p: Number(topP),
                    top_k: Number(topK),
                    frequency_penalty: Number(frequencyPenalty),
                    presence_penalty: Number(presencePenalty)
                })
            });

            const response = await request.json();
            //console.log(response);

            if (response.error?.message)
                throw response.error;

            if (response.flagged_input) {
                if (response.reasons)
                    throw `${response.flagged_input}: ${response.reasons[0]}`;
                throw response.flagged_input;
            }

            if (response.usage) {
                tokenCostCurrent = JSON.stringify(response.usage);
                tokenCostSum.prompt_tokens = tokenCostSum.prompt_tokens + response.usage.prompt_tokens;
                tokenCostSum.completion_tokens = tokenCostSum.completion_tokens + response.usage.completion_tokens;
                tokenCostSum.total_tokens = tokenCostSum.total_tokens + response.usage.total_tokens;
            }

            if (response.choices) {
                const sanitizedString = sanitizeResponse(response.choices[0]?.message?.content);
                return parseMessage(sanitizedString);
            }

            throw emptyResponseErrorMessage;
        },

        sendGoogleAIRequest: async function () {
            const settings = {
                contents: [{
                    parts: [{ "text": prompt }]
                }],
                generationConfig: {
                    responseMimeType: "application/json"
                },
                safetySettings: [
                    { category: "HARM_CATEGORY_HARASSMENT", threshold: "BLOCK_NONE" },
                    { category: "HARM_CATEGORY_HATE_SPEECH", threshold: "BLOCK_NONE" },
                    { category: "HARM_CATEGORY_SEXUALLY_EXPLICIT", threshold: "BLOCK_NONE" },
                    { category: "HARM_CATEGORY_DANGEROUS_CONTENT", threshold: "BLOCK_NONE" },
                    { category: "HARM_CATEGORY_CIVIC_INTEGRITY", threshold: "BLOCK_NONE" }
                ]
            };

            if (systemInstructions) {
                settings.systemInstruction = {
                    parts: [{ "text": systemInstructions }]
                };
            }

            if (temperature)
                settings.generationConfig.temperature = Number(temperature);
            if (topP)
                settings.generationConfig.topP = Number(topP);
            if (topK)
                settings.generationConfig.topK = Number(topK);
            if (frequencyPenalty)
                settings.generationConfig.frequencyPenalty = Number(frequencyPenalty);
            if (presencePenalty)
                settings.generationConfig.presencePenalty = Number(presencePenalty);

            const commandName = useStreaming ? "streamGenerateContent" : "generateContent";

            const request = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/${model}:${commandName}?key=${apiKey}`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(settings)
            });
           
            let response = {};
            if (useStreaming) {
                const streamingMessages = await getStreamingMessageParts(request);
                const streamingMessagesText = streamingMessages?.join("");
                const responses = JSON.parse(streamingMessagesText);                
                const responseText = responses.map(r => r.candidates[0]?.content?.parts[0]?.text ?? "").join("");
                response = responses[responses.length - 1];
                if (response.candidates[0]?.content?.parts[0])
                    response.candidates[0].content.parts[0].text = responseText;
            } else {
                response = await request.json();
            }

            if (response.error?.message)
                throw response.error;

            if (response.usageMetadata) {
                const responseTokens = {
                    prompt_tokens: response.usageMetadata.promptTokenCount,
                    completion_tokens: response.usageMetadata.candidatesTokenCount,
                    total_tokens: response.usageMetadata.totalTokenCount
                };

                tokenCostCurrent = JSON.stringify(responseTokens);
                tokenCostSum.prompt_tokens = tokenCostSum.prompt_tokens + responseTokens.prompt_tokens;
                tokenCostSum.completion_tokens = tokenCostSum.completion_tokens + responseTokens.completion_tokens;
                tokenCostSum.total_tokens = tokenCostSum.total_tokens + responseTokens.total_tokens;
            }

            const candidates = response.candidates;
            if (candidates) {
                const sanitizedString = sanitizeResponse(candidates[0]?.content?.parts[0]?.text);
                return parseMessage(sanitizedString);
            }

            if (response.blockReason)
                throw response.blockReason;

            throw emptyResponseErrorMessage;
        },

        sendMistralAIRequest: async function () {
            const messages = [];

            if (systemInstructions) {
                messages.push({
                    role: "system",
                    content: systemInstructions
                });
            }
            messages.push({
                role: "user",
                content: prompt
            });

            const settings = {
                model: model,
                response_format: { type: "json_object" },
                safe_prompt: false,
                messages: messages
            };

            if (temperature)
                settings.temperature = Number(temperature);
            if (topP)
                settings.top_p = Number(topP);

            const request = await fetch(`https://api.mistral.ai/v1/chat/completions`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${apiKey}`
                },
                body: JSON.stringify(settings)
            });

            const response = await request.json();
            //console.log(response);

            if (response.message?.detail)
                throw response.message.detail[0].msg;

            if (response.message)
                throw response.message;

            if (response.usage) {
                tokenCostCurrent = JSON.stringify(response.usage);
                tokenCostSum.prompt_tokens = tokenCostSum.prompt_tokens + response.usage.prompt_tokens;
                tokenCostSum.completion_tokens = tokenCostSum.completion_tokens + response.usage.completion_tokens;
                tokenCostSum.total_tokens = tokenCostSum.total_tokens + response.usage.total_tokens;
            }

            if (response.choices) {
                const sanitizedString = sanitizeResponse(response.choices[0]?.message?.content);
                return parseMessage(sanitizedString);
            }

            throw emptyResponseErrorMessage;
        },

        sendGroqRequest: async function () {
            const messages = [];

            if (systemInstructions) {
                messages.push({
                    role: "system",
                    content: systemInstructions
                });
            }
            messages.push({
                role: "user",
                content: prompt
            });

            const settings = {
                model: model,
                response_format: { type: "json_object" },
                messages: messages
            };

            if (temperature)
                settings.temperature = Number(temperature);
            if (topP)
                settings.top_p = Number(topP);
            if (frequencyPenalty)
                settings.frequency_penalty = Number(frequencyPenalty);
            if (presencePenalty)
                settings.presence_penalty = Number(presencePenalty);

            const request = await fetch(`https://api.groq.com/openai/v1/chat/completions`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${apiKey}`
                },
                body: JSON.stringify(settings)
            });

            const response = await request.json();
            //console.log(response);

            if (response.error)
                throw response.error;

            if (response.usage) {
                tokenCostCurrent = JSON.stringify(response.usage);
                tokenCostSum.prompt_tokens = tokenCostSum.prompt_tokens + response.usage.prompt_tokens;
                tokenCostSum.completion_tokens = tokenCostSum.completion_tokens + response.usage.completion_tokens;
                tokenCostSum.total_tokens = tokenCostSum.total_tokens + response.usage.total_tokens;
            }

            if (response.choices) {
                const sanitizedString = sanitizeResponse(response.choices[0]?.message?.content);
                return parseMessage(sanitizedString);
            }

            throw emptyResponseErrorMessage;
        },

        sendHuggingFaceRequest: async function () {
            const messages = [];

            if (systemInstructions) {
                messages.push({
                    role: "system",
                    content: systemInstructions
                });
            }
            messages.push({
                role: "user",
                content: prompt
            });

            const settings = {
                model: model,
                messages: messages,
                stream: true,
                max_tokens: Number(maxTokens)
            };

            if (temperature)
                settings.temperature = Number(temperature);
            if (topP)
                settings.top_p = Number(topP);
            if (frequencyPenalty)
                settings.frequency_penalty = Number(frequencyPenalty);
            if (presencePenalty)
                settings.presence_penalty = Number(presencePenalty);

            const request = await fetch(`https://api-inference.huggingface.co/models/${model}/v1/chat/completions`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "x-wait-for-model": "true",
                    "Authorization": `Bearer ${apiKey}`
                },
                body: JSON.stringify(settings)
            });

            if (!request.ok) {
                const errorObject = await request.json();
                throw errorObject.message;
            }

            const response = await getOpenAIStreamingMessageResponse(request);
            const sanitizedString = sanitizeResponse(response);
            return parseMessage(sanitizedString);

            throw emptyResponseErrorMessage;
        },

        sendCohereRequest: async function () {
            const messages = [];

            if (systemInstructions) {
                messages.push({
                    role: "system",
                    content: systemInstructions
                });
            }
            messages.push({
                role: "user",
                content: prompt
            });

            const settings = {
                model: model,
                messages: messages,
                stream: false,
                safety_mode: "NONE"
            };

            if (temperature)
                settings.temperature = Number(temperature);
            if (topP)
                settings.p = Number(topP);
            if (topK)
                settings.k = Number(topK);
            if (frequencyPenalty)
                settings.frequency_penalty = Number(frequencyPenalty);
            if (presencePenalty)
                settings.presence_penalty = Number(presencePenalty);

            const request = await fetch("https://api.cohere.com/v2/chat", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${apiKey}`
                },
                body: JSON.stringify(settings)
            });

            const response = await request.json();
            //console.log(response);

            if (response.finish_reason == "ERROR") {
                if (response.message?.content)
                    throw response.message.content[0].text;
            }

            if (response.usage) {
                const responseTokens = {
                    prompt_tokens: response.usage.tokens.output_tokens,
                    completion_tokens: response.usage.tokens.input_tokens,
                    total_tokens: response.usage.tokens.output_tokens + response.usage.tokens.input_tokens
                };

                tokenCostCurrent = JSON.stringify(responseTokens);
                tokenCostSum.prompt_tokens = tokenCostSum.prompt_tokens + responseTokens.prompt_tokens;
                tokenCostSum.completion_tokens = tokenCostSum.completion_tokens + responseTokens.completion_tokens;
                tokenCostSum.total_tokens = tokenCostSum.total_tokens + responseTokens.total_tokens;
            }

            if (response.message?.content) {
                const sanitizedString = sanitizeResponse(response.message.content[0].text);
                return parseMessage(sanitizedString);
            } else if (typeof response.message == 'string') {
                throw response.message;
            }

            throw emptyResponseErrorMessage;
        },

        sendChat01APIRequest: async function () {
            const messages = [];

            if (systemInstructions) {
                messages.push({
                    role: "system",
                    content: systemInstructions
                });
            }
            messages.push({
                role: "user",
                content: prompt
            });

            const settings = {
                model: model,
                messages: messages,
                response_format: { type: "json_object" },
                stream: false
            };

            if (temperature)
                settings.temperature = Number(temperature);
            if (topP)
                settings.top_p = Number(topP);
            if (frequencyPenalty)
                settings.frequency_penalty = Number(frequencyPenalty);
            if (presencePenalty)
                settings.presence_penalty = Number(presencePenalty);

            const request = await fetch("https://chat01.ai/v1/chat/completions", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${apiKey}`
                },
                body: JSON.stringify(settings)
            });

            const response = await request.json();
            //console.log(response);

            if (response.error)
                throw response.error;

            if (response.usage) {
                tokenCostCurrent = JSON.stringify(response.usage);
                tokenCostSum.prompt_tokens = tokenCostSum.prompt_tokens + response.usage.prompt_tokens;
                tokenCostSum.completion_tokens = tokenCostSum.completion_tokens + response.usage.completion_tokens;
                tokenCostSum.total_tokens = tokenCostSum.total_tokens + response.usage.total_tokens;
            }

            if (response.choices) {
                const sanitizedString = sanitizeResponse(response.choices[0]?.message?.content);
                return parseMessage(sanitizedString);
            }

            throw emptyResponseErrorMessage;
        },

        sendGiteeRequest: async function () {
            const messages = [];

            if (systemInstructions) {
                messages.push({
                    role: "system",
                    content: systemInstructions
                });
            }
            messages.push({
                role: "user",
                content: prompt
            });

            const settings = {
                model: model,
                stream: true,
                messages: messages,
            };

            if (maxTokens)
                settings.max_tokens = Number(maxTokens);
            if (temperature)
                settings.temperature = Number(temperature);
            if (topP)
                settings.top_p = Number(topP);
            if (frequencyPenalty)
                settings.frequency_penalty = Number(frequencyPenalty);
            if (presencePenalty)
                settings.presence_penalty = Number(presencePenalty);
                
            const request = await fetch(`https://ai.gitee.com/v1/chat/completions`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${apiKey}`
                },
                body: JSON.stringify(settings)
            });

            if (!request.ok) {
                const errorObject = await request.json();
                throw errorObject.message;
            }

            const response = await getOpenAIStreamingMessageResponse(request);           
            const sanitizedString = sanitizeResponse(response);
            return parseMessage(sanitizedString);

            throw emptyResponseErrorMessage;
        },

        sendWebsimRequest: async function () {            
            const messages = [];

            if (systemInstructions) {
                messages.push({
                    role: "system",
                    content: systemInstructions
                });
            }
            messages.push({
                role: "user",
                content: prompt
            });

            const settings = {
                messages: messages
            };

            const request = await fetch(`/api/ai_completion`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(settings)
            });

            if (!request.ok)
                throw new Error(`Websim has returned the HTTP error ${request.status} for this request.`);
            
            const response = await request.text();
            //console.log(response);

            if (response) {
                const sanitizedString = sanitizeResponse(response);
                return parseMessage(sanitizedString);
            }

            throw emptyResponseErrorMessage;
        }
    }
})();
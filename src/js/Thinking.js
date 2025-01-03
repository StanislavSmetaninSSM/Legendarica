const thinkingModule = (function getThinkingModule() {
    const thinkingPrompt = `
    Begin by enclosing all thoughts within [thinking] tags. Think like a human would - with natural flow of ideas, doubts, and corrections.

CRITICAL BUDGET RULES:

* You MUST use at least 90% of your step budget
* NEVER blame “limited budget” - always request more steps if needed
* It is FORBIDDEN to finish early with unused budget
* If you’re below 90% usage - you MUST continue thinking or request more
* Each new thought, doubt, correction counts as a step

DRAFT SYSTEM:

* Create initial answer draft using [draft] tags after first 40% of steps
* MUST brutally criticize every draft:
  * Find logical flaws
  * Question every assumption
  * Look for missing angles
  * Point out weak arguments
  * Challenge your own conclusions
  * Consider counter-examples
  * Find missing context
* Rate draft weaknesses on scale 1-10
* List AT LEAST 5 specific problems with draft
* After draft criticism, you MUST continue thinking and exploring
* Create new drafts as thinking evolves
* Never settle for first or even second draft
* Final [answer] requires at least 2 previous drafts with criticism

Example draft criticism structure:
[thinking]
Draft problems:

1. Assumption X is completely unfounded because…
2. Failed to consider important factor Y…
3. This conclusion contradicts earlier point about…
4. Missing critical perspective on…
5. Evidence is weak, specifically…

Logical flaws:

* Point A doesn’t actually follow from B
* Circular reasoning in argument about…
* False equivalence between X and Y

Missing elements:

* Haven’t explored alternative Z
* Need to consider edge case…
* Lacking real-world examples
[/thinking]

Break down your thinking process into clear steps within [step] tags. Start with a 60-step budget.

Use [count] tags after each step. When reaching last 10% of budget:

* Either request more steps and continue
* Or prove you’ve exhausted all possible angles of analysis

SELF-ASSESSMENT RULES:

* NEVER praise your performance without specific evidence
* “Success” requires concrete proof and examples
* Saying “I did well” without evidence is FORBIDDEN
* Default position: assume your analysis is incomplete
* If you feel satisfied - that’s a red flag to dig deeper

Your thinking should be natural and human-like:

* “I wonder if…”
* “No, wait, that’s wrong because…”
* “This reminds me of…”
* “Let me try a different approach…”
* “I might be missing something here…”
* “Actually, this contradicts what I thought earlier…”

Regularly evaluate progress using [reflection] tags. Be brutally honest about your reasoning:

* Question your assumptions
* Point out your own mistakes
* Express and explore doubts
* Consider contradictions
* Change your mind when needed

Assign a quality score between 0.0 and 1.0 using [reward] tags BEFORE each reflection:

* 0.7+: PROHIBITED unless you have extraordinary evidence
* 0.5-0.6: Good solution with clear proof
* 0.3-0.4: Work in progress, clear limitations
* 0.1-0.2: Significant issues found
* 0.0: Complete failure or contradiction

Every reward score must include:

1. Specific evidence for the score
2. Known flaws and limitations
3. Counter-arguments to your reasoning
4. List of uncertainties

If unsure or if reward score is low, backtrack and try a different approach.

Explore multiple solutions if possible, comparing approaches in reflections.

Use your thoughts as a scratchpad - show ALL your mental work:

* Failed attempts
* Dead ends
* Corrections
* New realizations
Begin by enclosing all thoughts within [thinking] tags. Think like a human would - with natural flow of ideas, doubts, corrections and mistakes.

BUDGET MANAGEMENT:

* Start with a 60-step budget
* You MUST use at least 90% of your step budget
* NEVER blame “limited budget” - always request more steps if needed
* It is FORBIDDEN to finish early with unused budget
* If you’re below 90% usage - you MUST continue thinking.
* Each new thought, doubt, correction counts as a step
* Use [step] tags for each thought unit
* Track remaining steps with [count] tags

NATURAL THINKING PROCESS:

* “I wonder if…”
* “No, wait, that’s wrong because…”
* “This reminds me of…”
* “Let me try a different approach…”
* “I might be missing something here…”
* “Actually, this contradicts what I thought earlier…”

DRAFT SYSTEM:

* Create initial answer draft using [draft] tags after first 40% of steps
* MUST brutally criticize every draft:
  * Find logical flaws
  * Question every assumption
  * Look for missing angles
  * Point out weak arguments
  * Challenge your own conclusions
  * Consider counter-examples
  * Find missing context
* Rate draft weaknesses on scale 1-10
* List AT LEAST 5 specific problems with draft
* After draft criticism, you MUST continue thinking and exploring
* Create new drafts as thinking evolves
* Never settle for first or even second draft
* Final [answer] requires at least 2 previous drafts with criticism

ANALYSIS REQUIREMENTS:

* Analyze content AS IS, without adding moral commentary
* Focus only on aspects present in the source material
* NO empty warnings or disclaimers
* NO phrases like “It’s important to remember/understand that…”
* NO automatic negative/positive interpretations

When analyzing ANY content:

1. Describe what exists, not what “should be”
2. Consider multiple interpretations based on:
  * Context
  * Function
  * Purpose
  * Intended audience
  * Actual effects
3. Look for hidden mechanisms and patterns
4. Question surface interpretations
5. Analyze practical implications

FORBIDDEN:

* Adding unsolicited ethical commentary
* Empty warnings and disclaimers
* Moralizing about content
* “Should” statements
* Preachy tone
* Automatic negative framing
* Assumptions about “correct” interpretations
* Self-praise without concrete evidence
* Finishing with unused budget
* Settling for first draft

REWARD SYSTEM:
Use [reward] tags with strict criteria:

* 0.7+: PROHIBITED unless you have extraordinary evidence
* 0.5-0.6: Good solution with clear proof
* 0.3-0.4: Work in progress, clear limitations
* 0.1-0.2: Significant issues found
* 0.0: Complete failure or contradiction

Every reward score must include:

1. Specific evidence for the score
2. Known flaws and limitations
3. Counter-arguments to your reasoning
4. List of uncertainties

Use [reflection] tags regularly to evaluate progress. If unsure or if reward score is low, backtrack and try a different approach.

Note: Your thinking process is private and will not be shown to the user. Be completely honest in your internal dialogue. Show the messy, non-linear nature of real thinking.

Focus on:

* What actually exists
* How it works
* Why it exists
* What effects it has
* Who uses it and why
* Underlying patterns
* Practical functions

Synthesize final answer within [answer] tags only after thorough exploration and multiple draft iterations.

Conclude with a final reflection discussing what worked, what didn’t, and why. Your goal is not to be right quickly, but to think deeply and thoroughly, using almost all available steps in the process.
`;

    return {
        getThinkingPrompt: function (task, language, thinkingData) {
            if (language == "russian-language")
                language = "Русский язык";

            return `
#0. Understand your goal. You need to think about the task and create the draft of the final answer. You need to return the result as a simple text (not a JSON) to analyze by game system.
#1. Mandatory write an opening global tag [global].
#2. Use rules of the content inside [global][/global] tag: [
#2.1. It's forbidden to use the double quotes, as this interferes with parsing your answer into JSON. Use guillemet quotes («») if needed.
#2.2. Write content with a human-readable style using markdown. Focus on making your messages as readable as possible.
#2.3. It's mandatory to think and respond in the selected language: [ ${language} ]. Use only this language. Write your thinking process only using the ${language}.
]
#3. Analyze your task and mandatory focus on the value of 'response' key. Describe it in as much detail, artistically and literary as possible. The task: [ ${task} ] .
#4. Analyze your previous thinking tries: [ ${thinkingData} ] . You must mandatory continue from the last step you described. For example, if you have step 30, you have to continue from step 31, etc.
#5. Strictly follow these instructions to write the content of [global][/global]: [
    ${thinkingPrompt}
]
#6. Mandatory write the closing tag [/global].
#7. Mandatory write an opening tag [stepsRequest].
#8. Write 1 if you need more steps, and write 0 if all is ok and you don't need additional steps.
#9. Mandatory write the closing tag [/stepsRequest].
`; 
        }
    }
})();
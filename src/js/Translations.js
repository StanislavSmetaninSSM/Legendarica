/*
* Translations.js
* The implementation of Legendarica translation module for a Legendarica Absolute game.
*
* By Lottarend
*
* License : https://github.com/StanislavSmetaninSSM/Legendarica/blob/main/LICENSE (MIT)
*/

const translationModule = (function getTranslationModule() {

    //------ Module data ------//
    const translations = {
        "english-language": {
            // placeholders
            "start-str": "Strength",
            "start-dex": "Dexterity",
            "start-con": "Constitution",
            "start-intl": "Intelligence",
            "start-wis": "Wisdom",
            "start-trd": "Trade",
            "start-per": "Perception",
            "start-luck": "Luck",
            "start-spd": "Speed",
            "start-money": "Money",
            "start-exp": "Experience",
            "start-atr": "Attractiveness",
            "start-location-description": "Describe the starting location (optional)",
            "start-location": "Enter the name of the starting location (optional)",
            "character-starting-inventory": "Describe the starting inventory (optional)",
            "character-prehistory": "Enter the character's backstory (optional)",
            "character-class-description": "Class description (optional)",
            "character-class2": "Character class",
            "character-race-description": "Race description (optional)",
            "character-race2": "Character race",
            "character-gender2": "Character gender",
            "character-description": "Character description (optional)",
            "character-name-my-game": "Character name",
            "world-description": "Enter world description and instructions for the game master",
            "character-name": "Enter character name",
            "api-key": "For security reasons, make sure you use an API key with a low spending limit",
            "api-key2": "For security reasons, make sure you use an API key with a low spending limit",
            "api-key3": "For security reasons, make sure you use an API key with a low spending limit",
            "ai-model": "Enter the neural network model name",
            "ai-model2": "Enter the neural network model name",
            "ai-model3": "Enter the neural network model name",
            "ai-provider-label": "Neural network provider",
            "ai-provider-label2": "Neural network provider",
            "ai-provider-label3": "Neural network provider",
            "max-gm-symbols": "10000 by default",
            "my-rules": "Enter your rules and leave them here. From the next turn, they will start to apply as long as they are here.",
            "user-input": "Speak your action, brave adventurer...",
            "style-of-image-input": "For example: medieval, fantasy, neuropunk",
            "system-instructions": "Enter your system instructions and leave them here. Starting from the next turn, they will be in effect as long as they remain here.",
            "world-system-instructions": "Enter system instructions for the neural network (optional)",

            // labels
            "style-of-image-label": "Style of generated images",
            "health-label": "Health:",
            "level-label": "Level:",
            "strength-label": "Strength:",
            "dexterity-label": "Dexterity:",
            "wisdom-label": "Wisdom:",
            "perception-label": "Perception:",
            "trade-label": "Trade:",
            "attractiveness-label": "Attractiveness:",
            "energy-label": "Energy:",
            "exp-label": "Experience:",
            "constitution-label": "Constitution:",
            "speed-label": "Speed:",
            "intelligence-label": "Intelligence:",
            "luck-label": "Luck:",
            "money-label": "Money:",
            "send-button": "Send",
            "resend-button": "Resend message",

            "strength": "Strength",
            "dexterity": "Dexterity",
            "wisdom": "Wisdom",
            "perception": "Perception",
            "trade": "Trade",
            "attractiveness": "Attractiveness",
            "constitution": "Constitution",
            "speed": "Speed",
            "intelligence": "Intelligence",
            "luck": "Luck",

            "create-setting": "Start game",
            "load-created-setting": "Load setting from file",
            "save-created-setting": "Save setting to file",
            "tts-mode-label": "Text-to-speech (doesn't work in all browsers)",
            "tts-mode-label2": "Text-to-speech (doesn't work in all browsers)",
            "tts-mode-label3": "Text-to-speech (doesn't work in all browsers)",

            "tooltip-rpg": "If the slider is red, it's enabled. RPG is the game mode. In RPG mode, gameplay focuses on character progression, and skills and inventory are crucial. If disabled, the game is in Roleplay mode, which focuses on building an interesting artistic story, with skills and inventory being of secondary importance.",
            "tooltip-rpg2": "If the slider is red, it's enabled. RPG is the game mode. In RPG mode, gameplay focuses on character progression, and skills and inventory are crucial. If disabled, the game is in Roleplay mode, which focuses on building an interesting artistic story, with skills and inventory being of secondary importance.",
            "nonmagic-mode-name": "No magic in the world",
            "tooltip-noMagic": "If enabled (red color), the game master builds a world without magic and only with realistic abilities. If disabled, there will be magic and unrealistic abilities in the world.",
            "starting-parameters-label": "Character starting parameters:",
            "my-world-label": "Invent your own world or describe one of the known existing ones",
            "my-game": "Custom setting",
            "load-savefile": "Load file",
            "load-character": "Load autosave",
            "random-character": "Random character",
            "create-character": "Start game",
            "tooltip-class": `Class affects the generation of passive skills when leveling up and starting items:

	Barbarian - Great axe, Leather armor, Healing potion

	Bard - Lute, Dagger, Light armor, Charm potion

	Cleric - Mace, Shield, Chainmail, Holy symbol

	Druid - Wooden staff, Leather armor, Herb pouch

	Fighter - Long sword, Shield, Chainmail, Healing potion

	Monk - Battle staff, Monk robes, Meditation beads

	Paladin - Long sword, Shield, Plate armor, Holy symbol

	Ranger - Long bow, Quiver of arrows, Leather armor, Trap kit

	Rogue - Short sword, Dagger, Leather armor, Thieves' tools

	Sorcerer - Fire dagger, Orb, Robe, Energy potion

	Warlock - Magical focus, Leather armor, Grimoire, Eldritch talisman

	Wizard - Spellbook, Magic wand, Robe, Magic missile scroll`,
            "tooltip-race": `Race affects starting location, racial skill generation, storyline, and starting bonuses to skills and items:
	Human: Luck +2, Trade +1, Perception +1, Wisdom -1, Intelligence -1, Universal Tool

	Elf: Agility +2, Speed +1, Attractiveness +1, Strength -1, Endurance -1, Elven Cloak

	Dwarf: Trade +2, Strength +1, Endurance +1, Agility -1, Speed -1, Dwarven Ale

	Orc: Strength +3, Endurance +2, Intelligence -1, Wisdom -1, Attractiveness -1, Orcish War Paint

	Lizard: Endurance +2, Speed +1, Attractiveness -1, Scale Oil

	Vampire: Perception +1, Attractiveness +1, Agility +1, Luck -1, Vial of Blood

	Golem: Strength +3, Endurance +2, Intelligence -1, Attractiveness -1, Wisdom -1, Elemental Core`,
            "create-character-label": "Create your character",
            "api-key-button": "Show for 10 seconds",
            "api-key-button2": "Show for 10 seconds",
            "api-key-button3": "Show for 10 seconds",
            "ai-model-label": "AI model",
            "ai-model-label2": "AI model",
            "ai-model-label3": "AI model",
            "max-gm-symbols-label": "Maximum number of characters in the game master's message",
            "interface-language": "Game language",
            "interface-language2": "Game language",
            "image-mode-settings-label": "Image generation settings (does not affect the number of requests as it uses a free service)",
            "load-my-rules-button-label": "Load rules from file",
            "download-my-rules-button-label": "Download rules to file",
            "my-rules-explanaition": "Here you can modify or add game rules or simply influence the behavior of the game master. Just enter an instruction here and leave it. For example: 'The character's inventory should have a list as a separate item, which indicates all bonuses in total from all items in the inventory, and if there is no such list in the inventory, add it' or 'let there be monsters in every location'. Warning: changes made may break some game mechanics. Or they may not. Go for it!",
            "clear-log": "Clear log. Almost does not affect the game master's memory, as he only remembers the last 5 log messages",
            "clear-system-chat": "Delete all red messages from the chat. Does not affect the game master's memory at all",
            "clear-half-chat": "Clear half of the chat. Details from the deleted chat will be forgotten by the game master. Compressed information stored in location and item descriptions will not be forgotten. You can write down individual events or a compressed history of adventures on separate sheets of paper in the inventory before deleting the chat.",
            "settings-button-label": "Settings",
            "load-box-button-label": "Load game",
            "save-box-button-lable": "Save game",
            "my-rules-button-label": "Custom rules (prompt)",
            "antilag-button-label": "Reduce lag",
            "log-button-label": "Action calculation log",
            "locations-button-label": "Locations",
            "inventory-button-label": "Inventory",
            "alert_cant_start": "Please fill in all fields before creating a character.",
            "api-key-label": "Your API key",
            "api-key-label2": "Your API key",
            "api-key-label3": "Your API key",
            "location-delete": "Forget this location",
            "player-status-label": "Status",
            "status-purposes-label": "Possible purposes:",
            "player-npc-button-label": "Characters",
            "use-status-label": "Use status (disable to save tokens)",
            "use-npc-list-label": "Use characters list (disable to save tokens)",
            "npc-delete": "Forget this character",
            "npc-delete-journal": "Forget this character's diary",

            "free-roam": "Free roam (Do what you want)",
            "mysterious-plague": "Mysterious plague",
            "missing-nobles": "Missing nobles",
            "haunted-village": "Haunted village",
            "bandit-uprising": "Bandit uprising",
            "ancient-ruins": "Ancient ruins",
            "political-intrigue": "Political intrigue",
            "dragon-threat": "Dragon threat",
            "cursed-artifact": "Cursed artifact",
            "lost-expedition": "Lost expedition",
            "merchant-caravan": "Merchant caravan",
            "rebellion": "Rebellion",
            "prophecy": "Prophecy",
            "seaside-terror": "Seaside terror",
            "festival-sabotage": "Festival sabotage",
            "hidden-cult": "Hidden cult",
            "elemental-chaos": "Elemental chaos",
            "magical-academy": "Magical academy",
            "royal-escort": "Royal escort",
            "giant-invasion": "Giant invasion",
            "random": "Random campaign from the list",


            "wizard": "Wizard",
            "warlock": "Warlock",
            "sorcerer": "Sorcerer",
            "rogue": "Rogue",
            "ranger": "Ranger",
            "paladin": "Paladin",
            "monk": "Monk",
            "fighter": "Fighter",
            "druid": "Druid",
            "cleric": "Cleric",
            "bard": "Bard",
            "barbarian": "Barbarian",
            "no-choosed-class": "Choose a class",


            "golem": "Golem",
            "vampire": "Vampire",
            "lizardman": "Lizardman",
            "orc": "Orc",
            "dwarf": "Dwarf",
            "elf": "Elf",
            "human": "Human",
            "no-choosed-race": "Choose a race",


            "female": "Female",
            "male": "Male",
            "no-choosed-gender": "Choose a gender",


            "item_notepad": "Notepad for notes",
            "item_notepad_description": "Notepad for notes",
            "game_starting_description": `---- ABSOLUTE LEGENDARICA ----\n\n A new game begins. You are free to do and say absolutely anything you want. However, the consequences will not be long in coming, especially if your character does not have enough skills for your idea. You can become a hero, an entrepreneur, a thief, an actor, a hired assassin, a farmer, a king, and much more... Complete freedom of action.\n\n The built-in memory is enough for the last 30 visited locations, NPCs, quests (completed) - the old ones will be deleted. You can remember the ones you need by clicking the lock to the left of the name (in the list). \nEach location has a difficulty level indicated by a number in parentheses.\n\n Some skill checks may be considered successful or unsuccessful even if the calculation result is the opposite because the logic of the situation is more important than randomness, but such a check will still affect the consequences of such success/failure. After a character gains a level, a random base parameter is randomly increased by 1 and a new passive skill is generated on the next turn. During the game, items with bonuses to skills that are not on the skill list may appear, but such bonuses may apply to several skills from the list: an item with a bonus, for example, to agility +1, can increase both speed and dexterity in different checks.\n\n You can ask the host in the chat to correct a mistake they made, such as incorrectly calculated money, energy, etc. The host understands a lot, so feel free to experiment.\n\n You can try to build your instructions for the host to suit your needs in the 'Your rules (prompt)' tab.\n\n The game is automatically saved every 5 minutes. When loading the game, the host remembers the story only from the description of locations, descriptions of items, as well as the list of NPCs, the NPC diary, the character's status, and the quest log. This is useful to avoid overloading the host. But if you want, you can expand their post-load memory in such a way that before saving, you write down a detailed history of the latest events on a piece of paper in your inventory. And the host will see this piece of paper after loading. The save file can be opened in Notepad and the data can be changed there - but before you do this, do not forget to save a backup copy of the save so that it does not disappear if the editing is unsuccessful.\n\n For unlimited access to neural networks, you can use one of the neural network providers from the list.\nThe number of tokens spent per turn and per session can be viewed by hovering the cursor over the message in the action log.\n\n You can delete this and any other messages by clicking on the cross in the corner of the message. Deleted messages are erased from the host's memory.\n\n This game is a heavily modified (believe me, VERY HEAVILY) version of the game by Creature. You can check out the original at the link: https://websim.ai/@Creature/legendarica-v1-neural-sandbox\n\nPlease consider thanking me (Lottarend - the author of ABSOLUTE LEGENDARICA) to make me happy and motivate me to release new versions of the game.`,
            "game_starting_donate": "Thank the author of ABSOLUTE LEGENDARICA:\n\n Cryptocurrency: TSH1v85VbFo6b8gzb2xKcHy7Lk5NYLqVYh (USDT TRC20)\n\nAnother way: https://www.donationalerts.com/r/lottarend",
            "game_starting_discord": "You can find the latest version and discuss the game in Discord https://discord.com/invite/JVshMaq3GG",
            "null_resend_message": "Where am I? Who am I?",
            "item_not_descripted": "Item not studied by the hero",
            "name_turn": "Turn",
            "name_answer_turn": "Response to turn",
            "turn_log_name": "Turn log",
            "location_difficulty_label": "difficulty",
            "message_after_load": "Where am I? Briefly retell my story.",
            "gm_message_error": "Error. You may have exceeded the limit on the number of messages to GM: 10 per minute or 20 per five minutes or 100 per 24 hours (information about limits is indicated at the time of game update, it may change). Or GM is heavily loaded. Or another unknown error. Please try again",
            "big_axe": "Big axe",
            "long_sword": "Long sword",
            "mace": "Mace",
            "shield": "Shield",
            "chainmail": "Chainmail",
            "holy_symbol": "Holy symbol",
            "wooden_staff": "Wooden staff",
            "light_armor": "Light armor",
            "healing_potion": "Healing potion",
            "charm_potion": "Charm potion",
            "fox_sneakers": "Leather armor",
            "fire_dagger": "Fire dagger",
            "orb": "Orb",
            "robe": "Robe",
            "energy_potion": "Energy potion",
            "magical_focus": "Magical focus",
            "grimuar": "Grimoire",
            "eldritch_talisman": "Eldritch talisman",
            "spellbook": "Spellbook",
            "magical_wand": "Magic wand",
            "scroll_of_magic_arrow": "Scroll of magic arrow",
            "battle_axe": "Battle axe",
            "leather_armor": "Leather armor",
            "herb_pouch": "Herb pouch",
            "tunic": "Tunic",
            "meditation_beads": "Meditation beads",
            "trap_kit": "Trap kit",
            "thieves_tools": "Thieves' tools",
            "Universal_tool": "Universal tool",
            "Elven_cloak": "Elven cloak",
            "Dwarven_ale": "Dwarven ale",
            "Orcish_war_paint": "Orcish war paint",
            "Scale_oil": "Scale oil",
            "Blood_vial": "Blood vial",
            "Elemental_core": "Elemental core",
            "lute": "Lute",
            "dagger": "Dagger",
            "staff": "Staff",
            "long_bow": "Long bow",
            "quiver_of_arrows": "Quiver of arrows",
            "short_sword": "Short sword",
            "quality_unique": "Unique",
            "quality_legendary": "Legendary",
            "quality_epic": "Epic",
            "quality_rare": "Rare",
            "quality_good": "Good",
            "quality_common": "Common",
            "quality_trash": "Trash",


            "gm_message_error_full_gm_answer": "The neural network failed to properly format the response for parsing. If the error occurs frequently, change the neural network model. Here's its full response: \n\n",
            "other_skill_group": "Other",
            "skill_energy_cost": "Cost (in energy)",
            "clear-status-label": "Clear status",
            "active-skills-button-label": "Active skills",
            "passive-skills-button-label": "Passive skills",
            "status-effects-label": "Effects:",
            "tooltip-provider-ai": `Neural Network Providers

	For all providers except Websim, you need to register on the respective website and create an API key or Access Token. Pay attention to the neural network context - Legendarica uses a very large prompt, and it only increases over time due to chat history and other data used by the GM. A context of at least 128,000 tokens is required. The information described here is current as of the specified date (24.11.2024).

	Cohere (https://coral.cohere.com/). Provides completely free access to Command R models.
	Getting started: model command-r-plus

	Google AI Studio (https://ai.google.dev/aistudio). All models have a free tier; see the Studio website. Try experimental models - they usually have a larger limit of free messages per day.
	Getting started: model gemini-1.5-pro

	Groq (https://groq.com/). Groq provides access to various free models but severely limits them by context. Currently, there are no free models on this site that work well in Legendarica, but this may change in the future. Paid models are likely to work well. See the list of models here: https://console.groq.com/docs/models

	Hugging Face (https://huggingface.co/models?inference=warm&other=conversational&sort=trending). A large repository for neural networks. The Inference API is used to access it, and only models that support it are available for the game. There is a limit on the number of messages per day, which increases with a paid subscription. If the models send unreadable text as a response, then either the model is very weak, or the temperature is high. In this case, try lowering the temperature or changing the model.
	Getting started: model Qwen/Qwen2.5-72B-Instruct (temperature 0.4)

	Mistral AI (https://mistral.ai/). The Mistral AI website offers participation in an "experimental" pricing plan, making all Mistral models free to use.
	Getting started: model mistral-large-latest

	OpenAI01 (https://openaio1api.com/ - main website: https://openai01.net/). Access to OpenAI o1-preview. There is no free tier. Upon registration, you receive 10 credits; 2 credits are charged per request to o1-preview.
	Model: o1-preview

	Openrouter (https://openrouter.ai/). Offers both free and paid models. Free models have a daily message limit.

	Websim. Depends on the neural network used by Websim. After Websim changed the AI API from Claude to something very weak, Websim can no longer guarantee a good game or even its execution, as the AI used is very weak. But this may change in the future.`,
            "tooltip-provider-ai2": `Neural Network Providers

	For all providers except Websim, you need to register on the respective website and create an API key or Access Token. Pay attention to the neural network context - Legendarica uses a very large prompt, and it only increases over time due to chat history and other data used by the GM. A context of at least 128,000 tokens is required. The information described here is current as of the specified date (24.11.2024).

	Cohere (https://coral.cohere.com/). Provides completely free access to Command R models.
	Getting started: model command-r-plus

	Google AI Studio (https://ai.google.dev/aistudio). All models have a free tier; see the Studio website. Try experimental models - they usually have a larger limit of free messages per day.
	Getting started: model gemini-1.5-pro

	Groq (https://groq.com/). Groq provides access to various free models but severely limits them by context. Currently, there are no free models on this site that work well in Legendarica, but this may change in the future. Paid models are likely to work well. See the list of models here: https://console.groq.com/docs/models

	Hugging Face (https://huggingface.co/models?inference=warm&other=conversational&sort=trending). A large repository for neural networks. The Inference API is used to access it, and only models that support it are available for the game. There is a limit on the number of messages per day, which increases with a paid subscription. If the models send unreadable text as a response, then either the model is very weak, or the temperature is high. In this case, try lowering the temperature or changing the model.
	Getting started: model Qwen/Qwen2.5-72B-Instruct (temperature 0.4)

	Mistral AI (https://mistral.ai/). The Mistral AI website offers participation in an "experimental" pricing plan, making all Mistral models free to use.
	Getting started: model mistral-large-latest

	OpenAI01 (https://openaio1api.com/ - main website: https://openai01.net/). Access to OpenAI o1-preview. There is no free tier. Upon registration, you receive 10 credits; 2 credits are charged per request to o1-preview.
	Model: o1-preview

	Openrouter (https://openrouter.ai/). Offers both free and paid models. Free models have a daily message limit.

	Websim. Depends on the neural network used by Websim. After Websim changed the AI API from Claude to something very weak, Websim can no longer guarantee a good game or even its execution, as the AI used is very weak. But this may change in the future.`,
            "tooltip-provider-ai3": `Neural Network Providers

	For all providers except Websim, you need to register on the respective website and create an API key or Access Token. Pay attention to the neural network context - Legendarica uses a very large prompt, and it only increases over time due to chat history and other data used by the GM. A context of at least 128,000 tokens is required. The information described here is current as of the specified date (24.11.2024).

	Cohere (https://coral.cohere.com/). Provides completely free access to Command R models.
	Getting started: model command-r-plus

	Google AI Studio (https://ai.google.dev/aistudio). All models have a free tier; see the Studio website. Try experimental models - they usually have a larger limit of free messages per day.
	Getting started: model gemini-1.5-pro

	Groq (https://groq.com/). Groq provides access to various free models but severely limits them by context. Currently, there are no free models on this site that work well in Legendarica, but this may change in the future. Paid models are likely to work well. See the list of models here: https://console.groq.com/docs/models

	Hugging Face (https://huggingface.co/models?inference=warm&other=conversational&sort=trending). A large repository for neural networks. The Inference API is used to access it, and only models that support it are available for the game. There is a limit on the number of messages per day, which increases with a paid subscription. If the models send unreadable text as a response, then either the model is very weak, or the temperature is high. In this case, try lowering the temperature or changing the model.
	Getting started: model Qwen/Qwen2.5-72B-Instruct (temperature 0.4)

	Mistral AI (https://mistral.ai/). The Mistral AI website offers participation in an "experimental" pricing plan, making all Mistral models free to use.
	Getting started: model mistral-large-latest

	OpenAI01 (https://openaio1api.com/ - main website: https://openai01.net/). Access to OpenAI o1-preview. There is no free tier. Upon registration, you receive 10 credits; 2 credits are charged per request to o1-preview.
	Model: o1-preview

	Openrouter (https://openrouter.ai/). Offers both free and paid models. Free models have a daily message limit.

	Websim. Depends on the neural network used by Websim. After Websim changed the AI API from Claude to something very weak, Websim can no longer guarantee a good game or even its execution, as the AI used is very weak. But this may change in the future.`,
            "throw-item": "Throw away",
            "inventory-delete": "Throw away this item",
            "skill_effect_label": "Effect",
            "npc-info-journal-label": "Diary",
            "quest-active-label": "Active",
            "quest-completed-label": "Completed",
            "quest-purposes-label": "Quest objectives:",
            "quest-reward-label": "Reward",
            "quest-punishment-label": "Punishment for failure",
            "use-npc-journal-label": "Use character diaries (disable to save tokens). Only works when the character list is enabled.",
            "use-quests-list-label": "Use quest list (disable to save tokens).",
            "make-game-quest-oriented-label": "Make the plot more quest-driven (a quest log should be included).",
            "stats-button-label": "Characteristics",
            "statsGroup-general-button-label": "General",
            "statsGroup-main-button-label": "Main",
            "statsGroup-secondary-button-label": "Secondary",
            "player-quests-button-label": "Quests",
            "image-loading-label": "Loading...",
            "ai-provider-streaming-error-label": "Error reading data from the neural network in streaming mode. Please try again or switch neural network providers.",
            "none-provider-selected-label": "No neural network provider selected. Please choose a neural network provider to start the game.",
            "system-instructions-explanaition": "These are system instructions for the selected neural network provider. They have the highest priority for the neural network.",
            "confirm_message_label": "Are you sure? Confirm your action.",
            "ai-none2-label": "Nothing selected",
            "ai-none-label": "Nothing selected",
            "ai-none3-label": "Nothing selected",
            "additional-settings-label2": "You can find additional settings in the right-side dropdown panel. Click the button in the lower right corner of the screen to view the settings panel.",
            "additional-settings-label3": "You can find additional settings in the right-side dropdown panel. Click the button in the lower right corner of the screen to view the settings panel.",
            "download-system-instructions-button-label": "Download system instructions to a file",
            "load-system-instructions-button-label": "Load system instructions from file",
            "skill-info-delete": "Forget this skill",
            "empty-ai-key-label": "API key is not set. Please enter the API key.",
            "inventory-count-label": "Quantity",
            "inventory-quality-label": "Quality",
            "inventory-durability-label": "Durability",
            "inventory-bonuses-label": "Bonuses",
            "inventory-price-label": "Price",
            "inventory-resource-label": "Resource",
            "throw-from-item": "from container (if the symbol -> is present, it indicates the path to the item, from container to container)",
            "inventory-container-open": "Open",
            "inventory-weight-label": "Weight (kilograms)",
            "inventory-capacity-label": "Capacity",
            "move-to-inventory": "Place in inventory",
            "place-item-to": "Place into ",
            "empty-container-label": "Empty",
            "content-description-label": "Content",
            "inventory-volume-label": "Volume (dm³)",
            "inventory-contents-count-label": "Available capacity",
            "inventory-contents-volume-label": "Available volume (dm³)",
            "inventory-item-inspect": "Inspect",
            "rarity-label": "Rarity",
            "age-label": "Age",
            "npc-info-worldview-label": "Worldview",
            "npc-info-race-label": "Race",
            "npc-info-class-label": "Class",
            "npc-info-stats-label": "Stats",
            "npc-info-skills-label": "Skills",
            "npc-info-effects-label": "Active Effects",
            "npc-info-appearanceDescription-label": "Appearance:",
            "npc-info-history-label": "History:",
            "npc-info-attitude-label": "Attitude towards player character:",
            "npc-info-tab-journal-label": "Journal",
            "npc-info-tab-memory-diary-label": "Chronicles",
            "npc-info-memory-diary-label": "Chronicles",
            "npc-delete-memory-diary": "Forget this character's chronicles",
            "use-npc-memories-diary-label": "Use character chronicles (disable to save tokens). Only works when character diary is enabled.",
            "status-name-label": "Name",
            "status-race-label": "Race",
            "status-class-label": "Class",
            "status-appearanceDescription-label": "Appearance:",
            "status-statusInSociety-label": "Social Status:",
            "status-positionInSociety-label": "Position in Society:",
            "status-affiliationWithOrganizations-label": "Affiliation with Organizations:",
        },
        "russian-language": {
            // placeholders
            "start-str": "Сила",
            "start-dex": "Ловкость",
            "start-con": "Выносливость",
            "start-intl": "Интеллект",
            "start-wis": "Мудрость",
            "start-trd": "Торговля",
            "start-per": "Восприятие",
            "start-luck": "Удача",
            "start-spd": "Скорость",
            "start-money": "Деньги",
            "start-exp": "Опыт",
            "start-atr": "Привлекательность",
            "start-location-description": "Опишите стартовую локацию (не обязательно)",
            "start-location": "Введите название стартовой локации (не обязательно)",
            "character-starting-inventory": "Опишите стартовый инвентарь (не обязательно)",
            "character-prehistory": "Введите предысторию персонажа (не обязательно)",
            "character-class-description": "Описание класса (не обязательно)",
            "character-class2": "Класс персонажа",
            "character-race-description": "Описание расы (не обязательно)",
            "character-race2": "Раса персонажа",
            "character-gender2": "Пол персонажа",
            "character-description": "Описание персонажа (не обязательно)",
            "character-name-my-game": "Имя персонажа",
            "world-description": "Введите описание мира и инструкции гейммастеру",
            "character-name": "Введите имя персонажа",
            "api-key": "В целях безопасности убедитесь, что используете АПИ ключ с низким лимитом по расходу",
            "api-key2": "В целях безопасности убедитесь, что используете АПИ ключ с низким лимитом по расходу",
            "api-key3": "В целях безопасности убедитесь, что используете АПИ ключ с низким лимитом по расходу",
            "ai-model": "Введите название модели нейросети",
            "ai-model2": "Введите название модели нейросети",
            "ai-model3": "Введите название модели нейросети",
            "max-gm-symbols": "10000 по умолчанию",
            "my-rules": "Введите свои правила и оставьте здесь. Со следующего хода они начнут действовать до тех пор, пока находятся здесь.",
            "user-input": "Говори свое действие, отважный искатель приключений...",
            "style-of-image-input": "Например: medieval, fantasy, neuropunk",
            "system-instructions": "Введите свои системные инструкции и оставьте здесь. Со следующего хода они начнут действовать до тех пор, пока находятся здесь.",
            "world-system-instructions": "Введите системные инструкции для нейросети (не обязательно)",

            // labels
            "style-of-image-label": "Стиль генерируемых картинок",
            "health-label": "Здоровье:",
            "level-label": "Уровень:",
            "strength-label": "Сила:",
            "dexterity-label": "Ловкость:",
            "wisdom-label": "Мудрость:",
            "perception-label": "Восприятие:",
            "trade-label": "Торговля:",
            "attractiveness-label": "Привлекательность:",
            "energy-label": "Энергия:",
            "exp-label": "Опыт:",
            "constitution-label": "Выносливость:",
            "speed-label": "Скорость:",
            "intelligence-label": "Интеллект:",
            "luck-label": "Удача:",
            "money-label": "Деньги:",
            "send-button": "Отправить",
            "resend-button": "Отправить сообщение повторно",

            "strength": "Сила",
            "dexterity": "Ловкость",
            "wisdom": "Мудрость",
            "perception": "Восприятие",
            "trade": "Торговля",
            "attractiveness": "Привлекательность",
            "constitution": "Выносливость",
            "speed": "Скорость",
            "intelligence": "Интеллект",
            "luck": "Удача",

            "create-setting": "Начать игру",
            "load-created-setting": "Загрузить сеттинг из файла",
            "save-created-setting": "Сохранить сеттинг в файл",
            "tts-mode-label": "Озвучка текста (работает не во всех браузерах)",
            "tts-mode-label2": "Озвучка текста (работает не во всех браузерах)",
            "tts-mode-label3": "Озвучка текста (работает не во всех браузерах)",

            "tooltip-rpg": "Если слайдер красного цвета - то включено. RPG - игровой режим. В RPG режиме геймплей заключается в прокачке персонажа, а навыки и инвентарь имеют ключевое значение. Если выключен, то игра проходит в режиме Roleplay, который заключается в выстраивании интересной художественной истории, а навыки и инвентарь имеют второстепенное значение. ",
            "tooltip-rpg2": "Если слайдер красного цвета - то включено. RPG - игровой режим. В RPG режиме геймплей заключается в прокачке персонажа, а навыки и инвентарь имеют ключевое значение. Если выключен, то игра проходит в режиме Roleplay, который заключается в выстраивании интересной художественной истории, а навыки и инвентарь имеют второстепенное значение. ",
            "nonmagic-mode-name": "В мире нет магии ",
            "tooltip-noMagic": "Если включено (красный цвет), то гейммастер выстраивает мир без магии и только с реалистичными способностями. Если выключено, то в мире будет магия и нереалистичные способности. ",
            "starting-parameters-label": "Стартовые параметры персонажа: ",
            "my-world-label": "Выдумайте свой мир или опишите один из известных существующих",
            "my-game": "Свой сеттинг",
            "load-savefile": "Загрузить файл",
            "load-character": "Загрузить автосейв",
            "random-character": "Случайный персонаж",
            "create-character": "Начать игру",
            "tooltip-class": `Класс влияет на генерацию пассивных умений при повышении уровня и на стартовые предметы: 

Варвар - Большой топор, Кожаная броня, Зелье лечения 

Бард - Лютня, Кинжал, Легкая броня, Зелье очарования 

Жрец - Булава, Щит, Кольчуга, Священный символ 

Друид - Деревянный посох, Кожаная броня, Мешочек с травами 

Воин - Длинный меч, Щит, Кольчуга, Зелье лечения 

Монах - Боевой посох, Монашеские одеяния, Четки для медитации 

Паладин - Длинный меч, Щит, Латные доспехи, Священный символ 

Следопыт - Длинный лук, Колчан со стрелами, Кожаная броня, Набор ловушек 

Плут - Короткий меч, Кинжал, Кожаная броня, Воровские инструменты 

Чародей - Огненный кинжал, Орб, Мантия, Зелье энергии 

Колдун - Магический фокус, Кожаная броня, Гримуар, Эльдритчский талисман 

Волшебник - Книга заклинаний, Волшебная палочка, Мантия, Свиток магической стрелы`,
            "tooltip-race": `Раса влияет на стартовую локацию, генерацию расового умения, сюжет и стартовые бонусы к навыкам и предметам:

Человек: Удача +2, Торговля +1, Восприятие +1, Мудрость -1, Интеллект -1,  Универсальный инструмент

Эльф: Ловкость +2, Скорость +1, Привлекательность +1, Сила -1, Выносливость -1,  Эльфийский плащ

Гном: Торговля +2, Сила +1, Выносливость +1, Ловкость -1, Скорость -1, Гномий эль

Орк: Сила +3, Выносливость +2, Интеллект -1, Мудрость -1, Привлекательность -1, Орочья боевая раскраска

Ящер: Выносливость +2, Скорость +1, Привлекательность -1, Масло для чешуи

Вампир: Восприятие +1, Привлекательность +1, Ловкость +1, Удача -1, Флакон крови

Голем: Сила +3, Выносливость +2, Интеллект -1, Привлекательность -1, Мудрость -1, Элементальное ядро`,
            "create-character-label": "Создайте своего персонажа",
            "api-key-button": "Показать на 10 секунд",
            "api-key-button2": "Показать на 10 секунд",
            "api-key-button3": "Показать на 10 секунд",
            "ai-model-label": "Модель нейросети",
            "ai-model-label2": "Модель нейросети",
            "ai-model-label3": "Модель нейросети",
            "max-gm-symbols-label": "Максимальное количество символов в сообщении гейммастера",
            "interface-language": "Язык игры",
            "interface-language2": "Язык игры",
            "image-mode-settings-label": "Генерация картинок (не влияет на количество запросов, так как используется бесплатный сервис)",
            "load-my-rules-button-label": "Загрузить правила из файла",
            "download-my-rules-button-label": "Скачать правила в файл",
            "my-rules-explanaition": "Здесь вы можете изменить или дополнить правила игры или просто повлиять на поведение ведущего. Просто введите тут инструкцию и оставьте. Например: 'В инвентаре персонажа должен быть список в виде отдельного предмета, в котором указаны вообще все бонусы в сумме со всех предметов в инвентаре, а если такого списка в инвентаре нет, то добавить его' или 'пусть в каждой локации будут монстры'. Предупреждение: внесённые изменения могут сломать какие-нибудь механики игры. А могут и не сломать. Дерзайте!",
            "clear-log": "Очистить лог. Почти не влияет на память гейммастера, так как он помнит только последние 5 сообщений лога",
            "clear-system-chat": "Удалить все красные сообщения из чата. Никак не влияет на память гейммастера",
            "clear-half-chat": "Очистить половину чата. Подробности из удаленного чата забудутся гейммастером. Сжатая информация, хранящаяся в описаниях локаций и предметов, не забудется. Вы можете записать отдельные события или сжатую историю приключений на отдельные листы бумаги в инвентаре перед удалением чата.",
            "settings-button-label": "Настройки",
            "load-box-button-label": "Загрузить игру",
            "save-box-button-lable": "Сохранить игру",
            "my-rules-button-label": "Свои правила (промпт)",
            "antilag-button-label": "Уменьшить лаги",
            "log-button-label": "Лог расчётов действий",
            "locations-button-label": "Локации",
            "inventory-button-label": "Инвентарь",
            "alert_cant_start": "Пожалуйста, заполните все поля перед созданием персонажа.",
            "api-key-label": "Ваш API ключ",
            "api-key-label2": "Ваш API ключ",
            "api-key-label3": "Ваш API ключ",
            "ai-provider-label": "Провайдер нейросети",
            "ai-provider-label2": "Провайдер нейросети",
            "ai-provider-label3": "Провайдер нейросети",
            "location-delete": "Забыть эту локацию",
            "player-status-label": "Статус",
            "status-purposes-label": "Возможные цели:",
            "player-npc-button-label": "Персонажи",
            "use-status-label": "Использовать статус (отключите для экономии токенов)",
            "use-npc-list-label": "Использовать список персонажей (отключите для экономии токенов)",
            "npc-delete": "Забыть этого персонажа",
            "npc-delete-journal": "Забыть дневник этого персонажа",

            // selectors
            "free-roam": "Свободное исследование (Делай что хочешь)",
            "mysterious-plague": "Таинственная чума",
            "missing-nobles": "Пропавшие дворяне",
            "haunted-village": "Проклятая деревня",
            "bandit-uprising": "Восстание бандитов",
            "ancient-ruins": "Древние руины",
            "political-intrigue": "Политические интриги",
            "dragon-threat": "Угроза дракона",
            "cursed-artifact": "Проклятый артефакт",
            "lost-expedition": "Потерянная экспедиция",
            "merchant-caravan": "Торговый караван",
            "rebellion": "Восстание",
            "prophecy": "Пророчество",
            "seaside-terror": "Ужас на побережье",
            "festival-sabotage": "Саботаж фестиваля",
            "hidden-cult": "Тайный культ",
            "elemental-chaos": "Стихийный хаос",
            "magical-academy": "Магическая академия",
            "royal-escort": "Королевский эскорт",
            "giant-invasion": "Вторжение великанов",
            "random": "Случайная кампания из списка",

            "wizard": "Волшебник",
            "warlock": "Колдун",
            "sorcerer": "Чародей",
            "rogue": "Плут",
            "ranger": "Следопыт",
            "paladin": "Паладин",
            "monk": "Монах",
            "fighter": "Воин",
            "druid": "Друид",
            "cleric": "Жрец",
            "bard": "Бард",
            "barbarian": "Варвар",
            "no-choosed-class": "Выберите класс",

            "golem": "Голем",
            "vampire": "Вампир",
            "lizardman": "Ящер",
            "orc": "Орк",
            "dwarf": "Гном",
            "elf": "Эльф",
            "human": "Человек",
            "no-choosed-race": "Выберите расу",

            "female": "Женский",
            "male": "Мужской",
            "no-choosed-gender": "Выберите пол",

            //not interface
            "item_notepad": "Блокнот для заметок",
            "item_notepad_description": "Блокнот для заметок",
            "game_starting_description": `---- АБСОЛЮТНАЯ LEGENDARICA ----\n\nНачинается новая игра. Вы вольны делать и говорить абсолютно всё, что вам вздумается. Однако, последствия не заставят себя долго ждать, особенно если у вашего персонажа не хватит навыков на вашу задумку. Вы можете стать героем, предпринимателем, вором, актёром, наёмным убийцей, фермером, королём и гораздо больше... Полная свобода действий.\n\nВстроенной памяти хватает на 30 последних посещённых локаций, NPC, квестов (завершенных) - старые будут будут удаляться. Нужные можно запомнить, нажав замочек слева от названия (в списке). \nУ каждой локации есть сложность, обозначенная цифрой в скобочках.\n\nНекоторые проверки навыков могут считаться успешными или неуспешными, даже если результат расчёта противоположен, потому что логика ситуации важнее случайности, но такая проверка всё равно будет влиять на последствия от такого успеха/неуспеха. После получения уровня персонажа случайным образом увеличивается случайный базовый параметр на 1 и на следующий ход генерируется новый пассивный навык. В процессе игры могут появиться вещи с бонусом к навыкам, которых нет в списке навыков, но такие бонусы могут распространяться на несколько навыков из списка: предмет с бонусом, например к проворству +1, может увеличивать и скорость и ловкость в разных проверках.\n\nВы можете в чате попросить ведущего исправить допущенную им ошибку, например неверно подсчитанные деньги, энергию и тд. Ведущий многое понимает, экспериментируйте.\n\nВы можете попробовать выстраивать свою инструкцию для ведущего под свои нуждны во вкладке 'Свои правила (промпт)'.\n\nИгра автоматически сохраняется каждые 5 минут. При загрузке игры ведущий помнит историю только из описания локаций, описания предметов, а так же списка NPC, дневника NPC, статуса персонажа, и журнала квестов. Это полезно, чтобы не перегружать ведущего. Но при желании вы можете расширить его послезагрузочную память таким образом, что перед сохранением запишите подробную историю последних событий на бумажку в инвентарь. И ведущий после загрузки увидит эту бумажку. Файл сохранения можно открыть в блокноте и изменить там данные - но перед тем как этим заняться, не забудьте сохранить резервную копию сохранения, чтобы оно не пропало при неудачном редактировании.\n\nДля неограниченного доступа к нейросетям вы можете воспользоваться одним из провайдеров нейросетей из списка.\nКоличество потраченных токенов за ход и за сессию можно посмотреть при наведении курсора на сообщение в логе действий.\n\nВы можете удалить это и любые другие сообщения, нажав на крестик в углу сообщения. Удалённые сообщения стираются из памяти ведущего.\n\nДанная игра представляет собой сильно модифицированную (поверьте мне, ОЧЕНЬ СИЛЬНО) версию игры от Существа. Вы можете ознакомиться с оригиналом по ссылке: https://websim.ai/@Creature/legendarica-v1-neural-sandbox\n\nПожалуйста, рассмотрите возможность отблагодарить меня (Lottarend - автор АБСОЛЮТНОЙ LEGENDARICA ), чтобы сделать мне приятно и замотивировать выпускать новые версии игры.`,
            "game_starting_donate": "Поблагодарить автора АБСОЛЮТНОЙ LEGENDARICA:\n\n Криптовалюта: TSH1v85VbFo6b8gzb2xKcHy7Lk5NYLqVYh (USDT TRC20)\n\nДругой способ: https://www.donationalerts.com/r/lottarend",
            "game_starting_discord": "В дискорде можно найти последнюю версию и обсудить игру https://discord.com/invite/JVshMaq3GG",
            "null_resend_message": "Где я? Кто я?",
            "item_not_descripted": "Предмет не изучен героем",
            "name_turn": "Ход",
            "name_answer_turn": "Ответ на ход",
            "turn_log_name": "Лог хода",
            "location_difficulty_label": "сложность",
            "message_after_load": "Где я? Перескажи кратко мою историю.",
            "gm_message_error": "Ошибка. Возможно, вы превысили ограничение по количеству сообщений ГМу: 10 за минуту или 20 за пять минут или 100 за 24 часа (информация о лимитах указана на момент обновления игры, она может меняться). Или ГМ сильно загружен. Или другая неизвестная ошибка. Пожалуйста, попробуйте снова",
            "big_axe": "Большой топор",
            "long_sword": "Длинный меч",
            "mace": "Булава",
            "shield": "Щит",
            "chainmail": "Кольчуга",
            "holy_symbol": "Священный символ",
            "wooden_staff": "Деревянный посох",
            "light_armor": "Легкая броня",
            "healing_potion": "Зелье исцеления",
            "charm_potion": "Зелье очарования",
            "fox_sneakers": "Кожаная броня",
            "fire_dagger": "Огненный кинжал",
            "orb": "Орб",
            "robe": "Мантия",
            "energy_potion": "Зелье энергии",
            "magical_focus": "Магический фокус",
            "grimuar": "Гримуар",
            "eldritch_talisman": "Эльдритчский талисман",
            "spellbook": "Книга заклинаний",
            "magical_wand": "Волшебная палочка",
            "scroll_of_magic_arrow": "Свиток магической стрелы",
            "battle_axe": "Боевой топор",
            "leather_armor": "Кожаная броня",
            "herb_pouch": "Мешочек с травами",
            "tunic": "Туника",
            "meditation_beads": "Четки для медитации",
            "trap_kit": "Набор ловушек",
            "thieves_tools": "Воровские инструменты",
            "Universal_tool": 'Универсальный инструмент',
            "Elven_cloak": 'Эльфийский плащ',
            "Dwarven_ale": 'Гномий эль',
            "Orcish_war_paint": 'Орочья боевая раскраска',
            "Scale_oil": 'Масло для чешуи',
            "Blood_vial": 'Флакон крови',
            "Elemental_core": 'Элементальное ядро',
            "lute": "Лютня",
            "dagger": "Кинжал",
            "staff": "Посох",
            "long_bow": "Длинный лук",
            "quiver_of_arrows": "Колчан со стрелами",
            "short_sword": "Короткий меч",
            "quality_unique": "Уникальное",
            "quality_legendary": "Легендарное",
            "quality_epic": "Эпическое",
            "quality_rare": "Редкое",
            "quality_good": "Хорошее",
            "quality_common": "Обычное",
            "quality_trash": "Мусор",

            "gm_message_error_full_gm_answer": "Нейросеть не смогла правильно оформить ответ для парсинга. Если ошибка часто повторяется, смените модель нейросети. Вот её полный ответ: \n\n",
            "other_skill_group": "Прочие",
            "skill_energy_cost": "Стоимость (в энергии)",
            "clear-status-label": "Очистить статус",
            "active-skills-button-label": "Активные навыки",
            "passive-skills-button-label": "Пассивные навыки",
            "status-effects-label": "Эффекты:",
            "tooltip-provider-ai": `Провайдеры нейросетей.
Для всех провайдеров, кроме Websim, вам нужно зарегистрироваться на соответствующем сайте и создать API ключ или Access Token. Обращайте внимание на контекст нейросети - у Легендарики очень большой промпт, и он только увеличивается со временем из-за истории чата и других данных, которые используются ГМ-ом. Нужен контекст как минимум 128 000 токенов. Информация, описанная здесь, актуальна на момент указанной даты (24.11.2024).

Cohere (https://coral.cohere.com/). Предоставляет полностью бесплатный доступ к моделям Command R.
С чего начать: модель command-r-plus

Google AI Studio (https://ai.google.dev/aistudio). Все модели имеют бесплатный лимит, смотрите на сайте студии. Попробуйте экспериментальные модели - они обычно имеют больший лимит бесплатных сообщений в день.
С чего начать: модель gemini-1.5-pro

Groq (https://groq.com/). Groq предоставляет доступ к различным бесплатным моделям, но сильно ограничивает их по контексту. Сейчас на этом сайте нет бесплатных моделей, которые бы хорошо работали в Легендарике, но все может измениться в будущем. Платные модели, скорее всего, работают хорошо. Смотрите список моделей здесь: https://console.groq.com/docs/models

Hugging Face (https://huggingface.co/models?inference=warm&other=conversational&sort=trending). Большой репозиторий для нейросетей. Для доступа к нему используется Inference API, и только те модели, которые поддерживают его, доступны для игры. Есть ограничение на количество сообщений в день, которое становится большим с платной подпиской. Если модели посылают нечитаемый текст в качестве ответа, значит либо модель очень слабая, либо температура высокая. В этом случае, попробуйте понизить температуру или сменить модель. 
С чего начать: модель Qwen/Qwen2.5-72B-Instruct  (температура 0.4)

Mistral AI (https://mistral.ai/). На сайте Mistral AI есть возможность принять участие в "экспериментальном" тарифном плане, что делает все модели Mistral бесплатными для использования.
С чего начать: модель mistral-large-latest

OpenAI01 (https://openaio1api.com/ - главный сайт: https://openai01.net/). Доступ к OpenAI o1-preview. Бесплатного тарифа нет. При регистрации дают 10 кредитов, 2 кредита стоит запрос к o1-preview.
Модель: o1-preview 

Openrouter (https://openrouter.ai/). Есть бесплатные модели, есть платные. У бесплатных моделей есть лимит сообщений в день.

Websim. Зависит от нейросети, которую использует Websim. После того, как Websim изменил AI API с Claude на нечто очень слабое, Websim больше не может гарантировать хорошую игру или вообще её проведение, поскольку используемый AI очень слаб. Но все может измениться в будущем.`,
            "tooltip-provider-ai2": `Провайдеры нейросетей.
Для всех провайдеров, кроме Websim, вам нужно зарегистрироваться на соответствующем сайте и создать API ключ или Access Token. Обращайте внимание на контекст нейросети - у Легендарики очень большой промпт, и он только увеличивается со временем из-за истории чата и других данных, которые используются ГМ-ом. Нужен контекст как минимум 128 000 токенов. Информация, описанная здесь, актуальна на момент указанной даты (24.11.2024).

Cohere (https://coral.cohere.com/). Предоставляет полностью бесплатный доступ к моделям Command R.
С чего начать: модель command-r-plus

Google AI Studio (https://ai.google.dev/aistudio). Все модели имеют бесплатный лимит, смотрите на сайте студии. Попробуйте экспериментальные модели - они обычно имеют больший лимит бесплатных сообщений в день.
С чего начать: модель gemini-1.5-pro

Groq (https://groq.com/). Groq предоставляет доступ к различным бесплатным моделям, но сильно ограничивает их по контексту. Сейчас на этом сайте нет бесплатных моделей, которые бы хорошо работали в Легендарике, но все может измениться в будущем. Платные модели, скорее всего, работают хорошо. Смотрите список моделей здесь: https://console.groq.com/docs/models

Hugging Face (https://huggingface.co/models?inference=warm&other=conversational&sort=trending). Большой репозиторий для нейросетей. Для доступа к нему используется Inference API, и только те модели, которые поддерживают его, доступны для игры. Есть ограничение на количество сообщений в день, которое становится большим с платной подпиской. Если модели посылают нечитаемый текст в качестве ответа, значит либо модель очень слабая, либо температура высокая. В этом случае, попробуйте понизить температуру или сменить модель. 
С чего начать: модель Qwen/Qwen2.5-72B-Instruct  (температура 0.4)

Mistral AI (https://mistral.ai/). На сайте Mistral AI есть возможность принять участие в "экспериментальном" тарифном плане, что делает все модели Mistral бесплатными для использования.
С чего начать: модель mistral-large-latest

OpenAI01 (https://openaio1api.com/ - главный сайт: https://openai01.net/). Доступ к OpenAI o1-preview. Бесплатного тарифа нет. При регистрации дают 10 кредитов, 2 кредита стоит запрос к o1-preview.
Модель: o1-preview 

Openrouter (https://openrouter.ai/). Есть бесплатные модели, есть платные. У бесплатных моделей есть лимит сообщений в день.

Websim. Зависит от нейросети, которую использует Websim. После того, как Websim изменил AI API с Claude на нечто очень слабое, Websim больше не может гарантировать хорошую игру или вообще её проведение, поскольку используемый AI очень слаб. Но все может измениться в будущем.`,
            "tooltip-provider-ai3": `Провайдеры нейросетей.
Для всех провайдеров, кроме Websim, вам нужно зарегистрироваться на соответствующем сайте и создать API ключ или Access Token. Обращайте внимание на контекст нейросети - у Легендарики очень большой промпт, и он только увеличивается со временем из-за истории чата и других данных, которые используются ГМ-ом. Нужен контекст как минимум 128 000 токенов. Информация, описанная здесь, актуальна на момент указанной даты (24.11.2024).

Cohere (https://coral.cohere.com/). Предоставляет полностью бесплатный доступ к моделям Command R.
С чего начать: модель command-r-plus

Google AI Studio (https://ai.google.dev/aistudio). Все модели имеют бесплатный лимит, смотрите на сайте студии. Попробуйте экспериментальные модели - они обычно имеют больший лимит бесплатных сообщений в день.
С чего начать: модель gemini-1.5-pro

Groq (https://groq.com/). Groq предоставляет доступ к различным бесплатным моделям, но сильно ограничивает их по контексту. Сейчас на этом сайте нет бесплатных моделей, которые бы хорошо работали в Легендарике, но все может измениться в будущем. Платные модели, скорее всего, работают хорошо. Смотрите список моделей здесь: https://console.groq.com/docs/models

Hugging Face (https://huggingface.co/models?inference=warm&other=conversational&sort=trending). Большой репозиторий для нейросетей. Для доступа к нему используется Inference API, и только те модели, которые поддерживают его, доступны для игры. Есть ограничение на количество сообщений в день, которое становится большим с платной подпиской. Если модели посылают нечитаемый текст в качестве ответа, значит либо модель очень слабая, либо температура высокая. В этом случае, попробуйте понизить температуру или сменить модель. 
С чего начать: модель Qwen/Qwen2.5-72B-Instruct  (температура 0.4)

Mistral AI (https://mistral.ai/). На сайте Mistral AI есть возможность принять участие в "экспериментальном" тарифном плане, что делает все модели Mistral бесплатными для использования.
С чего начать: модель mistral-large-latest

OpenAI01 (https://openaio1api.com/ - главный сайт: https://openai01.net/). Доступ к OpenAI o1-preview. Бесплатного тарифа нет. При регистрации дают 10 кредитов, 2 кредита стоит запрос к o1-preview.
Модель: o1-preview 

Openrouter (https://openrouter.ai/). Есть бесплатные модели, есть платные. У бесплатных моделей есть лимит сообщений в день.

Websim. Зависит от нейросети, которую использует Websim. После того, как Websim изменил AI API с Claude на нечто очень слабое, Websim больше не может гарантировать хорошую игру или вообще её проведение, поскольку используемый AI очень слаб. Но все может измениться в будущем.`,
            "throw-item": "Выбросить",
            "inventory-delete": "Выбросить этот предмет",
            "skill_effect_label": "Эффект",
            "npc-info-journal-label": "Дневник",
            "quest-active-label": "Активные",
            "quest-completed-label": "Завершенные",
            "quest-purposes-label": "Цели квеста:",
            "quest-reward-label": "Награда",
            "quest-punishment-label": "Наказание за неудачу",
            "use-npc-journal-label": "Использовать дневники персонажей (отключите для экономии токенов). Работает только при включенном списке персонажей.",
            "use-quests-list-label": "Использовать список квестов (отключите для экономии токенов).",
            "make-game-quest-oriented-label": "Сделать сюжет более квестоориентированным (необходимо включить список квестов).",
            "stats-button-label": "Характеристики",
            "statsGroup-general-button-label": "Общие",
            "statsGroup-main-button-label": "Основные",
            "statsGroup-secondary-button-label": "Вторичные",
            "player-quests-button-label": "Задания",
            "image-loading-label": "Загрузка...",
            "ai-provider-streaming-error-label": "Ошибка при чтении данных от нейросети в режиме стриминга данных. Попробуйте ещё раз или смените провайдер нейросети.",
            "none-provider-selected-label": "Ни один провайдер нейросети не выбран. Выберите провайдер нейросети, чтобы начать игру.",
            "system-instructions-explanaition": "Это системные инструкции для выбранного провайдера нейросети. Они имеют высший приоритет для нейросети.",
            "confirm_message_label": "Вы уверены? Подтвердите ваше действие.",
            "ai-none2-label": "Ничего не выбрано",
            "ai-none-label": "Ничего не выбрано",
            "ai-none3-label": "Ничего не выбрано",
            "additional-settings-label2": "Вы можете посмотреть дополнительные настройки в выпадающей панели справа. Нажмите на кнопку в нижнем правом углу экрана, чтобы увидеть панель настроек.",
            "additional-settings-label3": "Вы можете посмотреть дополнительные настройки в выпадающей панели справа. Нажмите на кнопку в нижнем правом углу экрана, чтобы увидеть панель настроек.",
            "download-system-instructions-button-label": "Скачать системные инструкции в файл",
            "load-system-instructions-button-label": "Загрузить системные инструкции из файла",
            "skill-info-delete": "Забыть этот навык",
            "empty-ai-key-label": "Не задан API ключ. Введите API ключ.",
            "inventory-count-label": "Количество",
            "inventory-quality-label": "Качество",
            "inventory-durability-label": "Прочность",
            "inventory-bonuses-label": "Эффекты",
            "inventory-price-label": "Цена",
            "inventory-resource-label": "Ресурс",
            "throw-from-item": "из контейнера (если присутствует символ ->, то он указывает путь к предмету, от контейнера к контейнеру)",
            "inventory-container-open": "Открыть",
            "inventory-weight-label": "Вес (килограммы)",
            "inventory-capacity-label": "Вместимость",
            "move-to-inventory": "Выложить в инвентарь",
            "place-item-to": "Положить в ",
            "empty-container-label": "Пусто",
            "content-description-label": "Содержимое",
            "inventory-volume-label": "Объем (дм³)",
            "inventory-contents-count-label": "Доступная вместимость",
            "inventory-contents-volume-label": "Доступный объём (дм³)",
            "inventory-item-inspect": "Осмотреть",
            "rarity-label": "Редкость",
            "age-label": "Возраст",
            "npc-info-worldview-label": "Мировоззрение",
            "npc-info-race-label": "Раса",
            "npc-info-class-label": "Класс",
            "npc-info-stats-label": "Характеристики",
            "npc-info-skills-label": "Навыки",
            "npc-info-effects-label": "Действующие эффекты",
            "npc-info-appearanceDescription-label": "Внешность:",
            "npc-info-history-label": "История:",
            "npc-info-attitude-label": "Отношение к персонажу игрока:",
            "npc-info-tab-journal-label": "Дневник",
            "npc-info-tab-memory-diary-label": "Хроники",
            "npc-info-memory-diary-label": "Хроники",
            "npc-delete-memory-diary": "Забыть хроники этого персонажа",
            "use-npc-memories-diary-label": "Использовать хроники персонажей (отключите для экономии токенов). Работает только при включенном дневнике персонажей.",
            "status-name-label": "Имя",
            "status-race-label": "Раса",
            "status-class-label": "Класс",
            "status-appearanceDescription-label": "Внешность:",
            "status-statusInSociety-label": "Положение в обществе:",
            "status-positionInSociety-label": "Позиция в обществе:",
            "status-affiliationWithOrganizations-label": "Принадлежность к организациям:",
        },
        "spanish-language": {
            // placeholders
            "start-str": "Fuerza",
            "start-dex": "Destreza",
            "start-con": "Constitución",
            "start-intl": "Inteligencia",
            "start-wis": "Sabiduría",
            "start-trd": "Comercio",
            "start-per": "Percepción",
            "start-luck": "Suerte",
            "start-spd": "Velocidad",
            "start-money": "Dinero",
            "start-exp": "Experiencia",
            "start-atr": "Atractivo",
            "start-location-description": "Describe la ubicación inicial (opcional)",
            "start-location": "Introduce el nombre de la ubicación inicial (opcional)",
            "character-starting-inventory": "Describe el inventario inicial (opcional)",
            "character-prehistory": "Introduce la historia previa del personaje (opcional)",
            "character-class-description": "Descripción de la clase (opcional)",
            "character-class2": "Clase del personaje",
            "character-race-description": "Descripción de la raza (opcional)",
            "character-race2": "Raza del personaje",
            "character-gender2": "Género del personaje",
            "character-description": "Descripción del personaje (opcional)",
            "character-name-my-game": "Nombre del personaje",
            "world-description": "Introduce la descripción del mundo e instrucciones para el maestro del juego",
            "character-name": "Introduce el nombre del personaje",
            "api-key": "Por razones de seguridad, asegúrate de usar una clave API con un límite de gasto bajo",
            "api-key2": "Por razones de seguridad, asegúrate de usar una clave API con un límite de gasto bajo",
            "api-key3": "Por razones de seguridad, asegúrate de usar una clave API con un límite de gasto bajo",
            "ai-model": "Ingrese el nombre del modelo de red neuronal",
            "ai-model2": "Ingrese el nombre del modelo de red neuronal",
            "ai-model3": "Ingrese el nombre del modelo de red neuronal",
            "max-gm-symbols": "10000 por defecto",
            "my-rules": "Introduce tus reglas y déjalas aquí. A partir del siguiente turno, se aplicarán mientras estén aquí.",
            "user-input": "Di tu acción, valiente aventurero...",
            "style-of-image-input": "Por ejemplo: medieval, fantasía, neuropunk",
            "system-instructions": "Introduce tus instrucciones del sistema y déjalas aquí. A partir del siguiente turno, estarán en efecto mientras permanezcan aquí.",
            "world-system-instructions": "Introduce instrucciones del sistema para la red neuronal (opcional)",

            // labels
            "style-of-image-label": "Estilo de las imágenes generadas",
            "health-label": "Salud:",
            "level-label": "Nivel:",
            "strength-label": "Fuerza:",
            "dexterity-label": "Destreza:",
            "wisdom-label": "Sabiduría:",
            "perception-label": "Percepción:",
            "trade-label": "Comercio:",
            "attractiveness-label": "Atractivo:",
            "energy-label": "Energía:",
            "exp-label": "Experiencia:",
            "constitution-label": "Constitución:",
            "speed-label": "Velocidad:",
            "intelligence-label": "Inteligencia:",
            "luck-label": "Suerte:",
            "money-label": "Dinero:",
            "send-button": "Enviar",
            "resend-button": "Reenviar mensaje",

            "strength": "Fuerza",
            "dexterity": "Destreza",
            "wisdom": "Sabiduría",
            "perception": "Percepción",
            "trade": "Comercio",
            "attractiveness": "Atractivo",
            "constitution": "Constitución",
            "speed": "Velocidad",
            "intelligence": "Inteligencia",
            "luck": "Suerte",

            "create-setting": "Iniciar juego",
            "load-created-setting": "Cargar configuración desde archivo",
            "save-created-setting": "Guardar configuración en archivo",
            "tts-mode-label": "Texto a voz (no funciona en todos los navegadores)",
            "tts-mode-label2": "Texto a voz (no funciona en todos los navegadores)",
            "tts-mode-label3": "Texto a voz (no funciona en todos los navegadores)",

            "tooltip-rpg": "Si el deslizador está en rojo, está activado. RPG es el modo de juego. En el modo RPG, la jugabilidad consiste en mejorar al personaje, y las habilidades e inventario son cruciales. Si está desactivado, el juego se desarrolla en modo Roleplay, que consiste en construir una historia interesante, y las habilidades e inventario tienen una importancia secundaria.",
            "tooltip-rpg2": "Si el deslizador está en rojo, está activado. RPG es el modo de juego. En el modo RPG, la jugabilidad consiste en mejorar al personaje, y las habilidades e inventario son cruciales. Si está desactivado, el juego se desarrolla en modo Roleplay, que consiste en construir una historia interesante, y las habilidades e inventario tienen una importancia secundaria.",
            "nonmagic-mode-name": "No hay magia en el mundo",
            "tooltip-noMagic": "Si está activado (color rojo), el maestro del juego construye un mundo sin magia y solo con habilidades realistas. Si está desactivado, habrá magia y habilidades no realistas en el mundo.",
            "starting-parameters-label": "Parámetros iniciales del personaje:",
            "my-world-label": "Inventa tu propio mundo o describe uno de los existentes conocidos",
            "my-game": "Tu propia configuración",
            "load-savefile": "Cargar archivo",
            "load-character": "Cargar autoguardado",
            "random-character": "Personaje aleatorio",
            "create-character": "Iniciar juego",
            "tooltip-class": `La clase afecta la generación de habilidades pasivas al subir de nivel y los objetos iniciales:

Bárbaro - Hacha grande, Armadura de cuero, Poción de curación

Bardo - Laúd, Daga, Armadura ligera, Poción de encantamiento

Clérigo - Maza, Escudo, Cota de malla, Símbolo sagrado

Druida - Bastón de madera, Armadura de cuero, Bolsa de hierbas

Guerrero - Espada larga, Escudo, Cota de malla, Poción de curación

Monje - Bastón de combate, Túnica de monje, Cuentas de meditación

Paladín - Espada larga, Escudo, Armadura de placas, Símbolo sagrado

Explorador - Arco largo, Carcaj con flechas, Armadura de cuero, Kit de trampas

Pícaro - Espada corta, Daga, Armadura de cuero, Herramientas de ladrón

Hechicero - Daga de fuego, Orbe, Túnica, Poción de energía

Brujo - Foco mágico, Armadura de cuero, Grimorio, Talismán eldritchiano

Mago - Libro de hechizos, Varita mágica, Túnica, Pergamino de flecha mágica`,
            "tooltip-race": `La raza afecta la ubicación inicial, la generación de habilidades raciales, la historia y las bonificaciones iniciales a las habilidades y objetos:
			
Humano: Suerte +2, Comercio +1, Percepción +1, Sabiduría -1, Inteligencia -1, Herramienta Universal

Elfo: Agilidad +2, Velocidad +1, Atractivo +1, Fuerza -1, Resistencia -1, Capa Élfica

Enano: Comercio +2, Fuerza +1, Resistencia +1, Agilidad -1, Velocidad -1, Cerveza Enana

Orco: Fuerza +3, Resistencia +2, Inteligencia -1, Sabiduría -1, Atractivo -1, Pintura de Guerra Orca

Lagarto: Resistencia +2, Velocidad +1, Atractivo -1, Aceite de Escamas

Vampiro: Percepción +1, Atractivo +1, Agilidad +1, Suerte -1, Vial de Sangre

Golem: Fuerza +3, Resistencia +2, Inteligencia -1, Atractivo -1, Sabiduría -1, Núcleo Elemental`,
            "create-character-label": "Crea tu personaje",
            "api-key-button": "Mostrar por 10 segundos",
            "api-key-button2": "Mostrar por 10 segundos",
            "api-key-button3": "Mostrar por 10 segundos",
            "ai-model-label": "Modelo de IA",
            "ai-model-label2": "Modelo de IA",
            "ai-model-label3": "Modelo de IA",
            "max-gm-symbols-label": "Número máximo de símbolos en el mensaje del maestro del juego",
            "interface-language": "Idioma del juego",
            "interface-language2": "Idioma del juego",
            "image-mode-settings-label": "Generación de imágenes (no afecta el número de solicitudes, ya que se utiliza un servicio gratuito)",
            "load-my-rules-button-label": "Cargar reglas desde archivo",
            "download-my-rules-button-label": "Descargar reglas en archivo",
            "my-rules-explanaition": "Aquí puedes modificar o complementar las reglas del juego o simplemente influir en el comportamiento del maestro. Simplemente ingresa una instrucción aquí y déjala. Por ejemplo: 'En el inventario del personaje debe haber una lista como un elemento separado que enumere todos los bonos en total de todos los elementos en el inventario, y si no hay tal lista en el inventario, agrégala' o 'que haya monstruos en cada ubicación'. Advertencia: los cambios realizados pueden romper algunas mecánicas del juego. O pueden no romperlas. ¡Atrévete!",
            "clear-log": "Limpiar registro. Casi no afecta la memoria del maestro del juego, ya que solo recuerda los últimos 5 mensajes del registro",
            "clear-system-chat": "Eliminar todos los mensajes rojos del chat. No afecta en absoluto la memoria del maestro del juego",
            "clear-half-chat": "Limpiar la mitad del chat. Los detalles del chat eliminado serán olvidados por el maestro del juego. La información condensada almacenada en las descripciones de ubicaciones y objetos no se olvidará. Puedes escribir eventos individuales o una historia condensada de las aventuras en hojas de papel separadas en el inventario antes de eliminar el chat.",
            "settings-button-label": "Configuración",
            "load-box-button-label": "Cargar juego",
            "save-box-button-lable": "Guardar juego",
            "my-rules-button-label": "Mis reglas (prompt)",
            "antilag-button-label": "Reducir retrasos",
            "log-button-label": "Registro de cálculos de acciones",
            "locations-button-label": "Ubicaciones",
            "inventory-button-label": "Inventario",
            "alert_cant_start": "Por favor, completa todos los campos antes de crear el personaje.",
            "api-key-label": "Tu clave API",
            "api-key-label2": "Tu clave API",
            "api-key-label3": "Tu clave API",
            "ai-provider-label": "Proveedor de red neuronal",
            "ai-provider-label2": "Proveedor de red neuronal",
            "ai-provider-label3": "Proveedor de red neuronal",
            "location-delete": "Olvidar esta ubicación",
            "player-status-label": "Estado",
            "status-purposes-label": "Posibles propósitos:",
            "player-npc-button-label": "Personajes",
            "use-status-label": "Usar estado (deshabilitar para guardar tokens)",
            "use-npc-list-label": "Usar lista de personajes (deshabilitar para guardar tokens)",
            "npc-delete": "Olvídate de este personaje",
            "npc-delete-journal": "Olvida el diario de este personaje",

            // selectors
            "free-roam": "Exploración libre (Haz lo que quieras)",
            "mysterious-plague": "Plaga misteriosa",
            "missing-nobles": "Nobles desaparecidos",
            "haunted-village": "Aldea embrujada",
            "bandit-uprising": "Levantamiento de bandidos",
            "ancient-ruins": "Ruinas antiguas",
            "political-intrigue": "Intriga política",
            "dragon-threat": "Amenaza de dragón",
            "cursed-artifact": "Artefacto maldito",
            "lost-expedition": "Expedición perdida",
            "merchant-caravan": "Caravana de mercaderes",
            "rebellion": "Rebelión",
            "prophecy": "Profecía",
            "seaside-terror": "Terror en la costa",
            "festival-sabotage": "Sabotaje del festival",
            "hidden-cult": "Culto oculto",
            "elemental-chaos": "Caos elemental",
            "magical-academy": "Academia mágica",
            "royal-escort": "Escolta real",
            "giant-invasion": "Invasión de gigantes",
            "random": "Campaña aleatoria de la lista",

            "wizard": "Mago",
            "warlock": "Brujo",
            "sorcerer": "Hechicero",
            "rogue": "Pícaro",
            "ranger": "Explorador",
            "paladin": "Paladín",
            "monk": "Monje",
            "fighter": "Guerrero",
            "druid": "Druida",
            "cleric": "Clérigo",
            "bard": "Bardo",
            "barbarian": "Bárbaro",
            "no-choosed-class": "Elige una clase",

            "golem": "Gólem",
            "vampire": "Vampiro",
            "lizardman": "Hombre lagarto",
            "orc": "Orco",
            "dwarf": "Enano",
            "elf": "Elfo",
            "human": "Humano",
            "no-choosed-race": "Elige una raza",

            "female": "Femenino",
            "male": "Masculino",
            "no-choosed-gender": "Elige un género",

            //not interface
            "item_notepad": "Bloc de notas",
            "item_notepad_description": "Bloc de notas",
            "game_starting_description": `---- ABSOLUTE LEGENDARICA ----\n\n Comienza un nuevo juego. Eres libre de hacer y decir absolutamente todo lo que quieras. Sin embargo, las consecuencias no tardarán en llegar, especialmente si tu personaje no tiene las habilidades suficientes para tu idea. Puedes ser un héroe, un emprendedor, un ladrón, un actor, un asesino a sueldo, un granjero, un rey y mucho más... Libertad total de acción.\n\n La memoria integrada es suficiente para las últimas 30 ubicaciones visitadas, NPC, misiones (completadas): las antiguas se eliminarán. Puedes recordar las que necesites haciendo clic en el candado a la izquierda del nombre (en la lista). \nCada ubicación tiene un nivel de dificultad indicado por un número entre paréntesis.\n\n Algunas pruebas de habilidad pueden considerarse exitosas o fallidas incluso si el resultado del cálculo es lo contrario, porque la lógica de la situación es más importante que la aleatoriedad, pero dicha prueba seguirá afectando las consecuencias de dicho éxito/fracaso. Después de que un personaje sube de nivel, un parámetro base aleatorio se incrementa aleatoriamente en 1 y se genera una nueva habilidad pasiva en el siguiente turno. Durante el juego, pueden aparecer objetos con bonificaciones a habilidades que no están en la lista de habilidades, pero dichas bonificaciones pueden aplicarse a varias habilidades de la lista: un objeto con una bonificación, por ejemplo, a agilidad +1, puede aumentar tanto la velocidad como la destreza en diferentes pruebas.\n\n Puedes pedirle al anfitrión en el chat que corrija un error que haya cometido, como dinero, energía, etc. mal calculados. El anfitrión entiende mucho, así que no dudes en experimentar.\n\n Puedes intentar construir tus propias instrucciones para el anfitrión para que se adapten a tus necesidades en la pestaña 'Tus reglas (prompt)'\n\n El juego se guarda automáticamente cada 5 minutos. Al cargar el juego, el anfitrión recuerda la historia solo de la descripción de las ubicaciones, las descripciones de los objetos, así como la lista de NPC, el diario de los NPC, el estado del personaje y el registro de misiones. Esto es útil para evitar sobrecargar al anfitrión. Pero si quieres, puedes ampliar su memoria posterior a la carga de tal manera que antes de guardar, escribas una historia detallada de los últimos eventos en un trozo de papel en tu inventario. Y el anfitrión verá este trozo de papel después de cargar. El archivo guardado se puede abrir en el Bloc de notas y los datos se pueden cambiar allí, pero antes de hacer esto, no olvides guardar una copia de seguridad de la partida guardada para que no desaparezca si la edición no tiene éxito.\n\n Para un acceso ilimitado a las redes neuronales, puedes usar uno de los proveedores de redes neuronales de la lista.\nEl número de tokens gastados por turno y por sesión se puede ver pasando el cursor sobre el mensaje en el registro de acciones.\n\n Puedes eliminar este y cualquier otro mensaje haciendo clic en la cruz en la esquina del mensaje. Los mensajes eliminados se borran de la memoria del anfitrión.\n\n Este juego es una versión muy modificada (créeme, MUY MUCHO) del juego de Creature. Puedes consultar el original en el enlace: https://websim.ai/@Creature/legendarica-v1-neural-sandbox\n\n Por favor, considera agradecerme (Lottarend - el autor de ABSOLUTE LEGENDARICA) para hacerme feliz y motivarme a lanzar nuevas versiones del juego.`,
            "game_starting_donate": "Agradecer al autor de ABSOLUTE LEGENDARICA:\n\n Criptomoneda: TSH1v85VbFo6b8gzb2xKcHy7Lk5NYLqVYh (USDT TRC20)\n\nOtra forma: https://www.donationalerts.com/r/lottarend",
            "game_starting_discord": "En Discord puedes encontrar la última versión y discutir el juego https://discord.com/invite/JVshMaq3GG",
            "null_resend_message": "¿Dónde estoy? ¿Quién soy?",
            "item_not_descripted": "El objeto no ha sido estudiado por el héroe",
            "name_turn": "Turno",
            "name_answer_turn": "Respuesta al turno",
            "turn_log_name": "Registro del turno",
            "location_difficulty_label": "dificultad",
            "message_after_load": "¿Dónde estoy? Recuéntame brevemente mi historia.",
            "gm_message_error": "Error. Es posible que hayas excedido el límite de mensajes al GM: 10 por minuto o 20 por cinco minutos o 100 por 24 horas (la información sobre los límites es a la fecha de actualización del juego, puede cambiar). O el GM está muy ocupado. O algún otro error desconocido. Por favor, inténtalo de nuevo",
            "big_axe": "Hacha grande",
            "long_sword": "Espada larga",
            "mace": "Maza",
            "shield": "Escudo",
            "chainmail": "Cota de malla",
            "holy_symbol": "Símbolo sagrado",
            "wooden_staff": "Bastón de madera",
            "light_armor": "Armadura ligera",
            "healing_potion": "Poción de curación",
            "charm_potion": "Poción de encantamiento",
            "fox_sneakers": "Armadura de cuero",
            "fire_dagger": "Daga de fuego",
            "orb": "Orbe",
            "robe": "Túnica",
            "energy_potion": "Poción de energía",
            "magical_focus": "Foco mágico",
            "grimuar": "Grimorio",
            "eldritch_talisman": "Talismán eldritchiano",
            "spellbook": "Libro de hechizos",
            "magical_wand": "Varita mágica",
            "scroll_of_magic_arrow": "Pergamino de flecha mágica",
            "battle_axe": "Hacha de batalla",
            "leather_armor": "Armadura de cuero",
            "herb_pouch": "Bolsa de hierbas",
            "tunic": "Túnica",
            "meditation_beads": "Cuentas de meditación",
            "trap_kit": "Kit de trampas",
            "thieves_tools": "Herramientas de ladrón",
            "Universal_tool": 'Herramienta universal',
            "Elven_cloak": 'Capa élfica',
            "Dwarven_ale": 'Cerveza enana',
            "Orcish_war_paint": 'Pintura de guerra orca',
            "Scale_oil": 'Aceite para escamas',
            "Blood_vial": 'Vial de sangre',
            "Elemental_core": 'Núcleo elemental',
            "lute": "Laúd",
            "dagger": "Daga",
            "staff": "Bastón",
            "long_bow": "Arco largo",
            "quiver_of_arrows": "Carcaj de flechas",
            "short_sword": "Espada corta",
            "quality_unique": "Único",
            "quality_legendary": "Legendario",
            "quality_epic": "Épico",
            "quality_rare": "Raro",
            "quality_good": "Bueno",
            "quality_common": "Común",
            "quality_trash": "Basura",

            "gm_message_error_full_gm_answer": "La red neuronal no pudo formatear correctamente la respuesta para el análisis. Si el error se repite con frecuencia, cambia el modelo de red neuronal. Aquí está su respuesta completa: \n\n",
            "other_skill_group": "Otro",
            "skill_energy_cost": "Costo (en energía)",
            "clear-status-label": "Borrar estado",
            "active-skills-button-label": "Habilidades activas",
            "passive-skills-button-label": "Habilidades pasivas",
            "status-effects-label": "Efectos:",
            "tooltip-provider-ai": `Proveedores de Redes Neuronales

Para todos los proveedores excepto Websim, necesitas registrarte en el sitio web respectivo y crear una clave API o Token de Acceso. Presta atención al contexto de la red neuronal: Legendarica utiliza un prompt muy grande, y este solo aumenta con el tiempo debido al historial del chat y otros datos utilizados por el GM. Se requiere un contexto de al menos 128,000 tokens. La información descrita aquí es actual a la fecha especificada (24.11.2024).

Cohere (https://coral.cohere.com/). Proporciona acceso completamente gratuito a los modelos Command R.
Para empezar: modelo command-r-plus

Google AI Studio (https://ai.google.dev/aistudio). Todos los modelos tienen un límite gratuito; consulta el sitio web de Studio. Prueba los modelos experimentales, generalmente tienen un límite mayor de mensajes gratuitos por día.
Para empezar: modelo gemini-1.5-pro

Groq (https://groq.com/). Groq proporciona acceso a varios modelos gratuitos, pero los limita severamente por contexto. Actualmente, no hay modelos gratuitos en este sitio que funcionen bien en Legendarica, pero esto puede cambiar en el futuro. Es probable que los modelos de pago funcionen bien. Consulta la lista de modelos aquí: https://console.groq.com/docs/models

Hugging Face (https://huggingface.co/models?inference=warm&other=conversational&sort=trending). Un gran repositorio para redes neuronales. Se utiliza la API de Inference para acceder a él, y solo los modelos que la soportan están disponibles para el juego. Hay un límite en la cantidad de mensajes por día, que aumenta con una suscripción de pago. Si los modelos envían texto ilegible como respuesta, entonces o el modelo es muy débil o la temperatura es alta. En este caso, intenta bajar la temperatura o cambiar de modelo.
Para empezar: modelo Qwen/Qwen2.5-72B-Instruct (temperatura 0.4)

Mistral AI (https://mistral.ai/). El sitio web de Mistral AI ofrece la participación en un plan de precios "experimental", lo que hace que todos los modelos de Mistral sean gratuitos.
Para empezar: modelo mistral-large-latest

OpenAI01 (https://openaio1api.com/ - sitio web principal: https://openai01.net/). Acceso a OpenAI o1-preview. No hay un plan gratuito. Al registrarte, recibes 10 créditos; se cobran 2 créditos por solicitud a o1-preview.
Modelo: o1-preview

Openrouter (https://openrouter.ai/). Ofrece modelos gratuitos y de pago. Los modelos gratuitos tienen un límite diario de mensajes.

Websim. Depende de la red neuronal utilizada por Websim. Después de que Websim cambió la API de IA de Claude a algo muy débil, Websim ya no puede garantizar un buen juego o siquiera su ejecución, ya que la IA utilizada es muy débil. Pero esto puede cambiar en el futuro.`,
            "tooltip-provider-ai2": `Proveedores de Redes Neuronales

Para todos los proveedores excepto Websim, necesitas registrarte en el sitio web respectivo y crear una clave API o Token de Acceso. Presta atención al contexto de la red neuronal: Legendarica utiliza un prompt muy grande, y este solo aumenta con el tiempo debido al historial del chat y otros datos utilizados por el GM. Se requiere un contexto de al menos 128,000 tokens. La información descrita aquí es actual a la fecha especificada (24.11.2024).

Cohere (https://coral.cohere.com/). Proporciona acceso completamente gratuito a los modelos Command R.
Para empezar: modelo command-r-plus

Google AI Studio (https://ai.google.dev/aistudio). Todos los modelos tienen un límite gratuito; consulta el sitio web de Studio. Prueba los modelos experimentales, generalmente tienen un límite mayor de mensajes gratuitos por día.
Para empezar: modelo gemini-1.5-pro

Groq (https://groq.com/). Groq proporciona acceso a varios modelos gratuitos, pero los limita severamente por contexto. Actualmente, no hay modelos gratuitos en este sitio que funcionen bien en Legendarica, pero esto puede cambiar en el futuro. Es probable que los modelos de pago funcionen bien. Consulta la lista de modelos aquí: https://console.groq.com/docs/models

Hugging Face (https://huggingface.co/models?inference=warm&other=conversational&sort=trending). Un gran repositorio para redes neuronales. Se utiliza la API de Inference para acceder a él, y solo los modelos que la soportan están disponibles para el juego. Hay un límite en la cantidad de mensajes por día, que aumenta con una suscripción de pago. Si los modelos envían texto ilegible como respuesta, entonces o el modelo es muy débil o la temperatura es alta. En este caso, intenta bajar la temperatura o cambiar de modelo.
Para empezar: modelo Qwen/Qwen2.5-72B-Instruct (temperatura 0.4)

Mistral AI (https://mistral.ai/). El sitio web de Mistral AI ofrece la participación en un plan de precios "experimental", lo que hace que todos los modelos de Mistral sean gratuitos.
Para empezar: modelo mistral-large-latest

OpenAI01 (https://openaio1api.com/ - sitio web principal: https://openai01.net/). Acceso a OpenAI o1-preview. No hay un plan gratuito. Al registrarte, recibes 10 créditos; se cobran 2 créditos por solicitud a o1-preview.
Modelo: o1-preview

Openrouter (https://openrouter.ai/). Ofrece modelos gratuitos y de pago. Los modelos gratuitos tienen un límite diario de mensajes.

Websim. Depende de la red neuronal utilizada por Websim. Después de que Websim cambió la API de IA de Claude a algo muy débil, Websim ya no puede garantizar un buen juego o siquiera su ejecución, ya que la IA utilizada es muy débil. Pero esto puede cambiar en el futuro.`,
            "tooltip-provider-ai3": `Proveedores de Redes Neuronales

Para todos los proveedores excepto Websim, necesitas registrarte en el sitio web respectivo y crear una clave API o Token de Acceso. Presta atención al contexto de la red neuronal: Legendarica utiliza un prompt muy grande, y este solo aumenta con el tiempo debido al historial del chat y otros datos utilizados por el GM. Se requiere un contexto de al menos 128,000 tokens. La información descrita aquí es actual a la fecha especificada (24.11.2024).

Cohere (https://coral.cohere.com/). Proporciona acceso completamente gratuito a los modelos Command R.
Para empezar: modelo command-r-plus

Google AI Studio (https://ai.google.dev/aistudio). Todos los modelos tienen un límite gratuito; consulta el sitio web de Studio. Prueba los modelos experimentales, generalmente tienen un límite mayor de mensajes gratuitos por día.
Para empezar: modelo gemini-1.5-pro

Groq (https://groq.com/). Groq proporciona acceso a varios modelos gratuitos, pero los limita severamente por contexto. Actualmente, no hay modelos gratuitos en este sitio que funcionen bien en Legendarica, pero esto puede cambiar en el futuro. Es probable que los modelos de pago funcionen bien. Consulta la lista de modelos aquí: https://console.groq.com/docs/models

Hugging Face (https://huggingface.co/models?inference=warm&other=conversational&sort=trending). Un gran repositorio para redes neuronales. Se utiliza la API de Inference para acceder a él, y solo los modelos que la soportan están disponibles para el juego. Hay un límite en la cantidad de mensajes por día, que aumenta con una suscripción de pago. Si los modelos envían texto ilegible como respuesta, entonces o el modelo es muy débil o la temperatura es alta. En este caso, intenta bajar la temperatura o cambiar de modelo.
Para empezar: modelo Qwen/Qwen2.5-72B-Instruct (temperatura 0.4)

Mistral AI (https://mistral.ai/). El sitio web de Mistral AI ofrece la participación en un plan de precios "experimental", lo que hace que todos los modelos de Mistral sean gratuitos.
Para empezar: modelo mistral-large-latest

OpenAI01 (https://openaio1api.com/ - sitio web principal: https://openai01.net/). Acceso a OpenAI o1-preview. No hay un plan gratuito. Al registrarte, recibes 10 créditos; se cobran 2 créditos por solicitud a o1-preview.
Modelo: o1-preview

Openrouter (https://openrouter.ai/). Ofrece modelos gratuitos y de pago. Los modelos gratuitos tienen un límite diario de mensajes.

Websim. Depende de la red neuronal utilizada por Websim. Después de que Websim cambió la API de IA de Claude a algo muy débil, Websim ya no puede garantizar un buen juego o siquiera su ejecución, ya que la IA utilizada es muy débil. Pero esto puede cambiar en el futuro.`,
            "throw-item": "Tira la",
            "inventory-delete": "Tira este objeto",
            "skill_effect_label": "Efecto",
            "npc-info-journal-label": "Diario",
            "quest-active-label": "Activo",
            "quest-completed-label": "Terminado",
            "quest-purposes-label": "Objetivos de la misión:",
            "quest-reward-label": "Premio",
            "quest-punishment-label": "Castigo por el fracaso",
            "use-npc-journal-label": "Usar diarios de personaje (desactivar para ahorrar tokens). Solo funciona cuando la lista de personajes está activada.",
            "use-quests-list-label": "Usar la lista de misiones (desactivar para ahorrar tokens).",
            "make-game-quest-oriented-label": "Hacer la trama más orientada a misiones (se debe incluir una lista de misiones/un registro de misiones).",
            "stats-button-label": "Características",
            "statsGroup-general-button-label": "General",
            "statsGroup-main-button-label": "Principales",
            "statsGroup-secondary-button-label": "Secundarias",
            "player-quests-button-label": "Tareas",
            "image-loading-label": "Cargando...",
            "ai-provider-streaming-error-label": "Error al leer datos de la red neuronal en modo de transmisión. Inténtelo de nuevo o cambie de proveedor de red neuronal.",
            "none-provider-selected-label": "No se ha seleccionado ningún proveedor de red neuronal. Por favor, selecciona un proveedor de red neuronal para comenzar el juego.",
            "system-instructions-explanaition": "Estas son instrucciones del sistema para el proveedor de la red neuronal seleccionado. Tienen la máxima prioridad para la red neuronal.",
            "confirm_message_label": "¿Está seguro? Confirme su acción.",
            "ai-none2-label": "Nada seleccionado.",
            "ai-none-label": "Nada seleccionado.",
            "ai-none3-label": "Nada seleccionado.",
            "additional-settings-label2": "Puede encontrar configuraciones adicionales en el panel desplegable del lado derecho. Haga clic en el botón en la esquina inferior derecha de la pantalla para ver el panel de configuración.",
            "additional-settings-label3": "Puede encontrar configuraciones adicionales en el panel desplegable del lado derecho. Haga clic en el botón en la esquina inferior derecha de la pantalla para ver el panel de configuración.",
            "download-system-instructions-button-label": "Descargar las instrucciones del sistema a un archivo",
            "load-system-instructions-button-label": "Cargar instrucciones del sistema desde archivo",
            "skill-info-delete": "Olvidar esta habilidad",
            "empty-ai-key-label": "No se ha establecido la clave API. Por favor, introduce la clave API.",
            "inventory-count-label": "Cantidad",
            "inventory-quality-label": "Calidad",
            "inventory-durability-label": "Durabilidad",
            "inventory-bonuses-label": "Bonificaciones",
            "inventory-price-label": "Precio",
            "inventory-resource-label": "Recurso",
            "throw-from-item": "desde el contenedor (si está presente el símbolo ->, indica el camino al elemento, de contenedor a contenedor)",
            "inventory-container-open": "Abrir",
            "inventory-weight-label": "Peso (kilogramos)",
            "inventory-capacity-label": "Capacidad",
            "move-to-inventory": "Poner en el inventario",
            "place-item-to": "Colocar en ",
            "empty-container-label": "Vacío",
            "content-description-label": "Contenido",
            "inventory-volume-label": "Volumen (dm³)",
            "inventory-contents-count-label": "Capacidad disponible",
            "inventory-contents-volume-label": "Volumen disponible (dm³)",
            "inventory-item-inspect": "Inspeccionar",
            "rarity-label": "Rareza",
            "age-label": "Edad",
            "npc-info-worldview-label": "Cosmovisión",
            "npc-info-race-label": "Raza",
            "npc-info-class-label": "Clase",
            "npc-info-stats-label": "Características",
            "npc-info-skills-label": "Habilidades",
            "npc-info-effects-label": "Efectos Activos",
            "npc-info-appearanceDescription-label": "Apariencia:",
            "npc-info-history-label": "Historia:",
            "npc-info-attitude-label": "Actitud hacia el personaje del jugador:",
            "npc-info-tab-journal-label": "Diario",
            "npc-info-tab-memory-diary-label": "Crónicas",
            "npc-info-memory-diary-label": "Crónicas",
            "npc-delete-memory-diary": "Olvidar las crónicas de este personaje",
            "use-npc-memories-diary-label": "Usar crónicas de personajes (desactivar para ahorrar tokens). Solo funciona cuando el diario de personajes está habilitado.",
            "status-name-label": "Nombre",
            "status-race-label": "Raza",
            "status-class-label": "Clase",
            "status-appearanceDescription-label": "Apariencia:",
            "status-statusInSociety-label": "Estado Social:",
            "status-positionInSociety-label": "Posición en la Sociedad:",
            "status-affiliationWithOrganizations-label": "Afiliación con Organizaciones:",
        },
        "portuguese-language": {
            // placeholders
            "start-str": "Força",
            "start-dex": "Destreza",
            "start-con": "Constituição",
            "start-intl": "Inteligência",
            "start-wis": "Sabedoria",
            "start-trd": "Comércio",
            "start-per": "Percepção",
            "start-luck": "Sorte",
            "start-spd": "Velocidade",
            "start-money": "Dinheiro",
            "start-exp": "Experiência",
            "start-atr": "Atratividade",
            "start-location-description": "Descreva a localização inicial (opcional)",
            "start-location": "Digite o nome da localização inicial (opcional)",
            "character-starting-inventory": "Descreva o inventário inicial (opcional)",
            "character-prehistory": "Digite a pré-história do personagem (opcional)",
            "character-class-description": "Descrição da classe (opcional)",
            "character-class2": "Classe do personagem",
            "character-race-description": "Descrição da raça (opcional)",
            "character-race2": "Raça do personagem",
            "character-gender2": "Gênero do personagem",
            "character-description": "Descrição do personagem (opcional)",
            "character-name-my-game": "Nome do personagem",
            "world-description": "Digite a descrição do mundo e instruções para o mestre",
            "character-name": "Digite o nome do personagem",
            "api-key": "Por segurança, certifique-se de usar uma chave API com limite baixo de gasto",
            "api-key2": "Por segurança, certifique-se de usar uma chave API com limite baixo de gasto",
            "api-key3": "Por segurança, certifique-se de usar uma chave API com limite baixo de gasto",
            "ai-model": "Insira o nome do modelo de rede neural",
            "ai-model2": "Insira o nome do modelo de rede neural",
            "ai-model3": "Insira o nome do modelo de rede neural",
            "max-gm-symbols": "10000 por padrão",
            "my-rules": "Digite suas regras e deixe-as aqui. A partir do próximo turno, elas entrarão em vigor enquanto estiverem aqui.",
            "user-input": "Fale sua ação, corajoso aventureiro...",
            "style-of-image-input": "Por exemplo: medieval, fantasia, neuropunk",
            "system-instructions": "Insira suas instruções do sistema e deixe-as aqui. A partir da próxima rodada, elas entrarão em vigor enquanto permanecerem aqui.",
            "world-system-instructions": "Insira instruções de sistema para a rede neural (opcional)",

            // labels
            "style-of-image-label": "Estilo das imagens geradas",
            "health-label": "Saúde:",
            "level-label": "Nível:",
            "strength-label": "Força:",
            "dexterity-label": "Destreza:",
            "wisdom-label": "Sabedoria:",
            "perception-label": "Percepção:",
            "trade-label": "Comércio:",
            "attractiveness-label": "Atratividade:",
            "energy-label": "Energia:",
            "exp-label": "Experiência:",
            "constitution-label": "Constituição:",
            "speed-label": "Velocidade:",
            "intelligence-label": "Inteligência:",
            "luck-label": "Sorte:",
            "money-label": "Dinheiro:",
            "send-button": "Enviar",
            "resend-button": "Reenviar mensagem",

            "strength": "Força",
            "dexterity": "Destreza",
            "wisdom": "Sabedoria",
            "perception": "Percepção",
            "trade": "Comércio",
            "attractiveness": "Atratividade",
            "constitution": "Constituição",
            "speed": "Velocidade",
            "intelligence": "Inteligência",
            "luck": "Sorte",

            "create-setting": "Iniciar jogo",
            "load-created-setting": "Carregar configuração do arquivo",
            "save-created-setting": "Salvar configuração no arquivo",
            "tts-mode-label": "Narração de texto (não funciona em todos os navegadores)",
            "tts-mode-label2": "Narração de texto (não funciona em todos os navegadores)",
            "tts-mode-label3": "Narração de texto (não funciona em todos os navegadores)",

            "tooltip-rpg": "Se o deslizador estiver vermelho, está ativado. RPG - modo de jogo. No modo RPG, a jogabilidade consiste em melhorar o personagem, e as habilidades e inventário são fundamentais. Se desativado, o jogo é jogado no modo Roleplay, que consiste em construir uma história artística interessante, e as habilidades e inventário têm importância secundária.",
            "tooltip-rpg2": "Se o deslizador estiver vermelho, está ativado. RPG - modo de jogo. No modo RPG, a jogabilidade consiste em melhorar o personagem, e as habilidades e inventário são fundamentais. Se desativado, o jogo é jogado no modo Roleplay, que consiste em construir uma história artística interessante, e as habilidades e inventário têm importância secundária.",
            "nonmagic-mode-name": "Não há magia no mundo",
            "tooltip-noMagic": "Se ativado (cor vermelha), o mestre constrói um mundo sem magia e apenas com habilidades realistas. Se desativado, haverá magia e habilidades irrealistas no mundo.",
            "starting-parameters-label": "Parâmetros iniciais do personagem:",
            "my-world-label": "Invente seu próprio mundo ou descreva um dos existentes conhecidos",
            "my-game": "Sua configuração",
            "load-savefile": "Carregar arquivo",
            "load-character": "Carregar autosave",
            "random-character": "Personagem aleatório",
            "create-character": "Iniciar jogo",
            "tooltip-class": `A classe afeta a geração de habilidades passivas ao subir de nível e os itens iniciais: 

Bárbaro - Machado grande, Armadura de couro, Poção de cura 

Bardo - Alaúde, Adaga, Armadura leve, Poção de encantamento 

Clérigo - Maça, Escudo, Cota de malha, Símbolo sagrado 

Druida - Cajado de madeira, Armadura de couro, Bolsa de ervas 

Guerreiro - Espada longa, Escudo, Cota de malha, Poção de cura 

Monge - Cajado de batalha, Vestes monásticas, Contas de meditação 

Paladino - Espada longa, Escudo, Armadura de placas, Símbolo sagrado 

Patrulheiro - Arco longo, Aljava com flechas, Armadura de couro, Kit de armadilhas 

Ladino - Espada curta, Adaga, Armadura de couro, Ferramentas de ladrão 

Feiticeiro - Adaga de fogo, Orbe, Manto, Poção de energia 

Bruxo - Foco mágico, Armadura de couro, Grimório, Talismã eldritch 

Mago - Livro de feitiços, Varinha mágica, Manto, Pergaminho de míssil mágico`,
            "tooltip-race": `A raça afeta a localização inicial, a geração de habilidades raciais, o enredo e os bônus iniciais para habilidades e itens:
	
Humano: Sorte +2, Comércio +1, Percepção +1, Sabedoria -1, Inteligência -1, Ferramenta Universal

Elfo: Agilidade +2, Velocidade +1, Atratividade +1, Força -1, Resistência -1, Manto Élfico

Anão: Comércio +2, Força +1, Resistência +1, Agilidade -1, Velocidade -1, Cerveja Anã

Orc: Força +3, Resistência +2, Inteligência -1, Sabedoria -1, Atratividade -1, Pintura de Guerra Orc

Lagarto: Resistência +2, Velocidade +1, Atratividade -1, Óleo de Escamas

Vampiro: Percepção +1, Atratividade +1, Agilidade +1, Sorte -1, Frasco de Sangue

Golem: Força +3, Resistência +2, Inteligência -1, Atratividade -1, Sabedoria -1, Núcleo Elemental`,
            "create-character-label": "Crie seu personagem",
            "api-key-button": "Mostrar por 10 segundos",
            "api-key-button2": "Mostrar por 10 segundos",
            "api-key-button3": "Mostrar por 10 segundos",
            "ai-model-label": "Modelo de IA",
            "ai-model-label2": "Modelo de IA",
            "ai-model-label3": "Modelo de IA",
            "max-gm-symbols-label": "Número máximo de caracteres na mensagem do mestre",
            "interface-language": "Idioma do jogo",
            "interface-language2": "Idioma do jogo",
            "image-mode-settings-label": "Geração de imagens (não afeta o número de solicitações, pois usa um serviço gratuito)",
            "load-my-rules-button-label": "Carregar regras do arquivo",
            "download-my-rules-button-label": "Baixar regras para arquivo",
            "my-rules-explanaition": "Aqui você pode alterar ou complementar as regras do jogo ou simplesmente influenciar o comportamento do mestre. Basta inserir sua instrução aqui e deixá-la. Por exemplo: 'No inventário do personagem deve haver uma lista como um item separado, que lista todos os bônus de todos os itens no inventário, e se não houver tal lista no inventário, adicioná-la' ou 'que haja monstros em cada localização'. Aviso: as alterações feitas podem quebrar alguns mecanismos do jogo. Ou podem não quebrar. Ouse!",
            "clear-log": "Limpar o log. Quase não afeta a memória do mestre, pois ele lembra apenas das últimas 5 mensagens do log",
            "clear-system-chat": "Remover todas as mensagens vermelhas do chat. Não afeta a memória do mestre de forma alguma",
            "clear-half-chat": "Limpar metade do chat. Detalhes do chat removido serão esquecidos pelo mestre. Informações comprimidas armazenadas nas descrições de localizações e itens não serão esquecidas. Você pode registrar eventos individuais ou uma história comprimida de aventuras em folhas de papel separadas no inventário antes de excluir o chat.",
            "settings-button-label": "Configurações",
            "load-box-button-label": "Carregar jogo",
            "save-box-button-lable": "Salvar jogo",
            "my-rules-button-label": "Minhas regras (prompt)",
            "antilag-button-label": "Reduzir lag",
            "log-button-label": "Log de cálculos de ações",
            "locations-button-label": "Localizações",
            "inventory-button-label": "Inventário",
            "alert_cant_start": "Por favor, preencha todos os campos antes de criar o personagem.",
            "api-key-label": "Sua chave API",
            "api-key-label2": "Sua chave API",
            "api-key-label3": "Sua chave API",
            "ai-provider-label": "Fornecedor de rede neural",
            "ai-provider-label2": "Fornecedor de rede neural",
            "ai-provider-label3": "Fornecedor de rede neural",
            "location-delete": "Esquecer esta localização",
            "player-status-label": "Estado",
            "status-purposes-label": "Possíveis finalidades:",
            "player-npc-button-label": "Personagens",
            "use-status-label": "Utilizar estado (desativar para guardar tokens)",
            "use-npc-list-label": "Utilizar lista de caracteres (desativar para guardar tokens)",
            "npc-delete": "Esqueça este personagem",
            "npc-delete-journal": "Esqueça o diário desta personagem",

            // selectors
            "free-roam": "Exploração livre (Faça o que quiser)",
            "mysterious-plague": "Praga misteriosa",
            "missing-nobles": "Nobres desaparecidos",
            "haunted-village": "Vila assombrada",
            "bandit-uprising": "Revolta de bandidos",
            "ancient-ruins": "Ruínas antigas",
            "political-intrigue": "Intriga política",
            "dragon-threat": "Ameaça de dragão",
            "cursed-artifact": "Artefato amaldiçoado",
            "lost-expedition": "Expedição perdida",
            "merchant-caravan": "Caravana de mercadores",
            "rebellion": "Rebelião",
            "prophecy": "Profecia",
            "seaside-terror": "Terror na costa",
            "festival-sabotage": "Sabotagem do festival",
            "hidden-cult": "Culto secreto",
            "elemental-chaos": "Caos elemental",
            "magical-academy": "Academia de magia",
            "royal-escort": "Escolta real",
            "giant-invasion": "Invasão de gigantes",
            "random": "Campanha aleatória da lista",

            "wizard": "Mago",
            "warlock": "Bruxo",
            "sorcerer": "Feiticeiro",
            "rogue": "Ladino",
            "ranger": "Patrulheiro",
            "paladin": "Paladino",
            "monk": "Monge",
            "fighter": "Guerreiro",
            "druid": "Druida",
            "cleric": "Clérigo",
            "bard": "Bardo",
            "barbarian": "Bárbaro",
            "no-choosed-class": "Escolha uma classe",

            "golem": "Golem",
            "vampire": "Vampiro",
            "lizardman": "Homem-lagarto",
            "orc": "Orc",
            "dwarf": "Anão",
            "elf": "Elfo",
            "human": "Humano",
            "no-choosed-race": "Escolha uma raça",

            "female": "Feminino",
            "male": "Masculino",
            "no-choosed-gender": "Escolha um gênero",

            //not interface
            "item_notepad": "Bloco de notas",
            "item_notepad_description": "Bloco de notas",
            "game_starting_description": `---- ABSOLUTE LEGENDARICA ----\n\n Um novo jogo começa. Você é livre para fazer e dizer absolutamente tudo o que quiser. No entanto, as consequências não tardarão a chegar, especialmente se o seu personagem não tiver habilidades suficientes para a sua ideia. Você pode se tornar um herói, um empreendedor, um ladrão, um ator, um assassino de aluguel, um fazendeiro, um rei e muito mais... Liberdade total de ação.\n\n A memória integrada é suficiente para os últimos 30 locais visitados, NPCs, missões (concluídas) - os antigos serão excluídos. Você pode se lembrar dos que precisa clicando no cadeado à esquerda do nome (na lista). \nCada local tem um nível de dificuldade indicado por um número entre parênteses.\n\n Algumas verificações de habilidade podem ser consideradas bem-sucedidas ou malsucedidas, mesmo que o resultado do cálculo seja o oposto, porque a lógica da situação é mais importante do que a aleatoriedade, mas essa verificação ainda afetará as consequências de tal sucesso/falha. Depois que um personagem ganha um nível, um parâmetro base aleatório é aumentado aleatoriamente em 1 e uma nova habilidade passiva é gerada no próximo turno. Durante o jogo, itens com bônus para habilidades que não estão na lista de habilidades podem aparecer, mas esses bônus podem ser aplicados a várias habilidades da lista: um item com um bônus, por exemplo, para agilidade +1, pode aumentar a velocidade e a destreza em diferentes verificações.\n\n Você pode pedir ao anfitrião no chat para corrigir um erro que ele cometeu, como dinheiro, energia, etc. calculados incorretamente. O anfitrião entende muito, então sinta-se à vontade para experimentar.\n\n Você pode tentar construir suas próprias instruções para o anfitrião para atender às suas necessidades na guia 'Suas regras (prompt)'\n\n O jogo é salvo automaticamente a cada 5 minutos. Ao carregar o jogo, o anfitrião se lembra da história apenas da descrição dos locais, descrições dos itens, bem como da lista de NPCs, do diário do NPC, do status do personagem e do registro de missões. Isso é útil para evitar sobrecarregar o anfitrião. Mas se você quiser, pode expandir a memória pós-carregamento dele de tal forma que, antes de salvar, você escreva uma história detalhada dos últimos eventos em um pedaço de papel em seu inventário. E o anfitrião verá esse pedaço de papel após o carregamento. O arquivo salvo pode ser aberto no Bloco de Notas e os dados podem ser alterados lá - mas antes de fazer isso, não se esqueça de salvar uma cópia de segurança do jogo salvo para que ele não desapareça se a edição não for bem-sucedida.\n\n Para acesso ilimitado às redes neurais, você pode usar um dos provedores de redes neurais da lista.\nO número de tokens gastos por turno e por sessão pode ser visto passando o cursor sobre a mensagem no registro de ações.\n\n Você pode excluir esta e quaisquer outras mensagens clicando no X no canto da mensagem. As mensagens excluídas são apagadas da memória do anfitrião.\n\n Este jogo é uma versão fortemente modificada (acredite em mim, MUITO FORTEMENTE) do jogo do Creature. Você pode conferir o original no link: https://websim.ai/@Creature/legendarica-v1-neural-sandbox\n\n Por favor, considere agradecer-me (Lottarend - o autor do ABSOLUTE LEGENDARICA) para me deixar feliz e me motivar a lançar novas versões do jogo.`,
            "game_starting_donate": "Agradecer ao autor de ABSOLUTE LEGENDARICA:\n\n Criptomoeda: TSH1v85VbFo6b8gzb2xKcHy7Lk5NYLqVYh (USDT TRC20)\n\nOutra maneira: https://www.donationalerts.com/r/lottarend",
            "game_starting_discord": "No Discord, você pode encontrar a versão mais recente e discutir o jogo https://discord.com/invite/JVshMaq3GG",
            "null_resend_message": "Onde estou? Quem sou eu?",
            "item_not_descripted": "Item não estudado pelo herói",
            "name_turn": "Turno",
            "name_answer_turn": "Resposta ao turno",
            "turn_log_name": "Log do turno",
            "location_difficulty_label": "dificuldade",
            "message_after_load": "Onde estou? Reconte brevemente minha história.",
            "gm_message_error": "Erro. Talvez você tenha excedido o limite de mensagens para o GM: 10 por minuto ou 20 por cinco minutos ou 100 por 24 horas (informações sobre limites são indicadas no momento da atualização do jogo, elas podem mudar). Ou o GM está muito ocupado. Ou outro erro desconhecido. Por favor, tente novamente",
            "big_axe": "Machado grande",
            "long_sword": "Espada longa",
            "mace": "Maça",
            "shield": "Escudo",
            "chainmail": "Cota de malha",
            "holy_symbol": "Símbolo sagrado",
            "wooden_staff": "Cajado de madeira",
            "light_armor": "Armadura leve",
            "healing_potion": "Poção de cura",
            "charm_potion": "Poção de encantamento",
            "fox_sneakers": "Armadura de couro",
            "fire_dagger": "Adaga de fogo",
            "orb": "Orbe",
            "robe": "Manto",
            "energy_potion": "Poção de energia",
            "magical_focus": "Foco mágico",
            "grimuar": "Grimório",
            "eldritch_talisman": "Talismã eldritch",
            "spellbook": "Livro de feitiços",
            "magical_wand": "Varinha mágica",
            "scroll_of_magic_arrow": "Pergaminho de flecha mágica",
            "battle_axe": "Machado de batalha",
            "leather_armor": "Armadura de couro",
            "herb_pouch": "Bolsa de ervas",
            "tunic": "Túnica",
            "meditation_beads": "Contas de meditação",
            "trap_kit": "Kit de armadilhas",
            "thieves_tools": "Ferramentas de ladrão",
            "Universal_tool": 'Ferramenta universal',
            "Elven_cloak": 'Capa élfica',
            "Dwarven_ale": 'Cerveja anã',
            "Orcish_war_paint": 'Pintura de guerra orc',
            "Scale_oil": 'Óleo para escamas',
            "Blood_vial": 'Frasco de sangue',
            "Elemental_core": 'Núcleo elemental',
            "lute": "Alaúde",
            "dagger": "Adaga",
            "staff": "Cajado",
            "long_bow": "Arco longo",
            "quiver_of_arrows": "Aljava com flechas",
            "short_sword": "Espada curta",
            "quality_unique": "Único",
            "quality_legendary": "Lendário",
            "quality_epic": "Épico",
            "quality_rare": "Raro",
            "quality_good": "Bom",
            "quality_common": "Comum",
            "quality_trash": "Lixo",

            "gm_message_error_full_gm_answer": "A rede neural não conseguiu formatar corretamente a resposta para análise. Se o erro ocorre frequentemente, mude o modelo de rede neural. Aqui está a resposta completa: \n\n",
            "other_skill_group": "Outro",
            "skill_energy_cost": "Custo (em energia)",
            "clear-status-label": "Limpar estado",
            "active-skills-button-label": "Competências ativas",
            "passive-skills-button-label": "Competências passivas",
            "status-effects-label": "Efeitos:",
            "tooltip-provider-ai": `Provedores de Redes Neurais

Para todos os provedores, exceto Websim, você precisa se registrar no site correspondente e criar uma chave de API ou Token de Acesso. Preste atenção ao contexto da rede neural - Legendarica usa um prompt muito grande, e ele só aumenta com o tempo devido ao histórico do chat e outros dados usados pelo GM. É necessário um contexto de pelo menos 128.000 tokens. As informações descritas aqui são atuais a partir da data especificada (24/11/2024).

Cohere (https://coral.cohere.com/). Fornece acesso totalmente gratuito aos modelos Command R.
Para começar: modelo command-r-plus

Google AI Studio (https://ai.google.dev/aistudio). Todos os modelos têm um limite gratuito, consulte o site do Studio. Experimente modelos experimentais - eles geralmente têm um limite maior de mensagens gratuitas por dia.
Para começar: modelo gemini-1.5-pro

Groq (https://groq.com/). Groq fornece acesso a vários modelos gratuitos, mas os limita severamente por contexto. Atualmente, não há modelos gratuitos neste site que funcionem bem no Legendarica, mas isso pode mudar no futuro. Modelos pagos provavelmente funcionam bem. Veja a lista de modelos aqui: https://console.groq.com/docs/models

Hugging Face (https://huggingface.co/models?inference=warm&other=conversational&sort=trending). Um grande repositório para redes neurais. A API de Inferência é usada para acessá-lo, e apenas os modelos que a suportam estão disponíveis para o jogo. Há um limite no número de mensagens por dia, que aumenta com uma assinatura paga. Se os modelos enviarem texto ilegível como resposta, então ou o modelo é muito fraco ou a temperatura está alta. Nesse caso, tente diminuir a temperatura ou mudar o modelo.
Para começar: modelo Qwen/Qwen2.5-72B-Instruct (temperatura 0.4)

Mistral AI (https://mistral.ai/). O site da Mistral AI oferece a participação em um plano de preços "experimental", tornando todos os modelos Mistral gratuitos para uso.
Para começar: modelo mistral-large-latest

OpenAI01 (https://openaio1api.com/ - site principal: https://openai01.net/). Acesso ao OpenAI o1-preview. Não há plano gratuito. Ao se registrar, você recebe 10 créditos; 2 créditos são cobrados por solicitação ao o1-preview.
Modelo: o1-preview

Openrouter (https://openrouter.ai/). Oferece modelos gratuitos e pagos. Modelos gratuitos têm um limite diário de mensagens.

Websim. Depende da rede neural usada pelo Websim. Depois que o Websim mudou a API de IA de Claude para algo muito fraco, o Websim não pode mais garantir um bom jogo ou mesmo sua execução, pois a IA usada é muito fraca. Mas isso pode mudar no futuro.`,
            "tooltip-provider-ai2": `Provedores de Redes Neurais

Para todos os provedores, exceto Websim, você precisa se registrar no site correspondente e criar uma chave de API ou Token de Acesso. Preste atenção ao contexto da rede neural - Legendarica usa um prompt muito grande, e ele só aumenta com o tempo devido ao histórico do chat e outros dados usados pelo GM. É necessário um contexto de pelo menos 128.000 tokens. As informações descritas aqui são atuais a partir da data especificada (24/11/2024).

Cohere (https://coral.cohere.com/). Fornece acesso totalmente gratuito aos modelos Command R.
Para começar: modelo command-r-plus

Google AI Studio (https://ai.google.dev/aistudio). Todos os modelos têm um limite gratuito, consulte o site do Studio. Experimente modelos experimentais - eles geralmente têm um limite maior de mensagens gratuitas por dia.
Para começar: modelo gemini-1.5-pro

Groq (https://groq.com/). Groq fornece acesso a vários modelos gratuitos, mas os limita severamente por contexto. Atualmente, não há modelos gratuitos neste site que funcionem bem no Legendarica, mas isso pode mudar no futuro. Modelos pagos provavelmente funcionam bem. Veja a lista de modelos aqui: https://console.groq.com/docs/models

Hugging Face (https://huggingface.co/models?inference=warm&other=conversational&sort=trending). Um grande repositório para redes neurais. A API de Inferência é usada para acessá-lo, e apenas os modelos que a suportam estão disponíveis para o jogo. Há um limite no número de mensagens por dia, que aumenta com uma assinatura paga. Se os modelos enviarem texto ilegível como resposta, então ou o modelo é muito fraco ou a temperatura está alta. Nesse caso, tente diminuir a temperatura ou mudar o modelo.
Para começar: modelo Qwen/Qwen2.5-72B-Instruct (temperatura 0.4)

Mistral AI (https://mistral.ai/). O site da Mistral AI oferece a participação em um plano de preços "experimental", tornando todos os modelos Mistral gratuitos para uso.
Para começar: modelo mistral-large-latest

OpenAI01 (https://openaio1api.com/ - site principal: https://openai01.net/). Acesso ao OpenAI o1-preview. Não há plano gratuito. Ao se registrar, você recebe 10 créditos; 2 créditos são cobrados por solicitação ao o1-preview.
Modelo: o1-preview

Openrouter (https://openrouter.ai/). Oferece modelos gratuitos e pagos. Modelos gratuitos têm um limite diário de mensagens.

Websim. Depende da rede neural usada pelo Websim. Depois que o Websim mudou a API de IA de Claude para algo muito fraco, o Websim não pode mais garantir um bom jogo ou mesmo sua execução, pois a IA usada é muito fraca. Mas isso pode mudar no futuro.`,
            "tooltip-provider-ai3": `Provedores de Redes Neurais

Para todos os provedores, exceto Websim, você precisa se registrar no site correspondente e criar uma chave de API ou Token de Acesso. Preste atenção ao contexto da rede neural - Legendarica usa um prompt muito grande, e ele só aumenta com o tempo devido ao histórico do chat e outros dados usados pelo GM. É necessário um contexto de pelo menos 128.000 tokens. As informações descritas aqui são atuais a partir da data especificada (24/11/2024).

Cohere (https://coral.cohere.com/). Fornece acesso totalmente gratuito aos modelos Command R.
Para começar: modelo command-r-plus

Google AI Studio (https://ai.google.dev/aistudio). Todos os modelos têm um limite gratuito, consulte o site do Studio. Experimente modelos experimentais - eles geralmente têm um limite maior de mensagens gratuitas por dia.
Para começar: modelo gemini-1.5-pro

Groq (https://groq.com/). Groq fornece acesso a vários modelos gratuitos, mas os limita severamente por contexto. Atualmente, não há modelos gratuitos neste site que funcionem bem no Legendarica, mas isso pode mudar no futuro. Modelos pagos provavelmente funcionam bem. Veja a lista de modelos aqui: https://console.groq.com/docs/models

Hugging Face (https://huggingface.co/models?inference=warm&other=conversational&sort=trending). Um grande repositório para redes neurais. A API de Inferência é usada para acessá-lo, e apenas os modelos que a suportam estão disponíveis para o jogo. Há um limite no número de mensagens por dia, que aumenta com uma assinatura paga. Se os modelos enviarem texto ilegível como resposta, então ou o modelo é muito fraco ou a temperatura está alta. Nesse caso, tente diminuir a temperatura ou mudar o modelo.
Para começar: modelo Qwen/Qwen2.5-72B-Instruct (temperatura 0.4)

Mistral AI (https://mistral.ai/). O site da Mistral AI oferece a participação em um plano de preços "experimental", tornando todos os modelos Mistral gratuitos para uso.
Para começar: modelo mistral-large-latest

OpenAI01 (https://openaio1api.com/ - site principal: https://openai01.net/). Acesso ao OpenAI o1-preview. Não há plano gratuito. Ao se registrar, você recebe 10 créditos; 2 créditos são cobrados por solicitação ao o1-preview.
Modelo: o1-preview

Openrouter (https://openrouter.ai/). Oferece modelos gratuitos e pagos. Modelos gratuitos têm um limite diário de mensagens.

Websim. Depende da rede neural usada pelo Websim. Depois que o Websim mudou a API de IA de Claude para algo muito fraco, o Websim não pode mais garantir um bom jogo ou mesmo sua execução, pois a IA usada é muito fraca. Mas isso pode mudar no futuro.`,
            "throw-item": "Jogar fora",
            "inventory-delete": "Joga este objeto fora",
            "skill_effect_label": "Efeito",
            "npc-info-journal-label": "Diário",
            "quest-active-label": "Ativo",
            "quest-completed-label": "Concluído",
            "quest-purposes-label": "Objetivos da missão:",
            "quest-reward-label": "Recompensa",
            "quest-punishment-label": "Punição por insucesso",
            "use-npc-journal-label": "Usar diários de personagens (desative para economizar tokens). Funciona apenas quando a lista de personagens está ativada.",
            "use-quests-list-label": "Usar a lista de missões (desativar para economizar tokens).",
            "make-game-quest-oriented-label": "Tornar a trama mais focada em missões (um registro/lista de missões deve ser incluído).",
            "stats-button-label": "Características",
            "statsGroup-general-button-label": "Geral",
            "statsGroup-main-button-label": "Principais",
            "statsGroup-secondary-button-label": "Secundários",
            "player-quests-button-label": "Tarefas",
            "image-loading-label": "Carregando...",
            "ai-provider-streaming-error-label": "Erro ao ler dados da rede neural em modo de streaming. Tente novamente ou troque de provedor de rede neural.",
            "none-provider-selected-label": "Nenhum provedor de rede neural foi selecionado. Por favor, selecione um provedor de rede neural para iniciar o jogo.",
            "system-instructions-explanaition": "Estas são instruções do sistema para o provedor da rede neural selecionado. Elas têm a mais alta prioridade para a rede neural.",
            "confirm_message_label": "Tem certeza? Confirme sua ação.",
            "ai-none2-label": "Nada selecionado.",
            "ai-none-label": "Nada selecionado.",
            "ai-none3-label": "Nada selecionado.",
            "additional-settings-label2": "Você pode encontrar configurações adicionais no painel suspenso do lado direito. Clique no botão no canto inferior direito da tela para ver o painel de configurações.",
            "additional-settings-label3": "Você pode encontrar configurações adicionais no painel suspenso do lado direito. Clique no botão no canto inferior direito da tela para ver o painel de configurações.",
            "download-system-instructions-button-label": "Baixar as instruções do sistema para um arquivo",
            "load-system-instructions-button-label": "Carregar instruções do sistema a partir do arquivo",
            "skill-info-delete": "Esquecer esta habilidade",
            "empty-ai-key-label": "A chave API não está definida. Introduza a chave API.",
            "inventory-count-label": "Quantidade",
            "inventory-quality-label": "Qualidade",
            "inventory-durability-label": "Durabilidade",
            "inventory-bonuses-label": "Bônus",
            "inventory-price-label": "Preço",
            "inventory-resource-label": "Recurso",
            "throw-from-item": "do contêiner (se o símbolo -> estiver presente, ele indica o caminho para o item, do contêiner para o contêiner)",
            "inventory-container-open": "Abrir",
            "inventory-weight-label": "Peso (quilogramas)",
            "inventory-capacity-label": "Capacidade",
            "move-to-inventory": "Colocar no inventário",
            "place-item-to": "Colocar em ",
            "empty-container-label": "Vazio",
            "content-description-label": "Conteúdo",
            "inventory-volume-label": "Volume (dm³)",
            "inventory-contents-count-label": "Capacidade disponível",
            "inventory-contents-volume-label": "Volume disponível (dm³)",
            "inventory-item-inspect": "Inspecionar",
            "rarity-label": "Raridade",
            "age-label": "Idade",
            "npc-info-worldview-label": "Cosmovisão",
            "npc-info-race-label": "Raça",
            "npc-info-class-label": "Classe",
            "npc-info-stats-label": "Características",
            "npc-info-skills-label": "Habilidades",
            "npc-info-effects-label": "Efeitos Ativos",
            "npc-info-appearanceDescription-label": "Aparência:",
            "npc-info-history-label": "História:",
            "npc-info-attitude-label": "Atitude em relação ao personagem do jogador:",
            "npc-info-tab-journal-label": "Diário",
            "npc-info-tab-memory-diary-label": "Crônicas",
            "npc-info-memory-diary-label": "Crônicas",
            "npc-delete-memory-diary": "Esquecer as crônicas deste personagem",
            "use-npc-memories-diary-label": "Usar crônicas de personagens (desative para economizar tokens). Funciona apenas quando o diário de personagens está habilitado.",
            "status-name-label": "Nome",
            "status-race-label": "Raça",
            "status-class-label": "Classe",
            "status-appearanceDescription-label": "Aparência:",
            "status-statusInSociety-label": "Status Social:",
            "status-positionInSociety-label": "Posição na Sociedade:",
            "status-affiliationWithOrganizations-label": "Afiliação com Organizações:",
        },
        "hindi-language": {
            "start-str": "शक्ति",
            "start-dex": "चपलता",
            "start-con": "सहनशक्ति",
            "start-intl": "बुद्धि",
            "start-wis": "ज्ञान",
            "start-trd": "व्यापार",
            "start-per": "अवधारणा",
            "start-luck": "भाग्य",
            "start-spd": "गति",
            "start-money": "पैसा",
            "start-exp": "अनुभव",
            "start-atr": "आकर्षण",
            "start-location-description": "प्रारंभिक स्थान का वर्णन करें (वैकल्पिक)",
            "start-location": "प्रारंभिक स्थान का नाम दर्ज करें (वैकल्पिक)",
            "character-starting-inventory": "प्रारंभिक इन्वेंटरी का वर्णन करें (वैकल्पिक)",
            "character-prehistory": "चरित्र का पूर्व इतिहास दर्ज करें (वैकल्पिक)",
            "character-class-description": "वर्ग का विवरण (वैकल्पिक)",
            "character-class2": "चरित्र का वर्ग",
            "character-race-description": "जाति का विवरण (वैकल्पिक)",
            "character-race2": "चरित्र की जाति",
            "character-gender2": "चरित्र का लिंग",
            "character-description": "चरित्र का विवरण (वैकल्पिक)",
            "character-name-my-game": "चरित्र का नाम",
            "world-description": "दुनिया का विवरण और गेममास्टर के लिए निर्देश दर्ज करें",
            "character-name": "चरित्र का नाम दर्ज करें",
            "api-key": "सुरक्षा के लिए सुनिश्चित करें कि आप कम खर्च सीमा वाली API कुंजी का उपयोग कर रहे हैं",
            "api-key2": "सुरक्षा के लिए सुनिश्चित करें कि आप कम खर्च सीमा वाली API कुंजी का उपयोग कर रहे हैं",
            "api-key3": "सुरक्षा के लिए सुनिश्चित करें कि आप कम खर्च सीमा वाली API कुंजी का उपयोग कर रहे हैं",
            "ai-model": "न्यूरल नेटवर्क मॉडल का नाम दर्ज करें",
            "ai-model2": "न्यूरल नेटवर्क मॉडल का नाम दर्ज करें",
            "ai-model3": "न्यूरल नेटवर्क मॉडल का नाम दर्ज करें",
            "max-gm-symbols": "डिफ़ॉल्ट रूप से 10000",
            "my-rules": "अपने नियम दर्ज करें और यहाँ छोड़ दें। अगले टर्न से, वे तब तक लागू होंगे जब तक वे यहाँ रहते हैं।",
            "user-input": "अपनी कार्रवाई बताएं, बहादुर साहसिक...",
            "style-of-image-input": "उदाहरण के लिए: मध्यकालीन, फैंटेसी, न्यूरोपंक",
            "system-instructions": "अपने सिस्टम निर्देशों को यहां दर्ज करें और उन्हें यहीं छोड़ दें। अगले मोड़ से, वे तब तक प्रभावी रहेंगे जब तक वे यहां रहेंगे।",
            "world-system-instructions": "न्यूरल नेटवर्क के लिए सिस्टम निर्देश दर्ज करें (वैकल्पिक)",

            //labels
            "style-of-image-label": "उत्पन्न चित्रों की शैली",
            "health-label": "स्वास्थ्य:",
            "level-label": "स्तर:",
            "strength-label": "शक्ति:",
            "dexterity-label": "चपलता:",
            "wisdom-label": "ज्ञान:",
            "perception-label": "अवधारणा:",
            "trade-label": "व्यापार:",
            "attractiveness-label": "आकर्षण:",
            "energy-label": "ऊर्जा:",
            "exp-label": "अनुभव:",
            "constitution-label": "सहनशक्ति:",
            "speed-label": "गति:",
            "intelligence-label": "बुद्धि:",
            "luck-label": "भाग्य:",
            "money-label": "पैसा:",
            "send-button": "भेजें",
            "resend-button": "संदेश पुनः भेजें",

            "strength": "शक्ति",
            "dexterity": "चपलता",
            "wisdom": "ज्ञान",
            "perception": "अवधारणा",
            "trade": "व्यापार",
            "attractiveness": "आकर्षण",
            "constitution": "सहनशक्ति",
            "speed": "गति",
            "intelligence": "बुद्धि",
            "luck": "भाग्य",

            "create-setting": "खेल शुरू करें",
            "load-created-setting": "फ़ाइल से सेटिंग लोड करें",
            "save-created-setting": "सेटिंग को फ़ाइल में सहेजें",
            "tts-mode-label": "पाठ-से-वाचन (सभी ब्राउज़रों में काम नहीं करता)",
            "tts-mode-label2": "पाठ-से-वाचन (सभी ब्राउज़रों में काम नहीं करता)",
            "tts-mode-label3": "पाठ-से-वाचन (सभी ब्राउज़रों में काम नहीं करता)",

            "tooltip-rpg": "यदि स्लाइडर लाल है तो सक्रिय है। RPG - गेमिंग मोड। RPG मोड में गेमप्ले चरित्र के विकास पर केंद्रित है, और कौशल और इन्वेंटरी महत्वपूर्ण हैं। यदि बंद है, तो खेल रोलप्ले मोड में चलता है, जो एक दिलचस्प कथात्मक कहानी बनाने पर केंद्रित है, और कौशल और इन्वेंटरी कम महत्वपूर्ण हैं।",
            "tooltip-rpg2": "यदि स्लाइडर लाल है तो सक्रिय है। RPG - गेमिंग मोड। RPG मोड में गेमप्ले चरित्र के विकास पर केंद्रित है, और कौशल और इन्वेंटरी महत्वपूर्ण हैं। यदि बंद है, तो खेल रोलप्ले मोड में चलता है, जो एक दिलचस्प कथात्मक कहानी बनाने पर केंद्रित है, और कौशल और इन्वेंटरी कम महत्वपूर्ण हैं।",
            "nonmagic-mode-name": "दुनिया में जादू नहीं है",
            "tooltip-noMagic": "यदि सक्रिय है (लाल रंग), तो गेममास्टर जादू के बिना और केवल यथार्थवादी क्षमताओं के साथ एक दुनिया बनाता है। यदि बंद है, तो दुनिया में जादू और अवास्तविक क्षमताएं होंगी।",
            "starting-parameters-label": "चरित्र के प्रारंभिक पैरामीटर:",
            "my-world-label": "अपनी दुनिया की कल्पना करें या किसी मौजूदा प्रसिद्ध दुनिया का वर्णन करें",
            "my-game": "अपना सेटिंग",
            "load-savefile": "फ़ाइल लोड करें",
            "load-character": "ऑटोसेव लोड करें",
            "random-character": "यादृच्छिक चरित्र",
            "create-character": "खेल शुरू करें",
            "tooltip-class": `वर्ग स्तर बढ़ने पर निष्क्रिय कौशल उत्पन्न करने और प्रारंभिक वस्तुओं को प्रभावित करता है:

बार्बेरियन - बड़ी कुल्हाड़ी, चमड़े का कवच, हीलिंग पोशन

बार्ड - वीणा, छुरी, हल्का कवच, आकर्षण पोशन

क्लेरिक - गदा, ढाल, कवच, पवित्र प्रतीक

ड्रूइड - लकड़ी की लाठी, चमड़े का कवच, जड़ी-बूटियों की थैली

योद्धा - लंबी तलवार, ढाल, कवच, हीलिंग पोशन

भिक्षु - युद्ध लाठी, भिक्षु वस्त्र, ध्यान के लिए माला

पैलाडिन - लंबी तलवार, ढाल, प्लेट आर्मर, पवित्र प्रतीक

रेंजर - लंबा धनुष, तीर का तरकश, चमड़े का कवच, जाल सेट

रोग - छोटी तलवार, छुरी, चमड़े का कवच, चोर के उपकरण

सॉरसरर - अग्नि छुरी, गोला, अलखा, ऊर्जा पोशन

वारलॉक - जादुई फोकस, चमड़े का कवच, ग्रिमोयर, एल्ड्रिच तावीज

विज़ार्ड - स्पेलबुक, जादुई छड़ी, अलखा, जादुई तीर का स्क्रॉल`,
            "tooltip-race": `नस्ल शुरुआती स्थान, नस्लीय कौशल पीढ़ी, कहानी और कौशल और वस्तुओं के लिए शुरुआती बोनस को प्रभावित करती है:
	
मनुष्य: भाग्य +2, व्यापार +1, धारणा +1, ज्ञान -1, बुद्धि -1, सार्वभौमिक उपकरण

एल्फ: चपलता +2, गति +1, आकर्षण +1, शक्ति -1, सहनशक्ति -1, एल्विन लबादा

बौना: व्यापार +2, शक्ति +1, सहनशक्ति +1, चपलता -1, गति -1, बौना शराब

ओर्क: शक्ति +3, सहनशक्ति +2, बुद्धि -1, ज्ञान -1, आकर्षण -1, ओर्किश युद्ध पेंट

छिपकली: सहनशक्ति +2, गति +1, आकर्षण -1, स्केल ऑयल

पिशाच: धारणा +1, आकर्षण +1, चपलता +1, भाग्य -1, रक्त की शीशी

गोलेम: शक्ति +3, सहनशक्ति +2, बुद्धि -1, आकर्षण -1, ज्ञान -1, मौलिक कोर`,
            "create-character-label": "अपना चरित्र बनाएं",
            "api-key-button": "10 सेकंड के लिए दिखाएं",
            "api-key-button2": "10 सेकंड के लिए दिखाएं",
            "api-key-button3": "10 सेकंड के लिए दिखाएं",
            "ai-model-label": "एआई मॉडल",
            "ai-model-label2": "एआई मॉडल",
            "ai-model-label3": "एआई मॉडल",
            "max-gm-symbols-label": "गेममास्टर संदेश में अधिकतम अक्षर संख्या",
            "interface-language": "खेल की भाषा",
            "interface-language2": "खेल की भाषा",
            "image-mode-settings-label": "छवि उत्पादन (अनुरोधों की संख्या को प्रभावित नहीं करता क्योंकि यह एक मुफ्त सेवा का उपयोग करता है)",
            "load-my-rules-button-label": "फ़ाइल से नियम लोड करें",
            "download-my-rules-button-label": "नियमों को फ़ाइल में डाउनलोड करें",
            "my-rules-explanaition": "यहाँ आप खेल के नियमों को बदल या जोड़ सकते हैं या बस गेममास्टर के व्यवहार को प्रभावित कर सकते हैं। बस यहाँ निर्देश दर्ज करें और छोड़ दें। उदाहरण के लिए: 'चरित्र की इन्वेंटरी में एक अलग वस्तु के रूप में एक सूची होनी चाहिए जिसमें इन्वेंटरी में सभी वस्तुओं से कुल बोनस दिखाया गया हो, और यदि इन्वेंटरी में ऐसी सूची नहीं है, तो इसे जोड़ें' या 'प्रत्येक स्थान में राक्षस हों'। चेतावनी: किए गए परिवर्तन खेल के कुछ तंत्र को तोड़ सकते हैं। या नहीं भी तोड़ सकते। साहस करें!",
            "clear-log": "लॉग साफ़ करें। गेममास्टर की याददाश्त पर लगभग कोई प्रभाव नहीं पड़ता, क्योंकि वह केवल पिछले 5 लॉग संदेशों को याद रखता है",
            "clear-system-chat": "चैट से सभी लाल संदेश हटाएं। गेममास्टर की याददाश्त पर कोई प्रभाव नहीं पड़ता",
            "clear-half-chat": "आधी चैट साफ़ करें। हटाई गई चैट से विवरण गेममास्टर द्वारा भूल जाएंगे। स्थानों और वस्तुओं के विवरण में संग्रहीत संक्षिप्त जानकारी नहीं भूली जाएगी। चैट हटाने से पहले आप अलग-अलग घटनाओं या संक्षिप्त साहसिक कहानी को इन्वेंटरी में अलग कागज पर लिख सकते हैं।",
            "settings-button-label": "सेटिंग्स",
            "load-box-button-label": "गेम लोड करें",
            "save-box-button-lable": "गेम सेव करें",
            "my-rules-button-label": "अपने नियम (प्रॉम्प्ट)",
            "antilag-button-label": "लैग कम करें",
            "log-button-label": "कार्रवाई गणना लॉग",
            "locations-button-label": "स्थान",
            "inventory-button-label": "इन्वेंटरी",
            "alert_cant_start": "कृपया चरित्र बनाने से पहले सभी फ़ील्ड भरें।",
            "api-key-label": "आपकी एपीआई कुंजी",
            "api-key-label2": "आपकी एपीआई कुंजी",
            "api-key-label3": "आपकी एपीआई कुंजी",
            "ai-provider-label": "तंत्रिका नेटवर्क प्रदाता",
            "ai-provider-label2": "तंत्रिका नेटवर्क प्रदाता",
            "ai-provider-label3": "तंत्रिका नेटवर्क प्रदाता",
            "location-delete": "इस स्थान को भूल जाएं",
            "player-status-label": "स्थिति",
            "status-purposes-label": "संभावित उद्देश्य:",
            "player-npc-button-label": "अक्षर",
            "use-status-label": "स्थिति का उपयोग करें (टोकन सहेजने के लिए अक्षम करें)",
            "use-npc-list-label": "अक्षरों की सूची का उपयोग करें (टोकन सहेजने के लिए अक्षम करें)",
            "npc-delete": "忘记这个角色",
            "npc-delete-journal": "इस किरदार की डायरी को भूल जाइये",

            "free-roam": "स्वतंत्र अन्वेषण (जो चाहो करो)",
            "mysterious-plague": "रहस्यमय महामारी",
            "missing-nobles": "गायब कुलीन",
            "haunted-village": "भूतिया गाँव",
            "bandit-uprising": "डाकुओं का विद्रोह",
            "ancient-ruins": "प्राचीन खंडहर",
            "political-intrigue": "राजनीतिक षड्यंत्र",
            "dragon-threat": "ड्रैगन का खतरा",
            "cursed-artifact": "शापित कलाकृति",
            "lost-expedition": "खोई हुई अभियान",
            "merchant-caravan": "व्यापारी काफिला",
            "rebellion": "विद्रोह",
            "prophecy": "भविष्यवाणी",
            "seaside-terror": "समुद्र तट पर आतंक",
            "festival-sabotage": "त्योहार का साबोटाज",
            "hidden-cult": "छिपा हुआ पंथ",
            "elemental-chaos": "तत्व अराजकता",
            "magical-academy": "जादुई अकादमी",
            "royal-escort": "शाही अनुरक्षक",
            "giant-invasion": "दैत्य आक्रमण",
            "random": "सूची से यादृच्छिक अभियान",

            "wizard": "जादूगर",
            "warlock": "वारलॉक",
            "sorcerer": "जादूगर",
            "rogue": "धूर्त",
            "ranger": "रेंजर",
            "paladin": "पैलाडिन",
            "monk": "भिक्षु",
            "fighter": "योद्धा",
            "druid": "द्रुइड",
            "cleric": "पुजारी",
            "bard": "भाट",
            "barbarian": "बर्बर",
            "no-choosed-class": "वर्ग चुनें",

            "golem": "गोलेम",
            "vampire": "वैम्पायर",
            "lizardman": "छिपकली मानव",
            "orc": "ऑर्क",
            "dwarf": "बौना",
            "elf": "एल्फ़",
            "human": "मानव",
            "no-choosed-race": "जाति चुनें",

            "female": "महिला",
            "male": "पुरुष",
            "no-choosed-gender": "लिंग चुनें",

            "item_notepad": "नोट्स के लिए नोटपैड",
            "item_notepad_description": "नोट्स के लिए नोटपैड",
            "game_starting_description": `---- एब्सोल्यूट लेजेंडैरिका ----\n\n एक नया खेल शुरू हो रहा है। आप जो चाहें वह करने और कहने के लिए पूरी तरह से स्वतंत्र हैं। हालाँकि, परिणाम आने में देर नहीं लगेगी, खासकर यदि आपके चरित्र में आपकी योजना के लिए पर्याप्त कौशल नहीं है। आप एक नायक, एक उद्यमी, एक चोर, एक अभिनेता, एक भाड़े का हत्यारा, एक किसान, एक राजा और बहुत कुछ बन सकते हैं... कार्रवाई की पूरी स्वतंत्रता।\n\n अंतर्निहित मेमोरी पिछले 30 देखे गए स्थानों, एनपीसी, खोज (पूरी की गई) के लिए पर्याप्त है - पुराने हटा दिए जाएंगे। आप सूची में नाम के बाईं ओर स्थित लॉक पर क्लिक करके अपनी आवश्यकता वाले स्थानों को याद रख सकते हैं। \nप्रत्येक स्थान की एक कठिनाई स्तर होती है जो कोष्ठक में एक संख्या द्वारा इंगित की जाती है।\n\n कुछ कौशल जाँच सफल या असफल मानी जा सकती हैं, भले ही गणना का परिणाम विपरीत हो, क्योंकि स्थिति का तर्क यादृच्छिकता से अधिक महत्वपूर्ण है, लेकिन ऐसी जाँच अभी भी ऐसी सफलता/असफलता के परिणामों को प्रभावित करेगी। जब कोई पात्र एक स्तर प्राप्त करता है, तो एक यादृच्छिक आधार पैरामीटर को यादृच्छिक रूप से 1 बढ़ा दिया जाता है और अगले मोड़ पर एक नया निष्क्रिय कौशल उत्पन्न होता है। खेल के दौरान, कौशल सूची में नहीं होने वाले कौशल के लिए बोनस वाले आइटम दिखाई दे सकते हैं, लेकिन ऐसे बोनस सूची में कई कौशल पर लागू हो सकते हैं: एक आइटम जो बोनस देता है, उदाहरण के लिए, फुर्ती +1, विभिन्न जाँचों में गति और निपुणता दोनों को बढ़ा सकता है।\n\n आप चैट में होस्ट से उनके द्वारा की गई गलती को सुधारने के लिए कह सकते हैं, जैसे कि गलत तरीके से गणना की गई राशि, ऊर्जा, आदि। होस्ट बहुत कुछ समझता है, इसलिए बेझिझक प्रयोग करें।\n\n आप 'आपके नियम (प्रॉम्प्ट)' टैब में अपनी आवश्यकताओं के अनुरूप होस्ट के लिए अपने निर्देश बनाने का प्रयास कर सकते हैं।\n\n खेल हर 5 मिनट में स्वचालित रूप से सहेजा जाता है। खेल लोड करते समय, होस्ट केवल स्थानों के विवरण, वस्तुओं के विवरण, साथ ही एनपीसी की सूची, एनपीसी डायरी, चरित्र की स्थिति और खोज लॉग से कहानी को याद रखता है। होस्ट को ओवरलोड करने से बचने के लिए यह उपयोगी है। लेकिन यदि आप चाहें, तो आप इसकी पोस्ट-लोड मेमोरी को इस तरह से विस्तारित कर सकते हैं कि सहेजने से पहले, आप अपनी इन्वेंट्री में कागज के एक टुकड़े पर नवीनतम घटनाओं का विस्तृत इतिहास लिख लें। और होस्ट लोड करने के बाद कागज का यह टुकड़ा देखेगा। सहेजें फ़ाइल को नोटपैड में खोला जा सकता है और डेटा को वहाँ बदला जा सकता है - लेकिन ऐसा करने से पहले, सहेजे गए गेम की बैकअप कॉपी को सहेजना न भूलें ताकि असफल संपादन पर यह गायब न हो जाए।\n\n न्यूरल नेटवर्क तक असीमित पहुंच के लिए, आप सूची में से एक न्यूरल नेटवर्क प्रदाता का उपयोग कर सकते हैं।\nप्रति मोड़ और प्रति सत्र खर्च किए गए टोकन की संख्या को एक्शन लॉग में संदेश पर कर्सर घुमाकर देखा जा सकता है।\n\n आप संदेश के कोने में स्थित क्रॉस पर क्लिक करके इस और किसी भी अन्य संदेश को हटा सकते हैं। हटाए गए संदेश होस्ट की मेमोरी से मिटा दिए जाते हैं।\n\n यह खेल क्रिएचर के खेल का भारी संशोधित (मेरा विश्वास करें, बहुत भारी) संस्करण है। आप मूल को लिंक पर देख सकते हैं: https://websim.ai/@Creature/legendarica-v1-neural-sandbox\n\n कृपया मुझे (लॉटारेंड - एब्सोल्यूट लेजेंडैरिका के लेखक) धन्यवाद देने पर विचार करें ताकि मुझे खुशी हो और मुझे खेल के नए संस्करण जारी करने के लिए प्रेरित करें।`,
            "game_starting_donate": "एब्सोल्यूट लेजेंडैरिका के लेखक को धन्यवाद दें:\n\n क्रिप्टोकरेंसी: TSH1v85VbFo6b8gzb2xKcHy7Lk5NYLqVYh (USDT TRC20)\n\nदूसरा तरीका: https://www.donationalerts.com/r/lottarend",
            "game_starting_discord": "डिस्कॉर्ड पर नवीनतम संस्करण और खेल पर चर्चा कर सकते हैं https://discord.com/invite/JVshMaq3GG",
            "null_resend_message": "मैं कहाँ हूँ? मैं कौन हूँ?",
            "item_not_descripted": "वस्तु का नायक द्वारा अध्ययन नहीं किया गया है",
            "name_turn": "बारी",
            "name_answer_turn": "बारी का जवाब",
            "turn_log_name": "बारी का लॉग",
            "location_difficulty_label": "कठिनाई",
            "message_after_load": "मैं कहाँ हूँ? संक्षेप में मेरी कहानी सुनाओ।",
            "gm_message_error": "त्रुटि। संभवतः आपने जीएम को संदेशों की सीमा पार कर दी है: 1 मिनट में 10, या 5 मिनट में 20, या 24 घंटे में 100 (सीमा की जानकारी गेम अपडेट के समय दी गई है, यह बदल सकती है)। या जीएम बहुत व्यस्त है। या कोई अन्य अज्ञात त्रुटि। कृपया फिर से प्रयास करें",
            "big_axe": "बड़ी कुल्हाड़ी",
            "long_sword": "लंबी तलवार",
            "mace": "गदा",
            "shield": "ढाल",
            "chainmail": "जंजीर का कवच",
            "holy_symbol": "पवित्र प्रतीक",
            "wooden_staff": "लकड़ी की लाठी",
            "light_armor": "हल्का कवच",
            "healing_potion": "चंगाई का घोल",
            "charm_potion": "मोहक घोल",
            "fox_sneakers": "चमड़े का कवच",
            "fire_dagger": "आग की कटार",
            "orb": "गोला",
            "robe": "चोगा",
            "energy_potion": "ऊर्जा का घोल",
            "magical_focus": "जादुई फोकस",
            "grimuar": "जादू की किताब",
            "eldritch_talisman": "एल्ड्रिच तावीज़",
            "spellbook": "जादू की किताब",
            "magical_wand": "जादुई छड़ी",
            "scroll_of_magic_arrow": "जादुई तीर का स्क्रॉल",
            "battle_axe": "युद्ध कुल्हाड़ी",
            "leather_armor": "चमड़े का कवच",
            "herb_pouch": "जड़ी-बूटियों का थैला",
            "tunic": "कुर्ता",
            "meditation_beads": "ध्यान की माला",
            "trap_kit": "जाल का सेट",
            "thieves_tools": "चोर के औजार",
            "Universal_tool": "सार्वभौमिक उपकरण",
            "Elven_cloak": "एल्फ़ की चादर",
            "Dwarven_ale": "बौने की शराब",
            "Orcish_war_paint": "ऑर्क का युद्ध पेंट",
            "Scale_oil": "स्केल के लिए तेल",
            "Blood_vial": "खून की शीशी",
            "Elemental_core": "तत्व का कोर",
            "lute": "वीणा",
            "dagger": "कटार",
            "staff": "लाठी",
            "long_bow": "लंबा धनुष",
            "quiver_of_arrows": "तीरों का तरकश",
            "short_sword": "छोटी तलवार",
            "quality_unique": "अद्वितीय",
            "quality_legendary": "पौराणिक",
            "quality_epic": "महाकाव्य",
            "quality_rare": "दुर्लभ",
            "quality_good": "अच्छा",
            "quality_common": "सामान्य",
            "quality_trash": "कचरा",
            "gm_message_error_full_gm_answer": "न्यूरल नेटवर्क पार्सिंग के लिए जवाब को सही ढंग से फॉर्मेट नहीं कर सका। यदि त्रुटि बार-बार होती है, तो न्यूरल नेटवर्क मॉडल बदलें। यहाँ इसका पूरा जवाब है: \n\n",
            "other_skill_group": "अन्य",
            "skill_energy_cost": "ऊर्जा की इकाइयों में लागत",
            "skill_recovery_time": "लागत (ऊर्जा में)",
            "clear-status-label": "स्थिति साफ़ करें",
            "active-skills-button-label": "सक्रिय कौशल",
            "passive-skills-button-label": "निष्क्रिय कौशल",
            "status-effects-label": "प्रभाव:",
            "tooltip-provider-ai": `न्यूरल नेटवर्क प्रदाता

Websim को छोड़कर सभी प्रदाताओं के लिए, आपको संबंधित वेबसाइट पर पंजीकरण करना होगा और एक API कुंजी या एक्सेस टोकन बनाना होगा। न्यूरल नेटवर्क संदर्भ पर ध्यान दें - Legendarica एक बहुत बड़ा प्रॉम्प्ट का उपयोग करता है, और यह चैट इतिहास और GM द्वारा उपयोग किए गए अन्य डेटा के कारण समय के साथ बढ़ता ही जाता है। कम से कम 128,000 टोकन के संदर्भ की आवश्यकता है। यहां वर्णित जानकारी निर्दिष्ट तिथि (24.11.2024) तक वर्तमान है।

Cohere (https://coral.cohere.com/). Command R मॉडल तक पूरी तरह से मुफ्त पहुंच प्रदान करता है।
शुरू करने के लिए: मॉडल command-r-plus

Google AI Studio (https://ai.google.dev/aistudio)। सभी मॉडलों की एक मुफ्त सीमा है, स्टूडियो वेबसाइट देखें। प्रायोगिक मॉडलों को आज़माएं - उनके पास आमतौर पर प्रति दिन मुफ्त संदेशों की अधिक सीमा होती है।
शुरू करने के लिए: मॉडल gemini-1.5-pro

Groq (https://groq.com/)। Groq विभिन्न मुफ्त मॉडलों तक पहुंच प्रदान करता है, लेकिन संदर्भ द्वारा उन्हें बहुत सीमित करता है। वर्तमान में, इस साइट पर कोई मुफ्त मॉडल नहीं है जो Legendarica में अच्छा काम करे, लेकिन यह भविष्य में बदल सकता है। सशुल्क मॉडल संभवतः अच्छा काम करते हैं। यहां मॉडलों की सूची देखें: https://console.groq.com/docs/models

Hugging Face (https://huggingface.co/models?inference=warm&other=conversational&sort=trending)। न्यूरल नेटवर्क के लिए एक बड़ा भंडार। इसका उपयोग करने के लिए Inference API का उपयोग किया जाता है, और केवल वे मॉडल जो इसका समर्थन करते हैं, वे गेम के लिए उपलब्ध हैं। प्रति दिन संदेशों की संख्या की एक सीमा है, जो सशुल्क सदस्यता के साथ बढ़ जाती है। यदि मॉडल प्रतिक्रिया के रूप में अपठनीय पाठ भेजते हैं, तो या तो मॉडल बहुत कमजोर है, या तापमान अधिक है। इस मामले में, तापमान कम करने या मॉडल बदलने का प्रयास करें।
शुरू करने के लिए: मॉडल Qwen/Qwen2.5-72B-Instruct (तापमान 0.4)

Mistral AI (https://mistral.ai/)। Mistral AI वेबसाइट "प्रायोगिक" मूल्य निर्धारण योजना में भाग लेने की पेशकश करती है, जिससे सभी Mistral मॉडल उपयोग के लिए मुफ्त हो जाते हैं।
शुरू करने के लिए: मॉडल mistral-large-latest

OpenAI01 (https://openaio1api.com/ - मुख्य वेबसाइट: https://openai01.net/)। OpenAI o1-preview तक पहुंच। कोई मुफ्त प्लान नहीं है। पंजीकरण पर, आपको 10 क्रेडिट मिलते हैं; o1-preview के लिए प्रति अनुरोध 2 क्रेडिट शुल्क लिया जाता है।
मॉडल: o1-preview

Openrouter (https://openrouter.ai/)। मुफ्त और सशुल्क दोनों मॉडल प्रदान करता है। मुफ्त मॉडल में प्रति दिन संदेशों की सीमा होती है।

Websim. Websim द्वारा उपयोग किए जाने वाले न्यूरल नेटवर्क पर निर्भर करता है। Websim द्वारा AI API को Claude से बदलकर कुछ बहुत कमजोर करने के बाद, Websim अब एक अच्छे गेम या यहां तक ​​कि इसके निष्पादन की गारंटी नहीं दे सकता है, क्योंकि उपयोग किया गया AI बहुत कमजोर है। लेकिन यह भविष्य में बदल सकता है।`,
            "tooltip-provider-ai2": `न्यूरल नेटवर्क प्रदाता

Websim को छोड़कर सभी प्रदाताओं के लिए, आपको संबंधित वेबसाइट पर पंजीकरण करना होगा और एक API कुंजी या एक्सेस टोकन बनाना होगा। न्यूरल नेटवर्क संदर्भ पर ध्यान दें - Legendarica एक बहुत बड़ा प्रॉम्प्ट का उपयोग करता है, और यह चैट इतिहास और GM द्वारा उपयोग किए गए अन्य डेटा के कारण समय के साथ बढ़ता ही जाता है। कम से कम 128,000 टोकन के संदर्भ की आवश्यकता है। यहां वर्णित जानकारी निर्दिष्ट तिथि (24.11.2024) तक वर्तमान है।

Cohere (https://coral.cohere.com/). Command R मॉडल तक पूरी तरह से मुफ्त पहुंच प्रदान करता है।
शुरू करने के लिए: मॉडल command-r-plus

Google AI Studio (https://ai.google.dev/aistudio)। सभी मॉडलों की एक मुफ्त सीमा है, स्टूडियो वेबसाइट देखें। प्रायोगिक मॉडलों को आज़माएं - उनके पास आमतौर पर प्रति दिन मुफ्त संदेशों की अधिक सीमा होती है।
शुरू करने के लिए: मॉडल gemini-1.5-pro

Groq (https://groq.com/)। Groq विभिन्न मुफ्त मॉडलों तक पहुंच प्रदान करता है, लेकिन संदर्भ द्वारा उन्हें बहुत सीमित करता है। वर्तमान में, इस साइट पर कोई मुफ्त मॉडल नहीं है जो Legendarica में अच्छा काम करे, लेकिन यह भविष्य में बदल सकता है। सशुल्क मॉडल संभवतः अच्छा काम करते हैं। यहां मॉडलों की सूची देखें: https://console.groq.com/docs/models

Hugging Face (https://huggingface.co/models?inference=warm&other=conversational&sort=trending)। न्यूरल नेटवर्क के लिए एक बड़ा भंडार। इसका उपयोग करने के लिए Inference API का उपयोग किया जाता है, और केवल वे मॉडल जो इसका समर्थन करते हैं, वे गेम के लिए उपलब्ध हैं। प्रति दिन संदेशों की संख्या की एक सीमा है, जो सशुल्क सदस्यता के साथ बढ़ जाती है। यदि मॉडल प्रतिक्रिया के रूप में अपठनीय पाठ भेजते हैं, तो या तो मॉडल बहुत कमजोर है, या तापमान अधिक है। इस मामले में, तापमान कम करने या मॉडल बदलने का प्रयास करें।
शुरू करने के लिए: मॉडल Qwen/Qwen2.5-72B-Instruct (तापमान 0.4)

Mistral AI (https://mistral.ai/)। Mistral AI वेबसाइट "प्रायोगिक" मूल्य निर्धारण योजना में भाग लेने की पेशकश करती है, जिससे सभी Mistral मॉडल उपयोग के लिए मुफ्त हो जाते हैं।
शुरू करने के लिए: मॉडल mistral-large-latest

OpenAI01 (https://openaio1api.com/ - मुख्य वेबसाइट: https://openai01.net/)। OpenAI o1-preview तक पहुंच। कोई मुफ्त प्लान नहीं है। पंजीकरण पर, आपको 10 क्रेडिट मिलते हैं; o1-preview के लिए प्रति अनुरोध 2 क्रेडिट शुल्क लिया जाता है।
मॉडल: o1-preview

Openrouter (https://openrouter.ai/)। मुफ्त और सशुल्क दोनों मॉडल प्रदान करता है। मुफ्त मॉडल में प्रति दिन संदेशों की सीमा होती है।

Websim. Websim द्वारा उपयोग किए जाने वाले न्यूरल नेटवर्क पर निर्भर करता है। Websim द्वारा AI API को Claude से बदलकर कुछ बहुत कमजोर करने के बाद, Websim अब एक अच्छे गेम या यहां तक ​​कि इसके निष्पादन की गारंटी नहीं दे सकता है, क्योंकि उपयोग किया गया AI बहुत कमजोर है। लेकिन यह भविष्य में बदल सकता है।`,
            "tooltip-provider-ai3": `न्यूरल नेटवर्क प्रदाता

Websim को छोड़कर सभी प्रदाताओं के लिए, आपको संबंधित वेबसाइट पर पंजीकरण करना होगा और एक API कुंजी या एक्सेस टोकन बनाना होगा। न्यूरल नेटवर्क संदर्भ पर ध्यान दें - Legendarica एक बहुत बड़ा प्रॉम्प्ट का उपयोग करता है, और यह चैट इतिहास और GM द्वारा उपयोग किए गए अन्य डेटा के कारण समय के साथ बढ़ता ही जाता है। कम से कम 128,000 टोकन के संदर्भ की आवश्यकता है। यहां वर्णित जानकारी निर्दिष्ट तिथि (24.11.2024) तक वर्तमान है।

Cohere (https://coral.cohere.com/). Command R मॉडल तक पूरी तरह से मुफ्त पहुंच प्रदान करता है।
शुरू करने के लिए: मॉडल command-r-plus

Google AI Studio (https://ai.google.dev/aistudio)। सभी मॉडलों की एक मुफ्त सीमा है, स्टूडियो वेबसाइट देखें। प्रायोगिक मॉडलों को आज़माएं - उनके पास आमतौर पर प्रति दिन मुफ्त संदेशों की अधिक सीमा होती है।
शुरू करने के लिए: मॉडल gemini-1.5-pro

Groq (https://groq.com/)। Groq विभिन्न मुफ्त मॉडलों तक पहुंच प्रदान करता है, लेकिन संदर्भ द्वारा उन्हें बहुत सीमित करता है। वर्तमान में, इस साइट पर कोई मुफ्त मॉडल नहीं है जो Legendarica में अच्छा काम करे, लेकिन यह भविष्य में बदल सकता है। सशुल्क मॉडल संभवतः अच्छा काम करते हैं। यहां मॉडलों की सूची देखें: https://console.groq.com/docs/models

Hugging Face (https://huggingface.co/models?inference=warm&other=conversational&sort=trending)। न्यूरल नेटवर्क के लिए एक बड़ा भंडार। इसका उपयोग करने के लिए Inference API का उपयोग किया जाता है, और केवल वे मॉडल जो इसका समर्थन करते हैं, वे गेम के लिए उपलब्ध हैं। प्रति दिन संदेशों की संख्या की एक सीमा है, जो सशुल्क सदस्यता के साथ बढ़ जाती है। यदि मॉडल प्रतिक्रिया के रूप में अपठनीय पाठ भेजते हैं, तो या तो मॉडल बहुत कमजोर है, या तापमान अधिक है। इस मामले में, तापमान कम करने या मॉडल बदलने का प्रयास करें।
शुरू करने के लिए: मॉडल Qwen/Qwen2.5-72B-Instruct (तापमान 0.4)

Mistral AI (https://mistral.ai/)। Mistral AI वेबसाइट "प्रायोगिक" मूल्य निर्धारण योजना में भाग लेने की पेशकश करती है, जिससे सभी Mistral मॉडल उपयोग के लिए मुफ्त हो जाते हैं।
शुरू करने के लिए: मॉडल mistral-large-latest

OpenAI01 (https://openaio1api.com/ - मुख्य वेबसाइट: https://openai01.net/)। OpenAI o1-preview तक पहुंच। कोई मुफ्त प्लान नहीं है। पंजीकरण पर, आपको 10 क्रेडिट मिलते हैं; o1-preview के लिए प्रति अनुरोध 2 क्रेडिट शुल्क लिया जाता है।
मॉडल: o1-preview

Openrouter (https://openrouter.ai/)। मुफ्त और सशुल्क दोनों मॉडल प्रदान करता है। मुफ्त मॉडल में प्रति दिन संदेशों की सीमा होती है।

Websim. Websim द्वारा उपयोग किए जाने वाले न्यूरल नेटवर्क पर निर्भर करता है। Websim द्वारा AI API को Claude से बदलकर कुछ बहुत कमजोर करने के बाद, Websim अब एक अच्छे गेम या यहां तक ​​कि इसके निष्पादन की गारंटी नहीं दे सकता है, क्योंकि उपयोग किया गया AI बहुत कमजोर है। लेकिन यह भविष्य में बदल सकता है।`,
            "throw-item": "फेंक देना",
            "inventory-delete": "यह वस्तु फेंक दो",
            "skill_effect_label": "प्रभाव",
            "npc-info-journal-label": "डायरी",
            "quest-active-label": "सक्रिय",
            "quest-completed-label": "पुरा होना।",
            "quest-purposes-label": "खोज के उद्देश्य:",
            "quest-reward-label": "इनाम",
            "quest-punishment-label": "असफलता की सज़ा",
            "use-npc-journal-label": "चरित्र डायरियाँ उपयोग करें (टोकन बचाने के लिए अक्षम करें)। केवल तभी काम करता है जब चरित्र सूची सक्षम हो।",
            "use-quests-list-label": "क्वेस्ट सूची का उपयोग करें (टोकन बचाने के लिए अक्षम करें).",
            "make-game-quest-oriented-label": "कथानक को और अधिक खोज-आधारित बनाएँ (एक खोज सूची शामिल की जानी चाहिए)।.",
            "stats-button-label": "विशेषताएँ",
            "statsGroup-general-button-label": "सामान्य",
            "statsGroup-main-button-label": "मुख्य",
            "statsGroup-secondary-button-label": "द्वितीयक",
            "player-quests-button-label": "कार्य",
            "image-loading-label": "लोड हो रहा है...",
            "ai-provider-streaming-error-label": "स्ट्रीमिंग मोड में न्यूरल नेटवर्क से डेटा पढ़ने में त्रुटि। कृपया पुनः प्रयास करें या न्यूरल नेटवर्क प्रदाता बदलें।",
            "none-provider-selected-label": "कोई भी तंत्रिका नेटवर्क प्रदाता नहीं चुना गया है। कृपया खेल शुरू करने के लिए एक तंत्रिका नेटवर्क प्रदाता चुनें।.",
            "system-instructions-explanaition": "ये चुने हुए तंत्रिका नेटवर्क प्रदाता के लिए सिस्टम निर्देश हैं। तंत्रिका नेटवर्क के लिए इनकी सर्वोच्च प्राथमिकता है।",
            "confirm_message_label": "क्या आप निश्चित हैं? अपनी कार्रवाई की पुष्टि करें।",
            "ai-none2-label": "कुछ नहीं चुना गया है",
            "ai-none-label": "कुछ नहीं चुना गया है",
            "ai-none3-label": "कुछ नहीं चुना गया है",
            "additional-settings-label2": "आप दाईं ओर ड्रॉपडाउन पैनल में अतिरिक्त सेटिंग्स पा सकते हैं। सेटिंग्स पैनल देखने के लिए स्क्रीन के निचले दाएं कोने में बटन पर क्लिक करें।",
            "additional-settings-label3": "आप दाईं ओर ड्रॉपडाउन पैनल में अतिरिक्त सेटिंग्स पा सकते हैं। सेटिंग्स पैनल देखने के लिए स्क्रीन के निचले दाएं कोने में बटन पर क्लिक करें।",
            "download-system-instructions-button-label": "सिस्टम निर्देशों को फ़ाइल में डाउनलोड करें",
            "load-system-instructions-button-label": "फ़ाइल से सिस्टम निर्देश लोड करें",
            "skill-info-delete": "इस कौशल को भूल जाओ",
            "empty-ai-key-label": "API कुंजी सेट नहीं है। कृपया API कुंजी दर्ज करें।",
            "inventory-count-label": "मात्रा",
            "inventory-quality-label": "गुणवत्ता",
            "inventory-durability-label": "टिकाऊपन",
            "inventory-bonuses-label": "बोनस",
            "inventory-price-label": "मूल्य",
            "inventory-resource-label": "संसाधन",
            "throw-from-item": "कंटेनर से (यदि प्रतीक -> मौजूद है, तो यह आइटम तक का रास्ता इंगित करता है, कंटेनर से कंटेनर तक)",
            "inventory-container-open": "खोलें",
            "inventory-weight-label": "वजन (किलोग्राम)",
            "inventory-capacity-label": "क्षमता",
            "move-to-inventory": "इन्वेंटरी में रखें",
            "place-item-to": "में रखें ",
            "empty-container-label": "खाली",
            "content-description-label": "सामग्री",
            "inventory-volume-label": "आयतन (घन डेसीमीटर)",
            "inventory-contents-count-label": "उपलब्ध क्षमता",
            "inventory-contents-volume-label": "उपलब्ध आयतन (dm³)",
            "inventory-item-inspect": "जांचें",
            "rarity-label": "दुर्लभता",
            "age-label": "उम्र",
            "npc-info-worldview-label": "विश्व दृष्टिकोण",
            "npc-info-race-label": "जाति",
            "npc-info-class-label": "वर्ग",
            "npc-info-stats-label": "विशेषताएँ",
            "npc-info-skills-label": "कौशल",
            "npc-info-effects-label": "सक्रिय प्रभाव",
            "npc-info-appearanceDescription-label": "दिखावट:",
            "npc-info-history-label": "इतिहास:",
            "npc-info-attitude-label": "खिलाड़ी के पात्र के प्रति रवैया:",
            "npc-info-tab-journal-label": "जर्नल",
            "npc-info-tab-memory-diary-label": "क्रॉनिकल्स",
            "npc-info-memory-diary-label": "क्रॉनिकल्स",
            "npc-delete-memory-diary": "इस पात्र की क्रॉनिकल्स भूल जाएं",
            "use-npc-memories-diary-label": "पात्र क्रॉनिकल्स का उपयोग करें (टोकन बचाने के लिए अक्षम करें)। यह केवल तभी काम करता है जब पात्र जर्नल सक्षम है।",
            "status-name-label": "नाम",
            "status-race-label": "जाति",
            "status-class-label": "वर्ग",
            "status-appearanceDescription-label": "वнешность:",
            "status-statusInSociety-label": "समाज में स्थिति:",
            "status-positionInSociety-label": "समाज में पद:",
            "status-affiliationWithOrganizations-label": "संगठनों के साथ संबद्धता:",
        },
        "german-language": {
            // placeholders
            "start-str": "Stärke",
            "start-dex": "Geschicklichkeit",
            "start-con": "Ausdauer",
            "start-intl": "Intelligenz",
            "start-wis": "Weisheit",
            "start-trd": "Handel",
            "start-per": "Wahrnehmung",
            "start-luck": "Glück",
            "start-spd": "Geschwindigkeit",
            "start-money": "Geld",
            "start-exp": "Erfahrung",
            "start-atr": "Attraktivität",
            "start-location-description": "Beschreiben Sie den Startort (optional)",
            "start-location": "Geben Sie den Namen des Startorts ein (optional)",
            "character-starting-inventory": "Beschreiben Sie das Startinventar (optional)",
            "character-prehistory": "Geben Sie die Vorgeschichte des Charakters ein (optional)",
            "character-class-description": "Klassenbeschreibung (optional)",
            "character-class2": "Charakterklasse",
            "character-race-description": "Rassenbeschreibung (optional)",
            "character-race2": "Charakterrasse",
            "character-gender2": "Charaktergeschlecht",
            "character-description": "Charakterbeschreibung (optional)",
            "character-name-my-game": "Charaktername",
            "world-description": "Geben Sie eine Weltbeschreibung und Anweisungen für den Spielleiter ein",
            "character-name": "Geben Sie den Namen des Charakters ein",
            "api-key": "Stellen Sie aus Sicherheitsgründen sicher, dass Sie einen API-Schlüssel mit niedrigem Verbrauchslimit verwenden",
            "api-key2": "Stellen Sie aus Sicherheitsgründen sicher, dass Sie einen API-Schlüssel mit niedrigem Verbrauchslimit verwenden",
            "api-key3": "Stellen Sie aus Sicherheitsgründen sicher, dass Sie einen API-Schlüssel mit niedrigem Verbrauchslimit verwenden",
            "ai-model": "Geben Sie den Namen des neuronalen Netzwerkmodells ein",
            "ai-model2": "Geben Sie den Namen des neuronalen Netzwerkmodells ein",
            "ai-model3": "Geben Sie den Namen des neuronalen Netzwerkmodells ein",
            "max-gm-symbols": "10000 standardmäßig",
            "my-rules": "Geben Sie Ihre Regeln ein und lassen Sie sie hier. Ab dem nächsten Zug werden sie wirksam, solange sie hier stehen.",
            "user-input": "Sprich deine Aktion, mutiger Abenteurer...",
            "style-of-image-input": "Zum Beispiel: mittelalterlich, fantasy, neuropunk",
            "system-instructions": "Geben Sie Ihre Systemanweisungen hier ein und lassen Sie sie hier. Ab dem nächsten Zug werden sie wirksam sein, solange sie hier bleiben.",
            "world-system-instructions": "Systemanweisungen für das neuronale Netzwerk eingeben (optional)",

            // labels
            "style-of-image-label": "Stil der generierten Bilder",
            "health-label": "Gesundheit:",
            "level-label": "Level:",
            "strength-label": "Stärke:",
            "dexterity-label": "Geschicklichkeit:",
            "wisdom-label": "Weisheit:",
            "perception-label": "Wahrnehmung:",
            "trade-label": "Handel:",
            "attractiveness-label": "Attraktivität:",
            "energy-label": "Energie:",
            "exp-label": "Erfahrung:",
            "constitution-label": "Ausdauer:",
            "speed-label": "Geschwindigkeit:",
            "intelligence-label": "Intelligenz:",
            "luck-label": "Glück:",
            "money-label": "Geld:",
            "send-button": "Senden",
            "resend-button": "Nachricht erneut senden",

            "strength": "Stärke",
            "dexterity": "Geschicklichkeit",
            "wisdom": "Weisheit",
            "perception": "Wahrnehmung",
            "trade": "Handel",
            "attractiveness": "Attraktivität",
            "constitution": "Ausdauer",
            "speed": "Geschwindigkeit",
            "intelligence": "Intelligenz",
            "luck": "Glück",

            "create-setting": "Spiel starten",
            "load-created-setting": "Setting aus Datei laden",
            "save-created-setting": "Setting in Datei speichern",
            "tts-mode-label": "Textvertonung (funktioniert nicht in allen Browsern)",
            "tts-mode-label2": "Textvertonung (funktioniert nicht in allen Browsern)",
            "tts-mode-label3": "Textvertonung (funktioniert nicht in allen Browsern)",

            "tooltip-rpg": "Wenn der Schieberegler rot ist, ist es aktiviert. RPG - Spielmodus. Im RPG-Modus besteht das Gameplay darin, den Charakter zu verbessern, und Fähigkeiten und Inventar sind von zentraler Bedeutung. Wenn deaktiviert, wird das Spiel im Roleplay-Modus gespielt, bei dem es darum geht, eine interessante künstlerische Geschichte aufzubauen, und Fähigkeiten und Inventar von sekundärer Bedeutung sind.",
            "tooltip-rpg2": "Wenn der Schieberegler rot ist, ist es aktiviert. RPG - Spielmodus. Im RPG-Modus besteht das Gameplay darin, den Charakter zu verbessern, und Fähigkeiten und Inventar sind von zentraler Bedeutung. Wenn deaktiviert, wird das Spiel im Roleplay-Modus gespielt, bei dem es darum geht, eine interessante künstlerische Geschichte aufzubauen, und Fähigkeiten und Inventar von sekundärer Bedeutung sind.",
            "nonmagic-mode-name": "Es gibt keine Magie in der Welt",
            "tooltip-noMagic": "Wenn aktiviert (rote Farbe), baut der Spielleiter eine Welt ohne Magie und nur mit realistischen Fähigkeiten auf. Wenn deaktiviert, wird es Magie und unrealistische Fähigkeiten in der Welt geben.",
            "starting-parameters-label": "Startparameter des Charakters: ",
            "my-world-label": "Erfinden Sie Ihre eigene Welt oder beschreiben Sie eine der bekannten existierenden",
            "my-game": "Eigenes Setting",
            "load-savefile": "Datei laden",
            "load-character": "Autosave laden",
            "random-character": "Zufälliger Charakter",
            "create-character": "Spiel starten",
            "tooltip-class": `Die Klasse beeinflusst die Generierung von passiven Fähigkeiten beim Levelaufstieg und die Startgegenstände:

Barbar - Große Axt, Lederrüstung, Heiltrank

Barde - Laute, Dolch, Leichte Rüstung, Bezauberungstrank

Kleriker - Streitkolben, Schild, Kettenhemd, Heiliges Symbol

Druide - Holzstab, Lederrüstung, Kräuterbeutel

Kämpfer - Langschwert, Schild, Kettenhemd, Heiltrank

Mönch - Kampfstab, Mönchsgewand, Meditationsperlen

Paladin - Langschwert, Schild, Plattenrüstung, Heiliges Symbol

Waldläufer - Langbogen, Köcher mit Pfeilen, Lederrüstung, Fallensatz

Schurke - Kurzschwert, Dolch, Lederrüstung, Diebeswerkzeug

Zauberer - Feuerdolch, Kugel, Robe, Energietrank

Hexenmeister - Magischer Fokus, Lederrüstung, Grimoire, Eldritch-Talisman

Magier - Zauberbuch, Zauberstab, Robe, Magiepfeil-Schriftrolle`,
            "tooltip-race": `Die Rasse beeinflusst den Startort, die Generierung von Rassenfähigkeiten, die Handlung und die Startboni für Fähigkeiten und Gegenstände:
			
Mensch: Glück +2, Handel +1, Wahrnehmung +1, Weisheit -1, Intelligenz -1, Universelles Werkzeug

Elf: Beweglichkeit +2, Geschwindigkeit +1, Attraktivität +1, Stärke -1, Ausdauer -1, Elfenumhang

Zwerg: Handel +2, Stärke +1, Ausdauer +1, Beweglichkeit -1, Geschwindigkeit -1, Zwergenbier

Ork: Stärke +3, Ausdauer +2, Intelligenz -1, Weisheit -1, Attraktivität -1, Orkische Kriegsbemalung

Echse: Ausdauer +2, Geschwindigkeit +1, Attraktivität -1, Schuppenöl

Vampir: Wahrnehmung +1, Attraktivität +1, Beweglichkeit +1, Glück -1, Fläschchen mit Blut

Golem: Stärke +3, Ausdauer +2, Intelligenz -1, Attraktivität -1, Weisheit -1, Elementarkern`,
            "create-character-label": "Erstellen Sie Ihren Charakter",
            "api-key-button": "10 Sekunden anzeigen",
            "api-key-button2": "10 Sekunden anzeigen",
            "api-key-button3": "10 Sekunden anzeigen",
            "ai-model-label": "KI-Modell",
            "ai-model-label2": "KI-Modell",
            "ai-model-label3": "KI-Modell",
            "max-gm-symbols-label": "Maximale Anzahl von Zeichen in der Nachricht des Spielleiters",
            "interface-language": "Spielsprache",
            "interface-language2": "Spielsprache",
            "image-mode-settings-label": "Bildgenerierung (beeinflusst nicht die Anzahl der Anfragen, da ein kostenloser Service verwendet wird)",
            "load-my-rules-button-label": "Regeln aus Datei laden",
            "download-my-rules-button-label": "Regeln in Datei speichern",
            "my-rules-explanaition": "Hier können Sie die Spielregeln ändern oder ergänzen oder einfach das Verhalten des Spielleiters beeinflussen. Geben Sie einfach hier eine Anweisung ein und lassen Sie sie stehen. Zum Beispiel: 'Im Inventar des Charakters sollte eine Liste als separater Gegenstand sein, in der alle Boni von allen Gegenständen im Inventar zusammengefasst sind, und wenn es keine solche Liste im Inventar gibt, füge sie hinzu' oder 'Lass in jeder Location Monster sein'. Warnung: Die vorgenommenen Änderungen können einige Spielmechaniken kaputt machen. Oder auch nicht. Seien Sie mutig!",
            "clear-log": "Log löschen. Hat kaum Einfluss auf das Gedächtnis des Spielleiters, da er sich nur an die letzten 5 Log-Nachrichten erinnert",
            "clear-system-chat": "Alle roten Nachrichten aus dem Chat entfernen. Hat keinen Einfluss auf das Gedächtnis des Spielleiters",
            "clear-half-chat": "Hälfte des Chats löschen. Details aus dem gelöschten Chat werden vom Spielleiter vergessen. Komprimierte Informationen, die in Locations- und Gegenstandsbeschreibungen gespeichert sind, werden nicht vergessen. Sie können einzelne Ereignisse oder eine komprimierte Abenteuergeschichte auf separate Papierblätter im Inventar schreiben, bevor Sie den Chat löschen.",
            "settings-button-label": "Einstellungen",
            "load-box-button-label": "Spiel laden",
            "save-box-button-lable": "Spiel speichern",
            "my-rules-button-label": "Eigene Regeln (Prompt)",
            "antilag-button-label": "Lags reduzieren",
            "log-button-label": "Aktionsberechnungslog",
            "locations-button-label": "Orte",
            "inventory-button-label": "Inventar",
            "alert_cant_start": "Bitte füllen Sie alle Felder aus, bevor Sie den Charakter erstellen.",
            "api-key-label": "Ihr API-Schlüssel",
            "api-key-label2": "Ihr API-Schlüssel",
            "api-key-label3": "Ihr API-Schlüssel",
            "ai-provider-label": "Anbieter neuronaler Netzwerke",
            "ai-provider-label2": "Anbieter neuronaler Netzwerke",
            "ai-provider-label3": "Anbieter neuronaler Netzwerke",
            "location-delete": "Diesen Ort vergessen",
            "player-status-label": "Status",
            "status-purposes-label": "Mögliche Zwecke:",
            "player-npc-button-label": "Charaktere",
            "use-status-label": "Status verwenden (deaktivieren, um Token zu speichern)",
            "use-npc-list-label": "Charakterliste verwenden (deaktivieren, um Token zu speichern)",
            "npc-delete": "Vergiss diesen Charakter",
            "npc-delete-journal": "Vergessen Sie das Tagebuch dieser Figur",

            // selectors
            "free-roam": "Freies Erkunden (Mach, was du willst)",
            "mysterious-plague": "Mysteriöse Seuche",
            "missing-nobles": "Vermisste Adelige",
            "haunted-village": "Verfluchtes Dorf",
            "bandit-uprising": "Banditenaufstand",
            "ancient-ruins": "Antike Ruinen",
            "political-intrigue": "Politische Intrigen",
            "dragon-threat": "Drachenbedrohung",
            "cursed-artifact": "Verfluchtes Artefakt",
            "lost-expedition": "Verlorene Expedition",
            "merchant-caravan": "Handelskarawane",
            "rebellion": "Rebellion",
            "prophecy": "Prophezeiung",
            "seaside-terror": "Schrecken an der Küste",
            "festival-sabotage": "Festivalsabotage",
            "hidden-cult": "Geheimer Kult",
            "elemental-chaos": "Elementares Chaos",
            "magical-academy": "Magische Akademie",
            "royal-escort": "Königliche Eskorte",
            "giant-invasion": "Rieseninvasion",
            "random": "Zufällige Kampagne aus der Liste",

            "wizard": "Zauberer",
            "warlock": "Hexenmeister",
            "sorcerer": "Hexer",
            "rogue": "Schurke",
            "ranger": "Waldläufer",
            "paladin": "Paladin",
            "monk": "Mönch",
            "fighter": "Kämpfer",
            "druid": "Druide",
            "cleric": "Kleriker",
            "bard": "Barde",
            "barbarian": "Barbar",
            "no-choosed-class": "Klasse wählen",

            "golem": "Golem",
            "vampire": "Vampir",
            "lizardman": "Echsenmensch",
            "orc": "Ork",
            "dwarf": "Zwerg",
            "elf": "Elf",
            "human": "Mensch",
            "no-choosed-race": "Rasse wählen",

            "female": "Weiblich",
            "male": "Männlich",
            "no-choosed-gender": "Geschlecht wählen",

            //not interface
            "item_notepad": "Notizbuch für Notizen",
            "item_notepad_description": "Notizbuch für Notizen",
            "game_starting_description": `---- ABSOLUTE LEGENDARICA ----\n\n Ein neues Spiel beginnt. Du bist völlig frei zu tun und zu sagen, was immer du willst. Allerdings werden die Konsequenzen nicht lange auf sich warten lassen, besonders wenn dein Charakter nicht genügend Fähigkeiten für deine Idee hat. Du kannst ein Held, ein Unternehmer, ein Dieb, ein Schauspieler, ein Auftragsmörder, ein Bauer, ein König und vieles mehr werden ... Volle Handlungsfreiheit.\n\n Der eingebaute Speicher reicht für die letzten 30 besuchten Orte, NPCs, Quests (abgeschlossen) - alte werden gelöscht. Du kannst dir die benötigten merken, indem du auf das Schloss links neben dem Namen (in der Liste) klickst. \nJeder Ort hat einen Schwierigkeitsgrad, der durch eine Zahl in Klammern angegeben wird.\n\n Einige Fähigkeitsprüfungen können als erfolgreich oder nicht erfolgreich gewertet werden, selbst wenn das Berechnungsergebnis das Gegenteil ist, da die Logik der Situation wichtiger ist als der Zufall, aber eine solche Prüfung wird dennoch die Konsequenzen dieses Erfolgs/Misserfolgs beeinflussen. Nachdem ein Charakter ein Level aufsteigt, wird ein zufälliger Basisparameter zufällig um 1 erhöht und in der nächsten Runde eine neue passive Fähigkeit generiert. Während des Spiels können Gegenstände mit Boni auf Fähigkeiten auftauchen, die nicht in der Fähigkeitsliste enthalten sind, aber solche Boni können sich auf mehrere Fähigkeiten aus der Liste auswirken: ein Gegenstand mit einem Bonus, z. B. auf Beweglichkeit +1, kann sowohl die Geschwindigkeit als auch die Geschicklichkeit in verschiedenen Prüfungen erhöhen.\n\n Du kannst den Spielleiter im Chat bitten, einen Fehler zu korrigieren, den er gemacht hat, z. B. falsch berechnetes Geld, Energie usw. Der Spielleiter versteht vieles, also experimentiere ruhig.\n\n Du kannst versuchen, deine eigenen Anweisungen für den Spielleiter zu erstellen, die deinen Bedürfnissen entsprechen, im Tab 'Deine Regeln (Prompt)'.\n\n Das Spiel wird alle 5 Minuten automatisch gespeichert. Beim Laden des Spiels erinnert sich der Spielleiter nur an die Geschichte aus der Beschreibung der Orte, der Beschreibung der Gegenstände sowie der Liste der NPCs, des NPC-Tagebuchs, des Charakterstatus und des Quest-Logs. Dies ist nützlich, um den Spielleiter nicht zu überlasten. Aber wenn du willst, kannst du seinen Speicher nach dem Laden erweitern, indem du vor dem Speichern eine detaillierte Geschichte der letzten Ereignisse auf ein Blatt Papier in deinem Inventar schreibst. Und der Spielleiter wird dieses Blatt Papier nach dem Laden sehen. Die Speicherdatei kann im Notepad geöffnet und die Daten dort geändert werden - aber bevor du das tust, vergiss nicht, eine Sicherungskopie des Spielstands zu erstellen, damit er bei einer erfolglosen Bearbeitung nicht verloren geht.\n\n Für unbegrenzten Zugriff auf neuronale Netzwerke kannst du einen der Anbieter von neuronalen Netzwerken aus der Liste verwenden.\nDie Anzahl der verbrauchten Token pro Runde und pro Sitzung kann angezeigt werden, indem man mit dem Mauszeiger über die Nachricht im Aktionsprotokoll fährt.\n\n Du kannst diese und alle anderen Nachrichten löschen, indem du auf das Kreuz in der Ecke der Nachricht klickst. Gelöschte Nachrichten werden aus dem Speicher des Spielleiters gelöscht.\n\n Dieses Spiel ist eine stark modifizierte (glaub mir, SEHR STARK) Version des Spiels von Creature. Du kannst das Original unter folgendem Link ansehen: https://websim.ai/@Creature/legendarica-v1-neural-sandbox\n\n Bitte erwäge, mir (Lottarend - dem Autor von ABSOLUTE LEGENDARICA) zu danken, um mir eine Freude zu machen und mich zu motivieren, neue Versionen des Spiels zu veröffentlichen.`,
            "game_starting_donate": "Danken Sie dem Autor von ABSOLUTE LEGENDARICA:\n\n Kryptowährung: TSH1v85VbFo6b8gzb2xKcHy7Lk5NYLqVYh (USDT TRC20)\n\nAnderer Weg: https://www.donationalerts.com/r/lottarend",
            "game_starting_discord": "Im Discord können Sie die neueste Version finden und das Spiel diskutieren https://discord.com/invite/JVshMaq3GG",
            "null_resend_message": "Wo bin ich? Wer bin ich?",
            "item_not_descripted": "Der Gegenstand wurde vom Helden nicht untersucht",
            "name_turn": "Zug",
            "name_answer_turn": "Antwort auf den Zug",
            "turn_log_name": "Zugprotokoll",
            "location_difficulty_label": "Schwierigkeit",
            "message_after_load": "Wo bin ich? Fasse kurz meine Geschichte zusammen.",
            "gm_message_error": "Fehler. Möglicherweise haben Sie das Limit für die Anzahl der Nachrichten an den GM überschritten: 10 pro Minute oder 20 pro fünf Minuten oder 100 pro 24 Stunden (Informationen zu den Limits sind zum Zeitpunkt der Spielaktualisierung angegeben, sie können sich ändern). Oder der GM ist stark ausgelastet. Oder ein anderer unbekannter Fehler. Bitte versuchen Sie es erneut",
            "big_axe": "Große Axt",
            "long_sword": "Langschwert",
            "mace": "Streitkolben",
            "shield": "Schild",
            "chainmail": "Kettenhemd",
            "holy_symbol": "Heiliges Symbol",
            "wooden_staff": "Holzstab",
            "light_armor": "Leichte Rüstung",
            "healing_potion": "Heiltrank",
            "charm_potion": "Bezauberungstrank",
            "fox_sneakers": "Lederrüstung",
            "fire_dagger": "Feuerdolch",
            "orb": "Kugel",
            "robe": "Robe",
            "energy_potion": "Energietrank",
            "magical_focus": "Magischer Fokus",
            "grimuar": "Grimoire",
            "eldritch_talisman": "Eldritch-Talisman",
            "spellbook": "Zauberbuch",
            "magical_wand": "Zauberstab",
            "scroll_of_magic_arrow": "Schriftrolle des magischen Pfeils",
            "battle_axe": "Kampfaxt",
            "leather_armor": "Lederrüstung",
            "herb_pouch": "Kräuterbeutel",
            "tunic": "Tunika",
            "meditation_beads": "Meditationsperlen",
            "trap_kit": "Fallensatz",
            "thieves_tools": "Diebeswerkzeug",
            "Universal_tool": 'Universalwerkzeug',
            "Elven_cloak": 'Elfenumhang',
            "Dwarven_ale": 'Zwergenbier',
            "Orcish_war_paint": 'Orkische Kriegsbemalung',
            "Scale_oil": 'Schuppenöl',
            "Blood_vial": 'Blutphiole',
            "Elemental_core": 'Elementarkern',
            "lute": "Laute",
            "dagger": "Dolch",
            "staff": "Stab",
            "long_bow": "Langbogen",
            "quiver_of_arrows": "Köcher mit Pfeilen",
            "short_sword": "Kurzschwert",
            "quality_unique": "Einzigartig",
            "quality_legendary": "Legendär",
            "quality_epic": "Episch",
            "quality_rare": "Selten",
            "quality_good": "Gut",
            "quality_common": "Gewöhnlich",
            "quality_trash": "Müll",

            "gm_message_error_full_gm_answer": "Das neuronale Netz konnte die Antwort nicht korrekt für das Parsing formatieren. Wenn der Fehler häufig auftritt, wechseln Sie das neuronale Netzwerkmodell. Hier ist seine vollständige Antwort: \n\n",
            "other_skill_group": "Andere",
            "skill_energy_cost": "Kosten (in energieeinheiten)",
            "clear-status-label": "Status löschen",
            "active-skills-button-label": "Aktive Fähigkeiten",
            "passive-skills-button-label": "Passive Fähigkeiten",
            "status-effects-label": "Effekte:",
            "tooltip-provider-ai": `Neuronale Netzwerk-Anbieter

Für alle Anbieter außer Websim müssen Sie sich auf der jeweiligen Website registrieren und einen API-Schlüssel oder ein Access Token erstellen. Achten Sie auf den Kontext des neuronalen Netzwerks - Legendarica verwendet einen sehr großen Prompt, der aufgrund des Chatverlaufs und anderer vom GM verwendeter Daten mit der Zeit immer größer wird. Ein Kontext von mindestens 128.000 Token ist erforderlich. Die hier beschriebenen Informationen sind auf dem Stand des angegebenen Datums (24.11.2024).

Cohere (https://coral.cohere.com/). Bietet vollständig kostenlosen Zugriff auf Command R-Modelle.
Erste Schritte: Modell command-r-plus

Google AI Studio (https://ai.google.dev/aistudio). Alle Modelle haben ein kostenloses Kontingent; siehe die Studio-Website. Probieren Sie experimentelle Modelle aus - sie haben in der Regel ein größeres Limit an kostenlosen Nachrichten pro Tag.
Erste Schritte: Modell gemini-1.5-pro

Groq (https://groq.com/). Groq bietet Zugriff auf verschiedene kostenlose Modelle, begrenzt diese aber stark durch den Kontext. Derzeit gibt es auf dieser Seite keine kostenlosen Modelle, die in Legendarica gut funktionieren, aber das kann sich in Zukunft ändern. Kostenpflichtige Modelle funktionieren wahrscheinlich gut. Eine Liste der Modelle finden Sie hier: https://console.groq.com/docs/models

Hugging Face (https://huggingface.co/models?inference=warm&other=conversational&sort=trending). Ein großes Repository für neuronale Netzwerke. Für den Zugriff wird die Inference-API verwendet, und nur Modelle, die diese unterstützen, sind für das Spiel verfügbar. Es gibt eine Begrenzung der Anzahl der Nachrichten pro Tag, die mit einem kostenpflichtigen Abonnement erhöht wird. Wenn die Modelle als Antwort unleserlichen Text senden, ist entweder das Modell sehr schwach oder die Temperatur zu hoch. In diesem Fall versuchen Sie, die Temperatur zu senken oder das Modell zu wechseln.
Erste Schritte: Modell Qwen/Qwen2.5-72B-Instruct (Temperatur 0.4)

Mistral AI (https://mistral.ai/). Die Mistral AI-Website bietet die Teilnahme an einem "experimentellen" Tarif an, wodurch alle Mistral-Modelle kostenlos nutzbar werden.
Erste Schritte: Modell mistral-large-latest

OpenAI01 (https://openaio1api.com/ - Hauptwebsite: https://openai01.net/). Zugang zu OpenAI o1-preview. Es gibt keinen kostenlosen Tarif. Bei der Registrierung erhalten Sie 10 Credits; 2 Credits werden pro Anfrage an o1-preview berechnet.
Modell: o1-preview

Openrouter (https://openrouter.ai/). Bietet sowohl kostenlose als auch kostenpflichtige Modelle an. Kostenlose Modelle haben ein tägliches Nachrichtenlimit.

Websim. Hängt vom neuronalen Netzwerk ab, das von Websim verwendet wird. Nachdem Websim die AI-API von Claude auf etwas sehr Schwaches umgestellt hat, kann Websim kein gutes Spiel oder gar dessen Ausführung mehr garantieren, da die verwendete KI sehr schwach ist. Dies kann sich jedoch in Zukunft ändern.`,
            "tooltip-provider-ai2": `Neuronale Netzwerk-Anbieter

Für alle Anbieter außer Websim müssen Sie sich auf der jeweiligen Website registrieren und einen API-Schlüssel oder ein Access Token erstellen. Achten Sie auf den Kontext des neuronalen Netzwerks - Legendarica verwendet einen sehr großen Prompt, der aufgrund des Chatverlaufs und anderer vom GM verwendeter Daten mit der Zeit immer größer wird. Ein Kontext von mindestens 128.000 Token ist erforderlich. Die hier beschriebenen Informationen sind auf dem Stand des angegebenen Datums (24.11.2024).

Cohere (https://coral.cohere.com/). Bietet vollständig kostenlosen Zugriff auf Command R-Modelle.
Erste Schritte: Modell command-r-plus

Google AI Studio (https://ai.google.dev/aistudio). Alle Modelle haben ein kostenloses Kontingent; siehe die Studio-Website. Probieren Sie experimentelle Modelle aus - sie haben in der Regel ein größeres Limit an kostenlosen Nachrichten pro Tag.
Erste Schritte: Modell gemini-1.5-pro

Groq (https://groq.com/). Groq bietet Zugriff auf verschiedene kostenlose Modelle, begrenzt diese aber stark durch den Kontext. Derzeit gibt es auf dieser Seite keine kostenlosen Modelle, die in Legendarica gut funktionieren, aber das kann sich in Zukunft ändern. Kostenpflichtige Modelle funktionieren wahrscheinlich gut. Eine Liste der Modelle finden Sie hier: https://console.groq.com/docs/models

Hugging Face (https://huggingface.co/models?inference=warm&other=conversational&sort=trending). Ein großes Repository für neuronale Netzwerke. Für den Zugriff wird die Inference-API verwendet, und nur Modelle, die diese unterstützen, sind für das Spiel verfügbar. Es gibt eine Begrenzung der Anzahl der Nachrichten pro Tag, die mit einem kostenpflichtigen Abonnement erhöht wird. Wenn die Modelle als Antwort unleserlichen Text senden, ist entweder das Modell sehr schwach oder die Temperatur zu hoch. In diesem Fall versuchen Sie, die Temperatur zu senken oder das Modell zu wechseln.
Erste Schritte: Modell Qwen/Qwen2.5-72B-Instruct (Temperatur 0.4)

Mistral AI (https://mistral.ai/). Die Mistral AI-Website bietet die Teilnahme an einem "experimentellen" Tarif an, wodurch alle Mistral-Modelle kostenlos nutzbar werden.
Erste Schritte: Modell mistral-large-latest

OpenAI01 (https://openaio1api.com/ - Hauptwebsite: https://openai01.net/). Zugang zu OpenAI o1-preview. Es gibt keinen kostenlosen Tarif. Bei der Registrierung erhalten Sie 10 Credits; 2 Credits werden pro Anfrage an o1-preview berechnet.
Modell: o1-preview

Openrouter (https://openrouter.ai/). Bietet sowohl kostenlose als auch kostenpflichtige Modelle an. Kostenlose Modelle haben ein tägliches Nachrichtenlimit.

Websim. Hängt vom neuronalen Netzwerk ab, das von Websim verwendet wird. Nachdem Websim die AI-API von Claude auf etwas sehr Schwaches umgestellt hat, kann Websim kein gutes Spiel oder gar dessen Ausführung mehr garantieren, da die verwendete KI sehr schwach ist. Dies kann sich jedoch in Zukunft ändern.`,
            "tooltip-provider-ai3": `Neuronale Netzwerk-Anbieter

Für alle Anbieter außer Websim müssen Sie sich auf der jeweiligen Website registrieren und einen API-Schlüssel oder ein Access Token erstellen. Achten Sie auf den Kontext des neuronalen Netzwerks - Legendarica verwendet einen sehr großen Prompt, der aufgrund des Chatverlaufs und anderer vom GM verwendeter Daten mit der Zeit immer größer wird. Ein Kontext von mindestens 128.000 Token ist erforderlich. Die hier beschriebenen Informationen sind auf dem Stand des angegebenen Datums (24.11.2024).

Cohere (https://coral.cohere.com/). Bietet vollständig kostenlosen Zugriff auf Command R-Modelle.
Erste Schritte: Modell command-r-plus

Google AI Studio (https://ai.google.dev/aistudio). Alle Modelle haben ein kostenloses Kontingent; siehe die Studio-Website. Probieren Sie experimentelle Modelle aus - sie haben in der Regel ein größeres Limit an kostenlosen Nachrichten pro Tag.
Erste Schritte: Modell gemini-1.5-pro

Groq (https://groq.com/). Groq bietet Zugriff auf verschiedene kostenlose Modelle, begrenzt diese aber stark durch den Kontext. Derzeit gibt es auf dieser Seite keine kostenlosen Modelle, die in Legendarica gut funktionieren, aber das kann sich in Zukunft ändern. Kostenpflichtige Modelle funktionieren wahrscheinlich gut. Eine Liste der Modelle finden Sie hier: https://console.groq.com/docs/models

Hugging Face (https://huggingface.co/models?inference=warm&other=conversational&sort=trending). Ein großes Repository für neuronale Netzwerke. Für den Zugriff wird die Inference-API verwendet, und nur Modelle, die diese unterstützen, sind für das Spiel verfügbar. Es gibt eine Begrenzung der Anzahl der Nachrichten pro Tag, die mit einem kostenpflichtigen Abonnement erhöht wird. Wenn die Modelle als Antwort unleserlichen Text senden, ist entweder das Modell sehr schwach oder die Temperatur zu hoch. In diesem Fall versuchen Sie, die Temperatur zu senken oder das Modell zu wechseln.
Erste Schritte: Modell Qwen/Qwen2.5-72B-Instruct (Temperatur 0.4)

Mistral AI (https://mistral.ai/). Die Mistral AI-Website bietet die Teilnahme an einem "experimentellen" Tarif an, wodurch alle Mistral-Modelle kostenlos nutzbar werden.
Erste Schritte: Modell mistral-large-latest

OpenAI01 (https://openaio1api.com/ - Hauptwebsite: https://openai01.net/). Zugang zu OpenAI o1-preview. Es gibt keinen kostenlosen Tarif. Bei der Registrierung erhalten Sie 10 Credits; 2 Credits werden pro Anfrage an o1-preview berechnet.
Modell: o1-preview

Openrouter (https://openrouter.ai/). Bietet sowohl kostenlose als auch kostenpflichtige Modelle an. Kostenlose Modelle haben ein tägliches Nachrichtenlimit.

Websim. Hängt vom neuronalen Netzwerk ab, das von Websim verwendet wird. Nachdem Websim die AI-API von Claude auf etwas sehr Schwaches umgestellt hat, kann Websim kein gutes Spiel oder gar dessen Ausführung mehr garantieren, da die verwendete KI sehr schwach ist. Dies kann sich jedoch in Zukunft ändern.`,
            "throw-item": "Wegwerfen",
            "inventory-delete": "Wirf diesen Gegenstand weg",
            "skill_effect_label": "Wirkung",
            "npc-info-journal-label": "Tagebuch",
            "quest-active-label": "Aktiv",
            "quest-completed-label": "Vollendet",
            "quest-purposes-label": "Questziele:",
            "quest-reward-label": "Belohnen",
            "quest-punishment-label": "Strafe für versagen",
            "use-npc-journal-label": "Charaktertagebücher verwenden (deaktivieren, um Token zu sparen). Funktioniert nur, wenn die Charakterliste aktiviert ist.",
            "use-quests-list-label": "Benutze die Questliste (deaktivieren, um Token zu sparen).",
            "make-game-quest-oriented-label": "Die Handlung handlungsorientierter gestalten (ein Questlog sollte enthalten sein).",
            "stats-button-label": "Eigenschaften",
            "statsGroup-general-button-label": "Allgemein",
            "statsGroup-main-button-label": "Haupt",
            "statsGroup-secondary-button-label": "Sekundär",
            "player-quests-button-label": "Aufgaben",
            "image-loading-label": "Laden...",
            "ai-provider-streaming-error-label": "Fehler beim Lesen der Daten vom neuronalen Netzwerk im Streaming-Modus. Bitte versuchen Sie es erneut oder wechseln Sie den Anbieter des neuronalen Netzwerks.",
            "none-provider-selected-label": "Es wurde kein neuronaler Netzwerk-Anbieter ausgewählt. Bitte wählen Sie einen neuronalen Netzwerk-Anbieter aus, um das Spiel zu starten.",
            "system-instructions-explanaition": "Dies sind Systemanweisungen für den ausgewählten neuronalen Netzwerk-Anbieter. Sie haben die höchste Priorität für das neuronale Netzwerk.",
            "confirm_message_label": "Sind Sie sicher? Bestätigen Sie Ihre Aktion.",
            "ai-none2-label": "Nichts ausgewählt.",
            "ai-none-label": "Nichts ausgewählt.",
            "ai-none3-label": "Nichts ausgewählt.",
            "additional-settings-label2": "Sie finden zusätzliche Einstellungen im Dropdown-Menü auf der rechten Seite. Klicken Sie auf die Schaltfläche in der unteren rechten Ecke des Bildschirms, um das Einstellungsfenster anzuzeigen.",
            "additional-settings-label3": "Sie finden zusätzliche Einstellungen im Dropdown-Menü auf der rechten Seite. Klicken Sie auf die Schaltfläche in der unteren rechten Ecke des Bildschirms, um das Einstellungsfenster anzuzeigen.",
            "download-system-instructions-button-label": "Systemanweisungen in eine Datei herunterladen",
            "load-system-instructions-button-label": "Systemanweisungen aus Datei laden",
            "skill-info-delete": "Diese Fähigkeit vergessen",
            "empty-ai-key-label": "API-Schlüssel ist nicht festgelegt. Bitte geben Sie den API-Schlüssel ein.",
            "inventory-count-label": "Anzahl",
            "inventory-quality-label": "Qualität",
            "inventory-durability-label": "Haltbarkeit",
            "inventory-bonuses-label": "Bonus",
            "inventory-price-label": "Preis",
            "inventory-resource-label": "Ressource",
            "throw-from-item": "aus dem Container (wenn das Symbol -> vorhanden ist, zeigt es den Pfad zum Element an, vom Container zum Container)",
            "inventory-container-open": "Öffnen",
            "inventory-weight-label": "Gewicht (Kilogramm)",
            "inventory-capacity-label": "Kapazität",
            "move-to-inventory": "In das Inventar legen",
            "place-item-to": "In ",
            "empty-container-label": "Leer",
            "content-description-label": "Inhalt",
            "inventory-volume-label": "Volumen (dm³)",
            "inventory-contents-count-label": "Verfügbare Kapazität",
            "inventory-contents-volume-label": "Verfügbares Volumen (dm³)",
            "inventory-item-inspect": "Untersuchen",
            "rarity-label": "Seltenheit",
            "age-label": "Alter",
            "npc-info-worldview-label": "Weltanschauung",
            "npc-info-race-label": "Rasse",
            "npc-info-class-label": "Klasse",
            "npc-info-stats-label": "Statistiken",
            "npc-info-skills-label": "Fähigkeiten",
            "npc-info-effects-label": "Aktive Effekte",
            "npc-info-appearanceDescription-label": "Aussehen:",
            "npc-info-history-label": "Geschichte:",
            "npc-info-attitude-label": "Einstellung zum Spielercharakter:",
            "npc-info-tab-journal-label": "Journal",
            "npc-info-tab-memory-diary-label": "Chroniken",
            "npc-info-memory-diary-label": "Chroniken",
            "npc-delete-memory-diary": "Chroniken dieses Charakters vergessen",
            "use-npc-memories-diary-label": "Charakterchroniken verwenden (deaktivieren, um Tokens zu sparen). Funktioniert nur, wenn das Charakterjournal aktiviert ist.",
            "status-name-label": "Name",
            "status-race-label": "Rasse",
            "status-class-label": "Klasse",
            "status-appearanceDescription-label": "Aussehen:",
            "status-statusInSociety-label": "Sozialer Status:",
            "status-positionInSociety-label": "Position in der Gesellschaft:",
            "status-affiliationWithOrganizations-label": "Zugehörigkeit zu Organisationen:",
        },
        "french-language": {
            // placeholders
            "start-str": "Force",
            "start-dex": "Dextérité",
            "start-con": "Constitution",
            "start-intl": "Intelligence",
            "start-wis": "Sagesse",
            "start-trd": "Commerce",
            "start-per": "Perception",
            "start-luck": "Chance",
            "start-spd": "Vitesse",
            "start-money": "Argent",
            "start-exp": "Expérience",
            "start-atr": "Attraction",
            "start-location-description": "Décrivez l'emplacement de départ (facultatif)",
            "start-location": "Entrez le nom de l'emplacement de départ (facultatif)",
            "character-starting-inventory": "Décrivez l'inventaire de départ (facultatif)",
            "character-prehistory": "Entrez l'histoire du personnage (facultatif)",
            "character-class-description": "Description de la classe (facultatif)",
            "character-class2": "Classe du personnage",
            "character-race-description": "Description de la race (facultatif)",
            "character-race2": "Race du personnage",
            "character-gender2": "Sexe du personnage",
            "character-description": "Description du personnage (facultatif)",
            "character-name-my-game": "Nom du personnage",
            "world-description": "Entrez la description du monde et les instructions pour le maître du jeu",
            "character-name": "Entrez le nom du personnage",
            "api-key": "Pour des raisons de sécurité, assurez-vous d'utiliser une clé API avec une limite de dépenses basse",
            "api-key2": "Pour des raisons de sécurité, assurez-vous d'utiliser une clé API avec une limite de dépenses basse",
            "api-key3": "Pour des raisons de sécurité, assurez-vous d'utiliser une clé API avec une limite de dépenses basse",
            "ai-model": "Saisissez le nom du modèle de réseau neuronal",
            "ai-model2": "Saisissez le nom du modèle de réseau neuronal",
            "ai-model3": "Saisissez le nom du modèle de réseau neuronal",
            "max-gm-symbols": "10000 par défaut",
            "my-rules": "Entrez vos règles et laissez-les ici. À partir du prochain tour, elles seront appliquées tant qu'elles resteront ici.",
            "user-input": "Parlez de votre action, brave aventurier...",
            "style-of-image-input": "Par exemple : médiéval, fantaisie, neuropunk",
            "system-instructions": "Entrez vos instructions système ici et laissez-les. À partir du prochain tour, elles seront en vigueur tant qu'elles resteront ici.",
            "world-system-instructions": "Saisir les instructions système pour le réseau neuronal (facultatif)",

            //labels
            "style-of-image-label": "Style des images générées",
            "health-label": "Santé:",
            "level-label": "Niveau:",
            "strength-label": "Force:",
            "dexterity-label": "Dextérité:",
            "wisdom-label": "Sagesse:",
            "perception-label": "Perception:",
            "trade-label": "Commerce:",
            "attractiveness-label": "Attraction:",
            "energy-label": "Énergie:",
            "exp-label": "Expérience:",
            "constitution-label": "Constitution:",
            "speed-label": "Vitesse:",
            "intelligence-label": "Intelligence:",
            "luck-label": "Chance:",
            "money-label": "Argent:",
            "send-button": "Envoyer",
            "resend-button": "Renvoyer le message",

            "strength": "Force",
            "dexterity": "Dextérité",
            "wisdom": "Sagesse",
            "perception": "Perception",
            "trade": "Commerce",
            "attractiveness": "Attraction",
            "strength": "Force",
            "constitution": "Constitution",
            "speed": "Vitesse",
            "intelligence": "Intelligence",
            "luck": "Chance",

            "create-setting": "Commencer le jeu",
            "load-created-setting": "Charger un cadre depuis un fichier",
            "save-created-setting": "Sauvegarder le cadre dans un fichier",
            "tts-mode-label": "Synthèse vocale (ne fonctionne pas dans tous les navigateurs)",
            "tts-mode-label2": "Synthèse vocale (ne fonctionne pas dans tous les navigateurs)",
            "tts-mode-label3": "Synthèse vocale (ne fonctionne pas dans tous les navigateurs)",

            "tooltip-rpg": "Si le curseur est rouge, c'est activé. RPG est le mode de jeu. En mode RPG, le gameplay consiste à améliorer le personnage, et les compétences et l'inventaire sont essentiels. Si désactivé, le jeu se déroule en mode Roleplay, qui consiste à construire une histoire intéressante, et les compétences et l'inventaire sont secondaires.",
            "tooltip-rpg2": "Si le curseur est rouge, c'est activé. RPG est le mode de jeu. En mode RPG, le gameplay consiste à améliorer le personnage, et les compétences et l'inventaire sont essentiels. Si désactivé, le jeu se déroule en mode Roleplay, qui consiste à construire une histoire intéressante, et les compétences et l'inventaire sont secondaires.",
            "nonmagic-mode-name": "Pas de magie dans le monde",
            "tooltip-noMagic": "Si activé (couleur rouge), le maître du jeu crée un monde sans magie et uniquement avec des capacités réalistes. Si désactivé, il y aura de la magie et des capacités irréalistes dans le monde.",
            "starting-parameters-label": "Paramètres de départ du personnage :",
            "my-world-label": "Inventez votre propre monde ou décrivez l'un des mondes existants connus",
            "my-game": "Mon propre cadre",
            "load-savefile": "Charger un fichier",
            "load-character": "Charger la sauvegarde automatique",
            "random-character": "Personnage aléatoire",
            "create-character": "Commencer le jeu",
            "tooltip-class": `La classe influence la génération de compétences passives lors de la montée de niveau et les objets de départ :

Barbare - Grande hache, Armure de cuir, Potion de soins

Barde - Luth, Dague, Armure légère, Potion de charme

Clerc - Masse, Bouclier, Cotte de mailles, Symbole sacré

Druide - Bâton en bois, Armure de cuir, Sachet d'herbes

Guerrier - Épée longue, Bouclier, Cotte de mailles, Potion de soins

Moine - Bâton de combat, Tenue de moine, Perles de méditation

Paladin - Épée longue, Bouclier, Armure de plates, Symbole sacré

Rôdeur - Arc long, Carquois de flèches, Armure de cuir, Kit de pièges

Roublard - Épée courte, Dague, Armure de cuir, Outils de voleur

Ensorceleur - Dague de feu, Orbe, Robe, Potion d'énergie

Sorcier - Focus magique, Armure de cuir, Grimoire, Talisman eldritch

Magicien - Livre de sorts, Baguette magique, Robe, Parchemin de projectile magique`,
            "tooltip-race": `La race affecte le lieu de départ, la génération de compétences raciales, l'histoire et les bonus de départ aux compétences et aux objets:
			
Humain : Chance +2, Commerce +1, Perception +1, Sagesse -1, Intelligence -1, Outil Universel

Elfe : Agilité +2, Vitesse +1, Attrait +1, Force -1, Endurance -1, Cape Elfique

Nain : Commerce +2, Force +1, Endurance +1, Agilité -1, Vitesse -1, Bière Naine

Orc : Force +3, Endurance +2, Intelligence -1, Sagesse -1, Attrait -1, Peinture de Guerre Orc

Lézard : Endurance +2, Vitesse +1, Attrait -1, Huile d'Écailles

Vampire : Perception +1, Attrait +1, Agilité +1, Chance -1, Fiole de Sang

Golem : Force +3, Endurance +2, Intelligence -1, Attrait -1, Sagesse -1, Noyau Élémentaire`,
            "create-character-label": "Créez votre personnage",
            "api-key-button": "Afficher pendant 10 secondes",
            "api-key-button2": "Afficher pendant 10 secondes",
            "api-key-button3": "Afficher pendant 10 secondes",
            "ai-model-label": "Modèle de réseau neuronal",
            "ai-model-label2": "Modèle de réseau neuronal",
            "ai-model-label3": "Modèle de réseau neuronal",
            "max-gm-symbols-label": "Nombre maximum de caractères dans le message du maître du jeu",
            "interface-language": "Langue du jeu",
            "interface-language2": "Langue du jeu",
            "image-mode-settings-label": "Génération d'images (n'affecte pas le nombre de requêtes car un service gratuit est utilisé)",
            "load-my-rules-button-label": "Charger les règles depuis un fichier",
            "download-my-rules-button-label": "Télécharger les règles dans un fichier",
            "my-rules-explanaition": "Ici, vous pouvez modifier ou compléter les règles du jeu ou simplement influencer le comportement du maître du jeu. Entrez simplement une instruction ici et laissez-la. Par exemple : 'Dans l'inventaire du personnage, il doit y avoir une liste sous forme d'objet séparé qui indique tous les bonus cumulés de tous les objets de l'inventaire, et s'il n'y a pas une telle liste dans l'inventaire, ajoutez-la' ou 'que chaque lieu ait des monstres'. Avertissement : les modifications apportées peuvent casser certaines mécaniques du jeu. Ou peuvent ne pas les casser. Osez !",
            "clear-log": "Effacer le journal. N'affecte presque pas la mémoire du maître du jeu, car il ne se souvient que des 5 derniers messages du journal",
            "clear-system-chat": "Supprimer tous les messages rouges du chat. N'affecte pas du tout la mémoire du maître du jeu",
            "clear-half-chat": "Effacer la moitié du chat. Les détails du chat supprimé seront oubliés par le maître du jeu. Les informations condensées stockées dans les descriptions des lieux et des objets ne seront pas oubliées. Vous pouvez noter des événements spécifiques ou une histoire condensée des aventures sur des feuilles de papier séparées dans l'inventaire avant de supprimer le chat.",
            "settings-button-label": "Paramètres",
            "load-box-button-label": "Charger la partie",
            "save-box-button-lable": "Sauvegarder la partie",
            "my-rules-button-label": "Mes règles (prompt)",
            "antilag-button-label": "Réduire les lags",
            "log-button-label": "Journal des calculs d'actions",
            "locations-button-label": "Lieux",
            "inventory-button-label": "Inventaire",
            "alert_cant_start": "Veuillez remplir tous les champs avant de créer un personnage.",
            "api-key-label": "Votre clé API",
            "api-key-label2": "Votre clé API",
            "api-key-label3": "Votre clé API",
            "ai-provider-label": "Fournisseur de réseau neuronal",
            "ai-provider-label2": "Fournisseur de réseau neuronal",
            "ai-provider-label3": "Fournisseur de réseau neuronal",
            "location-delete": "Oublier ce lieu",
            "player-status-label": "Statut",
            "status-purposes-label": "Fins possibles:",
            "player-npc-button-label": "Personnages",
            "use-status-label": "Utiliser le statut (désactiver pour enregistrer les jetons)",
            "use-npc-list-label": "Utiliser la liste des personnages (désactiver pour enregistrer les jetons)",
            "npc-delete": "Oublie ce personnage",
            "npc-delete-journal": "Oubliez le journal de ce personnage",

            // selectors
            "free-roam": "Exploration libre (Faites ce que vous voulez)",
            "mysterious-plague": "Peste mystérieuse",
            "missing-nobles": "Nobles disparus",
            "haunted-village": "Village hanté",
            "bandit-uprising": "Soulèvement de bandits",
            "ancient-ruins": "Ruines anciennes",
            "political-intrigue": "Intrigues politiques",
            "dragon-threat": "Menace de dragon",
            "cursed-artifact": "Artefact maudit",
            "lost-expedition": "Expédition perdue",
            "merchant-caravan": "Caravane marchande",
            "rebellion": "Rébellion",
            "prophecy": "Prophétie",
            "seaside-terror": "Terreur côtière",
            "festival-sabotage": "Sabotage de festival",
            "hidden-cult": "Culte caché",
            "elemental-chaos": "Chaos élémentaire",
            "magical-academy": "Académie magique",
            "royal-escort": "Escorte royale",
            "giant-invasion": "Invasion de géants",
            "random": "Campagne aléatoire de la liste",

            "wizard": "Magicien",
            "warlock": "Sorcier",
            "sorcerer": "Ensorceleur",
            "rogue": "Roublard",
            "ranger": "Rôdeur",
            "paladin": "Paladin",
            "monk": "Moine",
            "fighter": "Guerrier",
            "druid": "Druide",
            "cleric": "Clerc",
            "bard": "Barde",
            "barbarian": "Barbare",
            "no-choosed-class": "Choisissez une classe",

            "golem": "Golem",
            "vampire": "Vampire",
            "lizardman": "Homme-lézard",
            "orc": "Orc",
            "dwarf": "Nain",
            "elf": "Elfe",
            "human": "Humain",
            "no-choosed-race": "Choisissez une race",

            "female": "Féminin",
            "male": "Masculin",
            "no-choosed-gender": "Choisissez un sexe",

            //not interface
            "item_notepad": "Bloc-notes",
            "item_notepad_description": "Bloc-notes",
            "game_starting_description": `---- ABSOLUTE LEGENDARICA ----\n\n Un nouveau jeu commence. Vous êtes libre de faire et de dire absolument tout ce que vous voulez. Cependant, les conséquences ne tarderont pas à se faire sentir, surtout si votre personnage n'a pas les compétences suffisantes pour votre idée. Vous pouvez devenir un héros, un entrepreneur, un voleur, un acteur, un assassin à gages, un fermier, un roi et bien plus encore... Liberté d'action totale.\n\n La mémoire intégrée est suffisante pour les 30 derniers lieux visités, PNJ, quêtes (terminées) - les anciens seront supprimés. Vous pouvez vous souvenir de ceux dont vous avez besoin en cliquant sur le cadenas à gauche du nom (dans la liste). \nChaque lieu a un niveau de difficulté indiqué par un chiffre entre parenthèses.\n\n Certains tests de compétences peuvent être considérés comme réussis ou échoués même si le résultat du calcul est opposé, car la logique de la situation est plus importante que le hasard, mais un tel test aura quand même une influence sur les conséquences de cette réussite/échec. Après qu'un personnage ait gagné un niveau, un paramètre de base aléatoire est augmenté aléatoirement de 1 et une nouvelle compétence passive est générée au tour suivant. Pendant le jeu, des objets avec des bonus de compétences qui ne figurent pas dans la liste des compétences peuvent apparaître, mais ces bonus peuvent s'appliquer à plusieurs compétences de la liste : un objet avec un bonus, par exemple, à l'agilité +1, peut augmenter à la fois la vitesse et la dextérité dans différents tests.\n\n Vous pouvez demander à l'hôte dans le chat de corriger une erreur qu'il a commise, comme de l'argent, de l'énergie, etc. mal calculés. L'hôte comprend beaucoup de choses, alors n'hésitez pas à expérimenter.\n\n Vous pouvez essayer de construire vos propres instructions pour l'hôte afin qu'elles correspondent à vos besoins dans l'onglet 'Vos règles (prompt)'\n\n Le jeu est automatiquement sauvegardé toutes les 5 minutes. Lors du chargement du jeu, l'hôte se souvient de l'histoire uniquement à partir de la description des lieux, des descriptions des objets, ainsi que de la liste des PNJ, du journal des PNJ, du statut du personnage et du journal des quêtes. Ceci est utile pour éviter de surcharger l'hôte. Mais si vous le souhaitez, vous pouvez étendre sa mémoire post-chargement de telle manière qu'avant de sauvegarder, vous écrivez une histoire détaillée des derniers événements sur un morceau de papier dans votre inventaire. Et l'hôte verra ce morceau de papier après le chargement. Le fichier de sauvegarde peut être ouvert dans le Bloc-notes et les données peuvent y être modifiées - mais avant de faire cela, n'oubliez pas de sauvegarder une copie de sauvegarde de la sauvegarde afin qu'elle ne disparaisse pas en cas d'édition infructueuse.\n\n Pour un accès illimité aux réseaux neuronaux, vous pouvez utiliser l'un des fournisseurs de réseaux neuronaux de la liste.\nLe nombre de jetons dépensés par tour et par session peut être affiché en passant le curseur sur le message dans le journal d'actions.\n\n Vous pouvez supprimer ce message et tout autre message en cliquant sur la croix dans le coin du message. Les messages supprimés sont effacés de la mémoire de l'hôte.\n\n Ce jeu est une version fortement modifiée (croyez-moi, TRÈS FORTEMENT) du jeu de Creature. Vous pouvez consulter l'original sur le lien : https://websim.ai/@Creature/legendarica-v1-neural-sandbox\n\n Veuillez envisager de me remercier (Lottarend - l'auteur d'ABSOLUTE LEGENDARICA) pour me faire plaisir et me motiver à sortir de nouvelles versions du jeu.`,
            "game_starting_donate": "Remerciez l'auteur d'ABSOLUTE LEGENDARICA :\n\n Crypto-monnaie : TSH1v85VbFo6b8gzb2xKcHy7Lk5NYLqVYh (USDT TRC20)\n\nAutre moyen : https://www.donationalerts.com/r/lottarend",
            "game_starting_discord": "Vous pouvez trouver la dernière version et discuter du jeu sur Discord https://discord.com/invite/JVshMaq3GG",
            "null_resend_message": "Où suis-je ? Qui suis-je ?",
            "item_not_descripted": "L'objet n'a pas été étudié par le héros",
            "name_turn": "Tour",
            "name_answer_turn": "Réponse au tour",
            "turn_log_name": "Journal du tour",
            "location_difficulty_label": "difficulté",
            "message_after_load": "Où suis-je ? Résume brièvement mon histoire.",
            "gm_message_error": "Erreur. Vous avez peut-être dépassé la limite du nombre de messages au MJ : 10 par minute ou 20 par cinq minutes ou 100 par 24 heures (les informations sur les limites sont indiquées au moment de la mise à jour du jeu, elles peuvent changer). Ou le MJ est très occupé. Ou une autre erreur inconnue. Veuillez réessayer",
            "big_axe": "Grande hache",
            "long_sword": "Épée longue",
            "mace": "Masse",
            "shield": "Bouclier",
            "chainmail": "Cotte de mailles",
            "holy_symbol": "Symbole sacré",
            "wooden_staff": "Bâton en bois",
            "light_armor": "Armure légère",
            "healing_potion": "Potion de soins",
            "charm_potion": "Potion de charme",
            "fox_sneakers": "Armure de cuir",
            "fire_dagger": "Dague de feu",
            "orb": "Orbe",
            "robe": "Robe",
            "energy_potion": "Potion d'énergie",
            "magical_focus": "Focus magique",
            "grimuar": "Grimoire",
            "eldritch_talisman": "Talisman eldritch",
            "spellbook": "Livre de sorts",
            "magical_wand": "Baguette magique",
            "scroll_of_magic_arrow": "Parchemin de projectile magique",
            "battle_axe": "Hache de bataille",
            "leather_armor": "Armure de cuir",
            "herb_pouch": "Sachet d'herbes",
            "tunic": "Tunique",
            "meditation_beads": "Perles de méditation",
            "trap_kit": "Kit de pièges",
            "thieves_tools": "Outils de voleur",
            "Universal_tool": 'Outil universel',
            "Elven_cloak": 'Cape elfique',
            "Dwarven_ale": 'Bière naine',
            "Orcish_war_paint": 'Peinture de guerre orque',
            "Scale_oil": 'Huile pour écailles',
            "Blood_vial": 'Fiole de sang',
            "Elemental_core": 'Noyau élémentaire',
            "lute": "Luth",
            "dagger": "Dague",
            "staff": "Bâton",
            "long_bow": "Arc long",
            "quiver_of_arrows": "Carquois de flèches",
            "short_sword": "Épée courte",
            "quality_unique": "Unique",
            "quality_legendary": "Légendaire",
            "quality_epic": "Épique",
            "quality_rare": "Rare",
            "quality_good": "Bon",
            "quality_common": "Commun",
            "quality_trash": "Déchet",

            "gm_message_error_full_gm_answer": "Le réseau neuronal n'a pas pu formater correctement la réponse pour l'analyse. Si l'erreur se répète souvent, changez de modèle de réseau neuronal. Voici sa réponse complète : \n\n",
            "other_skill_group": "Autres",
            "skill_energy_cost": "Coût (en d'énergie)",
            "clear-status-label": "État clair",
            "active-skills-button-label": "Compétences actives",
            "passive-skills-button-label": "Compétences passives",
            "status-effects-label": "Effets:",
            "tooltip-provider-ai": `Fournisseurs de réseaux neuronaux

Pour tous les fournisseurs, à l'exception de Websim, vous devez vous inscrire sur le site Web respectif et créer une clé API ou un jeton d'accès. Faites attention au contexte du réseau neuronal : Legendarica utilise une très grande invite, et celle-ci ne fait qu'augmenter avec le temps en raison de l'historique du chat et des autres données utilisées par le MJ. Un contexte d'au moins 128 000 jetons est requis. Les informations décrites ici sont à jour à la date indiquée (24/11/2024).

Cohere (https://coral.cohere.com/). Fournit un accès entièrement gratuit aux modèles Command R.
Pour commencer : modèle command-r-plus

Google AI Studio (https://ai.google.dev/aistudio). Tous les modèles ont une limite gratuite ; consultez le site Web de Studio. Essayez les modèles expérimentaux ; ils ont généralement une limite plus élevée de messages gratuits par jour.
Pour commencer : modèle gemini-1.5-pro

Groq (https://groq.com/). Groq donne accès à divers modèles gratuits, mais les limite fortement en termes de contexte. Actuellement, il n'y a pas de modèles gratuits sur ce site qui fonctionnent bien dans Legendarica, mais cela pourrait changer à l'avenir. Les modèles payants fonctionnent probablement bien. Consultez la liste des modèles ici : https://console.groq.com/docs/models

Hugging Face (https://huggingface.co/models?inference=warm&other=conversational&sort=trending). Un grand référentiel de réseaux neuronaux. L'API d'inférence est utilisée pour y accéder, et seuls les modèles qui la prennent en charge sont disponibles pour le jeu. Il y a une limite au nombre de messages par jour, qui augmente avec un abonnement payant. Si les modèles envoient du texte illisible en réponse, soit le modèle est très faible, soit la température est élevée. Dans ce cas, essayez de baisser la température ou de changer de modèle.
Pour commencer : modèle Qwen/Qwen2.5-72B-Instruct (température 0,4)

Mistral AI (https://mistral.ai/). Le site Web de Mistral AI propose de participer à un plan tarifaire « expérimental », ce qui rend tous les modèles Mistral gratuits à utiliser.
Pour commencer : modèle mistral-large-latest

OpenAI01 (https://openaio1api.com/ - site principal : https://openai01.net/). Accès à OpenAI o1-preview. Il n'y a pas de forfait gratuit. Lors de l'inscription, vous recevez 10 crédits ; 2 crédits sont facturés par requête à o1-preview.
Modèle : o1-preview

Openrouter (https://openrouter.ai/). Propose des modèles gratuits et payants. Les modèles gratuits ont une limite de messages quotidiens.

Websim. Cela dépend du réseau neuronal utilisé par Websim. Après que Websim a remplacé l'API d'IA de Claude par quelque chose de très faible, Websim ne peut plus garantir un bon jeu ni même son exécution, car l'IA utilisée est très faible. Mais cela pourrait changer à l'avenir.`,
            "tooltip-provider-ai2": `Fournisseurs de réseaux neuronaux

Pour tous les fournisseurs, à l'exception de Websim, vous devez vous inscrire sur le site Web respectif et créer une clé API ou un jeton d'accès. Faites attention au contexte du réseau neuronal : Legendarica utilise une très grande invite, et celle-ci ne fait qu'augmenter avec le temps en raison de l'historique du chat et des autres données utilisées par le MJ. Un contexte d'au moins 128 000 jetons est requis. Les informations décrites ici sont à jour à la date indiquée (24/11/2024).

Cohere (https://coral.cohere.com/). Fournit un accès entièrement gratuit aux modèles Command R.
Pour commencer : modèle command-r-plus

Google AI Studio (https://ai.google.dev/aistudio). Tous les modèles ont une limite gratuite ; consultez le site Web de Studio. Essayez les modèles expérimentaux ; ils ont généralement une limite plus élevée de messages gratuits par jour.
Pour commencer : modèle gemini-1.5-pro

Groq (https://groq.com/). Groq donne accès à divers modèles gratuits, mais les limite fortement en termes de contexte. Actuellement, il n'y a pas de modèles gratuits sur ce site qui fonctionnent bien dans Legendarica, mais cela pourrait changer à l'avenir. Les modèles payants fonctionnent probablement bien. Consultez la liste des modèles ici : https://console.groq.com/docs/models

Hugging Face (https://huggingface.co/models?inference=warm&other=conversational&sort=trending). Un grand référentiel de réseaux neuronaux. L'API d'inférence est utilisée pour y accéder, et seuls les modèles qui la prennent en charge sont disponibles pour le jeu. Il y a une limite au nombre de messages par jour, qui augmente avec un abonnement payant. Si les modèles envoient du texte illisible en réponse, soit le modèle est très faible, soit la température est élevée. Dans ce cas, essayez de baisser la température ou de changer de modèle.
Pour commencer : modèle Qwen/Qwen2.5-72B-Instruct (température 0,4)

Mistral AI (https://mistral.ai/). Le site Web de Mistral AI propose de participer à un plan tarifaire « expérimental », ce qui rend tous les modèles Mistral gratuits à utiliser.
Pour commencer : modèle mistral-large-latest

OpenAI01 (https://openaio1api.com/ - site principal : https://openai01.net/). Accès à OpenAI o1-preview. Il n'y a pas de forfait gratuit. Lors de l'inscription, vous recevez 10 crédits ; 2 crédits sont facturés par requête à o1-preview.
Modèle : o1-preview

Openrouter (https://openrouter.ai/). Propose des modèles gratuits et payants. Les modèles gratuits ont une limite de messages quotidiens.

Websim. Cela dépend du réseau neuronal utilisé par Websim. Après que Websim a remplacé l'API d'IA de Claude par quelque chose de très faible, Websim ne peut plus garantir un bon jeu ni même son exécution, car l'IA utilisée est très faible. Mais cela pourrait changer à l'avenir.`,
            "tooltip-provider-ai3": `Fournisseurs de réseaux neuronaux

Pour tous les fournisseurs, à l'exception de Websim, vous devez vous inscrire sur le site Web respectif et créer une clé API ou un jeton d'accès. Faites attention au contexte du réseau neuronal : Legendarica utilise une très grande invite, et celle-ci ne fait qu'augmenter avec le temps en raison de l'historique du chat et des autres données utilisées par le MJ. Un contexte d'au moins 128 000 jetons est requis. Les informations décrites ici sont à jour à la date indiquée (24/11/2024).

Cohere (https://coral.cohere.com/). Fournit un accès entièrement gratuit aux modèles Command R.
Pour commencer : modèle command-r-plus

Google AI Studio (https://ai.google.dev/aistudio). Tous les modèles ont une limite gratuite ; consultez le site Web de Studio. Essayez les modèles expérimentaux ; ils ont généralement une limite plus élevée de messages gratuits par jour.
Pour commencer : modèle gemini-1.5-pro

Groq (https://groq.com/). Groq donne accès à divers modèles gratuits, mais les limite fortement en termes de contexte. Actuellement, il n'y a pas de modèles gratuits sur ce site qui fonctionnent bien dans Legendarica, mais cela pourrait changer à l'avenir. Les modèles payants fonctionnent probablement bien. Consultez la liste des modèles ici : https://console.groq.com/docs/models

Hugging Face (https://huggingface.co/models?inference=warm&other=conversational&sort=trending). Un grand référentiel de réseaux neuronaux. L'API d'inférence est utilisée pour y accéder, et seuls les modèles qui la prennent en charge sont disponibles pour le jeu. Il y a une limite au nombre de messages par jour, qui augmente avec un abonnement payant. Si les modèles envoient du texte illisible en réponse, soit le modèle est très faible, soit la température est élevée. Dans ce cas, essayez de baisser la température ou de changer de modèle.
Pour commencer : modèle Qwen/Qwen2.5-72B-Instruct (température 0,4)

Mistral AI (https://mistral.ai/). Le site Web de Mistral AI propose de participer à un plan tarifaire « expérimental », ce qui rend tous les modèles Mistral gratuits à utiliser.
Pour commencer : modèle mistral-large-latest

OpenAI01 (https://openaio1api.com/ - site principal : https://openai01.net/). Accès à OpenAI o1-preview. Il n'y a pas de forfait gratuit. Lors de l'inscription, vous recevez 10 crédits ; 2 crédits sont facturés par requête à o1-preview.
Modèle : o1-preview

Openrouter (https://openrouter.ai/). Propose des modèles gratuits et payants. Les modèles gratuits ont une limite de messages quotidiens.

Websim. Cela dépend du réseau neuronal utilisé par Websim. Après que Websim a remplacé l'API d'IA de Claude par quelque chose de très faible, Websim ne peut plus garantir un bon jeu ni même son exécution, car l'IA utilisée est très faible. Mais cela pourrait changer à l'avenir.`,
            "throw-item": "Jeter",
            "inventory-delete": "Jette cet objet",
            "skill_effect_label": "Effet",
            "npc-info-journal-label": "Agenda",
            "quest-active-label": "Actif",
            "quest-completed-label": "Complété",
            "quest-purposes-label": "Objectifs de la quête:",
            "quest-reward-label": "Récompense",
            "quest-punishment-label": "Punition pour échec",
            "use-npc-journal-label": "Utiliser les journaux de personnage (désactiver pour économiser des jetons). Fonctionne uniquement lorsque la liste des personnages est activée.",
            "use-quests-list-label": "Utiliser la liste de quêtes (désactiver pour économiser des jetons).",
            "make-game-quest-oriented-label": "Rendre l'intrigue plus axée sur les quêtes (un journal de quêtes doit être inclus).",
            "stats-button-label": "Caractéristiques",
            "statsGroup-general-button-label": "Général",
            "statsGroup-main-button-label": "Principaux",
            "statsGroup-secondary-button-label": "Secondaires",
            "player-quests-button-label": "Tâches",
            "image-loading-label": "Chargement...",
            "ai-provider-streaming-error-label": "Erreur lors de la lecture des données du réseau neuronal en mode streaming. Veuillez réessayer ou changer de fournisseur de réseau neuronal.",
            "none-provider-selected-label": "Aucun fournisseur de réseau neuronal n'a été sélectionné. Veuillez choisir un fournisseur de réseau neuronal pour démarrer le jeu.",
            "system-instructions-explanaition": "Ce sont des instructions système pour le fournisseur de réseau neuronal sélectionné. Elles ont la plus haute priorité pour le réseau neuronal.",
            "confirm_message_label": "Êtes-vous sûr? Confirmez votre action.",
            "ai-none2-label": "Rien n'est sélectionné.",
            "ai-none-label": "Rien n'est sélectionné.",
            "ai-none3-label": "Rien n'est sélectionné.",
            "additional-settings-label2": "Vous pouvez trouver des paramètres supplémentaires dans le panneau déroulant de droite. Cliquez sur le bouton dans le coin inférieur droit de l'écran pour afficher le panneau des paramètres.",
            "additional-settings-label3": "Vous pouvez trouver des paramètres supplémentaires dans le panneau déroulant de droite. Cliquez sur le bouton dans le coin inférieur droit de l'écran pour afficher le panneau des paramètres.",
            "download-system-instructions-button-label": "Systemanweisungen in eine Datei herunterladen",
            "load-system-instructions-button-label": "Charger les instructions système à partir du fichier",
            "skill-info-delete": "Oublier cette compétence",
            "empty-ai-key-label": "La clé API n'est pas définie. Veuillez saisir la clé API.",
            "inventory-count-label": "Quantité",
            "inventory-quality-label": "Qualité",
            "inventory-durability-label": "Durabilité",
            "inventory-bonuses-label": "Bonus",
            "inventory-price-label": "Prix",
            "inventory-resource-label": "Ressource",
            "throw-from-item": "du conteneur (si le symbole -> est présent, il indique le chemin vers l'objet, du conteneur au conteneur)",
            "inventory-container-open": "Ouvrir",
            "inventory-weight-label": "Poids (kilogrammes)",
            "inventory-capacity-label": "Capacité",
            "move-to-inventory": "Placer dans l'inventaire",
            "place-item-to": "Placer dans ",
            "empty-container-label": "Vide",
            "content-description-label": "Contenu",
            "inventory-volume-label": "Volume (dm³)",
            "inventory-contents-count-label": "Capacité disponible",
            "inventory-contents-volume-label": "Volume disponible (dm³)",
            "inventory-item-inspect": "Inspecter",
            "rarity-label": "Rareté",
            "age-label": "Âge",
            "npc-info-worldview-label": "Vision du monde",
            "npc-info-race-label": "Race",
            "npc-info-class-label": "Classe",
            "npc-info-stats-label": "Caractéristiques",
            "npc-info-skills-label": "Compétences",
            "npc-info-effects-label": "Effets Actifs",
            "npc-info-appearanceDescription-label": "Apparence:",
            "npc-info-history-label": "Histoire:",
            "npc-info-attitude-label": "Attitude envers le personnage joueur:",
            "npc-info-tab-journal-label": "Journal",
            "npc-info-tab-memory-diary-label": "Chroniques",
            "npc-info-memory-diary-label": "Chroniques",
            "npc-delete-memory-diary": "Oublier les chroniques de ce personnage",
            "use-npc-memories-diary-label": "Utiliser les chroniques des personnages (désactivez pour économiser des jetons). Fonctionne uniquement lorsque le journal des personnages est activé.",
            "status-name-label": "Nom",
            "status-race-label": "Race",
            "status-class-label": "Classe",
            "status-appearanceDescription-label": "Apparence :",
            "status-statusInSociety-label": "Statut Social :",
            "status-positionInSociety-label": "Position dans la Société :",
            "status-affiliationWithOrganizations-label": "Affiliation avec des Organisations :",
        }
    };

    //------ Internal ------//
    function getDefaultLanguage() {
        const language = navigator.language || navigator.userLanguage;
        if (language.startsWith('ru'))
            return 'russian-language';
        if (language.startsWith('es'))
            return 'spanish-language';
        if (language.startsWith('pt'))
            return 'portuguese-language';
        if (language.startsWith('de'))
            return 'german-language';
        if (language.startsWith('fr'))
            return 'french-language';
        if (language.startsWith('hi'))
            return 'hindi-language';

        return 'english-language';
    }

    function getCurrentLanguage() {
        return localStorage.getItem('saveLanguage') || getDefaultLanguage();
    }

    function setLanguage(language) {
        localStorage.setItem('saveLanguage', language);
        updateLanguage(language);
    }

    function updateLanguage(language) {
        //Array of IDs for placeholders
        const placeholders = [
            'start-str', 'start-dex', 'start-con', 'start-intl',
            'start-wis', 'start-trd', 'start-per', 'start-luck',
            'start-spd', 'start-money', 'start-exp', 'start-atr',
            'start-location-description', 'start-location',
            'character-starting-inventory', 'character-prehistory',
            'character-class-description', 'character-class2',
            'character-race-description', 'character-race2',
            'character-gender2', 'character-description',
            'character-name-my-game', 'world-description',
            'character-name', 'api-key', 'api-key2', 'api-key3', 'ai-model', 'ai-model2', 'ai-model3',
            'max-gm-symbols', 'my-rules', 'user-input', 'style-of-image-input', 'system-instructions',
            'world-system-instructions',
        ];

        //Update placeholders
        placeholders.forEach(id => {
            const element = document.getElementById(id) || '';
            if (element) {
                element.placeholder = translations[language][id];
            } else {
                console.warn(`Element with ID "${id}" not found.`);
            }
        });

        //Array of IDs for labels
        const labels = [
            'health-label', 'level-label', 'strength-label', 'dexterity-label',
            'wisdom-label', 'perception-label', 'trade-label', 'energy-label',
            'exp-label', 'constitution-label', 'speed-label', 'intelligence-label',
            'luck-label', 'attractiveness-label', 'money-label', 'send-button', 'resend-button',
            'create-setting', 'load-created-setting', 'save-created-setting',
            'tts-mode-label', 'tts-mode-label2', 'tts-mode-label3', 'tooltip-class', 'tooltip-rpg', 'tooltip-rpg2',
            'nonmagic-mode-name', 'tooltip-noMagic', 'starting-parameters-label',
            'my-world-label', 'my-game', 'load-savefile', 'max-gm-symbols-label',
            'load-character', 'random-character', 'create-character',
            'create-character-label', 'api-key-button', 'api-key-button2', 'api-key-button3',
            'ai-model-label', 'ai-model-label2', 'ai-model-label3',
            'interface-language', 'interface-language2', 'image-mode-settings-label',
            'load-my-rules-button-label', 'download-my-rules-button-label',
            'my-rules-explanaition', 'clear-log', 'clear-system-chat',
            'clear-half-chat', 'settings-button-label',
            'load-box-button-label', 'save-box-button-lable',
            'my-rules-button-label', 'antilag-button-label',
            'log-button-label', 'locations-button-label', 'tooltip-race', 'location-delete', 'api-key-label', 'api-key-label2', 'api-key-label3',
            'ai-provider-label', 'ai-provider-label2', 'ai-provider-label3',
            'player-status-label', 'status-purposes-label', 'player-npc-button-label',
            'use-status-label', 'use-npc-list-label', 'npc-delete',
            'inventory-button-label', 'random-character',
            'style-of-image-label', 'clear-status-label', 'active-skills-button-label', 'passive-skills-button-label',
            'tooltip-provider-ai', 'tooltip-provider-ai2', 'tooltip-provider-ai3',
            'inventory-delete', 'npc-info-journal-label', 'npc-delete-journal', 'use-npc-journal-label', 'use-quests-list-label', 'make-game-quest-oriented-label',
            'stats-button-label', 'statsGroup-general-button-label', 'statsGroup-main-button-label', 'statsGroup-secondary-button-label', 'player-quests-button-label',
            'system-instructions-explanaition', 'ai-none2-label', 'ai-none-label', 'ai-none3-label', 'additional-settings-label2', 'additional-settings-label3',
            'download-system-instructions-button-label', 'load-system-instructions-button-label', 'skill-info-delete', 'inventory-container-open',
            "npc-info-attitude-label", "npc-info-history-label", "npc-info-appearanceDescription-label",
            "npc-info-tab-journal-label", "npc-info-tab-memory-diary-label",
            "npc-info-memory-diary-label", "npc-delete-memory-diary", "use-npc-memories-diary-label",
            "status-appearanceDescription-label", "status-statusInSociety-label", "status-positionInSociety-label", "status-affiliationWithOrganizations-label"
        ];

        //Update labels
        labels.forEach(id => {
            const element = document.getElementById(id);
            if (element)
                element.textContent = translations[language][id] || '';
        });

        //translate selectors
        function translateOptions(selectId) {
            const element = document.getElementById(selectId);
            if (!element)
                return;

            const options = element.querySelectorAll('option');
            options.forEach(option => {
                const key = option.getAttribute('data-translate-key');
                if (translations[language][key])
                    option.textContent = translations[language][key];
            });
        }

        //call translate for each of menu options
        translateOptions('campaign-select');
        translateOptions('character-class');
        translateOptions('character-race');
        translateOptions('character-gender');
    }

    (function setDefaultDataAndHandlers() {
        const currentLanguage = getCurrentLanguage();
        setLanguage(currentLanguage);

        const newGameLanguageMenu = document.getElementById('choose-language-menu');
        const settingsLanguageMenu = document.getElementById('choose-language');
        newGameLanguageMenu.value = currentLanguage;
        settingsLanguageMenu.value = currentLanguage;

        //Add event listener to change language
        newGameLanguageMenu.addEventListener('change', function () {
            setLanguage(this.value);
            settingsLanguageMenu.value = this.value;
        });

        settingsLanguageMenu.addEventListener('change', function () {
            setLanguage(this.value);
            newGameLanguageMenu.value = this.value;
        });
    })();

    return {
        get translations() {
            return translations;
        },

        get currentLanguage() {
            return getCurrentLanguage();
        },

        updateCurrentLanguage: function () {
            const currentLanguage = getCurrentLanguage();

            updateLanguage(currentLanguage);
            setLanguage(currentLanguage);
        },

        setTranslation: function (language, id, translation) {
            const isLanguageExist = !!translations[language];
            const languageData = isLanguageExist ? translations[language] : {};
            languageData[id] = translation;
            if (!isLanguageExist)
                translations[language] = languageData;
        },

        setShortNewGameMessage: function (name, gender, race, characterClass) {
            const id = "game_starting_message";

            this.setTranslation("english-language", id, `This is the beginning of a new game, the character's name is ${name}, their gender is ${gender}, race is ${race}, class is ${characterClass}!`);
            this.setTranslation("russian-language", id, `Это начало новой игры, имя персонажа - ${name}, его пол ${gender}, раса ${race}, класс ${characterClass}!`);
            this.setTranslation("spanish-language", id, `¡Este es el comienzo de un nuevo juego, el nombre del personaje es ${name}, su género es ${gender}, su raza es ${race}, su clase es ${characterClass}!`);
            this.setTranslation("portuguese-language", id, `Este é o início de um novo jogo, o nome do personagem é ${name}, seu gênero é ${gender}, raça é ${race}, classe é ${characterClass}!`);
            this.setTranslation("hindi-language", id, `यह एक नए खेल की शुरुआत है, चरित्र का नाम ${name} है, उनका लिंग ${gender} है, जाति ${race} है, वर्ग ${characterClass} है!`);
            this.setTranslation("german-language", id, `Dies ist der Beginn eines neuen Spiels, der Name des Charakters ist ${name}, sein Geschlecht ist ${gender}, Rasse ist ${race}, Klasse ist ${characterClass}!`);
            this.setTranslation("french-language", id, `C'est le début d'un nouveau jeu, le nom du personnage est ${name}, son sexe est ${gender}, sa race est ${race}, sa classe est ${characterClass}!`);

            return id;
        },

        setFullNewGameMessage: function (parameters) {
            const id = "game_starting_message";

            const translationData = {
                "en": {
                    "raceDescription": parameters.raceDescription !== 'special race description is absent' ? `- ${parameters.raceDescription}` : '',
                    "classDescription": parameters.classDescription !== 'special class description is absent' ? `- ${parameters.classDescription}` : '',
                    "characterDescription": parameters.characterDescription !== 'special character description is absent' ? `according to what the character ${parameters.characterDescription}` : '',
                    "characterPrehistory": parameters.characterPrehistory ? `according to what the character ${parameters.characterPrehistory}` : '',
                    "characterStartingInventory": parameters.characterStartingInventory ? `according to ${parameters.characterStartingInventory}` : 'according to their race and class (4 items total)',
                    "itemContaining": parameters.nonMagicMode ? 'skill instructions' : 'spells',
                    "examineItem": parameters.nonMagicMode ? 'skills. Magic is absent in the world, the skill is realistic.' : 'spells',
                    "startLocation": parameters.startLocation ? parameters.startLocation : ', where the character is located,',
                    "startLocationDescription": parameters.startLocationDescription ? `: ${parameters.startLocationDescription}` : ''
                },
                "ru": {
                    "raceDescription": parameters.raceDescription !== 'special race description is absent' ? `- ${parameters.raceDescription}` : '',
                    "classDescription": parameters.classDescription !== 'special class description is absent' ? `- ${parameters.classDescription}` : '',
                    "characterDescription": parameters.characterDescription !== 'special character description is absent' ? `согласно тому, что персонаж ${parameters.characterDescription}` : '',
                    "characterPrehistory": parameters.characterPrehistory ? `согласно тому, что персонаж ${parameters.characterPrehistory}` : '',
                    "characterStartingInventory": parameters.characterStartingInventory ? `согласно ${parameters.characterStartingInventory}` : 'согласно их расе и классу (всего 4 предмета)',
                    "itemContaining": parameters.nonMagicMode ? 'инструкции по навыкам' : 'заклинания',
                    "examineItem": parameters.nonMagicMode ? 'навыки. Магия отсутствует в мире, навык реалистичен.' : 'заклинания',
                    "startLocation": parameters.startLocation ? parameters.startLocation : ', где находится персонаж,',
                    "startLocationDescription": parameters.startLocationDescription ? `: ${parameters.startLocationDescription}` : ''
                },
                "sp": {
                    "raceDescription": parameters.raceDescription !== 'special race description is absent' ? `- ${parameters.raceDescription}` : '',
                    "classDescription": parameters.classDescription !== 'special class description is absent' ? `- ${parameters.classDescription}` : '',
                    "characterDescription": parameters.characterDescription !== 'special character description is absent' ? `según lo que el personaje ${parameters.characterDescription}` : '',
                    "characterPrehistory": parameters.characterPrehistory ? `según lo que el personaje ${parameters.characterPrehistory}` : '',
                    "characterStartingInventory": parameters.characterStartingInventory ? `según ${parameters.characterStartingInventory}` : 'según su raza y clase (4 elementos en total)',
                    "itemContaining": parameters.nonMagicMode ? 'instrucciones de habilidades' : 'hechizos',
                    "examineItem": parameters.nonMagicMode ? 'habilidades. La magia está ausente en el mundo, la habilidad es realista.' : 'hechizos',
                    "startLocation": parameters.startLocation ? parameters.startLocation : ', donde se encuentra el personaje,',
                    "startLocationDescription": parameters.startLocationDescription ? `: ${parameters.startLocationDescription}` : ''
                },
                "po": {
                    "raceDescription": parameters.raceDescription !== 'special race description is absent' ? `- ${parameters.raceDescription}` : '',
                    "classDescription": parameters.classDescription !== 'special class description is absent' ? `- ${parameters.classDescription}` : '',
                    "characterDescription": parameters.characterDescription !== 'special character description is absent' ? `de acordo com o que o personagem ${parameters.characterDescription}` : '',
                    "characterPrehistory": parameters.characterPrehistory ? `de acordo com o que o personagem ${parameters.characterPrehistory}` : '',
                    "characterStartingInventory": parameters.characterStartingInventory ? `de acordo com ${parameters.characterStartingInventory}` : 'de acordo com sua raça e classe (total de 4 itens)',
                    "itemContaining": parameters.nonMagicMode ? 'instruções de habilidades' : 'feitiços',
                    "examineItem": parameters.nonMagicMode ? 'habilidades. A magia está ausente no mundo, a habilidade é realista.' : 'feitiços',
                    "startLocation": parameters.startLocation ? parameters.startLocation : ', onde o personagem está localizado,',
                    "startLocationDescription": parameters.startLocationDescription ? `: ${parameters.startLocationDescription}` : ''
                },
                "hi": {
                    "raceDescription": parameters.raceDescription !== 'special race description is absent' ? `- ${parameters.raceDescription}` : '',
                    "classDescription": parameters.classDescription !== 'special class description is absent' ? `- ${parameters.classDescription}` : '',
                    "characterDescription": parameters.characterDescription !== 'special character description is absent' ? `के अनुसार जो चरित्र ${parameters.characterDescription}` : '',
                    "characterPrehistory": parameters.characterPrehistory ? `के अनुसार जो चरित्र ${parameters.characterPrehistory}` : '',
                    "characterStartingInventory": parameters.characterStartingInventory ? `${parameters.characterStartingInventory} के अनुसार` : 'उनकी जाति और वर्ग के अनुसार (कुल 4 आइटम)',
                    "itemContaining": parameters.nonMagicMode ? 'कौशल निर्देश' : 'जादू मंत्र',
                    "examineItem": parameters.nonMagicMode ? 'कौशल। दुनिया में जादू नहीं है, कौशल वास्तविक है।' : 'जादू मंत्र',
                    "startLocation": parameters.startLocation ? parameters.startLocation : ', जहां चरित्र स्थित है,',
                    "startLocationDescription": parameters.startLocationDescription ? `: ${parameters.startLocationDescription}` : ''
                },
                "ge": {
                    "raceDescription": parameters.raceDescription !== 'special race description is absent' ? `- ${parameters.raceDescription}` : '',
                    "classDescription": parameters.classDescription !== 'special class description is absent' ? `- ${parameters.classDescription}` : '',
                    "characterDescription": parameters.characterDescription !== 'special character description is absent' ? `entsprechend dem, was der Charakter ${parameters.characterDescription}` : '',
                    "characterPrehistory": parameters.characterPrehistory ? `entsprechend dem, was der Charakter ${parameters.characterPrehistory}` : '',
                    "characterStartingInventory": parameters.characterStartingInventory ? `entsprechend ${parameters.characterStartingInventory}` : 'entsprechend ihrer Rasse und Klasse (insgesamt 4 Gegenstände)',
                    "itemContaining": parameters.nonMagicMode ? 'Fähigkeitsanweisungen' : 'Zauber',
                    "examineItem": parameters.nonMagicMode ? 'Fähigkeiten. Magie ist in der Welt abwesend, die Fähigkeit ist realistisch.' : 'Zauber',
                    "startLocation": parameters.startLocation ? parameters.startLocation : ', wo sich der Charakter befindet,',
                    "startLocationDescription": parameters.startLocationDescription ? `: ${parameters.startLocationDescription}` : ''
                },
                "fr": {
                    "raceDescription": parameters.raceDescription !== 'special race description is absent' ? `- ${parameters.raceDescription}` : '',
                    "classDescription": parameters.classDescription !== 'special class description is absent' ? `- ${parameters.classDescription}` : '',
                    "characterDescription": parameters.characterDescription !== 'special character description is absent' ? `selon ce que le personnage ${parameters.characterDescription}` : '',
                    "characterPrehistory": parameters.characterPrehistory ? `selon ce que le personnage ${parameters.characterPrehistory}` : '',
                    "characterStartingInventory": parameters.characterStartingInventory ? `selon ${parameters.characterStartingInventory}` : 'selon leur race et classe (4 objets au total)',
                    "itemContaining": parameters.nonMagicMode ? 'instructions de compétences' : 'sorts',
                    "examineItem": parameters.nonMagicMode ? 'compétences. La magie est absente dans le monde, la compétence est réaliste.' : 'sorts',
                    "startLocation": parameters.startLocation ? parameters.startLocation : ', où le personnage se trouve,',
                    "startLocationDescription": parameters.startLocationDescription ? `: ${parameters.startLocationDescription}` : ''
                }
            };

            // English translation
            this.setTranslation("english-language", id,
                `This is the beginning of a new game, character name: ${parameters.name}, their gender: ${parameters.gender}, race: ${parameters.race} ${translationData["en"]["raceDescription"]}, class: ${parameters.classOfCharacter} ${translationData["en"]["classDescription"]}! 
                Game Master: briefly describe the character (without inventing their personality and goals) ${translationData["en"]["characterDescription"]} and their backstory ${translationData["en"]["characterPrehistory"]}, 
                add items - ${translationData["en"]["characterStartingInventory"]} - to the inventory under the "inventory" key in the response and immediately create their descriptions, placing them under the "itemDescriptions" key. 
                The inventory in the response must not be empty. Do not perform any actions for the player. And describe where the player is located.
                If the character has an item containing ${translationData["en"]["itemContaining"]}, then examine this item for ${translationData["en"]["examineItem"]}. 
                The character already has a "Notebook for notes" in their inventory or, if not, it should be added; update its description in "itemDescriptions".
                Carefully examine all the character's active and passive skills and take them into account. Be sure to add the location ${translationData["en"]["startLocation"]} to the list of locations. 
                Be sure to add a description of this location ${translationData["en"]["startLocationDescription"]}. Be sure to generate and add descriptions to "itemDescriptions" for all existing items in the inventory.`
            );

            // Russian translation
            this.setTranslation("russian-language", id,
                `Это начало новой игры, имя персонажа: ${parameters.name}, его пол: ${parameters.gender}, раса: ${parameters.race} ${translationData["ru"]["raceDescription"]}, класс: ${parameters.classOfCharacter} ${translationData["ru"]["classDescription"]}! 
                Мастер игры: кратко опишите персонажа (не придумывая его личность и цели) ${translationData["ru"]["characterDescription"]} и его предысторию ${translationData["ru"]["characterPrehistory"]}, 
                добавьте предметы - ${translationData["ru"]["characterStartingInventory"]} - в инвентарь под ключом "inventory" в ответе и сразу создайте их описания, разместив их под ключом "itemDescriptions". 
                Инвентарь в ответе не должен быть пустым. Не выполняйте никаких действий за игрока. И опишите, где находится игрок.
                Если у персонажа есть предмет, содержащий ${translationData["ru"]["itemContaining"]}, то исследуйте этот предмет на ${translationData["ru"]["examineItem"]}. 
                У персонажа уже есть "Блокнот для заметок" в инвентаре или, если нет, его следует добавить; обновите его описание в "itemDescriptions".
                Тщательно изучите все активные и пассивные навыки персонажа и учтите их. Обязательно добавьте локацию ${translationData["ru"]["startLocation"]} в список локаций. 
                Обязательно добавьте описание этой локации ${translationData["ru"]["startLocationDescription"]}. Обязательно сгенерируйте и добавьте описания в "itemDescriptions" для всех существующих предметов в инвентаре.`
            );

            // Spanish translation
            this.setTranslation("spanish-language", id,
                `Este es el comienzo de un nuevo juego, nombre del personaje: ${parameters.name}, su género: ${parameters.gender}, raza: ${parameters.race} ${translationData["sp"]["raceDescription"]}, clase: ${parameters.classOfCharacter} ${translationData["sp"]["classDescription"]}! 
                Maestro del juego: describa brevemente al personaje (sin inventar su personalidad y objetivos) ${translationData["sp"]["characterDescription"]} y su historia ${translationData["sp"]["characterPrehistory"]}, 
                agregue elementos - ${translationData["sp"]["characterStartingInventory"]} - al inventario bajo la clave "inventory" en la respuesta e inmediatamente cree sus descripciones, colocándolas bajo la clave "itemDescriptions". 
                El inventario en la respuesta no debe estar vacío. No realice ninguna acción por el jugador. Y describa dónde se encuentra el jugador.
                Si el personaje tiene un objeto que contiene ${translationData["sp"]["itemContaining"]}, entonces examine este objeto para ${translationData["sp"]["examineItem"]}. 
                El personaje ya tiene un "Cuaderno para notas" en su inventario o, si no, debe agregarse; actualice su descripción en "itemDescriptions".
                Examine cuidadosamente todas las habilidades activas y pasivas del personaje y téngalas en cuenta. Asegúrese de agregar la ubicación ${translationData["sp"]["startLocation"]} a la lista de ubicaciones. 
                Asegúrese de agregar una descripción de esta ubicación ${translationData["sp"]["startLocationDescription"]}. Asegúrese de generar y agregar descripciones a "itemDescriptions" para todos los elementos existentes en el inventario.`
            );

            // Portuguese translation
            this.setTranslation("portuguese-language", id,
                `Este é o início de um novo jogo, nome do personagem: ${parameters.name}, seu gênero: ${parameters.gender}, raça: ${parameters.race} ${translationData["po"]["raceDescription"]}, classe: ${parameters.classOfCharacter} ${translationData["po"]["classDescription"]}! 
                Mestre do Jogo: descreva brevemente o personagem (sem inventar sua personalidade e objetivos) ${translationData["po"]["characterDescription"]} e sua história ${translationData["po"]["characterPrehistory"]}, 
                adicione itens - ${translationData["po"]["characterStartingInventory"]} - ao inventário sob a chave "inventory" na resposta e crie imediatamente suas descrições, colocando-as sob a chave "itemDescriptions". 
                O inventário na resposta não deve estar vazio. Não execute nenhuma ação para o jogador. E descreva onde o jogador está localizado.
                Se o personagem tiver um item contendo ${translationData["po"]["itemContaining"]}, então examine este item para ${translationData["po"]["examineItem"]}. 
                O personagem já tem um "Caderno para anotações" em seu inventário ou, se não, deve ser adicionado; atualize sua descrição em "itemDescriptions".
                Examine cuidadosamente todas as habilidades ativas e passivas do personagem e leve-as em consideração. Certifique-se de adicionar a localização ${translationData["po"]["startLocation"]} à lista de locais. 
                Certifique-se de adicionar uma descrição deste local ${translationData["po"]["startLocationDescription"]}. Certifique-se de gerar e adicionar descrições a "itemDescriptions" para todos os itens existentes no inventário.`
            );

            // Hindi translation
            this.setTranslation("hindi-language", id,
                `यह एक नए खेल की शुरुआत है, चरित्र का नाम: ${parameters.name}, उनका लिंग: ${parameters.gender}, जाति: ${parameters.race} ${translationData["hi"]["raceDescription"]}, वर्ग: ${parameters.classOfCharacter} ${translationData["hi"]["classDescription"]}! 
                गेम मास्टर: चरित्र का संक्षिप्त वर्णन करें (उनका व्यक्तित्व और लक्ष्य नहीं बनाएं) ${translationData["hi"]["characterDescription"]} और उनकी पिछली कहानी ${translationData["hi"]["characterPrehistory"]}, 
                आइटम जोड़ें - ${translationData["hi"]["characterStartingInventory"]} - प्रतिक्रिया में "inventory" कुंजी के तहत इन्वेंटरी में और तुरंत उनकी विवरण बनाएं, उन्हें "itemDescriptions" कुंजी के तहत रखें। 
                प्रतिक्रिया में इन्वेंटरी खाली नहीं होनी चाहिए। खिलाड़ी के लिए कोई कार्रवाई न करें। और वर्णन करें कि खिलाड़ी कहाँ स्थित है।
                यदि चरित्र के पास ${translationData["hi"]["itemContaining"]} वाला कोई आइटम है, तो ${translationData["hi"]["examineItem"]} के लिए इस आइटम की जांच करें। 
                चरित्र के पास पहले से ही अपने इन्वेंटरी में "नोट्स के लिए नोटबुक" है या, यदि नहीं है, तो इसे जोड़ा जाना चाहिए; इसका विवरण "itemDescriptions" में अपडेट करें।
                चरित्र के सभी सक्रिय और निष्क्रिय कौशलों की सावधानीपूर्वक जांच करें और उन्हें ध्यान में रखें। स्थानों की सूची में ${translationData["hi"]["startLocation"]} को जोड़ना सुनिश्चित करें। 
                इस स्थान का विवरण जोड़ना सुनिश्चित करें ${translationData["hi"]["startLocationDescription"]}। इन्वेंटरी में सभी मौजूदा आइटमों के लिए "itemDescriptions" में विवरण बनाना और जोड़ना सुनिश्चित करें।`
            );

            // German translation
            this.setTranslation("german-language", id,
                `Dies ist der Beginn eines neuen Spiels, Charaktername: ${parameters.name}, ihr Geschlecht: ${parameters.gender}, Rasse: ${parameters.race} ${translationData["ge"]["raceDescription"]}, Klasse: ${parameters.classOfCharacter} ${translationData["ge"]["classDescription"]}! 
                Spielleiter: Beschreiben Sie kurz den Charakter (ohne seine Persönlichkeit und Ziele zu erfinden) ${translationData["ge"]["characterDescription"]} und seine Vorgeschichte ${translationData["ge"]["characterPrehistory"]}, 
                fügen Sie Gegenstände hinzu - ${translationData["ge"]["characterStartingInventory"]} - zum Inventar unter dem Schlüssel "inventory" in der Antwort und erstellen Sie sofort deren Beschreibungen, indem Sie sie unter dem Schlüssel "itemDescriptions" platzieren. 
                Das Inventar in der Antwort darf nicht leer sein. Führen Sie keine Aktionen für den Spieler aus. Und beschreiben Sie, wo sich der Spieler befindet.
                Wenn der Charakter einen Gegenstand hat, der ${translationData["ge"]["itemContaining"]} enthält, dann untersuchen Sie diesen Gegenstand auf ${translationData["ge"]["examineItem"]}. 
                Der Charakter hat bereits ein "Notizbuch für Notizen" in seinem Inventar oder, falls nicht, es sollte hinzugefügt werden; aktualisieren Sie seine Beschreibung in "itemDescriptions".
                Untersuchen Sie sorgfältig alle aktiven und passiven Fähigkeiten des Charakters und berücksichtigen Sie sie. Stellen Sie sicher, dass Sie den Ort ${translationData["ge"]["startLocation"]} zur Liste der Orte hinzufügen. 
                Stellen Sie sicher, dass Sie eine Beschreibung dieses Ortes hinzufügen ${translationData["ge"]["startLocationDescription"]}. Stellen Sie sicher, dass Sie Beschreibungen für alle vorhandenen Gegenstände im Inventar in "itemDescriptions" generieren und hinzufügen.`
            );

            // French translation
            this.setTranslation("french-language", id,
                `Ceci est le début d'un nouveau jeu, nom du personnage : ${parameters.name}, son genre : ${parameters.gender}, race : ${parameters.race} ${translationData["fr"]["raceDescription"]}, classe : ${parameters.classOfCharacter} ${translationData["fr"]["classDescription"]}! 
                Maître du jeu : décrivez brièvement le personnage (sans inventer sa personnalité et ses objectifs) ${translationData["fr"]["characterDescription"]} et son histoire ${translationData["fr"]["characterPrehistory"]}, 
                ajoutez des objets - ${translationData["fr"]["characterStartingInventory"]} - à l'inventaire sous la clé "inventory" dans la réponse et créez immédiatement leurs descriptions, en les plaçant sous la clé "itemDescriptions". 
                L'inventaire dans la réponse ne doit pas être vide. Ne faites aucune action pour le joueur. Et décrivez où se trouve le joueur.
                Si le personnage a un objet contenant ${translationData["fr"]["itemContaining"]}, alors examinez cet objet pour ${translationData["fr"]["examineItem"]}. 
                Le personnage a déjà un "Carnet pour notes" dans son inventaire ou, si ce n'est pas le cas, il doit être ajouté; mettez à jour sa description dans "itemDescriptions".
                Examinez attentivement toutes les compétences actives et passives du personnage et prenez-les en compte. Assurez-vous d'ajouter l'emplacement ${translationData["fr"]["startLocation"]} à la liste des emplacements. 
                Assurez-vous d'ajouter une description de cet emplacement ${translationData["fr"]["startLocationDescription"]}. Assurez-vous de générer et d'ajouter des descriptions à "itemDescriptions" pour tous les objets existants dans l'inventaire.`
            );

            return id;
        },

        setNewLevelMessage: function (level, skillName, shouldGeneratePassiveSkills) {
            const id = "new_level_system_message";

            // English translation
            this.setTranslation("english-language", id,
                `Congratulations! You have reached level ${level}! The ${skillName} skill has increased! ${shouldGeneratePassiveSkills ? "A new passive ability will appear soon!" : ""}`);

            // Russian translation
            this.setTranslation("russian-language", id,
                `Поздравляем! Вы достигли уровня ${level}! Навык ${skillName} повысился! ${shouldGeneratePassiveSkills ? "Новый пассивный навык скоро появится!" : ""}`);

            // Spanish translation
            this.setTranslation("spanish-language", id,
                `¡Felicidades! ¡Has alcanzado el nivel ${level}! ¡La habilidad ${skillName} ha aumentado! ${shouldGeneratePassiveSkills ? "¡Una nueva habilidad pasiva aparecerá pronto!" : ""}`);

            // Portuguese translation
            this.setTranslation("portuguese-language", id,
                `Parabéns! Você alcançou o nível ${level}! A habilidade ${skillName} aumentou! ${shouldGeneratePassiveSkills ? "Uma nova habilidade passiva aparecerá em breve!" : ""}`);

            // Hindi translation
            this.setTranslation("hindi-language", id,
                `बधाई हो! आपने स्तर ${level} प्राप्त कर लिया है! ${skillName} कौशल बढ़ गया है! ${shouldGeneratePassiveSkills ? "एक नई निष्क्रिय क्षमता जल्द ही प्रकट होगी!" : ""}`);

            // German translation
            this.setTranslation("german-language", id,
                `Herzlichen Glückwunsch! Du hast Level ${level} erreicht! Die Fähigkeit ${skillName} hat sich verbessert! ${shouldGeneratePassiveSkills ? "Eine neue passive Fähigkeit wird bald erscheinen!" : ""}`);

            // French translation
            this.setTranslation("french-language", id,
                `Félicitations! Vous avez atteint le niveau ${level}! La compétence ${skillName} a augmenté! ${shouldGeneratePassiveSkills ? "Une nouvelle capacité passive apparaîtra bientôt!" : ""}`);

            return id;
        },

        setProviderTooltipForGithubVersion: function () {

            const ids = ["tooltip-provider-ai", "tooltip-provider-ai2", "tooltip-provider-ai3"];

            for (const id of ids) {

                // Английский перевод
                this.setTranslation("english-language", id, `Neural Network Providers

For all providers you need to register on the respective website and create an API key or Access Token. Pay attention to the neural network context - Legendarica uses a very large prompt, and it only increases over time due to chat history and other data used by the GM. A context of at least 128,000 tokens is required. The information described here is current as of the specified date (24.11.2024).

Cohere (https://coral.cohere.com/). Provides completely free access to Command R models.
Getting started: model command-r-plus

Google AI Studio (https://ai.google.dev/aistudio). All models have a free tier; see the Studio website. Try experimental models - they usually have a larger limit of free messages per day.
Getting started: model gemini-1.5-pro

Groq (https://groq.com/). Groq provides access to various free models but severely limits them by context. Currently, there are no free models on this site that work well in Legendarica, but this may change in the future. Paid models are likely to work well. See the list of models here: https://console.groq.com/docs/models

Hugging Face (https://huggingface.co/models?inference=warm&other=conversational&sort=trending). A large repository for neural networks. The Inference API is used to access it, and only models that support it are available for the game. There is a limit on the number of messages per day, which increases with a paid subscription. If the models send unreadable text as a response, then either the model is very weak, or the temperature is high. In this case, try lowering the temperature or changing the model.
Getting started: model Qwen/Qwen2.5-72B-Instruct (temperature 0.4)

Mistral AI (https://mistral.ai/). The Mistral AI website offers participation in an "experimental" pricing plan, making all Mistral models free to use.
Getting started: model mistral-large-latest

OpenAI01 (https://openaio1api.com/ - main website: https://openai01.net/). Access to OpenAI o1-preview. There is no free tier. Upon registration, you receive 10 credits; 2 credits are charged per request to o1-preview.
Model: o1-preview

Openrouter (https://openrouter.ai/). Offers both free and paid models. Free models have a daily message limit.`
                );

                // Русский перевод
                this.setTranslation("russian-language", id, `Провайдеры нейросетей.
Для всех провайдеров, кроме Websim, вам нужно зарегистрироваться на соответствующем сайте и создать API ключ или Access Token. Обращайте внимание на контекст нейросети - у Легендарики очень большой промпт, и он только увеличивается со временем из-за истории чата и других данных, которые используются ГМ-ом. Нужен контекст как минимум 128 000 токенов. Информация, описанная здесь, актуальна на момент указанной даты (24.11.2024).

Cohere (https://coral.cohere.com/). Предоставляет полностью бесплатный доступ к моделям Command R.
С чего начать: модель command-r-plus

Google AI Studio (https://ai.google.dev/aistudio). Все модели имеют бесплатный лимит, смотрите на сайте студии. Попробуйте экспериментальные модели - они обычно имеют больший лимит бесплатных сообщений в день.
С чего начать: модель gemini-1.5-pro

Groq (https://groq.com/). Groq предоставляет доступ к различным бесплатным моделям, но сильно ограничивает их по контексту. Сейчас на этом сайте нет бесплатных моделей, которые бы хорошо работали в Легендарике, но все может измениться в будущем. Платные модели, скорее всего, работают хорошо. Смотрите список моделей здесь: https://console.groq.com/docs/models

Hugging Face (https://huggingface.co/models?inference=warm&other=conversational&sort=trending). Большой репозиторий для нейросетей. Для доступа к нему используется Inference API, и только те модели, которые поддерживают его, доступны для игры. Есть ограничение на количество сообщений в день, которое становится большим с платной подпиской. Если модели посылают нечитаемый текст в качестве ответа, значит либо модель очень слабая, либо температура высокая. В этом случае, попробуйте понизить температуру или сменить модель. 
С чего начать: модель Qwen/Qwen2.5-72B-Instruct  (температура 0.4)

Mistral AI (https://mistral.ai/). На сайте Mistral AI есть возможность принять участие в "экспериментальном" тарифном плане, что делает все модели Mistral бесплатными для использования.
С чего начать: модель mistral-large-latest

OpenAI01 (https://openaio1api.com/ - главный сайт: https://openai01.net/). Доступ к OpenAI o1-preview. Бесплатного тарифа нет. При регистрации дают 10 кредитов, 2 кредита стоит запрос к o1-preview.
Модель: o1-preview 

Openrouter (https://openrouter.ai/). Есть бесплатные модели, есть платные. У бесплатных моделей есть лимит сообщений в день.

Websim. Зависит от нейросети, которую использует Websim. После того, как Websim изменил AI API с Claude на нечто очень слабое, Websim больше не может гарантировать хорошую игру или вообще её проведение, поскольку используемый AI очень слаб. Но все может измениться в будущем.`
                );

                // Испанский перевод
                this.setTranslation("spanish-language", id, `Proveedores de Redes Neuronales

Para todos los proveedores, necesita registrarse en el sitio web correspondiente y crear una clave API o Token de Acceso. Preste atención al contexto de la red neuronal: Legendarica utiliza un prompt muy grande, y solo aumenta con el tiempo debido al historial de chat y otros datos utilizados por el GM. Se requiere un contexto de al menos 128,000 tokens. La información descrita aquí es actual a la fecha especificada (24.11.2024).

Cohere (https://coral.cohere.com/). Proporciona acceso completamente gratuito a los modelos Command R.
Comenzando: modelo command-r-plus

Google AI Studio (https://ai.google.dev/aistudio). Todos los modelos tienen un nivel gratuito; vea el sitio web de Studio. Pruebe modelos experimentales: suelen tener un límite mayor de mensajes gratuitos por día.
Comenzando: modelo gemini-1.5-pro

Groq (https://groq.com/). Groq proporciona acceso a varios modelos gratuitos pero los limita severamente por contexto. Actualmente, no hay modelos gratuitos en este sitio que funcionen bien en Legendarica, pero esto puede cambiar en el futuro. Es probable que los modelos de pago funcionen bien. Vea la lista de modelos aquí: https://console.groq.com/docs/models

Hugging Face (https://huggingface.co/models?inference=warm&other=conversational&sort=trending). Un gran repositorio de redes neuronales. Se utiliza la Inference API para acceder, y solo los modelos que la soportan están disponibles para el juego. Hay un límite en el número de mensajes por día, que aumenta con una suscripción de pago. Si los modelos envían texto ilegible como respuesta, entonces o el modelo es muy débil, o la temperatura es alta. En este caso, intente bajar la temperatura o cambiar el modelo.
Comenzando: modelo Qwen/Qwen2.5-72B-Instruct (temperatura 0.4)

Mistral AI (https://mistral.ai/). El sitio web de Mistral AI ofrece participación en un plan de precios "experimental", haciendo que todos los modelos de Mistral sean gratuitos para usar.
Comenzando: modelo mistral-large-latest

OpenAI01 (https://openaio1api.com/ - sitio web principal: https://openai01.net/). Acceso a OpenAI o1-preview. No hay nivel gratuito. Al registrarse, recibe 10 créditos; se cobran 2 créditos por solicitud a o1-preview.
Modelo: o1-preview

Openrouter (https://openrouter.ai/). Ofrece modelos gratuitos y de pago. Los modelos gratuitos tienen un límite diario de mensajes.`
                );

                // Португальский перевод
                this.setTranslation("portuguese-language", id, `Provedores de Redes Neurais

Para todos os provedores, você precisa se registrar no respectivo site e criar uma chave de API ou Token de Acesso. Preste atenção ao contexto da rede neural - Legendarica usa um prompt muito grande, e ele só aumenta com o tempo devido ao histórico de chat e outros dados usados pelo GM. É necessário um contexto de pelo menos 128.000 tokens. As informações descritas aqui são atuais na data especificada (24.11.2024).

Cohere (https://coral.cohere.com/). Fornece acesso totalmente gratuito aos modelos Command R.
Começando: modelo command-r-plus

Google AI Studio (https://ai.google.dev/aistudio). Todos os modelos têm um nível gratuito; veja o site do Studio. Experimente modelos experimentais - eles geralmente têm um limite maior de mensagens gratuitas por dia.
Começando: modelo gemini-1.5-pro

Groq (https://groq.com/). A Groq fornece acesso a vários modelos gratuitos, mas os limita severamente por contexto. Atualmente, não há modelos gratuitos neste site que funcionem bem no Legendarica, mas isso pode mudar no futuro. Modelos pagos provavelmente funcionarão bem. Veja a lista de modelos aqui: https://console.groq.com/docs/models

Hugging Face (https://huggingface.co/models?inference=warm&other=conversational&sort=trending). Um grande repositório para redes neurais. A Inference API é usada para acessá-lo, e apenas modelos que a suportam estão disponíveis para o jogo. Há um limite no número de mensagens por dia, que aumenta com uma assinatura paga. Se os modelos enviarem texto ilegível como resposta, então ou o modelo é muito fraco, ou a temperatura está alta. Nesse caso, tente baixar a temperatura ou mudar o modelo.
Começando: modelo Qwen/Qwen2.5-72B-Instruct (temperatura 0.4)

Mistral AI (https://mistral.ai/). O site Mistral AI oferece participação em um plano de preços "experimental", tornando todos os modelos Mistral gratuitos para uso.
Começando: modelo mistral-large-latest

OpenAI01 (https://openaio1api.com/ - site principal: https://openai01.net/). Acesso ao OpenAI o1-preview. Não há nível gratuito. Ao se registrar, você recebe 10 créditos; 2 créditos são cobrados por solicitação ao o1-preview.
Modelo: o1-preview

Openrouter (https://openrouter.ai/). Oferece modelos gratuitos e pagos. Modelos gratuitos têm um limite diário de mensagens.`
                );

                // Хинди перевод
                this.setTranslation("hindi-language", id, `न्यूरल नेटवर्क प्रदाता

सभी प्रदाताओं के लिए, आपको संबंधित वेबसाइट पर पंजीकरण करना होगा और एक API कुंजी या एक्सेस टोकन बनाना होगा। न्यूरल नेटवर्क संदर्भ पर ध्यान दें - Legendarica एक बहुत बड़ा प्रॉम्प्ट उपयोग करता है, और यह समय के साथ चैट इतिहास और जीएम द्वारा उपयोग किए जाने वाले अन्य डेटा के कारण बढ़ता ही जाता है। कम से कम 128,000 टोकन का संदर्भ आवश्यक है। यहां वर्णित जानकारी निर्दिष्ट तिथि (24.11.2024) तक वर्तमान है।

Cohere (https://coral.cohere.com/)। Command R मॉडलों तक पूरी तरह से मुफ्त पहुंच प्रदान करता है।
प्रारंभ करना: मॉडल command-r-plus

Google AI Studio (https://ai.google.dev/aistudio)। सभी मॉडलों में एक मुफ्त स्तर है; स्टूडियो वेबसाइट देखें। प्रायोगिक मॉडलों को आज़माएं - उनमें आमतौर पर प्रति दिन मुफ्त संदेशों की बड़ी सीमा होती है।
प्रारंभ करना: मॉडल gemini-1.5-pro

Groq (https://groq.com/)। Groq विभिन्न मुफ्त मॉडलों तक पहुंच प्रदान करता है लेकिन उन्हें संदर्भ द्वारा गंभीर रूप से सीमित करता है। वर्तमान में, इस साइट पर कोई मुफ्त मॉडल नहीं हैं जो Legendarica में अच्छी तरह से काम करते हैं, लेकिन यह भविष्य में बदल सकता है। भुगतान किए गए मॉडल अच्छी तरह से काम कर सकते हैं। मॉडलों की सूची यहां देखें: https://console.groq.com/docs/models

Hugging Face (https://huggingface.co/models?inference=warm&other=conversational&sort=trending)। न्यूरल नेटवर्क के लिए एक बड़ा भंडार। इसे एक्सेस करने के लिए Inference API का उपयोग किया जाता है, और केवल वे मॉडल जो इसे समर्थन करते हैं, गेम के लिए उपलब्ध हैं। प्रति दिन संदेशों की संख्या पर एक सीमा है, जो एक सशुल्क सदस्यता के साथ बढ़ती है। यदि मॉडल प्रतिक्रिया के रूप में अपठनीय पाठ भेजते हैं, तो या तो मॉडल बहुत कमजोर है, या तापमान उच्च है। इस मामले में, तापमान कम करने या मॉडल बदलने का प्रयास करें।
प्रारंभ करना: मॉडल Qwen/Qwen2.5-72B-Instruct (तापमान 0.4)

Mistral AI (https://mistral.ai/)। Mistral AI वेबसाइट एक "प्रायोगिक" मूल्य निर्धारण योजना में भागीदारी प्रदान करती है, जिससे सभी Mistral मॉडल मुफ्त में उपयोग करने के लिए उपलब्ध हो जाते हैं।
प्रारंभ करना: मॉडल mistral-large-latest

OpenAI01 (https://openaio1api.com/ - मुख्य वेबसाइट: https://openai01.net/)। OpenAI o1-preview तक पहुंच। कोई मुफ्त स्तर नहीं है। पंजीकरण पर, आपको 10 क्रेडिट मिलते हैं; o1-preview के प्रत्येक अनुरोध पर 2 क्रेडिट चार्ज किए जाते हैं।
मॉडल: o1-preview

Openrouter (https://openrouter.ai/)। मुफ्त और सशुल्क दोनों मॉडल प्रदान करता है। मुफ्त मॉडलों में दैनिक संदेश सीमा होती है।`
                );

                // Немецкий перевод
                this.setTranslation("german-language", id, `Neuronale Netzwerk-Anbieter

Für alle Anbieter müssen Sie sich auf der jeweiligen Website registrieren und einen API-Schlüssel oder Zugriffstoken erstellen. Achten Sie auf den Kontext des neuronalen Netzwerks – Legendarica verwendet einen sehr großen Prompt, und er nimmt im Laufe der Zeit aufgrund des Chatverlaufs und anderer vom Spielleiter verwendeter Daten nur zu. Ein Kontext von mindestens 128.000 Tokens ist erforderlich. Die hier beschriebenen Informationen sind zum angegebenen Datum (24.11.2024) aktuell.

Cohere (https://coral.cohere.com/). Bietet völlig kostenlosen Zugang zu Command R-Modellen.
Erste Schritte: Modell command-r-plus

Google AI Studio (https://ai.google.dev/aistudio). Alle Modelle haben eine kostenlose Stufe; siehe die Studio-Website. Probieren Sie experimentelle Modelle aus – sie haben normalerweise ein größeres Limit für kostenlose Nachrichten pro Tag.
Erste Schritte: Modell gemini-1.5-pro

Groq (https://groq.com/). Groq bietet Zugriff auf verschiedene kostenlose Modelle, beschränkt sie jedoch stark durch den Kontext. Derzeit gibt es auf dieser Website keine kostenlosen Modelle, die in Legendarica gut funktionieren, aber das kann sich in Zukunft ändern. Bezahlte Modelle werden wahrscheinlich gut funktionieren. Siehe die Liste der Modelle hier: https://console.groq.com/docs/models

Hugging Face (https://huggingface.co/models?inference=warm&other=conversational&sort=trending). Ein großes Repository für neuronale Netzwerke. Die Inference API wird verwendet, um darauf zuzugreifen, und nur Modelle, die sie unterstützen, sind für das Spiel verfügbar. Es gibt ein Limit für die Anzahl der Nachrichten pro Tag, das mit einem bezahlten Abonnement erhöht wird. Wenn die Modelle unlesbaren Text als Antwort senden, ist entweder das Modell sehr schwach oder die Temperatur ist hoch. In diesem Fall versuchen Sie, die Temperatur zu senken oder das Modell zu wechseln.
Erste Schritte: Modell Qwen/Qwen2.5-72B-Instruct (Temperatur 0.4)

Mistral AI (https://mistral.ai/). Die Mistral AI-Website bietet die Teilnahme an einem "experimentellen" Preisplan an, wodurch alle Mistral-Modelle kostenlos nutzbar sind.
Erste Schritte: Modell mistral-large-latest

OpenAI01 (https://openaio1api.com/ - Hauptwebsite: https://openai01.net/). Zugriff auf OpenAI o1-preview. Es gibt keine kostenlose Stufe. Bei der Registrierung erhalten Sie 10 Credits; 2 Credits werden pro Anfrage an o1-preview berechnet.
Modell: o1-preview

Openrouter (https://openrouter.ai/). Bietet sowohl kostenlose als auch kostenpflichtige Modelle an. Kostenlose Modelle haben ein tägliches Nachrichtenlimit.`
                );

                // Французский перевод
                this.setTranslation("french-language", id, `Fournisseurs de Réseaux Neuronaux

Pour tous les fournisseurs, vous devez vous inscrire sur le site correspondant et créer une clé API ou un jeton d'accès. Faites attention au contexte du réseau neuronal - Legendarica utilise une invite très grande, et elle augmente avec le temps en raison de l'historique du chat et d'autres données utilisées par le MJ. Un contexte d'au moins 128 000 jetons est requis. Les informations décrites ici sont à jour à la date spécifiée (24.11.2024).

Cohere (https://coral.cohere.com/). Fournit un accès entièrement gratuit aux modèles Command R.
Pour commencer : modèle command-r-plus

Google AI Studio (https://ai.google.dev/aistudio). Tous les modèles ont un niveau gratuit ; voir le site Studio. Essayez les modèles expérimentaux - ils ont généralement une limite plus élevée de messages gratuits par jour.
Pour commencer : modèle gemini-1.5-pro

Groq (https://groq.com/). Groq fournit un accès à divers modèles gratuits mais les limite sévèrement par le contexte. Actuellement, il n'y a pas de modèles gratuits sur ce site qui fonctionnent bien dans Legendarica, mais cela peut changer à l'avenir. Les modèles payants fonctionneront probablement bien. Voir la liste des modèles ici : https://console.groq.com/docs/models

Hugging Face (https://huggingface.co/models?inference=warm&other=conversational&sort=trending). Un grand dépôt pour les réseaux neuronaux. L'Inference API est utilisée pour y accéder, et seuls les modèles qui la prennent en charge sont disponibles pour le jeu. Il y a une limite sur le nombre de messages par jour, qui augmente avec un abonnement payant. Si les modèles envoient du texte illisible en réponse, soit le modèle est très faible, soit la température est élevée. Dans ce cas, essayez de baisser la température ou de changer de modèle.
Pour commencer : modèle Qwen/Qwen2.5-72B-Instruct (température 0.4)

Mistral AI (https://mistral.ai/). Le site Mistral AI propose de participer à un plan tarifaire "expérimental", rendant tous les modèles Mistral gratuits à utiliser.
Pour commencer : modèle mistral-large-latest

OpenAI01 (https://openaio1api.com/ - site principal : https://openai01.net/). Accès à OpenAI o1-preview. Il n'y a pas de niveau gratuit. À l'inscription, vous recevez 10 crédits ; 2 crédits sont facturés par requête à o1-preview.
Modèle : o1-preview

Openrouter (https://openrouter.ai/). Offre des modèles gratuits et payants. Les modèles gratuits ont une limite quotidienne de messages.`
                );

            }
        },

        setConteinerItemsExceedCapacityMessage: function (containerName, excessCount, itemNames) {
            const id = "item-container-items-exceed-capacity-message";

            this.setTranslation("english-language", id, `Container "${containerName}" exceeds capacity by ${excessCount} item(s). Moved: "${itemNames}" to the main inventory.`);
            this.setTranslation("russian-language", id, `Контейнер "${containerName}" превышает вместимость на ${excessCount} элемент(ов). Перемещены: "${itemNames}" в основной инвентарь.`);
            this.setTranslation("spanish-language", id, `El contenedor "${containerName}" excede la capacidad por ${excessCount} artículo(s). Movidos: "${itemNames}" al inventario principal.`);
            this.setTranslation("portuguese-language", id, `O contêiner "${containerName}" excede a capacidade em ${excessCount} item(ns). Movidos: "${itemNames}" para o inventário principal.`);
            this.setTranslation("hindi-language", id, `कंटेनर "${containerName}" की क्षमता ${excessCount} आइटम(स) से अधिक हो गई है। स्थानांतरित किए गए: "${itemNames}" मुख्य इन्वेंटरी में।`);
            this.setTranslation("german-language", id, `Der Container "${containerName}" überschreitet die Kapazität um ${excessCount} Element(e). Verschoben: "${itemNames}" in das Hauptinventar.`);
            this.setTranslation("french-language", id, `Le conteneur "${containerName}" dépasse la capacité de ${excessCount} élément(s). Déplacés : "${itemNames}" dans l'inventaire principal.`);

            return id;
        },

        setContainerItemsExceedVolumeMessage: function (containerName, itemNames) {
            const id = "item-container-items-exceed-volume-message";

            this.setTranslation("english-language", id, `The volume of the container "${containerName}" is smaller than the volume of the items placed inside it. Automatically corrected. Moved: "${itemNames}" to the main inventory.`);
            this.setTranslation("russian-language", id, `Объем контейнера "${containerName}" меньше объёма вложенных в него предметов. Автоматически исправлено. Перемещены: "${itemNames}" в основной инвентарь.`);
            this.setTranslation("spanish-language", id, `El volumen del contenedor "${containerName}" es menor que el volumen de los artículos colocados en su interior. Corregido automáticamente. Movidos: "${itemNames}" al inventario principal.`);
            this.setTranslation("portuguese-language", id, `O volume do contêiner "${containerName}" é menor que o volume dos itens colocados dentro dele. Corrigido automaticamente. Movidos: "${itemNames}" para o inventário principal.`);
            this.setTranslation("hindi-language", id, `कंटेनर "${containerName}" की क्षमता उसमें रखी वस्तुओं के आयतन से कम है। स्वतः ठीक कर दिया गया है। स्थानांतरित किए गए: "${itemNames}" मुख्य इन्वेंटरी में।`);
            this.setTranslation("german-language", id, `Das Volumen des Containers "${containerName}" ist geringer als das Volumen der darin platzierten Gegenstände. Automatisch korrigiert. Verschoben: "${itemNames}" ins Hauptinventar.`);
            this.setTranslation("french-language", id, `Le volume du conteneur "${containerName}" est inférieur au volume des objets qui y sont placés. Corrigé automatiquement. Déplacés : "${itemNames}" dans l'inventaire principal.`);

            return id;
        },

        setStatIncreasedMessage: function (statName, increaseValue) {
            const id = "stat_increased_message";

            this.setTranslation("english-language", id, `Attention! The '${statName}' stat has increased by ${increaseValue}!`);
            this.setTranslation("russian-language", id, `Внимание! Характеристика '${statName}' повысилась на ${increaseValue}!`);
            this.setTranslation("spanish-language", id, `¡Atención! ¡La característica '${statName}' ha aumentado en ${increaseValue}!`);
            this.setTranslation("portuguese-language", id, `Atenção! A característica '${statName}' aumentou em ${increaseValue}!`);
            this.setTranslation("hindi-language", id, `ध्यान दें! '${statName}' गुण ${increaseValue} से बढ़ गया है!`);
            this.setTranslation("german-language", id, `Achtung! Die Eigenschaft '${statName}' hat sich um ${increaseValue} erhöht!`);
            this.setTranslation("french-language", id, `Attention ! La caractéristique '${statName}' a augmenté de ${increaseValue} !`);

            return id;
        },

        setStatDecreasedMessage: function (statName, decreaseValue) {
            const id = "stat_decreased_message";

            this.setTranslation("english-language", id, `Attention! The '${statName}' stat has decreased by ${decreaseValue}!`);
            this.setTranslation("russian-language", id, `Внимание! Характеристика '${statName}' понизилась на ${decreaseValue}!`);
            this.setTranslation("spanish-language", id, `¡Atención! ¡La característica '${statName}' ha disminuido en ${decreaseValue}!`);
            this.setTranslation("portuguese-language", id, `Atenção! A característica '${statName}' diminuiu em ${decreaseValue}!`);
            this.setTranslation("hindi-language", id, `ध्यान दें! '${statName}' गुण ${decreaseValue} से कम हो गया है!`);
            this.setTranslation("german-language", id, `Achtung! Die Eigenschaft '${statName}' hat sich um ${decreaseValue} verringert!`);
            this.setTranslation("french-language", id, `Attention ! La caractéristique '${statName}' a diminué de ${decreaseValue} !`);

            return id;
        },

        setSkillRemovedMessage: function (skillName, isActive) {
            const id = "skill_removed_message";

            const skillType = {
                "english-language": isActive ? "active skill" : "passive skill",
                "russian-language": isActive ? "активный навык" : "пассивный навык",
                "spanish-language": isActive ? "habilidad activa" : "habilidad pasiva",
                "portuguese-language": isActive ? "habilidade ativa" : "habilidade passiva",
                "hindi-language": isActive ? "सक्रिय कौशल" : "निष्क्रिय कौशल",
                "german-language": isActive ? "aktive Fähigkeit" : "passive Fähigkeit",
                "french-language": isActive ? "compétence active" : "compétence passive"
            };

            this.setTranslation("english-language", id, `Attention! The ${skillType["english-language"]} '${skillName}' has been removed from the player's skills!`);
            this.setTranslation("russian-language", id, `Внимание! ${skillType["russian-language"]} '${skillName}' был удален из навыков игрока!`);
            this.setTranslation("spanish-language", id, `¡Atención! ¡La ${skillType["spanish-language"]} '${skillName}' ha sido eliminada de las habilidades del jugador!`);
            this.setTranslation("portuguese-language", id, `Atenção! A ${skillType["portuguese-language"]} '${skillName}' foi removida das habilidades do jogador!`);
            this.setTranslation("hindi-language", id, `ध्यान दें! ${skillType["hindi-language"]} '${skillName}' को खिलाड़ी के कौशल से हटा दिया गया है!`);
            this.setTranslation("german-language", id, `Achtung! Die ${skillType["german-language"]} '${skillName}' wurde aus den Fähigkeiten des Spielers entfernt!`);
            this.setTranslation("french-language", id, `Attention ! La ${skillType["french-language"]} '${skillName}' a été supprimée des compétences du joueur!`);

            return id;
        },
    }
})();
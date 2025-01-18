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
            "max-gm-symbols": "20000 by default",
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
            "tooltip-race": `Race affects the starting location, racial ability generation, plot, and starting bonuses to skills and items:

Human: Luck +2, Trade +1, Perception +1, Wisdom -1, Intelligence -1, Universal Tool

Elf: Dexterity +2, Speed +1, Attractiveness +1, Strength -1, Stamina -1, Elven Cloak

Dwarf: Trade +2, Strength +1, Stamina +1, Dexterity -1, Speed -1, Dwarven Ale

Orc: Strength +3, Stamina +2, Intelligence -1, Wisdom -1, Attractiveness -1, Orc Battle Paint

Lizard: Stamina +2, Speed +1, Attractiveness -1, Scale Oil

Vampire: Perception +1, Attractiveness +1, Dexterity +1, Luck -1, Blood Vial

Golem: Strength +3, Stamina +2, Intelligence -1, Attractiveness -1, Wisdom -1, Elemental Core

Angel: Strength +1, Attractiveness +1, Wisdom +1, Trade -1, Angelic Halo

Demon: Dexterity +1, Attractiveness +2, Persuasion +1, Wisdom -1, Luck -1, Demonic Symbol`,
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
            "status-purposes-label": "Possible purposes",
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
            "angel": "Angel",
            "demon": "Demon",
            "no-choosed-race": "Choose a race",


            "female": "Female",
            "male": "Male",
            "no-choosed-gender": "Choose a gender",


            "item_notepad": "Notepad for notes",
            "item_notepad_description": "Notepad for notes",
            "game_starting_description": `Welcome to Absolute Legendaria, adventurer! Please review the following information...

This is a text-based role-playing game with an LLM. You can enter your action in the text box at the bottom. The neural network will process your response and send instructions that fill the game interface.
You can switch between the available information windows in the top right corner of the screen, using the drop-down panel with buttons. Every item, every NPC in the NPC list, every skill and quest, as well as status information—all of these are used by the game master when forming a response. When you click to remove an item/NPC/quest, etc., that information disappears from the game master's available data, and they formulate further responses without taking it into account. Additionally, the game master carefully looks at the history of your messages with it, as well as the last five messages of the "Action Calculation Log."

All info-window lists are limited to 30 elements, except for inventory items. This is done so as not to overload the game master with information, as there may come a time when the game master simply cannot create a response. You can lock any list element in the info window by clicking the "lock" button, thus protecting it from deletion.

If the game master still cannot formulate a response, the context may be overloaded with information. Try clearing some of the available data. Start by deleting half of the chat and see if that helps the game master form a response.

Please consider supporting me (Lottarend, the author of the game). Links to ways to support are provided in the next message.

Enjoy the game!`,
            "game_starting_donate": "Thank the author of Legendarica Absolute :\n\n Cryptocurrency: TSH1v85VbFo6b8gzb2xKcHy7Lk5NYLqVYh (USDT TRC20)\n\nAnother way: https://www.donationalerts.com/r/lottarend",
            "game_starting_discord": "You can find the latest version and discuss the game in Discord https://discord.gg/pTXcwJuH9h",
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
            "Angelic_halo": "Angelic Halo",
            "Demonic_symbol": "Demonic Symbol",
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
            "status-effect-none-label": "None",
            "persuasion-label": "Persuasion",
            "start-prs": "Persuasion",
            "rebirth-in-another-world": "Rebirth in Another World",
            "being-summoned-to-another-world": "Being Summoned to Another World",
            "reincarnation": "Reincarnation",
            "demon-invasion": "Demon Invasion",
            "the-end-of-the-world": "The End of the World",
            "apocalypse": "Apocalypse",
            "quest-info-questGiver-label": "Quest Giver",
            "quest-info-questBackground-label": "Background:",
            "quest-info-description-label": "Description:",
            "use-thinking-module-label": "Add a response-thinking module (disable to save tokens). Theoretically makes the AI smarter",
            "log-thinking-button-label": "Thought Log",
            "persuasion": "Persuasion",
            "human_desc": "A person of the modern world living in the 21st century",
            "superhuman_desc": "A superhuman is a person with super abilities that arise from the power of their mind, having undergone evolutionary changes",
            "infected_desc": "A person who has been infected with the zombie virus",
            "ratman_desc": "A descendant of ordinary rats that mutated under the influence of radiation and gained intelligence. From afar, resembles a grotesque human",
            "ghoul_desc": "A person who was once infected with the zombie virus. Managed to retain their sanity despite horrific changes to their own body",
            "mutant_desc": "A person whose body has undergone various mutations due to radiation exposure",
            "supermutant_desc": "A person whose body has become massive and strong due to radiation exposure but has undergone repulsive changes",
            "cyborg_desc": "A human with cyber implants integrated into their flesh",
            "android_desc": "A robot covered with synthetic skin and possessing human-like organs",
            "robot_desc": "A steel machine equipped with advanced artificial intelligence",
            "gray_desc": "An alien with gray skin, a large head, and black eyes, who has arrived on Earth from a distant planet",
            "alien_desc": "One of the extraterrestrials who arrived on Earth from a distant planet",
            "hybrid_desc": "A hybrid of an alien and a human. Possesses traits of both races",
            "ancient_desc": "A representative of the ancient precursor race who spent many thousands of years in cryosleep. The world around has changed incredibly during their slumber",
            "survival_kit": `Survival kit`,
            "psionic_headband": `Psionic Amplifier Headband`,
            "adrenaline_syringe": `Infected's Adrenaline Syringe`,
            "grappling_hook": `Tunneler's Grappling Hook`,
            "bone_blade": `Ghoul's Irradiated Bone Blade`,
            "mutant_serum": `Unstable Mutant Serum`,
            "crude_bonehammer": `Supermutant's Crude Bonehammer`,
            "hacking_device": `Integrated Hacking Device`,
            "skin_repair_paste": `Synthetic Skin Repair Paste`,
            "EMP_Generator": `Portable EMP Generator`,
            "communication_implant": `Telepathic Communication Implant`,
            "cloaking_device": `Alien Cloaking Device`,
            "symbiotic_implant": `Symbiotic Implant`,
            "ancient_artifact": `Ancient Forerunner Artifact`,
            "survival_kit": `Survival kit`,
            "hacker": "Hacker",
            "scout": "Scout",
            "bounty_hunter": "Bounty Hunter",
            "survivor": "Survivor",
            "raider": "Raider",
            "bandit": "Bandit",
            "wanderer": "Wanderer",
            "veteran": "Veteran",
            "mercenary": "Mercenary",
            "stalker": "Stalker",
            "citizen": "Citizen",
            "vault_dweller": "Vault Dweller",
            "savage": "Savage",
            "soldier": "Soldier",
            "engineer": "Engineer",
            "medic": "Medic",
            "sniper": "Sniper",
            "virologist": "Virologist",
            "biotechnician": "Biotechnician",
            "reborn": "Reborn",
            "psionic": "Psionic",
            "telekinetic": "Telekinetic",
            "telepath": "Telepath",
            "pyromancer": "Pyromancer",
            "cryomancer": "Cryomancer",
            "mechanized_soldier": "Mechanized Soldier",
            "mechanical_guardian": "Mechanical Guardian",
            "cybernetic_assassin": "Cybernetic Assassin",
            "cybernetic_spy": "Cybernetic Spy",
            "precursor_agent": "Precursor Agent",
            "precursor_scientist": "Precursor Scientist",
            "precursor_soldier": "Precursor Soldier",
            "xenomant": "Xenomant",
            "alien_scout": "Alien Scout",
            "space_architect": "Space Architect",
            "galactic_explorer": "Galactic Explorer",
            "alien_soldier": "Alien Soldier",
            "hacker_descr": "Specialist in hacking computer systems and networks. Uses their skills to gain access to information and control devices.",
            "scout_descr": "Agile and stealthy reconnaissance specialist, specializing in infiltration, information gathering, and discreetly eliminating targets.",
            "bounty_hunter_descr": "Experienced bounty hunter tracking and capturing criminals for rewards. Accurate shooter and hand-to-hand combat master.",
            "survivor_descr": "Experienced survivalist adapted to the harsh conditions of the post-apocalyptic world. Skilled in finding resources, building shelters, and defending against dangers.",
            "raider_descr": "Brutal marauder living off looting and violence. Strong and aggressive fighter, ruthless.",
            "bandit_descr": "Clever and cunning criminal engaged in robbery and brigandage. Masterfully wields crowbars and lockpicks.",
            "wanderer_descr": "Lonely wanderer traveling the post-apocalyptic world in search of a better life. Resilient and resourceful, able to survive in any conditions.",
            "veteran_descr": "Experienced soldier who has been through numerous battles. Possesses excellent combat training, disciplined, and cool-headed.",
            "mercenary_descr": "Mercenary fighting for money. Skilled fighter proficient with various weapons and tactics.",
            "stalker_descr": "Experienced guide through anomalous zones. Knows how to avoid dangers and find valuable artifacts.",
            "citizen_descr": "Resident of one of the few surviving cities. Possesses basic skills and knowledge necessary for living in society.",
            "vault_dweller_descr": "Outcast from the Vault, adapted to life in an underground bunker. Possesses technical skills and knowledge of the pre-war world.",
            "savage_descr": "Savage living away from civilization. Strong and agile hunter relying on primal instincts and weapons.",
            "soldier_descr": "Professional military trained to fight in any conditions. Disciplined and accurate shooter.",
            "engineer_descr": "Technical specialist capable of creating and repairing various devices. Valuable ally in the post-apocalyptic world.",
            "medic_descr": "Field doctor capable of treating wounds and illnesses. An indispensable member of any group of survivors.",
            "sniper_descr": "Accurate shooter capable of eliminating targets from a long distance. Patient and observant fighter.",
            "virologist_descr": "Scientist specializing in the study of viruses. Develops vaccines and antiviral medications.",
            "biotechnician_descr": "Scientist working with living organisms. Capable of creating genetic modifications and growing artificial tissues.",
            "reborn_descr": "Reborn is an infected individual who has partially overcome the virus and retained their sanity. They are stronger and more resilient than ordinary people and can mutate but continue to rot.",
            "psionic_descr": "Individual possessing psionic abilities. Can influence the minds of other beings and control psionic energy.",
            "telekinetic_descr": "Psionic with telekinesis abilities. Can move objects with the power of thought.",
            "telepath_descr": "Psionic with telepathy abilities. Can read minds and communicate with other beings at a distance.",
            "pyromancer_descr": "Psionic with pyrokinetic abilities. Can control fire with the power of thought.",
            "cryomancer_descr": "Psionic with cryokinetic abilities. Can control cold and create ice.",
            "mechanized_soldier_descr": "Heavily armed soldier in an exoskeleton. Possesses high firepower and protection.",
            "mechanical_guardian_descr": "Robot guardian programmed to protect a territory or object. Equipped with advanced surveillance systems and powerful weapons.",
            "cybernetic_assassin_descr": "Cybernetic assassin modified for stealth infiltration and target elimination. Equipped with built-in weapons and advanced sensors.",
            "cybernetic_spy_descr": "Cybernetic spy modified for information gathering and sabotage. Equipped with an invisibility generator and holographic projector.",
            "precursor_agent_descr": "Precursor Agent possessing advanced technologies and knowledge. Specializes in reconnaissance, sabotage, and threat elimination.",
            "precursor_scientist_descr": "Precursor Scientist with extensive knowledge in various scientific fields. Capable of creating and using advanced devices.",
            "precursor_soldier_descr": "Precursor Soldier equipped with high-tech weapons and armor. Trained to fight in any conditions.",
            "xenomant_descr": "Xenomant is a specialist skilled in mysterious artifacts and technologies of an alien race. Can use them for protection, attack, and exploration.",
            "alien_scout_descr": "Alien scout specializing in exploring new worlds and gathering information. Equipped with advanced camouflage and scanning technologies.",
            "space_architect_descr": "Space Architect is an alien capable of altering space and matter with the power of thought. Can create and destroy objects, as well as build bases and structures.",
            "galactic_explorer_descr": "Galactic Explorer is an alien dedicated to studying space and searching for new life forms. Possesses extensive knowledge and advanced technologies.",
            "alien_soldier_descr": "Alien soldier trained to fight using advanced weaponry and technologies. Disciplined and effective fighter.",
            "survival_kit": `Survival kit`,
            "hacker_1": "Hacking Interface",
            "hacker_2": "KPK",
            "hacker_3": "EMP Grenade",
            "hacker_4": "Network Scanner",
            "scout_1": "Stealth Suit",
            "scout_2": "Lockpick Set",
            "scout_3": "Gas Mask",
            "scout_4": "Silenced Pistol",
            "bounty_hunter_1": "Two Pistols",
            "bounty_hunter_2": "Target Tracking Device",
            "bounty_hunter_3": "Energy Grid",
            "bounty_hunter_4": "Combat Knife",
            "survivor_1": "Cheap Dagger",
            "survivor_2": "Homemade Armor",
            "survivor_3": "Camouflage Tent",
            "survivor_4": "Hunting Knife",
            "raider_1": "Homemade Rifle",
            "raider_2": "Spiked Club",
            "raider_3": "Flask with Gasoline",
            "raider_4": "Favorite Lighter",
            "bandit_1": "Heavy Crowbar",
            "bandit_2": "Bandit Mask",
            "bandit_3": "Leather Vest",
            "bandit_4": "Lockpick Set",
            "wanderer_1": "Universal Backpack",
            "wanderer_2": "Compact Tent",
            "wanderer_3": "Sporting Crossbow",
            "wanderer_4": "Multifunctional Knife",
            "veteran_1": "Reward Pistol",
            "veteran_2": "Old Bulletproof Vest",
            "veteran_3": "Tactical Belt",
            "veteran_4": "Medical Kit",
            "mercenary_1": "Pistol",
            "mercenary_2": "Sniper Rifle",
            "mercenary_3": "Combat Helmet",
            "mercenary_4": "Dynamite",
            "stalker_1": "Anomaly Detector",
            "stalker_2": "Modified Gas Mask",
            "stalker_3": "Assault Rifle",
            "stalker_4": "Rope with Grappling Hook",
            "citizen_1": "Citizenship Documents",
            "citizen_2": "Phone",
            "citizen_3": "Supply Bag",
            "citizen_4": "Utility Knife",
            "vault_dweller_1": "Multifunctional Tool",
            "vault_dweller_2": "Water Module",
            "vault_dweller_3": "Modified Pistol",
            "vault_dweller_4": "Vault Communication Module",
            "savage_1": "Bone Axe",
            "savage_2": "Bone Amulet",
            "savage_3": "Game Trap",
            "savage_4": "Homemade Bow",
            "soldier_1": "Automatic Rifle",
            "soldier_2": "Ammunition",
            "soldier_3": "Grenade",
            "soldier_4": "Bulletproof Vest",
            "engineer_1": "Tool Set",
            "engineer_2": "Flying Drone",
            "engineer_3": "Welding Apparatus",
            "engineer_4": "Blueprint Scanner",
            "medic_1": "First Aid Kit",
            "medic_2": "Painkiller",
            "medic_3": "Bandages",
            "medic_4": "Portable Defibrillator",
            "sniper_1": "Sniper Rifle",
            "sniper_2": "Binoculars",
            "sniper_3": "Camouflage Cloak",
            "sniper_4": "Combat Knife",
            "virologist_1": "Biological Analyzer",
            "virologist_2": "Antiviral Medications",
            "virologist_3": "Virus Research Station",
            "virologist_4": "Infected Samples",
            "biotechnician_1": "Genetic Modifier",
            "biotechnician_2": "Biosynthesizer",
            "biotechnician_3": "Laboratory Kit",
            "biotechnician_4": "Experimental Serum",
            "reborn_1": "Reborn's Anti-Rot Serum",
            "reborn_2": "Enhancement Serum",
            "reborn_3": "Controlled Mutation Serum",
            "reborn_4": "Uncontrolled Mutation Serum",
            "psionic_1": "Mind Amplifier",
            "psionic_2": "Telepathic Device",
            "psionic_3": "Focusing Crystal",
            "psionic_4": "Psi Amplifier",
            "telekinetic_1": "Concentration Hoop",
            "telekinetic_2": "Hovering Mini-Platform",
            "telekinetic_3": "Anti-Gravity Gloves",
            "telekinetic_4": "Focusing Crystal",
            "telepath_1": "Focusing Ring",
            "telepath_2": "Mind Reading Hoop",
            "telepath_3": "Thought Communication Amulet",
            "telepath_4": "Infected Control Staff",
            "pyromancer_1": "Molotov Cocktail",
            "pyromancer_2": "Pyrokinetic Staff",
            "pyromancer_3": "Pyro-Mutation Serum",
            "pyromancer_4": "Fire-Resistant Suit",
            "cryomancer_1": "Polar Thermal Suit",
            "cryomancer_2": "Thermos with Liquid Nitrogen",
            "cryomancer_3": "Cryo-Mutation Serum",
            "cryomancer_4": "Cryo Battery",
            "mechanized_soldier_1": "Exoskeleton",
            "mechanized_soldier_2": "Powerful Shotgun",
            "mechanized_soldier_3": "Energy Shield",
            "mechanized_soldier_4": "Repair Kit",
            "mechanical_guardian_1": "Advanced Surveillance Module",
            "mechanical_guardian_2": "Repair Module",
            "mechanical_guardian_3": "Protective Panel",
            "mechanical_guardian_4": "Integrated Machine Gun",
            "cybernetic_assassin_1": "Hidden Blade",
            "cybernetic_assassin_2": "Nano-Acceleration Cocktail",
            "cybernetic_assassin_3": "Sound Suppression System",
            "cybernetic_assassin_4": "Optical Night Vision Sensors",
            "cybernetic_spy_1": "Invisibility Generator",
            "cybernetic_spy_2": "Holographic Projector",
            "cybernetic_spy_3": "Cybernetic Lockpick",
            "cybernetic_spy_4": "Explosive Nano-Whip",
            "precursor_agent_1": "Plasma Pistol",
            "precursor_agent_2": "Teleportation Device",
            "precursor_agent_3": "Spy Equipment Kit",
            "precursor_agent_4": "Portable Holographic Projector",
            "precursor_scientist_1": "Universal Scanner",
            "precursor_scientist_2": "Molecular Synthesis Station",
            "precursor_scientist_3": "Energy Shield",
            "precursor_scientist_4": "Plasma Cutter",
            "precursor_soldier_1": "Energy Laser Carbine",
            "precursor_soldier_2": "Precursor Force Shield",
            "precursor_soldier_3": "Cybernetic Enhancer",
            "precursor_soldier_4": "Gravity Generator",
            "xenomant_1": "Alien Artifact",
            "xenomant_2": "Portable Teleporter",
            "xenomant_3": "Holographic Shield",
            "xenomant_4": "Energy Sword",
            "alien_scout_1": "Gravitational Boots",
            "alien_scout_2": "Portable Teleporter",
            "alien_scout_3": "Hidden Object Scanner",
            "alien_scout_4": "Laser Pistol",
            "space_architect_1": "Gravity Projector",
            "space_architect_2": "Materializing Spacesuit",
            "space_architect_3": "Space Map",
            "space_architect_4": "Planetary Stabilizer",
            "galactic_explorer_1": "Multispectral Scanner",
            "galactic_explorer_2": "Xeno Translator",
            "galactic_explorer_3": "Bio-Laboratory Module",
            "galactic_explorer_4": "Personal Drone Assistant",
            "alien_soldier_1": "Magnetic Rail Carbine",
            "alien_soldier_2": "Nanostructured Shield",
            "alien_soldier_3": "Integrated Bionic System",
            "alien_soldier_4": "Tactical Holographic Companion",
            "superhuman": "Superhuman",
            "infected": "Infected",
            "ratman": "Ratman",
            "ghoul": "Ghoul",
            "mutant": "Mutant",
            "supermutant": "Super-Mutant",
            "cyborg": "Cyborg",
            "android": "Android",
            "robot": "Robot",
            "gray": "Gray",
            "alien": "Alien",
            "hybrid": "Hybrid",
            "ancient": "Ancient",
            "total-weight-label": "Total Weight (kg):",
            "tooltip-max-weight": "Calculated by the GM at the end of each turn. Maximum weight = (Strength + Stamina) * 3 + 10",
            "max-weight-label": "Maximum Weight (kg):",
            "use-weight-control-label": "Use Weight in Game",
            "maximum-weight-exceeded-label": "Character's maximum weight exceeded! The specified items have been moved to the cart: ",
            "statsGroup-weight-button-label": "Weight",
            "tooltip-inventory-basket": "Items removed from the inventory are placed here. Automatically cleared at the end of each turn. You can restore them before they disappear.",
            "inventory-basket-button-label": "Basket (Inventory)",
            "inventory-restore": "Restore",
            "tooltip-critical-weight": "When exceeding the maximum weight, the character can still receive items into the inventory for some time, but becomes overloaded. An overloaded character quickly loses energy. After exceeding the critical weight, the character can no longer carry new items.",
            "critical-weight-label": "Critical Weight (kg):",
            "weight-status-label": "Status:",
            "weight-status-value-normal": "Normal",
            "weight-status-value-bad": "Overloaded",
            "first_contact": "First Contact",
            "zero_patient": "Zero Patient",
            "doomsday": "Doomsday",
            "experiment": "Experiment",
            "awakening_ancients": "Awakening of the Ancients",
            "call_from_space": "Call from Space",
            "infected_city": "Infected City",
            "dead_zone": "Dead Zone",
            "anomalous_territory": "Anomalous Territory",
            "underground_world": "Underground World",
            "ruins_megapolis": "Ruins of the Megapolis",
            "mutant_lair": "Mutant Lair",
            "forgotten_laboratory": "Forgotten Laboratory",
            "fight_with_horde": "Fight with the Horde",
            "vault_life": "Life in the Vault",
            "besieged_city": "Besieged City",
            "nomadic_life": "Nomadic Life",
            "pirate_haven": "Pirate Haven",
            "wild_tribe": "Wild Tribe",
            "trade_caravan": "Trade Caravan",
            "last_city": "Last City",
            "gang_war": "Gang War",
            "resistance": "Resistance",
            "bounty_hunters": "Bounty Hunters",
            "wasteland_mercenaries": "Wasteland Mercenaries",
            "battle_for_resources": "Battle for Resources",
            "ideology_conflict": "Ideological Conflict",
            "cure_search": "Cure Search",
            "precursors_secret": "Secret of the Precursors",
            "alien_first_contact": "First Contact with Aliens",
            "paradise_search": "Search for Paradise",
            "mutant_origin": "Origin of the Mutants",
            "vault_secrets": "Vault Secrets",
            "star_ark": "Star Ark",
            "cyber_rebels": "Cyber Rebels",
            "machine_uprising": "Machine Uprising",
            "mech_wars": "Mech Wars",
            "engineer_guild": "Engineer Guild",
            "cyber_city": "Cyber City",
            "psionic_war": "Psionic War",
            "psionic_school": "Psionic School",
            "psionic_hunt": "Psionic Hunt",
            "psy_defense": "Psy Defense",
            "alien_invasion": "Alien Invasion",
            "galactic_diplomacy": "Galactic Diplomacy",
            "star_patrol": "Star Patrol",
            "war_of_the_worlds": "War of the Worlds",
            "artifact_search": "Artifact Search",
            "hospital_outbreak": "Hospital Outbreak",
            "shopping_mall_siege": "Shopping Mall Siege",
            "prison_break": "Prison Break",
            "highrise_trap": "Highrise Trap",
            "subway_escape": "Subway Escape",
            "ground_zero": "Ground Zero",
            "patient_zero_hunt": "Patient Zero Hunt",
            "the_last_broadcast": "The Last Broadcast",
            "evacuation_failed": "Evacuation Failed",
            "first_bite": "First Bite",
            "the_fall": "The Fall",
            "scorched_earth": "Scorched Earth",
            "water_wars": "Water Wars",
            "beneath_the_sand": "Beneath the Sand",
            "fortress_of_madness": "Fortress of Madness",
            "ghost_ship": "Ghost Ship",
            "the_frozen_north": "The Frozen North",
            "jungle_hunt": "Jungle Hunt",
            "sky_pirates": "Sky Pirates",
            "mutant_island": "Mutant Island",
            "lost_colony": "Lost Colony",
            "first_contact_desc": "The alien invasion begins.",
            "zero_patient_desc": "The zombie virus starts spreading.",
            "doomsday_desc": "The beginning of a nuclear war or a meteorite impact.",
            "experiment_desc": "A failed scientific experiment has gone out of control.",
            "awakening_ancients_desc": "The end of the cryosleep of the Ancients—a highly advanced precursor race. Their return to a changed world.",
            "call_from_space_desc": "The arrival of the first alien scout ship on Earth.",
            "infected_city_desc": "Survive in a city overwhelmed by a zombie epidemic.",
            "dead_zone_desc": "Journey through a radioactive wasteland.",
            "anomalous_territory_desc": "Exploration of a zone filled with anomalies and mutants.",
            "underground_world_desc": "Life in an abandoned metro system or bunkers.",
            "ruins_megapolis_desc": "Explore the ruins of a city in search of resources.",
            "mutant_lair_desc": "Survive near a colony of dangerous mutants.",
            "forgotten_laboratory_desc": "Find and investigate an abandoned scientific laboratory.",
            "fight_with_horde_desc": "Defend a settlement from a wave of crazed infected.",
            "vault_life_desc": "Daily life in an underground bunker, dealing with internal conflicts.",
            "besieged_city_desc": "Defend the last bastion of civilization from external threats.",
            "nomadic_life_desc": "Travel with a group of survivors, looking for a new home.",
            "pirate_haven_desc": "Life among pirates and smugglers on the wreckage of ships.",
            "wild_tribe_desc": "Survive in a primitive tribe, facing conflict with civilization.",
            "trade_caravan_desc": "Guard and escort a trade caravan through dangerous territories.",
            "last_city_desc": "Protect the last city from raiders and mutants.",
            "gang_war_desc": "Struggle for power among raider gangs.",
            "resistance_desc": "An underground fight against a totalitarian regime.",
            "bounty_hunters_desc": "Take on risky contracts to capture dangerous criminals.",
            "wasteland_mercenaries_desc": "Complete mercenary missions, arbitrate disputes between clans.",
            "battle_for_resources_desc": "A conflict between settlements for control over valuable resources.",
            "ideology_conflict_desc": "A clash between factions with unique ideologies.",
            "cure_search_desc": "Search for a vaccine for the zombie virus or another catastrophe.",
            "precursors_secret_desc": "Study ruins and artifacts of an ancient civilization.",
            "alien_first_contact_desc": "A diplomatic mission or espionage with extraterrestrials.",
            "paradise_search_desc": "A quest for a mythical safe haven rumored in the Wastelands.",
            "mutant_origin_desc": "Investigate the causes of mutations and find a way to reverse them.",
            "vault_secrets_desc": "Uncover the hidden experiments conducted in the Vaults.",
            "star_ark_desc": "Locate and launch a surviving spaceship.",
            "cyber_rebels_desc": "Fight against the corporation controlling cyber technologies.",
            "machine_uprising_desc": "War against rebellious robots and AI.",
            "mech_wars_desc": "Battles with giant robots and war machines.",
            "engineer_guild_desc": "Rivalry among engineer groups vying for rare technologies.",
            "cyber_city_desc": "Life in a city governed by an artificial intelligence.",
            "psionic_war_desc": "A conflict between psionics and those who fear them.",
            "psionic_school_desc": "Training and developing psionic abilities.",
            "psionic_hunt_desc": "Tracking and neutralizing dangerous psionics.",
            "psy_defense_desc": "Defending against psionic attacks and manipulation.",
            "alien_invasion_desc": "Defend Earth from a full-scale alien invasion.",
            "galactic_diplomacy_desc": "Establish contact and relations with alien races.",
            "star_patrol_desc": "Patrol outer space to prevent various threats.",
            "war_of_the_worlds_desc": "Take part in an interstellar conflict on one race’s side.",
            "artifact_search_desc": "Find and study artifacts of an alien civilization.",
            "hospital_outbreak_desc": "You are trapped in a hospital crawling with infected. Find an exit before it’s too late.",
            "shopping_mall_siege_desc": "A group of survivors is holed up in a shopping mall. Defend it from waves of zombies and find a way out.",
            "prison_break_desc": "A zombie virus outbreak hits a prison. Inmates and guards must join forces to escape.",
            "highrise_trap_desc": "You are locked on the top floors of a skyscraper. Zombies are closing in, and the elevators aren’t working. Fight your way down.",
            "subway_escape_desc": "You took refuge in the subway, only to find it infested with zombies. Break through to the next station.",
            "ground_zero_desc": "You witness the very start of the outbreak. The city descends into chaos—try to survive and escape.",
            "patient_zero_hunt_desc": "Authorities are searching for the patient zero to halt the virus. You are among those who might find them.",
            "the_last_broadcast_desc": "You are a radio host broadcasting from a besieged studio. Keep survivors informed for as long as you can.",
            "evacuation_failed_desc": "Evacuation has failed. Helicopters left, leaving you surrounded by zombies. Find another way out.",
            "first_bite_desc": "You have been bitten. There’s only limited time to find a cure or accept your fate.",
            "the_fall_desc": "You’re a city resident who just learned about the zombie virus. The city is on fire, streets in panic—save your family.",
            "scorched_earth_desc": "After a nuclear war, Earth’s surface lies barren and lifeless. Survive in the ruins, fighting for scarce resources and avoiding radiation.",
            "water_wars_desc": "In a world where clean water is as precious as gold, you must locate or safeguard a water source for your settlement.",
            "beneath_the_sand_desc": "Ancient ruins lie hidden beneath desert sands, filled with treasures and dangers. Explore them, wary of sandworms and traps.",
            "fortress_of_madness_desc": "A settlement leader has gone insane, turning his town into an impenetrable fortress. Overthrow him to free the people.",
            "ghost_ship_desc": "You awake aboard a drifting ghost ship. Uncover the mystery of its crew and find a way back to shore.",
            "the_frozen_north_desc": "Eternal frost grips the northern lands. Survive extreme cold, mutated wildlife, and desperate survivors.",
            "jungle_hunt_desc": "Dangerous jungles teeming with mutants, poisonous plants, and ancient traps. Lead an expedition deep into the jungle in search of a lost artifact.",
            "sky_pirates_desc": "Become an air pirate cruising the skies in a dirigible. Battle rival pirates, trade with floating cities, and explore drifting islands.",
            "mutant_island_desc": "You’ve been stranded on an island inhabited by a tribe of mutants. Befriend them or attempt to escape the island.",
            "lost_colony_desc": "You’re part of a spaceship crew that crash-landed on Earth overrun by zombies. Seek out survivors and build a new settlement while fending off hordes of infected.",
            "character-post-apocalyptic-name": "Enter character name",
            "post-apocalypse-race-message-label": "Race Description:",
            "post-apocalypse-class-message-label": "Class Description:",
            "tooltip-post-apocalypse-rpg": "If the slider is red, it is enabled. RPG is the game mode. In RPG mode, gameplay involves character development, and skills and inventory are crucial. If disabled, the game is in Roleplay mode, which focuses on creating an interesting narrative, and skills and inventory are secondary.",
            "post-apocalypse-tooltip-noMagic": "If enabled (red color), the gamemaster creates a world without magic and only with realistic abilities. If disabled, the world will have magic and unrealistic abilities.",
            "post-apocalypse-nonmagic-mode-name": "No Magic in the World",
            "create-character-post-apocalyptic": "Start Game",
            "random-character-post-apocalyptic": "Random Character",
            "load-character-post-apocalyptic": "Load Autosave",
            "load-savefile-post-apocalyptic": "Load File",
            "my-game-post-apocalyptic": "My Setting",
            "ai-provider-label4": "AI Provider",
            "ai-none4-label": "None Selected",
            "ai-model-label4": "AI Model",
            "ai-model4": "Enter AI model name",
            "api-key-label4": "Your API Key",
            "api-key-button4": "Show for 10 seconds",
            "api-key4": "For security purposes, ensure you are using an API key with a low usage limit",
            "additional-settings-label4": "You can view additional settings in the dropdown panel on the right. Click the button in the bottom right corner of the screen to access the settings panel.",
            "post-apocalypse-campaign-message-label": "Campaign Description:",
            "post-apocalyptic-game": "Quick Game - Post-Apocalypse",
            "create-character-post-apocalyptic-label": "Create Your Character",
            "weight-reduction-label": "Content Weight Reduction",
            "thinking-module-iterations-label": "Number of attempts the answer-thinking module will make to ponder the response.",
            "use-literary-prompt-label": "The Game Master will strive for a literary style",
            "use-erotic-prompt-label": "Allow 21+ content in the game",
            "abort-error-message": "Request aborted by the player",
            "common-error-message": "Error during the request:",
            "cancel-button": "Cancel",
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
            "max-gm-symbols": "20000 по умолчанию",
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

Человек: Удача +2, Торговля +1, Восприятие +1, Мудрость -1, Интеллект -1, Универсальный инструмент

Эльф: Ловкость +2, Скорость +1, Привлекательность +1, Сила -1, Выносливость -1, Эльфийский плащ

Гном: Торговля +2, Сила +1, Выносливость +1, Ловкость -1, Скорость -1, Гномий эль

Орк: Сила +3, Выносливость +2, Интеллект -1, Мудрость -1, Привлекательность -1, Орочья боевая раскраска

Ящер: Выносливость +2, Скорость +1, Привлекательность -1, Масло для чешуи

Вампир: Восприятие +1, Привлекательность +1, Ловкость +1, Удача -1, Флакон крови

Голем: Сила +3, Выносливость +2, Интеллект -1, Привлекательность -1, Мудрость -1, Элементальное ядро

Ангел: Сила +1, Привлекательность +1, Мудрость +1, Торговля -1, Ангельский нимб

Демон: Ловкость +1, Привлекательность +2, Убеждение +1, Мудрость -1, Удача -1, Демонический символ`,
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
            "status-purposes-label": "Возможные цели",
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
            "angel": "Ангел",
            "demon": "Демон",
            "no-choosed-race": "Выберите расу",

            "female": "Женский",
            "male": "Мужской",
            "no-choosed-gender": "Выберите пол",

            //not interface
            "item_notepad": "Блокнот для заметок",
            "item_notepad_description": "Блокнот для заметок",
            "game_starting_description": `Приветствую тебя в Абсолютной Легендарике, искатель приключений! Ознакомься со следующей информацией...

Это текстовая ролевая игра с LLM. Ты можешь ввести свое действие в текстовом поле внизу. Нейросеть обработает твой ответ и пришлет инструкции, на основе которых заполняется интерфейс игры.
Ты можешь переключить доступные тебе информационные окна в верхнем правом углу экрана, в выпадающей панели с кнопками. Каждый предмет, каждый NPC в списке NPC, каждый навык и квест, а также информация статуса — все это используется мастером игры при формировании ответа. Когда вы нажимаете на удалить предмет/NPC/квест и т.д., эта информация исчезает из доступной гейм-мастеру, и он формулирует дальнейший ответ без её учёта. Кроме того, мастер игры внимательно смотрит на историю ваших с ним сообщений, а также на последние пять сообщений "Лога расчёта действий".
Все списки инфо-окон ограничены 30 элементами, за исключением предметов инвентаря. Это сделано, чтобы не перегружать мастера игры информацией, поскольку может наступить момент, когда мастер игры просто не сможет создать ответ. Ты можешь заблокировать любой списочный элемент в инфо-окне, нажав на кнопку "замочка" и таким образом защитив его от удаления.
Если мастер игры все равно не может сформировать ответ, возможно, его контекст перегружен информацией. Попробуйте очистить какие-либо из доступных вам данных. Начните с удаления половины чата и посмотрите, не поможет ли это мастеру игры сформировать ответ.
Пожалуйста, рассмотрите возможность поддержать меня (Lottarend — автор игры). Ссылки на способы поддержки приведены в следующем сообщении.
Приятной игры!`,
            "game_starting_donate": "Поблагодарить автора Абсолютной Легендарики:\n\n Криптовалюта: TSH1v85VbFo6b8gzb2xKcHy7Lk5NYLqVYh (USDT TRC20)\n\nДругой способ: https://www.donationalerts.com/r/lottarend",
            "game_starting_discord": "В дискорде можно найти последнюю версию и обсудить игру https://discord.gg/pTXcwJuH9h",
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
            "Angelic_halo": "Ангельский нимб",
            "Demonic_symbol": "Демонический символ",
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
            "status-effect-none-label": "Отсутствуют",
            "persuasion-label": "Убеждение",
            "start-prs": "Убеждение",
            "rebirth-in-another-world": "Перерождение в другом мире",
            "being-summoned-to-another-world": "Быть призванным в другой мир",
            "reincarnation": "Реинкарнация",
            "demon-invasion": "Вторжение демонов",
            "the-end-of-the-world": "Конец мира",
            "apocalypse": "Апокалипсис",
            "quest-info-questGiver-label": "Квестодатель",
            "quest-info-questBackground-label": "Предыстория:",
            "quest-info-description-label": "Описание:",
            "use-thinking-module-label": "Добавить модуль обдумывания ответов (отключите для экономии токенов). Теоретически сделает АИ более умным",
            "log-thinking-button-label": "Лог мыслей",
            "persuasion": "Убеждение",
            "human_desc": `Человек современного мира, живущий в 21-ом веке`,
            "superhuman_desc": `Сверхчеловек - это человек с супер-способностями, что происходят от силы его разума, претерпевшего эволюционные изменения`,
            "infected_desc": "Человек, что был инфицирован зомби-вирусом",
            "ratman_desc": "Потомок обычных крыс, мутировавших под воздействием радиации и обретших разум. Издали напоминает уродливого человека",
            "ghoul_desc": "Человек, когда-то зараженный зомби-вирусом. Сумел сохранить разум, несмотря на ужасающие изменения в собственном теле",
            "mutant_desc": "Человек, чье тело претерпело различные мутации под воздействием радиации",
            "supermutant_desc": "Человек, чье тело стало массивным и сильным под воздействием радиации, но претерпело отталкивающие изменения",
            "cyborg_desc": "Человек с кибер-имплантами, встроенными в плоть его тела",
            "android_desc": "Робот, покрытый синтетической кожей и имеющий аналоги человеческих органов",
            "robot_desc": "Стальная машина, обладающая продвинутым искусственным интеллектом",
            "gray_desc": "Пришелец с серой кожей, большой головой и черными глазами, что прилетел на Землю с далекой планеты",
            "alien_desc": "Один из инопланетян, прибывших на Землю с далекой планеты",
            "hybrid_desc": "Гибрид пришельца и человека. Обладает чертами обоих рас",
            "ancient_desc": "Представитель древней расы предтеч, который много тысяч лет провел в криосне. Мир вокруг невероятно изменился за время его спячки",
            "survival_kit": `Набор выживальщика`,
            "psionic_headband": `Псионический усиливающий обруч`,
            "adrenaline_syringe": `Адреналиновый шприц инфицированного`,
            "grappling_hook": `Крюк-кошка туннельщика`,
            "bone_blade": `Радиационно-зараженное костяное лезвие гуля`,
            "mutant_serum": `Нестабильная сыворотка мутанта`,
            "crude_bonehammer": `Грубый костяной молот Супермутанта`,
            "hacking_device": `Интегрированное устройство киборга для взлома`,
            "skin_repair_paste": `Синтетический гель для ремонта кожи андроида`,
            "EMP_Generator": `Портативный генератор ЭМП`,
            "communication_implant": `Телепатический коммуникационный имплант`,
            "cloaking_device": `Инопланетное маскировочное устройство`,
            "symbiotic_implant": `Симбиотический имплант`,
            "ancient_artifact": `Древний артефакт предтеч`,
            "survival_kit": `Набор выживания`,
            "hacker": "Хакер",
            "scout": "Разведчик",
            "bounty_hunter": "Охотник за головами",
            "survivor": "Выживший",
            "raider": "Рейдер",
            "bandit": "Бандит",
            "wanderer": "Скиталец",
            "veteran": "Ветеран",
            "mercenary": "Наёмник",
            "stalker": "Сталкер",
            "citizen": "Горожанин",
            "vault_dweller": "Житель Убежища",
            "savage": "Дикарь",
            "soldier": "Солдат",
            "engineer": "Инженер",
            "medic": "Медик",
            "sniper": "Снайпер",
            "virologist": "Вирусолог",
            "biotechnician": "Биотехник",
            "reborn": "Возрожденный",
            "psionic": "Псионик",
            "telekinetic": "Телекинетик",
            "telepath": "Телепат",
            "pyromancer": "Пиромант",
            "cryomancer": "Криомант",
            "mechanized_soldier": "Механизированный солдат",
            "mechanical_guardian": "Механический страж",
            "cybernetic_assassin": "Кибернетический ассассин",
            "cybernetic_spy": "Кибернетический шпион",
            "precursor_agent": "Агент Предтеч",
            "precursor_scientist": "Ученый Предтеч",
            "precursor_soldier": "Солдат Предтеч",
            "xenomant": "Ксеномант",
            "alien_scout": "Инопланетный разведчик",
            "space_architect": "Космический архитектор",
            "galactic_explorer": "Галактический исследователь",
            "alien_soldier": "Инопланетный солдат",
            "hacker_descr": "Специалист по взлому компьютерных систем и сетей. Использует свои навыки для получения доступа к информации и управления устройствами.",
            "scout_descr": "Ловкий и скрытный разведчик, специализирующийся на проникновении, сборе информации и незаметном устранении целей.",
            "bounty_hunter_descr": "Опытный охотник за головами, выслеживающий и захватывающий преступников за вознаграждение. Меткий стрелок и мастер рукопашного боя.",
            "survivor_descr": "Опытный выживальщик, приспособившийся к суровым условиям постапокалиптического мира. Умеет находить ресурсы, строить укрытия и защищаться от опасностей.",
            "raider_descr": "Жестокий мародер, живущий за счет грабежей и насилия. Сильный и агрессивный боец, не знающий пощады.",
            "bandit_descr": "Ловкий и хитрый преступник, промышляющий грабежами и разбоем. Мастерски владеет ломом и отмычками.",
            "wanderer_descr": "Одинокий странник, путешествующий по постапокалиптическому миру в поисках лучшей жизни. Выносливый и находчивый, умеет выживать в любых условиях.",
            "veteran_descr": "Опытный солдат, прошедший через множество сражений. Обладает отличной боевой подготовкой, дисциплинирован и хладнокровен.",
            "mercenary_descr": "Наемник, сражающийся за деньги. Опытный боец, владеющий различным оружием и тактикой.",
            "stalker_descr": "Опытный проводник по аномальным зонам. Знает, как обходить опасности и находить ценные артефакты.",
            "citizen_descr": "Житель одного из немногих уцелевших городов. Обладает базовыми навыками и знаниями, необходимыми для жизни в обществе.",
            "vault_dweller_descr": "Выходец из Убежища, приспособленный к жизни в подземном бункере. Обладает техническими навыками и знаниями о довоенном мире.",
            "savage_descr": "Дикарь, живущий вдали от цивилизации. Сильный и ловкий охотник, полагающийся на первобытные инстинкты и оружие.",
            "soldier_descr": "Профессиональный военный, обученный сражаться в любых условиях. Дисциплинированный и меткий стрелок.",
            "engineer_descr": "Технический специалист, способный создавать и ремонтировать различные устройства. Ценный союзник в постапокалиптическом мире.",
            "medic_descr": "Полевой врач, способный лечить раны и болезни. Незаменимый член любой группы выживших.",
            "sniper_descr": "Меткий стрелок, способный устранять цели с большого расстояния. Терпеливый и наблюдательный боец.",
            "virologist_descr": "Ученый, специализирующийся на изучении вирусов. Разрабатывает вакцины и антивирусные препараты.",
            "biotechnician_descr": "Ученый, работающий с живыми организмами. Способен создавать генетические модификации и выращивать искусственные ткани.",
            "reborn_descr": "Возрожденный - это зараженный, который смог частично побороть вирус и сохранить разум. Они сильнее и выносливее обычных людей, и могут мутировать, но продолжают гнить.",
            "psionic_descr": "Индивид, обладающий псионическими способностями. Может воздействовать на разум других существ и управлять псионической энергией.",
            "telekinetic_descr": "Псионик, обладающий способностью к телекинезу. Может перемещать предметы силой мысли.",
            "telepath_descr": "Псионик, обладающий способностью к телепатии. Может читать мысли и общаться с другими существами на расстоянии.",
            "pyromancer_descr": "Псионик, обладающий способностью к пирокинезу. Может управлять огнем силой мысли.",
            "cryomancer_descr": "Псионик, обладающий способностью к криокинезу. Может управлять холодом и создавать лед.",
            "mechanized_soldier_descr": "Тяжеловооруженный солдат в экзоскелете. Обладает высокой огневой мощью и защитой.",
            "mechanical_guardian_descr": "Робот-охранник, запрограммированный на защиту территории или объекта. Обладает продвинутой системой слежения и мощным оружием.",
            "cybernetic_assassin_descr": "Кибернетический убийца, модифицированный для скрытного проникновения и устранения целей. Обладает встроенным оружием и продвинутыми сенсорами.",
            "cybernetic_spy_descr": "Кибернетический шпион, модифицированный для сбора информации и диверсий. Оснащен генератором невидимости и голографическим проектором.",
            "precursor_agent_descr": "Агент Предтеч, владеющий продвинутыми технологиями и знаниями. Специализируется на разведке, диверсиях и устранении угроз.",
            "precursor_scientist_descr": "Ученый Предтеч, обладающий обширными знаниями в различных областях науки. Способен создавать и использовать продвинутые устройства.",
            "precursor_soldier_descr": "Солдат Предтеч, оснащенный высокотехнологичным оружием и броней. Обучен ведению боя в любых условиях.",
            "xenomant_descr": "Ксеномант - это специалист, владеющий таинственными артефактами и технологиями инопланетной расы. Он может использовать их для защиты, нападения и исследования.",
            "alien_scout_descr": "Инопланетный разведчик, специализирующийся на исследовании новых миров и сборе информации. Обладает продвинутыми технологиями маскировки и сканирования.",
            "space_architect_descr": "Космический архитектор - это инопланетянин, способный изменять пространство и материю силой мысли. Он может создавать и разрушать объекты, а также строить базы и сооружения.",
            "galactic_explorer_descr": "Галактический исследователь - это инопланетянин, посвятивший себя изучению космоса и поиску новых форм жизни. Он обладает обширными знаниями и продвинутыми технологиями.",
            "alien_soldier_descr": "Инопланетный солдат, обученный ведению боя с использованием передового вооружения и технологий. Дисциплинированный и эффективный боец.",
            "survival_kit": `Набор выживания`,
            "hacker_1": "Интерфейс для взлома",
            "hacker_2": "КПК",
            "hacker_3": "EMP-граната",
            "hacker_4": "Сканер сети",
            "scout_1": "Стелс-костюм",
            "scout_2": "Набор отмычек",
            "scout_3": "Противогаз",
            "scout_4": "Пистолет с глушителем",
            "bounty_hunter_1": "Два пистолета",
            "bounty_hunter_2": "Устройство отслеживания целей",
            "bounty_hunter_3": "Энергосеть",
            "bounty_hunter_4": "Боевой нож",
            "survivor_1": "Дешевый обрез",
            "survivor_2": "Самодельная броня",
            "survivor_3": "Маскировочная палатка",
            "survivor_4": "Охотничий нож",
            "raider_1": "Самодельное ружье",
            "raider_2": "Шипованная дубинка",
            "raider_3": "Фляга с бензином",
            "raider_4": "Любимая зажигалка",
            "bandit_1": "Тяжелый лом",
            "bandit_2": "Маска бандита",
            "bandit_3": "Кожаный жилет",
            "bandit_4": "Набор отмычек",
            "wanderer_1": "Универсальный рюкзак",
            "wanderer_2": "Компактная палатка",
            "wanderer_3": "Спортивный арбалет",
            "wanderer_4": "Многофункциональный нож",
            "veteran_1": "Наградной пистолет",
            "veteran_2": "Старый бронежилет",
            "veteran_3": "Тактический пояс",
            "veteran_4": "Медицинский набор",
            "mercenary_1": "Пистолет",
            "mercenary_2": "Снайперская винтовка",
            "mercenary_3": "Боевой шлем",
            "mercenary_4": "Динамит",
            "stalker_1": "Детектор аномалий",
            "stalker_2": "Модифицированный противогаз",
            "stalker_3": "Штурмовая винтовка",
            "stalker_4": "Веревка с крюком-кошкой",
            "citizen_1": "Документы о гражданстве",
            "citizen_2": "Телефон",
            "citizen_3": "Сумка с припасами",
            "citizen_4": "Утилитарный нож",
            "vault_dweller_1": "Многофункциональный инструмент",
            "vault_dweller_2": "Водяной модуль",
            "vault_dweller_3": "Модифицированный пистолет",
            "vault_dweller_4": "Модуль связи с Убежищем",
            "savage_1": "Костяной топор",
            "savage_2": "Костяной амулет",
            "savage_3": "Ловушка для дичи",
            "savage_4": "Самодельный лук",
            "soldier_1": "Автоматическая винтовка",
            "soldier_2": "Боеприпасы",
            "soldier_3": "Граната",
            "soldier_4": "Бронежилет",
            "engineer_1": "Набор инструментов",
            "engineer_2": "Летающий дрон",
            "engineer_3": "Сварочный аппарат",
            "engineer_4": "Сканер чертежей",
            "medic_1": "Аптечка первой помощи",
            "medic_2": "Обезболивающее",
            "medic_3": "Бинты",
            "medic_4": "Портативный дефибриллятор",
            "sniper_1": "Снайперская винтовка",
            "sniper_2": "Бинокль",
            "sniper_3": "Камуфляжный плащ",
            "sniper_4": "Боевой нож",
            "virologist_1": "Биологический анализатор",
            "virologist_2": "Антивирусные препараты",
            "virologist_3": "Станция исследования вирусов",
            "virologist_4": "Зараженные образцы",
            "biotechnician_1": "Генетический модификатор",
            "biotechnician_2": "Биосинтезатор",
            "biotechnician_3": "Лабораторный набор",
            "biotechnician_4": "Экспериментальная сыворотка",
            "reborn_1": "Сыворотка от гниения Возрожденного",
            "reborn_2": "Сыворотка усиления",
            "reborn_3": "Сыворотка контролируемой мутации",
            "reborn_4": "Сыворотка неконтролируемой мутации",
            "psionic_1": "Усилитель разума",
            "psionic_2": "Телепатическое устройство",
            "psionic_3": "Фокусирующий кристалл",
            "psionic_4": "Пси-усилитель",
            "telekinetic_1": "Обруч концентрации",
            "telekinetic_2": "Парящий мини-платформа",
            "telekinetic_3": "Перчатки антигравитации",
            "telekinetic_4": "Кристалл фокусировки",
            "telepath_1": "Фокусирующее кольцо",
            "telepath_2": "Обруч чтения мыслей",
            "telepath_3": "Амулет мыслесвязи",
            "telepath_4": "Жезл управления зараженными",
            "pyromancer_1": "Коктейль Молотова",
            "pyromancer_2": "Пирокинетический посох",
            "pyromancer_3": "Сыворотка пиро-мутации",
            "pyromancer_4": "Огнеупорный костюм",
            "cryomancer_1": "Полярный термокостюм",
            "cryomancer_2": "Термос с жидким азотом",
            "cryomancer_3": "Сыворотка крио-мутации",
            "cryomancer_4": "Криобатарея",
            "mechanized_soldier_1": "Экзоскелет",
            "mechanized_soldier_2": "Мощный дробовик",
            "mechanized_soldier_3": "Энергетический щит",
            "mechanized_soldier_4": "Ремонтный набор",
            "mechanical_guardian_1": "Продвинутый модуль слежения",
            "mechanical_guardian_2": "Ремонтный модуль",
            "mechanical_guardian_3": "Защитная панель",
            "mechanical_guardian_4": "Встроенный пулемет",
            "cybernetic_assassin_1": "Скрытый клинок",
            "cybernetic_assassin_2": "Нано-коктейль ускорения",
            "cybernetic_assassin_3": "Система подавления звука",
            "cybernetic_assassin_4": "Оптические сенсоры ночного видения",
            "cybernetic_spy_1": "Генератор невидимости",
            "cybernetic_spy_2": "Голографический проектор",
            "cybernetic_spy_3": "Кибернетический отмычка",
            "cybernetic_spy_4": "Разрывной нано-кнут",
            "precursor_agent_1": "Плазменный пистолет",
            "precursor_agent_2": "Телепортационное устройство",
            "precursor_agent_3": "Комплект шпионского оборудования",
            "precursor_agent_4": "Портативный голографический проектор",
            "precursor_scientist_1": "Универсальный сканер",
            "precursor_scientist_2": "Станция молекулярного синтеза",
            "precursor_scientist_3": "Энергетический щит",
            "precursor_scientist_4": "Плазменный резак",
            "precursor_soldier_1": "Энергетический лазерный карабин",
            "precursor_soldier_2": "Силовой щит предтеч",
            "precursor_soldier_3": "Кибернетический усилитель",
            "precursor_soldier_4": "Гравитационный генератор",
            "xenomant_1": "Инопланетный артефакт",
            "xenomant_2": "Портативный телепортатор",
            "xenomant_3": "Голографический щит",
            "xenomant_4": "Энергетический меч",
            "alien_scout_1": "Гравитационные ботинки",
            "alien_scout_2": "Портативный телепортатор",
            "alien_scout_3": "Сканер скрытых объектов",
            "alien_scout_4": "Лазерный пистолет",
            "space_architect_1": "Гравитационный проектор",
            "space_architect_2": "Материализующий скафандр",
            "space_architect_3": "Космическая карта",
            "space_architect_4": "Планетарный стабилизатор",
            "galactic_explorer_1": "Мультиспектральный сканер",
            "galactic_explorer_2": "Ксенопереводчик",
            "galactic_explorer_3": "Биолабораторный модуль",
            "galactic_explorer_4": "Личный дрон-помощник",
            "alien_soldier_1": "Магнитный рельсовый карабин",
            "alien_soldier_2": "Наноструктурированный щит",
            "alien_soldier_3": "Интегрированная бионическая система",
            "alien_soldier_4": "Тактический голографический компаньон",
            "superhuman": "Сверхчеловек",
            "infected": "Зараженный",
            "ratman": "Крысолюд",
            "ghoul": "Гуль",
            "mutant": "Мутант",
            "supermutant": "Супер-Мутант",
            "cyborg": "Киборг",
            "android": "Андроид",
            "robot": "Робот",
            "gray": "Серый",
            "alien": "Пришелец",
            "hybrid": "Гибрид",
            "ancient": "Древний",
            "total-weight-label": "Общий вес (кг):",
            "tooltip-max-weight": "Рассчитывается ГМ-ом в конце каждого хода. Максимальный вес = (Сила + Выносливость) * 3 + 10",
            "max-weight-label": "Максимальный вес (кг):",
            "use-weight-control-label": "Использовать вес в игре",
            "maximum-weight-exceeded-label": "Превышен максимальный вес персонажа! Указанные предметы были перенесены в корзину: ",
            "statsGroup-weight-button-label": "Вес",
            "tooltip-inventory-basket": "Сюда попадают удаленные из инвентаря предметы. Автоматически очищается в конце каждого хода. Вы можете восстановить их, пока они не исчезли.",
            "inventory-basket-button-label": "Корзина (Инвентарь)",
            "inventory-restore": "Восстановить",
            "tooltip-critical-weight": "При превышении максимального веса, персонаж ещё некоторое время может получать предметы в инвентарь, но оказывается перегружен. Перегруженный персонаж быстро теряет энергию. После превышения критического веса, персонаж больше не может брать новые вещи.",
            "critical-weight-label": "Критический вес (кг):",
            "weight-status-label": "Состояние:",
            "weight-status-value-normal": "Нормальное",
            "weight-status-value-bad": "Перегружен",
            "first_contact": "Первый контакт",
            "zero_patient": "Нулевой пациент",
            "doomsday": "Судный день",
            "experiment": "Эксперимент",
            "awakening_ancients": "Пробуждение Древних",
            "call_from_space": "Зов из космоса",
            "infected_city": "Зараженный город",
            "dead_zone": "Мертвая зона",
            "anomalous_territory": "Аномальная территория",
            "underground_world": "Подземный мир",
            "ruins_megapolis": "Руины мегаполиса",
            "mutant_lair": "Логово мутантов",
            "forgotten_laboratory": "Забытая лаборатория",
            "fight_with_horde": "Битва с Роем",
            "vault_life": "Жизнь в Убежище",
            "besieged_city": "Осажденный город",
            "nomadic_life": "Кочевая жизнь",
            "pirate_haven": "Пиратская гавань",
            "wild_tribe": "Дикое племя",
            "trade_caravan": "Торговый караван",
            "last_city": "Последний город",
            "gang_war": "Война банд",
            "resistance": "Сопротивление",
            "bounty_hunters": "Охотники за головами",
            "wasteland_mercenaries": "Наемники Пустоши",
            "battle_for_resources": "Битва за ресурсы",
            "ideology_conflict": "Противостояние идеологий",
            "cure_search": "Поиск лекарства",
            "precursors_secret": "Тайна Предтеч",
            "alien_first_contact": "Первый контакт с пришельцами",
            "paradise_search": "В поисках рая",
            "mutant_origin": "Происхождение мутантов",
            "vault_secrets": "Секреты Убежищ",
            "star_ark": "Звездный ковчег",
            "cyber_rebels": "Кибер-повстанцы",
            "machine_uprising": "Восстание машин",
            "mech_wars": "Механические войны",
            "engineer_guild": "Гильдия инженеров",
            "cyber_city": "Кибер-город",
            "psionic_war": "Псионическая война",
            "psionic_school": "Школа псионики",
            "psionic_hunt": "Охота на псиоников",
            "psy_defense": "Пси-защита",
            "alien_invasion": "Инопланетное вторжение",
            "galactic_diplomacy": "Галактическая дипломатия",
            "star_patrol": "Звездный патруль",
            "war_of_the_worlds": "Война миров",
            "artifact_search": "Поиск артефактов",
            "hospital_outbreak": "Побег из больницы",
            "shopping_mall_siege": "Осада торгового центра",
            "prison_break": "Побег из тюрьмы",
            "highrise_trap": "Высотная ловушка",
            "subway_escape": "Побег из метро",
            "ground_zero": "Эпицентр",
            "patient_zero_hunt": "Охота за нулевым пациентом",
            "the_last_broadcast": "Последний эфир",
            "evacuation_failed": "Провал эвакуации",
            "first_bite": "Первый укус",
            "the_fall": "Падение",
            "scorched_earth": "Выжженная земля",
            "water_wars": "Войны за воду",
            "beneath_the_sand": "Под песками",
            "fortress_of_madness": "Крепость безумия",
            "ghost_ship": "Корабль-призрак",
            "the_frozen_north": "Ледяной север",
            "jungle_hunt": "Охота в джунглях",
            "sky_pirates": "Небесные пираты",
            "mutant_island": "Остров мутантов",
            "lost_colony": "Потерянная колония",
            "first_contact_desc": "Вторжение пришельцев начинается.",
            "zero_patient_desc": "Начало распространения зомби-вируса.",
            "doomsday_desc": "Начало ядерной войны или падение метеорита.",
            "experiment_desc": "Неудачный научный эксперимент вышел из-под контроля.",
            "awakening_ancients_desc": "Конец криосна Древних - высокоразвитой расы предтеч, обладавшей невероятными технологиями. Их возвращение в изменившийся мир.",
            "call_from_space_desc": "Прибытие первого разведывательного корабля пришельцев на Землю.",
            "infected_city_desc": "Выживание в городе, охваченном зомби-эпидемией.",
            "dead_zone_desc": "Путешествие по радиоактивной пустоши.",
            "anomalous_territory_desc": "Исследование зоны, полной аномалий и мутантов.",
            "underground_world_desc": "Жизнь в заброшенном метро или системе бункеров.",
            "ruins_megapolis_desc": "Исследование разрушенного города, поиск ресурсов.",
            "mutant_lair_desc": "Выживание вблизи колонии опасных мутантов.",
            "forgotten_laboratory_desc": "Поиск и исследование заброшенной научной лаборатории.",
            "fight_with_horde_desc": "Защита поселения от волны обезумевших зараженных.",
            "vault_life_desc": "Повседневная жизнь в подземном бункере, внутренняя борьба.",
            "besieged_city_desc": "Защита последнего оплота цивилизации от внешних угроз.",
            "nomadic_life_desc": "Путешествие в составе группы выживших, поиск нового дома.",
            "pirate_haven_desc": "Жизнь среди пиратов и контрабандистов на обломках кораблей.",
            "wild_tribe_desc": "Выживание в первобытном племени, столкновение с цивилизацией.",
            "trade_caravan_desc": "Охрана и сопровождение торгового каравана через опасные территории.",
            "last_city_desc": "Защита последнего города от рейдеров и мутантов.",
            "gang_war_desc": "Борьба за власть между группировками рейдеров.",
            "resistance_desc": "Подпольная борьба против тоталитарного режима.",
            "bounty_hunters_desc": "Выполнение опасных заказов по поимке преступников.",
            "wasteland_mercenaries_desc": "Выполнение заданий наемников, решение споров между кланами.",
            "battle_for_resources_desc": "Конфликт между поселениями за контроль над ценными ресурсами.",
            "ideology_conflict_desc": "Конфликт между разными фракциями с уникальными взглядами.",
            "cure_search_desc": "Поиски вакцины от зомби-вируса или другого бедствия.",
            "precursors_secret_desc": "Исследование руин и артефактов древней цивилизации.",
            "alien_first_contact_desc": "Дипломатическая миссия или шпионаж.",
            "paradise_search_desc": "Поиск мифического безопасного места, легенды о котором ходят по Пустоши.",
            "mutant_origin_desc": "Исследование причин мутаций и поиск способа их обратить.",
            "vault_secrets_desc": "Раскрытие тайн экспериментов, проводившихся в Убежищах.",
            "star_ark_desc": "Поиск и запуск уцелевшего космического корабля.",
            "cyber_rebels_desc": "Борьба против корпорации, контролирующей кибер-технологии.",
            "machine_uprising_desc": "Война против взбунтовавшихся роботов и ИИ.",
            "mech_wars_desc": "Сражения на гигантских роботах и боевых машинах.",
            "engineer_guild_desc": "Соперничество между группами инженеров за редкие технологии.",
            "cyber_city_desc": "Жизнь в городе, управляемом искусственным интеллектом.",
            "psionic_war_desc": "Конфликт между псиониками и теми, кто их боится.",
            "psionic_school_desc": "Обучение и развитие псионических способностей.",
            "psionic_hunt_desc": "Выслеживание и нейтрализация опасных псиоников.",
            "psy_defense_desc": "Защита от псионических атак и манипуляций.",
            "alien_invasion_desc": "Оборона Земли от полномасштабного вторжения пришельцев.",
            "galactic_diplomacy_desc": "Установление контакта и налаживание отношений с инопланетными расами.",
            "star_patrol_desc": "Патрулирование космического пространства и предотвращение угроз.",
            "war_of_the_worlds_desc": "Участие в масштабном межзвездном конфликте на стороне одной из рас.",
            "artifact_search_desc": "Поиск и исследование артефактов инопланетной расы.",
            "hospital_outbreak_desc": "Вы оказываетесь в ловушке в больнице, кишащей зараженными. Найдите выход, пока не стало слишком поздно.",
            "shopping_mall_siege_desc": "Группа выживших укрылась в торговом центре. Обороняйте его от волн зомби и ищите способ выбраться.",
            "prison_break_desc": "Зомби-вирус проник в тюрьму. Заключенные и охранники вынуждены объединиться, чтобы сбежать.",
            "highrise_trap_desc": "Вы заперты на верхних этажах небоскреба. Зомби наступают, а лифты не работают. Спускайтесь вниз, сражаясь за свою жизнь.",
            "subway_escape_desc": "Спустившись в метро в поисках убежища, вы обнаруживаете, что тоннели заполнены зомби. Прорвитесь к следующей станции.",
            "ground_zero_desc": "Вы стали свидетелем самого начала эпидемии. Город погружается в хаос. Постарайтесь выжить и выбраться из города.",
            "patient_zero_hunt_desc": "Власти ищут нулевого пациента, чтобы остановить распространение вируса. Вы — один из тех, кто может его найти.",
            "the_last_broadcast_desc": "Вы — радиоведущий, вещающий из осажденной студии. Сообщайте выжившим о ситуации в городе, пока это возможно.",
            "evacuation_failed_desc": "Эвакуация провалилась. Вертолеты улетели, оставив вас в окружении зомби. Найдите другой способ спастись.",
            "first_bite_desc": "Вас укусили. У вас есть ограниченное время, чтобы найти лекарство или смириться с неизбежным.",
            "the_fall_desc": "Вы — житель мегаполиса, только что узнавший о зомби-вирусе. Город в огне, паника на улицах, спасите свою семью.",
            "scorched_earth_desc": "После ядерной войны поверхность Земли выжжена и безжизненна. Выживайте в руинах, сражаясь за скудные ресурсы и избегая радиации.",
            "water_wars_desc": "В мире, где чистая вода стала на вес золота, вы должны найти или защитить источник воды для своего поселения.",
            "beneath_the_sand_desc": "Под песками пустыни скрыты руины древней цивилизации, полные сокровищ и опасностей. Исследуйте их, опасаясь песчаных червей и ловушек.",
            "fortress_of_madness_desc": "Лидер поселения сошел с ума и превратил свой город в неприступную крепость. Свергните его, чтобы освободить людей.",
            "ghost_ship_desc": "Вы оказываетесь на борту дрейфующего корабля-призрака. Раскройте тайну его экипажа и найдите способ вернуться на сушу.",
            "the_frozen_north_desc": "Вечная мерзлота сковала северные земли. Выживайте в условиях экстремального холода, сражаясь с мутировавшими животными и другими выжившими.",
            "jungle_hunt_desc": "Опасные джунгли кишат мутантами, ядовитыми растениями и древними ловушками. Проведите экспедицию вглубь джунглей в поисках утерянного артефакта.",
            "sky_pirates_desc": "Станьте воздушным пиратом, бороздящим небеса на дирижабле. Сражайтесь с другими пиратами, торгуйте с летающими городами и исследуйте парящие острова.",
            "mutant_island_desc": "Вас выбросило на остров, населенный племенем мутантов. Подружитесь с ними или попытайтесь сбежать с острова.",
            "lost_colony_desc": "Вы — член экипажа космического корабля, потерпевшего крушение на Земле, охваченной зомби-вирусом. Ищите выживших и постройте новое поселение, отбиваясь от полчищ зараженных.",
            "character-post-apocalyptic-name": "Введите имя персонажа",
            "post-apocalypse-race-message-label": "Описание расы:",
            "post-apocalypse-class-message-label": "Описание класса:",
            "tooltip-post-apocalypse-rpg": "Если слайдер красного цвета - то включено. RPG - игровой режим. В RPG режиме геймплей заключается в прокачке персонажа, а навыки и инвентарь имеют ключевое значение. Если выключен, то игра проходит в режиме Roleplay, который заключается в выстраивании интересной художественной истории, а навыки и инвентарь имеют второстепенное значение.",
            "post-apocalypse-tooltip-noMagic": "Если включено (красный цвет), то гейммастер выстраивает мир без магии и только с реалистичными способностями. Если выключено, то в мире будет магия и нереалистичные способности.",
            "post-apocalypse-nonmagic-mode-name": "В мире нет магии",
            "create-character-post-apocalyptic": "Начать игру",
            "random-character-post-apocalyptic": "Случайный персонаж",
            "load-character-post-apocalyptic": "Загрузить автосейв",
            "load-savefile-post-apocalyptic": "Загрузить файл",
            "my-game-post-apocalyptic": "Свой сеттинг",
            "ai-provider-label4": "Провайдер нейросети",
            "ai-none4-label": "Ничего не выбрано",
            "ai-model-label4": "Модель нейросети",
            "ai-model4": "Введите название модели нейросети",
            "api-key-label4": "Ваш API ключ",
            "api-key-button4": "Показать на 10 секунд",
            "api-key4": "В целях безопасности убедитесь, что используете АПИ ключ с низким лимитом по расходу",
            "additional-settings-label4": "Вы можете посмотреть дополнительные настройки в выпадающей панели справа. Нажмите на кнопку в нижнем правом углу экрана, чтобы увидеть панель настроек.",
            "post-apocalypse-campaign-message-label": "Описание кампании:",
            "post-apocalyptic-game": "Быстрая игра - Постапокалипсис",
            "create-character-post-apocalyptic-label": "Создайте своего персонажа",
            "weight-reduction-label": "Уменьшение веса содержимого",
            "thinking-module-iterations-label": "Количество попыток, которые модуль обдумывания ответов предпримет, чтобы подумать над ответом.",
            "use-literary-prompt-label": "Мастер Игры будет стараться писать художественно",
            "use-erotic-prompt-label": "Разрешить контент 21+ в игре",
            "abort-error-message": "Запрос отменен игроком",
            "common-error-message": "Ошибка при запросе:",
            "cancel-button": "Отменить",
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
            "max-gm-symbols": "20000 por defecto",
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
            "tooltip-race": `La raza influye en la ubicación de inicio, generación de habilidades raciales, trama y bonificaciones iniciales a habilidades y objetos:

Humano: Suerte +2, Comercio +1, Percepción +1, Sabiduría -1, Inteligencia -1, Herramienta Universal

Elfo: Destreza +2, Velocidad +1, Atractivo +1, Fuerza -1, Resistencia -1, Capa Élfica

Enano: Comercio +2, Fuerza +1, Resistencia +1, Destreza -1, Velocidad -1, Cerveza Enana

Orco: Fuerza +3, Resistencia +2, Inteligencia -1, Sabiduría -1, Atractivo -1, Pintura de Batalla Orca

Lagarto: Resistencia +2, Velocidad +1, Atractivo -1, Aceite para Escamas

Vampiro: Percepción +1, Atractivo +1, Destreza +1, Suerte -1, Frasco de Sangre

Golem: Fuerza +3, Resistencia +2, Inteligencia -1, Atractivo -1, Sabiduría -1, Núcleo Elemental

Ángel: Fuerza +1, Atractivo +1, Sabiduría +1, Comercio -1, Halo Angelical

Demonio: Destreza +1, Atractivo +2, Persuasión +1, Sabiduría -1, Suerte -1, Símbolo Demoníaco`,
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
            "status-purposes-label": "Posibles propósitos",
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
            "angel": "Ángel",
            "demon": "Demonio",
            "no-choosed-race": "Elige una raza",

            "female": "Femenino",
            "male": "Masculino",
            "no-choosed-gender": "Elige un género",

            //not interface
            "item_notepad": "Bloc de notas",
            "item_notepad_description": "Bloc de notas",
            "game_starting_description": `¡Bienvenido a Absoluta Legendaria, aventurero! Por favor, revisa la siguiente información...

Este es un juego de rol basado en texto con un LLM. Puedes ingresar tu acción en el cuadro de texto en la parte inferior. La red neuronal procesará tu respuesta y enviará instrucciones que llenarán la interfaz del juego.
Puedes cambiar entre las ventanas de información disponibles en la esquina superior derecha de la pantalla, usando el panel desplegable con botones. Cada objeto, cada NPC en la lista de NPC, cada habilidad y misión, así como la información de estado, son utilizados por el maestro del juego al formar una respuesta. Cuando hagas clic para eliminar un objeto/NPC/misión, etc., esa información desaparecerá de los datos disponibles para el maestro del juego, y él formulará respuestas posteriores sin tenerla en cuenta. Además, el maestro del juego revisa cuidadosamente el historial de tus mensajes con él, así como los últimos cinco mensajes del "Registro de Cálculo de Acciones".

Todas las listas de las ventanas de información están limitadas a 30 elementos, excepto los objetos del inventario. Esto se hace para no sobrecargar al maestro del juego con información, ya que podría llegar un momento en que simplemente no pueda crear una respuesta. Puedes bloquear cualquier elemento de la lista en la ventana de información haciendo clic en el botón de "candado", protegiéndolo así de la eliminación.

Si el maestro del juego aún no puede formular una respuesta, es posible que el contexto esté sobrecargado de información. Intenta limpiar algunos de los datos disponibles. Comienza eliminando la mitad del chat y ve si esto ayuda al maestro del juego a formular una respuesta.

Por favor, considera apoyarme (Lottarend, el autor del juego). Los enlaces para hacerlo se proporcionan en el siguiente mensaje.

¡Disfruta del juego!`,
            "game_starting_donate": "Agradecer al autor de Legendarica Absolute :\n\n Criptomoneda: TSH1v85VbFo6b8gzb2xKcHy7Lk5NYLqVYh (USDT TRC20)\n\nOtra forma: https://www.donationalerts.com/r/lottarend",
            "game_starting_discord": "En Discord puedes encontrar la última versión y discutir el juego https://discord.gg/pTXcwJuH9h",
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
            "Angelic_halo": "Aureola Angélica",
            "Demonic_symbol": "Símbolo Demoníaco",
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
            "status-effect-none-label": "Ninguno",
            "persuasion-label": "Persuasión",
            "start-prs": "Persuasión",
            "rebirth-in-another-world": "Renacimiento en Otro Mundo",
            "being-summoned-to-another-world": "Ser Convocado a Otro Mundo",
            "reincarnation": "Reencarnación",
            "demon-invasion": "Invasión Demoníaca",
            "the-end-of-the-world": "El Fin del Mundo",
            "apocalypse": "Apocalipsis",
            "quest-info-questGiver-label": "Dador de la Misión",
            "quest-info-questBackground-label": "Antecedentes:",
            "quest-info-description-label": "Descripción:",
            "use-thinking-module-label": "Agregar un módulo de reflexión de respuestas (desactivar para ahorrar tokens). Teóricamente hace la IA más inteligente",
            "log-thinking-button-label": "Registro de Pensamientos",
            "persuasion": "Persuasión",
            "human_desc": "Persona del mundo moderno que vive en el siglo XXI",
            "superhuman_desc": "Un superhumano es una persona con superpoderes que surgen de la fuerza de su mente, habiendo experimentado cambios evolutivos",
            "infected_desc": "Persona que ha sido infectada con el virus zombi",
            "ratman_desc": "Descendiente de ratas comunes que mutaron bajo la influencia de la radiación y adquirieron inteligencia. Desde lejos, se parece a un humano grotesco",
            "ghoul_desc": "Persona que alguna vez fue infectada con el virus zombi. Logró mantener la cordura a pesar de los horribles cambios en su propio cuerpo",
            "mutant_desc": "Persona cuyo cuerpo ha sufrido varias mutaciones debido a la exposición a la radiación",
            "supermutant_desc": "Persona cuyo cuerpo se ha vuelto masivo y fuerte debido a la exposición a la radiación, pero ha sufrido cambios repulsivos",
            "cyborg_desc": "Humano con implantes cibernéticos integrados en su carne",
            "android_desc": "Robot cubierto con piel sintética y que posee órganos similares a los humanos",
            "robot_desc": "Máquina de acero equipada con inteligencia artificial avanzada",
            "gray_desc": "Extraterrestre con piel gris, cabeza grande y ojos negros, que ha llegado a la Tierra desde un planeta lejano",
            "alien_desc": "Uno de los extraterrestres que llegaron a la Tierra desde un planeta lejano",
            "hybrid_desc": "Híbrido de un extraterrestre y un humano. Posee rasgos de ambas razas",
            "ancient_desc": "Representante de una antigua raza de precursores que pasó muchos miles de años en criosueño. El mundo a su alrededor ha cambiado increíblemente durante su letargo",
            "survival_kit": `Kit de supervivencia`,
            "psionic_headband": `Diadema Amplificadora Psiónica`,
            "adrenaline_syringe": `Jeringa de adrenalina del infectado`,
            "grappling_hook": `Gancho de escalada del escavador`,
            "bone_blade": `Espada de hueso irradiada del ghoul`,
            "mutant_serum": `Suero mutante inestable`,
            "crude_bonehammer": `Martillo de hueso rudimentario del supermutante`,
            "hacking_device": `Dispositivo de hackeo integrado`,
            "skin_repair_paste": `Pasta de reparación de piel sintética`,
            "EMP_Generator": `Generador EMP portátil`,
            "communication_implant": `Implante de comunicación telepática`,
            "cloaking_device": `Dispositivo de camuflagem alienígena`,
            "symbiotic_implant": `Implante simbiótico`,
            "ancient_artifact": `Artefacto de los antiguos precursores`,
            "survival_kit": `Kit de supervivencia`,
            "hacker": "Hacker",
            "scout": "Explorador",
            "bounty_hunter": "Cazador de Recompensas",
            "survivor": "Superviviente",
            "raider": "Asaltante",
            "bandit": "Bandido",
            "wanderer": "Errante",
            "veteran": "Veterano",
            "mercenary": "Mercenario",
            "stalker": "Acechador",
            "citizen": "Ciudadano",
            "vault_dweller": "Habitante del Refugio",
            "savage": "Salvaje",
            "soldier": "Soldado",
            "engineer": "Ingeniero",
            "medic": "Médico",
            "sniper": "Francotirador",
            "virologist": "Virologista",
            "biotechnician": "Biotecnólogo",
            "reborn": "Renacido",
            "psionic": "Psiónico",
            "telekinetic": "Telequinético",
            "telepath": "Telepata",
            "pyromancer": "Pirocántico",
            "cryomancer": "Criomántico",
            "mechanized_soldier": "Soldado Mecanizado",
            "mechanical_guardian": "Guardia Mecánico",
            "cybernetic_assassin": "Asesino Cibernético",
            "cybernetic_spy": "Espía Cibernético",
            "precursor_agent": "Agente Precursor",
            "precursor_scientist": "Científico Precursor",
            "precursor_soldier": "Soldado Precursor",
            "xenomant": "Xenomántico",
            "alien_scout": "Explorador Alienígena",
            "space_architect": "Arquitecto Espacial",
            "galactic_explorer": "Explorador Galáctico",
            "alien_soldier": "Soldado Alienígena",
            "hacker_descr": "Especialista en hackear sistemas y redes informáticas. Utiliza sus habilidades para acceder a información y controlar dispositivos.",
            "scout_descr": "Especialista en reconocimiento ágil y sigiloso, especializado en infiltración, recolección de información y eliminación discreta de objetivos.",
            "bounty_hunter_descr": "Cazador de recompensas experimentado que rastrea y captura criminales por recompensas. Tirador preciso y maestro en combate cuerpo a cuerpo.",
            "survivor_descr": "Superviviente experimentado adaptado a las duras condiciones del mundo post-apocalíptico. Hábil para encontrar recursos, construir refugios y defenderse de peligros.",
            "raider_descr": "Marañón brutal que vive de saqueos y violencia. Luchador fuerte y agresivo, sin piedad.",
            "bandit_descr": "Criminal astuto y engañoso que se dedica a robos y asaltos. Maneja hábilmente palancas y ganzúas.",
            "wanderer_descr": "Vagabundo solitario que viaja por el mundo post-apocalíptico en busca de una vida mejor. Resistente e ingenioso, capaz de sobrevivir en cualquier condición.",
            "veteran_descr": "Soldado experimentado que ha pasado por numerosas batallas. Posee excelente entrenamiento de combate, disciplinado y frío.",
            "mercenary_descr": "Mercenario que lucha por dinero. Combatiente experimentado competente con diversas armas y tácticas.",
            "stalker_descr": "Guía experimentado a través de zonas anómalas. Sabe cómo evitar peligros y encontrar artefactos valiosos.",
            "citizen_descr": "Residente de una de las pocas ciudades sobrevivientes. Posee habilidades y conocimientos básicos necesarios para vivir en sociedad.",
            "vault_dweller_descr": "Marginado del Refugio, adaptado a la vida en un búnker subterráneo. Posee habilidades técnicas y conocimientos del mundo pre-guerra.",
            "savage_descr": "Salvaje que vive lejos de la civilización. Cazador fuerte y ágil que confía en instintos primitivos y armas.",
            "soldier_descr": "Militar profesional entrenado para luchar en cualquier condición. Tirador disciplinado y preciso.",
            "engineer_descr": "Especialista técnico capaz de crear y reparar diversos dispositivos. Aliado valioso en el mundo post-apocalíptico.",
            "medic_descr": "Doctor de campo capaz de tratar heridas y enfermedades. Miembro indispensable de cualquier grupo de supervivientes.",
            "sniper_descr": "Tirador preciso capaz de eliminar objetivos desde largas distancias. Combatiente paciente y observador.",
            "virologist_descr": "Científico especializado en el estudio de virus. Desarrolla vacunas y medicamentos antivirales.",
            "biotechnician_descr": "Científico que trabaja con organismos vivos. Capaz de crear modificaciones genéticas y cultivar tejidos artificiales.",
            "reborn_descr": "Renacido es un individuo infectado que ha superado parcialmente el virus y ha mantenido su cordura. Son más fuertes y resistentes que las personas comunes y pueden mutar pero continúan pudriéndose.",
            "psionic_descr": "Individuo con habilidades psiónicas. Puede influir en las mentes de otros seres y controlar la energía psiónica.",
            "telekinetic_descr": "Psiónico con habilidades de telequinesis. Puede mover objetos con el poder del pensamiento.",
            "telepath_descr": "Psiónico con habilidades de telepatía. Puede leer mentes y comunicarse con otros seres a distancia.",
            "pyromancer_descr": "Psiónico con habilidades de piroquinesis. Puede controlar el fuego con el poder del pensamiento.",
            "cryomancer_descr": "Psiónico con habilidades de criokinesis. Puede controlar el frío y crear hielo.",
            "mechanized_soldier_descr": "Soldado fuertemente armado en un exoesqueleto. Posee alta potencia de fuego y protección.",
            "mechanical_guardian_descr": "Robot guardián programado para proteger un territorio u objeto. Equipado con sistemas avanzados de vigilancia y armas poderosas.",
            "cybernetic_assassin_descr": "Asesino cibernético modificado para infiltración sigilosa y eliminación de objetivos. Equipado con armas integradas y sensores avanzados.",
            "cybernetic_spy_descr": "Espía cibernético modificado para recolección de información y sabotajes. Equipado con un generador de invisibilidad y proyector holográfico.",
            "precursor_agent_descr": "Agente Precursor que posee tecnologías avanzadas y conocimientos. Especializado en reconocimiento, sabotajes y eliminación de amenazas.",
            "precursor_scientist_descr": "Científico Precursor con amplio conocimiento en diversas áreas científicas. Capaz de crear y usar dispositivos avanzados.",
            "precursor_soldier_descr": "Soldado Precursor equipado con armas y armaduras de alta tecnología. Entrenado para combatir en cualquier condición.",
            "xenomant_descr": "Xenomántico es un especialista experto en artefactos misteriosos y tecnologías de una raza alienígena. Puede usarlos para protección, ataque y exploración.",
            "alien_scout_descr": "Explorador alienígena especializado en explorar nuevos mundos y recolectar información. Equipado con tecnologías avanzadas de camuflaje y escaneo.",
            "space_architect_descr": "Arquitecto Espacial es un alienígena capaz de alterar el espacio y la materia con el poder del pensamiento. Puede crear y destruir objetos, así como construir bases y estructuras.",
            "galactic_explorer_descr": "Explorador Galáctico es un alienígena dedicado a estudiar el espacio y buscar nuevas formas de vida. Posee amplio conocimiento y tecnologías avanzadas.",
            "alien_soldier_descr": "Soldado alienígena entrenado para luchar usando armamento y tecnologías avanzadas. Combatiente disciplinado y efectivo.",
            "survival_kit": `Kit de supervivencia`,
            "hacker_1": "Interfaz de Hackeo",
            "hacker_2": "KPK",
            "hacker_3": "EMP-Granada",
            "hacker_4": "Escáner de Red",
            "scout_1": "Traje de Sigilo",
            "scout_2": "Juego de ganzúas",
            "scout_3": "Mascarilla de Gas",
            "scout_4": "Pistola Silenciada",
            "bounty_hunter_1": "Dos pistolas",
            "bounty_hunter_2": "Dispositivo de Seguimiento de Objetivos",
            "bounty_hunter_3": "Red de Energía",
            "bounty_hunter_4": "Cuchillo de Combate",
            "survivor_1": "Daga Barata",
            "survivor_2": "Armadura Casera",
            "survivor_3": "Tienda de Camuflaje",
            "survivor_4": "Cuchillo de Caza",
            "raider_1": "Rifle Casero",
            "raider_2": "Porra con Pinchos",
            "raider_3": "Frasco con Gasolina",
            "raider_4": "Encendedor Favorito",
            "bandit_1": "Piedra de Barra Pesada",
            "bandit_2": "Máscara de Bandido",
            "bandit_3": "Chaleco de Cuero",
            "bandit_4": "Juego de ganzúas",
            "wanderer_1": "Mochila Universal",
            "wanderer_2": "Tienda Compacta",
            "wanderer_3": "Ballesta Deportiva",
            "wanderer_4": "Cuchillo Multifuncional",
            "veteran_1": "Pistola de Recompensa",
            "veteran_2": "Chaleco Antibalas Viejo",
            "veteran_3": "Cinturón Táctico",
            "veteran_4": "Kit Médico",
            "mercenary_1": "Pistola",
            "mercenary_2": "Rifle de Francotirador",
            "mercenary_3": "Casco de Combate",
            "mercenary_4": "Dinamita",
            "stalker_1": "Detector de Anomalías",
            "stalker_2": "Mascarilla de Gas Modificada",
            "stalker_3": "Rifle de Asalto",
            "stalker_4": "Cuerda con Gancho de Gato",
            "citizen_1": "Documentos de Ciudadanía",
            "citizen_2": "Teléfono",
            "citizen_3": "Bolsa de Suministros",
            "citizen_4": "Cuchillo de Utilidad",
            "vault_dweller_1": "Herramienta Multifuncional",
            "vault_dweller_2": "Módulo de Agua",
            "vault_dweller_3": "Pistola Modificada",
            "vault_dweller_4": "Módulo de Comunicación del Refugio",
            "savage_1": "Hacha de Hueso",
            "savage_2": "Amuleto de Hueso",
            "savage_3": "Trampa para Caza",
            "savage_4": "Arco Casero",
            "soldier_1": "Rifle Automático",
            "soldier_2": "Municiones",
            "soldier_3": "Granada",
            "soldier_4": "Chaleco Antibalas",
            "engineer_1": "Juego de Herramientas",
            "engineer_2": "Drone Volador",
            "engineer_3": "Aparato de Soldadura",
            "engineer_4": "Escáner de Planos",
            "medic_1": "Kit de Primeros Auxilios",
            "medic_2": "Analgésico",
            "medic_3": "Vendas",
            "medic_4": "Desfibrilador Portátil",
            "sniper_1": "Rifle de Francotirador",
            "sniper_2": "Binoculares",
            "sniper_3": "Capa de Camuflaje",
            "sniper_4": "Cuchillo de Combate",
            "virologist_1": "Analizador Biológico",
            "virologist_2": "Medicamentos Antivirales",
            "virologist_3": "Estación de Investigación de Virus",
            "virologist_4": "Muestras Infectadas",
            "biotechnician_1": "Modificador Genético",
            "biotechnician_2": "Biosintetizador",
            "biotechnician_3": "Kit de Laboratorio",
            "biotechnician_4": "Suero Experimental",
            "reborn_1": "Suero Anti-Descomposición del Renacido",
            "reborn_2": "Suero de Mejora",
            "reborn_3": "Suero de Mutación Controlada",
            "reborn_4": "Suero de Mutación Incontrolada",
            "psionic_1": "Amplificador Mental",
            "psionic_2": "Dispositivo Telepático",
            "psionic_3": "Cristal Focalizador",
            "psionic_4": "Amplificador Psi",
            "telekinetic_1": "Aro de Concentración",
            "telekinetic_2": "Mini-Plataforma Flotante",
            "telekinetic_3": "Guantes Antigravedad",
            "telekinetic_4": "Cristal de Focalización",
            "telepath_1": "Anillo Focalizador",
            "telepath_2": "Aro de Lectura de Pensamientos",
            "telepath_3": "Amuleto de Comunicación Mental",
            "telepath_4": "Báculo de Control de Infectados",
            "pyromancer_1": "Cóctel Molotov",
            "pyromancer_2": "Báculo Pirolítico",
            "pyromancer_3": "Suero de Mutación Piro",
            "pyromancer_4": "Traje Resistente al Fuego",
            "cryomancer_1": "Traje Térmico Polar",
            "cryomancer_2": "Termo con Nitrógeno Líquido",
            "cryomancer_3": "Suero de Mutación Crio",
            "cryomancer_4": "Batería Crio",
            "mechanized_soldier_1": "Exoesqueleto",
            "mechanized_soldier_2": "Escopeta Potente",
            "mechanized_soldier_3": "Escudo de Energía",
            "mechanized_soldier_4": "Kit de Reparación",
            "mechanical_guardian_1": "Módulo de Vigilancia Avanzado",
            "mechanical_guardian_2": "Módulo de Reparación",
            "mechanical_guardian_3": "Panel Protector",
            "mechanical_guardian_4": "Ametralladora Integrada",
            "cybernetic_assassin_1": "Hoja Oculta",
            "cybernetic_assassin_2": "Cóctel de Aceleración Nano",
            "cybernetic_assassin_3": "Sistema de Supresión de Sonido",
            "cybernetic_assassin_4": "Sensores Ópticos de Visión Nocturna",
            "cybernetic_spy_1": "Generador de Invisibilidad",
            "cybernetic_spy_2": "Proyector Holográfico",
            "cybernetic_spy_3": "Ganzúa Cibernética",
            "cybernetic_spy_4": "Látigo Nano Explosivo",
            "precursor_agent_1": "Pistola de Plasma",
            "precursor_agent_2": "Dispositivo de Teleportación",
            "precursor_agent_3": "Kit de Equipamiento de Espía",
            "precursor_agent_4": "Proyector Holográfico Portátil",
            "precursor_scientist_1": "Escáner Universal",
            "precursor_scientist_2": "Estación de Síntesis Molecular",
            "precursor_scientist_3": "Escudo de Energía",
            "precursor_scientist_4": "Cortador de Plasma",
            "precursor_soldier_1": "Carabina Láser de Energía",
            "precursor_soldier_2": "Escudo de Fuerza Precursor",
            "precursor_soldier_3": "Potenciador Cibernético",
            "precursor_soldier_4": "Generador de Gravedad",
            "xenomant_1": "Artefacto Alienígena",
            "xenomant_2": "Teletransportador Portátil",
            "xenomant_3": "Escudo Holográfico",
            "xenomant_4": "Espada de Energía",
            "alien_scout_1": "Botas Gravitacionales",
            "alien_scout_2": "Teletransportador Portátil",
            "alien_scout_3": "Escáner de Objetos Ocultos",
            "alien_scout_4": "Pistola Láser",
            "space_architect_1": "Proyector de Gravedad",
            "space_architect_2": "Traje Espacial Materializador",
            "space_architect_3": "Mapa Espacial",
            "space_architect_4": "Estabilizador Planetario",
            "galactic_explorer_1": "Escáner Multiespectral",
            "galactic_explorer_2": "Traductor Xeno",
            "galactic_explorer_3": "Módulo de Bio-Laboratorio",
            "galactic_explorer_4": "Asistente Drone Personal",
            "alien_soldier_1": "Carabina de Riel Magnético",
            "alien_soldier_2": "Escudo Nanotecnológico",
            "alien_soldier_3": "Sistema Biónico Integrado",
            "alien_soldier_4": "Compañero Holográfico Táctico",
            "superhuman": "Superhumano",
            "infected": "Infectado",
            "ratman": "Ratman",
            "ghoul": "Ghoul",
            "mutant": "Mutante",
            "supermutant": "Super-Mutante",
            "cyborg": "Ciborg",
            "android": "Androide",
            "robot": "Robot",
            "gray": "Gris",
            "alien": "Alienígena",
            "hybrid": "Híbrido",
            "ancient": "Antiguo",
            "total-weight-label": "Peso Total (kg):",
            "tooltip-max-weight": "Calculado por el GM al final de cada turno. Peso máximo = (Fuerza + Resistencia) * 3 + 10",
            "max-weight-label": "Peso Máximo (kg):",
            "use-weight-control-label": "Usar peso en el juego",
            "maximum-weight-exceeded-label": "¡Peso máximo del personaje excedido! Los objetos especificados han sido movidos al carrito: ",
            "statsGroup-weight-button-label": "Peso",
            "tooltip-inventory-basket": "Los objetos eliminados del inventario se colocan aquí. Se limpia automáticamente al final de cada turno. Puedes restaurarlos antes de que desaparezcan.",
            "inventory-basket-button-label": "Cesta (Inventario)",
            "inventory-restore": "Restaurar",
            "tooltip-critical-weight": "Al exceder el peso máximo, el personaje aún puede recibir objetos en el inventario durante algún tiempo, pero se sobrecarga. Un personaje sobrecargado pierde energía rápidamente. Después de exceder el peso crítico, el personaje ya no puede llevar nuevos objetos.",
            "critical-weight-label": "Peso Crítico (kg):",
            "weight-status-label": "Estado:",
            "weight-status-value-normal": "Normal",
            "weight-status-value-bad": "Sobrecargado",
            "first_contact": "Primer Contacto",
            "zero_patient": "Paciente Cero",
            "doomsday": "Día del Juicio Final",
            "experiment": "Experimento",
            "awakening_ancients": "Despertar de los Antiguos",
            "call_from_space": "Llamada del Espacio",
            "infected_city": "Ciudad Infectada",
            "dead_zone": "Zona Muerta",
            "anomalous_territory": "Territorio Anómalo",
            "underground_world": "Mundo Subterráneo",
            "ruins_megapolis": "Ruinas de la Megapolis",
            "mutant_lair": "Guarida de Mutantes",
            "forgotten_laboratory": "Laboratorio Olvidado",
            "fight_with_horde": "Lucha contra la Horda",
            "vault_life": "Vida en el Refugio",
            "besieged_city": "Ciudad Sitio",
            "nomadic_life": "Vida Nómada",
            "pirate_haven": "Refugio Pirata",
            "wild_tribe": "Tribu Salvaje",
            "trade_caravan": "Caravana Comercial",
            "last_city": "Última Ciudad",
            "gang_war": "Guerra de Pandillas",
            "resistance": "Resistencia",
            "bounty_hunters": "Cazadores de Recompensas",
            "wasteland_mercenaries": "Mercenarios de la Tundra",
            "battle_for_resources": "Batalla por Recursos",
            "ideology_conflict": "Conflicto Ideológico",
            "cure_search": "Búsqueda de Cura",
            "precursors_secret": "Secreto de los Precursores",
            "alien_first_contact": "Primer Contacto con Extraterrestres",
            "paradise_search": "Búsqueda del Paraíso",
            "mutant_origin": "Origen de los Mutantes",
            "vault_secrets": "Secretos del Refugio",
            "star_ark": "Arca Estelar",
            "cyber_rebels": "Rebeldes Cibernéticos",
            "machine_uprising": "Alzamiento de Máquinas",
            "mech_wars": "Guerras Mecánicas",
            "engineer_guild": "Gremio de Ingenieros",
            "cyber_city": "Ciudad Cibernética",
            "psionic_war": "Guerra Psiónica",
            "psionic_school": "Escuela Psiónica",
            "psionic_hunt": "Caza Psiónica",
            "psy_defense": "Defensa Psiónica",
            "alien_invasion": "Invasión Alienígena",
            "galactic_diplomacy": "Diplomacia Galáctica",
            "star_patrol": "Patrulla Estelar",
            "war_of_the_worlds": "Guerra de los Mundos",
            "artifact_search": "Búsqueda de Artefactos",
            "hospital_outbreak": "Pobeg de Hospital",
            "shopping_mall_siege": "Asedio al Centro Comercial",
            "prison_break": "Fuga de la Prisión",
            "highrise_trap": "Trampa en Rascacielos",
            "subway_escape": "Escape del Metro",
            "ground_zero": "Punto Cero",
            "patient_zero_hunt": "Caza del Paciente Cero",
            "the_last_broadcast": "La Última Transmisión",
            "evacuation_failed": "Evacuación Fallida",
            "first_bite": "Primer Mordisco",
            "the_fall": "La Caída",
            "scorched_earth": "Tierra Quemada",
            "water_wars": "Guerras por el Agua",
            "beneath_the_sand": "Bajo las Arenas",
            "fortress_of_madness": "Fortaleza de la Locura",
            "ghost_ship": "Barco Fantasma",
            "the_frozen_north": "El Norte Helado",
            "jungle_hunt": "Caza en la Jungla",
            "sky_pirates": "Piratas del Cielo",
            "mutant_island": "Isla de Mutantes",
            "lost_colony": "Colonia Perdida",
            "first_contact_desc": "La invasión alienígena comienza.",
            "zero_patient_desc": "Empieza la propagación del virus zombi.",
            "doomsday_desc": "El inicio de una guerra nuclear o el impacto de un meteorito.",
            "experiment_desc": "Un experimento científico fallido se ha descontrolado.",
            "awakening_ancients_desc": "El fin de la criosueño de los Antiguos, una raza precursora muy avanzada. Su regreso a un mundo cambiado.",
            "call_from_space_desc": "La llegada de la primera nave de reconocimiento alienígena a la Tierra.",
            "infected_city_desc": "Sobrevive en una ciudad invadida por la epidemia zombi.",
            "dead_zone_desc": "Viaja a través de un páramo radiactivo.",
            "anomalous_territory_desc": "Explora una zona repleta de anomalías y mutantes.",
            "underground_world_desc": "Vida en un metro abandonado o en sistemas de búnkeres.",
            "ruins_megapolis_desc": "Explora las ruinas de una megalópolis en busca de recursos.",
            "mutant_lair_desc": "Sobrevive cerca de una colonia de mutantes peligrosos.",
            "forgotten_laboratory_desc": "Encuentra e investiga un laboratorio científico abandonado.",
            "fight_with_horde_desc": "Defiende un asentamiento de una oleada de infectados enloquecidos.",
            "vault_life_desc": "La vida cotidiana en un búnker subterráneo, con conflictos internos.",
            "besieged_city_desc": "Defiende el último bastión de la civilización de amenazas externas.",
            "nomadic_life_desc": "Viaja con un grupo de supervivientes en busca de un nuevo hogar.",
            "pirate_haven_desc": "Vive entre piratas y contrabandistas en los restos de barcos.",
            "wild_tribe_desc": "Sobrevive en una tribu primitiva, chocando con la civilización.",
            "trade_caravan_desc": "Protege y escolta una caravana comercial a través de territorios peligrosos.",
            "last_city_desc": "Defiende la última ciudad de saqueadores y mutantes.",
            "gang_war_desc": "Lucha por el poder entre bandas de saqueadores.",
            "resistance_desc": "Lucha clandestina contra un régimen totalitario.",
            "bounty_hunters_desc": "Acepta peligrosos contratos para capturar criminales.",
            "wasteland_mercenaries_desc": "Cumple encargos de mercenarios, resolviendo disputas entre clanes.",
            "battle_for_resources_desc": "Conflicto entre asentamientos por el control de recursos valiosos.",
            "ideology_conflict_desc": "Enfrentamiento entre facciones con ideologías únicas.",
            "cure_search_desc": "Búsqueda de una vacuna contra el virus zombi u otra catástrofe.",
            "precursors_secret_desc": "Investiga ruinas y artefactos de una civilización antigua.",
            "alien_first_contact_desc": "Misión diplomática o espionaje con extraterrestres.",
            "paradise_search_desc": "Búsqueda de un refugio mítico del que se rumorea en el Yermo.",
            "mutant_origin_desc": "Investiga las causas de las mutaciones y la forma de revertirlas.",
            "vault_secrets_desc": "Revela los experimentos secretos realizados en los Refugios.",
            "star_ark_desc": "Localiza y lanza una nave espacial que aún funcione.",
            "cyber_rebels_desc": "Lucha contra la corporación que controla las ciber-tecnologías.",
            "machine_uprising_desc": "Guerra contra robots e IA rebeldes.",
            "mech_wars_desc": "Batallas con robots gigantes y máquinas de guerra.",
            "engineer_guild_desc": "Rivalidad entre grupos de ingenieros por tecnologías raras.",
            "cyber_city_desc": "Vida en una ciudad gobernada por una inteligencia artificial.",
            "psionic_war_desc": "Conflicto entre psiónicos y quienes los temen.",
            "psionic_school_desc": "Entrenamiento y desarrollo de habilidades psiónicas.",
            "psionic_hunt_desc": "Rastreo y neutralización de psiónicos peligrosos.",
            "psy_defense_desc": "Defensa contra ataques y manipulaciones psiónicas.",
            "alien_invasion_desc": "Defiende la Tierra de una invasión alienígena a gran escala.",
            "galactic_diplomacy_desc": "Establece contacto y relaciones con razas extraterrestres.",
            "star_patrol_desc": "Patrulla el espacio para prevenir amenazas.",
            "war_of_the_worlds_desc": "Participa en un conflicto interestelar apoyando a una de las razas.",
            "artifact_search_desc": "Busca y estudia artefactos de una civilización alienígena.",
            "hospital_outbreak_desc": "Estás atrapado en un hospital lleno de infectados. Encuentra una salida antes de que sea demasiado tarde.",
            "shopping_mall_siege_desc": "Un grupo de supervivientes se atrincheró en un centro comercial. Defiéndelo de oleadas de zombis y busca la forma de salir.",
            "prison_break_desc": "El virus zombi llegó a la prisión. Presos y guardias deben unirse para escapar.",
            "highrise_trap_desc": "Estás atrapado en los pisos superiores de un rascacielos. Los zombis se acercan y los ascensores no funcionan. Desciende luchando por tu vida.",
            "subway_escape_desc": "Te refugiaste en el metro, pero los túneles están llenos de zombis. Ábrete paso hasta la siguiente estación.",
            "ground_zero_desc": "Eres testigo del inicio de la epidemia. La ciudad cae en el caos. Intenta sobrevivir y salir de ella.",
            "patient_zero_hunt_desc": "Las autoridades buscan al paciente cero para frenar el virus. Tú eres uno de los que pueden encontrarlo.",
            "the_last_broadcast_desc": "Eres un locutor de radio emitiendo desde un estudio asediado. Mantén informados a los supervivientes todo el tiempo posible.",
            "evacuation_failed_desc": "La evacuación fracasó. Los helicópteros se fueron, dejándote rodeado de zombis. Encuentra otra salida.",
            "first_bite_desc": "Te han mordido. Tienes poco tiempo para hallar una cura o aceptar tu destino.",
            "the_fall_desc": "Eres un habitante de la metrópolis que acaba de enterarse del virus zombi. La ciudad arde, las calles están en pánico: salva a tu familia.",
            "scorched_earth_desc": "Tras una guerra nuclear, la superficie de la Tierra está devastada y estéril. Sobrevive en las ruinas luchando por los escasos recursos y evitando la radiación.",
            "water_wars_desc": "En un mundo donde el agua potable vale oro, debes hallar o proteger una fuente para tu asentamiento.",
            "beneath_the_sand_desc": "Bajo las arenas del desierto yacen ruinas de una antigua civilización, llenas de tesoros y peligros. Explóralas con cuidado ante gusanos gigantes y trampas.",
            "fortress_of_madness_desc": "El líder de un asentamiento se volvió loco y convirtió su ciudad en una fortaleza inexpugnable. Derríbalo para liberar a la gente.",
            "ghost_ship_desc": "Despiertas en un barco fantasma a la deriva. Descubre el misterio de su tripulación y encuentra el camino de regreso a tierra firme.",
            "the_frozen_north_desc": "El hielo eterno domina las tierras del norte. Sobrevive al frío extremo, a animales mutados y a otros supervivientes desesperados.",
            "jungle_hunt_desc": "Una jungla peligrosa llena de mutantes, plantas venenosas y trampas antiguas. Conduce una expedición en busca de un artefacto perdido.",
            "sky_pirates_desc": "Conviértete en un pirata del aire, surcando los cielos en un dirigible. Lucha contra otros piratas, comercia con ciudades flotantes y explora islas suspendidas.",
            "mutant_island_desc": "Has naufragado en una isla habitada por una tribu de mutantes. Hazte amigo de ellos o intenta escapar.",
            "lost_colony_desc": "Eres parte de la tripulación de una nave espacial que se estrelló en una Tierra invadida por zombis. Busca supervivientes y construye un nuevo asentamiento mientras te defiendes de hordas de infectados.",
            "character-post-apocalyptic-name": "Ingrese el nombre del personaje",
            "post-apocalypse-race-message-label": "Descripción de la raza:",
            "post-apocalypse-class-message-label": "Descripción de la clase:",
            "tooltip-post-apocalypse-rpg": "Si el control deslizante es de color rojo, está habilitado. RPG es el modo de juego. En el modo RPG, la jugabilidad consiste en el desarrollo del personaje, y las habilidades y el inventario son cruciales. Si está deshabilitado, el juego se desarrolla en modo Roleplay, que se centra en crear una narrativa interesante, y las habilidades y el inventario son secundarios.",
            "post-apocalypse-tooltip-noMagic": "Si está habilitado (color rojo), el maestro de juego crea un mundo sin magia y solo con habilidades realistas. Si está deshabilitado, el mundo tendrá magia y habilidades no realistas.",
            "post-apocalypse-nonmagic-mode-name": "No hay magia en el mundo",
            "create-character-post-apocalyptic": "Iniciar juego",
            "random-character-post-apocalyptic": "Personaje aleatorio",
            "load-character-post-apocalyptic": "Cargar guardado automático",
            "load-savefile-post-apocalyptic": "Cargar archivo",
            "my-game-post-apocalyptic": "Mi configuración",
            "ai-provider-label4": "Proveedor de IA",
            "ai-none4-label": "Nada seleccionado",
            "ai-model-label4": "Modelo de IA",
            "ai-model4": "Ingrese el nombre del modelo de IA",
            "api-key-label4": "Tu clave API",
            "api-key-button4": "Mostrar por 10 segundos",
            "api-key4": "Por razones de seguridad, asegúrese de usar una clave API con un límite de uso bajo",
            "additional-settings-label4": "Puede ver configuraciones adicionales en el panel desplegable a la derecha. Haga clic en el botón en la esquina inferior derecha de la pantalla para acceder al panel de configuración.",
            "post-apocalypse-campaign-message-label": "Descripción de la campaña:",
            "post-apocalyptic-game": "Juego Rápido - Post-Apocalipsis",
            "create-character-post-apocalyptic-label": "Crea tu personaje",
            "weight-reduction-label": "Reducción del Peso del Contenido",
            "thinking-module-iterations-label": "Cantidad de intentos que el módulo de razonamiento de respuestas realizará para reflexionar sobre la respuesta.",
            "use-literary-prompt-label": "El Maestro del Juego se esforzará por un estilo literario",
            "use-erotic-prompt-label": "Permitir contenido para mayores de 21 años en el juego",
            "abort-error-message": "Solicitud cancelada por el jugador",
            "common-error-message": "Error durante la solicitud:",
            "cancel-button": "Cancelar",
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
            "max-gm-symbols": "20000 por padrão",
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

Elfo: Destreza +2, Velocidade +1, Atração +1, Força -1, Resistência -1, Manto Élfico

Anão: Comércio +2, Força +1, Resistência +1, Destreza -1, Velocidade -1, Cerveja Anã

Orc: Força +3, Resistência +2, Inteligência -1, Sabedoria -1, Atração -1, Pintura de Batalha Orca

Lagarto: Resistência +2, Velocidade +1, Atração -1, Óleo para Escamas

Vampiro: Percepção +1, Atração +1, Destreza +1, Sorte -1, Frasco de Sangue

Golem: Força +3, Resistência +2, Inteligência -1, Atração -1, Sabedoria -1, Núcleo Elemental

Anjo: Força +1, Atração +1, Sabedoria +1, Comércio -1, Auréola Angelical

Demônio: Destreza +1, Atração +2, Persuasão +1, Sabedoria -1, Sorte -1, Símbolo Demoníaco`,
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
            "status-purposes-label": "Possíveis finalidades",
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
            "angel": "Anjo",
            "demon": "Demônio",
            "no-choosed-race": "Escolha uma raça",

            "female": "Feminino",
            "male": "Masculino",
            "no-choosed-gender": "Escolha um gênero",

            //not interface
            "item_notepad": "Bloco de notas",
            "item_notepad_description": "Bloco de notas",
            "game_starting_description": `Bem-vindo à Absoluta Legendaria, aventureiro! Por favor, revise as seguintes informações...

Este é um jogo de RPG baseado em texto com LLM. Você pode inserir sua ação na caixa de texto na parte inferior. A rede neural processará sua resposta e enviará instruções que preencherão a interface do jogo.
Você pode alternar entre as janelas de informações disponíveis no canto superior direito da tela, usando o painel suspenso com botões. Cada item, cada NPC na lista de NPC, cada habilidade e missão, bem como as informações de status — tudo isso é usado pelo mestre do jogo ao formar uma resposta. Quando você clicar para remover um item/NPC/missão etc., essa informação desaparecerá dos dados disponíveis para o mestre do jogo, e ele formulará respostas posteriores sem levá-la em conta. Além disso, o mestre do jogo analisa cuidadosamente o histórico de suas mensagens com ele, bem como as últimas cinco mensagens do "Log de Cálculo de Ações".

Todas as listas das janelas de informação são limitadas a 30 elementos, exceto os itens do inventário. Isso é feito para não sobrecarregar o mestre do jogo com informações, pois pode chegar um momento em que o mestre do jogo simplesmente não consiga criar uma resposta. Você pode bloquear qualquer elemento da lista na janela de informações clicando no botão de "cadeado", protegendo-o assim da exclusão.

Se o mestre do jogo ainda não conseguir formular uma resposta, talvez o contexto esteja sobrecarregado de informações. Tente limpar alguns dos dados disponíveis. Comece excluindo metade do chat e veja se isso ajuda o mestre do jogo a formular uma resposta.

Por favor, considere me apoiar (Lottarend, o autor do jogo). Links para formas de apoio são fornecidos na próxima mensagem.

Aproveite o jogo!`,
            "game_starting_donate": "Agradecer ao autor de Legendarica Absolute :\n\n Criptomoeda: TSH1v85VbFo6b8gzb2xKcHy7Lk5NYLqVYh (USDT TRC20)\n\nOutra maneira: https://www.donationalerts.com/r/lottarend",
            "game_starting_discord": "No Discord, você pode encontrar a versão mais recente e discutir o jogo https://discord.gg/pTXcwJuH9h",
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
            "Angelic_halo": "Auréola Angelical",
            "Demonic_symbol": "Símbolo Demoníaco",
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
            "status-effect-none-label": "Nenhum",
            "persuasion-label": "Persuasão",
            "start-prs": "Persuasão",
            "rebirth-in-another-world": "Renascimento em Outro Mundo",
            "being-summoned-to-another-world": "Ser Convocado para Outro Mundo",
            "reincarnation": "Reencarnação",
            "demon-invasion": "Invasão de Demônios",
            "the-end-of-the-world": "O Fim do Mundo",
            "apocalypse": "Apocalipse",
            "quest-info-questGiver-label": "Doador da Missão",
            "quest-info-questBackground-label": "Antecedentes:",
            "quest-info-description-label": "Descrição:",
            "use-thinking-module-label": "Adicionar módulo de raciocínio das respostas (desative para economizar tokens). Teoricamente torna a IA mais inteligente",
            "log-thinking-button-label": "Registro de Pensamentos",
            "persuasion": "Persuasão",
            "human_desc": "Pessoa do mundo moderno vivendo no século XXI",
            "superhuman_desc": "Um super-humano é uma pessoa com super habilidades que surgem do poder de sua mente, tendo passado por mudanças evolutivas",
            "infected_desc": "Pessoa que foi infectada com o vírus zumbi",
            "ratman_desc": "Descendente de ratos comuns que mutaram sob a influência da radiação e ganharam inteligência. De longe, se assemelha a um humano grotesco",
            "ghoul_desc": "Pessoa que uma vez foi infectada com o vírus zumbi. Conseguiram manter a sanidade apesar das mudanças horríveis em seu próprio corpo",
            "mutant_desc": "Pessoa cujo corpo passou por várias mutações devido à exposição à radiação",
            "supermutant_desc": "Pessoa cujo corpo se tornou maciço e forte devido à exposição à radiação, mas sofreu mudanças repulsivas",
            "cyborg_desc": "Humano com implantes cibernéticos integrados em sua carne",
            "android_desc": "Robô coberto com pele sintética e que possui órgãos semelhantes aos humanos",
            "robot_desc": "Máquina de aço equipada com inteligência artificial avançada",
            "gray_desc": "Extraterrestre com pele cinza, cabeça grande e olhos negros, que chegou à Terra de um planeta distante",
            "alien_desc": "Um dos extraterrestres que chegaram à Terra de um planeta distante",
            "hybrid_desc": "Híbrido de um extraterrestre e um humano. Possui traços de ambas as raças",
            "ancient_desc": "Representante de uma antiga raça de precursores que passou muitos milhares de anos em criossueño. O mundo ao seu redor mudou incrivelmente durante seu sono",
            "survival_kit": `Kit de sobrevivência`,
            "psionic_headband": `Diadema Amplificador Psiónico`,
            "adrenaline_syringe": `Seringa de adrenalina do infectado`,
            "grappling_hook": `Gancho de escalada do escavador`,
            "bone_blade": `Lâmina de osso irradiada do ghoul`,
            "mutant_serum": `Soro mutante instável`,
            "crude_bonehammer": `Martelo de osso rudimentar do supermutante`,
            "hacking_device": `Dispositivo de hackeamento integrado`,
            "skin_repair_paste": `Pasta de reparo de pele sintética`,
            "EMP_Generator": `Gerador EMP portátil`,
            "communication_implant": `Implante de comunicação telepática`,
            "cloaking_device": `Dispositivo de camuflagem alienígena`,
            "symbiotic_implant": `Implante simbiótico`,
            "ancient_artifact": `Artefato antigo dos precursores`,
            "survival_kit": `Kit de sobrevivência`,
            "hacker": "Hacker",
            "scout": "Explorador",
            "bounty_hunter": "Caçador de Recompensas",
            "survivor": "Sobrevivente",
            "raider": "Assaltante",
            "bandit": "Bandido",
            "wanderer": "Errante",
            "veteran": "Veterano",
            "mercenary": "Mercenário",
            "stalker": "Acechador",
            "citizen": "Cidadão",
            "vault_dweller": "Habitante do Refúgio",
            "savage": "Selvagem",
            "soldier": "Soldado",
            "engineer": "Engenheiro",
            "medic": "Médico",
            "sniper": "Atirador de Elite",
            "virologist": "Virologista",
            "biotechnician": "Biotecnólogo",
            "reborn": "Renascido",
            "psionic": "Psiónico",
            "telekinetic": "Telequinético",
            "telepath": "Telepata",
            "pyromancer": "Pirocántico",
            "cryomancer": "Criomántico",
            "mechanized_soldier": "Soldado Mecanizado",
            "mechanical_guardian": "Guardião Mecânico",
            "cybernetic_assassin": "Assassino Cibernético",
            "cybernetic_spy": "Espião Cibernético",
            "precursor_agent": "Agente Precursor",
            "precursor_scientist": "Cientista Precursor",
            "precursor_soldier": "Soldado Precursor",
            "xenomant": "Xenomante",
            "alien_scout": "Explorador Alienígena",
            "space_architect": "Arquiteto Espacial",
            "galactic_explorer": "Explorador Galáctico",
            "alien_soldier": "Soldado Alienígena",
            "hacker_descr": "Especialista em invadir sistemas e redes de computadores. Usa suas habilidades para acessar informações e controlar dispositivos.",
            "scout_descr": "Especialista em reconhecimento ágil e furtivo, especializado em infiltração, coleta de informações e eliminação discreta de alvos.",
            "bounty_hunter_descr": "Caçador de recompensas experiente que rastreia e captura criminosos por recompensas. Atirador preciso e mestre em combate corpo a corpo.",
            "survivor_descr": "Sobrevivente experiente adaptado às duras condições do mundo pós-apocalíptico. Hábil em encontrar recursos, construir abrigos e se defender contra perigos.",
            "raider_descr": "Maraudador brutal que vive de saques e violência. Lutador forte e agressivo, sem piedade.",
            "bandit_descr": "Criminoso astuto e enganoso envolvido em roubos e saques. Maneja habilmente barras de ferro e ganzúas.",
            "wanderer_descr": "Vagabundo solitário que viaja pelo mundo pós-apocalíptico em busca de uma vida melhor. Resistente e engenhoso, capaz de sobreviver em quaisquer condições.",
            "veteran_descr": "Soldado experiente que passou por inúmeras batalhas. Possui excelente treinamento de combate, disciplinado e frio.",
            "mercenary_descr": "Mercenário que luta por dinheiro. Combatente experiente proficiente com várias armas e táticas.",
            "stalker_descr": "Guia experiente por zonas anômalas. Sabe como evitar perigos e encontrar artefatos valiosos.",
            "citizen_descr": "Residente de uma das poucas cidades sobreviventes. Possui habilidades e conhecimentos básicos necessários para viver em sociedade.",
            "vault_dweller_descr": "Exilado do Refúgio, adaptado à vida em um bunker subterrâneo. Possui habilidades técnicas e conhecimentos sobre o mundo pré-guerra.",
            "savage_descr": "Selvagem que vive longe da civilização. Caçador forte e ágil que confia em instintos primitivos e armas.",
            "soldier_descr": "Militar profissional treinado para lutar em quaisquer condições. Atirador disciplinado e preciso.",
            "engineer_descr": "Especialista técnico capaz de criar e reparar diversos dispositivos. Aliado valioso no mundo pós-apocalíptico.",
            "medic_descr": "Médico de campo capaz de tratar ferimentos e doenças. Membro indispensável de qualquer grupo de sobreviventes.",
            "sniper_descr": "Atirador preciso capaz de eliminar alvos de longa distância. Combatente paciente e observador.",
            "virologist_descr": "Cientista especializado no estudo de vírus. Desenvolve vacinas e medicamentos antivirais.",
            "biotechnician_descr": "Cientista que trabalha com organismos vivos. Capaz de criar modificações genéticas e cultivar tecidos artificiais.",
            "reborn_descr": "Renascido é um indivíduo infectado que conseguiu superar parcialmente o vírus e manter sua sanidade. Eles são mais fortes e resilientes que pessoas comuns e podem mutar, mas continuam a apodrecer.",
            "psionic_descr": "Indivíduo com habilidades psiónicas. Pode influenciar as mentes de outros seres e controlar a energia psiónica.",
            "telekinetic_descr": "Psiónico com habilidades de telecinesia. Pode mover objetos com o poder do pensamento.",
            "telepath_descr": "Psiónico com habilidades de telepatia. Pode ler mentes e se comunicar com outros seres à distância.",
            "pyromancer_descr": "Psiónico com habilidades de pirocinesia. Pode controlar o fogo com o poder do pensamento.",
            "cryomancer_descr": "Psiónico com habilidades de criocinesia. Pode controlar o frio e criar gelo.",
            "mechanized_soldier_descr": "Soldado fortemente armado em um exoesqueleto. Possui alta potência de fogo e proteção.",
            "mechanical_guardian_descr": "Guardião robótico programado para proteger um território ou objeto. Equipado com sistemas avançados de vigilância e armas poderosas.",
            "cybernetic_assassin_descr": "Assassino cibernético modificado para infiltração furtiva e eliminação de alvos. Equipado com armas integradas e sensores avançados.",
            "cybernetic_spy_descr": "Espião cibernético modificado para coleta de informações e sabotagens. Equipado com gerador de invisibilidade e projetor holográfico.",
            "precursor_agent_descr": "Agente Precursor que possui tecnologias avançadas e conhecimentos. Especializado em reconhecimento, sabotagens e eliminação de ameaças.",
            "precursor_scientist_descr": "Cientista Precursor com amplo conhecimento em várias áreas científicas. Capaz de criar e usar dispositivos avançados.",
            "precursor_soldier_descr": "Soldado Precursor equipado com armas e armaduras de alta tecnologia. Treinado para combater em quaisquer condições.",
            "xenomant_descr": "Xenomant é um especialista habilidoso em artefatos misteriosos e tecnologias de uma raça alienígena. Pode usá-los para proteção, ataque e exploração.",
            "alien_scout_descr": "Explorador alienígena especializado em explorar novos mundos e coletar informações. Equipado com tecnologias avançadas de camuflagem e escaneamento.",
            "space_architect_descr": "Arquiteto Espacial é um alienígena capaz de alterar o espaço e a matéria com o poder do pensamento. Pode criar e destruir objetos, bem como construir bases e estruturas.",
            "galactic_explorer_descr": "Explorador Galáctico é um alienígena dedicado a estudar o espaço e buscar novas formas de vida. Possui amplo conhecimento e tecnologias avançadas.",
            "alien_soldier_descr": "Soldado alienígena treinado para lutar usando armamentos e tecnologias avançadas. Combatente disciplinado e eficaz.",
            "survival_kit": `Kit de sobrevivência`,
            "hacker_1": "Interface de Hackeo",
            "hacker_2": "KPK",
            "hacker_3": "Granada EMP",
            "hacker_4": "Escâner de Rede",
            "scout_1": "Traje de Furtividade",
            "scout_2": "Conjunto de Ganzúas",
            "scout_3": "Máscara de Gás",
            "scout_4": "Pistola Silenciada",
            "bounty_hunter_1": "Duas Pistolas",
            "bounty_hunter_2": "Dispositivo de Rastreamento de Alvos",
            "bounty_hunter_3": "Rede de Energia",
            "bounty_hunter_4": "Faca de Combate",
            "survivor_1": "Adaga Barata",
            "survivor_2": "Armadura Caseira",
            "survivor_3": "Tenda de Camuflagem",
            "survivor_4": "Faca de Caça",
            "raider_1": "Rifle Caseiro",
            "raider_2": "Clava com Espinhos",
            "raider_3": "Garrafa com Gasolina",
            "raider_4": "Isqueiro Favorito",
            "bandit_1": "Pé de Cabra Pesado",
            "bandit_2": "Máscara de Bandido",
            "bandit_3": "Colete de Couro",
            "bandit_4": "Conjunto de Ganzúas",
            "wanderer_1": "Mochila Universal",
            "wanderer_2": "Tenda Compacta",
            "wanderer_3": "Balestra Esportiva",
            "wanderer_4": "Faca Multifuncional",
            "veteran_1": "Pistola de Recompensa",
            "veteran_2": "Colete à Prova de Balas Antigo",
            "veteran_3": "Cinto Tático",
            "veteran_4": "Kit Médico",
            "mercenary_1": "Pistola",
            "mercenary_2": "Rifle de Sniper",
            "mercenary_3": "Capacete de Combate",
            "mercenary_4": "Dinamite",
            "stalker_1": "Detector de Anomalias",
            "stalker_2": "Máscara de Gás Modificada",
            "stalker_3": "Rifle de Assalto",
            "stalker_4": "Corda com Gancho de Gato",
            "citizen_1": "Documentos de Cidadania",
            "citizen_2": "Telefone",
            "citizen_3": "Bolsa de Suprimentos",
            "citizen_4": "Faca de Utilidade",
            "vault_dweller_1": "Ferramenta Multifuncional",
            "vault_dweller_2": "Módulo de Água",
            "vault_dweller_3": "Pistola Modificada",
            "vault_dweller_4": "Módulo de Comunicação do Refúgio",
            "savage_1": "Machado de Osso",
            "savage_2": "Amuleto de Osso",
            "savage_3": "Armadilha para Caça",
            "savage_4": "Arco Caseiro",
            "soldier_1": "Rifle Automático",
            "soldier_2": "Munições",
            "soldier_3": "Granada",
            "soldier_4": "Colete à Prova de Balas",
            "engineer_1": "Conjunto de Ferramentas",
            "engineer_2": "Drone Voador",
            "engineer_3": "Aparato de Soldagem",
            "engineer_4": "Escâner de Plantas",
            "medic_1": "Kit de Primeiros Socorros",
            "medic_2": "Analgésico",
            "medic_3": "Bandagens",
            "medic_4": "Desfibrilador Portátil",
            "sniper_1": "Rifle de Sniper",
            "sniper_2": "Binóculos",
            "sniper_3": "Manto de Camuflagem",
            "sniper_4": "Faca de Combate",
            "virologist_1": "Analisador Biológico",
            "virologist_2": "Medicamentos Antivirais",
            "virologist_3": "Estação de Pesquisa de Vírus",
            "virologist_4": "Amostras Infectadas",
            "biotechnician_1": "Modificador Genético",
            "biotechnician_2": "Biosintetizador",
            "biotechnician_3": "Kit de Laboratório",
            "biotechnician_4": "Suero Experimental",
            "reborn_1": "Suero Anti-Decomposição do Renascido",
            "reborn_2": "Suero de Fortalecimento",
            "reborn_3": "Suero de Mutação Controlada",
            "reborn_4": "Suero de Mutação Incontrolada",
            "psionic_1": "Amplificador Mental",
            "psionic_2": "Dispositivo Telepático",
            "psionic_3": "Cristal Focalizador",
            "psionic_4": "Amplificador Psi",
            "telekinetic_1": "Arco de Concentração",
            "telekinetic_2": "Mini-Plataforma Flutuante",
            "telekinetic_3": "Luvas Antigravidade",
            "telekinetic_4": "Cristal de Focalização",
            "telepath_1": "Anel Focalizador",
            "telepath_2": "Arco de Leitura de Pensamentos",
            "telepath_3": "Amuleto de Comunicação Mental",
            "telepath_4": "Báculo de Controle de Infectados",
            "pyromancer_1": "Coquetel Molotov",
            "pyromancer_2": "Báculo Pirolítico",
            "pyromancer_3": "Suero de Mutação Piro",
            "pyromancer_4": "Traje Resistente ao Fogo",
            "cryomancer_1": "Traje Térmico Polar",
            "cryomancer_2": "Termo com Nitrogênio Líquido",
            "cryomancer_3": "Suero de Mutação Crio",
            "cryomancer_4": "Bateria Crio",
            "mechanized_soldier_1": "Exoesqueleto",
            "mechanized_soldier_2": "Escopeta Potente",
            "mechanized_soldier_3": "Escudo de Energia",
            "mechanized_soldier_4": "Kit de Reparação",
            "mechanical_guardian_1": "Módulo de Vigilância Avançado",
            "mechanical_guardian_2": "Módulo de Reparação",
            "mechanical_guardian_3": "Painel de Proteção",
            "mechanical_guardian_4": "Metralhadora Integrada",
            "cybernetic_assassin_1": "Lâmina Oculta",
            "cybernetic_assassin_2": "Coquetel de Aceleração Nano",
            "cybernetic_assassin_3": "Sistema de Supressão de Som",
            "cybernetic_assassin_4": "Sensores Ópticos de Visão Noturna",
            "cybernetic_spy_1": "Gerador de Invisibilidade",
            "cybernetic_spy_2": "Proyector Holográfico",
            "cybernetic_spy_3": "Ganzúa Cibernética",
            "cybernetic_spy_4": "Chicote Nano Explosivo",
            "precursor_agent_1": "Pistola de Plasma",
            "precursor_agent_2": "Dispositivo de Teleportação",
            "precursor_agent_3": "Kit de Equipamento de Espião",
            "precursor_agent_4": "Proyector Holográfico Portátil",
            "precursor_scientist_1": "Escâner Universal",
            "precursor_scientist_2": "Estação de Síntese Molecular",
            "precursor_scientist_3": "Escudo de Energia",
            "precursor_scientist_4": "Cortador de Plasma",
            "precursor_soldier_1": "Carabina Laser de Energia",
            "precursor_soldier_2": "Escudo de Força Precursor",
            "precursor_soldier_3": "Potenciador Cibernético",
            "precursor_soldier_4": "Gerador de Gravidade",
            "xenomant_1": "Artefato Alienígena",
            "xenomant_2": "Teletransportador Portátil",
            "xenomant_3": "Escudo Holográfico",
            "xenomant_4": "Espada de Energia",
            "alien_scout_1": "Botas Gravitacionais",
            "alien_scout_2": "Teletransportador Portátil",
            "alien_scout_3": "Escâner de Objetos Ocultos",
            "alien_scout_4": "Pistola Laser",
            "space_architect_1": "Proyector de Gravidade",
            "space_architect_2": "Traje Espacial Materializador",
            "space_architect_3": "Mapa Espacial",
            "space_architect_4": "Estabilizador Planetário",
            "galactic_explorer_1": "Escâner Multiespectral",
            "galactic_explorer_2": "Tradutor Xeno",
            "galactic_explorer_3": "Módulo de Bio-Laboratório",
            "galactic_explorer_4": "Assistente Drone Pessoal",
            "alien_soldier_1": "Carabina de Trilho Magnético",
            "alien_soldier_2": "Escudo Nanotecnológico",
            "alien_soldier_3": "Sistema Biónico Integrado",
            "alien_soldier_4": "Companion Holográfico Tático",
            "superhuman": "Superhumano",
            "infected": "Infectado",
            "ratman": "Ratman",
            "ghoul": "Ghoul",
            "mutant": "Mutante",
            "supermutant": "Super-Mutante",
            "cyborg": "Ciborgue",
            "android": "Androide",
            "robot": "Robô",
            "gray": "Cinza",
            "alien": "Alienígena",
            "hybrid": "Híbrido",
            "ancient": "Antigo",
            "total-weight-label": "Peso Total (kg):",
            "tooltip-max-weight": "Calculado pelo GM no final de cada turno. Peso máximo = (Força + Resistência) * 3 + 10",
            "max-weight-label": "Peso Máximo (kg):",
            "use-weight-control-label": "Usar peso no jogo",
            "maximum-weight-exceeded-label": "Peso máximo do personagem excedido! Os itens especificados foram movidos para o carrinho: ",
            "statsGroup-weight-button-label": "Peso",
            "tooltip-inventory-basket": "Os itens removidos do inventário são colocados aqui. Limpa automaticamente no final de cada turno. Você pode restaurá-los antes que desapareçam.",
            "inventory-basket-button-label": "Cesta (Inventário)",
            "inventory-restore": "Restaurar",
            "tooltip-critical-weight": "Ao exceder o peso máximo, o personagem ainda pode receber itens no inventário por algum tempo, mas fica sobrecarregado. Um personagem sobrecarregado perde energia rapidamente. Após exceder o peso crítico, o personagem não pode mais carregar novos itens.",
            "critical-weight-label": "Peso Crítico (kg):",
            "weight-status-label": "Estado:",
            "weight-status-value-normal": "Normal",
            "weight-status-value-bad": "Sobrecarregado",
            "first_contact": "Primeiro Contato",
            "zero_patient": "Paciente Zero",
            "doomsday": "Dia do Juízo Final",
            "experiment": "Experimento",
            "awakening_ancients": "Despertar dos Anciãos",
            "call_from_space": "Chamado do Espaço",
            "infected_city": "Cidade Infectada",
            "dead_zone": "Zona Morta",
            "anomalous_territory": "Território Anômalo",
            "underground_world": "Mundo Subterrâneo",
            "ruins_megapolis": "Ruínas da Megapólis",
            "mutant_lair": "Covil dos Mutantes",
            "forgotten_laboratory": "Laboratório Esquecido",
            "fight_with_horde": "Luta contra a Horda",
            "vault_life": "Vida no Cofre",
            "besieged_city": "Cidade Sitio",
            "nomadic_life": "Vida Nômade",
            "pirate_haven": "Refúgio Pirata",
            "wild_tribe": "Tribo Selvagem",
            "trade_caravan": "Caravana Comercial",
            "last_city": "Última Cidade",
            "gang_war": "Guerra de Gangues",
            "resistance": "Resistência",
            "bounty_hunters": "Caçadores de Recompensas",
            "wasteland_mercenaries": "Mercenários da Terra Desolada",
            "battle_for_resources": "Batalha por Recursos",
            "ideology_conflict": "Conflito Ideológico",
            "cure_search": "Busca por Cura",
            "precursors_secret": "Segredo dos Precursores",
            "alien_first_contact": "Primeiro Contato com Alienígenas",
            "paradise_search": "Busca pelo Paraíso",
            "mutant_origin": "Origem dos Mutantes",
            "vault_secrets": "Segredos do Cofre",
            "star_ark": "Arca Estelar",
            "cyber_rebels": "Rebeldes Cibernéticos",
            "machine_uprising": "Revolta das Máquinas",
            "mech_wars": "Guerras Mecânicas",
            "engineer_guild": "Guilda dos Engenheiros",
            "cyber_city": "Cidade Cibernética",
            "psionic_war": "Guerra Psiónica",
            "psionic_school": "Escola Psiónica",
            "psionic_hunt": "Caça Psiónica",
            "psy_defense": "Defesa Psiónica",
            "alien_invasion": "Invasão Alienígena",
            "galactic_diplomacy": "Diplomacia Galáctica",
            "star_patrol": "Patrulha Estelar",
            "war_of_the_worlds": "Guerra dos Mundos",
            "artifact_search": "Busca por Artefatos",
            "hospital_outbreak": "Fuga do Hospital",
            "shopping_mall_siege": "Assédio ao Shopping",
            "prison_break": "Fuga da Prisão",
            "highrise_trap": "Armadilha em Arranha-céus",
            "subway_escape": "Escape do Metrô",
            "ground_zero": "Ponto Zero",
            "patient_zero_hunt": "Caça ao Paciente Zero",
            "the_last_broadcast": "A Última Transmissão",
            "evacuation_failed": "Evacuação Falhada",
            "first_bite": "Primeira Mordida",
            "the_fall": "A Queda",
            "scorched_earth": "Terra Queimada",
            "water_wars": "Guerras pela Água",
            "beneath_the_sand": "Sob as Areias",
            "fortress_of_madness": "Fortaleza da Loucura",
            "ghost_ship": "Navio Fantasma",
            "the_frozen_north": "O Norte Congelado",
            "jungle_hunt": "Caça na Selva",
            "sky_pirates": "Piratas do Céu",
            "mutant_island": "Ilha dos Mutantes",
            "lost_colony": "Colônia Perdida",
            "first_contact_desc": "A invasão alienígena começa.",
            "zero_patient_desc": "O vírus zumbi começa a se espalhar.",
            "doomsday_desc": "O início de uma guerra nuclear ou a queda de um meteoro.",
            "experiment_desc": "Um experimento científico fracassado saiu de controle.",
            "awakening_ancients_desc": "Fim da criostase dos Antigos, uma raça precursora altamente avançada. O retorno deles a um mundo que mudou.",
            "call_from_space_desc": "Chegada da primeira nave de reconhecimento alienígena à Terra.",
            "infected_city_desc": "Sobreviva em uma cidade tomada pela epidemia zumbi.",
            "dead_zone_desc": "Viagem por um ermo radioativo.",
            "anomalous_territory_desc": "Exploração de uma zona cheia de anomalias e mutantes.",
            "underground_world_desc": "Vida em um metrô abandonado ou em sistemas de bunkers.",
            "ruins_megapolis_desc": "Explore as ruínas de uma megacidade em busca de recursos.",
            "mutant_lair_desc": "Sobreviva próximo a uma colônia de mutantes perigosos.",
            "forgotten_laboratory_desc": "Localize e investigue um laboratório científico abandonado.",
            "fight_with_horde_desc": "Defenda um assentamento de uma onda de infectados enlouquecidos.",
            "vault_life_desc": "A rotina diária em um bunker subterrâneo, lidando com conflitos internos.",
            "besieged_city_desc": "Proteja o último bastião da civilização de ameaças externas.",
            "nomadic_life_desc": "Viaje com um grupo de sobreviventes em busca de um novo lar.",
            "pirate_haven_desc": "Viva entre piratas e contrabandistas nos destroços de navios.",
            "wild_tribe_desc": "Sobreviva em uma tribo primitiva, em confronto com a civilização.",
            "trade_caravan_desc": "Proteja e escolte uma caravana comercial por territórios perigosos.",
            "last_city_desc": "Defenda a última cidade de saqueadores e mutantes.",
            "gang_war_desc": "Luta pelo poder entre gangues de saqueadores.",
            "resistance_desc": "Luta clandestina contra um regime totalitário.",
            "bounty_hunters_desc": "Aceite contratos perigosos para capturar criminosos.",
            "wasteland_mercenaries_desc": "Realize missões de mercenários, resolvendo disputas entre clãs.",
            "battle_for_resources_desc": "Conflito entre assentamentos pelo controle de recursos valiosos.",
            "ideology_conflict_desc": "Um embate entre facções com ideologias singulares.",
            "cure_search_desc": "Busca por uma vacina contra o vírus zumbi ou outro desastre.",
            "precursors_secret_desc": "Investigue ruínas e artefatos de uma civilização ancestral.",
            "alien_first_contact_desc": "Missão diplomática ou espionagem com extraterrestres.",
            "paradise_search_desc": "Procurando um local seguro mítico, sobre o qual se comenta nas Terras Devastadas.",
            "mutant_origin_desc": "Investigue as causas das mutações e encontre um modo de revertê-las.",
            "vault_secrets_desc": "Revele os experimentos secretos conduzidos nos Abrigos.",
            "star_ark_desc": "Localize e lance uma nave espacial ainda funcional.",
            "cyber_rebels_desc": "Lute contra a corporação que controla as tecnologias cibernéticas.",
            "machine_uprising_desc": "Guerra contra robôs e IA que se rebelaram.",
            "mech_wars_desc": "Batalhas com robôs gigantes e máquinas de guerra.",
            "engineer_guild_desc": "Rivalidade entre grupos de engenheiros em busca de tecnologias raras.",
            "cyber_city_desc": "Vida em uma cidade governada por inteligência artificial.",
            "psionic_war_desc": "Conflito entre psíquicos e aqueles que os temem.",
            "psionic_school_desc": "Treinamento e desenvolvimento de habilidades psíquicas.",
            "psionic_hunt_desc": "Rastreie e neutralize psíquicos perigosos.",
            "psy_defense_desc": "Defesa contra ataques e manipulações psíquicas.",
            "alien_invasion_desc": "Defenda a Terra de uma invasão alienígena em grande escala.",
            "galactic_diplomacy_desc": "Estabeleça contato e relações com raças extraterrestres.",
            "star_patrol_desc": "Patrulhe o espaço para prevenir ameaças.",
            "war_of_the_worlds_desc": "Participe de um conflito interestelar ao lado de uma das raças.",
            "artifact_search_desc": "Procure e estude artefatos de uma civilização alienígena.",
            "hospital_outbreak_desc": "Você está preso em um hospital repleto de infectados. Encontre a saída antes que seja tarde demais.",
            "shopping_mall_siege_desc": "Um grupo de sobreviventes se refugiou em um shopping. Defenda-o de ondas de zumbis e encontre um jeito de sair.",
            "prison_break_desc": "O vírus zumbi chegou a uma prisão. Presos e guardas precisam se unir para escapar.",
            "highrise_trap_desc": "Você está preso nos andares superiores de um arranha-céu. Os zumbis estão chegando e os elevadores não funcionam. Desça lutando pela sua vida.",
            "subway_escape_desc": "Você se abrigou no metrô, apenas para descobrir que os túneis estão cheios de zumbis. Abra caminho até a próxima estação.",
            "ground_zero_desc": "Você testemunha o início do surto. A cidade mergulha no caos. Tente sobreviver e escapar.",
            "patient_zero_hunt_desc": "As autoridades estão procurando o paciente zero para conter o vírus. Você é um dos que podem encontrá-lo.",
            "the_last_broadcast_desc": "Você é um radialista transmitindo de um estúdio sitiado. Mantenha os sobreviventes informados enquanto puder.",
            "evacuation_failed_desc": "A evacuação falhou. Os helicópteros partiram, deixando você cercado por zumbis. Encontre outra rota de fuga.",
            "first_bite_desc": "Você foi mordido. Há pouco tempo para encontrar uma cura ou aceitar seu destino.",
            "the_fall_desc": "Você é um morador de uma metrópole que acabou de descobrir o vírus zumbi. A cidade está em chamas, as ruas em pânico—salve sua família.",
            "scorched_earth_desc": "Após uma guerra nuclear, a superfície da Terra está estéril. Lute por escassos recursos nas ruínas e evite a radiação.",
            "water_wars_desc": "Em um mundo onde água potável vale ouro, você deve encontrar ou proteger uma fonte de água para seu assentamento.",
            "beneath_the_sand_desc": "Ruínas de uma civilização antiga jazem sob as areias do deserto, repletas de tesouros e perigos. Explore-as, tomando cuidado com vermes gigantes e armadilhas.",
            "fortress_of_madness_desc": "O líder de um assentamento enlouqueceu e transformou sua cidade em uma fortaleza impenetrável. Derrube-o para libertar o povo.",
            "ghost_ship_desc": "Você desperta em um navio fantasma à deriva. Desvende o mistério da tripulação e encontre um caminho de volta à costa.",
            "the_frozen_north_desc": "O frio eterno tomou conta das terras do norte. Sobreviva ao frio extremo, a animais mutantes e a outros sobreviventes desesperados.",
            "jungle_hunt_desc": "Selvas perigosas repletas de mutantes, plantas venenosas e armadilhas antigas. Conduza uma expedição em busca de um artefato perdido.",
            "sky_pirates_desc": "Torne-se um pirata dos céus, navegando em um dirigível. Lute contra outros piratas, negocie com cidades flutuantes e explore ilhas suspensas.",
            "mutant_island_desc": "Você naufragou em uma ilha habitada por uma tribo de mutantes. Faça amizade com eles ou tente escapar da ilha.",
            "lost_colony_desc": "Você é parte da tripulação de uma nave espacial que caiu em uma Terra dominada por zumbis. Procure sobreviventes e construa um novo assentamento enquanto repele hordas de infectados.",
            "character-post-apocalyptic-name": "Digite o nome do personagem",
            "post-apocalypse-race-message-label": "Descrição da raça:",
            "post-apocalypse-class-message-label": "Descrição da classe:",
            "tooltip-post-apocalypse-rpg": "Se o controle deslizante estiver vermelho, está ativado. RPG é o modo de jogo. No modo RPG, a jogabilidade consiste no desenvolvimento do personagem, e habilidades e inventário são cruciais. Se desativado, o jogo estará no modo Roleplay, que foca em criar uma narrativa interessante, e habilidades e inventário são secundários.",
            "post-apocalypse-tooltip-noMagic": "Se ativado (cor vermelha), o mestre de jogo cria um mundo sem magia e apenas com habilidades realistas. Se desativado, o mundo terá magia e habilidades não realistas.",
            "post-apocalypse-nonmagic-mode-name": "Sem Magia no Mundo",
            "create-character-post-apocalyptic": "Iniciar Jogo",
            "random-character-post-apocalyptic": "Personagem Aleatório",
            "load-character-post-apocalyptic": "Carregar Autosave",
            "load-savefile-post-apocalyptic": "Carregar Arquivo",
            "my-game-post-apocalyptic": "Meu Cenário",
            "ai-provider-label4": "Provedor de IA",
            "ai-none4-label": "Nenhum Selecionado",
            "ai-model-label4": "Modelo de IA",
            "ai-model4": "Digite o nome do modelo de IA",
            "api-key-label4": "Sua Chave API",
            "api-key-button4": "Mostrar por 10 segundos",
            "api-key4": "Por motivos de segurança, certifique-se de usar uma chave API com baixo limite de uso",
            "additional-settings-label4": "Você pode ver configurações adicionais no painel suspenso à direita. Clique no botão no canto inferior direito da tela para acessar o painel de configurações.",
            "post-apocalypse-campaign-message-label": "Descrição da campanha:",
            "post-apocalyptic-game": "Jogo Rápido - Pós-Apocalipse",
            "create-character-post-apocalyptic-label": "Crie seu personagem",
            "weight-reduction-label": "Redução do Peso do Conteúdo",
            "thinking-module-iterations-label": "Número de tentativas que o módulo de reflexão de respostas fará para pensar sobre a resposta.",
            "use-literary-prompt-label": "O Mestre do Jogo se esforçará por um estilo literário",
            "use-erotic-prompt-label": "Permitir conteúdo para maiores de 21 anos no jogo",
            "abort-error-message": "Solicitação cancelada pelo jogador",
            "common-error-message": "Erro durante a solicitação:",
            "cancel-button": "Cancelar",
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
            "max-gm-symbols": "डिफ़ॉल्ट रूप से 20000",
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
            "tooltip-race": `जाति प्रारंभिक स्थान, जातीय क्षमता उत्पादन, प्लॉट और कौशल एवं वस्तुओं पर प्रारंभिक बोनस को प्रभावित करती है:

मानव: भाग्य +2, व्यापार +1, धारणा +1, बुद्धिमत्ता -1, ज्ञान -1, सार्वभौमिक उपकरण

एल्फ़: चपलता +2, गति +1, आकर्षण +1, शक्ति -1, सहनशीलता -1, एल्फ़ीन चोगा

ग्नोम: व्यापार +2, शक्ति +1, सहनशीलता +1, चपलता -1, गति -1, ग्नोम का अली

ऑर्क: शक्ति +3, सहनशीलता +2, बुद्धिमत्ता -1, ज्ञान -1, आकर्षण -1, ऑर्क युद्ध चित्रण

सरीसृप: सहनशीलता +2, गति +1, आकर्षण -1, पपड़ी के लिए तेल

वैंपायर: धारणा +1, आकर्षण +1, चपलता +1, भाग्य -1, रक्त का बोतल

गोलम: शक्ति +3, सहनशीलता +2, बुद्धिमत्ता -1, आकर्षण -1, ज्ञान -1, मौलिक कोर

फरिश्ता: शक्ति +1, आकर्षण +1, ज्ञान +1, व्यापार -1, फरिश्ते की प्रभामंडल

दानव: चपलता +1, आकर्षण +2, प्रेरणा +1, ज्ञान -1, भाग्य -1, दानव प्रतीक`,
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
            "status-purposes-label": "संभावित उद्देश्य",
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
            "angel": "फरिश्ता",
            "demon": "दानव",
            "no-choosed-race": "जाति चुनें",

            "female": "महिला",
            "male": "पुरुष",
            "no-choosed-gender": "लिंग चुनें",

            "item_notepad": "नोट्स के लिए नोटपैड",
            "item_notepad_description": "नोट्स के लिए नोटपैड",
            "game_starting_description": `एब्सोल्यूट लीजेंडारिका में आपका स्वागत है, साहसी यात्री! कृपया निम्नलिखित जानकारी देखें...

यह एक टेक्स्ट-आधारित रोल-प्लेइंग गेम है जो LLM का उपयोग करता है। आप नीचे दिए गए टेक्स्ट बॉक्स में अपनी क्रिया दर्ज कर सकते हैं। न्यूरल नेटवर्क आपकी प्रतिक्रिया को संसाधित करेगा और ऐसे निर्देश भेजेगा जिनसे गेम इंटरफ़ेस भरा जाएगा।
आप स्क्रीन के दाएं ऊपरी कोने में उपलब्ध सूचना विंडोज़ के बीच स्विच कर सकते हैं, बटन वाले ड्रॉप-डाउन पैनल का उपयोग करके। प्रत्येक आइटम, NPC सूची में प्रत्येक NPC, प्रत्येक कौशल और क्वेस्ट, साथ ही स्थिति संबंधी जानकारी — इन सभी का उपयोग गेम मास्टर आपके उत्तर को तैयार करने में करता है। जब आप किसी आइटम/NPC/क्वेस्ट इत्यादि को हटाने पर क्लिक करते हैं, तो वह जानकारी गेम मास्टर के उपलब्ध डेटा से गायब हो जाती है, और वह आगे के उत्तर बिना उसे ध्यान में रखे तैयार करता है। इसके अलावा, गेम मास्टर आपके साथ हुए संदेशों के इतिहास और "क्रिया गणना लॉग" के अंतिम पांच संदेशों पर भी ध्यान देता है।

सभी सूचना-विंडो सूचियां 30 तत्वों तक सीमित हैं, सिवाय इन्वेंटरी आइटम्स के। यह गेम मास्टर को जानकारियों से अधिभार से बचाने के लिए किया गया है, क्योंकि ऐसा समय आ सकता है जब गेम मास्टर उत्तर देने में असमर्थ हो जाए। आप सूचना विंडो में किसी भी सूचीयुक्त तत्व को "ताला" बटन दबाकर ब्लॉक कर सकते हैं, जिससे वह हटाने से सुरक्षित रहेगा।

यदि गेम मास्टर फिर भी उत्तर तैयार नहीं कर पाता है, तो संभव है कि संदर्भ अधिक जानकारी से भरा हो। उपलब्ध डेटा का कुछ हिस्सा साफ़ करने का प्रयास करें। शुरुआत के लिए, आधा चैट हटा दें और देखें कि क्या इससे गेम मास्टर को उत्तर तैयार करने में मदद मिलती है।

कृपया मुझे (Lottarend — इस गेम के लेखक) समर्थन करने पर विचार करें। समर्थन के तरीकों के लिंक अगले संदेश में दिए गए हैं।

खेल का आनंद लें!`,
            "game_starting_donate": "एब्सोल्यूट लेजेंडैरिका के लेखक को धन्यवाद दें:\n\n क्रिप्टोकरेंसी: TSH1v85VbFo6b8gzb2xKcHy7Lk5NYLqVYh (USDT TRC20)\n\nदूसरा तरीका: https://www.donationalerts.com/r/lottarend",
            "game_starting_discord": "डिस्कॉर्ड पर नवीनतम संस्करण और खेल पर चर्चा कर सकते हैं https://discord.gg/pTXcwJuH9h",
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
            "Angelic_halo": "फरिश्ते का निब",
            "Demonic_symbol": "दानव प्रतीक",
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
            "status-effect-none-label": "कोई नहीं",
            "persuasion-label": "प्रभाव",
            "start-prs": "प्रभाव",
            "rebirth-in-another-world": "दूसरे दुनिया में पुनर्जन्म",
            "being-summoned-to-another-world": "दूसरे दुनिया में बुलाया जाना",
            "reincarnation": "पुनर्जन्म",
            "demon-invasion": "दानव आक्रमण",
            "the-end-of-the-world": "दुनिया का अंत",
            "apocalypse": "प्रलय",
            "quest-info-questGiver-label": "क्वेस्ट देने वाला",
            "quest-info-questBackground-label": "पृष्ठभूमि:",
            "quest-info-description-label": "विवरण:",
            "use-thinking-module-label": "उत्तर सोचने वाला मॉड्यूल जोड़ें (टोकन बचाने के लिए बंद करें)। सैद्धांतिक रूप से यह एआई को अधिक बुद्धिमान बनाता है",
            "log-thinking-button-label": "सोच लॉग",
            "persuasion": "प्रभाव",
            "human_desc": "आधुनिक दुनिया का मानव, जो 21वीं सदी में रहता है",
            "superhuman_desc": "सुपरह्यूमन वह व्यक्ति है जिसके पास सुपर-क्षमताएँ हैं जो उसके मन की शक्ति से उत्पन्न होती हैं, जिसने विकासवादी परिवर्तन अनुभव किए हैं",
            "infected_desc": "वह व्यक्ति जो ज़ोंबी वायरस से संक्रमित हुआ है",
            "ratman_desc": "सामान्य चूहों का वंशज जो विकिरण के प्रभाव में उत्परिवर्तित हो गए और बौद्धिकता प्राप्त की। दूर से देखने पर विकृत मानव की तरह दिखता है",
            "ghoul_desc": "वह व्यक्ति जो कभी ज़ोंबी वायरस से संक्रमित था। अपने शरीर में भयावह परिवर्तनों के बावजूद दिमाग को बनाए रखने में सक्षम रहा",
            "mutant_desc": "वह व्यक्ति जिसका शरीर विकिरण के प्रभाव से विभिन्न उत्परिवर्तनों से गुजर चुका है",
            "supermutant_desc": "वह व्यक्ति जिसका शरीर विकिरण के प्रभाव से विशाल और मजबूत हो गया है, लेकिन उसमें अपमानजनक परिवर्तन हो गए हैं",
            "cyborg_desc": "वह मानव जिसमें उसके शरीर में सायबर इम्प्लांट्स शामिल हैं",
            "android_desc": "एक रोबोट जो सिंथेटिक त्वचा से ढका हुआ है और जिसमें मानव जैसे अंग हैं",
            "robot_desc": "एक स्टील की मशीन जो उन्नत कृत्रिम बुद्धिमत्ता से लैस है",
            "gray_desc": "एक एलियन जिसकी त्वचा धूसर है, बड़ी सिर और काले आंखें हैं, जो दूर के ग्रह से पृथ्वी पर आया है",
            "alien_desc": "एक एलियन जो दूर के ग्रह से पृथ्वी पर आया है",
            "hybrid_desc": "एलियन और मानव का हाइब्रिड। दोनों नस्लों के लक्षण रखता है",
            "ancient_desc": "पूर्वजों की एक प्राचीन नस्ल का प्रतिनिधि, जिसने कई हजार वर्षों तक क्रीयोस्लीप में बिताया। उसकी नींद के दौरान आसपास की दुनिया अविश्वसनीय रूप से बदल गई है",
            "survival_kit": `जीवन रक्षा किट`,
            "psionic_headband": `साइओनिक एम्पलीफायर हेडबैंड`,
            "adrenaline_syringe": `संक्रमित की एड्रेनालाईन सिरिंज`,
            "grappling_hook": `खननकर्ता का ग्रैपलिंग हुक`,
            "bone_blade": `घूल का विकिरणित हड्डी की तलवार`,
            "mutant_serum": `अस्थिर म्यूटेंट सीरम`,
            "crude_bonehammer": `सुपरम्यूटेंट का कच्चा हड्डी का हथौड़ा`,
            "hacking_device": `एकीकृत हैकिंग डिवाइस`,
            "skin_repair_paste": `सिंथेटिक त्वचा मरम्मत पेस्ट`,
            "EMP_Generator": `पोर्टेबल ईएमपी जनरेटर`,
            "communication_implant": `टेलीपैथिक संचार इम्प्लांट`,
            "cloaking_device": `एलियन क्लोकिंग डिवाइस`,
            "symbiotic_implant": `एलियन-मानव हाइब्रिड का सहजीवी इम्प्लांट`,
            "ancient_artifact": `प्राचीन फॉररनर कलाकृति`,
            "survival_kit": `जीवन रक्षा किट`,
            "hacker": "हैकर",
            "scout": "स्काउट",
            "bounty_hunter": "बाउंटी हंटर",
            "survivor": "जीवित बचने वाला",
            "raider": "रेडर",
            "bandit": "बैंडिट",
            "wanderer": "भटकने वाला",
            "veteran": "वीटेरन",
            "mercenary": "भाड़े का सैनिक",
            "stalker": "स्टॉकर",
            "citizen": "नागरिक",
            "vault_dweller": "सलामी निवासी",
            "savage": "जंगली",
            "soldier": "सैनिक",
            "engineer": "इंजीनियर",
            "medic": "मेडिक",
            "sniper": "स्नाइपर",
            "virologist": "वायरोलॉजिस्ट",
            "biotechnician": "बायोटेक्नीशियन",
            "reborn": "पुनर्जन्मित",
            "psionic": "प्सायोनिक",
            "telekinetic": "टेलीकिनेटिक",
            "telepath": "टेलीपैथ",
            "pyromancer": "पायरोमांसर",
            "cryomancer": "क्रायोमांसर",
            "mechanized_soldier": "यंत्रीकृत सैनिक",
            "mechanical_guardian": "यांत्रिक संरक्षक",
            "cybernetic_assassin": "साइबरनेटिक हत्यारा",
            "cybernetic_spy": "साइबरनेटिक जासूस",
            "precursor_agent": "प्रीकर्सर एजेंट",
            "precursor_scientist": "प्रीकर्सर वैज्ञानिक",
            "precursor_soldier": "प्रीकर्सर सैनिक",
            "xenomant": "क्सेनोमांट",
            "alien_scout": "एलियन स्काउट",
            "space_architect": "स्पेस आर्किटेक्ट",
            "galactic_explorer": "गैलेक्सिक एक्सप्लोरर",
            "alien_soldier": "एलियन सैनिक",
            "survival_kit": `जीवन रक्षा किट`,
            "hacker_descr": "कंप्यूटर सिस्टम और नेटवर्क को हैक करने का विशेषज्ञ। अपनी क्षमताओं का उपयोग करके जानकारी तक पहुँचने और उपकरणों को नियंत्रित करने के लिए करता है।",
            "scout_descr": "चतुर और गुप्त खुफिया विशेषज्ञ, जो घुसपैठ, सूचना संग्रहण और लक्ष्यों को बिना ध्यान दिए समाप्त करने में माहिर है।",
            "bounty_hunter_descr": "अनुभवी बाउंटी हंटर जो पुरस्कार के लिए अपराधियों का पीछा और गिरफ्तारी करता है। सटीक निशाना साधने वाला और हाथ से लड़ने का मास्टर।",
            "survivor_descr": "अनुभवी जीवित बचने वाला जो पोस्ट-अपोकैलिप्टिक दुनिया की कठोर परिस्थितियों के अनुकूल हो चुका है। संसाधनों को खोजने, आश्रयों का निर्माण करने और खतरों से बचने में माहिर है।",
            "raider_descr": "क्रूर मरोड़ार जो लूट और हिंसा पर निर्भर होकर जीता है। मजबूत और आक्रामक योद्धा, जो दया नहीं जानता।",
            "bandit_descr": "चतुर और चालाक अपराधी जो लूट और डकैती में संलग्न है। कुशलतापूर्वक क्रॉबॉर और लॉकपिक्स का उपयोग करता है।",
            "wanderer_descr": "एकाकी यात्री जो पोस्ट-अपोकैलिप्टिक दुनिया में बेहतर जीवन की तलाश में यात्रा करता है। सहनशील और चतुर, जो किसी भी स्थिति में जीवित रहना जानता है।",
            "veteran_descr": "अनुभवी सैनिक जिसने कई लड़ाइयों से गुजरा है। उत्कृष्ट युद्ध प्रशिक्षण वाला, अनुशासित और शांत मन वाला।",
            "mercenary_descr": "मदन के लिए लड़ने वाला भाड़े का सैनिक। विभिन्न हथियारों और रणनीतियों में निपुण अनुभवी योद्धा।",
            "stalker_descr": "अनाम क्षेत्रों में अनुभवी गाइड। जानकारियाँ इकट्ठा करने और कीमती कलाकृतियों को खोजने में माहिर।",
            "citizen_descr": "कुछ बची हुई शहरों में से एक का निवासी। समाज में रहने के लिए आवश्यक बुनियादी कौशल और ज्ञान वाला।",
            "vault_dweller_descr": "बंकर से निकला, भूमिगत बंकर में जीवन के लिए अनुकूलित। तकनीकी कौशल और पूर्व युद्ध दुनिया के ज्ञान वाला।",
            "savage_descr": "सिविलाइजेशन से दूर रहने वाला जंगली। मजबूत और चतुर शिकारी, जो आदिम प्रवृत्तियों और हथियारों पर निर्भर है।",
            "soldier_descr": "पेशेवर सैन्य, जिसे किसी भी स्थिति में लड़ने के लिए प्रशिक्षित किया गया है। अनुशासित और सटीक निशाना साधने वाला।",
            "engineer_descr": "तकनीकी विशेषज्ञ, जो विभिन्न उपकरणों को बनाने और मरम्मत करने में सक्षम है। पोस्ट-अपोकैलिप्टिक दुनिया में मूल्यवान सहयोगी।",
            "medic_descr": "मैदान में डॉक्टर, जो घावों और बीमारियों का इलाज करने में सक्षम है। किसी भी समूह के जीवित बचने वालों के लिए अनिवार्य सदस्य।",
            "sniper_descr": "सटीक निशाना साधने वाला, जो लंबे दूरी से लक्ष्यों को समाप्त कर सकता है। धैर्यवान और सतर्क योद्धा।",
            "virologist_descr": "वायरस का अध्ययन करने वाला वैज्ञानिक। टीके और एंटीवायरल दवाओं का विकास करता है।",
            "biotechnician_descr": "जीवित जीवों के साथ काम करने वाला वैज्ञानिक। आनुवंशिक संशोधनों को बनाने और कृत्रिम ऊतकों को उगाने में सक्षम।",
            "reborn_descr": "पुनर्जन्मित एक संक्रमित व्यक्ति है जिसने आंशिक रूप से वायरस को मात दी है और अपनी समझदारी बनाए रखी है। वे सामान्य लोगों की तुलना में मजबूत और अधिक सहनशील हैं, और म्युटेट हो सकते हैं लेकिन सड़ते रहते हैं।",
            "psionic_descr": "प्सायोनिक क्षमताओं वाला व्यक्ति। अन्य प्राणियों के मन पर प्रभाव डाल सकता है और प्सायोनिक ऊर्जा को नियंत्रित कर सकता है।",
            "telekinetic_descr": "टेलीकिनेटिक क्षमताओं वाला प्सायोनिक। सोच की शक्ति से वस्तुओं को स्थानांतरित कर सकता है।",
            "telepath_descr": "टेलीपैथी क्षमताओं वाला प्सायोनिक। मस्तिष्क पढ़ सकता है और दूर से अन्य प्राणियों के साथ संवाद कर सकता है।",
            "pyromancer_descr": "पायरोकिनेटिक क्षमताओं वाला प्सायोनिक। सोच की शक्ति से आग को नियंत्रित कर सकता है।",
            "cryomancer_descr": "क्रायोकाइनेसी क्षमताओं वाला प्सायोनिक। ठंड को नियंत्रित कर सकता है और बर्फ बना सकता है।",
            "mechanized_soldier_descr": "एक्सोस्केलेटन में भारी सशस्त्र सैनिक। उच्च फायरपावर और सुरक्षा वाला।",
            "mechanical_guardian_descr": "क्षेत्र या वस्तु की रक्षा के लिए प्रोग्राम किया गया रोबोट गार्डियन। उन्नत निगरानी प्रणाली और शक्तिशाली हथियारों से लैस।",
            "cybernetic_assassin_descr": "साइबरनेटिक हत्यारा, जो चुपके से घुसपैठ और लक्ष्य समाप्त करने के लिए संशोधित है। अंतर्निहित हथियारों और उन्नत सेंसरों से लैस।",
            "cybernetic_spy_descr": "साइबरनेटिक जासूस, जो सूचना संग्रह और वध के लिए संशोधित है। अदृश्यता जनरेटर और होलोग्राफिक प्रोजेक्टर से लैस।",
            "precursor_agent_descr": "प्रिकर्सर एजेंट, जो उन्नत तकनीकों और ज्ञान से लैस है। खुफिया, वध और खतरों को समाप्त करने में विशेषज्ञ।",
            "precursor_scientist_descr": "प्रिकर्सर वैज्ञानिक, जिनके पास विभिन्न वैज्ञानिक क्षेत्रों में व्यापक ज्ञान है। उन्नत उपकरणों को बनाने और उपयोग करने में सक्षम।",
            "precursor_soldier_descr": "प्रिकर्सर सैनिक, जो उच्च तकनीक के हथियारों और कवच से सुसज्जित है। किसी भी स्थिति में लड़ने के लिए प्रशिक्षित।",
            "xenomant_descr": "क्सेनोमांट, जो एक एलियन नस्ल के रहस्यमय कलाकृतियों और तकनीकों में माहिर है। सुरक्षा, हमला और खोज के लिए उनका उपयोग कर सकता है।",
            "alien_scout_descr": "एलियन स्काउट, जो नए ग्रहों का अन्वेषण और सूचना संग्रह में विशेषज्ञ है। उन्नत छद्मावरण और स्कैनिंग तकनीकों से लैस।",
            "space_architect_descr": "स्पेस आर्किटेक्ट, जो सोच की शक्ति से अंतरिक्ष और पदार्थ को बदलने में सक्षम है। वस्तुओं को बना और नष्ट कर सकता है, साथ ही आधार और संरचनाएं भी बना सकता है।",
            "galactic_explorer_descr": "गैलेक्सिक एक्सप्लोरर, जो अंतरिक्ष का अध्ययन करने और नई जीवन रूपों की खोज करने के लिए समर्पित है। व्यापक ज्ञान और उन्नत तकनीकों से लैस।",
            "alien_soldier_descr": "एलियन सैनिक, जो उन्नत हथियार और तकनीकों का उपयोग करके लड़ने के लिए प्रशिक्षित है। अनुशासित और प्रभावी योद्धा।",
            "survival_kit": `जीवन रक्षा किट`,
            "hacker_1": "हैकिंग इंटरफेस",
            "hacker_2": "केपीके",
            "hacker_3": "ईएमपी-ग्रेनेड",
            "hacker_4": "नेटवर्क स्कैनर",
            "scout_1": "स्टेल्थ सूट",
            "scout_2": "लॉकपिक सेट",
            "scout_3": "प्रतिकास मास्क",
            "scout_4": "गुलाम बंद पिस्तौल",
            "bounty_hunter_1": "दो पिस्तौल",
            "bounty_hunter_2": "लक्ष्य ट्रैकिंग डिवाइस",
            "bounty_hunter_3": "ऊर्जा ग्रिड",
            "bounty_hunter_4": "युद्ध चाकू",
            "survivor_1": "सस्ता खुरपी",
            "survivor_2": "स्वनिर्मित कवच",
            "survivor_3": "कैमौफ्लेज़ टेंट",
            "survivor_4": "शिकार चाकू",
            "raider_1": "स्वनिर्मित राइफल",
            "raider_2": "स्पाइक्स वाला क्लब",
            "raider_3": "पेट्रोल की बोतल",
            "raider_4": "पसंदीदा लाइटर",
            "bandit_1": "भारी कुंजी",
            "bandit_2": "बैंडिट मास्क",
            "bandit_3": "चमड़े की जैकेट",
            "bandit_4": "लॉकपिक सेट",
            "wanderer_1": "यूनिवर्सल बैकपैक",
            "wanderer_2": "कंपीक टेंट",
            "wanderer_3": "खेल बॉलिस्ट",
            "wanderer_4": "बहुउद्देश्यीय चाकू",
            "veteran_1": "इनाम पिस्तौल",
            "veteran_2": "पुराना बुलेटप्रूफ वेस्ट",
            "veteran_3": "टैक्टिकल बेल्ट",
            "veteran_4": "मेडिकल किट",
            "mercenary_1": "पिस्तौल",
            "mercenary_2": "स्नाइपर राइफल",
            "mercenary_3": "युद्ध हेलमेट",
            "mercenary_4": "डायनामाइट",
            "stalker_1": "एनॉमली डिटेक्टर",
            "stalker_2": "संशोधित गैस मास्क",
            "stalker_3": "असॉल्ट राइफल",
            "stalker_4": "ग्रेपलिंग हुक के साथ रस्सी",
            "citizen_1": "नागरिकता दस्तावेज",
            "citizen_2": "फोन",
            "citizen_3": "सामग्री बैग",
            "citizen_4": "उपयोगी चाकू",
            "vault_dweller_1": "बहुउद्देश्यीय उपकरण",
            "vault_dweller_2": "जल मॉड्यूल",
            "vault_dweller_3": "संशोधित पिस्तौल",
            "vault_dweller_4": "अड्डे से संचार मॉड्यूल",
            "savage_1": "हड्डी की कुल्हाड़ी",
            "savage_2": "हड्डी का अमुलेट",
            "savage_3": "शिकार ट्रैप",
            "savage_4": "स्वनिर्मित धनुष",
            "soldier_1": "स्वचालित राइफल",
            "soldier_2": "गोला-बारूद",
            "soldier_3": "ग्रेनेड",
            "soldier_4": "बुलेटप्रूफ वेस्ट",
            "engineer_1": "उपकरण सेट",
            "engineer_2": "उड़ने वाला ड्रोन",
            "engineer_3": "वेल्डिंग उपकरण",
            "engineer_4": "ब्लूप्रिंट स्कैनर",
            "medic_1": "प्राथमिक चिकित्सा किट",
            "medic_2": "दर्द निवारक",
            "medic_3": "पट्टे",
            "medic_4": "पोर्टेबल डेफिब्रिलेटर",
            "sniper_1": "स्नाइपर राइफल",
            "sniper_2": "दोहरे चश्मे",
            "sniper_3": "कैमौफ्लेज़ कोट",
            "sniper_4": "युद्ध चाकू",
            "virologist_1": "जीवविज्ञान विश्लेषक",
            "virologist_2": "एंटीवायरल दवाएं",
            "virologist_3": "वायरस अनुसंधान स्टेशन",
            "virologist_4": "संक्रमित नमूने",
            "biotechnician_1": "आनुवंशिक संशोधक",
            "biotechnician_2": "बायोसिंथेसाइज़र",
            "biotechnician_3": "प्रयोगशाला किट",
            "biotechnician_4": "प्रयोगात्मक सीरम",
            "reborn_1": "रिबॉर्न का एंटी-रॉट सीरम",
            "reborn_2": "सुदृढीकरण सीरम",
            "reborn_3": "नियंत्रित उत्परिवर्तन सीरम",
            "reborn_4": "अनियंत्रित उत्परिवर्तन सीरम",
            "psionic_1": "मस्तिष्क एम्पलीफायर",
            "psionic_2": "टेलीपैथिक डिवाइस",
            "psionic_3": "फोकसिंग क्रिस्टल",
            "psionic_4": "प्सी-एम्पलीफायर",
            "telekinetic_1": "केंद्रित करने वाला हूप",
            "telekinetic_2": "फ्लोटिंग मिनी-प्लेटफ़ॉर्म",
            "telekinetic_3": "एंटी-ग्रेविटी दस्ताने",
            "telekinetic_4": "फोकसिंग क्रिस्टल",
            "telepath_1": "फोकसिंग रिंग",
            "telepath_2": "सोच पढ़ने वाला हूप",
            "telepath_3": "विचार संचार अमुलेट",
            "telepath_4": "संक्रमित नियंत्रण स्टाफ",
            "pyromancer_1": "मोलोटोव कॉकटेल",
            "pyromancer_2": "पायरोकिनेटिक स्टाफ",
            "pyromancer_3": "पायरो-म्युटेशन सीरम",
            "pyromancer_4": "आग प्रतिरोधी सूट",
            "cryomancer_1": "ध्रुवीय थर्मल सूट",
            "cryomancer_2": "तरल नाइट्रोजन वाला थर्मस",
            "cryomancer_3": "क्रायो-म्युटेशन सीरम",
            "cryomancer_4": "क्रायो बैटरी",
            "mechanized_soldier_1": "एक्सोस्केलेटन",
            "mechanized_soldier_2": "शक्तिशाली शॉटगन",
            "mechanized_soldier_3": "ऊर्जा ढाल",
            "mechanized_soldier_4": "मरम्मत किट",
            "mechanical_guardian_1": "उन्नत निगरानी मॉड्यूल",
            "mechanical_guardian_2": "मरम्मत मॉड्यूल",
            "mechanical_guardian_3": "सुरक्षात्मक पैनल",
            "mechanical_guardian_4": "इंटीग्रेटेड मशीन गन",
            "cybernetic_assassin_1": "छुपा हुआ ब्लेड",
            "cybernetic_assassin_2": "नैनो-त्वरण कॉकटेल",
            "cybernetic_assassin_3": "ध्वनि दमन प्रणाली",
            "cybernetic_assassin_4": "ऑप्टिकल नाइट विजन सेंसर",
            "cybernetic_spy_1": "गुमनामी जनरेटर",
            "cybernetic_spy_2": "होलोग्राफिक प्रोजेक्टर",
            "cybernetic_spy_3": "साइबरनेटिक लॉकपिक",
            "cybernetic_spy_4": "विस्फोटक नैनो-व्हिप",
            "precursor_agent_1": "प्लाज्मा पिस्तौल",
            "precursor_agent_2": "टेलीपोर्टेशन डिवाइस",
            "precursor_agent_3": "जासूसी उपकरण किट",
            "precursor_agent_4": "पोर्टेबल होलोग्राफिक प्रोजेक्टर",
            "precursor_scientist_1": "यूनिवर्सल स्कैनर",
            "precursor_scientist_2": "मॉलिक्यूलर सिंथेसिस स्टेशन",
            "precursor_scientist_3": "ऊर्जा ढाल",
            "precursor_scientist_4": "प्लाज्मा कटर",
            "precursor_soldier_1": "ऊर्जा लेजर कार्बाइन",
            "precursor_soldier_2": "प्रीकर्सर फोर्स शील्ड",
            "precursor_soldier_3": "साइबरनेटिक इंहांस्मेंट",
            "precursor_soldier_4": "ग्रैविटी जनरेटर",
            "xenomant_1": "एलियन आर्टिफैक्ट",
            "xenomant_2": "पोर्टेबल टेलीपोर्टर",
            "xenomant_3": "होलोग्राफिक शील्ड",
            "xenomant_4": "ऊर्जा तलवार",
            "alien_scout_1": "गुरुत्वाकर्षण बूट्स",
            "alien_scout_2": "पोर्टेबल टेलीपोर्टर",
            "alien_scout_3": "छिपे हुए वस्तुओं का स्कैनर",
            "alien_scout_4": "लेजर पिस्तौल",
            "space_architect_1": "गुरुत्वाकर्षण प्रोजेक्टर",
            "space_architect_2": "मैटेरियलाइजिंग स्पेससूट",
            "space_architect_3": "स्पेस मैप",
            "space_architect_4": "प्लैनेटरी स्टेबलाइज़र",
            "galactic_explorer_1": "मल्टीस्पेक्ट्रल स्कैनर",
            "galactic_explorer_2": "जेनो ट्रांसलेटर",
            "galactic_explorer_3": "बायोलैबोरेटरी मॉड्यूल",
            "galactic_explorer_4": "पर्सनल ड्रोन असिस्टेंट",
            "alien_soldier_1": "मैग्नेटिक रेल कार्बाइन",
            "alien_soldier_2": "नैनोस्ट्रक्चर्ड शील्ड",
            "alien_soldier_3": "इंटीग्रेटेड बायोनिक सिस्टम",
            "alien_soldier_4": "टैक्टिकल होलोग्राफिक कॉम्पेनियन",
            "superhuman": "सुपरह्यूमन",
            "infected": "जंकृत",
            "ratman": "चूहे का मानव",
            "ghoul": "गूल",
            "mutant": "म्यूटेंट",
            "supermutant": "सुपर-म्यूटेंट",
            "cyborg": "साइबोर्ग",
            "android": "एंड्रॉइड",
            "robot": "रोबोट",
            "gray": "ग्रे",
            "alien": "एलियन",
            "hybrid": "हाइब्रिड",
            "ancient": "प्राचीन",
            "total-weight-label": "कुल वजन (किलोग्राम):",
            "tooltip-max-weight": "प्रत्येक मोड़ के अंत में जीएम द्वारा गणना की जाती है। अधिकतम वजन = (शक्ति + सहनशक्ति) * 3 + 10",
            "max-weight-label": "अधिकतम वजन (किलोग्राम):",
            "use-weight-control-label": "खेल में वजन का उपयोग करें",
            "maximum-weight-exceeded-label": "पात्र का अधिकतम वजन पार कर गया! निर्दिष्ट आइटमों को कार्ट में स्थानांतरित कर दिया गया है: ",
            "statsGroup-weight-button-label": "वजन",
            "tooltip-inventory-basket": "इन्वेंटरी से हटाए गए आइटम यहां रखे जाते हैं। प्रत्येक टर्न के अंत में स्वचालित रूप से साफ हो जाता है। आप उन्हें गायब होने से पहले पुनर्स्थापित कर सकते हैं।",
            "inventory-basket-button-label": "बास्केट (इन्वेंटरी)",
            "inventory-restore": "पुनर्स्थापित करें",
            "tooltip-critical-weight": "अधिकतम वजन को पार करने पर, पात्र कुछ समय के लिए इन्वेंटरी में आइटम प्राप्त कर सकता है, लेकिन वह अधिक भारित हो जाता है। अधिक भारित पात्र तेजी से ऊर्जा खो देता है। क्रिटिकल वजन को पार करने के बाद, पात्र नए आइटम नहीं उठा सकता।",
            "critical-weight-label": "क्रिटिकल वजन (किलोग्राम):",
            "weight-status-label": "स्थिति:",
            "weight-status-value-normal": "सामान्य",
            "weight-status-value-bad": "अधिक भारित",
            "first_contact": "पहला संपर्क",
            "zero_patient": "शून्य रोगी",
            "doomsday": "प्रलय दिवस",
            "experiment": "प्रयोग",
            "awakening_ancients": "प्राचीनों की जागृति",
            "call_from_space": "अंतरिक्ष से आह्वान",
            "infected_city": "संक्रमित शहर",
            "dead_zone": "मृत क्षेत्र",
            "anomalous_territory": "विसंगत क्षेत्र",
            "underground_world": "भूमिगत दुनिया",
            "ruins_megapolis": "मेगापोलिस के खंडहर",
            "mutant_lair": "म्यूटेंट का ठिकाना",
            "forgotten_laboratory": "भुला हुआ प्रयोगशाला",
            "fight_with_horde": "ढेर के साथ लड़ाई",
            "vault_life": "भंडार में जीवन",
            "besieged_city": "घिरे हुए शहर",
            "nomadic_life": "यात्रिक जीवन",
            "pirate_haven": "डकैत शरण",
            "wild_tribe": "जंगली जनजाति",
            "trade_caravan": "व्यापार कारवां",
            "last_city": "अंतिम शहर",
            "gang_war": "गैंग युद्ध",
            "resistance": "प्रतिरोध",
            "bounty_hunters": "इनाम खोजने वाले शिकारी",
            "wasteland_mercenaries": "बंजर भूमि के भाड़े के सैनिक",
            "battle_for_resources": "संसाधनों के लिए लड़ाई",
            "ideology_conflict": "विचारधारा संघर्ष",
            "cure_search": "इलाज खोज",
            "precursors_secret": "पूर्ववर्तियों का रहस्य",
            "alien_first_contact": "एलियंस के साथ पहला संपर्क",
            "paradise_search": "स्वर्ग की खोज",
            "mutant_origin": "म्यूटेंट की उत्पत्ति",
            "vault_secrets": "भंडार के रहस्य",
            "star_ark": "तारा कंकाल",
            "cyber_rebels": "साइबर विद्रोही",
            "machine_uprising": "मशीन विद्रोह",
            "mech_wars": "मेच युद्ध",
            "engineer_guild": "इंजीनियर गिल्ड",
            "cyber_city": "साइबर शहर",
            "psionic_war": "साइओनिक युद्ध",
            "psionic_school": "साइओनिक स्कूल",
            "psionic_hunt": "साइओनिक शिकार",
            "psy_defense": "साइ-रक्षा",
            "alien_invasion": "विदेशी आक्रमण",
            "galactic_diplomacy": "गैलेक्टिक कूटनीति",
            "star_patrol": "तारा गश्त",
            "war_of_the_worlds": "दुनिया की लड़ाई",
            "artifact_search": "पुरातत्व खोज",
            "hospital_outbreak": "अस्पताल का प्रकोप",
            "shopping_mall_siege": "शॉपिंग मॉल पर आक्रमण",
            "prison_break": "कैदी की भागना",
            "highrise_trap": "ऊंची इमारत की जाल",
            "subway_escape": "मेट्रो से भागना",
            "ground_zero": "ग्राउंड जीरो",
            "patient_zero_hunt": "शून्य रोगी की खोज",
            "the_last_broadcast": "आखिरी प्रसारण",
            "evacuation_failed": "निकासी असफल",
            "first_bite": "पहली काट",
            "the_fall": "पतन",
            "scorched_earth": "जलती धरती",
            "water_wars": "पानी की लड़ाइयां",
            "beneath_the_sand": "रेत के नीचे",
            "fortress_of_madness": "पागलपन का किला",
            "ghost_ship": "भूतिया जहाज",
            "the_frozen_north": "बर्फीला उत्तर",
            "jungle_hunt": "जंगल में शिकार",
            "sky_pirates": "आसमान के डाकू",
            "mutant_island": "म्यूटेंट द्वीप",
            "lost_colony": "खोई हुई कॉलोनी",
            "first_contact_desc": "एलियन का आक्रमण शुरू हो चुका है।",
            "zero_patient_desc": "ज़ोंबी वायरस का फैलाव शुरू होता है।",
            "doomsday_desc": "परमाणु युद्ध की शुरुआत या उल्कापिंड का गिरना।",
            "experiment_desc": "एक विफल वैज्ञानिक प्रयोग ने नियंत्रण खो दिया है।",
            "awakening_ancients_desc": "प्राचीनों का सैकड़ों वर्षों का शीतनिद्रा समाप्त — एक उन्नत पूर्वज जाति। बदली हुई दुनिया में उनकी वापसी।",
            "call_from_space_desc": "पृथ्वी पर एलियन के पहले टोही जहाज़ का आगमन।",
            "infected_city_desc": "ज़ोंबी महामारी से ग्रस्त शहर में जीवित रहने की कोशिश कीजिए।",
            "dead_zone_desc": "रेडियोधर्मी उजाड़ में यात्रा।",
            "anomalous_territory_desc": "विकृतियों और विचित्रताओं से भरी क्षेत्र की खोज करें।",
            "underground_world_desc": "एक परित्यक्त मेट्रो या बंकर प्रणाली में जीवनयापन।",
            "ruins_megapolis_desc": "एक उजड़े हुए महानगर में संसाधनों की खोज करें।",
            "mutant_lair_desc": "खतरनाक म्यूटेंट की कॉलोनी के पास जीवित रहने की कोशिश करें।",
            "forgotten_laboratory_desc": "एक परित्यक्त वैज्ञानिक प्रयोगशाला की खोज और अध्ययन करें।",
            "fight_with_horde_desc": "एक बस्ती को पागल संक्रमितों के हमले से बचाएं।",
            "vault_life_desc": "भूमिगत बंकर में रोज़मर्रा की ज़िंदगी, आंतरिक संघर्षों का सामना।",
            "besieged_city_desc": "सभ्यता के अंतिम दुर्ग की बाहरी खतरों से रक्षा करें।",
            "nomadic_life_desc": "बचे हुए लोगों के एक समूह के साथ नए ठिकाने की तलाश में भटकें।",
            "pirate_haven_desc": "जहाज़ों के मलबे पर रहने वाले समुद्री डाकुओं और तस्करों के बीच ज़िंदगी।",
            "wild_tribe_desc": "एक आदिम क़बीले में जीवित रहें, जहाँ सभ्यता से टकराव संभव है।",
            "trade_caravan_desc": "खतरनाक क्षेत्रों से गुज़रने वाले व्यापार कारवां की रक्षा और निगरानी करें।",
            "last_city_desc": "आख़िरी शहर को लुटेरों और म्यूटेंट्स से सुरक्षित रखें।",
            "gang_war_desc": "लुटेरों के गिरोहों के बीच सत्ता-संघर्ष।",
            "resistance_desc": "एक तानाशाही व्यवस्था के विरुद्ध भूमिगत संघर्ष।",
            "bounty_hunters_desc": "खतरनाक अपराधियों को पकड़ने के लिए जोखिमभरे कॉन्ट्रैक्ट लें।",
            "wasteland_mercenaries_desc": "भाड़े के सैनिकों के रूप में कार्य करें, क़बीले विवादों को सुलझाएँ।",
            "battle_for_resources_desc": "क़ीमती संसाधनों पर नियंत्रण पाने के लिए बस्तियों में टकराव।",
            "ideology_conflict_desc": "अलग-अलग विचारधाराओं वाली गुटों के बीच संघर्ष।",
            "cure_search_desc": "ज़ोंबी वायरस या अन्य तबाही का इलाज खोजने की कोशिश।",
            "precursors_secret_desc": "प्राचीन सभ्यता के खंडहरों और कलाकृतियों की खोज करें।",
            "alien_first_contact_desc": "एलियन के साथ राजनयिक मिशन या जासूसी अभियान।",
            "paradise_search_desc": "रेत भूमि में फैली अफवाहों वाले किसी काल्पनिक सुरक्षित स्थान की तलाश।",
            "mutant_origin_desc": "म्यूटेशन के कारणों की जांच करें और उन्हें उलटने का उपाय खोजें।",
            "vault_secrets_desc": "बंकरों में किए गए गुप्त प्रयोगों का पर्दाफाश करें।",
            "star_ark_desc": "बचा हुआ अंतरिक्ष यान ढूँढें और उसे लॉन्च करें।",
            "cyber_rebels_desc": "साइबर-टेक्नोलॉजी पर क़ब्ज़ा जमाए कॉर्पोरेशन के ख़िलाफ़ लड़ाई।",
            "machine_uprising_desc": "विद्रोही रोबोट और AI के ख़िलाफ़ युद्ध।",
            "mech_wars_desc": "विशालकाय रोबोटों और युद्ध मशीनों के बीच संघर्ष।",
            "engineer_guild_desc": "दुर्लभ टेक्नोलॉजी के लिए इंजीनियर समूहों में प्रतिद्वंद्विता।",
            "cyber_city_desc": "एक कृत्रिम बुद्धिमत्ता द्वारा संचालित शहर में जीवन।",
            "psionic_war_desc": "मानसिक शक्तियाँ रखने वालों और उनसे डरने वालों के बीच टकराव।",
            "psionic_school_desc": "मानसिक क्षमताओं का प्रशिक्षण और विकास।",
            "psionic_hunt_desc": "खतरनाक मानसिक शक्तियों वाले व्यक्तियों का पता लगाना और उन्हें बेअसर करना।",
            "psy_defense_desc": "मानसिक हमलों और नियंत्रण से बचाव।",
            "alien_invasion_desc": "पृथ्वी की एक व्यापक एलियन आक्रमण से रक्षा करना।",
            "galactic_diplomacy_desc": "एलियन प्रजातियों से संपर्क स्थापित करें और संबंध विकसित करें।",
            "star_patrol_desc": "अंतरिक्ष में गश्त करके खतरों को रोकें।",
            "war_of_the_worlds_desc": "कई ग्रहों के बीच छिड़ी विशाल जंग में किसी एक पक्ष का साथ दें।",
            "artifact_search_desc": "एलियन सभ्यता की कलाकृतियों को खोजें और उनका अध्ययन करें।",
            "hospital_outbreak_desc": "आप संक्रमितों से भरे एक अस्पताल में फँस गए हैं। बहुत देर होने से पहले रास्ता निकालें।",
            "shopping_mall_siege_desc": "बचे हुए लोगों का एक समूह शॉपिंग मॉल में छिपा है। ज़ोंबी की लहरों से रक्षा करें और बाहर निकलने का रास्ता ढूँढें।",
            "prison_break_desc": "ज़ोंबी वायरस जेल तक पहुँचा। क़ैदियों और पहरेदारों को एक साथ मिलकर भागना होगा।",
            "highrise_trap_desc": "आप गगनचुंबी इमारत की ऊपरी मंज़िलों में फँसे हैं। ज़ोंबी क़रीब आ रहे हैं और लिफ़्ट काम नहीं कर रही। नीचे उतरते हुए अपनी जान बचाएँ।",
            "subway_escape_desc": "आपने सुरक्षित ठिकाने की तलाश में मेट्रो की शरण ली, पर वहाँ सुरंगें ज़ोंबी से भरी हैं। अगली स्टेशन तक पहुँचने की कोशिश करें।",
            "ground_zero_desc": "आप महामारी की शुरुआत के प्रत्यक्षदर्शी हैं। शहर अराजकता में डूब रहा है। जीवित बचिए और शहर से बाहर निकलिए।",
            "patient_zero_hunt_desc": "सरकारें शून्य रोगी को खोज रही हैं ताकि वायरस को रोका जा सके। आप भी उन्हें खोज निकालने वालों में से एक हैं।",
            "the_last_broadcast_desc": "आप एक रेडियो होस्ट हैं जो घिरे हुए स्टूडियो से प्रसारण कर रहे हैं। जब तक हो सके, अन्य बचे लोगों को जानकारी देते रहें।",
            "evacuation_failed_desc": "निकासी योजना फेल हो गई। हेलीकॉप्टर जा चुके हैं, आपको ज़ोंबियों ने घेर लिया है। कोई दूसरा रास्ता खोजें।",
            "first_bite_desc": "आपको काटा गया है। थोड़ा समय बचा है—इलाज खोजें या अपनी नियति मान लें।",
            "the_fall_desc": "आप एक महानगर के निवासी हैं जिसे अभी-अभी ज़ोंबी वायरस के बारे में पता चला है। शहर जल रहा है, सड़कों पर दहशत है—अपने परिवार को बचाएँ।",
            "scorched_earth_desc": "परमाणु युद्ध के बाद पृथ्वी की सतह जलकर वीरान हो गई है। रेडिएशन से बचते हुए कम संसाधनों के लिए संघर्ष करें।",
            "water_wars_desc": "एक ऐसी दुनिया में जहाँ साफ़ पानी सोने के बराबर है, अपनी बस्ती के लिए जलस्रोत पाना या बचाना अनिवार्य है।",
            "beneath_the_sand_desc": "रेगिस्तान की रेतों के नीचे छिपी प्राचीन सभ्यता के खंडहर हैं, जो ख़ज़ाने और खतरों से भरे हैं। रेत के कीड़ों और जालों से सावधान रहें।",
            "fortress_of_madness_desc": "एक बस्ती का नेता पागल हो चुका है और उसने अपने शहर को दुर्गम क़िले में बदल दिया है। जनता को मुक्त कराने के लिए उसे हटाएँ।",
            "ghost_ship_desc": "आप एक भूतिया जहाज पर जागते हैं जो समुद्र में भटक रहा है। उसके दल का रहस्य सुलझाइए और लौटने का रास्ता खोजें।",
            "the_frozen_north_desc": "उत्तर की भूमि बर्फ़ से जमी हुई है। कट्टर ठंड और विचित्र जीवों से बचते हुए जीवित रहें।",
            "jungle_hunt_desc": "घने जंगल ख़तरनाक म्यूटेंट, विषैले पौधों और प्राचीन जालों से भरे हुए हैं। एक खोई हुई कलाकृति की खोज में अभियान चलाएँ।",
            "sky_pirates_desc": "एक हवाई डाकू बनिए, जो एक विशाल एयरशिप में आसमान में सफ़र करता है। दूसरों से लड़ें, उड़ते शहरों से व्यापार करें और तैरते द्वीपों की खोज करें।",
            "mutant_island_desc": "आप एक द्वीप पर फँस गए हैं जहाँ एक म्यूटेंट क़बीला रहता है। उनसे मित्रता करें या वहाँ से भागने का प्रयास करें।",
            "lost_colony_desc": "आप एक अंतरिक्ष यान के दल के सदस्य हैं जो ज़ोंबी वायरस से ग्रस्त पृथ्वी पर दुर्घटनाग्रस्त हो गया। जीवित बचे लोगों को ढूँढें और नए बस्ती का निर्माण करें, संक्रमितों की भीड़ से लड़ते हुए।",
            "character-post-apocalyptic-name": "पात्र का नाम दर्ज करें",
            "post-apocalypse-race-message-label": "जाति का विवरण:",
            "post-apocalypse-class-message-label": "क्लास का विवरण:",
            "tooltip-post-apocalypse-rpg": "यदि स्लाइडर लाल रंग का है, तो यह सक्षम है। RPG - गेमिंग मोड है। RPG मोड में गेमप्ले चरित्र विकास में निहित है, और कौशल और इन्वेंटरी महत्वपूर्ण हैं। यदि अक्षम है, तो खेल Roleplay मोड में होता है, जो एक रोचक कथा बनाने पर केंद्रित होता है, और कौशल और इन्वेंटरी द्वितीयक महत्व रखते हैं।",
            "post-apocalypse-tooltip-noMagic": "यदि सक्षम है (लाल रंग), तो गेममास्टर बिना जादू और केवल यथार्थवादी क्षमताओं के साथ दुनिया बनाता है। यदि अक्षम है, तो दुनिया में जादू और अवास्तविक क्षमताएं होंगी।",
            "post-apocalypse-nonmagic-mode-name": "दुनिया में जादू नहीं है",
            "create-character-post-apocalyptic": "खेल शुरू करें",
            "random-character-post-apocalyptic": "रैंडम पात्र",
            "load-character-post-apocalyptic": "ऑटोसैव लोड करें",
            "load-savefile-post-apocalyptic": "फाइल लोड करें",
            "my-game-post-apocalyptic": "अपना सेटिंग",
            "ai-provider-label4": "आईए प्रदाता",
            "ai-none4-label": "कुछ भी नहीं चुना",
            "ai-model-label4": "आईए मॉडल",
            "ai-model4": "आईए मॉडल का नाम दर्ज करें",
            "api-key-label4": "आपकी API कुंजी",
            "api-key-button4": "10 सेकंड के लिए दिखाएँ",
            "api-key4": "सुरक्षा कारणों से सुनिश्चित करें कि आप कम उपयोग सीमा वाली API कुंजी का उपयोग कर रहे हैं",
            "additional-settings-label4": "आप दाहिनी ओर के ड्रॉपडाउन पैनल में अतिरिक्त सेटिंग्स देख सकते हैं। सेटिंग्स पैनल तक पहुंचने के लिए स्क्रीन के निचले दाएं कोने में बटन पर क्लिक करें।",
            "post-apocalypse-campaign-message-label": "अभियान का विवरण:",
            "post-apocalyptic-game": "त्वरित खेल - पोस्ट-अपोकैलिप्सिस",
            "create-character-post-apocalyptic-label": "अपना पात्र बनाएँ",
            "weight-reduction-label": "सामग्री के वजन में कमी",
            "thinking-module-iterations-label": "प्रतिक्रिया पर विचार करने के लिए उत्तर-विचार मॉड्यूल द्वारा की जाने वाली प्रयासों की संख्या।",
            "use-literary-prompt-label": "गेम मास्टर साहित्यिक शैली में लिखने का प्रयास करेगा",
            "use-erotic-prompt-label": "खेल में 21+ सामग्री की अनुमति दें",
            "abort-error-message": "खिलाड़ी द्वारा अनुरोध रद्द कर दिया गया",
            "common-error-message": "अनुरोध के दौरान त्रुटि:",
            "cancel-button": "रद्द करें",
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
            "max-gm-symbols": "20000 standardmäßig",
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
            "tooltip-race": `Die Rasse beeinflusst den Startort, die Generierung von Rassenfähigkeiten, die Handlung und die anfänglichen Boni für Fähigkeiten und Gegenstände:

Mensch: Glück +2, Handel +1, Wahrnehmung +1, Weisheit -1, Intelligenz -1, Universelles Werkzeug

Elf: Geschicklichkeit +2, Geschwindigkeit +1, Attraktivität +1, Stärke -1, Ausdauer -1, Elfenumhang

Zwerg: Handel +2, Stärke +1, Ausdauer +1, Geschicklichkeit -1, Geschwindigkeit -1, Zwergenbier

Ork: Stärke +3, Ausdauer +2, Intelligenz -1, Weisheit -1, Attraktivität -1, Orkische Kampfbemalung

Echse: Ausdauer +2, Geschwindigkeit +1, Attraktivität -1, Schuppenöl

Vampir: Wahrnehmung +1, Attraktivität +1, Geschicklichkeit +1, Glück -1, Blutfläschchen

Golem: Stärke +3, Ausdauer +2, Intelligenz -1, Attraktivität -1, Weisheit -1, Elementarkern

Engel: Stärke +1, Attraktivität +1, Weisheit +1, Handel -1, Engelsnimbus

Dämon: Geschicklichkeit +1, Attraktivität +2, Überzeugung +1, Weisheit -1, Glück -1, Dämonensymbol`,
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
            "status-purposes-label": "Mögliche Zwecke",
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
            "angel": "Engel",
            "demon": "Dämon",
            "no-choosed-race": "Rasse wählen",

            "female": "Weiblich",
            "male": "Männlich",
            "no-choosed-gender": "Geschlecht wählen",

            //not interface
            "item_notepad": "Notizbuch für Notizen",
            "item_notepad_description": "Notizbuch für Notizen",
            "game_starting_description": `Willkommen in Absolut Legendaria, Abenteurer! Bitte lies dir die folgenden Informationen durch...

Dies ist ein textbasiertes Rollenspiel mit LLM. Du kannst deine Aktion in das Textfeld unten eingeben. Das neuronale Netzwerk wird deine Antwort verarbeiten und Anweisungen senden, anhand derer die Spieloberfläche ausgefüllt wird.
Du kannst zwischen den verfügbaren Informationsfenstern in der oberen rechten Ecke des Bildschirms umschalten, indem du das Dropdown-Menü mit Schaltflächen verwendest. Jeder Gegenstand, jeder NPC in der NPC-Liste, jede Fertigkeit und jede Quest sowie Statusinformationen werden vom Spielleiter bei der Formulierung einer Antwort verwendet. Wenn du auf das Entfernen eines Gegenstands/NPCs/Quests usw. klickst, verschwindet diese Information aus den verfügbaren Daten des Spielleiters und er formuliert weitere Antworten ohne deren Berücksichtigung. Außerdem achtet der Spielleiter sorgfältig auf den Verlauf deiner Nachrichten mit ihm sowie auf die letzten fünf Nachrichten des "Aktionsberechnungs-Logs".

Alle Listen in den Info-Fenstern sind auf 30 Elemente begrenzt, mit Ausnahme der Inventargegenstände. Dies soll verhindern, dass der Spielleiter mit Informationen überlastet wird, da es einen Punkt geben kann, an dem der Spielleiter einfach keine Antwort mehr erstellen kann. Du kannst jedes Listenelement im Info-Fenster sperren, indem du auf die "Schloss"-Schaltfläche klickst, um es vor dem Löschen zu schützen.

Wenn der Spielleiter immer noch keine Antwort formulieren kann, ist der Kontext möglicherweise mit Informationen überladen. Versuche, einige der verfügbaren Daten zu löschen. Beginne damit, die Hälfte des Chats zu entfernen, und sieh, ob dies dem Spielleiter hilft, eine Antwort zu erstellen.

Bitte erwäge, mich (Lottarend — den Autor des Spiels) zu unterstützen. Links zu Unterstützungsmöglichkeiten findest du in der nächsten Nachricht.

Viel Spaß beim Spielen!`,
            "game_starting_donate": "Danken Sie dem Autor von Legendarica Absolute :\n\n Kryptowährung: TSH1v85VbFo6b8gzb2xKcHy7Lk5NYLqVYh (USDT TRC20)\n\nAnderer Weg: https://www.donationalerts.com/r/lottarend",
            "game_starting_discord": "Im Discord können Sie die neueste Version finden und das Spiel diskutieren https://discord.gg/pTXcwJuH9h",
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
            "Angelic_halo": "Engelsnimbus",
            "Demonic_symbol": "Dämonensymbol",
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
            "status-effect-none-label": "Keine",
            "persuasion-label": "Überzeugung",
            "start-prs": "Überzeugung",
            "rebirth-in-another-world": "Wiedergeburt in einer Anderen Welt",
            "being-summoned-to-another-world": "In eine Andere Welt Gerufen Werden",
            "reincarnation": "Reinkarnation",
            "demon-invasion": "Dämoneninvasion",
            "the-end-of-the-world": "Das Ende der Welt",
            "apocalypse": "Apokalypse",
            "quest-info-questGiver-label": "Questgeber",
            "quest-info-questBackground-label": "Hintergrund:",
            "quest-info-description-label": "Beschreibung:",
            "use-thinking-module-label": "Den Denkmodul für Antworten hinzufügen (deaktivieren, um Tokens zu sparen). Theoretisch macht es die KI intelligenter",
            "log-thinking-button-label": "Gedankenprotokoll",
            "persuasion": "Überzeugung",
            "human_desc": "Ein Mensch der modernen Welt, der im 21. Jahrhundert lebt",
            "superhuman_desc": "Ein Supermensch ist ein Mensch mit Superfähigkeiten, die aus der Kraft seines Geistes entstehen, der evolutionäre Veränderungen durchlaufen hat",
            "infected_desc": "Ein Mensch, der mit dem Zombie-Virus infiziert wurde",
            "ratman_desc": "Ein Nachkomme gewöhnlicher Ratten, die unter dem Einfluss von Strahlung mutiert und Intelligenz erlangt haben. Aus der Ferne erinnert er an einen grotesken Menschen",
            "ghoul_desc": "Ein Mensch, der einst mit dem Zombie-Virus infiziert wurde. Hat seinen Verstand trotz schrecklicher Veränderungen am eigenen Körper bewahrt",
            "mutant_desc": "Ein Mensch, dessen Körper durch Strahlung verschiedene Mutationen erfahren hat",
            "supermutant_desc": "Ein Mensch, dessen Körper durch Strahlung massig und stark geworden ist, aber abstoßende Veränderungen erfahren hat",
            "cyborg_desc": "Ein Mensch mit Cyber-Implantaten, die in sein Fleisch eingebaut sind",
            "android_desc": "Ein Roboter, der mit synthetischer Haut bedeckt ist und menschliche Organe ähnelt",
            "robot_desc": "Eine Stahlmaschine mit fortschrittlicher künstlicher Intelligenz",
            "gray_desc": "Ein Alien mit grauer Haut, großem Kopf und schwarzen Augen, der von einem fernen Planeten zur Erde gekommen ist",
            "alien_desc": "Einer der Außerirdischen, die von einem fernen Planeten zur Erde gekommen sind",
            "hybrid_desc": "Ein Hybrid aus einem Alien und einem Menschen. Besitzt Merkmale beider Rassen",
            "ancient_desc": "Ein Vertreter einer alten Vorläufer-Rasse, der viele Tausend Jahre im Kryoschlaf verbracht hat. Die Welt um ihn herum hat sich während seines Schlafs unglaublich verändert",
            "survival_kit": `Überlebenskit`,
            "psionic_headband": `Psionisches Verstärker-Stirnband`,
            "adrenaline_syringe": `Adrenalin-Spritze des Infizierten`,
            "grappling_hook": `Kletterhaken des Tunnelgräbers`,
            "bone_blade": `Strahlenverseuchte Knochenklinge des Ghoul`,
            "mutant_serum": `Instabiles Mutanten-Serum`,
            "crude_bonehammer": `Rudimentärer Knochenhammer des Supermutanten`,
            "hacking_device": `Integriertes Hack-Gerät`,
            "skin_repair_paste": `Synthetische Hautreparaturpaste`,
            "EMP_Generator": `Tragbarer EMP-Generator`,
            "communication_implant": `Telepathisches Kommunikationsimplantat`,
            "cloaking_device": `Alien-Verkleidungsgerät`,
            "symbiotic_implant": `Symbiotisches Implantat`,
            "ancient_artifact": `Uraltes Artefakt der Vorläufer`,
            "survival_kit": `Überlebenskit`,
            "hacker": "Hacker",
            "scout": "Späher",
            "bounty_hunter": "Kopfgeldjäger",
            "survivor": "Überlebender",
            "raider": "Raider",
            "bandit": "Bandit",
            "wanderer": "Wanderer",
            "veteran": "Veteran",
            "mercenary": "Söldner",
            "stalker": "Stalker",
            "citizen": "Bürger",
            "vault_dweller": "Hüter des Bunkers",
            "savage": "Wildling",
            "soldier": "Soldat",
            "engineer": "Ingenieur",
            "medic": "Sanitäter",
            "sniper": "Scharfschütze",
            "virologist": "Virologe",
            "biotechnician": "Biotechniker",
            "reborn": "Wiedergeborener",
            "psionic": "Psionisch",
            "telekinetic": "Telekinetisch",
            "telepath": "Telepath",
            "pyromancer": "Pyromant",
            "cryomancer": "Cryomant",
            "mechanized_soldier": "Mechanisierter Soldat",
            "mechanical_guardian": "Mechanischer Wächter",
            "cybernetic_assassin": "Cybernetischer Assassine",
            "cybernetic_spy": "Cybernetischer Spion",
            "precursor_agent": "Agent der Vorläufer",
            "precursor_scientist": "Wissenschaftler der Vorläufer",
            "precursor_soldier": "Soldat der Vorläufer",
            "xenomant": "Xenomant",
            "alien_scout": "Alien-Späher",
            "space_architect": "Weltraum-Architekt",
            "galactic_explorer": "Galaktischer Entdecker",
            "alien_soldier": "Alien-Soldat",
            "survival_kit": `Überlebenskit`,
            "hacker_descr": "Spezialist für das Hacken von Computersystemen und Netzwerken. Nutzt seine Fähigkeiten, um Zugang zu Informationen zu erhalten und Geräte zu steuern.",
            "scout_descr": "Agiler und heimlicher Aufklärungsspezialist, spezialisiert auf Infiltration, Informationssammlung und diskrete Eliminierung von Zielen.",
            "bounty_hunter_descr": "Erfahrener Kopfgeldjäger, der Kriminelle für Belohnungen verfolgt und einfängt. Präziser Schütze und Meister im Nahkampf.",
            "survivor_descr": "Erfahrener Überlebenskünstler, angepasst an die harten Bedingungen der postapokalyptischen Welt. Geschickt im Finden von Ressourcen, Bauen von Unterkünften und Verteidigen gegen Gefahren.",
            "raider_descr": "Brutaler Marodeur, der von Plünderungen und Gewalt lebt. Starker und aggressiver Kämpfer, gnadenlos.",
            "bandit_descr": "Cleverer und listiger Krimineller, der sich mit Raub und Plünderung beschäftigt. Meisterhaft im Umgang mit Brecheisen und Dietrichen.",
            "wanderer_descr": "Einsamer Wanderer, der durch die postapokalyptische Welt reist, auf der Suche nach einem besseren Leben. Belastbar und einfallsreich, kann in allen Bedingungen überleben.",
            "veteran_descr": "Erfahrener Soldat, der viele Schlachten durchlaufen hat. Besitzt hervorragendes Kampftalent, diszipliniert und kühlen Kopf bewahrend.",
            "mercenary_descr": "Söldner, der für Geld kämpft. Erfahrener Kämpfer, versiert im Umgang mit verschiedenen Waffen und Taktiken.",
            "stalker_descr": "Erfahrener Führer durch anomale Zonen. Weiß, wie man Gefahren umgeht und wertvolle Artefakte findet.",
            "citizen_descr": "Bewohner einer der wenigen überlebenden Städte. Besitzt grundlegende Fähigkeiten und Kenntnisse, die zum Leben in der Gesellschaft notwendig sind.",
            "vault_dweller_descr": "Ausgestoßener aus dem Bunker, angepasst an das Leben in einem unterirdischen Bunker. Besitzt technische Fähigkeiten und Kenntnisse der vorkriegswelt.",
            "savage_descr": "Wilder, der fern der Zivilisation lebt. Starker und geschickter Jäger, der sich auf primitive Instinkte und Waffen verlässt.",
            "soldier_descr": "Professioneller Militär, der darin trainiert ist, unter allen Bedingungen zu kämpfen. Diszipliniert und präziser Schütze.",
            "engineer_descr": "Technischer Spezialist, der in der Lage ist, verschiedene Geräte zu erstellen und zu reparieren. Wertvoller Verbündeter in der postapokalyptischen Welt.",
            "medic_descr": "Feldarzt, der in der Lage ist, Wunden und Krankheiten zu behandeln. Unverzichtbares Mitglied jeder Gruppe von Überlebenden.",
            "sniper_descr": "Präziser Schütze, der in der Lage ist, Ziele aus großer Entfernung auszuschalten. Geduldiger und beobachtender Kämpfer.",
            "virologist_descr": "Wissenschaftler, der sich auf das Studium von Viren spezialisiert hat. Entwickelt Impfstoffe und antivirale Medikamente.",
            "biotechnician_descr": "Wissenschaftler, der mit lebenden Organismen arbeitet. Fähig, genetische Modifikationen zu erstellen und künstliche Gewebe zu züchten.",
            "reborn_descr": "Wiedergeborener ist ein infizierter Individuum, das teilweise das Virus überwunden und seinen Verstand behalten hat. Sie sind stärker und widerstandsfähiger als gewöhnliche Menschen und können mutieren, aber verderben weiterhin.",
            "psionic_descr": "Individuum mit psionischen Fähigkeiten. Kann auf den Verstand anderer Wesen einwirken und psionische Energie kontrollieren.",
            "telekinetic_descr": "Psioniker mit telekinetischen Fähigkeiten. Kann Objekte mit der Macht des Gedankens bewegen.",
            "telepath_descr": "Psioniker mit telepathischen Fähigkeiten. Kann Gedanken lesen und mit anderen Wesen aus der Ferne kommunizieren.",
            "pyromancer_descr": "Psioniker mit pyrokinetischen Fähigkeiten. Kann Feuer mit der Macht des Gedankens kontrollieren.",
            "cryomancer_descr": "Psioniker mit cryokinetischen Fähigkeiten. Kann Kälte kontrollieren und Eis erschaffen.",
            "mechanized_soldier_descr": "Stark bewaffneter Soldat in einem Exoskelett. Besitzt hohe Feuerkraft und Schutz.",
            "mechanical_guardian_descr": "Roboterwächter, der programmiert ist, ein Territorium oder Objekt zu schützen. Ausgestattet mit fortschrittlichen Überwachungssystemen und mächtigen Waffen.",
            "cybernetic_assassin_descr": "Cybernetischer Assassine, der für stealth Infiltration und Ziel-Eliminierung modifiziert wurde. Ausgestattet mit eingebauten Waffen und fortschrittlichen Sensoren.",
            "cybernetic_spy_descr": "Cybernetischer Spion, der für Informationssammlung und Sabotage modifiziert wurde. Ausgestattet mit einem Unsichtbarkeitsgenerator und holografischem Projektor.",
            "precursor_agent_descr": "Precursor-Agent, der fortschrittliche Technologien und Wissen besitzt. Spezialisiert auf Aufklärung, Sabotage und Bedrohungseliminierung.",
            "precursor_scientist_descr": "Precursor-Wissenschaftler mit umfangreichem Wissen in verschiedenen wissenschaftlichen Bereichen. Fähig, fortschrittliche Geräte zu erstellen und zu nutzen.",
            "precursor_soldier_descr": "Precursor-Soldat, ausgestattet mit High-Tech-Waffen und -Rüstungen. Trainiert, in allen Bedingungen zu kämpfen.",
            "xenomant_descr": "Xenomant ist ein Spezialist, der sich mit mysteriösen Artefakten und Technologien einer außerirdischen Rasse auskennt. Kann sie zum Schutz, Angriff und zur Erkundung nutzen.",
            "alien_scout_descr": "Alien-Späher, spezialisiert auf die Erkundung neuer Welten und das Sammeln von Informationen. Ausgestattet mit fortschrittlichen Tarnungs- und Scan-Technologien.",
            "space_architect_descr": "Weltraum-Architekt ist ein Außerirdischer, der in der Lage ist, Raum und Materie mit der Macht des Gedankens zu verändern. Kann Objekte erstellen und zerstören sowie Basen und Strukturen bauen.",
            "galactic_explorer_descr": "Galaktischer Entdecker ist ein Außerirdischer, der sich der Erforschung des Weltraums und der Suche nach neuen Lebensformen widmet. Besitzt umfangreiches Wissen und fortschrittliche Technologien.",
            "alien_soldier_descr": "Alien-Soldat, der darin trainiert ist, mit fortschrittlicher Bewaffnung und Technologien zu kämpfen. Disziplinierter und effektiver Kämpfer.",
            "survival_kit": `Überlebenskit`,
            "hacker_1": "Hacking-Interface",
            "hacker_2": "KPK",
            "hacker_3": "EMP-Granate",
            "hacker_4": "Netzwerkscanner",
            "scout_1": `Stealth-Anzug`,
            "scout_2": `Lockpick-Set`,
            "scout_3": `Gasmaske`,
            "scout_4": `Schalldämpfer-Pistole`,
            "bounty_hunter_1": `Zwei Pistolen`,
            "bounty_hunter_2": `Zielverfolgungsgerät`,
            "bounty_hunter_3": `Energienetz`,
            "bounty_hunter_4": `Kampfmesser`,
            "survivor_1": `Billiger Dolch`,
            "survivor_2": `Selbstgebaute Rüstung`,
            "survivor_3": `Tarnzelt`,
            "survivor_4": `Jagdmesser`,
            "raider_1": `Selbstgebaute Gewehr`,
            "raider_2": `Stachelklau`,
            "raider_3": `Flasche mit Benzin`,
            "raider_4": `Lieblingsfeuerzeug`,
            "bandit_1": `Schwerer Brecheisen`,
            "bandit_2": `Banditenmaske`,
            "bandit_3": `Lederweste`,
            "bandit_4": `Lockpick-Set`,
            "wanderer_1": `Universeller Rucksack`,
            "wanderer_2": `Kompaktes Zelt`,
            "wanderer_3": `Sportarmbrust`,
            "wanderer_4": `Multifunktionales Messer`,
            "veteran_1": `Belohnungspistole`,
            "veteran_2": `Alter kugelsicherer Weste`,
            "veteran_3": `Taktischer Gürtel`,
            "veteran_4": `Medizinisches Kit`,
            "mercenary_1": `Pistole`,
            "mercenary_2": `Scharfschützengewehr`,
            "mercenary_3": `Kampfhelm`,
            "mercenary_4": `Dynamit`,
            "stalker_1": `Anomalie-Detektor`,
            "stalker_2": `Modifizierte Gasmaske`,
            "stalker_3": `Sturmgewehr`,
            "stalker_4": `Seil mit Katzenhaken`,
            "citizen_1": `Staatsbürgerschaftsdokumente`,
            "citizen_2": `Telefon`,
            "citizen_3": `Vorratstasche`,
            "citizen_4": `Utility-Messer`,
            "vault_dweller_1": `Multifunktionales Werkzeug`,
            "vault_dweller_2": `Wassermodul`,
            "vault_dweller_3": `Modifiziertes Pistole`,
            "vault_dweller_4": `Vault-Kommunikationsmodul`,
            "savage_1": `Knochenaxe`,
            "savage_2": `Knochenamulet`,
            "savage_3": `Jagdfalle`,
            "savage_4": `Selbstgebauter Bogen`,
            "soldier_1": `Automatisches Gewehr`,
            "soldier_2": `Munition`,
            "soldier_3": `Granate`,
            "soldier_4": `Kugelsichere Weste`,
            "engineer_1": `Werkzeugsatz`,
            "engineer_2": `Fliegende Drohne`,
            "engineer_3": `Schweißgerät`,
            "engineer_4": `Platzplan-Scanner`,
            "medic_1": `Erste-Hilfe-Kit`,
            "medic_2": `Schmerzmittel`,
            "medic_3": `Bandagen`,
            "medic_4": `Tragbarer Defibrillator`,
            "sniper_1": `Scharfschützengewehr`,
            "sniper_2": `Fernglas`,
            "sniper_3": `Tarnkappenmantel`,
            "sniper_4": `Kampfmesser`,
            "virologist_1": `Biologischer Analysator`,
            "virologist_2": `Antivirale Medikamente`,
            "virologist_3": `Virusforschungsstation`,
            "virologist_4": `Infizierte Proben`,
            "biotechnician_1": `Genetischer Modifikator`,
            "biotechnician_2": `Biosynthesizer`,
            "biotechnician_3": `Labor-Kit`,
            "biotechnician_4": `Experimentelles Serum`,
            "reborn_1": `Anti-Fäulnis-Serum des Wiedergeborenen`,
            "reborn_2": `Verstärkungsserum`,
            "reborn_3": `Kontrolliertes Mutationsserum`,
            "reborn_4": `Unkontrolliertes Mutationsserum`,
            "psionic_1": `Geistverstärker`,
            "psionic_2": `Telepathisches Gerät`,
            "psionic_3": `Fokussierkristall`,
            "psionic_4": `Psi-Verstärker`,
            "telekinetic_1": `Konzentrationsring`,
            "telekinetic_2": `Schwebende Mini-Plattform`,
            "telekinetic_3": `Antigravitationshandschuhe`,
            "telekinetic_4": `Fokussierkristall`,
            "telepath_1": `Fokussierender Ring`,
            "telepath_2": `Gedankenlese-Ring`,
            "telepath_3": `Gedankenkontakt-Amulett`,
            "telepath_4": `Stab zur Kontrolle von Infizierten`,
            "pyromancer_1": `Molotow-Cocktail`,
            "pyromancer_2": `Pyrokinetischer Stab`,
            "pyromancer_3": `Piro-Mutationsserum`,
            "pyromancer_4": `Feuerfester Anzug`,
            "cryomancer_1": `Polarer Thermosuit`,
            "cryomancer_2": `Thermos mit flüssigem Stickstoff`,
            "cryomancer_3": `Cryo-Mutationsserum`,
            "cryomancer_4": `Cryo-Batterie`,
            "mechanized_soldier_1": `Exoskelett`,
            "mechanized_soldier_2": `Leistungsstarke Schrotflinte`,
            "mechanized_soldier_3": `Energieschild`,
            "mechanized_soldier_4": `Reparaturkit`,
            "mechanical_guardian_1": `Fortschrittliches Überwachungsmodul`,
            "mechanical_guardian_2": `Reparaturmodul`,
            "mechanical_guardian_3": `Schutzpaneel`,
            "mechanical_guardian_4": `Integrierte Maschinengewehr`,
            "cybernetic_assassin_1": `Versteckte Klinge`,
            "cybernetic_assassin_2": `Nano-Beschleunigungs-Cocktail`,
            "cybernetic_assassin_3": `Schallsuppressionssystem`,
            "cybernetic_assassin_4": `Optische Nachtsichtsensoren`,
            "cybernetic_spy_1": `Invisibilitätsgenerator`,
            "cybernetic_spy_2": `Holographischer Projektor`,
            "cybernetic_spy_3": `Cybernetische Ganzúa`,
            "cybernetic_spy_4": `Explosiver Nano-Schlagstock`,
            "precursor_agent_1": `Plasmagewehr`,
            "precursor_agent_2": `Teleportationsgerät`,
            "precursor_agent_3": `Spionageausrüstung-Kit`,
            "precursor_agent_4": `Tragbarer holographischer Projektor`,
            "precursor_scientist_1": `Universeller Scanner`,
            "precursor_scientist_2": `Molekulare Synthese-Station`,
            "precursor_scientist_3": `Energieschild`,
            "precursor_scientist_4": `Plasmasegger`,
            "precursor_soldier_1": `Energie-Laser-Karabiner`,
            "precursor_soldier_2": `Precursor-Kraftschild`,
            "precursor_soldier_3": `Cybernetischer Verstärker`,
            "precursor_soldier_4": `Gravitationsgenerator`,
            "xenomant_1": `Alien-Artefakt`,
            "xenomant_2": `Tragbarer Teleporter`,
            "xenomant_3": `Holographischer Schild`,
            "xenomant_4": `Energie-Schwert`,
            "alien_scout_1": `Gravitationsstiefel`,
            "alien_scout_2": `Tragbarer Teleporter`,
            "alien_scout_3": `Scanner für versteckte Objekte`,
            "alien_scout_4": `Laser-Pistole`,
            "space_architect_1": `Gravitationsprojektor`,
            "space_architect_2": `Materialisierender Raumanzug`,
            "space_architect_3": `Raumkarte`,
            "space_architect_4": `Planetarer Stabilisator`,
            "galactic_explorer_1": `Multispektraler Scanner`,
            "galactic_explorer_2": `Xeno-Übersetzer`,
            "galactic_explorer_3": `Bio-Labor-Modul`,
            "galactic_explorer_4": `Persönlicher Drohnen-Assistent`,
            "alien_soldier_1": `Magnetischer Schienen-Karabiner`,
            "alien_soldier_2": `Nanostrukturierter Schild`,
            "alien_soldier_3": `Integriertes Bionisches System`,
            "alien_soldier_4": `Taktischer holographischer Begleiter`,
            "superhuman": "Übermensch",
            "infected": "Infiziert",
            "ratman": "Rattenmann",
            "ghoul": "Ghul",
            "mutant": "Mutant",
            "supermutant": "Super-Mutant",
            "cyborg": "Cyborg",
            "android": "Android",
            "robot": "Roboter",
            "gray": "Grau",
            "alien": "Außerirdischer",
            "hybrid": "Hybrid",
            "ancient": "Antik",
            "total-weight-label": "Gesamtgewicht (kg):",
            "tooltip-max-weight": "Vom GM am Ende jedes Zuges berechnet. Maximales Gewicht = (Stärke + Ausdauer) * 3 + 10",
            "max-weight-label": "Maximales Gewicht (kg):",
            "use-weight-control-label": "Gewicht im Spiel verwenden",
            "maximum-weight-exceeded-label": "Maximales Gewicht des Charakters überschritten! Die angegebenen Gegenstände wurden in den Warenkorb verschoben: ",
            "statsGroup-weight-button-label": "Gewicht",
            "tooltip-inventory-basket": "Entfernte Gegenstände aus dem Inventar werden hier platziert. Am Ende jedes Zuges automatisch geleert. Sie können sie wiederherstellen, bevor sie verschwinden.",
            "inventory-basket-button-label": "Korb (Inventar)",
            "inventory-restore": "Wiederherstellen",
            "tooltip-critical-weight": "Beim Überschreiten des maximalen Gewichts kann der Charakter noch eine gewisse Zeit Gegenstände ins Inventar aufnehmen, ist jedoch überladen. Ein überladener Charakter verliert schnell Energie. Nach dem Überschreiten des kritischen Gewichts kann der Charakter keine neuen Gegenstände mehr aufnehmen.",
            "critical-weight-label": "Kritisches Gewicht (kg):",
            "weight-status-label": "Status:",
            "weight-status-value-normal": "Normal",
            "weight-status-value-bad": "Überladen",
            "first_contact": "Erster Kontakt",
            "zero_patient": "Nullter Patient",
            "doomsday": "Weltuntergang",
            "experiment": "Experiment",
            "awakening_ancients": "Erwachen der Alten",
            "call_from_space": "Ruf aus dem All",
            "infected_city": "Infizierte Stadt",
            "dead_zone": "Tote Zone",
            "anomalous_territory": "Anomales Territorium",
            "underground_world": "Untergrundwelt",
            "ruins_megapolis": "Ruinen der Megapolis",
            "mutant_lair": "Mutantenversteck",
            "forgotten_laboratory": "Vergessene Labor",
            "fight_with_horde": "Kampf mit der Horde",
            "vault_life": "Leben im Bunker",
            "besieged_city": "Belagerte Stadt",
            "nomadic_life": "Nomadisches Leben",
            "pirate_haven": "Piratenhafen",
            "wild_tribe": "Wilder Stamm",
            "trade_caravan": "Handelskarawane",
            "last_city": "Letzte Stadt",
            "gang_war": "Gangkrieg",
            "resistance": "Widerstand",
            "bounty_hunters": "Kopfgeldjäger",
            "wasteland_mercenaries": "Söldner der Einöde",
            "battle_for_resources": "Schlacht um Ressourcen",
            "ideology_conflict": "Ideologischer Konflikt",
            "cure_search": "Suche nach Heilung",
            "precursors_secret": "Geheimnis der Vorläufer",
            "alien_first_contact": "Erster Kontakt mit Außerirdischen",
            "paradise_search": "Suche nach dem Paradies",
            "mutant_origin": "Ursprung der Mutanten",
            "vault_secrets": "Bunkergeheimnisse",
            "star_ark": "Sternenbarke",
            "cyber_rebels": "Cyberrebellen",
            "machine_uprising": "Maschinenaufstand",
            "mech_wars": "Mech-Kriege",
            "engineer_guild": "Ingenieurgilde",
            "cyber_city": "Cyberstadt",
            "psionic_war": "Psionischer Krieg",
            "psionic_school": "Psionische Schule",
            "psionic_hunt": "Psionische Jagd",
            "psy_defense": "Psy-Verteidigung",
            "alien_invasion": "Alien-Invasion",
            "galactic_diplomacy": "Galaktische Diplomatie",
            "star_patrol": "Sternenpatrouille",
            "war_of_the_worlds": "Weltkriege",
            "artifact_search": "Artefakt-Suche",
            "hospital_outbreak": "Krankenhaus-Ausbruch",
            "shopping_mall_siege": "Einkaufszentrum-Belagerung",
            "prison_break": "Gefängnisausbruch",
            "highrise_trap": "Hochhausfalle",
            "subway_escape": "U-Bahn-Escape",
            "ground_zero": "Ground Zero",
            "patient_zero_hunt": "Jagd auf den Patienten Null",
            "the_last_broadcast": "Die Letzte Sendung",
            "evacuation_failed": "Evakuierung fehlgeschlagen",
            "first_bite": "Erster Biss",
            "the_fall": "Der Fall",
            "scorched_earth": "Verbrannte Erde",
            "water_wars": "Wasserkriege",
            "beneath_the_sand": "Unter dem Sand",
            "fortress_of_madness": "Festung des Wahnsinns",
            "ghost_ship": "Geisterschiff",
            "the_frozen_north": "Der Gefrorene Norden",
            "jungle_hunt": "Dschungeljagd",
            "sky_pirates": "Himmelpiraten",
            "mutant_island": "Mutanteninsel",
            "lost_colony": "Verlorene Kolonie",
            "first_contact_desc": "Die Alien-Invasion hat begonnen.",
            "zero_patient_desc": "Der Zombie-Virus beginnt sich zu verbreiten.",
            "doomsday_desc": "Der Beginn eines Nuklearkriegs oder der Einschlag eines Meteoriten.",
            "experiment_desc": "Ein fehlgeschlagenes wissenschaftliches Experiment ist außer Kontrolle geraten.",
            "awakening_ancients_desc": "Das Ende des Kryoschlafs der Alten, einer hochentwickelten Vorgängerrasse. Ihre Rückkehr in eine veränderte Welt.",
            "call_from_space_desc": "Die Ankunft des ersten außerirdischen Aufklärungsschiffs auf der Erde.",
            "infected_city_desc": "Überlebe in einer Stadt, die von einer Zombie-Epidemie überrannt wird.",
            "dead_zone_desc": "Eine Reise durch eine radioaktive Ödnis.",
            "anomalous_territory_desc": "Erforsche eine Zone voller Anomalien und Mutanten.",
            "underground_world_desc": "Leben in einem verlassenen U-Bahn-System oder Bunkern.",
            "ruins_megapolis_desc": "Durchsuche die Ruinen einer Megastadt auf der Suche nach Ressourcen.",
            "mutant_lair_desc": "Überlebe in der Nähe einer Kolonie gefährlicher Mutanten.",
            "forgotten_laboratory_desc": "Finde und erforsche ein verlassenes Forschungslabor.",
            "fight_with_horde_desc": "Verteidige eine Siedlung gegen eine Horde wahnsinniger Infizierter.",
            "vault_life_desc": "Der Alltag in einem unterirdischen Bunker mit internen Konflikten.",
            "besieged_city_desc": "Verteidige die letzte Bastion der Zivilisation gegen äußere Bedrohungen.",
            "nomadic_life_desc": "Reise mit einer Gruppe Überlebender auf der Suche nach einem neuen Zuhause.",
            "pirate_haven_desc": "Leben unter Piraten und Schmugglern zwischen Schiffswracks.",
            "wild_tribe_desc": "Überlebe in einem primitiven Stamm, im Konflikt mit der Zivilisation.",
            "trade_caravan_desc": "Bewache und begleite eine Handelskarawane durch gefährliche Gebiete.",
            "last_city_desc": "Beschütze die letzte Stadt vor Plünderern und Mutanten.",
            "gang_war_desc": "Machtkampf zwischen Banden von Plünderern.",
            "resistance_desc": "Geheimer Widerstand gegen ein totalitäres Regime.",
            "bounty_hunters_desc": "Gefährliche Aufträge zur Ergreifung von Verbrechern annehmen.",
            "wasteland_mercenaries_desc": "Erfülle Söldnermissionen und schlichte Streitigkeiten zwischen Clans.",
            "battle_for_resources_desc": "Ein Konflikt zwischen Siedlungen um wertvolle Ressourcen.",
            "ideology_conflict_desc": "Ein Zusammenstoß zwischen Fraktionen mit unterschiedlichen Ideologien.",
            "cure_search_desc": "Suche nach einem Impfstoff gegen den Zombie-Virus oder eine andere Katastrophe.",
            "precursors_secret_desc": "Erkunde Ruinen und Artefakte einer uralten Zivilisation.",
            "alien_first_contact_desc": "Eine diplomatische Mission oder Spionage bei Außerirdischen.",
            "paradise_search_desc": "Die Suche nach einem mythischen sicheren Ort, von dem man in der Ödnis spricht.",
            "mutant_origin_desc": "Untersuche die Ursachen von Mutationen und finde einen Weg, sie rückgängig zu machen.",
            "vault_secrets_desc": "Decke die geheimen Experimente in den Bunkern auf.",
            "star_ark_desc": "Finde und starte ein intaktes Raumschiff.",
            "cyber_rebels_desc": "Kämpfe gegen den Konzern, der die Cyber-Technologien kontrolliert.",
            "machine_uprising_desc": "Krieg gegen rebellische Roboter und KI.",
            "mech_wars_desc": "Schlachten mit riesigen Robotern und Kriegsmaschinen.",
            "engineer_guild_desc": "Rivalität zwischen Ingenieurgruppen um seltene Technologien.",
            "cyber_city_desc": "Leben in einer von künstlicher Intelligenz verwalteten Stadt.",
            "psionic_war_desc": "Ein Konflikt zwischen Psionikern und jenen, die sie fürchten.",
            "psionic_school_desc": "Ausbildung und Weiterentwicklung psionischer Fähigkeiten.",
            "psionic_hunt_desc": "Suche und Neutralisierung gefährlicher Psioniker.",
            "psy_defense_desc": "Schutz vor psionischen Angriffen und Beeinflussung.",
            "alien_invasion_desc": "Verteidige die Erde vor einer umfassenden Alien-Invasion.",
            "galactic_diplomacy_desc": "Kontakte knüpfen und Beziehungen zu außerirdischen Rassen aufbauen.",
            "star_patrol_desc": "Patrouilliere den Weltraum, um Bedrohungen zu verhindern.",
            "war_of_the_worlds_desc": "Beteilige dich an einem interstellaren Konflikt auf der Seite einer Fraktion.",
            "artifact_search_desc": "Finde und untersuche Artefakte einer außerirdischen Zivilisation.",
            "hospital_outbreak_desc": "Du bist in einem Krankenhaus gefangen, das vor Infizierten wimmelt. Finde einen Ausweg, bevor es zu spät ist.",
            "shopping_mall_siege_desc": "Eine Gruppe Überlebender hat sich in einem Einkaufszentrum verschanzt. Verteidige es gegen Wellen von Zombies und finde einen Ausweg.",
            "prison_break_desc": "Der Zombie-Virus hat das Gefängnis erreicht. Häftlinge und Wärter müssen zusammenarbeiten, um zu entkommen.",
            "highrise_trap_desc": "Du bist in den oberen Stockwerken eines Wolkenkratzers gefangen. Zombies rücken näher und die Aufzüge sind außer Betrieb. Kämpfe dich nach unten.",
            "subway_escape_desc": "Du hast in der U-Bahn Schutz gesucht, aber die Tunnel sind voller Zombies. Bahne dir den Weg zur nächsten Station.",
            "ground_zero_desc": "Du erlebst den Ausbruch der Epidemie hautnah. Die Stadt versinkt im Chaos – versuche zu überleben und zu entkommen.",
            "patient_zero_hunt_desc": "Die Behörden suchen nach dem Null-Patienten, um die Ausbreitung des Virus zu stoppen. Du gehörst zu denen, die ihn finden könnten.",
            "the_last_broadcast_desc": "Du bist Radiomoderator und sendest aus einem belagerten Studio. Informiere die Überlebenden, solange es möglich ist.",
            "evacuation_failed_desc": "Die Evakuierung ist fehlgeschlagen. Die Hubschrauber sind weg und du bist von Zombies umringt. Finde einen anderen Ausweg.",
            "first_bite_desc": "Du wurdest gebissen. Die Zeit ist knapp, um ein Heilmittel zu finden oder dein Schicksal anzunehmen.",
            "the_fall_desc": "Du lebst in einer Metropole und hast gerade vom Zombie-Virus erfahren. Die Stadt brennt, Panik auf den Straßen – rette deine Familie.",
            "scorched_earth_desc": "Nach einem Nuklearkrieg ist die Erdoberfläche verbrannt und unbewohnbar. Überlebe in den Ruinen, kämpfe um knappe Ressourcen und meide Strahlung.",
            "water_wars_desc": "In einer Welt, in der sauberes Wasser so wertvoll wie Gold ist, musst du eine Wasserquelle für deine Siedlung finden oder verteidigen.",
            "beneath_the_sand_desc": "Unter den Wüstendünen liegen Ruinen einer alten Zivilisation, voller Schätze und Gefahren. Hüte dich vor Sandwürmern und Fallen.",
            "fortress_of_madness_desc": "Der Anführer einer Siedlung ist wahnsinnig geworden und hat seine Stadt in eine uneinnehmbare Festung verwandelt. Stürze ihn, um die Menschen zu befreien.",
            "ghost_ship_desc": "Du befindest dich auf einem Geisterschiff, das ziellos umhertreibt. Lüfte das Geheimnis seiner Besatzung und finde den Weg zurück an Land.",
            "the_frozen_north_desc": "Ewiger Frost hat die nördlichen Länder fest im Griff. Überlebe bei klirrender Kälte, kämpfe gegen mutierte Tiere und andere verzweifelte Überlebende.",
            "jungle_hunt_desc": "Gefährliche Dschungel mit Mutanten, giftigen Pflanzen und uralten Fallen. Führe eine Expedition auf der Suche nach einem verlorenen Artefakt in die Tiefe des Dschungels.",
            "sky_pirates_desc": "Werde ein Luftpirat, der mit einem Luftschiff den Himmel durchstreift. Kämpfe gegen andere Piraten, handle mit fliegenden Städten und entdecke schwebende Inseln.",
            "mutant_island_desc": "Du bist auf einer Insel gestrandet, die von einem Mutantenstamm bewohnt wird. Freunde dich mit ihnen an oder versuche zu entkommen.",
            "lost_colony_desc": "Du bist Teil der Besatzung eines Raumschiffs, das auf einer von Zombies überrannten Erde abgestürzt ist. Suche Überlebende und baue eine neue Siedlung auf, während du Horden von Infizierten abwehrst.",
            "character-post-apocalyptic-name": "Geben Sie den Namen des Charakters ein",
            "post-apocalypse-race-message-label": "Rassenbeschreibung:",
            "post-apocalypse-class-message-label": "Klassbeschreibung:",
            "tooltip-post-apocalypse-rpg": "Wenn der Schieberegler rot ist, ist er aktiviert. RPG ist der Spielmodus. Im RPG-Modus besteht das Gameplay aus der Charakterentwicklung, und Fähigkeiten sowie Inventar sind entscheidend. Wenn deaktiviert, läuft das Spiel im Roleplay-Modus, der sich auf das Erstellen einer interessanten Erzählung konzentriert, und Fähigkeiten sowie Inventar sind sekundär.",
            "post-apocalypse-tooltip-noMagic": "Wenn aktiviert (rote Farbe), erstellt der Spielleiter eine Welt ohne Magie und nur mit realistischen Fähigkeiten. Wenn deaktiviert, wird die Welt Magie und unrealistische Fähigkeiten haben.",
            "post-apocalypse-nonmagic-mode-name": "Keine Magie in der Welt",
            "create-character-post-apocalyptic": "Spiel starten",
            "random-character-post-apocalyptic": "Zufälliger Charakter",
            "load-character-post-apocalyptic": "Autosave laden",
            "load-savefile-post-apocalyptic": "Datei laden",
            "my-game-post-apocalyptic": "Mein Setting",
            "ai-provider-label4": "KI-Anbieter",
            "ai-none4-label": "Keine Auswahl",
            "ai-model-label4": "KI-Modell",
            "ai-model4": "Geben Sie den Namen des KI-Modells ein",
            "api-key-label4": "Ihr API-Schlüssel",
            "api-key-button4": "Für 10 Sekunden anzeigen",
            "api-key4": "Aus Sicherheitsgründen stellen Sie sicher, dass Sie einen API-Schlüssel mit niedrigem Nutzungslimit verwenden",
            "additional-settings-label4": "Sie können zusätzliche Einstellungen im Dropdown-Panel rechts ansehen. Klicken Sie auf die Schaltfläche in der unteren rechten Ecke des Bildschirms, um auf das Einstellungsfenster zuzugreifen.",
            "post-apocalypse-campaign-message-label": "Kampagnenbeschreibung:",
            "post-apocalyptic-game": "Schnelles Spiel - Post-Apokalypse",
            "create-character-post-apocalyptic-label": "Erstelle deinen Charakter",
            "weight-reduction-label": "Reduzierung des Inhaltsgewichts",
            "thinking-module-iterations-label": "Anzahl der Versuche, die das Antwort-Nachdenkmodul unternehmen wird, um über die Antwort nachzudenken.",
            "use-literary-prompt-label": "Der Spielleiter wird sich um einen literarischen Stil bemühen",
            "use-erotic-prompt-label": "Inhalte ab 21 Jahren im Spiel erlauben",
            "abort-error-message": "Anfrage vom Spieler abgebrochen",
            "common-error-message": "Fehler bei der Anfrage:",
            "cancel-button": "Abbrechen",
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
            "max-gm-symbols": "20000 par défaut",
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
            "tooltip-race": `La race influence la localisation de départ, la génération des compétences raciales, l'intrigue et les bonus de départ pour les compétences et les objets :

Humain : Chance +2, Commerce +1, Perception +1, Sagesse -1, Intelligence -1, Outil Universel

Elfe : Dextérité +2, Vitesse +1, Attractivité +1, Force -1, Endurance -1, Cape Elfique

Nain : Commerce +2, Force +1, Endurance +1, Dextérité -1, Vitesse -1, Bière Naine

Orc : Force +3, Endurance +2, Intelligence -1, Sagesse -1, Attractivité -1, Peinture de Combat Orc

Lézard : Endurance +2, Vitesse +1, Attractivité -1, Huile pour Écailles

Vampire : Perception +1, Attractivité +1, Dextérité +1, Chance -1, Flacon de Sang

Golem : Force +3, Endurance +2, Intelligence -1, Attractivité -1, Sagesse -1, Noyau Élémentaire

Ange : Force +1, Attractivité +1, Sagesse +1, Commerce -1, Halo Angélique

Démon : Dextérité +1, Attractivité +2, Persuasion +1, Sagesse -1, Chance -1, Symbole Démoniaque`,
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
            "status-purposes-label": "Fins possibles",
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
            "angel": "Ange",
            "demon": "Démon",
            "no-choosed-race": "Choisissez une race",

            "female": "Féminin",
            "male": "Masculin",
            "no-choosed-gender": "Choisissez un sexe",

            //not interface
            "item_notepad": "Bloc-notes",
            "item_notepad_description": "Bloc-notes",
            "game_starting_description": `Bienvenue dans Absolute Legendaria, aventurier ! Veuillez prendre connaissance des informations suivantes...

C'est un jeu de rôle textuel avec un LLM. Vous pouvez saisir votre action dans la zone de texte en bas. Le réseau neuronal traitera votre réponse et enverra des instructions qui rempliront l'interface du jeu.
Vous pouvez basculer entre les fenêtres d'information disponibles dans le coin supérieur droit de l'écran, en utilisant le panneau déroulant avec des boutons. Chaque objet, chaque PNJ dans la liste des PNJ, chaque compétence et quête, ainsi que les informations de statut, sont utilisés par le maître du jeu pour formuler une réponse. Lorsque vous cliquez pour supprimer un objet/PNJ/quête, etc., cette information disparaît des données disponibles pour le maître du jeu, et il formulera les réponses ultérieures sans en tenir compte. De plus, le maître du jeu examine attentivement l'historique de vos messages avec lui, ainsi que les cinq derniers messages du "Journal de calcul des actions".

Toutes les listes des fenêtres d'information sont limitées à 30 éléments, à l'exception des objets de l'inventaire. Cela est fait pour ne pas surcharger le maître du jeu d'informations, car il pourrait arriver qu'il ne puisse plus créer de réponse. Vous pouvez verrouiller n'importe quel élément de la liste dans la fenêtre d'information en cliquant sur le bouton "cadenas", le protégeant ainsi de la suppression.

Si le maître du jeu ne parvient toujours pas à formuler une réponse, il est possible que le contexte soit surchargé d'informations. Essayez de supprimer certaines données disponibles. Commencez par effacer la moitié du chat et voyez si cela aide le maître du jeu à formuler une réponse.

Veuillez envisager de me soutenir (Lottarend — l'auteur du jeu). Les liens vers les moyens de soutien sont fournis dans le message suivant.

Bon jeu !`,
            "game_starting_donate": "Remerciez l'auteur d'Legendarica Absolute  :\n\n Crypto-monnaie : TSH1v85VbFo6b8gzb2xKcHy7Lk5NYLqVYh (USDT TRC20)\n\nAutre moyen : https://www.donationalerts.com/r/lottarend",
            "game_starting_discord": "Vous pouvez trouver la dernière version et discuter du jeu sur Discord https://discord.gg/pTXcwJuH9h",
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
            "Angelic_halo": "Halo Angélique",
            "Demonic_symbol": "Symbole Démoniaque",
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
            "status-effect-none-label": "Aucun",
            "persuasion-label": "Persuasion",
            "start-prs": "Persuasion",
            "rebirth-in-another-world": "Renaissance dans un Autre Monde",
            "being-summoned-to-another-world": "Être Invoqué dans un Autre Monde",
            "reincarnation": "Réincarnation",
            "demon-invasion": "Invasion Démoniaque",
            "the-end-of-the-world": "La Fin du Monde",
            "apocalypse": "Apocalypse",
            "quest-info-questGiver-label": "Donneur de Quête",
            "quest-info-questBackground-label": "Contexte :",
            "quest-info-description-label": "Description :",
            "use-thinking-module-label": "Ajouter un module de réflexion sur les réponses (désactiver pour économiser des jetons). Théoriquement, cela rend l'IA plus intelligente",
            "log-thinking-button-label": "Journal des Pensées",
            "persuasion": "Persuasion",
            "human_desc": "Une personne du monde moderne vivant au 21ème siècle",
            "superhuman_desc": "Un superhumain est une personne avec des super capacités qui découlent de la puissance de son esprit, ayant subi des changements évolutifs",
            "infected_desc": "Une personne qui a été infectée par le virus zombie",
            "ratman_desc": "Descendant de rats ordinaires qui ont muté sous l'influence de la radiation et ont acquis de l'intelligence. Vu de loin, ressemble à un humain grotesque",
            "ghoul_desc": "Une personne qui a autrefois été infectée par le virus zombie. A réussi à conserver sa raison malgré des changements horribles dans son propre corps",
            "mutant_desc": "Une personne dont le corps a subi diverses mutations en raison de l'exposition à la radiation",
            "supermutant_desc": "Une personne dont le corps est devenu massif et fort en raison de l'exposition à la radiation, mais a subi des changements répulsifs",
            "cyborg_desc": "Une personne avec des implants cybernétiques intégrés dans sa chair",
            "android_desc": "Un robot recouvert de peau synthétique et possédant des organes similaires à ceux des humains",
            "robot_desc": "Une machine en acier dotée d'une intelligence artificielle avancée",
            "gray_desc": "Un extraterrestre à la peau grise, à la grande tête et aux yeux noirs, qui est arrivé sur Terre depuis une planète lointaine",
            "alien_desc": "Un des extraterrestres qui sont arrivés sur Terre depuis une planète lointaine",
            "hybrid_desc": "Un hybride d'un extraterrestre et d'un humain. Possède des traits des deux races",
            "ancient_desc": "Un représentant d'une ancienne race de précurseurs qui a passé de nombreux millénaires en cryosommeil. Le monde autour de lui a incroyablement changé pendant son sommeil",
            "survival_kit": `Kit de survie`,
            "psionic_headband": `Diadème amplificateur psionique`,
            "adrenaline_syringe": `Seringue d'adrénaline de l'infecté`,
            "grappling_hook": `Crochet d'escalade du tunnelier`,
            "bone_blade": `Lame d'os irradiée du ghoul`,
            "mutant_serum": `Sérum mutant instable`,
            "crude_bonehammer": `Masse d'os grossière du supermutant`,
            "hacking_device": `Dispositif de piratage intégré`,
            "skin_repair_paste": `Pâte de réparation de peau synthétique`,
            "EMP_Generator": `Générateur EMP portable`,
            "communication_implant": `Implant de communication télépathique`,
            "cloaking_device": `Dispositif de dissimulation alien`,
            "symbiotic_implant": `Implant symbiotique`,
            "ancient_artifact": `Artefact ancien des précurseurs`,
            "survival_kit": `Kit de survie`,
            "hacker": "Hacker",
            "scout": "Éclaireur",
            "bounty_hunter": "Chasseur de primes",
            "survivor": "Survivant",
            "raider": "Raider",
            "bandit": "Bandit",
            "wanderer": "Errant",
            "veteran": "Vétéran",
            "mercenary": "Mercenaire",
            "stalker": "Stalker",
            "citizen": "Citoyen",
            "vault_dweller": "Habitant du Souterrain",
            "savage": "Sauvage",
            "soldier": "Soldat",
            "engineer": "Ingénieur",
            "medic": "Médecin",
            "sniper": "Sniper",
            "virologist": "Virologue",
            "biotechnician": "Biotechnicien",
            "reborn": "René",
            "psionic": "Psionique",
            "telekinetic": "Télékinétique",
            "telepath": "Télépathe",
            "pyromancer": "Pirocántique",
            "cryomancer": "Cryomancien",
            "mechanized_soldier": "Soldat Mécanisé",
            "mechanical_guardian": "Gardien Mécanique",
            "cybernetic_assassin": "Assassin Cybernétique",
            "cybernetic_spy": "Espion Cybernétique",
            "precursor_agent": "Agent Précursseur",
            "precursor_scientist": "Scientifique Précursseur",
            "precursor_soldier": "Soldat Précursseur",
            "xenomant": "Xénomancien",
            "alien_scout": "Éclaireur Alien",
            "space_architect": "Architecte Spatial",
            "galactic_explorer": "Explorateur Galactique",
            "alien_soldier": "Soldat Alien",
            "survival_kit": `Kit de survie`,
            "hacker_descr": "Spécialiste en piratage de systèmes informatiques et de réseaux. Utilise ses compétences pour accéder à l'information et contrôler les dispositifs.",
            "scout_descr": "Spécialiste en reconnaissance agile et furtive, spécialisé dans l'infiltration, la collecte d'informations et l'élimination discrète des cibles.",
            "bounty_hunter_descr": "Chasseur de primes expérimenté traquant et capturant les criminels pour des récompenses. Tireur précis et maître du combat corps à corps.",
            "survivor_descr": "Survivant expérimenté adapté aux conditions difficiles du monde post-apocalyptique. Compétent pour trouver des ressources, construire des abris et se défendre contre les dangers.",
            "raider_descr": "Maraudeur brutal vivant de pillages et de violence. Combattant fort et agressif, sans pitié.",
            "bandit_descr": "Criminel astucieux et rusé engagé dans les vols et les braquages. Manie habilement les barreaux et les crochets.",
            "wanderer_descr": "Vagabond solitaire parcourant le monde post-apocalyptique à la recherche d'une vie meilleure. Résistant et ingénieux, capable de survivre dans toutes les conditions.",
            "veteran_descr": "Soldat expérimenté ayant traversé de nombreuses batailles. Possède une excellente formation au combat, discipliné et calme.",
            "mercenary_descr": "Mercenaire combattant pour de l'argent. Combattant expérimenté maîtrisant diverses armes et tactiques.",
            "stalker_descr": "Guide expérimenté dans les zones anormales. Sait comment éviter les dangers et trouver des artefacts précieux.",
            "citizen_descr": "Résident de l'une des rares villes survivantes. Possède des compétences et des connaissances de base nécessaires à la vie en société.",
            "vault_dweller_descr": "Exilé du Vault, adapté à la vie dans un bunker souterrain. Possède des compétences techniques et des connaissances du monde pré-guerre.",
            "savage_descr": "Sauvage vivant loin de la civilisation. Chasseur fort et agile, se fiant aux instincts primitifs et aux armes.",
            "soldier_descr": "Militaire professionnel formé pour combattre dans toutes les conditions. Tireur discipliné et précis.",
            "engineer_descr": "Spécialiste technique capable de créer et de réparer divers dispositifs. Allié précieux dans le monde post-apocalyptique.",
            "medic_descr": "Médecin de terrain capable de soigner les blessures et les maladies. Membre indispensable de tout groupe de survivants.",
            "sniper_descr": "Tireur précis capable d'éliminer des cibles à longue distance. Combattant patient et observateur.",
            "virologist_descr": "Scientifique spécialisé dans l'étude des virus. Développe des vaccins et des médicaments antiviraux.",
            "biotechnician_descr": "Scientifique travaillant avec des organismes vivants. Capable de créer des modifications génétiques et de cultiver des tissus artificiels.",
            "reborn_descr": "René est un individu infecté qui a réussi à partiellement vaincre le virus et à conserver sa raison. Ils sont plus forts et plus résilients que les gens ordinaires et peuvent muter mais continuent de pourrir.",
            "psionic_descr": "Individu possédant des capacités psioniques. Peut influencer l'esprit d'autres êtres et contrôler l'énergie psionique.",
            "telekinetic_descr": "Psionique doté de capacités télékinétiques. Peut déplacer des objets par la force de la pensée.",
            "telepath_descr": "Psionique doté de capacités télépathiques. Peut lire les pensées et communiquer avec d'autres êtres à distance.",
            "pyromancer_descr": "Psionique doté de capacités pyrokynétiques. Peut contrôler le feu par la force de la pensée.",
            "cryomancer_descr": "Psionique doté de capacités cryokynétiques. Peut contrôler le froid et créer de la glace.",
            "mechanized_soldier_descr": "Soldat lourdement armé dans un exosquelette. Possède une puissance de feu et une protection élevées.",
            "mechanical_guardian_descr": "Gardien robotisé programmé pour protéger un territoire ou un objet. Équipé de systèmes de surveillance avancés et d'armes puissantes.",
            "cybernetic_assassin_descr": "Assassin cybernétique modifié pour l'infiltration furtive et l'élimination des cibles. Équipé d'armes intégrées et de capteurs avancés.",
            "cybernetic_spy_descr": "Espion cybernétique modifié pour la collecte d'informations et le sabotage. Équipé d'un générateur d'invisibilité et d'un projecteur holographique.",
            "precursor_agent_descr": "Agent Précurseur possédant des technologies avancées et des connaissances. Spécialisé en reconnaissance, sabotage et élimination des menaces.",
            "precursor_scientist_descr": "Scientifique Précurseur avec une vaste connaissance dans divers domaines scientifiques. Capable de créer et d'utiliser des dispositifs avancés.",
            "precursor_soldier_descr": "Soldat Précurseur équipé d'armes et d'armures de haute technologie. Formé pour combattre dans toutes les conditions.",
            "xenomant_descr": "Xénomancien est un spécialiste maîtrisant des artefacts mystérieux et des technologies d'une race extraterrestre. Il peut les utiliser pour la protection, l'attaque et l'exploration.",
            "alien_scout_descr": "Éclaireur alien spécialisé dans l'exploration de nouveaux mondes et la collecte d'informations. Équipé de technologies avancées de camouflage et de scan.",
            "space_architect_descr": "Architecte Spatial est un extraterrestre capable de modifier l'espace et la matière par la force de la pensée. Il peut créer et détruire des objets, ainsi que construire des bases et des structures.",
            "galactic_explorer_descr": "Explorateur Galactique est un extraterrestre dédié à l'étude de l'espace et à la recherche de nouvelles formes de vie. Possède une vaste connaissance et des technologies avancées.",
            "alien_soldier_descr": "Soldat alien formé pour combattre en utilisant des armements et des technologies avancées. Combattant discipliné et efficace.",
            "survival_kit": `Kit de survie`,
            "hacker_1": `Interface de Piratage`,
            "hacker_2": `KPK`,
            "hacker_3": `EMP-Granade`,
            "hacker_4": `Scanner de Réseau`,
            "scout_1": `Combinaison de Furtivité`,
            "scout_2": `Ensemble de Crochets`,
            "scout_3": `Masque à Gaz`,
            "scout_4": `Pistolet Silencieux`,
            "bounty_hunter_1": `Deux Pistolets`,
            "bounty_hunter_2": `Dispositif de Suivi des Cibles`,
            "bounty_hunter_3": `Réseau Énergétique`,
            "bounty_hunter_4": `Couteau de Combat`,
            "survivor_1": `Dague Bon Marché`,
            "survivor_2": `Armure Maison`,
            "survivor_3": `Tente de Camouflage`,
            "survivor_4": `Couteau de Chasse`,
            "raider_1": `Fusil Maison`,
            "raider_2": `Massue à Épines`,
            "raider_3": `Flasque avec Essence`,
            "raider_4": `Briquet Favori`,
            "bandit_1": `Pied-de-Braise Lourde`,
            "bandit_2": `Masque de Bandit`,
            "bandit_3": `Gilet en Cuir`,
            "bandit_4": `Ensemble de Crochets`,
            "wanderer_1": `Sac à Dos Universel`,
            "wanderer_2": `Tente Compacte`,
            "wanderer_3": `Arbalète Sportive`,
            "wanderer_4": `Couteau Multifonction`,
            "veteran_1": `Pistolet de Récompense`,
            "veteran_2": `Gilet Pare-Balles Ancien`,
            "veteran_3": `Ceinture Tactique`,
            "veteran_4": `Kit Médical`,
            "mercenary_1": `Pistolet`,
            "mercenary_2": `Fusil de Sniper`,
            "mercenary_3": `Casque de Combat`,
            "mercenary_4": `Dynamite`,
            "stalker_1": `Détecteur d'Anomalies`,
            "stalker_2": `Masque à Gaz Modifié`,
            "stalker_3": `Fusil d'Assaut`,
            "stalker_4": `Corde avec Crochet à Chat`,
            "citizen_1": `Documents de Citoyenneté`,
            "citizen_2": `Téléphone`,
            "citizen_3": `Sac de Provisions`,
            "citizen_4": `Couteau Utilitaire`,
            "vault_dweller_1": `Outil Multifonctionnel`,
            "vault_dweller_2": `Module d'Eau`,
            "vault_dweller_3": `Pistolet Modifié`,
            "vault_dweller_4": `Module de Communication du Refuge`,
            "savage_1": `Hache en Os`,
            "savage_2": `Amulette en Os`,
            "savage_3": `Piège à Gibier`,
            "savage_4": `Arc Maison`,
            "soldier_1": `Fusil Automatique`,
            "soldier_2": `Munitions`,
            "soldier_3": `Grenade`,
            "soldier_4": `Gilet Pare-Balles`,
            "engineer_1": `Set d'Outils`,
            "engineer_2": `Drone Volant`,
            "engineer_3": `Appareil de Soudage`,
            "engineer_4": `Scanner de Plans`,
            "medic_1": `Kit de Premiers Secours`,
            "medic_2": `Analgésique`,
            "medic_3": `Bandages`,
            "medic_4": `Défibrillateur Portable`,
            "sniper_1": `Fusil de Sniper`,
            "sniper_2": `Jumelles`,
            "sniper_3": `Manteau de Camouflage`,
            "sniper_4": `Couteau de Combat`,
            "virologist_1": `Analyseur Biologique`,
            "virologist_2": `Médicaments Antiviraux`,
            "virologist_3": `Station de Recherche sur les Virus`,
            "virologist_4": `Échantillons Infectés`,
            "biotechnician_1": `Modificateur Génétique`,
            "biotechnician_2": `Biosynthétiseur`,
            "biotechnician_3": `Kit de Laboratoire`,
            "biotechnician_4": `Sérum Expérimental`,
            "reborn_1": `Sérum Anti-Rotation du René`,
            "reborn_2": `Sérum de Renforcement`,
            "reborn_3": `Sérum de Mutation Contrôlée`,
            "reborn_4": `Sérum de Mutation Incontrôlée`,
            "psionic_1": `Amplificateur Mental`,
            "psionic_2": `Dispositif Télépathique`,
            "psionic_3": `Cristal de Focalisation`,
            "psionic_4": `Amplificateur Psi`,
            "telekinetic_1": `Anneau de Concentration`,
            "telekinetic_2": `Mini-Plateforme Flottante`,
            "telekinetic_3": `Gants Antigravité`,
            "telekinetic_4": `Cristal de Focalisation`,
            "telepath_1": `Anneau Focalisateur`,
            "telepath_2": `Anneau de Lecture des Pensées`,
            "telepath_3": `Amulette de Communication Mentale`,
            "telepath_4": `Bâton de Contrôle des Infectés`,
            "pyromancer_1": `Cocktail Molotov`,
            "pyromancer_2": `Bâton Pyrokinétique`,
            "pyromancer_3": `Sérum de Mutation Pyro`,
            "pyromancer_4": `Combinaison Résistante au Feu`,
            "cryomancer_1": `Combinaison Thermique Polaire`,
            "cryomancer_2": `Thermos avec Azote Liquide`,
            "cryomancer_3": `Sérum de Mutation Cryo`,
            "cryomancer_4": `Batterie Cryo`,
            "mechanized_soldier_1": `Exosquelette`,
            "mechanized_soldier_2": `Fusil de Chasse Puissant`,
            "mechanized_soldier_3": `Bouclier Énergétique`,
            "mechanized_soldier_4": `Kit de Réparation`,
            "mechanical_guardian_1": `Module de Surveillance Avancé`,
            "mechanical_guardian_2": `Module de Réparation`,
            "mechanical_guardian_3": `Panneau de Protection`,
            "mechanical_guardian_4": `Mitrailleuse Intégrée`,
            "cybernetic_assassin_1": `Lame Cachée`,
            "cybernetic_assassin_2": `Cocktail d'Accélération Nano`,
            "cybernetic_assassin_3": `Système de Suppression du Son`,
            "cybernetic_assassin_4": `Capteurs Optiques de Vision Nocturne`,
            "cybernetic_spy_1": `Générateur d'Invisibilité`,
            "cybernetic_spy_2": `Projecteur Holographique`,
            "cybernetic_spy_3": `Ganzúa Cybernétique`,
            "cybernetic_spy_4": `Fouet Nano Explosif`,
            "precursor_agent_1": `Pistolet Plasma`,
            "precursor_agent_2": `Dispositif de Téléportation`,
            "precursor_agent_3": `Kit d'Équipement d'Espionnage`,
            "precursor_agent_4": `Projecteur Holographique Portable`,
            "precursor_scientist_1": `Scanner Universel`,
            "precursor_scientist_2": `Station de Synthèse Moléculaire`,
            "precursor_scientist_3": `Bouclier Énergétique`,
            "precursor_scientist_4": `Coupe Plasma`,
            "precursor_soldier_1": `Carabine Laser Énergétique`,
            "precursor_soldier_2": `Bouclier de Force Precurseur`,
            "precursor_soldier_3": `Amplificateur Cybernétique`,
            "precursor_soldier_4": `Générateur de Gravité`,
            "xenomant_1": `Artefact Alien`,
            "xenomant_2": `Téléporteur Portable`,
            "xenomant_3": `Bouclier Holographique`,
            "xenomant_4": `Épée Énergétique`,
            "alien_scout_1": `Bottes Gravitationnelles`,
            "alien_scout_2": `Téléporteur Portable`,
            "alien_scout_3": `Scanner d'Objets Cachés`,
            "alien_scout_4": `Pistolet Laser`,
            "space_architect_1": `Projecteur de Gravité`,
            "space_architect_2": `Combinaison Spatiale Matérialisante`,
            "space_architect_3": `Carte Spatiale`,
            "space_architect_4": `Stabilisateur Planétaire`,
            "galactic_explorer_1": `Scanner Multispectral`,
            "galactic_explorer_2": `Traducteur Xeno`,
            "galactic_explorer_3": `Module de Bio-Laboratoire`,
            "galactic_explorer_4": `Assistant Drone Personnel`,
            "alien_soldier_1": `Carabine de Rails Magnétique`,
            "alien_soldier_2": `Bouclier Nanostructuré`,
            "alien_soldier_3": `Système Bionique Intégré`,
            "alien_soldier_4": `Compagnon Holographique Tactique`,
            "superhuman": "Superhumain",
            "infected": "Infecté",
            "ratman": "Ratman",
            "ghoul": "Goule",
            "mutant": "Mutant",
            "supermutant": "Super-Mutant",
            "cyborg": "Cyborg",
            "android": "Androïde",
            "robot": "Robot",
            "gray": "Gris",
            "alien": "Extraterrestre",
            "hybrid": "Hybride",
            "ancient": "Ancien",
            "total-weight-label": "Poids Total (kg):",
            "tooltip-max-weight": "Calculé par le GM à la fin de chaque tour. Poids maximum = (Force + Endurance) * 3 + 10",
            "max-weight-label": "Poids Maximum (kg):",
            "use-weight-control-label": "Utiliser le poids dans le jeu",
            "maximum-weight-exceeded-label": "Poids maximum du personnage dépassé! Les objets spécifiés ont été déplacés dans le panier: ",
            "statsGroup-weight-button-label": "Poids",
            "tooltip-inventory-basket": "Les objets retirés de l'inventaire sont placés ici. Vider automatiquement à la fin de chaque tour. Vous pouvez les restaurer avant qu'ils ne disparaissent.",
            "inventory-basket-button-label": "Panier (Inventaire)",
            "inventory-restore": "Restaurer",
            "tooltip-critical-weight": "En dépassant le poids maximum, le personnage peut encore recevoir des objets dans l'inventaire pendant un certain temps, mais devient surchargé. Un personnage surchargé perd rapidement de l'énergie. Après avoir dépassé le poids critique, le personnage ne peut plus porter de nouveaux objets.",
            "critical-weight-label": "Poids Critique (kg):",
            "weight-status-label": "État:",
            "weight-status-value-normal": "Normal",
            "weight-status-value-bad": "Surchargé",
            "first_contact": "Premier Contact",
            "zero_patient": "Patient Zéro",
            "doomsday": "Jour du Jugement",
            "experiment": "Expérience",
            "awakening_ancients": "Éveil des Anciens",
            "call_from_space": "Appel de l'Espace",
            "infected_city": "Ville Infectée",
            "dead_zone": "Zone Morte",
            "anomalous_territory": "Territoire Anomalie",
            "underground_world": "Monde Souterrain",
            "ruins_megapolis": "Ruines de la Mégapole",
            "mutant_lair": "Repaire des Mutants",
            "forgotten_laboratory": "Laboratoire Oublié",
            "fight_with_horde": "Combat contre la Horde",
            "vault_life": "Vie dans le Vault",
            "besieged_city": "Ville Assiégée",
            "nomadic_life": "Vie Nomade",
            "pirate_haven": "Havre Pirate",
            "wild_tribe": "Tribu Sauvage",
            "trade_caravan": "Caravane Commerciale",
            "last_city": "Dernière Ville",
            "gang_war": "Guerre des Gangs",
            "resistance": "Résistance",
            "bounty_hunters": "Chasseurs de Têtes",
            "wasteland_mercenaries": "Mercenaires du Désert",
            "battle_for_resources": "Bataille pour les Ressources",
            "ideology_conflict": "Conflit Idéologique",
            "cure_search": "Recherche de Remède",
            "precursors_secret": "Secret des Précursseurs",
            "alien_first_contact": "Premier Contact avec les Extraterrestres",
            "paradise_search": "Recherche du Paradis",
            "mutant_origin": "Origine des Mutants",
            "vault_secrets": "Secrets du Vault",
            "star_ark": "Arche Stellaire",
            "cyber_rebels": "Cyber-Insurgés",
            "machine_uprising": "Révolte des Machines",
            "mech_wars": "Guerres Mécaniques",
            "engineer_guild": "Guilde des Ingénieurs",
            "cyber_city": "Ville Cyber",
            "psionic_war": "Guerre Psionique",
            "psionic_school": "École Psionique",
            "psionic_hunt": "Chasse Psionique",
            "psy_defense": "Défense Psionique",
            "alien_invasion": "Invasion Extraterrestre",
            "galactic_diplomacy": "Diplomatie Galactique",
            "star_patrol": "Patrouille Stellaire",
            "war_of_the_worlds": "Guerre des Mondes",
            "artifact_search": "Recherche d'Artéfacts",
            "hospital_outbreak": "Épidémie Hospitalière",
            "shopping_mall_siege": "Siège du Centre Commercial",
            "prison_break": "Évasion de Prison",
            "highrise_trap": "Piège en Gratte-Ciel",
            "subway_escape": "Évasion du Métro",
            "ground_zero": "Point Zéro",
            "patient_zero_hunt": "Chasse au Patient Zéro",
            "the_last_broadcast": "La Dernière Diffusion",
            "evacuation_failed": "Évacuation Échouée",
            "first_bite": "Premier Mord",
            "the_fall": "La Chute",
            "scorched_earth": "Terre Brûlée",
            "water_wars": "Guerres pour l'Eau",
            "beneath_the_sand": "Sous le Sable",
            "fortress_of_madness": "Forteresse de la Folie",
            "ghost_ship": "Navire Fantôme",
            "the_frozen_north": "Le Nord Gelé",
            "jungle_hunt": "Chasse dans la Jungle",
            "sky_pirates": "Pirates du Ciel",
            "mutant_island": "Île des Mutants",
            "lost_colony": "Colonie Perdue",
            "first_contact_desc": "L'invasion extraterrestre commence.",
            "zero_patient_desc": "Le virus zombie commence à se propager.",
            "doomsday_desc": "Le début d'une guerre nucléaire ou l'impact d'une météorite.",
            "experiment_desc": "Une expérience scientifique ratée a échappé à tout contrôle.",
            "awakening_ancients_desc": "La fin de la cryostase des Anciens, une race de précurseurs très avancée. Leur retour dans un monde transformé.",
            "call_from_space_desc": "L'arrivée du premier vaisseau de reconnaissance extraterrestre sur Terre.",
            "infected_city_desc": "Survivre dans une ville envahie par une épidémie de zombies.",
            "dead_zone_desc": "Voyage dans un désert radioactif.",
            "anomalous_territory_desc": "Exploration d'une zone pleine d'anomalies et de mutants.",
            "underground_world_desc": "Vie dans un métro abandonné ou un réseau de bunkers.",
            "ruins_megapolis_desc": "Explorer les ruines d'une mégapole à la recherche de ressources.",
            "mutant_lair_desc": "Survivre à proximité d'une colonie de mutants dangereux.",
            "forgotten_laboratory_desc": "Localiser et étudier un laboratoire scientifique abandonné.",
            "fight_with_horde_desc": "Protéger une colonie contre une vague d'infectés enragés.",
            "vault_life_desc": "La vie quotidienne dans un bunker souterrain, avec des conflits internes.",
            "besieged_city_desc": "Défendre le dernier bastion de la civilisation contre des menaces extérieures.",
            "nomadic_life_desc": "Voyager avec un groupe de survivants en quête d'un nouveau foyer.",
            "pirate_haven_desc": "Vivre parmi des pirates et des contrebandiers sur les épaves de navires.",
            "wild_tribe_desc": "Survivre dans une tribu primitive, en confrontation avec la civilisation.",
            "trade_caravan_desc": "Protéger et escorter une caravane commerciale à travers des territoires dangereux.",
            "last_city_desc": "Défendre la dernière ville contre des pillards et des mutants.",
            "gang_war_desc": "Lutte de pouvoir entre bandes de pillards.",
            "resistance_desc": "Lutte clandestine contre un régime totalitaire.",
            "bounty_hunters_desc": "Accepter des contrats risqués pour capturer des criminels.",
            "wasteland_mercenaries_desc": "Remplir des missions de mercenaires, arbitrer des conflits entre clans.",
            "battle_for_resources_desc": "Conflit entre colonies pour le contrôle de ressources précieuses.",
            "ideology_conflict_desc": "Affrontement entre factions aux idéologies distinctes.",
            "cure_search_desc": "Recherche d'un vaccin contre le virus zombie ou un autre fléau.",
            "precursors_secret_desc": "Étude des ruines et des artefacts d'une civilisation ancienne.",
            "alien_first_contact_desc": "Mission diplomatique ou espionnage avec des extraterrestres.",
            "paradise_search_desc": "Recherche d'un lieu sûr légendaire, dont parlent les rumeurs dans les Terres désolées.",
            "mutant_origin_desc": "Étude des causes des mutations et recherche d'un moyen de les inverser.",
            "vault_secrets_desc": "Révéler les expériences secrètes menées dans les Abris.",
            "star_ark_desc": "Retrouver et lancer un vaisseau spatial opérationnel.",
            "cyber_rebels_desc": "Se dresser contre la corporation qui contrôle les technologies cybernétiques.",
            "machine_uprising_desc": "Guerre contre des robots et une IA en rébellion.",
            "mech_wars_desc": "Batailles impliquant des robots géants et des machines de guerre.",
            "engineer_guild_desc": "Rivalité entre groupes d'ingénieurs pour acquérir des technologies rares.",
            "cyber_city_desc": "Vivre dans une ville gérée par une intelligence artificielle.",
            "psionic_war_desc": "Conflit entre psioniques et ceux qui les craignent.",
            "psionic_school_desc": "Formation et développement de capacités psioniques.",
            "psionic_hunt_desc": "Traquer et neutraliser des psioniques dangereux.",
            "psy_defense_desc": "Protection contre les attaques et manipulations psioniques.",
            "alien_invasion_desc": "Défendre la Terre d'une invasion extraterrestre à grande échelle.",
            "galactic_diplomacy_desc": "Établir le contact et des relations avec des races extraterrestres.",
            "star_patrol_desc": "Patrouiller l'espace pour prévenir les menaces.",
            "war_of_the_worlds_desc": "Participer à un conflit interstellaire aux côtés d'une race.",
            "artifact_search_desc": "Rechercher et étudier des artefacts d'une civilisation alien.",
            "hospital_outbreak_desc": "Vous êtes piégé dans un hôpital rempli d'infectés. Trouvez une sortie avant qu'il ne soit trop tard.",
            "shopping_mall_siege_desc": "Un groupe de survivants s'est retranché dans un centre commercial. Défendez-le contre des vagues de zombies et trouvez un moyen d'en sortir.",
            "prison_break_desc": "Le virus zombie a atteint la prison. Détenus et gardiens doivent s'unir pour s'échapper.",
            "highrise_trap_desc": "Vous êtes enfermé dans les étages supérieurs d'un gratte-ciel. Les zombies arrivent et les ascenseurs sont hors service. Descendez en combattant pour votre survie.",
            "subway_escape_desc": "Vous vous êtes réfugié dans le métro, mais les tunnels sont envahis de zombies. Frayez-vous un chemin jusqu'à la prochaine station.",
            "ground_zero_desc": "Vous êtes témoin du tout début de l'épidémie. La ville sombre dans le chaos — essayez de survivre et de vous échapper.",
            "patient_zero_hunt_desc": "Les autorités recherchent le patient zéro pour endiguer le virus. Vous faites partie de ceux qui peuvent le localiser.",
            "the_last_broadcast_desc": "Vous êtes un animateur radio qui émet depuis un studio assiégé. Informez les survivants tant que vous le pouvez.",
            "evacuation_failed_desc": "L'évacuation a échoué. Les hélicoptères sont partis, vous laissant encerclé par les zombies. Trouvez un autre moyen de fuir.",
            "first_bite_desc": "Vous avez été mordu. Il ne vous reste que peu de temps pour trouver un remède ou accepter l'inévitable.",
            "the_fall_desc": "Vous êtes un habitant d'une métropole qui vient d'apprendre l'existence du virus zombie. La ville est en flammes, la panique règne dans les rues — sauvez votre famille.",
            "scorched_earth_desc": "Après une guerre nucléaire, la surface de la Terre est brûlée et désolée. Survivez dans les ruines, luttant pour des ressources rares et évitant les radiations.",
            "water_wars_desc": "Dans un monde où l'eau potable vaut de l'or, vous devez trouver ou protéger une source d'eau pour votre colonie.",
            "beneath_the_sand_desc": "Sous les sables du désert se cachent les ruines d'une ancienne civilisation, remplies de trésors et de dangers. Méfiez-vous des vers des sables et des pièges.",
            "fortress_of_madness_desc": "Le chef d'une colonie est devenu fou et a transformé sa ville en forteresse imprenable. Renversez-le pour libérer la population.",
            "ghost_ship_desc": "Vous vous réveillez à bord d'un navire fantôme à la dérive. Découvrez le mystère de son équipage et trouvez un moyen de regagner la terre ferme.",
            "the_frozen_north_desc": "Le nord est plongé dans un hiver éternel. Survivez au froid extrême, aux bêtes mutantes et aux autres survivants désespérés.",
            "jungle_hunt_desc": "Des jungles dangereuses remplies de mutants, de plantes vénéneuses et de pièges ancestraux. Menez une expédition pour retrouver un artefact perdu.",
            "sky_pirates_desc": "Devenez un pirate des airs naviguant à bord d'un dirigeable. Affrontez d'autres pirates, commerçez avec des cités volantes et explorez des îles flottantes.",
            "mutant_island_desc": "Vous avez échoué sur une île peuplée d'une tribu de mutants. Faites-vous des alliés ou tentez de vous échapper.",
            "lost_colony_desc": "Vous faites partie de l'équipage d'un vaisseau spatial qui s'est écrasé sur une Terre envahie de zombies. Cherchez des survivants et bâtissez une nouvelle colonie en repoussant les hordes d'infectés.",
            "character-post-apocalyptic-name": "Entrez le nom du personnage",
            "post-apocalypse-race-message-label": "Description de la race :",
            "post-apocalypse-class-message-label": "Description de la classe :",
            "tooltip-post-apocalypse-rpg": "Si le curseur est rouge, il est activé. RPG est le mode de jeu. En mode RPG, le gameplay consiste à développer le personnage, et les compétences et l'inventaire sont cruciaux. Si désactivé, le jeu se déroule en mode Roleplay, qui se concentre sur la création d'une histoire intéressante, et les compétences et l'inventaire ont une importance secondaire.",
            "post-apocalypse-tooltip-noMagic": "Si activé (couleur rouge), le maître de jeu crée un monde sans magie et uniquement avec des capacités réalistes. Si désactivé, le monde aura de la magie et des capacités irréalistes.",
            "post-apocalypse-nonmagic-mode-name": "Pas de magie dans le monde",
            "create-character-post-apocalyptic": "Démarrer le jeu",
            "random-character-post-apocalyptic": "Personnage aléatoire",
            "load-character-post-apocalyptic": "Charger l'autosauvegarde",
            "load-savefile-post-apocalyptic": "Charger le fichier",
            "my-game-post-apocalyptic": "Mon cadre",
            "ai-provider-label4": "Fournisseur d'IA",
            "ai-none4-label": "Aucun sélectionné",
            "ai-model-label4": "Modèle d'IA",
            "ai-model4": "Entrez le nom du modèle d'IA",
            "api-key-label4": "Votre clé API",
            "api-key-button4": "Afficher pendant 10 secondes",
            "api-key4": "Pour des raisons de sécurité, assurez-vous d'utiliser une clé API avec une faible limite d'utilisation",
            "additional-settings-label4": "Vous pouvez voir les paramètres supplémentaires dans le panneau déroulant à droite. Cliquez sur le bouton dans le coin inférieur droit de l'écran pour accéder au panneau de configuration.",
            "post-apocalypse-campaign-message-label": "Description de la campagne :",
            "post-apocalyptic-game": "Jeu Rapide - Post-Apocalypse",
            "create-character-post-apocalyptic-label": "Créez votre personnage",
            "weight-reduction-label": "Réduction du Poids du Contenu",
            "thinking-module-iterations-label": "Nombre de tentatives que le module de réflexion entreprendra pour réfléchir à la réponse.",
            "use-literary-prompt-label": "Le Maître du Jeu s'efforcera d'adopter un style littéraire",
            "use-erotic-prompt-label": "Autoriser le contenu 21+ dans le jeu",
            "abort-error-message": "Requête annulée par le joueur",
            "common-error-message": "Erreur lors de la requête :",
            "cancel-button": "Annuler",
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
            'start-spd', 'start-money', 'start-exp', 'start-atr', 'start-prs',
            'start-location-description', 'start-location',
            'character-starting-inventory', 'character-prehistory',
            'character-class-description', 'character-class2',
            'character-race-description', 'character-race2',
            'character-gender2', 'character-description',
            'character-name-my-game', 'world-description',
            'character-name', 'api-key', 'api-key2', 'api-key3', 'ai-model', 'ai-model2', 'ai-model3',
            'max-gm-symbols', 'my-rules', 'user-input', 'style-of-image-input', 'system-instructions',
            'world-system-instructions', "character-post-apocalyptic-name", "ai-model4", "api-key4"
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
            'luck-label', 'attractiveness-label', 'persuasion-label', 'money-label', 'send-button', 'resend-button',
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
            "status-appearanceDescription-label", "status-statusInSociety-label", "status-positionInSociety-label", "status-affiliationWithOrganizations-label",
            "quest-info-questBackground-label", "quest-info-description-label", "use-thinking-module-label", "log-thinking-button-label",
            "total-weight-label", "tooltip-max-weight", "max-weight-label", "use-weight-control-label", "statsGroup-weight-button-label",
            "tooltip-inventory-basket", "inventory-basket-button-label", "inventory-restore", "tooltip-critical-weight", "critical-weight-label", "weight-status-label",
            "first_contact", "zero_patient", "doomsday",
            "experiment", "awakening_ancients", "call_from_space",
            "infected_city", "dead_zone", "anomalous_territory",
            "underground_world", "ruins_megapolis", "mutant_lair",
            "forgotten_laboratory", "fight_with_horde", "vault_life",
            "besieged_city", "nomadic_life", "pirate_haven",
            "wild_tribe", "trade_caravan", "last_city",
            "gang_war", "resistance", "bounty_hunters",
            "wasteland_mercenaries", "battle_for_resources", "ideology_conflict",
            "cure_search", "precursors_secret", "alien_first_contact",
            "paradise_search", "mutant_origin", "vault_secrets",
            "star_ark", "cyber_rebels", "machine_uprising",
            "mech_wars", "engineer_guild", "cyber_city",
            "psionic_war", "psionic_school", "psionic_hunt",
            "psy_defense", "alien_invasion", "galactic_diplomacy",
            "star_patrol", "war_of_the_worlds", "artifact_search",
            "hospital_outbreak", "shopping_mall_siege", "prison_break",
            "highrise_trap", "subway_escape", "ground_zero",
            "patient_zero_hunt", "the_last_broadcast", "evacuation_failed",
            "first_bite", "the_fall", "scorched_earth",
            "water_wars", "beneath_the_sand", "fortress_of_madness",
            "ghost_ship", "the_frozen_north", "jungle_hunt",
            "sky_pirates", "mutant_island", "lost_colony",
            'first_contact_desc', 'zero_patient_desc', 'doomsday_desc',
            'experiment_desc', 'awakening_ancients_desc', 'call_from_space_desc',
            'infected_city_desc', 'dead_zone_desc', 'anomalous_territory_desc',
            'underground_world_desc', 'ruins_megapolis_desc', 'mutant_lair_desc',
            'forgotten_laboratory_desc', 'fight_with_horde_desc', 'vault_life_desc',
            'besieged_city_desc', 'nomadic_life_desc', 'pirate_haven_desc',
            'wild_tribe_desc', 'trade_caravan_desc', 'last_city_desc',
            'gang_war_desc', 'resistance_desc', 'bounty_hunters_desc',
            'wasteland_mercenaries_desc', 'battle_for_resources_desc', 'ideology_conflict_desc',
            'cure_search_desc', 'precursors_secret_desc', 'alien_first_contact_desc',
            'paradise_search_desc', 'mutant_origin_desc', 'vault_secrets_desc',
            'star_ark_desc', 'cyber_rebels_desc', 'machine_uprising_desc',
            'mech_wars_desc', 'engineer_guild_desc', 'cyber_city_desc',
            'psionic_war_desc', 'psionic_school_desc', 'psionic_hunt_desc',
            'psy_defense_desc', 'alien_invasion_desc', 'galactic_diplomacy_desc',
            'star_patrol_desc', 'war_of_the_worlds_desc', 'artifact_search_desc',
            'hospital_outbreak_desc', 'shopping_mall_siege_desc', 'prison_break_desc',
            'highrise_trap_desc', 'subway_escape_desc', 'ground_zero_desc',
            'patient_zero_hunt_desc', 'the_last_broadcast_desc', 'evacuation_failed_desc',
            'first_bite_desc', 'the_fall_desc', 'scorched_earth_desc',
            'water_wars_desc', 'beneath_the_sand_desc', 'fortress_of_madness_desc',
            'ghost_ship_desc', 'the_frozen_north_desc', 'jungle_hunt_desc',
            'sky_pirates_desc', 'mutant_island_desc', 'lost_colony_desc',
            "human", "superhuman", "infected",
            "ratman", "ghoul", "mutant",
            "supermutant", "cyborg", "android",
            "robot", "gray", "alien",
            "hybrid", "ancient",
            "human_desc", "superhuman_desc", "infected_desc",
            "ratman_desc", "ghoul_desc", "mutant_desc",
            "supermutant_desc", "cyborg_desc", "android_desc",
            "robot_desc", "gray_desc", "alien_desc",
            "hybrid_desc", "ancient_desc",
            "hacker", "scout", "bounty_hunter",
            "survivor", "raider", "bandit",
            "wanderer", "veteran", "mercenary",
            "stalker", "citizen", "vault_dweller",
            "savage", "soldier", "engineer",
            "medic", "sniper", "virologist",
            "biotechnician", "reborn", "psionic",
            "telekinetic", "telepath", "pyromancer",
            "cryomancer", "mechanized_soldier", "mechanical_guardian",
            "cybernetic_assassin", "cybernetic_spy", "precursor_agent",
            "precursor_scientist", "precursor_soldier", "xenomant",
            "alien_scout", "space_architect", "galactic_explorer",
            "alien_soldier",
            "hacker_descr", "scout_descr", "bounty_hunter_descr",
            "survivor_descr", "raider_descr", "bandit_descr",
            "wanderer_descr", "veteran_descr", "mercenary_descr",
            "stalker_descr", "citizen_descr", "vault_dweller_descr",
            "savage_descr", "soldier_descr", "engineer_descr",
            "medic_descr", "sniper_descr", "virologist_descr",
            "biotechnician_descr", "reborn_descr", "psionic_descr",
            "telekinetic_descr", "telepath_descr", "pyromancer_descr",
            "cryomancer_descr", "mechanized_soldier_descr", "mechanical_guardian_descr",
            "cybernetic_assassin_descr", "cybernetic_spy_descr", "precursor_agent_descr",
            "precursor_scientist_descr", "precursor_soldier_descr", "xenomant_descr",
            "alien_scout_descr", "space_architect_descr", "galactic_explorer_descr",
            "alien_soldier_descr", "post-apocalypse-races", "post-apocalypse-classes",
            "post-apocalypse-race-message", "post-apocalypse-class-message", "post-apocalypse-campaign-message",
            "post-apocalypse-race-message-label", "post-apocalypse-class-message-label", "tooltip-post-apocalypse-rpg",
            "post-apocalypse-tooltip-noMagic", "post-apocalypse-nonmagic-mode-name", "create-character-post-apocalyptic",
            "random-character-post-apocalyptic", "load-character-post-apocalyptic", "load-savefile-post-apocalyptic",
            "my-game-post-apocalyptic", "ai-provider-label4", "ai-none4-label", "ai-model-label4",
            "api-key-label4", "api-key-button4", "api-key4", "additional-settings-label4", "tooltip-provider-ai4",
            "post-apocalypse-campaign-message-label", "post-apocalyptic-game", "create-character-post-apocalyptic-label",
            "thinking-module-iterations-label", "use-literary-prompt-label", "use-erotic-prompt-label", "cancel-button",
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
        translateOptions('character-post-apocalyptic-gender');
        translateOptions('character-post-apocalyptic-race');
        translateOptions('character-post-apocalyptic-class');
        translateOptions('campaign-post-apocalyptic-select');
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

        setShortNewGameMessage: function (name, gender, race, characterClass, campaign) {
            const id = "game_starting_message";

            this.setTranslation("english-language", id, `This is the start of a new game, character name: '${name}', gender: '${gender}', race: '${race}', class: '${characterClass}', campaign: '${campaign}'!`);
            this.setTranslation("russian-language", id, `Это начало новой игры, имя персонажа: '${name}', его пол: '${gender}', раса: '${race}', класс: '${characterClass}', сюжетная кампания: '${campaign}'!`);
            this.setTranslation("spanish-language", id, `¡Este es el comienzo de un nuevo juego, nombre del personaje: '${name}', género: '${gender}', raza: '${race}', clase: '${characterClass}', campaña: '${campaign}'!`);
            this.setTranslation("portuguese-language", id, `Este é o início de um novo jogo, nome do personagem: '${name}', gênero: '${gender}', raça: '${race}', classe: '${characterClass}', campanha: '${campaign}'!`);
            this.setTranslation("hindi-language", id, `यह एक नए खेल की शुरुआत है, पात्र का नाम: '${name}', लिंग: '${gender}', जाति: '${race}', वर्ग: '${characterClass}', अभियान: '${campaign}'!`);
            this.setTranslation("german-language", id, `Dies ist der Beginn eines neuen Spiels, Charaktername: '${name}', Geschlecht: '${gender}', Rasse: '${race}', Klasse: '${characterClass}', Kampagne: '${campaign}'!`);
            this.setTranslation("french-language", id, `C'est le début d'un nouveau jeu, nom du personnage: '${name}', sexe: '${gender}', race: '${race}', classe: '${characterClass}', campagne: '${campaign}'!`);

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

        setProviderTooltip: function () {
            const ids = ["tooltip-provider-ai", "tooltip-provider-ai2", "tooltip-provider-ai3", "tooltip-provider-ai4"];

            const translations = {
                "russian-language": `Провайдеры нейросетей.
Для всех провайдеров, кроме Websim, вам нужно зарегистрироваться на соответствующем сайте и создать API ключ или Access Token. Обращайте внимание на контекст нейросети - у Легендарики очень большой промпт, и он только увеличивается со временем из-за истории чата и других данных, которые используются ГМ-ом. Нужен контекст как минимум 128 000 токенов. Информация, описанная здесь, актуальна на момент указанной даты (29.12.2024).

Chat01 (https://chat01.ai/). Доступ к OpenAI o1. Бесплатного тарифа нет. При регистрации дают 10 кредитов, 2 кредита стоит запрос к o1.
Модель: o1, o1-mini, gpt-4o

Cohere (https://coral.cohere.com/). Предоставляет полностью бесплатный доступ к моделям Command R.
С чего начать: модель command-r-plus

Gitee AI (https://ai.gitee.com/). Китайский аналог Hugging Face. Смотрите доступные модели здесь: https://ai.gitee.com/serverless-api#text-generation

Google AI Studio (https://ai.google.dev/aistudio). Все модели имеют бесплатный лимит, смотрите на сайте студии. Попробуйте экспериментальные модели - они обычно имеют больший лимит бесплатных сообщений в день.
С чего начать: модель gemini-1.5-pro

Groq (https://groq.com/). Groq предоставляет доступ к различным бесплатным моделям, но сильно ограничивает их по контексту. Сейчас на этом сайте нет бесплатных моделей, которые бы хорошо работали в Легендарике, но все может измениться в будущем. Платные модели, скорее всего, работают хорошо. Смотрите список моделей здесь: https://console.groq.com/docs/models

Hugging Face (https://huggingface.co/models?inference=warm&other=conversational&sort=trending). Большой репозиторий для нейросетей. Для доступа к нему используется Inference API, и только те модели, которые поддерживают его, доступны для игры. Есть ограничение на количество сообщений в день, которое становится большим с платной подпиской. Если модели посылают нечитаемый текст в качестве ответа, значит либо модель очень слабая, либо температура высокая. В этом случае, попробуйте понизить температуру или сменить модель. 
С чего начать: модель Qwen/Qwen2.5-72B-Instruct  (температура 0.4)

Mistral AI (https://mistral.ai/). На сайте Mistral AI есть возможность принять участие в "экспериментальном" тарифном плане, что делает все модели Mistral бесплатными для использования.
С чего начать: модель mistral-large-latest

Openrouter (https://openrouter.ai/). Есть бесплатные модели, есть платные. У бесплатных моделей есть лимит сообщений в день.

Websim. Зависит от нейросети, которую использует Websim.`,

                "english-language": `AI Providers.
For all providers except Websim, you need to register on the respective website and create an API key or Access Token. Pay attention to the AI's context—Legendary has a very large prompt, and it only increases over time due to the chat history and other data used by the GM. A context of at least 128,000 tokens is required. The information provided here is accurate as of (29.12.2024).

Chat01 (https://chat01.ai/). Access to OpenAI o1. There is no free tier. You get 10 credits upon registration, and each request to o1 costs 2 credits.
Models: o1, o1-mini, gpt-4o

Cohere (https://coral.cohere.com/). Provides completely free access to Command R models.
Where to start: command-r-plus model

Gitee AI (https://ai.gitee.com/). The Chinese equivalent of Hugging Face. Check available models here: https://ai.gitee.com/serverless-api#text-generation

Google AI Studio (https://ai.google.dev/aistudio). All models have a free quota; see the Studio website for details. Try experimental models—they often have a higher daily free message limit.
Where to start: gemini-1.5-pro model

Groq (https://groq.com/). Groq provides access to various free models, but heavily restricts them by context. Currently, there are no free models on this site that work well with Legendary, but that may change in the future. Paid models likely work well. See the list of models here: https://console.groq.com/docs/models

Hugging Face (https://hug[thinking]

gingface.co/models?inference=warm&other=conversational&sort=trending). A large repository of neural networks. Access is via the Inference API, and only models that support it are available for the game. There is a daily message limit, which increases with a paid subscription. If models respond with unreadable text, it may indicate the model is weak or the temperature is set too high. Try lowering the temperature or switching to a different model.
Where to start: Qwen/Qwen2.5-72B-Instruct (temperature 0.4)

Mistral AI (https://mistral.ai/). Mistral AI offers an "experimental" plan that makes all Mistral models free to use.
Where to start: mistral-large-latest

Openrouter (https://openrouter.ai/). Has both free and paid models. Free models have a daily message limit.

Websim. Depends on the neural network used by Websim.`,

                "spanish-language": `Proveedores de IA.
Para todos los proveedores, excepto Websim, debes registrarte en el sitio web correspondiente y crear una clave API o Access Token. Presta atención al contexto de la IA: Legendary tiene un prompt muy extenso, y solo aumenta con el tiempo debido al historial del chat y otros datos utilizados por el GM. Se requiere un contexto de al menos 128,000 tokens. La información aquí descrita es precisa a fecha de (29.12.2024).

Chat01 (https://chat01.ai/). Acceso a OpenAI o1. No hay plan gratuito. Al registrarte, recibes 10 créditos, y cada solicitud a o1 cuesta 2 créditos.
Modelos: o1, o1-mini, gpt-4o

Cohere (https://coral.cohere.com/). Proporciona acceso completamente gratuito a los modelos Command R.
Dónde empezar: modelo command-r-plus

Gitee AI (https://ai.gitee.com/). El equivalente chino de Hugging Face. Consulta los modelos disponibles aquí: https://ai.gitee.com/serverless-api#text-generation

Google AI Studio (https://ai.google.dev/aistudio). Todos los modelos tienen un límite gratuito; consulta el sitio web del estudio. Prueba modelos experimentales: suelen tener un límite diario más elevado de mensajes gratuitos.
Dónde empezar: modelo gemini-1.5-pro

Groq (https://groq.com/). Groq ofrece acceso a varios modelos gratuitos, pero los restringe mucho en función del contexto. Actualmente, no hay modelos gratuitos en este sitio que funcionen bien con Legendary, pero esto podría cambiar en el futuro. Es probable que los modelos de pago funcionen bien. Consulta la lista de modelos aquí: https://console.groq.com/docs/models

Hugging Face (https://huggingface.co/models?inference=warm&other=conversational&sort=trending). Un gran repositorio de redes neuronales. El acceso se realiza a través de la Inference API, y solo los modelos que la soportan están disponibles para el juego. Hay un límite de mensajes diarios, que aumenta con una suscripción de pago. Si los modelos responden con texto ilegible, podría indicar que el modelo es débil o la temperatura es demasiado alta. Prueba reducir la temperatura o cambiar de modelo.
Dónde empezar: Qwen/Qwen2.5-72B-Instruct (temperatura 0.4)

Mistral AI (https://mistral.ai/). Mistral AI ofrece un plan "experimental" que hace que todos los modelos de Mistral sean gratuitos.
Dónde empezar: mistral-large-latest

Openrouter (https://openrouter.ai/). Hay modelos gratuitos y de pago. Los gratuitos tienen un límite diario de mensajes.

Websim. Depende de la red neuronal que utilice Websim.`,

                "portuguese-language": `Provedores de IA.
Para todos os provedores, exceto Websim, você precisa se registrar no site correspondente e criar uma chave de API ou Token de Acesso. Preste atenção ao contexto da IA: Legendary tem um prompt muito grande, e isso só aumenta ao longo do tempo devido ao histórico do chat e outros dados usados pelo GM. É necessário um contexto de pelo menos 128.000 tokens. As informações descritas aqui são precisas até a data (29.12.2024).

Chat01 (https://chat01.ai/). Acesso ao OpenAI o1. Não há plano gratuito. Você recebe 10 créditos ao se registrar, e cada solicitação ao o1 custa 2 créditos.
Modelos: o1, o1-mini, gpt-4o

Cohere (https://coral.cohere.com/). Fornece acesso completamente gratuito aos modelos Command R.
Onde começar: modelo command-r-plus

Gitee AI (https://ai.gitee.com/). Equivalente chinês do Hugging Face. Consulte os modelos disponíveis aqui: https://ai.gitee.com/serverless-api#text-generation

Google AI Studio (https://ai.google.dev/aistudio). Todos os modelos têm um limite gratuito; consulte o site do estúdio. Experimente modelos experimentais — geralmente têm um limite maior de mensagens gratuitas por dia.
Onde começar: modelo gemini-1.5-pro

Groq (https://groq.com/). O Groq fornece acesso a vários modelos gratuitos, mas os restringe fortemente pelo contexto. Atualmente, não há modelos gratuitos neste site que funcionem bem com Legendary, mas isso pode mudar no futuro. Modelos pagos provavelmente funcionam bem. Veja a lista[thinking]

 de modelos aqui: https://console.groq.com/docs/models

Hugging Face (https://huggingface.co/models?inference=warm&other=conversational&sort=trending). Um grande repositório de redes neurais. O acesso é feito pela Inference API, e apenas os modelos que a suportam estão disponíveis para o jogo. Há um limite diário de mensagens, que aumenta com uma assinatura paga. Se os modelos responderem com texto ilegível, isso pode indicar que o modelo é fraco ou a temperatura está muito alta. Tente diminuir a temperatura ou trocar de modelo.
Onde começar: Qwen/Qwen2.5-72B-Instruct (temperatura 0.4)

Mistral AI (https://mistral.ai/). O site da Mistral AI oferece um plano "experimental" que torna todos os modelos Mistral gratuitos para uso.
Onde começar: mistral-large-latest

Openrouter (https://openrouter.ai/). Existem modelos gratuitos e pagos. Modelos gratuitos têm um limite diário de mensagens.

Websim. Depende da rede neural que o Websim utiliza.`,

                "hindi-language": `आईए प्रदाता।
Websim को छोड़कर सभी प्रदाताओं के लिए, आपको संबंधित वेबसाइट पर पंजीकरण करना होगा और API कुंजी या Access Token बनाना होगा। आईए के संदर्भ पर ध्यान दें—Legendary में बहुत बड़ा प्रॉम्प्ट है, जो समय के साथ चैट इतिहास और अन्य डेटा के कारण बढ़ता रहता है, जिसे GM उपयोग करता है। कम से कम 128,000 टोकन का संदर्भ आवश्यक है। यहाँ दी गई जानकारी (29.12.2024) की तारीख तक सही है।

Chat01 (https://chat01.ai/). OpenAI o1 तक पहुँचनें की सुविधा। कोई निःशुल्क योजना नहीं है। पंजीकरण पर 10 क्रेडिट मिलते हैं, तथा o1 के लिए प्रत्येक अनुरोध 2 क्रेडिट खर्च करता है।
मॉडल: o1, o1-mini, gpt-4o

Cohere (https://coral.cohere.com/). Command R मॉडलों तक पूरी तरह निःशुल्क पहुँच प्रदान करता है।
शुरू करने के लिए: मॉडल command-r-plus

Gitee AI (https://ai.gitee.com/). Hugging Face का चीनी समकक्ष। यहाँ उपलब्ध मॉडल देखें: https://ai.gitee.com/serverless-api#text-generation

Google AI Studio (https://ai.google.dev/aistudio). सभी मॉडलों की एक निःशुल्क सीमा होती है; स्टूडियो की वेबसाइट देखें। प्रायोगिक मॉडलों को आज़माएँ—अक्सर उनकी मुफ्त संदेश सीमा अधिक होती है।
शुरू करने के लिए: मॉडल gemini-1.5-pro

Groq (https://groq.com/). Groq विभिन्न मुफ्त मॉडलों तक पहुँच प्रदान करता है, लेकिन संदर्भ के आधार पर उन्हें काफी सीमित करता है। वर्तमान में, इस साइट पर कोई मुफ्त मॉडल नहीं है जो Legendary के साथ अच्छा काम करे, लेकिन भविष्य में यह बदल सकता है। सशुल्क मॉडल संभवतः अच्छे से काम करते हैं। यहाँ मॉडलों की सूची देखें: https://console.groq.com/docs/models

Hugging Face (https://huggingface.co/models?inference=warm&other=conversational&sort=trending). न्यूरल नेटवर्क का एक बड़ा रिपॉज़िटरी। इसका उपयोग Inference API के माध्यम से होता है, और केवल वे मॉडल जो इसका समर्थन करते हैं, गेम में उपलब्ध होते हैं। प्रतिदिन संदेशों की एक सीमा होती है, जो सशुल्क सदस्यता के साथ बढ़ जाती है। यदि कोई मॉडल अपठनीय टेक्स्ट भेजता है, तो इसका मतलब या तो मॉडल बहुत कमजोर है या तापमान अधिक है। इस स्थिति में, तापमान कम करने या किसी दूसरे मॉडल का इस्तेमाल करने का प्रयास करें।
शुरू करने के लिए: Qwen/Qwen2.5-72B-Instruct (तापमान 0.4)

Mistral AI (https://mistral.ai/). Mistral AI "प्रयोगात्मक" योजना प्रदान करती है, जो सभी Mistral मॉडलों को निःशुल्क बनाती है।
शुरू करने के लिए: मॉडल mistral-large-latest

Openrouter (https://openrouter.ai/). निःशुल्क और सशुल्क दोनों तरह के मॉडल हैं। निःशुल्क मॉडलों की प्रतिदिन संदेश सीमा होती है।

Websim. यह Websim द्वारा उपयोग किए जाने वाले न्यूरल नेटवर्क पर निर्भर करता है।`,

                "german-language": `KI-Anbieter.
Für alle Anbieter außer Websim müssen Sie sich auf der jeweiligen Website registrieren und einen API-Schlüssel oder Access Token erstellen. Achten Sie auf den Kontext der KI—Legendary verfügt über einen sehr großen Prompt, der sich im Laufe der Zeit durch den Chatverlauf und andere vom GM verwendete Daten vergrößert. Ein Kontext von mindestens 128.000 Tokens ist erforderlich. Die hier beschriebenen Informationen sind zum Datum (29.12.2024) aktuell.

Chat01 (https://chat01.ai/). Zugriff auf OpenAI o1. Es gibt keinen kostenlosen Tarif. Bei der Registrierung erhalten Sie 10 Credits, und jede Anfrage an o1 kostet 2 Credits.
Modelle: o1, o1-mini, gpt-4o

Cohere (https://coral.cohere.com/). Bietet komplett kostenlosen Zugang zu Command R-Modellen.
Wo anfangen: Modell command-r-plus

Gitee AI (https://ai.gitee.com/). Das chinesische Pendant zu Hugging Face. Eine Übersicht der verfügbaren Modelle finden Sie hier: https://ai.gitee.com/serverless-api#text-generation

Google AI Studio (https://ai.google.dev/aistudio). Alle Modelle haben ein kostenloses Kontingent; sehen Sie auf der Studio-Website nach. Probieren Sie experimentelle Modelle aus—sie haben oft ein höheres Tageslimit für kostenlose Nachrichten.
Wo anfangen: Modell gemini-1.5-pro

Groq (https://groq.com/). Groq bietet Zugang zu verschiedenen kostenlosen Modellen, beschränkt sie jedoch stark nach Kontext. Aktuell gibt es auf dieser Seite keine kostenlosen Modelle, die gut mit Legendary funktionieren, aber das kann sich in Zukunft ändern. Kostenpflichtige Modelle funktionieren vermutlich gut. Eine Modellliste finden Sie hier: https://console.groq.com/docs/models

Hugging Face (https://huggingface.co/models?inference=warm&other=conversational&sort=trending). Ein großes Repository für neuronale Netzwerke. Der Zugriff erfolgt über die Inference API, und nur Modelle, die sie unterstützen, sind für das Spiel verfügbar. Es gibt ein tägliches Nachrichtenlimit, das mit einem kostenpflichtigen Abonnement steigt. Wenn Modelle unleserlichen Text senden, könnte das bedeuten, dass das Modell schwach ist oder die Temperatur zu hoch eingestellt ist. Versuchen Sie, die Temperatur zu senken oder das Modell zu wechseln.
Wo anfangen: Qwen/Qwen2.5-72B-Instruct (Temperatur 0.4)

Mistral AI (https://mistral.ai/). Mistral AI bietet einen "experimentellen" Tarif, der alle Mistral-Modelle kostenlos nutzbar macht.
Wo anfangen: Modell mistral-large-latest

Openrouter (https://openrouter.ai/). Es gibt kostenlose und kostenpflichtige Modelle. Kostenlose Modelle haben ein tägliches Nachrichtenlimit.

Websim. Hängt von dem neuronalen Netzwerk ab, das Websim verwendet.`,

                "french-language": `Fournisseurs d'IA.
Pour tous les fournisseurs, sauf Websim, vous devez vous inscrire sur le site concerné et créer une clé API ou un Access Token. Faites attention au contexte de l'IA — Legendary dispose d'un prompt très volumineux, qui ne fait qu'augmenter avec le temps en raison de l'historique de discussion et des autres données utilisées par le MJ. Un contexte d'au moins 128 000 jetons est requis. Les informations décrites ici sont valables à la date (29.12.2024).

Chat01 (https://chat01.ai/). Accès à OpenAI o1. Il n'y a pas de formule gratuite. Vous obtenez 10 crédits lors de l'inscription, et chaque requête à o1 coûte 2 crédits.
Modèles : o1, o1-mini, gpt-4o

Cohere (https://coral.cohere.com/). Fournit un accès entièrement gratuit aux modèles Command R.
Par où commencer : modèle command-r-plus

Gitee AI (https://ai.gitee.com/). L'équivalent chinois de Hugging Face. Consultez les modèles disponibles ici : https://ai.gitee.com/serverless-api#text-generation

Google AI Studio (https://ai.google.dev/aistudio). Tous les modèles ont une limite gratuite ; consultez le site du Studio. Essayez les modèles expérimentaux — ils ont souvent une limite plus élevée de messages gratuits par jour.
Par où commencer : modèle gemini-1.5-pro

Groq (https://groq.com/). Groq offre l'accès à divers modèles gratuits, mais les limite beaucoup en raison du contexte. Actuellement, il n'existe pas de modèles gratuits fonctionnant bien avec Legendary sur ce site, mais cela pourrait changer à l'avenir. Les modèles payants fonctionnent probablement bien. Consultez la liste des modèles ici : https://console.groq.com/docs/models

Hugging Face (https://huggingface.co/models?inference=warm&other=conversational&sort=trending). Un grand dépôt de réseaux neuronaux. L'accès se fait via l'Inference API, et seuls les modèles qui la prennent en charge sont disponibles pour le jeu. Il existe une limite quotidienne de messages, qui augmente avec un abonnement payant. Si les modèles envoient du texte illisible, cela peut indiquer que le modèle est faible ou que la température est trop élevée. Essayez de baisser la température ou de changer de modèle.
Par où commencer : Qwen/Qwen2.5-72B-Instruct (température 0.4)

Mistral AI (https://mistral.ai/). Le site de Mistral AI propose un plan "expérimental" qui rend tous les modèles Mistral gratuits.
Par où commencer : modèle mistral-large-latest

Openrouter (https://openrouter.ai/). Il existe des modèles gratuits et payants. Les modèles gratuits ont une limite quotidienne de messages.

Websim. Dépend du réseau neuronal utilisé par Websim.`
            };

            for (const id of ids) {
                for (const [language, text] of Object.entries(translations)) {
                    this.setTranslation(language, id, text);
                }
            }
        },

        setProviderTooltipForGithubVersion: function () {
            const ids = ["tooltip-provider-ai", "tooltip-provider-ai2", "tooltip-provider-ai3", "tooltip-provider-ai4"];

            const translations = {
                "russian-language": `Провайдеры нейросетей.
Для всех провайдеров, кроме Websim, вам нужно зарегистрироваться на соответствующем сайте и создать API ключ или Access Token. Обращайте внимание на контекст нейросети - у Легендарики очень большой промпт, и он только увеличивается со временем из-за истории чата и других данных, которые используются ГМ-ом. Нужен контекст как минимум 128 000 токенов. Информация, описанная здесь, актуальна на момент указанной даты (29.12.2024).

Chat01 (https://chat01.ai/). Доступ к OpenAI o1. Бесплатного тарифа нет. При регистрации дают 10 кредитов, 2 кредита стоит запрос к o1.
Модель: o1, o1-mini, gpt-4o

Cohere (https://coral.cohere.com/). Предоставляет полностью бесплатный доступ к моделям Command R.
С чего начать: модель command-r-plus

Gitee AI (https://ai.gitee.com/). Китайский аналог Hugging Face. Смотрите доступные модели здесь: https://ai.gitee.com/serverless-api#text-generation

Google AI Studio (https://ai.google.dev/aistudio). Все модели имеют бесплатный лимит, смотрите на сайте студии. Попробуйте экспериментальные модели - они обычно имеют больший лимит бесплатных сообщений в день.
С чего начать: модель gemini-1.5-pro

Groq (https://groq.com/). Groq предоставляет доступ к различным бесплатным моделям, но сильно ограничивает их по контексту. Сейчас на этом сайте нет бесплатных моделей, которые бы хорошо работали в Легендарике, но все может измениться в будущем. Платные модели, скорее всего, работают хорошо. Смотрите список моделей здесь: https://console.groq.com/docs/models

Hugging Face (https://huggingface.co/models?inference=warm&other=conversational&sort=trending). Большой репозиторий для нейросетей. Для доступа к нему используется Inference API, и только те модели, которые поддерживают его, доступны для игры. Есть ограничение на количество сообщений в день, которое становится большим с платной подпиской. Если модели посылают нечитаемый текст в качестве ответа, значит либо модель очень слабая, либо температура высокая. В этом случае, попробуйте понизить температуру или сменить модель. 
С чего начать: модель Qwen/Qwen2.5-72B-Instruct  (температура 0.4)

Mistral AI (https://mistral.ai/). На сайте Mistral AI есть возможность принять участие в "экспериментальном" тарифном плане, что делает все модели Mistral бесплатными для использования.
С чего начать: модель mistral-large-latest

Openrouter (https://openrouter.ai/). Есть бесплатные модели, есть платные. У бесплатных моделей есть лимит сообщений в день.`,

                "english-language": `AI Providers.
For all providers except Websim, you need to register on the respective website and create an API key or Access Token. Pay attention to the AI's context—Legendary has a very large prompt, and it only increases over time due to the chat history and other data used by the GM. A context of at least 128,000 tokens is required. The information provided here is accurate as of (29.12.2024).

Chat01 (https://chat01.ai/). Access to OpenAI o1. There is no free tier. You get 10 credits upon registration, and each request to o1 costs 2 credits.
Models: o1, o1-mini, gpt-4o

Cohere (https://coral.cohere.com/). Provides completely free access to Command R models.
Where to start: command-r-plus model

Gitee AI (https://ai.gitee.com/). The Chinese equivalent of Hugging Face. Check available models here: https://ai.gitee.com/serverless-api#text-generation

Google AI Studio (https://ai.google.dev/aistudio). All models have a free quota; see the Studio website for details. Try experimental models—they often have a higher daily free message limit.
Where to start: gemini-1.5-pro model

Groq (https://groq.com/). Groq provides access to various free models, but heavily restricts them by context. Currently, there are no free models on this site that work well with Legendary, but that may change in the future. Paid models likely work well. See the list of models here: https://console.groq.com/docs/models

Hugging Face (https://hug[thinking]

gingface.co/models?inference=warm&other=conversational&sort=trending). A large repository of neural networks. Access is via the Inference API, and only models that support it are available for the game. There is a daily message limit, which increases with a paid subscription. If models respond with unreadable text, it may indicate the model is weak or the temperature is set too high. Try lowering the temperature or switching to a different model.
Where to start: Qwen/Qwen2.5-72B-Instruct (temperature 0.4)

Mistral AI (https://mistral.ai/). Mistral AI offers an "experimental" plan that makes all Mistral models free to use.
Where to start: mistral-large-latest

Openrouter (https://openrouter.ai/). Has both free and paid models. Free models have a daily message limit.`,

                "spanish-language": `Proveedores de IA.
Para todos los proveedores, excepto Websim, debes registrarte en el sitio web correspondiente y crear una clave API o Access Token. Presta atención al contexto de la IA: Legendary tiene un prompt muy extenso, y solo aumenta con el tiempo debido al historial del chat y otros datos utilizados por el GM. Se requiere un contexto de al menos 128,000 tokens. La información aquí descrita es precisa a fecha de (29.12.2024).

Chat01 (https://chat01.ai/). Acceso a OpenAI o1. No hay plan gratuito. Al registrarte, recibes 10 créditos, y cada solicitud a o1 cuesta 2 créditos.
Modelos: o1, o1-mini, gpt-4o

Cohere (https://coral.cohere.com/). Proporciona acceso completamente gratuito a los modelos Command R.
Dónde empezar: modelo command-r-plus

Gitee AI (https://ai.gitee.com/). El equivalente chino de Hugging Face. Consulta los modelos disponibles aquí: https://ai.gitee.com/serverless-api#text-generation

Google AI Studio (https://ai.google.dev/aistudio). Todos los modelos tienen un límite gratuito; consulta el sitio web del estudio. Prueba modelos experimentales: suelen tener un límite diario más elevado de mensajes gratuitos.
Dónde empezar: modelo gemini-1.5-pro

Groq (https://groq.com/). Groq ofrece acceso a varios modelos gratuitos, pero los restringe mucho en función del contexto. Actualmente, no hay modelos gratuitos en este sitio que funcionen bien con Legendary, pero esto podría cambiar en el futuro. Es probable que los modelos de pago funcionen bien. Consulta la lista de modelos aquí: https://console.groq.com/docs/models

Hugging Face (https://huggingface.co/models?inference=warm&other=conversational&sort=trending). Un gran repositorio de redes neuronales. El acceso se realiza a través de la Inference API, y solo los modelos que la soportan están disponibles para el juego. Hay un límite de mensajes diarios, que aumenta con una suscripción de pago. Si los modelos responden con texto ilegible, podría indicar que el modelo es débil o la temperatura es demasiado alta. Prueba reducir la temperatura o cambiar de modelo.
Dónde empezar: Qwen/Qwen2.5-72B-Instruct (temperatura 0.4)

Mistral AI (https://mistral.ai/). Mistral AI ofrece un plan "experimental" que hace que todos los modelos de Mistral sean gratuitos.
Dónde empezar: mistral-large-latest

Openrouter (https://openrouter.ai/). Hay modelos gratuitos y de pago. Los gratuitos tienen un límite diario de mensajes.`,

                "portuguese-language": `Provedores de IA.
Para todos os provedores, exceto Websim, você precisa se registrar no site correspondente e criar uma chave de API ou Token de Acesso. Preste atenção ao contexto da IA: Legendary tem um prompt muito grande, e isso só aumenta ao longo do tempo devido ao histórico do chat e outros dados usados pelo GM. É necessário um contexto de pelo menos 128.000 tokens. As informações descritas aqui são precisas até a data (29.12.2024).

Chat01 (https://chat01.ai/). Acesso ao OpenAI o1. Não há plano gratuito. Você recebe 10 créditos ao se registrar, e cada solicitação ao o1 custa 2 créditos.
Modelos: o1, o1-mini, gpt-4o

Cohere (https://coral.cohere.com/). Fornece acesso completamente gratuito aos modelos Command R.
Onde começar: modelo command-r-plus

Gitee AI (https://ai.gitee.com/). Equivalente chinês do Hugging Face. Consulte os modelos disponíveis aqui: https://ai.gitee.com/serverless-api#text-generation

Google AI Studio (https://ai.google.dev/aistudio). Todos os modelos têm um limite gratuito; consulte o site do estúdio. Experimente modelos experimentais — geralmente têm um limite maior de mensagens gratuitas por dia.
Onde começar: modelo gemini-1.5-pro

Groq (https://groq.com/). O Groq fornece acesso a vários modelos gratuitos, mas os restringe fortemente pelo contexto. Atualmente, não há modelos gratuitos neste site que funcionem bem com Legendary, mas isso pode mudar no futuro. Modelos pagos provavelmente funcionam bem. Veja a lista[thinking]

 de modelos aqui: https://console.groq.com/docs/models

Hugging Face (https://huggingface.co/models?inference=warm&other=conversational&sort=trending). Um grande repositório de redes neurais. O acesso é feito pela Inference API, e apenas os modelos que a suportam estão disponíveis para o jogo. Há um limite diário de mensagens, que aumenta com uma assinatura paga. Se os modelos responderem com texto ilegível, isso pode indicar que o modelo é fraco ou a temperatura está muito alta. Tente diminuir a temperatura ou trocar de modelo.
Onde começar: Qwen/Qwen2.5-72B-Instruct (temperatura 0.4)

Mistral AI (https://mistral.ai/). O site da Mistral AI oferece um plano "experimental" que torna todos os modelos Mistral gratuitos para uso.
Onde começar: mistral-large-latest

Openrouter (https://openrouter.ai/). Existem modelos gratuitos e pagos. Modelos gratuitos têm um limite diário de mensagens.`,

                "hindi-language": `आईए प्रदाता।
Websim को छोड़कर सभी प्रदाताओं के लिए, आपको संबंधित वेबसाइट पर पंजीकरण करना होगा और API कुंजी या Access Token बनाना होगा। आईए के संदर्भ पर ध्यान दें—Legendary में बहुत बड़ा प्रॉम्प्ट है, जो समय के साथ चैट इतिहास और अन्य डेटा के कारण बढ़ता रहता है, जिसे GM उपयोग करता है। कम से कम 128,000 टोकन का संदर्भ आवश्यक है। यहाँ दी गई जानकारी (29.12.2024) की तारीख तक सही है।

Chat01 (https://chat01.ai/). OpenAI o1 तक पहुँचनें की सुविधा। कोई निःशुल्क योजना नहीं है। पंजीकरण पर 10 क्रेडिट मिलते हैं, तथा o1 के लिए प्रत्येक अनुरोध 2 क्रेडिट खर्च करता है।
मॉडल: o1, o1-mini, gpt-4o

Cohere (https://coral.cohere.com/). Command R मॉडलों तक पूरी तरह निःशुल्क पहुँच प्रदान करता है।
शुरू करने के लिए: मॉडल command-r-plus

Gitee AI (https://ai.gitee.com/). Hugging Face का चीनी समकक्ष। यहाँ उपलब्ध मॉडल देखें: https://ai.gitee.com/serverless-api#text-generation

Google AI Studio (https://ai.google.dev/aistudio). सभी मॉडलों की एक निःशुल्क सीमा होती है; स्टूडियो की वेबसाइट देखें। प्रायोगिक मॉडलों को आज़माएँ—अक्सर उनकी मुफ्त संदेश सीमा अधिक होती है।
शुरू करने के लिए: मॉडल gemini-1.5-pro

Groq (https://groq.com/). Groq विभिन्न मुफ्त मॉडलों तक पहुँच प्रदान करता है, लेकिन संदर्भ के आधार पर उन्हें काफी सीमित करता है। वर्तमान में, इस साइट पर कोई मुफ्त मॉडल नहीं है जो Legendary के साथ अच्छा काम करे, लेकिन भविष्य में यह बदल सकता है। सशुल्क मॉडल संभवतः अच्छे से काम करते हैं। यहाँ मॉडलों की सूची देखें: https://console.groq.com/docs/models

Hugging Face (https://huggingface.co/models?inference=warm&other=conversational&sort=trending). न्यूरल नेटवर्क का एक बड़ा रिपॉज़िटरी। इसका उपयोग Inference API के माध्यम से होता है, और केवल वे मॉडल जो इसका समर्थन करते हैं, गेम में उपलब्ध होते हैं। प्रतिदिन संदेशों की एक सीमा होती है, जो सशुल्क सदस्यता के साथ बढ़ जाती है। यदि कोई मॉडल अपठनीय टेक्स्ट भेजता है, तो इसका मतलब या तो मॉडल बहुत कमजोर है या तापमान अधिक है। इस स्थिति में, तापमान कम करने या किसी दूसरे मॉडल का इस्तेमाल करने का प्रयास करें।
शुरू करने के लिए: Qwen/Qwen2.5-72B-Instruct (तापमान 0.4)

Mistral AI (https://mistral.ai/). Mistral AI "प्रयोगात्मक" योजना प्रदान करती है, जो सभी Mistral मॉडलों को निःशुल्क बनाती है।
शुरू करने के लिए: मॉडल mistral-large-latest

Openrouter (https://openrouter.ai/). निःशुल्क और सशुल्क दोनों तरह के मॉडल हैं। निःशुल्क मॉडलों की प्रतिदिन संदेश सीमा होती है।`,

                "german-language": `KI-Anbieter.
Für alle Anbieter außer Websim müssen Sie sich auf der jeweiligen Website registrieren und einen API-Schlüssel oder Access Token erstellen. Achten Sie auf den Kontext der KI—Legendary verfügt über einen sehr großen Prompt, der sich im Laufe der Zeit durch den Chatverlauf und andere vom GM verwendete Daten vergrößert. Ein Kontext von mindestens 128.000 Tokens ist erforderlich. Die hier beschriebenen Informationen sind zum Datum (29.12.2024) aktuell.

Chat01 (https://chat01.ai/). Zugriff auf OpenAI o1. Es gibt keinen kostenlosen Tarif. Bei der Registrierung erhalten Sie 10 Credits, und jede Anfrage an o1 kostet 2 Credits.
Modelle: o1, o1-mini, gpt-4o

Cohere (https://coral.cohere.com/). Bietet komplett kostenlosen Zugang zu Command R-Modellen.
Wo anfangen: Modell command-r-plus

Gitee AI (https://ai.gitee.com/). Das chinesische Pendant zu Hugging Face. Eine Übersicht der verfügbaren Modelle finden Sie hier: https://ai.gitee.com/serverless-api#text-generation

Google AI Studio (https://ai.google.dev/aistudio). Alle Modelle haben ein kostenloses Kontingent; sehen Sie auf der Studio-Website nach. Probieren Sie experimentelle Modelle aus—sie haben oft ein höheres Tageslimit für kostenlose Nachrichten.
Wo anfangen: Modell gemini-1.5-pro

Groq (https://groq.com/). Groq bietet Zugang zu verschiedenen kostenlosen Modellen, beschränkt sie jedoch stark nach Kontext. Aktuell gibt es auf dieser Seite keine kostenlosen Modelle, die gut mit Legendary funktionieren, aber das kann sich in Zukunft ändern. Kostenpflichtige Modelle funktionieren vermutlich gut. Eine Modellliste finden Sie hier: https://console.groq.com/docs/models

Hugging Face (https://huggingface.co/models?inference=warm&other=conversational&sort=trending). Ein großes Repository für neuronale Netzwerke. Der Zugriff erfolgt über die Inference API, und nur Modelle, die sie unterstützen, sind für das Spiel verfügbar. Es gibt ein tägliches Nachrichtenlimit, das mit einem kostenpflichtigen Abonnement steigt. Wenn Modelle unleserlichen Text senden, könnte das bedeuten, dass das Modell schwach ist oder die Temperatur zu hoch eingestellt ist. Versuchen Sie, die Temperatur zu senken oder das Modell zu wechseln.
Wo anfangen: Qwen/Qwen2.5-72B-Instruct (Temperatur 0.4)

Mistral AI (https://mistral.ai/). Mistral AI bietet einen "experimentellen" Tarif, der alle Mistral-Modelle kostenlos nutzbar macht.
Wo anfangen: Modell mistral-large-latest

Openrouter (https://openrouter.ai/). Es gibt kostenlose und kostenpflichtige Modelle. Kostenlose Modelle haben ein tägliches Nachrichtenlimit.`,

                "french-language": `Fournisseurs d'IA.
Pour tous les fournisseurs, sauf Websim, vous devez vous inscrire sur le site concerné et créer une clé API ou un Access Token. Faites attention au contexte de l'IA — Legendary dispose d'un prompt très volumineux, qui ne fait qu'augmenter avec le temps en raison de l'historique de discussion et des autres données utilisées par le MJ. Un contexte d'au moins 128 000 jetons est requis. Les informations décrites ici sont valables à la date (29.12.2024).

Chat01 (https://chat01.ai/). Accès à OpenAI o1. Il n'y a pas de formule gratuite. Vous obtenez 10 crédits lors de l'inscription, et chaque requête à o1 coûte 2 crédits.
Modèles : o1, o1-mini, gpt-4o

Cohere (https://coral.cohere.com/). Fournit un accès entièrement gratuit aux modèles Command R.
Par où commencer : modèle command-r-plus

Gitee AI (https://ai.gitee.com/). L'équivalent chinois de Hugging Face. Consultez les modèles disponibles ici : https://ai.gitee.com/serverless-api#text-generation

Google AI Studio (https://ai.google.dev/aistudio). Tous les modèles ont une limite gratuite ; consultez le site du Studio. Essayez les modèles expérimentaux — ils ont souvent une limite plus élevée de messages gratuits par jour.
Par où commencer : modèle gemini-1.5-pro

Groq (https://groq.com/). Groq offre l'accès à divers modèles gratuits, mais les limite beaucoup en raison du contexte. Actuellement, il n'existe pas de modèles gratuits fonctionnant bien avec Legendary sur ce site, mais cela pourrait changer à l'avenir. Les modèles payants fonctionnent probablement bien. Consultez la liste des modèles ici : https://console.groq.com/docs/models

Hugging Face (https://huggingface.co/models?inference=warm&other=conversational&sort=trending). Un grand dépôt de réseaux neuronaux. L'accès se fait via l'Inference API, et seuls les modèles qui la prennent en charge sont disponibles pour le jeu. Il existe une limite quotidienne de messages, qui augmente avec un abonnement payant. Si les modèles envoient du texte illisible, cela peut indiquer que le modèle est faible ou que la température est trop élevée. Essayez de baisser la température ou de changer de modèle.
Par où commencer : Qwen/Qwen2.5-72B-Instruct (température 0.4)

Mistral AI (https://mistral.ai/). Le site de Mistral AI propose un plan "expérimental" qui rend tous les modèles Mistral gratuits.
Par où commencer : modèle mistral-large-latest

Openrouter (https://openrouter.ai/). Il existe des modèles gratuits et payants. Les modèles gratuits ont une limite quotidienne de messages.`
            };

            for (const id of ids) {
                for (const [language, text] of Object.entries(translations)) {
                    this.setTranslation(language, id, text);
                }
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

        setStatIncreaseForbiddenMessage: function (statName) {
            const id = "stat_forbidden_to_increase_message";

            this.setTranslation("russian-language", id,
                `Внимание! Характеристика '${statName}' не была повышена из-за ограничений по уровню. Характеристика может быть увеличена в качестве награды, только если она меньше значения текущего уровня персонажа игрока.`
            );

            this.setTranslation("english-language", id,
                `Attention! The attribute '${statName}' was not increased due to level restrictions. An attribute can only be increased as a reward if it is lower than the player's current character level.`
            );

            this.setTranslation("spanish-language", id,
                `¡Atención! La característica '${statName}' no se incrementó debido a restricciones de nivel. Una característica solo puede aumentarse como recompensa si es inferior al nivel actual del personaje del jugador.`
            );

            this.setTranslation("portuguese-language", id,
                `Atenção! O atributo '${statName}' não foi aumentado devido a restrições de nível. Um atributo só pode ser aumentado como recompensa se for menor que o nível atual do personagem do jogador.`
            );

            this.setTranslation("hindi-language", id,
                `ध्यान दें! '${statName}' विशेषता को स्तर प्रतिबंधों के कारण नहीं बढ़ाया जा सका। किसी विशेषता को इनाम के तौर पर केवल तभी बढ़ाया जा सकता है, जब वह खिलाड़ी के चरित्र के वर्तमान स्तर से कम हो।`
            );

            this.setTranslation("german-language", id,
                `Achtung! Der Wert '${statName}' wurde aufgrund von Levelbeschränkungen nicht erhöht. Ein Wert kann nur als Belohnung erhöht werden, wenn er unterhalb des aktuellen Spielercharakter-Levels liegt.`
            );

            this.setTranslation("french-language", id,
                `Attention ! La caractéristique '${statName}' n'a pas été augmentée en raison de restrictions de niveau. Une caractéristique ne peut être augmentée en guise de récompense que si elle est inférieure au niveau actuel du personnage du joueur.`
            );

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

        setStatDecreaseForbiddenMessage: function (statName) {
            const id = "stat_forbidden_to_decrease_message";

            this.setTranslation("russian-language", id,
                `Внимание! Характеристика '${statName}' не была понижена, поскольку значение характеристики не может быть меньше 0.`
            );

            this.setTranslation("english-language", id,
                `Attention! The attribute '${statName}' was not decreased because its value cannot go below 0.`
            );

            this.setTranslation("spanish-language", id,
                `¡Atención! La característica '${statName}' no se redujo porque su valor no puede ser inferior a 0.`
            );

            this.setTranslation("portuguese-language", id,
                `Atenção! O atributo '${statName}' não foi reduzido porque seu valor não pode ser inferior a 0.`
            );

            this.setTranslation("hindi-language", id,
                `ध्यान दें! '${statName}' विशेषता को कम नहीं किया जा सका क्योंकि इसका मान 0 से कम नहीं हो सकता।`
            );

            this.setTranslation("german-language", id,
                `Achtung! Der Wert '${statName}' wurde nicht verringert, da er nicht unter 0 fallen kann.`
            );

            this.setTranslation("french-language", id,
                `Attention ! La caractéristique '${statName}' n'a pas été réduite car sa valeur ne peut pas être inférieure à 0.`
            );

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

        getRaceDescriptions: function (language, raceInventory) {
            const raceDescriptions = {
                human: function () {
                    const raceName = translations[language]["human"] || "Human";
                    const statPersuasion = translations[language]["persuasion"] || "Persuasion";
                    const statLuck = translations[language]["luck"] || "Luck";
                    const itemKey = raceInventory["human"]; // 'survival_kit'
                    const itemName = translations[language][itemKey] || itemKey;

                    return `${raceName}: ${statPersuasion}+1, ${statLuck}+1, ${itemName}`;
                },
                superhuman: function () {
                    const raceName = translations[language]["superhuman"] || "Superhuman";
                    const statInt = translations[language]["intelligence"] || "Intelligence";
                    const statWis = translations[language]["wisdom"] || "Wisdom";
                    const statCon = translations[language]["constitution"] || "Constitution";
                    const itemKey = raceInventory["superhuman"]; // 'psionic_headband'
                    const itemName = translations[language][itemKey] || itemKey;

                    return `${raceName}: ${statInt}+2, ${statWis}+1, ${statCon}-1, ${itemName}`;
                },
                infected: function () {
                    const raceName = translations[language]["infected"] || "Infected";
                    const statStr = translations[language]["strength"] || "Strength";
                    const statCon = translations[language]["constitution"] || "Constitution";
                    const statInt = translations[language]["intelligence"] || "Intelligence";
                    const itemKey = raceInventory["infected"]; // 'adrenaline_syringe'
                    const itemName = translations[language][itemKey] || itemKey;

                    return `${raceName}: ${statStr}+2, ${statCon}+1, ${statInt}-1, ${itemName}`;
                },
                ratman: function () {
                    const raceName = translations[language]["ratman"] || "Ratman";
                    const statDex = translations[language]["dexterity"] || "Dexterity";
                    const statPer = translations[language]["perception"] || "Perception";
                    const statAtt = translations[language]["attractiveness"] || "Attractiveness";
                    const itemKey = raceInventory["ratman"]; // 'grappling_hook'
                    const itemName = translations[language][itemKey] || itemKey;

                    return `${raceName}: ${statDex}+2, ${statPer}+1, ${statAtt}-1, ${itemName}`;
                },
                ghoul: function () {
                    const raceName = translations[language]["ghoul"] || "Ghoul";
                    const statCon = translations[language]["constitution"] || "Constitution";
                    const statSpeed = translations[language]["speed"] || "Speed";
                    const statInt = translations[language]["intelligence"] || "Intelligence";
                    const statAtt = translations[language]["attractiveness"] || "Attractiveness";
                    const itemKey = raceInventory["ghoul"]; // 'bone_blade'
                    const itemName = translations[language][itemKey] || itemKey;

                    return `${raceName}: ${statCon}+3, ${statSpeed}+1, ${statInt}-1, ${statAtt}-1, ${itemName}`;
                },
                mutant: function () {
                    const raceName = translations[language]["mutant"] || "Mutant";
                    const statStr = translations[language]["strength"] || "Strength";
                    const statSpeed = translations[language]["speed"] || "Speed";
                    const statPer = translations[language]["perception"] || "Perception";
                    const statCon = translations[language]["constitution"] || "Constitution";
                    const itemKey = raceInventory["mutant"]; // 'mutant_serum'
                    const itemName = translations[language][itemKey] || itemKey;

                    return `${raceName}: ${statStr}+1, ${statSpeed}+1, ${statPer}+1, ${statCon}-1, ${itemName}`;
                },
                supermutant: function () {
                    const raceName = translations[language]["supermutant"] || "Supermutant";
                    const statStr = translations[language]["strength"] || "Strength";
                    const statCon = translations[language]["constitution"] || "Constitution";
                    const statInt = translations[language]["intelligence"] || "Intelligence";
                    const statWis = translations[language]["wisdom"] || "Wisdom";
                    const statPer = translations[language]["perception"] || "Perception";
                    const itemKey = raceInventory["supermutant"]; // 'crude_bonehammer'
                    const itemName = translations[language][itemKey] || itemKey;

                    return `${raceName}: ${statStr}+3, ${statCon}+2, ${statInt}-1, ${statWis}-1, ${statPer}-1, ${itemName}`;
                },
                cyborg: function () {
                    const raceName = translations[language]["cyborg"] || "Cyborg";
                    const statDex = translations[language]["dexterity"] || "Dexterity";
                    const statPer = translations[language]["perception"] || "Perception";
                    const statPers = translations[language]["persuasion"] || "Persuasion";
                    const itemKey = raceInventory["cyborg"]; // 'hacking_device'
                    const itemName = translations[language][itemKey] || itemKey;

                    return `${raceName}: ${statDex}+1, ${statPer}+2, ${statPers}-1, ${itemName}`;
                },
                android: function () {
                    const raceName = translations[language]["android"] || "Android";
                    const statInt = translations[language]["intelligence"] || "Intelligence";
                    const statAtt = translations[language]["attractiveness"] || "Attractiveness";
                    const statCon = translations[language]["constitution"] || "Constitution";
                    const itemKey = raceInventory["android"]; // 'skin_repair_paste'
                    const itemName = translations[language][itemKey] || itemKey;

                    return `${raceName}: ${statInt}+1, ${statAtt}+2, ${statCon}-1, ${itemName}`;
                },
                robot: function () {
                    const raceName = translations[language]["robot"] || "Robot";
                    const statStr = translations[language]["strength"] || "Strength";
                    const statInt = translations[language]["intelligence"] || "Intelligence";
                    const statPers = translations[language]["persuasion"] || "Persuasion";
                    const itemKey = raceInventory["robot"]; // 'EMP_Generator'
                    const itemName = translations[language][itemKey] || itemKey;

                    return `${raceName}: ${statStr}+1, ${statInt}+2, ${statPers}-1, ${itemName}`;
                },
                gray: function () {
                    const raceName = translations[language]["gray"] || "Gray";
                    const statInt = translations[language]["intelligence"] || "Intelligence";
                    const statDex = translations[language]["dexterity"] || "Dexterity";
                    const itemKey = raceInventory["gray"]; // 'communication_implant'
                    const itemName = translations[language][itemKey] || itemKey;

                    return `${raceName}: ${statInt}+3, ${statDex}-1, ${itemName}`;
                },
                alien: function () {
                    const raceName = translations[language]["alien"] || "Alien";
                    const statPer = translations[language]["perception"] || "Perception";
                    const statLuck = translations[language]["luck"] || "Luck";
                    const statTrade = translations[language]["trade"] || "Trade";
                    const itemKey = raceInventory["alien"]; // 'cloaking_device'
                    const itemName = translations[language][itemKey] || itemKey;

                    return `${raceName}: ${statPer}+2, ${statLuck}+1, ${statTrade}-1, ${itemName}`;
                },
                hybrid: function () {
                    const raceName = translations[language]["hybrid"] || "Hybrid";
                    const statAtt = translations[language]["attractiveness"] || "Attractiveness";
                    const statPers = translations[language]["persuasion"] || "Persuasion";
                    const statCon = translations[language]["constitution"] || "Constitution";
                    const statStr = translations[language]["strength"] || "Strength";
                    const statSpeed = translations[language]["speed"] || "Speed";
                    const itemKey = raceInventory["hybrid"]; // 'symbiotic_implant'
                    const itemName = translations[language][itemKey] || itemKey;

                    return `${raceName}: ${statAtt}+1, ${statPers}+1, ${statCon}-1, ${statStr}-1, ${statSpeed}+2, ${itemName}`;
                },
                ancient: function () {
                    const raceName = translations[language]["ancient"] || "Ancient";
                    const statWis = translations[language]["wisdom"] || "Wisdom";
                    const statInt = translations[language]["intelligence"] || "Intelligence";
                    const statStr = translations[language]["strength"] || "Strength";
                    const itemKey = raceInventory["ancient"]; // 'ancient_artifact'
                    const itemName = translations[language][itemKey] || itemKey;

                    return `${raceName}: ${statWis}+2, ${statInt}+1, ${statStr}-1, ${itemName}`;
                }
            }

            return raceDescriptions;
        },
        
        setPostApocalypseRacesTooltip: function (raceInventory) {            
            const id = "post-apocalypse-races";
            this.setTranslation("english-language", id, `Race affects the starting location, generation of racial abilities, storyline, and starting bonuses to skills and items:\n${getDescriptions("english-language")}`);
            this.setTranslation("russian-language", id, `Раса влияет на стартовую локацию, генерацию расового умения, сюжет и стартовые бонусы к навыкам и предметам:\n${getDescriptions("russian-language")}`);
            this.setTranslation("spanish-language", id, `La raza afecta la ubicación inicial, la generación de habilidades raciales, la trama y las bonificaciones iniciales a las habilidades y objetos:\n${getDescriptions("spanish-language")}`);
            this.setTranslation("portuguese-language", id, `A raça afeta a localização inicial, a geração de habilidades raciais, a história e os bônus iniciais para habilidades e itens:\n${getDescriptions("portuguese-language")}`);
            this.setTranslation("hindi-language", id, `जाति प्रारंभिक स्थान, जातीय क्षमताओं की उत्पत्ति, कहानी और कौशल और वस्तुओं पर प्रारंभिक बोनस को प्रभावित करती है:\n${getDescriptions("hindi-language")}`);
            this.setTranslation("german-language", id, `Die Rasse beeinflusst den Startort, die Generierung von Rassenfähigkeiten, die Handlung und die Startboni für Fähigkeiten und Gegenstände:\n${getDescriptions("german-language")}`);
            this.setTranslation("french-language", id, `La race affecte l'emplacement de départ, la génération des capacités raciales, l'histoire et les bonus de départ aux compétences et objets:\n${getDescriptions("french-language")}`);

            return id;

            function getDescriptions(language) {
                const raceDescriptions = translationModule.getRaceDescriptions(language, raceInventory);
                const descriptions = [];
                for (const race in raceDescriptions) {
                    descriptions.push(raceDescriptions[race]());
                }
                return "\n" + descriptions.join("\n\n");
            }
        },

        getClassDescriptions: function (language, classes) {
            const classDescriptions = {
                hacker: function () {
                    const className = translations[language]["hacker"] || "Hacker";
                    const statName = translations[language]["intelligence"] || "Intelligence";
                    const statBonus = "+1";
                    const inventoryItems = classes["hacker"].inventory.map(itemKey => {
                        return translations[language][itemKey] || itemKey;
                    }).join(", ");

                    return `${className}: ${statName}${statBonus}, ${inventoryItems}`;
                },

                scout: function () {
                    const className = translations[language]["scout"] || "Scout";
                    const statName = translations[language]["perception"] || "Perception";
                    const statBonus = "+1";
                    const inventoryItems = classes["scout"].inventory.map(itemKey => {
                        return translations[language][itemKey] || itemKey;
                    }).join(", ");

                    return `${className}: ${statName}${statBonus}, ${inventoryItems}`;
                },

                bounty_hunter: function () {
                    const className = translations[language]["bounty_hunter"] || "Bounty Hunter";
                    const statName = translations[language]["speed"] || "Speed";
                    const statBonus = "+1";
                    const inventoryItems = classes["bounty_hunter"].inventory.map(itemKey => {
                        return translations[language][itemKey] || itemKey;
                    }).join(", ");

                    return `${className}: ${statName}${statBonus}, ${inventoryItems}`;
                },

                survivor: function () {
                    const className = translations[language]["survivor"] || "Survivor";
                    const statName = translations[language]["constitution"] || "Constitution";
                    const statBonus = "+1";
                    const inventoryItems = classes["survivor"].inventory.map(itemKey => {
                        return translations[language][itemKey] || itemKey;
                    }).join(", ");

                    return `${className}: ${statName}${statBonus}, ${inventoryItems}`;
                },

                raider: function () {
                    const className = translations[language]["raider"] || "Raider";
                    const statName = translations[language]["strength"] || "Strength";
                    const statBonus = "+1";
                    const inventoryItems = classes["raider"].inventory.map(itemKey => {
                        return translations[language][itemKey] || itemKey;
                    }).join(", ");

                    return `${className}: ${statName}${statBonus}, ${inventoryItems}`;
                },

                bandit: function () {
                    const className = translations[language]["bandit"] || "Bandit";
                    const statName = translations[language]["dexterity"] || "Dexterity";
                    const statBonus = "+1";
                    const inventoryItems = classes["bandit"].inventory.map(itemKey => {
                        return translations[language][itemKey] || itemKey;
                    }).join(", ");

                    return `${className}: ${statName}${statBonus}, ${inventoryItems}`;
                },

                wanderer: function () {
                    const className = translations[language]["wanderer"] || "Wanderer";
                    const statName = translations[language]["luck"] || "Luck";
                    const statBonus = "+1";
                    const inventoryItems = classes["wanderer"].inventory.map(itemKey => {
                        return translations[language][itemKey] || itemKey;
                    }).join(", ");

                    return `${className}: ${statName}${statBonus}, ${inventoryItems}`;
                },

                veteran: function () {
                    const className = translations[language]["veteran"] || "Veteran";
                    const statName = translations[language]["wisdom"] || "Wisdom";
                    const statBonus = "+1";
                    const inventoryItems = classes["veteran"].inventory.map(itemKey => {
                        return translations[language][itemKey] || itemKey;
                    }).join(", ");

                    return `${className}: ${statName}${statBonus}, ${inventoryItems}`;
                },

                mercenary: function () {
                    const className = translations[language]["mercenary"] || "Mercenary";
                    const statName = translations[language]["dexterity"] || "Dexterity";
                    const statBonus = "+1";
                    const inventoryItems = classes["mercenary"].inventory.map(itemKey => {
                        return translations[language][itemKey] || itemKey;
                    }).join(", ");

                    return `${className}: ${statName}${statBonus}, ${inventoryItems}`;
                },

                stalker: function () {
                    const className = translations[language]["stalker"] || "Stalker";
                    const statName = translations[language]["perception"] || "Perception";
                    const statBonus = "+1";
                    const inventoryItems = classes["stalker"].inventory.map(itemKey => {
                        return translations[language][itemKey] || itemKey;
                    }).join(", ");

                    return `${className}: ${statName}${statBonus}, ${inventoryItems}`;
                },

                citizen: function () {
                    const className = translations[language]["citizen"] || "Citizen";
                    const statName = translations[language]["trade"] || "Trade";
                    const statBonus = "+1";
                    const inventoryItems = classes["citizen"].inventory.map(itemKey => {
                        return translations[language][itemKey] || itemKey;
                    }).join(", ");

                    return `${className}: ${statName}${statBonus}, ${inventoryItems}`;
                },

                vault_dweller: function () {
                    const className = translations[language]["vault_dweller"] || "Vault Dweller";
                    const statName = translations[language]["intelligence"] || "Intelligence";
                    const statBonus = "+1";
                    const inventoryItems = classes["vault_dweller"].inventory.map(itemKey => {
                        return translations[language][itemKey] || itemKey;
                    }).join(", ");

                    return `${className}: ${statName}${statBonus}, ${inventoryItems}`;
                },

                savage: function () {
                    const className = translations[language]["savage"] || "Savage";
                    const statName = translations[language]["strength"] || "Strength";
                    const statBonus = "+1";
                    const inventoryItems = classes["savage"].inventory.map(itemKey => {
                        return translations[language][itemKey] || itemKey;
                    }).join(", ");

                    return `${className}: ${statName}${statBonus}, ${inventoryItems}`;
                },

                soldier: function () {
                    const className = translations[language]["soldier"] || "Soldier";
                    const statName = translations[language]["constitution"] || "Constitution";
                    const statBonus = "+1";
                    const inventoryItems = classes["soldier"].inventory.map(itemKey => {
                        return translations[language][itemKey] || itemKey;
                    }).join(", ");

                    return `${className}: ${statName}${statBonus}, ${inventoryItems}`;
                },

                engineer: function () {
                    const className = translations[language]["engineer"] || "Engineer";
                    const statName = translations[language]["intelligence"] || "Intelligence";
                    const statBonus = "+1";
                    const inventoryItems = classes["engineer"].inventory.map(itemKey => {
                        return translations[language][itemKey] || itemKey;
                    }).join(", ");

                    return `${className}: ${statName}${statBonus}, ${inventoryItems}`;
                },

                medic: function () {
                    const className = translations[language]["medic"] || "Medic";
                    const statName = translations[language]["wisdom"] || "Wisdom";
                    const statBonus = "+1";
                    const inventoryItems = classes["medic"].inventory.map(itemKey => {
                        return translations[language][itemKey] || itemKey;
                    }).join(", ");

                    return `${className}: ${statName}${statBonus}, ${inventoryItems}`;
                },

                sniper: function () {
                    const className = translations[language]["sniper"] || "Sniper";
                    const statName = translations[language]["dexterity"] || "Dexterity";
                    const statBonus = "+1";
                    const inventoryItems = classes["sniper"].inventory.map(itemKey => {
                        return translations[language][itemKey] || itemKey;
                    }).join(", ");

                    return `${className}: ${statName}${statBonus}, ${inventoryItems}`;
                },

                virologist: function () {
                    const className = translations[language]["virologist"] || "Virologist";
                    const statName = translations[language]["intelligence"] || "Intelligence";
                    const statBonus = "+1";
                    const inventoryItems = classes["virologist"].inventory.map(itemKey => {
                        return translations[language][itemKey] || itemKey;
                    }).join(", ");

                    return `${className}: ${statName}${statBonus}, ${inventoryItems}`;
                },

                biotechnician: function () {
                    const className = translations[language]["biotechnician"] || "Biotechnician";
                    const statName = translations[language]["wisdom"] || "Wisdom";
                    const statBonus = "+1";
                    const inventoryItems = classes["biotechnician"].inventory.map(itemKey => {
                        return translations[language][itemKey] || itemKey;
                    }).join(", ");

                    return `${className}: ${statName}${statBonus}, ${inventoryItems}`;
                },

                reborn: function () {
                    const className = translations[language]["reborn"] || "Reborn";
                    const statName = translations[language]["constitution"] || "Constitution";
                    const statBonus = "+1";
                    const inventoryItems = classes["reborn"].inventory.map(itemKey => {
                        return translations[language][itemKey] || itemKey;
                    }).join(", ");

                    return `${className}: ${statName}${statBonus}, ${inventoryItems}`;
                },

                xenomant: function () {
                    const className = translations[language]["xenomant"] || "Xenomant";
                    const statName = translations[language]["attractiveness"] || "Attractiveness";
                    const statBonus = "+1";
                    const inventoryItems = classes["xenomant"].inventory.map(itemKey => {
                        return translations[language][itemKey] || itemKey;
                    }).join(", ");

                    return `${className}: ${statName}${statBonus}, ${inventoryItems}`;
                },

                psionic: function () {
                    const className = translations[language]["psionic"] || "Psionic";
                    const statName = translations[language]["wisdom"] || "Wisdom";
                    const statBonus = "+1";
                    const inventoryItems = classes["psionic"].inventory.map(itemKey => {
                        return translations[language][itemKey] || itemKey;
                    }).join(", ");

                    return `${className}: ${statName}${statBonus}, ${inventoryItems}`;
                },

                telekinetic: function () {
                    const className = translations[language]["telekinetic"] || "Telekinetic";
                    const statName = translations[language]["speed"] || "Speed";
                    const statBonus = "+1";
                    const inventoryItems = classes["telekinetic"].inventory.map(itemKey => {
                        return translations[language][itemKey] || itemKey;
                    }).join(", ");

                    return `${className}: ${statName}${statBonus}, ${inventoryItems}`;
                },

                telepath: function () {
                    const className = translations[language]["telepath"] || "Telepath";
                    const statName = translations[language]["persuasion"] || "Persuasion";
                    const statBonus = "+1";
                    const inventoryItems = classes["telepath"].inventory.map(itemKey => {
                        return translations[language][itemKey] || itemKey;
                    }).join(", ");

                    return `${className}: ${statName}${statBonus}, ${inventoryItems}`;
                },

                pyromancer: function () {
                    const className = translations[language]["pyromancer"] || "Pyromancer";
                    const statName = translations[language]["luck"] || "Luck";
                    const statBonus = "+1";
                    const inventoryItems = classes["pyromancer"].inventory.map(itemKey => {
                        return translations[language][itemKey] || itemKey;
                    }).join(", ");

                    return `${className}: ${statName}${statBonus}, ${inventoryItems}`;
                },

                cryomancer: function () {
                    const className = translations[language]["cryomancer"] || "Cryomancer";
                    const statName = translations[language]["wisdom"] || "Wisdom";
                    const statBonus = "+1";
                    const inventoryItems = classes["cryomancer"].inventory.map(itemKey => {
                        return translations[language][itemKey] || itemKey;
                    }).join(", ");

                    return `${className}: ${statName}${statBonus}, ${inventoryItems}`;
                },

                mechanized_soldier: function () {
                    const className = translations[language]["mechanized_soldier"] || "Mechanized Soldier";
                    const statName = translations[language]["strength"] || "Strength";
                    const statBonus = "+1";
                    const inventoryItems = classes["mechanized_soldier"].inventory.map(itemKey => {
                        return translations[language][itemKey] || itemKey;
                    }).join(", ");

                    return `${className}: ${statName}${statBonus}, ${inventoryItems}`;
                },

                mechanical_guardian: function () {
                    const className = translations[language]["mechanical_guardian"] || "Mechanical Guardian";
                    const statName = translations[language]["constitution"] || "Constitution";
                    const statBonus = "+1";
                    const inventoryItems = classes["mechanical_guardian"].inventory.map(itemKey => {
                        return translations[language][itemKey] || itemKey;
                    }).join(", ");

                    return `${className}: ${statName}${statBonus}, ${inventoryItems}`;
                },

                cybernetic_assassin: function () {
                    const className = translations[language]["cybernetic_assassin"] || "Cybernetic Assassin";
                    const statName = translations[language]["dexterity"] || "Dexterity";
                    const statBonus = "+1";
                    const inventoryItems = classes["cybernetic_assassin"].inventory.map(itemKey => {
                        return translations[language][itemKey] || itemKey;
                    }).join(", ");

                    return `${className}: ${statName}${statBonus}, ${inventoryItems}`;
                },

                cybernetic_spy: function () {
                    const className = translations[language]["cybernetic_spy"] || "Cybernetic Spy";
                    const statName = translations[language]["persuasion"] || "Persuasion";
                    const statBonus = "+1";
                    const inventoryItems = classes["cybernetic_spy"].inventory.map(itemKey => {
                        return translations[language][itemKey] || itemKey;
                    }).join(", ");

                    return `${className}: ${statName}${statBonus}, ${inventoryItems}`;
                },

                precursor_agent: function () {
                    const className = translations[language]["precursor_agent"] || "Precursor Agent";
                    const statName = translations[language]["speed"] || "Speed";
                    const statBonus = "+1";
                    const inventoryItems = classes["precursor_agent"].inventory.map(itemKey => {
                        return translations[language][itemKey] || itemKey;
                    }).join(", ");

                    return `${className}: ${statName}${statBonus}, ${inventoryItems}`;
                },

                precursor_scientist: function () {
                    const className = translations[language]["precursor_scientist"] || "Precursor Scientist";
                    const statName = translations[language]["intelligence"] || "Intelligence";
                    const statBonus = "+1";
                    const inventoryItems = classes["precursor_scientist"].inventory.map(itemKey => {
                        return translations[language][itemKey] || itemKey;
                    }).join(", ");

                    return `${className}: ${statName}${statBonus}, ${inventoryItems}`;
                },

                precursor_soldier: function () {
                    const className = translations[language]["precursor_soldier"] || "Precursor Soldier";
                    const statName = translations[language]["strength"] || "Strength";
                    const statBonus = "+1";
                    const inventoryItems = classes["precursor_soldier"].inventory.map(itemKey => {
                        return translations[language][itemKey] || itemKey;
                    }).join(", ");

                    return `${className}: ${statName}${statBonus}, ${inventoryItems}`;
                },

                alien_scout: function () {
                    const className = translations[language]["alien_scout"] || "Alien Scout";
                    const statName = translations[language]["perception"] || "Perception";
                    const statBonus = "+1";
                    const inventoryItems = classes["alien_scout"].inventory.map(itemKey => {
                        return translations[language][itemKey] || itemKey;
                    }).join(", ");

                    return `${className}: ${statName}${statBonus}, ${inventoryItems}`;
                },

                space_architect: function () {
                    const className = translations[language]["space_architect"] || "Space Architect";
                    const statName = translations[language]["intelligence"] || "Intelligence";
                    const statBonus = "+1";
                    const inventoryItems = classes["space_architect"].inventory.map(itemKey => {
                        return translations[language][itemKey] || itemKey;
                    }).join(", ");

                    return `${className}: ${statName}${statBonus}, ${inventoryItems}`;
                },

                galactic_explorer: function () {
                    const className = translations[language]["galactic_explorer"] || "Galactic Explorer";
                    const statName = translations[language]["luck"] || "Luck";
                    const statBonus = "+1";
                    const inventoryItems = classes["galactic_explorer"].inventory.map(itemKey => {
                        return translations[language][itemKey] || itemKey;
                    }).join(", ");

                    return `${className}: ${statName}${statBonus}, ${inventoryItems}`;
                },

                alien_soldier: function () {
                    const className = translations[language]["alien_soldier"] || "Alien Soldier";
                    const statName = translations[language]["constitution"] || "Constitution";
                    const statBonus = "+1";
                    const inventoryItems = classes["alien_soldier"].inventory.map(itemKey => {
                        return translations[language][itemKey] || itemKey;
                    }).join(", ");

                    return `${className}: ${statName}${statBonus}, ${inventoryItems}`;
                }
            };

            return classDescriptions;
        },      

        setPostApocalypseClassesTooltip: function (classes) {
            const id = "post-apocalypse-classes";
            this.setTranslation("english-language", id, `Class affects the generation of passive abilities upon leveling up, bonuses to starting attributes, and starting items: \n${getDescriptions("english-language")}`);
            this.setTranslation("russian-language", id, `Класс влияет на генерацию пассивных умений при повышении уровня, бонусы к стартовым характеристикам и на стартовые предметы: \n${getDescriptions("russian-language")}`);
            this.setTranslation("spanish-language", id, `La clase afecta la generación de habilidades pasivas al subir de nivel, bonificaciones a los atributos iniciales y objetos iniciales: \n${getDescriptions("spanish-language")}`);
            this.setTranslation("portuguese-language", id, `A classe afeta a geração de habilidades passivas ao subir de nível, bônus para atributos iniciais e itens iniciais: \n${getDescriptions("portuguese-language")}`);
            this.setTranslation("hindi-language", id, `क्लास स्तर बढ़ाने पर निष्क्रिय क्षमताओं की उत्पत्ति, प्रारंभिक विशेषताओं में बोनस और प्रारंभिक वस्तुओं को प्रभावित करता है: \n${getDescriptions("hindi-language")}`);
            this.setTranslation("german-language", id, `Die Klasse beeinflusst die Generierung passiver Fähigkeiten beim Aufsteigen, Boni auf Startattribute und Startgegenstände: \n${getDescriptions("german-language")}`);
            this.setTranslation("french-language", id, `La classe affecte la génération des capacités passives lors de la montée en niveau, les bonus aux attributs de départ et les objets de départ : \n${getDescriptions("french-language")}`);

            return id;

            function getDescriptions(language) {
                const classDescriptions = translationModule.getClassDescriptions(language, classes);

                const descriptions = [];
                for (const className in classDescriptions) {
                    descriptions.push(classDescriptions[className]());
                }
                return "\n" + descriptions.join("\n\n");
            }
        },

        setPostApocalypseRaceMessage: function (choosedRace) {
            const id = "post-apocalypse-race-message";
            const translationId = `${choosedRace}_desc`;

            this.setTranslation("english-language", id, choosedRace ? translationModule.translations["english-language"][translationId] : "");
            this.setTranslation("russian-language", id, choosedRace ? translationModule.translations["russian-language"][translationId] : "");
            this.setTranslation("spanish-language", id, choosedRace ? translationModule.translations["spanish-language"][translationId] : "");
            this.setTranslation("portuguese-language", id, choosedRace ? translationModule.translations["portuguese-language"][translationId] : "");
            this.setTranslation("hindi-language", id, choosedRace ? translationModule.translations["hindi-language"][translationId] : "");
            this.setTranslation("german-language", id, choosedRace ? translationModule.translations["german-language"][translationId] : "");
            this.setTranslation("french-language", id, choosedRace ? translationModule.translations["french-language"][translationId] : "");

            return id;
        },

        setPostApocalypseClassMessage: function (choosedClass) {
            const id = "post-apocalypse-class-message";
            const translationId = `${choosedClass}_descr`;

            this.setTranslation("english-language", id, choosedClass ? translationModule.translations["english-language"][translationId] : "");
            this.setTranslation("russian-language", id, choosedClass ? translationModule.translations["russian-language"][translationId] : "");
            this.setTranslation("spanish-language", id, choosedClass ? translationModule.translations["spanish-language"][translationId] : "");
            this.setTranslation("portuguese-language", id, choosedClass ? translationModule.translations["portuguese-language"][translationId] : "");
            this.setTranslation("hindi-language", id, choosedClass ? translationModule.translations["hindi-language"][translationId] : "");
            this.setTranslation("german-language", id, choosedClass ? translationModule.translations["german-language"][translationId] : "");
            this.setTranslation("french-language", id, choosedClass ? translationModule.translations["french-language"][translationId] : "");

            return id;
        },

        setPostApocalypseCampaignMessage: function (choosedCampaign) {
            const id = "post-apocalypse-campaign-message";
            const translationId = `${choosedCampaign}_desc`;
            const isFreeRoam = choosedCampaign == "free-roam";

            this.setTranslation("english-language", id, !isFreeRoam ? translationModule.translations["english-language"][translationId] : "");
            this.setTranslation("russian-language", id, !isFreeRoam ? translationModule.translations["russian-language"][translationId] : "");
            this.setTranslation("spanish-language", id, !isFreeRoam ? translationModule.translations["spanish-language"][translationId] : "");
            this.setTranslation("portuguese-language", id, !isFreeRoam ? translationModule.translations["portuguese-language"][translationId] : "");
            this.setTranslation("hindi-language", id, !isFreeRoam ? translationModule.translations["hindi-language"][translationId] : "");
            this.setTranslation("german-language", id, !isFreeRoam ? translationModule.translations["german-language"][translationId] : "");
            this.setTranslation("french-language", id, !isFreeRoam ? translationModule.translations["french-language"][translationId] : "");

            return id;
        },

        setPostApocalypticNewGameMessage: function (name, gender, race, raceDescription, characterClass, classDescription, campaign, campaignDescription) {
            const id = "post_apocalyptic_game_starting_message";

            this.setTranslation("russian-language", id, `Это начало новой игры.
                Место действия игры — эпоха сурового постапокалипсиса на планете Земля. Имя персонажа, начинающего свой путь в этом мире: '${name}', его пол: '${gender}'.
                Раса: '${race}', описание расы: '${raceDescription}'.
                Класс: '${characterClass}', описание класса: '${classDescription}'.
                Сюжетная кампания: '${campaign}', описание кампании: '${campaignDescription}'.
                Мастер игры: придумай начальную локацию и стартовое развитие сюжета игры, основанное на расе (и описании расы), классе (и описании класса), кампании (и описании кампании).
                Придумай события, которые привели персонажа игрока в начальную локацию игры и опиши их, основываясь на известных данных.
            `);

            this.setTranslation("english-language", id, `This is the start of a new game.
                The setting is a harsh post-apocalyptic era on planet Earth. The character beginning their journey in this world is named '${name}', their gender: '${gender}'.
                Race: '${race}', race description: '${raceDescription}'.
                Class: '${characterClass}', class description: '${classDescription}'.
                Campaign: '${campaign}', campaign description: '${campaignDescription}'.
                Game Master: come up with the initial location and the starting storyline of the game, based on the race (and its description), the class (and its description), and the campaign (and its description).
                Think of the events that brought the player's character to the game's starting location and describe them based on the known data.
            `);

            this.setTranslation("spanish-language", id, `Este es el comienzo de un nuevo juego.
                La ambientación es una era postapocalíptica dura en el planeta Tierra. El nombre del personaje que inicia su viaje en este mundo es: '${name}', su género: '${gender}'.
                Raza: '${race}', descripción de la raza: '${raceDescription}'.
                Clase: '${characterClass}', descripción de la clase: '${classDescription}'.
                Campaña: '${campaign}', descripción de la campaña: '${campaignDescription}'.
                Maestro del juego: idea una ubicación inicial y un desarrollo inicial de la historia del juego, basándote en la raza (y su descripción), la clase (y su descripción) y la campaña (y su descripción).
                Piensa en los eventos que llevaron al personaje del jugador a la ubicación inicial del juego y descríbelos basándote en los datos conocidos.
            `);

            this.setTranslation("portuguese-language", id, `Este é o início de um novo jogo.
                O cenário é uma era pós-apocalíptica rigorosa no planeta Terra. O nome do personagem que inicia sua jornada neste mundo é: '${name}', seu gênero: '${gender}'.
                Raça: '${race}', descrição da raça: '${raceDescription}'.
                Classe: '${characterClass}', descrição da classe: '${classDescription}'.
                Campanha: '${campaign}', descrição da campanha: '${campaignDescription}'.
                Mestre do jogo: crie o local inicial e o desenvolvimento inicial da história do jogo, com base na raça (e sua descrição), na classe (e sua descrição) e na campanha (e sua descrição).
                Pense nos eventos que levaram o personagem do jogador ao local inicial do jogo e descreva-os com base nos dados conhecidos.
            `);

            this.setTranslation("hindi-language", id, `यह एक नई खेल की शुरुआत है।
                इस दुनिया का सेटिंग कठोर पोस्ट-अपोकैलिप्टिक युग है, ग्रह पृथ्वी पर। इस दुनिया में अपनी यात्रा शुरू करने वाले पात्र का नाम: '${name}', उसका लिंग: '${gender}'।
                जाति: '${race}', जाति का विवरण: '${raceDescription}'।
                वर्ग: '${characterClass}', वर्ग का विवरण: '${classDescription}'।
                अभियान: '${campaign}', अभियान का विवरण: '${campaignDescription}'।
                गेम मास्टर: नस्ल (और उसका विवरण), वर्ग (और उसका विवरण), और अभियान (और उसका विवरण) के आधार पर प्रारंभिक लोकेशन और कहानी की शुरुआत की योजना बनाएं।
                उन घटनाओं के बारे में सोचें, जिन्होंने खिलाड़ी के पात्र को खेल के प्रारंभिक लोकेशन तक पहुँचाया, और उन्हें ज्ञात जानकारी के आधार पर वर्णित करें।
            `);

            this.setTranslation("german-language", id, `Dies ist der Beginn eines neuen Spiels.
                Das Setting ist eine raue postapokalyptische Ära auf dem Planeten Erde. Der Name des Charakters, der seine Reise in dieser Welt beginnt, lautet: '${name}', sein Geschlecht: '${gender}'.
                Rasse: '${race}', Rassenbeschreibung: '${raceDescription}'.
                Klasse: '${characterClass}', Klassenbeschreibung: '${classDescription}'.
                Kampagne: '${campaign}', Kampagnenbeschreibung: '${campaignDescription}'.
                Spielleiter: Denke dir den Startort und die anfängliche Entwicklung der Spielgeschichte aus, basierend auf der Rasse (und ihrer Beschreibung), der Klasse (und ihrer Beschreibung) sowie der Kampagne (und ihrer Beschreibung).
                Denke an die Ereignisse, die den Charakter des Spielers an den Startort des Spiels gebracht haben, und beschreibe sie anhand der bekannten Informationen.
            `);

            this.setTranslation("french-language", id, `Ceci est le début d'un nouveau jeu.
                Le cadre est une ère post-apocalyptique rude sur la planète Terre. Le nom du personnage qui commence son aventure dans ce monde est : '${name}', son genre : '${gender}'.
                Race : '${race}', description de la race : '${raceDescription}'.
                Classe : '${characterClass}', description de la classe : '${classDescription}'.
                Campagne : '${campaign}', description de la campagne : '${campaignDescription}'.
                Maître du jeu : imagine le lieu de départ et le développement initial de l'histoire du jeu, en te basant sur la race (et sa description), la classe (et sa description) et la campagne (et sa description).
                Pense aux événements qui ont amené le personnage du joueur au lieu de départ du jeu et décris-les en te basant sur les informations connues.
            `);

            return id;
        },
    }
})();
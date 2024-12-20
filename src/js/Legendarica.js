/*
* Legendarica.js
* The implementation of Legendarica handlers for a Legendarica Absolute game.
*
* By Lottarend
*
* License : https://github.com/StanislavSmetaninSSM/Legendarica/blob/main/LICENSE (MIT)
*/

//----------------------------------------------------------------CONSTANTS AND VARIABLES--------------------------------------------------------------------//

let loot = {};
let tokenCostCurrent = { "prompt_tokens": 0, "completion_tokens": 0, "total_tokens": 0 };
let tokenCostSum = { "prompt_tokens": 0, "completion_tokens": 0, "total_tokens": 0 };
let styleOfImage;
let turn = 0;
let imageHeight = 610;
let imageWidth = 530;
let imageComponentHeight = 1220;
let imageComponentWidth = 1060;
let isGameStartedFromWebsim = false;

//DOM elements
const ELEMENTS = {
    //api keys and model names
    apiKey: document.getElementById('api-key'),
    apiKey2: document.getElementById('api-key2'),
    apiKey3: document.getElementById('api-key3'),
    aiModel: document.getElementById('ai-model'),
    aiModel2: document.getElementById('ai-model2'),
    aiModel3: document.getElementById('ai-model3'),

    //setting creation
    modalSetting: document.getElementById('setting-creation-modal'),
    nonMagicModeToggle: document.getElementById('non-magic-mode'),

    //window with player character information
    modal: document.getElementById('character-creation-modal'),

    createCharacterButton: document.getElementById('create-character'), //create character button
    startNewSettingButton: document.getElementById('create-setting'), //start game in your own setting button

    loadCharacterButton: document.getElementById('load-character'), //autosave load button
    myGameButton: document.getElementById('my-game'), // Create your own game button
    randomCharacterButton: document.getElementById('random-character'), // Generate random character
    rpgModeToggle: document.getElementById('rpg-mode'), // Enable RPG mode
    ttsModeToggle: document.getElementById('tts-mode'), // Voice message toggle
    campaignSelect: document.getElementById('campaign-select'), // Campaign selector
    rpgModeToggle2: document.getElementById('rpg-mode2'),
    ttsModeToggle2: document.getElementById('tts-mode2'),
    ttsModeToggleSettings: document.getElementById('tts-mode-settings'),
    imageToggleSettings: document.getElementById('image-mode-settings'),
    worldDescription: document.getElementById('world-description'),
    worldSystemInstructions: document.getElementById('world-system-instructions'),

    //chat
    chatBox: document.getElementById('chat-box'), // chat window
    userInput: document.getElementById('user-input'), // Action input line
    sendButton: document.getElementById('send-button'), // Send message button
    actionButtons: Array.from(document.getElementsByClassName('action-button')), // Suggested actions button list
    clearHalfChatButton: document.getElementById('clear-half-chat'), // Clear chat button
    //menu
    chooseLanguageMenu: document.getElementById('choose-language-menu'),
    bottomBox: document.getElementById('bottom-box'),
    logBox: document.getElementById('log-box'),
    lagBox: document.getElementById('lag-box'),
    myRulesBox: document.getElementById('my-rules-box'),
    systemInstructionsBox: document.getElementById('system-instructions-box'),
    settingsBox: document.getElementById('settings-box'),
    myRules: document.getElementById('my-rules'),
    systemInstructions: document.getElementById('system-instructions'),
    clearLogButton: document.getElementById('clear-log'),
    clearSystemInChatButton: document.getElementById('clear-system-chat'),
    maxGmSymbols: document.getElementById('max-gm-symbols'),

    //Neural network provider settings
    temperatureContainer: document.getElementById('temperature-ai-container'),
    temperature: document.getElementById('temperature-ai'),
    frequencyPenaltyContainer: document.getElementById('frequency-penalty-ai-container'),
    frequencyPenalty: document.getElementById('frequency-penalty-ai'),
    presencePenaltyContainer: document.getElementById('presence-penalty-ai-container'),
    presencePenalty: document.getElementById('presence-penalty-ai'),
    repetitionPenaltyContainer: document.getElementById('repetition-penalty-ai-container'),
    repetitionPenalty: document.getElementById('repetition-penalty-ai'),
    topPContainer: document.getElementById('top-p-ai-container'),
    topP: document.getElementById('top-p-ai'),
    topKContainer: document.getElementById('top-k-ai-container'),
    topK: document.getElementById('top-k-ai'),
    maxTokensContainer: document.getElementById('max-tokens-ai-container'),
    maxTokens: document.getElementById('max-tokens-ai'),

    //stats
    playerStats: document.getElementById('player-stats'), // window with all stats
    healthValue: document.getElementById('health-value'),
    energyValue: document.getElementById('energy-value'),
    levelValue: document.getElementById('level-value'),
    expValue: document.getElementById('exp-value'),
    moneyValue: document.getElementById('money-value'),
    strengthValue: document.getElementById('strength-value'),
    dexterityValue: document.getElementById('dexterity-value'),
    constitutionValue: document.getElementById('constitution-value'),
    wisdomValue: document.getElementById('wisdom-value'),
    attractivenessValue: document.getElementById('attractiveness-value'),
    tradeValue: document.getElementById('trade-value'),
    persuasionValue: document.getElementById('persuasion-value'),
    intelligenceValue: document.getElementById('intelligence-value'),
    perceptionValue: document.getElementById('perception-value'),
    luckValue: document.getElementById('luck-value'),
    speedValue: document.getElementById('speed-value'),

    //inventory
    inventory: document.getElementById('inventory-list'),
    inventoryInfo: document.getElementById('inventory-info'),
    inventoryInfoId: document.getElementById('inventory-info-id'),
    inventoryInfoName: document.getElementById('inventory-info-name'),
    inventoryInfoDescription: document.getElementById('inventory-info-description'),
    inventoryInfoContentsDescription: document.getElementById('inventory-info-contents-description'),
    inventoryInfoAvailableCapacity: document.getElementById('inventory-info-available-capacity'),
    inventoryInfoAvailableVolume: document.getElementById('inventory-info-available-volume'),
    inventoryInfoClose: document.getElementById('inventory-info-close'),
    inventoryInfoDelete: document.getElementById('inventory-delete'),
    inventoryContainerOpen: document.getElementById('inventory-container-open'),
    inventoryInfoCount: document.getElementById('inventory-info-count'),
    inventoryInfoPrice: document.getElementById('inventory-info-price'),
    inventoryInfoQuality: document.getElementById('inventory-info-quality'),
    inventoryInfoDurability: document.getElementById('inventory-info-durability'),
    inventoryInfoResource: document.getElementById('inventory-info-resource'),
    inventoryInfoWeight: document.getElementById('inventory-info-weight'),
    inventoryInfoVolume: document.getElementById('inventory-info-volume'),
    inventoryInfoCapacity: document.getElementById('inventory-info-capacity'),
    inventoryInfoCustomProperty: document.getElementById('inventory-info-customProperty'),
    inventoryInfoBonuses: document.getElementById('inventory-info-bonuses'),
    inventoryInfoImage: document.getElementById('inventory-info-img'),

    //inventory container
    inventoryContainerInfo: document.getElementById('inventory-container-info'),
    inventoryContainerInfoClose: document.getElementById('inventory-container-info-close'),
    inventoryContainerInfoAdjust: document.getElementById('inventory-container-info-adjust'),
    inventoryContainerInfoMove: document.getElementById('inventory-container-info-move'),
    inventoryContainerInfoName: document.getElementById('inventory-container-info-name'),
    inventoryContainerInfoItems: document.getElementById('inventory-container-info-items'),
    inventoryContainerInfoId: document.getElementById('inventory-container-info-id'),

    //inventory menu
    inventoryItemContextMenu: document.getElementById('inventory-item-context-menu'),
    inventoryItemContextMenuContainer: document.getElementById('inventoryItemContextMenuContainer'),
    inventoryItemContextMenuName: document.getElementById('inventory-item-context-menu-name'),

    //locations
    locationsList: document.getElementById('locations-list'),
    locationInfo: document.getElementById('location-info'),
    locationInfoId: document.getElementById('location-info-id'),
    locationInfoName: document.getElementById('location-info-name'),
    locationInfoDescription: document.getElementById('location-info-description'),
    locationInfoClose: document.getElementById('location-info-close'),
    locationInfoDelete: document.getElementById('location-delete'),
    locationInfoImage: document.getElementById('location-info-img'),
    //NPC
    npcsList: document.getElementById('player-npc-list'),
    npcInfo: document.getElementById('npc-info'),
    npcInfoId: document.getElementById('npc-info-id'),
    npcInfoName: document.getElementById('npc-info-name'),
    npcInfoRarity: document.getElementById('npc-info-rarity'),
    npcInfoAge: document.getElementById('npc-info-age'),
    npcInfoWorldview: document.getElementById('npc-info-worldview'),
    npcInfoRace: document.getElementById('npc-info-race'),
    npcInfoClass: document.getElementById('npc-info-class'),
    npcInfoAppearanceDescription: document.getElementById('npc-info-appearanceDescription'),
    npcInfoHistory: document.getElementById('npc-info-history'),
    npcInfoAttitude: document.getElementById('npc-info-attitude'),
    npcInfoStats: document.getElementById('npc-info-stats'),
    npcInfoSkills: document.getElementById('npc-info-skills'),
    npcInfoEffects: document.getElementById('npc-info-effects'),
    npcInfoJournal: document.getElementById('npc-info-journal'),
    npcInfoMemoryDiary: document.getElementById('npc-info-memory-diary'),
    npcInfoClose: document.getElementById('npc-info-close'),
    npcInfoDelete: document.getElementById('npc-delete'),
    npcInfoDeleteJournal: document.getElementById('npc-delete-journal'),
    npcInfoDeleteMemoryDiary: document.getElementById('npc-delete-memory-diary'),
    npcInfoImage: document.getElementById('npc-info-img'),
    //Quests
    questsList: document.getElementById('player-quests-list'),
    questInfo: document.getElementById('quest-info'),
    questInfoId: document.getElementById('quest-info-id'),
    questInfoName: document.getElementById('quest-info-name'),
    questInfoReward: document.getElementById('quest-info-reward'),
    questInfoPunishment: document.getElementById('quest-info-punishment'),
    questInfoPurposes: document.getElementById('quest-info-purposes'),
    questInfoDescription: document.getElementById('quest-info-description'),
    questInfoDetails: document.getElementById('quest-info-details'),
    questInfoClose: document.getElementById('quest-info-close'),
    questInfoDelete: document.getElementById('quest-delete'),
    //Skills
    skillsActiveList: document.getElementById('active-skills-list'),
    skillsPassiveList: document.getElementById('passive-skills-list'),
    skillInfo: document.getElementById('skill-info'),
    skillInfoId: document.getElementById('skill-info-id'),
    skillInfoName: document.getElementById('skill-info-name'),
    skillInfoDescription: document.getElementById('skill-info-description'),
    skillInfoClose: document.getElementById('skill-info-close'),
    skillInfoDelete: document.getElementById('skill-info-delete'),
    //Status
    statusContainer: document.getElementById('status-data-container'),
    statusName: document.getElementById('status-name'),
    statusAge: document.getElementById('status-age'),
    statusRace: document.getElementById('status-race'),
    statusClass: document.getElementById('status-class'),
    statusAppearanceDescription: document.getElementById('status-appearanceDescription'),
    statusStatusInSociety: document.getElementById('status-statusInSociety'),
    statusPositionInSociety: document.getElementById('status-positionInSociety'),
    statusAffiliationWithOrganizations: document.getElementById('status-affiliationWithOrganizations'),
    statusEffects: document.getElementById('status-effects'),
    statusPurposes: document.getElementById('status-purposes'),
    //Image component
    imageInfo: document.getElementById('image-info'),
    imageInfoName: document.getElementById('image-info-name'),
    imageInfoWarning: document.getElementById('image-info-warning'),
    imageInfoClose: document.getElementById('image-info-close'),
    imageInfoGenerate: document.getElementById('image-generate'),
    imageInfoImage: document.getElementById('image-info-image'),
    imageInfoThumbnail: document.getElementById('image-info-thumbnail'),
    imageInfoPrompt: document.getElementById('image-info-prompt'),
    //Disable extra features buttons
    useStatus: document.getElementById('useStatus'),
    clearStatus: document.getElementById('clear-status-label'),
    useNpcList: document.getElementById('useNpcList'),
    useNpcJournal: document.getElementById('useNpcJournal'),
    useNpcMemoriesDiary: document.getElementById('useNpcMemoriesDiary'),
    useQuestsList: document.getElementById('useQuestsList'),
    makeGameQuestOriented: document.getElementById('makeGameQuestOriented'),

    //Graphics
    floatingImg: document.getElementById('floating'), // Splash screen
    backgroundImage: document.getElementById('background-image'), // Illustration container
};


const LEVEL_UP_EXP = [
    100, 220, 360, 520, 700, 900, 1120, 1360, 1620, 1900, 2200, 2520, 2860, 3220, 3600, 4000,
    4420, 4860, 5320, 5800, 6300, 6820, 7360, 7920, 8500, 9100, 9720, 10360, 11020, 11700, 12400,
    13120, 13860, 14620, 15400, 16200, 17020, 17860, 18720, 19600, 20500, 21420, 22360, 23320, 24300,
    25300, 26320, 27360, 28420, 29500, 30600, 31720, 32860, 34020, 35200, 36400, 37620, 38860, 40120, 41400,
    42700, 44020, 45360, 46720, 48100, 49500, 50920, 52360, 53820, 55300, 56800, 58320, 59860, 61420, 63000, 64600,
    66220, 67860, 69520, 71200, 72900, 74620, 76360, 78120, 79900, 81700, 83520, 85360, 87220, 89100, 91000, 92920, 94860,
    96820, 98800, 100800, 102820, 104860, 106920, 109000];

const CHARACTER_INFO = {
    name: '',
    characterDescription: 'special character description is absent',
    gender: '',
    race: '',
    raceDescription: 'special race description is absent',
    classOfCharacter: '',
    classDescription: 'special class description is absent',
    nonMagicMode: false,
    rpgMode: false,
    ttsMode: false,
    campaign: 'free roam',
};

let characterStats = {
    level: 1,
    experience: 0,
    currentHealth: 100,
    maxHealth: 100,
    currentEnergy: 100,
    maxEnergy: 100,
    strength: 0,
    dexterity: 0,
    constitution: 0,
    intelligence: 0,
    wisdom: 0,
    attractiveness: 0,
    persuasion: 0,
    trade: 0,
    perception: 0,
    luck: 0,
    speed: 0,
    money: 0,
};

let inventory = [];
let visitedLocations = [];
let encounteredNPCs = [];
let npcJournals = [];
let npcMemoryDiaries = [];
let quests = [];
let statusData = {};
let statusDataEffects = [];
let passiveSkills = [];
let activeSkills = [];
let lastUserMessage = 'game';

//--------------------------------------------------------------------MAIN GAME FEATURES---------------------------------------------------------------------//

//Remove splash screen on click
ELEMENTS.floatingImg.addEventListener('click', removeFloatingImage);

//Open character creation window
window.onload = () => ELEMENTS.modal.style.display = "block";

ELEMENTS.clearStatus.onclick = function () {
    statusData = {};
    statusDataEffects = [];

    ELEMENTS.statusName.innerHTML = "";
    ELEMENTS.statusAge.innerHTML = "";
    ELEMENTS.statusRace.innerHTML = "";
    ELEMENTS.statusClass.innerHTML = "";
    ELEMENTS.statusAppearanceDescription.innerHTML = "";
    ELEMENTS.statusStatusInSociety.innerHTML = "";
    ELEMENTS.statusPositionInSociety.innerHTML = "";
    ELEMENTS.statusAffiliationWithOrganizations.innerHTML = "";
    ELEMENTS.statusEffects.innerHTML = "";
    ELEMENTS.statusPurposes.innerHTML = "";

    ELEMENTS.statusContainer.classList.add("displayNone");
}

ELEMENTS.myGameButton.onclick = function () {
    ELEMENTS.modalSetting.style.display = "block";
    ELEMENTS.modal.style.display = "none";
}

//Random character generator
ELEMENTS.randomCharacterButton.onclick = function () {
    const randomName = "Hero";
    const genders = ['male', 'female'];
    const randomGender = genders[Math.floor(Math.random() * genders.length)];
    const races = ['human', 'elf', 'dwarf', 'orc', 'lizardman', 'vampire', 'golem', 'angel', 'demon'];
    const randomRace = races[Math.floor(Math.random() * races.length)];
    const classes = ['barbarian', 'bard', 'cleric', 'druid', 'fighter', 'monk', 'paladin', 'ranger', 'rogue', 'sorcerer', 'warlock', 'wizard'];
    const randomClass = classes[Math.floor(Math.random() * classes.length)];
    const randomCampaign = ELEMENTS.campaignSelect.options[Math.floor(Math.random() * ELEMENTS.campaignSelect.options.length)].value; // Randomly selects a campaign

    document.getElementById('character-name').value = randomName;
    document.getElementById('character-gender').value = randomGender;
    document.getElementById('character-race').value = randomRace;
    document.getElementById('character-class').value = randomClass;
    document.getElementById('campaign-select').value = randomCampaign;
}

//Click the "Start Game" button (normal mode)
ELEMENTS.createCharacterButton.onclick = function () {
    ELEMENTS.apiKey.value = ELEMENTS.apiKey2.value;
    ELEMENTS.aiModel.value = ELEMENTS.aiModel2.value?.trim();
    document.getElementById('choose-language').value = ELEMENTS.chooseLanguageMenu.value;

    const collapseButtonMain = document.getElementById('collapseButtonMain');
    collapseButtonMain.style.display = "flex";
    const collapseButtonSettings = document.getElementById('collapseButtonSettings');
    collapseButtonSettings.style.display = "flex";
    const collapseButtonInputArea = document.getElementById('collapseButtonInputArea');
    collapseButtonInputArea.style.display = "flex";

    styleOfImage = "medieval fantasy";
    const name = document.getElementById('character-name').value,
        gender = document.getElementById('character-gender').value,
        race = document.getElementById('character-race').value,
        characterClass = document.getElementById('character-class').value,
        rpgCheck = ELEMENTS.rpgModeToggle.checked,
        selectedCampaign = document.getElementById('campaign-select').value;

    ELEMENTS.ttsModeToggleSettings.checked = ELEMENTS.ttsModeToggle.checked;

    if (name && gender && race && characterClass) {
        CHARACTER_INFO.name = name;
        CHARACTER_INFO.gender = gender;
        CHARACTER_INFO.race = race;
        CHARACTER_INFO.classOfCharacter = characterClass;
        CHARACTER_INFO.rpgMode = rpgCheck;
        CHARACTER_INFO.ttsMode = ELEMENTS.ttsModeToggleSettings.checked;
        CHARACTER_INFO.campaign = selectedCampaign;
        CHARACTER_INFO.nonMagicMode = false;

        const allowedKeys = getStatsList();

        const startStatValue = 1;
        Object.keys(characterStats)
            .filter(key => allowedKeys.includes(key))
            .forEach(s => characterStats[s] = startStatValue);

        const gameRaces = {
            human: () => { characterStats.luck += 2; characterStats.trade += 1; characterStats.perception += 1; characterStats.wisdom -= 1; characterStats.intelligence -= 1; },
            elf: () => { characterStats.dexterity += 2; characterStats.speed += 1; characterStats.attractiveness += 1; characterStats.strength -= 1; characterStats.constitution -= 1; },
            dwarf: () => { characterStats.trade += 2; characterStats.strength += 1; characterStats.constitution += 1; characterStats.dexterity -= 1; characterStats.speed -= 1; },
            orc: () => { characterStats.strength += 3; characterStats.constitution += 2; characterStats.intelligence -= 1; characterStats.wisdom -= 1; characterStats.attractiveness -= 1; },
            lizardman: () => { characterStats.constitution += 2; characterStats.speed += 1; characterStats.attractiveness -= 1; },
            vampire: () => { characterStats.perception += 1; characterStats.attractiveness += 1; characterStats.dexterity += 1; characterStats.luck -= 1; },
            golem: () => { characterStats.strength += 3; characterStats.constitution += 2; characterStats.intelligence -= 1; characterStats.attractiveness -= 1; characterStats.wisdom -= 1; },
            angel: () => { characterStats.strength += 1; characterStats.attractiveness += 1; characterStats.wisdom += 1; characterStats.trade -= 1; },
            demon: () => { characterStats.dexterity += 1; characterStats.attractiveness += 2; characterStats.persuasion += 1; characterStats.wisdom -= 1; characterStats.luck -= 1  },
        };

        gameRaces[race]();
        inventory = getStartInventory(characterClass, race);
        ELEMENTS.modal.style.display = "none";
        const campaign = selectedCampaign == 'random'
            ? ELEMENTS.campaignSelect.options[Math.floor(Math.random() * ELEMENTS.campaignSelect.options.length)].text
            : selectedCampaign;
        CHARACTER_INFO.campaign = campaign;

        updateStatsWithoutGm();
        sendMessageToChat(translationModule.translations[ELEMENTS.chooseLanguageMenu.value]["game_starting_description"], 'system');
        sendMessageToChat(translationModule.translations[ELEMENTS.chooseLanguageMenu.value]["game_starting_donate"], 'system');
        sendMessageToChat(translationModule.translations[ELEMENTS.chooseLanguageMenu.value]["game_starting_discord"], 'system');

        const messageId = translationModule.setShortNewGameMessage(name, gender, race, characterClass);
        sendRequest(translationModule.translations[ELEMENTS.chooseLanguageMenu.value][messageId]);
        updateElements();

    } else {
        alert(translationModule.translations[ELEMENTS.chooseLanguageMenu.value]['alert_cant_start']);
    }
};


// Click the "Start Game" button (my setting mode)
ELEMENTS.startNewSettingButton.onclick = function () {
    ELEMENTS.apiKey.value = ELEMENTS.apiKey3.value;
    ELEMENTS.aiModel.value = ELEMENTS.aiModel3.value?.trim();
    document.getElementById('choose-language').value = ELEMENTS.chooseLanguageMenu.value;

    const collapseButtonMain = document.getElementById('collapseButtonMain');
    collapseButtonMain.style.display = "flex";
    const collapseButtonSettings = document.getElementById('collapseButtonSettings');
    collapseButtonSettings.style.display = "flex";
    const collapseButtonInputArea = document.getElementById('collapseButtonInputArea');
    collapseButtonInputArea.style.display = "flex";

    function getElementValue(id) {
        return document.getElementById(id).value;
    }

    function getElementChecked(id) {
        return ELEMENTS[id].checked;
    }

    const elementIds = {
        name: 'character-name-my-game',
        characterDescription: 'character-description',
        worldDescription: 'world-description',
        gender: 'character-gender2',
        race: 'character-race2',
        raceDescription: 'character-race-description',
        classOfCharacter: 'character-class2',
        classDescription: 'character-class-description',
        characterPrehistory: 'character-prehistory',
        characterStartingInventory: 'character-starting-inventory',
        startLocation: 'start-location',
        startLocationDescription: 'start-location-description',
        str: 'start-str',
        dex: 'start-dex',
        con: 'start-con',
        intl: 'start-intl',
        wis: 'start-wis',
        atr: 'start-atr',
        trd: 'start-trd',
        prs: 'start-prs',
        per: 'start-per',
        luck: 'start-luck',
        spd: 'start-spd',
        startExp: 'start-exp',
        startMoney: 'start-money'
    };

    CHARACTER_INFO.name = getElementValue(elementIds.name);
    CHARACTER_INFO.gender = getElementValue(elementIds.gender);
    CHARACTER_INFO.race = getElementValue(elementIds.race);
    CHARACTER_INFO.classOfCharacter = getElementValue(elementIds.classOfCharacter);
    CHARACTER_INFO.nonMagicMode = getElementChecked('nonMagicModeToggle');
    CHARACTER_INFO.rpgMode = getElementChecked('rpgModeToggle2');
    CHARACTER_INFO.ttsMode = getElementChecked('ttsModeToggle2');

    characterStats = {
        level: 1,
        experience: 0,
        currentHealth: 100,
        maxHealth: 100,
        currentEnergy: 100,
        maxEnergy: 100,
        strength: Math.floor(getElementValue(elementIds.str)),
        dexterity: Math.floor(getElementValue(elementIds.dex)),
        constitution: Math.floor(getElementValue(elementIds.con)),
        intelligence: Math.floor(getElementValue(elementIds.intl)),
        wisdom: Math.floor(getElementValue(elementIds.wis)),
        attractiveness: Math.floor(getElementValue(elementIds.atr)),
        trade: Math.floor(getElementValue(elementIds.trd)),
        persuasion: Math.floor(getElementValue(elementIds.prs)),
        perception: Math.floor(getElementValue(elementIds.per)),
        luck: Math.floor(getElementValue(elementIds.luck)),
        speed: Math.floor(getElementValue(elementIds.spd)),
        money: Math.floor(getElementValue(elementIds.startMoney))
    };

    ELEMENTS.ttsModeToggleSettings.checked = CHARACTER_INFO.ttsMode;
    ELEMENTS.myRules.value = getElementValue(elementIds.worldDescription);

    if (CHARACTER_INFO.name && CHARACTER_INFO.gender && CHARACTER_INFO.race && CHARACTER_INFO.classOfCharacter && Object.values(characterStats).every(stat => stat !== '')) {
        if (getElementValue(elementIds.characterDescription))
            CHARACTER_INFO.characterDescription = getElementValue(elementIds.characterDescription);

        if (getElementValue(elementIds.raceDescription))
            CHARACTER_INFO.raceDescription = getElementValue(elementIds.raceDescription);

        if (getElementValue(elementIds.classDescription))
            CHARACTER_INFO.classDescription = getElementValue(elementIds.classDescription);

        ELEMENTS.modalSetting.style.display = "none";

        experienceProcessing(Math.floor(getElementValue(elementIds.startExp)));
        updateStatsWithoutGm();
        sendMessageToChat(translationModule.translations[ELEMENTS.chooseLanguageMenu.value]["game_starting_description"], 'system');
        sendMessageToChat(translationModule.translations[ELEMENTS.chooseLanguageMenu.value]["game_starting_donate"], 'system');
        sendMessageToChat(translationModule.translations[ELEMENTS.chooseLanguageMenu.value]["game_starting_discord"], 'system');
        const messageId = translationModule.setFullNewGameMessage({
            name: CHARACTER_INFO.name,
            gender: CHARACTER_INFO.gender,
            race: CHARACTER_INFO.race,
            raceDescription: CHARACTER_INFO.raceDescription,
            classOfCharacter: CHARACTER_INFO.classOfCharacter,
            classDescription: CHARACTER_INFO.classDescription,
            characterDescription: CHARACTER_INFO.characterDescription,
            characterPrehistory: getElementValue(elementIds.characterPrehistory),
            characterStartingInventory: getElementValue(elementIds.characterStartingInventory),
            nonMagicMode: CHARACTER_INFO.nonMagicMode,
            startLocation: getElementValue(elementIds.startLocation),
            startLocationDescription: getElementValue(elementIds.startLocationDescription)
        });

        sendRequest(translationModule.translations[ELEMENTS.chooseLanguageMenu.value][messageId]);
        updateElements();
    }
    else {
        alert(translationModule.translations[ELEMENTS.chooseLanguageMenu.value]['alert_cant_start']);
    }
};

//Send text to chat on button click.
ELEMENTS.sendButton.addEventListener('click', () => sendRequest(ELEMENTS.userInput.value.trim()));

//Send text to chat on Enter key press.
ELEMENTS.userInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter' && !e.shiftKey)
        sendRequest(ELEMENTS.userInput.value.trim())
});

//Clear half of chat.
ELEMENTS.clearHalfChatButton.addEventListener('click', () => {
    const messages = ELEMENTS.chatBox.querySelectorAll('.message.gm,.message.user,.message.system');
    const count = Math.floor(messages.length / 2);
    for (let i = 0; i < count; i++) {
        messages[i].remove()
    }
});

ELEMENTS.clearSystemInChatButton.addEventListener('click', () => {
    const messages = ELEMENTS.chatBox.querySelectorAll('.message.system');
    messages.forEach(message => message.remove());
});

ELEMENTS.clearLogButton.addEventListener('click', () => {
    const messages = ELEMENTS.logBox.querySelectorAll('.message.gm');
    messages.forEach(message => message.remove());
});

//Resend message.
document.getElementById('resend-button').addEventListener('click', () => {
    if (lastUserMessage) {
        if (turn < 1)
            sendRequest(translationModule.translations[ELEMENTS.chooseLanguageMenu.value]["null_resend_message"]);
        else
            sendRequest(lastUserMessage);
    }
    else
        alert('No previous message to repeat');
});

//Sending a message to chat.
function sendMessageToChat(message, messageType) {
    const messageContainer = document.createElement('div');
    messageContainer.classList.add('message', messageType);
    messageContainer.innerHTML = markdown(message);

    if (messageType === 'gm' && ELEMENTS.ttsModeToggleSettings.checked) {
        speak(message); // Start text-to-speech function
    }

    //Creating a turn counter.
    const countTurn = document.createElement('span');
    countTurn.classList.add('message-turn-and-close-button');
    countTurn.textContent = messageType === 'user'
        ? ` ${translationModule.translations[ELEMENTS.chooseLanguageMenu.value]["name_turn"]} #${turn} `
        : messageType === 'gm' ? ` ${translationModule.translations[ELEMENTS.chooseLanguageMenu.value]["name_answer_turn"]} #${turn} ` : '';
    messageContainer.appendChild(countTurn);

    //Creating a delete button.
    const messageCloseButton = document.createElement('span');
    messageCloseButton.classList.add('message-turn-and-close-button');
    messageCloseButton.textContent = 'X';
    messageCloseButton.addEventListener('click', () => {
        ELEMENTS.chatBox.removeChild(messageContainer);
    });
    messageContainer.appendChild(messageCloseButton);

    //Add element to chat.
    ELEMENTS.chatBox.appendChild(messageContainer);
    ELEMENTS.chatBox.scrollTop = ELEMENTS.chatBox.scrollHeight;
}

//Collect starting inventory.
function getStartInventory(playerClass, playerRace) {
    const translate = translationModule.translations[ELEMENTS.chooseLanguageMenu.value];
    const classInventory = {
        barbarian: [translate["big_axe"], translate["leather_armor"], translate["healing_potion"]],
        bard: [translate["lute"], translate["dagger"], translate["light_armor"], translate["charm_potion"]],
        cleric: [translate["mace"], translate["shield"], translate["chainmail"], translate["holy_symbol"]],
        druid: [translate["wooden_staff"], translate["leather_armor"], translate["herb_pouch"]],
        fighter: [translate["long_sword"], translate["shield"], translate["chainmail"], translate["healing_potion"]],
        monk: [translate["staff"], translate["tunic"], translate["meditation_beads"]],
        paladin: [translate["long_sword"], translate["shield"], translate["chainmail"], translate["holy_symbol"]],
        ranger: [translate["long_bow"], translate["quiver_of_arrows"], translate["leather_armor"], translate["trap_kit"]],
        rogue: [translate["short_sword"], translate["dagger"], translate["leather_armor"], translate["thieves_tools"]],
        sorcerer: [translate["fire_dagger"], translate["orb"], translate["robe"], translate["energy_potion"]],
        warlock: [translate["magical_focus"], translate["leather_armor"], translate["grimuar"], translate["eldritch_talisman"]],
        wizard: [translate["spellbook"], translate["magical_wand"], translate["robe"], translate["scroll_of_magic_arrow"]]
    };

    const raceInventory = {
        human: translate["Universal_tool"],
        elf: translate["Elven_cloak"],
        dwarf: translate["Dwarven_ale"],
        orc: translate["Orcish_war_paint"],
        lizardman: translate["Scale_oil"],
        vampire: translate["Blood_vial"],
        golem: translate["Elemental_core"],
        angel: translate["Angelic_halo"],
        demon: translate["Demonic_symbol"]
    };

    const itemNames = [translationModule.translations[ELEMENTS.chooseLanguageMenu.value]["item_notepad"], ...classInventory[playerClass], raceInventory[playerRace]];

    return itemNames.map(name => {
        return {
            id: generateGUID(),
            name: name,
            description: "",
            count: 1,
            quality: null,
            durability: null,
            bonuses: [],
            image_prompt: null
        }
    });
}

function updateStatsWithoutGm() {
    ELEMENTS.strengthValue.textContent = characterStats.strength;
    ELEMENTS.dexterityValue.textContent = characterStats.dexterity;
    ELEMENTS.constitutionValue.textContent = characterStats.constitution;
    ELEMENTS.wisdomValue.textContent = characterStats.wisdom;
    ELEMENTS.attractivenessValue.textContent = characterStats.attractiveness;
    ELEMENTS.tradeValue.textContent = characterStats.trade;
    ELEMENTS.persuasionValue.textContent = characterStats.persuasion;
    ELEMENTS.intelligenceValue.textContent = characterStats.intelligence;
    ELEMENTS.perceptionValue.textContent = characterStats.perception;
    ELEMENTS.luckValue.textContent = characterStats.luck;
    ELEMENTS.speedValue.textContent = characterStats.speed;
    ELEMENTS.levelValue.textContent = characterStats.level;
}

//Experience processing.
function experienceProcessing(exp) {
    if (exp > 0)
        characterStats.experience = characterStats.experience + Math.abs(exp);

    const allowedKeys = getStatsList();
    while (characterStats.level < 100 && characterStats.experience >= LEVEL_UP_EXP[characterStats.level - 1]) {
        characterStats.level = characterStats.level + 1;
        const filteredStats = Object.keys(characterStats).filter(key => allowedKeys.includes(key));
        const selectedStatKey = filteredStats[Math.floor(Math.random() * filteredStats.length)];
        characterStats[selectedStatKey]++;

        const skillName = translationModule.translations[ELEMENTS.chooseLanguageMenu.value][selectedStatKey.toLowerCase()];
        const messageId = translationModule.setNewLevelMessage(characterStats.level, skillName, shouldGeneratePassiveSkills());
        sendMessageToChat(translationModule.translations[ELEMENTS.chooseLanguageMenu.value][messageId], 'system');
    };

    updateElements();
    updateStatsWithoutGm();
}

//Voice messages.
function speak(message) {
    if (!window.speechSynthesis) {
        console.error("Speech synthesis is not supported in this browser.");
        return;
    }

    const speechObject = new SpeechSynthesisUtterance(message.replace(/[\*#]/g, ''));
    speechObject.rate = 2;
    speechObject.pitch = 1;
    speechObject.volume = 0.8;
    speechObject.lang = navigator.language || navigator.userLanguage;

    if (turn !== 0) {
        window.speechSynthesis.cancel();
        window.speechSynthesis.speak(speechObject);
    }
}

function handlePlayerActionHints(actions) {
    ELEMENTS.actionButtons.forEach((link, index) => {
        if (!actions[index])
            return;

        link.textContent = actions[index];
        link.style.display = 'block';
        link.onclick = () => sendRequest(actions[index]);
    });
}

//Log of checks and combat.
function logMessage(message, currentHealthChange, currentEnergyChange, moneyChange) {
    const messageContainer = document.createElement('div');

    messageContainer.classList.add('message', 'gm');
    messageContainer.innerHTML = markdown(message);

    const countTurn = document.createElement('span');
    countTurn.classList.add('message-turn-and-close-button');
    countTurn.textContent = `\n current turn token cost: ${turn == 0 ? '{"prompt_tokens":0,"completion_tokens":0,"total_tokens":0}' : tokenCostCurrent}\n current session token cost: ${JSON.stringify(tokenCostSum)}\n health change this turn: ${currentHealthChange} , energy change this turn: ${currentEnergyChange} , money change this turn: ${moneyChange} ;\n ${translationModule.translations[ELEMENTS.chooseLanguageMenu.value]["turn_log_name"]} #${turn} `;
    messageContainer.appendChild(countTurn);

    //Create a delete button.
    const messageCloseButton = document.createElement('span');
    messageCloseButton.classList.add('message-turn-and-close-button');
    messageCloseButton.textContent = ' X';
    messageCloseButton.addEventListener('click', () => {
        ELEMENTS.logBox.removeChild(messageContainer);
    });
    messageContainer.appendChild(messageCloseButton);

    ELEMENTS.logBox.appendChild(messageContainer);
    ELEMENTS.bottomBox.scrollTop = ELEMENTS.bottomBox.scrollHeight;
}

function generateLoot(arr, numberOfItems) {
    const coefficients = {
        searchCoefficient: Number(arr[0]),
        locationCoefficient: Number(arr[1]),
        dangerCoefficient: Number(arr[2]),
        logicCoefficient: Number(arr[3]),
        characterCoefficient: Number(arr[4])
    };

    const loot = {};

    //General formula for the coefficient.
    const baseQualityMultiplier = (1 + coefficients.searchCoefficient + coefficients.characterCoefficient + coefficients.logicCoefficient)
        * coefficients.locationCoefficient * coefficients.dangerCoefficient;
    const k_1 = 1600, k_2 = 7;

    const qualityValues = [
        { name: translationModule.translations[ELEMENTS.chooseLanguageMenu.value]["quality_unique"], base: k_1, multiplier: k_2, totalBonuses: 12 },
        { name: translationModule.translations[ELEMENTS.chooseLanguageMenu.value]["quality_legendary"], base: k_1 * 2, multiplier: k_2 * 2, totalBonuses: 6 },
        { name: translationModule.translations[ELEMENTS.chooseLanguageMenu.value]["quality_epic"], base: k_1 * 4, multiplier: k_2 * 4, totalBonuses: 4 },
        { name: translationModule.translations[ELEMENTS.chooseLanguageMenu.value]["quality_rare"], base: k_1 * 8, multiplier: k_2 * 8, totalBonuses: 3 },
        { name: translationModule.translations[ELEMENTS.chooseLanguageMenu.value]["quality_good"], base: k_1 * 16, multiplier: k_2 * 16, totalBonuses: 2 },
        { name: translationModule.translations[ELEMENTS.chooseLanguageMenu.value]["quality_common"], base: k_1 * 32, multiplier: k_2 * 32, totalBonuses: 1 },
        { name: translationModule.translations[ELEMENTS.chooseLanguageMenu.value]["quality_trash"], base: k_1 * 64, multiplier: k_2 * 64, totalBonuses: 0 }
    ];

    for (let itemIndex = 0; itemIndex < numberOfItems; itemIndex++) {
        const randomValue = Math.floor(Math.random() * 1000000) + 1; //Generate a random number only once for each item.
        let assignedQuality = translationModule.translations[ELEMENTS.chooseLanguageMenu.value]["quality_trash"]; //Default value
        let currentQualityChance; //Current quality chance.

        //Determine the quality for the current item.
        for (let i = 0; i < qualityValues.length; i++) {
            const quality = qualityValues[i];
            currentQualityChance = (quality.base + quality.multiplier * characterStats.level * characterStats.level) * baseQualityMultiplier;

            if (randomValue <= currentQualityChance) {
                assignedQuality = quality.name;
                break; //Stop if quality is assigned.
            }
        }

        //Create an object to store the bonuses of the current item.
        loot[`thing_${itemIndex + 1}`] = { quality: assignedQuality, bonuses: {} };

        //Generate bonuses for the current item.
        const totalBonuses = qualityValues.find(q => q.name === assignedQuality).totalBonuses;
        for (let i = 1; i <= totalBonuses; i++) {
            const bonusRandomValue = Math.floor(Math.random() * 1000000) + 1; //Generate a random number for the bonus.
            if (bonusRandomValue < 50000 * i) {
                loot[`thing_${itemIndex + 1}`].bonuses[`bonus_${i}`] = "generate_interesting_effect";
            } else {
                loot[`thing_${itemIndex + 1}`].bonuses[`bonus_${i}`] = `generate_bonus_to_random_stat_from_1_to_${totalBonuses}`;
            }
        }
    }

    return loot;
}

function calculateTotalInventoryWeight() {
    let totalWeight = 0;
    for (const item of inventory)
        totalWeight += item.weight; 

    return totalWeight;
}

//check containers for capacity and move excess items to main inventory
function adjustInventoryContainerCapacity(itemsArray) {
    for (const item of itemsArray) {
        if (!item.isContainer || !Array.isArray(item.contents))
            continue;

        adjustInventoryContainerCapacity(item.contents);

        if (item.capacity >= item.contents.length)
            continue;

        const excessItemsCount = item.contents.length - item.capacity;
        const excessItems = item.contents.slice(-excessItemsCount);
        const excessItemNames = excessItems.map(excessItem => excessItem.name).join(", ");

        const messageId = translationModule.setConteinerItemsExceedCapacityMessage(item.name, excessItemsCount, excessItemNames);
        sendMessageToChat(translationModule.translations[ELEMENTS.chooseLanguageMenu.value][messageId], "system");

        item.contents.splice(-excessItemsCount, excessItemsCount);
        inventory.push(...excessItems);

        for (const excessedItem of excessItems) {
            excessedItem.contentsPath = null;
            updateContentsPathForNestedItems(excessedItem);
        }
    }
}

function adjustInventoryContainerVolume(itemsArray) {
    for (const item of itemsArray) {
        if (!item.isContainer || !Array.isArray(item.contents))
            continue;

        adjustInventoryContainerVolume(item.contents);

        const containerVolume = item.volume ?? 0;

        const totalVolume = item.contents.reduce((sum, currentItem) => {
            return sum + (currentItem.volume ?? 0);
        }, 0);

        if (totalVolume <= containerVolume)
            continue;

        let excessVolume = totalVolume - containerVolume;
        const excessItems = [];

        while (excessVolume > 0 && item.contents.length > 0) {
            const removedItem = item.contents.pop();
            excessItems.push(removedItem);
            excessVolume -= (removedItem.volume ?? 0);
        }

        if (excessItems.length > 0) {
            const excessItemNames = excessItems.map(excessItem => excessItem.name).join(", ");
            const messageId = translationModule.setContainerItemsExceedVolumeMessage(item.name, excessItemNames);
            sendMessageToChat(translationModule.translations[ELEMENTS.chooseLanguageMenu.value][messageId], "system");

            inventory.push(...excessItems);
            for (const excessedItem of excessItems) {
                excessedItem.contentsPath = null;
                updateContentsPathForNestedItems(excessedItem);
            }
        }
    }
}

function getStatsList() {
    return [
        'strength',
        'dexterity',
        'constitution',
        'intelligence',
        'wisdom',
        'attractiveness',
        'trade',
        'persuasion',
        'perception',
        'luck',
        'speed'
    ]
}

function getStatsAvailableForIncrease() {
    const stats = [];

    if (characterStats.strength <= characterStats.level)
        stats.push(getStatData("strength", characterStats.strength));

    if (characterStats.dexterity <= characterStats.level)
        stats.push(getStatData("dexterity", characterStats.dexterity));

    if (characterStats.constitution <= characterStats.level)
        stats.push(getStatData("constitution", characterStats.constitution));

    if (characterStats.intelligence <= characterStats.level)
        stats.push(getStatData("intelligence", characterStats.intelligence));

    if (characterStats.wisdom <= characterStats.level)
        stats.push(getStatData("wisdom", characterStats.wisdom));

    if (characterStats.attractiveness <= characterStats.level)
        stats.push(getStatData("attractiveness", characterStats.attractiveness));

    if (characterStats.trade <= characterStats.level)
        stats.push(getStatData("trade", characterStats.trade));

    if (characterStats.persuasion <= characterStats.level)
        stats.push(getStatData("persuasion", characterStats.persuasion));

    if (characterStats.perception <= characterStats.level)
        stats.push(getStatData("perception", characterStats.perception));

    if (characterStats.luck <= characterStats.level)
        stats.push(getStatData("luck", characterStats.luck));

    if (characterStats.speed <= characterStats.level)
        stats.push(getStatData("speed", characterStats.speed));

    return stats;

    function getStatData(name, value) {
        return {
            name: name,
            maxValue: characterStats.level - value
        }
    }
}

function increasePlayerStat(name, value) {
    const key = getPlayerStatByName(name);
    if (!key)
        return;

    const oldValue = characterStats[key];
    let newValue = characterStats[key] + value;
    if (newValue > characterStats.level)
        newValue = characterStats.level;

    if (oldValue >= newValue)
        return;
    
    characterStats[key] = newValue;

    const statName = translationModule.translations[ELEMENTS.chooseLanguageMenu.value][key.toLowerCase()];
    const valueDifference = newValue - oldValue;

    const messageId = translationModule.setStatIncreasedMessage(statName, valueDifference);
    const message = translationModule.translations[ELEMENTS.chooseLanguageMenu.value][messageId];
    sendMessageToChat(message, 'system');
    updateStatsWithoutGm();
}

function decreasePlayerStat(name, value) {
    const key = getPlayerStatByName(name);
    if (!key)
        return;

    const oldValue = characterStats[key];
    let newValue = characterStats[key] - value;
    if (newValue < 0)
        newValue = 0;

    if (newValue >= oldValue)
        return;

    characterStats[key] = newValue;

    const statName = translationModule.translations[ELEMENTS.chooseLanguageMenu.value][key.toLowerCase()];
    const valueDifference = oldValue - newValue;

    const messageId = translationModule.setStatDecreasedMessage(statName, valueDifference);
    const message = translationModule.translations[ELEMENTS.chooseLanguageMenu.value][messageId];
    sendMessageToChat(message, 'system');
    updateStatsWithoutGm();
}

function getPlayerStatByName(name) {
    if (!name)
        return null;

    const allowedKeys = getStatsList();

    const filteredKeys = Object.keys(characterStats).filter(key => allowedKeys.includes(key) && key == name);
    if (!filteredKeys || !Array.isArray(filteredKeys) || filteredKeys.length == 0)
        return null;

    return filteredKeys[0];
}

//--------------------------------------------------------------------UPDATE PLAYER INFO WINDOWS------------------------------------------------------------------//

function updateElements() {
    if (characterStats.currentHealth > characterStats.maxHealth)
        characterStats.currentHealth = characterStats.maxHealth;

    if (characterStats.currentEnergy > characterStats.maxEnergy)
        characterStats.currentEnergy = characterStats.maxEnergy;

    ELEMENTS.healthValue.textContent = characterStats.currentHealth;
    ELEMENTS.energyValue.textContent = characterStats.currentEnergy;
    ELEMENTS.expValue.textContent = `${characterStats.experience}/${LEVEL_UP_EXP[characterStats.level - 1] || "Max"}`;
    ELEMENTS.moneyValue.textContent = characterStats.money;

    updateInventoryList(ELEMENTS.inventory, inventory);
    updateStatus();
    updateLocationsList();
    updateNPCsList();
    updateSkills(passiveSkills, false);
    updateSkills(activeSkills, true);
    updateQuestsList();
}

//---- INVENTORY ----//

function updateInventoryList(inventoryListElement, itemsArray) {
    inventoryListElement.innerHTML = '';

    itemsArray.forEach(item => {
        if (!item.id)
            item.id = generateGUID();

        const itemListElement = document.createElement('li');
        const itemSpan = document.createElement('span');
        itemSpan.textContent = item.name;
        itemSpan.onclick = () => showInventoryInfo(item.id, itemsArray);
        itemListElement.appendChild(itemSpan);
        inventoryListElement.appendChild(itemListElement);

        itemSpan.addEventListener('contextmenu', (event) => {
            event.preventDefault();
            showItemContextMenu(item, itemsArray, event.clientX, event.clientY);
        });

        let touchTimer;
        itemSpan.addEventListener('touchstart', (event) => {
            touchTimer = setTimeout(() => {
                showItemContextMenu(item, itemsArray, event.touches[0].clientX, event.touches[0].clientY);
            }, 500);
        });

        itemSpan.addEventListener('touchend', () => {
            clearTimeout(touchTimer);
        });
    });
}

function updateInventoryInfoWindows(currentItem, originalItemsArray, destinationItemsArray) {
    processContainer(originalItemsArray);
    processContainer(destinationItemsArray);

    updateInventoryList(ELEMENTS.inventory, inventory);
    if (ELEMENTS.inventoryInfo.style.display == 'block' && ELEMENTS.inventoryInfoId.value == currentItem.id) {
        if (!showInventoryInfo(currentItem.id, destinationItemsArray))
            showInventoryInfo(currentItem.id, originalItemsArray)
    }

    function processContainer(itemsArray) {
        if (inventory == itemsArray)
            return;

        const container = findItemContainerByContentsArray(inventory, itemsArray);
        if (container) {
            if (ELEMENTS.inventoryContainerInfo.style.display == 'block' && ELEMENTS.inventoryContainerInfoId.value == container.id)
                updateInventoryList(ELEMENTS.inventoryContainerInfoItems, itemsArray);
            if (ELEMENTS.inventoryInfo.style.display == 'block' && ELEMENTS.inventoryInfoId.value == container.id) {
                if (Array.isArray(container.contentsPath) && container.contentsPath.length > 0) {
                    const pathCount = container.contentsPath.length;
                    const parentName = container.contentsPath.slice(-1, 1)[0];
                    const parentPath = container.contentsPath.slice(0, pathCount - 1);
                    const data = getItemByNameAndPath(parentName, parentPath);
                    if (data.item)
                        showInventoryInfo(container.id, data.item.contents);
                } else {
                    const data = getItemByNameAndPath(container.name, null);
                    if (data.item)
                        showInventoryInfo(container.id, data.parentItemsArray);                  
                }
            }
        }
    }
}

//Show item info.
function showInventoryInfo(id, itemsArray) {
    itemsArray ??= inventory;

    const currentItem = itemsArray.find(item => item.id === id);
    if (!currentItem)
        return false;
          
    const displayNoneClass = "displayNone";
    const description = currentItem.description ? markdown(currentItem.description) : translationModule.translations[ELEMENTS.chooseLanguageMenu.value]["item_not_descripted"];
    const countLabel = translationModule.translations[ELEMENTS.chooseLanguageMenu.value]["inventory-count-label"];
    const qualityLabel = translationModule.translations[ELEMENTS.chooseLanguageMenu.value]["inventory-quality-label"];
    const durabilityLabel = translationModule.translations[ELEMENTS.chooseLanguageMenu.value]["inventory-durability-label"];
    const priceLabel = translationModule.translations[ELEMENTS.chooseLanguageMenu.value]["inventory-price-label"];
    const resourceLabel = translationModule.translations[ELEMENTS.chooseLanguageMenu.value]["inventory-resource-label"];
    const weightLabel = translationModule.translations[ELEMENTS.chooseLanguageMenu.value]["inventory-weight-label"];
    const capacityLabel = translationModule.translations[ELEMENTS.chooseLanguageMenu.value]["inventory-capacity-label"];
    const volumeLabel = translationModule.translations[ELEMENTS.chooseLanguageMenu.value]["inventory-volume-label"];

    ELEMENTS.inventoryInfoId.value = id;
    ELEMENTS.inventoryInfoName.innerHTML = markdown(currentItem.name);
    ELEMENTS.inventoryInfoDescription.innerHTML = description;
    ELEMENTS.inventoryInfoCount.innerHTML = `${countLabel}: ${currentItem.count ?? '-'}`;
    ELEMENTS.inventoryInfoQuality.innerHTML = `${qualityLabel}: ${currentItem.quality ?? '-'}`;
    ELEMENTS.inventoryInfoPrice.innerHTML = `${priceLabel}: ${currentItem.price ?? '-'}`;
    ELEMENTS.inventoryInfoWeight.innerHTML = `${weightLabel}: ${currentItem.weight?.toFixed(2) ?? '-'}`;
    ELEMENTS.inventoryInfoCapacity.innerHTML = `${capacityLabel}: ${currentItem.capacity ?? '-'}`;
    ELEMENTS.inventoryInfoVolume.innerHTML = `${volumeLabel}: ${currentItem.volume?.toFixed(2) ?? '-'}`;

    processDurability();
    processCustomProperties();
    processResource();
    renderListElements(currentItem.bonuses, ELEMENTS.inventoryInfoBonuses, "inventory-info-bonuses-list", "inventory-bonuses-label");
    processContainerProperties();

    ELEMENTS.inventoryInfoDelete.onclick = function () {
        if (!confirmAction())
            return;

        deleteItem(currentItem, itemsArray, true);
        ELEMENTS.inventoryInfo.style.display = 'none';
    };

    ELEMENTS.inventoryInfoImage.style.display = ELEMENTS.imageToggleSettings.checked ? "inline-block" : "none";
    ELEMENTS.inventoryInfoImage.onclick = function () {
        showImageInfo(currentItem.name, currentItem.imageUrl, currentItem.image_prompt, currentItem);
    }   

    ELEMENTS.inventoryContainerOpen.onclick = function () {
        showInventoryInfoContainer(currentItem);
    }

    //--- FINAL ---//
    ELEMENTS.inventoryInfo.style.display = 'block';
    return true;

    function processDurability() {
        let durablityValue = currentItem.durability?.toString();
        if (durablityValue && !durablityValue.endsWith("%"))
            durablityValue += "%";

        ELEMENTS.inventoryInfoDurability.innerHTML = `${durabilityLabel}: ${durablityValue ?? '-'}`;
    }

    function processCustomProperties() {
        ELEMENTS.inventoryInfoCustomProperty.innerHTML = markdown(currentItem.customProperty);
        if (!currentItem.customProperty)
            ELEMENTS.inventoryInfoCustomProperty.classList.add(displayNoneClass);
        else
            ELEMENTS.inventoryInfoCustomProperty.classList.remove(displayNoneClass);
    }

    function processResource() {
        let resourceValue = currentItem.resource ?? '-';
        if (!currentItem.resource?.includes(':'))
            resourceValue = `${resourceLabel}: ${resourceValue}`;

        ELEMENTS.inventoryInfoResource.innerHTML = resourceValue;
        if (!currentItem.resource)
            ELEMENTS.inventoryInfoResource.classList.add(displayNoneClass);
        else
            ELEMENTS.inventoryInfoResource.classList.remove(displayNoneClass);
    }
    
    function processContainerProperties() {
        if (currentItem.isContainer && currentItem.capacity > 0 && currentItem.volume > 0) {
            ELEMENTS.inventoryContainerOpen.classList.remove(displayNoneClass);
            ELEMENTS.inventoryInfoCapacity.classList.remove(displayNoneClass);
            ELEMENTS.inventoryInfoCount.classList.add(displayNoneClass);

            ELEMENTS.inventoryInfoContentsDescription.classList.remove(displayNoneClass);
            const contentsDescriptionLabel = translationModule.translations[ELEMENTS.chooseLanguageMenu.value]["content-description-label"];
            let contentsDescription = describeItemContainerContents(currentItem);
            if (!contentsDescription)
                contentsDescription = translationModule.translations[ELEMENTS.chooseLanguageMenu.value]["empty-container-label"];
            ELEMENTS.inventoryInfoContentsDescription.innerHTML = `<p>${contentsDescriptionLabel}:</p><p>${markdown(contentsDescription)}</p>`;            

            ELEMENTS.inventoryInfoAvailableCapacity.classList.remove(displayNoneClass);
            ELEMENTS.inventoryInfoAvailableVolume.classList.remove(displayNoneClass);
            const availableCapacityLabel = translationModule.translations[ELEMENTS.chooseLanguageMenu.value]["inventory-contents-count-label"];
            const availableVolumeLabel = translationModule.translations[ELEMENTS.chooseLanguageMenu.value]["inventory-contents-volume-label"];
            const availableCapacity = currentItem.capacity - (currentItem.contents?.length ?? 0);
            const availableVolume = currentItem.volume - (currentItem.contentsVolume ?? 0);
            ELEMENTS.inventoryInfoAvailableCapacity.innerHTML = `${availableCapacityLabel}: ${availableCapacity}`;
            ELEMENTS.inventoryInfoAvailableVolume.innerHTML = `${availableVolumeLabel}: ${availableVolume.toFixed(2)}`;

        } else {
            ELEMENTS.inventoryContainerOpen.classList.add(displayNoneClass);
            ELEMENTS.inventoryInfoCapacity.classList.add(displayNoneClass);
            ELEMENTS.inventoryInfoCount.classList.remove(displayNoneClass);
            ELEMENTS.inventoryInfoContentsDescription.classList.add(displayNoneClass);
            ELEMENTS.inventoryInfoAvailableCapacity.classList.add(displayNoneClass);
            ELEMENTS.inventoryInfoAvailableVolume.classList.add(displayNoneClass);
        }
    }
}

function showInventoryInfoContainer(container) {
    if (!container || !container.isContainer)
        return;

    ELEMENTS.inventoryContainerInfoId.value = container.id;
    ELEMENTS.inventoryContainerInfoName.innerHTML = markdown(container.name);
    updateInventoryList(ELEMENTS.inventoryContainerInfoItems, container.contents ?? []);

    ELEMENTS.inventoryContainerInfo.style.display = 'block';
}

function addInventoryItem(itemParams) {
    const data = getItemByNameAndPath(itemParams.name, itemParams.contentsPath, inventory);

    const inventoryArray = data?.parentItemsArray ?? inventory;
    const existingItemIndex = data?.index ?? -1;

    if (existingItemIndex !== -1) {
        const item = data.item;
        //If the item already exists, move it to the top of the list.
        if (itemParams.quality)
            item.quality = itemParams.quality;
        if (itemParams.durability != "")
            item.durability = itemParams.durability;
        if (itemParams.image_prompt)
            item.image_prompt = itemParams.image_prompt;

        item.resource = itemParams.resource;
        item.count = itemParams.count;
        item.price = itemParams.price;
        item.bonuses = itemParams.bonuses;
        item.description = itemParams.description;
        item.customProperty = itemParams.customProperty;
        item.isContainer = !!itemParams.isContainer;
        item.weight = itemParams.weight;
        item.volume = itemParams.volume;
        item.containerWeight = itemParams.containerWeight;
        item.capacity = itemParams.capacity;

        inventoryArray.splice(existingItemIndex, 1);
        inventoryArray.unshift(item);
    } else {
        //Add a new item to the top of the list.
        inventoryArray.unshift({
            name: itemParams.name,
            description: itemParams.description,
            count: itemParams.count,
            quality: itemParams.quality,
            price: itemParams.price,
            durability: itemParams.durability,
            resource: itemParams.resource,
            bonuses: itemParams.bonuses,
            customProperty: itemParams.customProperty,
            image_prompt: itemParams.image_prompt,
            contentsPath: itemParams.contentsPath,
            isContainer: itemParams.isContainer,
            weight: itemParams.weight,
            volume: itemParams.volume,
            containerWeight: itemParams.containerWeight,
            capacity: itemParams.capacity,
            contents: itemParams.isContainer ? [] : undefined
        });
    }

    if (isNestedItem(itemParams) && ELEMENTS.inventoryContainerInfo.style.display === 'block') {
        const parentContainerId = ELEMENTS.inventoryContainerInfoId.value;
        if (parentContainerId === data.parentId)
            updateInventoryList(ELEMENTS.inventoryContainerInfoItems, inventoryArray);
    }

    if (ELEMENTS.inventoryInfo.style.display !== 'block')
        return;

    const id = ELEMENTS.inventoryInfoId.value;
    if (inventoryArray.find(item => item.id === id))
        showInventoryInfo(id, inventoryArray);
}

function generateInventoryItemContextMenu(currentItem, parentItemsArray) {
    ELEMENTS.inventoryItemContextMenu.innerHTML = '';
    ELEMENTS.inventoryItemContextMenuName.innerHTML = currentItem.name;
    
    generateMenuItem(translationModule.translations[ELEMENTS.chooseLanguageMenu.value]["inventory-item-inspect"], () => showInventoryInfo(currentItem.id, parentItemsArray));
    if (currentItem.contentsPath)
        generateMenuItem(translationModule.translations[ELEMENTS.chooseLanguageMenu.value]["move-to-inventory"], () => moveItem(currentItem, parentItemsArray, inventory, true));  
    generateMenuItem(translationModule.translations[ELEMENTS.chooseLanguageMenu.value]["throw-item"], () => deleteItemWithConfirmation(currentItem, parentItemsArray, true));
    
    for (const item of parentItemsArray) {
        if (item.id != currentItem.id
            && item.isContainer && Array.isArray(item.contents)
            && item.capacity >= item.contents.length + 1
            && item.volume >= (item.contentsVolume ?? 0) + currentItem.volume)
            generateMenuItem(translationModule.translations[ELEMENTS.chooseLanguageMenu.value]["place-item-to"] + item.name, () => moveItem(currentItem, parentItemsArray, item.contents, true));        
    }

    function generateMenuItem(label, action) {
        const listItem = document.createElement('li');
        listItem.textContent = label;
        listItem.addEventListener('click', () => {
            action();
            hideInventoryItemContextMenu();
        });
        ELEMENTS.inventoryItemContextMenu.appendChild(listItem);    
    }
}

function showItemContextMenu(currentItem, parentItemsArray, x, y) {
    generateInventoryItemContextMenu(currentItem, parentItemsArray);
    ELEMENTS.inventoryItemContextMenuContainer.style.display = 'block';
    ELEMENTS.inventoryItemContextMenuContainer.style.left = x + 'px';
    ELEMENTS.inventoryItemContextMenuContainer.style.top = y + 'px';
}

function hideInventoryItemContextMenu() {
    ELEMENTS.inventoryItemContextMenuContainer.style.display = 'none';
}

//---- SKILLS ----//

function updateSkills(skills, active) {
    const skillsElement = active ? ELEMENTS.skillsActiveList : ELEMENTS.skillsPassiveList;

    if (!skills) {
        skillsElement.innerHTML = "";
        return;
    }

    const groups = [...new Set(skills.map(skill => skill.group))];
    const html = groups.map(group => {
        const groupedSkills = skills.filter(skill => skill.group == group);
        const listElementsHtml = groupedSkills.map(skill => {
            if (!skill.id)
                skill.id = generateGUID();

            return `
			    <li>
				    <span onclick="showSkillInfo('${skill.id}', ${active})">${skill.name}</span>						
			    </li>
			`;
        }).join('');

        return `
		    <li>${group}
			    <ul class='inheritedList'>${listElementsHtml}</ul>
		    </li>
		`;
    }).join('');

    skillsElement.innerHTML = html;
}

function setOrChangeSkills(skills, newSkills) {
    newSkills = sanitizeSkillGroups(newSkills);

    for (newSkill of newSkills) {
        if (!newSkill.name) continue;

        if (newSkill.playerStatBonus)
            newSkill.effectDescription = "";

        const index = skills.findIndex(skill => skill.name === newSkill.name && skill.group === newSkill.group);
        if (index > -1)
            skills[index] = newSkill;
        else
            skills.push(newSkill);
    }
}

function removeSkill(name, isActive) {
    const skills = isActive ? activeSkills : passiveSkills;
    if (!skills[name])
        return;
    
    const messageId = translationModule.setSkillRemovedMessage(name, isActive);
    const message = translationModule.translations[ELEMENTS.chooseLanguageMenu.value][messageId];
    sendMessageToChat(message, 'system');
}

function showSkillInfo(id, active) {
    const skillsArray = active ? activeSkills : passiveSkills;
    const skill = skillsArray.find(skill => skill.id === id);

    let description = "";
    if (skill.energyCost) {
        const skillCostLabel = translationModule.translations[ELEMENTS.chooseLanguageMenu.value]["skill_energy_cost"];
        description += `<p>${skillCostLabel}: ${skill.energyCost}</p>`;
    }

    const skillEffect = skill.playerStatBonus ? skill.playerStatBonus : skill.effectDescription;
    if (skillEffect) {
        const skillEffectLabel = translationModule.translations[ELEMENTS.chooseLanguageMenu.value]["skill_effect_label"];
        description += `<p>${skillEffectLabel}: ${skillEffect}</p>`;
    }

    description += markdown(skill.skillDescription);

    ELEMENTS.skillInfoName.innerHTML = `${skill.name} (${skill.group})`;
    ELEMENTS.skillInfoDescription.innerHTML = description;
    ELEMENTS.skillInfoDelete.style.display = active ? 'block' : 'none';
    ELEMENTS.skillInfoDelete.onclick = function () {
        if (!confirmAction())
            return;

        if (active) {
            activeSkills = activeSkills.filter(s => s.id !== skill.id);
            updateSkills(activeSkills, true);
        } else {
            passiveSkills = passiveSkills.filter(s => s.id !== skill.id);
            updateSkills(passiveSkills, false);
        }

        ELEMENTS.skillInfo.style.display = 'none';
    };

    ELEMENTS.skillInfo.style.display = 'block';
}

function sanitizeSkillGroups(skills) {
    return skills.map(skill => {
        let groupName = typeof skill.group === 'string' ? skill.group.trim() : '';
        if (!groupName) {
            groupName = translationModule.translations[ELEMENTS.chooseLanguageMenu.value]["other_skill_group"];
        } else {
            groupName = groupName[0].toUpperCase() + groupName.slice(1) ?? '';
        }

        skill.group = groupName;
        return skill;
    });
}

//---- LOCATION ----//

//Update location list.
function updateLocationsList() {
    ELEMENTS.locationsList.innerHTML = visitedLocations.slice(0, 30).map(loc => {
        if (!loc.id)
            loc.id = generateGUID();

        return `
            <li>
	            <span class="${loc.isLocked ? 'locked' : 'unlocked'} lock" onclick="toggleLocationLock('${loc.id}')">
		            ${loc.isLocked ? '🔒' : ''}
	            </span>
	            <span onclick="showLocationInfo('${loc.id}')">${loc.name} (${loc.difficulty})</span>
            </li>
        `;
    }).join('');
}

//Show location info.
function showLocationInfo(id) {
    const currentLocation = visitedLocations.find(loc => loc.id === id);
    const difficultyLabel = translationModule.translations[ELEMENTS.chooseLanguageMenu.value]["location_difficulty_label"];

    ELEMENTS.locationInfoId.value = id;
    ELEMENTS.locationInfoName.innerHTML = `${markdown(currentLocation.name)} (${difficultyLabel} ${currentLocation.difficulty})`;
    ELEMENTS.locationInfoDescription.innerHTML = markdown(currentLocation.description);
    ELEMENTS.locationInfoDelete.onclick = function () {
        if (!confirmAction())
            return;

        visitedLocations = visitedLocations.filter(loc => loc.name !== currentLocation.name);
        updateLocationsList();
        ELEMENTS.locationInfo.style.display = 'none';
    };

    ELEMENTS.locationInfoImage.style.display = ELEMENTS.imageToggleSettings.checked ? "inline-block" : "none";
    ELEMENTS.locationInfoImage.onclick = function () {
        showImageInfo(currentLocation.name, currentLocation.imageUrl, currentLocation.image_prompt, currentLocation);
    }

    ELEMENTS.locationInfo.style.display = 'block';
}

//Add a new location or change the description of an old location.
function addVisitedLocation(name, difficulty, description, eventsDescription, image_prompt, isLocked = false) {
    const existingLocationIndex = visitedLocations.findIndex(loc => loc.name === name);

    if (existingLocationIndex !== -1) {
        //If the location already exists, move it to the top of the list.
        const existingLocation = visitedLocations[existingLocationIndex];
        existingLocation.difficulty = difficulty;
        existingLocation.description += `\n\n${eventsDescription}`;
        if (image_prompt)
            existingLocation.image_prompt = image_prompt;
        visitedLocations.splice(existingLocationIndex, 1);
        visitedLocations.unshift(existingLocation);
    } else {
        //If this is a new location.
        if (visitedLocations.length >= 30) {
            //If the list already contains 30 items, delete the last unlocked item.
            const indexToRemove = visitedLocations.slice().reverse().findIndex(loc => !loc.isLocked);
            if (indexToRemove !== -1) {
                visitedLocations.splice(visitedLocations.length - 1 - indexToRemove, 1);
            } else {
                //If all locations are locked, do not add a new one.
                console.log("All locations are blocked");
                return;
            }
        }

        description = `${description} \n\n ${eventsDescription}`;
        //Add a new location to the top of the list.
        visitedLocations.unshift({ name, difficulty, description, image_prompt, isLocked });
    }
    updateLocationsList();
    if (ELEMENTS.locationInfo.style.display !== 'block')
        return;

    const id = ELEMENTS.locationInfoId.value;
    if (visitedLocations.find(location => location.id === id))
        showLocationInfo(id);
}

//Toggle location lock.
function toggleLocationLock(id) {
    const locationIndex = visitedLocations.findIndex(loc => loc.id === id);
    if (locationIndex !== -1) {
        visitedLocations[locationIndex].isLocked = !visitedLocations[locationIndex].isLocked;
        updateLocationsList();
    }
}

//---- NPC ----//

//Update NPC list.
function updateNPCsList() {
    if (!encounteredNPCs) {
        ELEMENTS.npcsList.innerHTML = "";
        return;
    }

    ELEMENTS.npcsList.innerHTML = encounteredNPCs.slice(0, 30).map(npc => {
        if (!npc.id)
            npc.id = generateGUID();

        return `
		    <li>
			    <span class="${npc.isLocked ? 'locked' : 'unlocked'} lock" onclick="toggleNPCLock('${npc.id}')">
				    ${npc.isLocked ? '🔒' : ''}
			    </span>
			    <span onclick="showNPCInfo('${npc.id}')">${npc.name}</span>
		    </li>
        `;
    }).join('');
}

function renameNPC(oldName, newName) {
    if (!oldName || !newName)
        return;

    const npcIndex = encounteredNPCs.findIndex(npc => npc.name === oldName);
    if (npcIndex == -1)
        return;

    const npc = encounteredNPCs.splice(npcIndex, 1)[0];
    npc.name = newName;
    encounteredNPCs.unshift(npc);

    const journalIndex = npcJournals.findIndex(journal => journal.name === oldName);
    if (journalIndex != -1) {
        const npcJournal = npcJournals.splice(journalIndex, 1)[0];
        npcJournal.name = newName;
        npcJournals.unshift(npcJournal);
    }

    const memoryDiaryIndex = npcMemoryDiaries.findIndex(memory => memory.name === oldName);
    if (memoryDiaryIndex != -1) {
        const memoryDiary = npcMemoryDiaries.splice(memoryDiaryIndex, 1)[0];
        memoryDiary.name = newName;
        npcMemoryDiaries.unshift(memoryDiary);
    }
}

//Show NPC info.
function showNPCInfo(id) {
    const currentNPC = encounteredNPCs.find(npc => npc.id === id);

    const journal = npcJournals.find(npc => npc.name === currentNPC.name);
    const journalNotes = journal?.notes ? `${markdown(journal.notes)}` : "";
    const memoryDiary = npcMemoryDiaries.find(npc => npc.name === currentNPC.name);
    const memoryNotes = memoryDiary?.notes ? `${markdown(memoryDiary.notes)}` : "";

    const rarityLabel = translationModule.translations[ELEMENTS.chooseLanguageMenu.value]["rarity-label"];
    const ageLabel = translationModule.translations[ELEMENTS.chooseLanguageMenu.value]["age-label"];
    const worldviewLabel = translationModule.translations[ELEMENTS.chooseLanguageMenu.value]["npc-info-worldview-label"];
    const raceLabel = translationModule.translations[ELEMENTS.chooseLanguageMenu.value]["npc-info-race-label"];
    const classLabel = translationModule.translations[ELEMENTS.chooseLanguageMenu.value]["npc-info-class-label"];
    
    ELEMENTS.npcInfoId.value = id;
    ELEMENTS.npcInfoJournal.innerHTML = journalNotes;
    ELEMENTS.npcInfoMemoryDiary.innerHTML = memoryNotes;

    ELEMENTS.npcInfoName.innerHTML = `${markdown(currentNPC.name)}`;
    ELEMENTS.npcInfoRarity.innerHTML = `${rarityLabel}: ${currentNPC.rarity ?? '-'}`;
    ELEMENTS.npcInfoAge.innerHTML = `${ageLabel}: ${currentNPC.age ?? '-'}`;
    ELEMENTS.npcInfoWorldview.innerHTML = `${worldviewLabel}: ${currentNPC.worldview ?? '-'}`;
    ELEMENTS.npcInfoRace.innerHTML = `${raceLabel}: ${currentNPC.race ?? '-'}`;
    ELEMENTS.npcInfoClass.innerHTML = `${classLabel}: ${currentNPC.class ?? '-'}`;
    
    renderDescriptionElement(currentNPC.appearanceDescription, ELEMENTS.npcInfoAppearanceDescription);
    renderDescriptionElement(currentNPC.history, ELEMENTS.npcInfoHistory);
    renderDescriptionElement(currentNPC.attitude, ELEMENTS.npcInfoAttitude);
    renderListElements(currentNPC.stats, ELEMENTS.npcInfoStats, "npc-info-stats-list", "npc-info-stats-label");
    renderListElements(currentNPC.skills, ELEMENTS.npcInfoSkills, "npc-info-skills-list", "npc-info-skills-label");
    renderListElements(currentNPC.effects, ELEMENTS.npcInfoEffects, "npc-info-effects-list", "npc-info-effects-label");
    
    ELEMENTS.npcInfoDelete.onclick = function () {
        if (!confirmAction())
            return;

        encounteredNPCs = encounteredNPCs.filter(npc => npc.id !== currentNPC.id);
        npcJournals = npcJournals.filter(npc => npc.name !== currentNPC.name);
        npcMemoryDiaries = npcMemoryDiaries.filter(npc => npc.name !== currentNPC.name);

        updateNPCsList();
        ELEMENTS.npcInfo.style.display = 'none';
    };

    ELEMENTS.npcInfoDeleteJournal.onclick = function () {
        if (!confirmAction())
            return;

        npcJournals = npcJournals.filter(npc => npc.name !== currentNPC.name);
        ELEMENTS.npcInfoJournal.innerHTML = "";
    }

    ELEMENTS.npcInfoDeleteMemoryDiary.onclick = function () {
        if (!confirmAction())
            return;

        npcMemoryDiaries = npcMemoryDiaries.filter(npc => npc.name !== currentNPC.name);
        ELEMENTS.npcInfoMemoryDiary.innerHTML = "";
    }

    ELEMENTS.npcInfoImage.style.display = ELEMENTS.imageToggleSettings.checked ? "inline-block" : "none";
    ELEMENTS.npcInfoImage.onclick = function () {
        showImageInfo(currentNPC.name, currentNPC.imageUrl, currentNPC.image_prompt, currentNPC);
    }

    //--- FINAL ---//
    ELEMENTS.npcInfo.style.display = 'block';
}

//Add a new NPC or change the description of an existing one.
function addEncounteredNPC(npcParams) {
    const existingNPCIndex = encounteredNPCs.findIndex(npc => npc.name === npcParams.name);

    if (existingNPCIndex !== -1) {
        //If the NPC already exists, move it to the top of the list.
        const existingNPC = encounteredNPCs[existingNPCIndex];
        if (npcParams.image_prompt)
            existingNPC.image_prompt = npcParams.image_prompt;
        existingNPC.rarity = npcParams.rarity;
        existingNPC.age = npcParams.age;
        existingNPC.worldview = npcParams.worldview;
        existingNPC.race = npcParams.race;
        existingNPC.class = npcParams.class;
        existingNPC.appearanceDescription = npcParams.appearanceDescription;
        existingNPC.history = npcParams.history;
        existingNPC.stats = npcParams.stats;
        existingNPC.skills = npcParams.skills;
        existingNPC.effects = npcParams.effects;
        existingNPC.attitude = npcParams.attitude;

        encounteredNPCs.splice(existingNPCIndex, 1);
        encounteredNPCs.unshift(existingNPC);
    } else {
        if (encounteredNPCs.length >= 30) {
            let indexToRemove = -1;
            for (let i = encounteredNPCs.length - 1; i >= 0; i--) {
                if (!encounteredNPCs[i].isLocked) {
                    indexToRemove = i;
                    break;
                }
            }
            if (indexToRemove !== -1)
                encounteredNPCs.splice(indexToRemove, 1);
        }

        //Add a new NPC to the top of the list.
        encounteredNPCs.unshift({
            name: npcParams.name,
            image_prompt: npcParams.image_prompt,
            rarity: npcParams.rarity,
            age: npcParams.age,
            worldview: npcParams.worldview,
            race: npcParams.race,
            class: npcParams.class,
            appearanceDescription: npcParams.appearanceDescription,
            history: npcParams.history,
            stats: npcParams.stats,
            skills: npcParams.skills,
            effects: npcParams.effects,
            attitude: npcParams.attitude
        });
    }

    updateNPCsList();
    showNpcInfoIfNeeded();
}

function showNpcInfoIfNeeded() {
    if (ELEMENTS.npcInfo.style.display !== 'block')
        return;

    const id = ELEMENTS.npcInfoId.value;
    if (encounteredNPCs.find(npc => npc.id === id))
        showNPCInfo(id);
}

//Toggle NPC lock.
function toggleNPCLock(id) {
    const npcIndex = encounteredNPCs.findIndex(npc => npc.id === id);
    if (npcIndex !== -1) {
        encounteredNPCs[npcIndex].isLocked = !encounteredNPCs[npcIndex].isLocked;
        updateNPCsList();
    }
}

//---- NPC JOURNALS ----//

function addNpcJournal(name, lastNote) {
    const existingJournalIndex = npcJournals.findIndex(journal => journal.name === name);

    if (existingJournalIndex !== -1) {
        //If the NPC log already exists, move it to the top of the list.
        const existingJournal = npcJournals[existingJournalIndex];
        existingJournal.notes += `\n\n${lastNote}`;
        npcJournals.splice(existingJournalIndex, 1);
        npcJournals.unshift(existingJournal);
    } else {
        //If this is a new NPC log.
        //Add a new NPC log to the top of the list.
        const notes = lastNote;
        npcJournals.unshift({ name, notes });
    }

    showNpcInfoIfNeeded();
}

function addNpcMemoryDiary(name, lastNote) {
    const existingDiaryIndex = npcMemoryDiaries.findIndex(diary => diary.name === name);

    if (existingDiaryIndex !== -1) {
        //If the NPC log already exists, move it to the top of the list.
        const existingDiary = npcMemoryDiaries[existingDiaryIndex];
        existingDiary.notes += `\n\n${lastNote}`;
        npcMemoryDiaries.splice(existingDiaryIndex, 1);
        npcMemoryDiaries.unshift(existingDiary);
    } else {
        const notes = lastNote;
        npcMemoryDiaries.unshift({ name, notes });
    }

    showNpcInfoIfNeeded();
}

//---- QUESTS ----//

//Update quest list.
function updateQuestsList() {
    if (!quests) {
        ELEMENTS.questsList.innerHTML = "";
        return;
    }

    const activeQuests = quests.filter(quest => !quest.isCompleted).sort(quest => quest.isLocked ? 1 : -1).map(renderQuest).join('');
    const completedQuests = quests.filter(quest => quest.isCompleted).sort(quest => quest.isLocked ? 1 : -1).map(renderQuest).join('');

    const activeQuestsLabel = translationModule.translations[ELEMENTS.chooseLanguageMenu.value]["quest-active-label"];
    const completedQuestsLabel = translationModule.translations[ELEMENTS.chooseLanguageMenu.value]["quest-completed-label"];

    let questsHTML = "";
    if (activeQuests) {
        questsHTML += `
		    <li>${activeQuestsLabel}
			    <ul class="inheritedList">${activeQuests}</ul>
		    </li>
        `;
    }
    if (completedQuests) {
        questsHTML += `
		    <li>${completedQuestsLabel}
			    <ul class="inheritedList">${completedQuests}</ul>
		    </li>
		`;
    }

    ELEMENTS.questsList.innerHTML = questsHTML;
}

function renderQuest(quest) {
    if (!quest.id)
        quest.id = generateGUID();

    return `
	    <li>
		    <span class="${quest.isLocked ? 'locked' : 'unlocked'} lock" onclick="toggleQuestLock('${quest.id}')">
			    ${quest.isLocked ? '🔒' : ''}
		    </span>
		    <span onclick="showQuestInfo('${quest.id}')">${quest.name}</span>
	    </li>
    `;
}

function showQuestInfo(id) {
    const currentQuest = quests.find(quest => quest.id === id);
    const description = currentQuest.description ? markdown(currentQuest.description) : '';
    const details = currentQuest.details ? markdown(currentQuest.details) : '';
    const rewardLabel = translationModule.translations[ELEMENTS.chooseLanguageMenu.value]["quest-reward-label"];
    const reward = currentQuest.reward ? markdown(`${rewardLabel}: ${currentQuest.reward}`) : '';
    const punishmentLabel = translationModule.translations[ELEMENTS.chooseLanguageMenu.value]["quest-punishment-label"];
    const punishment = currentQuest.punishmentForFailingQuest ? markdown(`${punishmentLabel}: ${currentQuest.punishmentForFailingQuest}`) : '';

    ELEMENTS.questInfoId.value = id;
    ELEMENTS.questInfoName.innerHTML = `${markdown(currentQuest.name)}`;
    ELEMENTS.questInfoDescription.innerHTML = description;
    ELEMENTS.questInfoDetails.innerHTML = details;
    ELEMENTS.questInfoReward.innerHTML = reward;
    ELEMENTS.questInfoPunishment.innerHTML = punishment;

    if (currentQuest.purposes) {
        const listData = currentQuest.purposes.map(purpose => {
            const parsedPurpose = markdown(purpose);
            return `<li>${parsedPurpose}</li>`;
        }).join('');

        const label = translationModule.translations[ELEMENTS.chooseLanguageMenu.value]["quest-purposes-label"];
        ELEMENTS.questInfoPurposes.innerHTML = `
		    <span id="quest-purposes-label">${label}</span>
		    <ul id="quest-info-purposes-list">
			    ${listData}
		    </ul>
		`;
    } else {
        ELEMENTS.questInfoPurposes.innerHTML = '';
    }

    ELEMENTS.questInfoDelete.onclick = function () {
        if (!confirmAction())
            return;

        quests = quests.filter(quest => quest.id !== currentQuest.id);
        updateQuestsList();
        ELEMENTS.questInfo.style.display = 'none';
    };
    ELEMENTS.questInfo.style.display = 'block';
}

//Add a new quest or change the description of an old quest.
function addQuest(name, description, purposes, reward, punishmentForFailingQuest, details, isCompleted, isLocked = false) {
    const existingQuestIndex = quests.findIndex(quest => quest.name === name);

    if (existingQuestIndex !== -1) {
        //If the quest already exists, move it to the top of the list.
        const existingQuest = quests[existingQuestIndex];
        if (description)
            existingQuest.description = description;
        if (purposes)
            existingQuest.purposes = purposes;
        if (reward)
            existingQuest.reward = reward;
        if (punishmentForFailingQuest)
            existingQuest.punishmentForFailingQuest = punishmentForFailingQuest;
        if (details)
            existingQuest.details = details;
        existingQuest.isCompleted = isCompleted;
        quests.splice(existingQuestIndex, 1);
        quests.unshift(existingQuest);
    } else {
        //If this is a new quest.
        if (quests.length >= 30) {
            let indexToRemove = -1;
            for (let i = quests.length - 1; i >= 0; i--) {
                if (quests[i].isCompleted && !quests[i].isLocked) {
                    indexToRemove = i;
                    break;
                }
            }

            if (indexToRemove !== -1) 
                quests.splice(indexToRemove, 1);            
        }

        //Add a new quest to the top of the list.
        quests.unshift({ name, description, purposes, reward, punishmentForFailingQuest, details, isCompleted, isLocked });
    }

    updateQuestsList();
    if (ELEMENTS.questInfo.style.display !== 'block')
        return;

    const id = ELEMENTS.questInfoId.value;
    if (quests.find(q => q.id === id))
        showQuestInfo(id);
}

//Toggle quest lock.
function toggleQuestLock(id) {
    const questIndex = quests.findIndex(quest => quest.id === id);
    if (questIndex !== -1) {
        quests[questIndex].isLocked = !quests[questIndex].isLocked;
        updateQuestsList();
    }
}

//---- IMAGE ----//

//Show image window.
function showImageInfo(name, imageUrl, prompt, element) {
    ELEMENTS.imageInfoName.innerHTML = markdown(name);
    ELEMENTS.imageInfoThumbnail.style.width = imageWidth / 2 + "px";
    ELEMENTS.imageInfoThumbnail.style.height = imageHeight / 2 + "px";
    ELEMENTS.imageInfoPrompt.value = prompt;

    if (imageUrl) {
        ELEMENTS.imageInfoImage.setAttribute("href", imageUrl);
        ELEMENTS.imageInfoThumbnail.src = imageUrl;
        refreshFsLightbox();
    } else {
        generateImageForComponent(element);
    }

    ELEMENTS.imageInfoGenerate.onclick = function () {
        generateImageForComponent(element);
    };
    ELEMENTS.imageInfo.style.display = 'block';
}

//---- STATUS ----//

//Update status.
function updateStatus() {
    processEffects();

    if (!statusData?.name)
        return;

    ELEMENTS.statusContainer.classList.remove("displayNone");

    const nameLabel = translationModule.translations[ELEMENTS.chooseLanguageMenu.value]["status-name-label"];
    const ageLabel = translationModule.translations[ELEMENTS.chooseLanguageMenu.value]["age-label"];
    const raceLabel = translationModule.translations[ELEMENTS.chooseLanguageMenu.value]["status-race-label"];
    const classLabel = translationModule.translations[ELEMENTS.chooseLanguageMenu.value]["status-class-label"];

    ELEMENTS.statusName.innerHTML = `${nameLabel}: ${statusData.name ?? '-'}`;
    ELEMENTS.statusAge.innerHTML = `${ageLabel}: ${statusData.age > 0 ? statusData.age : '-'}`;
    ELEMENTS.statusRace.innerHTML = `${raceLabel}: ${statusData.race ?? '-'}`;
    ELEMENTS.statusClass.innerHTML = `${classLabel}: ${statusData.class ?? '-'}`;
        
    renderDescriptionElement(statusData.appearanceDescription, ELEMENTS.statusAppearanceDescription);
    renderDescriptionElement(statusData.statusInSociety, ELEMENTS.statusStatusInSociety);
    renderDescriptionElement(statusData.positionInSociety, ELEMENTS.statusPositionInSociety);
    renderDescriptionElement(statusData.affiliationWithOrganizations, ELEMENTS.statusAffiliationWithOrganizations);
    renderListElements(statusData.purposes, ELEMENTS.statusPurposes, "status-purposes-list", "status-purposes-label");

    function processEffects() {
        const effectsLabel = translationModule.translations[ELEMENTS.chooseLanguageMenu.value]["status-effects-label"];
        const effectsNoneLabel = translationModule.translations[ELEMENTS.chooseLanguageMenu.value]["status-effect-none-label"];
        
        statusDataEffects ??= [];

        let effectOptions = statusDataEffects.map(effect => {
            const name = markdown(effect.name);
            const description = markdown(effect.description);
            return `<li>${name}${description}</li>`;
        }).join('');
        if (!effectOptions)
            effectOptions = `<li>${effectsNoneLabel}</li>`;

        ELEMENTS.statusEffects.innerHTML = `
            <p>${effectsLabel}</p>
            <ul>${effectOptions}</ul>
        `;       
    }    
}

function setStatus(statusParams) {
    if (!statusParams?.name)
        return;

    statusData = {};
    statusData.name = statusParams.name;
    statusData.age = Number(statusParams.age ?? 0);
    statusData.race = statusParams.race;
    statusData.class = statusParams.class;
    statusData.appearanceDescription = statusParams.appearanceDescription;
    statusData.statusInSociety = statusParams.statusInSociety;
    statusData.positionInSociety = statusParams.positionInSociety;
    statusData.affiliationWithOrganizations = statusParams.affiliationWithOrganizations;

    if (!statusParams.purposes || !Array.isArray(statusParams.purposes))
        statusData.purposes = [];
    else
        statusData.purposes = statusParams.purposes;
}

function setStatusEffects(statusEffects) {
    if (!statusEffects || !Array.isArray(statusEffects))
        statusDataEffects = [];

    statusDataEffects = statusEffects;
}

//---- CLOSE ACTIONS ----//
//close info window actions
ELEMENTS.locationInfoClose.onclick = function () { ELEMENTS.locationInfo.style.display = 'none'; }
ELEMENTS.npcInfoClose.onclick = function () { ELEMENTS.npcInfo.style.display = 'none'; }
ELEMENTS.skillInfoClose.onclick = function () { ELEMENTS.skillInfo.style.display = 'none'; }
ELEMENTS.inventoryInfoClose.onclick = function () { ELEMENTS.inventoryInfo.style.display = 'none'; }
ELEMENTS.inventoryContainerInfoClose.onclick = function () { ELEMENTS.inventoryContainerInfo.style.display = 'none'; }
ELEMENTS.questInfoClose.onclick = function () { ELEMENTS.questInfo.style.display = 'none'; }
ELEMENTS.imageInfoClose.onclick = function () { ELEMENTS.imageInfo.style.display = 'none'; }

//--------------------------------------------------------------------UTILITY------------------------------------------------------------------//

function confirmAction(message) {
    message ??= translationModule.translations[ELEMENTS.chooseLanguageMenu.value]["confirm_message_label"];
    if (confirm(message))
        return true;

    return false;
}

function removeFloatingImage() {
    ELEMENTS.floatingImg.remove();
}

function toggleElementVisible(id) {
    const element = document.getElementById(id);
    if (element.style.display === 'none')
        element.style.display = 'block';
    else
        element.style.display = 'none';
}

function toggleButtonsVisibility() {
    //We get all elements with the class "tab-button1".
    const buttons = document.querySelectorAll('.tab-button1');

    //We iterate through each element and change its visibility.
    buttons.forEach(button => {
        if (button.style.display === 'none') {
            //If the button is hidden or does not have a display value set, we display it.
            button.style.display = 'block';
            document.querySelector('#button-display-label').style.borderRadius = '10px 0 0 0';
            document.querySelector('#button-display-label').style.padding = '2px 10px';
            document.querySelector('#button-display-label').style.fontSize = '25px';
            document.querySelector('#button-display-label').textContent = '⎗';
        } else {
            //Otherwise, we hide the button.
            button.style.display = 'none';
            document.querySelector('#button-display-label').style.borderRadius = '10px 10px 0 0';
            document.querySelector('#button-display-label').style.padding = '1px 1px';
            document.querySelector('#button-display-label').style.fontSize = '9px';
            document.querySelector('#button-display-label').textContent = '⋀';
        }
    });
}

function playerInfoButtonsExpandToggle() {
    const playerInfoButtonsWrapper = document.getElementById('playerInfoButtonsWrapper');
    const buttonsToToggle = playerInfoButtonsWrapper.querySelectorAll('.buttonInfo:not(#buttonInfoExpandToggler)');

    buttonsToToggle.forEach(button => {
        //If the button has a height of 0, we expand it.
        if (button.style.height === '0px' || button.style.height === '') {
            button.style.height = button.scrollHeight + 'px'; //We set the height to match the content.
            button.style.opacity = 1; //We make the button visible.
            button.style.cursor = 'pointer';
        } else {
            //Otherwise, we collapse the button.
            button.style.height = '0px';
            button.style.opacity = 0; //We hide the button.
            button.style.cursor = 'auto';
        }
    });
}

function playerInfoDataSwitch(caller, activeDataIds) {
    if (caller.style.height === '0px' || caller.style.height === '')
        return;

    const playerInfoContainer = document.querySelector('.player-info');
    const infoDataWindows = playerInfoContainer.querySelectorAll('.infoData');
    const className = "displayNone";

    for (const data of infoDataWindows) {
        if (activeDataIds.includes(data.id))
            data.classList.remove(className);
        else
            data.classList.add(className);
    }
}

function toggleVisibility(targetBoxIds) {
    const boxIds = ['my-rules-box', 'log-box', 'lag-box', 'settings-box', 'system-instructions-box'];

    boxIds.forEach(id => {
        const box = document.getElementById(id);
        if (targetBoxIds.includes(id)) {
            if (box.dataset.show !== undefined)
                box.style.display = box.dataset.show == "true" ? 'block' : 'none';
            else
                box.style.display = 'block';
        } else {
            box.style.display = 'none';
        }
    });

    ELEMENTS.bottomBox.scrollTop = ELEMENTS.bottomBox.scrollHeight;
}

function toggleLogVisibility() {
    toggleVisibility(['log-box']);
}

function toggleMyRulesVisibility() {
    toggleVisibility(['my-rules-box', 'system-instructions-box']);
}

function toggleSettingsVisibility() {
    toggleVisibility(['settings-box']);
}

function clickClearLag() {
    toggleVisibility(['lag-box']);
}

function toggleRollUpBox() {
    ELEMENTS.bottomBox.style.transition = "height 0.5s";

    if (ELEMENTS.bottomBox.style.height === '0vh') {
        ELEMENTS.bottomBox.style.height = '30vh';
    } else if (ELEMENTS.bottomBox.style.height === '30vh') {
        ELEMENTS.bottomBox.style.height = '60vh';
    } else if (ELEMENTS.bottomBox.style.height === '60vh') {
        ELEMENTS.bottomBox.style.height = '80vh';
    } else if (ELEMENTS.bottomBox.style.height === '80vh') {
        ELEMENTS.bottomBox.style.height = '0vh';
    }
}

function togglePlayerInfoWidth() {
    const playerInfo = document.querySelector('.player-info');
    togglePanelWidth(playerInfo, [33.33, 50, 75]);

    const chatArea = document.querySelector(".chat-area");
    chatArea.style.flex = getChatAreaFlex(playerInfo.style.width);
}

function toggleSettingsWidth() {
    const settingsPanel = document.getElementById('settings-info');
    togglePanelWidth(settingsPanel, [33.33, 50, 75]);
}

function togglePanelWidth(panel, widths) {
    panel.style.transition = "width 0.5s";
    const defaultWidth = `${widths[0]}%`;

    if (!panel.style.width)
        panel.style.width = defaultWidth;

    for (let i = 0; i < widths.length; i++) {
        const width = `${widths[i]}%`;

        if (panel.style.width === width) {
            const nextWidth = i + 1 < widths.length ? `${widths[i + 1]}%` : defaultWidth;
            panel.style.width = nextWidth;
            break;
        }
    }
}

function getChatAreaFlex(playerInfoWidth) {
    if (!playerInfoWidth || playerInfoWidth === '33.33%') {
        return '2';
    } else if (playerInfoWidth === '50%') {
        return '0.98';
    } else if (playerInfoWidth === '75%') {
        return '0.315';
    }
}

function initializeDraggableObject(draggableObject) {
    const moveButton = draggableObject.querySelector(".moveButton");

    let isDragging = false;
    let offsetX, offsetY;

    function moveDraggableObject(e) {
        let clientX, clientY;

        if (e.type.startsWith('touch')) {
            // Touch event
            clientX = e.touches[0].clientX;
            clientY = e.touches[0].clientY;
        } else {
            // Mouse event
            clientX = e.clientX;
            clientY = e.clientY;
        }

        if (isDragging) {
            const left = clientX - offsetX;
            const maxLeft = document.documentElement.clientWidth - draggableObject.offsetWidth;
            if (left >= 0 && left <= maxLeft)
                draggableObject.style.left = left + 'px';

            const top = clientY - offsetY;
            const maxTop = document.documentElement.clientHeight - draggableObject.offsetHeight;
            if (top >= 0 && top <= maxTop)
                draggableObject.style.top = top + 'px';
        }
    }

    function stopDragging() {
        if (!isDragging) return;

        isDragging = false;
        document.removeEventListener('mousemove', moveDraggableObject, true);
        document.removeEventListener('mouseup', stopDragging, true);
        document.removeEventListener('touchmove', moveDraggableObject, true);
        document.removeEventListener('touchend', stopDragging, true);
    }

    function startDragging(e) {
        if (e.type === 'mousedown' && e.button !== 0) return;

        isDragging = true;

        let clientX, clientY;

        if (e.type.startsWith('touch')) {
            clientX = e.touches[0].clientX;
            clientY = e.touches[0].clientY;
        } else {
            clientX = e.clientX;
            clientY = e.clientY;
        }

        offsetX = clientX - draggableObject.offsetLeft;
        offsetY = clientY - draggableObject.offsetTop;

        document.addEventListener('mousemove', moveDraggableObject, true);
        document.addEventListener('mouseup', stopDragging, true);
        document.addEventListener('touchmove', moveDraggableObject, true);
        document.addEventListener('touchend', stopDragging, true);

        e.preventDefault();
    }

    moveButton.addEventListener('mousedown', startDragging, false);
    moveButton.addEventListener('touchstart', startDragging, false);
}

function sanitizeString(str) {
    return str.replace(/<script.*?>.*?<\/script>/gi, "").replace(/```json/g, "").replace(/```/g, "").replace(/by_pass/g, "\n").replace(/<script/g, '').replace(/$/g, '');
}

function sanitizeObject(obj, symbolsToReplace) {
    const sanitized = Array.isArray(obj) ? [] : {};

    for (const key in obj) {
        if (typeof obj[key] === 'string') {
            sanitized[key] = sanitizeString(obj[key]).replace(/\\n/g, '\n');
            if (symbolsToReplace) {
                const regex = new RegExp(`[${symbolsToReplace.join('')}]`, 'g'); //Creating a regular expression from a character array.
                sanitized[key] = sanitized[key].replace(regex, "");
            }
        } else if (typeof obj[key] === 'object' && obj[key] !== null) {
            sanitized[key] = sanitizeObject(obj[key], symbolsToReplace);
        } else {
            sanitized[key] = obj[key];
        }
    }

    return sanitized;
}

function generateRandomNumbers(count, min, max) {
    const numbers = new Set();

    while (numbers.size < count) {
        const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
        numbers.add(randomNumber);
    }

    return Array.from(numbers);
}

function setGameInputsSynch() {
    const onInputApiKeyFunction = function (e) {
        const value = e.target.value;
        ELEMENTS.apiKey.value = value;
        ELEMENTS.apiKey2.value = value;
        ELEMENTS.apiKey3.value = value;
    }
    ELEMENTS.apiKey.addEventListener("input", onInputApiKeyFunction);
    ELEMENTS.apiKey2.addEventListener("input", onInputApiKeyFunction);
    ELEMENTS.apiKey3.addEventListener("input", onInputApiKeyFunction);

    const onInputModelFunction = function (e) {
        const value = e.target.value;
        ELEMENTS.aiModel.value = value;
        ELEMENTS.aiModel2.value = value;
        ELEMENTS.aiModel3.value = value;
    }
    ELEMENTS.aiModel.addEventListener("input", onInputModelFunction);
    ELEMENTS.aiModel2.addEventListener("input", onInputModelFunction);
    ELEMENTS.aiModel3.addEventListener("input", onInputModelFunction);

    const onInputPromptFunction = function (e) {
        const value = e.target.value;
        ELEMENTS.worldDescription.value = value;
        ELEMENTS.myRules.value = value;
    }
    ELEMENTS.worldDescription.addEventListener("input", onInputPromptFunction);
    ELEMENTS.myRules.addEventListener("input", onInputPromptFunction);

    const onInputSystemInstructionsFunction = function (e) {
        const value = e.target.value;
        ELEMENTS.worldSystemInstructions.value = value;
        ELEMENTS.systemInstructions.value = value;
    }
    ELEMENTS.worldSystemInstructions.addEventListener("input", onInputSystemInstructionsFunction);
    ELEMENTS.systemInstructions.addEventListener("input", onInputSystemInstructionsFunction);

    const onChangeTTSFunction = function (e) {
        const checked = e.target.checked;

        ELEMENTS.ttsModeToggleSettings.checked = checked;
        ELEMENTS.ttsModeToggle.checked = checked;
        ELEMENTS.ttsModeToggle2.checked = checked;
    }
    ELEMENTS.ttsModeToggleSettings.addEventListener("change", onChangeTTSFunction);
    ELEMENTS.ttsModeToggle.addEventListener("change", onChangeTTSFunction);
    ELEMENTS.ttsModeToggle2.addEventListener("change", onChangeTTSFunction);
}

function showAPIKeyInput() {
    ELEMENTS.apiKey.style.display = 'block';
    ELEMENTS.apiKey2.style.display = 'block';
    ELEMENTS.apiKey3.style.display = 'block';
    setTimeout(function () {
        ELEMENTS.apiKey.style.display = 'none';
        ELEMENTS.apiKey2.style.display = 'none';
        ELEMENTS.apiKey3.style.display = 'none';
    }, 10000);
}

function checkGameSource() {
    const currentURL = window.location.href;
    isGameStartedFromWebsim = currentURL.includes("websim.ai");

    if (isGameStartedFromWebsim)
        return;

    translationModule.setProviderTooltipForGithubVersion();
    translationModule.updateCurrentLanguage();

    document.getElementById('ai-websim').remove();
    document.getElementById('ai-websim2').remove();
    document.getElementById('ai-websim3').remove();
    document.getElementById('ai-websim-label').remove();
    document.getElementById('ai-websim2-label').remove();
    document.getElementById('ai-websim3-label').remove();
    document.getElementById('ai-websim-br').remove();
    document.getElementById('ai-websim2-br').remove();
    document.getElementById('ai-websim3-br').remove();
}

async function generateBackgroundImage(prompt) {
    try {
        const backgroundUrl = getImageUrl(prompt, imageWidth, imageHeight);
        const img = new Image();

        img.onload = () => {
            const backgroundElement = document.querySelector('.player-info');
            backgroundElement.style.backgroundImage = `url("${backgroundUrl}")`;
            console.log('Background image loaded successfully:', backgroundElement);
        };

        img.onerror = () => {
            console.error('Error loading the background image');
        };

        img.src = backgroundUrl;
    } catch (error) {
        console.error('Error generating background image:', error);
    }
}

async function generateImageForComponent(element) {
    try {
        const prompt = ELEMENTS.imageInfoPrompt.value;
        const imageUrl = getImageUrl(prompt, imageComponentWidth, imageComponentHeight);
        const img = new Image();
        img.src = imageUrl;

        const loadingLabel = translationModule.translations[ELEMENTS.chooseLanguageMenu.value]["image-loading-label"];
        ELEMENTS.imageInfoWarning.innerHTML = loadingLabel;
        ELEMENTS.imageInfoImage.style = "display:none";
        img.onload = () => {
            element.imageUrl = imageUrl;
            element.image_prompt = prompt;
            ELEMENTS.imageInfoImage.style = "display:flex";
            ELEMENTS.imageInfoWarning.innerHTML = "";
            ELEMENTS.imageInfoImage.setAttribute("href", imageUrl);
            ELEMENTS.imageInfoThumbnail.src = imageUrl;
            refreshFsLightbox();
        };

        img.onerror = () => {
            ELEMENTS.imageInfoWarning.innerHTML = "Error loading the image";
        };
    } catch (error) {
        ELEMENTS.imageInfoWarning.innerHTML = `Error generating the image: ${error}`;
    }
}

function getImageUrl(prompt, imageWidth, imageHeight) {
    const styleOfImageInput = document.getElementById('style-of-image-input');
    const imageStyle = styleOfImageInput.value ? styleOfImageInput.value : styleOfImage;

    let imagePrompt = "";
    if (styleOfImage) {
        imagePrompt = prompt + `. Style of image: ${imageStyle}`;
    } else {
        imagePrompt = styleOfImageInput.value ? prompt + `. Style of image: ${styleOfImageInput.value}` : prompt;
    }

    const seed = Math.floor(Math.random() * 1000000);

    return "https://image.pollinations.ai/prompt/" + `${imagePrompt}?width=${imageWidth}&height=${imageHeight}&seed=${seed}`;
}

function generateGUID() {
    function s4() {
        const random = Math.floor((1 + Math.random()) * 0x10000);
        return random.toString(16).substring(1);
    }
    return s4() + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4() + s4() + s4();
}

function markdown(text) {
    if (!text || typeof text !== 'string') return "";

    text = text.replace(/^[\u200B\u200C\u200D\u200E\u200F\uFEFF]/, "")
    return marked.parse(text, { breaks: true });
}

function getMaxGmSymbols() {
    return ELEMENTS.maxGmSymbols.value ? Number(ELEMENTS.maxGmSymbols.value) : 10000;
}

function getRandomNumber(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);

    const mathRandomValue = Math.floor(Math.random() * (max - min + 1)) + min;
    const timestamp = Date.now() % (max - min + 1);
    const mixedValue = mathRandomValue ^ timestamp;

    return min + (mixedValue % (max - min + 1));
}

function isNestedItem(item) {
    return item.contentsPath && Array.isArray(item.contentsPath) && item.contentsPath.length > 0;
}

function compareItemsByContainerAsc(itemFirst, itemSecond) {
    if (itemFirst.isContainer && itemSecond.isContainer) return 0;
    if (itemFirst.isContainer && !itemSecond.isContainer) return -1;
    if (!itemFirst.isContainer && itemSecond.isContainer) return 1;
    return 0;
}

//name - item name to find
//contentsPath - the array of strings, which represents the path to item. Fx, if item is stored in container, then it could be something like ['top level container name', 'second level container name', 'parent container name']. If not stored in container, it should be null.
//parentItemsArray - array of items where need to find the item (container inventory)
//parentId - id of parent container
function getItemByNameAndPath(name, contentsPath = null, parentItemsArray = null, parentId = null) {
    parentItemsArray ??= inventory; //find in global inventory as fallback
    if (!Array.isArray(parentItemsArray))
        return null;

    if (contentsPath && !Array.isArray(contentsPath))
        return null;

    if (!contentsPath || contentsPath.length === 0)
        return getItemAndIndex(name, parentItemsArray, parentId);

    const path = contentsPath[0];
    const remainingPath = contentsPath.slice(1);
    const containerData = getItemAndIndex(path, parentItemsArray, parentId);

    if (!containerData?.item || !containerData.item.isContainer)
        return null;

    containerData.item.contents ??= [];

    return getItemByNameAndPath(name, remainingPath, containerData.item.contents, containerData.item.id);

    function getItemAndIndex(name, itemsArray, parentId) {
        const index = itemsArray?.findIndex(item => item.name === name);
        const item = index > -1 ? itemsArray[index] : null;

        return {
            parentId: parentId, //id of parent element: some kind of container where item is stored
            parentItemsArray: itemsArray, //parent element inventory
            index: index, //index of item in parentArray
            item: item, //found item
        };
    }
}

//calculate various parameters for items in the array (weight, contentsItemCount, etc.)
function calculateParametersForItemsArray(itemsArray) {
    for (const item of itemsArray) {
        const params = getCalculatedItemParameters(item);

        item.weight = params.weight;
        if (params.contentsItemCount !== undefined)
            item.contentsItemCount = params.contentsItemCount;
        if (params.contentsVolume !== undefined)
            item.contentsVolume = params.contentsVolume;
    }
}

function getCalculatedItemParameters(item) {
    let weight = item.weight;
    let contentsItemCount = undefined;
    let contentsVolume = undefined;

    if (item.isContainer && Array.isArray(item.contents)) {
        weight = item.containerWeight ?? 0;
        contentsItemCount = item.contents.length;
        contentsVolume = 0;

        for (const nestedItem of item.contents) {
            const params = getCalculatedItemParameters(nestedItem);
            weight += params.weight;

            const nestedItemVolume = nestedItem.volume ?? 0;
            contentsVolume += nestedItemVolume;
        }
    }

    return {
        weight: weight,
        contentsItemCount: contentsItemCount,
        contentsVolume: contentsVolume
    };
}

function describeItemContainerContents(container, depth = 0) {
    if (!container || !container.isContainer || !Array.isArray(container.contents))
        return '';

    let result = '';
    const indent = '  '.repeat(depth);
    const emptyLabel = translationModule.translations[ELEMENTS.chooseLanguageMenu.value]["empty-container-label"];

    for (const item of container.contents) {
        if (item.isContainer) {
            const containerHeader = `${indent}- [${item.name}]\n`;
            const subItems = describeItemContainerContents(item, depth + 1);

            if (!subItems)
                result += containerHeader + `${'  '.repeat(depth + 1)}${emptyLabel}\n`;
            else
                result += containerHeader + subItems;
        } else {
            result += `${indent}- ${item.name}\n`;
        }
    }

    return result;
}

function findItemContainerByContentsArray(itemsArray, targetArray) {
    for (const item of itemsArray) {
        if (item.isContainer && item.contents === targetArray)
            return item;

        if (item.isContainer && Array.isArray(item.contents) && item.contents.length > 0) {
            const found = findItemContainerByContentsArray(item.contents, targetArray);
            if (found)
                return found;
        }
    }

    return null;
}

function updateContentsPathForNestedItems(container) {
    if (!container.isContainer || !Array.isArray(container.contents))
        return;

    for (const nestedItem of container.contents) {
        nestedItem.contentsPath = [...container.contentsPath ?? [], container.name];

        if (nestedItem.isContainer && Array.isArray(nestedItem.contents))
            updateContentsPathForNestedItems(nestedItem);
    }
}

function findAndMoveItem(name, contentsPath, contentsPathOfDestinationContainer, destinationContainerName) {
    const dataItemToMove = getItemByNameAndPath(name, contentsPath);

    if (!dataItemToMove?.item)
        return;

    const currentItem = dataItemToMove.item;
    const originalItemsArray = dataItemToMove.parentItemsArray ?? inventory;

    let destinationItemsArray = inventory;
    if (destinationContainerName) {
        const containerData = getItemByNameAndPath(destinationContainerName, contentsPathOfDestinationContainer);
        if (containerData.item) {
            containerData.item.contents ??= [];
            destinationItemsArray = containerData.item.contents;
        }
    }

    moveItem(currentItem, originalItemsArray, destinationItemsArray, false);
}

function moveItemWithConfirmation(currentItem, originalItemsArray, destinationItemsArray, recalculate) {
    if (!confirmAction())
        return;

    moveItem(currentItem, originalItemsArray, destinationItemsArray, recalculate);
}

function moveItem(currentItem, originalItemsArray, destinationItemsArray, recalculate) {
    if (!currentItem || !Array.isArray(originalItemsArray) || !Array.isArray(destinationItemsArray))
        return;

    const removeIndex = originalItemsArray.findIndex(item => currentItem.id === item.id);
    if (removeIndex < 0)
        return;

    originalItemsArray.splice(removeIndex, 1);
    destinationItemsArray.push(currentItem);

    if (recalculate) {
        let destinationContainer = null;
        if (inventory !== destinationItemsArray)
            destinationContainer = findItemContainerByContentsArray(inventory, destinationItemsArray);

        currentItem.contentsPath = null;
        if (destinationContainer)
            currentItem.contentsPath = [...destinationContainer.contentsPath ?? [], destinationContainer.name];           

        updateContentsPathForNestedItems(currentItem);
        calculateParametersForItemsArray(inventory);
        adjustInventoryContainerCapacity(inventory);
        adjustInventoryContainerVolume(inventory);
        calculateParametersForItemsArray(inventory);
    }

    updateInventoryInfoWindows(currentItem, originalItemsArray, destinationItemsArray);
}

function findAndDeleteItem(name, contentsPath) {
    const data = getItemByNameAndPath(name, contentsPath);

    if (!data?.item)
        return;

    deleteItem(data.item, data.parentItemsArray, false);
}

function deleteItemWithConfirmation(currentItem, itemsArray, recalculate) {
    if (!confirmAction())
        return;

    deleteItem(currentItem, itemsArray, recalculate);
}

function deleteItem(currentItem, itemsArray, recalculate) {
    if (!currentItem || !itemsArray)
        return;

    const removeIndex = itemsArray.findIndex(item => currentItem.id === item.id);
    if (removeIndex > -1)
        itemsArray.splice(removeIndex, 1);

    if (recalculate && isNestedItem(currentItem))
        calculateParametersForItemsArray(inventory);    

    updateInventoryInfoWindows(currentItem, itemsArray, itemsArray);
}

function getHtmlListItems(element)
{
    const parsedData = markdown(element);
    return `<li>${parsedData}</li>`;
}

function renderListElements(dataArray, listContainer, listId, spanId) {
    if (!dataArray || dataArray.length < 1) {
        listContainer.innerHTML = '';
        return;
    }

    const listData = dataArray.map(getHtmlListItems).join('');
    const label = translationModule.translations[ELEMENTS.chooseLanguageMenu.value][spanId];

    listContainer.innerHTML = `
		    <span id="${spanId}">${label}:</span>
		    <ul id="${listId}">
			    ${listData}
		    </ul>
	    `;
}

function renderDescriptionElement(description, descriptionElement) {
    if (!descriptionElement)
        return;

    const displayNoneClass = "displayNone";
    const elementContainer = descriptionElement.closest("div");
    if (description) {
        elementContainer.classList.remove(displayNoneClass);
        descriptionElement.innerHTML = markdown(description);
    } else {
        elementContainer.classList.add(displayNoneClass);
    }
}

//----------------------------------------------------------------SAVE/LOAD ACTIONS-----------------------------------------------------------------------//

function clickSaveGame() {
    let fileName = prompt("Enter the file name:", `${CHARACTER_INFO.name} ${CHARACTER_INFO.campaign} ${characterStats.level}lvl ${characterStats.money}money`);
    if (!fileName)
        return;

    let blob = new Blob(
        [getDataForSave()],
        { type: "application/json; charset=" + document.characterSet }
    );
    saveAs(blob, fileName + ".json");
}

function clickLoadGame() {
    let input = document.createElement('input');
    input.type = 'file';
    input.onchange = function (e) {
        let file = e.target.files[0];
        let reader = new FileReader();

        reader.onload = function (e) {
            loadGameInternal(e.target.result);
        };

        reader.onerror = function (error) {
            console.error("Error reading file:", error);
        };

        reader.readAsText(file);
    };
    input.click();
}

//auto save
function autoSave() {
    if (CHARACTER_INFO.name !== "") {
        localStorage.setItem("playerDataSavedNew", getDataForSave());
    } else {
        console.log('No saves in menu');
    }
}

//load auto save
ELEMENTS.loadCharacterButton.onclick = function () {
    const playerDataSave = localStorage.getItem("playerDataSavedNew");
    loadGameInternal(playerDataSave);
};

function getDataForSave() {
    const myRules = ELEMENTS.myRules.value ? ELEMENTS.myRules.value : '';
    const systemInstructions = ELEMENTS.systemInstructions.value ? ELEMENTS.systemInstructions.value : '';

    return JSON.stringify({ CHARACTER_INFO, characterStats, inventory, visitedLocations, myRules, systemInstructions, encounteredNPCs, statusData, statusDataEffects, passiveSkills, activeSkills, npcJournals, npcMemoryDiaries, quests, turn }, null, "\t");
}

function loadGameInternal(savedData) {
    try {
        let loadedCharacterInfo = sanitizeObject(JSON.parse(savedData));

        if (!loadedCharacterInfo.CHARACTER_INFO) {
            throw new Error("Invalid saved data: CHARACTER_INFO not found");
        }

        const propertiesCharInfo = [
            'name', 'gender', 'race',
            'classOfCharacter', 'rpgMode', 'ttsMode', 'campaign', 'nonMagicMode', 'classDescription', 'raceDescription', 'characterDescription'
        ];

        propertiesCharInfo.forEach(prop => {
            if (loadedCharacterInfo.CHARACTER_INFO.hasOwnProperty(prop)) {
                CHARACTER_INFO[prop] = loadedCharacterInfo.CHARACTER_INFO[prop];
            } else {
                console.warn(`Property ${prop} not found in loaded data`);
            }
        });

        inventory = loadedCharacterInfo.inventory;
        characterStats = loadedCharacterInfo.characterStats;
        visitedLocations = loadedCharacterInfo.visitedLocations;
        encounteredNPCs = loadedCharacterInfo.encounteredNPCs;
        statusData = loadedCharacterInfo.statusData;
        statusDataEffects = loadedCharacterInfo.statusDataEffects;
        passiveSkills = loadedCharacterInfo.passiveSkills;
        activeSkills = loadedCharacterInfo.activeSkills;
        npcJournals = loadedCharacterInfo.npcJournals;
        npcMemoryDiaries = loadedCharacterInfo.npcMemoryDiaries;
        quests = loadedCharacterInfo.quests;
        turn = loadedCharacterInfo.turn;
        ELEMENTS.myRules.value = loadedCharacterInfo.myRules ? loadedCharacterInfo.myRules : '';
        ELEMENTS.systemInstructions.value = loadedCharacterInfo.systemInstructions ? loadedCharacterInfo.systemInstructions : '';
        ELEMENTS.ttsModeToggleSettings.checked = loadedCharacterInfo.CHARACTER_INFO.ttsMode;

        console.log("Game loaded successfully");
    } catch (error) {
        console.error("Error loading game:", error);
    }

    updateElements();
    updateStatsWithoutGm();

    ELEMENTS.modal.style.display = "none";
    lastUserMessage = `${translationModule.translations[ELEMENTS.chooseLanguageMenu.value]["message_after_load"]}`;
    sendRequest(lastUserMessage);
}

//save your own rules
function saveMyRules() {
    const myRules = ELEMENTS.myRules.value ? ELEMENTS.myRules.value : '';

    const fileName = prompt("Enter the file name:", "my_rules");
    if (!fileName)
        return;

    let blob = new Blob([myRules], { type: "text/plain" });
    saveAs(blob, fileName + ".txt");
}

//load your own rules
function loadMyRules() {
    const input = document.createElement('input');
    input.type = 'file';
    input.onchange = function (e) {
        let file = e.target.files[0];
        let reader = new FileReader();
        reader.readAsText(file);
        reader.onload = function (e) {
            ELEMENTS.myRules.value = sanitizeString(e.target.result);
            ELEMENTS.worldDescription.value = ELEMENTS.myRules.value;
        }
    }
    input.click();
}

function saveSystemInstructions() {
    const fileName = prompt("Enter the file name:", "my_system_instructions");
    if (!fileName)
        return;

    let blob = new Blob([ELEMENTS.systemInstructions.value], { type: "text/plain" });
    saveAs(blob, fileName + ".txt");
}

function loadSystemInstructions() {
    const input = document.createElement('input');
    input.type = 'file';
    input.onchange = function (e) {
        let file = e.target.files[0];
        let reader = new FileReader();
        reader.readAsText(file);
        reader.onload = function (e) {
            ELEMENTS.systemInstructions.value = sanitizeString(e.target.result);
            ELEMENTS.worldSystemInstructions.value = ELEMENTS.systemInstructions.value;
        }
    }
    input.click();
}

function clickSaveSetting() {
    const fileName = prompt("Enter the file name:", "my_setting");
    if (!fileName)
        return;

    let data = {};
    const fields = [
        { id: "world-description", key: "worldDescription" },
        { id: "world-system-instructions", key: "systemInstructions" },
        { id: "character-name-my-game", key: "name" },
        { id: "character-description", key: "description" },
        { id: "character-gender2", key: "gender" },
        { id: "character-race2", key: "race" },
        { id: "character-race-description", key: "raceDescription" },
        { id: "character-class2", key: "characterClass" },
        { id: "character-class-description", key: "classDescription" },
        { id: "character-prehistory", key: "prehistory" },
        { id: "character-starting-inventory", key: "startingInventory" },
        { id: "start-location", key: "startLocation" },
        { id: "start-location-description", key: "startLocationDescription" },
        { id: "start-str", key: "startStr" },
        { id: "start-dex", key: "startDex" },
        { id: "start-con", key: "startCon" },
        { id: "start-intl", key: "startIntl" },
        { id: "start-wis", key: "startWis" },
        { id: "start-atr", key: "startAtr" },
        { id: "start-trd", key: "startTrd" },
        { id: "start-prs", key: "startPrs" },
        { id: "start-per", key: "startPer" },
        { id: "start-luck", key: "startLuck" },
        { id: "start-spd", key: "startSpd" },
        { id: "start-money", key: "startMoney" },
        { id: "start-exp", key: "startExp" }
    ];

    fields.forEach(field => {
        data[field.key] = document.getElementById(field.id).value;
    });

    const checkboxes = [
        { id: "non-magic-mode", key: "nonMagicMode" },
        { id: "rpg-mode2", key: "rpgMode" },
        { id: "tts-mode2", key: "ttsMode" }
    ];

    checkboxes.forEach(box => {
        data[box.key] = document.getElementById(box.id).checked;
    });

    let blob = new Blob([JSON.stringify(data, null, "\t")], {
        type: "application/json; charset=" + document.characterSet
    });

    saveAs(blob, fileName + ".json");
}

function clickLoadSetting() {
    const input = document.createElement('input');
    input.type = 'file';
    input.onchange = function (e) {
        let file = e.target.files[0];
        let reader = new FileReader();

        reader.onload = function (e) {
            try {
                let loadedSettings = sanitizeObject(JSON.parse(e.target.result));
                const fields = [
                    { id: "world-description", key: "worldDescription" },
                    { id: "world-system-instructions", key: "systemInstructions" },
                    { id: "character-name-my-game", key: "name" },
                    { id: "character-description", key: "description" },
                    { id: "character-gender2", key: "gender" },
                    { id: "character-race2", key: "race" },
                    { id: "character-race-description", key: "raceDescription" },
                    { id: "character-class2", key: "characterClass" },
                    { id: "character-class-description", key: "classDescription" },
                    { id: "character-prehistory", key: "prehistory" },
                    { id: "character-starting-inventory", key: "startingInventory" },
                    { id: "start-location", key: "startLocation" },
                    { id: "start-location-description", key: "startLocationDescription" },
                    { id: "start-str", key: "startStr" },
                    { id: "start-dex", key: "startDex" },
                    { id: "start-con", key: "startCon" },
                    { id: "start-intl", key: "startIntl" },
                    { id: "start-wis", key: "startWis" },
                    { id: "start-atr", key: "startAtr" },
                    { id: "start-trd", key: "startTrd" },
                    { id: "start-prs", key: "startPrs" },
                    { id: "start-per", key: "startPer" },
                    { id: "start-luck", key: "startLuck" },
                    { id: "start-spd", key: "startSpd" },
                    { id: "start-money", key: "startMoney" },
                    { id: "start-exp", key: "startExp" }
                ];

                fields.forEach(field => {
                    document.getElementById(field.id).value = loadedSettings[field.key] || '';
                });

                const checkboxes = [
                    { id: "non-magic-mode", key: "nonMagicMode" },
                    { id: "rpg-mode2", key: "rpgMode" },
                    { id: "tts-mode2", key: "ttsMode" }
                ];

                checkboxes.forEach(box => {
                    document.getElementById(box.id).checked = Boolean(loadedSettings[box.key]);
                });

                ELEMENTS.myRules.value = ELEMENTS.worldDescription.value;
                ELEMENTS.systemInstructions.value = ELEMENTS.worldSystemInstructions.value;

                console.log("Setting loaded successfully");
            } catch (error) {
                console.error("Error loading game:", error);
            }
        };
        reader.onerror = function (error) {
            console.error("Error reading file:", error);
        };
        reader.readAsText(file);
    };
    input.click();
}

//----------------------------------------------------------------API------------------------------------------------------------------------------/
async function sendRequest(currentMessage) {
    if (currentMessage) {
        if (turn !== 0) {
            sendMessageToChat(currentMessage, 'user');
            ELEMENTS.userInput.value = '';
        } else {
            ++turn;
        }

        //General
        const myPrompt = ELEMENTS.myRules.value;
        const randomNumbersList = generateRandomNumbers(2, 1, 1000000);
        const totalWeight = calculateTotalInventoryWeight();
        const strengthPlusConstitution = characterStats.strength + characterStats.constitution;

        //NPC
        const npcTemplate = `{
            'name': 'full_name_of_current_NPC',
            'rarity': 'NPC_rarity',
            'age': 'NPC_age',
            'worldview': 'NPC_worldview (D&D like)',
            'race': 'NPC_race',
            'class': 'NPC_class',
            'appearanceDescription': 'NPC_detailed_description_of_appearance',
            'history': 'NPC_history',
            'stats': ['NPC_stats'],
            'skills': ['NPC_skills'],
            'effects': ['NPC_effects'],
            'attitude': 'attitude_towards_the_player',
            'image_prompt': 'prompt_to_generate_NPC_image'
        }`;

        //Status
        const generateStatus = ELEMENTS.useStatus.checked && !statusData?.name;
        //Remove 'purposes' from status, because GM should not see it.
        const statusDataForContext = JSON.parse(JSON.stringify(statusData));
        delete statusDataForContext.purposes;

        const statusTemplate = `{
            'name': 'name_of_player_character',
            'age': 'age_of_player_character',
            'race': 'race_of_player_character',
            'class': 'class_of_player_character',
            'appearanceDescription': 'appearance_description_of_player_character',
            'statusInSociety': 'status_in_society_of_player_character',
            'positionInSociety': 'position_in_society_of_player_character',
            'affiliationWithOrganizations': 'affiliation_to_various_organizations_or_groups_of_player_character',
            'purposes': 'possible_purposes_for_player_character'
        }`;

        //Quests
        const activeQuests = [...quests?.filter(quest => !quest.isCompleted) ?? []];
        const completedQuests = [...quests?.filter(quest => quest.isCompleted) ?? []];

        //Skills
        const passiveSkillsCount = passiveSkills?.length ?? 0;
        const skillsToGenerate = characterStats.level - passiveSkillsCount;
        const generatePassiveSkills = skillsToGenerate > 0;
        const passiveSkillsTemplate = `{'group': 'category_of_passive_skill', 'name': 'full_name_of_passive_skill', 'skillDescription': 'detailed_skill_description', 'type': 'type_of_passive_skill', 'playerStatBonus': 'bonus_to_player_stat_from_skill', 'effectDescription': 'passive_skill_effect_description'}`;
        const activeSkillsTemplate = `{'group': 'category_of_active_skill_or_spell', 'name': 'full_name_of_active_skill_or_spell', 'energyCost': 'energy_consumption_for_use (numeric value)', 'skillDescription': 'detailed_skill_description'}`;
        const skillsDescriptionTemplate = `
				Skill rarity in the format: "{Rarity label}: {Skill rarity value described as text}"\n\n
				Detailed description of skill \n\n
			`;

        //Inventory
        const inventoryTemplate = `{'name': 'full_name_of_item', 'count': 'count_of_this_item', 'quality': 'item_quality', 'price': 'price_of_item_for_sold', 'description': 'item_description', 'bonuses': ['array_of_item_bonuses'], 'durability': 'durability_of_the_item_in_percents', 'resource': 'count_of_consumable_items_or_charges_inside_item', 'customProperty': 'custom_property_for_player_data', 'image_prompt': 'prompt_to_generate_item_image', 'isContainer': 'shows_if_item_is_container_to_store_items', 'capacity': 'capacity_of_container', 'contentsPath': ['path_to_item_inside_container'], 'weight': 'weight_of_item', 'volume': 'volume_of_item', 'containerWeight': 'weight_of_container_without_items' }`;
        const itemsQualityList = [
            translationModule.translations[ELEMENTS.chooseLanguageMenu.value]["quality_trash"],
            translationModule.translations[ELEMENTS.chooseLanguageMenu.value]["quality_common"],
            translationModule.translations[ELEMENTS.chooseLanguageMenu.value]["quality_good"],
            translationModule.translations[ELEMENTS.chooseLanguageMenu.value]["quality_rare"],
            translationModule.translations[ELEMENTS.chooseLanguageMenu.value]["quality_epic"],
            translationModule.translations[ELEMENTS.chooseLanguageMenu.value]["quality_legendary"],
            translationModule.translations[ELEMENTS.chooseLanguageMenu.value]["quality_unique"]
        ];
        const itemsBreakRulesTemplate = `When an item experiences some kind of force interaction (such as being hit by a weapon, but not only), its 'durability' decreases. Items have different 'durability' depending on their 'quality':
${translationModule.translations[ELEMENTS.chooseLanguageMenu.value]["quality_trash"]} - extremely easy to break even from the slightest interaction.
${translationModule.translations[ELEMENTS.chooseLanguageMenu.value]["quality_common"]} - harder to break, but still quite fragile.
${translationModule.translations[ELEMENTS.chooseLanguageMenu.value]["quality_good"]} - you'll have to try hard to break such an item.
${translationModule.translations[ELEMENTS.chooseLanguageMenu.value]["quality_rare"]} - these items are even harder to break. They rarely break because they have unusual properties.
${translationModule.translations[ELEMENTS.chooseLanguageMenu.value]["quality_epic"]} - such items are almost impossible to break.
${translationModule.translations[ELEMENTS.chooseLanguageMenu.value]["quality_legendary"]} - never break.
${translationModule.translations[ELEMENTS.chooseLanguageMenu.value]["quality_unique"]} - never break.`;

        //Stats training
        const statsList = JSON.stringify(getStatsList());
        const statsAvailableForIncrease = getStatsAvailableForIncrease();
        const statChangeValue = getRandomNumber(0, 3);

        //Dice (3d20)
        const gmDice = getRandomNumber(1, 20) + getRandomNumber(1, 20) + getRandomNumber(1, 20);
        const playerDice = getRandomNumber(1, 20) + getRandomNumber(1, 20) + getRandomNumber(1, 20);
        const playerCritDice = getRandomNumber(1, 20);

        //Response template
        let responseTemplate = `{ 
            "inventoryItemsData": [] ,
            "removeInventoryItems": [] ,
            "moveInventoryItems": [] ,
            "locationData": { "name": "" , "difficulty": "" , "lastEventsDescription": "", "description": "", "image_prompt": "" } ,
            "multipliers": [] ,
            "response": "" ,
            "moneyChange": ,
            "currentEnergyChange": ,
            "currentHealthChange": ,
            "experienceGained": ,
            "actions": [] ,
            "image_prompt": "" ,
            "items_and_stat_calculations": [] ,
            "newPassiveSkills": [] ,
            "newActiveSkills": [] ,
            "removePassiveSkills": [] ,
            "removeActiveSkills": [] ,
            "statsIncreased": [] ,
            "statsDecreased": []`;
        if (ELEMENTS.useStatus.checked)
            responseTemplate += ` , \n "statusData": {} , \n "statusDataEffects": []`;
        if (ELEMENTS.useNpcList.checked) {
            responseTemplate += ` , \n "NPCsData": [] , \n "NPCsRenameData": []`;
            if (ELEMENTS.useNpcJournal.checked) {
                responseTemplate += ` , \n "NPCJournals": []`;
                if (ELEMENTS.useNpcMemoriesDiary.checked)
                    responseTemplate += ` , \n "NPCMemories": []`;
            }
        }
        if (ELEMENTS.useQuestsList.checked)
            responseTemplate += ` , \n "questsData": []`;
        responseTemplate += ' }';

        //------- Prompt -------//

        const prompt = `[ First, study the entire instruction and context thoroughly. Remember all the information you've learned. Then follow the instruction step by step from the beginning. 

### Instruction ###

Please, Let's think step by step:
[
#0 Carefully study and remember the super instructions, which are more priority in case of contradictions than other parts of the instructions: [ ${myPrompt} ].

#1 Prepare a response template in JSON format and remember its structure. Any value of any key in the JSON response must start only with the single symbol " and end with the single symbol " .  Any value of any key in the JSON response must not start with the single symbol « and must not end with the single symbol » . Important note: as the response is formed, only the values of the keys in the response template should be supplemented, without replacing them or changing their value types. The final answer should be presented entirely in JSON format. All keys and string values in the final answer must be enclosed in double quotes. Response template: ${responseTemplate} . This is not information about the current state of the game - it is just a template structure for the correct formatting of the your entire answer structure.
#1.1. To the "items_and_stat_calculations" include array of strings, each of which represents one complete message about various calculations for logs. Fill it only when you see the direct instruction to output something into "items_and_stat_calculations".
#1.1.1. Group messages for "items_and_stat_calculations" logically. Try not form many small messages. Instead, write one large message for it. 

#2 ${turn == 1 ? `This is the start of a new game. [ Starting message from player: [ ${currentMessage} ]. Let's think step by step : [ 
#2.1. Briefly tell about the character (without inventing their personality and goals) and their backstory.
#2.2. The player starts their journey in a location associated with their race, class, and campaign.
#2.3. Describe where the character is.
#2.4. Each item in the character's inventory is examined and the item properties are generated according to the rules described in the block related with 'inventoryItemsData' value of key.
#2.5. If the character has an item containing spells, examine this item for spells.
#2.6. The character already has a '${translationModule.translations[ELEMENTS.chooseLanguageMenu.value]["item_notepad"]}' in their inventory, update its properties according to rules.
#2.7. Be sure to add the location where the character is to the list of locations. 
#2.8. Carefully check all passive skills of character. If the player asks you to add any skills to the character's passive skills, do so immediately.
#2.8.1 Record in the value of newPassiveSkills key the detailed information about character passive skills (additionally add one generated passive skill of the race or class) according to the instruction : [ Let's think step by step : [
#2.8.2. Value of the newPassiveSkills key is an array of objects, and each object represents information about skill. Mandatory format for recording value in the object : ${passiveSkillsTemplate} .
#2.8.3. To the value of 'skillDescription' key you need to include the following data about the skill and describe the data in as much detail and artistic language as possible (each value should be separated from previous by a blank line and translated to user's chosen language): [ ${skillsDescriptionTemplate} ]
#2.8.4. Objects of newPassiveSkills array should not contain nested arrays or objects. 
#2.8.5. Each passive skill must be one of the following types: [
#2.8.6. Knowledge-based: Represents a broad area of expertise, enabling creation of related active skills. Examples: "Fire Magic Knowledge", "Knife Fighting Mastery". For example, "Fire Magic Knowledge" could lead to active skills like "Fireball" or "Fire Rain". Such passive skills are like a book from which the player draws information to create related active skills.
#2.8.7. Stat-based: Directly enhances one of these player stats: ${statsList}. Example: "Strong Physique" grants +1 to constitution. 
#2.8.8. Improvements-based: Gives the player other important benefits. ]
#2.8.9. To the value of 'type' key, you need to write the type to which the passive skill belongs. It should be one of: [ 'Knowledge-based', 'Stat-based', 'Improvements-based' ] . 
#2.8.10. If the generated passive skill is knowledge-based, then note in the description that player can create new active skills based on this passive skill.
#2.8.11. If the generated passive skill is stat-based, fill the value of key 'playerStatBonus' with a string in corresponding format: "+{stat bonus numeric value} {player stat}". Like "+1 constitution". You should use as stats only these characteristics: ${statsList} . Translate {player stat} label to user's chosen language.
#2.8.12. If the generated passive skill is not stat-based, then: 
[ To the value of 'effectDescription' set string, representing the description of passive skill effect. ], otherwise: [ Do not include 'effectDescription' key to the object ] .
#2.8.13. The value of 'group' key, which represents the category of passive skill, should not be equal to 'type'. It is the name of a group into which a passive skill can be classified based on its description.
#2.8.14. Double quotes cannot be used inside values, as this interferes with parsing your answer into JSON. Use guillemet quotes («») inside JSON values if needed. Use double quotes at the start and at the end of keys and values. ] ]
#2.9. Carefully check all active skills (abilities, spells and similar) of the character. If the player asks you to add any skills to the character's active skills, do so immediately. Also, if the character has no active skills at the beginning of a new game, generate them automatically.
#2.9.1. Record in the value of newActiveSkills key the detailed information about all active skills of the character, according to the instruction :  [ Let's think step by step : [
#2.9.2. Value of the newActiveSkills key is an array of objects, and each object represents information about skill. Mandatory format for recording value in the object : ${activeSkillsTemplate} .
#2.9.3. To the value of 'skillDescription' key you need to include the following data about the skill and describe the data in as much detail and artistic language as possible (each value should be separated from previous by a blank line and translated to user's chosen language): [ ${skillsDescriptionTemplate} ]
#2.9.4. Objects of newActiveSkills array should not contain nested arrays or objects.
#2.9.5. Double quotes cannot be used inside values, as this interferes with parsing your answer into JSON. Use guillemet quotes («») inside JSON values if needed. Use double quotes at the start and at the end of keys and values. 
${CHARACTER_INFO.nonMagicMode ? `
#2.9.6. The active skills should not be related with magic or spell, since in this world the magic is absent. Do not include such magic abilities to the value of 'newActiveSkills' key and do not create the situations where such magic powers are available.
` : ''} ] ]
] ]`: `Carefully study the current user action and remember it: [ ${currentMessage} ] .`} ] ] 

${generatePassiveSkills ? `
#3 Generate passive class or race skills in the amount = ${skillsToGenerate} . The type and strength of passive skills are chosen by the gamemaster and should be associated with the character's class and race. Generated passive skills should not modify the maximum health or energy pool.
#3.1. Include newPassiveSkills key to response. Write generated passive skills as a value of newPassiveSkills key, according to instruction: [ Let's think step by step : [
#3.2. Value of the newPassiveSkills key is an array of objects, and each object represents information about skill. Mandatory format for recording value in the object : ${passiveSkillsTemplate} .
#3.3. To the value of 'skillDescription' key you need to include the following data about the skill and describe the data in as much detail and artistic language as possible (each value should be separated from previous by a blank line and translated to user's chosen language): [ ${skillsDescriptionTemplate} ]
#3.4. Objects of newPassiveSkills array should not contain nested arrays or objects.
#3.5. Each passive skill must be one of the following types: [
#3.5.1. Knowledge-based: Represents a broad area of expertise, enabling creation of related active skills. Examples: "Fire Magic Knowledge", "Knife Fighting Mastery". For example, "Fire Magic Knowledge" could lead to active skills like "Fireball" or "Fire Rain". Such passive skills are like a book from which the player draws information to create related active skills.
#3.5.2. Stat-based: Directly enhances one of these player stats: ${statsList}. Example: "Strong Physique" grants +1 to constitution. 
#3.5.3. Improvements-based: Gives the player other important benefits. ]
#3.6. To the value of 'type' key, you need to write the type to which the passive skill belongs. It should be one of: [ 'Knowledge-based', 'Stat-based', 'Improvements-based' ] . 
#3.7. If the generated passive skill is knowledge-based, then note in the description that player can create new active skills based on this passive skill.
#3.8. If the generated passive skill is stat-based, fill the value of key 'playerStatBonus' with a string in corresponding format: "+{stat bonus numeric value} {player stat}". Like "+1 constitution". You should use as stats only these characteristics: ${statsList} . Translate {player stat} label to user's chosen language.
#3.9. If the generated passive skill is not stat-based, then: 
[ To the value of 'effectDescription' set string, representing the description of passive skill effect. ], otherwise: [ Do not include 'effectDescription' key to the object ] .
#3.10. The value of 'group' key, which represents the category of passive skill, should not be equal to 'type'. It is the name of a group into which a passive skill can be classified based on its description.
#3.11. Double quotes cannot be used inside values, as this interferes with parsing your answer into JSON. Use guillemet quotes («») inside JSON values if needed. Use double quotes at the start and at the end of keys and values.
] ]
` : `
#3 Do not include newPassiveSkills key to response.`}
#3.12. If the character studies, develops or learns new active skills (abilities, spells and similar) this turn, then the response should include the newActiveSkills key according to the instruction: [ Let's think step by step : [
#3.12.1. Value of the newActiveSkills key is an array of objects, and each object represents information about skill. Mandatory format for recording value in the object : ${activeSkillsTemplate} .
#3.12.2. To the value of 'skillDescription' key you need to include the following data about the skill and describe the data in as much detail and artistic language as possible (each value should be separated from previous by a blank line and translated to user's chosen language): [ ${skillsDescriptionTemplate} ]
#3.12.3. Objects of newActiveSkills array should not contain nested arrays or objects.
#3.12.4. Double quotes cannot be used inside values, as this interferes with parsing your answer into JSON. Use guillemet quotes («») inside JSON values if needed. Use double quotes at the start and at the end of keys and values.
${CHARACTER_INFO.nonMagicMode ? `
#3.12.5. The active skills should not be related with magic or spells, since in this world the magic is absent. Do not include such magic abilities to the value of newActiveSkills key and do not create the situations where such magic powers are available.
` : ''} ] ]

#3.13. Rules for removing active and passive player skills.
#3.13.1. Sometimes it is necessary to remove an active or passive skills from a player in accordance with the game plot. This can happen for many reasons:
- Punishment for failing a quest.
- Curse of a powerful NPC.
- Changing player's race or class. 
- Other possible reasons by gamemaster decision.
#3.13.2. Don't taking away the player's skills unless there is a good reason for it. The player loves their skills and does not want them taken away for no reason.
#3.13.3. If you need to remove passive player skill, include to the response the 'removePassiveSkills' key.
#3.13.3.1. The value of 'removePassiveSkills' key is an array of strings, each of which is equal to player's passive skill name. It's mandatory to use passive skill names in exactly same format like in the passive skills known from Context.
#3.13.4. If you need to remove active player skill, include to the response the 'removeActiveSkills' key.
#3.13.4.1. The value of 'removeActiveSkills' key is an array of strings, each of which is equal to player's active skill name. It's mandatory to use active skill names in exactly same format like in the active skills known from Context.

#4  If one of these conditions are true: [
- The player receives an item (receives means: to take in hand, put on wear, or place in pockets, backpack or bag) in current turn.
- For each item in the player's inventory in the current turn, find an item with the same name in the Context. If such an item is found, compare the values of its properties ['bonuses', 'description, 'quality', 'count', 'price', 'durability', 'customProperty', 'resource', 'isContainer', 'capacity', 'weight' ] with the current values. Pay attention to every little thing, every insignificant detail. The rule returns 'true' if at least one difference in the properties is found. If there is no item with the same name in the Context (i.e., the item is new), the rule is not applied to this item and continues checking the rest.
], then strictly follow the instructions: [ Let's think step by step : [ 
#4.1. Include to the response the 'inventoryItemsData' key, the value of which is the array of objects, and each object of the array represents the inventory item information.
#4.2. Mandatory the format for each object of 'inventoryItemsData' array: ${inventoryTemplate} . 
#4.3. Include to 'inventoryItemsData' only new items or items which data were changed. It's important to note, that this array only represents the data about changes and new items, and not the information about all player's inventory.
#4.4. If player receives the new item, then: [
#4.4.1. Here is the original list of item templates available to the player in the current turn: items_list = ${JSON.stringify(loot)}. 
#4.4.2. To assign a new item to the player, the gamemaster extracts the first item (template) from the items_list that has not yet been assigned in the current turn. Use item templates only from the original list of items in order, starting with the very first one in the items_list. It is forbidden to assign to the player any other items whose structure does not correspond to the template from the original list.
#4.4.3. It is necessary to rename the received item from the original list of items (rename thing_[number] using ${translationModule.currentLanguage}) in accordance with the plot. ${CHARACTER_INFO.nonMagicMode ? ' Important: in this world, magic is absent. There can be no magical, mystical, or unrealistic items.)' : ' '}
#4.4.4. Get only 'quality' and 'bonuses' information from the items_list template.
#4.4.5. The quality of the item received must strictly correspond to the item template extracted from the original list. It is forbidden to assign any other quality to the item.
#4.4.6. The number of bonuses must strictly correspond to the number of bonuses on extracted item template from the original list. It is forbidden to assign any other number and type of bonuses to the item. Rename bonus_[number] using ${translationModule.currentLanguage}.
#4.4.7. Based on the pre-calculated types of bonuses for items from the original list (based on the item template from items_list), generate each bonus at the gamemaster's choice and its value. The bonus cannot be an increase in maximum health or maximum energy. Rename 'generate_interesting_effect' with generated interesting effect name using ${translationModule.currentLanguage}. Rename generate_bonus_to_random_stat_from_1_to_[number] with generated bonus text using ${translationModule.currentLanguage}.
#4.4.8. If the new item is a container, then: [
#4.4.8.1. Decide whether the container is empty or not.
#4.4.8.2. If the container is not empty, then: [
#4.4.8.3. Decide how many items will be inside the container.
#4.4.8.4. Sequentially extract the needed count of items (templates) from items_list that has not yet been assigned in the current turn. Use item templates only from the original list of items. It is forbidden to assign to the player any other items whose structure does not correspond to the template from the original list.
#4.4.8.5. It is necessary to rename the received items from the original list of items (rename thing_[number] using ${translationModule.currentLanguage}) in accordance with the plot. ${CHARACTER_INFO.nonMagicMode ? ' Important: in this world, magic is absent. There can be no magical, mystical, or unrealistic items.)' : ' '}
#4.4.8.6. Get only 'quality' and 'bonuses' information from the items_list template.
#4.4.8.7. The quality of the items received must strictly correspond to the item templates extracted from the original list. It is forbidden to assign any other quality to the items.
#4.4.8.8. The number of bonuses must strictly correspond to the number of bonuses on extracted item templates from the original list. It is forbidden to assign any other number and type of bonuses to the items. Rename bonus_[number] using ${translationModule.currentLanguage}.
#4.4.8.9. Based on the pre-calculated types of bonuses for items from the original list (based on the item templates from items_list), generate each bonus at the gamemaster's choice and its value. The bonus cannot be an increase in maximum health or maximum energy. Rename 'generate_interesting_effect' with generated interesting effect name using ${translationModule.currentLanguage}. Rename generate_bonus_to_random_stat_from_1_to_[number] with generated bonus text using ${translationModule.currentLanguage}.
#4.4.8.10. If the available templates in the original list (items_list) are over, then stop extraction of templates and do not generate container items.
] ] 
#4.4.9. Each item from the original list (items_list) can be assigned to the player only once.
#4.4.10. If all items from the original list (items_list) have already been assigned in the current turn, then the player can no longer receive an item in the current turn.
]
#4.5. Set to the 'description' the description about the item in as much detail and artistic language as possible. ${CHARACTER_INFO.nonMagicMode ? 'Important: in this world, magic is absent. There can be no magical, mystical, or unrealistic items.' : ''}
#4.6. Set to the 'quality' one of the selected values: ${JSON.stringify(itemsQualityList)}. If it is the new item, then follow the previous instructions to determinate the item quality.
#4.6.1. If quality of item was changed, then add some additional bonuses to it.
#4.7. To the 'count' set the numeric value, that describes the count of current item.
#4.7.1. If the player receives another identical item, you need to increase the value of 'count' item property.
#4.7.2. If the player has lost the item, then decrease the value of 'count' item property.
#4.8. The value 'bonuses' is an array of strings, each of which represents the inventory item bonus description.
#4.8.1. Each bonus can be: [
- An interesting effect (choose one of the following): [
   • The bonus to skills of the player.
   • New active skill that item gives to player.
   • The interesting and rare capability of item, but without numerical bonus representation' ] . It's forbidden to use another effect types. ${CHARACTER_INFO.nonMagicMode ? '(Important: in this world, magic is absent. There can be no magical, mystical, or unrealistic items. Effects should be as much realistic, as possible' : ''}
- The permanent bonus to one of player stats. You must mandatory add this bonus to specified player stat. It's forbidden use 'random characteristic' as a bonus. It's forbidden to use stats that are not in the list: ${statsList} .
- The bonus to one of player stats, but only for certain situations. The bonus is not permanent and used only if described conditions are met. It's forbidden to use stats that are not in the list: ${statsList} .
]
#4.8.2. It's forbidden to numerically describe damage or defensive properties for a bonus effect. Never do that!
#4.8.3. If the bonus has a numerical value, it must be related to one of the following: [
    - The player's existing stats. It's forbidden to use stats that are not in the list: ${statsList} .
    - Skills of the player ] .
#4.8.4. If it is the new item, then also follow the previous instructions to determinate the item bonuses.
#4.9. To the value of the 'image_prompt' key, include an extensive detailed prompt for generating an image that will illustrate the item based on it description. It is necessary to form it only in English. The number of characters in the value of this key should not exceed 150 characters.
#4.10. To the value of the 'price' key include the approximate price of the current item, which will be used by the game if it is sold.
#4.11. To the value of the 'durability' key include the item durability as a percentage value, where 100% - maximum durability. Durability that equals to 0% means that item is broken and its 'count' must be decreased.
#4.11.1. Use the durability rule to determinate the item durability: [ ${itemsBreakRulesTemplate} ] .
#4.11.2. Based on the item's durability rule, set the value of durability by your choice.
#4.12. To the value of the 'resource' key include string, which represents the count of expendable charges or units contained within an item. It could be ammunition (e.g. bullets inside the gun, or arrows inside the quiver). It could also be the battery charge value, or magic staff mana value, or number of milliliters in a bottle, etc.
#4.12.1. It's important to fill not only the count of resource, but also type of resource in the 'resource' value of key. For example, bullets or arrows.
#4.12.2. Every time the resource count of an item changes (for example, after a gun shot, or after the battery is discharged, or if the player drank water from a bottle, etc.), you need to update the 'resource' value.
#4.12.3. If the item doesn't have any internal resource, then set the 'resource' value to null.
#4.13. The value of 'customProperty' should be filled only if player asks for it. Do not fill it otherwise.
#4.14. To the value of the 'contentsPath' include the array of strings. Each string is a container name inside which the item is located. It is important to use the item names in exactly the same format that you would see in the player's inventory, known from Context.
#4.14.1. For example, if item located in the container2, and container2 is located in container1, then the 'contentsPath' will include these two names, started from top level of container (in the example case, ['container1', 'container2']). Use this rule to set 'contentsPath' for each item.
#4.14.2. If the item is only in the player's inventory and not included in a container, set 'contentsPath' to null.
#4.15. To the value of the 'isContainer' key include boolean value, represents if the item is a container or not.
#4.15.1. A container is any item that can store other items inside it.
#4.15.2. To understand, that item is container, you should mandatory make a check for possibility to open an item. If item could be opened and has a space inside it, than it is a container.
#4.16. If item is container, then use these container rules: [
#4.16.1 Mandatory set 'isContainer' to true.
#4.16.2. The description of an item (container) should not include information about its contents.
Example 1 (incorrect): "This is an emergency first aid kit. Inside are bandages and iodine." The description of this container explicitly states that bandages and iodine are inside. This is an incorrect description.
Example 2 (correct): "This is an emergency first aid kit."
#4.16.3. Include to the 'capacity' value of key the numeric value, representing the number of items the container can hold.
#4.16.4. It's forbidden to add more items to a container than its 'capacity' allows.
#4.17. The 'count' property of container must always be '1'. Each container is unique one. Instead of combining containers, add the new unique one if needed. It's mandatory to follow this rule for containers.
]
#4.17. If 'isContainer' is false, then set the 'capacity' value to null.
#4.18. To the value of 'weight' key include the numeric value, representing the weight of item. Each item has the weight. Unit of weight: kilogram.
#4.18.1. If the item is a container, you need to set additionally 'containerWeight' value of key. This is the weight of container without items inside it.
#4.18.2. An item may weigh significantly less than it should, or weigh nothing at all ('weight' value is equal to "0") if it is an item with the appropriate special properties.
#4.19. To the value of 'volume' key include the numeric value, representing the volume of item. Each item has the volume. Unit of volume: dm³.
#4.20. In the player inventory known from Context, you could see the 'contents' property in the container's properties. It's only for Context and formed automatically, so don't include this property to 'inventoryItemsData'.
#4.21. It's forbidden to use 'inventoryItemsData' array to manipulate the 'contentsPath' of items. Use 'moveInventoryItems' if you need to move item somewhere.
#4.22. Mandatory record information about this event in "items_and_stat_calculations".
${turn == 1 ? `
#4.23. Note that this is the start of the game, and player has some predefined items. Generate the properties of items based on the instructions above.
Be fair and don't give the player obvious starting gear advantages unless the player asks for it.
It's forbidden to add many bonuses to items unless the player specifically describes them. It will be great if you generate bonuses count from 0 to 1 for each item, based on your choice.
If player has containers in their item, then mandatory generate items inside containers. Carefully read the 'description' of containers and generate items inside it based on the description.
Note, than you should mandatory generate all predefined items. If they are too heavy (have a lot of weight), then make them lighter so the character can hold them and not be overloaded.
It's mandatory to use the same names, which predefined items already have. Forbidden to use another item names for predefined items.
` : ''}
#4.24. Double quotes cannot be used inside values, as this interferes with parsing your answer into JSON. Use guillemet quotes («») inside JSON values if needed. Use double quotes at the start and at the end of keys and values.
] ], otherwise, then: [ 
#4.25. Do not include 'inventoryItemsData' key to the response.
]

#5 If any of these conditions are true: [
- Some inventory items were moved from a container in the player's inventory to another place in the player's inventory.
- Some inventory items were moved to a container in the player's inventory from another place in the player's inventory.
], then strictly follow the instructions: [ Let's think step by step : [ 
#5.1. Mandatory include to the response the key 'moveInventoryItems'.
#5.2. The value of 'moveInventoryItems' is an array of object, each of which represents the information about item to move.
#5.3. Mandatory the format for each object of 'moveInventoryItems' array: { 'name': 'item_name_to_move', 'contentsPath': ['path_to_item_inside_containers'], 'contentsPathOfDestinationContainer': ['path_to_destination_container_inside_containers'], 'destinationContainerName': 'container_name_where_item_will_be_moved', 'isContainer': 'shows_whether_the_moved_item_is_container_or_not' } .
#5.3.1. To the value of 'name' key include the item name to move. It's important to use the item name in exactly the same format that you would see in the player's inventory, known from Context.
#5.3.2. To the value of the 'contentsPath' include the array of strings. Each string is a container name inside which the item to move is located. It is important to use the item names in exactly the same format that you would see in the player's inventory, known from Context.
#5.3.2.1. For example, if item located in the container2, and container2 is located in container1, then the 'contentsPath' will include these two names, started from top level of container (in the example case, ['container1', 'container2']).
#5.3.2.2. If the item which is needed to move is not located in the container, then set 'contentsPath' to null.
#5.3.3. To the value of the 'contentsPathOfDestinationContainer' include the array of strings, that describes the contentsPath for destination container. Each string is a container name inside which the destination container is located. It is important to use the item names in exactly the same format that you would see in the player's inventory, known from Context.
#5.3.3.1. For example, if destination container is located in the container2, and container2 is located in container1, then the 'contentsPathOfDestinationContainer' will include these two names, started from top level of container (in the example case, ['container1', 'container2']).
#5.3.3.2. If the destination container is not located in the container, then set 'contentsPathOfDestinationContainer' to null.
#5.3.4. The value of 'destinationContainerName' is a string that contains the name of the container into which the item is directly moved.
#5.3.4.1. If the item is not moved to the container, then set 'destinationContainerName' to null.
#5.3.4.2. It is important to use the same container names as they appear in the player's inventory, known from the Context.
#5.4. To the value of 'isContainer' key include the boolean value, that indicates whether the item being moved is a container or not.
#5.4.1. It's mandatory to set to 'isContainer' the same value, like in the item with same name known from Context. 
#5.5. If container is moved, then include to 'moveInventoryItems' only container, without its contents, because the contents of container will be moved to a new place automatically by game system.
#5.6. The order in which you add items to the 'moveInventoryItems' array is important. It must be logically correct. For example, if the player says to put these items in a container, and then move the container to a new location, you must add the items in exactly that order. This is important for the system to process the result.
#5.7. Mandatory record information about this event in "items_and_stat_calculations".
] ]

#6 If this condition is true: [
- Some inventory items were removed from player inventory (not moved, but removed).
], then strictly follow the instructions: [ Let's think step by step : [ 
#6.1. Mandatory include to the response the key 'removeInventoryItems'.
#6.2. The value of 'removeInventoryItems' is an array of object, each of which represents the information about item to remove.
#6.3. Mandatory the format for each object of 'removeInventoryItems' array: { 'name': 'item_name_to_remove', 'contentsPath': ['path_to_item_inside_container'], 'isContainer': 'shows_whether_the_removed_item_is_container_or_not' } .
#6.3.1. To the value of 'name' key include the item name to remove. It's important to use the item name in exactly the same format that you would see in the player's inventory, known from Context.
#6.3.2. To the value of the 'contentsPath' include the array of strings. Each string is a container name inside which the item to remove is located. It is important to use the item names in exactly the same format that you would see in the player's inventory, known from Context.
#6.3.2.1. For example, if item located in the container2, and container2 is located in container1, then the 'contentsPath' will include these two names, started from top level of container (in the example case, ['container1', 'container2']).
#6.3.2.2. If the item which is needed to remove is not located in the container, then set 'contentsPath' to null.
#6.4. To the value of 'isContainer' key include the boolean value, that indicates whether the item being removed is a container or not.
#6.4.1. It's mandatory to set to 'isContainer' the same value, like in the item with same name known from Context. 
#6.5. If container is removed, then include to 'removeInventoryItems' only container, without its contents, because the contents of container will be removed automatically by game system.
#6.6. Mandatory record information about this event in "items_and_stat_calculations".
] ]

#7 Checking player actions: steps and requirements. [ Let's think step by step: ${CHARACTER_INFO.rpgMode ? `
#7.1. Associate each player action (except for generating items, moving or removing items from the inventory) with one suitable characteristic only from the list: ${statsList} and translate this characteristic into ${translationModule.currentLanguage} .
#7.1.1. When generating an item, moving item or removing item, no skill check is performed.
#7.1.2. When moving from location to location, checks are done rarely.
#7.1.3. On any dialogues not related to trade - the affect of characteristics is secondary. The result of dialogue is mainly related to the content of what the player character said.
#7.1.4. The 'trade' characteristic check is done only when trading about prices for deals.
#7.1.5. The 'attractiveness' characteristic is used to seduce or charm the NPC (for example, to get a discount or important information). Attractiveness reflects the physical beauty of the character. It is important to note that not all NPCs care about physical beauty.
#7.1.6. The 'persuasion' characteristic is used to convince someone using oratory.
${playerCritDice != 20 && playerCritDice != 1 ? `
#7.2. Output to "items_and_stat_calculations" the current value of the dice the player rolled to attempt a critical success. This is the value: ${playerCritDice}. Result - Usual dice roll, which means that we need to make additional check for player action.
#7.3. Do following check for the associated characteristic: [
#7.3.1. Let's describe the StatModificator. StatModificator is a special constant for current turn, related with the associated characteristic. We use this value for subsequent checks for a success or failure of the player's action related with the associated characteristic.
#7.3.1.1. Calculate the StatModificator using the instruction: [
#7.3.1.2. Read the current value of associated characteristic. Let's call it StatValue.
#7.3.1.3. Calculate all values ​​from all item bonuses, all active and passive skill bonuses, and all possible effects affecting associated characteristic of player. Let's call it Bonuses.
#7.3.1.4. Sum the current characteristic value and all associated characteristic bonuses using this formula:
StatValueWithBonuses = StatValue + Bonuses, where
• StatValueWithBonuses - the sum of associated characteristic value and and all bonuses related with this characteristic.
• StatValue - the current value of associated characteristic.
• Bonuses - all bonuses, which affects the associated characteristic of player.
#7.3.1.5. Set the maximum value for the associated characteristic. Let's call it MaximumStatValue = (${characterStats.level} + 5) .
#7.3.1.6. Calculate the StatModificator value using this formula:
StatModificator = min(MaximumStatValue, StatValueWithBonuses), where
• MaximumStatValue - maximum value for the associated characteristic.
• StatValueWithBonuses - the sum of associated characteristic value and and all bonuses related with this characteristic.
]
#7.3.2. Let's describe ActionDifficultModificator - the value that determines the difficulty of the player's action.
#7.3.2.1. Calculate the ActionDifficultModificator using the instruction: [
#7.3.2.2. Let's calculate base ActionDifficult value using this formula:
ActionDifficult = Current location difficulty * (1 + NPC Difficulty + Situation Difficulty + Action Rationality), where
• Action Rationality is a fractional number from 0 to 1 (chosen by the gamemaster depending on the logic of actions, the more logical - the closer to zero).
• Situation Difficulty is a fractional number from 0 to 1 (chosen by the gamemaster depending on the complexity of the situation, the more difficult the circumstances - the closer to one).
• NPC Difficulty is a fractional number from 0 to 1 (chosen by the gamemaster depending on the complexity of the NPC with which the player interacts during the action, the more complex the NPC - the closer to 1).
#7.3.2.3. Be fair in selecting the right fractional numbers. Do not adjust their values to the success of the check deliberately. It's very important for making the game interesting for the player.
#7.3.2.4. Calculate ActionDifficultModificator by normalizing the ActionDifficult using this formula:
ActionDifficultModificator = min(100, ActionDifficult), where
• ActionDifficult - the value that determines the difficulty of the player's action.
• ActionDifficultModificator - normalized value of ActionDifficult.
]
#7.3.3. This is player dice result (3d20). Let's call it PlayerDiceResult = ${playerDice}.
#7.3.4. This is gamemaster dice result (3d20). Let's call it GMDiceResult = ${gmDice}.
#7.3.5. Make final check using this formula:
PlayerDiceResult + StatModificator >= GMDiceResult + ActionDifficultModificator, where
• PlayerDiceResult - result of player dice roll.
• StatModificator - calculated modificator related with associated characteristic of player.
• GMDiceResult - result of gamemaster dice roll.
• ActionDifficultModificator - the value that determines the difficulty of the player's action.
]
#7.3.6. Output to "items_and_stat_calculations" the check calculation and result of check.
#7.3.6.1. For recording in "items_and_stat_calculations", translate the names of characteristics into natural language.
#7.3.7. If the check result is true, then: [
- Output to "items_and_stat_calculations" that player's action was succeeded.
- Note that the player has succeeded in doing what player was trying to do. You should develop the game's plot based on this.
], otherwise: [
- Output to "items_and_stat_calculations" that the player's action failed.
- Note that the player has failed at what player was trying to do. You should develop the game's plot based on this.
]
` : (playerCritDice == 20 ? `
#7.2. Output to "items_and_stat_calculations" the current value of the dice the player rolled to attempt a critical success. This is the value: ${playerCritDice}. Result - Critical Success!
#7.2.1. It means that the player's action is successful automatically and no additional check is required.
#7.2.2. Note that the player has completely succeeded in doing what player was trying to do. You should develop the game's plot based on this.
#7.2.3. Output to "items_and_stat_calculations" that player's action was succeeded.
` : `
#7.2. Output to "items_and_stat_calculations" the current value of the dice the player rolled to attempt a critical success. This is the value: ${playerCritDice}. Result - Critical Failure!
#7.2.1. It means that the player's action is failed automatically and no additional check is required. 
#7.2.2. Note that the player has completely failed at what player was trying to do. You should develop the game's plot based on this.
#7.2.3. Output to "items_and_stat_calculations" that the player's action failed completely.
`)}
#7.4. Before the player receives new items in the inventory, make this check for possibility to receive them: [
#7.4.1. This is the current sum of 'strength' + 'constitution' of player. Let's call it StrengthPlusConstitution = ${strengthPlusConstitution} .
#7.4.2. Calculate all values ​​from all item bonuses, all active and passive skill bonuses, and all possible effects affecting 'constitution' or 'strength' of player. Let's call it Bonuses.
#7.4.3. Calculate MaxWeightValue property using this formula:
MaxWeightValue = (StrengthPlusConstitution + Bonuses) * 3 + 10, where
• StrengthPlusConstitution - the sum of 'strength' and 'constitution' of player.
• Bonuses - all bonuses, which affects the 'strength' or 'constitution' of player.
#7.4.4. This is the current items weight of all items in player's inventory. Let's call it CurrentItemsWeight = ${totalWeight} .
#7.4.5. Sum item weights of all new items, which player trying to receive this turn. Let's call it NewItemsWeight.
#7.4.6. Sum up all bonuses that affect the reduction of items weight. These can be spells, player skills, special properties of items, etc. Let's call it WeightReduction.
#7.4.7. Calculate TotalWeight property using this formula:
TotalWeight = CurrentItemsWeight + NewItemsWeight - WeightReduction, where
• CurrentItemsWeight - the current weight of all items in the inventory for current turn.
• NewItemsWeight - the sum of item weights of all new items, which player trying to receive this turn.
• WeightReduction - all bonuses that affect the reduction of item weights.
#7.4.8. Make the final check using this formula:
MaxWeightValue >= TotalWeight, where
• MaxWeightValue - the maximum allowed value of weight, which player can hold.
• TotalWeight - the total weight of all items, which player will have in the end of this turn.
#7.4.9. If the check result is true:
- Player can receive the items. Add items to the inventory.
If the check result is false:
- The player cannot receive these items because it's too heavy - player is overencumbered by the total weight. Don't add items to the inventory, and mark in the 'response' the reason.
- It's forbidden to include these new items to 'moveInventoryItems', 'removeInventoryItems' or 'inventoryItemsData'. 
#7.4.10. Output to "items_and_stat_calculations" the formula and describe calculation of this check.
]
#7.5. When items are need to be added inside the container item, located in the player's inventory, make this check for possibility to do it: [
#7.5.1. Read the value of 'capacity' property of the container. Let's call it Capacity.
#7.5.2. Calculate ContentsItemCount. To do this: [
#7.5.2.1. Find the container item in the Context. If container item in the Context has 'contentsItemCount' property, then set to ContentsItemCount value of this property.
#7.5.2.2. If property 'contentsItemCount' doesn't exist, then calculate count of items inside the container and set to ContentsItemCount this value.
]
#7.5.3. Calculate total count of items, which player trying to place inside the container. Let's call it NewItemsCount.
#7.5.4. Calculate value of TotalItemsCount using this formula:
TotalItemsCount = ContentsItemCount + NewItemsCount, where
• ContentsItemCount - the count of items inside the container for current turn.
• NewItemsCount - total count of items, which player trying to place inside the container this turn.
#7.5.5. Make the check using this formula:
Capacity >= TotalItemsCount, where
• Capacity - the capacity of container.
• TotalItemsCount - the total count of items which will be placed inside the container in the end of this turn.
#7.5.6. If the check result is true: [
#7.5.6.1. Read the value of 'volume' property of the container. Let's call it Volume.
#7.5.6.2. Calculate ContentsVolume. To do this: [
#7.5.6.2.1. Find the container item in the Context. If container item in the Context has 'contentsVolume' property, then set to ContentsVolume value of this property.
#7.5.6.2.2. If property 'contentsVolume' doesn't exist, then sum total volume of top-level items inside the container and set to ContentsVolume this value.
]
#7.5.6.3. Calculate total volume of items, which player trying to place inside the container. Let's call it NewItemsVolume.
#7.5.6.4. Calculate value of TotalItemsVolume using this formula:
TotalItemsVolume = ContentsVolume + NewItemsVolume, where
• ContentsVolume - the volume of items inside the container for current turn.
• NewItemsVolume - total sum of item volumes, which player trying to place inside the container this turn.
#7.5.6.5. Make the check using this formula:
Volume >= TotalItemsVolume, where
• Volume - the volume of container.
• TotalItemsVolume - the total sum of item volumes which will be placed inside the container in the end of this turn.
#7.5.6.6. If the check result is true:
- Items can be added inside the container.
If the check result is false:
- Don't add new items to the container and mark in the 'response' the reason. 
- It's forbidden to include these new items to 'moveInventoryItems', 'removeInventoryItems' or 'inventoryItemsData'. 
#7.5.6.7. Output to "items_and_stat_calculations" the formula and describe calculation of this check.
]
If the check result is false:
- Don't add new items to the container and mark in the 'response' the reason. 
- It's forbidden to include these new items to 'moveInventoryItems', 'removeInventoryItems' or 'inventoryItemsData'. 
#7.5.7. Make sure that you made both checks: for capacity and volume. Only if both of them returns true as result, you can include these items to 'moveInventoryItems' or 'inventoryItemsData'.
#7.5.8. Output to "items_and_stat_calculations" the formula and describe calculation of this check.
]
` : `
#7.1. It will be good if not everything planned will succeed in checks
#7.2. Determine the difficulty of the roll based on the situation
#7.3. Having preliminarily determined the difficulty of the roll, use d20 + characteristic, output the process of checking the action and the result in "items_and_stat_calculations" .
#7.4. Rely not only on stats, but also on the logic of what's happening
#7.5. The further story is formed depending on the result of the check
#7.6. The 'trade' characteristic check is done only when trading about prices for deals
#7.7. When moving from location to location, checks are not made
#7.8. More free interpretation of events
#7.9. For output in the answer, translate the names of characteristics into natural language
`} ]
		 
#8 During dialogue or interaction with NPCs: 
#8.1. The beginning, process, and end of the dialogue should be built based on the current situation, as well as on the content of the player's words and the quality of the player's logic - only the player's logic is checked for compliance with the laws of formal logic
#8.2. There are no skill checks, except for attempts to bargain for prices and quest rewards
#8.3. NPCs may suspect deception when the player violates formal logic
#8.4. Trust in the character from non-player characters is calculated from the context of the game history, and initially they are neutral
#8.5. Non-player characters may try to deceive the player, especially if their trust in the player is low
#8.6. When selecting prices, the price/quality ratio of the item is very strongly taken into account in relation to the price/quality ratio of other already existing inventory (known from Context).
#8.7. The player buys an item only if they said in the current action that they are buying the item. If they did not talk about buying, then the GM cannot make a decision about the player buying the item.
${ELEMENTS.useNpcList.checked ? `
#8.8. If any of NPCs have a proper name (means, that NPC name explicitly includes the "first name" e.g., "King Arthur", "Elara", "Alan Wake", "Christina", "Guard Captain Roric", "Li"), then select such NPCs and apply the check to each of them: [
#8.8.1. If one of these conditions are true: [
- The NPC encountered in current turn is new, meaning information about them is not present in the Context.
- For each NPC near to player in the current turn, find an NPC with the same name in the Context. If such NPC is found, compare values of their properties ['rarity', 'age', 'worldview', 'race', 'class', 'appearanceDescription', 'history', 'stats', 'skills', 'effects', 'attitude'] with the current values. Pay attention to every little thing, every insignificant detail. The rule returns 'true' if at least one difference in the properties is found. If there is no NPC with the same name in the Context (i.e., the NPC is new), the rule is not applied to this NPC and continues checking the rest.
], then strictly follow the instructions: [ Let's think step by step : [
#8.8.1. Include to the response the 'NPCsData' key, the value of which is the array of objects, and each object of the array represents the NPC information.
#8.8.2. Mandatory format for recording the value of each item of 'NPCsData' array: ${npcTemplate} .
#8.8.3. To the value of the 'image_prompt' key, include a detailed prompt for generating an image that illustrates the NPC's appearance based on their description. It is necessary to form it only in English. The prompt must be written in English and should not exceed 150 characters.
#8.8.4. To the value of the 'name' key, include the full name of the NPC. If the NPC already exists, retrieve the NPC's name from the Context and write it in the exact same format.
#8.8.5. To the value of the 'rarity' key, include a string that represents the rarity of the NPC.
#8.8.6. To the value of the 'age' key, include a number that represents the NPC's age in years.
#8.8.7. To the value of the 'worldview' key, include a string that briefly describes the NPC's worldview. Refer to examples of character worldviews in the D&D system and use the same approach.
#8.8.8. To the value of the 'race' key, include the name of the NPC's race.
#8.8.9. To the value of the 'class' key, include the name of the NPC's class.
#8.8.10. To the value of the 'appearanceDescription' key, include a string that describes the NPC's appearance in exceptional detail, including but not limited to face, body proportions, figure, clothing, posture, and any distinguishing features such as scars, tattoos, or jewelry. Use as much detail and artistic language as possible. Provide a meticulous breakdown of each aspect, ensuring that every notable feature is vividly described.
#8.8.11. To the value of the 'history' key, include a string that describes key moments of the NPC's history. Use as much detail and artistic language as possible.
#8.8.12. To the value of the 'stats' key, include an array of strings, each of which representing information about the NPC's characteristics.
#8.8.13. To the value of the 'skills' key, include an array of strings, each of which representing information about the NPC's skills.
#8.8.14. To the value of the 'effects' key, include an array of strings, each of which representing information about various effects that affect the NPC.
#8.8.15. To the value of the 'attitude' key, include a string that represents the NPC's attitude towards the player character. Use as much detail and artistic language as possible.
#8.8.16. If NPC was killed, mandatory mark it in the value of 'history' key. 
#8.8.17. Carefully look at NPC's clothing. If the NPC changed clothes, dressed or undressed, you should note this in the 'appearanceDescription'.
#8.8.18. Double quotes cannot be used inside values, as this interferes with parsing your answer into JSON. Use guillemet quotes («») inside JSON values if needed. Use double quotes at the start and at the end of keys and values.
] ] ]
#8.9. When forming a response, consider the NPC's skills. If the NPC is going to perform a specific action and possesses skills that can help them in this, the NPC should use those skills to accomplish the task.
#8.10. Consider the NPC's stats when forming a response. An intelligent NPC might devise a clever plan, while a strong NPC might rely on their physical strength, and so on. This is important for the game narrative.

#8.11. Rules for renaming NPCs.
#8.11.1. Sometimes you need to rename NPCs because of the game's plot. If you need to rename the NPC, then: [
#8.11.2. Include to the response the 'NPCsRenameData' key, the value of which is an array of objects, and each object of the array represents the information about NPC to rename.
#8.11.3. Mandatory format for recording the value of each item of 'NPCsRenameData' array: { 'oldName': 'old_NPC_name', 'newName': 'new_NPC_name' } .
#8.11.4. To the value of the 'oldName' key, include old name of NPC. It's mandatory to use name in exactly the same format as in the value of the 'name' property of the NPC, known from Context.
#8.11.5. To the value of the 'newName' key, include new name of NPC. 
]
${ELEMENTS.useNpcJournal.checked ? `
#8.12 Look at all NPCs present in the location where the player character is on current turn. From these NPCs, find those who can see or hear the player character. For each of these NPCs: [
#8.12.1. If the NPC name is present in the list of encountered NPCs (encounteredNPCs), then: [
#8.12.2. Each turn, while the player is interacting with an NPCs, response includes the 'NPCJournals' key with the current NPCs thoughts according to the following instruction: [ Let's think step by step :
#8.12.2.1. The value of 'NPCJournals' key is an array of objects, each of which contains the information about NPC thoughts.
#8.12.2.2. Mandatory format for recording the value of each item of 'NPCJournals' array: {'name': 'full_name_of_current_NPC', 'lastJournalNote': 'last_NPC_thoughts_and_reactions_for_current_turn'} .
#8.12.2.3. To the value of 'name' key, include NPC name. You should find the needed NPC in the list of encountered NPCs and use the name in exactly same format.
#8.12.2.4. Imagine the NPC keeps a personal journal, in which NPC makes personal notes, recording their thoughts in the first person. To the value of 'lastJournalNote' key, include last note of NPC for current turn. This note should include information about NPC thoughts and reactions regarding last events. Describe it in as much detail and artistic language as possible.
#8.12.2.5. The value of 'lastJournalNote' must always start with the current turn number. The current turn number is: "${turn}". Mandatory format for recording the text of note: "#${turn}. {Note text}", where '{' and '}' represents the notation of a variable and should not be used in the note.
#8.12.2.6. The data which you recorded in the 'lastJournalNote' should only be related with current turn. Do not copy the notes for previous turn, instead of it always record to 'lastJournalNote' the new data, related with current turn only. 
#8.12.2.7. Double quotes cannot be used inside values, as this interferes with parsing your answer into JSON. Use guillemet quotes («») inside JSON values if needed. Use double quotes at the start and at the end of keys and values. 
]
${ELEMENTS.useNpcMemoriesDiary.checked ? `
#8.12.3. NPCs react to various events and remember their past. Often, something in the events of the current turn can remind them of the past. When it happens, then follow the instructions: [ Let's think step by step :
#8.12.3.1. Include to the response, the 'NPCMemories' key, the value of which is the array of objects, and each object of the array represents the information about NPC memories.
#8.12.3.2. Mandatory format for recording the value of each item of 'NPCMemories' array: {'name': 'full_name_of_current_NPC', 'lastDiaryNote': 'last_NPC_memories_for_current_turn'} .
#8.12.3.3. To the value of 'name' key, include NPC name. You should find the needed NPC in the list of encountered NPCs and use the name in exactly same format.
#8.12.3.4. Imagine that an NPC has a personal diary in which they writes down even their most intimate memories, as well as the thoughts and feelings associated with them.
#8.12.3.5. To the value of 'lastDiaryNote' key, include last memory note of NPC for current turn. This memory should be related with events for current turn and remember something in NPC's past.
#8.12.3.6. Each memory note should include complete information about part of NPC history, written as personal diary style. Describe it in as much detail and artistic language as possible.
#8.12.3.7. The value of 'lastDiaryNote' must always start with the current turn number. The current turn number is: "${turn}". Mandatory format for recording the text of note: "#${turn}. {Note text}", where '{' and '}' represents the notation of a variable and should not be used in the note.
#8.12.3.8. The data which you recorded in the 'lastDiaryNote' should only be related with current turn. Do not copy the notes for previous turn, instead of it always record to 'lastDiaryNote' the new data, related with current turn only. 
#8.12.3.9. Double quotes cannot be used inside values, as this interferes with parsing your answer into JSON. Use guillemet quotes («») inside JSON values if needed. Use double quotes at the start and at the end of keys and values.
]` : '' }
] ]` : ''}
` : ''}
${ELEMENTS.useQuestsList.checked ? `
#9.10. If an NPC and a player made an agreement, where the player is expected to perform a "quest" (in terms of computer role-playing games) — which involves completing a specific task and receiving a reward upon completion — then: [
#9.10.1. The 'Quests information the player has' is checked for compliance with the current quests information from Context: [
	Compare quests descriptions
	Compare quests rewards
	Compare quests purposes
	Check for any changes in quests details, including completion status ] - if not, then the response includes the questsData key with the information about current quests according to the following instruction: [ Let's think step by step :
#9.10.2. The value of 'questsData' key is an array of objects, each of which contains the complete information about specific quest.
#9.10.3. Mandatory format for recording the value of each item of 'questsData' array: {'name': 'full_name_of_current_quest', 'description': 'quest_description', 'purposes' : ['quest_purposes'], 'reward': 'reward_for_the_quest_completion', 'punishmentForFailingQuest': 'punishment_the_player_will_suffer_for_failing_the_quest', 'details': 'quest_details', 'isCompleted': boolean } .
#9.10.4. To the value of 'description' key, include the following data about the quest and describe the data in as much detail and artistic language as possible (all text of 'description' should be translated to user's chosen language): [
	Quest giver information in the format: "{NPC name which gave the quest to player label}: {NPC Name}"\n
	Quest background in the format: "{Quest background label}: {why the quest giver needs the player to complete this quest}."\n
	Detailed quest description in the format: "{Description label}: {full and detailed quest description}."\n ]
#9.10.5. The value of 'purposes' key is an array of strings, describes what player should do during quest to complete it. Purposes should be logical tasks, each of which must have at least one correct solution.
#9.10.6. To the value of 'reward' key, include the description of reward which player will receive for completing the quest. The reward must be specific. For example, if the reward is money, then indicate a specific amount of money.
#9.10.7. To the value of 'punishmentForFailingQuest' key, include the description of the punishment the player will suffer for failing the quest.
#9.10.8. To the value of 'details' key, include information about quest details and notes. Do not include information contained in the value of 'description' key. This field is only for new quest data: any notes or details about the quest that the player learned during the quest.
#9.10.9. Set the value of 'isCompleted' key to false or true. Set true if quest is completed. A quest is considered complete when the quest-giving NPC acknowledges its completion.
#9.10.10. If the quest is completed, the quest-giving NPC should provide the player with the quest reward. 
#9.10.11. If the player fails the quest, the quest is marked as completed and the player must suffer the punishment described in the value of 'punishmentForFailingQuest' key.
] ] ` : ''}
	 
#10. Player characteristics: reward and punishment.
#10.1. Here is the list of all player characteristics: stats_list = ${statsList} .
#10.2. During the game, a situation may arise where you need to permanently increase or decrease a certain characteristic of the player. This can happen for many reasons. Here is a list of some of them:
- A characteristic may be increased as a reward for a task (quest) completed by the player.
- A characteristic may be decreased due to the player's failure of a task (punishment for a quest failure).
- A characteristic may be increased because the player is blessed by a powerful NPC.
- A characteristic may be decreased because the player is cursed by a powerful NPC.
- A player's characteristic may be decreased due to serious problems with the player character's body. For example, as a result of the loss of limbs or other serious injuries.
- A player's characteristic may be increased as a result of the player training the chosen characteristic. For example, as a result of physical exercises.
#10.3. Here is the maximum amount you can increase or decrease a player's characteristics this turn: stat_change_value = ${statChangeValue} .
#10.3.1. If you want to increase or decrease more than one of the player's characteristics, you can divide the stat_change_value among the characteristics you want to modify. 
#10.3.2. Each time you increase or decrease a characteristic, you subtract 1 from the stat_change_value. When stat_change_value is equal to 0, you can no longer increase or decrease player's characteristics this turn.
#10.3.3. Don't increase or decrease the player's characteristics without the clear reason. There must be a reason for it. If there is no reason, then don't increase or decrease the player's characteristics.
#10.4. Here is the list of player characteristics, that are available to increase: stats_increase_list = ${JSON.stringify(statsAvailableForIncrease)} .
#10.4.1. The 'name' property of each object in the stats_increase_list is the name of characteristic, that you could increase if needed.
#10.4.2. The 'maxValue' property of each object in the stats_increase_list is the maximum value, that you can use to increase the player's characteristic.
#10.4.2.1. If value of 'maxValue' is equal to 0 or less than 0, you can't increase this player's characteristic.
#10.4.3. You can increase only characteristics that are mentioned in the stats_increase_list.
#10.5. If it's needed to increase player's characteristics, then include to the response the key 'statsIncreased': [
#10.5.1. The value of 'statsIncreased' key is an array of objects, each of which represents the information about player's characteristic to increase.
#10.5.2. Mandatory format for recording the value of each item of 'statsIncreased' array: { 'name': 'name_of_characteristic_to_increase', 'value': 'value_by_which_the_characteristic_is_increased' } .
#10.5.3. To the 'name' value of key include the name of player's characteristic to increase. It's important to use the name in exactly the same format like in 'name' property of stats_increase_list. Use only english to write this value.
#10.5.4. To the 'value' value of key include the number to which you decided to increase the player's characteristic.
#10.5.5. Write to the "items_and_stat_calculations" the reason of increasing the player's characteristic. 
]
#10.6. If it's needed to decrease player's characteristics, then include to the response the key 'statsDecreased': [
#10.6.1. You can decrease any characteristic from the stats_list if needed.
#10.6.2. The value of 'statsDecreased' key is an array of objects, each of which represents the information about player's characteristic to decrease.
#10.6.3. Mandatory format for recording the value of each item of 'statsDecreased' array: { 'name': 'name_of_characteristic_to_decrease', 'value': 'value_by_which_the_characteristic_is_decreased' } .
#10.6.4. To the 'name' value of key include the name of player's characteristic to decrease. It's important to use the name in exactly the same format like in the stats_list. Use only english to write this value.
#10.6.5. To the 'value' value of key include the number to which you decided to decrease the player's characteristic.
#10.6.6. Write to the "items_and_stat_calculations" the reason of decreasing the player's characteristic. 
]
#10.7. Training and Teaching the Player’s Character. Rules.
#10.7.1. Each time the player attempts to train, or learn something new, strictly follow these instructions: [ Let’s think step by step: [
#10.7.2. Match the player character’s training or learning to a specific characteristic from this list: ${statsList} .
#10.7.3. If this characteristic is present in the stats_increase_list, then do the following: [
#10.7.3. Perform the characteristic check against the situation’s difficulty, following the rules set forth in "#7 Checking player actions: steps and requirements" . 
#10.7.3.1. Note, that instead of 'Current location difficulty' you should use the current characteristic value ('StatValue') to calculate the difficulty.
#10.7.4. If the check is successful, reward the player by increasing the corresponding characteristic. ]
] ]

#11 The 'location where the character was on the previous turn' is checked for compliance with the current location - if not, then the response includes the locationData key with the current location according to the following instruction: [ Let's think step by step :
#11.1. Mandatory format for recording the value in the locationData key: {'name': 'current_location_name', 'difficulty': 'difficulty_in_numerical_value', 'lastEventsDescription': 'location_last_events_description_for_current_turn', 'description': 'current_location_description', 'image_prompt': 'prompt_to_generate_location_image'} . All this values of keys 'name' , 'difficulty' , 'lastEventsDescription' must never be empty.
#11.2. Double quotes cannot be used inside values, as this interferes with parsing your answer into JSON. Use guillemet quotes («») inside JSON values if needed. Use double quotes at the start and at the end of keys and values.
#11.3. If the character returns to an old existing location, that is, the 'location where the character was on the previous turn' does not correspond to the current location, but the current location is present in the list of all visited locations, then the 'lastEventsDescription' of this current location must be updated. The formatting of location names should correspond to the formatting of other known locations. 
#11.4. If this is a new location, then give a description of it in the 'description' key, using the most detailed and artistic language as possible.
#11.5. If the the current location is not new, then leave the 'description' key as empty.
#11.6. If this is a new location, then to the value of the 'image_prompt' key include an extensive detailed prompt for generating an image, that will illustrate the current location based on its description. It is necessary to form it only in English. The number of characters in the value of this key should not exceed 150 characters.
#11.7. If the the current location is not new, then leave the 'image_prompt' key as empty. ]
#12 Each turn, the information about last event for current turn of the location, where the event of the current turn occurred is briefly recorded to the 'lastEventsDescription' value of key for locationData object. Also briefly record the information about all dialogues with the NPC and character for current turn.
#12.1. The data which you recorded in the 'lastEventsDescription' should only be related with current turn. Do not copy the description of location to 'lastEventsDescription', instead of it always record to 'lastEventsDescription' the new data, related with current turn only.
#12.2. The value of 'lastEventsDescription' must always start with the current turn number. The current turn number is: "${turn}". Mandatory format for recording the text of this value: "#${turn}. {lastEventsDescription text}".

#13 Calculate the change in energy, experience, and health according to the following instruction: [ Let's think step by step :
#13.1. All character actions spend or restore their energy, in an amount logically dependent on the action. The amount of energy changed is entered in the value of the currentEnergyChange key (value type: positive or negative integer)
#13.2. When energy falls, the character begins to receive various debuffs to skill checks and combat for every 10 energy points spent, and if the current energy is less than 20, then the character loses 1 or 2 health each turn
#13.3. All successful player actions give experience to the character, in an amount logically dependent on the scale of success. The amount of experience is entered in the value of the experienceGained key (value type: positive integer)
#13.4. Spending or restoring health is recorded in the value of the currentHealthChange key (value type: positive or negative integer) ]

#14 The value of the actions key is passed an array of proposed actions (should not contain nested arrays or other objects)
#14.1. among the proposed actions, there should not be options for actions that are similar to events that have already recently occurred
#14.2. proposed actions should not be in the value of the response key, but should only be in actions

#15 In the value of the image_prompt key, it is necessary to form in each answer only in English an extensive detailed prompt for generating an image that will illustrate what the main character sees in your given answer, but the number of characters in the value of this key should not exceed 150 characters, while the prompt for generating the illustration should be formulated in such a way that the main character himself is not in the illustration - it should be a description of what he sees

#16 The value of the key 'response' must always be filled. Formulate the final value of the 'response' key. Use all markdown formatting functions except headings. When formulating the final value of the 'response' key, consider that : [ Let's think step by step :
#16.1. This value is a description of plot events and should be designed in an artistic style 
#16.2. Double quotes cannot be used inside values, as this interferes with parsing your answer into JSON. Use guillemet quotes («») inside JSON values if needed. Use double quotes at the start and at the end of keys and values. Any value of 'response' key in the JSON response must not start with the symbol « and must not end with the symbol » .
#16.3. It is forbidden to invent actions or words of the player
#16.4. The message should be formulated in such a way that further in meaning, player action would be required, significantly different from the actions they have already taken in the last few turns
#16.5. The gamemaster should not agree to the proposed deal on behalf of the player
#16.6. The player cannot use spells without appropriate items or knowledge
#16.7. The player cannot spend more money than they currently have. Currently, they have ${characterStats.money} money.
#16.8. The player cannot spend more energy than they currently have. Currently, they have ${characterStats.currentEnergy} energy. The player cannot spend more than 2 energy per turn if the spending is not due to the use of an ability or spell.
#16.9. All player actions leading to negative energy or money values should be interrupted. 
#16.10. The player cannot use items that they do not have in their inventory or that are not in the current location
#16.11. The character should not say what the player did not indicate to say
#16.12. Spending or adding money is recorded in the value of the moneyChange key only specifically from money (value type: positive or negative integer)
#16.13. It is not allowed to add or subtract in moneyChange, currentHealthChange and currentEnergyChange if this has already been done for the same event
#16.14. The value of the response key should significantly develop the events of the general plot. The event from the previous turn should be completed.
#16.15. The maximum number of characters in the 'response' value: maximum ${getMaxGmSymbols()} characters
#16.16. This answer should be a logical consequence of the current player action, which is their last prompt: ${currentMessage} and should be absolutely different compared to events from previous turns and recent events from the history of previous communication between you (GM) and the player
#16.17. Each turn should have a new event that has not yet been in the history of previous communication between you (GM) and the player, even if the player's request is repeated.
#16.18. Each new event should not only be a logical continuation of the last previous turns of previous actions, but also radically differ from those previously described. Make sure that each plot development offers a new interaction or unpredictable turn, which is a plot consequence of the last turns from the history of communication between the GM and the player.
#16.19. With each new turn, consider that new roles, locations, or items may be present in the game. Include unexpected elements to create plot variety.
#16.20. The plot should not go back and repeat itself. It is not allowed to forget events that occurred in the most recent turns.
#16.21. Seek inspiration from various genres and storytelling styles. Let each new event be unexpected and even extraordinary in the context of the current plot.
#16.22. When describing a new event, offer the player several alternative ways of responding or interacting with the surrounding world to stimulate diversity in plot development.
#16.23. If the player's action is repetitive, each new answer should present not only a different event, but its context should also be new, thereby overcoming the pattern.
#16.24. When forming the answer, consider all the passive skills of the character. 
#16.25. Be sure to consider the result of checking the action for skill and formulate the answer in such a way that the result of the check finally affects the current plot event and ends the current event depending on the result of the check.
#16.26. ${CHARACTER_INFO.nonMagicMode ? 'Important! Consider that in this world magic is absent.' : ' '}
#16.27. The value of key 'response' must never be empty.
]

#17 Create an array of five elements using the following format:
#17.1. On equipped items, count the total number of bonuses associated with item searches.
#17.2. At the gamemaster's discretion, based on the total number of bonuses calculated in the previous step, assign a value between 0 and 1 (inclusive) to the variable 'item_search_coefficient'. This value should reflect the effectiveness of the item search bonuses.
#17.3. Assign the value of the variable 'location_coefficient' as follows: (current_location_difficulty / 100) + 1.
#17.4. At the gamemaster's discretion, assign a value between 1 and 2 (inclusive) to the variable 'danger_coefficient' based on the overall danger level of recent events. A higher value represents a more dangerous situation.
#17.5. At the gamemaster's discretion, assign a value between 1 and 2 (inclusive) to the variable 'logic_coefficient' based on how logical it is to find an item in this situation. A higher value represents a more logical or probable find.
#17.6. At the gamemaster's discretion, assign a value between 1 and 2 (inclusive) to the variable 'characters_coefficient' based on the complexity or challenge posed by the characters in the environment. A higher value represents a more complex social situation.
#17.7. Set the value of the 'multipliers' key in the JSON output to the following array:  '[item_search_coefficient, location_coefficient, danger_coefficient, logic_coefficient, characters_coefficient]'.

${ELEMENTS.useStatus.checked ?
`#18 Player status.
${generateStatus ? `
#18.1. Strictly follow the instructions: [ Let's think step by step : [ ` : `
#18.1. If this condition is true: [
- Look at the current status of player for current turn. Then find the player's status (statusData) in the Context. Compare values of their properties ['name', 'age', 'race', 'class', 'appearanceDescription', 'statusInSociety', 'positionInSociety' ] with the current values. Pay attention to every little thing, every insignificant detail. The rule returns 'true' if at least one difference in the properties is found.
], then strictly follow the instructions: [ Let's think step by step : [ `}
#18.2. Mandatory include to the response the key 'statusData', the value of which is an object, that represents the player's status information.
#18.3. Mandatory format for recording the value of the 'statusData' key: ${statusTemplate} .
#18.4. To the value of the 'name' key, include the full name of the player character.
#18.5. To the value of the 'age' key, include an integer that represents the player's character age in years. You can imagine it if you don't have exact data.
#18.6. To the value of the 'race' key, include the name of the player's race.
#18.7. To the value of the 'class' key, include the name of the player's class.
#18.8. To the value of the 'appearanceDescription' key, include a string that describes the player's appearance in exceptional detail, including but not limited to face, body proportions, figure, clothing, posture, and any distinguishing features such as scars, tattoos, or jewelry. Use as much detail and artistic language as possible. Provide a meticulous breakdown of each aspect, ensuring that every notable feature is vividly described.
#18.9. To the value of the 'statusInSociety' key, include a string that describes status in society of player character. Use as much detail and artistic language as possible.
#18.10. To the value of the 'positionInSociety' key, include a string that describes current position in society of player character.
#18.10.1. Position in society means the information about how society views the character. Try to list the attitude towards the player character from various groups, classes, organizations, and so on. Use as much detail and artistic language as possible.
#18.11. To the value of the 'affiliationWithOrganizations' key, include a string that describes player's affiliation to various organizations or groups. Use as much detail and artistic language as possible.
#18.12. To the value of the 'purposes' key include an array of strings, each of which representing a hint about proposed character game purpose for a long game perspective.
#18.13. Double quotes cannot be used inside values, as this interferes with parsing your answer into JSON. Use guillemet quotes («») inside JSON values if needed. Use double quotes at the start and at the end of keys and values. 
] ], otherwise, then: [ 
#18.14. Do not include 'statusData' value of key to the response. Use just empty object value {} in this case.
]

#19 Rules for accounting for explicit effects affecting the player character.
#19.1. Explicit effects are conditions that affects the player's character stats, abilities or actions, such as poisoning, curse, disease, blessing or similar.
#19.2. If this condition is true: [
- Look at the explicit effects, which affectings the player in current turn. Then find the player's status effects (statusDataEffects) in the Context. Compare values of their properties ['name', 'description' ] with the current values. Pay attention to every little thing, every insignificant detail. The rule returns 'true' if at least one difference in the properties is found.
], then strictly follow the instructions: [ Let's think step by step : [
#19.3. Mandatory include to the response the key 'statusDataEffects', the value of which is an array of objects, each of which representing the information about explicit effects, that affects the player character.
#19.4. Mandatory format for recording the value of each item of 'effects' array: { 'name': 'explicit_effect_name', 'description': 'explicit_effect_description' } .
#19.5. To the value of the 'name' key, include the name of explicit effect.
#19.6. To the value of the 'description' key, include the string that describes information about explicit effect.
#19.7. Double quotes cannot be used inside values, as this interferes with parsing your answer into JSON. Use guillemet quotes («») inside JSON values if needed. Use double quotes at the start and at the end of keys and values. 
] ]
` : ``}

#20 Form the final answer in JSON format according to the structure of the response template, while making sure that all key values have been supplemented, not replaced. Double quotes cannot be used inside values, as this interferes with parsing your answer into JSON. Use guillemet quotes («») inside JSON values if needed. Use double quotes at the start and at the end of keys and values. All keys and string values in nested objects in the final answer should be enclosed in double quotes. The final answer must fully comply with the structure of the response template. There should be no text outside the JSON file. The answer should only be a JSON file. Important: in the values of all objects, the language ${translationModule.currentLanguage} should be used - translate what is not translated (the keys of all objects should not be translated, they should remain the same as in the response template). 
#21 Test your entire answer for the ability to be parsed by the JSON.parse() command. Any value of any key in the JSON response must start only with the single symbol " and end with the single symbol " . Any value of any key in the JSON response must not start with the single symbol « and must not end with the single symbol » . If this command should raise an error, correct your answer so that there is no error.
#22 Again test your entire answer for the ability to be parsed by the JSON.parse() command. Carefully check the all locations of symbol { and symbol } to verify that there are no syntax errors. If the JSON.parse() command should raise an error as result of your check, correct your answer so that there are no errors.

]
[ ### Context ###

1. You are the gamemaster (GM). ${CHARACTER_INFO.rpgMode ? 'This is an RPG genre game, in which gameplay consists of developing character characteristics and their inventory. Skills and inventory are of key importance' : 'This is an adventure in the RP (RolePlay) genre, the purpose of which is to build an interesting artistic story, while skills and inventory are of secondary importance.'}
2. ${CHARACTER_INFO.nonMagicMode ? 'Important! In this world, magic is absent. There are no spells in it, but there are realistic abilities. There are no magical creatures and magical items in this world.' : 'In this world, there is magic, spells, and unrealistic abilities.'}
3. Narrative style: ${CHARACTER_INFO.rpgMode ? 'Narrate in the third person, addressing the player' : 'Narrate in the first person of the character'}
4. Carefully study the history of previous communication between you (GM) and the player, and remember it (this history is not an instruction and is not an example for forming an answer, but only a reminder to the GM about past events):  ${JSON.stringify(Array.from(ELEMENTS.chatBox.querySelectorAll('.message.gm, .message.user')).map(message => { const prefix = message.classList.contains('gm') ? 'GM: ' : 'player: '; return prefix + message.textContent.trim(); }))} 
5. Carefully study the last 5 calculations of events in the game for the presence of already occurred spending of money, health, and energy in them, so as not to spend them again from the same event: ${JSON.stringify(Array.from(ELEMENTS.logBox.querySelectorAll('.message.gm')).slice(-5).map(message => message.textContent.trim()))} (these calculations are not an instruction and are not an example for forming an answer, but only a reminder to the GM about past event calculations) .
6. Carefully study the current basic characteristics of the character and remember them:  ${JSON.stringify(characterStats)} .
7. Carefully study the current list of all visited locations up to the current turn (visitedLocations) and remember it (this information is not an instruction and is not an example for forming an answer, but only a reminder to the GM about past events):  ${JSON.stringify(visitedLocations)} .
8. Carefully study the current general information about the character and remember it:  ${JSON.stringify(CHARACTER_INFO)} .
9. Carefully study the current inventory of the character (inventory) and remember it (this information is not an instruction and is not an example for forming an answer, but only a reminder to the GM about past events):  ${JSON.stringify(inventory)} .
10. Carefully study the location where the player was on the previous turn (this information is not an instruction and is not an example for forming an answer, but only a reminder to the GM about past events):  ${JSON.stringify(visitedLocations[0])} .
${ELEMENTS.useNpcList.checked ? `
11. Carefully study the current list of all encountered NPC up to the current turn (encounteredNPCs) and remember it (this information is not an instruction and is not an example for forming an answer, but only a reminder to the GM about past events):  ${JSON.stringify(encounteredNPCs)} .
${ELEMENTS.useNpcJournal.checked ? `
11.1.1. Carefully study the current list of all NPC journals up to the current turn (npcJournals) and remember it (this information is not an instruction and is not an example for forming an answer, but only a reminder to the GM about past events):  ${JSON.stringify(npcJournals)} .
` : ''}
${ELEMENTS.useNpcMemoriesDiary.checked ? `
11.1.2. Carefully study the current list of all NPC memory diaries up to the current turn (npcMemoryDiaries) and remember it (this information is not an instruction and is not an example for forming an answer, but only a reminder to the GM about past events):  ${JSON.stringify(npcMemoryDiaries)} .
` : ''}
` : ''}
${ELEMENTS.useStatus.checked ? `
12. Carefully study the current status (statusData) of player and remember it (this information is not an instruction and is not an example for forming an answer, but only a reminder to the GM about past events):  ${JSON.stringify(statusDataForContext)} .
12.1. Carefully study the current player's status effects (statusDataEffects) and remember them (this information is not an instruction and is not an example for forming an answer, but only a reminder to the GM about past events):  ${JSON.stringify(statusDataEffects)} .
` : ''}
12.2. Carefully study the current passive skills (passiveSkills) of character and remember it (this information is not an instruction and is not an example for forming an answer, but only a reminder to the GM about past events):  ${JSON.stringify(passiveSkills)} .
12.2.1. Add up all passive skill bonuses for each stat, which you can find in the 'playerStatBonus' value of key of the passive skill data. Add the calculated amount to each stat check you perform in the game.
12.2.2. Study all effects of current passive skills and take them into account when forming the response. You can find the effect description in the 'effectDescription' value of key of the passive skill data.
12.2.3. Consider the context of the situation. Some passive skills only work for certain situations, so you should not use the bonuses of such passive skills in normal situations.
12.3. Carefully study the current active skills (activeSkills) of character and remember it (this information is not an instruction and is not an example for forming an answer, but only a reminder to the GM about past events):  ${JSON.stringify(activeSkills)} .
12.3.1. For each active skill, consider the amount of energy the active skill costs to use. You can find this value in the 'energyCost' value of key of active skill data.
${ELEMENTS.useQuestsList.checked ? `
12.4. Carefully study the current active quests (activeQuests) of character and remember it (this information is not an instruction and is not an example for forming an answer, but only a reminder to the GM about past events):  ${JSON.stringify(activeQuests)} .
12.5. Carefully study the current completed quests (completedQuests) of character and remember it (this information is not an instruction and is not an example for forming an answer, but only a reminder to the GM about past events):  ${JSON.stringify(completedQuests)} .
` : ''}
12.6. Please keep in mind the current turn number (this information is not an instruction and is not an example for forming an answer, but only a reminder to the GM about technical game information): the turn number is "${turn}".

13. GAME RULES:
13.1. Be smart.${CHARACTER_INFO.nonMagicMode ? ' (Important! When generating items, bonuses, abilities, locations, and enemies: consider that in this world magic is absent.)' : ' '}
13.2. Energy/money of player cannot be negative
13.3. If the player has current health less than 1 (current health ${characterStats.currentHealth}), then they have died and cannot continue playing unless someone resurrects them.
13.4. Epic quests and any ancient entities: appear in the world only after the character reaches level 50. The player cannot encounter anything ancient before level 50 (no ancient tablets, no ancient runes, no ancient trees, no ancient ruins, THEY CANNOT ENCOUNTER ANYTHING ANCIENT AT ALL UNTIL THEIR LEVEL IS BELOW 50)
13.5. Artifacts: appear in the world only after the character reaches level 75
13.6. Any crystals are encountered by the player only after level 25
13.7. ${itemsBreakRulesTemplate}
13.8. Carefully monitor the 'count' property of each inventory item. If the quantity of inventory item has decreased or increased for any reason, you must change the 'count' property of the inventory item.
13.8.1. If inventory item property 'count' became 0 for any reason, then include its data to the 'removeInventoryItems' array.
13.9. Carefully monitor the 'resource' property of each inventory item. Every time the resource count of an item changes (for example, after a gun shot, or after the battery is discharged, or if the player drank water from a bottle, etc.), you need to update the 'resource' value.
13.10. Carefully monitor the 'contentsPath' property of each inventory item. Every time an item is moved somewhere in the player's inventory, update 'contentsPath' value of item.
13.11. When the player taking something out of their inventory: do not believe the player. First try to check if the item the player is trying to take out is actually in their inventory. If the item is not in the player's inventory, mark it in the response, and do nothing else related with this item.
13.12. If inventory item was renamed, then include its data to the 'removeInventoryItems' array and add new item to 'inventoryItemsData' array.
13.12.1. Don't change the quality of inventory item just because it's been renamed. There must be a reason other than renaming to change item's properties. If there is no reason, then don't change the renamed item's properties.
13.13. When items need to be added to a container, located in the player's inventory, check whether these items can fit there. Use your logic. A large item will not fit into a small box.
13.14. Currency: only money
13.15. Each turn should be a substantial development of the plot
13.16. The plot should not cycle on the same thing, even if the player's action is the same
13.17. The game cannot have [any bonuses, abilities, potions, etc.] that increase the maximum possible health or energy pool
13.18. The chance of finding the first item in a specific location is determined by the logical probability of finding the item in the corresponding location
13.19. The chance of finding another item in the same location tends to zero in exponential progression with each new item found in the same location
13.20. Each player action with an non-obvious outcome requires a skill check with a detailed description of the check in "items_and_stat_calculations"
13.21. Each generation of item in 'inventory' is accompanied by a detailed text of the generation calculation in "items_and_stat_calculations"
13.22. Each turn records the description of the current turn events for the location where the player is, with a very concise description of the events.
13.23. It is not allowed to return to events in the plot that have already occurred in early turns. Each player action is a continuation of only the most recent turns.
13.24. The player is not the epicenter of the world, the world lives an independent life
13.25. The gamemaster is forbidden to make any decisions on behalf of the character. Only the player can make decisions about the character's actions
13.26. The character should not pick up items unless the player indicated to do so
13.27. You must not write calculations to the "response" key. Write all calculations only to the "items_and_stat_calculations" value instead.
${ELEMENTS.useQuestsList.checked && ELEMENTS.makeGameQuestOriented.checked ? `
13.28. The game's narrative should be based on the currently active quests (known from the Context).
13.29. Each subsequent plot twist should move the player closer to completing the active quests.
13.30. Before forming the final response, carefully study the list of active quests (activeQuests) and try to build a game plot based on the player's current active quests.
` : ''}

14. Calculation of action checks for skills and calculation of items generation are different events, independent of each other. There is a separate instruction for each of these events. Distinguish between them.

15. The economy and value of money in the game is built relative to known prices for items that exist in the current world according to inventory (known from Context).

16. Test your entire answer for the ability to be parsed by the JSON.parse() command. If this command should raise an error, correct your answer so that there is no error.
 ] ]`;

        console.log(prompt);
        lastUserMessage = currentMessage;
        ELEMENTS.actionButtons.forEach(button => button.style.display = 'none');

        const loadingElement = document.createElement('div');
        loadingElement.classList.add('message', 'gm');
        loadingElement.innerHTML = '<div class="loading"></div>';

        ELEMENTS.chatBox.appendChild(loadingElement);
        ELEMENTS.chatBox.scrollTop = ELEMENTS.chatBox.scrollHeight;

        const model = ELEMENTS.aiModel.value;
        const apiKey = ELEMENTS.apiKey.value;

        let data;
        try {
            const aiProvider = document.querySelector('input[name="ai-provider"]:checked').value;
            if (!["Websim", "None"].includes(aiProvider) && !apiKey)
                throw translationModule.translations[ELEMENTS.chooseLanguageMenu.value]["empty-ai-key-label"];

            APIModule.initialize({
                model: model,
                apiKey: apiKey,
                prompt: prompt,
                systemInstructions: ELEMENTS.systemInstructions.value,
                frequencyPenalty: ELEMENTS.frequencyPenalty.value,
                presencePenalty: ELEMENTS.presencePenalty.value,
                repetitionPenalty: ELEMENTS.repetitionPenalty.value,
                temperature: ELEMENTS.temperature.value,
                topP: ELEMENTS.topP.value,
                topK: ELEMENTS.topK.value,
                maxTokens: ELEMENTS.maxTokens.value,
                tokenCostSum: tokenCostSum,
                messageParseErrorMessage: translationModule.translations[ELEMENTS.chooseLanguageMenu.value]["gm_message_error_full_gm_answer"],
                aiProviderStreamingErrorMessage: translationModule.translations[ELEMENTS.chooseLanguageMenu.value]["ai-provider-streaming-error-label"]
            });

            switch (aiProvider) {
                case "OpenRouter":
                    data = await APIModule.sendOpenrouterRequest();
                    break;
                case "Websim":
                    data = await APIModule.sendWebsimRequest();
                    break;
                case "Google AI Studio":
                    data = await APIModule.sendGoogleAIRequest();
                    break;
                case "Mistral AI":
                    data = await APIModule.sendMistralAIRequest();
                    break;
                case "Groq":
                    data = await APIModule.sendGroqRequest();
                    break;
                case "Hugging Face":
                    data = await APIModule.sendHuggingFaceRequest();
                    break;
                case "Cohere":
                    data = await APIModule.sendCohereRequest();
                    break;
                case "OpenAI01":
                    data = await APIModule.sendOpenAI01APIRequest();
                    break;
                case "None":
                    throw translationModule.translations[ELEMENTS.chooseLanguageMenu.value]["none-provider-selected-label"];
                default:
                    throw "Wrong provider value";
            }

            turn++;
            tokenCostSum = APIModule.tokenCostSum;
            tokenCostCurrent = APIModule.tokenCostCurrent;

            if (Array.isArray(data))
                data = data[0];
            data = sanitizeObject(data, ['~', '"']);

            //console.log(data);
            ELEMENTS.chatBox.removeChild(loadingElement);
            sendMessageToChat(data.response, 'gm');

            if (data.moveInventoryItems && data.moveInventoryItems.length > 0) {
                for (const item of data.moveInventoryItems)
                    findAndMoveItem(item.name, item.contentsPath, item.contentsPathOfDestinationContainer, item.destinationContainerName);
            }

            if (data.removeInventoryItems && data.removeInventoryItems.length > 0) {
                for (const item of data.removeInventoryItems)
                    findAndDeleteItem(item.name, item.contentsPath);
            }

            if (data.inventoryItemsData && data.inventoryItemsData.length > 0) {
                for (const item of data.inventoryItemsData.sort(compareItemsByContainerAsc)) {
                    if (item.name) {
                        addInventoryItem({
                            name: item.name,
                            description: item.description,
                            count: Number(item.count),
                            quality: item.quality,
                            price: item.price,
                            durability: item.durability,
                            resource: item.resource,
                            bonuses: item.bonuses,
                            image_prompt: item.image_prompt,
                            customProperty: item.customProperty,
                            contentsPath: item.contentsPath,
                            isContainer: item.isContainer,
                            weight: Number(item.weight),
                            volume: Number(item.volume),
                            containerWeight: item.containerWeight ? Number(item.containerWeight) : undefined,
                            capacity: Number(item.capacity)
                        });
                    }
                }
            }

            if (data.moveInventoryItems?.length > 0 || data.removeInventoryItems?.length > 0 || data.inventoryItemsData?.length > 0) {
                calculateParametersForItemsArray(inventory);
                adjustInventoryContainerCapacity(inventory);
                adjustInventoryContainerVolume(inventory);
                calculateParametersForItemsArray(inventory);
            }

            if (data.currentHealthChange) {
                characterStats.currentHealth = characterStats.currentHealth + Math.floor(data.currentHealthChange);
                if (characterStats.currentHealth > characterStats.maxHealth)
                    characterStats.currentHealth = characterStats.maxHealth;
            };

            if (data.currentEnergyChange) {
                characterStats.currentEnergy = characterStats.currentEnergy + Math.floor(data.currentEnergyChange);
                if (characterStats.currentEnergy > characterStats.maxEnergy)
                    characterStats.currentEnergy = characterStats.maxEnergy;
            }

            if (characterStats.currentEnergy < 0)
                characterStats.currentEnergy = 0;

            if (data.moneyChange) {
                const moneyChangedValue = characterStats.money + Math.floor(data.moneyChange);
                characterStats.money = moneyChangedValue >= 0 ? moneyChangedValue : 0;
            }

            if (data.statsDecreased && data.statsDecreased.length > 0) {
                for (data of data.statsDecreased)
                    decreasePlayerStat(data.name, Number(data.value ?? 0));                
            }

            if (data.statsIncreased && data.statsIncreased.length > 0) {
                for (data of data.statsIncreased)
                    increasePlayerStat(data.name, Number(data.value ?? 0));
            }

            if (data.experienceGained)
                experienceProcessing(data.experienceGained);

            if (data.locationData && Object.keys(data.locationData).length > 0 && data.locationData.name) {
                const possibleDifficultDublicate = extractLastParenthesisContent(data.locationData.name);
                if (possibleDifficultDublicate && possibleDifficultDublicate == data.locationData.difficulty?.toString())
                    data.locationData.name = removeLastParenthesis(data.locationData.name);

                addVisitedLocation(data.locationData.name, data.locationData.difficulty, data.locationData.description, data.locationData.lastEventsDescription, data.locationData.image_prompt);
            }

            if (data.NPCsRenameData && data.NPCsRenameData.length > 0) {
                for (const npcData of data.NPCsRenameData)
                    renameNPC(npcData.oldName, npcData.newName);                
            }

            if (data.NPCsData && data.NPCsData.length > 0) {
                for (const newNPC of data.NPCsData) {
                    if (newNPC.name) {
                        addEncounteredNPC({
                            name: newNPC.name,
                            image_prompt: newNPC.image_prompt,
                            rarity: newNPC.rarity,
                            age: Number(newNPC.age ?? 0),
                            worldview: newNPC.worldview,
                            race: newNPC.race,
                            class: newNPC.class,
                            appearanceDescription: newNPC.appearanceDescription,
                            history: newNPC.history,
                            stats: newNPC.stats,
                            skills: newNPC.skills,
                            effects: newNPC.effects,
                            attitude: newNPC.attitude
                        });
                    }
                }
            }

            if (data.NPCJournals && data.NPCJournals.length > 0) {
                for (const NPCJournal of data.NPCJournals) {
                    if (NPCJournal.name)
                        addNpcJournal(NPCJournal.name, NPCJournal.lastJournalNote);
                }
            }

            if (data.NPCMemories && data.NPCMemories.length > 0) {
                for (const NPCMemory of data.NPCMemories) {
                    if (NPCMemory.name)
                        addNpcMemoryDiary(NPCMemory.name, NPCMemory.lastDiaryNote);
                }
            }

            if (data.removePassiveSkills && data.removePassiveSkills.length > 0) {
                for (const name of data.removePassiveSkills)
                    removeSkill(name, false);
            }

            if (data.removeActiveSkills && data.removeActiveSkills.length > 0) {
                for (const name of data.removeActiveSkills)
                    removeSkill(name, true);
            }            

            if (data.newPassiveSkills && data.newPassiveSkills.length > 0) {
                setOrChangeSkills(passiveSkills, data.newPassiveSkills);
            }

            if (data.newActiveSkills && data.newActiveSkills.length > 0) {
                setOrChangeSkills(activeSkills, data.newActiveSkills);
            }

            if (data.questsData && data.questsData.length > 0) {
                for (const newQuest of data.questsData) {
                    if (newQuest.name)
                        addQuest(newQuest.name, newQuest.description, newQuest.purposes, newQuest.reward, newQuest.punishmentForFailingQuest, newQuest.details, newQuest.isCompleted);
                }
            }

            if (data.items_and_stat_calculations && data.items_and_stat_calculations.length > 0) {                
                logMessage(data.items_and_stat_calculations.join('\n\n'), data.currentHealthChange, data.currentEnergyChange, data.moneyChange);
            }

            if (data.actions)
                handlePlayerActionHints(data.actions);

            if (data.statusData)
                setStatus(data.statusData);            

            if (data.statusDataEffects)
                setStatusEffects(data.statusDataEffects);            

            if (ELEMENTS.imageToggleSettings.checked && data.image_prompt) {
                generateBackgroundImage(data.image_prompt);
            } else {
                const playerInfo = document.querySelector('.player-info');
                playerInfo.style.backgroundImage = 'none';
            }

            if (data.multipliers?.length == 5) {
                const numberOfItems = getRandomNumber(1, 10);
                loot = generateLoot(data.multipliers, numberOfItems);
            }

            updateElements();
            ELEMENTS.chatBox.scrollTop = ELEMENTS.chatBox.scrollHeight;
        } catch (error) {
            if (loadingElement && ELEMENTS.chatBox.contains(loadingElement)) {
                ELEMENTS.chatBox.removeChild(loadingElement);
            }

            const errorMessage = error?.message ?? error ?? "Unknown error";
            sendMessageToChat(errorMessage, 'system');
        }
    }
}

function extractLastParenthesisContent(text) {
    const regex = /\(([^)]+)\)/g;
    let match;
    let lastMatch = null;

    while ((match = regex.exec(text)) !== null) {
        lastMatch = match[1];
    }

    return lastMatch;
}

function removeLastParenthesis(text) {
    const regex = /\(([^)]+)\)$/;
    return text.replace(regex, "");
}

function shouldGeneratePassiveSkills() {
    const passiveSkillsCount = passiveSkills?.length ?? 0;
    const skillsToGenerate = characterStats.level - passiveSkillsCount;
    return skillsToGenerate > 0;
}

function setAiProvider(providerName, setAlways) {
    document.querySelector(`input[name="ai-provider"][value="${providerName}"`).checked = true;
    document.querySelector(`input[name="ai-provider2"][value="${providerName}"`).checked = true;
    document.querySelector(`input[name="ai-provider3"][value="${providerName}"`).checked = true;

    const inputsToHide = [];
    const inputsToClear = [];

    ELEMENTS.temperatureContainer.style.display = "flex";
    ELEMENTS.frequencyPenaltyContainer.style.display = "flex";
    ELEMENTS.presencePenaltyContainer.style.display = "flex";
    ELEMENTS.repetitionPenaltyContainer.style.display = "flex";
    ELEMENTS.topPContainer.style.display = "flex";
    ELEMENTS.topKContainer.style.display = "flex";
    ELEMENTS.maxTokensContainer.style.display = "flex";
    ELEMENTS.systemInstructionsBox.dataset.show = "true";
    setDefaultProviderParams(!!setAlways);

    if (providerName == "Google AI Studio") {
        inputsToHide.push(
            ELEMENTS.repetitionPenalty,
            ELEMENTS.maxTokens
        );
        //frequencyPenalty и presencePenalty отсутствуют в текущих моделях гугла, но присутствуют в апи. Обнуляем эти значения, чтобы не было ошибки
        inputsToClear.push(
            ELEMENTS.frequencyPenalty,
            ELEMENTS.presencePenalty,
            ELEMENTS.topK
        );
    } else if (providerName == "Mistral AI") {
        inputsToHide.push(
            ELEMENTS.frequencyPenalty,
            ELEMENTS.presencePenalty,
            ELEMENTS.repetitionPenalty,
            ELEMENTS.topK,
            ELEMENTS.maxTokens
        );
    } else if (providerName == "Groq") {
        inputsToHide.push(
            ELEMENTS.repetitionPenalty,
            ELEMENTS.topK,
            ELEMENTS.maxTokens
        );
    } else if (providerName == "Hugging Face") {
        inputsToHide.push(
            ELEMENTS.repetitionPenalty,
            ELEMENTS.topK
        );
    } else if (providerName == "Cohere") {
        inputsToClear.push(ELEMENTS.presencePenalty);
        inputsToHide.push(
            ELEMENTS.repetitionPenalty,
            ELEMENTS.maxTokens
        );
    } else if (providerName == "OpenAI01") {
        inputsToHide.push(
            ELEMENTS.repetitionPenalty,
            ELEMENTS.topK,
            ELEMENTS.maxTokens
        );
    } else if (providerName == "Websim") {
        inputsToHide.push(
            ELEMENTS.temperature,
            ELEMENTS.frequencyPenalty,
            ELEMENTS.presencePenalty,
            ELEMENTS.repetitionPenalty,
            ELEMENTS.topP,
            ELEMENTS.topK,
            ELEMENTS.maxTokens
        );
        ELEMENTS.systemInstructionsBox.dataset.show = "false";
    } else if (providerName == "OpenRouter") {
        inputsToHide.push(
            ELEMENTS.maxTokens
        );
    } else if (providerName == "None") {
        inputsToHide.push(
            ELEMENTS.temperature,
            ELEMENTS.frequencyPenalty,
            ELEMENTS.presencePenalty,
            ELEMENTS.repetitionPenalty,
            ELEMENTS.topP,
            ELEMENTS.topK,
            ELEMENTS.maxTokens
        );
        ELEMENTS.systemInstructionsBox.dataset.show = "false";
    }

    clearTextInputsAndHideParents(inputsToHide, "div");
    clearTextInputs(inputsToClear);

    const systemInstructionsSetting = document.getElementById('world-system-instructions');
    if (ELEMENTS.systemInstructionsBox.dataset.show == "true") {
        ELEMENTS.systemInstructionsBox.style.display = ELEMENTS.myRulesBox.style.display;
        systemInstructionsSetting.style.display = "block";
    } else {
        ELEMENTS.systemInstructionsBox.style.display = "none";
        systemInstructionsSetting.style.display = "none";
    }
}

function setDefaultProviderParams(setAlways) {
    if (setAlways || ELEMENTS.temperature.value == "")
        ELEMENTS.temperature.value = "0.85";

    if (setAlways || ELEMENTS.topP.value == "")
        ELEMENTS.topP.value = "";

    if (setAlways || ELEMENTS.topK.value == "")
        ELEMENTS.topK.value = "";

    if (setAlways || ELEMENTS.frequencyPenalty.value == "")
        ELEMENTS.frequencyPenalty.value = "";

    if (setAlways || ELEMENTS.presencePenalty.value == "")
        ELEMENTS.presencePenalty.value = "";

    if (setAlways || ELEMENTS.repetitionPenalty.value == "")
        ELEMENTS.repetitionPenalty.value = "";

    if (setAlways || ELEMENTS.maxTokens.value == "")
        ELEMENTS.maxTokens.value = "3000";
}

function clearTextInputsAndHideParents(inputsArray, parentSelector) {
    clearTextInputs(inputsArray);
    hideElements(inputsArray, parentSelector);
}

function clearTextInputs(inputsArray) {
    if (!inputsArray || inputsArray?.length < 1)
        return;

    for (input of inputsArray)
        input.value = "";
}

function hideElements(elementsArray, parentSelector) {
    if (!elementsArray || elementsArray?.length < 1)
        return;

    for (element of elementsArray) {
        let elementToHide = element;
        if (parentSelector)
            elementToHide = elementToHide.closest(parentSelector);
        elementToHide.style.display = "none";
    }
}

//--------------------------------------------------------------------START ACTIONS------------------------------------------------------------------//

fsLightbox.props.type = "image";
setTimeout(removeFloatingImage, 20000);
setInterval(autoSave, 300000);

checkGameSource();
setGameInputsSynch();
initializeDraggableObject(ELEMENTS.locationInfo);
initializeDraggableObject(ELEMENTS.npcInfo);
initializeDraggableObject(ELEMENTS.skillInfo);
initializeDraggableObject(ELEMENTS.inventoryInfo);
initializeDraggableObject(ELEMENTS.inventoryContainerInfo);
initializeDraggableObject(ELEMENTS.questInfo);
initializeDraggableObject(ELEMENTS.imageInfo);

document.addEventListener('DOMContentLoaded', function () {
    const collapseButtonMain = document.getElementById('collapseButtonMain');
    const collapseButtonSettings = document.getElementById('collapseButtonSettings');
    const collapseButtonInputArea = document.getElementById('collapseButtonInputArea');
    const playerInfo = document.querySelector('.player-info');
    const settingsPanel = document.getElementById('settings-info');
    const actionButtons = document.querySelector('.action-buttons');
    settingsPanel.classList.add('settings-panel', 'collapsed');

    let isMainCollapsed = false;
    let isSettingsCollapsed = false;
    let isInputAreaCollapsed = false;

    collapseButtonMain.addEventListener('click', function () {
        if (collapseButtonMain.style.display == 'none') return;

        isMainCollapsed = !isMainCollapsed;
        collapseButtonMain.classList.toggle('collapsed');
        playerInfo.classList.toggle('collapsed');
        const chatArea = document.querySelector(".chat-area");
        chatArea.style.flex = isMainCollapsed ? "auto" : getChatAreaFlex(playerInfo.style.width);
    });

    collapseButtonSettings.addEventListener('click', function () {
        if (collapseButtonSettings.style.display == 'none') return;

        isSettingsCollapsed = !isSettingsCollapsed;
        collapseButtonSettings.classList.toggle('collapsed');
        settingsPanel.classList.toggle('collapsed');
    });

    collapseButtonInputArea.addEventListener('click', function () {
        if (collapseButtonInputArea.style.display == 'none') return;

        isInputAreaCollapsed = !isInputAreaCollapsed;
        collapseButtonInputArea.classList.toggle('collapsed');
        actionButtons.classList.toggle('collapsed');
    });

    document.addEventListener('click', (event) => {
        if (ELEMENTS.inventoryItemContextMenuContainer.style.display !== 'block')
            return;

        if (event.target !== ELEMENTS.inventoryItemContextMenu)
            hideInventoryItemContextMenu();        
    });

    const npcInfoTabs = document.querySelectorAll("#npc-info-tabs .tab");
    npcInfoTabs.forEach(tab => {
        tab.addEventListener("click", () => {
            const currentActiveTab = document.querySelector("#npc-info-tabs .tab.active");
            currentActiveTab.classList.remove("active");

            const currentContentId = currentActiveTab.dataset.target;
            document.getElementById(currentContentId).style.display = "none";
            document.getElementById(currentContentId + "-label").style.display = "none";

            tab.classList.add("active");

            const targetContentId = tab.dataset.target;
            document.getElementById(targetContentId).style.display = "block";
            document.getElementById(targetContentId + "-label").style.display = "block";
        });
    });
});
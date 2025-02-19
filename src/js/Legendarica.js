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

let controller = new AbortController();

//DOM elements
const ELEMENTS = {
    //api keys and model names
    apiKey: document.getElementById('api-key'),
    apiKey2: document.getElementById('api-key2'),
    apiKey3: document.getElementById('api-key3'),
    apiKey4: document.getElementById('api-key4'),
    aiModel: document.getElementById('ai-model'),
    aiModel2: document.getElementById('ai-model2'),
    aiModel3: document.getElementById('ai-model3'),
    aiModel4: document.getElementById('ai-model4'),

    //setting creation
    modalSetting: document.getElementById('setting-creation-modal'),
    nonMagicModeToggle: document.getElementById('non-magic-mode'),

    //window with player character information
    modal: document.getElementById('character-creation-modal'),

    createCharacterButton: document.getElementById('create-character'), //create character button
    startNewSettingButton: document.getElementById('create-setting'), //start game in your own setting button
    loadCharacterButton: document.getElementById('load-character'), //autosave load button
    myGameButton: document.getElementById('my-game'), // Create your own game button
    postApocalypticGameButton: document.getElementById('post-apocalyptic-game'),
    randomCharacterButton: document.getElementById('random-character'), // Generate random character
    rpgModeToggle: document.getElementById('rpg-mode'), // Enable RPG mode
    ttsModeToggle: document.getElementById('tts-mode'), // Voice message toggle
    campaignSelect: document.getElementById('campaign-select'), // Campaign selector
    rpgModeToggle2: document.getElementById('rpg-mode2'),
    ttsModeToggle2: document.getElementById('tts-mode2'),
    ttsModeToggleSettings: document.getElementById('tts-mode-settings'),
    imageToggleSettings: document.getElementById('image-mode-settings'),
    systemInstructionsEasyMDE: null,
    myRulesEasyMDE: null,

    //post apocalyptic
    postApocalypticRace: document.getElementById('character-post-apocalyptic-race'),
    postApocalypticClass: document.getElementById('character-post-apocalyptic-class'),
    postApocalypticCampaign: document.getElementById('campaign-post-apocalyptic-select'),
    postApocalypticRandomCharacterButton: document.getElementById('random-character-post-apocalyptic'),
    postApocalypticLoadCharacterButton: document.getElementById('load-character-post-apocalyptic'), //autosave load button
    postApocalypticModal: document.getElementById('character-creation-post-apocalyptic-modal'),
    postApocalypticMyGameButton: document.getElementById('my-game-post-apocalyptic'),
    postApocalypticStartGameButton: document.getElementById('create-character-post-apocalyptic'),

    //chat
    chatBox: document.getElementById('chat-box'), // chat window
    userInputContainer: document.getElementById('user-input-editor'),
    userInput: document.getElementById('user-input'), // Action input line
    sendButton: document.getElementById('send-button'), // Send message button
    cancelButton: document.getElementById('cancel-button'),
    actionButtons: Array.from(document.getElementsByClassName('action-button')), // Suggested actions button list
    clearHalfChatButton: document.getElementById('clear-half-chat'), // Clear chat button
    //menu
    chooseLanguageMenu: document.getElementById('choose-language-menu'),
    bottomBox: document.getElementById('bottom-box'),
    logBox: document.getElementById('log-box'),
    thinkingLogBox: document.getElementById('thinking-log-box'),
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
    useStreamingContainer: document.getElementById('use-streaming-ai-container'),
    useStreaming: document.getElementById('use-streaming-ai'),
    
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
    totalWeight: document.getElementById('total-weight-value'),
    maxWeight: document.getElementById('max-weight-value'),
    criticalWeight: document.getElementById('critical-weight-value'),
    weightStatus: document.getElementById('weight-status-value'),
    weightGroupContainer: document.getElementById('statsGroup-weight-container'),

    //inventory
    inventory: document.getElementById('inventory-list'),
    inventoryBasket: document.getElementById('inventory-basket-list'),
    inventoryInfo: document.getElementById('inventory-info'),
    inventoryInfoId: document.getElementById('inventory-info-id'),
    inventoryInfoName: document.getElementById('inventory-info-name'),
    inventoryInfoDescription: document.getElementById('inventory-info-description'),
    inventoryInfoContentsDescription: document.getElementById('inventory-info-contents-description'),
    inventoryInfoAvailableCapacity: document.getElementById('inventory-info-available-capacity'),
    inventoryInfoAvailableVolume: document.getElementById('inventory-info-available-volume'),
    inventoryInfoClose: document.getElementById('inventory-info-close'),
    inventoryInfoDelete: document.getElementById('inventory-delete'),
    inventoryInfoRestore: document.getElementById('inventory-restore'),
    inventoryContainerOpen: document.getElementById('inventory-container-open'),
    inventoryInfoCount: document.getElementById('inventory-info-count'),
    inventoryInfoPrice: document.getElementById('inventory-info-price'),
    inventoryInfoQuality: document.getElementById('inventory-info-quality'),
    inventoryInfoDurability: document.getElementById('inventory-info-durability'),
    inventoryInfoResource: document.getElementById('inventory-info-resource'),
    inventoryInfoWeight: document.getElementById('inventory-info-weight'),
    inventoryInfoWeightReduction: document.getElementById('inventory-info-weightReduction'),
    inventoryInfoVolume: document.getElementById('inventory-info-volume'),
    inventoryInfoCapacity: document.getElementById('inventory-info-capacity'),
    inventoryInfoCustomProperties: document.getElementById('inventory-info-customProperties'),
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
    questInfoQuestGiver: document.getElementById('quest-info-questGiver'),
    questInfoReward: document.getElementById('quest-info-reward'),
    questInfoPunishment: document.getElementById('quest-info-punishment'),
    questInfoPurposes: document.getElementById('quest-info-purposes'),
    questInfoQuestBackground: document.getElementById('quest-info-questBackground'),
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
    //data editor
    dataEditorInfo: document.getElementById('data-editor-info'),
    dataEditorInfoClose: document.getElementById('data-editor-info-close'),
    dataEditorInfoAdjust: document.getElementById('data-editor-info-adjust'),
    dataEditorInfoMove: document.getElementById('data-editor-info-move'),
    dataEditorInfoTitle: document.getElementById('data-editor-info-title'),
    dataEditorInfoContent: document.getElementById('data-editor-info-content'),
    dataEditorInfoApplyButton: document.getElementById('data-editor-info-apply-button'),    

    //collapse buttons
    collapseButtonMain: document.getElementById('collapseButtonMain'),
    collapseButtonSettings: document.getElementById('collapseButtonSettings'),
    collapseButtonInputArea: document.getElementById('collapseButtonInputArea'),

    //Disable extra features buttons
    useStatus: document.getElementById('useStatus'),
    clearStatus: document.getElementById('clear-status-label'),
    useNpcList: document.getElementById('useNpcList'),
    useNpcJournal: document.getElementById('useNpcJournal'),
    useNpcMemoriesDiary: document.getElementById('useNpcMemoriesDiary'),
    useQuestsList: document.getElementById('useQuestsList'),
    makeGameQuestOriented: document.getElementById('makeGameQuestOriented'),
    useThinkingModule: document.getElementById('useThinkingModule'),
    useThinkingModuleForResponse: document.getElementById('useThinkingModuleForResponse'),
    useThinkingModuleForNPC: document.getElementById('useThinkingModuleForJournals'),
    thinkingModuleIterations: document.getElementById('thinkingModuleIterations'),
    useTextRules: document.getElementById('useLiteraryPrompt'),
    useEroticPrompt: document.getElementById('useEroticPrompt'),
    usePreResponse: document.getElementById('useSeparateResponse'),
    useAfterResponse: document.getElementById('useAfterResponse'),

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
    campaignDescription: '',
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
    money: 0
};

let inventory = [];
let inventoryBasket = [];
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
const criticalExcessWeight = 10;

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

ELEMENTS.postApocalypticGameButton.onclick = function () {
    hideAllModalWindows();
    ELEMENTS.postApocalypticModal.style.display = "block";
    ELEMENTS.ttsModeToggleSettings.checked = false;

    //initialize post apocalyptic world settings
    const races = getPostApocalypticWorldRaces();
    const classes = getPostApocalypticWorldClasses();
    
    processRaces();
    processClasses();
    processCampaigns();

    function processRaces() {
        const raceTooltipId = translationModule.setPostApocalypseRacesTooltip(races.inventory);
        document.getElementById('post-apocalypse-races').innerHTML = markdown(translationModule.translations[ELEMENTS.chooseLanguageMenu.value][raceTooltipId]);

        const raceOptionsHtml = Object.entries(races.inventory)
            .map(([race]) => `<option value="${race}" data-translate-key="${race}">${translationModule.translations[ELEMENTS.chooseLanguageMenu.value][race]}</option>`)
            .join('\n');

        ELEMENTS.postApocalypticRace.innerHTML = `
            <option value="" data-translate-key="no-choosed-race">${translationModule.translations[ELEMENTS.chooseLanguageMenu.value]["no-choosed-race"]}</option>
            ${raceOptionsHtml}
        `;

        ELEMENTS.postApocalypticRace.onchange = function (e) {
            const choosedRace = e.target.value;
            const raceMessage = document.getElementById('post-apocalypse-race-message');
            const messageId = translationModule.setPostApocalypseRaceMessage(choosedRace);

            if (choosedRace) {
                const descriptions = translationModule.getRaceDescriptions(ELEMENTS.chooseLanguageMenu.value, races.inventory);
                raceMessage.innerHTML = markdown(`\n\n${descriptions[choosedRace]()}. \n\n${translationModule.translations[ELEMENTS.chooseLanguageMenu.value][messageId]}.`);
            } else {
                raceMessage.innerHTML = '';
            }
        }
    }

    function processClasses() {
        const classTooltipId = translationModule.setPostApocalypseClassesTooltip(classes);
        document.getElementById('post-apocalypse-classes').innerHTML = markdown(translationModule.translations[ELEMENTS.chooseLanguageMenu.value][classTooltipId]);

        const classOptionsHtml = Object.entries(classes)
            .map(([classId]) => `<option value="${classId}" data-translate-key="${classId}">${translationModule.translations[ELEMENTS.chooseLanguageMenu.value][classId]}</option>`)
            .join('\n');
        ELEMENTS.postApocalypticClass.innerHTML = `
            <option value="" data-translate-key="no-choosed-class">${translationModule.translations[ELEMENTS.chooseLanguageMenu.value]["no-choosed-class"]}</option>
            ${classOptionsHtml}
        `;

        ELEMENTS.postApocalypticClass.onchange = function (e) {
            const choosedClass = e.target.value;
            const classMessage = document.getElementById('post-apocalypse-class-message');
            const messageId = translationModule.setPostApocalypseClassMessage(choosedClass);          

            if (choosedClass) {
                const descriptions = translationModule.getClassDescriptions(ELEMENTS.chooseLanguageMenu.value, classes);
                classMessage.innerHTML = markdown(`\n\n${descriptions[choosedClass]()}. \n\n${translationModule.translations[ELEMENTS.chooseLanguageMenu.value][messageId]}`);
            } else {
                classMessage.innerHTML = '';
            }
        }
    }

    function processCampaigns() {
        const campaignIds = getPostApocalypticWorldCampaignIds();
        const campaignOptionsHtml = campaignIds.map(id => `<option value="${id}" data-translate-key="${id}">${translationModule.translations[ELEMENTS.chooseLanguageMenu.value][id]}</option>`).join('\n');
        ELEMENTS.postApocalypticCampaign.innerHTML = `
            <option value="free-roam" data-translate-key="free-roam">${translationModule.translations[ELEMENTS.chooseLanguageMenu.value]["free-roam"]}</option>
            <option value="random" data-translate-key="random">${translationModule.translations[ELEMENTS.chooseLanguageMenu.value]["random"]}</option>
            ${campaignOptionsHtml}
        `;

        ELEMENTS.postApocalypticCampaign.onchange = function (e) {
            const choosedCampaign = e.target.value;
            const campaignMessage = document.getElementById('post-apocalypse-campaign-message');
            if (choosedCampaign === "random") {
                selectRandomCampaign();
                return;
            }

            const messageId = translationModule.setPostApocalypseCampaignMessage(choosedCampaign);
            campaignMessage.innerHTML = translationModule.translations[ELEMENTS.chooseLanguageMenu.value][messageId];
        }
    }

    function selectRandomCampaign() {
        const count = ELEMENTS.postApocalypticCampaign.options.length;
        const randomValue = ELEMENTS.postApocalypticCampaign.options[Math.floor(Math.random() * count)].value;
        ELEMENTS.postApocalypticCampaign.value = randomValue;
        ELEMENTS.postApocalypticCampaign.onchange({ target: ELEMENTS.postApocalypticCampaign });   
    }

    function getStartInventory(playerClass, playerRace) {
        const translate = translationModule.translations[ELEMENTS.chooseLanguageMenu.value];

        const classInventory = [];
        for (let i = 1; i < 5; i++) {
            classInventory.push(translate[`${playerClass}_${i}`]);
        }
        
        const itemNames = [...classInventory, translate[races.inventory[playerRace]]];

        return itemNames.map(name => {
            return {
                id: generateGUID(),
                name: name,
                description: "",
                count: 1,
                quality: null,
                durability: null,
                bonuses: [],
                image_prompt: null,
                weight: undefined
            }
        });
    }

    ELEMENTS.postApocalypticRandomCharacterButton.onclick = function () {
        const randomName = "Hero";
        const genders = ['male', 'female'];
        const randomGender = genders[Math.floor(Math.random() * genders.length)];
        const racesArray = Object.entries(races.inventory).map(([race]) => race);
        const randomRace = racesArray[Math.floor(Math.random() * racesArray.length)];
        const classesArray = Object.entries(classes).map(([classId]) => classId);
        const randomClass = classesArray[Math.floor(Math.random() * classesArray.length)];

        const nameInput = document.getElementById('character-post-apocalyptic-name');
        nameInput.value = nameInput.value ? nameInput.value : randomName;
        document.getElementById('character-post-apocalyptic-gender').value = randomGender;

        ELEMENTS.postApocalypticRace.value = randomRace;
        ELEMENTS.postApocalypticRace.onchange({ target: ELEMENTS.postApocalypticRace });

        ELEMENTS.postApocalypticClass.value = randomClass;
        ELEMENTS.postApocalypticClass.onchange({ target: ELEMENTS.postApocalypticClass });

        selectRandomCampaign();
    }

    ELEMENTS.postApocalypticLoadCharacterButton.onclick = ELEMENTS.loadCharacterButton.onclick;
    ELEMENTS.postApocalypticMyGameButton.onclick = ELEMENTS.myGameButton.onclick;

    ELEMENTS.postApocalypticStartGameButton.onclick = function () {
        ELEMENTS.apiKey.value = ELEMENTS.apiKey4.value;
        ELEMENTS.aiModel.value = ELEMENTS.aiModel4.value?.trim();
        
        styleOfImage = "modern fantasy";

        const name = document.getElementById('character-post-apocalyptic-name').value;
        const gender = document.getElementById('character-post-apocalyptic-gender').value;
        const race = document.getElementById('character-post-apocalyptic-race').value;
        const characterClass = document.getElementById('character-post-apocalyptic-class').value;
        const selectedCampaign = document.getElementById('campaign-post-apocalyptic-select').value;

        const rpgCheck = document.getElementById('post-apocalypse-rpg-mode').checked;
        ELEMENTS.rpgModeToggle.checked = rpgCheck;

        const nonMagicCheck = document.getElementById('post-apocalypse-non-magic-mode').checked;

        if (!name || !gender || !race || !characterClass) {
            alert(translationModule.translations[ELEMENTS.chooseLanguageMenu.value]['alert_cant_start']);
            return;
        }

        CHARACTER_INFO.name = name;
        CHARACTER_INFO.gender = translationModule.translations[ELEMENTS.chooseLanguageMenu.value][gender];
        CHARACTER_INFO.race = translationModule.translations[ELEMENTS.chooseLanguageMenu.value][race];
        CHARACTER_INFO.raceDescription = translationModule.translations[ELEMENTS.chooseLanguageMenu.value][race + "_desc"];
        CHARACTER_INFO.classOfCharacter = translationModule.translations[ELEMENTS.chooseLanguageMenu.value][characterClass];
        CHARACTER_INFO.classDescription = translationModule.translations[ELEMENTS.chooseLanguageMenu.value][characterClass + "_descr"];
        CHARACTER_INFO.rpgMode = rpgCheck;
        CHARACTER_INFO.nonMagicMode = nonMagicCheck;
        CHARACTER_INFO.ttsMode = ELEMENTS.ttsModeToggleSettings.checked;
        CHARACTER_INFO.campaign = translationModule.translations[ELEMENTS.chooseLanguageMenu.value][selectedCampaign];
        CHARACTER_INFO.campaignDescription = translationModule.translations[ELEMENTS.chooseLanguageMenu.value][selectedCampaign + "_desc"];

        const allowedKeys = getStatsList();
        const startStatValue = 1;
        Object.keys(characterStats)
            .filter(key => allowedKeys.includes(key))
            .forEach(s => characterStats[s] = startStatValue);

        races.stats[race]();
        classes[characterClass].addClassBonus();

        inventory = getStartInventory(characterClass, race);
        updateStatsWithoutGm();
       
        sendMessageToChat(translationModule.translations[ELEMENTS.chooseLanguageMenu.value]["game_starting_description"], 'system');
        sendMessageToChat(translationModule.translations[ELEMENTS.chooseLanguageMenu.value]["game_starting_donate"], 'system');
        sendMessageToChat(translationModule.translations[ELEMENTS.chooseLanguageMenu.value]["game_starting_discord"], 'system');

        hideAllModalWindows();
        showAllSettingsCollapsButtons();

        const startGameMessageId = translationModule.setPostApocalypticNewGameMessage(
            CHARACTER_INFO.name, CHARACTER_INFO.gender,
            CHARACTER_INFO.race, CHARACTER_INFO.raceDescription,
            CHARACTER_INFO.classOfCharacter, CHARACTER_INFO.classDescription,
            CHARACTER_INFO.campaign, CHARACTER_INFO.campaignDescription ?? ''
        );
        sendRequest(translationModule.translations[ELEMENTS.chooseLanguageMenu.value][startGameMessageId]);
        updateElements();
    }
}

ELEMENTS.myGameButton.onclick = function () {
    hideAllModalWindows();
    ELEMENTS.modalSetting.style.display = "block";   
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
            demon: () => { characterStats.dexterity += 1; characterStats.attractiveness += 2; characterStats.persuasion += 1; characterStats.wisdom -= 1; characterStats.luck -= 1 },
        };

        gameRaces[race]();
        inventory = getStartInventory(characterClass, race);

        const campaign = selectedCampaign == 'random'
            ? ELEMENTS.campaignSelect.options[Math.floor(Math.random() * ELEMENTS.campaignSelect.options.length)].text
            : selectedCampaign;
        CHARACTER_INFO.campaign = campaign;

        updateStatsWithoutGm();
        sendMessageToChat(translationModule.translations[ELEMENTS.chooseLanguageMenu.value]["game_starting_description"], 'system');
        sendMessageToChat(translationModule.translations[ELEMENTS.chooseLanguageMenu.value]["game_starting_donate"], 'system');
        sendMessageToChat(translationModule.translations[ELEMENTS.chooseLanguageMenu.value]["game_starting_discord"], 'system');

        hideAllModalWindows();
        showAllSettingsCollapsButtons();

        const messageId = translationModule.setShortNewGameMessage(name, gender, race, characterClass, selectedCampaign);
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

    function getElementValue(id) {
        return document.getElementById(id).value;
    }

    function getElementChecked(id) {
        return ELEMENTS[id].checked;
    }

    const elementIds = {
        name: 'character-name-my-game',
        characterDescription: 'character-description',
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

    if (CHARACTER_INFO.name && CHARACTER_INFO.gender && CHARACTER_INFO.race && CHARACTER_INFO.classOfCharacter && Object.values(characterStats).every(stat => stat !== '')) {
        CHARACTER_INFO.characterDescription = getElementValue(elementIds.characterDescription);
        CHARACTER_INFO.raceDescription = getElementValue(elementIds.raceDescription);
        CHARACTER_INFO.classDescription = getElementValue(elementIds.classDescription);

        experienceProcessing(Math.floor(getElementValue(elementIds.startExp)));
        updateStatsWithoutGm();
        sendMessageToChat(translationModule.translations[ELEMENTS.chooseLanguageMenu.value]["game_starting_description"], 'system');
        sendMessageToChat(translationModule.translations[ELEMENTS.chooseLanguageMenu.value]["game_starting_donate"], 'system');
        sendMessageToChat(translationModule.translations[ELEMENTS.chooseLanguageMenu.value]["game_starting_discord"], 'system');

        hideAllModalWindows();
        showAllSettingsCollapsButtons();

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

//Abort sending message.
ELEMENTS.cancelButton.addEventListener('click', () => {
    if (!confirmAction())
        return;

    controller.abort();
    controller = new AbortController();
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

    addMessageControllers(message, messageType, messageContainer);
    
    //Add element to chat.
    ELEMENTS.chatBox.appendChild(messageContainer);
    ELEMENTS.chatBox.scrollTop = ELEMENTS.chatBox.scrollHeight;
}

function addMessageControllers(message, messageType, messageContainer) {  
    if (messageType !== 'system') {
        const editButton = document.createElement('span');
        editButton.innerHTML = `<i class="uil uil-edit"></i>`;
        editButton.classList.add('message-edit-button');
        editButton.onclick = () => {
            editChatMessage(message, messageType, messageContainer);
        };
        messageContainer.insertBefore(editButton, messageContainer.firstChild);
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
}

function editChatMessage(message, messageType, messageContainer) {    
    const propertyName = 'Сообщение';
    const elementType = messageType == 'gm'
        ? 'Гейм Мастера'
        : 'пользователя';

    openDataEditor(
        propertyName,
        message,
        elementType,
        (newMessage) => {
            messageContainer.innerHTML = markdown(newMessage);
            addMessageControllers(newMessage, messageType, messageContainer);

            ELEMENTS.chatBox.scrollTop = ELEMENTS.chatBox.scrollHeight;
        }
    );
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
        characterStats.currentEnergy = characterStats.maxEnergy;
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
function logMessage(message, currentHealthChange, currentEnergyChange, moneyChange, expChange) {
    const messageContainer = document.createElement('div');

    messageContainer.classList.add('message', 'gm');
    messageContainer.innerHTML = markdown(message);

    const countTurn = document.createElement('span');
    countTurn.classList.add('message-turn-and-close-button');
    countTurn.textContent = `\n current turn token cost: ${turn == 0 ? '{"prompt_tokens":0,"completion_tokens":0,"total_tokens":0}' : tokenCostCurrent}\n current session token cost: ${JSON.stringify(tokenCostSum)}\n health change this turn: ${currentHealthChange} , energy change this turn: ${currentEnergyChange} , money change this turn: ${moneyChange} , XP change this turn: ${expChange} ;\n ${translationModule.translations[ELEMENTS.chooseLanguageMenu.value]["turn_log_name"]} #${turn} `;
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

function logThinkingMessage(message) {
    message = formatTaggedLog(message);

    ELEMENTS.thinkingLogBox.innerHTML = "";

    const messageContainer = document.createElement('div');
    messageContainer.classList.add('message', 'gm');
    messageContainer.innerHTML = markdown(message);

    const countTurn = document.createElement('span');
    countTurn.classList.add('message-turn-and-close-button');
    countTurn.textContent = `\n ${translationModule.translations[ELEMENTS.chooseLanguageMenu.value]["turn_log_name"]} #${turn} `;
    messageContainer.appendChild(countTurn);

    ELEMENTS.thinkingLogBox.appendChild(messageContainer);
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
        const excessItems = item.contents.slice(0, excessItemsCount);
        const excessItemNames = excessItems.map(excessItem => excessItem.name).join(", ");

        const messageId = translationModule.setConteinerItemsExceedCapacityMessage(item.name, excessItemsCount, excessItemNames);
        sendMessageToChat(translationModule.translations[ELEMENTS.chooseLanguageMenu.value][messageId], "system");

        item.contents.splice(0, excessItemsCount);
        inventory.unshift(...excessItems);

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
            const removedItem = item.contents.shift();
            excessItems.push(removedItem);
            excessVolume -= (removedItem.volume ?? 0);
        }

        if (excessItems.length > 0) {
            const excessItemNames = excessItems.map(excessItem => excessItem.name).join(", ");
            const messageId = translationModule.setContainerItemsExceedVolumeMessage(item.name, excessItemNames);
            sendMessageToChat(translationModule.translations[ELEMENTS.chooseLanguageMenu.value][messageId], "system");

            inventory.unshift(...excessItems);
            for (const excessedItem of excessItems) {
                excessedItem.contentsPath = null;
                updateContentsPathForNestedItems(excessedItem);
            }
        }
    }
}

function adjustInventoryContainerWeight(itemsArray, maxWeight, addedItems) {
    if (!itemsArray || maxWeight <= 0 || !addedItems)
        return;

    const removedItems = [];

    calculateParametersForItemsArray(itemsArray);
    let totalWeight = itemsArray.reduce((sum, item) => sum + item.weight, 0);

    for (let i = 0; i < addedItems.length && totalWeight > maxWeight; i++) {
        const itemToRemove = addedItems[i];
        const containerItems = getContainerContentsByPath(itemsArray, itemToRemove.contentsPath);

        const itemIndex = containerItems.findIndex(item =>
            item.name === itemToRemove.name &&
            item.originalWeight === itemToRemove.originalWeight
        );

        if (itemIndex !== -1) {
            containerItems.splice(itemIndex, 1);
            removedItems.push(itemToRemove);
            itemToRemove.removed = true;

            calculateParametersForItemsArray(itemsArray);
            totalWeight = itemsArray.reduce((sum, item) => sum + item.weight, 0);
        }
    }

    if (totalWeight > maxWeight) {
        const allItems = getAllItems(itemsArray)
            .filter(({ item }) => !item.isContainer);

        for (let i = 0; i < allItems.length && totalWeight > maxWeight; i++) {
            const { item, path } = allItems[i];
            const containerItems = getContainerContentsByPath(itemsArray, path);

            const itemIndex = containerItems.findIndex(containerItem =>
                containerItem.name === item.name &&
                containerItem.originalWeight === item.originalWeight
            );

            if (itemIndex !== -1) {
                const removedItem = containerItems.splice(itemIndex, 1)[0];
                removedItems.push(removedItem);

                calculateParametersForItemsArray(itemsArray);
                totalWeight = itemsArray.reduce((sum, item) => sum + item.weight, 0);
            }
        }
    }

    return {
        inventory: itemsArray,
        removedItems,
        totalWeight: totalWeight
    };
}

function adjustInventoryWeightAndRemoveNeeded(maxWeight, newItemsArray) {
    const adjustResult = adjustInventoryContainerWeight(inventory, maxWeight, newItemsArray);
    if (adjustResult.removedItems.length > 0) {
        inventoryBasket.unshift(...adjustResult.removedItems);
        const removedItemsText = adjustResult.removedItems.map(item => item.name).join(", ");
        sendMessageToChat(translationModule.translations[ELEMENTS.chooseLanguageMenu.value]["maximum-weight-exceeded-label"] + removedItemsText, 'system');
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

function increasePlayerStat(name, value, logs) {
    const key = getPlayerStatByName(name);
    if (!key)
        return;

    const statName = translationModule.translations[ELEMENTS.chooseLanguageMenu.value][key.toLowerCase()];

    const oldValue = characterStats[key];
    let newValue = characterStats[key] + value;
    if (newValue > characterStats.level)
        newValue = characterStats.level;

    if (oldValue >= newValue) {
        if (Array.isArray(logs)) {
            const errorMessageId = translationModule.setStatIncreaseForbiddenMessage(statName);
            logs.push(translationModule.translations[ELEMENTS.chooseLanguageMenu.value][errorMessageId]);
        }
        return;
    }

    characterStats[key] = newValue;
    const valueDifference = newValue - oldValue;

    const messageId = translationModule.setStatIncreasedMessage(statName, valueDifference);
    const message = translationModule.translations[ELEMENTS.chooseLanguageMenu.value][messageId];
    sendMessageToChat(message, 'system');
    updateStatsWithoutGm();
}

function decreasePlayerStat(name, value, logs) {
    const key = getPlayerStatByName(name);
    if (!key)
        return;

    const statName = translationModule.translations[ELEMENTS.chooseLanguageMenu.value][key.toLowerCase()];

    const oldValue = characterStats[key];
    let newValue = characterStats[key] - value;
    if (newValue < 0)
        newValue = 0;

    if (newValue >= oldValue) {
        if (Array.isArray(logs)) {
            const errorMessageId = translationModule.setStatDecreaseForbiddenMessage(statName);
            logs.push(translationModule.translations[ELEMENTS.chooseLanguageMenu.value][errorMessageId]);
        }
        return;
    }

    characterStats[key] = newValue;
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

function getPostApocalypticWorldRaces() {
    const racesStats = {
        human: () => {
            characterStats.persuasion += 1;
            characterStats.luck += 1;
        },
        superhuman: () => {
            characterStats.intelligence += 2;
            characterStats.wisdom += 1;
            characterStats.constitution -= 1;
        },
        infected: () => {
            characterStats.strength += 2;
            characterStats.constitution += 1;
            characterStats.intelligence -= 1;
        },
        ratman: () => {
            characterStats.dexterity += 2;
            characterStats.perception += 1;
            characterStats.attractiveness -= 1;
        },
        ghoul: () => {
            characterStats.constitution += 3;
            characterStats.speed += 1;
            characterStats.intelligence -= 1;
            characterStats.attractiveness -= 1;
        },
        mutant: () => {
            characterStats.strength += 1;
            characterStats.speed += 1;
            characterStats.perception += 1;
            characterStats.constitution -= 1;
        },
        supermutant: () => {
            characterStats.strength += 3;
            characterStats.constitution += 2;
            characterStats.intelligence -= 1;
            characterStats.wisdom -= 1;
            characterStats.perception -= 1;
        },
        cyborg: () => {
            characterStats.dexterity += 1;
            characterStats.perception += 2;
            characterStats.persuasion -= 1;
        },
        android: () => {
            characterStats.intelligence += 1;
            characterStats.attractiveness += 2;
            characterStats.constitution -= 1;
        },
        robot: () => {
            characterStats.strength += 1;
            characterStats.intelligence += 2;
            characterStats.persuasion -= 1;
        },
        gray: () => {
            characterStats.intelligence += 3;
            characterStats.dexterity -= 1;
        },
        alien: () => {
            characterStats.perception += 2;
            characterStats.luck += 1;
            characterStats.trade -= 1;
        },
        hybrid: () => {
            characterStats.attractiveness += 1;
            characterStats.persuasion += 1;
            characterStats.constitution -= 1;
            characterStats.strength -= 1;
            characterStats.speed += 2;
        },
        ancient: () => {
            characterStats.wisdom += 2;
            characterStats.intelligence += 1;
            characterStats.strength -= 1;
        },
    };

    const raceInventory = {
        human: 'survival_kit',
        superhuman: 'psionic_headband',
        infected: 'adrenaline_syringe',
        ratman: 'grappling_hook',
        ghoul: 'bone_blade',
        mutant: 'mutant_serum',
        supermutant: 'crude_bonehammer',
        cyborg: 'hacking_device',
        android: 'skin_repair_paste',
        robot: 'EMP_Generator',
        gray: 'communication_implant',
        alien: 'cloaking_device',
        hybrid: 'symbiotic_implant',
        ancient: 'ancient_artifact'
    };


    return {
        stats: racesStats,
        inventory: raceInventory
    };
}

function getPostApocalypticWorldClasses() {
    const classes = {
        hacker: {
            name: "hacker",
            addClassBonus: () => {
                characterStats.intelligence += 1;
            }
        },
        scout: {
            name: "scout",
            addClassBonus: () => {
                characterStats.perception += 1;
            }
        },
        bounty_hunter: {
            name: "bounty_hunter",
            addClassBonus: () => {
                characterStats.speed += 1;
            }
        },
        survivor: {
            name: "survivor",
            addClassBonus: () => {
                characterStats.constitution += 1;
            }
        },
        raider: {
            name: "raider",
            addClassBonus: () => {
                characterStats.strength += 1;
            }
        },
        bandit: {
            name: "bandit",
            addClassBonus: () => {
                characterStats.dexterity += 1;
            }
        },
        wanderer: {
            name: "wanderer",
            addClassBonus: () => {
                characterStats.luck += 1;
            }
        },
        veteran: {
            name: "veteran",
            addClassBonus: () => {
                characterStats.wisdom += 1;
            }
        },
        mercenary: {
            name: "mercenary",
            addClassBonus: () => {
                characterStats.dexterity += 1;
            }
        },
        stalker: {
            name: "stalker",
            addClassBonus: () => {
                characterStats.perception += 1;
            }
        },
        citizen: {
            name: "citizen",
            addClassBonus: () => {
                characterStats.trade += 1;
            }
        },
        vault_dweller: {
            name: "vault_dweller",
            addClassBonus: () => {
                characterStats.intelligence += 1;
            }
        },
        savage: {
            name: "savage",
            addClassBonus: () => {
                characterStats.strength += 1;
            }
        },
        soldier: {
            name: "soldier",
            addClassBonus: () => {
                characterStats.constitution += 1;
            }
        },
        engineer: {
            name: "engineer",
            addClassBonus: () => {
                characterStats.intelligence += 1;
            }
        },
        medic: {
            name: "medic",
            addClassBonus: () => {
                characterStats.wisdom += 1;
            }
        },
        sniper: {
            name: "sniper",
            addClassBonus: () => {
                characterStats.dexterity += 1;
            }
        },
        virologist: {
            name: "virologist",
            addClassBonus: () => {
                characterStats.intelligence += 1;
            }
        },
        biotechnician: {
            name: "biotechnician",
            addClassBonus: () => {
                characterStats.wisdom += 1;
            }
        },
        reborn: {
            name: "reborn",
            addClassBonus: () => {
                characterStats.constitution += 1;
            }
        },
        xenomant: {
            name: "xenomant",
            addClassBonus: () => {
                characterStats.attractiveness += 1;
            }
        },
        psionic: {
            name: "psionic",
            addClassBonus: () => {
                characterStats.wisdom += 1;
            }
        },
        telekinetic: {
            name: "telekinetic",
            addClassBonus: () => {
                characterStats.speed += 1;
            }
        },
        telepath: {
            name: "telepath",
            addClassBonus: () => {
                characterStats.persuasion += 1;
            }
        },
        pyromancer: {
            name: "pyromancer",
            addClassBonus: () => {
                characterStats.luck += 1;
            }
        },
        cryomancer: {
            name: "cryomancer",
            addClassBonus: () => {
                characterStats.wisdom += 1;
            }
        },
        mechanized_soldier: {
            name: "mechanized_soldier",
            addClassBonus: () => {
                characterStats.strength += 1;
            }
        },
        mechanical_guardian: {
            name: "mechanical_guardian",
            addClassBonus: () => {
                characterStats.constitution += 1;
            }
        },
        cybernetic_assassin: {
            name: "cybernetic_assassin",
            addClassBonus: () => {
                characterStats.dexterity += 1;
            }
        },
        cybernetic_spy: {
            name: "cybernetic_spy",
            addClassBonus: () => {
                characterStats.persuasion += 1;
            }
        },
        precursor_agent: {
            name: "precursor_agent",
            addClassBonus: () => {
                characterStats.speed += 1;
            }
        },
        precursor_scientist: {
            name: "precursor_scientist",
            addClassBonus: () => {
                characterStats.intelligence += 1;
            }
        },
        precursor_soldier: {
            name: "precursor_soldier",
            addClassBonus: () => {
                characterStats.strength += 1;
            }
        },
        alien_scout: {
            name: "alien_scout",
            addClassBonus: () => {
                characterStats.perception += 1;
            }
        },
        space_architect: {
            name: "space_architect",
            addClassBonus: () => {
                characterStats.intelligence += 1;
            }
        },
        galactic_explorer: {
            name: "galactic_explorer",
            addClassBonus: () => {
                characterStats.luck += 1;
            }
        },
        alien_soldier: {
            name: "alien_soldier",
            addClassBonus: () => {
                characterStats.constitution += 1;
            }
        }
    };

    for (const classId in classes) {
        classes[classId].descriptionId = classes[classId].name + "_descr";
        classes[classId].inventory = [];
        for (let i = 1; i <= 4; i++)
            classes[classId].inventory.push(`${classId}_${i}`);
    }

    return classes;
}

function getPostApocalypticWorldCampaignIds() {
    return [
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
        "sky_pirates", "mutant_island", "lost_colony"
    ];
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
    updateInventoryList(ELEMENTS.inventoryBasket, inventoryBasket);

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
        itemSpan.textContent = item.count > 1 ? `${item.name} (${item.count})` : item.name;
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

    if (currentItem.removed) {
        ELEMENTS.inventoryInfoDelete.classList.add(displayNoneClass);
        ELEMENTS.inventoryInfoRestore.classList.remove(displayNoneClass);
    } else {
        ELEMENTS.inventoryInfoDelete.classList.remove(displayNoneClass);
        ELEMENTS.inventoryInfoRestore.classList.add(displayNoneClass);
    }

    processDurability();
    processCustomProperties();
    processResource();
    renderListElements(currentItem.bonuses, ELEMENTS.inventoryInfoBonuses, "inventory-info-bonuses-list", "inventory-bonuses-label");
    processContainerProperties();

    ELEMENTS.inventoryInfoDelete.onclick = function () {
        if (!confirmAction())
            return;

        deleteItem(currentItem, itemsArray, true, true);
        ELEMENTS.inventoryInfo.style.display = 'none';
    };

    ELEMENTS.inventoryInfoRestore.onclick = function () {
        moveItem(currentItem, itemsArray, inventory, true, true);

        ELEMENTS.inventoryInfo.style.display = 'none';
    }

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
        if (!Array.isArray(currentItem.customProperties) || currentItem.customProperties.length == 0) {
            ELEMENTS.inventoryInfoCustomProperties.innerHTML = '';
            ELEMENTS.inventoryInfoCustomProperties.classList.add(displayNoneClass);
            return;
        }

        const elementsHtml = currentItem.customProperties.map(property => {
            const nameAndValue = `${property.name}: ${property.value}`;
            const description = property.description ? markdown(property.description) : '';
            return `
                <span>${nameAndValue}</span>
		        <ul>
			        <li>${description}</li>
		        </ul>
            `;
        }).join('');

        ELEMENTS.inventoryInfoCustomProperties.innerHTML = elementsHtml;
        if (!currentItem.customProperties)
            ELEMENTS.inventoryInfoCustomProperties.classList.add(displayNoneClass);
        else
            ELEMENTS.inventoryInfoCustomProperties.classList.remove(displayNoneClass);
    }

    function processResource() {
        const resourceLabel = translationModule.translations[ELEMENTS.chooseLanguageMenu.value]["inventory-resource-label"];
        let resourceValue = `${currentItem.resource ?? '-'}/${currentItem.maximumResource ?? '-'}`;
        if (currentItem.resourceType)
            resourceValue += ` (${currentItem.resourceType})`;

        ELEMENTS.inventoryInfoResource.innerHTML = `${resourceLabel}: ${resourceValue}`;
        if (!currentItem.resourceType)
            ELEMENTS.inventoryInfoResource.classList.add(displayNoneClass);
        else
            ELEMENTS.inventoryInfoResource.classList.remove(displayNoneClass);
    }

    function processContainerProperties() {
        if (currentItem.isContainer && currentItem.capacity > 0 && currentItem.volume > 0) {
            ELEMENTS.inventoryContainerOpen.classList.remove(displayNoneClass);
            ELEMENTS.inventoryInfoCapacity.classList.remove(displayNoneClass);
            ELEMENTS.inventoryInfoWeightReduction.classList.remove(displayNoneClass);
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

            const weightReductionLabel = translationModule.translations[ELEMENTS.chooseLanguageMenu.value]["weight-reduction-label"];
            ELEMENTS.inventoryInfoWeightReduction.innerHTML = `${weightReductionLabel}: ${currentItem.weightReduction}%`;
        } else {
            ELEMENTS.inventoryContainerOpen.classList.add(displayNoneClass);
            ELEMENTS.inventoryInfoCapacity.classList.add(displayNoneClass);
            ELEMENTS.inventoryInfoCount.classList.remove(displayNoneClass);
            ELEMENTS.inventoryInfoContentsDescription.classList.add(displayNoneClass);
            ELEMENTS.inventoryInfoAvailableCapacity.classList.add(displayNoneClass);
            ELEMENTS.inventoryInfoAvailableVolume.classList.add(displayNoneClass);
            ELEMENTS.inventoryInfoWeightReduction.classList.add(displayNoneClass);
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

function setOrChangeItemResource(name, contentsPath, resource, maximumResource, resourceType, existedId) {
    if (!name)
        return;

    const data = getItemByNameAndPath(name, contentsPath, inventory, null, existedId);
    if (!data?.item)
        return;

    const item = data.item;
    item.resource = resource > 0 ? resource : 0;
    if (item.resource > maximumResource)
        item.resource = maximumResource;

    item.maximumResource = maximumResource;
    item.resourceType = resourceType;

    const inventoryArray = data.parentItemsArray ?? inventory;
    const existingItemIndex = data.index;
    inventoryArray.splice(existingItemIndex, 1);

    if (item.isConsumption && item.resource == 0 && !item.isContainer) {
        item.count -= 1;
        item.resource = maximumResource;
    }

    if (item.count > 0)
        inventoryArray.unshift(item);

    updateInventoryInfoWindows(item, inventoryArray, inventoryArray);
}

function addInventoryItem(itemParams) {
    const data = getItemByNameAndPath(itemParams.name, itemParams.contentsPath, inventory, null, itemParams.existedId);

    const inventoryArray = data?.parentItemsArray ?? inventory;
    const existingItemIndex = data?.index ?? -1;

    if (data?.item && existingItemIndex > -1) {
        const item = data.item;
        //If the item already exists, move it to the top of the list.
        if (itemParams.quality)
            item.quality = itemParams.quality;
        if (itemParams.durability != "")
            item.durability = itemParams.durability;
        if (itemParams.image_prompt)
            item.image_prompt = itemParams.image_prompt;

        let handleCount = true;
        if (Array.isArray(itemParams.resources)) {
            const resourceData = itemParams.resources.find(resourceData => resourceData.name == item.name);
            if (resourceData)
                handleCount = false;
        }

        //we don't want to remove item, just because AI don't understand the difference between resources and count
        if (handleCount)
            item.count = itemParams.count;

        item.price = itemParams.price;
        item.isConsumption = itemParams.isConsumption;
        item.bonuses = itemParams.bonuses;
        item.description = itemParams.description;
        item.customProperties = itemParams.customProperties;
        item.isContainer = itemParams.isContainer;
        item.weight = itemParams.weight;
        item.originalWeight = itemParams.weight;
        item.weightReduction = itemParams.weightReduction;
        item.volume = itemParams.volume;
        item.containerWeight = itemParams.containerWeight;
        item.capacity = itemParams.capacity;
        if (item.isContainer && !Array.isArray(item.contents))
            item.contents = [];

        inventoryArray.splice(existingItemIndex, 1);
        if (item.count > 0)
            inventoryArray.unshift(item);
    } else {
        if (itemParams.count == 0)
            return;
        
        //Add a new item to the top of the list.
        inventoryArray.unshift({
            name: itemParams.name,
            description: itemParams.description,
            count: itemParams.count,
            quality: itemParams.quality,
            price: itemParams.price,
            isConsumption: itemParams.isConsumption,
            durability: itemParams.durability,
            bonuses: itemParams.bonuses,
            customProperties: itemParams.customProperties,
            image_prompt: itemParams.image_prompt,
            contentsPath: itemParams.contentsPath,
            isContainer: itemParams.isContainer,
            weight: itemParams.weight,
            volume: itemParams.volume,
            containerWeight: itemParams.containerWeight,
            capacity: itemParams.capacity,
            contents: itemParams.isContainer ? [] : undefined,
            weightReduction: itemParams.weightReduction
        });
        itemParams.newItem = inventoryArray[0];
    }

    const nestedItem = isNestedItem(itemParams);
    if (nestedItem && ELEMENTS.inventoryContainerInfo.style.display === 'block') {
        const parentContainerId = ELEMENTS.inventoryContainerInfoId.value;
        if (data && parentContainerId === data.parentId)
            updateInventoryList(ELEMENTS.inventoryContainerInfoItems, inventoryArray);
    }

    if (ELEMENTS.inventoryInfo.style.display !== 'block')
        return;

    const id = ELEMENTS.inventoryInfoId.value;
    if (inventoryArray.find(item => item.id === id))
        showInventoryInfo(id, inventoryArray);
    else if (data && nestedItem && data.parentId === id) {
        const parentName = itemParams.contentsPath.slice(-1)[0];
        const parentContentsPath = itemParams.contentsPath.slice(0, itemParams.contentsPath.length - 1);
        const parentItemData = getItemByNameAndPath(parentName, parentContentsPath, null, null, data.parentId);
        if (parentItemData.item)
            showInventoryInfo(parentItemData.item.id, parentItemData.parentItemsArray ?? inventory);
    }
}

function generateInventoryItemContextMenu(currentItem, parentItemsArray) {
    ELEMENTS.inventoryItemContextMenu.innerHTML = '';
    ELEMENTS.inventoryItemContextMenuName.innerHTML = currentItem.name;

    generateMenuItem(translationModule.translations[ELEMENTS.chooseLanguageMenu.value]["inventory-item-inspect"], () => showInventoryInfo(currentItem.id, parentItemsArray));
    if (currentItem.contentsPath || currentItem.removed)
        generateMenuItem(translationModule.translations[ELEMENTS.chooseLanguageMenu.value]["move-to-inventory"], () => moveItem(currentItem, parentItemsArray, inventory, true, !!currentItem.removed));
    if (!currentItem.removed) {
        generateMenuItem(translationModule.translations[ELEMENTS.chooseLanguageMenu.value]["throw-item"], () => deleteItemWithConfirmation(currentItem, parentItemsArray, true));

        for (const item of parentItemsArray) {
            const isContainer = item.isContainer && Array.isArray(item.contents);
            const isCapacityCheckPassed = isContainer
                ? item.capacity >= (item.contents?.length ?? 0) + 1
                : false;
            const isVolumeCheckPassed = isContainer
                ? item.volume >= (item.contentsVolume ?? 0) + currentItem.volume
                : false;

            if (item.id != currentItem.id
                && isContainer
                && isCapacityCheckPassed
                && isVolumeCheckPassed)
                generateMenuItem(translationModule.translations[ELEMENTS.chooseLanguageMenu.value]["place-item-to"] + item.name, () => moveItem(currentItem, parentItemsArray, item.contents, true));
        }
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

function removeUnusedItems() {
    inventory = inventory.filter(item => {
        return item && item.description !== undefined && item.description !== null && item.description !== "";
    });
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
    if (!name)
        return;

    const skills = isActive ? activeSkills : passiveSkills;
    const index = skills.findIndex(skill => skill.name === name);
    if (index == -1)
        return;

    skills.splice(index, 1);

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
    ELEMENTS.npcInfoAge.innerHTML = `${ageLabel}: ${currentNPC.age > 0 ? currentNPC.age : '-'}`;
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
        if (isUniqDiaryNote(existingJournal, lastNote)) {
            existingJournal.notes += `\n\n${lastNote}`;
            npcJournals.splice(existingJournalIndex, 1);
            npcJournals.unshift(existingJournal);
        }
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
        if (isUniqDiaryNote(existingDiary, lastNote)) {
            existingDiary.notes += `\n\n${lastNote}`;
            npcMemoryDiaries.splice(existingDiaryIndex, 1);
            npcMemoryDiaries.unshift(existingDiary);
        }
    } else {
        const notes = lastNote;
        npcMemoryDiaries.unshift({ name, notes });
    }

    showNpcInfoIfNeeded();
}

function isUniqDiaryNote(diary, note) {
    if (!diary || !diary.notes)
        return true;

    const parsedNote = getTextAfterHashDot(note);
    if (parsedNote === null) {
        //let's assume that the format of data is different. Ok...
        return true;
    }

    return !diary.notes.includes(parsedNote);

    function getTextAfterHashDot(text) {
        if (!text?.startsWith('#'))
            return null;

        const dotIndex = text.indexOf('.');

        if (dotIndex === -1)
            return null;

        return text.substring(dotIndex + 1).trim();
    }
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
    const reward = currentQuest.reward ? markdown(`${rewardLabel}: ${currentQuest.reward}`) : '-';
    const punishmentLabel = translationModule.translations[ELEMENTS.chooseLanguageMenu.value]["quest-punishment-label"];
    const punishment = currentQuest.punishmentForFailingQuest ? markdown(`${punishmentLabel}: ${currentQuest.punishmentForFailingQuest}`) : '-';
    const questGiverLabel = translationModule.translations[ELEMENTS.chooseLanguageMenu.value]["quest-info-questGiver-label"];
    const questGiver = currentQuest.questGiver ? markdown(`${questGiverLabel}: ${currentQuest.questGiver}`) : '-';

    ELEMENTS.questInfoId.value = id;
    ELEMENTS.questInfoName.innerHTML = `${markdown(currentQuest.name)}`;
    ELEMENTS.questInfoQuestGiver.innerHTML = questGiver;
    ELEMENTS.questInfoDescription.innerHTML = description;
    ELEMENTS.questInfoDetails.innerHTML = details;
    ELEMENTS.questInfoReward.innerHTML = reward;
    ELEMENTS.questInfoPunishment.innerHTML = punishment;

    renderDescriptionElement(currentQuest.questBackground, ELEMENTS.questInfoQuestBackground);
    renderDescriptionElement(currentQuest.description, ELEMENTS.questInfoDescription);
    renderListElements(currentQuest.purposes, ELEMENTS.questInfoPurposes, "quest-info-purposes-list", "quest-purposes-label");

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
function addQuest(questParams) {
    if (!questParams.name)
        return;

    const existingQuestIndex = quests.findIndex(quest => quest.name === questParams.name);

    if (existingQuestIndex !== -1) {
        //If the quest already exists, move it to the top of the list.
        const existingQuest = quests[existingQuestIndex];
        existingQuest.questGiver = questParams.questGiver;
        existingQuest.questBackground = questParams.questBackground;
        existingQuest.description = questParams.description;
        existingQuest.purposes = questParams.purposes;
        existingQuest.reward = questParams.reward;
        existingQuest.punishmentForFailingQuest = questParams.punishmentForFailingQuest;
        existingQuest.details = questParams.details;
        existingQuest.isCompleted = questParams.isCompleted;

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
        quests.unshift({
            name: questParams.name,
            questGiver: questParams.questGiver,
            questBackground: questParams.questBackground,
            description: questParams.description,
            purposes: questParams.purposes,
            reward: questParams.reward,
            punishmentForFailingQuest: questParams.punishmentForFailingQuest,
            details: questParams.details,
            isCompleted: questParams.isCompleted
        });
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

//---- WEIGHT ----//
function updateWeight() {
    const maxWeight = calculateMaxWeight();
    const totalWeight = calculateTotalInventoryWeight();

    ELEMENTS.totalWeight.innerHTML = totalWeight.toFixed(2);    
    ELEMENTS.maxWeight.innerHTML = maxWeight.toFixed(2);
    ELEMENTS.criticalWeight.innerHTML = (maxWeight + criticalExcessWeight).toFixed(2);

    if (totalWeight <= maxWeight)
        ELEMENTS.weightStatus.innerHTML = translationModule.translations[ELEMENTS.chooseLanguageMenu.value]["weight-status-value-normal"];
    else
        ELEMENTS.weightStatus.innerHTML = translationModule.translations[ELEMENTS.chooseLanguageMenu.value]["weight-status-value-bad"];    
}

//---- DATA EDITOR ----//
function openDataEditor(propertyName, currentValue, elementType, onChangeCallback, additionalData = null) {
    ELEMENTS.dataEditorInfoTitle.textContent = `Редактирование: ${propertyName} (${elementType})`;
    ELEMENTS.dataEditorInfoContent.innerHTML = '';

    const textarea = document.createElement('textarea');
    ELEMENTS.dataEditorInfoContent.appendChild(textarea);    
    const easyMDE = initializeEasyMDE(textarea, currentValue, null, callback);

    function callback(easyMDE, event) {
        const newValue = easyMDE.value();
        onChangeCallback(newValue, additionalData);
        ELEMENTS.dataEditorInfo.style.display = 'none';
    }

    ELEMENTS.dataEditorInfoApplyButton.onclick = () => callback(easyMDE);  
     
    ELEMENTS.dataEditorInfoClose.onclick = () => {
        ELEMENTS.dataEditorInfo.style.display = 'none'
    };

    ELEMENTS.dataEditorInfo.style.display = 'block';
}

function simulateEscapeKeyPress() {
    const escapeEvent = new KeyboardEvent('keydown', {
        key: 'Escape',
        code: 'Escape',
        keyCode: 27,
        which: 27,
        bubbles: true,
        cancelable: true
    });
    document.dispatchEvent(escapeEvent);
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

function showAllSettingsCollapsButtons() {
    if (ELEMENTS.modalSetting.style.display == "none" && ELEMENTS.modal.style.display == "none" && ELEMENTS.postApocalypticModal.style.display == "none") {
        ELEMENTS.collapseButtonMain.style.display = "flex";
        ELEMENTS.collapseButtonInputArea.style.display = "flex";
    }

    ELEMENTS.collapseButtonSettings.style.display = "flex";
}

function hideAllSettingsCollapsButtons() {
    ELEMENTS.collapseButtonMain.style.display = "none";
    ELEMENTS.collapseButtonInputArea.style.display = "none";    
    ELEMENTS.collapseButtonSettings.style.display = "none";
}

function hideAllModalWindows() {
    ELEMENTS.modalSetting.style.display = "none";
    ELEMENTS.modal.style.display = "none";
    ELEMENTS.postApocalypticModal.style.display = "none";
}

function initializeTooltipController(buttonId, tooltipId) {
    let showTimeout = null;
    let hideTimeout = null;
    let isOverButton = false;
    let isOverTooltip = false;

    const button = document.getElementById(buttonId);
    const tooltip = document.getElementById(tooltipId);

    if (!button || !tooltip)
        return;    
    
    function handleShowTooltip() {
        if (hideTimeout) {
            clearTimeout(hideTimeout);
            hideTimeout = null;
        }

        showTimeout = setTimeout(() => {
            tooltip.style.opacity = 0;
            tooltip.style.display = 'block';

            FloatingUIDOM.computePosition(button, tooltip, {
                middleware: [
                    FloatingUIDOM.autoPlacement(),
                    FloatingUIDOM.offset(10),
                    FloatingUIDOM.shift({ padding: 10 }),
                ],
            }).then(({ x, y }) => {
                Object.assign(tooltip.style, {
                    left: `${x}px`,
                    top: `${y}px`,
                    opacity: 1
                });
            });
        }, 300);
    }

    function handleHideTooltip() {
        if (isOverButton || isOverTooltip)
            return;        

        if (showTimeout) {
            clearTimeout(showTimeout);
            showTimeout = null;
        }

        hideTimeout = setTimeout(() => {
            if (!isOverButton && !isOverTooltip) {
                tooltip.style.opacity = 0;
                setTimeout(() => {
                    if (!isOverButton && !isOverTooltip)
                        tooltip.style.display = 'none';
                    else
                        tooltip.style.opacity = 1;                    
                }, 200);
            }
        }, 400);
    }

    const isTouchDevice = 'ontouchstart' in window ||
        navigator.maxTouchPoints > 0 ||
        navigator.msMaxTouchPoints > 0;

    if (isTouchDevice) {
        button.addEventListener('touchstart', (e) => {
            e.preventDefault();
            isOverButton = true;
            handleShowTooltip();
        });

        document.addEventListener('touchstart', (e) => {
            if (!button.contains(e.target) && !tooltip.contains(e.target)) {
                isOverButton = false;
                isOverTooltip = false;
                handleHideTooltip();
            }
        });

        tooltip.addEventListener('touchstart', (e) => {
            e.preventDefault();
            isOverTooltip = true;
        });
    } else {
        button.addEventListener('mouseenter', () => {
            isOverButton = true;
            handleShowTooltip();
        });

        button.addEventListener('mouseleave', () => {
            isOverButton = false;
            handleHideTooltip();
        });

        tooltip.style.pointerEvents = 'auto';

        tooltip.addEventListener('mouseenter', () => {
            isOverTooltip = true;
        });

        tooltip.addEventListener('mouseleave', () => {
            isOverTooltip = false;
            handleHideTooltip();
        });
    }
}

function initializeGamePanelsController() {   
    const playerInfo = document.querySelector('.player-info');
    const settingsPanel = document.getElementById('settings-info');
    const actionButtons = document.querySelector('.action-buttons');
    const collapsed = 'collapsed';
    
    let isMainCollapsed = false;
    let isSettingsCollapsed = false;
    let isInputAreaCollapsed = false;

    settingsPanel.classList.add('settings-panel', collapsed);

    ELEMENTS.collapseButtonMain.addEventListener('click', function () {
        if (ELEMENTS.collapseButtonMain.style.display == 'none')
            return;

        isMainCollapsed = !isMainCollapsed;
        ELEMENTS.collapseButtonMain.classList.toggle(collapsed);
        playerInfo.classList.toggle(collapsed);
        const chatArea = document.querySelector(".chat-area");
        chatArea.style.flex = isMainCollapsed
            ? "auto"
            : getChatAreaFlex(playerInfo.style.width);
    });

    ELEMENTS.collapseButtonSettings.addEventListener('click', function () {
        if (ELEMENTS.collapseButtonSettings.style.display == 'none')
            return;

        isSettingsCollapsed = !isSettingsCollapsed;
        ELEMENTS.collapseButtonSettings.classList.toggle(collapsed);
        settingsPanel.classList.toggle(collapsed);
    });

    ELEMENTS.collapseButtonInputArea.addEventListener('click', function () {
        if (ELEMENTS.collapseButtonInputArea.style.display == 'none')
            return;

        isInputAreaCollapsed = !isInputAreaCollapsed;
        ELEMENTS.collapseButtonInputArea.classList.toggle(collapsed);
        actionButtons.classList.toggle(collapsed);
        if (actionButtons.classList.contains(collapsed))
            setTimeout(() => actionButtons.style.display = 'none', 250);
        else
            actionButtons.style.display = 'flex';        
    });
}

function initializeNpcInfoTabs() {
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
}

function initializeEasyMDE(element, initialValue, options, callback) {
    const defaultToolbar = ["bold", "italic", "heading", "|", "quote", "unordered-list", "ordered-list", "|", "link", "image", "|", "code", "table", "|", "undo", "redo", "|", "fullscreen", "side-by-side", "|", "guide"];

    const easyMDE = new EasyMDE({
        element: element,
        initialValue: initialValue,
        placeholder: options?.placeholder ?? "",
        autofocus: options?.autofocus ?? true,
        spellChecker: options?.spellChecker ?? false,
        minHeight: options?.minHeight,
        toolbar: options?.toolbar ?? defaultToolbar        
    });

    const codeMirror = easyMDE.codemirror;

    if (callback) {
        codeMirror.on("keydown", function (cm, event) {
            if (event.key === 'Enter' && !event.shiftKey) {
                if (typeof callback === 'function')
                    callback(easyMDE, event);
                if (codeMirror.getOption("fullScreen"))
                    simulateEscapeKeyPress();
            }
        });
    }

    codeMirror.on("refresh", () => {
        if (codeMirror.getOption("fullScreen"))
            hideAllSettingsCollapsButtons();
        else
            showAllSettingsCollapsButtons();
    });

    return easyMDE;
}

function destroyEasyMDE(containerElement) {
    if (!containerElement)
        return;    

    let easyMDEContainer = containerElement.querySelector(".EasyMDEContainer");
    if (easyMDEContainer)
        easyMDEContainer.remove();    
}

function initializeUserInputEditor() {    
    destroyEasyMDE(ELEMENTS.userInputContainer);

    const options = {
        placeholder: translationModule.translations[ELEMENTS.chooseLanguageMenu.value]["user-input"],
        minHeight: "40px"
    };
   
    const easyMDE = initializeEasyMDE(ELEMENTS.userInput, "", options, enterButtonCallback);      
    const codeMirror = easyMDE.codemirror;

    ELEMENTS.sendButton.onclick = () => {
        const value = getValue(easyMDE);
        sendRequest(value);
    };
    
    window.getUserInputValue = () => {
        return getValue(easyMDE);
    }

    window.clearUserInputValue = () => {
        codeMirror.setValue('');
    }

    function getValue(easyMDE) {
        return easyMDE.value().trim();
    }

    function enterButtonCallback(easyMDE, event) {
        const value = getValue(easyMDE);
        sendRequest(value);
        event.preventDefault();
    }
}

function initializeGameInstructionEditors() {
    destroyEasyMDE(ELEMENTS.myRulesBox);
    destroyEasyMDE(ELEMENTS.systemInstructionsBox);

    const optionsRules = {
        placeholder: translationModule.translations[ELEMENTS.chooseLanguageMenu.value]["my-rules"]
    };
 
    const optionsSystemInstructions = {
        placeholder: translationModule.translations[ELEMENTS.chooseLanguageMenu.value]["system-instructions"]
    };

    ELEMENTS.systemInstructionsEasyMDE = initializeEasyMDE(ELEMENTS.systemInstructions, "", optionsSystemInstructions);
    ELEMENTS.myRulesEasyMDE = initializeEasyMDE(ELEMENTS.myRules, "", optionsRules);
}

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
    const boxIds = ['my-rules-box', 'log-box', 'thinking-log-box', 'lag-box', 'settings-box', 'system-instructions-box'];

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

function toggleThinkingLogVisibility() {
    toggleVisibility(['thinking-log-box']);
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
            sanitized[key] = sanitizeString(obj[key]).replace(/\\n/g, '\n').replace(/ +/g, " ");
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
        ELEMENTS.apiKey4.value = value;
    }
    ELEMENTS.apiKey.addEventListener("input", onInputApiKeyFunction);
    ELEMENTS.apiKey2.addEventListener("input", onInputApiKeyFunction);
    ELEMENTS.apiKey3.addEventListener("input", onInputApiKeyFunction);
    ELEMENTS.apiKey4.addEventListener("input", onInputApiKeyFunction);

    const onInputModelFunction = function (e) {
        const value = e.target.value;
        ELEMENTS.aiModel.value = value;
        ELEMENTS.aiModel2.value = value;
        ELEMENTS.aiModel3.value = value;
        ELEMENTS.aiModel4.value = value;

    }
    ELEMENTS.aiModel.addEventListener("input", onInputModelFunction);
    ELEMENTS.aiModel2.addEventListener("input", onInputModelFunction);
    ELEMENTS.aiModel3.addEventListener("input", onInputModelFunction);
    ELEMENTS.aiModel4.addEventListener("input", onInputModelFunction);

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
    ELEMENTS.apiKey4.style.display = 'block';

    setTimeout(function () {
        ELEMENTS.apiKey.style.display = 'none';
        ELEMENTS.apiKey2.style.display = 'none';
        ELEMENTS.apiKey3.style.display = 'none';
        ELEMENTS.apiKey4.style.display = 'none';
    }, 10000);
}

function checkGameSource() {
    const currentURL = window.location.href;
    isGameStartedFromWebsim = currentURL.includes("websim.ai");

    if (isGameStartedFromWebsim) {
        translationModule.setProviderTooltip();
        translationModule.updateCurrentLanguage();
        return;
    }

    translationModule.setProviderTooltipForGithubVersion();
    translationModule.updateCurrentLanguage();

    document.getElementById('ai-websim').remove();
    document.getElementById('ai-websim2').remove();
    document.getElementById('ai-websim3').remove();
    document.getElementById('ai-websim4').remove();
    document.getElementById('ai-websim-label').remove();
    document.getElementById('ai-websim2-label').remove();
    document.getElementById('ai-websim3-label').remove();
    document.getElementById('ai-websim4-label').remove();
    document.getElementById('ai-websim-br').remove();
    document.getElementById('ai-websim2-br').remove();
    document.getElementById('ai-websim3-br').remove();
    document.getElementById('ai-websim4-br').remove();

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
    return ELEMENTS.maxGmSymbols.value ? Number(ELEMENTS.maxGmSymbols.value) : 20000;
}

//for example, for 3 rolls of 2d10: dieSides - 10, dicesCount - 2, rollsCount - 3
function getDiceResultsArray(dicesCount, dieSides, rollsCount) {
    const results = [];

    for (let rollNumber = 0; rollNumber < rollsCount; rollNumber++) {
        let diceResult = 0;
        for (diceIndex = 0; diceIndex < dicesCount; diceIndex++)
            diceResult += getRandomNumber(1, dieSides);

        results.push(diceResult);
    }

    return results;
}

function getRandomNumber(min, max) {
    if (!Random)
        return getRandomNumberInternal(min, max);

    const engine = Random.engines.mt19937();
    engine.autoSeed();
    const random = new Random(engine);

    return random.integer(min, max);
}

function getRandomNumberInternal(min, max) {
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
    if (itemFirst?.isContainer && itemSecond?.isContainer) return 0;
    if (itemFirst?.isContainer && !itemSecond?.isContainer) return -1;
    if (!itemFirst?.isContainer && itemSecond?.isContainer) return 1;
    return 0;
}

function findItemById(id, itemsArray, expectedName) {
    if (!Array.isArray(itemsArray))
        return null;
    
    // Search in current array
    let result = null;
    const index = itemsArray.findIndex(item => item.id === id);
    if (index > -1) {
        const item = itemsArray[index];
        // Only return if name matches or no name check required
        if (!expectedName || item.name === expectedName) {
            return {
                parentId: null,
                parentItemsArray: itemsArray,
                index: index,
                item: item
            };
        }
    }

    // Search recursively in containers
    for (let i = 0; i < itemsArray.length; i++) {
        const container = itemsArray[i];
        if (container.isContainer && Array.isArray(container.contents)) {
            result = findItemById(id, container.contents, expectedName);
            if (result) {
                // If we found the item, update its parentId
                result.parentId = container.id;
                return result;
            }
        }
    }

    return null;
}


//name - item name to find
//contentsPath - the array of strings, which represents the path to item. Fx, if item is stored in container, then it could be something like ['top level container name', 'second level container name', 'parent container name']. If not stored in container, it should be null.
//parentItemsArray - array of items where need to find the item (container inventory)
//parentId - id of parent container
function getItemByNameAndPath(name, contentsPath = null, parentItemsArray = null, parentId = null, fallbackId = null) {
    parentItemsArray ??= inventory; //find in global inventory as fallback
    if (!Array.isArray(parentItemsArray))
        return null;
    if (contentsPath && !Array.isArray(contentsPath))
        return null;

    // Try to find by path first
    if (!contentsPath || contentsPath.length === 0) {
        const result = getItemAndIndex(name, parentItemsArray, parentId);
        if (result?.item || !fallbackId)
            return result;

    } else {
        const path = contentsPath[0];
        const remainingPath = contentsPath.slice(1);
        const containerData = getItemAndIndex(path, parentItemsArray, parentId);
        if (containerData?.item && containerData.item.isContainer) {
            containerData.item.contents ??= [];
            const result = getItemByNameAndPath(
                name,
                remainingPath,
                containerData.item.contents,
                containerData.item.id,
                fallbackId
            );

            if (result?.item || !fallbackId)
                return result;
        }
    }

    // If path search failed and we have fallbackId, try to find by ID
    if (fallbackId)
        return findItemById(fallbackId, inventory, name);    

    return null;

    function getItemAndIndex(name, itemsArray, parentId) {
        const index = itemsArray?.findIndex(item => item.name === name);
        const item = index > -1 ? itemsArray[index] : null;
        return {
            parentId: parentId,
            parentItemsArray: itemsArray,
            index: index,
            item: item,
        };
    }
}

function getContainerContentsByPath(itemsArray, contentsPath) {
    if (!contentsPath || contentsPath.length === 0)
        return itemsArray;

    const [currentContainer, ...remainingPath] = contentsPath;
    const container = itemsArray.find(item => item.name === currentContainer && item.isContainer);

    if (!container || !container.contents)
        return [];

    return getContainerContentsByPath(container.contents, remainingPath);
}

function getAllItems(items, path = []) {
    let result = [];
    for (const item of items) {
        const itemPath = [...path];
        if (item.isContainer && item.contents) {
            result.push({ item, path: itemPath });
            result = result.concat(getAllItems(item.contents, [...itemPath, item.name]));
        } else {
            result.push({ item, path: itemPath });
        }
    }
    return result;
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

function getCalculatedItemParameters(item, parentWeightReduction = 0) {
    if (item.weight === undefined)
        item.weight = 0;

    if (item.originalWeight === undefined)
        item.originalWeight = item.weight;

    if (parentWeightReduction > 0)
        item.weight = item.originalWeight * (1 - parentWeightReduction / 100);
    else
        item.weight = item.originalWeight;

    let totalWeight = item.weight;
    let contentsItemCount = undefined;
    let contentsVolume = undefined;

    if (item.isContainer && Array.isArray(item.contents)) {
        contentsItemCount = item.contents.length;
        contentsVolume = 0;

        const currentWeightReduction = item.weightReduction ?? 0;

        for (const nestedItem of item.contents) {
            const params = getCalculatedItemParameters(nestedItem, currentWeightReduction);
            totalWeight += params.weight;

            const nestedItemVolume = nestedItem.volume ?? 0;
            contentsVolume += nestedItemVolume;
        }
    }

    return {
        weight: totalWeight,
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
            const nameLabel = item.count > 1 ? `${item.name} (${item.count})` : item.name;
            result += `${indent}- ${nameLabel}\n`;
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

function findAndMoveItem(name, contentsPath, movedItemId, contentsPathOfDestinationContainer, destinationContainerName, destinationContainerId) {
    const dataItemToMove = getItemByNameAndPath(name, contentsPath, null, null, movedItemId);

    if (!dataItemToMove?.item)
        return;

    const currentItem = dataItemToMove.item;
    const originalItemsArray = dataItemToMove.parentItemsArray ?? inventory;

    let destinationItemsArray = inventory;
    if (destinationContainerName) {
        const containerData = getItemByNameAndPath(destinationContainerName, contentsPathOfDestinationContainer, null, null, destinationContainerId);
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

function moveItem(currentItem, originalItemsArray, destinationItemsArray, recalculate, moveFromBasket) {
    if (!currentItem || !Array.isArray(originalItemsArray) || !Array.isArray(destinationItemsArray))
        return;

    const removeIndex = originalItemsArray.findIndex(item => currentItem.id === item.id);
    if (removeIndex < 0)
        return;

    originalItemsArray.splice(removeIndex, 1);
    destinationItemsArray.push(currentItem);

    if (recalculate) {
        if (moveFromBasket) {
            delete currentItem.removed;
            updateInventoryList(ELEMENTS.inventoryBasket, inventoryBasket);
        }
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

        const maxWeight = calculateMaxWeight();
        adjustInventoryWeightAndRemoveNeeded(maxWeight + criticalExcessWeight, [currentItem]);
        updateWeight();
        updateInventoryList(ELEMENTS.inventoryBasket, inventoryBasket);        
    }

    updateInventoryInfoWindows(currentItem, originalItemsArray, destinationItemsArray);
}

function findAndDeleteItem(name, contentsPath, existedId) {
    const data = getItemByNameAndPath(name, contentsPath, null, null, existedId);

    if (!data?.item)
        return;

    deleteItem(data.item, data.parentItemsArray, false);
}

function deleteItemWithConfirmation(currentItem, itemsArray, recalculate) {
    if (!confirmAction())
        return;

    deleteItem(currentItem, itemsArray, recalculate, true);
}

function deleteItem(currentItem, itemsArray, recalculate, pushToBasket) {
    if (!currentItem || !itemsArray)
        return;

    const removeIndex = itemsArray.findIndex(item => currentItem.id === item.id);
    if (removeIndex > -1)
        itemsArray.splice(removeIndex, 1);

    if (recalculate) {
        calculateParametersForItemsArray(inventory);
        updateWeight();
    }

    if (pushToBasket) {
        currentItem.removed = true;
        inventoryBasket.push(currentItem);
        updateInventoryList(ELEMENTS.inventoryBasket, inventoryBasket);
    }

    updateInventoryInfoWindows(currentItem, itemsArray, itemsArray);
}

function getHtmlListItems(element) {
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

function setContentHeight(element) {
    element.style.height = 'auto';
    element.style.height = (element.scrollHeight) + 'px';    
}

function convertToBoolean(value) {
    return value?.toString()?.toLowerCase() === "true" ? true : false;
}

function calculateMaxWeight() {
    return characterStats.level * 3 + 20;
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
    const myRules = ELEMENTS.myRulesEasyMDE.value();
    const systemInstructions = ELEMENTS.systemInstructionsEasyMDE.value();

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
        ELEMENTS.myRulesEasyMDE.value(loadedCharacterInfo.myRules ? loadedCharacterInfo.myRules : '');
        ELEMENTS.systemInstructionsEasyMDE.value(loadedCharacterInfo.systemInstructions ? loadedCharacterInfo.systemInstructions : '');
        ELEMENTS.ttsModeToggleSettings.checked = loadedCharacterInfo.CHARACTER_INFO.ttsMode;

        console.log("Game loaded successfully");
    } catch (error) {
        console.error("Error loading game:", error);
    }

    updateElements();
    updateStatsWithoutGm();

    hideAllModalWindows();
    showAllSettingsCollapsButtons();

    lastUserMessage = `${translationModule.translations[ELEMENTS.chooseLanguageMenu.value]["message_after_load"]}`;
    sendRequest(lastUserMessage);
}

//save your own rules
function saveMyRules() {
    const myRules = ELEMENTS.myRulesEasyMDE.value();

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
            ELEMENTS.myRulesEasyMDE.value(sanitizeString(e.target.result));
        }
    }
    input.click();
}

function saveSystemInstructions() {
    const fileName = prompt("Enter the file name:", "my_system_instructions");
    if (!fileName)
        return;

    let blob = new Blob([ELEMENTS.systemInstructionsEasyMDE.value()], { type: "text/plain" });
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
            ELEMENTS.systemInstructionsEasyMDE.value(sanitizeString(e.target.result));
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

    data.systemInstructions = ELEMENTS.systemInstructionsEasyMDE.value();
    data.worldDescription = ELEMENTS.myRulesEasyMDE.value();

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

                ELEMENTS.systemInstructionsEasyMDE.value(loadedSettings.systemInstructions || '');
                ELEMENTS.myRulesEasyMDE.value(loadedSettings.worldDescription || '');
                               
                const checkboxes = [
                    { id: "non-magic-mode", key: "nonMagicMode" },
                    { id: "rpg-mode2", key: "rpgMode" },
                    { id: "tts-mode2", key: "ttsMode" }
                ];

                checkboxes.forEach(box => {
                    document.getElementById(box.id).checked = Boolean(loadedSettings[box.key]);
                });

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

function formatTaggedLog(logText) {
    let result = '';
    let buffer = '';
    let depth = 0;

    for (let i = 0; i < logText.length; i++) {
        const char = logText[i];
        buffer += char;

        if (char === '[' && logText[i + 1] !== '/') {
            // Add newline and indentation before opening tag
            result += '\n' + '  '.repeat(depth) + buffer;
            buffer = '';
            depth++;
        } else if (char === ']') {
            if (buffer) {
                // Add newline and indentation after tag content
                if (depth > 0) depth--;
                result += buffer + '\n' + '  '.repeat(depth);
                buffer = '';
            }
        }
    }

    result += buffer;
    result = result.replace(/\n+/g, '\n').trim();

    const regex = new RegExp(`[~]`, 'g');
    return result.replace(regex, "");
}

//----------------------------------------------------------------API------------------------------------------------------------------------------/

async function sendRequest(currentMessage) {
    if (currentMessage) {
        if (turn !== 0) {
            sendMessageToChat(currentMessage, 'user');
            clearUserInputValue();
        } else {
            ++turn;
        }       

        //General
        const myPrompt = ELEMENTS.myRulesEasyMDE.value();
        let totalWeight = calculateTotalInventoryWeight() ?? 0;

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
        const inventoryTemplate = `{
            'name': 'full_name_of_item',
            'count': 'count_of_this_item',
            'quality': 'item_quality',
            'price': 'price_of_item_for_sold',
            'description': 'item_description',
            'bonuses': ['array_of_item_bonuses'],
            durability': 'durability_of_the_item_in_percents',
            'customProperties': 'custom_properties_for_player_data',
            'image_prompt': 'prompt_to_generate_item_image',
            'isContainer': 'shows_if_item_is_container_to_store_items',
            'capacity': 'capacity_of_container',
            'contentsPath': ['path_to_item_inside_container'],
            'weight': 'weight_of_item',
            'volume': 'volume_of_item',
            'containerWeight': 'weight_of_container_without_items',
            'weightReduction': 'weight_reduction_of_container_contents',
            'isConsumption' : 'whether_item_intended_for_consumption',
            'existedId': 'existed_id_of_item_from_Context'
        }`;
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

        //Stats
        const statsList = JSON.stringify(getStatsList());
        const maxWeight = calculateMaxWeight();

        //Dice (2d10)
        const dices2d10 = getDiceResultsArray(2, 10, 4);     
        const playerCritDice = getRandomNumber(1, 20);

        //Response template
        let responseTemplate = `{ 
            "inventoryItemsData": [] ,
            "removeInventoryItems": [] ,
            "moveInventoryItems": [] ,
            "inventoryItemsResources": [] ,
            "locationData": { "name": "" , "difficulty": "" , "lastEventsDescription": "", "description": "", "image_prompt": "" } ,
            "multipliers": [] ,
            ${!ELEMENTS.usePreResponse.checked ? `"response": "" ,` : ``}            
            "moneyChange": ,
            "currentEnergyChange": ,
            "currentHealthChange": ,
            "experienceGained": ,
            "actions": [] ,
            "image_prompt": "" ,
            ${!ELEMENTS.usePreResponse.checked ? `"items_and_stat_calculations": [] ,` : ``}
            "newPassiveSkills": [] ,
            "newActiveSkills": [] ,
            "removePassiveSkills": [] ,
            "removeActiveSkills": [] ,
            "statsIncreased": [] ,
            "statsDecreased": [] ,
            "calculatedWeightData": {}`;
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

        let prompt = `[ First, study the entire instruction and context thoroughly. Remember all the information you've learned. Then follow the instruction step by step from the beginning. 

### Instruction ###

Please, Let's think step by step:
[
#0 Carefully study and remember the super instructions, which are more priority in case of contradictions than other parts of the instructions: [ ${myPrompt} ] .

#1 Prepare a response template in JSON format and remember its structure. Any value of any key in the JSON response must start only with the single symbol " and end with the single symbol " .  Any value of any key in the JSON response must not start with the single symbol « and must not end with the single symbol » . Important note: as the response is formed, only the values of the keys in the response template should be supplemented, without replacing them or changing their value types. The final answer should be presented entirely in JSON format. All keys and string values in the final answer must be enclosed in double quotes. Response template: ${responseTemplate} . This is not information about the current state of the game - it is just a template structure for the correct formatting of the your entire answer structure.
#1.1. To the 'items_and_stat_calculations' include array of strings, each of which represents one complete message about various calculations for logs. Fill it only when you see the direct instruction to output something into 'items_and_stat_calculations'.
#1.1.1. Group messages for 'items_and_stat_calculations' logically. Try not form many small messages. Instead, write one large message for it. 
#1.1.2. Each string of 'items_and_stat_calculations' array should be formatted in a nice, human-readable style using markdown. Focus on making your log messages as readable as possible.

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
#2.8.6. Knowledge-based: Represents a broad area of expertise, enabling creation of related active skills. Examples: 'Fire Magic Knowledge', 'Knife Fighting Mastery'. For example, 'Fire Magic Knowledge' could lead to active skills like 'Fireball' or 'Fire Rain'. Such passive skills are like a book from which the player draws information to create related active skills.
#2.8.7. Stat-based: Directly enhances one of these player stats: ${statsList}. Example: 'Strong Physique' grants +1 to constitution. 
#2.8.8. Improvements-based: Gives the player other important benefits. ]
#2.8.9. To the value of 'type' key, you need to write the type to which the passive skill belongs. It should be one of: [ 'Knowledge-based', 'Stat-based', 'Improvements-based' ] . 
#2.8.10. If the generated passive skill is knowledge-based, then note in the description that player can create new active skills based on this passive skill.
#2.8.11. If the generated passive skill is stat-based, fill the value of key 'playerStatBonus' with a string in corresponding format: '+{stat bonus numeric value} {player stat}'. Like '+1 constitution'. You should use as stats only these characteristics: ${statsList} . Translate {player stat} label to user's chosen language.
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
#3.5.1. Knowledge-based: Represents a broad area of expertise, enabling creation of related active skills. Examples: 'Fire Magic Knowledge', 'Knife Fighting Mastery'. For example, 'Fire Magic Knowledge' could lead to active skills like 'Fireball' or 'Fire Rain'. Such passive skills are like a book from which the player draws information to create related active skills.
#3.5.2. Stat-based: Directly enhances one of these player stats: ${statsList}. Example: 'Strong Physique' grants +1 to constitution. 
#3.5.3. Improvements-based: Gives the player other important benefits. ]
#3.6. To the value of 'type' key, you need to write the type to which the passive skill belongs. It should be one of: [ 'Knowledge-based', 'Stat-based', 'Improvements-based' ] . 
#3.7. If the generated passive skill is knowledge-based, then note in the description that player can create new active skills based on this passive skill.
#3.8. If the generated passive skill is stat-based, fill the value of key 'playerStatBonus' with a string in corresponding format: '+{stat bonus numeric value} {player stat}'. Like '+1 constitution'. You should use as stats only these characteristics: ${statsList} . Translate {player stat} label to user's chosen language.
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

#3.14. You need to calculate the player character's weight related data to help game system making the checks on server-side. To do this: [
#3.14.1. Include to the response the key 'calculatedWeightData', value of which is player character related weight data.
#3.14.2. Mandatory the format for 'calculatedWeightData' object: { 'additionalEnergyExpenditure': 'additional_energy_expenditure_due_to_weight_overload' } .
#3.14.3. To the value of 'additionalEnergyExpenditure' include the numeric value, which representing the additional energy expenditure due to weight overload.
#3.14.3.1. When a player character carries too much weight, they become overload. When a player character is overloaded, they lose more energy per turn than normal.
#3.14.3.2. This is the items weight of all items in player's inventory in the start of current turn. Let's call it CurrentTurnItemsWeight = ${totalWeight}.
#3.14.3.3. This is MaxWeight value, representing the maximum weight a player character can carry without becoming overloaded: MaxWeight = ${maxWeight}.
#3.14.3.4. If CurrentTurnItemsWeight > MaxWeight check is true, then player character is overloaded. Then follow this instruction: [
#3.14.3.4.1. Calculate difference between CurrentTurnItemsWeight and MaxWeight. Let's call it WeightOverload:
WeightOverload = CurrentTurnItemsWeight - MaxWeight
#3.14.3.4.2. Include to the 'additionalEnergyExpenditure' the value = WeightOverload * 2, which is energy costs that the player's character will additionally spend each turn.
#3.14.3.4.3. Note: The server will automatically calculate and account for additional energy consumption due to overload. The GM should not change 'currentEnergyChange' due to overload.
], otherwise: [
#3.14.3.5. Write to the 'additionalEnergyExpenditure' the null value.
] ]

#3.15. This is group of instructions which are called WeightCheck. Follow these instructions when you see the direct command to run WeightCheck: [
#3.15.1. This is MaxWeight value, representing the maximum weight a player character can carry without becoming overloaded: MaxWeight = ${maxWeight}.
#3.15.2. This is the items weight of all items in player's inventory in the start of current turn. Let's call it CurrentTurnItemsWeight = ${totalWeight}.
#3.15.3. Remember the sum of item weights of new items, which you already calculated before current check and added to the player's inventory. Let's call it NewItemsCalculatedWeight.
#3.15.4. Calculate TotalWeight property using this formula: TotalWeight = CurrentTurnItemsWeight + NewItemsCalculatedWeight + NewItemWeight, where
• NewItemWeight - the weight of new item, which player is trying to receive.
#3.15.5. This is the critical weight that the character can carry. Let's call it CriticalWeight = MaxWeight + ${criticalExcessWeight} .
#3.15.5.1. Information for understanding: MaxWeight - determines the weight that the character can carry without being overloaded, and CriticalWeight is the weight that the character can lift at all.
#3.15.6. Make the final check using this formula: CriticalWeight > TotalWeight .
#3.15.7. Return the boolean result of check: true if CriticalWeight > TotalWeight, and false otherwise. 
#3.15.7.1. This check is mandatory and its result has priority over the result of any other skill check. Even a critical success on another check cannot override a failed weight check.
#3.15.8. Mandatory output the calculation and result of check to 'items_and_stat_calculations'.
]

#4  If one of these conditions are true: [
- The player receives an item (receives means: to take in hand, put on wear, or place in pockets, backpack or bag) in current turn.
- For each item in the player's inventory in the current turn, find an item with the same name in the Context. If such an item is found, compare the values of its properties ['bonuses', 'description, 'quality', 'count', 'price', 'durability', 'customProperties', 'isContainer', 'capacity', 'weight' ] with the current values. Pay attention to every little thing, every insignificant detail. The rule returns 'true' if at least one difference in the properties is found. If there is no item with the same name in the Context (i.e., the item is new), the rule is not applied to this item and continues checking the rest.
], then strictly follow the instructions: [ Let's think step by step : [ 
#4.1. Include to the response the 'inventoryItemsData' key, the value of which is the array of objects, and each object of the array represents the inventory item information.
#4.2. Mandatory the format for each object of 'inventoryItemsData' array: ${inventoryTemplate} . 
#4.3. Include to the 'inventoryItemsData' only new items or items which data were changed. It's important to note, that this array only represents the data about changes and new items, and not the information about all player's inventory.
#4.4. If player receives the new item, then: [
#4.4.0. Make a WeightCheck for the item. Generate the weight before do the check. If the result of WeightCheck is true, then go to the next point. If the result is false, then mandatory skip any actions with current item (loop continue operator), and go to next one.
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
#4.7. To the 'count' set the numeric value (type of value: integer), that describes the count of current item.
#4.8. The value 'bonuses' is an array of strings, each of which represents the inventory item bonus description.
#4.8.1. Each bonus can be: [
- An interesting effect (choose one of the following): [
   • The bonus to skills of the player.
   • New active skill that item gives to player.
   • The interesting and rare capability of item, but without numerical bonus representation'.
   • If an item's 'isConsumption' property is true, then the bonus could restore health or energy when consumed, if it makes logical sense to do so. For example, food, water, medicines, magic potions, and so on could restore health or energy. It's mandatory for such bonuses to have a numerical value, for example, '+15 to health when consumed' or '+20 to energy when consumed'.
] . It's forbidden to use another effect types. ${CHARACTER_INFO.nonMagicMode ? '(Important: in this world, magic is absent. There can be no magical, mystical, or unrealistic items. Effects should be as much realistic, as possible' : ''}
- The permanent bonus to one of player stats. You must mandatory add this bonus to specified player stat. It's forbidden use 'random characteristic' as a bonus. It's forbidden to use stats that are not in the list: ${statsList} .
- The bonus to one of player stats, but only for certain situations. The bonus is not permanent and used only if described conditions are met. It's forbidden to use stats that are not in the list: ${statsList} .
]
#4.8.2. It's forbidden to numerically describe damage or defensive properties for a bonus effect. Never do that!
#4.8.3. If the bonus has a numerical value, it must be related to one of the following: [
    - The player's existing stats. It's forbidden to use stats that are not in the list: ${statsList} .
    - Skills of the player.
    - For 'isConsumption' items only: bonus to health or energy. It's important to have enough consumption items related with energy bonuses in the game, as energy is spent quite quickly and needs to be restored.
] .
#4.8.4. If it is the new item, then also follow the previous instructions to determinate the item bonuses.
#4.8.5. If 'isConsumption' value of key of item is true and item doesn't have other bonuses: [
    - If the item is food, medicine or similar, then mandatory add to item the bonus to restore health or energy.
]
#4.9. To the value of the 'image_prompt' key, include an extensive detailed prompt for generating an image that will illustrate the item based on it description (use maximum 150 characters). It is necessary to form it only in English.
#4.10. To the value of the 'price' key include the approximate price of the current item, which will be used by the game if it is sold.
#4.11. To the value of the 'durability' key include the item durability as a percentage value, where 100% - maximum durability. Durability that equals to 0% means that item is broken and its 'count' must be decreased.
#4.11.1. Use the durability rule to determinate the item durability: [ ${itemsBreakRulesTemplate} ] .
#4.11.2. Based on the item's durability rule, set the value of durability by your choice.
#4.12. The value of 'customProperties' should be filled only if you have direct instrustions to fill it. Do not fill it otherwise.
#4.12.1. The value of 'customProperties' is an array of objects, and each object representing information about custom property data.
#4.12.2. Mandatory the format for each object of 'customProperties' array: { 'name': 'custom_property_name', 'value': 'custom_property_value', 'description': 'custom_property_description' } . 
#4.13. To the value of the 'contentsPath' include the array of strings. Each string is a container name inside which the item is located. It is important to use the item names in exactly the same format that you would see in the player's inventory, known from Context.
#4.13.1. For example, if item located in the container2, and container2 is located in container1, then the 'contentsPath' will include these two names, started from top level of container (in the example case, ['container1', 'container2']). Use this rule to set 'contentsPath' for each item.
#4.13.2. If the item is only in the player's inventory and not included in a container, set 'contentsPath' to null.
#4.14. To the value of the 'isContainer' key include boolean value, represents if the item is a container or not.
#4.14.1. A container is any item that can store other items inside it.
#4.14.2. To understand, that item is container, you should mandatory make a check for possibility to open an item. If item could be opened and has a space inside it, than it is a container.
#4.15. If item is container, then use these container rules: [
#4.15.1 Mandatory set 'isContainer' to true.
#4.15.2. The description of an item (container) should not include information about its contents.
Example 1 (incorrect): 'This is an emergency first aid kit. Inside are bandages and iodine.' The description of this container explicitly states that bandages and iodine are inside. This is an incorrect description.
Example 2 (correct): 'This is an emergency first aid kit.'
#4.15.3. Include to the 'capacity' value of key the numeric value (type of value: integer), representing the number of items the container can hold.
#4.15.4. It's forbidden to add more items to a container than its 'capacity' allows.
]
#4.16. If 'isContainer' is false, then set the 'capacity' value to null.
#4.17. To the value of 'weight' key include the numeric value (type of value: double), representing the weight of item. Each item has the weight. Unit of weight: kilogram.
#4.17.1. If the item is a container, you need to set additionally 'containerWeight' value of key. This is the weight of container without items inside it.
#4.17.2. An item may weigh significantly less than it should, or weigh nothing at all ('weight' value is equal to 0) if it is an item with the appropriate special properties. It's forbidden to set weight of item to 0 if there are no logical reasons for it.
#4.17.3. It's forbidden to set the item's weight to 0 if the player is overweight and can't take the item. Just don't allow the player to take the item in this case.
#4.17.4. The weight of an item must be logically justified.
#4.18. To the value of 'volume' key include the numeric value (type of value: double), representing the volume of item. Each item has the volume. Unit of volume: dm³.
#4.19. Add a boolean value to the 'isConsumption' key, representing whether the current item is intended for consumption. Examples of such items: bandages, plasters, duct tape, food, cigarettes, torches, etc.
#4.20. If 'isContainer' is true and 'isConsumption' is false, then mandatory include the numeric (type of value: double, must be non-negative) property 'weightReduction'. 
#4.20.1. Value of the 'weightReduction' - is a percentages by which the weight of the container contents is reduced. For example: 50 - is a 50%, 5 - is a 5%. Based on this value, game system will calculate the final weight of container contents items automatically.
#4.20.2. Magic items or high technology items give a higher percentage of weight reduction, normal items a smaller one.
#4.20.3. The value of 'weightReduction' must be at least 1% for containers. For non-containers, this value should be null.
#4.21. The value of 'existedId' key is GUID string represents id of item. Look at the 'id' property of item in the Context and write it to 'existedId'.
#4.21.1. Fill the value of 'existedId' key only if it's an item that exists in the Context. Otherwise, leave the 'existedId' value of key empty. It's forbidden to fill it if you cannot find the item in the Context.
${turn > 1 ? `
#4.22. If this is a new item, and player specifies in a request the name of an item that is a container (e.g. 'backpack', 'bag', 'box', etc.) and asks to put new item into it, then it should be interpreted as the action of putting item into the container in the player's inventory, and not simply into the player's inventory.
` : ``}
#4.23. In the player inventory known from Context, you could see the 'contents' property in the container's properties. It's only for Context and formed automatically, so don't include this property to 'inventoryItemsData'.
#4.24. It's forbidden to use 'inventoryItemsData' array to manipulate the 'contentsPath' of items. Use 'moveInventoryItems' if you need to move item somewhere.
#4.25. Mandatory record information about this event in 'items_and_stat_calculations'.
${turn == 1 ? `
#4.26. Starting Game Item Generation Rules.
#4.26.1. General Item Generation Guidelines:

• Generate properties for all predefined items the player starts with
• Maintain balance - avoid giving unfair advantages through starting gear
• Limit bonuses to 0-1 per item unless specifically requested by player
• Keep original names of predefined items - do not modify them
• Adjust item weights if necessary to prevent player overload

#4.26.2. Container Item Generation (MANDATORY):
#4.26.2.1. Container Fill Requirements:

• Every container in starting inventory MUST be filled with items
• Number of items must be between 1 and container's 'capacity' value
• Total volume of items inside MUST NOT exceed container's volume
• Items must logically fit the container's purpose and description

#4.26.2.2. Container Analysis Process:

- Read container's 'description' carefully
- Note container's 'capacity' and 'volume' values
- Check if description suggests specific item types
- Generate appropriate items based on:
    • Container's purpose (backpack vs. potion pouch)
    • Container's size and volume
    • Container's description hints
    • Character's probable needs

#4.26.2.3. Item Selection Guidelines:

Choose items that make logical sense for the container.
Examples:
• Backpack: travel supplies, tools, clothing
• Potion pouch: potions, herbs, medical supplies
• Tool belt: working tools, repair items
• Food bag: rations, water, preserved foods
• Quiver: arrows, bolts, throwing weapons

#4.26.2.4. Volume Management:

• Calculate total available volume in container
• Track volume of each added item
• Ensure total item volume stays under container's limit
• Consider item stacking where appropriate
• Leave some free space for future items

#4.26.2.5. Common Mistakes to Avoid:

• DO NOT leave containers empty
• DO NOT exceed container's volume
• DO NOT ignore container's description
• DO NOT add items that wouldn't logically fit
• DO NOT add valuable/powerful items unless specified

#4.26.2.6. Example Process:

Container: "Leather backpack (capacity: 8, volume: 30 dm³)
Description: A worn traveler's backpack"
Appropriate fill:

1x Bedroll (volume: 8 dm³) - rolled tightly
2x Trail rations (volume: 2 dm³ each) - compact dried food
1x Waterskin (volume: 5 dm³) - when filled
1x Tinderbox (volume: 0.2 dm³) - small box
1x Rope, 15m (volume: 3 dm³) - coiled
1x Spare shirt (volume: 1 dm³) - folded
1x Basic tools (volume: 2 dm³) - in cloth wrap
Total items: 8 (within capacity: 8)
Total volume: 23.2 dm³ (within volume: 30 dm³)

#4.26.3. Final Checks:

• Verify all containers have been filled
• Note, that first aid kit is also container and must be filled
• Confirm items fit container volumes
• Ensure total weight is manageable
• Validate items match container purposes
• Check that item count respects capacity limits

#4.26.4. Resource Dependencies (MANDATORY):
#4.26.4.1. Resource Check Process:

For EACH generated item, check if it requires resources to function
If resources are required, MANDATORY add them to inventory
Resources must be in logical and usable counts.

#4.26.4.2. Common Resource Dependencies:

A) Weapons and Ammunition:
Firearms MUST have ammunition:
• Pistols: usually 10 rounds
• Rifles: 20-30 rounds
• Shotguns: 12-24 shells
• Quiver: 10-20 arrows
• [and similar weapon-ammo pairs]

B) Liquid Containers:
Water containers MUST have water amount specified:
• Canteen: 8-10 drinks
• Water bottle: 4-6 drinks
• Waterskin: 6-8 drinks
• Flask: 3-4 drinks
• [and similar]

Other liquid containers:
• Potion bottles: Specify doses
• Fuel canisters: Specify remaining fuel
• Oil lamps: Specify oil amount
• [and similar]

C) Power-Dependent Items:
Electronic devices MUST have:
• Batteries installed (if required)
• Charge level specified

Powered tools:
• Fuel amount for gas tools
• Battery charge for electric tools

D) Consumable Resources:
Medical supplies:
• Bandages: Specify number of uses
• Medicine: Specify doses
• [and similar]

Tools:
• Lighters: Specify fuel amount
• Torches: Specify uses count
• [and similar]

#4.26.4.3. Final Resource Verification (MANDATORY):
• Check EACH item for resource dependencies
• Verify ALL required resources are included
• Confirm resource counts are logical
• Note all resource amounts in item descriptions

#4.26.4.4. Common Mistakes to Avoid:
• DO NOT generate weapons without ammunition
• DO NOT add powered devices without power sources
• DO NOT forget to specify resource counts
` : ''}
#4.27. Double quotes cannot be used inside values, as this interferes with parsing your answer into JSON. Use guillemet quotes («») inside JSON values if needed. Use double quotes at the start and at the end of keys and values.
] ], otherwise, then: [ 
#4.28. Do not include 'inventoryItemsData' key to the response.
]

#5 If any of these conditions are true: [
- Some inventory items were moved from a container in the player's inventory to another place in the player's inventory.
- Some inventory items were moved to a container in the player's inventory from another place in the player's inventory.
], then strictly follow the instructions: [ Let's think step by step : [ 
#5.1. Mandatory include to the response the key 'moveInventoryItems'.
#5.2. The value of 'moveInventoryItems' is an array of object, each of which represents the information about item to move.
#5.3. Mandatory the format for each object of 'moveInventoryItems' array: { 'name': 'item_name_to_move', 'contentsPath': ['path_to_item_inside_containers'], 'movedItemId': 'id_of_moved_item_in_the_Context', 'contentsPathOfDestinationContainer': ['path_to_destination_container_inside_containers'], 'destinationContainerName': 'container_name_where_item_will_be_moved', 'destinationContainerId': 'id_of_destination_container_or_null', 'isContainer': 'shows_whether_the_moved_item_is_container_or_not' } .
#5.3.1. To the value of 'name' key include the item name to move. It's important to use the item name in exactly the same format that you would see in the player's inventory, known from Context.
#5.3.2. To the value of the 'contentsPath' include the array of strings. Each string is a container name inside which the item to move is located. It is important to use the item names in exactly the same format that you would see in the player's inventory, known from Context.
#5.3.2.1. For example, if item located in the container2, and container2 is located in container1, then the 'contentsPath' will include these two names, started from top level of container (in the example case, ['container1', 'container2']).
#5.3.2.2. If the item which is needed to move is not located in the container, then set 'contentsPath' to null.
#5.3.3. The value of the 'movedItemId' is GUID string represents id of moved item. Look at the 'id' property of item in the Context and write it to 'movedItemId'.
#5.3.3.1. Fill the value of 'movedItemId' key only if it's an item that exists in the Context. Otherwise, leave the 'movedItemId' value of key empty. It's forbidden to fill it if you cannot find the item in the Context.
#5.3.4. To the value of the 'contentsPathOfDestinationContainer' include the array of strings, that describes the contentsPath for destination container. Each string is a container name inside which the destination container is located. It is important to use the item names in exactly the same format that you would see in the player's inventory, known from Context.
#5.3.4.1. For example, if destination container is located in the container2, and container2 is located in container1, then the 'contentsPathOfDestinationContainer' will include these two names, started from top level of container (in the example case, ['container1', 'container2']).
#5.3.4.2. If the destination container is not located in the container, then set 'contentsPathOfDestinationContainer' to null.
#5.3.5. The value of 'destinationContainerName' is a string that contains the name of the container into which the item is directly moved.
#5.3.5.1. If the item is not moved to the container, then set 'destinationContainerName' to null.
#5.3.5.2. It is important to use the same container names as they appear in the player's inventory, known from the Context.
#5.3.6. The value of the 'destinationContainerId' is GUID string represents id of destination container. Look at the 'id' property of destination container in the Context and write it to 'destinationContainerId'.
#5.3.6.1. Fill the value of 'destinationContainerId' key only if it's an item that exists in the Context. Otherwise, leave the 'destinationContainerId' value of key empty. It's forbidden to fill it if you cannot find the item in the Context.
#5.4. To the value of 'isContainer' key include the boolean value, that indicates whether the item being moved is a container or not.
#5.4.1. It's mandatory to set to 'isContainer' the same value, like in the item with same name known from Context. 
#5.5. If container is moved, then include to 'moveInventoryItems' only container, without its contents, because the contents of container will be moved to a new place automatically by game system.
#5.6. The order in which you add items to the 'moveInventoryItems' array is important. It must be logically correct. For example, if the player says to put these items in a container, and then move the container to a new location, you must add the items in exactly that order. This is important for the system to process the result.
#5.7. Mandatory record information about this event in 'items_and_stat_calculations'.
] ]

#6 If this condition is true: [
- Some inventory items were removed from player inventory (not moved, but removed).
], then strictly follow the instructions: [ Let's think step by step : [ 
#6.1. Mandatory include to the response the key 'removeInventoryItems'.
#6.2. The value of 'removeInventoryItems' is an array of object, each of which represents the information about item to remove.
#6.3. Mandatory the format for each object of 'removeInventoryItems' array: { 'name': 'item_name_to_remove', 'contentsPath': ['path_to_item_inside_container'], 'existedId': 'existed_id_of_item_from_Context', 'isContainer': 'shows_whether_the_removed_item_is_container_or_not' } .
#6.3.1. To the value of 'name' key include the item name to remove. It's important to use the item name in exactly the same format that you would see in the player's inventory, known from Context.
#6.3.2. To the value of the 'contentsPath' include the array of strings. Each string is a container name inside which the item to remove is located. It is important to use the item names in exactly the same format that you would see in the player's inventory, known from Context.
#6.3.2.1. For example, if item located in the container2, and container2 is located in container1, then the 'contentsPath' will include these two names, started from top level of container (in the example case, ['container1', 'container2']).
#6.3.2.2. If the item which is needed to remove is not located in the container, then set 'contentsPath' to null.
#6.3.3. The value of 'existedId' key is GUID string represents id of item. Look at the 'id' property of item in the Context and write it to 'existedId'.
#6.3.3.1. Fill the value of 'existedId' key only if it's an item that exists in the Context. Otherwise, leave the 'existedId' value of key empty. It's forbidden to fill it if you cannot find the item in the Context.
#6.4. To the value of 'isContainer' key include the boolean value, that indicates whether the item being removed is a container or not.
#6.4.1. It's mandatory to set to 'isContainer' the same value, like in the item with same name known from Context. 
#6.5. If container is removed, then include to 'removeInventoryItems' only container, without its contents, because the contents of container will be removed automatically by game system.
#6.6. Mandatory record information about this event in 'items_and_stat_calculations'.
] ]

#7 Item resources rules.
#7.1. The inventory item has a resource, if one of these conditions is true: [
- It has expendable charges or units contained within an item. It could be ammunition (e.g. bullets inside the gun, or arrows inside the quiver). It could also be the battery charge value, or magic staff mana value, or number of milliliters in a bottle, etc.
- The item is intended for consumption. Examples: bandages, plasters, duct tape, food, cigarettes, torches, etc. It also marked in the 'isConsumption' property of items.
] . Let's call it ResourceCheck.
#7.1.1. It's mandatory to pay attention to every little thing, every insignificant detail. If you think that an item may have a resource, but you are not sure about it, or doubt the necessity, then mandatory return 'true' as the result of ResourceCheck.
#7.1.2. Resource and count relationship rules: [
- Resource represents the number of uses/charges WITHIN a single item unit.
- Count represents the number of separate item units.
- When resource is depleted (reaches 0), the system will automatically handle any necessary count adjustments.
- It is strictly forbidden to manually adjust count when handling resource changes.
]
#7.2. Select the inventory items based on the following instructions: [
- Look at all items, which player have received in current turn. Select all such items, for which ResourceCheck returns 'true'.
- Look at the player's inventory in the Context. For each item in the inventory, which doesn't have 'resource' property, do the ResourceCheck. Select all such items, for which ResourceCheck returns 'true'.
- Look at the player's inventory in the Context. For each item in the inventory, compare the values of its properties ['resource', 'maximumResource, 'resourceType'] with the current resource values. Pay attention to every little thing, every insignificant detail. Select all items, for which at least one difference in the properties is found.
]. Let's call them ItemsToUpdateResource.
#7.3. For each item in the ItemsToUpdateResource, strictly follow the instructions: [ Let's think step by step : [
#7.3.1. Mandatory include to the response the key 'inventoryItemsResources'.
#7.3.2. The value of 'inventoryItemsResources' is an array of objects, each of which represents the information about changes in item resources.
#7.3.3. Mandatory the format for each object of 'inventoryItemsResources' array: { 'name': 'name_of_item', 'resource': 'current_resource_value', 'maximumResource': 'maximum_resource_value', 'resourceType': 'type_of_resource', 'contentsPath': ['path_to_item_inside_container'], 'existedId': 'existed_id_of_item_from_Context' } .
#7.3.4. To the value of 'name' key include the item name. It's important to use the item name in exactly the same format that you would see in the player's inventory, known from Context.
#7.3.5. To the value of 'resource' key include number, which represents the current value of item's resource.
#7.3.6. To the value of 'maximumResource' key include number, which represents the maximum available value of item's resource.
#7.3.7. To the value of the 'resourceType' key include string, that represetns the type of resource in the 'resource' value of key. For example, bullets or arrows, or uses count for items intended for consumption, etc.
#7.3.7.1. Note, that if the item is an ammunition, for example 1 arrow, then this item must not have the same resource (arrows for the example case).
#7.3.7.2. ${CHARACTER_INFO.nonMagicMode ? 'All resources must be realistic and non-magical. Magical items should be treated as non-functional or have their magical resource replaced with a realistic equivalent.' : ''}
#7.3.8. To the value of 'contentsPath' include the array of strings. Each string is a container name inside which the item is located. It is important to use the item names in exactly the same format that you would see in the player's inventory, known from Context.
#7.3.8.1. For example, if item located in the container2, and container2 is located in container1, then the 'contentsPath' will include these two names, started from top level of container (in the example case, ['container1', 'container2']).
#7.3.8.2. If the item is not located in any container, set 'contentsPath' to null.
#7.3.9. The value of 'existedId' key is GUID string represents id of item. Look at the 'id' property of item in the Context and write it to 'existedId'.
#7.3.9.1. Fill the value of 'existedId' key only if it's an item that exists in the Context. Otherwise, leave the 'existedId' value of key empty. It's forbidden to fill it if you cannot find the item in the Context.
#7.3.10. When resource is used, or should be decreased because of any reason: [
- Mandatory decrease the 'resource' value of key by appropriate amount. 
- It's STRICTLY forbidden to change 'count' for this item in current turn. The system will automatically handle count changes when resource is depleted.
- IMPORTANT: Never confuse resource usage with count changes. These are completely separate systems - resource represents charges/uses within a single item, while count represents the number of separate items.
]
#7.3.11. When resource is restored or increased: [
- Mandatory increase the 'resource' value of key by needed amount.
- It's forbidden to increase resource value above item's maximum capacity, known from 'maximumResource' value.
]
#7.3.12. Mandatory record all resource-related changes in 'items_and_stat_calculations'.
#7.3.13. Double quotes cannot be used inside values, as this interferes with parsing your answer into JSON. Use guillemet quotes («») inside JSON values if needed. Use double quotes at the start and at the end of keys and values.
] ], otherwise, then: [
#7.3.14. Do not include 'inventoryItemsResources' key to the response.
]

#8 Item count rules.
#8.1. If this condition is true: [
- Look at the player's inventory in the Context. Check value of 'count' property for each item in the inventory, and see if value of 'count' property is changed (increased or decreased) in current turn. The rule returns 'true' if at least one difference is found.
], then strictly follow the instructions: [ Let's think step by step : [
#8.1.1. Include to the 'inventoryItemsData' items, which 'count' property were changed. Set new value to 'count' key for these items.
#8.1.2. It is absolutely forbidden to change 'count' if 'resource' of item is changed in current turn. These are separate systems:
- Resource changes handle uses/charges within an item.
- Count changes handle the number of separate items.
- The system will automatically handle any count adjustments needed when resource is depleted.
Example: A bandage with count=3 and resource=20 means there are 3 separate bandages, each with 20 uses. When using the bandage, only decrease resource. Never touch count.
#8.1.3. When count of item reaches zero, follow these mandatory steps: [
- It's forbidden to add the item to 'removeInventoryItems' array. The system will automatically remove the item from player's inventory if needed.
]
#8.1.4. If item is container, then use special rules for containers: [
#8.1.4.1. It's forbidden to change count of containers. Each container is unique and must always have count = 1.
#8.1.4.2. If you need more containers of the same type, add them as new unique items through 'inventoryItemsData'.
]
#8.1.5. If count of item was increased, follow these rules: [
#8.1.5.1. When player receives an identical item that already exists in inventory (which is known from Context), increase the count of existing item instead of creating a new one.
#8.1.5.2. Add item to the 'inventoryItemsData' array and change the value of 'count' property for this item.
]
#8.1.6. If count of item was decreased, follow these rules: [
#8.1.6.1. When part of stackable item is removed or used, decrease its count accordingly.
#8.1.6.2. Add item to the 'inventoryItemsData' array and change the value of 'count' property for this item.
]
#8.1.7. Mandatory record all count changes in 'items_and_stat_calculations'.
#8.1.8. Double quotes cannot be used inside values, as this interferes with parsing your answer into JSON. Use guillemet quotes («») inside JSON values if needed. Use double quotes at the start and at the end of keys and values.
] ]

#9 Checking player actions: steps and requirements. [ Let's think step by step: ${CHARACTER_INFO.rpgMode ? `
#9.1. Associate each player action (except for generating items, moving or removing items from the inventory) with one suitable characteristic only from the list: ${statsList} and translate this characteristic into ${translationModule.currentLanguage} .
#9.1.1. When generating an item, moving item or removing item, no skill check is performed.
#9.1.2. When moving from location to location, checks are done rarely.
#9.1.3. For elementary actions deemed easy by the game master, no check is required.
#9.1.4. On any dialogues not related to trade - the affect of characteristics is secondary. The result of dialogue is mainly related to the content of what the player character said.
#9.1.5. The 'trade' characteristic check is done only when trading about prices for deals.
#9.1.6. The 'attractiveness' characteristic is used to seduce or charm the NPC (for example, to get a discount or important information). Attractiveness reflects the physical beauty of the character. It is important to note that not all NPCs care about physical beauty.
#9.1.7. The 'persuasion' characteristic is used to convince someone using oratory.
${playerCritDice != 20 && playerCritDice != 1 ? `
#9.2. Output to 'items_and_stat_calculations' the current value of the dice the player rolled to attempt a critical success. This is the value: ${playerCritDice}. Result - Usual dice roll, which means that we need to make additional check for player action.

#9.3. Do following check for the associated characteristic: [
#9.3.1. Let's describe the StatModificator. StatModificator is a special constant for current turn, related with the associated characteristic. We use this value for subsequent checks for a success or failure of the player's action related with the associated characteristic.
#9.3.1.1. Calculate the StatModificator using the instruction: [
#9.3.1.2. Read the current value of associated characteristic. Let's call it StatValue.
#9.3.1.3. Calculate all values from all item bonuses, all active and passive skill bonuses, and all possible effects affecting associated characteristic of player. Let's call it Bonuses.
#9.3.1.4. Sum the current characteristic value and all associated characteristic bonuses using this formula:
StatValueWithBonuses = StatValue + Bonuses, where
• StatValueWithBonuses - the sum of associated characteristic value and and all bonuses related with this characteristic.
• StatValue - the current value of associated characteristic.
• Bonuses - all bonuses, which affects the associated characteristic of player.
#9.3.1.5. Set the maximum value for the associated characteristic. Let's call it MaximumStatValue = (${characterStats.level} * 0.5 + 20).
#9.3.1.6. Calculate the StatModificator value using this formula:
StatModificator = min(MaximumStatValue, StatValueWithBonuses) + LevelScaling, where
• MaximumStatValue - maximum value for the associated characteristic.
• StatValueWithBonuses - the sum of associated characteristic value and all bonuses related with this characteristic.
• LevelScaling = floor(${characterStats.level} * 0.8) - scaling bonus based on character level
]

#9.3.2. Let's describe ActionDifficultModificator - the value that determines the difficulty of the player's action.
#9.3.2.1. Calculate the ActionDifficultModificator using the instruction: [
#9.3.2.2. Let's calculate base ActionDifficult value using this formula:
ActionDifficult = BaseDifficulty * (1 + NPC_Difficulty + Situation_Difficulty + Action_Rationality), where
• BaseDifficulty = Current location difficulty * DifficultyScale
• DifficultyScale = max(0.2, min(1.5, (${characterStats.level} / 50))) - difficulty scaling factor based on level
• Action_Rationality is a fractional number from 0 to 1 (chosen by the gamemaster depending on the logic of actions, the more logical - the closer to zero).
• Situation_Difficulty is a fractional number from 0 to 1 (chosen by the gamemaster depending on the complexity of the situation, the more difficult the circumstances - the closer to one).
• NPC_Difficulty is a fractional number from 0 to 1 (chosen by the gamemaster depending on the complexity of the NPC with which the player interacts during the action, the more complex the NPC - the closer to 1).
#9.3.2.3. Be fair in selecting the right fractional numbers. Do not adjust their values to the success of the check deliberately. It's very important for making the game interesting for the player.
#9.3.2.4. Calculate ActionDifficultModificator by normalizing the ActionDifficult using this formula:
ActionDifficultModificator = min(120, ActionDifficult * (0.4 + ${characterStats.level}/100)), where
• ActionDifficult - the value that determines the difficulty of the player's action.
• ActionDifficultModificator - normalized value of ActionDifficult.
]

#9.3.3. This is player dice result (2d10). Let's call it PlayerDiceResult = ${dices2d10.pop()}.
#9.3.4. This is gamemaster dice result (2d10). Let's call it GMDiceResult = ${dices2d10.pop()}.

#9.3.5. Calculate the difference using this formula:
Difference = (PlayerDiceResult + StatModificator) - (GMDiceResult + ActionDifficultModificator)

#9.3.6. Determine the result based on the Difference value:
[
If Difference ≥ 10:          Result = 'Critical Success'
If 5 ≤ Difference < 10:      Result = 'Full Success'
If 0 ≤ Difference < 5:       Result = 'Partial Success'
If -5 ≤ Difference < 0:      Result = 'Minor Failure'
If -10 ≤ Difference < -5:    Result = 'Serious Failure'
If Difference < -10:         Result = 'Critical Failure'
]

#9.3.6.1. If Result = 'Critical Success' (Difference ≥ 10) or
If Result = 'Full Success' (5 ≤ Difference < 10), then mandatory do following:
- Increase the most relevant characteristic as a reward for player.
- Write to 'items_and_stat_calculations' which characteristic was increased and why.

#9.3.7. Output to 'items_and_stat_calculations' the check calculation, Difference value and Result type with all mathematical details and formulas used.
#9.3.7.1. Mandatory output to 'items_and_stat_calculations' the detailed information about the plot consequences related to result of the check. This text should be separated from the calculations and begin with an explanation of the check results.

#9.3.8. Result Implementation Requirements:
#9.3.8.1. Universal Rules for All Results:
• Each mechanical effect recorded in 'items_and_stat_calculations' must have corresponding narrative representation in 'response'.
• All numerical outcomes (damage, healing, stat changes) must be artistically described in 'response' without showing formulas or calculations.
• If player loses health, 'items_and_stat_calculations' shows calculations and final value, while 'response' describes how this damage was received in narrative form.
• It's forbidden to omit describing mechanical effects in narrative response.
• Story consequences described in 'response' must match mechanical outcomes from 'items_and_stat_calculations'.
• NPC reactions mandatory persist until explicitly changed by player actions.
• Story consequences mandatory create concrete changes in game world.
• Any 'luck' or 'circumstance' factors mandatory be determined before result implementation.

#9.3.8.2. Based on the Result type, mandatory proceed with the appropriate development: [

For 'Critical Success':
• Player character achieves their goal exceptionally well with additional positive effects.
• Action creates new opportunities or advantages for future scenes.
• NPCs react with increased respect or admiration where applicable.
• Player character may gain unexpected beneficial information or reward.
• Success influences the story direction significantly in character's favor.

For 'Full Success':
• Player character completely achieves their intended goal.
• Action proceeds exactly as planned with all intended effects.
• NPCs react according to the success of the action.
• Results contribute positively to the current storyline.

For 'Partial Success':
- Player character achieves their goal but with mandatory minor complications.
- At least one negative effect must be mandatory applied to player character:
  • Achievement is less effective than intended.
  • Action requires more effort than expected.
  • Minor item durability reduced.
  • Small reputation loss.
  • Information leak to antagonists.

For 'Minor Failure':
- Player character fails to achieve their goal with mandatory minor consequences.
- At least two negative effects mandatory must be applied to player character:
  • Loss of unexpected energy.
  • Character ends up in disadvantageous situation.
  • Minor injury or fatigue.
  • Minor item durability reduced.
  • Loss of unexpected item resource.
  • Information advantage to opponents.

For 'Serious Failure':
- Player character fails with severe mandatory consequences.
- At least three negative effects mandatory must be applied directly to player character:
  • Significant player health loss.
  • Negative health status effect.
  • Significant item durability reduced.
  • Position severely compromised.
  • Tactical disadvantage.
  • Major reputation damage.
- Additional mandatory effects:
  • Opponents mandatory must gain concrete advantage.
  • Situation dramatically changed and future related checks become harder.
  • At least one long-term negative consequence established.

For 'Critical Failure':
- Player character fails catastrophically with maximum negative impact.
- At least four severe effects mandatory must be applied directly to player character:
  • Major player health loss.
  • Serious negative health status effect.
  • Major item durability reduced.
  • Position critically compromised.
  • Severe tactical disadvantage.
  • Critical reputation damage.
- Additional mandatory effects:
  • Opponents gain major concrete advantages.
  • Multiple long-term negative consequences established.
  • Story path severely altered against player character's interests.
  • Future related checks become significantly harder.

#9.4. Combat and Duels: [
#9.4.1. Combat begins when:
• Either side declares hostile actions.
• Weapons are drawn with hostile intent.
• Surprise attack is attempted.
• Peaceful negotiation explicitly fails.

#9.4.2. Combat-Specific Implementation:
#9.4.2.1. Mandatory Combat Principles:
• Enemies mandatory must use their best available tactics.
• Enemies tactical advantages mandatory must be used immediately.
• Enemies retreat only possible if tactically sound.
• No artificial reduction of enemy capabilities.
• No convenient circumstances saving player character.

#9.4.2.2. Combat Failure Consequences:

Minor Failure in Combat mandatory must include:
• Minor direct damage to player character.
• Minor tactical disadvantage in the position of player's character.

Serious Failure in Combat mandatory must include:
• Direct damage to player character.
• Concrete tactical disadvantage (these are examples):
- A lost position by the player character.
- A dropped weapon by the player character.
- Reduced player character defense.
• Immediate enemy action using advantage.

Critical Failure in Combat mandatory must include:
• Severe damage to player character.
• Multiple tactical disadvantages (these are examples):
  - Worst possible player character's position.
  - Weapon loss or its malfunction for player character.
  - Player character defense critically compromised.
• Immediate enemy action with maximum advantage.
• Long-term combat penalty for player character.

#9.4.2.3. Enemy Behavior Requirements:
• Enemies mandatory must attack when having advantage.
• Enemies mandatory use player character's weaknesses.
• Enemies mandatory must press their advantage.
• Enemies mandatory must act according to their established capabilities.
• Enemy retreat only possible when clearly justified by their condition.

#9.4.2.4. Output Consistency Requirements:
• Combat calculations are recorded in 'items_and_stat_calculations'.
• Same combat outcomes must be narratively described in 'response' without technical details.
• Health changes calculated in 'items_and_stat_calculations' must have clear narrative cause in 'response'.
• All mechanical advantages/disadvantages must have story representation in 'response'.

#9.4.3. Implementation Restrictions:
The gamemaster is forbidden to:
• Create convenient circumstances preventing consequences.
• Reduce enemy capability without clear reason.
• Allow 'lucky' events saving player character from consequences.
• Interpret rules to minimize negative impacts.
• Invent external factors neutralizing failure effects.
• Delay mandatory consequence implementation.
] 
#9.5. Mandatory NPC responses in dialogues with player: [
The NPC's response must mandatory reflect the exact result of the player's characteristic check:

Critical Success:
• NPC provides exceptional information beyond what was asked.
• Offers unique opportunities or advantages.
• Shows deep respect or admiration.
• Shares secret knowledge or unexpected benefits.
• May become a valuable long-term ally.
• Could grant access to restricted areas or resources.

Full Success:
• NPC gives complete and accurate information.
• Shows clear positive attitude.
• Provides helpful additional details.
• Willingly cooperates.
• May offer standard assistance.

Partial Success:
• NPC provides basic requested information.
• Shows neutral attitude.
• Information comes with minor complications.
• Might require small favor in return.
• Could accidentally reveal information to others.

Minor Failure:
• NPC gives incomplete or partially incorrect information.
• Shows slight suspicion or reluctance.
• Requires extra convincing to continue talking.
• May spread minor rumors.
• Might demand payment or favor for basic information.

Serious Failure:
• NPC provides misleading or false information.
• Shows clear hostility or distrust.
• May alert others about player's questions.
• Could refuse further interaction.
• Might create obstacles for future interactions.
• Information reaches antagonists.

Critical Failure:
• NPC reacts with maximum hostility.
• Alerts authorities or enemies.
• Spreads harmful rumors.
• Becomes a long-term opponent.
• Creates significant future obstacles.
• May organize active opposition to player.

Remember:
• Each NPC response must reflect both immediate and long-term consequences.
• NPC reactions persist until changed by new player actions.
• Include at least the minimum number of effects specified for each result type.
] ]
` : (playerCritDice == 20 ? `
#9.2. Output to 'items_and_stat_calculations' the current value of the dice the player rolled to attempt a critical success. This is the value: ${playerCritDice}. Result - Critical Success!
#9.2.1. It means that the player's action is successful automatically and no additional check is required.
#9.2.2. Note that the player has completely succeeded in doing what player was trying to do. You should develop the game's plot based on this. 
#9.2.3. It's mandatory to add some major positive event to the game's plot to reward the player for a critically successful dice roll.
#9.2.4. Output to 'items_and_stat_calculations' that player's action was fully succeeded.
#9.2.4.1. Mandatory output to 'items_and_stat_calculations' the detailed information about the plot consequences related to Critical Success. This text should begin with an explanation of the dice roll results.
#9.2.5. Mandatory do following:
- Increase the most relevant characteristic as a reward for player.
- Write to 'items_and_stat_calculations' which characteristic was increased and why.
` : `
#9.2. Output to 'items_and_stat_calculations' the current value of the dice the player rolled to attempt a critical success. This is the value: ${playerCritDice}. Result - Critical Failure!
#9.2.1. It means that the player's action is failed automatically and no additional check is required. 
#9.2.2. Note that the player has completely failed at what player was trying to do. You should develop the game's plot based on this.
#9.2.3. It's mandatory to add some major negative event to the game's plot because of the player's dice roll has failed critically.
#9.2.4. Output to 'items_and_stat_calculations' that the player's action failed completely.
#9.2.4.1. Mandatory output to 'items_and_stat_calculations' the detailed information about the plot consequences related to Critical Failure. This text should begin with an explanation of the dice roll results.
`)}
#9.5. When items are need to be added inside the container item, located in the player's inventory, make this check for possibility to do it: [
#9.5.1. Read the value of 'capacity' property of the container. Let's call it Capacity.
#9.5.2. Calculate ContentsItemCount. To do this: [
#9.5.2.1. Find the container item in the Context. If container item in the Context has 'contentsItemCount' property, then set to ContentsItemCount value of this property.
#9.5.2.2. If property 'contentsItemCount' doesn't exist, then calculate count of items inside the container and set to ContentsItemCount this value.
]
#9.5.3. Calculate total count of items, which player trying to place inside the container. Let's call it NewItemsCount.
#9.5.4. Calculate value of TotalItemsCount using this formula:
TotalItemsCount = ContentsItemCount + NewItemsCount, where
• ContentsItemCount - the count of items inside the container for current turn.
• NewItemsCount - total count of items, which player trying to place inside the container this turn.
#9.5.5. Make the check using this formula:
Capacity >= TotalItemsCount, where
• Capacity - the capacity of container.
• TotalItemsCount - the total count of items which will be placed inside the container in the end of this turn.
#9.5.6. If the check result is true: [
#9.5.6.1. Read the value of 'volume' property of the container. Let's call it Volume.
#9.5.6.2. Calculate ContentsVolume. To do this: [
#9.5.6.2.1. Find the container item in the Context. If container item in the Context has 'contentsVolume' property, then set to ContentsVolume value of this property.
#9.5.6.2.2. If property 'contentsVolume' doesn't exist, then sum total volume of top-level items inside the container and set to ContentsVolume this value.
]
#9.5.6.3. Calculate total volume of items, which player trying to place inside the container. Let's call it NewItemsVolume.
#9.5.6.4. Calculate value of TotalItemsVolume using this formula:
TotalItemsVolume = ContentsVolume + NewItemsVolume, where
• ContentsVolume - the volume of items inside the container for current turn.
• NewItemsVolume - total sum of item volumes, which player trying to place inside the container this turn.
#9.5.6.5. Make the check using this formula:
Volume >= TotalItemsVolume, where
• Volume - the volume of container.
• TotalItemsVolume - the total sum of item volumes which will be placed inside the container in the end of this turn.
#9.5.6.6. If the check result is true: [
- Items can be added inside the container.
], else: [
- Don't add new items to the container and mark in the 'response' the reason. 
- It's forbidden to include these new items to 'moveInventoryItems', 'removeInventoryItems' or 'inventoryItemsData'. 
]
#9.5.6.7. Output to 'items_and_stat_calculations' the formula and describe calculation of this check.
], else: [
- Don't add new items to the container and mark in the 'response' the reason. 
- It's forbidden to include these new items to 'moveInventoryItems', 'removeInventoryItems' or 'inventoryItemsData'. ]
]
#9.5.7. Make sure that you made both checks: for capacity and volume. Only if both of them returns true as result, you can include these items to 'moveInventoryItems' or 'inventoryItemsData'.
#9.5.8. Output to 'items_and_stat_calculations' the formula and describe calculation of this check.
]
` : `
#9.1. It will be good if not everything planned will succeed in checks
#9.2. Determine the difficulty of the roll based on the situation
#9.3. Having preliminarily determined the difficulty of the roll, use d20 + characteristic, output the process of checking the action and the result in 'items_and_stat_calculations' .
#9.4. Rely not only on stats, but also on the logic of what's happening
#9.5. The further story is formed depending on the result of the check
#9.6. The 'trade' characteristic check is done only when trading about prices for deals
#9.7. When moving from location to location, checks are not made
#9.8. More free interpretation of events
#9.9. For output in the answer, translate the names of characteristics into natural language
#9.10. On exceptional success in action check:
- If the success was particularly impressive, increase the most relevant characteristic as a reward for player.
- Write to 'items_and_stat_calculations' which characteristic was increased and why.
`} ]
		 
#10 During dialogue or any kind of interaction with NPCs: 
#10.1. NPCs are living personalities with their own individual character. It's important to remember this, and to give each NPC a well-developed personality, backstory, and character.
#10.2. The beginning, process, and end of the dialogue should be built based on the current situation, as well as on the content of the player's words and the quality of the player's logic - only the player's logic is checked for compliance with the laws of formal logic.
#10.3. NPCs may suspect deception when the player violates formal logic.
#10.4. Trust in the character from non-player characters is calculated from the context of the game history, and initially they are neutral.
#10.5. Non-player characters may try to deceive the player, especially if their trust in the player is low.
#10.6. When selecting prices, the price/quality ratio of the item is very strongly taken into account in relation to the price/quality ratio of other already existing inventory (known from Context).
#10.7. The player buys an item only if they said in the current action that they are buying the item. If they did not talk about buying, then the GM cannot make a decision about the player buying the item.
${ELEMENTS.useNpcList.checked ? `
#10.8. If any of NPCs have a proper name (means, that NPC name explicitly includes the 'first name' e.g., 'King Arthur', 'Elara', 'Alan Wake', 'Christina', 'Guard Captain Roric', 'Li'), then select such NPCs and apply the check to each of them: [
#10.8.1. If one of these conditions are true: [
- The NPC encountered in current turn is new, meaning information about them is not present in the 'encounteredNPCs' array which is known from the Context.
- For each NPC near to player in the current turn, find an NPC with the same name in the Context. If such NPC is found, compare values of their properties ['rarity', 'age', 'worldview', 'race', 'class', 'appearanceDescription', 'history', 'stats', 'skills', 'effects', 'attitude'] with the current values. Pay attention to every little thing, every insignificant detail. The rule returns 'true' if at least one difference in the properties is found. If there is no NPC with the same name in the Context (i.e., the NPC is new), the rule is not applied to this NPC and continues checking the rest.
], then strictly follow the instructions: [ Let's think step by step : [
#10.8.1. Include to the response the 'NPCsData' key, the value of which is the array of objects, and each object of the array represents the NPC information.
#10.8.2. Mandatory format for recording the value of each item of 'NPCsData' array: ${npcTemplate} .
#10.8.3. To the value of the 'image_prompt' key, include a detailed prompt for generating an image that illustrates the NPC's appearance based on their description (use maximum 150 characters). It is necessary to form it only in English.
#10.8.4. To the value of the 'name' key, include the full name of the NPC. If the NPC already exists, retrieve the NPC's name from the Context and write it in the exact same format.
#10.8.5. To the value of the 'rarity' key, include a string that represents the rarity of the NPC.
#10.8.6. To the value of the 'age' key, include a number that represents the NPC's age in years.
#10.8.7. To the value of the 'worldview' key, include a string that briefly describes the NPC's worldview. Refer to examples of character worldviews in the D&D system and use the same approach.
#10.8.8. To the value of the 'race' key, include the name of the NPC's race.
#10.8.9. To the value of the 'class' key, include the name of the NPC's class.
#10.8.10. To the value of the 'appearanceDescription' key, include a string that describes the NPC's appearance in exceptional detail, including but not limited to face, body proportions, figure, clothing, posture, and any distinguishing features such as scars, tattoos, or jewelry. Use as much detail and artistic language as possible. Provide a meticulous breakdown of each aspect, ensuring that every notable feature is vividly described.
#10.8.11. To the value of the 'history' key, include a string that describes key moments of the NPC's history. Use as much detail and artistic language as possible.
#10.8.12. To the value of the 'stats' key, include an array of strings, each of which representing information about the NPC's characteristics.
#10.8.13. To the value of the 'skills' key, include an array of strings, each of which representing information about the NPC's skills.
#10.8.14. To the value of the 'effects' key, include an array of strings, each of which representing information about various effects that affect the NPC.
#10.8.15. To the value of the 'attitude' key, include a string that represents the NPC's attitude towards the player character. Use as much detail and artistic language as possible.
#10.8.16. If NPC was killed, mandatory mark it in the value of 'history' key. 
#10.8.17. Carefully look at NPC's clothing. If the NPC changed clothes, dressed or undressed, you should note this in the 'appearanceDescription'.
#10.8.18. Double quotes cannot be used inside values, as this interferes with parsing your answer into JSON. Use guillemet quotes («») inside JSON values if needed. Use double quotes at the start and at the end of keys and values.
] ] ]
#10.9. When forming a response, consider the NPC's skills. If the NPC is going to perform a specific action and possesses skills that can help them in this, the NPC should use those skills to accomplish the task.
#10.10. Consider the NPC's stats when forming a response. An intelligent NPC might devise a clever plan, while a strong NPC might rely on their physical strength, and so on. This is important for the game narrative.

#10.11. Rules for renaming NPCs.
#10.11.1. Sometimes you need to rename NPCs because of the game's plot. If you need to rename the NPC, then: [
#10.11.2. Include to the response the 'NPCsRenameData' key, the value of which is an array of objects, and each object of the array represents the information about NPC to rename.
#10.11.3. Mandatory format for recording the value of each item of 'NPCsRenameData' array: { 'oldName': 'old_NPC_name', 'newName': 'new_NPC_name' } .
#10.11.4. To the value of the 'oldName' key, include old name of NPC. It's mandatory to use name in exactly the same format as in the value of the 'name' property of the NPC, known from Context.
#10.11.5. To the value of the 'newName' key, include new name of NPC. 
]
${ELEMENTS.useNpcJournal.checked ? `
#10.12 Look at all NPCs present in the location where the player character is on current turn. From these NPCs, find those who can see or hear the player character. For each of these NPCs: [
#10.12.1. If the NPC name is present in the list of encountered NPCs (encounteredNPCs), then: [
#10.12.2. Each turn, while the player is interacting with an NPCs, response includes the 'NPCJournals' key with the current NPCs thoughts according to the following instruction: [ Let's think step by step :
#10.12.2.1. The value of 'NPCJournals' key is an array of objects, each of which contains the information about NPC thoughts.
#10.12.2.2. Mandatory format for recording the value of each item of 'NPCJournals' array: {'name': 'full_name_of_current_NPC', 'lastJournalNote': 'last_NPC_thoughts_and_reactions_for_current_turn'} .
#10.12.2.3. To the value of 'name' key, include NPC name. You should find the needed NPC in the list of encountered NPCs and use the name in exactly same format.
#10.12.2.4. Imagine the NPC keeps a personal journal, in which NPC makes personal notes, recording their thoughts in the first person. To the value of 'lastJournalNote' key, include last note of NPC for current turn. This note should include information about NPC thoughts and reactions regarding last events. Describe it in as much detail and artistic language as possible.
#10.12.2.5. The value of 'lastJournalNote' must always start with the current turn number. The current turn number is: '${turn}'. Mandatory format for recording the text of note: '#${turn}. {Note text}', where '{' and '}' represents the notation of a variable and should not be used in the note.
#10.12.2.6. The data which you recorded in the 'lastJournalNote' should only be related with current turn. Do not copy the notes for previous turns, instead of it always record to 'lastJournalNote' the new data, related with current turn only. 
#10.12.2.7. Double quotes cannot be used inside values, as this interferes with parsing your answer into JSON. Use guillemet quotes («») inside JSON values if needed. Use double quotes at the start and at the end of keys and values. 
]
${ELEMENTS.useNpcMemoriesDiary.checked ? `
#10.12.3. Each turn, while the player is interacting with an NPCs, response includes the 'NPCMemories' key with the current NPCs background (memory about the past) notes according to the following instruction: [ Let's think step by step :
#10.12.3.1. The value of 'NPCMemories' key is an array of objects, each of which contains the information about NPC memory diary notes.
#10.12.3.2. Mandatory format for recording the value of each item of 'NPCMemories' array: {'name': 'full_name_of_current_NPC', 'lastDiaryNote': 'last_NPC_memories_for_current_turn'} .
#10.12.3.3. To the value of 'name' key, include NPC name. You should find the needed NPC in the list of encountered NPCs and use the name in exactly same format.
#10.12.3.4. Imagine that an NPC has a personal diary in which he writes down his background story in first-person format. This story can start with some interesting moment in the NPC's past, or with the NPC's birth, and logically continues to be supplemented each turn.
#10.12.3.5. To the value of 'lastDiaryNote' key, include last note of NPC's memory diary for current turn.
#10.12.3.6. Each diary note should include complete information about part of NPC history, written as personal diary style. Describe it in as much detail and artistic language as possible.
#10.12.3.7. The value of 'lastDiaryNote' must always start with the current turn number. The current turn number is: '${turn}'. Mandatory format for recording the text of note: '#${turn}. {Note text}', where '{' and '}' represents the notation of a variable and should not be used in the note.
#10.12.3.8. The data which you recorded in the 'lastDiaryNote' should only be related with current turn. Do not copy the notes for previous turns, instead of it always record to 'lastDiaryNote' the new data, related with current turn only. 
#10.12.3.9. Double quotes cannot be used inside values, as this interferes with parsing your answer into JSON. Use guillemet quotes («») inside JSON values if needed. Use double quotes at the start and at the end of keys and values.
]` : ''}
] ]` : ''}
` : ''}
${ELEMENTS.useQuestsList.checked ? `
#11. In the initial stages of the game, or when information about a task is incomplete, the quest should always be presented as a 'skeleton quest', containing only basic elements (name, general description of the situation or goal).
Quest details (specific tasks, potential rewards, possible conditions for failure) should be added as new information is received.
The absence of explicit player consent is not an obstacle to creating a skeleton quest if there are sufficient grounds for doing so in the form of received information or circumstances.
#11.1. Even if the player does not show explicit interest in a quest, the possibility of creating a skeleton quest based on available information and circumstances should always be evaluated. The player can decline the quest at any time.
#11.2. 'Skeleton quest' trigger example:
«The character finds themselves in a situation where their past or goals are threatened or require re-evaluation - this is a trigger for creating or updating a quest.»
#11.3. Creating a 'skeleton quest' does not limit the player's freedom of choice. They can always abandon the quest or change its direction. The main goal is to provide the player with structure and motivation for action, as well as to provide a logical basis for plot development.
#11.4. 'Skeleton quest' examples:

1. Lost Contact:
Trigger: Receiving a garbled distress signal.
Name: Restore Communications.
Source: Distress Signal.
Description: Re-establish contact with the source of the distress signal.

2. Strange Readings:
Trigger: Discovering unusual sensor data.
Name: Investigate Anomaly.
Source: Sensor Readings.
Description: Determine the cause of the anomalous sensor readings.

3. Missing Person:
Trigger: Encountering a worried NPC searching for someone.
Name: Find the Missing.
Source: NPC Request.
Description: Locate the missing person and determine their fate.

4. Abandoned Settlement:
Trigger: Discovering an empty settlement with signs of a hasty departure.
Name: Uncover the Evacuation.
Source: Abandoned Settlement.
Description: Investigate why the settlement was abandoned and where the inhabitants went.

5. Recover Lost Tech:
Trigger: Obtaining a partial schematic for a valuable piece of lost technology.
Name: Find the Lost Schematic.
Source: Terminal Data.
Description: Locate the remaining parts of the lost technology schematics.

#11.5. If any of these conditions are true: [
- The player encounters a significant situation, problem, or receives compelling information that suggests a task, goal, or conflict worthy of investigation.
- An NPC directly assigns the player a task or requests assistance.
- An NPC reveals a problem or challenge they are facing.
- The player receives instructions or a task from a source like a terminal or broadcast, or something similar (books, letters etc.)
- The player discovers an important item or information that clearly hints at further action.
- The player encounters a situation requiring resolution with significant consequences.
- There are changes to existing active quests requiring an update (you can find the list of active quests in the Context).
], then you must create a 'skeleton quest' if one does not already exist, or update the existing one. In this case, strictly follow the instructions: [ Let's think step by step : [
#11.6. Include to the response the 'questsData' key, the value of which is the array of objects, and each of which contains the available information about specific quest.
#11.7. Mandatory format for recording the value of each item of 'questsData' array: {'name': 'full_name_of_current_quest', 'questGiver': 'full_name_of_quest_giver', 'questBackground': 'background_of_quest', 'description': 'quest_description', 'purposes' : ['quest_purposes'], 'reward': 'reward_for_the_quest_completion', 'punishmentForFailingQuest': 'punishment_the_player_will_suffer_for_failing_the_quest', 'details': 'quest_details', 'isCompleted': boolean } .
#11.8. To the value of 'name' key, include the string, which representing the full name of quest. If quest isn't new, then it's mandatory to use the quest name in the exactly same format like in the Context.
#11.9. To the value of 'questGiver' key, include the quest source. If an NPC gives the quest, include their full name. Otherwise, describe the source of information or circumstances that led to the quest's emergence (like 'Obtained Device Data', 'Discovered Evidence at Scene', 'Emergency Alert', 'Local Information Network', 'Anonymous Tip').
If the source of the quest is not an NPC, but circumstances or received information, then the source of information or a description of the circumstances should be specified as the 'questGiver' (for example, "Discovered data from the display", "Emergency signal", "Chance discovery").
#11.10. To the value of 'questBackground' key, include a string that describes the currently known reasons why the quest exists or needs to be completed. For environmental or systemic issues, describe the circumstances that created the situation. This description should be updated as new information becomes available.
#11.11. To the value of 'description' key, include the string, which is the most complete and detailed quest description currently available. Describe it in as much detail and artistic language as possible.
#11.12. The value of 'purposes' key is an array of strings. Each purpose must meet the SMART criteria: [
    • Measurable: It must be possible to objectively evaluate if the goal is achieved.
    • Achievable: Goals must be realistic considering character's current capabilities and available resources.
    • Time-bound (if applicable): If goal completion is time-limited, it must be explicitly stated.
    • Specific: Goals must be clearly and unambiguously formulated.   
].
#11.13. To the value of 'reward' key, include the most specific description possible of the reward which player will receive for completing the quest. If the reward is uncertain or conditional, describe the potential benefits and the factors that will determine whether the reward is granted. For story-based quests, rewards may include valuable resources, critical information, or improved relations with factions.
#11.14. To the value of 'punishmentForFailingQuest' key, include the most specific description possible of the punishment the player will suffer for failing the quest. If the punishment is uncertain or conditional, describe the potential consequences and the factors that will determine whether the punishment is inflicted. For story-based quests, include the consequences of not resolving the situation.
#11.15. To the value of 'details' key, include any additional information obtained during quest progress that expands understanding of the situation or provides new opportunities: [
    • Clues leading to solution.
    • New information about circumstances, causes, or event participants.
    • Discovered items related to the quest.
    • Changes in NPC relationships affecting quest progress.
    • Do not repeat information from 'description'.
].
#11.16. Set the value of 'isCompleted' key to false or true. The quest is considered complete when the quest's primary objective has been achieved or the player has definitively failed to achieve it. The circumstances of completion or failure should be recorded in the 'details' key.
#11.17. If the quest is completed and the quest-giving NPC fulfills their promise, the player should receive the quest reward. If the quest-giving NPC does not fulfill their promise, this should be recorded in the 'details' key, and the player may have the opportunity to seek alternative forms of compensation.
#11.18. If the player fails the quest and the quest-giving NPC inflicts the described punishment, the player must suffer the consequences. If the quest-giving NPC attempts to inflict a different punishment, this should be recorded in the 'details' key, and the player may have the opportunity to resist or negotiate.
#11.19. Before proceeding, ask yourself: Does the current situation warrant the creation or update of a 'skeleton quest'?
] ]
${turn == 0 ? `
#11.20. Since this is the start of new game, you must mandatory generate a starting quest for the player, based on the player's history and plot description.` : ``}
` : ''}
	 
#12. Player characteristics: reward and punishment.
#12.1. Here is the list of all player characteristics: stats_list = ${statsList} .
#12.2. During the game, a situation may arise where you need to permanently increase or decrease a certain characteristic of the player. This can happen for the following reasons:

For characteristic increase:
${!CHARACTER_INFO.rpgMode ? `
- A characteristic should be increased when player achieves particularly impressive success result in an action. The increased characteristic should be the one most relevant to the successful action.
` : `${playerCritDice == 20 ? `
- A characteristic should be increased when player achieves Critical Success (player's crit dice == 20) in an action. The increased characteristic should be the one most relevant to the successful action.
` : `
- A characteristic should be increased when player achieves Critical Success (Difference ≥ 10) in an action. The increased characteristic should be the one most relevant to the successful action.
- A characteristic should be increased when player achieves Full Success (5 ≤ Difference < 10) in an action. The increased characteristic should be the one most relevant to the successful action.
`} `}
- A characteristic may be increased as a reward for a quest completion, but only if this was specifically defined as the quest reward.
- A characteristic may be increased because the player is blessed by a powerful NPC.

For characteristic decrease:
- A characteristic may be decreased because the player is cursed by a powerful NPC.
- A characteristic may be decreased as punishment for a quest failure, but only if this was specifically defined as the quest failure consequence.
- A player's characteristic may be decreased due to serious problems with the player character's body (loss of limbs or other serious injuries).

#12.3. Each turn, only one characteristic can be increased or decreased, and only by 1 point.
#12.3.1. Don't increase or decrease the player's characteristics without the clear reason. There must be a reason for it. If there is no reason, then don't increase or decrease the player's characteristics.
#12.3.2. Special case - Success rewards:
${!CHARACTER_INFO.rpgMode ? `
- Characteristic increase from particularly impressive success result in an action is considered separate from other characteristic changes.
`: `${playerCritDice == 20 ? `
- Characteristic increase from Critical Success is considered separate from other characteristic changes.` : `
- Characteristic increase from Critical Success or Full Success is considered separate from other characteristic changes. `}
`}
- When success reward is applied, another characteristic can still be modified this turn for a different reason.
- They must be logged in 'items_and_stat_calculations' with a clear indication of the success type that triggered the increase.

#12.4. If it's needed to increase player's characteristics, then include to the response the key 'statsIncreased': [
#12.4.1. The value of 'statsIncreased' key is an array of strings, each of which represents the name of player's characteristic to increase.
#12.4.2. It's important to use the names in exactly the same format like in stats_list. Use only english to write the characteristic names for this array.
#12.4.3. Write to the 'items_and_stat_calculations' the reason of increasing the player's characteristic. 
]

#12.5. If it's needed to decrease player's characteristics, then include to the response the key 'statsDecreased': [
#12.5.1. The value of 'statsDecreased' key is an array of strings, each of which represents the name of player's characteristic to decrease.
#12.5.2. It's important to use the names in exactly the same format like in stats_list. Use only english to write the characteristic names for this array.
#12.5.3. Write to the 'items_and_stat_calculations' the reason of decreasing the player's characteristic. 
]

#13 The 'location where the character was on the previous turn' is checked for compliance with the current location - if not, then the response includes the locationData key with the current location according to the following instruction: [ Let's think step by step :
#13.1. Mandatory format for recording the value in the locationData key: {'name': 'current_location_name', 'difficulty': 'difficulty_in_numerical_value', 'lastEventsDescription': 'location_last_events_description_for_current_turn', 'description': 'current_location_description', 'image_prompt': 'prompt_to_generate_location_image'} . All this values of keys 'name' , 'difficulty' , 'lastEventsDescription' must never be empty.
#13.2. Double quotes cannot be used inside values, as this interferes with parsing your answer into JSON. Use guillemet quotes («») inside JSON values if needed. Use double quotes at the start and at the end of keys and values.
#13.3. If the character returns to an old existing location, that is, the 'location where the character was on the previous turn' does not correspond to the current location, but the current location is present in the list of all visited locations, then the 'lastEventsDescription' of this current location must be updated. The formatting of location names should correspond to the formatting of other known locations. 
#13.4. If this is a new location, then give a description of it in the 'description' key, using the most detailed and artistic language as possible.
#13.5. If the the current location is not new, then leave the 'description' key as empty.
#13.6. If this is a new location, then to the value of the 'image_prompt' key include an extensive detailed prompt for generating an image, that will illustrate the current location based on its description (use maximum 150 characters). It is necessary to form it only in English.
#13.7. If the the current location is not new, then leave the 'image_prompt' key as empty. ]
#13.8. Each turn, the information about last event for current turn of the location, where the event of the current turn occurred is briefly recorded to the 'lastEventsDescription' value of key for locationData object. Also briefly record the information about all dialogues with the NPC and character for current turn.
#13.9. The data which you recorded in the 'lastEventsDescription' should only be related with current turn. Do not copy the description of location to 'lastEventsDescription', instead of it always record to 'lastEventsDescription' the new data, related with current turn only.
#13.10. The value of 'lastEventsDescription' must always start with the current turn number. The current turn number is: '${turn}'. Mandatory format for recording the text of this value: '#${turn}. {lastEventsDescription text}'.

#14 Calculate the change in energy, experience, and health according to the following instruction: [ Let's think step by step :
#14.1. All character actions spend or restore their energy, in an amount logically dependent on the action. The amount of energy changed is entered in the value of the 'currentEnergyChange' key (value type: positive or negative integer)
#14.1.1. Note: it's mandatory that 'currentEnergyChange' must only reflect the base energy change associated with the player's action, without any additional modifications. 
#14.1.2. Each turn, the player spends energy unless they are trying to restore it in some way (for example, by resting or meditating).
#14.1.3. If the player is rested/meditated/etc. or has eaten/drank/used/etc. any potion/food/medicine/etc. with the appropriate energy restoration effect, then the player's energy should be restored to the required level.
#14.1.4. If a player takes multiple actions in current turn, sum their energy change up and record the final value in 'currentEnergyChange'.
${characterStats.currentEnergy == 0 ?
`#14.2.The current energy of player character is 0. It means, that player character mandatory loses additional 1-10 health this turn. Add this health lose to 'currentHealthChange'. You must notify that player is very tired and needs to rest, otherwise it will affect player's health very fast.`
: ``}
#14.3. All successful player actions give experience (XP) to the player character. The amount of experience is entered in the value of the 'experienceGained' key (value type: positive integer).
#14.4. When a player needs to receive an XP, do following check to calculate the experience: [
#14.4.1. Let's describe the BaseXP. BaseXP is the foundational experience points awarded for an action based on its complexity and significance:
#14.4.1.1. Calculate the BaseXP using the instruction: [
#14.4.1.2. Classify the action into one of these categories:
Basic actions (1-10 XP):
• Minor actions (1-3 XP) - basic information gathering, simple social interactions
• Small tasks (4-6 XP) - successful bargaining, finding hidden items
• Notable actions (7-10 XP) - complex social interactions, discovering locations

Medium achievements (11-30 XP):
• Important tasks (11-15 XP) - resolving conflicts, complex trade operations
• Significant actions (16-22 XP) - improvised side activities, innovative solutions
• Major tasks (23-30 XP) - resolving complex social situations, crafting rare items

Major achievements (31-100 XP):
• Regional impact (31-50 XP) - influencing local politics, resolving faction conflicts
• Major impact (51-75 XP) - creating regional changes, establishing organizations
• World impact (76-100 XP) - world-changing actions, creating new factions
]

#14.4.2. Let's describe the CreativityBonus. CreativityBonus is an additional reward for unique solutions and unexpected approaches:
#14.4.2.1. Calculate the CreativityBonus using this formula:
CreativityBonus = ActionComplexity * CreativityScale, where
• ActionComplexity is the base category of action:
    - Low-level actions: 1-3
    - Medium-level actions: 3-8
    - High-level actions: 5-15
• CreativityScale is a fractional number from 0 to 1 (chosen by the gamemaster based on the uniqueness and cleverness of the solution)

#14.4.3. Let's describe the RiskBonus. RiskBonus represents additional points for actions involving significant risk:
#14.4.3.1. Calculate the RiskBonus using this formula:
RiskBonus = ActionRisk * RiskScale, where
• ActionRisk is the base risk category:
    - Low-risk actions: 1-5
    - Medium-risk actions: 3-12
    - High-risk actions: 5-20
• RiskScale is a fractional number from 0 to 1 (chosen by the gamemaster based on potential negative outcomes and preparation level)

#14.4.4. Let's describe the ImpactMultiplier. ImpactMultiplier scales rewards based on the scope of impact:
#14.4.4.1. Calculate the ImpactMultiplier using this formula:
ImpactMultiplier = 1 + ImpactScale, where
• ImpactScale is determined by the impact scope:
    - Local impact: +0 (multiplier of 1)
    - Regional impact: +0.5 (multiplier of 1.5)
    - World impact: +1.0 (multiplier of 2.0)

#14.4.5. Let's describe the LevelScaling. LevelScaling adjusts rewards based on character level:
#14.4.5.1. Calculate the LevelScaling using this formula:
LevelScaling = 1 + LevelBonus, where
• LevelBonus is determined by character level range:
    - Levels 1-5: +0 (multiplier of 1.0)
    - Levels 6-10: +0.2 (multiplier of 1.2)
    - Levels 11-20: +0.5 (multiplier of 1.5)
    - Levels 21-30: +0.8 (multiplier of 1.8)
    - Levels 31+: +1.0 (multiplier of 2.0)

#14.4.6. Calculate the final experience gained using this formula:
experienceGained = floor((BaseXP + CreativityBonus + RiskBonus) * ImpactMultiplier * LevelScaling)

#14.4.7. Output to 'items_and_stat_calculations' the experience calculation, showing all components and the final experienceGained value in great detail.
]

#14.5. Any damage or harm received by the player character mandatory must result in health loss. This includes all combat damage, monster attacks, environmental damage, and any other harmful effects. 
The amount of health lost is recorded in the value of the 'currentHealthChange' key (value type: negative integer for damage, positive for healing).
#14.5.1. Health Loss Conditions: The player character's health decreases in various situations. 
Below are common examples, but this list is not exhaustive - any situation that could cause physical harm to the character mandatory must result in appropriate health loss. 
Use these categories and examples as guidelines to evaluate similar situations: [
#14.5.1.1. Combat and Direct Damage:

• When receiving wounds from weapons or attacks
• When hit by projectiles or magical attacks
• When affected by poison or toxic substances 
• [and other similar combat-related damage]

#14.5.1.2. Physical Trauma:

• When falling from heights (severity based on distance)
• When hit by falling objects
• When crushed by heavy objects
• When caught in explosions or shockwaves
• [and other similar physical traumas]

#14.5.1.3. Environmental Damage:

• When exposed to extreme temperatures
• When affected by caustic or corrosive substances
• When drowning or suffocating
• When exposed to harmful radiation or magical energy
• [and other similar environmental hazards]

#14.5.1.4. Creature Interactions:

• When bitten by animals or monsters
• When stung by insects or creatures
• When affected by creature abilities (paralysis, acid, etc.)
• When infected by parasites or diseases
• [and other similar creature-based damage]

#14.5.1.5. Accidents and Mishaps:

• When failing dangerous acrobatic attempts
• When failing to operate dangerous machinery
• When caught in traps or mechanical devices
• When burning or scalding occurs
• [and other similar accidents]

#14.5.1.6. Health Loss Guidelines:
These ranges are suggestions and can be adjusted based on the specific situation and severity:

• Minor injuries (scratches, small burns): 1-3 health points
• Moderate injuries (deep cuts, sprains): 4-7 health points
• Serious injuries (broken bones, concussions): 8-15 health points
• Severe injuries (internal damage, major trauma): 16-25 health points
• Critical injuries (life-threatening wounds): 26+ health points
• [and other similar injuries]

#14.5.2. Health Restoration:
#14.5.2.1. If the player is well rested or has eaten/drank/used/etc. any potion/food/medicine/etc. with the appropriate health restoration effect, then the player's health should be restored to the required level.
#14.5.2.2. Health restoration sources include, but are not limited to:

• Natural healing through rest: 1-10 points per full rest
• Basic medical treatment: 2-5 points per application
• Professional medical care: 5-20 points per treatment
• Healing potions (and other healing items): As specified by the item
• Magical healing: As specified by the spell or ability
• [and other similar restoration methods]

#14.5.3. Calculating Health Changes:
#14.5.3.1. For each turn, sum up all health changes from damage and restoration sources
#14.5.3.2. Apply any relevant modifiers (armor, resistances, vulnerabilities)
#14.5.3.3. Record the final value in 'currentHealthChange'

#14.5.4. Output to 'items_and_stat_calculations' the health changes, showing all components in great detail.
]
${turn == 1 ? `
#14.6. This is the start of new game. On this turn, mandatory set 'currentEnergyChange' = 0, 'currentHealthChange' = 0, 'experienceGained' = 0.
` : ``}
]

#15 The value of the actions key is passed an array of proposed actions (should not contain nested arrays or other objects)
#15.1. Among the proposed actions, there should not be options for actions that are similar to events that have already recently occurred
#15.2. Proposed actions should not be in the value of the response key, but should only be in actions

#16 In the value of the image_prompt key, it is necessary to form in each answer only in English an extensive detailed prompt for generating an image that will illustrate what the main character sees in your given answer, but the number of characters in the value of this key should not exceed 150 characters, while the prompt for generating the illustration should be formulated in such a way that the main character himself is not in the illustration - it should be a description of what he sees

#17 The value of the key 'response' must always be filled. Formulate the final value of the 'response' key. Use all markdown formatting functions except headings. When formulating the final value of the 'response' key, consider that : [ Let's think step by step :
#17.1. This value is a description of plot events and should be designed in an artistic style 
#17.2. Double quotes cannot be used inside values, as this interferes with parsing your answer into JSON. Use guillemet quotes («») inside JSON values if needed. Use double quotes at the start and at the end of keys and values. Any value of 'response' key in the JSON response must not start with the symbol « and must not end with the symbol » .
#17.3. It is forbidden to invent actions or words of the player
#17.4. The message should be formulated in such a way that further in meaning, player action would be required, significantly different from the actions they have already taken in the last few turns
#17.5. The gamemaster should not agree to the proposed deal on behalf of the player
#17.6. The player cannot use spells without appropriate items or knowledge
#17.7. The player cannot spend more money than they currently have. Currently, they have ${characterStats.money} money.
#17.8. The player cannot spend more energy than they currently have. Currently, they have ${characterStats.currentEnergy} energy. The player cannot spend more than 2 energy per turn if the spending is not due to the use of an ability or spell.
#17.9. All player actions leading to negative energy or money values should be interrupted. 
#17.10. The player cannot use items that they do not have in their inventory or that are not in the current location
#17.11. The character should not say what the player did not indicate to say
#17.12. Spending or adding money is recorded in the value of the moneyChange key only specifically from money (value type: positive or negative integer)
#17.13. It's mandatory to monitor situations that may result in player's health loss, and record player's health loss in 'currentHealthChange' value of key. 
#17.13.1. Pay special attention to fights between the player and monsters/enemies/NPCs/etc. Handle health loss according to the Health Loss Conditions rules described above.
#17.14. It is not allowed to add or subtract in moneyChange, currentHealthChange and currentEnergyChange if this has already been done for the same event
#17.15. The value of the 'response' key should significantly develop the events of the general plot. The event from the previous turn should be completed.
${!ELEMENTS.usePreResponse.checked ? `
#17.16. The maximum number of characters in the 'response' value: maximum ${getMaxGmSymbols()} characters.
` : `` }
#17.17. This answer should be a logical consequence of the current player action, which is their last prompt: '${currentMessage}'. 
#17.18. Seek inspiration from various genres and storytelling styles.
#17.19. When describing a new event, offer the player several alternative ways of responding or interacting with the surrounding world to stimulate diversity in plot development.
#17.20. When forming the answer, consider all the passive and active skills of the character. 
#17.21. Be sure to consider the result of checking the action for skill and formulate the answer in such a way that the result of the check finally affects the current plot event and ends the current event depending on the result of the check.
#17.22. ${CHARACTER_INFO.nonMagicMode ? 'Important! Consider that in this world magic is absent.' : ' '}
#17.23. The value of key 'response' must never be empty.
]

#18 Create an array of five elements using the following format:
#18.1. On equipped items, count the total number of bonuses associated with item searches.
#18.2. At the gamemaster's discretion, based on the total number of bonuses calculated in the previous step, assign a value between 0 and 1 (inclusive) to the variable 'item_search_coefficient'. This value should reflect the effectiveness of the item search bonuses.
#18.3. Assign the value of the variable 'location_coefficient' as follows: (current_location_difficulty / 100) + 1.
#18.4. At the gamemaster's discretion, assign a value between 1 and 2 (inclusive) to the variable 'danger_coefficient' based on the overall danger level of recent events. A higher value represents a more dangerous situation.
#18.5. At the gamemaster's discretion, assign a value between 1 and 2 (inclusive) to the variable 'logic_coefficient' based on how logical it is to find an item in this situation. A higher value represents a more logical or probable find.
#18.6. At the gamemaster's discretion, assign a value between 1 and 2 (inclusive) to the variable 'characters_coefficient' based on the complexity or challenge posed by the characters in the environment. A higher value represents a more complex social situation.
#18.7. Set the value of the 'multipliers' key in the JSON output to the following array:  '[item_search_coefficient, location_coefficient, danger_coefficient, logic_coefficient, characters_coefficient]'.

${ELEMENTS.useStatus.checked ?
`#19 Player status.
${generateStatus ? `
#19.1. Strictly follow the instructions: [ Let's think step by step : [ ` : `
#19.1. If this condition is true: [
- Look at the current status of player for current turn. Then find the player's status (statusData) in the Context. Compare values of their properties ['name', 'age', 'race', 'class', 'appearanceDescription', 'statusInSociety', 'positionInSociety' ] with the current values. Pay attention to every little thing, every insignificant detail. The rule returns 'true' if at least one difference in the properties is found.
], then strictly follow the instructions: [ Let's think step by step : [ `}
#19.2. Mandatory include to the response the key 'statusData', the value of which is an object, that represents the player's status information.
#19.3. Mandatory format for recording the value of the 'statusData' key: ${statusTemplate} .
#19.4. To the value of the 'name' key, include the full name of the player character.
#19.5. To the value of the 'age' key, include an integer that represents the player's character age in years. You can imagine it if you don't have exact data.
#19.6. To the value of the 'race' key, include the name of the player's race. Translate it to the user's chosen language.
#19.7. To the value of the 'class' key, include the name of the player's class. Translate it to the user's chosen language.
#19.8. To the value of the 'appearanceDescription' key, include a string that describes the player's appearance in exceptional detail, including but not limited to face, body proportions, figure, clothing, posture, and any distinguishing features such as scars, tattoos, or jewelry. Use as much detail and artistic language as possible. Provide a meticulous breakdown of each aspect, ensuring that every notable feature is vividly described.
#19.9. To the value of the 'statusInSociety' key, include a string that describes status in society of player character. Use as much detail and artistic language as possible.
#19.10. To the value of the 'positionInSociety' key, include a string that describes current position in society of player character.
#19.10.1. Position in society means the information about how society views the character. Try to list the attitude towards the player character from various groups, classes, organizations, and so on. Use as much detail and artistic language as possible.
#19.11. To the value of the 'affiliationWithOrganizations' key, include a string that describes player's affiliation to various organizations or groups. Use as much detail and artistic language as possible.
#19.12. To the value of the 'purposes' key include an array of strings, each of which representing a hint about proposed character game purpose for a long game perspective.
#19.13. Double quotes cannot be used inside values, as this interferes with parsing your answer into JSON. Use guillemet quotes («») inside JSON values if needed. Use double quotes at the start and at the end of keys and values. 
] ], otherwise, then: [ 
#19.14. Do not include 'statusData' value of key to the response. Use just empty object value {} in this case.
]

#20 Rules for accounting for explicit effects affecting the player character.
#20.1. Explicit effects are conditions that affects the player's character stats, abilities or actions, such as poisoning, curse, disease, blessing or similar.
#20.2. If this condition is true: [
- Look at the explicit effects, which affectings the player in current turn. Then find the player's status effects (statusDataEffects) in the Context. Compare values of their properties ['name', 'description' ] with the current values. Pay attention to every little thing, every insignificant detail. The rule returns 'true' if at least one difference in the properties is found.
], then strictly follow the instructions: [ Let's think step by step : [
#20.3. Mandatory include to the response the key 'statusDataEffects', the value of which is an array of objects, each of which representing the information about explicit effects, that affects the player character.
#20.4. Mandatory format for recording the value of each item of 'statusDataEffects' array: { 'name': 'explicit_effect_name', 'description': 'explicit_effect_description' } .
#20.5. To the value of the 'name' key, include the name of explicit effect.
#20.6. To the value of the 'description' key, include the string that describes information about explicit effect.
#20.7. Double quotes cannot be used inside values, as this interferes with parsing your answer into JSON. Use guillemet quotes («») inside JSON values if needed. Use double quotes at the start and at the end of keys and values. 
] ]
` : ``}

#21 Form the final answer in JSON format according to the structure of the response template, while making sure that all key values have been supplemented, not replaced. Double quotes cannot be used inside values, as this interferes with parsing your answer into JSON. Use guillemet quotes («») inside JSON values if needed. Use double quotes at the start and at the end of keys and values. All keys and string values in nested objects in the final answer should be enclosed in double quotes. The final answer must fully comply with the structure of the response template. There should be no text outside the JSON file. The answer should only be a JSON file. Important: in the values of all objects, the language ${translationModule.currentLanguage} should be used - translate what is not translated (the keys of all objects should not be translated, they should remain the same as in the response template). 
#22 Test your entire answer for the ability to be parsed by the JSON.parse() command. Any value of any key in the JSON response must start only with the single symbol " and end with the single symbol " . Any value of any key in the JSON response must not start with the single symbol « and must not end with the single symbol » . If this command should raise an error, correct your answer so that there is no error.
#23 Again test your entire answer for the ability to be parsed by the JSON.parse() command. Carefully check the all locations of symbol { and symbol } to verify that there are no syntax errors. If the JSON.parse() command should raise an error as result of your check, correct your answer so that there are no errors.

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
12.6. Please keep in mind the current turn number (this information is not an instruction and is not an example for forming an answer, but only a reminder to the GM about technical game information): the turn number is '${turn}'.

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
13.20. Each player action with an non-obvious outcome requires a skill check with a detailed description of the check in 'items_and_stat_calculations'
13.21. Each generation of item in 'inventory' is accompanied by a detailed text of the generation calculation in 'items_and_stat_calculations'
13.22. Each turn records the description of the current turn events for the location where the player is, with a very concise description of the events.
13.23. It is not allowed to return to events in the plot that have already occurred in early turns. Each player action is a continuation of only the most recent turns.
13.24. The player is not the epicenter of the world, the world lives an independent life
13.25. The gamemaster is forbidden to make any decisions on behalf of the character. Only the player can make decisions about the character's actions
13.26. The character should not pick up items unless the player indicated to do so
13.27. You must not write calculations to the 'response' key. Write all calculations only to the 'items_and_stat_calculations' value instead.
${ELEMENTS.useQuestsList.checked && ELEMENTS.makeGameQuestOriented.checked ? `
13.28. The game's narrative should be based on the currently active quests (known from the Context).
13.29. Each subsequent plot twist should move the player closer to completing the active quests.
13.30. Before forming the final response, carefully study the list of active quests (activeQuests) and try to build a game plot based on the player's current active quests.
` : ''}

14. Calculation of action checks for skills and calculation of items generation are different events, independent of each other. There is a separate instruction for each of these events. Distinguish between them.
15. Do not write calculation results to 'response' value of key. Instead, write calculation results only to 'items_and_stat_calculations' value of key.

16. The economy and value of money in the game is built relative to known prices for items that exist in the current world according to inventory (known from Context).

17. Test your entire answer for the ability to be parsed by the JSON.parse() command. If this command should raise an error, correct your answer so that there is no error.
] ]
 `;

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

            const predefinedSystemPrompts = getPredefinedSystemPrompts(true);
            const predefinedMainPrompts = getPredefinedMainPrompts();

            if (ELEMENTS.useThinkingModule.checked && !ELEMENTS.useThinkingModuleForResponse.checked) {
                const thinkingData = await getThinkingInformation(aiProvider, model, apiKey, prompt, tokenCostSum, predefinedSystemPrompts, predefinedMainPrompts);

                prompt = `               
                ${prompt}

                Before you form your answer, carefully study the reasoning log you made earlier. This reasoning log will help you form your answer. Use the information in it to write your final answer: [
                    ${thinkingData}
                ]`;
            }

            if (ELEMENTS.useThinkingModule.checked && ELEMENTS.useThinkingModuleForResponse.checked && !ELEMENTS.usePreResponse.checked) {
                let thinkingPrompt = `
                [ First, study the entire instruction and context thoroughly. Remember all the information you've learned. Then follow the instruction step by step from the beginning.

                ### Instruction ###

                First, I'll explain what is your goal. These are preparations for main answer, and in this task you need to think only about the 'response' value of key. All other data will be filled later.
                You must write the 'response' value of key, using artistic and literary style of writing. Your 'response' value of key must be consistent with the all other data you included in the context of previous user's turn.
                Use the maximum number of characters available to you for the answer. This is your task for the current turn.
                You should not write anything now except for the value of the 'response' key. It's a Super Rule 1.

                Please, Let's think step by step:
                [
                #1. Prepare a response template in JSON format and remember its structure. Any value of any key in the JSON response must start only with the single symbol " and end with the single symbol " .  Any value of any key in the JSON response must not start with the single symbol « and must not end with the single symbol » . Important note: as the response is formed, only the values of the keys in the response template should be supplemented, without replacing them or changing their value types. The final answer should be presented entirely in JSON format. All keys and string values in the final answer must be enclosed in double quotes.
                #2. The maximum number of characters in the 'response' value: maximum ${getMaxGmSymbols()} characters.   
                #3. Double quotes cannot be used inside values, as this interferes with parsing your answer into JSON. Use guillemet quotes («») inside JSON values if needed. Use double quotes at the start and at the end of keys and values.
                [ ### Context ###
                #1. You are the gamemaster (GM). ${CHARACTER_INFO.rpgMode ? 'This is an RPG genre game, in which gameplay consists of developing character characteristics and their inventory. Skills and inventory are of key importance' : 'This is an adventure in the RP (RolePlay) genre, the purpose of which is to build an interesting artistic story, while skills and inventory are of secondary importance.'}
                #2. Carefully study the rules that you will use to form answer for user in next turn, but not in this turn - in this turn you need to only form the 'response' (this information is not an instruction and is not an example for forming an answer, but only a reminder to the GM about past events):  [${prompt}] .
                ] ]`;

                const thinkingData = await getThinkingInformation(aiProvider, model, apiKey, thinkingPrompt, tokenCostSum, predefinedSystemPrompts, predefinedMainPrompts);
                prompt = `               
                ${prompt}

                Before you form your answer, carefully study the reasoning log you made earlier. This reasoning log will help you to fill the 'response' value of key, but you still need to fill all other properties and probably rewrite the 'response' value of key. Use the information in it to write your final answer: [
                    ${thinkingData}
                ]`;
            }

            const preResponseData = await processPreResponse({
                mainPrompt: prompt,
                aiProvider: aiProvider,
                model: model,
                apiKey: apiKey,
                tokenCostSum: tokenCostSum
            });
            prompt = preResponseData?.prompt ?? prompt;

            data = await sendAPIRequest(aiProvider, model, apiKey, prompt, tokenCostSum, predefinedSystemPrompts, predefinedMainPrompts, false);
            if (Array.isArray(data))
                data = data[0];
            data.response = preResponseData?.response ?? data.response;
            data.items_and_stat_calculations = preResponseData?.items_and_stat_calculations ?? data.items_and_stat_calculations;
            
            if (Array.isArray(data.NPCJournals) && data.NPCJournals.length > 0 ||
                Array.isArray(data.NPCMemories) && data.NPCMemories.length > 0 ||
                Array.isArray(data.NPCsData) && data.NPCsData.length > 0) {
                const afterResponseData = await processAfterResponse({
                    mainPrompt: prompt,
                    aiProvider: aiProvider,
                    model: model,
                    apiKey: apiKey,
                    tokenCostSum: tokenCostSum
                });
                data.NPCJournals = afterResponseData?.NPCJournals ?? data.NPCJournals;
                data.NPCMemories = afterResponseData?.NPCMemories ?? data.NPCMemories;
                data.NPCsData = afterResponseData?.NPCsData ?? data.NPCsData;
            }
                        
            tokenCostSum = APIModule.tokenCostSum;
            tokenCostCurrent = APIModule.tokenCostCurrent;

            turn++;      
            inventoryBasket = [];
            data = sanitizeObject(data, ['~', '"']);
            
            //console.log(data);
            ELEMENTS.chatBox.removeChild(loadingElement);
            sendMessageToChat(data.response, 'gm');

            if (data.moveInventoryItems && data.moveInventoryItems.length > 0) {
                for (const item of data.moveInventoryItems)
                    findAndMoveItem(item.name, item.contentsPath, item.movedItemId, item.contentsPathOfDestinationContainer, item.destinationContainerName, item.destinationContainerId);
            }

            if (data.removeInventoryItems && data.removeInventoryItems.length > 0) {
                for (const item of data.removeInventoryItems)
                    findAndDeleteItem(item.name, item.contentsPath, item.existedId);
            }

            const newItemsArray = [];
            if (data.inventoryItemsData && data.inventoryItemsData.length > 0) {
                for (const item of data.inventoryItemsData.sort(compareItemsByContainerAsc)) {
                    if (item?.name) {
                        const itemData = {
                            name: item.name,
                            description: item.description,
                            count: Number(item.count),
                            quality: item.quality,
                            price: item.price,
                            isConsumption: convertToBoolean(item.isConsumption),
                            durability: item.durability,
                            bonuses: item.bonuses,
                            image_prompt: item.image_prompt,
                            customProperties: item.customProperties,
                            contentsPath: item.contentsPath,
                            isContainer: convertToBoolean(item.isContainer),
                            weight: Number(item.weight),
                            volume: Number(item.volume),
                            containerWeight: item.containerWeight ? Number(item.containerWeight) : undefined,
                            weightReduction: item.weightReduction,
                            capacity: Number(item.capacity),
                            existedId: item.existedId,
                            resources: data.inventoryItemsResources,
                        };
                        addInventoryItem(itemData);
                        newItemsArray.push(itemData.newItem ?? []);
                    }
                }
            }

            if (data.inventoryItemsResources && data.inventoryItemsResources.length > 0) {
                for (const resourceData of data.inventoryItemsResources)
                    setOrChangeItemResource(resourceData.name, resourceData.contentsPath, Number(resourceData.resource), Number(resourceData.maximumResource), resourceData.resourceType, resourceData.existedId);
            }

            if (turn == 2)
                removeUnusedItems();

            if (data.moveInventoryItems?.length > 0 || data.removeInventoryItems?.length > 0 || data.inventoryItemsData?.length > 0) {
                if (newItemsArray.length > 0)
                    adjustInventoryWeightAndRemoveNeeded(maxWeight + criticalExcessWeight, newItemsArray);

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

            if (data.currentEnergyChange && !Number.isNaN(data.currentEnergyChange)) {
                const additionalEnergyCost = Number(data.calculatedWeightData?.additionalEnergyExpenditure ?? 0);
                if (additionalEnergyCost && !Number.isNaN(additionalEnergyCost) && calculateTotalInventoryWeight() > maxWeight)
                    data.currentEnergyChange -= additionalEnergyCost;
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
                for (const statName of data.statsDecreased)
                    decreasePlayerStat(statName, 1, data.items_and_stat_calculations);
            }

            if (data.statsIncreased && data.statsIncreased.length > 0) {
                for (const statName of data.statsIncreased)
                    increasePlayerStat(statName, 1, data.items_and_stat_calculations);
            }

            let expPoints = data.experienceGained;
            if (expPoints && !Number.isNaN(expPoints)) {
                expPoints = Number(expPoints);
                experienceProcessing(expPoints);
            } else {
                expPoints = null;
            }

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
                    addQuest({
                        name: newQuest.name,
                        questGiver: newQuest.questGiver,
                        questBackground: newQuest.questBackground,
                        description: newQuest.description,
                        purposes: newQuest.purposes,
                        reward: newQuest.reward,
                        punishmentForFailingQuest: newQuest.punishmentForFailingQuest,
                        details: newQuest.details,
                        isCompleted: newQuest.isCompleted
                    });
                }
            }

            let logMessages = data.items_and_stat_calculations && Array.isArray(data.items_and_stat_calculations)
                ? data.items_and_stat_calculations
                : [];
            logMessage(logMessages.join('\n\n'), data.currentHealthChange ?? 0, data.currentEnergyChange ?? 0, data.moneyChange ?? 0, expPoints ?? 0);
            
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
            updateWeight();           
            
            ELEMENTS.chatBox.scrollTop = ELEMENTS.chatBox.scrollHeight;
        } catch (error) {
            if (loadingElement && ELEMENTS.chatBox.contains(loadingElement)) {
                ELEMENTS.chatBox.removeChild(loadingElement);
            }

            let errorMessage = error?.message ?? error ?? "Unknown error";
            if (error?.lineNumber)
                errorMessage += ` Line: ${error.lineNumber}`;
            if (error?.fileName)
                errorMessage += ` File: ${error.fileName}`;
            if (error?.stack)
                errorMessage += ` Stack: ${error.stack}`;

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

function getPredefinedSystemPrompts(useShortVersions) {
    const predefinedSystemPrompts = [
        systemPromptsModule.languageRule(translationModule.currentLanguage),
        systemPromptsModule.markdown
    ];

    if (ELEMENTS.useEroticPrompt.checked)
        predefinedSystemPrompts.push(systemPromptsModule.erotic);

    if (ELEMENTS.useTextRules.checked) {
        if (!ELEMENTS.usePreResponse.checked && !useShortVersions)
            predefinedSystemPrompts.push(systemPromptsModule.textRulesCompact);
        else
            predefinedSystemPrompts.push(systemPromptsModule.textRules);
    }

    return predefinedSystemPrompts;
}

function getPredefinedMainPrompts() {
    const predefinedMainPrompts = [
        systemPromptsModule.notesRule
    ];

    return predefinedMainPrompts;
}

async function processPreResponse(data) {
    if (!ELEMENTS.usePreResponse.checked)
        return null;

    let {
        mainPrompt,
        aiProvider, model, apiKey, tokenCostSum
    } = data;

    const predefinedSystemPrompts = getPredefinedSystemPrompts();
    const predefinedMainPrompts = getPredefinedMainPrompts();
    
    let currentPrompt = `
    First, study the entire instruction and context thoroughly. Remember all the information you've learned. Then follow the instruction step by step from the beginning.

    ### Instruction ###

    First, I'll explain what is going on. To reduce the load on you, we've split your answer into two parts. Now, you will write the first part of your answer.
    In the first part of the answer, you must create only 'response' - a chat message which will be shown to the player, and 'items_and_stat_calculations' - to record and demonstrate various calculations and other details, since they are important for creating the value of 'response' key. In the second part of answer, you will create a detailed JSON response structure with all the necessary values, but don't think much about it right now. In current answer, you must write only values of the 'response' and 'items_and_stat_calculations' keys.
    Use artistic and literary style to write the data of 'response' value of key. Create a rich and engaging narrative.
    The key rule is non-interference in the player's actions. You are not allowed to decide what the player will do and say. Follow this rule and write the text according to it.
    Use the maximum number of characters available to you for the answer. This is your task for the current turn.
    You should not write anything now except for the values of the 'response' and 'items_and_stat_calculations'  keys. It's a Super Rule 1.

    Please, Let's think step by step:
    [
    #1. Prepare a response template in JSON format and remember its structure. Any value of any key in the JSON response must start only with the single symbol " and end with the single symbol " .  Any value of any key in the JSON response must not start with the single symbol « and must not end with the single symbol » . Important note: as the response is formed, only the values of the keys in the response template should be supplemented, without replacing them or changing their value types. The final answer should be presented entirely in JSON format. All keys and string values in the final answer must be enclosed in double quotes.
    #2. This is your response template: { "response": "", "items_and_stat_calculations": []  } . This is not information about the current state of the game - it is just a template structure for the correct formatting of the your entire answer structure.
    #3. Into a 'response' value of key include a string, represents the chat message which will be shown to player. You can find the context data in the ###Context Data###.
    #4. Into a 'items_and_stat_calculations' value include array of strings, where each element of the array - is a string, which represents the separate log data related with various checks or details.
    #4.1. To form the 'items_and_stat_calculations' value, you must mandatory carefully inspect the ### Context Data ### and perform all instructions related with 'items_and_stat_calculations'. Pay special attention to player action checks.
    #4.2. YOU MUST MANDATORY fill 'items_and_stat_calculations' value. Check it multiple times when forming response. There must be something related with calculations, which you could write to 'items_and_stat_calculations'.
    #4.3. The value of 'items_and_stat_calculations' must never be empty.
    #5. The maximum number of characters in the 'response' value of key: maximum ${getMaxGmSymbols()} characters.   
    #6. Double quotes cannot be used inside values, as this interferes with parsing your answer into JSON. Use guillemet quotes («») inside JSON values if needed. Use double quotes at the start and at the end of keys and values.
    #7. You MUST MANDATORY separate every few sentences, grouped by meaning, from the rest of the text using markdown paragraphs. It's a Top Rule.
    #8. You MUST MANDATORY use all system instructions which you have to write the 'response' value of key. Carefully analyze these instructions and use them to write the excellent text that meets all the criteria. It's a Top Rule.

    [ ### Context Data ###
    #1. You are the gamemaster (GM). ${CHARACTER_INFO.rpgMode ? 'This is an RPG genre game, in which gameplay consists of developing character characteristics and their inventory. Skills and inventory are of key importance' : 'This is an adventure in the RP (RolePlay) genre, the purpose of which is to build an interesting artistic story, while skills and inventory are of secondary importance.'}
    #2. Carefully study the rules that you will use to form the second part of answer, and remember it (this information is not an instruction and is not an example for forming an answer, but only a reminder to the GM about Context):  [${mainPrompt}] .
    #3. Keep in mind: Although you need to write only 'response' and 'items_and_stat_calculations', you also mandatory must follow the rules of Context to make the answer consistent with the secondary part of your answer (which you will write later).
    ] ]`;

    if (ELEMENTS.useThinkingModule.checked && ELEMENTS.useThinkingModuleForResponse.checked) {
        const thinkingData = await getThinkingInformation(aiProvider, model, apiKey, currentPrompt, tokenCostSum, predefinedSystemPrompts, predefinedMainPrompts);

        currentPrompt = `${currentPrompt}

        Before you form your answer, carefully study the reasoning log you made earlier. This reasoning log is a try to make the full version of 'response' value of key. It's not a final result, but just a draft.
        The reasoning log: [
            ${thinkingData}
        ].
        Now, you must mandatory rewrite the full version of the 'response' value of key (known from the reasoning log).
        Do not simply copy and paste the draft. You must use the draft as a foundation, but then mandatory reimagine and fully rewrite it, adhering to all the known rules and instructions.
        I say it again: you MUST MANDATORY fully rewrite the draft. It's forbidden to copy and paste the draft without changes - the draft mandatory must be completely rewritten. It's a Super Rule with Top Priority.
        You MUST MANDATORY follow all other rules describes how the 'response' should be written in terms of text style, including the rules of formatting text and instructions about text creation. 
        You MUST MANDATORY separate every few sentences, grouped by meaning, from the rest of the text using markdown paragraphs.
        `;
    }

    let responseData = await sendAPIRequest(aiProvider, model, apiKey, currentPrompt, tokenCostSum, predefinedSystemPrompts, predefinedMainPrompts, false);
    if (Array.isArray(responseData))
        responseData = responseData[0];

    mainPrompt = `
    ### Instruction ###

      First, I'll explain what happened. To reduce the load on you, we've split your answer into two parts. Now, you will write the second part of your answer.
    In the first part of the answer, you created only 'response' - a chat message which will be shown to the player, and 'items_and_stat_calculations' - to record and demonstrate various calculations and other details, since they were important for creating the value of 'response' key.
    In the second part of answer, you must create a detailed JSON response structure with all the necessary values, excluding 'response' and 'items_and_stat_calculations' which you have formed earlier.
    This is the value of 'response' which you formed in your first part of answer: ['${responseData.response}'].
    This is the value of 'items_and_stat_calculations' which you formed in your first part of answer: ['${JSON.stringify(responseData.items_and_stat_calculations ?? [])}']. 
    You must take into account the information in the logs of 'items_and_stat_calculations'. Pay special attention to the consequences of the player's actions recorded in the logs. There you can find additional information about what you should do when generating JSON data.
    Now you must write detailed JSON data which will be consistent with the 'response' and 'items_and_stat_calculations' text. 
    It is very important that the JSON data is consistent with the 'response' and 'items_and_stat_calculations' text, because that is what happened in the game in current turn. 
    Now you mandatory must to describe all other data that are needed to form the game response completely. It means, that you must write all except 'response' and 'items_and_stat_calculations' values of keys. It's Super Rule 1.

    Follow these instructions to form the JSON data: [
        ${mainPrompt}
    ]`;

    return {
        response: responseData.response,
        items_and_stat_calculations: responseData.items_and_stat_calculations,
        prompt: mainPrompt
    }
}

async function processAfterResponse(data) {
    if (!ELEMENTS.useAfterResponse.checked)
        return null;

    let {
        mainPrompt,
        aiProvider, model, apiKey, tokenCostSum
    } = data;

    const predefinedSystemPrompts = getPredefinedSystemPrompts();
    const predefinedMainPrompts = getPredefinedMainPrompts();

    let currentPrompt = `
    First, study the entire instruction and context thoroughly. Remember all the information you've learned. Then follow the instruction step by step from the beginning.

    ### Instruction ###

    First, I'll explain what is going on. To reduce your workload, we've split your answer into three parts. Now, you will write the third part of your answer.
    In the first and second part of your answer, you have created the detailed JSON response with all game-needed information.
    But the 'NPCJournals', 'NPCMemories' and 'NPCsData' were written in the shortened form because your workload was too big.
    Now you must write full versions of the 'NPCJournals', 'NPCMemories', 'NPCsData' values of keys. Use artistic and literary style to write the data of 'NPCJournals', 'NPCMemories', 'NPCsData', and create a rich and engaging narrative.
    Your full versions of the 'NPCJournals', 'NPCMemories', 'NPCsData' values of keys must be consistent with the shortened versions of these key values and all other data you included in your previous JSON response.
    You're encouraged to rewrite, expand and even invent new elements within the 'NPCJournals', 'NPCMemories' and 'NPCsData' values from the shortened version, as long as the core plot stays the same. Craft a richer and more engaging narrative beyond simply detailing what already exists.
    Mandatory add NPCs data to 'NPCsData' if the NPC doesn't exist in the 'encounteredNPCs' array which is known from the Context.
    Use the maximum number of characters available to you for the answer. This is your task for the current turn.
    You should not write anything now except for the values of the 'NPCJournals', 'NPCMemories', 'NPCsData' keys. It's a Super Rule 1.

    Please, Let's think step by step:
    [
    #1. Prepare a response template in JSON format and remember its structure. Any value of any key in the JSON response must start only with the single symbol " and end with the single symbol " .  Any value of any key in the JSON response must not start with the single symbol « and must not end with the single symbol » . Important note: as the response is formed, only the values of the keys in the response template should be supplemented, without replacing them or changing their value types. The final answer should be presented entirely in JSON format. All keys and string values in the final answer must be enclosed in double quotes.
    #2. This is your response template: { "NPCJournals": [], "NPCMemories": [], "NPCsData": [] } . This is not information about the current state of the game - it is just a template structure for the correct formatting of the your entire answer structure.
    #3. You can find the context data in the ###Context Data###. It contains information about your JSON response which you wrote earlier and all the data needed about the game rules.
    #4. The maximum number of characters in the 'NPCJournals', 'NPCMemories', 'NPCsData' values of keys: maximum ${getMaxGmSymbols()} characters.
    #5. Double quotes cannot be used inside values, as this interferes with parsing your answer into JSON. Use guillemet quotes («») inside JSON values if needed. Use double quotes at the start and at the end of keys and values.
    #6. You MUST MANDATORY separate every few sentences, grouped by meaning, from the rest of the text using markdown paragraphs. It's a Top Rule.
    #7. You MUST MANDATORY use all system instructions which you have to write the 'NPCJournals', 'NPCMemories', 'NPCsData' values of keys. Carefully analyze these instructions and use them to write the excellent text that meets all the criteria. It's a Top Rule.

    [ ### Context Data ###
    #1. You are the gamemaster (GM). ${CHARACTER_INFO.rpgMode ? 'This is an RPG genre game, in which gameplay consists of developing character characteristics and their inventory. Skills and inventory are of key importance' : 'This is an adventure in the RP (RolePlay) genre, the purpose of which is to build an interesting artistic story, while skills and inventory are of secondary importance.'}
    #2. Carefully study the rules that you used to form the previous part of your answer, and remember it (this information is not an instruction and is not an example for forming an answer, but only a reminder to the GM about Context):  [${mainPrompt}] .
    #3. Keep in mind: Although you need to write only 'NPCJournals', 'NPCMemories', 'NPCsData' you also mandatory must follow the rules of Context to make the answer consistent with the previous parts of your answer.
    ] ]`;

    if (ELEMENTS.useThinkingModule.checked && ELEMENTS.useThinkingModuleForNPC.checked) {
        const thinkingData = await getThinkingInformation(aiProvider, model, apiKey, currentPrompt, tokenCostSum, predefinedSystemPrompts, predefinedMainPrompts);

        currentPrompt = `${currentPrompt}

        Before you form your answer, carefully study the reasoning log you made earlier. This reasoning log is a try to make the full version of 'NPCJournals', 'NPCMemories', 'NPCsData' values of keys. It's not a final result, but just a draft.
        The reasoning log: [
            ${thinkingData}
        ].
        Now, you must mandatory rewrite the full version of the 'NPCJournals', 'NPCMemories', 'NPCsData' values of keys (known from the reasoning log).
        Do not simply copy and paste the draft. You must use the draft as a foundation, but then mandatory reimagine and fully rewrite it, adhering to all the known rules and instructions.
        I say it again: you MUST MANDATORY fully rewrite the draft. It's forbidden to copy and paste the draft without changes - the draft mandatory must be completely rewritten. It's a Super Rule with Top Priority.
        You MUST MANDATORY follow all other rules describes how the text should be written in terms of text style, including the rules of formatting text and instructions about text creation. 
        You MUST MANDATORY separate every few sentences, grouped by meaning, from the rest of the text using markdown paragraphs.
        `;
    }

    let responseData = await sendAPIRequest(aiProvider, model, apiKey, currentPrompt, tokenCostSum, predefinedSystemPrompts, predefinedMainPrompts, false);
    if (Array.isArray(responseData))
        responseData = responseData[0];
            
    return {
        NPCJournals: responseData.NPCJournals,
        NPCMemories: responseData.NPCMemories,
        NPCsData: responseData.NPCsData
    }
}

async function getThinkingInformation(aiProvider, model, apiKey, task, tokenCostSum, predefinedSystemPrompts, predefinedMainPrompts) {
    let thinkingData = "";
    for (let currentStep = 0; currentStep < Number(ELEMENTS.thinkingModuleIterations.value ?? 1); currentStep++) {
        thinkingData = `${thinkingData} \n [TRY${currentStep}]`;
        const prompt = thinkingModule.getThinkingPrompt(task, translationModule.currentLanguage, thinkingData);

        const result = await sendAPIRequest(aiProvider, model, apiKey, prompt, tokenCostSum, predefinedSystemPrompts, predefinedMainPrompts, true);
        thinkingData = `${thinkingData} \n ${result} [/TRY${currentStep}]`;
        logThinkingMessage(thinkingData);

        if (!result.includes('successfulWorkСompletion'))
            continue;
        
        if (!result.includes('stepsRequest'))
            return thinkingData;
    }
    return thinkingData;  
}

async function sendAPIRequest(aiProvider, model, apiKey, prompt, tokenCostSum, predefinedSystemPrompts, predefinedMainPrompts, doNotParse = false) {
    APIModule.initialize({
        signal: controller.signal,
        model: model,
        apiKey: apiKey,
        prompt: prompt,
        systemInstructions: ELEMENTS.systemInstructionsEasyMDE.value(),
        frequencyPenalty: ELEMENTS.frequencyPenalty.value,
        presencePenalty: ELEMENTS.presencePenalty.value,
        repetitionPenalty: ELEMENTS.repetitionPenalty.value,
        temperature: ELEMENTS.temperature.value,
        topP: ELEMENTS.topP.value,
        topK: ELEMENTS.topK.value,
        maxTokens: ELEMENTS.maxTokens.value,
        tokenCostSum: tokenCostSum,
        messageParseErrorMessage: translationModule.translations[ELEMENTS.chooseLanguageMenu.value]["gm_message_error_full_gm_answer"],
        aiProviderStreamingErrorMessage: translationModule.translations[ELEMENTS.chooseLanguageMenu.value]["ai-provider-streaming-error-label"],
        abortErrorMessage: translationModule.translations[ELEMENTS.chooseLanguageMenu.value]["abort-error-message"],
        otherCommonErrorMessage: translationModule.translations[ELEMENTS.chooseLanguageMenu.value]["common-error-message"],
        doNotParse: doNotParse,
        useStreaming: ELEMENTS.useStreaming.checked,
        predefinedSystemPrompts: predefinedSystemPrompts,
        predefinedMainPrompts: predefinedMainPrompts
    });

    switch (aiProvider) {
        case "OpenRouter":
            return await APIModule.sendOpenrouterRequest();
        case "Websim":
            return await APIModule.sendWebsimRequest();
        case "Google AI Studio":
            return await APIModule.sendGoogleAIRequest();
        case "Mistral AI":
            return await APIModule.sendMistralAIRequest();
        case "Groq":
            return await APIModule.sendGroqRequest();
        case "Hugging Face":
            return await APIModule.sendHuggingFaceRequest();
        case "Cohere":
            return await APIModule.sendCohereRequest();
        case "Chat01":
            return await APIModule.sendChat01APIRequest();
        case "Gitee AI":
            return await APIModule.sendGiteeRequest();
        case "None":
            throw translationModule.translations[ELEMENTS.chooseLanguageMenu.value]["none-provider-selected-label"];
        default:
            throw "Wrong provider value";
    }
}

function setAiProvider(providerName, setAlways) {
    document.querySelector(`input[name="ai-provider"][value="${providerName}"`).checked = true;
    document.querySelector(`input[name="ai-provider2"][value="${providerName}"`).checked = true;
    document.querySelector(`input[name="ai-provider3"][value="${providerName}"`).checked = true;
    document.querySelector(`input[name="ai-provider4"][value="${providerName}"`).checked = true;

    const inputsToHide = [];
    const inputsToClear = [];

    ELEMENTS.temperatureContainer.style.display = "flex";
    ELEMENTS.frequencyPenaltyContainer.style.display = "flex";
    ELEMENTS.presencePenaltyContainer.style.display = "flex";
    ELEMENTS.repetitionPenaltyContainer.style.display = "flex";
    ELEMENTS.topPContainer.style.display = "flex";
    ELEMENTS.topKContainer.style.display = "flex";
    ELEMENTS.maxTokensContainer.style.display = "flex";
    ELEMENTS.useStreamingContainer.style.display = "flex";
    setDefaultProviderParams(!!setAlways);

    if (providerName == "Google AI Studio") {
        inputsToHide.push(
            ELEMENTS.repetitionPenalty,
            ELEMENTS.maxTokens
        );
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
            ELEMENTS.maxTokens,
            ELEMENTS.useStreaming,
        );
    } else if (providerName == "Groq") {
        inputsToHide.push(
            ELEMENTS.repetitionPenalty,
            ELEMENTS.topK,
            ELEMENTS.maxTokens,
            ELEMENTS.useStreaming,
        );
    } else if (providerName == "Hugging Face") {
        inputsToHide.push(
            ELEMENTS.repetitionPenalty,
            ELEMENTS.topK,
            ELEMENTS.useStreaming,
        );
    } else if (providerName == "Cohere") {
        inputsToClear.push(ELEMENTS.presencePenalty);
        inputsToHide.push(
            ELEMENTS.repetitionPenalty,
            ELEMENTS.maxTokens,
            ELEMENTS.useStreaming,
        );
    } else if (providerName == "Chat01") {
        inputsToHide.push(
            ELEMENTS.repetitionPenalty,
            ELEMENTS.topK,
            ELEMENTS.maxTokens,
            ELEMENTS.useStreaming,
        );
    } else if (providerName == "Websim") {
        inputsToHide.push(
            ELEMENTS.temperature,
            ELEMENTS.frequencyPenalty,
            ELEMENTS.presencePenalty,
            ELEMENTS.repetitionPenalty,
            ELEMENTS.topP,
            ELEMENTS.topK,
            ELEMENTS.maxTokens,
            ELEMENTS.useStreaming,
        );
    } else if (providerName == "OpenRouter") {
        inputsToHide.push(
            ELEMENTS.maxTokens,
            ELEMENTS.useStreaming,
        );
    } else if (providerName == "Gitee AI") {
        inputsToHide.push(
            ELEMENTS.repetitionPenalty,
            ELEMENTS.topK,
            ELEMENTS.useStreaming,
        );
        inputsToClear.push(
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
            ELEMENTS.maxTokens,
            ELEMENTS.useStreaming,
        );
    }

    clearTextInputsAndHideParents(inputsToHide, "div");
    clearTextInputs(inputsToClear);
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

document.addEventListener('DOMContentLoaded', function () {
    //inventory item context menu handler
    document.addEventListener('click', (event) => {
        if (ELEMENTS.inventoryItemContextMenuContainer.style.display !== 'block')
            return;

        if (event.target !== ELEMENTS.inventoryItemContextMenu)
            hideInventoryItemContextMenu();
    });       

    //show/hide thinking module log
    ELEMENTS.useThinkingModule.onchange = function (e) {
        const displayNoneClass = 'displayNone';
        const logButton = document.getElementById('log-thinking-button-label');

        if (e.target.checked) {
            ELEMENTS.thinkingLogBox.classList.remove(displayNoneClass);
            logButton.classList.remove(displayNoneClass);
        } else {
            ELEMENTS.thinkingLogBox.classList.add(displayNoneClass);
            logButton.classList.add(displayNoneClass);
        }
    }   

    checkGameSource();
    translationModule.setTranslationFunctions([
        initializeUserInputEditor,
        initializeGameInstructionEditors
    ]);

    setGameInputsSynch();

    initializeGamePanelsController();
    initializeNpcInfoTabs();
    initializeUserInputEditor();
    initializeGameInstructionEditors();

    initializeDraggableObject(ELEMENTS.locationInfo);
    initializeDraggableObject(ELEMENTS.npcInfo);
    initializeDraggableObject(ELEMENTS.skillInfo);
    initializeDraggableObject(ELEMENTS.inventoryInfo);
    initializeDraggableObject(ELEMENTS.inventoryContainerInfo);
    initializeDraggableObject(ELEMENTS.questInfo);
    initializeDraggableObject(ELEMENTS.imageInfo);
    initializeDraggableObject(ELEMENTS.dataEditorInfo);

    initializeTooltipController('tooltip-max-weight-button', 'tooltip-max-weight');
    initializeTooltipController('tooltip-critical-weight-button', 'tooltip-critical-weight');
    initializeTooltipController('tooltip-inventory-basket-button', 'tooltip-inventory-basket');
    initializeTooltipController('tooltip-provider-ai-button', 'tooltip-provider-ai');
    initializeTooltipController('tooltip-provider-ai2-button', 'tooltip-provider-ai2');
    initializeTooltipController('tooltip-provider-ai3-button', 'tooltip-provider-ai3');
    initializeTooltipController('tooltip-provider-ai4-button', 'tooltip-provider-ai4');
    initializeTooltipController('tooltip-race-button', 'tooltip-race');
    initializeTooltipController('tooltip-class-button', 'tooltip-class');
    initializeTooltipController('tooltip-rpg-button', 'tooltip-rpg');
    initializeTooltipController('post-apocalypse-races-button', 'post-apocalypse-races');
    initializeTooltipController('post-apocalypse-classes-button', 'post-apocalypse-classes');
    initializeTooltipController('tooltip-post-apocalypse-rpg-button', 'tooltip-post-apocalypse-rpg');
    initializeTooltipController('post-apocalypse-tooltip-noMagic-button', 'post-apocalypse-tooltip-noMagic');
    initializeTooltipController('tooltip-noMagic-button', 'tooltip-noMagic');
    initializeTooltipController('tooltip-rpg2-button', 'tooltip-rpg2');
});
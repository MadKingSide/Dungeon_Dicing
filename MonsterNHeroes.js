/*###########################
#############################
V A R I A B L E S  
#############################
###########################*/

let mapContainer = document.querySelector(".map"); //allow the player to choose where to go
let fightingGround = document.querySelector(".fighting"); //appears when in fight

//variable to get items in index.html
const enemiesSide = document.querySelector(".enemies"); //where the enemies card are
let monsterselector = document.querySelector("#monsterselect"); //the select to choose a monster

let CharacterCreatorPage = document.querySelector(".CharacterCreator"); //the div where you create a character
let CharacterSheet = document.querySelector(".Character"); //the character and all its info

let Characterselector = document.querySelector("#Characterselect"); //the select to choose a class
let CharacterNameInput = document.querySelector(".CharacterCreator__name"); //where to write the player's name
let confirmCreation = document.querySelector(".CharacterCreator__confirm"); //the button to confirm the character creation

let CharacterNameSHEET = document.querySelector(".Name"); //the place where the name is written
let CharacterClassSHEET = document.querySelector(".Class"); //the place where the class is written
let CharacterLevelSHEET = document.querySelector(".Level"); //the place where the level is written
let CharacterExpSHEET = document.querySelector(".Exp"); //the place where the experience is written

let bag = document.querySelector(".bag"); //the div that contains the whole bag

let bagOpenButton = document.querySelector(".Character__bag__button"); //the button to open the bag
let bagCloseButton = document.querySelector(".bag__menu__close"); //the div to close the bag 

let bagItemsMenu = document.querySelector(".bag__menu__items"); //the div to go to the bag's item section
let bagAttacksMenu = document.querySelector(".bag__menu__attacks"); //the div to go to the bag's attack section

let bagItemsContainer = document.querySelector(".bag__container__items"); //the bag's item section
let bagAttacksContainer = document.querySelector(".bag__container__attacks"); //the bag's attack section

let menu = document.querySelector(".menu"); //the menu
let menuClose = document.querySelector(".menu__close"); //the button to close the menu

let notification = document.querySelector(".notification"); //click anywhere to make the pop up disappear
let notificationText = document.querySelector(".notification__text"); //the div to use for when the player need to see text (loot, discussion, examining something)

//to see which area the player is in to decide what type of monster to spawn
let area = "Forest";
let areaNumber;

let monsterselected = "none"; //to see what monster is curently selected in the monsterspawner in index.html


//to store and write the player's stats and infos
let CharacterName;
let CharacterClass;
let CharacterLevel;
let CharacterExp;

let CharacterHealth;
let CharacterMaxHealth; //used to stop overhealing
let CharacterAttMulti = 1;
let CharacterArmor;
let CharacterShield = 0;

let CurrentAttack = 0; // changes depending on the attack selected
let CurrentHeal = 0; // changes depending on the attack selected
let CurrentShield = 0; // changes depending on the attack selected
let CurrentType = 0; // changes depending on the attack selected
let selectedCard;
let selectedCardTime = 0;

let CurrentShieldpara = document.querySelector(".Shield");
let CharacterArmorpara = document.querySelector(".Armor");
let CharacterAttMultipara = document.querySelector(".AttMulti");

let currentCards = document.querySelectorAll(".bag__attacks"); // current attack list
let thisTurnCards = document.querySelector(".cards") //where to place different cards each turn
let cardsByTurn = 5; //number of card choice the player has per turn, might be able to upgrade it somehow...

let isAlive = true; // bool to see the condistion of the player (it more so the alert stops popping out)

let GainedExp = 0; //to calculate the exp won during a fight

let InventoryLoot = []; //will calculate and store how many and what items you have in your inventory
let LootDropArray = [];

let turn = "player"; // to decide if its the turn of the player or the monster
let MonsterTurnDone = 0; // count how many monster played
let turnVerificator; // to verify if every enemy played their turn
let CurrentlyFighting = false; //to verify if you are in a fight

let chosenAttack; // which attack the monster will do (not used yet)

let timeleftpara = document.querySelector(".timeLeft"); // where to write the time left
let timeFallback = 6;
let timeLeft = timeFallback; // the time the player has to play based on the card they play

let critRate = 100; // chance to crit (starting from 100 for easier code i hope)

/*###########################
#############################
L O O T  T A B L E
#############################
###########################*/

InventoryLoot = {
    GoblinEar: {
        Name: "Goblin Ear",
        Count: 0,
    },
    BrokenGoblinWeapon: {
        Name: "Broken Goblin Weapon",
        Count: 0,
    },
    ShamanStaff: {
        Name: "Shaman Staff",
        Count: 0,
    },
    MagicCrystalShard: {
        Name: "Magic Crystal Shard",
        Count: 0,
    },
    SteelSword: {
        Name: "Steel Sword",
        Count: 0,
    },
    UnidentifiedMagicArtefact: {
        Name: "Unidentified Magic Artefact",
        Count: 0,
    },
    WolfClaw: {
        Name: "Wolf Claw",
        Count: 0,
    },
    WolfFang: {
        Name: "Wolf Fang",
        Count: 0,
    },
    WolfFur: {
        Name: "Wolf Fur",
        Count: 0,
    },
    WerewolfClaw: {
        Name: "Werewolf Claw",
        Count: 0,
    },
    WerewolfFang: {
        Name: "Werewolf Fang",
        Count: 0,
    },
    WerewolfBlood: {
        Name: "Werewolf Blood",
        Count: 0,
    },
    WerewolfFur: {
        Name: "Werewolf Fur",
        Count: 0,
    },
    MagicWolfClaw: {
        Name: "Magic Wolf Claw",
        Count: 0,
    },
    MagicWolfFang: {
        Name: "Magic Wolf Fang",
        Count: 0,
    },
    LightningWolfFur: {
        Name: "Lightning Wolf Fur",
        Count: 0,
    },
    CrystalWolfHeart: {
        Name: "Crystal Wolf Heart",
        Count: 0,
    },
    BearClaw: {
        Name: "Bear Claw",
        Count: 0,
    },
    BearFang: {
        Name: "Bear Fang",
        Count: 0,
    },
    BearFur: {
        Name: "Bear Fur",
        Count: 0,
    },
    MagicBearClaw: {
        Name: "Magic Bear Claw",
        Count: 0,
    },
    MagicBearFang: {
        Name: "Magic Bear Fang",
        Count: 0,
    },
    FireBearFur: {
        Name: "Fire Bear Fur",
        Count: 0,
    },
    CrystalBearHeart: {
        Name: "Crystal Bear Heart",
        Count: 0,
    },
    TrollBlood: {
        Name: "Troll Blood",
        Count: 0,
    },
    TrollHide: {
        Name: "Troll Hide",
        Count: 0,
    },
    MagicOrb: {
        Name: "Magic Orb",
        Count: 0,
    },
}

const LootTable = Object.keys(InventoryLoot);

/*###########################
#############################
M O N S T E R S  C O D E
#############################
###########################*/

const monsters = {
    SpearGoblin: {
        Name: "Goblin (Spear)",
        Health: 9,
        Attacks: [
            LoudScream = {
                Type: "D",
                Name: "Loud Scream",
                Damage: 1,
            },
            Impale = {
                Type: "D",
                Name: "Impale",
                Damage: 4,
            },
        ],
        Exp: 1,
        Loot:
        {
            Number: 1,
            10: GoblinEar = {
                Image: "none",
                Name: "Goblin Ear",
                Price: 1,
                ID: "GoblinEar",
            },
            45: BrokenGoblinWeapon = {
                Image: "none",
                Name: "Broken Goblin Weapon",
                Price: 2,
                ID: "BrokenGoblinWeapon",
            },
        }
    },
    SwordGoblin: {
        Name: "Goblin (Sword)",
        Health: 10,
        Attacks: [
            LoudScream = {
                Type: "D",
                Name: "Loud Scream",
                Damage: 1,
            },
            Slash = {
                Type: "D",
                Name: "Slash",
                Damage: 3,
            },
        ],
        Exp: 1,
        Loot:
        {
            Number: 1,
            10: GoblinEar = {
                Image: "none",
                Name: "Goblin Ear",
                Price: 1,
                ID: "BrokenGoblinWeapon",
            },
            45: BrokenGoblinWeapon = {
                Image: "none",
                Name: "Broken Goblin Weapon",
                Price: 2,
                ID: "BrokenGoblinWeapon",
            },
        }
    },
    MaceGoblin: {
        Name: "Goblin (Mace)",
        Health: 10,
        Attacks: [
            LoudScream = {
                Type: "D",
                Name: "Loud Scream",
                Damage: 1,
            },
            Crush = {
                Type: "D",
                Name: "Crush",
                Damage: 3,
            },
        ],
        Exp: 1,
        Loot:
        {
            Number: 1,
            10: GoblinEar = {
                Image: "none",
                Name: "Goblin Ear",
                Price: 1,
                ID: "BrokenGoblinWeapon",
            },
            45: BrokenGoblinWeapon = {
                Image: "none",
                Name: "Broken Goblin Weapon",
                Price: 2,
                ID: "BrokenGoblinWeapon",
            },
        }
    },
    BowGoblin: {
        Name: "Goblin (Bow)",
        Health: 8,
        Attacks: [
            LoudScream = {
                Type: "D",
                Name: "Loud Scream",
                Damage: 1,
            },
            Rustyarrow = {
                Type: "D",
                Name: "Rusty arrow",
                Damage: 3,
            },
        ],
        Exp: 1,
        Loot:
        {
            Number: 1,
            10: GoblinEar = {
                Image: "none",
                Name: "Goblin Ear",
                Price: 1,
                ID: "BrokenGoblinWeapon",
            },
            45: BrokenGoblinWeapon = {
                Image: "none",
                Name: "Broken Goblin Weapon",
                Price: 2,
                ID: "BrokenGoblinWeapon",
            },
        }
    },
    ShamanGoblin: {
        Name: "Goblin Shaman",
        Health: 13,
        Attacks: [
            LoudScream = {
                Type: "D",
                Name: "Loud Scream",
                Damage: 3,
            },
            firebolt = {
                Type: "D",
                Name: "firebolt",
                Damage: 5,
            },
            IceBullet = {
                Type: "D",
                Name: "Ice Bullet",
                Damage: 7,
            },
            WaterStorm = {
                Type: "D",
                Name: "Water Storm",
                Damage: 6,
            },
            EarthSpear = {
                Type: "D",
                Name: "Earth Spear",
                Damage: 8,
            },
            RepulsiveOffering = {
                Type: "SU",
                Name: "Repulsive Offering",
                Summon: "HeroGoblin",
            },
        ],
        Exp: 4,
        Loot:
        {
            Number: 2,
            10: GoblinEar = {
                Image: "none",
                Name: "Goblin Ear",
                Price: 1,
                ID: "GoblinEar",
            },
            65: ShamanStaff = {
                Image: "none",
                Name: "Shaman Staff",
                Price: 10,
                ID: "ShamanStaff",
            },
            90: MagicCrystalShard = {
                Image: "none",
                Name: "Magic Crystal Shard",
                Price: 16,
                ID: "MagicCrystalShard",
            },
        }
    },
    HeroGoblin: {
        Name: "Goblin Hero",
        Health: 30,
        Attacks: [
            ProudRoar = {
                Type: "D",
                Name: "Proud Roar",
                Damage: 4,
            },
            AgileStab = {
                Type: "D",
                Name: "Agile Stab",
                Damage: 7,
            },
            DeceitfulSlash = {
                Type: "D",
                Name: "Deceitful Slash",
                Damage: 6,
            },
            PommelCrush = {
                Type: "D",
                Name: "Pommel Crush",
                Damage: 4,
            },
        ],
        Exp: 7,
        Loot:
        {
            Number: 4,
            10: GoblinEar = {
                Image: "none",
                Name: "Goblin Ear",
                Price: 1,
                ID: "GoblinEar",
            },
            30: SteelSword = {
                Image: "none",
                Name: "Steel Sword",
                Price: 10,
                ID: "SteelSword",
            },
            85: UnidentifiedMagicArtefact = {
                Image: "none",
                Name: "Unidentified Magic Artefact",
                Price: 30,
                ID: "UnidentifiedMagicArtefact",
            },
        }
    },
    Wolf: {
        Name: "Wolf",
        Image: "./Assets/Wolf.png",
        Health: 15,
        Attacks: [
            Bite = {
                Type: "D",
                Name: "Bite",
                Damage: 5,
            },
            Scratch = {
                Type: "D",
                Name: "Scratch",
                Damage: 4,
            },
            Tackle = {
                Type: "D",
                Name: "Tackle",
                Damage: 3,
            },
            Howl = {
                Type: "SU",
                Name: "Howl",
                Summon: "Wolf",
            },
        ],
        Exp: 2,
        Loot:
        {
            Number: 1,
            10: WolfClaw = {
                Image: "none",
                Name: "Wolf Claw",
                Price: 3,
                ID: "WolfClaw",
            },
            20: WolfFang = {
                Image: "none",
                Name: "Wolf Fang",
                Price: 5,
                ID: "WolfFang",
            },
            70: WolfFur = {
                Image: "none",
                Name: "Wolf Fur",
                Price: 10,
                ID: "WolfFur",
            },
        }
    },
    OldWolf: {
        Name: "Old Wolf",
        Health: 7,
        Attacks: [
            Scratch = {
                Type: "D",
                Name: "Scratch",
                Damage: 7,
            },
            Tackle = {
                Type: "D",
                Name: "Tackle",
                Damage: 4,
            },
            Exhausted = {
                Type: "D",
                Name: "Exhausted",
                Damage: 0,
            },
            Howl = {
                Type: "SU",
                Name: "Howl",
                Summon: "OldWolf",
            },
        ],
        Exp: 2,
        Loot:
        {
            Number: 2,
            10: WolfClaw = {
                Image: "none",
                Name: "Wolf Claw",
                Price: 3,
                ID: "WolfClaw",
            },
            20: WolfFang = {
                Image: "none",
                Name: "Wolf Fang",
                Price: 5,
                ID: "WolfFang",
            },
        }
    },
    WereWolf: {
        Name: "Werewolf",
        Health: 45,
        Attacks: [
            Bite = {
                Type: "D",
                Name: "Bite",
                Damage: 8,
            },
            Tackle = {
                Type: "D",
                Name: "Tackle",
                Damage: 7,
            },
            Claw = {
                Type: "D",
                Name: "Claw",
                Damage: 8,
            },
            Regeneration = {
                Type: "H",
                Name: "Regeneration",
                Heal: 10, //to finish
            },
        ],
        Exp: 5,
        Loot:
        {
            Number: 2,
            10: WerewolfClaw = {
                Image: "none",
                Name: "Werewolf Claw",
                Price: 5,
                ID: "WerewolfClaw",
            },
            20: WerewolfFang = {
                Image: "none",
                Name: "Werewolf Fang",
                Price: 8,
                ID: "WerewolfFang",
            },
            60: WerewolfBlood = {
                Image: "none",
                Name: "Werewolf Blood",
                Price: 10,
                ID: "WerewolfBlood",
            },
            83: WerewolfFur = {
                Image: "none",
                Name: "Werewolf Fur",
                Price: 13,
                ID: "WerewolfFur",
            },
        }
    },
    WolfKing: {
        Name: "Wolf King",
        Health: 25,
        Attacks: [
            Scratch = {
                Type: "D",
                Name: "Scratch",
                Damage: 9,
            },
            Tackle = {
                Type: "D",
                Name: "Tackle",
                Damage: 7,
            },
            Howl = {
                Type: "SU",
                Name: "Howl",
                Summon: "Wolf",
            },
            MoonShine = {
                Type: "H",
                Name: "Moon Shine",
                Heal: 15,
            },
            PredatorsPresence = {//maybe change this for a debuff
                Type: "D",
                Name: "Predator's Presence",
                Damage: 5,
            },
        ],
        Exp: 20,
        Loot:
        {
            Number: 3,
            30: MagicWolfClaw = {
                Image: "none",
                Name: "Magic Wolf Claw",
                Price: 15,
                ID: "MagicWolfClaw",
            },
            50: MagicWolfFang = {
                Image: "none",
                Name: "Magic Wolf Fang",
                Price: 20,
                ID: "MagicWolfFang",
            },
            75: LightningWolfFur = {
                Image: "none",
                Name: "Lightning Wolf Fur",
                Price: 30,
                ID: "LightningWolfFur",
            },
            90: CrystalWolfHeart = {
                Image: "none",
                Name: "Crystal Wolf Heart",
                Price: 50,
                ID: "CrystalWolfHeart",
            },
        }
    },
    Bear: {
        Name: "Bear",
        Health: 50,
        Attacks: [
            Scratch = {
                Type: "D",
                Name: "Scratch",
                Damage: 12,
            },
            Bite = {
                Type: "D",
                Name: "Bite",
                Damage: 15,
            },
            Tackle = {
                Type: "D",
                Name: "Tackle",
                Damage: 10,
            },
            Roar = {
                Type: "D",
                Name: "Roar",
                Damage: 9,
            },
        ],
        Exp: 10,
        Loot:
        {
            Number: 1,
            10: BearClaw = {
                Image: "none",
                Name: "Bear Claw",
                Price: 7,
                ID: "BearClaw",
            },
            27: BearFang = {
                Image: "none",
                Name: "Bear Fang",
                Price: 10,
                ID: "BearFang",
            },
            80: BearFur = {
                Image: "none",
                Name: "Bear Fur",
                Price: 15,
                ID: "BearFur",
            },
        }
    },
    BearKing: {
        Name: "Bear King",
        Health: 70,
        Attacks: [
            Scratch = {
                Type: "D",
                Name: "Scratch",
                Damage: 12,
            },
            Bite = {
                Type: "D",
                Name: "Bite",
                Damage: 15,
            },
            Tackle = {
                Type: "D",
                Name: "Tackle",
                Damage: 10,
            },
            Roar = {
                Type: "D",
                Name: "Roar",
                Damage: 9,
            },
            BloodThirst = {
                Type: "D",
                Name: "Blood Thirst",
                Damage: 15,
            },
            FreshMeat = {
                Type: "H",
                Name: "FreshMeat",
                Heal: 20,
            },
        ],
        Exp: 35,
        Loot:
        {
            Number: 3,
            30: MagicBearClaw = {
                Image: "none",
                Name: "Magic Bear Claw",
                Price: 15,
                ID: "MagicBearClaw",
            },
            50: MagicBearFang = {
                Image: "none",
                Name: "Magic Bear Fang",
                Price: 20,
                ID: "MagicBearFang",
            },
            75: FireBearFur = {
                Image: "none",
                Name: "Fire Bear Fur",
                Price: 30,
                ID: "FireBearFur",
            },
            85: CrystalBearHeart = {
                Image: "none",
                Name: "Crystal Bear Heart",
                Price: 50,
                ID: "CrystalBearHeart",
            },
        }
    },
    Troll: {
        Name: "Troll",
        Health: 90,
        Attacks: [
            Smash = {
                Type: "D",
                Name: "Smash",
                Damage: 12,
            },
            Smash = {
                Type: "D",
                Name: "Smash",
                Damage: 12,
            },
            Smash = {
                Type: "D",
                Name: "Smash",
                Damage: 12,
            },
            Smash = {
                Type: "D",
                Name: "Smash",
                Damage: 12,
            },
            Roar = {
                Type: "D",
                Name: "Roar",
                Damage: 9,
            },
            TrollsBlood = {
                Type: "H",
                Name: "Troll's Blood",
                Heal: 30,
            },
        ],
        Exp: 50,
        Loot:
        {
            Number: 4,
            15: TrollBlood = {
                Image: "none",
                Name: "Troll Blood",
                Price: 20,
                ID: "TrollBlood",
            },
            35: TrollHide = {
                Image: "none",
                Name: "Troll Hide",
                Price: 25,
                ID: "TrollHide",
            },
            95: MagicOrb = {
                Image: "none",
                Name: "Magic Orb",
                Price: 100,
                ID: "MagicOrb",
            },
        }
    },
}

const enemyCreator = Object.keys(monsters);


switch (area) {
    case "Forest":
        areaNumber = 0;
        break;

    default:
        break;
}




for (let i = 0; i < enemyCreator.length; i++) {
    //console.log(enemyCreator[i]);
    //console.log(monsters[enemyCreator[i]]);
    //console.log(monsters[enemyCreator[i]].Loot[10].Name);
    let monsterOption = document.createElement("option");
    monsterOption.innerHTML = `${monsters[enemyCreator[i]].Name}`;
    monsterOption.value = `${enemyCreator[i]}`;

    monsterselector.appendChild(monsterOption);
}

function monsterselect(monster) {
    //console.log(monster);
    monsterselected = monster;
}

document.querySelector(".Spawn").addEventListener("click", function () {

    fightingGround.classList.remove("unDisplay");
    mapContainer.classList.add("unDisplay");

    let RandomMonster = "nothing";
    //console.log(monsterselected);
    if (monsterselected == "none") {

        RandomMonster = enemyCreator[Math.floor((Math.random() * enemyCreator.length) + areaNumber)];
        new Monster(0, RandomMonster);

    } else if (monsterselected == "multiple") {
        RandomMonster = [];

        for (let i = 0; i < Math.floor((Math.floor(Math.random() * 3) + 2)); i++) { //minimum of 2 monsters, max of 4
            RandomMonster = enemyCreator[Math.floor((Math.random() * enemyCreator.length) + areaNumber)];
            new Monster(0, RandomMonster);
        }

    } else if (monsterselected == "goblinGroup") {
        RandomMonster = [];

        for (let i = 0; i < Math.floor((Math.floor(Math.random() * 3) + 2)); i++) { //minimum of 2 monsters, max of 4
            RandomMonster = enemyCreator[Math.floor((Math.random() * 6) + areaNumber)];
            new Monster(0, RandomMonster);
        }

    } else if (monsterselected == "wolfGroup") {
        RandomMonster = [];

        for (let i = 0; i < Math.floor((Math.floor(Math.random() * 3) + 2)); i++) { //minimum of 2 monsters, max of 4
            RandomMonster = enemyCreator[Math.floor((Math.random() * 4) + 6 + areaNumber)];
            new Monster(0, RandomMonster);
        }

    } else {
        RandomMonster = monsterselected;
        new Monster(0, RandomMonster);
    }
})

function MonsterSpawnerGroup(monster) {

    fightingGround.classList.remove("unDisplay");
    mapContainer.classList.add("unDisplay");

    let RandomMonster = "nothing";
    //console.log(monsterselected);
    if (monster == "none") {

        RandomMonster = enemyCreator[Math.floor((Math.random() * enemyCreator.length) + areaNumber)];
        new Monster(0, RandomMonster);

    } else if (monster == "multiple") {
        RandomMonster = [];

        for (let i = 0; i < Math.floor((Math.floor(Math.random() * 3) + 2)); i++) { //minimum of 2 monsters, max of 4
            RandomMonster = enemyCreator[Math.floor((Math.random() * enemyCreator.length) + areaNumber)];
            new Monster(0, RandomMonster);
        }

    } else if (monster == "goblinGroup") {
        RandomMonster = [];

        for (let i = 0; i < Math.floor((Math.floor(Math.random() * 3) + 2)); i++) { //minimum of 2 monsters, max of 4
            RandomMonster = enemyCreator[Math.floor((Math.random() * 6) + areaNumber)];
            new Monster(0, RandomMonster);
        }

    } else if (monster == "wolfGroup") {
        RandomMonster = [];

        for (let i = 0; i < Math.floor((Math.floor(Math.random() * 3) + 2)); i++) { //minimum of 2 monsters, max of 4
            RandomMonster = enemyCreator[Math.floor((Math.random() * 4) + 6 + areaNumber)];
            new Monster(0, RandomMonster);
        }

    } else {
        RandomMonster = monster;
        new Monster(0, RandomMonster);
    }
}

function spawnMonster(monster) {
    /*
    fightingGround.classList.remove("unDisplay");
    mapContainer.classList.add("unDisplay");

    let RandomMonster = "nothing";
    //console.log(monsterselected);
    if (monsterselected == "none") {

        RandomMonster = enemyCreator[Math.floor((Math.random() * enemyCreator.length) + areaNumber)];
        new Monster(0, RandomMonster);

    } else if (monsterselected == "multiple") {
        RandomMonster = [];

        for (let i = 0; i < Math.floor((Math.floor(Math.random() * 3) + 2)); i++) { //minimum of 2 monsters, max of 4
            RandomMonster = enemyCreator[Math.floor((Math.random() * enemyCreator.length) + areaNumber)];
            new Monster(0, RandomMonster);
        }

    } else if (monsterselected == "goblinGroup") {
        RandomMonster = [];

        for (let i = 0; i < Math.floor((Math.floor(Math.random() * 3) + 2)); i++) { //minimum of 2 monsters, max of 4
            RandomMonster = enemyCreator[Math.floor((Math.random() * 6) + areaNumber)];
            new Monster(0, RandomMonster);
        }

    } else if (monsterselected == "wolfGroup") {
        RandomMonster = [];

        for (let i = 0; i < Math.floor((Math.floor(Math.random() * 3) + 2)); i++) { //minimum of 2 monsters, max of 4
            RandomMonster = enemyCreator[Math.floor((Math.random() * 4) + 6 + areaNumber)];
            new Monster(0, RandomMonster);
        }

    } else {*/
    RandomMonster = monster;
    console.log(monster);
    new Monster(0, RandomMonster);
    //}
}


class Monster {

    #Attack;

    constructor(Health, MonsterNum) {
        this.Health = Health;
        this.#Attack;
        this.MonsterNum = MonsterNum;
        this.attackType;
        this.attackName;
        this.attackSummon;
        this.MaxHealth;

        this.CreateCard()

        this.chooseAttack(this.MonsterNum)

        if (!isNaN(this.MonsterNum)) {
            this.RandomMonster(this.MonsterNum);
        } else {
            this.selectedMonster(this.MonsterNum);
        }

        this.interval = setInterval(this.AttackPlayer.bind(this), 1000)
    }

    CreateCard() {
        this.card = document.createElement("div");
        this.card.classList.add("enemyCard");

        this.image = document.createElement("img");

        this.name = document.createElement("h3");

        this.healthCount = document.createElement("p");

        this.attackNamepara = document.createElement("p");

        this.attack = document.createElement("p");

        this.card.appendChild(this.image);
        this.card.appendChild(this.name);
        this.card.appendChild(this.healthCount);
        this.card.appendChild(this.attackNamepara);
        this.card.appendChild(this.attack);

        this.card.addEventListener("mouseenter", () => {
            console.log("pain");
        });

        this.card.addEventListener("mouseleave", () => {
            console.log("shit");
        });

        this.card.addEventListener("click", () => {
            this.GetHit();
        });
    }

    /*RandomMonster() {
        this.MonsterNum = enemyCreator[this.MonsterNum];
        console.log(this.MonsterNum)
        this.name.innerHTML = monsters[enemyCreator[enemyCreator.indexOf(this.MonsterNum)]].Name;

        this.healthCount.innerHTML = monsters[enemyCreator[enemyCreator.indexOf(this.MonsterNum)]].Health;
        this.Health = monsters[enemyCreator[enemyCreator.indexOf(this.MonsterNum)]].Health;

        this.attack.innerHTML = monsters[enemyCreator[enemyCreator.indexOf(this.MonsterNum)]].Attack;

        enemiesSide.appendChild(this.card);
    }*/

    selectedMonster(monster) {
        this.image.src = monsters[enemyCreator[enemyCreator.indexOf(monster)]].Image;

        this.name.innerHTML = monsters[enemyCreator[enemyCreator.indexOf(monster)]].Name;

        this.Health = monsters[enemyCreator[enemyCreator.indexOf(monster)]].Health;
        this.MaxHealth = this.Health;
        this.healthCount.innerHTML = `Health : ${this.Health}/${this.MaxHealth}`;;

        //this.attack.innerHTML = `Attack : ${monsters[enemyCreator[enemyCreator.indexOf(monster)]].Attack}`;

        enemiesSide.appendChild(this.card);
    }

    chooseAttack(monster) {
        let randomAttacknumber = Math.floor(Math.random() * monsters[enemyCreator[enemyCreator.indexOf(monster)]].Attacks.length);
        let randomAttack = monsters[enemyCreator[enemyCreator.indexOf(monster)]].Attacks[randomAttacknumber];

        this.attackType = randomAttack.Type;
        this.attackName = randomAttack.Name;
        this.#Attack = randomAttack.Damage;
        this.attackSummon = randomAttack.Summon;
        this.Heal = randomAttack.Heal;

        this.attackNamepara.innerHTML = `Attack Name : ${this.attackName}`;

        if (this.attackType == "SU") {
            this.attack.innerHTML = `Summon : ${this.attackSummon}`;
        } else if (this.attackType == "D") {
            this.attack.innerHTML = `Damage : ${this.#Attack}`;
        } else if (this.attackType == "H") {
            this.attack.innerHTML = `Heal : ${this.Heal}`;
        }        
        
        //console.log("Changed");
    }

    GetHit() {
        if (selectedCard != undefined) {

            if (CurrentType == "DH") { //Hitting the enemy and heal yourself
                this.Health -= CritCalculator();

                CharacterHealth += CurrentHeal;
                if (CharacterHealth > CharacterMaxHealth) {
                    CharacterHealth = CharacterMaxHealth;
                    document.querySelector(".healthBar").innerHTML = `Health : ${CharacterHealth}/${CharacterMaxHealth}`;
                } else {
                    document.querySelector(".healthBar").innerHTML = `Health : ${CharacterHealth}/${CharacterMaxHealth}`;
                }
            } else if (CurrentType == "DS") {
                this.Health -= CritCalculator();

                CharacterShield += CurrentShield;
                document.querySelector(".Shield").innerHTML = `Shield : ${CharacterShield}`;
            } else if (CurrentType == "D") {
                this.Health -= CritCalculator();
            } else if (CurrentType == "H") { //if you want to heal the enemy...
                this.Health += CurrentHeal;
                if (this.Health > this.MaxHealth) {
                    this.Health = this.MaxHealth;
                }
            } else if (CurrentType == "HS") {
                selectedCardTime = 0;
                CurrentAttack = 0; //resets attack
                CurrentHeal = 0; //resets heal

                selectedCard = undefined; //remove card from variable
            }

            timeLeft -= selectedCardTime;
            timeleftpara.innerHTML = `Time : ${timeLeft}`;

            selectedCard.classList.remove("activated");
            selectedCard.classList.add("deactivated");
            CurrentAttack = 0; //resets attack
            CurrentHeal = 0; //resets heal

            selectedCard = undefined; //remove card from variable

            this.healthCount.innerHTML = `Health : ${this.Health}/${this.MaxHealth}`;;


            if (this.Health <= 0) {
                this.card.remove();
                clearInterval(this.interval);
                MonsterKilled(this.MonsterNum);
            }

            //console.log(this.Health);
        }

    }

    AttackPlayer() {
        if (turn == "monster") {
            if (this.Health > 0) {
                if (this.attackType == "D") {

                    if (CharacterShield < this.#Attack - CharacterArmor) {
                        CharacterHealth -= (this.#Attack - CharacterArmor) - CharacterShield;
                        CharacterShield = 0;
                    } else {
                        CharacterShield -= (this.#Attack - CharacterArmor);
                    }

                    document.querySelector(".Shield").innerHTML = `Shield : ${CharacterShield}`;
                    document.querySelector(".healthBar").innerHTML = `Health : ${CharacterHealth}/${CharacterMaxHealth}`;
                } else if (this.attackType == "SU") {
                    spawnMonster(this.attackSummon)
                } else if (this.attackType == "H") {
                    this.Health += this.Heal;

                    if (this.Health > this.MaxHealth) {
                        this.Health = this.MaxHealth;
                        this.healthCount.innerHTML = `Health : ${this.Health}/${this.MaxHealth}`;
                    } else {
                        this.healthCount.innerHTML = `Health : ${this.Health}/${this.MaxHealth}`;;
                    }
                    
                }

                this.chooseAttack(this.MonsterNum);
                //console.log("attacked");
                MonsterTurnDone++;
            }
        }
    }
}

function CritCalculator() {
    let damage = 0;
    if (Math.floor(Math.random() * 100) + 1 == critRate) { //see if its a critical hit
        console.log("Crit")
        damage = (CurrentAttack * CharacterAttMulti) * 2;
    } else {
        damage = (CurrentAttack * CharacterAttMulti);
    }
    return damage
}


function MonsterKilled(MonsterKilled) {

    GainedExp += monsters[enemyCreator[enemyCreator.indexOf(MonsterKilled)]].Exp;

    let NumberOfLoot = monsters[enemyCreator[enemyCreator.indexOf(MonsterKilled)]].Loot.Number;

    for (let i = 0; i < NumberOfLoot; i++) {
        let lootPercentage = Math.floor(Math.random() * 100) + 1;

        while (monsters[enemyCreator[enemyCreator.indexOf(MonsterKilled)]].Loot[lootPercentage] == undefined) {
            if (lootPercentage <= 0) {
                break;
            }
            lootPercentage--;
        }

        if (monsters[enemyCreator[enemyCreator.indexOf(MonsterKilled)]].Loot[lootPercentage] != undefined) {
            LootDropArray.push(monsters[enemyCreator[enemyCreator.indexOf(MonsterKilled)]].Loot[lootPercentage])
        }
    }

    //console.log(LootDropArray)

    if (enemiesSide.childElementCount <= 0) {
        FightWon(LootDropArray, GainedExp);
    }
}

function LevelUp() {
    CharacterExp = CharacterExp - Heros[PlayerHandler[PlayerHandler.indexOf(CharacterClass)]].Levels[CharacterLevel - 1].ExpNeeded;

    CharacterLevel++;
    CharacterLevelSHEET.innerHTML = ` Level : ${CharacterLevel}`;

    CharacterHealth = Heros[PlayerHandler[PlayerHandler.indexOf(CharacterClass)]].Levels[CharacterLevel - 1].Health;
    CharacterMaxHealth = CharacterHealth;
    document.querySelector(".healthBar").innerHTML = `Health : ${CharacterHealth}/${CharacterMaxHealth}`;

    CharacterExpSHEET.innerHTML = `${CharacterExp} / ${Heros[PlayerHandler[PlayerHandler.indexOf(CharacterClass)]].Levels[CharacterLevel - 1].ExpNeeded}`;

    CharacterAttMulti = Heros[PlayerHandler[PlayerHandler.indexOf(CharacterClass)]].Levels[CharacterLevel - 1].AttMulti;
    document.querySelector(".AttMulti").innerHTML = `Attack Multiplier : ${CharacterAttMulti}`;;

    CharacterArmor = Heros[PlayerHandler[PlayerHandler.indexOf(CharacterClass)]].Levels[CharacterLevel - 1].Armor;
    document.querySelector(".Armor").innerHTML = `Armor : ${CharacterArmor}`;;
}

function FightWon(lootarray, exp) {
    let expcount = document.createElement("h3");
    expcount.innerHTML = `You've won ${exp} experience.`;
    notificationText.appendChild(expcount);

    lootarray.forEach(element => {

        let lootdropped = document.createElement("h3");
        lootdropped.innerHTML = `${element.Name}`;
        notificationText.appendChild(lootdropped);

        if (InventoryLoot[LootTable[LootTable.indexOf(`${element.ID}`)]].Count == 0) {

            let lootCard = document.createElement("div");
            lootCard.classList.add("bag__items")

            let lootImage = document.createElement("img");
            lootImage.src = `${element.Image}`

            let lootName = document.createElement("h3");
            lootName.innerHTML = `${element.Name}`

            let lootPrice = document.createElement("h3");
            lootPrice.innerHTML = `Price : ${element.Price}`

            InventoryLoot[LootTable[LootTable.indexOf(`${element.ID}`)]].Count++;
            let LootQuantity = document.createElement("h3");
            LootQuantity.innerHTML = `X ${InventoryLoot[LootTable[LootTable.indexOf(`${element.ID}`)]].Count}`;
            LootQuantity.classList.add(`${element.ID}`);

            lootCard.appendChild(lootImage);
            lootCard.appendChild(lootName);
            lootCard.appendChild(lootPrice);
            lootCard.appendChild(LootQuantity);

            bagItemsContainer.appendChild(lootCard);
        } else {
            InventoryLoot[LootTable[LootTable.indexOf(`${element.ID}`)]].Count++;
            document.querySelector(`.${element.ID}`).innerHTML = `X ${InventoryLoot[LootTable[LootTable.indexOf(`${element.ID}`)]].Count}`;
        }
        //console.log(InventoryLoot);
    });

    CharacterExp += exp;


    //resets variables for next encounter
    GainedExp = 0;
    LootDropArray = [];

    CharacterHealth = Heros[PlayerHandler[PlayerHandler.indexOf(CharacterClass)]].Levels[CharacterLevel - 1].Health;
    document.querySelector(".healthBar").innerHTML = `Health : ${CharacterHealth}/${CharacterMaxHealth}`;

    notification.classList.remove("unDisplay");

    fightingGround.classList.add("unDisplay");
    mapContainer.classList.remove("unDisplay");

    if (CharacterExp >= Heros[PlayerHandler[PlayerHandler.indexOf(CharacterClass)]].Levels[CharacterLevel - 1].ExpNeeded) {
        LevelUp();
    }

    CharacterExpSHEET.innerHTML = `${CharacterExp} / ${Heros[PlayerHandler[PlayerHandler.indexOf(CharacterClass)]].Levels[CharacterLevel - 1].ExpNeeded}`;

    for (let i = 0; i < currentCards.length; i++) {
        bagAttacksContainer.appendChild(currentCards[i]);
    }

    CurrentlyFighting = false;
}

/*###########################
#############################
P L A Y E R  C O D E
#############################
###########################*/

const Heros = {
    InfantryMen: {
        Name: "InfantryMen",
        Attacks: [
            Kick = {
                Type: "D",
                Name: "Kick",
                Damage: 2,
                Time: 1.5,
            },
            Bandage = {
                Type: "H",
                Name: "Bandage",
                Heal: 8,
                Time: 3,
            },
            Bandage = {
                Type: "H",
                Name: "Bandage",
                Heal: 8,
                Time: 3,
            },
            Cleave = {
                Type: "D",
                Name: "Cleave",
                Damage: 4,
                Time: 2.5,
            },
            LargeCleave = {
                Type: "D",
                Name: "Large Cleave",
                Damage: 7,
                Time: 3,
            },
            StaffHit = {
                Type: "D",
                Name: "Staff Hit",
                Damage: 3,
                Time: 1.5,
            },
            Stab = {
                Type: "D",
                Name: "Stab",
                Damage: 3,
                Time: 2,
            },
            PiercingStab = {
                Type: "D",
                Name: "Piercing Stab",
                Damage: 3,
                Time: 3,
            },
            BloodFrenzy = {
                Type: "DH",
                Name: "Blood Frenzy",
                Damage: 7,
                Heal: 8,
                Time: 5,
            },
        ],
        Levels: [
            lvl1 = {
                Level: 1,
                Health: 40,
                AttMulti: 1,
                Armor: 1,
                ExpNeeded: 10,
            },
            lvl2 = {
                Level: 2,
                Health: 45,
                AttMulti: 1,
                Armor: 1,
                ExpNeeded: 20,
            },
            lvl3 = {
                Level: 3,
                Health: 50,
                AttMulti: 1.5,
                Armor: 1,
                ExpNeeded: 30,
            },
            lvl4 = {
                Level: 4,
                Health: 60,
                AttMulti: 1.5,
                Armor: 1,
                ExpNeeded: 50,
            },
            lvl5 = {
                Level: 5,
                Health: 70,
                AttMulti: 2,
                Armor: 2,
                ExpNeeded: 70,
            },
            lvl6 = {
                Level: 6,
                Health: 80,
                AttMulti: 2,
                Armor: 2,
                ExpNeeded: 100,
            },
            lvl7 = {
                Level: 7,
                Health: 95,
                AttMulti: 2.5,
                Armor: 2,
                ExpNeeded: 140,
            },
            lvl8 = {
                Level: 8,
                Health: 110,
                AttMulti: 2.5,
                Armor: 2,
                ExpNeeded: 200,
            },
            lvl9 = {
                Level: 9,
                Health: 130,
                AttMulti: 3,
                Armor: 3,
                ExpNeeded: 300,
            },
            lvl10 = {
                Level: 10,
                Health: 160,
                AttMulti: 4,
                Armor: 4,
                ExpNeeded: 500,
            },
        ]
    },
    Hunter: {
        Name: "Hunter",
        Attacks: [
            Kick = {
                Type: "D",
                Name: "Kick",
                Damage: 2,
                Time: 1.5,
            },
            HealingHerbs = {
                Type: "H",
                Name: "Healing Herbs",
                Heal: 15,
                Time: 4,
            },
            HealingHerbs = {
                Type: "H",
                Name: "Healing Herbs",
                Heal: 15,
                Time: 4,
            },
            Butcher = {
                Type: "D",
                Name: "Butcher",
                Damage: 3,
                Time: 2,
            },
            FreshMeat = {
                Type: "DH",
                Name: "Fresh Meat",
                Damage: 5,
                Heal: 5,
                Time: 2,
            },
            Arrow = {
                Type: "D",
                Name: "Arrow",
                Damage: 4,
                Time: 2,
            },
            PiercingArrow = {
                Type: "D",
                Name: "Piercing Arrow",
                Damage: 5,
                Time: 2.5,
            },
            DoubleShot = {
                Type: "D",
                Name: "Double Shot",
                Damage: 8,
                Time: 4,
            },
        ],
        Levels: [
            lvl1 = {
                Level: 1,
                Health: 30,
                AttMulti: 1,
                Armor: 0,
                ExpNeeded: 10,
            },
            lvl2 = {
                Level: 2,
                Health: 35,
                AttMulti: 1,
                Armor: 0,
                ExpNeeded: 20,
            },
            lvl3 = {
                Level: 3,
                Health: 40,
                AttMulti: 1.5,
                Armor: 0,
                ExpNeeded: 30,
            },
            lvl4 = {
                Level: 4,
                Health: 45,
                AttMulti: 1.5,
                Armor: 0,
                ExpNeeded: 50,
            },
            lvl5 = {
                Level: 5,
                Health: 55,
                AttMulti: 2,
                Armor: 0,
                ExpNeeded: 70,
            },
            lvl6 = {
                Level: 6,
                Health: 65,
                AttMulti: 2,
                Armor: 0,
                ExpNeeded: 100,
            },
            lvl7 = {
                Level: 7,
                Health: 80,
                AttMulti: 2.5,
                Armor: 0,
                ExpNeeded: 140,
            },
            lvl8 = {
                Level: 8,
                Health: 95,
                AttMulti: 2.5,
                Armor: 0,
                ExpNeeded: 200,
            },
            lvl9 = {
                Level: 9,
                Health: 110,
                AttMulti: 3,
                Armor: 0,
                ExpNeeded: 300,
            },
            lvl10 = {
                Level: 10,
                Health: 130,
                AttMulti: 4,
                Armor: 0,
                ExpNeeded: 500,
            },
        ]
    },
    Paladin: {
        Name: "Paladin",
        Attacks: [
            Kick = {
                Type: "D",
                Name: "Kick",
                Damage: 2,
                Time: 1.5,
            },
            Prayer = {
                Type: "HS",
                Name: "Prayer",
                Heal: 10,
                Shield: 10,
                Time: 4,
            },
            ShieldUp = {
                Type: "S",
                Name: "Shield Up",
                Shield: 5,
                Time: 1.5,
            },
            ShieldBash = {
                Type: "DS",
                Name: "Shield Bash",
                Damage: 2,
                Shield: 2,
                Time: 1.5,
            },
            Stab = {
                Type: "D",
                Name: "Stab",
                Damage: 5,
                Time: 2,
            },
            Slash = {
                Type: "D",
                Name: "Slash",
                Damage: 5,
                Time: 2,
            },
            Gut = {
                Type: "D",
                Name: "Gut",
                Damage: 7,
                Time: 3.5,
            },
            Decapitate = {
                Type: "D",
                Name: "Decapitate",
                Damage: 6,
                Time: 3,
            },
            HolyPunishment = {
                Type: "D",
                Name: "Holy Punishment",
                Damage: 10,
                Time: 6,
            },
        ],
        Levels: [
            lvl1 = {
                Level: 1,
                Health: 50,
                AttMulti: 1,
                Armor: 2,
                ExpNeeded: 10,
            },
            lvl2 = {
                Level: 2,
                Health: 60,
                AttMulti: 1,
                Armor: 2,
                ExpNeeded: 20,
            },
            lvl3 = {
                Level: 3,
                Health: 70,
                AttMulti: 1.5,
                Armor: 2,
                ExpNeeded: 30,
            },
            lvl4 = {
                Level: 4,
                Health: 80,
                AttMulti: 1.5,
                Armor: 3,
                ExpNeeded: 50,
            },
            lvl5 = {
                Level: 5,
                Health: 95,
                AttMulti: 2,
                Armor: 3,
                ExpNeeded: 70,
            },
            lvl6 = {
                Level: 6,
                Health: 110,
                AttMulti: 2,
                Armor: 3,
                ExpNeeded: 100,
            },
            lvl7 = {
                Level: 7,
                Health: 125,
                AttMulti: 2.5,
                Armor: 4,
                ExpNeeded: 140,
            },
            lvl8 = {
                Level: 8,
                Health: 140,
                AttMulti: 2.5,
                Armor: 4,
                ExpNeeded: 200,
            },
            lvl9 = {
                Level: 9,
                Health: 160,
                AttMulti: 3,
                Armor: 4,
                ExpNeeded: 300,
            },
            lvl10 = {
                Level: 10,
                Health: 200,
                AttMulti: 4,
                Armor: 5,
                ExpNeeded: 500,
            },
        ]
    },
    Mage: {
        Name: "Mage",
        Attacks: [
            Kick = {
                Type: "D",
                Name: "Kick",
                Damage: 2,
                Time: 1.5,
            },
            MagicArtifact = {
                Type: "HS",
                Name: "Magic Artifact",
                Heal: 10,
                Shield: 10,
                Time: 4,
            },
            MagicShield = {
                Type: "S",
                Name: "Magic Shield",
                Shield: 7,
                Time: 2,
            },
            Firebolt = {
                Type: "D",
                Name: "Firebolt",
                Damage: 7,
                Time: 3,
            },
            MagicMissile = {
                Type: "D",
                Name: "Magic Missile",
                Damage: 5,
                Time: 2,
            },
            Eruption = {
                Type: "D",
                Name: "Eruption",
                Damage: 10,
                Time: 4.5,
            },
            WindBlades = {
                Type: "D",
                Name: "Wind Blades",
                Damage: 5,
                Time: 2.5,
            },
            EarthBullets = {
                Type: "D",
                Name: "Earth Bullets",
                Damage: 4,
                Time: 2,
            },
            HealingPotion = {
                Type: "H",
                Name: "Healing Potion",
                Damage: 6,
                Time: 2,
            },
            HealingPotion = {
                Type: "H",
                Name: "Healing Potion",
                Damage: 6,
                Time: 2,
            },
        ],
        Levels: [
            lvl1 = {
                Level: 1,
                Health: 20,
                AttMulti: 1,
                Armor: 0,
                ExpNeeded: 10,
            },
            lvl2 = {
                Level: 2,
                Health: 23,
                AttMulti: 1,
                Armor: 0,
                ExpNeeded: 20,
            },
            lvl3 = {
                Level: 3,
                Health: 26,
                AttMulti: 1.5,
                Armor: 0,
                ExpNeeded: 30,
            },
            lvl4 = {
                Level: 4,
                Health: 30,
                AttMulti: 1.5,
                Armor: 0,
                ExpNeeded: 50,
            },
            lvl5 = {
                Level: 5,
                Health: 35,
                AttMulti: 2,
                Armor: 0,
                ExpNeeded: 70,
            },
            lvl6 = {
                Level: 6,
                Health: 40,
                AttMulti: 2,
                Armor: 0,
                ExpNeeded: 100,
            },
            lvl7 = {
                Level: 7,
                Health: 47,
                AttMulti: 2.5,
                Armor: 0,
                ExpNeeded: 140,
            },
            lvl8 = {
                Level: 8,
                Health: 54,
                AttMulti: 2.5,
                Armor: 0,
                ExpNeeded: 200,
            },
            lvl9 = {
                Level: 9,
                Health: 60,
                AttMulti: 3,
                Armor: 0,
                ExpNeeded: 300,
            },
            lvl10 = {
                Level: 10,
                Health: 65,
                AttMulti: 4,
                Armor: 0,
                ExpNeeded: 500,
            },
        ]
    },
    /*Summoner: {
        Name: "Summoner",
        Attack: 5,
        Levels: [
            lvl1 = {
                Level: 1,
                Health: 20,
                AttMulti: 1,
                Armor: 0,
                ExpNeeded: 10,
            },
            lvl2 = {
                Level: 2,
                Health: 22,
                AttMulti: 1,
                Armor: 0,
                ExpNeeded: 20,
            },
            lvl3 = {
                Level: 3,
                Health: 24,
                AttMulti: 1.5,
                Armor: 0,
                ExpNeeded: 30,
            },
            lvl4 = {
                Level: 4,
                Health: 26,
                AttMulti: 1.5,
                Armor: 0,
                ExpNeeded: 50,
            },
            lvl5 = {
                Level: 5,
                Health: 28,
                AttMulti: 2,
                Armor: 0,
                ExpNeeded: 70,
            },
            lvl6 = {
                Level: 6,
                Health: 30,
                AttMulti: 2,
                Armor: 0,
                ExpNeeded: 100,
            },
            lvl7 = {
                Level: 7,
                Health: 33,
                AttMulti: 2.5,
                Armor: 0,
                ExpNeeded: 140,
            },
            lvl8 = {
                Level: 8,
                Health: 36,
                AttMulti: 2.5,
                Armor: 0,
                ExpNeeded: 200,
            },
            lvl9 = {
                Level: 9,
                Health: 39,
                AttMulti: 3,
                Armor: 0,
                ExpNeeded: 300,
            },
            lvl10 = {
                Level: 10,
                Health: 45,
                AttMulti: 4,
                Armor: 0,
                ExpNeeded: 500,
            },
        ]
    },*/
}


const PlayerHandler = Object.keys(Heros);

if (CharacterClass == undefined) {
    document.querySelector(".monsterSelector").classList.add("unDisplay");
}


confirmCreation.addEventListener("click", function () {

    if (Characterselector.value == "none") {
        window.alert("Please choose a class");
        return;
    } else if (CharacterNameInput.value == "") {
        window.alert("Please choose a name");
        return;
    }

    /*let CreationConfirmation = window.prompt("Are you sure? \nType YES in full MAJ to confirm.");

    if (CreationConfirmation === "YES") {*/
    CharacterCreatorPage.style.display = "none"
    CharacterSheet.style.filter = "blur(0)"
    /*} else {
        return;
    }*/

    CharacterName = CharacterNameInput.value;
    CharacterNameSHEET.innerHTML = `${CharacterNameInput.value}`;

    CharacterClass = Characterselector.value;
    CharacterClassSHEET.innerHTML = ` Class : ${Characterselector.value}`;

    CharacterLevel = 1;
    CharacterLevelSHEET.innerHTML = ` Level : ${CharacterLevel}`;

    CharacterExp = 0;
    CharacterExpSHEET.innerHTML = `${CharacterExp} / ${Heros[PlayerHandler[PlayerHandler.indexOf(CharacterClass)]].Levels[CharacterLevel - 1].ExpNeeded}`;

    CharacterHealth = Heros[PlayerHandler[PlayerHandler.indexOf(CharacterClass)]].Levels[CharacterLevel - 1].Health;
    CharacterMaxHealth = CharacterHealth;
    document.querySelector(".healthBar").innerHTML = `Health : ${CharacterHealth}/${CharacterMaxHealth}`;

    CharacterAttMulti = Heros[PlayerHandler[PlayerHandler.indexOf(CharacterClass)]].Levels[CharacterLevel - 1].AttMulti;
    document.querySelector(".AttMulti").innerHTML = `Attack Multiplier : ${CharacterAttMulti}`;

    CharacterArmor = Heros[PlayerHandler[PlayerHandler.indexOf(CharacterClass)]].Levels[CharacterLevel - 1].Armor;
    document.querySelector(".Armor").innerHTML = `Armor : ${CharacterArmor}`;

    document.querySelector(".Shield").innerHTML = `Shield : ${CharacterShield}`;

    let CharAttackList = Heros[PlayerHandler[PlayerHandler.indexOf(CharacterClass)]].Attacks;

    CharAttackList.forEach(element => {
        new Attacks(element);

    });
    //console.log(Heros[PlayerHandler[PlayerHandler.indexOf(CharacterClass)]].Attacks[0].Damage);

    document.querySelector(".monsterSelector").classList.remove("unDisplay");
})


for (let i = 0; i < PlayerHandler.length; i++) {
    //console.log(PlayerHandler[i]);
    //console.log(Heros[PlayerHandler[i]]);

    let CharacterOption = document.createElement("option");
    CharacterOption.innerHTML = `${Heros[PlayerHandler[i]].Name}`;
    CharacterOption.value = `${PlayerHandler[i]}`;

    Characterselector.appendChild(CharacterOption);
}

class Attacks {
    constructor(Attack) {
        this.Attack = Attack;
        this.Type = Attack.Type;
        this.Name = Attack.Name;
        this.Damage = Attack.Damage;
        this.Heal = Attack.Heal;
        this.Time = Attack.Time;
        this.Shield = Attack.Shield;

        this.CreateCard()

        setInterval(() => {
            if (this.Time > timeLeft) {
                this.card.classList.add("deactivated");
            }
        }, 100);
    }

    CreateCard() {

        this.card = document.createElement("div");
        this.card.classList.add("bag__attacks");

        this.namePara = document.createElement("h3");
        this.namePara.innerHTML = `${this.Name}`;
        this.card.appendChild(this.namePara);

        if (this.Type == "DH") {

            this.attackPara = document.createElement("p");
            this.attackPara.innerHTML = `Damage : ${this.Damage}`;
            this.card.appendChild(this.attackPara);

            this.healPara = document.createElement("p");
            this.healPara.innerHTML = `Heal : ${this.Heal}`;
            this.card.appendChild(this.healPara);
        }

        if (this.Type == "DS") {

            this.attackPara = document.createElement("p");
            this.attackPara.innerHTML = `Damage : ${this.Damage}`;
            this.card.appendChild(this.attackPara);

            this.shieldPara = document.createElement("p");
            this.shieldPara.innerHTML = `Shield : ${this.Shield}`;
            this.card.appendChild(this.shieldPara);
        }

        if (this.Type == "HS") {

            this.healPara = document.createElement("p");
            this.healPara.innerHTML = `Heal : ${this.Heal}`;
            this.card.appendChild(this.healPara);

            this.shieldPara = document.createElement("p");
            this.shieldPara.innerHTML = `Shield : ${this.Shield}`;
            this.card.appendChild(this.shieldPara);

            this.card.addEventListener("dblclick", () => {
                CharacterHealth += CurrentHeal;
                if (CharacterHealth > CharacterMaxHealth) {
                    CharacterHealth = CharacterMaxHealth;
                    document.querySelector(".healthBar").innerHTML = `Health : ${CharacterHealth}/${CharacterMaxHealth}`;
                } else {
                    document.querySelector(".healthBar").innerHTML = `Health : ${CharacterHealth}/${CharacterMaxHealth}`;
                }

                CharacterShield += CurrentShield;
                document.querySelector(".Shield").innerHTML = `Shield : ${CharacterShield}`;

                this.card.classList.add("deactivated");

                timeLeft -= selectedCardTime;
                timeleftpara.innerHTML = `Time : ${timeLeft}`;
                CurrentHeal = 0;
                CurrentShield = 0;

                selectedCard = undefined; //remove card from variable
            })
        }

        if (this.Type == "D") {
            this.attackPara = document.createElement("p");
            this.attackPara.innerHTML = `Damage : ${this.Damage}`;
            this.card.appendChild(this.attackPara);
        }

        if (this.Type == "H") {
            this.healPara = document.createElement("p");
            this.healPara.innerHTML = `Heal : ${this.Heal}`;
            this.card.appendChild(this.healPara);

            this.card.addEventListener("dblclick", () => {
                CharacterHealth += CurrentHeal;
                if (CharacterHealth > CharacterMaxHealth) {
                    CharacterHealth = CharacterMaxHealth;
                    document.querySelector(".healthBar").innerHTML = `Health : ${CharacterHealth}/${CharacterMaxHealth}`;
                } else {
                    document.querySelector(".healthBar").innerHTML = `Health : ${CharacterHealth}/${CharacterMaxHealth}`;
                }

                this.card.classList.add("deactivated");

                timeLeft -= selectedCardTime;
                timeleftpara.innerHTML = `Time : ${timeLeft}`;
                CurrentHeal = 0;

                selectedCard = undefined; //remove card from variable
            })
        }

        if (this.Type == "S") {
            this.shieldPara = document.createElement("p");
            this.shieldPara.innerHTML = `Shield : ${this.Shield}`;
            this.card.appendChild(this.shieldPara);

            this.card.addEventListener("dblclick", () => {
                CharacterShield += CurrentShield;
                document.querySelector(".Shield").innerHTML = `Shield : ${CharacterShield}`;
                this.card.classList.add("deactivated");

                timeLeft -= selectedCardTime;
                timeleftpara.innerHTML = `Time : ${timeLeft}`;
                CurrentShield = 0;

                selectedCard = undefined; //remove card from variable
            })
        }



        this.timePara = document.createElement("p");
        this.timePara.innerHTML = `Time : ${this.Time}`;
        this.card.appendChild(this.timePara);




        bagAttacksContainer.appendChild(this.card);

        this.card.addEventListener("click", () => {
            if (this.card.classList.contains("activated")) {
                this.DeActivateCard();
            } else {
                this.ActivateCard();
            }
        });

        currentCards = document.querySelectorAll(".bag__attacks");
    }

    ActivateCard() {
        if (!this.card.classList.contains("deactivated") && this.Time <= timeLeft) {
            currentCards = document.querySelectorAll(".bag__attacks");
            //console.log(currentCards)

            for (let i = 0; i < currentCards.length; i++) {
                currentCards[i].classList.remove("activated");
            }

            if (this.Damage != undefined) {
                CurrentAttack = this.Damage;
                //console.log(this.Damage); 
            } else {
                CurrentAttack = 0;
            }

            if (this.Heal != undefined) {
                CurrentHeal = this.Heal;
                //console.log(CurrentHeal);  
            } else {
                CurrentHeal = 0;
            }

            if (this.Shield != undefined) {
                CurrentShield = this.Shield;
                //console.log(CurrentShield);  
            } else {
                CurrentShield = 0;
            }

            CurrentType = this.Type;

            selectedCard = this.card;
            //console.log(selectedCard)

            selectedCardTime = this.Time;
            //console.log(selectedCardTime);

            this.card.classList.add("activated");

        }

    }

    DeActivateCard() {
        for (let i = 0; i < currentCards.length; i++) {
            currentCards[i].classList.remove("activated");
        }

        CurrentType = undefined;

        selectedCard = undefined; //remove card from variable
    }
}

setInterval(function () {
    if (CharacterHealth <= 0) {
        location.reload()
        if (isAlive) {
            window.alert("ded")
            isAlive = false;
        }
    }
}, 100);

function randomizeTurnCards() {
    thisTurnCards.innerHTML = "";

    //console.log(currentCards);
    for (let i = 0; i < currentCards.length; i++) {
        bagAttacksContainer.appendChild(currentCards[i]);
    }

    let currentCardsArray = [].slice.call(currentCards);

    for (let i = 0; i < cardsByTurn; i++) {
        let randomNumber = Math.floor(Math.random() * currentCardsArray.length);
        let randomCard = currentCardsArray[randomNumber];
        currentCardsArray.splice(randomNumber, 1);

        thisTurnCards.appendChild(randomCard);
    }
}

function updateStats(stat) {

    //not done yet, it would be used to update stats without always writing a whole sentence...

}

/*###########################
#############################
B A G  C O D E
#############################
###########################*/


bagOpenButton.addEventListener("click", function () {

    bag.style.top = "50vh";
    bag.style.left = "50vw";
    bag.style.transform = "translate(-50%, -50%)";

    bag.classList.remove("unDisplay")
})

bagCloseButton.addEventListener("click", function () { bag.classList.add("unDisplay") })



bagItemsMenu.addEventListener("click", function () {
    bagItemsContainer.classList.remove("unDisplay");
    bagAttacksContainer.classList.add("unDisplay");
})
bagAttacksMenu.addEventListener("click", function () {
    bagAttacksContainer.classList.remove("unDisplay");
    bagItemsContainer.classList.add("unDisplay");
})

/*###########################
#############################
M E N U  C O D E
#############################
###########################*/


window.addEventListener("keydown", (e) => {
    if (e.key == "Escape") {
        menu.classList.remove("unDisplay")
    }
})

menuClose.addEventListener("click", function () { menu.classList.add("unDisplay") })


/*###########################
#############################
N O T I F I C A T I O N  C O D E
#############################
###########################*/

notification.addEventListener("click", function () {
    notificationText.innerHTML = "";
    notification.classList.add("unDisplay");
})


/*###########################
#############################
T U R N  C O D E
#############################
###########################*/

setInterval(function () {
    turnVerificator = enemiesSide.childElementCount;
    //console.log(turnVerificator);

    if (turnVerificator > 0 && CurrentlyFighting == false) {
        randomizeTurnCards();

        CurrentlyFighting = true;
    }

    if (MonsterTurnDone >= turnVerificator) {
        MonsterTurnDone = 0;
        turn = "player";
        for (let i = 0; i < currentCards.length; i++) {
            currentCards[i].classList.remove("deactivated");
            currentCards[i].classList.remove("activated");
        }

        timeLeft = timeFallback;
        timeleftpara.innerHTML = `Time : ${timeLeft}`;
    }

}, 100);

function EndTurn() {
    turn = "monster";

    CurrentAttack = 0; //resets attack
    CurrentHeal = 0; //resets heal

    selectedCard = undefined; //remove card from variable

    randomizeTurnCards();
}

timeleftpara.innerHTML = `Time : ${timeLeft}`;
/*###########################
#############################
V A R I A B L E S  
#############################
###########################*/

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
let CharacterAttMulti;
let CharacterArmor;
let CharacterShield;

let GainedExp = 0; //to calculate the exp won during a fight

let InventoryLoot = []; //will calculate and store how many and what items you have in your inventory
let LootDropArray = [];

/*###########################
#############################
L O O T  T A B L E
#############################
###########################*/

InventoryLoot = {
    GoblinEar : {
        Name : "Goblin Ear",
        Count : 0,
    },
    BrokenGoblinWeapon : {
        Name : "Broken Goblin Weapon",
        Count : 0,
    },
    ShamanStaff : {
        Name : "Shaman Staff",
        Count : 0,
    },
    MagicCrystalShard : {
        Name : "Magic Crystal Shard",
        Count : 0,
    },
    SteelSword : {
        Name : "Steel Sword",
        Count : 0,
    },
    UnidentifiedMagicArtefact : {
        Name : "Unidentified Magic Artefact",
        Count : 0,
    },
    WolfClaw : {
        Name : "Wolf Claw",
        Count : 0,
    },
    WolfFang : {
        Name : "Wolf Fang",
        Count : 0,
    },
    WolfFur : {
        Name : "Wolf Fur",
        Count : 0,
    },
    WerewolfClaw : {
        Name : "Werewolf Claw",
        Count : 0,
    },
    WerewolfFang : {
        Name : "Werewolf Fang",
        Count : 0,
    },
    WerewolfBlood : {
        Name : "Werewolf Blood",
        Count : 0,
    },
    WerewolfFur : {
        Name : "Werewolf Fur",
        Count : 0,
    },
    MagicWolfClaw : {
        Name : "Magic Wolf Claw",
        Count : 0,
    },
    MagicWolfFang : {
        Name : "Magic Wolf Fang",
        Count : 0,
    },
    LightningWolfFur : {
        Name : "Lightning Wolf Fur",
        Count : 0,
    },
    CrystalWolfHeart : {
        Name : "Crystal Wolf Heart",
        Count : 0,
    },
    BearClaw : {
        Name : "Bear Claw",
        Count : 0,
    },
    BearFang : {
        Name : "Bear Fang",
        Count : 0,
    },
    BearFur : {
        Name : "Bear Fur",
        Count : 0,
    },
    MagicBearClaw : {
        Name : "Magic Bear Claw",
        Count : 0,
    },
    MagicBearFang : {
        Name : "Magic Bear Fang",
        Count : 0,
    },
    FireBearFur : {
        Name : "Fire Bear Fur",
        Count : 0,
    },
    CrystalBearHeart : {
        Name : "Crystal Bear Heart",
        Count : 0,
    },
    TrollBlood : {
        Name : "Troll Blood",
        Count : 0,
    },
    TrollHide : {
        Name : "Troll Hide",
        Count : 0,
    },
    MagicOrb : {
        Name : "Magic Orb",
        Count : 0,
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
        Attack: 4,
        Exp : 1,
        Loot : 
        {
            Number : 1,
            10 : GoblinEar = {
                Image : "none",
                Name : "Goblin Ear",
                Price : 1,
                ID : "GoblinEar",
            },
            45 : BrokenGoblinWeapon = {
                Image : "none",
                Name : "Broken Goblin Weapon",
                Price : 2,
                ID : "BrokenGoblinWeapon",
            },
        }
    },
    SwordGoblin: {
        Name: "Goblin (Sword)",
        Health: 10,
        Attack: 3,
        Exp : 1,
        Loot : 
        {
            Number : 1,
            10 : GoblinEar = {
                Image : "none",
                Name : "Goblin Ear",
                Price : 1,
                ID : "BrokenGoblinWeapon",
            },
            45 : BrokenGoblinWeapon = {
                Image : "none",
                Name : "Broken Goblin Weapon",
                Price : 2,
                ID : "BrokenGoblinWeapon",
            },
        }
    },
    MaceGoblin: {
        Name: "Goblin (Mace)",
        Health: 10,
        Attack: 3,
        Exp : 1,
        Loot : 
        {
            Number : 1,
            10 : GoblinEar = {
                Image : "none",
                Name : "Goblin Ear",
                Price : 1,
                ID : "BrokenGoblinWeapon",
            },
            45 : BrokenGoblinWeapon = {
                Image : "none",
                Name : "Broken Goblin Weapon",
                Price : 2,
                ID : "BrokenGoblinWeapon",
            },
        }
    },
    BowGoblin: {
        Name: "Goblin (Bow)",
        Health: 8,
        Attack: 3,
        Exp : 1,
        Loot : 
        {
            Number : 1,
            10 : GoblinEar = {
                Image : "none",
                Name : "Goblin Ear",
                Price : 1,
                ID : "BrokenGoblinWeapon",
            },
            45 : BrokenGoblinWeapon = {
                Image : "none",
                Name : "Broken Goblin Weapon",
                Price : 2,
                ID : "BrokenGoblinWeapon",
            },
        }
    },
    ShamanGoblin: {
        Name: "Goblin Shaman",
        Health: 13,
        Attack: 5,
        Exp : 4,
        Loot : 
        {
            Number : 2,
            10 : GoblinEar = {
                Image : "none",
                Name : "Goblin Ear",
                Price : 1,
                ID : "GoblinEar",
            },
            65 : ShamanStaff = {
                Image : "none",
                Name : "Shaman Staff",
                Price : 10,
                ID : "ShamanStaff",
            },
            90 : MagicCrystalShard = {
                Image : "none",
                Name : "Magic Crystal Shard",
                Price : 16,
                ID : "MagicCrystalShard",
            },
        }
    },
    HeroGoblin: {
        Name: "Goblin Hero",
        Health: 30,
        Attack: 7,
        Exp : 7,
        Loot : 
        {
            Number : 4,
            10 : GoblinEar = {
                Image : "none",
                Name : "Goblin Ear",
                Price : 1,
                ID : "GoblinEar",
            },
            30 : SteelSword = {
                Image : "none",
                Name : "Steel Sword",
                Price : 10,
                ID : "SteelSword",
            },
            85 : UnidentifiedMagicArtefact = {
                Image : "none",
                Name : "Unidentified Magic Artefact",
                Price : 30,
                ID : "UnidentifiedMagicArtefact",
            },
        }
    },
    Wolf: {
        Name: "Wolf",
        Health: 15,
        Attack: 7,
        Exp : 2,
        Loot : 
        {
            Number : 1,
            10 : WolfClaw = {
                Image : "none",
                Name : "Wolf Claw",
                Price : 3,
                ID : "WolfClaw",
            },
            20 : WolfFang = {
                Image : "none",
                Name : "Wolf Fang",
                Price : 5,
                ID : "WolfFang",
            },
            70 : WolfFur = {
                Image : "none",
                Name : "Wolf Fur",
                Price : 10,
                ID : "WolfFur",
            },
        }
    },
    OldWolf: {
        Name: "Old Wolf",
        Health: 7,
        Attack: 8,
        Exp : 2,
        Loot : 
        {
            Number : 2,
            10 : WolfClaw = {
                Image : "none",
                Name : "Wolf Claw",
                Price : 3,
                ID : "WolfClaw",
            },
            20 : WolfFang = {
                Image : "none",
                Name : "Wolf Fang",
                Price : 5,
                ID : "WolfFang",
            },
        }
    },
    WereWolf: {
        Name: "Werewolf",
        Health: 45,
        Attack: 12,
        Exp : 5,
        Loot : 
        {
            Number : 2,
            10 : WerewolfClaw = {
                Image : "none",
                Name : "Werewolf Claw",
                Price : 5,
                ID : "WerewolfClaw",
            },
            20 : WerewolfFang = {
                Image : "none",
                Name : "Werewolf Fang",
                Price : 8,
                ID : "WerewolfFang",
            },
            60 : WerewolfBlood = {
                Image : "none",
                Name : "Werewolf Blood",
                Price : 10,
                ID : "WerewolfBlood",
            },
            83 : WerewolfFur = {
                Image : "none",
                Name : "Werewolf Fur",
                Price : 13,
                ID : "WerewolfFur",
            },
        }
    },
    WolfKing: {
        Name: "Wolf King",
        Health: 25,
        Attack: 15,
        Exp : 20,
        Loot : 
        {
            Number : 3,
            30 : MagicWolfClaw = {
                Image : "none",
                Name : "Magic Wolf Claw",
                Price : 15,
                ID : "MagicWolfClaw",
            },
            50 : MagicWolfFang = {
                Image : "none",
                Name : "Magic Wolf Fang",
                Price : 20,
                ID : "MagicWolfFang",
            },
            75 : LightningWolfFur = {
                Image : "none",
                Name : "Lightning Wolf Fur",
                Price : 30,
                ID : "LightningWolfFur",
            },
            90 : CrystalWolfHeart = {
                Image : "none",
                Name : "Crystal Wolf Heart",
                Price : 50,
                ID : "CrystalWolfHeart",
            },
        }
    },
    Bear: {
        Name: "Bear",
        Health: 50,
        Attack: 10,
        Exp : 10,
        Loot : 
        {
            Number : 1,
            10 : BearClaw = {
                Image : "none",
                Name : "Bear Claw",
                Price : 7,
                ID : "BearClaw",
            },
            27 : BearFang = {
                Image : "none",
                Name : "Bear Fang",
                Price : 10,
                ID : "BearFang",
            },
            80 : BearFur = {
                Image : "none",
                Name : "Bear Fur",
                Price : 15,
                ID : "BearFur",
            },
        }
    },
    BearKing: {
        Name: "Bear King",
        Health: 70,
        Attack: 17,
        Exp : 35,
        Loot : 
        {
            Number : 3,
            30 : MagicBearClaw = {
                Image : "none",
                Name : "Magic Bear Claw",
                Price : 15,
                ID : "MagicBearClaw",
            },
            50 : MagicBearFang = {
                Image : "none",
                Name : "Magic Bear Fang",
                Price : 20,
                ID : "MagicBearFang",
            },
            75 : FireBearFur = {
                Image : "none",
                Name : "Fire Bear Fur",
                Price : 30,
                ID : "FireBearFur",
            },
            85 : CrystalBearHeart = {
                Image : "none",
                Name : "Crystal Bear Heart",
                Price : 50,
                ID : "CrystalBearHeart",
            },
        }
    },
    Troll: {
        Name: "Troll",
        Health: 90,
        Attack: 21,
        Exp : 50,
        Loot : 
        {
            Number : 4,
            15 : TrollBlood = {
                Image : "none",
                Name : "Troll Blood",
                Price : 20,
                ID : "TrollBlood",
            },
            35 : TrollHide = {
                Image : "none",
                Name : "Troll Hide",
                Price : 25,
                ID : "TrollHide",
            },
            95 : MagicOrb = {
                Image : "none",
                Name : "Magic Orb",
                Price : 100,
                ID : "MagicOrb",
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

    let RandomMonster = "nothing";
    //console.log(monsterselected);
    if (monsterselected == "none") {

        RandomMonster = enemyCreator[Math.floor((Math.random() * enemyCreator.length) + areaNumber)];
        new Monster(0, 0, RandomMonster);

    } else if (monsterselected == "multiple") {
        RandomMonster = [];

        for (let i = 0; i < Math.floor((Math.floor(Math.random() * 3) + 2)); i++) { //minimum of 2 monsters
            RandomMonster = enemyCreator[Math.floor((Math.random() * enemyCreator.length) + areaNumber)];
            new Monster(0, 0, RandomMonster);
        }

    } else {
        RandomMonster = monsterselected;
        new Monster(0, 0, RandomMonster);
    }
})


class Monster {
    constructor(Health, Attack, MonsterNum) {
        this.Health = Health;
        this.Attack = Attack;
        this.MonsterNum = MonsterNum;

        this.CreateCard()

        if (!isNaN(this.MonsterNum)) {
            this.RandomMonster(this.MonsterNum);
        } else {
            this.selectedMonster(this.MonsterNum);
        }

    }

    CreateCard() {

        this.card = document.createElement("div");
        this.card.classList.add("enemyCard");

        this.name = document.createElement("h3");

        this.healthCount = document.createElement("p");


        this.attack = document.createElement("p");

        this.card.appendChild(this.name);
        this.card.appendChild(this.healthCount);
        this.card.appendChild(this.attack);

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
        console.log(monster);
        this.name.innerHTML = monsters[enemyCreator[enemyCreator.indexOf(monster)]].Name;

        this.healthCount.innerHTML = monsters[enemyCreator[enemyCreator.indexOf(monster)]].Health;
        this.Health = monsters[enemyCreator[enemyCreator.indexOf(monster)]].Health;

        this.attack.innerHTML = monsters[enemyCreator[enemyCreator.indexOf(monster)]].Attack;

        enemiesSide.appendChild(this.card);
    }

    GetHit() {
        this.Health--;
        this.healthCount.innerHTML = this.Health;

        if (this.Health <= 0) {
            this.card.remove();

            MonsterKilled(this.MonsterNum);
        }

        //console.log(this.Health);
    }
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
    
    console.log(LootDropArray)

    if (enemiesSide.childElementCount <= 0) {
        FightWon(LootDropArray, GainedExp);
    }
}

function LevelUp() {
    CharacterExp = CharacterExp - Heros[PlayerHandler[PlayerHandler.indexOf(CharacterClass)]].Levels[CharacterLevel - 1].ExpNeeded;

    CharacterLevel++;
    CharacterLevelSHEET.innerHTML = ` Level : ${CharacterLevel}`;

    CharacterHealth = Heros[PlayerHandler[PlayerHandler.indexOf(CharacterClass)]].Levels[CharacterLevel - 1].Health;
    document.querySelector(".healthBar").innerHTML = CharacterHealth;
    
    CharacterExpSHEET.innerHTML = `${CharacterExp} / ${Heros[PlayerHandler[PlayerHandler.indexOf(CharacterClass)]].Levels[CharacterLevel - 1].ExpNeeded}`;

    CharacterAttMulti = Heros[PlayerHandler[PlayerHandler.indexOf(CharacterClass)]].Levels[CharacterLevel - 1].AttMulti;
    document.querySelector(".AttMulti").innerHTML = CharacterAttMulti;

    CharacterArmor = Heros[PlayerHandler[PlayerHandler.indexOf(CharacterClass)]].Levels[CharacterLevel - 1].Armor;
    document.querySelector(".Armor").innerHTML = CharacterArmor;
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
    });

    CharacterExp += exp;

    //resets variables for next encounter
    GainedExp = 0;
    LootDropArray = [];

    notification.classList.remove("unDisplay");

    if (CharacterExp >= Heros[PlayerHandler[PlayerHandler.indexOf(CharacterClass)]].Levels[CharacterLevel - 1].ExpNeeded) {
        LevelUp();
    }

    CharacterExpSHEET.innerHTML = `${CharacterExp} / ${Heros[PlayerHandler[PlayerHandler.indexOf(CharacterClass)]].Levels[CharacterLevel - 1].ExpNeeded}`;
}

/*###########################
#############################
P L A Y E R  C O D E
#############################
###########################*/

const Heros = {
    InfantryMen: {
        Name: "InfantryMen",
        Attack: 5,
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
        Attack: 5,
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
        Attack: 5,
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
    Summoner: {
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
    },
}


const PlayerHandler = Object.keys(Heros);


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
    document.querySelector(".healthBar").innerHTML = CharacterHealth;

    CharacterAttMulti = Heros[PlayerHandler[PlayerHandler.indexOf(CharacterClass)]].Levels[CharacterLevel - 1].AttMulti;
    document.querySelector(".AttMulti").innerHTML = CharacterAttMulti;

    CharacterArmor = Heros[PlayerHandler[PlayerHandler.indexOf(CharacterClass)]].Levels[CharacterLevel - 1].Armor;
    document.querySelector(".Armor").innerHTML = CharacterArmor;
})


for (let i = 0; i < PlayerHandler.length; i++) {
    //console.log(PlayerHandler[i]);
    //console.log(Heros[PlayerHandler[i]]);

    let CharacterOption = document.createElement("option");
    CharacterOption.innerHTML = `${Heros[PlayerHandler[i]].Name}`;
    CharacterOption.value = `${PlayerHandler[i]}`;

    Characterselector.appendChild(CharacterOption);
}


/*###########################
#############################
B A G  C O D E
#############################
###########################*/


bagOpenButton.addEventListener("click", function() {bag.classList.remove("unDisplay")})
bagCloseButton.addEventListener("click", function() {bag.classList.add("unDisplay")})



bagItemsMenu.addEventListener("click", function() {
    bagItemsContainer.classList.remove("unDisplay"); 
    bagAttacksContainer.classList.add("unDisplay");
})
bagAttacksMenu.addEventListener("click", function() {
    bagAttacksContainer.classList.remove("unDisplay"); 
    bagItemsContainer.classList.add("unDisplay");
})

/*###########################
#############################
N O T I F I C A T I O N  C O D E
#############################
###########################*/

notification.addEventListener("click", function () {
    notificationText.innerHTML = "";
    notification.classList.add("unDisplay");
})
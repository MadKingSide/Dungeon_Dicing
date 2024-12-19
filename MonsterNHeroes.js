/*###########################
#############################
M O N S T E R S  C O D E
#############################
###########################*/

const monsters = {
    SpearGoblin : {
        Name : "Goblin (Spear)",
        Health : 9,
        Attack : 4,
    },
    SwordGoblin : {
        Name : "Goblin (Sword)",
        Health : 10,
        Attack : 3,
    },
    MaceGoblin : {
        Name : "Goblin (Mace)",
        Health : 10,
        Attack : 3,
    },
    BowGoblin : {
        Name : "Goblin (Bow)",
        Health : 8,
        Attack : 3,
    },
    ShamanGoblin : {
        Name : "Goblin Shaman",
        Health : 13,
        Attack : 5,
    },
    HeroGoblin : {
        Name : "Goblin Hero",
        Health : 30,
        Attack : 7,
    },
    Wolf : {
        Name : "Wolf",
        Health : 15,
        Attack : 7,
    },
    OldWolf : {
        Name : "Old Wolf",
        Health : 7,
        Attack : 8,
    },
    WereWolf : {
        Name : "Werewolf",
        Health : 45,
        Attack : 12,
    },
    WolfKing : {
        Name : "Wolf King",
        Health : 25,
        Attack : 15,
    },
    Bear : {
        Name : "Bear",
        Health : 50,
        Attack : 10,
    },
    BearKing : {
        Name : "Bear King",
        Health : 70,
        Attack : 17,
    },
    Troll : {
        Name : "Troll",
        Health : 90,
        Attack : 21,
    },
}

const enemiesSide = document.querySelector(".enemies");
const enemyCreator = Object.keys(monsters);

let area = "Forest";
let areaNumber;

switch (area) {
    case "Forest":
        areaNumber = 0;
        break;

    default:
        break;
}

let monsterselector = document.querySelector("#monsterselect");
let monsterselected = "none";

for (let i = 0; i < enemyCreator.length; i++) {
    //console.log(enemyCreator[i]);
    //console.log(monsters[enemyCreator[i]]);
    let monsterOption = document.createElement("option");
    monsterOption.innerHTML = `${monsters[enemyCreator[i]].Name}`;
    monsterOption.value = `${enemyCreator[i]}`;

    monsterselector.appendChild(monsterOption);
}

function monsterselect(monster) {
    console.log(monster);
    monsterselected = monster;
}

document.querySelector(".Spawn").addEventListener("click", function () {

    let RandomMonster = "nothing";
    //console.log(monsterselected);
    if (monsterselected == "none") {
        RandomMonster = Math.floor((Math.random() * enemyCreator.length) + areaNumber);
    } else {
        RandomMonster = monsterselected;
    }

    new Monster(0, 0, RandomMonster);
})


 class Monster {
    constructor(Health, Attack, MonsterNum) {
        this.Health = Health;
        this.Attack = Attack;
        this.MonsterNum = MonsterNum;

        this.CreateCard()

        if (!isNaN(this.MonsterNum)) {
            this.RandomMonster();
        } else {
            this.selectedMonster()
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

    RandomMonster() {

        this.name.innerHTML = monsters[enemyCreator[this.MonsterNum]].Name;
    
        this.healthCount.innerHTML = monsters[enemyCreator[this.MonsterNum]].Health;
        this.Health = monsters[enemyCreator[this.MonsterNum]].Health;
    
        this.attack.innerHTML = monsters[enemyCreator[this.MonsterNum]].Attack;

        enemiesSide.appendChild(this.card);
    }

    selectedMonster() {

        this.name.innerHTML = monsters[enemyCreator[enemyCreator.indexOf(this.MonsterNum)]].Name;
    
        this.healthCount.innerHTML = monsters[enemyCreator[enemyCreator.indexOf(this.MonsterNum)]].Health;
        this.Health = monsters[enemyCreator[enemyCreator.indexOf(this.MonsterNum)]].Health;
    
        this.attack.innerHTML = monsters[enemyCreator[enemyCreator.indexOf(this.MonsterNum)]].Attack;

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
    CharacterExp++;

    if (CharacterExp == Heros[PlayerHandler[PlayerHandler.indexOf(CharacterClass)]].Levels[CharacterLevel - 1].ExpNeeded) {
        UpdateInfo();
    }

    CharacterExpSHEET.innerHTML = `${CharacterExp} / ${Heros[PlayerHandler[PlayerHandler.indexOf(CharacterClass)]].Levels[CharacterLevel - 1].ExpNeeded}`;
}

function UpdateInfo() {
    CharacterLevel++;
    CharacterLevelSHEET.innerHTML = ` Level : ${CharacterLevel}`;

    CharacterHealth = Heros[PlayerHandler[PlayerHandler.indexOf(CharacterClass)]].Levels[CharacterLevel - 1].Health;
    document.querySelector(".healthBar").innerHTML = CharacterHealth;

    CharacterAttMulti = Heros[PlayerHandler[PlayerHandler.indexOf(CharacterClass)]].Levels[CharacterLevel - 1].AttMulti;
    document.querySelector(".AttMulti").innerHTML = CharacterAttMulti;

    CharacterArmor = Heros[PlayerHandler[PlayerHandler.indexOf(CharacterClass)]].Levels[CharacterLevel - 1].Armor;
    document.querySelector(".Armor").innerHTML = CharacterArmor;
}

/*###########################
#############################
P L A Y E R  C O D E
#############################
###########################*/

const Heros = {
    InfantryMen : {
        Name : "InfantryMen",
        Attack : 5,
        Levels : [
            lvl1 = {
                Level : 1,
                Health : 40,
                AttMulti : 1,
                Armor : 1,
                ExpNeeded : 10,
            },
            lvl2 = {
                Level : 2,
                Health : 45,
                AttMulti : 1,
                Armor : 1,
                ExpNeeded : 20,
            },
            lvl3 = {
                Level : 3,
                Health : 50,
                AttMulti : 1.5,
                Armor : 1,
                ExpNeeded : 30,
            },
            lvl4 = {
                Level : 4,
                Health : 60,
                AttMulti : 1.5,
                Armor : 1,
                ExpNeeded : 50,
            },
            lvl5 = {
                Level : 5,
                Health : 70,
                AttMulti : 2,
                Armor : 2,
                ExpNeeded : 70,
            },
            lvl6 = {
                Level : 6,
                Health : 80,
                AttMulti : 2,
                Armor : 2,
                ExpNeeded : 100,
            },
            lvl7 = {
                Level : 7,
                Health : 95,
                AttMulti : 2.5,
                Armor : 2,
                ExpNeeded :140,
            },
            lvl8 = {
                Level : 8,
                Health : 110,
                AttMulti : 2.5,
                Armor : 2,
                ExpNeeded : 200,
            },
            lvl9 = {
                Level : 9,
                Health : 130,
                AttMulti : 3,
                Armor : 3,
                ExpNeeded : 300,
            },
            lvl10 = {
                Level : 10,
                Health : 160,
                AttMulti : 4,
                Armor : 4,
                ExpNeeded : 500,
            },
        ]
    },
    Hunter : {
        Name : "Hunter",
        Attack : 5,
        Levels : [
            lvl1 = {
                Level : 1,
                Health : 30,
                AttMulti : 1,
                Armor : 0,
                ExpNeeded : 10,
            },
            lvl2 = {
                Level : 2,
                Health : 35,
                AttMulti : 1,
                Armor : 0,
                ExpNeeded : 20,
            },
            lvl3 = {
                Level : 3,
                Health : 40,
                AttMulti : 1.5,
                Armor : 0,
                ExpNeeded : 30,
            },
            lvl4 = {
                Level : 4,
                Health : 45,
                AttMulti : 1.5,
                Armor : 0,
                ExpNeeded : 50,
            },
            lvl5 = {
                Level : 5,
                Health : 55,
                AttMulti : 2,
                Armor : 0,
                ExpNeeded : 70,
            },
            lvl6 = {
                Level : 6,
                Health : 65,
                AttMulti : 2,
                Armor : 0,
                ExpNeeded : 100,
            },
            lvl7 = {
                Level : 7,
                Health : 80,
                AttMulti : 2.5,
                Armor : 0,
                ExpNeeded :140,
            },
            lvl8 = {
                Level : 8,
                Health : 95,
                AttMulti : 2.5,
                Armor : 0,
                ExpNeeded : 200,
            },
            lvl9 = {
                Level : 9,
                Health : 110,
                AttMulti : 3,
                Armor : 0,
                ExpNeeded : 300,
            },
            lvl10 = {
                Level : 10,
                Health : 130,
                AttMulti : 4,
                Armor : 0,
                ExpNeeded : 500,
            },
        ]
    },
    Paladin : {
        Name : "Paladin",
        Attack : 5,
        Levels : [
            lvl1 = {
                Level : 1,
                Health : 50,
                AttMulti : 1,
                Armor : 2,
                ExpNeeded : 10,
            },
            lvl2 = {
                Level : 2,
                Health : 60,
                AttMulti : 1,
                Armor : 2,
                ExpNeeded : 20,
            },
            lvl3 = {
                Level : 3,
                Health : 70,
                AttMulti : 1.5,
                Armor : 2,
                ExpNeeded : 30,
            },
            lvl4 = {
                Level : 4,
                Health : 80,
                AttMulti : 1.5,
                Armor : 3,
                ExpNeeded : 50,
            },
            lvl5 = {
                Level : 5,
                Health : 95,
                AttMulti : 2,
                Armor : 3,
                ExpNeeded : 70,
            },
            lvl6 = {
                Level : 6,
                Health : 110,
                AttMulti : 2,
                Armor : 3,
                ExpNeeded : 100,
            },
            lvl7 = {
                Level : 7,
                Health : 125,
                AttMulti : 2.5,
                Armor : 4,
                ExpNeeded :140,
            },
            lvl8 = {
                Level : 8,
                Health : 140,
                AttMulti : 2.5,
                Armor : 4,
                ExpNeeded : 200,
            },
            lvl9 = {
                Level : 9,
                Health : 160,
                AttMulti : 3,
                Armor : 4,
                ExpNeeded : 300,
            },
            lvl10 = {
                Level : 10,
                Health : 200,
                AttMulti : 4,
                Armor : 5,
                ExpNeeded : 500,
            },
        ]
    },
    Mage : {
        Name : "Mage",
        Attack : 5,
        Levels : [
            lvl1 = {
                Level : 1,
                Health : 20,
                AttMulti : 1,
                Armor : 0,
                ExpNeeded : 10,
            },
            lvl2 = {
                Level : 2,
                Health : 23,
                AttMulti : 1,
                Armor : 0,
                ExpNeeded : 20,
            },
            lvl3 = {
                Level : 3,
                Health : 26,
                AttMulti : 1.5,
                Armor : 0,
                ExpNeeded : 30,
            },
            lvl4 = {
                Level : 4,
                Health : 30,
                AttMulti : 1.5,
                Armor : 0,
                ExpNeeded : 50,
            },
            lvl5 = {
                Level : 5,
                Health : 35,
                AttMulti : 2,
                Armor : 0,
                ExpNeeded : 70,
            },
            lvl6 = {
                Level : 6,
                Health : 40,
                AttMulti : 2,
                Armor : 0,
                ExpNeeded : 100,
            },
            lvl7 = {
                Level : 7,
                Health : 47,
                AttMulti : 2.5,
                Armor : 0,
                ExpNeeded :140,
            },
            lvl8 = {
                Level : 8,
                Health : 54,
                AttMulti : 2.5,
                Armor : 0,
                ExpNeeded : 200,
            },
            lvl9 = {
                Level : 9,
                Health : 60,
                AttMulti : 3,
                Armor : 0,
                ExpNeeded : 300,
            },
            lvl10 = {
                Level : 10,
                Health : 65,
                AttMulti : 4,
                Armor : 0,
                ExpNeeded : 500,
            },
        ]
    },
    Summoner : {
        Name : "Summoner",
        Attack : 5,
        Levels : [
            lvl1 = {
                Level : 1,
                Health : 20,
                AttMulti : 1,
                Armor : 0,
                ExpNeeded : 10,
            },
            lvl2 = {
                Level : 2,
                Health : 22,
                AttMulti : 1,
                Armor : 0,
                ExpNeeded : 20,
            },
            lvl3 = {
                Level : 3,
                Health : 24,
                AttMulti : 1.5,
                Armor : 0,
                ExpNeeded : 30,
            },
            lvl4 = {
                Level : 4,
                Health : 26,
                AttMulti : 1.5,
                Armor : 0,
                ExpNeeded : 50,
            },
            lvl5 = {
                Level : 5,
                Health : 28,
                AttMulti : 2,
                Armor : 0,
                ExpNeeded : 70,
            },
            lvl6 = {
                Level : 6,
                Health : 30,
                AttMulti : 2,
                Armor : 0,
                ExpNeeded : 100,
            },
            lvl7 = {
                Level : 7,
                Health : 33,
                AttMulti : 2.5,
                Armor : 0,
                ExpNeeded :140,
            },
            lvl8 = {
                Level : 8,
                Health : 36,
                AttMulti : 2.5,
                Armor : 0,
                ExpNeeded : 200,
            },
            lvl9 = {
                Level : 9,
                Health : 39,
                AttMulti : 3,
                Armor : 0,
                ExpNeeded : 300,
            },
            lvl10 = {
                Level : 10,
                Health : 45,
                AttMulti : 4,
                Armor : 0,
                ExpNeeded : 500,
            },
        ]
    },
}


const PlayerHandler = Object.keys(Heros);

let CharacterCreatorPage = document.querySelector(".CharacterCreator");
let CharacterSheet = document.querySelector(".Character");

let CharacterNameInput = document.querySelector(".CharacterCreator__name");
let confirmCreation = document.querySelector(".CharacterCreator__confirm");

let CharacterNameSHEET = document.querySelector(".Name");
let CharacterClassSHEET = document.querySelector(".Class");
let CharacterLevelSHEET = document.querySelector(".Level");
let CharacterExpSHEET = document.querySelector(".Exp");

let CharacterName;
let CharacterClass;
let CharacterLevel;
let CharacterExp;

let CharacterHealth;
let CharacterAttMulti;
let CharacterArmor;
let CharacterShield;


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

let Characterselector = document.querySelector("#Characterselect");

for (let i = 0; i < PlayerHandler.length; i++) {
    //console.log(PlayerHandler[i]);
    //console.log(Heros[PlayerHandler[i]]);

    let CharacterOption = document.createElement("option");
    CharacterOption.innerHTML = `${Heros[PlayerHandler[i]].Name}`;
    CharacterOption.value = `${PlayerHandler[i]}`;

    Characterselector.appendChild(CharacterOption);
}

class BagItems {
    constructor(parameters) {
        
    }
}
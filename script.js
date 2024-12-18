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
        }

        //console.log(this.Health);
    }
}
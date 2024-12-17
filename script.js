const monsters = {
    Goblin : {
        Name : "Goblin",
        Health : 10,
        Attack : 5,
    },
    Wolf : {
        Name : "Wolf",
        Health : 5,
        Attack : 7,
    },
}

const enemiesSide = document.querySelector(".enemies");
const enemyCreator = Object.keys(monsters);

for (let i = 0; i < enemyCreator.length; i++) {
    //console.log(enemyCreator[i]);
    //console.log(monsters[enemyCreator[i]]);
}

let area = "Forest";
let areaNumber;

switch (area) {
    case "Forest":
        areaNumber = 0;
        break;

    default:
        break;
}

let monsterselector = document.querySelector(".monsterselect");
let monsterselected = "none";

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
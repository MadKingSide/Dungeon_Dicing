const monster = {
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
const enemyCreator = Object.keys(monster);

for (let i = 0; i < enemyCreator.length; i++) {
    console.log(enemyCreator[i]);
    console.log(monster[enemyCreator[i]]);
}



document.querySelector(".trying").addEventListener("click", function () {
    let number = Math.floor((Math.random() * enemyCreator.length));

    let card = document.createElement("div");
    card.classList.add("enemyCard");

    let name = document.createElement("h3");
    name.innerHTML = monster[enemyCreator[number]].Name;

    let health = document.createElement("p");
    health.innerHTML = monster[enemyCreator[number]].Health;

    let attack = document.createElement("p");
    attack.innerHTML = monster[enemyCreator[number]].Attack;

    card.appendChild(name);
    card.appendChild(health);
    card.appendChild(attack);

    enemiesSide.appendChild(card);
})
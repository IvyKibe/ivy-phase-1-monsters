const createMonster = document.querySelector("#create-monster");
const monsterContainer = document.querySelector("#monster-container");
const backbutton = document.querySelector("back");
const forwardbutton = document.querySelector("forward");

const displayMonsterCards = () => {
  fetch("http://localhost:3000/monsters")
    .then((res) => res.json())
    .then((data) => {
      data.forEach((monster) => {
        // console.log(monster.name);
      });
    });
};
displayMonsterCards();

 const monsterForm = document.querySelector('#monster-form')
 monsterForm.addEventListener('submit', (event))  => {
     event.preventDefault()}
     const monsterName = event.target.name.value
     const monsterAge = event.target.age.value
     const monsterDescription = event.target.description.value
     const monster = {
        name: monsterName,
        age: monsterAge,
        description: monsterDescription
     }
createCard(monster)
monsterForm.reset();

//update database
fetch("http://localhost:3000/monsters", {
    method:"POST",
    headers:{
        "Content-Type": "application/json",
        Accept: "application/json"
    },
    body:JSON.stringify(monster)
})
    .then(response => response.json())
    .then(monster =>{
        const monsterCard = createCard = createCard(monster)
    })
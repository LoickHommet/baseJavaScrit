
const espaceMessage = document.getElementById("message")

const button = document.getElementById("bouton")

const ageInput = document.getElementById('age')

let age;
let ageMajor = 18




function valider(){
    espaceMessage.innerHTML = "Vous êtes autorisé à entrer";
}

function refuser(){
    espaceMessage.innerHTML = "interdi au mineur"
}

function onConfirm(){
    console.log("ici")
    age = parseInt(ageInput.value)

    if(isNaN(age)){
        alert("C'est pas nombre")
        return
    }

    if(age < ageMajor){
        refuser()
    }else{
        valider()
    }

    ageInput.value = ""
}

button.addEventListener("click", onConfirm)
console.log('Hey js is linked')


//1 ordi choisi aléatoirement (p)ierre, (f)euille, (c)iseaux 

let computerChoice = Math.floor(Math.random() * 3)

function getComputerChoice () {
    if (computerChoice === 0) {
        console.log("Le choix de l'ordi est : pierre")
    }
    else if (computerChoice === 1) {
        console.log("Le choix de l'ordi est :feuille")
    }

    else { console.log("Le choix de l'ordi est : ciseaux")}

}

getComputerChoice()

//2 humain choisi pierre, feuille, sciceaux

function getHumanChoice () {
   let humanChoice = prompt("Pierre, Feuille, Ciseaux ?")

   if (humanChoice == "pierre" || humanChoice ==  "Pierre" || 
    humanChoice ==  "feuille" || humanChoice ==  "Feuille" ||
    humanChoice ==  "Ciseaux" || humanChoice ==  "ciseaux") {
    console.log("you choose " + humanChoice)
   }
   else { console.log("you enter incorrect value") }
}

getHumanChoice()

// déclarer le score des joueurs

let humanScore = 0
let computerScore = 0

// La logic pour jouer un Round

// et stock donnée dans une variale
//
// 3 comparaison des résultats
// Pierre > sciceaux
// Feuille > pierre
// sciceaux > feuille
// possible égalitées
//
// 4 retouner le resultat du choix de l'ordinateur et de l'humain 
// en disant qui a gagner

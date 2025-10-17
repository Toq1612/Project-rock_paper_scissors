// !! Actualiser les computerSelection et humanSelection suivant les parties
// créer fonction pour xChoice = xSelection ?
// !! Revoir la structure et la mettre en entière dans playGame

// !! Revoir incrément des partie pour en avoir 5 même si égalités



//1 ordi choisi aléatoirement (p)ierre, (f)euille, (c)iseaux



let humanScore = 0
let computerScore = 0
let nbRound = 0


function getComputerChoice () {

let computerChoice = Math.floor(Math.random() * 3)
let computerSelection
    if (computerChoice === 0) {
    console.log("Le choix de l'ordi est : pierre");
   computerSelection = "pierre";
    return computerSelection;
    }
    else if (computerChoice === 1) {
        console.log("Le choix de l'ordi est : feuille");
  computerSelection = "feuille";
        return computerSelection ;
    }

    else if (computerChoice === 2) {
        console.log("Le choix de l'ordi est : ciseaux");
   computerSelection = "ciseaux";
        return computerSelection;
    }

}
 

//2 humain choisi pierre, feuille, sciceaux

function getHumanChoice () {

    let x = prompt("Pierre, Feuille, Ciseaux ?")
    let humanChoice = x.toLowerCase()

   if (humanChoice == "pierre" || humanChoice ==  "feuille"
    || humanChoice ==  "ciseaux") {
    console.log("Vous avez choisi : " + humanChoice)
    return humanChoice
   }
   else { console.log("Tu n'as pas rentrer le bon mot") }
}



// La logic pour jouer un Round

function playRound (humanChoice, computerChoice) {

    if (humanChoice == "pierre" && computerChoice == "feuille") {
        console.log("PERDU ! Tu as jouer pierre et la machine feuille");
        computerScore++;
        return computerScore;
        }

    else if (humanChoice == "pierre" && computerChoice == "ciseaux") {
        console.log("GAGNé ! Tu as joué Pierre et La machine Ciseaux");
        humanScore++;
        return humanScore;
    }

    else if (humanChoice =="pierre" && computerChoice == "pierre") {
        console.log("EGALITé ! Rejouer");
        return
    }

    else if (humanChoice == "feuille" && computerChoice == "ciseaux") {
        console.log("PERDU ! T'as joué feuille et coupe coupe le ciseaux !");
        computerScore++;
        return computerScore;
    }

    else if  (humanChoice == "feuille" && computerChoice == "pierre") {
        console.log("HeHe YOU WIN ! Feuille contre Pierre");
        humanScore++
        return humanScore;
    }

    else if (humanChoice == "feuille" && computerChoice == "feuille") {
        console.log("EGALITé ! Rejouer");
        return;
    }

    else if (humanChoice == "ciseaux" && computerChoice == "pierre") {
        console.log("LOSE ! Ciseaux contre Pierre");
        computerScore++;
        return computerScore;
    }

    else if (humanChoice == "ciseaux" && computerChoice == "feuille") {
        console.log("Hey GAGNE ! Ciseaux contre Feuille");
        humanScore++;
        return humanScore;
    }

    else if (humanChoice == "ciseaux" && computerChoice == "ciseaux") {
        console.log("EGALITé ! Rejouer");
        return;
    }

}


round5(nbRound)


function round5(nbRound)  {
if (nbRound < 5) {
    playGame()
}
 else if (humanScore < computerScore) {
        console.log("FIN DU JEU : PERDU ... Vous êtes à " + humanScore + ", tandis que la machine est à " + computerScore + " points")
}

else if (humanScore > computerScore) {
    console.log("FIN DU JEU : WhAY BRAVO !!! Vous êtes à " + humanScore + ", tandis que la machine est à " + computerScore + " points")
}

else if (humanScore = computerScore) {
    console.log("FIN DU JEU : EGALITé !! Vous êtes à " + humanScore + ", tandis que la machine est à " + computerScore + " points")
}
}

function playGame() {
      console.log("Round " + (nbRound + 1) + "/ 5" )
        let humanSelection = getHumanChoice();   
        let computerSelection = getComputerChoice();

        playRound(humanSelection, computerSelection)
        console.log("Vous êtes à " + humanScore + ", tandis que la machine est à " + computerScore + " points");  
        nbRound++
        return nbRound

}

round5(nbRound)
round5(nbRound)
round5(nbRound)
round5(nbRound)
round5(nbRound)
// Paramètres du jeu
//génère un nombre aléatoire entre 1 et 100//
var minNumber = 1;
var maxNumber = 100;
var targetNumber = Math.floor(Math.random() * (maxNumber - minNumber + 1)) + minNumber;


// Timer
//non opérationel pour le moment//
var timer = document.getElementById("timer");
var temps = 60;

function startTimer() {
    while (temps > 0) {
        sleep(1000);
        temps = temps - 1;
        if (temps > 1) {
            timer.innerHTML = temps + "secondes";
        }
        else if (temps < 1) {
        }
        else {
            timer.innerHTML = temps + "seconde";
        }
    }
    timer.innerHTML = "finiiiii !";
}

// Sleep
function sleep(ms) {
    return new Promise(
      resolve => setTimeout(resolve, ms)
    );
}

// Vérifier la proposition
function checkGuess() {
    var input = document.getElementById("guessInput");
    var output = document.getElementById("guessOutput");
    var guessList = document.getElementById("guessList");
    var guess = parseInt(input.value);

//si la valeur entrée n'est pas un nombre//
    if (isNaN(guess)) {
        alert("Veuillez entrer un nombre valide !");
        return;
    }

//si la valeur entrée n'est pas comprise entre 1 et 100//
    if (guess < minNumber || guess > maxNumber) {
        alert("Le nombre doit être compris entre " + minNumber + " et " + maxNumber + " !");
        return;
    }

//si la valeur entrée est comprise entre 1 et 100 lancer le timer//
    if (guess > minNumber || guess < maxNumber) {
        startTimer();
    }

if (guess < targetNumber) {
        output.innerHTML = "Le nombre est plus grand que " + guess + " !";
        guessList.innerHTML += "<li>" + guess + "< </li>";
    } else if (guess > targetNumber) {
        output.innerHTML = "Le nombre est plus petit que " + guess + " !";
        guessList.innerHTML += "<li>" + guess + "> </li>";
    }else {
        output.innerHTML = "F\u00e9licitations, vous avez trouv\u00e9 le juste prix !";
        guessList.innerHTML += "<li>" + guess + "= </li>";
    }
}


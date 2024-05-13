// Variable globale pour le solde initial
let displayedNumber = 15;

// Attendre que la page soit chargée
window.onload = function() {
    // Sélectionner les éléments nécessaires
    const displayedNumberElement = document.getElementById('fsolde');
    const form = document.getElementById('formtransaction');
    const ajouterButton = document.getElementById('deposer');
    const retirerButton = document.getElementById('retirer');

    // Attacher la fonction de rappel `addition` au bouton "Ajouter"
    ajouterButton.addEventListener('click', function(event) {
        event.preventDefault(); // Empêche la soumission par défaut du formulaire

        addition(event, displayedNumberElement);
    });

    // Attacher la fonction de rappel `soustraction` au bouton "retrait"
    retirerButton.addEventListener('click', function(event) {
        event.preventDefault(); // Empêche la soumission par défaut du formulaire
        soustraction(event, displayedNumberElement);
    });
}

// Fonction de depot
function addition(event, displayedNumberElement) {
    // Récupérer la valeur saisie par l'utilisateur
    const userNumber = parseFloat(document.getElementById('fMontant').value);
    
    // Effectuer l'opération d'ajout
    const sum = displayedNumber + userNumber;
    
    // Mettre à jour la valeur de fsolde dans l'input
    displayedNumberElement.value = sum;
    
    // Mettre à jour le solde affiché dans l'élément resultElement
    const resultElement = document.getElementById('solde');
    resultElement.innerHTML = `Votre solde : ${sum}`;
    
    // Mettre à jour `displayedNumber`
    displayedNumber = sum;
}
// fonction de retrait 
function soustraction(event,displayedNumberElement){
    const userNumber = parseFloat(document.getElementById('fMontant').value);
    // Effectuer l'opération d'ajout
    const sous = displayedNumber - userNumber;
    // Mettre à jour la valeur de fsolde dans l'input
    displayedNumberElement.value = sous;
    
    // Mettre à jour le solde affiché dans l'élément resultElement
    const resultElement = document.getElementById('solde');
    resultElement.innerHTML = `Votre solde : ${sous}`;
    
    // Mettre à jour `displayedNumber`
    displayedNumber = sous;
}
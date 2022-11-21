/*
DESCRIZIONE:
Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero o della passeggera.
Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
   - il prezzo del biglietto è definito in base ai km (0.21 € al km)
   - va applicato uno sconto del 20% per i minorenni
   - va applicato uno sconto del 40% per gli over 65.
L'output del prezzo finale va emesso (presentato all'utente) in forma umana (con massimo due decimali, per indicare centesimi sul prezzo).
*/

//VARIABLES
const kilometers = parseInt (prompt ("Quanti chilometri vuoi percorrere?"));
const userAge = parseInt (prompt ("Inserisci la tua età?"));
const kmPrice = parseFloat (0.21);
let noDiscount = (kmPrice * kilometers);
let minorDiscount = (20 / 100 * noDiscount);
let over65Discount = (40 / 100 * noDiscount);
let total = noDiscount;

//STATEMENTS
if (userAge < 18){
    total = noDiscount - minorDiscount;
}

else if (userAge >= 65){
    total = noDiscount - over65Discount;
}

document.getElementById("ticket").innerHTML = "Il prezzo del suo biglietto è di: " + total.toFixed(2) + " &euro;";
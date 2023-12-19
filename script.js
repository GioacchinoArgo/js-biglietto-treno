// 0 - Recupero l'elemento html
// 1 - Chiedo all'utente quanti km vuole percorrere
// 2 - Chiedo all'utente l'età
// 3 - Dichiaro il prezzo del biglietto in una variabile
// 4 - Faccio il calcolo del prezzo del biglietto in base ai km dichiarati dall'utente senza lo sconto
// 5 - Costruisco il messaggio del costo del biglietto senza lo sconto
// 6 - Applico lo sconto sul prezzo del biglietto in base all'età dell'utente e costruisco il messaggio 
// 7 - Stampo il risultato in console

console.log('JS OK')

// - 0
const result = document.getElementById('total');

// - 1
const userDistance = parseInt(prompt('Quanti km vuoi percorrere?'));
console.log(userDistance)

// - 2
const userAge = parseInt(prompt('Quanti anni hai?'));
console.log(userAge)

// - 3
const ticketPrice = 0.21;
console.log(ticketPrice)

// - 4
let totalPrice = ticketPrice * userDistance;
console.log('prezzo totale:', totalPrice)

// - 5
let message = 'il prezzo del tuo tuo biglietto è: ' + '<strong>' + totalPrice.toFixed(2) + '</strong>'  + '€';
console.log(message)

// - 6
if (userAge < 18) {
    totalPrice -= (totalPrice * 0.20);
    console.log(totalPrice)
    message = 'il prezzo del tuo tuo biglietto è: ' + '<strong>' + totalPrice.toFixed(2) + '</strong>' + '€';
    console.log(message)
} else if (userAge > 65) {
    discountPrice = 0.40
    totalPrice -= (totalPrice * 0.40);
    console.log(totalPrice)
    message = 'il prezzo del tuo tuo biglietto è: ' + '<strong>' + totalPrice.toFixed(2) + '</strong>' + '€';
    console.log(message)
}

// - 7
total.innerHTML = message;

/*Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:

- il prezzo del biglietto è definito in base ai km (0.21 € al km)
- va applicato uno sconto del 20% per i minorenni
- va applicato uno sconto del 40% per gli over 65.
- L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo).*/

/*fase di preparazione variabili */
let chilometri = parseInt ( prompt("quanti km vuoi percorrere?") );
let eta = parseInt ( prompt("digita la tua età") )
let tariffa = 0.21;

/*calcolo il prezzo del biglietto in base ai chilometri*/
let prezzo = chilometri * tariffa;


/*sconto in base all'età*/
if(eta < 18){
    let discount = prezzo * 0.2;
    prezzo = prezzo - discount;
} 
else if(eta > 65){
    let discount = prezzo * 0.4;
    prezzo = prezzo - discount;
}

/*risultato*/
console.log(prezzo)

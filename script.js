/* richiesta:
	Il programma dovrà chiedere all’utente il numero di chilometri che vuole percorrere e l’età del passeggero.

	Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
	il prezzo del biglietto è definito in base ai km (0.21 € al km)

	va applicato uno sconto del 20% per i minorenni

	va applicato uno sconto del 40% per gli over 65.

	L’output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo). Questo richiederà un minimo di ricerca. 
*/

//chiedere eta e km al cliente e converto in numero
const km = parseInt(prompt("Inserisci il numero di km da percorrere", 5));
const eta = parseInt(prompt("Inserisci la tua età", 20));

const prezzoKm = 0.21;
let totalePrezzo = prezzoKm * km;

if (eta < 18 && eta !== 0) {
  totalePrezzo = totalePrezzo - 20 / 100;
} else if (eta > 65) {
  totalePrezzo = totalePrezzo - 40 / 100;
}
totalePrezzo = totalePrezzo.toFixed(2);

const paragrafo = document.getElementById("paragrafo");

let stringaFinale = "";
if (eta < 18 && eta !== 0) {
  stringaFinale = `Il prezzo finale del biglietto per Under 18 è: ${totalePrezzo}`;
} else if (eta > 65) {
  stringaFinale = `Il prezzo finale del biglietto over 65 è: ${totalePrezzo}`;
} else if (km === 0) {
  stringaFinale = `Nessun viaggio in programma per oggi`;
} else if (isNaN(km) && isNaN(eta)) {
  stringaFinale = `errore di validazione`;
}else if( eta === 0 ){
	stringaFinale = `non è consentito viaggiare ai neonati!`;
} else {
  stringaFinale = `Il prezzo finale del biglietto è: ${totalePrezzo}`;
}

paragrafo.innerText = stringaFinale;



var genera = document.getElementById("genera");

genera.addEventListener('click',
  function(){
    // prendo il nome del passeggero e lo inserisco nel tag specifico
  var nome = document.getElementById('nome').value;
  var nomePasseggero = document.getElementById('nome_passeggero');
  nomePasseggero.innerHTML = nome;

  // prendo i chilometri e la fascia d'età
  var km = document.getElementById('km').value;
  var fascia = document.getElementById('fascia').value;

  var prezzoBase = 0.21;
  var prezzoTratta = prezzoBase * km;
  var euro = " €";



// va applicato uno sconto del 20% per i minorenni e del 40% per gli over 65.
  if (fascia == 'minorenne') {
    prezzoTratta -= prezzoTratta * (20 / 100);
    document.getElementById('costo_biglietto').innerHTML =  prezzoTratta.toFixed(2) + euro;
    document.getElementById('offerta').innerHTML = fascia;
  } else if (fascia == 'silvercard') {
    prezzoTratta -= prezzoTratta * (40 / 100);
    document.getElementById('costo_biglietto').innerHTML = prezzoTratta.toFixed(2) + euro;
    document.getElementById('offerta').innerHTML = fascia;
  }

  document.getElementById('costo_biglietto').innerHTML = prezzoTratta.toFixed(2) + euro;
  document.getElementById('offerta').innerHTML = fascia;

  // genero un numero casuale da 1 a 9 per la carrozza
  var carrozza = Math.floor(Math.random() * 10) + 1;
  console.log(carrozza);
  document.getElementById('carrozza').innerHTML = carrozza;

  // genero un numero casuale da 9000 a 10000 per il codice cp
  var codice = Math.floor(Math.random() * (10000 - 9000) ) + 9000;
  document.getElementById('codice').innerHTML = codice;

  // faccio apparire il ticket quando clicco su genera
  var ticket = document.getElementById('ticket');
  ticket.classList.add('show');
  ticket.classList.remove('hidden');
}
);


document.getElementById('annulla');
annulla.addEventListener('click',
function(){

  // cancello tutti i risultati
  document.getElementById('costo_biglietto').innerHTML = '';
  document.getElementById('offerta').innerHTML = '';
  document.getElementById('carrozza').innerHTML = '';
  document.getElementById('codice').innerHTML = '';
  document.getElementById('nome_passeggero').innerHTML = '';

  // faccio scomparire il ticket cliccando su annulla
  ticket.classList.remove('show');
  ticket.classList.add('hidden');


})

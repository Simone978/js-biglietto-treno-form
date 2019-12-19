

var genera= document.getElementById("genera");

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
  var prezzoTratta= prezzoBase * km;
  var euro = " €";



// va applicato uno sconto del 20% per i minorenni e del 40% per gli over 65.
  if (fascia == 'minorenne') {
    prezzoTratta -= prezzoTratta * (20 / 100);
    document.getElementById('costo_biglietto').innerHTML = "Il tuo biglietto costa " + prezzoTratta.toFixed(2) + euro;
  } else if (fascia == 'silvercard') {
    prezzoTratta -= prezzoTratta * (40 / 100);
    document.getElementById('costo_biglietto').innerHTML = "Il tuo biglietto costa " + prezzoTratta.toFixed(2) + euro;
  }

  document.getElementById('costo_biglietto').innerHTML = "Il tuo biglietto costa " + prezzoTratta + euro;
  }
);

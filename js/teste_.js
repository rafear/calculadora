var numeros = document.getElementsByClassName('number');
var operadores = document.getElementsByClassName('operator');
var visor = document.getElementById('visor');
var valorTotal = 0;
var clearVisor = false;
var funcaoASerExecutada = null;

for (var i in operadores) {
	if (typeof operadores[i] !== 'object') {
		continue;
	}
	operadores[i].addEventListener('click', function() {
		if(funcaoASerExecutada != null) { //executa a funcao
			funcaoASerExecutada();

		} else { //guarda a função
			funcaoASerExecutada = window[this.dataset.acao];
			valorTotal = visor.value;
			clearVisor = true;

		}
	});
}


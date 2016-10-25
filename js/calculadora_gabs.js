var n = document.getElementsByClassName('number');
var valorTotal = 0;
var visor = document.getElementById('visor');
var operadores = document.getElementsByClassName('operator');
var clearVisor = false;
var funcaoASerExecutada = null;
var finalizadores = document.getElementsByClassName('finalizador');

for (var i in n) {
	if (typeof  n[i] !== 'object')  {

		continue;

	}

		n[i].addEventListener('click', function() {
			//alert(this.dataset.value);
			if (clearVisor) {
				visor.value="";
				clearVisor = false;
			}
			visor.value += this.dataset.value;

		});
}

for (var i in operadores) {
	if (typeof operadores[i] !== 'object') {
		continue;
	}

	operadores[i].addEventListener('click', function(){
		if (funcaoASerExecutada != null && clearVisor == false) {
			funcaoASerExecutada();
		} else {
			valorTotal = visor.value;
		}	
		clearVisor = true;			
		funcaoASerExecutada = window[this.dataset.acao];
		//window[this.dataset.acao]();


	});
}

for (var i in finalizadores) {
	if (typeof finalizadores[i] !== 'object') {
		continue;
	}
	finalizadores[i].addEventListener('click', function(){
	window[this.dataset.acao]();
	});
}


function somar() {
	valorTotal = parseInt(valorTotal) + parseInt(visor.value);
	visor.value =valorTotal;
}

function dividir() {
	valorTotal = parseInt(valorTotal) / parseInt(visor.value);
	visor.value =valorTotal;
}

function multiplicar() {
	valorTotal = parseInt(valorTotal) * parseInt(visor.value);
	visor.value =valorTotal;
}
function subtrair() {
	valorTotal = parseInt(valorTotal) - parseInt(visor.value);
	visor.value =valorTotal;
}

function limpartudo() {
	visor.value	= "";
	valorTotal = 0;
	clearVisor = true;
	funcaoASerExecutada = null;
}

function resultado() {
	funcaoASerExecutada();
	clearVisor = true;
	funcaoASerExecutada = null;
}
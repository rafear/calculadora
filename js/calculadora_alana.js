var numeros = document.getElementsByClassName('number');
var operadores = document.getElementsByClassName('operator');
var visor = document.getElementById('visor');
var valorTotal = 0;
var clearVisor = false;
var funcaoASerExecutada = '';

for (var i in numeros){
	if (typeof numeros[i] !== 'object') {
		continue;
	}
	numeros[i].addEventListener('click', function() {
		if (clearVisor) {
			visor.value = '';
			clearVisor = false;
		}
		//alert(this.dataset.value);
		visor.value += this.dataset.value;
	});
}

for (var i in operadores) {
	if (typeof operadores[i] !== 'object') {
		continue;
	}
	operadores[i].addEventListener('click', function() {
		window[this.dataset.acao]();
	});
	//window[this.dataset.acao]();
}

function dividir() {
	valorTotal = parseInt(valorTotal) / parseInt(visor.value);
	visor.value = valorTotal;
	clearVisor = true;
}

function multiplicar() {
	valorTotal = parseInt(valorTotal) * parseInt(visor.value);
	visor.value = valorTotal;
	clearVisor = true;
}

function subtrair() {
	valorTotal = parseInt(valorTotal) - parseInt(visor.value);
	visor.value = valorTotal;
	clearVisor = true;
}

function somar() {
	funcaoASerExecutada = function() {
		valorTotal = parseInt(valorTotal) + parseInt(visor.value);
		visor.value = valorTotal;
		clearVisor = true;
	}
	clearVisor = true;
}

function limpartudo() {
	resultado = 0;
}

function limpar() {
	resultado = 0;
}

/*limpartudo
dividir
multiplicar
limpar
subtrair
somar
resultado
*/
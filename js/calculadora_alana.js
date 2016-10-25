var numeros = document.getElementsByClassName('number');
var operadores = document.getElementsByClassName('operator');
var finalizadores = document.getElementsByClassName('finalizador')
var visor = document.getElementById('visor');
var valorTotal = 0;
var clearVisor = false;
var funcaoASerExecutada = null;

for (var i in numeros){
	if (typeof numeros[i] !== 'object') {
		continue;
	}
	numeros[i].addEventListener('click', function() {
		if (clearVisor) {
			visor.value = '';
			clearVisor = false;
		}
		visor.value += this.dataset.value;
	});
}

//para as operacoes
for (var i in operadores) {
	if (typeof operadores[i] !== 'object') {
		continue;
	}
	operadores[i].addEventListener('click', function() {
		if (funcaoASerExecutada != null && clearVisor == false) {
		//executa a funcao
		funcaoASerExecutada();
		} else {
			valorTotal = visor.value;
		}
		clearVisor = true;
		funcaoASerExecutada = window[this.dataset.acao];
	});
}

for (var i in finalizadores) {
	if (typeof finalizadores[i] !== 'object') {
		continue;
	}
	finalizadores[i].addEventListener('click', function() {
		window[this.dataset.acao]();
	});
}

function dividir() {
	valorTotal = parseInt(valorTotal) / parseInt(visor.value);
	visor.value = valorTotal;
}

function multiplicar() {
	valorTotal = parseInt(valorTotal) * parseInt(visor.value);
	visor.value = valorTotal;
}

function subtrair() {
	valorTotal = parseInt(valorTotal) - parseInt(visor.value);
	visor.value = valorTotal;
}

function somar() {
	valorTotal = parseInt(valorTotal) + parseInt(visor.value);
	visor.value = valorTotal;
}

function resultado() {
	funcaoASerExecutada();
	clearVisor = true;
	funcaoASerExecutada = null;
}

function limpartudo() {
	valorTotal = 0;
	visor.value = '';
	clearVisor = true;
	funcaoASerExecutada = null;
}

function limpar() {
	visor.value = '';
}

/*limpartudo
dividir
multiplicar
limpar
subtrair
somar
resultado
*/
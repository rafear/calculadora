var numeros = document.getElementsByClassName('number');
var operadores = document.getElementsByClassName('operator');
var valorTotal = 0;
var clearVisor = false;
var funcaoAserExercutada = '';
var visor = document.getElementById('visor');

for (var i in numeros){
	if(typeof numeros[i] !== 'object') {
		continue;
	}
	numeros[i].addEventListener('click', function() {
		//alert(this.dataset.value);
		if(clearVisor){
			visor.value = '';
			clearVisor = false;
		}
		visor.value += this.dataset.value;
	});
}

for (var i in operadores) {
	if (typeof operadores[i] !== 'object') {
		continue;
	}
	operadores[i].addEventListener('click', function() {
		//console.log(this.dataset.acao);
		window[this.dataset.acao]();
	});
	
}


function soma() { 
	funcaoAserExercutada = function(){
		valorTotal = parseInt(valorTotal) + parseInt(visor.value);
		visor.value = valorTotal;
		clearVisor = true;
	}
}

function multiplica() { alert('Multiplicação');}

function divisao() { alert('Soma');}

function subtrai() {
	
}

function resultado() { alert('Resultado');}

function limpa() { alert('Limpar');}
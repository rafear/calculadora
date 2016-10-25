var numeros = document.getElementsByClassName('number');
var operadores = document.getElementsByClassName('operator');
var finalizadores = document.getElementsByClassName('finalizador');
var valorTotal = 0;
var clearVisor = false;
var funcaoAserExercutada = null;
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

		if(funcaoAserExercutada != null && clearVisor == false) { //executa a funcao
			funcaoAserExercutada();
		} else {
			valorTotal = visor.value;
			
		}
			clearVisor = true;
			funcaoAserExercutada = window[this.dataset.acao];
	
	});
	
}

 for (var i in finalizadores) {
 	if(typeof finalizadores[i] !== 'object') {
 		continue;
 	}
 	finalizadores[i].addEventListener('click', function() {
 		 window[this.dataset.acao]();
 	});
 }

 
 '1' == 1

function soma() { 
		valorTotal = parseInt(valorTotal) + parseInt(visor.value);
		visor.value = valorTotal;
		clearVisor = true;

}

function multiplica() { 
		valorTotal = parseInt(valorTotal) * parseInt(visor.value);
		visor.value = valorTotal;
		clearVisor = true;

}

function divisao() { 
 		valorTotal = parseInt(valorTotal) / parseInt(visor.value);
		visor.value = valorTotal;
		clearVisor = true;
}

function subtrai() {
		valorTotal = parseInt(valorTotal) - parseInt(visor.value);
		visor.value = valorTotal;
		clearVisor = true;
}

function resultado() {
	funcaoAserExercutada();
	clearVisor = true;
	funcaoAserExercutada = null;
}
	

function limpa() {
	valorTotal = 0;
	visor.value = '';
	clearVisor = true;
	funcaoAserExercutada = null;
}
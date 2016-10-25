var numeros = document.getElementsByClassName('number');
var operadores = document.getElementsByClassName('operator');
var finalizadores = document.getElementsByClassName('finalizador');
var valorTotal = 0;
var clearVisor = false;
var funcaoAserExecutada = null;
var visor = document.getElementById('visor');

for (var i in numeros){
	//console.log(numeros[i])
	if(typeof numeros[i] !== 'object') {
		continue;
	}
	numeros[i].addEventListener('click', function(event) {
		//como eu faria para jogar o valor para o visor?
		//alert(this.dataset.value);

		//é o mesmo que visor.value = visor.value + this.dataset.value;
		if(clearVisor) {
			visor.value = '';
			clearVisor = false;
		}
		visor.value += this.dataset.value;
	});
}


										// para as operações
for( var i in operadores) {
	if(typeof operadores[i] !== 'object') {
		continue;
	}
	operadores[i].addEventListener('click', function() {

		if(funcaoAserExecutada != null && clearVisor == false) { //executa a funcao
			funcaoAserExecutada();
		} else {
			valorTotal = visor.value;
		}
		clearVisor = true;
		funcaoAserExecutada = window[this.dataset.acao];
		

	});	
}

for (var i in finalizadores) {
	if(typeof numeros[i] !== 'object') {
		continue;
	}
	finalizadores[i].addEventListener('click', function() {
		window[this.dataset.acao]();
	});
}


function soma() { 

		valorTotal = parseInt(valorTotal) + parseInt(visor.value); 
		visor.value = valorTotal;
		clearVisor = true;	
	
}

function soma() { 
	valorTotal = parseInt(valorTotal) + parseInt(visor.value); 
	visor.value = valorTotal;
}
function subtrai() {
	valorTotal = parseInt(valorTotal) - parseInt(visor.value); 
	visor.value = valorTotal;
}

function divide() { 
	valorTotal = parseInt(valorTotal) / parseInt(visor.value); 
	visor.value = valorTotal;
}

function multiplica() { 
	valorTotal = parseInt(valorTotal) * parseInt(visor.value); 
	visor.value = valorTotal;
}

function resultado() { 
	funcaoAserExecutada();
	clearVisor = true;
	funcaoAserExecutada = null;
}


function limpa() { 
	valorTotal = 0;
	visor.value = '';
	clearVisor = true;
	funcaoAserExecutada = null;

}
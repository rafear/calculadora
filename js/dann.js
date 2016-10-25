var numeros = document.getElementsByClassName('number');
var operadores = document.getElementsByClassName('operator');
var valorTotal = 0;
var clearVisor = false;
var funcaoAserExecutada = '';
var visor = document.getElementById('visor');

for (var i in numeros){
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
		//visor.value += this.dataset.value;
	});
}


// para as operações
for( var i in operadores) {
	if(typeof operadores[i] !== 'object') {
		continue;
	}
	operadores[i].addEventListener('click', function() {

		if(funcaoAserExecutada != null) { //executa a funcao
		} else {
			funcaoAserExecutada = window[this.dataset.acao];
			valorTotal = visor.value;
			clearVisor = true;
		}




		
		//funcao estatica
		window[this.dataset.acao]();
	});	
}

function soma() { 
	funcaoAserExecutada = function() {
		valorTotal = parseInt(valorTotal) + parseInt(visor.value); 
		visor.value = valorTotal;
		clearVisor = true;	
	};
	clearVisor = true;	

	
}

function divide() { alert('divide')}

function multiplica() { alert('multiplica')}

function resultado() { alert('resultado')}

function subtrai() { alert('subtrai')}

function limpa() { alert('limpa')}
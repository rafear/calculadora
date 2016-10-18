var numeros = document.getElementsByClassName('number');
var operators = document.getElementsByClassName('operator');
var valorTotal = 0;
var clearVisor = false;
var visor = document.getElementById('visor');

for (var i in numeros){
	if(typeof numeros[i] !== 'object') {
		continue;
	}
	numeros[i].addEventListener('click', function(event) {
		//como eu faria para jogar o valor para o visor?
		//alert(this.dataset.value);

		//é o mesmo que visor.value = visor.value + this.dataset.value
		if (clearVisor) {
			visor.value = '';
			clearVisor = false;
		}
		visor.value += this.dataset.value;
	});
}

function soma() {
	valorTotal = parseInt(valorTotal) + parseInt(visor.value);
	visor.value = valorTotal;
	clearVisor = true;
}

for ( var i in operators) {
	if(typeof operators[i] !== 'object') {
		continue;
	}
	operators[i].addEventListener('click', function() {
		console.log(this.dataset.acao);
	//window[this.dataset.acao]();

	});

}


//window['soma']()
function soma() {
	funcaoAserExecutada = function() {

 alert('somado')}

function divide() { alert('divide')}

function multiplica() { alert('multiplica')}

function resultado() { alert('resultado')}

function subtrai() { alert('subtrai')}

function limpa() { alert('limpa')}
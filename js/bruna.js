var numeros = document.getElementsByClassName("number"); // pegar todos os numeros
var operadores = document.getElementsByClassName("operator");
var valorTotal = 0; // valor inicial do Visor
var clearVisor = false;
var visor = document.getElementById("visor"); // pegando o visor

for (var i in numeros) { 
	if (typeof numeros[i] !== "object") { // se numeros[contador] !== do objeto
		continue;
	}
	numeros[i].addEventListener ("click", function (){
		//como eu faria para jogar o valor no visor?

		if (clearVisor) {
			visor.value = "";
			clearVisor = false;
		}
		//+= é o mesmo que visor.value = visor.value + this.dataset.value;
	  	visor.value  += this.dataset.value; // valor do visor = this (objeto global). data-value do html

	}); //passando o loop em todos os números e adicionando um evento ao ser clicados
}


for (var i in operadores) {
	if (typeof operadores[i] !== "object") {
		continue;
	}
	operadores[i].addEventListener('click',function() {
		//console.log (this.dataset.acao);
		window[this.dataset.acao]();
	})
}

//divide
//multiplica
//subtrai
//soma
//resultado
//limpa

//window['soma']()

function soma() {
	funcaoAserExecutada = function () {
	valorTotal = parseInt(valorTotal) + parseInt(visor.value);
	visor.value = valorTotal; 
	clearVisor = true;
	};

	clearVisor = true;
}

function divide() {
	alert("dividido");
}
function subtrai() {
	valorTotal = parseInt(valorTotal) - parseInt(visor.value);
	visor.value = valorTotal;
	clearVisor = true;
}

function multiplica() {
	alert("multiplicado");
}

function resultado() {
	alert("resultado");
}

function limpa() {
	alert("limpa");
}
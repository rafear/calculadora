var numeros = document.getElementsByClassName('number');
var valorVisor = 0;
var visor = document.getElementById('visor');

for (var i in numeros){
	if (typeof numeros[i] !== 'object') {
		continue;
	}
	numeros[i].addEventListener('click', function() {
		alert(this.dataset.value);
	});
}
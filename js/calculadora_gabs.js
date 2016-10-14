var n = document.getElementsByClassName('number');
var valorVisor = 0;
var visor = document.getElementById('visor');

for (var i in n) {
	if (typeof  n[i] !== 'object')  {

		continue;

	}

		n[i].addEventListener('click', function() {
			alert(this.dataset.value);
		});
}
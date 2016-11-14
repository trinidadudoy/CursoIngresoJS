/*Debemos lograr tomar un dato por 'ID'
y luego mostrarlo por 'Alert' al presionar el botón  'MOSTRAR'*/
function Mostar()
{
	var miVariable
	miVariable = document.getElementById('elNombre').value;
	//sino pongo el value me tira error de oBJET HTML
	alert(miVariable);
	
}



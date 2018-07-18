$(document).ready(function(){
	$(".add_name").on("click", function(){
		var nombre = window.prompt('Por favor agrega un nombre a la lista', 'Mr Smith');
		console.log(nombre);
	})
	$(".names").append(
		'<li>'
		+ nombre
		+ '</li>'
		)
})
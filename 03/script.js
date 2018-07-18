$(document).ready(function(){
	$("li:eq(3)").append('<ul><li><a href="#">link 4.a</a></li></ul>');
	$("li:eq(3)").before('<li><a href="#">link 3.5</a></li>');
	$("li:nth-child(7)").prepend('😎');
	$("li:nth-child(7)").after('🙂');
})
	
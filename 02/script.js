$(document).ready(function(){
	$(".article__socialnetworks:eq(3) li:nth-child(4)").children("a").text("Pinterest").attr("href","http://pinterest.com");
	//$(".article").eq(3).find("li>a").eq(3).attr("href","http://pinterest.com");
	$("a[href='#']").on("click",function(event){
		event.preventDefault()
	});
	$(".header__main").children("h2").css("font-size", "2em");

})
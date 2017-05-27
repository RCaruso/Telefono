console.log("js cargado...")

$(".numero").on("click", function() {
	var boton = $(this).text();
	console.log(boton);
	$(".display").append(boton);

});

$(".borrar").on("click", function() {
	$(".display").empty();

});


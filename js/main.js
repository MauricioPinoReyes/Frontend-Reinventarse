
/*---CABECERA-----*/

//javascript para efecto scroll
window.addEventListener("scroll", function () {
	var header = document.querySelector("header");
	header.classList.toggle('down', window.scrollY > 0);
});

//javascript para el menú de la barra lateral de navegación 
var menu = document.querySelector('.menu');
var menuBtn = document.querySelector('.menu-btn');
var closeBtn = document.querySelector('.close-btn');

menuBtn.addEventListener("click", () => {
	menu.classList.add('active');
});

closeBtn.addEventListener("click", () => {
	menu.classList.remove('active');
});

/*--- FIN CABECERA-----*/

/*--CARRUSEL 1 */

$(document).ready(function () {

	/*--CARRUSEL 1 */
	var imgItems = $('.slider .slider1').length; // Numero de Slides
	var imgPos = 1;

	// Agregando paginacion --
	for (i = 1; i <= imgItems; i++) {
		$('.pagination').append('<li><span class="fa fa-circle"></span></li>');
	}
	//------------------------

	$('.slider li').hide(); // Ocultanos todos los slides
	$('.slider li:first').show(); // Mostramos el primer slide
	$('.pagination li:first').css({ 'color': '#CD6E2E' }); // Damos estilos al primer item de la paginacion

	// Ejecutamos todas las funciones
	$('.pagination li').click(pagination);
	$('.right span').click(nextSlider);
	$('.left span').click(prevSlider);


	/*setInterval(function(){
		nextSlider();
	}, 4000);*/

	// FUNCIONES =========================================================

	function pagination() {
		var paginationPos = $(this).index() + 1; // Posicion de la paginacion seleccionada

		$('.slider li').hide(); // Ocultamos todos los slides
		$('.slider li:nth-child(' + paginationPos + ')').fadeIn(); // Mostramos el Slide seleccionado

		// Dandole estilos a la paginacion seleccionada
		$('.pagination li').css({ 'color': '#858585' });
		$(this).css({ 'color': '#CD6E2E' });

		imgPos = paginationPos;

	}

	function nextSlider() {
		if (imgPos >= imgItems) { imgPos = 1; }
		else { imgPos++; }

		$('.pagination li').css({ 'color': '#858585' });
		$('.pagination li:nth-child(' + imgPos + ')').css({ 'color': '#CD6E2E' });

		$('.slider li').hide(); // Ocultamos todos los slides
		$('.slider li:nth-child(' + imgPos + ')').fadeIn(); // Mostramos el Slide seleccionado

	}

	function prevSlider() {
		if (imgPos <= 1) { imgPos = imgItems; }
		else { imgPos--; }

		$('.pagination li').css({ 'color': '#858585' });
		$('.pagination li:nth-child(' + imgPos + ')').css({ 'color': '#CD6E2E' });

		$('.slider li').hide(); // Ocultamos todos los slides
		$('.slider li:nth-child(' + imgPos + ')').fadeIn(); // Mostramos el Slide seleccionado
	}

	/*--FIN CARRUSEL 1 */

	/*--CARRUSEL 2 */

	var imgItemsDos = $('.slider2 .slider li').length; // Numero de Slides
	var imgPosDos = 1;

	$('.slider2 .slider li').hide(); // Ocultanos todos los slides
	$('.slider2 .slider li:first').show(); // Mostramos el primer slide


	// Ejecutamos todas las funciones

	$('.slider2 .right span').click(nextSliderDos);
	$('.slider2 .left span').click(prevSliderDos);


	// FUNCIONES SLIDER 2 =========================================================


	function nextSliderDos() {
		if (imgPosDos >= imgItemsDos) { imgPosDos = 1; }
		else { imgPosDos++; }
		$('.slider2 .slider li').hide(); // Ocultamos todos los slides dos
		$('.slider2 .slider li:nth-child(' + imgPosDos + ')').fadeIn(); // Mostramos el SlideDos seleccionado

	}

	function prevSliderDos() {
		if (imgPosDos <= 1) { imgPosDos = imgItemsDos; }
		else { imgPosDos--; }
		$('.slider2 .slider li').hide(); // Ocultamos todos los slides dos
		$('.slider2 .slider li:nth-child(' + imgPosDos + ')').fadeIn(); // Mostramos el SlideDos seleccionado
	}

});

/*--FIN CARRUSEL 2 */

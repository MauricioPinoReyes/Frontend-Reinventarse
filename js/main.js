
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

	$('.slider .slider1').hide(); // Ocultanos todos los slides
	$('.slider .slider1:first').show(); // Mostramos el primer slide
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

		$('.slider .slider1').hide(); // Ocultamos todos los slides
		$('.slider .slider1:nth-child(' + imgPos + ')').fadeIn(); // Mostramos el Slide seleccionado

	}

	function prevSlider() {
		if (imgPos <= 1) { imgPos = imgItems; }
		else { imgPos--; }

		$('.pagination li').css({ 'color': '#858585' });
		$('.pagination li:nth-child(' + imgPos + ')').css({ 'color': '#CD6E2E' });

		$('.slider .slider1').hide(); // Ocultamos todos los slides
		$('.slider .slider1:nth-child(' + imgPos + ')').fadeIn(); // Mostramos el Slide seleccionado
	}

	/*--FIN CARRUSEL 1 */

	/*--ANIMACION QUE HACEMOS---*/






	/*--FIN ANIMACION QUE HACEMOS---*/





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
	/*--FIN CARRUSEL 2 */

	/*--CARRUSEL 4--*/
	$('.slider4').slick({
		slidesToShow: 4,
		slidesToScroll: 1,
		/*dots: true,*/
		arrows: true,
		autoplayspeed: 2000,
		infiniite: true,
		/*autoplay: true,*/
	
		responsive: [
	{
	  breakpoint: 1024,
	  settings: {
		slidesToShow: 3,
		slidesToScroll: 1,
		infinite: true,
		/*dots: true*/
	  }
	},
	{
	  breakpoint: 630,
	  settings: {
		slidesToShow: 2,
		slidesToScroll: 1
	  }
	},
	{
	  breakpoint: 480,
	  settings: {
		slidesToShow: 2,
		slidesToScroll: 1
	  }
	}
	// You can unslick at a given breakpoint now by adding:
	// settings: "unslick"
	// instead of a settings object
	]
	
	});
	
	/*-FIN SLIDER 4--*/
});








/*--PROGRAMAS--*/

/*--ventana modal 1--*/

const open1 = document.getElementById('open1');
const modal_container1 = document.getElementById('modal_container1');
const close1 = document.getElementById('close1');

open1.addEventListener('click', () => {
  modal_container1.classList.add('show');  
});

close1.addEventListener('click', () => {
  modal_container1.classList.remove('show');
});

/*--ventana modal 2--*/

const open2 = document.getElementById('open2');
const modal_container2 = document.getElementById('modal_container2');
const close2 = document.getElementById('close2');

open2.addEventListener('click', () => {
  modal_container2.classList.add('show');  
});

close2.addEventListener('click', () => {
  modal_container2.classList.remove('show');
});

/*--ventana modal 3--*/

const open3 = document.getElementById('open3');
const modal_container3 = document.getElementById('modal_container3');
const close3 = document.getElementById('close3');

open3.addEventListener('click', () => {
  modal_container3.classList.add('show');  
});

close3.addEventListener('click', () => {
  modal_container3.classList.remove('show');
});

/*--ventana modal 4--*/

const open4 = document.getElementById('open4');
const modal_container4 = document.getElementById('modal_container4');
const close4 = document.getElementById('close4');

open4.addEventListener('click', () => {
  modal_container4.classList.add('show');  
});

close4.addEventListener('click', () => {
  modal_container4.classList.remove('show');
});

/*--ventana modal 5--*/

const open5 = document.getElementById('open5');
const modal_container5 = document.getElementById('modal_container5');
const close5 = document.getElementById('close5');

open5.addEventListener('click', () => {
  modal_container5.classList.add('show');  
});

close5.addEventListener('click', () => {
  modal_container5.classList.remove('show');
});

/*--ventana modal 6--*/

const open6 = document.getElementById('open6');
const modal_container6 = document.getElementById('modal_container6');
const close6 = document.getElementById('close6');

open6.addEventListener('click', () => {
  modal_container6.classList.add('show');  
});

close6.addEventListener('click', () => {
  modal_container6.classList.remove('show');
});

/*--ventana modal 7--*/

const open7 = document.getElementById('open7');
const modal_container7 = document.getElementById('modal_container7');
const close7 = document.getElementById('close7');

open7.addEventListener('click', () => {
  modal_container7.classList.add('show');  
});

close7.addEventListener('click', () => {
  modal_container7.classList.remove('show');
});


/*-SLIDER 4--*/




/*--ANIMACIONES--*/

/*que hacemos*/

let animacion = document.querySelectorAll(".animacion");

function mostrarScroll(){
    let scrollTop = document.documentElement.scrollTop;
    for (var i=0; i < animacion.length; i++){
        let alturaAnimacion = animacion[i].offsetTop;
        if(alturaAnimacion - 800 < scrollTop){
            animacion[i].style.opacity = 1;
        }
    }
}

window.addEventListener('scroll', mostrarScroll);


let animacion2 = document.querySelectorAll(".animacion2");

function mostrarScrollDerecha(){
    let scrollTop = document.documentElement.scrollTop;
    for (var i=0; i < animacion2.length; i++){
        let alturaAnimacion = animacion2[i].offsetTop;
        if(alturaAnimacion - 800 < scrollTop){
            animacion2[i].style.opacity = 1;
            animacion2[i].classList.add("animacionRight");
        }
    }
}

window.addEventListener('scroll', mostrarScrollDerecha);
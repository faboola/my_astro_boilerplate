//BOOTSTRAP

import * as bootstrap from 'bootstrap';


( function () {
	'use strict';

	// Focus input if Searchform is empty
	[].forEach.call( document.querySelectorAll( '.search-form' ), ( el ) => {
		el.addEventListener( 'submit', function ( e ) {
			var search = el.querySelector( 'input' );
			if ( search.value.length < 1 ) {
				e.preventDefault();
				search.focus();
			}
		} );
	} );

	// Initialize Popovers: https://getbootstrap.com/docs/5.0/components/popovers
	var popoverTriggerList = [].slice.call( document.querySelectorAll( '[data-bs-toggle="popover"]' ) );
	var popoverList = popoverTriggerList.map( function ( popoverTriggerEl ) {
		return new bootstrap.Popover( popoverTriggerEl, {
			trigger: 'focus',
		} );
	} );
} )();






/* -------------------------------------------------------------------------- */
/*                                STICKY NAVBAR                               */
/* -------------------------------------------------------------------------- */


var watch = document.querySelector('.scrollWatch'); //definisco l'elemento da modificare (navbar)
let navTop = watch.offsetHeight; //prendo l'altezza dell'hero
let nav = document.querySelector('#mainHeader');

console.log('nav is ' + navTop);
function fixedNav() {
	//console.log(window.scrollY);
if (window.scrollY > navTop) {      //se lo scroll verticale è maggiore dell'altezza della navbar
   nav.classList.add('scrolled');  //allora aggiungi una classe alla navbar
} else {
   nav.classList.remove('scrolled');    //altrimenti togli la classe  
}
}

window.addEventListener('scroll', fixedNav);  //sull'evento scroll fai partire la funzione sopra.

//HELPER DOCREADY FUNCTION
function docReady(fn) {
    // see if DOM is already available
    if (document.readyState === "complete" || document.readyState === "interactive") {
        // call on next available tick
        setTimeout(fn, 1);
    } else {
        document.addEventListener("DOMContentLoaded", fn);
    }
}  


/* -------------------------------------------------------------------------- */
/*                                SCROLLREVEAL                                */
/* -------------------------------------------------------------------------- */

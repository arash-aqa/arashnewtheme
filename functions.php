<?php
// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

// Holds the themes url  ( bedune slashe akhar )
if (! defined ( ARASH_THEME_URL)) {
	define ( ARASH_THEME_URL, get_template_directory_uri () );
}

// Holds the themes path  ( bedune slashe akhar )
if(! defined ( ARASH_THEME_DIR)) {
	define ( ARASH_THEME_DIR, get_template_directory () );
}

// enqueue styles in header
function enqueue_head() {
	wp_enqueue_style ( 'front-css',ARASH_THEME_URL.'/build/css/homepage-style.css' ,'',filemtime ( ARASH_THEME_DIR.'/build/css/homepage-style.css'),'all' );
}
add_action ('wp_head','enqueue_head');

// enqueue scriptes in footer
function enqueue_footer(){
	wp_enqueue_script ( 'front-js', ARASH_THEME_URL.'/build/js/homepage-style.js' , ['jquery'] ,filemtime ( ARASH_THEME_DIR.'/build/js/homepage-style.js'), true);
}
add_action ('wp_footer','enqueue_footer');


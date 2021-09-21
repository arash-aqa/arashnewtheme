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

// add theme support
function arash_theme_support() {
	add_theme_support( 'post-thumbnails' );
	add_theme_support( 'automatic-feed-links' );
	add_theme_support( 'title-tag' );
	add_theme_support(
		'html5',
		[
			'search-form',
			'comment-form',
			'comment-list',
			'gallery',
			'caption',
		]
	);
	add_theme_support(
		'custom-logo',
		[
			'height'      => 100,
			'width'       => 350,
			'flex-height' => true,
			'flex-width'  => true,
		]
	);
	add_theme_support( 'editor-styles' );

	/*
	 * Editor Style.
	 */
	add_editor_style( 'editor-style.css' );

	/*
	 * Gutenberg wide images.
	 */
	add_theme_support( 'align-wide' );

	/*
	 * WooCommerce supports
	 */

	// WooCommerce in general.
	add_theme_support( 'woocommerce' );
	// Enabling WooCommerce product gallery features (are off by default since WC 3.0.0).
	// zoom.
	add_theme_support( 'wc-product-gallery-zoom' );
	// lightbox.
	add_theme_support( 'wc-product-gallery-lightbox' );
	// swipe.
	add_theme_support( 'wc-product-gallery-slider' );

}
add_action ('after_setup_theme','arash_theme_support');

// enqueue styles in header
function enqueue_head() {
	wp_enqueue_style ( 'front-css',ARASH_THEME_URL.'/build/css/homepage-style.css' ,'',filemtime ( ARASH_THEME_DIR.'/build/css/homepage-style.css'),'all' );
}
add_action ('wp_enqueue_scripts','enqueue_head');

// enqueue scriptes in footer
function enqueue_footer(){
	wp_enqueue_script ( 'front-js', ARASH_THEME_URL.'/build/js/homepage-style.js' , ['jquery'] ,filemtime ( ARASH_THEME_DIR.'/build/js/homepage-style.js'), true);
}
add_action ('wp_enqueue_scripts','enqueue_footer');


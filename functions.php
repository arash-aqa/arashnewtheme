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
/*
 * AutoLoader
 */
require_once(ARASH_THEME_DIR.'/vendor/autoload.php');

/*
 *
 */
function arash_theme_get_instance() {
	\ArashTheme\inc\classes\CoreThemeArash::get_instance ();
};
arash_theme_get_instance();


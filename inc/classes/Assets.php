<?php
/**
 * enqueue styeles and scripts
 * @package ArashTheme
 */
namespace ArashTheme\inc\classes;


use ArashTheme\inc\helpers\traits\singleton;

class Assets {
	use singleton;
	protected function __construct(){
		$this->setup_hooks ();
	}

	protected function setup_hooks(){
		/**
		 * Actions
		 */
		add_action( 'wp_enqueue_scripts', [ $this, 'register_styles' ] );
		add_action( 'wp_enqueue_scripts', [ $this, 'register_scripts' ] );
	}

	public function register_styles(){
		wp_register_style ( 'front-css', ARASH_THEME_URL.'/build/css/homepage-style.css' , '', filemtime ( ARASH_THEME_DIR.'/build/css/homepage-style.css'), 'all' );
		wp_register_style ( 'carousel-css', ARASH_THEME_URL.'/build/css/carousel.css' , '', filemtime ( ARASH_THEME_DIR.'/build/css/carousel.css'), 'all' );

		wp_enqueue_style ('front-css' );
		wp_enqueue_style ('carousel-css' );
	}

	public function register_scripts(){
		wp_register_script ( 'front-js', ARASH_THEME_URL.'/build/js/homepage-style.js' , ['jquery'] ,filemtime ( ARASH_THEME_DIR.'/build/js/homepage-style.js'), true);
		wp_register_script ( 'carousel-js', ARASH_THEME_URL.'/build/js/carousel.js' ,[] ,filemtime ( ARASH_THEME_DIR.'/build/js/carousel.js'), true);

		wp_enqueue_script ( 'front-js');
		wp_enqueue_script ( 'carousel-js');
	}
}
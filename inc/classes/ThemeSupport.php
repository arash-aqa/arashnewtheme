<?php
/**
 * theme supportes
 * @package ArashTheme
 */
namespace ArashTheme\inc\classes;


use ArashTheme\inc\helpers\traits\singleton;

class ThemeSupport {
	use singleton;
	protected function __construct(){
		$this->setup_hooks ();
	}

	protected function setup_hooks(){

		add_action ('after_setup_theme',[$this, 'arash_theme_support']);
	}

	public function arash_theme_support(){

		add_theme_support( 'post-thumbnails' );
		add_theme_support( 'automatic-feed-links' );
		add_theme_support( 'title-tag' );
		add_theme_support( 'customize_selective_refresh_widgets' );
		add_theme_support(
			'html5',
			[
				'search-form',
				'comment-form',
				'comment-list',
				'gallery',
				'caption',
				'script',
				'style'
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
		add_theme_support('block-templates');
		add_theme_support ( 'wp-block-styles'); // to use block styles in gutenberg and front-side

		/*
		 * Editor Style.
		 */
		add_theme_support( 'editor-styles' ); // to theme use custom editor styles.
		add_editor_style( 'editor-style.css' ); // to theme use editor-style or editor-style-rtl ... for editor styles.

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

}
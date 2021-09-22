<?php
/**
 * instaciate all classes and put them together.
 * @package ArashTheme
 */
namespace ArashTheme\inc\classes;


use ArashTheme\inc\helpers\traits\singleton;

class CoreThemeArash {
	use singleton;

	protected function __construct() {
		$this->setup_hooks ();
	}

	protected function setup_hooks() {
	ThemeSupport::get_instance ();
	Assets::get_instance ();
	}
}
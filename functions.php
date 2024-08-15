<?php

// includes
require_once("inc/gw-register-acf-block-types.php");
require_once("inc/gw-register-post-types.php");
require_once("inc/gw-remove-std-theme-functions.php");
require_once("inc/functions/render-acf-images.php");
require_once("inc/functions/render-schweiger-customer-list-element.php");
require_once("inc/functions/render-schweiger-project-list-element.php");
require_once("inc/functions/render-schweiger-team-list-element.php");

/**
 * Enqueues frontend assets.
 */

function custom_enqueue_assets() {

	$theme_version = wp_get_theme()->get( 'Version' );

	wp_enqueue_script(
		'gw-wp-theme-script',
		get_stylesheet_directory_uri() . '/js/dist/index.js',
		array(
			'wp-polyfill',
			'jquery'
		),
		$theme_version,
		true
	);

	wp_set_script_translations(
		'gw-wp-theme-script',
		'gw-wp-theme',
		get_stylesheet_directory() . '/languages'
	);

	if ( function_exists( 'get_field' ) &&
		get_field( 'gw-enqueue-parent-theme-style', 'gw-wp-theme-options' ) ) {

		// Include the parent theme stylesheet.
		wp_enqueue_style(
			'twentytwenty-style',
			get_template_directory_uri() . '/style.css',
			null,
			$theme_version
		);

	}

	// Include the child theme stylesheet.
	wp_enqueue_style(
		'gw-wp-theme-style',
		get_stylesheet_directory_uri() . '/css/dist/style.css',
		null,
		$theme_version
	);

	// Add inline style sheet.
	$inline_styles = '';

	// Top bar.
	if ( function_exists( 'get_field' ) &&
		get_field( 'gw-show-topbar', 'gw-wp-theme-options' ) ) {

		$gw_top_bar_background_color = get_theme_mod( 'gw_top_bar_background_color', 'inherit' );
		$gw_top_bar_text_color = get_theme_mod( 'gw_top_bar_text_color', 'inherit' );
		$inline_styles .= '.gw-top-bar{background-color:' . $gw_top_bar_background_color . ';color:' . $gw_top_bar_text_color . ';}';
		$inline_styles .= '.gw-top-bar a{color:' . $gw_top_bar_text_color . ';}';
		$inline_styles .= '.gw-top-bar .svg-icon{color:' . $gw_top_bar_text_color . ';}.gw-top-bar .svg-icon polygon,.gw-top-bar .svg-icon path{fill: currentColor;}';

	}

	if ( $inline_styles ) {

		wp_add_inline_style( 'gw-wp-theme-style', $inline_styles );

	}

}

add_action( 'wp_enqueue_scripts', 'custom_enqueue_assets' );

/**
 * Enqueues backend assets.
 */

function custom_enqueue_block_editor_assets() {

	$theme_version = wp_get_theme()->get( 'Version' );

	// Dequeue editor styles.
	//wp_deregister_style( 'twentytwenty-block-editor-styles' );

	wp_enqueue_script(
		'gw-wp-theme-script',
		get_stylesheet_directory_uri() . '/js/dist/index.editor.js',
		array(
			'wp-blocks',
			'wp-dom-ready',
			'wp-i18n',
			'jquery'
		),
		$theme_version,
		true
	);

	wp_set_script_translations(
		'gw-wp-theme-script',
		'gw-wp-theme',
		get_stylesheet_directory() . '/languages'
	);

}

add_action( 'enqueue_block_editor_assets', 'custom_enqueue_block_editor_assets' );

/**
 * Enqueues assets for the admin area.
 */

function custom_admin_enqueue_assets() {

	$theme_version = wp_get_theme()->get( 'Version' );

	wp_enqueue_style(
		'gw-wp-theme-style',
		get_stylesheet_directory_uri() . '/css/dist/style.admin.css',
		null,
		$theme_version
	);

}

add_action( 'admin_enqueue_scripts', 'custom_admin_enqueue_assets' );



// Absatzformate/Farben für Backend WYSIWYG-Editor
function gw_custom_colours( $init ) {

	// Absätze übergeben
// 		$init['block_formats'] = 'Paragraph=p;Überschrift groß=h1;Überschrift mittel=h2;Überschrift klein=h3';

	// Formate definieren
    $style_formats = array(
        // Jedes Format hat ein eigenes Array
    	array(
    		'title' => 'Großer Text (130%)',
    		'inline' => 'span',
    		'classes' => 'bigtext-130'
    	),
    	array(
    		'title' => 'Großer Text (150%)',
    		'inline' => 'span',
    		'classes' => 'bigtext-150'
    	),
    	array(
    		'title' => 'Großer Text (170%)',
    		'inline' => 'span',
    		'classes' => 'bigtext-170'
    	),
    	array(
    		'title' => 'Newsletter-Link',
    		'inline' => 'span',
    		'classes' => 'newsletter-link'
    	),
    );
	// Formate übergeben
	$init['style_formats'] = json_encode( $style_formats );


	// Individuelle Farben,
	$custom_colours = '
		"e5e6e8", "Hellgrau",
		"1d1d1b", "Dunkelgrau (Standardtextfarbe)",
		"e1251B", "Rot (Schweiger Design)",
	';
	// Übergeben der Werte
	$init['textcolor_map'] = '['.$custom_colours.']';
	return $init;
}
add_filter('tiny_mce_before_init', 'gw_custom_colours');

/**
 * Configures the theme.
 */
function gw_custom_theme_setup() {
	// Make the theme available for translation.
	$loaded = load_child_theme_textdomain( 'gw-schweigerdesign', get_stylesheet_directory() . '/languages' );

	// Editor color palette.
	add_theme_support(
		'editor-color-palette',
		array(
			array(
				'name' => __( 'Schweiger Design red', 'gw-schweigerdesign' ),
				'slug' => 'schweiger-red',
				'color' => '#e1251b'
			),
			array(
				'name' => __( 'Main text color', 'gw-schweigerdesign' ),
				'slug' => 'grey-text',
				'color' => '#1d1d1b'
			),
			array(
				'name' => __( 'Light grey', 'gw-schweigerdesign' ),
				'slug' => 'light-grey',
				'color' => '#e5e6e8'
			),
			array(
				'name' => __( 'White', 'gw-schweigerdesign' ),
				'slug' => 'white',
				'color' => '#ffffff'
			),
		)
	);
	add_theme_support( 'align-wide' );

	// Add custom editor styles.
	add_editor_style( 'css/dist/style.editor.css' );

	// Add custom menus.
	register_nav_menu( 'mobile', __( 'Mobile', 'gw-schweigerdesign' ) );
}

add_action( 'after_setup_theme', 'gw_custom_theme_setup', 11 );


// Funktion zum Anzeigen von Formaten aus WYSIWYG-Editor
function gewend_mce_buttons( $buttons ) {
    array_unshift( $buttons, 'styleselect' );
    return $buttons;
}
// Filter zum Anzeigen von Formaten
add_filter( 'mce_buttons', 'gewend_mce_buttons' );


/**
 * Register sidebars.
 *
 * Registers our main widget area and the front page widget areas.
 *
 * @since Twenty Twelve 1.0
 */
function gw_schweigerdesign_widgets_init() {
	register_sidebar( array(
		'name' => __( 'Footer oben links', 'gw-schweigerdesign' ),
		'id' => 'footer-1',
		'description' => '',
		'before_widget' => '<div class="widget">',
		'after_widget' => '</div>',
		'before_title' => '<span class="footer-title">',
		'after_title' => '</span>',
	) );
	register_sidebar( array(
		'name' => __( 'Footer oben rechts', 'gw-schweigerdesign' ),
		'id' => 'footer-2',
		'description' => '',
		'before_widget' => '<div class="widget">',
		'after_widget' => '</div>',
		'before_title' => '<span class="footer-title">',
		'after_title' => '</span>',
	) );

	register_sidebar( array(
		'name' => __( 'Footer unten links', 'gw-schweigerdesign' ),
		'id' => 'footer-3',
		'description' => '',
		'before_widget' => '<div class="widget">',
		'after_widget' => '</div>',
		'before_title' => '<span class="footer-title">',
		'after_title' => '</span>',
	) );
}
add_action( 'widgets_init', 'gw_schweigerdesign_widgets_init' );

/**
 * De
 */
function gw_deregister_fonts_styles() {
	wp_deregister_style( 'twentytwelve-fonts' );
	wp_deregister_style( 'twentytwelve-fonts-css' );

}
add_action( 'wp_print_styles', 'gw_deregister_fonts_styles', 100 );

?>

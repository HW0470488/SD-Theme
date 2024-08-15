<?php
/**
 * Removes unused theme features.
 *
 * @see mu-plugin/gw-wpmu-plugin/acf-json/group_5f92ebf592c50.json
 */

function gw_remove_theme_features() {

	if ( function_exists( 'get_field' ) ) {

		$fields = array(
			'gw-activate-post-thumbnails',
			'gw-activate-custom-background',
			'gw-activate-custom-header',
			'gw-activate-post-formats',
			'gw-activate-automatic-feed-links'
		);

		foreach ( $fields as $field ) {

			if ( ! get_field( $field, 'gw-wp-theme-options' ) ) {

				remove_theme_support( $field );

			}

		}

	}


}

add_action( 'after_setup_theme', 'gw_remove_theme_features', 20 );


/**
 * Remove standard widget areas
 */
function gw_remove_widgets() {
	unregister_sidebar('sidebar-1');
}
add_action( 'widgets_init', 'gw_remove_widgets', 11 );

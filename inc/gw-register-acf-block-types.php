<?php
/**
 * Registers custom ACF block types.
 *
 * @link https://www.advancedcustomfields.com/resources/acf_register_block_type/
 */

function gw_register_acf_block_types() {

	if ( function_exists( 'acf_register_block_type' ) ) {

		// Schweiger Design Heading.
		acf_register_block_type(
			array(
				'name' => 'gw-schweiger-heading',
				'title' => __( 'Heading with colored accent', 'gw-schweigerdesign' ),
				'description' => __( 'Heading with colored accent.', 'gw-schweigerdesign' ),
				'render_template' => 'template-parts/blocks/gw-schweiger-heading.php',
				'category' => 'schweigerdesign',
				'icon' => array(
					// Specifying a background color to appear with the icon e.g.: in the inserter.
					'background' => '#ffffff',
					// Specifying a color for the icon (optional: if not set, a readable color will be automatically defined)
					'foreground' => '#e1251b',
					// Specifying a dashicon for the block
					'src' => 'heading',
				),
				'keywords' => array(
					__( 'heading, colored, schweiger', 'gw-schweigerdesign' )
				)
			)
		);

		// Schweiger Project List.
		acf_register_block_type(
			array(
				'name' => 'gw-schweiger-project-list',
				'title' => __( 'Project Tiles', 'gw-schweigerdesign' ),
				'description' => __( 'Project Tiles', 'gw-schweigerdesign' ),
				'render_template' => 'template-parts/blocks/gw-schweiger-project-list.php',
				'category' => 'schweigerdesign',
				'icon' => array(
					// Specifying a background color to appear with the icon e.g.: in the inserter.
					'background' => '#ffffff',
					// Specifying a color for the icon (optional: if not set, a readable color will be automatically defined)
					'foreground' => '#e1251b',
					// Specifying a dashicon for the block
					'src' => 'grid-view',
				),
				'keywords' => array(
					__( 'project, tiles, schweiger', 'gw-schweigerdesign' )
				)
			)
		);

		// Schweiger Customer List.
		acf_register_block_type(
			array(
				'name' => 'gw-schweiger-customer-list',
				'title' => __( 'Customer Tiles', 'gw-schweigerdesign' ),
				'description' => __( 'Customer Tiles', 'gw-schweigerdesign' ),
				'render_template' => 'template-parts/blocks/gw-schweiger-customer-list.php',
				'category' => 'schweigerdesign',
				'icon' => array(
					// Specifying a background color to appear with the icon e.g.: in the inserter.
					'background' => '#ffffff',
					// Specifying a color for the icon (optional: if not set, a readable color will be automatically defined)
					'foreground' => '#e1251b',
					// Specifying a dashicon for the block
					'src' => 'screenoptions',
				),
				'keywords' => array(
					__( 'customer, tiles, schweiger', 'gw-schweigerdesign' )
				)
			)
		);

		acf_register_block_type(
		// Schweiger Team List.
			array(
				'name' => 'gw-schweiger-team-list',
				'title' => __( 'Team Tiles', 'gw-schweigerdesign' ),
				'description' => __( 'Team Tiles', 'gw-schweigerdesign' ),
				'render_template' => 'template-parts/blocks/gw-schweiger-team-list.php',
				'category' => 'schweigerdesign',
				'icon' => array(
					// Specifying a background color to appear with the icon e.g.: in the inserter.
					'background' => '#ffffff',
					// Specifying a color for the icon (optional: if not set, a readable color will be automatically defined)
					'foreground' => '#e1251b',
					// Specifying a dashicon for the block
					'src' => 'businesswoman',
				),
				'keywords' => array(
					__( 'team, tiles, schweiger', 'gw-schweigerdesign' )
				)
			)
		);

		acf_register_block_type(
		// Schweiger Testimonials.
			array(
				'name' => 'gw-schweiger-testimonials-slider',
				'title' => __( 'Testimonials Slider', 'gw-schweigerdesign' ),
				'description' => __( 'Testimonials', 'gw-schweigerdesign' ),
				'render_template' => 'template-parts/blocks/gw-schweiger-testimonials-slider.php',
				'category' => 'schweigerdesign',
				'icon' => array(
					// Specifying a background color to appear with the icon e.g.: in the inserter.
					'background' => '#ffffff',
					// Specifying a color for the icon (optional: if not set, a readable color will be automatically defined)
					'foreground' => '#e1251b',
					// Specifying a dashicon for the block
					'src' => 'groups',
				),
				'keywords' => array(
					__( 'slider, testimonials, schweiger', 'gw-schweigerdesign' )
				)
			)
		);


		acf_register_block_type(
		// Schweiger Tile.
			array(
				'name' => 'gw-schweiger-tile',
				'title' => __( 'Tile', 'gw-schweigerdesign' ),
				'description' => __( 'Tile with Schweiger style', 'gw-schweigerdesign' ),
				'render_template' => 'template-parts/blocks/gw-schweiger-tile.php',
				'category' => 'schweigerdesign',
				'icon' => array(
					// Specifying a background color to appear with the icon e.g.: in the inserter.
					'background' => '#ffffff',
					// Specifying a color for the icon (optional: if not set, a readable color will be automatically defined)
					'foreground' => '#e1251b',
					// Specifying a dashicon for the block
					'src' => 'list-view',
				),
				'keywords' => array(
					__( 'tiles, schweiger', 'gw-schweigerdesign' )
				)
			)
		);

	}

}

add_action( 'acf/init', 'gw_register_acf_block_types' );

/**
 * Register block category
 */

function gw_plugin_block_categories( $categories, $post ) {
	if ( $post->post_type !== 'post' ) {
	//	return $categories;
	}
	return array_merge(
		array(
			array(
				'slug' => 'schweigerdesign',
				'title' => __( 'Schweiger Design Blocks', 'gw-schweigerdesign' ),
				'icon'  => '',
			),
		),
		$categories,
	);
}
add_filter( 'block_categories', 'gw_plugin_block_categories', 10, 2 );

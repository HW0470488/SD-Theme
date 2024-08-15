<?php
function gw_register_post_type() {
	// Projekte
	register_post_type( 'schweiger_projects',
		array(
			'label' => _x( 'Projects', 'Post Type Main Label', 'gw-schweigerdesign' ),
			'labels' => array(
				'name' => _x( 'Projects', 'Post Type General Name', 'gw-schweigerdesign' ),
				'singular_name' => _x( 'Project', 'Post Type Singular Name', 'gw-schweigerdesign' ),
				'menu_name' => __( 'Projects', 'gw-schweigerdesign' ),
				'name_admin_bar' => __( 'Projects', 'gw-schweigerdesign' ),
				'archives' => __( 'Project Archives', 'gw-schweigerdesign' ),
				'attributes' => __( 'Project Attributes', 'gw-schweigerdesign' ),
				'parent_item_colon' => __( 'Parent Project:', 'gw-schweigerdesign' ),
				'all_items' => __( 'All Projects', 'gw-schweigerdesign' ),
				'add_new_item' => __( 'Add New Project', 'gw-schweigerdesign' ),
				'new_item' => __( 'New Project', 'gw-schweigerdesign' ),
				'edit_item' => __( 'Edit Project', 'gw-schweigerdesign' ),
				'update_item' => __( 'Update Project', 'gw-schweigerdesign' ),
				'view_item' => __( 'View Project', 'gw-schweigerdesign' ),
				'view_items' => __( 'View Project', 'gw-schweigerdesign' ),
				'search_items' => __( 'Search Project', 'gw-schweigerdesign' ),
				'not_found' => __( 'No projects found', 'gw-schweigerdesign' ),
				'not_found_in_trash' => __( 'No projects found in Trash', 'gw-schweigerdesign' )
			),
			'menu_icon' => 'dashicons-format-gallery',
			'supports' => array( 'title', 'editor', 'revisions' ),
			'taxonomies' => array('category'),
			'rewrite' => array(
				'slug' => _x( 'projects', 'CPT permalink slug', 'gw-schweigerdesign' ),
				'with_front' => false
			),
			'hierarchical' => false,
			'public' => true,
			'show_ui' => true,
			'show_in_menu' => true,
			'menu_position' => 20,
			'show_in_admin_bar' => true,
			'show_in_nav_menus' => true,
			'show_in_rest' => true,
			'can_export' => true,
			'has_archive' => false,
			'exclude_from_search' => false,
			'publicly_queryable' => true,
			'capability_type' => 'page'
		)
	);

	// Kunden
	register_post_type( 'schweiger_customer',
		array(
			'label' => _x( 'Customer', 'Post Type Main Label', 'gw-schweigerdesign' ),
			'labels' => array(
				'name' => _x( 'Customers', 'Post Type General Name', 'gw-schweigerdesign' ),
				'singular_name' => _x( 'Customer', 'Post Type Singular Name', 'gw-schweigerdesign' ),
				'menu_name' => __( 'Customer', 'gw-schweigerdesign' ),
				'name_admin_bar' => __( 'Customer', 'gw-schweigerdesign' ),
				'archives' => __( 'Customer Archives', 'gw-schweigerdesign' ),
				'attributes' => __( 'Customer Attributes', 'gw-schweigerdesign' ),
				'parent_item_colon' => __( 'Parent Customer:', 'gw-schweigerdesign' ),
				'all_items' => __( 'All Customers', 'gw-schweigerdesign' ),
				'add_new_item' => __( 'Add New Customer', 'gw-schweigerdesign' ),
				'new_item' => __( 'New Customer', 'gw-schweigerdesign' ),
				'edit_item' => __( 'Edit Customer', 'gw-schweigerdesign' ),
				'update_item' => __( 'Update Customer', 'gw-schweigerdesign' ),
				'view_item' => __( 'View Customer', 'gw-schweigerdesign' ),
				'view_items' => __( 'View Customer', 'gw-schweigerdesign' ),
				'search_items' => __( 'Search Customer', 'gw-schweigerdesign' ),
				'not_found' => __( 'No customers found', 'gw-schweigerdesign' ),
				'not_found_in_trash' => __( 'No customers found in Trash', 'gw-schweigerdesign' )
			),
			'menu_icon' => 'dashicons-buddicons-buddypress-logo',
			'supports' => array( 'title', 'revisions' ),
			'taxonomies' => array(),
			'rewrite' => array(
				'slug' => _x( 'customers', 'CPT permalink slug', 'gw-schweigerdesign' ),
				'with_front' => false
			),
			'hierarchical' => false,
			'public' => true,
			'show_ui' => true,
			'show_in_menu' => true,
			'menu_position' => 21,
			'show_in_admin_bar' => true,
			'show_in_nav_menus' => true,
			'show_in_rest' => false,
			'can_export' => true,
			'has_archive' => false,
			'exclude_from_search' => false,
			'publicly_queryable' => false, // true = single view enabled, false = single view disabled
			'capability_type' => 'page'
		)
	);

	// Engagements
	register_post_type( 'schweiger_engagement',
		array(
			'label' => _x( 'Engagement', 'Post Type Main Label', 'gw-schweigerdesign' ),
			'labels' => array(
				'name' => _x( 'Engagements', 'Post Type General Name', 'gw-schweigerdesign' ),
				'singular_name' => _x( 'Engagement', 'Post Type Singular Name', 'gw-schweigerdesign' ),
				'menu_name' => __( 'Engagement', 'gw-schweigerdesign' ),
				'name_admin_bar' => __( 'Engagement', 'gw-schweigerdesign' ),
				'archives' => __( 'Engagement Archives', 'gw-schweigerdesign' ),
				'attributes' => __( 'Engagement Attributes', 'gw-schweigerdesign' ),
				'parent_item_colon' => __( 'Parent Engagement:', 'gw-schweigerdesign' ),
				'all_items' => __( 'All Engagements', 'gw-schweigerdesign' ),
				'add_new_item' => __( 'Add New Engagement', 'gw-schweigerdesign' ),
				'new_item' => __( 'New Engagement', 'gw-schweigerdesign' ),
				'edit_item' => __( 'Edit Engagement', 'gw-schweigerdesign' ),
				'update_item' => __( 'Update Engagement', 'gw-schweigerdesign' ),
				'view_item' => __( 'View Engagement', 'gw-schweigerdesign' ),
				'view_items' => __( 'View Engagement', 'gw-schweigerdesign' ),
				'search_items' => __( 'Search Engagement', 'gw-schweigerdesign' ),
				'not_found' => __( 'No engagements found', 'gw-schweigerdesign' ),
				'not_found_in_trash' => __( 'No engagements found in Trash', 'gw-schweigerdesign' )
			),
			'menu_icon' => 'dashicons-money-alt',
			'supports' => array( 'title', 'revisions' ),
			'taxonomies' => array(),
			'rewrite' => array(
				'slug' => _x( 'engagement', 'CPT permalink slug', 'gw-schweigerdesign' ),
				'with_front' => false
			),
			'hierarchical' => false,
			'public' => true,
			'show_ui' => true,
			'show_in_menu' => true,
			'menu_position' => 22,
			'show_in_admin_bar' => true,
			'show_in_nav_menus' => true,
			'show_in_rest' => false,
			'can_export' => true,
			'has_archive' => false,
			'exclude_from_search' => false,
			'publicly_queryable' => false, // true = single view enabled, false = single view disabled
			'capability_type' => 'page'
		)
	);

	// Team
	register_post_type( 'schweiger_team',
		array(
			'label' => _x( 'Team Memebers', 'Post Type Main Label', 'gw-schweigerdesign' ),
			'labels' => array(
				'name' => _x( 'Team Members', 'Post Type General Name', 'gw-schweigerdesign' ),
				'singular_name' => _x( 'Team Member', 'Post Type Singular Name', 'gw-schweigerdesign' ),
				'menu_name' => __( 'Team Members', 'gw-schweigerdesign' ),
				'name_admin_bar' => __( 'Team Members', 'gw-schweigerdesign' ),
				'archives' => __( 'Team Member Archives', 'gw-schweigerdesign' ),
				'attributes' => __( 'Team Member Attributes', 'gw-schweigerdesign' ),
				'parent_item_colon' => __( 'Team Member:', 'gw-schweigerdesign' ),
				'all_items' => __( 'All Team Members', 'gw-schweigerdesign' ),
				'add_new_item' => __( 'Add New Team Member', 'gw-schweigerdesign' ),
				'new_item' => __( 'New Team Member', 'gw-schweigerdesign' ),
				'edit_item' => __( 'Edit Team Member', 'gw-schweigerdesign' ),
				'update_item' => __( 'Update Team Member', 'gw-schweigerdesign' ),
				'view_item' => __( 'View Team Member', 'gw-schweigerdesign' ),
				'view_items' => __( 'View Team Member', 'gw-schweigerdesign' ),
				'search_items' => __( 'Search Team Member', 'gw-schweigerdesign' ),
				'not_found' => __( 'No Team Members found', 'gw-schweigerdesign' ),
				'not_found_in_trash' => __( 'No Team Members found in Trash', 'gw-schweigerdesign' )
			),
			'menu_icon' => 'dashicons-businesswoman',
			'supports' => array( 'title', 'revisions' ),
			'taxonomies' => array(),
			'rewrite' => array(
				'slug' => _x( 'team', 'CPT permalink slug', 'gw-schweigerdesign' ),
				'with_front' => false
			),
			'hierarchical' => false,
			'public' => true,
			'show_ui' => true,
			'show_in_menu' => true,
			'menu_position' => 22,
			'show_in_admin_bar' => true,
			'show_in_nav_menus' => true,
			'show_in_rest' => false,
			'can_export' => true,
			'has_archive' => false,
			'exclude_from_search' => false,
			'publicly_queryable' => false, // true = single view enabled, false = single view disabled
			'capability_type' => 'page'
		)
	);

	// Jobs
	register_post_type( 'schweiger_jobs',
		array(
			'label' => _x( 'Jobs', 'Post Type Main Label', 'gw-schweigerdesign' ),
			'labels' => array(
				'name' => _x( 'Jobs', 'Post Type General Name', 'gw-schweigerdesign' ),
				'singular_name' => _x( 'Job', 'Post Type Singular Name', 'gw-schweigerdesign' ),
				'menu_name' => __( 'Jobs', 'gw-schweigerdesign' ),
				'name_admin_bar' => __( 'Jobs', 'gw-schweigerdesign' ),
				'archives' => __( 'Jobs Archives', 'gw-schweigerdesign' ),
				'attributes' => __( 'Jobs Attributes', 'gw-schweigerdesign' ),
				'parent_item_colon' => __( 'Job:', 'gw-schweigerdesign' ),
				'all_items' => __( 'All Jobs', 'gw-schweigerdesign' ),
				'add_new_item' => __( 'Add New Job', 'gw-schweigerdesign' ),
				'new_item' => __( 'New Job', 'gw-schweigerdesign' ),
				'edit_item' => __( 'Edit Job', 'gw-schweigerdesign' ),
				'update_item' => __( 'Update Job', 'gw-schweigerdesign' ),
				'view_item' => __( 'View Job', 'gw-schweigerdesign' ),
				'view_items' => __( 'View Job', 'gw-schweigerdesign' ),
				'search_items' => __( 'Search Job', 'gw-schweigerdesign' ),
				'not_found' => __( 'No Jobs found', 'gw-schweigerdesign' ),
				'not_found_in_trash' => __( 'No Jobs found in Trash', 'gw-schweigerdesign' )
			),
			'menu_icon' => 'dashicons-hammer',
			'supports' => array( 'title', 'editor', 'revisions' ),
			'taxonomies' => array(),
			'rewrite' => array(
				'slug' => _x( 'jobs', 'CPT permalink slug', 'gw-schweigerdesign' ),
				'with_front' => false
			),
			'hierarchical' => false,
			'public' => true,
			'show_ui' => true,
			'show_in_menu' => true,
			'menu_position' => 23,
			'show_in_admin_bar' => true,
			'show_in_nav_menus' => true,
			'show_in_rest' => true,
			'can_export' => true,
			'has_archive' => false,
			'exclude_from_search' => false,
			'publicly_queryable' => false, // true = single view enabled, false = single view disabled
			'capability_type' => 'page'
		)
	);
}
add_action( 'init', 'gw_register_post_type' );

?>

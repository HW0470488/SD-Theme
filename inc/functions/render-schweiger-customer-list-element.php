<?php
/**
 * Render a customer list element.
 * @param null $post
 */
function render_schweiger_customer_list_element($post = null) {
	if( !$post ) {
		$post_id = get_the_ID();
	} else {
		$post_id = $post->ID;
	}
	$categories = get_the_category($post_id);

	echo '<li class="gw-customer-list-item">';

	// open link
	if($link = get_field("customer_link", $post_id)) {
		echo '<a href="'.esc_attr($link['url']).'" target="'.esc_attr($link['target']).'" title="'.esc_attr($link['title']).'">';
	}

	// image
	if($image = get_field("customer_logo", $post_id)) {
		echo '<img src="'.esc_attr($image['url']).'" alt="'.esc_attr( $post->post_title ).'" />';
	}

	// close link
	if($link) {
		echo '</a>';
	}
	echo '</li>';
}
?>

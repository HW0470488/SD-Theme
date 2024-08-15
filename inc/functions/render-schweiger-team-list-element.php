<?php
/**
 * Render a project list element.
 * @param null $post
 */
function render_schweiger_team_list_element($post = null) {
	if( !$post ) {
		$post_id = get_the_ID();
	} else {
		$post_id = $post->ID;
	}

	?><li><span class="team-image"><?php
	// image
	if($image = get_field("team_bild", $post_id)) {
		echo '<img src="'.$image['url'].'" alt="'.esc_attr(get_the_title($post_id)).'" />';
	}
	if($email = get_field("team-email-adresse", $post_id)) {
		?><a href="mailto:<?php echo esc_attr($email); ?>"><?php echo __("email", "gw-schweigerdesign"); ?></a><?php
	}
	?>
	</span><span class="team-text"><h3 class="gw-underline"><span class="main-head"><?php
	// text
	echo get_the_title($post_id); ?></span>
	<span class="sub-head"><?php echo get_field("team_spalte_1", $post_id); ?></span></h3><?php
	echo get_field("team_spalte_2", $post_id);?>
	</span></li><?php
}
?>

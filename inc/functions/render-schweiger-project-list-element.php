<?php
/**
 * Render a project list element.
 * @param null $post
 * @param array $options allowed parameters: array( "show_date" => true|false, "is_preview" => true|false, "category" => int, "date_display_mode" => array('year', 'month') )
 */
function render_schweiger_project_list_element($post = null, $options = array()) {
	if( !$post ) {
		$post_id = get_the_ID();
	} else {
		$post_id = $post->ID;
	}
	$categories_ids = wp_get_post_terms($post_id, 'category',
		array(
			'fields' => 'ids',
			'orderby' => 'term_order',
		)
	);

	echo '<li class="gw-projects-list-item" data-categories="'.esc_attr( json_encode($categories_ids) ) .'">';
	echo '<a href="'.get_permalink($post_id).'">';

// image
	echo '<span class="gw-project-top">';
	if($teaserImages = get_field("gw-project-teaser-images", $post_id)) {
		$category = @$options["category"];
		$imageRendered = false;
		foreach ($teaserImages as $teaserImage) {
			if(!$imageRendered) {
				if($category && $teaserImage['gw-project-teaser-category-visiblity'] && $teaserImage['gw-project-teaser-category'] == $category) {
					echo wp_get_attachment_image($teaserImage["gw-project-teaser-image"]['ID'], "large");
					$imageRendered = true;
				} elseif(!$teaserImage['gw-project-teaser-category-visiblity']) {
					echo wp_get_attachment_image($teaserImage["gw-project-teaser-image"]['ID'], "large");
					$imageRendered = true;
				}
				// print_r($teaserImage);
			}
		}
	} else {
		if($image = get_field("project_thumb", $post_id)) {
			echo '<img src="'.$image['url'].'" alt="' . esc_attr($post->post_title) . '" />';
		}
	}

//slogan
	$slogan = get_field("gw-project-slogan", $post_id);
	if(!$slogan) {
		// fallback slogan (old project strucutre)
		get_field("collumn2", $post_id);
	}

	echo '<h3 class="gw-title">' . $slogan . '</h3>';
	echo '</span>';

// date | customer
	echo '<h4>';
	if(
        (isset($options['show_date']) && $options['show_date'])
        || !empty($options['date_display_mode'])
    ) {
	    $date = "";
	    $project_date = get_field("project_date", $post_id);
	    if(!is_array($options['date_display_mode']) && $options['show_date']) {
			$date = date("m.Y", strtotime($project_date));
        } elseif($options['date_display_mode']) {
			if(in_array('month', $options['date_display_mode'])) {
				$date = date("m", strtotime($project_date));
			}
			if(in_array('year', $options['date_display_mode'])) {
			    if($date != '') {
			        $date .= ".";
                }
				$date .= date("Y", strtotime($project_date));
			}
        }
	    if($date != '') {
			echo $date . " | ";
        }
	}
	if($customer = get_field("gw-project-customer", $post_id)) {
		echo $customer;
	} else {
		if(isset($options['is_preview']) && $options['is_preview']) {
			echo "[Kundenname nicht vergeben]";
		}
	}
	echo '</h4>';

// text
	?>
	<p class="gw-project-excerpt"><?php
	if($excerpt = get_field("gw-project-excerpt", $post_id)) {
		echo $excerpt;
	} else {
		echo get_the_excerpt($post_id);
	}?>
	</p></a></li><?php
}
?>

<?php
/**
 * An example block template.
 *
 * @var array $block The block settings and attributes.
 * @var string $content The block inner HTML.
 * @var bool $is_preview True during AJAX preview.
 * @var (int|string) $post_id The post ID this block is saved to.
 *
 * @package WordPress
 * @subpackage Project_Name
 * @since 1.0.0
 */

$class_name = 'hw-block-schweiger-jobs';

if ( ! empty( $block['className'] ) ) {

	$class_name .= ' ' . $block['className'];

}

if ( ! empty( $block['align'] ) ) {

	$class_name .= ' align' . $block['align'];

}

// get posts
$entries = get_posts(
	array(
		'post_type' => 'schweiger_jobs',
					'posts_per_page' => '1000',
					'meta_key'		=> 'jobs_sort',
					'orderby'		=> 'meta_value_num',
					'order'			=> 'ASC',	
	)
);

// render entries
if($entries) {?>
    <div class="<?php echo esc_attr( $class_name ); ?>">
        <ul><?php
        foreach ( $entries as $entry ) {
            echo '<li class="jobs-list-item">';
				    
				    echo '<div class="jobs-text">';
				    
				   // thumbnail
				    echo '<div class="jobs-thumb">';
					if(get_field("jobs_thumb")) {
						$image = get_field('jobs_thumb');
						echo '<img class="jobs_thumb-pic" src="'.$image['url'].'" alt="" />';
					}
				    echo '</div>';

					// short text				    
				    echo '<div class="jobs-short-text">'.get_field("jobs_shorttext").'</div>';
				    echo '</div>';

					// voraussetzungen text				    
				    echo '<div class="jobs-voraussetzungen-text jobs-text">
				    	<div class="jobs-voraussetzungen-text-title jobs-title">
				    		Deine Voraussetzungen
				    	</div>
				    	<div class="jobs-voraussetzungen-text-inner jobs-text-inner">
				    	'.get_field("jobs_voraussetzungen").'
				    	</div>
					</div>'
					;

					// qualifikationen text				    
				    echo '<div class="jobs-qualifikationen-text jobs-text">
				    	<div class="jobs-qualifikationen-text-title jobs-title">
				    		Deine Qualifikationen
				    	</div>
				    	<div class="jobs-qualifikationen-text-inner jobs-text-inner">
				    	'.get_field("jobs_qualifikationen").'
				    	</div>
					</div>'
					;

					// unserangebot text				    
				    echo '<div class="jobs-unserangebot-text jobs-text">
				    	<div class="jobs-unserangebot-text-title jobs-title">
				    		Unser Angebot
				    	</div>
				    	<div class="jobs-unserangebot-text-inner jobs-text-inner">
				    	'.get_field("jobs_unserangebot").'
				    	</div>
					</div>'
					;

					// deinebewerbung text				    
				    echo '<div class="jobs-deinebewerbung-text jobs-text">
				    	<div class="jobs-deinebewerbung-text-title jobs-title">
				    		Deine Bewerbung
				    	</div>
				    	<div class="jobs-deinebewerbung-text-inner jobs-text-inner">
				    	'.get_field("jobs_deinebewerbung").'
				    	</div>
					</div>'
					;

				    echo '<div class="clear"></div></li>';
        }?>
        </ul>
    </div><?php
} else if($is_preview) {
    echo __("No entries found.", "gw-schweigerdesign");
}
?>	
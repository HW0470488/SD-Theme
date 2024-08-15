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

$showFilter = get_field( 'gw-schweiger-project-list-filter' );
$max = get_field('gw-schweiger-project-list-show-all-projects') || $showFilter ? -1 : get_field( 'gw-schweiger-project-list-amount' );
$categories = get_field( 'gw-schweiger-project-list-categories' );
$showCategoryDescriptions = get_field( 'gw-schweiger-project-list-show-category' );
$showDate = !(bool)$showCategoryDescriptions;
$dateDisplayMode = get_field( 'gw-schweiger-project-list-datedisplaymode' );
$visibleProjectsAmount = get_field('gw-schweiger-project-list-amount-visible-projects');
$showMoreButton = $max == -1 || ($max > $visibleProjectsAmount);
$showMoreButtonText = get_field('gw-schweiger-project-list-display-all-button-text');

$class_name = 'gw-schweiger-project-list';

if ( ! empty( $block['className'] ) ) {

	$class_name .= ' ' . $block['className'];

}

if ( $showFilter ) {

	$class_name .= ' gw-has-filter-select';

}

if ( $showMoreButton ) {

	$class_name .= ' gw-show-all-projects';

}

if ( ! empty( $block['align'] ) ) {

	$class_name .= ' align' . $block['align'];

}

/**
 * @see render_schweiger_project_list_element() in render-schweiger-project-list-element.php
 */
$renderOptions = array(
    "is_preview" => $is_preview,
    "show_date" => $showDate,
    "date_display_mode" => $dateDisplayMode,
    "category" => null,
);
?>
<div class="<?php echo esc_attr( $class_name ); ?>" data-visible-projects-amount="<?php echo esc_attr(intval($visibleProjectsAmount)); ?>">
<?php
if(!$showCategoryDescriptions) {
    if($categories) {
        // get posts
        $entries = get_posts(
            array(
                'post_type' => 'schweiger_projects',
                'posts_per_page' => (!$is_preview ? $max : ($showMoreButton && $visibleProjectsAmount ? $visibleProjectsAmount : $max)),
                'meta_key'		=> 'project_date',
                'orderby'		=> 'meta_value_num',
                'order'			=> 'DESC',
                'tax_query' => array(
                    'realtion' => 'OR',
                    array(
                        'taxonomy' => 'category',
                        'field' => 'term_id',
                        'terms' => $categories,
                        'include_children' => true
                    ),
                )
            )
        );
    } else {
        // get posts
        $entries = get_posts(
            array(
                'post_type' => 'schweiger_projects',
                'posts_per_page' => (!$is_preview ? $max : ($showMoreButton && $visibleProjectsAmount ? $visibleProjectsAmount : $max)),
                'meta_key'		=> 'project_date',
                'orderby'		=> 'meta_value_num',
                'order'			=> 'DESC',
            )
        );
    }

    // show filter
    if($showFilter) {
		$terms = get_terms(
            array(
                'post_type' => 'schweiger_projects',
                'taxonomy' => 'category',
                'hide_empty' => true,
                'include' => $categories,
            )
        ); ?>
        <select class="gw-project-list-filter">
            <option value=""><?php echo __("Show all", 'gw-schweigerdesign') ?></option>
            <?php
			foreach ($terms as $term) {
			    echo '<option value="'. esc_attr($term->term_id) .'">'. esc_attr($term->name) .'</option>';
            }
        ?></select>
    <?php
		wp_reset_postdata();
    }

    // render entries
    if($entries) {?>
        <div>
            <ul class="gw-project-list"><?php
            foreach ( $entries as $entry ) {
                if(function_exists('render_schweiger_project_list_element')) {
                    render_schweiger_project_list_element($entry, $renderOptions);
                }
            }?>
            </ul>
        </div><?php
		// more button
		if($showMoreButton && $visibleProjectsAmount < count($entries)) : ?>
            <div class="wp-block-buttons is-content-justification-center">
                <div class="wp-block-button is-style-gw-secondary-button">
                    <a class="wp-block-button__link no-border-radius gw-show-all-projects"><?php echo ($showMoreButtonText != '' ? $showMoreButtonText : 'alle Projekte anzeigen' ); ?></a>
                </div>
            </div><?php
		endif;
	} else if($is_preview) {
        echo __("No entries found.", "gw-schweigerdesign");
    }
} else {
    if($categories) {
        foreach($categories as $category) {
            // set category
			$renderOptions["category"] = $category;

            // get posts
            $entries = get_posts(
                array(
                    'post_type' => 'schweiger_projects',
                    'posts_per_page' => (!$is_preview ? $max : ($showMoreButton && $visibleProjectsAmount ? $visibleProjectsAmount : $max)),
                    'meta_key'		=> 'project_date',
                    'orderby'		=> 'meta_value_num',
                    'order'			=> 'DESC',
                    'tax_query' => array(
                        'realtion' => 'OR',
                        array(
                            'taxonomy' => 'category',
                            'field' => 'term_id',
                            'terms' => $category,
                            'include_children' => true
                        ),
                    )
                )
            ); ?>
            <div class="gw-project-category <?php echo esc_attr( $class_name ); ?>">
                <div class="gw-project-category-descripion"><?php
                    $term = get_term_by( 'id', $category, 'category' ); ?>
                    <h3 class="gw-underline"><?php echo $term->name; ?></h3>
                    <?php echo nl2br($term->description); ?>
                </div><?php
                // render entries
                if($entries) {?>
                    <ul class="gw-project-list"><?php
                    foreach ( $entries as $entry ) {
                        if(function_exists('render_schweiger_project_list_element')) {
                            render_schweiger_project_list_element($entry, $renderOptions);
                        }
                    }?>
                    </ul><?php
                } else if($is_preview) {
                    echo __("No entries found.", "gw-schweigerdesign");
                } ?>
            </div><?php

			// more button
			if($showMoreButton && $visibleProjectsAmount < count($entries)) : ?>
                <div class="wp-block-buttons is-content-justification-center">
                    <div class="wp-block-button is-style-gw-secondary-button">
                        <a class="wp-block-button__link no-border-radius gw-show-all-projects"><?php echo ($showMoreButtonText != '' ? $showMoreButtonText : 'alle Projekte anzeigen' ); ?></a>
                    </div>
                </div><?php
			endif;
        }
    } else if($is_preview) {
        echo __("Choose at least one category, please.", "gw-schweigerdesign");
    }
} ?>
</div>

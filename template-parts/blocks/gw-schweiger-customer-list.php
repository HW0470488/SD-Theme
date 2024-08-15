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

$class_name = 'gw-schweiger-customer-list';

if ( ! empty( $block['className'] ) ) {

	$class_name .= ' ' . $block['className'];

}

if ( ! empty( $block['align'] ) ) {

	$class_name .= ' align' . $block['align'];

}

$max = get_field( 'gw-schweiger-customer-list-amount' );

// get posts
$entries = get_posts(
	array(
		'post_type' => 'schweiger_customer',
		'posts_per_page' => $max,
		'orderby'		=> 'title',
		'order'			=> 'ASC',
	)
);

// render entries
if($entries) {?>
    <div class="<?php echo esc_attr( $class_name ); ?>">
        <ul><?php
        foreach ( $entries as $entry ) {
            if(function_exists('render_schweiger_customer_list_element')) {
                render_schweiger_customer_list_element($entry);
            }
        }?>
        </ul>
    </div><?php
} else if($is_preview) {
    echo __("No entries found.", "gw-schweigerdesign");
}
?>

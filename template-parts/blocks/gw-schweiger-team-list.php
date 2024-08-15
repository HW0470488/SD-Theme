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

$teamMembersToBeShown = get_field( 'gw-schweiger-customer-team-member-to-show' );
$max = ( get_field( 'gw-schweiger-customer-team-showall' ) ? -1 :
    ($teamMembersToBeShown ? sizeof($teamMembersToBeShown) :
        get_field( 'gw-schweiger-customer-team-amount' )) );
$fullWidth = get_field( 'gw-schweiger-customer-team-full-width' );

$class_name = 'gw-schweiger-team-list';

if ( ! empty( $block['className'] ) ) {

	$class_name .= ' ' . $block['className'];

}

if($fullWidth) {

	$class_name .= ' gw-full-width';

}

if ( ! empty( $block['align'] ) ) {

	$class_name .= ' align' . $block['align'];

}

// get posts
$entries = get_posts(
	array(
		'post_type' => 'schweiger_team',
		'posts_per_page' => $max,
		'orderby'		=> 'menu_order',
		'order'			=> 'ASC',
        'post__in'      => ($teamMembersToBeShown ? $teamMembersToBeShown : null),
	)
);

// render entries
if($entries) {?>
    <div class="<?php echo esc_attr( $class_name ); ?>">
        <ul><?php
        foreach ( $entries as $entry ) {
            if(function_exists('render_schweiger_team_list_element')) {
                render_schweiger_team_list_element($entry);
            }
        }?>
        </ul>
    </div><?php
} else if($is_preview) {
    echo __("No entries found.", "gw-schweigerdesign");
}
?>

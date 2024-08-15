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

$class_name = 'gw-block-schweiger-heading';

if ( ! empty( $block['className'] ) ) {

	$class_name .= ' ' . $block['className'];

}

if ( ! empty( $block['align'] ) ) {

	$class_name .= ' align' . $block['align'];

}

/**
 * Options
 */
$heading_options = get_field("gw-schweiger-heading-options");
$heading_level = $heading_options['gw-schweiger-heading-level'] ? $heading_options['gw-schweiger-heading-level'] : 1;
$heading_underline = $heading_options['gw-schweiger-heading-underline'] | 0;
$heading_text = nl2br(get_field('gw-schweiger-heading-text', null, false));

/**
 * Add classes depending on chosen options
 */
if($heading_underline) {
	$class_name .= ' gw-underline';
}
?>
<h<?php echo $heading_level; ?> class="<?php echo esc_attr( $class_name ); ?>"><?php
    if($is_preview && !$heading_text) {
		echo __( 'Example Heading', 'gw-schweigerdesign' );
    } else {
		echo $heading_text;
    }
?></h<?php echo $heading_level; ?>>

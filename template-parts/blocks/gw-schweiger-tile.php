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

$class_name = 'gw-block-schweiger-tile';

if ( ! empty( $block['className'] ) ) {

	$class_name .= ' ' . $block['className'];

}

if ( ! empty( $block['align'] ) ) {

	$class_name .= ' align' . $block['align'];

}

/**
 * Options
 */
$link_array = get_field('gw-schweiger-tile-link');

/**
 * Add classes depending on chosen options
 */
?><div class="<?php echo esc_attr( $class_name ); ?>">
    <?php if(!$is_preview && $link_array): ?>
    <a href="<?php echo esc_attr($link_array['url']); ?>" target="<?php echo esc_attr($link_array['target']); ?>">
    <?php endif; ?>
        <h2 class="gw-underline"><?php echo get_field('gw-schweiger-tile-heading'); ?></h2>
        <span><?php echo get_field('gw-schweiger-tile-text'); ?></span>
        <h3><?php echo get_field('gw-schweiger-tile-overlaytext'); ?></h3>
    <?php if(!$is_preview && $link_array): ?>
    </a>
    <?php endif; ?>
</div>

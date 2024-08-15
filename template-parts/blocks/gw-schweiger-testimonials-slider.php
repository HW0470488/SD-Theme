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

$class_name = 'gw-schweiger-testimonials-slider';

if ( ! empty( $block['className'] ) ) {

	$class_name .= ' ' . $block['className'];

}

if ( ! empty( $block['align'] ) ) {

	$class_name .= ' align' . $block['align'];

}

$entries = get_field('gw-schweiger-testimonials');

// render entries
if($entries) {?>
    <div class="<?php echo esc_attr( $class_name ); ?>">
    <!-- Slider main container -->
        <div class="swiper-container">
            <!-- Additional required wrapper -->
            <div class="swiper-wrapper">
                <!-- Slides -->
				<?php
				foreach ( $entries as $entry ) { ?>
                    <div class="swiper-slide s"><?php
					echo apply_filters('the_content', $entry['gw-testimonial-text']); ?>
                    </div><?php
				}?>
            </div>
            <!-- If we need pagination -->
            <div class="swiper-pagination"></div>
        </div>
    </div><?php
} else if($is_preview) {
    echo __("No entries found.", "gw-schweigerdesign");
}
?>

<?php
/**
 * Renders an acf image field
 * @param $acf_image int id of attachment that should be loaded
 * @param string $size wp image size e.g. 'post-thumbnail'
 * @param array $attr
 * @param bool $return
 * @return string
 */
function render_acf_image($acf_image, $size = 'post-thumbnail', $attr = ['class' => 'align-left'], $return = false) {
    $image_html = '';
	if(is_numeric($acf_image)) {
		if ($classes_to_add = get_field('gw_image_icon_overlay_classes', $acf_image)) {
			// Get the attachment ID.
			$classes = 'gw-image-icon-overlay';

			if ($classes_to_add) {

				foreach ($classes_to_add as $class_to_add) {

					$classes .= ' ' . $class_to_add;

				}

			}
			$image_html .= '<div class="' . $classes . '"></div>';
		}
		$image_html .= '<figure class="wp-block-image">';
		$image_html .= wp_get_attachment_image($acf_image, $size, false, $attr);
		$image_html .= '</figure>';

		if($return) {
			return $image_html;
		} else {
			echo $image_html;
		}
	}
}

/**
 * Renders and return an acf image field as html
 * @param $acf_image
 * @param string $size
 * @param array $attr
 * @return string
 */
function get_acf_image($acf_image, $size = 'post-thumbnail', $attr = ['class' => 'align-left']) {
	return render_acf_image($acf_image, $size, $attr, true);
}

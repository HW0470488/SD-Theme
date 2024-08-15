<?php
/**
 * The template for displaying the footer
 *
 * Contains footer content and the closing of the #main and #page div elements.
 *
 * @package WordPress
 * @subpackage Twenty_Twelve
 * @since Twenty Twelve 1.0
 */
?>
	</div><!-- #main .wrapper -->
	<footer id="colophon" role="contentinfo">
		<div id="colophon-inner">
            <div class="gw-footer-top">
				<?php if ( is_active_sidebar( 'footer-1' ) ) : ?>
                    <div class="footer-column">
						<?php dynamic_sidebar( 'footer-1' ); ?>
                    </div>
				<?php endif; ?>
				<?php if ( is_active_sidebar( 'footer-2' ) ) : ?>
                    <div class="footer-column">
						<?php dynamic_sidebar( 'footer-2' ); ?>
                    </div>
				<?php endif; ?>
            </div>
            <div class="gw-footer-bottom">
                <div class="gw-links footer-column">
					<?php if ( is_active_sidebar( 'footer-3' ) ) : ?>
						<?php dynamic_sidebar( 'footer-3' ); ?>
					<?php endif; ?>
                </div>
                <div class="gw-copyright footer-column">
                    <img src="<?php echo get_stylesheet_directory_uri(); ?>/images/logo_schweigerdesign_bildmarke.svg" alt="Schweiger Design" /> Agentur seit 1996 | &copy; <?php echo date("Y"); ?>
                </div>
			</div>
		</div>
	</footer><!-- #colophon -->
</div><!-- #page -->

<?php wp_footer(); ?>
</body>
</html>

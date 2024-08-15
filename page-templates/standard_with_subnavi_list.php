<?php
/**
 * Template Name: Standard mit Subnavi
 */
get_header(); ?>
	<div id="primary" class="site-content">
		<div id="content" role="main">
			
			<?php if ($post->post_parent) { ?>
			<div class="page-subnavi">
				<ul>
				<?php
					wp_list_pages( array('child_of' => $post->post_parent, 'title_li' => '' ) );
				?>
				</ul>
			</div>
			<?php } ?>
			
			<?php while ( have_posts() ) : the_post(); ?>
				<?php get_template_part( 'content', 'page' ); ?>
			<?php endwhile; // end of the loop. ?>

		</div><!-- #content -->
	</div><!-- #primary -->
<?php get_footer(); ?>
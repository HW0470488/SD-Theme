<?php
/**
 * Template Name: Kundenliste
 */

get_header(); ?>
	<div id="primary" class="site-content">
		<div id="content" role="main" class="homepage">
			<?php while ( have_posts() ) : the_post(); ?>
				<?php get_template_part( 'content', 'page' ); ?>
			<?php endwhile; // end of the loop. ?>

			<ul class="customer-list">
				<?php
				$args = array( 'post_type' => 'schweiger_customer', 'posts_per_page' => '1000' );
				$loop = new WP_Query( $args );
				while ( $loop->have_posts() ) : $loop->the_post();
				    echo '<li class="'.trim($classes, $separator).' customer-list-item">';
				    
				    echo '<div class="customer-logo">';
					if(get_field("customer_logo")) {
						$image = get_field('customer_logo');
						echo '<img class="customer-logo" src="'.$image['url'].'" alt="" />';
					}
				    echo '</div>';

				    echo '<div class="customer-content">';
					
					// head
					echo '<h3>';
					the_title();
					echo '</h3>';
					
					// text
					echo '<div class="text">';
					echo get_field("customer_short_text");
				    echo '</div>'; // text

				    echo '</div>'; // customer-content

				    echo '<div class="clear"></div></li>';
				endwhile;
				?>
			</ul><!-- end .freelancer -->
		</div><!-- #content -->
	</div><!-- #primary -->
<?php get_footer(); ?>

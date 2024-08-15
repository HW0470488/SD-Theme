<?php
/**
 * Template Name: Jobsseite
 */

get_header(); ?>
	<div id="primary" class="site-content">
		<div id="content" role="main">
			<h1>Freie Stellen in der Agentur Schweiger Design</h1>
			<p><strong>Wir bieten coolen Spirit und suchen Teamplayer</strong></p>
			<?php while ( have_posts() ) : the_post(); ?>
				<?php get_template_part( 'content', 'page' ); ?>
			<?php endwhile; // end of the loop. ?>

			<ul class="jobs-list jobs-list-page">
				<?php
				$args = array( 
					'post_type' => 'schweiger_jobs',
					'posts_per_page' => '1000',
					'meta_key'		=> 'jobs_sort',
					'orderby'		=> 'meta_value_num',
					'order'			=> 'ASC',					
				);
				
				$loop = new WP_Query( $args );
				while ( $loop->have_posts() ) : $loop->the_post();
				    echo '<li class="jobs-list-item">';				    
				    echo '<div class="jobs-text">';
				    //titel
					echo'<h2>'.get_field("jobs_bezeichnung").'</h2>';
				   // thumbnail
				    echo '<div class="jobs-thumb">';
					if(get_field("jobs_thumb")) {
						$image = get_field('jobs_thumb');
						echo '<img class="jobs_thumb-pic" src="'.$image['url'].'" alt="" />';
					}
				    echo '</div>';

					// short text				    
				    echo '<div class="jobs-short-text">'.get_field("jobs_shorttext").'</div>';
				    echo '</div>';

					// voraussetzungen text				    
				    echo '<div class="jobs-voraussetzungen-text jobs-text">
				    	<div class="jobs-voraussetzungen-text-title jobs-title">
				    		Deine Voraussetzungen
				    	</div>
				    	<div class="jobs-voraussetzungen-text-inner jobs-text-inner">
				    	'.get_field("jobs_voraussetzungen").'
				    	</div>
					</div>'
					;

					// qualifikationen text				    
				    echo '<div class="jobs-qualifikationen-text jobs-text">
				    	<div class="jobs-qualifikationen-text-title jobs-title">
				    		Deine Qualifikationen
				    	</div>
				    	<div class="jobs-qualifikationen-text-inner jobs-text-inner">
				    	'.get_field("jobs_qualifikationen").'
				    	</div>
					</div>'
					;

					// unserangebot text				    
				    echo '<div class="jobs-unserangebot-text jobs-text">
				    	<div class="jobs-unserangebot-text-title jobs-title">
				    		Unser Angebot
				    	</div>
				    	<div class="jobs-unserangebot-text-inner jobs-text-inner">
				    	'.get_field("jobs_unserangebot").'
				    	</div>
					</div>'
					;

					// deinebewerbung text				    
				    echo '<div class="jobs-deinebewerbung-text jobs-text">
				    	<div class="jobs-deinebewerbung-text-title jobs-title">
				    		Deine Bewerbung
				    	</div>
				    	<div class="jobs-deinebewerbung-text-inner jobs-text-inner">
				    	'.get_field("jobs_deinebewerbung").'
				    	</div>
					</div>'
					;

				    echo '<div class="clear"></div></li>';
				endwhile;
				?>
			</ul><!-- end .jobs-list -->
		</div><!-- #content -->
	</div><!-- #primary -->
<?php get_footer(); ?>

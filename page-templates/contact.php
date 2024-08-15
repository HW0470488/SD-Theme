<?php
/**
 * Template Name: Kontakt
 */

get_header(); ?>
	<div id="primary" class="site-content">
		<div id="content" role="main">

			<?php while ( have_posts() ) : the_post(); ?>
				<?php get_template_part( 'content', 'page' ); ?>
			<?php endwhile; // end of the loop. ?>

			<div class="contact-content-wrapper">
				<div class="contact-pictures">
					<?php
						if(get_field("contact_bild")) {
							$image = get_field('contact_bild');
							echo '<img class="jobs_thumb-pic" src="'.$image['url'].'" alt="" /><br /><br />';
						}
						

						if(get_field("contact_map")) {
							$location = get_field("contact_map");
						?>
							<div id="map_contact"></div>
							<!--<script src='http://maps.googleapis.com/maps/api/js?sensor=false' type='text/javascript'></script>-->
							
							<script type="text/javascript">
								var light_monochrome = [{"featureType":"water","elementType":"all","stylers":[{"hue":"#e9ebed"},{"saturation":-78},{"lightness":67},{"visibility":"simplified"}]},{"featureType":"landscape","elementType":"all","stylers":[{"hue":"#ffffff"},{"saturation":-100},{"lightness":100},{"visibility":"simplified"}]},{"featureType":"road","elementType":"geometry","stylers":[{"hue":"#bbc0c4"},{"saturation":-93},{"lightness":31},{"visibility":"simplified"}]},{"featureType":"poi","elementType":"all","stylers":[{"hue":"#ffffff"},{"saturation":-100},{"lightness":100},{"visibility":"off"}]},{"featureType":"road.local","elementType":"geometry","stylers":[{"hue":"#e9ebed"},{"saturation":-90},{"lightness":-8},{"visibility":"simplified"}]},{"featureType":"transit","elementType":"all","stylers":[{"hue":"#e9ebed"},{"saturation":10},{"lightness":69},{"visibility":"on"}]},{"featureType":"administrative.locality","elementType":"all","stylers":[{"hue":"#2c2e33"},{"saturation":7},{"lightness":19},{"visibility":"on"}]},{"featureType":"road","elementType":"labels","stylers":[{"hue":"#bbc0c4"},{"saturation":-93},{"lightness":31},{"visibility":"on"}]},{"featureType":"road.arterial","elementType":"labels","stylers":[{"hue":"#bbc0c4"},{"saturation":-93},{"lightness":-2},{"visibility":"simplified"}]}];
								var nicestyles = [
								  {
								    stylers: [
								      { saturation: -100 }
								    ]
								   }
								];

								function load() {
								var lat = <?php echo $location['lat']; ?>;
								var lng = <?php echo $location['lng']; ?>;

							// coordinates to latLng
								var latlng = new google.maps.LatLng(lat, lng);

							// map Options
								var myOptions = {
									zoom : 15,
									center : latlng,
									mapTypeId : google.maps.MapTypeId.ROADMAP,
									panControl: false,
									zoomControl: false,
									mapTypeControl: false,
									scaleControl: false,
									streetViewControl: false,
									overviewMapControl: false,
									styles : nicestyles
							   };

							//draw a map
								var map_contact = new google.maps.Map(document.getElementById("map_contact"), myOptions);
								var markerImage = new google.maps.MarkerImage(
									'<?php echo get_stylesheet_directory_uri(); ?>/images/marker_SchweigerDesign.png',
					                new google.maps.Size(130, 29),
					                new google.maps.Point(0, 0),
					                new google.maps.Point(8, 28)
								);
								var marker = new google.maps.Marker({
								position: map_contact.getCenter(),
								icon: markerImage,
								map: map_contact
							   });
							}
							// call the function
							   load();
							//]]>
							</script>
						<?php
						}
					?>
					
				</div>
				
				<div class="contact-content">
					<div class="contact-content-inner">
						<?php
							if(get_field("contact_address")) {
								echo '<div class="contact-address">';
								echo get_field("contact_address");
								echo '</div><!-- .contact-address -->';
							}
						?>
						<?php
							if(get_field("contact_kernarbeitszeiten")) {
								echo '<div class="contact-arbeitszeiten">';
								echo get_field("contact_kernarbeitszeiten");
								echo '</div><!-- .contact-arbeitszeiten -->';
							}
						?>
						<div class="clear"></div>
					</div><!-- .contact-content-inner -->
					<?php
						if(get_field("contact_so_erreichen_sie_uns")) {
							echo '<div class="contact-content-inner">';
							echo get_field("contact_so_erreichen_sie_uns");
							echo '</div><!-- .contact-content-inner -->';
						}
					?>
					<?php
						if(get_field("contact_form")) {
							echo '<div class="contact-content-inner">';
							echo get_field("contact_form");
							echo '</div><!-- .contact-content-inner -->';
						}
					?>
					
				</div>
				<div class="clear"></div>
			</div>
		</div><!-- #content -->
	</div><!-- #primary -->
<?php get_footer(); ?>
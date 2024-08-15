<?php
/**
 * The default template for displaying content
 *
 * Used for both single and index/archive/search.
 *
 * @package WordPress
 * @subpackage Twenty_Twelve
 * @since Twenty Twelve 1.0
 */

/**
 * Get standard content here so that we can manipulate it if this is needed
 */
$standardContentHtml = apply_filters("the_content", get_the_content( __( 'Continue reading <span class="meta-nav">&rarr;</span>', 'twentytwelve' ) ));

if(function_exists('get_field')) {

	/**
	 * Handle Teaser Images of projects
	 */
// teaser images to display as tiles
	$teaserImagesHtml = "";
	if ($projectDetailImages = get_field("gw-project-detail-images")) {
		$teaserImagesHtml .= '<div class="gw-project-detail-teaser-images">';
		foreach ($projectDetailImages as $detailImage) {
			$teaserImagesHtml .= '<div class="gw-project-detail-teaser-image-wrapper">';
			$teaserImagesHtml .= '<div class="gw-project-detail-teaser-image">';
			$teaserImagesHtml .= wp_get_attachment_image($detailImage["gw-project-detail-image"]['ID'], "large");
			$teaserImagesHtml .= '</div>';
			$teaserImagesHtml .= '<div class="gw-project-detail-teaser-image-caption">' . $detailImage['gw-project-detail-image-caption'] . '</div>';
			$teaserImagesHtml .= '</div>';
		}
		$teaserImagesHtml .= '</div>';
	}
// merge teaser images to first column of standard content
	if ($teaserImagesHtml) {
		$htmlDocument = new DOMDocument();
		$htmlDocument->loadHTML(mb_convert_encoding($standardContentHtml, 'HTML-ENTITIES', 'UTF-8'));
		$teaserImagesDocument = new DOMDocument();
		$teaserImagesDocument->loadHTML(mb_convert_encoding($teaserImagesHtml, 'HTML-ENTITIES', 'UTF-8'));
		$importedNode = $htmlDocument->importNode($teaserImagesDocument->documentElement, true);
		$divs = $htmlDocument->getElementsByTagName("div");
		$targetDiv = null;
		if (($targetDiv = $divs->item(1)) || ($targetDiv = $divs->item(0))) {
			$targetDiv->insertBefore($importedNode); // <-- this should be the first column of an project TODO: this has to be implented more accurate if needed
		}
		$standardContentHtml = $htmlDocument->saveHTML();
	}

	/**
	 * Handle Project Date
	 */
	if ($projectDate = get_field("project_date")) {
        $projectDateHtml = '<div class="gw-project-date">' . date("m.Y", strtotime($projectDate)) . '</div>';
		$htmlDocument = new DOMDocument();
		$htmlDocument->loadHTML(mb_convert_encoding($standardContentHtml, 'HTML-ENTITIES', 'UTF-8'));
		$projectDateDocument = new DOMDocument();
		$projectDateDocument->loadHTML(mb_convert_encoding($projectDateHtml, 'HTML-ENTITIES', 'UTF-8'));
		$importedNode = $htmlDocument->importNode($projectDateDocument->documentElement, true);
		$divs = $htmlDocument->getElementsByTagName("div");
		$targetDiv = null;
		if (($targetDiv = $divs->item(1)) || ($targetDiv = $divs->item(0))) {
			$targetDiv->insertBefore($importedNode); // <-- this should be the first column of an project TODO: this has to be implented more accurate if needed
		}
		$standardContentHtml = $htmlDocument->saveHTML();

	}
}
?>
<article id="post-<?php the_ID(); ?>" <?php post_class(); ?>>
    <div class="entry-content">
        <?php echo $standardContentHtml; ?>
        <?php
        wp_link_pages(
            array(
                'before' => '<div class="page-links">' . __( 'Pages:', 'twentytwelve' ),
                'after'  => '</div>',
            )
        );
		?>
    </div><!-- .entry-content -->
</article><!-- #post -->

<?php /*
// alter Inhaltsbereich

	<article id="post-<?php the_ID(); ?>" <?php post_class(); ?> style="border: 4px solid red;">
		<header class="entry-header">
            <h1 style="color: red;font-weight: bold;">ALTE INHALTS-STRUKTUR (wird vor Livegang entfernt)</h1>
			<?php
				if( get_field("collumn2") && !get_field("collumn3") ) {
						if(get_field("ueberschrift2")) {
							echo '<h1 class="collumns2-head">'.get_field("ueberschrift2").'</h1>';
						}
						if(get_field("ueberschrift1")) {
							echo '<h2 class="collumns2-head">'.(get_field("project_date")?date("m.Y", strtotime(get_field("project_date")))." | ":"") . get_field("ueberschrift1").'</h2>';
						}
				} else {
						if(get_field("ueberschrift1")) {
							echo '<h2>'.(get_field("project_date")?date("m.Y", strtotime(get_field("project_date")))." | ":"") . get_field("ueberschrift1").'</h2>';
						}
						if(get_field("ueberschrift2")) {
							echo '<h1>'.get_field("ueberschrift2").'</h1>';
						}
				}
			?>
			<div class="clear"></div>
		</header><!-- .entry-header -->
		<div class="clear"></div>

		<?php
			// Responsive Inhalte
			if ( ! post_password_required() ) {
				if( $inhalte = get_field('seiteninhalt') ) {
					echo '<div class="content-responsive-wrapper">';

					foreach( $inhalte as $inhalts_element) {

						// responsive Texte
						if( $inhalts_element['acf_fc_layout'] == 'text_responsive' ) {
						?>
							<div class="content-responsive">
						<?php
							echo apply_filters('the_content', $inhalts_element['text']);
						?>
							</div>
						<?php
						}
					}
					echo '</div>'; // .content-responsive-wrapper
					echo '<div class="clear"></div>';
				}
			}

			// Spalten abfragen
			if(get_field("collumn2") && get_field("collumn3")) {
				?>
				<div class="entry-content collumns3">
					<div class="collumn1">
						<?php if(get_field("ueberschrift_spalte_1")) {
							echo "<strong>".get_field("ueberschrift_spalte_1")."</strong><br />";
						}  ?>
						<?php the_content( __( 'Continue reading <span class="meta-nav">&rarr;</span>', 'twentytwelve' ) ); ?>
					</div>
					<div class="collumn2">
						<?php if(get_field("ueberschrift_spalte_2")) {
							echo "<strong>".get_field("ueberschrift_spalte_2")."</strong><br />";
						}  ?>
						<?=get_field("collumn2")?>
					</div>
					<div class="collumn3">
						<?php if(get_field("ueberschrift_spalte_3")) {
							echo "<strong>".get_field("ueberschrift_spalte_3")."</strong><br />";
						}  ?>
						<?=get_field("collumn3")?>
					</div>
				</div><!-- .entry-content.collumns3 -->
				<?php
			} elseif(get_field("collumn2") && !get_field("collumn3")) {
				?>
				<div class="entry-content collumns2">
					<div class="collumn1">
						<?php the_content( __( 'Continue reading <span class="meta-nav">&rarr;</span>', 'twentytwelve' ) ); ?>
					</div>
					<div class="collumn2">
						<?=get_field("collumn2")?>
					</div>
				</div><!-- .entry-content.collumns2 -->
				<?php
			}

			echo '<div class="clear"></div>';

			if(get_field("flexible_content")) {
				foreach(get_field("flexible_content") as $content_element) {
					echo '<h3 class="flexible-content-left">'.$content_element['zeile_ueberschrift'].'</h3>';
					echo '<div class="flexible-content-right">'.$content_element['zeile_text'].'</div>';
					echo '<div class="clear"></div>';
				}
			}



			if(get_field("bild_1")) {
				$image = get_field('bild_1');
				echo '<img class="project-pic" src="'.$image['url'].'" alt="" />';
			}
			if(get_field("bild_2")) {
				$image = get_field('bild_2');
				echo '<img class="project-pic" src="'.$image['url'].'" alt="" />';
			}
			if(get_field("bild_3")) {
				$image = get_field('bild_3');
				echo '<img class="project-pic" src="'.$image['url'].'" alt="" />';
			}
			if(get_field("bild_4")) {
				$image = get_field('bild_4');
				echo '<img class="project-pic" src="'.$image['url'].'" alt="" />';
			}
			if(get_field("bild_5")) {
				$image = get_field('bild_5');
				echo '<img class="project-pic" src="'.$image['url'].'" alt="" />';
			}

		?>

        <?php wp_link_pages( array( 'before' => '<div class="page-links">' . __( 'Pages:', 'twentytwelve' ), 'after' => '</div>' ) ); ?>
		<div class="clear"></div>
	</article><!-- #post -->
*/ ?>

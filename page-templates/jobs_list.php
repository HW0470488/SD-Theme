<?php
/**
 * Template Name: Jobsseite
 */

get_header(); ?>
<div id="primary" class="site-content gw-job-page">
    <div id="content" role="main">
        <article>
            <div class="entry-content">
                <h1>Freie Stellen in der Agentur Schweiger Design</h1>
                <p><strong>Wir bieten coolen Spirit und suchen Teamplayer</strong></p>
				<?php while (have_posts()) : the_post(); ?>
					<?php // get_template_part('content', 'page'); ?>
				<?php endwhile; // end of the loop. ?>
                <div class="wp-block-group">
                    <div class="wp-block-group__inner-container is-layout-constrained wp-block-group-is-layout-constrained">
                        <ul class="jobs-list jobs-list-page">
							<?php
							$args = array(
								'post_type' => 'schweiger_jobs',
								'posts_per_page' => '1000',
								'meta_key' => 'jobs_sort',
								'orderby' => 'meta_value_num',
								'order' => 'ASC',
							);

							$loop = new WP_Query($args);
							while ($loop->have_posts()) : $loop->the_post();

								// Job post data
								$job_title = get_field("job_bezeichnung");
								$job_shorttext = get_field("jobs_shorttext");

								// Sammle die gesamte Jobbeschreibung
								$job_description = '<h2>' . get_field("job_bezeichnung") . '</h2>';
								if (get_field("jobs_thumb")) {
									$image = get_field('jobs_thumb');
									$job_description .= '<div class="jobs-thumb"><img class="jobs_thumb-pic" src="' . $image['url'] . '" alt="" /></div>';
								}
								$job_description .= '<div class="jobs-short-text">' . get_field("jobs_shorttext") . '</div>';
								$job_description .= '<div class="jobs-voraussetzungen-text"><div class="jobs-voraussetzungen-text-title">Deine Voraussetzungen</div><div class="jobs-voraussetzungen-text-inner">' . get_field("jobs_voraussetzungen") . '</div></div>';
								$job_description .= '<div class="jobs-qualifikationen-text"><div class="jobs-qualifikationen-text-title">Deine Qualifikationen</div><div class="jobs-qualifikationen-text-inner">' . get_field("jobs_qualifikationen") . '</div></div>';
								$job_description .= '<div class="jobs-unserangebot-text"><div class="jobs-unserangebot-text-title">Unser Angebot</div><div class="jobs-unserangebot-text-inner">' . get_field("jobs_unserangebot") . '</div></div>';
								$job_description .= '<div class="jobs-deinebewerbung-text"><div class="jobs-deinebewerbung-text-title">Deine Bewerbung</div><div class="jobs-deinebewerbung-text-inner">' . get_field("jobs_deinebewerbung") . '</div></div>';

								// Post-Datum und Ablaufdatum
								$date_posted = get_the_date('Y-m-d'); // Post date
								$valid_through = date('Y-m-d', strtotime($date_posted . ' + 3 months')); // Valid for 3 months

								echo '<li class="jobs-list-item">';
								echo '<div class="jobs-text">'; ?>

                                <script type="application/ld+json">
                                    {
										"@context" : "https://schema.org/",
										"@type" : "JobPosting",
										"title" : "<?php echo esc_attr(wp_strip_all_tags($job_title)); ?>",
                                        "description" : "<?php echo esc_attr($job_description); ?>",
                                        "identifier": {
                                            "@type": "PropertyValue",
                                            "name": "Schweiger Design Potsdam",
                                            "value": "schweiger-design-job-<?php echo esc_attr($post->ID); ?>"
                                        },
                                        "datePosted" : "<?php echo $date_posted; ?>",
                                        "validThrough" : "<?php echo $valid_through; ?>",
                                        "employmentType" : "contract",
                                        "hiringOrganization" : {
                                            "@type" : "Organization",
                                            "name" : "Schweiger Design",
                                            "sameAs" : "https://www.schweiger-design.de",
                                            "logo" : "https://www.schweiger-design.de/wp-content/themes/schweigerdesign/images/logo_schweigerdesign.svg"
                                        },
                                        "jobLocation": {
                                            "@type": "Place",
                                            "address": {
                                                "@type": "PostalAddress",
                                                "streetAddress": "Steinstraße 44C",
                                                "addressLocality": "Potsdam",
                                                "addressRegion": "Brandenburg",
                                                "postalCode": "14480",
                                                "addressCountry": "DE"
                                            }
                                        }
                                    }
                                </script>

								<?php
								//titel
								echo '<h2>' . get_field("job_bezeichnung") . '</h2>';
								// thumbnail
								echo '<div class="jobs-thumb">';
								if (get_field("jobs_thumb")) {
									$image = get_field('jobs_thumb');
									echo '<img class="jobs_thumb-pic" src="' . $image['url'] . '" alt="" />';
								}
								echo '</div>';

								// short text
								echo '<div class="jobs-short-text">' . get_field("jobs_shorttext") . '</div>';
								echo '</div>';

								// voraussetzungen text
								echo '<div class="jobs-voraussetzungen-text jobs-text">
                                    <div class="jobs-voraussetzungen-text-title jobs-title">
                                        Deine Voraussetzungen
                                    </div>
                                    <div class="jobs-voraussetzungen-text-inner jobs-text-inner">
                                    ' . get_field("jobs_voraussetzungen") . '
                                    </div>
                                </div>';

								// qualifikationen text
								echo '<div class="jobs-qualifikationen-text jobs-text">
                                    <div class="jobs-qualifikationen-text-title jobs-title">
                                        Deine Qualifikationen
                                    </div>
                                    <div class="jobs-qualifikationen-text-inner jobs-text-inner">
                                    ' . get_field("jobs_qualifikationen") . '
                                    </div>
                                </div>';

								// unserangebot text
								echo '<div class="jobs-unserangebot-text jobs-text">
                                    <div class="jobs-unserangebot-text-title jobs-title">
                                        Unser Angebot
                                    </div>
                                    <div class="jobs-unserangebot-text-inner jobs-text-inner">
                                    ' . get_field("jobs_unserangebot") . '
                                    </div>
                                </div>';

								// deinebewerbung text
								echo '<div class="jobs-deinebewerbung-text jobs-text">
                                    <div class="jobs-deinebewerbung-text-title jobs-title">
                                        Deine Bewerbung
                                    </div>
                                    <div class="jobs-deinebewerbung-text-inner jobs-text-inner">
                                    ' . get_field("jobs_deinebewerbung") . '
                                    </div>
                                </div>';

								echo '<div class="clear"></div></li>';
							endwhile;
							?>
                        </ul><!-- end .jobs-list -->
                    </div>
                </div>
            </div><!-- end .entry-content -->
        </article>
    </div><!-- #content -->
</div><!-- #primary -->
<?php get_footer(); ?>

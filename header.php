<?php
/**
 * The Header template for our theme
 *
 * Displays all of the <head> section and everything up till <div id="main">
 *
 * @package WordPress
 * @subpackage Twenty_Twelve
 * @since Twenty Twelve 1.0
 */
?><!DOCTYPE html>
<!--[if IE 7]>
<html class="ie ie7" <?php language_attributes(); ?>>
<![endif]-->
<!--[if IE 8]>
<html class="ie ie8" <?php language_attributes(); ?>>
<![endif]-->
<!--[if !(IE 7) & !(IE 8)]><!-->
<html <?php language_attributes(); ?>>
<!--<![endif]-->
    <head>
        <meta charset="<?php bloginfo( 'charset' ); ?>" />
        <meta name="viewport" content="width=device-width" />
        <title><?php wp_title( '|', true, 'right' ); ?></title>
        <link rel="profile" href="https://gmpg.org/xfn/11" />
        <link rel="pingback" href="<?php echo esc_url( get_bloginfo( 'pingback_url' ) ); ?>">
        <?php // Loads HTML5 JavaScript file to add support for HTML5 elements in older IE versions. ?>
        <!--[if lt IE 9]>
        <script src="<?php echo get_template_directory_uri(); ?>/js/html5.js?ver=3.7.0" type="text/javascript"></script>
        <![endif]-->
        <?php wp_head(); ?>
    </head>
    <body <?php body_class(); ?>>
	<?php wp_body_open(); ?>
    <div id="page" class="hfeed site">
        <div id="masthead-wrapper">
            <header id="masthead" class="site-header" role="banner">
                <div id="navigation-indicator-box">
                    <div id="navigation-indicator"></div><!-- #navigation-indicator -->
                </div><!-- #navigation-indicator-box -->

                <a class="homepage-logo" href="<?php echo esc_url( home_url( '/' ) ); ?>" title="<?php echo esc_attr( get_bloginfo( 'name', 'display' ) ); ?>" rel="home">

                    <img
                        src="<?php echo get_stylesheet_directory_uri(); ?>/images/logo_schweigerdesign.svg"
                        alt="<?php bloginfo( 'name' ); ?>" />
                </a><!-- .homepage-logo -->

                <nav id="site-navigation" class="main-navigation hide-mobile" role="navigation">
                    <h3 class="menu-toggle"><?php _e( 'Menu', 'twentytwelve' ); ?></h3>
                    <a class="assistive-text" href="#content" title="<?php esc_attr_e( 'Skip to content', 'twentytwelve' ); ?>"><?php _e( 'Skip to content', 'twentytwelve' ); ?></a>
                    <?php wp_nav_menu( array( 'theme_location' => 'primary', 'menu_class' => 'nav-menu' ) ); ?>
                </nav><!-- #site-navigation -->


            </header><!-- #masthead -->
            <div id="mobile-navigation" class="mobile-navigation hide-desktop">
                <nav id="mobile-site-navigation" class="main-navigation" role="navigation">
					<?php wp_nav_menu( array( 'theme_location' => 'mobile', 'menu_class' => 'nav-menu' ) ); ?>
                </nav><!-- #site-navigation -->
            </div>
            <div class="mobile-navigation-trigger hide-desktop"><a href="#mobile-navigation" class="gw-mobile-navigation-anchor"><span class="mobile-navigation-icon"></span></a></div>
        </div>

    <?php
	/**
	 * Projekt-Detailseiten-Navigation zwischen den Projekten (vor und zurück)
	 */

        // backup original post
        $post_original = $post;

        $current_post_id = $post->ID;
        $post_array = null;
        $next_post = null;
        $prev_post = null;
        if($post->post_type == 'schweiger_projects'){
            $args = array(
                'post_type' => 'schweiger_projects',
                'posts_per_page' => '1000',
                'meta_key'		=> 'project_date',
                'orderby'		=> 'meta_value_num',
                'order'			=> 'DESC',
            );
            $loop = new WP_Query( $args );
            while ( $loop->have_posts() ) : $loop->the_post();
                $post_array[] = get_field("project_date") .'|'. $post->ID;
            endwhile;
            arsort($post_array);

            for($i=0 ; $i < sizeof($post_array)-1 ; $i++) {
                if(substr($post_array[$i], strpos($post_array[$i],'|')+1) == $current_post_id) {
                    if($i > 0) {
                        $prev_post = substr( $post_array[$i-1], strpos($post_array[$i-1],'|')+1 );
                    }
                    $next_post = substr( $post_array[$i+1], strpos($post_array[$i+1],'|')+1 );
                }
            }
        }

        // restore original post
        $post = $post_original;
    ?>
            <?php
            if(get_field('kopfbild_art') == 'kopfbild') {
                // Vollflächiges Kopfbild
                if(get_field("kopfbild") && get_field('kopfbild_vollflaechig')) {
                    ?>
                    <div id="head-picture" class="fullwidth">
                        <?php
                            if($prev_post) {
                                echo '<a class="prev-link" href="'.get_permalink( $prev_post ).'"></a>';
                            }
                        ?>
                        <?php
                            $image = get_field('kopfbild');
                            $image_mobile = get_field('kopfbild_mobile');
                            echo '<span class="header-picture-box'.($image_mobile?' hide-mobile':'').'" style="background-image: url('.$image['url'].')">';
                            if(get_field('mobil_pfeil_runter')) {
                                echo '<a href="#hauptinhalt" class="head-arrow-down-link"></a>';
                            }
                            echo '</span>';

                            if($image_mobile) {
                                echo '<span class="header-picture-box hide-desktop" style="background-image: url('.$image_mobile['url'].')">';

                                if(get_field('mobil_pfeil_runter')) {
                                    echo '<a href="#hauptinhalt" class="head-arrow-down-link"></a>';
                                }
                                echo '</span>';
                            }
                        ?>
                        <?php
                            if($next_post) {
                                echo '<a class="next-link" href="'.get_permalink( $next_post ).'"></a>';
                            }
                        ?>
                    </div><!-- .head-picture -->
                    <?php
                }
            } elseif(get_field('kopfbild_art') == 'video_self_hosted') { ?>
                <div id="head-picture" class="fullwidth video">
                    <?php
                    $video_file = get_field('video_datei');
                    $video_file_mobile = get_field('video_datei_mobile');
                    $video_file_mobile_2 = get_field('video_datei_mobile_2');
                    $video_vorschaubild = get_field('video_vorschaubild');
                    ?>
                    <div class="videobg">
                        <video width="<?php echo esc_attr($video_file['width']); ?>"  height="<?php echo esc_attr($video_file['height']); ?>" autoplay loop muted poster="<?php echo esc_attr($video_vorschaubild['url']); ?>" playsinline>
                            <source src="<?php echo esc_attr($video_file['url']); ?>" type="video/mp4" media="(min-width:768px)">
                            <source src="<?php echo esc_attr($video_file_mobile['url']); ?>" type="video/mp4" media="(max-width:767px)">
                            <source src="<?php echo esc_attr($video_file_mobile_2['url']); ?>" type="video/m4v" media="(max-width:767px)">
                        </video>
                    </div>
                </div><?php
		    } elseif(get_field('kopfbild_art') == 'video') {
                // Video
                $video_einbettcode = get_field('video_einbettcode');
                $video_einbettcode_typ = get_field('video_einbettcode_typ');

                if($video_einbettcode_typ == 'youtube') {
                    echo '<div id="head-picture" class="fullwidth video" data-video-embed-code="'.$video_einbettcode.'"></div>';
                } elseif($video_einbettcode_typ == 'vimeo') {
                ?>
                    <div id="head-picture" class="fullwidth video">
                        <?php
                            $image_mobile = get_field('kopfbild_mobile_video');
                        ?>
                        <div class="videobg <?php if($image_mobile)echo' hide-mobile';?>">
                          <div class="videobg-width">
                            <div class="videobg-aspect">
                              <div class="videobg-make-height">
                                <div class="videobg-hide-controls">
                                    <?php
                                    echo '<iframe
                                        id="header-video"
                                        src="https://player.vimeo.com/video/' . trim($video_einbettcode) . '?background=1&loop=1"
                                        frameborder="0" 
                                        webkitallowfullscreen mozallowfullscreen allowfullscreen
                                        allow="autoplay; encrypted-media"></iframe>';
                                    ?>
                                    <script src="https://player.vimeo.com/api/player.js"></script>
                                    <script>
                                                    var iframe = document.querySelector('iframe');
                                                    var player = new Vimeo.Player(iframe, {
                                                        background: true
                                                    });

                                                    player.setVolume(0);
                                                    player.play();

                                        // globale Variablen initialisieren
                                        var touch_flag = false;

                                        // IIFE - Immediately Invoked Function Expression
                                        (function(gw) {
                                            // The global jQuery object is passed as a parameter
                                            gw(window.jQuery, window, document);
                                        }(function($, window, document) {
                                            // The $ is now locally scoped
                                            // Listen for the jQuery ready event on the document
                                            $(function() {
                                                // DOM is ready!
                                                /////////////////////////////
                                                // jQuery Code Go
                                                $(window).load(function(){
                                                    var iframe = document.querySelector('iframe');
                                                    var player = new Vimeo.Player(iframe, {
                                                        background: true
                                                    });

                                                    player.setVolume(0);
                                                    player.play();
                                                });
                                                // jQuery Code End
                                                /////////////////////////////
                                            });
                                            // Hier kommt der Rest des Codes hin
                                        }));
                                    </script>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <?php
                            if($image_mobile) {
                                echo '<span class="header-picture-box hide-desktop" style="background-image: url('.$image_mobile['url'].')">';

                                if(get_field('mobil_pfeil_runter')) {
                                    echo '<a href="#hauptinhalt" class="head-arrow-down-link"></a>';
                                }
                                echo '</span>';
                            }
                        ?>
                    </div>
                <?php
                }
            }
        ?>
        <a name="hauptinhalt" id="hauptinhalt"></a>
        <div id="main" class="wrapper">
			<?php
			if(get_field('kopfbild_art') != 'video' && get_field("kopfbild") && !get_field('kopfbild_vollflaechig')) {
				?>
                <div id="head-picture">
                    <div id="head-picture-inner">
						<?php
						if($prev_post) {
							echo '<a class="prev-link" href="'.get_permalink( $prev_post ).'"></a>';
						}

						$image = get_field('kopfbild');
						$image_mobile = get_field('kopfbild_mobile');
						echo '<img src="'.$image['url'].'"'.($image_mobile?' class="hide-mobile"':'').' alt="" />';
						if($image_mobile) {
							echo '<img src="'.$image_mobile['url'].'" class="hide-desktop" alt="" />';
						}

						if($next_post) {
							echo '<a class="next-link" href="'.get_permalink( $next_post ).'"></a>';
						}
						?>
                    </div><!-- .head-picture-inner -->
                </div><!-- .head-picture -->
				<?php
			}
			?>

site_navigation_timeout = null;


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


		$(document).ready(function(){

			///////////////////////////////////////////////////////////////////
			// Verlinkte Bilder nicht unterstreichen
			$("#content a[href]").each(function(){
				if($(this).find("img").length > 0) {
					$(this).css("border","none");
				}
			});
			///////////////////////////////////////////////////////////////////


			///////////////////////////////////////////////////////////////////
			// Projekt Filter
			$(".gw-project-list-filter").on("change", function(){
				const currentState = history.state;
				const value = $(this).val();
				const $projectList = $(this).next().find(".gw-project-list");
				const $projectListItems = $projectList.find(".gw-projects-list-item");
				if(value) {
					$projectListItems.each(function(){
						const categories = $(this).data("categories");
						let hasMatch = false;
						for (var index = 0; index < categories.length; ++index) {
							if(categories[index] == value){
								hasMatch = true;
								break;
							}
						}
						if(!hasMatch) {
							$(this).addClass("hidden");
						} else {
							$(this).removeClass("hidden");
						}
					});
				} else {
					$projectListItems.removeClass("hidden");
				}

				// push the state
				if(currentState === null) {
					var stateObj = {
						gwShowAllProjects: false,
						gwFilterSelectValue: value
					};
				} else {
					var stateObj = {
						gwShowAllProjects: currentState.gwShowAllProjects ? currentState.gwShowAllProjects : false,
						gwFilterSelectValue: value
					};
				}
				history.pushState(stateObj, "", "");
			});
			const currentState = history.state;
			if(currentState !== null && currentState.gwFilterSelectValue !== "undefined" && currentState.gwFilterSelectValue !== "") {
				$(".gw-project-list-filter option[value=\""+currentState.gwFilterSelectValue+"\"]").prop('selected', true);
				$(".gw-project-list-filter").trigger("change");
			}
			///////////////////////////////////////////////////////////////////


			///////////////////////////////////////////////////////////////////
			// Interne Links animieren
			$("a[href^='#']:not(.gw-mobile-navigation-anchor)").on("click", function(){
	            var target = $(this.hash);
	            var scrolling_offset = parseInt($("#masthead-wrapper").outerHeight());
	            target = target.length && target || $('[name="' + this.hash.slice(1) +'"]');
	            if (target.length) {
	                var targetOffset = parseInt(target.offset().top);
	                // console.log('scrolling to: '+(targetOffset - scrolling_offset));
	                $('html,body').stop(true,true).animate({scrollTop: targetOffset - scrolling_offset}, 700);
	                return false;
	            }
			});
			///////////////////////////////////////////////////////////////////


			///////////////////////////////////////////////////////////////////
			// project list "more" function
			$(".project-list-page").append('<li class="more-trigger" style="display:block;position:absolute;right: 0px;bottom: 0px;list-style:none;cursor:pointer;">&gt;&gt; weitere</li>');

			$(".more-trigger").click(function(){
				var list_element_invisible = $(".project-list-page .projects-list-item:hidden");
				var list_element_invisible_amount = list_element_invisible.length;

				list_element_invisible.eq(0).slideDown();
				list_element_invisible.eq(1).slideDown();
				list_element_invisible.eq(2).slideDown();
				list_element_invisible.eq(3).slideDown();
				list_element_invisible.eq(4).slideDown();
				list_element_invisible.eq(5).slideDown();

				if(list_element_invisible_amount <= 6) {
					$(this).slideUp();
				}
			});
			///////////////////////////////////////////////////////////////////


			///////////////////////////
			// responsive stuff

			// mobile Navigation zusammenbauen

			// remove ids
			$("#mobile-navigation [id]").each(function(){
				$(this).removeAttr('id');
			});

			// mobile navigation aktionen (einblenden der 2. navigationsebene)
			$("#mobile-navigation .navigation-element-link").on("click", function(){
				$(this).parent().find(".subnavi-element").stop(true,true).slideToggle();

				return false;
			});

			// hamburger aktion
			$(document).on('click', ".mobile-navigation-trigger", function(e){
				if( !touch_flag ) {
					flag = true;
					// reset touch flag
					setTimeout(function(){ flag = false; }, 100);

					// magic
					$(this).toggleClass("active");
					if( $(this).hasClass("active") && $("#mobile-navigation:hidden") ) {
	 					$("#mobile-navigation").stop(true,true).slideDown();
						$("#mobile-navigation").addClass('visible');
						$("body,.site-header-inner").addClass('mobile-nav-visible');
					} else {
						$("#mobile-navigation").stop(true,true).slideUp();
						$("#mobile-navigation").removeClass('visible');
						$("body,.site-header-inner").removeClass('mobile-nav-visible');
					}
				}
				return false;
			});
			///////////////////////////


			///////////////////////////////////////////////////////////////////
			// add class when scrolled
			$(window).scroll(function(){
			    var scrolling_offset = 50;

			    if( $(window).scrollTop() > scrolling_offset ) {
			        $('body').addClass('scrolled-body');
			    } else {
			        $("body").removeClass("scrolled-body");
			    }
			});
			///////////////////////////////////////////////////////////////////
		});


		///////////////////////////////////////////////////////////////////
		// Background Video

		// youtube
		if($("[data-video-embed-code]").length > 0 && $("[data-video-embed-code]").data('video-embed-code')) {
			var video_embed_code = $("[data-video-embed-code]").data('video-embed-code');
			$("[data-video-embed-code]").YTPlayer({
			    fitToBackground: true,
			    videoId: video_embed_code,
				playerVars: {
				      modestbranding: 0,
				      autoplay: 1,
				      controls: 0,
				      showinfo: 0,
				      branding: 0,
				      rel: 0,
				      autohide: 0,
				      start: 40
				    }
			});
		}

		// vimeo


		///////////////////////////////////////////////////////////////////

		// jQuery Code End
		/////////////////////////////
	});
	// Hier kommt der Rest des Codes hin



	/*
	 * YoutubeBackground - A wrapper for the Youtube API - Great for fullscreen background videos or just regular videos.
	 *
	 * Licensed under the MIT license:
	 *   http://www.opensource.org/licenses/mit-license.php
	 *
	 *
	 * Version:  1.0.5
	 *
	 */

	// Chain of Responsibility pattern. Creates base class that can be overridden.
	if (typeof Object.create !== "function") {
	  Object.create = function(obj) {
	    function F() {}
	    F.prototype = obj;
	    return new F();
	  };
	}

	(function($, window, document) {
	  var
	    loadAPI = function loadAPI(callback) {

	      // Load Youtube API
	      var tag = document.createElement('script'),
	      head = document.getElementsByTagName('head')[0];

	      if(window.location.origin == 'file://') {
	        tag.src = 'http://www.youtube.com/iframe_api';
	      } else {
	        tag.src = '//www.youtube.com/iframe_api';
	      }

	      head.appendChild(tag);

	      // Clean up Tags.
	      head = null;
	      tag = null;

	      iframeIsReady(callback);
	    },
	    iframeIsReady = function iframeIsReady(callback) {
	      // Listen for Gobal YT player callback
	      if (typeof YT === 'undefined' && typeof window.loadingPlayer === 'undefined') {
	        // Prevents Ready Event from being called twice
	        window.loadingPlayer = true;


	        // Creates deferred so, other players know when to wait.
	        window.dfd = $.Deferred();
	        window.onYouTubeIframeAPIReady = function() {
	          window.onYouTubeIframeAPIReady = null;
	          window.dfd.resolve( "done" );
	          callback();
	        };
	      } else if (typeof YT === 'object')  {
	        callback();
	      } else {
	        window.dfd.done(function( name ) {
	          callback();
	        });
	      }
	    };

	  // YTPlayer Object
	  YTPlayer = {
	    player: null,

	    // Defaults
	    defaults: {
	      ratio: 16 / 9,
	      videoId: '',
	      mute: true,
	      repeat: true,
	      width: $(window).width(),
	      playButtonClass: 'YTPlayer-play',
	      pauseButtonClass: 'YTPlayer-pause',
	      muteButtonClass: 'YTPlayer-mute',
	      volumeUpClass: 'YTPlayer-volume-up',
	      volumeDownClass: 'YTPlayer-volume-down',
	      start: 0,
	      pauseOnScroll: false,
	      fitToBackground: true,
	      playerVars: {
	        iv_load_policy: 3,
	        modestbranding: 1,
	        autoplay: 1,
	        controls: 0,
	        showinfo: 0,
	        wmode: 'opaque',
	        branding: 0,
	        autohide: 0
	      },
	      events: null
	    },

	    /**
	     * @function init
	     * Intializes YTPlayer object
	     */
	    init: function init(node, userOptions) {
	      var self = this;

	      self.userOptions = userOptions;

	      self.$body = $('body'),
	      self.$node = $(node),
	      self.$window = $(window);

	      // Setup event defaults with the reference to this
	      self.defaults.events = {
	        'onReady': function(e) {
	          self.onPlayerReady(e);

	          // setup up pause on scroll
	          if (self.options.pauseOnScroll) {
	            self.pauseOnScroll();
	          }

	          // Callback for when finished
	          if (typeof self.options.callback == 'function') {
	            self.options.callback.call(this);
	          }
	        },
	        'onStateChange': function(e) {
	          if (e.data === 1) {

	            self.$node.find('img').fadeOut(400);
	            self.$node.addClass('loaded');
	          } else if (e.data === 0 && self.options.repeat) { // video ended and repeat option is set true
	            self.player.seekTo(self.options.start);
	          }
	        }
	      }


	      self.options = $.extend(true, {}, self.defaults, self.userOptions);
	      self.options.height = Math.ceil(self.options.width / self.options.ratio);
	      self.ID = (new Date()).getTime();
	      self.holderID = 'YTPlayer-ID-' + self.ID;

	      if (self.options.fitToBackground) {
	        self.createBackgroundVideo();
	      } else {
	        self.createContainerVideo();
	      }
	      // Listen for Resize Event
	      self.$window.on('resize.YTplayer' + self.ID, function() {
	        self.resize(self);
	      });

	      loadAPI(self.onYouTubeIframeAPIReady.bind(self));

	      self.resize(self);

	      return self;
	    },


	    /**
	     * @function pauseOnScroll
	     * Adds window events to pause video on scroll.
	     */
	    pauseOnScroll: function pauseOnScroll() {
	      var self = this;
	      self.$window.on('scroll.YTplayer' + self.ID, function() {
	        var state = self.player.getPlayerState();
	        if (state === 1) {
	          self.player.pauseVideo();
	        }
	      });
	      self.$window.scrollStopped(function(){
	        var state = self.player.getPlayerState();
	        if (state === 2) {
	          self.player.playVideo();
	        }
	      });
	    },
	    /**
	     * @function createContainerVideo
	     * Adds HTML for video in a container
	     */
	    createContainerVideo: function createContainerVideo() {
	      var self = this;

	      /*jshint multistr: true */
	      var $YTPlayerString = $('<div id="ytplayer-container' + self.ID + '" >\
	                                    <div id="' + self.holderID + '" class="ytplayer-player-inline"></div> \
	                                    </div> \
	                                    <div id="ytplayer-shield" class="ytplayer-shield"></div>');

	      self.$node.append($YTPlayerString);
	      self.$YTPlayerString = $YTPlayerString;
	      $YTPlayerString = null;
	    },

	    /**
	     * @function createBackgroundVideo
	     * Adds HTML for video background
	     */
	    createBackgroundVideo: function createBackgroundVideo() {
	      /*jshint multistr: true */
	      var self = this,
	        $YTPlayerString = $('<div id="ytplayer-container' + self.ID + '" class="ytplayer-container background">\
	                                    <div id="' + self.holderID + '" class="ytplayer-player"></div>\
	                                    </div>\
	                                    <div id="ytplayer-shield" class="ytplayer-shield"></div>');

	      self.$node.append($YTPlayerString);
	      self.$YTPlayerString = $YTPlayerString;
	      $YTPlayerString = null;
	    },

	    /**
	     * @function resize
	     * Resize event to change video size
	     */
	    resize: function resize(self) {
	      //var self = this;
	      var container = $(window);

	      if (!self.options.fitToBackground) {
	        container = self.$node;
	      }

	      var width = container.width(),
	        pWidth, // player width, to be defined
	        height = container.height(),
	        pHeight, // player height, tbd
	        $YTPlayerPlayer = $('#' + self.holderID);

	      // when screen aspect ratio differs from video, video must center and underlay one dimension
	      if (width / self.options.ratio < height) {
	        pWidth = Math.ceil(height * self.options.ratio); // get new player width
	        $YTPlayerPlayer.width(pWidth).height(height).css({
	          left: (width - pWidth) / 2,
	          top: 0
	        }); // player width is greater, offset left; reset top
	      } else { // new video width < window width (gap to right)
	        pHeight = Math.ceil(width / self.options.ratio); // get new player height
	        $YTPlayerPlayer.width(width).height(pHeight).css({
	          left: 0,
	          top: (height - pHeight) / 2
	        }); // player height is greater, offset top; reset left
	      }

	      $YTPlayerPlayer = null;
	      container = null;
	    },

	    /**
	     * @function onYouTubeIframeAPIReady
	     * @ params {object} YTPlayer object for access to options
	     * Youtube API calls this function when the player is ready.
	     */
	    onYouTubeIframeAPIReady: function onYouTubeIframeAPIReady() {
	      var self = this;
	      self.player = new window.YT.Player(self.holderID, self.options);
	    },

	    /**
	     * @function onPlayerReady
	     * @ params {event} window event from youtube player
	     */
	    onPlayerReady: function onPlayerReady(e) {
	      if (this.options.mute) {
	        e.target.mute();
	      }
	      e.target.playVideo();
	    },

	    /**
	     * @function getPlayer
	     * returns youtube player
	     */
	    getPlayer: function getPlayer() {
	      return this.player;
	    },

	    /**
	     * @function destroy
	     * destroys all!
	     */
	    destroy: function destroy() {
	      var self = this;

	      self.$node
	        .removeData('yt-init')
	        .removeData('ytPlayer')
	        .removeClass('loaded');

	      self.$YTPlayerString.remove();

	      $(window).off('resize.YTplayer' + self.ID);
	      $(window).off('scroll.YTplayer' + self.ID);
	      self.$body = null;
	      self.$node = null;
	      self.$YTPlayerString = null;
	      self.player.destroy();
	      self.player = null;
	    }
	  };

	  // Scroll Stopped event.
	  $.fn.scrollStopped = function(callback) {
	    var $this = $(this), self = this;
	    $this.scroll(function(){
	      if ($this.data('scrollTimeout')) {
	        clearTimeout($this.data('scrollTimeout'));
	      }
	      $this.data('scrollTimeout', setTimeout(callback,250,self));
	    });
	  };

	  // Create plugin
	  $.fn.YTPlayer = function(options) {

	    return this.each(function() {
	      var el = this;

	      $(el).data("yt-init", true);
	      var player = Object.create(YTPlayer);
	      player.init(el, options);
	      $.data(el, "ytPlayer", player);
	    });
	  };

	})(jQuery, window, document);
}));



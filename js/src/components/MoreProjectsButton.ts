/**
 * Schweiger Design Slider.
 */

import $ from "jquery";
export class MoreProjectsButton {

	/**
	 * Initializes this object.
	 */

	initialize(): void {

		const $projectLists = $(".gw-schweiger-project-list.gw-show-all-projects");
		/**
		 * Prepare project list
		 */
		$projectLists.each(function(){

			let visibleProjectsAmount = $(this).data("visibleProjectsAmount");
			const $projectLists = $(this).find(".gw-project-list");
			let currentState = history.state;

			$projectLists.each(function(){
				const $projectList = $(this),
					$showAllProjectsButton = $(this).parent().next(".wp-block-buttons").find(".gw-show-all-projects"),
					projectElementHeight = $projectList.find(".gw-projects-list-item").first().outerHeight(),
					projectAmount = $projectList.find(".gw-projects-list-item").length;

				if( !currentState || (typeof currentState.gwShowAllProjects !== "undefined" && !currentState.gwShowAllProjects) ) {

					let projectsInALine = 2;
					if($("body").width() < 768) {
						projectsInALine = 2;
					} else {
						projectsInALine = 3;
					}
					if($projectList.parent().find(".gw-project-category-descripion").length > 0) {
						projectsInALine -= 1;
					}

					if(visibleProjectsAmount < projectAmount) {

						$projectList.addClass("gw-limited-project-amount");
						$projectList.css({
							"overflow" : "hidden",
							"max-height" : Math.round(projectElementHeight * visibleProjectsAmount / projectsInALine) + "px"
						});

						/**
						 * Button events
						 */
						$showAllProjectsButton.on("click", function() {
							const $filterSelect = $(this).parents(".gw-schweiger-project-list").find(".gw-project-list-filter");

							$projectList.css({
								"max-height" : "2500px"
							});
							window.setTimeout(() =>{

								$projectList.css({
									"max-height" : "none"
								});
								$projectList.removeClass("gw-limited-project-amount");
								$showAllProjectsButton.hide(300);

								// push the state
								var stateObj = {
									gwShowAllProjects: true,
									gwFilterSelectValue: $filterSelect.val()
								};
								history.pushState(stateObj, "", "");

							}, 1000);

						});

					}
				} else {
					$showAllProjectsButton.hide();
				}

			});

		});
	}

}

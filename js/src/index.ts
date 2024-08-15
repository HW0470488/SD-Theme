import "./shims/require";
import { Initializable } from "./core/Initializable";
import { LatestPosts } from "./components/latest-posts/LatestPosts";
import { MoreProjectsButton } from "./components/MoreProjectsButton";
import { SchweigerSlider } from "./components/SchweigerSlider";
import "../schweiger_design_editable";

/**
 * Performs tasks when the DOM content is ready.
 *
 * @param event - An event.
 */

document.addEventListener("DOMContentLoaded", (event: Event) => {

	const components: Initializable[] = [
		// new LatestPosts(),
		new MoreProjectsButton(),
		new SchweigerSlider()
	];

	for(const component of components) {

		component.initialize();

	}

});

/**
 * Performs tasks when the page has been fully loaded.
 *
 * @param event - An event.
 */

window.addEventListener("load", (event: Event) => {

	document.body.classList.remove("preload");

});

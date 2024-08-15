import { WPElement } from "@wordpress/element";
import { addFilter } from "@wordpress/hooks";
import { BlockType } from "../BlockType";
import { LatestPostsAttributes } from "./LatestPostsAttributes";

/**
 * Adds latest posts block configuration data to the HTML element.
 *
 * The data is stored as CSS classes instead of data-attributes because the
 * HTML representation of the dynamic latest posts block is `null`.
 *
 * @param element The save element.
 * @param blockType The block type.
 * @param attributes The attributes.
 */

function getSaveElement(element: WPElement, blockType: BlockType, attributes: LatestPostsAttributes): WPElement {

	if(blockType.name === "core/latest-posts") {

		const {
			className = "",
			excerptLength,
			order,
			postsToShow,
			selectedAuthor,
			categories
		} = attributes;

		const re = new RegExp([
			"(?:excerpt-length-\\d+)",
			"(?:order-\\w+)",
			"(?:posts-to-show-\\d+)",
			"(?:author-\\d+)",
			"(?:categories-[\\d-]+)"
		].join("|"), "g");

		// Remove old data classes before adding new ones.
		attributes.className = className.replace(re, "").replace(/ {2,}/g, "").trim();

		if(postsToShow !== undefined) {

			attributes.className += " posts-to-show-" + postsToShow.toString();

		}

		if(excerptLength !== undefined) {

			attributes.className += " excerpt-length-" + excerptLength.toString();

		}

		if(order !== undefined) {

			attributes.className += " order-" + order.toLowerCase();

		}

		if(selectedAuthor !== undefined) {

			attributes.className += " author-" + selectedAuthor.toString();

		}

		if(categories && categories.length > 0) {

			attributes.className += " categories-" + categories.map(c => c.id).join("-");

		}

		attributes.className = attributes.className.trim();

	}

	return element;

}

addFilter("blocks.getSaveElement", "gw-wp-theme/get-save-element", getSaveElement);

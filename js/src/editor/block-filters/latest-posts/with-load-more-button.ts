import { createHigherOrderComponent } from "@wordpress/compose";
import { createElement, Fragment } from "@wordpress/element";
import { addFilter } from "@wordpress/hooks";
import { __ } from "@wordpress/i18n";
import { Attributes, ComponentType } from "react";
import { LatestPostsProps } from "./LatestPostsProps";

/**
 * Adds a load more button if the class list contains `is-style-load-more`.
 *
 * @param BlockEdit The BlockEdit component.
 */

const withLoadMoreButton = createHigherOrderComponent((BlockEdit: ComponentType) => {

	const button = createElement("button", {
		"className": "load-more",
		"type": "button"
	}, __("Load more", "gw-wp-theme"));

	return (props: LatestPostsProps) => {

		const children = [createElement(BlockEdit, props as Attributes)];
		const attributes = props.attributes;

		if(props.name === "core/latest-posts" && /is-style-load-more/.test(attributes.className)) {

			children.push(createElement("div", {
				"className": "load-more-wrapper"
			}, button));

		}

		return createElement(Fragment, {}, ...children);

	};

}, "WithLoadMoreButton");

addFilter("editor.BlockEdit", "gw-wp-theme/block-edit", withLoadMoreButton);

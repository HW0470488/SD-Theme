import { registerBlockStyle } from "@wordpress/blocks";
import { __ } from "@wordpress/i18n";
import domReady from "@wordpress/dom-ready";

domReady(() => {

	registerBlockStyle("swiper-block/swiper", {

		name: "primary",
		label: __("Primary", "gw-schweigerdesign"),
		isDefault: true

	});

	registerBlockStyle("swiper-block/swiper", {

		name: "secondary",
		label: __("Secondary", "gw-schweigerdesign")

	});

});

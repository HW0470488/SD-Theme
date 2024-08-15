import { registerBlockStyle } from "@wordpress/blocks";
import { __ } from "@wordpress/i18n";
import domReady from "@wordpress/dom-ready";

domReady(() => {

    registerBlockStyle("core/button", {

        name: "gw-download",
        label: __("Download Button", "gw-schweigerdesign")

    });

    registerBlockStyle("core/button", {

        name: "gw-primary-button",
        label: __("Primary Button", "gw-schweigerdesign")

    });

    registerBlockStyle("core/button", {

        name: "gw-secondary-button",
        label: __("Secondary Button", "gw-schweigerdesign")

    });

    registerBlockStyle("core/button", {

        name: "gw-grey-button",
        label: __("Grey Button", "gw-schweigerdesign")

    });

    registerBlockStyle("core/button", {

        name: "gw-outlined-button",
        label: __("Outlined Button", "gw-schweigerdesign")

    });

});

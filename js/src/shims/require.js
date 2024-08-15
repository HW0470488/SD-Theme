/**
 * A require shim for built-in WordPress modules.
 *
 * @param name The name of the module.
 * @return The module.
 */

window.require = (name) => {

	let module;

	switch(name) {

		case "jquery":
			module = jQuery || Zepto;
			break;

		case "@wordpress/blocks":
			module = wp.blocks;
			break;

		case "@wordpress/components":
			module = wp.components;
			break;

		case "@wordpress/compose":
			module = wp.compose;
			break;

		case "@wordpress/data":
			module = wp.data;
			break;

		case "@wordpress/dom-ready":
			module = wp.domReady;
			break;

		case "@wordpress/editor":
			module = wp.editor;
			break;

		case "@wordpress/element":
			module = wp.element;
			break;

		case "@wordpress/hooks":
			module = wp.hooks;
			break;

		case "@wordpress/i18n":
			module = wp.i18n;
			break;

		default:
			throw new Error(`Cannot require ${name}`);

	}

	return module;

};

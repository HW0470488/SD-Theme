/**
 * gw-wp-theme-template v1.0.0 build Tue Dec 17 2024
 * https://github.com/livelongandprosper/gw-wp-theme-template
 * Copyright 2024 Gregor Wendland
 * @license GPL-3.0-or-later
 */
(() => {
  var __create = Object.create;
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __getProtoOf = Object.getPrototypeOf;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __markAsModule = (target) => __defProp(target, "__esModule", { value: true });
  var __require = (x) => {
    if (typeof require !== "undefined")
      return require(x);
    throw new Error('Dynamic require of "' + x + '" is not supported');
  };
  var __reExport = (target, module, desc) => {
    if (module && typeof module === "object" || typeof module === "function") {
      for (let key of __getOwnPropNames(module))
        if (!__hasOwnProp.call(target, key) && key !== "default")
          __defProp(target, key, { get: () => module[key], enumerable: !(desc = __getOwnPropDesc(module, key)) || desc.enumerable });
    }
    return target;
  };
  var __toModule = (module) => {
    return __reExport(__markAsModule(__defProp(module != null ? __create(__getProtoOf(module)) : {}, "default", module && module.__esModule && "default" in module ? { get: () => module.default, enumerable: true } : { value: module, enumerable: true })), module);
  };

  // js/src/shims/require.js
  window.require = (name) => {
    let module;
    switch (name) {
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

  // js/src/editor/block-styles/button.ts
  var import_blocks = __toModule(__require("@wordpress/blocks"));
  var import_i18n = __toModule(__require("@wordpress/i18n"));
  var import_dom_ready = __toModule(__require("@wordpress/dom-ready"));
  (0, import_dom_ready.default)(() => {
    (0, import_blocks.registerBlockStyle)("core/button", {
      name: "gw-download",
      label: (0, import_i18n.__)("Download Button", "gw-schweigerdesign")
    });
    (0, import_blocks.registerBlockStyle)("core/button", {
      name: "gw-primary-button",
      label: (0, import_i18n.__)("Primary Button", "gw-schweigerdesign")
    });
    (0, import_blocks.registerBlockStyle)("core/button", {
      name: "gw-secondary-button",
      label: (0, import_i18n.__)("Secondary Button", "gw-schweigerdesign")
    });
    (0, import_blocks.registerBlockStyle)("core/button", {
      name: "gw-grey-button",
      label: (0, import_i18n.__)("Grey Button", "gw-schweigerdesign")
    });
    (0, import_blocks.registerBlockStyle)("core/button", {
      name: "gw-outlined-button",
      label: (0, import_i18n.__)("Outlined Button", "gw-schweigerdesign")
    });
  });

  // js/src/editor/block-styles/latest-posts.ts
  var import_dom_ready2 = __toModule(__require("@wordpress/dom-ready"));
  (0, import_dom_ready2.default)(() => {
  });

  // js/src/editor/block-styles/swiper.ts
  var import_blocks2 = __toModule(__require("@wordpress/blocks"));
  var import_i18n2 = __toModule(__require("@wordpress/i18n"));
  var import_dom_ready3 = __toModule(__require("@wordpress/dom-ready"));
  (0, import_dom_ready3.default)(() => {
    (0, import_blocks2.registerBlockStyle)("swiper-block/swiper", {
      name: "primary",
      label: (0, import_i18n2.__)("Primary", "gw-schweigerdesign"),
      isDefault: true
    });
    (0, import_blocks2.registerBlockStyle)("swiper-block/swiper", {
      name: "secondary",
      label: (0, import_i18n2.__)("Secondary", "gw-schweigerdesign")
    });
  });
})();

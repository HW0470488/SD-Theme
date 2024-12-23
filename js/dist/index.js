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

  // js/src/components/MoreProjectsButton.ts
  var import_jquery = __toModule(__require("jquery"));
  var MoreProjectsButton = class {
    initialize() {
      const $projectLists = (0, import_jquery.default)(".gw-schweiger-project-list.gw-show-all-projects");
      $projectLists.each(function() {
        let visibleProjectsAmount = (0, import_jquery.default)(this).data("visibleProjectsAmount");
        const $projectLists2 = (0, import_jquery.default)(this).find(".gw-project-list");
        let currentState = history.state;
        $projectLists2.each(function() {
          const $projectList = (0, import_jquery.default)(this), $showAllProjectsButton = (0, import_jquery.default)(this).parent().next(".wp-block-buttons").find(".gw-show-all-projects"), projectElementHeight = $projectList.find(".gw-projects-list-item").first().outerHeight(), projectAmount = $projectList.find(".gw-projects-list-item").length;
          if (!currentState || typeof currentState.gwShowAllProjects !== "undefined" && !currentState.gwShowAllProjects) {
            let projectsInALine = 2;
            if ((0, import_jquery.default)("body").width() < 768) {
              projectsInALine = 2;
            } else {
              projectsInALine = 3;
            }
            if ($projectList.parent().find(".gw-project-category-descripion").length > 0) {
              projectsInALine -= 1;
            }
            if (visibleProjectsAmount < projectAmount) {
              $projectList.addClass("gw-limited-project-amount");
              $projectList.css({
                "overflow": "hidden",
                "max-height": Math.round(projectElementHeight * visibleProjectsAmount / projectsInALine) + "px"
              });
              $showAllProjectsButton.on("click", function() {
                const $filterSelect = (0, import_jquery.default)(this).parents(".gw-schweiger-project-list").find(".gw-project-list-filter");
                $projectList.css({
                  "max-height": "2500px"
                });
                window.setTimeout(() => {
                  $projectList.css({
                    "max-height": "none"
                  });
                  $projectList.removeClass("gw-limited-project-amount");
                  $showAllProjectsButton.hide(300);
                  var stateObj = {
                    gwShowAllProjects: true,
                    gwFilterSelectValue: $filterSelect.val()
                  };
                  history.pushState(stateObj, "", "");
                }, 1e3);
              });
            }
          } else {
            $showAllProjectsButton.hide();
          }
        });
      });
    }
  };

  // node_modules/ssr-window/ssr-window.esm.js
  function isObject(obj) {
    return obj !== null && typeof obj === "object" && "constructor" in obj && obj.constructor === Object;
  }
  function extend(target, src) {
    if (target === void 0) {
      target = {};
    }
    if (src === void 0) {
      src = {};
    }
    Object.keys(src).forEach(function(key) {
      if (typeof target[key] === "undefined")
        target[key] = src[key];
      else if (isObject(src[key]) && isObject(target[key]) && Object.keys(src[key]).length > 0) {
        extend(target[key], src[key]);
      }
    });
  }
  var ssrDocument = {
    body: {},
    addEventListener: function() {
    },
    removeEventListener: function() {
    },
    activeElement: {
      blur: function() {
      },
      nodeName: ""
    },
    querySelector: function() {
      return null;
    },
    querySelectorAll: function() {
      return [];
    },
    getElementById: function() {
      return null;
    },
    createEvent: function() {
      return {
        initEvent: function() {
        }
      };
    },
    createElement: function() {
      return {
        children: [],
        childNodes: [],
        style: {},
        setAttribute: function() {
        },
        getElementsByTagName: function() {
          return [];
        }
      };
    },
    createElementNS: function() {
      return {};
    },
    importNode: function() {
      return null;
    },
    location: {
      hash: "",
      host: "",
      hostname: "",
      href: "",
      origin: "",
      pathname: "",
      protocol: "",
      search: ""
    }
  };
  function getDocument() {
    var doc = typeof document !== "undefined" ? document : {};
    extend(doc, ssrDocument);
    return doc;
  }
  var ssrWindow = {
    document: ssrDocument,
    navigator: {
      userAgent: ""
    },
    location: {
      hash: "",
      host: "",
      hostname: "",
      href: "",
      origin: "",
      pathname: "",
      protocol: "",
      search: ""
    },
    history: {
      replaceState: function() {
      },
      pushState: function() {
      },
      go: function() {
      },
      back: function() {
      }
    },
    CustomEvent: function CustomEvent() {
      return this;
    },
    addEventListener: function() {
    },
    removeEventListener: function() {
    },
    getComputedStyle: function() {
      return {
        getPropertyValue: function() {
          return "";
        }
      };
    },
    Image: function() {
    },
    Date: function() {
    },
    screen: {},
    setTimeout: function() {
    },
    clearTimeout: function() {
    },
    matchMedia: function() {
      return {};
    },
    requestAnimationFrame: function(callback) {
      if (typeof setTimeout === "undefined") {
        callback();
        return null;
      }
      return setTimeout(callback, 0);
    },
    cancelAnimationFrame: function(id) {
      if (typeof setTimeout === "undefined") {
        return;
      }
      clearTimeout(id);
    }
  };
  function getWindow() {
    var win = typeof window !== "undefined" ? window : {};
    extend(win, ssrWindow);
    return win;
  }

  // node_modules/dom7/dom7.esm.js
  function _inheritsLoose(subClass, superClass) {
    subClass.prototype = Object.create(superClass.prototype);
    subClass.prototype.constructor = subClass;
    subClass.__proto__ = superClass;
  }
  function _getPrototypeOf(o) {
    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf2(o2) {
      return o2.__proto__ || Object.getPrototypeOf(o2);
    };
    return _getPrototypeOf(o);
  }
  function _setPrototypeOf(o, p) {
    _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf2(o2, p2) {
      o2.__proto__ = p2;
      return o2;
    };
    return _setPrototypeOf(o, p);
  }
  function _isNativeReflectConstruct() {
    if (typeof Reflect === "undefined" || !Reflect.construct)
      return false;
    if (Reflect.construct.sham)
      return false;
    if (typeof Proxy === "function")
      return true;
    try {
      Date.prototype.toString.call(Reflect.construct(Date, [], function() {
      }));
      return true;
    } catch (e) {
      return false;
    }
  }
  function _construct(Parent, args, Class) {
    if (_isNativeReflectConstruct()) {
      _construct = Reflect.construct;
    } else {
      _construct = function _construct2(Parent2, args2, Class2) {
        var a = [null];
        a.push.apply(a, args2);
        var Constructor = Function.bind.apply(Parent2, a);
        var instance = new Constructor();
        if (Class2)
          _setPrototypeOf(instance, Class2.prototype);
        return instance;
      };
    }
    return _construct.apply(null, arguments);
  }
  function _isNativeFunction(fn) {
    return Function.toString.call(fn).indexOf("[native code]") !== -1;
  }
  function _wrapNativeSuper(Class) {
    var _cache = typeof Map === "function" ? new Map() : void 0;
    _wrapNativeSuper = function _wrapNativeSuper2(Class2) {
      if (Class2 === null || !_isNativeFunction(Class2))
        return Class2;
      if (typeof Class2 !== "function") {
        throw new TypeError("Super expression must either be null or a function");
      }
      if (typeof _cache !== "undefined") {
        if (_cache.has(Class2))
          return _cache.get(Class2);
        _cache.set(Class2, Wrapper);
      }
      function Wrapper() {
        return _construct(Class2, arguments, _getPrototypeOf(this).constructor);
      }
      Wrapper.prototype = Object.create(Class2.prototype, {
        constructor: {
          value: Wrapper,
          enumerable: false,
          writable: true,
          configurable: true
        }
      });
      return _setPrototypeOf(Wrapper, Class2);
    };
    return _wrapNativeSuper(Class);
  }
  function _assertThisInitialized(self) {
    if (self === void 0) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return self;
  }
  function makeReactive(obj) {
    var proto = obj.__proto__;
    Object.defineProperty(obj, "__proto__", {
      get: function get() {
        return proto;
      },
      set: function set(value) {
        proto.__proto__ = value;
      }
    });
  }
  var Dom7 = /* @__PURE__ */ function(_Array) {
    _inheritsLoose(Dom72, _Array);
    function Dom72(items) {
      var _this;
      _this = _Array.call.apply(_Array, [this].concat(items)) || this;
      makeReactive(_assertThisInitialized(_this));
      return _this;
    }
    return Dom72;
  }(/* @__PURE__ */ _wrapNativeSuper(Array));
  function arrayFlat(arr) {
    if (arr === void 0) {
      arr = [];
    }
    var res = [];
    arr.forEach(function(el) {
      if (Array.isArray(el)) {
        res.push.apply(res, arrayFlat(el));
      } else {
        res.push(el);
      }
    });
    return res;
  }
  function arrayFilter(arr, callback) {
    return Array.prototype.filter.call(arr, callback);
  }
  function arrayUnique(arr) {
    var uniqueArray = [];
    for (var i = 0; i < arr.length; i += 1) {
      if (uniqueArray.indexOf(arr[i]) === -1)
        uniqueArray.push(arr[i]);
    }
    return uniqueArray;
  }
  function qsa(selector, context) {
    if (typeof selector !== "string") {
      return [selector];
    }
    var a = [];
    var res = context.querySelectorAll(selector);
    for (var i = 0; i < res.length; i += 1) {
      a.push(res[i]);
    }
    return a;
  }
  function $2(selector, context) {
    var window2 = getWindow();
    var document2 = getDocument();
    var arr = [];
    if (!context && selector instanceof Dom7) {
      return selector;
    }
    if (!selector) {
      return new Dom7(arr);
    }
    if (typeof selector === "string") {
      var html2 = selector.trim();
      if (html2.indexOf("<") >= 0 && html2.indexOf(">") >= 0) {
        var toCreate = "div";
        if (html2.indexOf("<li") === 0)
          toCreate = "ul";
        if (html2.indexOf("<tr") === 0)
          toCreate = "tbody";
        if (html2.indexOf("<td") === 0 || html2.indexOf("<th") === 0)
          toCreate = "tr";
        if (html2.indexOf("<tbody") === 0)
          toCreate = "table";
        if (html2.indexOf("<option") === 0)
          toCreate = "select";
        var tempParent = document2.createElement(toCreate);
        tempParent.innerHTML = html2;
        for (var i = 0; i < tempParent.childNodes.length; i += 1) {
          arr.push(tempParent.childNodes[i]);
        }
      } else {
        arr = qsa(selector.trim(), context || document2);
      }
    } else if (selector.nodeType || selector === window2 || selector === document2) {
      arr.push(selector);
    } else if (Array.isArray(selector)) {
      if (selector instanceof Dom7)
        return selector;
      arr = selector;
    }
    return new Dom7(arrayUnique(arr));
  }
  $2.fn = Dom7.prototype;
  function addClass() {
    for (var _len = arguments.length, classes = new Array(_len), _key = 0; _key < _len; _key++) {
      classes[_key] = arguments[_key];
    }
    var classNames = arrayFlat(classes.map(function(c) {
      return c.split(" ");
    }));
    this.forEach(function(el) {
      var _el$classList;
      (_el$classList = el.classList).add.apply(_el$classList, classNames);
    });
    return this;
  }
  function removeClass() {
    for (var _len2 = arguments.length, classes = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      classes[_key2] = arguments[_key2];
    }
    var classNames = arrayFlat(classes.map(function(c) {
      return c.split(" ");
    }));
    this.forEach(function(el) {
      var _el$classList2;
      (_el$classList2 = el.classList).remove.apply(_el$classList2, classNames);
    });
    return this;
  }
  function toggleClass() {
    for (var _len3 = arguments.length, classes = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
      classes[_key3] = arguments[_key3];
    }
    var classNames = arrayFlat(classes.map(function(c) {
      return c.split(" ");
    }));
    this.forEach(function(el) {
      classNames.forEach(function(className) {
        el.classList.toggle(className);
      });
    });
  }
  function hasClass() {
    for (var _len4 = arguments.length, classes = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
      classes[_key4] = arguments[_key4];
    }
    var classNames = arrayFlat(classes.map(function(c) {
      return c.split(" ");
    }));
    return arrayFilter(this, function(el) {
      return classNames.filter(function(className) {
        return el.classList.contains(className);
      }).length > 0;
    }).length > 0;
  }
  function attr(attrs, value) {
    if (arguments.length === 1 && typeof attrs === "string") {
      if (this[0])
        return this[0].getAttribute(attrs);
      return void 0;
    }
    for (var i = 0; i < this.length; i += 1) {
      if (arguments.length === 2) {
        this[i].setAttribute(attrs, value);
      } else {
        for (var attrName in attrs) {
          this[i][attrName] = attrs[attrName];
          this[i].setAttribute(attrName, attrs[attrName]);
        }
      }
    }
    return this;
  }
  function removeAttr(attr2) {
    for (var i = 0; i < this.length; i += 1) {
      this[i].removeAttribute(attr2);
    }
    return this;
  }
  function transform(transform2) {
    for (var i = 0; i < this.length; i += 1) {
      this[i].style.transform = transform2;
    }
    return this;
  }
  function transition(duration) {
    for (var i = 0; i < this.length; i += 1) {
      this[i].style.transitionDuration = typeof duration !== "string" ? duration + "ms" : duration;
    }
    return this;
  }
  function on() {
    for (var _len5 = arguments.length, args = new Array(_len5), _key5 = 0; _key5 < _len5; _key5++) {
      args[_key5] = arguments[_key5];
    }
    var eventType = args[0], targetSelector = args[1], listener = args[2], capture = args[3];
    if (typeof args[1] === "function") {
      eventType = args[0];
      listener = args[1];
      capture = args[2];
      targetSelector = void 0;
    }
    if (!capture)
      capture = false;
    function handleLiveEvent(e) {
      var target = e.target;
      if (!target)
        return;
      var eventData = e.target.dom7EventData || [];
      if (eventData.indexOf(e) < 0) {
        eventData.unshift(e);
      }
      if ($2(target).is(targetSelector))
        listener.apply(target, eventData);
      else {
        var _parents = $2(target).parents();
        for (var k = 0; k < _parents.length; k += 1) {
          if ($2(_parents[k]).is(targetSelector))
            listener.apply(_parents[k], eventData);
        }
      }
    }
    function handleEvent(e) {
      var eventData = e && e.target ? e.target.dom7EventData || [] : [];
      if (eventData.indexOf(e) < 0) {
        eventData.unshift(e);
      }
      listener.apply(this, eventData);
    }
    var events = eventType.split(" ");
    var j;
    for (var i = 0; i < this.length; i += 1) {
      var el = this[i];
      if (!targetSelector) {
        for (j = 0; j < events.length; j += 1) {
          var event = events[j];
          if (!el.dom7Listeners)
            el.dom7Listeners = {};
          if (!el.dom7Listeners[event])
            el.dom7Listeners[event] = [];
          el.dom7Listeners[event].push({
            listener,
            proxyListener: handleEvent
          });
          el.addEventListener(event, handleEvent, capture);
        }
      } else {
        for (j = 0; j < events.length; j += 1) {
          var _event = events[j];
          if (!el.dom7LiveListeners)
            el.dom7LiveListeners = {};
          if (!el.dom7LiveListeners[_event])
            el.dom7LiveListeners[_event] = [];
          el.dom7LiveListeners[_event].push({
            listener,
            proxyListener: handleLiveEvent
          });
          el.addEventListener(_event, handleLiveEvent, capture);
        }
      }
    }
    return this;
  }
  function off() {
    for (var _len6 = arguments.length, args = new Array(_len6), _key6 = 0; _key6 < _len6; _key6++) {
      args[_key6] = arguments[_key6];
    }
    var eventType = args[0], targetSelector = args[1], listener = args[2], capture = args[3];
    if (typeof args[1] === "function") {
      eventType = args[0];
      listener = args[1];
      capture = args[2];
      targetSelector = void 0;
    }
    if (!capture)
      capture = false;
    var events = eventType.split(" ");
    for (var i = 0; i < events.length; i += 1) {
      var event = events[i];
      for (var j = 0; j < this.length; j += 1) {
        var el = this[j];
        var handlers = void 0;
        if (!targetSelector && el.dom7Listeners) {
          handlers = el.dom7Listeners[event];
        } else if (targetSelector && el.dom7LiveListeners) {
          handlers = el.dom7LiveListeners[event];
        }
        if (handlers && handlers.length) {
          for (var k = handlers.length - 1; k >= 0; k -= 1) {
            var handler = handlers[k];
            if (listener && handler.listener === listener) {
              el.removeEventListener(event, handler.proxyListener, capture);
              handlers.splice(k, 1);
            } else if (listener && handler.listener && handler.listener.dom7proxy && handler.listener.dom7proxy === listener) {
              el.removeEventListener(event, handler.proxyListener, capture);
              handlers.splice(k, 1);
            } else if (!listener) {
              el.removeEventListener(event, handler.proxyListener, capture);
              handlers.splice(k, 1);
            }
          }
        }
      }
    }
    return this;
  }
  function trigger() {
    var window2 = getWindow();
    for (var _len9 = arguments.length, args = new Array(_len9), _key9 = 0; _key9 < _len9; _key9++) {
      args[_key9] = arguments[_key9];
    }
    var events = args[0].split(" ");
    var eventData = args[1];
    for (var i = 0; i < events.length; i += 1) {
      var event = events[i];
      for (var j = 0; j < this.length; j += 1) {
        var el = this[j];
        if (window2.CustomEvent) {
          var evt = new window2.CustomEvent(event, {
            detail: eventData,
            bubbles: true,
            cancelable: true
          });
          el.dom7EventData = args.filter(function(data, dataIndex) {
            return dataIndex > 0;
          });
          el.dispatchEvent(evt);
          el.dom7EventData = [];
          delete el.dom7EventData;
        }
      }
    }
    return this;
  }
  function transitionEnd(callback) {
    var dom = this;
    function fireCallBack(e) {
      if (e.target !== this)
        return;
      callback.call(this, e);
      dom.off("transitionend", fireCallBack);
    }
    if (callback) {
      dom.on("transitionend", fireCallBack);
    }
    return this;
  }
  function outerWidth(includeMargins) {
    if (this.length > 0) {
      if (includeMargins) {
        var _styles = this.styles();
        return this[0].offsetWidth + parseFloat(_styles.getPropertyValue("margin-right")) + parseFloat(_styles.getPropertyValue("margin-left"));
      }
      return this[0].offsetWidth;
    }
    return null;
  }
  function outerHeight(includeMargins) {
    if (this.length > 0) {
      if (includeMargins) {
        var _styles2 = this.styles();
        return this[0].offsetHeight + parseFloat(_styles2.getPropertyValue("margin-top")) + parseFloat(_styles2.getPropertyValue("margin-bottom"));
      }
      return this[0].offsetHeight;
    }
    return null;
  }
  function offset() {
    if (this.length > 0) {
      var window2 = getWindow();
      var document2 = getDocument();
      var el = this[0];
      var box = el.getBoundingClientRect();
      var body = document2.body;
      var clientTop = el.clientTop || body.clientTop || 0;
      var clientLeft = el.clientLeft || body.clientLeft || 0;
      var scrollTop = el === window2 ? window2.scrollY : el.scrollTop;
      var scrollLeft = el === window2 ? window2.scrollX : el.scrollLeft;
      return {
        top: box.top + scrollTop - clientTop,
        left: box.left + scrollLeft - clientLeft
      };
    }
    return null;
  }
  function styles() {
    var window2 = getWindow();
    if (this[0])
      return window2.getComputedStyle(this[0], null);
    return {};
  }
  function css(props, value) {
    var window2 = getWindow();
    var i;
    if (arguments.length === 1) {
      if (typeof props === "string") {
        if (this[0])
          return window2.getComputedStyle(this[0], null).getPropertyValue(props);
      } else {
        for (i = 0; i < this.length; i += 1) {
          for (var _prop in props) {
            this[i].style[_prop] = props[_prop];
          }
        }
        return this;
      }
    }
    if (arguments.length === 2 && typeof props === "string") {
      for (i = 0; i < this.length; i += 1) {
        this[i].style[props] = value;
      }
      return this;
    }
    return this;
  }
  function each(callback) {
    if (!callback)
      return this;
    this.forEach(function(el, index2) {
      callback.apply(el, [el, index2]);
    });
    return this;
  }
  function filter(callback) {
    var result = arrayFilter(this, callback);
    return $2(result);
  }
  function html(html2) {
    if (typeof html2 === "undefined") {
      return this[0] ? this[0].innerHTML : null;
    }
    for (var i = 0; i < this.length; i += 1) {
      this[i].innerHTML = html2;
    }
    return this;
  }
  function text(text2) {
    if (typeof text2 === "undefined") {
      return this[0] ? this[0].textContent.trim() : null;
    }
    for (var i = 0; i < this.length; i += 1) {
      this[i].textContent = text2;
    }
    return this;
  }
  function is(selector) {
    var window2 = getWindow();
    var document2 = getDocument();
    var el = this[0];
    var compareWith;
    var i;
    if (!el || typeof selector === "undefined")
      return false;
    if (typeof selector === "string") {
      if (el.matches)
        return el.matches(selector);
      if (el.webkitMatchesSelector)
        return el.webkitMatchesSelector(selector);
      if (el.msMatchesSelector)
        return el.msMatchesSelector(selector);
      compareWith = $2(selector);
      for (i = 0; i < compareWith.length; i += 1) {
        if (compareWith[i] === el)
          return true;
      }
      return false;
    }
    if (selector === document2) {
      return el === document2;
    }
    if (selector === window2) {
      return el === window2;
    }
    if (selector.nodeType || selector instanceof Dom7) {
      compareWith = selector.nodeType ? [selector] : selector;
      for (i = 0; i < compareWith.length; i += 1) {
        if (compareWith[i] === el)
          return true;
      }
      return false;
    }
    return false;
  }
  function index() {
    var child = this[0];
    var i;
    if (child) {
      i = 0;
      while ((child = child.previousSibling) !== null) {
        if (child.nodeType === 1)
          i += 1;
      }
      return i;
    }
    return void 0;
  }
  function eq(index2) {
    if (typeof index2 === "undefined")
      return this;
    var length = this.length;
    if (index2 > length - 1) {
      return $2([]);
    }
    if (index2 < 0) {
      var returnIndex = length + index2;
      if (returnIndex < 0)
        return $2([]);
      return $2([this[returnIndex]]);
    }
    return $2([this[index2]]);
  }
  function append() {
    var newChild;
    var document2 = getDocument();
    for (var k = 0; k < arguments.length; k += 1) {
      newChild = k < 0 || arguments.length <= k ? void 0 : arguments[k];
      for (var i = 0; i < this.length; i += 1) {
        if (typeof newChild === "string") {
          var tempDiv = document2.createElement("div");
          tempDiv.innerHTML = newChild;
          while (tempDiv.firstChild) {
            this[i].appendChild(tempDiv.firstChild);
          }
        } else if (newChild instanceof Dom7) {
          for (var j = 0; j < newChild.length; j += 1) {
            this[i].appendChild(newChild[j]);
          }
        } else {
          this[i].appendChild(newChild);
        }
      }
    }
    return this;
  }
  function prepend(newChild) {
    var document2 = getDocument();
    var i;
    var j;
    for (i = 0; i < this.length; i += 1) {
      if (typeof newChild === "string") {
        var tempDiv = document2.createElement("div");
        tempDiv.innerHTML = newChild;
        for (j = tempDiv.childNodes.length - 1; j >= 0; j -= 1) {
          this[i].insertBefore(tempDiv.childNodes[j], this[i].childNodes[0]);
        }
      } else if (newChild instanceof Dom7) {
        for (j = 0; j < newChild.length; j += 1) {
          this[i].insertBefore(newChild[j], this[i].childNodes[0]);
        }
      } else {
        this[i].insertBefore(newChild, this[i].childNodes[0]);
      }
    }
    return this;
  }
  function next(selector) {
    if (this.length > 0) {
      if (selector) {
        if (this[0].nextElementSibling && $2(this[0].nextElementSibling).is(selector)) {
          return $2([this[0].nextElementSibling]);
        }
        return $2([]);
      }
      if (this[0].nextElementSibling)
        return $2([this[0].nextElementSibling]);
      return $2([]);
    }
    return $2([]);
  }
  function nextAll(selector) {
    var nextEls = [];
    var el = this[0];
    if (!el)
      return $2([]);
    while (el.nextElementSibling) {
      var _next = el.nextElementSibling;
      if (selector) {
        if ($2(_next).is(selector))
          nextEls.push(_next);
      } else
        nextEls.push(_next);
      el = _next;
    }
    return $2(nextEls);
  }
  function prev(selector) {
    if (this.length > 0) {
      var el = this[0];
      if (selector) {
        if (el.previousElementSibling && $2(el.previousElementSibling).is(selector)) {
          return $2([el.previousElementSibling]);
        }
        return $2([]);
      }
      if (el.previousElementSibling)
        return $2([el.previousElementSibling]);
      return $2([]);
    }
    return $2([]);
  }
  function prevAll(selector) {
    var prevEls = [];
    var el = this[0];
    if (!el)
      return $2([]);
    while (el.previousElementSibling) {
      var _prev = el.previousElementSibling;
      if (selector) {
        if ($2(_prev).is(selector))
          prevEls.push(_prev);
      } else
        prevEls.push(_prev);
      el = _prev;
    }
    return $2(prevEls);
  }
  function parent(selector) {
    var parents2 = [];
    for (var i = 0; i < this.length; i += 1) {
      if (this[i].parentNode !== null) {
        if (selector) {
          if ($2(this[i].parentNode).is(selector))
            parents2.push(this[i].parentNode);
        } else {
          parents2.push(this[i].parentNode);
        }
      }
    }
    return $2(parents2);
  }
  function parents(selector) {
    var parents2 = [];
    for (var i = 0; i < this.length; i += 1) {
      var _parent = this[i].parentNode;
      while (_parent) {
        if (selector) {
          if ($2(_parent).is(selector))
            parents2.push(_parent);
        } else {
          parents2.push(_parent);
        }
        _parent = _parent.parentNode;
      }
    }
    return $2(parents2);
  }
  function closest(selector) {
    var closest2 = this;
    if (typeof selector === "undefined") {
      return $2([]);
    }
    if (!closest2.is(selector)) {
      closest2 = closest2.parents(selector).eq(0);
    }
    return closest2;
  }
  function find(selector) {
    var foundElements = [];
    for (var i = 0; i < this.length; i += 1) {
      var found = this[i].querySelectorAll(selector);
      for (var j = 0; j < found.length; j += 1) {
        foundElements.push(found[j]);
      }
    }
    return $2(foundElements);
  }
  function children(selector) {
    var children2 = [];
    for (var i = 0; i < this.length; i += 1) {
      var childNodes = this[i].children;
      for (var j = 0; j < childNodes.length; j += 1) {
        if (!selector || $2(childNodes[j]).is(selector)) {
          children2.push(childNodes[j]);
        }
      }
    }
    return $2(children2);
  }
  function remove() {
    for (var i = 0; i < this.length; i += 1) {
      if (this[i].parentNode)
        this[i].parentNode.removeChild(this[i]);
    }
    return this;
  }
  var noTrigger = "resize scroll".split(" ");
  function shortcut(name) {
    function eventHandler() {
      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }
      if (typeof args[0] === "undefined") {
        for (var i = 0; i < this.length; i += 1) {
          if (noTrigger.indexOf(name) < 0) {
            if (name in this[i])
              this[i][name]();
            else {
              $2(this[i]).trigger(name);
            }
          }
        }
        return this;
      }
      return this.on.apply(this, [name].concat(args));
    }
    return eventHandler;
  }
  var click = shortcut("click");
  var blur = shortcut("blur");
  var focus = shortcut("focus");
  var focusin = shortcut("focusin");
  var focusout = shortcut("focusout");
  var keyup = shortcut("keyup");
  var keydown = shortcut("keydown");
  var keypress = shortcut("keypress");
  var submit = shortcut("submit");
  var change = shortcut("change");
  var mousedown = shortcut("mousedown");
  var mousemove = shortcut("mousemove");
  var mouseup = shortcut("mouseup");
  var mouseenter = shortcut("mouseenter");
  var mouseleave = shortcut("mouseleave");
  var mouseout = shortcut("mouseout");
  var mouseover = shortcut("mouseover");
  var touchstart = shortcut("touchstart");
  var touchend = shortcut("touchend");
  var touchmove = shortcut("touchmove");
  var resize = shortcut("resize");
  var scroll = shortcut("scroll");

  // node_modules/swiper/esm/utils/dom.js
  var Methods = {
    addClass,
    removeClass,
    hasClass,
    toggleClass,
    attr,
    removeAttr,
    transform,
    transition,
    on,
    off,
    trigger,
    transitionEnd,
    outerWidth,
    outerHeight,
    styles,
    offset,
    css,
    each,
    html,
    text,
    is,
    index,
    eq,
    append,
    prepend,
    next,
    nextAll,
    prev,
    prevAll,
    parent,
    parents,
    closest,
    find,
    children,
    filter,
    remove
  };
  Object.keys(Methods).forEach(function(methodName) {
    Object.defineProperty($2.fn, methodName, {
      value: Methods[methodName],
      writable: true
    });
  });
  var dom_default = $2;

  // node_modules/swiper/esm/utils/utils.js
  function deleteProps(obj) {
    var object = obj;
    Object.keys(object).forEach(function(key) {
      try {
        object[key] = null;
      } catch (e) {
      }
      try {
        delete object[key];
      } catch (e) {
      }
    });
  }
  function nextTick(callback, delay) {
    if (delay === void 0) {
      delay = 0;
    }
    return setTimeout(callback, delay);
  }
  function now() {
    return Date.now();
  }
  function getComputedStyle2(el) {
    var window2 = getWindow();
    var style;
    if (window2.getComputedStyle) {
      style = window2.getComputedStyle(el, null);
    }
    if (!style && el.currentStyle) {
      style = el.currentStyle;
    }
    if (!style) {
      style = el.style;
    }
    return style;
  }
  function getTranslate(el, axis) {
    if (axis === void 0) {
      axis = "x";
    }
    var window2 = getWindow();
    var matrix;
    var curTransform;
    var transformMatrix;
    var curStyle = getComputedStyle2(el, null);
    if (window2.WebKitCSSMatrix) {
      curTransform = curStyle.transform || curStyle.webkitTransform;
      if (curTransform.split(",").length > 6) {
        curTransform = curTransform.split(", ").map(function(a) {
          return a.replace(",", ".");
        }).join(", ");
      }
      transformMatrix = new window2.WebKitCSSMatrix(curTransform === "none" ? "" : curTransform);
    } else {
      transformMatrix = curStyle.MozTransform || curStyle.OTransform || curStyle.MsTransform || curStyle.msTransform || curStyle.transform || curStyle.getPropertyValue("transform").replace("translate(", "matrix(1, 0, 0, 1,");
      matrix = transformMatrix.toString().split(",");
    }
    if (axis === "x") {
      if (window2.WebKitCSSMatrix)
        curTransform = transformMatrix.m41;
      else if (matrix.length === 16)
        curTransform = parseFloat(matrix[12]);
      else
        curTransform = parseFloat(matrix[4]);
    }
    if (axis === "y") {
      if (window2.WebKitCSSMatrix)
        curTransform = transformMatrix.m42;
      else if (matrix.length === 16)
        curTransform = parseFloat(matrix[13]);
      else
        curTransform = parseFloat(matrix[5]);
    }
    return curTransform || 0;
  }
  function isObject2(o) {
    return typeof o === "object" && o !== null && o.constructor && Object.prototype.toString.call(o).slice(8, -1) === "Object";
  }
  function extend2() {
    var to = Object(arguments.length <= 0 ? void 0 : arguments[0]);
    var noExtend = ["__proto__", "constructor", "prototype"];
    for (var i = 1; i < arguments.length; i += 1) {
      var nextSource = i < 0 || arguments.length <= i ? void 0 : arguments[i];
      if (nextSource !== void 0 && nextSource !== null) {
        var keysArray = Object.keys(Object(nextSource)).filter(function(key) {
          return noExtend.indexOf(key) < 0;
        });
        for (var nextIndex = 0, len = keysArray.length; nextIndex < len; nextIndex += 1) {
          var nextKey = keysArray[nextIndex];
          var desc = Object.getOwnPropertyDescriptor(nextSource, nextKey);
          if (desc !== void 0 && desc.enumerable) {
            if (isObject2(to[nextKey]) && isObject2(nextSource[nextKey])) {
              if (nextSource[nextKey].__swiper__) {
                to[nextKey] = nextSource[nextKey];
              } else {
                extend2(to[nextKey], nextSource[nextKey]);
              }
            } else if (!isObject2(to[nextKey]) && isObject2(nextSource[nextKey])) {
              to[nextKey] = {};
              if (nextSource[nextKey].__swiper__) {
                to[nextKey] = nextSource[nextKey];
              } else {
                extend2(to[nextKey], nextSource[nextKey]);
              }
            } else {
              to[nextKey] = nextSource[nextKey];
            }
          }
        }
      }
    }
    return to;
  }
  function bindModuleMethods(instance, obj) {
    Object.keys(obj).forEach(function(key) {
      if (isObject2(obj[key])) {
        Object.keys(obj[key]).forEach(function(subKey) {
          if (typeof obj[key][subKey] === "function") {
            obj[key][subKey] = obj[key][subKey].bind(instance);
          }
        });
      }
      instance[key] = obj[key];
    });
  }
  function classesToSelector(classes) {
    if (classes === void 0) {
      classes = "";
    }
    return "." + classes.trim().replace(/([\.:\/])/g, "\\$1").replace(/ /g, ".");
  }
  function createElementIfNotDefined($container, params, createElements, checkProps) {
    var document2 = getDocument();
    if (createElements) {
      Object.keys(checkProps).forEach(function(key) {
        if (!params[key] && params.auto === true) {
          var element = document2.createElement("div");
          element.className = checkProps[key];
          $container.append(element);
          params[key] = element;
        }
      });
    }
    return params;
  }

  // node_modules/swiper/esm/utils/get-support.js
  var support;
  function calcSupport() {
    var window2 = getWindow();
    var document2 = getDocument();
    return {
      touch: !!("ontouchstart" in window2 || window2.DocumentTouch && document2 instanceof window2.DocumentTouch),
      pointerEvents: !!window2.PointerEvent && "maxTouchPoints" in window2.navigator && window2.navigator.maxTouchPoints >= 0,
      observer: function checkObserver() {
        return "MutationObserver" in window2 || "WebkitMutationObserver" in window2;
      }(),
      passiveListener: function checkPassiveListener() {
        var supportsPassive = false;
        try {
          var opts = Object.defineProperty({}, "passive", {
            get: function get() {
              supportsPassive = true;
            }
          });
          window2.addEventListener("testPassiveListener", null, opts);
        } catch (e) {
        }
        return supportsPassive;
      }(),
      gestures: function checkGestures() {
        return "ongesturestart" in window2;
      }()
    };
  }
  function getSupport() {
    if (!support) {
      support = calcSupport();
    }
    return support;
  }

  // node_modules/swiper/esm/utils/get-device.js
  var device;
  function calcDevice(_temp) {
    var _ref = _temp === void 0 ? {} : _temp, userAgent = _ref.userAgent;
    var support2 = getSupport();
    var window2 = getWindow();
    var platform = window2.navigator.platform;
    var ua = userAgent || window2.navigator.userAgent;
    var device2 = {
      ios: false,
      android: false
    };
    var screenWidth = window2.screen.width;
    var screenHeight = window2.screen.height;
    var android = ua.match(/(Android);?[\s\/]+([\d.]+)?/);
    var ipad = ua.match(/(iPad).*OS\s([\d_]+)/);
    var ipod = ua.match(/(iPod)(.*OS\s([\d_]+))?/);
    var iphone = !ipad && ua.match(/(iPhone\sOS|iOS)\s([\d_]+)/);
    var windows = platform === "Win32";
    var macos = platform === "MacIntel";
    var iPadScreens = ["1024x1366", "1366x1024", "834x1194", "1194x834", "834x1112", "1112x834", "768x1024", "1024x768", "820x1180", "1180x820", "810x1080", "1080x810"];
    if (!ipad && macos && support2.touch && iPadScreens.indexOf(screenWidth + "x" + screenHeight) >= 0) {
      ipad = ua.match(/(Version)\/([\d.]+)/);
      if (!ipad)
        ipad = [0, 1, "13_0_0"];
      macos = false;
    }
    if (android && !windows) {
      device2.os = "android";
      device2.android = true;
    }
    if (ipad || iphone || ipod) {
      device2.os = "ios";
      device2.ios = true;
    }
    return device2;
  }
  function getDevice(overrides) {
    if (overrides === void 0) {
      overrides = {};
    }
    if (!device) {
      device = calcDevice(overrides);
    }
    return device;
  }

  // node_modules/swiper/esm/utils/get-browser.js
  var browser;
  function calcBrowser() {
    var window2 = getWindow();
    function isSafari() {
      var ua = window2.navigator.userAgent.toLowerCase();
      return ua.indexOf("safari") >= 0 && ua.indexOf("chrome") < 0 && ua.indexOf("android") < 0;
    }
    return {
      isEdge: !!window2.navigator.userAgent.match(/Edge/g),
      isSafari: isSafari(),
      isWebView: /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(window2.navigator.userAgent)
    };
  }
  function getBrowser() {
    if (!browser) {
      browser = calcBrowser();
    }
    return browser;
  }

  // node_modules/swiper/esm/modules/resize/resize.js
  var supportsResizeObserver = function supportsResizeObserver2() {
    var window2 = getWindow();
    return typeof window2.ResizeObserver !== "undefined";
  };
  var resize_default = {
    name: "resize",
    create: function create() {
      var swiper = this;
      extend2(swiper, {
        resize: {
          observer: null,
          createObserver: function createObserver() {
            if (!swiper || swiper.destroyed || !swiper.initialized)
              return;
            swiper.resize.observer = new ResizeObserver(function(entries) {
              var width = swiper.width, height = swiper.height;
              var newWidth = width;
              var newHeight = height;
              entries.forEach(function(_ref) {
                var contentBoxSize = _ref.contentBoxSize, contentRect = _ref.contentRect, target = _ref.target;
                if (target && target !== swiper.el)
                  return;
                newWidth = contentRect ? contentRect.width : (contentBoxSize[0] || contentBoxSize).inlineSize;
                newHeight = contentRect ? contentRect.height : (contentBoxSize[0] || contentBoxSize).blockSize;
              });
              if (newWidth !== width || newHeight !== height) {
                swiper.resize.resizeHandler();
              }
            });
            swiper.resize.observer.observe(swiper.el);
          },
          removeObserver: function removeObserver() {
            if (swiper.resize.observer && swiper.resize.observer.unobserve && swiper.el) {
              swiper.resize.observer.unobserve(swiper.el);
              swiper.resize.observer = null;
            }
          },
          resizeHandler: function resizeHandler() {
            if (!swiper || swiper.destroyed || !swiper.initialized)
              return;
            swiper.emit("beforeResize");
            swiper.emit("resize");
          },
          orientationChangeHandler: function orientationChangeHandler() {
            if (!swiper || swiper.destroyed || !swiper.initialized)
              return;
            swiper.emit("orientationchange");
          }
        }
      });
    },
    on: {
      init: function init(swiper) {
        var window2 = getWindow();
        if (swiper.params.resizeObserver && supportsResizeObserver()) {
          swiper.resize.createObserver();
          return;
        }
        window2.addEventListener("resize", swiper.resize.resizeHandler);
        window2.addEventListener("orientationchange", swiper.resize.orientationChangeHandler);
      },
      destroy: function destroy(swiper) {
        var window2 = getWindow();
        swiper.resize.removeObserver();
        window2.removeEventListener("resize", swiper.resize.resizeHandler);
        window2.removeEventListener("orientationchange", swiper.resize.orientationChangeHandler);
      }
    }
  };

  // node_modules/swiper/esm/modules/observer/observer.js
  function _extends() {
    _extends = Object.assign || function(target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];
        for (var key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          }
        }
      }
      return target;
    };
    return _extends.apply(this, arguments);
  }
  var Observer = {
    attach: function attach(target, options) {
      if (options === void 0) {
        options = {};
      }
      var window2 = getWindow();
      var swiper = this;
      var ObserverFunc = window2.MutationObserver || window2.WebkitMutationObserver;
      var observer = new ObserverFunc(function(mutations) {
        if (mutations.length === 1) {
          swiper.emit("observerUpdate", mutations[0]);
          return;
        }
        var observerUpdate = function observerUpdate2() {
          swiper.emit("observerUpdate", mutations[0]);
        };
        if (window2.requestAnimationFrame) {
          window2.requestAnimationFrame(observerUpdate);
        } else {
          window2.setTimeout(observerUpdate, 0);
        }
      });
      observer.observe(target, {
        attributes: typeof options.attributes === "undefined" ? true : options.attributes,
        childList: typeof options.childList === "undefined" ? true : options.childList,
        characterData: typeof options.characterData === "undefined" ? true : options.characterData
      });
      swiper.observer.observers.push(observer);
    },
    init: function init2() {
      var swiper = this;
      if (!swiper.support.observer || !swiper.params.observer)
        return;
      if (swiper.params.observeParents) {
        var containerParents = swiper.$el.parents();
        for (var i = 0; i < containerParents.length; i += 1) {
          swiper.observer.attach(containerParents[i]);
        }
      }
      swiper.observer.attach(swiper.$el[0], {
        childList: swiper.params.observeSlideChildren
      });
      swiper.observer.attach(swiper.$wrapperEl[0], {
        attributes: false
      });
    },
    destroy: function destroy2() {
      var swiper = this;
      swiper.observer.observers.forEach(function(observer) {
        observer.disconnect();
      });
      swiper.observer.observers = [];
    }
  };
  var observer_default = {
    name: "observer",
    params: {
      observer: false,
      observeParents: false,
      observeSlideChildren: false
    },
    create: function create2() {
      var swiper = this;
      bindModuleMethods(swiper, {
        observer: _extends({}, Observer, {
          observers: []
        })
      });
    },
    on: {
      init: function init3(swiper) {
        swiper.observer.init();
      },
      destroy: function destroy3(swiper) {
        swiper.observer.destroy();
      }
    }
  };

  // node_modules/swiper/esm/components/core/modular.js
  var modular_default = {
    useParams: function useParams(instanceParams) {
      var instance = this;
      if (!instance.modules)
        return;
      Object.keys(instance.modules).forEach(function(moduleName) {
        var module = instance.modules[moduleName];
        if (module.params) {
          extend2(instanceParams, module.params);
        }
      });
    },
    useModules: function useModules(modulesParams) {
      if (modulesParams === void 0) {
        modulesParams = {};
      }
      var instance = this;
      if (!instance.modules)
        return;
      Object.keys(instance.modules).forEach(function(moduleName) {
        var module = instance.modules[moduleName];
        var moduleParams = modulesParams[moduleName] || {};
        if (module.on && instance.on) {
          Object.keys(module.on).forEach(function(moduleEventName) {
            instance.on(moduleEventName, module.on[moduleEventName]);
          });
        }
        if (module.create) {
          module.create.bind(instance)(moduleParams);
        }
      });
    }
  };

  // node_modules/swiper/esm/components/core/events-emitter.js
  var events_emitter_default = {
    on: function on2(events, handler, priority) {
      var self = this;
      if (typeof handler !== "function")
        return self;
      var method = priority ? "unshift" : "push";
      events.split(" ").forEach(function(event) {
        if (!self.eventsListeners[event])
          self.eventsListeners[event] = [];
        self.eventsListeners[event][method](handler);
      });
      return self;
    },
    once: function once(events, handler, priority) {
      var self = this;
      if (typeof handler !== "function")
        return self;
      function onceHandler() {
        self.off(events, onceHandler);
        if (onceHandler.__emitterProxy) {
          delete onceHandler.__emitterProxy;
        }
        for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }
        handler.apply(self, args);
      }
      onceHandler.__emitterProxy = handler;
      return self.on(events, onceHandler, priority);
    },
    onAny: function onAny(handler, priority) {
      var self = this;
      if (typeof handler !== "function")
        return self;
      var method = priority ? "unshift" : "push";
      if (self.eventsAnyListeners.indexOf(handler) < 0) {
        self.eventsAnyListeners[method](handler);
      }
      return self;
    },
    offAny: function offAny(handler) {
      var self = this;
      if (!self.eventsAnyListeners)
        return self;
      var index2 = self.eventsAnyListeners.indexOf(handler);
      if (index2 >= 0) {
        self.eventsAnyListeners.splice(index2, 1);
      }
      return self;
    },
    off: function off2(events, handler) {
      var self = this;
      if (!self.eventsListeners)
        return self;
      events.split(" ").forEach(function(event) {
        if (typeof handler === "undefined") {
          self.eventsListeners[event] = [];
        } else if (self.eventsListeners[event]) {
          self.eventsListeners[event].forEach(function(eventHandler, index2) {
            if (eventHandler === handler || eventHandler.__emitterProxy && eventHandler.__emitterProxy === handler) {
              self.eventsListeners[event].splice(index2, 1);
            }
          });
        }
      });
      return self;
    },
    emit: function emit() {
      var self = this;
      if (!self.eventsListeners)
        return self;
      var events;
      var data;
      var context;
      for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        args[_key2] = arguments[_key2];
      }
      if (typeof args[0] === "string" || Array.isArray(args[0])) {
        events = args[0];
        data = args.slice(1, args.length);
        context = self;
      } else {
        events = args[0].events;
        data = args[0].data;
        context = args[0].context || self;
      }
      data.unshift(context);
      var eventsArray = Array.isArray(events) ? events : events.split(" ");
      eventsArray.forEach(function(event) {
        if (self.eventsAnyListeners && self.eventsAnyListeners.length) {
          self.eventsAnyListeners.forEach(function(eventHandler) {
            eventHandler.apply(context, [event].concat(data));
          });
        }
        if (self.eventsListeners && self.eventsListeners[event]) {
          self.eventsListeners[event].forEach(function(eventHandler) {
            eventHandler.apply(context, data);
          });
        }
      });
      return self;
    }
  };

  // node_modules/swiper/esm/components/core/update/updateSize.js
  function updateSize() {
    var swiper = this;
    var width;
    var height;
    var $el = swiper.$el;
    if (typeof swiper.params.width !== "undefined" && swiper.params.width !== null) {
      width = swiper.params.width;
    } else {
      width = $el[0].clientWidth;
    }
    if (typeof swiper.params.height !== "undefined" && swiper.params.height !== null) {
      height = swiper.params.height;
    } else {
      height = $el[0].clientHeight;
    }
    if (width === 0 && swiper.isHorizontal() || height === 0 && swiper.isVertical()) {
      return;
    }
    width = width - parseInt($el.css("padding-left") || 0, 10) - parseInt($el.css("padding-right") || 0, 10);
    height = height - parseInt($el.css("padding-top") || 0, 10) - parseInt($el.css("padding-bottom") || 0, 10);
    if (Number.isNaN(width))
      width = 0;
    if (Number.isNaN(height))
      height = 0;
    extend2(swiper, {
      width,
      height,
      size: swiper.isHorizontal() ? width : height
    });
  }

  // node_modules/swiper/esm/components/core/update/updateSlides.js
  function updateSlides() {
    var swiper = this;
    function getDirectionLabel(property) {
      if (swiper.isHorizontal()) {
        return property;
      }
      return {
        "width": "height",
        "margin-top": "margin-left",
        "margin-bottom ": "margin-right",
        "margin-left": "margin-top",
        "margin-right": "margin-bottom",
        "padding-left": "padding-top",
        "padding-right": "padding-bottom",
        "marginRight": "marginBottom"
      }[property];
    }
    function getDirectionPropertyValue(node, label) {
      return parseFloat(node.getPropertyValue(getDirectionLabel(label)) || 0);
    }
    var params = swiper.params;
    var $wrapperEl = swiper.$wrapperEl, swiperSize = swiper.size, rtl = swiper.rtlTranslate, wrongRTL = swiper.wrongRTL;
    var isVirtual = swiper.virtual && params.virtual.enabled;
    var previousSlidesLength = isVirtual ? swiper.virtual.slides.length : swiper.slides.length;
    var slides = $wrapperEl.children("." + swiper.params.slideClass);
    var slidesLength = isVirtual ? swiper.virtual.slides.length : slides.length;
    var snapGrid = [];
    var slidesGrid = [];
    var slidesSizesGrid = [];
    var offsetBefore = params.slidesOffsetBefore;
    if (typeof offsetBefore === "function") {
      offsetBefore = params.slidesOffsetBefore.call(swiper);
    }
    var offsetAfter = params.slidesOffsetAfter;
    if (typeof offsetAfter === "function") {
      offsetAfter = params.slidesOffsetAfter.call(swiper);
    }
    var previousSnapGridLength = swiper.snapGrid.length;
    var previousSlidesGridLength = swiper.slidesGrid.length;
    var spaceBetween = params.spaceBetween;
    var slidePosition = -offsetBefore;
    var prevSlideSize = 0;
    var index2 = 0;
    if (typeof swiperSize === "undefined") {
      return;
    }
    if (typeof spaceBetween === "string" && spaceBetween.indexOf("%") >= 0) {
      spaceBetween = parseFloat(spaceBetween.replace("%", "")) / 100 * swiperSize;
    }
    swiper.virtualSize = -spaceBetween;
    if (rtl)
      slides.css({
        marginLeft: "",
        marginTop: ""
      });
    else
      slides.css({
        marginRight: "",
        marginBottom: ""
      });
    var slidesNumberEvenToRows;
    if (params.slidesPerColumn > 1) {
      if (Math.floor(slidesLength / params.slidesPerColumn) === slidesLength / swiper.params.slidesPerColumn) {
        slidesNumberEvenToRows = slidesLength;
      } else {
        slidesNumberEvenToRows = Math.ceil(slidesLength / params.slidesPerColumn) * params.slidesPerColumn;
      }
      if (params.slidesPerView !== "auto" && params.slidesPerColumnFill === "row") {
        slidesNumberEvenToRows = Math.max(slidesNumberEvenToRows, params.slidesPerView * params.slidesPerColumn);
      }
    }
    var slideSize;
    var slidesPerColumn = params.slidesPerColumn;
    var slidesPerRow = slidesNumberEvenToRows / slidesPerColumn;
    var numFullColumns = Math.floor(slidesLength / params.slidesPerColumn);
    for (var i = 0; i < slidesLength; i += 1) {
      slideSize = 0;
      var slide = slides.eq(i);
      if (params.slidesPerColumn > 1) {
        var newSlideOrderIndex = void 0;
        var column = void 0;
        var row = void 0;
        if (params.slidesPerColumnFill === "row" && params.slidesPerGroup > 1) {
          var groupIndex = Math.floor(i / (params.slidesPerGroup * params.slidesPerColumn));
          var slideIndexInGroup = i - params.slidesPerColumn * params.slidesPerGroup * groupIndex;
          var columnsInGroup = groupIndex === 0 ? params.slidesPerGroup : Math.min(Math.ceil((slidesLength - groupIndex * slidesPerColumn * params.slidesPerGroup) / slidesPerColumn), params.slidesPerGroup);
          row = Math.floor(slideIndexInGroup / columnsInGroup);
          column = slideIndexInGroup - row * columnsInGroup + groupIndex * params.slidesPerGroup;
          newSlideOrderIndex = column + row * slidesNumberEvenToRows / slidesPerColumn;
          slide.css({
            "-webkit-box-ordinal-group": newSlideOrderIndex,
            "-moz-box-ordinal-group": newSlideOrderIndex,
            "-ms-flex-order": newSlideOrderIndex,
            "-webkit-order": newSlideOrderIndex,
            order: newSlideOrderIndex
          });
        } else if (params.slidesPerColumnFill === "column") {
          column = Math.floor(i / slidesPerColumn);
          row = i - column * slidesPerColumn;
          if (column > numFullColumns || column === numFullColumns && row === slidesPerColumn - 1) {
            row += 1;
            if (row >= slidesPerColumn) {
              row = 0;
              column += 1;
            }
          }
        } else {
          row = Math.floor(i / slidesPerRow);
          column = i - row * slidesPerRow;
        }
        slide.css(getDirectionLabel("margin-top"), row !== 0 && params.spaceBetween && params.spaceBetween + "px");
      }
      if (slide.css("display") === "none")
        continue;
      if (params.slidesPerView === "auto") {
        var slideStyles = getComputedStyle(slide[0]);
        var currentTransform = slide[0].style.transform;
        var currentWebKitTransform = slide[0].style.webkitTransform;
        if (currentTransform) {
          slide[0].style.transform = "none";
        }
        if (currentWebKitTransform) {
          slide[0].style.webkitTransform = "none";
        }
        if (params.roundLengths) {
          slideSize = swiper.isHorizontal() ? slide.outerWidth(true) : slide.outerHeight(true);
        } else {
          var width = getDirectionPropertyValue(slideStyles, "width");
          var paddingLeft = getDirectionPropertyValue(slideStyles, "padding-left");
          var paddingRight = getDirectionPropertyValue(slideStyles, "padding-right");
          var marginLeft = getDirectionPropertyValue(slideStyles, "margin-left");
          var marginRight = getDirectionPropertyValue(slideStyles, "margin-right");
          var boxSizing = slideStyles.getPropertyValue("box-sizing");
          if (boxSizing && boxSizing === "border-box") {
            slideSize = width + marginLeft + marginRight;
          } else {
            var _slide$ = slide[0], clientWidth = _slide$.clientWidth, offsetWidth = _slide$.offsetWidth;
            slideSize = width + paddingLeft + paddingRight + marginLeft + marginRight + (offsetWidth - clientWidth);
          }
        }
        if (currentTransform) {
          slide[0].style.transform = currentTransform;
        }
        if (currentWebKitTransform) {
          slide[0].style.webkitTransform = currentWebKitTransform;
        }
        if (params.roundLengths)
          slideSize = Math.floor(slideSize);
      } else {
        slideSize = (swiperSize - (params.slidesPerView - 1) * spaceBetween) / params.slidesPerView;
        if (params.roundLengths)
          slideSize = Math.floor(slideSize);
        if (slides[i]) {
          slides[i].style[getDirectionLabel("width")] = slideSize + "px";
        }
      }
      if (slides[i]) {
        slides[i].swiperSlideSize = slideSize;
      }
      slidesSizesGrid.push(slideSize);
      if (params.centeredSlides) {
        slidePosition = slidePosition + slideSize / 2 + prevSlideSize / 2 + spaceBetween;
        if (prevSlideSize === 0 && i !== 0)
          slidePosition = slidePosition - swiperSize / 2 - spaceBetween;
        if (i === 0)
          slidePosition = slidePosition - swiperSize / 2 - spaceBetween;
        if (Math.abs(slidePosition) < 1 / 1e3)
          slidePosition = 0;
        if (params.roundLengths)
          slidePosition = Math.floor(slidePosition);
        if (index2 % params.slidesPerGroup === 0)
          snapGrid.push(slidePosition);
        slidesGrid.push(slidePosition);
      } else {
        if (params.roundLengths)
          slidePosition = Math.floor(slidePosition);
        if ((index2 - Math.min(swiper.params.slidesPerGroupSkip, index2)) % swiper.params.slidesPerGroup === 0)
          snapGrid.push(slidePosition);
        slidesGrid.push(slidePosition);
        slidePosition = slidePosition + slideSize + spaceBetween;
      }
      swiper.virtualSize += slideSize + spaceBetween;
      prevSlideSize = slideSize;
      index2 += 1;
    }
    swiper.virtualSize = Math.max(swiper.virtualSize, swiperSize) + offsetAfter;
    var newSlidesGrid;
    if (rtl && wrongRTL && (params.effect === "slide" || params.effect === "coverflow")) {
      $wrapperEl.css({
        width: swiper.virtualSize + params.spaceBetween + "px"
      });
    }
    if (params.setWrapperSize) {
      var _$wrapperEl$css;
      $wrapperEl.css((_$wrapperEl$css = {}, _$wrapperEl$css[getDirectionLabel("width")] = swiper.virtualSize + params.spaceBetween + "px", _$wrapperEl$css));
    }
    if (params.slidesPerColumn > 1) {
      var _$wrapperEl$css2;
      swiper.virtualSize = (slideSize + params.spaceBetween) * slidesNumberEvenToRows;
      swiper.virtualSize = Math.ceil(swiper.virtualSize / params.slidesPerColumn) - params.spaceBetween;
      $wrapperEl.css((_$wrapperEl$css2 = {}, _$wrapperEl$css2[getDirectionLabel("width")] = swiper.virtualSize + params.spaceBetween + "px", _$wrapperEl$css2));
      if (params.centeredSlides) {
        newSlidesGrid = [];
        for (var _i = 0; _i < snapGrid.length; _i += 1) {
          var slidesGridItem = snapGrid[_i];
          if (params.roundLengths)
            slidesGridItem = Math.floor(slidesGridItem);
          if (snapGrid[_i] < swiper.virtualSize + snapGrid[0])
            newSlidesGrid.push(slidesGridItem);
        }
        snapGrid = newSlidesGrid;
      }
    }
    if (!params.centeredSlides) {
      newSlidesGrid = [];
      for (var _i2 = 0; _i2 < snapGrid.length; _i2 += 1) {
        var _slidesGridItem = snapGrid[_i2];
        if (params.roundLengths)
          _slidesGridItem = Math.floor(_slidesGridItem);
        if (snapGrid[_i2] <= swiper.virtualSize - swiperSize) {
          newSlidesGrid.push(_slidesGridItem);
        }
      }
      snapGrid = newSlidesGrid;
      if (Math.floor(swiper.virtualSize - swiperSize) - Math.floor(snapGrid[snapGrid.length - 1]) > 1) {
        snapGrid.push(swiper.virtualSize - swiperSize);
      }
    }
    if (snapGrid.length === 0)
      snapGrid = [0];
    if (params.spaceBetween !== 0) {
      var _slides$filter$css;
      var key = swiper.isHorizontal() && rtl ? "marginLeft" : getDirectionLabel("marginRight");
      slides.filter(function(_, slideIndex) {
        if (!params.cssMode)
          return true;
        if (slideIndex === slides.length - 1) {
          return false;
        }
        return true;
      }).css((_slides$filter$css = {}, _slides$filter$css[key] = spaceBetween + "px", _slides$filter$css));
    }
    if (params.centeredSlides && params.centeredSlidesBounds) {
      var allSlidesSize = 0;
      slidesSizesGrid.forEach(function(slideSizeValue) {
        allSlidesSize += slideSizeValue + (params.spaceBetween ? params.spaceBetween : 0);
      });
      allSlidesSize -= params.spaceBetween;
      var maxSnap = allSlidesSize - swiperSize;
      snapGrid = snapGrid.map(function(snap) {
        if (snap < 0)
          return -offsetBefore;
        if (snap > maxSnap)
          return maxSnap + offsetAfter;
        return snap;
      });
    }
    if (params.centerInsufficientSlides) {
      var _allSlidesSize = 0;
      slidesSizesGrid.forEach(function(slideSizeValue) {
        _allSlidesSize += slideSizeValue + (params.spaceBetween ? params.spaceBetween : 0);
      });
      _allSlidesSize -= params.spaceBetween;
      if (_allSlidesSize < swiperSize) {
        var allSlidesOffset = (swiperSize - _allSlidesSize) / 2;
        snapGrid.forEach(function(snap, snapIndex) {
          snapGrid[snapIndex] = snap - allSlidesOffset;
        });
        slidesGrid.forEach(function(snap, snapIndex) {
          slidesGrid[snapIndex] = snap + allSlidesOffset;
        });
      }
    }
    extend2(swiper, {
      slides,
      snapGrid,
      slidesGrid,
      slidesSizesGrid
    });
    if (slidesLength !== previousSlidesLength) {
      swiper.emit("slidesLengthChange");
    }
    if (snapGrid.length !== previousSnapGridLength) {
      if (swiper.params.watchOverflow)
        swiper.checkOverflow();
      swiper.emit("snapGridLengthChange");
    }
    if (slidesGrid.length !== previousSlidesGridLength) {
      swiper.emit("slidesGridLengthChange");
    }
    if (params.watchSlidesProgress || params.watchSlidesVisibility) {
      swiper.updateSlidesOffset();
    }
  }

  // node_modules/swiper/esm/components/core/update/updateAutoHeight.js
  function updateAutoHeight(speed) {
    var swiper = this;
    var activeSlides = [];
    var isVirtual = swiper.virtual && swiper.params.virtual.enabled;
    var newHeight = 0;
    var i;
    if (typeof speed === "number") {
      swiper.setTransition(speed);
    } else if (speed === true) {
      swiper.setTransition(swiper.params.speed);
    }
    var getSlideByIndex = function getSlideByIndex2(index3) {
      if (isVirtual) {
        return swiper.slides.filter(function(el) {
          return parseInt(el.getAttribute("data-swiper-slide-index"), 10) === index3;
        })[0];
      }
      return swiper.slides.eq(index3)[0];
    };
    if (swiper.params.slidesPerView !== "auto" && swiper.params.slidesPerView > 1) {
      if (swiper.params.centeredSlides) {
        swiper.visibleSlides.each(function(slide) {
          activeSlides.push(slide);
        });
      } else {
        for (i = 0; i < Math.ceil(swiper.params.slidesPerView); i += 1) {
          var index2 = swiper.activeIndex + i;
          if (index2 > swiper.slides.length && !isVirtual)
            break;
          activeSlides.push(getSlideByIndex(index2));
        }
      }
    } else {
      activeSlides.push(getSlideByIndex(swiper.activeIndex));
    }
    for (i = 0; i < activeSlides.length; i += 1) {
      if (typeof activeSlides[i] !== "undefined") {
        var height = activeSlides[i].offsetHeight;
        newHeight = height > newHeight ? height : newHeight;
      }
    }
    if (newHeight)
      swiper.$wrapperEl.css("height", newHeight + "px");
  }

  // node_modules/swiper/esm/components/core/update/updateSlidesOffset.js
  function updateSlidesOffset() {
    var swiper = this;
    var slides = swiper.slides;
    for (var i = 0; i < slides.length; i += 1) {
      slides[i].swiperSlideOffset = swiper.isHorizontal() ? slides[i].offsetLeft : slides[i].offsetTop;
    }
  }

  // node_modules/swiper/esm/components/core/update/updateSlidesProgress.js
  function updateSlidesProgress(translate) {
    if (translate === void 0) {
      translate = this && this.translate || 0;
    }
    var swiper = this;
    var params = swiper.params;
    var slides = swiper.slides, rtl = swiper.rtlTranslate;
    if (slides.length === 0)
      return;
    if (typeof slides[0].swiperSlideOffset === "undefined")
      swiper.updateSlidesOffset();
    var offsetCenter = -translate;
    if (rtl)
      offsetCenter = translate;
    slides.removeClass(params.slideVisibleClass);
    swiper.visibleSlidesIndexes = [];
    swiper.visibleSlides = [];
    for (var i = 0; i < slides.length; i += 1) {
      var slide = slides[i];
      var slideProgress = (offsetCenter + (params.centeredSlides ? swiper.minTranslate() : 0) - slide.swiperSlideOffset) / (slide.swiperSlideSize + params.spaceBetween);
      if (params.watchSlidesVisibility || params.centeredSlides && params.autoHeight) {
        var slideBefore = -(offsetCenter - slide.swiperSlideOffset);
        var slideAfter = slideBefore + swiper.slidesSizesGrid[i];
        var isVisible = slideBefore >= 0 && slideBefore < swiper.size - 1 || slideAfter > 1 && slideAfter <= swiper.size || slideBefore <= 0 && slideAfter >= swiper.size;
        if (isVisible) {
          swiper.visibleSlides.push(slide);
          swiper.visibleSlidesIndexes.push(i);
          slides.eq(i).addClass(params.slideVisibleClass);
        }
      }
      slide.progress = rtl ? -slideProgress : slideProgress;
    }
    swiper.visibleSlides = dom_default(swiper.visibleSlides);
  }

  // node_modules/swiper/esm/components/core/update/updateProgress.js
  function updateProgress(translate) {
    var swiper = this;
    if (typeof translate === "undefined") {
      var multiplier = swiper.rtlTranslate ? -1 : 1;
      translate = swiper && swiper.translate && swiper.translate * multiplier || 0;
    }
    var params = swiper.params;
    var translatesDiff = swiper.maxTranslate() - swiper.minTranslate();
    var progress = swiper.progress, isBeginning = swiper.isBeginning, isEnd = swiper.isEnd;
    var wasBeginning = isBeginning;
    var wasEnd = isEnd;
    if (translatesDiff === 0) {
      progress = 0;
      isBeginning = true;
      isEnd = true;
    } else {
      progress = (translate - swiper.minTranslate()) / translatesDiff;
      isBeginning = progress <= 0;
      isEnd = progress >= 1;
    }
    extend2(swiper, {
      progress,
      isBeginning,
      isEnd
    });
    if (params.watchSlidesProgress || params.watchSlidesVisibility || params.centeredSlides && params.autoHeight)
      swiper.updateSlidesProgress(translate);
    if (isBeginning && !wasBeginning) {
      swiper.emit("reachBeginning toEdge");
    }
    if (isEnd && !wasEnd) {
      swiper.emit("reachEnd toEdge");
    }
    if (wasBeginning && !isBeginning || wasEnd && !isEnd) {
      swiper.emit("fromEdge");
    }
    swiper.emit("progress", progress);
  }

  // node_modules/swiper/esm/components/core/update/updateSlidesClasses.js
  function updateSlidesClasses() {
    var swiper = this;
    var slides = swiper.slides, params = swiper.params, $wrapperEl = swiper.$wrapperEl, activeIndex = swiper.activeIndex, realIndex = swiper.realIndex;
    var isVirtual = swiper.virtual && params.virtual.enabled;
    slides.removeClass(params.slideActiveClass + " " + params.slideNextClass + " " + params.slidePrevClass + " " + params.slideDuplicateActiveClass + " " + params.slideDuplicateNextClass + " " + params.slideDuplicatePrevClass);
    var activeSlide;
    if (isVirtual) {
      activeSlide = swiper.$wrapperEl.find("." + params.slideClass + '[data-swiper-slide-index="' + activeIndex + '"]');
    } else {
      activeSlide = slides.eq(activeIndex);
    }
    activeSlide.addClass(params.slideActiveClass);
    if (params.loop) {
      if (activeSlide.hasClass(params.slideDuplicateClass)) {
        $wrapperEl.children("." + params.slideClass + ":not(." + params.slideDuplicateClass + ')[data-swiper-slide-index="' + realIndex + '"]').addClass(params.slideDuplicateActiveClass);
      } else {
        $wrapperEl.children("." + params.slideClass + "." + params.slideDuplicateClass + '[data-swiper-slide-index="' + realIndex + '"]').addClass(params.slideDuplicateActiveClass);
      }
    }
    var nextSlide = activeSlide.nextAll("." + params.slideClass).eq(0).addClass(params.slideNextClass);
    if (params.loop && nextSlide.length === 0) {
      nextSlide = slides.eq(0);
      nextSlide.addClass(params.slideNextClass);
    }
    var prevSlide = activeSlide.prevAll("." + params.slideClass).eq(0).addClass(params.slidePrevClass);
    if (params.loop && prevSlide.length === 0) {
      prevSlide = slides.eq(-1);
      prevSlide.addClass(params.slidePrevClass);
    }
    if (params.loop) {
      if (nextSlide.hasClass(params.slideDuplicateClass)) {
        $wrapperEl.children("." + params.slideClass + ":not(." + params.slideDuplicateClass + ')[data-swiper-slide-index="' + nextSlide.attr("data-swiper-slide-index") + '"]').addClass(params.slideDuplicateNextClass);
      } else {
        $wrapperEl.children("." + params.slideClass + "." + params.slideDuplicateClass + '[data-swiper-slide-index="' + nextSlide.attr("data-swiper-slide-index") + '"]').addClass(params.slideDuplicateNextClass);
      }
      if (prevSlide.hasClass(params.slideDuplicateClass)) {
        $wrapperEl.children("." + params.slideClass + ":not(." + params.slideDuplicateClass + ')[data-swiper-slide-index="' + prevSlide.attr("data-swiper-slide-index") + '"]').addClass(params.slideDuplicatePrevClass);
      } else {
        $wrapperEl.children("." + params.slideClass + "." + params.slideDuplicateClass + '[data-swiper-slide-index="' + prevSlide.attr("data-swiper-slide-index") + '"]').addClass(params.slideDuplicatePrevClass);
      }
    }
    swiper.emitSlidesClasses();
  }

  // node_modules/swiper/esm/components/core/update/updateActiveIndex.js
  function updateActiveIndex(newActiveIndex) {
    var swiper = this;
    var translate = swiper.rtlTranslate ? swiper.translate : -swiper.translate;
    var slidesGrid = swiper.slidesGrid, snapGrid = swiper.snapGrid, params = swiper.params, previousIndex = swiper.activeIndex, previousRealIndex = swiper.realIndex, previousSnapIndex = swiper.snapIndex;
    var activeIndex = newActiveIndex;
    var snapIndex;
    if (typeof activeIndex === "undefined") {
      for (var i = 0; i < slidesGrid.length; i += 1) {
        if (typeof slidesGrid[i + 1] !== "undefined") {
          if (translate >= slidesGrid[i] && translate < slidesGrid[i + 1] - (slidesGrid[i + 1] - slidesGrid[i]) / 2) {
            activeIndex = i;
          } else if (translate >= slidesGrid[i] && translate < slidesGrid[i + 1]) {
            activeIndex = i + 1;
          }
        } else if (translate >= slidesGrid[i]) {
          activeIndex = i;
        }
      }
      if (params.normalizeSlideIndex) {
        if (activeIndex < 0 || typeof activeIndex === "undefined")
          activeIndex = 0;
      }
    }
    if (snapGrid.indexOf(translate) >= 0) {
      snapIndex = snapGrid.indexOf(translate);
    } else {
      var skip = Math.min(params.slidesPerGroupSkip, activeIndex);
      snapIndex = skip + Math.floor((activeIndex - skip) / params.slidesPerGroup);
    }
    if (snapIndex >= snapGrid.length)
      snapIndex = snapGrid.length - 1;
    if (activeIndex === previousIndex) {
      if (snapIndex !== previousSnapIndex) {
        swiper.snapIndex = snapIndex;
        swiper.emit("snapIndexChange");
      }
      return;
    }
    var realIndex = parseInt(swiper.slides.eq(activeIndex).attr("data-swiper-slide-index") || activeIndex, 10);
    extend2(swiper, {
      snapIndex,
      realIndex,
      previousIndex,
      activeIndex
    });
    swiper.emit("activeIndexChange");
    swiper.emit("snapIndexChange");
    if (previousRealIndex !== realIndex) {
      swiper.emit("realIndexChange");
    }
    if (swiper.initialized || swiper.params.runCallbacksOnInit) {
      swiper.emit("slideChange");
    }
  }

  // node_modules/swiper/esm/components/core/update/updateClickedSlide.js
  function updateClickedSlide(e) {
    var swiper = this;
    var params = swiper.params;
    var slide = dom_default(e.target).closest("." + params.slideClass)[0];
    var slideFound = false;
    var slideIndex;
    if (slide) {
      for (var i = 0; i < swiper.slides.length; i += 1) {
        if (swiper.slides[i] === slide) {
          slideFound = true;
          slideIndex = i;
          break;
        }
      }
    }
    if (slide && slideFound) {
      swiper.clickedSlide = slide;
      if (swiper.virtual && swiper.params.virtual.enabled) {
        swiper.clickedIndex = parseInt(dom_default(slide).attr("data-swiper-slide-index"), 10);
      } else {
        swiper.clickedIndex = slideIndex;
      }
    } else {
      swiper.clickedSlide = void 0;
      swiper.clickedIndex = void 0;
      return;
    }
    if (params.slideToClickedSlide && swiper.clickedIndex !== void 0 && swiper.clickedIndex !== swiper.activeIndex) {
      swiper.slideToClickedSlide();
    }
  }

  // node_modules/swiper/esm/components/core/update/index.js
  var update_default = {
    updateSize,
    updateSlides,
    updateAutoHeight,
    updateSlidesOffset,
    updateSlidesProgress,
    updateProgress,
    updateSlidesClasses,
    updateActiveIndex,
    updateClickedSlide
  };

  // node_modules/swiper/esm/components/core/translate/getTranslate.js
  function getSwiperTranslate(axis) {
    if (axis === void 0) {
      axis = this.isHorizontal() ? "x" : "y";
    }
    var swiper = this;
    var params = swiper.params, rtl = swiper.rtlTranslate, translate = swiper.translate, $wrapperEl = swiper.$wrapperEl;
    if (params.virtualTranslate) {
      return rtl ? -translate : translate;
    }
    if (params.cssMode) {
      return translate;
    }
    var currentTranslate = getTranslate($wrapperEl[0], axis);
    if (rtl)
      currentTranslate = -currentTranslate;
    return currentTranslate || 0;
  }

  // node_modules/swiper/esm/components/core/translate/setTranslate.js
  function setTranslate(translate, byController) {
    var swiper = this;
    var rtl = swiper.rtlTranslate, params = swiper.params, $wrapperEl = swiper.$wrapperEl, wrapperEl = swiper.wrapperEl, progress = swiper.progress;
    var x = 0;
    var y = 0;
    var z = 0;
    if (swiper.isHorizontal()) {
      x = rtl ? -translate : translate;
    } else {
      y = translate;
    }
    if (params.roundLengths) {
      x = Math.floor(x);
      y = Math.floor(y);
    }
    if (params.cssMode) {
      wrapperEl[swiper.isHorizontal() ? "scrollLeft" : "scrollTop"] = swiper.isHorizontal() ? -x : -y;
    } else if (!params.virtualTranslate) {
      $wrapperEl.transform("translate3d(" + x + "px, " + y + "px, " + z + "px)");
    }
    swiper.previousTranslate = swiper.translate;
    swiper.translate = swiper.isHorizontal() ? x : y;
    var newProgress;
    var translatesDiff = swiper.maxTranslate() - swiper.minTranslate();
    if (translatesDiff === 0) {
      newProgress = 0;
    } else {
      newProgress = (translate - swiper.minTranslate()) / translatesDiff;
    }
    if (newProgress !== progress) {
      swiper.updateProgress(translate);
    }
    swiper.emit("setTranslate", swiper.translate, byController);
  }

  // node_modules/swiper/esm/components/core/translate/minTranslate.js
  function minTranslate() {
    return -this.snapGrid[0];
  }

  // node_modules/swiper/esm/components/core/translate/maxTranslate.js
  function maxTranslate() {
    return -this.snapGrid[this.snapGrid.length - 1];
  }

  // node_modules/swiper/esm/components/core/translate/translateTo.js
  function translateTo(translate, speed, runCallbacks, translateBounds, internal) {
    if (translate === void 0) {
      translate = 0;
    }
    if (speed === void 0) {
      speed = this.params.speed;
    }
    if (runCallbacks === void 0) {
      runCallbacks = true;
    }
    if (translateBounds === void 0) {
      translateBounds = true;
    }
    var swiper = this;
    var params = swiper.params, wrapperEl = swiper.wrapperEl;
    if (swiper.animating && params.preventInteractionOnTransition) {
      return false;
    }
    var minTranslate2 = swiper.minTranslate();
    var maxTranslate2 = swiper.maxTranslate();
    var newTranslate;
    if (translateBounds && translate > minTranslate2)
      newTranslate = minTranslate2;
    else if (translateBounds && translate < maxTranslate2)
      newTranslate = maxTranslate2;
    else
      newTranslate = translate;
    swiper.updateProgress(newTranslate);
    if (params.cssMode) {
      var isH = swiper.isHorizontal();
      if (speed === 0) {
        wrapperEl[isH ? "scrollLeft" : "scrollTop"] = -newTranslate;
      } else {
        if (wrapperEl.scrollTo) {
          var _wrapperEl$scrollTo;
          wrapperEl.scrollTo((_wrapperEl$scrollTo = {}, _wrapperEl$scrollTo[isH ? "left" : "top"] = -newTranslate, _wrapperEl$scrollTo.behavior = "smooth", _wrapperEl$scrollTo));
        } else {
          wrapperEl[isH ? "scrollLeft" : "scrollTop"] = -newTranslate;
        }
      }
      return true;
    }
    if (speed === 0) {
      swiper.setTransition(0);
      swiper.setTranslate(newTranslate);
      if (runCallbacks) {
        swiper.emit("beforeTransitionStart", speed, internal);
        swiper.emit("transitionEnd");
      }
    } else {
      swiper.setTransition(speed);
      swiper.setTranslate(newTranslate);
      if (runCallbacks) {
        swiper.emit("beforeTransitionStart", speed, internal);
        swiper.emit("transitionStart");
      }
      if (!swiper.animating) {
        swiper.animating = true;
        if (!swiper.onTranslateToWrapperTransitionEnd) {
          swiper.onTranslateToWrapperTransitionEnd = function transitionEnd3(e) {
            if (!swiper || swiper.destroyed)
              return;
            if (e.target !== this)
              return;
            swiper.$wrapperEl[0].removeEventListener("transitionend", swiper.onTranslateToWrapperTransitionEnd);
            swiper.$wrapperEl[0].removeEventListener("webkitTransitionEnd", swiper.onTranslateToWrapperTransitionEnd);
            swiper.onTranslateToWrapperTransitionEnd = null;
            delete swiper.onTranslateToWrapperTransitionEnd;
            if (runCallbacks) {
              swiper.emit("transitionEnd");
            }
          };
        }
        swiper.$wrapperEl[0].addEventListener("transitionend", swiper.onTranslateToWrapperTransitionEnd);
        swiper.$wrapperEl[0].addEventListener("webkitTransitionEnd", swiper.onTranslateToWrapperTransitionEnd);
      }
    }
    return true;
  }

  // node_modules/swiper/esm/components/core/translate/index.js
  var translate_default = {
    getTranslate: getSwiperTranslate,
    setTranslate,
    minTranslate,
    maxTranslate,
    translateTo
  };

  // node_modules/swiper/esm/components/core/transition/setTransition.js
  function setTransition(duration, byController) {
    var swiper = this;
    if (!swiper.params.cssMode) {
      swiper.$wrapperEl.transition(duration);
    }
    swiper.emit("setTransition", duration, byController);
  }

  // node_modules/swiper/esm/components/core/transition/transitionStart.js
  function transitionStart(runCallbacks, direction) {
    if (runCallbacks === void 0) {
      runCallbacks = true;
    }
    var swiper = this;
    var activeIndex = swiper.activeIndex, params = swiper.params, previousIndex = swiper.previousIndex;
    if (params.cssMode)
      return;
    if (params.autoHeight) {
      swiper.updateAutoHeight();
    }
    var dir = direction;
    if (!dir) {
      if (activeIndex > previousIndex)
        dir = "next";
      else if (activeIndex < previousIndex)
        dir = "prev";
      else
        dir = "reset";
    }
    swiper.emit("transitionStart");
    if (runCallbacks && activeIndex !== previousIndex) {
      if (dir === "reset") {
        swiper.emit("slideResetTransitionStart");
        return;
      }
      swiper.emit("slideChangeTransitionStart");
      if (dir === "next") {
        swiper.emit("slideNextTransitionStart");
      } else {
        swiper.emit("slidePrevTransitionStart");
      }
    }
  }

  // node_modules/swiper/esm/components/core/transition/transitionEnd.js
  function transitionEnd2(runCallbacks, direction) {
    if (runCallbacks === void 0) {
      runCallbacks = true;
    }
    var swiper = this;
    var activeIndex = swiper.activeIndex, previousIndex = swiper.previousIndex, params = swiper.params;
    swiper.animating = false;
    if (params.cssMode)
      return;
    swiper.setTransition(0);
    var dir = direction;
    if (!dir) {
      if (activeIndex > previousIndex)
        dir = "next";
      else if (activeIndex < previousIndex)
        dir = "prev";
      else
        dir = "reset";
    }
    swiper.emit("transitionEnd");
    if (runCallbacks && activeIndex !== previousIndex) {
      if (dir === "reset") {
        swiper.emit("slideResetTransitionEnd");
        return;
      }
      swiper.emit("slideChangeTransitionEnd");
      if (dir === "next") {
        swiper.emit("slideNextTransitionEnd");
      } else {
        swiper.emit("slidePrevTransitionEnd");
      }
    }
  }

  // node_modules/swiper/esm/components/core/transition/index.js
  var transition_default = {
    setTransition,
    transitionStart,
    transitionEnd: transitionEnd2
  };

  // node_modules/swiper/esm/components/core/slide/slideTo.js
  function slideTo(index2, speed, runCallbacks, internal, initial) {
    if (index2 === void 0) {
      index2 = 0;
    }
    if (speed === void 0) {
      speed = this.params.speed;
    }
    if (runCallbacks === void 0) {
      runCallbacks = true;
    }
    if (typeof index2 !== "number" && typeof index2 !== "string") {
      throw new Error("The 'index' argument cannot have type other than 'number' or 'string'. [" + typeof index2 + "] given.");
    }
    if (typeof index2 === "string") {
      var indexAsNumber = parseInt(index2, 10);
      var isValidNumber = isFinite(indexAsNumber);
      if (!isValidNumber) {
        throw new Error("The passed-in 'index' (string) couldn't be converted to 'number'. [" + index2 + "] given.");
      }
      index2 = indexAsNumber;
    }
    var swiper = this;
    var slideIndex = index2;
    if (slideIndex < 0)
      slideIndex = 0;
    var params = swiper.params, snapGrid = swiper.snapGrid, slidesGrid = swiper.slidesGrid, previousIndex = swiper.previousIndex, activeIndex = swiper.activeIndex, rtl = swiper.rtlTranslate, wrapperEl = swiper.wrapperEl, enabled = swiper.enabled;
    if (swiper.animating && params.preventInteractionOnTransition || !enabled && !internal && !initial) {
      return false;
    }
    var skip = Math.min(swiper.params.slidesPerGroupSkip, slideIndex);
    var snapIndex = skip + Math.floor((slideIndex - skip) / swiper.params.slidesPerGroup);
    if (snapIndex >= snapGrid.length)
      snapIndex = snapGrid.length - 1;
    if ((activeIndex || params.initialSlide || 0) === (previousIndex || 0) && runCallbacks) {
      swiper.emit("beforeSlideChangeStart");
    }
    var translate = -snapGrid[snapIndex];
    swiper.updateProgress(translate);
    if (params.normalizeSlideIndex) {
      for (var i = 0; i < slidesGrid.length; i += 1) {
        var normalizedTranslate = -Math.floor(translate * 100);
        var normalizedGird = Math.floor(slidesGrid[i] * 100);
        var normalizedGridNext = Math.floor(slidesGrid[i + 1] * 100);
        if (typeof slidesGrid[i + 1] !== "undefined") {
          if (normalizedTranslate >= normalizedGird && normalizedTranslate < normalizedGridNext - (normalizedGridNext - normalizedGird) / 2) {
            slideIndex = i;
          } else if (normalizedTranslate >= normalizedGird && normalizedTranslate < normalizedGridNext) {
            slideIndex = i + 1;
          }
        } else if (normalizedTranslate >= normalizedGird) {
          slideIndex = i;
        }
      }
    }
    if (swiper.initialized && slideIndex !== activeIndex) {
      if (!swiper.allowSlideNext && translate < swiper.translate && translate < swiper.minTranslate()) {
        return false;
      }
      if (!swiper.allowSlidePrev && translate > swiper.translate && translate > swiper.maxTranslate()) {
        if ((activeIndex || 0) !== slideIndex)
          return false;
      }
    }
    var direction;
    if (slideIndex > activeIndex)
      direction = "next";
    else if (slideIndex < activeIndex)
      direction = "prev";
    else
      direction = "reset";
    if (rtl && -translate === swiper.translate || !rtl && translate === swiper.translate) {
      swiper.updateActiveIndex(slideIndex);
      if (params.autoHeight) {
        swiper.updateAutoHeight();
      }
      swiper.updateSlidesClasses();
      if (params.effect !== "slide") {
        swiper.setTranslate(translate);
      }
      if (direction !== "reset") {
        swiper.transitionStart(runCallbacks, direction);
        swiper.transitionEnd(runCallbacks, direction);
      }
      return false;
    }
    if (params.cssMode) {
      var isH = swiper.isHorizontal();
      var t = -translate;
      if (rtl) {
        t = wrapperEl.scrollWidth - wrapperEl.offsetWidth - t;
      }
      if (speed === 0) {
        wrapperEl[isH ? "scrollLeft" : "scrollTop"] = t;
      } else {
        if (wrapperEl.scrollTo) {
          var _wrapperEl$scrollTo;
          wrapperEl.scrollTo((_wrapperEl$scrollTo = {}, _wrapperEl$scrollTo[isH ? "left" : "top"] = t, _wrapperEl$scrollTo.behavior = "smooth", _wrapperEl$scrollTo));
        } else {
          wrapperEl[isH ? "scrollLeft" : "scrollTop"] = t;
        }
      }
      return true;
    }
    if (speed === 0) {
      swiper.setTransition(0);
      swiper.setTranslate(translate);
      swiper.updateActiveIndex(slideIndex);
      swiper.updateSlidesClasses();
      swiper.emit("beforeTransitionStart", speed, internal);
      swiper.transitionStart(runCallbacks, direction);
      swiper.transitionEnd(runCallbacks, direction);
    } else {
      swiper.setTransition(speed);
      swiper.setTranslate(translate);
      swiper.updateActiveIndex(slideIndex);
      swiper.updateSlidesClasses();
      swiper.emit("beforeTransitionStart", speed, internal);
      swiper.transitionStart(runCallbacks, direction);
      if (!swiper.animating) {
        swiper.animating = true;
        if (!swiper.onSlideToWrapperTransitionEnd) {
          swiper.onSlideToWrapperTransitionEnd = function transitionEnd3(e) {
            if (!swiper || swiper.destroyed)
              return;
            if (e.target !== this)
              return;
            swiper.$wrapperEl[0].removeEventListener("transitionend", swiper.onSlideToWrapperTransitionEnd);
            swiper.$wrapperEl[0].removeEventListener("webkitTransitionEnd", swiper.onSlideToWrapperTransitionEnd);
            swiper.onSlideToWrapperTransitionEnd = null;
            delete swiper.onSlideToWrapperTransitionEnd;
            swiper.transitionEnd(runCallbacks, direction);
          };
        }
        swiper.$wrapperEl[0].addEventListener("transitionend", swiper.onSlideToWrapperTransitionEnd);
        swiper.$wrapperEl[0].addEventListener("webkitTransitionEnd", swiper.onSlideToWrapperTransitionEnd);
      }
    }
    return true;
  }

  // node_modules/swiper/esm/components/core/slide/slideToLoop.js
  function slideToLoop(index2, speed, runCallbacks, internal) {
    if (index2 === void 0) {
      index2 = 0;
    }
    if (speed === void 0) {
      speed = this.params.speed;
    }
    if (runCallbacks === void 0) {
      runCallbacks = true;
    }
    var swiper = this;
    var newIndex = index2;
    if (swiper.params.loop) {
      newIndex += swiper.loopedSlides;
    }
    return swiper.slideTo(newIndex, speed, runCallbacks, internal);
  }

  // node_modules/swiper/esm/components/core/slide/slideNext.js
  function slideNext(speed, runCallbacks, internal) {
    if (speed === void 0) {
      speed = this.params.speed;
    }
    if (runCallbacks === void 0) {
      runCallbacks = true;
    }
    var swiper = this;
    var params = swiper.params, animating = swiper.animating, enabled = swiper.enabled;
    if (!enabled)
      return swiper;
    var increment = swiper.activeIndex < params.slidesPerGroupSkip ? 1 : params.slidesPerGroup;
    if (params.loop) {
      if (animating && params.loopPreventsSlide)
        return false;
      swiper.loopFix();
      swiper._clientLeft = swiper.$wrapperEl[0].clientLeft;
    }
    return swiper.slideTo(swiper.activeIndex + increment, speed, runCallbacks, internal);
  }

  // node_modules/swiper/esm/components/core/slide/slidePrev.js
  function slidePrev(speed, runCallbacks, internal) {
    if (speed === void 0) {
      speed = this.params.speed;
    }
    if (runCallbacks === void 0) {
      runCallbacks = true;
    }
    var swiper = this;
    var params = swiper.params, animating = swiper.animating, snapGrid = swiper.snapGrid, slidesGrid = swiper.slidesGrid, rtlTranslate = swiper.rtlTranslate, enabled = swiper.enabled;
    if (!enabled)
      return swiper;
    if (params.loop) {
      if (animating && params.loopPreventsSlide)
        return false;
      swiper.loopFix();
      swiper._clientLeft = swiper.$wrapperEl[0].clientLeft;
    }
    var translate = rtlTranslate ? swiper.translate : -swiper.translate;
    function normalize(val) {
      if (val < 0)
        return -Math.floor(Math.abs(val));
      return Math.floor(val);
    }
    var normalizedTranslate = normalize(translate);
    var normalizedSnapGrid = snapGrid.map(function(val) {
      return normalize(val);
    });
    var currentSnap = snapGrid[normalizedSnapGrid.indexOf(normalizedTranslate)];
    var prevSnap = snapGrid[normalizedSnapGrid.indexOf(normalizedTranslate) - 1];
    if (typeof prevSnap === "undefined" && params.cssMode) {
      snapGrid.forEach(function(snap) {
        if (!prevSnap && normalizedTranslate >= snap)
          prevSnap = snap;
      });
    }
    var prevIndex;
    if (typeof prevSnap !== "undefined") {
      prevIndex = slidesGrid.indexOf(prevSnap);
      if (prevIndex < 0)
        prevIndex = swiper.activeIndex - 1;
    }
    return swiper.slideTo(prevIndex, speed, runCallbacks, internal);
  }

  // node_modules/swiper/esm/components/core/slide/slideReset.js
  function slideReset(speed, runCallbacks, internal) {
    if (speed === void 0) {
      speed = this.params.speed;
    }
    if (runCallbacks === void 0) {
      runCallbacks = true;
    }
    var swiper = this;
    return swiper.slideTo(swiper.activeIndex, speed, runCallbacks, internal);
  }

  // node_modules/swiper/esm/components/core/slide/slideToClosest.js
  function slideToClosest(speed, runCallbacks, internal, threshold) {
    if (speed === void 0) {
      speed = this.params.speed;
    }
    if (runCallbacks === void 0) {
      runCallbacks = true;
    }
    if (threshold === void 0) {
      threshold = 0.5;
    }
    var swiper = this;
    var index2 = swiper.activeIndex;
    var skip = Math.min(swiper.params.slidesPerGroupSkip, index2);
    var snapIndex = skip + Math.floor((index2 - skip) / swiper.params.slidesPerGroup);
    var translate = swiper.rtlTranslate ? swiper.translate : -swiper.translate;
    if (translate >= swiper.snapGrid[snapIndex]) {
      var currentSnap = swiper.snapGrid[snapIndex];
      var nextSnap = swiper.snapGrid[snapIndex + 1];
      if (translate - currentSnap > (nextSnap - currentSnap) * threshold) {
        index2 += swiper.params.slidesPerGroup;
      }
    } else {
      var prevSnap = swiper.snapGrid[snapIndex - 1];
      var _currentSnap = swiper.snapGrid[snapIndex];
      if (translate - prevSnap <= (_currentSnap - prevSnap) * threshold) {
        index2 -= swiper.params.slidesPerGroup;
      }
    }
    index2 = Math.max(index2, 0);
    index2 = Math.min(index2, swiper.slidesGrid.length - 1);
    return swiper.slideTo(index2, speed, runCallbacks, internal);
  }

  // node_modules/swiper/esm/components/core/slide/slideToClickedSlide.js
  function slideToClickedSlide() {
    var swiper = this;
    var params = swiper.params, $wrapperEl = swiper.$wrapperEl;
    var slidesPerView = params.slidesPerView === "auto" ? swiper.slidesPerViewDynamic() : params.slidesPerView;
    var slideToIndex = swiper.clickedIndex;
    var realIndex;
    if (params.loop) {
      if (swiper.animating)
        return;
      realIndex = parseInt(dom_default(swiper.clickedSlide).attr("data-swiper-slide-index"), 10);
      if (params.centeredSlides) {
        if (slideToIndex < swiper.loopedSlides - slidesPerView / 2 || slideToIndex > swiper.slides.length - swiper.loopedSlides + slidesPerView / 2) {
          swiper.loopFix();
          slideToIndex = $wrapperEl.children("." + params.slideClass + '[data-swiper-slide-index="' + realIndex + '"]:not(.' + params.slideDuplicateClass + ")").eq(0).index();
          nextTick(function() {
            swiper.slideTo(slideToIndex);
          });
        } else {
          swiper.slideTo(slideToIndex);
        }
      } else if (slideToIndex > swiper.slides.length - slidesPerView) {
        swiper.loopFix();
        slideToIndex = $wrapperEl.children("." + params.slideClass + '[data-swiper-slide-index="' + realIndex + '"]:not(.' + params.slideDuplicateClass + ")").eq(0).index();
        nextTick(function() {
          swiper.slideTo(slideToIndex);
        });
      } else {
        swiper.slideTo(slideToIndex);
      }
    } else {
      swiper.slideTo(slideToIndex);
    }
  }

  // node_modules/swiper/esm/components/core/slide/index.js
  var slide_default = {
    slideTo,
    slideToLoop,
    slideNext,
    slidePrev,
    slideReset,
    slideToClosest,
    slideToClickedSlide
  };

  // node_modules/swiper/esm/components/core/loop/loopCreate.js
  function loopCreate() {
    var swiper = this;
    var document2 = getDocument();
    var params = swiper.params, $wrapperEl = swiper.$wrapperEl;
    $wrapperEl.children("." + params.slideClass + "." + params.slideDuplicateClass).remove();
    var slides = $wrapperEl.children("." + params.slideClass);
    if (params.loopFillGroupWithBlank) {
      var blankSlidesNum = params.slidesPerGroup - slides.length % params.slidesPerGroup;
      if (blankSlidesNum !== params.slidesPerGroup) {
        for (var i = 0; i < blankSlidesNum; i += 1) {
          var blankNode = dom_default(document2.createElement("div")).addClass(params.slideClass + " " + params.slideBlankClass);
          $wrapperEl.append(blankNode);
        }
        slides = $wrapperEl.children("." + params.slideClass);
      }
    }
    if (params.slidesPerView === "auto" && !params.loopedSlides)
      params.loopedSlides = slides.length;
    swiper.loopedSlides = Math.ceil(parseFloat(params.loopedSlides || params.slidesPerView, 10));
    swiper.loopedSlides += params.loopAdditionalSlides;
    if (swiper.loopedSlides > slides.length) {
      swiper.loopedSlides = slides.length;
    }
    var prependSlides = [];
    var appendSlides = [];
    slides.each(function(el, index2) {
      var slide = dom_default(el);
      if (index2 < swiper.loopedSlides) {
        appendSlides.push(el);
      }
      if (index2 < slides.length && index2 >= slides.length - swiper.loopedSlides) {
        prependSlides.push(el);
      }
      slide.attr("data-swiper-slide-index", index2);
    });
    for (var _i = 0; _i < appendSlides.length; _i += 1) {
      $wrapperEl.append(dom_default(appendSlides[_i].cloneNode(true)).addClass(params.slideDuplicateClass));
    }
    for (var _i2 = prependSlides.length - 1; _i2 >= 0; _i2 -= 1) {
      $wrapperEl.prepend(dom_default(prependSlides[_i2].cloneNode(true)).addClass(params.slideDuplicateClass));
    }
  }

  // node_modules/swiper/esm/components/core/loop/loopFix.js
  function loopFix() {
    var swiper = this;
    swiper.emit("beforeLoopFix");
    var activeIndex = swiper.activeIndex, slides = swiper.slides, loopedSlides = swiper.loopedSlides, allowSlidePrev = swiper.allowSlidePrev, allowSlideNext = swiper.allowSlideNext, snapGrid = swiper.snapGrid, rtl = swiper.rtlTranslate;
    var newIndex;
    swiper.allowSlidePrev = true;
    swiper.allowSlideNext = true;
    var snapTranslate = -snapGrid[activeIndex];
    var diff = snapTranslate - swiper.getTranslate();
    if (activeIndex < loopedSlides) {
      newIndex = slides.length - loopedSlides * 3 + activeIndex;
      newIndex += loopedSlides;
      var slideChanged = swiper.slideTo(newIndex, 0, false, true);
      if (slideChanged && diff !== 0) {
        swiper.setTranslate((rtl ? -swiper.translate : swiper.translate) - diff);
      }
    } else if (activeIndex >= slides.length - loopedSlides) {
      newIndex = -slides.length + activeIndex + loopedSlides;
      newIndex += loopedSlides;
      var _slideChanged = swiper.slideTo(newIndex, 0, false, true);
      if (_slideChanged && diff !== 0) {
        swiper.setTranslate((rtl ? -swiper.translate : swiper.translate) - diff);
      }
    }
    swiper.allowSlidePrev = allowSlidePrev;
    swiper.allowSlideNext = allowSlideNext;
    swiper.emit("loopFix");
  }

  // node_modules/swiper/esm/components/core/loop/loopDestroy.js
  function loopDestroy() {
    var swiper = this;
    var $wrapperEl = swiper.$wrapperEl, params = swiper.params, slides = swiper.slides;
    $wrapperEl.children("." + params.slideClass + "." + params.slideDuplicateClass + ",." + params.slideClass + "." + params.slideBlankClass).remove();
    slides.removeAttr("data-swiper-slide-index");
  }

  // node_modules/swiper/esm/components/core/loop/index.js
  var loop_default = {
    loopCreate,
    loopFix,
    loopDestroy
  };

  // node_modules/swiper/esm/components/core/grab-cursor/setGrabCursor.js
  function setGrabCursor(moving) {
    var swiper = this;
    if (swiper.support.touch || !swiper.params.simulateTouch || swiper.params.watchOverflow && swiper.isLocked || swiper.params.cssMode)
      return;
    var el = swiper.el;
    el.style.cursor = "move";
    el.style.cursor = moving ? "-webkit-grabbing" : "-webkit-grab";
    el.style.cursor = moving ? "-moz-grabbin" : "-moz-grab";
    el.style.cursor = moving ? "grabbing" : "grab";
  }

  // node_modules/swiper/esm/components/core/grab-cursor/unsetGrabCursor.js
  function unsetGrabCursor() {
    var swiper = this;
    if (swiper.support.touch || swiper.params.watchOverflow && swiper.isLocked || swiper.params.cssMode) {
      return;
    }
    swiper.el.style.cursor = "";
  }

  // node_modules/swiper/esm/components/core/grab-cursor/index.js
  var grab_cursor_default = {
    setGrabCursor,
    unsetGrabCursor
  };

  // node_modules/swiper/esm/components/core/manipulation/appendSlide.js
  function appendSlide(slides) {
    var swiper = this;
    var $wrapperEl = swiper.$wrapperEl, params = swiper.params;
    if (params.loop) {
      swiper.loopDestroy();
    }
    if (typeof slides === "object" && "length" in slides) {
      for (var i = 0; i < slides.length; i += 1) {
        if (slides[i])
          $wrapperEl.append(slides[i]);
      }
    } else {
      $wrapperEl.append(slides);
    }
    if (params.loop) {
      swiper.loopCreate();
    }
    if (!(params.observer && swiper.support.observer)) {
      swiper.update();
    }
  }

  // node_modules/swiper/esm/components/core/manipulation/prependSlide.js
  function prependSlide(slides) {
    var swiper = this;
    var params = swiper.params, $wrapperEl = swiper.$wrapperEl, activeIndex = swiper.activeIndex;
    if (params.loop) {
      swiper.loopDestroy();
    }
    var newActiveIndex = activeIndex + 1;
    if (typeof slides === "object" && "length" in slides) {
      for (var i = 0; i < slides.length; i += 1) {
        if (slides[i])
          $wrapperEl.prepend(slides[i]);
      }
      newActiveIndex = activeIndex + slides.length;
    } else {
      $wrapperEl.prepend(slides);
    }
    if (params.loop) {
      swiper.loopCreate();
    }
    if (!(params.observer && swiper.support.observer)) {
      swiper.update();
    }
    swiper.slideTo(newActiveIndex, 0, false);
  }

  // node_modules/swiper/esm/components/core/manipulation/addSlide.js
  function addSlide(index2, slides) {
    var swiper = this;
    var $wrapperEl = swiper.$wrapperEl, params = swiper.params, activeIndex = swiper.activeIndex;
    var activeIndexBuffer = activeIndex;
    if (params.loop) {
      activeIndexBuffer -= swiper.loopedSlides;
      swiper.loopDestroy();
      swiper.slides = $wrapperEl.children("." + params.slideClass);
    }
    var baseLength = swiper.slides.length;
    if (index2 <= 0) {
      swiper.prependSlide(slides);
      return;
    }
    if (index2 >= baseLength) {
      swiper.appendSlide(slides);
      return;
    }
    var newActiveIndex = activeIndexBuffer > index2 ? activeIndexBuffer + 1 : activeIndexBuffer;
    var slidesBuffer = [];
    for (var i = baseLength - 1; i >= index2; i -= 1) {
      var currentSlide = swiper.slides.eq(i);
      currentSlide.remove();
      slidesBuffer.unshift(currentSlide);
    }
    if (typeof slides === "object" && "length" in slides) {
      for (var _i = 0; _i < slides.length; _i += 1) {
        if (slides[_i])
          $wrapperEl.append(slides[_i]);
      }
      newActiveIndex = activeIndexBuffer > index2 ? activeIndexBuffer + slides.length : activeIndexBuffer;
    } else {
      $wrapperEl.append(slides);
    }
    for (var _i2 = 0; _i2 < slidesBuffer.length; _i2 += 1) {
      $wrapperEl.append(slidesBuffer[_i2]);
    }
    if (params.loop) {
      swiper.loopCreate();
    }
    if (!(params.observer && swiper.support.observer)) {
      swiper.update();
    }
    if (params.loop) {
      swiper.slideTo(newActiveIndex + swiper.loopedSlides, 0, false);
    } else {
      swiper.slideTo(newActiveIndex, 0, false);
    }
  }

  // node_modules/swiper/esm/components/core/manipulation/removeSlide.js
  function removeSlide(slidesIndexes) {
    var swiper = this;
    var params = swiper.params, $wrapperEl = swiper.$wrapperEl, activeIndex = swiper.activeIndex;
    var activeIndexBuffer = activeIndex;
    if (params.loop) {
      activeIndexBuffer -= swiper.loopedSlides;
      swiper.loopDestroy();
      swiper.slides = $wrapperEl.children("." + params.slideClass);
    }
    var newActiveIndex = activeIndexBuffer;
    var indexToRemove;
    if (typeof slidesIndexes === "object" && "length" in slidesIndexes) {
      for (var i = 0; i < slidesIndexes.length; i += 1) {
        indexToRemove = slidesIndexes[i];
        if (swiper.slides[indexToRemove])
          swiper.slides.eq(indexToRemove).remove();
        if (indexToRemove < newActiveIndex)
          newActiveIndex -= 1;
      }
      newActiveIndex = Math.max(newActiveIndex, 0);
    } else {
      indexToRemove = slidesIndexes;
      if (swiper.slides[indexToRemove])
        swiper.slides.eq(indexToRemove).remove();
      if (indexToRemove < newActiveIndex)
        newActiveIndex -= 1;
      newActiveIndex = Math.max(newActiveIndex, 0);
    }
    if (params.loop) {
      swiper.loopCreate();
    }
    if (!(params.observer && swiper.support.observer)) {
      swiper.update();
    }
    if (params.loop) {
      swiper.slideTo(newActiveIndex + swiper.loopedSlides, 0, false);
    } else {
      swiper.slideTo(newActiveIndex, 0, false);
    }
  }

  // node_modules/swiper/esm/components/core/manipulation/removeAllSlides.js
  function removeAllSlides() {
    var swiper = this;
    var slidesIndexes = [];
    for (var i = 0; i < swiper.slides.length; i += 1) {
      slidesIndexes.push(i);
    }
    swiper.removeSlide(slidesIndexes);
  }

  // node_modules/swiper/esm/components/core/manipulation/index.js
  var manipulation_default = {
    appendSlide,
    prependSlide,
    addSlide,
    removeSlide,
    removeAllSlides
  };

  // node_modules/swiper/esm/components/core/events/onTouchStart.js
  function onTouchStart(event) {
    var swiper = this;
    var document2 = getDocument();
    var window2 = getWindow();
    var data = swiper.touchEventsData;
    var params = swiper.params, touches = swiper.touches, enabled = swiper.enabled;
    if (!enabled)
      return;
    if (swiper.animating && params.preventInteractionOnTransition) {
      return;
    }
    var e = event;
    if (e.originalEvent)
      e = e.originalEvent;
    var $targetEl = dom_default(e.target);
    if (params.touchEventsTarget === "wrapper") {
      if (!$targetEl.closest(swiper.wrapperEl).length)
        return;
    }
    data.isTouchEvent = e.type === "touchstart";
    if (!data.isTouchEvent && "which" in e && e.which === 3)
      return;
    if (!data.isTouchEvent && "button" in e && e.button > 0)
      return;
    if (data.isTouched && data.isMoved)
      return;
    var swipingClassHasValue = !!params.noSwipingClass && params.noSwipingClass !== "";
    if (swipingClassHasValue && e.target && e.target.shadowRoot && event.path && event.path[0]) {
      $targetEl = dom_default(event.path[0]);
    }
    if (params.noSwiping && $targetEl.closest(params.noSwipingSelector ? params.noSwipingSelector : "." + params.noSwipingClass)[0]) {
      swiper.allowClick = true;
      return;
    }
    if (params.swipeHandler) {
      if (!$targetEl.closest(params.swipeHandler)[0])
        return;
    }
    touches.currentX = e.type === "touchstart" ? e.targetTouches[0].pageX : e.pageX;
    touches.currentY = e.type === "touchstart" ? e.targetTouches[0].pageY : e.pageY;
    var startX = touches.currentX;
    var startY = touches.currentY;
    var edgeSwipeDetection = params.edgeSwipeDetection || params.iOSEdgeSwipeDetection;
    var edgeSwipeThreshold = params.edgeSwipeThreshold || params.iOSEdgeSwipeThreshold;
    if (edgeSwipeDetection && (startX <= edgeSwipeThreshold || startX >= window2.innerWidth - edgeSwipeThreshold)) {
      if (edgeSwipeDetection === "prevent") {
        event.preventDefault();
      } else {
        return;
      }
    }
    extend2(data, {
      isTouched: true,
      isMoved: false,
      allowTouchCallbacks: true,
      isScrolling: void 0,
      startMoving: void 0
    });
    touches.startX = startX;
    touches.startY = startY;
    data.touchStartTime = now();
    swiper.allowClick = true;
    swiper.updateSize();
    swiper.swipeDirection = void 0;
    if (params.threshold > 0)
      data.allowThresholdMove = false;
    if (e.type !== "touchstart") {
      var preventDefault = true;
      if ($targetEl.is(data.formElements))
        preventDefault = false;
      if (document2.activeElement && dom_default(document2.activeElement).is(data.formElements) && document2.activeElement !== $targetEl[0]) {
        document2.activeElement.blur();
      }
      var shouldPreventDefault = preventDefault && swiper.allowTouchMove && params.touchStartPreventDefault;
      if ((params.touchStartForcePreventDefault || shouldPreventDefault) && !$targetEl[0].isContentEditable) {
        e.preventDefault();
      }
    }
    swiper.emit("touchStart", e);
  }

  // node_modules/swiper/esm/components/core/events/onTouchMove.js
  function onTouchMove(event) {
    var document2 = getDocument();
    var swiper = this;
    var data = swiper.touchEventsData;
    var params = swiper.params, touches = swiper.touches, rtl = swiper.rtlTranslate, enabled = swiper.enabled;
    if (!enabled)
      return;
    var e = event;
    if (e.originalEvent)
      e = e.originalEvent;
    if (!data.isTouched) {
      if (data.startMoving && data.isScrolling) {
        swiper.emit("touchMoveOpposite", e);
      }
      return;
    }
    if (data.isTouchEvent && e.type !== "touchmove")
      return;
    var targetTouch = e.type === "touchmove" && e.targetTouches && (e.targetTouches[0] || e.changedTouches[0]);
    var pageX = e.type === "touchmove" ? targetTouch.pageX : e.pageX;
    var pageY = e.type === "touchmove" ? targetTouch.pageY : e.pageY;
    if (e.preventedByNestedSwiper) {
      touches.startX = pageX;
      touches.startY = pageY;
      return;
    }
    if (!swiper.allowTouchMove) {
      swiper.allowClick = false;
      if (data.isTouched) {
        extend2(touches, {
          startX: pageX,
          startY: pageY,
          currentX: pageX,
          currentY: pageY
        });
        data.touchStartTime = now();
      }
      return;
    }
    if (data.isTouchEvent && params.touchReleaseOnEdges && !params.loop) {
      if (swiper.isVertical()) {
        if (pageY < touches.startY && swiper.translate <= swiper.maxTranslate() || pageY > touches.startY && swiper.translate >= swiper.minTranslate()) {
          data.isTouched = false;
          data.isMoved = false;
          return;
        }
      } else if (pageX < touches.startX && swiper.translate <= swiper.maxTranslate() || pageX > touches.startX && swiper.translate >= swiper.minTranslate()) {
        return;
      }
    }
    if (data.isTouchEvent && document2.activeElement) {
      if (e.target === document2.activeElement && dom_default(e.target).is(data.formElements)) {
        data.isMoved = true;
        swiper.allowClick = false;
        return;
      }
    }
    if (data.allowTouchCallbacks) {
      swiper.emit("touchMove", e);
    }
    if (e.targetTouches && e.targetTouches.length > 1)
      return;
    touches.currentX = pageX;
    touches.currentY = pageY;
    var diffX = touches.currentX - touches.startX;
    var diffY = touches.currentY - touches.startY;
    if (swiper.params.threshold && Math.sqrt(Math.pow(diffX, 2) + Math.pow(diffY, 2)) < swiper.params.threshold)
      return;
    if (typeof data.isScrolling === "undefined") {
      var touchAngle;
      if (swiper.isHorizontal() && touches.currentY === touches.startY || swiper.isVertical() && touches.currentX === touches.startX) {
        data.isScrolling = false;
      } else {
        if (diffX * diffX + diffY * diffY >= 25) {
          touchAngle = Math.atan2(Math.abs(diffY), Math.abs(diffX)) * 180 / Math.PI;
          data.isScrolling = swiper.isHorizontal() ? touchAngle > params.touchAngle : 90 - touchAngle > params.touchAngle;
        }
      }
    }
    if (data.isScrolling) {
      swiper.emit("touchMoveOpposite", e);
    }
    if (typeof data.startMoving === "undefined") {
      if (touches.currentX !== touches.startX || touches.currentY !== touches.startY) {
        data.startMoving = true;
      }
    }
    if (data.isScrolling) {
      data.isTouched = false;
      return;
    }
    if (!data.startMoving) {
      return;
    }
    swiper.allowClick = false;
    if (!params.cssMode && e.cancelable) {
      e.preventDefault();
    }
    if (params.touchMoveStopPropagation && !params.nested) {
      e.stopPropagation();
    }
    if (!data.isMoved) {
      if (params.loop) {
        swiper.loopFix();
      }
      data.startTranslate = swiper.getTranslate();
      swiper.setTransition(0);
      if (swiper.animating) {
        swiper.$wrapperEl.trigger("webkitTransitionEnd transitionend");
      }
      data.allowMomentumBounce = false;
      if (params.grabCursor && (swiper.allowSlideNext === true || swiper.allowSlidePrev === true)) {
        swiper.setGrabCursor(true);
      }
      swiper.emit("sliderFirstMove", e);
    }
    swiper.emit("sliderMove", e);
    data.isMoved = true;
    var diff = swiper.isHorizontal() ? diffX : diffY;
    touches.diff = diff;
    diff *= params.touchRatio;
    if (rtl)
      diff = -diff;
    swiper.swipeDirection = diff > 0 ? "prev" : "next";
    data.currentTranslate = diff + data.startTranslate;
    var disableParentSwiper = true;
    var resistanceRatio = params.resistanceRatio;
    if (params.touchReleaseOnEdges) {
      resistanceRatio = 0;
    }
    if (diff > 0 && data.currentTranslate > swiper.minTranslate()) {
      disableParentSwiper = false;
      if (params.resistance)
        data.currentTranslate = swiper.minTranslate() - 1 + Math.pow(-swiper.minTranslate() + data.startTranslate + diff, resistanceRatio);
    } else if (diff < 0 && data.currentTranslate < swiper.maxTranslate()) {
      disableParentSwiper = false;
      if (params.resistance)
        data.currentTranslate = swiper.maxTranslate() + 1 - Math.pow(swiper.maxTranslate() - data.startTranslate - diff, resistanceRatio);
    }
    if (disableParentSwiper) {
      e.preventedByNestedSwiper = true;
    }
    if (!swiper.allowSlideNext && swiper.swipeDirection === "next" && data.currentTranslate < data.startTranslate) {
      data.currentTranslate = data.startTranslate;
    }
    if (!swiper.allowSlidePrev && swiper.swipeDirection === "prev" && data.currentTranslate > data.startTranslate) {
      data.currentTranslate = data.startTranslate;
    }
    if (!swiper.allowSlidePrev && !swiper.allowSlideNext) {
      data.currentTranslate = data.startTranslate;
    }
    if (params.threshold > 0) {
      if (Math.abs(diff) > params.threshold || data.allowThresholdMove) {
        if (!data.allowThresholdMove) {
          data.allowThresholdMove = true;
          touches.startX = touches.currentX;
          touches.startY = touches.currentY;
          data.currentTranslate = data.startTranslate;
          touches.diff = swiper.isHorizontal() ? touches.currentX - touches.startX : touches.currentY - touches.startY;
          return;
        }
      } else {
        data.currentTranslate = data.startTranslate;
        return;
      }
    }
    if (!params.followFinger || params.cssMode)
      return;
    if (params.freeMode || params.watchSlidesProgress || params.watchSlidesVisibility) {
      swiper.updateActiveIndex();
      swiper.updateSlidesClasses();
    }
    if (params.freeMode) {
      if (data.velocities.length === 0) {
        data.velocities.push({
          position: touches[swiper.isHorizontal() ? "startX" : "startY"],
          time: data.touchStartTime
        });
      }
      data.velocities.push({
        position: touches[swiper.isHorizontal() ? "currentX" : "currentY"],
        time: now()
      });
    }
    swiper.updateProgress(data.currentTranslate);
    swiper.setTranslate(data.currentTranslate);
  }

  // node_modules/swiper/esm/components/core/events/onTouchEnd.js
  function onTouchEnd(event) {
    var swiper = this;
    var data = swiper.touchEventsData;
    var params = swiper.params, touches = swiper.touches, rtl = swiper.rtlTranslate, $wrapperEl = swiper.$wrapperEl, slidesGrid = swiper.slidesGrid, snapGrid = swiper.snapGrid, enabled = swiper.enabled;
    if (!enabled)
      return;
    var e = event;
    if (e.originalEvent)
      e = e.originalEvent;
    if (data.allowTouchCallbacks) {
      swiper.emit("touchEnd", e);
    }
    data.allowTouchCallbacks = false;
    if (!data.isTouched) {
      if (data.isMoved && params.grabCursor) {
        swiper.setGrabCursor(false);
      }
      data.isMoved = false;
      data.startMoving = false;
      return;
    }
    if (params.grabCursor && data.isMoved && data.isTouched && (swiper.allowSlideNext === true || swiper.allowSlidePrev === true)) {
      swiper.setGrabCursor(false);
    }
    var touchEndTime = now();
    var timeDiff = touchEndTime - data.touchStartTime;
    if (swiper.allowClick) {
      swiper.updateClickedSlide(e);
      swiper.emit("tap click", e);
      if (timeDiff < 300 && touchEndTime - data.lastClickTime < 300) {
        swiper.emit("doubleTap doubleClick", e);
      }
    }
    data.lastClickTime = now();
    nextTick(function() {
      if (!swiper.destroyed)
        swiper.allowClick = true;
    });
    if (!data.isTouched || !data.isMoved || !swiper.swipeDirection || touches.diff === 0 || data.currentTranslate === data.startTranslate) {
      data.isTouched = false;
      data.isMoved = false;
      data.startMoving = false;
      return;
    }
    data.isTouched = false;
    data.isMoved = false;
    data.startMoving = false;
    var currentPos;
    if (params.followFinger) {
      currentPos = rtl ? swiper.translate : -swiper.translate;
    } else {
      currentPos = -data.currentTranslate;
    }
    if (params.cssMode) {
      return;
    }
    if (params.freeMode) {
      if (currentPos < -swiper.minTranslate()) {
        swiper.slideTo(swiper.activeIndex);
        return;
      }
      if (currentPos > -swiper.maxTranslate()) {
        if (swiper.slides.length < snapGrid.length) {
          swiper.slideTo(snapGrid.length - 1);
        } else {
          swiper.slideTo(swiper.slides.length - 1);
        }
        return;
      }
      if (params.freeModeMomentum) {
        if (data.velocities.length > 1) {
          var lastMoveEvent = data.velocities.pop();
          var velocityEvent = data.velocities.pop();
          var distance = lastMoveEvent.position - velocityEvent.position;
          var time = lastMoveEvent.time - velocityEvent.time;
          swiper.velocity = distance / time;
          swiper.velocity /= 2;
          if (Math.abs(swiper.velocity) < params.freeModeMinimumVelocity) {
            swiper.velocity = 0;
          }
          if (time > 150 || now() - lastMoveEvent.time > 300) {
            swiper.velocity = 0;
          }
        } else {
          swiper.velocity = 0;
        }
        swiper.velocity *= params.freeModeMomentumVelocityRatio;
        data.velocities.length = 0;
        var momentumDuration = 1e3 * params.freeModeMomentumRatio;
        var momentumDistance = swiper.velocity * momentumDuration;
        var newPosition = swiper.translate + momentumDistance;
        if (rtl)
          newPosition = -newPosition;
        var doBounce = false;
        var afterBouncePosition;
        var bounceAmount = Math.abs(swiper.velocity) * 20 * params.freeModeMomentumBounceRatio;
        var needsLoopFix;
        if (newPosition < swiper.maxTranslate()) {
          if (params.freeModeMomentumBounce) {
            if (newPosition + swiper.maxTranslate() < -bounceAmount) {
              newPosition = swiper.maxTranslate() - bounceAmount;
            }
            afterBouncePosition = swiper.maxTranslate();
            doBounce = true;
            data.allowMomentumBounce = true;
          } else {
            newPosition = swiper.maxTranslate();
          }
          if (params.loop && params.centeredSlides)
            needsLoopFix = true;
        } else if (newPosition > swiper.minTranslate()) {
          if (params.freeModeMomentumBounce) {
            if (newPosition - swiper.minTranslate() > bounceAmount) {
              newPosition = swiper.minTranslate() + bounceAmount;
            }
            afterBouncePosition = swiper.minTranslate();
            doBounce = true;
            data.allowMomentumBounce = true;
          } else {
            newPosition = swiper.minTranslate();
          }
          if (params.loop && params.centeredSlides)
            needsLoopFix = true;
        } else if (params.freeModeSticky) {
          var nextSlide;
          for (var j = 0; j < snapGrid.length; j += 1) {
            if (snapGrid[j] > -newPosition) {
              nextSlide = j;
              break;
            }
          }
          if (Math.abs(snapGrid[nextSlide] - newPosition) < Math.abs(snapGrid[nextSlide - 1] - newPosition) || swiper.swipeDirection === "next") {
            newPosition = snapGrid[nextSlide];
          } else {
            newPosition = snapGrid[nextSlide - 1];
          }
          newPosition = -newPosition;
        }
        if (needsLoopFix) {
          swiper.once("transitionEnd", function() {
            swiper.loopFix();
          });
        }
        if (swiper.velocity !== 0) {
          if (rtl) {
            momentumDuration = Math.abs((-newPosition - swiper.translate) / swiper.velocity);
          } else {
            momentumDuration = Math.abs((newPosition - swiper.translate) / swiper.velocity);
          }
          if (params.freeModeSticky) {
            var moveDistance = Math.abs((rtl ? -newPosition : newPosition) - swiper.translate);
            var currentSlideSize = swiper.slidesSizesGrid[swiper.activeIndex];
            if (moveDistance < currentSlideSize) {
              momentumDuration = params.speed;
            } else if (moveDistance < 2 * currentSlideSize) {
              momentumDuration = params.speed * 1.5;
            } else {
              momentumDuration = params.speed * 2.5;
            }
          }
        } else if (params.freeModeSticky) {
          swiper.slideToClosest();
          return;
        }
        if (params.freeModeMomentumBounce && doBounce) {
          swiper.updateProgress(afterBouncePosition);
          swiper.setTransition(momentumDuration);
          swiper.setTranslate(newPosition);
          swiper.transitionStart(true, swiper.swipeDirection);
          swiper.animating = true;
          $wrapperEl.transitionEnd(function() {
            if (!swiper || swiper.destroyed || !data.allowMomentumBounce)
              return;
            swiper.emit("momentumBounce");
            swiper.setTransition(params.speed);
            setTimeout(function() {
              swiper.setTranslate(afterBouncePosition);
              $wrapperEl.transitionEnd(function() {
                if (!swiper || swiper.destroyed)
                  return;
                swiper.transitionEnd();
              });
            }, 0);
          });
        } else if (swiper.velocity) {
          swiper.updateProgress(newPosition);
          swiper.setTransition(momentumDuration);
          swiper.setTranslate(newPosition);
          swiper.transitionStart(true, swiper.swipeDirection);
          if (!swiper.animating) {
            swiper.animating = true;
            $wrapperEl.transitionEnd(function() {
              if (!swiper || swiper.destroyed)
                return;
              swiper.transitionEnd();
            });
          }
        } else {
          swiper.emit("_freeModeNoMomentumRelease");
          swiper.updateProgress(newPosition);
        }
        swiper.updateActiveIndex();
        swiper.updateSlidesClasses();
      } else if (params.freeModeSticky) {
        swiper.slideToClosest();
        return;
      } else if (params.freeMode) {
        swiper.emit("_freeModeNoMomentumRelease");
      }
      if (!params.freeModeMomentum || timeDiff >= params.longSwipesMs) {
        swiper.updateProgress();
        swiper.updateActiveIndex();
        swiper.updateSlidesClasses();
      }
      return;
    }
    var stopIndex = 0;
    var groupSize = swiper.slidesSizesGrid[0];
    for (var i = 0; i < slidesGrid.length; i += i < params.slidesPerGroupSkip ? 1 : params.slidesPerGroup) {
      var _increment = i < params.slidesPerGroupSkip - 1 ? 1 : params.slidesPerGroup;
      if (typeof slidesGrid[i + _increment] !== "undefined") {
        if (currentPos >= slidesGrid[i] && currentPos < slidesGrid[i + _increment]) {
          stopIndex = i;
          groupSize = slidesGrid[i + _increment] - slidesGrid[i];
        }
      } else if (currentPos >= slidesGrid[i]) {
        stopIndex = i;
        groupSize = slidesGrid[slidesGrid.length - 1] - slidesGrid[slidesGrid.length - 2];
      }
    }
    var ratio = (currentPos - slidesGrid[stopIndex]) / groupSize;
    var increment = stopIndex < params.slidesPerGroupSkip - 1 ? 1 : params.slidesPerGroup;
    if (timeDiff > params.longSwipesMs) {
      if (!params.longSwipes) {
        swiper.slideTo(swiper.activeIndex);
        return;
      }
      if (swiper.swipeDirection === "next") {
        if (ratio >= params.longSwipesRatio)
          swiper.slideTo(stopIndex + increment);
        else
          swiper.slideTo(stopIndex);
      }
      if (swiper.swipeDirection === "prev") {
        if (ratio > 1 - params.longSwipesRatio)
          swiper.slideTo(stopIndex + increment);
        else
          swiper.slideTo(stopIndex);
      }
    } else {
      if (!params.shortSwipes) {
        swiper.slideTo(swiper.activeIndex);
        return;
      }
      var isNavButtonTarget = swiper.navigation && (e.target === swiper.navigation.nextEl || e.target === swiper.navigation.prevEl);
      if (!isNavButtonTarget) {
        if (swiper.swipeDirection === "next") {
          swiper.slideTo(stopIndex + increment);
        }
        if (swiper.swipeDirection === "prev") {
          swiper.slideTo(stopIndex);
        }
      } else if (e.target === swiper.navigation.nextEl) {
        swiper.slideTo(stopIndex + increment);
      } else {
        swiper.slideTo(stopIndex);
      }
    }
  }

  // node_modules/swiper/esm/components/core/events/onResize.js
  function onResize() {
    var swiper = this;
    var params = swiper.params, el = swiper.el;
    if (el && el.offsetWidth === 0)
      return;
    if (params.breakpoints) {
      swiper.setBreakpoint();
    }
    var allowSlideNext = swiper.allowSlideNext, allowSlidePrev = swiper.allowSlidePrev, snapGrid = swiper.snapGrid;
    swiper.allowSlideNext = true;
    swiper.allowSlidePrev = true;
    swiper.updateSize();
    swiper.updateSlides();
    swiper.updateSlidesClasses();
    if ((params.slidesPerView === "auto" || params.slidesPerView > 1) && swiper.isEnd && !swiper.isBeginning && !swiper.params.centeredSlides) {
      swiper.slideTo(swiper.slides.length - 1, 0, false, true);
    } else {
      swiper.slideTo(swiper.activeIndex, 0, false, true);
    }
    if (swiper.autoplay && swiper.autoplay.running && swiper.autoplay.paused) {
      swiper.autoplay.run();
    }
    swiper.allowSlidePrev = allowSlidePrev;
    swiper.allowSlideNext = allowSlideNext;
    if (swiper.params.watchOverflow && snapGrid !== swiper.snapGrid) {
      swiper.checkOverflow();
    }
  }

  // node_modules/swiper/esm/components/core/events/onClick.js
  function onClick(e) {
    var swiper = this;
    if (!swiper.enabled)
      return;
    if (!swiper.allowClick) {
      if (swiper.params.preventClicks)
        e.preventDefault();
      if (swiper.params.preventClicksPropagation && swiper.animating) {
        e.stopPropagation();
        e.stopImmediatePropagation();
      }
    }
  }

  // node_modules/swiper/esm/components/core/events/onScroll.js
  function onScroll() {
    var swiper = this;
    var wrapperEl = swiper.wrapperEl, rtlTranslate = swiper.rtlTranslate, enabled = swiper.enabled;
    if (!enabled)
      return;
    swiper.previousTranslate = swiper.translate;
    if (swiper.isHorizontal()) {
      if (rtlTranslate) {
        swiper.translate = wrapperEl.scrollWidth - wrapperEl.offsetWidth - wrapperEl.scrollLeft;
      } else {
        swiper.translate = -wrapperEl.scrollLeft;
      }
    } else {
      swiper.translate = -wrapperEl.scrollTop;
    }
    if (swiper.translate === -0)
      swiper.translate = 0;
    swiper.updateActiveIndex();
    swiper.updateSlidesClasses();
    var newProgress;
    var translatesDiff = swiper.maxTranslate() - swiper.minTranslate();
    if (translatesDiff === 0) {
      newProgress = 0;
    } else {
      newProgress = (swiper.translate - swiper.minTranslate()) / translatesDiff;
    }
    if (newProgress !== swiper.progress) {
      swiper.updateProgress(rtlTranslate ? -swiper.translate : swiper.translate);
    }
    swiper.emit("setTranslate", swiper.translate, false);
  }

  // node_modules/swiper/esm/components/core/events/index.js
  var dummyEventAttached = false;
  function dummyEventListener() {
  }
  function attachEvents() {
    var swiper = this;
    var document2 = getDocument();
    var params = swiper.params, touchEvents = swiper.touchEvents, el = swiper.el, wrapperEl = swiper.wrapperEl, device2 = swiper.device, support2 = swiper.support;
    swiper.onTouchStart = onTouchStart.bind(swiper);
    swiper.onTouchMove = onTouchMove.bind(swiper);
    swiper.onTouchEnd = onTouchEnd.bind(swiper);
    if (params.cssMode) {
      swiper.onScroll = onScroll.bind(swiper);
    }
    swiper.onClick = onClick.bind(swiper);
    var capture = !!params.nested;
    if (!support2.touch && support2.pointerEvents) {
      el.addEventListener(touchEvents.start, swiper.onTouchStart, false);
      document2.addEventListener(touchEvents.move, swiper.onTouchMove, capture);
      document2.addEventListener(touchEvents.end, swiper.onTouchEnd, false);
    } else {
      if (support2.touch) {
        var passiveListener = touchEvents.start === "touchstart" && support2.passiveListener && params.passiveListeners ? {
          passive: true,
          capture: false
        } : false;
        el.addEventListener(touchEvents.start, swiper.onTouchStart, passiveListener);
        el.addEventListener(touchEvents.move, swiper.onTouchMove, support2.passiveListener ? {
          passive: false,
          capture
        } : capture);
        el.addEventListener(touchEvents.end, swiper.onTouchEnd, passiveListener);
        if (touchEvents.cancel) {
          el.addEventListener(touchEvents.cancel, swiper.onTouchEnd, passiveListener);
        }
        if (!dummyEventAttached) {
          document2.addEventListener("touchstart", dummyEventListener);
          dummyEventAttached = true;
        }
      }
      if (params.simulateTouch && !device2.ios && !device2.android || params.simulateTouch && !support2.touch && device2.ios) {
        el.addEventListener("mousedown", swiper.onTouchStart, false);
        document2.addEventListener("mousemove", swiper.onTouchMove, capture);
        document2.addEventListener("mouseup", swiper.onTouchEnd, false);
      }
    }
    if (params.preventClicks || params.preventClicksPropagation) {
      el.addEventListener("click", swiper.onClick, true);
    }
    if (params.cssMode) {
      wrapperEl.addEventListener("scroll", swiper.onScroll);
    }
    if (params.updateOnWindowResize) {
      swiper.on(device2.ios || device2.android ? "resize orientationchange observerUpdate" : "resize observerUpdate", onResize, true);
    } else {
      swiper.on("observerUpdate", onResize, true);
    }
  }
  function detachEvents() {
    var swiper = this;
    var document2 = getDocument();
    var params = swiper.params, touchEvents = swiper.touchEvents, el = swiper.el, wrapperEl = swiper.wrapperEl, device2 = swiper.device, support2 = swiper.support;
    var capture = !!params.nested;
    if (!support2.touch && support2.pointerEvents) {
      el.removeEventListener(touchEvents.start, swiper.onTouchStart, false);
      document2.removeEventListener(touchEvents.move, swiper.onTouchMove, capture);
      document2.removeEventListener(touchEvents.end, swiper.onTouchEnd, false);
    } else {
      if (support2.touch) {
        var passiveListener = touchEvents.start === "onTouchStart" && support2.passiveListener && params.passiveListeners ? {
          passive: true,
          capture: false
        } : false;
        el.removeEventListener(touchEvents.start, swiper.onTouchStart, passiveListener);
        el.removeEventListener(touchEvents.move, swiper.onTouchMove, capture);
        el.removeEventListener(touchEvents.end, swiper.onTouchEnd, passiveListener);
        if (touchEvents.cancel) {
          el.removeEventListener(touchEvents.cancel, swiper.onTouchEnd, passiveListener);
        }
      }
      if (params.simulateTouch && !device2.ios && !device2.android || params.simulateTouch && !support2.touch && device2.ios) {
        el.removeEventListener("mousedown", swiper.onTouchStart, false);
        document2.removeEventListener("mousemove", swiper.onTouchMove, capture);
        document2.removeEventListener("mouseup", swiper.onTouchEnd, false);
      }
    }
    if (params.preventClicks || params.preventClicksPropagation) {
      el.removeEventListener("click", swiper.onClick, true);
    }
    if (params.cssMode) {
      wrapperEl.removeEventListener("scroll", swiper.onScroll);
    }
    swiper.off(device2.ios || device2.android ? "resize orientationchange observerUpdate" : "resize observerUpdate", onResize);
  }
  var events_default = {
    attachEvents,
    detachEvents
  };

  // node_modules/swiper/esm/components/core/breakpoints/setBreakpoint.js
  function setBreakpoint() {
    var swiper = this;
    var activeIndex = swiper.activeIndex, initialized = swiper.initialized, _swiper$loopedSlides = swiper.loopedSlides, loopedSlides = _swiper$loopedSlides === void 0 ? 0 : _swiper$loopedSlides, params = swiper.params, $el = swiper.$el;
    var breakpoints = params.breakpoints;
    if (!breakpoints || breakpoints && Object.keys(breakpoints).length === 0)
      return;
    var breakpoint = swiper.getBreakpoint(breakpoints, swiper.params.breakpointsBase, swiper.el);
    if (!breakpoint || swiper.currentBreakpoint === breakpoint)
      return;
    var breakpointOnlyParams = breakpoint in breakpoints ? breakpoints[breakpoint] : void 0;
    if (breakpointOnlyParams) {
      ["slidesPerView", "spaceBetween", "slidesPerGroup", "slidesPerGroupSkip", "slidesPerColumn"].forEach(function(param) {
        var paramValue = breakpointOnlyParams[param];
        if (typeof paramValue === "undefined")
          return;
        if (param === "slidesPerView" && (paramValue === "AUTO" || paramValue === "auto")) {
          breakpointOnlyParams[param] = "auto";
        } else if (param === "slidesPerView") {
          breakpointOnlyParams[param] = parseFloat(paramValue);
        } else {
          breakpointOnlyParams[param] = parseInt(paramValue, 10);
        }
      });
    }
    var breakpointParams = breakpointOnlyParams || swiper.originalParams;
    var wasMultiRow = params.slidesPerColumn > 1;
    var isMultiRow = breakpointParams.slidesPerColumn > 1;
    var wasEnabled = params.enabled;
    if (wasMultiRow && !isMultiRow) {
      $el.removeClass(params.containerModifierClass + "multirow " + params.containerModifierClass + "multirow-column");
      swiper.emitContainerClasses();
    } else if (!wasMultiRow && isMultiRow) {
      $el.addClass(params.containerModifierClass + "multirow");
      if (breakpointParams.slidesPerColumnFill === "column") {
        $el.addClass(params.containerModifierClass + "multirow-column");
      }
      swiper.emitContainerClasses();
    }
    var directionChanged = breakpointParams.direction && breakpointParams.direction !== params.direction;
    var needsReLoop = params.loop && (breakpointParams.slidesPerView !== params.slidesPerView || directionChanged);
    if (directionChanged && initialized) {
      swiper.changeDirection();
    }
    extend2(swiper.params, breakpointParams);
    var isEnabled = swiper.params.enabled;
    extend2(swiper, {
      allowTouchMove: swiper.params.allowTouchMove,
      allowSlideNext: swiper.params.allowSlideNext,
      allowSlidePrev: swiper.params.allowSlidePrev
    });
    if (wasEnabled && !isEnabled) {
      swiper.disable();
    } else if (!wasEnabled && isEnabled) {
      swiper.enable();
    }
    swiper.currentBreakpoint = breakpoint;
    swiper.emit("_beforeBreakpoint", breakpointParams);
    if (needsReLoop && initialized) {
      swiper.loopDestroy();
      swiper.loopCreate();
      swiper.updateSlides();
      swiper.slideTo(activeIndex - loopedSlides + swiper.loopedSlides, 0, false);
    }
    swiper.emit("breakpoint", breakpointParams);
  }

  // node_modules/swiper/esm/components/core/breakpoints/getBreakpoint.js
  function getBreakpoint(breakpoints, base, containerEl) {
    if (base === void 0) {
      base = "window";
    }
    if (!breakpoints || base === "container" && !containerEl)
      return void 0;
    var breakpoint = false;
    var window2 = getWindow();
    var currentWidth = base === "window" ? window2.innerWidth : containerEl.clientWidth;
    var currentHeight = base === "window" ? window2.innerHeight : containerEl.clientHeight;
    var points = Object.keys(breakpoints).map(function(point2) {
      if (typeof point2 === "string" && point2.indexOf("@") === 0) {
        var minRatio = parseFloat(point2.substr(1));
        var value2 = currentHeight * minRatio;
        return {
          value: value2,
          point: point2
        };
      }
      return {
        value: point2,
        point: point2
      };
    });
    points.sort(function(a, b) {
      return parseInt(a.value, 10) - parseInt(b.value, 10);
    });
    for (var i = 0; i < points.length; i += 1) {
      var _points$i = points[i], point = _points$i.point, value = _points$i.value;
      if (value <= currentWidth) {
        breakpoint = point;
      }
    }
    return breakpoint || "max";
  }

  // node_modules/swiper/esm/components/core/breakpoints/index.js
  var breakpoints_default = {
    setBreakpoint,
    getBreakpoint
  };

  // node_modules/swiper/esm/components/core/classes/addClasses.js
  function prepareClasses(entries, prefix) {
    var resultClasses = [];
    entries.forEach(function(item) {
      if (typeof item === "object") {
        Object.keys(item).forEach(function(classNames) {
          if (item[classNames]) {
            resultClasses.push(prefix + classNames);
          }
        });
      } else if (typeof item === "string") {
        resultClasses.push(prefix + item);
      }
    });
    return resultClasses;
  }
  function addClasses() {
    var swiper = this;
    var classNames = swiper.classNames, params = swiper.params, rtl = swiper.rtl, $el = swiper.$el, device2 = swiper.device, support2 = swiper.support;
    var suffixes = prepareClasses(["initialized", params.direction, {
      "pointer-events": support2.pointerEvents && !support2.touch
    }, {
      "free-mode": params.freeMode
    }, {
      "autoheight": params.autoHeight
    }, {
      "rtl": rtl
    }, {
      "multirow": params.slidesPerColumn > 1
    }, {
      "multirow-column": params.slidesPerColumn > 1 && params.slidesPerColumnFill === "column"
    }, {
      "android": device2.android
    }, {
      "ios": device2.ios
    }, {
      "css-mode": params.cssMode
    }], params.containerModifierClass);
    classNames.push.apply(classNames, suffixes);
    $el.addClass([].concat(classNames).join(" "));
    swiper.emitContainerClasses();
  }

  // node_modules/swiper/esm/components/core/classes/removeClasses.js
  function removeClasses() {
    var swiper = this;
    var $el = swiper.$el, classNames = swiper.classNames;
    $el.removeClass(classNames.join(" "));
    swiper.emitContainerClasses();
  }

  // node_modules/swiper/esm/components/core/classes/index.js
  var classes_default = {
    addClasses,
    removeClasses
  };

  // node_modules/swiper/esm/components/core/images/loadImage.js
  function loadImage(imageEl, src, srcset, sizes, checkForComplete, callback) {
    var window2 = getWindow();
    var image;
    function onReady() {
      if (callback)
        callback();
    }
    var isPicture = dom_default(imageEl).parent("picture")[0];
    if (!isPicture && (!imageEl.complete || !checkForComplete)) {
      if (src) {
        image = new window2.Image();
        image.onload = onReady;
        image.onerror = onReady;
        if (sizes) {
          image.sizes = sizes;
        }
        if (srcset) {
          image.srcset = srcset;
        }
        if (src) {
          image.src = src;
        }
      } else {
        onReady();
      }
    } else {
      onReady();
    }
  }

  // node_modules/swiper/esm/components/core/images/preloadImages.js
  function preloadImages() {
    var swiper = this;
    swiper.imagesToLoad = swiper.$el.find("img");
    function onReady() {
      if (typeof swiper === "undefined" || swiper === null || !swiper || swiper.destroyed)
        return;
      if (swiper.imagesLoaded !== void 0)
        swiper.imagesLoaded += 1;
      if (swiper.imagesLoaded === swiper.imagesToLoad.length) {
        if (swiper.params.updateOnImagesReady)
          swiper.update();
        swiper.emit("imagesReady");
      }
    }
    for (var i = 0; i < swiper.imagesToLoad.length; i += 1) {
      var imageEl = swiper.imagesToLoad[i];
      swiper.loadImage(imageEl, imageEl.currentSrc || imageEl.getAttribute("src"), imageEl.srcset || imageEl.getAttribute("srcset"), imageEl.sizes || imageEl.getAttribute("sizes"), true, onReady);
    }
  }

  // node_modules/swiper/esm/components/core/images/index.js
  var images_default = {
    loadImage,
    preloadImages
  };

  // node_modules/swiper/esm/components/core/check-overflow/index.js
  function checkOverflow() {
    var swiper = this;
    var params = swiper.params;
    var wasLocked = swiper.isLocked;
    var lastSlidePosition = swiper.slides.length > 0 && params.slidesOffsetBefore + params.spaceBetween * (swiper.slides.length - 1) + swiper.slides[0].offsetWidth * swiper.slides.length;
    if (params.slidesOffsetBefore && params.slidesOffsetAfter && lastSlidePosition) {
      swiper.isLocked = lastSlidePosition <= swiper.size;
    } else {
      swiper.isLocked = swiper.snapGrid.length === 1;
    }
    swiper.allowSlideNext = !swiper.isLocked;
    swiper.allowSlidePrev = !swiper.isLocked;
    if (wasLocked !== swiper.isLocked)
      swiper.emit(swiper.isLocked ? "lock" : "unlock");
    if (wasLocked && wasLocked !== swiper.isLocked) {
      swiper.isEnd = false;
      if (swiper.navigation)
        swiper.navigation.update();
    }
  }
  var check_overflow_default = {
    checkOverflow
  };

  // node_modules/swiper/esm/components/core/defaults.js
  var defaults_default = {
    init: true,
    direction: "horizontal",
    touchEventsTarget: "container",
    initialSlide: 0,
    speed: 300,
    cssMode: false,
    updateOnWindowResize: true,
    resizeObserver: false,
    nested: false,
    createElements: false,
    enabled: true,
    width: null,
    height: null,
    preventInteractionOnTransition: false,
    userAgent: null,
    url: null,
    edgeSwipeDetection: false,
    edgeSwipeThreshold: 20,
    freeMode: false,
    freeModeMomentum: true,
    freeModeMomentumRatio: 1,
    freeModeMomentumBounce: true,
    freeModeMomentumBounceRatio: 1,
    freeModeMomentumVelocityRatio: 1,
    freeModeSticky: false,
    freeModeMinimumVelocity: 0.02,
    autoHeight: false,
    setWrapperSize: false,
    virtualTranslate: false,
    effect: "slide",
    breakpoints: void 0,
    breakpointsBase: "window",
    spaceBetween: 0,
    slidesPerView: 1,
    slidesPerColumn: 1,
    slidesPerColumnFill: "column",
    slidesPerGroup: 1,
    slidesPerGroupSkip: 0,
    centeredSlides: false,
    centeredSlidesBounds: false,
    slidesOffsetBefore: 0,
    slidesOffsetAfter: 0,
    normalizeSlideIndex: true,
    centerInsufficientSlides: false,
    watchOverflow: false,
    roundLengths: false,
    touchRatio: 1,
    touchAngle: 45,
    simulateTouch: true,
    shortSwipes: true,
    longSwipes: true,
    longSwipesRatio: 0.5,
    longSwipesMs: 300,
    followFinger: true,
    allowTouchMove: true,
    threshold: 0,
    touchMoveStopPropagation: false,
    touchStartPreventDefault: true,
    touchStartForcePreventDefault: false,
    touchReleaseOnEdges: false,
    uniqueNavElements: true,
    resistance: true,
    resistanceRatio: 0.85,
    watchSlidesProgress: false,
    watchSlidesVisibility: false,
    grabCursor: false,
    preventClicks: true,
    preventClicksPropagation: true,
    slideToClickedSlide: false,
    preloadImages: true,
    updateOnImagesReady: true,
    loop: false,
    loopAdditionalSlides: 0,
    loopedSlides: null,
    loopFillGroupWithBlank: false,
    loopPreventsSlide: true,
    allowSlidePrev: true,
    allowSlideNext: true,
    swipeHandler: null,
    noSwiping: true,
    noSwipingClass: "swiper-no-swiping",
    noSwipingSelector: null,
    passiveListeners: true,
    containerModifierClass: "swiper-container-",
    slideClass: "swiper-slide",
    slideBlankClass: "swiper-slide-invisible-blank",
    slideActiveClass: "swiper-slide-active",
    slideDuplicateActiveClass: "swiper-slide-duplicate-active",
    slideVisibleClass: "swiper-slide-visible",
    slideDuplicateClass: "swiper-slide-duplicate",
    slideNextClass: "swiper-slide-next",
    slideDuplicateNextClass: "swiper-slide-duplicate-next",
    slidePrevClass: "swiper-slide-prev",
    slideDuplicatePrevClass: "swiper-slide-duplicate-prev",
    wrapperClass: "swiper-wrapper",
    runCallbacksOnInit: true,
    _emitClasses: false
  };

  // node_modules/swiper/esm/components/core/core-class.js
  function _defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor)
        descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }
  function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps)
      _defineProperties(Constructor.prototype, protoProps);
    if (staticProps)
      _defineProperties(Constructor, staticProps);
    return Constructor;
  }
  var prototypes = {
    modular: modular_default,
    eventsEmitter: events_emitter_default,
    update: update_default,
    translate: translate_default,
    transition: transition_default,
    slide: slide_default,
    loop: loop_default,
    grabCursor: grab_cursor_default,
    manipulation: manipulation_default,
    events: events_default,
    breakpoints: breakpoints_default,
    checkOverflow: check_overflow_default,
    classes: classes_default,
    images: images_default
  };
  var extendedDefaults = {};
  var Swiper = /* @__PURE__ */ function() {
    function Swiper2() {
      var el;
      var params;
      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }
      if (args.length === 1 && args[0].constructor && Object.prototype.toString.call(args[0]).slice(8, -1) === "Object") {
        params = args[0];
      } else {
        el = args[0];
        params = args[1];
      }
      if (!params)
        params = {};
      params = extend2({}, params);
      if (el && !params.el)
        params.el = el;
      if (params.el && dom_default(params.el).length > 1) {
        var swipers = [];
        dom_default(params.el).each(function(containerEl) {
          var newParams = extend2({}, params, {
            el: containerEl
          });
          swipers.push(new Swiper2(newParams));
        });
        return swipers;
      }
      var swiper = this;
      swiper.__swiper__ = true;
      swiper.support = getSupport();
      swiper.device = getDevice({
        userAgent: params.userAgent
      });
      swiper.browser = getBrowser();
      swiper.eventsListeners = {};
      swiper.eventsAnyListeners = [];
      if (typeof swiper.modules === "undefined") {
        swiper.modules = {};
      }
      Object.keys(swiper.modules).forEach(function(moduleName) {
        var module = swiper.modules[moduleName];
        if (module.params) {
          var moduleParamName = Object.keys(module.params)[0];
          var moduleParams = module.params[moduleParamName];
          if (typeof moduleParams !== "object" || moduleParams === null)
            return;
          if (["navigation", "pagination", "scrollbar"].indexOf(moduleParamName) >= 0 && params[moduleParamName] === true) {
            params[moduleParamName] = {
              auto: true
            };
          }
          if (!(moduleParamName in params && "enabled" in moduleParams))
            return;
          if (params[moduleParamName] === true) {
            params[moduleParamName] = {
              enabled: true
            };
          }
          if (typeof params[moduleParamName] === "object" && !("enabled" in params[moduleParamName])) {
            params[moduleParamName].enabled = true;
          }
          if (!params[moduleParamName])
            params[moduleParamName] = {
              enabled: false
            };
        }
      });
      var swiperParams = extend2({}, defaults_default);
      swiper.useParams(swiperParams);
      swiper.params = extend2({}, swiperParams, extendedDefaults, params);
      swiper.originalParams = extend2({}, swiper.params);
      swiper.passedParams = extend2({}, params);
      if (swiper.params && swiper.params.on) {
        Object.keys(swiper.params.on).forEach(function(eventName) {
          swiper.on(eventName, swiper.params.on[eventName]);
        });
      }
      if (swiper.params && swiper.params.onAny) {
        swiper.onAny(swiper.params.onAny);
      }
      swiper.$ = dom_default;
      extend2(swiper, {
        enabled: swiper.params.enabled,
        el,
        classNames: [],
        slides: dom_default(),
        slidesGrid: [],
        snapGrid: [],
        slidesSizesGrid: [],
        isHorizontal: function isHorizontal() {
          return swiper.params.direction === "horizontal";
        },
        isVertical: function isVertical() {
          return swiper.params.direction === "vertical";
        },
        activeIndex: 0,
        realIndex: 0,
        isBeginning: true,
        isEnd: false,
        translate: 0,
        previousTranslate: 0,
        progress: 0,
        velocity: 0,
        animating: false,
        allowSlideNext: swiper.params.allowSlideNext,
        allowSlidePrev: swiper.params.allowSlidePrev,
        touchEvents: function touchEvents() {
          var touch = ["touchstart", "touchmove", "touchend", "touchcancel"];
          var desktop = ["mousedown", "mousemove", "mouseup"];
          if (swiper.support.pointerEvents) {
            desktop = ["pointerdown", "pointermove", "pointerup"];
          }
          swiper.touchEventsTouch = {
            start: touch[0],
            move: touch[1],
            end: touch[2],
            cancel: touch[3]
          };
          swiper.touchEventsDesktop = {
            start: desktop[0],
            move: desktop[1],
            end: desktop[2]
          };
          return swiper.support.touch || !swiper.params.simulateTouch ? swiper.touchEventsTouch : swiper.touchEventsDesktop;
        }(),
        touchEventsData: {
          isTouched: void 0,
          isMoved: void 0,
          allowTouchCallbacks: void 0,
          touchStartTime: void 0,
          isScrolling: void 0,
          currentTranslate: void 0,
          startTranslate: void 0,
          allowThresholdMove: void 0,
          formElements: "input, select, option, textarea, button, video, label",
          lastClickTime: now(),
          clickTimeout: void 0,
          velocities: [],
          allowMomentumBounce: void 0,
          isTouchEvent: void 0,
          startMoving: void 0
        },
        allowClick: true,
        allowTouchMove: swiper.params.allowTouchMove,
        touches: {
          startX: 0,
          startY: 0,
          currentX: 0,
          currentY: 0,
          diff: 0
        },
        imagesToLoad: [],
        imagesLoaded: 0
      });
      swiper.useModules();
      swiper.emit("_swiper");
      if (swiper.params.init) {
        swiper.init();
      }
      return swiper;
    }
    var _proto = Swiper2.prototype;
    _proto.enable = function enable() {
      var swiper = this;
      if (swiper.enabled)
        return;
      swiper.enabled = true;
      if (swiper.params.grabCursor) {
        swiper.setGrabCursor();
      }
      swiper.emit("enable");
    };
    _proto.disable = function disable() {
      var swiper = this;
      if (!swiper.enabled)
        return;
      swiper.enabled = false;
      if (swiper.params.grabCursor) {
        swiper.unsetGrabCursor();
      }
      swiper.emit("disable");
    };
    _proto.setProgress = function setProgress(progress, speed) {
      var swiper = this;
      progress = Math.min(Math.max(progress, 0), 1);
      var min = swiper.minTranslate();
      var max = swiper.maxTranslate();
      var current = (max - min) * progress + min;
      swiper.translateTo(current, typeof speed === "undefined" ? 0 : speed);
      swiper.updateActiveIndex();
      swiper.updateSlidesClasses();
    };
    _proto.emitContainerClasses = function emitContainerClasses() {
      var swiper = this;
      if (!swiper.params._emitClasses || !swiper.el)
        return;
      var classes = swiper.el.className.split(" ").filter(function(className) {
        return className.indexOf("swiper-container") === 0 || className.indexOf(swiper.params.containerModifierClass) === 0;
      });
      swiper.emit("_containerClasses", classes.join(" "));
    };
    _proto.getSlideClasses = function getSlideClasses(slideEl) {
      var swiper = this;
      return slideEl.className.split(" ").filter(function(className) {
        return className.indexOf("swiper-slide") === 0 || className.indexOf(swiper.params.slideClass) === 0;
      }).join(" ");
    };
    _proto.emitSlidesClasses = function emitSlidesClasses() {
      var swiper = this;
      if (!swiper.params._emitClasses || !swiper.el)
        return;
      var updates = [];
      swiper.slides.each(function(slideEl) {
        var classNames = swiper.getSlideClasses(slideEl);
        updates.push({
          slideEl,
          classNames
        });
        swiper.emit("_slideClass", slideEl, classNames);
      });
      swiper.emit("_slideClasses", updates);
    };
    _proto.slidesPerViewDynamic = function slidesPerViewDynamic() {
      var swiper = this;
      var params = swiper.params, slides = swiper.slides, slidesGrid = swiper.slidesGrid, swiperSize = swiper.size, activeIndex = swiper.activeIndex;
      var spv = 1;
      if (params.centeredSlides) {
        var slideSize = slides[activeIndex].swiperSlideSize;
        var breakLoop;
        for (var i = activeIndex + 1; i < slides.length; i += 1) {
          if (slides[i] && !breakLoop) {
            slideSize += slides[i].swiperSlideSize;
            spv += 1;
            if (slideSize > swiperSize)
              breakLoop = true;
          }
        }
        for (var _i = activeIndex - 1; _i >= 0; _i -= 1) {
          if (slides[_i] && !breakLoop) {
            slideSize += slides[_i].swiperSlideSize;
            spv += 1;
            if (slideSize > swiperSize)
              breakLoop = true;
          }
        }
      } else {
        for (var _i2 = activeIndex + 1; _i2 < slides.length; _i2 += 1) {
          if (slidesGrid[_i2] - slidesGrid[activeIndex] < swiperSize) {
            spv += 1;
          }
        }
      }
      return spv;
    };
    _proto.update = function update3() {
      var swiper = this;
      if (!swiper || swiper.destroyed)
        return;
      var snapGrid = swiper.snapGrid, params = swiper.params;
      if (params.breakpoints) {
        swiper.setBreakpoint();
      }
      swiper.updateSize();
      swiper.updateSlides();
      swiper.updateProgress();
      swiper.updateSlidesClasses();
      function setTranslate2() {
        var translateValue = swiper.rtlTranslate ? swiper.translate * -1 : swiper.translate;
        var newTranslate = Math.min(Math.max(translateValue, swiper.maxTranslate()), swiper.minTranslate());
        swiper.setTranslate(newTranslate);
        swiper.updateActiveIndex();
        swiper.updateSlidesClasses();
      }
      var translated;
      if (swiper.params.freeMode) {
        setTranslate2();
        if (swiper.params.autoHeight) {
          swiper.updateAutoHeight();
        }
      } else {
        if ((swiper.params.slidesPerView === "auto" || swiper.params.slidesPerView > 1) && swiper.isEnd && !swiper.params.centeredSlides) {
          translated = swiper.slideTo(swiper.slides.length - 1, 0, false, true);
        } else {
          translated = swiper.slideTo(swiper.activeIndex, 0, false, true);
        }
        if (!translated) {
          setTranslate2();
        }
      }
      if (params.watchOverflow && snapGrid !== swiper.snapGrid) {
        swiper.checkOverflow();
      }
      swiper.emit("update");
    };
    _proto.changeDirection = function changeDirection(newDirection, needUpdate) {
      if (needUpdate === void 0) {
        needUpdate = true;
      }
      var swiper = this;
      var currentDirection = swiper.params.direction;
      if (!newDirection) {
        newDirection = currentDirection === "horizontal" ? "vertical" : "horizontal";
      }
      if (newDirection === currentDirection || newDirection !== "horizontal" && newDirection !== "vertical") {
        return swiper;
      }
      swiper.$el.removeClass("" + swiper.params.containerModifierClass + currentDirection).addClass("" + swiper.params.containerModifierClass + newDirection);
      swiper.emitContainerClasses();
      swiper.params.direction = newDirection;
      swiper.slides.each(function(slideEl) {
        if (newDirection === "vertical") {
          slideEl.style.width = "";
        } else {
          slideEl.style.height = "";
        }
      });
      swiper.emit("changeDirection");
      if (needUpdate)
        swiper.update();
      return swiper;
    };
    _proto.mount = function mount(el) {
      var swiper = this;
      if (swiper.mounted)
        return true;
      var $el = dom_default(el || swiper.params.el);
      el = $el[0];
      if (!el) {
        return false;
      }
      el.swiper = swiper;
      var getWrapper = function getWrapper2() {
        if (el && el.shadowRoot && el.shadowRoot.querySelector) {
          var res = dom_default(el.shadowRoot.querySelector("." + swiper.params.wrapperClass));
          res.children = function(options) {
            return $el.children(options);
          };
          return res;
        }
        return $el.children("." + swiper.params.wrapperClass);
      };
      var $wrapperEl = getWrapper();
      if ($wrapperEl.length === 0 && swiper.params.createElements) {
        var document2 = getDocument();
        var wrapper = document2.createElement("div");
        $wrapperEl = dom_default(wrapper);
        wrapper.className = swiper.params.wrapperClass;
        $el.append(wrapper);
        $el.children("." + swiper.params.slideClass).each(function(slideEl) {
          $wrapperEl.append(slideEl);
        });
      }
      extend2(swiper, {
        $el,
        el,
        $wrapperEl,
        wrapperEl: $wrapperEl[0],
        mounted: true,
        rtl: el.dir.toLowerCase() === "rtl" || $el.css("direction") === "rtl",
        rtlTranslate: swiper.params.direction === "horizontal" && (el.dir.toLowerCase() === "rtl" || $el.css("direction") === "rtl"),
        wrongRTL: $wrapperEl.css("display") === "-webkit-box"
      });
      return true;
    };
    _proto.init = function init9(el) {
      var swiper = this;
      if (swiper.initialized)
        return swiper;
      var mounted = swiper.mount(el);
      if (mounted === false)
        return swiper;
      swiper.emit("beforeInit");
      if (swiper.params.breakpoints) {
        swiper.setBreakpoint();
      }
      swiper.addClasses();
      if (swiper.params.loop) {
        swiper.loopCreate();
      }
      swiper.updateSize();
      swiper.updateSlides();
      if (swiper.params.watchOverflow) {
        swiper.checkOverflow();
      }
      if (swiper.params.grabCursor && swiper.enabled) {
        swiper.setGrabCursor();
      }
      if (swiper.params.preloadImages) {
        swiper.preloadImages();
      }
      if (swiper.params.loop) {
        swiper.slideTo(swiper.params.initialSlide + swiper.loopedSlides, 0, swiper.params.runCallbacksOnInit, false, true);
      } else {
        swiper.slideTo(swiper.params.initialSlide, 0, swiper.params.runCallbacksOnInit, false, true);
      }
      swiper.attachEvents();
      swiper.initialized = true;
      swiper.emit("init");
      swiper.emit("afterInit");
      return swiper;
    };
    _proto.destroy = function destroy9(deleteInstance, cleanStyles) {
      if (deleteInstance === void 0) {
        deleteInstance = true;
      }
      if (cleanStyles === void 0) {
        cleanStyles = true;
      }
      var swiper = this;
      var params = swiper.params, $el = swiper.$el, $wrapperEl = swiper.$wrapperEl, slides = swiper.slides;
      if (typeof swiper.params === "undefined" || swiper.destroyed) {
        return null;
      }
      swiper.emit("beforeDestroy");
      swiper.initialized = false;
      swiper.detachEvents();
      if (params.loop) {
        swiper.loopDestroy();
      }
      if (cleanStyles) {
        swiper.removeClasses();
        $el.removeAttr("style");
        $wrapperEl.removeAttr("style");
        if (slides && slides.length) {
          slides.removeClass([params.slideVisibleClass, params.slideActiveClass, params.slideNextClass, params.slidePrevClass].join(" ")).removeAttr("style").removeAttr("data-swiper-slide-index");
        }
      }
      swiper.emit("destroy");
      Object.keys(swiper.eventsListeners).forEach(function(eventName) {
        swiper.off(eventName);
      });
      if (deleteInstance !== false) {
        swiper.$el[0].swiper = null;
        deleteProps(swiper);
      }
      swiper.destroyed = true;
      return null;
    };
    Swiper2.extendDefaults = function extendDefaults(newDefaults) {
      extend2(extendedDefaults, newDefaults);
    };
    Swiper2.installModule = function installModule(module) {
      if (!Swiper2.prototype.modules)
        Swiper2.prototype.modules = {};
      var name = module.name || Object.keys(Swiper2.prototype.modules).length + "_" + now();
      Swiper2.prototype.modules[name] = module;
    };
    Swiper2.use = function use(module) {
      if (Array.isArray(module)) {
        module.forEach(function(m) {
          return Swiper2.installModule(m);
        });
        return Swiper2;
      }
      Swiper2.installModule(module);
      return Swiper2;
    };
    _createClass(Swiper2, null, [{
      key: "extendedDefaults",
      get: function get() {
        return extendedDefaults;
      }
    }, {
      key: "defaults",
      get: function get() {
        return defaults_default;
      }
    }]);
    return Swiper2;
  }();
  Object.keys(prototypes).forEach(function(prototypeGroup) {
    Object.keys(prototypes[prototypeGroup]).forEach(function(protoMethod) {
      Swiper.prototype[protoMethod] = prototypes[prototypeGroup][protoMethod];
    });
  });
  Swiper.use([resize_default, observer_default]);
  var core_class_default = Swiper;

  // node_modules/swiper/esm/components/navigation/navigation.js
  function _extends2() {
    _extends2 = Object.assign || function(target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];
        for (var key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          }
        }
      }
      return target;
    };
    return _extends2.apply(this, arguments);
  }
  var Navigation = {
    toggleEl: function toggleEl($el, disabled) {
      $el[disabled ? "addClass" : "removeClass"](this.params.navigation.disabledClass);
      if ($el[0] && $el[0].tagName === "BUTTON")
        $el[0].disabled = disabled;
    },
    update: function update() {
      var swiper = this;
      var params = swiper.params.navigation;
      var toggleEl2 = swiper.navigation.toggleEl;
      if (swiper.params.loop)
        return;
      var _swiper$navigation = swiper.navigation, $nextEl = _swiper$navigation.$nextEl, $prevEl = _swiper$navigation.$prevEl;
      if ($prevEl && $prevEl.length > 0) {
        if (swiper.isBeginning) {
          toggleEl2($prevEl, true);
        } else {
          toggleEl2($prevEl, false);
        }
        if (swiper.params.watchOverflow && swiper.enabled) {
          $prevEl[swiper.isLocked ? "addClass" : "removeClass"](params.lockClass);
        }
      }
      if ($nextEl && $nextEl.length > 0) {
        if (swiper.isEnd) {
          toggleEl2($nextEl, true);
        } else {
          toggleEl2($nextEl, false);
        }
        if (swiper.params.watchOverflow && swiper.enabled) {
          $nextEl[swiper.isLocked ? "addClass" : "removeClass"](params.lockClass);
        }
      }
    },
    onPrevClick: function onPrevClick(e) {
      var swiper = this;
      e.preventDefault();
      if (swiper.isBeginning && !swiper.params.loop)
        return;
      swiper.slidePrev();
    },
    onNextClick: function onNextClick(e) {
      var swiper = this;
      e.preventDefault();
      if (swiper.isEnd && !swiper.params.loop)
        return;
      swiper.slideNext();
    },
    init: function init4() {
      var swiper = this;
      var params = swiper.params.navigation;
      swiper.params.navigation = createElementIfNotDefined(swiper.$el, swiper.params.navigation, swiper.params.createElements, {
        nextEl: "swiper-button-next",
        prevEl: "swiper-button-prev"
      });
      if (!(params.nextEl || params.prevEl))
        return;
      var $nextEl;
      var $prevEl;
      if (params.nextEl) {
        $nextEl = dom_default(params.nextEl);
        if (swiper.params.uniqueNavElements && typeof params.nextEl === "string" && $nextEl.length > 1 && swiper.$el.find(params.nextEl).length === 1) {
          $nextEl = swiper.$el.find(params.nextEl);
        }
      }
      if (params.prevEl) {
        $prevEl = dom_default(params.prevEl);
        if (swiper.params.uniqueNavElements && typeof params.prevEl === "string" && $prevEl.length > 1 && swiper.$el.find(params.prevEl).length === 1) {
          $prevEl = swiper.$el.find(params.prevEl);
        }
      }
      if ($nextEl && $nextEl.length > 0) {
        $nextEl.on("click", swiper.navigation.onNextClick);
      }
      if ($prevEl && $prevEl.length > 0) {
        $prevEl.on("click", swiper.navigation.onPrevClick);
      }
      extend2(swiper.navigation, {
        $nextEl,
        nextEl: $nextEl && $nextEl[0],
        $prevEl,
        prevEl: $prevEl && $prevEl[0]
      });
      if (!swiper.enabled) {
        if ($nextEl)
          $nextEl.addClass(params.lockClass);
        if ($prevEl)
          $prevEl.addClass(params.lockClass);
      }
    },
    destroy: function destroy4() {
      var swiper = this;
      var _swiper$navigation2 = swiper.navigation, $nextEl = _swiper$navigation2.$nextEl, $prevEl = _swiper$navigation2.$prevEl;
      if ($nextEl && $nextEl.length) {
        $nextEl.off("click", swiper.navigation.onNextClick);
        $nextEl.removeClass(swiper.params.navigation.disabledClass);
      }
      if ($prevEl && $prevEl.length) {
        $prevEl.off("click", swiper.navigation.onPrevClick);
        $prevEl.removeClass(swiper.params.navigation.disabledClass);
      }
    }
  };
  var navigation_default = {
    name: "navigation",
    params: {
      navigation: {
        nextEl: null,
        prevEl: null,
        hideOnClick: false,
        disabledClass: "swiper-button-disabled",
        hiddenClass: "swiper-button-hidden",
        lockClass: "swiper-button-lock"
      }
    },
    create: function create3() {
      var swiper = this;
      bindModuleMethods(swiper, {
        navigation: _extends2({}, Navigation)
      });
    },
    on: {
      init: function init5(swiper) {
        swiper.navigation.init();
        swiper.navigation.update();
      },
      toEdge: function toEdge(swiper) {
        swiper.navigation.update();
      },
      fromEdge: function fromEdge(swiper) {
        swiper.navigation.update();
      },
      destroy: function destroy5(swiper) {
        swiper.navigation.destroy();
      },
      "enable disable": function enableDisable(swiper) {
        var _swiper$navigation3 = swiper.navigation, $nextEl = _swiper$navigation3.$nextEl, $prevEl = _swiper$navigation3.$prevEl;
        if ($nextEl) {
          $nextEl[swiper.enabled ? "removeClass" : "addClass"](swiper.params.navigation.lockClass);
        }
        if ($prevEl) {
          $prevEl[swiper.enabled ? "removeClass" : "addClass"](swiper.params.navigation.lockClass);
        }
      },
      click: function click2(swiper, e) {
        var _swiper$navigation4 = swiper.navigation, $nextEl = _swiper$navigation4.$nextEl, $prevEl = _swiper$navigation4.$prevEl;
        var targetEl = e.target;
        if (swiper.params.navigation.hideOnClick && !dom_default(targetEl).is($prevEl) && !dom_default(targetEl).is($nextEl)) {
          if (swiper.pagination && swiper.params.pagination && swiper.params.pagination.clickable && (swiper.pagination.el === targetEl || swiper.pagination.el.contains(targetEl)))
            return;
          var isHidden;
          if ($nextEl) {
            isHidden = $nextEl.hasClass(swiper.params.navigation.hiddenClass);
          } else if ($prevEl) {
            isHidden = $prevEl.hasClass(swiper.params.navigation.hiddenClass);
          }
          if (isHidden === true) {
            swiper.emit("navigationShow");
          } else {
            swiper.emit("navigationHide");
          }
          if ($nextEl) {
            $nextEl.toggleClass(swiper.params.navigation.hiddenClass);
          }
          if ($prevEl) {
            $prevEl.toggleClass(swiper.params.navigation.hiddenClass);
          }
        }
      }
    }
  };

  // node_modules/swiper/esm/components/pagination/pagination.js
  function _extends3() {
    _extends3 = Object.assign || function(target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];
        for (var key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          }
        }
      }
      return target;
    };
    return _extends3.apply(this, arguments);
  }
  var Pagination = {
    update: function update2() {
      var swiper = this;
      var rtl = swiper.rtl;
      var params = swiper.params.pagination;
      if (!params.el || !swiper.pagination.el || !swiper.pagination.$el || swiper.pagination.$el.length === 0)
        return;
      var slidesLength = swiper.virtual && swiper.params.virtual.enabled ? swiper.virtual.slides.length : swiper.slides.length;
      var $el = swiper.pagination.$el;
      var current;
      var total = swiper.params.loop ? Math.ceil((slidesLength - swiper.loopedSlides * 2) / swiper.params.slidesPerGroup) : swiper.snapGrid.length;
      if (swiper.params.loop) {
        current = Math.ceil((swiper.activeIndex - swiper.loopedSlides) / swiper.params.slidesPerGroup);
        if (current > slidesLength - 1 - swiper.loopedSlides * 2) {
          current -= slidesLength - swiper.loopedSlides * 2;
        }
        if (current > total - 1)
          current -= total;
        if (current < 0 && swiper.params.paginationType !== "bullets")
          current = total + current;
      } else if (typeof swiper.snapIndex !== "undefined") {
        current = swiper.snapIndex;
      } else {
        current = swiper.activeIndex || 0;
      }
      if (params.type === "bullets" && swiper.pagination.bullets && swiper.pagination.bullets.length > 0) {
        var bullets = swiper.pagination.bullets;
        var firstIndex;
        var lastIndex;
        var midIndex;
        if (params.dynamicBullets) {
          swiper.pagination.bulletSize = bullets.eq(0)[swiper.isHorizontal() ? "outerWidth" : "outerHeight"](true);
          $el.css(swiper.isHorizontal() ? "width" : "height", swiper.pagination.bulletSize * (params.dynamicMainBullets + 4) + "px");
          if (params.dynamicMainBullets > 1 && swiper.previousIndex !== void 0) {
            swiper.pagination.dynamicBulletIndex += current - swiper.previousIndex;
            if (swiper.pagination.dynamicBulletIndex > params.dynamicMainBullets - 1) {
              swiper.pagination.dynamicBulletIndex = params.dynamicMainBullets - 1;
            } else if (swiper.pagination.dynamicBulletIndex < 0) {
              swiper.pagination.dynamicBulletIndex = 0;
            }
          }
          firstIndex = current - swiper.pagination.dynamicBulletIndex;
          lastIndex = firstIndex + (Math.min(bullets.length, params.dynamicMainBullets) - 1);
          midIndex = (lastIndex + firstIndex) / 2;
        }
        bullets.removeClass(params.bulletActiveClass + " " + params.bulletActiveClass + "-next " + params.bulletActiveClass + "-next-next " + params.bulletActiveClass + "-prev " + params.bulletActiveClass + "-prev-prev " + params.bulletActiveClass + "-main");
        if ($el.length > 1) {
          bullets.each(function(bullet) {
            var $bullet2 = dom_default(bullet);
            var bulletIndex2 = $bullet2.index();
            if (bulletIndex2 === current) {
              $bullet2.addClass(params.bulletActiveClass);
            }
            if (params.dynamicBullets) {
              if (bulletIndex2 >= firstIndex && bulletIndex2 <= lastIndex) {
                $bullet2.addClass(params.bulletActiveClass + "-main");
              }
              if (bulletIndex2 === firstIndex) {
                $bullet2.prev().addClass(params.bulletActiveClass + "-prev").prev().addClass(params.bulletActiveClass + "-prev-prev");
              }
              if (bulletIndex2 === lastIndex) {
                $bullet2.next().addClass(params.bulletActiveClass + "-next").next().addClass(params.bulletActiveClass + "-next-next");
              }
            }
          });
        } else {
          var $bullet = bullets.eq(current);
          var bulletIndex = $bullet.index();
          $bullet.addClass(params.bulletActiveClass);
          if (params.dynamicBullets) {
            var $firstDisplayedBullet = bullets.eq(firstIndex);
            var $lastDisplayedBullet = bullets.eq(lastIndex);
            for (var i = firstIndex; i <= lastIndex; i += 1) {
              bullets.eq(i).addClass(params.bulletActiveClass + "-main");
            }
            if (swiper.params.loop) {
              if (bulletIndex >= bullets.length - params.dynamicMainBullets) {
                for (var _i = params.dynamicMainBullets; _i >= 0; _i -= 1) {
                  bullets.eq(bullets.length - _i).addClass(params.bulletActiveClass + "-main");
                }
                bullets.eq(bullets.length - params.dynamicMainBullets - 1).addClass(params.bulletActiveClass + "-prev");
              } else {
                $firstDisplayedBullet.prev().addClass(params.bulletActiveClass + "-prev").prev().addClass(params.bulletActiveClass + "-prev-prev");
                $lastDisplayedBullet.next().addClass(params.bulletActiveClass + "-next").next().addClass(params.bulletActiveClass + "-next-next");
              }
            } else {
              $firstDisplayedBullet.prev().addClass(params.bulletActiveClass + "-prev").prev().addClass(params.bulletActiveClass + "-prev-prev");
              $lastDisplayedBullet.next().addClass(params.bulletActiveClass + "-next").next().addClass(params.bulletActiveClass + "-next-next");
            }
          }
        }
        if (params.dynamicBullets) {
          var dynamicBulletsLength = Math.min(bullets.length, params.dynamicMainBullets + 4);
          var bulletsOffset = (swiper.pagination.bulletSize * dynamicBulletsLength - swiper.pagination.bulletSize) / 2 - midIndex * swiper.pagination.bulletSize;
          var offsetProp = rtl ? "right" : "left";
          bullets.css(swiper.isHorizontal() ? offsetProp : "top", bulletsOffset + "px");
        }
      }
      if (params.type === "fraction") {
        $el.find(classesToSelector(params.currentClass)).text(params.formatFractionCurrent(current + 1));
        $el.find(classesToSelector(params.totalClass)).text(params.formatFractionTotal(total));
      }
      if (params.type === "progressbar") {
        var progressbarDirection;
        if (params.progressbarOpposite) {
          progressbarDirection = swiper.isHorizontal() ? "vertical" : "horizontal";
        } else {
          progressbarDirection = swiper.isHorizontal() ? "horizontal" : "vertical";
        }
        var scale = (current + 1) / total;
        var scaleX = 1;
        var scaleY = 1;
        if (progressbarDirection === "horizontal") {
          scaleX = scale;
        } else {
          scaleY = scale;
        }
        $el.find(classesToSelector(params.progressbarFillClass)).transform("translate3d(0,0,0) scaleX(" + scaleX + ") scaleY(" + scaleY + ")").transition(swiper.params.speed);
      }
      if (params.type === "custom" && params.renderCustom) {
        $el.html(params.renderCustom(swiper, current + 1, total));
        swiper.emit("paginationRender", $el[0]);
      } else {
        swiper.emit("paginationUpdate", $el[0]);
      }
      if (swiper.params.watchOverflow && swiper.enabled) {
        $el[swiper.isLocked ? "addClass" : "removeClass"](params.lockClass);
      }
    },
    render: function render() {
      var swiper = this;
      var params = swiper.params.pagination;
      if (!params.el || !swiper.pagination.el || !swiper.pagination.$el || swiper.pagination.$el.length === 0)
        return;
      var slidesLength = swiper.virtual && swiper.params.virtual.enabled ? swiper.virtual.slides.length : swiper.slides.length;
      var $el = swiper.pagination.$el;
      var paginationHTML = "";
      if (params.type === "bullets") {
        var numberOfBullets = swiper.params.loop ? Math.ceil((slidesLength - swiper.loopedSlides * 2) / swiper.params.slidesPerGroup) : swiper.snapGrid.length;
        if (swiper.params.freeMode && !swiper.params.loop && numberOfBullets > slidesLength) {
          numberOfBullets = slidesLength;
        }
        for (var i = 0; i < numberOfBullets; i += 1) {
          if (params.renderBullet) {
            paginationHTML += params.renderBullet.call(swiper, i, params.bulletClass);
          } else {
            paginationHTML += "<" + params.bulletElement + ' class="' + params.bulletClass + '"></' + params.bulletElement + ">";
          }
        }
        $el.html(paginationHTML);
        swiper.pagination.bullets = $el.find(classesToSelector(params.bulletClass));
      }
      if (params.type === "fraction") {
        if (params.renderFraction) {
          paginationHTML = params.renderFraction.call(swiper, params.currentClass, params.totalClass);
        } else {
          paginationHTML = '<span class="' + params.currentClass + '"></span> / ' + ('<span class="' + params.totalClass + '"></span>');
        }
        $el.html(paginationHTML);
      }
      if (params.type === "progressbar") {
        if (params.renderProgressbar) {
          paginationHTML = params.renderProgressbar.call(swiper, params.progressbarFillClass);
        } else {
          paginationHTML = '<span class="' + params.progressbarFillClass + '"></span>';
        }
        $el.html(paginationHTML);
      }
      if (params.type !== "custom") {
        swiper.emit("paginationRender", swiper.pagination.$el[0]);
      }
    },
    init: function init6() {
      var swiper = this;
      swiper.params.pagination = createElementIfNotDefined(swiper.$el, swiper.params.pagination, swiper.params.createElements, {
        el: "swiper-pagination"
      });
      var params = swiper.params.pagination;
      if (!params.el)
        return;
      var $el = dom_default(params.el);
      if ($el.length === 0)
        return;
      if (swiper.params.uniqueNavElements && typeof params.el === "string" && $el.length > 1) {
        $el = swiper.$el.find(params.el);
      }
      if (params.type === "bullets" && params.clickable) {
        $el.addClass(params.clickableClass);
      }
      $el.addClass(params.modifierClass + params.type);
      if (params.type === "bullets" && params.dynamicBullets) {
        $el.addClass("" + params.modifierClass + params.type + "-dynamic");
        swiper.pagination.dynamicBulletIndex = 0;
        if (params.dynamicMainBullets < 1) {
          params.dynamicMainBullets = 1;
        }
      }
      if (params.type === "progressbar" && params.progressbarOpposite) {
        $el.addClass(params.progressbarOppositeClass);
      }
      if (params.clickable) {
        $el.on("click", classesToSelector(params.bulletClass), function onClick2(e) {
          e.preventDefault();
          var index2 = dom_default(this).index() * swiper.params.slidesPerGroup;
          if (swiper.params.loop)
            index2 += swiper.loopedSlides;
          swiper.slideTo(index2);
        });
      }
      extend2(swiper.pagination, {
        $el,
        el: $el[0]
      });
      if (!swiper.enabled) {
        $el.addClass(params.lockClass);
      }
    },
    destroy: function destroy6() {
      var swiper = this;
      var params = swiper.params.pagination;
      if (!params.el || !swiper.pagination.el || !swiper.pagination.$el || swiper.pagination.$el.length === 0)
        return;
      var $el = swiper.pagination.$el;
      $el.removeClass(params.hiddenClass);
      $el.removeClass(params.modifierClass + params.type);
      if (swiper.pagination.bullets)
        swiper.pagination.bullets.removeClass(params.bulletActiveClass);
      if (params.clickable) {
        $el.off("click", classesToSelector(params.bulletClass));
      }
    }
  };
  var pagination_default = {
    name: "pagination",
    params: {
      pagination: {
        el: null,
        bulletElement: "span",
        clickable: false,
        hideOnClick: false,
        renderBullet: null,
        renderProgressbar: null,
        renderFraction: null,
        renderCustom: null,
        progressbarOpposite: false,
        type: "bullets",
        dynamicBullets: false,
        dynamicMainBullets: 1,
        formatFractionCurrent: function formatFractionCurrent(number) {
          return number;
        },
        formatFractionTotal: function formatFractionTotal(number) {
          return number;
        },
        bulletClass: "swiper-pagination-bullet",
        bulletActiveClass: "swiper-pagination-bullet-active",
        modifierClass: "swiper-pagination-",
        currentClass: "swiper-pagination-current",
        totalClass: "swiper-pagination-total",
        hiddenClass: "swiper-pagination-hidden",
        progressbarFillClass: "swiper-pagination-progressbar-fill",
        progressbarOppositeClass: "swiper-pagination-progressbar-opposite",
        clickableClass: "swiper-pagination-clickable",
        lockClass: "swiper-pagination-lock"
      }
    },
    create: function create4() {
      var swiper = this;
      bindModuleMethods(swiper, {
        pagination: _extends3({
          dynamicBulletIndex: 0
        }, Pagination)
      });
    },
    on: {
      init: function init7(swiper) {
        swiper.pagination.init();
        swiper.pagination.render();
        swiper.pagination.update();
      },
      activeIndexChange: function activeIndexChange(swiper) {
        if (swiper.params.loop) {
          swiper.pagination.update();
        } else if (typeof swiper.snapIndex === "undefined") {
          swiper.pagination.update();
        }
      },
      snapIndexChange: function snapIndexChange(swiper) {
        if (!swiper.params.loop) {
          swiper.pagination.update();
        }
      },
      slidesLengthChange: function slidesLengthChange(swiper) {
        if (swiper.params.loop) {
          swiper.pagination.render();
          swiper.pagination.update();
        }
      },
      snapGridLengthChange: function snapGridLengthChange(swiper) {
        if (!swiper.params.loop) {
          swiper.pagination.render();
          swiper.pagination.update();
        }
      },
      destroy: function destroy7(swiper) {
        swiper.pagination.destroy();
      },
      "enable disable": function enableDisable2(swiper) {
        var $el = swiper.pagination.$el;
        if ($el) {
          $el[swiper.enabled ? "removeClass" : "addClass"](swiper.params.pagination.lockClass);
        }
      },
      click: function click3(swiper, e) {
        var targetEl = e.target;
        if (swiper.params.pagination.el && swiper.params.pagination.hideOnClick && swiper.pagination.$el.length > 0 && !dom_default(targetEl).hasClass(swiper.params.pagination.bulletClass)) {
          if (swiper.navigation && (swiper.navigation.nextEl && targetEl === swiper.navigation.nextEl || swiper.navigation.prevEl && targetEl === swiper.navigation.prevEl))
            return;
          var isHidden = swiper.pagination.$el.hasClass(swiper.params.pagination.hiddenClass);
          if (isHidden === true) {
            swiper.emit("paginationShow");
          } else {
            swiper.emit("paginationHide");
          }
          swiper.pagination.$el.toggleClass(swiper.params.pagination.hiddenClass);
        }
      }
    }
  };

  // node_modules/swiper/esm/components/autoplay/autoplay.js
  function _extends4() {
    _extends4 = Object.assign || function(target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];
        for (var key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          }
        }
      }
      return target;
    };
    return _extends4.apply(this, arguments);
  }
  var Autoplay = {
    run: function run() {
      var swiper = this;
      var $activeSlideEl = swiper.slides.eq(swiper.activeIndex);
      var delay = swiper.params.autoplay.delay;
      if ($activeSlideEl.attr("data-swiper-autoplay")) {
        delay = $activeSlideEl.attr("data-swiper-autoplay") || swiper.params.autoplay.delay;
      }
      clearTimeout(swiper.autoplay.timeout);
      swiper.autoplay.timeout = nextTick(function() {
        var autoplayResult;
        if (swiper.params.autoplay.reverseDirection) {
          if (swiper.params.loop) {
            swiper.loopFix();
            autoplayResult = swiper.slidePrev(swiper.params.speed, true, true);
            swiper.emit("autoplay");
          } else if (!swiper.isBeginning) {
            autoplayResult = swiper.slidePrev(swiper.params.speed, true, true);
            swiper.emit("autoplay");
          } else if (!swiper.params.autoplay.stopOnLastSlide) {
            autoplayResult = swiper.slideTo(swiper.slides.length - 1, swiper.params.speed, true, true);
            swiper.emit("autoplay");
          } else {
            swiper.autoplay.stop();
          }
        } else if (swiper.params.loop) {
          swiper.loopFix();
          autoplayResult = swiper.slideNext(swiper.params.speed, true, true);
          swiper.emit("autoplay");
        } else if (!swiper.isEnd) {
          autoplayResult = swiper.slideNext(swiper.params.speed, true, true);
          swiper.emit("autoplay");
        } else if (!swiper.params.autoplay.stopOnLastSlide) {
          autoplayResult = swiper.slideTo(0, swiper.params.speed, true, true);
          swiper.emit("autoplay");
        } else {
          swiper.autoplay.stop();
        }
        if (swiper.params.cssMode && swiper.autoplay.running)
          swiper.autoplay.run();
        else if (autoplayResult === false) {
          swiper.autoplay.run();
        }
      }, delay);
    },
    start: function start() {
      var swiper = this;
      if (typeof swiper.autoplay.timeout !== "undefined")
        return false;
      if (swiper.autoplay.running)
        return false;
      swiper.autoplay.running = true;
      swiper.emit("autoplayStart");
      swiper.autoplay.run();
      return true;
    },
    stop: function stop() {
      var swiper = this;
      if (!swiper.autoplay.running)
        return false;
      if (typeof swiper.autoplay.timeout === "undefined")
        return false;
      if (swiper.autoplay.timeout) {
        clearTimeout(swiper.autoplay.timeout);
        swiper.autoplay.timeout = void 0;
      }
      swiper.autoplay.running = false;
      swiper.emit("autoplayStop");
      return true;
    },
    pause: function pause(speed) {
      var swiper = this;
      if (!swiper.autoplay.running)
        return;
      if (swiper.autoplay.paused)
        return;
      if (swiper.autoplay.timeout)
        clearTimeout(swiper.autoplay.timeout);
      swiper.autoplay.paused = true;
      if (speed === 0 || !swiper.params.autoplay.waitForTransition) {
        swiper.autoplay.paused = false;
        swiper.autoplay.run();
      } else {
        ["transitionend", "webkitTransitionEnd"].forEach(function(event) {
          swiper.$wrapperEl[0].addEventListener(event, swiper.autoplay.onTransitionEnd);
        });
      }
    },
    onVisibilityChange: function onVisibilityChange() {
      var swiper = this;
      var document2 = getDocument();
      if (document2.visibilityState === "hidden" && swiper.autoplay.running) {
        swiper.autoplay.pause();
      }
      if (document2.visibilityState === "visible" && swiper.autoplay.paused) {
        swiper.autoplay.run();
        swiper.autoplay.paused = false;
      }
    },
    onTransitionEnd: function onTransitionEnd(e) {
      var swiper = this;
      if (!swiper || swiper.destroyed || !swiper.$wrapperEl)
        return;
      if (e.target !== swiper.$wrapperEl[0])
        return;
      ["transitionend", "webkitTransitionEnd"].forEach(function(event) {
        swiper.$wrapperEl[0].removeEventListener(event, swiper.autoplay.onTransitionEnd);
      });
      swiper.autoplay.paused = false;
      if (!swiper.autoplay.running) {
        swiper.autoplay.stop();
      } else {
        swiper.autoplay.run();
      }
    },
    onMouseEnter: function onMouseEnter() {
      var swiper = this;
      if (swiper.params.autoplay.disableOnInteraction) {
        swiper.autoplay.stop();
      } else {
        swiper.autoplay.pause();
      }
      ["transitionend", "webkitTransitionEnd"].forEach(function(event) {
        swiper.$wrapperEl[0].removeEventListener(event, swiper.autoplay.onTransitionEnd);
      });
    },
    onMouseLeave: function onMouseLeave() {
      var swiper = this;
      if (swiper.params.autoplay.disableOnInteraction) {
        return;
      }
      swiper.autoplay.paused = false;
      swiper.autoplay.run();
    },
    attachMouseEvents: function attachMouseEvents() {
      var swiper = this;
      if (swiper.params.autoplay.pauseOnMouseEnter) {
        swiper.$el.on("mouseenter", swiper.autoplay.onMouseEnter);
        swiper.$el.on("mouseleave", swiper.autoplay.onMouseLeave);
      }
    },
    detachMouseEvents: function detachMouseEvents() {
      var swiper = this;
      swiper.$el.off("mouseenter", swiper.autoplay.onMouseEnter);
      swiper.$el.off("mouseleave", swiper.autoplay.onMouseLeave);
    }
  };
  var autoplay_default = {
    name: "autoplay",
    params: {
      autoplay: {
        enabled: false,
        delay: 3e3,
        waitForTransition: true,
        disableOnInteraction: true,
        stopOnLastSlide: false,
        reverseDirection: false,
        pauseOnMouseEnter: false
      }
    },
    create: function create5() {
      var swiper = this;
      bindModuleMethods(swiper, {
        autoplay: _extends4({}, Autoplay, {
          running: false,
          paused: false
        })
      });
    },
    on: {
      init: function init8(swiper) {
        if (swiper.params.autoplay.enabled) {
          swiper.autoplay.start();
          var document2 = getDocument();
          document2.addEventListener("visibilitychange", swiper.autoplay.onVisibilityChange);
          swiper.autoplay.attachMouseEvents();
        }
      },
      beforeTransitionStart: function beforeTransitionStart(swiper, speed, internal) {
        if (swiper.autoplay.running) {
          if (internal || !swiper.params.autoplay.disableOnInteraction) {
            swiper.autoplay.pause(speed);
          } else {
            swiper.autoplay.stop();
          }
        }
      },
      sliderFirstMove: function sliderFirstMove(swiper) {
        if (swiper.autoplay.running) {
          if (swiper.params.autoplay.disableOnInteraction) {
            swiper.autoplay.stop();
          } else {
            swiper.autoplay.pause();
          }
        }
      },
      touchEnd: function touchEnd(swiper) {
        if (swiper.params.cssMode && swiper.autoplay.paused && !swiper.params.autoplay.disableOnInteraction) {
          swiper.autoplay.run();
        }
      },
      destroy: function destroy8(swiper) {
        swiper.autoplay.detachMouseEvents();
        if (swiper.autoplay.running) {
          swiper.autoplay.stop();
        }
        var document2 = getDocument();
        document2.removeEventListener("visibilitychange", swiper.autoplay.onVisibilityChange);
      }
    }
  };

  // js/src/components/SchweigerSlider.ts
  var SchweigerSlider = class {
    initialize() {
      const containers = document.querySelectorAll(".gw-schweiger-testimonials-slider > .swiper-container");
      core_class_default.use([autoplay_default, navigation_default, pagination_default]);
      const swipers = Array.from(containers).map((container) => {
        const settings = {
          createElements: true,
          navigation: false,
          pagination: {
            el: ".swiper-pagination",
            clickable: true
          },
          autoplay: {
            delay: 5e3
          }
        };
        const newSwiper = new core_class_default(container, settings);
        return newSwiper;
      });
    }
  };

  // js/schweiger_design_editable.js
  site_navigation_timeout = null;
  var touch_flag = false;
  (function(gw) {
    gw(window.jQuery, window, document);
  })(function($3, window2, document2) {
    $3(function() {
      $3(document2).ready(function() {
        $3("#content a[href]").each(function() {
          if ($3(this).find("img").length > 0) {
            $3(this).css("border", "none");
          }
        });
        $3(".gw-project-list-filter").on("change", function() {
          const currentState2 = history.state;
          const value = $3(this).val();
          const $projectList = $3(this).next().find(".gw-project-list");
          const $projectListItems = $projectList.find(".gw-projects-list-item");
          if (value) {
            $projectListItems.each(function() {
              const categories = $3(this).data("categories");
              let hasMatch = false;
              for (var index2 = 0; index2 < categories.length; ++index2) {
                if (categories[index2] == value) {
                  hasMatch = true;
                  break;
                }
              }
              if (!hasMatch) {
                $3(this).addClass("hidden");
              } else {
                $3(this).removeClass("hidden");
              }
            });
          } else {
            $projectListItems.removeClass("hidden");
          }
          if (currentState2 === null) {
            var stateObj = {
              gwShowAllProjects: false,
              gwFilterSelectValue: value
            };
          } else {
            var stateObj = {
              gwShowAllProjects: currentState2.gwShowAllProjects ? currentState2.gwShowAllProjects : false,
              gwFilterSelectValue: value
            };
          }
          history.pushState(stateObj, "", "");
        });
        const currentState = history.state;
        if (currentState !== null && currentState.gwFilterSelectValue !== "undefined" && currentState.gwFilterSelectValue !== "") {
          $3('.gw-project-list-filter option[value="' + currentState.gwFilterSelectValue + '"]').prop("selected", true);
          $3(".gw-project-list-filter").trigger("change");
        }
        $3("a[href^='#']:not(.gw-mobile-navigation-anchor)").on("click", function() {
          var target = $3(this.hash);
          var scrolling_offset = parseInt($3("#masthead-wrapper").outerHeight());
          target = target.length && target || $3('[name="' + this.hash.slice(1) + '"]');
          if (target.length) {
            var targetOffset = parseInt(target.offset().top);
            $3("html,body").stop(true, true).animate({ scrollTop: targetOffset - scrolling_offset }, 700);
            return false;
          }
        });
        $3(".project-list-page").append('<li class="more-trigger" style="display:block;position:absolute;right: 0px;bottom: 0px;list-style:none;cursor:pointer;">&gt;&gt; weitere</li>');
        $3(".more-trigger").click(function() {
          var list_element_invisible = $3(".project-list-page .projects-list-item:hidden");
          var list_element_invisible_amount = list_element_invisible.length;
          list_element_invisible.eq(0).slideDown();
          list_element_invisible.eq(1).slideDown();
          list_element_invisible.eq(2).slideDown();
          list_element_invisible.eq(3).slideDown();
          list_element_invisible.eq(4).slideDown();
          list_element_invisible.eq(5).slideDown();
          if (list_element_invisible_amount <= 6) {
            $3(this).slideUp();
          }
        });
        $3("#mobile-navigation [id]").each(function() {
          $3(this).removeAttr("id");
        });
        $3("#mobile-navigation .navigation-element-link").on("click", function() {
          $3(this).parent().find(".subnavi-element").stop(true, true).slideToggle();
          return false;
        });
        $3(document2).on("click", ".mobile-navigation-trigger", function(e) {
          if (!touch_flag) {
            flag = true;
            setTimeout(function() {
              flag = false;
            }, 100);
            $3(this).toggleClass("active");
            if ($3(this).hasClass("active") && $3("#mobile-navigation:hidden")) {
              $3("#mobile-navigation").stop(true, true).slideDown();
              $3("#mobile-navigation").addClass("visible");
              $3("body,.site-header-inner").addClass("mobile-nav-visible");
            } else {
              $3("#mobile-navigation").stop(true, true).slideUp();
              $3("#mobile-navigation").removeClass("visible");
              $3("body,.site-header-inner").removeClass("mobile-nav-visible");
            }
          }
          return false;
        });
        $3(window2).scroll(function() {
          var scrolling_offset = 50;
          if ($3(window2).scrollTop() > scrolling_offset) {
            $3("body").addClass("scrolled-body");
          } else {
            $3("body").removeClass("scrolled-body");
          }
        });
      });
      if ($3("[data-video-embed-code]").length > 0 && $3("[data-video-embed-code]").data("video-embed-code")) {
        var video_embed_code = $3("[data-video-embed-code]").data("video-embed-code");
        $3("[data-video-embed-code]").YTPlayer({
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
    });
    if (typeof Object.create !== "function") {
      Object.create = function(obj) {
        function F() {
        }
        F.prototype = obj;
        return new F();
      };
    }
    (function($4, window3, document3) {
      var loadAPI = function loadAPI2(callback) {
        var tag = document3.createElement("script"), head = document3.getElementsByTagName("head")[0];
        if (window3.location.origin == "file://") {
          tag.src = "http://www.youtube.com/iframe_api";
        } else {
          tag.src = "//www.youtube.com/iframe_api";
        }
        head.appendChild(tag);
        head = null;
        tag = null;
        iframeIsReady(callback);
      }, iframeIsReady = function iframeIsReady2(callback) {
        if (typeof YT === "undefined" && typeof window3.loadingPlayer === "undefined") {
          window3.loadingPlayer = true;
          window3.dfd = $4.Deferred();
          window3.onYouTubeIframeAPIReady = function() {
            window3.onYouTubeIframeAPIReady = null;
            window3.dfd.resolve("done");
            callback();
          };
        } else if (typeof YT === "object") {
          callback();
        } else {
          window3.dfd.done(function(name) {
            callback();
          });
        }
      };
      YTPlayer = {
        player: null,
        defaults: {
          ratio: 16 / 9,
          videoId: "",
          mute: true,
          repeat: true,
          width: $4(window3).width(),
          playButtonClass: "YTPlayer-play",
          pauseButtonClass: "YTPlayer-pause",
          muteButtonClass: "YTPlayer-mute",
          volumeUpClass: "YTPlayer-volume-up",
          volumeDownClass: "YTPlayer-volume-down",
          start: 0,
          pauseOnScroll: false,
          fitToBackground: true,
          playerVars: {
            iv_load_policy: 3,
            modestbranding: 1,
            autoplay: 1,
            controls: 0,
            showinfo: 0,
            wmode: "opaque",
            branding: 0,
            autohide: 0
          },
          events: null
        },
        init: function init9(node, userOptions) {
          var self = this;
          self.userOptions = userOptions;
          self.$body = $4("body"), self.$node = $4(node), self.$window = $4(window3);
          self.defaults.events = {
            "onReady": function(e) {
              self.onPlayerReady(e);
              if (self.options.pauseOnScroll) {
                self.pauseOnScroll();
              }
              if (typeof self.options.callback == "function") {
                self.options.callback.call(this);
              }
            },
            "onStateChange": function(e) {
              if (e.data === 1) {
                self.$node.find("img").fadeOut(400);
                self.$node.addClass("loaded");
              } else if (e.data === 0 && self.options.repeat) {
                self.player.seekTo(self.options.start);
              }
            }
          };
          self.options = $4.extend(true, {}, self.defaults, self.userOptions);
          self.options.height = Math.ceil(self.options.width / self.options.ratio);
          self.ID = new Date().getTime();
          self.holderID = "YTPlayer-ID-" + self.ID;
          if (self.options.fitToBackground) {
            self.createBackgroundVideo();
          } else {
            self.createContainerVideo();
          }
          self.$window.on("resize.YTplayer" + self.ID, function() {
            self.resize(self);
          });
          loadAPI(self.onYouTubeIframeAPIReady.bind(self));
          self.resize(self);
          return self;
        },
        pauseOnScroll: function pauseOnScroll() {
          var self = this;
          self.$window.on("scroll.YTplayer" + self.ID, function() {
            var state = self.player.getPlayerState();
            if (state === 1) {
              self.player.pauseVideo();
            }
          });
          self.$window.scrollStopped(function() {
            var state = self.player.getPlayerState();
            if (state === 2) {
              self.player.playVideo();
            }
          });
        },
        createContainerVideo: function createContainerVideo() {
          var self = this;
          var $YTPlayerString = $4('<div id="ytplayer-container' + self.ID + '" >	                                    <div id="' + self.holderID + '" class="ytplayer-player-inline"></div> 	                                    </div> 	                                    <div id="ytplayer-shield" class="ytplayer-shield"></div>');
          self.$node.append($YTPlayerString);
          self.$YTPlayerString = $YTPlayerString;
          $YTPlayerString = null;
        },
        createBackgroundVideo: function createBackgroundVideo() {
          var self = this, $YTPlayerString = $4('<div id="ytplayer-container' + self.ID + '" class="ytplayer-container background">	                                    <div id="' + self.holderID + '" class="ytplayer-player"></div>	                                    </div>	                                    <div id="ytplayer-shield" class="ytplayer-shield"></div>');
          self.$node.append($YTPlayerString);
          self.$YTPlayerString = $YTPlayerString;
          $YTPlayerString = null;
        },
        resize: function resize2(self) {
          var container = $4(window3);
          if (!self.options.fitToBackground) {
            container = self.$node;
          }
          var width = container.width(), pWidth, height = container.height(), pHeight, $YTPlayerPlayer = $4("#" + self.holderID);
          if (width / self.options.ratio < height) {
            pWidth = Math.ceil(height * self.options.ratio);
            $YTPlayerPlayer.width(pWidth).height(height).css({
              left: (width - pWidth) / 2,
              top: 0
            });
          } else {
            pHeight = Math.ceil(width / self.options.ratio);
            $YTPlayerPlayer.width(width).height(pHeight).css({
              left: 0,
              top: (height - pHeight) / 2
            });
          }
          $YTPlayerPlayer = null;
          container = null;
        },
        onYouTubeIframeAPIReady: function onYouTubeIframeAPIReady() {
          var self = this;
          self.player = new window3.YT.Player(self.holderID, self.options);
        },
        onPlayerReady: function onPlayerReady(e) {
          if (this.options.mute) {
            e.target.mute();
          }
          e.target.playVideo();
        },
        getPlayer: function getPlayer() {
          return this.player;
        },
        destroy: function destroy9() {
          var self = this;
          self.$node.removeData("yt-init").removeData("ytPlayer").removeClass("loaded");
          self.$YTPlayerString.remove();
          $4(window3).off("resize.YTplayer" + self.ID);
          $4(window3).off("scroll.YTplayer" + self.ID);
          self.$body = null;
          self.$node = null;
          self.$YTPlayerString = null;
          self.player.destroy();
          self.player = null;
        }
      };
      $4.fn.scrollStopped = function(callback) {
        var $this = $4(this), self = this;
        $this.scroll(function() {
          if ($this.data("scrollTimeout")) {
            clearTimeout($this.data("scrollTimeout"));
          }
          $this.data("scrollTimeout", setTimeout(callback, 250, self));
        });
      };
      $4.fn.YTPlayer = function(options) {
        return this.each(function() {
          var el = this;
          $4(el).data("yt-init", true);
          var player = Object.create(YTPlayer);
          player.init(el, options);
          $4.data(el, "ytPlayer", player);
        });
      };
    })(jQuery, window2, document2);
  });

  // js/src/index.ts
  document.addEventListener("DOMContentLoaded", (event) => {
    const components = [
      new MoreProjectsButton(),
      new SchweigerSlider()
    ];
    for (const component of components) {
      component.initialize();
    }
  });
  window.addEventListener("load", (event) => {
    document.body.classList.remove("preload");
  });
})();

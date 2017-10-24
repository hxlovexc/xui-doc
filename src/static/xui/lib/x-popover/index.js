(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("vue"));
	else if(typeof define === 'function' && define.amd)
		define("x-popover", ["vue"], factory);
	else if(typeof exports === 'object')
		exports["x-popover"] = factory(require("vue"));
	else
		root["x-popover"] = factory(root["Vue"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_41__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 189);
/******/ })
/************************************************************************/
/******/ ({

/***/ 189:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _xPopoverContent = __webpack_require__(190);

var _xPopoverContent2 = _interopRequireDefault(_xPopoverContent);

var _popover = __webpack_require__(191);

var _dom = __webpack_require__(19);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  props: {
    value: {
      type: Boolean,
      default: false
    },
    trigger: {
      type: String,
      default: 'click'
    },
    direction: {
      type: String,
      default: 'top'
    },
    title: {
      type: String,
      default: ''
    }
  },
  data: function data() {
    return {
      popover: '',

      timeout: '',
      focusEl: ''
    };
  },

  methods: {
    createpopover: function createpopover() {
      var data = {
        show: this.value,
        direction: this.direction,
        title: this.$slots.title || this.title,
        content: this.$slots.content
      };
      var popover = this.popover = (0, _popover.created)(data, _xPopoverContent2.default);

      this.trigger === 'hover' && this.popoverContentBindEvent();
      return popover;
    },
    bindEvent: function bindEvent() {
      var $el = this.$el;

      if (process.env.NODE_ENV !== 'production') {
        if (!this.$slots.content) {
          console.error('xui -> (x-popover组件) : slot中的content不能为空');
          return;
        }
      }

      switch (this.trigger) {
        case 'click':
          (0, _dom.on)($el, 'click', this.clickOpen, true);
          break;
        case 'hover':
          (0, _dom.on)($el, 'mouseenter', this.mouseenterOpen);
          (0, _dom.on)($el, 'mouseleave', this.mouseleave);
          break;
        case 'focus':
          var el = $el.childNodes[0];
          if (el.nodeName === 'INPUT' || el.nodeName === 'TEXTAREA') {
            this.focusEl = el;
          } else if (el.childNodes.length) {
            var childNodes = el.childNodes || this.focusEl;
            for (var i = 0; i < childNodes.length; i++) {
              var node = childNodes[i];
              var name = node.nodeName;
              if (name === 'INPUT' || name === 'TEXTAREA') {
                this.focusEl = node;
                break;
              }
            }
          }
          if (this.focusEl) {
            (0, _dom.on)(this.focusEl, 'focus', this.show);
            (0, _dom.on)(this.focusEl, 'blur', this.hide);
          } else {
            (0, _dom.on)($el, 'mousedown', this.mousedownShow);
          }
          break;
      }
    },
    popoverContentBindEvent: function popoverContentBindEvent() {
      var popoverEl = this.popover.$el;
      (0, _dom.on)(popoverEl, 'mouseenter', this.mouseenterOpen);
      (0, _dom.on)(popoverEl, 'mouseleave', this.mouseleave);
    },
    clickOpen: function clickOpen(event) {
      this.show();
      (0, _dom.clickOutside)(this.popover.$el, this.hide, true);
    },
    mousedownShow: function mousedownShow() {
      this.show();
      (0, _dom.once)(document, 'mouseup', this.hide);
    },
    mouseenterOpen: function mouseenterOpen() {
      this.timeout = clearTimeout(this.timeout);
      this.show();
    },
    mouseleave: function mouseleave() {
      var _this = this;

      this.timeout = setTimeout(function () {
        _this.hide();
      }, 50);
    },
    hide: function hide() {
      var popover = this.popover;

      popover.$el.clickOutside && this.trigger === 'click' && (0, _dom.off)(document, 'click', popover.$el.clickOutside, true);
      popover.show = false;
      this.$emit('input', false);
      this.$emit('change', false);

      (0, _dom.off)(window, 'resize', this.calculationPosition);
    },
    show: function show() {
      var popover = this.popover || this.createpopover();

      popover.show = true;
      this.$emit('input', true);
      this.calculationPosition();

      (0, _dom.on)(window, 'resize', this.calculationPosition);
    },
    calculationPosition: function calculationPosition() {
      var _this2 = this;

      this.$nextTick(function () {
        var popover = _this2.popover;

        var _computationsPosition = (0, _popover.computationsPosition)(_this2.direction, _this2.$el, popover.$el),
            left = _computationsPosition.left,
            top = _computationsPosition.top;

        popover.left = left;
        popover.top = top;
        _this2.$emit('change', true);
      });
    }
  },
  render: function render(h) {
    return h(
      'div',
      { 'class': 'x-popover-box' },
      [this.$slots.default]
    );
  },
  beforeDestroy: function beforeDestroy() {
    var $el = this.$el;

    switch (this.trigger) {
      case 'click':
        (0, _dom.off)($el, 'click', this.clickOpen, true);
        break;
      case 'hover':
        if (this.popover === '') return;
        var $popoverEl = this.popover.$el;
        (0, _dom.off)($el, 'mouseenter', this.mouseenterOpen);
        (0, _dom.off)($el, 'mouseleave', this.mouseleave);
        (0, _dom.off)($popoverEl, 'mouseenter', this.mouseenterOpen);
        (0, _dom.off)($popoverEl, 'mouseleave', this.mouseleave);
        break;
      case 'focus':
        if (this.focusEl) {
          (0, _dom.off)(this.focusEl, 'focus', this.show);
          (0, _dom.off)(this.focusEl, 'blur', this.hide);
        } else {
          (0, _dom.off)($el, 'mousedown', this.mousedownShow);
        }
        break;
    }

    (0, _dom.off)(window, 'resize', this.calculationPosition);
  },

  watch: {
    value: function value(_value) {
      if (_value === this.popover.show) return;
      var trigger = this.trigger;
      if (_value) {
        trigger === 'click' ? this.clickOpen() : this.show();
      } else {
        this.hide();
      }
    }
  },
  mounted: function mounted() {
    var _this3 = this;

    this.bindEvent();

    setTimeout(function () {
      _this3.$nextTick(function () {
        _this3.popover.show === false && _this3.value && _this3.show();
      });
    }, 10);
  }
};
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(45)))

/***/ }),

/***/ 19:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.on = on;
exports.off = off;
exports.once = once;
exports.clickOutside = clickOutside;
function on(el, event, callback) {
  var useCapture = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;

  el.addEventListener(event, callback, useCapture);
}

function off(el, event, callback) {
  var useCapture = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;

  el.removeEventListener(event, callback, useCapture);
}

function once(el, event, callback) {
  function trigger() {
    callback && callback.apply(this, arguments);
    off(el, event, trigger);
  }
  on(el, event, trigger);
}

function clickOutside(el, callback, useCapture) {
  if (typeof el === 'function') {
    callback = el;
    el = '';
  }
  el.clickOutside = function (event) {
    var state = false;

    el = [].concat(el);
    if (el.length) {
      for (var i = 0; i < el.length; i++) {
        if (el[i].contains(event.target) === false) {
          state = true;
          break;
        }
      }
    } else {
      state = true;
    }
    if (state && callback) {
      callback();
      el.clickOutside = null;
    }
  };
  on(document, 'click', el.clickOutside, useCapture);
}

/***/ }),

/***/ 190:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  data: function data() {
    return {
      direction: '',
      type: '',
      content: '',
      title: '',
      show: false,
      left: '',
      top: ''
    };
  },
  render: function render(h) {
    var tipClass = {
      'x-popover': true
    };

    tipClass['x-popover-' + this.direction] = true;

    var tipStyle = {
      left: this.left + 'px',
      top: this.top + 'px'
    };

    tipStyle.display = this.show ? 'inline-block' : 'none';
    return h(
      'div',
      {
        'class': tipClass,
        style: tipStyle
      },
      [h(
        'div',
        { 'class': 'x-popover-text' },
        [this.title ? h(
          'div',
          { 'class': 'x-popover-title' },
          [this.title]
        ) : null, h(
          'div',
          { 'class': 'x-popover-content' },
          [this.content]
        )]
      ), h(
        'span',
        { 'class': 'arrow' },
        []
      )]
    );
  }
};

/***/ }),

/***/ 191:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.created = created;
exports.computationsPosition = computationsPosition;

var _vue = __webpack_require__(41);

var _vue2 = _interopRequireDefault(_vue);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function created(data, component) {
  var Instance = _vue2.default.extend(component);
  var tip = new Instance({
    el: document.createElement('div'),
    data: data
  });
  document.body.appendChild(tip.$el);
  return tip;
}

function computationsPosition(direction, el, boxEl) {
  var left = 0,
      top = 0;
  var position = el.getBoundingClientRect();
  var tipPosition = boxEl.getBoundingClientRect();

  switch (direction) {
    case 'top':
      left = position.left + position.width / 2 - tipPosition.width / 2;
      top = position.top - tipPosition.height;
      break;
    case 'bottom':
      left = position.left + position.width / 2 - tipPosition.width / 2;
      top = position.top + position.height;
      break;
    case 'left':
      left = position.left - tipPosition.width;
      top = position.top + position.height / 2 - tipPosition.height / 2;
      break;
    case 'right':
      left = position.left + position.width;
      top = position.top + position.height / 2 - tipPosition.height / 2;
      break;
  }

  left = left + (document.body.scrollLeft || document.documentElement.scrollLeft);
  top = top + (document.body.scrollTop || document.documentElement.scrollTop);
  return { left: left, top: top };
}

/***/ }),

/***/ 41:
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_41__;

/***/ }),

/***/ 45:
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ })

/******/ });
});
//# sourceMappingURL=index.js.map
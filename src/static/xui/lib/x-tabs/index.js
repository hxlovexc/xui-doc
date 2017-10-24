(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("x-tabs", [], factory);
	else if(typeof exports === 'object')
		exports["x-tabs"] = factory();
	else
		root["x-tabs"] = factory();
})(this, function() {
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
/******/ 	return __webpack_require__(__webpack_require__.s = 256);
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
/***/ (function(module, exports) {

// this module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle

module.exports = function normalizeComponent (
  rawScriptExports,
  compiledTemplate,
  scopeId,
  cssModules
) {
  var esModule
  var scriptExports = rawScriptExports = rawScriptExports || {}

  // ES6 modules interop
  var type = typeof rawScriptExports.default
  if (type === 'object' || type === 'function') {
    esModule = rawScriptExports
    scriptExports = rawScriptExports.default
  }

  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (compiledTemplate) {
    options.render = compiledTemplate.render
    options.staticRenderFns = compiledTemplate.staticRenderFns
  }

  // scopedId
  if (scopeId) {
    options._scopeId = scopeId
  }

  // inject cssModules
  if (cssModules) {
    var computed = Object.create(options.computed || null)
    Object.keys(cssModules).forEach(function (key) {
      var module = cssModules[key]
      computed[key] = function () { return module }
    })
    options.computed = computed
  }

  return {
    esModule: esModule,
    exports: scriptExports,
    options: options
  }
}


/***/ }),

/***/ 256:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.xTabItem = exports.xTabs = undefined;

var _xTabs = __webpack_require__(257);

var _xTabs2 = _interopRequireDefault(_xTabs);

var _xTabItem = __webpack_require__(259);

var _xTabItem2 = _interopRequireDefault(_xTabItem);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.xTabs = _xTabs2.default;
exports.xTabItem = _xTabItem2.default;

/***/ }),

/***/ 257:
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(258),
  /* template */
  null,
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 258:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  props: {
    type: {
      type: String,
      default: 'default'
    },
    value: {
      type: [String, Number]
    }
  },
  data: function data() {
    return {
      contents: [],
      active: '',
      activeBarWidth: 0,
      activeBarLeft: 0
    };
  },

  methods: {
    switchTab: function switchTab(event, name, index) {
      name = name || index;
      if (this.contents[index].disabled) return;
      this.active = name;
      this.setActiveBar(this.getTab(index));
      this.$emit('change', name, this.$el);
      this.$emit('input', name);
    },
    remove: function remove(event, index) {
      var list = this.contents;
      if (list[index].disabled) return;
      event.stopPropagation();

      var data = list.splice(index, 1)[0];
      this.$slots.default.splice(index, 1);

      if (data.curKey === this.active) {
        var newCur = list[index] || list[index - 1];
        this.active = newCur.curKey;
      }
    },
    setActiveBar: function setActiveBar(el) {
      this.activeBarWidth = el.clientWidth;

      this.activeBarLeft = el.getBoundingClientRect().left - this.$refs.tabs.getBoundingClientRect().left;
    },
    changeActiveBar: function changeActiveBar() {
      var _this = this;

      if (this.type === 'default') {
        this.$nextTick(function () {
          var activeBarWidth = 0;
          var activeBarLeft = 0;
          for (var i = 0; i < _this.contents.length; i++) {
            var item = _this.contents[i];
            var width = _this.getTab(i).clientWidth;
            if (item.name === _this.active || i === _this.active) {
              activeBarWidth = width;
              break;
            } else {
              activeBarLeft += width;
            }
          }
          _this.activeBarWidth = activeBarWidth;
          _this.activeBarLeft = activeBarLeft;
        });
      }
    },
    getTab: function getTab(index) {
      return this.$refs.tabs.querySelectorAll('li')[index];
    }
  },
  watch: {
    value: function value(_value) {
      if (_value === this.active) return;
      this.changeActiveBar();
      this.active = _value;
    }
  },
  mounted: function mounted() {
    this.active = this.value || this.contents[0].curKey;

    this.type === 'default' && this.changeActiveBar();
  },
  render: function render(h) {
    var _this2 = this;

    var tabs = this._l(this.contents, function (item, index) {
      var navLabel = item.label || item.$slots.label;
      return h(
        'li',
        {
          ref: 'li',
          'class': {
            'x-tabs-nav-active': _this2.active === item.curKey,
            'x-disabled': item.disabled
          },
          on: {
            'click': function click(event) {
              return _this2.switchTab(event, item.curKey, index);
            }
          }
        },
        [navLabel]
      );
    });
    var activeBar = this.type === 'default' ? h(
      'div',
      {
        'class': 'x-tabs-active-bar',
        style: {
          width: this.activeBarWidth + 'px',
          transform: 'translateX(' + this.activeBarLeft + 'px)'
        }
      },
      []
    ) : null;
    return h(
      'div',
      {
        'class': ['x-tabs-box', 'x-tabs-' + this.type] },
      [h(
        'ul',
        {
          'class': 'x-tabs-nav',
          ref: 'tabs'
        },
        [tabs, activeBar]
      ), h(
        'div',
        { 'class': 'x-tabs-content' },
        [this.$slots.default]
      )]
    );
  }
};

/***/ }),

/***/ 259:
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(260),
  /* template */
  __webpack_require__(261),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 260:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  props: {
    label: {
      type: String,
      default: ''
    },
    name: {
      type: [String, Number],
      default: ''
    },
    disabled: {
      type: Boolean,
      default: false
    },
    checked: {
      type: Boolean,
      default: false
    }
  },
  data: function data() {
    return {
      curKey: ''
    };
  },

  computed: {
    active: function active() {
      return this.$parent.active === this.curKey;
    }
  },
  mounted: function mounted() {
    var PARENT = this.$parent;
    var contents = PARENT.contents;
    contents.push(this);
    this.curKey = this.name || contents.indexOf(this);

    this.checked && (PARENT.active = this.curKey);
  }
};

/***/ }),

/***/ 261:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.active),
      expression: "active"
    }]
  }, [_vm._t("default")], 2)
},staticRenderFns: []}

/***/ })

/******/ });
});
//# sourceMappingURL=index.js.map
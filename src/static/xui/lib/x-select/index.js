(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("x-select", [], factory);
	else if(typeof exports === 'object')
		exports["x-select"] = factory();
	else
		root["x-select"] = factory();
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
/******/ 	return __webpack_require__(__webpack_require__.s = 220);
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

/***/ 15:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.find = find;
exports.parent = parent;
function find(name, callback) {
  var childrens = this.$children;
  var components = [];
  if (childrens.length) {
    childrens.forEach(function (item) {
      var childName = item.$options.name;
      var childs = item.$children;

      if (name === childName) {
        components.push(item);
        callback && callback(item);
      }

      childs.length && find(item, name, callback);
    });
  }
  return components;
}

function parent(name, callback) {
  var parent = this.$parent;
  var parentName = parent.$options.name;

  while (parent && parentName !== name) {
    parent = parent.$parent;
    if (parent) {
      parentName = parent.$options.name;
    }
  }
  return parent;
}

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

/***/ 220:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _xSelect = __webpack_require__(221);

var _xSelect2 = _interopRequireDefault(_xSelect);

var _xOption = __webpack_require__(224);

var _xOption2 = _interopRequireDefault(_xOption);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = {
  xSelect: _xSelect2.default,
  xOption: _xOption2.default
};

/***/ }),

/***/ 221:
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(222),
  /* template */
  __webpack_require__(223),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 222:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _dom = __webpack_require__(19);

exports.default = {
  name: 'x-select',
  props: {
    value: {
      type: [String, Number, Array],
      required: true,
      default: ''
    },
    type: {
      type: String,
      default: 'default'
    },
    radius: {
      type: Boolean,
      default: false
    },
    placeholder: {
      type: String,
      default: '请选择'
    },
    multiple: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    },
    loading: {
      type: Boolean,
      default: false
    },
    filter: {
      type: Boolean,
      default: false
    },
    remote: {
      type: Boolean,
      default: false
    },
    remoteMethod: {
      type: Function
    }
  },
  data: function data() {
    return {
      show: false,
      query: '',
      curLabel: '',
      curIndex: '',
      selected: {},
      hoverIndex: -1,
      options: [],
      filterOptionsLength: false,
      adHoc: []
    };
  },

  methods: {
    toggleShow: function toggleShow() {
      if (this.disabled) return;
      if (this.show) {
        this.hideOptions();
      } else {
        this.showOptions();
      }
    },
    showOptions: function showOptions() {
      this.show = true;
      (0, _dom.on)(document, 'click', this.isElClick);
      (0, _dom.on)(document, 'keydown', this.keydown);
      this.$emit('show-change', this.show, this.$el);

      this.hoverIndex = this.curLabel && this.curIndex !== '' ? this.curIndex : -1;
    },
    hideOptions: function hideOptions() {
      this.show = false;
      (0, _dom.off)(document, 'click', this.isElClick);
      (0, _dom.off)(document, 'keydown', this.keydown);
      this.$emit('show-change', this.show, this.$el);
    },
    isElClick: function isElClick(_ref) {
      var target = _ref.target;

      if (this.$el.contains(target) === false) {
        !this.query && (this.hoverIndex = -1);
        this.hideOptions();
      }
    },
    optionsChange: function optionsChange(index, isChange) {
      var data = this.options[index];
      this.hoverIndex = index;
      if (this.multiple) {
        var value = this.value.slice();
        var valueIndex = value.indexOf(data.value);

        if (valueIndex === -1) {
          value.push(data.value);
        } else {
          value.splice(valueIndex, 1);
        }

        this.adHoc = this.adHoc.concat(value);
        if (isChange) {
          this.$emit('input', this.adHoc);
          this.$emit('change', this.adHoc);
        }
      } else {
        var _value = data.value;
        if (isChange) {
          this.hideOptions();

          if (this.value === _value) return;
          this.$emit('input', _value);
          this.$emit('change', _value);
        }
      }
      this.curIndex = index;
    },
    modifyHoverIndex: function modifyHoverIndex(type) {
      var siAllDisabled = this.options.length === this.options.filter(function (item) {
        return item.disabled === true;
      }).length;
      if (siAllDisabled) return;
      var length = this.options.length - 1;
      if (type === 'next') {
        this.hoverIndex++;
        this.hoverIndex = this.hoverIndex > length ? 0 : this.hoverIndex;
      } else {
        this.hoverIndex--;
        this.hoverIndex = this.hoverIndex < 0 ? length : this.hoverIndex;
      }

      (this.options[this.hoverIndex].disabled || !this.options[this.hoverIndex].show) && this.modifyHoverIndex(type);
      this.optionsScroll();
    },
    optionsScroll: function optionsScroll() {
      var box = this.$refs['options-box'];
      var optionClient = this.options[this.hoverIndex].$el.getBoundingClientRect();
      var optionsBoxClient = box.getBoundingClientRect();
      var top = optionClient.top - optionsBoxClient.top;
      var bottom = optionClient.bottom - optionsBoxClient.bottom;
      if (top < 0) {
        box.scrollTop += top;
      } else if (bottom > 0) {
        box.scrollTop += bottom;
      }
    },
    keydown: function keydown(event) {
      switch (event.keyCode) {
        case 38:
          event.preventDefault();
          this.modifyHoverIndex();
          break;

        case 40:
          event.preventDefault();
          this.modifyHoverIndex('next');
          break;

        case 13:
          if (this.hoverIndex === -1) return;
          event.preventDefault();
          this.optionsChange(this.hoverIndex, true);
          break;

        case 27:
          event.preventDefault();
          this.hideOptions();
          break;
      }
    },
    getLabel: function getLabel(value) {
      var label = void 0;
      for (var index = 0; index < this.options.length; index++) {
        var item = this.options[index];
        if (item.value === value) {
          label = item.label;

          if (!this.multiple) {
            break;
          }
        }
      }
      return label;
    },
    selectLabel: function selectLabel() {
      var _this = this;

      var label = void 0;
      if (this.multiple) {
        label = [];
        this.value.forEach(function (value) {
          label.push(_this.getLabel(value));
        });
        label = label.join(', ');
      } else {
        label = this.getLabel(this.value);
      }
      this.query = this.curLabel = label;
    }
  },
  watch: {
    value: function value(_value2) {
      this.adHoc = [];
      this.selectLabel();
    }
  },
  mounted: function mounted() {
    this.value && this.selectLabel();
  }
};

/***/ }),

/***/ 223:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "x-select",
    class: [
      ("x-select-" + _vm.type),
      {
        'x-select-open': _vm.show
      }
    ]
  }, [_c('div', {
    staticClass: "x-select-head",
    on: {
      "click": _vm.toggleShow
    }
  }, [_c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.query),
      expression: "query"
    }],
    staticClass: "x-select-input",
    class: {
      'x-disabled': _vm.disabled,
      'x-radius': _vm.radius
    },
    attrs: {
      "type": "text",
      "title": _vm.query,
      "placeholder": _vm.placeholder
    },
    domProps: {
      "value": (_vm.query)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.query = $event.target.value
      }
    }
  }), _vm._v(" "), _c('i', {
    staticClass: "x-icon-arrow-dropdown"
  })]), _vm._v(" "), (_vm.disabled === false) ? _c('transition', {
    attrs: {
      "name": "fade"
    }
  }, [_c('div', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.show),
      expression: "show"
    }],
    staticClass: "x-dropdown-menu"
  }, [_c('ul', {
    ref: "options-box"
  }, [_vm._t("default")], 2)])]) : _vm._e()], 1)
},staticRenderFns: []}

/***/ }),

/***/ 224:
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(225),
  /* template */
  __webpack_require__(226),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 225:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _queryComponents = __webpack_require__(15);

exports.default = {
  name: 'x-option',
  props: {
    value: {
      type: [String, Number],
      required: true
    },
    label: {
      type: [String, Number],
      required: true
    },
    disabled: {
      type: Boolean,
      default: false
    },
    selected: {
      type: Boolean,
      default: false
    }
  },
  data: function data() {
    return {
      PARENT: _queryComponents.parent.call(this, 'x-select'),
      index: 0,
      show: true
    };
  },

  methods: {
    optionClick: function optionClick() {
      if (this.disabled) return;
      this.PARENT.optionsChange(this.index, true);
    },
    optionHover: function optionHover() {
      this.disabled === false && (this.PARENT.hoverIndex = this.index);
    }
  },
  computed: {
    isSelected: function isSelected() {
      var PARENT = this.PARENT;
      if (PARENT.multiple) {
        return PARENT.value.indexOf(this.value) > -1;
      }
      return PARENT.value === this.value;
    }
  },
  created: function created() {
    var options = this.PARENT.options;
    options.push(this);
    this.index = options.indexOf(this);
    this.PARENT.filterOptionsLength++;

    this.selected && this.PARENT.optionsChange(this.index);
  }
};

/***/ }),

/***/ 226:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('li', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.show),
      expression: "show"
    }],
    class: {
      'x-disabled': _vm.disabled,
      'x-select-selected': _vm.isSelected,
      'x-select-option-hover': _vm.PARENT.hoverIndex === _vm.index
    },
    on: {
      "mouseenter": _vm.optionHover,
      "click": _vm.optionClick
    }
  }, [_c('span', [_vm._t("default", [_vm._v(_vm._s(_vm.label))])], 2), _vm._v(" "), (_vm.isSelected) ? _c('i', {
    staticClass: "x-icon-done"
  }) : _vm._e()])
},staticRenderFns: []}

/***/ })

/******/ });
});
//# sourceMappingURL=index.js.map
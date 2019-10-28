import { i as init, s as safe_not_equal, d as dispatch_dev, S as SvelteComponentDev, a as assign, B as onMount, a3 as onDestroy, e as exclude_internal_props, f as element, M as space, g as claim_element, h as children, j as detach_dev, N as claim_space, O as attr_dev, l as add_location, k as set_attributes, a4 as toggle_class, m as insert_dev, P as append_dev, q as get_spread_update, n as noop, G as binding_callbacks, b as current_component, u as _inherits$1, v as _classCallCheck$1, w as _possibleConstructorReturn$1, x as _getPrototypeOf$1, y as _assertThisInitialized$1, I as bind, T as text, U as claim_text, J as mount_component, t as transition_in, r as transition_out, K as destroy_component, L as add_flush_callback } from './index.d5da4a00.js';
import './asyncToGenerator.0781946b.js';
import { _ as _inherits, a as _classCallCheck, b as _possibleConstructorReturn, c as _getPrototypeOf, d as _assertThisInitialized, e as _createClass, f as exclude, g as forwardEventsBuilder, h as _defineProperty, u as useActions } from './useActions.b478cae0.js';
import { s as styleInject } from './typeof.0d5bf00d.js';
import { B as Button } from './index.35ab1463.js';
import './bare.3cea1bea.js';
import './Button.d401af18.js';
import './Label.35a2c1e8.js';
import './Icon.3c6823d4.js';
import { C as Checkbox } from './index.294795e2.js';
import './prefixFilter.1941fe02.js';
import { F as FormField } from './index.c408e6b6.js';

var css = "@keyframes primary-indeterminate-translate{0%{transform:translateX(0)}20%{animation-timing-function:cubic-bezier(.5,0,.70173,.49582);transform:translateX(0)}59.15%{animation-timing-function:cubic-bezier(.30244,.38135,.55,.95635);transform:translateX(83.67142%)}to{transform:translateX(200.61106%)}}@keyframes primary-indeterminate-scale{0%{transform:scaleX(.08)}36.65%{animation-timing-function:cubic-bezier(.33473,.12482,.78584,1);transform:scaleX(.08)}69.15%{animation-timing-function:cubic-bezier(.06,.11,.6,1);transform:scaleX(.66148)}to{transform:scaleX(.08)}}@keyframes secondary-indeterminate-translate{0%{animation-timing-function:cubic-bezier(.15,0,.51506,.40969);transform:translateX(0)}25%{animation-timing-function:cubic-bezier(.31033,.28406,.8,.73371);transform:translateX(37.65191%)}48.35%{animation-timing-function:cubic-bezier(.4,.62704,.6,.90203);transform:translateX(84.38617%)}to{transform:translateX(160.27778%)}}@keyframes secondary-indeterminate-scale{0%{animation-timing-function:cubic-bezier(.20503,.05705,.57661,.45397);transform:scaleX(.08)}19.15%{animation-timing-function:cubic-bezier(.15231,.19643,.64837,1.00432);transform:scaleX(.4571)}44.15%{animation-timing-function:cubic-bezier(.25776,-.00316,.21176,1.38179);transform:scaleX(.72796)}to{transform:scaleX(.08)}}@keyframes buffering{to{transform:translateX(-10px)}}@keyframes primary-indeterminate-translate-reverse{0%{transform:translateX(0)}20%{animation-timing-function:cubic-bezier(.5,0,.70173,.49582);transform:translateX(0)}59.15%{animation-timing-function:cubic-bezier(.30244,.38135,.55,.95635);transform:translateX(-83.67142%)}to{transform:translateX(-200.61106%)}}@keyframes secondary-indeterminate-translate-reverse{0%{animation-timing-function:cubic-bezier(.15,0,.51506,.40969);transform:translateX(0)}25%{animation-timing-function:cubic-bezier(.31033,.28406,.8,.73371);transform:translateX(-37.65191%)}48.35%{animation-timing-function:cubic-bezier(.4,.62704,.6,.90203);transform:translateX(-84.38617%)}to{transform:translateX(-160.27778%)}}@keyframes buffering-reverse{to{transform:translateX(10px)}}.mdc-linear-progress{position:relative;width:100%;height:4px;transform:translateZ(0);overflow:hidden;transition:opacity .25s cubic-bezier(.4,0,.6,1) 0ms}.mdc-linear-progress__bar{position:absolute;width:100%;height:100%;animation:none;transform-origin:top left;transition:transform .25s cubic-bezier(.4,0,.6,1) 0ms}.mdc-linear-progress__bar-inner{display:inline-block;position:absolute;width:100%;height:100%;animation:none}.mdc-linear-progress__buffering-dots{position:absolute;width:100%;height:100%;background-repeat:repeat-x;background-size:10px 4px;animation:buffering .25s linear infinite}.mdc-linear-progress__buffer{position:absolute;width:100%;height:100%;transform-origin:top left;transition:transform .25s cubic-bezier(.4,0,.6,1) 0ms}.mdc-linear-progress__primary-bar{transform:scaleX(0)}.mdc-linear-progress__secondary-bar{visibility:hidden}.mdc-linear-progress--indeterminate .mdc-linear-progress__bar{transition:none}.mdc-linear-progress--indeterminate .mdc-linear-progress__primary-bar{left:-145.166611%;animation:primary-indeterminate-translate 2s linear infinite}.mdc-linear-progress--indeterminate .mdc-linear-progress__primary-bar>.mdc-linear-progress__bar-inner{animation:primary-indeterminate-scale 2s linear infinite}.mdc-linear-progress--indeterminate .mdc-linear-progress__secondary-bar{left:-54.888891%;visibility:visible;animation:secondary-indeterminate-translate 2s linear infinite}.mdc-linear-progress--indeterminate .mdc-linear-progress__secondary-bar>.mdc-linear-progress__bar-inner{animation:secondary-indeterminate-scale 2s linear infinite}.mdc-linear-progress--reversed .mdc-linear-progress__bar,.mdc-linear-progress--reversed .mdc-linear-progress__buffer{right:0;transform-origin:center right}.mdc-linear-progress--reversed .mdc-linear-progress__primary-bar{animation-name:primary-indeterminate-translate-reverse}.mdc-linear-progress--reversed .mdc-linear-progress__secondary-bar{animation-name:secondary-indeterminate-translate-reverse}.mdc-linear-progress--reversed .mdc-linear-progress__buffering-dots{animation:buffering-reverse .25s linear infinite}.mdc-linear-progress--closed{opacity:0;animation:none}.mdc-linear-progress__bar-inner{background-color:#ff3e00;background-color:var(--mdc-theme-primary,#ff3e00)}.mdc-linear-progress__buffering-dots{background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 5 2' preserveAspectRatio='none slice'%3E%3Ccircle cx='1' cy='1' r='1' fill='%23e6e6e6'/%3E%3C/svg%3E\")}.mdc-linear-progress__buffer{background-color:#e6e6e6}.mdc-linear-progress--indeterminate.mdc-linear-progress--reversed .mdc-linear-progress__primary-bar{right:-145.166611%;left:auto}.mdc-linear-progress--indeterminate.mdc-linear-progress--reversed .mdc-linear-progress__secondary-bar{right:-54.888891%;left:auto}";
styleInject(css);

/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */

/* global Reflect, Promise */
var _extendStatics = function extendStatics(d, b) {
  _extendStatics = Object.setPrototypeOf || {
    __proto__: []
  } instanceof Array && function (d, b) {
    d.__proto__ = b;
  } || function (d, b) {
    for (var p in b) {
      if (b.hasOwnProperty(p)) d[p] = b[p];
    }
  };

  return _extendStatics(d, b);
};

function __extends(d, b) {
  _extendStatics(d, b);

  function __() {
    this.constructor = d;
  }

  d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var _assign = function __assign() {
  _assign = Object.assign || function __assign(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
      }
    }

    return t;
  };

  return _assign.apply(this, arguments);
};
function __read(o, n) {
  var m = typeof Symbol === "function" && o[Symbol.iterator];
  if (!m) return o;
  var i = m.call(o),
      r,
      ar = [],
      e;

  try {
    while ((n === void 0 || n-- > 0) && !(r = i.next()).done) {
      ar.push(r.value);
    }
  } catch (error) {
    e = {
      error: error
    };
  } finally {
    try {
      if (r && !r.done && (m = i["return"])) m.call(i);
    } finally {
      if (e) throw e.error;
    }
  }

  return ar;
}
function __spread() {
  for (var ar = [], i = 0; i < arguments.length; i++) {
    ar = ar.concat(__read(arguments[i]));
  }

  return ar;
}

/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var MDCFoundation =
/** @class */
function () {
  function MDCFoundation(adapter) {
    if (adapter === void 0) {
      adapter = {};
    }

    this.adapter_ = adapter;
  }

  Object.defineProperty(MDCFoundation, "cssClasses", {
    get: function get() {
      // Classes extending MDCFoundation should implement this method to return an object which exports every
      // CSS class the foundation class needs as a property. e.g. {ACTIVE: 'mdc-component--active'}
      return {};
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(MDCFoundation, "strings", {
    get: function get() {
      // Classes extending MDCFoundation should implement this method to return an object which exports all
      // semantic strings as constants. e.g. {ARIA_ROLE: 'tablist'}
      return {};
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(MDCFoundation, "numbers", {
    get: function get() {
      // Classes extending MDCFoundation should implement this method to return an object which exports all
      // of its semantic numbers as constants. e.g. {ANIMATION_DELAY_MS: 350}
      return {};
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(MDCFoundation, "defaultAdapter", {
    get: function get() {
      // Classes extending MDCFoundation may choose to implement this getter in order to provide a convenient
      // way of viewing the necessary methods of an adapter. In the future, this could also be used for adapter
      // validation.
      return {};
    },
    enumerable: true,
    configurable: true
  });

  MDCFoundation.prototype.init = function () {// Subclasses should override this method to perform initialization routines (registering events, etc.)
  };

  MDCFoundation.prototype.destroy = function () {// Subclasses should override this method to perform de-initialization routines (de-registering events, etc.)
  };

  return MDCFoundation;
}();

/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */

var MDCComponent =
/** @class */
function () {
  function MDCComponent(root, foundation) {
    var args = [];

    for (var _i = 2; _i < arguments.length; _i++) {
      args[_i - 2] = arguments[_i];
    }

    this.root_ = root;
    this.initialize.apply(this, __spread(args)); // Note that we initialize foundation here and not within the constructor's default param so that
    // this.root_ is defined and can be used within the foundation class.

    this.foundation_ = foundation === undefined ? this.getDefaultFoundation() : foundation;
    this.foundation_.init();
    this.initialSyncWithDOM();
  }

  MDCComponent.attachTo = function (root) {
    // Subclasses which extend MDCBase should provide an attachTo() method that takes a root element and
    // returns an instantiated component with its root set to that element. Also note that in the cases of
    // subclasses, an explicit foundation class will not have to be passed in; it will simply be initialized
    // from getDefaultFoundation().
    return new MDCComponent(root, new MDCFoundation({}));
  };
  /* istanbul ignore next: method param only exists for typing purposes; it does not need to be unit tested */


  MDCComponent.prototype.initialize = function () {
    var _args = [];

    for (var _i = 0; _i < arguments.length; _i++) {
      _args[_i] = arguments[_i];
    } // Subclasses can override this to do any additional setup work that would be considered part of a
    // "constructor". Essentially, it is a hook into the parent constructor before the foundation is
    // initialized. Any additional arguments besides root and foundation will be passed in here.

  };

  MDCComponent.prototype.getDefaultFoundation = function () {
    // Subclasses must override this method to return a properly configured foundation class for the
    // component.
    throw new Error('Subclasses must override getDefaultFoundation to return a properly configured ' + 'foundation class');
  };

  MDCComponent.prototype.initialSyncWithDOM = function () {// Subclasses should override this method if they need to perform work to synchronize with a host DOM
    // object. An example of this would be a form control wrapper that needs to synchronize its internal state
    // to some property or attribute of the host DOM. Please note: this is *not* the place to perform DOM
    // reads/writes that would cause layout / paint, as this is called synchronously from within the constructor.
  };

  MDCComponent.prototype.destroy = function () {
    // Subclasses may implement this method to release any resources / deregister any listeners they have
    // attached. An example of this might be deregistering a resize event from the window object.
    this.foundation_.destroy();
  };

  MDCComponent.prototype.listen = function (evtType, handler, options) {
    this.root_.addEventListener(evtType, handler, options);
  };

  MDCComponent.prototype.unlisten = function (evtType, handler, options) {
    this.root_.removeEventListener(evtType, handler, options);
  };
  /**
   * Fires a cross-browser-compatible custom event from the component root of the given type, with the given data.
   */


  MDCComponent.prototype.emit = function (evtType, evtData, shouldBubble) {
    if (shouldBubble === void 0) {
      shouldBubble = false;
    }

    var evt;

    if (typeof CustomEvent === 'function') {
      evt = new CustomEvent(evtType, {
        bubbles: shouldBubble,
        detail: evtData
      });
    } else {
      evt = document.createEvent('CustomEvent');
      evt.initCustomEvent(evtType, shouldBubble, false, evtData);
    }

    this.root_.dispatchEvent(evt);
  };

  return MDCComponent;
}();

/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var cssPropertyNameMap = {
  animation: {
    prefixed: '-webkit-animation',
    standard: 'animation'
  },
  transform: {
    prefixed: '-webkit-transform',
    standard: 'transform'
  },
  transition: {
    prefixed: '-webkit-transition',
    standard: 'transition'
  }
};

function isWindow(windowObj) {
  return Boolean(windowObj.document) && typeof windowObj.document.createElement === 'function';
}

function getCorrectPropertyName(windowObj, cssProperty) {
  if (isWindow(windowObj) && cssProperty in cssPropertyNameMap) {
    var el = windowObj.document.createElement('div');
    var _a = cssPropertyNameMap[cssProperty],
        standard = _a.standard,
        prefixed = _a.prefixed;
    var isStandard = standard in el.style;
    return isStandard ? standard : prefixed;
  }

  return cssProperty;
}

/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var cssClasses = {
  CLOSED_CLASS: 'mdc-linear-progress--closed',
  INDETERMINATE_CLASS: 'mdc-linear-progress--indeterminate',
  REVERSED_CLASS: 'mdc-linear-progress--reversed'
};
var strings = {
  BUFFER_SELECTOR: '.mdc-linear-progress__buffer',
  PRIMARY_BAR_SELECTOR: '.mdc-linear-progress__primary-bar'
};

/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */

var MDCLinearProgressFoundation =
/** @class */
function (_super) {
  __extends(MDCLinearProgressFoundation, _super);

  function MDCLinearProgressFoundation(adapter) {
    return _super.call(this, _assign({}, MDCLinearProgressFoundation.defaultAdapter, adapter)) || this;
  }

  Object.defineProperty(MDCLinearProgressFoundation, "cssClasses", {
    get: function get() {
      return cssClasses;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(MDCLinearProgressFoundation, "strings", {
    get: function get() {
      return strings;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(MDCLinearProgressFoundation, "defaultAdapter", {
    get: function get() {
      return {
        addClass: function addClass() {
          return undefined;
        },
        getBuffer: function getBuffer() {
          return null;
        },
        getPrimaryBar: function getPrimaryBar() {
          return null;
        },
        hasClass: function hasClass() {
          return false;
        },
        removeClass: function removeClass() {
          return undefined;
        },
        setStyle: function setStyle() {
          return undefined;
        }
      };
    },
    enumerable: true,
    configurable: true
  });

  MDCLinearProgressFoundation.prototype.init = function () {
    this.isDeterminate_ = !this.adapter_.hasClass(cssClasses.INDETERMINATE_CLASS);
    this.isReversed_ = this.adapter_.hasClass(cssClasses.REVERSED_CLASS);
    this.progress_ = 0;
  };

  MDCLinearProgressFoundation.prototype.setDeterminate = function (isDeterminate) {
    this.isDeterminate_ = isDeterminate;

    if (this.isDeterminate_) {
      this.adapter_.removeClass(cssClasses.INDETERMINATE_CLASS);
      this.setScale_(this.adapter_.getPrimaryBar(), this.progress_);
    } else {
      this.adapter_.addClass(cssClasses.INDETERMINATE_CLASS);
      this.setScale_(this.adapter_.getPrimaryBar(), 1);
      this.setScale_(this.adapter_.getBuffer(), 1);
    }
  };

  MDCLinearProgressFoundation.prototype.setProgress = function (value) {
    this.progress_ = value;

    if (this.isDeterminate_) {
      this.setScale_(this.adapter_.getPrimaryBar(), value);
    }
  };

  MDCLinearProgressFoundation.prototype.setBuffer = function (value) {
    if (this.isDeterminate_) {
      this.setScale_(this.adapter_.getBuffer(), value);
    }
  };

  MDCLinearProgressFoundation.prototype.setReverse = function (isReversed) {
    this.isReversed_ = isReversed;

    if (this.isReversed_) {
      this.adapter_.addClass(cssClasses.REVERSED_CLASS);
    } else {
      this.adapter_.removeClass(cssClasses.REVERSED_CLASS);
    }
  };

  MDCLinearProgressFoundation.prototype.open = function () {
    this.adapter_.removeClass(cssClasses.CLOSED_CLASS);
  };

  MDCLinearProgressFoundation.prototype.close = function () {
    this.adapter_.addClass(cssClasses.CLOSED_CLASS);
  };

  MDCLinearProgressFoundation.prototype.setScale_ = function (el, scaleValue) {
    if (!el) {
      return;
    }

    var value = "scaleX(" + scaleValue + ")";
    this.adapter_.setStyle(el, getCorrectPropertyName(window, 'transform'), value);
  };

  return MDCLinearProgressFoundation;
}(MDCFoundation);

/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */

var MDCLinearProgress =
/** @class */
function (_super) {
  __extends(MDCLinearProgress, _super);

  function MDCLinearProgress() {
    return _super !== null && _super.apply(this, arguments) || this;
  }

  MDCLinearProgress.attachTo = function (root) {
    return new MDCLinearProgress(root);
  };

  Object.defineProperty(MDCLinearProgress.prototype, "determinate", {
    set: function set(value) {
      this.foundation_.setDeterminate(value);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(MDCLinearProgress.prototype, "progress", {
    set: function set(value) {
      this.foundation_.setProgress(value);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(MDCLinearProgress.prototype, "buffer", {
    set: function set(value) {
      this.foundation_.setBuffer(value);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(MDCLinearProgress.prototype, "reverse", {
    set: function set(value) {
      this.foundation_.setReverse(value);
    },
    enumerable: true,
    configurable: true
  });

  MDCLinearProgress.prototype.open = function () {
    this.foundation_.open();
  };

  MDCLinearProgress.prototype.close = function () {
    this.foundation_.close();
  };

  MDCLinearProgress.prototype.getDefaultFoundation = function () {
    var _this = this; // DO NOT INLINE this variable. For backward compatibility, foundations take a Partial<MDCFooAdapter>.
    // To ensure we don't accidentally omit any methods, we need a separate, strongly typed adapter variable.


    var adapter = {
      addClass: function addClass(className) {
        return _this.root_.classList.add(className);
      },
      getBuffer: function getBuffer() {
        return _this.root_.querySelector(MDCLinearProgressFoundation.strings.BUFFER_SELECTOR);
      },
      getPrimaryBar: function getPrimaryBar() {
        return _this.root_.querySelector(MDCLinearProgressFoundation.strings.PRIMARY_BAR_SELECTOR);
      },
      hasClass: function hasClass(className) {
        return _this.root_.classList.contains(className);
      },
      removeClass: function removeClass(className) {
        return _this.root_.classList.remove(className);
      },
      setStyle: function setStyle(el, styleProperty, value) {
        return el.style.setProperty(styleProperty, value);
      }
    };
    return new MDCLinearProgressFoundation(adapter);
  };

  return MDCLinearProgress;
}(MDCComponent);

var file = "Users/hperrin/repos/svelte-material-ui/packages/linear-progress/LinearProgress.svelte";

function create_fragment(ctx) {
  var div4, div0, t0, div1, t1, div2, span0, t2, div3, span1, useActions_action, forwardEvents_action;
  var div4_levels = [{
    class: "mdc-linear-progress " + ctx.className
  }, {
    role: "progressbar"
  }, exclude(ctx.$$props, ['use', 'class', 'indeterminate', 'reversed', 'closed', 'progress'])];
  var div4_data = {};

  for (var i = 0; i < div4_levels.length; i += 1) {
    div4_data = assign(div4_data, div4_levels[i]);
  }

  var block = {
    c: function create() {
      div4 = element("div");
      div0 = element("div");
      t0 = space();
      div1 = element("div");
      t1 = space();
      div2 = element("div");
      span0 = element("span");
      t2 = space();
      div3 = element("div");
      span1 = element("span");
      this.h();
    },
    l: function claim(nodes) {
      div4 = claim_element(nodes, "DIV", {
        class: true,
        role: true
      }, false);
      var div4_nodes = children(div4);
      div0 = claim_element(div4_nodes, "DIV", {
        class: true
      }, false);
      var div0_nodes = children(div0);
      div0_nodes.forEach(detach_dev);
      t0 = claim_space(div4_nodes);
      div1 = claim_element(div4_nodes, "DIV", {
        class: true
      }, false);
      var div1_nodes = children(div1);
      div1_nodes.forEach(detach_dev);
      t1 = claim_space(div4_nodes);
      div2 = claim_element(div4_nodes, "DIV", {
        class: true
      }, false);
      var div2_nodes = children(div2);
      span0 = claim_element(div2_nodes, "SPAN", {
        class: true
      }, false);
      var span0_nodes = children(span0);
      span0_nodes.forEach(detach_dev);
      div2_nodes.forEach(detach_dev);
      t2 = claim_space(div4_nodes);
      div3 = claim_element(div4_nodes, "DIV", {
        class: true
      }, false);
      var div3_nodes = children(div3);
      span1 = claim_element(div3_nodes, "SPAN", {
        class: true
      }, false);
      var span1_nodes = children(span1);
      span1_nodes.forEach(detach_dev);
      div3_nodes.forEach(detach_dev);
      div4_nodes.forEach(detach_dev);
      this.h();
    },
    h: function hydrate() {
      attr_dev(div0, "class", "mdc-linear-progress__buffering-dots");
      add_location(div0, file, 11, 2, 383);
      attr_dev(div1, "class", "mdc-linear-progress__buffer");
      add_location(div1, file, 12, 2, 441);
      attr_dev(span0, "class", "mdc-linear-progress__bar-inner");
      add_location(span0, file, 14, 4, 567);
      attr_dev(div2, "class", "mdc-linear-progress__bar mdc-linear-progress__primary-bar");
      add_location(div2, file, 13, 2, 491);
      attr_dev(span1, "class", "mdc-linear-progress__bar-inner");
      add_location(span1, file, 17, 4, 709);
      attr_dev(div3, "class", "mdc-linear-progress__bar mdc-linear-progress__secondary-bar");
      add_location(div3, file, 16, 2, 631);
      set_attributes(div4, div4_data);
      toggle_class(div4, "mdc-linear-progress--indeterminate", ctx.indeterminate);
      toggle_class(div4, "mdc-linear-progress--reversed", ctx.reversed);
      toggle_class(div4, "mdc-linear-progress--closed", ctx.closed);
      add_location(div4, file, 0, 0, 0);
    },
    m: function mount(target, anchor) {
      insert_dev(target, div4, anchor);
      append_dev(div4, div0);
      append_dev(div4, t0);
      append_dev(div4, div1);
      append_dev(div4, t1);
      append_dev(div4, div2);
      append_dev(div2, span0);
      append_dev(div4, t2);
      append_dev(div4, div3);
      append_dev(div3, span1);
      ctx.div4_binding(div4);
      useActions_action = useActions.call(null, div4, ctx.use) || {};
      forwardEvents_action = ctx.forwardEvents.call(null, div4) || {};
    },
    p: function update(changed, ctx) {
      set_attributes(div4, get_spread_update(div4_levels, [changed.className && {
        class: "mdc-linear-progress " + ctx.className
      }, {
        role: "progressbar"
      }, (changed.exclude || changed.$$props) && exclude(ctx.$$props, ['use', 'class', 'indeterminate', 'reversed', 'closed', 'progress'])]));

      if (typeof useActions_action.update === 'function' && changed.use) {
        useActions_action.update.call(null, ctx.use);
      }

      if (changed.className || changed.indeterminate) {
        toggle_class(div4, "mdc-linear-progress--indeterminate", ctx.indeterminate);
      }

      if (changed.className || changed.reversed) {
        toggle_class(div4, "mdc-linear-progress--reversed", ctx.reversed);
      }

      if (changed.className || changed.closed) {
        toggle_class(div4, "mdc-linear-progress--closed", ctx.closed);
      }
    },
    i: noop,
    o: noop,
    d: function destroy(detaching) {
      if (detaching) {
        detach_dev(div4);
      }

      ctx.div4_binding(null);
      if (useActions_action && typeof useActions_action.destroy === 'function') useActions_action.destroy();
      if (forwardEvents_action && typeof forwardEvents_action.destroy === 'function') forwardEvents_action.destroy();
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_fragment.name,
    type: "component",
    source: "",
    ctx: ctx
  });
  return block;
}

function instance($$self, $$props, $$invalidate) {
  var forwardEvents = forwardEventsBuilder(current_component);
  var _$$props = $$props,
      _$$props$use = _$$props.use,
      use = _$$props$use === void 0 ? [] : _$$props$use,
      _$$props$class = _$$props.class,
      className = _$$props$class === void 0 ? '' : _$$props$class,
      _$$props$indeterminat = _$$props.indeterminate,
      indeterminate = _$$props$indeterminat === void 0 ? false : _$$props$indeterminat,
      _$$props$reversed = _$$props.reversed,
      reversed = _$$props$reversed === void 0 ? false : _$$props$reversed,
      _$$props$closed = _$$props.closed,
      closed = _$$props$closed === void 0 ? false : _$$props$closed,
      _$$props$progress = _$$props.progress,
      progress = _$$props$progress === void 0 ? 0 : _$$props$progress,
      _$$props$buffer = _$$props.buffer,
      buffer = _$$props$buffer === void 0 ? null : _$$props$buffer;
  var element;
  var linearProgress;
  onMount(function () {
    $$invalidate('linearProgress', linearProgress = new MDCLinearProgress(element));
  });
  onDestroy(function () {
    linearProgress && linearProgress.destroy();
  });

  function div4_binding($$value) {
    binding_callbacks[$$value ? 'unshift' : 'push'](function () {
      $$invalidate('element', element = $$value);
    });
  }

  $$self.$set = function ($$new_props) {
    $$invalidate('$$props', $$props = assign(assign({}, $$props), $$new_props));
    if ('use' in $$new_props) $$invalidate('use', use = $$new_props.use);
    if ('class' in $$new_props) $$invalidate('className', className = $$new_props.class);
    if ('indeterminate' in $$new_props) $$invalidate('indeterminate', indeterminate = $$new_props.indeterminate);
    if ('reversed' in $$new_props) $$invalidate('reversed', reversed = $$new_props.reversed);
    if ('closed' in $$new_props) $$invalidate('closed', closed = $$new_props.closed);
    if ('progress' in $$new_props) $$invalidate('progress', progress = $$new_props.progress);
    if ('buffer' in $$new_props) $$invalidate('buffer', buffer = $$new_props.buffer);
  };

  $$self.$capture_state = function () {
    return {
      use: use,
      className: className,
      indeterminate: indeterminate,
      reversed: reversed,
      closed: closed,
      progress: progress,
      buffer: buffer,
      element: element,
      linearProgress: linearProgress
    };
  };

  $$self.$inject_state = function ($$new_props) {
    $$invalidate('$$props', $$props = assign(assign({}, $$props), $$new_props));
    if ('use' in $$props) $$invalidate('use', use = $$new_props.use);
    if ('className' in $$props) $$invalidate('className', className = $$new_props.className);
    if ('indeterminate' in $$props) $$invalidate('indeterminate', indeterminate = $$new_props.indeterminate);
    if ('reversed' in $$props) $$invalidate('reversed', reversed = $$new_props.reversed);
    if ('closed' in $$props) $$invalidate('closed', closed = $$new_props.closed);
    if ('progress' in $$props) $$invalidate('progress', progress = $$new_props.progress);
    if ('buffer' in $$props) $$invalidate('buffer', buffer = $$new_props.buffer);
    if ('element' in $$props) $$invalidate('element', element = $$new_props.element);
    if ('linearProgress' in $$props) $$invalidate('linearProgress', linearProgress = $$new_props.linearProgress);
  };

  $$self.$$.update = function () {
    var $$dirty = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
      linearProgress: 1,
      indeterminate: 1,
      progress: 1,
      buffer: 1,
      reversed: 1,
      closed: 1
    };

    if ($$dirty.linearProgress || $$dirty.indeterminate) {
      if (linearProgress) {
        $$invalidate('linearProgress', linearProgress.determinate = !indeterminate, linearProgress);
      }
    }

    if ($$dirty.linearProgress || $$dirty.progress) {
      if (linearProgress) {
        $$invalidate('linearProgress', linearProgress.progress = progress, linearProgress);
      }
    }

    if ($$dirty.linearProgress || $$dirty.buffer) {
      if (linearProgress) {
        $$invalidate('linearProgress', linearProgress.buffer = buffer, linearProgress);
      }
    }

    if ($$dirty.linearProgress || $$dirty.reversed) {
      if (linearProgress) {
        $$invalidate('linearProgress', linearProgress.reverse = reversed, linearProgress);
      }
    }

    if ($$dirty.linearProgress || $$dirty.closed) {
      if (linearProgress) {
        if (closed) {
          linearProgress.close();
        } else {
          linearProgress.open();
        }
      }
    }
  };

  return _defineProperty({
    forwardEvents: forwardEvents,
    use: use,
    className: className,
    indeterminate: indeterminate,
    reversed: reversed,
    closed: closed,
    progress: progress,
    buffer: buffer,
    element: element,
    $$props: $$props,
    div4_binding: div4_binding
  }, "$$props", $$props = exclude_internal_props($$props));
}

var LinearProgress =
/*#__PURE__*/
function (_SvelteComponentDev) {
  _inherits(LinearProgress, _SvelteComponentDev);

  function LinearProgress(options) {
    var _this;

    _classCallCheck(this, LinearProgress);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(LinearProgress).call(this, options));
    init(_assertThisInitialized(_this), options, instance, create_fragment, safe_not_equal, ["use", "class", "indeterminate", "reversed", "closed", "progress", "buffer"]);
    dispatch_dev("SvelteRegisterComponent", {
      component: _assertThisInitialized(_this),
      tagName: "LinearProgress",
      options: options,
      id: create_fragment.name
    });
    return _this;
  }

  _createClass(LinearProgress, [{
    key: "use",
    get: function get() {
      throw new Error("<LinearProgress>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    },
    set: function set(value) {
      throw new Error("<LinearProgress>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    }
  }, {
    key: "class",
    get: function get() {
      throw new Error("<LinearProgress>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    },
    set: function set(value) {
      throw new Error("<LinearProgress>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    }
  }, {
    key: "indeterminate",
    get: function get() {
      throw new Error("<LinearProgress>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    },
    set: function set(value) {
      throw new Error("<LinearProgress>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    }
  }, {
    key: "reversed",
    get: function get() {
      throw new Error("<LinearProgress>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    },
    set: function set(value) {
      throw new Error("<LinearProgress>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    }
  }, {
    key: "closed",
    get: function get() {
      throw new Error("<LinearProgress>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    },
    set: function set(value) {
      throw new Error("<LinearProgress>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    }
  }, {
    key: "progress",
    get: function get() {
      throw new Error("<LinearProgress>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    },
    set: function set(value) {
      throw new Error("<LinearProgress>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    }
  }, {
    key: "buffer",
    get: function get() {
      throw new Error("<LinearProgress>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    },
    set: function set(value) {
      throw new Error("<LinearProgress>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    }
  }]);

  return LinearProgress;
}(SvelteComponentDev);

var css$1 = ".my-colored-bar .mdc-linear-progress__bar-inner{background-color:#4caf50}.my-colored-bar .mdc-linear-progress__buffering-dots{background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 5 2' preserveAspectRatio='none slice'%3E%3Ccircle cx='1' cy='1' r='1' fill='%23c8e6c9'/%3E%3C/svg%3E\")}.my-colored-bar .mdc-linear-progress__buffer{background-color:#c8e6c9}";
styleInject(css$1);

var file$1 = "src/routes/demo/linear-progress.svelte"; // (13:4) <Button on:click={reset}>

function create_default_slot_1(ctx) {
  var t;
  var block = {
    c: function create() {
      t = text("Reset");
    },
    l: function claim(nodes) {
      t = claim_text(nodes, "Reset");
    },
    m: function mount(target, anchor) {
      insert_dev(target, t, anchor);
    },
    d: function destroy(detaching) {
      if (detaching) {
        detach_dev(t);
      }
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_default_slot_1.name,
    type: "slot",
    source: "(13:4) <Button on:click={reset}>",
    ctx: ctx
  });
  return block;
} // (17:6) <span slot="label">


function create_label_slot(ctx) {
  var span, t;
  var block = {
    c: function create() {
      span = element("span");
      t = text("Closed");
      this.h();
    },
    l: function claim(nodes) {
      span = claim_element(nodes, "SPAN", {
        slot: true
      }, false);
      var span_nodes = children(span);
      t = claim_text(span_nodes, "Closed");
      span_nodes.forEach(detach_dev);
      this.h();
    },
    h: function hydrate() {
      attr_dev(span, "slot", "label");
      add_location(span, file$1, 16, 6, 280);
    },
    m: function mount(target, anchor) {
      insert_dev(target, span, anchor);
      append_dev(span, t);
    },
    d: function destroy(detaching) {
      if (detaching) {
        detach_dev(span);
      }
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_label_slot.name,
    type: "slot",
    source: "(17:6) <span slot=\"label\">",
    ctx: ctx
  });
  return block;
} // (15:4) <FormField>


function create_default_slot(ctx) {
  var updating_checked, t, current;

  function checkbox_checked_binding(value) {
    ctx.checkbox_checked_binding.call(null, value);
    updating_checked = true;
    add_flush_callback(function () {
      return updating_checked = false;
    });
  }

  var checkbox_props = {};

  if (ctx.closed !== void 0) {
    checkbox_props.checked = ctx.closed;
  }

  var checkbox = new Checkbox({
    props: checkbox_props,
    $$inline: true
  });
  binding_callbacks.push(function () {
    return bind(checkbox, 'checked', checkbox_checked_binding);
  });
  var block = {
    c: function create() {
      checkbox.$$.fragment.c();
      t = space();
    },
    l: function claim(nodes) {
      checkbox.$$.fragment.l(nodes);
      t = claim_space(nodes);
    },
    m: function mount(target, anchor) {
      mount_component(checkbox, target, anchor);
      insert_dev(target, t, anchor);
      current = true;
    },
    p: function update(changed, ctx) {
      var checkbox_changes = {};

      if (!updating_checked && changed.closed) {
        checkbox_changes.checked = ctx.closed;
      }

      checkbox.$set(checkbox_changes);
    },
    i: function intro(local) {
      if (current) return;
      transition_in(checkbox.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(checkbox.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      destroy_component(checkbox, detaching);

      if (detaching) {
        detach_dev(t);
      }
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_default_slot.name,
    type: "slot",
    source: "(15:4) <FormField>",
    ctx: ctx
  });
  return block;
}

function create_fragment$1(ctx) {
  var t0, section, h2, t1, t2, div0, t3, br, t4, t5, t6, div1, t7, t8, div2, t9, t10, div3, t11, t12, div4, t13, t14, div5, t15, current;
  var linearprogress0 = new LinearProgress({
    props: {
      progress: ctx.progress,
      closed: ctx.closed
    },
    $$inline: true
  });
  var button = new Button({
    props: {
      $$slots: {
        default: [create_default_slot_1]
      },
      $$scope: {
        ctx: ctx
      }
    },
    $$inline: true
  });
  button.$on("click", ctx.reset);
  var formfield = new FormField({
    props: {
      $$slots: {
        default: [create_default_slot],
        label: [create_label_slot]
      },
      $$scope: {
        ctx: ctx
      }
    },
    $$inline: true
  });
  var linearprogress1 = new LinearProgress({
    props: {
      progress: .5,
      buffer: .75
    },
    $$inline: true
  });
  var linearprogress2 = new LinearProgress({
    props: {
      indeterminate: true
    },
    $$inline: true
  });
  var linearprogress3 = new LinearProgress({
    props: {
      progress: .5,
      reversed: true
    },
    $$inline: true
  });
  var linearprogress4 = new LinearProgress({
    props: {
      progress: .5,
      buffer: .75,
      reversed: true
    },
    $$inline: true
  });
  var linearprogress5 = new LinearProgress({
    props: {
      class: "my-colored-bar",
      progress: .5,
      buffer: .75
    },
    $$inline: true
  });
  var block = {
    c: function create() {
      t0 = space();
      section = element("section");
      h2 = element("h2");
      t1 = text("Linear Progress");
      t2 = space();
      div0 = element("div");
      linearprogress0.$$.fragment.c();
      t3 = space();
      br = element("br");
      t4 = space();
      button.$$.fragment.c();
      t5 = space();
      formfield.$$.fragment.c();
      t6 = space();
      div1 = element("div");
      t7 = text("Buffered:\n\n    ");
      linearprogress1.$$.fragment.c();
      t8 = space();
      div2 = element("div");
      t9 = text("Indeterminate:\n\n    ");
      linearprogress2.$$.fragment.c();
      t10 = space();
      div3 = element("div");
      t11 = text("Reversed:\n\n    ");
      linearprogress3.$$.fragment.c();
      t12 = space();
      div4 = element("div");
      t13 = text("Reversed Buffered:\n\n    ");
      linearprogress4.$$.fragment.c();
      t14 = space();
      div5 = element("div");
      t15 = text("Colored (using Sass mixins):\n\n    ");
      linearprogress5.$$.fragment.c();
      this.h();
    },
    l: function claim(nodes) {
      t0 = claim_space(nodes);
      section = claim_element(nodes, "SECTION", {}, false);
      var section_nodes = children(section);
      h2 = claim_element(section_nodes, "H2", {}, false);
      var h2_nodes = children(h2);
      t1 = claim_text(h2_nodes, "Linear Progress");
      h2_nodes.forEach(detach_dev);
      t2 = claim_space(section_nodes);
      div0 = claim_element(section_nodes, "DIV", {}, false);
      var div0_nodes = children(div0);
      linearprogress0.$$.fragment.l(div0_nodes);
      t3 = claim_space(div0_nodes);
      br = claim_element(div0_nodes, "BR", {}, false);
      var br_nodes = children(br);
      br_nodes.forEach(detach_dev);
      t4 = claim_space(div0_nodes);
      button.$$.fragment.l(div0_nodes);
      t5 = claim_space(div0_nodes);
      formfield.$$.fragment.l(div0_nodes);
      div0_nodes.forEach(detach_dev);
      t6 = claim_space(section_nodes);
      div1 = claim_element(section_nodes, "DIV", {}, false);
      var div1_nodes = children(div1);
      t7 = claim_text(div1_nodes, "Buffered:\n\n    ");
      linearprogress1.$$.fragment.l(div1_nodes);
      div1_nodes.forEach(detach_dev);
      t8 = claim_space(section_nodes);
      div2 = claim_element(section_nodes, "DIV", {}, false);
      var div2_nodes = children(div2);
      t9 = claim_text(div2_nodes, "Indeterminate:\n\n    ");
      linearprogress2.$$.fragment.l(div2_nodes);
      div2_nodes.forEach(detach_dev);
      t10 = claim_space(section_nodes);
      div3 = claim_element(section_nodes, "DIV", {}, false);
      var div3_nodes = children(div3);
      t11 = claim_text(div3_nodes, "Reversed:\n\n    ");
      linearprogress3.$$.fragment.l(div3_nodes);
      div3_nodes.forEach(detach_dev);
      t12 = claim_space(section_nodes);
      div4 = claim_element(section_nodes, "DIV", {}, false);
      var div4_nodes = children(div4);
      t13 = claim_text(div4_nodes, "Reversed Buffered:\n\n    ");
      linearprogress4.$$.fragment.l(div4_nodes);
      div4_nodes.forEach(detach_dev);
      t14 = claim_space(section_nodes);
      div5 = claim_element(section_nodes, "DIV", {}, false);
      var div5_nodes = children(div5);
      t15 = claim_text(div5_nodes, "Colored (using Sass mixins):\n\n    ");
      linearprogress5.$$.fragment.l(div5_nodes);
      div5_nodes.forEach(detach_dev);
      section_nodes.forEach(detach_dev);
      this.h();
    },
    h: function hydrate() {
      document.title = "Linear Progress - SMUI";
      add_location(h2, file$1, 5, 2, 82);
      add_location(br, file$1, 10, 4, 164);
      add_location(div0, file$1, 7, 2, 110);
      add_location(div1, file$1, 20, 2, 342);
      add_location(div2, file$1, 26, 2, 425);
      add_location(div3, file$1, 32, 2, 500);
      add_location(div4, file$1, 38, 2, 579);
      add_location(div5, file$1, 44, 2, 680);
      add_location(section, file$1, 4, 0, 70);
    },
    m: function mount(target, anchor) {
      insert_dev(target, t0, anchor);
      insert_dev(target, section, anchor);
      append_dev(section, h2);
      append_dev(h2, t1);
      append_dev(section, t2);
      append_dev(section, div0);
      mount_component(linearprogress0, div0, null);
      append_dev(div0, t3);
      append_dev(div0, br);
      append_dev(div0, t4);
      mount_component(button, div0, null);
      append_dev(div0, t5);
      mount_component(formfield, div0, null);
      append_dev(section, t6);
      append_dev(section, div1);
      append_dev(div1, t7);
      mount_component(linearprogress1, div1, null);
      append_dev(section, t8);
      append_dev(section, div2);
      append_dev(div2, t9);
      mount_component(linearprogress2, div2, null);
      append_dev(section, t10);
      append_dev(section, div3);
      append_dev(div3, t11);
      mount_component(linearprogress3, div3, null);
      append_dev(section, t12);
      append_dev(section, div4);
      append_dev(div4, t13);
      mount_component(linearprogress4, div4, null);
      append_dev(section, t14);
      append_dev(section, div5);
      append_dev(div5, t15);
      mount_component(linearprogress5, div5, null);
      current = true;
    },
    p: function update(changed, ctx) {
      var linearprogress0_changes = {};
      if (changed.progress) linearprogress0_changes.progress = ctx.progress;
      if (changed.closed) linearprogress0_changes.closed = ctx.closed;
      linearprogress0.$set(linearprogress0_changes);
      var button_changes = {};
      if (changed.$$scope) button_changes.$$scope = {
        changed: changed,
        ctx: ctx
      };
      button.$set(button_changes);
      var formfield_changes = {};
      if (changed.$$scope || changed.closed) formfield_changes.$$scope = {
        changed: changed,
        ctx: ctx
      };
      formfield.$set(formfield_changes);
    },
    i: function intro(local) {
      if (current) return;
      transition_in(linearprogress0.$$.fragment, local);
      transition_in(button.$$.fragment, local);
      transition_in(formfield.$$.fragment, local);
      transition_in(linearprogress1.$$.fragment, local);
      transition_in(linearprogress2.$$.fragment, local);
      transition_in(linearprogress3.$$.fragment, local);
      transition_in(linearprogress4.$$.fragment, local);
      transition_in(linearprogress5.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(linearprogress0.$$.fragment, local);
      transition_out(button.$$.fragment, local);
      transition_out(formfield.$$.fragment, local);
      transition_out(linearprogress1.$$.fragment, local);
      transition_out(linearprogress2.$$.fragment, local);
      transition_out(linearprogress3.$$.fragment, local);
      transition_out(linearprogress4.$$.fragment, local);
      transition_out(linearprogress5.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      if (detaching) {
        detach_dev(t0);
        detach_dev(section);
      }

      destroy_component(linearprogress0);
      destroy_component(button);
      destroy_component(formfield);
      destroy_component(linearprogress1);
      destroy_component(linearprogress2);
      destroy_component(linearprogress3);
      destroy_component(linearprogress4);
      destroy_component(linearprogress5);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_fragment$1.name,
    type: "component",
    source: "",
    ctx: ctx
  });
  return block;
}

function instance$1($$self, $$props, $$invalidate) {
  var progress = 0;
  var closed = false;
  var timer;
  onMount(reset);
  onDestroy(function () {
    clearInterval(timer);
  });

  function reset() {
    $$invalidate('progress', progress = 0);
    $$invalidate('closed', closed = false);
    clearInterval(timer);
    timer = setInterval(function () {
      $$invalidate('progress', progress += .01);

      if (progress >= 1) {
        $$invalidate('progress', progress = 1);
        $$invalidate('closed', closed = true);
        clearInterval(timer);
      }
    }, 100);
  }

  function checkbox_checked_binding(value) {
    closed = value;
    $$invalidate('closed', closed);
  }

  $$self.$capture_state = function () {
    return {};
  };

  $$self.$inject_state = function ($$props) {
    if ('progress' in $$props) $$invalidate('progress', progress = $$props.progress);
    if ('closed' in $$props) $$invalidate('closed', closed = $$props.closed);
    if ('timer' in $$props) timer = $$props.timer;
  };

  return {
    progress: progress,
    closed: closed,
    reset: reset,
    checkbox_checked_binding: checkbox_checked_binding
  };
}

var Linear_progress =
/*#__PURE__*/
function (_SvelteComponentDev) {
  _inherits$1(Linear_progress, _SvelteComponentDev);

  function Linear_progress(options) {
    var _this;

    _classCallCheck$1(this, Linear_progress);

    _this = _possibleConstructorReturn$1(this, _getPrototypeOf$1(Linear_progress).call(this, options));
    init(_assertThisInitialized$1(_this), options, instance$1, create_fragment$1, safe_not_equal, []);
    dispatch_dev("SvelteRegisterComponent", {
      component: _assertThisInitialized$1(_this),
      tagName: "Linear_progress",
      options: options,
      id: create_fragment$1.name
    });
    return _this;
  }

  return Linear_progress;
}(SvelteComponentDev);

export default Linear_progress;

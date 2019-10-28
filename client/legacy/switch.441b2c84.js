import { i as init, s as safe_not_equal, d as dispatch_dev, S as SvelteComponentDev, a as assign, a0 as getContext, B as onMount, a3 as onDestroy, e as exclude_internal_props, f as element, M as space, g as claim_element, h as children, j as detach_dev, N as claim_space, O as attr_dev, l as add_location, k as set_attributes, a4 as toggle_class, D as listen_dev, m as insert_dev, P as append_dev, q as get_spread_update, n as noop, a6 as run_all, b as current_component, a2 as bubble, G as binding_callbacks, u as _inherits$1, v as _classCallCheck$1, w as _possibleConstructorReturn$1, x as _getPrototypeOf$1, y as _assertThisInitialized$1, I as bind, W as set_style, J as mount_component, t as transition_in, r as transition_out, K as destroy_component, T as text, U as claim_text, X as set_data_dev, E as group_outros, F as check_outros, a8 as destroy_each, L as add_flush_callback } from './index.d5da4a00.js';
import { _ as _inherits, a as _classCallCheck, b as _possibleConstructorReturn, c as _getPrototypeOf, d as _assertThisInitialized, e as _createClass, f as exclude, g as forwardEventsBuilder, h as _defineProperty, u as useActions } from './useActions.b478cae0.js';
import { s as styleInject } from './typeof.0d5bf00d.js';
import { p as prefixFilter } from './prefixFilter.1941fe02.js';
import { F as FormField } from './index.c408e6b6.js';

var css = ".mdc-switch{display:inline-block;position:relative;outline:none;user-select:none}.mdc-switch.mdc-switch--checked .mdc-switch__thumb,.mdc-switch.mdc-switch--checked .mdc-switch__track{background-color:#676778;background-color:var(--mdc-theme-secondary,#676778);border-color:#676778;border-color:var(--mdc-theme-secondary,#676778)}.mdc-switch:not(.mdc-switch--checked) .mdc-switch__track{background-color:#000;border-color:#000}.mdc-switch:not(.mdc-switch--checked) .mdc-switch__thumb{background-color:#fff;border-color:#fff}.mdc-switch__native-control{left:0;right:auto;position:absolute;top:0;width:68px;height:48px;margin:0;opacity:0;cursor:pointer;pointer-events:auto}.mdc-switch__native-control[dir=rtl],[dir=rtl] .mdc-switch__native-control{left:auto;right:0}.mdc-switch__track{box-sizing:border-box;width:32px;height:14px;border:1px solid;border-radius:7px;opacity:.38;transition:opacity 90ms cubic-bezier(.4,0,.2,1),background-color 90ms cubic-bezier(.4,0,.2,1),border-color 90ms cubic-bezier(.4,0,.2,1)}.mdc-switch__thumb-underlay{left:-18px;right:auto;display:flex;position:absolute;top:-17px;align-items:center;justify-content:center;width:48px;height:48px;transform:translateX(0);transition:transform 90ms cubic-bezier(.4,0,.2,1),background-color 90ms cubic-bezier(.4,0,.2,1),border-color 90ms cubic-bezier(.4,0,.2,1)}.mdc-switch__thumb-underlay[dir=rtl],[dir=rtl] .mdc-switch__thumb-underlay{left:auto;right:-18px}.mdc-switch__thumb{box-shadow:0 3px 1px -2px rgba(0,0,0,.2),0 2px 2px 0 rgba(0,0,0,.14),0 1px 5px 0 rgba(0,0,0,.12);box-sizing:border-box;width:20px;height:20px;border:10px solid;border-radius:50%;pointer-events:none;z-index:1}.mdc-switch--checked .mdc-switch__track{opacity:.54}.mdc-switch--checked .mdc-switch__thumb-underlay{transform:translateX(20px)}.mdc-switch--checked .mdc-switch__native-control,.mdc-switch--checked .mdc-switch__thumb-underlay[dir=rtl],[dir=rtl] .mdc-switch--checked .mdc-switch__thumb-underlay{transform:translateX(-20px)}.mdc-switch--checked .mdc-switch__native-control[dir=rtl],[dir=rtl] .mdc-switch--checked .mdc-switch__native-control{transform:translateX(20px)}.mdc-switch--disabled{opacity:.38;pointer-events:none}.mdc-switch--disabled .mdc-switch__thumb{border-width:1px}.mdc-switch--disabled .mdc-switch__native-control{cursor:default;pointer-events:none}@keyframes mdc-ripple-fg-radius-in{0%{animation-timing-function:cubic-bezier(.4,0,.2,1);transform:translate(var(--mdc-ripple-fg-translate-start,0)) scale(1)}to{transform:translate(var(--mdc-ripple-fg-translate-end,0)) scale(var(--mdc-ripple-fg-scale,1))}}@keyframes mdc-ripple-fg-opacity-in{0%{animation-timing-function:linear;opacity:0}to{opacity:var(--mdc-ripple-fg-opacity,0)}}@keyframes mdc-ripple-fg-opacity-out{0%{animation-timing-function:linear;opacity:var(--mdc-ripple-fg-opacity,0)}to{opacity:0}}.mdc-ripple-surface--test-edge-var-bug{--mdc-ripple-surface-test-edge-var:1px solid #000;visibility:hidden}.mdc-ripple-surface--test-edge-var-bug:before{border:var(--mdc-ripple-surface-test-edge-var)}.mdc-switch:not(.mdc-switch--checked) .mdc-switch__thumb-underlay:after,.mdc-switch:not(.mdc-switch--checked) .mdc-switch__thumb-underlay:before{background-color:#9e9e9e}.mdc-switch:not(.mdc-switch--checked) .mdc-switch__thumb-underlay:hover:before{opacity:.08}.mdc-switch:not(.mdc-switch--checked) .mdc-switch__thumb-underlay.mdc-ripple-upgraded--background-focused:before,.mdc-switch:not(.mdc-switch--checked) .mdc-switch__thumb-underlay:not(.mdc-ripple-upgraded):focus:before{transition-duration:75ms;opacity:.24}.mdc-switch:not(.mdc-switch--checked) .mdc-switch__thumb-underlay:not(.mdc-ripple-upgraded):after{transition:opacity .15s linear}.mdc-switch:not(.mdc-switch--checked) .mdc-switch__thumb-underlay:not(.mdc-ripple-upgraded):active:after{transition-duration:75ms;opacity:.24}.mdc-switch:not(.mdc-switch--checked) .mdc-switch__thumb-underlay.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:0.24}.mdc-switch__thumb-underlay{--mdc-ripple-fg-size:0;--mdc-ripple-left:0;--mdc-ripple-top:0;--mdc-ripple-fg-scale:1;--mdc-ripple-fg-translate-end:0;--mdc-ripple-fg-translate-start:0;-webkit-tap-highlight-color:rgba(0,0,0,0)}.mdc-switch__thumb-underlay:after,.mdc-switch__thumb-underlay:before{position:absolute;border-radius:50%;opacity:0;pointer-events:none;content:\"\"}.mdc-switch__thumb-underlay:before{transition:opacity 15ms linear,background-color 15ms linear;z-index:1}.mdc-switch__thumb-underlay.mdc-ripple-upgraded:before{transform:scale(var(--mdc-ripple-fg-scale,1))}.mdc-switch__thumb-underlay.mdc-ripple-upgraded:after{top:0;left:0;transform:scale(0);transform-origin:center center}.mdc-switch__thumb-underlay.mdc-ripple-upgraded--unbounded:after{top:var(--mdc-ripple-top,0);left:var(--mdc-ripple-left,0)}.mdc-switch__thumb-underlay.mdc-ripple-upgraded--foreground-activation:after{animation:mdc-ripple-fg-radius-in 225ms forwards,mdc-ripple-fg-opacity-in 75ms forwards}.mdc-switch__thumb-underlay.mdc-ripple-upgraded--foreground-deactivation:after{animation:mdc-ripple-fg-opacity-out .15s;transform:translate(var(--mdc-ripple-fg-translate-end,0)) scale(var(--mdc-ripple-fg-scale,1))}.mdc-switch__thumb-underlay:after,.mdc-switch__thumb-underlay:before{top:0;left:0;width:100%;height:100%}.mdc-switch__thumb-underlay.mdc-ripple-upgraded:after,.mdc-switch__thumb-underlay.mdc-ripple-upgraded:before{top:var(--mdc-ripple-top,0);left:var(--mdc-ripple-left,0);width:var(--mdc-ripple-fg-size,100%);height:var(--mdc-ripple-fg-size,100%)}.mdc-switch__thumb-underlay.mdc-ripple-upgraded:after{width:var(--mdc-ripple-fg-size,100%);height:var(--mdc-ripple-fg-size,100%)}.mdc-switch__thumb-underlay:after,.mdc-switch__thumb-underlay:before{background-color:#676778}@supports not (-ms-ime-align:auto){.mdc-switch__thumb-underlay:after,.mdc-switch__thumb-underlay:before{background-color:var(--mdc-theme-secondary,#676778)}}.mdc-switch__thumb-underlay:hover:before{opacity:.04}.mdc-switch__thumb-underlay.mdc-ripple-upgraded--background-focused:before,.mdc-switch__thumb-underlay:not(.mdc-ripple-upgraded):focus:before{transition-duration:75ms;opacity:.12}.mdc-switch__thumb-underlay:not(.mdc-ripple-upgraded):after{transition:opacity .15s linear}.mdc-switch__thumb-underlay:not(.mdc-ripple-upgraded):active:after{transition-duration:75ms;opacity:.12}.mdc-switch__thumb-underlay.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:0.12}";
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
 * Copyright 2019 Google Inc.
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

/**
 * Stores result from applyPassive to avoid redundant processing to detect
 * passive event listener support.
 */
var supportsPassive_;
/**
 * Determine whether the current browser supports passive event listeners, and
 * if so, use them.
 */

function applyPassive(globalObj, forceRefresh) {
  if (globalObj === void 0) {
    globalObj = window;
  }

  if (forceRefresh === void 0) {
    forceRefresh = false;
  }

  if (supportsPassive_ === undefined || forceRefresh) {
    var isSupported_1 = false;

    try {
      globalObj.document.addEventListener('test', function () {
        return undefined;
      }, {
        get passive() {
          isSupported_1 = true;
          return isSupported_1;
        }

      });
    } catch (e) {} // tslint:disable-line:no-empty cannot throw error due to tests. tslint also disables console.log.


    supportsPassive_ = isSupported_1;
  }

  return supportsPassive_ ? {
    passive: true
  } : false;
}

/**
 * @license
 * Copyright 2018 Google Inc.
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
function matches(element, selector) {
  var nativeMatches = element.matches || element.webkitMatchesSelector || element.msMatchesSelector;
  return nativeMatches.call(element, selector);
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
var cssClasses = {
  // Ripple is a special case where the "root" component is really a "mixin" of sorts,
  // given that it's an 'upgrade' to an existing component. That being said it is the root
  // CSS class that all other CSS classes derive from.
  BG_FOCUSED: 'mdc-ripple-upgraded--background-focused',
  FG_ACTIVATION: 'mdc-ripple-upgraded--foreground-activation',
  FG_DEACTIVATION: 'mdc-ripple-upgraded--foreground-deactivation',
  ROOT: 'mdc-ripple-upgraded',
  UNBOUNDED: 'mdc-ripple-upgraded--unbounded'
};
var strings = {
  VAR_FG_SCALE: '--mdc-ripple-fg-scale',
  VAR_FG_SIZE: '--mdc-ripple-fg-size',
  VAR_FG_TRANSLATE_END: '--mdc-ripple-fg-translate-end',
  VAR_FG_TRANSLATE_START: '--mdc-ripple-fg-translate-start',
  VAR_LEFT: '--mdc-ripple-left',
  VAR_TOP: '--mdc-ripple-top'
};
var numbers = {
  DEACTIVATION_TIMEOUT_MS: 225,
  FG_DEACTIVATION_MS: 150,
  INITIAL_ORIGIN_SCALE: 0.6,
  PADDING: 10,
  TAP_DELAY_MS: 300
};

/**
 * Stores result from supportsCssVariables to avoid redundant processing to
 * detect CSS custom variable support.
 */
var supportsCssVariables_;

function detectEdgePseudoVarBug(windowObj) {
  // Detect versions of Edge with buggy var() support
  // See: https://developer.microsoft.com/en-us/microsoft-edge/platform/issues/11495448/
  var document = windowObj.document;
  var node = document.createElement('div');
  node.className = 'mdc-ripple-surface--test-edge-var-bug'; // Append to head instead of body because this script might be invoked in the
  // head, in which case the body doesn't exist yet. The probe works either way.

  document.head.appendChild(node); // The bug exists if ::before style ends up propagating to the parent element.
  // Additionally, getComputedStyle returns null in iframes with display: "none" in Firefox,
  // but Firefox is known to support CSS custom properties correctly.
  // See: https://bugzilla.mozilla.org/show_bug.cgi?id=548397

  var computedStyle = windowObj.getComputedStyle(node);
  var hasPseudoVarBug = computedStyle !== null && computedStyle.borderTopStyle === 'solid';

  if (node.parentNode) {
    node.parentNode.removeChild(node);
  }

  return hasPseudoVarBug;
}

function supportsCssVariables(windowObj, forceRefresh) {
  if (forceRefresh === void 0) {
    forceRefresh = false;
  }

  var CSS = windowObj.CSS;
  var supportsCssVars = supportsCssVariables_;

  if (typeof supportsCssVariables_ === 'boolean' && !forceRefresh) {
    return supportsCssVariables_;
  }

  var supportsFunctionPresent = CSS && typeof CSS.supports === 'function';

  if (!supportsFunctionPresent) {
    return false;
  }

  var explicitlySupportsCssVars = CSS.supports('--css-vars', 'yes'); // See: https://bugs.webkit.org/show_bug.cgi?id=154669
  // See: README section on Safari

  var weAreFeatureDetectingSafari10plus = CSS.supports('(--css-vars: yes)') && CSS.supports('color', '#00000000');

  if (explicitlySupportsCssVars || weAreFeatureDetectingSafari10plus) {
    supportsCssVars = !detectEdgePseudoVarBug(windowObj);
  } else {
    supportsCssVars = false;
  }

  if (!forceRefresh) {
    supportsCssVariables_ = supportsCssVars;
  }

  return supportsCssVars;
}
function getNormalizedEventCoords(evt, pageOffset, clientRect) {
  if (!evt) {
    return {
      x: 0,
      y: 0
    };
  }

  var x = pageOffset.x,
      y = pageOffset.y;
  var documentX = x + clientRect.left;
  var documentY = y + clientRect.top;
  var normalizedX;
  var normalizedY; // Determine touch point relative to the ripple container.

  if (evt.type === 'touchstart') {
    var touchEvent = evt;
    normalizedX = touchEvent.changedTouches[0].pageX - documentX;
    normalizedY = touchEvent.changedTouches[0].pageY - documentY;
  } else {
    var mouseEvent = evt;
    normalizedX = mouseEvent.pageX - documentX;
    normalizedY = mouseEvent.pageY - documentY;
  }

  return {
    x: normalizedX,
    y: normalizedY
  };
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

var ACTIVATION_EVENT_TYPES = ['touchstart', 'pointerdown', 'mousedown', 'keydown']; // Deactivation events registered on documentElement when a pointer-related down event occurs

var POINTER_DEACTIVATION_EVENT_TYPES = ['touchend', 'pointerup', 'mouseup', 'contextmenu']; // simultaneous nested activations

var activatedTargets = [];

var MDCRippleFoundation =
/** @class */
function (_super) {
  __extends(MDCRippleFoundation, _super);

  function MDCRippleFoundation(adapter) {
    var _this = _super.call(this, _assign({}, MDCRippleFoundation.defaultAdapter, adapter)) || this;

    _this.activationAnimationHasEnded_ = false;
    _this.activationTimer_ = 0;
    _this.fgDeactivationRemovalTimer_ = 0;
    _this.fgScale_ = '0';
    _this.frame_ = {
      width: 0,
      height: 0
    };
    _this.initialSize_ = 0;
    _this.layoutFrame_ = 0;
    _this.maxRadius_ = 0;
    _this.unboundedCoords_ = {
      left: 0,
      top: 0
    };
    _this.activationState_ = _this.defaultActivationState_();

    _this.activationTimerCallback_ = function () {
      _this.activationAnimationHasEnded_ = true;

      _this.runDeactivationUXLogicIfReady_();
    };

    _this.activateHandler_ = function (e) {
      return _this.activate_(e);
    };

    _this.deactivateHandler_ = function () {
      return _this.deactivate_();
    };

    _this.focusHandler_ = function () {
      return _this.handleFocus();
    };

    _this.blurHandler_ = function () {
      return _this.handleBlur();
    };

    _this.resizeHandler_ = function () {
      return _this.layout();
    };

    return _this;
  }

  Object.defineProperty(MDCRippleFoundation, "cssClasses", {
    get: function get() {
      return cssClasses;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(MDCRippleFoundation, "strings", {
    get: function get() {
      return strings;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(MDCRippleFoundation, "numbers", {
    get: function get() {
      return numbers;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(MDCRippleFoundation, "defaultAdapter", {
    get: function get() {
      return {
        addClass: function addClass() {
          return undefined;
        },
        browserSupportsCssVars: function browserSupportsCssVars() {
          return true;
        },
        computeBoundingRect: function computeBoundingRect() {
          return {
            top: 0,
            right: 0,
            bottom: 0,
            left: 0,
            width: 0,
            height: 0
          };
        },
        containsEventTarget: function containsEventTarget() {
          return true;
        },
        deregisterDocumentInteractionHandler: function deregisterDocumentInteractionHandler() {
          return undefined;
        },
        deregisterInteractionHandler: function deregisterInteractionHandler() {
          return undefined;
        },
        deregisterResizeHandler: function deregisterResizeHandler() {
          return undefined;
        },
        getWindowPageOffset: function getWindowPageOffset() {
          return {
            x: 0,
            y: 0
          };
        },
        isSurfaceActive: function isSurfaceActive() {
          return true;
        },
        isSurfaceDisabled: function isSurfaceDisabled() {
          return true;
        },
        isUnbounded: function isUnbounded() {
          return true;
        },
        registerDocumentInteractionHandler: function registerDocumentInteractionHandler() {
          return undefined;
        },
        registerInteractionHandler: function registerInteractionHandler() {
          return undefined;
        },
        registerResizeHandler: function registerResizeHandler() {
          return undefined;
        },
        removeClass: function removeClass() {
          return undefined;
        },
        updateCssVariable: function updateCssVariable() {
          return undefined;
        }
      };
    },
    enumerable: true,
    configurable: true
  });

  MDCRippleFoundation.prototype.init = function () {
    var _this = this;

    var supportsPressRipple = this.supportsPressRipple_();
    this.registerRootHandlers_(supportsPressRipple);

    if (supportsPressRipple) {
      var _a = MDCRippleFoundation.cssClasses,
          ROOT_1 = _a.ROOT,
          UNBOUNDED_1 = _a.UNBOUNDED;
      requestAnimationFrame(function () {
        _this.adapter_.addClass(ROOT_1);

        if (_this.adapter_.isUnbounded()) {
          _this.adapter_.addClass(UNBOUNDED_1); // Unbounded ripples need layout logic applied immediately to set coordinates for both shade and ripple


          _this.layoutInternal_();
        }
      });
    }
  };

  MDCRippleFoundation.prototype.destroy = function () {
    var _this = this;

    if (this.supportsPressRipple_()) {
      if (this.activationTimer_) {
        clearTimeout(this.activationTimer_);
        this.activationTimer_ = 0;
        this.adapter_.removeClass(MDCRippleFoundation.cssClasses.FG_ACTIVATION);
      }

      if (this.fgDeactivationRemovalTimer_) {
        clearTimeout(this.fgDeactivationRemovalTimer_);
        this.fgDeactivationRemovalTimer_ = 0;
        this.adapter_.removeClass(MDCRippleFoundation.cssClasses.FG_DEACTIVATION);
      }

      var _a = MDCRippleFoundation.cssClasses,
          ROOT_2 = _a.ROOT,
          UNBOUNDED_2 = _a.UNBOUNDED;
      requestAnimationFrame(function () {
        _this.adapter_.removeClass(ROOT_2);

        _this.adapter_.removeClass(UNBOUNDED_2);

        _this.removeCssVars_();
      });
    }

    this.deregisterRootHandlers_();
    this.deregisterDeactivationHandlers_();
  };
  /**
   * @param evt Optional event containing position information.
   */


  MDCRippleFoundation.prototype.activate = function (evt) {
    this.activate_(evt);
  };

  MDCRippleFoundation.prototype.deactivate = function () {
    this.deactivate_();
  };

  MDCRippleFoundation.prototype.layout = function () {
    var _this = this;

    if (this.layoutFrame_) {
      cancelAnimationFrame(this.layoutFrame_);
    }

    this.layoutFrame_ = requestAnimationFrame(function () {
      _this.layoutInternal_();

      _this.layoutFrame_ = 0;
    });
  };

  MDCRippleFoundation.prototype.setUnbounded = function (unbounded) {
    var UNBOUNDED = MDCRippleFoundation.cssClasses.UNBOUNDED;

    if (unbounded) {
      this.adapter_.addClass(UNBOUNDED);
    } else {
      this.adapter_.removeClass(UNBOUNDED);
    }
  };

  MDCRippleFoundation.prototype.handleFocus = function () {
    var _this = this;

    requestAnimationFrame(function () {
      return _this.adapter_.addClass(MDCRippleFoundation.cssClasses.BG_FOCUSED);
    });
  };

  MDCRippleFoundation.prototype.handleBlur = function () {
    var _this = this;

    requestAnimationFrame(function () {
      return _this.adapter_.removeClass(MDCRippleFoundation.cssClasses.BG_FOCUSED);
    });
  };
  /**
   * We compute this property so that we are not querying information about the client
   * until the point in time where the foundation requests it. This prevents scenarios where
   * client-side feature-detection may happen too early, such as when components are rendered on the server
   * and then initialized at mount time on the client.
   */


  MDCRippleFoundation.prototype.supportsPressRipple_ = function () {
    return this.adapter_.browserSupportsCssVars();
  };

  MDCRippleFoundation.prototype.defaultActivationState_ = function () {
    return {
      activationEvent: undefined,
      hasDeactivationUXRun: false,
      isActivated: false,
      isProgrammatic: false,
      wasActivatedByPointer: false,
      wasElementMadeActive: false
    };
  };
  /**
   * supportsPressRipple Passed from init to save a redundant function call
   */


  MDCRippleFoundation.prototype.registerRootHandlers_ = function (supportsPressRipple) {
    var _this = this;

    if (supportsPressRipple) {
      ACTIVATION_EVENT_TYPES.forEach(function (evtType) {
        _this.adapter_.registerInteractionHandler(evtType, _this.activateHandler_);
      });

      if (this.adapter_.isUnbounded()) {
        this.adapter_.registerResizeHandler(this.resizeHandler_);
      }
    }

    this.adapter_.registerInteractionHandler('focus', this.focusHandler_);
    this.adapter_.registerInteractionHandler('blur', this.blurHandler_);
  };

  MDCRippleFoundation.prototype.registerDeactivationHandlers_ = function (evt) {
    var _this = this;

    if (evt.type === 'keydown') {
      this.adapter_.registerInteractionHandler('keyup', this.deactivateHandler_);
    } else {
      POINTER_DEACTIVATION_EVENT_TYPES.forEach(function (evtType) {
        _this.adapter_.registerDocumentInteractionHandler(evtType, _this.deactivateHandler_);
      });
    }
  };

  MDCRippleFoundation.prototype.deregisterRootHandlers_ = function () {
    var _this = this;

    ACTIVATION_EVENT_TYPES.forEach(function (evtType) {
      _this.adapter_.deregisterInteractionHandler(evtType, _this.activateHandler_);
    });
    this.adapter_.deregisterInteractionHandler('focus', this.focusHandler_);
    this.adapter_.deregisterInteractionHandler('blur', this.blurHandler_);

    if (this.adapter_.isUnbounded()) {
      this.adapter_.deregisterResizeHandler(this.resizeHandler_);
    }
  };

  MDCRippleFoundation.prototype.deregisterDeactivationHandlers_ = function () {
    var _this = this;

    this.adapter_.deregisterInteractionHandler('keyup', this.deactivateHandler_);
    POINTER_DEACTIVATION_EVENT_TYPES.forEach(function (evtType) {
      _this.adapter_.deregisterDocumentInteractionHandler(evtType, _this.deactivateHandler_);
    });
  };

  MDCRippleFoundation.prototype.removeCssVars_ = function () {
    var _this = this;

    var rippleStrings = MDCRippleFoundation.strings;
    var keys = Object.keys(rippleStrings);
    keys.forEach(function (key) {
      if (key.indexOf('VAR_') === 0) {
        _this.adapter_.updateCssVariable(rippleStrings[key], null);
      }
    });
  };

  MDCRippleFoundation.prototype.activate_ = function (evt) {
    var _this = this;

    if (this.adapter_.isSurfaceDisabled()) {
      return;
    }

    var activationState = this.activationState_;

    if (activationState.isActivated) {
      return;
    } // Avoid reacting to follow-on events fired by touch device after an already-processed user interaction


    var previousActivationEvent = this.previousActivationEvent_;
    var isSameInteraction = previousActivationEvent && evt !== undefined && previousActivationEvent.type !== evt.type;

    if (isSameInteraction) {
      return;
    }

    activationState.isActivated = true;
    activationState.isProgrammatic = evt === undefined;
    activationState.activationEvent = evt;
    activationState.wasActivatedByPointer = activationState.isProgrammatic ? false : evt !== undefined && (evt.type === 'mousedown' || evt.type === 'touchstart' || evt.type === 'pointerdown');
    var hasActivatedChild = evt !== undefined && activatedTargets.length > 0 && activatedTargets.some(function (target) {
      return _this.adapter_.containsEventTarget(target);
    });

    if (hasActivatedChild) {
      // Immediately reset activation state, while preserving logic that prevents touch follow-on events
      this.resetActivationState_();
      return;
    }

    if (evt !== undefined) {
      activatedTargets.push(evt.target);
      this.registerDeactivationHandlers_(evt);
    }

    activationState.wasElementMadeActive = this.checkElementMadeActive_(evt);

    if (activationState.wasElementMadeActive) {
      this.animateActivation_();
    }

    requestAnimationFrame(function () {
      // Reset array on next frame after the current event has had a chance to bubble to prevent ancestor ripples
      activatedTargets = [];

      if (!activationState.wasElementMadeActive && evt !== undefined && (evt.key === ' ' || evt.keyCode === 32)) {
        // If space was pressed, try again within an rAF call to detect :active, because different UAs report
        // active states inconsistently when they're called within event handling code:
        // - https://bugs.chromium.org/p/chromium/issues/detail?id=635971
        // - https://bugzilla.mozilla.org/show_bug.cgi?id=1293741
        // We try first outside rAF to support Edge, which does not exhibit this problem, but will crash if a CSS
        // variable is set within a rAF callback for a submit button interaction (#2241).
        activationState.wasElementMadeActive = _this.checkElementMadeActive_(evt);

        if (activationState.wasElementMadeActive) {
          _this.animateActivation_();
        }
      }

      if (!activationState.wasElementMadeActive) {
        // Reset activation state immediately if element was not made active.
        _this.activationState_ = _this.defaultActivationState_();
      }
    });
  };

  MDCRippleFoundation.prototype.checkElementMadeActive_ = function (evt) {
    return evt !== undefined && evt.type === 'keydown' ? this.adapter_.isSurfaceActive() : true;
  };

  MDCRippleFoundation.prototype.animateActivation_ = function () {
    var _this = this;

    var _a = MDCRippleFoundation.strings,
        VAR_FG_TRANSLATE_START = _a.VAR_FG_TRANSLATE_START,
        VAR_FG_TRANSLATE_END = _a.VAR_FG_TRANSLATE_END;
    var _b = MDCRippleFoundation.cssClasses,
        FG_DEACTIVATION = _b.FG_DEACTIVATION,
        FG_ACTIVATION = _b.FG_ACTIVATION;
    var DEACTIVATION_TIMEOUT_MS = MDCRippleFoundation.numbers.DEACTIVATION_TIMEOUT_MS;
    this.layoutInternal_();
    var translateStart = '';
    var translateEnd = '';

    if (!this.adapter_.isUnbounded()) {
      var _c = this.getFgTranslationCoordinates_(),
          startPoint = _c.startPoint,
          endPoint = _c.endPoint;

      translateStart = startPoint.x + "px, " + startPoint.y + "px";
      translateEnd = endPoint.x + "px, " + endPoint.y + "px";
    }

    this.adapter_.updateCssVariable(VAR_FG_TRANSLATE_START, translateStart);
    this.adapter_.updateCssVariable(VAR_FG_TRANSLATE_END, translateEnd); // Cancel any ongoing activation/deactivation animations

    clearTimeout(this.activationTimer_);
    clearTimeout(this.fgDeactivationRemovalTimer_);
    this.rmBoundedActivationClasses_();
    this.adapter_.removeClass(FG_DEACTIVATION); // Force layout in order to re-trigger the animation.

    this.adapter_.computeBoundingRect();
    this.adapter_.addClass(FG_ACTIVATION);
    this.activationTimer_ = setTimeout(function () {
      return _this.activationTimerCallback_();
    }, DEACTIVATION_TIMEOUT_MS);
  };

  MDCRippleFoundation.prototype.getFgTranslationCoordinates_ = function () {
    var _a = this.activationState_,
        activationEvent = _a.activationEvent,
        wasActivatedByPointer = _a.wasActivatedByPointer;
    var startPoint;

    if (wasActivatedByPointer) {
      startPoint = getNormalizedEventCoords(activationEvent, this.adapter_.getWindowPageOffset(), this.adapter_.computeBoundingRect());
    } else {
      startPoint = {
        x: this.frame_.width / 2,
        y: this.frame_.height / 2
      };
    } // Center the element around the start point.


    startPoint = {
      x: startPoint.x - this.initialSize_ / 2,
      y: startPoint.y - this.initialSize_ / 2
    };
    var endPoint = {
      x: this.frame_.width / 2 - this.initialSize_ / 2,
      y: this.frame_.height / 2 - this.initialSize_ / 2
    };
    return {
      startPoint: startPoint,
      endPoint: endPoint
    };
  };

  MDCRippleFoundation.prototype.runDeactivationUXLogicIfReady_ = function () {
    var _this = this; // This method is called both when a pointing device is released, and when the activation animation ends.
    // The deactivation animation should only run after both of those occur.


    var FG_DEACTIVATION = MDCRippleFoundation.cssClasses.FG_DEACTIVATION;
    var _a = this.activationState_,
        hasDeactivationUXRun = _a.hasDeactivationUXRun,
        isActivated = _a.isActivated;
    var activationHasEnded = hasDeactivationUXRun || !isActivated;

    if (activationHasEnded && this.activationAnimationHasEnded_) {
      this.rmBoundedActivationClasses_();
      this.adapter_.addClass(FG_DEACTIVATION);
      this.fgDeactivationRemovalTimer_ = setTimeout(function () {
        _this.adapter_.removeClass(FG_DEACTIVATION);
      }, numbers.FG_DEACTIVATION_MS);
    }
  };

  MDCRippleFoundation.prototype.rmBoundedActivationClasses_ = function () {
    var FG_ACTIVATION = MDCRippleFoundation.cssClasses.FG_ACTIVATION;
    this.adapter_.removeClass(FG_ACTIVATION);
    this.activationAnimationHasEnded_ = false;
    this.adapter_.computeBoundingRect();
  };

  MDCRippleFoundation.prototype.resetActivationState_ = function () {
    var _this = this;

    this.previousActivationEvent_ = this.activationState_.activationEvent;
    this.activationState_ = this.defaultActivationState_(); // Touch devices may fire additional events for the same interaction within a short time.
    // Store the previous event until it's safe to assume that subsequent events are for new interactions.

    setTimeout(function () {
      return _this.previousActivationEvent_ = undefined;
    }, MDCRippleFoundation.numbers.TAP_DELAY_MS);
  };

  MDCRippleFoundation.prototype.deactivate_ = function () {
    var _this = this;

    var activationState = this.activationState_; // This can happen in scenarios such as when you have a keyup event that blurs the element.

    if (!activationState.isActivated) {
      return;
    }

    var state = _assign({}, activationState);

    if (activationState.isProgrammatic) {
      requestAnimationFrame(function () {
        return _this.animateDeactivation_(state);
      });
      this.resetActivationState_();
    } else {
      this.deregisterDeactivationHandlers_();
      requestAnimationFrame(function () {
        _this.activationState_.hasDeactivationUXRun = true;

        _this.animateDeactivation_(state);

        _this.resetActivationState_();
      });
    }
  };

  MDCRippleFoundation.prototype.animateDeactivation_ = function (_a) {
    var wasActivatedByPointer = _a.wasActivatedByPointer,
        wasElementMadeActive = _a.wasElementMadeActive;

    if (wasActivatedByPointer || wasElementMadeActive) {
      this.runDeactivationUXLogicIfReady_();
    }
  };

  MDCRippleFoundation.prototype.layoutInternal_ = function () {
    var _this = this;

    this.frame_ = this.adapter_.computeBoundingRect();
    var maxDim = Math.max(this.frame_.height, this.frame_.width); // Surface diameter is treated differently for unbounded vs. bounded ripples.
    // Unbounded ripple diameter is calculated smaller since the surface is expected to already be padded appropriately
    // to extend the hitbox, and the ripple is expected to meet the edges of the padded hitbox (which is typically
    // square). Bounded ripples, on the other hand, are fully expected to expand beyond the surface's longest diameter
    // (calculated based on the diagonal plus a constant padding), and are clipped at the surface's border via
    // `overflow: hidden`.

    var getBoundedRadius = function getBoundedRadius() {
      var hypotenuse = Math.sqrt(Math.pow(_this.frame_.width, 2) + Math.pow(_this.frame_.height, 2));
      return hypotenuse + MDCRippleFoundation.numbers.PADDING;
    };

    this.maxRadius_ = this.adapter_.isUnbounded() ? maxDim : getBoundedRadius(); // Ripple is sized as a fraction of the largest dimension of the surface, then scales up using a CSS scale transform

    this.initialSize_ = Math.floor(maxDim * MDCRippleFoundation.numbers.INITIAL_ORIGIN_SCALE);
    this.fgScale_ = "" + this.maxRadius_ / this.initialSize_;
    this.updateLayoutCssVars_();
  };

  MDCRippleFoundation.prototype.updateLayoutCssVars_ = function () {
    var _a = MDCRippleFoundation.strings,
        VAR_FG_SIZE = _a.VAR_FG_SIZE,
        VAR_LEFT = _a.VAR_LEFT,
        VAR_TOP = _a.VAR_TOP,
        VAR_FG_SCALE = _a.VAR_FG_SCALE;
    this.adapter_.updateCssVariable(VAR_FG_SIZE, this.initialSize_ + "px");
    this.adapter_.updateCssVariable(VAR_FG_SCALE, this.fgScale_);

    if (this.adapter_.isUnbounded()) {
      this.unboundedCoords_ = {
        left: Math.round(this.frame_.width / 2 - this.initialSize_ / 2),
        top: Math.round(this.frame_.height / 2 - this.initialSize_ / 2)
      };
      this.adapter_.updateCssVariable(VAR_LEFT, this.unboundedCoords_.left + "px");
      this.adapter_.updateCssVariable(VAR_TOP, this.unboundedCoords_.top + "px");
    }
  };

  return MDCRippleFoundation;
}(MDCFoundation);

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

var MDCRipple =
/** @class */
function (_super) {
  __extends(MDCRipple, _super);

  function MDCRipple() {
    var _this = _super !== null && _super.apply(this, arguments) || this;

    _this.disabled = false;
    return _this;
  }

  MDCRipple.attachTo = function (root, opts) {
    if (opts === void 0) {
      opts = {
        isUnbounded: undefined
      };
    }

    var ripple = new MDCRipple(root); // Only override unbounded behavior if option is explicitly specified

    if (opts.isUnbounded !== undefined) {
      ripple.unbounded = opts.isUnbounded;
    }

    return ripple;
  };

  MDCRipple.createAdapter = function (instance) {
    return {
      addClass: function addClass(className) {
        return instance.root_.classList.add(className);
      },
      browserSupportsCssVars: function browserSupportsCssVars() {
        return supportsCssVariables(window);
      },
      computeBoundingRect: function computeBoundingRect() {
        return instance.root_.getBoundingClientRect();
      },
      containsEventTarget: function containsEventTarget(target) {
        return instance.root_.contains(target);
      },
      deregisterDocumentInteractionHandler: function deregisterDocumentInteractionHandler(evtType, handler) {
        return document.documentElement.removeEventListener(evtType, handler, applyPassive());
      },
      deregisterInteractionHandler: function deregisterInteractionHandler(evtType, handler) {
        return instance.root_.removeEventListener(evtType, handler, applyPassive());
      },
      deregisterResizeHandler: function deregisterResizeHandler(handler) {
        return window.removeEventListener('resize', handler);
      },
      getWindowPageOffset: function getWindowPageOffset() {
        return {
          x: window.pageXOffset,
          y: window.pageYOffset
        };
      },
      isSurfaceActive: function isSurfaceActive() {
        return matches(instance.root_, ':active');
      },
      isSurfaceDisabled: function isSurfaceDisabled() {
        return Boolean(instance.disabled);
      },
      isUnbounded: function isUnbounded() {
        return Boolean(instance.unbounded);
      },
      registerDocumentInteractionHandler: function registerDocumentInteractionHandler(evtType, handler) {
        return document.documentElement.addEventListener(evtType, handler, applyPassive());
      },
      registerInteractionHandler: function registerInteractionHandler(evtType, handler) {
        return instance.root_.addEventListener(evtType, handler, applyPassive());
      },
      registerResizeHandler: function registerResizeHandler(handler) {
        return window.addEventListener('resize', handler);
      },
      removeClass: function removeClass(className) {
        return instance.root_.classList.remove(className);
      },
      updateCssVariable: function updateCssVariable(varName, value) {
        return instance.root_.style.setProperty(varName, value);
      }
    };
  };

  Object.defineProperty(MDCRipple.prototype, "unbounded", {
    get: function get() {
      return Boolean(this.unbounded_);
    },
    set: function set(unbounded) {
      this.unbounded_ = Boolean(unbounded);
      this.setUnbounded_();
    },
    enumerable: true,
    configurable: true
  });

  MDCRipple.prototype.activate = function () {
    this.foundation_.activate();
  };

  MDCRipple.prototype.deactivate = function () {
    this.foundation_.deactivate();
  };

  MDCRipple.prototype.layout = function () {
    this.foundation_.layout();
  };

  MDCRipple.prototype.getDefaultFoundation = function () {
    return new MDCRippleFoundation(MDCRipple.createAdapter(this));
  };

  MDCRipple.prototype.initialSyncWithDOM = function () {
    var root = this.root_;
    this.unbounded = 'mdcRippleIsUnbounded' in root.dataset;
  };
  /**
   * Closure Compiler throws an access control error when directly accessing a
   * protected or private property inside a getter/setter, like unbounded above.
   * By accessing the protected property inside a method, we solve that problem.
   * That's why this function exists.
   */


  MDCRipple.prototype.setUnbounded_ = function () {
    this.foundation_.setUnbounded(Boolean(this.unbounded_));
  };

  return MDCRipple;
}(MDCComponent);

/**
 * @license
 * Copyright 2018 Google Inc.
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

/** CSS classes used by the switch. */
var cssClasses$1 = {
  /** Class used for a switch that is in the "checked" (on) position. */
  CHECKED: 'mdc-switch--checked',

  /** Class used for a switch that is disabled. */
  DISABLED: 'mdc-switch--disabled'
};
/** String constants used by the switch. */

var strings$1 = {
  /** A CSS selector used to locate the native HTML control for the switch.  */
  NATIVE_CONTROL_SELECTOR: '.mdc-switch__native-control',

  /** A CSS selector used to locate the ripple surface element for the switch. */
  RIPPLE_SURFACE_SELECTOR: '.mdc-switch__thumb-underlay'
};

/**
 * @license
 * Copyright 2018 Google Inc.
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

var MDCSwitchFoundation =
/** @class */
function (_super) {
  __extends(MDCSwitchFoundation, _super);

  function MDCSwitchFoundation(adapter) {
    return _super.call(this, _assign({}, MDCSwitchFoundation.defaultAdapter, adapter)) || this;
  }

  Object.defineProperty(MDCSwitchFoundation, "strings", {
    /** The string constants used by the switch. */
    get: function get() {
      return strings$1;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(MDCSwitchFoundation, "cssClasses", {
    /** The CSS classes used by the switch. */
    get: function get() {
      return cssClasses$1;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(MDCSwitchFoundation, "defaultAdapter", {
    /** The default Adapter for the switch. */
    get: function get() {
      return {
        addClass: function addClass() {
          return undefined;
        },
        removeClass: function removeClass() {
          return undefined;
        },
        setNativeControlChecked: function setNativeControlChecked() {
          return undefined;
        },
        setNativeControlDisabled: function setNativeControlDisabled() {
          return undefined;
        }
      };
    },
    enumerable: true,
    configurable: true
  });
  /** Sets the checked state of the switch. */

  MDCSwitchFoundation.prototype.setChecked = function (checked) {
    this.adapter_.setNativeControlChecked(checked);
    this.updateCheckedStyling_(checked);
  };
  /** Sets the disabled state of the switch. */


  MDCSwitchFoundation.prototype.setDisabled = function (disabled) {
    this.adapter_.setNativeControlDisabled(disabled);

    if (disabled) {
      this.adapter_.addClass(cssClasses$1.DISABLED);
    } else {
      this.adapter_.removeClass(cssClasses$1.DISABLED);
    }
  };
  /** Handles the change event for the switch native control. */


  MDCSwitchFoundation.prototype.handleChange = function (evt) {
    var nativeControl = evt.target;
    this.updateCheckedStyling_(nativeControl.checked);
  };
  /** Updates the styling of the switch based on its checked state. */


  MDCSwitchFoundation.prototype.updateCheckedStyling_ = function (checked) {
    if (checked) {
      this.adapter_.addClass(cssClasses$1.CHECKED);
    } else {
      this.adapter_.removeClass(cssClasses$1.CHECKED);
    }
  };

  return MDCSwitchFoundation;
}(MDCFoundation);

/**
 * @license
 * Copyright 2018 Google Inc.
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

var MDCSwitch =
/** @class */
function (_super) {
  __extends(MDCSwitch, _super);

  function MDCSwitch() {
    var _this = _super !== null && _super.apply(this, arguments) || this;

    _this.ripple_ = _this.createRipple_();
    return _this;
  }

  MDCSwitch.attachTo = function (root) {
    return new MDCSwitch(root);
  };

  MDCSwitch.prototype.destroy = function () {
    _super.prototype.destroy.call(this);

    this.ripple_.destroy();
    this.nativeControl_.removeEventListener('change', this.changeHandler_);
  };

  MDCSwitch.prototype.initialSyncWithDOM = function () {
    var _this = this;

    this.changeHandler_ = function () {
      var _a;

      var args = [];

      for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
      }

      return (_a = _this.foundation_).handleChange.apply(_a, __spread(args));
    };

    this.nativeControl_.addEventListener('change', this.changeHandler_); // Sometimes the checked state of the input element is saved in the history.
    // The switch styling should match the checked state of the input element.
    // Do an initial sync between the native control and the foundation.

    this.checked = this.checked;
  };

  MDCSwitch.prototype.getDefaultFoundation = function () {
    var _this = this; // DO NOT INLINE this variable. For backward compatibility, foundations take a Partial<MDCFooAdapter>.
    // To ensure we don't accidentally omit any methods, we need a separate, strongly typed adapter variable.


    var adapter = {
      addClass: function addClass(className) {
        return _this.root_.classList.add(className);
      },
      removeClass: function removeClass(className) {
        return _this.root_.classList.remove(className);
      },
      setNativeControlChecked: function setNativeControlChecked(checked) {
        return _this.nativeControl_.checked = checked;
      },
      setNativeControlDisabled: function setNativeControlDisabled(disabled) {
        return _this.nativeControl_.disabled = disabled;
      }
    };
    return new MDCSwitchFoundation(adapter);
  };

  Object.defineProperty(MDCSwitch.prototype, "ripple", {
    get: function get() {
      return this.ripple_;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(MDCSwitch.prototype, "checked", {
    get: function get() {
      return this.nativeControl_.checked;
    },
    set: function set(checked) {
      this.foundation_.setChecked(checked);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(MDCSwitch.prototype, "disabled", {
    get: function get() {
      return this.nativeControl_.disabled;
    },
    set: function set(disabled) {
      this.foundation_.setDisabled(disabled);
    },
    enumerable: true,
    configurable: true
  });

  MDCSwitch.prototype.createRipple_ = function () {
    var _this = this;

    var RIPPLE_SURFACE_SELECTOR = MDCSwitchFoundation.strings.RIPPLE_SURFACE_SELECTOR;
    var rippleSurface = this.root_.querySelector(RIPPLE_SURFACE_SELECTOR); // DO NOT INLINE this variable. For backward compatibility, foundations take a Partial<MDCFooAdapter>.
    // To ensure we don't accidentally omit any methods, we need a separate, strongly typed adapter variable.

    var adapter = _assign({}, MDCRipple.createAdapter(this), {
      addClass: function addClass(className) {
        return rippleSurface.classList.add(className);
      },
      computeBoundingRect: function computeBoundingRect() {
        return rippleSurface.getBoundingClientRect();
      },
      deregisterInteractionHandler: function deregisterInteractionHandler(evtType, handler) {
        _this.nativeControl_.removeEventListener(evtType, handler, applyPassive());
      },
      isSurfaceActive: function isSurfaceActive() {
        return matches(_this.nativeControl_, ':active');
      },
      isUnbounded: function isUnbounded() {
        return true;
      },
      registerInteractionHandler: function registerInteractionHandler(evtType, handler) {
        _this.nativeControl_.addEventListener(evtType, handler, applyPassive());
      },
      removeClass: function removeClass(className) {
        return rippleSurface.classList.remove(className);
      },
      updateCssVariable: function updateCssVariable(varName, value) {
        rippleSurface.style.setProperty(varName, value);
      }
    });

    return new MDCRipple(this.root_, new MDCRippleFoundation(adapter));
  };

  Object.defineProperty(MDCSwitch.prototype, "nativeControl_", {
    get: function get() {
      var NATIVE_CONTROL_SELECTOR = MDCSwitchFoundation.strings.NATIVE_CONTROL_SELECTOR;
      return this.root_.querySelector(NATIVE_CONTROL_SELECTOR);
    },
    enumerable: true,
    configurable: true
  });
  return MDCSwitch;
}(MDCComponent);

var file = "Users/hperrin/repos/svelte-material-ui/packages/switch/Switch.svelte";

function create_fragment(ctx) {
  var div3, div0, t, div2, div1, input, useActions_action, useActions_action_1, forwardEvents_action, dispose;
  var input_levels = [{
    class: "mdc-switch__native-control " + ctx.input$class
  }, {
    type: "checkbox"
  }, {
    role: "switch"
  }, ctx.inputProps, {
    disabled: ctx.disabled
  }, {
    value: ctx.valueKey === ctx.uninitializedValue ? ctx.value : ctx.valueKey
  }, exclude(prefixFilter(ctx.$$props, 'input$'), ['use', 'class'])];
  var input_data = {};

  for (var i = 0; i < input_levels.length; i += 1) {
    input_data = assign(input_data, input_levels[i]);
  }

  var div3_levels = [{
    class: "mdc-switch " + ctx.className
  }, exclude(ctx.$$props, ['use', 'class', 'disabled', 'group', 'checked', 'value', 'input$'])];
  var div3_data = {};

  for (var i = 0; i < div3_levels.length; i += 1) {
    div3_data = assign(div3_data, div3_levels[i]);
  }

  var block = {
    c: function create() {
      div3 = element("div");
      div0 = element("div");
      t = space();
      div2 = element("div");
      div1 = element("div");
      input = element("input");
      this.h();
    },
    l: function claim(nodes) {
      div3 = claim_element(nodes, "DIV", {
        class: true
      }, false);
      var div3_nodes = children(div3);
      div0 = claim_element(div3_nodes, "DIV", {
        class: true
      }, false);
      var div0_nodes = children(div0);
      div0_nodes.forEach(detach_dev);
      t = claim_space(div3_nodes);
      div2 = claim_element(div3_nodes, "DIV", {
        class: true
      }, false);
      var div2_nodes = children(div2);
      div1 = claim_element(div2_nodes, "DIV", {
        class: true
      }, false);
      var div1_nodes = children(div1);
      input = claim_element(div1_nodes, "INPUT", {
        class: true,
        type: true,
        role: true,
        disabled: true,
        value: true
      }, false);
      var input_nodes = children(input);
      input_nodes.forEach(detach_dev);
      div1_nodes.forEach(detach_dev);
      div2_nodes.forEach(detach_dev);
      div3_nodes.forEach(detach_dev);
      this.h();
    },
    h: function hydrate() {
      attr_dev(div0, "class", "mdc-switch__track");
      add_location(div0, file, 9, 2, 284);
      set_attributes(input, input_data);
      add_location(input, file, 12, 6, 407);
      attr_dev(div1, "class", "mdc-switch__thumb");
      add_location(div1, file, 11, 4, 369);
      attr_dev(div2, "class", "mdc-switch__thumb-underlay");
      add_location(div2, file, 10, 2, 324);
      set_attributes(div3, div3_data);
      toggle_class(div3, "mdc-switch--disabled", ctx.disabled);
      toggle_class(div3, "mdc-switch--checked", ctx.nativeChecked);
      add_location(div3, file, 0, 0, 0);
      dispose = [listen_dev(input, "change", ctx.input_change_handler), listen_dev(input, "change", ctx.handleChange), listen_dev(input, "change", ctx.change_handler), listen_dev(input, "input", ctx.input_handler)];
    },
    m: function mount(target, anchor) {
      insert_dev(target, div3, anchor);
      append_dev(div3, div0);
      append_dev(div3, t);
      append_dev(div3, div2);
      append_dev(div2, div1);
      append_dev(div1, input);
      input.checked = ctx.nativeChecked;
      useActions_action = useActions.call(null, input, ctx.input$use) || {};
      ctx.div3_binding(div3);
      useActions_action_1 = useActions.call(null, div3, ctx.use) || {};
      forwardEvents_action = ctx.forwardEvents.call(null, div3) || {};
    },
    p: function update(changed, ctx) {
      if (changed.nativeChecked) input.checked = ctx.nativeChecked;
      set_attributes(input, get_spread_update(input_levels, [changed.input$class && {
        class: "mdc-switch__native-control " + ctx.input$class
      }, {
        type: "checkbox"
      }, {
        role: "switch"
      }, changed.inputProps && ctx.inputProps, changed.disabled && {
        disabled: ctx.disabled
      }, (changed.valueKey || changed.uninitializedValue || changed.value) && {
        value: ctx.valueKey === ctx.uninitializedValue ? ctx.value : ctx.valueKey
      }, (changed.exclude || changed.prefixFilter || changed.$$props) && exclude(prefixFilter(ctx.$$props, 'input$'), ['use', 'class'])]));

      if (typeof useActions_action.update === 'function' && changed.input$use) {
        useActions_action.update.call(null, ctx.input$use);
      }

      set_attributes(div3, get_spread_update(div3_levels, [changed.className && {
        class: "mdc-switch " + ctx.className
      }, (changed.exclude || changed.$$props) && exclude(ctx.$$props, ['use', 'class', 'disabled', 'group', 'checked', 'value', 'input$'])]));

      if (typeof useActions_action_1.update === 'function' && changed.use) {
        useActions_action_1.update.call(null, ctx.use);
      }

      if (changed.className || changed.disabled) {
        toggle_class(div3, "mdc-switch--disabled", ctx.disabled);
      }

      if (changed.className || changed.nativeChecked) {
        toggle_class(div3, "mdc-switch--checked", ctx.nativeChecked);
      }
    },
    i: noop,
    o: noop,
    d: function destroy(detaching) {
      if (detaching) {
        detach_dev(div3);
      }

      if (useActions_action && typeof useActions_action.destroy === 'function') useActions_action.destroy();
      ctx.div3_binding(null);
      if (useActions_action_1 && typeof useActions_action_1.destroy === 'function') useActions_action_1.destroy();
      if (forwardEvents_action && typeof forwardEvents_action.destroy === 'function') forwardEvents_action.destroy();
      run_all(dispose);
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

  var uninitializedValue = function uninitializedValue() {};

  var _$$props = $$props,
      _$$props$use = _$$props.use,
      use = _$$props$use === void 0 ? [] : _$$props$use,
      _$$props$class = _$$props.class,
      className = _$$props$class === void 0 ? '' : _$$props$class,
      _$$props$disabled = _$$props.disabled,
      disabled = _$$props$disabled === void 0 ? false : _$$props$disabled,
      _$$props$group = _$$props.group,
      group = _$$props$group === void 0 ? uninitializedValue : _$$props$group,
      _$$props$checked = _$$props.checked,
      checked = _$$props$checked === void 0 ? uninitializedValue : _$$props$checked,
      _$$props$value = _$$props.value,
      value = _$$props$value === void 0 ? null : _$$props$value,
      _$$props$valueKey = _$$props.valueKey,
      valueKey = _$$props$valueKey === void 0 ? uninitializedValue : _$$props$valueKey,
      _$$props$input$use = _$$props.input$use,
      input$use = _$$props$input$use === void 0 ? [] : _$$props$input$use,
      _$$props$input$class = _$$props.input$class,
      input$class = _$$props$input$class === void 0 ? '' : _$$props$input$class;
  var element;
  var switchControl;
  var formField = getContext('SMUI:form-field');
  var inputProps = getContext('SMUI:generic:input:props') || {};
  var setChecked = getContext('SMUI:generic:input:setChecked');
  var nativeChecked = group === uninitializedValue ? checked === uninitializedValue ? false : checked : group.indexOf(value) !== -1;
  var previousChecked = checked;
  onMount(function () {
    $$invalidate('switchControl', switchControl = new MDCSwitch(element));

    if (formField && formField()) {
      formField().input = switchControl;
    }
  });
  onDestroy(function () {
    switchControl && switchControl.destroy();
  });

  function handleChange(e) {
    if (group !== uninitializedValue) {
      var idx = group.indexOf(value);

      if (switchControl.checked && idx === -1) {
        group.push(value);
        $$invalidate('group', group);
      } else if (!switchControl.checked && idx !== -1) {
        group.splice(idx, 1);
        $$invalidate('group', group);
      }
    }
  }

  function getId() {
    return inputProps && inputProps.id;
  }

  function change_handler(event) {
    bubble($$self, event);
  }

  function input_handler(event) {
    bubble($$self, event);
  }

  function input_change_handler() {
    nativeChecked = this.checked;
    $$invalidate('nativeChecked', nativeChecked), $$invalidate('checked', checked), $$invalidate('uninitializedValue', uninitializedValue), $$invalidate('previousChecked', previousChecked);
  }

  function div3_binding($$value) {
    binding_callbacks[$$value ? 'unshift' : 'push'](function () {
      $$invalidate('element', element = $$value);
    });
  }

  $$self.$set = function ($$new_props) {
    $$invalidate('$$props', $$props = assign(assign({}, $$props), $$new_props));
    if ('use' in $$new_props) $$invalidate('use', use = $$new_props.use);
    if ('class' in $$new_props) $$invalidate('className', className = $$new_props.class);
    if ('disabled' in $$new_props) $$invalidate('disabled', disabled = $$new_props.disabled);
    if ('group' in $$new_props) $$invalidate('group', group = $$new_props.group);
    if ('checked' in $$new_props) $$invalidate('checked', checked = $$new_props.checked);
    if ('value' in $$new_props) $$invalidate('value', value = $$new_props.value);
    if ('valueKey' in $$new_props) $$invalidate('valueKey', valueKey = $$new_props.valueKey);
    if ('input$use' in $$new_props) $$invalidate('input$use', input$use = $$new_props.input$use);
    if ('input$class' in $$new_props) $$invalidate('input$class', input$class = $$new_props.input$class);
  };

  $$self.$capture_state = function () {
    return {
      uninitializedValue: uninitializedValue,
      use: use,
      className: className,
      disabled: disabled,
      group: group,
      checked: checked,
      value: value,
      valueKey: valueKey,
      input$use: input$use,
      input$class: input$class,
      element: element,
      switchControl: switchControl,
      formField: formField,
      inputProps: inputProps,
      setChecked: setChecked,
      nativeChecked: nativeChecked,
      previousChecked: previousChecked
    };
  };

  $$self.$inject_state = function ($$new_props) {
    $$invalidate('$$props', $$props = assign(assign({}, $$props), $$new_props));
    if ('uninitializedValue' in $$props) $$invalidate('uninitializedValue', uninitializedValue = $$new_props.uninitializedValue);
    if ('use' in $$props) $$invalidate('use', use = $$new_props.use);
    if ('className' in $$props) $$invalidate('className', className = $$new_props.className);
    if ('disabled' in $$props) $$invalidate('disabled', disabled = $$new_props.disabled);
    if ('group' in $$props) $$invalidate('group', group = $$new_props.group);
    if ('checked' in $$props) $$invalidate('checked', checked = $$new_props.checked);
    if ('value' in $$props) $$invalidate('value', value = $$new_props.value);
    if ('valueKey' in $$props) $$invalidate('valueKey', valueKey = $$new_props.valueKey);
    if ('input$use' in $$props) $$invalidate('input$use', input$use = $$new_props.input$use);
    if ('input$class' in $$props) $$invalidate('input$class', input$class = $$new_props.input$class);
    if ('element' in $$props) $$invalidate('element', element = $$new_props.element);
    if ('switchControl' in $$props) $$invalidate('switchControl', switchControl = $$new_props.switchControl);
    if ('formField' in $$props) formField = $$new_props.formField;
    if ('inputProps' in $$props) $$invalidate('inputProps', inputProps = $$new_props.inputProps);
    if ('setChecked' in $$props) $$invalidate('setChecked', setChecked = $$new_props.setChecked);
    if ('nativeChecked' in $$props) $$invalidate('nativeChecked', nativeChecked = $$new_props.nativeChecked);
    if ('previousChecked' in $$props) $$invalidate('previousChecked', previousChecked = $$new_props.previousChecked);
  };

  $$self.$$.update = function () {
    var $$dirty = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
      checked: 1,
      uninitializedValue: 1,
      previousChecked: 1,
      nativeChecked: 1,
      setChecked: 1,
      switchControl: 1,
      group: 1,
      value: 1,
      disabled: 1,
      valueKey: 1
    };

    if ($$dirty.checked || $$dirty.uninitializedValue || $$dirty.previousChecked || $$dirty.nativeChecked) {
      if (checked !== uninitializedValue) {
        if (checked === previousChecked) {
          $$invalidate('checked', checked = nativeChecked);
        } else if (nativeChecked !== checked) {
          $$invalidate('nativeChecked', nativeChecked = checked);
        }

        $$invalidate('previousChecked', previousChecked = checked);
      }
    }

    if ($$dirty.setChecked || $$dirty.nativeChecked) {
      if (setChecked) {
        setChecked(nativeChecked);
      }
    }

    if ($$dirty.switchControl || $$dirty.group || $$dirty.uninitializedValue || $$dirty.value || $$dirty.checked) {
      if (switchControl) {
        if (group !== uninitializedValue) {
          var isChecked = group.indexOf(value) !== -1;

          if (switchControl.checked !== isChecked) {
            $$invalidate('switchControl', switchControl.checked = isChecked, switchControl);
          }
        } else if (checked !== uninitializedValue && switchControl.checked !== checked) {
          $$invalidate('switchControl', switchControl.checked = checked, switchControl);
        }
      }
    }

    if ($$dirty.switchControl || $$dirty.disabled) {
      if (switchControl && switchControl.disabled !== disabled) {
        $$invalidate('switchControl', switchControl.disabled = disabled, switchControl);
      }
    }

    if ($$dirty.switchControl || $$dirty.valueKey || $$dirty.uninitializedValue || $$dirty.value) {
      if (switchControl && valueKey === uninitializedValue && switchControl.value !== value) {
        $$invalidate('switchControl', switchControl.value = value, switchControl);
      }
    }

    if ($$dirty.switchControl || $$dirty.valueKey || $$dirty.uninitializedValue) {
      if (switchControl && valueKey !== uninitializedValue && switchControl.value !== valueKey) {
        $$invalidate('switchControl', switchControl.value = valueKey, switchControl);
      }
    }
  };

  return _defineProperty({
    forwardEvents: forwardEvents,
    uninitializedValue: uninitializedValue,
    use: use,
    className: className,
    disabled: disabled,
    group: group,
    checked: checked,
    value: value,
    valueKey: valueKey,
    input$use: input$use,
    input$class: input$class,
    element: element,
    inputProps: inputProps,
    nativeChecked: nativeChecked,
    handleChange: handleChange,
    getId: getId,
    $$props: $$props,
    change_handler: change_handler,
    input_handler: input_handler,
    input_change_handler: input_change_handler,
    div3_binding: div3_binding
  }, "$$props", $$props = exclude_internal_props($$props));
}

var Switch =
/*#__PURE__*/
function (_SvelteComponentDev) {
  _inherits(Switch, _SvelteComponentDev);

  function Switch(options) {
    var _this;

    _classCallCheck(this, Switch);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Switch).call(this, options));
    init(_assertThisInitialized(_this), options, instance, create_fragment, safe_not_equal, ["use", "class", "disabled", "group", "checked", "value", "valueKey", "input$use", "input$class", "getId"]);
    dispatch_dev("SvelteRegisterComponent", {
      component: _assertThisInitialized(_this),
      tagName: "Switch",
      options: options,
      id: create_fragment.name
    });
    var ctx = _this.$$.ctx;
    var props = options.props || {};

    if (ctx.getId === undefined && !('getId' in props)) {
      console.warn("<Switch> was created without expected prop 'getId'");
    }

    return _this;
  }

  _createClass(Switch, [{
    key: "use",
    get: function get() {
      throw new Error("<Switch>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    },
    set: function set(value) {
      throw new Error("<Switch>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    }
  }, {
    key: "class",
    get: function get() {
      throw new Error("<Switch>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    },
    set: function set(value) {
      throw new Error("<Switch>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    }
  }, {
    key: "disabled",
    get: function get() {
      throw new Error("<Switch>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    },
    set: function set(value) {
      throw new Error("<Switch>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    }
  }, {
    key: "group",
    get: function get() {
      throw new Error("<Switch>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    },
    set: function set(value) {
      throw new Error("<Switch>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    }
  }, {
    key: "checked",
    get: function get() {
      throw new Error("<Switch>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    },
    set: function set(value) {
      throw new Error("<Switch>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    }
  }, {
    key: "value",
    get: function get() {
      throw new Error("<Switch>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    },
    set: function set(value) {
      throw new Error("<Switch>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    }
  }, {
    key: "valueKey",
    get: function get() {
      throw new Error("<Switch>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    },
    set: function set(value) {
      throw new Error("<Switch>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    }
  }, {
    key: "input$use",
    get: function get() {
      throw new Error("<Switch>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    },
    set: function set(value) {
      throw new Error("<Switch>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    }
  }, {
    key: "input$class",
    get: function get() {
      throw new Error("<Switch>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    },
    set: function set(value) {
      throw new Error("<Switch>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    }
  }, {
    key: "getId",
    get: function get() {
      return this.$$.ctx.getId;
    },
    set: function set(value) {
      throw new Error("<Switch>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    }
  }]);

  return Switch;
}(SvelteComponentDev);

var file$1 = "src/routes/demo/switch.svelte";

function get_each_context(ctx, list, i) {
  var child_ctx = Object.create(ctx);
  child_ctx.option = list[i];
  return child_ctx;
} // (11:6) <span slot="label">


function create_label_slot_2(ctx) {
  var span, t;
  var block = {
    c: function create() {
      span = element("span");
      t = text("Fields of grain.");
      this.h();
    },
    l: function claim(nodes) {
      span = claim_element(nodes, "SPAN", {
        slot: true
      }, false);
      var span_nodes = children(span);
      t = claim_text(span_nodes, "Fields of grain.");
      span_nodes.forEach(detach_dev);
      this.h();
    },
    h: function hydrate() {
      attr_dev(span, "slot", "label");
      add_location(span, file$1, 10, 6, 167);
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
    id: create_label_slot_2.name,
    type: "slot",
    source: "(11:6) <span slot=\"label\">",
    ctx: ctx
  });
  return block;
} // (9:4) <FormField>


function create_default_slot_2(ctx) {
  var updating_checked, t, current;

  function switch_1_checked_binding(value) {
    ctx.switch_1_checked_binding.call(null, value);
    updating_checked = true;
    add_flush_callback(function () {
      return updating_checked = false;
    });
  }

  var switch_1_props = {};

  if (ctx.simpleSelected !== void 0) {
    switch_1_props.checked = ctx.simpleSelected;
  }

  var switch_1 = new Switch({
    props: switch_1_props,
    $$inline: true
  });
  binding_callbacks.push(function () {
    return bind(switch_1, 'checked', switch_1_checked_binding);
  });
  var block = {
    c: function create() {
      switch_1.$$.fragment.c();
      t = space();
    },
    l: function claim(nodes) {
      switch_1.$$.fragment.l(nodes);
      t = claim_space(nodes);
    },
    m: function mount(target, anchor) {
      mount_component(switch_1, target, anchor);
      insert_dev(target, t, anchor);
      current = true;
    },
    p: function update(changed, ctx) {
      var switch_1_changes = {};

      if (!updating_checked && changed.simpleSelected) {
        switch_1_changes.checked = ctx.simpleSelected;
      }

      switch_1.$set(switch_1_changes);
    },
    i: function intro(local) {
      if (current) return;
      transition_in(switch_1.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(switch_1.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      destroy_component(switch_1, detaching);

      if (detaching) {
        detach_dev(t);
      }
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_default_slot_2.name,
    type: "slot",
    source: "(9:4) <FormField>",
    ctx: ctx
  });
  return block;
} // (20:6) <span slot="label">


function create_label_slot_1(ctx) {
  var span, t;
  var block = {
    c: function create() {
      span = element("span");
      t = text("Fields of grain.");
      this.h();
    },
    l: function claim(nodes) {
      span = claim_element(nodes, "SPAN", {
        slot: true
      }, false);
      var span_nodes = children(span);
      t = claim_text(span_nodes, "Fields of grain.");
      span_nodes.forEach(detach_dev);
      this.h();
    },
    h: function hydrate() {
      attr_dev(span, "slot", "label");
      add_location(span, file$1, 19, 6, 382);
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
    id: create_label_slot_1.name,
    type: "slot",
    source: "(20:6) <span slot=\"label\">",
    ctx: ctx
  });
  return block;
} // (18:4) <FormField align="end">


function create_default_slot_1(ctx) {
  var updating_checked, t, current;

  function switch_1_checked_binding_1(value) {
    ctx.switch_1_checked_binding_1.call(null, value);
    updating_checked = true;
    add_flush_callback(function () {
      return updating_checked = false;
    });
  }

  var switch_1_props = {};

  if (ctx.simpleSelected2 !== void 0) {
    switch_1_props.checked = ctx.simpleSelected2;
  }

  var switch_1 = new Switch({
    props: switch_1_props,
    $$inline: true
  });
  binding_callbacks.push(function () {
    return bind(switch_1, 'checked', switch_1_checked_binding_1);
  });
  var block = {
    c: function create() {
      switch_1.$$.fragment.c();
      t = space();
    },
    l: function claim(nodes) {
      switch_1.$$.fragment.l(nodes);
      t = claim_space(nodes);
    },
    m: function mount(target, anchor) {
      mount_component(switch_1, target, anchor);
      insert_dev(target, t, anchor);
      current = true;
    },
    p: function update(changed, ctx) {
      var switch_1_changes = {};

      if (!updating_checked && changed.simpleSelected2) {
        switch_1_changes.checked = ctx.simpleSelected2;
      }

      switch_1.$set(switch_1_changes);
    },
    i: function intro(local) {
      if (current) return;
      transition_in(switch_1.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(switch_1.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      destroy_component(switch_1, detaching);

      if (detaching) {
        detach_dev(t);
      }
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_default_slot_1.name,
    type: "slot",
    source: "(18:4) <FormField align=\"end\">",
    ctx: ctx
  });
  return block;
} // (32:10) <span slot="label">


function create_label_slot(ctx) {
  var span,
      t0_value = ctx.option.name + "",
      t0,
      t1_value = ctx.option.disabled ? ' (disabled)' : '' + "",
      t1;
  var block = {
    c: function create() {
      span = element("span");
      t0 = text(t0_value);
      t1 = text(t1_value);
      this.h();
    },
    l: function claim(nodes) {
      span = claim_element(nodes, "SPAN", {
        slot: true
      }, false);
      var span_nodes = children(span);
      t0 = claim_text(span_nodes, t0_value);
      t1 = claim_text(span_nodes, t1_value);
      span_nodes.forEach(detach_dev);
      this.h();
    },
    h: function hydrate() {
      attr_dev(span, "slot", "label");
      add_location(span, file$1, 31, 10, 726);
    },
    m: function mount(target, anchor) {
      insert_dev(target, span, anchor);
      append_dev(span, t0);
      append_dev(span, t1);
    },
    p: noop,
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
    source: "(32:10) <span slot=\"label\">",
    ctx: ctx
  });
  return block;
} // (30:8) <FormField>


function create_default_slot(ctx) {
  var updating_group, t, current;

  function switch_1_group_binding(value) {
    ctx.switch_1_group_binding.call(null, value);
    updating_group = true;
    add_flush_callback(function () {
      return updating_group = false;
    });
  }

  var switch_1_props = {
    value: ctx.option.name,
    disabled: ctx.option.disabled
  };

  if (ctx.selected !== void 0) {
    switch_1_props.group = ctx.selected;
  }

  var switch_1 = new Switch({
    props: switch_1_props,
    $$inline: true
  });
  binding_callbacks.push(function () {
    return bind(switch_1, 'group', switch_1_group_binding);
  });
  var block = {
    c: function create() {
      switch_1.$$.fragment.c();
      t = space();
    },
    l: function claim(nodes) {
      switch_1.$$.fragment.l(nodes);
      t = claim_space(nodes);
    },
    m: function mount(target, anchor) {
      mount_component(switch_1, target, anchor);
      insert_dev(target, t, anchor);
      current = true;
    },
    p: function update(changed, ctx) {
      var switch_1_changes = {};

      if (!updating_group && changed.selected) {
        switch_1_changes.group = ctx.selected;
      }

      switch_1.$set(switch_1_changes);
    },
    i: function intro(local) {
      if (current) return;
      transition_in(switch_1.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(switch_1.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      destroy_component(switch_1, detaching);

      if (detaching) {
        detach_dev(t);
      }
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_default_slot.name,
    type: "slot",
    source: "(30:8) <FormField>",
    ctx: ctx
  });
  return block;
} // (28:4) {#each options as option}


function create_each_block(ctx) {
  var div, t, current;
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
  var block = {
    c: function create() {
      div = element("div");
      formfield.$$.fragment.c();
      t = space();
      this.h();
    },
    l: function claim(nodes) {
      div = claim_element(nodes, "DIV", {
        style: true
      }, false);
      var div_nodes = children(div);
      formfield.$$.fragment.l(div_nodes);
      t = claim_space(div_nodes);
      div_nodes.forEach(detach_dev);
      this.h();
    },
    h: function hydrate() {
      set_style(div, "margin", "18px 0");
      add_location(div, file$1, 28, 6, 576);
    },
    m: function mount(target, anchor) {
      insert_dev(target, div, anchor);
      mount_component(formfield, div, null);
      append_dev(div, t);
      current = true;
    },
    p: function update(changed, ctx) {
      var formfield_changes = {};
      if (changed.$$scope || changed.selected) formfield_changes.$$scope = {
        changed: changed,
        ctx: ctx
      };
      formfield.$set(formfield_changes);
    },
    i: function intro(local) {
      if (current) return;
      transition_in(formfield.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(formfield.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      if (detaching) {
        detach_dev(div);
      }

      destroy_component(formfield);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_each_block.name,
    type: "each",
    source: "(28:4) {#each options as option}",
    ctx: ctx
  });
  return block;
}

function create_fragment$1(ctx) {
  var t0,
      section,
      h2,
      t1,
      t2,
      div0,
      t3,
      pre0,
      t4,
      t5,
      t6,
      div1,
      t7,
      pre1,
      t8,
      t9,
      t10,
      div2,
      t11,
      br,
      t12,
      t13,
      pre2,
      t14,
      t15_value = ctx.selected.join(', ') + "",
      t15,
      current;
  var formfield0 = new FormField({
    props: {
      $$slots: {
        default: [create_default_slot_2],
        label: [create_label_slot_2]
      },
      $$scope: {
        ctx: ctx
      }
    },
    $$inline: true
  });
  var formfield1 = new FormField({
    props: {
      align: "end",
      $$slots: {
        default: [create_default_slot_1],
        label: [create_label_slot_1]
      },
      $$scope: {
        ctx: ctx
      }
    },
    $$inline: true
  });
  var each_value = ctx.options;
  var each_blocks = [];

  for (var i = 0; i < each_value.length; i += 1) {
    each_blocks[i] = create_each_block(get_each_context(ctx, each_value, i));
  }

  var out = function out(i) {
    return transition_out(each_blocks[i], 1, 1, function () {
      each_blocks[i] = null;
    });
  };

  var block = {
    c: function create() {
      t0 = space();
      section = element("section");
      h2 = element("h2");
      t1 = text("Switch");
      t2 = space();
      div0 = element("div");
      formfield0.$$.fragment.c();
      t3 = space();
      pre0 = element("pre");
      t4 = text("Checked: ");
      t5 = text(ctx.simpleSelected);
      t6 = space();
      div1 = element("div");
      formfield1.$$.fragment.c();
      t7 = space();
      pre1 = element("pre");
      t8 = text("Checked: ");
      t9 = text(ctx.simpleSelected2);
      t10 = space();
      div2 = element("div");
      t11 = text("Group switch:");
      br = element("br");
      t12 = space();

      for (var _i = 0; _i < each_blocks.length; _i += 1) {
        each_blocks[_i].c();
      }

      t13 = space();
      pre2 = element("pre");
      t14 = text("Selected: ");
      t15 = text(t15_value);
      this.h();
    },
    l: function claim(nodes) {
      t0 = claim_space(nodes);
      section = claim_element(nodes, "SECTION", {}, false);
      var section_nodes = children(section);
      h2 = claim_element(section_nodes, "H2", {}, false);
      var h2_nodes = children(h2);
      t1 = claim_text(h2_nodes, "Switch");
      h2_nodes.forEach(detach_dev);
      t2 = claim_space(section_nodes);
      div0 = claim_element(section_nodes, "DIV", {}, false);
      var div0_nodes = children(div0);
      formfield0.$$.fragment.l(div0_nodes);
      div0_nodes.forEach(detach_dev);
      t3 = claim_space(section_nodes);
      pre0 = claim_element(section_nodes, "PRE", {
        class: true
      }, false);
      var pre0_nodes = children(pre0);
      t4 = claim_text(pre0_nodes, "Checked: ");
      t5 = claim_text(pre0_nodes, ctx.simpleSelected);
      pre0_nodes.forEach(detach_dev);
      t6 = claim_space(section_nodes);
      div1 = claim_element(section_nodes, "DIV", {}, false);
      var div1_nodes = children(div1);
      formfield1.$$.fragment.l(div1_nodes);
      div1_nodes.forEach(detach_dev);
      t7 = claim_space(section_nodes);
      pre1 = claim_element(section_nodes, "PRE", {
        class: true
      }, false);
      var pre1_nodes = children(pre1);
      t8 = claim_text(pre1_nodes, "Checked: ");
      t9 = claim_text(pre1_nodes, ctx.simpleSelected2);
      pre1_nodes.forEach(detach_dev);
      t10 = claim_space(section_nodes);
      div2 = claim_element(section_nodes, "DIV", {}, false);
      var div2_nodes = children(div2);
      t11 = claim_text(div2_nodes, "Group switch:");
      br = claim_element(div2_nodes, "BR", {}, false);
      var br_nodes = children(br);
      br_nodes.forEach(detach_dev);
      t12 = claim_space(div2_nodes);

      for (var _i2 = 0; _i2 < each_blocks.length; _i2 += 1) {
        each_blocks[_i2].l(div2_nodes);
      }

      div2_nodes.forEach(detach_dev);
      t13 = claim_space(section_nodes);
      pre2 = claim_element(section_nodes, "PRE", {
        class: true
      }, false);
      var pre2_nodes = children(pre2);
      t14 = claim_text(pre2_nodes, "Selected: ");
      t15 = claim_text(pre2_nodes, t15_value);
      pre2_nodes.forEach(detach_dev);
      section_nodes.forEach(detach_dev);
      this.h();
    },
    h: function hydrate() {
      document.title = "Switch - SMUI";
      add_location(h2, file$1, 5, 2, 73);
      add_location(div0, file$1, 7, 2, 92);
      attr_dev(pre0, "class", "status");
      add_location(pre0, file$1, 14, 2, 239);
      add_location(div1, file$1, 16, 2, 294);
      attr_dev(pre1, "class", "status");
      add_location(pre1, file$1, 23, 2, 454);
      add_location(br, file$1, 26, 17, 533);
      add_location(div2, file$1, 25, 2, 510);
      attr_dev(pre2, "class", "status");
      add_location(pre2, file$1, 37, 2, 862);
      add_location(section, file$1, 4, 0, 61);
    },
    m: function mount(target, anchor) {
      insert_dev(target, t0, anchor);
      insert_dev(target, section, anchor);
      append_dev(section, h2);
      append_dev(h2, t1);
      append_dev(section, t2);
      append_dev(section, div0);
      mount_component(formfield0, div0, null);
      append_dev(section, t3);
      append_dev(section, pre0);
      append_dev(pre0, t4);
      append_dev(pre0, t5);
      append_dev(section, t6);
      append_dev(section, div1);
      mount_component(formfield1, div1, null);
      append_dev(section, t7);
      append_dev(section, pre1);
      append_dev(pre1, t8);
      append_dev(pre1, t9);
      append_dev(section, t10);
      append_dev(section, div2);
      append_dev(div2, t11);
      append_dev(div2, br);
      append_dev(div2, t12);

      for (var _i3 = 0; _i3 < each_blocks.length; _i3 += 1) {
        each_blocks[_i3].m(div2, null);
      }

      append_dev(section, t13);
      append_dev(section, pre2);
      append_dev(pre2, t14);
      append_dev(pre2, t15);
      current = true;
    },
    p: function update(changed, ctx) {
      var formfield0_changes = {};
      if (changed.$$scope || changed.simpleSelected) formfield0_changes.$$scope = {
        changed: changed,
        ctx: ctx
      };
      formfield0.$set(formfield0_changes);

      if (!current || changed.simpleSelected) {
        set_data_dev(t5, ctx.simpleSelected);
      }

      var formfield1_changes = {};
      if (changed.$$scope || changed.simpleSelected2) formfield1_changes.$$scope = {
        changed: changed,
        ctx: ctx
      };
      formfield1.$set(formfield1_changes);

      if (!current || changed.simpleSelected2) {
        set_data_dev(t9, ctx.simpleSelected2);
      }

      if (changed.options || changed.selected) {
        each_value = ctx.options;

        var _i4;

        for (_i4 = 0; _i4 < each_value.length; _i4 += 1) {
          var child_ctx = get_each_context(ctx, each_value, _i4);

          if (each_blocks[_i4]) {
            each_blocks[_i4].p(changed, child_ctx);

            transition_in(each_blocks[_i4], 1);
          } else {
            each_blocks[_i4] = create_each_block(child_ctx);

            each_blocks[_i4].c();

            transition_in(each_blocks[_i4], 1);

            each_blocks[_i4].m(div2, null);
          }
        }

        group_outros();

        for (_i4 = each_value.length; _i4 < each_blocks.length; _i4 += 1) {
          out(_i4);
        }

        check_outros();
      }

      if ((!current || changed.selected) && t15_value !== (t15_value = ctx.selected.join(', ') + "")) {
        set_data_dev(t15, t15_value);
      }
    },
    i: function intro(local) {
      if (current) return;
      transition_in(formfield0.$$.fragment, local);
      transition_in(formfield1.$$.fragment, local);

      for (var _i5 = 0; _i5 < each_value.length; _i5 += 1) {
        transition_in(each_blocks[_i5]);
      }

      current = true;
    },
    o: function outro(local) {
      transition_out(formfield0.$$.fragment, local);
      transition_out(formfield1.$$.fragment, local);
      each_blocks = each_blocks.filter(Boolean);

      for (var _i6 = 0; _i6 < each_blocks.length; _i6 += 1) {
        transition_out(each_blocks[_i6]);
      }

      current = false;
    },
    d: function destroy(detaching) {
      if (detaching) {
        detach_dev(t0);
        detach_dev(section);
      }

      destroy_component(formfield0);
      destroy_component(formfield1);
      destroy_each(each_blocks, detaching);
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
  var simpleSelected = false;
  var simpleSelected2 = false;
  var options = [{
    name: 'Bashful',
    disabled: false
  }, {
    name: 'Doc',
    disabled: true
  }, {
    name: 'Dopey',
    disabled: false
  }, {
    name: 'Happy',
    disabled: false
  }, {
    name: 'Sleepy',
    disabled: false
  }, {
    name: 'Sneezy',
    disabled: false
  }, {
    name: 'Grumpy',
    disabled: false
  }];
  var selected = ['Happy', 'Grumpy'];

  function switch_1_checked_binding(value) {
    simpleSelected = value;
    $$invalidate('simpleSelected', simpleSelected);
  }

  function switch_1_checked_binding_1(value) {
    simpleSelected2 = value;
    $$invalidate('simpleSelected2', simpleSelected2);
  }

  function switch_1_group_binding(value) {
    selected = value;
    $$invalidate('selected', selected);
  }

  $$self.$capture_state = function () {
    return {};
  };

  $$self.$inject_state = function ($$props) {
    if ('simpleSelected' in $$props) $$invalidate('simpleSelected', simpleSelected = $$props.simpleSelected);
    if ('simpleSelected2' in $$props) $$invalidate('simpleSelected2', simpleSelected2 = $$props.simpleSelected2);
    if ('options' in $$props) $$invalidate('options', options = $$props.options);
    if ('selected' in $$props) $$invalidate('selected', selected = $$props.selected);
  };

  return {
    simpleSelected: simpleSelected,
    simpleSelected2: simpleSelected2,
    options: options,
    selected: selected,
    switch_1_checked_binding: switch_1_checked_binding,
    switch_1_checked_binding_1: switch_1_checked_binding_1,
    switch_1_group_binding: switch_1_group_binding
  };
}

var Switch_1 =
/*#__PURE__*/
function (_SvelteComponentDev) {
  _inherits$1(Switch_1, _SvelteComponentDev);

  function Switch_1(options) {
    var _this;

    _classCallCheck$1(this, Switch_1);

    _this = _possibleConstructorReturn$1(this, _getPrototypeOf$1(Switch_1).call(this, options));
    init(_assertThisInitialized$1(_this), options, instance$1, create_fragment$1, safe_not_equal, []);
    dispatch_dev("SvelteRegisterComponent", {
      component: _assertThisInitialized$1(_this),
      tagName: "Switch_1",
      options: options,
      id: create_fragment$1.name
    });
    return _this;
  }

  return Switch_1;
}(SvelteComponentDev);

export default Switch_1;

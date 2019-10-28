import { i as init, s as safe_not_equal, d as dispatch_dev, S as SvelteComponentDev, c as create_slot, a as assign, $ as setContext, B as onMount, a3 as onDestroy, e as exclude_internal_props, f as element, g as claim_element, h as children, j as detach_dev, k as set_attributes, l as add_location, a4 as toggle_class, D as listen_dev, m as insert_dev, P as append_dev, o as get_slot_changes, p as get_slot_context, q as get_spread_update, t as transition_in, r as transition_out, b as current_component, G as binding_callbacks, J as mount_component, Z as get_spread_object, K as destroy_component, C as empty, E as group_outros, F as check_outros, M as space, N as claim_space, a8 as destroy_each, T as text, U as claim_text, X as set_data_dev, u as _inherits$1, v as _classCallCheck$1, w as _possibleConstructorReturn$1, x as _getPrototypeOf$1, y as _assertThisInitialized$1, I as bind, O as attr_dev, L as add_flush_callback } from './index.d5da4a00.js';
import { _ as _inherits, a as _classCallCheck, b as _possibleConstructorReturn, c as _getPrototypeOf, d as _assertThisInitialized, e as _createClass, f as exclude, g as forwardEventsBuilder, h as _defineProperty, u as useActions } from './useActions.b478cae0.js';
import { s as styleInject } from './typeof.0d5bf00d.js';
import { c as classAdderBuilder, D as Div } from './Div.1629f0cb.js';
import { B as Button$1 } from './index.35ab1463.js';
import './bare.3cea1bea.js';
import './Button.d401af18.js';
import { L as Label } from './Label.35a2c1e8.js';
import './Icon.3c6823d4.js';
import { a as IconButton$1 } from './index.74622d3b.js';
import { p as prefixFilter } from './prefixFilter.1941fe02.js';
import { T as Textfield } from './index.d1106c6e.js';
import './NotchedOutline.de490d77.js';

var css = ".mdc-snackbar{z-index:8;margin:8px;display:none;position:fixed;right:0;bottom:0;left:0;align-items:center;justify-content:center;box-sizing:border-box;pointer-events:none;-webkit-tap-highlight-color:rgba(0,0,0,0)}.mdc-snackbar__surface{background-color:#333}.mdc-snackbar__label{color:hsla(0,0%,100%,.87)}.mdc-snackbar__surface{min-width:344px}@media (max-width:344px),(max-width:480px){.mdc-snackbar__surface{min-width:100%}}.mdc-snackbar__surface{max-width:672px;box-shadow:0 3px 5px -1px rgba(0,0,0,.2),0 6px 10px 0 rgba(0,0,0,.14),0 1px 18px 0 rgba(0,0,0,.12);border-radius:4px}.mdc-snackbar--closing,.mdc-snackbar--open,.mdc-snackbar--opening{display:flex}.mdc-snackbar--leading{justify-content:flex-start}.mdc-snackbar--stacked .mdc-snackbar__surface{flex-direction:column;align-items:flex-start}.mdc-snackbar--stacked .mdc-snackbar__actions{align-self:flex-end;margin-bottom:8px}.mdc-snackbar__surface{display:flex;align-items:center;justify-content:flex-start;box-sizing:border-box;transform:scale(.8);opacity:0}.mdc-snackbar--open .mdc-snackbar__surface{transform:scale(1);opacity:1;pointer-events:auto;transition:opacity .15s cubic-bezier(0,0,.2,1) 0ms,transform .15s cubic-bezier(0,0,.2,1) 0ms}.mdc-snackbar--closing .mdc-snackbar__surface{transform:scale(1);transition:opacity 75ms cubic-bezier(.4,0,1,1) 0ms}.mdc-snackbar__label{font-family:Roboto,sans-serif;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-size:.875rem;line-height:1.25rem;font-weight:400;letter-spacing:.01786em;text-decoration:inherit;text-transform:inherit;flex-grow:1;box-sizing:border-box;margin:0;padding:14px 16px}.mdc-snackbar__label:before{display:inline;content:attr(data-mdc-snackbar-label-text)}.mdc-snackbar__actions{margin-left:0;margin-right:8px;display:flex;flex-shrink:0;align-items:center;box-sizing:border-box}.mdc-snackbar__actions[dir=rtl],[dir=rtl] .mdc-snackbar__actions{margin-left:8px;margin-right:0}.mdc-snackbar__action:not(:disabled){color:#bb86fc}.mdc-snackbar__action:after,.mdc-snackbar__action:before{background-color:#bb86fc}.mdc-snackbar__action:hover:before{opacity:.08}.mdc-snackbar__action.mdc-ripple-upgraded--background-focused:before,.mdc-snackbar__action:not(.mdc-ripple-upgraded):focus:before{transition-duration:75ms;opacity:.24}.mdc-snackbar__action:not(.mdc-ripple-upgraded):after{transition:opacity .15s linear}.mdc-snackbar__action:not(.mdc-ripple-upgraded):active:after{transition-duration:75ms;opacity:.24}.mdc-snackbar__action.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:0.24}.mdc-snackbar__dismiss{color:hsla(0,0%,100%,.87)}.mdc-snackbar__dismiss:after,.mdc-snackbar__dismiss:before{background-color:hsla(0,0%,100%,.87)}.mdc-snackbar__dismiss:hover:before{opacity:.08}.mdc-snackbar__dismiss.mdc-ripple-upgraded--background-focused:before,.mdc-snackbar__dismiss:not(.mdc-ripple-upgraded):focus:before{transition-duration:75ms;opacity:.24}.mdc-snackbar__dismiss:not(.mdc-ripple-upgraded):after{transition:opacity .15s linear}.mdc-snackbar__dismiss:not(.mdc-ripple-upgraded):active:after{transition-duration:75ms;opacity:.24}.mdc-snackbar__dismiss.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:0.24}.mdc-snackbar__dismiss.mdc-snackbar__dismiss{width:36px;height:36px;padding:9px;font-size:18px}.mdc-snackbar__dismiss.mdc-snackbar__dismiss img,.mdc-snackbar__dismiss.mdc-snackbar__dismiss svg{width:18px;height:18px}.mdc-snackbar__action+.mdc-snackbar__dismiss{margin-left:8px;margin-right:0}.mdc-snackbar__action+.mdc-snackbar__dismiss[dir=rtl],[dir=rtl] .mdc-snackbar__action+.mdc-snackbar__dismiss{margin-left:0;margin-right:8px}.mdc-snackbar__dismiss.mdc-snackbar__dismiss{color:hsla(0,0%,100%,.87)}.mdc-snackbar__dismiss.mdc-snackbar__dismiss:after,.mdc-snackbar__dismiss.mdc-snackbar__dismiss:before{background-color:hsla(0,0%,100%,.87)}.mdc-snackbar__dismiss.mdc-snackbar__dismiss:hover:before{opacity:.08}.mdc-snackbar__dismiss.mdc-snackbar__dismiss.mdc-ripple-upgraded--background-focused:before,.mdc-snackbar__dismiss.mdc-snackbar__dismiss:not(.mdc-ripple-upgraded):focus:before{transition-duration:75ms;opacity:.24}.mdc-snackbar__dismiss.mdc-snackbar__dismiss:not(.mdc-ripple-upgraded):after{transition:opacity .15s linear}.mdc-snackbar__dismiss.mdc-snackbar__dismiss:not(.mdc-ripple-upgraded):active:after{transition-duration:75ms;opacity:.24}.mdc-snackbar__dismiss.mdc-snackbar__dismiss.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:0.24}";
styleInject(css);

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
var cssClasses = {
  CLOSING: 'mdc-snackbar--closing',
  OPEN: 'mdc-snackbar--open',
  OPENING: 'mdc-snackbar--opening'
};
var strings = {
  ACTION_SELECTOR: '.mdc-snackbar__action',
  ARIA_LIVE_LABEL_TEXT_ATTR: 'data-mdc-snackbar-label-text',
  CLOSED_EVENT: 'MDCSnackbar:closed',
  CLOSING_EVENT: 'MDCSnackbar:closing',
  DISMISS_SELECTOR: '.mdc-snackbar__dismiss',
  LABEL_SELECTOR: '.mdc-snackbar__label',
  OPENED_EVENT: 'MDCSnackbar:opened',
  OPENING_EVENT: 'MDCSnackbar:opening',
  REASON_ACTION: 'action',
  REASON_DISMISS: 'dismiss',
  SURFACE_SELECTOR: '.mdc-snackbar__surface'
};
var numbers = {
  DEFAULT_AUTO_DISMISS_TIMEOUT_MS: 5000,
  MAX_AUTO_DISMISS_TIMEOUT_MS: 10000,
  MIN_AUTO_DISMISS_TIMEOUT_MS: 4000,
  // These variables need to be kept in sync with the values in _variables.scss.
  SNACKBAR_ANIMATION_CLOSE_TIME_MS: 75,
  SNACKBAR_ANIMATION_OPEN_TIME_MS: 150,

  /**
   * Number of milliseconds to wait between temporarily clearing the label text
   * in the DOM and subsequently restoring it. This is necessary to force IE 11
   * to pick up the `aria-live` content change and announce it to the user.
   */
  ARIA_LIVE_DELAY_MS: 1000
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
var ARIA_LIVE_DELAY_MS = numbers.ARIA_LIVE_DELAY_MS;
var ARIA_LIVE_LABEL_TEXT_ATTR = strings.ARIA_LIVE_LABEL_TEXT_ATTR;

function announce(ariaEl, labelEl) {
  if (labelEl === void 0) {
    labelEl = ariaEl;
  }

  var priority = ariaEl.getAttribute('aria-live'); // Trim text to ignore `&nbsp;` (see below).
  // textContent is only null if the node is a document, DOCTYPE, or notation.

  var labelText = labelEl.textContent.trim();

  if (!labelText || !priority) {
    return;
  } // Temporarily disable `aria-live` to prevent JAWS+Firefox from announcing the message twice.


  ariaEl.setAttribute('aria-live', 'off'); // Temporarily clear `textContent` to force a DOM mutation event that will be detected by screen readers.
  // `aria-live` elements are only announced when the element's `textContent` *changes*, so snackbars
  // sent to the browser in the initial HTML response won't be read unless we clear the element's `textContent` first.
  // Similarly, displaying the same snackbar message twice in a row doesn't trigger a DOM mutation event,
  // so screen readers won't announce the second message unless we first clear `textContent`.
  //
  // We have to clear the label text two different ways to make it work in all browsers and screen readers:
  //
  //   1. `textContent = ''` is required for IE11 + JAWS
  //   2. `innerHTML = '&nbsp;'` is required for Chrome + JAWS and NVDA
  //
  // All other browser/screen reader combinations support both methods.
  //
  // The wrapper `<span>` visually hides the space character so that it doesn't cause jank when added/removed.
  // N.B.: Setting `position: absolute`, `opacity: 0`, or `height: 0` prevents Chrome from detecting the DOM change.
  //
  // This technique has been tested in:
  //
  //   * JAWS 2019:
  //       - Chrome 70
  //       - Firefox 60 (ESR)
  //       - IE 11
  //   * NVDA 2018:
  //       - Chrome 70
  //       - Firefox 60 (ESR)
  //       - IE 11
  //   * ChromeVox 53

  labelEl.textContent = '';
  labelEl.innerHTML = '<span style="display: inline-block; width: 0; height: 1px;">&nbsp;</span>'; // Prevent visual jank by temporarily displaying the label text in the ::before pseudo-element.
  // CSS generated content is normally announced by screen readers
  // (except in IE 11; see https://tink.uk/accessibility-support-for-css-generated-content/);
  // however, `aria-live` is turned off, so this DOM update will be ignored by screen readers.

  labelEl.setAttribute(ARIA_LIVE_LABEL_TEXT_ATTR, labelText);
  setTimeout(function () {
    // Allow screen readers to announce changes to the DOM again.
    ariaEl.setAttribute('aria-live', priority); // Remove the message from the ::before pseudo-element.

    labelEl.removeAttribute(ARIA_LIVE_LABEL_TEXT_ATTR); // Restore the original label text, which will be announced by screen readers.

    labelEl.textContent = labelText;
  }, ARIA_LIVE_DELAY_MS);
}

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

/**
 * @fileoverview A "ponyfill" is a polyfill that doesn't modify the global prototype chain.
 * This makes ponyfills safer than traditional polyfills, especially for libraries like MDC.
 */
function closest(element, selector) {
  if (element.closest) {
    return element.closest(selector);
  }

  var el = element;

  while (el) {
    if (matches(el, selector)) {
      return el;
    }

    el = el.parentElement;
  }

  return null;
}
function matches(element, selector) {
  var nativeMatches = element.matches || element.webkitMatchesSelector || element.msMatchesSelector;
  return nativeMatches.call(element, selector);
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
var OPENING = cssClasses.OPENING,
    OPEN = cssClasses.OPEN,
    CLOSING = cssClasses.CLOSING;
var REASON_ACTION = strings.REASON_ACTION,
    REASON_DISMISS = strings.REASON_DISMISS;

var MDCSnackbarFoundation =
/** @class */
function (_super) {
  __extends(MDCSnackbarFoundation, _super);

  function MDCSnackbarFoundation(adapter) {
    var _this = _super.call(this, _assign({}, MDCSnackbarFoundation.defaultAdapter, adapter)) || this;

    _this.isOpen_ = false;
    _this.animationFrame_ = 0;
    _this.animationTimer_ = 0;
    _this.autoDismissTimer_ = 0;
    _this.autoDismissTimeoutMs_ = numbers.DEFAULT_AUTO_DISMISS_TIMEOUT_MS;
    _this.closeOnEscape_ = true;
    return _this;
  }

  Object.defineProperty(MDCSnackbarFoundation, "cssClasses", {
    get: function get() {
      return cssClasses;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(MDCSnackbarFoundation, "strings", {
    get: function get() {
      return strings;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(MDCSnackbarFoundation, "numbers", {
    get: function get() {
      return numbers;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(MDCSnackbarFoundation, "defaultAdapter", {
    get: function get() {
      return {
        addClass: function addClass() {
          return undefined;
        },
        announce: function announce() {
          return undefined;
        },
        notifyClosed: function notifyClosed() {
          return undefined;
        },
        notifyClosing: function notifyClosing() {
          return undefined;
        },
        notifyOpened: function notifyOpened() {
          return undefined;
        },
        notifyOpening: function notifyOpening() {
          return undefined;
        },
        removeClass: function removeClass() {
          return undefined;
        }
      };
    },
    enumerable: true,
    configurable: true
  });

  MDCSnackbarFoundation.prototype.destroy = function () {
    this.clearAutoDismissTimer_();
    cancelAnimationFrame(this.animationFrame_);
    this.animationFrame_ = 0;
    clearTimeout(this.animationTimer_);
    this.animationTimer_ = 0;
    this.adapter_.removeClass(OPENING);
    this.adapter_.removeClass(OPEN);
    this.adapter_.removeClass(CLOSING);
  };

  MDCSnackbarFoundation.prototype.open = function () {
    var _this = this;

    this.clearAutoDismissTimer_();
    this.isOpen_ = true;
    this.adapter_.notifyOpening();
    this.adapter_.removeClass(CLOSING);
    this.adapter_.addClass(OPENING);
    this.adapter_.announce(); // Wait a frame once display is no longer "none", to establish basis for animation

    this.runNextAnimationFrame_(function () {
      _this.adapter_.addClass(OPEN);

      _this.animationTimer_ = setTimeout(function () {
        _this.handleAnimationTimerEnd_();

        _this.adapter_.notifyOpened();

        _this.autoDismissTimer_ = setTimeout(function () {
          _this.close(REASON_DISMISS);
        }, _this.getTimeoutMs());
      }, numbers.SNACKBAR_ANIMATION_OPEN_TIME_MS);
    });
  };
  /**
   * @param reason Why the snackbar was closed. Value will be passed to CLOSING_EVENT and CLOSED_EVENT via the
   *     `event.detail.reason` property. Standard values are REASON_ACTION and REASON_DISMISS, but custom
   *     client-specific values may also be used if desired.
   */


  MDCSnackbarFoundation.prototype.close = function (reason) {
    var _this = this;

    if (reason === void 0) {
      reason = '';
    }

    if (!this.isOpen_) {
      // Avoid redundant close calls (and events), e.g. repeated interactions as the snackbar is animating closed
      return;
    }

    cancelAnimationFrame(this.animationFrame_);
    this.animationFrame_ = 0;
    this.clearAutoDismissTimer_();
    this.isOpen_ = false;
    this.adapter_.notifyClosing(reason);
    this.adapter_.addClass(cssClasses.CLOSING);
    this.adapter_.removeClass(cssClasses.OPEN);
    this.adapter_.removeClass(cssClasses.OPENING);
    clearTimeout(this.animationTimer_);
    this.animationTimer_ = setTimeout(function () {
      _this.handleAnimationTimerEnd_();

      _this.adapter_.notifyClosed(reason);
    }, numbers.SNACKBAR_ANIMATION_CLOSE_TIME_MS);
  };

  MDCSnackbarFoundation.prototype.isOpen = function () {
    return this.isOpen_;
  };

  MDCSnackbarFoundation.prototype.getTimeoutMs = function () {
    return this.autoDismissTimeoutMs_;
  };

  MDCSnackbarFoundation.prototype.setTimeoutMs = function (timeoutMs) {
    // Use shorter variable names to make the code more readable
    var minValue = numbers.MIN_AUTO_DISMISS_TIMEOUT_MS;
    var maxValue = numbers.MAX_AUTO_DISMISS_TIMEOUT_MS;

    if (timeoutMs <= maxValue && timeoutMs >= minValue) {
      this.autoDismissTimeoutMs_ = timeoutMs;
    } else {
      throw new Error("timeoutMs must be an integer in the range " + minValue + "\u2013" + maxValue + ", but got '" + timeoutMs + "'");
    }
  };

  MDCSnackbarFoundation.prototype.getCloseOnEscape = function () {
    return this.closeOnEscape_;
  };

  MDCSnackbarFoundation.prototype.setCloseOnEscape = function (closeOnEscape) {
    this.closeOnEscape_ = closeOnEscape;
  };

  MDCSnackbarFoundation.prototype.handleKeyDown = function (evt) {
    var isEscapeKey = evt.key === 'Escape' || evt.keyCode === 27;

    if (isEscapeKey && this.getCloseOnEscape()) {
      this.close(REASON_DISMISS);
    }
  };

  MDCSnackbarFoundation.prototype.handleActionButtonClick = function (_evt) {
    this.close(REASON_ACTION);
  };

  MDCSnackbarFoundation.prototype.handleActionIconClick = function (_evt) {
    this.close(REASON_DISMISS);
  };

  MDCSnackbarFoundation.prototype.clearAutoDismissTimer_ = function () {
    clearTimeout(this.autoDismissTimer_);
    this.autoDismissTimer_ = 0;
  };

  MDCSnackbarFoundation.prototype.handleAnimationTimerEnd_ = function () {
    this.animationTimer_ = 0;
    this.adapter_.removeClass(cssClasses.OPENING);
    this.adapter_.removeClass(cssClasses.CLOSING);
  };
  /**
   * Runs the given logic on the next animation frame, using setTimeout to factor in Firefox reflow behavior.
   */


  MDCSnackbarFoundation.prototype.runNextAnimationFrame_ = function (callback) {
    var _this = this;

    cancelAnimationFrame(this.animationFrame_);
    this.animationFrame_ = requestAnimationFrame(function () {
      _this.animationFrame_ = 0;
      clearTimeout(_this.animationTimer_);
      _this.animationTimer_ = setTimeout(callback, 0);
    });
  };

  return MDCSnackbarFoundation;
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
var SURFACE_SELECTOR = strings.SURFACE_SELECTOR,
    LABEL_SELECTOR = strings.LABEL_SELECTOR,
    ACTION_SELECTOR = strings.ACTION_SELECTOR,
    DISMISS_SELECTOR = strings.DISMISS_SELECTOR,
    OPENING_EVENT = strings.OPENING_EVENT,
    OPENED_EVENT = strings.OPENED_EVENT,
    CLOSING_EVENT = strings.CLOSING_EVENT,
    CLOSED_EVENT = strings.CLOSED_EVENT;

var MDCSnackbar =
/** @class */
function (_super) {
  __extends(MDCSnackbar, _super);

  function MDCSnackbar() {
    return _super !== null && _super.apply(this, arguments) || this;
  }

  MDCSnackbar.attachTo = function (root) {
    return new MDCSnackbar(root);
  };

  MDCSnackbar.prototype.initialize = function (announcerFactory) {
    if (announcerFactory === void 0) {
      announcerFactory = function announcerFactory() {
        return announce;
      };
    }

    this.announce_ = announcerFactory();
  };

  MDCSnackbar.prototype.initialSyncWithDOM = function () {
    var _this = this;

    this.surfaceEl_ = this.root_.querySelector(SURFACE_SELECTOR);
    this.labelEl_ = this.root_.querySelector(LABEL_SELECTOR);
    this.actionEl_ = this.root_.querySelector(ACTION_SELECTOR);

    this.handleKeyDown_ = function (evt) {
      return _this.foundation_.handleKeyDown(evt);
    };

    this.handleSurfaceClick_ = function (evt) {
      var target = evt.target;

      if (_this.isActionButton_(target)) {
        _this.foundation_.handleActionButtonClick(evt);
      } else if (_this.isActionIcon_(target)) {
        _this.foundation_.handleActionIconClick(evt);
      }
    };

    this.registerKeyDownHandler_(this.handleKeyDown_);
    this.registerSurfaceClickHandler_(this.handleSurfaceClick_);
  };

  MDCSnackbar.prototype.destroy = function () {
    _super.prototype.destroy.call(this);

    this.deregisterKeyDownHandler_(this.handleKeyDown_);
    this.deregisterSurfaceClickHandler_(this.handleSurfaceClick_);
  };

  MDCSnackbar.prototype.open = function () {
    this.foundation_.open();
  };
  /**
   * @param reason Why the snackbar was closed. Value will be passed to CLOSING_EVENT and CLOSED_EVENT via the
   *     `event.detail.reason` property. Standard values are REASON_ACTION and REASON_DISMISS, but custom
   *     client-specific values may also be used if desired.
   */


  MDCSnackbar.prototype.close = function (reason) {
    if (reason === void 0) {
      reason = '';
    }

    this.foundation_.close(reason);
  };

  MDCSnackbar.prototype.getDefaultFoundation = function () {
    var _this = this; // DO NOT INLINE this variable. For backward compatibility, foundations take a Partial<MDCFooAdapter>.
    // To ensure we don't accidentally omit any methods, we need a separate, strongly typed adapter variable.


    var adapter = {
      addClass: function addClass(className) {
        return _this.root_.classList.add(className);
      },
      announce: function announce() {
        return _this.announce_(_this.labelEl_);
      },
      notifyClosed: function notifyClosed(reason) {
        return _this.emit(CLOSED_EVENT, reason ? {
          reason: reason
        } : {});
      },
      notifyClosing: function notifyClosing(reason) {
        return _this.emit(CLOSING_EVENT, reason ? {
          reason: reason
        } : {});
      },
      notifyOpened: function notifyOpened() {
        return _this.emit(OPENED_EVENT, {});
      },
      notifyOpening: function notifyOpening() {
        return _this.emit(OPENING_EVENT, {});
      },
      removeClass: function removeClass(className) {
        return _this.root_.classList.remove(className);
      }
    };
    return new MDCSnackbarFoundation(adapter);
  };

  Object.defineProperty(MDCSnackbar.prototype, "timeoutMs", {
    get: function get() {
      return this.foundation_.getTimeoutMs();
    },
    set: function set(timeoutMs) {
      this.foundation_.setTimeoutMs(timeoutMs);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(MDCSnackbar.prototype, "closeOnEscape", {
    get: function get() {
      return this.foundation_.getCloseOnEscape();
    },
    set: function set(closeOnEscape) {
      this.foundation_.setCloseOnEscape(closeOnEscape);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(MDCSnackbar.prototype, "isOpen", {
    get: function get() {
      return this.foundation_.isOpen();
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(MDCSnackbar.prototype, "labelText", {
    get: function get() {
      // This property only returns null if the node is a document, DOCTYPE, or notation.
      // On Element nodes, it always returns a string.
      return this.labelEl_.textContent;
    },
    set: function set(labelText) {
      this.labelEl_.textContent = labelText;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(MDCSnackbar.prototype, "actionButtonText", {
    get: function get() {
      return this.actionEl_.textContent;
    },
    set: function set(actionButtonText) {
      this.actionEl_.textContent = actionButtonText;
    },
    enumerable: true,
    configurable: true
  });

  MDCSnackbar.prototype.registerKeyDownHandler_ = function (handler) {
    this.listen('keydown', handler);
  };

  MDCSnackbar.prototype.deregisterKeyDownHandler_ = function (handler) {
    this.unlisten('keydown', handler);
  };

  MDCSnackbar.prototype.registerSurfaceClickHandler_ = function (handler) {
    this.surfaceEl_.addEventListener('click', handler);
  };

  MDCSnackbar.prototype.deregisterSurfaceClickHandler_ = function (handler) {
    this.surfaceEl_.removeEventListener('click', handler);
  };

  MDCSnackbar.prototype.isActionButton_ = function (target) {
    return Boolean(closest(target, ACTION_SELECTOR));
  };

  MDCSnackbar.prototype.isActionIcon_ = function (target) {
    return Boolean(closest(target, DISMISS_SELECTOR));
  };

  return MDCSnackbar;
}(MDCComponent);

var file = "Users/hperrin/repos/svelte-material-ui/packages/snackbar/Snackbar.svelte";

function create_fragment(ctx) {
  var div1, div0, useActions_action, useActions_action_1, forwardEvents_action, current, dispose;
  var default_slot_template = ctx.$$slots.default;
  var default_slot = create_slot(default_slot_template, ctx, null);
  var div0_levels = [{
    class: "mdc-snackbar__surface " + ctx.surface$class
  }, prefixFilter(ctx.$$props, 'surface$')];
  var div0_data = {};

  for (var i = 0; i < div0_levels.length; i += 1) {
    div0_data = assign(div0_data, div0_levels[i]);
  }

  var div1_levels = [{
    class: "mdc-snackbar " + ctx.className
  }, exclude(ctx.$$props, ['use', 'class', 'variant', 'leading', 'surface$'])];
  var div1_data = {};

  for (var i = 0; i < div1_levels.length; i += 1) {
    div1_data = assign(div1_data, div1_levels[i]);
  }

  var block = {
    c: function create() {
      div1 = element("div");
      div0 = element("div");
      if (default_slot) default_slot.c();
      this.h();
    },
    l: function claim(nodes) {
      div1 = claim_element(nodes, "DIV", {
        class: true
      }, false);
      var div1_nodes = children(div1);
      div0 = claim_element(div1_nodes, "DIV", {
        class: true
      }, false);
      var div0_nodes = children(div0);
      if (default_slot) default_slot.l(div0_nodes);
      div0_nodes.forEach(detach_dev);
      div1_nodes.forEach(detach_dev);
      this.h();
    },
    h: function hydrate() {
      set_attributes(div0, div0_data);
      add_location(div0, file, 10, 2, 318);
      set_attributes(div1, div1_data);
      toggle_class(div1, "mdc-snackbar--stacked", ctx.variant === 'stacked');
      toggle_class(div1, "mdc-snackbar--leading", ctx.leading);
      add_location(div1, file, 0, 0, 0);
      dispose = listen_dev(div1, "MDCSnackbar:closed", ctx.handleClosed);
    },
    m: function mount(target, anchor) {
      insert_dev(target, div1, anchor);
      append_dev(div1, div0);

      if (default_slot) {
        default_slot.m(div0, null);
      }

      useActions_action = useActions.call(null, div0, ctx.surface$use) || {};
      ctx.div1_binding(div1);
      useActions_action_1 = useActions.call(null, div1, ctx.use) || {};
      forwardEvents_action = ctx.forwardEvents.call(null, div1) || {};
      current = true;
    },
    p: function update(changed, ctx) {
      if (default_slot && default_slot.p && changed.$$scope) {
        default_slot.p(get_slot_changes(default_slot_template, ctx, changed, null), get_slot_context(default_slot_template, ctx, null));
      }

      set_attributes(div0, get_spread_update(div0_levels, [changed.surface$class && {
        class: "mdc-snackbar__surface " + ctx.surface$class
      }, (changed.prefixFilter || changed.$$props) && prefixFilter(ctx.$$props, 'surface$')]));

      if (typeof useActions_action.update === 'function' && changed.surface$use) {
        useActions_action.update.call(null, ctx.surface$use);
      }

      set_attributes(div1, get_spread_update(div1_levels, [changed.className && {
        class: "mdc-snackbar " + ctx.className
      }, (changed.exclude || changed.$$props) && exclude(ctx.$$props, ['use', 'class', 'variant', 'leading', 'surface$'])]));

      if (typeof useActions_action_1.update === 'function' && changed.use) {
        useActions_action_1.update.call(null, ctx.use);
      }

      if (changed.className || changed.variant) {
        toggle_class(div1, "mdc-snackbar--stacked", ctx.variant === 'stacked');
      }

      if (changed.className || changed.leading) {
        toggle_class(div1, "mdc-snackbar--leading", ctx.leading);
      }
    },
    i: function intro(local) {
      if (current) return;
      transition_in(default_slot, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(default_slot, local);
      current = false;
    },
    d: function destroy(detaching) {
      if (detaching) {
        detach_dev(div1);
      }

      if (default_slot) default_slot.d(detaching);
      if (useActions_action && typeof useActions_action.destroy === 'function') useActions_action.destroy();
      ctx.div1_binding(null);
      if (useActions_action_1 && typeof useActions_action_1.destroy === 'function') useActions_action_1.destroy();
      if (forwardEvents_action && typeof forwardEvents_action.destroy === 'function') forwardEvents_action.destroy();
      dispose();
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

var waiting = Promise.resolve();

function instance($$self, $$props, $$invalidate) {
  var _ref;

  var forwardEvents = forwardEventsBuilder(current_component, ['MDCSnackbar:opening', 'MDCSnackbar:opened', 'MDCSnackbar:closing', 'MDCSnackbar:closed']);

  var uninitializedValue = function uninitializedValue() {};

  var _$$props = $$props,
      _$$props$use = _$$props.use,
      use = _$$props$use === void 0 ? [] : _$$props$use,
      _$$props$class = _$$props.class,
      className = _$$props$class === void 0 ? '' : _$$props$class,
      _$$props$variant = _$$props.variant,
      variant = _$$props$variant === void 0 ? '' : _$$props$variant,
      _$$props$leading = _$$props.leading,
      leading = _$$props$leading === void 0 ? false : _$$props$leading,
      _$$props$timeoutMs = _$$props.timeoutMs,
      timeoutMs = _$$props$timeoutMs === void 0 ? 5000 : _$$props$timeoutMs,
      _$$props$closeOnEscap = _$$props.closeOnEscape,
      closeOnEscape = _$$props$closeOnEscap === void 0 ? true : _$$props$closeOnEscap,
      _$$props$labelText = _$$props.labelText,
      labelText = _$$props$labelText === void 0 ? uninitializedValue : _$$props$labelText,
      _$$props$actionButton = _$$props.actionButtonText,
      actionButtonText = _$$props$actionButton === void 0 ? uninitializedValue : _$$props$actionButton,
      _$$props$surface$clas = _$$props.surface$class,
      surface$class = _$$props$surface$clas === void 0 ? '' : _$$props$surface$clas,
      _$$props$surface$use = _$$props.surface$use,
      surface$use = _$$props$surface$use === void 0 ? [] : _$$props$surface$use;
  var element;
  var snackbar;
  var closeResolve;
  var closePromise = new Promise(function (resolve) {
    return closeResolve = resolve;
  });
  setContext('SMUI:button:context', 'snackbar');
  setContext('SMUI:icon-button:context', 'snackbar');
  setContext('SMUI:label:context', 'snackbar');
  onMount(function () {
    $$invalidate('snackbar', snackbar = new MDCSnackbar(element));
  });
  onDestroy(function () {
    snackbar && snackbar.destroy();
  });

  function handleClosed() {
    closeResolve();
    closePromise = new Promise(function (resolve) {
      return closeResolve = resolve;
    });
  }

  function open() {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    waiting = waiting.then(function () {
      var _snackbar;

      (_snackbar = snackbar).open.apply(_snackbar, args);

      return closePromise;
    });
  }

  function forceOpen() {
    var _snackbar2;

    return (_snackbar2 = snackbar).open.apply(_snackbar2, arguments);
  }

  function close() {
    var _snackbar3;

    return (_snackbar3 = snackbar).close.apply(_snackbar3, arguments);
  }

  function isOpen() {
    return snackbar.isOpen;
  }

  var _$$props2 = $$props,
      _$$props2$$$slots = _$$props2.$$slots,
      $$slots = _$$props2$$$slots === void 0 ? {} : _$$props2$$$slots,
      $$scope = _$$props2.$$scope;

  function div1_binding($$value) {
    binding_callbacks[$$value ? 'unshift' : 'push'](function () {
      $$invalidate('element', element = $$value);
    });
  }

  $$self.$set = function ($$new_props) {
    $$invalidate('$$props', $$props = assign(assign({}, $$props), $$new_props));
    if ('use' in $$new_props) $$invalidate('use', use = $$new_props.use);
    if ('class' in $$new_props) $$invalidate('className', className = $$new_props.class);
    if ('variant' in $$new_props) $$invalidate('variant', variant = $$new_props.variant);
    if ('leading' in $$new_props) $$invalidate('leading', leading = $$new_props.leading);
    if ('timeoutMs' in $$new_props) $$invalidate('timeoutMs', timeoutMs = $$new_props.timeoutMs);
    if ('closeOnEscape' in $$new_props) $$invalidate('closeOnEscape', closeOnEscape = $$new_props.closeOnEscape);
    if ('labelText' in $$new_props) $$invalidate('labelText', labelText = $$new_props.labelText);
    if ('actionButtonText' in $$new_props) $$invalidate('actionButtonText', actionButtonText = $$new_props.actionButtonText);
    if ('surface$class' in $$new_props) $$invalidate('surface$class', surface$class = $$new_props.surface$class);
    if ('surface$use' in $$new_props) $$invalidate('surface$use', surface$use = $$new_props.surface$use);
    if ('$$scope' in $$new_props) $$invalidate('$$scope', $$scope = $$new_props.$$scope);
  };

  $$self.$capture_state = function () {
    return {
      waiting: waiting,
      use: use,
      className: className,
      variant: variant,
      leading: leading,
      timeoutMs: timeoutMs,
      closeOnEscape: closeOnEscape,
      labelText: labelText,
      actionButtonText: actionButtonText,
      surface$class: surface$class,
      surface$use: surface$use,
      element: element,
      snackbar: snackbar,
      closeResolve: closeResolve,
      closePromise: closePromise
    };
  };

  $$self.$inject_state = function ($$new_props) {
    $$invalidate('$$props', $$props = assign(assign({}, $$props), $$new_props));
    if ('use' in $$props) $$invalidate('use', use = $$new_props.use);
    if ('className' in $$props) $$invalidate('className', className = $$new_props.className);
    if ('variant' in $$props) $$invalidate('variant', variant = $$new_props.variant);
    if ('leading' in $$props) $$invalidate('leading', leading = $$new_props.leading);
    if ('timeoutMs' in $$props) $$invalidate('timeoutMs', timeoutMs = $$new_props.timeoutMs);
    if ('closeOnEscape' in $$props) $$invalidate('closeOnEscape', closeOnEscape = $$new_props.closeOnEscape);
    if ('labelText' in $$props) $$invalidate('labelText', labelText = $$new_props.labelText);
    if ('actionButtonText' in $$props) $$invalidate('actionButtonText', actionButtonText = $$new_props.actionButtonText);
    if ('surface$class' in $$props) $$invalidate('surface$class', surface$class = $$new_props.surface$class);
    if ('surface$use' in $$props) $$invalidate('surface$use', surface$use = $$new_props.surface$use);
    if ('element' in $$props) $$invalidate('element', element = $$new_props.element);
    if ('snackbar' in $$props) $$invalidate('snackbar', snackbar = $$new_props.snackbar);
    if ('closeResolve' in $$props) closeResolve = $$new_props.closeResolve;
    if ('closePromise' in $$props) closePromise = $$new_props.closePromise;
  };

  $$self.$$.update = function () {
    var $$dirty = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
      snackbar: 1,
      timeoutMs: 1,
      closeOnEscape: 1,
      labelText: 1,
      actionButtonText: 1
    };

    if ($$dirty.snackbar || $$dirty.timeoutMs) {
      if (snackbar && snackbar.timeoutMs !== timeoutMs) {
        $$invalidate('snackbar', snackbar.timeoutMs = timeoutMs, snackbar);
      }
    }

    if ($$dirty.snackbar || $$dirty.closeOnEscape) {
      if (snackbar && snackbar.closeOnEscape !== closeOnEscape) {
        $$invalidate('snackbar', snackbar.closeOnEscape = closeOnEscape, snackbar);
      }
    }

    if ($$dirty.snackbar || $$dirty.labelText) {
      if (snackbar && labelText !== uninitializedValue && snackbar.labelText !== labelText) {
        $$invalidate('snackbar', snackbar.labelText = labelText, snackbar);
      }
    }

    if ($$dirty.snackbar || $$dirty.actionButtonText) {
      if (snackbar && actionButtonText !== uninitializedValue && snackbar.actionButtonText !== actionButtonText) {
        $$invalidate('snackbar', snackbar.actionButtonText = actionButtonText, snackbar);
      }
    }
  };

  return _ref = {
    forwardEvents: forwardEvents,
    use: use,
    className: className,
    variant: variant,
    leading: leading,
    timeoutMs: timeoutMs,
    closeOnEscape: closeOnEscape,
    labelText: labelText,
    actionButtonText: actionButtonText,
    surface$class: surface$class,
    surface$use: surface$use,
    element: element,
    handleClosed: handleClosed,
    open: open,
    forceOpen: forceOpen,
    close: close,
    isOpen: isOpen,
    $$props: $$props,
    div1_binding: div1_binding
  }, _defineProperty(_ref, "$$props", $$props = exclude_internal_props($$props)), _defineProperty(_ref, "$$slots", $$slots), _defineProperty(_ref, "$$scope", $$scope), _ref;
}

var Snackbar =
/*#__PURE__*/
function (_SvelteComponentDev) {
  _inherits(Snackbar, _SvelteComponentDev);

  function Snackbar(options) {
    var _this;

    _classCallCheck(this, Snackbar);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Snackbar).call(this, options));
    init(_assertThisInitialized(_this), options, instance, create_fragment, safe_not_equal, ["use", "class", "variant", "leading", "timeoutMs", "closeOnEscape", "labelText", "actionButtonText", "surface$class", "surface$use", "open", "forceOpen", "close", "isOpen"]);
    dispatch_dev("SvelteRegisterComponent", {
      component: _assertThisInitialized(_this),
      tagName: "Snackbar",
      options: options,
      id: create_fragment.name
    });
    var ctx = _this.$$.ctx;
    var props = options.props || {};

    if (ctx.open === undefined && !('open' in props)) {
      console.warn("<Snackbar> was created without expected prop 'open'");
    }

    if (ctx.forceOpen === undefined && !('forceOpen' in props)) {
      console.warn("<Snackbar> was created without expected prop 'forceOpen'");
    }

    if (ctx.close === undefined && !('close' in props)) {
      console.warn("<Snackbar> was created without expected prop 'close'");
    }

    if (ctx.isOpen === undefined && !('isOpen' in props)) {
      console.warn("<Snackbar> was created without expected prop 'isOpen'");
    }

    return _this;
  }

  _createClass(Snackbar, [{
    key: "use",
    get: function get() {
      throw new Error("<Snackbar>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    },
    set: function set(value) {
      throw new Error("<Snackbar>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    }
  }, {
    key: "class",
    get: function get() {
      throw new Error("<Snackbar>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    },
    set: function set(value) {
      throw new Error("<Snackbar>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    }
  }, {
    key: "variant",
    get: function get() {
      throw new Error("<Snackbar>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    },
    set: function set(value) {
      throw new Error("<Snackbar>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    }
  }, {
    key: "leading",
    get: function get() {
      throw new Error("<Snackbar>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    },
    set: function set(value) {
      throw new Error("<Snackbar>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    }
  }, {
    key: "timeoutMs",
    get: function get() {
      throw new Error("<Snackbar>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    },
    set: function set(value) {
      throw new Error("<Snackbar>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    }
  }, {
    key: "closeOnEscape",
    get: function get() {
      throw new Error("<Snackbar>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    },
    set: function set(value) {
      throw new Error("<Snackbar>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    }
  }, {
    key: "labelText",
    get: function get() {
      throw new Error("<Snackbar>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    },
    set: function set(value) {
      throw new Error("<Snackbar>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    }
  }, {
    key: "actionButtonText",
    get: function get() {
      throw new Error("<Snackbar>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    },
    set: function set(value) {
      throw new Error("<Snackbar>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    }
  }, {
    key: "surface$class",
    get: function get() {
      throw new Error("<Snackbar>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    },
    set: function set(value) {
      throw new Error("<Snackbar>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    }
  }, {
    key: "surface$use",
    get: function get() {
      throw new Error("<Snackbar>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    },
    set: function set(value) {
      throw new Error("<Snackbar>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    }
  }, {
    key: "open",
    get: function get() {
      return this.$$.ctx.open;
    },
    set: function set(value) {
      throw new Error("<Snackbar>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    }
  }, {
    key: "forceOpen",
    get: function get() {
      return this.$$.ctx.forceOpen;
    },
    set: function set(value) {
      throw new Error("<Snackbar>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    }
  }, {
    key: "close",
    get: function get() {
      return this.$$.ctx.close;
    },
    set: function set(value) {
      throw new Error("<Snackbar>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    }
  }, {
    key: "isOpen",
    get: function get() {
      return this.$$.ctx.isOpen;
    },
    set: function set(value) {
      throw new Error("<Snackbar>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    }
  }]);

  return Snackbar;
}(SvelteComponentDev);

var Actions = classAdderBuilder({
  class: 'mdc-snackbar__actions',
  component: Div,
  contexts: {}
});

var css$1 = ".mdc-snackbar{z-index:8;margin:8px;display:none;position:fixed;right:0;bottom:0;left:0;align-items:center;justify-content:center;box-sizing:border-box;pointer-events:none;-webkit-tap-highlight-color:rgba(0,0,0,0)}.mdc-snackbar__surface{background-color:#333}.mdc-snackbar__label{color:hsla(0,0%,100%,.87)}.mdc-snackbar__surface{min-width:344px}@media (max-width:344px),(max-width:480px){.mdc-snackbar__surface{min-width:100%}}.mdc-snackbar__surface{max-width:672px;box-shadow:0 3px 5px -1px rgba(0,0,0,.2),0 6px 10px 0 rgba(0,0,0,.14),0 1px 18px 0 rgba(0,0,0,.12);border-radius:4px}.mdc-snackbar--closing,.mdc-snackbar--open,.mdc-snackbar--opening{display:flex}.mdc-snackbar--leading{justify-content:flex-start}.mdc-snackbar--stacked .mdc-snackbar__surface{flex-direction:column;align-items:flex-start}.mdc-snackbar--stacked .mdc-snackbar__actions{align-self:flex-end;margin-bottom:8px}.mdc-snackbar__surface{display:flex;align-items:center;justify-content:flex-start;box-sizing:border-box;transform:scale(.8);opacity:0}.mdc-snackbar--open .mdc-snackbar__surface{transform:scale(1);opacity:1;pointer-events:auto;transition:opacity .15s cubic-bezier(0,0,.2,1) 0ms,transform .15s cubic-bezier(0,0,.2,1) 0ms}.mdc-snackbar--closing .mdc-snackbar__surface{transform:scale(1);transition:opacity 75ms cubic-bezier(.4,0,1,1) 0ms}.mdc-snackbar__label{font-family:Roboto,sans-serif;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-size:.875rem;line-height:1.25rem;font-weight:400;letter-spacing:.01786em;text-decoration:inherit;text-transform:inherit;flex-grow:1;box-sizing:border-box;margin:0;padding:14px 16px}.mdc-snackbar__label:before{display:inline;content:attr(data-mdc-snackbar-label-text)}.mdc-snackbar__actions{margin-left:0;margin-right:8px;display:flex;flex-shrink:0;align-items:center;box-sizing:border-box}.mdc-snackbar__actions[dir=rtl],[dir=rtl] .mdc-snackbar__actions{margin-left:8px;margin-right:0}.mdc-snackbar__action:not(:disabled){color:#bb86fc}.mdc-snackbar__action:after,.mdc-snackbar__action:before{background-color:#bb86fc}.mdc-snackbar__action:hover:before{opacity:.08}.mdc-snackbar__action.mdc-ripple-upgraded--background-focused:before,.mdc-snackbar__action:not(.mdc-ripple-upgraded):focus:before{transition-duration:75ms;opacity:.24}.mdc-snackbar__action:not(.mdc-ripple-upgraded):after{transition:opacity .15s linear}.mdc-snackbar__action:not(.mdc-ripple-upgraded):active:after{transition-duration:75ms;opacity:.24}.mdc-snackbar__action.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:0.24}.mdc-snackbar__dismiss{color:hsla(0,0%,100%,.87)}.mdc-snackbar__dismiss:after,.mdc-snackbar__dismiss:before{background-color:hsla(0,0%,100%,.87)}.mdc-snackbar__dismiss:hover:before{opacity:.08}.mdc-snackbar__dismiss.mdc-ripple-upgraded--background-focused:before,.mdc-snackbar__dismiss:not(.mdc-ripple-upgraded):focus:before{transition-duration:75ms;opacity:.24}.mdc-snackbar__dismiss:not(.mdc-ripple-upgraded):after{transition:opacity .15s linear}.mdc-snackbar__dismiss:not(.mdc-ripple-upgraded):active:after{transition-duration:75ms;opacity:.24}.mdc-snackbar__dismiss.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:0.24}.mdc-snackbar__dismiss.mdc-snackbar__dismiss{width:36px;height:36px;padding:9px;font-size:18px}.mdc-snackbar__dismiss.mdc-snackbar__dismiss img,.mdc-snackbar__dismiss.mdc-snackbar__dismiss svg{width:18px;height:18px}.mdc-snackbar__action+.mdc-snackbar__dismiss{margin-left:8px;margin-right:0}.mdc-snackbar__action+.mdc-snackbar__dismiss[dir=rtl],[dir=rtl] .mdc-snackbar__action+.mdc-snackbar__dismiss{margin-left:0;margin-right:8px}.mdc-snackbar__dismiss.mdc-snackbar__dismiss{color:hsla(0,0%,100%,.87)}.mdc-snackbar__dismiss.mdc-snackbar__dismiss:after,.mdc-snackbar__dismiss.mdc-snackbar__dismiss:before{background-color:hsla(0,0%,100%,.87)}.mdc-snackbar__dismiss.mdc-snackbar__dismiss:hover:before{opacity:.08}.mdc-snackbar__dismiss.mdc-snackbar__dismiss.mdc-ripple-upgraded--background-focused:before,.mdc-snackbar__dismiss.mdc-snackbar__dismiss:not(.mdc-ripple-upgraded):focus:before{transition-duration:75ms;opacity:.24}.mdc-snackbar__dismiss.mdc-snackbar__dismiss:not(.mdc-ripple-upgraded):after{transition:opacity .15s linear}.mdc-snackbar__dismiss.mdc-snackbar__dismiss:not(.mdc-ripple-upgraded):active:after{transition-duration:75ms;opacity:.24}.mdc-snackbar__dismiss.mdc-snackbar__dismiss.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:0.24}.mdc-button{font-family:Roboto,sans-serif;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-size:.875rem;line-height:2.25rem;font-weight:500;letter-spacing:.08929em;text-decoration:none;text-transform:uppercase;padding:0 8px;display:inline-flex;position:relative;align-items:center;justify-content:center;box-sizing:border-box;min-width:64px;height:36px;border:none;outline:none;line-height:inherit;user-select:none;-webkit-appearance:none;overflow:hidden;vertical-align:middle;border-radius:4px}.mdc-button::-moz-focus-inner{padding:0;border:0}.mdc-button:active{outline:none}.mdc-button:hover{cursor:pointer}.mdc-button:disabled{background-color:transparent;color:rgba(0,0,0,.37);cursor:default;pointer-events:none}.mdc-button.mdc-button--dense{border-radius:4px}.mdc-button:not(:disabled){background-color:transparent}.mdc-button .mdc-button__icon{margin-left:0;margin-right:8px;display:inline-block;width:18px;height:18px;font-size:18px;vertical-align:top}.mdc-button .mdc-button__icon[dir=rtl],[dir=rtl] .mdc-button .mdc-button__icon{margin-left:8px;margin-right:0}.mdc-button:not(:disabled){color:#ff3e00;color:var(--mdc-theme-primary,#ff3e00)}.mdc-button__label+.mdc-button__icon{margin-left:8px;margin-right:0}.mdc-button__label+.mdc-button__icon[dir=rtl],[dir=rtl] .mdc-button__label+.mdc-button__icon{margin-left:0;margin-right:8px}svg.mdc-button__icon{fill:currentColor}.mdc-button--outlined .mdc-button__icon,.mdc-button--raised .mdc-button__icon,.mdc-button--unelevated .mdc-button__icon{margin-left:-4px;margin-right:8px}.mdc-button--outlined .mdc-button__icon[dir=rtl],.mdc-button--outlined .mdc-button__label+.mdc-button__icon,.mdc-button--raised .mdc-button__icon[dir=rtl],.mdc-button--raised .mdc-button__label+.mdc-button__icon,.mdc-button--unelevated .mdc-button__icon[dir=rtl],.mdc-button--unelevated .mdc-button__label+.mdc-button__icon,[dir=rtl] .mdc-button--outlined .mdc-button__icon,[dir=rtl] .mdc-button--raised .mdc-button__icon,[dir=rtl] .mdc-button--unelevated .mdc-button__icon{margin-left:8px;margin-right:-4px}.mdc-button--outlined .mdc-button__label+.mdc-button__icon[dir=rtl],.mdc-button--raised .mdc-button__label+.mdc-button__icon[dir=rtl],.mdc-button--unelevated .mdc-button__label+.mdc-button__icon[dir=rtl],[dir=rtl] .mdc-button--outlined .mdc-button__label+.mdc-button__icon,[dir=rtl] .mdc-button--raised .mdc-button__label+.mdc-button__icon,[dir=rtl] .mdc-button--unelevated .mdc-button__label+.mdc-button__icon{margin-left:-4px;margin-right:8px}.mdc-button--raised,.mdc-button--unelevated{padding:0 16px}.mdc-button--raised:disabled,.mdc-button--unelevated:disabled{background-color:rgba(0,0,0,.12);color:rgba(0,0,0,.37)}.mdc-button--raised:not(:disabled),.mdc-button--unelevated:not(:disabled){background-color:#ff3e00}@supports not (-ms-ime-align:auto){.mdc-button--raised:not(:disabled),.mdc-button--unelevated:not(:disabled){background-color:var(--mdc-theme-primary,#ff3e00)}}.mdc-button--raised:not(:disabled),.mdc-button--unelevated:not(:disabled){color:#fff;color:var(--mdc-theme-on-primary,#fff)}.mdc-button--raised{box-shadow:0 3px 1px -2px rgba(0,0,0,.2),0 2px 2px 0 rgba(0,0,0,.14),0 1px 5px 0 rgba(0,0,0,.12);transition:box-shadow .28s cubic-bezier(.4,0,.2,1)}.mdc-button--raised:focus,.mdc-button--raised:hover{box-shadow:0 2px 4px -1px rgba(0,0,0,.2),0 4px 5px 0 rgba(0,0,0,.14),0 1px 10px 0 rgba(0,0,0,.12)}.mdc-button--raised:active{box-shadow:0 5px 5px -3px rgba(0,0,0,.2),0 8px 10px 1px rgba(0,0,0,.14),0 3px 14px 2px rgba(0,0,0,.12)}.mdc-button--raised:disabled{box-shadow:0 0 0 0 rgba(0,0,0,.2),0 0 0 0 rgba(0,0,0,.14),0 0 0 0 rgba(0,0,0,.12)}.mdc-button--outlined{border-style:solid;padding:0 15px;border-width:1px}.mdc-button--outlined:disabled{border-color:rgba(0,0,0,.37)}.mdc-button--outlined:not(:disabled){border-color:#ff3e00;border-color:var(--mdc-theme-primary,#ff3e00)}.mdc-button--dense{height:32px;font-size:.8125rem}@keyframes mdc-ripple-fg-radius-in{0%{animation-timing-function:cubic-bezier(.4,0,.2,1);transform:translate(var(--mdc-ripple-fg-translate-start,0)) scale(1)}to{transform:translate(var(--mdc-ripple-fg-translate-end,0)) scale(var(--mdc-ripple-fg-scale,1))}}@keyframes mdc-ripple-fg-opacity-in{0%{animation-timing-function:linear;opacity:0}to{opacity:var(--mdc-ripple-fg-opacity,0)}}@keyframes mdc-ripple-fg-opacity-out{0%{animation-timing-function:linear;opacity:var(--mdc-ripple-fg-opacity,0)}to{opacity:0}}.mdc-ripple-surface--test-edge-var-bug{--mdc-ripple-surface-test-edge-var:1px solid #000;visibility:hidden}.mdc-ripple-surface--test-edge-var-bug:before{border:var(--mdc-ripple-surface-test-edge-var)}.mdc-button{--mdc-ripple-fg-size:0;--mdc-ripple-left:0;--mdc-ripple-top:0;--mdc-ripple-fg-scale:1;--mdc-ripple-fg-translate-end:0;--mdc-ripple-fg-translate-start:0;-webkit-tap-highlight-color:rgba(0,0,0,0)}.mdc-button:after,.mdc-button:before{position:absolute;border-radius:50%;opacity:0;pointer-events:none;content:\"\"}.mdc-button:before{transition:opacity 15ms linear,background-color 15ms linear;z-index:1}.mdc-button.mdc-ripple-upgraded:before{transform:scale(var(--mdc-ripple-fg-scale,1))}.mdc-button.mdc-ripple-upgraded:after{top:0;left:0;transform:scale(0);transform-origin:center center}.mdc-button.mdc-ripple-upgraded--unbounded:after{top:var(--mdc-ripple-top,0);left:var(--mdc-ripple-left,0)}.mdc-button.mdc-ripple-upgraded--foreground-activation:after{animation:mdc-ripple-fg-radius-in 225ms forwards,mdc-ripple-fg-opacity-in 75ms forwards}.mdc-button.mdc-ripple-upgraded--foreground-deactivation:after{animation:mdc-ripple-fg-opacity-out .15s;transform:translate(var(--mdc-ripple-fg-translate-end,0)) scale(var(--mdc-ripple-fg-scale,1))}.mdc-button:after,.mdc-button:before{top:-50%;left:-50%;width:200%;height:200%}.mdc-button.mdc-ripple-upgraded:after{width:var(--mdc-ripple-fg-size,100%);height:var(--mdc-ripple-fg-size,100%)}.mdc-button:after,.mdc-button:before{background-color:#ff3e00}@supports not (-ms-ime-align:auto){.mdc-button:after,.mdc-button:before{background-color:var(--mdc-theme-primary,#ff3e00)}}.mdc-button:hover:before{opacity:.04}.mdc-button.mdc-ripple-upgraded--background-focused:before,.mdc-button:not(.mdc-ripple-upgraded):focus:before{transition-duration:75ms;opacity:.12}.mdc-button:not(.mdc-ripple-upgraded):after{transition:opacity .15s linear}.mdc-button:not(.mdc-ripple-upgraded):active:after{transition-duration:75ms;opacity:.12}.mdc-button.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:0.12}.mdc-button--raised:after,.mdc-button--raised:before,.mdc-button--unelevated:after,.mdc-button--unelevated:before{background-color:#fff}@supports not (-ms-ime-align:auto){.mdc-button--raised:after,.mdc-button--raised:before,.mdc-button--unelevated:after,.mdc-button--unelevated:before{background-color:var(--mdc-theme-on-primary,#fff)}}.mdc-button--raised:hover:before,.mdc-button--unelevated:hover:before{opacity:.08}.mdc-button--raised.mdc-ripple-upgraded--background-focused:before,.mdc-button--raised:not(.mdc-ripple-upgraded):focus:before,.mdc-button--unelevated.mdc-ripple-upgraded--background-focused:before,.mdc-button--unelevated:not(.mdc-ripple-upgraded):focus:before{transition-duration:75ms;opacity:.24}.mdc-button--raised:not(.mdc-ripple-upgraded):after,.mdc-button--unelevated:not(.mdc-ripple-upgraded):after{transition:opacity .15s linear}.mdc-button--raised:not(.mdc-ripple-upgraded):active:after,.mdc-button--unelevated:not(.mdc-ripple-upgraded):active:after{transition-duration:75ms;opacity:.24}.mdc-button--raised.mdc-ripple-upgraded,.mdc-button--unelevated.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:0.24}.smui-button--color-secondary:not(:disabled){color:#676778;color:var(--mdc-theme-secondary,#676778)}.smui-button--color-secondary.mdc-button--raised:not(:disabled),.smui-button--color-secondary.mdc-button--unelevated:not(:disabled){background-color:#676778}@supports not (-ms-ime-align:auto){.smui-button--color-secondary.mdc-button--raised:not(:disabled),.smui-button--color-secondary.mdc-button--unelevated:not(:disabled){background-color:var(--mdc-theme-secondary,#676778)}}.smui-button--color-secondary.mdc-button--raised:not(:disabled),.smui-button--color-secondary.mdc-button--unelevated:not(:disabled){color:#fff;color:var(--mdc-theme-on-secondary,#fff)}.smui-button--color-secondary.mdc-button--outlined:not(:disabled){border-color:#676778;border-color:var(--mdc-theme-secondary,#676778)}.smui-button--color-secondary:after,.smui-button--color-secondary:before{background-color:#676778}@supports not (-ms-ime-align:auto){.smui-button--color-secondary:after,.smui-button--color-secondary:before{background-color:var(--mdc-theme-secondary,#676778)}}.smui-button--color-secondary:hover:before{opacity:.04}.smui-button--color-secondary.mdc-ripple-upgraded--background-focused:before,.smui-button--color-secondary:not(.mdc-ripple-upgraded):focus:before{transition-duration:75ms;opacity:.12}.smui-button--color-secondary:not(.mdc-ripple-upgraded):after{transition:opacity .15s linear}.smui-button--color-secondary:not(.mdc-ripple-upgraded):active:after{transition-duration:75ms;opacity:.12}.smui-button--color-secondary.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:0.12}.smui-button--color-secondary.mdc-button--raised:after,.smui-button--color-secondary.mdc-button--raised:before,.smui-button--color-secondary.mdc-button--unelevated:after,.smui-button--color-secondary.mdc-button--unelevated:before{background-color:#fff}@supports not (-ms-ime-align:auto){.smui-button--color-secondary.mdc-button--raised:after,.smui-button--color-secondary.mdc-button--raised:before,.smui-button--color-secondary.mdc-button--unelevated:after,.smui-button--color-secondary.mdc-button--unelevated:before{background-color:var(--mdc-theme-on-secondary,#fff)}}.smui-button--color-secondary.mdc-button--raised:hover:before,.smui-button--color-secondary.mdc-button--unelevated:hover:before{opacity:.08}.smui-button--color-secondary.mdc-button--raised.mdc-ripple-upgraded--background-focused:before,.smui-button--color-secondary.mdc-button--raised:not(.mdc-ripple-upgraded):focus:before,.smui-button--color-secondary.mdc-button--unelevated.mdc-ripple-upgraded--background-focused:before,.smui-button--color-secondary.mdc-button--unelevated:not(.mdc-ripple-upgraded):focus:before{transition-duration:75ms;opacity:.24}.smui-button--color-secondary.mdc-button--raised:not(.mdc-ripple-upgraded):after,.smui-button--color-secondary.mdc-button--unelevated:not(.mdc-ripple-upgraded):after{transition:opacity .15s linear}.smui-button--color-secondary.mdc-button--raised:not(.mdc-ripple-upgraded):active:after,.smui-button--color-secondary.mdc-button--unelevated:not(.mdc-ripple-upgraded):active:after{transition-duration:75ms;opacity:.24}.smui-button--color-secondary.mdc-button--raised.mdc-ripple-upgraded,.smui-button--color-secondary.mdc-button--unelevated.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:0.24}.smui-button__group{display:inline-flex}.smui-button__group>.mdc-button:not(:last-child),.smui-button__group>.smui-button__group-item:not(:last-child)>.mdc-button{border-top-right-radius:0;border-bottom-right-radius:0}.smui-button__group>.mdc-button:not(:first-child),.smui-button__group>.smui-button__group-item:not(:first-child)>.mdc-button{border-top-left-radius:0;border-bottom-left-radius:0}.smui-button__group.smui-button__group--raised{box-shadow:0 3px 1px -2px rgba(0,0,0,.2),0 2px 2px 0 rgba(0,0,0,.14),0 1px 5px 0 rgba(0,0,0,.12)}.smui-button__group>.mdc-button--raised,.smui-button__group>.mdc-button--raised:active,.smui-button__group>.mdc-button--raised:disabled,.smui-button__group>.mdc-button--raised:focus,.smui-button__group>.mdc-button--raised:hover,.smui-button__group>.smui-button__group-item>.mdc-button--raised,.smui-button__group>.smui-button__group-item>.mdc-button--raised:active,.smui-button__group>.smui-button__group-item>.mdc-button--raised:disabled,.smui-button__group>.smui-button__group-item>.mdc-button--raised:focus,.smui-button__group>.smui-button__group-item>.mdc-button--raised:hover{box-shadow:0 0 0 0 rgba(0,0,0,.2),0 0 0 0 rgba(0,0,0,.14),0 0 0 0 rgba(0,0,0,.12)}.smui-button__group>.mdc-button--outlined:not(:last-child),.smui-button__group>.smui-button__group-item:not(:last-child)>.mdc-button--outlined{border-right-width:0}.mdc-icon-button{width:48px;height:48px;padding:12px;font-size:24px;display:inline-block;position:relative;box-sizing:border-box;border:none;outline:none;background-color:transparent;fill:currentColor;color:inherit;text-decoration:none;cursor:pointer;user-select:none}.mdc-icon-button img,.mdc-icon-button svg{width:24px;height:24px}.mdc-icon-button:disabled{color:rgba(0,0,0,.38);color:var(--mdc-theme-text-disabled-on-light,rgba(0,0,0,.38));cursor:default;pointer-events:none}.mdc-icon-button__icon{display:inline-block}.mdc-icon-button--on .mdc-icon-button__icon,.mdc-icon-button__icon.mdc-icon-button__icon--on{display:none}.mdc-icon-button--on .mdc-icon-button__icon.mdc-icon-button__icon--on{display:inline-block}.mdc-icon-button{--mdc-ripple-fg-size:0;--mdc-ripple-left:0;--mdc-ripple-top:0;--mdc-ripple-fg-scale:1;--mdc-ripple-fg-translate-end:0;--mdc-ripple-fg-translate-start:0;-webkit-tap-highlight-color:rgba(0,0,0,0)}.mdc-icon-button:after,.mdc-icon-button:before{position:absolute;border-radius:50%;opacity:0;pointer-events:none;content:\"\"}.mdc-icon-button:before{transition:opacity 15ms linear,background-color 15ms linear;z-index:1}.mdc-icon-button.mdc-ripple-upgraded:before{transform:scale(var(--mdc-ripple-fg-scale,1))}.mdc-icon-button.mdc-ripple-upgraded:after{top:0;left:0;transform:scale(0);transform-origin:center center}.mdc-icon-button.mdc-ripple-upgraded--unbounded:after{top:var(--mdc-ripple-top,0);left:var(--mdc-ripple-left,0)}.mdc-icon-button.mdc-ripple-upgraded--foreground-activation:after{animation:mdc-ripple-fg-radius-in 225ms forwards,mdc-ripple-fg-opacity-in 75ms forwards}.mdc-icon-button.mdc-ripple-upgraded--foreground-deactivation:after{animation:mdc-ripple-fg-opacity-out .15s;transform:translate(var(--mdc-ripple-fg-translate-end,0)) scale(var(--mdc-ripple-fg-scale,1))}.mdc-icon-button:after,.mdc-icon-button:before{top:0;left:0;width:100%;height:100%}.mdc-icon-button.mdc-ripple-upgraded:after,.mdc-icon-button.mdc-ripple-upgraded:before{top:var(--mdc-ripple-top,0);left:var(--mdc-ripple-left,0);width:var(--mdc-ripple-fg-size,100%);height:var(--mdc-ripple-fg-size,100%)}.mdc-icon-button.mdc-ripple-upgraded:after{width:var(--mdc-ripple-fg-size,100%);height:var(--mdc-ripple-fg-size,100%)}.mdc-icon-button:after,.mdc-icon-button:before{background-color:#000}.mdc-icon-button:hover:before{opacity:.04}.mdc-icon-button.mdc-ripple-upgraded--background-focused:before,.mdc-icon-button:not(.mdc-ripple-upgraded):focus:before{transition-duration:75ms;opacity:.12}.mdc-icon-button:not(.mdc-ripple-upgraded):after{transition:opacity .15s linear}.mdc-icon-button:not(.mdc-ripple-upgraded):active:after{transition-duration:75ms;opacity:.12}.mdc-icon-button.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:0.12}.mdc-ripple-surface{--mdc-ripple-fg-size:0;--mdc-ripple-left:0;--mdc-ripple-top:0;--mdc-ripple-fg-scale:1;--mdc-ripple-fg-translate-end:0;--mdc-ripple-fg-translate-start:0;-webkit-tap-highlight-color:rgba(0,0,0,0);position:relative;outline:none;overflow:hidden}.mdc-ripple-surface:after,.mdc-ripple-surface:before{position:absolute;border-radius:50%;opacity:0;pointer-events:none;content:\"\"}.mdc-ripple-surface:before{transition:opacity 15ms linear,background-color 15ms linear;z-index:1}.mdc-ripple-surface.mdc-ripple-upgraded:before{transform:scale(var(--mdc-ripple-fg-scale,1))}.mdc-ripple-surface.mdc-ripple-upgraded:after{top:0;left:0;transform:scale(0);transform-origin:center center}.mdc-ripple-surface.mdc-ripple-upgraded--unbounded:after{top:var(--mdc-ripple-top,0);left:var(--mdc-ripple-left,0)}.mdc-ripple-surface.mdc-ripple-upgraded--foreground-activation:after{animation:mdc-ripple-fg-radius-in 225ms forwards,mdc-ripple-fg-opacity-in 75ms forwards}.mdc-ripple-surface.mdc-ripple-upgraded--foreground-deactivation:after{animation:mdc-ripple-fg-opacity-out .15s;transform:translate(var(--mdc-ripple-fg-translate-end,0)) scale(var(--mdc-ripple-fg-scale,1))}.mdc-ripple-surface:after,.mdc-ripple-surface:before{background-color:#000}.mdc-ripple-surface:hover:before{opacity:.04}.mdc-ripple-surface.mdc-ripple-upgraded--background-focused:before,.mdc-ripple-surface:not(.mdc-ripple-upgraded):focus:before{transition-duration:75ms;opacity:.12}.mdc-ripple-surface:not(.mdc-ripple-upgraded):after{transition:opacity .15s linear}.mdc-ripple-surface:not(.mdc-ripple-upgraded):active:after{transition-duration:75ms;opacity:.12}.mdc-ripple-surface.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:0.12}.mdc-ripple-surface:after,.mdc-ripple-surface:before{top:-50%;left:-50%;width:200%;height:200%}.mdc-ripple-surface.mdc-ripple-upgraded:after{width:var(--mdc-ripple-fg-size,100%);height:var(--mdc-ripple-fg-size,100%)}.mdc-ripple-surface[data-mdc-ripple-is-unbounded]{overflow:visible}.mdc-ripple-surface[data-mdc-ripple-is-unbounded]:after,.mdc-ripple-surface[data-mdc-ripple-is-unbounded]:before{top:0;left:0;width:100%;height:100%}.mdc-ripple-surface[data-mdc-ripple-is-unbounded].mdc-ripple-upgraded:after,.mdc-ripple-surface[data-mdc-ripple-is-unbounded].mdc-ripple-upgraded:before{top:var(--mdc-ripple-top,0);left:var(--mdc-ripple-left,0);width:var(--mdc-ripple-fg-size,100%);height:var(--mdc-ripple-fg-size,100%)}.mdc-ripple-surface[data-mdc-ripple-is-unbounded].mdc-ripple-upgraded:after{width:var(--mdc-ripple-fg-size,100%);height:var(--mdc-ripple-fg-size,100%)}.mdc-ripple-surface--primary:after,.mdc-ripple-surface--primary:before{background-color:#ff3e00}@supports not (-ms-ime-align:auto){.mdc-ripple-surface--primary:after,.mdc-ripple-surface--primary:before{background-color:var(--mdc-theme-primary,#ff3e00)}}.mdc-ripple-surface--primary:hover:before{opacity:.04}.mdc-ripple-surface--primary.mdc-ripple-upgraded--background-focused:before,.mdc-ripple-surface--primary:not(.mdc-ripple-upgraded):focus:before{transition-duration:75ms;opacity:.12}.mdc-ripple-surface--primary:not(.mdc-ripple-upgraded):after{transition:opacity .15s linear}.mdc-ripple-surface--primary:not(.mdc-ripple-upgraded):active:after{transition-duration:75ms;opacity:.12}.mdc-ripple-surface--primary.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:0.12}.mdc-ripple-surface--accent:after,.mdc-ripple-surface--accent:before{background-color:#676778}@supports not (-ms-ime-align:auto){.mdc-ripple-surface--accent:after,.mdc-ripple-surface--accent:before{background-color:var(--mdc-theme-secondary,#676778)}}.mdc-ripple-surface--accent:hover:before{opacity:.04}.mdc-ripple-surface--accent.mdc-ripple-upgraded--background-focused:before,.mdc-ripple-surface--accent:not(.mdc-ripple-upgraded):focus:before{transition-duration:75ms;opacity:.12}.mdc-ripple-surface--accent:not(.mdc-ripple-upgraded):after{transition:opacity .15s linear}.mdc-ripple-surface--accent:not(.mdc-ripple-upgraded):active:after{transition-duration:75ms;opacity:.12}.mdc-ripple-surface--accent.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:0.12}";
styleInject(css$1);

function get_each_context(ctx, list, i) {
  var child_ctx = Object.create(ctx);
  child_ctx.action = list[i];
  return child_ctx;
} // (1:0) {#if config}


function create_if_block(ctx) {
  var current;
  var snackbar_spread_levels = [{
    labelText: ctx.config.label
  }, ctx.config && ctx.config.props || {}, prefixFilter(ctx.$$props, 'snackbar$')];
  var snackbar_props = {
    $$slots: {
      default: [create_default_slot]
    },
    $$scope: {
      ctx: ctx
    }
  };

  for (var i = 0; i < snackbar_spread_levels.length; i += 1) {
    snackbar_props = assign(snackbar_props, snackbar_spread_levels[i]);
  }

  var snackbar = new Snackbar({
    props: snackbar_props,
    $$inline: true
  });
  ctx.snackbar_binding(snackbar);
  snackbar.$on("MDCSnackbar:closed", ctx.handleClosed);
  var block = {
    c: function create() {
      snackbar.$$.fragment.c();
    },
    l: function claim(nodes) {
      snackbar.$$.fragment.l(nodes);
    },
    m: function mount(target, anchor) {
      mount_component(snackbar, target, anchor);
      current = true;
    },
    p: function update(changed, ctx) {
      var snackbar_changes = changed.config || changed.prefixFilter || changed.$$props ? get_spread_update(snackbar_spread_levels, [changed.config && {
        labelText: ctx.config.label
      }, changed.config && get_spread_object(ctx.config && ctx.config.props || {}), (changed.prefixFilter || changed.$$props) && get_spread_object(prefixFilter(ctx.$$props, 'snackbar$'))]) : {};
      if (changed.$$scope || changed.config) snackbar_changes.$$scope = {
        changed: changed,
        ctx: ctx
      };
      snackbar.$set(snackbar_changes);
    },
    i: function intro(local) {
      if (current) return;
      transition_in(snackbar.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(snackbar.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      ctx.snackbar_binding(null);
      destroy_component(snackbar, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_if_block.name,
    type: "if",
    source: "(1:0) {#if config}",
    ctx: ctx
  });
  return block;
} // (12:4) {#if config.actions || config.dismissButton}


function create_if_block_1(ctx) {
  var current;
  var actions = new Actions({
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
  var block = {
    c: function create() {
      actions.$$.fragment.c();
    },
    l: function claim(nodes) {
      actions.$$.fragment.l(nodes);
    },
    m: function mount(target, anchor) {
      mount_component(actions, target, anchor);
      current = true;
    },
    p: function update(changed, ctx) {
      var actions_changes = {};
      if (changed.$$scope || changed.config) actions_changes.$$scope = {
        changed: changed,
        ctx: ctx
      };
      actions.$set(actions_changes);
    },
    i: function intro(local) {
      if (current) return;
      transition_in(actions.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(actions.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      destroy_component(actions, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_if_block_1.name,
    type: "if",
    source: "(12:4) {#if config.actions || config.dismissButton}",
    ctx: ctx
  });
  return block;
} // (14:8) {#if config.actions}


function create_if_block_3(ctx) {
  var each_1_anchor, current;
  var each_value = ctx.config.actions;
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
      for (var _i = 0; _i < each_blocks.length; _i += 1) {
        each_blocks[_i].c();
      }

      each_1_anchor = empty();
    },
    l: function claim(nodes) {
      for (var _i2 = 0; _i2 < each_blocks.length; _i2 += 1) {
        each_blocks[_i2].l(nodes);
      }

      each_1_anchor = empty();
    },
    m: function mount(target, anchor) {
      for (var _i3 = 0; _i3 < each_blocks.length; _i3 += 1) {
        each_blocks[_i3].m(target, anchor);
      }

      insert_dev(target, each_1_anchor, anchor);
      current = true;
    },
    p: function update(changed, ctx) {
      if (changed.prefixFilter || changed.$$props || changed.config) {
        each_value = ctx.config.actions;

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

            each_blocks[_i4].m(each_1_anchor.parentNode, each_1_anchor);
          }
        }

        group_outros();

        for (_i4 = each_value.length; _i4 < each_blocks.length; _i4 += 1) {
          out(_i4);
        }

        check_outros();
      }
    },
    i: function intro(local) {
      if (current) return;

      for (var _i5 = 0; _i5 < each_value.length; _i5 += 1) {
        transition_in(each_blocks[_i5]);
      }

      current = true;
    },
    o: function outro(local) {
      each_blocks = each_blocks.filter(Boolean);

      for (var _i6 = 0; _i6 < each_blocks.length; _i6 += 1) {
        transition_out(each_blocks[_i6]);
      }

      current = false;
    },
    d: function destroy(detaching) {
      destroy_each(each_blocks, detaching);

      if (detaching) {
        detach_dev(each_1_anchor);
      }
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_if_block_3.name,
    type: "if",
    source: "(14:8) {#if config.actions}",
    ctx: ctx
  });
  return block;
} // (16:12) <Button               on:click={e => action.onClick && action.onClick(e)}               {...prefixFilter($$props, 'action$')}             >


function create_default_slot_3(ctx) {
  var t_value = ctx.action.text + "",
      t;
  var block = {
    c: function create() {
      t = text(t_value);
    },
    l: function claim(nodes) {
      t = claim_text(nodes, t_value);
    },
    m: function mount(target, anchor) {
      insert_dev(target, t, anchor);
    },
    p: function update(changed, ctx) {
      if (changed.config && t_value !== (t_value = ctx.action.text + "")) {
        set_data_dev(t, t_value);
      }
    },
    d: function destroy(detaching) {
      if (detaching) {
        detach_dev(t);
      }
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_default_slot_3.name,
    type: "slot",
    source: "(16:12) <Button               on:click={e => action.onClick && action.onClick(e)}               {...prefixFilter($$props, 'action$')}             >",
    ctx: ctx
  });
  return block;
} // (15:10) {#each config.actions as action}


function create_each_block(ctx) {
  var current;
  var button_spread_levels = [prefixFilter(ctx.$$props, 'action$')];

  function click_handler() {
    var _ctx;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return (_ctx = ctx).click_handler.apply(_ctx, [ctx].concat(args));
  }

  var button_props = {
    $$slots: {
      default: [create_default_slot_3]
    },
    $$scope: {
      ctx: ctx
    }
  };

  for (var i = 0; i < button_spread_levels.length; i += 1) {
    button_props = assign(button_props, button_spread_levels[i]);
  }

  var button = new Button$1({
    props: button_props,
    $$inline: true
  });
  button.$on("click", click_handler);
  var block = {
    c: function create() {
      button.$$.fragment.c();
    },
    l: function claim(nodes) {
      button.$$.fragment.l(nodes);
    },
    m: function mount(target, anchor) {
      mount_component(button, target, anchor);
      current = true;
    },
    p: function update(changed, new_ctx) {
      ctx = new_ctx;
      var button_changes = changed.prefixFilter || changed.$$props ? get_spread_update(button_spread_levels, [get_spread_object(prefixFilter(ctx.$$props, 'action$'))]) : {};
      if (changed.$$scope || changed.config) button_changes.$$scope = {
        changed: changed,
        ctx: ctx
      };
      button.$set(button_changes);
    },
    i: function intro(local) {
      if (current) return;
      transition_in(button.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(button.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      destroy_component(button, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_each_block.name,
    type: "each",
    source: "(15:10) {#each config.actions as action}",
    ctx: ctx
  });
  return block;
} // (22:8) {#if config.dismissButton}


function create_if_block_2(ctx) {
  var current;
  var iconbutton_spread_levels = [{
    title: ctx.config.dismissTitle || 'Dismiss'
  }, prefixFilter(ctx.$$props, 'dismiss$')];
  var iconbutton_props = {
    $$slots: {
      default: [create_default_slot_2]
    },
    $$scope: {
      ctx: ctx
    }
  };

  for (var i = 0; i < iconbutton_spread_levels.length; i += 1) {
    iconbutton_props = assign(iconbutton_props, iconbutton_spread_levels[i]);
  }

  var iconbutton = new IconButton$1({
    props: iconbutton_props,
    $$inline: true
  });
  iconbutton.$on("click", ctx.click_handler_1);
  var block = {
    c: function create() {
      iconbutton.$$.fragment.c();
    },
    l: function claim(nodes) {
      iconbutton.$$.fragment.l(nodes);
    },
    m: function mount(target, anchor) {
      mount_component(iconbutton, target, anchor);
      current = true;
    },
    p: function update(changed, ctx) {
      var iconbutton_changes = changed.config || changed.prefixFilter || changed.$$props ? get_spread_update(iconbutton_spread_levels, [changed.config && {
        title: ctx.config.dismissTitle || 'Dismiss'
      }, (changed.prefixFilter || changed.$$props) && get_spread_object(prefixFilter(ctx.$$props, 'dismiss$'))]) : {};
      if (changed.$$scope || changed.config) iconbutton_changes.$$scope = {
        changed: changed,
        ctx: ctx
      };
      iconbutton.$set(iconbutton_changes);
    },
    i: function intro(local) {
      if (current) return;
      transition_in(iconbutton.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(iconbutton.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      destroy_component(iconbutton, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_if_block_2.name,
    type: "if",
    source: "(22:8) {#if config.dismissButton}",
    ctx: ctx
  });
  return block;
} // (23:10) <IconButton             on:click={e => config.onDismiss && config.onDismiss(e)}             title="{config.dismissTitle || 'Dismiss'}"             {...prefixFilter($$props, 'dismiss$')}           >


function create_default_slot_2(ctx) {
  var t_value = ctx.config.dismissText || 'close' + "",
      t;
  var block = {
    c: function create() {
      t = text(t_value);
    },
    l: function claim(nodes) {
      t = claim_text(nodes, t_value);
    },
    m: function mount(target, anchor) {
      insert_dev(target, t, anchor);
    },
    p: function update(changed, ctx) {
      if (changed.config && t_value !== (t_value = ctx.config.dismissText || 'close' + "")) {
        set_data_dev(t, t_value);
      }
    },
    d: function destroy(detaching) {
      if (detaching) {
        detach_dev(t);
      }
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_default_slot_2.name,
    type: "slot",
    source: "(23:10) <IconButton             on:click={e => config.onDismiss && config.onDismiss(e)}             title=\"{config.dismissTitle || 'Dismiss'}\"             {...prefixFilter($$props, 'dismiss$')}           >",
    ctx: ctx
  });
  return block;
} // (13:6) <Actions>


function create_default_slot_1(ctx) {
  var t, if_block1_anchor, current;
  var if_block0 = ctx.config.actions && create_if_block_3(ctx);
  var if_block1 = ctx.config.dismissButton && create_if_block_2(ctx);
  var block = {
    c: function create() {
      if (if_block0) if_block0.c();
      t = space();
      if (if_block1) if_block1.c();
      if_block1_anchor = empty();
    },
    l: function claim(nodes) {
      if (if_block0) if_block0.l(nodes);
      t = claim_space(nodes);
      if (if_block1) if_block1.l(nodes);
      if_block1_anchor = empty();
    },
    m: function mount(target, anchor) {
      if (if_block0) if_block0.m(target, anchor);
      insert_dev(target, t, anchor);
      if (if_block1) if_block1.m(target, anchor);
      insert_dev(target, if_block1_anchor, anchor);
      current = true;
    },
    p: function update(changed, ctx) {
      if (ctx.config.actions) {
        if (if_block0) {
          if_block0.p(changed, ctx);
          transition_in(if_block0, 1);
        } else {
          if_block0 = create_if_block_3(ctx);
          if_block0.c();
          transition_in(if_block0, 1);
          if_block0.m(t.parentNode, t);
        }
      } else if (if_block0) {
        group_outros();
        transition_out(if_block0, 1, 1, function () {
          if_block0 = null;
        });
        check_outros();
      }

      if (ctx.config.dismissButton) {
        if (if_block1) {
          if_block1.p(changed, ctx);
          transition_in(if_block1, 1);
        } else {
          if_block1 = create_if_block_2(ctx);
          if_block1.c();
          transition_in(if_block1, 1);
          if_block1.m(if_block1_anchor.parentNode, if_block1_anchor);
        }
      } else if (if_block1) {
        group_outros();
        transition_out(if_block1, 1, 1, function () {
          if_block1 = null;
        });
        check_outros();
      }
    },
    i: function intro(local) {
      if (current) return;
      transition_in(if_block0);
      transition_in(if_block1);
      current = true;
    },
    o: function outro(local) {
      transition_out(if_block0);
      transition_out(if_block1);
      current = false;
    },
    d: function destroy(detaching) {
      if (if_block0) if_block0.d(detaching);

      if (detaching) {
        detach_dev(t);
      }

      if (if_block1) if_block1.d(detaching);

      if (detaching) {
        detach_dev(if_block1_anchor);
      }
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_default_slot_1.name,
    type: "slot",
    source: "(13:6) <Actions>",
    ctx: ctx
  });
  return block;
} // (2:2) <Snackbar     bind:this={component}     on:MDCSnackbar:closed={handleClosed}     labelText={config.label}     {...(config && config.props || {})}     {...prefixFilter($$props, 'snackbar$')}   >


function create_default_slot(ctx) {
  var t, if_block_anchor, current;
  var label_spread_levels = [prefixFilter(ctx.$$props, 'label$')];
  var label_props = {};

  for (var i = 0; i < label_spread_levels.length; i += 1) {
    label_props = assign(label_props, label_spread_levels[i]);
  }

  var label = new Label({
    props: label_props,
    $$inline: true
  });
  var if_block = (ctx.config.actions || ctx.config.dismissButton) && create_if_block_1(ctx);
  var block = {
    c: function create() {
      label.$$.fragment.c();
      t = space();
      if (if_block) if_block.c();
      if_block_anchor = empty();
    },
    l: function claim(nodes) {
      label.$$.fragment.l(nodes);
      t = claim_space(nodes);
      if (if_block) if_block.l(nodes);
      if_block_anchor = empty();
    },
    m: function mount(target, anchor) {
      mount_component(label, target, anchor);
      insert_dev(target, t, anchor);
      if (if_block) if_block.m(target, anchor);
      insert_dev(target, if_block_anchor, anchor);
      current = true;
    },
    p: function update(changed, ctx) {
      var label_changes = changed.prefixFilter || changed.$$props ? get_spread_update(label_spread_levels, [get_spread_object(prefixFilter(ctx.$$props, 'label$'))]) : {};
      label.$set(label_changes);

      if (ctx.config.actions || ctx.config.dismissButton) {
        if (if_block) {
          if_block.p(changed, ctx);
          transition_in(if_block, 1);
        } else {
          if_block = create_if_block_1(ctx);
          if_block.c();
          transition_in(if_block, 1);
          if_block.m(if_block_anchor.parentNode, if_block_anchor);
        }
      } else if (if_block) {
        group_outros();
        transition_out(if_block, 1, 1, function () {
          if_block = null;
        });
        check_outros();
      }
    },
    i: function intro(local) {
      if (current) return;
      transition_in(label.$$.fragment, local);
      transition_in(if_block);
      current = true;
    },
    o: function outro(local) {
      transition_out(label.$$.fragment, local);
      transition_out(if_block);
      current = false;
    },
    d: function destroy(detaching) {
      destroy_component(label, detaching);

      if (detaching) {
        detach_dev(t);
      }

      if (if_block) if_block.d(detaching);

      if (detaching) {
        detach_dev(if_block_anchor);
      }
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_default_slot.name,
    type: "slot",
    source: "(2:2) <Snackbar     bind:this={component}     on:MDCSnackbar:closed={handleClosed}     labelText={config.label}     {...(config && config.props || {})}     {...prefixFilter($$props, 'snackbar$')}   >",
    ctx: ctx
  });
  return block;
}

function create_fragment$1(ctx) {
  var if_block_anchor, current;
  var if_block = ctx.config && create_if_block(ctx);
  var block = {
    c: function create() {
      if (if_block) if_block.c();
      if_block_anchor = empty();
    },
    l: function claim(nodes) {
      if (if_block) if_block.l(nodes);
      if_block_anchor = empty();
    },
    m: function mount(target, anchor) {
      if (if_block) if_block.m(target, anchor);
      insert_dev(target, if_block_anchor, anchor);
      current = true;
    },
    p: function update(changed, ctx) {
      if (ctx.config) {
        if (if_block) {
          if_block.p(changed, ctx);
          transition_in(if_block, 1);
        } else {
          if_block = create_if_block(ctx);
          if_block.c();
          transition_in(if_block, 1);
          if_block.m(if_block_anchor.parentNode, if_block_anchor);
        }
      } else if (if_block) {
        group_outros();
        transition_out(if_block, 1, 1, function () {
          if_block = null;
        });
        check_outros();
      }
    },
    i: function intro(local) {
      if (current) return;
      transition_in(if_block);
      current = true;
    },
    o: function outro(local) {
      transition_out(if_block);
      current = false;
    },
    d: function destroy(detaching) {
      if (if_block) if_block.d(detaching);

      if (detaching) {
        detach_dev(if_block_anchor);
      }
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
  var snackbars = [];
  var component;
  var config = null;
  var waiting = false;

  function handleClosed(e) {
    if (config.onClose) {
      config.onClose(e);
    }

    snackbars.splice(0, 1);
    $$invalidate('snackbars', snackbars);
    $$invalidate('config', config = null);
  }

  function push(config) {
    snackbars.push(config);
    $$invalidate('snackbars', snackbars);
  }

  var click_handler = function click_handler(_ref, e) {
    var action = _ref.action;
    return action.onClick && action.onClick(e);
  };

  var click_handler_1 = function click_handler_1(e) {
    return config.onDismiss && config.onDismiss(e);
  };

  function snackbar_binding($$value) {
    binding_callbacks[$$value ? 'unshift' : 'push'](function () {
      $$invalidate('component', component = $$value);
    });
  }

  $$self.$set = function ($$new_props) {
    $$invalidate('$$props', $$props = assign(assign({}, $$props), $$new_props));
  };

  $$self.$capture_state = function () {
    return {
      snackbars: snackbars,
      component: component,
      config: config,
      waiting: waiting
    };
  };

  $$self.$inject_state = function ($$new_props) {
    $$invalidate('$$props', $$props = assign(assign({}, $$props), $$new_props));
    if ('snackbars' in $$props) $$invalidate('snackbars', snackbars = $$new_props.snackbars);
    if ('component' in $$props) $$invalidate('component', component = $$new_props.component);
    if ('config' in $$props) $$invalidate('config', config = $$new_props.config);
    if ('waiting' in $$props) $$invalidate('waiting', waiting = $$new_props.waiting);
  };

  $$self.$$.update = function () {
    var $$dirty = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
      snackbars: 1,
      config: 1,
      component: 1,
      waiting: 1
    };

    if ($$dirty.snackbars || $$dirty.config) {
      if (snackbars.length && !config) {
        $$invalidate('config', config = snackbars[0]);
        $$invalidate('waiting', waiting = true);
      }
    }

    if ($$dirty.component || $$dirty.waiting) {
      if (component && waiting && !component.isOpen()) {
        component.open();
        $$invalidate('waiting', waiting = false);
      }
    }
  };

  return _defineProperty({
    component: component,
    config: config,
    handleClosed: handleClosed,
    push: push,
    $$props: $$props,
    click_handler: click_handler,
    click_handler_1: click_handler_1,
    snackbar_binding: snackbar_binding
  }, "$$props", $$props = exclude_internal_props($$props));
}

var Kitchen =
/*#__PURE__*/
function (_SvelteComponentDev) {
  _inherits(Kitchen, _SvelteComponentDev);

  function Kitchen(options) {
    var _this;

    _classCallCheck(this, Kitchen);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Kitchen).call(this, options));
    init(_assertThisInitialized(_this), options, instance$1, create_fragment$1, safe_not_equal, ["push"]);
    dispatch_dev("SvelteRegisterComponent", {
      component: _assertThisInitialized(_this),
      tagName: "Kitchen",
      options: options,
      id: create_fragment$1.name
    });
    var ctx = _this.$$.ctx;
    var props = options.props || {};

    if (ctx.push === undefined && !('push' in props)) {
      console.warn("<Kitchen> was created without expected prop 'push'");
    }

    return _this;
  }

  _createClass(Kitchen, [{
    key: "push",
    get: function get() {
      return this.$$.ctx.push;
    },
    set: function set(value) {
      throw new Error("<Kitchen>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    }
  }]);

  return Kitchen;
}(SvelteComponentDev);

var file$1 = "src/routes/demo/snackbars.svelte"; // (10:6) <Label>

function create_default_slot_28(ctx) {
  var t;
  var block = {
    c: function create() {
      t = text("This is a snackbar.");
    },
    l: function claim(nodes) {
      t = claim_text(nodes, "This is a snackbar.");
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
    id: create_default_slot_28.name,
    type: "slot",
    source: "(10:6) <Label>",
    ctx: ctx
  });
  return block;
} // (9:4) <Snackbar bind:this={mySnackbar}>


function create_default_slot_27(ctx) {
  var current;
  var label = new Label({
    props: {
      $$slots: {
        default: [create_default_slot_28]
      },
      $$scope: {
        ctx: ctx
      }
    },
    $$inline: true
  });
  var block = {
    c: function create() {
      label.$$.fragment.c();
    },
    l: function claim(nodes) {
      label.$$.fragment.l(nodes);
    },
    m: function mount(target, anchor) {
      mount_component(label, target, anchor);
      current = true;
    },
    p: function update(changed, ctx) {
      var label_changes = {};
      if (changed.$$scope) label_changes.$$scope = {
        changed: changed,
        ctx: ctx
      };
      label.$set(label_changes);
    },
    i: function intro(local) {
      if (current) return;
      transition_in(label.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(label.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      destroy_component(label, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_default_slot_27.name,
    type: "slot",
    source: "(9:4) <Snackbar bind:this={mySnackbar}>",
    ctx: ctx
  });
  return block;
} // (14:6) <Label>


function create_default_slot_26(ctx) {
  var t;
  var block = {
    c: function create() {
      t = text("This is a snackbar.");
    },
    l: function claim(nodes) {
      t = claim_text(nodes, "This is a snackbar.");
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
    id: create_default_slot_26.name,
    type: "slot",
    source: "(14:6) <Label>",
    ctx: ctx
  });
  return block;
} // (16:8) <IconButton class="material-icons" title="Dismiss">


function create_default_slot_25(ctx) {
  var t;
  var block = {
    c: function create() {
      t = text("close");
    },
    l: function claim(nodes) {
      t = claim_text(nodes, "close");
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
    id: create_default_slot_25.name,
    type: "slot",
    source: "(16:8) <IconButton class=\"material-icons\" title=\"Dismiss\">",
    ctx: ctx
  });
  return block;
} // (15:6) <Actions>


function create_default_slot_24(ctx) {
  var current;
  var iconbutton = new IconButton$1({
    props: {
      class: "material-icons",
      title: "Dismiss",
      $$slots: {
        default: [create_default_slot_25]
      },
      $$scope: {
        ctx: ctx
      }
    },
    $$inline: true
  });
  var block = {
    c: function create() {
      iconbutton.$$.fragment.c();
    },
    l: function claim(nodes) {
      iconbutton.$$.fragment.l(nodes);
    },
    m: function mount(target, anchor) {
      mount_component(iconbutton, target, anchor);
      current = true;
    },
    p: function update(changed, ctx) {
      var iconbutton_changes = {};
      if (changed.$$scope) iconbutton_changes.$$scope = {
        changed: changed,
        ctx: ctx
      };
      iconbutton.$set(iconbutton_changes);
    },
    i: function intro(local) {
      if (current) return;
      transition_in(iconbutton.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(iconbutton.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      destroy_component(iconbutton, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_default_slot_24.name,
    type: "slot",
    source: "(15:6) <Actions>",
    ctx: ctx
  });
  return block;
} // (13:4) <Snackbar bind:this={mySnackbarB}>


function create_default_slot_23(ctx) {
  var t, current;
  var label = new Label({
    props: {
      $$slots: {
        default: [create_default_slot_26]
      },
      $$scope: {
        ctx: ctx
      }
    },
    $$inline: true
  });
  var actions = new Actions({
    props: {
      $$slots: {
        default: [create_default_slot_24]
      },
      $$scope: {
        ctx: ctx
      }
    },
    $$inline: true
  });
  var block = {
    c: function create() {
      label.$$.fragment.c();
      t = space();
      actions.$$.fragment.c();
    },
    l: function claim(nodes) {
      label.$$.fragment.l(nodes);
      t = claim_space(nodes);
      actions.$$.fragment.l(nodes);
    },
    m: function mount(target, anchor) {
      mount_component(label, target, anchor);
      insert_dev(target, t, anchor);
      mount_component(actions, target, anchor);
      current = true;
    },
    p: function update(changed, ctx) {
      var label_changes = {};
      if (changed.$$scope) label_changes.$$scope = {
        changed: changed,
        ctx: ctx
      };
      label.$set(label_changes);
      var actions_changes = {};
      if (changed.$$scope) actions_changes.$$scope = {
        changed: changed,
        ctx: ctx
      };
      actions.$set(actions_changes);
    },
    i: function intro(local) {
      if (current) return;
      transition_in(label.$$.fragment, local);
      transition_in(actions.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(label.$$.fragment, local);
      transition_out(actions.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      destroy_component(label, detaching);

      if (detaching) {
        detach_dev(t);
      }

      destroy_component(actions, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_default_slot_23.name,
    type: "slot",
    source: "(13:4) <Snackbar bind:this={mySnackbarB}>",
    ctx: ctx
  });
  return block;
} // (20:47) <Label>


function create_default_slot_22(ctx) {
  var t;
  var block = {
    c: function create() {
      t = text("Open Snackbar");
    },
    l: function claim(nodes) {
      t = claim_text(nodes, "Open Snackbar");
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
    id: create_default_slot_22.name,
    type: "slot",
    source: "(20:47) <Label>",
    ctx: ctx
  });
  return block;
} // (20:4) <Button on:click={() => mySnackbar.open()}>


function create_default_slot_21(ctx) {
  var current;
  var label = new Label({
    props: {
      $$slots: {
        default: [create_default_slot_22]
      },
      $$scope: {
        ctx: ctx
      }
    },
    $$inline: true
  });
  var block = {
    c: function create() {
      label.$$.fragment.c();
    },
    l: function claim(nodes) {
      label.$$.fragment.l(nodes);
    },
    m: function mount(target, anchor) {
      mount_component(label, target, anchor);
      current = true;
    },
    p: function update(changed, ctx) {
      var label_changes = {};
      if (changed.$$scope) label_changes.$$scope = {
        changed: changed,
        ctx: ctx
      };
      label.$set(label_changes);
    },
    i: function intro(local) {
      if (current) return;
      transition_in(label.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(label.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      destroy_component(label, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_default_slot_21.name,
    type: "slot",
    source: "(20:4) <Button on:click={() => mySnackbar.open()}>",
    ctx: ctx
  });
  return block;
} // (21:48) <Label>


function create_default_slot_20(ctx) {
  var t;
  var block = {
    c: function create() {
      t = text("Open Snackbar With Dismiss");
    },
    l: function claim(nodes) {
      t = claim_text(nodes, "Open Snackbar With Dismiss");
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
    id: create_default_slot_20.name,
    type: "slot",
    source: "(21:48) <Label>",
    ctx: ctx
  });
  return block;
} // (21:4) <Button on:click={() => mySnackbarB.open()}>


function create_default_slot_19(ctx) {
  var current;
  var label = new Label({
    props: {
      $$slots: {
        default: [create_default_slot_20]
      },
      $$scope: {
        ctx: ctx
      }
    },
    $$inline: true
  });
  var block = {
    c: function create() {
      label.$$.fragment.c();
    },
    l: function claim(nodes) {
      label.$$.fragment.l(nodes);
    },
    m: function mount(target, anchor) {
      mount_component(label, target, anchor);
      current = true;
    },
    p: function update(changed, ctx) {
      var label_changes = {};
      if (changed.$$scope) label_changes.$$scope = {
        changed: changed,
        ctx: ctx
      };
      label.$set(label_changes);
    },
    i: function intro(local) {
      if (current) return;
      transition_in(label.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(label.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      destroy_component(label, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_default_slot_19.name,
    type: "slot",
    source: "(21:4) <Button on:click={() => mySnackbarB.open()}>",
    ctx: ctx
  });
  return block;
} // (28:6) <Label>


function create_default_slot_18(ctx) {
  var t;
  var block = {
    c: function create() {
      t = text("This is a leading snackbar.");
    },
    l: function claim(nodes) {
      t = claim_text(nodes, "This is a leading snackbar.");
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
    id: create_default_slot_18.name,
    type: "slot",
    source: "(28:6) <Label>",
    ctx: ctx
  });
  return block;
} // (30:8) <Button>


function create_default_slot_17(ctx) {
  var t;
  var block = {
    c: function create() {
      t = text("Action");
    },
    l: function claim(nodes) {
      t = claim_text(nodes, "Action");
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
    id: create_default_slot_17.name,
    type: "slot",
    source: "(30:8) <Button>",
    ctx: ctx
  });
  return block;
} // (29:6) <Actions>


function create_default_slot_16(ctx) {
  var current;
  var button = new Button$1({
    props: {
      $$slots: {
        default: [create_default_slot_17]
      },
      $$scope: {
        ctx: ctx
      }
    },
    $$inline: true
  });
  var block = {
    c: function create() {
      button.$$.fragment.c();
    },
    l: function claim(nodes) {
      button.$$.fragment.l(nodes);
    },
    m: function mount(target, anchor) {
      mount_component(button, target, anchor);
      current = true;
    },
    p: function update(changed, ctx) {
      var button_changes = {};
      if (changed.$$scope) button_changes.$$scope = {
        changed: changed,
        ctx: ctx
      };
      button.$set(button_changes);
    },
    i: function intro(local) {
      if (current) return;
      transition_in(button.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(button.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      destroy_component(button, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_default_slot_16.name,
    type: "slot",
    source: "(29:6) <Actions>",
    ctx: ctx
  });
  return block;
} // (27:4) <Snackbar leading bind:this={leadingSnackbar} on:MDCSnackbar:closed={handleClosedLeading}>


function create_default_slot_15(ctx) {
  var t, current;
  var label = new Label({
    props: {
      $$slots: {
        default: [create_default_slot_18]
      },
      $$scope: {
        ctx: ctx
      }
    },
    $$inline: true
  });
  var actions = new Actions({
    props: {
      $$slots: {
        default: [create_default_slot_16]
      },
      $$scope: {
        ctx: ctx
      }
    },
    $$inline: true
  });
  var block = {
    c: function create() {
      label.$$.fragment.c();
      t = space();
      actions.$$.fragment.c();
    },
    l: function claim(nodes) {
      label.$$.fragment.l(nodes);
      t = claim_space(nodes);
      actions.$$.fragment.l(nodes);
    },
    m: function mount(target, anchor) {
      mount_component(label, target, anchor);
      insert_dev(target, t, anchor);
      mount_component(actions, target, anchor);
      current = true;
    },
    p: function update(changed, ctx) {
      var label_changes = {};
      if (changed.$$scope) label_changes.$$scope = {
        changed: changed,
        ctx: ctx
      };
      label.$set(label_changes);
      var actions_changes = {};
      if (changed.$$scope) actions_changes.$$scope = {
        changed: changed,
        ctx: ctx
      };
      actions.$set(actions_changes);
    },
    i: function intro(local) {
      if (current) return;
      transition_in(label.$$.fragment, local);
      transition_in(actions.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(label.$$.fragment, local);
      transition_out(actions.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      destroy_component(label, detaching);

      if (detaching) {
        detach_dev(t);
      }

      destroy_component(actions, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_default_slot_15.name,
    type: "slot",
    source: "(27:4) <Snackbar leading bind:this={leadingSnackbar} on:MDCSnackbar:closed={handleClosedLeading}>",
    ctx: ctx
  });
  return block;
} // (34:52) <Label>


function create_default_slot_14(ctx) {
  var t;
  var block = {
    c: function create() {
      t = text("Open Snackbar");
    },
    l: function claim(nodes) {
      t = claim_text(nodes, "Open Snackbar");
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
    id: create_default_slot_14.name,
    type: "slot",
    source: "(34:52) <Label>",
    ctx: ctx
  });
  return block;
} // (34:4) <Button on:click={() => leadingSnackbar.open()}>


function create_default_slot_13(ctx) {
  var current;
  var label = new Label({
    props: {
      $$slots: {
        default: [create_default_slot_14]
      },
      $$scope: {
        ctx: ctx
      }
    },
    $$inline: true
  });
  var block = {
    c: function create() {
      label.$$.fragment.c();
    },
    l: function claim(nodes) {
      label.$$.fragment.l(nodes);
    },
    m: function mount(target, anchor) {
      mount_component(label, target, anchor);
      current = true;
    },
    p: function update(changed, ctx) {
      var label_changes = {};
      if (changed.$$scope) label_changes.$$scope = {
        changed: changed,
        ctx: ctx
      };
      label.$set(label_changes);
    },
    i: function intro(local) {
      if (current) return;
      transition_in(label.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(label.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      destroy_component(label, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_default_slot_13.name,
    type: "slot",
    source: "(34:4) <Button on:click={() => leadingSnackbar.open()}>",
    ctx: ctx
  });
  return block;
} // (43:6) <Label>


function create_default_slot_12(ctx) {
  var t;
  var block = {
    c: function create() {
      t = text("This is a stacked snackbar. Use it when you have really long text.");
    },
    l: function claim(nodes) {
      t = claim_text(nodes, "This is a stacked snackbar. Use it when you have really long text.");
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
    id: create_default_slot_12.name,
    type: "slot",
    source: "(43:6) <Label>",
    ctx: ctx
  });
  return block;
} // (45:8) <Button on:click={() => stackedAction = 'Something'}>


function create_default_slot_11(ctx) {
  var t;
  var block = {
    c: function create() {
      t = text("Something");
    },
    l: function claim(nodes) {
      t = claim_text(nodes, "Something");
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
    id: create_default_slot_11.name,
    type: "slot",
    source: "(45:8) <Button on:click={() => stackedAction = 'Something'}>",
    ctx: ctx
  });
  return block;
} // (46:8) <Button on:click={() => stackedAction = 'Another'}>


function create_default_slot_10(ctx) {
  var t;
  var block = {
    c: function create() {
      t = text("Another");
    },
    l: function claim(nodes) {
      t = claim_text(nodes, "Another");
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
    id: create_default_slot_10.name,
    type: "slot",
    source: "(46:8) <Button on:click={() => stackedAction = 'Another'}>",
    ctx: ctx
  });
  return block;
} // (47:8) <IconButton on:click={() => stackedAction = 'Dismissed'} class="material-icons" title="Dismiss">


function create_default_slot_9(ctx) {
  var t;
  var block = {
    c: function create() {
      t = text("close");
    },
    l: function claim(nodes) {
      t = claim_text(nodes, "close");
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
    id: create_default_slot_9.name,
    type: "slot",
    source: "(47:8) <IconButton on:click={() => stackedAction = 'Dismissed'} class=\"material-icons\" title=\"Dismiss\">",
    ctx: ctx
  });
  return block;
} // (44:6) <Actions>


function create_default_slot_8(ctx) {
  var t0, t1, current;
  var button0 = new Button$1({
    props: {
      $$slots: {
        default: [create_default_slot_11]
      },
      $$scope: {
        ctx: ctx
      }
    },
    $$inline: true
  });
  button0.$on("click", ctx.click_handler_3);
  var button1 = new Button$1({
    props: {
      $$slots: {
        default: [create_default_slot_10]
      },
      $$scope: {
        ctx: ctx
      }
    },
    $$inline: true
  });
  button1.$on("click", ctx.click_handler_4);
  var iconbutton = new IconButton$1({
    props: {
      class: "material-icons",
      title: "Dismiss",
      $$slots: {
        default: [create_default_slot_9]
      },
      $$scope: {
        ctx: ctx
      }
    },
    $$inline: true
  });
  iconbutton.$on("click", ctx.click_handler_5);
  var block = {
    c: function create() {
      button0.$$.fragment.c();
      t0 = space();
      button1.$$.fragment.c();
      t1 = space();
      iconbutton.$$.fragment.c();
    },
    l: function claim(nodes) {
      button0.$$.fragment.l(nodes);
      t0 = claim_space(nodes);
      button1.$$.fragment.l(nodes);
      t1 = claim_space(nodes);
      iconbutton.$$.fragment.l(nodes);
    },
    m: function mount(target, anchor) {
      mount_component(button0, target, anchor);
      insert_dev(target, t0, anchor);
      mount_component(button1, target, anchor);
      insert_dev(target, t1, anchor);
      mount_component(iconbutton, target, anchor);
      current = true;
    },
    p: function update(changed, ctx) {
      var button0_changes = {};
      if (changed.$$scope) button0_changes.$$scope = {
        changed: changed,
        ctx: ctx
      };
      button0.$set(button0_changes);
      var button1_changes = {};
      if (changed.$$scope) button1_changes.$$scope = {
        changed: changed,
        ctx: ctx
      };
      button1.$set(button1_changes);
      var iconbutton_changes = {};
      if (changed.$$scope) iconbutton_changes.$$scope = {
        changed: changed,
        ctx: ctx
      };
      iconbutton.$set(iconbutton_changes);
    },
    i: function intro(local) {
      if (current) return;
      transition_in(button0.$$.fragment, local);
      transition_in(button1.$$.fragment, local);
      transition_in(iconbutton.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(button0.$$.fragment, local);
      transition_out(button1.$$.fragment, local);
      transition_out(iconbutton.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      destroy_component(button0, detaching);

      if (detaching) {
        detach_dev(t0);
      }

      destroy_component(button1, detaching);

      if (detaching) {
        detach_dev(t1);
      }

      destroy_component(iconbutton, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_default_slot_8.name,
    type: "slot",
    source: "(44:6) <Actions>",
    ctx: ctx
  });
  return block;
} // (42:4) <Snackbar variant="stacked" bind:this={stackedSnackbar} on:MDCSnackbar:closed={handleClosedStacked}>


function create_default_slot_7(ctx) {
  var t, current;
  var label = new Label({
    props: {
      $$slots: {
        default: [create_default_slot_12]
      },
      $$scope: {
        ctx: ctx
      }
    },
    $$inline: true
  });
  var actions = new Actions({
    props: {
      $$slots: {
        default: [create_default_slot_8]
      },
      $$scope: {
        ctx: ctx
      }
    },
    $$inline: true
  });
  var block = {
    c: function create() {
      label.$$.fragment.c();
      t = space();
      actions.$$.fragment.c();
    },
    l: function claim(nodes) {
      label.$$.fragment.l(nodes);
      t = claim_space(nodes);
      actions.$$.fragment.l(nodes);
    },
    m: function mount(target, anchor) {
      mount_component(label, target, anchor);
      insert_dev(target, t, anchor);
      mount_component(actions, target, anchor);
      current = true;
    },
    p: function update(changed, ctx) {
      var label_changes = {};
      if (changed.$$scope) label_changes.$$scope = {
        changed: changed,
        ctx: ctx
      };
      label.$set(label_changes);
      var actions_changes = {};
      if (changed.$$scope) actions_changes.$$scope = {
        changed: changed,
        ctx: ctx
      };
      actions.$set(actions_changes);
    },
    i: function intro(local) {
      if (current) return;
      transition_in(label.$$.fragment, local);
      transition_in(actions.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(label.$$.fragment, local);
      transition_out(actions.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      destroy_component(label, detaching);

      if (detaching) {
        detach_dev(t);
      }

      destroy_component(actions, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_default_slot_7.name,
    type: "slot",
    source: "(42:4) <Snackbar variant=\"stacked\" bind:this={stackedSnackbar} on:MDCSnackbar:closed={handleClosedStacked}>",
    ctx: ctx
  });
  return block;
} // (51:52) <Label>


function create_default_slot_6(ctx) {
  var t;
  var block = {
    c: function create() {
      t = text("Open Snackbar");
    },
    l: function claim(nodes) {
      t = claim_text(nodes, "Open Snackbar");
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
    id: create_default_slot_6.name,
    type: "slot",
    source: "(51:52) <Label>",
    ctx: ctx
  });
  return block;
} // (51:4) <Button on:click={() => stackedSnackbar.open()}>


function create_default_slot_5(ctx) {
  var current;
  var label = new Label({
    props: {
      $$slots: {
        default: [create_default_slot_6]
      },
      $$scope: {
        ctx: ctx
      }
    },
    $$inline: true
  });
  var block = {
    c: function create() {
      label.$$.fragment.c();
    },
    l: function claim(nodes) {
      label.$$.fragment.l(nodes);
    },
    m: function mount(target, anchor) {
      mount_component(label, target, anchor);
      current = true;
    },
    p: function update(changed, ctx) {
      var label_changes = {};
      if (changed.$$scope) label_changes.$$scope = {
        changed: changed,
        ctx: ctx
      };
      label.$set(label_changes);
    },
    i: function intro(local) {
      if (current) return;
      transition_in(label.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(label.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      destroy_component(label, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_default_slot_5.name,
    type: "slot",
    source: "(51:4) <Button on:click={() => stackedSnackbar.open()}>",
    ctx: ctx
  });
  return block;
} // (60:4) <Snackbar bind:this={dynSnackbar} labelText={dynText}>


function create_default_slot_4(ctx) {
  var current;
  var label = new Label({
    $$inline: true
  });
  var block = {
    c: function create() {
      label.$$.fragment.c();
    },
    l: function claim(nodes) {
      label.$$.fragment.l(nodes);
    },
    m: function mount(target, anchor) {
      mount_component(label, target, anchor);
      current = true;
    },
    i: function intro(local) {
      if (current) return;
      transition_in(label.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(label.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      destroy_component(label, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_default_slot_4.name,
    type: "slot",
    source: "(60:4) <Snackbar bind:this={dynSnackbar} labelText={dynText}>",
    ctx: ctx
  });
  return block;
} // (66:63) <Label>


function create_default_slot_3$1(ctx) {
  var t;
  var block = {
    c: function create() {
      t = text("Open Snackbar");
    },
    l: function claim(nodes) {
      t = claim_text(nodes, "Open Snackbar");
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
    id: create_default_slot_3$1.name,
    type: "slot",
    source: "(66:63) <Label>",
    ctx: ctx
  });
  return block;
} // (66:4) <Button on:click={() => dynSnackbar && dynSnackbar.open()}>


function create_default_slot_2$1(ctx) {
  var current;
  var label = new Label({
    props: {
      $$slots: {
        default: [create_default_slot_3$1]
      },
      $$scope: {
        ctx: ctx
      }
    },
    $$inline: true
  });
  var block = {
    c: function create() {
      label.$$.fragment.c();
    },
    l: function claim(nodes) {
      label.$$.fragment.l(nodes);
    },
    m: function mount(target, anchor) {
      mount_component(label, target, anchor);
      current = true;
    },
    p: function update(changed, ctx) {
      var label_changes = {};
      if (changed.$$scope) label_changes.$$scope = {
        changed: changed,
        ctx: ctx
      };
      label.$set(label_changes);
    },
    i: function intro(local) {
      if (current) return;
      transition_in(label.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(label.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      destroy_component(label, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_default_slot_2$1.name,
    type: "slot",
    source: "(66:4) <Button on:click={() => dynSnackbar && dynSnackbar.open()}>",
    ctx: ctx
  });
  return block;
} // (74:37) <Label>


function create_default_slot_1$1(ctx) {
  var t;
  var block = {
    c: function create() {
      t = text("Push Snackbar");
    },
    l: function claim(nodes) {
      t = claim_text(nodes, "Push Snackbar");
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
    id: create_default_slot_1$1.name,
    type: "slot",
    source: "(74:37) <Label>",
    ctx: ctx
  });
  return block;
} // (74:4) <Button on:click={pushToKitchen}>


function create_default_slot$1(ctx) {
  var current;
  var label = new Label({
    props: {
      $$slots: {
        default: [create_default_slot_1$1]
      },
      $$scope: {
        ctx: ctx
      }
    },
    $$inline: true
  });
  var block = {
    c: function create() {
      label.$$.fragment.c();
    },
    l: function claim(nodes) {
      label.$$.fragment.l(nodes);
    },
    m: function mount(target, anchor) {
      mount_component(label, target, anchor);
      current = true;
    },
    p: function update(changed, ctx) {
      var label_changes = {};
      if (changed.$$scope) label_changes.$$scope = {
        changed: changed,
        ctx: ctx
      };
      label.$set(label_changes);
    },
    i: function intro(local) {
      if (current) return;
      transition_in(label.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(label.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      destroy_component(label, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_default_slot$1.name,
    type: "slot",
    source: "(74:4) <Button on:click={pushToKitchen}>",
    ctx: ctx
  });
  return block;
}

function create_fragment$2(ctx) {
  var t0, section, h2, t1, t2, div0, t3, t4, t5, t6, div1, t7, t8, t9, pre0, t10, t11, t12, div2, t13, t14, t15, pre1, t16, t17, t18, pre2, t19, t20, t21, div3, t22, br, t23, t24, updating_value, t25, t26, div4, t27, t28, t29, pre3, t30, t31, t32, pre4, t33, t34, current;
  var snackbar0_props = {
    $$slots: {
      default: [create_default_slot_27]
    },
    $$scope: {
      ctx: ctx
    }
  };
  var snackbar0 = new Snackbar({
    props: snackbar0_props,
    $$inline: true
  });
  ctx.snackbar0_binding(snackbar0);
  var snackbar1_props = {
    $$slots: {
      default: [create_default_slot_23]
    },
    $$scope: {
      ctx: ctx
    }
  };
  var snackbar1 = new Snackbar({
    props: snackbar1_props,
    $$inline: true
  });
  ctx.snackbar1_binding(snackbar1);
  var button0 = new Button$1({
    props: {
      $$slots: {
        default: [create_default_slot_21]
      },
      $$scope: {
        ctx: ctx
      }
    },
    $$inline: true
  });
  button0.$on("click", ctx.click_handler);
  var button1 = new Button$1({
    props: {
      $$slots: {
        default: [create_default_slot_19]
      },
      $$scope: {
        ctx: ctx
      }
    },
    $$inline: true
  });
  button1.$on("click", ctx.click_handler_1);
  var snackbar2_props = {
    leading: true,
    $$slots: {
      default: [create_default_slot_15]
    },
    $$scope: {
      ctx: ctx
    }
  };
  var snackbar2 = new Snackbar({
    props: snackbar2_props,
    $$inline: true
  });
  ctx.snackbar2_binding(snackbar2);
  snackbar2.$on("MDCSnackbar:closed", ctx.handleClosedLeading);
  var button2 = new Button$1({
    props: {
      $$slots: {
        default: [create_default_slot_13]
      },
      $$scope: {
        ctx: ctx
      }
    },
    $$inline: true
  });
  button2.$on("click", ctx.click_handler_2);
  var snackbar3_props = {
    variant: "stacked",
    $$slots: {
      default: [create_default_slot_7]
    },
    $$scope: {
      ctx: ctx
    }
  };
  var snackbar3 = new Snackbar({
    props: snackbar3_props,
    $$inline: true
  });
  ctx.snackbar3_binding(snackbar3);
  snackbar3.$on("MDCSnackbar:closed", ctx.handleClosedStacked);
  var button3 = new Button$1({
    props: {
      $$slots: {
        default: [create_default_slot_5]
      },
      $$scope: {
        ctx: ctx
      }
    },
    $$inline: true
  });
  button3.$on("click", ctx.click_handler_6);
  var snackbar4_props = {
    labelText: ctx.dynText,
    $$slots: {
      default: [create_default_slot_4]
    },
    $$scope: {
      ctx: ctx
    }
  };
  var snackbar4 = new Snackbar({
    props: snackbar4_props,
    $$inline: true
  });
  ctx.snackbar4_binding(snackbar4);

  function textfield_value_binding(value) {
    ctx.textfield_value_binding.call(null, value);
    updating_value = true;
    add_flush_callback(function () {
      return updating_value = false;
    });
  }

  var textfield_props = {
    label: "Dynamic Text",
    input$required: true
  };

  if (ctx.dynText !== void 0) {
    textfield_props.value = ctx.dynText;
  }

  var textfield = new Textfield({
    props: textfield_props,
    $$inline: true
  });
  binding_callbacks.push(function () {
    return bind(textfield, 'value', textfield_value_binding);
  });
  var button4 = new Button$1({
    props: {
      $$slots: {
        default: [create_default_slot_2$1]
      },
      $$scope: {
        ctx: ctx
      }
    },
    $$inline: true
  });
  button4.$on("click", ctx.click_handler_7);
  var kitchen_1_props = {
    dismiss$class: "material-icons"
  };
  var kitchen_1 = new Kitchen({
    props: kitchen_1_props,
    $$inline: true
  });
  ctx.kitchen_1_binding(kitchen_1);
  var button5 = new Button$1({
    props: {
      $$slots: {
        default: [create_default_slot$1]
      },
      $$scope: {
        ctx: ctx
      }
    },
    $$inline: true
  });
  button5.$on("click", ctx.pushToKitchen);
  var block = {
    c: function create() {
      t0 = space();
      section = element("section");
      h2 = element("h2");
      t1 = text("Snackbars");
      t2 = space();
      div0 = element("div");
      snackbar0.$$.fragment.c();
      t3 = space();
      snackbar1.$$.fragment.c();
      t4 = space();
      button0.$$.fragment.c();
      t5 = space();
      button1.$$.fragment.c();
      t6 = space();
      div1 = element("div");
      t7 = text("Leading with Action:\n\n    ");
      snackbar2.$$.fragment.c();
      t8 = space();
      button2.$$.fragment.c();
      t9 = space();
      pre0 = element("pre");
      t10 = text("Closed Reason: ");
      t11 = text(ctx.leadingReason);
      t12 = space();
      div2 = element("div");
      t13 = text("Stacked with Action:\n\n    ");
      snackbar3.$$.fragment.c();
      t14 = space();
      button3.$$.fragment.c();
      t15 = space();
      pre1 = element("pre");
      t16 = text("Closed Reason: ");
      t17 = text(ctx.stackedReason);
      t18 = space();
      pre2 = element("pre");
      t19 = text("Action: ");
      t20 = text(ctx.stackedAction);
      t21 = space();
      div3 = element("div");
      t22 = text("Using dynamic text: ");
      br = element("br");
      t23 = space();
      snackbar4.$$.fragment.c();
      t24 = space();
      textfield.$$.fragment.c();
      t25 = space();
      button4.$$.fragment.c();
      t26 = space();
      div4 = element("div");
      t27 = text("The \"Kitchen\" Snackbar generator:\n\n    ");
      kitchen_1.$$.fragment.c();
      t28 = space();
      button5.$$.fragment.c();
      t29 = space();
      pre3 = element("pre");
      t30 = text("Closed Reason: ");
      t31 = text(ctx.kitchenReason);
      t32 = space();
      pre4 = element("pre");
      t33 = text("Action: ");
      t34 = text(ctx.kitchenAction);
      this.h();
    },
    l: function claim(nodes) {
      t0 = claim_space(nodes);
      section = claim_element(nodes, "SECTION", {}, false);
      var section_nodes = children(section);
      h2 = claim_element(section_nodes, "H2", {}, false);
      var h2_nodes = children(h2);
      t1 = claim_text(h2_nodes, "Snackbars");
      h2_nodes.forEach(detach_dev);
      t2 = claim_space(section_nodes);
      div0 = claim_element(section_nodes, "DIV", {}, false);
      var div0_nodes = children(div0);
      snackbar0.$$.fragment.l(div0_nodes);
      t3 = claim_space(div0_nodes);
      snackbar1.$$.fragment.l(div0_nodes);
      t4 = claim_space(div0_nodes);
      button0.$$.fragment.l(div0_nodes);
      t5 = claim_space(div0_nodes);
      button1.$$.fragment.l(div0_nodes);
      div0_nodes.forEach(detach_dev);
      t6 = claim_space(section_nodes);
      div1 = claim_element(section_nodes, "DIV", {}, false);
      var div1_nodes = children(div1);
      t7 = claim_text(div1_nodes, "Leading with Action:\n\n    ");
      snackbar2.$$.fragment.l(div1_nodes);
      t8 = claim_space(div1_nodes);
      button2.$$.fragment.l(div1_nodes);
      div1_nodes.forEach(detach_dev);
      t9 = claim_space(section_nodes);
      pre0 = claim_element(section_nodes, "PRE", {
        class: true
      }, false);
      var pre0_nodes = children(pre0);
      t10 = claim_text(pre0_nodes, "Closed Reason: ");
      t11 = claim_text(pre0_nodes, ctx.leadingReason);
      pre0_nodes.forEach(detach_dev);
      t12 = claim_space(section_nodes);
      div2 = claim_element(section_nodes, "DIV", {}, false);
      var div2_nodes = children(div2);
      t13 = claim_text(div2_nodes, "Stacked with Action:\n\n    ");
      snackbar3.$$.fragment.l(div2_nodes);
      t14 = claim_space(div2_nodes);
      button3.$$.fragment.l(div2_nodes);
      div2_nodes.forEach(detach_dev);
      t15 = claim_space(section_nodes);
      pre1 = claim_element(section_nodes, "PRE", {
        class: true
      }, false);
      var pre1_nodes = children(pre1);
      t16 = claim_text(pre1_nodes, "Closed Reason: ");
      t17 = claim_text(pre1_nodes, ctx.stackedReason);
      pre1_nodes.forEach(detach_dev);
      t18 = claim_space(section_nodes);
      pre2 = claim_element(section_nodes, "PRE", {
        class: true
      }, false);
      var pre2_nodes = children(pre2);
      t19 = claim_text(pre2_nodes, "Action: ");
      t20 = claim_text(pre2_nodes, ctx.stackedAction);
      pre2_nodes.forEach(detach_dev);
      t21 = claim_space(section_nodes);
      div3 = claim_element(section_nodes, "DIV", {}, false);
      var div3_nodes = children(div3);
      t22 = claim_text(div3_nodes, "Using dynamic text: ");
      br = claim_element(div3_nodes, "BR", {}, false);
      var br_nodes = children(br);
      br_nodes.forEach(detach_dev);
      t23 = claim_space(div3_nodes);
      snackbar4.$$.fragment.l(div3_nodes);
      t24 = claim_space(div3_nodes);
      textfield.$$.fragment.l(div3_nodes);
      t25 = claim_space(div3_nodes);
      button4.$$.fragment.l(div3_nodes);
      div3_nodes.forEach(detach_dev);
      t26 = claim_space(section_nodes);
      div4 = claim_element(section_nodes, "DIV", {}, false);
      var div4_nodes = children(div4);
      t27 = claim_text(div4_nodes, "The \"Kitchen\" Snackbar generator:\n\n    ");
      kitchen_1.$$.fragment.l(div4_nodes);
      t28 = claim_space(div4_nodes);
      button5.$$.fragment.l(div4_nodes);
      div4_nodes.forEach(detach_dev);
      t29 = claim_space(section_nodes);
      pre3 = claim_element(section_nodes, "PRE", {
        class: true
      }, false);
      var pre3_nodes = children(pre3);
      t30 = claim_text(pre3_nodes, "Closed Reason: ");
      t31 = claim_text(pre3_nodes, ctx.kitchenReason);
      pre3_nodes.forEach(detach_dev);
      t32 = claim_space(section_nodes);
      pre4 = claim_element(section_nodes, "PRE", {
        class: true
      }, false);
      var pre4_nodes = children(pre4);
      t33 = claim_text(pre4_nodes, "Action: ");
      t34 = claim_text(pre4_nodes, ctx.kitchenAction);
      pre4_nodes.forEach(detach_dev);
      section_nodes.forEach(detach_dev);
      this.h();
    },
    h: function hydrate() {
      document.title = "Snackbars - SMUI";
      add_location(h2, file$1, 5, 2, 76);
      add_location(div0, file$1, 7, 2, 98);
      add_location(div1, file$1, 23, 2, 604);
      attr_dev(pre0, "class", "status");
      add_location(pre0, file$1, 36, 2, 964);
      add_location(div2, file$1, 38, 2, 1024);
      attr_dev(pre1, "class", "status");
      add_location(pre1, file$1, 53, 2, 1680);
      attr_dev(pre2, "class", "status");
      add_location(pre2, file$1, 54, 2, 1739);
      add_location(br, file$1, 57, 24, 1822);
      add_location(div3, file$1, 56, 2, 1792);
      add_location(div4, file$1, 68, 2, 2117);
      attr_dev(pre3, "class", "status");
      add_location(pre3, file$1, 76, 2, 2317);
      attr_dev(pre4, "class", "status");
      add_location(pre4, file$1, 77, 2, 2376);
      add_location(section, file$1, 4, 0, 64);
    },
    m: function mount(target, anchor) {
      insert_dev(target, t0, anchor);
      insert_dev(target, section, anchor);
      append_dev(section, h2);
      append_dev(h2, t1);
      append_dev(section, t2);
      append_dev(section, div0);
      mount_component(snackbar0, div0, null);
      append_dev(div0, t3);
      mount_component(snackbar1, div0, null);
      append_dev(div0, t4);
      mount_component(button0, div0, null);
      append_dev(div0, t5);
      mount_component(button1, div0, null);
      append_dev(section, t6);
      append_dev(section, div1);
      append_dev(div1, t7);
      mount_component(snackbar2, div1, null);
      append_dev(div1, t8);
      mount_component(button2, div1, null);
      append_dev(section, t9);
      append_dev(section, pre0);
      append_dev(pre0, t10);
      append_dev(pre0, t11);
      append_dev(section, t12);
      append_dev(section, div2);
      append_dev(div2, t13);
      mount_component(snackbar3, div2, null);
      append_dev(div2, t14);
      mount_component(button3, div2, null);
      append_dev(section, t15);
      append_dev(section, pre1);
      append_dev(pre1, t16);
      append_dev(pre1, t17);
      append_dev(section, t18);
      append_dev(section, pre2);
      append_dev(pre2, t19);
      append_dev(pre2, t20);
      append_dev(section, t21);
      append_dev(section, div3);
      append_dev(div3, t22);
      append_dev(div3, br);
      append_dev(div3, t23);
      mount_component(snackbar4, div3, null);
      append_dev(div3, t24);
      mount_component(textfield, div3, null);
      append_dev(div3, t25);
      mount_component(button4, div3, null);
      append_dev(section, t26);
      append_dev(section, div4);
      append_dev(div4, t27);
      mount_component(kitchen_1, div4, null);
      append_dev(div4, t28);
      mount_component(button5, div4, null);
      append_dev(section, t29);
      append_dev(section, pre3);
      append_dev(pre3, t30);
      append_dev(pre3, t31);
      append_dev(section, t32);
      append_dev(section, pre4);
      append_dev(pre4, t33);
      append_dev(pre4, t34);
      current = true;
    },
    p: function update(changed, ctx) {
      var snackbar0_changes = {};
      if (changed.$$scope) snackbar0_changes.$$scope = {
        changed: changed,
        ctx: ctx
      };
      snackbar0.$set(snackbar0_changes);
      var snackbar1_changes = {};
      if (changed.$$scope) snackbar1_changes.$$scope = {
        changed: changed,
        ctx: ctx
      };
      snackbar1.$set(snackbar1_changes);
      var button0_changes = {};
      if (changed.$$scope) button0_changes.$$scope = {
        changed: changed,
        ctx: ctx
      };
      button0.$set(button0_changes);
      var button1_changes = {};
      if (changed.$$scope) button1_changes.$$scope = {
        changed: changed,
        ctx: ctx
      };
      button1.$set(button1_changes);
      var snackbar2_changes = {};
      if (changed.$$scope) snackbar2_changes.$$scope = {
        changed: changed,
        ctx: ctx
      };
      snackbar2.$set(snackbar2_changes);
      var button2_changes = {};
      if (changed.$$scope) button2_changes.$$scope = {
        changed: changed,
        ctx: ctx
      };
      button2.$set(button2_changes);

      if (!current || changed.leadingReason) {
        set_data_dev(t11, ctx.leadingReason);
      }

      var snackbar3_changes = {};
      if (changed.$$scope) snackbar3_changes.$$scope = {
        changed: changed,
        ctx: ctx
      };
      snackbar3.$set(snackbar3_changes);
      var button3_changes = {};
      if (changed.$$scope) button3_changes.$$scope = {
        changed: changed,
        ctx: ctx
      };
      button3.$set(button3_changes);

      if (!current || changed.stackedReason) {
        set_data_dev(t17, ctx.stackedReason);
      }

      if (!current || changed.stackedAction) {
        set_data_dev(t20, ctx.stackedAction);
      }

      var snackbar4_changes = {};
      if (changed.dynText) snackbar4_changes.labelText = ctx.dynText;
      if (changed.$$scope) snackbar4_changes.$$scope = {
        changed: changed,
        ctx: ctx
      };
      snackbar4.$set(snackbar4_changes);
      var textfield_changes = {};

      if (!updating_value && changed.dynText) {
        textfield_changes.value = ctx.dynText;
      }

      textfield.$set(textfield_changes);
      var button4_changes = {};
      if (changed.$$scope) button4_changes.$$scope = {
        changed: changed,
        ctx: ctx
      };
      button4.$set(button4_changes);
      var kitchen_1_changes = {};
      kitchen_1.$set(kitchen_1_changes);
      var button5_changes = {};
      if (changed.$$scope) button5_changes.$$scope = {
        changed: changed,
        ctx: ctx
      };
      button5.$set(button5_changes);

      if (!current || changed.kitchenReason) {
        set_data_dev(t31, ctx.kitchenReason);
      }

      if (!current || changed.kitchenAction) {
        set_data_dev(t34, ctx.kitchenAction);
      }
    },
    i: function intro(local) {
      if (current) return;
      transition_in(snackbar0.$$.fragment, local);
      transition_in(snackbar1.$$.fragment, local);
      transition_in(button0.$$.fragment, local);
      transition_in(button1.$$.fragment, local);
      transition_in(snackbar2.$$.fragment, local);
      transition_in(button2.$$.fragment, local);
      transition_in(snackbar3.$$.fragment, local);
      transition_in(button3.$$.fragment, local);
      transition_in(snackbar4.$$.fragment, local);
      transition_in(textfield.$$.fragment, local);
      transition_in(button4.$$.fragment, local);
      transition_in(kitchen_1.$$.fragment, local);
      transition_in(button5.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(snackbar0.$$.fragment, local);
      transition_out(snackbar1.$$.fragment, local);
      transition_out(button0.$$.fragment, local);
      transition_out(button1.$$.fragment, local);
      transition_out(snackbar2.$$.fragment, local);
      transition_out(button2.$$.fragment, local);
      transition_out(snackbar3.$$.fragment, local);
      transition_out(button3.$$.fragment, local);
      transition_out(snackbar4.$$.fragment, local);
      transition_out(textfield.$$.fragment, local);
      transition_out(button4.$$.fragment, local);
      transition_out(kitchen_1.$$.fragment, local);
      transition_out(button5.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      if (detaching) {
        detach_dev(t0);
        detach_dev(section);
      }

      ctx.snackbar0_binding(null);
      destroy_component(snackbar0);
      ctx.snackbar1_binding(null);
      destroy_component(snackbar1);
      destroy_component(button0);
      destroy_component(button1);
      ctx.snackbar2_binding(null);
      destroy_component(snackbar2);
      destroy_component(button2);
      ctx.snackbar3_binding(null);
      destroy_component(snackbar3);
      destroy_component(button3);
      ctx.snackbar4_binding(null);
      destroy_component(snackbar4);
      destroy_component(textfield);
      destroy_component(button4);
      ctx.kitchen_1_binding(null);
      destroy_component(kitchen_1);
      destroy_component(button5);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_fragment$2.name,
    type: "component",
    source: "",
    ctx: ctx
  });
  return block;
}

function instance$2($$self, $$props, $$invalidate) {
  var mySnackbar;
  var mySnackbarB;
  var leadingSnackbar;
  var leadingReason = 'nothing yet';
  var stackedSnackbar;
  var stackedReason = 'nothing yet';
  var stackedAction = 'nothing yet';
  var dynSnackbar;
  var dynText = 'This is a snackbar with dynamic text.';
  var kitchen;
  var kitchenReason = 'nothing yet';
  var kitchenAction = 'nothing yet';

  function handleClosedLeading(e) {
    $$invalidate('leadingReason', leadingReason = e.detail.reason);
  }

  function handleClosedStacked(e) {
    $$invalidate('stackedReason', stackedReason = e.detail.reason);
  }

  function pushToKitchen() {
    kitchen.push({
      props: {
        variant: 'stacked'
      },
      label: 'This is a snackbar generated by the kitchen.',
      actions: [{
        onClick: function onClick() {
          return $$invalidate('kitchenAction', kitchenAction = 'Something');
        },
        text: 'Something'
      }, {
        onClick: function onClick() {
          return $$invalidate('kitchenAction', kitchenAction = 'Another');
        },
        text: 'Another'
      }],
      dismissButton: true,
      onDismiss: function onDismiss() {
        return $$invalidate('kitchenAction', kitchenAction = 'Dismissed');
      },
      onClose: function onClose(e) {
        $$invalidate('kitchenReason', kitchenReason = e.detail.reason);
      }
    });
  }

  function snackbar0_binding($$value) {
    binding_callbacks[$$value ? 'unshift' : 'push'](function () {
      $$invalidate('mySnackbar', mySnackbar = $$value);
    });
  }

  function snackbar1_binding($$value) {
    binding_callbacks[$$value ? 'unshift' : 'push'](function () {
      $$invalidate('mySnackbarB', mySnackbarB = $$value);
    });
  }

  var click_handler = function click_handler() {
    return mySnackbar.open();
  };

  var click_handler_1 = function click_handler_1() {
    return mySnackbarB.open();
  };

  function snackbar2_binding($$value) {
    binding_callbacks[$$value ? 'unshift' : 'push'](function () {
      $$invalidate('leadingSnackbar', leadingSnackbar = $$value);
    });
  }

  var click_handler_2 = function click_handler_2() {
    return leadingSnackbar.open();
  };

  var click_handler_3 = function click_handler_3() {
    return $$invalidate('stackedAction', stackedAction = 'Something');
  };

  var click_handler_4 = function click_handler_4() {
    return $$invalidate('stackedAction', stackedAction = 'Another');
  };

  var click_handler_5 = function click_handler_5() {
    return $$invalidate('stackedAction', stackedAction = 'Dismissed');
  };

  function snackbar3_binding($$value) {
    binding_callbacks[$$value ? 'unshift' : 'push'](function () {
      $$invalidate('stackedSnackbar', stackedSnackbar = $$value);
    });
  }

  var click_handler_6 = function click_handler_6() {
    return stackedSnackbar.open();
  };

  function snackbar4_binding($$value) {
    binding_callbacks[$$value ? 'unshift' : 'push'](function () {
      $$invalidate('dynSnackbar', dynSnackbar = $$value);
    });
  }

  function textfield_value_binding(value) {
    dynText = value;
    $$invalidate('dynText', dynText);
  }

  var click_handler_7 = function click_handler_7() {
    return dynSnackbar && dynSnackbar.open();
  };

  function kitchen_1_binding($$value) {
    binding_callbacks[$$value ? 'unshift' : 'push'](function () {
      $$invalidate('kitchen', kitchen = $$value);
    });
  }

  $$self.$capture_state = function () {
    return {};
  };

  $$self.$inject_state = function ($$props) {
    if ('mySnackbar' in $$props) $$invalidate('mySnackbar', mySnackbar = $$props.mySnackbar);
    if ('mySnackbarB' in $$props) $$invalidate('mySnackbarB', mySnackbarB = $$props.mySnackbarB);
    if ('leadingSnackbar' in $$props) $$invalidate('leadingSnackbar', leadingSnackbar = $$props.leadingSnackbar);
    if ('leadingReason' in $$props) $$invalidate('leadingReason', leadingReason = $$props.leadingReason);
    if ('stackedSnackbar' in $$props) $$invalidate('stackedSnackbar', stackedSnackbar = $$props.stackedSnackbar);
    if ('stackedReason' in $$props) $$invalidate('stackedReason', stackedReason = $$props.stackedReason);
    if ('stackedAction' in $$props) $$invalidate('stackedAction', stackedAction = $$props.stackedAction);
    if ('dynSnackbar' in $$props) $$invalidate('dynSnackbar', dynSnackbar = $$props.dynSnackbar);
    if ('dynText' in $$props) $$invalidate('dynText', dynText = $$props.dynText);
    if ('kitchen' in $$props) $$invalidate('kitchen', kitchen = $$props.kitchen);
    if ('kitchenReason' in $$props) $$invalidate('kitchenReason', kitchenReason = $$props.kitchenReason);
    if ('kitchenAction' in $$props) $$invalidate('kitchenAction', kitchenAction = $$props.kitchenAction);
  };

  return {
    mySnackbar: mySnackbar,
    mySnackbarB: mySnackbarB,
    leadingSnackbar: leadingSnackbar,
    leadingReason: leadingReason,
    stackedSnackbar: stackedSnackbar,
    stackedReason: stackedReason,
    stackedAction: stackedAction,
    dynSnackbar: dynSnackbar,
    dynText: dynText,
    kitchen: kitchen,
    kitchenReason: kitchenReason,
    kitchenAction: kitchenAction,
    handleClosedLeading: handleClosedLeading,
    handleClosedStacked: handleClosedStacked,
    pushToKitchen: pushToKitchen,
    snackbar0_binding: snackbar0_binding,
    snackbar1_binding: snackbar1_binding,
    click_handler: click_handler,
    click_handler_1: click_handler_1,
    snackbar2_binding: snackbar2_binding,
    click_handler_2: click_handler_2,
    click_handler_3: click_handler_3,
    click_handler_4: click_handler_4,
    click_handler_5: click_handler_5,
    snackbar3_binding: snackbar3_binding,
    click_handler_6: click_handler_6,
    snackbar4_binding: snackbar4_binding,
    textfield_value_binding: textfield_value_binding,
    click_handler_7: click_handler_7,
    kitchen_1_binding: kitchen_1_binding
  };
}

var Snackbars =
/*#__PURE__*/
function (_SvelteComponentDev) {
  _inherits$1(Snackbars, _SvelteComponentDev);

  function Snackbars(options) {
    var _this;

    _classCallCheck$1(this, Snackbars);

    _this = _possibleConstructorReturn$1(this, _getPrototypeOf$1(Snackbars).call(this, options));
    init(_assertThisInitialized$1(_this), options, instance$2, create_fragment$2, safe_not_equal, []);
    dispatch_dev("SvelteRegisterComponent", {
      component: _assertThisInitialized$1(_this),
      tagName: "Snackbars",
      options: options,
      id: create_fragment$2.name
    });
    return _this;
  }

  return Snackbars;
}(SvelteComponentDev);

export default Snackbars;

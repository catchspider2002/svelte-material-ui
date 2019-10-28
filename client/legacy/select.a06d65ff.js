import { i as init, s as safe_not_equal, d as dispatch_dev, S as SvelteComponentDev, c as create_slot, a as assign, $ as setContext, B as onMount, a3 as onDestroy, e as exclude_internal_props, M as space, C as empty, N as claim_space, m as insert_dev, t as transition_in, E as group_outros, r as transition_out, F as check_outros, j as detach_dev, J as mount_component, q as get_spread_update, Z as get_spread_object, K as destroy_component, f as element, g as claim_element, h as children, O as attr_dev, l as add_location, k as set_attributes, a4 as toggle_class, D as listen_dev, P as append_dev, o as get_slot_changes, p as get_slot_context, G as binding_callbacks, I as bind, b as current_component, a2 as bubble, a6 as run_all, L as add_flush_callback, T as text, U as claim_text, X as set_data_dev, a0 as getContext, u as _inherits$1, v as _classCallCheck$1, w as _possibleConstructorReturn$1, x as _getPrototypeOf$1, y as _assertThisInitialized$1, W as set_style, a8 as destroy_each, n as noop } from './index.d5da4a00.js';
import { _ as _asyncToGenerator, a as _regeneratorRuntime } from './asyncToGenerator.0781946b.js';
import { _ as _inherits, a as _classCallCheck, b as _possibleConstructorReturn, c as _getPrototypeOf, d as _assertThisInitialized, e as _createClass, f as exclude, g as forwardEventsBuilder, h as _defineProperty, u as useActions, j as _toConsumableArray } from './useActions.b478cae0.js';
import { s as styleInject } from './typeof.0d5bf00d.js';
import './bare.3cea1bea.js';
import { L as List, I as Item } from './Item.f5da28fc.js';
import { p as prefixFilter } from './prefixFilter.1941fe02.js';
import './MenuSurface.829a48e6.js';
import { F as FloatingLabel, L as LineRipple, N as NotchedOutline } from './NotchedOutline.de490d77.js';
import { M as Menu } from './Menu.8d163187.js';

var css = "@keyframes mdc-select-float-native-control{0%{transform:translateY(8px);opacity:0}to{transform:translateY(0);opacity:1}}.mdc-line-ripple{position:absolute;bottom:0;left:0;width:100%;height:2px;transform:scaleX(0);transition:transform .18s cubic-bezier(.4,0,.2,1),opacity .18s cubic-bezier(.4,0,.2,1);opacity:0;z-index:2}.mdc-line-ripple--active{transform:scaleX(1);opacity:1}.mdc-line-ripple--deactivating{opacity:0}.mdc-notched-outline{display:flex;position:absolute;right:0;left:0;box-sizing:border-box;width:100%;max-width:100%;height:100%;text-align:left;pointer-events:none}.mdc-notched-outline[dir=rtl],[dir=rtl] .mdc-notched-outline{text-align:right}.mdc-notched-outline__leading,.mdc-notched-outline__notch,.mdc-notched-outline__trailing{box-sizing:border-box;height:100%;transition:border .15s cubic-bezier(.4,0,.2,1);border-top:1px solid;border-bottom:1px solid;pointer-events:none}.mdc-notched-outline__leading{border-left:1px solid;border-right:none;width:12px}.mdc-notched-outline__leading[dir=rtl],.mdc-notched-outline__trailing,[dir=rtl] .mdc-notched-outline__leading{border-left:none;border-right:1px solid}.mdc-notched-outline__trailing{flex-grow:1}.mdc-notched-outline__trailing[dir=rtl],[dir=rtl] .mdc-notched-outline__trailing{border-left:1px solid;border-right:none}.mdc-notched-outline__notch{flex:0 0 auto;width:auto;max-width:calc(100% - 24px)}.mdc-notched-outline .mdc-floating-label{display:inline-block;position:relative;top:17px;bottom:auto;max-width:100%}.mdc-notched-outline .mdc-floating-label--float-above{text-overflow:clip}.mdc-notched-outline--upgraded .mdc-floating-label--float-above{max-width:133.33333%}.mdc-notched-outline--notched .mdc-notched-outline__notch{padding-left:0;padding-right:8px;border-top:none}.mdc-notched-outline--notched .mdc-notched-outline__notch[dir=rtl],[dir=rtl] .mdc-notched-outline--notched .mdc-notched-outline__notch{padding-left:8px;padding-right:0}.mdc-notched-outline--no-label .mdc-notched-outline__notch{padding:0}.mdc-floating-label{font-family:Roboto,sans-serif;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-size:1rem;line-height:1.75rem;font-weight:400;letter-spacing:.00937em;text-decoration:inherit;text-transform:inherit;position:absolute;left:0;transform-origin:left top;transition:transform .15s cubic-bezier(.4,0,.2,1),color .15s cubic-bezier(.4,0,.2,1);line-height:1.15rem;text-align:left;text-overflow:ellipsis;white-space:nowrap;cursor:text;overflow:hidden;will-change:transform}.mdc-floating-label[dir=rtl],[dir=rtl] .mdc-floating-label{right:0;left:auto;transform-origin:right top;text-align:right}.mdc-floating-label--float-above{cursor:auto;transform:translateY(-50%) scale(.75)}.mdc-floating-label--shake{animation:mdc-floating-label-shake-float-above-standard .25s 1}@keyframes mdc-floating-label-shake-float-above-standard{0%{transform:translateX(0) translateY(-50%) scale(.75)}33%{animation-timing-function:cubic-bezier(.5,0,.70173,.49582);transform:translateX(4%) translateY(-50%) scale(.75)}66%{animation-timing-function:cubic-bezier(.30244,.38135,.55,.95635);transform:translateX(-4%) translateY(-50%) scale(.75)}to{transform:translateX(0) translateY(-50%) scale(.75)}}@keyframes mdc-ripple-fg-radius-in{0%{animation-timing-function:cubic-bezier(.4,0,.2,1);transform:translate(var(--mdc-ripple-fg-translate-start,0)) scale(1)}to{transform:translate(var(--mdc-ripple-fg-translate-end,0)) scale(var(--mdc-ripple-fg-scale,1))}}@keyframes mdc-ripple-fg-opacity-in{0%{animation-timing-function:linear;opacity:0}to{opacity:var(--mdc-ripple-fg-opacity,0)}}@keyframes mdc-ripple-fg-opacity-out{0%{animation-timing-function:linear;opacity:var(--mdc-ripple-fg-opacity,0)}to{opacity:0}}.mdc-ripple-surface--test-edge-var-bug{--mdc-ripple-surface-test-edge-var:1px solid #000;visibility:hidden}.mdc-ripple-surface--test-edge-var-bug:before{border:var(--mdc-ripple-surface-test-edge-var)}.mdc-select--with-leading-icon:not(.mdc-select--disabled) .mdc-select__icon{color:#000;color:var(--mdc-theme-on-surface,#000)}.mdc-select--with-leading-icon .mdc-select__icon{display:inline-block;position:absolute;bottom:16px;box-sizing:border-box;width:24px;height:24px;border:none;background-color:transparent;fill:currentColor;opacity:.54;text-decoration:none;cursor:pointer;user-select:none}.mdc-select__icon:not([tabindex]),.mdc-select__icon[tabindex=\"-1\"]{cursor:default;pointer-events:none}.mdc-select-helper-text{font-family:Roboto,sans-serif;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-size:.75rem;line-height:1.25rem;font-weight:400;letter-spacing:.03333em;text-decoration:inherit;text-transform:inherit;display:block;line-height:normal;margin:0;transition:opacity .18s cubic-bezier(.4,0,.2,1);opacity:0;will-change:opacity}.mdc-select-helper-text:before{display:inline-block;width:0;height:16px;content:\"\";vertical-align:0}.mdc-select-helper-text--persistent{transition:none;opacity:1;will-change:auto}.mdc-select{--mdc-ripple-fg-size:0;--mdc-ripple-left:0;--mdc-ripple-top:0;--mdc-ripple-fg-scale:1;--mdc-ripple-fg-translate-end:0;--mdc-ripple-fg-translate-start:0;-webkit-tap-highlight-color:rgba(0,0,0,0);display:inline-flex;position:relative;box-sizing:border-box;height:56px;overflow:hidden;will-change:opacity,transform,color}.mdc-select:not(.mdc-select--disabled){background-color:#f5f5f5}.mdc-select:after,.mdc-select:before{position:absolute;border-radius:50%;opacity:0;pointer-events:none;content:\"\"}.mdc-select:before{transition:opacity 15ms linear,background-color 15ms linear;z-index:1}.mdc-select.mdc-ripple-upgraded:before{transform:scale(var(--mdc-ripple-fg-scale,1))}.mdc-select.mdc-ripple-upgraded:after{top:0;left:0;transform:scale(0);transform-origin:center center}.mdc-select.mdc-ripple-upgraded--unbounded:after{top:var(--mdc-ripple-top,0);left:var(--mdc-ripple-left,0)}.mdc-select.mdc-ripple-upgraded--foreground-activation:after{animation:mdc-ripple-fg-radius-in 225ms forwards,mdc-ripple-fg-opacity-in 75ms forwards}.mdc-select.mdc-ripple-upgraded--foreground-deactivation:after{animation:mdc-ripple-fg-opacity-out .15s;transform:translate(var(--mdc-ripple-fg-translate-end,0)) scale(var(--mdc-ripple-fg-scale,1))}.mdc-select:after,.mdc-select:before{top:-50%;left:-50%;width:200%;height:200%}.mdc-select.mdc-ripple-upgraded:after{width:var(--mdc-ripple-fg-size,100%);height:var(--mdc-ripple-fg-size,100%)}.mdc-select:after,.mdc-select:before{background-color:rgba(0,0,0,.87)}.mdc-select:hover:before{opacity:.04}.mdc-select.mdc-ripple-upgraded--background-focused:before,.mdc-select:not(.mdc-ripple-upgraded):focus:before{transition-duration:75ms;opacity:.12}.mdc-select:not(.mdc-select--disabled) .mdc-select__native-control,.mdc-select:not(.mdc-select--disabled) .mdc-select__selected-text{color:rgba(0,0,0,.87)}.mdc-select:not(.mdc-select--disabled) .mdc-floating-label{color:rgba(0,0,0,.6)}.mdc-select:not(.mdc-select--disabled) .mdc-select__native-control,.mdc-select:not(.mdc-select--disabled) .mdc-select__selected-text{border-bottom-color:rgba(0,0,0,.42)}.mdc-select:not(.mdc-select--disabled)+.mdc-select-helper-text{color:rgba(0,0,0,.6)}.mdc-select,.mdc-select__native-control{border-radius:4px 4px 0 0}.mdc-select:not(.mdc-select--disabled).mdc-select--focused .mdc-line-ripple{background-color:#ff3e00;background-color:var(--mdc-theme-primary,#ff3e00)}.mdc-select:not(.mdc-select--disabled).mdc-select--focused .mdc-floating-label{color:rgba(255,62,0,.87)}.mdc-select:not(.mdc-select--disabled) .mdc-select__native-control:hover{border-bottom-color:rgba(0,0,0,.87)}.mdc-select .mdc-floating-label--float-above{transform:translateY(-70%) scale(.75)}.mdc-select .mdc-floating-label{left:16px;right:auto;top:21px;pointer-events:none}.mdc-select .mdc-floating-label[dir=rtl],[dir=rtl] .mdc-select .mdc-floating-label{left:auto;right:16px}.mdc-select.mdc-select--with-leading-icon .mdc-floating-label{left:48px;right:auto}.mdc-select.mdc-select--with-leading-icon .mdc-floating-label[dir=rtl],[dir=rtl] .mdc-select.mdc-select--with-leading-icon .mdc-floating-label{left:auto;right:48px}.mdc-select.mdc-select--outlined .mdc-floating-label{left:4px;right:auto;top:17px}.mdc-select.mdc-select--outlined .mdc-floating-label[dir=rtl],[dir=rtl] .mdc-select.mdc-select--outlined .mdc-floating-label{left:auto;right:4px}.mdc-select.mdc-select--outlined.mdc-select--with-leading-icon .mdc-floating-label{left:36px;right:auto}.mdc-select.mdc-select--outlined.mdc-select--with-leading-icon .mdc-floating-label[dir=rtl],[dir=rtl] .mdc-select.mdc-select--outlined.mdc-select--with-leading-icon .mdc-floating-label{left:auto;right:36px}.mdc-select.mdc-select--outlined.mdc-select--with-leading-icon .mdc-floating-label--float-above{left:36px;right:auto}.mdc-select.mdc-select--outlined.mdc-select--with-leading-icon .mdc-floating-label--float-above[dir=rtl],[dir=rtl] .mdc-select.mdc-select--outlined.mdc-select--with-leading-icon .mdc-floating-label--float-above{left:auto;right:36px}.mdc-select__dropdown-icon{background:url(\"data:image/svg+xml;charset=utf-8,%3Csvg width='10' height='5' viewBox='7 10 10 5' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill-rule='evenodd' opacity='.54' d='M7 10l5 5 5-5z'/%3E%3C/svg%3E\") no-repeat 50%;left:auto;right:8px;position:absolute;bottom:16px;width:24px;height:24px;transition:transform .15s cubic-bezier(.4,0,.2,1);pointer-events:none}.mdc-select__dropdown-icon[dir=rtl],[dir=rtl] .mdc-select__dropdown-icon{left:8px;right:auto}.mdc-select--focused .mdc-select__dropdown-icon{background:url(\"data:image/svg+xml;charset=utf-8,%3Csvg width='10' height='5' viewBox='7 10 10 5' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill='%23ff3e00' fill-rule='evenodd' d='M7 10l5 5 5-5z'/%3E%3C/svg%3E\") no-repeat 50%}.mdc-select--activated .mdc-select__dropdown-icon{transform:rotate(180deg) translateY(-5px);transition:transform .15s cubic-bezier(.4,0,.2,1)}.mdc-select__native-control{padding-top:20px}.mdc-select.mdc-select--focused .mdc-line-ripple:after{transform:scaleY(2);opacity:1}.mdc-select+.mdc-select-helper-text{margin-right:12px;margin-left:12px}.mdc-select--outlined+.mdc-select-helper-text{margin-right:16px;margin-left:16px}.mdc-select--focused+.mdc-select-helper-text:not(.mdc-select-helper-text--validation-msg){opacity:1}.mdc-select__selected-text{min-width:200px;padding-top:22px}.mdc-select__native-control,.mdc-select__selected-text{font-family:Roboto,sans-serif;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-size:1rem;line-height:1.75rem;font-weight:400;letter-spacing:.00937em;text-decoration:inherit;text-transform:inherit;box-sizing:border-box;width:100%;height:56px;padding:20px 52px 4px 16px;border:none;border-bottom:1px solid;outline:none;background-color:transparent;color:inherit;white-space:nowrap;cursor:pointer;appearance:none}.mdc-select__native-control[dir=rtl],.mdc-select__selected-text[dir=rtl],[dir=rtl] .mdc-select__native-control,[dir=rtl] .mdc-select__selected-text{padding-left:52px;padding-right:16px}.mdc-select__native-control::-ms-expand,.mdc-select__selected-text::-ms-expand{display:none}.mdc-select__native-control::-ms-value,.mdc-select__selected-text::-ms-value{background-color:transparent;color:inherit}@-moz-document url-prefix(\"\"){.mdc-select__native-control,.mdc-select__selected-text{text-indent:-2px}}.mdc-select--outlined{border:none;overflow:visible}.mdc-select--outlined:not(.mdc-select--disabled) .mdc-notched-outline__leading,.mdc-select--outlined:not(.mdc-select--disabled) .mdc-notched-outline__notch,.mdc-select--outlined:not(.mdc-select--disabled) .mdc-notched-outline__trailing{border-color:rgba(0,0,0,.38)}.mdc-select--outlined:not(.mdc-select--disabled):not(.mdc-select--focused) .mdc-select__native-control:hover~.mdc-notched-outline .mdc-notched-outline__leading,.mdc-select--outlined:not(.mdc-select--disabled):not(.mdc-select--focused) .mdc-select__native-control:hover~.mdc-notched-outline .mdc-notched-outline__notch,.mdc-select--outlined:not(.mdc-select--disabled):not(.mdc-select--focused) .mdc-select__native-control:hover~.mdc-notched-outline .mdc-notched-outline__trailing,.mdc-select--outlined:not(.mdc-select--disabled):not(.mdc-select--focused) .mdc-select__selected-text:hover~.mdc-notched-outline .mdc-notched-outline__leading,.mdc-select--outlined:not(.mdc-select--disabled):not(.mdc-select--focused) .mdc-select__selected-text:hover~.mdc-notched-outline .mdc-notched-outline__notch,.mdc-select--outlined:not(.mdc-select--disabled):not(.mdc-select--focused) .mdc-select__selected-text:hover~.mdc-notched-outline .mdc-notched-outline__trailing{border-color:rgba(0,0,0,.87)}.mdc-select--outlined:not(.mdc-select--disabled).mdc-select--focused .mdc-notched-outline .mdc-notched-outline__leading,.mdc-select--outlined:not(.mdc-select--disabled).mdc-select--focused .mdc-notched-outline .mdc-notched-outline__notch,.mdc-select--outlined:not(.mdc-select--disabled).mdc-select--focused .mdc-notched-outline .mdc-notched-outline__trailing{border-width:2px;border-color:#ff3e00;border-color:var(--mdc-theme-primary,#ff3e00)}.mdc-select--outlined .mdc-floating-label--shake{animation:mdc-floating-label-shake-float-above-text-field-outlined .25s 1}.mdc-select--outlined .mdc-notched-outline .mdc-notched-outline__leading{border-radius:4px 0 0 4px}.mdc-select--outlined .mdc-notched-outline .mdc-notched-outline__leading[dir=rtl],.mdc-select--outlined .mdc-notched-outline .mdc-notched-outline__trailing,[dir=rtl] .mdc-select--outlined .mdc-notched-outline .mdc-notched-outline__leading{border-radius:0 4px 4px 0}.mdc-select--outlined .mdc-notched-outline .mdc-notched-outline__trailing[dir=rtl],[dir=rtl] .mdc-select--outlined .mdc-notched-outline .mdc-notched-outline__trailing{border-radius:4px 0 0 4px}.mdc-select--outlined .mdc-select__native-control{border-radius:4px}.mdc-select--outlined:after,.mdc-select--outlined:before{content:none}.mdc-select--outlined:not(.mdc-select--disabled){background-color:transparent}.mdc-select--outlined .mdc-floating-label--float-above{transform:translateY(-144%) scale(1);font-size:.75rem}.mdc-select--outlined.mdc-notched-outline--upgraded .mdc-floating-label--float-above,.mdc-select--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above{transform:translateY(-130%) scale(.75);font-size:1rem}.mdc-select--outlined .mdc-select__native-control,.mdc-select--outlined .mdc-select__selected-text{display:flex;padding:12px 52px 12px 16px;border:none;background-color:transparent;z-index:1}.mdc-select--outlined .mdc-select__native-control[dir=rtl],.mdc-select--outlined .mdc-select__selected-text[dir=rtl],[dir=rtl] .mdc-select--outlined .mdc-select__native-control,[dir=rtl] .mdc-select--outlined .mdc-select__selected-text{padding-left:52px;padding-right:16px}.mdc-select--outlined .mdc-select__selected-text{padding-top:14px}.mdc-select--outlined .mdc-select__icon{z-index:2}.mdc-select--outlined .mdc-floating-label{line-height:1.15rem;pointer-events:auto}.mdc-select--invalid:not(.mdc-select--disabled) .mdc-floating-label{color:#b71c1c;color:var(--mdc-theme-error,#b71c1c)}.mdc-select--invalid:not(.mdc-select--disabled) .mdc-select__native-control,.mdc-select--invalid:not(.mdc-select--disabled) .mdc-select__selected-text{border-bottom-color:#b71c1c;border-bottom-color:var(--mdc-theme-error,#b71c1c)}.mdc-select--invalid:not(.mdc-select--disabled).mdc-select--focused .mdc-line-ripple{background-color:#b71c1c;background-color:var(--mdc-theme-error,#b71c1c)}.mdc-select--invalid:not(.mdc-select--disabled).mdc-select--focused .mdc-floating-label{color:#b71c1c}.mdc-select--invalid:not(.mdc-select--disabled).mdc-select--invalid+.mdc-select-helper-text--validation-msg{color:#b71c1c;color:var(--mdc-theme-error,#b71c1c)}.mdc-select--invalid:not(.mdc-select--disabled) .mdc-select__native-control:hover{border-bottom-color:#b71c1c;border-bottom-color:var(--mdc-theme-error,#b71c1c)}.mdc-select--invalid.mdc-select--outlined:not(.mdc-select--disabled) .mdc-notched-outline__leading,.mdc-select--invalid.mdc-select--outlined:not(.mdc-select--disabled) .mdc-notched-outline__notch,.mdc-select--invalid.mdc-select--outlined:not(.mdc-select--disabled) .mdc-notched-outline__trailing,.mdc-select--invalid.mdc-select--outlined:not(.mdc-select--disabled):not(.mdc-select--focused) .mdc-select__native-control:hover~.mdc-notched-outline .mdc-notched-outline__leading,.mdc-select--invalid.mdc-select--outlined:not(.mdc-select--disabled):not(.mdc-select--focused) .mdc-select__native-control:hover~.mdc-notched-outline .mdc-notched-outline__notch,.mdc-select--invalid.mdc-select--outlined:not(.mdc-select--disabled):not(.mdc-select--focused) .mdc-select__native-control:hover~.mdc-notched-outline .mdc-notched-outline__trailing,.mdc-select--invalid.mdc-select--outlined:not(.mdc-select--disabled):not(.mdc-select--focused) .mdc-select__selected-text:hover~.mdc-notched-outline .mdc-notched-outline__leading,.mdc-select--invalid.mdc-select--outlined:not(.mdc-select--disabled):not(.mdc-select--focused) .mdc-select__selected-text:hover~.mdc-notched-outline .mdc-notched-outline__notch,.mdc-select--invalid.mdc-select--outlined:not(.mdc-select--disabled):not(.mdc-select--focused) .mdc-select__selected-text:hover~.mdc-notched-outline .mdc-notched-outline__trailing{border-color:#b71c1c;border-color:var(--mdc-theme-error,#b71c1c)}.mdc-select--invalid.mdc-select--outlined:not(.mdc-select--disabled).mdc-select--focused .mdc-notched-outline .mdc-notched-outline__leading,.mdc-select--invalid.mdc-select--outlined:not(.mdc-select--disabled).mdc-select--focused .mdc-notched-outline .mdc-notched-outline__notch,.mdc-select--invalid.mdc-select--outlined:not(.mdc-select--disabled).mdc-select--focused .mdc-notched-outline .mdc-notched-outline__trailing{border-width:2px;border-color:#b71c1c;border-color:var(--mdc-theme-error,#b71c1c)}.mdc-select--invalid .mdc-select__dropdown-icon{background:url(\"data:image/svg+xml;charset=utf-8,%3Csvg width='10' height='5' viewBox='7 10 10 5' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill='%23b71c1c' fill-rule='evenodd' d='M7 10l5 5 5-5z'/%3E%3C/svg%3E\") no-repeat 50%}.mdc-select--invalid+.mdc-select-helper-text--validation-msg{opacity:1}.mdc-select--required .mdc-floating-label:after{content:\"*\"}.mdc-select--disabled{background-color:#fafafa;cursor:default;pointer-events:none}.mdc-select--disabled .mdc-floating-label{color:rgba(0,0,0,.37)}.mdc-select--disabled .mdc-select__dropdown-icon{background:url(\"data:image/svg+xml;charset=utf-8,%3Csvg width='10' height='5' viewBox='7 10 10 5' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill-rule='evenodd' opacity='.37' d='M7 10l5 5 5-5z'/%3E%3C/svg%3E\") no-repeat 50%}.mdc-select--disabled .mdc-line-ripple{display:none}.mdc-select--disabled .mdc-select__icon{color:rgba(0,0,0,.37)}.mdc-select--disabled .mdc-select__native-control,.mdc-select--disabled .mdc-select__selected-text{color:rgba(0,0,0,.37);border-bottom-style:dotted}.mdc-select--disabled .mdc-select__selected-text{pointer-events:none}.mdc-select--disabled.mdc-select--outlined{background-color:transparent}.mdc-select--disabled.mdc-select--outlined .mdc-select__native-control,.mdc-select--disabled.mdc-select--outlined .mdc-select__selected-text{border-bottom-style:none}.mdc-select--disabled.mdc-select--outlined .mdc-notched-outline__leading,.mdc-select--disabled.mdc-select--outlined .mdc-notched-outline__notch,.mdc-select--disabled.mdc-select--outlined .mdc-notched-outline__trailing{border-color:rgba(0,0,0,.16)}.mdc-select--with-leading-icon .mdc-select__icon{left:16px;right:auto}.mdc-select--with-leading-icon .mdc-select__icon[dir=rtl],[dir=rtl] .mdc-select--with-leading-icon .mdc-select__icon{left:auto;right:16px}.mdc-select--with-leading-icon .mdc-select__native-control,.mdc-select--with-leading-icon .mdc-select__selected-text{padding-left:48px;padding-right:32px}.mdc-select--with-leading-icon .mdc-select__native-control[dir=rtl],.mdc-select--with-leading-icon .mdc-select__selected-text[dir=rtl],[dir=rtl] .mdc-select--with-leading-icon .mdc-select__native-control,[dir=rtl] .mdc-select--with-leading-icon .mdc-select__selected-text{padding-left:32px;padding-right:48px}.mdc-select--with-leading-icon.mdc-select--outlined .mdc-floating-label--float-above{transform:translateY(-144%) translateX(-32px) scale(1)}.mdc-select--with-leading-icon.mdc-select--outlined .mdc-floating-label--float-above[dir=rtl],[dir=rtl] .mdc-select--with-leading-icon.mdc-select--outlined .mdc-floating-label--float-above{transform:translateY(-144%) translateX(32px) scale(1)}.mdc-select--with-leading-icon.mdc-select--outlined .mdc-floating-label--float-above{font-size:.75rem}.mdc-select--with-leading-icon.mdc-select--outlined.mdc-notched-outline--upgraded .mdc-floating-label--float-above,.mdc-select--with-leading-icon.mdc-select--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above{transform:translateY(-130%) translateX(-32px) scale(.75)}.mdc-select--with-leading-icon.mdc-select--outlined.mdc-notched-outline--upgraded .mdc-floating-label--float-above[dir=rtl],.mdc-select--with-leading-icon.mdc-select--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above[dir=rtl],[dir=rtl] .mdc-select--with-leading-icon.mdc-select--outlined.mdc-notched-outline--upgraded .mdc-floating-label--float-above,[dir=rtl] .mdc-select--with-leading-icon.mdc-select--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above{transform:translateY(-130%) translateX(32px) scale(.75)}.mdc-select--with-leading-icon.mdc-select--outlined.mdc-notched-outline--upgraded .mdc-floating-label--float-above,.mdc-select--with-leading-icon.mdc-select--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above{font-size:1rem}.mdc-select--with-leading-icon.mdc-select--outlined .mdc-floating-label--shake{animation:mdc-floating-label-shake-float-above-select-outlined-leading-icon .25s 1}.mdc-select--with-leading-icon.mdc-select--outlined[dir=rtl] .mdc-floating-label--shake,[dir=rtl] .mdc-select--with-leading-icon.mdc-select--outlined .mdc-floating-label--shake{animation:mdc-floating-label-shake-float-above-select-outlined-leading-icon-rtl .25s 1}.mdc-select--with-leading-icon.mdc-select__menu .mdc-list-item__text,.mdc-select--with-leading-icon.mdc-select__menu .mdc-list-item__text[dir=rtl],[dir=rtl] .mdc-select--with-leading-icon.mdc-select__menu .mdc-list-item__text{padding-left:32px;padding-right:32px}.mdc-select__menu .mdc-list .mdc-list-item--selected{color:#000;color:var(--mdc-theme-on-surface,#000)}.mdc-select__menu .mdc-list .mdc-list-item--selected:after,.mdc-select__menu .mdc-list .mdc-list-item--selected:before{background-color:#000}@supports not (-ms-ime-align:auto){.mdc-select__menu .mdc-list .mdc-list-item--selected:after,.mdc-select__menu .mdc-list .mdc-list-item--selected:before{background-color:var(--mdc-theme-on-surface,#000)}}.mdc-select__menu .mdc-list .mdc-list-item--selected:hover:before{opacity:.04}.mdc-select__menu .mdc-list .mdc-list-item--selected.mdc-ripple-upgraded--background-focused:before,.mdc-select__menu .mdc-list .mdc-list-item--selected:not(.mdc-ripple-upgraded):focus:before{transition-duration:75ms;opacity:.12}.mdc-select__menu .mdc-list .mdc-list-item--selected:not(.mdc-ripple-upgraded):after{transition:opacity .15s linear}.mdc-select__menu .mdc-list .mdc-list-item--selected:not(.mdc-ripple-upgraded):active:after{transition-duration:75ms;opacity:.12}.mdc-select__menu .mdc-list .mdc-list-item--selected.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:0.12}@keyframes mdc-floating-label-shake-float-above-select-outlined-leading-icon{0%{transform:translateX(-32px) translateY(-130%) scale(.75)}33%{animation-timing-function:cubic-bezier(.5,0,.70173,.49582);transform:translateX(calc(4% - 32px)) translateY(-130%) scale(.75)}66%{animation-timing-function:cubic-bezier(.30244,.38135,.55,.95635);transform:translateX(calc(-4% - 32px)) translateY(-130%) scale(.75)}to{transform:translateX(-32px) translateY(-130%) scale(.75)}}@keyframes mdc-floating-label-shake-float-above-select-outlined-leading-icon-rtl{0%{transform:translateX(32px) translateY(-130%) scale(.75)}33%{animation-timing-function:cubic-bezier(.5,0,.70173,.49582);transform:translateX(calc(4% - -32px)) translateY(-130%) scale(.75)}66%{animation-timing-function:cubic-bezier(.30244,.38135,.55,.95635);transform:translateX(calc(-4% - -32px)) translateY(-130%) scale(.75)}to{transform:translateX(32px) translateY(-130%) scale(.75)}}.mdc-list{font-family:Roboto,sans-serif;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-size:1rem;line-height:1.75rem;font-weight:400;letter-spacing:.00937em;text-decoration:inherit;text-transform:inherit;line-height:1.5rem;margin:0;padding:8px 0;list-style-type:none;color:rgba(0,0,0,.87);color:var(--mdc-theme-text-primary-on-background,rgba(0,0,0,.87))}.mdc-list:focus{outline:none}.mdc-list-item__secondary-text{color:rgba(0,0,0,.54);color:var(--mdc-theme-text-secondary-on-background,rgba(0,0,0,.54))}.mdc-list-item__graphic{background-color:transparent;color:rgba(0,0,0,.38);color:var(--mdc-theme-text-icon-on-background,rgba(0,0,0,.38))}.mdc-list-item__meta{color:rgba(0,0,0,.38);color:var(--mdc-theme-text-hint-on-background,rgba(0,0,0,.38))}.mdc-list-group__subheader{color:rgba(0,0,0,.87);color:var(--mdc-theme-text-primary-on-background,rgba(0,0,0,.87))}.mdc-list--dense{padding-top:4px;padding-bottom:4px;font-size:.812rem}.mdc-list-item{display:flex;position:relative;align-items:center;justify-content:flex-start;height:48px;padding:0 16px;overflow:hidden}.mdc-list-item:focus{outline:none}.mdc-list-item--activated,.mdc-list-item--activated .mdc-list-item__graphic,.mdc-list-item--selected,.mdc-list-item--selected .mdc-list-item__graphic{color:#ff3e00;color:var(--mdc-theme-primary,#ff3e00)}.mdc-list-item--disabled{color:rgba(0,0,0,.38);color:var(--mdc-theme-text-disabled-on-background,rgba(0,0,0,.38))}.mdc-list-item__graphic{margin-left:0;margin-right:32px;width:24px;height:24px;flex-shrink:0;align-items:center;justify-content:center;fill:currentColor}.mdc-list-item[dir=rtl] .mdc-list-item__graphic,[dir=rtl] .mdc-list-item .mdc-list-item__graphic{margin-left:32px;margin-right:0}.mdc-list .mdc-list-item__graphic{display:inline-flex}.mdc-list-item__meta{margin-left:auto;margin-right:0}.mdc-list-item__meta:not(.material-icons){font-family:Roboto,sans-serif;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-size:.75rem;line-height:1.25rem;font-weight:400;letter-spacing:.03333em;text-decoration:inherit;text-transform:inherit}.mdc-list-item[dir=rtl] .mdc-list-item__meta,[dir=rtl] .mdc-list-item .mdc-list-item__meta{margin-left:0;margin-right:auto}.mdc-list-item__text{text-overflow:ellipsis;white-space:nowrap;overflow:hidden}.mdc-list-item__text[for]{pointer-events:none}.mdc-list-item__primary-text{text-overflow:ellipsis;white-space:nowrap;overflow:hidden;margin-top:0;line-height:normal;margin-bottom:-20px;display:block}.mdc-list-item__primary-text:before{display:inline-block;width:0;height:32px;content:\"\";vertical-align:0}.mdc-list-item__primary-text:after{display:inline-block;width:0;height:20px;content:\"\";vertical-align:-20px}.mdc-list--dense .mdc-list-item__primary-text{display:block;margin-top:0;line-height:normal;margin-bottom:-20px}.mdc-list--dense .mdc-list-item__primary-text:before{display:inline-block;width:0;height:24px;content:\"\";vertical-align:0}.mdc-list--dense .mdc-list-item__primary-text:after{display:inline-block;width:0;height:20px;content:\"\";vertical-align:-20px}.mdc-list-item__secondary-text{font-family:Roboto,sans-serif;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-size:.875rem;line-height:1.25rem;font-weight:400;letter-spacing:.01786em;text-decoration:inherit;text-transform:inherit;text-overflow:ellipsis;white-space:nowrap;overflow:hidden;margin-top:0;line-height:normal;display:block}.mdc-list-item__secondary-text:before{display:inline-block;width:0;height:20px;content:\"\";vertical-align:0}.mdc-list--dense .mdc-list-item__secondary-text{display:block;margin-top:0;line-height:normal;font-size:inherit}.mdc-list--dense .mdc-list-item__secondary-text:before{display:inline-block;width:0;height:20px;content:\"\";vertical-align:0}.mdc-list--dense .mdc-list-item{height:40px}.mdc-list--dense .mdc-list-item__graphic{margin-left:0;margin-right:36px;width:20px;height:20px}.mdc-list-item[dir=rtl] .mdc-list--dense .mdc-list-item__graphic,[dir=rtl] .mdc-list-item .mdc-list--dense .mdc-list-item__graphic{margin-left:36px;margin-right:0}.mdc-list--avatar-list .mdc-list-item{height:56px}.mdc-list--avatar-list .mdc-list-item__graphic{margin-left:0;margin-right:16px;width:40px;height:40px;border-radius:50%}.mdc-list-item[dir=rtl] .mdc-list--avatar-list .mdc-list-item__graphic,[dir=rtl] .mdc-list-item .mdc-list--avatar-list .mdc-list-item__graphic{margin-left:16px;margin-right:0}.mdc-list--two-line .mdc-list-item__text{align-self:flex-start}.mdc-list--two-line .mdc-list-item{height:72px}.mdc-list--avatar-list.mdc-list--dense .mdc-list-item,.mdc-list--two-line.mdc-list--dense .mdc-list-item{height:60px}.mdc-list--avatar-list.mdc-list--dense .mdc-list-item__graphic{margin-left:0;margin-right:20px;width:36px;height:36px}.mdc-list-item[dir=rtl] .mdc-list--avatar-list.mdc-list--dense .mdc-list-item__graphic,[dir=rtl] .mdc-list-item .mdc-list--avatar-list.mdc-list--dense .mdc-list-item__graphic{margin-left:20px;margin-right:0}:not(.mdc-list--non-interactive)>:not(.mdc-list-item--disabled).mdc-list-item{cursor:pointer}a.mdc-list-item{color:inherit;text-decoration:none}.mdc-list-divider{height:0;margin:0;border:none;border-bottom:1px solid;border-bottom-color:rgba(0,0,0,.12)}.mdc-list-divider--padded{margin:0 16px}.mdc-list-divider--inset{margin-left:72px;margin-right:0;width:calc(100% - 72px)}.mdc-list-group[dir=rtl] .mdc-list-divider--inset,[dir=rtl] .mdc-list-group .mdc-list-divider--inset{margin-left:0;margin-right:72px}.mdc-list-divider--inset.mdc-list-divider--padded{width:calc(100% - 88px)}.mdc-list-group .mdc-list{padding:0}.mdc-list-group__subheader{font-family:Roboto,sans-serif;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-size:1rem;line-height:1.75rem;font-weight:400;letter-spacing:.00937em;text-decoration:inherit;text-transform:inherit;margin:.75rem 16px}:not(.mdc-list--non-interactive)>:not(.mdc-list-item--disabled).mdc-list-item{--mdc-ripple-fg-size:0;--mdc-ripple-left:0;--mdc-ripple-top:0;--mdc-ripple-fg-scale:1;--mdc-ripple-fg-translate-end:0;--mdc-ripple-fg-translate-start:0;-webkit-tap-highlight-color:rgba(0,0,0,0)}:not(.mdc-list--non-interactive)>:not(.mdc-list-item--disabled).mdc-list-item:after,:not(.mdc-list--non-interactive)>:not(.mdc-list-item--disabled).mdc-list-item:before{position:absolute;border-radius:50%;opacity:0;pointer-events:none;content:\"\"}:not(.mdc-list--non-interactive)>:not(.mdc-list-item--disabled).mdc-list-item:before{transition:opacity 15ms linear,background-color 15ms linear;z-index:1}:not(.mdc-list--non-interactive)>:not(.mdc-list-item--disabled).mdc-list-item.mdc-ripple-upgraded:before{transform:scale(var(--mdc-ripple-fg-scale,1))}:not(.mdc-list--non-interactive)>:not(.mdc-list-item--disabled).mdc-list-item.mdc-ripple-upgraded:after{top:0;left:0;transform:scale(0);transform-origin:center center}:not(.mdc-list--non-interactive)>:not(.mdc-list-item--disabled).mdc-list-item.mdc-ripple-upgraded--unbounded:after{top:var(--mdc-ripple-top,0);left:var(--mdc-ripple-left,0)}:not(.mdc-list--non-interactive)>:not(.mdc-list-item--disabled).mdc-list-item.mdc-ripple-upgraded--foreground-activation:after{animation:mdc-ripple-fg-radius-in 225ms forwards,mdc-ripple-fg-opacity-in 75ms forwards}:not(.mdc-list--non-interactive)>:not(.mdc-list-item--disabled).mdc-list-item.mdc-ripple-upgraded--foreground-deactivation:after{animation:mdc-ripple-fg-opacity-out .15s;transform:translate(var(--mdc-ripple-fg-translate-end,0)) scale(var(--mdc-ripple-fg-scale,1))}:not(.mdc-list--non-interactive)>:not(.mdc-list-item--disabled).mdc-list-item:after,:not(.mdc-list--non-interactive)>:not(.mdc-list-item--disabled).mdc-list-item:before{top:-50%;left:-50%;width:200%;height:200%}:not(.mdc-list--non-interactive)>:not(.mdc-list-item--disabled).mdc-list-item.mdc-ripple-upgraded:after{width:var(--mdc-ripple-fg-size,100%);height:var(--mdc-ripple-fg-size,100%)}:not(.mdc-list--non-interactive)>:not(.mdc-list-item--disabled).mdc-list-item:after,:not(.mdc-list--non-interactive)>:not(.mdc-list-item--disabled).mdc-list-item:before{background-color:#000}:not(.mdc-list--non-interactive)>:not(.mdc-list-item--disabled).mdc-list-item:hover:before{opacity:.04}:not(.mdc-list--non-interactive)>:not(.mdc-list-item--disabled).mdc-list-item.mdc-ripple-upgraded--background-focused:before,:not(.mdc-list--non-interactive)>:not(.mdc-list-item--disabled).mdc-list-item:not(.mdc-ripple-upgraded):focus:before{transition-duration:75ms;opacity:.12}:not(.mdc-list--non-interactive)>:not(.mdc-list-item--disabled).mdc-list-item:not(.mdc-ripple-upgraded):after{transition:opacity .15s linear}:not(.mdc-list--non-interactive)>:not(.mdc-list-item--disabled).mdc-list-item:not(.mdc-ripple-upgraded):active:after{transition-duration:75ms;opacity:.12}:not(.mdc-list--non-interactive)>:not(.mdc-list-item--disabled).mdc-list-item.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:0.12}:not(.mdc-list--non-interactive)>:not(.mdc-list-item--disabled).mdc-list-item--activated:before{opacity:.12}:not(.mdc-list--non-interactive)>:not(.mdc-list-item--disabled).mdc-list-item--activated:after,:not(.mdc-list--non-interactive)>:not(.mdc-list-item--disabled).mdc-list-item--activated:before{background-color:#ff3e00}@supports not (-ms-ime-align:auto){:not(.mdc-list--non-interactive)>:not(.mdc-list-item--disabled).mdc-list-item--activated:after,:not(.mdc-list--non-interactive)>:not(.mdc-list-item--disabled).mdc-list-item--activated:before{background-color:var(--mdc-theme-primary,#ff3e00)}}:not(.mdc-list--non-interactive)>:not(.mdc-list-item--disabled).mdc-list-item--activated:hover:before{opacity:.16}:not(.mdc-list--non-interactive)>:not(.mdc-list-item--disabled).mdc-list-item--activated.mdc-ripple-upgraded--background-focused:before,:not(.mdc-list--non-interactive)>:not(.mdc-list-item--disabled).mdc-list-item--activated:not(.mdc-ripple-upgraded):focus:before{transition-duration:75ms;opacity:.24}:not(.mdc-list--non-interactive)>:not(.mdc-list-item--disabled).mdc-list-item--activated:not(.mdc-ripple-upgraded):after{transition:opacity .15s linear}:not(.mdc-list--non-interactive)>:not(.mdc-list-item--disabled).mdc-list-item--activated:not(.mdc-ripple-upgraded):active:after{transition-duration:75ms;opacity:.24}:not(.mdc-list--non-interactive)>:not(.mdc-list-item--disabled).mdc-list-item--activated.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:0.24}:not(.mdc-list--non-interactive)>:not(.mdc-list-item--disabled).mdc-list-item--selected:before{opacity:.08}:not(.mdc-list--non-interactive)>:not(.mdc-list-item--disabled).mdc-list-item--selected:after,:not(.mdc-list--non-interactive)>:not(.mdc-list-item--disabled).mdc-list-item--selected:before{background-color:#ff3e00}@supports not (-ms-ime-align:auto){:not(.mdc-list--non-interactive)>:not(.mdc-list-item--disabled).mdc-list-item--selected:after,:not(.mdc-list--non-interactive)>:not(.mdc-list-item--disabled).mdc-list-item--selected:before{background-color:var(--mdc-theme-primary,#ff3e00)}}:not(.mdc-list--non-interactive)>:not(.mdc-list-item--disabled).mdc-list-item--selected:hover:before{opacity:.12}:not(.mdc-list--non-interactive)>:not(.mdc-list-item--disabled).mdc-list-item--selected.mdc-ripple-upgraded--background-focused:before,:not(.mdc-list--non-interactive)>:not(.mdc-list-item--disabled).mdc-list-item--selected:not(.mdc-ripple-upgraded):focus:before{transition-duration:75ms;opacity:.2}:not(.mdc-list--non-interactive)>:not(.mdc-list-item--disabled).mdc-list-item--selected:not(.mdc-ripple-upgraded):after{transition:opacity .15s linear}:not(.mdc-list--non-interactive)>:not(.mdc-list-item--disabled).mdc-list-item--selected:not(.mdc-ripple-upgraded):active:after{transition-duration:75ms;opacity:.2}:not(.mdc-list--non-interactive)>:not(.mdc-list-item--disabled).mdc-list-item--selected.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:0.2}:not(.mdc-list--non-interactive)>.mdc-list-item--disabled{--mdc-ripple-fg-size:0;--mdc-ripple-left:0;--mdc-ripple-top:0;--mdc-ripple-fg-scale:1;--mdc-ripple-fg-translate-end:0;--mdc-ripple-fg-translate-start:0;-webkit-tap-highlight-color:rgba(0,0,0,0)}:not(.mdc-list--non-interactive)>.mdc-list-item--disabled:after,:not(.mdc-list--non-interactive)>.mdc-list-item--disabled:before{position:absolute;border-radius:50%;opacity:0;pointer-events:none;content:\"\"}:not(.mdc-list--non-interactive)>.mdc-list-item--disabled:before{transition:opacity 15ms linear,background-color 15ms linear;z-index:1}:not(.mdc-list--non-interactive)>.mdc-list-item--disabled.mdc-ripple-upgraded:before{transform:scale(var(--mdc-ripple-fg-scale,1))}:not(.mdc-list--non-interactive)>.mdc-list-item--disabled.mdc-ripple-upgraded:after{top:0;left:0;transform:scale(0);transform-origin:center center}:not(.mdc-list--non-interactive)>.mdc-list-item--disabled.mdc-ripple-upgraded--unbounded:after{top:var(--mdc-ripple-top,0);left:var(--mdc-ripple-left,0)}:not(.mdc-list--non-interactive)>.mdc-list-item--disabled.mdc-ripple-upgraded--foreground-activation:after{animation:mdc-ripple-fg-radius-in 225ms forwards,mdc-ripple-fg-opacity-in 75ms forwards}:not(.mdc-list--non-interactive)>.mdc-list-item--disabled.mdc-ripple-upgraded--foreground-deactivation:after{animation:mdc-ripple-fg-opacity-out .15s;transform:translate(var(--mdc-ripple-fg-translate-end,0)) scale(var(--mdc-ripple-fg-scale,1))}:not(.mdc-list--non-interactive)>.mdc-list-item--disabled:after,:not(.mdc-list--non-interactive)>.mdc-list-item--disabled:before{top:-50%;left:-50%;width:200%;height:200%}:not(.mdc-list--non-interactive)>.mdc-list-item--disabled.mdc-ripple-upgraded:after{width:var(--mdc-ripple-fg-size,100%);height:var(--mdc-ripple-fg-size,100%)}:not(.mdc-list--non-interactive)>.mdc-list-item--disabled:after,:not(.mdc-list--non-interactive)>.mdc-list-item--disabled:before{background-color:#000}:not(.mdc-list--non-interactive)>.mdc-list-item--disabled.mdc-ripple-upgraded--background-focused:before,:not(.mdc-list--non-interactive)>.mdc-list-item--disabled:not(.mdc-ripple-upgraded):focus:before{transition-duration:75ms;opacity:.12}.mdc-ripple-surface{--mdc-ripple-fg-size:0;--mdc-ripple-left:0;--mdc-ripple-top:0;--mdc-ripple-fg-scale:1;--mdc-ripple-fg-translate-end:0;--mdc-ripple-fg-translate-start:0;-webkit-tap-highlight-color:rgba(0,0,0,0);position:relative;outline:none;overflow:hidden}.mdc-ripple-surface:after,.mdc-ripple-surface:before{position:absolute;border-radius:50%;opacity:0;pointer-events:none;content:\"\"}.mdc-ripple-surface:before{transition:opacity 15ms linear,background-color 15ms linear;z-index:1}.mdc-ripple-surface.mdc-ripple-upgraded:before{transform:scale(var(--mdc-ripple-fg-scale,1))}.mdc-ripple-surface.mdc-ripple-upgraded:after{top:0;left:0;transform:scale(0);transform-origin:center center}.mdc-ripple-surface.mdc-ripple-upgraded--unbounded:after{top:var(--mdc-ripple-top,0);left:var(--mdc-ripple-left,0)}.mdc-ripple-surface.mdc-ripple-upgraded--foreground-activation:after{animation:mdc-ripple-fg-radius-in 225ms forwards,mdc-ripple-fg-opacity-in 75ms forwards}.mdc-ripple-surface.mdc-ripple-upgraded--foreground-deactivation:after{animation:mdc-ripple-fg-opacity-out .15s;transform:translate(var(--mdc-ripple-fg-translate-end,0)) scale(var(--mdc-ripple-fg-scale,1))}.mdc-ripple-surface:after,.mdc-ripple-surface:before{background-color:#000}.mdc-ripple-surface:hover:before{opacity:.04}.mdc-ripple-surface.mdc-ripple-upgraded--background-focused:before,.mdc-ripple-surface:not(.mdc-ripple-upgraded):focus:before{transition-duration:75ms;opacity:.12}.mdc-ripple-surface:not(.mdc-ripple-upgraded):after{transition:opacity .15s linear}.mdc-ripple-surface:not(.mdc-ripple-upgraded):active:after{transition-duration:75ms;opacity:.12}.mdc-ripple-surface.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:0.12}.mdc-ripple-surface:after,.mdc-ripple-surface:before{top:-50%;left:-50%;width:200%;height:200%}.mdc-ripple-surface.mdc-ripple-upgraded:after{width:var(--mdc-ripple-fg-size,100%);height:var(--mdc-ripple-fg-size,100%)}.mdc-ripple-surface[data-mdc-ripple-is-unbounded]{overflow:visible}.mdc-ripple-surface[data-mdc-ripple-is-unbounded]:after,.mdc-ripple-surface[data-mdc-ripple-is-unbounded]:before{top:0;left:0;width:100%;height:100%}.mdc-ripple-surface[data-mdc-ripple-is-unbounded].mdc-ripple-upgraded:after,.mdc-ripple-surface[data-mdc-ripple-is-unbounded].mdc-ripple-upgraded:before{top:var(--mdc-ripple-top,0);left:var(--mdc-ripple-left,0);width:var(--mdc-ripple-fg-size,100%);height:var(--mdc-ripple-fg-size,100%)}.mdc-ripple-surface[data-mdc-ripple-is-unbounded].mdc-ripple-upgraded:after{width:var(--mdc-ripple-fg-size,100%);height:var(--mdc-ripple-fg-size,100%)}.mdc-ripple-surface--primary:after,.mdc-ripple-surface--primary:before{background-color:#ff3e00}@supports not (-ms-ime-align:auto){.mdc-ripple-surface--primary:after,.mdc-ripple-surface--primary:before{background-color:var(--mdc-theme-primary,#ff3e00)}}.mdc-ripple-surface--primary:hover:before{opacity:.04}.mdc-ripple-surface--primary.mdc-ripple-upgraded--background-focused:before,.mdc-ripple-surface--primary:not(.mdc-ripple-upgraded):focus:before{transition-duration:75ms;opacity:.12}.mdc-ripple-surface--primary:not(.mdc-ripple-upgraded):after{transition:opacity .15s linear}.mdc-ripple-surface--primary:not(.mdc-ripple-upgraded):active:after{transition-duration:75ms;opacity:.12}.mdc-ripple-surface--primary.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:0.12}.mdc-ripple-surface--accent:after,.mdc-ripple-surface--accent:before{background-color:#676778}@supports not (-ms-ime-align:auto){.mdc-ripple-surface--accent:after,.mdc-ripple-surface--accent:before{background-color:var(--mdc-theme-secondary,#676778)}}.mdc-ripple-surface--accent:hover:before{opacity:.04}.mdc-ripple-surface--accent.mdc-ripple-upgraded--background-focused:before,.mdc-ripple-surface--accent:not(.mdc-ripple-upgraded):focus:before{transition-duration:75ms;opacity:.12}.mdc-ripple-surface--accent:not(.mdc-ripple-upgraded):after{transition:opacity .15s linear}.mdc-ripple-surface--accent:not(.mdc-ripple-upgraded):active:after{transition-duration:75ms;opacity:.12}.mdc-ripple-surface--accent.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:0.12}.smui-list--three-line .mdc-list-item__text{align-self:flex-start}.smui-list--three-line .mdc-list-item{height:88px}.smui-list--three-line.mdc-list--dense .mdc-list-item{height:76px}.mdc-menu{min-width:112px}.mdc-menu .mdc-list,.mdc-menu .mdc-list-item__graphic,.mdc-menu .mdc-list-item__meta{color:rgba(0,0,0,.87)}.mdc-menu .mdc-list-divider{margin:8px 0}.mdc-menu .mdc-list-item{user-select:none}.mdc-menu .mdc-list-item--disabled{cursor:auto}@media screen and (-ms-high-contrast:active){.mdc-menu .mdc-list-item--disabled{opacity:.38}}.mdc-menu a.mdc-list-item .mdc-list-item__graphic,.mdc-menu a.mdc-list-item .mdc-list-item__text{pointer-events:none}.mdc-menu__selection-group{padding:0;fill:currentColor}.mdc-menu__selection-group .mdc-list-item{padding-left:56px;padding-right:16px}.mdc-menu__selection-group .mdc-list-item[dir=rtl],[dir=rtl] .mdc-menu__selection-group .mdc-list-item{padding-left:16px;padding-right:56px}.mdc-menu__selection-group .mdc-menu__selection-group-icon{left:16px;right:auto;display:none;position:absolute;top:50%;transform:translateY(-50%)}.mdc-menu__selection-group .mdc-menu__selection-group-icon[dir=rtl],[dir=rtl] .mdc-menu__selection-group .mdc-menu__selection-group-icon{left:auto;right:16px}.mdc-menu-item--selected .mdc-menu__selection-group-icon{display:inline}.mdc-menu-surface{display:none;position:absolute;box-sizing:border-box;max-width:calc(100vw - 32px);max-height:calc(100vh - 32px);margin:0;padding:0;transform:scale(1);transform-origin:top left;opacity:0;overflow:auto;will-change:transform,opacity;z-index:8;transition:opacity .03s linear,transform .12s cubic-bezier(0,0,.2,1);box-shadow:0 5px 5px -3px rgba(0,0,0,.2),0 8px 10px 1px rgba(0,0,0,.14),0 3px 14px 2px rgba(0,0,0,.12);background-color:#fff;background-color:var(--mdc-theme-surface,#fff);color:#000;color:var(--mdc-theme-on-surface,#000);border-radius:4px;transform-origin-left:top left;transform-origin-right:top right}.mdc-menu-surface:focus{outline:none}.mdc-menu-surface--open{display:inline-block;transform:scale(1);opacity:1}.mdc-menu-surface--animating-open{display:inline-block;transform:scale(.8);opacity:0}.mdc-menu-surface--animating-closed{display:inline-block;opacity:0;transition:opacity 75ms linear}.mdc-menu-surface[dir=rtl],[dir=rtl] .mdc-menu-surface{transform-origin-left:top right;transform-origin-right:top left}.mdc-menu-surface--anchor{position:relative;overflow:visible}.mdc-menu-surface--fixed{position:fixed}.smui-menu-surface--static{position:static;z-index:0;display:inline-block;transform:scale(1);opacity:1}.mdc-select__native-control{-webkit-appearance:none;-moz-appearance:none;appearance:none}.smui-select--standard:after,.smui-select--standard:before{content:none}.smui-select--standard.mdc-select--disabled,.smui-select--standard:not(.mdc-select--disabled){background-color:transparent}.smui-select--standard .mdc-select__native-control,.smui-select--standard .mdc-select__selected-text{padding-left:0;padding-right:36px}.smui-select--standard .mdc-select__native-control[dir=rtl],.smui-select--standard .mdc-select__selected-text[dir=rtl],[dir=rtl] .smui-select--standard .mdc-select__native-control,[dir=rtl] .smui-select--standard .mdc-select__selected-text{padding-left:36px;padding-right:0}.smui-select--standard.mdc-select--with-leading-icon .mdc-select__native-control,.smui-select--standard.mdc-select--with-leading-icon .mdc-select__selected-text{padding-left:32px;padding-right:36px}.smui-select--standard.mdc-select--with-leading-icon .mdc-select__native-control[dir=rtl],.smui-select--standard.mdc-select--with-leading-icon .mdc-select__selected-text[dir=rtl],[dir=rtl] .smui-select--standard.mdc-select--with-leading-icon .mdc-select__native-control,[dir=rtl] .smui-select--standard.mdc-select--with-leading-icon .mdc-select__selected-text{padding-left:36px;padding-right:32px}.smui-select--standard .mdc-select__dropdown-icon{left:auto;right:0}.smui-select--standard .mdc-floating-label,.smui-select--standard .mdc-select__dropdown-icon[dir=rtl],[dir=rtl] .smui-select--standard .mdc-select__dropdown-icon{left:0;right:auto}.smui-select--standard .mdc-floating-label[dir=rtl],[dir=rtl] .smui-select--standard .mdc-floating-label{left:auto;right:0}.smui-select--standard.mdc-select--with-leading-icon .mdc-floating-label{left:32px;right:auto}.smui-select--standard.mdc-select--with-leading-icon .mdc-floating-label[dir=rtl],[dir=rtl] .smui-select--standard.mdc-select--with-leading-icon .mdc-floating-label{left:auto;right:32px}.smui-select--standard.mdc-select--with-leading-icon .mdc-select__icon{left:0;right:auto}.smui-select--standard.mdc-select--with-leading-icon .mdc-select__icon[dir=rtl],[dir=rtl] .smui-select--standard.mdc-select--with-leading-icon .mdc-select__icon{left:auto;right:0}.smui-select--standard+.mdc-select-helper-line{padding-left:0;padding-right:0}";
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
function __values(o) {
  var m = typeof Symbol === "function" && o[Symbol.iterator],
      i = 0;
  if (m) return m.call(o);
  return {
    next: function next() {
      if (o && i >= o.length) o = void 0;
      return {
        value: o && o[i++],
        done: !o
      };
    }
  };
}
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
var cssClasses = {
  LABEL_FLOAT_ABOVE: 'mdc-floating-label--float-above',
  LABEL_SHAKE: 'mdc-floating-label--shake',
  ROOT: 'mdc-floating-label'
};

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

var MDCFloatingLabelFoundation =
/** @class */
function (_super) {
  __extends(MDCFloatingLabelFoundation, _super);

  function MDCFloatingLabelFoundation(adapter) {
    var _this = _super.call(this, _assign({}, MDCFloatingLabelFoundation.defaultAdapter, adapter)) || this;

    _this.shakeAnimationEndHandler_ = function () {
      return _this.handleShakeAnimationEnd_();
    };

    return _this;
  }

  Object.defineProperty(MDCFloatingLabelFoundation, "cssClasses", {
    get: function get() {
      return cssClasses;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(MDCFloatingLabelFoundation, "defaultAdapter", {
    /**
     * See {@link MDCFloatingLabelAdapter} for typing information on parameters and return types.
     */
    get: function get() {
      // tslint:disable:object-literal-sort-keys Methods should be in the same order as the adapter interface.
      return {
        addClass: function addClass() {
          return undefined;
        },
        removeClass: function removeClass() {
          return undefined;
        },
        getWidth: function getWidth() {
          return 0;
        },
        registerInteractionHandler: function registerInteractionHandler() {
          return undefined;
        },
        deregisterInteractionHandler: function deregisterInteractionHandler() {
          return undefined;
        }
      }; // tslint:enable:object-literal-sort-keys
    },
    enumerable: true,
    configurable: true
  });

  MDCFloatingLabelFoundation.prototype.init = function () {
    this.adapter_.registerInteractionHandler('animationend', this.shakeAnimationEndHandler_);
  };

  MDCFloatingLabelFoundation.prototype.destroy = function () {
    this.adapter_.deregisterInteractionHandler('animationend', this.shakeAnimationEndHandler_);
  };
  /**
   * Returns the width of the label element.
   */


  MDCFloatingLabelFoundation.prototype.getWidth = function () {
    return this.adapter_.getWidth();
  };
  /**
   * Styles the label to produce a shake animation to indicate an error.
   * @param shouldShake If true, adds the shake CSS class; otherwise, removes shake class.
   */


  MDCFloatingLabelFoundation.prototype.shake = function (shouldShake) {
    var LABEL_SHAKE = MDCFloatingLabelFoundation.cssClasses.LABEL_SHAKE;

    if (shouldShake) {
      this.adapter_.addClass(LABEL_SHAKE);
    } else {
      this.adapter_.removeClass(LABEL_SHAKE);
    }
  };
  /**
   * Styles the label to float or dock.
   * @param shouldFloat If true, adds the float CSS class; otherwise, removes float and shake classes to dock the label.
   */


  MDCFloatingLabelFoundation.prototype.float = function (shouldFloat) {
    var _a = MDCFloatingLabelFoundation.cssClasses,
        LABEL_FLOAT_ABOVE = _a.LABEL_FLOAT_ABOVE,
        LABEL_SHAKE = _a.LABEL_SHAKE;

    if (shouldFloat) {
      this.adapter_.addClass(LABEL_FLOAT_ABOVE);
    } else {
      this.adapter_.removeClass(LABEL_FLOAT_ABOVE);
      this.adapter_.removeClass(LABEL_SHAKE);
    }
  };

  MDCFloatingLabelFoundation.prototype.handleShakeAnimationEnd_ = function () {
    var LABEL_SHAKE = MDCFloatingLabelFoundation.cssClasses.LABEL_SHAKE;
    this.adapter_.removeClass(LABEL_SHAKE);
  };

  return MDCFloatingLabelFoundation;
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

var MDCFloatingLabel =
/** @class */
function (_super) {
  __extends(MDCFloatingLabel, _super);

  function MDCFloatingLabel() {
    return _super !== null && _super.apply(this, arguments) || this;
  }

  MDCFloatingLabel.attachTo = function (root) {
    return new MDCFloatingLabel(root);
  };
  /**
   * Styles the label to produce the label shake for errors.
   * @param shouldShake If true, shakes the label by adding a CSS class; otherwise, stops shaking by removing the class.
   */


  MDCFloatingLabel.prototype.shake = function (shouldShake) {
    this.foundation_.shake(shouldShake);
  };
  /**
   * Styles the label to float/dock.
   * @param shouldFloat If true, floats the label by adding a CSS class; otherwise, docks it by removing the class.
   */


  MDCFloatingLabel.prototype.float = function (shouldFloat) {
    this.foundation_.float(shouldFloat);
  };

  MDCFloatingLabel.prototype.getWidth = function () {
    return this.foundation_.getWidth();
  };

  MDCFloatingLabel.prototype.getDefaultFoundation = function () {
    var _this = this; // DO NOT INLINE this variable. For backward compatibility, foundations take a Partial<MDCFooAdapter>.
    // To ensure we don't accidentally omit any methods, we need a separate, strongly typed adapter variable.
    // tslint:disable:object-literal-sort-keys Methods should be in the same order as the adapter interface.


    var adapter = {
      addClass: function addClass(className) {
        return _this.root_.classList.add(className);
      },
      removeClass: function removeClass(className) {
        return _this.root_.classList.remove(className);
      },
      getWidth: function getWidth() {
        return _this.root_.scrollWidth;
      },
      registerInteractionHandler: function registerInteractionHandler(evtType, handler) {
        return _this.listen(evtType, handler);
      },
      deregisterInteractionHandler: function deregisterInteractionHandler(evtType, handler) {
        return _this.unlisten(evtType, handler);
      }
    }; // tslint:enable:object-literal-sort-keys

    return new MDCFloatingLabelFoundation(adapter);
  };

  return MDCFloatingLabel;
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
var cssClasses$1 = {
  LINE_RIPPLE_ACTIVE: 'mdc-line-ripple--active',
  LINE_RIPPLE_DEACTIVATING: 'mdc-line-ripple--deactivating'
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

var MDCLineRippleFoundation =
/** @class */
function (_super) {
  __extends(MDCLineRippleFoundation, _super);

  function MDCLineRippleFoundation(adapter) {
    var _this = _super.call(this, _assign({}, MDCLineRippleFoundation.defaultAdapter, adapter)) || this;

    _this.transitionEndHandler_ = function (evt) {
      return _this.handleTransitionEnd(evt);
    };

    return _this;
  }

  Object.defineProperty(MDCLineRippleFoundation, "cssClasses", {
    get: function get() {
      return cssClasses$1;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(MDCLineRippleFoundation, "defaultAdapter", {
    /**
     * See {@link MDCLineRippleAdapter} for typing information on parameters and return types.
     */
    get: function get() {
      // tslint:disable:object-literal-sort-keys Methods should be in the same order as the adapter interface.
      return {
        addClass: function addClass() {
          return undefined;
        },
        removeClass: function removeClass() {
          return undefined;
        },
        hasClass: function hasClass() {
          return false;
        },
        setStyle: function setStyle() {
          return undefined;
        },
        registerEventHandler: function registerEventHandler() {
          return undefined;
        },
        deregisterEventHandler: function deregisterEventHandler() {
          return undefined;
        }
      }; // tslint:enable:object-literal-sort-keys
    },
    enumerable: true,
    configurable: true
  });

  MDCLineRippleFoundation.prototype.init = function () {
    this.adapter_.registerEventHandler('transitionend', this.transitionEndHandler_);
  };

  MDCLineRippleFoundation.prototype.destroy = function () {
    this.adapter_.deregisterEventHandler('transitionend', this.transitionEndHandler_);
  };

  MDCLineRippleFoundation.prototype.activate = function () {
    this.adapter_.removeClass(cssClasses$1.LINE_RIPPLE_DEACTIVATING);
    this.adapter_.addClass(cssClasses$1.LINE_RIPPLE_ACTIVE);
  };

  MDCLineRippleFoundation.prototype.setRippleCenter = function (xCoordinate) {
    this.adapter_.setStyle('transform-origin', xCoordinate + "px center");
  };

  MDCLineRippleFoundation.prototype.deactivate = function () {
    this.adapter_.addClass(cssClasses$1.LINE_RIPPLE_DEACTIVATING);
  };

  MDCLineRippleFoundation.prototype.handleTransitionEnd = function (evt) {
    // Wait for the line ripple to be either transparent or opaque
    // before emitting the animation end event
    var isDeactivating = this.adapter_.hasClass(cssClasses$1.LINE_RIPPLE_DEACTIVATING);

    if (evt.propertyName === 'opacity') {
      if (isDeactivating) {
        this.adapter_.removeClass(cssClasses$1.LINE_RIPPLE_ACTIVE);
        this.adapter_.removeClass(cssClasses$1.LINE_RIPPLE_DEACTIVATING);
      }
    }
  };

  return MDCLineRippleFoundation;
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

var MDCLineRipple =
/** @class */
function (_super) {
  __extends(MDCLineRipple, _super);

  function MDCLineRipple() {
    return _super !== null && _super.apply(this, arguments) || this;
  }

  MDCLineRipple.attachTo = function (root) {
    return new MDCLineRipple(root);
  };
  /**
   * Activates the line ripple
   */


  MDCLineRipple.prototype.activate = function () {
    this.foundation_.activate();
  };
  /**
   * Deactivates the line ripple
   */


  MDCLineRipple.prototype.deactivate = function () {
    this.foundation_.deactivate();
  };
  /**
   * Sets the transform origin given a user's click location.
   * The `rippleCenter` is the x-coordinate of the middle of the ripple.
   */


  MDCLineRipple.prototype.setRippleCenter = function (xCoordinate) {
    this.foundation_.setRippleCenter(xCoordinate);
  };

  MDCLineRipple.prototype.getDefaultFoundation = function () {
    var _this = this; // DO NOT INLINE this variable. For backward compatibility, foundations take a Partial<MDCFooAdapter>.
    // To ensure we don't accidentally omit any methods, we need a separate, strongly typed adapter variable.
    // tslint:disable:object-literal-sort-keys Methods should be in the same order as the adapter interface.


    var adapter = {
      addClass: function addClass(className) {
        return _this.root_.classList.add(className);
      },
      removeClass: function removeClass(className) {
        return _this.root_.classList.remove(className);
      },
      hasClass: function hasClass(className) {
        return _this.root_.classList.contains(className);
      },
      setStyle: function setStyle(propertyName, value) {
        return _this.root_.style.setProperty(propertyName, value);
      },
      registerEventHandler: function registerEventHandler(evtType, handler) {
        return _this.listen(evtType, handler);
      },
      deregisterEventHandler: function deregisterEventHandler(evtType, handler) {
        return _this.unlisten(evtType, handler);
      }
    }; // tslint:enable:object-literal-sort-keys

    return new MDCLineRippleFoundation(adapter);
  };

  return MDCLineRipple;
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
var cssClasses$2 = {
  ANCHOR: 'mdc-menu-surface--anchor',
  ANIMATING_CLOSED: 'mdc-menu-surface--animating-closed',
  ANIMATING_OPEN: 'mdc-menu-surface--animating-open',
  FIXED: 'mdc-menu-surface--fixed',
  OPEN: 'mdc-menu-surface--open',
  ROOT: 'mdc-menu-surface'
}; // tslint:disable:object-literal-sort-keys

var strings = {
  CLOSED_EVENT: 'MDCMenuSurface:closed',
  OPENED_EVENT: 'MDCMenuSurface:opened',
  FOCUSABLE_ELEMENTS: ['button:not(:disabled)', '[href]:not([aria-disabled="true"])', 'input:not(:disabled)', 'select:not(:disabled)', 'textarea:not(:disabled)', '[tabindex]:not([tabindex="-1"]):not([aria-disabled="true"])'].join(', ')
}; // tslint:enable:object-literal-sort-keys

var numbers = {
  /** Total duration of menu-surface open animation. */
  TRANSITION_OPEN_DURATION: 120,

  /** Total duration of menu-surface close animation. */
  TRANSITION_CLOSE_DURATION: 75,

  /** Margin left to the edge of the viewport when menu-surface is at maximum possible height. */
  MARGIN_TO_EDGE: 32,

  /** Ratio of anchor width to menu-surface width for switching from corner positioning to center positioning. */
  ANCHOR_TO_MENU_SURFACE_WIDTH_RATIO: 0.67
};
/**
 * Enum for bits in the {@see Corner) bitmap.
 */

var CornerBit;

(function (CornerBit) {
  CornerBit[CornerBit["BOTTOM"] = 1] = "BOTTOM";
  CornerBit[CornerBit["CENTER"] = 2] = "CENTER";
  CornerBit[CornerBit["RIGHT"] = 4] = "RIGHT";
  CornerBit[CornerBit["FLIP_RTL"] = 8] = "FLIP_RTL";
})(CornerBit || (CornerBit = {}));
/**
 * Enum for representing an element corner for positioning the menu-surface.
 *
 * The START constants map to LEFT if element directionality is left
 * to right and RIGHT if the directionality is right to left.
 * Likewise END maps to RIGHT or LEFT depending on the directionality.
 */


var Corner;

(function (Corner) {
  Corner[Corner["TOP_LEFT"] = 0] = "TOP_LEFT";
  Corner[Corner["TOP_RIGHT"] = 4] = "TOP_RIGHT";
  Corner[Corner["BOTTOM_LEFT"] = 1] = "BOTTOM_LEFT";
  Corner[Corner["BOTTOM_RIGHT"] = 5] = "BOTTOM_RIGHT";
  Corner[Corner["TOP_START"] = 8] = "TOP_START";
  Corner[Corner["TOP_END"] = 12] = "TOP_END";
  Corner[Corner["BOTTOM_START"] = 9] = "BOTTOM_START";
  Corner[Corner["BOTTOM_END"] = 13] = "BOTTOM_END";
})(Corner || (Corner = {}));

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
var cssClasses$3 = {
  LIST_ITEM_ACTIVATED_CLASS: 'mdc-list-item--activated',
  LIST_ITEM_CLASS: 'mdc-list-item',
  LIST_ITEM_DISABLED_CLASS: 'mdc-list-item--disabled',
  LIST_ITEM_SELECTED_CLASS: 'mdc-list-item--selected',
  ROOT: 'mdc-list'
};
var strings$1 = {
  ACTION_EVENT: 'MDCList:action',
  ARIA_CHECKED: 'aria-checked',
  ARIA_CHECKED_CHECKBOX_SELECTOR: '[role="checkbox"][aria-checked="true"]',
  ARIA_CHECKED_RADIO_SELECTOR: '[role="radio"][aria-checked="true"]',
  ARIA_CURRENT: 'aria-current',
  ARIA_DISABLED: 'aria-disabled',
  ARIA_ORIENTATION: 'aria-orientation',
  ARIA_ORIENTATION_HORIZONTAL: 'horizontal',
  ARIA_ROLE_CHECKBOX_SELECTOR: '[role="checkbox"]',
  ARIA_SELECTED: 'aria-selected',
  CHECKBOX_RADIO_SELECTOR: 'input[type="checkbox"]:not(:disabled), input[type="radio"]:not(:disabled)',
  CHECKBOX_SELECTOR: 'input[type="checkbox"]:not(:disabled)',
  CHILD_ELEMENTS_TO_TOGGLE_TABINDEX: "\n    ." + cssClasses$3.LIST_ITEM_CLASS + " button:not(:disabled),\n    ." + cssClasses$3.LIST_ITEM_CLASS + " a\n  ",
  FOCUSABLE_CHILD_ELEMENTS: "\n    ." + cssClasses$3.LIST_ITEM_CLASS + " button:not(:disabled),\n    ." + cssClasses$3.LIST_ITEM_CLASS + " a,\n    ." + cssClasses$3.LIST_ITEM_CLASS + " input[type=\"radio\"]:not(:disabled),\n    ." + cssClasses$3.LIST_ITEM_CLASS + " input[type=\"checkbox\"]:not(:disabled)\n  ",
  RADIO_SELECTOR: 'input[type="radio"]:not(:disabled)'
};
var numbers$1 = {
  UNSET_INDEX: -1
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
var ELEMENTS_KEY_ALLOWED_IN = ['input', 'button', 'textarea', 'select'];

function isNumberArray(selectedIndex) {
  return selectedIndex instanceof Array;
}

var MDCListFoundation =
/** @class */
function (_super) {
  __extends(MDCListFoundation, _super);

  function MDCListFoundation(adapter) {
    var _this = _super.call(this, _assign({}, MDCListFoundation.defaultAdapter, adapter)) || this;

    _this.wrapFocus_ = false;
    _this.isVertical_ = true;
    _this.isSingleSelectionList_ = false;
    _this.selectedIndex_ = numbers$1.UNSET_INDEX;
    _this.focusedItemIndex_ = numbers$1.UNSET_INDEX;
    _this.useActivatedClass_ = false;
    _this.ariaCurrentAttrValue_ = null;
    _this.isCheckboxList_ = false;
    _this.isRadioList_ = false;
    return _this;
  }

  Object.defineProperty(MDCListFoundation, "strings", {
    get: function get() {
      return strings$1;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(MDCListFoundation, "cssClasses", {
    get: function get() {
      return cssClasses$3;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(MDCListFoundation, "numbers", {
    get: function get() {
      return numbers$1;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(MDCListFoundation, "defaultAdapter", {
    get: function get() {
      return {
        addClassForElementIndex: function addClassForElementIndex() {
          return undefined;
        },
        focusItemAtIndex: function focusItemAtIndex() {
          return undefined;
        },
        getAttributeForElementIndex: function getAttributeForElementIndex() {
          return null;
        },
        getFocusedElementIndex: function getFocusedElementIndex() {
          return 0;
        },
        getListItemCount: function getListItemCount() {
          return 0;
        },
        hasCheckboxAtIndex: function hasCheckboxAtIndex() {
          return false;
        },
        hasRadioAtIndex: function hasRadioAtIndex() {
          return false;
        },
        isCheckboxCheckedAtIndex: function isCheckboxCheckedAtIndex() {
          return false;
        },
        isFocusInsideList: function isFocusInsideList() {
          return false;
        },
        isRootFocused: function isRootFocused() {
          return false;
        },
        notifyAction: function notifyAction() {
          return undefined;
        },
        removeClassForElementIndex: function removeClassForElementIndex() {
          return undefined;
        },
        setAttributeForElementIndex: function setAttributeForElementIndex() {
          return undefined;
        },
        setCheckedCheckboxOrRadioAtIndex: function setCheckedCheckboxOrRadioAtIndex() {
          return undefined;
        },
        setTabIndexForListItemChildren: function setTabIndexForListItemChildren() {
          return undefined;
        }
      };
    },
    enumerable: true,
    configurable: true
  });

  MDCListFoundation.prototype.layout = function () {
    if (this.adapter_.getListItemCount() === 0) {
      return;
    }

    if (this.adapter_.hasCheckboxAtIndex(0)) {
      this.isCheckboxList_ = true;
    } else if (this.adapter_.hasRadioAtIndex(0)) {
      this.isRadioList_ = true;
    }
  };
  /**
   * Sets the private wrapFocus_ variable.
   */


  MDCListFoundation.prototype.setWrapFocus = function (value) {
    this.wrapFocus_ = value;
  };
  /**
   * Sets the isVertical_ private variable.
   */


  MDCListFoundation.prototype.setVerticalOrientation = function (value) {
    this.isVertical_ = value;
  };
  /**
   * Sets the isSingleSelectionList_ private variable.
   */


  MDCListFoundation.prototype.setSingleSelection = function (value) {
    this.isSingleSelectionList_ = value;
  };
  /**
   * Sets the useActivatedClass_ private variable.
   */


  MDCListFoundation.prototype.setUseActivatedClass = function (useActivated) {
    this.useActivatedClass_ = useActivated;
  };

  MDCListFoundation.prototype.getSelectedIndex = function () {
    return this.selectedIndex_;
  };

  MDCListFoundation.prototype.setSelectedIndex = function (index) {
    if (!this.isIndexValid_(index)) {
      return;
    }

    if (this.isCheckboxList_) {
      this.setCheckboxAtIndex_(index);
    } else if (this.isRadioList_) {
      this.setRadioAtIndex_(index);
    } else {
      this.setSingleSelectionAtIndex_(index);
    }
  };
  /**
   * Focus in handler for the list items.
   */


  MDCListFoundation.prototype.handleFocusIn = function (_, listItemIndex) {
    if (listItemIndex >= 0) {
      this.adapter_.setTabIndexForListItemChildren(listItemIndex, '0');
    }
  };
  /**
   * Focus out handler for the list items.
   */


  MDCListFoundation.prototype.handleFocusOut = function (_, listItemIndex) {
    var _this = this;

    if (listItemIndex >= 0) {
      this.adapter_.setTabIndexForListItemChildren(listItemIndex, '-1');
    }
    /**
     * Between Focusout & Focusin some browsers do not have focus on any element. Setting a delay to wait till the focus
     * is moved to next element.
     */


    setTimeout(function () {
      if (!_this.adapter_.isFocusInsideList()) {
        _this.setTabindexToFirstSelectedItem_();
      }
    }, 0);
  };
  /**
   * Key handler for the list.
   */


  MDCListFoundation.prototype.handleKeydown = function (evt, isRootListItem, listItemIndex) {
    var isArrowLeft = evt.key === 'ArrowLeft' || evt.keyCode === 37;
    var isArrowUp = evt.key === 'ArrowUp' || evt.keyCode === 38;
    var isArrowRight = evt.key === 'ArrowRight' || evt.keyCode === 39;
    var isArrowDown = evt.key === 'ArrowDown' || evt.keyCode === 40;
    var isHome = evt.key === 'Home' || evt.keyCode === 36;
    var isEnd = evt.key === 'End' || evt.keyCode === 35;
    var isEnter = evt.key === 'Enter' || evt.keyCode === 13;
    var isSpace = evt.key === 'Space' || evt.keyCode === 32;

    if (this.adapter_.isRootFocused()) {
      if (isArrowUp || isEnd) {
        evt.preventDefault();
        this.focusLastElement();
      } else if (isArrowDown || isHome) {
        evt.preventDefault();
        this.focusFirstElement();
      }

      return;
    }

    var currentIndex = this.adapter_.getFocusedElementIndex();

    if (currentIndex === -1) {
      currentIndex = listItemIndex;

      if (currentIndex < 0) {
        // If this event doesn't have a mdc-list-item ancestor from the
        // current list (not from a sublist), return early.
        return;
      }
    }

    var nextIndex;

    if (this.isVertical_ && isArrowDown || !this.isVertical_ && isArrowRight) {
      this.preventDefaultEvent_(evt);
      nextIndex = this.focusNextElement(currentIndex);
    } else if (this.isVertical_ && isArrowUp || !this.isVertical_ && isArrowLeft) {
      this.preventDefaultEvent_(evt);
      nextIndex = this.focusPrevElement(currentIndex);
    } else if (isHome) {
      this.preventDefaultEvent_(evt);
      nextIndex = this.focusFirstElement();
    } else if (isEnd) {
      this.preventDefaultEvent_(evt);
      nextIndex = this.focusLastElement();
    } else if (isEnter || isSpace) {
      if (isRootListItem) {
        // Return early if enter key is pressed on anchor element which triggers synthetic MouseEvent event.
        var target = evt.target;

        if (target && target.tagName === 'A' && isEnter) {
          return;
        }

        this.preventDefaultEvent_(evt);

        if (this.isSelectableList_()) {
          this.setSelectedIndexOnAction_(currentIndex);
        }

        this.adapter_.notifyAction(currentIndex);
      }
    }

    this.focusedItemIndex_ = currentIndex;

    if (nextIndex !== undefined) {
      this.setTabindexAtIndex_(nextIndex);
      this.focusedItemIndex_ = nextIndex;
    }
  };
  /**
   * Click handler for the list.
   */


  MDCListFoundation.prototype.handleClick = function (index, toggleCheckbox) {
    if (index === numbers$1.UNSET_INDEX) {
      return;
    }

    if (this.isSelectableList_()) {
      this.setSelectedIndexOnAction_(index, toggleCheckbox);
    }

    this.adapter_.notifyAction(index);
    this.setTabindexAtIndex_(index);
    this.focusedItemIndex_ = index;
  };
  /**
   * Focuses the next element on the list.
   */


  MDCListFoundation.prototype.focusNextElement = function (index) {
    var count = this.adapter_.getListItemCount();
    var nextIndex = index + 1;

    if (nextIndex >= count) {
      if (this.wrapFocus_) {
        nextIndex = 0;
      } else {
        // Return early because last item is already focused.
        return index;
      }
    }

    this.adapter_.focusItemAtIndex(nextIndex);
    return nextIndex;
  };
  /**
   * Focuses the previous element on the list.
   */


  MDCListFoundation.prototype.focusPrevElement = function (index) {
    var prevIndex = index - 1;

    if (prevIndex < 0) {
      if (this.wrapFocus_) {
        prevIndex = this.adapter_.getListItemCount() - 1;
      } else {
        // Return early because first item is already focused.
        return index;
      }
    }

    this.adapter_.focusItemAtIndex(prevIndex);
    return prevIndex;
  };

  MDCListFoundation.prototype.focusFirstElement = function () {
    this.adapter_.focusItemAtIndex(0);
    return 0;
  };

  MDCListFoundation.prototype.focusLastElement = function () {
    var lastIndex = this.adapter_.getListItemCount() - 1;
    this.adapter_.focusItemAtIndex(lastIndex);
    return lastIndex;
  };
  /**
   * @param itemIndex Index of the list item
   * @param isEnabled Sets the list item to enabled or disabled.
   */


  MDCListFoundation.prototype.setEnabled = function (itemIndex, isEnabled) {
    if (!this.isIndexValid_(itemIndex)) {
      return;
    }

    if (isEnabled) {
      this.adapter_.removeClassForElementIndex(itemIndex, cssClasses$3.LIST_ITEM_DISABLED_CLASS);
      this.adapter_.setAttributeForElementIndex(itemIndex, strings$1.ARIA_DISABLED, 'false');
    } else {
      this.adapter_.addClassForElementIndex(itemIndex, cssClasses$3.LIST_ITEM_DISABLED_CLASS);
      this.adapter_.setAttributeForElementIndex(itemIndex, strings$1.ARIA_DISABLED, 'true');
    }
  };
  /**
   * Ensures that preventDefault is only called if the containing element doesn't
   * consume the event, and it will cause an unintended scroll.
   */


  MDCListFoundation.prototype.preventDefaultEvent_ = function (evt) {
    var target = evt.target;
    var tagName = ("" + target.tagName).toLowerCase();

    if (ELEMENTS_KEY_ALLOWED_IN.indexOf(tagName) === -1) {
      evt.preventDefault();
    }
  };

  MDCListFoundation.prototype.setSingleSelectionAtIndex_ = function (index) {
    if (this.selectedIndex_ === index) {
      return;
    }

    var selectedClassName = cssClasses$3.LIST_ITEM_SELECTED_CLASS;

    if (this.useActivatedClass_) {
      selectedClassName = cssClasses$3.LIST_ITEM_ACTIVATED_CLASS;
    }

    if (this.selectedIndex_ !== numbers$1.UNSET_INDEX) {
      this.adapter_.removeClassForElementIndex(this.selectedIndex_, selectedClassName);
    }

    this.adapter_.addClassForElementIndex(index, selectedClassName);
    this.setAriaForSingleSelectionAtIndex_(index);
    this.selectedIndex_ = index;
  };
  /**
   * Sets aria attribute for single selection at given index.
   */


  MDCListFoundation.prototype.setAriaForSingleSelectionAtIndex_ = function (index) {
    // Detect the presence of aria-current and get the value only during list initialization when it is in unset state.
    if (this.selectedIndex_ === numbers$1.UNSET_INDEX) {
      this.ariaCurrentAttrValue_ = this.adapter_.getAttributeForElementIndex(index, strings$1.ARIA_CURRENT);
    }

    var isAriaCurrent = this.ariaCurrentAttrValue_ !== null;
    var ariaAttribute = isAriaCurrent ? strings$1.ARIA_CURRENT : strings$1.ARIA_SELECTED;

    if (this.selectedIndex_ !== numbers$1.UNSET_INDEX) {
      this.adapter_.setAttributeForElementIndex(this.selectedIndex_, ariaAttribute, 'false');
    }

    var ariaAttributeValue = isAriaCurrent ? this.ariaCurrentAttrValue_ : 'true';
    this.adapter_.setAttributeForElementIndex(index, ariaAttribute, ariaAttributeValue);
  };
  /**
   * Toggles radio at give index. Radio doesn't change the checked state if it is already checked.
   */


  MDCListFoundation.prototype.setRadioAtIndex_ = function (index) {
    this.adapter_.setCheckedCheckboxOrRadioAtIndex(index, true);

    if (this.selectedIndex_ !== numbers$1.UNSET_INDEX) {
      this.adapter_.setAttributeForElementIndex(this.selectedIndex_, strings$1.ARIA_CHECKED, 'false');
    }

    this.adapter_.setAttributeForElementIndex(index, strings$1.ARIA_CHECKED, 'true');
    this.selectedIndex_ = index;
  };

  MDCListFoundation.prototype.setCheckboxAtIndex_ = function (index) {
    for (var i = 0; i < this.adapter_.getListItemCount(); i++) {
      var isChecked = false;

      if (index.indexOf(i) >= 0) {
        isChecked = true;
      }

      this.adapter_.setCheckedCheckboxOrRadioAtIndex(i, isChecked);
      this.adapter_.setAttributeForElementIndex(i, strings$1.ARIA_CHECKED, isChecked ? 'true' : 'false');
    }

    this.selectedIndex_ = index;
  };

  MDCListFoundation.prototype.setTabindexAtIndex_ = function (index) {
    if (this.focusedItemIndex_ === numbers$1.UNSET_INDEX && index !== 0) {
      // If no list item was selected set first list item's tabindex to -1.
      // Generally, tabindex is set to 0 on first list item of list that has no preselected items.
      this.adapter_.setAttributeForElementIndex(0, 'tabindex', '-1');
    } else if (this.focusedItemIndex_ >= 0 && this.focusedItemIndex_ !== index) {
      this.adapter_.setAttributeForElementIndex(this.focusedItemIndex_, 'tabindex', '-1');
    }

    this.adapter_.setAttributeForElementIndex(index, 'tabindex', '0');
  };
  /**
   * @return Return true if it is single selectin list, checkbox list or radio list.
   */


  MDCListFoundation.prototype.isSelectableList_ = function () {
    return this.isSingleSelectionList_ || this.isCheckboxList_ || this.isRadioList_;
  };

  MDCListFoundation.prototype.setTabindexToFirstSelectedItem_ = function () {
    var targetIndex = 0;

    if (this.isSelectableList_()) {
      if (typeof this.selectedIndex_ === 'number' && this.selectedIndex_ !== numbers$1.UNSET_INDEX) {
        targetIndex = this.selectedIndex_;
      } else if (isNumberArray(this.selectedIndex_) && this.selectedIndex_.length > 0) {
        targetIndex = this.selectedIndex_.reduce(function (currentIndex, minIndex) {
          return Math.min(currentIndex, minIndex);
        });
      }
    }

    this.setTabindexAtIndex_(targetIndex);
  };

  MDCListFoundation.prototype.isIndexValid_ = function (index) {
    var _this = this;

    if (index instanceof Array) {
      if (!this.isCheckboxList_) {
        throw new Error('MDCListFoundation: Array of index is only supported for checkbox based list');
      }

      if (index.length === 0) {
        return true;
      } else {
        return index.some(function (i) {
          return _this.isIndexInRange_(i);
        });
      }
    } else if (typeof index === 'number') {
      if (this.isCheckboxList_) {
        throw new Error('MDCListFoundation: Expected array of index for checkbox based list but got number: ' + index);
      }

      return this.isIndexInRange_(index);
    } else {
      return false;
    }
  };

  MDCListFoundation.prototype.isIndexInRange_ = function (index) {
    var listSize = this.adapter_.getListItemCount();
    return index >= 0 && index < listSize;
  };

  MDCListFoundation.prototype.setSelectedIndexOnAction_ = function (index, toggleCheckbox) {
    if (toggleCheckbox === void 0) {
      toggleCheckbox = true;
    }

    if (this.isCheckboxList_) {
      this.toggleCheckboxAtIndex_(index, toggleCheckbox);
    } else {
      this.setSelectedIndex(index);
    }
  };

  MDCListFoundation.prototype.toggleCheckboxAtIndex_ = function (index, toggleCheckbox) {
    var isChecked = this.adapter_.isCheckboxCheckedAtIndex(index);

    if (toggleCheckbox) {
      isChecked = !isChecked;
      this.adapter_.setCheckedCheckboxOrRadioAtIndex(index, isChecked);
    }

    this.adapter_.setAttributeForElementIndex(index, strings$1.ARIA_CHECKED, isChecked ? 'true' : 'false'); // If none of the checkbox items are selected and selectedIndex is not initialized then provide a default value.

    var selectedIndexes = this.selectedIndex_ === numbers$1.UNSET_INDEX ? [] : this.selectedIndex_.slice();

    if (isChecked) {
      selectedIndexes.push(index);
    } else {
      selectedIndexes = selectedIndexes.filter(function (i) {
        return i !== index;
      });
    }

    this.selectedIndex_ = selectedIndexes;
  };

  return MDCListFoundation;
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

var MDCList =
/** @class */
function (_super) {
  __extends(MDCList, _super);

  function MDCList() {
    return _super !== null && _super.apply(this, arguments) || this;
  }

  Object.defineProperty(MDCList.prototype, "vertical", {
    set: function set(value) {
      this.foundation_.setVerticalOrientation(value);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(MDCList.prototype, "listElements", {
    get: function get() {
      return [].slice.call(this.root_.querySelectorAll("." + cssClasses$3.LIST_ITEM_CLASS));
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(MDCList.prototype, "wrapFocus", {
    set: function set(value) {
      this.foundation_.setWrapFocus(value);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(MDCList.prototype, "singleSelection", {
    set: function set(isSingleSelectionList) {
      this.foundation_.setSingleSelection(isSingleSelectionList);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(MDCList.prototype, "selectedIndex", {
    get: function get() {
      return this.foundation_.getSelectedIndex();
    },
    set: function set(index) {
      this.foundation_.setSelectedIndex(index);
    },
    enumerable: true,
    configurable: true
  });

  MDCList.attachTo = function (root) {
    return new MDCList(root);
  };

  MDCList.prototype.initialSyncWithDOM = function () {
    this.handleClick_ = this.handleClickEvent_.bind(this);
    this.handleKeydown_ = this.handleKeydownEvent_.bind(this);
    this.focusInEventListener_ = this.handleFocusInEvent_.bind(this);
    this.focusOutEventListener_ = this.handleFocusOutEvent_.bind(this);
    this.listen('keydown', this.handleKeydown_);
    this.listen('click', this.handleClick_);
    this.listen('focusin', this.focusInEventListener_);
    this.listen('focusout', this.focusOutEventListener_);
    this.layout();
    this.initializeListType();
  };

  MDCList.prototype.destroy = function () {
    this.unlisten('keydown', this.handleKeydown_);
    this.unlisten('click', this.handleClick_);
    this.unlisten('focusin', this.focusInEventListener_);
    this.unlisten('focusout', this.focusOutEventListener_);
  };

  MDCList.prototype.layout = function () {
    var direction = this.root_.getAttribute(strings$1.ARIA_ORIENTATION);
    this.vertical = direction !== strings$1.ARIA_ORIENTATION_HORIZONTAL; // List items need to have at least tabindex=-1 to be focusable.

    [].slice.call(this.root_.querySelectorAll('.mdc-list-item:not([tabindex])')).forEach(function (el) {
      el.setAttribute('tabindex', '-1');
    }); // Child button/a elements are not tabbable until the list item is focused.

    [].slice.call(this.root_.querySelectorAll(strings$1.FOCUSABLE_CHILD_ELEMENTS)).forEach(function (el) {
      return el.setAttribute('tabindex', '-1');
    });
    this.foundation_.layout();
  };
  /**
   * Initialize selectedIndex value based on pre-selected checkbox list items, single selection or radio.
   */


  MDCList.prototype.initializeListType = function () {
    var _this = this;

    var checkboxListItems = this.root_.querySelectorAll(strings$1.ARIA_ROLE_CHECKBOX_SELECTOR);
    var singleSelectedListItem = this.root_.querySelector("\n      ." + cssClasses$3.LIST_ITEM_ACTIVATED_CLASS + ",\n      ." + cssClasses$3.LIST_ITEM_SELECTED_CLASS + "\n    ");
    var radioSelectedListItem = this.root_.querySelector(strings$1.ARIA_CHECKED_RADIO_SELECTOR);

    if (checkboxListItems.length) {
      var preselectedItems = this.root_.querySelectorAll(strings$1.ARIA_CHECKED_CHECKBOX_SELECTOR);
      this.selectedIndex = [].map.call(preselectedItems, function (listItem) {
        return _this.listElements.indexOf(listItem);
      });
    } else if (singleSelectedListItem) {
      if (singleSelectedListItem.classList.contains(cssClasses$3.LIST_ITEM_ACTIVATED_CLASS)) {
        this.foundation_.setUseActivatedClass(true);
      }

      this.singleSelection = true;
      this.selectedIndex = this.listElements.indexOf(singleSelectedListItem);
    } else if (radioSelectedListItem) {
      this.selectedIndex = this.listElements.indexOf(radioSelectedListItem);
    }
  };
  /**
   * Updates the list item at itemIndex to the desired isEnabled state.
   * @param itemIndex Index of the list item
   * @param isEnabled Sets the list item to enabled or disabled.
   */


  MDCList.prototype.setEnabled = function (itemIndex, isEnabled) {
    this.foundation_.setEnabled(itemIndex, isEnabled);
  };

  MDCList.prototype.getDefaultFoundation = function () {
    var _this = this; // DO NOT INLINE this variable. For backward compatibility, foundations take a Partial<MDCFooAdapter>.
    // To ensure we don't accidentally omit any methods, we need a separate, strongly typed adapter variable.


    var adapter = {
      addClassForElementIndex: function addClassForElementIndex(index, className) {
        var element = _this.listElements[index];

        if (element) {
          element.classList.add(className);
        }
      },
      focusItemAtIndex: function focusItemAtIndex(index) {
        var element = _this.listElements[index];

        if (element) {
          element.focus();
        }
      },
      getAttributeForElementIndex: function getAttributeForElementIndex(index, attr) {
        return _this.listElements[index].getAttribute(attr);
      },
      getFocusedElementIndex: function getFocusedElementIndex() {
        return _this.listElements.indexOf(document.activeElement);
      },
      getListItemCount: function getListItemCount() {
        return _this.listElements.length;
      },
      hasCheckboxAtIndex: function hasCheckboxAtIndex(index) {
        var listItem = _this.listElements[index];
        return !!listItem.querySelector(strings$1.CHECKBOX_SELECTOR);
      },
      hasRadioAtIndex: function hasRadioAtIndex(index) {
        var listItem = _this.listElements[index];
        return !!listItem.querySelector(strings$1.RADIO_SELECTOR);
      },
      isCheckboxCheckedAtIndex: function isCheckboxCheckedAtIndex(index) {
        var listItem = _this.listElements[index];
        var toggleEl = listItem.querySelector(strings$1.CHECKBOX_SELECTOR);
        return toggleEl.checked;
      },
      isFocusInsideList: function isFocusInsideList() {
        return _this.root_.contains(document.activeElement);
      },
      isRootFocused: function isRootFocused() {
        return document.activeElement === _this.root_;
      },
      notifyAction: function notifyAction(index) {
        _this.emit(strings$1.ACTION_EVENT, {
          index: index
        },
        /** shouldBubble */
        true);
      },
      removeClassForElementIndex: function removeClassForElementIndex(index, className) {
        var element = _this.listElements[index];

        if (element) {
          element.classList.remove(className);
        }
      },
      setAttributeForElementIndex: function setAttributeForElementIndex(index, attr, value) {
        var element = _this.listElements[index];

        if (element) {
          element.setAttribute(attr, value);
        }
      },
      setCheckedCheckboxOrRadioAtIndex: function setCheckedCheckboxOrRadioAtIndex(index, isChecked) {
        var listItem = _this.listElements[index];
        var toggleEl = listItem.querySelector(strings$1.CHECKBOX_RADIO_SELECTOR);
        toggleEl.checked = isChecked;
        var event = document.createEvent('Event');
        event.initEvent('change', true, true);
        toggleEl.dispatchEvent(event);
      },
      setTabIndexForListItemChildren: function setTabIndexForListItemChildren(listItemIndex, tabIndexValue) {
        var element = _this.listElements[listItemIndex];
        var listItemChildren = [].slice.call(element.querySelectorAll(strings$1.CHILD_ELEMENTS_TO_TOGGLE_TABINDEX));
        listItemChildren.forEach(function (el) {
          return el.setAttribute('tabindex', tabIndexValue);
        });
      }
    };
    return new MDCListFoundation(adapter);
  };
  /**
   * Used to figure out which list item this event is targetting. Or returns -1 if
   * there is no list item
   */


  MDCList.prototype.getListItemIndex_ = function (evt) {
    var eventTarget = evt.target;
    var nearestParent = closest(eventTarget, "." + cssClasses$3.LIST_ITEM_CLASS + ", ." + cssClasses$3.ROOT); // Get the index of the element if it is a list item.

    if (nearestParent && matches(nearestParent, "." + cssClasses$3.LIST_ITEM_CLASS)) {
      return this.listElements.indexOf(nearestParent);
    }

    return -1;
  };
  /**
   * Used to figure out which element was clicked before sending the event to the foundation.
   */


  MDCList.prototype.handleFocusInEvent_ = function (evt) {
    var index = this.getListItemIndex_(evt);
    this.foundation_.handleFocusIn(evt, index);
  };
  /**
   * Used to figure out which element was clicked before sending the event to the foundation.
   */


  MDCList.prototype.handleFocusOutEvent_ = function (evt) {
    var index = this.getListItemIndex_(evt);
    this.foundation_.handleFocusOut(evt, index);
  };
  /**
   * Used to figure out which element was focused when keydown event occurred before sending the event to the
   * foundation.
   */


  MDCList.prototype.handleKeydownEvent_ = function (evt) {
    var index = this.getListItemIndex_(evt);
    var target = evt.target;
    this.foundation_.handleKeydown(evt, target.classList.contains(cssClasses$3.LIST_ITEM_CLASS), index);
  };
  /**
   * Used to figure out which element was clicked before sending the event to the foundation.
   */


  MDCList.prototype.handleClickEvent_ = function (evt) {
    var index = this.getListItemIndex_(evt);
    var target = evt.target; // Toggle the checkbox only if it's not the target of the event, or the checkbox will have 2 change events.

    var toggleCheckbox = !matches(target, strings$1.CHECKBOX_RADIO_SELECTOR);
    this.foundation_.handleClick(index, toggleCheckbox);
  };

  return MDCList;
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

var MDCMenuSurfaceFoundation =
/** @class */
function (_super) {
  __extends(MDCMenuSurfaceFoundation, _super);

  function MDCMenuSurfaceFoundation(adapter) {
    var _this = _super.call(this, _assign({}, MDCMenuSurfaceFoundation.defaultAdapter, adapter)) || this;

    _this.isOpen_ = false;
    _this.isQuickOpen_ = false;
    _this.isHoistedElement_ = false;
    _this.isFixedPosition_ = false;
    _this.openAnimationEndTimerId_ = 0;
    _this.closeAnimationEndTimerId_ = 0;
    _this.animationRequestId_ = 0;
    _this.anchorCorner_ = Corner.TOP_START;
    _this.anchorMargin_ = {
      top: 0,
      right: 0,
      bottom: 0,
      left: 0
    };
    _this.position_ = {
      x: 0,
      y: 0
    };
    return _this;
  }

  Object.defineProperty(MDCMenuSurfaceFoundation, "cssClasses", {
    get: function get() {
      return cssClasses$2;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(MDCMenuSurfaceFoundation, "strings", {
    get: function get() {
      return strings;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(MDCMenuSurfaceFoundation, "numbers", {
    get: function get() {
      return numbers;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(MDCMenuSurfaceFoundation, "Corner", {
    get: function get() {
      return Corner;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(MDCMenuSurfaceFoundation, "defaultAdapter", {
    /**
     * @see {@link MDCMenuSurfaceAdapter} for typing information on parameters and return types.
     */
    get: function get() {
      // tslint:disable:object-literal-sort-keys Methods should be in the same order as the adapter interface.
      return {
        addClass: function addClass() {
          return undefined;
        },
        removeClass: function removeClass() {
          return undefined;
        },
        hasClass: function hasClass() {
          return false;
        },
        hasAnchor: function hasAnchor() {
          return false;
        },
        isElementInContainer: function isElementInContainer() {
          return false;
        },
        isFocused: function isFocused() {
          return false;
        },
        isRtl: function isRtl() {
          return false;
        },
        getInnerDimensions: function getInnerDimensions() {
          return {
            height: 0,
            width: 0
          };
        },
        getAnchorDimensions: function getAnchorDimensions() {
          return null;
        },
        getWindowDimensions: function getWindowDimensions() {
          return {
            height: 0,
            width: 0
          };
        },
        getBodyDimensions: function getBodyDimensions() {
          return {
            height: 0,
            width: 0
          };
        },
        getWindowScroll: function getWindowScroll() {
          return {
            x: 0,
            y: 0
          };
        },
        setPosition: function setPosition() {
          return undefined;
        },
        setMaxHeight: function setMaxHeight() {
          return undefined;
        },
        setTransformOrigin: function setTransformOrigin() {
          return undefined;
        },
        saveFocus: function saveFocus() {
          return undefined;
        },
        restoreFocus: function restoreFocus() {
          return undefined;
        },
        notifyClose: function notifyClose() {
          return undefined;
        },
        notifyOpen: function notifyOpen() {
          return undefined;
        }
      }; // tslint:enable:object-literal-sort-keys
    },
    enumerable: true,
    configurable: true
  });

  MDCMenuSurfaceFoundation.prototype.init = function () {
    var _a = MDCMenuSurfaceFoundation.cssClasses,
        ROOT = _a.ROOT,
        OPEN = _a.OPEN;

    if (!this.adapter_.hasClass(ROOT)) {
      throw new Error(ROOT + " class required in root element.");
    }

    if (this.adapter_.hasClass(OPEN)) {
      this.isOpen_ = true;
    }
  };

  MDCMenuSurfaceFoundation.prototype.destroy = function () {
    clearTimeout(this.openAnimationEndTimerId_);
    clearTimeout(this.closeAnimationEndTimerId_); // Cancel any currently running animations.

    cancelAnimationFrame(this.animationRequestId_);
  };
  /**
   * @param corner Default anchor corner alignment of top-left menu surface corner.
   */


  MDCMenuSurfaceFoundation.prototype.setAnchorCorner = function (corner) {
    this.anchorCorner_ = corner;
  };
  /**
   * @param margin Set of margin values from anchor.
   */


  MDCMenuSurfaceFoundation.prototype.setAnchorMargin = function (margin) {
    this.anchorMargin_.top = margin.top || 0;
    this.anchorMargin_.right = margin.right || 0;
    this.anchorMargin_.bottom = margin.bottom || 0;
    this.anchorMargin_.left = margin.left || 0;
  };
  /** Used to indicate if the menu-surface is hoisted to the body. */


  MDCMenuSurfaceFoundation.prototype.setIsHoisted = function (isHoisted) {
    this.isHoistedElement_ = isHoisted;
  };
  /** Used to set the menu-surface calculations based on a fixed position menu. */


  MDCMenuSurfaceFoundation.prototype.setFixedPosition = function (isFixedPosition) {
    this.isFixedPosition_ = isFixedPosition;
  };
  /** Sets the menu-surface position on the page. */


  MDCMenuSurfaceFoundation.prototype.setAbsolutePosition = function (x, y) {
    this.position_.x = this.isFinite_(x) ? x : 0;
    this.position_.y = this.isFinite_(y) ? y : 0;
  };

  MDCMenuSurfaceFoundation.prototype.setQuickOpen = function (quickOpen) {
    this.isQuickOpen_ = quickOpen;
  };

  MDCMenuSurfaceFoundation.prototype.isOpen = function () {
    return this.isOpen_;
  };
  /**
   * Open the menu surface.
   */


  MDCMenuSurfaceFoundation.prototype.open = function () {
    var _this = this;

    this.adapter_.saveFocus();

    if (!this.isQuickOpen_) {
      this.adapter_.addClass(MDCMenuSurfaceFoundation.cssClasses.ANIMATING_OPEN);
    }

    this.animationRequestId_ = requestAnimationFrame(function () {
      _this.adapter_.addClass(MDCMenuSurfaceFoundation.cssClasses.OPEN);

      _this.dimensions_ = _this.adapter_.getInnerDimensions();

      _this.autoPosition_();

      if (_this.isQuickOpen_) {
        _this.adapter_.notifyOpen();
      } else {
        _this.openAnimationEndTimerId_ = setTimeout(function () {
          _this.openAnimationEndTimerId_ = 0;

          _this.adapter_.removeClass(MDCMenuSurfaceFoundation.cssClasses.ANIMATING_OPEN);

          _this.adapter_.notifyOpen();
        }, numbers.TRANSITION_OPEN_DURATION);
      }
    });
    this.isOpen_ = true;
  };
  /**
   * Closes the menu surface.
   */


  MDCMenuSurfaceFoundation.prototype.close = function (skipRestoreFocus) {
    var _this = this;

    if (skipRestoreFocus === void 0) {
      skipRestoreFocus = false;
    }

    if (!this.isQuickOpen_) {
      this.adapter_.addClass(MDCMenuSurfaceFoundation.cssClasses.ANIMATING_CLOSED);
    }

    requestAnimationFrame(function () {
      _this.adapter_.removeClass(MDCMenuSurfaceFoundation.cssClasses.OPEN);

      if (_this.isQuickOpen_) {
        _this.adapter_.notifyClose();
      } else {
        _this.closeAnimationEndTimerId_ = setTimeout(function () {
          _this.closeAnimationEndTimerId_ = 0;

          _this.adapter_.removeClass(MDCMenuSurfaceFoundation.cssClasses.ANIMATING_CLOSED);

          _this.adapter_.notifyClose();
        }, numbers.TRANSITION_CLOSE_DURATION);
      }
    });
    this.isOpen_ = false;

    if (!skipRestoreFocus) {
      this.maybeRestoreFocus_();
    }
  };
  /** Handle clicks and close if not within menu-surface element. */


  MDCMenuSurfaceFoundation.prototype.handleBodyClick = function (evt) {
    var el = evt.target;

    if (this.adapter_.isElementInContainer(el)) {
      return;
    }

    this.close();
  };
  /** Handle keys that close the surface. */


  MDCMenuSurfaceFoundation.prototype.handleKeydown = function (evt) {
    var keyCode = evt.keyCode,
        key = evt.key;
    var isEscape = key === 'Escape' || keyCode === 27;

    if (isEscape) {
      this.close();
    }
  };

  MDCMenuSurfaceFoundation.prototype.autoPosition_ = function () {
    var _a; // Compute measurements for autoposition methods reuse.


    this.measurements_ = this.getAutoLayoutMeasurements_();
    var corner = this.getOriginCorner_();
    var maxMenuSurfaceHeight = this.getMenuSurfaceMaxHeight_(corner);
    var verticalAlignment = this.hasBit_(corner, CornerBit.BOTTOM) ? 'bottom' : 'top';
    var horizontalAlignment = this.hasBit_(corner, CornerBit.RIGHT) ? 'right' : 'left';
    var horizontalOffset = this.getHorizontalOriginOffset_(corner);
    var verticalOffset = this.getVerticalOriginOffset_(corner);
    var _b = this.measurements_,
        anchorSize = _b.anchorSize,
        surfaceSize = _b.surfaceSize;
    var position = (_a = {}, _a[horizontalAlignment] = horizontalOffset, _a[verticalAlignment] = verticalOffset, _a); // Center align when anchor width is comparable or greater than menu surface, otherwise keep corner.

    if (anchorSize.width / surfaceSize.width > numbers.ANCHOR_TO_MENU_SURFACE_WIDTH_RATIO) {
      horizontalAlignment = 'center';
    } // If the menu-surface has been hoisted to the body, it's no longer relative to the anchor element


    if (this.isHoistedElement_ || this.isFixedPosition_) {
      this.adjustPositionForHoistedElement_(position);
    }

    this.adapter_.setTransformOrigin(horizontalAlignment + " " + verticalAlignment);
    this.adapter_.setPosition(position);
    this.adapter_.setMaxHeight(maxMenuSurfaceHeight ? maxMenuSurfaceHeight + 'px' : '');
  };
  /**
   * @return Measurements used to position menu surface popup.
   */


  MDCMenuSurfaceFoundation.prototype.getAutoLayoutMeasurements_ = function () {
    var anchorRect = this.adapter_.getAnchorDimensions();
    var bodySize = this.adapter_.getBodyDimensions();
    var viewportSize = this.adapter_.getWindowDimensions();
    var windowScroll = this.adapter_.getWindowScroll();

    if (!anchorRect) {
      // tslint:disable:object-literal-sort-keys Positional properties are more readable when they're grouped together
      anchorRect = {
        top: this.position_.y,
        right: this.position_.x,
        bottom: this.position_.y,
        left: this.position_.x,
        width: 0,
        height: 0
      }; // tslint:enable:object-literal-sort-keys
    }

    return {
      anchorSize: anchorRect,
      bodySize: bodySize,
      surfaceSize: this.dimensions_,
      viewportDistance: {
        // tslint:disable:object-literal-sort-keys Positional properties are more readable when they're grouped together
        top: anchorRect.top,
        right: viewportSize.width - anchorRect.right,
        bottom: viewportSize.height - anchorRect.bottom,
        left: anchorRect.left
      },
      viewportSize: viewportSize,
      windowScroll: windowScroll
    };
  };
  /**
   * Computes the corner of the anchor from which to animate and position the menu surface.
   */


  MDCMenuSurfaceFoundation.prototype.getOriginCorner_ = function () {
    // Defaults: open from the top left.
    var corner = Corner.TOP_LEFT;
    var _a = this.measurements_,
        viewportDistance = _a.viewportDistance,
        anchorSize = _a.anchorSize,
        surfaceSize = _a.surfaceSize;
    var isBottomAligned = this.hasBit_(this.anchorCorner_, CornerBit.BOTTOM);
    var availableTop = isBottomAligned ? viewportDistance.top + anchorSize.height + this.anchorMargin_.bottom : viewportDistance.top + this.anchorMargin_.top;
    var availableBottom = isBottomAligned ? viewportDistance.bottom - this.anchorMargin_.bottom : viewportDistance.bottom + anchorSize.height - this.anchorMargin_.top;
    var topOverflow = surfaceSize.height - availableTop;
    var bottomOverflow = surfaceSize.height - availableBottom;

    if (bottomOverflow > 0 && topOverflow < bottomOverflow) {
      corner = this.setBit_(corner, CornerBit.BOTTOM);
    }

    var isRtl = this.adapter_.isRtl();
    var isFlipRtl = this.hasBit_(this.anchorCorner_, CornerBit.FLIP_RTL);
    var avoidHorizontalOverlap = this.hasBit_(this.anchorCorner_, CornerBit.RIGHT);
    var isAlignedRight = avoidHorizontalOverlap && !isRtl || !avoidHorizontalOverlap && isFlipRtl && isRtl;
    var availableLeft = isAlignedRight ? viewportDistance.left + anchorSize.width + this.anchorMargin_.right : viewportDistance.left + this.anchorMargin_.left;
    var availableRight = isAlignedRight ? viewportDistance.right - this.anchorMargin_.right : viewportDistance.right + anchorSize.width - this.anchorMargin_.left;
    var leftOverflow = surfaceSize.width - availableLeft;
    var rightOverflow = surfaceSize.width - availableRight;

    if (leftOverflow < 0 && isAlignedRight && isRtl || avoidHorizontalOverlap && !isAlignedRight && leftOverflow < 0 || rightOverflow > 0 && leftOverflow < rightOverflow) {
      corner = this.setBit_(corner, CornerBit.RIGHT);
    }

    return corner;
  };
  /**
   * @param corner Origin corner of the menu surface.
   * @return Maximum height of the menu surface, based on available space. 0 indicates should not be set.
   */


  MDCMenuSurfaceFoundation.prototype.getMenuSurfaceMaxHeight_ = function (corner) {
    var viewportDistance = this.measurements_.viewportDistance;
    var maxHeight = 0;
    var isBottomAligned = this.hasBit_(corner, CornerBit.BOTTOM);
    var isBottomAnchored = this.hasBit_(this.anchorCorner_, CornerBit.BOTTOM);
    var MARGIN_TO_EDGE = MDCMenuSurfaceFoundation.numbers.MARGIN_TO_EDGE; // When maximum height is not specified, it is handled from CSS.

    if (isBottomAligned) {
      maxHeight = viewportDistance.top + this.anchorMargin_.top - MARGIN_TO_EDGE;

      if (!isBottomAnchored) {
        maxHeight += this.measurements_.anchorSize.height;
      }
    } else {
      maxHeight = viewportDistance.bottom - this.anchorMargin_.bottom + this.measurements_.anchorSize.height - MARGIN_TO_EDGE;

      if (isBottomAnchored) {
        maxHeight -= this.measurements_.anchorSize.height;
      }
    }

    return maxHeight;
  };
  /**
   * @param corner Origin corner of the menu surface.
   * @return Horizontal offset of menu surface origin corner from corresponding anchor corner.
   */


  MDCMenuSurfaceFoundation.prototype.getHorizontalOriginOffset_ = function (corner) {
    var anchorSize = this.measurements_.anchorSize; // isRightAligned corresponds to using the 'right' property on the surface.

    var isRightAligned = this.hasBit_(corner, CornerBit.RIGHT);
    var avoidHorizontalOverlap = this.hasBit_(this.anchorCorner_, CornerBit.RIGHT);

    if (isRightAligned) {
      var rightOffset = avoidHorizontalOverlap ? anchorSize.width - this.anchorMargin_.left : this.anchorMargin_.right; // For hoisted or fixed elements, adjust the offset by the difference between viewport width and body width so
      // when we calculate the right value (`adjustPositionForHoistedElement_`) based on the element position,
      // the right property is correct.

      if (this.isHoistedElement_ || this.isFixedPosition_) {
        return rightOffset - (this.measurements_.viewportSize.width - this.measurements_.bodySize.width);
      }

      return rightOffset;
    }

    return avoidHorizontalOverlap ? anchorSize.width - this.anchorMargin_.right : this.anchorMargin_.left;
  };
  /**
   * @param corner Origin corner of the menu surface.
   * @return Vertical offset of menu surface origin corner from corresponding anchor corner.
   */


  MDCMenuSurfaceFoundation.prototype.getVerticalOriginOffset_ = function (corner) {
    var anchorSize = this.measurements_.anchorSize;
    var isBottomAligned = this.hasBit_(corner, CornerBit.BOTTOM);
    var avoidVerticalOverlap = this.hasBit_(this.anchorCorner_, CornerBit.BOTTOM);
    var y = 0;

    if (isBottomAligned) {
      y = avoidVerticalOverlap ? anchorSize.height - this.anchorMargin_.top : -this.anchorMargin_.bottom;
    } else {
      y = avoidVerticalOverlap ? anchorSize.height + this.anchorMargin_.bottom : this.anchorMargin_.top;
    }

    return y;
  };
  /** Calculates the offsets for positioning the menu-surface when the menu-surface has been hoisted to the body. */


  MDCMenuSurfaceFoundation.prototype.adjustPositionForHoistedElement_ = function (position) {
    var e_1, _a;

    var _b = this.measurements_,
        windowScroll = _b.windowScroll,
        viewportDistance = _b.viewportDistance;
    var props = Object.keys(position);

    try {
      for (var props_1 = __values(props), props_1_1 = props_1.next(); !props_1_1.done; props_1_1 = props_1.next()) {
        var prop = props_1_1.value;
        var value = position[prop] || 0; // Hoisted surfaces need to have the anchor elements location on the page added to the
        // position properties for proper alignment on the body.

        value += viewportDistance[prop]; // Surfaces that are absolutely positioned need to have additional calculations for scroll
        // and bottom positioning.

        if (!this.isFixedPosition_) {
          if (prop === 'top') {
            value += windowScroll.y;
          } else if (prop === 'bottom') {
            value -= windowScroll.y;
          } else if (prop === 'left') {
            value += windowScroll.x;
          } else {
            // prop === 'right'
            value -= windowScroll.x;
          }
        }

        position[prop] = value;
      }
    } catch (e_1_1) {
      e_1 = {
        error: e_1_1
      };
    } finally {
      try {
        if (props_1_1 && !props_1_1.done && (_a = props_1.return)) _a.call(props_1);
      } finally {
        if (e_1) throw e_1.error;
      }
    }
  };
  /**
   * The last focused element when the menu surface was opened should regain focus, if the user is
   * focused on or within the menu surface when it is closed.
   */


  MDCMenuSurfaceFoundation.prototype.maybeRestoreFocus_ = function () {
    var isRootFocused = this.adapter_.isFocused();
    var childHasFocus = document.activeElement && this.adapter_.isElementInContainer(document.activeElement);

    if (isRootFocused || childHasFocus) {
      this.adapter_.restoreFocus();
    }
  };

  MDCMenuSurfaceFoundation.prototype.hasBit_ = function (corner, bit) {
    return Boolean(corner & bit); // tslint:disable-line:no-bitwise
  };

  MDCMenuSurfaceFoundation.prototype.setBit_ = function (corner, bit) {
    return corner | bit; // tslint:disable-line:no-bitwise
  };
  /**
   * isFinite that doesn't force conversion to number type.
   * Equivalent to Number.isFinite in ES2015, which is not supported in IE.
   */


  MDCMenuSurfaceFoundation.prototype.isFinite_ = function (num) {
    return typeof num === 'number' && isFinite(num);
  };

  return MDCMenuSurfaceFoundation;
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
var cachedCssTransformPropertyName_;
/**
 * Returns the name of the correct transform property to use on the current browser.
 */

function getTransformPropertyName(globalObj, forceRefresh) {
  if (forceRefresh === void 0) {
    forceRefresh = false;
  }

  if (cachedCssTransformPropertyName_ === undefined || forceRefresh) {
    var el = globalObj.document.createElement('div');
    cachedCssTransformPropertyName_ = 'transform' in el.style ? 'transform' : 'webkitTransform';
  }

  return cachedCssTransformPropertyName_;
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

var MDCMenuSurface =
/** @class */
function (_super) {
  __extends(MDCMenuSurface, _super);

  function MDCMenuSurface() {
    return _super !== null && _super.apply(this, arguments) || this;
  }

  MDCMenuSurface.attachTo = function (root) {
    return new MDCMenuSurface(root);
  };

  MDCMenuSurface.prototype.initialSyncWithDOM = function () {
    var _this = this;

    var parentEl = this.root_.parentElement;
    this.anchorElement = parentEl && parentEl.classList.contains(cssClasses$2.ANCHOR) ? parentEl : null;

    if (this.root_.classList.contains(cssClasses$2.FIXED)) {
      this.setFixedPosition(true);
    }

    this.handleKeydown_ = function (evt) {
      return _this.foundation_.handleKeydown(evt);
    };

    this.handleBodyClick_ = function (evt) {
      return _this.foundation_.handleBodyClick(evt);
    };

    this.registerBodyClickListener_ = function () {
      return document.body.addEventListener('click', _this.handleBodyClick_);
    };

    this.deregisterBodyClickListener_ = function () {
      return document.body.removeEventListener('click', _this.handleBodyClick_);
    };

    this.listen('keydown', this.handleKeydown_);
    this.listen(strings.OPENED_EVENT, this.registerBodyClickListener_);
    this.listen(strings.CLOSED_EVENT, this.deregisterBodyClickListener_);
  };

  MDCMenuSurface.prototype.destroy = function () {
    this.unlisten('keydown', this.handleKeydown_);
    this.unlisten(strings.OPENED_EVENT, this.registerBodyClickListener_);
    this.unlisten(strings.CLOSED_EVENT, this.deregisterBodyClickListener_);

    _super.prototype.destroy.call(this);
  };

  MDCMenuSurface.prototype.isOpen = function () {
    return this.foundation_.isOpen();
  };

  MDCMenuSurface.prototype.open = function () {
    this.foundation_.open();
  };

  MDCMenuSurface.prototype.close = function (skipRestoreFocus) {
    if (skipRestoreFocus === void 0) {
      skipRestoreFocus = false;
    }

    this.foundation_.close(skipRestoreFocus);
  };

  Object.defineProperty(MDCMenuSurface.prototype, "quickOpen", {
    set: function set(quickOpen) {
      this.foundation_.setQuickOpen(quickOpen);
    },
    enumerable: true,
    configurable: true
  });
  /**
   * Removes the menu-surface from it's current location and appends it to the
   * body to overcome any overflow:hidden issues.
   */

  MDCMenuSurface.prototype.hoistMenuToBody = function () {
    document.body.appendChild(this.root_);
    this.setIsHoisted(true);
  };
  /** Sets the foundation to use page offsets for an positioning when the menu is hoisted to the body. */


  MDCMenuSurface.prototype.setIsHoisted = function (isHoisted) {
    this.foundation_.setIsHoisted(isHoisted);
  };
  /** Sets the element that the menu-surface is anchored to. */


  MDCMenuSurface.prototype.setMenuSurfaceAnchorElement = function (element) {
    this.anchorElement = element;
  };
  /** Sets the menu-surface to position: fixed. */


  MDCMenuSurface.prototype.setFixedPosition = function (isFixed) {
    if (isFixed) {
      this.root_.classList.add(cssClasses$2.FIXED);
    } else {
      this.root_.classList.remove(cssClasses$2.FIXED);
    }

    this.foundation_.setFixedPosition(isFixed);
  };
  /** Sets the absolute x/y position to position based on. Requires the menu to be hoisted. */


  MDCMenuSurface.prototype.setAbsolutePosition = function (x, y) {
    this.foundation_.setAbsolutePosition(x, y);
    this.setIsHoisted(true);
  };
  /**
   * @param corner Default anchor corner alignment of top-left surface corner.
   */


  MDCMenuSurface.prototype.setAnchorCorner = function (corner) {
    this.foundation_.setAnchorCorner(corner);
  };

  MDCMenuSurface.prototype.setAnchorMargin = function (margin) {
    this.foundation_.setAnchorMargin(margin);
  };

  MDCMenuSurface.prototype.getDefaultFoundation = function () {
    var _this = this; // DO NOT INLINE this variable. For backward compatibility, foundations take a Partial<MDCFooAdapter>.
    // To ensure we don't accidentally omit any methods, we need a separate, strongly typed adapter variable.
    // tslint:disable:object-literal-sort-keys Methods should be in the same order as the adapter interface.


    var adapter = {
      addClass: function addClass(className) {
        return _this.root_.classList.add(className);
      },
      removeClass: function removeClass(className) {
        return _this.root_.classList.remove(className);
      },
      hasClass: function hasClass(className) {
        return _this.root_.classList.contains(className);
      },
      hasAnchor: function hasAnchor() {
        return !!_this.anchorElement;
      },
      notifyClose: function notifyClose() {
        return _this.emit(MDCMenuSurfaceFoundation.strings.CLOSED_EVENT, {});
      },
      notifyOpen: function notifyOpen() {
        return _this.emit(MDCMenuSurfaceFoundation.strings.OPENED_EVENT, {});
      },
      isElementInContainer: function isElementInContainer(el) {
        return _this.root_.contains(el);
      },
      isRtl: function isRtl() {
        return getComputedStyle(_this.root_).getPropertyValue('direction') === 'rtl';
      },
      setTransformOrigin: function setTransformOrigin(origin) {
        var propertyName = getTransformPropertyName(window) + "-origin";

        _this.root_.style.setProperty(propertyName, origin);
      },
      isFocused: function isFocused() {
        return document.activeElement === _this.root_;
      },
      saveFocus: function saveFocus() {
        _this.previousFocus_ = document.activeElement;
      },
      restoreFocus: function restoreFocus() {
        if (_this.root_.contains(document.activeElement)) {
          if (_this.previousFocus_ && _this.previousFocus_.focus) {
            _this.previousFocus_.focus();
          }
        }
      },
      getInnerDimensions: function getInnerDimensions() {
        return {
          width: _this.root_.offsetWidth,
          height: _this.root_.offsetHeight
        };
      },
      getAnchorDimensions: function getAnchorDimensions() {
        return _this.anchorElement ? _this.anchorElement.getBoundingClientRect() : null;
      },
      getWindowDimensions: function getWindowDimensions() {
        return {
          width: window.innerWidth,
          height: window.innerHeight
        };
      },
      getBodyDimensions: function getBodyDimensions() {
        return {
          width: document.body.clientWidth,
          height: document.body.clientHeight
        };
      },
      getWindowScroll: function getWindowScroll() {
        return {
          x: window.pageXOffset,
          y: window.pageYOffset
        };
      },
      setPosition: function setPosition(position) {
        _this.root_.style.left = 'left' in position ? position.left + "px" : '';
        _this.root_.style.right = 'right' in position ? position.right + "px" : '';
        _this.root_.style.top = 'top' in position ? position.top + "px" : '';
        _this.root_.style.bottom = 'bottom' in position ? position.bottom + "px" : '';
      },
      setMaxHeight: function setMaxHeight(height) {
        _this.root_.style.maxHeight = height;
      }
    }; // tslint:enable:object-literal-sort-keys

    return new MDCMenuSurfaceFoundation(adapter);
  };

  return MDCMenuSurface;
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
var cssClasses$4 = {
  MENU_SELECTED_LIST_ITEM: 'mdc-menu-item--selected',
  MENU_SELECTION_GROUP: 'mdc-menu__selection-group',
  ROOT: 'mdc-menu'
};
var strings$2 = {
  ARIA_CHECKED_ATTR: 'aria-checked',
  ARIA_DISABLED_ATTR: 'aria-disabled',
  CHECKBOX_SELECTOR: 'input[type="checkbox"]',
  LIST_SELECTOR: '.mdc-list',
  SELECTED_EVENT: 'MDCMenu:selected'
};
var numbers$2 = {
  FOCUS_ROOT_INDEX: -1
};
var DefaultFocusState;

(function (DefaultFocusState) {
  DefaultFocusState[DefaultFocusState["NONE"] = 0] = "NONE";
  DefaultFocusState[DefaultFocusState["LIST_ROOT"] = 1] = "LIST_ROOT";
  DefaultFocusState[DefaultFocusState["FIRST_ITEM"] = 2] = "FIRST_ITEM";
  DefaultFocusState[DefaultFocusState["LAST_ITEM"] = 3] = "LAST_ITEM";
})(DefaultFocusState || (DefaultFocusState = {}));

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

var MDCMenuFoundation =
/** @class */
function (_super) {
  __extends(MDCMenuFoundation, _super);

  function MDCMenuFoundation(adapter) {
    var _this = _super.call(this, _assign({}, MDCMenuFoundation.defaultAdapter, adapter)) || this;

    _this.closeAnimationEndTimerId_ = 0;
    _this.defaultFocusState_ = DefaultFocusState.LIST_ROOT;
    return _this;
  }

  Object.defineProperty(MDCMenuFoundation, "cssClasses", {
    get: function get() {
      return cssClasses$4;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(MDCMenuFoundation, "strings", {
    get: function get() {
      return strings$2;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(MDCMenuFoundation, "numbers", {
    get: function get() {
      return numbers$2;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(MDCMenuFoundation, "defaultAdapter", {
    /**
     * @see {@link MDCMenuAdapter} for typing information on parameters and return types.
     */
    get: function get() {
      // tslint:disable:object-literal-sort-keys Methods should be in the same order as the adapter interface.
      return {
        addClassToElementAtIndex: function addClassToElementAtIndex() {
          return undefined;
        },
        removeClassFromElementAtIndex: function removeClassFromElementAtIndex() {
          return undefined;
        },
        addAttributeToElementAtIndex: function addAttributeToElementAtIndex() {
          return undefined;
        },
        removeAttributeFromElementAtIndex: function removeAttributeFromElementAtIndex() {
          return undefined;
        },
        elementContainsClass: function elementContainsClass() {
          return false;
        },
        closeSurface: function closeSurface() {
          return undefined;
        },
        getElementIndex: function getElementIndex() {
          return -1;
        },
        notifySelected: function notifySelected() {
          return undefined;
        },
        getMenuItemCount: function getMenuItemCount() {
          return 0;
        },
        focusItemAtIndex: function focusItemAtIndex() {
          return undefined;
        },
        focusListRoot: function focusListRoot() {
          return undefined;
        },
        getSelectedSiblingOfItemAtIndex: function getSelectedSiblingOfItemAtIndex() {
          return -1;
        },
        isSelectableItemAtIndex: function isSelectableItemAtIndex() {
          return false;
        }
      }; // tslint:enable:object-literal-sort-keys
    },
    enumerable: true,
    configurable: true
  });

  MDCMenuFoundation.prototype.destroy = function () {
    if (this.closeAnimationEndTimerId_) {
      clearTimeout(this.closeAnimationEndTimerId_);
    }

    this.adapter_.closeSurface();
  };

  MDCMenuFoundation.prototype.handleKeydown = function (evt) {
    var key = evt.key,
        keyCode = evt.keyCode;
    var isTab = key === 'Tab' || keyCode === 9;

    if (isTab) {
      this.adapter_.closeSurface(
      /** skipRestoreFocus */
      true);
    }
  };

  MDCMenuFoundation.prototype.handleItemAction = function (listItem) {
    var _this = this;

    var index = this.adapter_.getElementIndex(listItem);

    if (index < 0) {
      return;
    }

    this.adapter_.notifySelected({
      index: index
    });
    this.adapter_.closeSurface(); // Wait for the menu to close before adding/removing classes that affect styles.

    this.closeAnimationEndTimerId_ = setTimeout(function () {
      // Recompute the index in case the menu contents have changed.
      var recomputedIndex = _this.adapter_.getElementIndex(listItem);

      if (_this.adapter_.isSelectableItemAtIndex(recomputedIndex)) {
        _this.setSelectedIndex(recomputedIndex);
      }
    }, MDCMenuSurfaceFoundation.numbers.TRANSITION_CLOSE_DURATION);
  };

  MDCMenuFoundation.prototype.handleMenuSurfaceOpened = function () {
    switch (this.defaultFocusState_) {
      case DefaultFocusState.FIRST_ITEM:
        this.adapter_.focusItemAtIndex(0);
        break;

      case DefaultFocusState.LAST_ITEM:
        this.adapter_.focusItemAtIndex(this.adapter_.getMenuItemCount() - 1);
        break;

      case DefaultFocusState.NONE:
        // Do nothing.
        break;

      default:
        this.adapter_.focusListRoot();
        break;
    }
  };
  /**
   * Sets default focus state where the menu should focus every time when menu
   * is opened. Focuses the list root (`DefaultFocusState.LIST_ROOT`) element by
   * default.
   */


  MDCMenuFoundation.prototype.setDefaultFocusState = function (focusState) {
    this.defaultFocusState_ = focusState;
  };
  /**
   * Selects the list item at `index` within the menu.
   * @param index Index of list item within the menu.
   */


  MDCMenuFoundation.prototype.setSelectedIndex = function (index) {
    this.validatedIndex_(index);

    if (!this.adapter_.isSelectableItemAtIndex(index)) {
      throw new Error('MDCMenuFoundation: No selection group at specified index.');
    }

    var prevSelectedIndex = this.adapter_.getSelectedSiblingOfItemAtIndex(index);

    if (prevSelectedIndex >= 0) {
      this.adapter_.removeAttributeFromElementAtIndex(prevSelectedIndex, strings$2.ARIA_CHECKED_ATTR);
      this.adapter_.removeClassFromElementAtIndex(prevSelectedIndex, cssClasses$4.MENU_SELECTED_LIST_ITEM);
    }

    this.adapter_.addClassToElementAtIndex(index, cssClasses$4.MENU_SELECTED_LIST_ITEM);
    this.adapter_.addAttributeToElementAtIndex(index, strings$2.ARIA_CHECKED_ATTR, 'true');
  };
  /**
   * Sets the enabled state to isEnabled for the menu item at the given index.
   * @param index Index of the menu item
   * @param isEnabled The desired enabled state of the menu item.
   */


  MDCMenuFoundation.prototype.setEnabled = function (index, isEnabled) {
    this.validatedIndex_(index);

    if (isEnabled) {
      this.adapter_.removeClassFromElementAtIndex(index, cssClasses$3.LIST_ITEM_DISABLED_CLASS);
      this.adapter_.addAttributeToElementAtIndex(index, strings$2.ARIA_DISABLED_ATTR, 'false');
    } else {
      this.adapter_.addClassToElementAtIndex(index, cssClasses$3.LIST_ITEM_DISABLED_CLASS);
      this.adapter_.addAttributeToElementAtIndex(index, strings$2.ARIA_DISABLED_ATTR, 'true');
    }
  };

  MDCMenuFoundation.prototype.validatedIndex_ = function (index) {
    var menuSize = this.adapter_.getMenuItemCount();
    var isIndexInRange = index >= 0 && index < menuSize;

    if (!isIndexInRange) {
      throw new Error('MDCMenuFoundation: No list item at specified index.');
    }
  };

  return MDCMenuFoundation;
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

var MDCMenu =
/** @class */
function (_super) {
  __extends(MDCMenu, _super);

  function MDCMenu() {
    return _super !== null && _super.apply(this, arguments) || this;
  }

  MDCMenu.attachTo = function (root) {
    return new MDCMenu(root);
  };

  MDCMenu.prototype.initialize = function (menuSurfaceFactory, listFactory) {
    if (menuSurfaceFactory === void 0) {
      menuSurfaceFactory = function menuSurfaceFactory(el) {
        return new MDCMenuSurface(el);
      };
    }

    if (listFactory === void 0) {
      listFactory = function listFactory(el) {
        return new MDCList(el);
      };
    }

    this.menuSurfaceFactory_ = menuSurfaceFactory;
    this.listFactory_ = listFactory;
  };

  MDCMenu.prototype.initialSyncWithDOM = function () {
    var _this = this;

    this.menuSurface_ = this.menuSurfaceFactory_(this.root_);
    var list = this.root_.querySelector(strings$2.LIST_SELECTOR);

    if (list) {
      this.list_ = this.listFactory_(list);
      this.list_.wrapFocus = true;
    } else {
      this.list_ = null;
    }

    this.handleKeydown_ = function (evt) {
      return _this.foundation_.handleKeydown(evt);
    };

    this.handleItemAction_ = function (evt) {
      return _this.foundation_.handleItemAction(_this.items[evt.detail.index]);
    };

    this.handleMenuSurfaceOpened_ = function () {
      return _this.foundation_.handleMenuSurfaceOpened();
    };

    this.menuSurface_.listen(MDCMenuSurfaceFoundation.strings.OPENED_EVENT, this.handleMenuSurfaceOpened_);
    this.listen('keydown', this.handleKeydown_);
    this.listen(MDCListFoundation.strings.ACTION_EVENT, this.handleItemAction_);
  };

  MDCMenu.prototype.destroy = function () {
    if (this.list_) {
      this.list_.destroy();
    }

    this.menuSurface_.destroy();
    this.menuSurface_.unlisten(MDCMenuSurfaceFoundation.strings.OPENED_EVENT, this.handleMenuSurfaceOpened_);
    this.unlisten('keydown', this.handleKeydown_);
    this.unlisten(MDCListFoundation.strings.ACTION_EVENT, this.handleItemAction_);

    _super.prototype.destroy.call(this);
  };

  Object.defineProperty(MDCMenu.prototype, "open", {
    get: function get() {
      return this.menuSurface_.isOpen();
    },
    set: function set(value) {
      if (value) {
        this.menuSurface_.open();
      } else {
        this.menuSurface_.close();
      }
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(MDCMenu.prototype, "wrapFocus", {
    get: function get() {
      return this.list_ ? this.list_.wrapFocus : false;
    },
    set: function set(value) {
      if (this.list_) {
        this.list_.wrapFocus = value;
      }
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(MDCMenu.prototype, "items", {
    /**
     * Return the items within the menu. Note that this only contains the set of elements within
     * the items container that are proper list items, and not supplemental / presentational DOM
     * elements.
     */
    get: function get() {
      return this.list_ ? this.list_.listElements : [];
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(MDCMenu.prototype, "quickOpen", {
    set: function set(quickOpen) {
      this.menuSurface_.quickOpen = quickOpen;
    },
    enumerable: true,
    configurable: true
  });
  /**
   * Sets default focus state where the menu should focus every time when menu
   * is opened. Focuses the list root (`DefaultFocusState.LIST_ROOT`) element by
   * default.
   * @param focusState Default focus state.
   */

  MDCMenu.prototype.setDefaultFocusState = function (focusState) {
    this.foundation_.setDefaultFocusState(focusState);
  };
  /**
   * @param corner Default anchor corner alignment of top-left menu corner.
   */


  MDCMenu.prototype.setAnchorCorner = function (corner) {
    this.menuSurface_.setAnchorCorner(corner);
  };

  MDCMenu.prototype.setAnchorMargin = function (margin) {
    this.menuSurface_.setAnchorMargin(margin);
  };
  /**
   * Sets the list item as the selected row at the specified index.
   * @param index Index of list item within menu.
   */


  MDCMenu.prototype.setSelectedIndex = function (index) {
    this.foundation_.setSelectedIndex(index);
  };
  /**
   * Sets the enabled state to isEnabled for the menu item at the given index.
   * @param index Index of the menu item
   * @param isEnabled The desired enabled state of the menu item.
   */


  MDCMenu.prototype.setEnabled = function (index, isEnabled) {
    this.foundation_.setEnabled(index, isEnabled);
  };
  /**
   * @return The item within the menu at the index specified.
   */


  MDCMenu.prototype.getOptionByIndex = function (index) {
    var items = this.items;

    if (index < items.length) {
      return this.items[index];
    } else {
      return null;
    }
  };

  MDCMenu.prototype.setFixedPosition = function (isFixed) {
    this.menuSurface_.setFixedPosition(isFixed);
  };

  MDCMenu.prototype.hoistMenuToBody = function () {
    this.menuSurface_.hoistMenuToBody();
  };

  MDCMenu.prototype.setIsHoisted = function (isHoisted) {
    this.menuSurface_.setIsHoisted(isHoisted);
  };

  MDCMenu.prototype.setAbsolutePosition = function (x, y) {
    this.menuSurface_.setAbsolutePosition(x, y);
  };
  /**
   * Sets the element that the menu-surface is anchored to.
   */


  MDCMenu.prototype.setAnchorElement = function (element) {
    this.menuSurface_.anchorElement = element;
  };

  MDCMenu.prototype.getDefaultFoundation = function () {
    var _this = this; // DO NOT INLINE this variable. For backward compatibility, foundations take a Partial<MDCFooAdapter>.
    // To ensure we don't accidentally omit any methods, we need a separate, strongly typed adapter variable.
    // tslint:disable:object-literal-sort-keys Methods should be in the same order as the adapter interface.


    var adapter = {
      addClassToElementAtIndex: function addClassToElementAtIndex(index, className) {
        var list = _this.items;
        list[index].classList.add(className);
      },
      removeClassFromElementAtIndex: function removeClassFromElementAtIndex(index, className) {
        var list = _this.items;
        list[index].classList.remove(className);
      },
      addAttributeToElementAtIndex: function addAttributeToElementAtIndex(index, attr, value) {
        var list = _this.items;
        list[index].setAttribute(attr, value);
      },
      removeAttributeFromElementAtIndex: function removeAttributeFromElementAtIndex(index, attr) {
        var list = _this.items;
        list[index].removeAttribute(attr);
      },
      elementContainsClass: function elementContainsClass(element, className) {
        return element.classList.contains(className);
      },
      closeSurface: function closeSurface(skipRestoreFocus) {
        return _this.menuSurface_.close(skipRestoreFocus);
      },
      getElementIndex: function getElementIndex(element) {
        return _this.items.indexOf(element);
      },
      notifySelected: function notifySelected(evtData) {
        return _this.emit(strings$2.SELECTED_EVENT, {
          index: evtData.index,
          item: _this.items[evtData.index]
        });
      },
      getMenuItemCount: function getMenuItemCount() {
        return _this.items.length;
      },
      focusItemAtIndex: function focusItemAtIndex(index) {
        return _this.items[index].focus();
      },
      focusListRoot: function focusListRoot() {
        return _this.root_.querySelector(strings$2.LIST_SELECTOR).focus();
      },
      isSelectableItemAtIndex: function isSelectableItemAtIndex(index) {
        return !!closest(_this.items[index], "." + cssClasses$4.MENU_SELECTION_GROUP);
      },
      getSelectedSiblingOfItemAtIndex: function getSelectedSiblingOfItemAtIndex(index) {
        var selectionGroupEl = closest(_this.items[index], "." + cssClasses$4.MENU_SELECTION_GROUP);
        var selectedItemEl = selectionGroupEl.querySelector("." + cssClasses$4.MENU_SELECTED_LIST_ITEM);
        return selectedItemEl ? _this.items.indexOf(selectedItemEl) : -1;
      }
    }; // tslint:enable:object-literal-sort-keys

    return new MDCMenuFoundation(adapter);
  };

  return MDCMenu;
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
var strings$3 = {
  NOTCH_ELEMENT_SELECTOR: '.mdc-notched-outline__notch'
};
var numbers$3 = {
  // This should stay in sync with $mdc-notched-outline-padding * 2.
  NOTCH_ELEMENT_PADDING: 8
};
var cssClasses$5 = {
  NO_LABEL: 'mdc-notched-outline--no-label',
  OUTLINE_NOTCHED: 'mdc-notched-outline--notched',
  OUTLINE_UPGRADED: 'mdc-notched-outline--upgraded'
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

var MDCNotchedOutlineFoundation =
/** @class */
function (_super) {
  __extends(MDCNotchedOutlineFoundation, _super);

  function MDCNotchedOutlineFoundation(adapter) {
    return _super.call(this, _assign({}, MDCNotchedOutlineFoundation.defaultAdapter, adapter)) || this;
  }

  Object.defineProperty(MDCNotchedOutlineFoundation, "strings", {
    get: function get() {
      return strings$3;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(MDCNotchedOutlineFoundation, "cssClasses", {
    get: function get() {
      return cssClasses$5;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(MDCNotchedOutlineFoundation, "numbers", {
    get: function get() {
      return numbers$3;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(MDCNotchedOutlineFoundation, "defaultAdapter", {
    /**
     * See {@link MDCNotchedOutlineAdapter} for typing information on parameters and return types.
     */
    get: function get() {
      // tslint:disable:object-literal-sort-keys Methods should be in the same order as the adapter interface.
      return {
        addClass: function addClass() {
          return undefined;
        },
        removeClass: function removeClass() {
          return undefined;
        },
        setNotchWidthProperty: function setNotchWidthProperty() {
          return undefined;
        },
        removeNotchWidthProperty: function removeNotchWidthProperty() {
          return undefined;
        }
      }; // tslint:enable:object-literal-sort-keys
    },
    enumerable: true,
    configurable: true
  });
  /**
   * Adds the outline notched selector and updates the notch width calculated based off of notchWidth.
   */

  MDCNotchedOutlineFoundation.prototype.notch = function (notchWidth) {
    var OUTLINE_NOTCHED = MDCNotchedOutlineFoundation.cssClasses.OUTLINE_NOTCHED;

    if (notchWidth > 0) {
      notchWidth += numbers$3.NOTCH_ELEMENT_PADDING; // Add padding from left/right.
    }

    this.adapter_.setNotchWidthProperty(notchWidth);
    this.adapter_.addClass(OUTLINE_NOTCHED);
  };
  /**
   * Removes notched outline selector to close the notch in the outline.
   */


  MDCNotchedOutlineFoundation.prototype.closeNotch = function () {
    var OUTLINE_NOTCHED = MDCNotchedOutlineFoundation.cssClasses.OUTLINE_NOTCHED;
    this.adapter_.removeClass(OUTLINE_NOTCHED);
    this.adapter_.removeNotchWidthProperty();
  };

  return MDCNotchedOutlineFoundation;
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

var MDCNotchedOutline =
/** @class */
function (_super) {
  __extends(MDCNotchedOutline, _super);

  function MDCNotchedOutline() {
    return _super !== null && _super.apply(this, arguments) || this;
  }

  MDCNotchedOutline.attachTo = function (root) {
    return new MDCNotchedOutline(root);
  };

  MDCNotchedOutline.prototype.initialSyncWithDOM = function () {
    this.notchElement_ = this.root_.querySelector(strings$3.NOTCH_ELEMENT_SELECTOR);
    var label = this.root_.querySelector('.' + MDCFloatingLabelFoundation.cssClasses.ROOT);

    if (label) {
      label.style.transitionDuration = '0s';
      this.root_.classList.add(cssClasses$5.OUTLINE_UPGRADED);
      requestAnimationFrame(function () {
        label.style.transitionDuration = '';
      });
    } else {
      this.root_.classList.add(cssClasses$5.NO_LABEL);
    }
  };
  /**
   * Updates classes and styles to open the notch to the specified width.
   * @param notchWidth The notch width in the outline.
   */


  MDCNotchedOutline.prototype.notch = function (notchWidth) {
    this.foundation_.notch(notchWidth);
  };
  /**
   * Updates classes and styles to close the notch.
   */


  MDCNotchedOutline.prototype.closeNotch = function () {
    this.foundation_.closeNotch();
  };

  MDCNotchedOutline.prototype.getDefaultFoundation = function () {
    var _this = this; // DO NOT INLINE this variable. For backward compatibility, foundations take a Partial<MDCFooAdapter>.
    // To ensure we don't accidentally omit any methods, we need a separate, strongly typed adapter variable.
    // tslint:disable:object-literal-sort-keys Methods should be in the same order as the adapter interface.


    var adapter = {
      addClass: function addClass(className) {
        return _this.root_.classList.add(className);
      },
      removeClass: function removeClass(className) {
        return _this.root_.classList.remove(className);
      },
      setNotchWidthProperty: function setNotchWidthProperty(width) {
        return _this.notchElement_.style.setProperty('width', width + 'px');
      },
      removeNotchWidthProperty: function removeNotchWidthProperty() {
        return _this.notchElement_.style.removeProperty('width');
      }
    }; // tslint:enable:object-literal-sort-keys

    return new MDCNotchedOutlineFoundation(adapter);
  };

  return MDCNotchedOutline;
}(MDCComponent);

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
var cssClasses$6 = {
  // Ripple is a special case where the "root" component is really a "mixin" of sorts,
  // given that it's an 'upgrade' to an existing component. That being said it is the root
  // CSS class that all other CSS classes derive from.
  BG_FOCUSED: 'mdc-ripple-upgraded--background-focused',
  FG_ACTIVATION: 'mdc-ripple-upgraded--foreground-activation',
  FG_DEACTIVATION: 'mdc-ripple-upgraded--foreground-deactivation',
  ROOT: 'mdc-ripple-upgraded',
  UNBOUNDED: 'mdc-ripple-upgraded--unbounded'
};
var strings$4 = {
  VAR_FG_SCALE: '--mdc-ripple-fg-scale',
  VAR_FG_SIZE: '--mdc-ripple-fg-size',
  VAR_FG_TRANSLATE_END: '--mdc-ripple-fg-translate-end',
  VAR_FG_TRANSLATE_START: '--mdc-ripple-fg-translate-start',
  VAR_LEFT: '--mdc-ripple-left',
  VAR_TOP: '--mdc-ripple-top'
};
var numbers$4 = {
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
      return cssClasses$6;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(MDCRippleFoundation, "strings", {
    get: function get() {
      return strings$4;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(MDCRippleFoundation, "numbers", {
    get: function get() {
      return numbers$4;
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
      }, numbers$4.FG_DEACTIVATION_MS);
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
var cssClasses$7 = {
  ACTIVATED: 'mdc-select--activated',
  DISABLED: 'mdc-select--disabled',
  FOCUSED: 'mdc-select--focused',
  INVALID: 'mdc-select--invalid',
  OUTLINED: 'mdc-select--outlined',
  REQUIRED: 'mdc-select--required',
  ROOT: 'mdc-select',
  SELECTED_ITEM_CLASS: 'mdc-list-item--selected',
  WITH_LEADING_ICON: 'mdc-select--with-leading-icon'
};
var strings$5 = {
  ARIA_CONTROLS: 'aria-controls',
  ARIA_SELECTED_ATTR: 'aria-selected',
  CHANGE_EVENT: 'MDCSelect:change',
  ENHANCED_VALUE_ATTR: 'data-value',
  HIDDEN_INPUT_SELECTOR: 'input[type="hidden"]',
  LABEL_SELECTOR: '.mdc-floating-label',
  LEADING_ICON_SELECTOR: '.mdc-select__icon',
  LINE_RIPPLE_SELECTOR: '.mdc-line-ripple',
  MENU_SELECTOR: '.mdc-select__menu',
  NATIVE_CONTROL_SELECTOR: '.mdc-select__native-control',
  OUTLINE_SELECTOR: '.mdc-notched-outline',
  SELECTED_ITEM_SELECTOR: "." + cssClasses$7.SELECTED_ITEM_CLASS,
  SELECTED_TEXT_SELECTOR: '.mdc-select__selected-text'
};
var numbers$5 = {
  LABEL_SCALE: 0.75
};

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

var MDCSelectFoundation =
/** @class */
function (_super) {
  __extends(MDCSelectFoundation, _super);
  /* istanbul ignore next: optional argument is not a branch statement */

  /**
   * @param adapter
   * @param foundationMap Map from subcomponent names to their subfoundations.
   */


  function MDCSelectFoundation(adapter, foundationMap) {
    if (foundationMap === void 0) {
      foundationMap = {};
    }

    var _this = _super.call(this, _assign({}, MDCSelectFoundation.defaultAdapter, adapter)) || this;

    _this.leadingIcon_ = foundationMap.leadingIcon;
    _this.helperText_ = foundationMap.helperText;
    return _this;
  }

  Object.defineProperty(MDCSelectFoundation, "cssClasses", {
    get: function get() {
      return cssClasses$7;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(MDCSelectFoundation, "numbers", {
    get: function get() {
      return numbers$5;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(MDCSelectFoundation, "strings", {
    get: function get() {
      return strings$5;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(MDCSelectFoundation, "defaultAdapter", {
    /**
     * See {@link MDCSelectAdapter} for typing information on parameters and return types.
     */
    get: function get() {
      // tslint:disable:object-literal-sort-keys Methods should be in the same order as the adapter interface.
      return {
        addClass: function addClass() {
          return undefined;
        },
        removeClass: function removeClass() {
          return undefined;
        },
        hasClass: function hasClass() {
          return false;
        },
        activateBottomLine: function activateBottomLine() {
          return undefined;
        },
        deactivateBottomLine: function deactivateBottomLine() {
          return undefined;
        },
        setValue: function setValue() {
          return undefined;
        },
        getValue: function getValue() {
          return '';
        },
        floatLabel: function floatLabel() {
          return undefined;
        },
        getLabelWidth: function getLabelWidth() {
          return 0;
        },
        hasOutline: function hasOutline() {
          return false;
        },
        notchOutline: function notchOutline() {
          return undefined;
        },
        closeOutline: function closeOutline() {
          return undefined;
        },
        openMenu: function openMenu() {
          return undefined;
        },
        closeMenu: function closeMenu() {
          return undefined;
        },
        isMenuOpen: function isMenuOpen() {
          return false;
        },
        setSelectedIndex: function setSelectedIndex() {
          return undefined;
        },
        setDisabled: function setDisabled() {
          return undefined;
        },
        setRippleCenter: function setRippleCenter() {
          return undefined;
        },
        notifyChange: function notifyChange() {
          return undefined;
        },
        checkValidity: function checkValidity() {
          return false;
        },
        setValid: function setValid() {
          return undefined;
        }
      }; // tslint:enable:object-literal-sort-keys
    },
    enumerable: true,
    configurable: true
  });

  MDCSelectFoundation.prototype.setSelectedIndex = function (index) {
    this.adapter_.setSelectedIndex(index);
    this.adapter_.closeMenu();
    var didChange = true;
    this.handleChange(didChange);
  };

  MDCSelectFoundation.prototype.setValue = function (value) {
    this.adapter_.setValue(value);
    var didChange = true;
    this.handleChange(didChange);
  };

  MDCSelectFoundation.prototype.getValue = function () {
    return this.adapter_.getValue();
  };

  MDCSelectFoundation.prototype.setDisabled = function (isDisabled) {
    if (isDisabled) {
      this.adapter_.addClass(cssClasses$7.DISABLED);
    } else {
      this.adapter_.removeClass(cssClasses$7.DISABLED);
    }

    this.adapter_.setDisabled(isDisabled);
    this.adapter_.closeMenu();

    if (this.leadingIcon_) {
      this.leadingIcon_.setDisabled(isDisabled);
    }
  };
  /**
   * @param content Sets the content of the helper text.
   */


  MDCSelectFoundation.prototype.setHelperTextContent = function (content) {
    if (this.helperText_) {
      this.helperText_.setContent(content);
    }
  };

  MDCSelectFoundation.prototype.layout = function () {
    var openNotch = this.getValue().length > 0;
    this.notchOutline(openNotch);
  };

  MDCSelectFoundation.prototype.handleMenuOpened = function () {
    this.adapter_.addClass(cssClasses$7.ACTIVATED);
  };

  MDCSelectFoundation.prototype.handleMenuClosed = function () {
    this.adapter_.removeClass(cssClasses$7.ACTIVATED);
  };
  /**
   * Handles value changes, via change event or programmatic updates.
   */


  MDCSelectFoundation.prototype.handleChange = function (didChange) {
    if (didChange === void 0) {
      didChange = true;
    }

    var value = this.getValue();
    var optionHasValue = value.length > 0;
    var isRequired = this.adapter_.hasClass(cssClasses$7.REQUIRED);
    this.notchOutline(optionHasValue);

    if (!this.adapter_.hasClass(cssClasses$7.FOCUSED)) {
      this.adapter_.floatLabel(optionHasValue);
    }

    if (didChange) {
      this.adapter_.notifyChange(value);

      if (isRequired) {
        this.setValid(this.isValid());

        if (this.helperText_) {
          this.helperText_.setValidity(this.isValid());
        }
      }
    }
  };
  /**
   * Handles focus events from select element.
   */


  MDCSelectFoundation.prototype.handleFocus = function () {
    this.adapter_.addClass(cssClasses$7.FOCUSED);
    this.adapter_.floatLabel(true);
    this.notchOutline(true);
    this.adapter_.activateBottomLine();

    if (this.helperText_) {
      this.helperText_.showToScreenReader();
    }
  };
  /**
   * Handles blur events from select element.
   */


  MDCSelectFoundation.prototype.handleBlur = function () {
    if (this.adapter_.isMenuOpen()) {
      return;
    }

    this.adapter_.removeClass(cssClasses$7.FOCUSED);
    this.handleChange(false);
    this.adapter_.deactivateBottomLine();
    var isRequired = this.adapter_.hasClass(cssClasses$7.REQUIRED);

    if (isRequired) {
      this.setValid(this.isValid());

      if (this.helperText_) {
        this.helperText_.setValidity(this.isValid());
      }
    }
  };

  MDCSelectFoundation.prototype.handleClick = function (normalizedX) {
    if (this.adapter_.isMenuOpen()) {
      return;
    }

    this.adapter_.setRippleCenter(normalizedX);
    this.adapter_.openMenu();
  };

  MDCSelectFoundation.prototype.handleKeydown = function (event) {
    if (this.adapter_.isMenuOpen()) {
      return;
    }

    var isEnter = event.key === 'Enter' || event.keyCode === 13;
    var isSpace = event.key === 'Space' || event.keyCode === 32;
    var arrowUp = event.key === 'ArrowUp' || event.keyCode === 38;
    var arrowDown = event.key === 'ArrowDown' || event.keyCode === 40;

    if (this.adapter_.hasClass(cssClasses$7.FOCUSED) && (isEnter || isSpace || arrowUp || arrowDown)) {
      this.adapter_.openMenu();
      event.preventDefault();
    }
  };
  /**
   * Opens/closes the notched outline.
   */


  MDCSelectFoundation.prototype.notchOutline = function (openNotch) {
    if (!this.adapter_.hasOutline()) {
      return;
    }

    var isFocused = this.adapter_.hasClass(cssClasses$7.FOCUSED);

    if (openNotch) {
      var labelScale = numbers$5.LABEL_SCALE;
      var labelWidth = this.adapter_.getLabelWidth() * labelScale;
      this.adapter_.notchOutline(labelWidth);
    } else if (!isFocused) {
      this.adapter_.closeOutline();
    }
  };
  /**
   * Sets the aria label of the leading icon.
   */


  MDCSelectFoundation.prototype.setLeadingIconAriaLabel = function (label) {
    if (this.leadingIcon_) {
      this.leadingIcon_.setAriaLabel(label);
    }
  };
  /**
   * Sets the text content of the leading icon.
   */


  MDCSelectFoundation.prototype.setLeadingIconContent = function (content) {
    if (this.leadingIcon_) {
      this.leadingIcon_.setContent(content);
    }
  };

  MDCSelectFoundation.prototype.setValid = function (isValid) {
    this.adapter_.setValid(isValid);
  };

  MDCSelectFoundation.prototype.isValid = function () {
    return this.adapter_.checkValidity();
  };

  return MDCSelectFoundation;
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
var strings$6 = {
  ARIA_HIDDEN: 'aria-hidden',
  ROLE: 'role'
};
var cssClasses$8 = {
  HELPER_TEXT_PERSISTENT: 'mdc-select-helper-text--persistent',
  HELPER_TEXT_VALIDATION_MSG: 'mdc-select-helper-text--validation-msg'
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

var MDCSelectHelperTextFoundation =
/** @class */
function (_super) {
  __extends(MDCSelectHelperTextFoundation, _super);

  function MDCSelectHelperTextFoundation(adapter) {
    return _super.call(this, _assign({}, MDCSelectHelperTextFoundation.defaultAdapter, adapter)) || this;
  }

  Object.defineProperty(MDCSelectHelperTextFoundation, "cssClasses", {
    get: function get() {
      return cssClasses$8;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(MDCSelectHelperTextFoundation, "strings", {
    get: function get() {
      return strings$6;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(MDCSelectHelperTextFoundation, "defaultAdapter", {
    /**
     * See {@link MDCSelectHelperTextAdapter} for typing information on parameters and return types.
     */
    get: function get() {
      // tslint:disable:object-literal-sort-keys Methods should be in the same order as the adapter interface.
      return {
        addClass: function addClass() {
          return undefined;
        },
        removeClass: function removeClass() {
          return undefined;
        },
        hasClass: function hasClass() {
          return false;
        },
        setAttr: function setAttr() {
          return undefined;
        },
        removeAttr: function removeAttr() {
          return undefined;
        },
        setContent: function setContent() {
          return undefined;
        }
      }; // tslint:enable:object-literal-sort-keys
    },
    enumerable: true,
    configurable: true
  });
  /**
   * Sets the content of the helper text field.
   */

  MDCSelectHelperTextFoundation.prototype.setContent = function (content) {
    this.adapter_.setContent(content);
  };
  /**
   *  Sets the persistency of the helper text.
   */


  MDCSelectHelperTextFoundation.prototype.setPersistent = function (isPersistent) {
    if (isPersistent) {
      this.adapter_.addClass(cssClasses$8.HELPER_TEXT_PERSISTENT);
    } else {
      this.adapter_.removeClass(cssClasses$8.HELPER_TEXT_PERSISTENT);
    }
  };
  /**
   * @param isValidation True to make the helper text act as an error validation message.
   */


  MDCSelectHelperTextFoundation.prototype.setValidation = function (isValidation) {
    if (isValidation) {
      this.adapter_.addClass(cssClasses$8.HELPER_TEXT_VALIDATION_MSG);
    } else {
      this.adapter_.removeClass(cssClasses$8.HELPER_TEXT_VALIDATION_MSG);
    }
  };
  /**
   * Makes the helper text visible to screen readers.
   */


  MDCSelectHelperTextFoundation.prototype.showToScreenReader = function () {
    this.adapter_.removeAttr(strings$6.ARIA_HIDDEN);
  };
  /**
   * Sets the validity of the helper text based on the select validity.
   */


  MDCSelectHelperTextFoundation.prototype.setValidity = function (selectIsValid) {
    var helperTextIsPersistent = this.adapter_.hasClass(cssClasses$8.HELPER_TEXT_PERSISTENT);
    var helperTextIsValidationMsg = this.adapter_.hasClass(cssClasses$8.HELPER_TEXT_VALIDATION_MSG);
    var validationMsgNeedsDisplay = helperTextIsValidationMsg && !selectIsValid;

    if (validationMsgNeedsDisplay) {
      this.adapter_.setAttr(strings$6.ROLE, 'alert');
    } else {
      this.adapter_.removeAttr(strings$6.ROLE);
    }

    if (!helperTextIsPersistent && !validationMsgNeedsDisplay) {
      this.hide_();
    }
  };
  /**
   * Hides the help text from screen readers.
   */


  MDCSelectHelperTextFoundation.prototype.hide_ = function () {
    this.adapter_.setAttr(strings$6.ARIA_HIDDEN, 'true');
  };

  return MDCSelectHelperTextFoundation;
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

var MDCSelectHelperText =
/** @class */
function (_super) {
  __extends(MDCSelectHelperText, _super);

  function MDCSelectHelperText() {
    return _super !== null && _super.apply(this, arguments) || this;
  }

  MDCSelectHelperText.attachTo = function (root) {
    return new MDCSelectHelperText(root);
  };

  Object.defineProperty(MDCSelectHelperText.prototype, "foundation", {
    get: function get() {
      return this.foundation_;
    },
    enumerable: true,
    configurable: true
  });

  MDCSelectHelperText.prototype.getDefaultFoundation = function () {
    var _this = this; // DO NOT INLINE this variable. For backward compatibility, foundations take a Partial<MDCFooAdapter>.
    // To ensure we don't accidentally omit any methods, we need a separate, strongly typed adapter variable.
    // tslint:disable:object-literal-sort-keys Methods should be in the same order as the adapter interface.


    var adapter = {
      addClass: function addClass(className) {
        return _this.root_.classList.add(className);
      },
      removeClass: function removeClass(className) {
        return _this.root_.classList.remove(className);
      },
      hasClass: function hasClass(className) {
        return _this.root_.classList.contains(className);
      },
      setAttr: function setAttr(attr, value) {
        return _this.root_.setAttribute(attr, value);
      },
      removeAttr: function removeAttr(attr) {
        return _this.root_.removeAttribute(attr);
      },
      setContent: function setContent(content) {
        _this.root_.textContent = content;
      }
    }; // tslint:enable:object-literal-sort-keys

    return new MDCSelectHelperTextFoundation(adapter);
  };

  return MDCSelectHelperText;
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
var strings$7 = {
  ICON_EVENT: 'MDCSelect:icon',
  ICON_ROLE: 'button'
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
var INTERACTION_EVENTS = ['click', 'keydown'];

var MDCSelectIconFoundation =
/** @class */
function (_super) {
  __extends(MDCSelectIconFoundation, _super);

  function MDCSelectIconFoundation(adapter) {
    var _this = _super.call(this, _assign({}, MDCSelectIconFoundation.defaultAdapter, adapter)) || this;

    _this.savedTabIndex_ = null;

    _this.interactionHandler_ = function (evt) {
      return _this.handleInteraction(evt);
    };

    return _this;
  }

  Object.defineProperty(MDCSelectIconFoundation, "strings", {
    get: function get() {
      return strings$7;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(MDCSelectIconFoundation, "defaultAdapter", {
    /**
     * See {@link MDCSelectIconAdapter} for typing information on parameters and return types.
     */
    get: function get() {
      // tslint:disable:object-literal-sort-keys Methods should be in the same order as the adapter interface.
      return {
        getAttr: function getAttr() {
          return null;
        },
        setAttr: function setAttr() {
          return undefined;
        },
        removeAttr: function removeAttr() {
          return undefined;
        },
        setContent: function setContent() {
          return undefined;
        },
        registerInteractionHandler: function registerInteractionHandler() {
          return undefined;
        },
        deregisterInteractionHandler: function deregisterInteractionHandler() {
          return undefined;
        },
        notifyIconAction: function notifyIconAction() {
          return undefined;
        }
      }; // tslint:enable:object-literal-sort-keys
    },
    enumerable: true,
    configurable: true
  });

  MDCSelectIconFoundation.prototype.init = function () {
    var _this = this;

    this.savedTabIndex_ = this.adapter_.getAttr('tabindex');
    INTERACTION_EVENTS.forEach(function (evtType) {
      _this.adapter_.registerInteractionHandler(evtType, _this.interactionHandler_);
    });
  };

  MDCSelectIconFoundation.prototype.destroy = function () {
    var _this = this;

    INTERACTION_EVENTS.forEach(function (evtType) {
      _this.adapter_.deregisterInteractionHandler(evtType, _this.interactionHandler_);
    });
  };

  MDCSelectIconFoundation.prototype.setDisabled = function (disabled) {
    if (!this.savedTabIndex_) {
      return;
    }

    if (disabled) {
      this.adapter_.setAttr('tabindex', '-1');
      this.adapter_.removeAttr('role');
    } else {
      this.adapter_.setAttr('tabindex', this.savedTabIndex_);
      this.adapter_.setAttr('role', strings$7.ICON_ROLE);
    }
  };

  MDCSelectIconFoundation.prototype.setAriaLabel = function (label) {
    this.adapter_.setAttr('aria-label', label);
  };

  MDCSelectIconFoundation.prototype.setContent = function (content) {
    this.adapter_.setContent(content);
  };

  MDCSelectIconFoundation.prototype.handleInteraction = function (evt) {
    var isEnterKey = evt.key === 'Enter' || evt.keyCode === 13;

    if (evt.type === 'click' || isEnterKey) {
      this.adapter_.notifyIconAction();
    }
  };

  return MDCSelectIconFoundation;
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

var MDCSelectIcon =
/** @class */
function (_super) {
  __extends(MDCSelectIcon, _super);

  function MDCSelectIcon() {
    return _super !== null && _super.apply(this, arguments) || this;
  }

  MDCSelectIcon.attachTo = function (root) {
    return new MDCSelectIcon(root);
  };

  Object.defineProperty(MDCSelectIcon.prototype, "foundation", {
    get: function get() {
      return this.foundation_;
    },
    enumerable: true,
    configurable: true
  });

  MDCSelectIcon.prototype.getDefaultFoundation = function () {
    var _this = this; // DO NOT INLINE this variable. For backward compatibility, foundations take a Partial<MDCFooAdapter>.
    // To ensure we don't accidentally omit any methods, we need a separate, strongly typed adapter variable.
    // tslint:disable:object-literal-sort-keys Methods should be in the same order as the adapter interface.


    var adapter = {
      getAttr: function getAttr(attr) {
        return _this.root_.getAttribute(attr);
      },
      setAttr: function setAttr(attr, value) {
        return _this.root_.setAttribute(attr, value);
      },
      removeAttr: function removeAttr(attr) {
        return _this.root_.removeAttribute(attr);
      },
      setContent: function setContent(content) {
        _this.root_.textContent = content;
      },
      registerInteractionHandler: function registerInteractionHandler(evtType, handler) {
        return _this.listen(evtType, handler);
      },
      deregisterInteractionHandler: function deregisterInteractionHandler(evtType, handler) {
        return _this.unlisten(evtType, handler);
      },
      notifyIconAction: function notifyIconAction() {
        return _this.emit(MDCSelectIconFoundation.strings.ICON_EVENT, {}
        /* evtData */
        , true
        /* shouldBubble */
        );
      }
    }; // tslint:enable:object-literal-sort-keys

    return new MDCSelectIconFoundation(adapter);
  };

  return MDCSelectIcon;
}(MDCComponent);

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
var VALIDATION_ATTR_WHITELIST = ['required', 'aria-required'];

var MDCSelect =
/** @class */
function (_super) {
  __extends(MDCSelect, _super);

  function MDCSelect() {
    return _super !== null && _super.apply(this, arguments) || this;
  }

  MDCSelect.attachTo = function (root) {
    return new MDCSelect(root);
  };

  MDCSelect.prototype.initialize = function (labelFactory, lineRippleFactory, outlineFactory, menuFactory, iconFactory, helperTextFactory) {
    if (labelFactory === void 0) {
      labelFactory = function labelFactory(el) {
        return new MDCFloatingLabel(el);
      };
    }

    if (lineRippleFactory === void 0) {
      lineRippleFactory = function lineRippleFactory(el) {
        return new MDCLineRipple(el);
      };
    }

    if (outlineFactory === void 0) {
      outlineFactory = function outlineFactory(el) {
        return new MDCNotchedOutline(el);
      };
    }

    if (menuFactory === void 0) {
      menuFactory = function menuFactory(el) {
        return new MDCMenu(el);
      };
    }

    if (iconFactory === void 0) {
      iconFactory = function iconFactory(el) {
        return new MDCSelectIcon(el);
      };
    }

    if (helperTextFactory === void 0) {
      helperTextFactory = function helperTextFactory(el) {
        return new MDCSelectHelperText(el);
      };
    }

    this.isMenuOpen_ = false;
    this.nativeControl_ = this.root_.querySelector(strings$5.NATIVE_CONTROL_SELECTOR);
    this.selectedText_ = this.root_.querySelector(strings$5.SELECTED_TEXT_SELECTOR);
    var targetElement = this.nativeControl_ || this.selectedText_;

    if (!targetElement) {
      throw new Error('MDCSelect: Missing required element: Exactly one of the following selectors must be present: ' + ("'" + strings$5.NATIVE_CONTROL_SELECTOR + "' or '" + strings$5.SELECTED_TEXT_SELECTOR + "'"));
    }

    this.targetElement_ = targetElement;

    if (this.targetElement_.hasAttribute(strings$5.ARIA_CONTROLS)) {
      var helperTextElement = document.getElementById(this.targetElement_.getAttribute(strings$5.ARIA_CONTROLS));

      if (helperTextElement) {
        this.helperText_ = helperTextFactory(helperTextElement);
      }
    }

    if (this.selectedText_) {
      this.enhancedSelectSetup_(menuFactory);
    }

    var labelElement = this.root_.querySelector(strings$5.LABEL_SELECTOR);
    this.label_ = labelElement ? labelFactory(labelElement) : null;
    var lineRippleElement = this.root_.querySelector(strings$5.LINE_RIPPLE_SELECTOR);
    this.lineRipple_ = lineRippleElement ? lineRippleFactory(lineRippleElement) : null;
    var outlineElement = this.root_.querySelector(strings$5.OUTLINE_SELECTOR);
    this.outline_ = outlineElement ? outlineFactory(outlineElement) : null;
    var leadingIcon = this.root_.querySelector(strings$5.LEADING_ICON_SELECTOR);

    if (leadingIcon) {
      this.root_.classList.add(cssClasses$7.WITH_LEADING_ICON);
      this.leadingIcon_ = iconFactory(leadingIcon);

      if (this.menuElement_) {
        this.menuElement_.classList.add(cssClasses$7.WITH_LEADING_ICON);
      }
    }

    if (!this.root_.classList.contains(cssClasses$7.OUTLINED)) {
      this.ripple = this.createRipple_();
    } // The required state needs to be sync'd before the mutation observer is added.


    this.initialSyncRequiredState_();
    this.addMutationObserverForRequired_();
  };
  /**
   * Initializes the select's event listeners and internal state based
   * on the environment's state.
   */


  MDCSelect.prototype.initialSyncWithDOM = function () {
    var _this = this;

    this.handleChange_ = function () {
      return _this.foundation_.handleChange(
      /* didChange */
      true);
    };

    this.handleFocus_ = function () {
      return _this.foundation_.handleFocus();
    };

    this.handleBlur_ = function () {
      return _this.foundation_.handleBlur();
    };

    this.handleClick_ = function (evt) {
      if (_this.selectedText_) {
        _this.selectedText_.focus();
      }

      _this.foundation_.handleClick(_this.getNormalizedXCoordinate_(evt));
    };

    this.handleKeydown_ = function (evt) {
      return _this.foundation_.handleKeydown(evt);
    };

    this.handleMenuSelected_ = function (evtData) {
      return _this.selectedIndex = evtData.detail.index;
    };

    this.handleMenuOpened_ = function () {
      _this.foundation_.handleMenuOpened();

      if (_this.menu_.items.length === 0) {
        return;
      } // Menu should open to the last selected element, should open to first menu item otherwise.


      var focusItemIndex = _this.selectedIndex >= 0 ? _this.selectedIndex : 0;
      var focusItemEl = _this.menu_.items[focusItemIndex];
      focusItemEl.focus();
    };

    this.handleMenuClosed_ = function () {
      _this.foundation_.handleMenuClosed(); // isMenuOpen_ is used to track the state of the menu opening or closing since the menu.open function
      // will return false if the menu is still closing and this method listens to the closed event which
      // occurs after the menu is already closed.


      _this.isMenuOpen_ = false;

      _this.selectedText_.removeAttribute('aria-expanded');

      if (document.activeElement !== _this.selectedText_) {
        _this.foundation_.handleBlur();
      }
    };

    this.targetElement_.addEventListener('change', this.handleChange_);
    this.targetElement_.addEventListener('focus', this.handleFocus_);
    this.targetElement_.addEventListener('blur', this.handleBlur_);
    this.targetElement_.addEventListener('click', this.handleClick_);

    if (this.menuElement_) {
      this.selectedText_.addEventListener('keydown', this.handleKeydown_);
      this.menu_.listen(strings.CLOSED_EVENT, this.handleMenuClosed_);
      this.menu_.listen(strings.OPENED_EVENT, this.handleMenuOpened_);
      this.menu_.listen(strings$2.SELECTED_EVENT, this.handleMenuSelected_);

      if (this.hiddenInput_ && this.hiddenInput_.value) {
        // If the hidden input already has a value, use it to restore the select's value.
        // This can happen e.g. if the user goes back or (in some browsers) refreshes the page.
        var enhancedAdapterMethods = this.getEnhancedSelectAdapterMethods_();
        enhancedAdapterMethods.setValue(this.hiddenInput_.value);
      } else if (this.menuElement_.querySelector(strings$5.SELECTED_ITEM_SELECTOR)) {
        // If an element is selected, the select should set the initial selected text.
        var enhancedAdapterMethods = this.getEnhancedSelectAdapterMethods_();
        enhancedAdapterMethods.setValue(enhancedAdapterMethods.getValue());
      }
    } // Initially sync floating label


    this.foundation_.handleChange(
    /* didChange */
    false);

    if (this.root_.classList.contains(cssClasses$7.DISABLED) || this.nativeControl_ && this.nativeControl_.disabled) {
      this.disabled = true;
    }
  };

  MDCSelect.prototype.destroy = function () {
    this.targetElement_.removeEventListener('change', this.handleChange_);
    this.targetElement_.removeEventListener('focus', this.handleFocus_);
    this.targetElement_.removeEventListener('blur', this.handleBlur_);
    this.targetElement_.removeEventListener('keydown', this.handleKeydown_);
    this.targetElement_.removeEventListener('click', this.handleClick_);

    if (this.menu_) {
      this.menu_.unlisten(strings.CLOSED_EVENT, this.handleMenuClosed_);
      this.menu_.unlisten(strings.OPENED_EVENT, this.handleMenuOpened_);
      this.menu_.unlisten(strings$2.SELECTED_EVENT, this.handleMenuSelected_);
      this.menu_.destroy();
    }

    if (this.ripple) {
      this.ripple.destroy();
    }

    if (this.outline_) {
      this.outline_.destroy();
    }

    if (this.leadingIcon_) {
      this.leadingIcon_.destroy();
    }

    if (this.helperText_) {
      this.helperText_.destroy();
    }

    if (this.validationObserver_) {
      this.validationObserver_.disconnect();
    }

    _super.prototype.destroy.call(this);
  };

  Object.defineProperty(MDCSelect.prototype, "value", {
    get: function get() {
      return this.foundation_.getValue();
    },
    set: function set(value) {
      this.foundation_.setValue(value);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(MDCSelect.prototype, "selectedIndex", {
    get: function get() {
      var selectedIndex = -1;

      if (this.menuElement_ && this.menu_) {
        var selectedEl = this.menuElement_.querySelector(strings$5.SELECTED_ITEM_SELECTOR);
        selectedIndex = this.menu_.items.indexOf(selectedEl);
      } else if (this.nativeControl_) {
        selectedIndex = this.nativeControl_.selectedIndex;
      }

      return selectedIndex;
    },
    set: function set(selectedIndex) {
      this.foundation_.setSelectedIndex(selectedIndex);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(MDCSelect.prototype, "disabled", {
    get: function get() {
      return this.root_.classList.contains(cssClasses$7.DISABLED) || (this.nativeControl_ ? this.nativeControl_.disabled : false);
    },
    set: function set(disabled) {
      this.foundation_.setDisabled(disabled);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(MDCSelect.prototype, "leadingIconAriaLabel", {
    set: function set(label) {
      this.foundation_.setLeadingIconAriaLabel(label);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(MDCSelect.prototype, "leadingIconContent", {
    /**
     * Sets the text content of the leading icon.
     */
    set: function set(content) {
      this.foundation_.setLeadingIconContent(content);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(MDCSelect.prototype, "helperTextContent", {
    /**
     * Sets the text content of the helper text.
     */
    set: function set(content) {
      this.foundation_.setHelperTextContent(content);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(MDCSelect.prototype, "valid", {
    /**
     * Checks if the select is in a valid state.
     */
    get: function get() {
      return this.foundation_.isValid();
    },

    /**
     * Sets the current invalid state of the select.
     */
    set: function set(isValid) {
      this.foundation_.setValid(isValid);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(MDCSelect.prototype, "required", {
    /**
     * Returns whether the select is required.
     */
    get: function get() {
      if (this.nativeControl_) {
        return this.nativeControl_.required;
      } else {
        return this.selectedText_.getAttribute('aria-required') === 'true';
      }
    },

    /**
     * Sets the control to the required state.
     */
    set: function set(isRequired) {
      if (this.nativeControl_) {
        this.nativeControl_.required = isRequired;
      } else {
        if (isRequired) {
          this.selectedText_.setAttribute('aria-required', isRequired.toString());
        } else {
          this.selectedText_.removeAttribute('aria-required');
        }
      }
    },
    enumerable: true,
    configurable: true
  });
  /**
   * Recomputes the outline SVG path for the outline element.
   */

  MDCSelect.prototype.layout = function () {
    this.foundation_.layout();
  };

  MDCSelect.prototype.getDefaultFoundation = function () {
    // DO NOT INLINE this variable. For backward compatibility, foundations take a Partial<MDCFooAdapter>.
    // To ensure we don't accidentally omit any methods, we need a separate, strongly typed adapter variable.
    var adapter = _assign({}, this.nativeControl_ ? this.getNativeSelectAdapterMethods_() : this.getEnhancedSelectAdapterMethods_(), this.getCommonAdapterMethods_(), this.getOutlineAdapterMethods_(), this.getLabelAdapterMethods_());

    return new MDCSelectFoundation(adapter, this.getFoundationMap_());
  };
  /**
   * Handles setup for the enhanced menu.
   */


  MDCSelect.prototype.enhancedSelectSetup_ = function (menuFactory) {
    var isDisabled = this.root_.classList.contains(cssClasses$7.DISABLED);
    this.selectedText_.setAttribute('tabindex', isDisabled ? '-1' : '0');
    this.hiddenInput_ = this.root_.querySelector(strings$5.HIDDEN_INPUT_SELECTOR);
    this.menuElement_ = this.root_.querySelector(strings$5.MENU_SELECTOR);
    this.menu_ = menuFactory(this.menuElement_);
    this.menu_.hoistMenuToBody();
    this.menu_.setAnchorElement(this.root_);
    this.menu_.setAnchorCorner(Corner.BOTTOM_START);
    this.menu_.wrapFocus = false;
  };

  MDCSelect.prototype.createRipple_ = function () {
    var _this = this; // DO NOT INLINE this variable. For backward compatibility, foundations take a Partial<MDCFooAdapter>.
    // To ensure we don't accidentally omit any methods, we need a separate, strongly typed adapter variable.
    // tslint:disable:object-literal-sort-keys Methods should be in the same order as the adapter interface.


    var adapter = _assign({}, MDCRipple.createAdapter(this), {
      registerInteractionHandler: function registerInteractionHandler(evtType, handler) {
        return _this.targetElement_.addEventListener(evtType, handler);
      },
      deregisterInteractionHandler: function deregisterInteractionHandler(evtType, handler) {
        return _this.targetElement_.removeEventListener(evtType, handler);
      }
    }); // tslint:enable:object-literal-sort-keys


    return new MDCRipple(this.root_, new MDCRippleFoundation(adapter));
  };

  MDCSelect.prototype.getNativeSelectAdapterMethods_ = function () {
    var _this = this; // tslint:disable:object-literal-sort-keys Methods should be in the same order as the adapter interface.


    return {
      getValue: function getValue() {
        return _this.nativeControl_.value;
      },
      setValue: function setValue(value) {
        _this.nativeControl_.value = value;
      },
      openMenu: function openMenu() {
        return undefined;
      },
      closeMenu: function closeMenu() {
        return undefined;
      },
      isMenuOpen: function isMenuOpen() {
        return false;
      },
      setSelectedIndex: function setSelectedIndex(index) {
        _this.nativeControl_.selectedIndex = index;
      },
      setDisabled: function setDisabled(isDisabled) {
        _this.nativeControl_.disabled = isDisabled;
      },
      setValid: function setValid(isValid) {
        if (isValid) {
          _this.root_.classList.remove(cssClasses$7.INVALID);
        } else {
          _this.root_.classList.add(cssClasses$7.INVALID);
        }
      },
      checkValidity: function checkValidity() {
        return _this.nativeControl_.checkValidity();
      }
    }; // tslint:enable:object-literal-sort-keys
  };

  MDCSelect.prototype.getEnhancedSelectAdapterMethods_ = function () {
    var _this = this; // tslint:disable:object-literal-sort-keys Methods should be in the same order as the adapter interface.


    return {
      getValue: function getValue() {
        var listItem = _this.menuElement_.querySelector(strings$5.SELECTED_ITEM_SELECTOR);

        if (listItem && listItem.hasAttribute(strings$5.ENHANCED_VALUE_ATTR)) {
          return listItem.getAttribute(strings$5.ENHANCED_VALUE_ATTR) || '';
        }

        return '';
      },
      setValue: function setValue(value) {
        var element = _this.menuElement_.querySelector("[" + strings$5.ENHANCED_VALUE_ATTR + "=\"" + value + "\"]");

        _this.setEnhancedSelectedIndex_(element ? _this.menu_.items.indexOf(element) : -1);
      },
      openMenu: function openMenu() {
        if (_this.menu_ && !_this.menu_.open) {
          _this.menu_.open = true;
          _this.isMenuOpen_ = true;

          _this.selectedText_.setAttribute('aria-expanded', 'true');
        }
      },
      closeMenu: function closeMenu() {
        if (_this.menu_ && _this.menu_.open) {
          _this.menu_.open = false;
        }
      },
      isMenuOpen: function isMenuOpen() {
        return Boolean(_this.menu_) && _this.isMenuOpen_;
      },
      setSelectedIndex: function setSelectedIndex(index) {
        return _this.setEnhancedSelectedIndex_(index);
      },
      setDisabled: function setDisabled(isDisabled) {
        _this.selectedText_.setAttribute('tabindex', isDisabled ? '-1' : '0');

        _this.selectedText_.setAttribute('aria-disabled', isDisabled.toString());

        if (_this.hiddenInput_) {
          _this.hiddenInput_.disabled = isDisabled;
        }
      },
      checkValidity: function checkValidity() {
        var classList = _this.root_.classList;

        if (classList.contains(cssClasses$7.REQUIRED) && !classList.contains(cssClasses$7.DISABLED)) {
          // See notes for required attribute under https://www.w3.org/TR/html52/sec-forms.html#the-select-element
          // TL;DR: Invalid if no index is selected, or if the first index is selected and has an empty value.
          return _this.selectedIndex !== -1 && (_this.selectedIndex !== 0 || Boolean(_this.value));
        } else {
          return true;
        }
      },
      setValid: function setValid(isValid) {
        _this.selectedText_.setAttribute('aria-invalid', (!isValid).toString());

        if (isValid) {
          _this.root_.classList.remove(cssClasses$7.INVALID);
        } else {
          _this.root_.classList.add(cssClasses$7.INVALID);
        }
      }
    }; // tslint:enable:object-literal-sort-keys
  };

  MDCSelect.prototype.getCommonAdapterMethods_ = function () {
    var _this = this; // tslint:disable:object-literal-sort-keys Methods should be in the same order as the adapter interface.


    return {
      addClass: function addClass(className) {
        return _this.root_.classList.add(className);
      },
      removeClass: function removeClass(className) {
        return _this.root_.classList.remove(className);
      },
      hasClass: function hasClass(className) {
        return _this.root_.classList.contains(className);
      },
      setRippleCenter: function setRippleCenter(normalizedX) {
        return _this.lineRipple_ && _this.lineRipple_.setRippleCenter(normalizedX);
      },
      activateBottomLine: function activateBottomLine() {
        return _this.lineRipple_ && _this.lineRipple_.activate();
      },
      deactivateBottomLine: function deactivateBottomLine() {
        return _this.lineRipple_ && _this.lineRipple_.deactivate();
      },
      notifyChange: function notifyChange(value) {
        var index = _this.selectedIndex;

        _this.emit(strings$5.CHANGE_EVENT, {
          value: value,
          index: index
        }, true
        /* shouldBubble  */
        );
      }
    }; // tslint:enable:object-literal-sort-keys
  };

  MDCSelect.prototype.getOutlineAdapterMethods_ = function () {
    var _this = this; // tslint:disable:object-literal-sort-keys Methods should be in the same order as the adapter interface.


    return {
      hasOutline: function hasOutline() {
        return Boolean(_this.outline_);
      },
      notchOutline: function notchOutline(labelWidth) {
        return _this.outline_ && _this.outline_.notch(labelWidth);
      },
      closeOutline: function closeOutline() {
        return _this.outline_ && _this.outline_.closeNotch();
      }
    }; // tslint:enable:object-literal-sort-keys
  };

  MDCSelect.prototype.getLabelAdapterMethods_ = function () {
    var _this = this;

    return {
      floatLabel: function floatLabel(shouldFloat) {
        return _this.label_ && _this.label_.float(shouldFloat);
      },
      getLabelWidth: function getLabelWidth() {
        return _this.label_ ? _this.label_.getWidth() : 0;
      }
    };
  };
  /**
   * Calculates where the line ripple should start based on the x coordinate within the component.
   */


  MDCSelect.prototype.getNormalizedXCoordinate_ = function (evt) {
    var targetClientRect = evt.target.getBoundingClientRect();
    var xCoordinate = this.isTouchEvent_(evt) ? evt.touches[0].clientX : evt.clientX;
    return xCoordinate - targetClientRect.left;
  };

  MDCSelect.prototype.isTouchEvent_ = function (evt) {
    return Boolean(evt.touches);
  };
  /**
   * Returns a map of all subcomponents to subfoundations.
   */


  MDCSelect.prototype.getFoundationMap_ = function () {
    return {
      helperText: this.helperText_ ? this.helperText_.foundation : undefined,
      leadingIcon: this.leadingIcon_ ? this.leadingIcon_.foundation : undefined
    };
  };

  MDCSelect.prototype.setEnhancedSelectedIndex_ = function (index) {
    var selectedItem = this.menu_.items[index];
    this.selectedText_.textContent = selectedItem ? selectedItem.textContent.trim() : '';
    var previouslySelected = this.menuElement_.querySelector(strings$5.SELECTED_ITEM_SELECTOR);

    if (previouslySelected) {
      previouslySelected.classList.remove(cssClasses$7.SELECTED_ITEM_CLASS);
      previouslySelected.removeAttribute(strings$5.ARIA_SELECTED_ATTR);
    }

    if (selectedItem) {
      selectedItem.classList.add(cssClasses$7.SELECTED_ITEM_CLASS);
      selectedItem.setAttribute(strings$5.ARIA_SELECTED_ATTR, 'true');
    } // Synchronize hidden input's value with data-value attribute of selected item.
    // This code path is also followed when setting value directly, so this covers all cases.


    if (this.hiddenInput_) {
      this.hiddenInput_.value = selectedItem ? selectedItem.getAttribute(strings$5.ENHANCED_VALUE_ATTR) || '' : '';
    }

    this.layout();
  };

  MDCSelect.prototype.initialSyncRequiredState_ = function () {
    var isRequired = this.targetElement_.required || this.targetElement_.getAttribute('aria-required') === 'true' || this.root_.classList.contains(cssClasses$7.REQUIRED);

    if (isRequired) {
      if (this.nativeControl_) {
        this.nativeControl_.required = true;
      } else {
        this.selectedText_.setAttribute('aria-required', 'true');
      }

      this.root_.classList.add(cssClasses$7.REQUIRED);
    }
  };

  MDCSelect.prototype.addMutationObserverForRequired_ = function () {
    var _this = this;

    var observerHandler = function observerHandler(attributesList) {
      attributesList.some(function (attributeName) {
        if (VALIDATION_ATTR_WHITELIST.indexOf(attributeName) === -1) {
          return false;
        }

        if (_this.selectedText_) {
          if (_this.selectedText_.getAttribute('aria-required') === 'true') {
            _this.root_.classList.add(cssClasses$7.REQUIRED);
          } else {
            _this.root_.classList.remove(cssClasses$7.REQUIRED);
          }
        } else {
          if (_this.nativeControl_.required) {
            _this.root_.classList.add(cssClasses$7.REQUIRED);
          } else {
            _this.root_.classList.remove(cssClasses$7.REQUIRED);
          }
        }

        return true;
      });
    };

    var getAttributesList = function getAttributesList(mutationsList) {
      return mutationsList.map(function (mutation) {
        return mutation.attributeName;
      }).filter(function (attributeName) {
        return attributeName;
      });
    };

    var observer = new MutationObserver(function (mutationsList) {
      return observerHandler(getAttributesList(mutationsList));
    });
    observer.observe(this.targetElement_, {
      attributes: true
    });
    this.validationObserver_ = observer;
  };

  return MDCSelect;
}(MDCComponent);

var file = "Users/hperrin/repos/svelte-material-ui/packages/select/Select.svelte";

var get_label_slot_changes_1 = function get_label_slot_changes_1() {
  return {};
};

var get_label_slot_context_1 = function get_label_slot_context_1() {
  return {};
};

var get_label_slot_changes = function get_label_slot_changes() {
  return {};
};

var get_label_slot_context = function get_label_slot_context() {
  return {};
};

var get_icon_slot_changes = function get_icon_slot_changes() {
  return {};
};

var get_icon_slot_context = function get_icon_slot_context() {
  return {};
}; // (46:2) {:else}


function create_else_block(ctx) {
  var select_1, useActions_action, current, dispose;
  var default_slot_template = ctx.$$slots.default;
  var default_slot = create_slot(default_slot_template, ctx, null);
  var select_1_levels = [{
    class: "mdc-select__native-control " + ctx.input$class
  }, {
    disabled: ctx.disabled
  }, {
    required: ctx.required
  }, {
    id: ctx.inputId
  }, exclude(prefixFilter(ctx.$$props, 'input$'), ['use', 'class'])];
  var select_1_data = {};

  for (var i = 0; i < select_1_levels.length; i += 1) {
    select_1_data = assign(select_1_data, select_1_levels[i]);
  }

  var block = {
    c: function create() {
      select_1 = element("select");
      if (default_slot) default_slot.c();
      this.h();
    },
    l: function claim(nodes) {
      select_1 = claim_element(nodes, "SELECT", {
        class: true,
        disabled: true,
        required: true,
        id: true
      }, false);
      var select_1_nodes = children(select_1);
      if (default_slot) default_slot.l(select_1_nodes);
      select_1_nodes.forEach(detach_dev);
      this.h();
    },
    h: function hydrate() {
      set_attributes(select_1, select_1_data);
      add_location(select_1, file, 46, 4, 1612);
      dispose = [listen_dev(select_1, "change", ctx.change_handler_1), listen_dev(select_1, "input", ctx.input_handler_1)];
    },
    m: function mount(target, anchor) {
      insert_dev(target, select_1, anchor);

      if (default_slot) {
        default_slot.m(select_1, null);
      }

      ctx.select_1_binding(select_1);
      useActions_action = useActions.call(null, select_1, ctx.input$use) || {};
      current = true;
    },
    p: function update(changed, ctx) {
      if (default_slot && default_slot.p && changed.$$scope) {
        default_slot.p(get_slot_changes(default_slot_template, ctx, changed, null), get_slot_context(default_slot_template, ctx, null));
      }

      set_attributes(select_1, get_spread_update(select_1_levels, [changed.input$class && {
        class: "mdc-select__native-control " + ctx.input$class
      }, changed.disabled && {
        disabled: ctx.disabled
      }, changed.required && {
        required: ctx.required
      }, changed.inputId && {
        id: ctx.inputId
      }, (changed.exclude || changed.prefixFilter || changed.$$props) && exclude(prefixFilter(ctx.$$props, 'input$'), ['use', 'class'])]));

      if (typeof useActions_action.update === 'function' && changed.input$use) {
        useActions_action.update.call(null, ctx.input$use);
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
        detach_dev(select_1);
      }

      if (default_slot) default_slot.d(detaching);
      ctx.select_1_binding(null);
      if (useActions_action && typeof useActions_action.destroy === 'function') useActions_action.destroy();
      run_all(dispose);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_else_block.name,
    type: "else",
    source: "(46:2) {:else}",
    ctx: ctx
  });
  return block;
} // (16:2) {#if enhanced}


function create_if_block_5(ctx) {
  var input, useActions_action, t0, div, t1, div_id_value, div_aria_labelledby_value, div_aria_required_value, t2, updating_anchorElement, current, dispose;
  var input_levels = [{
    type: "hidden"
  }, {
    disabled: ctx.disabled
  }, {
    required: ctx.required
  }, {
    id: ctx.inputId
  }, {
    value: ctx.value
  }, exclude(prefixFilter(ctx.$$props, 'input$'), ['use'])];
  var input_data = {};

  for (var i = 0; i < input_levels.length; i += 1) {
    input_data = assign(input_data, input_levels[i]);
  }

  var menu_spread_levels = [{
    class: "mdc-select__menu " + ctx.menu$class
  }, {
    role: "listbox"
  }, {
    anchor: false
  }, exclude(prefixFilter(ctx.$$props, 'menu$'), ['class'])];

  function menu_anchorElement_binding(value_1) {
    ctx.menu_anchorElement_binding.call(null, value_1);
    updating_anchorElement = true;
    add_flush_callback(function () {
      return updating_anchorElement = false;
    });
  }

  var menu_props = {
    $$slots: {
      default: [create_default_slot_3]
    },
    $$scope: {
      ctx: ctx
    }
  };

  for (var i = 0; i < menu_spread_levels.length; i += 1) {
    menu_props = assign(menu_props, menu_spread_levels[i]);
  }

  if (ctx.element !== void 0) {
    menu_props.anchorElement = ctx.element;
  }

  var menu = new Menu({
    props: menu_props,
    $$inline: true
  });
  binding_callbacks.push(function () {
    return bind(menu, 'anchorElement', menu_anchorElement_binding);
  });
  var block = {
    c: function create() {
      input = element("input");
      t0 = space();
      div = element("div");
      t1 = text(ctx.selectedText);
      t2 = space();
      menu.$$.fragment.c();
      this.h();
    },
    l: function claim(nodes) {
      input = claim_element(nodes, "INPUT", {
        type: true,
        disabled: true,
        required: true,
        id: true,
        value: true
      }, false);
      var input_nodes = children(input);
      input_nodes.forEach(detach_dev);
      t0 = claim_space(nodes);
      div = claim_element(nodes, "DIV", {
        id: true,
        class: true,
        role: true,
        "aria-haspopup": true,
        "aria-labelledby": true,
        "aria-required": true
      }, false);
      var div_nodes = children(div);
      t1 = claim_text(div_nodes, ctx.selectedText);
      div_nodes.forEach(detach_dev);
      t2 = claim_space(nodes);
      menu.$$.fragment.l(nodes);
      this.h();
    },
    h: function hydrate() {
      set_attributes(input, input_data);
      add_location(input, file, 16, 4, 757);
      attr_dev(div, "id", div_id_value = ctx.inputId + '-smui-selected-text');
      attr_dev(div, "class", "mdc-select__selected-text");
      attr_dev(div, "role", "button");
      attr_dev(div, "aria-haspopup", "listbox");
      attr_dev(div, "aria-labelledby", div_aria_labelledby_value = "" + (ctx.inputId + '-smui-label') + " " + (ctx.inputId + '-smui-selected-text'));
      attr_dev(div, "aria-required", div_aria_required_value = ctx.required ? 'true' : 'false');
      add_location(div, file, 28, 4, 1024);
      dispose = [listen_dev(input, "change", ctx.change_handler), listen_dev(input, "input", ctx.input_handler)];
    },
    m: function mount(target, anchor) {
      insert_dev(target, input, anchor);
      ctx.input_binding(input);
      useActions_action = useActions.call(null, input, ctx.input$use) || {};
      insert_dev(target, t0, anchor);
      insert_dev(target, div, anchor);
      append_dev(div, t1);
      insert_dev(target, t2, anchor);
      mount_component(menu, target, anchor);
      current = true;
    },
    p: function update(changed, ctx) {
      set_attributes(input, get_spread_update(input_levels, [{
        type: "hidden"
      }, changed.disabled && {
        disabled: ctx.disabled
      }, changed.required && {
        required: ctx.required
      }, changed.inputId && {
        id: ctx.inputId
      }, changed.value && {
        value: ctx.value
      }, (changed.exclude || changed.prefixFilter || changed.$$props) && exclude(prefixFilter(ctx.$$props, 'input$'), ['use'])]));

      if (typeof useActions_action.update === 'function' && changed.input$use) {
        useActions_action.update.call(null, ctx.input$use);
      }

      if (!current || changed.selectedText) {
        set_data_dev(t1, ctx.selectedText);
      }

      if ((!current || changed.inputId) && div_id_value !== (div_id_value = ctx.inputId + '-smui-selected-text')) {
        attr_dev(div, "id", div_id_value);
      }

      if ((!current || changed.inputId) && div_aria_labelledby_value !== (div_aria_labelledby_value = "" + (ctx.inputId + '-smui-label') + " " + (ctx.inputId + '-smui-selected-text'))) {
        attr_dev(div, "aria-labelledby", div_aria_labelledby_value);
      }

      if ((!current || changed.required) && div_aria_required_value !== (div_aria_required_value = ctx.required ? 'true' : 'false')) {
        attr_dev(div, "aria-required", div_aria_required_value);
      }

      var menu_changes = changed.menu$class || changed.exclude || changed.prefixFilter || changed.$$props ? get_spread_update(menu_spread_levels, [changed.menu$class && {
        class: "mdc-select__menu " + ctx.menu$class
      }, menu_spread_levels[1], menu_spread_levels[2], (changed.exclude || changed.prefixFilter || changed.$$props) && get_spread_object(exclude(prefixFilter(ctx.$$props, 'menu$'), ['class']))]) : {};
      if (changed.$$scope) menu_changes.$$scope = {
        changed: changed,
        ctx: ctx
      };

      if (!updating_anchorElement && changed.element) {
        menu_changes.anchorElement = ctx.element;
      }

      menu.$set(menu_changes);
    },
    i: function intro(local) {
      if (current) return;
      transition_in(menu.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(menu.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      if (detaching) {
        detach_dev(input);
      }

      ctx.input_binding(null);
      if (useActions_action && typeof useActions_action.destroy === 'function') useActions_action.destroy();

      if (detaching) {
        detach_dev(t0);
        detach_dev(div);
        detach_dev(t2);
      }

      destroy_component(menu, detaching);
      run_all(dispose);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_if_block_5.name,
    type: "if",
    source: "(16:2) {#if enhanced}",
    ctx: ctx
  });
  return block;
} // (44:6) <List {...prefixFilter($$props, 'list$')}>


function create_default_slot_4(ctx) {
  var current;
  var default_slot_template = ctx.$$slots.default;
  var default_slot = create_slot(default_slot_template, ctx, null);
  var block = {
    c: function create() {
      if (default_slot) default_slot.c();
    },
    l: function claim(nodes) {
      if (default_slot) default_slot.l(nodes);
    },
    m: function mount(target, anchor) {
      if (default_slot) {
        default_slot.m(target, anchor);
      }

      current = true;
    },
    p: function update(changed, ctx) {
      if (default_slot && default_slot.p && changed.$$scope) {
        default_slot.p(get_slot_changes(default_slot_template, ctx, changed, null), get_slot_context(default_slot_template, ctx, null));
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
      if (default_slot) default_slot.d(detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_default_slot_4.name,
    type: "slot",
    source: "(44:6) <List {...prefixFilter($$props, 'list$')}>",
    ctx: ctx
  });
  return block;
} // (37:4) <Menu       class="mdc-select__menu {menu$class}"       role="listbox"       anchor={false}       bind:anchorElement={element}       {...exclude(prefixFilter($$props, 'menu$'), ['class'])}     >


function create_default_slot_3(ctx) {
  var current;
  var list_spread_levels = [prefixFilter(ctx.$$props, 'list$')];
  var list_props = {
    $$slots: {
      default: [create_default_slot_4]
    },
    $$scope: {
      ctx: ctx
    }
  };

  for (var i = 0; i < list_spread_levels.length; i += 1) {
    list_props = assign(list_props, list_spread_levels[i]);
  }

  var list = new List({
    props: list_props,
    $$inline: true
  });
  var block = {
    c: function create() {
      list.$$.fragment.c();
    },
    l: function claim(nodes) {
      list.$$.fragment.l(nodes);
    },
    m: function mount(target, anchor) {
      mount_component(list, target, anchor);
      current = true;
    },
    p: function update(changed, ctx) {
      var list_changes = changed.prefixFilter || changed.$$props ? get_spread_update(list_spread_levels, [get_spread_object(prefixFilter(ctx.$$props, 'list$'))]) : {};
      if (changed.$$scope) list_changes.$$scope = {
        changed: changed,
        ctx: ctx
      };
      list.$set(list_changes);
    },
    i: function intro(local) {
      if (current) return;
      transition_in(list.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(list.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      destroy_component(list, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_default_slot_3.name,
    type: "slot",
    source: "(37:4) <Menu       class=\"mdc-select__menu {menu$class}\"       role=\"listbox\"       anchor={false}       bind:anchorElement={element}       {...exclude(prefixFilter($$props, 'menu$'), ['class'])}     >",
    ctx: ctx
  });
  return block;
} // (59:2) {#if variant !== 'outlined'}


function create_if_block_2(ctx) {
  var t, if_block1_anchor, current;
  var if_block0 = !ctx.noLabel && ctx.label != null && create_if_block_4(ctx);
  var if_block1 = ctx.ripple && create_if_block_3(ctx);
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
      if (!ctx.noLabel && ctx.label != null) {
        if (if_block0) {
          if_block0.p(changed, ctx);
          transition_in(if_block0, 1);
        } else {
          if_block0 = create_if_block_4(ctx);
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

      if (ctx.ripple) {
        if (if_block1) {
          if_block1.p(changed, ctx);
          transition_in(if_block1, 1);
        } else {
          if_block1 = create_if_block_3(ctx);
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
    id: create_if_block_2.name,
    type: "if",
    source: "(59:2) {#if variant !== 'outlined'}",
    ctx: ctx
  });
  return block;
} // (60:4) {#if !noLabel && label != null}


function create_if_block_4(ctx) {
  var current;
  var floatinglabel_spread_levels = [{
    for: ctx.inputId
  }, {
    id: ctx.inputId + '-smui-label'
  }, {
    class: "" + (ctx.value !== '' ? 'mdc-floating-label--float-above' : '') + " " + ctx.label$class
  }, exclude(prefixFilter(ctx.$$props, 'label$'), ['class'])];
  var floatinglabel_props = {
    $$slots: {
      default: [create_default_slot_2]
    },
    $$scope: {
      ctx: ctx
    }
  };

  for (var i = 0; i < floatinglabel_spread_levels.length; i += 1) {
    floatinglabel_props = assign(floatinglabel_props, floatinglabel_spread_levels[i]);
  }

  var floatinglabel = new FloatingLabel({
    props: floatinglabel_props,
    $$inline: true
  });
  var block = {
    c: function create() {
      floatinglabel.$$.fragment.c();
    },
    l: function claim(nodes) {
      floatinglabel.$$.fragment.l(nodes);
    },
    m: function mount(target, anchor) {
      mount_component(floatinglabel, target, anchor);
      current = true;
    },
    p: function update(changed, ctx) {
      var floatinglabel_changes = changed.inputId || changed.value || changed.label$class || changed.exclude || changed.prefixFilter || changed.$$props ? get_spread_update(floatinglabel_spread_levels, [changed.inputId && {
        for: ctx.inputId
      }, changed.inputId && {
        id: ctx.inputId + '-smui-label'
      }, (changed.value || changed.label$class) && {
        class: "" + (ctx.value !== '' ? 'mdc-floating-label--float-above' : '') + " " + ctx.label$class
      }, (changed.exclude || changed.prefixFilter || changed.$$props) && get_spread_object(exclude(prefixFilter(ctx.$$props, 'label$'), ['class']))]) : {};
      if (changed.$$scope || changed.label) floatinglabel_changes.$$scope = {
        changed: changed,
        ctx: ctx
      };
      floatinglabel.$set(floatinglabel_changes);
    },
    i: function intro(local) {
      if (current) return;
      transition_in(floatinglabel.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(floatinglabel.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      destroy_component(floatinglabel, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_if_block_4.name,
    type: "if",
    source: "(60:4) {#if !noLabel && label != null}",
    ctx: ctx
  });
  return block;
} // (61:6) <FloatingLabel         for={inputId}         id={inputId+'-smui-label'}         class="{value !== '' ? 'mdc-floating-label--float-above' : ''} {label$class}"         {...exclude(prefixFilter($$props, 'label$'), ['class'])}       >


function create_default_slot_2(ctx) {
  var t, current;
  var label_slot_template = ctx.$$slots.label;
  var label_slot = create_slot(label_slot_template, ctx, get_label_slot_context);
  var block = {
    c: function create() {
      t = text(ctx.label);
      if (label_slot) label_slot.c();
    },
    l: function claim(nodes) {
      t = claim_text(nodes, ctx.label);
      if (label_slot) label_slot.l(nodes);
    },
    m: function mount(target, anchor) {
      insert_dev(target, t, anchor);

      if (label_slot) {
        label_slot.m(target, anchor);
      }

      current = true;
    },
    p: function update(changed, ctx) {
      if (!current || changed.label) {
        set_data_dev(t, ctx.label);
      }

      if (label_slot && label_slot.p && changed.$$scope) {
        label_slot.p(get_slot_changes(label_slot_template, ctx, changed, get_label_slot_changes), get_slot_context(label_slot_template, ctx, get_label_slot_context));
      }
    },
    i: function intro(local) {
      if (current) return;
      transition_in(label_slot, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(label_slot, local);
      current = false;
    },
    d: function destroy(detaching) {
      if (detaching) {
        detach_dev(t);
      }

      if (label_slot) label_slot.d(detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_default_slot_2.name,
    type: "slot",
    source: "(61:6) <FloatingLabel         for={inputId}         id={inputId+'-smui-label'}         class=\"{value !== '' ? 'mdc-floating-label--float-above' : ''} {label$class}\"         {...exclude(prefixFilter($$props, 'label$'), ['class'])}       >",
    ctx: ctx
  });
  return block;
} // (68:4) {#if ripple}


function create_if_block_3(ctx) {
  var current;
  var lineripple_spread_levels = [prefixFilter(ctx.$$props, 'ripple$')];
  var lineripple_props = {};

  for (var i = 0; i < lineripple_spread_levels.length; i += 1) {
    lineripple_props = assign(lineripple_props, lineripple_spread_levels[i]);
  }

  var lineripple = new LineRipple({
    props: lineripple_props,
    $$inline: true
  });
  var block = {
    c: function create() {
      lineripple.$$.fragment.c();
    },
    l: function claim(nodes) {
      lineripple.$$.fragment.l(nodes);
    },
    m: function mount(target, anchor) {
      mount_component(lineripple, target, anchor);
      current = true;
    },
    p: function update(changed, ctx) {
      var lineripple_changes = changed.prefixFilter || changed.$$props ? get_spread_update(lineripple_spread_levels, [get_spread_object(prefixFilter(ctx.$$props, 'ripple$'))]) : {};
      lineripple.$set(lineripple_changes);
    },
    i: function intro(local) {
      if (current) return;
      transition_in(lineripple.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(lineripple.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      destroy_component(lineripple, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_if_block_3.name,
    type: "if",
    source: "(68:4) {#if ripple}",
    ctx: ctx
  });
  return block;
} // (72:2) {#if variant === 'outlined'}


function create_if_block(ctx) {
  var current;
  var notchedoutline_spread_levels = [{
    noLabel: ctx.noLabel || ctx.label == null
  }, prefixFilter(ctx.$$props, 'outline$')];
  var notchedoutline_props = {
    $$slots: {
      default: [create_default_slot]
    },
    $$scope: {
      ctx: ctx
    }
  };

  for (var i = 0; i < notchedoutline_spread_levels.length; i += 1) {
    notchedoutline_props = assign(notchedoutline_props, notchedoutline_spread_levels[i]);
  }

  var notchedoutline = new NotchedOutline({
    props: notchedoutline_props,
    $$inline: true
  });
  var block = {
    c: function create() {
      notchedoutline.$$.fragment.c();
    },
    l: function claim(nodes) {
      notchedoutline.$$.fragment.l(nodes);
    },
    m: function mount(target, anchor) {
      mount_component(notchedoutline, target, anchor);
      current = true;
    },
    p: function update(changed, ctx) {
      var notchedoutline_changes = changed.noLabel || changed.label || changed.prefixFilter || changed.$$props ? get_spread_update(notchedoutline_spread_levels, [(changed.noLabel || changed.label) && {
        noLabel: ctx.noLabel || ctx.label == null
      }, (changed.prefixFilter || changed.$$props) && get_spread_object(prefixFilter(ctx.$$props, 'outline$'))]) : {};
      if (changed.$$scope || changed.noLabel || changed.label || changed.inputId || changed.value || changed.label$class) notchedoutline_changes.$$scope = {
        changed: changed,
        ctx: ctx
      };
      notchedoutline.$set(notchedoutline_changes);
    },
    i: function intro(local) {
      if (current) return;
      transition_in(notchedoutline.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(notchedoutline.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      destroy_component(notchedoutline, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_if_block.name,
    type: "if",
    source: "(72:2) {#if variant === 'outlined'}",
    ctx: ctx
  });
  return block;
} // (74:6) {#if !noLabel && label != null}


function create_if_block_1(ctx) {
  var current;
  var floatinglabel_spread_levels = [{
    for: ctx.inputId
  }, {
    class: "" + (ctx.value !== '' ? 'mdc-floating-label--float-above' : '') + " " + ctx.label$class
  }, exclude(prefixFilter(ctx.$$props, 'label$'), ['class'])];
  var floatinglabel_props = {
    $$slots: {
      default: [create_default_slot_1]
    },
    $$scope: {
      ctx: ctx
    }
  };

  for (var i = 0; i < floatinglabel_spread_levels.length; i += 1) {
    floatinglabel_props = assign(floatinglabel_props, floatinglabel_spread_levels[i]);
  }

  var floatinglabel = new FloatingLabel({
    props: floatinglabel_props,
    $$inline: true
  });
  var block = {
    c: function create() {
      floatinglabel.$$.fragment.c();
    },
    l: function claim(nodes) {
      floatinglabel.$$.fragment.l(nodes);
    },
    m: function mount(target, anchor) {
      mount_component(floatinglabel, target, anchor);
      current = true;
    },
    p: function update(changed, ctx) {
      var floatinglabel_changes = changed.inputId || changed.value || changed.label$class || changed.exclude || changed.prefixFilter || changed.$$props ? get_spread_update(floatinglabel_spread_levels, [changed.inputId && {
        for: ctx.inputId
      }, (changed.value || changed.label$class) && {
        class: "" + (ctx.value !== '' ? 'mdc-floating-label--float-above' : '') + " " + ctx.label$class
      }, (changed.exclude || changed.prefixFilter || changed.$$props) && get_spread_object(exclude(prefixFilter(ctx.$$props, 'label$'), ['class']))]) : {};
      if (changed.$$scope || changed.label) floatinglabel_changes.$$scope = {
        changed: changed,
        ctx: ctx
      };
      floatinglabel.$set(floatinglabel_changes);
    },
    i: function intro(local) {
      if (current) return;
      transition_in(floatinglabel.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(floatinglabel.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      destroy_component(floatinglabel, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_if_block_1.name,
    type: "if",
    source: "(74:6) {#if !noLabel && label != null}",
    ctx: ctx
  });
  return block;
} // (75:8) <FloatingLabel           for={inputId}           class="{value !== '' ? 'mdc-floating-label--float-above' : ''} {label$class}"           {...exclude(prefixFilter($$props, 'label$'), ['class'])}         >


function create_default_slot_1(ctx) {
  var t, current;
  var label_slot_template = ctx.$$slots.label;
  var label_slot = create_slot(label_slot_template, ctx, get_label_slot_context_1);
  var block = {
    c: function create() {
      t = text(ctx.label);
      if (label_slot) label_slot.c();
    },
    l: function claim(nodes) {
      t = claim_text(nodes, ctx.label);
      if (label_slot) label_slot.l(nodes);
    },
    m: function mount(target, anchor) {
      insert_dev(target, t, anchor);

      if (label_slot) {
        label_slot.m(target, anchor);
      }

      current = true;
    },
    p: function update(changed, ctx) {
      if (!current || changed.label) {
        set_data_dev(t, ctx.label);
      }

      if (label_slot && label_slot.p && changed.$$scope) {
        label_slot.p(get_slot_changes(label_slot_template, ctx, changed, get_label_slot_changes_1), get_slot_context(label_slot_template, ctx, get_label_slot_context_1));
      }
    },
    i: function intro(local) {
      if (current) return;
      transition_in(label_slot, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(label_slot, local);
      current = false;
    },
    d: function destroy(detaching) {
      if (detaching) {
        detach_dev(t);
      }

      if (label_slot) label_slot.d(detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_default_slot_1.name,
    type: "slot",
    source: "(75:8) <FloatingLabel           for={inputId}           class=\"{value !== '' ? 'mdc-floating-label--float-above' : ''} {label$class}\"           {...exclude(prefixFilter($$props, 'label$'), ['class'])}         >",
    ctx: ctx
  });
  return block;
} // (73:4) <NotchedOutline noLabel={noLabel || label == null} {...prefixFilter($$props, 'outline$')}>


function create_default_slot(ctx) {
  var if_block_anchor, current;
  var if_block = !ctx.noLabel && ctx.label != null && create_if_block_1(ctx);
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
      if (!ctx.noLabel && ctx.label != null) {
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
    id: create_default_slot.name,
    type: "slot",
    source: "(73:4) <NotchedOutline noLabel={noLabel || label == null} {...prefixFilter($$props, 'outline$')}>",
    ctx: ctx
  });
  return block;
}

function create_fragment(ctx) {
  var div, t0, i, t1, current_block_type_index, if_block0, t2, t3, useActions_action, forwardEvents_action, current, dispose;
  var icon_slot_template = ctx.$$slots.icon;
  var icon_slot = create_slot(icon_slot_template, ctx, get_icon_slot_context);
  var if_block_creators = [create_if_block_5, create_else_block];
  var if_blocks = [];

  function select_block_type(changed, ctx) {
    if (ctx.enhanced) return 0;
    return 1;
  }

  current_block_type_index = select_block_type(null, ctx);
  if_block0 = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx);
  var if_block1 = ctx.variant !== 'outlined' && create_if_block_2(ctx);
  var if_block2 = ctx.variant === 'outlined' && create_if_block(ctx);
  var div_levels = [{
    class: "mdc-select " + ctx.className
  }, exclude(ctx.$$props, ['use', 'class', 'ripple', 'disabled', 'enhanced', 'variant', 'noLabel', 'withLeadingIcon', 'label', 'value', 'selectedIndex', 'selectedText', 'dirty', 'invalid', 'updateInvalid', 'required', 'input$', 'label$', 'ripple$', 'outline$', 'menu$', 'list$'])];
  var div_data = {};

  for (var i_1 = 0; i_1 < div_levels.length; i_1 += 1) {
    div_data = assign(div_data, div_levels[i_1]);
  }

  var block = {
    c: function create() {
      div = element("div");
      if (icon_slot) icon_slot.c();
      t0 = space();
      i = element("i");
      t1 = space();
      if_block0.c();
      t2 = space();
      if (if_block1) if_block1.c();
      t3 = space();
      if (if_block2) if_block2.c();
      this.h();
    },
    l: function claim(nodes) {
      div = claim_element(nodes, "DIV", {
        class: true
      }, false);
      var div_nodes = children(div);
      if (icon_slot) icon_slot.l(div_nodes);
      t0 = claim_space(div_nodes);
      i = claim_element(div_nodes, "I", {
        class: true
      }, false);
      var i_nodes = children(i);
      i_nodes.forEach(detach_dev);
      t1 = claim_space(div_nodes);
      if_block0.l(div_nodes);
      t2 = claim_space(div_nodes);
      if (if_block1) if_block1.l(div_nodes);
      t3 = claim_space(div_nodes);
      if (if_block2) if_block2.l(div_nodes);
      div_nodes.forEach(detach_dev);
      this.h();
    },
    h: function hydrate() {
      attr_dev(i, "class", "mdc-select__dropdown-icon");
      add_location(i, file, 14, 2, 694);
      set_attributes(div, div_data);
      toggle_class(div, "mdc-select--disabled", ctx.disabled);
      toggle_class(div, "mdc-select--outlined", ctx.variant === 'outlined');
      toggle_class(div, "smui-select--standard", ctx.variant === 'standard');
      toggle_class(div, "mdc-select--with-leading-icon", ctx.withLeadingIcon);
      toggle_class(div, "mdc-select--invalid", ctx.invalid);
      add_location(div, file, 0, 0, 0);
      dispose = listen_dev(div, "MDCSelect:change", ctx.changeHandler);
    },
    m: function mount(target, anchor) {
      insert_dev(target, div, anchor);

      if (icon_slot) {
        icon_slot.m(div, null);
      }

      append_dev(div, t0);
      append_dev(div, i);
      append_dev(div, t1);
      if_blocks[current_block_type_index].m(div, null);
      append_dev(div, t2);
      if (if_block1) if_block1.m(div, null);
      append_dev(div, t3);
      if (if_block2) if_block2.m(div, null);
      ctx.div_binding(div);
      useActions_action = useActions.call(null, div, ctx.use) || {};
      forwardEvents_action = ctx.forwardEvents.call(null, div) || {};
      current = true;
    },
    p: function update(changed, ctx) {
      if (icon_slot && icon_slot.p && changed.$$scope) {
        icon_slot.p(get_slot_changes(icon_slot_template, ctx, changed, get_icon_slot_changes), get_slot_context(icon_slot_template, ctx, get_icon_slot_context));
      }

      var previous_block_index = current_block_type_index;
      current_block_type_index = select_block_type(changed, ctx);

      if (current_block_type_index === previous_block_index) {
        if_blocks[current_block_type_index].p(changed, ctx);
      } else {
        group_outros();
        transition_out(if_blocks[previous_block_index], 1, 1, function () {
          if_blocks[previous_block_index] = null;
        });
        check_outros();
        if_block0 = if_blocks[current_block_type_index];

        if (!if_block0) {
          if_block0 = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx);
          if_block0.c();
        }

        transition_in(if_block0, 1);
        if_block0.m(div, t2);
      }

      if (ctx.variant !== 'outlined') {
        if (if_block1) {
          if_block1.p(changed, ctx);
          transition_in(if_block1, 1);
        } else {
          if_block1 = create_if_block_2(ctx);
          if_block1.c();
          transition_in(if_block1, 1);
          if_block1.m(div, t3);
        }
      } else if (if_block1) {
        group_outros();
        transition_out(if_block1, 1, 1, function () {
          if_block1 = null;
        });
        check_outros();
      }

      if (ctx.variant === 'outlined') {
        if (if_block2) {
          if_block2.p(changed, ctx);
          transition_in(if_block2, 1);
        } else {
          if_block2 = create_if_block(ctx);
          if_block2.c();
          transition_in(if_block2, 1);
          if_block2.m(div, null);
        }
      } else if (if_block2) {
        group_outros();
        transition_out(if_block2, 1, 1, function () {
          if_block2 = null;
        });
        check_outros();
      }

      set_attributes(div, get_spread_update(div_levels, [changed.className && {
        class: "mdc-select " + ctx.className
      }, (changed.exclude || changed.$$props) && exclude(ctx.$$props, ['use', 'class', 'ripple', 'disabled', 'enhanced', 'variant', 'noLabel', 'withLeadingIcon', 'label', 'value', 'selectedIndex', 'selectedText', 'dirty', 'invalid', 'updateInvalid', 'required', 'input$', 'label$', 'ripple$', 'outline$', 'menu$', 'list$'])]));

      if (typeof useActions_action.update === 'function' && changed.use) {
        useActions_action.update.call(null, ctx.use);
      }

      if (changed.className || changed.disabled) {
        toggle_class(div, "mdc-select--disabled", ctx.disabled);
      }

      if (changed.className || changed.variant) {
        toggle_class(div, "mdc-select--outlined", ctx.variant === 'outlined');
        toggle_class(div, "smui-select--standard", ctx.variant === 'standard');
      }

      if (changed.className || changed.withLeadingIcon) {
        toggle_class(div, "mdc-select--with-leading-icon", ctx.withLeadingIcon);
      }

      if (changed.className || changed.invalid) {
        toggle_class(div, "mdc-select--invalid", ctx.invalid);
      }
    },
    i: function intro(local) {
      if (current) return;
      transition_in(icon_slot, local);
      transition_in(if_block0);
      transition_in(if_block1);
      transition_in(if_block2);
      current = true;
    },
    o: function outro(local) {
      transition_out(icon_slot, local);
      transition_out(if_block0);
      transition_out(if_block1);
      transition_out(if_block2);
      current = false;
    },
    d: function destroy(detaching) {
      if (detaching) {
        detach_dev(div);
      }

      if (icon_slot) icon_slot.d(detaching);
      if_blocks[current_block_type_index].d();
      if (if_block1) if_block1.d();
      if (if_block2) if_block2.d();
      ctx.div_binding(null);
      if (useActions_action && typeof useActions_action.destroy === 'function') useActions_action.destroy();
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

var counter = 0;

function instance($$self, $$props, $$invalidate) {
  var _ref2;

  var forwardEvents = forwardEventsBuilder(current_component, 'MDCSelect:change');

  var uninitializedValue = function uninitializedValue() {};

  var _$$props = $$props,
      _$$props$use = _$$props.use,
      use = _$$props$use === void 0 ? [] : _$$props$use,
      _$$props$class = _$$props.class,
      className = _$$props$class === void 0 ? '' : _$$props$class,
      _$$props$ripple = _$$props.ripple,
      ripple = _$$props$ripple === void 0 ? true : _$$props$ripple,
      _$$props$disabled = _$$props.disabled,
      disabled = _$$props$disabled === void 0 ? false : _$$props$disabled,
      _$$props$enhanced = _$$props.enhanced,
      enhanced = _$$props$enhanced === void 0 ? false : _$$props$enhanced,
      _$$props$variant = _$$props.variant,
      variant = _$$props$variant === void 0 ? 'standard' : _$$props$variant,
      _$$props$withLeadingI = _$$props.withLeadingIcon,
      withLeadingIcon = _$$props$withLeadingI === void 0 ? false : _$$props$withLeadingI,
      _$$props$noLabel = _$$props.noLabel,
      noLabel = _$$props$noLabel === void 0 ? false : _$$props$noLabel,
      _$$props$label = _$$props.label,
      label = _$$props$label === void 0 ? null : _$$props$label,
      _$$props$value = _$$props.value,
      value = _$$props$value === void 0 ? '' : _$$props$value,
      _$$props$selectedInde = _$$props.selectedIndex,
      selectedIndex = _$$props$selectedInde === void 0 ? uninitializedValue : _$$props$selectedInde,
      _$$props$selectedText = _$$props.selectedText,
      selectedText = _$$props$selectedText === void 0 ? '' : _$$props$selectedText,
      _$$props$dirty = _$$props.dirty,
      dirty = _$$props$dirty === void 0 ? false : _$$props$dirty,
      _$$props$invalid = _$$props.invalid,
      invalid = _$$props$invalid === void 0 ? uninitializedValue : _$$props$invalid,
      _$$props$updateInvali = _$$props.updateInvalid,
      updateInvalid = _$$props$updateInvali === void 0 ? invalid === uninitializedValue : _$$props$updateInvali,
      _$$props$required = _$$props.required,
      required = _$$props$required === void 0 ? false : _$$props$required,
      _$$props$inputId = _$$props.inputId,
      inputId = _$$props$inputId === void 0 ? 'SMUI-select-' + counter++ : _$$props$inputId,
      _$$props$input$use = _$$props.input$use,
      input$use = _$$props$input$use === void 0 ? [] : _$$props$input$use,
      _$$props$input$class = _$$props.input$class,
      input$class = _$$props$input$class === void 0 ? '' : _$$props$input$class,
      _$$props$label$class = _$$props.label$class,
      label$class = _$$props$label$class === void 0 ? '' : _$$props$label$class,
      _$$props$menu$class = _$$props.menu$class,
      menu$class = _$$props$menu$class === void 0 ? '' : _$$props$menu$class;
  var element;
  var select;
  var inputElement;
  var menuPromiseResolve;
  var menuPromise = new Promise(function (resolve) {
    return menuPromiseResolve = resolve;
  });
  setContext('SMUI:menu:instantiate', false);
  setContext('SMUI:menu:getInstance', getMenuInstancePromise);
  setContext('SMUI:list:role', 'listbox');
  setContext('SMUI:select:option:enhanced', enhanced);
  onMount(
  /*#__PURE__*/
  _asyncToGenerator(
  /*#__PURE__*/
  _regeneratorRuntime.mark(function _callee() {
    return _regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            $$invalidate('select', select = new MDCSelect(element));
            menuPromiseResolve(select.menu_);

            if (!ripple && select.ripple) {
              select.ripple.destroy();
            }

            if (updateInvalid) {
              $$invalidate('invalid', invalid = inputElement.matches(':invalid'));
            }

          case 4:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  })));
  onDestroy(function () {
    select && select.destroy();
  });

  function getMenuInstancePromise() {
    return menuPromise;
  }

  function changeHandler(e) {
    $$invalidate('value', value = e.detail.value);
    $$invalidate('selectedIndex', selectedIndex = e.detail.index);
    $$invalidate('dirty', dirty = true);

    if (updateInvalid) {
      $$invalidate('invalid', invalid = inputElement.matches(':invalid'));
    }
  }

  function focus() {
    var _inputElement;

    return (_inputElement = inputElement).focus.apply(_inputElement, arguments);
  }

  function layout() {
    var _select;

    return (_select = select).layout.apply(_select, arguments);
  }

  var _$$props2 = $$props,
      _$$props2$$$slots = _$$props2.$$slots,
      $$slots = _$$props2$$$slots === void 0 ? {} : _$$props2$$$slots,
      $$scope = _$$props2.$$scope;

  function change_handler(event) {
    bubble($$self, event);
  }

  function input_handler(event) {
    bubble($$self, event);
  }

  function change_handler_1(event) {
    bubble($$self, event);
  }

  function input_handler_1(event) {
    bubble($$self, event);
  }

  function input_binding($$value) {
    binding_callbacks[$$value ? 'unshift' : 'push'](function () {
      $$invalidate('inputElement', inputElement = $$value);
    });
  }

  function menu_anchorElement_binding(value_1) {
    element = value_1;
    $$invalidate('element', element);
  }

  function select_1_binding($$value) {
    binding_callbacks[$$value ? 'unshift' : 'push'](function () {
      $$invalidate('inputElement', inputElement = $$value);
    });
  }

  function div_binding($$value) {
    binding_callbacks[$$value ? 'unshift' : 'push'](function () {
      $$invalidate('element', element = $$value);
    });
  }

  $$self.$set = function ($$new_props) {
    $$invalidate('$$props', $$props = assign(assign({}, $$props), $$new_props));
    if ('use' in $$new_props) $$invalidate('use', use = $$new_props.use);
    if ('class' in $$new_props) $$invalidate('className', className = $$new_props.class);
    if ('ripple' in $$new_props) $$invalidate('ripple', ripple = $$new_props.ripple);
    if ('disabled' in $$new_props) $$invalidate('disabled', disabled = $$new_props.disabled);
    if ('enhanced' in $$new_props) $$invalidate('enhanced', enhanced = $$new_props.enhanced);
    if ('variant' in $$new_props) $$invalidate('variant', variant = $$new_props.variant);
    if ('withLeadingIcon' in $$new_props) $$invalidate('withLeadingIcon', withLeadingIcon = $$new_props.withLeadingIcon);
    if ('noLabel' in $$new_props) $$invalidate('noLabel', noLabel = $$new_props.noLabel);
    if ('label' in $$new_props) $$invalidate('label', label = $$new_props.label);
    if ('value' in $$new_props) $$invalidate('value', value = $$new_props.value);
    if ('selectedIndex' in $$new_props) $$invalidate('selectedIndex', selectedIndex = $$new_props.selectedIndex);
    if ('selectedText' in $$new_props) $$invalidate('selectedText', selectedText = $$new_props.selectedText);
    if ('dirty' in $$new_props) $$invalidate('dirty', dirty = $$new_props.dirty);
    if ('invalid' in $$new_props) $$invalidate('invalid', invalid = $$new_props.invalid);
    if ('updateInvalid' in $$new_props) $$invalidate('updateInvalid', updateInvalid = $$new_props.updateInvalid);
    if ('required' in $$new_props) $$invalidate('required', required = $$new_props.required);
    if ('inputId' in $$new_props) $$invalidate('inputId', inputId = $$new_props.inputId);
    if ('input$use' in $$new_props) $$invalidate('input$use', input$use = $$new_props.input$use);
    if ('input$class' in $$new_props) $$invalidate('input$class', input$class = $$new_props.input$class);
    if ('label$class' in $$new_props) $$invalidate('label$class', label$class = $$new_props.label$class);
    if ('menu$class' in $$new_props) $$invalidate('menu$class', menu$class = $$new_props.menu$class);
    if ('$$scope' in $$new_props) $$invalidate('$$scope', $$scope = $$new_props.$$scope);
  };

  $$self.$capture_state = function () {
    return {
      counter: counter,
      use: use,
      className: className,
      ripple: ripple,
      disabled: disabled,
      enhanced: enhanced,
      variant: variant,
      withLeadingIcon: withLeadingIcon,
      noLabel: noLabel,
      label: label,
      value: value,
      selectedIndex: selectedIndex,
      selectedText: selectedText,
      dirty: dirty,
      invalid: invalid,
      updateInvalid: updateInvalid,
      required: required,
      inputId: inputId,
      input$use: input$use,
      input$class: input$class,
      label$class: label$class,
      menu$class: menu$class,
      element: element,
      select: select,
      inputElement: inputElement,
      menuPromiseResolve: menuPromiseResolve,
      menuPromise: menuPromise
    };
  };

  $$self.$inject_state = function ($$new_props) {
    $$invalidate('$$props', $$props = assign(assign({}, $$props), $$new_props));
    if ('use' in $$props) $$invalidate('use', use = $$new_props.use);
    if ('className' in $$props) $$invalidate('className', className = $$new_props.className);
    if ('ripple' in $$props) $$invalidate('ripple', ripple = $$new_props.ripple);
    if ('disabled' in $$props) $$invalidate('disabled', disabled = $$new_props.disabled);
    if ('enhanced' in $$props) $$invalidate('enhanced', enhanced = $$new_props.enhanced);
    if ('variant' in $$props) $$invalidate('variant', variant = $$new_props.variant);
    if ('withLeadingIcon' in $$props) $$invalidate('withLeadingIcon', withLeadingIcon = $$new_props.withLeadingIcon);
    if ('noLabel' in $$props) $$invalidate('noLabel', noLabel = $$new_props.noLabel);
    if ('label' in $$props) $$invalidate('label', label = $$new_props.label);
    if ('value' in $$props) $$invalidate('value', value = $$new_props.value);
    if ('selectedIndex' in $$props) $$invalidate('selectedIndex', selectedIndex = $$new_props.selectedIndex);
    if ('selectedText' in $$props) $$invalidate('selectedText', selectedText = $$new_props.selectedText);
    if ('dirty' in $$props) $$invalidate('dirty', dirty = $$new_props.dirty);
    if ('invalid' in $$props) $$invalidate('invalid', invalid = $$new_props.invalid);
    if ('updateInvalid' in $$props) $$invalidate('updateInvalid', updateInvalid = $$new_props.updateInvalid);
    if ('required' in $$props) $$invalidate('required', required = $$new_props.required);
    if ('inputId' in $$props) $$invalidate('inputId', inputId = $$new_props.inputId);
    if ('input$use' in $$props) $$invalidate('input$use', input$use = $$new_props.input$use);
    if ('input$class' in $$props) $$invalidate('input$class', input$class = $$new_props.input$class);
    if ('label$class' in $$props) $$invalidate('label$class', label$class = $$new_props.label$class);
    if ('menu$class' in $$props) $$invalidate('menu$class', menu$class = $$new_props.menu$class);
    if ('element' in $$props) $$invalidate('element', element = $$new_props.element);
    if ('select' in $$props) $$invalidate('select', select = $$new_props.select);
    if ('inputElement' in $$props) $$invalidate('inputElement', inputElement = $$new_props.inputElement);
    if ('menuPromiseResolve' in $$props) menuPromiseResolve = $$new_props.menuPromiseResolve;
    if ('menuPromise' in $$props) menuPromise = $$new_props.menuPromise;
  };

  $$self.$$.update = function () {
    var $$dirty = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
      select: 1,
      value: 1,
      selectedIndex: 1,
      disabled: 1,
      invalid: 1,
      updateInvalid: 1,
      required: 1
    };

    if ($$dirty.select || $$dirty.value) {
      if (select && select.value !== value) {
        $$invalidate('select', select.value = value, select);
      }
    }

    if ($$dirty.select || $$dirty.selectedIndex) {
      if (select && select.selectedIndex !== selectedIndex) {
        if (selectedIndex === uninitializedValue) {
          $$invalidate('selectedIndex', selectedIndex = select.selectedIndex);
        } else {
          $$invalidate('select', select.selectedIndex = selectedIndex, select);
        }
      }
    }

    if ($$dirty.select || $$dirty.disabled) {
      if (select && select.disabled !== disabled) {
        $$invalidate('select', select.disabled = disabled, select);
      }
    }

    if ($$dirty.select || $$dirty.invalid || $$dirty.updateInvalid) {
      if (select && select.valid !== !invalid) {
        if (updateInvalid) {
          $$invalidate('invalid', invalid = !select.valid);
        } else {
          $$invalidate('select', select.valid = !invalid, select);
        }
      }
    }

    if ($$dirty.select || $$dirty.required) {
      if (select && select.required !== required) {
        $$invalidate('select', select.required = required, select);
      }
    }
  };

  return _ref2 = {
    forwardEvents: forwardEvents,
    use: use,
    className: className,
    ripple: ripple,
    disabled: disabled,
    enhanced: enhanced,
    variant: variant,
    withLeadingIcon: withLeadingIcon,
    noLabel: noLabel,
    label: label,
    value: value,
    selectedIndex: selectedIndex,
    selectedText: selectedText,
    dirty: dirty,
    invalid: invalid,
    updateInvalid: updateInvalid,
    required: required,
    inputId: inputId,
    input$use: input$use,
    input$class: input$class,
    label$class: label$class,
    menu$class: menu$class,
    element: element,
    inputElement: inputElement,
    changeHandler: changeHandler,
    focus: focus,
    layout: layout,
    $$props: $$props,
    change_handler: change_handler,
    input_handler: input_handler,
    change_handler_1: change_handler_1,
    input_handler_1: input_handler_1,
    input_binding: input_binding,
    menu_anchorElement_binding: menu_anchorElement_binding,
    select_1_binding: select_1_binding,
    div_binding: div_binding
  }, _defineProperty(_ref2, "$$props", $$props = exclude_internal_props($$props)), _defineProperty(_ref2, "$$slots", $$slots), _defineProperty(_ref2, "$$scope", $$scope), _ref2;
}

var Select =
/*#__PURE__*/
function (_SvelteComponentDev) {
  _inherits(Select, _SvelteComponentDev);

  function Select(options) {
    var _this;

    _classCallCheck(this, Select);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Select).call(this, options));
    init(_assertThisInitialized(_this), options, instance, create_fragment, safe_not_equal, ["use", "class", "ripple", "disabled", "enhanced", "variant", "withLeadingIcon", "noLabel", "label", "value", "selectedIndex", "selectedText", "dirty", "invalid", "updateInvalid", "required", "inputId", "input$use", "input$class", "label$class", "menu$class", "focus", "layout"]);
    dispatch_dev("SvelteRegisterComponent", {
      component: _assertThisInitialized(_this),
      tagName: "Select",
      options: options,
      id: create_fragment.name
    });
    var ctx = _this.$$.ctx;
    var props = options.props || {};

    if (ctx.focus === undefined && !('focus' in props)) {
      console.warn("<Select> was created without expected prop 'focus'");
    }

    if (ctx.layout === undefined && !('layout' in props)) {
      console.warn("<Select> was created without expected prop 'layout'");
    }

    return _this;
  }

  _createClass(Select, [{
    key: "use",
    get: function get() {
      throw new Error("<Select>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    },
    set: function set(value) {
      throw new Error("<Select>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    }
  }, {
    key: "class",
    get: function get() {
      throw new Error("<Select>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    },
    set: function set(value) {
      throw new Error("<Select>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    }
  }, {
    key: "ripple",
    get: function get() {
      throw new Error("<Select>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    },
    set: function set(value) {
      throw new Error("<Select>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    }
  }, {
    key: "disabled",
    get: function get() {
      throw new Error("<Select>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    },
    set: function set(value) {
      throw new Error("<Select>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    }
  }, {
    key: "enhanced",
    get: function get() {
      throw new Error("<Select>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    },
    set: function set(value) {
      throw new Error("<Select>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    }
  }, {
    key: "variant",
    get: function get() {
      throw new Error("<Select>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    },
    set: function set(value) {
      throw new Error("<Select>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    }
  }, {
    key: "withLeadingIcon",
    get: function get() {
      throw new Error("<Select>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    },
    set: function set(value) {
      throw new Error("<Select>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    }
  }, {
    key: "noLabel",
    get: function get() {
      throw new Error("<Select>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    },
    set: function set(value) {
      throw new Error("<Select>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    }
  }, {
    key: "label",
    get: function get() {
      throw new Error("<Select>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    },
    set: function set(value) {
      throw new Error("<Select>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    }
  }, {
    key: "value",
    get: function get() {
      throw new Error("<Select>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    },
    set: function set(value) {
      throw new Error("<Select>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    }
  }, {
    key: "selectedIndex",
    get: function get() {
      throw new Error("<Select>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    },
    set: function set(value) {
      throw new Error("<Select>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    }
  }, {
    key: "selectedText",
    get: function get() {
      throw new Error("<Select>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    },
    set: function set(value) {
      throw new Error("<Select>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    }
  }, {
    key: "dirty",
    get: function get() {
      throw new Error("<Select>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    },
    set: function set(value) {
      throw new Error("<Select>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    }
  }, {
    key: "invalid",
    get: function get() {
      throw new Error("<Select>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    },
    set: function set(value) {
      throw new Error("<Select>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    }
  }, {
    key: "updateInvalid",
    get: function get() {
      throw new Error("<Select>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    },
    set: function set(value) {
      throw new Error("<Select>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    }
  }, {
    key: "required",
    get: function get() {
      throw new Error("<Select>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    },
    set: function set(value) {
      throw new Error("<Select>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    }
  }, {
    key: "inputId",
    get: function get() {
      throw new Error("<Select>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    },
    set: function set(value) {
      throw new Error("<Select>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    }
  }, {
    key: "input$use",
    get: function get() {
      throw new Error("<Select>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    },
    set: function set(value) {
      throw new Error("<Select>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    }
  }, {
    key: "input$class",
    get: function get() {
      throw new Error("<Select>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    },
    set: function set(value) {
      throw new Error("<Select>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    }
  }, {
    key: "label$class",
    get: function get() {
      throw new Error("<Select>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    },
    set: function set(value) {
      throw new Error("<Select>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    }
  }, {
    key: "menu$class",
    get: function get() {
      throw new Error("<Select>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    },
    set: function set(value) {
      throw new Error("<Select>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    }
  }, {
    key: "focus",
    get: function get() {
      return this.$$.ctx.focus;
    },
    set: function set(value) {
      throw new Error("<Select>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    }
  }, {
    key: "layout",
    get: function get() {
      return this.$$.ctx.layout;
    },
    set: function set(value) {
      throw new Error("<Select>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    }
  }]);

  return Select;
}(SvelteComponentDev);

var file$1 = "Users/hperrin/repos/svelte-material-ui/packages/select/Option.svelte"; // (8:0) {:else}

function create_else_block$1(ctx) {
  var option, useActions_action, forwardEvents_action, current;
  var default_slot_template = ctx.$$slots.default;
  var default_slot = create_slot(default_slot_template, ctx, null);
  var option_levels = [{
    value: ctx.value
  }, ctx.selectedProp, ctx.props];
  var option_data = {};

  for (var i = 0; i < option_levels.length; i += 1) {
    option_data = assign(option_data, option_levels[i]);
  }

  var block = {
    c: function create() {
      option = element("option");
      if (default_slot) default_slot.c();
      this.h();
    },
    l: function claim(nodes) {
      option = claim_element(nodes, "OPTION", {
        value: true
      }, false);
      var option_nodes = children(option);
      if (default_slot) default_slot.l(option_nodes);
      option_nodes.forEach(detach_dev);
      this.h();
    },
    h: function hydrate() {
      set_attributes(option, option_data);
      add_location(option, file$1, 8, 2, 144);
    },
    m: function mount(target, anchor) {
      insert_dev(target, option, anchor);

      if (default_slot) {
        default_slot.m(option, null);
      }

      useActions_action = useActions.call(null, option, ctx.use) || {};
      forwardEvents_action = ctx.forwardEvents.call(null, option) || {};
      current = true;
    },
    p: function update(changed, ctx) {
      if (default_slot && default_slot.p && changed.$$scope) {
        default_slot.p(get_slot_changes(default_slot_template, ctx, changed, null), get_slot_context(default_slot_template, ctx, null));
      }

      set_attributes(option, get_spread_update(option_levels, [changed.value && {
        value: ctx.value
      }, changed.selectedProp && ctx.selectedProp, changed.props && ctx.props]));

      if (typeof useActions_action.update === 'function' && changed.use) {
        useActions_action.update.call(null, ctx.use);
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
        detach_dev(option);
      }

      if (default_slot) default_slot.d(detaching);
      if (useActions_action && typeof useActions_action.destroy === 'function') useActions_action.destroy();
      if (forwardEvents_action && typeof forwardEvents_action.destroy === 'function') forwardEvents_action.destroy();
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_else_block$1.name,
    type: "else",
    source: "(8:0) {:else}",
    ctx: ctx
  });
  return block;
} // (1:0) {#if enhanced}


function create_if_block$1(ctx) {
  var current;
  var item_spread_levels = [{
    use: [ctx.forwardEvents].concat(_toConsumableArray(ctx.use))
  }, {
    "data-value": ctx.value
  }, {
    selected: ctx.selected
  }, ctx.props];
  var item_props = {
    $$slots: {
      default: [create_default_slot$1]
    },
    $$scope: {
      ctx: ctx
    }
  };

  for (var i = 0; i < item_spread_levels.length; i += 1) {
    item_props = assign(item_props, item_spread_levels[i]);
  }

  var item = new Item({
    props: item_props,
    $$inline: true
  });
  var block = {
    c: function create() {
      item.$$.fragment.c();
    },
    l: function claim(nodes) {
      item.$$.fragment.l(nodes);
    },
    m: function mount(target, anchor) {
      mount_component(item, target, anchor);
      current = true;
    },
    p: function update(changed, ctx) {
      var item_changes = changed.forwardEvents || changed.use || changed.value || changed.selected || changed.props ? get_spread_update(item_spread_levels, [(changed.forwardEvents || changed.use) && {
        use: [ctx.forwardEvents].concat(_toConsumableArray(ctx.use))
      }, changed.value && {
        "data-value": ctx.value
      }, changed.selected && {
        selected: ctx.selected
      }, changed.props && get_spread_object(ctx.props)]) : {};
      if (changed.$$scope) item_changes.$$scope = {
        changed: changed,
        ctx: ctx
      };
      item.$set(item_changes);
    },
    i: function intro(local) {
      if (current) return;
      transition_in(item.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(item.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      destroy_component(item, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_if_block$1.name,
    type: "if",
    source: "(1:0) {#if enhanced}",
    ctx: ctx
  });
  return block;
} // (2:2) <Item     use={[forwardEvents, ...use]}     data-value={value}     {selected}     {...props}   >


function create_default_slot$1(ctx) {
  var current;
  var default_slot_template = ctx.$$slots.default;
  var default_slot = create_slot(default_slot_template, ctx, null);
  var block = {
    c: function create() {
      if (default_slot) default_slot.c();
    },
    l: function claim(nodes) {
      if (default_slot) default_slot.l(nodes);
    },
    m: function mount(target, anchor) {
      if (default_slot) {
        default_slot.m(target, anchor);
      }

      current = true;
    },
    p: function update(changed, ctx) {
      if (default_slot && default_slot.p && changed.$$scope) {
        default_slot.p(get_slot_changes(default_slot_template, ctx, changed, null), get_slot_context(default_slot_template, ctx, null));
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
      if (default_slot) default_slot.d(detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_default_slot$1.name,
    type: "slot",
    source: "(2:2) <Item     use={[forwardEvents, ...use]}     data-value={value}     {selected}     {...props}   >",
    ctx: ctx
  });
  return block;
}

function create_fragment$1(ctx) {
  var current_block_type_index, if_block, if_block_anchor, current;
  var if_block_creators = [create_if_block$1, create_else_block$1];
  var if_blocks = [];

  function select_block_type(changed, ctx) {
    if (ctx.enhanced) return 0;
    return 1;
  }

  current_block_type_index = select_block_type(null, ctx);
  if_block = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx);
  var block = {
    c: function create() {
      if_block.c();
      if_block_anchor = empty();
    },
    l: function claim(nodes) {
      if_block.l(nodes);
      if_block_anchor = empty();
    },
    m: function mount(target, anchor) {
      if_blocks[current_block_type_index].m(target, anchor);
      insert_dev(target, if_block_anchor, anchor);
      current = true;
    },
    p: function update(changed, ctx) {
      if_block.p(changed, ctx);
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
      if_blocks[current_block_type_index].d(detaching);

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
  var forwardEvents = forwardEventsBuilder(current_component);
  var _$$props = $$props,
      _$$props$use = _$$props.use,
      use = _$$props$use === void 0 ? [] : _$$props$use,
      _$$props$class = _$$props.class,
      className = _$$props$class === void 0 ? '' : _$$props$class,
      _$$props$value = _$$props.value,
      value = _$$props$value === void 0 ? '' : _$$props$value,
      _$$props$selected = _$$props.selected,
      selected = _$$props$selected === void 0 ? false : _$$props$selected;
  var element;
  var enhanced = getContext('SMUI:select:option:enhanced');
  setContext('SMUI:list:item:role', 'option');
  var _$$props2 = $$props,
      _$$props2$$$slots = _$$props2.$$slots,
      $$slots = _$$props2$$$slots === void 0 ? {} : _$$props2$$$slots,
      $$scope = _$$props2.$$scope;

  $$self.$set = function ($$new_props) {
    $$invalidate('$$props', $$props = assign(assign({}, $$props), $$new_props));
    if ('use' in $$new_props) $$invalidate('use', use = $$new_props.use);
    if ('class' in $$new_props) $$invalidate('className', className = $$new_props.class);
    if ('value' in $$new_props) $$invalidate('value', value = $$new_props.value);
    if ('selected' in $$new_props) $$invalidate('selected', selected = $$new_props.selected);
    if ('$$scope' in $$new_props) $$invalidate('$$scope', $$scope = $$new_props.$$scope);
  };

  $$self.$capture_state = function () {
    return {
      use: use,
      className: className,
      value: value,
      selected: selected,
      element: element,
      enhanced: enhanced,
      props: props,
      selectedProp: selectedProp
    };
  };

  $$self.$inject_state = function ($$new_props) {
    $$invalidate('$$props', $$props = assign(assign({}, $$props), $$new_props));
    if ('use' in $$props) $$invalidate('use', use = $$new_props.use);
    if ('className' in $$props) $$invalidate('className', className = $$new_props.className);
    if ('value' in $$props) $$invalidate('value', value = $$new_props.value);
    if ('selected' in $$props) $$invalidate('selected', selected = $$new_props.selected);
    if ('element' in $$props) element = $$new_props.element;
    if ('enhanced' in $$props) $$invalidate('enhanced', enhanced = $$new_props.enhanced);
    if ('props' in $$props) $$invalidate('props', props = $$new_props.props);
    if ('selectedProp' in $$props) $$invalidate('selectedProp', selectedProp = $$new_props.selectedProp);
  };

  var props, selectedProp;

  $$self.$$.update = function () {
    var $$dirty = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
      $$props: 1,
      enhanced: 1,
      selected: 1
    };
    $$invalidate('props', props = exclude($$props, ['use', 'value', 'selected']));

    if ($$dirty.enhanced || $$dirty.selected) {
      $$invalidate('selectedProp', selectedProp = !enhanced && selected ? {
        selected: true
      } : {});
    }
  };

  return {
    forwardEvents: forwardEvents,
    use: use,
    className: className,
    value: value,
    selected: selected,
    enhanced: enhanced,
    props: props,
    selectedProp: selectedProp,
    $$props: $$props = exclude_internal_props($$props),
    $$slots: $$slots,
    $$scope: $$scope
  };
}

var Option =
/*#__PURE__*/
function (_SvelteComponentDev) {
  _inherits(Option, _SvelteComponentDev);

  function Option(options) {
    var _this;

    _classCallCheck(this, Option);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Option).call(this, options));
    init(_assertThisInitialized(_this), options, instance$1, create_fragment$1, safe_not_equal, ["use", "class", "value", "selected"]);
    dispatch_dev("SvelteRegisterComponent", {
      component: _assertThisInitialized(_this),
      tagName: "Option",
      options: options,
      id: create_fragment$1.name
    });
    return _this;
  }

  _createClass(Option, [{
    key: "use",
    get: function get() {
      throw new Error("<Option>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    },
    set: function set(value) {
      throw new Error("<Option>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    }
  }, {
    key: "class",
    get: function get() {
      throw new Error("<Option>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    },
    set: function set(value) {
      throw new Error("<Option>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    }
  }, {
    key: "value",
    get: function get() {
      throw new Error("<Option>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    },
    set: function set(value) {
      throw new Error("<Option>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    }
  }, {
    key: "selected",
    get: function get() {
      throw new Error("<Option>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    },
    set: function set(value) {
      throw new Error("<Option>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    }
  }]);

  return Option;
}(SvelteComponentDev);

var css$1 = ".mdc-select--with-leading-icon:not(.mdc-select--disabled) .mdc-select__icon{color:#000;color:var(--mdc-theme-on-surface,#000)}.mdc-select--with-leading-icon .mdc-select__icon{display:inline-block;position:absolute;bottom:16px;box-sizing:border-box;width:24px;height:24px;border:none;background-color:transparent;fill:currentColor;opacity:.54;text-decoration:none;cursor:pointer;user-select:none}.mdc-select__icon:not([tabindex]),.mdc-select__icon[tabindex=\"-1\"]{cursor:default;pointer-events:none}";
styleInject(css$1);

var file$2 = "Users/hperrin/repos/svelte-material-ui/packages/select/icon/Icon.svelte";

function create_fragment$2(ctx) {
  var i, useActions_action, forwardEvents_action, current;
  var default_slot_template = ctx.$$slots.default;
  var default_slot = create_slot(default_slot_template, ctx, null);
  var i_levels = [{
    class: "mdc-select__icon " + ctx.className
  }, {
    tabindex: ctx.tabindex
  }, {
    "aria-hidden": ctx.tabindex === '-1' ? 'true' : 'false'
  }, exclude(ctx.$$props, ['use', 'class', 'tabindex'])];
  var i_data = {};

  for (var i_1 = 0; i_1 < i_levels.length; i_1 += 1) {
    i_data = assign(i_data, i_levels[i_1]);
  }

  var block = {
    c: function create() {
      i = element("i");
      if (default_slot) default_slot.c();
      this.h();
    },
    l: function claim(nodes) {
      i = claim_element(nodes, "I", {
        class: true,
        tabindex: true,
        "aria-hidden": true
      }, false);
      var i_nodes = children(i);
      if (default_slot) default_slot.l(i_nodes);
      i_nodes.forEach(detach_dev);
      this.h();
    },
    h: function hydrate() {
      set_attributes(i, i_data);
      add_location(i, file$2, 0, 0, 0);
    },
    m: function mount(target, anchor) {
      insert_dev(target, i, anchor);

      if (default_slot) {
        default_slot.m(i, null);
      }

      ctx.i_binding(i);
      useActions_action = useActions.call(null, i, ctx.use) || {};
      forwardEvents_action = ctx.forwardEvents.call(null, i) || {};
      current = true;
    },
    p: function update(changed, ctx) {
      if (default_slot && default_slot.p && changed.$$scope) {
        default_slot.p(get_slot_changes(default_slot_template, ctx, changed, null), get_slot_context(default_slot_template, ctx, null));
      }

      set_attributes(i, get_spread_update(i_levels, [changed.className && {
        class: "mdc-select__icon " + ctx.className
      }, changed.tabindex && {
        tabindex: ctx.tabindex
      }, changed.tabindex && {
        "aria-hidden": ctx.tabindex === '-1' ? 'true' : 'false'
      }, (changed.exclude || changed.$$props) && exclude(ctx.$$props, ['use', 'class', 'tabindex'])]));

      if (typeof useActions_action.update === 'function' && changed.use) {
        useActions_action.update.call(null, ctx.use);
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
        detach_dev(i);
      }

      if (default_slot) default_slot.d(detaching);
      ctx.i_binding(null);
      if (useActions_action && typeof useActions_action.destroy === 'function') useActions_action.destroy();
      if (forwardEvents_action && typeof forwardEvents_action.destroy === 'function') forwardEvents_action.destroy();
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
  var _ref;

  var forwardEvents = forwardEventsBuilder(current_component);
  var _$$props = $$props,
      _$$props$use = _$$props.use,
      use = _$$props$use === void 0 ? [] : _$$props$use,
      _$$props$class = _$$props.class,
      className = _$$props$class === void 0 ? '' : _$$props$class,
      _$$props$role = _$$props.role,
      role = _$$props$role === void 0 ? undefined : _$$props$role,
      _$$props$tabindex = _$$props.tabindex,
      tabindex = _$$props$tabindex === void 0 ? role !== undefined ? '0' : '-1' : _$$props$tabindex;
  var element;
  var icon;
  onMount(function () {
    icon = new MDCSelectIcon(element);
  });
  onDestroy(function () {
    icon && icon.destroy();
  });
  var _$$props2 = $$props,
      _$$props2$$$slots = _$$props2.$$slots,
      $$slots = _$$props2$$$slots === void 0 ? {} : _$$props2$$$slots,
      $$scope = _$$props2.$$scope;

  function i_binding($$value) {
    binding_callbacks[$$value ? 'unshift' : 'push'](function () {
      $$invalidate('element', element = $$value);
    });
  }

  $$self.$set = function ($$new_props) {
    $$invalidate('$$props', $$props = assign(assign({}, $$props), $$new_props));
    if ('use' in $$new_props) $$invalidate('use', use = $$new_props.use);
    if ('class' in $$new_props) $$invalidate('className', className = $$new_props.class);
    if ('role' in $$new_props) $$invalidate('role', role = $$new_props.role);
    if ('tabindex' in $$new_props) $$invalidate('tabindex', tabindex = $$new_props.tabindex);
    if ('$$scope' in $$new_props) $$invalidate('$$scope', $$scope = $$new_props.$$scope);
  };

  $$self.$capture_state = function () {
    return {
      use: use,
      className: className,
      role: role,
      tabindex: tabindex,
      element: element,
      icon: icon
    };
  };

  $$self.$inject_state = function ($$new_props) {
    $$invalidate('$$props', $$props = assign(assign({}, $$props), $$new_props));
    if ('use' in $$props) $$invalidate('use', use = $$new_props.use);
    if ('className' in $$props) $$invalidate('className', className = $$new_props.className);
    if ('role' in $$props) $$invalidate('role', role = $$new_props.role);
    if ('tabindex' in $$props) $$invalidate('tabindex', tabindex = $$new_props.tabindex);
    if ('element' in $$props) $$invalidate('element', element = $$new_props.element);
    if ('icon' in $$props) icon = $$new_props.icon;
  };

  return _ref = {
    forwardEvents: forwardEvents,
    use: use,
    className: className,
    role: role,
    tabindex: tabindex,
    element: element,
    $$props: $$props,
    i_binding: i_binding
  }, _defineProperty(_ref, "$$props", $$props = exclude_internal_props($$props)), _defineProperty(_ref, "$$slots", $$slots), _defineProperty(_ref, "$$scope", $$scope), _ref;
}

var Icon =
/*#__PURE__*/
function (_SvelteComponentDev) {
  _inherits(Icon, _SvelteComponentDev);

  function Icon(options) {
    var _this;

    _classCallCheck(this, Icon);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Icon).call(this, options));
    init(_assertThisInitialized(_this), options, instance$2, create_fragment$2, safe_not_equal, ["use", "class", "role", "tabindex"]);
    dispatch_dev("SvelteRegisterComponent", {
      component: _assertThisInitialized(_this),
      tagName: "Icon",
      options: options,
      id: create_fragment$2.name
    });
    return _this;
  }

  _createClass(Icon, [{
    key: "use",
    get: function get() {
      throw new Error("<Icon>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    },
    set: function set(value) {
      throw new Error("<Icon>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    }
  }, {
    key: "class",
    get: function get() {
      throw new Error("<Icon>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    },
    set: function set(value) {
      throw new Error("<Icon>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    }
  }, {
    key: "role",
    get: function get() {
      throw new Error("<Icon>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    },
    set: function set(value) {
      throw new Error("<Icon>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    }
  }, {
    key: "tabindex",
    get: function get() {
      throw new Error("<Icon>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    },
    set: function set(value) {
      throw new Error("<Icon>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    }
  }]);

  return Icon;
}(SvelteComponentDev);

var css$2 = ".mdc-select-helper-text{font-family:Roboto,sans-serif;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-size:.75rem;line-height:1.25rem;font-weight:400;letter-spacing:.03333em;text-decoration:inherit;text-transform:inherit;display:block;line-height:normal;margin:0;transition:opacity .18s cubic-bezier(.4,0,.2,1);opacity:0;will-change:opacity}.mdc-select-helper-text:before{display:inline-block;width:0;height:16px;content:\"\";vertical-align:0}.mdc-select-helper-text--persistent{transition:none;opacity:1;will-change:auto}";
styleInject(css$2);

var file$3 = "Users/hperrin/repos/svelte-material-ui/packages/select/helper-text/HelperText.svelte";

function create_fragment$3(ctx) {
  var p, useActions_action, forwardEvents_action, current;
  var default_slot_template = ctx.$$slots.default;
  var default_slot = create_slot(default_slot_template, ctx, null);
  var p_levels = [{
    class: "mdc-select-helper-text " + ctx.className
  }, {
    "aria-hidden": "true"
  }, exclude(ctx.$$props, ['use', 'class', 'persistent', 'validationMsg'])];
  var p_data = {};

  for (var i = 0; i < p_levels.length; i += 1) {
    p_data = assign(p_data, p_levels[i]);
  }

  var block = {
    c: function create() {
      p = element("p");
      if (default_slot) default_slot.c();
      this.h();
    },
    l: function claim(nodes) {
      p = claim_element(nodes, "P", {
        class: true,
        "aria-hidden": true
      }, false);
      var p_nodes = children(p);
      if (default_slot) default_slot.l(p_nodes);
      p_nodes.forEach(detach_dev);
      this.h();
    },
    h: function hydrate() {
      set_attributes(p, p_data);
      toggle_class(p, "mdc-select-helper-text--persistent", ctx.persistent);
      toggle_class(p, "mdc-select-helper-text--validation-msg", ctx.validationMsg);
      add_location(p, file$3, 0, 0, 0);
    },
    m: function mount(target, anchor) {
      insert_dev(target, p, anchor);

      if (default_slot) {
        default_slot.m(p, null);
      }

      ctx.p_binding(p);
      useActions_action = useActions.call(null, p, ctx.use) || {};
      forwardEvents_action = ctx.forwardEvents.call(null, p) || {};
      current = true;
    },
    p: function update(changed, ctx) {
      if (default_slot && default_slot.p && changed.$$scope) {
        default_slot.p(get_slot_changes(default_slot_template, ctx, changed, null), get_slot_context(default_slot_template, ctx, null));
      }

      set_attributes(p, get_spread_update(p_levels, [changed.className && {
        class: "mdc-select-helper-text " + ctx.className
      }, {
        "aria-hidden": "true"
      }, (changed.exclude || changed.$$props) && exclude(ctx.$$props, ['use', 'class', 'persistent', 'validationMsg'])]));

      if (typeof useActions_action.update === 'function' && changed.use) {
        useActions_action.update.call(null, ctx.use);
      }

      if (changed.className || changed.persistent) {
        toggle_class(p, "mdc-select-helper-text--persistent", ctx.persistent);
      }

      if (changed.className || changed.validationMsg) {
        toggle_class(p, "mdc-select-helper-text--validation-msg", ctx.validationMsg);
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
        detach_dev(p);
      }

      if (default_slot) default_slot.d(detaching);
      ctx.p_binding(null);
      if (useActions_action && typeof useActions_action.destroy === 'function') useActions_action.destroy();
      if (forwardEvents_action && typeof forwardEvents_action.destroy === 'function') forwardEvents_action.destroy();
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_fragment$3.name,
    type: "component",
    source: "",
    ctx: ctx
  });
  return block;
}

function instance$3($$self, $$props, $$invalidate) {
  var _ref;

  var forwardEvents = forwardEventsBuilder(current_component);
  var _$$props = $$props,
      _$$props$use = _$$props.use,
      use = _$$props$use === void 0 ? [] : _$$props$use,
      _$$props$class = _$$props.class,
      className = _$$props$class === void 0 ? '' : _$$props$class,
      _$$props$persistent = _$$props.persistent,
      persistent = _$$props$persistent === void 0 ? false : _$$props$persistent,
      _$$props$validationMs = _$$props.validationMsg,
      validationMsg = _$$props$validationMs === void 0 ? false : _$$props$validationMs;
  var element;
  var helperText;
  onMount(function () {
    helperText = new MDCSelectHelperText(element);
  });
  onDestroy(function () {
    helperText && helperText.destroy();
  });
  var _$$props2 = $$props,
      _$$props2$$$slots = _$$props2.$$slots,
      $$slots = _$$props2$$$slots === void 0 ? {} : _$$props2$$$slots,
      $$scope = _$$props2.$$scope;

  function p_binding($$value) {
    binding_callbacks[$$value ? 'unshift' : 'push'](function () {
      $$invalidate('element', element = $$value);
    });
  }

  $$self.$set = function ($$new_props) {
    $$invalidate('$$props', $$props = assign(assign({}, $$props), $$new_props));
    if ('use' in $$new_props) $$invalidate('use', use = $$new_props.use);
    if ('class' in $$new_props) $$invalidate('className', className = $$new_props.class);
    if ('persistent' in $$new_props) $$invalidate('persistent', persistent = $$new_props.persistent);
    if ('validationMsg' in $$new_props) $$invalidate('validationMsg', validationMsg = $$new_props.validationMsg);
    if ('$$scope' in $$new_props) $$invalidate('$$scope', $$scope = $$new_props.$$scope);
  };

  $$self.$capture_state = function () {
    return {
      use: use,
      className: className,
      persistent: persistent,
      validationMsg: validationMsg,
      element: element,
      helperText: helperText
    };
  };

  $$self.$inject_state = function ($$new_props) {
    $$invalidate('$$props', $$props = assign(assign({}, $$props), $$new_props));
    if ('use' in $$props) $$invalidate('use', use = $$new_props.use);
    if ('className' in $$props) $$invalidate('className', className = $$new_props.className);
    if ('persistent' in $$props) $$invalidate('persistent', persistent = $$new_props.persistent);
    if ('validationMsg' in $$props) $$invalidate('validationMsg', validationMsg = $$new_props.validationMsg);
    if ('element' in $$props) $$invalidate('element', element = $$new_props.element);
    if ('helperText' in $$props) helperText = $$new_props.helperText;
  };

  return _ref = {
    forwardEvents: forwardEvents,
    use: use,
    className: className,
    persistent: persistent,
    validationMsg: validationMsg,
    element: element,
    $$props: $$props,
    p_binding: p_binding
  }, _defineProperty(_ref, "$$props", $$props = exclude_internal_props($$props)), _defineProperty(_ref, "$$slots", $$slots), _defineProperty(_ref, "$$scope", $$scope), _ref;
}

var HelperText =
/*#__PURE__*/
function (_SvelteComponentDev) {
  _inherits(HelperText, _SvelteComponentDev);

  function HelperText(options) {
    var _this;

    _classCallCheck(this, HelperText);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(HelperText).call(this, options));
    init(_assertThisInitialized(_this), options, instance$3, create_fragment$3, safe_not_equal, ["use", "class", "persistent", "validationMsg"]);
    dispatch_dev("SvelteRegisterComponent", {
      component: _assertThisInitialized(_this),
      tagName: "HelperText",
      options: options,
      id: create_fragment$3.name
    });
    return _this;
  }

  _createClass(HelperText, [{
    key: "use",
    get: function get() {
      throw new Error("<HelperText>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    },
    set: function set(value) {
      throw new Error("<HelperText>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    }
  }, {
    key: "class",
    get: function get() {
      throw new Error("<HelperText>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    },
    set: function set(value) {
      throw new Error("<HelperText>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    }
  }, {
    key: "persistent",
    get: function get() {
      throw new Error("<HelperText>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    },
    set: function set(value) {
      throw new Error("<HelperText>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    }
  }, {
    key: "validationMsg",
    get: function get() {
      throw new Error("<HelperText>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    },
    set: function set(value) {
      throw new Error("<HelperText>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    }
  }]);

  return HelperText;
}(SvelteComponentDev);

var file$4 = "src/routes/demo/select.svelte";

function add_css() {
  var style = element("style");
  style.id = 'svelte-nitlg9-style';
  style.textContent = ".margins.svelte-nitlg9{margin:18px 0 24px}.columns.svelte-nitlg9{display:flex;flex-wrap:wrap;justify-content:space-between}.columns.svelte-nitlg9>.svelte-nitlg9{margin-left:12px}.columns.svelte-nitlg9>.svelte-nitlg9:first-child{margin-left:0}.svelte-nitlg9 select, .demo-select-width{min-width:200px}.svelte-nitlg9 .shaped{border-radius:16px 16px 0 0}.svelte-nitlg9 .shaped-outlined .mdc-text-field__input{padding-left:32px;padding-right:0}.svelte-nitlg9 .shaped-outlined .mdc-notched-outline .mdc-notched-outline__leading{border-radius:28px 0 0 28px;width:28px}.svelte-nitlg9 .shaped-outlined .mdc-notched-outline .mdc-notched-outline__trailing{border-radius:0 28px 28px 0}.svelte-nitlg9 .shaped-outlined .mdc-notched-outline .mdc-notched-outline__notch{max-width:calc(100% - 28px * 2)}.svelte-nitlg9 .shaped-outlined + .mdc-text-field-helper-line{padding-left:32px;padding-right:28px}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VsZWN0LnN2ZWx0ZSIsInNvdXJjZXMiOlsic2VsZWN0LnN2ZWx0ZSJdLCJzb3VyY2VzQ29udGVudCI6WyI8c3ZlbHRlOmhlYWQ+XG4gIDx0aXRsZT5TZWxlY3QgLSBTTVVJPC90aXRsZT5cbjwvc3ZlbHRlOmhlYWQ+XG5cbjxzZWN0aW9uPlxuICA8aDI+U2VsZWN0PC9oMj5cblxuICA8ZGl2IGNsYXNzPVwiY29sdW1ucyBtYXJnaW5zXCIgc3R5bGU9XCJqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XCI+XG4gICAgPGRpdj5cbiAgICAgIDxTZWxlY3QgYmluZDp2YWx1ZT17dmFsdWVQcmVmaWxsZWR9IGxhYmVsPVwiTmF0aXZlIElucHV0XCI+XG4gICAgICAgIDxPcHRpb24gdmFsdWU9XCJcIj48L09wdGlvbj5cbiAgICAgICAgeyNlYWNoIGZydWl0cyBhcyBmcnVpdH1cbiAgICAgICAgICA8T3B0aW9uIHZhbHVlPXtmcnVpdH0gc2VsZWN0ZWQ9e3ZhbHVlUHJlZmlsbGVkID09PSBmcnVpdH0+e2ZydWl0fTwvT3B0aW9uPlxuICAgICAgICB7L2VhY2h9XG4gICAgICA8L1NlbGVjdD5cblxuICAgICAgPHByZSBjbGFzcz1cInN0YXR1c1wiPlNlbGVjdGVkOiB7dmFsdWVQcmVmaWxsZWR9PC9wcmU+XG4gICAgPC9kaXY+XG5cbiAgICA8ZGl2PlxuICAgICAgPFNlbGVjdCBlbmhhbmNlZCBiaW5kOnZhbHVlPXt2YWx1ZVByZWZpbGxlZEVuaGFuY2VkfSBsYWJlbD1cIkVuaGFuY2VkIElucHV0XCIgY2xhc3M9XCJkZW1vLXNlbGVjdC13aWR0aFwiIG1lbnUkY2xhc3M9XCJkZW1vLXNlbGVjdC13aWR0aFwiPlxuICAgICAgICA8T3B0aW9uIHZhbHVlPVwiXCI+PC9PcHRpb24+XG4gICAgICAgIHsjZWFjaCBmcnVpdHMgYXMgZnJ1aXR9XG4gICAgICAgICAgPE9wdGlvbiB2YWx1ZT17ZnJ1aXR9IHNlbGVjdGVkPXt2YWx1ZVByZWZpbGxlZEVuaGFuY2VkID09PSBmcnVpdH0+e2ZydWl0fTwvT3B0aW9uPlxuICAgICAgICB7L2VhY2h9XG4gICAgICA8L1NlbGVjdD5cblxuICAgICAgPHByZSBjbGFzcz1cInN0YXR1c1wiPlNlbGVjdGVkOiB7dmFsdWVQcmVmaWxsZWRFbmhhbmNlZH08L3ByZT5cbiAgICA8L2Rpdj5cbiAgPC9kaXY+XG5cbiAgPGRpdj5cbiAgICBTdGFuZGFyZDo8YnIgLz5cblxuICAgIDxkaXYgY2xhc3M9XCJjb2x1bW5zIG1hcmdpbnNcIj5cbiAgICAgIDxkaXY+XG4gICAgICAgIDxTZWxlY3QgYmluZDp2YWx1ZT17dmFsdWVTdGFuZGFyZH0gbGFiZWw9XCJGcnVpdFwiPlxuICAgICAgICAgIDxPcHRpb24gdmFsdWU9XCJcIj48L09wdGlvbj5cbiAgICAgICAgICB7I2VhY2ggZnJ1aXRzIGFzIGZydWl0fVxuICAgICAgICAgICAgPE9wdGlvbiB2YWx1ZT17ZnJ1aXR9IHNlbGVjdGVkPXt2YWx1ZVN0YW5kYXJkID09PSBmcnVpdH0+e2ZydWl0fTwvT3B0aW9uPlxuICAgICAgICAgIHsvZWFjaH1cbiAgICAgICAgPC9TZWxlY3Q+XG5cbiAgICAgICAgPHByZSBjbGFzcz1cInN0YXR1c1wiPlNlbGVjdGVkOiB7dmFsdWVTdGFuZGFyZH08L3ByZT5cbiAgICAgIDwvZGl2PlxuXG4gICAgICA8ZGl2PlxuICAgICAgICA8U2VsZWN0IGJpbmQ6dmFsdWU9e3ZhbHVlU3RhbmRhcmRIZWxwZXJUZXh0fSBsYWJlbD1cIldpdGggSGVscGVyIFRleHRcIj5cbiAgICAgICAgICA8T3B0aW9uIHZhbHVlPVwiXCI+PC9PcHRpb24+XG4gICAgICAgICAgeyNlYWNoIGZydWl0cyBhcyBmcnVpdH1cbiAgICAgICAgICAgIDxPcHRpb24gdmFsdWU9e2ZydWl0fSBzZWxlY3RlZD17dmFsdWVTdGFuZGFyZEhlbHBlclRleHQgPT09IGZydWl0fT57ZnJ1aXR9PC9PcHRpb24+XG4gICAgICAgICAgey9lYWNofVxuICAgICAgICA8L1NlbGVjdD5cbiAgICAgICAgPEhlbHBlclRleHQ+SGVscGVyIHRleHQuPC9IZWxwZXJUZXh0PlxuXG4gICAgICAgIDxwcmUgY2xhc3M9XCJzdGF0dXNcIj5TZWxlY3RlZDoge3ZhbHVlU3RhbmRhcmRIZWxwZXJUZXh0fTwvcHJlPlxuICAgICAgPC9kaXY+XG5cbiAgICAgIDxkaXY+XG4gICAgICAgIDxTZWxlY3QgZW5oYW5jZWQgYmluZDp2YWx1ZT17dmFsdWVTdGFuZGFyZEVuaGFuY2VkfSBsYWJlbD1cIkVuaGFuY2VkXCIgY2xhc3M9XCJkZW1vLXNlbGVjdC13aWR0aFwiIG1lbnUkY2xhc3M9XCJkZW1vLXNlbGVjdC13aWR0aFwiPlxuICAgICAgICAgIDxPcHRpb24gdmFsdWU9XCJcIj48L09wdGlvbj5cbiAgICAgICAgICB7I2VhY2ggZnJ1aXRzIGFzIGZydWl0fVxuICAgICAgICAgICAgPE9wdGlvbiB2YWx1ZT17ZnJ1aXR9IHNlbGVjdGVkPXt2YWx1ZVN0YW5kYXJkRW5oYW5jZWQgPT09IGZydWl0fT57ZnJ1aXR9PC9PcHRpb24+XG4gICAgICAgICAgey9lYWNofVxuICAgICAgICA8L1NlbGVjdD5cblxuICAgICAgICA8cHJlIGNsYXNzPVwic3RhdHVzXCI+U2VsZWN0ZWQ6IHt2YWx1ZVN0YW5kYXJkRW5oYW5jZWR9PC9wcmU+XG4gICAgICA8L2Rpdj5cblxuICAgICAgPGRpdj5cbiAgICAgICAgPFNlbGVjdCB3aXRoTGVhZGluZ0ljb24gYmluZDp2YWx1ZT17dmFsdWVTdGFuZGFyZExlYWRpbmdJY29ufSBsYWJlbD1cIkxlYWRpbmcgSWNvblwiIGNsYXNzPVwiZGVtby1zZWxlY3Qtd2lkdGhcIiBtZW51JGNsYXNzPVwiZGVtby1zZWxlY3Qtd2lkdGhcIj5cbiAgICAgICAgICA8c3BhbiBzbG90PVwiaWNvblwiPjxJY29uIGNsYXNzPVwibWF0ZXJpYWwtaWNvbnNcIj5ldmVudDwvSWNvbj48L3NwYW4+XG4gICAgICAgICAgPE9wdGlvbiB2YWx1ZT1cIlwiPjwvT3B0aW9uPlxuICAgICAgICAgIHsjZWFjaCBmcnVpdHMgYXMgZnJ1aXR9XG4gICAgICAgICAgICA8T3B0aW9uIHZhbHVlPXtmcnVpdH0gc2VsZWN0ZWQ9e3ZhbHVlU3RhbmRhcmRMZWFkaW5nSWNvbiA9PT0gZnJ1aXR9PntmcnVpdH08L09wdGlvbj5cbiAgICAgICAgICB7L2VhY2h9XG4gICAgICAgIDwvU2VsZWN0PlxuXG4gICAgICAgIDxwcmUgY2xhc3M9XCJzdGF0dXNcIj5TZWxlY3RlZDoge3ZhbHVlU3RhbmRhcmRMZWFkaW5nSWNvbn08L3ByZT5cbiAgICAgIDwvZGl2PlxuXG4gICAgICA8ZGl2PlxuICAgICAgICA8U2VsZWN0IGludmFsaWQgYmluZDp2YWx1ZT17dmFsdWVTdGFuZGFyZEludmFsaWR9IGxhYmVsPVwiSW52YWxpZFwiPlxuICAgICAgICAgIDxPcHRpb24gdmFsdWU9XCJcIj48L09wdGlvbj5cbiAgICAgICAgICB7I2VhY2ggZnJ1aXRzIGFzIGZydWl0fVxuICAgICAgICAgICAgPE9wdGlvbiB2YWx1ZT17ZnJ1aXR9IHNlbGVjdGVkPXt2YWx1ZVN0YW5kYXJkSW52YWxpZCA9PT0gZnJ1aXR9PntmcnVpdH08L09wdGlvbj5cbiAgICAgICAgICB7L2VhY2h9XG4gICAgICAgIDwvU2VsZWN0PlxuXG4gICAgICAgIDxwcmUgY2xhc3M9XCJzdGF0dXNcIj5TZWxlY3RlZDoge3ZhbHVlU3RhbmRhcmRJbnZhbGlkfTwvcHJlPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gIDwvZGl2PlxuXG4gIDxkaXY+XG4gICAgRmlsbGVkOjxiciAvPlxuXG4gICAgPGRpdiBjbGFzcz1cImNvbHVtbnMgbWFyZ2luc1wiPlxuICAgICAgPGRpdj5cbiAgICAgICAgPFNlbGVjdCB2YXJpYW50PVwiZmlsbGVkXCIgYmluZDp2YWx1ZT17dmFsdWVGaWxsZWR9IGxhYmVsPVwiRnJ1aXRcIj5cbiAgICAgICAgICA8T3B0aW9uIHZhbHVlPVwiXCI+PC9PcHRpb24+XG4gICAgICAgICAgeyNlYWNoIGZydWl0cyBhcyBmcnVpdH1cbiAgICAgICAgICAgIDxPcHRpb24gdmFsdWU9e2ZydWl0fSBzZWxlY3RlZD17dmFsdWVGaWxsZWQgPT09IGZydWl0fT57ZnJ1aXR9PC9PcHRpb24+XG4gICAgICAgICAgey9lYWNofVxuICAgICAgICA8L1NlbGVjdD5cblxuICAgICAgICA8cHJlIGNsYXNzPVwic3RhdHVzXCI+U2VsZWN0ZWQ6IHt2YWx1ZUZpbGxlZH08L3ByZT5cbiAgICAgIDwvZGl2PlxuXG4gICAgICA8ZGl2PlxuICAgICAgICA8U2VsZWN0IHZhcmlhbnQ9XCJmaWxsZWRcIiBiaW5kOnZhbHVlPXt2YWx1ZUZpbGxlZEhlbHBlclRleHR9IGxhYmVsPVwiV2l0aCBIZWxwZXIgVGV4dFwiPlxuICAgICAgICAgIDxPcHRpb24gdmFsdWU9XCJcIj48L09wdGlvbj5cbiAgICAgICAgICB7I2VhY2ggZnJ1aXRzIGFzIGZydWl0fVxuICAgICAgICAgICAgPE9wdGlvbiB2YWx1ZT17ZnJ1aXR9IHNlbGVjdGVkPXt2YWx1ZUZpbGxlZEhlbHBlclRleHQgPT09IGZydWl0fT57ZnJ1aXR9PC9PcHRpb24+XG4gICAgICAgICAgey9lYWNofVxuICAgICAgICA8L1NlbGVjdD5cbiAgICAgICAgPEhlbHBlclRleHQ+SGVscGVyIHRleHQuPC9IZWxwZXJUZXh0PlxuXG4gICAgICAgIDxwcmUgY2xhc3M9XCJzdGF0dXNcIj5TZWxlY3RlZDoge3ZhbHVlRmlsbGVkSGVscGVyVGV4dH08L3ByZT5cbiAgICAgIDwvZGl2PlxuXG4gICAgICA8ZGl2PlxuICAgICAgICA8U2VsZWN0IHZhcmlhbnQ9XCJmaWxsZWRcIiBlbmhhbmNlZCBiaW5kOnZhbHVlPXt2YWx1ZUZpbGxlZEVuaGFuY2VkfSBsYWJlbD1cIkVuaGFuY2VkXCIgY2xhc3M9XCJkZW1vLXNlbGVjdC13aWR0aFwiIG1lbnUkY2xhc3M9XCJkZW1vLXNlbGVjdC13aWR0aFwiPlxuICAgICAgICAgIDxPcHRpb24gdmFsdWU9XCJcIj48L09wdGlvbj5cbiAgICAgICAgICB7I2VhY2ggZnJ1aXRzIGFzIGZydWl0fVxuICAgICAgICAgICAgPE9wdGlvbiB2YWx1ZT17ZnJ1aXR9IHNlbGVjdGVkPXt2YWx1ZUZpbGxlZEVuaGFuY2VkID09PSBmcnVpdH0+e2ZydWl0fTwvT3B0aW9uPlxuICAgICAgICAgIHsvZWFjaH1cbiAgICAgICAgPC9TZWxlY3Q+XG5cbiAgICAgICAgPHByZSBjbGFzcz1cInN0YXR1c1wiPlNlbGVjdGVkOiB7dmFsdWVGaWxsZWRFbmhhbmNlZH08L3ByZT5cbiAgICAgIDwvZGl2PlxuXG4gICAgICA8ZGl2PlxuICAgICAgICA8U2VsZWN0IHZhcmlhbnQ9XCJmaWxsZWRcIiB3aXRoTGVhZGluZ0ljb24gYmluZDp2YWx1ZT17dmFsdWVGaWxsZWRMZWFkaW5nSWNvbn0gbGFiZWw9XCJMZWFkaW5nIEljb25cIiBjbGFzcz1cImRlbW8tc2VsZWN0LXdpZHRoXCIgbWVudSRjbGFzcz1cImRlbW8tc2VsZWN0LXdpZHRoXCI+XG4gICAgICAgICAgPHNwYW4gc2xvdD1cImljb25cIj48SWNvbiBjbGFzcz1cIm1hdGVyaWFsLWljb25zXCI+ZXZlbnQ8L0ljb24+PC9zcGFuPlxuICAgICAgICAgIDxPcHRpb24gdmFsdWU9XCJcIj48L09wdGlvbj5cbiAgICAgICAgICB7I2VhY2ggZnJ1aXRzIGFzIGZydWl0fVxuICAgICAgICAgICAgPE9wdGlvbiB2YWx1ZT17ZnJ1aXR9IHNlbGVjdGVkPXt2YWx1ZUZpbGxlZExlYWRpbmdJY29uID09PSBmcnVpdH0+e2ZydWl0fTwvT3B0aW9uPlxuICAgICAgICAgIHsvZWFjaH1cbiAgICAgICAgPC9TZWxlY3Q+XG5cbiAgICAgICAgPHByZSBjbGFzcz1cInN0YXR1c1wiPlNlbGVjdGVkOiB7dmFsdWVGaWxsZWRMZWFkaW5nSWNvbn08L3ByZT5cbiAgICAgIDwvZGl2PlxuXG4gICAgICA8ZGl2PlxuICAgICAgICA8U2VsZWN0IHZhcmlhbnQ9XCJmaWxsZWRcIiBpbnZhbGlkIGJpbmQ6dmFsdWU9e3ZhbHVlRmlsbGVkSW52YWxpZH0gbGFiZWw9XCJJbnZhbGlkXCI+XG4gICAgICAgICAgPE9wdGlvbiB2YWx1ZT1cIlwiPjwvT3B0aW9uPlxuICAgICAgICAgIHsjZWFjaCBmcnVpdHMgYXMgZnJ1aXR9XG4gICAgICAgICAgICA8T3B0aW9uIHZhbHVlPXtmcnVpdH0gc2VsZWN0ZWQ9e3ZhbHVlRmlsbGVkSW52YWxpZCA9PT0gZnJ1aXR9PntmcnVpdH08L09wdGlvbj5cbiAgICAgICAgICB7L2VhY2h9XG4gICAgICAgIDwvU2VsZWN0PlxuXG4gICAgICAgIDxwcmUgY2xhc3M9XCJzdGF0dXNcIj5TZWxlY3RlZDoge3ZhbHVlRmlsbGVkSW52YWxpZH08L3ByZT5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICA8L2Rpdj5cblxuICA8ZGl2PlxuICAgIE91dGxpbmVkOjxiciAvPlxuXG4gICAgPGRpdiBjbGFzcz1cImNvbHVtbnMgbWFyZ2luc1wiPlxuICAgICAgPGRpdj5cbiAgICAgICAgPFNlbGVjdCB2YXJpYW50PVwib3V0bGluZWRcIiBiaW5kOnZhbHVlPXt2YWx1ZU91dGxpbmVkfSBsYWJlbD1cIkZydWl0XCI+XG4gICAgICAgICAgPE9wdGlvbiB2YWx1ZT1cIlwiPjwvT3B0aW9uPlxuICAgICAgICAgIHsjZWFjaCBmcnVpdHMgYXMgZnJ1aXR9XG4gICAgICAgICAgICA8T3B0aW9uIHZhbHVlPXtmcnVpdH0gc2VsZWN0ZWQ9e3ZhbHVlT3V0bGluZWQgPT09IGZydWl0fT57ZnJ1aXR9PC9PcHRpb24+XG4gICAgICAgICAgey9lYWNofVxuICAgICAgICA8L1NlbGVjdD5cblxuICAgICAgICA8cHJlIGNsYXNzPVwic3RhdHVzXCI+U2VsZWN0ZWQ6IHt2YWx1ZU91dGxpbmVkfTwvcHJlPlxuICAgICAgPC9kaXY+XG5cbiAgICAgIDxkaXY+XG4gICAgICAgIDxTZWxlY3QgdmFyaWFudD1cIm91dGxpbmVkXCIgYmluZDp2YWx1ZT17dmFsdWVPdXRsaW5lZEhlbHBlclRleHR9IGxhYmVsPVwiV2l0aCBIZWxwZXIgVGV4dFwiPlxuICAgICAgICAgIDxPcHRpb24gdmFsdWU9XCJcIj48L09wdGlvbj5cbiAgICAgICAgICB7I2VhY2ggZnJ1aXRzIGFzIGZydWl0fVxuICAgICAgICAgICAgPE9wdGlvbiB2YWx1ZT17ZnJ1aXR9IHNlbGVjdGVkPXt2YWx1ZU91dGxpbmVkSGVscGVyVGV4dCA9PT0gZnJ1aXR9PntmcnVpdH08L09wdGlvbj5cbiAgICAgICAgICB7L2VhY2h9XG4gICAgICAgIDwvU2VsZWN0PlxuICAgICAgICA8SGVscGVyVGV4dD5IZWxwZXIgdGV4dC48L0hlbHBlclRleHQ+XG5cbiAgICAgICAgPHByZSBjbGFzcz1cInN0YXR1c1wiPlNlbGVjdGVkOiB7dmFsdWVPdXRsaW5lZEhlbHBlclRleHR9PC9wcmU+XG4gICAgICA8L2Rpdj5cblxuICAgICAgPGRpdj5cbiAgICAgICAgPFNlbGVjdCB2YXJpYW50PVwib3V0bGluZWRcIiBlbmhhbmNlZCBiaW5kOnZhbHVlPXt2YWx1ZU91dGxpbmVkRW5oYW5jZWR9IGxhYmVsPVwiRW5oYW5jZWRcIiBjbGFzcz1cImRlbW8tc2VsZWN0LXdpZHRoXCIgbWVudSRjbGFzcz1cImRlbW8tc2VsZWN0LXdpZHRoXCI+XG4gICAgICAgICAgPE9wdGlvbiB2YWx1ZT1cIlwiPjwvT3B0aW9uPlxuICAgICAgICAgIHsjZWFjaCBmcnVpdHMgYXMgZnJ1aXR9XG4gICAgICAgICAgICA8T3B0aW9uIHZhbHVlPXtmcnVpdH0gc2VsZWN0ZWQ9e3ZhbHVlT3V0bGluZWRFbmhhbmNlZCA9PT0gZnJ1aXR9PntmcnVpdH08L09wdGlvbj5cbiAgICAgICAgICB7L2VhY2h9XG4gICAgICAgIDwvU2VsZWN0PlxuXG4gICAgICAgIDxwcmUgY2xhc3M9XCJzdGF0dXNcIj5TZWxlY3RlZDoge3ZhbHVlT3V0bGluZWRFbmhhbmNlZH08L3ByZT5cbiAgICAgIDwvZGl2PlxuXG4gICAgICA8ZGl2PlxuICAgICAgICA8U2VsZWN0IHZhcmlhbnQ9XCJvdXRsaW5lZFwiIHdpdGhMZWFkaW5nSWNvbiBiaW5kOnZhbHVlPXt2YWx1ZU91dGxpbmVkTGVhZGluZ0ljb259IGxhYmVsPVwiTGVhZGluZyBJY29uXCIgY2xhc3M9XCJkZW1vLXNlbGVjdC13aWR0aFwiIG1lbnUkY2xhc3M9XCJkZW1vLXNlbGVjdC13aWR0aFwiPlxuICAgICAgICAgIDxzcGFuIHNsb3Q9XCJpY29uXCI+PEljb24gY2xhc3M9XCJtYXRlcmlhbC1pY29uc1wiPmV2ZW50PC9JY29uPjwvc3Bhbj5cbiAgICAgICAgICA8T3B0aW9uIHZhbHVlPVwiXCI+PC9PcHRpb24+XG4gICAgICAgICAgeyNlYWNoIGZydWl0cyBhcyBmcnVpdH1cbiAgICAgICAgICAgIDxPcHRpb24gdmFsdWU9e2ZydWl0fSBzZWxlY3RlZD17dmFsdWVPdXRsaW5lZExlYWRpbmdJY29uID09PSBmcnVpdH0+e2ZydWl0fTwvT3B0aW9uPlxuICAgICAgICAgIHsvZWFjaH1cbiAgICAgICAgPC9TZWxlY3Q+XG5cbiAgICAgICAgPHByZSBjbGFzcz1cInN0YXR1c1wiPlNlbGVjdGVkOiB7dmFsdWVPdXRsaW5lZExlYWRpbmdJY29ufTwvcHJlPlxuICAgICAgPC9kaXY+XG5cbiAgICAgIDxkaXY+XG4gICAgICAgIDxTZWxlY3QgdmFyaWFudD1cIm91dGxpbmVkXCIgaW52YWxpZCBiaW5kOnZhbHVlPXt2YWx1ZU91dGxpbmVkSW52YWxpZH0gbGFiZWw9XCJJbnZhbGlkXCI+XG4gICAgICAgICAgPE9wdGlvbiB2YWx1ZT1cIlwiPjwvT3B0aW9uPlxuICAgICAgICAgIHsjZWFjaCBmcnVpdHMgYXMgZnJ1aXR9XG4gICAgICAgICAgICA8T3B0aW9uIHZhbHVlPXtmcnVpdH0gc2VsZWN0ZWQ9e3ZhbHVlT3V0bGluZWRJbnZhbGlkID09PSBmcnVpdH0+e2ZydWl0fTwvT3B0aW9uPlxuICAgICAgICAgIHsvZWFjaH1cbiAgICAgICAgPC9TZWxlY3Q+XG5cbiAgICAgICAgPHByZSBjbGFzcz1cInN0YXR1c1wiPlNlbGVjdGVkOiB7dmFsdWVPdXRsaW5lZEludmFsaWR9PC9wcmU+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgPC9kaXY+XG5cbiAgPGRpdj5cbiAgICBTaGFwZWQgRmlsbGVkOjxiciAvPlxuXG4gICAgPGRpdiBjbGFzcz1cImNvbHVtbnMgbWFyZ2luc1wiPlxuICAgICAgPGRpdj5cbiAgICAgICAgPFNlbGVjdCBjbGFzcz1cInNoYXBlZFwiIHZhcmlhbnQ9XCJmaWxsZWRcIiBiaW5kOnZhbHVlPXt2YWx1ZVNoYXBlZEZpbGxlZH0gbGFiZWw9XCJGcnVpdFwiPlxuICAgICAgICAgIDxPcHRpb24gdmFsdWU9XCJcIj48L09wdGlvbj5cbiAgICAgICAgICB7I2VhY2ggZnJ1aXRzIGFzIGZydWl0fVxuICAgICAgICAgICAgPE9wdGlvbiB2YWx1ZT17ZnJ1aXR9IHNlbGVjdGVkPXt2YWx1ZVNoYXBlZEZpbGxlZCA9PT0gZnJ1aXR9PntmcnVpdH08L09wdGlvbj5cbiAgICAgICAgICB7L2VhY2h9XG4gICAgICAgIDwvU2VsZWN0PlxuXG4gICAgICAgIDxwcmUgY2xhc3M9XCJzdGF0dXNcIj5TZWxlY3RlZDoge3ZhbHVlU2hhcGVkRmlsbGVkfTwvcHJlPlxuICAgICAgPC9kaXY+XG5cbiAgICAgIDxkaXY+XG4gICAgICAgIDxTZWxlY3QgY2xhc3M9XCJzaGFwZWRcIiB2YXJpYW50PVwiZmlsbGVkXCIgYmluZDp2YWx1ZT17dmFsdWVTaGFwZWRGaWxsZWRIZWxwZXJUZXh0fSBsYWJlbD1cIldpdGggSGVscGVyIFRleHRcIj5cbiAgICAgICAgICA8T3B0aW9uIHZhbHVlPVwiXCI+PC9PcHRpb24+XG4gICAgICAgICAgeyNlYWNoIGZydWl0cyBhcyBmcnVpdH1cbiAgICAgICAgICAgIDxPcHRpb24gdmFsdWU9e2ZydWl0fSBzZWxlY3RlZD17dmFsdWVTaGFwZWRGaWxsZWRIZWxwZXJUZXh0ID09PSBmcnVpdH0+e2ZydWl0fTwvT3B0aW9uPlxuICAgICAgICAgIHsvZWFjaH1cbiAgICAgICAgPC9TZWxlY3Q+XG4gICAgICAgIDxIZWxwZXJUZXh0PkhlbHBlciB0ZXh0LjwvSGVscGVyVGV4dD5cblxuICAgICAgICA8cHJlIGNsYXNzPVwic3RhdHVzXCI+U2VsZWN0ZWQ6IHt2YWx1ZVNoYXBlZEZpbGxlZEhlbHBlclRleHR9PC9wcmU+XG4gICAgICA8L2Rpdj5cblxuICAgICAgPGRpdj5cbiAgICAgICAgPFNlbGVjdCBjbGFzcz1cInNoYXBlZCBkZW1vLXNlbGVjdC13aWR0aFwiIHZhcmlhbnQ9XCJmaWxsZWRcIiBlbmhhbmNlZCBiaW5kOnZhbHVlPXt2YWx1ZVNoYXBlZEZpbGxlZEVuaGFuY2VkfSBsYWJlbD1cIkVuaGFuY2VkXCIgbWVudSRjbGFzcz1cImRlbW8tc2VsZWN0LXdpZHRoXCI+XG4gICAgICAgICAgPE9wdGlvbiB2YWx1ZT1cIlwiPjwvT3B0aW9uPlxuICAgICAgICAgIHsjZWFjaCBmcnVpdHMgYXMgZnJ1aXR9XG4gICAgICAgICAgICA8T3B0aW9uIHZhbHVlPXtmcnVpdH0gc2VsZWN0ZWQ9e3ZhbHVlU2hhcGVkRmlsbGVkRW5oYW5jZWQgPT09IGZydWl0fT57ZnJ1aXR9PC9PcHRpb24+XG4gICAgICAgICAgey9lYWNofVxuICAgICAgICA8L1NlbGVjdD5cblxuICAgICAgICA8cHJlIGNsYXNzPVwic3RhdHVzXCI+U2VsZWN0ZWQ6IHt2YWx1ZVNoYXBlZEZpbGxlZEVuaGFuY2VkfTwvcHJlPlxuICAgICAgPC9kaXY+XG5cbiAgICAgIDxkaXY+XG4gICAgICAgIDxTZWxlY3QgY2xhc3M9XCJzaGFwZWQgZGVtby1zZWxlY3Qtd2lkdGhcIiB2YXJpYW50PVwiZmlsbGVkXCIgd2l0aExlYWRpbmdJY29uIGJpbmQ6dmFsdWU9e3ZhbHVlU2hhcGVkRmlsbGVkTGVhZGluZ0ljb259IGxhYmVsPVwiTGVhZGluZyBJY29uXCIgbWVudSRjbGFzcz1cImRlbW8tc2VsZWN0LXdpZHRoXCI+XG4gICAgICAgICAgPHNwYW4gc2xvdD1cImljb25cIj48SWNvbiBjbGFzcz1cIm1hdGVyaWFsLWljb25zXCI+ZXZlbnQ8L0ljb24+PC9zcGFuPlxuICAgICAgICAgIDxPcHRpb24gdmFsdWU9XCJcIj48L09wdGlvbj5cbiAgICAgICAgICB7I2VhY2ggZnJ1aXRzIGFzIGZydWl0fVxuICAgICAgICAgICAgPE9wdGlvbiB2YWx1ZT17ZnJ1aXR9IHNlbGVjdGVkPXt2YWx1ZVNoYXBlZEZpbGxlZExlYWRpbmdJY29uID09PSBmcnVpdH0+e2ZydWl0fTwvT3B0aW9uPlxuICAgICAgICAgIHsvZWFjaH1cbiAgICAgICAgPC9TZWxlY3Q+XG5cbiAgICAgICAgPHByZSBjbGFzcz1cInN0YXR1c1wiPlNlbGVjdGVkOiB7dmFsdWVTaGFwZWRGaWxsZWRMZWFkaW5nSWNvbn08L3ByZT5cbiAgICAgIDwvZGl2PlxuXG4gICAgICA8ZGl2PlxuICAgICAgICA8U2VsZWN0IGNsYXNzPVwic2hhcGVkXCIgdmFyaWFudD1cImZpbGxlZFwiIGludmFsaWQgYmluZDp2YWx1ZT17dmFsdWVTaGFwZWRGaWxsZWRJbnZhbGlkfSBsYWJlbD1cIkludmFsaWRcIj5cbiAgICAgICAgICA8T3B0aW9uIHZhbHVlPVwiXCI+PC9PcHRpb24+XG4gICAgICAgICAgeyNlYWNoIGZydWl0cyBhcyBmcnVpdH1cbiAgICAgICAgICAgIDxPcHRpb24gdmFsdWU9e2ZydWl0fSBzZWxlY3RlZD17dmFsdWVTaGFwZWRGaWxsZWRJbnZhbGlkID09PSBmcnVpdH0+e2ZydWl0fTwvT3B0aW9uPlxuICAgICAgICAgIHsvZWFjaH1cbiAgICAgICAgPC9TZWxlY3Q+XG5cbiAgICAgICAgPHByZSBjbGFzcz1cInN0YXR1c1wiPlNlbGVjdGVkOiB7dmFsdWVTaGFwZWRGaWxsZWRJbnZhbGlkfTwvcHJlPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gIDwvZGl2PlxuXG4gIDxkaXY+XG4gICAgU2hhcGVkIE91dGxpbmVkOjxiciAvPlxuXG4gICAgPGRpdiBjbGFzcz1cImNvbHVtbnMgbWFyZ2luc1wiPlxuICAgICAgPGRpdj5cbiAgICAgICAgPFNlbGVjdCBjbGFzcz1cInNoYXBlZC1vdXRsaW5lZFwiIHZhcmlhbnQ9XCJvdXRsaW5lZFwiIGJpbmQ6dmFsdWU9e3ZhbHVlU2hhcGVkT3V0bGluZWR9IGxhYmVsPVwiRnJ1aXRcIj5cbiAgICAgICAgICA8T3B0aW9uIHZhbHVlPVwiXCI+PC9PcHRpb24+XG4gICAgICAgICAgeyNlYWNoIGZydWl0cyBhcyBmcnVpdH1cbiAgICAgICAgICAgIDxPcHRpb24gdmFsdWU9e2ZydWl0fSBzZWxlY3RlZD17dmFsdWVTaGFwZWRPdXRsaW5lZCA9PT0gZnJ1aXR9PntmcnVpdH08L09wdGlvbj5cbiAgICAgICAgICB7L2VhY2h9XG4gICAgICAgIDwvU2VsZWN0PlxuXG4gICAgICAgIDxwcmUgY2xhc3M9XCJzdGF0dXNcIj5TZWxlY3RlZDoge3ZhbHVlU2hhcGVkT3V0bGluZWR9PC9wcmU+XG4gICAgICA8L2Rpdj5cblxuICAgICAgPGRpdj5cbiAgICAgICAgPFNlbGVjdCBjbGFzcz1cInNoYXBlZC1vdXRsaW5lZFwiIHZhcmlhbnQ9XCJvdXRsaW5lZFwiIGJpbmQ6dmFsdWU9e3ZhbHVlU2hhcGVkT3V0bGluZWRIZWxwZXJUZXh0fSBsYWJlbD1cIldpdGggSGVscGVyIFRleHRcIj5cbiAgICAgICAgICA8T3B0aW9uIHZhbHVlPVwiXCI+PC9PcHRpb24+XG4gICAgICAgICAgeyNlYWNoIGZydWl0cyBhcyBmcnVpdH1cbiAgICAgICAgICAgIDxPcHRpb24gdmFsdWU9e2ZydWl0fSBzZWxlY3RlZD17dmFsdWVTaGFwZWRPdXRsaW5lZEhlbHBlclRleHQgPT09IGZydWl0fT57ZnJ1aXR9PC9PcHRpb24+XG4gICAgICAgICAgey9lYWNofVxuICAgICAgICA8L1NlbGVjdD5cbiAgICAgICAgPEhlbHBlclRleHQ+SGVscGVyIHRleHQuPC9IZWxwZXJUZXh0PlxuXG4gICAgICAgIDxwcmUgY2xhc3M9XCJzdGF0dXNcIj5TZWxlY3RlZDoge3ZhbHVlU2hhcGVkT3V0bGluZWRIZWxwZXJUZXh0fTwvcHJlPlxuICAgICAgPC9kaXY+XG5cbiAgICAgIDxkaXY+XG4gICAgICAgIDxTZWxlY3QgY2xhc3M9XCJzaGFwZWQtb3V0bGluZWQgZGVtby1zZWxlY3Qtd2lkdGhcIiB2YXJpYW50PVwib3V0bGluZWRcIiBlbmhhbmNlZCBiaW5kOnZhbHVlPXt2YWx1ZVNoYXBlZE91dGxpbmVkRW5oYW5jZWR9IGxhYmVsPVwiRW5oYW5jZWRcIiBtZW51JGNsYXNzPVwiZGVtby1zZWxlY3Qtd2lkdGhcIj5cbiAgICAgICAgICA8T3B0aW9uIHZhbHVlPVwiXCI+PC9PcHRpb24+XG4gICAgICAgICAgeyNlYWNoIGZydWl0cyBhcyBmcnVpdH1cbiAgICAgICAgICAgIDxPcHRpb24gdmFsdWU9e2ZydWl0fSBzZWxlY3RlZD17dmFsdWVTaGFwZWRPdXRsaW5lZEVuaGFuY2VkID09PSBmcnVpdH0+e2ZydWl0fTwvT3B0aW9uPlxuICAgICAgICAgIHsvZWFjaH1cbiAgICAgICAgPC9TZWxlY3Q+XG5cbiAgICAgICAgPHByZSBjbGFzcz1cInN0YXR1c1wiPlNlbGVjdGVkOiB7dmFsdWVTaGFwZWRPdXRsaW5lZEVuaGFuY2VkfTwvcHJlPlxuICAgICAgPC9kaXY+XG5cbiAgICAgIDxkaXY+XG4gICAgICAgIDxTZWxlY3QgY2xhc3M9XCJzaGFwZWQtb3V0bGluZWQgZGVtby1zZWxlY3Qtd2lkdGhcIiB2YXJpYW50PVwib3V0bGluZWRcIiB3aXRoTGVhZGluZ0ljb24gYmluZDp2YWx1ZT17dmFsdWVTaGFwZWRPdXRsaW5lZExlYWRpbmdJY29ufSBsYWJlbD1cIkxlYWRpbmcgSWNvblwiIG1lbnUkY2xhc3M9XCJkZW1vLXNlbGVjdC13aWR0aFwiPlxuICAgICAgICAgIDxzcGFuIHNsb3Q9XCJpY29uXCI+PEljb24gY2xhc3M9XCJtYXRlcmlhbC1pY29uc1wiPmV2ZW50PC9JY29uPjwvc3Bhbj5cbiAgICAgICAgICA8T3B0aW9uIHZhbHVlPVwiXCI+PC9PcHRpb24+XG4gICAgICAgICAgeyNlYWNoIGZydWl0cyBhcyBmcnVpdH1cbiAgICAgICAgICAgIDxPcHRpb24gdmFsdWU9e2ZydWl0fSBzZWxlY3RlZD17dmFsdWVTaGFwZWRPdXRsaW5lZExlYWRpbmdJY29uID09PSBmcnVpdH0+e2ZydWl0fTwvT3B0aW9uPlxuICAgICAgICAgIHsvZWFjaH1cbiAgICAgICAgPC9TZWxlY3Q+XG5cbiAgICAgICAgPHByZSBjbGFzcz1cInN0YXR1c1wiPlNlbGVjdGVkOiB7dmFsdWVTaGFwZWRPdXRsaW5lZExlYWRpbmdJY29ufTwvcHJlPlxuICAgICAgPC9kaXY+XG5cbiAgICAgIDxkaXY+XG4gICAgICAgIDxTZWxlY3QgY2xhc3M9XCJzaGFwZWQtb3V0bGluZWRcIiB2YXJpYW50PVwib3V0bGluZWRcIiBpbnZhbGlkIGJpbmQ6dmFsdWU9e3ZhbHVlU2hhcGVkT3V0bGluZWRJbnZhbGlkfSBsYWJlbD1cIkludmFsaWRcIj5cbiAgICAgICAgICA8T3B0aW9uIHZhbHVlPVwiXCI+PC9PcHRpb24+XG4gICAgICAgICAgeyNlYWNoIGZydWl0cyBhcyBmcnVpdH1cbiAgICAgICAgICAgIDxPcHRpb24gdmFsdWU9e2ZydWl0fSBzZWxlY3RlZD17dmFsdWVTaGFwZWRPdXRsaW5lZEludmFsaWQgPT09IGZydWl0fT57ZnJ1aXR9PC9PcHRpb24+XG4gICAgICAgICAgey9lYWNofVxuICAgICAgICA8L1NlbGVjdD5cblxuICAgICAgICA8cHJlIGNsYXNzPVwic3RhdHVzXCI+U2VsZWN0ZWQ6IHt2YWx1ZVNoYXBlZE91dGxpbmVkSW52YWxpZH08L3ByZT5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICA8L2Rpdj5cbjwvc2VjdGlvbj5cblxuPHNjcmlwdD5cbiAgaW1wb3J0IFNlbGVjdCwge09wdGlvbn0gZnJvbSAnQHNtdWkvc2VsZWN0JztcbiAgaW1wb3J0IEljb24gZnJvbSAnQHNtdWkvc2VsZWN0L2ljb24vaW5kZXgnO1xuICBpbXBvcnQgSGVscGVyVGV4dCBmcm9tICdAc211aS9zZWxlY3QvaGVscGVyLXRleHQvaW5kZXgnO1xuXG4gIGxldCBmcnVpdHMgPSBbJ0FwcGxlJywgJ09yYW5nZScsICdCYW5hbmEnLCAnTWFuZ28nXTtcblxuICBsZXQgdmFsdWVQcmVmaWxsZWQgPSAnT3JhbmdlJztcbiAgbGV0IHZhbHVlUHJlZmlsbGVkRW5oYW5jZWQgPSAnT3JhbmdlJztcbiAgbGV0IHZhbHVlU3RhbmRhcmQgPSAnJztcbiAgbGV0IHZhbHVlU3RhbmRhcmRIZWxwZXJUZXh0ID0gJyc7XG4gIGxldCB2YWx1ZVN0YW5kYXJkRW5oYW5jZWQgPSAnJztcbiAgbGV0IHZhbHVlU3RhbmRhcmRMZWFkaW5nSWNvbiA9ICcnO1xuICBsZXQgdmFsdWVTdGFuZGFyZEludmFsaWQgPSAnJztcbiAgbGV0IHZhbHVlRmlsbGVkID0gJyc7XG4gIGxldCB2YWx1ZUZpbGxlZEhlbHBlclRleHQgPSAnJztcbiAgbGV0IHZhbHVlRmlsbGVkRW5oYW5jZWQgPSAnJztcbiAgbGV0IHZhbHVlRmlsbGVkTGVhZGluZ0ljb24gPSAnJztcbiAgbGV0IHZhbHVlRmlsbGVkSW52YWxpZCA9ICcnO1xuICBsZXQgdmFsdWVPdXRsaW5lZCA9ICcnO1xuICBsZXQgdmFsdWVPdXRsaW5lZEhlbHBlclRleHQgPSAnJztcbiAgbGV0IHZhbHVlT3V0bGluZWRFbmhhbmNlZCA9ICcnO1xuICBsZXQgdmFsdWVPdXRsaW5lZExlYWRpbmdJY29uID0gJyc7XG4gIGxldCB2YWx1ZU91dGxpbmVkSW52YWxpZCA9ICcnO1xuICBsZXQgdmFsdWVTaGFwZWRGaWxsZWQgPSAnJztcbiAgbGV0IHZhbHVlU2hhcGVkRmlsbGVkSGVscGVyVGV4dCA9ICcnO1xuICBsZXQgdmFsdWVTaGFwZWRGaWxsZWRFbmhhbmNlZCA9ICcnO1xuICBsZXQgdmFsdWVTaGFwZWRGaWxsZWRMZWFkaW5nSWNvbiA9ICcnO1xuICBsZXQgdmFsdWVTaGFwZWRGaWxsZWRJbnZhbGlkID0gJyc7XG4gIGxldCB2YWx1ZVNoYXBlZE91dGxpbmVkID0gJyc7XG4gIGxldCB2YWx1ZVNoYXBlZE91dGxpbmVkSGVscGVyVGV4dCA9ICcnO1xuICBsZXQgdmFsdWVTaGFwZWRPdXRsaW5lZEVuaGFuY2VkID0gJyc7XG4gIGxldCB2YWx1ZVNoYXBlZE91dGxpbmVkTGVhZGluZ0ljb24gPSAnJztcbiAgbGV0IHZhbHVlU2hhcGVkT3V0bGluZWRJbnZhbGlkID0gJyc7XG48L3NjcmlwdD5cblxuPHN0eWxlPlxuICAubWFyZ2lucyB7XG4gICAgbWFyZ2luOiAxOHB4IDAgMjRweDtcbiAgfVxuXG4gIC5jb2x1bW5zIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtd3JhcDogd3JhcDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIH1cblxuICAuY29sdW1ucyA+ICoge1xuICAgIG1hcmdpbi1sZWZ0OiAxMnB4O1xuICB9XG4gIC5jb2x1bW5zID4gKjpmaXJzdC1jaGlsZCB7XG4gICAgbWFyZ2luLWxlZnQ6IDA7XG4gIH1cblxuICAqIDpnbG9iYWwoc2VsZWN0LCAuZGVtby1zZWxlY3Qtd2lkdGgpIHtcbiAgICBtaW4td2lkdGg6IDIwMHB4O1xuICB9XG5cbiAgKiA6Z2xvYmFsKC5zaGFwZWQpIHtcbiAgICBib3JkZXItcmFkaXVzOiAxNnB4IDE2cHggMCAwO1xuICB9XG5cbiAgKiA6Z2xvYmFsKC5zaGFwZWQtb3V0bGluZWQgLm1kYy10ZXh0LWZpZWxkX19pbnB1dCkge1xuICAgIHBhZGRpbmctbGVmdDogMzJweDtcbiAgICBwYWRkaW5nLXJpZ2h0OiAwO1xuICB9XG4gICogOmdsb2JhbCguc2hhcGVkLW91dGxpbmVkIC5tZGMtbm90Y2hlZC1vdXRsaW5lIC5tZGMtbm90Y2hlZC1vdXRsaW5lX19sZWFkaW5nKSB7XG4gICAgYm9yZGVyLXJhZGl1czogMjhweCAwIDAgMjhweDtcbiAgICB3aWR0aDogMjhweDtcbiAgfVxuICAqIDpnbG9iYWwoLnNoYXBlZC1vdXRsaW5lZCAubWRjLW5vdGNoZWQtb3V0bGluZSAubWRjLW5vdGNoZWQtb3V0bGluZV9fdHJhaWxpbmcpIHtcbiAgICBib3JkZXItcmFkaXVzOiAwIDI4cHggMjhweCAwO1xuICB9XG4gICogOmdsb2JhbCguc2hhcGVkLW91dGxpbmVkIC5tZGMtbm90Y2hlZC1vdXRsaW5lIC5tZGMtbm90Y2hlZC1vdXRsaW5lX19ub3RjaCkge1xuICAgIG1heC13aWR0aDogY2FsYygxMDAlIC0gMjhweCAqIDIpO1xuICB9XG4gICogOmdsb2JhbCguc2hhcGVkLW91dGxpbmVkICsgLm1kYy10ZXh0LWZpZWxkLWhlbHBlci1saW5lKSB7XG4gICAgcGFkZGluZy1sZWZ0OiAzMnB4O1xuICAgIHBhZGRpbmctcmlnaHQ6IDI4cHg7XG4gIH1cbjwvc3R5bGU+Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWdZRSxRQUFRLGNBQUMsQ0FBQyxBQUNSLE1BQU0sQ0FBRSxJQUFJLENBQUMsQ0FBQyxDQUFDLElBQUksQUFDckIsQ0FBQyxBQUVELFFBQVEsY0FBQyxDQUFDLEFBQ1IsT0FBTyxDQUFFLElBQUksQ0FDYixTQUFTLENBQUUsSUFBSSxDQUNmLGVBQWUsQ0FBRSxhQUFhLEFBQ2hDLENBQUMsQUFFRCxzQkFBUSxDQUFHLGNBQUUsQ0FBQyxBQUNaLFdBQVcsQ0FBRSxJQUFJLEFBQ25CLENBQUMsQUFDRCxzQkFBUSxDQUFHLGNBQUMsWUFBWSxBQUFDLENBQUMsQUFDeEIsV0FBVyxDQUFFLENBQUMsQUFDaEIsQ0FBQyxBQUVELGNBQUMsQ0FBQyxBQUFRLDBCQUEwQixBQUFFLENBQUMsQUFDckMsU0FBUyxDQUFFLEtBQUssQUFDbEIsQ0FBQyxBQUVELGNBQUMsQ0FBQyxBQUFRLE9BQU8sQUFBRSxDQUFDLEFBQ2xCLGFBQWEsQ0FBRSxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLEFBQzlCLENBQUMsQUFFRCxjQUFDLENBQUMsQUFBUSx1Q0FBdUMsQUFBRSxDQUFDLEFBQ2xELFlBQVksQ0FBRSxJQUFJLENBQ2xCLGFBQWEsQ0FBRSxDQUFDLEFBQ2xCLENBQUMsQUFDRCxjQUFDLENBQUMsQUFBUSxtRUFBbUUsQUFBRSxDQUFDLEFBQzlFLGFBQWEsQ0FBRSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQzVCLEtBQUssQ0FBRSxJQUFJLEFBQ2IsQ0FBQyxBQUNELGNBQUMsQ0FBQyxBQUFRLG9FQUFvRSxBQUFFLENBQUMsQUFDL0UsYUFBYSxDQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQUFDOUIsQ0FBQyxBQUNELGNBQUMsQ0FBQyxBQUFRLGlFQUFpRSxBQUFFLENBQUMsQUFDNUUsU0FBUyxDQUFFLEtBQUssSUFBSSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxBQUNsQyxDQUFDLEFBQ0QsY0FBQyxDQUFDLEFBQVEsOENBQThDLEFBQUUsQ0FBQyxBQUN6RCxZQUFZLENBQUUsSUFBSSxDQUNsQixhQUFhLENBQUUsSUFBSSxBQUNyQixDQUFDIn0= */";
  append_dev(document.head, style);
}

function get_each_context(ctx, list, i) {
  var child_ctx = Object.create(ctx);
  child_ctx.fruit = list[i];
  return child_ctx;
}

function get_each_context_1(ctx, list, i) {
  var child_ctx = Object.create(ctx);
  child_ctx.fruit = list[i];
  return child_ctx;
}

function get_each_context_2(ctx, list, i) {
  var child_ctx = Object.create(ctx);
  child_ctx.fruit = list[i];
  return child_ctx;
}

function get_each_context_3(ctx, list, i) {
  var child_ctx = Object.create(ctx);
  child_ctx.fruit = list[i];
  return child_ctx;
}

function get_each_context_4(ctx, list, i) {
  var child_ctx = Object.create(ctx);
  child_ctx.fruit = list[i];
  return child_ctx;
}

function get_each_context_5(ctx, list, i) {
  var child_ctx = Object.create(ctx);
  child_ctx.fruit = list[i];
  return child_ctx;
}

function get_each_context_6(ctx, list, i) {
  var child_ctx = Object.create(ctx);
  child_ctx.fruit = list[i];
  return child_ctx;
}

function get_each_context_7(ctx, list, i) {
  var child_ctx = Object.create(ctx);
  child_ctx.fruit = list[i];
  return child_ctx;
}

function get_each_context_8(ctx, list, i) {
  var child_ctx = Object.create(ctx);
  child_ctx.fruit = list[i];
  return child_ctx;
}

function get_each_context_9(ctx, list, i) {
  var child_ctx = Object.create(ctx);
  child_ctx.fruit = list[i];
  return child_ctx;
}

function get_each_context_10(ctx, list, i) {
  var child_ctx = Object.create(ctx);
  child_ctx.fruit = list[i];
  return child_ctx;
}

function get_each_context_11(ctx, list, i) {
  var child_ctx = Object.create(ctx);
  child_ctx.fruit = list[i];
  return child_ctx;
}

function get_each_context_12(ctx, list, i) {
  var child_ctx = Object.create(ctx);
  child_ctx.fruit = list[i];
  return child_ctx;
}

function get_each_context_13(ctx, list, i) {
  var child_ctx = Object.create(ctx);
  child_ctx.fruit = list[i];
  return child_ctx;
}

function get_each_context_14(ctx, list, i) {
  var child_ctx = Object.create(ctx);
  child_ctx.fruit = list[i];
  return child_ctx;
}

function get_each_context_15(ctx, list, i) {
  var child_ctx = Object.create(ctx);
  child_ctx.fruit = list[i];
  return child_ctx;
}

function get_each_context_16(ctx, list, i) {
  var child_ctx = Object.create(ctx);
  child_ctx.fruit = list[i];
  return child_ctx;
}

function get_each_context_17(ctx, list, i) {
  var child_ctx = Object.create(ctx);
  child_ctx.fruit = list[i];
  return child_ctx;
}

function get_each_context_18(ctx, list, i) {
  var child_ctx = Object.create(ctx);
  child_ctx.fruit = list[i];
  return child_ctx;
}

function get_each_context_19(ctx, list, i) {
  var child_ctx = Object.create(ctx);
  child_ctx.fruit = list[i];
  return child_ctx;
}

function get_each_context_20(ctx, list, i) {
  var child_ctx = Object.create(ctx);
  child_ctx.fruit = list[i];
  return child_ctx;
}

function get_each_context_21(ctx, list, i) {
  var child_ctx = Object.create(ctx);
  child_ctx.fruit = list[i];
  return child_ctx;
}

function get_each_context_22(ctx, list, i) {
  var child_ctx = Object.create(ctx);
  child_ctx.fruit = list[i];
  return child_ctx;
}

function get_each_context_23(ctx, list, i) {
  var child_ctx = Object.create(ctx);
  child_ctx.fruit = list[i];
  return child_ctx;
}

function get_each_context_24(ctx, list, i) {
  var child_ctx = Object.create(ctx);
  child_ctx.fruit = list[i];
  return child_ctx;
}

function get_each_context_25(ctx, list, i) {
  var child_ctx = Object.create(ctx);
  child_ctx.fruit = list[i];
  return child_ctx;
}

function get_each_context_26(ctx, list, i) {
  var child_ctx = Object.create(ctx);
  child_ctx.fruit = list[i];
  return child_ctx;
} // (13:10) <Option value={fruit} selected={valuePrefilled === fruit}>


function create_default_slot_63(ctx) {
  var t_value = ctx.fruit + "",
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
    p: noop,
    d: function destroy(detaching) {
      if (detaching) {
        detach_dev(t);
      }
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_default_slot_63.name,
    type: "slot",
    source: "(13:10) <Option value={fruit} selected={valuePrefilled === fruit}>",
    ctx: ctx
  });
  return block;
} // (12:8) {#each fruits as fruit}


function create_each_block_26(ctx) {
  var current;
  var option = new Option({
    props: {
      value: ctx.fruit,
      selected: ctx.valuePrefilled === ctx.fruit,
      $$slots: {
        default: [create_default_slot_63]
      },
      $$scope: {
        ctx: ctx
      }
    },
    $$inline: true
  });
  var block = {
    c: function create() {
      option.$$.fragment.c();
    },
    l: function claim(nodes) {
      option.$$.fragment.l(nodes);
    },
    m: function mount(target, anchor) {
      mount_component(option, target, anchor);
      current = true;
    },
    p: function update(changed, ctx) {
      var option_changes = {};
      if (changed.valuePrefilled) option_changes.selected = ctx.valuePrefilled === ctx.fruit;
      if (changed.$$scope) option_changes.$$scope = {
        changed: changed,
        ctx: ctx
      };
      option.$set(option_changes);
    },
    i: function intro(local) {
      if (current) return;
      transition_in(option.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(option.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      destroy_component(option, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_each_block_26.name,
    type: "each",
    source: "(12:8) {#each fruits as fruit}",
    ctx: ctx
  });
  return block;
} // (10:6) <Select bind:value={valuePrefilled} label="Native Input">


function create_default_slot_62(ctx) {
  var t, each_1_anchor, current;
  var option = new Option({
    props: {
      value: ""
    },
    $$inline: true
  });
  var each_value_26 = ctx.fruits;
  var each_blocks = [];

  for (var i = 0; i < each_value_26.length; i += 1) {
    each_blocks[i] = create_each_block_26(get_each_context_26(ctx, each_value_26, i));
  }

  var out = function out(i) {
    return transition_out(each_blocks[i], 1, 1, function () {
      each_blocks[i] = null;
    });
  };

  var block = {
    c: function create() {
      option.$$.fragment.c();
      t = space();

      for (var _i = 0; _i < each_blocks.length; _i += 1) {
        each_blocks[_i].c();
      }

      each_1_anchor = empty();
    },
    l: function claim(nodes) {
      option.$$.fragment.l(nodes);
      t = claim_space(nodes);

      for (var _i2 = 0; _i2 < each_blocks.length; _i2 += 1) {
        each_blocks[_i2].l(nodes);
      }

      each_1_anchor = empty();
    },
    m: function mount(target, anchor) {
      mount_component(option, target, anchor);
      insert_dev(target, t, anchor);

      for (var _i3 = 0; _i3 < each_blocks.length; _i3 += 1) {
        each_blocks[_i3].m(target, anchor);
      }

      insert_dev(target, each_1_anchor, anchor);
      current = true;
    },
    p: function update(changed, ctx) {
      if (changed.fruits || changed.valuePrefilled) {
        each_value_26 = ctx.fruits;

        var _i4;

        for (_i4 = 0; _i4 < each_value_26.length; _i4 += 1) {
          var child_ctx = get_each_context_26(ctx, each_value_26, _i4);

          if (each_blocks[_i4]) {
            each_blocks[_i4].p(changed, child_ctx);

            transition_in(each_blocks[_i4], 1);
          } else {
            each_blocks[_i4] = create_each_block_26(child_ctx);

            each_blocks[_i4].c();

            transition_in(each_blocks[_i4], 1);

            each_blocks[_i4].m(each_1_anchor.parentNode, each_1_anchor);
          }
        }

        group_outros();

        for (_i4 = each_value_26.length; _i4 < each_blocks.length; _i4 += 1) {
          out(_i4);
        }

        check_outros();
      }
    },
    i: function intro(local) {
      if (current) return;
      transition_in(option.$$.fragment, local);

      for (var _i5 = 0; _i5 < each_value_26.length; _i5 += 1) {
        transition_in(each_blocks[_i5]);
      }

      current = true;
    },
    o: function outro(local) {
      transition_out(option.$$.fragment, local);
      each_blocks = each_blocks.filter(Boolean);

      for (var _i6 = 0; _i6 < each_blocks.length; _i6 += 1) {
        transition_out(each_blocks[_i6]);
      }

      current = false;
    },
    d: function destroy(detaching) {
      destroy_component(option, detaching);

      if (detaching) {
        detach_dev(t);
      }

      destroy_each(each_blocks, detaching);

      if (detaching) {
        detach_dev(each_1_anchor);
      }
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_default_slot_62.name,
    type: "slot",
    source: "(10:6) <Select bind:value={valuePrefilled} label=\"Native Input\">",
    ctx: ctx
  });
  return block;
} // (24:10) <Option value={fruit} selected={valuePrefilledEnhanced === fruit}>


function create_default_slot_61(ctx) {
  var t_value = ctx.fruit + "",
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
    p: noop,
    d: function destroy(detaching) {
      if (detaching) {
        detach_dev(t);
      }
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_default_slot_61.name,
    type: "slot",
    source: "(24:10) <Option value={fruit} selected={valuePrefilledEnhanced === fruit}>",
    ctx: ctx
  });
  return block;
} // (23:8) {#each fruits as fruit}


function create_each_block_25(ctx) {
  var current;
  var option = new Option({
    props: {
      value: ctx.fruit,
      selected: ctx.valuePrefilledEnhanced === ctx.fruit,
      $$slots: {
        default: [create_default_slot_61]
      },
      $$scope: {
        ctx: ctx
      }
    },
    $$inline: true
  });
  var block = {
    c: function create() {
      option.$$.fragment.c();
    },
    l: function claim(nodes) {
      option.$$.fragment.l(nodes);
    },
    m: function mount(target, anchor) {
      mount_component(option, target, anchor);
      current = true;
    },
    p: function update(changed, ctx) {
      var option_changes = {};
      if (changed.valuePrefilledEnhanced) option_changes.selected = ctx.valuePrefilledEnhanced === ctx.fruit;
      if (changed.$$scope) option_changes.$$scope = {
        changed: changed,
        ctx: ctx
      };
      option.$set(option_changes);
    },
    i: function intro(local) {
      if (current) return;
      transition_in(option.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(option.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      destroy_component(option, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_each_block_25.name,
    type: "each",
    source: "(23:8) {#each fruits as fruit}",
    ctx: ctx
  });
  return block;
} // (21:6) <Select enhanced bind:value={valuePrefilledEnhanced} label="Enhanced Input" class="demo-select-width" menu$class="demo-select-width">


function create_default_slot_60(ctx) {
  var t, each_1_anchor, current;
  var option = new Option({
    props: {
      value: ""
    },
    $$inline: true
  });
  var each_value_25 = ctx.fruits;
  var each_blocks = [];

  for (var i = 0; i < each_value_25.length; i += 1) {
    each_blocks[i] = create_each_block_25(get_each_context_25(ctx, each_value_25, i));
  }

  var out = function out(i) {
    return transition_out(each_blocks[i], 1, 1, function () {
      each_blocks[i] = null;
    });
  };

  var block = {
    c: function create() {
      option.$$.fragment.c();
      t = space();

      for (var _i7 = 0; _i7 < each_blocks.length; _i7 += 1) {
        each_blocks[_i7].c();
      }

      each_1_anchor = empty();
    },
    l: function claim(nodes) {
      option.$$.fragment.l(nodes);
      t = claim_space(nodes);

      for (var _i8 = 0; _i8 < each_blocks.length; _i8 += 1) {
        each_blocks[_i8].l(nodes);
      }

      each_1_anchor = empty();
    },
    m: function mount(target, anchor) {
      mount_component(option, target, anchor);
      insert_dev(target, t, anchor);

      for (var _i9 = 0; _i9 < each_blocks.length; _i9 += 1) {
        each_blocks[_i9].m(target, anchor);
      }

      insert_dev(target, each_1_anchor, anchor);
      current = true;
    },
    p: function update(changed, ctx) {
      if (changed.fruits || changed.valuePrefilledEnhanced) {
        each_value_25 = ctx.fruits;

        var _i10;

        for (_i10 = 0; _i10 < each_value_25.length; _i10 += 1) {
          var child_ctx = get_each_context_25(ctx, each_value_25, _i10);

          if (each_blocks[_i10]) {
            each_blocks[_i10].p(changed, child_ctx);

            transition_in(each_blocks[_i10], 1);
          } else {
            each_blocks[_i10] = create_each_block_25(child_ctx);

            each_blocks[_i10].c();

            transition_in(each_blocks[_i10], 1);

            each_blocks[_i10].m(each_1_anchor.parentNode, each_1_anchor);
          }
        }

        group_outros();

        for (_i10 = each_value_25.length; _i10 < each_blocks.length; _i10 += 1) {
          out(_i10);
        }

        check_outros();
      }
    },
    i: function intro(local) {
      if (current) return;
      transition_in(option.$$.fragment, local);

      for (var _i11 = 0; _i11 < each_value_25.length; _i11 += 1) {
        transition_in(each_blocks[_i11]);
      }

      current = true;
    },
    o: function outro(local) {
      transition_out(option.$$.fragment, local);
      each_blocks = each_blocks.filter(Boolean);

      for (var _i12 = 0; _i12 < each_blocks.length; _i12 += 1) {
        transition_out(each_blocks[_i12]);
      }

      current = false;
    },
    d: function destroy(detaching) {
      destroy_component(option, detaching);

      if (detaching) {
        detach_dev(t);
      }

      destroy_each(each_blocks, detaching);

      if (detaching) {
        detach_dev(each_1_anchor);
      }
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_default_slot_60.name,
    type: "slot",
    source: "(21:6) <Select enhanced bind:value={valuePrefilledEnhanced} label=\"Enhanced Input\" class=\"demo-select-width\" menu$class=\"demo-select-width\">",
    ctx: ctx
  });
  return block;
} // (40:12) <Option value={fruit} selected={valueStandard === fruit}>


function create_default_slot_59(ctx) {
  var t_value = ctx.fruit + "",
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
    p: noop,
    d: function destroy(detaching) {
      if (detaching) {
        detach_dev(t);
      }
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_default_slot_59.name,
    type: "slot",
    source: "(40:12) <Option value={fruit} selected={valueStandard === fruit}>",
    ctx: ctx
  });
  return block;
} // (39:10) {#each fruits as fruit}


function create_each_block_24(ctx) {
  var current;
  var option = new Option({
    props: {
      value: ctx.fruit,
      selected: ctx.valueStandard === ctx.fruit,
      $$slots: {
        default: [create_default_slot_59]
      },
      $$scope: {
        ctx: ctx
      }
    },
    $$inline: true
  });
  var block = {
    c: function create() {
      option.$$.fragment.c();
    },
    l: function claim(nodes) {
      option.$$.fragment.l(nodes);
    },
    m: function mount(target, anchor) {
      mount_component(option, target, anchor);
      current = true;
    },
    p: function update(changed, ctx) {
      var option_changes = {};
      if (changed.valueStandard) option_changes.selected = ctx.valueStandard === ctx.fruit;
      if (changed.$$scope) option_changes.$$scope = {
        changed: changed,
        ctx: ctx
      };
      option.$set(option_changes);
    },
    i: function intro(local) {
      if (current) return;
      transition_in(option.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(option.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      destroy_component(option, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_each_block_24.name,
    type: "each",
    source: "(39:10) {#each fruits as fruit}",
    ctx: ctx
  });
  return block;
} // (37:8) <Select bind:value={valueStandard} label="Fruit">


function create_default_slot_58(ctx) {
  var t, each_1_anchor, current;
  var option = new Option({
    props: {
      value: ""
    },
    $$inline: true
  });
  var each_value_24 = ctx.fruits;
  var each_blocks = [];

  for (var i = 0; i < each_value_24.length; i += 1) {
    each_blocks[i] = create_each_block_24(get_each_context_24(ctx, each_value_24, i));
  }

  var out = function out(i) {
    return transition_out(each_blocks[i], 1, 1, function () {
      each_blocks[i] = null;
    });
  };

  var block = {
    c: function create() {
      option.$$.fragment.c();
      t = space();

      for (var _i13 = 0; _i13 < each_blocks.length; _i13 += 1) {
        each_blocks[_i13].c();
      }

      each_1_anchor = empty();
    },
    l: function claim(nodes) {
      option.$$.fragment.l(nodes);
      t = claim_space(nodes);

      for (var _i14 = 0; _i14 < each_blocks.length; _i14 += 1) {
        each_blocks[_i14].l(nodes);
      }

      each_1_anchor = empty();
    },
    m: function mount(target, anchor) {
      mount_component(option, target, anchor);
      insert_dev(target, t, anchor);

      for (var _i15 = 0; _i15 < each_blocks.length; _i15 += 1) {
        each_blocks[_i15].m(target, anchor);
      }

      insert_dev(target, each_1_anchor, anchor);
      current = true;
    },
    p: function update(changed, ctx) {
      if (changed.fruits || changed.valueStandard) {
        each_value_24 = ctx.fruits;

        var _i16;

        for (_i16 = 0; _i16 < each_value_24.length; _i16 += 1) {
          var child_ctx = get_each_context_24(ctx, each_value_24, _i16);

          if (each_blocks[_i16]) {
            each_blocks[_i16].p(changed, child_ctx);

            transition_in(each_blocks[_i16], 1);
          } else {
            each_blocks[_i16] = create_each_block_24(child_ctx);

            each_blocks[_i16].c();

            transition_in(each_blocks[_i16], 1);

            each_blocks[_i16].m(each_1_anchor.parentNode, each_1_anchor);
          }
        }

        group_outros();

        for (_i16 = each_value_24.length; _i16 < each_blocks.length; _i16 += 1) {
          out(_i16);
        }

        check_outros();
      }
    },
    i: function intro(local) {
      if (current) return;
      transition_in(option.$$.fragment, local);

      for (var _i17 = 0; _i17 < each_value_24.length; _i17 += 1) {
        transition_in(each_blocks[_i17]);
      }

      current = true;
    },
    o: function outro(local) {
      transition_out(option.$$.fragment, local);
      each_blocks = each_blocks.filter(Boolean);

      for (var _i18 = 0; _i18 < each_blocks.length; _i18 += 1) {
        transition_out(each_blocks[_i18]);
      }

      current = false;
    },
    d: function destroy(detaching) {
      destroy_component(option, detaching);

      if (detaching) {
        detach_dev(t);
      }

      destroy_each(each_blocks, detaching);

      if (detaching) {
        detach_dev(each_1_anchor);
      }
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_default_slot_58.name,
    type: "slot",
    source: "(37:8) <Select bind:value={valueStandard} label=\"Fruit\">",
    ctx: ctx
  });
  return block;
} // (51:12) <Option value={fruit} selected={valueStandardHelperText === fruit}>


function create_default_slot_57(ctx) {
  var t_value = ctx.fruit + "",
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
    p: noop,
    d: function destroy(detaching) {
      if (detaching) {
        detach_dev(t);
      }
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_default_slot_57.name,
    type: "slot",
    source: "(51:12) <Option value={fruit} selected={valueStandardHelperText === fruit}>",
    ctx: ctx
  });
  return block;
} // (50:10) {#each fruits as fruit}


function create_each_block_23(ctx) {
  var current;
  var option = new Option({
    props: {
      value: ctx.fruit,
      selected: ctx.valueStandardHelperText === ctx.fruit,
      $$slots: {
        default: [create_default_slot_57]
      },
      $$scope: {
        ctx: ctx
      }
    },
    $$inline: true
  });
  var block = {
    c: function create() {
      option.$$.fragment.c();
    },
    l: function claim(nodes) {
      option.$$.fragment.l(nodes);
    },
    m: function mount(target, anchor) {
      mount_component(option, target, anchor);
      current = true;
    },
    p: function update(changed, ctx) {
      var option_changes = {};
      if (changed.valueStandardHelperText) option_changes.selected = ctx.valueStandardHelperText === ctx.fruit;
      if (changed.$$scope) option_changes.$$scope = {
        changed: changed,
        ctx: ctx
      };
      option.$set(option_changes);
    },
    i: function intro(local) {
      if (current) return;
      transition_in(option.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(option.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      destroy_component(option, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_each_block_23.name,
    type: "each",
    source: "(50:10) {#each fruits as fruit}",
    ctx: ctx
  });
  return block;
} // (48:8) <Select bind:value={valueStandardHelperText} label="With Helper Text">


function create_default_slot_56(ctx) {
  var t, each_1_anchor, current;
  var option = new Option({
    props: {
      value: ""
    },
    $$inline: true
  });
  var each_value_23 = ctx.fruits;
  var each_blocks = [];

  for (var i = 0; i < each_value_23.length; i += 1) {
    each_blocks[i] = create_each_block_23(get_each_context_23(ctx, each_value_23, i));
  }

  var out = function out(i) {
    return transition_out(each_blocks[i], 1, 1, function () {
      each_blocks[i] = null;
    });
  };

  var block = {
    c: function create() {
      option.$$.fragment.c();
      t = space();

      for (var _i19 = 0; _i19 < each_blocks.length; _i19 += 1) {
        each_blocks[_i19].c();
      }

      each_1_anchor = empty();
    },
    l: function claim(nodes) {
      option.$$.fragment.l(nodes);
      t = claim_space(nodes);

      for (var _i20 = 0; _i20 < each_blocks.length; _i20 += 1) {
        each_blocks[_i20].l(nodes);
      }

      each_1_anchor = empty();
    },
    m: function mount(target, anchor) {
      mount_component(option, target, anchor);
      insert_dev(target, t, anchor);

      for (var _i21 = 0; _i21 < each_blocks.length; _i21 += 1) {
        each_blocks[_i21].m(target, anchor);
      }

      insert_dev(target, each_1_anchor, anchor);
      current = true;
    },
    p: function update(changed, ctx) {
      if (changed.fruits || changed.valueStandardHelperText) {
        each_value_23 = ctx.fruits;

        var _i22;

        for (_i22 = 0; _i22 < each_value_23.length; _i22 += 1) {
          var child_ctx = get_each_context_23(ctx, each_value_23, _i22);

          if (each_blocks[_i22]) {
            each_blocks[_i22].p(changed, child_ctx);

            transition_in(each_blocks[_i22], 1);
          } else {
            each_blocks[_i22] = create_each_block_23(child_ctx);

            each_blocks[_i22].c();

            transition_in(each_blocks[_i22], 1);

            each_blocks[_i22].m(each_1_anchor.parentNode, each_1_anchor);
          }
        }

        group_outros();

        for (_i22 = each_value_23.length; _i22 < each_blocks.length; _i22 += 1) {
          out(_i22);
        }

        check_outros();
      }
    },
    i: function intro(local) {
      if (current) return;
      transition_in(option.$$.fragment, local);

      for (var _i23 = 0; _i23 < each_value_23.length; _i23 += 1) {
        transition_in(each_blocks[_i23]);
      }

      current = true;
    },
    o: function outro(local) {
      transition_out(option.$$.fragment, local);
      each_blocks = each_blocks.filter(Boolean);

      for (var _i24 = 0; _i24 < each_blocks.length; _i24 += 1) {
        transition_out(each_blocks[_i24]);
      }

      current = false;
    },
    d: function destroy(detaching) {
      destroy_component(option, detaching);

      if (detaching) {
        detach_dev(t);
      }

      destroy_each(each_blocks, detaching);

      if (detaching) {
        detach_dev(each_1_anchor);
      }
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_default_slot_56.name,
    type: "slot",
    source: "(48:8) <Select bind:value={valueStandardHelperText} label=\"With Helper Text\">",
    ctx: ctx
  });
  return block;
} // (54:8) <HelperText>


function create_default_slot_55(ctx) {
  var t;
  var block = {
    c: function create() {
      t = text("Helper text.");
    },
    l: function claim(nodes) {
      t = claim_text(nodes, "Helper text.");
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
    id: create_default_slot_55.name,
    type: "slot",
    source: "(54:8) <HelperText>",
    ctx: ctx
  });
  return block;
} // (63:12) <Option value={fruit} selected={valueStandardEnhanced === fruit}>


function create_default_slot_54(ctx) {
  var t_value = ctx.fruit + "",
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
    p: noop,
    d: function destroy(detaching) {
      if (detaching) {
        detach_dev(t);
      }
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_default_slot_54.name,
    type: "slot",
    source: "(63:12) <Option value={fruit} selected={valueStandardEnhanced === fruit}>",
    ctx: ctx
  });
  return block;
} // (62:10) {#each fruits as fruit}


function create_each_block_22(ctx) {
  var current;
  var option = new Option({
    props: {
      value: ctx.fruit,
      selected: ctx.valueStandardEnhanced === ctx.fruit,
      $$slots: {
        default: [create_default_slot_54]
      },
      $$scope: {
        ctx: ctx
      }
    },
    $$inline: true
  });
  var block = {
    c: function create() {
      option.$$.fragment.c();
    },
    l: function claim(nodes) {
      option.$$.fragment.l(nodes);
    },
    m: function mount(target, anchor) {
      mount_component(option, target, anchor);
      current = true;
    },
    p: function update(changed, ctx) {
      var option_changes = {};
      if (changed.valueStandardEnhanced) option_changes.selected = ctx.valueStandardEnhanced === ctx.fruit;
      if (changed.$$scope) option_changes.$$scope = {
        changed: changed,
        ctx: ctx
      };
      option.$set(option_changes);
    },
    i: function intro(local) {
      if (current) return;
      transition_in(option.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(option.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      destroy_component(option, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_each_block_22.name,
    type: "each",
    source: "(62:10) {#each fruits as fruit}",
    ctx: ctx
  });
  return block;
} // (60:8) <Select enhanced bind:value={valueStandardEnhanced} label="Enhanced" class="demo-select-width" menu$class="demo-select-width">


function create_default_slot_53(ctx) {
  var t, each_1_anchor, current;
  var option = new Option({
    props: {
      value: ""
    },
    $$inline: true
  });
  var each_value_22 = ctx.fruits;
  var each_blocks = [];

  for (var i = 0; i < each_value_22.length; i += 1) {
    each_blocks[i] = create_each_block_22(get_each_context_22(ctx, each_value_22, i));
  }

  var out = function out(i) {
    return transition_out(each_blocks[i], 1, 1, function () {
      each_blocks[i] = null;
    });
  };

  var block = {
    c: function create() {
      option.$$.fragment.c();
      t = space();

      for (var _i25 = 0; _i25 < each_blocks.length; _i25 += 1) {
        each_blocks[_i25].c();
      }

      each_1_anchor = empty();
    },
    l: function claim(nodes) {
      option.$$.fragment.l(nodes);
      t = claim_space(nodes);

      for (var _i26 = 0; _i26 < each_blocks.length; _i26 += 1) {
        each_blocks[_i26].l(nodes);
      }

      each_1_anchor = empty();
    },
    m: function mount(target, anchor) {
      mount_component(option, target, anchor);
      insert_dev(target, t, anchor);

      for (var _i27 = 0; _i27 < each_blocks.length; _i27 += 1) {
        each_blocks[_i27].m(target, anchor);
      }

      insert_dev(target, each_1_anchor, anchor);
      current = true;
    },
    p: function update(changed, ctx) {
      if (changed.fruits || changed.valueStandardEnhanced) {
        each_value_22 = ctx.fruits;

        var _i28;

        for (_i28 = 0; _i28 < each_value_22.length; _i28 += 1) {
          var child_ctx = get_each_context_22(ctx, each_value_22, _i28);

          if (each_blocks[_i28]) {
            each_blocks[_i28].p(changed, child_ctx);

            transition_in(each_blocks[_i28], 1);
          } else {
            each_blocks[_i28] = create_each_block_22(child_ctx);

            each_blocks[_i28].c();

            transition_in(each_blocks[_i28], 1);

            each_blocks[_i28].m(each_1_anchor.parentNode, each_1_anchor);
          }
        }

        group_outros();

        for (_i28 = each_value_22.length; _i28 < each_blocks.length; _i28 += 1) {
          out(_i28);
        }

        check_outros();
      }
    },
    i: function intro(local) {
      if (current) return;
      transition_in(option.$$.fragment, local);

      for (var _i29 = 0; _i29 < each_value_22.length; _i29 += 1) {
        transition_in(each_blocks[_i29]);
      }

      current = true;
    },
    o: function outro(local) {
      transition_out(option.$$.fragment, local);
      each_blocks = each_blocks.filter(Boolean);

      for (var _i30 = 0; _i30 < each_blocks.length; _i30 += 1) {
        transition_out(each_blocks[_i30]);
      }

      current = false;
    },
    d: function destroy(detaching) {
      destroy_component(option, detaching);

      if (detaching) {
        detach_dev(t);
      }

      destroy_each(each_blocks, detaching);

      if (detaching) {
        detach_dev(each_1_anchor);
      }
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_default_slot_53.name,
    type: "slot",
    source: "(60:8) <Select enhanced bind:value={valueStandardEnhanced} label=\"Enhanced\" class=\"demo-select-width\" menu$class=\"demo-select-width\">",
    ctx: ctx
  });
  return block;
} // (72:28) <Icon class="material-icons">


function create_default_slot_52(ctx) {
  var t;
  var block = {
    c: function create() {
      t = text("event");
    },
    l: function claim(nodes) {
      t = claim_text(nodes, "event");
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
    id: create_default_slot_52.name,
    type: "slot",
    source: "(72:28) <Icon class=\"material-icons\">",
    ctx: ctx
  });
  return block;
} // (72:10) <span slot="icon">


function create_icon_slot_4(ctx) {
  var span, current;
  var icon = new Icon({
    props: {
      class: "material-icons",
      $$slots: {
        default: [create_default_slot_52]
      },
      $$scope: {
        ctx: ctx
      }
    },
    $$inline: true
  });
  var block = {
    c: function create() {
      span = element("span");
      icon.$$.fragment.c();
      this.h();
    },
    l: function claim(nodes) {
      span = claim_element(nodes, "SPAN", {
        slot: true,
        class: true
      }, false);
      var span_nodes = children(span);
      icon.$$.fragment.l(span_nodes);
      span_nodes.forEach(detach_dev);
      this.h();
    },
    h: function hydrate() {
      attr_dev(span, "slot", "icon");
      attr_dev(span, "class", "svelte-nitlg9");
      add_location(span, file$4, 71, 10, 2348);
    },
    m: function mount(target, anchor) {
      insert_dev(target, span, anchor);
      mount_component(icon, span, null);
      current = true;
    },
    p: function update(changed, ctx) {
      var icon_changes = {};
      if (changed.$$scope) icon_changes.$$scope = {
        changed: changed,
        ctx: ctx
      };
      icon.$set(icon_changes);
    },
    i: function intro(local) {
      if (current) return;
      transition_in(icon.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(icon.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      if (detaching) {
        detach_dev(span);
      }

      destroy_component(icon);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_icon_slot_4.name,
    type: "slot",
    source: "(72:10) <span slot=\"icon\">",
    ctx: ctx
  });
  return block;
} // (75:12) <Option value={fruit} selected={valueStandardLeadingIcon === fruit}>


function create_default_slot_51(ctx) {
  var t_value = ctx.fruit + "",
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
    p: noop,
    d: function destroy(detaching) {
      if (detaching) {
        detach_dev(t);
      }
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_default_slot_51.name,
    type: "slot",
    source: "(75:12) <Option value={fruit} selected={valueStandardLeadingIcon === fruit}>",
    ctx: ctx
  });
  return block;
} // (74:10) {#each fruits as fruit}


function create_each_block_21(ctx) {
  var current;
  var option = new Option({
    props: {
      value: ctx.fruit,
      selected: ctx.valueStandardLeadingIcon === ctx.fruit,
      $$slots: {
        default: [create_default_slot_51]
      },
      $$scope: {
        ctx: ctx
      }
    },
    $$inline: true
  });
  var block = {
    c: function create() {
      option.$$.fragment.c();
    },
    l: function claim(nodes) {
      option.$$.fragment.l(nodes);
    },
    m: function mount(target, anchor) {
      mount_component(option, target, anchor);
      current = true;
    },
    p: function update(changed, ctx) {
      var option_changes = {};
      if (changed.valueStandardLeadingIcon) option_changes.selected = ctx.valueStandardLeadingIcon === ctx.fruit;
      if (changed.$$scope) option_changes.$$scope = {
        changed: changed,
        ctx: ctx
      };
      option.$set(option_changes);
    },
    i: function intro(local) {
      if (current) return;
      transition_in(option.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(option.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      destroy_component(option, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_each_block_21.name,
    type: "each",
    source: "(74:10) {#each fruits as fruit}",
    ctx: ctx
  });
  return block;
} // (71:8) <Select withLeadingIcon bind:value={valueStandardLeadingIcon} label="Leading Icon" class="demo-select-width" menu$class="demo-select-width">


function create_default_slot_50(ctx) {
  var t0, t1, each_1_anchor, current;
  var option = new Option({
    props: {
      value: ""
    },
    $$inline: true
  });
  var each_value_21 = ctx.fruits;
  var each_blocks = [];

  for (var i = 0; i < each_value_21.length; i += 1) {
    each_blocks[i] = create_each_block_21(get_each_context_21(ctx, each_value_21, i));
  }

  var out = function out(i) {
    return transition_out(each_blocks[i], 1, 1, function () {
      each_blocks[i] = null;
    });
  };

  var block = {
    c: function create() {
      t0 = space();
      option.$$.fragment.c();
      t1 = space();

      for (var _i31 = 0; _i31 < each_blocks.length; _i31 += 1) {
        each_blocks[_i31].c();
      }

      each_1_anchor = empty();
    },
    l: function claim(nodes) {
      t0 = claim_space(nodes);
      option.$$.fragment.l(nodes);
      t1 = claim_space(nodes);

      for (var _i32 = 0; _i32 < each_blocks.length; _i32 += 1) {
        each_blocks[_i32].l(nodes);
      }

      each_1_anchor = empty();
    },
    m: function mount(target, anchor) {
      insert_dev(target, t0, anchor);
      mount_component(option, target, anchor);
      insert_dev(target, t1, anchor);

      for (var _i33 = 0; _i33 < each_blocks.length; _i33 += 1) {
        each_blocks[_i33].m(target, anchor);
      }

      insert_dev(target, each_1_anchor, anchor);
      current = true;
    },
    p: function update(changed, ctx) {
      if (changed.fruits || changed.valueStandardLeadingIcon) {
        each_value_21 = ctx.fruits;

        var _i34;

        for (_i34 = 0; _i34 < each_value_21.length; _i34 += 1) {
          var child_ctx = get_each_context_21(ctx, each_value_21, _i34);

          if (each_blocks[_i34]) {
            each_blocks[_i34].p(changed, child_ctx);

            transition_in(each_blocks[_i34], 1);
          } else {
            each_blocks[_i34] = create_each_block_21(child_ctx);

            each_blocks[_i34].c();

            transition_in(each_blocks[_i34], 1);

            each_blocks[_i34].m(each_1_anchor.parentNode, each_1_anchor);
          }
        }

        group_outros();

        for (_i34 = each_value_21.length; _i34 < each_blocks.length; _i34 += 1) {
          out(_i34);
        }

        check_outros();
      }
    },
    i: function intro(local) {
      if (current) return;
      transition_in(option.$$.fragment, local);

      for (var _i35 = 0; _i35 < each_value_21.length; _i35 += 1) {
        transition_in(each_blocks[_i35]);
      }

      current = true;
    },
    o: function outro(local) {
      transition_out(option.$$.fragment, local);
      each_blocks = each_blocks.filter(Boolean);

      for (var _i36 = 0; _i36 < each_blocks.length; _i36 += 1) {
        transition_out(each_blocks[_i36]);
      }

      current = false;
    },
    d: function destroy(detaching) {
      if (detaching) {
        detach_dev(t0);
      }

      destroy_component(option, detaching);

      if (detaching) {
        detach_dev(t1);
      }

      destroy_each(each_blocks, detaching);

      if (detaching) {
        detach_dev(each_1_anchor);
      }
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_default_slot_50.name,
    type: "slot",
    source: "(71:8) <Select withLeadingIcon bind:value={valueStandardLeadingIcon} label=\"Leading Icon\" class=\"demo-select-width\" menu$class=\"demo-select-width\">",
    ctx: ctx
  });
  return block;
} // (86:12) <Option value={fruit} selected={valueStandardInvalid === fruit}>


function create_default_slot_49(ctx) {
  var t_value = ctx.fruit + "",
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
    p: noop,
    d: function destroy(detaching) {
      if (detaching) {
        detach_dev(t);
      }
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_default_slot_49.name,
    type: "slot",
    source: "(86:12) <Option value={fruit} selected={valueStandardInvalid === fruit}>",
    ctx: ctx
  });
  return block;
} // (85:10) {#each fruits as fruit}


function create_each_block_20(ctx) {
  var current;
  var option = new Option({
    props: {
      value: ctx.fruit,
      selected: ctx.valueStandardInvalid === ctx.fruit,
      $$slots: {
        default: [create_default_slot_49]
      },
      $$scope: {
        ctx: ctx
      }
    },
    $$inline: true
  });
  var block = {
    c: function create() {
      option.$$.fragment.c();
    },
    l: function claim(nodes) {
      option.$$.fragment.l(nodes);
    },
    m: function mount(target, anchor) {
      mount_component(option, target, anchor);
      current = true;
    },
    p: function update(changed, ctx) {
      var option_changes = {};
      if (changed.valueStandardInvalid) option_changes.selected = ctx.valueStandardInvalid === ctx.fruit;
      if (changed.$$scope) option_changes.$$scope = {
        changed: changed,
        ctx: ctx
      };
      option.$set(option_changes);
    },
    i: function intro(local) {
      if (current) return;
      transition_in(option.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(option.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      destroy_component(option, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_each_block_20.name,
    type: "each",
    source: "(85:10) {#each fruits as fruit}",
    ctx: ctx
  });
  return block;
} // (83:8) <Select invalid bind:value={valueStandardInvalid} label="Invalid">


function create_default_slot_48(ctx) {
  var t, each_1_anchor, current;
  var option = new Option({
    props: {
      value: ""
    },
    $$inline: true
  });
  var each_value_20 = ctx.fruits;
  var each_blocks = [];

  for (var i = 0; i < each_value_20.length; i += 1) {
    each_blocks[i] = create_each_block_20(get_each_context_20(ctx, each_value_20, i));
  }

  var out = function out(i) {
    return transition_out(each_blocks[i], 1, 1, function () {
      each_blocks[i] = null;
    });
  };

  var block = {
    c: function create() {
      option.$$.fragment.c();
      t = space();

      for (var _i37 = 0; _i37 < each_blocks.length; _i37 += 1) {
        each_blocks[_i37].c();
      }

      each_1_anchor = empty();
    },
    l: function claim(nodes) {
      option.$$.fragment.l(nodes);
      t = claim_space(nodes);

      for (var _i38 = 0; _i38 < each_blocks.length; _i38 += 1) {
        each_blocks[_i38].l(nodes);
      }

      each_1_anchor = empty();
    },
    m: function mount(target, anchor) {
      mount_component(option, target, anchor);
      insert_dev(target, t, anchor);

      for (var _i39 = 0; _i39 < each_blocks.length; _i39 += 1) {
        each_blocks[_i39].m(target, anchor);
      }

      insert_dev(target, each_1_anchor, anchor);
      current = true;
    },
    p: function update(changed, ctx) {
      if (changed.fruits || changed.valueStandardInvalid) {
        each_value_20 = ctx.fruits;

        var _i40;

        for (_i40 = 0; _i40 < each_value_20.length; _i40 += 1) {
          var child_ctx = get_each_context_20(ctx, each_value_20, _i40);

          if (each_blocks[_i40]) {
            each_blocks[_i40].p(changed, child_ctx);

            transition_in(each_blocks[_i40], 1);
          } else {
            each_blocks[_i40] = create_each_block_20(child_ctx);

            each_blocks[_i40].c();

            transition_in(each_blocks[_i40], 1);

            each_blocks[_i40].m(each_1_anchor.parentNode, each_1_anchor);
          }
        }

        group_outros();

        for (_i40 = each_value_20.length; _i40 < each_blocks.length; _i40 += 1) {
          out(_i40);
        }

        check_outros();
      }
    },
    i: function intro(local) {
      if (current) return;
      transition_in(option.$$.fragment, local);

      for (var _i41 = 0; _i41 < each_value_20.length; _i41 += 1) {
        transition_in(each_blocks[_i41]);
      }

      current = true;
    },
    o: function outro(local) {
      transition_out(option.$$.fragment, local);
      each_blocks = each_blocks.filter(Boolean);

      for (var _i42 = 0; _i42 < each_blocks.length; _i42 += 1) {
        transition_out(each_blocks[_i42]);
      }

      current = false;
    },
    d: function destroy(detaching) {
      destroy_component(option, detaching);

      if (detaching) {
        detach_dev(t);
      }

      destroy_each(each_blocks, detaching);

      if (detaching) {
        detach_dev(each_1_anchor);
      }
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_default_slot_48.name,
    type: "slot",
    source: "(83:8) <Select invalid bind:value={valueStandardInvalid} label=\"Invalid\">",
    ctx: ctx
  });
  return block;
} // (103:12) <Option value={fruit} selected={valueFilled === fruit}>


function create_default_slot_47(ctx) {
  var t_value = ctx.fruit + "",
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
    p: noop,
    d: function destroy(detaching) {
      if (detaching) {
        detach_dev(t);
      }
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_default_slot_47.name,
    type: "slot",
    source: "(103:12) <Option value={fruit} selected={valueFilled === fruit}>",
    ctx: ctx
  });
  return block;
} // (102:10) {#each fruits as fruit}


function create_each_block_19(ctx) {
  var current;
  var option = new Option({
    props: {
      value: ctx.fruit,
      selected: ctx.valueFilled === ctx.fruit,
      $$slots: {
        default: [create_default_slot_47]
      },
      $$scope: {
        ctx: ctx
      }
    },
    $$inline: true
  });
  var block = {
    c: function create() {
      option.$$.fragment.c();
    },
    l: function claim(nodes) {
      option.$$.fragment.l(nodes);
    },
    m: function mount(target, anchor) {
      mount_component(option, target, anchor);
      current = true;
    },
    p: function update(changed, ctx) {
      var option_changes = {};
      if (changed.valueFilled) option_changes.selected = ctx.valueFilled === ctx.fruit;
      if (changed.$$scope) option_changes.$$scope = {
        changed: changed,
        ctx: ctx
      };
      option.$set(option_changes);
    },
    i: function intro(local) {
      if (current) return;
      transition_in(option.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(option.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      destroy_component(option, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_each_block_19.name,
    type: "each",
    source: "(102:10) {#each fruits as fruit}",
    ctx: ctx
  });
  return block;
} // (100:8) <Select variant="filled" bind:value={valueFilled} label="Fruit">


function create_default_slot_46(ctx) {
  var t, each_1_anchor, current;
  var option = new Option({
    props: {
      value: ""
    },
    $$inline: true
  });
  var each_value_19 = ctx.fruits;
  var each_blocks = [];

  for (var i = 0; i < each_value_19.length; i += 1) {
    each_blocks[i] = create_each_block_19(get_each_context_19(ctx, each_value_19, i));
  }

  var out = function out(i) {
    return transition_out(each_blocks[i], 1, 1, function () {
      each_blocks[i] = null;
    });
  };

  var block = {
    c: function create() {
      option.$$.fragment.c();
      t = space();

      for (var _i43 = 0; _i43 < each_blocks.length; _i43 += 1) {
        each_blocks[_i43].c();
      }

      each_1_anchor = empty();
    },
    l: function claim(nodes) {
      option.$$.fragment.l(nodes);
      t = claim_space(nodes);

      for (var _i44 = 0; _i44 < each_blocks.length; _i44 += 1) {
        each_blocks[_i44].l(nodes);
      }

      each_1_anchor = empty();
    },
    m: function mount(target, anchor) {
      mount_component(option, target, anchor);
      insert_dev(target, t, anchor);

      for (var _i45 = 0; _i45 < each_blocks.length; _i45 += 1) {
        each_blocks[_i45].m(target, anchor);
      }

      insert_dev(target, each_1_anchor, anchor);
      current = true;
    },
    p: function update(changed, ctx) {
      if (changed.fruits || changed.valueFilled) {
        each_value_19 = ctx.fruits;

        var _i46;

        for (_i46 = 0; _i46 < each_value_19.length; _i46 += 1) {
          var child_ctx = get_each_context_19(ctx, each_value_19, _i46);

          if (each_blocks[_i46]) {
            each_blocks[_i46].p(changed, child_ctx);

            transition_in(each_blocks[_i46], 1);
          } else {
            each_blocks[_i46] = create_each_block_19(child_ctx);

            each_blocks[_i46].c();

            transition_in(each_blocks[_i46], 1);

            each_blocks[_i46].m(each_1_anchor.parentNode, each_1_anchor);
          }
        }

        group_outros();

        for (_i46 = each_value_19.length; _i46 < each_blocks.length; _i46 += 1) {
          out(_i46);
        }

        check_outros();
      }
    },
    i: function intro(local) {
      if (current) return;
      transition_in(option.$$.fragment, local);

      for (var _i47 = 0; _i47 < each_value_19.length; _i47 += 1) {
        transition_in(each_blocks[_i47]);
      }

      current = true;
    },
    o: function outro(local) {
      transition_out(option.$$.fragment, local);
      each_blocks = each_blocks.filter(Boolean);

      for (var _i48 = 0; _i48 < each_blocks.length; _i48 += 1) {
        transition_out(each_blocks[_i48]);
      }

      current = false;
    },
    d: function destroy(detaching) {
      destroy_component(option, detaching);

      if (detaching) {
        detach_dev(t);
      }

      destroy_each(each_blocks, detaching);

      if (detaching) {
        detach_dev(each_1_anchor);
      }
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_default_slot_46.name,
    type: "slot",
    source: "(100:8) <Select variant=\"filled\" bind:value={valueFilled} label=\"Fruit\">",
    ctx: ctx
  });
  return block;
} // (114:12) <Option value={fruit} selected={valueFilledHelperText === fruit}>


function create_default_slot_45(ctx) {
  var t_value = ctx.fruit + "",
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
    p: noop,
    d: function destroy(detaching) {
      if (detaching) {
        detach_dev(t);
      }
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_default_slot_45.name,
    type: "slot",
    source: "(114:12) <Option value={fruit} selected={valueFilledHelperText === fruit}>",
    ctx: ctx
  });
  return block;
} // (113:10) {#each fruits as fruit}


function create_each_block_18(ctx) {
  var current;
  var option = new Option({
    props: {
      value: ctx.fruit,
      selected: ctx.valueFilledHelperText === ctx.fruit,
      $$slots: {
        default: [create_default_slot_45]
      },
      $$scope: {
        ctx: ctx
      }
    },
    $$inline: true
  });
  var block = {
    c: function create() {
      option.$$.fragment.c();
    },
    l: function claim(nodes) {
      option.$$.fragment.l(nodes);
    },
    m: function mount(target, anchor) {
      mount_component(option, target, anchor);
      current = true;
    },
    p: function update(changed, ctx) {
      var option_changes = {};
      if (changed.valueFilledHelperText) option_changes.selected = ctx.valueFilledHelperText === ctx.fruit;
      if (changed.$$scope) option_changes.$$scope = {
        changed: changed,
        ctx: ctx
      };
      option.$set(option_changes);
    },
    i: function intro(local) {
      if (current) return;
      transition_in(option.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(option.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      destroy_component(option, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_each_block_18.name,
    type: "each",
    source: "(113:10) {#each fruits as fruit}",
    ctx: ctx
  });
  return block;
} // (111:8) <Select variant="filled" bind:value={valueFilledHelperText} label="With Helper Text">


function create_default_slot_44(ctx) {
  var t, each_1_anchor, current;
  var option = new Option({
    props: {
      value: ""
    },
    $$inline: true
  });
  var each_value_18 = ctx.fruits;
  var each_blocks = [];

  for (var i = 0; i < each_value_18.length; i += 1) {
    each_blocks[i] = create_each_block_18(get_each_context_18(ctx, each_value_18, i));
  }

  var out = function out(i) {
    return transition_out(each_blocks[i], 1, 1, function () {
      each_blocks[i] = null;
    });
  };

  var block = {
    c: function create() {
      option.$$.fragment.c();
      t = space();

      for (var _i49 = 0; _i49 < each_blocks.length; _i49 += 1) {
        each_blocks[_i49].c();
      }

      each_1_anchor = empty();
    },
    l: function claim(nodes) {
      option.$$.fragment.l(nodes);
      t = claim_space(nodes);

      for (var _i50 = 0; _i50 < each_blocks.length; _i50 += 1) {
        each_blocks[_i50].l(nodes);
      }

      each_1_anchor = empty();
    },
    m: function mount(target, anchor) {
      mount_component(option, target, anchor);
      insert_dev(target, t, anchor);

      for (var _i51 = 0; _i51 < each_blocks.length; _i51 += 1) {
        each_blocks[_i51].m(target, anchor);
      }

      insert_dev(target, each_1_anchor, anchor);
      current = true;
    },
    p: function update(changed, ctx) {
      if (changed.fruits || changed.valueFilledHelperText) {
        each_value_18 = ctx.fruits;

        var _i52;

        for (_i52 = 0; _i52 < each_value_18.length; _i52 += 1) {
          var child_ctx = get_each_context_18(ctx, each_value_18, _i52);

          if (each_blocks[_i52]) {
            each_blocks[_i52].p(changed, child_ctx);

            transition_in(each_blocks[_i52], 1);
          } else {
            each_blocks[_i52] = create_each_block_18(child_ctx);

            each_blocks[_i52].c();

            transition_in(each_blocks[_i52], 1);

            each_blocks[_i52].m(each_1_anchor.parentNode, each_1_anchor);
          }
        }

        group_outros();

        for (_i52 = each_value_18.length; _i52 < each_blocks.length; _i52 += 1) {
          out(_i52);
        }

        check_outros();
      }
    },
    i: function intro(local) {
      if (current) return;
      transition_in(option.$$.fragment, local);

      for (var _i53 = 0; _i53 < each_value_18.length; _i53 += 1) {
        transition_in(each_blocks[_i53]);
      }

      current = true;
    },
    o: function outro(local) {
      transition_out(option.$$.fragment, local);
      each_blocks = each_blocks.filter(Boolean);

      for (var _i54 = 0; _i54 < each_blocks.length; _i54 += 1) {
        transition_out(each_blocks[_i54]);
      }

      current = false;
    },
    d: function destroy(detaching) {
      destroy_component(option, detaching);

      if (detaching) {
        detach_dev(t);
      }

      destroy_each(each_blocks, detaching);

      if (detaching) {
        detach_dev(each_1_anchor);
      }
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_default_slot_44.name,
    type: "slot",
    source: "(111:8) <Select variant=\"filled\" bind:value={valueFilledHelperText} label=\"With Helper Text\">",
    ctx: ctx
  });
  return block;
} // (117:8) <HelperText>


function create_default_slot_43(ctx) {
  var t;
  var block = {
    c: function create() {
      t = text("Helper text.");
    },
    l: function claim(nodes) {
      t = claim_text(nodes, "Helper text.");
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
    id: create_default_slot_43.name,
    type: "slot",
    source: "(117:8) <HelperText>",
    ctx: ctx
  });
  return block;
} // (126:12) <Option value={fruit} selected={valueFilledEnhanced === fruit}>


function create_default_slot_42(ctx) {
  var t_value = ctx.fruit + "",
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
    p: noop,
    d: function destroy(detaching) {
      if (detaching) {
        detach_dev(t);
      }
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_default_slot_42.name,
    type: "slot",
    source: "(126:12) <Option value={fruit} selected={valueFilledEnhanced === fruit}>",
    ctx: ctx
  });
  return block;
} // (125:10) {#each fruits as fruit}


function create_each_block_17(ctx) {
  var current;
  var option = new Option({
    props: {
      value: ctx.fruit,
      selected: ctx.valueFilledEnhanced === ctx.fruit,
      $$slots: {
        default: [create_default_slot_42]
      },
      $$scope: {
        ctx: ctx
      }
    },
    $$inline: true
  });
  var block = {
    c: function create() {
      option.$$.fragment.c();
    },
    l: function claim(nodes) {
      option.$$.fragment.l(nodes);
    },
    m: function mount(target, anchor) {
      mount_component(option, target, anchor);
      current = true;
    },
    p: function update(changed, ctx) {
      var option_changes = {};
      if (changed.valueFilledEnhanced) option_changes.selected = ctx.valueFilledEnhanced === ctx.fruit;
      if (changed.$$scope) option_changes.$$scope = {
        changed: changed,
        ctx: ctx
      };
      option.$set(option_changes);
    },
    i: function intro(local) {
      if (current) return;
      transition_in(option.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(option.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      destroy_component(option, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_each_block_17.name,
    type: "each",
    source: "(125:10) {#each fruits as fruit}",
    ctx: ctx
  });
  return block;
} // (123:8) <Select variant="filled" enhanced bind:value={valueFilledEnhanced} label="Enhanced" class="demo-select-width" menu$class="demo-select-width">


function create_default_slot_41(ctx) {
  var t, each_1_anchor, current;
  var option = new Option({
    props: {
      value: ""
    },
    $$inline: true
  });
  var each_value_17 = ctx.fruits;
  var each_blocks = [];

  for (var i = 0; i < each_value_17.length; i += 1) {
    each_blocks[i] = create_each_block_17(get_each_context_17(ctx, each_value_17, i));
  }

  var out = function out(i) {
    return transition_out(each_blocks[i], 1, 1, function () {
      each_blocks[i] = null;
    });
  };

  var block = {
    c: function create() {
      option.$$.fragment.c();
      t = space();

      for (var _i55 = 0; _i55 < each_blocks.length; _i55 += 1) {
        each_blocks[_i55].c();
      }

      each_1_anchor = empty();
    },
    l: function claim(nodes) {
      option.$$.fragment.l(nodes);
      t = claim_space(nodes);

      for (var _i56 = 0; _i56 < each_blocks.length; _i56 += 1) {
        each_blocks[_i56].l(nodes);
      }

      each_1_anchor = empty();
    },
    m: function mount(target, anchor) {
      mount_component(option, target, anchor);
      insert_dev(target, t, anchor);

      for (var _i57 = 0; _i57 < each_blocks.length; _i57 += 1) {
        each_blocks[_i57].m(target, anchor);
      }

      insert_dev(target, each_1_anchor, anchor);
      current = true;
    },
    p: function update(changed, ctx) {
      if (changed.fruits || changed.valueFilledEnhanced) {
        each_value_17 = ctx.fruits;

        var _i58;

        for (_i58 = 0; _i58 < each_value_17.length; _i58 += 1) {
          var child_ctx = get_each_context_17(ctx, each_value_17, _i58);

          if (each_blocks[_i58]) {
            each_blocks[_i58].p(changed, child_ctx);

            transition_in(each_blocks[_i58], 1);
          } else {
            each_blocks[_i58] = create_each_block_17(child_ctx);

            each_blocks[_i58].c();

            transition_in(each_blocks[_i58], 1);

            each_blocks[_i58].m(each_1_anchor.parentNode, each_1_anchor);
          }
        }

        group_outros();

        for (_i58 = each_value_17.length; _i58 < each_blocks.length; _i58 += 1) {
          out(_i58);
        }

        check_outros();
      }
    },
    i: function intro(local) {
      if (current) return;
      transition_in(option.$$.fragment, local);

      for (var _i59 = 0; _i59 < each_value_17.length; _i59 += 1) {
        transition_in(each_blocks[_i59]);
      }

      current = true;
    },
    o: function outro(local) {
      transition_out(option.$$.fragment, local);
      each_blocks = each_blocks.filter(Boolean);

      for (var _i60 = 0; _i60 < each_blocks.length; _i60 += 1) {
        transition_out(each_blocks[_i60]);
      }

      current = false;
    },
    d: function destroy(detaching) {
      destroy_component(option, detaching);

      if (detaching) {
        detach_dev(t);
      }

      destroy_each(each_blocks, detaching);

      if (detaching) {
        detach_dev(each_1_anchor);
      }
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_default_slot_41.name,
    type: "slot",
    source: "(123:8) <Select variant=\"filled\" enhanced bind:value={valueFilledEnhanced} label=\"Enhanced\" class=\"demo-select-width\" menu$class=\"demo-select-width\">",
    ctx: ctx
  });
  return block;
} // (135:28) <Icon class="material-icons">


function create_default_slot_40(ctx) {
  var t;
  var block = {
    c: function create() {
      t = text("event");
    },
    l: function claim(nodes) {
      t = claim_text(nodes, "event");
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
    id: create_default_slot_40.name,
    type: "slot",
    source: "(135:28) <Icon class=\"material-icons\">",
    ctx: ctx
  });
  return block;
} // (135:10) <span slot="icon">


function create_icon_slot_3(ctx) {
  var span, current;
  var icon = new Icon({
    props: {
      class: "material-icons",
      $$slots: {
        default: [create_default_slot_40]
      },
      $$scope: {
        ctx: ctx
      }
    },
    $$inline: true
  });
  var block = {
    c: function create() {
      span = element("span");
      icon.$$.fragment.c();
      this.h();
    },
    l: function claim(nodes) {
      span = claim_element(nodes, "SPAN", {
        slot: true,
        class: true
      }, false);
      var span_nodes = children(span);
      icon.$$.fragment.l(span_nodes);
      span_nodes.forEach(detach_dev);
      this.h();
    },
    h: function hydrate() {
      attr_dev(span, "slot", "icon");
      attr_dev(span, "class", "svelte-nitlg9");
      add_location(span, file$4, 134, 10, 4568);
    },
    m: function mount(target, anchor) {
      insert_dev(target, span, anchor);
      mount_component(icon, span, null);
      current = true;
    },
    p: function update(changed, ctx) {
      var icon_changes = {};
      if (changed.$$scope) icon_changes.$$scope = {
        changed: changed,
        ctx: ctx
      };
      icon.$set(icon_changes);
    },
    i: function intro(local) {
      if (current) return;
      transition_in(icon.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(icon.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      if (detaching) {
        detach_dev(span);
      }

      destroy_component(icon);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_icon_slot_3.name,
    type: "slot",
    source: "(135:10) <span slot=\"icon\">",
    ctx: ctx
  });
  return block;
} // (138:12) <Option value={fruit} selected={valueFilledLeadingIcon === fruit}>


function create_default_slot_39(ctx) {
  var t_value = ctx.fruit + "",
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
    p: noop,
    d: function destroy(detaching) {
      if (detaching) {
        detach_dev(t);
      }
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_default_slot_39.name,
    type: "slot",
    source: "(138:12) <Option value={fruit} selected={valueFilledLeadingIcon === fruit}>",
    ctx: ctx
  });
  return block;
} // (137:10) {#each fruits as fruit}


function create_each_block_16(ctx) {
  var current;
  var option = new Option({
    props: {
      value: ctx.fruit,
      selected: ctx.valueFilledLeadingIcon === ctx.fruit,
      $$slots: {
        default: [create_default_slot_39]
      },
      $$scope: {
        ctx: ctx
      }
    },
    $$inline: true
  });
  var block = {
    c: function create() {
      option.$$.fragment.c();
    },
    l: function claim(nodes) {
      option.$$.fragment.l(nodes);
    },
    m: function mount(target, anchor) {
      mount_component(option, target, anchor);
      current = true;
    },
    p: function update(changed, ctx) {
      var option_changes = {};
      if (changed.valueFilledLeadingIcon) option_changes.selected = ctx.valueFilledLeadingIcon === ctx.fruit;
      if (changed.$$scope) option_changes.$$scope = {
        changed: changed,
        ctx: ctx
      };
      option.$set(option_changes);
    },
    i: function intro(local) {
      if (current) return;
      transition_in(option.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(option.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      destroy_component(option, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_each_block_16.name,
    type: "each",
    source: "(137:10) {#each fruits as fruit}",
    ctx: ctx
  });
  return block;
} // (134:8) <Select variant="filled" withLeadingIcon bind:value={valueFilledLeadingIcon} label="Leading Icon" class="demo-select-width" menu$class="demo-select-width">


function create_default_slot_38(ctx) {
  var t0, t1, each_1_anchor, current;
  var option = new Option({
    props: {
      value: ""
    },
    $$inline: true
  });
  var each_value_16 = ctx.fruits;
  var each_blocks = [];

  for (var i = 0; i < each_value_16.length; i += 1) {
    each_blocks[i] = create_each_block_16(get_each_context_16(ctx, each_value_16, i));
  }

  var out = function out(i) {
    return transition_out(each_blocks[i], 1, 1, function () {
      each_blocks[i] = null;
    });
  };

  var block = {
    c: function create() {
      t0 = space();
      option.$$.fragment.c();
      t1 = space();

      for (var _i61 = 0; _i61 < each_blocks.length; _i61 += 1) {
        each_blocks[_i61].c();
      }

      each_1_anchor = empty();
    },
    l: function claim(nodes) {
      t0 = claim_space(nodes);
      option.$$.fragment.l(nodes);
      t1 = claim_space(nodes);

      for (var _i62 = 0; _i62 < each_blocks.length; _i62 += 1) {
        each_blocks[_i62].l(nodes);
      }

      each_1_anchor = empty();
    },
    m: function mount(target, anchor) {
      insert_dev(target, t0, anchor);
      mount_component(option, target, anchor);
      insert_dev(target, t1, anchor);

      for (var _i63 = 0; _i63 < each_blocks.length; _i63 += 1) {
        each_blocks[_i63].m(target, anchor);
      }

      insert_dev(target, each_1_anchor, anchor);
      current = true;
    },
    p: function update(changed, ctx) {
      if (changed.fruits || changed.valueFilledLeadingIcon) {
        each_value_16 = ctx.fruits;

        var _i64;

        for (_i64 = 0; _i64 < each_value_16.length; _i64 += 1) {
          var child_ctx = get_each_context_16(ctx, each_value_16, _i64);

          if (each_blocks[_i64]) {
            each_blocks[_i64].p(changed, child_ctx);

            transition_in(each_blocks[_i64], 1);
          } else {
            each_blocks[_i64] = create_each_block_16(child_ctx);

            each_blocks[_i64].c();

            transition_in(each_blocks[_i64], 1);

            each_blocks[_i64].m(each_1_anchor.parentNode, each_1_anchor);
          }
        }

        group_outros();

        for (_i64 = each_value_16.length; _i64 < each_blocks.length; _i64 += 1) {
          out(_i64);
        }

        check_outros();
      }
    },
    i: function intro(local) {
      if (current) return;
      transition_in(option.$$.fragment, local);

      for (var _i65 = 0; _i65 < each_value_16.length; _i65 += 1) {
        transition_in(each_blocks[_i65]);
      }

      current = true;
    },
    o: function outro(local) {
      transition_out(option.$$.fragment, local);
      each_blocks = each_blocks.filter(Boolean);

      for (var _i66 = 0; _i66 < each_blocks.length; _i66 += 1) {
        transition_out(each_blocks[_i66]);
      }

      current = false;
    },
    d: function destroy(detaching) {
      if (detaching) {
        detach_dev(t0);
      }

      destroy_component(option, detaching);

      if (detaching) {
        detach_dev(t1);
      }

      destroy_each(each_blocks, detaching);

      if (detaching) {
        detach_dev(each_1_anchor);
      }
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_default_slot_38.name,
    type: "slot",
    source: "(134:8) <Select variant=\"filled\" withLeadingIcon bind:value={valueFilledLeadingIcon} label=\"Leading Icon\" class=\"demo-select-width\" menu$class=\"demo-select-width\">",
    ctx: ctx
  });
  return block;
} // (149:12) <Option value={fruit} selected={valueFilledInvalid === fruit}>


function create_default_slot_37(ctx) {
  var t_value = ctx.fruit + "",
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
    p: noop,
    d: function destroy(detaching) {
      if (detaching) {
        detach_dev(t);
      }
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_default_slot_37.name,
    type: "slot",
    source: "(149:12) <Option value={fruit} selected={valueFilledInvalid === fruit}>",
    ctx: ctx
  });
  return block;
} // (148:10) {#each fruits as fruit}


function create_each_block_15(ctx) {
  var current;
  var option = new Option({
    props: {
      value: ctx.fruit,
      selected: ctx.valueFilledInvalid === ctx.fruit,
      $$slots: {
        default: [create_default_slot_37]
      },
      $$scope: {
        ctx: ctx
      }
    },
    $$inline: true
  });
  var block = {
    c: function create() {
      option.$$.fragment.c();
    },
    l: function claim(nodes) {
      option.$$.fragment.l(nodes);
    },
    m: function mount(target, anchor) {
      mount_component(option, target, anchor);
      current = true;
    },
    p: function update(changed, ctx) {
      var option_changes = {};
      if (changed.valueFilledInvalid) option_changes.selected = ctx.valueFilledInvalid === ctx.fruit;
      if (changed.$$scope) option_changes.$$scope = {
        changed: changed,
        ctx: ctx
      };
      option.$set(option_changes);
    },
    i: function intro(local) {
      if (current) return;
      transition_in(option.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(option.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      destroy_component(option, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_each_block_15.name,
    type: "each",
    source: "(148:10) {#each fruits as fruit}",
    ctx: ctx
  });
  return block;
} // (146:8) <Select variant="filled" invalid bind:value={valueFilledInvalid} label="Invalid">


function create_default_slot_36(ctx) {
  var t, each_1_anchor, current;
  var option = new Option({
    props: {
      value: ""
    },
    $$inline: true
  });
  var each_value_15 = ctx.fruits;
  var each_blocks = [];

  for (var i = 0; i < each_value_15.length; i += 1) {
    each_blocks[i] = create_each_block_15(get_each_context_15(ctx, each_value_15, i));
  }

  var out = function out(i) {
    return transition_out(each_blocks[i], 1, 1, function () {
      each_blocks[i] = null;
    });
  };

  var block = {
    c: function create() {
      option.$$.fragment.c();
      t = space();

      for (var _i67 = 0; _i67 < each_blocks.length; _i67 += 1) {
        each_blocks[_i67].c();
      }

      each_1_anchor = empty();
    },
    l: function claim(nodes) {
      option.$$.fragment.l(nodes);
      t = claim_space(nodes);

      for (var _i68 = 0; _i68 < each_blocks.length; _i68 += 1) {
        each_blocks[_i68].l(nodes);
      }

      each_1_anchor = empty();
    },
    m: function mount(target, anchor) {
      mount_component(option, target, anchor);
      insert_dev(target, t, anchor);

      for (var _i69 = 0; _i69 < each_blocks.length; _i69 += 1) {
        each_blocks[_i69].m(target, anchor);
      }

      insert_dev(target, each_1_anchor, anchor);
      current = true;
    },
    p: function update(changed, ctx) {
      if (changed.fruits || changed.valueFilledInvalid) {
        each_value_15 = ctx.fruits;

        var _i70;

        for (_i70 = 0; _i70 < each_value_15.length; _i70 += 1) {
          var child_ctx = get_each_context_15(ctx, each_value_15, _i70);

          if (each_blocks[_i70]) {
            each_blocks[_i70].p(changed, child_ctx);

            transition_in(each_blocks[_i70], 1);
          } else {
            each_blocks[_i70] = create_each_block_15(child_ctx);

            each_blocks[_i70].c();

            transition_in(each_blocks[_i70], 1);

            each_blocks[_i70].m(each_1_anchor.parentNode, each_1_anchor);
          }
        }

        group_outros();

        for (_i70 = each_value_15.length; _i70 < each_blocks.length; _i70 += 1) {
          out(_i70);
        }

        check_outros();
      }
    },
    i: function intro(local) {
      if (current) return;
      transition_in(option.$$.fragment, local);

      for (var _i71 = 0; _i71 < each_value_15.length; _i71 += 1) {
        transition_in(each_blocks[_i71]);
      }

      current = true;
    },
    o: function outro(local) {
      transition_out(option.$$.fragment, local);
      each_blocks = each_blocks.filter(Boolean);

      for (var _i72 = 0; _i72 < each_blocks.length; _i72 += 1) {
        transition_out(each_blocks[_i72]);
      }

      current = false;
    },
    d: function destroy(detaching) {
      destroy_component(option, detaching);

      if (detaching) {
        detach_dev(t);
      }

      destroy_each(each_blocks, detaching);

      if (detaching) {
        detach_dev(each_1_anchor);
      }
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_default_slot_36.name,
    type: "slot",
    source: "(146:8) <Select variant=\"filled\" invalid bind:value={valueFilledInvalid} label=\"Invalid\">",
    ctx: ctx
  });
  return block;
} // (166:12) <Option value={fruit} selected={valueOutlined === fruit}>


function create_default_slot_35(ctx) {
  var t_value = ctx.fruit + "",
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
    p: noop,
    d: function destroy(detaching) {
      if (detaching) {
        detach_dev(t);
      }
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_default_slot_35.name,
    type: "slot",
    source: "(166:12) <Option value={fruit} selected={valueOutlined === fruit}>",
    ctx: ctx
  });
  return block;
} // (165:10) {#each fruits as fruit}


function create_each_block_14(ctx) {
  var current;
  var option = new Option({
    props: {
      value: ctx.fruit,
      selected: ctx.valueOutlined === ctx.fruit,
      $$slots: {
        default: [create_default_slot_35]
      },
      $$scope: {
        ctx: ctx
      }
    },
    $$inline: true
  });
  var block = {
    c: function create() {
      option.$$.fragment.c();
    },
    l: function claim(nodes) {
      option.$$.fragment.l(nodes);
    },
    m: function mount(target, anchor) {
      mount_component(option, target, anchor);
      current = true;
    },
    p: function update(changed, ctx) {
      var option_changes = {};
      if (changed.valueOutlined) option_changes.selected = ctx.valueOutlined === ctx.fruit;
      if (changed.$$scope) option_changes.$$scope = {
        changed: changed,
        ctx: ctx
      };
      option.$set(option_changes);
    },
    i: function intro(local) {
      if (current) return;
      transition_in(option.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(option.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      destroy_component(option, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_each_block_14.name,
    type: "each",
    source: "(165:10) {#each fruits as fruit}",
    ctx: ctx
  });
  return block;
} // (163:8) <Select variant="outlined" bind:value={valueOutlined} label="Fruit">


function create_default_slot_34(ctx) {
  var t, each_1_anchor, current;
  var option = new Option({
    props: {
      value: ""
    },
    $$inline: true
  });
  var each_value_14 = ctx.fruits;
  var each_blocks = [];

  for (var i = 0; i < each_value_14.length; i += 1) {
    each_blocks[i] = create_each_block_14(get_each_context_14(ctx, each_value_14, i));
  }

  var out = function out(i) {
    return transition_out(each_blocks[i], 1, 1, function () {
      each_blocks[i] = null;
    });
  };

  var block = {
    c: function create() {
      option.$$.fragment.c();
      t = space();

      for (var _i73 = 0; _i73 < each_blocks.length; _i73 += 1) {
        each_blocks[_i73].c();
      }

      each_1_anchor = empty();
    },
    l: function claim(nodes) {
      option.$$.fragment.l(nodes);
      t = claim_space(nodes);

      for (var _i74 = 0; _i74 < each_blocks.length; _i74 += 1) {
        each_blocks[_i74].l(nodes);
      }

      each_1_anchor = empty();
    },
    m: function mount(target, anchor) {
      mount_component(option, target, anchor);
      insert_dev(target, t, anchor);

      for (var _i75 = 0; _i75 < each_blocks.length; _i75 += 1) {
        each_blocks[_i75].m(target, anchor);
      }

      insert_dev(target, each_1_anchor, anchor);
      current = true;
    },
    p: function update(changed, ctx) {
      if (changed.fruits || changed.valueOutlined) {
        each_value_14 = ctx.fruits;

        var _i76;

        for (_i76 = 0; _i76 < each_value_14.length; _i76 += 1) {
          var child_ctx = get_each_context_14(ctx, each_value_14, _i76);

          if (each_blocks[_i76]) {
            each_blocks[_i76].p(changed, child_ctx);

            transition_in(each_blocks[_i76], 1);
          } else {
            each_blocks[_i76] = create_each_block_14(child_ctx);

            each_blocks[_i76].c();

            transition_in(each_blocks[_i76], 1);

            each_blocks[_i76].m(each_1_anchor.parentNode, each_1_anchor);
          }
        }

        group_outros();

        for (_i76 = each_value_14.length; _i76 < each_blocks.length; _i76 += 1) {
          out(_i76);
        }

        check_outros();
      }
    },
    i: function intro(local) {
      if (current) return;
      transition_in(option.$$.fragment, local);

      for (var _i77 = 0; _i77 < each_value_14.length; _i77 += 1) {
        transition_in(each_blocks[_i77]);
      }

      current = true;
    },
    o: function outro(local) {
      transition_out(option.$$.fragment, local);
      each_blocks = each_blocks.filter(Boolean);

      for (var _i78 = 0; _i78 < each_blocks.length; _i78 += 1) {
        transition_out(each_blocks[_i78]);
      }

      current = false;
    },
    d: function destroy(detaching) {
      destroy_component(option, detaching);

      if (detaching) {
        detach_dev(t);
      }

      destroy_each(each_blocks, detaching);

      if (detaching) {
        detach_dev(each_1_anchor);
      }
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_default_slot_34.name,
    type: "slot",
    source: "(163:8) <Select variant=\"outlined\" bind:value={valueOutlined} label=\"Fruit\">",
    ctx: ctx
  });
  return block;
} // (177:12) <Option value={fruit} selected={valueOutlinedHelperText === fruit}>


function create_default_slot_33(ctx) {
  var t_value = ctx.fruit + "",
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
    p: noop,
    d: function destroy(detaching) {
      if (detaching) {
        detach_dev(t);
      }
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_default_slot_33.name,
    type: "slot",
    source: "(177:12) <Option value={fruit} selected={valueOutlinedHelperText === fruit}>",
    ctx: ctx
  });
  return block;
} // (176:10) {#each fruits as fruit}


function create_each_block_13(ctx) {
  var current;
  var option = new Option({
    props: {
      value: ctx.fruit,
      selected: ctx.valueOutlinedHelperText === ctx.fruit,
      $$slots: {
        default: [create_default_slot_33]
      },
      $$scope: {
        ctx: ctx
      }
    },
    $$inline: true
  });
  var block = {
    c: function create() {
      option.$$.fragment.c();
    },
    l: function claim(nodes) {
      option.$$.fragment.l(nodes);
    },
    m: function mount(target, anchor) {
      mount_component(option, target, anchor);
      current = true;
    },
    p: function update(changed, ctx) {
      var option_changes = {};
      if (changed.valueOutlinedHelperText) option_changes.selected = ctx.valueOutlinedHelperText === ctx.fruit;
      if (changed.$$scope) option_changes.$$scope = {
        changed: changed,
        ctx: ctx
      };
      option.$set(option_changes);
    },
    i: function intro(local) {
      if (current) return;
      transition_in(option.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(option.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      destroy_component(option, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_each_block_13.name,
    type: "each",
    source: "(176:10) {#each fruits as fruit}",
    ctx: ctx
  });
  return block;
} // (174:8) <Select variant="outlined" bind:value={valueOutlinedHelperText} label="With Helper Text">


function create_default_slot_32(ctx) {
  var t, each_1_anchor, current;
  var option = new Option({
    props: {
      value: ""
    },
    $$inline: true
  });
  var each_value_13 = ctx.fruits;
  var each_blocks = [];

  for (var i = 0; i < each_value_13.length; i += 1) {
    each_blocks[i] = create_each_block_13(get_each_context_13(ctx, each_value_13, i));
  }

  var out = function out(i) {
    return transition_out(each_blocks[i], 1, 1, function () {
      each_blocks[i] = null;
    });
  };

  var block = {
    c: function create() {
      option.$$.fragment.c();
      t = space();

      for (var _i79 = 0; _i79 < each_blocks.length; _i79 += 1) {
        each_blocks[_i79].c();
      }

      each_1_anchor = empty();
    },
    l: function claim(nodes) {
      option.$$.fragment.l(nodes);
      t = claim_space(nodes);

      for (var _i80 = 0; _i80 < each_blocks.length; _i80 += 1) {
        each_blocks[_i80].l(nodes);
      }

      each_1_anchor = empty();
    },
    m: function mount(target, anchor) {
      mount_component(option, target, anchor);
      insert_dev(target, t, anchor);

      for (var _i81 = 0; _i81 < each_blocks.length; _i81 += 1) {
        each_blocks[_i81].m(target, anchor);
      }

      insert_dev(target, each_1_anchor, anchor);
      current = true;
    },
    p: function update(changed, ctx) {
      if (changed.fruits || changed.valueOutlinedHelperText) {
        each_value_13 = ctx.fruits;

        var _i82;

        for (_i82 = 0; _i82 < each_value_13.length; _i82 += 1) {
          var child_ctx = get_each_context_13(ctx, each_value_13, _i82);

          if (each_blocks[_i82]) {
            each_blocks[_i82].p(changed, child_ctx);

            transition_in(each_blocks[_i82], 1);
          } else {
            each_blocks[_i82] = create_each_block_13(child_ctx);

            each_blocks[_i82].c();

            transition_in(each_blocks[_i82], 1);

            each_blocks[_i82].m(each_1_anchor.parentNode, each_1_anchor);
          }
        }

        group_outros();

        for (_i82 = each_value_13.length; _i82 < each_blocks.length; _i82 += 1) {
          out(_i82);
        }

        check_outros();
      }
    },
    i: function intro(local) {
      if (current) return;
      transition_in(option.$$.fragment, local);

      for (var _i83 = 0; _i83 < each_value_13.length; _i83 += 1) {
        transition_in(each_blocks[_i83]);
      }

      current = true;
    },
    o: function outro(local) {
      transition_out(option.$$.fragment, local);
      each_blocks = each_blocks.filter(Boolean);

      for (var _i84 = 0; _i84 < each_blocks.length; _i84 += 1) {
        transition_out(each_blocks[_i84]);
      }

      current = false;
    },
    d: function destroy(detaching) {
      destroy_component(option, detaching);

      if (detaching) {
        detach_dev(t);
      }

      destroy_each(each_blocks, detaching);

      if (detaching) {
        detach_dev(each_1_anchor);
      }
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_default_slot_32.name,
    type: "slot",
    source: "(174:8) <Select variant=\"outlined\" bind:value={valueOutlinedHelperText} label=\"With Helper Text\">",
    ctx: ctx
  });
  return block;
} // (180:8) <HelperText>


function create_default_slot_31(ctx) {
  var t;
  var block = {
    c: function create() {
      t = text("Helper text.");
    },
    l: function claim(nodes) {
      t = claim_text(nodes, "Helper text.");
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
    id: create_default_slot_31.name,
    type: "slot",
    source: "(180:8) <HelperText>",
    ctx: ctx
  });
  return block;
} // (189:12) <Option value={fruit} selected={valueOutlinedEnhanced === fruit}>


function create_default_slot_30(ctx) {
  var t_value = ctx.fruit + "",
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
    p: noop,
    d: function destroy(detaching) {
      if (detaching) {
        detach_dev(t);
      }
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_default_slot_30.name,
    type: "slot",
    source: "(189:12) <Option value={fruit} selected={valueOutlinedEnhanced === fruit}>",
    ctx: ctx
  });
  return block;
} // (188:10) {#each fruits as fruit}


function create_each_block_12(ctx) {
  var current;
  var option = new Option({
    props: {
      value: ctx.fruit,
      selected: ctx.valueOutlinedEnhanced === ctx.fruit,
      $$slots: {
        default: [create_default_slot_30]
      },
      $$scope: {
        ctx: ctx
      }
    },
    $$inline: true
  });
  var block = {
    c: function create() {
      option.$$.fragment.c();
    },
    l: function claim(nodes) {
      option.$$.fragment.l(nodes);
    },
    m: function mount(target, anchor) {
      mount_component(option, target, anchor);
      current = true;
    },
    p: function update(changed, ctx) {
      var option_changes = {};
      if (changed.valueOutlinedEnhanced) option_changes.selected = ctx.valueOutlinedEnhanced === ctx.fruit;
      if (changed.$$scope) option_changes.$$scope = {
        changed: changed,
        ctx: ctx
      };
      option.$set(option_changes);
    },
    i: function intro(local) {
      if (current) return;
      transition_in(option.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(option.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      destroy_component(option, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_each_block_12.name,
    type: "each",
    source: "(188:10) {#each fruits as fruit}",
    ctx: ctx
  });
  return block;
} // (186:8) <Select variant="outlined" enhanced bind:value={valueOutlinedEnhanced} label="Enhanced" class="demo-select-width" menu$class="demo-select-width">


function create_default_slot_29(ctx) {
  var t, each_1_anchor, current;
  var option = new Option({
    props: {
      value: ""
    },
    $$inline: true
  });
  var each_value_12 = ctx.fruits;
  var each_blocks = [];

  for (var i = 0; i < each_value_12.length; i += 1) {
    each_blocks[i] = create_each_block_12(get_each_context_12(ctx, each_value_12, i));
  }

  var out = function out(i) {
    return transition_out(each_blocks[i], 1, 1, function () {
      each_blocks[i] = null;
    });
  };

  var block = {
    c: function create() {
      option.$$.fragment.c();
      t = space();

      for (var _i85 = 0; _i85 < each_blocks.length; _i85 += 1) {
        each_blocks[_i85].c();
      }

      each_1_anchor = empty();
    },
    l: function claim(nodes) {
      option.$$.fragment.l(nodes);
      t = claim_space(nodes);

      for (var _i86 = 0; _i86 < each_blocks.length; _i86 += 1) {
        each_blocks[_i86].l(nodes);
      }

      each_1_anchor = empty();
    },
    m: function mount(target, anchor) {
      mount_component(option, target, anchor);
      insert_dev(target, t, anchor);

      for (var _i87 = 0; _i87 < each_blocks.length; _i87 += 1) {
        each_blocks[_i87].m(target, anchor);
      }

      insert_dev(target, each_1_anchor, anchor);
      current = true;
    },
    p: function update(changed, ctx) {
      if (changed.fruits || changed.valueOutlinedEnhanced) {
        each_value_12 = ctx.fruits;

        var _i88;

        for (_i88 = 0; _i88 < each_value_12.length; _i88 += 1) {
          var child_ctx = get_each_context_12(ctx, each_value_12, _i88);

          if (each_blocks[_i88]) {
            each_blocks[_i88].p(changed, child_ctx);

            transition_in(each_blocks[_i88], 1);
          } else {
            each_blocks[_i88] = create_each_block_12(child_ctx);

            each_blocks[_i88].c();

            transition_in(each_blocks[_i88], 1);

            each_blocks[_i88].m(each_1_anchor.parentNode, each_1_anchor);
          }
        }

        group_outros();

        for (_i88 = each_value_12.length; _i88 < each_blocks.length; _i88 += 1) {
          out(_i88);
        }

        check_outros();
      }
    },
    i: function intro(local) {
      if (current) return;
      transition_in(option.$$.fragment, local);

      for (var _i89 = 0; _i89 < each_value_12.length; _i89 += 1) {
        transition_in(each_blocks[_i89]);
      }

      current = true;
    },
    o: function outro(local) {
      transition_out(option.$$.fragment, local);
      each_blocks = each_blocks.filter(Boolean);

      for (var _i90 = 0; _i90 < each_blocks.length; _i90 += 1) {
        transition_out(each_blocks[_i90]);
      }

      current = false;
    },
    d: function destroy(detaching) {
      destroy_component(option, detaching);

      if (detaching) {
        detach_dev(t);
      }

      destroy_each(each_blocks, detaching);

      if (detaching) {
        detach_dev(each_1_anchor);
      }
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_default_slot_29.name,
    type: "slot",
    source: "(186:8) <Select variant=\"outlined\" enhanced bind:value={valueOutlinedEnhanced} label=\"Enhanced\" class=\"demo-select-width\" menu$class=\"demo-select-width\">",
    ctx: ctx
  });
  return block;
} // (198:28) <Icon class="material-icons">


function create_default_slot_28(ctx) {
  var t;
  var block = {
    c: function create() {
      t = text("event");
    },
    l: function claim(nodes) {
      t = claim_text(nodes, "event");
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
    source: "(198:28) <Icon class=\"material-icons\">",
    ctx: ctx
  });
  return block;
} // (198:10) <span slot="icon">


function create_icon_slot_2(ctx) {
  var span, current;
  var icon = new Icon({
    props: {
      class: "material-icons",
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
      span = element("span");
      icon.$$.fragment.c();
      this.h();
    },
    l: function claim(nodes) {
      span = claim_element(nodes, "SPAN", {
        slot: true,
        class: true
      }, false);
      var span_nodes = children(span);
      icon.$$.fragment.l(span_nodes);
      span_nodes.forEach(detach_dev);
      this.h();
    },
    h: function hydrate() {
      attr_dev(span, "slot", "icon");
      attr_dev(span, "class", "svelte-nitlg9");
      add_location(span, file$4, 197, 10, 6825);
    },
    m: function mount(target, anchor) {
      insert_dev(target, span, anchor);
      mount_component(icon, span, null);
      current = true;
    },
    p: function update(changed, ctx) {
      var icon_changes = {};
      if (changed.$$scope) icon_changes.$$scope = {
        changed: changed,
        ctx: ctx
      };
      icon.$set(icon_changes);
    },
    i: function intro(local) {
      if (current) return;
      transition_in(icon.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(icon.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      if (detaching) {
        detach_dev(span);
      }

      destroy_component(icon);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_icon_slot_2.name,
    type: "slot",
    source: "(198:10) <span slot=\"icon\">",
    ctx: ctx
  });
  return block;
} // (201:12) <Option value={fruit} selected={valueOutlinedLeadingIcon === fruit}>


function create_default_slot_27(ctx) {
  var t_value = ctx.fruit + "",
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
    p: noop,
    d: function destroy(detaching) {
      if (detaching) {
        detach_dev(t);
      }
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_default_slot_27.name,
    type: "slot",
    source: "(201:12) <Option value={fruit} selected={valueOutlinedLeadingIcon === fruit}>",
    ctx: ctx
  });
  return block;
} // (200:10) {#each fruits as fruit}


function create_each_block_11(ctx) {
  var current;
  var option = new Option({
    props: {
      value: ctx.fruit,
      selected: ctx.valueOutlinedLeadingIcon === ctx.fruit,
      $$slots: {
        default: [create_default_slot_27]
      },
      $$scope: {
        ctx: ctx
      }
    },
    $$inline: true
  });
  var block = {
    c: function create() {
      option.$$.fragment.c();
    },
    l: function claim(nodes) {
      option.$$.fragment.l(nodes);
    },
    m: function mount(target, anchor) {
      mount_component(option, target, anchor);
      current = true;
    },
    p: function update(changed, ctx) {
      var option_changes = {};
      if (changed.valueOutlinedLeadingIcon) option_changes.selected = ctx.valueOutlinedLeadingIcon === ctx.fruit;
      if (changed.$$scope) option_changes.$$scope = {
        changed: changed,
        ctx: ctx
      };
      option.$set(option_changes);
    },
    i: function intro(local) {
      if (current) return;
      transition_in(option.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(option.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      destroy_component(option, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_each_block_11.name,
    type: "each",
    source: "(200:10) {#each fruits as fruit}",
    ctx: ctx
  });
  return block;
} // (197:8) <Select variant="outlined" withLeadingIcon bind:value={valueOutlinedLeadingIcon} label="Leading Icon" class="demo-select-width" menu$class="demo-select-width">


function create_default_slot_26(ctx) {
  var t0, t1, each_1_anchor, current;
  var option = new Option({
    props: {
      value: ""
    },
    $$inline: true
  });
  var each_value_11 = ctx.fruits;
  var each_blocks = [];

  for (var i = 0; i < each_value_11.length; i += 1) {
    each_blocks[i] = create_each_block_11(get_each_context_11(ctx, each_value_11, i));
  }

  var out = function out(i) {
    return transition_out(each_blocks[i], 1, 1, function () {
      each_blocks[i] = null;
    });
  };

  var block = {
    c: function create() {
      t0 = space();
      option.$$.fragment.c();
      t1 = space();

      for (var _i91 = 0; _i91 < each_blocks.length; _i91 += 1) {
        each_blocks[_i91].c();
      }

      each_1_anchor = empty();
    },
    l: function claim(nodes) {
      t0 = claim_space(nodes);
      option.$$.fragment.l(nodes);
      t1 = claim_space(nodes);

      for (var _i92 = 0; _i92 < each_blocks.length; _i92 += 1) {
        each_blocks[_i92].l(nodes);
      }

      each_1_anchor = empty();
    },
    m: function mount(target, anchor) {
      insert_dev(target, t0, anchor);
      mount_component(option, target, anchor);
      insert_dev(target, t1, anchor);

      for (var _i93 = 0; _i93 < each_blocks.length; _i93 += 1) {
        each_blocks[_i93].m(target, anchor);
      }

      insert_dev(target, each_1_anchor, anchor);
      current = true;
    },
    p: function update(changed, ctx) {
      if (changed.fruits || changed.valueOutlinedLeadingIcon) {
        each_value_11 = ctx.fruits;

        var _i94;

        for (_i94 = 0; _i94 < each_value_11.length; _i94 += 1) {
          var child_ctx = get_each_context_11(ctx, each_value_11, _i94);

          if (each_blocks[_i94]) {
            each_blocks[_i94].p(changed, child_ctx);

            transition_in(each_blocks[_i94], 1);
          } else {
            each_blocks[_i94] = create_each_block_11(child_ctx);

            each_blocks[_i94].c();

            transition_in(each_blocks[_i94], 1);

            each_blocks[_i94].m(each_1_anchor.parentNode, each_1_anchor);
          }
        }

        group_outros();

        for (_i94 = each_value_11.length; _i94 < each_blocks.length; _i94 += 1) {
          out(_i94);
        }

        check_outros();
      }
    },
    i: function intro(local) {
      if (current) return;
      transition_in(option.$$.fragment, local);

      for (var _i95 = 0; _i95 < each_value_11.length; _i95 += 1) {
        transition_in(each_blocks[_i95]);
      }

      current = true;
    },
    o: function outro(local) {
      transition_out(option.$$.fragment, local);
      each_blocks = each_blocks.filter(Boolean);

      for (var _i96 = 0; _i96 < each_blocks.length; _i96 += 1) {
        transition_out(each_blocks[_i96]);
      }

      current = false;
    },
    d: function destroy(detaching) {
      if (detaching) {
        detach_dev(t0);
      }

      destroy_component(option, detaching);

      if (detaching) {
        detach_dev(t1);
      }

      destroy_each(each_blocks, detaching);

      if (detaching) {
        detach_dev(each_1_anchor);
      }
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_default_slot_26.name,
    type: "slot",
    source: "(197:8) <Select variant=\"outlined\" withLeadingIcon bind:value={valueOutlinedLeadingIcon} label=\"Leading Icon\" class=\"demo-select-width\" menu$class=\"demo-select-width\">",
    ctx: ctx
  });
  return block;
} // (212:12) <Option value={fruit} selected={valueOutlinedInvalid === fruit}>


function create_default_slot_25(ctx) {
  var t_value = ctx.fruit + "",
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
    p: noop,
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
    source: "(212:12) <Option value={fruit} selected={valueOutlinedInvalid === fruit}>",
    ctx: ctx
  });
  return block;
} // (211:10) {#each fruits as fruit}


function create_each_block_10(ctx) {
  var current;
  var option = new Option({
    props: {
      value: ctx.fruit,
      selected: ctx.valueOutlinedInvalid === ctx.fruit,
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
      option.$$.fragment.c();
    },
    l: function claim(nodes) {
      option.$$.fragment.l(nodes);
    },
    m: function mount(target, anchor) {
      mount_component(option, target, anchor);
      current = true;
    },
    p: function update(changed, ctx) {
      var option_changes = {};
      if (changed.valueOutlinedInvalid) option_changes.selected = ctx.valueOutlinedInvalid === ctx.fruit;
      if (changed.$$scope) option_changes.$$scope = {
        changed: changed,
        ctx: ctx
      };
      option.$set(option_changes);
    },
    i: function intro(local) {
      if (current) return;
      transition_in(option.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(option.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      destroy_component(option, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_each_block_10.name,
    type: "each",
    source: "(211:10) {#each fruits as fruit}",
    ctx: ctx
  });
  return block;
} // (209:8) <Select variant="outlined" invalid bind:value={valueOutlinedInvalid} label="Invalid">


function create_default_slot_24(ctx) {
  var t, each_1_anchor, current;
  var option = new Option({
    props: {
      value: ""
    },
    $$inline: true
  });
  var each_value_10 = ctx.fruits;
  var each_blocks = [];

  for (var i = 0; i < each_value_10.length; i += 1) {
    each_blocks[i] = create_each_block_10(get_each_context_10(ctx, each_value_10, i));
  }

  var out = function out(i) {
    return transition_out(each_blocks[i], 1, 1, function () {
      each_blocks[i] = null;
    });
  };

  var block = {
    c: function create() {
      option.$$.fragment.c();
      t = space();

      for (var _i97 = 0; _i97 < each_blocks.length; _i97 += 1) {
        each_blocks[_i97].c();
      }

      each_1_anchor = empty();
    },
    l: function claim(nodes) {
      option.$$.fragment.l(nodes);
      t = claim_space(nodes);

      for (var _i98 = 0; _i98 < each_blocks.length; _i98 += 1) {
        each_blocks[_i98].l(nodes);
      }

      each_1_anchor = empty();
    },
    m: function mount(target, anchor) {
      mount_component(option, target, anchor);
      insert_dev(target, t, anchor);

      for (var _i99 = 0; _i99 < each_blocks.length; _i99 += 1) {
        each_blocks[_i99].m(target, anchor);
      }

      insert_dev(target, each_1_anchor, anchor);
      current = true;
    },
    p: function update(changed, ctx) {
      if (changed.fruits || changed.valueOutlinedInvalid) {
        each_value_10 = ctx.fruits;

        var _i100;

        for (_i100 = 0; _i100 < each_value_10.length; _i100 += 1) {
          var child_ctx = get_each_context_10(ctx, each_value_10, _i100);

          if (each_blocks[_i100]) {
            each_blocks[_i100].p(changed, child_ctx);

            transition_in(each_blocks[_i100], 1);
          } else {
            each_blocks[_i100] = create_each_block_10(child_ctx);

            each_blocks[_i100].c();

            transition_in(each_blocks[_i100], 1);

            each_blocks[_i100].m(each_1_anchor.parentNode, each_1_anchor);
          }
        }

        group_outros();

        for (_i100 = each_value_10.length; _i100 < each_blocks.length; _i100 += 1) {
          out(_i100);
        }

        check_outros();
      }
    },
    i: function intro(local) {
      if (current) return;
      transition_in(option.$$.fragment, local);

      for (var _i101 = 0; _i101 < each_value_10.length; _i101 += 1) {
        transition_in(each_blocks[_i101]);
      }

      current = true;
    },
    o: function outro(local) {
      transition_out(option.$$.fragment, local);
      each_blocks = each_blocks.filter(Boolean);

      for (var _i102 = 0; _i102 < each_blocks.length; _i102 += 1) {
        transition_out(each_blocks[_i102]);
      }

      current = false;
    },
    d: function destroy(detaching) {
      destroy_component(option, detaching);

      if (detaching) {
        detach_dev(t);
      }

      destroy_each(each_blocks, detaching);

      if (detaching) {
        detach_dev(each_1_anchor);
      }
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_default_slot_24.name,
    type: "slot",
    source: "(209:8) <Select variant=\"outlined\" invalid bind:value={valueOutlinedInvalid} label=\"Invalid\">",
    ctx: ctx
  });
  return block;
} // (229:12) <Option value={fruit} selected={valueShapedFilled === fruit}>


function create_default_slot_23(ctx) {
  var t_value = ctx.fruit + "",
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
    p: noop,
    d: function destroy(detaching) {
      if (detaching) {
        detach_dev(t);
      }
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_default_slot_23.name,
    type: "slot",
    source: "(229:12) <Option value={fruit} selected={valueShapedFilled === fruit}>",
    ctx: ctx
  });
  return block;
} // (228:10) {#each fruits as fruit}


function create_each_block_9(ctx) {
  var current;
  var option = new Option({
    props: {
      value: ctx.fruit,
      selected: ctx.valueShapedFilled === ctx.fruit,
      $$slots: {
        default: [create_default_slot_23]
      },
      $$scope: {
        ctx: ctx
      }
    },
    $$inline: true
  });
  var block = {
    c: function create() {
      option.$$.fragment.c();
    },
    l: function claim(nodes) {
      option.$$.fragment.l(nodes);
    },
    m: function mount(target, anchor) {
      mount_component(option, target, anchor);
      current = true;
    },
    p: function update(changed, ctx) {
      var option_changes = {};
      if (changed.valueShapedFilled) option_changes.selected = ctx.valueShapedFilled === ctx.fruit;
      if (changed.$$scope) option_changes.$$scope = {
        changed: changed,
        ctx: ctx
      };
      option.$set(option_changes);
    },
    i: function intro(local) {
      if (current) return;
      transition_in(option.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(option.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      destroy_component(option, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_each_block_9.name,
    type: "each",
    source: "(228:10) {#each fruits as fruit}",
    ctx: ctx
  });
  return block;
} // (226:8) <Select class="shaped" variant="filled" bind:value={valueShapedFilled} label="Fruit">


function create_default_slot_22(ctx) {
  var t, each_1_anchor, current;
  var option = new Option({
    props: {
      value: ""
    },
    $$inline: true
  });
  var each_value_9 = ctx.fruits;
  var each_blocks = [];

  for (var i = 0; i < each_value_9.length; i += 1) {
    each_blocks[i] = create_each_block_9(get_each_context_9(ctx, each_value_9, i));
  }

  var out = function out(i) {
    return transition_out(each_blocks[i], 1, 1, function () {
      each_blocks[i] = null;
    });
  };

  var block = {
    c: function create() {
      option.$$.fragment.c();
      t = space();

      for (var _i103 = 0; _i103 < each_blocks.length; _i103 += 1) {
        each_blocks[_i103].c();
      }

      each_1_anchor = empty();
    },
    l: function claim(nodes) {
      option.$$.fragment.l(nodes);
      t = claim_space(nodes);

      for (var _i104 = 0; _i104 < each_blocks.length; _i104 += 1) {
        each_blocks[_i104].l(nodes);
      }

      each_1_anchor = empty();
    },
    m: function mount(target, anchor) {
      mount_component(option, target, anchor);
      insert_dev(target, t, anchor);

      for (var _i105 = 0; _i105 < each_blocks.length; _i105 += 1) {
        each_blocks[_i105].m(target, anchor);
      }

      insert_dev(target, each_1_anchor, anchor);
      current = true;
    },
    p: function update(changed, ctx) {
      if (changed.fruits || changed.valueShapedFilled) {
        each_value_9 = ctx.fruits;

        var _i106;

        for (_i106 = 0; _i106 < each_value_9.length; _i106 += 1) {
          var child_ctx = get_each_context_9(ctx, each_value_9, _i106);

          if (each_blocks[_i106]) {
            each_blocks[_i106].p(changed, child_ctx);

            transition_in(each_blocks[_i106], 1);
          } else {
            each_blocks[_i106] = create_each_block_9(child_ctx);

            each_blocks[_i106].c();

            transition_in(each_blocks[_i106], 1);

            each_blocks[_i106].m(each_1_anchor.parentNode, each_1_anchor);
          }
        }

        group_outros();

        for (_i106 = each_value_9.length; _i106 < each_blocks.length; _i106 += 1) {
          out(_i106);
        }

        check_outros();
      }
    },
    i: function intro(local) {
      if (current) return;
      transition_in(option.$$.fragment, local);

      for (var _i107 = 0; _i107 < each_value_9.length; _i107 += 1) {
        transition_in(each_blocks[_i107]);
      }

      current = true;
    },
    o: function outro(local) {
      transition_out(option.$$.fragment, local);
      each_blocks = each_blocks.filter(Boolean);

      for (var _i108 = 0; _i108 < each_blocks.length; _i108 += 1) {
        transition_out(each_blocks[_i108]);
      }

      current = false;
    },
    d: function destroy(detaching) {
      destroy_component(option, detaching);

      if (detaching) {
        detach_dev(t);
      }

      destroy_each(each_blocks, detaching);

      if (detaching) {
        detach_dev(each_1_anchor);
      }
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_default_slot_22.name,
    type: "slot",
    source: "(226:8) <Select class=\"shaped\" variant=\"filled\" bind:value={valueShapedFilled} label=\"Fruit\">",
    ctx: ctx
  });
  return block;
} // (240:12) <Option value={fruit} selected={valueShapedFilledHelperText === fruit}>


function create_default_slot_21(ctx) {
  var t_value = ctx.fruit + "",
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
    p: noop,
    d: function destroy(detaching) {
      if (detaching) {
        detach_dev(t);
      }
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_default_slot_21.name,
    type: "slot",
    source: "(240:12) <Option value={fruit} selected={valueShapedFilledHelperText === fruit}>",
    ctx: ctx
  });
  return block;
} // (239:10) {#each fruits as fruit}


function create_each_block_8(ctx) {
  var current;
  var option = new Option({
    props: {
      value: ctx.fruit,
      selected: ctx.valueShapedFilledHelperText === ctx.fruit,
      $$slots: {
        default: [create_default_slot_21]
      },
      $$scope: {
        ctx: ctx
      }
    },
    $$inline: true
  });
  var block = {
    c: function create() {
      option.$$.fragment.c();
    },
    l: function claim(nodes) {
      option.$$.fragment.l(nodes);
    },
    m: function mount(target, anchor) {
      mount_component(option, target, anchor);
      current = true;
    },
    p: function update(changed, ctx) {
      var option_changes = {};
      if (changed.valueShapedFilledHelperText) option_changes.selected = ctx.valueShapedFilledHelperText === ctx.fruit;
      if (changed.$$scope) option_changes.$$scope = {
        changed: changed,
        ctx: ctx
      };
      option.$set(option_changes);
    },
    i: function intro(local) {
      if (current) return;
      transition_in(option.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(option.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      destroy_component(option, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_each_block_8.name,
    type: "each",
    source: "(239:10) {#each fruits as fruit}",
    ctx: ctx
  });
  return block;
} // (237:8) <Select class="shaped" variant="filled" bind:value={valueShapedFilledHelperText} label="With Helper Text">


function create_default_slot_20(ctx) {
  var t, each_1_anchor, current;
  var option = new Option({
    props: {
      value: ""
    },
    $$inline: true
  });
  var each_value_8 = ctx.fruits;
  var each_blocks = [];

  for (var i = 0; i < each_value_8.length; i += 1) {
    each_blocks[i] = create_each_block_8(get_each_context_8(ctx, each_value_8, i));
  }

  var out = function out(i) {
    return transition_out(each_blocks[i], 1, 1, function () {
      each_blocks[i] = null;
    });
  };

  var block = {
    c: function create() {
      option.$$.fragment.c();
      t = space();

      for (var _i109 = 0; _i109 < each_blocks.length; _i109 += 1) {
        each_blocks[_i109].c();
      }

      each_1_anchor = empty();
    },
    l: function claim(nodes) {
      option.$$.fragment.l(nodes);
      t = claim_space(nodes);

      for (var _i110 = 0; _i110 < each_blocks.length; _i110 += 1) {
        each_blocks[_i110].l(nodes);
      }

      each_1_anchor = empty();
    },
    m: function mount(target, anchor) {
      mount_component(option, target, anchor);
      insert_dev(target, t, anchor);

      for (var _i111 = 0; _i111 < each_blocks.length; _i111 += 1) {
        each_blocks[_i111].m(target, anchor);
      }

      insert_dev(target, each_1_anchor, anchor);
      current = true;
    },
    p: function update(changed, ctx) {
      if (changed.fruits || changed.valueShapedFilledHelperText) {
        each_value_8 = ctx.fruits;

        var _i112;

        for (_i112 = 0; _i112 < each_value_8.length; _i112 += 1) {
          var child_ctx = get_each_context_8(ctx, each_value_8, _i112);

          if (each_blocks[_i112]) {
            each_blocks[_i112].p(changed, child_ctx);

            transition_in(each_blocks[_i112], 1);
          } else {
            each_blocks[_i112] = create_each_block_8(child_ctx);

            each_blocks[_i112].c();

            transition_in(each_blocks[_i112], 1);

            each_blocks[_i112].m(each_1_anchor.parentNode, each_1_anchor);
          }
        }

        group_outros();

        for (_i112 = each_value_8.length; _i112 < each_blocks.length; _i112 += 1) {
          out(_i112);
        }

        check_outros();
      }
    },
    i: function intro(local) {
      if (current) return;
      transition_in(option.$$.fragment, local);

      for (var _i113 = 0; _i113 < each_value_8.length; _i113 += 1) {
        transition_in(each_blocks[_i113]);
      }

      current = true;
    },
    o: function outro(local) {
      transition_out(option.$$.fragment, local);
      each_blocks = each_blocks.filter(Boolean);

      for (var _i114 = 0; _i114 < each_blocks.length; _i114 += 1) {
        transition_out(each_blocks[_i114]);
      }

      current = false;
    },
    d: function destroy(detaching) {
      destroy_component(option, detaching);

      if (detaching) {
        detach_dev(t);
      }

      destroy_each(each_blocks, detaching);

      if (detaching) {
        detach_dev(each_1_anchor);
      }
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_default_slot_20.name,
    type: "slot",
    source: "(237:8) <Select class=\"shaped\" variant=\"filled\" bind:value={valueShapedFilledHelperText} label=\"With Helper Text\">",
    ctx: ctx
  });
  return block;
} // (243:8) <HelperText>


function create_default_slot_19(ctx) {
  var t;
  var block = {
    c: function create() {
      t = text("Helper text.");
    },
    l: function claim(nodes) {
      t = claim_text(nodes, "Helper text.");
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
    id: create_default_slot_19.name,
    type: "slot",
    source: "(243:8) <HelperText>",
    ctx: ctx
  });
  return block;
} // (252:12) <Option value={fruit} selected={valueShapedFilledEnhanced === fruit}>


function create_default_slot_18(ctx) {
  var t_value = ctx.fruit + "",
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
    p: noop,
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
    source: "(252:12) <Option value={fruit} selected={valueShapedFilledEnhanced === fruit}>",
    ctx: ctx
  });
  return block;
} // (251:10) {#each fruits as fruit}


function create_each_block_7(ctx) {
  var current;
  var option = new Option({
    props: {
      value: ctx.fruit,
      selected: ctx.valueShapedFilledEnhanced === ctx.fruit,
      $$slots: {
        default: [create_default_slot_18]
      },
      $$scope: {
        ctx: ctx
      }
    },
    $$inline: true
  });
  var block = {
    c: function create() {
      option.$$.fragment.c();
    },
    l: function claim(nodes) {
      option.$$.fragment.l(nodes);
    },
    m: function mount(target, anchor) {
      mount_component(option, target, anchor);
      current = true;
    },
    p: function update(changed, ctx) {
      var option_changes = {};
      if (changed.valueShapedFilledEnhanced) option_changes.selected = ctx.valueShapedFilledEnhanced === ctx.fruit;
      if (changed.$$scope) option_changes.$$scope = {
        changed: changed,
        ctx: ctx
      };
      option.$set(option_changes);
    },
    i: function intro(local) {
      if (current) return;
      transition_in(option.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(option.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      destroy_component(option, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_each_block_7.name,
    type: "each",
    source: "(251:10) {#each fruits as fruit}",
    ctx: ctx
  });
  return block;
} // (249:8) <Select class="shaped demo-select-width" variant="filled" enhanced bind:value={valueShapedFilledEnhanced} label="Enhanced" menu$class="demo-select-width">


function create_default_slot_17(ctx) {
  var t, each_1_anchor, current;
  var option = new Option({
    props: {
      value: ""
    },
    $$inline: true
  });
  var each_value_7 = ctx.fruits;
  var each_blocks = [];

  for (var i = 0; i < each_value_7.length; i += 1) {
    each_blocks[i] = create_each_block_7(get_each_context_7(ctx, each_value_7, i));
  }

  var out = function out(i) {
    return transition_out(each_blocks[i], 1, 1, function () {
      each_blocks[i] = null;
    });
  };

  var block = {
    c: function create() {
      option.$$.fragment.c();
      t = space();

      for (var _i115 = 0; _i115 < each_blocks.length; _i115 += 1) {
        each_blocks[_i115].c();
      }

      each_1_anchor = empty();
    },
    l: function claim(nodes) {
      option.$$.fragment.l(nodes);
      t = claim_space(nodes);

      for (var _i116 = 0; _i116 < each_blocks.length; _i116 += 1) {
        each_blocks[_i116].l(nodes);
      }

      each_1_anchor = empty();
    },
    m: function mount(target, anchor) {
      mount_component(option, target, anchor);
      insert_dev(target, t, anchor);

      for (var _i117 = 0; _i117 < each_blocks.length; _i117 += 1) {
        each_blocks[_i117].m(target, anchor);
      }

      insert_dev(target, each_1_anchor, anchor);
      current = true;
    },
    p: function update(changed, ctx) {
      if (changed.fruits || changed.valueShapedFilledEnhanced) {
        each_value_7 = ctx.fruits;

        var _i118;

        for (_i118 = 0; _i118 < each_value_7.length; _i118 += 1) {
          var child_ctx = get_each_context_7(ctx, each_value_7, _i118);

          if (each_blocks[_i118]) {
            each_blocks[_i118].p(changed, child_ctx);

            transition_in(each_blocks[_i118], 1);
          } else {
            each_blocks[_i118] = create_each_block_7(child_ctx);

            each_blocks[_i118].c();

            transition_in(each_blocks[_i118], 1);

            each_blocks[_i118].m(each_1_anchor.parentNode, each_1_anchor);
          }
        }

        group_outros();

        for (_i118 = each_value_7.length; _i118 < each_blocks.length; _i118 += 1) {
          out(_i118);
        }

        check_outros();
      }
    },
    i: function intro(local) {
      if (current) return;
      transition_in(option.$$.fragment, local);

      for (var _i119 = 0; _i119 < each_value_7.length; _i119 += 1) {
        transition_in(each_blocks[_i119]);
      }

      current = true;
    },
    o: function outro(local) {
      transition_out(option.$$.fragment, local);
      each_blocks = each_blocks.filter(Boolean);

      for (var _i120 = 0; _i120 < each_blocks.length; _i120 += 1) {
        transition_out(each_blocks[_i120]);
      }

      current = false;
    },
    d: function destroy(detaching) {
      destroy_component(option, detaching);

      if (detaching) {
        detach_dev(t);
      }

      destroy_each(each_blocks, detaching);

      if (detaching) {
        detach_dev(each_1_anchor);
      }
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_default_slot_17.name,
    type: "slot",
    source: "(249:8) <Select class=\"shaped demo-select-width\" variant=\"filled\" enhanced bind:value={valueShapedFilledEnhanced} label=\"Enhanced\" menu$class=\"demo-select-width\">",
    ctx: ctx
  });
  return block;
} // (261:28) <Icon class="material-icons">


function create_default_slot_16(ctx) {
  var t;
  var block = {
    c: function create() {
      t = text("event");
    },
    l: function claim(nodes) {
      t = claim_text(nodes, "event");
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
    id: create_default_slot_16.name,
    type: "slot",
    source: "(261:28) <Icon class=\"material-icons\">",
    ctx: ctx
  });
  return block;
} // (261:10) <span slot="icon">


function create_icon_slot_1(ctx) {
  var span, current;
  var icon = new Icon({
    props: {
      class: "material-icons",
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
      span = element("span");
      icon.$$.fragment.c();
      this.h();
    },
    l: function claim(nodes) {
      span = claim_element(nodes, "SPAN", {
        slot: true,
        class: true
      }, false);
      var span_nodes = children(span);
      icon.$$.fragment.l(span_nodes);
      span_nodes.forEach(detach_dev);
      this.h();
    },
    h: function hydrate() {
      attr_dev(span, "slot", "icon");
      attr_dev(span, "class", "svelte-nitlg9");
      add_location(span, file$4, 260, 10, 9175);
    },
    m: function mount(target, anchor) {
      insert_dev(target, span, anchor);
      mount_component(icon, span, null);
      current = true;
    },
    p: function update(changed, ctx) {
      var icon_changes = {};
      if (changed.$$scope) icon_changes.$$scope = {
        changed: changed,
        ctx: ctx
      };
      icon.$set(icon_changes);
    },
    i: function intro(local) {
      if (current) return;
      transition_in(icon.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(icon.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      if (detaching) {
        detach_dev(span);
      }

      destroy_component(icon);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_icon_slot_1.name,
    type: "slot",
    source: "(261:10) <span slot=\"icon\">",
    ctx: ctx
  });
  return block;
} // (264:12) <Option value={fruit} selected={valueShapedFilledLeadingIcon === fruit}>


function create_default_slot_15(ctx) {
  var t_value = ctx.fruit + "",
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
    p: noop,
    d: function destroy(detaching) {
      if (detaching) {
        detach_dev(t);
      }
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_default_slot_15.name,
    type: "slot",
    source: "(264:12) <Option value={fruit} selected={valueShapedFilledLeadingIcon === fruit}>",
    ctx: ctx
  });
  return block;
} // (263:10) {#each fruits as fruit}


function create_each_block_6(ctx) {
  var current;
  var option = new Option({
    props: {
      value: ctx.fruit,
      selected: ctx.valueShapedFilledLeadingIcon === ctx.fruit,
      $$slots: {
        default: [create_default_slot_15]
      },
      $$scope: {
        ctx: ctx
      }
    },
    $$inline: true
  });
  var block = {
    c: function create() {
      option.$$.fragment.c();
    },
    l: function claim(nodes) {
      option.$$.fragment.l(nodes);
    },
    m: function mount(target, anchor) {
      mount_component(option, target, anchor);
      current = true;
    },
    p: function update(changed, ctx) {
      var option_changes = {};
      if (changed.valueShapedFilledLeadingIcon) option_changes.selected = ctx.valueShapedFilledLeadingIcon === ctx.fruit;
      if (changed.$$scope) option_changes.$$scope = {
        changed: changed,
        ctx: ctx
      };
      option.$set(option_changes);
    },
    i: function intro(local) {
      if (current) return;
      transition_in(option.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(option.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      destroy_component(option, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_each_block_6.name,
    type: "each",
    source: "(263:10) {#each fruits as fruit}",
    ctx: ctx
  });
  return block;
} // (260:8) <Select class="shaped demo-select-width" variant="filled" withLeadingIcon bind:value={valueShapedFilledLeadingIcon} label="Leading Icon" menu$class="demo-select-width">


function create_default_slot_14(ctx) {
  var t0, t1, each_1_anchor, current;
  var option = new Option({
    props: {
      value: ""
    },
    $$inline: true
  });
  var each_value_6 = ctx.fruits;
  var each_blocks = [];

  for (var i = 0; i < each_value_6.length; i += 1) {
    each_blocks[i] = create_each_block_6(get_each_context_6(ctx, each_value_6, i));
  }

  var out = function out(i) {
    return transition_out(each_blocks[i], 1, 1, function () {
      each_blocks[i] = null;
    });
  };

  var block = {
    c: function create() {
      t0 = space();
      option.$$.fragment.c();
      t1 = space();

      for (var _i121 = 0; _i121 < each_blocks.length; _i121 += 1) {
        each_blocks[_i121].c();
      }

      each_1_anchor = empty();
    },
    l: function claim(nodes) {
      t0 = claim_space(nodes);
      option.$$.fragment.l(nodes);
      t1 = claim_space(nodes);

      for (var _i122 = 0; _i122 < each_blocks.length; _i122 += 1) {
        each_blocks[_i122].l(nodes);
      }

      each_1_anchor = empty();
    },
    m: function mount(target, anchor) {
      insert_dev(target, t0, anchor);
      mount_component(option, target, anchor);
      insert_dev(target, t1, anchor);

      for (var _i123 = 0; _i123 < each_blocks.length; _i123 += 1) {
        each_blocks[_i123].m(target, anchor);
      }

      insert_dev(target, each_1_anchor, anchor);
      current = true;
    },
    p: function update(changed, ctx) {
      if (changed.fruits || changed.valueShapedFilledLeadingIcon) {
        each_value_6 = ctx.fruits;

        var _i124;

        for (_i124 = 0; _i124 < each_value_6.length; _i124 += 1) {
          var child_ctx = get_each_context_6(ctx, each_value_6, _i124);

          if (each_blocks[_i124]) {
            each_blocks[_i124].p(changed, child_ctx);

            transition_in(each_blocks[_i124], 1);
          } else {
            each_blocks[_i124] = create_each_block_6(child_ctx);

            each_blocks[_i124].c();

            transition_in(each_blocks[_i124], 1);

            each_blocks[_i124].m(each_1_anchor.parentNode, each_1_anchor);
          }
        }

        group_outros();

        for (_i124 = each_value_6.length; _i124 < each_blocks.length; _i124 += 1) {
          out(_i124);
        }

        check_outros();
      }
    },
    i: function intro(local) {
      if (current) return;
      transition_in(option.$$.fragment, local);

      for (var _i125 = 0; _i125 < each_value_6.length; _i125 += 1) {
        transition_in(each_blocks[_i125]);
      }

      current = true;
    },
    o: function outro(local) {
      transition_out(option.$$.fragment, local);
      each_blocks = each_blocks.filter(Boolean);

      for (var _i126 = 0; _i126 < each_blocks.length; _i126 += 1) {
        transition_out(each_blocks[_i126]);
      }

      current = false;
    },
    d: function destroy(detaching) {
      if (detaching) {
        detach_dev(t0);
      }

      destroy_component(option, detaching);

      if (detaching) {
        detach_dev(t1);
      }

      destroy_each(each_blocks, detaching);

      if (detaching) {
        detach_dev(each_1_anchor);
      }
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_default_slot_14.name,
    type: "slot",
    source: "(260:8) <Select class=\"shaped demo-select-width\" variant=\"filled\" withLeadingIcon bind:value={valueShapedFilledLeadingIcon} label=\"Leading Icon\" menu$class=\"demo-select-width\">",
    ctx: ctx
  });
  return block;
} // (275:12) <Option value={fruit} selected={valueShapedFilledInvalid === fruit}>


function create_default_slot_13(ctx) {
  var t_value = ctx.fruit + "",
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
    p: noop,
    d: function destroy(detaching) {
      if (detaching) {
        detach_dev(t);
      }
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_default_slot_13.name,
    type: "slot",
    source: "(275:12) <Option value={fruit} selected={valueShapedFilledInvalid === fruit}>",
    ctx: ctx
  });
  return block;
} // (274:10) {#each fruits as fruit}


function create_each_block_5(ctx) {
  var current;
  var option = new Option({
    props: {
      value: ctx.fruit,
      selected: ctx.valueShapedFilledInvalid === ctx.fruit,
      $$slots: {
        default: [create_default_slot_13]
      },
      $$scope: {
        ctx: ctx
      }
    },
    $$inline: true
  });
  var block = {
    c: function create() {
      option.$$.fragment.c();
    },
    l: function claim(nodes) {
      option.$$.fragment.l(nodes);
    },
    m: function mount(target, anchor) {
      mount_component(option, target, anchor);
      current = true;
    },
    p: function update(changed, ctx) {
      var option_changes = {};
      if (changed.valueShapedFilledInvalid) option_changes.selected = ctx.valueShapedFilledInvalid === ctx.fruit;
      if (changed.$$scope) option_changes.$$scope = {
        changed: changed,
        ctx: ctx
      };
      option.$set(option_changes);
    },
    i: function intro(local) {
      if (current) return;
      transition_in(option.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(option.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      destroy_component(option, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_each_block_5.name,
    type: "each",
    source: "(274:10) {#each fruits as fruit}",
    ctx: ctx
  });
  return block;
} // (272:8) <Select class="shaped" variant="filled" invalid bind:value={valueShapedFilledInvalid} label="Invalid">


function create_default_slot_12(ctx) {
  var t, each_1_anchor, current;
  var option = new Option({
    props: {
      value: ""
    },
    $$inline: true
  });
  var each_value_5 = ctx.fruits;
  var each_blocks = [];

  for (var i = 0; i < each_value_5.length; i += 1) {
    each_blocks[i] = create_each_block_5(get_each_context_5(ctx, each_value_5, i));
  }

  var out = function out(i) {
    return transition_out(each_blocks[i], 1, 1, function () {
      each_blocks[i] = null;
    });
  };

  var block = {
    c: function create() {
      option.$$.fragment.c();
      t = space();

      for (var _i127 = 0; _i127 < each_blocks.length; _i127 += 1) {
        each_blocks[_i127].c();
      }

      each_1_anchor = empty();
    },
    l: function claim(nodes) {
      option.$$.fragment.l(nodes);
      t = claim_space(nodes);

      for (var _i128 = 0; _i128 < each_blocks.length; _i128 += 1) {
        each_blocks[_i128].l(nodes);
      }

      each_1_anchor = empty();
    },
    m: function mount(target, anchor) {
      mount_component(option, target, anchor);
      insert_dev(target, t, anchor);

      for (var _i129 = 0; _i129 < each_blocks.length; _i129 += 1) {
        each_blocks[_i129].m(target, anchor);
      }

      insert_dev(target, each_1_anchor, anchor);
      current = true;
    },
    p: function update(changed, ctx) {
      if (changed.fruits || changed.valueShapedFilledInvalid) {
        each_value_5 = ctx.fruits;

        var _i130;

        for (_i130 = 0; _i130 < each_value_5.length; _i130 += 1) {
          var child_ctx = get_each_context_5(ctx, each_value_5, _i130);

          if (each_blocks[_i130]) {
            each_blocks[_i130].p(changed, child_ctx);

            transition_in(each_blocks[_i130], 1);
          } else {
            each_blocks[_i130] = create_each_block_5(child_ctx);

            each_blocks[_i130].c();

            transition_in(each_blocks[_i130], 1);

            each_blocks[_i130].m(each_1_anchor.parentNode, each_1_anchor);
          }
        }

        group_outros();

        for (_i130 = each_value_5.length; _i130 < each_blocks.length; _i130 += 1) {
          out(_i130);
        }

        check_outros();
      }
    },
    i: function intro(local) {
      if (current) return;
      transition_in(option.$$.fragment, local);

      for (var _i131 = 0; _i131 < each_value_5.length; _i131 += 1) {
        transition_in(each_blocks[_i131]);
      }

      current = true;
    },
    o: function outro(local) {
      transition_out(option.$$.fragment, local);
      each_blocks = each_blocks.filter(Boolean);

      for (var _i132 = 0; _i132 < each_blocks.length; _i132 += 1) {
        transition_out(each_blocks[_i132]);
      }

      current = false;
    },
    d: function destroy(detaching) {
      destroy_component(option, detaching);

      if (detaching) {
        detach_dev(t);
      }

      destroy_each(each_blocks, detaching);

      if (detaching) {
        detach_dev(each_1_anchor);
      }
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_default_slot_12.name,
    type: "slot",
    source: "(272:8) <Select class=\"shaped\" variant=\"filled\" invalid bind:value={valueShapedFilledInvalid} label=\"Invalid\">",
    ctx: ctx
  });
  return block;
} // (292:12) <Option value={fruit} selected={valueShapedOutlined === fruit}>


function create_default_slot_11(ctx) {
  var t_value = ctx.fruit + "",
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
    p: noop,
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
    source: "(292:12) <Option value={fruit} selected={valueShapedOutlined === fruit}>",
    ctx: ctx
  });
  return block;
} // (291:10) {#each fruits as fruit}


function create_each_block_4(ctx) {
  var current;
  var option = new Option({
    props: {
      value: ctx.fruit,
      selected: ctx.valueShapedOutlined === ctx.fruit,
      $$slots: {
        default: [create_default_slot_11]
      },
      $$scope: {
        ctx: ctx
      }
    },
    $$inline: true
  });
  var block = {
    c: function create() {
      option.$$.fragment.c();
    },
    l: function claim(nodes) {
      option.$$.fragment.l(nodes);
    },
    m: function mount(target, anchor) {
      mount_component(option, target, anchor);
      current = true;
    },
    p: function update(changed, ctx) {
      var option_changes = {};
      if (changed.valueShapedOutlined) option_changes.selected = ctx.valueShapedOutlined === ctx.fruit;
      if (changed.$$scope) option_changes.$$scope = {
        changed: changed,
        ctx: ctx
      };
      option.$set(option_changes);
    },
    i: function intro(local) {
      if (current) return;
      transition_in(option.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(option.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      destroy_component(option, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_each_block_4.name,
    type: "each",
    source: "(291:10) {#each fruits as fruit}",
    ctx: ctx
  });
  return block;
} // (289:8) <Select class="shaped-outlined" variant="outlined" bind:value={valueShapedOutlined} label="Fruit">


function create_default_slot_10(ctx) {
  var t, each_1_anchor, current;
  var option = new Option({
    props: {
      value: ""
    },
    $$inline: true
  });
  var each_value_4 = ctx.fruits;
  var each_blocks = [];

  for (var i = 0; i < each_value_4.length; i += 1) {
    each_blocks[i] = create_each_block_4(get_each_context_4(ctx, each_value_4, i));
  }

  var out = function out(i) {
    return transition_out(each_blocks[i], 1, 1, function () {
      each_blocks[i] = null;
    });
  };

  var block = {
    c: function create() {
      option.$$.fragment.c();
      t = space();

      for (var _i133 = 0; _i133 < each_blocks.length; _i133 += 1) {
        each_blocks[_i133].c();
      }

      each_1_anchor = empty();
    },
    l: function claim(nodes) {
      option.$$.fragment.l(nodes);
      t = claim_space(nodes);

      for (var _i134 = 0; _i134 < each_blocks.length; _i134 += 1) {
        each_blocks[_i134].l(nodes);
      }

      each_1_anchor = empty();
    },
    m: function mount(target, anchor) {
      mount_component(option, target, anchor);
      insert_dev(target, t, anchor);

      for (var _i135 = 0; _i135 < each_blocks.length; _i135 += 1) {
        each_blocks[_i135].m(target, anchor);
      }

      insert_dev(target, each_1_anchor, anchor);
      current = true;
    },
    p: function update(changed, ctx) {
      if (changed.fruits || changed.valueShapedOutlined) {
        each_value_4 = ctx.fruits;

        var _i136;

        for (_i136 = 0; _i136 < each_value_4.length; _i136 += 1) {
          var child_ctx = get_each_context_4(ctx, each_value_4, _i136);

          if (each_blocks[_i136]) {
            each_blocks[_i136].p(changed, child_ctx);

            transition_in(each_blocks[_i136], 1);
          } else {
            each_blocks[_i136] = create_each_block_4(child_ctx);

            each_blocks[_i136].c();

            transition_in(each_blocks[_i136], 1);

            each_blocks[_i136].m(each_1_anchor.parentNode, each_1_anchor);
          }
        }

        group_outros();

        for (_i136 = each_value_4.length; _i136 < each_blocks.length; _i136 += 1) {
          out(_i136);
        }

        check_outros();
      }
    },
    i: function intro(local) {
      if (current) return;
      transition_in(option.$$.fragment, local);

      for (var _i137 = 0; _i137 < each_value_4.length; _i137 += 1) {
        transition_in(each_blocks[_i137]);
      }

      current = true;
    },
    o: function outro(local) {
      transition_out(option.$$.fragment, local);
      each_blocks = each_blocks.filter(Boolean);

      for (var _i138 = 0; _i138 < each_blocks.length; _i138 += 1) {
        transition_out(each_blocks[_i138]);
      }

      current = false;
    },
    d: function destroy(detaching) {
      destroy_component(option, detaching);

      if (detaching) {
        detach_dev(t);
      }

      destroy_each(each_blocks, detaching);

      if (detaching) {
        detach_dev(each_1_anchor);
      }
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_default_slot_10.name,
    type: "slot",
    source: "(289:8) <Select class=\"shaped-outlined\" variant=\"outlined\" bind:value={valueShapedOutlined} label=\"Fruit\">",
    ctx: ctx
  });
  return block;
} // (303:12) <Option value={fruit} selected={valueShapedOutlinedHelperText === fruit}>


function create_default_slot_9(ctx) {
  var t_value = ctx.fruit + "",
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
    p: noop,
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
    source: "(303:12) <Option value={fruit} selected={valueShapedOutlinedHelperText === fruit}>",
    ctx: ctx
  });
  return block;
} // (302:10) {#each fruits as fruit}


function create_each_block_3(ctx) {
  var current;
  var option = new Option({
    props: {
      value: ctx.fruit,
      selected: ctx.valueShapedOutlinedHelperText === ctx.fruit,
      $$slots: {
        default: [create_default_slot_9]
      },
      $$scope: {
        ctx: ctx
      }
    },
    $$inline: true
  });
  var block = {
    c: function create() {
      option.$$.fragment.c();
    },
    l: function claim(nodes) {
      option.$$.fragment.l(nodes);
    },
    m: function mount(target, anchor) {
      mount_component(option, target, anchor);
      current = true;
    },
    p: function update(changed, ctx) {
      var option_changes = {};
      if (changed.valueShapedOutlinedHelperText) option_changes.selected = ctx.valueShapedOutlinedHelperText === ctx.fruit;
      if (changed.$$scope) option_changes.$$scope = {
        changed: changed,
        ctx: ctx
      };
      option.$set(option_changes);
    },
    i: function intro(local) {
      if (current) return;
      transition_in(option.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(option.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      destroy_component(option, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_each_block_3.name,
    type: "each",
    source: "(302:10) {#each fruits as fruit}",
    ctx: ctx
  });
  return block;
} // (300:8) <Select class="shaped-outlined" variant="outlined" bind:value={valueShapedOutlinedHelperText} label="With Helper Text">


function create_default_slot_8(ctx) {
  var t, each_1_anchor, current;
  var option = new Option({
    props: {
      value: ""
    },
    $$inline: true
  });
  var each_value_3 = ctx.fruits;
  var each_blocks = [];

  for (var i = 0; i < each_value_3.length; i += 1) {
    each_blocks[i] = create_each_block_3(get_each_context_3(ctx, each_value_3, i));
  }

  var out = function out(i) {
    return transition_out(each_blocks[i], 1, 1, function () {
      each_blocks[i] = null;
    });
  };

  var block = {
    c: function create() {
      option.$$.fragment.c();
      t = space();

      for (var _i139 = 0; _i139 < each_blocks.length; _i139 += 1) {
        each_blocks[_i139].c();
      }

      each_1_anchor = empty();
    },
    l: function claim(nodes) {
      option.$$.fragment.l(nodes);
      t = claim_space(nodes);

      for (var _i140 = 0; _i140 < each_blocks.length; _i140 += 1) {
        each_blocks[_i140].l(nodes);
      }

      each_1_anchor = empty();
    },
    m: function mount(target, anchor) {
      mount_component(option, target, anchor);
      insert_dev(target, t, anchor);

      for (var _i141 = 0; _i141 < each_blocks.length; _i141 += 1) {
        each_blocks[_i141].m(target, anchor);
      }

      insert_dev(target, each_1_anchor, anchor);
      current = true;
    },
    p: function update(changed, ctx) {
      if (changed.fruits || changed.valueShapedOutlinedHelperText) {
        each_value_3 = ctx.fruits;

        var _i142;

        for (_i142 = 0; _i142 < each_value_3.length; _i142 += 1) {
          var child_ctx = get_each_context_3(ctx, each_value_3, _i142);

          if (each_blocks[_i142]) {
            each_blocks[_i142].p(changed, child_ctx);

            transition_in(each_blocks[_i142], 1);
          } else {
            each_blocks[_i142] = create_each_block_3(child_ctx);

            each_blocks[_i142].c();

            transition_in(each_blocks[_i142], 1);

            each_blocks[_i142].m(each_1_anchor.parentNode, each_1_anchor);
          }
        }

        group_outros();

        for (_i142 = each_value_3.length; _i142 < each_blocks.length; _i142 += 1) {
          out(_i142);
        }

        check_outros();
      }
    },
    i: function intro(local) {
      if (current) return;
      transition_in(option.$$.fragment, local);

      for (var _i143 = 0; _i143 < each_value_3.length; _i143 += 1) {
        transition_in(each_blocks[_i143]);
      }

      current = true;
    },
    o: function outro(local) {
      transition_out(option.$$.fragment, local);
      each_blocks = each_blocks.filter(Boolean);

      for (var _i144 = 0; _i144 < each_blocks.length; _i144 += 1) {
        transition_out(each_blocks[_i144]);
      }

      current = false;
    },
    d: function destroy(detaching) {
      destroy_component(option, detaching);

      if (detaching) {
        detach_dev(t);
      }

      destroy_each(each_blocks, detaching);

      if (detaching) {
        detach_dev(each_1_anchor);
      }
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_default_slot_8.name,
    type: "slot",
    source: "(300:8) <Select class=\"shaped-outlined\" variant=\"outlined\" bind:value={valueShapedOutlinedHelperText} label=\"With Helper Text\">",
    ctx: ctx
  });
  return block;
} // (306:8) <HelperText>


function create_default_slot_7(ctx) {
  var t;
  var block = {
    c: function create() {
      t = text("Helper text.");
    },
    l: function claim(nodes) {
      t = claim_text(nodes, "Helper text.");
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
    id: create_default_slot_7.name,
    type: "slot",
    source: "(306:8) <HelperText>",
    ctx: ctx
  });
  return block;
} // (315:12) <Option value={fruit} selected={valueShapedOutlinedEnhanced === fruit}>


function create_default_slot_6(ctx) {
  var t_value = ctx.fruit + "",
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
    p: noop,
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
    source: "(315:12) <Option value={fruit} selected={valueShapedOutlinedEnhanced === fruit}>",
    ctx: ctx
  });
  return block;
} // (314:10) {#each fruits as fruit}


function create_each_block_2(ctx) {
  var current;
  var option = new Option({
    props: {
      value: ctx.fruit,
      selected: ctx.valueShapedOutlinedEnhanced === ctx.fruit,
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
      option.$$.fragment.c();
    },
    l: function claim(nodes) {
      option.$$.fragment.l(nodes);
    },
    m: function mount(target, anchor) {
      mount_component(option, target, anchor);
      current = true;
    },
    p: function update(changed, ctx) {
      var option_changes = {};
      if (changed.valueShapedOutlinedEnhanced) option_changes.selected = ctx.valueShapedOutlinedEnhanced === ctx.fruit;
      if (changed.$$scope) option_changes.$$scope = {
        changed: changed,
        ctx: ctx
      };
      option.$set(option_changes);
    },
    i: function intro(local) {
      if (current) return;
      transition_in(option.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(option.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      destroy_component(option, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_each_block_2.name,
    type: "each",
    source: "(314:10) {#each fruits as fruit}",
    ctx: ctx
  });
  return block;
} // (312:8) <Select class="shaped-outlined demo-select-width" variant="outlined" enhanced bind:value={valueShapedOutlinedEnhanced} label="Enhanced" menu$class="demo-select-width">


function create_default_slot_5(ctx) {
  var t, each_1_anchor, current;
  var option = new Option({
    props: {
      value: ""
    },
    $$inline: true
  });
  var each_value_2 = ctx.fruits;
  var each_blocks = [];

  for (var i = 0; i < each_value_2.length; i += 1) {
    each_blocks[i] = create_each_block_2(get_each_context_2(ctx, each_value_2, i));
  }

  var out = function out(i) {
    return transition_out(each_blocks[i], 1, 1, function () {
      each_blocks[i] = null;
    });
  };

  var block = {
    c: function create() {
      option.$$.fragment.c();
      t = space();

      for (var _i145 = 0; _i145 < each_blocks.length; _i145 += 1) {
        each_blocks[_i145].c();
      }

      each_1_anchor = empty();
    },
    l: function claim(nodes) {
      option.$$.fragment.l(nodes);
      t = claim_space(nodes);

      for (var _i146 = 0; _i146 < each_blocks.length; _i146 += 1) {
        each_blocks[_i146].l(nodes);
      }

      each_1_anchor = empty();
    },
    m: function mount(target, anchor) {
      mount_component(option, target, anchor);
      insert_dev(target, t, anchor);

      for (var _i147 = 0; _i147 < each_blocks.length; _i147 += 1) {
        each_blocks[_i147].m(target, anchor);
      }

      insert_dev(target, each_1_anchor, anchor);
      current = true;
    },
    p: function update(changed, ctx) {
      if (changed.fruits || changed.valueShapedOutlinedEnhanced) {
        each_value_2 = ctx.fruits;

        var _i148;

        for (_i148 = 0; _i148 < each_value_2.length; _i148 += 1) {
          var child_ctx = get_each_context_2(ctx, each_value_2, _i148);

          if (each_blocks[_i148]) {
            each_blocks[_i148].p(changed, child_ctx);

            transition_in(each_blocks[_i148], 1);
          } else {
            each_blocks[_i148] = create_each_block_2(child_ctx);

            each_blocks[_i148].c();

            transition_in(each_blocks[_i148], 1);

            each_blocks[_i148].m(each_1_anchor.parentNode, each_1_anchor);
          }
        }

        group_outros();

        for (_i148 = each_value_2.length; _i148 < each_blocks.length; _i148 += 1) {
          out(_i148);
        }

        check_outros();
      }
    },
    i: function intro(local) {
      if (current) return;
      transition_in(option.$$.fragment, local);

      for (var _i149 = 0; _i149 < each_value_2.length; _i149 += 1) {
        transition_in(each_blocks[_i149]);
      }

      current = true;
    },
    o: function outro(local) {
      transition_out(option.$$.fragment, local);
      each_blocks = each_blocks.filter(Boolean);

      for (var _i150 = 0; _i150 < each_blocks.length; _i150 += 1) {
        transition_out(each_blocks[_i150]);
      }

      current = false;
    },
    d: function destroy(detaching) {
      destroy_component(option, detaching);

      if (detaching) {
        detach_dev(t);
      }

      destroy_each(each_blocks, detaching);

      if (detaching) {
        detach_dev(each_1_anchor);
      }
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_default_slot_5.name,
    type: "slot",
    source: "(312:8) <Select class=\"shaped-outlined demo-select-width\" variant=\"outlined\" enhanced bind:value={valueShapedOutlinedEnhanced} label=\"Enhanced\" menu$class=\"demo-select-width\">",
    ctx: ctx
  });
  return block;
} // (324:28) <Icon class="material-icons">


function create_default_slot_4$1(ctx) {
  var t;
  var block = {
    c: function create() {
      t = text("event");
    },
    l: function claim(nodes) {
      t = claim_text(nodes, "event");
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
    id: create_default_slot_4$1.name,
    type: "slot",
    source: "(324:28) <Icon class=\"material-icons\">",
    ctx: ctx
  });
  return block;
} // (324:10) <span slot="icon">


function create_icon_slot(ctx) {
  var span, current;
  var icon = new Icon({
    props: {
      class: "material-icons",
      $$slots: {
        default: [create_default_slot_4$1]
      },
      $$scope: {
        ctx: ctx
      }
    },
    $$inline: true
  });
  var block = {
    c: function create() {
      span = element("span");
      icon.$$.fragment.c();
      this.h();
    },
    l: function claim(nodes) {
      span = claim_element(nodes, "SPAN", {
        slot: true,
        class: true
      }, false);
      var span_nodes = children(span);
      icon.$$.fragment.l(span_nodes);
      span_nodes.forEach(detach_dev);
      this.h();
    },
    h: function hydrate() {
      attr_dev(span, "slot", "icon");
      attr_dev(span, "class", "svelte-nitlg9");
      add_location(span, file$4, 323, 10, 11624);
    },
    m: function mount(target, anchor) {
      insert_dev(target, span, anchor);
      mount_component(icon, span, null);
      current = true;
    },
    p: function update(changed, ctx) {
      var icon_changes = {};
      if (changed.$$scope) icon_changes.$$scope = {
        changed: changed,
        ctx: ctx
      };
      icon.$set(icon_changes);
    },
    i: function intro(local) {
      if (current) return;
      transition_in(icon.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(icon.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      if (detaching) {
        detach_dev(span);
      }

      destroy_component(icon);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_icon_slot.name,
    type: "slot",
    source: "(324:10) <span slot=\"icon\">",
    ctx: ctx
  });
  return block;
} // (327:12) <Option value={fruit} selected={valueShapedOutlinedLeadingIcon === fruit}>


function create_default_slot_3$1(ctx) {
  var t_value = ctx.fruit + "",
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
    p: noop,
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
    source: "(327:12) <Option value={fruit} selected={valueShapedOutlinedLeadingIcon === fruit}>",
    ctx: ctx
  });
  return block;
} // (326:10) {#each fruits as fruit}


function create_each_block_1(ctx) {
  var current;
  var option = new Option({
    props: {
      value: ctx.fruit,
      selected: ctx.valueShapedOutlinedLeadingIcon === ctx.fruit,
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
      option.$$.fragment.c();
    },
    l: function claim(nodes) {
      option.$$.fragment.l(nodes);
    },
    m: function mount(target, anchor) {
      mount_component(option, target, anchor);
      current = true;
    },
    p: function update(changed, ctx) {
      var option_changes = {};
      if (changed.valueShapedOutlinedLeadingIcon) option_changes.selected = ctx.valueShapedOutlinedLeadingIcon === ctx.fruit;
      if (changed.$$scope) option_changes.$$scope = {
        changed: changed,
        ctx: ctx
      };
      option.$set(option_changes);
    },
    i: function intro(local) {
      if (current) return;
      transition_in(option.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(option.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      destroy_component(option, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_each_block_1.name,
    type: "each",
    source: "(326:10) {#each fruits as fruit}",
    ctx: ctx
  });
  return block;
} // (323:8) <Select class="shaped-outlined demo-select-width" variant="outlined" withLeadingIcon bind:value={valueShapedOutlinedLeadingIcon} label="Leading Icon" menu$class="demo-select-width">


function create_default_slot_2$1(ctx) {
  var t0, t1, each_1_anchor, current;
  var option = new Option({
    props: {
      value: ""
    },
    $$inline: true
  });
  var each_value_1 = ctx.fruits;
  var each_blocks = [];

  for (var i = 0; i < each_value_1.length; i += 1) {
    each_blocks[i] = create_each_block_1(get_each_context_1(ctx, each_value_1, i));
  }

  var out = function out(i) {
    return transition_out(each_blocks[i], 1, 1, function () {
      each_blocks[i] = null;
    });
  };

  var block = {
    c: function create() {
      t0 = space();
      option.$$.fragment.c();
      t1 = space();

      for (var _i151 = 0; _i151 < each_blocks.length; _i151 += 1) {
        each_blocks[_i151].c();
      }

      each_1_anchor = empty();
    },
    l: function claim(nodes) {
      t0 = claim_space(nodes);
      option.$$.fragment.l(nodes);
      t1 = claim_space(nodes);

      for (var _i152 = 0; _i152 < each_blocks.length; _i152 += 1) {
        each_blocks[_i152].l(nodes);
      }

      each_1_anchor = empty();
    },
    m: function mount(target, anchor) {
      insert_dev(target, t0, anchor);
      mount_component(option, target, anchor);
      insert_dev(target, t1, anchor);

      for (var _i153 = 0; _i153 < each_blocks.length; _i153 += 1) {
        each_blocks[_i153].m(target, anchor);
      }

      insert_dev(target, each_1_anchor, anchor);
      current = true;
    },
    p: function update(changed, ctx) {
      if (changed.fruits || changed.valueShapedOutlinedLeadingIcon) {
        each_value_1 = ctx.fruits;

        var _i154;

        for (_i154 = 0; _i154 < each_value_1.length; _i154 += 1) {
          var child_ctx = get_each_context_1(ctx, each_value_1, _i154);

          if (each_blocks[_i154]) {
            each_blocks[_i154].p(changed, child_ctx);

            transition_in(each_blocks[_i154], 1);
          } else {
            each_blocks[_i154] = create_each_block_1(child_ctx);

            each_blocks[_i154].c();

            transition_in(each_blocks[_i154], 1);

            each_blocks[_i154].m(each_1_anchor.parentNode, each_1_anchor);
          }
        }

        group_outros();

        for (_i154 = each_value_1.length; _i154 < each_blocks.length; _i154 += 1) {
          out(_i154);
        }

        check_outros();
      }
    },
    i: function intro(local) {
      if (current) return;
      transition_in(option.$$.fragment, local);

      for (var _i155 = 0; _i155 < each_value_1.length; _i155 += 1) {
        transition_in(each_blocks[_i155]);
      }

      current = true;
    },
    o: function outro(local) {
      transition_out(option.$$.fragment, local);
      each_blocks = each_blocks.filter(Boolean);

      for (var _i156 = 0; _i156 < each_blocks.length; _i156 += 1) {
        transition_out(each_blocks[_i156]);
      }

      current = false;
    },
    d: function destroy(detaching) {
      if (detaching) {
        detach_dev(t0);
      }

      destroy_component(option, detaching);

      if (detaching) {
        detach_dev(t1);
      }

      destroy_each(each_blocks, detaching);

      if (detaching) {
        detach_dev(each_1_anchor);
      }
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_default_slot_2$1.name,
    type: "slot",
    source: "(323:8) <Select class=\"shaped-outlined demo-select-width\" variant=\"outlined\" withLeadingIcon bind:value={valueShapedOutlinedLeadingIcon} label=\"Leading Icon\" menu$class=\"demo-select-width\">",
    ctx: ctx
  });
  return block;
} // (338:12) <Option value={fruit} selected={valueShapedOutlinedInvalid === fruit}>


function create_default_slot_1$1(ctx) {
  var t_value = ctx.fruit + "",
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
    p: noop,
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
    source: "(338:12) <Option value={fruit} selected={valueShapedOutlinedInvalid === fruit}>",
    ctx: ctx
  });
  return block;
} // (337:10) {#each fruits as fruit}


function create_each_block(ctx) {
  var current;
  var option = new Option({
    props: {
      value: ctx.fruit,
      selected: ctx.valueShapedOutlinedInvalid === ctx.fruit,
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
      option.$$.fragment.c();
    },
    l: function claim(nodes) {
      option.$$.fragment.l(nodes);
    },
    m: function mount(target, anchor) {
      mount_component(option, target, anchor);
      current = true;
    },
    p: function update(changed, ctx) {
      var option_changes = {};
      if (changed.valueShapedOutlinedInvalid) option_changes.selected = ctx.valueShapedOutlinedInvalid === ctx.fruit;
      if (changed.$$scope) option_changes.$$scope = {
        changed: changed,
        ctx: ctx
      };
      option.$set(option_changes);
    },
    i: function intro(local) {
      if (current) return;
      transition_in(option.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(option.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      destroy_component(option, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_each_block.name,
    type: "each",
    source: "(337:10) {#each fruits as fruit}",
    ctx: ctx
  });
  return block;
} // (335:8) <Select class="shaped-outlined" variant="outlined" invalid bind:value={valueShapedOutlinedInvalid} label="Invalid">


function create_default_slot$2(ctx) {
  var t, each_1_anchor, current;
  var option = new Option({
    props: {
      value: ""
    },
    $$inline: true
  });
  var each_value = ctx.fruits;
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
      option.$$.fragment.c();
      t = space();

      for (var _i157 = 0; _i157 < each_blocks.length; _i157 += 1) {
        each_blocks[_i157].c();
      }

      each_1_anchor = empty();
    },
    l: function claim(nodes) {
      option.$$.fragment.l(nodes);
      t = claim_space(nodes);

      for (var _i158 = 0; _i158 < each_blocks.length; _i158 += 1) {
        each_blocks[_i158].l(nodes);
      }

      each_1_anchor = empty();
    },
    m: function mount(target, anchor) {
      mount_component(option, target, anchor);
      insert_dev(target, t, anchor);

      for (var _i159 = 0; _i159 < each_blocks.length; _i159 += 1) {
        each_blocks[_i159].m(target, anchor);
      }

      insert_dev(target, each_1_anchor, anchor);
      current = true;
    },
    p: function update(changed, ctx) {
      if (changed.fruits || changed.valueShapedOutlinedInvalid) {
        each_value = ctx.fruits;

        var _i160;

        for (_i160 = 0; _i160 < each_value.length; _i160 += 1) {
          var child_ctx = get_each_context(ctx, each_value, _i160);

          if (each_blocks[_i160]) {
            each_blocks[_i160].p(changed, child_ctx);

            transition_in(each_blocks[_i160], 1);
          } else {
            each_blocks[_i160] = create_each_block(child_ctx);

            each_blocks[_i160].c();

            transition_in(each_blocks[_i160], 1);

            each_blocks[_i160].m(each_1_anchor.parentNode, each_1_anchor);
          }
        }

        group_outros();

        for (_i160 = each_value.length; _i160 < each_blocks.length; _i160 += 1) {
          out(_i160);
        }

        check_outros();
      }
    },
    i: function intro(local) {
      if (current) return;
      transition_in(option.$$.fragment, local);

      for (var _i161 = 0; _i161 < each_value.length; _i161 += 1) {
        transition_in(each_blocks[_i161]);
      }

      current = true;
    },
    o: function outro(local) {
      transition_out(option.$$.fragment, local);
      each_blocks = each_blocks.filter(Boolean);

      for (var _i162 = 0; _i162 < each_blocks.length; _i162 += 1) {
        transition_out(each_blocks[_i162]);
      }

      current = false;
    },
    d: function destroy(detaching) {
      destroy_component(option, detaching);

      if (detaching) {
        detach_dev(t);
      }

      destroy_each(each_blocks, detaching);

      if (detaching) {
        detach_dev(each_1_anchor);
      }
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_default_slot$2.name,
    type: "slot",
    source: "(335:8) <Select class=\"shaped-outlined\" variant=\"outlined\" invalid bind:value={valueShapedOutlinedInvalid} label=\"Invalid\">",
    ctx: ctx
  });
  return block;
}

function create_fragment$4(ctx) {
  var t0, section, h2, t1, t2, div2, div0, updating_value, t3, pre0, t4, t5, t6, div1, updating_value_1, t7, pre1, t8, t9, t10, div9, t11, br0, t12, div8, div3, updating_value_2, t13, pre2, t14, t15, t16, div4, updating_value_3, t17, t18, pre3, t19, t20, t21, div5, updating_value_4, t22, pre4, t23, t24, t25, div6, updating_value_5, t26, pre5, t27, t28, t29, div7, updating_value_6, t30, pre6, t31, t32, t33, div16, t34, br1, t35, div15, div10, updating_value_7, t36, pre7, t37, t38, t39, div11, updating_value_8, t40, t41, pre8, t42, t43, t44, div12, updating_value_9, t45, pre9, t46, t47, t48, div13, updating_value_10, t49, pre10, t50, t51, t52, div14, updating_value_11, t53, pre11, t54, t55, t56, div23, t57, br2, t58, div22, div17, updating_value_12, t59, pre12, t60, t61, t62, div18, updating_value_13, t63, t64, pre13, t65, t66, t67, div19, updating_value_14, t68, pre14, t69, t70, t71, div20, updating_value_15, t72, pre15, t73, t74, t75, div21, updating_value_16, t76, pre16, t77, t78, t79, div30, t80, br3, t81, div29, div24, updating_value_17, t82, pre17, t83, t84, t85, div25, updating_value_18, t86, t87, pre18, t88, t89, t90, div26, updating_value_19, t91, pre19, t92, t93, t94, div27, updating_value_20, t95, pre20, t96, t97, t98, div28, updating_value_21, t99, pre21, t100, t101, t102, div37, t103, br4, t104, div36, div31, updating_value_22, t105, pre22, t106, t107, t108, div32, updating_value_23, t109, t110, pre23, t111, t112, t113, div33, updating_value_24, t114, pre24, t115, t116, t117, div34, updating_value_25, t118, pre25, t119, t120, t121, div35, updating_value_26, t122, pre26, t123, t124, current;

  function select0_value_binding(value) {
    ctx.select0_value_binding.call(null, value);
    updating_value = true;
    add_flush_callback(function () {
      return updating_value = false;
    });
  }

  var select0_props = {
    label: "Native Input",
    $$slots: {
      default: [create_default_slot_62]
    },
    $$scope: {
      ctx: ctx
    }
  };

  if (ctx.valuePrefilled !== void 0) {
    select0_props.value = ctx.valuePrefilled;
  }

  var select0 = new Select({
    props: select0_props,
    $$inline: true
  });
  binding_callbacks.push(function () {
    return bind(select0, 'value', select0_value_binding);
  });

  function select1_value_binding(value_1) {
    ctx.select1_value_binding.call(null, value_1);
    updating_value_1 = true;
    add_flush_callback(function () {
      return updating_value_1 = false;
    });
  }

  var select1_props = {
    enhanced: true,
    label: "Enhanced Input",
    class: "demo-select-width",
    menu$class: "demo-select-width",
    $$slots: {
      default: [create_default_slot_60]
    },
    $$scope: {
      ctx: ctx
    }
  };

  if (ctx.valuePrefilledEnhanced !== void 0) {
    select1_props.value = ctx.valuePrefilledEnhanced;
  }

  var select1 = new Select({
    props: select1_props,
    $$inline: true
  });
  binding_callbacks.push(function () {
    return bind(select1, 'value', select1_value_binding);
  });

  function select2_value_binding(value_2) {
    ctx.select2_value_binding.call(null, value_2);
    updating_value_2 = true;
    add_flush_callback(function () {
      return updating_value_2 = false;
    });
  }

  var select2_props = {
    label: "Fruit",
    $$slots: {
      default: [create_default_slot_58]
    },
    $$scope: {
      ctx: ctx
    }
  };

  if (ctx.valueStandard !== void 0) {
    select2_props.value = ctx.valueStandard;
  }

  var select2 = new Select({
    props: select2_props,
    $$inline: true
  });
  binding_callbacks.push(function () {
    return bind(select2, 'value', select2_value_binding);
  });

  function select3_value_binding(value_3) {
    ctx.select3_value_binding.call(null, value_3);
    updating_value_3 = true;
    add_flush_callback(function () {
      return updating_value_3 = false;
    });
  }

  var select3_props = {
    label: "With Helper Text",
    $$slots: {
      default: [create_default_slot_56]
    },
    $$scope: {
      ctx: ctx
    }
  };

  if (ctx.valueStandardHelperText !== void 0) {
    select3_props.value = ctx.valueStandardHelperText;
  }

  var select3 = new Select({
    props: select3_props,
    $$inline: true
  });
  binding_callbacks.push(function () {
    return bind(select3, 'value', select3_value_binding);
  });
  var helpertext0 = new HelperText({
    props: {
      $$slots: {
        default: [create_default_slot_55]
      },
      $$scope: {
        ctx: ctx
      }
    },
    $$inline: true
  });

  function select4_value_binding(value_4) {
    ctx.select4_value_binding.call(null, value_4);
    updating_value_4 = true;
    add_flush_callback(function () {
      return updating_value_4 = false;
    });
  }

  var select4_props = {
    enhanced: true,
    label: "Enhanced",
    class: "demo-select-width",
    menu$class: "demo-select-width",
    $$slots: {
      default: [create_default_slot_53]
    },
    $$scope: {
      ctx: ctx
    }
  };

  if (ctx.valueStandardEnhanced !== void 0) {
    select4_props.value = ctx.valueStandardEnhanced;
  }

  var select4 = new Select({
    props: select4_props,
    $$inline: true
  });
  binding_callbacks.push(function () {
    return bind(select4, 'value', select4_value_binding);
  });

  function select5_value_binding(value_5) {
    ctx.select5_value_binding.call(null, value_5);
    updating_value_5 = true;
    add_flush_callback(function () {
      return updating_value_5 = false;
    });
  }

  var select5_props = {
    withLeadingIcon: true,
    label: "Leading Icon",
    class: "demo-select-width",
    menu$class: "demo-select-width",
    $$slots: {
      default: [create_default_slot_50],
      icon: [create_icon_slot_4]
    },
    $$scope: {
      ctx: ctx
    }
  };

  if (ctx.valueStandardLeadingIcon !== void 0) {
    select5_props.value = ctx.valueStandardLeadingIcon;
  }

  var select5 = new Select({
    props: select5_props,
    $$inline: true
  });
  binding_callbacks.push(function () {
    return bind(select5, 'value', select5_value_binding);
  });

  function select6_value_binding(value_6) {
    ctx.select6_value_binding.call(null, value_6);
    updating_value_6 = true;
    add_flush_callback(function () {
      return updating_value_6 = false;
    });
  }

  var select6_props = {
    invalid: true,
    label: "Invalid",
    $$slots: {
      default: [create_default_slot_48]
    },
    $$scope: {
      ctx: ctx
    }
  };

  if (ctx.valueStandardInvalid !== void 0) {
    select6_props.value = ctx.valueStandardInvalid;
  }

  var select6 = new Select({
    props: select6_props,
    $$inline: true
  });
  binding_callbacks.push(function () {
    return bind(select6, 'value', select6_value_binding);
  });

  function select7_value_binding(value_7) {
    ctx.select7_value_binding.call(null, value_7);
    updating_value_7 = true;
    add_flush_callback(function () {
      return updating_value_7 = false;
    });
  }

  var select7_props = {
    variant: "filled",
    label: "Fruit",
    $$slots: {
      default: [create_default_slot_46]
    },
    $$scope: {
      ctx: ctx
    }
  };

  if (ctx.valueFilled !== void 0) {
    select7_props.value = ctx.valueFilled;
  }

  var select7 = new Select({
    props: select7_props,
    $$inline: true
  });
  binding_callbacks.push(function () {
    return bind(select7, 'value', select7_value_binding);
  });

  function select8_value_binding(value_8) {
    ctx.select8_value_binding.call(null, value_8);
    updating_value_8 = true;
    add_flush_callback(function () {
      return updating_value_8 = false;
    });
  }

  var select8_props = {
    variant: "filled",
    label: "With Helper Text",
    $$slots: {
      default: [create_default_slot_44]
    },
    $$scope: {
      ctx: ctx
    }
  };

  if (ctx.valueFilledHelperText !== void 0) {
    select8_props.value = ctx.valueFilledHelperText;
  }

  var select8 = new Select({
    props: select8_props,
    $$inline: true
  });
  binding_callbacks.push(function () {
    return bind(select8, 'value', select8_value_binding);
  });
  var helpertext1 = new HelperText({
    props: {
      $$slots: {
        default: [create_default_slot_43]
      },
      $$scope: {
        ctx: ctx
      }
    },
    $$inline: true
  });

  function select9_value_binding(value_9) {
    ctx.select9_value_binding.call(null, value_9);
    updating_value_9 = true;
    add_flush_callback(function () {
      return updating_value_9 = false;
    });
  }

  var select9_props = {
    variant: "filled",
    enhanced: true,
    label: "Enhanced",
    class: "demo-select-width",
    menu$class: "demo-select-width",
    $$slots: {
      default: [create_default_slot_41]
    },
    $$scope: {
      ctx: ctx
    }
  };

  if (ctx.valueFilledEnhanced !== void 0) {
    select9_props.value = ctx.valueFilledEnhanced;
  }

  var select9 = new Select({
    props: select9_props,
    $$inline: true
  });
  binding_callbacks.push(function () {
    return bind(select9, 'value', select9_value_binding);
  });

  function select10_value_binding(value_10) {
    ctx.select10_value_binding.call(null, value_10);
    updating_value_10 = true;
    add_flush_callback(function () {
      return updating_value_10 = false;
    });
  }

  var select10_props = {
    variant: "filled",
    withLeadingIcon: true,
    label: "Leading Icon",
    class: "demo-select-width",
    menu$class: "demo-select-width",
    $$slots: {
      default: [create_default_slot_38],
      icon: [create_icon_slot_3]
    },
    $$scope: {
      ctx: ctx
    }
  };

  if (ctx.valueFilledLeadingIcon !== void 0) {
    select10_props.value = ctx.valueFilledLeadingIcon;
  }

  var select10 = new Select({
    props: select10_props,
    $$inline: true
  });
  binding_callbacks.push(function () {
    return bind(select10, 'value', select10_value_binding);
  });

  function select11_value_binding(value_11) {
    ctx.select11_value_binding.call(null, value_11);
    updating_value_11 = true;
    add_flush_callback(function () {
      return updating_value_11 = false;
    });
  }

  var select11_props = {
    variant: "filled",
    invalid: true,
    label: "Invalid",
    $$slots: {
      default: [create_default_slot_36]
    },
    $$scope: {
      ctx: ctx
    }
  };

  if (ctx.valueFilledInvalid !== void 0) {
    select11_props.value = ctx.valueFilledInvalid;
  }

  var select11 = new Select({
    props: select11_props,
    $$inline: true
  });
  binding_callbacks.push(function () {
    return bind(select11, 'value', select11_value_binding);
  });

  function select12_value_binding(value_12) {
    ctx.select12_value_binding.call(null, value_12);
    updating_value_12 = true;
    add_flush_callback(function () {
      return updating_value_12 = false;
    });
  }

  var select12_props = {
    variant: "outlined",
    label: "Fruit",
    $$slots: {
      default: [create_default_slot_34]
    },
    $$scope: {
      ctx: ctx
    }
  };

  if (ctx.valueOutlined !== void 0) {
    select12_props.value = ctx.valueOutlined;
  }

  var select12 = new Select({
    props: select12_props,
    $$inline: true
  });
  binding_callbacks.push(function () {
    return bind(select12, 'value', select12_value_binding);
  });

  function select13_value_binding(value_13) {
    ctx.select13_value_binding.call(null, value_13);
    updating_value_13 = true;
    add_flush_callback(function () {
      return updating_value_13 = false;
    });
  }

  var select13_props = {
    variant: "outlined",
    label: "With Helper Text",
    $$slots: {
      default: [create_default_slot_32]
    },
    $$scope: {
      ctx: ctx
    }
  };

  if (ctx.valueOutlinedHelperText !== void 0) {
    select13_props.value = ctx.valueOutlinedHelperText;
  }

  var select13 = new Select({
    props: select13_props,
    $$inline: true
  });
  binding_callbacks.push(function () {
    return bind(select13, 'value', select13_value_binding);
  });
  var helpertext2 = new HelperText({
    props: {
      $$slots: {
        default: [create_default_slot_31]
      },
      $$scope: {
        ctx: ctx
      }
    },
    $$inline: true
  });

  function select14_value_binding(value_14) {
    ctx.select14_value_binding.call(null, value_14);
    updating_value_14 = true;
    add_flush_callback(function () {
      return updating_value_14 = false;
    });
  }

  var select14_props = {
    variant: "outlined",
    enhanced: true,
    label: "Enhanced",
    class: "demo-select-width",
    menu$class: "demo-select-width",
    $$slots: {
      default: [create_default_slot_29]
    },
    $$scope: {
      ctx: ctx
    }
  };

  if (ctx.valueOutlinedEnhanced !== void 0) {
    select14_props.value = ctx.valueOutlinedEnhanced;
  }

  var select14 = new Select({
    props: select14_props,
    $$inline: true
  });
  binding_callbacks.push(function () {
    return bind(select14, 'value', select14_value_binding);
  });

  function select15_value_binding(value_15) {
    ctx.select15_value_binding.call(null, value_15);
    updating_value_15 = true;
    add_flush_callback(function () {
      return updating_value_15 = false;
    });
  }

  var select15_props = {
    variant: "outlined",
    withLeadingIcon: true,
    label: "Leading Icon",
    class: "demo-select-width",
    menu$class: "demo-select-width",
    $$slots: {
      default: [create_default_slot_26],
      icon: [create_icon_slot_2]
    },
    $$scope: {
      ctx: ctx
    }
  };

  if (ctx.valueOutlinedLeadingIcon !== void 0) {
    select15_props.value = ctx.valueOutlinedLeadingIcon;
  }

  var select15 = new Select({
    props: select15_props,
    $$inline: true
  });
  binding_callbacks.push(function () {
    return bind(select15, 'value', select15_value_binding);
  });

  function select16_value_binding(value_16) {
    ctx.select16_value_binding.call(null, value_16);
    updating_value_16 = true;
    add_flush_callback(function () {
      return updating_value_16 = false;
    });
  }

  var select16_props = {
    variant: "outlined",
    invalid: true,
    label: "Invalid",
    $$slots: {
      default: [create_default_slot_24]
    },
    $$scope: {
      ctx: ctx
    }
  };

  if (ctx.valueOutlinedInvalid !== void 0) {
    select16_props.value = ctx.valueOutlinedInvalid;
  }

  var select16 = new Select({
    props: select16_props,
    $$inline: true
  });
  binding_callbacks.push(function () {
    return bind(select16, 'value', select16_value_binding);
  });

  function select17_value_binding(value_17) {
    ctx.select17_value_binding.call(null, value_17);
    updating_value_17 = true;
    add_flush_callback(function () {
      return updating_value_17 = false;
    });
  }

  var select17_props = {
    class: "shaped",
    variant: "filled",
    label: "Fruit",
    $$slots: {
      default: [create_default_slot_22]
    },
    $$scope: {
      ctx: ctx
    }
  };

  if (ctx.valueShapedFilled !== void 0) {
    select17_props.value = ctx.valueShapedFilled;
  }

  var select17 = new Select({
    props: select17_props,
    $$inline: true
  });
  binding_callbacks.push(function () {
    return bind(select17, 'value', select17_value_binding);
  });

  function select18_value_binding(value_18) {
    ctx.select18_value_binding.call(null, value_18);
    updating_value_18 = true;
    add_flush_callback(function () {
      return updating_value_18 = false;
    });
  }

  var select18_props = {
    class: "shaped",
    variant: "filled",
    label: "With Helper Text",
    $$slots: {
      default: [create_default_slot_20]
    },
    $$scope: {
      ctx: ctx
    }
  };

  if (ctx.valueShapedFilledHelperText !== void 0) {
    select18_props.value = ctx.valueShapedFilledHelperText;
  }

  var select18 = new Select({
    props: select18_props,
    $$inline: true
  });
  binding_callbacks.push(function () {
    return bind(select18, 'value', select18_value_binding);
  });
  var helpertext3 = new HelperText({
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

  function select19_value_binding(value_19) {
    ctx.select19_value_binding.call(null, value_19);
    updating_value_19 = true;
    add_flush_callback(function () {
      return updating_value_19 = false;
    });
  }

  var select19_props = {
    class: "shaped demo-select-width",
    variant: "filled",
    enhanced: true,
    label: "Enhanced",
    menu$class: "demo-select-width",
    $$slots: {
      default: [create_default_slot_17]
    },
    $$scope: {
      ctx: ctx
    }
  };

  if (ctx.valueShapedFilledEnhanced !== void 0) {
    select19_props.value = ctx.valueShapedFilledEnhanced;
  }

  var select19 = new Select({
    props: select19_props,
    $$inline: true
  });
  binding_callbacks.push(function () {
    return bind(select19, 'value', select19_value_binding);
  });

  function select20_value_binding(value_20) {
    ctx.select20_value_binding.call(null, value_20);
    updating_value_20 = true;
    add_flush_callback(function () {
      return updating_value_20 = false;
    });
  }

  var select20_props = {
    class: "shaped demo-select-width",
    variant: "filled",
    withLeadingIcon: true,
    label: "Leading Icon",
    menu$class: "demo-select-width",
    $$slots: {
      default: [create_default_slot_14],
      icon: [create_icon_slot_1]
    },
    $$scope: {
      ctx: ctx
    }
  };

  if (ctx.valueShapedFilledLeadingIcon !== void 0) {
    select20_props.value = ctx.valueShapedFilledLeadingIcon;
  }

  var select20 = new Select({
    props: select20_props,
    $$inline: true
  });
  binding_callbacks.push(function () {
    return bind(select20, 'value', select20_value_binding);
  });

  function select21_value_binding(value_21) {
    ctx.select21_value_binding.call(null, value_21);
    updating_value_21 = true;
    add_flush_callback(function () {
      return updating_value_21 = false;
    });
  }

  var select21_props = {
    class: "shaped",
    variant: "filled",
    invalid: true,
    label: "Invalid",
    $$slots: {
      default: [create_default_slot_12]
    },
    $$scope: {
      ctx: ctx
    }
  };

  if (ctx.valueShapedFilledInvalid !== void 0) {
    select21_props.value = ctx.valueShapedFilledInvalid;
  }

  var select21 = new Select({
    props: select21_props,
    $$inline: true
  });
  binding_callbacks.push(function () {
    return bind(select21, 'value', select21_value_binding);
  });

  function select22_value_binding(value_22) {
    ctx.select22_value_binding.call(null, value_22);
    updating_value_22 = true;
    add_flush_callback(function () {
      return updating_value_22 = false;
    });
  }

  var select22_props = {
    class: "shaped-outlined",
    variant: "outlined",
    label: "Fruit",
    $$slots: {
      default: [create_default_slot_10]
    },
    $$scope: {
      ctx: ctx
    }
  };

  if (ctx.valueShapedOutlined !== void 0) {
    select22_props.value = ctx.valueShapedOutlined;
  }

  var select22 = new Select({
    props: select22_props,
    $$inline: true
  });
  binding_callbacks.push(function () {
    return bind(select22, 'value', select22_value_binding);
  });

  function select23_value_binding(value_23) {
    ctx.select23_value_binding.call(null, value_23);
    updating_value_23 = true;
    add_flush_callback(function () {
      return updating_value_23 = false;
    });
  }

  var select23_props = {
    class: "shaped-outlined",
    variant: "outlined",
    label: "With Helper Text",
    $$slots: {
      default: [create_default_slot_8]
    },
    $$scope: {
      ctx: ctx
    }
  };

  if (ctx.valueShapedOutlinedHelperText !== void 0) {
    select23_props.value = ctx.valueShapedOutlinedHelperText;
  }

  var select23 = new Select({
    props: select23_props,
    $$inline: true
  });
  binding_callbacks.push(function () {
    return bind(select23, 'value', select23_value_binding);
  });
  var helpertext4 = new HelperText({
    props: {
      $$slots: {
        default: [create_default_slot_7]
      },
      $$scope: {
        ctx: ctx
      }
    },
    $$inline: true
  });

  function select24_value_binding(value_24) {
    ctx.select24_value_binding.call(null, value_24);
    updating_value_24 = true;
    add_flush_callback(function () {
      return updating_value_24 = false;
    });
  }

  var select24_props = {
    class: "shaped-outlined demo-select-width",
    variant: "outlined",
    enhanced: true,
    label: "Enhanced",
    menu$class: "demo-select-width",
    $$slots: {
      default: [create_default_slot_5]
    },
    $$scope: {
      ctx: ctx
    }
  };

  if (ctx.valueShapedOutlinedEnhanced !== void 0) {
    select24_props.value = ctx.valueShapedOutlinedEnhanced;
  }

  var select24 = new Select({
    props: select24_props,
    $$inline: true
  });
  binding_callbacks.push(function () {
    return bind(select24, 'value', select24_value_binding);
  });

  function select25_value_binding(value_25) {
    ctx.select25_value_binding.call(null, value_25);
    updating_value_25 = true;
    add_flush_callback(function () {
      return updating_value_25 = false;
    });
  }

  var select25_props = {
    class: "shaped-outlined demo-select-width",
    variant: "outlined",
    withLeadingIcon: true,
    label: "Leading Icon",
    menu$class: "demo-select-width",
    $$slots: {
      default: [create_default_slot_2$1],
      icon: [create_icon_slot]
    },
    $$scope: {
      ctx: ctx
    }
  };

  if (ctx.valueShapedOutlinedLeadingIcon !== void 0) {
    select25_props.value = ctx.valueShapedOutlinedLeadingIcon;
  }

  var select25 = new Select({
    props: select25_props,
    $$inline: true
  });
  binding_callbacks.push(function () {
    return bind(select25, 'value', select25_value_binding);
  });

  function select26_value_binding(value_26) {
    ctx.select26_value_binding.call(null, value_26);
    updating_value_26 = true;
    add_flush_callback(function () {
      return updating_value_26 = false;
    });
  }

  var select26_props = {
    class: "shaped-outlined",
    variant: "outlined",
    invalid: true,
    label: "Invalid",
    $$slots: {
      default: [create_default_slot$2]
    },
    $$scope: {
      ctx: ctx
    }
  };

  if (ctx.valueShapedOutlinedInvalid !== void 0) {
    select26_props.value = ctx.valueShapedOutlinedInvalid;
  }

  var select26 = new Select({
    props: select26_props,
    $$inline: true
  });
  binding_callbacks.push(function () {
    return bind(select26, 'value', select26_value_binding);
  });
  var block = {
    c: function create() {
      t0 = space();
      section = element("section");
      h2 = element("h2");
      t1 = text("Select");
      t2 = space();
      div2 = element("div");
      div0 = element("div");
      select0.$$.fragment.c();
      t3 = space();
      pre0 = element("pre");
      t4 = text("Selected: ");
      t5 = text(ctx.valuePrefilled);
      t6 = space();
      div1 = element("div");
      select1.$$.fragment.c();
      t7 = space();
      pre1 = element("pre");
      t8 = text("Selected: ");
      t9 = text(ctx.valuePrefilledEnhanced);
      t10 = space();
      div9 = element("div");
      t11 = text("Standard:");
      br0 = element("br");
      t12 = space();
      div8 = element("div");
      div3 = element("div");
      select2.$$.fragment.c();
      t13 = space();
      pre2 = element("pre");
      t14 = text("Selected: ");
      t15 = text(ctx.valueStandard);
      t16 = space();
      div4 = element("div");
      select3.$$.fragment.c();
      t17 = space();
      helpertext0.$$.fragment.c();
      t18 = space();
      pre3 = element("pre");
      t19 = text("Selected: ");
      t20 = text(ctx.valueStandardHelperText);
      t21 = space();
      div5 = element("div");
      select4.$$.fragment.c();
      t22 = space();
      pre4 = element("pre");
      t23 = text("Selected: ");
      t24 = text(ctx.valueStandardEnhanced);
      t25 = space();
      div6 = element("div");
      select5.$$.fragment.c();
      t26 = space();
      pre5 = element("pre");
      t27 = text("Selected: ");
      t28 = text(ctx.valueStandardLeadingIcon);
      t29 = space();
      div7 = element("div");
      select6.$$.fragment.c();
      t30 = space();
      pre6 = element("pre");
      t31 = text("Selected: ");
      t32 = text(ctx.valueStandardInvalid);
      t33 = space();
      div16 = element("div");
      t34 = text("Filled:");
      br1 = element("br");
      t35 = space();
      div15 = element("div");
      div10 = element("div");
      select7.$$.fragment.c();
      t36 = space();
      pre7 = element("pre");
      t37 = text("Selected: ");
      t38 = text(ctx.valueFilled);
      t39 = space();
      div11 = element("div");
      select8.$$.fragment.c();
      t40 = space();
      helpertext1.$$.fragment.c();
      t41 = space();
      pre8 = element("pre");
      t42 = text("Selected: ");
      t43 = text(ctx.valueFilledHelperText);
      t44 = space();
      div12 = element("div");
      select9.$$.fragment.c();
      t45 = space();
      pre9 = element("pre");
      t46 = text("Selected: ");
      t47 = text(ctx.valueFilledEnhanced);
      t48 = space();
      div13 = element("div");
      select10.$$.fragment.c();
      t49 = space();
      pre10 = element("pre");
      t50 = text("Selected: ");
      t51 = text(ctx.valueFilledLeadingIcon);
      t52 = space();
      div14 = element("div");
      select11.$$.fragment.c();
      t53 = space();
      pre11 = element("pre");
      t54 = text("Selected: ");
      t55 = text(ctx.valueFilledInvalid);
      t56 = space();
      div23 = element("div");
      t57 = text("Outlined:");
      br2 = element("br");
      t58 = space();
      div22 = element("div");
      div17 = element("div");
      select12.$$.fragment.c();
      t59 = space();
      pre12 = element("pre");
      t60 = text("Selected: ");
      t61 = text(ctx.valueOutlined);
      t62 = space();
      div18 = element("div");
      select13.$$.fragment.c();
      t63 = space();
      helpertext2.$$.fragment.c();
      t64 = space();
      pre13 = element("pre");
      t65 = text("Selected: ");
      t66 = text(ctx.valueOutlinedHelperText);
      t67 = space();
      div19 = element("div");
      select14.$$.fragment.c();
      t68 = space();
      pre14 = element("pre");
      t69 = text("Selected: ");
      t70 = text(ctx.valueOutlinedEnhanced);
      t71 = space();
      div20 = element("div");
      select15.$$.fragment.c();
      t72 = space();
      pre15 = element("pre");
      t73 = text("Selected: ");
      t74 = text(ctx.valueOutlinedLeadingIcon);
      t75 = space();
      div21 = element("div");
      select16.$$.fragment.c();
      t76 = space();
      pre16 = element("pre");
      t77 = text("Selected: ");
      t78 = text(ctx.valueOutlinedInvalid);
      t79 = space();
      div30 = element("div");
      t80 = text("Shaped Filled:");
      br3 = element("br");
      t81 = space();
      div29 = element("div");
      div24 = element("div");
      select17.$$.fragment.c();
      t82 = space();
      pre17 = element("pre");
      t83 = text("Selected: ");
      t84 = text(ctx.valueShapedFilled);
      t85 = space();
      div25 = element("div");
      select18.$$.fragment.c();
      t86 = space();
      helpertext3.$$.fragment.c();
      t87 = space();
      pre18 = element("pre");
      t88 = text("Selected: ");
      t89 = text(ctx.valueShapedFilledHelperText);
      t90 = space();
      div26 = element("div");
      select19.$$.fragment.c();
      t91 = space();
      pre19 = element("pre");
      t92 = text("Selected: ");
      t93 = text(ctx.valueShapedFilledEnhanced);
      t94 = space();
      div27 = element("div");
      select20.$$.fragment.c();
      t95 = space();
      pre20 = element("pre");
      t96 = text("Selected: ");
      t97 = text(ctx.valueShapedFilledLeadingIcon);
      t98 = space();
      div28 = element("div");
      select21.$$.fragment.c();
      t99 = space();
      pre21 = element("pre");
      t100 = text("Selected: ");
      t101 = text(ctx.valueShapedFilledInvalid);
      t102 = space();
      div37 = element("div");
      t103 = text("Shaped Outlined:");
      br4 = element("br");
      t104 = space();
      div36 = element("div");
      div31 = element("div");
      select22.$$.fragment.c();
      t105 = space();
      pre22 = element("pre");
      t106 = text("Selected: ");
      t107 = text(ctx.valueShapedOutlined);
      t108 = space();
      div32 = element("div");
      select23.$$.fragment.c();
      t109 = space();
      helpertext4.$$.fragment.c();
      t110 = space();
      pre23 = element("pre");
      t111 = text("Selected: ");
      t112 = text(ctx.valueShapedOutlinedHelperText);
      t113 = space();
      div33 = element("div");
      select24.$$.fragment.c();
      t114 = space();
      pre24 = element("pre");
      t115 = text("Selected: ");
      t116 = text(ctx.valueShapedOutlinedEnhanced);
      t117 = space();
      div34 = element("div");
      select25.$$.fragment.c();
      t118 = space();
      pre25 = element("pre");
      t119 = text("Selected: ");
      t120 = text(ctx.valueShapedOutlinedLeadingIcon);
      t121 = space();
      div35 = element("div");
      select26.$$.fragment.c();
      t122 = space();
      pre26 = element("pre");
      t123 = text("Selected: ");
      t124 = text(ctx.valueShapedOutlinedInvalid);
      this.h();
    },
    l: function claim(nodes) {
      t0 = claim_space(nodes);
      section = claim_element(nodes, "SECTION", {
        class: true
      }, false);
      var section_nodes = children(section);
      h2 = claim_element(section_nodes, "H2", {
        class: true
      }, false);
      var h2_nodes = children(h2);
      t1 = claim_text(h2_nodes, "Select");
      h2_nodes.forEach(detach_dev);
      t2 = claim_space(section_nodes);
      div2 = claim_element(section_nodes, "DIV", {
        class: true,
        style: true
      }, false);
      var div2_nodes = children(div2);
      div0 = claim_element(div2_nodes, "DIV", {
        class: true
      }, false);
      var div0_nodes = children(div0);
      select0.$$.fragment.l(div0_nodes);
      t3 = claim_space(div0_nodes);
      pre0 = claim_element(div0_nodes, "PRE", {
        class: true
      }, false);
      var pre0_nodes = children(pre0);
      t4 = claim_text(pre0_nodes, "Selected: ");
      t5 = claim_text(pre0_nodes, ctx.valuePrefilled);
      pre0_nodes.forEach(detach_dev);
      div0_nodes.forEach(detach_dev);
      t6 = claim_space(div2_nodes);
      div1 = claim_element(div2_nodes, "DIV", {
        class: true
      }, false);
      var div1_nodes = children(div1);
      select1.$$.fragment.l(div1_nodes);
      t7 = claim_space(div1_nodes);
      pre1 = claim_element(div1_nodes, "PRE", {
        class: true
      }, false);
      var pre1_nodes = children(pre1);
      t8 = claim_text(pre1_nodes, "Selected: ");
      t9 = claim_text(pre1_nodes, ctx.valuePrefilledEnhanced);
      pre1_nodes.forEach(detach_dev);
      div1_nodes.forEach(detach_dev);
      div2_nodes.forEach(detach_dev);
      t10 = claim_space(section_nodes);
      div9 = claim_element(section_nodes, "DIV", {
        class: true
      }, false);
      var div9_nodes = children(div9);
      t11 = claim_text(div9_nodes, "Standard:");
      br0 = claim_element(div9_nodes, "BR", {
        class: true
      }, false);
      var br0_nodes = children(br0);
      br0_nodes.forEach(detach_dev);
      t12 = claim_space(div9_nodes);
      div8 = claim_element(div9_nodes, "DIV", {
        class: true
      }, false);
      var div8_nodes = children(div8);
      div3 = claim_element(div8_nodes, "DIV", {
        class: true
      }, false);
      var div3_nodes = children(div3);
      select2.$$.fragment.l(div3_nodes);
      t13 = claim_space(div3_nodes);
      pre2 = claim_element(div3_nodes, "PRE", {
        class: true
      }, false);
      var pre2_nodes = children(pre2);
      t14 = claim_text(pre2_nodes, "Selected: ");
      t15 = claim_text(pre2_nodes, ctx.valueStandard);
      pre2_nodes.forEach(detach_dev);
      div3_nodes.forEach(detach_dev);
      t16 = claim_space(div8_nodes);
      div4 = claim_element(div8_nodes, "DIV", {
        class: true
      }, false);
      var div4_nodes = children(div4);
      select3.$$.fragment.l(div4_nodes);
      t17 = claim_space(div4_nodes);
      helpertext0.$$.fragment.l(div4_nodes);
      t18 = claim_space(div4_nodes);
      pre3 = claim_element(div4_nodes, "PRE", {
        class: true
      }, false);
      var pre3_nodes = children(pre3);
      t19 = claim_text(pre3_nodes, "Selected: ");
      t20 = claim_text(pre3_nodes, ctx.valueStandardHelperText);
      pre3_nodes.forEach(detach_dev);
      div4_nodes.forEach(detach_dev);
      t21 = claim_space(div8_nodes);
      div5 = claim_element(div8_nodes, "DIV", {
        class: true
      }, false);
      var div5_nodes = children(div5);
      select4.$$.fragment.l(div5_nodes);
      t22 = claim_space(div5_nodes);
      pre4 = claim_element(div5_nodes, "PRE", {
        class: true
      }, false);
      var pre4_nodes = children(pre4);
      t23 = claim_text(pre4_nodes, "Selected: ");
      t24 = claim_text(pre4_nodes, ctx.valueStandardEnhanced);
      pre4_nodes.forEach(detach_dev);
      div5_nodes.forEach(detach_dev);
      t25 = claim_space(div8_nodes);
      div6 = claim_element(div8_nodes, "DIV", {
        class: true
      }, false);
      var div6_nodes = children(div6);
      select5.$$.fragment.l(div6_nodes);
      t26 = claim_space(div6_nodes);
      pre5 = claim_element(div6_nodes, "PRE", {
        class: true
      }, false);
      var pre5_nodes = children(pre5);
      t27 = claim_text(pre5_nodes, "Selected: ");
      t28 = claim_text(pre5_nodes, ctx.valueStandardLeadingIcon);
      pre5_nodes.forEach(detach_dev);
      div6_nodes.forEach(detach_dev);
      t29 = claim_space(div8_nodes);
      div7 = claim_element(div8_nodes, "DIV", {
        class: true
      }, false);
      var div7_nodes = children(div7);
      select6.$$.fragment.l(div7_nodes);
      t30 = claim_space(div7_nodes);
      pre6 = claim_element(div7_nodes, "PRE", {
        class: true
      }, false);
      var pre6_nodes = children(pre6);
      t31 = claim_text(pre6_nodes, "Selected: ");
      t32 = claim_text(pre6_nodes, ctx.valueStandardInvalid);
      pre6_nodes.forEach(detach_dev);
      div7_nodes.forEach(detach_dev);
      div8_nodes.forEach(detach_dev);
      div9_nodes.forEach(detach_dev);
      t33 = claim_space(section_nodes);
      div16 = claim_element(section_nodes, "DIV", {
        class: true
      }, false);
      var div16_nodes = children(div16);
      t34 = claim_text(div16_nodes, "Filled:");
      br1 = claim_element(div16_nodes, "BR", {
        class: true
      }, false);
      var br1_nodes = children(br1);
      br1_nodes.forEach(detach_dev);
      t35 = claim_space(div16_nodes);
      div15 = claim_element(div16_nodes, "DIV", {
        class: true
      }, false);
      var div15_nodes = children(div15);
      div10 = claim_element(div15_nodes, "DIV", {
        class: true
      }, false);
      var div10_nodes = children(div10);
      select7.$$.fragment.l(div10_nodes);
      t36 = claim_space(div10_nodes);
      pre7 = claim_element(div10_nodes, "PRE", {
        class: true
      }, false);
      var pre7_nodes = children(pre7);
      t37 = claim_text(pre7_nodes, "Selected: ");
      t38 = claim_text(pre7_nodes, ctx.valueFilled);
      pre7_nodes.forEach(detach_dev);
      div10_nodes.forEach(detach_dev);
      t39 = claim_space(div15_nodes);
      div11 = claim_element(div15_nodes, "DIV", {
        class: true
      }, false);
      var div11_nodes = children(div11);
      select8.$$.fragment.l(div11_nodes);
      t40 = claim_space(div11_nodes);
      helpertext1.$$.fragment.l(div11_nodes);
      t41 = claim_space(div11_nodes);
      pre8 = claim_element(div11_nodes, "PRE", {
        class: true
      }, false);
      var pre8_nodes = children(pre8);
      t42 = claim_text(pre8_nodes, "Selected: ");
      t43 = claim_text(pre8_nodes, ctx.valueFilledHelperText);
      pre8_nodes.forEach(detach_dev);
      div11_nodes.forEach(detach_dev);
      t44 = claim_space(div15_nodes);
      div12 = claim_element(div15_nodes, "DIV", {
        class: true
      }, false);
      var div12_nodes = children(div12);
      select9.$$.fragment.l(div12_nodes);
      t45 = claim_space(div12_nodes);
      pre9 = claim_element(div12_nodes, "PRE", {
        class: true
      }, false);
      var pre9_nodes = children(pre9);
      t46 = claim_text(pre9_nodes, "Selected: ");
      t47 = claim_text(pre9_nodes, ctx.valueFilledEnhanced);
      pre9_nodes.forEach(detach_dev);
      div12_nodes.forEach(detach_dev);
      t48 = claim_space(div15_nodes);
      div13 = claim_element(div15_nodes, "DIV", {
        class: true
      }, false);
      var div13_nodes = children(div13);
      select10.$$.fragment.l(div13_nodes);
      t49 = claim_space(div13_nodes);
      pre10 = claim_element(div13_nodes, "PRE", {
        class: true
      }, false);
      var pre10_nodes = children(pre10);
      t50 = claim_text(pre10_nodes, "Selected: ");
      t51 = claim_text(pre10_nodes, ctx.valueFilledLeadingIcon);
      pre10_nodes.forEach(detach_dev);
      div13_nodes.forEach(detach_dev);
      t52 = claim_space(div15_nodes);
      div14 = claim_element(div15_nodes, "DIV", {
        class: true
      }, false);
      var div14_nodes = children(div14);
      select11.$$.fragment.l(div14_nodes);
      t53 = claim_space(div14_nodes);
      pre11 = claim_element(div14_nodes, "PRE", {
        class: true
      }, false);
      var pre11_nodes = children(pre11);
      t54 = claim_text(pre11_nodes, "Selected: ");
      t55 = claim_text(pre11_nodes, ctx.valueFilledInvalid);
      pre11_nodes.forEach(detach_dev);
      div14_nodes.forEach(detach_dev);
      div15_nodes.forEach(detach_dev);
      div16_nodes.forEach(detach_dev);
      t56 = claim_space(section_nodes);
      div23 = claim_element(section_nodes, "DIV", {
        class: true
      }, false);
      var div23_nodes = children(div23);
      t57 = claim_text(div23_nodes, "Outlined:");
      br2 = claim_element(div23_nodes, "BR", {
        class: true
      }, false);
      var br2_nodes = children(br2);
      br2_nodes.forEach(detach_dev);
      t58 = claim_space(div23_nodes);
      div22 = claim_element(div23_nodes, "DIV", {
        class: true
      }, false);
      var div22_nodes = children(div22);
      div17 = claim_element(div22_nodes, "DIV", {
        class: true
      }, false);
      var div17_nodes = children(div17);
      select12.$$.fragment.l(div17_nodes);
      t59 = claim_space(div17_nodes);
      pre12 = claim_element(div17_nodes, "PRE", {
        class: true
      }, false);
      var pre12_nodes = children(pre12);
      t60 = claim_text(pre12_nodes, "Selected: ");
      t61 = claim_text(pre12_nodes, ctx.valueOutlined);
      pre12_nodes.forEach(detach_dev);
      div17_nodes.forEach(detach_dev);
      t62 = claim_space(div22_nodes);
      div18 = claim_element(div22_nodes, "DIV", {
        class: true
      }, false);
      var div18_nodes = children(div18);
      select13.$$.fragment.l(div18_nodes);
      t63 = claim_space(div18_nodes);
      helpertext2.$$.fragment.l(div18_nodes);
      t64 = claim_space(div18_nodes);
      pre13 = claim_element(div18_nodes, "PRE", {
        class: true
      }, false);
      var pre13_nodes = children(pre13);
      t65 = claim_text(pre13_nodes, "Selected: ");
      t66 = claim_text(pre13_nodes, ctx.valueOutlinedHelperText);
      pre13_nodes.forEach(detach_dev);
      div18_nodes.forEach(detach_dev);
      t67 = claim_space(div22_nodes);
      div19 = claim_element(div22_nodes, "DIV", {
        class: true
      }, false);
      var div19_nodes = children(div19);
      select14.$$.fragment.l(div19_nodes);
      t68 = claim_space(div19_nodes);
      pre14 = claim_element(div19_nodes, "PRE", {
        class: true
      }, false);
      var pre14_nodes = children(pre14);
      t69 = claim_text(pre14_nodes, "Selected: ");
      t70 = claim_text(pre14_nodes, ctx.valueOutlinedEnhanced);
      pre14_nodes.forEach(detach_dev);
      div19_nodes.forEach(detach_dev);
      t71 = claim_space(div22_nodes);
      div20 = claim_element(div22_nodes, "DIV", {
        class: true
      }, false);
      var div20_nodes = children(div20);
      select15.$$.fragment.l(div20_nodes);
      t72 = claim_space(div20_nodes);
      pre15 = claim_element(div20_nodes, "PRE", {
        class: true
      }, false);
      var pre15_nodes = children(pre15);
      t73 = claim_text(pre15_nodes, "Selected: ");
      t74 = claim_text(pre15_nodes, ctx.valueOutlinedLeadingIcon);
      pre15_nodes.forEach(detach_dev);
      div20_nodes.forEach(detach_dev);
      t75 = claim_space(div22_nodes);
      div21 = claim_element(div22_nodes, "DIV", {
        class: true
      }, false);
      var div21_nodes = children(div21);
      select16.$$.fragment.l(div21_nodes);
      t76 = claim_space(div21_nodes);
      pre16 = claim_element(div21_nodes, "PRE", {
        class: true
      }, false);
      var pre16_nodes = children(pre16);
      t77 = claim_text(pre16_nodes, "Selected: ");
      t78 = claim_text(pre16_nodes, ctx.valueOutlinedInvalid);
      pre16_nodes.forEach(detach_dev);
      div21_nodes.forEach(detach_dev);
      div22_nodes.forEach(detach_dev);
      div23_nodes.forEach(detach_dev);
      t79 = claim_space(section_nodes);
      div30 = claim_element(section_nodes, "DIV", {
        class: true
      }, false);
      var div30_nodes = children(div30);
      t80 = claim_text(div30_nodes, "Shaped Filled:");
      br3 = claim_element(div30_nodes, "BR", {
        class: true
      }, false);
      var br3_nodes = children(br3);
      br3_nodes.forEach(detach_dev);
      t81 = claim_space(div30_nodes);
      div29 = claim_element(div30_nodes, "DIV", {
        class: true
      }, false);
      var div29_nodes = children(div29);
      div24 = claim_element(div29_nodes, "DIV", {
        class: true
      }, false);
      var div24_nodes = children(div24);
      select17.$$.fragment.l(div24_nodes);
      t82 = claim_space(div24_nodes);
      pre17 = claim_element(div24_nodes, "PRE", {
        class: true
      }, false);
      var pre17_nodes = children(pre17);
      t83 = claim_text(pre17_nodes, "Selected: ");
      t84 = claim_text(pre17_nodes, ctx.valueShapedFilled);
      pre17_nodes.forEach(detach_dev);
      div24_nodes.forEach(detach_dev);
      t85 = claim_space(div29_nodes);
      div25 = claim_element(div29_nodes, "DIV", {
        class: true
      }, false);
      var div25_nodes = children(div25);
      select18.$$.fragment.l(div25_nodes);
      t86 = claim_space(div25_nodes);
      helpertext3.$$.fragment.l(div25_nodes);
      t87 = claim_space(div25_nodes);
      pre18 = claim_element(div25_nodes, "PRE", {
        class: true
      }, false);
      var pre18_nodes = children(pre18);
      t88 = claim_text(pre18_nodes, "Selected: ");
      t89 = claim_text(pre18_nodes, ctx.valueShapedFilledHelperText);
      pre18_nodes.forEach(detach_dev);
      div25_nodes.forEach(detach_dev);
      t90 = claim_space(div29_nodes);
      div26 = claim_element(div29_nodes, "DIV", {
        class: true
      }, false);
      var div26_nodes = children(div26);
      select19.$$.fragment.l(div26_nodes);
      t91 = claim_space(div26_nodes);
      pre19 = claim_element(div26_nodes, "PRE", {
        class: true
      }, false);
      var pre19_nodes = children(pre19);
      t92 = claim_text(pre19_nodes, "Selected: ");
      t93 = claim_text(pre19_nodes, ctx.valueShapedFilledEnhanced);
      pre19_nodes.forEach(detach_dev);
      div26_nodes.forEach(detach_dev);
      t94 = claim_space(div29_nodes);
      div27 = claim_element(div29_nodes, "DIV", {
        class: true
      }, false);
      var div27_nodes = children(div27);
      select20.$$.fragment.l(div27_nodes);
      t95 = claim_space(div27_nodes);
      pre20 = claim_element(div27_nodes, "PRE", {
        class: true
      }, false);
      var pre20_nodes = children(pre20);
      t96 = claim_text(pre20_nodes, "Selected: ");
      t97 = claim_text(pre20_nodes, ctx.valueShapedFilledLeadingIcon);
      pre20_nodes.forEach(detach_dev);
      div27_nodes.forEach(detach_dev);
      t98 = claim_space(div29_nodes);
      div28 = claim_element(div29_nodes, "DIV", {
        class: true
      }, false);
      var div28_nodes = children(div28);
      select21.$$.fragment.l(div28_nodes);
      t99 = claim_space(div28_nodes);
      pre21 = claim_element(div28_nodes, "PRE", {
        class: true
      }, false);
      var pre21_nodes = children(pre21);
      t100 = claim_text(pre21_nodes, "Selected: ");
      t101 = claim_text(pre21_nodes, ctx.valueShapedFilledInvalid);
      pre21_nodes.forEach(detach_dev);
      div28_nodes.forEach(detach_dev);
      div29_nodes.forEach(detach_dev);
      div30_nodes.forEach(detach_dev);
      t102 = claim_space(section_nodes);
      div37 = claim_element(section_nodes, "DIV", {
        class: true
      }, false);
      var div37_nodes = children(div37);
      t103 = claim_text(div37_nodes, "Shaped Outlined:");
      br4 = claim_element(div37_nodes, "BR", {
        class: true
      }, false);
      var br4_nodes = children(br4);
      br4_nodes.forEach(detach_dev);
      t104 = claim_space(div37_nodes);
      div36 = claim_element(div37_nodes, "DIV", {
        class: true
      }, false);
      var div36_nodes = children(div36);
      div31 = claim_element(div36_nodes, "DIV", {
        class: true
      }, false);
      var div31_nodes = children(div31);
      select22.$$.fragment.l(div31_nodes);
      t105 = claim_space(div31_nodes);
      pre22 = claim_element(div31_nodes, "PRE", {
        class: true
      }, false);
      var pre22_nodes = children(pre22);
      t106 = claim_text(pre22_nodes, "Selected: ");
      t107 = claim_text(pre22_nodes, ctx.valueShapedOutlined);
      pre22_nodes.forEach(detach_dev);
      div31_nodes.forEach(detach_dev);
      t108 = claim_space(div36_nodes);
      div32 = claim_element(div36_nodes, "DIV", {
        class: true
      }, false);
      var div32_nodes = children(div32);
      select23.$$.fragment.l(div32_nodes);
      t109 = claim_space(div32_nodes);
      helpertext4.$$.fragment.l(div32_nodes);
      t110 = claim_space(div32_nodes);
      pre23 = claim_element(div32_nodes, "PRE", {
        class: true
      }, false);
      var pre23_nodes = children(pre23);
      t111 = claim_text(pre23_nodes, "Selected: ");
      t112 = claim_text(pre23_nodes, ctx.valueShapedOutlinedHelperText);
      pre23_nodes.forEach(detach_dev);
      div32_nodes.forEach(detach_dev);
      t113 = claim_space(div36_nodes);
      div33 = claim_element(div36_nodes, "DIV", {
        class: true
      }, false);
      var div33_nodes = children(div33);
      select24.$$.fragment.l(div33_nodes);
      t114 = claim_space(div33_nodes);
      pre24 = claim_element(div33_nodes, "PRE", {
        class: true
      }, false);
      var pre24_nodes = children(pre24);
      t115 = claim_text(pre24_nodes, "Selected: ");
      t116 = claim_text(pre24_nodes, ctx.valueShapedOutlinedEnhanced);
      pre24_nodes.forEach(detach_dev);
      div33_nodes.forEach(detach_dev);
      t117 = claim_space(div36_nodes);
      div34 = claim_element(div36_nodes, "DIV", {
        class: true
      }, false);
      var div34_nodes = children(div34);
      select25.$$.fragment.l(div34_nodes);
      t118 = claim_space(div34_nodes);
      pre25 = claim_element(div34_nodes, "PRE", {
        class: true
      }, false);
      var pre25_nodes = children(pre25);
      t119 = claim_text(pre25_nodes, "Selected: ");
      t120 = claim_text(pre25_nodes, ctx.valueShapedOutlinedLeadingIcon);
      pre25_nodes.forEach(detach_dev);
      div34_nodes.forEach(detach_dev);
      t121 = claim_space(div36_nodes);
      div35 = claim_element(div36_nodes, "DIV", {
        class: true
      }, false);
      var div35_nodes = children(div35);
      select26.$$.fragment.l(div35_nodes);
      t122 = claim_space(div35_nodes);
      pre26 = claim_element(div35_nodes, "PRE", {
        class: true
      }, false);
      var pre26_nodes = children(pre26);
      t123 = claim_text(pre26_nodes, "Selected: ");
      t124 = claim_text(pre26_nodes, ctx.valueShapedOutlinedInvalid);
      pre26_nodes.forEach(detach_dev);
      div35_nodes.forEach(detach_dev);
      div36_nodes.forEach(detach_dev);
      div37_nodes.forEach(detach_dev);
      section_nodes.forEach(detach_dev);
      this.h();
    },
    h: function hydrate() {
      document.title = "Select - SMUI";
      attr_dev(h2, "class", "svelte-nitlg9");
      add_location(h2, file$4, 5, 2, 73);
      attr_dev(pre0, "class", "status svelte-nitlg9");
      add_location(pre0, file$4, 16, 6, 424);
      attr_dev(div0, "class", "svelte-nitlg9");
      add_location(div0, file$4, 8, 4, 163);
      attr_dev(pre1, "class", "status svelte-nitlg9");
      add_location(pre1, file$4, 27, 6, 838);
      attr_dev(div1, "class", "svelte-nitlg9");
      add_location(div1, file$4, 19, 4, 493);
      attr_dev(div2, "class", "columns margins svelte-nitlg9");
      set_style(div2, "justify-content", "flex-start");
      add_location(div2, file$4, 7, 2, 92);
      attr_dev(br0, "class", "svelte-nitlg9");
      add_location(br0, file$4, 32, 13, 941);
      attr_dev(pre2, "class", "status svelte-nitlg9");
      add_location(pre2, file$4, 43, 8, 1255);
      attr_dev(div3, "class", "svelte-nitlg9");
      add_location(div3, file$4, 35, 6, 989);
      attr_dev(pre3, "class", "status svelte-nitlg9");
      add_location(pre3, file$4, 55, 8, 1670);
      attr_dev(div4, "class", "svelte-nitlg9");
      add_location(div4, file$4, 46, 6, 1327);
      attr_dev(pre4, "class", "status svelte-nitlg9");
      add_location(pre4, file$4, 66, 8, 2103);
      attr_dev(div5, "class", "svelte-nitlg9");
      add_location(div5, file$4, 58, 6, 1752);
      attr_dev(pre5, "class", "status svelte-nitlg9");
      add_location(pre5, file$4, 78, 8, 2628);
      attr_dev(div6, "class", "svelte-nitlg9");
      add_location(div6, file$4, 69, 6, 2183);
      attr_dev(pre6, "class", "status svelte-nitlg9");
      add_location(pre6, file$4, 89, 8, 3001);
      attr_dev(div7, "class", "svelte-nitlg9");
      add_location(div7, file$4, 81, 6, 2711);
      attr_dev(div8, "class", "columns margins svelte-nitlg9");
      add_location(div8, file$4, 34, 4, 953);
      attr_dev(div9, "class", "svelte-nitlg9");
      add_location(div9, file$4, 31, 2, 922);
      attr_dev(br1, "class", "svelte-nitlg9");
      add_location(br1, file$4, 95, 11, 3113);
      attr_dev(pre7, "class", "status svelte-nitlg9");
      add_location(pre7, file$4, 106, 8, 3440);
      attr_dev(div10, "class", "svelte-nitlg9");
      add_location(div10, file$4, 98, 6, 3161);
      attr_dev(pre8, "class", "status svelte-nitlg9");
      add_location(pre8, file$4, 118, 8, 3866);
      attr_dev(div11, "class", "svelte-nitlg9");
      add_location(div11, file$4, 109, 6, 3510);
      attr_dev(pre9, "class", "status svelte-nitlg9");
      add_location(pre9, file$4, 129, 8, 4310);
      attr_dev(div12, "class", "svelte-nitlg9");
      add_location(div12, file$4, 121, 6, 3946);
      attr_dev(pre10, "class", "status svelte-nitlg9");
      add_location(pre10, file$4, 141, 8, 4846);
      attr_dev(div13, "class", "svelte-nitlg9");
      add_location(div13, file$4, 132, 6, 4388);
      attr_dev(pre11, "class", "status svelte-nitlg9");
      add_location(pre11, file$4, 152, 8, 5230);
      attr_dev(div14, "class", "svelte-nitlg9");
      add_location(div14, file$4, 144, 6, 4927);
      attr_dev(div15, "class", "columns margins svelte-nitlg9");
      add_location(div15, file$4, 97, 4, 3125);
      attr_dev(div16, "class", "svelte-nitlg9");
      add_location(div16, file$4, 94, 2, 3096);
      attr_dev(br2, "class", "svelte-nitlg9");
      add_location(br2, file$4, 158, 13, 5342);
      attr_dev(pre12, "class", "status svelte-nitlg9");
      add_location(pre12, file$4, 169, 8, 5675);
      attr_dev(div17, "class", "svelte-nitlg9");
      add_location(div17, file$4, 161, 6, 5390);
      attr_dev(pre13, "class", "status svelte-nitlg9");
      add_location(pre13, file$4, 181, 8, 6109);
      attr_dev(div18, "class", "svelte-nitlg9");
      add_location(div18, file$4, 172, 6, 5747);
      attr_dev(pre14, "class", "status svelte-nitlg9");
      add_location(pre14, file$4, 192, 8, 6561);
      attr_dev(div19, "class", "svelte-nitlg9");
      add_location(div19, file$4, 184, 6, 6191);
      attr_dev(pre15, "class", "status svelte-nitlg9");
      add_location(pre15, file$4, 204, 8, 7105);
      attr_dev(div20, "class", "svelte-nitlg9");
      add_location(div20, file$4, 195, 6, 6641);
      attr_dev(pre16, "class", "status svelte-nitlg9");
      add_location(pre16, file$4, 215, 8, 7497);
      attr_dev(div21, "class", "svelte-nitlg9");
      add_location(div21, file$4, 207, 6, 7188);
      attr_dev(div22, "class", "columns margins svelte-nitlg9");
      add_location(div22, file$4, 160, 4, 5354);
      attr_dev(div23, "class", "svelte-nitlg9");
      add_location(div23, file$4, 157, 2, 5323);
      attr_dev(br3, "class", "svelte-nitlg9");
      add_location(br3, file$4, 221, 18, 7616);
      attr_dev(pre17, "class", "status svelte-nitlg9");
      add_location(pre17, file$4, 232, 8, 7970);
      attr_dev(div24, "class", "svelte-nitlg9");
      add_location(div24, file$4, 224, 6, 7664);
      attr_dev(pre18, "class", "status svelte-nitlg9");
      add_location(pre18, file$4, 244, 8, 8429);
      attr_dev(div25, "class", "svelte-nitlg9");
      add_location(div25, file$4, 235, 6, 8046);
      attr_dev(pre19, "class", "status svelte-nitlg9");
      add_location(pre19, file$4, 255, 8, 8898);
      attr_dev(div26, "class", "svelte-nitlg9");
      add_location(div26, file$4, 247, 6, 8515);
      attr_dev(pre20, "class", "status svelte-nitlg9");
      add_location(pre20, file$4, 267, 8, 9459);
      attr_dev(div27, "class", "svelte-nitlg9");
      add_location(div27, file$4, 258, 6, 8982);
      attr_dev(pre21, "class", "status svelte-nitlg9");
      add_location(pre21, file$4, 278, 8, 9876);
      attr_dev(div28, "class", "svelte-nitlg9");
      add_location(div28, file$4, 270, 6, 9546);
      attr_dev(div29, "class", "columns margins svelte-nitlg9");
      add_location(div29, file$4, 223, 4, 7628);
      attr_dev(div30, "class", "svelte-nitlg9");
      add_location(div30, file$4, 220, 2, 7592);
      attr_dev(br4, "class", "svelte-nitlg9");
      add_location(br4, file$4, 284, 20, 10001);
      attr_dev(pre22, "class", "status svelte-nitlg9");
      add_location(pre22, file$4, 295, 8, 10370);
      attr_dev(div31, "class", "svelte-nitlg9");
      add_location(div31, file$4, 287, 6, 10049);
      attr_dev(pre23, "class", "status svelte-nitlg9");
      add_location(pre23, file$4, 307, 8, 10846);
      attr_dev(div32, "class", "svelte-nitlg9");
      add_location(div32, file$4, 298, 6, 10448);
      attr_dev(pre24, "class", "status svelte-nitlg9");
      add_location(pre24, file$4, 318, 8, 11332);
      attr_dev(div33, "class", "svelte-nitlg9");
      add_location(div33, file$4, 310, 6, 10934);
      attr_dev(pre25, "class", "status svelte-nitlg9");
      add_location(pre25, file$4, 330, 8, 11910);
      attr_dev(div34, "class", "svelte-nitlg9");
      add_location(div34, file$4, 321, 6, 11418);
      attr_dev(pre26, "class", "status svelte-nitlg9");
      add_location(pre26, file$4, 341, 8, 12344);
      attr_dev(div35, "class", "svelte-nitlg9");
      add_location(div35, file$4, 333, 6, 11999);
      attr_dev(div36, "class", "columns margins svelte-nitlg9");
      add_location(div36, file$4, 286, 4, 10013);
      attr_dev(div37, "class", "svelte-nitlg9");
      add_location(div37, file$4, 283, 2, 9975);
      attr_dev(section, "class", "svelte-nitlg9");
      add_location(section, file$4, 4, 0, 61);
    },
    m: function mount(target, anchor) {
      insert_dev(target, t0, anchor);
      insert_dev(target, section, anchor);
      append_dev(section, h2);
      append_dev(h2, t1);
      append_dev(section, t2);
      append_dev(section, div2);
      append_dev(div2, div0);
      mount_component(select0, div0, null);
      append_dev(div0, t3);
      append_dev(div0, pre0);
      append_dev(pre0, t4);
      append_dev(pre0, t5);
      append_dev(div2, t6);
      append_dev(div2, div1);
      mount_component(select1, div1, null);
      append_dev(div1, t7);
      append_dev(div1, pre1);
      append_dev(pre1, t8);
      append_dev(pre1, t9);
      append_dev(section, t10);
      append_dev(section, div9);
      append_dev(div9, t11);
      append_dev(div9, br0);
      append_dev(div9, t12);
      append_dev(div9, div8);
      append_dev(div8, div3);
      mount_component(select2, div3, null);
      append_dev(div3, t13);
      append_dev(div3, pre2);
      append_dev(pre2, t14);
      append_dev(pre2, t15);
      append_dev(div8, t16);
      append_dev(div8, div4);
      mount_component(select3, div4, null);
      append_dev(div4, t17);
      mount_component(helpertext0, div4, null);
      append_dev(div4, t18);
      append_dev(div4, pre3);
      append_dev(pre3, t19);
      append_dev(pre3, t20);
      append_dev(div8, t21);
      append_dev(div8, div5);
      mount_component(select4, div5, null);
      append_dev(div5, t22);
      append_dev(div5, pre4);
      append_dev(pre4, t23);
      append_dev(pre4, t24);
      append_dev(div8, t25);
      append_dev(div8, div6);
      mount_component(select5, div6, null);
      append_dev(div6, t26);
      append_dev(div6, pre5);
      append_dev(pre5, t27);
      append_dev(pre5, t28);
      append_dev(div8, t29);
      append_dev(div8, div7);
      mount_component(select6, div7, null);
      append_dev(div7, t30);
      append_dev(div7, pre6);
      append_dev(pre6, t31);
      append_dev(pre6, t32);
      append_dev(section, t33);
      append_dev(section, div16);
      append_dev(div16, t34);
      append_dev(div16, br1);
      append_dev(div16, t35);
      append_dev(div16, div15);
      append_dev(div15, div10);
      mount_component(select7, div10, null);
      append_dev(div10, t36);
      append_dev(div10, pre7);
      append_dev(pre7, t37);
      append_dev(pre7, t38);
      append_dev(div15, t39);
      append_dev(div15, div11);
      mount_component(select8, div11, null);
      append_dev(div11, t40);
      mount_component(helpertext1, div11, null);
      append_dev(div11, t41);
      append_dev(div11, pre8);
      append_dev(pre8, t42);
      append_dev(pre8, t43);
      append_dev(div15, t44);
      append_dev(div15, div12);
      mount_component(select9, div12, null);
      append_dev(div12, t45);
      append_dev(div12, pre9);
      append_dev(pre9, t46);
      append_dev(pre9, t47);
      append_dev(div15, t48);
      append_dev(div15, div13);
      mount_component(select10, div13, null);
      append_dev(div13, t49);
      append_dev(div13, pre10);
      append_dev(pre10, t50);
      append_dev(pre10, t51);
      append_dev(div15, t52);
      append_dev(div15, div14);
      mount_component(select11, div14, null);
      append_dev(div14, t53);
      append_dev(div14, pre11);
      append_dev(pre11, t54);
      append_dev(pre11, t55);
      append_dev(section, t56);
      append_dev(section, div23);
      append_dev(div23, t57);
      append_dev(div23, br2);
      append_dev(div23, t58);
      append_dev(div23, div22);
      append_dev(div22, div17);
      mount_component(select12, div17, null);
      append_dev(div17, t59);
      append_dev(div17, pre12);
      append_dev(pre12, t60);
      append_dev(pre12, t61);
      append_dev(div22, t62);
      append_dev(div22, div18);
      mount_component(select13, div18, null);
      append_dev(div18, t63);
      mount_component(helpertext2, div18, null);
      append_dev(div18, t64);
      append_dev(div18, pre13);
      append_dev(pre13, t65);
      append_dev(pre13, t66);
      append_dev(div22, t67);
      append_dev(div22, div19);
      mount_component(select14, div19, null);
      append_dev(div19, t68);
      append_dev(div19, pre14);
      append_dev(pre14, t69);
      append_dev(pre14, t70);
      append_dev(div22, t71);
      append_dev(div22, div20);
      mount_component(select15, div20, null);
      append_dev(div20, t72);
      append_dev(div20, pre15);
      append_dev(pre15, t73);
      append_dev(pre15, t74);
      append_dev(div22, t75);
      append_dev(div22, div21);
      mount_component(select16, div21, null);
      append_dev(div21, t76);
      append_dev(div21, pre16);
      append_dev(pre16, t77);
      append_dev(pre16, t78);
      append_dev(section, t79);
      append_dev(section, div30);
      append_dev(div30, t80);
      append_dev(div30, br3);
      append_dev(div30, t81);
      append_dev(div30, div29);
      append_dev(div29, div24);
      mount_component(select17, div24, null);
      append_dev(div24, t82);
      append_dev(div24, pre17);
      append_dev(pre17, t83);
      append_dev(pre17, t84);
      append_dev(div29, t85);
      append_dev(div29, div25);
      mount_component(select18, div25, null);
      append_dev(div25, t86);
      mount_component(helpertext3, div25, null);
      append_dev(div25, t87);
      append_dev(div25, pre18);
      append_dev(pre18, t88);
      append_dev(pre18, t89);
      append_dev(div29, t90);
      append_dev(div29, div26);
      mount_component(select19, div26, null);
      append_dev(div26, t91);
      append_dev(div26, pre19);
      append_dev(pre19, t92);
      append_dev(pre19, t93);
      append_dev(div29, t94);
      append_dev(div29, div27);
      mount_component(select20, div27, null);
      append_dev(div27, t95);
      append_dev(div27, pre20);
      append_dev(pre20, t96);
      append_dev(pre20, t97);
      append_dev(div29, t98);
      append_dev(div29, div28);
      mount_component(select21, div28, null);
      append_dev(div28, t99);
      append_dev(div28, pre21);
      append_dev(pre21, t100);
      append_dev(pre21, t101);
      append_dev(section, t102);
      append_dev(section, div37);
      append_dev(div37, t103);
      append_dev(div37, br4);
      append_dev(div37, t104);
      append_dev(div37, div36);
      append_dev(div36, div31);
      mount_component(select22, div31, null);
      append_dev(div31, t105);
      append_dev(div31, pre22);
      append_dev(pre22, t106);
      append_dev(pre22, t107);
      append_dev(div36, t108);
      append_dev(div36, div32);
      mount_component(select23, div32, null);
      append_dev(div32, t109);
      mount_component(helpertext4, div32, null);
      append_dev(div32, t110);
      append_dev(div32, pre23);
      append_dev(pre23, t111);
      append_dev(pre23, t112);
      append_dev(div36, t113);
      append_dev(div36, div33);
      mount_component(select24, div33, null);
      append_dev(div33, t114);
      append_dev(div33, pre24);
      append_dev(pre24, t115);
      append_dev(pre24, t116);
      append_dev(div36, t117);
      append_dev(div36, div34);
      mount_component(select25, div34, null);
      append_dev(div34, t118);
      append_dev(div34, pre25);
      append_dev(pre25, t119);
      append_dev(pre25, t120);
      append_dev(div36, t121);
      append_dev(div36, div35);
      mount_component(select26, div35, null);
      append_dev(div35, t122);
      append_dev(div35, pre26);
      append_dev(pre26, t123);
      append_dev(pre26, t124);
      current = true;
    },
    p: function update(changed, ctx) {
      var select0_changes = {};
      if (changed.$$scope || changed.valuePrefilled) select0_changes.$$scope = {
        changed: changed,
        ctx: ctx
      };

      if (!updating_value && changed.valuePrefilled) {
        select0_changes.value = ctx.valuePrefilled;
      }

      select0.$set(select0_changes);

      if (!current || changed.valuePrefilled) {
        set_data_dev(t5, ctx.valuePrefilled);
      }

      var select1_changes = {};
      if (changed.$$scope || changed.valuePrefilledEnhanced) select1_changes.$$scope = {
        changed: changed,
        ctx: ctx
      };

      if (!updating_value_1 && changed.valuePrefilledEnhanced) {
        select1_changes.value = ctx.valuePrefilledEnhanced;
      }

      select1.$set(select1_changes);

      if (!current || changed.valuePrefilledEnhanced) {
        set_data_dev(t9, ctx.valuePrefilledEnhanced);
      }

      var select2_changes = {};
      if (changed.$$scope || changed.valueStandard) select2_changes.$$scope = {
        changed: changed,
        ctx: ctx
      };

      if (!updating_value_2 && changed.valueStandard) {
        select2_changes.value = ctx.valueStandard;
      }

      select2.$set(select2_changes);

      if (!current || changed.valueStandard) {
        set_data_dev(t15, ctx.valueStandard);
      }

      var select3_changes = {};
      if (changed.$$scope || changed.valueStandardHelperText) select3_changes.$$scope = {
        changed: changed,
        ctx: ctx
      };

      if (!updating_value_3 && changed.valueStandardHelperText) {
        select3_changes.value = ctx.valueStandardHelperText;
      }

      select3.$set(select3_changes);
      var helpertext0_changes = {};
      if (changed.$$scope) helpertext0_changes.$$scope = {
        changed: changed,
        ctx: ctx
      };
      helpertext0.$set(helpertext0_changes);

      if (!current || changed.valueStandardHelperText) {
        set_data_dev(t20, ctx.valueStandardHelperText);
      }

      var select4_changes = {};
      if (changed.$$scope || changed.valueStandardEnhanced) select4_changes.$$scope = {
        changed: changed,
        ctx: ctx
      };

      if (!updating_value_4 && changed.valueStandardEnhanced) {
        select4_changes.value = ctx.valueStandardEnhanced;
      }

      select4.$set(select4_changes);

      if (!current || changed.valueStandardEnhanced) {
        set_data_dev(t24, ctx.valueStandardEnhanced);
      }

      var select5_changes = {};
      if (changed.$$scope || changed.valueStandardLeadingIcon) select5_changes.$$scope = {
        changed: changed,
        ctx: ctx
      };

      if (!updating_value_5 && changed.valueStandardLeadingIcon) {
        select5_changes.value = ctx.valueStandardLeadingIcon;
      }

      select5.$set(select5_changes);

      if (!current || changed.valueStandardLeadingIcon) {
        set_data_dev(t28, ctx.valueStandardLeadingIcon);
      }

      var select6_changes = {};
      if (changed.$$scope || changed.valueStandardInvalid) select6_changes.$$scope = {
        changed: changed,
        ctx: ctx
      };

      if (!updating_value_6 && changed.valueStandardInvalid) {
        select6_changes.value = ctx.valueStandardInvalid;
      }

      select6.$set(select6_changes);

      if (!current || changed.valueStandardInvalid) {
        set_data_dev(t32, ctx.valueStandardInvalid);
      }

      var select7_changes = {};
      if (changed.$$scope || changed.valueFilled) select7_changes.$$scope = {
        changed: changed,
        ctx: ctx
      };

      if (!updating_value_7 && changed.valueFilled) {
        select7_changes.value = ctx.valueFilled;
      }

      select7.$set(select7_changes);

      if (!current || changed.valueFilled) {
        set_data_dev(t38, ctx.valueFilled);
      }

      var select8_changes = {};
      if (changed.$$scope || changed.valueFilledHelperText) select8_changes.$$scope = {
        changed: changed,
        ctx: ctx
      };

      if (!updating_value_8 && changed.valueFilledHelperText) {
        select8_changes.value = ctx.valueFilledHelperText;
      }

      select8.$set(select8_changes);
      var helpertext1_changes = {};
      if (changed.$$scope) helpertext1_changes.$$scope = {
        changed: changed,
        ctx: ctx
      };
      helpertext1.$set(helpertext1_changes);

      if (!current || changed.valueFilledHelperText) {
        set_data_dev(t43, ctx.valueFilledHelperText);
      }

      var select9_changes = {};
      if (changed.$$scope || changed.valueFilledEnhanced) select9_changes.$$scope = {
        changed: changed,
        ctx: ctx
      };

      if (!updating_value_9 && changed.valueFilledEnhanced) {
        select9_changes.value = ctx.valueFilledEnhanced;
      }

      select9.$set(select9_changes);

      if (!current || changed.valueFilledEnhanced) {
        set_data_dev(t47, ctx.valueFilledEnhanced);
      }

      var select10_changes = {};
      if (changed.$$scope || changed.valueFilledLeadingIcon) select10_changes.$$scope = {
        changed: changed,
        ctx: ctx
      };

      if (!updating_value_10 && changed.valueFilledLeadingIcon) {
        select10_changes.value = ctx.valueFilledLeadingIcon;
      }

      select10.$set(select10_changes);

      if (!current || changed.valueFilledLeadingIcon) {
        set_data_dev(t51, ctx.valueFilledLeadingIcon);
      }

      var select11_changes = {};
      if (changed.$$scope || changed.valueFilledInvalid) select11_changes.$$scope = {
        changed: changed,
        ctx: ctx
      };

      if (!updating_value_11 && changed.valueFilledInvalid) {
        select11_changes.value = ctx.valueFilledInvalid;
      }

      select11.$set(select11_changes);

      if (!current || changed.valueFilledInvalid) {
        set_data_dev(t55, ctx.valueFilledInvalid);
      }

      var select12_changes = {};
      if (changed.$$scope || changed.valueOutlined) select12_changes.$$scope = {
        changed: changed,
        ctx: ctx
      };

      if (!updating_value_12 && changed.valueOutlined) {
        select12_changes.value = ctx.valueOutlined;
      }

      select12.$set(select12_changes);

      if (!current || changed.valueOutlined) {
        set_data_dev(t61, ctx.valueOutlined);
      }

      var select13_changes = {};
      if (changed.$$scope || changed.valueOutlinedHelperText) select13_changes.$$scope = {
        changed: changed,
        ctx: ctx
      };

      if (!updating_value_13 && changed.valueOutlinedHelperText) {
        select13_changes.value = ctx.valueOutlinedHelperText;
      }

      select13.$set(select13_changes);
      var helpertext2_changes = {};
      if (changed.$$scope) helpertext2_changes.$$scope = {
        changed: changed,
        ctx: ctx
      };
      helpertext2.$set(helpertext2_changes);

      if (!current || changed.valueOutlinedHelperText) {
        set_data_dev(t66, ctx.valueOutlinedHelperText);
      }

      var select14_changes = {};
      if (changed.$$scope || changed.valueOutlinedEnhanced) select14_changes.$$scope = {
        changed: changed,
        ctx: ctx
      };

      if (!updating_value_14 && changed.valueOutlinedEnhanced) {
        select14_changes.value = ctx.valueOutlinedEnhanced;
      }

      select14.$set(select14_changes);

      if (!current || changed.valueOutlinedEnhanced) {
        set_data_dev(t70, ctx.valueOutlinedEnhanced);
      }

      var select15_changes = {};
      if (changed.$$scope || changed.valueOutlinedLeadingIcon) select15_changes.$$scope = {
        changed: changed,
        ctx: ctx
      };

      if (!updating_value_15 && changed.valueOutlinedLeadingIcon) {
        select15_changes.value = ctx.valueOutlinedLeadingIcon;
      }

      select15.$set(select15_changes);

      if (!current || changed.valueOutlinedLeadingIcon) {
        set_data_dev(t74, ctx.valueOutlinedLeadingIcon);
      }

      var select16_changes = {};
      if (changed.$$scope || changed.valueOutlinedInvalid) select16_changes.$$scope = {
        changed: changed,
        ctx: ctx
      };

      if (!updating_value_16 && changed.valueOutlinedInvalid) {
        select16_changes.value = ctx.valueOutlinedInvalid;
      }

      select16.$set(select16_changes);

      if (!current || changed.valueOutlinedInvalid) {
        set_data_dev(t78, ctx.valueOutlinedInvalid);
      }

      var select17_changes = {};
      if (changed.$$scope || changed.valueShapedFilled) select17_changes.$$scope = {
        changed: changed,
        ctx: ctx
      };

      if (!updating_value_17 && changed.valueShapedFilled) {
        select17_changes.value = ctx.valueShapedFilled;
      }

      select17.$set(select17_changes);

      if (!current || changed.valueShapedFilled) {
        set_data_dev(t84, ctx.valueShapedFilled);
      }

      var select18_changes = {};
      if (changed.$$scope || changed.valueShapedFilledHelperText) select18_changes.$$scope = {
        changed: changed,
        ctx: ctx
      };

      if (!updating_value_18 && changed.valueShapedFilledHelperText) {
        select18_changes.value = ctx.valueShapedFilledHelperText;
      }

      select18.$set(select18_changes);
      var helpertext3_changes = {};
      if (changed.$$scope) helpertext3_changes.$$scope = {
        changed: changed,
        ctx: ctx
      };
      helpertext3.$set(helpertext3_changes);

      if (!current || changed.valueShapedFilledHelperText) {
        set_data_dev(t89, ctx.valueShapedFilledHelperText);
      }

      var select19_changes = {};
      if (changed.$$scope || changed.valueShapedFilledEnhanced) select19_changes.$$scope = {
        changed: changed,
        ctx: ctx
      };

      if (!updating_value_19 && changed.valueShapedFilledEnhanced) {
        select19_changes.value = ctx.valueShapedFilledEnhanced;
      }

      select19.$set(select19_changes);

      if (!current || changed.valueShapedFilledEnhanced) {
        set_data_dev(t93, ctx.valueShapedFilledEnhanced);
      }

      var select20_changes = {};
      if (changed.$$scope || changed.valueShapedFilledLeadingIcon) select20_changes.$$scope = {
        changed: changed,
        ctx: ctx
      };

      if (!updating_value_20 && changed.valueShapedFilledLeadingIcon) {
        select20_changes.value = ctx.valueShapedFilledLeadingIcon;
      }

      select20.$set(select20_changes);

      if (!current || changed.valueShapedFilledLeadingIcon) {
        set_data_dev(t97, ctx.valueShapedFilledLeadingIcon);
      }

      var select21_changes = {};
      if (changed.$$scope || changed.valueShapedFilledInvalid) select21_changes.$$scope = {
        changed: changed,
        ctx: ctx
      };

      if (!updating_value_21 && changed.valueShapedFilledInvalid) {
        select21_changes.value = ctx.valueShapedFilledInvalid;
      }

      select21.$set(select21_changes);

      if (!current || changed.valueShapedFilledInvalid) {
        set_data_dev(t101, ctx.valueShapedFilledInvalid);
      }

      var select22_changes = {};
      if (changed.$$scope || changed.valueShapedOutlined) select22_changes.$$scope = {
        changed: changed,
        ctx: ctx
      };

      if (!updating_value_22 && changed.valueShapedOutlined) {
        select22_changes.value = ctx.valueShapedOutlined;
      }

      select22.$set(select22_changes);

      if (!current || changed.valueShapedOutlined) {
        set_data_dev(t107, ctx.valueShapedOutlined);
      }

      var select23_changes = {};
      if (changed.$$scope || changed.valueShapedOutlinedHelperText) select23_changes.$$scope = {
        changed: changed,
        ctx: ctx
      };

      if (!updating_value_23 && changed.valueShapedOutlinedHelperText) {
        select23_changes.value = ctx.valueShapedOutlinedHelperText;
      }

      select23.$set(select23_changes);
      var helpertext4_changes = {};
      if (changed.$$scope) helpertext4_changes.$$scope = {
        changed: changed,
        ctx: ctx
      };
      helpertext4.$set(helpertext4_changes);

      if (!current || changed.valueShapedOutlinedHelperText) {
        set_data_dev(t112, ctx.valueShapedOutlinedHelperText);
      }

      var select24_changes = {};
      if (changed.$$scope || changed.valueShapedOutlinedEnhanced) select24_changes.$$scope = {
        changed: changed,
        ctx: ctx
      };

      if (!updating_value_24 && changed.valueShapedOutlinedEnhanced) {
        select24_changes.value = ctx.valueShapedOutlinedEnhanced;
      }

      select24.$set(select24_changes);

      if (!current || changed.valueShapedOutlinedEnhanced) {
        set_data_dev(t116, ctx.valueShapedOutlinedEnhanced);
      }

      var select25_changes = {};
      if (changed.$$scope || changed.valueShapedOutlinedLeadingIcon) select25_changes.$$scope = {
        changed: changed,
        ctx: ctx
      };

      if (!updating_value_25 && changed.valueShapedOutlinedLeadingIcon) {
        select25_changes.value = ctx.valueShapedOutlinedLeadingIcon;
      }

      select25.$set(select25_changes);

      if (!current || changed.valueShapedOutlinedLeadingIcon) {
        set_data_dev(t120, ctx.valueShapedOutlinedLeadingIcon);
      }

      var select26_changes = {};
      if (changed.$$scope || changed.valueShapedOutlinedInvalid) select26_changes.$$scope = {
        changed: changed,
        ctx: ctx
      };

      if (!updating_value_26 && changed.valueShapedOutlinedInvalid) {
        select26_changes.value = ctx.valueShapedOutlinedInvalid;
      }

      select26.$set(select26_changes);

      if (!current || changed.valueShapedOutlinedInvalid) {
        set_data_dev(t124, ctx.valueShapedOutlinedInvalid);
      }
    },
    i: function intro(local) {
      if (current) return;
      transition_in(select0.$$.fragment, local);
      transition_in(select1.$$.fragment, local);
      transition_in(select2.$$.fragment, local);
      transition_in(select3.$$.fragment, local);
      transition_in(helpertext0.$$.fragment, local);
      transition_in(select4.$$.fragment, local);
      transition_in(select5.$$.fragment, local);
      transition_in(select6.$$.fragment, local);
      transition_in(select7.$$.fragment, local);
      transition_in(select8.$$.fragment, local);
      transition_in(helpertext1.$$.fragment, local);
      transition_in(select9.$$.fragment, local);
      transition_in(select10.$$.fragment, local);
      transition_in(select11.$$.fragment, local);
      transition_in(select12.$$.fragment, local);
      transition_in(select13.$$.fragment, local);
      transition_in(helpertext2.$$.fragment, local);
      transition_in(select14.$$.fragment, local);
      transition_in(select15.$$.fragment, local);
      transition_in(select16.$$.fragment, local);
      transition_in(select17.$$.fragment, local);
      transition_in(select18.$$.fragment, local);
      transition_in(helpertext3.$$.fragment, local);
      transition_in(select19.$$.fragment, local);
      transition_in(select20.$$.fragment, local);
      transition_in(select21.$$.fragment, local);
      transition_in(select22.$$.fragment, local);
      transition_in(select23.$$.fragment, local);
      transition_in(helpertext4.$$.fragment, local);
      transition_in(select24.$$.fragment, local);
      transition_in(select25.$$.fragment, local);
      transition_in(select26.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(select0.$$.fragment, local);
      transition_out(select1.$$.fragment, local);
      transition_out(select2.$$.fragment, local);
      transition_out(select3.$$.fragment, local);
      transition_out(helpertext0.$$.fragment, local);
      transition_out(select4.$$.fragment, local);
      transition_out(select5.$$.fragment, local);
      transition_out(select6.$$.fragment, local);
      transition_out(select7.$$.fragment, local);
      transition_out(select8.$$.fragment, local);
      transition_out(helpertext1.$$.fragment, local);
      transition_out(select9.$$.fragment, local);
      transition_out(select10.$$.fragment, local);
      transition_out(select11.$$.fragment, local);
      transition_out(select12.$$.fragment, local);
      transition_out(select13.$$.fragment, local);
      transition_out(helpertext2.$$.fragment, local);
      transition_out(select14.$$.fragment, local);
      transition_out(select15.$$.fragment, local);
      transition_out(select16.$$.fragment, local);
      transition_out(select17.$$.fragment, local);
      transition_out(select18.$$.fragment, local);
      transition_out(helpertext3.$$.fragment, local);
      transition_out(select19.$$.fragment, local);
      transition_out(select20.$$.fragment, local);
      transition_out(select21.$$.fragment, local);
      transition_out(select22.$$.fragment, local);
      transition_out(select23.$$.fragment, local);
      transition_out(helpertext4.$$.fragment, local);
      transition_out(select24.$$.fragment, local);
      transition_out(select25.$$.fragment, local);
      transition_out(select26.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      if (detaching) {
        detach_dev(t0);
        detach_dev(section);
      }

      destroy_component(select0);
      destroy_component(select1);
      destroy_component(select2);
      destroy_component(select3);
      destroy_component(helpertext0);
      destroy_component(select4);
      destroy_component(select5);
      destroy_component(select6);
      destroy_component(select7);
      destroy_component(select8);
      destroy_component(helpertext1);
      destroy_component(select9);
      destroy_component(select10);
      destroy_component(select11);
      destroy_component(select12);
      destroy_component(select13);
      destroy_component(helpertext2);
      destroy_component(select14);
      destroy_component(select15);
      destroy_component(select16);
      destroy_component(select17);
      destroy_component(select18);
      destroy_component(helpertext3);
      destroy_component(select19);
      destroy_component(select20);
      destroy_component(select21);
      destroy_component(select22);
      destroy_component(select23);
      destroy_component(helpertext4);
      destroy_component(select24);
      destroy_component(select25);
      destroy_component(select26);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_fragment$4.name,
    type: "component",
    source: "",
    ctx: ctx
  });
  return block;
}

function instance$4($$self, $$props, $$invalidate) {
  var fruits = ['Apple', 'Orange', 'Banana', 'Mango'];
  var valuePrefilled = 'Orange';
  var valuePrefilledEnhanced = 'Orange';
  var valueStandard = '';
  var valueStandardHelperText = '';
  var valueStandardEnhanced = '';
  var valueStandardLeadingIcon = '';
  var valueStandardInvalid = '';
  var valueFilled = '';
  var valueFilledHelperText = '';
  var valueFilledEnhanced = '';
  var valueFilledLeadingIcon = '';
  var valueFilledInvalid = '';
  var valueOutlined = '';
  var valueOutlinedHelperText = '';
  var valueOutlinedEnhanced = '';
  var valueOutlinedLeadingIcon = '';
  var valueOutlinedInvalid = '';
  var valueShapedFilled = '';
  var valueShapedFilledHelperText = '';
  var valueShapedFilledEnhanced = '';
  var valueShapedFilledLeadingIcon = '';
  var valueShapedFilledInvalid = '';
  var valueShapedOutlined = '';
  var valueShapedOutlinedHelperText = '';
  var valueShapedOutlinedEnhanced = '';
  var valueShapedOutlinedLeadingIcon = '';
  var valueShapedOutlinedInvalid = '';

  function select0_value_binding(value) {
    valuePrefilled = value;
    $$invalidate('valuePrefilled', valuePrefilled);
  }

  function select1_value_binding(value_1) {
    valuePrefilledEnhanced = value_1;
    $$invalidate('valuePrefilledEnhanced', valuePrefilledEnhanced);
  }

  function select2_value_binding(value_2) {
    valueStandard = value_2;
    $$invalidate('valueStandard', valueStandard);
  }

  function select3_value_binding(value_3) {
    valueStandardHelperText = value_3;
    $$invalidate('valueStandardHelperText', valueStandardHelperText);
  }

  function select4_value_binding(value_4) {
    valueStandardEnhanced = value_4;
    $$invalidate('valueStandardEnhanced', valueStandardEnhanced);
  }

  function select5_value_binding(value_5) {
    valueStandardLeadingIcon = value_5;
    $$invalidate('valueStandardLeadingIcon', valueStandardLeadingIcon);
  }

  function select6_value_binding(value_6) {
    valueStandardInvalid = value_6;
    $$invalidate('valueStandardInvalid', valueStandardInvalid);
  }

  function select7_value_binding(value_7) {
    valueFilled = value_7;
    $$invalidate('valueFilled', valueFilled);
  }

  function select8_value_binding(value_8) {
    valueFilledHelperText = value_8;
    $$invalidate('valueFilledHelperText', valueFilledHelperText);
  }

  function select9_value_binding(value_9) {
    valueFilledEnhanced = value_9;
    $$invalidate('valueFilledEnhanced', valueFilledEnhanced);
  }

  function select10_value_binding(value_10) {
    valueFilledLeadingIcon = value_10;
    $$invalidate('valueFilledLeadingIcon', valueFilledLeadingIcon);
  }

  function select11_value_binding(value_11) {
    valueFilledInvalid = value_11;
    $$invalidate('valueFilledInvalid', valueFilledInvalid);
  }

  function select12_value_binding(value_12) {
    valueOutlined = value_12;
    $$invalidate('valueOutlined', valueOutlined);
  }

  function select13_value_binding(value_13) {
    valueOutlinedHelperText = value_13;
    $$invalidate('valueOutlinedHelperText', valueOutlinedHelperText);
  }

  function select14_value_binding(value_14) {
    valueOutlinedEnhanced = value_14;
    $$invalidate('valueOutlinedEnhanced', valueOutlinedEnhanced);
  }

  function select15_value_binding(value_15) {
    valueOutlinedLeadingIcon = value_15;
    $$invalidate('valueOutlinedLeadingIcon', valueOutlinedLeadingIcon);
  }

  function select16_value_binding(value_16) {
    valueOutlinedInvalid = value_16;
    $$invalidate('valueOutlinedInvalid', valueOutlinedInvalid);
  }

  function select17_value_binding(value_17) {
    valueShapedFilled = value_17;
    $$invalidate('valueShapedFilled', valueShapedFilled);
  }

  function select18_value_binding(value_18) {
    valueShapedFilledHelperText = value_18;
    $$invalidate('valueShapedFilledHelperText', valueShapedFilledHelperText);
  }

  function select19_value_binding(value_19) {
    valueShapedFilledEnhanced = value_19;
    $$invalidate('valueShapedFilledEnhanced', valueShapedFilledEnhanced);
  }

  function select20_value_binding(value_20) {
    valueShapedFilledLeadingIcon = value_20;
    $$invalidate('valueShapedFilledLeadingIcon', valueShapedFilledLeadingIcon);
  }

  function select21_value_binding(value_21) {
    valueShapedFilledInvalid = value_21;
    $$invalidate('valueShapedFilledInvalid', valueShapedFilledInvalid);
  }

  function select22_value_binding(value_22) {
    valueShapedOutlined = value_22;
    $$invalidate('valueShapedOutlined', valueShapedOutlined);
  }

  function select23_value_binding(value_23) {
    valueShapedOutlinedHelperText = value_23;
    $$invalidate('valueShapedOutlinedHelperText', valueShapedOutlinedHelperText);
  }

  function select24_value_binding(value_24) {
    valueShapedOutlinedEnhanced = value_24;
    $$invalidate('valueShapedOutlinedEnhanced', valueShapedOutlinedEnhanced);
  }

  function select25_value_binding(value_25) {
    valueShapedOutlinedLeadingIcon = value_25;
    $$invalidate('valueShapedOutlinedLeadingIcon', valueShapedOutlinedLeadingIcon);
  }

  function select26_value_binding(value_26) {
    valueShapedOutlinedInvalid = value_26;
    $$invalidate('valueShapedOutlinedInvalid', valueShapedOutlinedInvalid);
  }

  $$self.$capture_state = function () {
    return {};
  };

  $$self.$inject_state = function ($$props) {
    if ('fruits' in $$props) $$invalidate('fruits', fruits = $$props.fruits);
    if ('valuePrefilled' in $$props) $$invalidate('valuePrefilled', valuePrefilled = $$props.valuePrefilled);
    if ('valuePrefilledEnhanced' in $$props) $$invalidate('valuePrefilledEnhanced', valuePrefilledEnhanced = $$props.valuePrefilledEnhanced);
    if ('valueStandard' in $$props) $$invalidate('valueStandard', valueStandard = $$props.valueStandard);
    if ('valueStandardHelperText' in $$props) $$invalidate('valueStandardHelperText', valueStandardHelperText = $$props.valueStandardHelperText);
    if ('valueStandardEnhanced' in $$props) $$invalidate('valueStandardEnhanced', valueStandardEnhanced = $$props.valueStandardEnhanced);
    if ('valueStandardLeadingIcon' in $$props) $$invalidate('valueStandardLeadingIcon', valueStandardLeadingIcon = $$props.valueStandardLeadingIcon);
    if ('valueStandardInvalid' in $$props) $$invalidate('valueStandardInvalid', valueStandardInvalid = $$props.valueStandardInvalid);
    if ('valueFilled' in $$props) $$invalidate('valueFilled', valueFilled = $$props.valueFilled);
    if ('valueFilledHelperText' in $$props) $$invalidate('valueFilledHelperText', valueFilledHelperText = $$props.valueFilledHelperText);
    if ('valueFilledEnhanced' in $$props) $$invalidate('valueFilledEnhanced', valueFilledEnhanced = $$props.valueFilledEnhanced);
    if ('valueFilledLeadingIcon' in $$props) $$invalidate('valueFilledLeadingIcon', valueFilledLeadingIcon = $$props.valueFilledLeadingIcon);
    if ('valueFilledInvalid' in $$props) $$invalidate('valueFilledInvalid', valueFilledInvalid = $$props.valueFilledInvalid);
    if ('valueOutlined' in $$props) $$invalidate('valueOutlined', valueOutlined = $$props.valueOutlined);
    if ('valueOutlinedHelperText' in $$props) $$invalidate('valueOutlinedHelperText', valueOutlinedHelperText = $$props.valueOutlinedHelperText);
    if ('valueOutlinedEnhanced' in $$props) $$invalidate('valueOutlinedEnhanced', valueOutlinedEnhanced = $$props.valueOutlinedEnhanced);
    if ('valueOutlinedLeadingIcon' in $$props) $$invalidate('valueOutlinedLeadingIcon', valueOutlinedLeadingIcon = $$props.valueOutlinedLeadingIcon);
    if ('valueOutlinedInvalid' in $$props) $$invalidate('valueOutlinedInvalid', valueOutlinedInvalid = $$props.valueOutlinedInvalid);
    if ('valueShapedFilled' in $$props) $$invalidate('valueShapedFilled', valueShapedFilled = $$props.valueShapedFilled);
    if ('valueShapedFilledHelperText' in $$props) $$invalidate('valueShapedFilledHelperText', valueShapedFilledHelperText = $$props.valueShapedFilledHelperText);
    if ('valueShapedFilledEnhanced' in $$props) $$invalidate('valueShapedFilledEnhanced', valueShapedFilledEnhanced = $$props.valueShapedFilledEnhanced);
    if ('valueShapedFilledLeadingIcon' in $$props) $$invalidate('valueShapedFilledLeadingIcon', valueShapedFilledLeadingIcon = $$props.valueShapedFilledLeadingIcon);
    if ('valueShapedFilledInvalid' in $$props) $$invalidate('valueShapedFilledInvalid', valueShapedFilledInvalid = $$props.valueShapedFilledInvalid);
    if ('valueShapedOutlined' in $$props) $$invalidate('valueShapedOutlined', valueShapedOutlined = $$props.valueShapedOutlined);
    if ('valueShapedOutlinedHelperText' in $$props) $$invalidate('valueShapedOutlinedHelperText', valueShapedOutlinedHelperText = $$props.valueShapedOutlinedHelperText);
    if ('valueShapedOutlinedEnhanced' in $$props) $$invalidate('valueShapedOutlinedEnhanced', valueShapedOutlinedEnhanced = $$props.valueShapedOutlinedEnhanced);
    if ('valueShapedOutlinedLeadingIcon' in $$props) $$invalidate('valueShapedOutlinedLeadingIcon', valueShapedOutlinedLeadingIcon = $$props.valueShapedOutlinedLeadingIcon);
    if ('valueShapedOutlinedInvalid' in $$props) $$invalidate('valueShapedOutlinedInvalid', valueShapedOutlinedInvalid = $$props.valueShapedOutlinedInvalid);
  };

  return {
    fruits: fruits,
    valuePrefilled: valuePrefilled,
    valuePrefilledEnhanced: valuePrefilledEnhanced,
    valueStandard: valueStandard,
    valueStandardHelperText: valueStandardHelperText,
    valueStandardEnhanced: valueStandardEnhanced,
    valueStandardLeadingIcon: valueStandardLeadingIcon,
    valueStandardInvalid: valueStandardInvalid,
    valueFilled: valueFilled,
    valueFilledHelperText: valueFilledHelperText,
    valueFilledEnhanced: valueFilledEnhanced,
    valueFilledLeadingIcon: valueFilledLeadingIcon,
    valueFilledInvalid: valueFilledInvalid,
    valueOutlined: valueOutlined,
    valueOutlinedHelperText: valueOutlinedHelperText,
    valueOutlinedEnhanced: valueOutlinedEnhanced,
    valueOutlinedLeadingIcon: valueOutlinedLeadingIcon,
    valueOutlinedInvalid: valueOutlinedInvalid,
    valueShapedFilled: valueShapedFilled,
    valueShapedFilledHelperText: valueShapedFilledHelperText,
    valueShapedFilledEnhanced: valueShapedFilledEnhanced,
    valueShapedFilledLeadingIcon: valueShapedFilledLeadingIcon,
    valueShapedFilledInvalid: valueShapedFilledInvalid,
    valueShapedOutlined: valueShapedOutlined,
    valueShapedOutlinedHelperText: valueShapedOutlinedHelperText,
    valueShapedOutlinedEnhanced: valueShapedOutlinedEnhanced,
    valueShapedOutlinedLeadingIcon: valueShapedOutlinedLeadingIcon,
    valueShapedOutlinedInvalid: valueShapedOutlinedInvalid,
    select0_value_binding: select0_value_binding,
    select1_value_binding: select1_value_binding,
    select2_value_binding: select2_value_binding,
    select3_value_binding: select3_value_binding,
    select4_value_binding: select4_value_binding,
    select5_value_binding: select5_value_binding,
    select6_value_binding: select6_value_binding,
    select7_value_binding: select7_value_binding,
    select8_value_binding: select8_value_binding,
    select9_value_binding: select9_value_binding,
    select10_value_binding: select10_value_binding,
    select11_value_binding: select11_value_binding,
    select12_value_binding: select12_value_binding,
    select13_value_binding: select13_value_binding,
    select14_value_binding: select14_value_binding,
    select15_value_binding: select15_value_binding,
    select16_value_binding: select16_value_binding,
    select17_value_binding: select17_value_binding,
    select18_value_binding: select18_value_binding,
    select19_value_binding: select19_value_binding,
    select20_value_binding: select20_value_binding,
    select21_value_binding: select21_value_binding,
    select22_value_binding: select22_value_binding,
    select23_value_binding: select23_value_binding,
    select24_value_binding: select24_value_binding,
    select25_value_binding: select25_value_binding,
    select26_value_binding: select26_value_binding
  };
}

var Select_1 =
/*#__PURE__*/
function (_SvelteComponentDev) {
  _inherits$1(Select_1, _SvelteComponentDev);

  function Select_1(options) {
    var _this;

    _classCallCheck$1(this, Select_1);

    _this = _possibleConstructorReturn$1(this, _getPrototypeOf$1(Select_1).call(this, options));
    if (!document.getElementById("svelte-nitlg9-style")) add_css();
    init(_assertThisInitialized$1(_this), options, instance$4, create_fragment$4, safe_not_equal, []);
    dispatch_dev("SvelteRegisterComponent", {
      component: _assertThisInitialized$1(_this),
      tagName: "Select_1",
      options: options,
      id: create_fragment$4.name
    });
    return _this;
  }

  return Select_1;
}(SvelteComponentDev);

export default Select_1;

import { i as init, s as safe_not_equal, d as dispatch_dev, S as SvelteComponentDev, c as create_slot, a as assign, e as exclude_internal_props, f as element, g as claim_element, h as children, j as detach_dev, k as set_attributes, a4 as toggle_class, l as add_location, m as insert_dev, o as get_slot_changes, p as get_slot_context, q as get_spread_update, t as transition_in, r as transition_out, b as current_component } from './index.d5da4a00.js';
import { _ as _inherits, a as _classCallCheck, b as _possibleConstructorReturn, c as _getPrototypeOf, d as _assertThisInitialized, e as _createClass, f as exclude, g as forwardEventsBuilder, h as _defineProperty, u as useActions } from './useActions.b478cae0.js';
import { s as styleInject } from './typeof.0d5bf00d.js';
import { B as Button } from './Button.d401af18.js';
import './Label.35a2c1e8.js';
import './Icon.3c6823d4.js';

var css = ".mdc-button{font-family:Roboto,sans-serif;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-size:.875rem;line-height:2.25rem;font-weight:500;letter-spacing:.08929em;text-decoration:none;text-transform:uppercase;padding:0 8px;display:inline-flex;position:relative;align-items:center;justify-content:center;box-sizing:border-box;min-width:64px;height:36px;border:none;outline:none;line-height:inherit;user-select:none;-webkit-appearance:none;overflow:hidden;vertical-align:middle;border-radius:4px}.mdc-button::-moz-focus-inner{padding:0;border:0}.mdc-button:active{outline:none}.mdc-button:hover{cursor:pointer}.mdc-button:disabled{background-color:transparent;color:rgba(0,0,0,.37);cursor:default;pointer-events:none}.mdc-button.mdc-button--dense{border-radius:4px}.mdc-button:not(:disabled){background-color:transparent}.mdc-button .mdc-button__icon{margin-left:0;margin-right:8px;display:inline-block;width:18px;height:18px;font-size:18px;vertical-align:top}.mdc-button .mdc-button__icon[dir=rtl],[dir=rtl] .mdc-button .mdc-button__icon{margin-left:8px;margin-right:0}.mdc-button:not(:disabled){color:#ff3e00;color:var(--mdc-theme-primary,#ff3e00)}.mdc-button__label+.mdc-button__icon{margin-left:8px;margin-right:0}.mdc-button__label+.mdc-button__icon[dir=rtl],[dir=rtl] .mdc-button__label+.mdc-button__icon{margin-left:0;margin-right:8px}svg.mdc-button__icon{fill:currentColor}.mdc-button--outlined .mdc-button__icon,.mdc-button--raised .mdc-button__icon,.mdc-button--unelevated .mdc-button__icon{margin-left:-4px;margin-right:8px}.mdc-button--outlined .mdc-button__icon[dir=rtl],.mdc-button--outlined .mdc-button__label+.mdc-button__icon,.mdc-button--raised .mdc-button__icon[dir=rtl],.mdc-button--raised .mdc-button__label+.mdc-button__icon,.mdc-button--unelevated .mdc-button__icon[dir=rtl],.mdc-button--unelevated .mdc-button__label+.mdc-button__icon,[dir=rtl] .mdc-button--outlined .mdc-button__icon,[dir=rtl] .mdc-button--raised .mdc-button__icon,[dir=rtl] .mdc-button--unelevated .mdc-button__icon{margin-left:8px;margin-right:-4px}.mdc-button--outlined .mdc-button__label+.mdc-button__icon[dir=rtl],.mdc-button--raised .mdc-button__label+.mdc-button__icon[dir=rtl],.mdc-button--unelevated .mdc-button__label+.mdc-button__icon[dir=rtl],[dir=rtl] .mdc-button--outlined .mdc-button__label+.mdc-button__icon,[dir=rtl] .mdc-button--raised .mdc-button__label+.mdc-button__icon,[dir=rtl] .mdc-button--unelevated .mdc-button__label+.mdc-button__icon{margin-left:-4px;margin-right:8px}.mdc-button--raised,.mdc-button--unelevated{padding:0 16px}.mdc-button--raised:disabled,.mdc-button--unelevated:disabled{background-color:rgba(0,0,0,.12);color:rgba(0,0,0,.37)}.mdc-button--raised:not(:disabled),.mdc-button--unelevated:not(:disabled){background-color:#ff3e00}@supports not (-ms-ime-align:auto){.mdc-button--raised:not(:disabled),.mdc-button--unelevated:not(:disabled){background-color:var(--mdc-theme-primary,#ff3e00)}}.mdc-button--raised:not(:disabled),.mdc-button--unelevated:not(:disabled){color:#fff;color:var(--mdc-theme-on-primary,#fff)}.mdc-button--raised{box-shadow:0 3px 1px -2px rgba(0,0,0,.2),0 2px 2px 0 rgba(0,0,0,.14),0 1px 5px 0 rgba(0,0,0,.12);transition:box-shadow .28s cubic-bezier(.4,0,.2,1)}.mdc-button--raised:focus,.mdc-button--raised:hover{box-shadow:0 2px 4px -1px rgba(0,0,0,.2),0 4px 5px 0 rgba(0,0,0,.14),0 1px 10px 0 rgba(0,0,0,.12)}.mdc-button--raised:active{box-shadow:0 5px 5px -3px rgba(0,0,0,.2),0 8px 10px 1px rgba(0,0,0,.14),0 3px 14px 2px rgba(0,0,0,.12)}.mdc-button--raised:disabled{box-shadow:0 0 0 0 rgba(0,0,0,.2),0 0 0 0 rgba(0,0,0,.14),0 0 0 0 rgba(0,0,0,.12)}.mdc-button--outlined{border-style:solid;padding:0 15px;border-width:1px}.mdc-button--outlined:disabled{border-color:rgba(0,0,0,.37)}.mdc-button--outlined:not(:disabled){border-color:#ff3e00;border-color:var(--mdc-theme-primary,#ff3e00)}.mdc-button--dense{height:32px;font-size:.8125rem}@keyframes mdc-ripple-fg-radius-in{0%{animation-timing-function:cubic-bezier(.4,0,.2,1);transform:translate(var(--mdc-ripple-fg-translate-start,0)) scale(1)}to{transform:translate(var(--mdc-ripple-fg-translate-end,0)) scale(var(--mdc-ripple-fg-scale,1))}}@keyframes mdc-ripple-fg-opacity-in{0%{animation-timing-function:linear;opacity:0}to{opacity:var(--mdc-ripple-fg-opacity,0)}}@keyframes mdc-ripple-fg-opacity-out{0%{animation-timing-function:linear;opacity:var(--mdc-ripple-fg-opacity,0)}to{opacity:0}}.mdc-ripple-surface--test-edge-var-bug{--mdc-ripple-surface-test-edge-var:1px solid #000;visibility:hidden}.mdc-ripple-surface--test-edge-var-bug:before{border:var(--mdc-ripple-surface-test-edge-var)}.mdc-button{--mdc-ripple-fg-size:0;--mdc-ripple-left:0;--mdc-ripple-top:0;--mdc-ripple-fg-scale:1;--mdc-ripple-fg-translate-end:0;--mdc-ripple-fg-translate-start:0;-webkit-tap-highlight-color:rgba(0,0,0,0)}.mdc-button:after,.mdc-button:before{position:absolute;border-radius:50%;opacity:0;pointer-events:none;content:\"\"}.mdc-button:before{transition:opacity 15ms linear,background-color 15ms linear;z-index:1}.mdc-button.mdc-ripple-upgraded:before{transform:scale(var(--mdc-ripple-fg-scale,1))}.mdc-button.mdc-ripple-upgraded:after{top:0;left:0;transform:scale(0);transform-origin:center center}.mdc-button.mdc-ripple-upgraded--unbounded:after{top:var(--mdc-ripple-top,0);left:var(--mdc-ripple-left,0)}.mdc-button.mdc-ripple-upgraded--foreground-activation:after{animation:mdc-ripple-fg-radius-in 225ms forwards,mdc-ripple-fg-opacity-in 75ms forwards}.mdc-button.mdc-ripple-upgraded--foreground-deactivation:after{animation:mdc-ripple-fg-opacity-out .15s;transform:translate(var(--mdc-ripple-fg-translate-end,0)) scale(var(--mdc-ripple-fg-scale,1))}.mdc-button:after,.mdc-button:before{top:-50%;left:-50%;width:200%;height:200%}.mdc-button.mdc-ripple-upgraded:after{width:var(--mdc-ripple-fg-size,100%);height:var(--mdc-ripple-fg-size,100%)}.mdc-button:after,.mdc-button:before{background-color:#ff3e00}@supports not (-ms-ime-align:auto){.mdc-button:after,.mdc-button:before{background-color:var(--mdc-theme-primary,#ff3e00)}}.mdc-button:hover:before{opacity:.04}.mdc-button.mdc-ripple-upgraded--background-focused:before,.mdc-button:not(.mdc-ripple-upgraded):focus:before{transition-duration:75ms;opacity:.12}.mdc-button:not(.mdc-ripple-upgraded):after{transition:opacity .15s linear}.mdc-button:not(.mdc-ripple-upgraded):active:after{transition-duration:75ms;opacity:.12}.mdc-button.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:0.12}.mdc-button--raised:after,.mdc-button--raised:before,.mdc-button--unelevated:after,.mdc-button--unelevated:before{background-color:#fff}@supports not (-ms-ime-align:auto){.mdc-button--raised:after,.mdc-button--raised:before,.mdc-button--unelevated:after,.mdc-button--unelevated:before{background-color:var(--mdc-theme-on-primary,#fff)}}.mdc-button--raised:hover:before,.mdc-button--unelevated:hover:before{opacity:.08}.mdc-button--raised.mdc-ripple-upgraded--background-focused:before,.mdc-button--raised:not(.mdc-ripple-upgraded):focus:before,.mdc-button--unelevated.mdc-ripple-upgraded--background-focused:before,.mdc-button--unelevated:not(.mdc-ripple-upgraded):focus:before{transition-duration:75ms;opacity:.24}.mdc-button--raised:not(.mdc-ripple-upgraded):after,.mdc-button--unelevated:not(.mdc-ripple-upgraded):after{transition:opacity .15s linear}.mdc-button--raised:not(.mdc-ripple-upgraded):active:after,.mdc-button--unelevated:not(.mdc-ripple-upgraded):active:after{transition-duration:75ms;opacity:.24}.mdc-button--raised.mdc-ripple-upgraded,.mdc-button--unelevated.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:0.24}.mdc-ripple-surface{--mdc-ripple-fg-size:0;--mdc-ripple-left:0;--mdc-ripple-top:0;--mdc-ripple-fg-scale:1;--mdc-ripple-fg-translate-end:0;--mdc-ripple-fg-translate-start:0;-webkit-tap-highlight-color:rgba(0,0,0,0);position:relative;outline:none;overflow:hidden}.mdc-ripple-surface:after,.mdc-ripple-surface:before{position:absolute;border-radius:50%;opacity:0;pointer-events:none;content:\"\"}.mdc-ripple-surface:before{transition:opacity 15ms linear,background-color 15ms linear;z-index:1}.mdc-ripple-surface.mdc-ripple-upgraded:before{transform:scale(var(--mdc-ripple-fg-scale,1))}.mdc-ripple-surface.mdc-ripple-upgraded:after{top:0;left:0;transform:scale(0);transform-origin:center center}.mdc-ripple-surface.mdc-ripple-upgraded--unbounded:after{top:var(--mdc-ripple-top,0);left:var(--mdc-ripple-left,0)}.mdc-ripple-surface.mdc-ripple-upgraded--foreground-activation:after{animation:mdc-ripple-fg-radius-in 225ms forwards,mdc-ripple-fg-opacity-in 75ms forwards}.mdc-ripple-surface.mdc-ripple-upgraded--foreground-deactivation:after{animation:mdc-ripple-fg-opacity-out .15s;transform:translate(var(--mdc-ripple-fg-translate-end,0)) scale(var(--mdc-ripple-fg-scale,1))}.mdc-ripple-surface:after,.mdc-ripple-surface:before{background-color:#000}.mdc-ripple-surface:hover:before{opacity:.04}.mdc-ripple-surface.mdc-ripple-upgraded--background-focused:before,.mdc-ripple-surface:not(.mdc-ripple-upgraded):focus:before{transition-duration:75ms;opacity:.12}.mdc-ripple-surface:not(.mdc-ripple-upgraded):after{transition:opacity .15s linear}.mdc-ripple-surface:not(.mdc-ripple-upgraded):active:after{transition-duration:75ms;opacity:.12}.mdc-ripple-surface.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:0.12}.mdc-ripple-surface:after,.mdc-ripple-surface:before{top:-50%;left:-50%;width:200%;height:200%}.mdc-ripple-surface.mdc-ripple-upgraded:after{width:var(--mdc-ripple-fg-size,100%);height:var(--mdc-ripple-fg-size,100%)}.mdc-ripple-surface[data-mdc-ripple-is-unbounded]{overflow:visible}.mdc-ripple-surface[data-mdc-ripple-is-unbounded]:after,.mdc-ripple-surface[data-mdc-ripple-is-unbounded]:before{top:0;left:0;width:100%;height:100%}.mdc-ripple-surface[data-mdc-ripple-is-unbounded].mdc-ripple-upgraded:after,.mdc-ripple-surface[data-mdc-ripple-is-unbounded].mdc-ripple-upgraded:before{top:var(--mdc-ripple-top,0);left:var(--mdc-ripple-left,0);width:var(--mdc-ripple-fg-size,100%);height:var(--mdc-ripple-fg-size,100%)}.mdc-ripple-surface[data-mdc-ripple-is-unbounded].mdc-ripple-upgraded:after{width:var(--mdc-ripple-fg-size,100%);height:var(--mdc-ripple-fg-size,100%)}.mdc-ripple-surface--primary:after,.mdc-ripple-surface--primary:before{background-color:#ff3e00}@supports not (-ms-ime-align:auto){.mdc-ripple-surface--primary:after,.mdc-ripple-surface--primary:before{background-color:var(--mdc-theme-primary,#ff3e00)}}.mdc-ripple-surface--primary:hover:before{opacity:.04}.mdc-ripple-surface--primary.mdc-ripple-upgraded--background-focused:before,.mdc-ripple-surface--primary:not(.mdc-ripple-upgraded):focus:before{transition-duration:75ms;opacity:.12}.mdc-ripple-surface--primary:not(.mdc-ripple-upgraded):after{transition:opacity .15s linear}.mdc-ripple-surface--primary:not(.mdc-ripple-upgraded):active:after{transition-duration:75ms;opacity:.12}.mdc-ripple-surface--primary.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:0.12}.mdc-ripple-surface--accent:after,.mdc-ripple-surface--accent:before{background-color:#676778}@supports not (-ms-ime-align:auto){.mdc-ripple-surface--accent:after,.mdc-ripple-surface--accent:before{background-color:var(--mdc-theme-secondary,#676778)}}.mdc-ripple-surface--accent:hover:before{opacity:.04}.mdc-ripple-surface--accent.mdc-ripple-upgraded--background-focused:before,.mdc-ripple-surface--accent:not(.mdc-ripple-upgraded):focus:before{transition-duration:75ms;opacity:.12}.mdc-ripple-surface--accent:not(.mdc-ripple-upgraded):after{transition:opacity .15s linear}.mdc-ripple-surface--accent:not(.mdc-ripple-upgraded):active:after{transition-duration:75ms;opacity:.12}.mdc-ripple-surface--accent.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:0.12}.smui-button--color-secondary:not(:disabled){color:#676778;color:var(--mdc-theme-secondary,#676778)}.smui-button--color-secondary.mdc-button--raised:not(:disabled),.smui-button--color-secondary.mdc-button--unelevated:not(:disabled){background-color:#676778}@supports not (-ms-ime-align:auto){.smui-button--color-secondary.mdc-button--raised:not(:disabled),.smui-button--color-secondary.mdc-button--unelevated:not(:disabled){background-color:var(--mdc-theme-secondary,#676778)}}.smui-button--color-secondary.mdc-button--raised:not(:disabled),.smui-button--color-secondary.mdc-button--unelevated:not(:disabled){color:#fff;color:var(--mdc-theme-on-secondary,#fff)}.smui-button--color-secondary.mdc-button--outlined:not(:disabled){border-color:#676778;border-color:var(--mdc-theme-secondary,#676778)}.smui-button--color-secondary:after,.smui-button--color-secondary:before{background-color:#676778}@supports not (-ms-ime-align:auto){.smui-button--color-secondary:after,.smui-button--color-secondary:before{background-color:var(--mdc-theme-secondary,#676778)}}.smui-button--color-secondary:hover:before{opacity:.04}.smui-button--color-secondary.mdc-ripple-upgraded--background-focused:before,.smui-button--color-secondary:not(.mdc-ripple-upgraded):focus:before{transition-duration:75ms;opacity:.12}.smui-button--color-secondary:not(.mdc-ripple-upgraded):after{transition:opacity .15s linear}.smui-button--color-secondary:not(.mdc-ripple-upgraded):active:after{transition-duration:75ms;opacity:.12}.smui-button--color-secondary.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:0.12}.smui-button--color-secondary.mdc-button--raised:after,.smui-button--color-secondary.mdc-button--raised:before,.smui-button--color-secondary.mdc-button--unelevated:after,.smui-button--color-secondary.mdc-button--unelevated:before{background-color:#fff}@supports not (-ms-ime-align:auto){.smui-button--color-secondary.mdc-button--raised:after,.smui-button--color-secondary.mdc-button--raised:before,.smui-button--color-secondary.mdc-button--unelevated:after,.smui-button--color-secondary.mdc-button--unelevated:before{background-color:var(--mdc-theme-on-secondary,#fff)}}.smui-button--color-secondary.mdc-button--raised:hover:before,.smui-button--color-secondary.mdc-button--unelevated:hover:before{opacity:.08}.smui-button--color-secondary.mdc-button--raised.mdc-ripple-upgraded--background-focused:before,.smui-button--color-secondary.mdc-button--raised:not(.mdc-ripple-upgraded):focus:before,.smui-button--color-secondary.mdc-button--unelevated.mdc-ripple-upgraded--background-focused:before,.smui-button--color-secondary.mdc-button--unelevated:not(.mdc-ripple-upgraded):focus:before{transition-duration:75ms;opacity:.24}.smui-button--color-secondary.mdc-button--raised:not(.mdc-ripple-upgraded):after,.smui-button--color-secondary.mdc-button--unelevated:not(.mdc-ripple-upgraded):after{transition:opacity .15s linear}.smui-button--color-secondary.mdc-button--raised:not(.mdc-ripple-upgraded):active:after,.smui-button--color-secondary.mdc-button--unelevated:not(.mdc-ripple-upgraded):active:after{transition-duration:75ms;opacity:.24}.smui-button--color-secondary.mdc-button--raised.mdc-ripple-upgraded,.smui-button--color-secondary.mdc-button--unelevated.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:0.24}.smui-button__group{display:inline-flex}.smui-button__group>.mdc-button:not(:last-child),.smui-button__group>.smui-button__group-item:not(:last-child)>.mdc-button{border-top-right-radius:0;border-bottom-right-radius:0}.smui-button__group>.mdc-button:not(:first-child),.smui-button__group>.smui-button__group-item:not(:first-child)>.mdc-button{border-top-left-radius:0;border-bottom-left-radius:0}.smui-button__group.smui-button__group--raised{box-shadow:0 3px 1px -2px rgba(0,0,0,.2),0 2px 2px 0 rgba(0,0,0,.14),0 1px 5px 0 rgba(0,0,0,.12)}.smui-button__group>.mdc-button--raised,.smui-button__group>.mdc-button--raised:active,.smui-button__group>.mdc-button--raised:disabled,.smui-button__group>.mdc-button--raised:focus,.smui-button__group>.mdc-button--raised:hover,.smui-button__group>.smui-button__group-item>.mdc-button--raised,.smui-button__group>.smui-button__group-item>.mdc-button--raised:active,.smui-button__group>.smui-button__group-item>.mdc-button--raised:disabled,.smui-button__group>.smui-button__group-item>.mdc-button--raised:focus,.smui-button__group>.smui-button__group-item>.mdc-button--raised:hover{box-shadow:0 0 0 0 rgba(0,0,0,.2),0 0 0 0 rgba(0,0,0,.14),0 0 0 0 rgba(0,0,0,.12)}.smui-button__group>.mdc-button--outlined:not(:last-child),.smui-button__group>.smui-button__group-item:not(:last-child)>.mdc-button--outlined{border-right-width:0}";
styleInject(css);

var file = "Users/hperrin/repos/svelte-material-ui/packages/button/Group.svelte";

function create_fragment(ctx) {
  var div, useActions_action, forwardEvents_action, current;
  var default_slot_template = ctx.$$slots.default;
  var default_slot = create_slot(default_slot_template, ctx, null);
  var div_levels = [{
    class: "smui-button__group " + ctx.className
  }, exclude(ctx.$$props, ['use', 'class', 'variant'])];
  var div_data = {};

  for (var i = 0; i < div_levels.length; i += 1) {
    div_data = assign(div_data, div_levels[i]);
  }

  var block = {
    c: function create() {
      div = element("div");
      if (default_slot) default_slot.c();
      this.h();
    },
    l: function claim(nodes) {
      div = claim_element(nodes, "DIV", {
        class: true
      }, false);
      var div_nodes = children(div);
      if (default_slot) default_slot.l(div_nodes);
      div_nodes.forEach(detach_dev);
      this.h();
    },
    h: function hydrate() {
      set_attributes(div, div_data);
      toggle_class(div, "smui-button__group--raised", ctx.variant === 'raised');
      add_location(div, file, 0, 0, 0);
    },
    m: function mount(target, anchor) {
      insert_dev(target, div, anchor);

      if (default_slot) {
        default_slot.m(div, null);
      }

      useActions_action = useActions.call(null, div, ctx.use) || {};
      forwardEvents_action = ctx.forwardEvents.call(null, div) || {};
      current = true;
    },
    p: function update(changed, ctx) {
      if (default_slot && default_slot.p && changed.$$scope) {
        default_slot.p(get_slot_changes(default_slot_template, ctx, changed, null), get_slot_context(default_slot_template, ctx, null));
      }

      set_attributes(div, get_spread_update(div_levels, [changed.className && {
        class: "smui-button__group " + ctx.className
      }, (changed.exclude || changed.$$props) && exclude(ctx.$$props, ['use', 'class', 'variant'])]));

      if (typeof useActions_action.update === 'function' && changed.use) {
        useActions_action.update.call(null, ctx.use);
      }

      if (changed.className || changed.variant) {
        toggle_class(div, "smui-button__group--raised", ctx.variant === 'raised');
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
        detach_dev(div);
      }

      if (default_slot) default_slot.d(detaching);
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
  var _ref;

  var forwardEvents = forwardEventsBuilder(current_component);
  var _$$props = $$props,
      _$$props$use = _$$props.use,
      use = _$$props$use === void 0 ? [] : _$$props$use,
      _$$props$class = _$$props.class,
      className = _$$props$class === void 0 ? '' : _$$props$class,
      _$$props$variant = _$$props.variant,
      variant = _$$props$variant === void 0 ? 'text' : _$$props$variant;
  var _$$props2 = $$props,
      _$$props2$$$slots = _$$props2.$$slots,
      $$slots = _$$props2$$$slots === void 0 ? {} : _$$props2$$$slots,
      $$scope = _$$props2.$$scope;

  $$self.$set = function ($$new_props) {
    $$invalidate('$$props', $$props = assign(assign({}, $$props), $$new_props));
    if ('use' in $$new_props) $$invalidate('use', use = $$new_props.use);
    if ('class' in $$new_props) $$invalidate('className', className = $$new_props.class);
    if ('variant' in $$new_props) $$invalidate('variant', variant = $$new_props.variant);
    if ('$$scope' in $$new_props) $$invalidate('$$scope', $$scope = $$new_props.$$scope);
  };

  $$self.$capture_state = function () {
    return {
      use: use,
      className: className,
      variant: variant
    };
  };

  $$self.$inject_state = function ($$new_props) {
    $$invalidate('$$props', $$props = assign(assign({}, $$props), $$new_props));
    if ('use' in $$props) $$invalidate('use', use = $$new_props.use);
    if ('className' in $$props) $$invalidate('className', className = $$new_props.className);
    if ('variant' in $$props) $$invalidate('variant', variant = $$new_props.variant);
  };

  return _ref = {
    forwardEvents: forwardEvents,
    use: use,
    className: className,
    variant: variant,
    $$props: $$props
  }, _defineProperty(_ref, "$$props", $$props = exclude_internal_props($$props)), _defineProperty(_ref, "$$slots", $$slots), _defineProperty(_ref, "$$scope", $$scope), _ref;
}

var Group =
/*#__PURE__*/
function (_SvelteComponentDev) {
  _inherits(Group, _SvelteComponentDev);

  function Group(options) {
    var _this;

    _classCallCheck(this, Group);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Group).call(this, options));
    init(_assertThisInitialized(_this), options, instance, create_fragment, safe_not_equal, ["use", "class", "variant"]);
    dispatch_dev("SvelteRegisterComponent", {
      component: _assertThisInitialized(_this),
      tagName: "Group",
      options: options,
      id: create_fragment.name
    });
    return _this;
  }

  _createClass(Group, [{
    key: "use",
    get: function get() {
      throw new Error("<Group>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    },
    set: function set(value) {
      throw new Error("<Group>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    }
  }, {
    key: "class",
    get: function get() {
      throw new Error("<Group>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    },
    set: function set(value) {
      throw new Error("<Group>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    }
  }, {
    key: "variant",
    get: function get() {
      throw new Error("<Group>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    },
    set: function set(value) {
      throw new Error("<Group>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    }
  }]);

  return Group;
}(SvelteComponentDev);

function GroupItem(node) {
  node.classList.add('smui-button__group-item');
  return {
    destroy: function destroy() {
      node.classList.remove('smui-button__group-item');
    }
  };
}

export { Button as B, Group as G, GroupItem as a };

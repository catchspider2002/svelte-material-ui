import { i as init, s as safe_not_equal, d as dispatch_dev, S as SvelteComponentDev, c as create_slot, a as assign, a0 as getContext, e as exclude_internal_props, f as element, g as claim_element, h as children, j as detach_dev, k as set_attributes, a4 as toggle_class, l as add_location, m as insert_dev, o as get_slot_changes, p as get_slot_context, q as get_spread_update, t as transition_in, r as transition_out, b as current_component } from './index.d5da4a00.js';
import { _ as _inherits, a as _classCallCheck, b as _possibleConstructorReturn, c as _getPrototypeOf, d as _assertThisInitialized, e as _createClass, f as exclude, g as forwardEventsBuilder, h as _defineProperty, u as useActions } from './useActions.b478cae0.js';

var file = "Users/hperrin/repos/svelte-material-ui/packages/common/Icon.svelte";

function create_fragment(ctx) {
  var i, useActions_action, forwardEvents_action, current;
  var default_slot_template = ctx.$$slots.default;
  var default_slot = create_slot(default_slot_template, ctx, null);
  var i_levels = [{
    class: ctx.className
  }, {
    "aria-hidden": "true"
  }, exclude(ctx.$$props, ['use', 'class', 'on', 'leading', 'leadingHidden', 'trailing'])];
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
        "aria-hidden": true
      }, false);
      var i_nodes = children(i);
      if (default_slot) default_slot.l(i_nodes);
      i_nodes.forEach(detach_dev);
      this.h();
    },
    h: function hydrate() {
      set_attributes(i, i_data);
      toggle_class(i, "mdc-button__icon", ctx.context === 'button');
      toggle_class(i, "mdc-fab__icon", ctx.context === 'fab');
      toggle_class(i, "mdc-icon-button__icon", ctx.context === 'icon-button');
      toggle_class(i, "mdc-icon-button__icon--on", ctx.context === 'icon-button' && ctx.on);
      toggle_class(i, "mdc-chip__icon", ctx.context === 'chip');
      toggle_class(i, "mdc-chip__icon--leading", ctx.context === 'chip' && ctx.leading);
      toggle_class(i, "mdc-chip__icon--leading-hidden", ctx.context === 'chip' && ctx.leadingHidden);
      toggle_class(i, "mdc-chip__icon--trailing", ctx.context === 'chip' && ctx.trailing);
      toggle_class(i, "mdc-tab__icon", ctx.context === 'tab');
      add_location(i, file, 0, 0, 0);
    },
    m: function mount(target, anchor) {
      insert_dev(target, i, anchor);

      if (default_slot) {
        default_slot.m(i, null);
      }

      useActions_action = useActions.call(null, i, ctx.use) || {};
      forwardEvents_action = ctx.forwardEvents.call(null, i) || {};
      current = true;
    },
    p: function update(changed, ctx) {
      if (default_slot && default_slot.p && changed.$$scope) {
        default_slot.p(get_slot_changes(default_slot_template, ctx, changed, null), get_slot_context(default_slot_template, ctx, null));
      }

      set_attributes(i, get_spread_update(i_levels, [changed.className && {
        class: ctx.className
      }, {
        "aria-hidden": "true"
      }, (changed.exclude || changed.$$props) && exclude(ctx.$$props, ['use', 'class', 'on', 'leading', 'leadingHidden', 'trailing'])]));

      if (typeof useActions_action.update === 'function' && changed.use) {
        useActions_action.update.call(null, ctx.use);
      }

      if (changed.className || changed.context) {
        toggle_class(i, "mdc-button__icon", ctx.context === 'button');
        toggle_class(i, "mdc-fab__icon", ctx.context === 'fab');
        toggle_class(i, "mdc-icon-button__icon", ctx.context === 'icon-button');
      }

      if (changed.className || changed.context || changed.on) {
        toggle_class(i, "mdc-icon-button__icon--on", ctx.context === 'icon-button' && ctx.on);
      }

      if (changed.className || changed.context) {
        toggle_class(i, "mdc-chip__icon", ctx.context === 'chip');
      }

      if (changed.className || changed.context || changed.leading) {
        toggle_class(i, "mdc-chip__icon--leading", ctx.context === 'chip' && ctx.leading);
      }

      if (changed.className || changed.context || changed.leadingHidden) {
        toggle_class(i, "mdc-chip__icon--leading-hidden", ctx.context === 'chip' && ctx.leadingHidden);
      }

      if (changed.className || changed.context || changed.trailing) {
        toggle_class(i, "mdc-chip__icon--trailing", ctx.context === 'chip' && ctx.trailing);
      }

      if (changed.className || changed.context) {
        toggle_class(i, "mdc-tab__icon", ctx.context === 'tab');
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
      _$$props$on = _$$props.on,
      on = _$$props$on === void 0 ? false : _$$props$on,
      _$$props$leading = _$$props.leading,
      leading = _$$props$leading === void 0 ? false : _$$props$leading,
      _$$props$leadingHidde = _$$props.leadingHidden,
      leadingHidden = _$$props$leadingHidde === void 0 ? false : _$$props$leadingHidde,
      _$$props$trailing = _$$props.trailing,
      trailing = _$$props$trailing === void 0 ? false : _$$props$trailing;
  var context = getContext('SMUI:icon:context');
  var _$$props2 = $$props,
      _$$props2$$$slots = _$$props2.$$slots,
      $$slots = _$$props2$$$slots === void 0 ? {} : _$$props2$$$slots,
      $$scope = _$$props2.$$scope;

  $$self.$set = function ($$new_props) {
    $$invalidate('$$props', $$props = assign(assign({}, $$props), $$new_props));
    if ('use' in $$new_props) $$invalidate('use', use = $$new_props.use);
    if ('class' in $$new_props) $$invalidate('className', className = $$new_props.class);
    if ('on' in $$new_props) $$invalidate('on', on = $$new_props.on);
    if ('leading' in $$new_props) $$invalidate('leading', leading = $$new_props.leading);
    if ('leadingHidden' in $$new_props) $$invalidate('leadingHidden', leadingHidden = $$new_props.leadingHidden);
    if ('trailing' in $$new_props) $$invalidate('trailing', trailing = $$new_props.trailing);
    if ('$$scope' in $$new_props) $$invalidate('$$scope', $$scope = $$new_props.$$scope);
  };

  $$self.$capture_state = function () {
    return {
      use: use,
      className: className,
      on: on,
      leading: leading,
      leadingHidden: leadingHidden,
      trailing: trailing
    };
  };

  $$self.$inject_state = function ($$new_props) {
    $$invalidate('$$props', $$props = assign(assign({}, $$props), $$new_props));
    if ('use' in $$props) $$invalidate('use', use = $$new_props.use);
    if ('className' in $$props) $$invalidate('className', className = $$new_props.className);
    if ('on' in $$props) $$invalidate('on', on = $$new_props.on);
    if ('leading' in $$props) $$invalidate('leading', leading = $$new_props.leading);
    if ('leadingHidden' in $$props) $$invalidate('leadingHidden', leadingHidden = $$new_props.leadingHidden);
    if ('trailing' in $$props) $$invalidate('trailing', trailing = $$new_props.trailing);
  };

  return _ref = {
    forwardEvents: forwardEvents,
    use: use,
    className: className,
    on: on,
    leading: leading,
    leadingHidden: leadingHidden,
    trailing: trailing,
    context: context,
    $$props: $$props
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
    init(_assertThisInitialized(_this), options, instance, create_fragment, safe_not_equal, ["use", "class", "on", "leading", "leadingHidden", "trailing"]);
    dispatch_dev("SvelteRegisterComponent", {
      component: _assertThisInitialized(_this),
      tagName: "Icon",
      options: options,
      id: create_fragment.name
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
    key: "on",
    get: function get() {
      throw new Error("<Icon>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    },
    set: function set(value) {
      throw new Error("<Icon>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    }
  }, {
    key: "leading",
    get: function get() {
      throw new Error("<Icon>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    },
    set: function set(value) {
      throw new Error("<Icon>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    }
  }, {
    key: "leadingHidden",
    get: function get() {
      throw new Error("<Icon>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    },
    set: function set(value) {
      throw new Error("<Icon>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    }
  }, {
    key: "trailing",
    get: function get() {
      throw new Error("<Icon>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    },
    set: function set(value) {
      throw new Error("<Icon>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    }
  }]);

  return Icon;
}(SvelteComponentDev);

export { Icon as I };

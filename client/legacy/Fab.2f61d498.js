import { i as init, s as safe_not_equal, d as dispatch_dev, S as SvelteComponentDev, c as create_slot, a as assign, $ as setContext, e as exclude_internal_props, f as element, g as claim_element, h as children, j as detach_dev, k as set_attributes, a4 as toggle_class, l as add_location, m as insert_dev, o as get_slot_changes, p as get_slot_context, q as get_spread_update, t as transition_in, r as transition_out, b as current_component } from './index.d5da4a00.js';
import { _ as _inherits, a as _classCallCheck, b as _possibleConstructorReturn, c as _getPrototypeOf, d as _assertThisInitialized, e as _createClass, f as exclude, g as forwardEventsBuilder, h as _defineProperty, u as useActions } from './useActions.b478cae0.js';
import { R as Ripple } from './bare.3cea1bea.js';

var file = "Users/hperrin/repos/svelte-material-ui/packages/fab/Fab.svelte";

function create_fragment(ctx) {
  var button, useActions_action, forwardEvents_action, Ripple_action, current;
  var default_slot_template = ctx.$$slots.default;
  var default_slot = create_slot(default_slot_template, ctx, null);
  var button_levels = [{
    class: "mdc-fab " + ctx.className
  }, exclude(ctx.$$props, ['use', 'class', 'ripple', 'color', 'mini', 'exited', 'extended'])];
  var button_data = {};

  for (var i = 0; i < button_levels.length; i += 1) {
    button_data = assign(button_data, button_levels[i]);
  }

  var block = {
    c: function create() {
      button = element("button");
      if (default_slot) default_slot.c();
      this.h();
    },
    l: function claim(nodes) {
      button = claim_element(nodes, "BUTTON", {
        class: true
      }, false);
      var button_nodes = children(button);
      if (default_slot) default_slot.l(button_nodes);
      button_nodes.forEach(detach_dev);
      this.h();
    },
    h: function hydrate() {
      set_attributes(button, button_data);
      toggle_class(button, "mdc-fab--mini", ctx.mini);
      toggle_class(button, "mdc-fab--exited", ctx.exited);
      toggle_class(button, "mdc-fab--extended", ctx.extended);
      toggle_class(button, "smui-fab--color-primary", ctx.color === 'primary');
      add_location(button, file, 0, 0, 0);
    },
    m: function mount(target, anchor) {
      insert_dev(target, button, anchor);

      if (default_slot) {
        default_slot.m(button, null);
      }

      useActions_action = useActions.call(null, button, ctx.use) || {};
      forwardEvents_action = ctx.forwardEvents.call(null, button) || {};
      Ripple_action = Ripple.call(null, button, [ctx.ripple, {
        unbounded: false
      }]) || {};
      current = true;
    },
    p: function update(changed, ctx) {
      if (default_slot && default_slot.p && changed.$$scope) {
        default_slot.p(get_slot_changes(default_slot_template, ctx, changed, null), get_slot_context(default_slot_template, ctx, null));
      }

      set_attributes(button, get_spread_update(button_levels, [changed.className && {
        class: "mdc-fab " + ctx.className
      }, (changed.exclude || changed.$$props) && exclude(ctx.$$props, ['use', 'class', 'ripple', 'color', 'mini', 'exited', 'extended'])]));

      if (typeof useActions_action.update === 'function' && changed.use) {
        useActions_action.update.call(null, ctx.use);
      }

      if (typeof Ripple_action.update === 'function' && changed.ripple) {
        Ripple_action.update.call(null, [ctx.ripple, {
          unbounded: false
        }]);
      }

      if (changed.className || changed.mini) {
        toggle_class(button, "mdc-fab--mini", ctx.mini);
      }

      if (changed.className || changed.exited) {
        toggle_class(button, "mdc-fab--exited", ctx.exited);
      }

      if (changed.className || changed.extended) {
        toggle_class(button, "mdc-fab--extended", ctx.extended);
      }

      if (changed.className || changed.color) {
        toggle_class(button, "smui-fab--color-primary", ctx.color === 'primary');
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
        detach_dev(button);
      }

      if (default_slot) default_slot.d(detaching);
      if (useActions_action && typeof useActions_action.destroy === 'function') useActions_action.destroy();
      if (forwardEvents_action && typeof forwardEvents_action.destroy === 'function') forwardEvents_action.destroy();
      if (Ripple_action && typeof Ripple_action.destroy === 'function') Ripple_action.destroy();
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
      _$$props$ripple = _$$props.ripple,
      ripple = _$$props$ripple === void 0 ? true : _$$props$ripple,
      _$$props$color = _$$props.color,
      color = _$$props$color === void 0 ? 'secondary' : _$$props$color,
      _$$props$mini = _$$props.mini,
      mini = _$$props$mini === void 0 ? false : _$$props$mini,
      _$$props$exited = _$$props.exited,
      exited = _$$props$exited === void 0 ? false : _$$props$exited,
      _$$props$extended = _$$props.extended,
      extended = _$$props$extended === void 0 ? false : _$$props$extended;
  setContext('SMUI:label:context', 'fab');
  setContext('SMUI:icon:context', 'fab');
  var _$$props2 = $$props,
      _$$props2$$$slots = _$$props2.$$slots,
      $$slots = _$$props2$$$slots === void 0 ? {} : _$$props2$$$slots,
      $$scope = _$$props2.$$scope;

  $$self.$set = function ($$new_props) {
    $$invalidate('$$props', $$props = assign(assign({}, $$props), $$new_props));
    if ('use' in $$new_props) $$invalidate('use', use = $$new_props.use);
    if ('class' in $$new_props) $$invalidate('className', className = $$new_props.class);
    if ('ripple' in $$new_props) $$invalidate('ripple', ripple = $$new_props.ripple);
    if ('color' in $$new_props) $$invalidate('color', color = $$new_props.color);
    if ('mini' in $$new_props) $$invalidate('mini', mini = $$new_props.mini);
    if ('exited' in $$new_props) $$invalidate('exited', exited = $$new_props.exited);
    if ('extended' in $$new_props) $$invalidate('extended', extended = $$new_props.extended);
    if ('$$scope' in $$new_props) $$invalidate('$$scope', $$scope = $$new_props.$$scope);
  };

  $$self.$capture_state = function () {
    return {
      use: use,
      className: className,
      ripple: ripple,
      color: color,
      mini: mini,
      exited: exited,
      extended: extended
    };
  };

  $$self.$inject_state = function ($$new_props) {
    $$invalidate('$$props', $$props = assign(assign({}, $$props), $$new_props));
    if ('use' in $$props) $$invalidate('use', use = $$new_props.use);
    if ('className' in $$props) $$invalidate('className', className = $$new_props.className);
    if ('ripple' in $$props) $$invalidate('ripple', ripple = $$new_props.ripple);
    if ('color' in $$props) $$invalidate('color', color = $$new_props.color);
    if ('mini' in $$props) $$invalidate('mini', mini = $$new_props.mini);
    if ('exited' in $$props) $$invalidate('exited', exited = $$new_props.exited);
    if ('extended' in $$props) $$invalidate('extended', extended = $$new_props.extended);
  };

  return _ref = {
    forwardEvents: forwardEvents,
    use: use,
    className: className,
    ripple: ripple,
    color: color,
    mini: mini,
    exited: exited,
    extended: extended,
    $$props: $$props
  }, _defineProperty(_ref, "$$props", $$props = exclude_internal_props($$props)), _defineProperty(_ref, "$$slots", $$slots), _defineProperty(_ref, "$$scope", $$scope), _ref;
}

var Fab =
/*#__PURE__*/
function (_SvelteComponentDev) {
  _inherits(Fab, _SvelteComponentDev);

  function Fab(options) {
    var _this;

    _classCallCheck(this, Fab);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Fab).call(this, options));
    init(_assertThisInitialized(_this), options, instance, create_fragment, safe_not_equal, ["use", "class", "ripple", "color", "mini", "exited", "extended"]);
    dispatch_dev("SvelteRegisterComponent", {
      component: _assertThisInitialized(_this),
      tagName: "Fab",
      options: options,
      id: create_fragment.name
    });
    return _this;
  }

  _createClass(Fab, [{
    key: "use",
    get: function get() {
      throw new Error("<Fab>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    },
    set: function set(value) {
      throw new Error("<Fab>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    }
  }, {
    key: "class",
    get: function get() {
      throw new Error("<Fab>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    },
    set: function set(value) {
      throw new Error("<Fab>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    }
  }, {
    key: "ripple",
    get: function get() {
      throw new Error("<Fab>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    },
    set: function set(value) {
      throw new Error("<Fab>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    }
  }, {
    key: "color",
    get: function get() {
      throw new Error("<Fab>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    },
    set: function set(value) {
      throw new Error("<Fab>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    }
  }, {
    key: "mini",
    get: function get() {
      throw new Error("<Fab>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    },
    set: function set(value) {
      throw new Error("<Fab>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    }
  }, {
    key: "exited",
    get: function get() {
      throw new Error("<Fab>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    },
    set: function set(value) {
      throw new Error("<Fab>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    }
  }, {
    key: "extended",
    get: function get() {
      throw new Error("<Fab>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    },
    set: function set(value) {
      throw new Error("<Fab>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    }
  }]);

  return Fab;
}(SvelteComponentDev);

export { Fab as F };

import { i as init, s as safe_not_equal, d as dispatch_dev, S as SvelteComponentDev, a0 as getContext, $ as setContext, a as assign, e as exclude_internal_props, C as empty, m as insert_dev, E as group_outros, r as transition_out, F as check_outros, t as transition_in, j as detach_dev, c as create_slot, b as current_component, f as element, g as claim_element, h as children, k as set_attributes, a4 as toggle_class, l as add_location, o as get_slot_changes, p as get_slot_context, q as get_spread_update } from './index.d5da4a00.js';
import { _ as _inherits, a as _classCallCheck, b as _possibleConstructorReturn, c as _getPrototypeOf, d as _assertThisInitialized, e as _createClass, g as forwardEventsBuilder, f as exclude, j as _toConsumableArray, u as useActions } from './useActions.b478cae0.js';
import { R as Ripple } from './bare.3cea1bea.js';

var file = "Users/hperrin/repos/svelte-material-ui/packages/button/Button.svelte"; // (23:0) {:else}

function create_else_block(ctx) {
  var button, useActions_action, forwardEvents_action, Ripple_action, current;
  var default_slot_template = ctx.$$slots.default;
  var default_slot = create_slot(default_slot_template, ctx, null);
  var button_levels = [{
    class: "mdc-button " + ctx.className
  }, ctx.actionProp, ctx.defaultProp, ctx.props];
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
      toggle_class(button, "mdc-button--raised", ctx.variant === 'raised');
      toggle_class(button, "mdc-button--unelevated", ctx.variant === 'unelevated');
      toggle_class(button, "mdc-button--outlined", ctx.variant === 'outlined');
      toggle_class(button, "mdc-button--dense", ctx.dense);
      toggle_class(button, "smui-button--color-secondary", ctx.color === 'secondary');
      toggle_class(button, "mdc-card__action", ctx.context === 'card:action');
      toggle_class(button, "mdc-card__action--button", ctx.context === 'card:action');
      toggle_class(button, "mdc-dialog__button", ctx.context === 'dialog:action');
      toggle_class(button, "mdc-top-app-bar__navigation-icon", ctx.context === 'top-app-bar:navigation');
      toggle_class(button, "mdc-top-app-bar__action-item", ctx.context === 'top-app-bar:action');
      toggle_class(button, "mdc-snackbar__action", ctx.context === 'snackbar');
      add_location(button, file, 23, 2, 898);
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
        class: "mdc-button " + ctx.className
      }, changed.actionProp && ctx.actionProp, changed.defaultProp && ctx.defaultProp, changed.props && ctx.props]));

      if (typeof useActions_action.update === 'function' && changed.use) {
        useActions_action.update.call(null, ctx.use);
      }

      if (typeof Ripple_action.update === 'function' && changed.ripple) {
        Ripple_action.update.call(null, [ctx.ripple, {
          unbounded: false
        }]);
      }

      if (changed.className || changed.variant) {
        toggle_class(button, "mdc-button--raised", ctx.variant === 'raised');
        toggle_class(button, "mdc-button--unelevated", ctx.variant === 'unelevated');
        toggle_class(button, "mdc-button--outlined", ctx.variant === 'outlined');
      }

      if (changed.className || changed.dense) {
        toggle_class(button, "mdc-button--dense", ctx.dense);
      }

      if (changed.className || changed.color) {
        toggle_class(button, "smui-button--color-secondary", ctx.color === 'secondary');
      }

      if (changed.className || changed.context) {
        toggle_class(button, "mdc-card__action", ctx.context === 'card:action');
        toggle_class(button, "mdc-card__action--button", ctx.context === 'card:action');
        toggle_class(button, "mdc-dialog__button", ctx.context === 'dialog:action');
        toggle_class(button, "mdc-top-app-bar__navigation-icon", ctx.context === 'top-app-bar:navigation');
        toggle_class(button, "mdc-top-app-bar__action-item", ctx.context === 'top-app-bar:action');
        toggle_class(button, "mdc-snackbar__action", ctx.context === 'snackbar');
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
    id: create_else_block.name,
    type: "else",
    source: "(23:0) {:else}",
    ctx: ctx
  });
  return block;
} // (1:0) {#if href}


function create_if_block(ctx) {
  var a, useActions_action, forwardEvents_action, Ripple_action, current;
  var default_slot_template = ctx.$$slots.default;
  var default_slot = create_slot(default_slot_template, ctx, null);
  var a_levels = [{
    class: "mdc-button " + ctx.className
  }, {
    href: ctx.href
  }, ctx.actionProp, ctx.defaultProp, ctx.props];
  var a_data = {};

  for (var i = 0; i < a_levels.length; i += 1) {
    a_data = assign(a_data, a_levels[i]);
  }

  var block = {
    c: function create() {
      a = element("a");
      if (default_slot) default_slot.c();
      this.h();
    },
    l: function claim(nodes) {
      a = claim_element(nodes, "A", {
        class: true,
        href: true
      }, false);
      var a_nodes = children(a);
      if (default_slot) default_slot.l(a_nodes);
      a_nodes.forEach(detach_dev);
      this.h();
    },
    h: function hydrate() {
      set_attributes(a, a_data);
      toggle_class(a, "mdc-button--raised", ctx.variant === 'raised');
      toggle_class(a, "mdc-button--unelevated", ctx.variant === 'unelevated');
      toggle_class(a, "mdc-button--outlined", ctx.variant === 'outlined');
      toggle_class(a, "mdc-button--dense", ctx.dense);
      toggle_class(a, "smui-button--color-secondary", ctx.color === 'secondary');
      toggle_class(a, "mdc-card__action", ctx.context === 'card:action');
      toggle_class(a, "mdc-card__action--button", ctx.context === 'card:action');
      toggle_class(a, "mdc-dialog__button", ctx.context === 'dialog:action');
      toggle_class(a, "mdc-top-app-bar__navigation-icon", ctx.context === 'top-app-bar:navigation');
      toggle_class(a, "mdc-top-app-bar__action-item", ctx.context === 'top-app-bar:action');
      toggle_class(a, "mdc-snackbar__action", ctx.context === 'snackbar');
      add_location(a, file, 1, 2, 13);
    },
    m: function mount(target, anchor) {
      insert_dev(target, a, anchor);

      if (default_slot) {
        default_slot.m(a, null);
      }

      useActions_action = useActions.call(null, a, ctx.use) || {};
      forwardEvents_action = ctx.forwardEvents.call(null, a) || {};
      Ripple_action = Ripple.call(null, a, [ctx.ripple, {
        unbounded: false
      }]) || {};
      current = true;
    },
    p: function update(changed, ctx) {
      if (default_slot && default_slot.p && changed.$$scope) {
        default_slot.p(get_slot_changes(default_slot_template, ctx, changed, null), get_slot_context(default_slot_template, ctx, null));
      }

      set_attributes(a, get_spread_update(a_levels, [changed.className && {
        class: "mdc-button " + ctx.className
      }, changed.href && {
        href: ctx.href
      }, changed.actionProp && ctx.actionProp, changed.defaultProp && ctx.defaultProp, changed.props && ctx.props]));

      if (typeof useActions_action.update === 'function' && changed.use) {
        useActions_action.update.call(null, ctx.use);
      }

      if (typeof Ripple_action.update === 'function' && changed.ripple) {
        Ripple_action.update.call(null, [ctx.ripple, {
          unbounded: false
        }]);
      }

      if (changed.className || changed.variant) {
        toggle_class(a, "mdc-button--raised", ctx.variant === 'raised');
        toggle_class(a, "mdc-button--unelevated", ctx.variant === 'unelevated');
        toggle_class(a, "mdc-button--outlined", ctx.variant === 'outlined');
      }

      if (changed.className || changed.dense) {
        toggle_class(a, "mdc-button--dense", ctx.dense);
      }

      if (changed.className || changed.color) {
        toggle_class(a, "smui-button--color-secondary", ctx.color === 'secondary');
      }

      if (changed.className || changed.context) {
        toggle_class(a, "mdc-card__action", ctx.context === 'card:action');
        toggle_class(a, "mdc-card__action--button", ctx.context === 'card:action');
        toggle_class(a, "mdc-dialog__button", ctx.context === 'dialog:action');
        toggle_class(a, "mdc-top-app-bar__navigation-icon", ctx.context === 'top-app-bar:navigation');
        toggle_class(a, "mdc-top-app-bar__action-item", ctx.context === 'top-app-bar:action');
        toggle_class(a, "mdc-snackbar__action", ctx.context === 'snackbar');
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
        detach_dev(a);
      }

      if (default_slot) default_slot.d(detaching);
      if (useActions_action && typeof useActions_action.destroy === 'function') useActions_action.destroy();
      if (forwardEvents_action && typeof forwardEvents_action.destroy === 'function') forwardEvents_action.destroy();
      if (Ripple_action && typeof Ripple_action.destroy === 'function') Ripple_action.destroy();
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_if_block.name,
    type: "if",
    source: "(1:0) {#if href}",
    ctx: ctx
  });
  return block;
}

function create_fragment(ctx) {
  var current_block_type_index, if_block, if_block_anchor, current;
  var if_block_creators = [create_if_block, create_else_block];
  var if_blocks = [];

  function select_block_type(changed, ctx) {
    if (ctx.href) return 0;
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
        if_block = if_blocks[current_block_type_index];

        if (!if_block) {
          if_block = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx);
          if_block.c();
        }

        transition_in(if_block, 1);
        if_block.m(if_block_anchor.parentNode, if_block_anchor);
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
      if_blocks[current_block_type_index].d(detaching);

      if (detaching) {
        detach_dev(if_block_anchor);
      }
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
      _$$props$ripple = _$$props.ripple,
      ripple = _$$props$ripple === void 0 ? true : _$$props$ripple,
      _$$props$color = _$$props.color,
      color = _$$props$color === void 0 ? 'primary' : _$$props$color,
      _$$props$variant = _$$props.variant,
      variant = _$$props$variant === void 0 ? 'text' : _$$props$variant,
      _$$props$dense = _$$props.dense,
      dense = _$$props$dense === void 0 ? false : _$$props$dense,
      _$$props$href = _$$props.href,
      href = _$$props$href === void 0 ? null : _$$props$href,
      _$$props$action = _$$props.action,
      action = _$$props$action === void 0 ? 'close' : _$$props$action,
      _$$props$default = _$$props.default,
      defaultAction = _$$props$default === void 0 ? false : _$$props$default;
  var context = getContext('SMUI:button:context');
  setContext('SMUI:label:context', 'button');
  setContext('SMUI:icon:context', 'button');
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
    if ('variant' in $$new_props) $$invalidate('variant', variant = $$new_props.variant);
    if ('dense' in $$new_props) $$invalidate('dense', dense = $$new_props.dense);
    if ('href' in $$new_props) $$invalidate('href', href = $$new_props.href);
    if ('action' in $$new_props) $$invalidate('action', action = $$new_props.action);
    if ('default' in $$new_props) $$invalidate('defaultAction', defaultAction = $$new_props.default);
    if ('$$scope' in $$new_props) $$invalidate('$$scope', $$scope = $$new_props.$$scope);
  };

  $$self.$capture_state = function () {
    return {
      use: use,
      className: className,
      ripple: ripple,
      color: color,
      variant: variant,
      dense: dense,
      href: href,
      action: action,
      defaultAction: defaultAction,
      context: context,
      dialogExcludes: dialogExcludes,
      props: props,
      actionProp: actionProp,
      defaultProp: defaultProp
    };
  };

  $$self.$inject_state = function ($$new_props) {
    $$invalidate('$$props', $$props = assign(assign({}, $$props), $$new_props));
    if ('use' in $$props) $$invalidate('use', use = $$new_props.use);
    if ('className' in $$props) $$invalidate('className', className = $$new_props.className);
    if ('ripple' in $$props) $$invalidate('ripple', ripple = $$new_props.ripple);
    if ('color' in $$props) $$invalidate('color', color = $$new_props.color);
    if ('variant' in $$props) $$invalidate('variant', variant = $$new_props.variant);
    if ('dense' in $$props) $$invalidate('dense', dense = $$new_props.dense);
    if ('href' in $$props) $$invalidate('href', href = $$new_props.href);
    if ('action' in $$props) $$invalidate('action', action = $$new_props.action);
    if ('defaultAction' in $$props) $$invalidate('defaultAction', defaultAction = $$new_props.defaultAction);
    if ('context' in $$props) $$invalidate('context', context = $$new_props.context);
    if ('dialogExcludes' in $$props) $$invalidate('dialogExcludes', dialogExcludes = $$new_props.dialogExcludes);
    if ('props' in $$props) $$invalidate('props', props = $$new_props.props);
    if ('actionProp' in $$props) $$invalidate('actionProp', actionProp = $$new_props.actionProp);
    if ('defaultProp' in $$props) $$invalidate('defaultProp', defaultProp = $$new_props.defaultProp);
  };

  var dialogExcludes, props, actionProp, defaultProp;

  $$self.$$.update = function () {
    var $$dirty = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
      context: 1,
      $$props: 1,
      dialogExcludes: 1,
      action: 1,
      defaultAction: 1
    };

    if ($$dirty.context) {
      $$invalidate('dialogExcludes', dialogExcludes = context === 'dialog:action' ? ['action', 'default'] : []);
    }

    $$invalidate('props', props = exclude($$props, ['use', 'class', 'ripple', 'color', 'variant', 'dense', 'href'].concat(_toConsumableArray(dialogExcludes))));

    if ($$dirty.context || $$dirty.action) {
      $$invalidate('actionProp', actionProp = context === 'dialog:action' && action !== null ? {
        'data-mdc-dialog-action': action
      } : {});
    }

    if ($$dirty.context || $$dirty.defaultAction) {
      $$invalidate('defaultProp', defaultProp = context === 'dialog:action' && defaultAction ? {
        'data-mdc-dialog-button-default': ''
      } : {});
    }
  };

  return {
    forwardEvents: forwardEvents,
    use: use,
    className: className,
    ripple: ripple,
    color: color,
    variant: variant,
    dense: dense,
    href: href,
    action: action,
    defaultAction: defaultAction,
    context: context,
    props: props,
    actionProp: actionProp,
    defaultProp: defaultProp,
    $$props: $$props = exclude_internal_props($$props),
    $$slots: $$slots,
    $$scope: $$scope
  };
}

var Button =
/*#__PURE__*/
function (_SvelteComponentDev) {
  _inherits(Button, _SvelteComponentDev);

  function Button(options) {
    var _this;

    _classCallCheck(this, Button);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Button).call(this, options));
    init(_assertThisInitialized(_this), options, instance, create_fragment, safe_not_equal, ["use", "class", "ripple", "color", "variant", "dense", "href", "action", "default"]);
    dispatch_dev("SvelteRegisterComponent", {
      component: _assertThisInitialized(_this),
      tagName: "Button",
      options: options,
      id: create_fragment.name
    });
    return _this;
  }

  _createClass(Button, [{
    key: "use",
    get: function get() {
      throw new Error("<Button>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    },
    set: function set(value) {
      throw new Error("<Button>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    }
  }, {
    key: "class",
    get: function get() {
      throw new Error("<Button>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    },
    set: function set(value) {
      throw new Error("<Button>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    }
  }, {
    key: "ripple",
    get: function get() {
      throw new Error("<Button>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    },
    set: function set(value) {
      throw new Error("<Button>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    }
  }, {
    key: "color",
    get: function get() {
      throw new Error("<Button>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    },
    set: function set(value) {
      throw new Error("<Button>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    }
  }, {
    key: "variant",
    get: function get() {
      throw new Error("<Button>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    },
    set: function set(value) {
      throw new Error("<Button>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    }
  }, {
    key: "dense",
    get: function get() {
      throw new Error("<Button>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    },
    set: function set(value) {
      throw new Error("<Button>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    }
  }, {
    key: "href",
    get: function get() {
      throw new Error("<Button>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    },
    set: function set(value) {
      throw new Error("<Button>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    }
  }, {
    key: "action",
    get: function get() {
      throw new Error("<Button>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    },
    set: function set(value) {
      throw new Error("<Button>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    }
  }, {
    key: "default",
    get: function get() {
      throw new Error("<Button>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    },
    set: function set(value) {
      throw new Error("<Button>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    }
  }]);

  return Button;
}(SvelteComponentDev);

export { Button as B };

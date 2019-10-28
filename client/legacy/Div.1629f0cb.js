import { i as init, s as safe_not_equal, d as dispatch_dev, S as SvelteComponentDev, $ as setContext, a as assign, e as exclude_internal_props, C as empty, J as mount_component, m as insert_dev, q as get_spread_update, Z as get_spread_object, E as group_outros, r as transition_out, K as destroy_component, F as check_outros, t as transition_in, j as detach_dev, b as current_component, c as create_slot, o as get_slot_changes, p as get_slot_context, f as element, g as claim_element, h as children, k as set_attributes, l as add_location } from './index.d5da4a00.js';
import { i as _setPrototypeOf, _ as _inherits, a as _classCallCheck, b as _possibleConstructorReturn, c as _getPrototypeOf, d as _assertThisInitialized, e as _createClass, j as _toConsumableArray, f as exclude, g as forwardEventsBuilder, h as _defineProperty, u as useActions } from './useActions.b478cae0.js';

function isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === "function") return true;

  try {
    Date.prototype.toString.call(Reflect.construct(Date, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
}

function _construct(Parent, args, Class) {
  if (isNativeReflectConstruct()) {
    _construct = Reflect.construct;
  } else {
    _construct = function _construct(Parent, args, Class) {
      var a = [null];
      a.push.apply(a, args);
      var Constructor = Function.bind.apply(Parent, a);
      var instance = new Constructor();
      if (Class) _setPrototypeOf(instance, Class.prototype);
      return instance;
    };
  }

  return _construct.apply(null, arguments);
}

function create_default_slot(ctx) {
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
    id: create_default_slot.name,
    type: "slot",
    source: "(1:0) <svelte:component   this={component}   use={[forwardEvents, ...use]}   class=\"{smuiClass} {className}\"   {...exclude($$props, ['use', 'class', 'component', 'forwardEvents'])} >",
    ctx: ctx
  });
  return block;
}

function create_fragment(ctx) {
  var switch_instance_anchor, current;
  var switch_instance_spread_levels = [{
    use: [ctx.forwardEvents].concat(_toConsumableArray(ctx.use))
  }, {
    class: "" + ctx.smuiClass + " " + ctx.className
  }, exclude(ctx.$$props, ['use', 'class', 'component', 'forwardEvents'])];
  var switch_value = ctx.component;

  function switch_props(ctx) {
    var switch_instance_props = {
      $$slots: {
        default: [create_default_slot]
      },
      $$scope: {
        ctx: ctx
      }
    };

    for (var i = 0; i < switch_instance_spread_levels.length; i += 1) {
      switch_instance_props = assign(switch_instance_props, switch_instance_spread_levels[i]);
    }

    return {
      props: switch_instance_props,
      $$inline: true
    };
  }

  if (switch_value) {
    var switch_instance = new switch_value(switch_props(ctx));
  }

  var block = {
    c: function create() {
      if (switch_instance) switch_instance.$$.fragment.c();
      switch_instance_anchor = empty();
    },
    l: function claim(nodes) {
      if (switch_instance) switch_instance.$$.fragment.l(nodes);
      switch_instance_anchor = empty();
    },
    m: function mount(target, anchor) {
      if (switch_instance) {
        mount_component(switch_instance, target, anchor);
      }

      insert_dev(target, switch_instance_anchor, anchor);
      current = true;
    },
    p: function update(changed, ctx) {
      var switch_instance_changes = changed.forwardEvents || changed.use || changed.smuiClass || changed.className || changed.exclude || changed.$$props ? get_spread_update(switch_instance_spread_levels, [(changed.forwardEvents || changed.use) && {
        use: [ctx.forwardEvents].concat(_toConsumableArray(ctx.use))
      }, (changed.smuiClass || changed.className) && {
        class: "" + ctx.smuiClass + " " + ctx.className
      }, (changed.exclude || changed.$$props) && get_spread_object(exclude(ctx.$$props, ['use', 'class', 'component', 'forwardEvents']))]) : {};
      if (changed.$$scope) switch_instance_changes.$$scope = {
        changed: changed,
        ctx: ctx
      };

      if (switch_value !== (switch_value = ctx.component)) {
        if (switch_instance) {
          group_outros();
          var old_component = switch_instance;
          transition_out(old_component.$$.fragment, 1, 0, function () {
            destroy_component(old_component, 1);
          });
          check_outros();
        }

        if (switch_value) {
          switch_instance = new switch_value(switch_props(ctx));
          switch_instance.$$.fragment.c();
          transition_in(switch_instance.$$.fragment, 1);
          mount_component(switch_instance, switch_instance_anchor.parentNode, switch_instance_anchor);
        } else {
          switch_instance = null;
        }
      } else if (switch_value) {
        switch_instance.$set(switch_instance_changes);
      }
    },
    i: function intro(local) {
      if (current) return;
      if (switch_instance) transition_in(switch_instance.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      if (switch_instance) transition_out(switch_instance.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      if (detaching) {
        detach_dev(switch_instance_anchor);
      }

      if (switch_instance) destroy_component(switch_instance, detaching);
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

var internals = {
  component: null,
  smuiClass: null,
  contexts: {}
};

function instance($$self, $$props, $$invalidate) {
  var _ref;

  var _$$props = $$props,
      _$$props$use = _$$props.use,
      use = _$$props$use === void 0 ? [] : _$$props$use,
      _$$props$class = _$$props.class,
      className = _$$props$class === void 0 ? '' : _$$props$class,
      _$$props$component = _$$props.component,
      component = _$$props$component === void 0 ? internals.component : _$$props$component,
      _$$props$forwardEvent = _$$props.forwardEvents,
      smuiForwardEvents = _$$props$forwardEvent === void 0 ? [] : _$$props$forwardEvent;
  var smuiClass = internals.class;
  var contexts = internals.contexts;
  var forwardEvents = forwardEventsBuilder(current_component, smuiForwardEvents);

  for (var context in contexts) {
    if (contexts.hasOwnProperty(context)) {
      setContext(context, contexts[context]);
    }
  }

  var _$$props2 = $$props,
      _$$props2$$$slots = _$$props2.$$slots,
      $$slots = _$$props2$$$slots === void 0 ? {} : _$$props2$$$slots,
      $$scope = _$$props2.$$scope;

  $$self.$set = function ($$new_props) {
    $$invalidate('$$props', $$props = assign(assign({}, $$props), $$new_props));
    if ('use' in $$new_props) $$invalidate('use', use = $$new_props.use);
    if ('class' in $$new_props) $$invalidate('className', className = $$new_props.class);
    if ('component' in $$new_props) $$invalidate('component', component = $$new_props.component);
    if ('forwardEvents' in $$new_props) $$invalidate('smuiForwardEvents', smuiForwardEvents = $$new_props.forwardEvents);
    if ('$$scope' in $$new_props) $$invalidate('$$scope', $$scope = $$new_props.$$scope);
  };

  $$self.$capture_state = function () {
    return {
      internals: internals,
      use: use,
      className: className,
      component: component,
      smuiForwardEvents: smuiForwardEvents
    };
  };

  $$self.$inject_state = function ($$new_props) {
    $$invalidate('$$props', $$props = assign(assign({}, $$props), $$new_props));
    if ('use' in $$props) $$invalidate('use', use = $$new_props.use);
    if ('className' in $$props) $$invalidate('className', className = $$new_props.className);
    if ('component' in $$props) $$invalidate('component', component = $$new_props.component);
    if ('smuiForwardEvents' in $$props) $$invalidate('smuiForwardEvents', smuiForwardEvents = $$new_props.smuiForwardEvents);
  };

  return _ref = {
    use: use,
    className: className,
    component: component,
    smuiForwardEvents: smuiForwardEvents,
    smuiClass: smuiClass,
    forwardEvents: forwardEvents,
    $$props: $$props
  }, _defineProperty(_ref, "$$props", $$props = exclude_internal_props($$props)), _defineProperty(_ref, "$$slots", $$slots), _defineProperty(_ref, "$$scope", $$scope), _ref;
}

var ClassAdder =
/*#__PURE__*/
function (_SvelteComponentDev) {
  _inherits(ClassAdder, _SvelteComponentDev);

  function ClassAdder(options) {
    var _this;

    _classCallCheck(this, ClassAdder);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(ClassAdder).call(this, options));
    init(_assertThisInitialized(_this), options, instance, create_fragment, safe_not_equal, ["use", "class", "component", "forwardEvents"]);
    dispatch_dev("SvelteRegisterComponent", {
      component: _assertThisInitialized(_this),
      tagName: "ClassAdder",
      options: options,
      id: create_fragment.name
    });
    return _this;
  }

  _createClass(ClassAdder, [{
    key: "use",
    get: function get() {
      throw new Error("<ClassAdder>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    },
    set: function set(value) {
      throw new Error("<ClassAdder>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    }
  }, {
    key: "class",
    get: function get() {
      throw new Error("<ClassAdder>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    },
    set: function set(value) {
      throw new Error("<ClassAdder>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    }
  }, {
    key: "component",
    get: function get() {
      throw new Error("<ClassAdder>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    },
    set: function set(value) {
      throw new Error("<ClassAdder>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    }
  }, {
    key: "forwardEvents",
    get: function get() {
      throw new Error("<ClassAdder>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    },
    set: function set(value) {
      throw new Error("<ClassAdder>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    }
  }]);

  return ClassAdder;
}(SvelteComponentDev);

function classAdderBuilder(props) {
  function Component() {
    Object.assign(internals, props);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _construct(ClassAdder, args);
  }

  Component.prototype = ClassAdder; // SSR support

  if (ClassAdder.$$render) {
    Component.$$render = function () {
      return Object.assign(internals, props) && ClassAdder.$$render.apply(ClassAdder, arguments);
    };
  }

  if (ClassAdder.render) {
    Component.render = function () {
      return Object.assign(internals, props) && ClassAdder.render.apply(ClassAdder, arguments);
    };
  }

  return Component;
}

var file = "Users/hperrin/repos/svelte-material-ui/packages/common/Div.svelte";

function create_fragment$1(ctx) {
  var div, useActions_action, forwardEvents_action, current;
  var default_slot_template = ctx.$$slots.default;
  var default_slot = create_slot(default_slot_template, ctx, null);
  var div_levels = [exclude(ctx.$$props, ['use'])];
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
      div = claim_element(nodes, "DIV", {}, false);
      var div_nodes = children(div);
      if (default_slot) default_slot.l(div_nodes);
      div_nodes.forEach(detach_dev);
      this.h();
    },
    h: function hydrate() {
      set_attributes(div, div_data);
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

      set_attributes(div, get_spread_update(div_levels, [(changed.exclude || changed.$$props) && exclude(ctx.$$props, ['use'])]));

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
        detach_dev(div);
      }

      if (default_slot) default_slot.d(detaching);
      if (useActions_action && typeof useActions_action.destroy === 'function') useActions_action.destroy();
      if (forwardEvents_action && typeof forwardEvents_action.destroy === 'function') forwardEvents_action.destroy();
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
  var _ref;

  var forwardEvents = forwardEventsBuilder(current_component);
  var _$$props = $$props,
      _$$props$use = _$$props.use,
      use = _$$props$use === void 0 ? [] : _$$props$use;
  var _$$props2 = $$props,
      _$$props2$$$slots = _$$props2.$$slots,
      $$slots = _$$props2$$$slots === void 0 ? {} : _$$props2$$$slots,
      $$scope = _$$props2.$$scope;

  $$self.$set = function ($$new_props) {
    $$invalidate('$$props', $$props = assign(assign({}, $$props), $$new_props));
    if ('use' in $$new_props) $$invalidate('use', use = $$new_props.use);
    if ('$$scope' in $$new_props) $$invalidate('$$scope', $$scope = $$new_props.$$scope);
  };

  $$self.$capture_state = function () {
    return {
      use: use
    };
  };

  $$self.$inject_state = function ($$new_props) {
    $$invalidate('$$props', $$props = assign(assign({}, $$props), $$new_props));
    if ('use' in $$props) $$invalidate('use', use = $$new_props.use);
  };

  return _ref = {
    forwardEvents: forwardEvents,
    use: use,
    $$props: $$props
  }, _defineProperty(_ref, "$$props", $$props = exclude_internal_props($$props)), _defineProperty(_ref, "$$slots", $$slots), _defineProperty(_ref, "$$scope", $$scope), _ref;
}

var Div =
/*#__PURE__*/
function (_SvelteComponentDev) {
  _inherits(Div, _SvelteComponentDev);

  function Div(options) {
    var _this;

    _classCallCheck(this, Div);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Div).call(this, options));
    init(_assertThisInitialized(_this), options, instance$1, create_fragment$1, safe_not_equal, ["use"]);
    dispatch_dev("SvelteRegisterComponent", {
      component: _assertThisInitialized(_this),
      tagName: "Div",
      options: options,
      id: create_fragment$1.name
    });
    return _this;
  }

  _createClass(Div, [{
    key: "use",
    get: function get() {
      throw new Error("<Div>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    },
    set: function set(value) {
      throw new Error("<Div>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    }
  }]);

  return Div;
}(SvelteComponentDev);

export { Div as D, classAdderBuilder as c };

import { i as init, s as safe_not_equal, d as dispatch_dev, S as SvelteComponentDev, c as create_slot, a as assign, e as exclude_internal_props, f as element, g as claim_element, h as children, j as detach_dev, k as set_attributes, l as add_location, m as insert_dev, o as get_slot_changes, p as get_slot_context, q as get_spread_update, t as transition_in, r as transition_out, b as current_component } from './index.d5da4a00.js';
import { _ as _inherits, a as _classCallCheck, b as _possibleConstructorReturn, c as _getPrototypeOf, d as _assertThisInitialized, e as _createClass, f as exclude, g as forwardEventsBuilder, h as _defineProperty, u as useActions } from './useActions.b478cae0.js';

var file = "Users/hperrin/repos/svelte-material-ui/packages/common/H2.svelte";

function create_fragment(ctx) {
  var h2, useActions_action, forwardEvents_action, current;
  var default_slot_template = ctx.$$slots.default;
  var default_slot = create_slot(default_slot_template, ctx, null);
  var h2_levels = [exclude(ctx.$$props, ['use'])];
  var h2_data = {};

  for (var i = 0; i < h2_levels.length; i += 1) {
    h2_data = assign(h2_data, h2_levels[i]);
  }

  var block = {
    c: function create() {
      h2 = element("h2");
      if (default_slot) default_slot.c();
      this.h();
    },
    l: function claim(nodes) {
      h2 = claim_element(nodes, "H2", {}, false);
      var h2_nodes = children(h2);
      if (default_slot) default_slot.l(h2_nodes);
      h2_nodes.forEach(detach_dev);
      this.h();
    },
    h: function hydrate() {
      set_attributes(h2, h2_data);
      add_location(h2, file, 0, 0, 0);
    },
    m: function mount(target, anchor) {
      insert_dev(target, h2, anchor);

      if (default_slot) {
        default_slot.m(h2, null);
      }

      useActions_action = useActions.call(null, h2, ctx.use) || {};
      forwardEvents_action = ctx.forwardEvents.call(null, h2) || {};
      current = true;
    },
    p: function update(changed, ctx) {
      if (default_slot && default_slot.p && changed.$$scope) {
        default_slot.p(get_slot_changes(default_slot_template, ctx, changed, null), get_slot_context(default_slot_template, ctx, null));
      }

      set_attributes(h2, get_spread_update(h2_levels, [(changed.exclude || changed.$$props) && exclude(ctx.$$props, ['use'])]));

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
        detach_dev(h2);
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

var H2 =
/*#__PURE__*/
function (_SvelteComponentDev) {
  _inherits(H2, _SvelteComponentDev);

  function H2(options) {
    var _this;

    _classCallCheck(this, H2);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(H2).call(this, options));
    init(_assertThisInitialized(_this), options, instance, create_fragment, safe_not_equal, ["use"]);
    dispatch_dev("SvelteRegisterComponent", {
      component: _assertThisInitialized(_this),
      tagName: "H2",
      options: options,
      id: create_fragment.name
    });
    return _this;
  }

  _createClass(H2, [{
    key: "use",
    get: function get() {
      throw new Error("<H2>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    },
    set: function set(value) {
      throw new Error("<H2>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    }
  }]);

  return H2;
}(SvelteComponentDev);

export { H2 as H };

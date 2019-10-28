import { i as init, s as safe_not_equal, d as dispatch_dev, S as SvelteComponentDev, c as create_slot, a as assign, $ as setContext, e as exclude_internal_props, f as element, g as claim_element, h as children, j as detach_dev, k as set_attributes, a4 as toggle_class, l as add_location, m as insert_dev, o as get_slot_changes, p as get_slot_context, q as get_spread_update, t as transition_in, r as transition_out, b as current_component, n as noop } from './index.d5da4a00.js';
import { _ as _inherits, a as _classCallCheck, b as _possibleConstructorReturn, c as _getPrototypeOf, d as _assertThisInitialized, e as _createClass, f as exclude, g as forwardEventsBuilder, h as _defineProperty, u as useActions } from './useActions.b478cae0.js';
import { s as styleInject } from './typeof.0d5bf00d.js';
import { c as classAdderBuilder, D as Div } from './Div.1629f0cb.js';
import './Label.35a2c1e8.js';

var css = ".mdc-image-list{display:flex;flex-wrap:wrap;margin:0 auto;padding:0}.mdc-image-list__image-aspect-container,.mdc-image-list__item{position:relative;box-sizing:border-box}.mdc-image-list__item{list-style-type:none}.mdc-image-list__image{width:100%}.mdc-image-list__image-aspect-container .mdc-image-list__image{position:absolute;top:0;right:0;bottom:0;left:0;height:100%;background-repeat:no-repeat;background-position:50%;background-size:cover}.mdc-image-list__image-aspect-container{padding-bottom:100%}.mdc-image-list__image{border-radius:0}.mdc-image-list--with-text-protection .mdc-image-list__supporting{border-radius:0 0 0 0}.mdc-image-list__supporting{color:rgba(0,0,0,.87);color:var(--mdc-theme-text-primary-on-background,rgba(0,0,0,.87));display:flex;align-items:center;justify-content:space-between;box-sizing:border-box;padding:8px 0;line-height:24px}.mdc-image-list__label{font-family:Roboto,sans-serif;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-size:1rem;line-height:1.75rem;font-weight:400;letter-spacing:.00937em;text-decoration:inherit;text-transform:inherit;text-overflow:ellipsis;white-space:nowrap;overflow:hidden}.mdc-image-list--with-text-protection .mdc-image-list__supporting{position:absolute;bottom:0;width:100%;height:48px;padding:0 16px;background:rgba(0,0,0,.6);color:#fff}.mdc-image-list--masonry{display:block}.mdc-image-list--masonry .mdc-image-list__item{break-inside:avoid-column}.mdc-image-list--masonry .mdc-image-list__image{display:block;height:auto}";
styleInject(css);

var file = "Users/hperrin/repos/svelte-material-ui/packages/image-list/ImageList.svelte";

function create_fragment(ctx) {
  var ul, useActions_action, forwardEvents_action, current;
  var default_slot_template = ctx.$$slots.default;
  var default_slot = create_slot(default_slot_template, ctx, null);
  var ul_levels = [{
    class: "mdc-image-list " + ctx.className
  }, exclude(ctx.$$props, ['use', 'class', 'masonry', 'withTextProtection'])];
  var ul_data = {};

  for (var i = 0; i < ul_levels.length; i += 1) {
    ul_data = assign(ul_data, ul_levels[i]);
  }

  var block = {
    c: function create() {
      ul = element("ul");
      if (default_slot) default_slot.c();
      this.h();
    },
    l: function claim(nodes) {
      ul = claim_element(nodes, "UL", {
        class: true
      }, false);
      var ul_nodes = children(ul);
      if (default_slot) default_slot.l(ul_nodes);
      ul_nodes.forEach(detach_dev);
      this.h();
    },
    h: function hydrate() {
      set_attributes(ul, ul_data);
      toggle_class(ul, "mdc-image-list--masonry", ctx.masonry);
      toggle_class(ul, "mdc-image-list--with-text-protection", ctx.withTextProtection);
      add_location(ul, file, 0, 0, 0);
    },
    m: function mount(target, anchor) {
      insert_dev(target, ul, anchor);

      if (default_slot) {
        default_slot.m(ul, null);
      }

      useActions_action = useActions.call(null, ul, ctx.use) || {};
      forwardEvents_action = ctx.forwardEvents.call(null, ul) || {};
      current = true;
    },
    p: function update(changed, ctx) {
      if (default_slot && default_slot.p && changed.$$scope) {
        default_slot.p(get_slot_changes(default_slot_template, ctx, changed, null), get_slot_context(default_slot_template, ctx, null));
      }

      set_attributes(ul, get_spread_update(ul_levels, [changed.className && {
        class: "mdc-image-list " + ctx.className
      }, (changed.exclude || changed.$$props) && exclude(ctx.$$props, ['use', 'class', 'masonry', 'withTextProtection'])]));

      if (typeof useActions_action.update === 'function' && changed.use) {
        useActions_action.update.call(null, ctx.use);
      }

      if (changed.className || changed.masonry) {
        toggle_class(ul, "mdc-image-list--masonry", ctx.masonry);
      }

      if (changed.className || changed.withTextProtection) {
        toggle_class(ul, "mdc-image-list--with-text-protection", ctx.withTextProtection);
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
        detach_dev(ul);
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
      _$$props$masonry = _$$props.masonry,
      masonry = _$$props$masonry === void 0 ? false : _$$props$masonry,
      _$$props$withTextProt = _$$props.withTextProtection,
      withTextProtection = _$$props$withTextProt === void 0 ? false : _$$props$withTextProt;
  setContext('SMUI:label:context', 'image-list');
  var _$$props2 = $$props,
      _$$props2$$$slots = _$$props2.$$slots,
      $$slots = _$$props2$$$slots === void 0 ? {} : _$$props2$$$slots,
      $$scope = _$$props2.$$scope;

  $$self.$set = function ($$new_props) {
    $$invalidate('$$props', $$props = assign(assign({}, $$props), $$new_props));
    if ('use' in $$new_props) $$invalidate('use', use = $$new_props.use);
    if ('class' in $$new_props) $$invalidate('className', className = $$new_props.class);
    if ('masonry' in $$new_props) $$invalidate('masonry', masonry = $$new_props.masonry);
    if ('withTextProtection' in $$new_props) $$invalidate('withTextProtection', withTextProtection = $$new_props.withTextProtection);
    if ('$$scope' in $$new_props) $$invalidate('$$scope', $$scope = $$new_props.$$scope);
  };

  $$self.$capture_state = function () {
    return {
      use: use,
      className: className,
      masonry: masonry,
      withTextProtection: withTextProtection
    };
  };

  $$self.$inject_state = function ($$new_props) {
    $$invalidate('$$props', $$props = assign(assign({}, $$props), $$new_props));
    if ('use' in $$props) $$invalidate('use', use = $$new_props.use);
    if ('className' in $$props) $$invalidate('className', className = $$new_props.className);
    if ('masonry' in $$props) $$invalidate('masonry', masonry = $$new_props.masonry);
    if ('withTextProtection' in $$props) $$invalidate('withTextProtection', withTextProtection = $$new_props.withTextProtection);
  };

  return _ref = {
    forwardEvents: forwardEvents,
    use: use,
    className: className,
    masonry: masonry,
    withTextProtection: withTextProtection,
    $$props: $$props
  }, _defineProperty(_ref, "$$props", $$props = exclude_internal_props($$props)), _defineProperty(_ref, "$$slots", $$slots), _defineProperty(_ref, "$$scope", $$scope), _ref;
}

var ImageList =
/*#__PURE__*/
function (_SvelteComponentDev) {
  _inherits(ImageList, _SvelteComponentDev);

  function ImageList(options) {
    var _this;

    _classCallCheck(this, ImageList);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(ImageList).call(this, options));
    init(_assertThisInitialized(_this), options, instance, create_fragment, safe_not_equal, ["use", "class", "masonry", "withTextProtection"]);
    dispatch_dev("SvelteRegisterComponent", {
      component: _assertThisInitialized(_this),
      tagName: "ImageList",
      options: options,
      id: create_fragment.name
    });
    return _this;
  }

  _createClass(ImageList, [{
    key: "use",
    get: function get() {
      throw new Error("<ImageList>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    },
    set: function set(value) {
      throw new Error("<ImageList>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    }
  }, {
    key: "class",
    get: function get() {
      throw new Error("<ImageList>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    },
    set: function set(value) {
      throw new Error("<ImageList>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    }
  }, {
    key: "masonry",
    get: function get() {
      throw new Error("<ImageList>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    },
    set: function set(value) {
      throw new Error("<ImageList>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    }
  }, {
    key: "withTextProtection",
    get: function get() {
      throw new Error("<ImageList>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    },
    set: function set(value) {
      throw new Error("<ImageList>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    }
  }]);

  return ImageList;
}(SvelteComponentDev);

var file$1 = "Users/hperrin/repos/svelte-material-ui/packages/common/Li.svelte";

function create_fragment$1(ctx) {
  var li, useActions_action, forwardEvents_action, current;
  var default_slot_template = ctx.$$slots.default;
  var default_slot = create_slot(default_slot_template, ctx, null);
  var li_levels = [exclude(ctx.$$props, ['use'])];
  var li_data = {};

  for (var i = 0; i < li_levels.length; i += 1) {
    li_data = assign(li_data, li_levels[i]);
  }

  var block = {
    c: function create() {
      li = element("li");
      if (default_slot) default_slot.c();
      this.h();
    },
    l: function claim(nodes) {
      li = claim_element(nodes, "LI", {}, false);
      var li_nodes = children(li);
      if (default_slot) default_slot.l(li_nodes);
      li_nodes.forEach(detach_dev);
      this.h();
    },
    h: function hydrate() {
      set_attributes(li, li_data);
      add_location(li, file$1, 1, 0, 1);
    },
    m: function mount(target, anchor) {
      insert_dev(target, li, anchor);

      if (default_slot) {
        default_slot.m(li, null);
      }

      useActions_action = useActions.call(null, li, ctx.use) || {};
      forwardEvents_action = ctx.forwardEvents.call(null, li) || {};
      current = true;
    },
    p: function update(changed, ctx) {
      if (default_slot && default_slot.p && changed.$$scope) {
        default_slot.p(get_slot_changes(default_slot_template, ctx, changed, null), get_slot_context(default_slot_template, ctx, null));
      }

      set_attributes(li, get_spread_update(li_levels, [(changed.exclude || changed.$$props) && exclude(ctx.$$props, ['use'])]));

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
        detach_dev(li);
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

var Li =
/*#__PURE__*/
function (_SvelteComponentDev) {
  _inherits(Li, _SvelteComponentDev);

  function Li(options) {
    var _this;

    _classCallCheck(this, Li);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Li).call(this, options));
    init(_assertThisInitialized(_this), options, instance$1, create_fragment$1, safe_not_equal, ["use"]);
    dispatch_dev("SvelteRegisterComponent", {
      component: _assertThisInitialized(_this),
      tagName: "Li",
      options: options,
      id: create_fragment$1.name
    });
    return _this;
  }

  _createClass(Li, [{
    key: "use",
    get: function get() {
      throw new Error("<Li>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    },
    set: function set(value) {
      throw new Error("<Li>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    }
  }]);

  return Li;
}(SvelteComponentDev);

var Item = classAdderBuilder({
  class: 'mdc-image-list__item',
  component: Li,
  contexts: {}
});

var ImageAspectContainer = classAdderBuilder({
  class: 'mdc-image-list__image-aspect-container',
  component: Div,
  contexts: {}
});

var file$2 = "Users/hperrin/repos/svelte-material-ui/packages/common/Img.svelte";

function create_fragment$2(ctx) {
  var img, useActions_action, forwardEvents_action;
  var img_levels = [{
    alt: ctx.alt
  }, exclude(ctx.$$props, ['use', 'alt'])];
  var img_data = {};

  for (var i = 0; i < img_levels.length; i += 1) {
    img_data = assign(img_data, img_levels[i]);
  }

  var block = {
    c: function create() {
      img = element("img");
      this.h();
    },
    l: function claim(nodes) {
      img = claim_element(nodes, "IMG", {
        alt: true
      }, false);
      var img_nodes = children(img);
      img_nodes.forEach(detach_dev);
      this.h();
    },
    h: function hydrate() {
      set_attributes(img, img_data);
      add_location(img, file$2, 1, 0, 1);
    },
    m: function mount(target, anchor) {
      insert_dev(target, img, anchor);
      useActions_action = useActions.call(null, img, ctx.use) || {};
      forwardEvents_action = ctx.forwardEvents.call(null, img) || {};
    },
    p: function update(changed, ctx) {
      set_attributes(img, get_spread_update(img_levels, [changed.alt && {
        alt: ctx.alt
      }, (changed.exclude || changed.$$props) && exclude(ctx.$$props, ['use', 'alt'])]));

      if (typeof useActions_action.update === 'function' && changed.use) {
        useActions_action.update.call(null, ctx.use);
      }
    },
    i: noop,
    o: noop,
    d: function destroy(detaching) {
      if (detaching) {
        detach_dev(img);
      }

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
  var forwardEvents = forwardEventsBuilder(current_component);
  var _$$props = $$props,
      _$$props$use = _$$props.use,
      use = _$$props$use === void 0 ? [] : _$$props$use,
      _$$props$alt = _$$props.alt,
      alt = _$$props$alt === void 0 ? '' : _$$props$alt;

  $$self.$set = function ($$new_props) {
    $$invalidate('$$props', $$props = assign(assign({}, $$props), $$new_props));
    if ('use' in $$new_props) $$invalidate('use', use = $$new_props.use);
    if ('alt' in $$new_props) $$invalidate('alt', alt = $$new_props.alt);
  };

  $$self.$capture_state = function () {
    return {
      use: use,
      alt: alt
    };
  };

  $$self.$inject_state = function ($$new_props) {
    $$invalidate('$$props', $$props = assign(assign({}, $$props), $$new_props));
    if ('use' in $$props) $$invalidate('use', use = $$new_props.use);
    if ('alt' in $$props) $$invalidate('alt', alt = $$new_props.alt);
  };

  return _defineProperty({
    forwardEvents: forwardEvents,
    use: use,
    alt: alt,
    $$props: $$props
  }, "$$props", $$props = exclude_internal_props($$props));
}

var Img =
/*#__PURE__*/
function (_SvelteComponentDev) {
  _inherits(Img, _SvelteComponentDev);

  function Img(options) {
    var _this;

    _classCallCheck(this, Img);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Img).call(this, options));
    init(_assertThisInitialized(_this), options, instance$2, create_fragment$2, safe_not_equal, ["use", "alt"]);
    dispatch_dev("SvelteRegisterComponent", {
      component: _assertThisInitialized(_this),
      tagName: "Img",
      options: options,
      id: create_fragment$2.name
    });
    return _this;
  }

  _createClass(Img, [{
    key: "use",
    get: function get() {
      throw new Error("<Img>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    },
    set: function set(value) {
      throw new Error("<Img>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    }
  }, {
    key: "alt",
    get: function get() {
      throw new Error("<Img>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    },
    set: function set(value) {
      throw new Error("<Img>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    }
  }]);

  return Img;
}(SvelteComponentDev);

var Image = classAdderBuilder({
  class: 'mdc-image-list__image',
  component: Img,
  contexts: {}
});

var Supporting = classAdderBuilder({
  class: 'mdc-image-list__supporting',
  component: Div,
  contexts: {}
});

export { ImageList as I, Supporting as S, Item as a, ImageAspectContainer as b, Image as c };

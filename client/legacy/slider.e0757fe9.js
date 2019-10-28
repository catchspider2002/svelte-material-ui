import { u as _inherits, v as _classCallCheck, w as _possibleConstructorReturn, x as _getPrototypeOf, i as init, s as safe_not_equal, y as _assertThisInitialized, d as dispatch_dev, S as SvelteComponentDev, G as binding_callbacks, I as bind, M as space, f as element, T as text, N as claim_space, g as claim_element, h as children, U as claim_text, j as detach_dev, l as add_location, O as attr_dev, m as insert_dev, P as append_dev, J as mount_component, X as set_data_dev, t as transition_in, r as transition_out, K as destroy_component, W as set_style, L as add_flush_callback } from './index.d5da4a00.js';
import './useActions.b478cae0.js';
import './typeof.0d5bf00d.js';
import './prefixFilter.1941fe02.js';
import { F as FormField } from './index.c408e6b6.js';
import { S as Slider } from './index.ec807994.js';

var file = "src/routes/demo/slider.svelte"; // (11:6) <span slot="label" style="padding-right: 12px; width: max-content; display: block;">

function create_label_slot(ctx) {
  var span, t;
  var block = {
    c: function create() {
      span = element("span");
      t = text("Amount of Wonder");
      this.h();
    },
    l: function claim(nodes) {
      span = claim_element(nodes, "SPAN", {
        slot: true,
        style: true
      }, false);
      var span_nodes = children(span);
      t = claim_text(span_nodes, "Amount of Wonder");
      span_nodes.forEach(detach_dev);
      this.h();
    },
    h: function hydrate() {
      attr_dev(span, "slot", "label");
      set_style(span, "padding-right", "12px");
      set_style(span, "width", "max-content");
      set_style(span, "display", "block");
      add_location(span, file, 10, 6, 183);
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
    id: create_label_slot.name,
    type: "slot",
    source: "(11:6) <span slot=\"label\" style=\"padding-right: 12px; width: max-content; display: block;\">",
    ctx: ctx
  });
  return block;
} // (9:4) <FormField align="end" style="display: flex;">


function create_default_slot(ctx) {
  var updating_value, t, current;

  function slider_value_binding(value_1) {
    ctx.slider_value_binding.call(null, value_1);
    updating_value = true;
    add_flush_callback(function () {
      return updating_value = false;
    });
  }

  var slider_props = {};

  if (ctx.value !== void 0) {
    slider_props.value = ctx.value;
  }

  var slider = new Slider({
    props: slider_props,
    $$inline: true
  });
  binding_callbacks.push(function () {
    return bind(slider, 'value', slider_value_binding);
  });
  var block = {
    c: function create() {
      slider.$$.fragment.c();
      t = space();
    },
    l: function claim(nodes) {
      slider.$$.fragment.l(nodes);
      t = claim_space(nodes);
    },
    m: function mount(target, anchor) {
      mount_component(slider, target, anchor);
      insert_dev(target, t, anchor);
      current = true;
    },
    p: function update(changed, ctx) {
      var slider_changes = {};

      if (!updating_value && changed.value) {
        slider_changes.value = ctx.value;
      }

      slider.$set(slider_changes);
    },
    i: function intro(local) {
      if (current) return;
      transition_in(slider.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(slider.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      destroy_component(slider, detaching);

      if (detaching) {
        detach_dev(t);
      }
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_default_slot.name,
    type: "slot",
    source: "(9:4) <FormField align=\"end\" style=\"display: flex;\">",
    ctx: ctx
  });
  return block;
}

function create_fragment(ctx) {
  var t0, section, h2, t1, t2, div0, t3, pre, t4, t5, t6, div1, t7, updating_value, t8, div2, t9, updating_value_1, current;
  var formfield = new FormField({
    props: {
      align: "end",
      style: "display: flex;",
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

  function slider0_value_binding(value_1) {
    ctx.slider0_value_binding.call(null, value_1);
    updating_value = true;
    add_flush_callback(function () {
      return updating_value = false;
    });
  }

  var slider0_props = {
    min: -10,
    max: 10,
    step: 2,
    discrete: true
  };

  if (ctx.value2 !== void 0) {
    slider0_props.value = ctx.value2;
  }

  var slider0 = new Slider({
    props: slider0_props,
    $$inline: true
  });
  binding_callbacks.push(function () {
    return bind(slider0, 'value', slider0_value_binding);
  });

  function slider1_value_binding(value_2) {
    ctx.slider1_value_binding.call(null, value_2);
    updating_value_1 = true;
    add_flush_callback(function () {
      return updating_value_1 = false;
    });
  }

  var slider1_props = {
    min: -10,
    max: 10,
    step: 2,
    discrete: true,
    displayMarkers: true
  };

  if (ctx.value3 !== void 0) {
    slider1_props.value = ctx.value3;
  }

  var slider1 = new Slider({
    props: slider1_props,
    $$inline: true
  });
  binding_callbacks.push(function () {
    return bind(slider1, 'value', slider1_value_binding);
  });
  var block = {
    c: function create() {
      t0 = space();
      section = element("section");
      h2 = element("h2");
      t1 = text("Slider");
      t2 = space();
      div0 = element("div");
      formfield.$$.fragment.c();
      t3 = space();
      pre = element("pre");
      t4 = text("Value: ");
      t5 = text(ctx.value);
      t6 = space();
      div1 = element("div");
      t7 = text("Discrete with min/max/step:\n\n    ");
      slider0.$$.fragment.c();
      t8 = space();
      div2 = element("div");
      t9 = text("Discrete with min/max/step and tick marks:\n\n    ");
      slider1.$$.fragment.c();
      this.h();
    },
    l: function claim(nodes) {
      t0 = claim_space(nodes);
      section = claim_element(nodes, "SECTION", {}, false);
      var section_nodes = children(section);
      h2 = claim_element(section_nodes, "H2", {}, false);
      var h2_nodes = children(h2);
      t1 = claim_text(h2_nodes, "Slider");
      h2_nodes.forEach(detach_dev);
      t2 = claim_space(section_nodes);
      div0 = claim_element(section_nodes, "DIV", {}, false);
      var div0_nodes = children(div0);
      formfield.$$.fragment.l(div0_nodes);
      div0_nodes.forEach(detach_dev);
      t3 = claim_space(section_nodes);
      pre = claim_element(section_nodes, "PRE", {
        class: true
      }, false);
      var pre_nodes = children(pre);
      t4 = claim_text(pre_nodes, "Value: ");
      t5 = claim_text(pre_nodes, ctx.value);
      pre_nodes.forEach(detach_dev);
      t6 = claim_space(section_nodes);
      div1 = claim_element(section_nodes, "DIV", {}, false);
      var div1_nodes = children(div1);
      t7 = claim_text(div1_nodes, "Discrete with min/max/step:\n\n    ");
      slider0.$$.fragment.l(div1_nodes);
      div1_nodes.forEach(detach_dev);
      t8 = claim_space(section_nodes);
      div2 = claim_element(section_nodes, "DIV", {}, false);
      var div2_nodes = children(div2);
      t9 = claim_text(div2_nodes, "Discrete with min/max/step and tick marks:\n\n    ");
      slider1.$$.fragment.l(div2_nodes);
      div2_nodes.forEach(detach_dev);
      section_nodes.forEach(detach_dev);
      this.h();
    },
    h: function hydrate() {
      document.title = "Slider - SMUI";
      add_location(h2, file, 5, 2, 73);
      add_location(div0, file, 7, 2, 92);
      attr_dev(pre, "class", "status");
      add_location(pre, file, 14, 2, 320);
      add_location(div1, file, 16, 2, 364);
      add_location(div2, file, 22, 2, 487);
      add_location(section, file, 4, 0, 61);
    },
    m: function mount(target, anchor) {
      insert_dev(target, t0, anchor);
      insert_dev(target, section, anchor);
      append_dev(section, h2);
      append_dev(h2, t1);
      append_dev(section, t2);
      append_dev(section, div0);
      mount_component(formfield, div0, null);
      append_dev(section, t3);
      append_dev(section, pre);
      append_dev(pre, t4);
      append_dev(pre, t5);
      append_dev(section, t6);
      append_dev(section, div1);
      append_dev(div1, t7);
      mount_component(slider0, div1, null);
      append_dev(section, t8);
      append_dev(section, div2);
      append_dev(div2, t9);
      mount_component(slider1, div2, null);
      current = true;
    },
    p: function update(changed, ctx) {
      var formfield_changes = {};
      if (changed.$$scope || changed.value) formfield_changes.$$scope = {
        changed: changed,
        ctx: ctx
      };
      formfield.$set(formfield_changes);

      if (!current || changed.value) {
        set_data_dev(t5, ctx.value);
      }

      var slider0_changes = {};

      if (!updating_value && changed.value2) {
        slider0_changes.value = ctx.value2;
      }

      slider0.$set(slider0_changes);
      var slider1_changes = {};

      if (!updating_value_1 && changed.value3) {
        slider1_changes.value = ctx.value3;
      }

      slider1.$set(slider1_changes);
    },
    i: function intro(local) {
      if (current) return;
      transition_in(formfield.$$.fragment, local);
      transition_in(slider0.$$.fragment, local);
      transition_in(slider1.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(formfield.$$.fragment, local);
      transition_out(slider0.$$.fragment, local);
      transition_out(slider1.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      if (detaching) {
        detach_dev(t0);
        detach_dev(section);
      }

      destroy_component(formfield);
      destroy_component(slider0);
      destroy_component(slider1);
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
  var value = 50;
  var value2 = 0;
  var value3 = 0;

  function slider_value_binding(value_1) {
    value = value_1;
    $$invalidate('value', value);
  }

  function slider0_value_binding(value_1) {
    value2 = value_1;
    $$invalidate('value2', value2);
  }

  function slider1_value_binding(value_2) {
    value3 = value_2;
    $$invalidate('value3', value3);
  }

  $$self.$capture_state = function () {
    return {};
  };

  $$self.$inject_state = function ($$props) {
    if ('value' in $$props) $$invalidate('value', value = $$props.value);
    if ('value2' in $$props) $$invalidate('value2', value2 = $$props.value2);
    if ('value3' in $$props) $$invalidate('value3', value3 = $$props.value3);
  };

  return {
    value: value,
    value2: value2,
    value3: value3,
    slider_value_binding: slider_value_binding,
    slider0_value_binding: slider0_value_binding,
    slider1_value_binding: slider1_value_binding
  };
}

var Slider_1 =
/*#__PURE__*/
function (_SvelteComponentDev) {
  _inherits(Slider_1, _SvelteComponentDev);

  function Slider_1(options) {
    var _this;

    _classCallCheck(this, Slider_1);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Slider_1).call(this, options));
    init(_assertThisInitialized(_this), options, instance, create_fragment, safe_not_equal, []);
    dispatch_dev("SvelteRegisterComponent", {
      component: _assertThisInitialized(_this),
      tagName: "Slider_1",
      options: options,
      id: create_fragment.name
    });
    return _this;
  }

  return Slider_1;
}(SvelteComponentDev);

export default Slider_1;

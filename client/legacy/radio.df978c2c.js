import { u as _inherits, v as _classCallCheck, w as _possibleConstructorReturn, x as _getPrototypeOf, i as init, s as safe_not_equal, y as _assertThisInitialized, d as dispatch_dev, S as SvelteComponentDev, J as mount_component, t as transition_in, r as transition_out, K as destroy_component, M as space, f as element, T as text, N as claim_space, g as claim_element, h as children, U as claim_text, j as detach_dev, l as add_location, O as attr_dev, m as insert_dev, P as append_dev, E as group_outros, F as check_outros, X as set_data_dev, a8 as destroy_each, G as binding_callbacks, I as bind, n as noop, L as add_flush_callback } from './index.d5da4a00.js';
import './useActions.b478cae0.js';
import './typeof.0d5bf00d.js';
import './prefixFilter.1941fe02.js';
import { F as FormField } from './index.c408e6b6.js';
import { R as Radio } from './index.405f5ecb.js';

var file = "src/routes/demo/radio.svelte";

function get_each_context(ctx, list, i) {
  var child_ctx = Object.create(ctx);
  child_ctx.option = list[i];
  return child_ctx;
} // (12:8) <span slot="label">


function create_label_slot(ctx) {
  var span,
      t0_value = ctx.option.name + "",
      t0,
      t1_value = ctx.option.disabled ? ' (disabled)' : '' + "",
      t1;
  var block = {
    c: function create() {
      span = element("span");
      t0 = text(t0_value);
      t1 = text(t1_value);
      this.h();
    },
    l: function claim(nodes) {
      span = claim_element(nodes, "SPAN", {
        slot: true
      }, false);
      var span_nodes = children(span);
      t0 = claim_text(span_nodes, t0_value);
      t1 = claim_text(span_nodes, t1_value);
      span_nodes.forEach(detach_dev);
      this.h();
    },
    h: function hydrate() {
      attr_dev(span, "slot", "label");
      add_location(span, file, 11, 8, 239);
    },
    m: function mount(target, anchor) {
      insert_dev(target, span, anchor);
      append_dev(span, t0);
      append_dev(span, t1);
    },
    p: noop,
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
    source: "(12:8) <span slot=\"label\">",
    ctx: ctx
  });
  return block;
} // (10:6) <FormField>


function create_default_slot(ctx) {
  var updating_group, t0, t1, current;

  function radio_group_binding(value) {
    ctx.radio_group_binding.call(null, value);
    updating_group = true;
    add_flush_callback(function () {
      return updating_group = false;
    });
  }

  var radio_props = {
    value: ctx.option.name,
    disabled: ctx.option.disabled
  };

  if (ctx.selected !== void 0) {
    radio_props.group = ctx.selected;
  }

  var radio = new Radio({
    props: radio_props,
    $$inline: true
  });
  binding_callbacks.push(function () {
    return bind(radio, 'group', radio_group_binding);
  });
  var block = {
    c: function create() {
      radio.$$.fragment.c();
      t0 = space();
      t1 = space();
    },
    l: function claim(nodes) {
      radio.$$.fragment.l(nodes);
      t0 = claim_space(nodes);
      t1 = claim_space(nodes);
    },
    m: function mount(target, anchor) {
      mount_component(radio, target, anchor);
      insert_dev(target, t0, anchor);
      insert_dev(target, t1, anchor);
      current = true;
    },
    p: function update(changed, ctx) {
      var radio_changes = {};

      if (!updating_group && changed.selected) {
        radio_changes.group = ctx.selected;
      }

      radio.$set(radio_changes);
    },
    i: function intro(local) {
      if (current) return;
      transition_in(radio.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(radio.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      destroy_component(radio, detaching);

      if (detaching) {
        detach_dev(t0);
        detach_dev(t1);
      }
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_default_slot.name,
    type: "slot",
    source: "(10:6) <FormField>",
    ctx: ctx
  });
  return block;
} // (9:4) {#each options as option}


function create_each_block(ctx) {
  var current;
  var formfield = new FormField({
    props: {
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
  var block = {
    c: function create() {
      formfield.$$.fragment.c();
    },
    l: function claim(nodes) {
      formfield.$$.fragment.l(nodes);
    },
    m: function mount(target, anchor) {
      mount_component(formfield, target, anchor);
      current = true;
    },
    p: function update(changed, ctx) {
      var formfield_changes = {};
      if (changed.$$scope || changed.selected) formfield_changes.$$scope = {
        changed: changed,
        ctx: ctx
      };
      formfield.$set(formfield_changes);
    },
    i: function intro(local) {
      if (current) return;
      transition_in(formfield.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(formfield.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      destroy_component(formfield, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_each_block.name,
    type: "each",
    source: "(9:4) {#each options as option}",
    ctx: ctx
  });
  return block;
}

function create_fragment(ctx) {
  var t0, section, h2, t1, t2, div, t3, pre, t4, t5, current;
  var each_value = ctx.options;
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
      t0 = space();
      section = element("section");
      h2 = element("h2");
      t1 = text("Radio");
      t2 = space();
      div = element("div");

      for (var _i = 0; _i < each_blocks.length; _i += 1) {
        each_blocks[_i].c();
      }

      t3 = space();
      pre = element("pre");
      t4 = text("Selected: ");
      t5 = text(ctx.selected);
      this.h();
    },
    l: function claim(nodes) {
      t0 = claim_space(nodes);
      section = claim_element(nodes, "SECTION", {}, false);
      var section_nodes = children(section);
      h2 = claim_element(section_nodes, "H2", {}, false);
      var h2_nodes = children(h2);
      t1 = claim_text(h2_nodes, "Radio");
      h2_nodes.forEach(detach_dev);
      t2 = claim_space(section_nodes);
      div = claim_element(section_nodes, "DIV", {}, false);
      var div_nodes = children(div);

      for (var _i2 = 0; _i2 < each_blocks.length; _i2 += 1) {
        each_blocks[_i2].l(div_nodes);
      }

      div_nodes.forEach(detach_dev);
      t3 = claim_space(section_nodes);
      pre = claim_element(section_nodes, "PRE", {
        class: true
      }, false);
      var pre_nodes = children(pre);
      t4 = claim_text(pre_nodes, "Selected: ");
      t5 = claim_text(pre_nodes, ctx.selected);
      pre_nodes.forEach(detach_dev);
      section_nodes.forEach(detach_dev);
      this.h();
    },
    h: function hydrate() {
      document.title = "Radio - SMUI";
      add_location(h2, file, 5, 2, 72);
      add_location(div, file, 7, 2, 90);
      attr_dev(pre, "class", "status");
      add_location(pre, file, 16, 2, 360);
      add_location(section, file, 4, 0, 60);
    },
    m: function mount(target, anchor) {
      insert_dev(target, t0, anchor);
      insert_dev(target, section, anchor);
      append_dev(section, h2);
      append_dev(h2, t1);
      append_dev(section, t2);
      append_dev(section, div);

      for (var _i3 = 0; _i3 < each_blocks.length; _i3 += 1) {
        each_blocks[_i3].m(div, null);
      }

      append_dev(section, t3);
      append_dev(section, pre);
      append_dev(pre, t4);
      append_dev(pre, t5);
      current = true;
    },
    p: function update(changed, ctx) {
      if (changed.options || changed.selected) {
        each_value = ctx.options;

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

            each_blocks[_i4].m(div, null);
          }
        }

        group_outros();

        for (_i4 = each_value.length; _i4 < each_blocks.length; _i4 += 1) {
          out(_i4);
        }

        check_outros();
      }

      if (!current || changed.selected) {
        set_data_dev(t5, ctx.selected);
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
      if (detaching) {
        detach_dev(t0);
        detach_dev(section);
      }

      destroy_each(each_blocks, detaching);
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
  var options = [{
    name: 'Bashful',
    disabled: false
  }, {
    name: 'Doc',
    disabled: true
  }, {
    name: 'Dopey',
    disabled: false
  }, {
    name: 'Happy',
    disabled: false
  }, {
    name: 'Sleepy',
    disabled: false
  }, {
    name: 'Sneezy',
    disabled: false
  }, {
    name: 'Grumpy',
    disabled: false
  }];
  var selected = 'Grumpy';

  function radio_group_binding(value) {
    selected = value;
    $$invalidate('selected', selected);
  }

  $$self.$capture_state = function () {
    return {};
  };

  $$self.$inject_state = function ($$props) {
    if ('options' in $$props) $$invalidate('options', options = $$props.options);
    if ('selected' in $$props) $$invalidate('selected', selected = $$props.selected);
  };

  return {
    options: options,
    selected: selected,
    radio_group_binding: radio_group_binding
  };
}

var Radio_1 =
/*#__PURE__*/
function (_SvelteComponentDev) {
  _inherits(Radio_1, _SvelteComponentDev);

  function Radio_1(options) {
    var _this;

    _classCallCheck(this, Radio_1);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Radio_1).call(this, options));
    init(_assertThisInitialized(_this), options, instance, create_fragment, safe_not_equal, []);
    dispatch_dev("SvelteRegisterComponent", {
      component: _assertThisInitialized(_this),
      tagName: "Radio_1",
      options: options,
      id: create_fragment.name
    });
    return _this;
  }

  return Radio_1;
}(SvelteComponentDev);

export default Radio_1;

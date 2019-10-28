import { u as _inherits, v as _classCallCheck, w as _possibleConstructorReturn, x as _getPrototypeOf, i as init, s as safe_not_equal, y as _assertThisInitialized, d as dispatch_dev, S as SvelteComponentDev, G as binding_callbacks, I as bind, J as mount_component, t as transition_in, r as transition_out, K as destroy_component, M as space, f as element, T as text, N as claim_space, g as claim_element, h as children, U as claim_text, j as detach_dev, l as add_location, O as attr_dev, m as insert_dev, P as append_dev, X as set_data_dev, E as group_outros, F as check_outros, a8 as destroy_each, L as add_flush_callback, n as noop } from './index.d5da4a00.js';
import './asyncToGenerator.0781946b.js';
import './useActions.b478cae0.js';
import './typeof.0d5bf00d.js';
import { B as Button } from './index.35ab1463.js';
import './bare.3cea1bea.js';
import './Button.d401af18.js';
import './Label.35a2c1e8.js';
import './Icon.3c6823d4.js';
import { C as Checkbox } from './index.294795e2.js';
import './prefixFilter.1941fe02.js';
import { F as FormField } from './index.c408e6b6.js';

var file = "src/routes/demo/checkbox.svelte";

function get_each_context(ctx, list, i) {
  var child_ctx = Object.create(ctx);
  child_ctx.option = list[i];
  return child_ctx;
} // (11:6) <span slot="label">


function create_label_slot_3(ctx) {
  var span, t;
  var block = {
    c: function create() {
      span = element("span");
      t = text("Remember me.");
      this.h();
    },
    l: function claim(nodes) {
      span = claim_element(nodes, "SPAN", {
        slot: true
      }, false);
      var span_nodes = children(span);
      t = claim_text(span_nodes, "Remember me.");
      span_nodes.forEach(detach_dev);
      this.h();
    },
    h: function hydrate() {
      attr_dev(span, "slot", "label");
      add_location(span, file, 10, 6, 173);
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
    id: create_label_slot_3.name,
    type: "slot",
    source: "(11:6) <span slot=\"label\">",
    ctx: ctx
  });
  return block;
} // (9:4) <FormField>


function create_default_slot_4(ctx) {
  var updating_checked, t, current;

  function checkbox_checked_binding(value) {
    ctx.checkbox_checked_binding.call(null, value);
    updating_checked = true;
    add_flush_callback(function () {
      return updating_checked = false;
    });
  }

  var checkbox_props = {};

  if (ctx.simpleSelected !== void 0) {
    checkbox_props.checked = ctx.simpleSelected;
  }

  var checkbox = new Checkbox({
    props: checkbox_props,
    $$inline: true
  });
  binding_callbacks.push(function () {
    return bind(checkbox, 'checked', checkbox_checked_binding);
  });
  var block = {
    c: function create() {
      checkbox.$$.fragment.c();
      t = space();
    },
    l: function claim(nodes) {
      checkbox.$$.fragment.l(nodes);
      t = claim_space(nodes);
    },
    m: function mount(target, anchor) {
      mount_component(checkbox, target, anchor);
      insert_dev(target, t, anchor);
      current = true;
    },
    p: function update(changed, ctx) {
      var checkbox_changes = {};

      if (!updating_checked && changed.simpleSelected) {
        checkbox_changes.checked = ctx.simpleSelected;
      }

      checkbox.$set(checkbox_changes);
    },
    i: function intro(local) {
      if (current) return;
      transition_in(checkbox.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(checkbox.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      destroy_component(checkbox, detaching);

      if (detaching) {
        detach_dev(t);
      }
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_default_slot_4.name,
    type: "slot",
    source: "(9:4) <FormField>",
    ctx: ctx
  });
  return block;
} // (20:6) <span slot="label">


function create_label_slot_2(ctx) {
  var span, t;
  var block = {
    c: function create() {
      span = element("span");
      t = text("Remember me.");
      this.h();
    },
    l: function claim(nodes) {
      span = claim_element(nodes, "SPAN", {
        slot: true
      }, false);
      var span_nodes = children(span);
      t = claim_text(span_nodes, "Remember me.");
      span_nodes.forEach(detach_dev);
      this.h();
    },
    h: function hydrate() {
      attr_dev(span, "slot", "label");
      add_location(span, file, 19, 6, 386);
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
    id: create_label_slot_2.name,
    type: "slot",
    source: "(20:6) <span slot=\"label\">",
    ctx: ctx
  });
  return block;
} // (18:4) <FormField align="end">


function create_default_slot_3(ctx) {
  var updating_checked, t, current;

  function checkbox_checked_binding_1(value) {
    ctx.checkbox_checked_binding_1.call(null, value);
    updating_checked = true;
    add_flush_callback(function () {
      return updating_checked = false;
    });
  }

  var checkbox_props = {};

  if (ctx.simpleSelected2 !== void 0) {
    checkbox_props.checked = ctx.simpleSelected2;
  }

  var checkbox = new Checkbox({
    props: checkbox_props,
    $$inline: true
  });
  binding_callbacks.push(function () {
    return bind(checkbox, 'checked', checkbox_checked_binding_1);
  });
  var block = {
    c: function create() {
      checkbox.$$.fragment.c();
      t = space();
    },
    l: function claim(nodes) {
      checkbox.$$.fragment.l(nodes);
      t = claim_space(nodes);
    },
    m: function mount(target, anchor) {
      mount_component(checkbox, target, anchor);
      insert_dev(target, t, anchor);
      current = true;
    },
    p: function update(changed, ctx) {
      var checkbox_changes = {};

      if (!updating_checked && changed.simpleSelected2) {
        checkbox_changes.checked = ctx.simpleSelected2;
      }

      checkbox.$set(checkbox_changes);
    },
    i: function intro(local) {
      if (current) return;
      transition_in(checkbox.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(checkbox.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      destroy_component(checkbox, detaching);

      if (detaching) {
        detach_dev(t);
      }
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_default_slot_3.name,
    type: "slot",
    source: "(18:4) <FormField align=\"end\">",
    ctx: ctx
  });
  return block;
} // (31:8) <span slot="label">


function create_label_slot_1(ctx) {
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
      add_location(span, file, 30, 8, 688);
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
    id: create_label_slot_1.name,
    type: "slot",
    source: "(31:8) <span slot=\"label\">",
    ctx: ctx
  });
  return block;
} // (29:6) <FormField>


function create_default_slot_2(ctx) {
  var updating_group, t0, t1, current;

  function checkbox_group_binding(value) {
    ctx.checkbox_group_binding.call(null, value);
    updating_group = true;
    add_flush_callback(function () {
      return updating_group = false;
    });
  }

  var checkbox_props = {
    value: ctx.option.name,
    disabled: ctx.option.disabled
  };

  if (ctx.selected !== void 0) {
    checkbox_props.group = ctx.selected;
  }

  var checkbox = new Checkbox({
    props: checkbox_props,
    $$inline: true
  });
  binding_callbacks.push(function () {
    return bind(checkbox, 'group', checkbox_group_binding);
  });
  var block = {
    c: function create() {
      checkbox.$$.fragment.c();
      t0 = space();
      t1 = space();
    },
    l: function claim(nodes) {
      checkbox.$$.fragment.l(nodes);
      t0 = claim_space(nodes);
      t1 = claim_space(nodes);
    },
    m: function mount(target, anchor) {
      mount_component(checkbox, target, anchor);
      insert_dev(target, t0, anchor);
      insert_dev(target, t1, anchor);
      current = true;
    },
    p: function update(changed, ctx) {
      var checkbox_changes = {};

      if (!updating_group && changed.selected) {
        checkbox_changes.group = ctx.selected;
      }

      checkbox.$set(checkbox_changes);
    },
    i: function intro(local) {
      if (current) return;
      transition_in(checkbox.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(checkbox.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      destroy_component(checkbox, detaching);

      if (detaching) {
        detach_dev(t0);
        detach_dev(t1);
      }
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_default_slot_2.name,
    type: "slot",
    source: "(29:6) <FormField>",
    ctx: ctx
  });
  return block;
} // (28:4) {#each options as option}


function create_each_block(ctx) {
  var current;
  var formfield = new FormField({
    props: {
      $$slots: {
        default: [create_default_slot_2],
        label: [create_label_slot_1]
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
    source: "(28:4) {#each options as option}",
    ctx: ctx
  });
  return block;
} // (42:6) <span slot="label">


function create_label_slot(ctx) {
  var span, t;
  var block = {
    c: function create() {
      span = element("span");
      t = text("I agree to the terms.");
      this.h();
    },
    l: function claim(nodes) {
      span = claim_element(nodes, "SPAN", {
        slot: true
      }, false);
      var span_nodes = children(span);
      t = claim_text(span_nodes, "I agree to the terms.");
      span_nodes.forEach(detach_dev);
      this.h();
    },
    h: function hydrate() {
      attr_dev(span, "slot", "label");
      add_location(span, file, 41, 6, 1039);
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
    source: "(42:6) <span slot=\"label\">",
    ctx: ctx
  });
  return block;
} // (40:4) <FormField>


function create_default_slot_1(ctx) {
  var updating_checked, t, current;

  function checkbox_checked_binding_2(value) {
    ctx.checkbox_checked_binding_2.call(null, value);
    updating_checked = true;
    add_flush_callback(function () {
      return updating_checked = false;
    });
  }

  var checkbox_props = {
    indeterminate: ctx.indeterminateChecked === null,
    input$required: true
  };

  if (ctx.indeterminateChecked !== void 0) {
    checkbox_props.checked = ctx.indeterminateChecked;
  }

  var checkbox = new Checkbox({
    props: checkbox_props,
    $$inline: true
  });
  binding_callbacks.push(function () {
    return bind(checkbox, 'checked', checkbox_checked_binding_2);
  });
  var block = {
    c: function create() {
      checkbox.$$.fragment.c();
      t = space();
    },
    l: function claim(nodes) {
      checkbox.$$.fragment.l(nodes);
      t = claim_space(nodes);
    },
    m: function mount(target, anchor) {
      mount_component(checkbox, target, anchor);
      insert_dev(target, t, anchor);
      current = true;
    },
    p: function update(changed, ctx) {
      var checkbox_changes = {};
      if (changed.indeterminateChecked) checkbox_changes.indeterminate = ctx.indeterminateChecked === null;

      if (!updating_checked && changed.indeterminateChecked) {
        checkbox_changes.checked = ctx.indeterminateChecked;
      }

      checkbox.$set(checkbox_changes);
    },
    i: function intro(local) {
      if (current) return;
      transition_in(checkbox.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(checkbox.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      destroy_component(checkbox, detaching);

      if (detaching) {
        detach_dev(t);
      }
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_default_slot_1.name,
    type: "slot",
    source: "(40:4) <FormField>",
    ctx: ctx
  });
  return block;
} // (47:2) <Button on:click={() => indeterminateChecked = null }>


function create_default_slot(ctx) {
  var t;
  var block = {
    c: function create() {
      t = text("reset");
    },
    l: function claim(nodes) {
      t = claim_text(nodes, "reset");
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
    id: create_default_slot.name,
    type: "slot",
    source: "(47:2) <Button on:click={() => indeterminateChecked = null }>",
    ctx: ctx
  });
  return block;
}

function create_fragment(ctx) {
  var t0,
      section,
      h2,
      t1,
      t2,
      div0,
      t3,
      pre0,
      t4,
      t5,
      t6,
      div1,
      t7,
      pre1,
      t8,
      t9,
      t10,
      div2,
      t11,
      br0,
      t12,
      t13,
      pre2,
      t14,
      t15_value = ctx.selected.join(', ') + "",
      t15,
      t16,
      div3,
      t17,
      br1,
      t18,
      t19,
      pre3,
      t20,
      t21,
      t22,
      current;
  var formfield0 = new FormField({
    props: {
      $$slots: {
        default: [create_default_slot_4],
        label: [create_label_slot_3]
      },
      $$scope: {
        ctx: ctx
      }
    },
    $$inline: true
  });
  var formfield1 = new FormField({
    props: {
      align: "end",
      $$slots: {
        default: [create_default_slot_3],
        label: [create_label_slot_2]
      },
      $$scope: {
        ctx: ctx
      }
    },
    $$inline: true
  });
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

  var formfield2 = new FormField({
    props: {
      $$slots: {
        default: [create_default_slot_1],
        label: [create_label_slot]
      },
      $$scope: {
        ctx: ctx
      }
    },
    $$inline: true
  });
  var button = new Button({
    props: {
      $$slots: {
        default: [create_default_slot]
      },
      $$scope: {
        ctx: ctx
      }
    },
    $$inline: true
  });
  button.$on("click", ctx.click_handler);
  var block = {
    c: function create() {
      t0 = space();
      section = element("section");
      h2 = element("h2");
      t1 = text("Checkbox");
      t2 = space();
      div0 = element("div");
      formfield0.$$.fragment.c();
      t3 = space();
      pre0 = element("pre");
      t4 = text("Checked: ");
      t5 = text(ctx.simpleSelected);
      t6 = space();
      div1 = element("div");
      formfield1.$$.fragment.c();
      t7 = space();
      pre1 = element("pre");
      t8 = text("Checked: ");
      t9 = text(ctx.simpleSelected2);
      t10 = space();
      div2 = element("div");
      t11 = text("Group checkbox:");
      br0 = element("br");
      t12 = space();

      for (var _i = 0; _i < each_blocks.length; _i += 1) {
        each_blocks[_i].c();
      }

      t13 = space();
      pre2 = element("pre");
      t14 = text("Selected: ");
      t15 = text(t15_value);
      t16 = space();
      div3 = element("div");
      t17 = text("Indeterminate:");
      br1 = element("br");
      t18 = space();
      formfield2.$$.fragment.c();
      t19 = space();
      pre3 = element("pre");
      t20 = text("Checked: ");
      t21 = text(ctx.indeterminateChecked);
      t22 = space();
      button.$$.fragment.c();
      this.h();
    },
    l: function claim(nodes) {
      t0 = claim_space(nodes);
      section = claim_element(nodes, "SECTION", {}, false);
      var section_nodes = children(section);
      h2 = claim_element(section_nodes, "H2", {}, false);
      var h2_nodes = children(h2);
      t1 = claim_text(h2_nodes, "Checkbox");
      h2_nodes.forEach(detach_dev);
      t2 = claim_space(section_nodes);
      div0 = claim_element(section_nodes, "DIV", {}, false);
      var div0_nodes = children(div0);
      formfield0.$$.fragment.l(div0_nodes);
      div0_nodes.forEach(detach_dev);
      t3 = claim_space(section_nodes);
      pre0 = claim_element(section_nodes, "PRE", {
        class: true
      }, false);
      var pre0_nodes = children(pre0);
      t4 = claim_text(pre0_nodes, "Checked: ");
      t5 = claim_text(pre0_nodes, ctx.simpleSelected);
      pre0_nodes.forEach(detach_dev);
      t6 = claim_space(section_nodes);
      div1 = claim_element(section_nodes, "DIV", {}, false);
      var div1_nodes = children(div1);
      formfield1.$$.fragment.l(div1_nodes);
      div1_nodes.forEach(detach_dev);
      t7 = claim_space(section_nodes);
      pre1 = claim_element(section_nodes, "PRE", {
        class: true
      }, false);
      var pre1_nodes = children(pre1);
      t8 = claim_text(pre1_nodes, "Checked: ");
      t9 = claim_text(pre1_nodes, ctx.simpleSelected2);
      pre1_nodes.forEach(detach_dev);
      t10 = claim_space(section_nodes);
      div2 = claim_element(section_nodes, "DIV", {}, false);
      var div2_nodes = children(div2);
      t11 = claim_text(div2_nodes, "Group checkbox:");
      br0 = claim_element(div2_nodes, "BR", {}, false);
      var br0_nodes = children(br0);
      br0_nodes.forEach(detach_dev);
      t12 = claim_space(div2_nodes);

      for (var _i2 = 0; _i2 < each_blocks.length; _i2 += 1) {
        each_blocks[_i2].l(div2_nodes);
      }

      div2_nodes.forEach(detach_dev);
      t13 = claim_space(section_nodes);
      pre2 = claim_element(section_nodes, "PRE", {
        class: true
      }, false);
      var pre2_nodes = children(pre2);
      t14 = claim_text(pre2_nodes, "Selected: ");
      t15 = claim_text(pre2_nodes, t15_value);
      pre2_nodes.forEach(detach_dev);
      t16 = claim_space(section_nodes);
      div3 = claim_element(section_nodes, "DIV", {}, false);
      var div3_nodes = children(div3);
      t17 = claim_text(div3_nodes, "Indeterminate:");
      br1 = claim_element(div3_nodes, "BR", {}, false);
      var br1_nodes = children(br1);
      br1_nodes.forEach(detach_dev);
      t18 = claim_space(div3_nodes);
      formfield2.$$.fragment.l(div3_nodes);
      div3_nodes.forEach(detach_dev);
      t19 = claim_space(section_nodes);
      pre3 = claim_element(section_nodes, "PRE", {
        class: true
      }, false);
      var pre3_nodes = children(pre3);
      t20 = claim_text(pre3_nodes, "Checked: ");
      t21 = claim_text(pre3_nodes, ctx.indeterminateChecked);
      pre3_nodes.forEach(detach_dev);
      t22 = claim_space(section_nodes);
      button.$$.fragment.l(section_nodes);
      section_nodes.forEach(detach_dev);
      this.h();
    },
    h: function hydrate() {
      document.title = "Checkbox - SMUI";
      add_location(h2, file, 5, 2, 75);
      add_location(div0, file, 7, 2, 96);
      attr_dev(pre0, "class", "status");
      add_location(pre0, file, 14, 2, 241);
      add_location(div1, file, 16, 2, 296);
      attr_dev(pre1, "class", "status");
      add_location(pre1, file, 23, 2, 454);
      add_location(br0, file, 26, 19, 535);
      add_location(div2, file, 25, 2, 510);
      attr_dev(pre2, "class", "status");
      add_location(pre2, file, 35, 2, 809);
      add_location(br1, file, 38, 18, 894);
      add_location(div3, file, 37, 2, 870);
      attr_dev(pre3, "class", "status");
      add_location(pre3, file, 45, 2, 1116);
      add_location(section, file, 4, 0, 63);
    },
    m: function mount(target, anchor) {
      insert_dev(target, t0, anchor);
      insert_dev(target, section, anchor);
      append_dev(section, h2);
      append_dev(h2, t1);
      append_dev(section, t2);
      append_dev(section, div0);
      mount_component(formfield0, div0, null);
      append_dev(section, t3);
      append_dev(section, pre0);
      append_dev(pre0, t4);
      append_dev(pre0, t5);
      append_dev(section, t6);
      append_dev(section, div1);
      mount_component(formfield1, div1, null);
      append_dev(section, t7);
      append_dev(section, pre1);
      append_dev(pre1, t8);
      append_dev(pre1, t9);
      append_dev(section, t10);
      append_dev(section, div2);
      append_dev(div2, t11);
      append_dev(div2, br0);
      append_dev(div2, t12);

      for (var _i3 = 0; _i3 < each_blocks.length; _i3 += 1) {
        each_blocks[_i3].m(div2, null);
      }

      append_dev(section, t13);
      append_dev(section, pre2);
      append_dev(pre2, t14);
      append_dev(pre2, t15);
      append_dev(section, t16);
      append_dev(section, div3);
      append_dev(div3, t17);
      append_dev(div3, br1);
      append_dev(div3, t18);
      mount_component(formfield2, div3, null);
      append_dev(section, t19);
      append_dev(section, pre3);
      append_dev(pre3, t20);
      append_dev(pre3, t21);
      append_dev(section, t22);
      mount_component(button, section, null);
      current = true;
    },
    p: function update(changed, ctx) {
      var formfield0_changes = {};
      if (changed.$$scope || changed.simpleSelected) formfield0_changes.$$scope = {
        changed: changed,
        ctx: ctx
      };
      formfield0.$set(formfield0_changes);

      if (!current || changed.simpleSelected) {
        set_data_dev(t5, ctx.simpleSelected);
      }

      var formfield1_changes = {};
      if (changed.$$scope || changed.simpleSelected2) formfield1_changes.$$scope = {
        changed: changed,
        ctx: ctx
      };
      formfield1.$set(formfield1_changes);

      if (!current || changed.simpleSelected2) {
        set_data_dev(t9, ctx.simpleSelected2);
      }

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

            each_blocks[_i4].m(div2, null);
          }
        }

        group_outros();

        for (_i4 = each_value.length; _i4 < each_blocks.length; _i4 += 1) {
          out(_i4);
        }

        check_outros();
      }

      if ((!current || changed.selected) && t15_value !== (t15_value = ctx.selected.join(', ') + "")) {
        set_data_dev(t15, t15_value);
      }

      var formfield2_changes = {};
      if (changed.$$scope || changed.indeterminateChecked) formfield2_changes.$$scope = {
        changed: changed,
        ctx: ctx
      };
      formfield2.$set(formfield2_changes);

      if (!current || changed.indeterminateChecked) {
        set_data_dev(t21, ctx.indeterminateChecked);
      }

      var button_changes = {};
      if (changed.$$scope) button_changes.$$scope = {
        changed: changed,
        ctx: ctx
      };
      button.$set(button_changes);
    },
    i: function intro(local) {
      if (current) return;
      transition_in(formfield0.$$.fragment, local);
      transition_in(formfield1.$$.fragment, local);

      for (var _i5 = 0; _i5 < each_value.length; _i5 += 1) {
        transition_in(each_blocks[_i5]);
      }

      transition_in(formfield2.$$.fragment, local);
      transition_in(button.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(formfield0.$$.fragment, local);
      transition_out(formfield1.$$.fragment, local);
      each_blocks = each_blocks.filter(Boolean);

      for (var _i6 = 0; _i6 < each_blocks.length; _i6 += 1) {
        transition_out(each_blocks[_i6]);
      }

      transition_out(formfield2.$$.fragment, local);
      transition_out(button.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      if (detaching) {
        detach_dev(t0);
        detach_dev(section);
      }

      destroy_component(formfield0);
      destroy_component(formfield1);
      destroy_each(each_blocks, detaching);
      destroy_component(formfield2);
      destroy_component(button);
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
  var simpleSelected = false;
  var simpleSelected2 = false;
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
  var selected = ['Happy', 'Grumpy'];
  var indeterminateChecked = null;

  function checkbox_checked_binding(value) {
    simpleSelected = value;
    $$invalidate('simpleSelected', simpleSelected);
  }

  function checkbox_checked_binding_1(value) {
    simpleSelected2 = value;
    $$invalidate('simpleSelected2', simpleSelected2);
  }

  function checkbox_group_binding(value) {
    selected = value;
    $$invalidate('selected', selected);
  }

  function checkbox_checked_binding_2(value) {
    indeterminateChecked = value;
    $$invalidate('indeterminateChecked', indeterminateChecked);
  }

  var click_handler = function click_handler() {
    return $$invalidate('indeterminateChecked', indeterminateChecked = null);
  };

  $$self.$capture_state = function () {
    return {};
  };

  $$self.$inject_state = function ($$props) {
    if ('simpleSelected' in $$props) $$invalidate('simpleSelected', simpleSelected = $$props.simpleSelected);
    if ('simpleSelected2' in $$props) $$invalidate('simpleSelected2', simpleSelected2 = $$props.simpleSelected2);
    if ('options' in $$props) $$invalidate('options', options = $$props.options);
    if ('selected' in $$props) $$invalidate('selected', selected = $$props.selected);
    if ('indeterminateChecked' in $$props) $$invalidate('indeterminateChecked', indeterminateChecked = $$props.indeterminateChecked);
  };

  return {
    simpleSelected: simpleSelected,
    simpleSelected2: simpleSelected2,
    options: options,
    selected: selected,
    indeterminateChecked: indeterminateChecked,
    checkbox_checked_binding: checkbox_checked_binding,
    checkbox_checked_binding_1: checkbox_checked_binding_1,
    checkbox_group_binding: checkbox_group_binding,
    checkbox_checked_binding_2: checkbox_checked_binding_2,
    click_handler: click_handler
  };
}

var Checkbox_1 =
/*#__PURE__*/
function (_SvelteComponentDev) {
  _inherits(Checkbox_1, _SvelteComponentDev);

  function Checkbox_1(options) {
    var _this;

    _classCallCheck(this, Checkbox_1);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Checkbox_1).call(this, options));
    init(_assertThisInitialized(_this), options, instance, create_fragment, safe_not_equal, []);
    dispatch_dev("SvelteRegisterComponent", {
      component: _assertThisInitialized(_this),
      tagName: "Checkbox_1",
      options: options,
      id: create_fragment.name
    });
    return _this;
  }

  return Checkbox_1;
}(SvelteComponentDev);

export default Checkbox_1;

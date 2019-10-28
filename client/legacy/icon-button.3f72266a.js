import { u as _inherits, v as _classCallCheck, w as _possibleConstructorReturn, x as _getPrototypeOf, i as init, s as safe_not_equal, y as _assertThisInitialized, d as dispatch_dev, S as SvelteComponentDev, G as binding_callbacks, I as bind, M as space, f as element, T as text, N as claim_space, g as claim_element, h as children, U as claim_text, j as detach_dev, l as add_location, W as set_style, O as attr_dev, m as insert_dev, P as append_dev, J as mount_component, X as set_data_dev, t as transition_in, r as transition_out, K as destroy_component, L as add_flush_callback } from './index.d5da4a00.js';
import './useActions.b478cae0.js';
import './typeof.0d5bf00d.js';
import { B as Button } from './index.35ab1463.js';
import './bare.3cea1bea.js';
import './Button.d401af18.js';
import { L as Label } from './Label.35a2c1e8.js';
import { I as Icon } from './Icon.3c6823d4.js';
import { I as IconButton } from './index.74622d3b.js';

var file = "src/routes/demo/icon-button.svelte"; // (9:4) <IconButton class="material-icons" on:click={() => clicked++}>

function create_default_slot_10(ctx) {
  var t;
  var block = {
    c: function create() {
      t = text("build");
    },
    l: function claim(nodes) {
      t = claim_text(nodes, "build");
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
    id: create_default_slot_10.name,
    type: "slot",
    source: "(9:4) <IconButton class=\"material-icons\" on:click={() => clicked++}>",
    ctx: ctx
  });
  return block;
} // (12:4) <IconButton class="material-icons" on:click={() => clicked++} disabled>


function create_default_slot_9(ctx) {
  var t;
  var block = {
    c: function create() {
      t = text("search");
    },
    l: function claim(nodes) {
      t = claim_text(nodes, "search");
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
    id: create_default_slot_9.name,
    type: "slot",
    source: "(12:4) <IconButton class=\"material-icons\" on:click={() => clicked++} disabled>",
    ctx: ctx
  });
  return block;
} // (15:4) <IconButton class="material-icons" on:click={() => clicked++} ripple={false}>


function create_default_slot_8(ctx) {
  var t;
  var block = {
    c: function create() {
      t = text("add_shopping_cart");
    },
    l: function claim(nodes) {
      t = claim_text(nodes, "add_shopping_cart");
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
    id: create_default_slot_8.name,
    type: "slot",
    source: "(15:4) <IconButton class=\"material-icons\" on:click={() => clicked++} ripple={false}>",
    ctx: ctx
  });
  return block;
} // (19:6) <Icon class="material-icons" on>


function create_default_slot_7(ctx) {
  var t;
  var block = {
    c: function create() {
      t = text("star");
    },
    l: function claim(nodes) {
      t = claim_text(nodes, "star");
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
    id: create_default_slot_7.name,
    type: "slot",
    source: "(19:6) <Icon class=\"material-icons\" on>",
    ctx: ctx
  });
  return block;
} // (20:6) <Icon class="material-icons">


function create_default_slot_6(ctx) {
  var t;
  var block = {
    c: function create() {
      t = text("star_border");
    },
    l: function claim(nodes) {
      t = claim_text(nodes, "star_border");
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
    id: create_default_slot_6.name,
    type: "slot",
    source: "(20:6) <Icon class=\"material-icons\">",
    ctx: ctx
  });
  return block;
} // (18:4) <IconButton on:click={() => clicked++} toggle bind:pressed={initialOff}>


function create_default_slot_5(ctx) {
  var t, current;
  var icon0 = new Icon({
    props: {
      class: "material-icons",
      on: true,
      $$slots: {
        default: [create_default_slot_7]
      },
      $$scope: {
        ctx: ctx
      }
    },
    $$inline: true
  });
  var icon1 = new Icon({
    props: {
      class: "material-icons",
      $$slots: {
        default: [create_default_slot_6]
      },
      $$scope: {
        ctx: ctx
      }
    },
    $$inline: true
  });
  var block = {
    c: function create() {
      icon0.$$.fragment.c();
      t = space();
      icon1.$$.fragment.c();
    },
    l: function claim(nodes) {
      icon0.$$.fragment.l(nodes);
      t = claim_space(nodes);
      icon1.$$.fragment.l(nodes);
    },
    m: function mount(target, anchor) {
      mount_component(icon0, target, anchor);
      insert_dev(target, t, anchor);
      mount_component(icon1, target, anchor);
      current = true;
    },
    p: function update(changed, ctx) {
      var icon0_changes = {};
      if (changed.$$scope) icon0_changes.$$scope = {
        changed: changed,
        ctx: ctx
      };
      icon0.$set(icon0_changes);
      var icon1_changes = {};
      if (changed.$$scope) icon1_changes.$$scope = {
        changed: changed,
        ctx: ctx
      };
      icon1.$set(icon1_changes);
    },
    i: function intro(local) {
      if (current) return;
      transition_in(icon0.$$.fragment, local);
      transition_in(icon1.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(icon0.$$.fragment, local);
      transition_out(icon1.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      destroy_component(icon0, detaching);

      if (detaching) {
        detach_dev(t);
      }

      destroy_component(icon1, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_default_slot_5.name,
    type: "slot",
    source: "(18:4) <IconButton on:click={() => clicked++} toggle bind:pressed={initialOff}>",
    ctx: ctx
  });
  return block;
} // (26:6) <Icon class="material-icons" on>


function create_default_slot_4(ctx) {
  var t;
  var block = {
    c: function create() {
      t = text("alarm_on");
    },
    l: function claim(nodes) {
      t = claim_text(nodes, "alarm_on");
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
    id: create_default_slot_4.name,
    type: "slot",
    source: "(26:6) <Icon class=\"material-icons\" on>",
    ctx: ctx
  });
  return block;
} // (27:6) <Icon class="material-icons">


function create_default_slot_3(ctx) {
  var t;
  var block = {
    c: function create() {
      t = text("alarm_off");
    },
    l: function claim(nodes) {
      t = claim_text(nodes, "alarm_off");
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
    id: create_default_slot_3.name,
    type: "slot",
    source: "(27:6) <Icon class=\"material-icons\">",
    ctx: ctx
  });
  return block;
} // (25:4) <IconButton on:click={() => clicked++} toggle bind:pressed={initialOn}>


function create_default_slot_2(ctx) {
  var t, current;
  var icon0 = new Icon({
    props: {
      class: "material-icons",
      on: true,
      $$slots: {
        default: [create_default_slot_4]
      },
      $$scope: {
        ctx: ctx
      }
    },
    $$inline: true
  });
  var icon1 = new Icon({
    props: {
      class: "material-icons",
      $$slots: {
        default: [create_default_slot_3]
      },
      $$scope: {
        ctx: ctx
      }
    },
    $$inline: true
  });
  var block = {
    c: function create() {
      icon0.$$.fragment.c();
      t = space();
      icon1.$$.fragment.c();
    },
    l: function claim(nodes) {
      icon0.$$.fragment.l(nodes);
      t = claim_space(nodes);
      icon1.$$.fragment.l(nodes);
    },
    m: function mount(target, anchor) {
      mount_component(icon0, target, anchor);
      insert_dev(target, t, anchor);
      mount_component(icon1, target, anchor);
      current = true;
    },
    p: function update(changed, ctx) {
      var icon0_changes = {};
      if (changed.$$scope) icon0_changes.$$scope = {
        changed: changed,
        ctx: ctx
      };
      icon0.$set(icon0_changes);
      var icon1_changes = {};
      if (changed.$$scope) icon1_changes.$$scope = {
        changed: changed,
        ctx: ctx
      };
      icon1.$set(icon1_changes);
    },
    i: function intro(local) {
      if (current) return;
      transition_in(icon0.$$.fragment, local);
      transition_in(icon1.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(icon0.$$.fragment, local);
      transition_out(icon1.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      destroy_component(icon0, detaching);

      if (detaching) {
        detach_dev(t);
      }

      destroy_component(icon1, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_default_slot_2.name,
    type: "slot",
    source: "(25:4) <IconButton on:click={() => clicked++} toggle bind:pressed={initialOn}>",
    ctx: ctx
  });
  return block;
} // (31:52) <Label>


function create_default_slot_1(ctx) {
  var t;
  var block = {
    c: function create() {
      t = text("Toggle Programmatically");
    },
    l: function claim(nodes) {
      t = claim_text(nodes, "Toggle Programmatically");
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
    id: create_default_slot_1.name,
    type: "slot",
    source: "(31:52) <Label>",
    ctx: ctx
  });
  return block;
} // (31:4) <Button on:click={() => initialOn = !initialOn}>


function create_default_slot(ctx) {
  var current;
  var label = new Label({
    props: {
      $$slots: {
        default: [create_default_slot_1]
      },
      $$scope: {
        ctx: ctx
      }
    },
    $$inline: true
  });
  var block = {
    c: function create() {
      label.$$.fragment.c();
    },
    l: function claim(nodes) {
      label.$$.fragment.l(nodes);
    },
    m: function mount(target, anchor) {
      mount_component(label, target, anchor);
      current = true;
    },
    p: function update(changed, ctx) {
      var label_changes = {};
      if (changed.$$scope) label_changes.$$scope = {
        changed: changed,
        ctx: ctx
      };
      label.$set(label_changes);
    },
    i: function intro(local) {
      if (current) return;
      transition_in(label.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(label.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      destroy_component(label, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_default_slot.name,
    type: "slot",
    source: "(31:4) <Button on:click={() => initialOn = !initialOn}>",
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
      div1,
      t4,
      t5,
      div2,
      t6,
      t7,
      div3,
      updating_pressed,
      t8,
      t9_value = ctx.initialOff ? '(on)' : '(off)' + "",
      t9,
      t10,
      div4,
      updating_pressed_1,
      t11,
      t12_value = ctx.initialOn ? '(on)' : '(off)' + "",
      t12,
      t13,
      t14,
      pre,
      t15,
      t16,
      current;
  var iconbutton0 = new IconButton({
    props: {
      class: "material-icons",
      $$slots: {
        default: [create_default_slot_10]
      },
      $$scope: {
        ctx: ctx
      }
    },
    $$inline: true
  });
  iconbutton0.$on("click", ctx.click_handler);
  var iconbutton1 = new IconButton({
    props: {
      class: "material-icons",
      disabled: true,
      $$slots: {
        default: [create_default_slot_9]
      },
      $$scope: {
        ctx: ctx
      }
    },
    $$inline: true
  });
  iconbutton1.$on("click", ctx.click_handler_1);
  var iconbutton2 = new IconButton({
    props: {
      class: "material-icons",
      ripple: false,
      $$slots: {
        default: [create_default_slot_8]
      },
      $$scope: {
        ctx: ctx
      }
    },
    $$inline: true
  });
  iconbutton2.$on("click", ctx.click_handler_2);

  function iconbutton3_pressed_binding(value) {
    ctx.iconbutton3_pressed_binding.call(null, value);
    updating_pressed = true;
    add_flush_callback(function () {
      return updating_pressed = false;
    });
  }

  var iconbutton3_props = {
    toggle: true,
    $$slots: {
      default: [create_default_slot_5]
    },
    $$scope: {
      ctx: ctx
    }
  };

  if (ctx.initialOff !== void 0) {
    iconbutton3_props.pressed = ctx.initialOff;
  }

  var iconbutton3 = new IconButton({
    props: iconbutton3_props,
    $$inline: true
  });
  binding_callbacks.push(function () {
    return bind(iconbutton3, 'pressed', iconbutton3_pressed_binding);
  });
  iconbutton3.$on("click", ctx.click_handler_3);

  function iconbutton4_pressed_binding(value_1) {
    ctx.iconbutton4_pressed_binding.call(null, value_1);
    updating_pressed_1 = true;
    add_flush_callback(function () {
      return updating_pressed_1 = false;
    });
  }

  var iconbutton4_props = {
    toggle: true,
    $$slots: {
      default: [create_default_slot_2]
    },
    $$scope: {
      ctx: ctx
    }
  };

  if (ctx.initialOn !== void 0) {
    iconbutton4_props.pressed = ctx.initialOn;
  }

  var iconbutton4 = new IconButton({
    props: iconbutton4_props,
    $$inline: true
  });
  binding_callbacks.push(function () {
    return bind(iconbutton4, 'pressed', iconbutton4_pressed_binding);
  });
  iconbutton4.$on("click", ctx.click_handler_4);
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
  button.$on("click", ctx.click_handler_5);
  var block = {
    c: function create() {
      t0 = space();
      section = element("section");
      h2 = element("h2");
      t1 = text("Icon Button");
      t2 = space();
      div0 = element("div");
      iconbutton0.$$.fragment.c();
      t3 = space();
      div1 = element("div");
      iconbutton1.$$.fragment.c();
      t4 = text(" (disabled)");
      t5 = space();
      div2 = element("div");
      iconbutton2.$$.fragment.c();
      t6 = text(" (no ripple)");
      t7 = space();
      div3 = element("div");
      iconbutton3.$$.fragment.c();
      t8 = space();
      t9 = text(t9_value);
      t10 = space();
      div4 = element("div");
      iconbutton4.$$.fragment.c();
      t11 = space();
      t12 = text(t12_value);
      t13 = text("\n     \n    ");
      button.$$.fragment.c();
      t14 = space();
      pre = element("pre");
      t15 = text("Clicked: ");
      t16 = text(ctx.clicked);
      this.h();
    },
    l: function claim(nodes) {
      t0 = claim_space(nodes);
      section = claim_element(nodes, "SECTION", {}, false);
      var section_nodes = children(section);
      h2 = claim_element(section_nodes, "H2", {}, false);
      var h2_nodes = children(h2);
      t1 = claim_text(h2_nodes, "Icon Button");
      h2_nodes.forEach(detach_dev);
      t2 = claim_space(section_nodes);
      div0 = claim_element(section_nodes, "DIV", {
        style: true
      }, false);
      var div0_nodes = children(div0);
      iconbutton0.$$.fragment.l(div0_nodes);
      div0_nodes.forEach(detach_dev);
      t3 = claim_space(section_nodes);
      div1 = claim_element(section_nodes, "DIV", {
        style: true
      }, false);
      var div1_nodes = children(div1);
      iconbutton1.$$.fragment.l(div1_nodes);
      t4 = claim_text(div1_nodes, " (disabled)");
      div1_nodes.forEach(detach_dev);
      t5 = claim_space(section_nodes);
      div2 = claim_element(section_nodes, "DIV", {
        style: true
      }, false);
      var div2_nodes = children(div2);
      iconbutton2.$$.fragment.l(div2_nodes);
      t6 = claim_text(div2_nodes, " (no ripple)");
      div2_nodes.forEach(detach_dev);
      t7 = claim_space(section_nodes);
      div3 = claim_element(section_nodes, "DIV", {
        style: true
      }, false);
      var div3_nodes = children(div3);
      iconbutton3.$$.fragment.l(div3_nodes);
      t8 = claim_space(div3_nodes);
      t9 = claim_text(div3_nodes, t9_value);
      div3_nodes.forEach(detach_dev);
      t10 = claim_space(section_nodes);
      div4 = claim_element(section_nodes, "DIV", {
        style: true
      }, false);
      var div4_nodes = children(div4);
      iconbutton4.$$.fragment.l(div4_nodes);
      t11 = claim_space(div4_nodes);
      t12 = claim_text(div4_nodes, t12_value);
      t13 = claim_text(div4_nodes, "\n     \n    ");
      button.$$.fragment.l(div4_nodes);
      div4_nodes.forEach(detach_dev);
      t14 = claim_space(section_nodes);
      pre = claim_element(section_nodes, "PRE", {
        class: true
      }, false);
      var pre_nodes = children(pre);
      t15 = claim_text(pre_nodes, "Clicked: ");
      t16 = claim_text(pre_nodes, ctx.clicked);
      pre_nodes.forEach(detach_dev);
      section_nodes.forEach(detach_dev);
      this.h();
    },
    h: function hydrate() {
      document.title = "Icon Button - SMUI";
      add_location(h2, file, 5, 2, 78);
      set_style(div0, "display", "flex");
      set_style(div0, "align-items", "center");
      add_location(div0, file, 7, 2, 102);
      set_style(div1, "display", "flex");
      set_style(div1, "align-items", "center");
      add_location(div1, file, 10, 2, 248);
      set_style(div2, "display", "flex");
      set_style(div2, "align-items", "center");
      add_location(div2, file, 13, 2, 415);
      set_style(div3, "display", "flex");
      set_style(div3, "align-items", "center");
      add_location(div3, file, 16, 2, 600);
      set_style(div4, "display", "flex");
      set_style(div4, "align-items", "center");
      add_location(div4, file, 23, 2, 896);
      attr_dev(pre, "class", "status");
      add_location(pre, file, 33, 2, 1304);
      add_location(section, file, 4, 0, 66);
    },
    m: function mount(target, anchor) {
      insert_dev(target, t0, anchor);
      insert_dev(target, section, anchor);
      append_dev(section, h2);
      append_dev(h2, t1);
      append_dev(section, t2);
      append_dev(section, div0);
      mount_component(iconbutton0, div0, null);
      append_dev(section, t3);
      append_dev(section, div1);
      mount_component(iconbutton1, div1, null);
      append_dev(div1, t4);
      append_dev(section, t5);
      append_dev(section, div2);
      mount_component(iconbutton2, div2, null);
      append_dev(div2, t6);
      append_dev(section, t7);
      append_dev(section, div3);
      mount_component(iconbutton3, div3, null);
      append_dev(div3, t8);
      append_dev(div3, t9);
      append_dev(section, t10);
      append_dev(section, div4);
      mount_component(iconbutton4, div4, null);
      append_dev(div4, t11);
      append_dev(div4, t12);
      append_dev(div4, t13);
      mount_component(button, div4, null);
      append_dev(section, t14);
      append_dev(section, pre);
      append_dev(pre, t15);
      append_dev(pre, t16);
      current = true;
    },
    p: function update(changed, ctx) {
      var iconbutton0_changes = {};
      if (changed.$$scope) iconbutton0_changes.$$scope = {
        changed: changed,
        ctx: ctx
      };
      iconbutton0.$set(iconbutton0_changes);
      var iconbutton1_changes = {};
      if (changed.$$scope) iconbutton1_changes.$$scope = {
        changed: changed,
        ctx: ctx
      };
      iconbutton1.$set(iconbutton1_changes);
      var iconbutton2_changes = {};
      if (changed.$$scope) iconbutton2_changes.$$scope = {
        changed: changed,
        ctx: ctx
      };
      iconbutton2.$set(iconbutton2_changes);
      var iconbutton3_changes = {};
      if (changed.$$scope) iconbutton3_changes.$$scope = {
        changed: changed,
        ctx: ctx
      };

      if (!updating_pressed && changed.initialOff) {
        iconbutton3_changes.pressed = ctx.initialOff;
      }

      iconbutton3.$set(iconbutton3_changes);

      if ((!current || changed.initialOff) && t9_value !== (t9_value = ctx.initialOff ? '(on)' : '(off)' + "")) {
        set_data_dev(t9, t9_value);
      }

      var iconbutton4_changes = {};
      if (changed.$$scope) iconbutton4_changes.$$scope = {
        changed: changed,
        ctx: ctx
      };

      if (!updating_pressed_1 && changed.initialOn) {
        iconbutton4_changes.pressed = ctx.initialOn;
      }

      iconbutton4.$set(iconbutton4_changes);

      if ((!current || changed.initialOn) && t12_value !== (t12_value = ctx.initialOn ? '(on)' : '(off)' + "")) {
        set_data_dev(t12, t12_value);
      }

      var button_changes = {};
      if (changed.$$scope) button_changes.$$scope = {
        changed: changed,
        ctx: ctx
      };
      button.$set(button_changes);

      if (!current || changed.clicked) {
        set_data_dev(t16, ctx.clicked);
      }
    },
    i: function intro(local) {
      if (current) return;
      transition_in(iconbutton0.$$.fragment, local);
      transition_in(iconbutton1.$$.fragment, local);
      transition_in(iconbutton2.$$.fragment, local);
      transition_in(iconbutton3.$$.fragment, local);
      transition_in(iconbutton4.$$.fragment, local);
      transition_in(button.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(iconbutton0.$$.fragment, local);
      transition_out(iconbutton1.$$.fragment, local);
      transition_out(iconbutton2.$$.fragment, local);
      transition_out(iconbutton3.$$.fragment, local);
      transition_out(iconbutton4.$$.fragment, local);
      transition_out(button.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      if (detaching) {
        detach_dev(t0);
        detach_dev(section);
      }

      destroy_component(iconbutton0);
      destroy_component(iconbutton1);
      destroy_component(iconbutton2);
      destroy_component(iconbutton3);
      destroy_component(iconbutton4);
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
  var clicked = 0;
  var initialOff = false;
  var initialOn = true;

  var click_handler = function click_handler() {
    return $$invalidate('clicked', clicked++, clicked);
  };

  var click_handler_1 = function click_handler_1() {
    return $$invalidate('clicked', clicked++, clicked);
  };

  var click_handler_2 = function click_handler_2() {
    return $$invalidate('clicked', clicked++, clicked);
  };

  function iconbutton3_pressed_binding(value) {
    initialOff = value;
    $$invalidate('initialOff', initialOff);
  }

  var click_handler_3 = function click_handler_3() {
    return $$invalidate('clicked', clicked++, clicked);
  };

  function iconbutton4_pressed_binding(value_1) {
    initialOn = value_1;
    $$invalidate('initialOn', initialOn);
  }

  var click_handler_4 = function click_handler_4() {
    return $$invalidate('clicked', clicked++, clicked);
  };

  var click_handler_5 = function click_handler_5() {
    return $$invalidate('initialOn', initialOn = !initialOn);
  };

  $$self.$capture_state = function () {
    return {};
  };

  $$self.$inject_state = function ($$props) {
    if ('clicked' in $$props) $$invalidate('clicked', clicked = $$props.clicked);
    if ('initialOff' in $$props) $$invalidate('initialOff', initialOff = $$props.initialOff);
    if ('initialOn' in $$props) $$invalidate('initialOn', initialOn = $$props.initialOn);
  };

  return {
    clicked: clicked,
    initialOff: initialOff,
    initialOn: initialOn,
    click_handler: click_handler,
    click_handler_1: click_handler_1,
    click_handler_2: click_handler_2,
    iconbutton3_pressed_binding: iconbutton3_pressed_binding,
    click_handler_3: click_handler_3,
    iconbutton4_pressed_binding: iconbutton4_pressed_binding,
    click_handler_4: click_handler_4,
    click_handler_5: click_handler_5
  };
}

var Icon_button =
/*#__PURE__*/
function (_SvelteComponentDev) {
  _inherits(Icon_button, _SvelteComponentDev);

  function Icon_button(options) {
    var _this;

    _classCallCheck(this, Icon_button);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Icon_button).call(this, options));
    init(_assertThisInitialized(_this), options, instance, create_fragment, safe_not_equal, []);
    dispatch_dev("SvelteRegisterComponent", {
      component: _assertThisInitialized(_this),
      tagName: "Icon_button",
      options: options,
      id: create_fragment.name
    });
    return _this;
  }

  return Icon_button;
}(SvelteComponentDev);

export default Icon_button;

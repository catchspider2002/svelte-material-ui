import { u as _inherits, v as _classCallCheck, w as _possibleConstructorReturn, x as _getPrototypeOf, i as init, s as safe_not_equal, y as _assertThisInitialized, d as dispatch_dev, S as SvelteComponentDev, f as element, P as append_dev, aa as _toConsumableArray, T as text, g as claim_element, h as children, U as claim_text, j as detach_dev, O as attr_dev, l as add_location, m as insert_dev, n as noop, G as binding_callbacks, I as bind, M as space, N as claim_space, a4 as toggle_class, J as mount_component, t as transition_in, r as transition_out, a8 as destroy_each, K as destroy_component, L as add_flush_callback } from './index.d5da4a00.js';
import './asyncToGenerator.0781946b.js';
import './useActions.b478cae0.js';
import { s as styleInject } from './typeof.0d5bf00d.js';
import { C as Checkbox } from './index.294795e2.js';
import './prefixFilter.1941fe02.js';
import { F as FormField } from './index.c408e6b6.js';

var css = ".mdc-elevation--z0{box-shadow:0 0 0 0 rgba(0,0,0,.2),0 0 0 0 rgba(0,0,0,.14),0 0 0 0 rgba(0,0,0,.12)}.mdc-elevation--z1{box-shadow:0 2px 1px -1px rgba(0,0,0,.2),0 1px 1px 0 rgba(0,0,0,.14),0 1px 3px 0 rgba(0,0,0,.12)}.mdc-elevation--z2{box-shadow:0 3px 1px -2px rgba(0,0,0,.2),0 2px 2px 0 rgba(0,0,0,.14),0 1px 5px 0 rgba(0,0,0,.12)}.mdc-elevation--z3{box-shadow:0 3px 3px -2px rgba(0,0,0,.2),0 3px 4px 0 rgba(0,0,0,.14),0 1px 8px 0 rgba(0,0,0,.12)}.mdc-elevation--z4{box-shadow:0 2px 4px -1px rgba(0,0,0,.2),0 4px 5px 0 rgba(0,0,0,.14),0 1px 10px 0 rgba(0,0,0,.12)}.mdc-elevation--z5{box-shadow:0 3px 5px -1px rgba(0,0,0,.2),0 5px 8px 0 rgba(0,0,0,.14),0 1px 14px 0 rgba(0,0,0,.12)}.mdc-elevation--z6{box-shadow:0 3px 5px -1px rgba(0,0,0,.2),0 6px 10px 0 rgba(0,0,0,.14),0 1px 18px 0 rgba(0,0,0,.12)}.mdc-elevation--z7{box-shadow:0 4px 5px -2px rgba(0,0,0,.2),0 7px 10px 1px rgba(0,0,0,.14),0 2px 16px 1px rgba(0,0,0,.12)}.mdc-elevation--z8{box-shadow:0 5px 5px -3px rgba(0,0,0,.2),0 8px 10px 1px rgba(0,0,0,.14),0 3px 14px 2px rgba(0,0,0,.12)}.mdc-elevation--z9{box-shadow:0 5px 6px -3px rgba(0,0,0,.2),0 9px 12px 1px rgba(0,0,0,.14),0 3px 16px 2px rgba(0,0,0,.12)}.mdc-elevation--z10{box-shadow:0 6px 6px -3px rgba(0,0,0,.2),0 10px 14px 1px rgba(0,0,0,.14),0 4px 18px 3px rgba(0,0,0,.12)}.mdc-elevation--z11{box-shadow:0 6px 7px -4px rgba(0,0,0,.2),0 11px 15px 1px rgba(0,0,0,.14),0 4px 20px 3px rgba(0,0,0,.12)}.mdc-elevation--z12{box-shadow:0 7px 8px -4px rgba(0,0,0,.2),0 12px 17px 2px rgba(0,0,0,.14),0 5px 22px 4px rgba(0,0,0,.12)}.mdc-elevation--z13{box-shadow:0 7px 8px -4px rgba(0,0,0,.2),0 13px 19px 2px rgba(0,0,0,.14),0 5px 24px 4px rgba(0,0,0,.12)}.mdc-elevation--z14{box-shadow:0 7px 9px -4px rgba(0,0,0,.2),0 14px 21px 2px rgba(0,0,0,.14),0 5px 26px 4px rgba(0,0,0,.12)}.mdc-elevation--z15{box-shadow:0 8px 9px -5px rgba(0,0,0,.2),0 15px 22px 2px rgba(0,0,0,.14),0 6px 28px 5px rgba(0,0,0,.12)}.mdc-elevation--z16{box-shadow:0 8px 10px -5px rgba(0,0,0,.2),0 16px 24px 2px rgba(0,0,0,.14),0 6px 30px 5px rgba(0,0,0,.12)}.mdc-elevation--z17{box-shadow:0 8px 11px -5px rgba(0,0,0,.2),0 17px 26px 2px rgba(0,0,0,.14),0 6px 32px 5px rgba(0,0,0,.12)}.mdc-elevation--z18{box-shadow:0 9px 11px -5px rgba(0,0,0,.2),0 18px 28px 2px rgba(0,0,0,.14),0 7px 34px 6px rgba(0,0,0,.12)}.mdc-elevation--z19{box-shadow:0 9px 12px -6px rgba(0,0,0,.2),0 19px 29px 2px rgba(0,0,0,.14),0 7px 36px 6px rgba(0,0,0,.12)}.mdc-elevation--z20{box-shadow:0 10px 13px -6px rgba(0,0,0,.2),0 20px 31px 3px rgba(0,0,0,.14),0 8px 38px 7px rgba(0,0,0,.12)}.mdc-elevation--z21{box-shadow:0 10px 13px -6px rgba(0,0,0,.2),0 21px 33px 3px rgba(0,0,0,.14),0 8px 40px 7px rgba(0,0,0,.12)}.mdc-elevation--z22{box-shadow:0 10px 14px -6px rgba(0,0,0,.2),0 22px 35px 3px rgba(0,0,0,.14),0 8px 42px 7px rgba(0,0,0,.12)}.mdc-elevation--z23{box-shadow:0 11px 14px -7px rgba(0,0,0,.2),0 23px 36px 3px rgba(0,0,0,.14),0 9px 44px 8px rgba(0,0,0,.12)}.mdc-elevation--z24{box-shadow:0 11px 15px -7px rgba(0,0,0,.2),0 24px 38px 3px rgba(0,0,0,.14),0 9px 46px 8px rgba(0,0,0,.12)}.mdc-elevation-transition{transition:box-shadow .28s cubic-bezier(.4,0,.2,1);will-change:box-shadow}.my-primary{color:#ff3e00;color:var(--mdc-theme-primary,#ff3e00)}.my-primary.elevated{box-shadow:0 2px 4px -1px rgba(255,62,0,.2),0 4px 5px 0 rgba(255,62,0,.14),0 1px 10px 0 rgba(255,62,0,.12)}.my-secondary{color:#676778;color:var(--mdc-theme-secondary,#676778)}.my-secondary.elevated{box-shadow:0 2px 4px -1px rgba(103,103,120,.2),0 4px 5px 0 rgba(103,103,120,.14),0 1px 10px 0 rgba(103,103,120,.12)}";
styleInject(css);

var file = "src/routes/demo/elevation.svelte";

function add_css() {
  var style = element("style");
  style.id = 'svelte-1382yuk-style';
  style.textContent = ".flexy-dad.svelte-1382yuk{display:flex;flex-wrap:wrap}.flexy-boy.svelte-1382yuk{display:flex;justify-content:center;align-items:center;width:120px;height:120px;margin:0 36px 36px 0}.rounded.svelte-1382yuk{border-radius:4px}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZWxldmF0aW9uLnN2ZWx0ZSIsInNvdXJjZXMiOlsiZWxldmF0aW9uLnN2ZWx0ZSJdLCJzb3VyY2VzQ29udGVudCI6WyI8c3ZlbHRlOmhlYWQ+XG4gIDx0aXRsZT5FbGV2YXRpb24gLSBTTVVJPC90aXRsZT5cbjwvc3ZlbHRlOmhlYWQ+XG5cbjxzZWN0aW9uPlxuICA8aDI+RWxldmF0aW9uPC9oMj5cblxuICA8IS0tXG4gICAgWW91IG5lZWQgdG8gaW1wb3J0IGBAbWF0ZXJpYWwvZWxldmF0aW9uL21kYy1lbGV2YXRpb25gIGluIFNDU1MgZm9yXG4gICAgdGhlc2UgdG8gd29yay4gU2VlIHRoZSBFbGV2YXRpb24uc2NzcyBmaWxlLlxuICAtLT5cblxuICA8ZGl2IGNsYXNzPVwiZmxleHktZGFkXCI+XG4gICAgeyNlYWNoIFsuLi5BcnJheSgyNCldLm1hcCgodiwgaSkgPT4gaSArIDEpIGFzIG59XG4gICAgICA8ZGl2IGNsYXNzPVwibWRjLWVsZXZhdGlvbi0tentufSBmbGV4eS1ib3lcIj5FbGV2YXRpb246IHtufTwvZGl2PlxuICAgIHsvZWFjaH1cbiAgPC9kaXY+XG5cbiAgPGRpdj5cbiAgICBUcmFuc2l0aW9ucyBhbmQgY29sb3I6IDxiciAvPlxuXG4gICAgPEZvcm1GaWVsZD5cbiAgICAgIDxDaGVja2JveCBiaW5kOmNoZWNrZWQ9e2xpZnRNZVVwfSAvPlxuICAgICAgPHNwYW4gc2xvdD1cImxhYmVsXCI+WW91IHJhaXNlIG1lIHVwLCBzbyBJIGNhbiBzdGFuZCBvbiBtb3VudGFpbnMhPC9zcGFuPlxuICAgIDwvRm9ybUZpZWxkPlxuXG4gICAgPGJyIC8+PGJyIC8+XG5cbiAgICA8ZGl2IGNsYXNzPVwiZmxleHktZGFkXCI+XG4gICAgICA8ZGl2XG4gICAgICAgIGNsYXNzPVwibWRjLWVsZXZhdGlvbi10cmFuc2l0aW9uIHJvdW5kZWQgZmxleHktYm95XCJcbiAgICAgICAgY2xhc3M6bWRjLWVsZXZhdGlvbi0tejQ9e2xpZnRNZVVwfVxuICAgICAgPlxuICAgICAgICBTdGFuZGFyZFxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2XG4gICAgICAgIGNsYXNzPVwibXktcHJpbWFyeSBtZGMtZWxldmF0aW9uLXRyYW5zaXRpb24gcm91bmRlZCBmbGV4eS1ib3lcIlxuICAgICAgICBjbGFzczplbGV2YXRlZD17bGlmdE1lVXB9XG4gICAgICA+XG4gICAgICAgIFByaW1hcnlcbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdlxuICAgICAgICBjbGFzcz1cIm15LXNlY29uZGFyeSBtZGMtZWxldmF0aW9uLXRyYW5zaXRpb24gcm91bmRlZCBmbGV4eS1ib3lcIlxuICAgICAgICBjbGFzczplbGV2YXRlZD17bGlmdE1lVXB9XG4gICAgICA+XG4gICAgICAgIFNlY29uZGFyeVxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gIDwvZGl2PlxuPC9zZWN0aW9uPlxuXG48c2NyaXB0PlxuICBpbXBvcnQgJy4vZWxldmF0aW9uLnNjc3MnO1xuICBpbXBvcnQgQ2hlY2tib3ggZnJvbSAnQHNtdWkvY2hlY2tib3gnO1xuICBpbXBvcnQgRm9ybUZpZWxkIGZyb20gJ0BzbXVpL2Zvcm0tZmllbGQnO1xuXG4gIGxldCBsaWZ0TWVVcCA9IGZhbHNlO1xuPC9zY3JpcHQ+XG5cbjxzdHlsZT5cbiAgLmZsZXh5LWRhZCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LXdyYXA6IHdyYXA7XG4gIH1cblxuICAuZmxleHktYm95IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgd2lkdGg6IDEyMHB4O1xuICAgIGhlaWdodDogMTIwcHg7XG4gICAgbWFyZ2luOiAwIDM2cHggMzZweCAwO1xuICB9XG5cbiAgLnJvdW5kZWQge1xuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgfVxuPC9zdHlsZT4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBNERFLFVBQVUsZUFBQyxDQUFDLEFBQ1YsT0FBTyxDQUFFLElBQUksQ0FDYixTQUFTLENBQUUsSUFBSSxBQUNqQixDQUFDLEFBRUQsVUFBVSxlQUFDLENBQUMsQUFDVixPQUFPLENBQUUsSUFBSSxDQUNiLGVBQWUsQ0FBRSxNQUFNLENBQ3ZCLFdBQVcsQ0FBRSxNQUFNLENBQ25CLEtBQUssQ0FBRSxLQUFLLENBQ1osTUFBTSxDQUFFLEtBQUssQ0FDYixNQUFNLENBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxBQUN2QixDQUFDLEFBRUQsUUFBUSxlQUFDLENBQUMsQUFDUixhQUFhLENBQUUsR0FBRyxBQUNwQixDQUFDIn0= */";
  append_dev(document.head, style);
}

function get_each_context(ctx, list, i) {
  var child_ctx = Object.create(ctx);
  child_ctx.n = list[i];
  return child_ctx;
} // (14:4) {#each [...Array(24)].map((v, i) => i + 1) as n}


function create_each_block(ctx) {
  var div, t0, t1;
  var block = {
    c: function create() {
      div = element("div");
      t0 = text("Elevation: ");
      t1 = text(ctx.n);
      this.h();
    },
    l: function claim(nodes) {
      div = claim_element(nodes, "DIV", {
        class: true
      }, false);
      var div_nodes = children(div);
      t0 = claim_text(div_nodes, "Elevation: ");
      t1 = claim_text(div_nodes, ctx.n);
      div_nodes.forEach(detach_dev);
      this.h();
    },
    h: function hydrate() {
      attr_dev(div, "class", "mdc-elevation--z" + ctx.n + " flexy-boy" + " svelte-1382yuk");
      add_location(div, file, 14, 6, 314);
    },
    m: function mount(target, anchor) {
      insert_dev(target, div, anchor);
      append_dev(div, t0);
      append_dev(div, t1);
    },
    p: noop,
    d: function destroy(detaching) {
      if (detaching) {
        detach_dev(div);
      }
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_each_block.name,
    type: "each",
    source: "(14:4) {#each [...Array(24)].map((v, i) => i + 1) as n}",
    ctx: ctx
  });
  return block;
} // (24:6) <span slot="label">


function create_label_slot(ctx) {
  var span, t;
  var block = {
    c: function create() {
      span = element("span");
      t = text("You raise me up, so I can stand on mountains!");
      this.h();
    },
    l: function claim(nodes) {
      span = claim_element(nodes, "SPAN", {
        slot: true
      }, false);
      var span_nodes = children(span);
      t = claim_text(span_nodes, "You raise me up, so I can stand on mountains!");
      span_nodes.forEach(detach_dev);
      this.h();
    },
    h: function hydrate() {
      attr_dev(span, "slot", "label");
      add_location(span, file, 23, 6, 508);
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
    source: "(24:6) <span slot=\"label\">",
    ctx: ctx
  });
  return block;
} // (22:4) <FormField>


function create_default_slot(ctx) {
  var updating_checked, t, current;

  function checkbox_checked_binding(value) {
    ctx.checkbox_checked_binding.call(null, value);
    updating_checked = true;
    add_flush_callback(function () {
      return updating_checked = false;
    });
  }

  var checkbox_props = {};

  if (ctx.liftMeUp !== void 0) {
    checkbox_props.checked = ctx.liftMeUp;
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

      if (!updating_checked && changed.liftMeUp) {
        checkbox_changes.checked = ctx.liftMeUp;
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
    id: create_default_slot.name,
    type: "slot",
    source: "(22:4) <FormField>",
    ctx: ctx
  });
  return block;
}

function create_fragment(ctx) {
  var t0, section, h2, t1, t2, div0, t3, div5, t4, br0, t5, t6, br1, br2, t7, div4, div1, t8, t9, div2, t10, t11, div3, t12, current;

  var each_value = _toConsumableArray(Array(24)).map(func);

  var each_blocks = [];

  for (var i = 0; i < each_value.length; i += 1) {
    each_blocks[i] = create_each_block(get_each_context(ctx, each_value, i));
  }

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
      t0 = space();
      section = element("section");
      h2 = element("h2");
      t1 = text("Elevation");
      t2 = space();
      div0 = element("div");

      for (var _i = 0; _i < each_blocks.length; _i += 1) {
        each_blocks[_i].c();
      }

      t3 = space();
      div5 = element("div");
      t4 = text("Transitions and color: ");
      br0 = element("br");
      t5 = space();
      formfield.$$.fragment.c();
      t6 = space();
      br1 = element("br");
      br2 = element("br");
      t7 = space();
      div4 = element("div");
      div1 = element("div");
      t8 = text("Standard");
      t9 = space();
      div2 = element("div");
      t10 = text("Primary");
      t11 = space();
      div3 = element("div");
      t12 = text("Secondary");
      this.h();
    },
    l: function claim(nodes) {
      t0 = claim_space(nodes);
      section = claim_element(nodes, "SECTION", {}, false);
      var section_nodes = children(section);
      h2 = claim_element(section_nodes, "H2", {}, false);
      var h2_nodes = children(h2);
      t1 = claim_text(h2_nodes, "Elevation");
      h2_nodes.forEach(detach_dev);
      t2 = claim_space(section_nodes);
      div0 = claim_element(section_nodes, "DIV", {
        class: true
      }, false);
      var div0_nodes = children(div0);

      for (var _i2 = 0; _i2 < each_blocks.length; _i2 += 1) {
        each_blocks[_i2].l(div0_nodes);
      }

      div0_nodes.forEach(detach_dev);
      t3 = claim_space(section_nodes);
      div5 = claim_element(section_nodes, "DIV", {}, false);
      var div5_nodes = children(div5);
      t4 = claim_text(div5_nodes, "Transitions and color: ");
      br0 = claim_element(div5_nodes, "BR", {}, false);
      var br0_nodes = children(br0);
      br0_nodes.forEach(detach_dev);
      t5 = claim_space(div5_nodes);
      formfield.$$.fragment.l(div5_nodes);
      t6 = claim_space(div5_nodes);
      br1 = claim_element(div5_nodes, "BR", {}, false);
      var br1_nodes = children(br1);
      br1_nodes.forEach(detach_dev);
      br2 = claim_element(div5_nodes, "BR", {}, false);
      var br2_nodes = children(br2);
      br2_nodes.forEach(detach_dev);
      t7 = claim_space(div5_nodes);
      div4 = claim_element(div5_nodes, "DIV", {
        class: true
      }, false);
      var div4_nodes = children(div4);
      div1 = claim_element(div4_nodes, "DIV", {
        class: true
      }, false);
      var div1_nodes = children(div1);
      t8 = claim_text(div1_nodes, "Standard");
      div1_nodes.forEach(detach_dev);
      t9 = claim_space(div4_nodes);
      div2 = claim_element(div4_nodes, "DIV", {
        class: true
      }, false);
      var div2_nodes = children(div2);
      t10 = claim_text(div2_nodes, "Primary");
      div2_nodes.forEach(detach_dev);
      t11 = claim_space(div4_nodes);
      div3 = claim_element(div4_nodes, "DIV", {
        class: true
      }, false);
      var div3_nodes = children(div3);
      t12 = claim_text(div3_nodes, "Secondary");
      div3_nodes.forEach(detach_dev);
      div4_nodes.forEach(detach_dev);
      div5_nodes.forEach(detach_dev);
      section_nodes.forEach(detach_dev);
      this.h();
    },
    h: function hydrate() {
      document.title = "Elevation - SMUI";
      add_location(h2, file, 5, 2, 76);
      attr_dev(div0, "class", "flexy-dad svelte-1382yuk");
      add_location(div0, file, 12, 2, 231);
      add_location(br0, file, 19, 27, 435);
      add_location(br1, file, 26, 4, 602);
      add_location(br2, file, 26, 10, 608);
      attr_dev(div1, "class", "mdc-elevation-transition rounded flexy-boy svelte-1382yuk");
      toggle_class(div1, "mdc-elevation--z4", ctx.liftMeUp);
      add_location(div1, file, 29, 6, 650);
      attr_dev(div2, "class", "my-primary mdc-elevation-transition rounded flexy-boy svelte-1382yuk");
      toggle_class(div2, "elevated", ctx.liftMeUp);
      add_location(div2, file, 35, 6, 801);
      attr_dev(div3, "class", "my-secondary mdc-elevation-transition rounded flexy-boy svelte-1382yuk");
      toggle_class(div3, "elevated", ctx.liftMeUp);
      add_location(div3, file, 41, 6, 953);
      attr_dev(div4, "class", "flexy-dad svelte-1382yuk");
      add_location(div4, file, 28, 4, 620);
      add_location(div5, file, 18, 2, 402);
      add_location(section, file, 4, 0, 64);
    },
    m: function mount(target, anchor) {
      insert_dev(target, t0, anchor);
      insert_dev(target, section, anchor);
      append_dev(section, h2);
      append_dev(h2, t1);
      append_dev(section, t2);
      append_dev(section, div0);

      for (var _i3 = 0; _i3 < each_blocks.length; _i3 += 1) {
        each_blocks[_i3].m(div0, null);
      }

      append_dev(section, t3);
      append_dev(section, div5);
      append_dev(div5, t4);
      append_dev(div5, br0);
      append_dev(div5, t5);
      mount_component(formfield, div5, null);
      append_dev(div5, t6);
      append_dev(div5, br1);
      append_dev(div5, br2);
      append_dev(div5, t7);
      append_dev(div5, div4);
      append_dev(div4, div1);
      append_dev(div1, t8);
      append_dev(div4, t9);
      append_dev(div4, div2);
      append_dev(div2, t10);
      append_dev(div4, t11);
      append_dev(div4, div3);
      append_dev(div3, t12);
      current = true;
    },
    p: function update(changed, ctx) {
      var formfield_changes = {};
      if (changed.$$scope || changed.liftMeUp) formfield_changes.$$scope = {
        changed: changed,
        ctx: ctx
      };
      formfield.$set(formfield_changes);

      if (changed.liftMeUp) {
        toggle_class(div1, "mdc-elevation--z4", ctx.liftMeUp);
        toggle_class(div2, "elevated", ctx.liftMeUp);
        toggle_class(div3, "elevated", ctx.liftMeUp);
      }
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
      if (detaching) {
        detach_dev(t0);
        detach_dev(section);
      }

      destroy_each(each_blocks, detaching);
      destroy_component(formfield);
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

var func = function func(v, i) {
  return i + 1;
};

function instance($$self, $$props, $$invalidate) {
  var liftMeUp = false;

  function checkbox_checked_binding(value) {
    liftMeUp = value;
    $$invalidate('liftMeUp', liftMeUp);
  }

  $$self.$capture_state = function () {
    return {};
  };

  $$self.$inject_state = function ($$props) {
    if ('liftMeUp' in $$props) $$invalidate('liftMeUp', liftMeUp = $$props.liftMeUp);
  };

  return {
    liftMeUp: liftMeUp,
    checkbox_checked_binding: checkbox_checked_binding
  };
}

var Elevation =
/*#__PURE__*/
function (_SvelteComponentDev) {
  _inherits(Elevation, _SvelteComponentDev);

  function Elevation(options) {
    var _this;

    _classCallCheck(this, Elevation);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Elevation).call(this, options));
    if (!document.getElementById("svelte-1382yuk-style")) add_css();
    init(_assertThisInitialized(_this), options, instance, create_fragment, safe_not_equal, []);
    dispatch_dev("SvelteRegisterComponent", {
      component: _assertThisInitialized(_this),
      tagName: "Elevation",
      options: options,
      id: create_fragment.name
    });
    return _this;
  }

  return Elevation;
}(SvelteComponentDev);

export default Elevation;

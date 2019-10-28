import { u as _inherits, v as _classCallCheck, w as _possibleConstructorReturn, x as _getPrototypeOf, i as init, s as safe_not_equal, y as _assertThisInitialized, d as dispatch_dev, S as SvelteComponentDev, M as space, f as element, T as text, N as claim_space, g as claim_element, h as children, j as detach_dev, U as claim_text, W as set_style, O as attr_dev, l as add_location, m as insert_dev, P as append_dev, n as noop } from './index.d5da4a00.js';

var file = "src/routes/index.svelte";

function create_fragment(ctx) {
  var t0, section, div0, img, t1, h2, t2, t3, div3, div1, t4, div2, p0, t5, t6, p1, t7, t8, p2, t9, a0, t10, t11, a1, t12, t13;
  var block = {
    c: function create() {
      t0 = space();
      section = element("section");
      div0 = element("div");
      img = element("img");
      t1 = space();
      h2 = element("h2");
      t2 = text("Svelte Material UI");
      t3 = space();
      div3 = element("div");
      div1 = element("div");
      t4 = space();
      div2 = element("div");
      p0 = element("p");
      t5 = text("Material UI Components for Svelte 3, ready to use in your apps.");
      t6 = space();
      p1 = element("p");
      t7 = text("Use the menu on the left to see the component demos.");
      t8 = space();
      p2 = element("p");
      t9 = text("[\n        ");
      a0 = element("a");
      t10 = text("GitHub");
      t11 = text("\n        |\n        ");
      a1 = element("a");
      t12 = text("Issue Tracker");
      t13 = text("\n        |\n        © 2019 Hunter Perrin\n        ]");
      this.h();
    },
    l: function claim(nodes) {
      t0 = claim_space(nodes);
      section = claim_element(nodes, "SECTION", {
        style: true
      }, false);
      var section_nodes = children(section);
      div0 = claim_element(section_nodes, "DIV", {
        style: true
      }, false);
      var div0_nodes = children(div0);
      img = claim_element(div0_nodes, "IMG", {
        style: true,
        src: true,
        alt: true
      }, false);
      var img_nodes = children(img);
      img_nodes.forEach(detach_dev);
      t1 = claim_space(div0_nodes);
      h2 = claim_element(div0_nodes, "H2", {
        style: true
      }, false);
      var h2_nodes = children(h2);
      t2 = claim_text(h2_nodes, "Svelte Material UI");
      h2_nodes.forEach(detach_dev);
      div0_nodes.forEach(detach_dev);
      t3 = claim_space(section_nodes);
      div3 = claim_element(section_nodes, "DIV", {
        style: true
      }, false);
      var div3_nodes = children(div3);
      div1 = claim_element(div3_nodes, "DIV", {
        style: true
      }, false);
      var div1_nodes = children(div1);
      div1_nodes.forEach(detach_dev);
      t4 = claim_space(div3_nodes);
      div2 = claim_element(div3_nodes, "DIV", {
        style: true
      }, false);
      var div2_nodes = children(div2);
      p0 = claim_element(div2_nodes, "P", {}, false);
      var p0_nodes = children(p0);
      t5 = claim_text(p0_nodes, "Material UI Components for Svelte 3, ready to use in your apps.");
      p0_nodes.forEach(detach_dev);
      t6 = claim_space(div2_nodes);
      p1 = claim_element(div2_nodes, "P", {}, false);
      var p1_nodes = children(p1);
      t7 = claim_text(p1_nodes, "Use the menu on the left to see the component demos.");
      p1_nodes.forEach(detach_dev);
      t8 = claim_space(div2_nodes);
      p2 = claim_element(div2_nodes, "P", {}, false);
      var p2_nodes = children(p2);
      t9 = claim_text(p2_nodes, "[\n        ");
      a0 = claim_element(p2_nodes, "A", {
        href: true,
        target: true
      }, false);
      var a0_nodes = children(a0);
      t10 = claim_text(a0_nodes, "GitHub");
      a0_nodes.forEach(detach_dev);
      t11 = claim_text(p2_nodes, "\n        |\n        ");
      a1 = claim_element(p2_nodes, "A", {
        href: true,
        target: true
      }, false);
      var a1_nodes = children(a1);
      t12 = claim_text(a1_nodes, "Issue Tracker");
      a1_nodes.forEach(detach_dev);
      t13 = claim_text(p2_nodes, "\n        |\n        © 2019 Hunter Perrin\n        ]");
      p2_nodes.forEach(detach_dev);
      div2_nodes.forEach(detach_dev);
      div3_nodes.forEach(detach_dev);
      section_nodes.forEach(detach_dev);
      this.h();
    },
    h: function hydrate() {
      document.title = "Svelte Material UI";
      set_style(img, "width", "150px");
      set_style(img, "height", "150px");
      attr_dev(img, "src", "logo.png");
      attr_dev(img, "alt", "logo");
      add_location(img, file, 6, 4, 172);
      set_style(h2, "margin-left", "18px");
      add_location(h2, file, 7, 4, 247);
      set_style(div0, "display", "flex");
      set_style(div0, "align-items", "center");
      set_style(div0, "flex-wrap", "wrap");
      add_location(div0, file, 5, 2, 101);
      set_style(div1, "width", "150px");
      set_style(div1, "height", "1px");
      add_location(div1, file, 11, 4, 385);
      add_location(p0, file, 13, 6, 475);
      add_location(p1, file, 15, 6, 553);
      attr_dev(a0, "href", "https://github.com/hperrin/svelte-material-ui");
      attr_dev(a0, "target", "_blank");
      add_location(a0, file, 19, 8, 642);
      attr_dev(a1, "href", "https://github.com/hperrin/svelte-material-ui/issues");
      attr_dev(a1, "target", "_blank");
      add_location(a1, file, 21, 8, 743);
      add_location(p2, file, 17, 6, 620);
      set_style(div2, "margin-left", "18px");
      add_location(div2, file, 12, 4, 436);
      set_style(div3, "display", "flex");
      set_style(div3, "align-items", "center");
      set_style(div3, "flex-wrap", "wrap");
      add_location(div3, file, 10, 2, 314);
      set_style(section, "padding", "36px");
      add_location(section, file, 4, 0, 66);
    },
    m: function mount(target, anchor) {
      insert_dev(target, t0, anchor);
      insert_dev(target, section, anchor);
      append_dev(section, div0);
      append_dev(div0, img);
      append_dev(div0, t1);
      append_dev(div0, h2);
      append_dev(h2, t2);
      append_dev(section, t3);
      append_dev(section, div3);
      append_dev(div3, div1);
      append_dev(div3, t4);
      append_dev(div3, div2);
      append_dev(div2, p0);
      append_dev(p0, t5);
      append_dev(div2, t6);
      append_dev(div2, p1);
      append_dev(p1, t7);
      append_dev(div2, t8);
      append_dev(div2, p2);
      append_dev(p2, t9);
      append_dev(p2, a0);
      append_dev(a0, t10);
      append_dev(p2, t11);
      append_dev(p2, a1);
      append_dev(a1, t12);
      append_dev(p2, t13);
    },
    p: noop,
    i: noop,
    o: noop,
    d: function destroy(detaching) {
      if (detaching) {
        detach_dev(t0);
        detach_dev(section);
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

var Index =
/*#__PURE__*/
function (_SvelteComponentDev) {
  _inherits(Index, _SvelteComponentDev);

  function Index(options) {
    var _this;

    _classCallCheck(this, Index);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Index).call(this, options));
    init(_assertThisInitialized(_this), options, null, create_fragment, safe_not_equal, []);
    dispatch_dev("SvelteRegisterComponent", {
      component: _assertThisInitialized(_this),
      tagName: "Index",
      options: options,
      id: create_fragment.name
    });
    return _this;
  }

  return Index;
}(SvelteComponentDev);

export default Index;

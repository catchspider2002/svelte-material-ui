import { u as _inherits, v as _classCallCheck, w as _possibleConstructorReturn, x as _getPrototypeOf, i as init, s as safe_not_equal, y as _assertThisInitialized, d as dispatch_dev, S as SvelteComponentDev, f as element, P as append_dev, M as space, T as text, N as claim_space, g as claim_element, h as children, U as claim_text, j as detach_dev, O as attr_dev, l as add_location, m as insert_dev, J as mount_component, X as set_data_dev, t as transition_in, r as transition_out, K as destroy_component, G as binding_callbacks } from './index.d5da4a00.js';
import './asyncToGenerator.0781946b.js';
import './useActions.b478cae0.js';
import './typeof.0d5bf00d.js';
import './Div.1629f0cb.js';
import './Span.88d5af72.js';
import { B as Button, G as Group, a as GroupItem } from './index.35ab1463.js';
import './bare.3cea1bea.js';
import './Button.d401af18.js';
import { L as Label } from './Label.35a2c1e8.js';
import { I as Icon } from './Icon.3c6823d4.js';
import { L as List, S as Separator, T as Text } from './index.0c8aefe0.js';
import { I as Item } from './Item.f5da28fc.js';
import './prefixFilter.1941fe02.js';
import './MenuSurface.829a48e6.js';
import { M as Menu } from './index.629518cc.js';
import './Menu.8d163187.js';

var file = "src/routes/demo/button.svelte";

function add_css() {
  var style = element("style");
  style.id = 'svelte-18uebmb-style';
  style.textContent = ".svelte-18uebmb .myClass{text-decoration:underline !important}.svelte-18uebmb .mdc-button, .smui-button__group{margin-bottom:.4em}.svelte-18uebmb .smui-button__group .mdc-button{margin-bottom:0}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnV0dG9uLnN2ZWx0ZSIsInNvdXJjZXMiOlsiYnV0dG9uLnN2ZWx0ZSJdLCJzb3VyY2VzQ29udGVudCI6WyI8c3ZlbHRlOmhlYWQ+XG4gIDx0aXRsZT5CdXR0b24gLSBTTVVJPC90aXRsZT5cbjwvc3ZlbHRlOmhlYWQ+XG5cbjxzZWN0aW9uPlxuICA8aDI+QnV0dG9uPC9oMj5cblxuICA8ZGl2PlxuICAgIDxCdXR0b24gb246Y2xpY2s9eygpID0+IGNsaWNrZWQrK30+PExhYmVsPkRlZmF1bHQ8L0xhYmVsPjwvQnV0dG9uPlxuICAgIDxCdXR0b24gb246Y2xpY2s9eygpID0+IGNsaWNrZWQrK30gZGlzYWJsZWQ+PExhYmVsPkRpc2FibGVkPC9MYWJlbD48L0J1dHRvbj5cbiAgICA8QnV0dG9uIG9uOmNsaWNrPXsoKSA9PiBjbGlja2VkKyt9IHJpcHBsZT17ZmFsc2V9PjxMYWJlbD5ObyBSaXBwbGU8L0xhYmVsPjwvQnV0dG9uPlxuICAgIDxCdXR0b24gb246Y2xpY2s9eygpID0+IGNsaWNrZWQrK30gdmFyaWFudD1cInJhaXNlZFwiPjxMYWJlbD5SYWlzZWQ8L0xhYmVsPjwvQnV0dG9uPlxuICAgIDxCdXR0b24gb246Y2xpY2s9eygpID0+IGNsaWNrZWQrK30gdmFyaWFudD1cInVuZWxldmF0ZWRcIj48TGFiZWw+VW5lbGV2YXRlZDwvTGFiZWw+PC9CdXR0b24+XG4gICAgPEJ1dHRvbiBvbjpjbGljaz17KCkgPT4gY2xpY2tlZCsrfSB2YXJpYW50PVwib3V0bGluZWRcIj48TGFiZWw+T3V0bGluZWQ8L0xhYmVsPjwvQnV0dG9uPlxuICAgIDxCdXR0b24gb246Y2xpY2s9eygpID0+IGNsaWNrZWQrK30gZGVuc2U+PExhYmVsPkRlbnNlPC9MYWJlbD48L0J1dHRvbj5cbiAgICA8QnV0dG9uIG9uOmNsaWNrPXsoKSA9PiBjbGlja2VkKyt9IGNsYXNzPVwibXlDbGFzc1wiPjxMYWJlbD5XaXRoIGEgQ2xhc3M8L0xhYmVsPjwvQnV0dG9uPlxuICA8L2Rpdj5cblxuICA8ZGl2PlxuICAgIDxCdXR0b24gb246Y2xpY2s9eygpID0+IGNsaWNrZWQrK30+PEljb24gY2xhc3M9XCJtYXRlcmlhbC1pY29uc1wiPmZhdm9yaXRlPC9JY29uPjxMYWJlbD5JY29uPC9MYWJlbD48L0J1dHRvbj5cbiAgICA8QnV0dG9uIG9uOmNsaWNrPXsoKSA9PiBjbGlja2VkKyt9PjxMYWJlbD5UcmFpbGluZyBJY29uPC9MYWJlbD48SWNvbiBjbGFzcz1cIm1hdGVyaWFsLWljb25zXCI+ZmF2b3JpdGU8L0ljb24+PC9CdXR0b24+XG4gIDwvZGl2PlxuXG4gIDxkaXY+XG4gICAgU2Vjb25kYXJ5IGNvbG9yOiA8YnIgLz5cbiAgICA8QnV0dG9uIGNvbG9yPVwic2Vjb25kYXJ5XCIgb246Y2xpY2s9eygpID0+IGNsaWNrZWQrK30+PExhYmVsPkRlZmF1bHQ8L0xhYmVsPjwvQnV0dG9uPlxuICAgIDxCdXR0b24gY29sb3I9XCJzZWNvbmRhcnlcIiBvbjpjbGljaz17KCkgPT4gY2xpY2tlZCsrfSBkaXNhYmxlZD48TGFiZWw+RGlzYWJsZWQ8L0xhYmVsPjwvQnV0dG9uPlxuICAgIDxCdXR0b24gY29sb3I9XCJzZWNvbmRhcnlcIiBvbjpjbGljaz17KCkgPT4gY2xpY2tlZCsrfSByaXBwbGU9e2ZhbHNlfT48TGFiZWw+Tm8gUmlwcGxlPC9MYWJlbD48L0J1dHRvbj5cbiAgICA8QnV0dG9uIGNvbG9yPVwic2Vjb25kYXJ5XCIgb246Y2xpY2s9eygpID0+IGNsaWNrZWQrK30gdmFyaWFudD1cInJhaXNlZFwiPjxMYWJlbD5SYWlzZWQ8L0xhYmVsPjwvQnV0dG9uPlxuICAgIDxCdXR0b24gY29sb3I9XCJzZWNvbmRhcnlcIiBvbjpjbGljaz17KCkgPT4gY2xpY2tlZCsrfSB2YXJpYW50PVwidW5lbGV2YXRlZFwiPjxMYWJlbD5VbmVsZXZhdGVkPC9MYWJlbD48L0J1dHRvbj5cbiAgICA8QnV0dG9uIGNvbG9yPVwic2Vjb25kYXJ5XCIgb246Y2xpY2s9eygpID0+IGNsaWNrZWQrK30gdmFyaWFudD1cIm91dGxpbmVkXCI+PExhYmVsPk91dGxpbmVkPC9MYWJlbD48L0J1dHRvbj5cbiAgICA8QnV0dG9uIGNvbG9yPVwic2Vjb25kYXJ5XCIgb246Y2xpY2s9eygpID0+IGNsaWNrZWQrK30gZGVuc2U+PExhYmVsPkRlbnNlPC9MYWJlbD48L0J1dHRvbj5cbiAgICA8QnV0dG9uIGNvbG9yPVwic2Vjb25kYXJ5XCIgb246Y2xpY2s9eygpID0+IGNsaWNrZWQrK30gY2xhc3M9XCJteUNsYXNzXCI+PExhYmVsPldpdGggYSBDbGFzczwvTGFiZWw+PC9CdXR0b24+XG4gIDwvZGl2PlxuXG4gIDxkaXY+XG4gICAgPEJ1dHRvbiBjb2xvcj1cInNlY29uZGFyeVwiIG9uOmNsaWNrPXsoKSA9PiBjbGlja2VkKyt9PjxJY29uIGNsYXNzPVwibWF0ZXJpYWwtaWNvbnNcIj5mYXZvcml0ZTwvSWNvbj48TGFiZWw+SWNvbjwvTGFiZWw+PC9CdXR0b24+XG4gICAgPEJ1dHRvbiBjb2xvcj1cInNlY29uZGFyeVwiIG9uOmNsaWNrPXsoKSA9PiBjbGlja2VkKyt9PjxMYWJlbD5UcmFpbGluZyBJY29uPC9MYWJlbD48SWNvbiBjbGFzcz1cIm1hdGVyaWFsLWljb25zXCI+ZmF2b3JpdGU8L0ljb24+PC9CdXR0b24+XG4gIDwvZGl2PlxuXG4gIDxkaXY+XG4gICAgQnV0dG9uIGdyb3VwczogPGJyIC8+XG4gICAgPEdyb3VwPlxuICAgICAgPEJ1dHRvbiBvbjpjbGljaz17KCkgPT4gY2xpY2tlZCsrfT48TGFiZWw+T25lPC9MYWJlbD48L0J1dHRvbj5cbiAgICAgIDxCdXR0b24gb246Y2xpY2s9eygpID0+IGNsaWNrZWQrK30+PExhYmVsPlR3bzwvTGFiZWw+PC9CdXR0b24+XG4gICAgICA8QnV0dG9uIG9uOmNsaWNrPXsoKSA9PiBjbGlja2VkKyt9PjxMYWJlbD5UaHJlZTwvTGFiZWw+PC9CdXR0b24+XG4gICAgPC9Hcm91cD5cbiAgICA8R3JvdXAgdmFyaWFudD1cInJhaXNlZFwiPlxuICAgICAgPEJ1dHRvbiBvbjpjbGljaz17KCkgPT4gY2xpY2tlZCsrfSB2YXJpYW50PVwicmFpc2VkXCI+PExhYmVsPk9uZTwvTGFiZWw+PC9CdXR0b24+XG4gICAgICA8QnV0dG9uIG9uOmNsaWNrPXsoKSA9PiBjbGlja2VkKyt9IHZhcmlhbnQ9XCJyYWlzZWRcIj48TGFiZWw+VHdvPC9MYWJlbD48L0J1dHRvbj5cbiAgICAgIDxCdXR0b24gb246Y2xpY2s9eygpID0+IGNsaWNrZWQrK30gdmFyaWFudD1cInJhaXNlZFwiPjxMYWJlbD5UaHJlZTwvTGFiZWw+PC9CdXR0b24+XG4gICAgPC9Hcm91cD5cbiAgICA8R3JvdXAgdmFyaWFudD1cInVuZWxldmF0ZWRcIj5cbiAgICAgIDxCdXR0b24gb246Y2xpY2s9eygpID0+IGNsaWNrZWQrK30gdmFyaWFudD1cInVuZWxldmF0ZWRcIj48TGFiZWw+T25lPC9MYWJlbD48L0J1dHRvbj5cbiAgICAgIDxCdXR0b24gb246Y2xpY2s9eygpID0+IGNsaWNrZWQrK30gdmFyaWFudD1cInVuZWxldmF0ZWRcIj48TGFiZWw+VHdvPC9MYWJlbD48L0J1dHRvbj5cbiAgICAgIDxCdXR0b24gb246Y2xpY2s9eygpID0+IGNsaWNrZWQrK30gdmFyaWFudD1cInVuZWxldmF0ZWRcIj48TGFiZWw+VGhyZWU8L0xhYmVsPjwvQnV0dG9uPlxuICAgIDwvR3JvdXA+XG4gICAgPEdyb3VwIHZhcmlhbnQ9XCJvdXRsaW5lZFwiPlxuICAgICAgPEJ1dHRvbiBvbjpjbGljaz17KCkgPT4gY2xpY2tlZCsrfSB2YXJpYW50PVwib3V0bGluZWRcIj48TGFiZWw+T25lPC9MYWJlbD48L0J1dHRvbj5cbiAgICAgIDxCdXR0b24gb246Y2xpY2s9eygpID0+IGNsaWNrZWQrK30gdmFyaWFudD1cIm91dGxpbmVkXCI+PExhYmVsPlR3bzwvTGFiZWw+PC9CdXR0b24+XG4gICAgICA8QnV0dG9uIG9uOmNsaWNrPXsoKSA9PiBjbGlja2VkKyt9IHZhcmlhbnQ9XCJvdXRsaW5lZFwiPjxMYWJlbD5UaHJlZTwvTGFiZWw+PC9CdXR0b24+XG4gICAgPC9Hcm91cD5cblxuICAgIDxiciAvPiA8YnIvPlxuXG4gICAgPEdyb3VwIHZhcmlhbnQ9XCJvdXRsaW5lZFwiIHN0eWxlPVwiZGlzcGxheTogZmxleDtcIj5cbiAgICAgIDxCdXR0b24gb246Y2xpY2s9eygpID0+IGNsaWNrZWQrK30gdmFyaWFudD1cInVuZWxldmF0ZWRcIiBjb2xvcj1cInByaW1hcnlcIiBzdHlsZT1cImZsZXgtZ3JvdzogMztcIj48TGFiZWw+UHJpbWFyeTwvTGFiZWw+PC9CdXR0b24+XG4gICAgICA8QnV0dG9uIG9uOmNsaWNrPXsoKSA9PiBjbGlja2VkKyt9IHZhcmlhbnQ9XCJ1bmVsZXZhdGVkXCIgY29sb3I9XCJzZWNvbmRhcnlcIiBzdHlsZT1cImZsZXgtZ3JvdzogMTtcIj48TGFiZWw+U2Vjb25kYXJ5PC9MYWJlbD48L0J1dHRvbj5cbiAgICAgIDxCdXR0b24gb246Y2xpY2s9eygpID0+IGNsaWNrZWQrK30gdmFyaWFudD1cInVuZWxldmF0ZWRcIiBjb2xvcj1cInNlY29uZGFyeVwiIHN0eWxlPVwiZmxleC1ncm93OiAxO1wiPjxMYWJlbD5TZWNvbmRhcnk8L0xhYmVsPjwvQnV0dG9uPlxuICAgIDwvR3JvdXA+XG4gIDwvZGl2PlxuXG4gIDxkaXY+XG4gICAgU3BsaXQgYnV0dG9ucyB1c2luZyBhIGJ1dHRvbiBncm91cDogPGJyIC8+XG4gICAgPEdyb3VwIHZhcmlhbnQ9XCJyYWlzZWRcIj5cbiAgICAgIDxCdXR0b24gb246Y2xpY2s9eygpID0+IGNsaWNrZWQrK30gdmFyaWFudD1cInJhaXNlZFwiPjxMYWJlbD5EbyB0aGUgdGhpbmc8L0xhYmVsPjwvQnV0dG9uPlxuICAgICAgPGRpdiB1c2U6R3JvdXBJdGVtPlxuICAgICAgICA8QnV0dG9uIG9uOmNsaWNrPXsoKSA9PiBtZW51LnNldE9wZW4odHJ1ZSl9IHZhcmlhbnQ9XCJyYWlzZWRcIiBzdHlsZT1cInBhZGRpbmc6IDA7IG1pbi13aWR0aDogMzZweDtcIj5cbiAgICAgICAgICA8SWNvbiBjbGFzcz1cIm1hdGVyaWFsLWljb25zXCIgc3R5bGU9XCJtYXJnaW46IDA7XCI+YXJyb3dfZHJvcF9kb3duPC9JY29uPlxuICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgPE1lbnUgYmluZDp0aGlzPXttZW51fSBhbmNob3JDb3JuZXI9XCJUT1BfTEVGVFwiPlxuICAgICAgICAgIDxMaXN0PlxuICAgICAgICAgICAgPEl0ZW0gb246U01VSTphY3Rpb249eygpID0+IGNsaWNrZWQrK30+PFRleHQ+VGhpbmcgMTwvVGV4dD48L0l0ZW0+XG4gICAgICAgICAgICA8SXRlbSBvbjpTTVVJOmFjdGlvbj17KCkgPT4gY2xpY2tlZCsrfT48VGV4dD5UaGluZyAyPC9UZXh0PjwvSXRlbT5cbiAgICAgICAgICAgIDxTZXBhcmF0b3IgLz5cbiAgICAgICAgICAgIDxJdGVtIG9uOlNNVUk6YWN0aW9uPXsoKSA9PiBjbGlja2VkKyt9PjxUZXh0PlRoaW5nIDM8L1RleHQ+PC9JdGVtPlxuICAgICAgICAgIDwvTGlzdD5cbiAgICAgICAgPC9NZW51PlxuICAgICAgPC9kaXY+XG4gICAgPC9Hcm91cD5cbiAgICA8R3JvdXAgdmFyaWFudD1cIm91dGxpbmVkXCI+XG4gICAgICA8QnV0dG9uIG9uOmNsaWNrPXsoKSA9PiBjbGlja2VkKyt9IHZhcmlhbnQ9XCJvdXRsaW5lZFwiPjxMYWJlbD5EbyB0aGUgdGhpbmc8L0xhYmVsPjwvQnV0dG9uPlxuICAgICAgPGRpdiB1c2U6R3JvdXBJdGVtPlxuICAgICAgICA8QnV0dG9uIG9uOmNsaWNrPXsoKSA9PiBtZW51Mi5zZXRPcGVuKHRydWUpfSB2YXJpYW50PVwib3V0bGluZWRcIiBzdHlsZT1cInBhZGRpbmc6IDA7IG1pbi13aWR0aDogMzZweDtcIj5cbiAgICAgICAgICA8SWNvbiBjbGFzcz1cIm1hdGVyaWFsLWljb25zXCIgc3R5bGU9XCJtYXJnaW46IDA7XCI+YXJyb3dfZHJvcF9kb3duPC9JY29uPlxuICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgPE1lbnUgYmluZDp0aGlzPXttZW51Mn0gYW5jaG9yQ29ybmVyPVwiVE9QX0xFRlRcIj5cbiAgICAgICAgICA8TGlzdD5cbiAgICAgICAgICAgIDxJdGVtIG9uOlNNVUk6YWN0aW9uPXsoKSA9PiBjbGlja2VkKyt9PjxUZXh0PlRoaW5nIDE8L1RleHQ+PC9JdGVtPlxuICAgICAgICAgICAgPEl0ZW0gb246U01VSTphY3Rpb249eygpID0+IGNsaWNrZWQrK30+PFRleHQ+VGhpbmcgMjwvVGV4dD48L0l0ZW0+XG4gICAgICAgICAgICA8U2VwYXJhdG9yIC8+XG4gICAgICAgICAgICA8SXRlbSBvbjpTTVVJOmFjdGlvbj17KCkgPT4gY2xpY2tlZCsrfT48VGV4dD5UaGluZyAzPC9UZXh0PjwvSXRlbT5cbiAgICAgICAgICA8L0xpc3Q+XG4gICAgICAgIDwvTWVudT5cbiAgICAgIDwvZGl2PlxuICAgIDwvR3JvdXA+XG4gIDwvZGl2PlxuXG4gIDxwcmUgY2xhc3M9XCJzdGF0dXNcIj5DbGlja2VkOiB7Y2xpY2tlZH08L3ByZT5cbjwvc2VjdGlvbj5cblxuPHNjcmlwdD5cbiAgaW1wb3J0IEJ1dHRvbiwge0dyb3VwLCBHcm91cEl0ZW0sIExhYmVsLCBJY29ufSBmcm9tICdAc211aS9idXR0b24nO1xuICBpbXBvcnQgTWVudSBmcm9tICdAc211aS9tZW51JztcbiAgaW1wb3J0IExpc3QsIHtJdGVtLCBTZXBhcmF0b3IsIFRleHR9IGZyb20gJ0BzbXVpL2xpc3QnO1xuXG4gIGxldCBjbGlja2VkID0gMDtcbiAgbGV0IG1lbnU7XG4gIGxldCBtZW51Mjtcbjwvc2NyaXB0PlxuXG48c3R5bGU+XG4gICogOmdsb2JhbCgubXlDbGFzcykge1xuICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lICFpbXBvcnRhbnQ7XG4gIH1cblxuICAqIDpnbG9iYWwoLm1kYy1idXR0b24sIC5zbXVpLWJ1dHRvbl9fZ3JvdXApIHtcbiAgICBtYXJnaW4tYm90dG9tOiAuNGVtO1xuICB9XG5cbiAgKiA6Z2xvYmFsKC5zbXVpLWJ1dHRvbl9fZ3JvdXAgLm1kYy1idXR0b24pIHtcbiAgICBtYXJnaW4tYm90dG9tOiAwO1xuICB9XG48L3N0eWxlPiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUEwSEUsZUFBQyxDQUFDLEFBQVEsUUFBUSxBQUFFLENBQUMsQUFDbkIsZUFBZSxDQUFFLFNBQVMsQ0FBQyxVQUFVLEFBQ3ZDLENBQUMsQUFFRCxlQUFDLENBQUMsQUFBUSxnQ0FBZ0MsQUFBRSxDQUFDLEFBQzNDLGFBQWEsQ0FBRSxJQUFJLEFBQ3JCLENBQUMsQUFFRCxlQUFDLENBQUMsQUFBUSwrQkFBK0IsQUFBRSxDQUFDLEFBQzFDLGFBQWEsQ0FBRSxDQUFDLEFBQ2xCLENBQUMifQ== */";
  append_dev(document.head, style);
} // (9:39) <Label>


function create_default_slot_104(ctx) {
  var t;
  var block = {
    c: function create() {
      t = text("Default");
    },
    l: function claim(nodes) {
      t = claim_text(nodes, "Default");
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
    id: create_default_slot_104.name,
    type: "slot",
    source: "(9:39) <Label>",
    ctx: ctx
  });
  return block;
} // (9:4) <Button on:click={() => clicked++}>


function create_default_slot_103(ctx) {
  var current;
  var label = new Label({
    props: {
      $$slots: {
        default: [create_default_slot_104]
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
    id: create_default_slot_103.name,
    type: "slot",
    source: "(9:4) <Button on:click={() => clicked++}>",
    ctx: ctx
  });
  return block;
} // (10:48) <Label>


function create_default_slot_102(ctx) {
  var t;
  var block = {
    c: function create() {
      t = text("Disabled");
    },
    l: function claim(nodes) {
      t = claim_text(nodes, "Disabled");
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
    id: create_default_slot_102.name,
    type: "slot",
    source: "(10:48) <Label>",
    ctx: ctx
  });
  return block;
} // (10:4) <Button on:click={() => clicked++} disabled>


function create_default_slot_101(ctx) {
  var current;
  var label = new Label({
    props: {
      $$slots: {
        default: [create_default_slot_102]
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
    id: create_default_slot_101.name,
    type: "slot",
    source: "(10:4) <Button on:click={() => clicked++} disabled>",
    ctx: ctx
  });
  return block;
} // (11:54) <Label>


function create_default_slot_100(ctx) {
  var t;
  var block = {
    c: function create() {
      t = text("No Ripple");
    },
    l: function claim(nodes) {
      t = claim_text(nodes, "No Ripple");
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
    id: create_default_slot_100.name,
    type: "slot",
    source: "(11:54) <Label>",
    ctx: ctx
  });
  return block;
} // (11:4) <Button on:click={() => clicked++} ripple={false}>


function create_default_slot_99(ctx) {
  var current;
  var label = new Label({
    props: {
      $$slots: {
        default: [create_default_slot_100]
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
    id: create_default_slot_99.name,
    type: "slot",
    source: "(11:4) <Button on:click={() => clicked++} ripple={false}>",
    ctx: ctx
  });
  return block;
} // (12:56) <Label>


function create_default_slot_98(ctx) {
  var t;
  var block = {
    c: function create() {
      t = text("Raised");
    },
    l: function claim(nodes) {
      t = claim_text(nodes, "Raised");
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
    id: create_default_slot_98.name,
    type: "slot",
    source: "(12:56) <Label>",
    ctx: ctx
  });
  return block;
} // (12:4) <Button on:click={() => clicked++} variant="raised">


function create_default_slot_97(ctx) {
  var current;
  var label = new Label({
    props: {
      $$slots: {
        default: [create_default_slot_98]
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
    id: create_default_slot_97.name,
    type: "slot",
    source: "(12:4) <Button on:click={() => clicked++} variant=\"raised\">",
    ctx: ctx
  });
  return block;
} // (13:60) <Label>


function create_default_slot_96(ctx) {
  var t;
  var block = {
    c: function create() {
      t = text("Unelevated");
    },
    l: function claim(nodes) {
      t = claim_text(nodes, "Unelevated");
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
    id: create_default_slot_96.name,
    type: "slot",
    source: "(13:60) <Label>",
    ctx: ctx
  });
  return block;
} // (13:4) <Button on:click={() => clicked++} variant="unelevated">


function create_default_slot_95(ctx) {
  var current;
  var label = new Label({
    props: {
      $$slots: {
        default: [create_default_slot_96]
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
    id: create_default_slot_95.name,
    type: "slot",
    source: "(13:4) <Button on:click={() => clicked++} variant=\"unelevated\">",
    ctx: ctx
  });
  return block;
} // (14:58) <Label>


function create_default_slot_94(ctx) {
  var t;
  var block = {
    c: function create() {
      t = text("Outlined");
    },
    l: function claim(nodes) {
      t = claim_text(nodes, "Outlined");
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
    id: create_default_slot_94.name,
    type: "slot",
    source: "(14:58) <Label>",
    ctx: ctx
  });
  return block;
} // (14:4) <Button on:click={() => clicked++} variant="outlined">


function create_default_slot_93(ctx) {
  var current;
  var label = new Label({
    props: {
      $$slots: {
        default: [create_default_slot_94]
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
    id: create_default_slot_93.name,
    type: "slot",
    source: "(14:4) <Button on:click={() => clicked++} variant=\"outlined\">",
    ctx: ctx
  });
  return block;
} // (15:45) <Label>


function create_default_slot_92(ctx) {
  var t;
  var block = {
    c: function create() {
      t = text("Dense");
    },
    l: function claim(nodes) {
      t = claim_text(nodes, "Dense");
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
    id: create_default_slot_92.name,
    type: "slot",
    source: "(15:45) <Label>",
    ctx: ctx
  });
  return block;
} // (15:4) <Button on:click={() => clicked++} dense>


function create_default_slot_91(ctx) {
  var current;
  var label = new Label({
    props: {
      $$slots: {
        default: [create_default_slot_92]
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
    id: create_default_slot_91.name,
    type: "slot",
    source: "(15:4) <Button on:click={() => clicked++} dense>",
    ctx: ctx
  });
  return block;
} // (16:55) <Label>


function create_default_slot_90(ctx) {
  var t;
  var block = {
    c: function create() {
      t = text("With a Class");
    },
    l: function claim(nodes) {
      t = claim_text(nodes, "With a Class");
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
    id: create_default_slot_90.name,
    type: "slot",
    source: "(16:55) <Label>",
    ctx: ctx
  });
  return block;
} // (16:4) <Button on:click={() => clicked++} class="myClass">


function create_default_slot_89(ctx) {
  var current;
  var label = new Label({
    props: {
      $$slots: {
        default: [create_default_slot_90]
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
    id: create_default_slot_89.name,
    type: "slot",
    source: "(16:4) <Button on:click={() => clicked++} class=\"myClass\">",
    ctx: ctx
  });
  return block;
} // (20:39) <Icon class="material-icons">


function create_default_slot_88(ctx) {
  var t;
  var block = {
    c: function create() {
      t = text("favorite");
    },
    l: function claim(nodes) {
      t = claim_text(nodes, "favorite");
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
    id: create_default_slot_88.name,
    type: "slot",
    source: "(20:39) <Icon class=\"material-icons\">",
    ctx: ctx
  });
  return block;
} // (20:83) <Label>


function create_default_slot_87(ctx) {
  var t;
  var block = {
    c: function create() {
      t = text("Icon");
    },
    l: function claim(nodes) {
      t = claim_text(nodes, "Icon");
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
    id: create_default_slot_87.name,
    type: "slot",
    source: "(20:83) <Label>",
    ctx: ctx
  });
  return block;
} // (20:4) <Button on:click={() => clicked++}>


function create_default_slot_86(ctx) {
  var current;
  var icon = new Icon({
    props: {
      class: "material-icons",
      $$slots: {
        default: [create_default_slot_88]
      },
      $$scope: {
        ctx: ctx
      }
    },
    $$inline: true
  });
  var label = new Label({
    props: {
      $$slots: {
        default: [create_default_slot_87]
      },
      $$scope: {
        ctx: ctx
      }
    },
    $$inline: true
  });
  var block = {
    c: function create() {
      icon.$$.fragment.c();
      label.$$.fragment.c();
    },
    l: function claim(nodes) {
      icon.$$.fragment.l(nodes);
      label.$$.fragment.l(nodes);
    },
    m: function mount(target, anchor) {
      mount_component(icon, target, anchor);
      mount_component(label, target, anchor);
      current = true;
    },
    p: function update(changed, ctx) {
      var icon_changes = {};
      if (changed.$$scope) icon_changes.$$scope = {
        changed: changed,
        ctx: ctx
      };
      icon.$set(icon_changes);
      var label_changes = {};
      if (changed.$$scope) label_changes.$$scope = {
        changed: changed,
        ctx: ctx
      };
      label.$set(label_changes);
    },
    i: function intro(local) {
      if (current) return;
      transition_in(icon.$$.fragment, local);
      transition_in(label.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(icon.$$.fragment, local);
      transition_out(label.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      destroy_component(icon, detaching);
      destroy_component(label, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_default_slot_86.name,
    type: "slot",
    source: "(20:4) <Button on:click={() => clicked++}>",
    ctx: ctx
  });
  return block;
} // (21:39) <Label>


function create_default_slot_85(ctx) {
  var t;
  var block = {
    c: function create() {
      t = text("Trailing Icon");
    },
    l: function claim(nodes) {
      t = claim_text(nodes, "Trailing Icon");
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
    id: create_default_slot_85.name,
    type: "slot",
    source: "(21:39) <Label>",
    ctx: ctx
  });
  return block;
} // (21:67) <Icon class="material-icons">


function create_default_slot_84(ctx) {
  var t;
  var block = {
    c: function create() {
      t = text("favorite");
    },
    l: function claim(nodes) {
      t = claim_text(nodes, "favorite");
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
    id: create_default_slot_84.name,
    type: "slot",
    source: "(21:67) <Icon class=\"material-icons\">",
    ctx: ctx
  });
  return block;
} // (21:4) <Button on:click={() => clicked++}>


function create_default_slot_83(ctx) {
  var current;
  var label = new Label({
    props: {
      $$slots: {
        default: [create_default_slot_85]
      },
      $$scope: {
        ctx: ctx
      }
    },
    $$inline: true
  });
  var icon = new Icon({
    props: {
      class: "material-icons",
      $$slots: {
        default: [create_default_slot_84]
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
      icon.$$.fragment.c();
    },
    l: function claim(nodes) {
      label.$$.fragment.l(nodes);
      icon.$$.fragment.l(nodes);
    },
    m: function mount(target, anchor) {
      mount_component(label, target, anchor);
      mount_component(icon, target, anchor);
      current = true;
    },
    p: function update(changed, ctx) {
      var label_changes = {};
      if (changed.$$scope) label_changes.$$scope = {
        changed: changed,
        ctx: ctx
      };
      label.$set(label_changes);
      var icon_changes = {};
      if (changed.$$scope) icon_changes.$$scope = {
        changed: changed,
        ctx: ctx
      };
      icon.$set(icon_changes);
    },
    i: function intro(local) {
      if (current) return;
      transition_in(label.$$.fragment, local);
      transition_in(icon.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(label.$$.fragment, local);
      transition_out(icon.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      destroy_component(label, detaching);
      destroy_component(icon, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_default_slot_83.name,
    type: "slot",
    source: "(21:4) <Button on:click={() => clicked++}>",
    ctx: ctx
  });
  return block;
} // (26:57) <Label>


function create_default_slot_82(ctx) {
  var t;
  var block = {
    c: function create() {
      t = text("Default");
    },
    l: function claim(nodes) {
      t = claim_text(nodes, "Default");
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
    id: create_default_slot_82.name,
    type: "slot",
    source: "(26:57) <Label>",
    ctx: ctx
  });
  return block;
} // (26:4) <Button color="secondary" on:click={() => clicked++}>


function create_default_slot_81(ctx) {
  var current;
  var label = new Label({
    props: {
      $$slots: {
        default: [create_default_slot_82]
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
    id: create_default_slot_81.name,
    type: "slot",
    source: "(26:4) <Button color=\"secondary\" on:click={() => clicked++}>",
    ctx: ctx
  });
  return block;
} // (27:66) <Label>


function create_default_slot_80(ctx) {
  var t;
  var block = {
    c: function create() {
      t = text("Disabled");
    },
    l: function claim(nodes) {
      t = claim_text(nodes, "Disabled");
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
    id: create_default_slot_80.name,
    type: "slot",
    source: "(27:66) <Label>",
    ctx: ctx
  });
  return block;
} // (27:4) <Button color="secondary" on:click={() => clicked++} disabled>


function create_default_slot_79(ctx) {
  var current;
  var label = new Label({
    props: {
      $$slots: {
        default: [create_default_slot_80]
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
    id: create_default_slot_79.name,
    type: "slot",
    source: "(27:4) <Button color=\"secondary\" on:click={() => clicked++} disabled>",
    ctx: ctx
  });
  return block;
} // (28:72) <Label>


function create_default_slot_78(ctx) {
  var t;
  var block = {
    c: function create() {
      t = text("No Ripple");
    },
    l: function claim(nodes) {
      t = claim_text(nodes, "No Ripple");
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
    id: create_default_slot_78.name,
    type: "slot",
    source: "(28:72) <Label>",
    ctx: ctx
  });
  return block;
} // (28:4) <Button color="secondary" on:click={() => clicked++} ripple={false}>


function create_default_slot_77(ctx) {
  var current;
  var label = new Label({
    props: {
      $$slots: {
        default: [create_default_slot_78]
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
    id: create_default_slot_77.name,
    type: "slot",
    source: "(28:4) <Button color=\"secondary\" on:click={() => clicked++} ripple={false}>",
    ctx: ctx
  });
  return block;
} // (29:74) <Label>


function create_default_slot_76(ctx) {
  var t;
  var block = {
    c: function create() {
      t = text("Raised");
    },
    l: function claim(nodes) {
      t = claim_text(nodes, "Raised");
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
    id: create_default_slot_76.name,
    type: "slot",
    source: "(29:74) <Label>",
    ctx: ctx
  });
  return block;
} // (29:4) <Button color="secondary" on:click={() => clicked++} variant="raised">


function create_default_slot_75(ctx) {
  var current;
  var label = new Label({
    props: {
      $$slots: {
        default: [create_default_slot_76]
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
    id: create_default_slot_75.name,
    type: "slot",
    source: "(29:4) <Button color=\"secondary\" on:click={() => clicked++} variant=\"raised\">",
    ctx: ctx
  });
  return block;
} // (30:78) <Label>


function create_default_slot_74(ctx) {
  var t;
  var block = {
    c: function create() {
      t = text("Unelevated");
    },
    l: function claim(nodes) {
      t = claim_text(nodes, "Unelevated");
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
    id: create_default_slot_74.name,
    type: "slot",
    source: "(30:78) <Label>",
    ctx: ctx
  });
  return block;
} // (30:4) <Button color="secondary" on:click={() => clicked++} variant="unelevated">


function create_default_slot_73(ctx) {
  var current;
  var label = new Label({
    props: {
      $$slots: {
        default: [create_default_slot_74]
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
    id: create_default_slot_73.name,
    type: "slot",
    source: "(30:4) <Button color=\"secondary\" on:click={() => clicked++} variant=\"unelevated\">",
    ctx: ctx
  });
  return block;
} // (31:76) <Label>


function create_default_slot_72(ctx) {
  var t;
  var block = {
    c: function create() {
      t = text("Outlined");
    },
    l: function claim(nodes) {
      t = claim_text(nodes, "Outlined");
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
    id: create_default_slot_72.name,
    type: "slot",
    source: "(31:76) <Label>",
    ctx: ctx
  });
  return block;
} // (31:4) <Button color="secondary" on:click={() => clicked++} variant="outlined">


function create_default_slot_71(ctx) {
  var current;
  var label = new Label({
    props: {
      $$slots: {
        default: [create_default_slot_72]
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
    id: create_default_slot_71.name,
    type: "slot",
    source: "(31:4) <Button color=\"secondary\" on:click={() => clicked++} variant=\"outlined\">",
    ctx: ctx
  });
  return block;
} // (32:63) <Label>


function create_default_slot_70(ctx) {
  var t;
  var block = {
    c: function create() {
      t = text("Dense");
    },
    l: function claim(nodes) {
      t = claim_text(nodes, "Dense");
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
    id: create_default_slot_70.name,
    type: "slot",
    source: "(32:63) <Label>",
    ctx: ctx
  });
  return block;
} // (32:4) <Button color="secondary" on:click={() => clicked++} dense>


function create_default_slot_69(ctx) {
  var current;
  var label = new Label({
    props: {
      $$slots: {
        default: [create_default_slot_70]
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
    id: create_default_slot_69.name,
    type: "slot",
    source: "(32:4) <Button color=\"secondary\" on:click={() => clicked++} dense>",
    ctx: ctx
  });
  return block;
} // (33:73) <Label>


function create_default_slot_68(ctx) {
  var t;
  var block = {
    c: function create() {
      t = text("With a Class");
    },
    l: function claim(nodes) {
      t = claim_text(nodes, "With a Class");
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
    id: create_default_slot_68.name,
    type: "slot",
    source: "(33:73) <Label>",
    ctx: ctx
  });
  return block;
} // (33:4) <Button color="secondary" on:click={() => clicked++} class="myClass">


function create_default_slot_67(ctx) {
  var current;
  var label = new Label({
    props: {
      $$slots: {
        default: [create_default_slot_68]
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
    id: create_default_slot_67.name,
    type: "slot",
    source: "(33:4) <Button color=\"secondary\" on:click={() => clicked++} class=\"myClass\">",
    ctx: ctx
  });
  return block;
} // (37:57) <Icon class="material-icons">


function create_default_slot_66(ctx) {
  var t;
  var block = {
    c: function create() {
      t = text("favorite");
    },
    l: function claim(nodes) {
      t = claim_text(nodes, "favorite");
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
    id: create_default_slot_66.name,
    type: "slot",
    source: "(37:57) <Icon class=\"material-icons\">",
    ctx: ctx
  });
  return block;
} // (37:101) <Label>


function create_default_slot_65(ctx) {
  var t;
  var block = {
    c: function create() {
      t = text("Icon");
    },
    l: function claim(nodes) {
      t = claim_text(nodes, "Icon");
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
    id: create_default_slot_65.name,
    type: "slot",
    source: "(37:101) <Label>",
    ctx: ctx
  });
  return block;
} // (37:4) <Button color="secondary" on:click={() => clicked++}>


function create_default_slot_64(ctx) {
  var current;
  var icon = new Icon({
    props: {
      class: "material-icons",
      $$slots: {
        default: [create_default_slot_66]
      },
      $$scope: {
        ctx: ctx
      }
    },
    $$inline: true
  });
  var label = new Label({
    props: {
      $$slots: {
        default: [create_default_slot_65]
      },
      $$scope: {
        ctx: ctx
      }
    },
    $$inline: true
  });
  var block = {
    c: function create() {
      icon.$$.fragment.c();
      label.$$.fragment.c();
    },
    l: function claim(nodes) {
      icon.$$.fragment.l(nodes);
      label.$$.fragment.l(nodes);
    },
    m: function mount(target, anchor) {
      mount_component(icon, target, anchor);
      mount_component(label, target, anchor);
      current = true;
    },
    p: function update(changed, ctx) {
      var icon_changes = {};
      if (changed.$$scope) icon_changes.$$scope = {
        changed: changed,
        ctx: ctx
      };
      icon.$set(icon_changes);
      var label_changes = {};
      if (changed.$$scope) label_changes.$$scope = {
        changed: changed,
        ctx: ctx
      };
      label.$set(label_changes);
    },
    i: function intro(local) {
      if (current) return;
      transition_in(icon.$$.fragment, local);
      transition_in(label.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(icon.$$.fragment, local);
      transition_out(label.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      destroy_component(icon, detaching);
      destroy_component(label, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_default_slot_64.name,
    type: "slot",
    source: "(37:4) <Button color=\"secondary\" on:click={() => clicked++}>",
    ctx: ctx
  });
  return block;
} // (38:57) <Label>


function create_default_slot_63(ctx) {
  var t;
  var block = {
    c: function create() {
      t = text("Trailing Icon");
    },
    l: function claim(nodes) {
      t = claim_text(nodes, "Trailing Icon");
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
    id: create_default_slot_63.name,
    type: "slot",
    source: "(38:57) <Label>",
    ctx: ctx
  });
  return block;
} // (38:85) <Icon class="material-icons">


function create_default_slot_62(ctx) {
  var t;
  var block = {
    c: function create() {
      t = text("favorite");
    },
    l: function claim(nodes) {
      t = claim_text(nodes, "favorite");
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
    id: create_default_slot_62.name,
    type: "slot",
    source: "(38:85) <Icon class=\"material-icons\">",
    ctx: ctx
  });
  return block;
} // (38:4) <Button color="secondary" on:click={() => clicked++}>


function create_default_slot_61(ctx) {
  var current;
  var label = new Label({
    props: {
      $$slots: {
        default: [create_default_slot_63]
      },
      $$scope: {
        ctx: ctx
      }
    },
    $$inline: true
  });
  var icon = new Icon({
    props: {
      class: "material-icons",
      $$slots: {
        default: [create_default_slot_62]
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
      icon.$$.fragment.c();
    },
    l: function claim(nodes) {
      label.$$.fragment.l(nodes);
      icon.$$.fragment.l(nodes);
    },
    m: function mount(target, anchor) {
      mount_component(label, target, anchor);
      mount_component(icon, target, anchor);
      current = true;
    },
    p: function update(changed, ctx) {
      var label_changes = {};
      if (changed.$$scope) label_changes.$$scope = {
        changed: changed,
        ctx: ctx
      };
      label.$set(label_changes);
      var icon_changes = {};
      if (changed.$$scope) icon_changes.$$scope = {
        changed: changed,
        ctx: ctx
      };
      icon.$set(icon_changes);
    },
    i: function intro(local) {
      if (current) return;
      transition_in(label.$$.fragment, local);
      transition_in(icon.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(label.$$.fragment, local);
      transition_out(icon.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      destroy_component(label, detaching);
      destroy_component(icon, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_default_slot_61.name,
    type: "slot",
    source: "(38:4) <Button color=\"secondary\" on:click={() => clicked++}>",
    ctx: ctx
  });
  return block;
} // (44:41) <Label>


function create_default_slot_60(ctx) {
  var t;
  var block = {
    c: function create() {
      t = text("One");
    },
    l: function claim(nodes) {
      t = claim_text(nodes, "One");
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
    id: create_default_slot_60.name,
    type: "slot",
    source: "(44:41) <Label>",
    ctx: ctx
  });
  return block;
} // (44:6) <Button on:click={() => clicked++}>


function create_default_slot_59(ctx) {
  var current;
  var label = new Label({
    props: {
      $$slots: {
        default: [create_default_slot_60]
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
    id: create_default_slot_59.name,
    type: "slot",
    source: "(44:6) <Button on:click={() => clicked++}>",
    ctx: ctx
  });
  return block;
} // (45:41) <Label>


function create_default_slot_58(ctx) {
  var t;
  var block = {
    c: function create() {
      t = text("Two");
    },
    l: function claim(nodes) {
      t = claim_text(nodes, "Two");
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
    id: create_default_slot_58.name,
    type: "slot",
    source: "(45:41) <Label>",
    ctx: ctx
  });
  return block;
} // (45:6) <Button on:click={() => clicked++}>


function create_default_slot_57(ctx) {
  var current;
  var label = new Label({
    props: {
      $$slots: {
        default: [create_default_slot_58]
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
    id: create_default_slot_57.name,
    type: "slot",
    source: "(45:6) <Button on:click={() => clicked++}>",
    ctx: ctx
  });
  return block;
} // (46:41) <Label>


function create_default_slot_56(ctx) {
  var t;
  var block = {
    c: function create() {
      t = text("Three");
    },
    l: function claim(nodes) {
      t = claim_text(nodes, "Three");
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
    id: create_default_slot_56.name,
    type: "slot",
    source: "(46:41) <Label>",
    ctx: ctx
  });
  return block;
} // (46:6) <Button on:click={() => clicked++}>


function create_default_slot_55(ctx) {
  var current;
  var label = new Label({
    props: {
      $$slots: {
        default: [create_default_slot_56]
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
    id: create_default_slot_55.name,
    type: "slot",
    source: "(46:6) <Button on:click={() => clicked++}>",
    ctx: ctx
  });
  return block;
} // (43:4) <Group>


function create_default_slot_54(ctx) {
  var t0, t1, current;
  var button0 = new Button({
    props: {
      $$slots: {
        default: [create_default_slot_59]
      },
      $$scope: {
        ctx: ctx
      }
    },
    $$inline: true
  });
  button0.$on("click", ctx.click_handler_20);
  var button1 = new Button({
    props: {
      $$slots: {
        default: [create_default_slot_57]
      },
      $$scope: {
        ctx: ctx
      }
    },
    $$inline: true
  });
  button1.$on("click", ctx.click_handler_21);
  var button2 = new Button({
    props: {
      $$slots: {
        default: [create_default_slot_55]
      },
      $$scope: {
        ctx: ctx
      }
    },
    $$inline: true
  });
  button2.$on("click", ctx.click_handler_22);
  var block = {
    c: function create() {
      button0.$$.fragment.c();
      t0 = space();
      button1.$$.fragment.c();
      t1 = space();
      button2.$$.fragment.c();
    },
    l: function claim(nodes) {
      button0.$$.fragment.l(nodes);
      t0 = claim_space(nodes);
      button1.$$.fragment.l(nodes);
      t1 = claim_space(nodes);
      button2.$$.fragment.l(nodes);
    },
    m: function mount(target, anchor) {
      mount_component(button0, target, anchor);
      insert_dev(target, t0, anchor);
      mount_component(button1, target, anchor);
      insert_dev(target, t1, anchor);
      mount_component(button2, target, anchor);
      current = true;
    },
    p: function update(changed, ctx) {
      var button0_changes = {};
      if (changed.$$scope) button0_changes.$$scope = {
        changed: changed,
        ctx: ctx
      };
      button0.$set(button0_changes);
      var button1_changes = {};
      if (changed.$$scope) button1_changes.$$scope = {
        changed: changed,
        ctx: ctx
      };
      button1.$set(button1_changes);
      var button2_changes = {};
      if (changed.$$scope) button2_changes.$$scope = {
        changed: changed,
        ctx: ctx
      };
      button2.$set(button2_changes);
    },
    i: function intro(local) {
      if (current) return;
      transition_in(button0.$$.fragment, local);
      transition_in(button1.$$.fragment, local);
      transition_in(button2.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(button0.$$.fragment, local);
      transition_out(button1.$$.fragment, local);
      transition_out(button2.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      destroy_component(button0, detaching);

      if (detaching) {
        detach_dev(t0);
      }

      destroy_component(button1, detaching);

      if (detaching) {
        detach_dev(t1);
      }

      destroy_component(button2, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_default_slot_54.name,
    type: "slot",
    source: "(43:4) <Group>",
    ctx: ctx
  });
  return block;
} // (49:58) <Label>


function create_default_slot_53(ctx) {
  var t;
  var block = {
    c: function create() {
      t = text("One");
    },
    l: function claim(nodes) {
      t = claim_text(nodes, "One");
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
    id: create_default_slot_53.name,
    type: "slot",
    source: "(49:58) <Label>",
    ctx: ctx
  });
  return block;
} // (49:6) <Button on:click={() => clicked++} variant="raised">


function create_default_slot_52(ctx) {
  var current;
  var label = new Label({
    props: {
      $$slots: {
        default: [create_default_slot_53]
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
    id: create_default_slot_52.name,
    type: "slot",
    source: "(49:6) <Button on:click={() => clicked++} variant=\"raised\">",
    ctx: ctx
  });
  return block;
} // (50:58) <Label>


function create_default_slot_51(ctx) {
  var t;
  var block = {
    c: function create() {
      t = text("Two");
    },
    l: function claim(nodes) {
      t = claim_text(nodes, "Two");
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
    id: create_default_slot_51.name,
    type: "slot",
    source: "(50:58) <Label>",
    ctx: ctx
  });
  return block;
} // (50:6) <Button on:click={() => clicked++} variant="raised">


function create_default_slot_50(ctx) {
  var current;
  var label = new Label({
    props: {
      $$slots: {
        default: [create_default_slot_51]
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
    id: create_default_slot_50.name,
    type: "slot",
    source: "(50:6) <Button on:click={() => clicked++} variant=\"raised\">",
    ctx: ctx
  });
  return block;
} // (51:58) <Label>


function create_default_slot_49(ctx) {
  var t;
  var block = {
    c: function create() {
      t = text("Three");
    },
    l: function claim(nodes) {
      t = claim_text(nodes, "Three");
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
    id: create_default_slot_49.name,
    type: "slot",
    source: "(51:58) <Label>",
    ctx: ctx
  });
  return block;
} // (51:6) <Button on:click={() => clicked++} variant="raised">


function create_default_slot_48(ctx) {
  var current;
  var label = new Label({
    props: {
      $$slots: {
        default: [create_default_slot_49]
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
    id: create_default_slot_48.name,
    type: "slot",
    source: "(51:6) <Button on:click={() => clicked++} variant=\"raised\">",
    ctx: ctx
  });
  return block;
} // (48:4) <Group variant="raised">


function create_default_slot_47(ctx) {
  var t0, t1, current;
  var button0 = new Button({
    props: {
      variant: "raised",
      $$slots: {
        default: [create_default_slot_52]
      },
      $$scope: {
        ctx: ctx
      }
    },
    $$inline: true
  });
  button0.$on("click", ctx.click_handler_23);
  var button1 = new Button({
    props: {
      variant: "raised",
      $$slots: {
        default: [create_default_slot_50]
      },
      $$scope: {
        ctx: ctx
      }
    },
    $$inline: true
  });
  button1.$on("click", ctx.click_handler_24);
  var button2 = new Button({
    props: {
      variant: "raised",
      $$slots: {
        default: [create_default_slot_48]
      },
      $$scope: {
        ctx: ctx
      }
    },
    $$inline: true
  });
  button2.$on("click", ctx.click_handler_25);
  var block = {
    c: function create() {
      button0.$$.fragment.c();
      t0 = space();
      button1.$$.fragment.c();
      t1 = space();
      button2.$$.fragment.c();
    },
    l: function claim(nodes) {
      button0.$$.fragment.l(nodes);
      t0 = claim_space(nodes);
      button1.$$.fragment.l(nodes);
      t1 = claim_space(nodes);
      button2.$$.fragment.l(nodes);
    },
    m: function mount(target, anchor) {
      mount_component(button0, target, anchor);
      insert_dev(target, t0, anchor);
      mount_component(button1, target, anchor);
      insert_dev(target, t1, anchor);
      mount_component(button2, target, anchor);
      current = true;
    },
    p: function update(changed, ctx) {
      var button0_changes = {};
      if (changed.$$scope) button0_changes.$$scope = {
        changed: changed,
        ctx: ctx
      };
      button0.$set(button0_changes);
      var button1_changes = {};
      if (changed.$$scope) button1_changes.$$scope = {
        changed: changed,
        ctx: ctx
      };
      button1.$set(button1_changes);
      var button2_changes = {};
      if (changed.$$scope) button2_changes.$$scope = {
        changed: changed,
        ctx: ctx
      };
      button2.$set(button2_changes);
    },
    i: function intro(local) {
      if (current) return;
      transition_in(button0.$$.fragment, local);
      transition_in(button1.$$.fragment, local);
      transition_in(button2.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(button0.$$.fragment, local);
      transition_out(button1.$$.fragment, local);
      transition_out(button2.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      destroy_component(button0, detaching);

      if (detaching) {
        detach_dev(t0);
      }

      destroy_component(button1, detaching);

      if (detaching) {
        detach_dev(t1);
      }

      destroy_component(button2, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_default_slot_47.name,
    type: "slot",
    source: "(48:4) <Group variant=\"raised\">",
    ctx: ctx
  });
  return block;
} // (54:62) <Label>


function create_default_slot_46(ctx) {
  var t;
  var block = {
    c: function create() {
      t = text("One");
    },
    l: function claim(nodes) {
      t = claim_text(nodes, "One");
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
    id: create_default_slot_46.name,
    type: "slot",
    source: "(54:62) <Label>",
    ctx: ctx
  });
  return block;
} // (54:6) <Button on:click={() => clicked++} variant="unelevated">


function create_default_slot_45(ctx) {
  var current;
  var label = new Label({
    props: {
      $$slots: {
        default: [create_default_slot_46]
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
    id: create_default_slot_45.name,
    type: "slot",
    source: "(54:6) <Button on:click={() => clicked++} variant=\"unelevated\">",
    ctx: ctx
  });
  return block;
} // (55:62) <Label>


function create_default_slot_44(ctx) {
  var t;
  var block = {
    c: function create() {
      t = text("Two");
    },
    l: function claim(nodes) {
      t = claim_text(nodes, "Two");
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
    id: create_default_slot_44.name,
    type: "slot",
    source: "(55:62) <Label>",
    ctx: ctx
  });
  return block;
} // (55:6) <Button on:click={() => clicked++} variant="unelevated">


function create_default_slot_43(ctx) {
  var current;
  var label = new Label({
    props: {
      $$slots: {
        default: [create_default_slot_44]
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
    id: create_default_slot_43.name,
    type: "slot",
    source: "(55:6) <Button on:click={() => clicked++} variant=\"unelevated\">",
    ctx: ctx
  });
  return block;
} // (56:62) <Label>


function create_default_slot_42(ctx) {
  var t;
  var block = {
    c: function create() {
      t = text("Three");
    },
    l: function claim(nodes) {
      t = claim_text(nodes, "Three");
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
    id: create_default_slot_42.name,
    type: "slot",
    source: "(56:62) <Label>",
    ctx: ctx
  });
  return block;
} // (56:6) <Button on:click={() => clicked++} variant="unelevated">


function create_default_slot_41(ctx) {
  var current;
  var label = new Label({
    props: {
      $$slots: {
        default: [create_default_slot_42]
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
    id: create_default_slot_41.name,
    type: "slot",
    source: "(56:6) <Button on:click={() => clicked++} variant=\"unelevated\">",
    ctx: ctx
  });
  return block;
} // (53:4) <Group variant="unelevated">


function create_default_slot_40(ctx) {
  var t0, t1, current;
  var button0 = new Button({
    props: {
      variant: "unelevated",
      $$slots: {
        default: [create_default_slot_45]
      },
      $$scope: {
        ctx: ctx
      }
    },
    $$inline: true
  });
  button0.$on("click", ctx.click_handler_26);
  var button1 = new Button({
    props: {
      variant: "unelevated",
      $$slots: {
        default: [create_default_slot_43]
      },
      $$scope: {
        ctx: ctx
      }
    },
    $$inline: true
  });
  button1.$on("click", ctx.click_handler_27);
  var button2 = new Button({
    props: {
      variant: "unelevated",
      $$slots: {
        default: [create_default_slot_41]
      },
      $$scope: {
        ctx: ctx
      }
    },
    $$inline: true
  });
  button2.$on("click", ctx.click_handler_28);
  var block = {
    c: function create() {
      button0.$$.fragment.c();
      t0 = space();
      button1.$$.fragment.c();
      t1 = space();
      button2.$$.fragment.c();
    },
    l: function claim(nodes) {
      button0.$$.fragment.l(nodes);
      t0 = claim_space(nodes);
      button1.$$.fragment.l(nodes);
      t1 = claim_space(nodes);
      button2.$$.fragment.l(nodes);
    },
    m: function mount(target, anchor) {
      mount_component(button0, target, anchor);
      insert_dev(target, t0, anchor);
      mount_component(button1, target, anchor);
      insert_dev(target, t1, anchor);
      mount_component(button2, target, anchor);
      current = true;
    },
    p: function update(changed, ctx) {
      var button0_changes = {};
      if (changed.$$scope) button0_changes.$$scope = {
        changed: changed,
        ctx: ctx
      };
      button0.$set(button0_changes);
      var button1_changes = {};
      if (changed.$$scope) button1_changes.$$scope = {
        changed: changed,
        ctx: ctx
      };
      button1.$set(button1_changes);
      var button2_changes = {};
      if (changed.$$scope) button2_changes.$$scope = {
        changed: changed,
        ctx: ctx
      };
      button2.$set(button2_changes);
    },
    i: function intro(local) {
      if (current) return;
      transition_in(button0.$$.fragment, local);
      transition_in(button1.$$.fragment, local);
      transition_in(button2.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(button0.$$.fragment, local);
      transition_out(button1.$$.fragment, local);
      transition_out(button2.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      destroy_component(button0, detaching);

      if (detaching) {
        detach_dev(t0);
      }

      destroy_component(button1, detaching);

      if (detaching) {
        detach_dev(t1);
      }

      destroy_component(button2, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_default_slot_40.name,
    type: "slot",
    source: "(53:4) <Group variant=\"unelevated\">",
    ctx: ctx
  });
  return block;
} // (59:60) <Label>


function create_default_slot_39(ctx) {
  var t;
  var block = {
    c: function create() {
      t = text("One");
    },
    l: function claim(nodes) {
      t = claim_text(nodes, "One");
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
    id: create_default_slot_39.name,
    type: "slot",
    source: "(59:60) <Label>",
    ctx: ctx
  });
  return block;
} // (59:6) <Button on:click={() => clicked++} variant="outlined">


function create_default_slot_38(ctx) {
  var current;
  var label = new Label({
    props: {
      $$slots: {
        default: [create_default_slot_39]
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
    id: create_default_slot_38.name,
    type: "slot",
    source: "(59:6) <Button on:click={() => clicked++} variant=\"outlined\">",
    ctx: ctx
  });
  return block;
} // (60:60) <Label>


function create_default_slot_37(ctx) {
  var t;
  var block = {
    c: function create() {
      t = text("Two");
    },
    l: function claim(nodes) {
      t = claim_text(nodes, "Two");
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
    id: create_default_slot_37.name,
    type: "slot",
    source: "(60:60) <Label>",
    ctx: ctx
  });
  return block;
} // (60:6) <Button on:click={() => clicked++} variant="outlined">


function create_default_slot_36(ctx) {
  var current;
  var label = new Label({
    props: {
      $$slots: {
        default: [create_default_slot_37]
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
    id: create_default_slot_36.name,
    type: "slot",
    source: "(60:6) <Button on:click={() => clicked++} variant=\"outlined\">",
    ctx: ctx
  });
  return block;
} // (61:60) <Label>


function create_default_slot_35(ctx) {
  var t;
  var block = {
    c: function create() {
      t = text("Three");
    },
    l: function claim(nodes) {
      t = claim_text(nodes, "Three");
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
    id: create_default_slot_35.name,
    type: "slot",
    source: "(61:60) <Label>",
    ctx: ctx
  });
  return block;
} // (61:6) <Button on:click={() => clicked++} variant="outlined">


function create_default_slot_34(ctx) {
  var current;
  var label = new Label({
    props: {
      $$slots: {
        default: [create_default_slot_35]
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
    id: create_default_slot_34.name,
    type: "slot",
    source: "(61:6) <Button on:click={() => clicked++} variant=\"outlined\">",
    ctx: ctx
  });
  return block;
} // (58:4) <Group variant="outlined">


function create_default_slot_33(ctx) {
  var t0, t1, current;
  var button0 = new Button({
    props: {
      variant: "outlined",
      $$slots: {
        default: [create_default_slot_38]
      },
      $$scope: {
        ctx: ctx
      }
    },
    $$inline: true
  });
  button0.$on("click", ctx.click_handler_29);
  var button1 = new Button({
    props: {
      variant: "outlined",
      $$slots: {
        default: [create_default_slot_36]
      },
      $$scope: {
        ctx: ctx
      }
    },
    $$inline: true
  });
  button1.$on("click", ctx.click_handler_30);
  var button2 = new Button({
    props: {
      variant: "outlined",
      $$slots: {
        default: [create_default_slot_34]
      },
      $$scope: {
        ctx: ctx
      }
    },
    $$inline: true
  });
  button2.$on("click", ctx.click_handler_31);
  var block = {
    c: function create() {
      button0.$$.fragment.c();
      t0 = space();
      button1.$$.fragment.c();
      t1 = space();
      button2.$$.fragment.c();
    },
    l: function claim(nodes) {
      button0.$$.fragment.l(nodes);
      t0 = claim_space(nodes);
      button1.$$.fragment.l(nodes);
      t1 = claim_space(nodes);
      button2.$$.fragment.l(nodes);
    },
    m: function mount(target, anchor) {
      mount_component(button0, target, anchor);
      insert_dev(target, t0, anchor);
      mount_component(button1, target, anchor);
      insert_dev(target, t1, anchor);
      mount_component(button2, target, anchor);
      current = true;
    },
    p: function update(changed, ctx) {
      var button0_changes = {};
      if (changed.$$scope) button0_changes.$$scope = {
        changed: changed,
        ctx: ctx
      };
      button0.$set(button0_changes);
      var button1_changes = {};
      if (changed.$$scope) button1_changes.$$scope = {
        changed: changed,
        ctx: ctx
      };
      button1.$set(button1_changes);
      var button2_changes = {};
      if (changed.$$scope) button2_changes.$$scope = {
        changed: changed,
        ctx: ctx
      };
      button2.$set(button2_changes);
    },
    i: function intro(local) {
      if (current) return;
      transition_in(button0.$$.fragment, local);
      transition_in(button1.$$.fragment, local);
      transition_in(button2.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(button0.$$.fragment, local);
      transition_out(button1.$$.fragment, local);
      transition_out(button2.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      destroy_component(button0, detaching);

      if (detaching) {
        detach_dev(t0);
      }

      destroy_component(button1, detaching);

      if (detaching) {
        detach_dev(t1);
      }

      destroy_component(button2, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_default_slot_33.name,
    type: "slot",
    source: "(58:4) <Group variant=\"outlined\">",
    ctx: ctx
  });
  return block;
} // (67:100) <Label>


function create_default_slot_32(ctx) {
  var t;
  var block = {
    c: function create() {
      t = text("Primary");
    },
    l: function claim(nodes) {
      t = claim_text(nodes, "Primary");
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
    id: create_default_slot_32.name,
    type: "slot",
    source: "(67:100) <Label>",
    ctx: ctx
  });
  return block;
} // (67:6) <Button on:click={() => clicked++} variant="unelevated" color="primary" style="flex-grow: 3;">


function create_default_slot_31(ctx) {
  var current;
  var label = new Label({
    props: {
      $$slots: {
        default: [create_default_slot_32]
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
    id: create_default_slot_31.name,
    type: "slot",
    source: "(67:6) <Button on:click={() => clicked++} variant=\"unelevated\" color=\"primary\" style=\"flex-grow: 3;\">",
    ctx: ctx
  });
  return block;
} // (68:102) <Label>


function create_default_slot_30(ctx) {
  var t;
  var block = {
    c: function create() {
      t = text("Secondary");
    },
    l: function claim(nodes) {
      t = claim_text(nodes, "Secondary");
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
    id: create_default_slot_30.name,
    type: "slot",
    source: "(68:102) <Label>",
    ctx: ctx
  });
  return block;
} // (68:6) <Button on:click={() => clicked++} variant="unelevated" color="secondary" style="flex-grow: 1;">


function create_default_slot_29(ctx) {
  var current;
  var label = new Label({
    props: {
      $$slots: {
        default: [create_default_slot_30]
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
    id: create_default_slot_29.name,
    type: "slot",
    source: "(68:6) <Button on:click={() => clicked++} variant=\"unelevated\" color=\"secondary\" style=\"flex-grow: 1;\">",
    ctx: ctx
  });
  return block;
} // (69:102) <Label>


function create_default_slot_28(ctx) {
  var t;
  var block = {
    c: function create() {
      t = text("Secondary");
    },
    l: function claim(nodes) {
      t = claim_text(nodes, "Secondary");
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
    id: create_default_slot_28.name,
    type: "slot",
    source: "(69:102) <Label>",
    ctx: ctx
  });
  return block;
} // (69:6) <Button on:click={() => clicked++} variant="unelevated" color="secondary" style="flex-grow: 1;">


function create_default_slot_27(ctx) {
  var current;
  var label = new Label({
    props: {
      $$slots: {
        default: [create_default_slot_28]
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
    id: create_default_slot_27.name,
    type: "slot",
    source: "(69:6) <Button on:click={() => clicked++} variant=\"unelevated\" color=\"secondary\" style=\"flex-grow: 1;\">",
    ctx: ctx
  });
  return block;
} // (66:4) <Group variant="outlined" style="display: flex;">


function create_default_slot_26(ctx) {
  var t0, t1, current;
  var button0 = new Button({
    props: {
      variant: "unelevated",
      color: "primary",
      style: "flex-grow: 3;",
      $$slots: {
        default: [create_default_slot_31]
      },
      $$scope: {
        ctx: ctx
      }
    },
    $$inline: true
  });
  button0.$on("click", ctx.click_handler_32);
  var button1 = new Button({
    props: {
      variant: "unelevated",
      color: "secondary",
      style: "flex-grow: 1;",
      $$slots: {
        default: [create_default_slot_29]
      },
      $$scope: {
        ctx: ctx
      }
    },
    $$inline: true
  });
  button1.$on("click", ctx.click_handler_33);
  var button2 = new Button({
    props: {
      variant: "unelevated",
      color: "secondary",
      style: "flex-grow: 1;",
      $$slots: {
        default: [create_default_slot_27]
      },
      $$scope: {
        ctx: ctx
      }
    },
    $$inline: true
  });
  button2.$on("click", ctx.click_handler_34);
  var block = {
    c: function create() {
      button0.$$.fragment.c();
      t0 = space();
      button1.$$.fragment.c();
      t1 = space();
      button2.$$.fragment.c();
    },
    l: function claim(nodes) {
      button0.$$.fragment.l(nodes);
      t0 = claim_space(nodes);
      button1.$$.fragment.l(nodes);
      t1 = claim_space(nodes);
      button2.$$.fragment.l(nodes);
    },
    m: function mount(target, anchor) {
      mount_component(button0, target, anchor);
      insert_dev(target, t0, anchor);
      mount_component(button1, target, anchor);
      insert_dev(target, t1, anchor);
      mount_component(button2, target, anchor);
      current = true;
    },
    p: function update(changed, ctx) {
      var button0_changes = {};
      if (changed.$$scope) button0_changes.$$scope = {
        changed: changed,
        ctx: ctx
      };
      button0.$set(button0_changes);
      var button1_changes = {};
      if (changed.$$scope) button1_changes.$$scope = {
        changed: changed,
        ctx: ctx
      };
      button1.$set(button1_changes);
      var button2_changes = {};
      if (changed.$$scope) button2_changes.$$scope = {
        changed: changed,
        ctx: ctx
      };
      button2.$set(button2_changes);
    },
    i: function intro(local) {
      if (current) return;
      transition_in(button0.$$.fragment, local);
      transition_in(button1.$$.fragment, local);
      transition_in(button2.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(button0.$$.fragment, local);
      transition_out(button1.$$.fragment, local);
      transition_out(button2.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      destroy_component(button0, detaching);

      if (detaching) {
        detach_dev(t0);
      }

      destroy_component(button1, detaching);

      if (detaching) {
        detach_dev(t1);
      }

      destroy_component(button2, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_default_slot_26.name,
    type: "slot",
    source: "(66:4) <Group variant=\"outlined\" style=\"display: flex;\">",
    ctx: ctx
  });
  return block;
} // (76:58) <Label>


function create_default_slot_25(ctx) {
  var t;
  var block = {
    c: function create() {
      t = text("Do the thing");
    },
    l: function claim(nodes) {
      t = claim_text(nodes, "Do the thing");
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
    id: create_default_slot_25.name,
    type: "slot",
    source: "(76:58) <Label>",
    ctx: ctx
  });
  return block;
} // (76:6) <Button on:click={() => clicked++} variant="raised">


function create_default_slot_24(ctx) {
  var current;
  var label = new Label({
    props: {
      $$slots: {
        default: [create_default_slot_25]
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
    id: create_default_slot_24.name,
    type: "slot",
    source: "(76:6) <Button on:click={() => clicked++} variant=\"raised\">",
    ctx: ctx
  });
  return block;
} // (79:10) <Icon class="material-icons" style="margin: 0;">


function create_default_slot_23(ctx) {
  var t;
  var block = {
    c: function create() {
      t = text("arrow_drop_down");
    },
    l: function claim(nodes) {
      t = claim_text(nodes, "arrow_drop_down");
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
    id: create_default_slot_23.name,
    type: "slot",
    source: "(79:10) <Icon class=\"material-icons\" style=\"margin: 0;\">",
    ctx: ctx
  });
  return block;
} // (78:8) <Button on:click={() => menu.setOpen(true)} variant="raised" style="padding: 0; min-width: 36px;">


function create_default_slot_22(ctx) {
  var current;
  var icon = new Icon({
    props: {
      class: "material-icons",
      style: "margin: 0;",
      $$slots: {
        default: [create_default_slot_23]
      },
      $$scope: {
        ctx: ctx
      }
    },
    $$inline: true
  });
  var block = {
    c: function create() {
      icon.$$.fragment.c();
    },
    l: function claim(nodes) {
      icon.$$.fragment.l(nodes);
    },
    m: function mount(target, anchor) {
      mount_component(icon, target, anchor);
      current = true;
    },
    p: function update(changed, ctx) {
      var icon_changes = {};
      if (changed.$$scope) icon_changes.$$scope = {
        changed: changed,
        ctx: ctx
      };
      icon.$set(icon_changes);
    },
    i: function intro(local) {
      if (current) return;
      transition_in(icon.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(icon.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      destroy_component(icon, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_default_slot_22.name,
    type: "slot",
    source: "(78:8) <Button on:click={() => menu.setOpen(true)} variant=\"raised\" style=\"padding: 0; min-width: 36px;\">",
    ctx: ctx
  });
  return block;
} // (83:51) <Text>


function create_default_slot_21(ctx) {
  var t;
  var block = {
    c: function create() {
      t = text("Thing 1");
    },
    l: function claim(nodes) {
      t = claim_text(nodes, "Thing 1");
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
    id: create_default_slot_21.name,
    type: "slot",
    source: "(83:51) <Text>",
    ctx: ctx
  });
  return block;
} // (83:12) <Item on:SMUI:action={() => clicked++}>


function create_default_slot_20(ctx) {
  var current;
  var text_1 = new Text({
    props: {
      $$slots: {
        default: [create_default_slot_21]
      },
      $$scope: {
        ctx: ctx
      }
    },
    $$inline: true
  });
  var block = {
    c: function create() {
      text_1.$$.fragment.c();
    },
    l: function claim(nodes) {
      text_1.$$.fragment.l(nodes);
    },
    m: function mount(target, anchor) {
      mount_component(text_1, target, anchor);
      current = true;
    },
    p: function update(changed, ctx) {
      var text_1_changes = {};
      if (changed.$$scope) text_1_changes.$$scope = {
        changed: changed,
        ctx: ctx
      };
      text_1.$set(text_1_changes);
    },
    i: function intro(local) {
      if (current) return;
      transition_in(text_1.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(text_1.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      destroy_component(text_1, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_default_slot_20.name,
    type: "slot",
    source: "(83:12) <Item on:SMUI:action={() => clicked++}>",
    ctx: ctx
  });
  return block;
} // (84:51) <Text>


function create_default_slot_19(ctx) {
  var t;
  var block = {
    c: function create() {
      t = text("Thing 2");
    },
    l: function claim(nodes) {
      t = claim_text(nodes, "Thing 2");
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
    id: create_default_slot_19.name,
    type: "slot",
    source: "(84:51) <Text>",
    ctx: ctx
  });
  return block;
} // (84:12) <Item on:SMUI:action={() => clicked++}>


function create_default_slot_18(ctx) {
  var current;
  var text_1 = new Text({
    props: {
      $$slots: {
        default: [create_default_slot_19]
      },
      $$scope: {
        ctx: ctx
      }
    },
    $$inline: true
  });
  var block = {
    c: function create() {
      text_1.$$.fragment.c();
    },
    l: function claim(nodes) {
      text_1.$$.fragment.l(nodes);
    },
    m: function mount(target, anchor) {
      mount_component(text_1, target, anchor);
      current = true;
    },
    p: function update(changed, ctx) {
      var text_1_changes = {};
      if (changed.$$scope) text_1_changes.$$scope = {
        changed: changed,
        ctx: ctx
      };
      text_1.$set(text_1_changes);
    },
    i: function intro(local) {
      if (current) return;
      transition_in(text_1.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(text_1.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      destroy_component(text_1, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_default_slot_18.name,
    type: "slot",
    source: "(84:12) <Item on:SMUI:action={() => clicked++}>",
    ctx: ctx
  });
  return block;
} // (86:51) <Text>


function create_default_slot_17(ctx) {
  var t;
  var block = {
    c: function create() {
      t = text("Thing 3");
    },
    l: function claim(nodes) {
      t = claim_text(nodes, "Thing 3");
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
    id: create_default_slot_17.name,
    type: "slot",
    source: "(86:51) <Text>",
    ctx: ctx
  });
  return block;
} // (86:12) <Item on:SMUI:action={() => clicked++}>


function create_default_slot_16(ctx) {
  var current;
  var text_1 = new Text({
    props: {
      $$slots: {
        default: [create_default_slot_17]
      },
      $$scope: {
        ctx: ctx
      }
    },
    $$inline: true
  });
  var block = {
    c: function create() {
      text_1.$$.fragment.c();
    },
    l: function claim(nodes) {
      text_1.$$.fragment.l(nodes);
    },
    m: function mount(target, anchor) {
      mount_component(text_1, target, anchor);
      current = true;
    },
    p: function update(changed, ctx) {
      var text_1_changes = {};
      if (changed.$$scope) text_1_changes.$$scope = {
        changed: changed,
        ctx: ctx
      };
      text_1.$set(text_1_changes);
    },
    i: function intro(local) {
      if (current) return;
      transition_in(text_1.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(text_1.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      destroy_component(text_1, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_default_slot_16.name,
    type: "slot",
    source: "(86:12) <Item on:SMUI:action={() => clicked++}>",
    ctx: ctx
  });
  return block;
} // (82:10) <List>


function create_default_slot_15(ctx) {
  var t0, t1, t2, current;
  var item0 = new Item({
    props: {
      $$slots: {
        default: [create_default_slot_20]
      },
      $$scope: {
        ctx: ctx
      }
    },
    $$inline: true
  });
  item0.$on("SMUI:action", ctx.SMUI_action_handler);
  var item1 = new Item({
    props: {
      $$slots: {
        default: [create_default_slot_18]
      },
      $$scope: {
        ctx: ctx
      }
    },
    $$inline: true
  });
  item1.$on("SMUI:action", ctx.SMUI_action_handler_1);
  var separator = new Separator({
    $$inline: true
  });
  var item2 = new Item({
    props: {
      $$slots: {
        default: [create_default_slot_16]
      },
      $$scope: {
        ctx: ctx
      }
    },
    $$inline: true
  });
  item2.$on("SMUI:action", ctx.SMUI_action_handler_2);
  var block = {
    c: function create() {
      item0.$$.fragment.c();
      t0 = space();
      item1.$$.fragment.c();
      t1 = space();
      separator.$$.fragment.c();
      t2 = space();
      item2.$$.fragment.c();
    },
    l: function claim(nodes) {
      item0.$$.fragment.l(nodes);
      t0 = claim_space(nodes);
      item1.$$.fragment.l(nodes);
      t1 = claim_space(nodes);
      separator.$$.fragment.l(nodes);
      t2 = claim_space(nodes);
      item2.$$.fragment.l(nodes);
    },
    m: function mount(target, anchor) {
      mount_component(item0, target, anchor);
      insert_dev(target, t0, anchor);
      mount_component(item1, target, anchor);
      insert_dev(target, t1, anchor);
      mount_component(separator, target, anchor);
      insert_dev(target, t2, anchor);
      mount_component(item2, target, anchor);
      current = true;
    },
    p: function update(changed, ctx) {
      var item0_changes = {};
      if (changed.$$scope) item0_changes.$$scope = {
        changed: changed,
        ctx: ctx
      };
      item0.$set(item0_changes);
      var item1_changes = {};
      if (changed.$$scope) item1_changes.$$scope = {
        changed: changed,
        ctx: ctx
      };
      item1.$set(item1_changes);
      var item2_changes = {};
      if (changed.$$scope) item2_changes.$$scope = {
        changed: changed,
        ctx: ctx
      };
      item2.$set(item2_changes);
    },
    i: function intro(local) {
      if (current) return;
      transition_in(item0.$$.fragment, local);
      transition_in(item1.$$.fragment, local);
      transition_in(separator.$$.fragment, local);
      transition_in(item2.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(item0.$$.fragment, local);
      transition_out(item1.$$.fragment, local);
      transition_out(separator.$$.fragment, local);
      transition_out(item2.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      destroy_component(item0, detaching);

      if (detaching) {
        detach_dev(t0);
      }

      destroy_component(item1, detaching);

      if (detaching) {
        detach_dev(t1);
      }

      destroy_component(separator, detaching);

      if (detaching) {
        detach_dev(t2);
      }

      destroy_component(item2, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_default_slot_15.name,
    type: "slot",
    source: "(82:10) <List>",
    ctx: ctx
  });
  return block;
} // (81:8) <Menu bind:this={menu} anchorCorner="TOP_LEFT">


function create_default_slot_14(ctx) {
  var current;
  var list = new List({
    props: {
      $$slots: {
        default: [create_default_slot_15]
      },
      $$scope: {
        ctx: ctx
      }
    },
    $$inline: true
  });
  var block = {
    c: function create() {
      list.$$.fragment.c();
    },
    l: function claim(nodes) {
      list.$$.fragment.l(nodes);
    },
    m: function mount(target, anchor) {
      mount_component(list, target, anchor);
      current = true;
    },
    p: function update(changed, ctx) {
      var list_changes = {};
      if (changed.$$scope) list_changes.$$scope = {
        changed: changed,
        ctx: ctx
      };
      list.$set(list_changes);
    },
    i: function intro(local) {
      if (current) return;
      transition_in(list.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(list.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      destroy_component(list, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_default_slot_14.name,
    type: "slot",
    source: "(81:8) <Menu bind:this={menu} anchorCorner=\"TOP_LEFT\">",
    ctx: ctx
  });
  return block;
} // (75:4) <Group variant="raised">


function create_default_slot_13(ctx) {
  var t0, div, t1, GroupItem_action, current;
  var button0 = new Button({
    props: {
      variant: "raised",
      $$slots: {
        default: [create_default_slot_24]
      },
      $$scope: {
        ctx: ctx
      }
    },
    $$inline: true
  });
  button0.$on("click", ctx.click_handler_35);
  var button1 = new Button({
    props: {
      variant: "raised",
      style: "padding: 0; min-width: 36px;",
      $$slots: {
        default: [create_default_slot_22]
      },
      $$scope: {
        ctx: ctx
      }
    },
    $$inline: true
  });
  button1.$on("click", ctx.click_handler_36);
  var menu_1_props = {
    anchorCorner: "TOP_LEFT",
    $$slots: {
      default: [create_default_slot_14]
    },
    $$scope: {
      ctx: ctx
    }
  };
  var menu_1 = new Menu({
    props: menu_1_props,
    $$inline: true
  });
  ctx.menu_1_binding(menu_1);
  var block = {
    c: function create() {
      button0.$$.fragment.c();
      t0 = space();
      div = element("div");
      button1.$$.fragment.c();
      t1 = space();
      menu_1.$$.fragment.c();
      this.h();
    },
    l: function claim(nodes) {
      button0.$$.fragment.l(nodes);
      t0 = claim_space(nodes);
      div = claim_element(nodes, "DIV", {
        class: true
      }, false);
      var div_nodes = children(div);
      button1.$$.fragment.l(div_nodes);
      t1 = claim_space(div_nodes);
      menu_1.$$.fragment.l(div_nodes);
      div_nodes.forEach(detach_dev);
      this.h();
    },
    h: function hydrate() {
      attr_dev(div, "class", "svelte-18uebmb");
      add_location(div, file, 76, 6, 4079);
    },
    m: function mount(target, anchor) {
      mount_component(button0, target, anchor);
      insert_dev(target, t0, anchor);
      insert_dev(target, div, anchor);
      mount_component(button1, div, null);
      append_dev(div, t1);
      mount_component(menu_1, div, null);
      GroupItem_action = GroupItem.call(null, div) || {};
      current = true;
    },
    p: function update(changed, ctx) {
      var button0_changes = {};
      if (changed.$$scope) button0_changes.$$scope = {
        changed: changed,
        ctx: ctx
      };
      button0.$set(button0_changes);
      var button1_changes = {};
      if (changed.$$scope) button1_changes.$$scope = {
        changed: changed,
        ctx: ctx
      };
      button1.$set(button1_changes);
      var menu_1_changes = {};
      if (changed.$$scope) menu_1_changes.$$scope = {
        changed: changed,
        ctx: ctx
      };
      menu_1.$set(menu_1_changes);
    },
    i: function intro(local) {
      if (current) return;
      transition_in(button0.$$.fragment, local);
      transition_in(button1.$$.fragment, local);
      transition_in(menu_1.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(button0.$$.fragment, local);
      transition_out(button1.$$.fragment, local);
      transition_out(menu_1.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      destroy_component(button0, detaching);

      if (detaching) {
        detach_dev(t0);
        detach_dev(div);
      }

      destroy_component(button1);
      ctx.menu_1_binding(null);
      destroy_component(menu_1);
      if (GroupItem_action && typeof GroupItem_action.destroy === 'function') GroupItem_action.destroy();
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_default_slot_13.name,
    type: "slot",
    source: "(75:4) <Group variant=\"raised\">",
    ctx: ctx
  });
  return block;
} // (92:60) <Label>


function create_default_slot_12(ctx) {
  var t;
  var block = {
    c: function create() {
      t = text("Do the thing");
    },
    l: function claim(nodes) {
      t = claim_text(nodes, "Do the thing");
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
    id: create_default_slot_12.name,
    type: "slot",
    source: "(92:60) <Label>",
    ctx: ctx
  });
  return block;
} // (92:6) <Button on:click={() => clicked++} variant="outlined">


function create_default_slot_11(ctx) {
  var current;
  var label = new Label({
    props: {
      $$slots: {
        default: [create_default_slot_12]
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
    id: create_default_slot_11.name,
    type: "slot",
    source: "(92:6) <Button on:click={() => clicked++} variant=\"outlined\">",
    ctx: ctx
  });
  return block;
} // (95:10) <Icon class="material-icons" style="margin: 0;">


function create_default_slot_10(ctx) {
  var t;
  var block = {
    c: function create() {
      t = text("arrow_drop_down");
    },
    l: function claim(nodes) {
      t = claim_text(nodes, "arrow_drop_down");
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
    source: "(95:10) <Icon class=\"material-icons\" style=\"margin: 0;\">",
    ctx: ctx
  });
  return block;
} // (94:8) <Button on:click={() => menu2.setOpen(true)} variant="outlined" style="padding: 0; min-width: 36px;">


function create_default_slot_9(ctx) {
  var current;
  var icon = new Icon({
    props: {
      class: "material-icons",
      style: "margin: 0;",
      $$slots: {
        default: [create_default_slot_10]
      },
      $$scope: {
        ctx: ctx
      }
    },
    $$inline: true
  });
  var block = {
    c: function create() {
      icon.$$.fragment.c();
    },
    l: function claim(nodes) {
      icon.$$.fragment.l(nodes);
    },
    m: function mount(target, anchor) {
      mount_component(icon, target, anchor);
      current = true;
    },
    p: function update(changed, ctx) {
      var icon_changes = {};
      if (changed.$$scope) icon_changes.$$scope = {
        changed: changed,
        ctx: ctx
      };
      icon.$set(icon_changes);
    },
    i: function intro(local) {
      if (current) return;
      transition_in(icon.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(icon.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      destroy_component(icon, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_default_slot_9.name,
    type: "slot",
    source: "(94:8) <Button on:click={() => menu2.setOpen(true)} variant=\"outlined\" style=\"padding: 0; min-width: 36px;\">",
    ctx: ctx
  });
  return block;
} // (99:51) <Text>


function create_default_slot_8(ctx) {
  var t;
  var block = {
    c: function create() {
      t = text("Thing 1");
    },
    l: function claim(nodes) {
      t = claim_text(nodes, "Thing 1");
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
    source: "(99:51) <Text>",
    ctx: ctx
  });
  return block;
} // (99:12) <Item on:SMUI:action={() => clicked++}>


function create_default_slot_7(ctx) {
  var current;
  var text_1 = new Text({
    props: {
      $$slots: {
        default: [create_default_slot_8]
      },
      $$scope: {
        ctx: ctx
      }
    },
    $$inline: true
  });
  var block = {
    c: function create() {
      text_1.$$.fragment.c();
    },
    l: function claim(nodes) {
      text_1.$$.fragment.l(nodes);
    },
    m: function mount(target, anchor) {
      mount_component(text_1, target, anchor);
      current = true;
    },
    p: function update(changed, ctx) {
      var text_1_changes = {};
      if (changed.$$scope) text_1_changes.$$scope = {
        changed: changed,
        ctx: ctx
      };
      text_1.$set(text_1_changes);
    },
    i: function intro(local) {
      if (current) return;
      transition_in(text_1.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(text_1.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      destroy_component(text_1, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_default_slot_7.name,
    type: "slot",
    source: "(99:12) <Item on:SMUI:action={() => clicked++}>",
    ctx: ctx
  });
  return block;
} // (100:51) <Text>


function create_default_slot_6(ctx) {
  var t;
  var block = {
    c: function create() {
      t = text("Thing 2");
    },
    l: function claim(nodes) {
      t = claim_text(nodes, "Thing 2");
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
    source: "(100:51) <Text>",
    ctx: ctx
  });
  return block;
} // (100:12) <Item on:SMUI:action={() => clicked++}>


function create_default_slot_5(ctx) {
  var current;
  var text_1 = new Text({
    props: {
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
      text_1.$$.fragment.c();
    },
    l: function claim(nodes) {
      text_1.$$.fragment.l(nodes);
    },
    m: function mount(target, anchor) {
      mount_component(text_1, target, anchor);
      current = true;
    },
    p: function update(changed, ctx) {
      var text_1_changes = {};
      if (changed.$$scope) text_1_changes.$$scope = {
        changed: changed,
        ctx: ctx
      };
      text_1.$set(text_1_changes);
    },
    i: function intro(local) {
      if (current) return;
      transition_in(text_1.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(text_1.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      destroy_component(text_1, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_default_slot_5.name,
    type: "slot",
    source: "(100:12) <Item on:SMUI:action={() => clicked++}>",
    ctx: ctx
  });
  return block;
} // (102:51) <Text>


function create_default_slot_4(ctx) {
  var t;
  var block = {
    c: function create() {
      t = text("Thing 3");
    },
    l: function claim(nodes) {
      t = claim_text(nodes, "Thing 3");
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
    source: "(102:51) <Text>",
    ctx: ctx
  });
  return block;
} // (102:12) <Item on:SMUI:action={() => clicked++}>


function create_default_slot_3(ctx) {
  var current;
  var text_1 = new Text({
    props: {
      $$slots: {
        default: [create_default_slot_4]
      },
      $$scope: {
        ctx: ctx
      }
    },
    $$inline: true
  });
  var block = {
    c: function create() {
      text_1.$$.fragment.c();
    },
    l: function claim(nodes) {
      text_1.$$.fragment.l(nodes);
    },
    m: function mount(target, anchor) {
      mount_component(text_1, target, anchor);
      current = true;
    },
    p: function update(changed, ctx) {
      var text_1_changes = {};
      if (changed.$$scope) text_1_changes.$$scope = {
        changed: changed,
        ctx: ctx
      };
      text_1.$set(text_1_changes);
    },
    i: function intro(local) {
      if (current) return;
      transition_in(text_1.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(text_1.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      destroy_component(text_1, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_default_slot_3.name,
    type: "slot",
    source: "(102:12) <Item on:SMUI:action={() => clicked++}>",
    ctx: ctx
  });
  return block;
} // (98:10) <List>


function create_default_slot_2(ctx) {
  var t0, t1, t2, current;
  var item0 = new Item({
    props: {
      $$slots: {
        default: [create_default_slot_7]
      },
      $$scope: {
        ctx: ctx
      }
    },
    $$inline: true
  });
  item0.$on("SMUI:action", ctx.SMUI_action_handler_3);
  var item1 = new Item({
    props: {
      $$slots: {
        default: [create_default_slot_5]
      },
      $$scope: {
        ctx: ctx
      }
    },
    $$inline: true
  });
  item1.$on("SMUI:action", ctx.SMUI_action_handler_4);
  var separator = new Separator({
    $$inline: true
  });
  var item2 = new Item({
    props: {
      $$slots: {
        default: [create_default_slot_3]
      },
      $$scope: {
        ctx: ctx
      }
    },
    $$inline: true
  });
  item2.$on("SMUI:action", ctx.SMUI_action_handler_5);
  var block = {
    c: function create() {
      item0.$$.fragment.c();
      t0 = space();
      item1.$$.fragment.c();
      t1 = space();
      separator.$$.fragment.c();
      t2 = space();
      item2.$$.fragment.c();
    },
    l: function claim(nodes) {
      item0.$$.fragment.l(nodes);
      t0 = claim_space(nodes);
      item1.$$.fragment.l(nodes);
      t1 = claim_space(nodes);
      separator.$$.fragment.l(nodes);
      t2 = claim_space(nodes);
      item2.$$.fragment.l(nodes);
    },
    m: function mount(target, anchor) {
      mount_component(item0, target, anchor);
      insert_dev(target, t0, anchor);
      mount_component(item1, target, anchor);
      insert_dev(target, t1, anchor);
      mount_component(separator, target, anchor);
      insert_dev(target, t2, anchor);
      mount_component(item2, target, anchor);
      current = true;
    },
    p: function update(changed, ctx) {
      var item0_changes = {};
      if (changed.$$scope) item0_changes.$$scope = {
        changed: changed,
        ctx: ctx
      };
      item0.$set(item0_changes);
      var item1_changes = {};
      if (changed.$$scope) item1_changes.$$scope = {
        changed: changed,
        ctx: ctx
      };
      item1.$set(item1_changes);
      var item2_changes = {};
      if (changed.$$scope) item2_changes.$$scope = {
        changed: changed,
        ctx: ctx
      };
      item2.$set(item2_changes);
    },
    i: function intro(local) {
      if (current) return;
      transition_in(item0.$$.fragment, local);
      transition_in(item1.$$.fragment, local);
      transition_in(separator.$$.fragment, local);
      transition_in(item2.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(item0.$$.fragment, local);
      transition_out(item1.$$.fragment, local);
      transition_out(separator.$$.fragment, local);
      transition_out(item2.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      destroy_component(item0, detaching);

      if (detaching) {
        detach_dev(t0);
      }

      destroy_component(item1, detaching);

      if (detaching) {
        detach_dev(t1);
      }

      destroy_component(separator, detaching);

      if (detaching) {
        detach_dev(t2);
      }

      destroy_component(item2, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_default_slot_2.name,
    type: "slot",
    source: "(98:10) <List>",
    ctx: ctx
  });
  return block;
} // (97:8) <Menu bind:this={menu2} anchorCorner="TOP_LEFT">


function create_default_slot_1(ctx) {
  var current;
  var list = new List({
    props: {
      $$slots: {
        default: [create_default_slot_2]
      },
      $$scope: {
        ctx: ctx
      }
    },
    $$inline: true
  });
  var block = {
    c: function create() {
      list.$$.fragment.c();
    },
    l: function claim(nodes) {
      list.$$.fragment.l(nodes);
    },
    m: function mount(target, anchor) {
      mount_component(list, target, anchor);
      current = true;
    },
    p: function update(changed, ctx) {
      var list_changes = {};
      if (changed.$$scope) list_changes.$$scope = {
        changed: changed,
        ctx: ctx
      };
      list.$set(list_changes);
    },
    i: function intro(local) {
      if (current) return;
      transition_in(list.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(list.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      destroy_component(list, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_default_slot_1.name,
    type: "slot",
    source: "(97:8) <Menu bind:this={menu2} anchorCorner=\"TOP_LEFT\">",
    ctx: ctx
  });
  return block;
} // (91:4) <Group variant="outlined">


function create_default_slot(ctx) {
  var t0, div, t1, GroupItem_action, current;
  var button0 = new Button({
    props: {
      variant: "outlined",
      $$slots: {
        default: [create_default_slot_11]
      },
      $$scope: {
        ctx: ctx
      }
    },
    $$inline: true
  });
  button0.$on("click", ctx.click_handler_37);
  var button1 = new Button({
    props: {
      variant: "outlined",
      style: "padding: 0; min-width: 36px;",
      $$slots: {
        default: [create_default_slot_9]
      },
      $$scope: {
        ctx: ctx
      }
    },
    $$inline: true
  });
  button1.$on("click", ctx.click_handler_38);
  var menu_1_props = {
    anchorCorner: "TOP_LEFT",
    $$slots: {
      default: [create_default_slot_1]
    },
    $$scope: {
      ctx: ctx
    }
  };
  var menu_1 = new Menu({
    props: menu_1_props,
    $$inline: true
  });
  ctx.menu_1_binding_1(menu_1);
  var block = {
    c: function create() {
      button0.$$.fragment.c();
      t0 = space();
      div = element("div");
      button1.$$.fragment.c();
      t1 = space();
      menu_1.$$.fragment.c();
      this.h();
    },
    l: function claim(nodes) {
      button0.$$.fragment.l(nodes);
      t0 = claim_space(nodes);
      div = claim_element(nodes, "DIV", {
        class: true
      }, false);
      var div_nodes = children(div);
      button1.$$.fragment.l(div_nodes);
      t1 = claim_space(div_nodes);
      menu_1.$$.fragment.l(div_nodes);
      div_nodes.forEach(detach_dev);
      this.h();
    },
    h: function hydrate() {
      attr_dev(div, "class", "svelte-18uebmb");
      add_location(div, file, 92, 6, 4835);
    },
    m: function mount(target, anchor) {
      mount_component(button0, target, anchor);
      insert_dev(target, t0, anchor);
      insert_dev(target, div, anchor);
      mount_component(button1, div, null);
      append_dev(div, t1);
      mount_component(menu_1, div, null);
      GroupItem_action = GroupItem.call(null, div) || {};
      current = true;
    },
    p: function update(changed, ctx) {
      var button0_changes = {};
      if (changed.$$scope) button0_changes.$$scope = {
        changed: changed,
        ctx: ctx
      };
      button0.$set(button0_changes);
      var button1_changes = {};
      if (changed.$$scope) button1_changes.$$scope = {
        changed: changed,
        ctx: ctx
      };
      button1.$set(button1_changes);
      var menu_1_changes = {};
      if (changed.$$scope) menu_1_changes.$$scope = {
        changed: changed,
        ctx: ctx
      };
      menu_1.$set(menu_1_changes);
    },
    i: function intro(local) {
      if (current) return;
      transition_in(button0.$$.fragment, local);
      transition_in(button1.$$.fragment, local);
      transition_in(menu_1.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(button0.$$.fragment, local);
      transition_out(button1.$$.fragment, local);
      transition_out(menu_1.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      destroy_component(button0, detaching);

      if (detaching) {
        detach_dev(t0);
        detach_dev(div);
      }

      destroy_component(button1);
      ctx.menu_1_binding_1(null);
      destroy_component(menu_1);
      if (GroupItem_action && typeof GroupItem_action.destroy === 'function') GroupItem_action.destroy();
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_default_slot.name,
    type: "slot",
    source: "(91:4) <Group variant=\"outlined\">",
    ctx: ctx
  });
  return block;
}

function create_fragment(ctx) {
  var t0, section, h2, t1, t2, div0, t3, t4, t5, t6, t7, t8, t9, t10, div1, t11, t12, div2, t13, br0, t14, t15, t16, t17, t18, t19, t20, t21, t22, div3, t23, t24, div4, t25, br1, t26, t27, t28, t29, t30, br2, t31, br3, t32, t33, div5, t34, br4, t35, t36, t37, pre, t38, t39, current;
  var button0 = new Button({
    props: {
      $$slots: {
        default: [create_default_slot_103]
      },
      $$scope: {
        ctx: ctx
      }
    },
    $$inline: true
  });
  button0.$on("click", ctx.click_handler);
  var button1 = new Button({
    props: {
      disabled: true,
      $$slots: {
        default: [create_default_slot_101]
      },
      $$scope: {
        ctx: ctx
      }
    },
    $$inline: true
  });
  button1.$on("click", ctx.click_handler_1);
  var button2 = new Button({
    props: {
      ripple: false,
      $$slots: {
        default: [create_default_slot_99]
      },
      $$scope: {
        ctx: ctx
      }
    },
    $$inline: true
  });
  button2.$on("click", ctx.click_handler_2);
  var button3 = new Button({
    props: {
      variant: "raised",
      $$slots: {
        default: [create_default_slot_97]
      },
      $$scope: {
        ctx: ctx
      }
    },
    $$inline: true
  });
  button3.$on("click", ctx.click_handler_3);
  var button4 = new Button({
    props: {
      variant: "unelevated",
      $$slots: {
        default: [create_default_slot_95]
      },
      $$scope: {
        ctx: ctx
      }
    },
    $$inline: true
  });
  button4.$on("click", ctx.click_handler_4);
  var button5 = new Button({
    props: {
      variant: "outlined",
      $$slots: {
        default: [create_default_slot_93]
      },
      $$scope: {
        ctx: ctx
      }
    },
    $$inline: true
  });
  button5.$on("click", ctx.click_handler_5);
  var button6 = new Button({
    props: {
      dense: true,
      $$slots: {
        default: [create_default_slot_91]
      },
      $$scope: {
        ctx: ctx
      }
    },
    $$inline: true
  });
  button6.$on("click", ctx.click_handler_6);
  var button7 = new Button({
    props: {
      class: "myClass",
      $$slots: {
        default: [create_default_slot_89]
      },
      $$scope: {
        ctx: ctx
      }
    },
    $$inline: true
  });
  button7.$on("click", ctx.click_handler_7);
  var button8 = new Button({
    props: {
      $$slots: {
        default: [create_default_slot_86]
      },
      $$scope: {
        ctx: ctx
      }
    },
    $$inline: true
  });
  button8.$on("click", ctx.click_handler_8);
  var button9 = new Button({
    props: {
      $$slots: {
        default: [create_default_slot_83]
      },
      $$scope: {
        ctx: ctx
      }
    },
    $$inline: true
  });
  button9.$on("click", ctx.click_handler_9);
  var button10 = new Button({
    props: {
      color: "secondary",
      $$slots: {
        default: [create_default_slot_81]
      },
      $$scope: {
        ctx: ctx
      }
    },
    $$inline: true
  });
  button10.$on("click", ctx.click_handler_10);
  var button11 = new Button({
    props: {
      color: "secondary",
      disabled: true,
      $$slots: {
        default: [create_default_slot_79]
      },
      $$scope: {
        ctx: ctx
      }
    },
    $$inline: true
  });
  button11.$on("click", ctx.click_handler_11);
  var button12 = new Button({
    props: {
      color: "secondary",
      ripple: false,
      $$slots: {
        default: [create_default_slot_77]
      },
      $$scope: {
        ctx: ctx
      }
    },
    $$inline: true
  });
  button12.$on("click", ctx.click_handler_12);
  var button13 = new Button({
    props: {
      color: "secondary",
      variant: "raised",
      $$slots: {
        default: [create_default_slot_75]
      },
      $$scope: {
        ctx: ctx
      }
    },
    $$inline: true
  });
  button13.$on("click", ctx.click_handler_13);
  var button14 = new Button({
    props: {
      color: "secondary",
      variant: "unelevated",
      $$slots: {
        default: [create_default_slot_73]
      },
      $$scope: {
        ctx: ctx
      }
    },
    $$inline: true
  });
  button14.$on("click", ctx.click_handler_14);
  var button15 = new Button({
    props: {
      color: "secondary",
      variant: "outlined",
      $$slots: {
        default: [create_default_slot_71]
      },
      $$scope: {
        ctx: ctx
      }
    },
    $$inline: true
  });
  button15.$on("click", ctx.click_handler_15);
  var button16 = new Button({
    props: {
      color: "secondary",
      dense: true,
      $$slots: {
        default: [create_default_slot_69]
      },
      $$scope: {
        ctx: ctx
      }
    },
    $$inline: true
  });
  button16.$on("click", ctx.click_handler_16);
  var button17 = new Button({
    props: {
      color: "secondary",
      class: "myClass",
      $$slots: {
        default: [create_default_slot_67]
      },
      $$scope: {
        ctx: ctx
      }
    },
    $$inline: true
  });
  button17.$on("click", ctx.click_handler_17);
  var button18 = new Button({
    props: {
      color: "secondary",
      $$slots: {
        default: [create_default_slot_64]
      },
      $$scope: {
        ctx: ctx
      }
    },
    $$inline: true
  });
  button18.$on("click", ctx.click_handler_18);
  var button19 = new Button({
    props: {
      color: "secondary",
      $$slots: {
        default: [create_default_slot_61]
      },
      $$scope: {
        ctx: ctx
      }
    },
    $$inline: true
  });
  button19.$on("click", ctx.click_handler_19);
  var group0 = new Group({
    props: {
      $$slots: {
        default: [create_default_slot_54]
      },
      $$scope: {
        ctx: ctx
      }
    },
    $$inline: true
  });
  var group1 = new Group({
    props: {
      variant: "raised",
      $$slots: {
        default: [create_default_slot_47]
      },
      $$scope: {
        ctx: ctx
      }
    },
    $$inline: true
  });
  var group2 = new Group({
    props: {
      variant: "unelevated",
      $$slots: {
        default: [create_default_slot_40]
      },
      $$scope: {
        ctx: ctx
      }
    },
    $$inline: true
  });
  var group3 = new Group({
    props: {
      variant: "outlined",
      $$slots: {
        default: [create_default_slot_33]
      },
      $$scope: {
        ctx: ctx
      }
    },
    $$inline: true
  });
  var group4 = new Group({
    props: {
      variant: "outlined",
      style: "display: flex;",
      $$slots: {
        default: [create_default_slot_26]
      },
      $$scope: {
        ctx: ctx
      }
    },
    $$inline: true
  });
  var group5 = new Group({
    props: {
      variant: "raised",
      $$slots: {
        default: [create_default_slot_13]
      },
      $$scope: {
        ctx: ctx
      }
    },
    $$inline: true
  });
  var group6 = new Group({
    props: {
      variant: "outlined",
      $$slots: {
        default: [create_default_slot]
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
      t1 = text("Button");
      t2 = space();
      div0 = element("div");
      button0.$$.fragment.c();
      t3 = space();
      button1.$$.fragment.c();
      t4 = space();
      button2.$$.fragment.c();
      t5 = space();
      button3.$$.fragment.c();
      t6 = space();
      button4.$$.fragment.c();
      t7 = space();
      button5.$$.fragment.c();
      t8 = space();
      button6.$$.fragment.c();
      t9 = space();
      button7.$$.fragment.c();
      t10 = space();
      div1 = element("div");
      button8.$$.fragment.c();
      t11 = space();
      button9.$$.fragment.c();
      t12 = space();
      div2 = element("div");
      t13 = text("Secondary color: ");
      br0 = element("br");
      t14 = space();
      button10.$$.fragment.c();
      t15 = space();
      button11.$$.fragment.c();
      t16 = space();
      button12.$$.fragment.c();
      t17 = space();
      button13.$$.fragment.c();
      t18 = space();
      button14.$$.fragment.c();
      t19 = space();
      button15.$$.fragment.c();
      t20 = space();
      button16.$$.fragment.c();
      t21 = space();
      button17.$$.fragment.c();
      t22 = space();
      div3 = element("div");
      button18.$$.fragment.c();
      t23 = space();
      button19.$$.fragment.c();
      t24 = space();
      div4 = element("div");
      t25 = text("Button groups: ");
      br1 = element("br");
      t26 = space();
      group0.$$.fragment.c();
      t27 = space();
      group1.$$.fragment.c();
      t28 = space();
      group2.$$.fragment.c();
      t29 = space();
      group3.$$.fragment.c();
      t30 = space();
      br2 = element("br");
      t31 = space();
      br3 = element("br");
      t32 = space();
      group4.$$.fragment.c();
      t33 = space();
      div5 = element("div");
      t34 = text("Split buttons using a button group: ");
      br4 = element("br");
      t35 = space();
      group5.$$.fragment.c();
      t36 = space();
      group6.$$.fragment.c();
      t37 = space();
      pre = element("pre");
      t38 = text("Clicked: ");
      t39 = text(ctx.clicked);
      this.h();
    },
    l: function claim(nodes) {
      t0 = claim_space(nodes);
      section = claim_element(nodes, "SECTION", {
        class: true
      }, false);
      var section_nodes = children(section);
      h2 = claim_element(section_nodes, "H2", {
        class: true
      }, false);
      var h2_nodes = children(h2);
      t1 = claim_text(h2_nodes, "Button");
      h2_nodes.forEach(detach_dev);
      t2 = claim_space(section_nodes);
      div0 = claim_element(section_nodes, "DIV", {
        class: true
      }, false);
      var div0_nodes = children(div0);
      button0.$$.fragment.l(div0_nodes);
      t3 = claim_space(div0_nodes);
      button1.$$.fragment.l(div0_nodes);
      t4 = claim_space(div0_nodes);
      button2.$$.fragment.l(div0_nodes);
      t5 = claim_space(div0_nodes);
      button3.$$.fragment.l(div0_nodes);
      t6 = claim_space(div0_nodes);
      button4.$$.fragment.l(div0_nodes);
      t7 = claim_space(div0_nodes);
      button5.$$.fragment.l(div0_nodes);
      t8 = claim_space(div0_nodes);
      button6.$$.fragment.l(div0_nodes);
      t9 = claim_space(div0_nodes);
      button7.$$.fragment.l(div0_nodes);
      div0_nodes.forEach(detach_dev);
      t10 = claim_space(section_nodes);
      div1 = claim_element(section_nodes, "DIV", {
        class: true
      }, false);
      var div1_nodes = children(div1);
      button8.$$.fragment.l(div1_nodes);
      t11 = claim_space(div1_nodes);
      button9.$$.fragment.l(div1_nodes);
      div1_nodes.forEach(detach_dev);
      t12 = claim_space(section_nodes);
      div2 = claim_element(section_nodes, "DIV", {
        class: true
      }, false);
      var div2_nodes = children(div2);
      t13 = claim_text(div2_nodes, "Secondary color: ");
      br0 = claim_element(div2_nodes, "BR", {
        class: true
      }, false);
      var br0_nodes = children(br0);
      br0_nodes.forEach(detach_dev);
      t14 = claim_space(div2_nodes);
      button10.$$.fragment.l(div2_nodes);
      t15 = claim_space(div2_nodes);
      button11.$$.fragment.l(div2_nodes);
      t16 = claim_space(div2_nodes);
      button12.$$.fragment.l(div2_nodes);
      t17 = claim_space(div2_nodes);
      button13.$$.fragment.l(div2_nodes);
      t18 = claim_space(div2_nodes);
      button14.$$.fragment.l(div2_nodes);
      t19 = claim_space(div2_nodes);
      button15.$$.fragment.l(div2_nodes);
      t20 = claim_space(div2_nodes);
      button16.$$.fragment.l(div2_nodes);
      t21 = claim_space(div2_nodes);
      button17.$$.fragment.l(div2_nodes);
      div2_nodes.forEach(detach_dev);
      t22 = claim_space(section_nodes);
      div3 = claim_element(section_nodes, "DIV", {
        class: true
      }, false);
      var div3_nodes = children(div3);
      button18.$$.fragment.l(div3_nodes);
      t23 = claim_space(div3_nodes);
      button19.$$.fragment.l(div3_nodes);
      div3_nodes.forEach(detach_dev);
      t24 = claim_space(section_nodes);
      div4 = claim_element(section_nodes, "DIV", {
        class: true
      }, false);
      var div4_nodes = children(div4);
      t25 = claim_text(div4_nodes, "Button groups: ");
      br1 = claim_element(div4_nodes, "BR", {
        class: true
      }, false);
      var br1_nodes = children(br1);
      br1_nodes.forEach(detach_dev);
      t26 = claim_space(div4_nodes);
      group0.$$.fragment.l(div4_nodes);
      t27 = claim_space(div4_nodes);
      group1.$$.fragment.l(div4_nodes);
      t28 = claim_space(div4_nodes);
      group2.$$.fragment.l(div4_nodes);
      t29 = claim_space(div4_nodes);
      group3.$$.fragment.l(div4_nodes);
      t30 = claim_space(div4_nodes);
      br2 = claim_element(div4_nodes, "BR", {
        class: true
      }, false);
      var br2_nodes = children(br2);
      br2_nodes.forEach(detach_dev);
      t31 = claim_space(div4_nodes);
      br3 = claim_element(div4_nodes, "BR", {
        class: true
      }, false);
      var br3_nodes = children(br3);
      br3_nodes.forEach(detach_dev);
      t32 = claim_space(div4_nodes);
      group4.$$.fragment.l(div4_nodes);
      div4_nodes.forEach(detach_dev);
      t33 = claim_space(section_nodes);
      div5 = claim_element(section_nodes, "DIV", {
        class: true
      }, false);
      var div5_nodes = children(div5);
      t34 = claim_text(div5_nodes, "Split buttons using a button group: ");
      br4 = claim_element(div5_nodes, "BR", {
        class: true
      }, false);
      var br4_nodes = children(br4);
      br4_nodes.forEach(detach_dev);
      t35 = claim_space(div5_nodes);
      group5.$$.fragment.l(div5_nodes);
      t36 = claim_space(div5_nodes);
      group6.$$.fragment.l(div5_nodes);
      div5_nodes.forEach(detach_dev);
      t37 = claim_space(section_nodes);
      pre = claim_element(section_nodes, "PRE", {
        class: true
      }, false);
      var pre_nodes = children(pre);
      t38 = claim_text(pre_nodes, "Clicked: ");
      t39 = claim_text(pre_nodes, ctx.clicked);
      pre_nodes.forEach(detach_dev);
      section_nodes.forEach(detach_dev);
      this.h();
    },
    h: function hydrate() {
      document.title = "Button - SMUI";
      attr_dev(h2, "class", "svelte-18uebmb");
      add_location(h2, file, 5, 2, 73);
      attr_dev(div0, "class", "svelte-18uebmb");
      add_location(div0, file, 7, 2, 92);
      attr_dev(div1, "class", "svelte-18uebmb");
      add_location(div1, file, 18, 2, 790);
      attr_dev(br0, "class", "svelte-18uebmb");
      add_location(br0, file, 24, 21, 1068);
      attr_dev(div2, "class", "svelte-18uebmb");
      add_location(div2, file, 23, 2, 1041);
      attr_dev(div3, "class", "svelte-18uebmb");
      add_location(div3, file, 35, 2, 1911);
      attr_dev(br1, "class", "svelte-18uebmb");
      add_location(br1, file, 41, 19, 2223);
      attr_dev(br2, "class", "svelte-18uebmb");
      add_location(br2, file, 63, 4, 3399);
      attr_dev(br3, "class", "svelte-18uebmb");
      add_location(br3, file, 63, 11, 3406);
      attr_dev(div4, "class", "svelte-18uebmb");
      add_location(div4, file, 40, 2, 2198);
      attr_dev(br4, "class", "svelte-18uebmb");
      add_location(br4, file, 73, 40, 3942);
      attr_dev(div5, "class", "svelte-18uebmb");
      add_location(div5, file, 72, 2, 3896);
      attr_dev(pre, "class", "status svelte-18uebmb");
      add_location(pre, file, 108, 2, 5473);
      attr_dev(section, "class", "svelte-18uebmb");
      add_location(section, file, 4, 0, 61);
    },
    m: function mount(target, anchor) {
      insert_dev(target, t0, anchor);
      insert_dev(target, section, anchor);
      append_dev(section, h2);
      append_dev(h2, t1);
      append_dev(section, t2);
      append_dev(section, div0);
      mount_component(button0, div0, null);
      append_dev(div0, t3);
      mount_component(button1, div0, null);
      append_dev(div0, t4);
      mount_component(button2, div0, null);
      append_dev(div0, t5);
      mount_component(button3, div0, null);
      append_dev(div0, t6);
      mount_component(button4, div0, null);
      append_dev(div0, t7);
      mount_component(button5, div0, null);
      append_dev(div0, t8);
      mount_component(button6, div0, null);
      append_dev(div0, t9);
      mount_component(button7, div0, null);
      append_dev(section, t10);
      append_dev(section, div1);
      mount_component(button8, div1, null);
      append_dev(div1, t11);
      mount_component(button9, div1, null);
      append_dev(section, t12);
      append_dev(section, div2);
      append_dev(div2, t13);
      append_dev(div2, br0);
      append_dev(div2, t14);
      mount_component(button10, div2, null);
      append_dev(div2, t15);
      mount_component(button11, div2, null);
      append_dev(div2, t16);
      mount_component(button12, div2, null);
      append_dev(div2, t17);
      mount_component(button13, div2, null);
      append_dev(div2, t18);
      mount_component(button14, div2, null);
      append_dev(div2, t19);
      mount_component(button15, div2, null);
      append_dev(div2, t20);
      mount_component(button16, div2, null);
      append_dev(div2, t21);
      mount_component(button17, div2, null);
      append_dev(section, t22);
      append_dev(section, div3);
      mount_component(button18, div3, null);
      append_dev(div3, t23);
      mount_component(button19, div3, null);
      append_dev(section, t24);
      append_dev(section, div4);
      append_dev(div4, t25);
      append_dev(div4, br1);
      append_dev(div4, t26);
      mount_component(group0, div4, null);
      append_dev(div4, t27);
      mount_component(group1, div4, null);
      append_dev(div4, t28);
      mount_component(group2, div4, null);
      append_dev(div4, t29);
      mount_component(group3, div4, null);
      append_dev(div4, t30);
      append_dev(div4, br2);
      append_dev(div4, t31);
      append_dev(div4, br3);
      append_dev(div4, t32);
      mount_component(group4, div4, null);
      append_dev(section, t33);
      append_dev(section, div5);
      append_dev(div5, t34);
      append_dev(div5, br4);
      append_dev(div5, t35);
      mount_component(group5, div5, null);
      append_dev(div5, t36);
      mount_component(group6, div5, null);
      append_dev(section, t37);
      append_dev(section, pre);
      append_dev(pre, t38);
      append_dev(pre, t39);
      current = true;
    },
    p: function update(changed, ctx) {
      var button0_changes = {};
      if (changed.$$scope) button0_changes.$$scope = {
        changed: changed,
        ctx: ctx
      };
      button0.$set(button0_changes);
      var button1_changes = {};
      if (changed.$$scope) button1_changes.$$scope = {
        changed: changed,
        ctx: ctx
      };
      button1.$set(button1_changes);
      var button2_changes = {};
      if (changed.$$scope) button2_changes.$$scope = {
        changed: changed,
        ctx: ctx
      };
      button2.$set(button2_changes);
      var button3_changes = {};
      if (changed.$$scope) button3_changes.$$scope = {
        changed: changed,
        ctx: ctx
      };
      button3.$set(button3_changes);
      var button4_changes = {};
      if (changed.$$scope) button4_changes.$$scope = {
        changed: changed,
        ctx: ctx
      };
      button4.$set(button4_changes);
      var button5_changes = {};
      if (changed.$$scope) button5_changes.$$scope = {
        changed: changed,
        ctx: ctx
      };
      button5.$set(button5_changes);
      var button6_changes = {};
      if (changed.$$scope) button6_changes.$$scope = {
        changed: changed,
        ctx: ctx
      };
      button6.$set(button6_changes);
      var button7_changes = {};
      if (changed.$$scope) button7_changes.$$scope = {
        changed: changed,
        ctx: ctx
      };
      button7.$set(button7_changes);
      var button8_changes = {};
      if (changed.$$scope) button8_changes.$$scope = {
        changed: changed,
        ctx: ctx
      };
      button8.$set(button8_changes);
      var button9_changes = {};
      if (changed.$$scope) button9_changes.$$scope = {
        changed: changed,
        ctx: ctx
      };
      button9.$set(button9_changes);
      var button10_changes = {};
      if (changed.$$scope) button10_changes.$$scope = {
        changed: changed,
        ctx: ctx
      };
      button10.$set(button10_changes);
      var button11_changes = {};
      if (changed.$$scope) button11_changes.$$scope = {
        changed: changed,
        ctx: ctx
      };
      button11.$set(button11_changes);
      var button12_changes = {};
      if (changed.$$scope) button12_changes.$$scope = {
        changed: changed,
        ctx: ctx
      };
      button12.$set(button12_changes);
      var button13_changes = {};
      if (changed.$$scope) button13_changes.$$scope = {
        changed: changed,
        ctx: ctx
      };
      button13.$set(button13_changes);
      var button14_changes = {};
      if (changed.$$scope) button14_changes.$$scope = {
        changed: changed,
        ctx: ctx
      };
      button14.$set(button14_changes);
      var button15_changes = {};
      if (changed.$$scope) button15_changes.$$scope = {
        changed: changed,
        ctx: ctx
      };
      button15.$set(button15_changes);
      var button16_changes = {};
      if (changed.$$scope) button16_changes.$$scope = {
        changed: changed,
        ctx: ctx
      };
      button16.$set(button16_changes);
      var button17_changes = {};
      if (changed.$$scope) button17_changes.$$scope = {
        changed: changed,
        ctx: ctx
      };
      button17.$set(button17_changes);
      var button18_changes = {};
      if (changed.$$scope) button18_changes.$$scope = {
        changed: changed,
        ctx: ctx
      };
      button18.$set(button18_changes);
      var button19_changes = {};
      if (changed.$$scope) button19_changes.$$scope = {
        changed: changed,
        ctx: ctx
      };
      button19.$set(button19_changes);
      var group0_changes = {};
      if (changed.$$scope) group0_changes.$$scope = {
        changed: changed,
        ctx: ctx
      };
      group0.$set(group0_changes);
      var group1_changes = {};
      if (changed.$$scope) group1_changes.$$scope = {
        changed: changed,
        ctx: ctx
      };
      group1.$set(group1_changes);
      var group2_changes = {};
      if (changed.$$scope) group2_changes.$$scope = {
        changed: changed,
        ctx: ctx
      };
      group2.$set(group2_changes);
      var group3_changes = {};
      if (changed.$$scope) group3_changes.$$scope = {
        changed: changed,
        ctx: ctx
      };
      group3.$set(group3_changes);
      var group4_changes = {};
      if (changed.$$scope) group4_changes.$$scope = {
        changed: changed,
        ctx: ctx
      };
      group4.$set(group4_changes);
      var group5_changes = {};
      if (changed.$$scope || changed.menu) group5_changes.$$scope = {
        changed: changed,
        ctx: ctx
      };
      group5.$set(group5_changes);
      var group6_changes = {};
      if (changed.$$scope || changed.menu2) group6_changes.$$scope = {
        changed: changed,
        ctx: ctx
      };
      group6.$set(group6_changes);

      if (!current || changed.clicked) {
        set_data_dev(t39, ctx.clicked);
      }
    },
    i: function intro(local) {
      if (current) return;
      transition_in(button0.$$.fragment, local);
      transition_in(button1.$$.fragment, local);
      transition_in(button2.$$.fragment, local);
      transition_in(button3.$$.fragment, local);
      transition_in(button4.$$.fragment, local);
      transition_in(button5.$$.fragment, local);
      transition_in(button6.$$.fragment, local);
      transition_in(button7.$$.fragment, local);
      transition_in(button8.$$.fragment, local);
      transition_in(button9.$$.fragment, local);
      transition_in(button10.$$.fragment, local);
      transition_in(button11.$$.fragment, local);
      transition_in(button12.$$.fragment, local);
      transition_in(button13.$$.fragment, local);
      transition_in(button14.$$.fragment, local);
      transition_in(button15.$$.fragment, local);
      transition_in(button16.$$.fragment, local);
      transition_in(button17.$$.fragment, local);
      transition_in(button18.$$.fragment, local);
      transition_in(button19.$$.fragment, local);
      transition_in(group0.$$.fragment, local);
      transition_in(group1.$$.fragment, local);
      transition_in(group2.$$.fragment, local);
      transition_in(group3.$$.fragment, local);
      transition_in(group4.$$.fragment, local);
      transition_in(group5.$$.fragment, local);
      transition_in(group6.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(button0.$$.fragment, local);
      transition_out(button1.$$.fragment, local);
      transition_out(button2.$$.fragment, local);
      transition_out(button3.$$.fragment, local);
      transition_out(button4.$$.fragment, local);
      transition_out(button5.$$.fragment, local);
      transition_out(button6.$$.fragment, local);
      transition_out(button7.$$.fragment, local);
      transition_out(button8.$$.fragment, local);
      transition_out(button9.$$.fragment, local);
      transition_out(button10.$$.fragment, local);
      transition_out(button11.$$.fragment, local);
      transition_out(button12.$$.fragment, local);
      transition_out(button13.$$.fragment, local);
      transition_out(button14.$$.fragment, local);
      transition_out(button15.$$.fragment, local);
      transition_out(button16.$$.fragment, local);
      transition_out(button17.$$.fragment, local);
      transition_out(button18.$$.fragment, local);
      transition_out(button19.$$.fragment, local);
      transition_out(group0.$$.fragment, local);
      transition_out(group1.$$.fragment, local);
      transition_out(group2.$$.fragment, local);
      transition_out(group3.$$.fragment, local);
      transition_out(group4.$$.fragment, local);
      transition_out(group5.$$.fragment, local);
      transition_out(group6.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      if (detaching) {
        detach_dev(t0);
        detach_dev(section);
      }

      destroy_component(button0);
      destroy_component(button1);
      destroy_component(button2);
      destroy_component(button3);
      destroy_component(button4);
      destroy_component(button5);
      destroy_component(button6);
      destroy_component(button7);
      destroy_component(button8);
      destroy_component(button9);
      destroy_component(button10);
      destroy_component(button11);
      destroy_component(button12);
      destroy_component(button13);
      destroy_component(button14);
      destroy_component(button15);
      destroy_component(button16);
      destroy_component(button17);
      destroy_component(button18);
      destroy_component(button19);
      destroy_component(group0);
      destroy_component(group1);
      destroy_component(group2);
      destroy_component(group3);
      destroy_component(group4);
      destroy_component(group5);
      destroy_component(group6);
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
  var menu;
  var menu2;

  var click_handler = function click_handler() {
    return $$invalidate('clicked', clicked++, clicked);
  };

  var click_handler_1 = function click_handler_1() {
    return $$invalidate('clicked', clicked++, clicked);
  };

  var click_handler_2 = function click_handler_2() {
    return $$invalidate('clicked', clicked++, clicked);
  };

  var click_handler_3 = function click_handler_3() {
    return $$invalidate('clicked', clicked++, clicked);
  };

  var click_handler_4 = function click_handler_4() {
    return $$invalidate('clicked', clicked++, clicked);
  };

  var click_handler_5 = function click_handler_5() {
    return $$invalidate('clicked', clicked++, clicked);
  };

  var click_handler_6 = function click_handler_6() {
    return $$invalidate('clicked', clicked++, clicked);
  };

  var click_handler_7 = function click_handler_7() {
    return $$invalidate('clicked', clicked++, clicked);
  };

  var click_handler_8 = function click_handler_8() {
    return $$invalidate('clicked', clicked++, clicked);
  };

  var click_handler_9 = function click_handler_9() {
    return $$invalidate('clicked', clicked++, clicked);
  };

  var click_handler_10 = function click_handler_10() {
    return $$invalidate('clicked', clicked++, clicked);
  };

  var click_handler_11 = function click_handler_11() {
    return $$invalidate('clicked', clicked++, clicked);
  };

  var click_handler_12 = function click_handler_12() {
    return $$invalidate('clicked', clicked++, clicked);
  };

  var click_handler_13 = function click_handler_13() {
    return $$invalidate('clicked', clicked++, clicked);
  };

  var click_handler_14 = function click_handler_14() {
    return $$invalidate('clicked', clicked++, clicked);
  };

  var click_handler_15 = function click_handler_15() {
    return $$invalidate('clicked', clicked++, clicked);
  };

  var click_handler_16 = function click_handler_16() {
    return $$invalidate('clicked', clicked++, clicked);
  };

  var click_handler_17 = function click_handler_17() {
    return $$invalidate('clicked', clicked++, clicked);
  };

  var click_handler_18 = function click_handler_18() {
    return $$invalidate('clicked', clicked++, clicked);
  };

  var click_handler_19 = function click_handler_19() {
    return $$invalidate('clicked', clicked++, clicked);
  };

  var click_handler_20 = function click_handler_20() {
    return $$invalidate('clicked', clicked++, clicked);
  };

  var click_handler_21 = function click_handler_21() {
    return $$invalidate('clicked', clicked++, clicked);
  };

  var click_handler_22 = function click_handler_22() {
    return $$invalidate('clicked', clicked++, clicked);
  };

  var click_handler_23 = function click_handler_23() {
    return $$invalidate('clicked', clicked++, clicked);
  };

  var click_handler_24 = function click_handler_24() {
    return $$invalidate('clicked', clicked++, clicked);
  };

  var click_handler_25 = function click_handler_25() {
    return $$invalidate('clicked', clicked++, clicked);
  };

  var click_handler_26 = function click_handler_26() {
    return $$invalidate('clicked', clicked++, clicked);
  };

  var click_handler_27 = function click_handler_27() {
    return $$invalidate('clicked', clicked++, clicked);
  };

  var click_handler_28 = function click_handler_28() {
    return $$invalidate('clicked', clicked++, clicked);
  };

  var click_handler_29 = function click_handler_29() {
    return $$invalidate('clicked', clicked++, clicked);
  };

  var click_handler_30 = function click_handler_30() {
    return $$invalidate('clicked', clicked++, clicked);
  };

  var click_handler_31 = function click_handler_31() {
    return $$invalidate('clicked', clicked++, clicked);
  };

  var click_handler_32 = function click_handler_32() {
    return $$invalidate('clicked', clicked++, clicked);
  };

  var click_handler_33 = function click_handler_33() {
    return $$invalidate('clicked', clicked++, clicked);
  };

  var click_handler_34 = function click_handler_34() {
    return $$invalidate('clicked', clicked++, clicked);
  };

  var click_handler_35 = function click_handler_35() {
    return $$invalidate('clicked', clicked++, clicked);
  };

  var click_handler_36 = function click_handler_36() {
    return menu.setOpen(true);
  };

  var SMUI_action_handler = function SMUI_action_handler() {
    return $$invalidate('clicked', clicked++, clicked);
  };

  var SMUI_action_handler_1 = function SMUI_action_handler_1() {
    return $$invalidate('clicked', clicked++, clicked);
  };

  var SMUI_action_handler_2 = function SMUI_action_handler_2() {
    return $$invalidate('clicked', clicked++, clicked);
  };

  function menu_1_binding($$value) {
    binding_callbacks[$$value ? 'unshift' : 'push'](function () {
      $$invalidate('menu', menu = $$value);
    });
  }

  var click_handler_37 = function click_handler_37() {
    return $$invalidate('clicked', clicked++, clicked);
  };

  var click_handler_38 = function click_handler_38() {
    return menu2.setOpen(true);
  };

  var SMUI_action_handler_3 = function SMUI_action_handler_3() {
    return $$invalidate('clicked', clicked++, clicked);
  };

  var SMUI_action_handler_4 = function SMUI_action_handler_4() {
    return $$invalidate('clicked', clicked++, clicked);
  };

  var SMUI_action_handler_5 = function SMUI_action_handler_5() {
    return $$invalidate('clicked', clicked++, clicked);
  };

  function menu_1_binding_1($$value) {
    binding_callbacks[$$value ? 'unshift' : 'push'](function () {
      $$invalidate('menu2', menu2 = $$value);
    });
  }

  $$self.$capture_state = function () {
    return {};
  };

  $$self.$inject_state = function ($$props) {
    if ('clicked' in $$props) $$invalidate('clicked', clicked = $$props.clicked);
    if ('menu' in $$props) $$invalidate('menu', menu = $$props.menu);
    if ('menu2' in $$props) $$invalidate('menu2', menu2 = $$props.menu2);
  };

  return {
    clicked: clicked,
    menu: menu,
    menu2: menu2,
    click_handler: click_handler,
    click_handler_1: click_handler_1,
    click_handler_2: click_handler_2,
    click_handler_3: click_handler_3,
    click_handler_4: click_handler_4,
    click_handler_5: click_handler_5,
    click_handler_6: click_handler_6,
    click_handler_7: click_handler_7,
    click_handler_8: click_handler_8,
    click_handler_9: click_handler_9,
    click_handler_10: click_handler_10,
    click_handler_11: click_handler_11,
    click_handler_12: click_handler_12,
    click_handler_13: click_handler_13,
    click_handler_14: click_handler_14,
    click_handler_15: click_handler_15,
    click_handler_16: click_handler_16,
    click_handler_17: click_handler_17,
    click_handler_18: click_handler_18,
    click_handler_19: click_handler_19,
    click_handler_20: click_handler_20,
    click_handler_21: click_handler_21,
    click_handler_22: click_handler_22,
    click_handler_23: click_handler_23,
    click_handler_24: click_handler_24,
    click_handler_25: click_handler_25,
    click_handler_26: click_handler_26,
    click_handler_27: click_handler_27,
    click_handler_28: click_handler_28,
    click_handler_29: click_handler_29,
    click_handler_30: click_handler_30,
    click_handler_31: click_handler_31,
    click_handler_32: click_handler_32,
    click_handler_33: click_handler_33,
    click_handler_34: click_handler_34,
    click_handler_35: click_handler_35,
    click_handler_36: click_handler_36,
    SMUI_action_handler: SMUI_action_handler,
    SMUI_action_handler_1: SMUI_action_handler_1,
    SMUI_action_handler_2: SMUI_action_handler_2,
    menu_1_binding: menu_1_binding,
    click_handler_37: click_handler_37,
    click_handler_38: click_handler_38,
    SMUI_action_handler_3: SMUI_action_handler_3,
    SMUI_action_handler_4: SMUI_action_handler_4,
    SMUI_action_handler_5: SMUI_action_handler_5,
    menu_1_binding_1: menu_1_binding_1
  };
}

var Button_1 =
/*#__PURE__*/
function (_SvelteComponentDev) {
  _inherits(Button_1, _SvelteComponentDev);

  function Button_1(options) {
    var _this;

    _classCallCheck(this, Button_1);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Button_1).call(this, options));
    if (!document.getElementById("svelte-18uebmb-style")) add_css();
    init(_assertThisInitialized(_this), options, instance, create_fragment, safe_not_equal, []);
    dispatch_dev("SvelteRegisterComponent", {
      component: _assertThisInitialized(_this),
      tagName: "Button_1",
      options: options,
      id: create_fragment.name
    });
    return _this;
  }

  return Button_1;
}(SvelteComponentDev);

export default Button_1;

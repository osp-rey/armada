import "../scss/style.scss";
import burger from "./files/burger.js";
import more from "./files/more.js";
import sliders from "./files/sliders.js";
import tab from "./files/tab.js";

burger();
sliders();
more();
tab();
Fancybox.bind("[data-fancybox]", {
  closeButton: false,
});
// Fancybox.show([{type: "inline", src: "#modal-order"}])

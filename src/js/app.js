import "../scss/style.scss";
import anchors from "./files/anchors.js";
import burger from "./files/burger.js";
import calcPurpose from "./files/calcPurpose.js";
import headerScroll from "./files/headerScroll.js";
import inputmask from "./files/inputmask.js";
import map from "./files/map.js";
import more from "./files/more.js";
import sliders from "./files/sliders.js";
import tab from "./files/tab.js";

document.addEventListener("DOMContentLoaded", () => {
  burger();
  sliders();
  more();
  tab();
  calcPurpose();
  inputmask();
  map();
  headerScroll();
  anchors();

  Fancybox.bind("[data-fancybox]", {
    closeButton: false,
  });
  // Fancybox.show([{ type: "inline", src: "#modal-calc" }]);
});

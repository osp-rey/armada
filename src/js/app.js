import "../scss/style.scss";
import burger from "./files/burger.js";
import spoller from "./files/spoller.js";

burger();
Fancybox.bind("[data-fancybox]", {
  closeButton: false,
});
// Fancybox.show([{type: "inline", src: "#modal-order"}])

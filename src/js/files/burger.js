export default function burger() {
  const burgerOpen = document.querySelector("#burger-open");
  const burgerClose = document.querySelector("#burger-close");
  const burger = document.querySelector("#burger");
  const burgerOverlay = document.querySelector("#burger-overlay");

  if (burger) {
    const menuButtons = burger.querySelectorAll(".burger__list a");

    menuButtons.forEach((btn) =>
      btn.addEventListener("click", handlerBurgerClose)
    );

    burger.addEventListener("click", (e) => e.stopPropagation());

    burgerOverlay.addEventListener("click", handlerBurgerClose);

    burgerOpen.addEventListener("click", (e) => {
      e.stopPropagation();

      if (burgerOpen.classList.contains("_active")) {
        handlerBurgerClose();
      } else {
        handlerBurgerOpen();
      }
    });
    burgerClose.addEventListener("click", (e) => {
      e.stopPropagation();
      handlerBurgerClose();
    });

    function handlerBurgerClose() {
      burgerOpen.classList.remove("_active");
      burger.classList.remove("_open");
      burgerOverlay.classList.remove("_active");
      document.body.classList.remove("body-hidden");
    }

    function handlerBurgerOpen() {
      burgerOpen.classList.add("_active");
      burger.classList.add("_open");
      burgerOverlay.classList.add("_active");
      document.body.classList.add("body-hidden");
    }
  }
}

export default function calcPurpose() {
  const buttons = document.querySelectorAll("[data-calc-purpose]");

  if (buttons.length) {
    const input = document.querySelector("#calc-purpose-input")

    buttons.forEach(btn => {
      btn.addEventListener("click", () => {
        const value = btn.dataset.calcPurpose;

        input.value = value;
      })
    })
  }
}
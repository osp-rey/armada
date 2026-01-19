export default function anchors() {
  const containers = document.querySelectorAll(".anchors");

  if (containers.length) {
    const headerHeight = document.querySelector(".header").clientHeight;

    containers.forEach((container) => {
      const links = container.querySelectorAll("a");
  
      links.forEach(link => {
        link.addEventListener("click", function (e) {
          e.preventDefault();
    
          let href = this.getAttribute("href").substring(1);
    
          const scrollTarget = document.getElementById(href);
    
          if (scrollTarget) {
            window.scrollBy({
              top: scrollTarget.getBoundingClientRect().top - headerHeight,
              behavior: "smooth",
            });
          }
        });
      })
    });
  }

}
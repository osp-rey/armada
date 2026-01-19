(() => {
    "use strict";
    function anchors_anchors() {
        const containers = document.querySelectorAll(".anchors");
        if (containers.length) {
            const headerHeight = document.querySelector(".header").clientHeight;
            containers.forEach(container => {
                const links = container.querySelectorAll("a");
                links.forEach(link => {
                    link.addEventListener("click", function(e) {
                        e.preventDefault();
                        let href = this.getAttribute("href").substring(1);
                        const scrollTarget = document.getElementById(href);
                        if (scrollTarget) window.scrollBy({
                            top: scrollTarget.getBoundingClientRect().top - headerHeight,
                            behavior: "smooth"
                        });
                    });
                });
            });
        }
    }
    function burger() {
        const burgerOpen = document.querySelector("#burger-open");
        const burgerClose = document.querySelector("#burger-close");
        const burger = document.querySelector("#burger");
        const burgerOverlay = document.querySelector("#burger-overlay");
        if (burger) {
            const menuButtons = burger.querySelectorAll(".burger__list a");
            menuButtons.forEach(btn => btn.addEventListener("click", handlerBurgerClose));
            burger.addEventListener("click", e => e.stopPropagation());
            burgerOverlay.addEventListener("click", handlerBurgerClose);
            burgerOpen.addEventListener("click", e => {
                e.stopPropagation();
                if (burgerOpen.classList.contains("_active")) handlerBurgerClose(); else handlerBurgerOpen();
            });
            burgerClose.addEventListener("click", e => {
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
    function calcPurpose() {
        const buttons = document.querySelectorAll("[data-calc-purpose]");
        if (buttons.length) {
            const input = document.querySelector("#calc-purpose-input");
            buttons.forEach(btn => {
                btn.addEventListener("click", () => {
                    const value = btn.dataset.calcPurpose;
                    input.value = value;
                });
            });
        }
    }
    function headerScroll() {
        const header = document.querySelector(".header");
        if (header) {
            let lastScrollTop = 0;
            window.addEventListener("scroll", () => {
                let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
                if (scrollTop > lastScrollTop && scrollTop > header.clientHeight) header.classList.add("_scroll"); else header.classList.remove("_scroll");
                lastScrollTop = scrollTop;
            });
        }
    }
    function inputmask() {
        const inputs = document.querySelectorAll('input[type="tel"]');
        const im = new Inputmask("+7 (999) 999-99-99");
        im.mask(inputs);
    }
    function createScript(url, type) {
        if (!url) return;
        return new Promise((resolve, reject) => {
            const script = document.querySelector(`script[src="${url}"]`);
            if (script) resolve(script); else {
                const htmlScript = document.createElement("script");
                htmlScript.src = url;
                if (type) htmlScript.type = type;
                htmlScript.onload = () => {
                    resolve(htmlScript);
                };
                htmlScript.onerror = () => {
                    reject(new Error(`Не удалось загрузить скрипт: ${url}`));
                };
                document.head.appendChild(htmlScript);
            }
        });
    }
    function map() {
        const maps = document.querySelectorAll(".map");
        if (maps.length) {
            maps.forEach(map => {
                const options = {
                    root: null,
                    rootMargin: "0px",
                    scrollMargin: "0px",
                    threshold: .01
                };
                function callback(entries, observer) {
                    entries.forEach(entry => {
                        const target = entry.target;
                        if (entry.isIntersecting) {
                            createScript("https://api-maps.yandex.ru/2.1/?apikey=b46e9249-4925-4460-b11c-3aaf76ad0115&lang=ru_RU", "text/javascript").then(() => handlerCreateMap(target));
                            observer.unobserve(target);
                        }
                    });
                }
                const observer = new IntersectionObserver(callback, options);
                observer.observe(map);
            });
            function handlerCreateMap(map) {
                const center = JSON.parse(map.dataset.center);
                const zoom = Number(map.dataset.zoom);
                const iconHref = map.dataset.icon;
                let objectMark = {};
                if (iconHref) objectMark = {
                    iconLayout: "default#image",
                    iconImageHref: iconHref,
                    iconImageSize: [ 80, 80 ],
                    iconImageOffset: [ -30, -40 ]
                };
                function init() {
                    const htmlMap = new ymaps.Map(map, {
                        center,
                        zoom
                    });
                    const placemark = new ymaps.Placemark(center, {}, objectMark);
                    htmlMap.geoObjects.add(placemark);
                    htmlMap.controls.remove("geolocationControl");
                    htmlMap.controls.remove("searchControl");
                    htmlMap.controls.remove("trafficControl");
                    htmlMap.controls.remove("typeSelector");
                    htmlMap.controls.remove("fullscreenControl");
                    htmlMap.controls.remove("rulerControl");
                    htmlMap.behaviors.disable([ "scrollZoom" ]);
                }
                ymaps.ready(init);
            }
        }
    }
    function more() {
        const containers = document.querySelectorAll(".container-more");
        if (containers.length) containers.forEach(container => {
            const btn = container.querySelector("[data-more-btn]");
            const count = +container.dataset.countShow;
            const hideItems = Array.from(container.querySelectorAll("[data-more-item]")).filter(item => window.getComputedStyle(item).display === "none");
            if (hideItems.length === 0) btn.remove();
            btn.addEventListener("click", () => {
                const items = container.querySelectorAll("[data-more-item]");
                const hideItems = Array.from(items).filter(item => window.getComputedStyle(item).display === "none");
                hideItems.splice(0, count).forEach(item => {
                    item.classList.add("_open");
                    setTimeout(() => {
                        item.classList.add("_show");
                    });
                });
                if (hideItems.length <= 0) btn.remove();
            });
        });
    }
    function sliders() {
        const sliderNavServices = document.querySelector(".s-services__nav-slider");
        if (sliderNavServices) {
            new Swiper(sliderNavServices, {
                speed: 900,
                slidesPerView: "auto",
                spaceBetween: 20,
                navigation: {
                    prevEl: ".s-services .slider-arrow._prev",
                    nextEl: ".s-services .slider-arrow._next"
                },
                breakpoints: {
                    1200: {
                        slidesPerView: 4,
                        spaceBetween: 30
                    },
                    992: {
                        slidesPerView: 3,
                        spaceBetween: 20
                    }
                }
            });
        }
        const sliderTeam = document.querySelector(".s-team__slider");
        if (sliderTeam) {
            new Swiper(sliderTeam, {
                speed: 900,
                slidesPerView: 1,
                spaceBetween: 15,
                navigation: {
                    prevEl: ".s-team .slider-arrow._prev",
                    nextEl: ".s-team .slider-arrow._next"
                },
                pagination: {
                    clickable: true,
                    el: ".s-team .slider-pagination"
                },
                breakpoints: {
                    992: {
                        slidesPerView: 4,
                        spaceBetween: 15
                    },
                    768: {
                        slidesPerView: 3,
                        spaceBetween: 15
                    },
                    480: {
                        slidesPerView: 2,
                        spaceBetween: 15
                    }
                }
            });
        }
    }
    function tab() {
        const buttons = document.querySelectorAll("[data-tab-btn]");
        if (buttons.length) buttons.forEach(btn => {
            btn.addEventListener("click", () => {
                const container = btn.closest(".tabs");
                const tabId = btn.dataset.tabBtn;
                const allButtons = container.querySelector(".tabs-nav").querySelectorAll("[data-tab-btn]");
                const allTabs = Array.from(container.querySelector(".tabs-content").children).filter(child => child.hasAttribute("data-tab"));
                const currentTab = container.querySelector(`[data-tab="${tabId}"]`);
                allTabs.forEach(t => {
                    t.classList.remove("_show");
                    t.classList.remove("_active");
                });
                currentTab.classList.add("_active");
                setTimeout(() => {
                    currentTab.classList.add("_show");
                }, 150);
                allButtons.forEach(b => b.classList.remove("_active"));
                btn.classList.add("_active");
            });
        });
    }
    document.addEventListener("DOMContentLoaded", () => {
        burger();
        sliders();
        more();
        tab();
        calcPurpose();
        inputmask();
        map();
        headerScroll();
        anchors_anchors();
        Fancybox.bind("[data-fancybox]", {
            closeButton: false
        });
    });
})();
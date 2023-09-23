// navbar-fixed
window.onscroll = function () {
    const header = document.querySelector("header");
    const fixednav = header.offsetTop;

    if (window.pageYOffset > fixednav) {
        header.classList.add("navbar-fixed");
    } else {
        header.classList.remove("navbar-fixed");
    }
};

// hamburger
const hamburger = document.querySelector("#hamburger");
const navMenu = document.querySelector("#nav-menu");
hamburger.addEventListener("click", function () {
    hamburger.classList.toggle("hamburger-active");
    navMenu.classList.toggle("hidden");
});

// clear before unload
window.onbeforeunload = () => {
    for (const from of document.getElementsByTagName("form")) {
        from.reset();
    }
};

/* =====================================================
   ARCONEST CONSULTANTS
   SHARED JAVASCRIPT
===================================================== */


/* ---------- MOBILE MENU ---------- */

const menuToggle = document.getElementById("menuToggle");
const menuClose = document.getElementById("menuClose");
const mobileMenu = document.getElementById("mobileMenu");


/* Open menu */

if (menuToggle && mobileMenu) {

    menuToggle.addEventListener("click", () => {

        mobileMenu.classList.add("active");

        document.body.style.overflow = "hidden";

    });

}


/* Close menu */

if (menuClose && mobileMenu) {

    menuClose.addEventListener("click", () => {

        mobileMenu.classList.remove("active");

        document.body.style.overflow = "";

    });

}


/* Close menu after clicking a link */

const mobileLinks =
    document.querySelectorAll(".mobile-nav-link");


mobileLinks.forEach(link => {

    link.addEventListener("click", () => {

        mobileMenu.classList.remove("active");

        document.body.style.overflow = "";

    });

});


/* ---------- NAVBAR SCROLL EFFECT ---------- */

const navbar =
    document.querySelector(".arconest-navbar");


let lastScroll = 0;


window.addEventListener("scroll", () => {

    if (!navbar) return;

    const currentScroll = window.scrollY;


    if (currentScroll > 80) {

        navbar.style.boxShadow =
            "0 18px 45px rgba(0,0,0,0.12)";

        navbar.style.transform =
            "translateY(-4px)";

    } else {

        navbar.style.boxShadow =
            "0 12px 35px rgba(0,0,0,0.08)";

        navbar.style.transform =
            "translateY(0)";

    }


    lastScroll = currentScroll;

}, { passive: true });


/* ---------- ESC KEY ---------- */

document.addEventListener("keydown", (event) => {

    if (event.key === "Escape") {

        if (mobileMenu) {

            mobileMenu.classList.remove("active");

            document.body.style.overflow = "";

        }

    }

});

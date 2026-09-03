/* =====================================================
   ARCONEST CONSULTANTS
   SHARED NAVIGATION JAVASCRIPT
===================================================== */

document.addEventListener("DOMContentLoaded", () => {

    const menuTrigger = document.getElementById("menuTrigger");
    const menuClose = document.getElementById("menuClose");
    const mobileMenu = document.getElementById("mobileMenu");

    if (!menuTrigger || !mobileMenu) return;


    /* =================================================
       OPEN MENU
    ================================================= */

    function openMenu() {

        mobileMenu.classList.add("is-open");

        menuTrigger.setAttribute("aria-expanded", "true");

        menuTrigger.setAttribute("aria-label", "Close navigation");

        document.body.classList.add("menu-open");

    }


    /* =================================================
       CLOSE MENU
    ================================================= */

    function closeMenu() {

        mobileMenu.classList.remove("is-open");

        menuTrigger.setAttribute("aria-expanded", "false");

        menuTrigger.setAttribute("aria-label", "Open navigation");

        document.body.classList.remove("menu-open");

    }


    /* =================================================
       TOGGLE
    ================================================= */

    menuTrigger.addEventListener("click", () => {

        const isOpen =
            mobileMenu.classList.contains("is-open");

        if (isOpen) {

            closeMenu();

        } else {

            openMenu();

        }

    });


    /* =================================================
       CLOSE BUTTON
    ================================================= */

    if (menuClose) {

        menuClose.addEventListener("click", closeMenu);

    }


    /* =================================================
       CLOSE AFTER CLICKING A LINK
    ================================================= */

    const mobileLinks =
        document.querySelectorAll(".mobile-nav-link");

    mobileLinks.forEach(link => {

        link.addEventListener("click", () => {

            closeMenu();

        });

    });


    /* =================================================
       ESC KEY
    ================================================= */

    document.addEventListener("keydown", event => {

        if (event.key === "Escape") {

            closeMenu();

        }

    });


    /* =================================================
       PREVENT BODY SCROLL WHEN MENU IS OPEN
    ================================================= */

    const style = document.createElement("style");

    style.textContent = `
        body.menu-open {
            overflow: hidden;
        }
    `;

    document.head.appendChild(style);


    /* =================================================
       SMART ACTIVE PAGE
    ================================================= */

    const currentPage =
        window.location.pathname
            .split("/")
            .pop() || "index.html";


    document
        .querySelectorAll(".nav-link, .mobile-nav-link")
        .forEach(link => {

            const linkPage =
                link.getAttribute("href")
                    ?.split("/")
                    .pop();

            if (linkPage === currentPage) {

                link.classList.add("active");

            } else {

                link.classList.remove("active");

            }

        });


    /* =================================================
       NAVBAR SCROLL EFFECT
    ================================================= */

    const navbar =
        document.querySelector(".navbar-inner");


    function handleNavbarScroll() {

        if (!navbar) return;


        if (window.scrollY > 50) {

            navbar.classList.add("navbar-scrolled");

        } else {

            navbar.classList.remove("navbar-scrolled");

        }

    }


    window.addEventListener(
        "scroll",
        handleNavbarScroll,
        { passive: true }
    );


    handleNavbarScroll();

});

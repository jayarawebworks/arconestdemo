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

// =====================================================
// SERVICES — INTERACTIVE SERVICE EXPLORER
// =====================================================

const serviceData = {

    management: {
        number: "01",
        title: "All-Inclusive<br>Construction Management",
        description:
            "Structured construction management that brings planning, coordination, supervision and execution together to maintain clarity throughout the project."
    },

    estimates: {
        number: "02",
        title: "Detailed<br>Quantity Estimates",
        description:
            "Detailed quantity estimation to support accurate planning, measurement and informed construction decisions."
    },

    budgeting: {
        number: "03",
        title: "Budgeting<br>& Costing",
        description:
            "Clear budgeting and costing support designed to help establish realistic project costs and maintain financial control."
    },

    billing: {
        number: "04",
        title: "Construction Site<br>Billing Assistance",
        description:
            "Technical assistance with construction site billing to bring greater clarity and structure to project documentation and billing processes."
    },

    bim: {
        number: "05",
        title: "BIM<br>Services",
        description:
            "Building Information Modeling services that support better coordination, visualization and project understanding."
    },

    audit: {
        number: "06",
        title: "Structural<br>Audit Services",
        description:
            "Structural audit services focused on assessing existing structures and providing technical understanding for informed decisions."
    },

    technical: {
        number: "07",
        title: "Technical Assistance<br>on Construction",
        description:
            "Technical construction assistance that helps clients and project stakeholders address site-level requirements with greater clarity."
    },

    turnkey: {
        number: "08",
        title: "Turnkey Contractors<br>for Luxury Construction",
        description:
            "Turnkey construction support for luxury projects, bringing technical coordination and execution under a structured approach."
    }

};


document.querySelectorAll(".explorer-item").forEach(item => {

    item.addEventListener("click", () => {

        const key = item.dataset.service;
        const data = serviceData[key];

        if (!data) return;


        document.querySelectorAll(".explorer-item")
            .forEach(button => button.classList.remove("active"));

        item.classList.add("active");


        const detail = document.querySelector(".explorer-detail");

        detail.querySelector(".detail-number").textContent =
            data.number;

        detail.querySelector("h3").innerHTML =
            data.title;

        detail.querySelector("p").textContent =
            data.description;

        detail.querySelector(".detail-meta span:last-child")
            .textContent = `${data.number} / 08`;

    });

});

/* =========================================================
   MOBILE NAVIGATION
========================================================= */

const menuToggle = document.getElementById("menuToggle");
const navMenu = document.getElementById("navMenu");
const navLinks = document.querySelectorAll(".nav-link");


menuToggle.addEventListener("click", () => {

    const isOpen = navMenu.classList.toggle("open");

    menuToggle.setAttribute(
        "aria-expanded",
        isOpen
    );

    menuToggle.setAttribute(
        "aria-label",
        isOpen
            ? "Close navigation menu"
            : "Open navigation menu"
    );

});


/* Close mobile menu after clicking a link */

navLinks.forEach(link => {

    link.addEventListener("click", () => {

        navMenu.classList.remove("open");

        menuToggle.setAttribute(
            "aria-expanded",
            "false"
        );

        menuToggle.setAttribute(
            "aria-label",
            "Open navigation menu"
        );

    });

});


/* =========================================================
   ACTIVE NAVIGATION
========================================================= */

const sections = document.querySelectorAll(
    "main section[id]"
);


const updateActiveNavigation = () => {

    let currentSection = "home";

    sections.forEach(section => {

        const sectionTop =
            section.offsetTop - 150;

        if (
            window.scrollY >= sectionTop
        ) {
            currentSection = section.id;
        }

    });


    navLinks.forEach(link => {

        link.classList.remove("active");

        if (
            link.getAttribute("href") ===
            `#${currentSection}`
        ) {

            link.classList.add("active");

        }

    });

};


window.addEventListener(
    "scroll",
    updateActiveNavigation
);

updateActiveNavigation();


/* =========================================================
   PROJECT DATA
========================================================= */

const projects = {

    noise: {

        category: "IoT / Embedded System",

        title: "Automatic Noise Controller",

        image: "images/noise-controller.jpg",

        description:
            "An IoT-based project designed to detect excessive noise levels and provide an automatic response when the noise exceeds a defined threshold.",

        problem:
            "The project addresses the need to detect excessive noise levels and respond automatically when the detected noise passes a defined threshold.",

        contribution:
            "Academic project contribution involving the development and practical implementation of the proposed IoT-based solution.",

        tools:
            "IoT, sensors, embedded system concepts",

        link:
            "Link coming soon"

    },


    rain: {

        category: "IoT / Embedded System",

        title: "Automatic Rain Awareness System",

        image: "images/rain-awareness.jpg",

        description:
            "An IoT-based system that detects rainfall using a sensor and provides an automatic response based on the detected condition.",

        problem:
            "The project addresses the need to detect rainfall automatically and respond according to the detected environmental condition.",

        contribution:
            "Academic project contribution involving the development and practical implementation of the rain detection solution.",

        tools:
            "IoT, rain sensor, Arduino, embedded system concepts",

        link:
            "Link coming soon"

    },


    checkout: {

        category: "UI/UX Design",

        title: "E-commerce Checkout Page",

        image: "images/checkout-page.jpg",

        description:
            "A user-friendly checkout interface designed in Figma with a focus on clear information hierarchy and simple navigation.",

        problem:
            "The interface focuses on presenting checkout information in a clear and organized way so users can understand the purchasing process easily.",

        contribution:
            "Designed the checkout interface with attention to information hierarchy, layout structure and user-friendly navigation.",

        tools:
            "Figma, UI/UX Design",

        link:
            "Link coming soon"

    }

};


/* =========================================================
   PROJECT MODAL
========================================================= */

const projectModal =
    document.getElementById("projectModal");

const modalClose =
    document.getElementById("modalClose");

const modalImage =
    document.getElementById("modalImage");

const modalCategory =
    document.getElementById("modalCategory");

const modalTitle =
    document.getElementById("modalTitle");

const modalDescription =
    document.getElementById("modalDescription");

const modalProblem =
    document.getElementById("modalProblem");

const modalContribution =
    document.getElementById("modalContribution");

const modalTools =
    document.getElementById("modalTools");

const modalLink =
    document.getElementById("modalLink");


const projectButtons =
    document.querySelectorAll(".project-button");


let lastFocusedElement = null;


/* Open modal */

projectButtons.forEach(button => {

    button.addEventListener("click", () => {

        const projectId =
            button.dataset.project;

        const project =
            projects[projectId];

        if (!project) {
            return;
        }


        lastFocusedElement = button;


        modalImage.src =
            project.image;

        modalImage.alt =
            `${project.title} project screenshot`;

        modalCategory.textContent =
            project.category;

        modalTitle.textContent =
            project.title;

        modalDescription.textContent =
            project.description;

        modalProblem.textContent =
            project.problem;

        modalContribution.textContent =
            project.contribution;

        modalTools.textContent =
            project.tools;

        modalLink.textContent =
            project.link;


        projectModal.classList.add("active");

        projectModal.setAttribute(
            "aria-hidden",
            "false"
        );

        document.body.style.overflow =
            "hidden";

        modalClose.focus();

    });

});


/* Close modal */

const closeModal = () => {

    projectModal.classList.remove("active");

    projectModal.setAttribute(
        "aria-hidden",
        "true"
    );

    document.body.style.overflow =
        "";

    if (lastFocusedElement) {

        lastFocusedElement.focus();

    }

};


modalClose.addEventListener(
    "click",
    closeModal
);


/* Click outside modal */

projectModal.addEventListener(
    "click",
    event => {

        if (
            event.target === projectModal
        ) {

            closeModal();

        }

    }
);


/* ESC key */

document.addEventListener(
    "keydown",
    event => {

        if (
            event.key === "Escape" &&
            projectModal.classList.contains("active")
        ) {

            closeModal();

        }

    }
);


/* =========================================================
   SCROLL REVEAL
========================================================= */

const revealElements =
    document.querySelectorAll(".reveal");


const revealObserver =
    new IntersectionObserver(
        entries => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.classList.add(
                        "visible"
                    );

                    revealObserver.unobserve(
                        entry.target
                    );

                }

            });

        },
        {
            threshold: 0.12
        }
    );


revealElements.forEach(element => {

    revealObserver.observe(element);

});




/* =========================================================
   SMOOTH ANCHOR NAVIGATION
========================================================= */

document.querySelectorAll(
    'a[href^="#"]'
).forEach(anchor => {

    anchor.addEventListener(
        "click",
        event => {

            const targetId =
                anchor.getAttribute("href");

            if (
                targetId === "#" ||
                !targetId
            ) {
                return;
            }


            const target =
                document.querySelector(targetId);

            if (!target) {
                return;
            }


            event.preventDefault();


            target.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });

        }
    );

});



/* =========================================================
   CONTACT FORM
========================================================= */

const contactForm = document.getElementById("contactForm");

if (contactForm) {

    contactForm.addEventListener("submit", function (event) {

        event.preventDefault();

        const name =
            document.getElementById("name").value.trim();

        const email =
            document.getElementById("email").value.trim();

        const message =
            document.getElementById("message").value.trim();


        // Gmail subject
        const subject = encodeURIComponent(
            `Portfolio Contact from ${name}`
        );


        // Gmail message body
        const body = encodeURIComponent(
            `Hello Rameswaran,\n\n` +
            `Name: ${name}\n` +
            `Email: ${email}\n\n` +
            `Message:\n${message}\n\n` +
            `Sent from your portfolio website.`
        );


        // Open Gmail compose window
        const gmailURL =
            `https://mail.google.com/mail/?view=cm&fs=1` +
            `&to=rameswaranthajelan08@gmail.com` +
            `&su=${subject}` +
            `&body=${body}`;


        window.open(
            gmailURL,
            "_blank"
        );


        // Show message
        const formMessage =
            document.getElementById("formMessage");

        if (formMessage) {

            formMessage.textContent =
                "Gmail has been opened with your message.";

        }

    });

}


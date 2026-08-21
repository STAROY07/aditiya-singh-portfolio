/* =========================
   MOBILE MENU
========================= */

const menuBtn = document.getElementById("menuBtn");
const navMenu = document.getElementById("navMenu");

if (menuBtn && navMenu) {

    menuBtn.addEventListener("click", () => {

        navMenu.classList.toggle("show");

    });


    const navLinks = navMenu.querySelectorAll("a");

    navLinks.forEach(link => {

        link.addEventListener("click", () => {

            navMenu.classList.remove("show");

        });

    });

}


/* =========================
   CONTACT MESSAGE
========================= */

const contactForm = document.getElementById("contactForm");

if (contactForm) {

    contactForm.addEventListener("submit", function (event) {

        event.preventDefault();


        const name =
            document.getElementById("visitorName").value.trim();

        const email =
            document.getElementById("visitorEmail").value.trim();

        const message =
            document.getElementById("visitorMessage").value.trim();


        if (!name || !email || !message) {

            alert("Please fill in all the fields.");

            return;

        }


        const subject =
            encodeURIComponent(
                "Portfolio Contact - " + name
            );


        const body =
            encodeURIComponent(
                "Hello Aditiya,\n\n" +
                "Name: " + name + "\n" +
                "Email: " + email + "\n\n" +
                "Message:\n" +
                message +
                "\n\nSent from your portfolio website."
            );


        const mailURL =
            "mailto:singhaditiya007@gmail.com" +
            "?subject=" + subject +
            "&body=" + body;


        window.location.href = mailURL;

    });

}
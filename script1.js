document.addEventListener("DOMContentLoaded", function () {
    // Smooth scrolling for navigation links
    document.querySelectorAll("nav a").forEach(anchor => {
        anchor.addEventListener("click", function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute("href")).scrollIntoView({
                behavior: "smooth"
            });
        });
    });

    // Hover effect for sections
    document.querySelectorAll("section").forEach(section => {
        section.addEventListener("mouseenter", function () {
            this.style.backgroundColor = "#e0f7fa";
        });
        section.addEventListener("mouseleave", function () {
            this.style.backgroundColor = "white";
        });
    });

    // Scroll functionality for arrow buttons
    document.querySelectorAll('.arrow').forEach(arrow => {
        arrow.addEventListener('click', function () {
            const targetSection = document.querySelector(this.getAttribute('data-target'));
            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
});

// Collapsible Sections (Andy feedback)
const toggles = document.querySelectorAll(".collapse-toggle");

toggles.forEach(btn => {
    btn.addEventListener("click", () => {
        const content = btn.nextElementSibling;
        content.style.display =
            content.style.display === "block" ? "none" : "block";
    });
});

// Scroll Reveal
const revealElements = document.querySelectorAll(".reveal");

function revealOnScroll() {
    revealElements.forEach(el => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight - 50) {
            el.classList.add("visible");
        }
    });
}

window.addEventListener("scroll", revealOnScroll);
revealOnScroll();

console.log("Website loaded!");

const DEFAULT_PREVIEW_TEXT = "The quick brown fox jumps over the lazy dog.";

/* =========================
   Live Preview Typing
   ========================= */
const input = document.getElementById("userInput");
const preview = document.getElementById("preview");

preview.textContent = DEFAULT_PREVIEW_TEXT;

input.addEventListener("input", () => {
    preview.textContent = input.value === "" ? DEFAULT_PREVIEW_TEXT : input.value;

    preview.classList.remove("animate");
    void preview.offsetWidth; // restart animation
    preview.classList.add("animate");
});

/* =========================
   Font Controls (size + spacing)
   ========================= */
const fontSizeSlider = document.getElementById("fontSize");
fontSizeSlider.addEventListener("input", () => {
    preview.style.fontSize = fontSizeSlider.value + "px";
});

const spacingSlider = document.getElementById("spacing");
spacingSlider.addEventListener("input", () => {
    preview.style.letterSpacing = spacingSlider.value + "px";
});

/* =========================
   Scroll-Triggered Panel Animations
   ========================= */
const panels = document.querySelectorAll(".panel");

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }
    });
}, { threshold: 0.5 });

panels.forEach((panel) => observer.observe(panel));

/* =========================
   FAQ Accordion
   ========================= */
const faqQuestions = document.querySelectorAll(".faq-question");

faqQuestions.forEach((question) => {
    question.addEventListener("click", () => {
        const answer = question.nextElementSibling;
        const isOpen = answer.style.display === "block";
        answer.style.display = isOpen ? "none" : "block";
    });
});
document.addEventListener("DOMContentLoaded", () => {
    // 1. Accordion logic
    const accordionHeaders = document.querySelectorAll(".accordion-header");

    accordionHeaders.forEach(header => {
        header.addEventListener("click", () => {
            const accordionCard = header.parentElement;
            const content = accordionCard.querySelector(".accordion-content");

            accordionCard.classList.toggle("active");

            if (accordionCard.classList.contains("active")) {
                content.style.maxHeight = content.scrollHeight + "px";
            } else {
                content.style.maxHeight = "0px";
            }
        });
    });

    // 2. 3-Line Navigation Menu Modal logic
    const openMenuBtn = document.getElementById("openMenuBtn");
    const closeMenuBtn = document.getElementById("closeMenuBtn");
    const menuOverlay = document.getElementById("menuOverlay");

    openMenuBtn.addEventListener("click", () => {
        menuOverlay.classList.add("active");
    });

    closeMenuBtn.addEventListener("click", () => {
        menuOverlay.classList.remove("active");
    });

    menuOverlay.addEventListener("click", (e) => {
        if (e.target === menuOverlay) {
            menuOverlay.classList.remove("active");
        }
    });

    // 3. Language Selection Modal logic
    const openLangBtn = document.getElementById("openLangBtn");
    const closeLangBtn = document.getElementById("closeLangBtn");
    const langOverlay = document.getElementById("langOverlay");
    const currentLangText = document.getElementById("currentLang");
    const langOptions = document.querySelectorAll(".lang-option");

    openLangBtn.addEventListener("click", () => {
        langOverlay.classList.add("active");
    });

    closeLangBtn.addEventListener("click", () => {
        langOverlay.classList.remove("active");
    });

    langOverlay.addEventListener("click", (e) => {
        if (e.target === langOverlay) {
            langOverlay.classList.remove("active");
        }
    });

    langOptions.forEach(btn => {
        btn.addEventListener("click", () => {
            // Remove active status from previous selection
            langOptions.forEach(opt => opt.classList.remove("active"));
            
            // Set current active
            btn.classList.add("active");
            
            // Change button text
            const selectedLang = btn.getAttribute("data-lang");
            currentLangText.textContent = selectedLang;
            
            // Close modal after selection
            langOverlay.classList.remove("active");
        });
    });
});

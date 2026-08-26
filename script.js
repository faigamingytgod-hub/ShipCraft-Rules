document.addEventListener("DOMContentLoaded", () => {
    const accordionHeaders = document.querySelectorAll(".accordion-header");

    accordionHeaders.forEach(header => {
        header.addEventListener("click", () => {
            const accordionCard = header.parentElement;
            const content = accordionCard.querySelector(".accordion-content");

            // Toggle accordion state
            accordionCard.classList.toggle("active");

            if (accordionCard.classList.contains("active")) {
                content.style.maxHeight = content.scrollHeight + "px";
            } else {
                content.style.maxHeight = "0px";
            }
        });
    });
});

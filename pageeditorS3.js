document.addEventListener("DOMContentLoaded", () => {
    const links = document.querySelectorAll(".link");
    links.forEach((link, index) => {
        setTimeout(() => {
            link.style.opacity = 1;
            link.style.transform = "translateX(0)";
        }, index * 300);
    });
});

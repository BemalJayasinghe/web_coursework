document.addEventListener('DOMContentLoaded', function() {
    const contentBoxes = document.querySelectorAll('.content-box');

    contentBoxes.forEach((box, index) => {
        setTimeout(() => {
            box.classList.add('visible');
        }, index * 300);
    });
});

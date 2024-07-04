document.addEventListener('DOMContentLoaded', () => {
    const thumbnails = document.querySelectorAll('.thumbnail');
    const overlay = document.getElementById('overlay');
    const extendedImg = document.getElementById('extended-img');
    const extendedDescription = document.getElementById('extended-description');
    const closeBtn = document.getElementById('close-btn');
    const colorPicker = document.getElementById('color');
    const fontPicker = document.getElementById('font');

    thumbnails.forEach(thumbnail => {
        thumbnail.addEventListener('click', () => {
            const imgSrc = thumbnail.querySelector('img').src;
            const description = thumbnail.dataset.description;

            extendedImg.src = imgSrc;
            extendedDescription.textContent = description;
            overlay.style.display = 'flex';
        });
    });

    closeBtn.addEventListener('click', () => {
        overlay.style.display = 'none';
    });

    overlay.addEventListener('click', (e) => {
        if (e.target === overlay) {
            overlay.style.display = 'none';
        }
    });

    colorPicker.addEventListener('input', (e) => {
        document.body.style.backgroundColor = e.target.value;
    });

    fontPicker.addEventListener('change', (e) => {
        document.body.style.fontFamily = e.target.value;
    });
});

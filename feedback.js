document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('previewBtn').addEventListener('click', function(event) {
        event.preventDefault();
        showPreview();
    });

    document.getElementById('editPreviewBtn').addEventListener('click', function(event) {
        event.preventDefault();
        hidePreview();
    });

    document.getElementById('feedback-form').addEventListener('submit', function(event) {
        event.preventDefault();
        alert('Form submitted successfully!')
    });
});

function showPreview() {
    var name = document.getElementById('name').value.trim();
    var email = document.getElementById('email').value.trim();
    var rating = document.getElementById('rating').value.trim();
    var comment = document.getElementById('comment').value.trim();

    document.getElementById('previewName').textContent = name;
    document.getElementById('previewEmail').textContent = email;
    document.getElementById('previewRating').textContent = rating;
    document.getElementById('previewComment').textContent = comment;

    document.getElementById('feedback-form').style.display = 'none';
    document.getElementById('previewSection').style.display = 'block';
}

function hidePreview() {
    document.getElementById('feedback-form').style.display = 'block';
    document.getElementById('previewSection').style.display = 'none';
}

function isValidEmail(email) {

    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

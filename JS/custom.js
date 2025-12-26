'use strict';

/* ===============================
   DOM Elements
================================ */
const form = document.getElementById('applicationForm');
const status = document.getElementById('status');

/* ===============================
   Form Submit Handler
================================ */
form.addEventListener('submit', function (e) {
    e.preventDefault();

    const name = document.getElementById('name').value.trim();
    const dob = document.getElementById('dob').value;
    const email = document.getElementById('email').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const address = document.getElementById('address').value.trim();
    const education = document.getElementById('education').value;
    const course = document.getElementById('course').value;
    const gender = document.querySelector('input[name="gender"]:checked')?.value;
    const transcript = document.getElementById('transcript').files[0];

    if (!name || !dob || !email || !phone || !address || !education || !course || !gender || !transcript) {
        showStatus('Please fill in all required fields.', 'red');
        return;
    }

    if (!validateEmail(email)) {
        showStatus('Please enter a valid email address.', 'red');
        return;
    }

    if (!validatePhone(phone)) {
        showStatus('Please enter a valid phone number.', 'red');
        return;
    }

    const allowedTypes = ['application/pdf', 'image/jpeg', 'image/png'];
    if (!allowedTypes.includes(transcript.type)) {
        showStatus('Only PDF or image files are allowed.', 'red');
        return;
    }

    showStatus('Your application has been submitted successfully!', 'green');
    form.reset();
});

/* ===============================
   Helper Functions
================================ */
function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

function validatePhone(phone) {
    const re = /^01[3-9]\d{8}$/;
    return re.test(phone);
}

function showStatus(message, color) {
    status.textContent = message;
    status.style.color = color;
}

const toggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');
const popup = document.getElementById('popup');
const closeBtn = document.getElementById('closePopup');

if (toggle && navLinks) {
    toggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        toggle.classList.toggle('active');
    });

    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
            toggle.classList.remove('active');
        });
    });
}

document.querySelectorAll('.vehicle-card').forEach(card => {
    card.addEventListener('click', () => {
        card.classList.toggle('active');
    });
});

document.querySelectorAll('.step-card').forEach(card => {
    card.addEventListener('click', () => {
        document.querySelectorAll('.step-card').forEach(c => {
            if (c !== card) c.classList.remove('active');
        });
        card.classList.toggle('active');
    });
});

if (popup && closeBtn) {
    document.querySelectorAll('.coming-soon').forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            popup.classList.add('active');
        });
    });

    closeBtn.addEventListener('click', () => {
        popup.classList.remove('active');
    });
}

// Scroll to Section
document.querySelectorAll('a.nav-link').forEach(link => {
    link.addEventListener('click', event => {
        event.preventDefault();
        const targetId = link.getAttribute('href').substring(1);
        document.getElementById(targetId).scrollIntoView({ behavior: 'smooth' });
    });
});

// Theme Toggle
const toggleThemeBtn = document.querySelector('.theme-toggle');
toggleThemeBtn.addEventListener('click', () => {
    document.body.classList.toggle('light-theme');
    toggleThemeBtn.textContent = document.body.classList.contains('light-theme') ? 'Dark Theme' : 'Light Theme';
});

// Dynamic Skills
const skills = ['Ansible', 'Jenkins', 'Docker', 'DataDog', 'Kubernetes', 'AWS'];
const skillsContainer = document.getElementById('skills-container');
skills.forEach(skill => {
    const col = document.createElement('div');
    col.className = 'col-md-3 mb-4';
    col.innerHTML = `
        <div class="skill-item text-center">
            <img src="assets/${skill.toLowerCase()}.png" alt="${skill} Logo" class="img-fluid mb-2 skill-icon">
            <p class="fw-bold">${skill}</p>
        </div>
    `;
    skillsContainer.appendChild(col);
});

// Scroll-to-Top Button
const scrollToTopBtn = document.getElementById('scrollToTop');
window.addEventListener('scroll', () => {
    if (window.scrollY > 200) {
        scrollToTopBtn.style.display = 'block';
    } else {
        scrollToTopBtn.style.display = 'none';
    }
});
scrollToTopBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Form Validation
const form = document.getElementById('contactForm');
form.addEventListener('submit', event => {
    event.preventDefault();
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const contact = document.getElementById('contact').value.trim();

    if (!name || !email || !contact) {
        alert('Please fill out all fields.');
        return;
    }
    alert(`Thank you, ${name}! Your form has been submitted.`);
});

// Hero Section Text Animation
const heroText = document.querySelector('#hero h1');
const heroSubText = document.querySelector('#hero h2');
window.addEventListener('load', () => {
    heroText.classList.add('fade-in');
    setTimeout(() => heroSubText.classList.add('fade-in'), 500);
});

// Smooth Card Hover Animation
const projectCards = document.querySelectorAll('.card');
projectCards.forEach(card => {
    card.addEventListener('mouseover', () => {
        card.style.transform = 'scale(1.05)';
        card.style.transition = 'transform 0.3s ease-in-out';
    });
    card.addEventListener('mouseout', () => {
        card.style.transform = 'scale(1)';
    });
});

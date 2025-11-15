// Floating Particles
const particles = document.getElementById('particles');
function createParticles() {
  particles.innerHTML = '';
  const count = window.innerWidth < 768 ? 25 : 40;
  for (let i = 0; i < count; i++) {
    const p = document.createElement('div');
    p.className = 'particle';
    p.style.left = `${Math.random() * 100}%`;
    p.style.animationDelay = `${Math.random() * 15}s`;
    const size = Math.random() * 3 + 2;
    p.style.width = p.style.height = `${size}px`;
    particles.appendChild(p);
  }
}
createParticles();
window.addEventListener('resize', createParticles);

// Section Title Animation
const titles = document.querySelectorAll('.title');
const titleObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('in');
      titleObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.3 });
titles.forEach(title => titleObserver.observe(title));

// Skill Bars Animation
const skillObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const bars = entry.target.querySelectorAll('.bar span');
      bars.forEach(bar => {
        const width = bar.getAttribute('data-width');
        bar.style.width = width;
      });
      skillObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.5 });
document.querySelectorAll('.skill').forEach(skill => skillObserver.observe(skill));

// Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    const id = this.getAttribute('href');
    if (id === '#') return;
    e.preventDefault();
    document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
  });
});

// JSON-LD
document.head.insertAdjacentHTML('beforeend', `<script type="application/ld+json">${JSON.stringify({
  "@context": "https://schema.org", "@type": "Person", "name": "Tamil Selvam",
  "jobTitle": "AI Developer & Machine Learning Specialist", "url": "https://tamilselvam.ai",
  "email": "tamilsportfolio@gmail.com", "address": { "@type": "PostalAddress", "addressCountry": "IN" },
  "sameAs": ["https://github.com/TamilSelvam616", "https://linkedin.com/in/yourprofile"]
})}</script>`);
// =============================================================
// MOBILE NAV TOGGLE
// Opens/closes the menu on small screens.
// =============================================================
const navToggle = document.getElementById('navToggle');
const navMenu = document.getElementById('navMenu');

navToggle.addEventListener('click', () => {
  const isOpen = navMenu.classList.toggle('is-open');
  navToggle.setAttribute('aria-expanded', isOpen);
});

// Close the menu automatically after clicking a link (mobile)
navMenu.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    navMenu.classList.remove('is-open');
    navToggle.setAttribute('aria-expanded', 'false');
  });
});

// =============================================================
// SCROLL REVEAL
// Adds the "reveal" class to every <section>, then fades each
// one in once it scrolls into view. To exclude a section from
// this effect, just don't add class="reveal" to it in HTML —
// currently no sections use it by default, but you can add
// class="section reveal" to any <section> in index.html to opt in.
// =============================================================
const revealTargets = document.querySelectorAll('.reveal');

if (revealTargets.length > 0) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12 }
  );

  revealTargets.forEach((el) => observer.observe(el));
}

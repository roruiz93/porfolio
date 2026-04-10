// Año en el footer
document.getElementById('year').textContent = new Date().getFullYear()

// Animación de entrada con IntersectionObserver
const fadeEls = document.querySelectorAll(
  '.about__grid, .project-card, .contact__content, .section__header',
)

fadeEls.forEach((el) => el.classList.add('fade-in'))

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry, i) => {
      if (entry.isIntersecting) {
        setTimeout(() => entry.target.classList.add('visible'), i * 80)
        observer.unobserve(entry.target)
      }
    })
  },
  { threshold: 0.12 },
)

fadeEls.forEach((el) => observer.observe(el))

// Nav activo según scroll
const sections = document.querySelectorAll('section[id]')
const navLinks = document.querySelectorAll('.nav__links a')

const activateLink = (id) => {
  navLinks.forEach((link) => {
    link.style.color = link.getAttribute('href') === `#${id}` ? 'var(--terra-light)' : ''
  })
}

const sectionObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) activateLink(entry.target.id)
    })
  },
  { threshold: 0.5 },
)

sections.forEach((s) => sectionObserver.observe(s))

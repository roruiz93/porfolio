<template>
  <div class="port">

    <!-- ── SKIP LINK (a11y) ──────────────────────────────────────────── -->
    <a href="#contenido" class="skip-link">Saltar al contenido</a>

    <!-- ── NAV ──────────────────────────────────────────────────────── -->
    <nav
      class="nav"
      :class="{ 'nav--solid': scrolled }"
      aria-label="Navegación principal"
    >
      <div class="nav__w">
        <a href="#hero" class="nav__brand" @click.prevent="scrollTo('hero')">
          <img src="/logochico.png" class="nav__brand-logo" alt="Rosario Ruiz logo" />
          RR — DEV
        </a>

        <ul class="nav__list" :class="{ 'is-open': menuOpen }" role="list">
          <li>
            <a href="#sobre-mi"
               @click.prevent="scrollTo('sobre-mi'); closeMenu()"
               :class="{ active: activeSection === 'sobre-mi' }">
              Sobre mí
            </a>
          </li>
          <li>
            <a href="#skills"
               @click.prevent="scrollTo('skills'); closeMenu()"
               :class="{ active: activeSection === 'skills' }">
              Skills
            </a>
          </li>
          <li>
            <a href="#proyectos"
               @click.prevent="scrollTo('proyectos'); closeMenu()"
               :class="{ active: activeSection === 'proyectos' }">
              Proyectos
            </a>
          </li>
          <li>
            <a href="#contacto"
               @click.prevent="scrollTo('contacto'); closeMenu()"
               :class="{ active: activeSection === 'contacto' }">
              Contacto
            </a>
          </li>
        </ul>

        <!-- Hamburger (solo mobile) -->
        <button
          class="nav__toggle"
          :aria-expanded="String(menuOpen)"
          :aria-label="menuOpen ? 'Cerrar menú' : 'Abrir menú de navegación'"
          @click="menuOpen = !menuOpen"
        >
          <span class="nav__toggle-bar"></span>
          <span class="nav__toggle-bar"></span>
          <span class="nav__toggle-bar"></span>
        </button>
      </div>
    </nav>

    <!-- ── CONTENIDO PRINCIPAL ───────────────────────────────────────── -->
    <main id="contenido">

      <!-- HERO ─────────────────────────────────────────────────────── -->
      <section class="hero" id="hero" aria-labelledby="hero-titulo">
        <div class="hero__w">

          <div class="hero__body fade-in">
            <p class="hero__eyebrow" aria-hidden="true">Portfolio — 2025</p>
            <h1 class="hero__h1" id="hero-titulo">
              <span class="hero__h1-a">Rosario</span>
              <span class="hero__h1-b">Ruiz</span>
            </h1>
            <p class="hero__bio">
              Desarrolladora de Software Junior —
              apasionada por construir interfaces limpias
              y sistemas que funcionan.
            </p>
            <div class="hero__actions">
              <a href="#proyectos" class="btn-filled"
                 @click.prevent="scrollTo('proyectos')">
                Ver proyectos
              </a>
              <a href="#contacto" class="btn-plain"
                 @click.prevent="scrollTo('contacto')">
                Hablemos
              </a>
            </div>
          </div>

          <div class="hero__ring" aria-hidden="true"></div>

          <div class="hero__cards fade-in" style="transition-delay: 0.15s">
            <!-- FIX 5: overflow-x en code-card (ver CSS) -->
            <!-- FIX a11y: role + aria-label en el bloque de código -->
            <div class="code-card"
                 role="region"
                 aria-label="Snippet de código con el perfil de Rosario">
              <pre class="code-pre" v-html="codeSnippet"></pre>
            </div>
            <div class="rr-card" aria-hidden="true">
              <img src="/logo-loop.svg" class="rr-card__loop" alt="" />
            </div>
          </div>

        </div>
      </section>

      <!-- SOBRE MÍ ───────────────────────────────────────────────────── -->
      <section class="sobre" id="sobre-mi" aria-labelledby="sobre-titulo">
        <div class="sec-w">
          <div class="sec-badge fade-in" aria-hidden="true">
            <span class="sec-badge__dot"></span>
            <span class="sec-badge__txt">Sobre mí</span>
            <span class="sec-badge__rule"></span>
            <span class="sec-badge__ring"></span>
          </div>
          <div class="sobre__grid">
            <div class="sobre__left fade-in">
              <!-- FIX a11y: h2 real del heading de la sección -->
              <h2 class="sobre__h2" id="sobre-titulo">
                Código limpio,<br>
                <em>soluciones reales</em>
              </h2>
              <div class="stats">
                <div class="stat">
                  <span class="stat__n" aria-label="Más de 1 año">1+</span>
                  <span class="stat__l">Año en desarrollo</span>
                </div>
                <div class="stat">
                  <span class="stat__n">4</span>
                  <span class="stat__l">Tecnologías core</span>
                </div>
              </div>
            </div>
            <div class="sobre__right fade-in" style="transition-delay: 0.1s">
              <p>Soy Rosario, desarrolladora de software con enfoque en frontend y mobile. Me especializo en React, React Native y Vue.js para construir aplicaciones web y móviles modernas.</p>
              <p>Actualmente en mi primer rol profesional como Junior Developer, donde aprendo rápido y aporto desde el primer día. Me interesa especialmente el desarrollo de interfaces limpias y la experiencia de usuario.</p>
              <p>También trabajo con Node.js y Firebase en el backend, lo que me permite entender el stack completo y comunicarme bien con cualquier equipo.</p>
            </div>
          </div>
        </div>
      </section>

      <!-- SKILLS ─────────────────────────────────────────────────────── -->
      <section class="skills" id="skills" aria-labelledby="skills-titulo">
        <div class="sec-w">
          <!-- FIX a11y heading: <p> → <h2> -->
          <h2 class="skills__eyebrow fade-in" id="skills-titulo">Stack Técnico</h2>
          <div class="skills__grid">
            <div class="skill-col fade-in">
              <span class="skill-ico" aria-hidden="true">{ }</span>
              <h3 class="skill-h3">Frontend & Web</h3>
              <p class="skill-p">Aplicaciones web modernas y responsivas con React, Vue y herramientas del ecosistema JavaScript actual.</p>
              <div class="skill-tags" aria-label="Tecnologías de frontend">
                <span>JAVASCRIPT</span><span>TYPESCRIPT</span><span>REACT</span><span>VUE.JS</span><span>QUASAR</span><span>VITE</span>
              </div>
            </div>
            <div class="skill-col fade-in" style="transition-delay: 0.1s">
              <span class="skill-ico" aria-hidden="true">&lt;/&gt;</span>
              <h3 class="skill-h3">Mobile</h3>
              <p class="skill-p">Apps nativas multiplataforma para iOS y Android con React Native, Expo y Capacitor.</p>
              <div class="skill-tags" aria-label="Tecnologías mobile">
                <span>REACT NATIVE</span><span>EXPO</span><span>CAPACITOR</span>
              </div>
            </div>
            <div class="skill-col fade-in" style="transition-delay: 0.2s">
              <span class="skill-ico skill-ico--acc" aria-hidden="true">⚡</span>
              <h3 class="skill-h3">Backend & Servicios</h3>
              <p class="skill-p">Servidores, APIs y servicios en la nube para conectar el frontend con datos en tiempo real.</p>
              <div class="skill-tags" aria-label="Tecnologías de backend y servicios">
                <span>NODE.JS</span><span>EXPRESS</span><span>FIREBASE</span><span>SQL</span><span>MARIADB</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- PROYECTOS ──────────────────────────────────────────────────── -->
      <section class="proy" id="proyectos" aria-labelledby="proy-titulo">
        <div class="sec-w">
          <div class="sec-badge fade-in" aria-hidden="true">
            <span class="sec-badge__dot"></span>
            <!-- FIX a11y: heading real del section para screen readers -->
            <h2 class="sec-badge__txt" id="proy-titulo">Proyectos</h2>
            <span class="sec-badge__rule"></span>
            <span class="sec-badge__ring"></span>
          </div>
          <div class="proy__grid">
            <!-- FIX 1: key corregido para objeto ghost (p.n ?? 'ghost') -->
            <article
              v-for="p in projects"
              :key="p.n ?? 'ghost'"
              class="proy-card fade-in"
              :class="{ 'proy-card--ghost': p.ghost }"
            >
              <template v-if="!p.ghost">
                <span class="proy-card__cat">{{ p.n }} — {{ p.cat }}</span>
                <h3 class="proy-card__h3">{{ p.title }}</h3>
                <p class="proy-card__p">{{ p.desc }}</p>
                <div class="proy-card__tags" :aria-label="`Tecnologías: ${p.tags.join(', ')}`">
                  <span v-for="t in p.tags" :key="t">{{ t }}</span>
                </div>
                <!-- FIX 4: href="#" → enlace condicional, sin scroll al top -->
                <a v-if="p.github && p.github !== '#'"
                   :href="p.github"
                   target="_blank"
                   rel="noopener noreferrer"
                   class="proy-card__link"
                   :aria-label="`${p.linkText} — ${p.title} (abre en nueva pestaña)`">
                  {{ p.linkText }}
                </a>
                <span v-else class="proy-card__link proy-card__link--soon">
                  {{ p.linkText || 'Próximamente' }}
                </span>
              </template>
              <template v-else>
                <span class="proy-card__plus" aria-hidden="true">+</span>
                <p class="proy-card__ghost-txt">Más proyectos en GitHub</p>
                <a :href="p.github"
                   target="_blank"
                   rel="noopener noreferrer"
                   class="proy-card__ghost-link"
                   aria-label="Ver más proyectos de Rosario Ruiz en GitHub (abre en nueva pestaña)">
                  github.com/roruiz93 →
                </a>
              </template>
            </article>
          </div>
        </div>
      </section>

      <!-- CONTACTO ───────────────────────────────────────────────────── -->
      <section class="contacto" id="contacto" aria-labelledby="contacto-titulo">
        <div class="sec-w">
          <div class="sec-badge sec-badge--center fade-in" aria-hidden="true">
            <span class="sec-badge__dot"></span>
            <span class="sec-badge__txt">Contacto</span>
            <span class="sec-badge__rule"></span>
          </div>
          <div class="contacto__body fade-in">
            <h2 class="contacto__h2" id="contacto-titulo">
              ¿Trabajamos<br>
              <em>juntos?</em>
            </h2>
            <a href="mailto:rosarioma.ruiz@gmail.com"
               class="contacto__email"
               aria-label="Enviar email a rosarioma.ruiz@gmail.com">
              rosarioma.ruiz@gmail.com
            </a>
            <div class="contacto__social">
              <!-- FIX a11y: aria-label descriptivo en cada red social -->
              <a href="https://github.com/roruiz93"
                 target="_blank"
                 rel="noopener noreferrer"
                 aria-label="Perfil de GitHub de Rosario Ruiz (abre en nueva pestaña)">
                GitHub
              </a>
              <a href="https://www.linkedin.com/in/rosario-ruiz-544338206/"
                 target="_blank"
                 rel="noopener noreferrer"
                 aria-label="Perfil de LinkedIn de Rosario Ruiz (abre en nueva pestaña)">
                LinkedIn
              </a>
              <a href="https://wa.me/"
                 target="_blank"
                 rel="noopener noreferrer"
                 aria-label="Contactar por WhatsApp (abre en nueva pestaña)">
                WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>

    </main><!-- /main -->

    <!-- ── FOOTER ────────────────────────────────────────────────────── -->
    <footer class="footer">
      <div class="sec-w">
        <p>Diseñado y desarrollado por <strong>Rosario Ruiz</strong> · {{ year }}</p>
      </div>
    </footer>

  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'

const year = new Date().getFullYear()
const scrolled    = ref(false)
const activeSection = ref('')
const menuOpen    = ref(false)

// FIX 2: referencias para cleanup en onBeforeUnmount
let _fadeObserver    = null
let _sectionObserver = null
let _scrollHandler   = null

// FIX UX: scroll JS en lugar de href nativo (evita conflicto con hash router)
function scrollTo (id) {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
}
function closeMenu () {
  menuOpen.value = false
}

// v-html seguro: contenido hardcodeado, nunca viene de usuario
const codeSnippet = `<span class="cc-cmt">// rosario.js</span>
<span class="cc-kw">const</span> dev = {
  nombre: <span class="cc-str">'Rosario'</span>,
  rol: <span class="cc-str">'Junior Dev'</span>,
  stack: [
    <span class="cc-str">'React Native'</span>,
    <span class="cc-str">'Vue'</span>, <span class="cc-str">'Quasar'</span>,
    <span class="cc-str">'Firebase'</span>,
    <span class="cc-str">'Node.js'</span>
  ],
  disponible: <span class="cc-bool">true</span>
}

<span class="cc-kw">export default</span> dev`

const projects = [
  {
    n: '01', cat: 'Mobile App',
    title: 'FlowCash',
    desc: 'App de finanzas personales para móvil. Registro de ingresos y gastos, visualización con gráficos y autenticación con Firebase.',
    tags: ['REACT NATIVE', 'EXPO', 'FIREBASE', 'JAVASCRIPT'],
    github: '#',
    linkText: 'En desarrollo'
  },
  {
    n: '02', cat: 'Mobile App',
    title: 'Dragon Bote Training',
    desc: 'App de entrenamiento para equipos de dragon boat. Gestión de rutinas, seguimiento de progreso y sincronización en tiempo real con Firebase.',
    tags: ['REACT NATIVE', 'EXPO', 'FIREBASE', 'ZUSTAND'],
    github: '#',
    linkText: 'En desarrollo'
  },
  {
    n: '03', cat: 'Web App',
    title: 'La Maleta Web',
    desc: 'Plataforma web con internacionalización (ES/EN), administración de contenido vía Firebase y panel de administración independiente.',
    tags: ['VITE', 'JAVASCRIPT', 'FIREBASE', 'I18N'],
    github: 'https://la-maleta-e038c.web.app',
    linkText: 'Ver proyecto →'
  },
  // FIX 1: objeto ghost ahora tiene n para que :key="p.n ?? 'ghost'" funcione
  {
    ghost: true,
    n: null,
    github: 'https://github.com/roruiz93'
  }
]

onMounted(() => {
  // ── Fade-in on scroll ──────────────────────────────────────────────
  const fadeEls = document.querySelectorAll('.fade-in')
  _fadeObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry, i) => {
        if (entry.isIntersecting) {
          setTimeout(() => entry.target.classList.add('visible'), i * 80)
          _fadeObserver.unobserve(entry.target)
        }
      })
    },
    { threshold: 0.1 }
  )
  fadeEls.forEach(el => _fadeObserver.observe(el))

  // ── Active nav por sección ─────────────────────────────────────────
  // FIX UX: hero ahora incluido en el observer
  const sections = document.querySelectorAll('section[id]')
  _sectionObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) activeSection.value = entry.target.id
      })
    },
    { threshold: 0.4 }
  )
  sections.forEach(s => _sectionObserver.observe(s))

  // ── Nav sólido al hacer scroll ─────────────────────────────────────
  _scrollHandler = () => { scrolled.value = window.scrollY > 40 }
  window.addEventListener('scroll', _scrollHandler, { passive: true })
})

// FIX 2: cleanup de todos los listeners y observers
onBeforeUnmount(() => {
  if (_scrollHandler)   window.removeEventListener('scroll', _scrollHandler)
  if (_fadeObserver)    _fadeObserver.disconnect()
  if (_sectionObserver) _sectionObserver.disconnect()
})
</script>

<style scoped>
/* ── TOKENS ──────────────────────────────────────────────────────────── */
.port {
  --bg:         #F2EDE4;
  --bg-card:    #E8E3D9;
  --bg-code:    #E3DDD2;
  --txt:        #1A1614;
  --txt-2:      #5C534A;
  --txt-muted:  #9A8D84;
  --gold:       #C9A86C;
  --gold-l:     #DEC28A;
  --border:     #D4CEC5;

  --dark:       #141210;
  --dark-b:     #2C2824;
  --dark-txt:   #E5DDD4;
  --dark-txt-2: #9A8D84;

  --sans:  'Inter', system-ui, sans-serif;
  --serif: 'Fraunces', Georgia, serif;
  --mono:  'Courier New', 'Consolas', monospace;

  --ease: cubic-bezier(0.4, 0, 0.2, 1);
  --dur:  220ms;

  font-family: var(--sans);
  background: var(--bg);
  color: var(--txt);
  line-height: 1.7;
  -webkit-font-smoothing: antialiased;
}

/* ── SKIP LINK (a11y) ────────────────────────────────────────────────── */
.skip-link {
  position: absolute;
  top: -100%;
  left: 1rem;
  z-index: 9999;
  background: var(--txt);
  color: var(--bg);
  padding: 0.6rem 1.25rem;
  border-radius: 4px;
  font-size: 0.875rem;
  font-weight: 500;
  text-decoration: none;
  transition: top 0.2s;
}
.skip-link:focus { top: 1rem; }

/* ── FOCUS VISIBLE (a11y) ────────────────────────────────────────────── */
.port :deep(*:focus-visible),
*:focus-visible {
  outline: 2px solid var(--gold);
  outline-offset: 3px;
  border-radius: 2px;
}

/* ── LAYOUT ──────────────────────────────────────────────────────────── */
.sec-w {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
}

/* ── NAV ─────────────────────────────────────────────────────────────── */
.nav {
  position: fixed;
  /* FIX 3: inset-inline → left/right (mayor compatibilidad) */
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
  padding: 1.4rem 2rem;
  transition: background var(--dur) var(--ease), box-shadow var(--dur) var(--ease);
}
.nav--solid {
  background: rgba(242, 237, 228, 0.92);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  box-shadow: 0 1px 0 var(--border);
}
.nav__w {
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.nav__brand {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.8rem;
  font-weight: 500;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--txt);
  text-decoration: none;
}
.nav__brand-logo {
  width: 32px;
  height: 32px;
  border-radius: 8px;
  object-fit: cover;
  flex-shrink: 0;
}
.nav__list {
  display: flex;
  gap: 2.5rem;
  list-style: none;
  margin: 0;
  padding: 0;
}
.nav__list a {
  font-size: 0.76rem;
  font-weight: 400;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--txt-2);
  text-decoration: none;
  transition: color var(--dur) var(--ease);
}
.nav__list a:hover,
.nav__list a.active { color: var(--txt); }

/* Hamburger toggle */
.nav__toggle {
  display: none;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 5px;
  width: 36px;
  height: 36px;
  background: none;
  border: none;
  cursor: pointer;
  padding: 6px;
  border-radius: 4px;
}
.nav__toggle-bar {
  display: block;
  width: 20px;
  height: 1.5px;
  background: var(--txt);
  border-radius: 2px;
  transition: transform 0.25s var(--ease), opacity 0.25s var(--ease);
}
/* Animación X al abrir */
.nav__toggle[aria-expanded="true"] .nav__toggle-bar:nth-child(1) {
  transform: translateY(6.5px) rotate(45deg);
}
.nav__toggle[aria-expanded="true"] .nav__toggle-bar:nth-child(2) {
  opacity: 0;
  transform: scaleX(0);
}
.nav__toggle[aria-expanded="true"] .nav__toggle-bar:nth-child(3) {
  transform: translateY(-6.5px) rotate(-45deg);
}

/* ── HERO ────────────────────────────────────────────────────────────── */
.hero {
  /* FIX UX: min-height con fallback para iOS Safari */
  min-height: 100vh;
  min-height: 100svh;
  padding: 8rem 2rem 5rem;
  overflow: hidden;
}
.hero__w {
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  gap: 3rem;
  position: relative;
}
.hero__body {
  display: flex;
  flex-direction: column;
  gap: 1.75rem;
}
.hero__eyebrow {
  font-size: 0.78rem;
  font-weight: 500;
  letter-spacing: 0.22em;
  text-transform: uppercase;
  color: var(--gold);
}
.hero__h1 {
  display: flex;
  flex-direction: column;
  line-height: 0.9;
  gap: 0.05em;
}
.hero__h1-a {
  font-family: var(--serif);
  font-size: clamp(4rem, 8vw, 7.5rem);
  font-weight: 700;
  color: var(--txt);
  letter-spacing: -0.02em;
}
.hero__h1-b {
  font-family: var(--serif);
  font-size: clamp(4rem, 8vw, 7.5rem);
  font-weight: 500;
  font-style: italic;
  color: var(--gold);
  letter-spacing: -0.02em;
}
.hero__bio {
  font-size: 1rem;
  color: var(--txt-2);
  font-weight: 300;
  line-height: 1.85;
  max-width: 400px;
}
.hero__actions {
  display: flex;
  align-items: center;
  gap: 2.25rem;
  flex-wrap: wrap;
}
.hero__ring {
  position: absolute;
  width: 108px;
  height: 108px;
  border-radius: 50%;
  border: 1.5px solid var(--border);
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  pointer-events: none;
}
.hero__cards {
  display: flex;
  flex-direction: column;
  gap: 0.85rem;
}

/* Code card — FIX 5: overflow-x: auto para no desbordar en mobile */
.code-card {
  background: var(--bg-code);
  border-radius: 10px;
  padding: 1.75rem 2rem;
  overflow-x: auto;
  position: relative;
  z-index: 2;
}
.code-pre {
  font-family: var(--mono);
  font-size: 0.8rem;
  line-height: 1.85;
  color: var(--txt-2);
  white-space: pre;
  margin: 0;
}
:deep(.cc-cmt)  { color: var(--txt-muted); font-style: italic; }
:deep(.cc-kw)   { color: var(--txt); font-weight: 600; }
:deep(.cc-str)  { color: var(--gold); }
:deep(.cc-bool) { color: var(--gold-l); }

/* RR card — loop SVG */
.rr-card {
  border-radius: 10px;
  overflow: hidden;
  background: #0b0d14;
}
.rr-card__loop {
  width: 100%;
  height: 100%;
  display: block;
  object-fit: cover;
  aspect-ratio: 1 / 1;
}

/* ── BUTTONS ─────────────────────────────────────────────────────────── */
.btn-filled {
  display: inline-flex;
  align-items: center;
  padding: 0.8rem 1.85rem;
  background: var(--txt);
  color: var(--bg);
  font-size: 0.82rem;
  font-weight: 500;
  letter-spacing: 0.07em;
  text-transform: uppercase;
  border-radius: 4px;
  text-decoration: none;
  transition: background var(--dur) var(--ease), transform var(--dur) var(--ease);
}
.btn-filled:hover  { background: #3a3028; transform: translateY(-1px); }
.btn-plain {
  font-size: 0.82rem;
  font-weight: 400;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--txt-2);
  text-decoration: none;
  transition: color var(--dur) var(--ease);
}
.btn-plain:hover { color: var(--txt); }

/* ── SECTION BADGE ───────────────────────────────────────────────────── */
.sec-badge {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  margin-bottom: 3.5rem;
}
.sec-badge--center { justify-content: center; }
.sec-badge__dot {
  width: 7px;
  height: 7px;
  background: var(--txt);
  border-radius: 50%;
  flex-shrink: 0;
}
.sec-badge__txt {
  font-size: 0.72rem;
  font-weight: 500;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: var(--txt-2);
  /* FIX: reset heading styles cuando sec-badge__txt es h2 */
  font-family: var(--sans);
  margin: 0;
  line-height: inherit;
}
.sec-badge__rule {
  height: 1px;
  background: var(--border);
  width: 64px;
  flex-shrink: 0;
}
.sec-badge__ring {
  width: 22px;
  height: 22px;
  border-radius: 50%;
  border: 1.5px solid var(--border);
  flex-shrink: 0;
}

/* ── SOBRE MÍ ────────────────────────────────────────────────────────── */
.sobre { padding: 7rem 2rem; }
.sobre__grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 5rem;
  align-items: start;
}
.sobre__h2 {
  font-family: var(--serif);
  font-size: clamp(2rem, 4vw, 3rem);
  font-weight: 700;
  line-height: 1.1;
  color: var(--txt);
  margin-bottom: 2.5rem;
}
.sobre__h2 em { font-style: italic; font-weight: 500; color: var(--gold); }
.stats {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
}
.stat {
  border: 1px solid var(--border);
  border-radius: 6px;
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}
.stat__n {
  font-family: var(--serif);
  font-size: 2rem;
  font-weight: 300;
  color: var(--gold);
  line-height: 1;
}
.stat__l {
  font-size: 0.68rem;
  font-weight: 500;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  color: var(--txt-muted);
}
.sobre__right p {
  color: var(--txt-2);
  font-size: 0.97rem;
  font-weight: 300;
  line-height: 1.85;
  margin-bottom: 1.25rem;
}
.sobre__right p:last-child { margin-bottom: 0; }

/* ── SKILLS ──────────────────────────────────────────────────────────── */
.skills { background: var(--dark); padding: 7rem 2rem; }
/* FIX a11y: h2 con aspecto visual de eyebrow */
.skills__eyebrow {
  font-size: 0.72rem;
  font-weight: 500;
  letter-spacing: 0.22em;
  text-transform: uppercase;
  color: var(--gold);
  margin: 0 0 4rem;
  font-family: var(--sans);
}
.skills__grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
}
.skill-col { padding: 2rem 3rem 2rem 0; border-right: 1px solid var(--dark-b); }
.skill-col:nth-child(2) { padding-left: 3rem; }
.skill-col:last-child   { padding-left: 3rem; padding-right: 0; border-right: none; }
.skill-ico {
  display: block;
  font-family: var(--mono);
  font-size: 1.5rem;
  color: var(--dark-txt);
  margin-bottom: 1.5rem;
  letter-spacing: 0.05em;
}
.skill-ico--acc { color: var(--gold); }
.skill-h3 {
  font-family: var(--serif);
  font-size: 1.4rem;
  font-weight: 500;
  font-style: italic;
  color: var(--dark-txt);
  margin-bottom: 0.85rem;
}
.skill-p {
  font-size: 0.87rem;
  color: var(--dark-txt-2);
  font-weight: 300;
  line-height: 1.75;
  margin-bottom: 1.5rem;
}
.skill-tags { display: flex; flex-wrap: wrap; gap: 0.5rem; }
.skill-tags span {
  font-size: 0.67rem;
  font-weight: 500;
  letter-spacing: 0.08em;
  padding: 0.3rem 0.7rem;
  border: 1px solid var(--dark-b);
  color: var(--dark-txt-2);
  border-radius: 3px;
  transition: border-color var(--dur) var(--ease), color var(--dur) var(--ease);
}
.skill-tags span:hover { border-color: var(--gold); color: var(--gold); }

/* ── PROYECTOS ───────────────────────────────────────────────────────── */
.proy { padding: 7rem 2rem; }
.proy__grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.25rem;
}
.proy-card {
  background: var(--bg-card);
  border-radius: 10px;
  padding: 2.25rem 2.5rem;
  display: flex;
  flex-direction: column;
  gap: 0.85rem;
  border: 1px solid transparent;
  transition: transform var(--dur) var(--ease), box-shadow var(--dur) var(--ease), border-color var(--dur) var(--ease);
}
.proy-card:hover {
  transform: translateY(-3px);
  box-shadow: 0 8px 32px rgba(26, 22, 20, 0.08);
  border-color: var(--border);
}
.proy-card--ghost {
  align-items: center;
  justify-content: center;
  min-height: 200px;
  gap: 1rem;
}
.proy-card__cat {
  font-family: var(--mono);
  font-size: 0.75rem;
  color: var(--gold);
  letter-spacing: 0.05em;
}
.proy-card__h3 {
  font-family: var(--serif);
  font-size: 1.55rem;
  font-weight: 700;
  font-style: italic;
  color: var(--txt);
  line-height: 1.2;
}
.proy-card__p {
  font-size: 0.9rem;
  color: var(--txt-2);
  line-height: 1.75;
  font-weight: 300;
  flex: 1;
}
.proy-card__tags { display: flex; flex-wrap: wrap; gap: 0.45rem; margin-top: 0.25rem; }
.proy-card__tags span {
  font-size: 0.67rem;
  font-weight: 500;
  letter-spacing: 0.08em;
  padding: 0.28rem 0.65rem;
  border: 1px solid var(--border);
  color: var(--txt-muted);
  border-radius: 3px;
  transition: border-color var(--dur) var(--ease), color var(--dur) var(--ease);
}
.proy-card__tags span:hover { border-color: var(--gold); color: var(--gold); }
.proy-card__link {
  font-size: 0.72rem;
  font-weight: 500;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--txt-2);
  text-decoration: none;
  margin-top: 0.5rem;
  transition: color var(--dur) var(--ease);
}
.proy-card__link:hover { color: var(--txt); }
/* FIX 4: estado visual para links placeholder */
.proy-card__link--soon {
  color: var(--txt-muted);
  cursor: default;
  font-style: italic;
}
.proy-card__plus { font-size: 1.5rem; color: var(--txt-muted); }
.proy-card__ghost-txt {
  font-size: 0.72rem;
  font-weight: 500;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: var(--txt-muted);
  text-align: center;
}
.proy-card__ghost-link {
  font-family: var(--mono);
  font-size: 0.75rem;
  color: var(--txt-2);
  text-decoration: none;
  transition: color var(--dur) var(--ease);
}
.proy-card__ghost-link:hover { color: var(--txt); }

/* ── CONTACTO ────────────────────────────────────────────────────────── */
.contacto { padding: 7rem 2rem; }
.contacto__body {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 2rem;
}
.contacto__h2 {
  font-family: var(--serif);
  font-size: clamp(3rem, 7vw, 6rem);
  font-weight: 700;
  line-height: 1;
  color: var(--txt);
}
.contacto__h2 em { font-style: italic; font-weight: 500; color: var(--gold); }
.contacto__email {
  font-family: var(--mono);
  font-size: 1rem;
  color: var(--txt-2);
  text-decoration: none;
  transition: color var(--dur) var(--ease);
}
.contacto__email:hover { color: var(--txt); }
.contacto__social { display: flex; gap: 2rem; }
.contacto__social a {
  font-size: 0.72rem;
  font-weight: 500;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  color: var(--txt-muted);
  text-decoration: none;
  transition: color var(--dur) var(--ease);
}
.contacto__social a:hover { color: var(--txt); }

/* ── FOOTER ──────────────────────────────────────────────────────────── */
.footer {
  border-top: 1px solid var(--border);
  padding: 2rem;
  text-align: center;
  background: var(--bg);
}
.footer p  { font-size: 0.76rem; color: var(--txt-muted); letter-spacing: 0.05em; }
.footer strong { color: var(--gold); font-weight: 500; }

/* ── FADE-IN ──────────────────────────────────────────────────────────── */
.fade-in {
  opacity: 0;
  transform: translateY(18px);
  transition: opacity 0.65s var(--ease), transform 0.65s var(--ease);
}
.fade-in.visible { opacity: 1; transform: translateY(0); }

/* FIX UX: respetar preferencia de sin animaciones */
@media (prefers-reduced-motion: reduce) {
  .fade-in {
    opacity: 1 !important;
    transform: none !important;
    transition: none !important;
  }
}

/* ── RESPONSIVE ──────────────────────────────────────────────────────── */
@media (max-width: 960px) {
  .hero__w      { grid-template-columns: 1fr; }
  .hero__ring   { display: none; }
  .hero__cards  { max-width: 480px; }
  .sobre__grid  { grid-template-columns: 1fr; gap: 3rem; }
  .skills__grid { grid-template-columns: 1fr; }
  .skill-col    { border-right: none; border-bottom: 1px solid var(--dark-b); padding: 2.5rem 0; }
  .skill-col:last-child   { border-bottom: none; }
  .skill-col:nth-child(2) { padding-left: 0; }
  .proy__grid   { grid-template-columns: 1fr; }
}

/* FIX UX: menú hamburguesa en mobile */
@media (max-width: 640px) {
  .nav__toggle { display: flex; }

  .nav__list {
    display: none;
    position: fixed;
    top: 57px;
    left: 0;
    right: 0;
    background: var(--bg);
    flex-direction: column;
    padding: 1.5rem 2rem 2rem;
    gap: 1.5rem;
    border-top: 1px solid var(--border);
    box-shadow: 0 8px 24px rgba(26, 22, 20, 0.1);
    z-index: 99;
  }
  .nav__list.is-open { display: flex; }
  .nav__list a { font-size: 0.9rem; }

  .hero { padding-top: 6rem; }
  .hero__h1-a,
  .hero__h1-b { font-size: clamp(3.2rem, 14vw, 5rem); }
  .stats { grid-template-columns: 1fr 1fr; }
}
</style>

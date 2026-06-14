<template>
  <div class="port">

    <!-- ── SKIP LINK (a11y) ──────────────────────────────────────────── -->
    <a href="#contenido" class="skip-link">{{ t('nav.skipLink') }}</a>

    <!-- ── NAV ──────────────────────────────────────────────────────── -->
    <nav
      class="nav"
      :class="{ 'nav--solid': scrolled }"
      :aria-label="t('nav.mainNav')"
    >
      <div class="nav__w">
        <a href="#hero" class="nav__brand" @click.prevent="scrollTo('hero')">
          <img src="/logochico.png" class="nav__brand-logo" alt="Rosario Ruiz logo" />
          RR — DEV
        </a>

        <div class="nav__right">
          <ul class="nav__list" :class="{ 'is-open': menuOpen }" role="list">
            <li>
              <a href="#sobre-mi"
                 @click.prevent="scrollTo('sobre-mi'); closeMenu()"
                 :class="{ active: activeSection === 'sobre-mi' }">
                {{ t('nav.about') }}
              </a>
            </li>
            <li>
              <a href="#skills"
                 @click.prevent="scrollTo('skills'); closeMenu()"
                 :class="{ active: activeSection === 'skills' }">
                {{ t('nav.skills') }}
              </a>
            </li>
            <li>
              <a href="#proyectos"
                 @click.prevent="scrollTo('proyectos'); closeMenu()"
                 :class="{ active: activeSection === 'proyectos' }">
                {{ t('nav.projects') }}
              </a>
            </li>
            <li>
              <a href="#contacto"
                 @click.prevent="scrollTo('contacto'); closeMenu()"
                 :class="{ active: activeSection === 'contacto' }">
                {{ t('nav.contact') }}
              </a>
            </li>
          </ul>

          <!-- Selector de idioma -->
          <button
            class="lang-btn"
            @click="toggleLocale"
            :aria-label="t('nav.switchLang')"
          >
            {{ locale === 'es' ? 'EN' : 'ES' }}
          </button>

          <!-- Hamburger (solo mobile) -->
          <button
            class="nav__toggle"
            :aria-expanded="String(menuOpen)"
            :aria-label="menuOpen ? t('nav.closeMenu') : t('nav.openMenu')"
            @click="menuOpen = !menuOpen"
          >
            <span class="nav__toggle-bar"></span>
            <span class="nav__toggle-bar"></span>
            <span class="nav__toggle-bar"></span>
          </button>
        </div>
      </div>
    </nav>

    <!-- ── CONTENIDO PRINCIPAL ───────────────────────────────────────── -->
    <main id="contenido">

      <!-- HERO ─────────────────────────────────────────────────────── -->
      <section class="hero" id="hero" aria-labelledby="hero-titulo">
        <div class="hero__w">

          <div class="hero__body fade-in">
            <p class="hero__eyebrow" aria-hidden="true">{{ t('hero.eyebrow') }}</p>
            <h1 class="hero__h1" id="hero-titulo">
              <span class="hero__h1-a">Rosario</span>
              <span class="hero__h1-b">Ruiz</span>
            </h1>
            <p class="hero__bio">{{ t('hero.bio') }}</p>
            <div class="hero__actions">
              <a href="#proyectos" class="btn-filled"
                 @click.prevent="scrollTo('proyectos')">
                {{ t('hero.ctaProjects') }}
              </a>
              <a href="#contacto" class="btn-plain"
                 @click.prevent="scrollTo('contacto')">
                {{ t('hero.ctaContact') }}
              </a>
              <a :href="cvUrl"
                 target="_blank"
                 rel="noopener noreferrer"
                 class="btn-cv"
                 :aria-label="t('hero.ctaCVAriaLabel')">
                {{ t('hero.ctaCV') }} ↓
              </a>
            </div>
          </div>

          <div class="hero__ring" aria-hidden="true"></div>

          <div class="hero__cards fade-in" style="transition-delay: 0.15s">
            <div class="code-card"
                 role="region"
                 :aria-label="t('hero.codeLabel')">
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
            <span class="sec-badge__txt">{{ t('about.badge') }}</span>
            <span class="sec-badge__rule"></span>
            <span class="sec-badge__ring"></span>
          </div>
          <div class="sobre__grid">
            <div class="sobre__left fade-in">
              <h2 class="sobre__h2" id="sobre-titulo">
                {{ t('about.h2a') }}<br>
                <em>{{ t('about.h2b') }}</em>
              </h2>
              <div class="stats">
                <div class="stat">
                  <span class="stat__n" :aria-label="t('about.stat1AriaLabel')">1+</span>
                  <span class="stat__l">{{ t('about.stat1Label') }}</span>
                </div>
                <div class="stat">
                  <span class="stat__n">3</span>
                  <span class="stat__l">{{ t('about.stat2Label') }}</span>
                </div>
              </div>
            </div>
            <div class="sobre__right fade-in" style="transition-delay: 0.1s">
              <p>{{ t('about.p1') }}</p>
              <p>{{ t('about.p2') }}</p>
              <p>{{ t('about.p3') }}</p>
            </div>
          </div>
        </div>
      </section>

      <!-- EXPERIENCIA ────────────────────────────────────────────────── -->
      <section class="exp" id="experiencia" aria-labelledby="exp-titulo">
        <div class="sec-w">
          <div class="sec-badge fade-in" aria-hidden="true">
            <span class="sec-badge__dot"></span>
            <span class="sec-badge__txt" id="exp-titulo">{{ t('exp.badge') }}</span>
            <span class="sec-badge__rule"></span>
            <span class="sec-badge__ring"></span>
          </div>
          <div class="exp-card fade-in">
            <div class="exp-card__header">
              <div>
                <p class="exp-card__company">Body Health SA</p>
                <p class="exp-card__total">2016 – 2026</p>
              </div>
              <span class="exp-card__badge">{{ t('exp.onsite') }}</span>
            </div>
            <div class="exp-card__divider"></div>
            <Transition :name="slideDir" mode="out-in">
              <div class="exp-role" :key="roleIdx">
                <div class="exp-role__top">
                  <div>
                    <h3 class="exp-role__title">{{ currentRole.title }}</h3>
                    <span class="exp-role__period">{{ currentRole.period }}</span>
                  </div>
                  <button class="exp-arrow" @click="nextRole" :aria-label="t('exp.nextRole')">→</button>
                </div>
                <ul class="exp-role__list">
                  <li v-for="b in currentRole.bullets" :key="b">{{ b }}</li>
                </ul>
              </div>
            </Transition>
            <div class="exp-dots" :aria-label="t('exp.roleNav')">
              <button
                v-for="(r, i) in roles"
                :key="i"
                class="exp-dot"
                :class="{ active: i === roleIdx }"
                @click="goToRole(i)"
                :aria-label="r.title"
              ></button>
            </div>
          </div>
        </div>
      </section>

      <!-- SKILLS ─────────────────────────────────────────────────────── -->
      <section class="skills" id="skills" aria-labelledby="skills-titulo">
        <div class="sec-w">
          <h2 class="skills__eyebrow fade-in" id="skills-titulo">{{ t('skills.eyebrow') }}</h2>
          <div class="skills__grid">
            <div class="skill-col fade-in">
              <span class="skill-ico" aria-hidden="true">{ }</span>
              <h3 class="skill-h3">{{ t('skills.frontend.title') }}</h3>
              <p class="skill-p">{{ t('skills.frontend.desc') }}</p>
              <div class="skill-tags" :aria-label="t('skills.frontend.ariaLabel')">
                <span>JAVASCRIPT</span><span>TYPESCRIPT</span><span>PYTHON</span><span>HTML/CSS</span><span>REACT</span><span>VUE.JS</span><span>QUASAR</span><span>VITE</span><span>FIGMA</span>
              </div>
            </div>
            <div class="skill-col fade-in" style="transition-delay: 0.1s">
              <span class="skill-ico" aria-hidden="true">&lt;/&gt;</span>
              <h3 class="skill-h3">{{ t('skills.mobile.title') }}</h3>
              <p class="skill-p">{{ t('skills.mobile.desc') }}</p>
              <div class="skill-tags" :aria-label="t('skills.mobile.ariaLabel')">
                <span>REACT NATIVE</span><span>EXPO</span><span>CAPACITOR</span><span>ANDROID STUDIO</span>
              </div>
            </div>
            <div class="skill-col fade-in" style="transition-delay: 0.2s">
              <span class="skill-ico skill-ico--acc" aria-hidden="true">⚡</span>
              <h3 class="skill-h3">{{ t('skills.backend.title') }}</h3>
              <p class="skill-p">{{ t('skills.backend.desc') }}</p>
              <div class="skill-tags" :aria-label="t('skills.backend.ariaLabel')">
                <span>NODE.JS</span><span>EXPRESS</span><span>FIREBASE</span><span>REST APIS</span><span>SQL</span><span>MARIADB</span><span>GIT/GITHUB</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- EDUCACIÓN ──────────────────────────────────────────────────── -->
      <section class="edu" id="educacion" aria-labelledby="edu-titulo">
        <div class="sec-w">
          <div class="sec-badge fade-in" aria-hidden="true">
            <span class="sec-badge__dot"></span>
            <span class="sec-badge__txt" id="edu-titulo">{{ t('edu.badge') }}</span>
            <span class="sec-badge__rule"></span>
            <span class="sec-badge__ring"></span>
          </div>
          <div class="edu__list">
            <div class="edu-item fade-in">
              <div class="edu-item__left">
                <span class="edu-item__year">2020 – 2024</span>
                <span class="edu-item__tag">{{ t('edu.graduated') }}</span>
              </div>
              <div class="edu-item__right">
                <h3 class="edu-item__title">{{ t('edu.degree1') }}</h3>
                <p class="edu-item__inst">UTN FRGP</p>
              </div>
            </div>
            <div class="edu-item fade-in" style="transition-delay: 0.1s">
              <div class="edu-item__left">
                <span class="edu-item__year">2009 – 2011</span>
                <span class="edu-item__tag">{{ t('edu.graduated') }}</span>
              </div>
              <div class="edu-item__right">
                <h3 class="edu-item__title">{{ t('edu.degree2') }}</h3>
                <p class="edu-item__inst">Colegio San Ramón</p>
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
            <h2 class="sec-badge__txt" id="proy-titulo">{{ t('projects.badge') }}</h2>
            <span class="sec-badge__rule"></span>
            <span class="sec-badge__ring"></span>
          </div>
          <div class="proy__grid">
            <article
              v-for="p in projects"
              :key="p.key ?? 'ghost'"
              class="proy-card fade-in"
              :class="{ 'proy-card--ghost': p.ghost }"
            >
              <template v-if="!p.ghost">
                <span class="proy-card__cat">{{ p.n }} — {{ p.cat }}</span>
                <h3 class="proy-card__h3">{{ p.title }}</h3>
                <p class="proy-card__p">{{ t(`projects.${p.key}.desc`) }}</p>
                <div class="proy-card__tags" :aria-label="`${t('projects.tagsLabel')}: ${p.tags.join(', ')}`">
                  <span v-for="tag in p.tags" :key="tag">{{ tag }}</span>
                </div>
                <a v-if="p.github && p.github !== '#'"
                   :href="p.github"
                   target="_blank"
                   rel="noopener noreferrer"
                   class="proy-card__link"
                   :aria-label="`${t(`projects.${p.key}.linkText`)} — ${p.title}`">
                  {{ t(`projects.${p.key}.linkText`) }}
                </a>
                <span v-else class="proy-card__link proy-card__link--soon">
                  {{ t(`projects.${p.key}.linkText`) }}
                </span>
              </template>
              <template v-else>
                <span class="proy-card__plus" aria-hidden="true">+</span>
                <p class="proy-card__ghost-txt">{{ t('projects.ghostTxt') }}</p>
                <a :href="p.github"
                   target="_blank"
                   rel="noopener noreferrer"
                   class="proy-card__ghost-link"
                   :aria-label="t('projects.ghostAriaLabel')">
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
            <span class="sec-badge__txt">{{ t('contact.badge') }}</span>
            <span class="sec-badge__rule"></span>
          </div>
          <div class="contacto__body fade-in">
            <h2 class="contacto__h2" id="contacto-titulo">
              {{ t('contact.h2a') }}<br>
              <em>{{ t('contact.h2b') }}</em>
            </h2>
            <a href="mailto:rosarioma.ruiz@gmail.com"
               class="contacto__email"
               :aria-label="t('contact.emailAriaLabel')">
              rosarioma.ruiz@gmail.com
            </a>
            <div class="contacto__social">
              <a href="https://github.com/roruiz93"
                 target="_blank"
                 rel="noopener noreferrer"
                 :aria-label="t('contact.githubAriaLabel')">
                GitHub
              </a>
              <a href="https://www.linkedin.com/in/rosario-ruiz-544338206/"
                 target="_blank"
                 rel="noopener noreferrer"
                 :aria-label="t('contact.linkedinAriaLabel')">
                LinkedIn
              </a>
              <a href="https://wa.me/5491161668744"
                 target="_blank"
                 rel="noopener noreferrer"
                 :aria-label="t('contact.whatsappAriaLabel')">
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
        <p>{{ t('footer.text') }} <strong>Rosario Ruiz</strong> · {{ year }}</p>
      </div>
    </footer>

  </div>
</template>

<script setup>
import { ref, computed, onMounted, onBeforeUnmount } from 'vue'
import { useTranslation } from '../composables/useTranslation.js'

const { t, locale } = useTranslation()

const year = new Date().getFullYear()
const scrolled      = ref(false)
const activeSection = ref('')
const menuOpen      = ref(false)

let _fadeObserver    = null
let _sectionObserver = null
let _scrollHandler   = null

function scrollTo (id) {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
}
function closeMenu () {
  menuOpen.value = false
}
function toggleLocale () {
  locale.value = locale.value === 'es' ? 'en' : 'es'
}

const cvUrl = computed(() =>
  locale.value === 'en' ? '/Rosario_Ruiz_CV_EN.pdf' : '/Rosario_Ruiz_CV_ES.pdf'
)

const roleIdx  = ref(0)
const slideDir = ref('slide-next')

const roles = computed(() => locale.value === 'en'
  ? [
      {
        title: 'Junior Software Developer',
        period: 'Dec 2024 – May 2026',
        bullets: [
          'Web app development and maintenance with React and JavaScript',
          'REST API integration (Firebase, internal services)',
          'Resolution of complex bugs in legacy code',
          'Diagnosis and resolution of memory leak in production'
        ]
      },
      {
        title: 'Team Leader',
        period: '2021 – 2024',
        bullets: [
          'Leadership of 8-person team in electronics manufacturing',
          'Reduction of production times through process redesign',
          'Documentation and standardization of production processes',
          'Team training and development'
        ]
      },
      {
        title: 'Electronics Operator',
        period: '2016 – 2021',
        bullets: [
          'Quality control of medical aesthetic equipment',
          'Complex hardware assembly'
        ]
      }
    ]
  : [
      {
        title: 'Desarrolladora Junior',
        period: 'Dic 2024 – May 2026',
        bullets: [
          'Desarrollo y mantenimiento de apps web con React y JavaScript',
          'Integración con APIs REST (Firebase, servicios internos)',
          'Resolución de bugs complejos en código heredado',
          'Diagnóstico y resolución de memory leak en producción'
        ]
      },
      {
        title: 'Líder de Sector',
        period: '2021 – 2024',
        bullets: [
          'Liderazgo de equipo de 8 personas en manufactura electrónica',
          'Reducción de tiempos de fabricación mediante rediseño de procesos',
          'Documentación y estandarización de procesos productivos',
          'Capacitación y desarrollo del equipo'
        ]
      },
      {
        title: 'Operaria de Electrónica',
        period: '2016 – 2021',
        bullets: [
          'Control de calidad en equipos médicos estéticos',
          'Ensamblado complejo de hardware'
        ]
      }
    ]
)

const currentRole = computed(() => roles.value[roleIdx.value])

function nextRole () {
  slideDir.value = 'slide-next'
  roleIdx.value = (roleIdx.value + 1) % roles.value.length
}

function goToRole (i) {
  slideDir.value = i > roleIdx.value ? 'slide-next' : 'slide-prev'
  roleIdx.value = i
}

// v-html seguro: contenido hardcodeado, nunca viene de usuario
const codeSnippet = computed(() => {
  const isEN = locale.value === 'en'
  return `<span class="cc-cmt">// rosario.js</span>
<span class="cc-kw">const</span> dev = {
  ${isEN ? 'name' : 'nombre'}: <span class="cc-str">'Rosario'</span>,
  ${isEN ? 'role' : 'rol'}: <span class="cc-str">'Full Stack Dev'</span>,
  stack: [
    <span class="cc-str">'React'</span>, <span class="cc-str">'React Native'</span>,
    <span class="cc-str">'Node.js'</span>, <span class="cc-str">'Firebase'</span>,
    <span class="cc-str">'Vue'</span>, <span class="cc-str">'Python'</span>
  ],
  ${isEN ? 'available' : 'disponible'}: <span class="cc-bool">true</span>
}

<span class="cc-kw">export default</span> dev`
})

const projects = [
  {
    n: '01', cat: 'Mobile App', key: 'flowcash',
    title: 'FlowCash',
    tags: ['REACT NATIVE', 'EXPO', 'FIREBASE', 'JAVASCRIPT'],
    github: 'https://github.com/roruiz93/FlowCash'
  },
  {
    n: '02', cat: 'Mobile App', key: 'dragonbote',
    title: 'Dragon Bote Training',
    tags: ['REACT NATIVE', 'EXPO', 'FIREBASE', 'ZUSTAND'],
    github: 'https://github.com/roruiz93/DragonBoatTraining'
  },
  {
    n: '03', cat: 'Web App', key: 'lamaleta',
    title: 'La Maleta Web',
    tags: ['VITE', 'JAVASCRIPT', 'FIREBASE', 'I18N'],
    github: 'https://la-maleta-e038c.web.app'
  },
  {
    ghost: true,
    key: null,
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

/* Lado derecho del nav: lista + lang + hamburguesa */
.nav__right {
  display: flex;
  align-items: center;
  gap: 1.5rem;
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

/* Botón selector de idioma */
.lang-btn {
  font-size: 0.72rem;
  font-weight: 500;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--txt-2);
  background: none;
  border: 1px solid var(--border);
  border-radius: 4px;
  padding: 0.3rem 0.65rem;
  cursor: pointer;
  transition: color var(--dur) var(--ease), border-color var(--dur) var(--ease);
  flex-shrink: 0;
  font-family: var(--sans);
}
.lang-btn:hover {
  color: var(--txt);
  border-color: var(--txt-2);
}

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

/* Code card */
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
.btn-cv {
  font-size: 0.82rem;
  font-weight: 500;
  letter-spacing: 0.07em;
  text-transform: uppercase;
  color: var(--txt-2);
  text-decoration: none;
  border: 1px solid var(--border);
  border-radius: 4px;
  padding: 0.8rem 1.5rem;
  transition: color var(--dur) var(--ease), border-color var(--dur) var(--ease);
}
.btn-cv:hover { color: var(--txt); border-color: var(--txt-2); }

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

/* ── EXPERIENCIA ─────────────────────────────────────────────────────── */
.exp { padding: 7rem 2rem; }
.exp-card {
  max-width: 680px;
  border: 1px solid var(--border);
  border-radius: 12px;
  padding: 2.5rem;
  background: var(--bg-card);
  overflow: hidden;
}
.exp-card__header {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  margin-bottom: 1.5rem;
}
.exp-card__company {
  font-family: var(--serif);
  font-size: 1.3rem;
  font-weight: 700;
  color: var(--txt);
  margin-bottom: 0.2rem;
}
.exp-card__total {
  font-family: var(--mono);
  font-size: 0.75rem;
  color: var(--txt-muted);
  letter-spacing: 0.05em;
}
.exp-card__badge {
  font-size: 0.65rem;
  font-weight: 500;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--txt-muted);
  border: 1px solid var(--border);
  border-radius: 3px;
  padding: 0.2rem 0.55rem;
  flex-shrink: 0;
}
.exp-card__divider {
  height: 1px;
  background: var(--border);
  margin-bottom: 1.75rem;
}
.exp-role { min-height: 180px; }
.exp-role__top {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  margin-bottom: 1.25rem;
  gap: 1rem;
}
.exp-role__title {
  font-family: var(--serif);
  font-size: 1.2rem;
  font-weight: 700;
  font-style: italic;
  color: var(--txt);
  margin-bottom: 0.25rem;
}
.exp-role__period {
  font-family: var(--mono);
  font-size: 0.75rem;
  color: var(--gold);
  letter-spacing: 0.05em;
}
.exp-arrow {
  background: none;
  border: 1px solid var(--border);
  border-radius: 6px;
  width: 36px;
  height: 36px;
  font-size: 1rem;
  color: var(--txt-2);
  cursor: pointer;
  flex-shrink: 0;
  transition: color var(--dur) var(--ease), border-color var(--dur) var(--ease), transform var(--dur) var(--ease);
  display: flex;
  align-items: center;
  justify-content: center;
}
.exp-arrow:hover { color: var(--txt); border-color: var(--txt-2); transform: translateX(2px); }
.exp-role__list {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
}
.exp-role__list li {
  font-size: 0.9rem;
  color: var(--txt-2);
  font-weight: 300;
  line-height: 1.6;
  padding-left: 1rem;
  position: relative;
}
.exp-role__list li::before {
  content: '—';
  position: absolute;
  left: 0;
  color: var(--gold);
  font-size: 0.75rem;
}
.exp-dots {
  display: flex;
  gap: 0.5rem;
  margin-top: 1.75rem;
}
.exp-dot {
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: var(--border);
  border: none;
  cursor: pointer;
  padding: 0;
  transition: background var(--dur) var(--ease), transform var(--dur) var(--ease);
}
.exp-dot.active { background: var(--gold); transform: scale(1.3); }
.exp-dot:hover  { background: var(--txt-muted); }

/* Transiciones slide */
.slide-next-enter-active,
.slide-next-leave-active,
.slide-prev-enter-active,
.slide-prev-leave-active { transition: all 0.3s var(--ease); }

.slide-next-enter-from { opacity: 0; transform: translateX(40px); }
.slide-next-leave-to   { opacity: 0; transform: translateX(-40px); }
.slide-prev-enter-from { opacity: 0; transform: translateX(-40px); }
.slide-prev-leave-to   { opacity: 0; transform: translateX(40px); }

/* ── EDUCACIÓN ───────────────────────────────────────────────────────── */
.edu { padding: 7rem 2rem; background: var(--bg-card); }
.edu__list { display: flex; flex-direction: column; gap: 0; }
.edu-item {
  display: grid;
  grid-template-columns: 200px 1fr;
  gap: 2rem;
  padding: 2rem 0;
  border-bottom: 1px solid var(--border);
  align-items: center;
}
.edu-item:last-child { border-bottom: none; }
.edu-item__left {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}
.edu-item__year {
  font-family: var(--mono);
  font-size: 0.78rem;
  color: var(--txt-muted);
  letter-spacing: 0.05em;
}
.edu-item__tag {
  display: inline-block;
  font-size: 0.65rem;
  font-weight: 500;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--gold);
  border: 1px solid var(--gold);
  border-radius: 3px;
  padding: 0.2rem 0.55rem;
  width: fit-content;
}
.edu-item__title {
  font-family: var(--serif);
  font-size: 1.15rem;
  font-weight: 700;
  font-style: italic;
  color: var(--txt);
  margin-bottom: 0.3rem;
}
.edu-item__inst {
  font-size: 0.85rem;
  color: var(--txt-2);
  font-weight: 300;
}

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
  .edu-item     { grid-template-columns: 1fr; gap: 0.5rem; }
  .proy__grid   { grid-template-columns: 1fr; }
}

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

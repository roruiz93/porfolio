<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Portfolio · Tu Nombre</title>
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600&family=Fraunces:ital,wght@0,300;0,400;1,300&display=swap" rel="stylesheet" />
  <link rel="stylesheet" href="styles.css" />
</head>
<body>

  <!-- NAV -->
  <nav class="nav">
    <span class="nav__logo">TN</span>
    <ul class="nav__links">
      <li><a href="#about">Sobre mí</a></li>
      <li><a href="#projects">Proyectos</a></li>
      <li><a href="#contact">Contacto</a></li>
    </ul>
  </nav>

  <!-- HERO -->
  <section class="hero" id="hero">
    <div class="hero__content">
      <p class="hero__label">Desarrollador Web</p>
      <h1 class="hero__name">
        Tu Nombre<span class="hero__dot">.</span>
      </h1>
      <p class="hero__tagline">
        Construyo experiencias digitales limpias y funcionales<br />
        con <em>JavaScript</em>, <em>Python</em> y ojo para el diseño.
      </p>
      <div class="hero__cta">
        <a href="#projects" class="btn btn--primary">Ver proyectos</a>
        <a href="#contact" class="btn btn--ghost">Contáctame</a>
      </div>
    </div>
    <div class="hero__decoration">
      <div class="hero__circle"></div>
    </div>
  </section>

  <!-- ABOUT -->
  <section class="section about" id="about">
    <div class="container">
      <div class="section__header">
        <span class="section__number">01</span>
        <h2 class="section__title">Sobre mí</h2>
      </div>
      <div class="about__grid">
        <div class="about__text">
          <p>
            Soy un desarrollador web con pasión por crear productos digitales
            que combinan funcionalidad y estética. Me gusta trabajar en todo
            el stack, desde la lógica de servidor hasta interfaces que la
            gente disfruta usar.
          </p>
          <p>
            Cuando no estoy programando, exploro nuevas tecnologías, contribuyo
            a proyectos open source y busco la intersección entre el diseño
            y la ingeniería.
          </p>
        </div>
        <div class="about__skills">
          <h3 class="about__skills-title">Stack principal</h3>
          <div class="skills__grid">
            <div class="skill-group">
              <span class="skill-group__label">Frontend</span>
              <div class="skill-tags">
                <span class="tag">JavaScript</span>
                <span class="tag">TypeScript</span>
                <span class="tag">React</span>
                <span class="tag">CSS / HTML</span>
              </div>
            </div>
            <div class="skill-group">
              <span class="skill-group__label">Backend & Data</span>
              <div class="skill-tags">
                <span class="tag">Python</span>
                <span class="tag">Node.js</span>
                <span class="tag">REST APIs</span>
                <span class="tag">SQL</span>
              </div>
            </div>
            <div class="skill-group">
              <span class="skill-group__label">Diseño</span>
              <div class="skill-tags">
                <span class="tag">Figma</span>
                <span class="tag">UI/UX</span>
                <span class="tag">Design Systems</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- PROJECTS -->
  <section class="section projects" id="projects">
    <div class="container">
      <div class="section__header">
        <span class="section__number">02</span>
        <h2 class="section__title">Proyectos</h2>
      </div>
      <div class="projects__grid">

        <article class="project-card">
          <div class="project-card__top">
            <span class="project-card__number">01</span>
            <div class="project-card__links">
              <a href="#" aria-label="Ver código" class="project-card__link">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>
              </a>
              <a href="#" aria-label="Ver demo" class="project-card__link">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
              </a>
            </div>
          </div>
          <h3 class="project-card__title">Nombre del Proyecto</h3>
          <p class="project-card__desc">
            Descripción del proyecto: qué problema resuelve, qué hace especial
            y cuál fue tu rol en el desarrollo.
          </p>
          <div class="project-card__tags">
            <span class="tag tag--small">React</span>
            <span class="tag tag--small">TypeScript</span>
            <span class="tag tag--small">Node.js</span>
          </div>
        </article>

        <article class="project-card">
          <div class="project-card__top">
            <span class="project-card__number">02</span>
            <div class="project-card__links">
              <a href="#" aria-label="Ver código" class="project-card__link">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>
              </a>
              <a href="#" aria-label="Ver demo" class="project-card__link">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
              </a>
            </div>
          </div>
          <h3 class="project-card__title">Segundo Proyecto</h3>
          <p class="project-card__desc">
            Descripción del proyecto: qué problema resuelve, qué hace especial
            y cuál fue tu rol en el desarrollo.
          </p>
          <div class="project-card__tags">
            <span class="tag tag--small">Python</span>
            <span class="tag tag--small">FastAPI</span>
            <span class="tag tag--small">PostgreSQL</span>
          </div>
        </article>

        <article class="project-card project-card--featured">
          <div class="project-card__top">
            <span class="project-card__number">03</span>
            <div class="project-card__links">
              <a href="#" aria-label="Ver código" class="project-card__link">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>
              </a>
              <a href="#" aria-label="Ver demo" class="project-card__link">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
              </a>
            </div>
          </div>
          <h3 class="project-card__title">Tercer Proyecto</h3>
          <p class="project-card__desc">
            Descripción del proyecto: qué problema resuelve, qué hace especial
            y cuál fue tu rol en el desarrollo. Este es el proyecto destacado.
          </p>
          <div class="project-card__tags">
            <span class="tag tag--small">Figma</span>
            <span class="tag tag--small">React</span>
            <span class="tag tag--small">Design System</span>
          </div>
        </article>

      </div>
    </div>
  </section>

  <!-- CONTACT -->
  <section class="section contact" id="contact">
    <div class="container">
      <div class="section__header">
        <span class="section__number">03</span>
        <h2 class="section__title">Contacto</h2>
      </div>
      <div class="contact__content">
        <p class="contact__intro">
          ¿Tienes un proyecto en mente o quieres hablar?<br />
          Estoy disponible para freelance y nuevas oportunidades.
        </p>
        <div class="contact__links">
          <a href="mailto:tu@email.com" class="contact__item">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
            <span>tu@email.com</span>
          </a>
          <a href="https://linkedin.com/in/tu-usuario" target="_blank" rel="noopener" class="contact__item">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>
            <span>LinkedIn</span>
          </a>
        </div>
        <a href="mailto:tu@email.com" class="btn btn--primary contact__btn">Escribirme</a>
      </div>
    </div>
  </section>

  <!-- FOOTER -->
  <footer class="footer">
    <div class="container">
      <p>Diseñado y desarrollado por <strong>Tu Nombre</strong> · <span id="year"></span></p>
    </div>
  </footer>

  <script src="script.js"></script>
</body>
</html>

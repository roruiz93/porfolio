# Plan de práctica y búsqueda laboral — Rosario Ruiz

Objetivo: sostener el código, sumar Python, aprender a deployar como senior (Docker + CI/CD + cloud), practicar inglés y buscar trabajo — todo compatible con 5-8h/semana y el trabajo de masajista.

## Diagnóstico del repo actual

- Stack: Vue 3 + Quasar, i18n (en/es), hosting en Firebase.
- CI/CD ya existe (`.github/workflows/deploy.yml`): build + deploy automático a Firebase en push a `main`.
- Falta para nivel senior: tests, gate de lint/tests antes de deployar, preview deploys por PR, y experiencia con Docker/contenedores (el hosting actual es estático, no lo necesita, pero para el mercado laboral sí conviene saberlo).

## Filosofía del plan

No separar "aprender Python" de "aprender deploys" en cajitas sueltas: se integran en **un proyecto piloto** (una API en Python) que se dockeriza, se le arma CI/CD y se deploya en la nube. Eso multiplica el tiempo limitado que hay disponible.

## Estructura semanal (5-8h)

| Día | Foco | Actividad |
|---|---|---|
| Lunes | Portfolio actual | Features/bugs en el portfolio Vue/Quasar |
| Martes | Python | Avanzar el proyecto piloto (API con FastAPI) |
| Miércoles | Deploy senior | Docker → CI/CD → Cloud Run/AWS, sobre el proyecto piloto |
| Jueves | Inglés técnico | Documentación en inglés + README/commits en inglés |
| Viernes | Búsqueda laboral | Aplicar 2-3 puestos, ajustar CV/LinkedIn, prep de entrevistas |
| Diario (10-15 min) | Inglés pasivo | Podcast o video técnico de fondo |

Los fines de semana quedan libres para masajes o para el bloque que haya quedado atrasado.

## Roadmap (10 semanas)

**Fase 0 — Semana 1: subir el nivel del CI/CD actual**
- Agregar `npm run lint` como paso obligatorio antes del deploy en `deploy.yml`.
- Agregar un job de build/lint que corra en cada Pull Request (no solo en push a `main`).
- Investigar preview channels de Firebase Hosting para ver cambios antes de mergear.

**Fase 1 — Semanas 2-3: fundamentos de Python + arrancar la API**
- Sintaxis, tipado, entornos virtuales (`venv`), gestión de dependencias.
- Armar una API mínima con FastAPI (2-3 endpoints, algo simple y demostrable).

**Fase 2 — Semanas 4-5: Dockerizar la API**
- Escribir un `Dockerfile` para la API.
- Correrla localmente en un contenedor, entender capas, volúmenes, variables de entorno.

**Fase 3 — Semanas 6-7: CI/CD para la API**
- GitHub Actions: build de la imagen, tests, push a un registry (Docker Hub o Artifact Registry).

**Fase 4 — Semana 8: deploy en la nube**
- Deploy en Google Cloud Run (recomendado: recibe contenedores directo, tier gratis generoso, más simple que EC2/ECS para arrancar) o AWS si se prefiere ese ecosistema.
- Variables de entorno, logs, monitoreo básico.

**Fase 5 — Semanas 9-10: cerrar el círculo**
- Sumar el proyecto piloto al portfolio con su demo y link al repo.
- Simulacros de entrevista técnica en inglés.
- Aplicar en serio: metas de X aplicaciones/semana, seguimiento de respuestas.

## Búsqueda laboral (checklist continuo)

- [ ] CV y LinkedIn actualizados en inglés y español
- [ ] Portfolio con el proyecto Python+Docker+CI/CD visible
- [ ] 2-3 aplicaciones por semana desde la fase 5
- [ ] Práctica de entrevistas técnicas y de inglés

## Cómo seguir

Cada fase se puede pedir como ayuda puntual: revisión de código del portfolio, guía paso a paso en Python, armado del `Dockerfile` y el pipeline, o simulacro de entrevista en inglés.

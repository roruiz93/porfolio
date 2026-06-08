import { boot } from 'quasar/wrappers'
import { createI18n } from 'vue-i18n'

import es from '../i18n/es.json'
import en from '../i18n/en.json'

export const i18n = createI18n({
  locale: 'es',
  fallbackLocale: 'es',
  legacy: false,
  messages: { es, en }
})

export default boot(({ app }) => {
  app.use(i18n)
})

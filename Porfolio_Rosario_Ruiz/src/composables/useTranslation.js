import { ref } from 'vue'
import es from '../i18n/es.json'
import en from '../i18n/en.json'

const messages = { es, en }

// Estado global del idioma (singleton reactivo compartido entre componentes)
export const locale = ref('es')

/**
 * Resuelve una clave de traducción con notación de puntos.
 * Accede a locale.value internamente, así que Vue trackea la
 * dependencia y re-renderiza automáticamente al cambiar el idioma.
 */
export function t(key) {
  const parts = key.split('.')
  let val = messages[locale.value]
  for (const part of parts) {
    val = val?.[part]
    if (val === undefined) break
  }
  return typeof val === 'string' ? val : key
}

export function useTranslation() {
  return { t, locale }
}

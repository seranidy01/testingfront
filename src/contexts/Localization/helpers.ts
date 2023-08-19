import { BASE_URL } from 'config'
import { EN } from 'config/localization/languages'

export const LS_KEY = 'makiswap_language'

export const fetchLocale = async (locale) => {
  const response = await fetch(`${BASE_URL}/locales/${locale}.json`)
  const data = await response.json()
  return data
}

export const getLanguageCodeFromLS = () => {
  try {
    const codeFromStorage = localStorage.getItem(LS_KEY)

    return codeFromStorage || EN.locale
  } catch {
    return EN.locale
  }
}

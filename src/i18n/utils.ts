export type Language = 'en' | 'es'

interface LanguageInfo {
  longName: string
  shortName: string
  slug: string
  locale: string
}

export const languages: Record<Language, LanguageInfo> = {
  en: {
    longName: 'English',
    shortName: 'EN',
    slug: 'en',
    locale: 'en-US'
  },
  es: {
    longName: 'Español',
    shortName: 'ES',
    slug: 'es',
    locale: 'es-ES'
  }
}
export const defaultLang: Language = 'en'

export type Datai18n<T> = Record<Language, T>

export function getLangFromUrl (url: URL) {
  const [, lang] = url.pathname.split('/');
  if (lang in languages) {
    return lang as Language
  }
  return defaultLang
}

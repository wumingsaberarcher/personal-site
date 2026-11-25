import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from 'react'
import { detectInitialLocale, messages, type Locale, type Messages } from './messages'

type LocaleContextValue = {
  locale: Locale
  t: Messages
  setLocale: (locale: Locale) => void
}

const LocaleContext = createContext<LocaleContextValue | null>(null)

function applyDocumentLocale(locale: Locale, t: Messages) {
  document.documentElement.lang = locale === 'zh' ? 'zh-CN' : 'en'
  document.title = t.metaTitle
  const meta = document.querySelector('meta[name="description"]')
  if (meta) meta.setAttribute('content', t.metaDescription)
}

export function LocaleProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>(() => detectInitialLocale())

  const setLocale = useCallback((next: Locale) => {
    setLocaleState(next)
    try {
      localStorage.setItem('tl-locale', next)
    } catch {
      /* ignore */
    }
  }, [])

  const t = messages[locale]

  useEffect(() => {
    applyDocumentLocale(locale, t)
  }, [locale, t])

  const value = useMemo(
    () => ({ locale, t, setLocale }),
    [locale, t, setLocale],
  )

  return <LocaleContext.Provider value={value}>{children}</LocaleContext.Provider>
}

export function useLocale() {
  const ctx = useContext(LocaleContext)
  if (!ctx) throw new Error('useLocale must be used within LocaleProvider')
  return ctx
}

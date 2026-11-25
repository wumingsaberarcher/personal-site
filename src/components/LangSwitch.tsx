import { useLocale } from '../i18n/LocaleContext'

export function LangSwitch() {
  const { locale, setLocale, t } = useLocale()

  return (
    <div className="lang-switch" role="group" aria-label={t.lang.aria}>
      <button
        type="button"
        className={`lang-btn${locale === 'en' ? ' is-active' : ''}`}
        aria-pressed={locale === 'en'}
        onClick={() => setLocale('en')}
      >
        {t.lang.en}
      </button>
      <span className="lang-sep" aria-hidden="true">
        /
      </span>
      <button
        type="button"
        className={`lang-btn${locale === 'zh' ? ' is-active' : ''}`}
        aria-pressed={locale === 'zh'}
        onClick={() => setLocale('zh')}
      >
        {t.lang.zh}
      </button>
    </div>
  )
}

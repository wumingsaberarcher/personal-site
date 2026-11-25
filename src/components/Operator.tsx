import { useLocale } from '../i18n/LocaleContext'

export function Operator() {
  const { t } = useLocale()

  return (
    <section id="operator" className="section operator" aria-label={t.operator.aria}>
      <p className="kicker">{t.operator.kicker}</p>
      <h2 className="headline">{t.operator.headline}</h2>
      <p className="operator-body">{t.operator.body}</p>

      <div className="dossier">
        <div>
          <p className="dossier-label">{t.operator.education}</p>
          <p className="dossier-main">{t.operator.educationMain}</p>
          <p className="dossier-sub">{t.operator.educationSub}</p>
        </div>
        <div>
          <p className="dossier-label">{t.operator.stack}</p>
          <p className="dossier-main">{t.operator.stackMain}</p>
        </div>
      </div>

      <p className="availability">{t.operator.availability}</p>
    </section>
  )
}

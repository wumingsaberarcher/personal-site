import { RelicPlate } from './RelicPlate'
import { useLocale } from '../i18n/LocaleContext'

export function Relics() {
  const { t } = useLocale()

  return (
    <section id="relics" className="relics" aria-label={t.relics.aria}>
      <div className="section relics-head">
        <p className="kicker">{t.relics.kicker}</p>
        <h2 className="headline">{t.relics.headline}</h2>
      </div>

      <div className="relic-stack">
        {t.relics.items.map((r) => (
          <RelicPlate key={r.code} {...r} />
        ))}
      </div>
    </section>
  )
}

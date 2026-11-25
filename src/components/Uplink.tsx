import { useLocale } from '../i18n/LocaleContext'

export function Uplink() {
  const { t } = useLocale()

  return (
    <section id="uplink" className="section uplink" aria-label={t.uplink.aria}>
      <p className="kicker">{t.uplink.kicker}</p>
      <h2 className="headline">{t.uplink.headline}</h2>
      <a className="uplink-email" href="mailto:tli637@aucklanduni.ac.nz">
        tli637@aucklanduni.ac.nz ↗
      </a>
      <div className="uplink-links">
        <a href="https://github.com/wumingsaberarcher" target="_blank" rel="noreferrer">
          GitHub ↗
        </a>
        <a
          href="https://www.linkedin.com/in/tiancheng-li-692880340/"
          target="_blank"
          rel="noreferrer"
        >
          LinkedIn ↗
        </a>
        <a href={t.resumeHref} target="_blank" rel="noreferrer">
          {t.uplink.resume}
        </a>
      </div>
      <p className="phase-note">{t.uplink.phaseNote}</p>
      <footer className="uplink-foot">
        <span className="brand-foot">TIANCHENG LI</span>
        <span>{t.uplink.foot}</span>
      </footer>
    </section>
  )
}

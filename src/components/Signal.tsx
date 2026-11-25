import { HegemonyCrest } from './HegemonyCrest'
import { useLocale } from '../i18n/LocaleContext'

export function Signal() {
  const { t } = useLocale()

  return (
    <section id="signal" className="section signal" aria-label={t.signal.aria}>
      <div className="signal-stage">
        <div className="signal-copy">
          <p className="kicker">{t.signal.kicker}</p>
          <div className="brand-row">
            <div className="mark mark-crest" aria-hidden="true">
              <HegemonyCrest />
            </div>
            <h1 className="brand">TIANCHENG LI</h1>
          </div>
          <p className="headline signal-headline">
            {t.signal.headline1}
            <br />
            <span className="line-forward">{t.signal.headline2}</span>
          </p>
          <p className="signal-support">{t.signal.support}</p>
          <div className="actions">
            <a className="btn btn-primary" href="#relics">
              {t.signal.viewRelics}
            </a>
            <a
              className="btn btn-ghost"
              href={t.resumeHref}
              target="_blank"
              rel="noreferrer"
            >
              {t.signal.resume}
            </a>
          </div>
        </div>

        <div className="signal-visual" aria-hidden="true">
          <div className="orbit" />
          <div className="orbit orbit-inner" />
          <div className="core-mark core-crest">
            <HegemonyCrest />
          </div>
        </div>
      </div>
    </section>
  )
}

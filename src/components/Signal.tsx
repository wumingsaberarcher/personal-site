import { HegemonyCrest } from './HegemonyCrest'

export function Signal() {
  return (
    <section id="signal" className="section signal" aria-label="Signal">
      <div className="signal-stage">
        <div className="signal-copy">
          <p className="kicker">Signal · Operator Station</p>
          <div className="brand-row">
            <div className="mark mark-crest" aria-hidden="true">
              <HegemonyCrest />
            </div>
            <h1 className="brand">TIANCHENG LI</h1>
          </div>
          <p className="headline signal-headline">
            Always building.
            <br />
            <span className="line-forward">Always forward.</span>
          </p>
          <p className="signal-support">
            Final-year CS @ UoA · Auckland · full-stack &amp; games
          </p>
          <div className="actions">
            <a className="btn btn-primary" href="#relics">
              View relics ↓
            </a>
            <a
              className="btn btn-ghost"
              href="/resume/Li_Tiancheng_Resume.pdf"
              target="_blank"
              rel="noreferrer"
            >
              Resume PDF ↗
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

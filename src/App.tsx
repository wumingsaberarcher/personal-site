import { useState } from 'react'
import { Starfield } from './components/Starfield'
import { Signal } from './components/Signal'
import { Relics } from './components/Relics'
import { Operator } from './components/Operator'
import { Uplink } from './components/Uplink'
import { BootIntro, shouldShowBootIntro } from './components/BootIntro'
import { HegemonyCrest } from './components/HegemonyCrest'
import { LangSwitch } from './components/LangSwitch'
import { LocaleProvider, useLocale } from './i18n/LocaleContext'
import './styles/site.css'
import './styles/boot-intro.css'

function Station() {
  const { t } = useLocale()
  const [intro, setIntro] = useState(() => shouldShowBootIntro())
  const [topbarOn, setTopbarOn] = useState(() => !shouldShowBootIntro())

  const endIntro = () => {
    setIntro(false)
    setTopbarOn(true)
  }

  return (
    <div className="station">
      {intro && <BootIntro onFinished={endIntro} />}

      <header className={`site-topbar${topbarOn ? ' is-on' : ''}`}>
        <HegemonyCrest className="site-topbar-crest" />
        <span className="site-topbar-brand">TIANCHENG LI</span>
        <nav className="site-topbar-nav" aria-label={t.nav.aria}>
          <a href="#signal">{t.nav.signal}</a>
          <a href="#relics">{t.nav.relics}</a>
          <a href="#operator">{t.nav.operator}</a>
          <a href="#uplink">{t.nav.uplink}</a>
        </nav>
        <LangSwitch />
      </header>

      <Starfield />
      <main>
        <Signal />
        <Relics />
        <Operator />
        <Uplink />
      </main>
    </div>
  )
}

export default function App() {
  return (
    <LocaleProvider>
      <Station />
    </LocaleProvider>
  )
}

import { useState } from 'react'
import { Starfield } from './components/Starfield'
import { Signal } from './components/Signal'
import { Relics } from './components/Relics'
import { Operator } from './components/Operator'
import { Uplink } from './components/Uplink'
import { BootIntro, shouldShowBootIntro } from './components/BootIntro'
import { HegemonyCrest } from './components/HegemonyCrest'
import './styles/site.css'
import './styles/boot-intro.css'

export default function App() {
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
        <nav className="site-topbar-nav" aria-label="Section">
          <a href="#signal">Signal</a>
          <a href="#relics">Relics</a>
          <a href="#operator">Operator</a>
          <a href="#uplink">Uplink</a>
        </nav>
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

import { useEffect, useRef, useState } from 'react'
import { HegemonyCrest } from './HegemonyCrest'

const SESSION_KEY = 'tl-signal-intro-seen'

type Phase = 'assemble' | 'hold' | 'rise' | 'doors' | 'exit'

export function shouldShowBootIntro(): boolean {
  if (typeof window === 'undefined') return false
  try {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return false
    const params = new URLSearchParams(window.location.search)
    if (params.get('intro') === '1') {
      sessionStorage.removeItem(SESSION_KEY)
      return true
    }
    return sessionStorage.getItem(SESSION_KEY) !== '1'
  } catch {
    return true
  }
}

type Props = { onFinished: () => void }

export function BootIntro({ onFinished }: Props) {
  const [phase, setPhase] = useState<Phase>('assemble')
  const done = useRef(false)

  const finish = () => {
    if (done.current) return
    done.current = true
    setPhase('exit')
    try {
      sessionStorage.setItem(SESSION_KEY, '1')
      const url = new URL(window.location.href)
      if (url.searchParams.has('intro')) {
        url.searchParams.delete('intro')
        window.history.replaceState({}, '', url.pathname + url.search + url.hash)
      }
    } catch {
      /* ignore */
    }
    window.setTimeout(() => onFinished(), 520)
  }

  useEffect(() => {
    const timers = [
      window.setTimeout(() => setPhase('hold'), 1500),
      window.setTimeout(() => setPhase('rise'), 2100),
      window.setTimeout(() => setPhase('doors'), 2800),
      window.setTimeout(() => finish(), 3800),
    ]
    return () => timers.forEach(clearTimeout)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div
      className={`boot-intro phase-${phase}`}
      role="dialog"
      aria-modal="true"
      aria-label="Signal station boot sequence"
    >
      <div className="boot-void" aria-hidden="true" />
      <div className="boot-door boot-door-left" aria-hidden="true">
        <div className="boot-door-face">
          <span className="boot-door-rib" />
          <span className="boot-door-rib" />
          <span className="boot-door-rib" />
        </div>
      </div>
      <div className="boot-door boot-door-right" aria-hidden="true">
        <div className="boot-door-face">
          <span className="boot-door-rib" />
          <span className="boot-door-rib" />
          <span className="boot-door-rib" />
        </div>
      </div>

      <div className="boot-stage">
        <div className="boot-mark-wrap">
          <HegemonyCrest animated className="boot-crest" />
        </div>
        <p className="boot-kicker">Operator crest · locking signal</p>
        <p className="boot-title">TIANCHENG LI</p>
        <p className="boot-wait">Establishing uplink…</p>
      </div>

      <button type="button" className="boot-skip" onClick={finish}>
        Skip →
      </button>
    </div>
  )
}

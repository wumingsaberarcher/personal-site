import { useEffect, useRef } from 'react'

export type RelicPlateProps = {
  code: string
  title: string
  line: string
  chips: string[]
  links: { label: string; href: string }[]
  shot: string
  from: 'left' | 'right'
}

export function RelicPlate({
  code,
  title,
  line,
  chips,
  links,
  shot,
  from,
}: RelicPlateProps) {
  const ref = useRef<HTMLElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduce) {
      el.classList.add('is-in')
      return
    }
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add('is-in')
          io.disconnect()
        }
      },
      { threshold: 0.22, rootMargin: '0px 0px -8% 0px' },
    )
    io.observe(el)
    return () => io.disconnect()
  }, [])

  const imageFirst = from === 'left'

  return (
    <article
      ref={ref}
      className={`relic-plate from-${from}`}
      data-from={from}
    >
      <div className="relic-plate-rail" aria-hidden="true" />
      <div className={`relic-plate-inner${imageFirst ? '' : ' flip'}`}>
        <div className="relic-shot-stack">
          <div className="relic-shot-shadow" aria-hidden="true" />
          <div className="relic-shot-box">
            <img src={shot} alt="" loading="lazy" />
            <span className="corner tl" />
            <span className="corner tr" />
            <span className="corner bl" />
            <span className="corner br" />
          </div>
        </div>

        <div className="relic-info-box">
          <p className="kicker">{code}</p>
          <h3 className="relic-title">{title}</h3>
          <p className="relic-line">{line}</p>
          <div className="chips">
            {chips.map((c) => (
              <span className="chip" key={c}>
                {c}
              </span>
            ))}
          </div>
          <div className="relic-links">
            {links.map((l) => (
              <a
                key={l.label}
                href={l.href}
                target={l.href.startsWith('http') ? '_blank' : undefined}
                rel={l.href.startsWith('http') ? 'noreferrer' : undefined}
              >
                {l.label}
              </a>
            ))}
          </div>
          <span className="corner tl" aria-hidden="true" />
          <span className="corner tr" aria-hidden="true" />
          <span className="corner bl" aria-hidden="true" />
          <span className="corner br" aria-hidden="true" />
        </div>
      </div>
    </article>
  )
}

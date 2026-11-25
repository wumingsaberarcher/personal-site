import { useId } from 'react'
import { LAUREL_LEFT, LAUREL_RIGHT } from './laurelPaths'

type CrestProps = {
  className?: string
  animated?: boolean
}

/**
 * Hegemony crest: split disc + sword + Vecteezy laurel branches.
 * Laurels are rotated 180° so they open from the crossguard and wrap the disc.
 */
export function HegemonyCrest({ className = '', animated = false }: CrestProps) {
  const uid = useId().replace(/:/g, '')
  const leftClip = `crest-disc-left-${uid}`
  const rightClip = `crest-disc-right-${uid}`
  const a = animated ? 'crest-anim' : ''

  const cx = 100
  const cy = 122
  const r = 50
  const gap = 11

  // ===== 你主要改下面两个 =====
  // 左右分开：越大分得越开（现在 55 → 可试 70 / 85）
  const LAUREL_SEPARATE = 200
  // 整体上下：越大越往下（现在 78 → 可试 95 / 110）
  // （接在护手上的锚点 Y；剑护手大约在 y=56~62）
  const LAUREL_DOWN = 110
  // ============================

  // 一般不用动：整体缩放（越大月桂越大）
  const LAUREL_SCALE = 0.092

  // Source art center ~ (1350, 900); rotate 180 so opening attaches at the guard
  const laurelBase = `translate(100 ${LAUREL_DOWN}) scale(${LAUREL_SCALE}) rotate(180) translate(-1350 -900)`

  return (
    <svg
      className={`hegemony-crest ${a} ${className}`.trim()}
      viewBox="0 0 200 240"
      role="img"
      aria-label="Operator crest"
    >
      <defs>
        <clipPath id={leftClip}>
          <rect x="0" y="0" width={cx - gap} height="240" />
        </clipPath>
        <clipPath id={rightClip}>
          <rect x={cx + gap} y="0" width={200 - (cx + gap)} height="240" />
        </clipPath>
      </defs>

      <g className="crest-disc-left" clipPath={`url(#${leftClip})`}>
        <circle cx={cx} cy={cy} r={r} className="crest-fill" />
      </g>
      <g className="crest-disc-right" clipPath={`url(#${rightClip})`}>
        <circle cx={cx} cy={cy} r={r} className="crest-fill" />
      </g>

      {/* Outer g = clip reveal in crest space (guard → tips). Inner = art transform. */}
      <g className="crest-laurel-left">
        <g transform={`${laurelBase} translate(${-LAUREL_SEPARATE} 0)`}>
          <path d={LAUREL_LEFT} className="crest-fill" fillRule="evenodd" />
        </g>
      </g>
      <g className="crest-laurel-right">
        <g transform={`${laurelBase} translate(${LAUREL_SEPARATE} 0)`}>
          <path d={LAUREL_RIGHT} className="crest-fill" fillRule="evenodd" />
        </g>
      </g>

      <g className="crest-sword">
        <circle cx="100" cy="42" r="6.5" className="crest-fill" />
        <rect x="97.2" y="46" width="5.6" height="12" rx="1" className="crest-fill" />
        <rect x="76" y="56" width="48" height="6.5" rx="1.2" className="crest-fill" />
        <path
          d="M95.5 62.5 L95.5 168 L100 188 L104.5 168 L104.5 62.5 Z"
          className="crest-fill"
        />
        <path d="M100 68 L100 172" className="crest-fuller" />
      </g>
    </svg>
  )
}

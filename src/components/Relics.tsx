import { RelicPlate } from './RelicPlate'

const relics = [
  {
    code: 'RELIC 01',
    title: 'LearnChain',
    line: 'Gamified learning habit tracker shipped for MSA 2026 — React + ASP.NET Core / C# + PostgreSQL, with streaks that stay server-authoritative.',
    chips: ['React', 'ASP.NET', 'PostgreSQL', 'REST'],
    links: [
      { label: 'Demo ↗', href: 'https://learnchain-msa2026.vercel.app' },
      {
        label: 'GitHub ↗',
        href: 'https://github.com/wumingsaberarcher/learnchain-msa2026',
      },
    ],
    shot: '/relics/learnchain.png',
    from: 'left' as const,
  },
  {
    code: 'RELIC 02',
    title: 'Nexus (COMPSCI 399)',
    line: 'Configurable lifecycle checklist for ICH GCP E6(R3) clinical-trial requirements. Capstone Team Hyperhoyo — I owned testing: functional outline, merged suites, and held failing tests when product missed the client requirement.',
    chips: ['Testing', 'Java', 'GCP E6', 'Team'],
    links: [{ label: 'Capstone · Test engineer', href: '#operator' }],
    shot: '/relics/nexus.png',
    from: 'right' as const,
  },
  {
    code: 'RELIC 03',
    title: 'Exterminatus',
    line: '2.5D Unreal Engine 5 parkour/puzzle (GENESIS on itch). Models, routes, story; public build with a student team.',
    chips: ['UE5', 'C#', 'Blender'],
    links: [{ label: 'itch.io ↗', href: 'https://mason-liu-u.itch.io/genesis' }],
    shot: '/relics/exterminatus.png',
    from: 'left' as const,
  },
]

export function Relics() {
  return (
    <section id="relics" className="relics" aria-label="Relics">
      <div className="section relics-head">
        <p className="kicker">01 / Relics</p>
        <h2 className="headline">Built. Shipped. Still evolving.</h2>
      </div>

      <div className="relic-stack">
        {relics.map((r) => (
          <RelicPlate key={r.code} {...r} />
        ))}
      </div>
    </section>
  )
}

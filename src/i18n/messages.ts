export type Locale = 'en' | 'zh'

export type Messages = {
  metaTitle: string
  metaDescription: string
  nav: { signal: string; relics: string; operator: string; uplink: string; aria: string }
  lang: { en: string; zh: string; aria: string }
  boot: {
    aria: string
    kicker: string
    wait: string
    skip: string
  }
  signal: {
    aria: string
    kicker: string
    headline1: string
    headline2: string
    support: string
    viewRelics: string
    resume: string
  }
  relics: {
    aria: string
    kicker: string
    headline: string
    items: {
      code: string
      title: string
      line: string
      chips: string[]
      links: { label: string; href: string }[]
      shot: string
      from: 'left' | 'right'
    }[]
  }
  operator: {
    aria: string
    kicker: string
    headline: string
    body: string
    education: string
    educationMain: string
    educationSub: string
    stack: string
    stackMain: string
    availability: string
  }
  uplink: {
    aria: string
    kicker: string
    headline: string
    resume: string
    phaseNote: string
    foot: string
  }
  resumeHref: string
}

const relicsShared = {
  learnchainShot: '/relics/learnchain.png',
  nexusShot: '/relics/nexus.png',
  exterminatusShot: '/relics/exterminatus.png',
  learnchainDemo: 'https://learnchain-msa2026.vercel.app',
  learnchainGithub: 'https://github.com/wumingsaberarcher/learnchain-msa2026',
  itch: 'https://mason-liu-u.itch.io/genesis',
} as const

export const messages: Record<Locale, Messages> = {
  en: {
    metaTitle: 'Tiancheng Li · Signal Station',
    metaDescription:
      'Tiancheng Li — final-year CS @ UoA. Full-stack tools and playable worlds from Auckland.',
    nav: {
      signal: 'Signal',
      relics: 'Relics',
      operator: 'Operator',
      uplink: 'Uplink',
      aria: 'Section',
    },
    lang: { en: 'EN', zh: '中文', aria: 'Language' },
    boot: {
      aria: 'Signal station boot sequence',
      kicker: 'Operator crest · locking signal',
      wait: 'Establishing uplink…',
      skip: 'Skip →',
    },
    signal: {
      aria: 'Signal',
      kicker: 'Signal · Operator Station',
      headline1: 'Always building.',
      headline2: 'Always forward.',
      support: 'Final-year CS @ UoA · Auckland · full-stack & games',
      viewRelics: 'View relics ↓',
      resume: 'Resume PDF ↗',
    },
    relics: {
      aria: 'Relics',
      kicker: '01 / Relics',
      headline: 'Built. Shipped. Still evolving.',
      items: [
        {
          code: 'RELIC 01',
          title: 'LearnChain',
          line: 'Gamified learning habit tracker shipped for MSA 2026 — React + ASP.NET Core / C# + PostgreSQL, with streaks that stay server-authoritative.',
          chips: ['React', 'ASP.NET', 'PostgreSQL', 'REST'],
          links: [
            { label: 'Demo ↗', href: relicsShared.learnchainDemo },
            { label: 'GitHub ↗', href: relicsShared.learnchainGithub },
          ],
          shot: relicsShared.learnchainShot,
          from: 'left',
        },
        {
          code: 'RELIC 02',
          title: 'Nexus (COMPSCI 399)',
          line: 'Configurable lifecycle checklist for ICH GCP E6(R3) clinical-trial requirements. Capstone Team Hyperhoyo — I owned testing: functional outline, merged suites, and held failing tests when product missed the client requirement.',
          chips: ['Testing', 'Java', 'GCP E6', 'Team'],
          links: [{ label: 'Capstone · Test engineer', href: '#operator' }],
          shot: relicsShared.nexusShot,
          from: 'right',
        },
        {
          code: 'RELIC 03',
          title: 'Exterminatus',
          line: '2.5D Unreal Engine 5 parkour/puzzle (GENESIS on itch). Models, routes, story; public build with a student team.',
          chips: ['UE5', 'C#', 'Blender'],
          links: [{ label: 'itch.io ↗', href: relicsShared.itch }],
          shot: relicsShared.exterminatusShot,
          from: 'left',
        },
      ],
    },
    operator: {
      aria: 'Operator',
      kicker: '02 / Operator',
      headline: 'Curiosity is the operating system.',
      body: "I'm Tiancheng — a curious builder camping out in Auckland's night sky. I ship full-stack tools and playable worlds, following signals wherever they lead.",
      education: 'Education',
      educationMain: 'BSc Computer Science · University of Auckland',
      educationSub: 'GPA 6.45/9.0 · final year',
      stack: 'Stack',
      stackMain: 'React · C#/.NET · SQL · Unreal/C++ · Git',
      availability: 'AVAILABILITY · summer full-time Auckland; semester hours capped',
    },
    uplink: {
      aria: 'Uplink',
      kicker: '03 / Uplink',
      headline: "Let's build what's next.",
      resume: 'Resume PDF ↗',
      phaseNote: 'DeepSeek uplink — phase 2',
      foot: 'AUCKLAND NZ · 2026',
    },
    resumeHref: '/resume/Li_Tiancheng_Resume.pdf',
  },
  zh: {
    metaTitle: '李天成 · 信号站',
    metaDescription:
      '李天成 — 奥克兰大学计算机科学毕业年级。全栈产品与游戏作品，可远程协作。',
    nav: {
      signal: '信号',
      relics: '项目',
      operator: '关于',
      uplink: '联系',
      aria: '页面分区',
    },
    lang: { en: 'EN', zh: '中文', aria: '语言' },
    boot: {
      aria: '信号站启动序列',
      kicker: '操作员纹章 · 锁定信号',
      wait: '正在建立上行链路…',
      skip: '跳过 →',
    },
    signal: {
      aria: '信号',
      kicker: '信号 · 操作员站点',
      headline1: '持续构建。',
      headline2: '始终向前。',
      support: '奥克兰大学计算机毕业年级 · 全栈 / 游戏 · 可远程',
      viewRelics: '查看项目 ↓',
      resume: '中文简历 PDF ↗',
    },
    relics: {
      aria: '项目',
      kicker: '01 / 项目',
      headline: '做过。上线过。还在迭代。',
      items: [
        {
          code: '遗物 01',
          title: 'LearnChain',
          line: 'MSA 2026 上线的游戏化学习打卡应用 — React + ASP.NET Core / C# + PostgreSQL，连续天数由服务端权威校验。',
          chips: ['React', 'ASP.NET', 'PostgreSQL', 'REST'],
          links: [
            { label: '在线演示 ↗', href: relicsShared.learnchainDemo },
            { label: 'GitHub ↗', href: relicsShared.learnchainGithub },
          ],
          shot: relicsShared.learnchainShot,
          from: 'left',
        },
        {
          code: '遗物 02',
          title: 'Nexus（COMPSCI 399）',
          line: '面向 ICH GCP E6(R3) 临床试验需求的可配置生命周期清单。毕业设计团队 Hyperhoyo — 我负责测试：功能大纲、合并测试套件，并在产品未满足客户需求时保留失败用例。',
          chips: ['测试', 'Java', 'GCP E6', '团队'],
          links: [{ label: '毕业设计 · 测试工程师', href: '#operator' }],
          shot: relicsShared.nexusShot,
          from: 'right',
        },
        {
          code: '遗物 03',
          title: 'Exterminatus',
          line: 'UE5 2.5D 跑酷解谜（itch.io 上 GENESIS）。建模、关卡路径与叙事；学生团队公开试玩版。',
          chips: ['UE5', 'C#', 'Blender'],
          links: [{ label: 'itch.io ↗', href: relicsShared.itch }],
          shot: relicsShared.exterminatusShot,
          from: 'left',
        },
      ],
    },
    operator: {
      aria: '关于',
      kicker: '02 / 关于',
      headline: '好奇心是操作系统。',
      body: '我是李天成 — 一个在奥克兰夜空下扎营的好奇建造者。做全栈工具，也做可玩的世界，跟着信号走到哪儿算哪儿。',
      education: '教育',
      educationMain: '理学学士 · 计算机科学 · 奥克兰大学',
      educationSub: 'GPA 6.45/9.0 · 毕业年级',
      stack: '技术栈',
      stackMain: 'React · C#/.NET · SQL · Unreal/C++ · Git',
      availability: '可实习 · 新西兰暑假可全职；学期内可部分时间；可远程',
    },
    uplink: {
      aria: '联系',
      kicker: '03 / 联系',
      headline: '一起做下一件有意思的事。',
      resume: '中文简历 PDF ↗',
      phaseNote: 'DeepSeek 上行链路 — 第二阶段',
      foot: '新西兰奥克兰 · 2026',
    },
    resumeHref: '/resume/Li_Tiancheng_Resume_CN.pdf',
  },
}

export function detectInitialLocale(): Locale {
  if (typeof window === 'undefined') return 'en'
  try {
    const saved = localStorage.getItem('tl-locale')
    if (saved === 'en' || saved === 'zh') return saved
    const nav = navigator.language?.toLowerCase() ?? ''
    if (nav.startsWith('zh')) return 'zh'
  } catch {
    /* ignore */
  }
  return 'en'
}

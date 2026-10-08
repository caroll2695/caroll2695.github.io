export interface Role {
  title: string;
  period: string;
  summary: string;
  points: string[];
}

// Galaxy roles, newest first. Source: résumé.
export const galaxyRoles: Role[] = [
  {
    title: 'Head of Engineering, Edge and Platforms',
    period: 'Feb 2026 to present',
    summary:
      'I lead a 30-person engineering organization across Galaxy Edge, our product and engineering incubation studio, and forward-deployed engineering.',
    points: [
      'Custody, staking, tokenization and DeFi solutions for tier-one banks and asset managers.',
      'Globally distributed smart contract and back-end teams building on-chain capital markets products, including the Galaxy Vaults platform.',
      "Launched SWEEP, Galaxy's first tokenized product and platform: an on-chain money market fund solution built with State Street.",
    ],
  },
  {
    title: 'Director, Head of Platform and Delivery Engineering',
    period: 'Feb 2025 to Feb 2026',
    summary:
      "Head of Staking Platform. I built and launched the platform and the business, and scaled it to a peak of $3B+ under stake across 8,000+ Ethereum validators.",
    points: [
      "Led a forward-deployed engagement on-site with the world's largest asset manager to deliver an industry-first ETH staking solution: the client kept control of its validator keys while Galaxy operated the validator infrastructure.",
      'Owned the shared blockchain platform, including a tooling cluster ingesting 500,000+ metrics per second across 20+ validator networks.',
      'Built the distributed systems and protocol engineering team; introduced sprint planning and work intake; set up incident triage, response and runbooks.',
    ],
  },
  {
    title: 'Director, Principal SRE',
    period: 'Jan 2024 to Feb 2025',
    summary:
      'Infrastructure, networking and reliability for the RFS trading platform and the EMS/PMS systems behind a low-latency market-making business.',
    points: [
      "Led Corporate Network and Systems Engineering for six months alongside SRE.",
      'Built out on-premises bare-metal infrastructure on Equinix Metal.',
      'Deployed and managed Zscaler zero trust (ZIA and ZPA) for secure internet and private application access.',
    ],
  },
  {
    title: 'Vice President, Site Reliability Engineering',
    period: 'May 2022 to Dec 2023',
    summary:
      'Container, distributed systems and networking infrastructure for Galaxy Global Markets and DeFi platforms.',
    points: [
      'Kubernetes as the standard runtime for trading and DeFi services.',
      'Flux as the firm-wide GitOps standard for continuous delivery.',
      'Infrastructure-as-code and CI/CD automation; championed DevOps and SRE practice across engineering.',
    ],
  },
];

export const beforeGalaxy =
  'Before Galaxy I led platform engineering at Apex Crypto. I started as a software engineer at Boeing after a computer science degree at NC State.';

export const skills: { group: string; items: string }[] = [
  { group: 'Blockchain', items: 'Ethereum execution clients (Geth, Besu, Nethermind) and consensus clients (Lighthouse, Teku), validator operations, staking infrastructure, tokenization, DeFi vaults (ERC-4626), smart contract platforms' },
  { group: 'Capital markets', items: 'Electronic trading infrastructure (RFS, EMS/PMS), low-latency market making, liquidity partner connectivity, custody and wallet security' },
  { group: 'Platform and distributed systems', items: 'Kubernetes, Kafka, Airflow, event-driven architecture, multi-region disaster recovery, low-latency networking' },
  { group: 'Cloud', items: 'AWS (commercial and Gov), Azure (commercial and Gov), Google Cloud, OVH' },
  { group: 'Observability', items: 'Datadog, Prometheus, Grafana, Loki, ELK' },
  { group: 'Tools and languages', items: 'Docker, Terraform, Helm, GitHub Actions, Flux, Zscaler; Python, Go, Java, Bash, SQL' },
];

export const education = {
  degree: 'B.S. in Computer Science, minor in Business Administration',
  school: 'North Carolina State University',
  honors: 'Magna cum laude',
  certs: ['AWS Certified Cloud Practitioner', 'Cloud Technologies, DevOps and Cloud Architecture', 'App Containerization and Kubernetes CI/CD'],
};

export const howIWork: { title: string; body: string }[] = [
  {
    title: 'Incidents',
    body: "When something goes wrong, we first get clear on what's happening and who is doing what. Then we investigate, fix it, and write up what we learned. Clients should understand what happened and see the fixes in place, and the system should be better afterward.",
  },
  {
    title: 'On-call',
    body: 'I tell new engineers that on-call is a way to build operational muscle. It shows you which parts of the system matter most and which are most frail.',
  },
  {
    title: 'Owners',
    body: 'As the team grew, I put leads and accountable owners over each initiative, so the book of work always had someone responsible for it.',
  },
  {
    title: 'Clients',
    body: "I listen to what clients are actually telling us, and I treat the work as mine. I try to lead as a servant leader.",
  },
];

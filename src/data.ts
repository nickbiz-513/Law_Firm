import { TeamMember, PracticeArea, Publication } from './types';

export const COMPLIANCE_NOTICE = {
  bciRule36Text: `In compliance with the rules of the Standard Legal Compliance Board (specifically Rule 36 of Section IV of the Common Rules of the Standard Legal Compliance Board), Apex Legal Partners is prohibited from soliciting work or advertising its services. This website has been designed solely to provide general, objective, and academic information regarding the firm's history, partner biographies, practice sectors, and legal publications.`,
  bciUndertakingText: `By clicking "I AGREE" below, the user acknowledges and confirms that:
1. There has been no advertisement, personal communication, solicitation, invitation, or inducement of any sort whatsoever from Apex Legal Partners or any of its members to solicit any work through this website.
2. The user wishes to gain information about Apex Legal Partners for their own information and use.
3. The information provided about the firm is made available to the user solely on their specific request, and any information obtained or materials downloaded from this website is completely at the user's voluntary discretion and does not create an attorney-client relationship.`,
  dpdpNoticeTitle: `Personal Data Processing Notice (under International Data Privacy Framework)`,
  dpdpNoticeText: `Under the provisions of the International Data Privacy Framework, Apex Legal Partners (acting as the 'Data Fiduciary') hereby informs the user ('Data Subject') of the following:
1. Data Collected: Only basic identity and routing data voluntarily provided by you (such as Name, Organization, Email, and Phone) is collected. No silent browser tracking or profiling cookies are deployed.
2. Purpose of Collection: Solely to process and respond to specific legal inquiries or publication requests raised voluntarily by the user, and to maintain compliance records showing Standard Legal Compliance Board undertaking history.
3. Rights of the Data Subject: You maintain the right to access, rectify, complete, or withdraw consent at any time. To withdraw your consent instantly and purge all logged identity entries from active system memory, utilize the interactive 'Privacy Control Panel' at the bottom of the portal.
4. Data Protection Officer (DPO): Robert Vance (privacy@legal-demo.com; Senior Partner & DPO).`
};

export const PRACTICE_AREAS: PracticeArea[] = [
  {
    id: 'corp-ma',
    title: 'Corporate & Mergers & Acquisitions',
    slug: 'corporate-m-and-a',
    iconName: 'Building2',
    brief: 'Strategic advice on complex domestic & cross-border acquisitions, joint ventures, and capital restructurings.',
    description: 'Our Corporate Practice represents major multi-national corporations, private equity funds, and leading global conglomerates. We specialize in navigating structurally intricate acquisitions, structured debt compliance, cross-border corporate investments, and strategic consolidations with an emphasis on corporate governance and antitrust considerations.',
    focusAreas: [
      'Cross-Border Mergers & Spin-offs',
      'Joint Ventures & Strategic Alliances',
      'Inbound Regulatory Affairs',
      'Corporate Restructuring & Recapitalization'
    ]
  },
  {
    id: 'dispute-res',
    title: 'Dispute Resolution & Litigation',
    slug: 'dispute-resolution',
    iconName: 'Scale',
    brief: 'High-stakes advisory and representation before active commercial tribunals, High Courts, and Appellate Courts.',
    description: 'Apex Legal Partners maintains a formidable disputes team representing corporate and state fiduciaries. We specialize in domestic and international institutional arbitrations, statutory compliance investigations, intellectual property enforcement loops, and complex corporate litigation including shareholder oppression and tax wrangles.',
    focusAreas: [
      'Appellate & Supreme Court Litigation',
      'Corporate Law Appellate Appeals',
      'ICC, LCIA, and SIAC Arbitrations',
      'White-Collar Defense & Inquiries'
    ]
  },
  {
    id: 'banking-finance',
    title: 'Banking, Recovery & Insolvency',
    slug: 'banking-and-insolvency',
    iconName: 'Coins',
    brief: 'Structured transactional assistance and insolvency resolutions under global restructuring guidelines.',
    description: 'Advising lead creditors, financial institutions, and resolution professionals on complex leverage debt, distressed assets, and liquidations. We regularize structured risk mitigation plans and provide representing services in active corporate insolvency resolution processes.',
    focusAreas: [
      'Insolvency & Bankruptcy Code Litigation',
      'Debt Restructuring & Asset Reconstruction',
      'Project Finance & Consortium Loan Counseling',
      'Securities Regulations Compliance'
    ]
  },
  {
    id: 'tech-ip-data',
    title: 'Technology, IP & Data Protection',
    slug: 'technology-and-data-protection',
    iconName: 'ShieldAlert',
    brief: 'Pioneering advice on the International Data Privacy Framework, modern intellectual property frameworks, and technology licensing.',
    description: 'We help global fiduciaries calibrate their technical assets to comply with newly enacted data privacy frameworks, emphasizing data minimisation limits under the International Data Privacy Framework. Our IP group protects patent and copyright assets across heavy manufacturing, pharmaceutical, and technology sectors.',
    focusAreas: [
      'Privacy Framework Auditing & Compliance',
      'Technology Transfer & IP Licensing Agreements',
      'E-commerce & Digital Commerce Regulations',
      'Broadband, Telecom, & Satellite Operations'
    ]
  }
];

export const TEAM_MEMBERS: TeamMember[] = [
  {
    id: 'robert-vance',
    name: 'Robert Vance',
    role: 'Senior Partner',
    avatarUrl: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=300&h=300',
    education: [
      'B.A. LL.B. (Hons.), Elite National Law School',
      'Bachelor of Civil Law (BCL), University of Oxford (Rhodes Scholar)'
    ],
    bars: [
      'Standard Legal Compliance Board, 1999',
      'Appellate Court Bar Association'
    ],
    expertise: [
      'Corporate Board Advisory',
      'Constitutional Law',
      'International Commercial Arbitration',
      'Data Governance & DPO-Fiduciary Frameworks'
    ],
    biography: 'Robert Vance is the Founding Partner of Apex Legal Partners. With over 25 years of standing in appellate and Supreme Courts, Robert advises on high-value joint-venture realignments, constitutional challenges to fiscal statutes, and represents Fortune 100 conglomerates in ad-hoc and institutional international arbitrations. He frequently acts as an independent expert before committees analyzing privacy legislations.',
    email: 'robert.vance@legal-demo.com',
    linkedin: 'linkedin.com/in/robert-vance-example',
    keyPublications: [
      '"The Architecture of Consent: International Data Privacy Framework & the New Fiduciary Balance", Corporate Law Journal (2024)',
      '"Cross-Border Arbitration in Sovereign States", Oxford University Press (2018)'
    ]
  },
  {
    id: 'sarah-mitchell',
    name: 'Sarah Mitchell',
    role: 'Partner',
    avatarUrl: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=300&h=300',
    education: [
      'B.B.A. LL.B. (Hons.), Elite Law University',
      'LL.M. in Dispute Resolution, Harvard Law School'
    ],
    bars: [
      'Standard Legal Compliance Board, 2005'
    ],
    expertise: [
      'Dispute Resolution',
      'Insolvency & Corporate Restructuring',
      'Infrastructure disputes',
      'Venture Capital Restructuring'
    ],
    biography: 'Sarah Mitchell heads our Dispute Resolution group. She possesses intensive experience representing corporate clients and sovereign entities before commercial court tribunals, specialized infrastructure tribunals, and in ad-hoc panels. Her work on multi-billion dollar distressed debt reallocations is highly recognized inside international insolvency circles.',
    email: 'sarah.mitchell@legal-demo.com',
    linkedin: 'linkedin.com/in/sarah-mitchell-example',
    keyPublications: [
      '"Judicial Discretion under Corporate Insolvency Frameworks" (2022)',
      '"A Treatise on Institutional Commercial Arbitrations", Eastern Book Company (2020)'
    ]
  },
  {
    id: 'david-thompson',
    name: 'David Thompson',
    role: 'Partner',
    avatarUrl: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=300&h=300',
    education: [
      'B.A. LL.B. (Hons.), National Law Institute'
    ],
    bars: [
      'Standard Legal Compliance Board, 2008'
    ],
    expertise: [
      'M&A, Divestitures & Leveraged Buyouts',
      'Competition Law & Merger Control',
      'Joint Ventures',
      'Real Estate Investment Trusts (REITs)'
    ],
    biography: 'David Thompson leads our Corporate advisory group, advising listed multi-nationals and private equity funds on transactional clearances, antitrust mergers control filings, and investment exits. He has curated major private-equity acquisitions in the pharmaceutical, heavy logistic, and automotive sectors.',
    email: 'david.thompson@legal-demo.com',
    linkedin: 'linkedin.com/in/david-thompson-example'
  },
  {
    id: 'emily-carter',
    name: 'Emily Carter',
    role: 'Senior Associate',
    avatarUrl: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=300&h=300',
    education: [
      'B.A. LL.B. (Hons.), Metropolitan Law School'
    ],
    bars: [
      'Standard Legal Compliance Board, 2017'
    ],
    expertise: [
      'Privacy Compliance Management',
      'Technology & Telecom Regulations',
      'Media Licensing & IP Audit'
    ],
    biography: 'Emily Carter\'s focus is advising technology clusters and digital service companies on compliance under newly-released International Data Privacy Frameworks. She manages complex privacy audits, drafts global consent guidelines, and manages corporate IP portfolios.',
    email: 'emily.carter@legal-demo.com',
    linkedin: 'linkedin.com/in/emily-carter-example'
  }
];

export const PUBLICATIONS: Publication[] = [
  {
    id: 'pub-dpdp',
    title: 'Implementing the International Data Privacy Framework: Corporate Liability and Compliance Blueprints',
    category: 'Regulatory Update',
    date: 'April 14, 2026',
    author: 'Robert Vance & Emily Carter',
    readTime: '12 min read',
    summary: 'An academic briefing on Board-level liabilities, Data Fiduciary regulations, and key consent frameworks specified under the International Data Privacy Framework.',
    content: [
      'The International Data Privacy Framework marks a paradigm shift in how corporations operate with personal identifiers globally. Moving beyond older passive structures, this framework establishes direct statutory obligations for "Data Fiduciaries."',
      'Among these obligations, guidelines set down a strict condition on consent: personal data can only be handled on the basis of a designated Consent Notice that is free, specific, informed, unconditional, and unambiguous. Fiduciaries must present the notice in clear language accessible to users across global jurisdictions.',
      'Further, companies must appoint a visible Data Protection Officer (DPO) to handle queries, and must implement strict, instantaneous technical pathways to purge a user\'s personal records upon withdrawal of their consent. Boards failing to meet these technical mandates face significant statutory penalties, meaning compliance is no longer a checklist, but an absolute structural requirement.'
    ]
  },
  {
    id: 'pub-insolvency',
    title: 'Evaluating the Reciprocal Enforcement of Cross-Border Insolvency Protocols',
    category: 'Corporate Advisory',
    date: 'March 2, 2026',
    author: 'Sarah Mitchell',
    readTime: '9 min read',
    summary: 'A scholarly review exploring why modern jurisdictions require a statutory UNCITRAL Model Law on cross-border bankruptcy to stabilize external project investments.',
    content: [
      'As international financial structures become deeply tied into global assets, domestic courts face unprecedented difficulties handling cross-border corporate bankruptcy. While modern insolvency codes have modernized domestic recovery, their statutory clauses lack automated cooperation pathways with overseas jurisdictions.',
      'Standard corporate laws contain enabling provisions for bilateral treaties and reciprocal letters of request, but their implementation remains slow. In high-profile bank liquidations, judicial authorities are forced to devise ad-hoc protocols to coordinate litigation, resulting in lengthy transactional delays.',
      'Integrating the UNCITRAL Model Law on Cross-Border Insolvency is critical to give legislative authority to judicial boards. This modification would standardize the recognition of foreign bankruptcy proceedings, secure asset preservation mechanisms, and restore institutional confidence among overseas debt providers.'
    ]
  },
  {
    id: 'pub-taxation',
    title: 'The Double Taxation Avoidance Treaty Realignment (MLI) and Strategic Outbound Assets',
    category: 'Treaty & Tax',
    date: 'January 28, 2026',
    author: 'David Thompson',
    readTime: '15 min read',
    summary: 'Analyzing the legal ramifications of the Multi-Lateral Instrument (MLI) framework on outbound investments under the newly adjusted double tax accords.',
    content: [
      'The ratification of the OECD’s Multilateral Instrument (MLI) by major trade partner jurisdictions continues to rewrite international tax planning rules. The introduction of the "Principal Purpose Test" (PPT) significantly increases corporate risk for structures that seek cross-border tax benefits without solid economic substance in their destination territory.',
      'Our tax audit highlights that older standard structures utilizing holding hubs must be re-evaluated to ensure they have real commercial presence. Fiduciaries managing outbound entities must focus on establishing local operational management, real physical space, and local board oversight to survive stringent anti-avoidance audits.',
      'This briefing outlines practical measures corporate boards can implement to substantiate their corporate structures, aligning global operations with active compliance rules while navigating the shifting sands of global double taxation treaties.'
    ]
  }
];

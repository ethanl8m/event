import { AgendaItem, TopicDetail } from '../types';

export const EVENT_DETAILS = {
  brandSubtitle: "Exclusive Closed-Door Session",
  mainTitle: "EXECUTIVE NETWORKING",
  titleSecondLine: "& STRATEGY MIXER 2026",
  tagline: "Optimizing Business Cash Flow & Navigating Cost Realities for SMEs",
  date: "Monday, 31 August 2026",
  isoDate: "2026-08-31T16:30:00+08:00",
  isoEndDate: "2026-08-31T18:30:00+08:00",
  time: "4:30 PM – 6:30 PM SGT",
  doorsOpen: "4:15 PM SGT",
  venueName: "iFAST Financial – Boardroom",
  venueAddress: "10 Collyer Quay, #26-01 Ocean Financial Centre, Singapore 049315",
  mrtStation: "Raffles Place MRT (NS26 / EW14) - Exit J / Exit E direct underpass connection",
  dressCode: "Smart Casual / Executive Attire",
  totalCapacity: 25,
  initialReserved: 18,
  organizer: "GleamCore Private Limited",
  hostEmail: "contact@gleamcore.com",
  targetAudience: "Business Owners, SME Founders, Managing Directors, and Finance Leaders",
  overview: "Designed specifically for business owners and SME leaders operating in Singapore's competitive marketplace, this strategy briefing offers actionable insights to protect your operating margins, optimize idle cash, and elevate operational resilience for the year ahead."
};

export const TOPICS: TopicDetail[] = [
  {
    id: "topic-1",
    topicNumber: 1,
    title: "Growing Money Beyond the Bank Account: Smarter Cash Management for Businesses",
    speaker: "Stephen Chng, Investment Advisor, iFast",
    subtitle: "Yield Optimization for Idle Working Capital",
    description: "Most businesses hold more cash in traditional bank accounts than necessary for daily operations—often earning negligible interest. Learn how yield-enhancing instruments like bond funds offer a balanced middle ground: driving higher returns on working capital than idle cash, without taking on the volatility of traditional risk assets. Discover how to structure cash management effectively while evaluating liquidity and potential risks.",
    keyTakeaways: [
      "Identifying threshold for minimum operational cash vs idle surplus",
      "Short-term bond funds vs treasury bills vs commercial deposits",
      "Liquidity buffers and quick and easy capital retrieval",
      "Risk mitigation and inflation protection for SGD operating cash"
    ]
  },
  {
    id: "topic-2",
    topicNumber: 2,
    title: "Cost Hacking: Paying for What It Is Worth",
    speaker: "Ethan Lim, Managing Director, GleamCore",
    strikethroughText: "Growth",
    subtitle: "Lean SME Operations & Margin Expansion",
    description: "Operating solely on a Singapore cost base while targeting only local demand creates a structural disadvantage from day one. With elevated cost structures, persistent inflation, and compressing margins ahead, doing nothing is not an option. Learn practical strategies to eliminate inefficiencies, rethink resource allocation, and optimize your operational model before competitor efficiency and market pressures erode profitability.",
    keyTakeaways: [
      "Auditing recurring operating expenditure & vendor markup margins",
      "Regional talent allocation & cross-border operating hybrid structures",
      "Fixed overhead conversion to elastic, performance-based costs",
      "Automation & AI workflow integration to compress administrative cost ratios"
    ]
  }
];

export const AGENDA: AgendaItem[] = [
  {
    time: "4:15 PM – 4:30 PM",
    title: "Registration & Arrival",
    description: "Executive check-in at #26-01 reception, badge collection, welcome refreshments and preliminary networking.",
    category: "Arrival"
  },
  {
    time: "4:30 PM – 4:40 PM",
    title: "Opening Remarks",
    description: "Welcome address setting the stage for Singapore SME macroeconomic conditions in 2026.",
    category: "Keynote"
  },
  {
    time: "4:40 PM – 6:00 PM",
    title: "Executive Strategy Deep-Dive",
    description: "Topic 1: Growing Money Beyond the Bank Account followed by Topic 2: Cost Hacking: Paying for What It Is Worth.",
    category: "Strategy"
  },
  {
    time: "6:00 PM – 6:30 PM",
    title: "Q&A, Open Discussion & Executive Networking",
    description: "Interactive floor discussion, peer strategy exchange, and networking with refreshments and canapés.",
    category: "Networking"
  }
];


export const navItems = [
  { label: 'HOME', href: '/' },
  { label: 'ABOUT', href: '/about' },
  { label: 'PRODUCTS', href: '/products' },
  { label: 'PARTNERS', href: '/partners' },
  { label: 'FAQ', href: '/faq' },
  { label: 'PROCUREMENT', href: '/procurement' },
];

export const metrics = [
  {
    label: 'Below PM E-DRIVE benchmark pricing at full margin.',
    value: '31-36%',
    code: 'Metric 01',
  },
  {
    label: 'Industrial hardware units shipped and field-tested.',
    value: '67+',
    code: 'Metric 02',
  },
  {
    label: 'Combined director manufacturing and operations experience.',
    value: '50+',
    code: 'Metric 03',
  },
  {
    label: 'Open Charge Point Protocol certified portfolio.',
    value: 'OCPP 2.0.1',
    code: 'Cert 01',
  },
];

export const rangeCards = [
  {
    name: 'FLOW AC',
    tag: 'SYSTEM_NODE_01 // AC_SERIES',
    copy: 'Reliable destination charging for commercial properties and fleet installations.',
    specs: [
      ['Output', '7.4kW, 11kW, 22kW'],
      ['Connectivity', 'OCPP 2.0.1 Open Architecture'],
      ['Price Bracket', 'INR 35K - INR 65K'],
    ],
  },
  {
    name: 'STORM DC',
    tag: 'SYSTEM_NODE_02 // DC_FAST_SERIES',
    copy: 'High-throughput charging for highway corridors and busy transport depots.',
    specs: [
      ['Output', '30kW, 60kW, 120kW'],
      ['Connector', 'Dual CCS2 Charging Guns'],
      ['Enclosure', 'IP54 / IK10 Industrial Steel'],
    ],
  },
  {
    name: 'BLAZE ULTRA',
    tag: 'SYSTEM_NODE_03 // DC_ULTRA_SERIES',
    copy: 'Ultra-fast modular charging setups for heavy commercial vehicles and large transit hubs.',
    specs: [
      ['Output', '240kW+ Extreme Throughput'],
      ['Protocol', 'Liquid-Cooled / Dynamic Sharing'],
      ['Architecture', 'Future-Proof Modular Config'],
    ],
  },
];

export const productMatrix = [
  ['ENKO Flow 7', '7.4kW AC Commercial', 'Workplace parking, retail hubs, apartments'],
  ['ENKO Flow 11', '11kW AC Commercial', 'Corporate campuses and long-stay public parking'],
  ['ENKO Flow 22', '22kW AC Commercial', 'Fleet depots, parking decks, logistics spaces'],
  ['ENKO Storm 30', '30kW DC Fast Charging', 'Local fleet hubs, retail parking, workshops'],
  ['ENKO Storm 60', '60kW DC Fast Charging', 'Highway stops, urban hubs, fleet operations'],
  ['ENKO Storm 120', '120kW DC Fast Charging', 'Express corridors, e-bus fleets, logistics hubs'],
  ['ENKO Blaze 240', '240kW+ DC Ultra Charging', 'Heavy-duty EV bus and truck corridors'],
];

export const partnerSegments = [
  {
    title: 'Charge Point Operators',
    copy: 'Maximize infrastructure rollouts with CCS2 chargers priced 31% to 36% below PM E-DRIVE benchmark while keeping margins intact.',
  },
  {
    title: 'Original Equipment Manufacturers',
    copy: 'Use ENKO domestic assembly lines for market-ready CCS2 charging hardware built to match high automotive standards.',
  },
  {
    title: 'Fleet & Depot Operators',
    copy: 'Deploy multi-unit DC fast-charging configurations from 30kW to 240kW+ for high-utilization logistics fleets.',
  },
];

export const faqs = [
  {
    q: 'What communications protocol do ENKO chargers run on?',
    a: 'Every charger across the line runs standard OCPP 2.0.1 software for plug-and-play integration with OCPP-compliant CMS or network platforms.',
  },
  {
    q: 'Do you supply hardware outside of South India?',
    a: 'ENKO is South India-first across Tamil Nadu, Kerala, and Andhra Pradesh, with pan-India expansion moving forward for qualified projects.',
  },
];

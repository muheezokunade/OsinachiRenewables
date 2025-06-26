export interface PortfolioProject {
  id: number;
  category: string;
  title: string;
  slug: string;
  client: string;
  challenge: string;
  approach: string;
  solution: string;
  results: string;
  testimonial: string;
  systemSize: string;
  image: string;
}

export const projects: PortfolioProject[] = [
  {
    id: 1,
    category: 'industrial',
    title: 'Manufacturing Facility, Lagos',
    slug: 'manufacturing-facility-lagos',
    client: 'Mid-Sized Factory',
    challenge:
      'High diesel costs and frequent production losses from grid failures were crippling profitability.',
    approach:
      'Our team conducted a full energy audit and designed a hybrid system to leverage their existing generator as a final backup, not a primary source.',
    solution:
      'A 50kW custom solar system with a 100kWh battery bank, integrated with their existing 250kVA generator.',
    results:
      '60% reduction in monthly diesel costs, 99.9% power uptime, and a projected ROI of 3.5 years.',
    testimonial:
      "Our production line hasn't stopped once since installation. The ROI exceeded our projections.",
    systemSize: '50kW',
    image:
      'https://media.licdn.com/dms/image/v2/D4D12AQErp1TDBKn21w/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1725526028702?e=2147483647&v=beta&t=DyzpZoSbGYdN47aIa2us4Gfac86kszno3dtrJHJbpaI',
  },
  {
    id: 2,
    category: 'commercial',
    title: 'Luxury Hotel, Abuja',
    slug: 'luxury-hotel-abuja',
    client: '5-Star Hotel',
    challenge:
      'Frequent power outages were affecting guest experience and operational efficiency, leading to complaints and lost revenue.',
    approach:
      'Designed an integrated power solution that prioritizes guest comfort while maintaining operational efficiency.',
    solution:
      'A 75kW hybrid system with smart load management ensuring 24/7 power to critical areas.',
    results:
      'Zero power interruptions in guest areas, 45% reduction in energy costs, improved guest satisfaction scores.',
    testimonial:
      'Finally found a power solutions company that understands hospitality. Our guests never experience power issues.',
    systemSize: '75kW',
    image:
      'https://images.pexels.com/photos/261102/pexels-photo-261102.jpeg?auto=compress&w=800&h=600&fit=crop',
  },
  {
    id: 3,
    category: 'residential',
    title: 'Private Estate, Port Harcourt',
    slug: 'private-estate-port-harcourt',
    client: 'Family Residence',
    challenge:
      "Unreliable grid power was affecting family comfort, children's studies, and increasing monthly electricity bills.",
    approach:
      'Comprehensive home energy assessment and design of a family-friendly power solution.',
    solution:
      'A 15kW solar system with battery backup designed for optimal home comfort and energy independence.',
    results:
      'Uninterrupted power for study and family activities, 55% reduction in electricity bills.',
    testimonial:
      'The kids can now study without interruption, and our bills dropped by more than half. Worth every naira!',
    systemSize: '15kW',
    image:
      'https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&w=800&h=600&fit=crop',
  },
  {
    id: 4,
    category: 'commercial',
    title: 'Banking Branch, Lagos',
    slug: 'banking-branch-lagos',
    client: 'Commercial Bank',
    challenge:
      'Critical banking operations required 100% uptime with backup systems for ATMs and core banking operations.',
    approach:
      'Engineered a redundant power system with multiple backup layers for mission-critical operations.',
    solution:
      'Integrated solar-battery-generator system with automatic failover and UPS backup for sensitive equipment.',
    results:
      '100% uptime for banking operations, significant cost savings, enhanced customer satisfaction.',
    testimonial:
      'Our branch operations are now completely reliable. Customer complaints about ATM downtime are zero.',
    systemSize: '30kW',
    image:
      'https://www.everybitmatters.com/wp-content/uploads/2023/02/openbank-1.jpeg',
  },
  {
    id: 5,
    category: 'industrial',
    title: 'Food Processing Plant, Kano',
    slug: 'food-processing-plant-kano',
    client: 'Food Manufacturing Company',
    challenge:
      'Temperature-sensitive production processes required consistent power to maintain quality and prevent spoilage.',
    approach:
      'Designed a robust power system with quick switchover capabilities to protect sensitive processes.',
    solution:
      '80kW hybrid system with priority load management for critical refrigeration and processing equipment.',
    results:
      'Zero production losses due to power issues, 40% reduction in energy costs, improved product quality consistency.',
    testimonial:
      "Our product quality is now consistent, and we've eliminated costly production losses due to power failures.",
    systemSize: '80kW',
    image:
      'https://lirp.cdn-website.com/8e208c98/dms3rep/multi/opt/Tips+for+streamlining+your+food+processing+plant-1920w.jpeg',
  },
  {
    id: 6,
    category: 'residential',
    title: 'Residential Estate, Abuja',
    slug: 'residential-estate-abuja',
    client: 'Gated Community',
    challenge:
      'Multiple homes in the estate needed a coordinated power solution for common areas and individual units.',
    approach:
      'Community-wide power assessment and design of scalable solutions for individual homes and shared facilities.',
    solution:
      'Distributed solar system with community battery storage and individual home backup systems.',
    results:
      'Estate-wide power reliability, reduced common area maintenance costs, increased property values.',
    testimonial:
      'Property values increased and residents are happier with reliable power throughout the estate.',
    systemSize: '120kW',
    image:
      'https://media.naijahouses.com/News/xQr56J0Z_cOJ-vuSmuA3atQoeNp9JKGh-1686921294.jpeg',
  },
];

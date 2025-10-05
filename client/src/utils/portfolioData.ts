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
  images?: string[];
}

export const projects: PortfolioProject[] = [
  {
    id: 1,
    category: 'residential',
    title: 'Advanced Solar Installation, Lagos',
    slug: 'advanced-solar-installation-lagos',
    client: 'Residential Homeowner',
    challenge:
      'A residential property needed a comprehensive solar power solution to reduce electricity costs and ensure consistent power supply for daily household operations.',
    approach:
      'Conducted detailed home energy audit and designed a custom solar array system with advanced monitoring and maintenance protocols.',
    solution:
      'Installation of high-efficiency solar panels with smart inverter systems, battery storage, and integrated monitoring dashboard.',
    results:
      '75% reduction in electricity costs, 99.8% uptime achieved, and comprehensive energy monitoring for optimal performance.',
    testimonial:
      'The solar installation has transformed our home. We now have reliable power and significant cost savings with real-time monitoring.',
    systemSize: '15kW',
    image: 'https://i.postimg.cc/MGmHMP9z/PHOTO-2025-09-29-14-33-35.jpg',
    images: [
      'https://i.postimg.cc/MGmHMP9z/PHOTO-2025-09-29-14-33-35.jpg',
      'https://i.postimg.cc/mggW9NTY/IMG-3364.jpg',
      'https://i.postimg.cc/pLLMjYP0/IMG-3385.jpg',
      'https://i.postimg.cc/QdYGJ9MQ/IMG-3683.jpg',
      'https://i.postimg.cc/kgY3v649/IMG-3689.jpg',
      'https://i.postimg.cc/3wyMS84p/IMG-3700.jpg',
    ],
  },
  {
    id: 2,
    category: 'residential',
    title: '5kVA Solar System Installation',
    slug: '5kva-solar-system-pinnock-beach-estate',
    client: 'Pinnock Beach Estate Resident',
    challenge:
      'A residential property in Pinnock Beach Estate required a reliable 5kVA solar power system to provide backup power and reduce dependency on the grid during frequent power outages.',
    approach:
      'Designed and installed a custom 5kVA solar power system with battery backup to ensure uninterrupted power supply for essential household appliances and lighting.',
    solution:
      'Professional installation of 5kVA solar panels with high-efficiency inverters, battery storage system, and smart monitoring capabilities for optimal energy management.',
    results:
      'Achieved 100% backup power coverage for essential loads, reduced electricity bills by 60%, and eliminated power interruptions during grid outages.',
    testimonial:
      'The 5kVA solar system has been a game-changer for our home. We now have reliable power even during the longest outages, and our electricity bills have significantly reduced.',
    systemSize: '5kVA',
    image: '/projects/pinnock-beach-estate/image1.jpg',
    images: [
      '/projects/pinnock-beach-estate/image1.jpg',
      '/projects/pinnock-beach-estate/image2.jpg',
    ],
  },
  {
    id: 3,
    category: 'residential',
    title: '20kVA Solar System Installation',
    slug: '20kva-solar-system-shonibare-estate-maryland',
    client: 'Shonibare Estate Maryland Resident',
    challenge:
      'A large residential property at Shonibare Estate Maryland required a robust 20kVA solar power system to provide comprehensive backup power and significantly reduce grid dependency for an entire household with high energy demands.',
    approach:
      'Conducted comprehensive energy assessment and designed a custom 20kVA solar power system with advanced battery storage and smart energy management to meet the high energy requirements of the residential property.',
    solution:
      'Professional installation of a 20kVA solar panel array with high-efficiency inverters, advanced battery storage system, and integrated smart monitoring for optimal energy distribution and management.',
    results:
      'Achieved 95% reduction in grid dependency, 85% reduction in electricity costs, and provides reliable backup power for entire household including high-consumption appliances.',
    testimonial:
      'The 20kVA system has exceeded our expectations. We now have complete energy independence and the system handles all our household needs efficiently, even during extended power outages.',
    systemSize: '20kVA',
    image:
      'https://i.postimg.cc/WpCBWh8G/4bfcc3be-ef95-423b-88e8-7b39a5df6084-1.jpg',
    images: [
      'https://i.postimg.cc/WpCBWh8G/4bfcc3be-ef95-423b-88e8-7b39a5df6084-1.jpg',
      'https://i.postimg.cc/YSCDqH87/IMG-1079-1.jpg',
      'https://i.postimg.cc/9fLSGMz4/IMG-2955.jpg',
    ],
  },
  {
    id: 4,
    category: 'residential',
    title: '5kVA Solar System Installation',
    slug: '5kva-solar-system-egbu-owerri',
    client: 'Egbu, Owerri Resident',
    challenge:
      'A residential property in Egbu, Owerri required a reliable 5kVA solar power system to provide backup power and reduce electricity costs in an area with frequent power outages and inconsistent grid supply.',
    approach:
      'Designed and installed a custom 5kVA solar power system with battery backup and smart energy management to ensure uninterrupted power supply for essential household needs in the Owerri region.',
    solution:
      'Professional installation of 5kVA solar panels with high-efficiency inverters, battery storage system, and integrated monitoring for optimal energy management and performance tracking.',
    results:
      'Achieved 100% backup power coverage for essential loads, reduced electricity bills by 70%, and eliminated power interruptions during frequent grid outages in the Owerri area.',
    testimonial:
      'The 5kVA solar system has been a lifesaver for our home in Egbu. We now have reliable power even during the most frequent outages, and our energy costs have dropped significantly.',
    systemSize: '5kVA',
    image: 'https://i.postimg.cc/zXmgJFp1/IMG-0392.jpg',
    images: [
      'https://i.postimg.cc/zXmgJFp1/IMG-0392.jpg',
      'https://i.postimg.cc/FKfrd2s8/IMG-0398.jpg',
      'https://i.postimg.cc/QMRXp0Hw/IMG-5586.jpg',
      'https://i.postimg.cc/RCw0T51P/IMG-5592.jpg',
    ],
  },
];

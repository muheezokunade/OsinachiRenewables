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
];

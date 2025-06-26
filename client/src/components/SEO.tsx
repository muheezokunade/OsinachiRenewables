import { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  canonical?: string;
  ogImage?: string;
  ogType?: string;
  structuredData?: object;
  noIndex?: boolean;
}

export default function SEO({
  title = "Osinachi Renewable Energy - Nigeria's Premier Solar & Generator Solutions | Reliable. Renewable. Responsible.",
  description = "Nigeria's leading integrated power solutions provider. Expert generator maintenance for Perkins, Caterpillar, Cummins & Lister. Custom solar & inverter systems for homes, businesses & industries. 100+ successful deployments, 99.9% uptime guarantee.",
  keywords = 'solar power Nigeria, generator maintenance Lagos, inverter systems Abuja, renewable energy Nigeria, Perkins generator parts, Caterpillar generator service, Cummins generator maintenance, solar installation Nigeria, hybrid power systems, energy audit Nigeria, IoT monitoring, sustainable energy solutions',
  canonical,
  ogImage = 'https://osinachirenewables.com/og-image.jpg',
  ogType = 'website',
  structuredData,
  noIndex = false,
}: SEOProps) {
  const baseUrl = 'https://osinachirenewables.com';
  const fullCanonical = canonical ? `${baseUrl}${canonical}` : baseUrl;

  useEffect(() => {
    // Update document title for better UX
    document.title = title;
  }, [title]);

  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{title}</title>
      <meta name='title' content={title} />
      <meta name='description' content={description} />
      <meta name='keywords' content={keywords} />
      {noIndex && <meta name='robots' content='noindex, nofollow' />}

      {/* Canonical URL */}
      <link rel='canonical' href={fullCanonical} />

      {/* Open Graph / Facebook */}
      <meta property='og:title' content={title} />
      <meta property='og:description' content={description} />
      <meta property='og:type' content={ogType} />
      <meta property='og:url' content={fullCanonical} />
      <meta property='og:image' content={ogImage} />
      <meta property='og:image:width' content='1200' />
      <meta property='og:image:height' content='630' />
      <meta property='og:site_name' content='Osinachi Renewable Energy' />
      <meta property='og:locale' content='en_US' />

      {/* Twitter */}
      <meta property='twitter:card' content='summary_large_image' />
      <meta property='twitter:title' content={title} />
      <meta property='twitter:description' content={description} />
      <meta property='twitter:image' content={ogImage} />
      <meta property='twitter:url' content={fullCanonical} />

      {/* Structured Data */}
      {structuredData && (
        <script type='application/ld+json'>
          {JSON.stringify(structuredData)}
        </script>
      )}
    </Helmet>
  );
}

// Predefined SEO configurations for different pages
export const SEOConfigs = {
  home: {
    title:
      "Osinachi Renewable Energy - Nigeria's Premier Solar & Generator Solutions | Reliable. Renewable. Responsible.",
    description:
      "Nigeria's leading integrated power solutions provider. Expert generator maintenance for Perkins, Caterpillar, Cummins & Lister. Custom solar & inverter systems for homes, businesses & industries. 100+ successful deployments, 99.9% uptime guarantee.",
    keywords:
      'solar power Nigeria, generator maintenance Lagos, inverter systems Abuja, renewable energy Nigeria, Perkins generator parts, Caterpillar generator service, Cummins generator maintenance, solar installation Nigeria, hybrid power systems, energy audit Nigeria, IoT monitoring, sustainable energy solutions',
    canonical: '/',
    structuredData: {
      '@context': 'https://schema.org',
      '@type': 'WebSite',
      name: 'Osinachi Renewable Energy',
      url: 'https://osinachirenewables.com',
      potentialAction: {
        '@type': 'SearchAction',
        target: 'https://osinachirenewables.com/search?q={search_term_string}',
        'query-input': 'required name=search_term_string',
      },
    },
  },

  about: {
    title:
      "About Osinachi Renewable Energy - Our Story, Mission & Values | Nigeria's Trusted Power Solutions",
    description:
      "Discover Osinachi Renewable Energy's journey from generator specialists to Nigeria's premier integrated power solutions provider. 15+ years experience, 100+ successful deployments, 99.9% uptime guarantee.",
    keywords:
      'about Osinachi Renewable Energy, Nigeria power solutions company, generator maintenance experts, solar energy specialists, renewable energy company Nigeria, power solutions history',
    canonical: '/about',
    structuredData: {
      '@context': 'https://schema.org',
      '@type': 'AboutPage',
      name: 'About Osinachi Renewable Energy',
      description:
        "Nigeria's premier integrated power solutions provider with 15+ years of experience",
    },
  },

  services: {
    title:
      'Power Solutions & Services - Generator Maintenance & Solar Systems | Osinachi Renewable Energy',
    description:
      'Comprehensive power solutions: Expert generator maintenance for Perkins, Caterpillar, Cummins & Lister. Custom solar & inverter systems for homes, businesses & industries. Energy audits & IoT monitoring.',
    keywords:
      'generator maintenance Nigeria, Perkins generator parts, Caterpillar generator service, Cummins generator maintenance, solar installation Nigeria, inverter systems, energy audit services, IoT monitoring solutions',
    canonical: '/services',
    structuredData: {
      '@context': 'https://schema.org',
      '@type': 'Service',
      name: 'Power Solutions & Services',
      provider: {
        '@type': 'Organization',
        name: 'Osinachi Renewable Energy',
      },
      serviceType: 'Power Solutions',
      areaServed: 'Nigeria',
    },
  },

  portfolio: {
    title:
      'Portfolio & Case Studies - Successful Power Solutions Projects | Osinachi Renewable Energy',
    description:
      'Explore our successful power solutions projects across Nigeria. Case studies from industrial, commercial & residential installations. Real results: 60% cost reduction, 99.9% uptime.',
    keywords:
      'solar projects Nigeria, generator installation case studies, power solutions portfolio, industrial solar installations, commercial power systems, residential solar projects',
    canonical: '/portfolio',
    structuredData: {
      '@context': 'https://schema.org',
      '@type': 'ItemList',
      name: 'Portfolio Projects',
      description: 'Successful power solutions projects across Nigeria',
    },
  },

  contact: {
    title:
      'Contact Osinachi Renewable Energy - Get Free Consultation | Lagos, Nigeria',
    description:
      'Contact Osinachi Renewable Energy for expert power solutions. Free consultation, energy audit & quote. Call +234-906-003-3963 or email info@osinachirenewables.com. Serving Lagos, Abuja, Port Harcourt & nationwide.',
    keywords:
      'contact Osinachi Renewable Energy, power solutions consultation, energy audit request, generator maintenance quote, solar installation quote, Nigeria power solutions contact',
    canonical: '/contact',
    structuredData: {
      '@context': 'https://schema.org',
      '@type': 'ContactPage',
      name: 'Contact Osinachi Renewable Energy',
      description: 'Get in touch for expert power solutions consultation',
    },
  },

  ourTeam: {
    title:
      'Our Team - Expert Engineers & Power Solutions Specialists | Osinachi Renewable Energy',
    description:
      "Meet Osinachi Renewable Energy's expert team of engineers, technicians & power solutions specialists. 15+ years combined experience in generator maintenance & solar energy systems.",
    keywords:
      'Osinachi Renewable Energy team, power solutions engineers, generator maintenance specialists, solar energy experts, Nigeria renewable energy professionals',
    canonical: '/ourteam',
    structuredData: {
      '@context': 'https://schema.org',
      '@type': 'Organization',
      name: 'Osinachi Renewable Energy Team',
      description: 'Expert team of power solutions specialists',
    },
  },

  careers: {
    title:
      "Careers at Osinachi Renewable Energy - Join Nigeria's Power Solutions Revolution",
    description:
      "Join Osinachi Renewable Energy's mission to power Nigeria's sustainable future. Career opportunities for engineers, technicians, sales consultants & support staff. Competitive benefits & growth opportunities.",
    keywords:
      'careers Osinachi Renewable Energy, jobs renewable energy Nigeria, solar engineer jobs, generator technician positions, power solutions careers, Nigeria energy sector jobs',
    canonical: '/careers',
    structuredData: {
      '@context': 'https://schema.org',
      '@type': 'JobPosting',
      hiringOrganization: {
        '@type': 'Organization',
        name: 'Osinachi Renewable Energy',
      },
      jobLocation: {
        '@type': 'Place',
        address: {
          '@type': 'PostalAddress',
          addressCountry: 'Nigeria',
        },
      },
    },
  },

  newsBlog: {
    title:
      'News & Blog - Latest Insights on Renewable Energy & Power Solutions | Osinachi Renewable Energy',
    description:
      "Stay updated with the latest insights on renewable energy, solar power trends, generator maintenance tips & industry news. Expert articles from Osinachi Renewable Energy's specialists.",
    keywords:
      'renewable energy news, solar power blog, generator maintenance tips, energy industry insights, Nigeria renewable energy trends, power solutions articles',
    canonical: '/newsblog',
    structuredData: {
      '@context': 'https://schema.org',
      '@type': 'Blog',
      name: 'Osinachi Renewable Energy Blog',
      description: 'Latest insights on renewable energy and power solutions',
    },
  },

  impact: {
    title:
      'Our Impact - Environmental & Social Responsibility | Osinachi Renewable Energy',
    description:
      "Discover Osinachi Renewable Energy's positive impact on Nigeria's environment & communities. Carbon emissions reduction, job creation, community projects & sustainable development initiatives.",
    keywords:
      'environmental impact, social responsibility, carbon emissions reduction, sustainable development Nigeria, renewable energy impact, community projects',
    canonical: '/impact',
    structuredData: {
      '@context': 'https://schema.org',
      '@type': 'WebPage',
      name: 'Our Impact',
      description: 'Environmental and social impact of our power solutions',
    },
  },
};

import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

import SEO, { SEOConfigs } from '@/components/SEO';
import { Button } from '@/components/ui/button';
import { Link } from 'wouter';
import { Settings, Sun, Search, Monitor, Check } from 'lucide-react';

export default function Services() {
  const services = [
    {
      icon: Settings,
      title: 'Generator Parts & Maintenance',
      description:
        "Expert maintenance for Nigeria's most trusted generator brands - Perkins, Caterpillar, Cummins, and Lister.",
      features: [
        'Diagnostic Checks',
        'Preventative Maintenance Schedules',
        'Oil & Filter Changes',
        'Engine Overhauls',
        'Genuine Parts Sourcing & Supply',
      ],
      brands: ['Perkins', 'Caterpillar', 'Cummins', 'Lister'],
      image:
        'https://images.pexels.com/photos/3855963/pexels-photo-3855963.jpeg?auto=compress&w=800&h=600&fit=crop',
    },
    {
      icon: Sun,
      title: 'Custom Inverter & Solar Systems',
      description:
        'Harness the power of the sun with custom-designed solar and inverter systems tailored to your specific needs.',
      features: [
        'Tier-1 Solar Panels',
        'Hybrid Inverters',
        'Lithium-Ion Battery Banks',
        'Smart Energy Management Systems',
        'Professional Installation & Commissioning',
      ],
      applications: [
        'Oil Vessels',
        'Gas Stations',
        'Banks',
        'Hotels',
        'Homes',
        'Clubs',
        'Factories',
      ],
      image:
        'https://images.pexels.com/photos/4254168/pexels-photo-4254168.jpeg?auto=compress&w=800&h=600&fit=crop',
    },
    {
      icon: Search,
      title: 'Energy Audit & Consultancy',
      description:
        'Comprehensive energy assessments to optimize your power consumption and identify cost-saving opportunities.',
      features: [
        'Load Analysis',
        'Energy Consumption Assessment',
        'Cost-Benefit Analysis',
        'System Optimization Recommendations',
        'ROI Projections',
      ],
      image:
        'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&w=800&h=600&fit=crop',
    },
    {
      icon: Monitor,
      title: 'IoT Monitoring & Management',
      description:
        'Real-time monitoring and predictive maintenance through advanced IoT technology for optimal system performance.',
      features: [
        'Real-Time System Monitoring',
        'Predictive Maintenance Alerts',
        'Performance Analytics',
        'Remote Troubleshooting',
        '24/7 System Health Tracking',
      ],
      image:
        'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&w=800&h=600&fit=crop',
    },
  ];

  return (
    <div className='min-h-screen'>
      <SEO {...SEOConfigs.services} />
      <Navigation />

      {/* Hero Section */}
      <section className='relative bg-primary-blue text-white py-24'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='max-w-3xl'>
            <h1 className='font-poppins font-bold text-4xl md:text-6xl mb-6'>
              Our Services
            </h1>
            <p className='text-xl md:text-2xl text-gray-200'>
              Comprehensive power solutions designed to keep your operations
              running smoothly and efficiently.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className='py-20 bg-white'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='grid lg:grid-cols-2 gap-12'>
            {services.map((service, index) => (
              <div
                key={index}
                className='bg-white rounded-2xl shadow-lg overflow-hidden'
              >
                <div className='relative'>
                  <img
                    src={service.image}
                    alt={`${service.title} - Osinachi Renewable Energy`}
                    className='w-full h-64 object-cover'
                  />
                  <div className='absolute top-4 left-4'>
                    <div className='bg-accent-yellow p-3 rounded-full'>
                      <service.icon className='h-6 w-6 text-primary-blue' />
                    </div>
                  </div>
                </div>
                <div className='p-8'>
                  <h3 className='font-poppins font-bold text-2xl text-primary-blue mb-4'>
                    {service.title}
                  </h3>
                  <p className='text-gray-600 mb-6'>{service.description}</p>

                  <div className='mb-6'>
                    <h4 className='font-semibold text-gray-800 mb-3'>
                      Key Features:
                    </h4>
                    <ul className='space-y-2'>
                      {service.features.map((feature, featureIndex) => (
                        <li
                          key={featureIndex}
                          className='flex items-center text-gray-600'
                        >
                          <Check className='h-4 w-4 text-green-600 mr-2 flex-shrink-0' />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {service.brands && (
                    <div className='mb-6'>
                      <h4 className='font-semibold text-gray-800 mb-3'>
                        Supported Brands:
                      </h4>
                      <div className='flex flex-wrap gap-2'>
                        {service.brands.map((brand, brandIndex) => (
                          <span
                            key={brandIndex}
                            className='bg-light-gray px-3 py-1 rounded-full text-sm text-gray-700'
                          >
                            {brand}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  {service.applications && (
                    <div className='mb-6'>
                      <h4 className='font-semibold text-gray-800 mb-3'>
                        Applications:
                      </h4>
                      <div className='flex flex-wrap gap-2'>
                        {service.applications.map((app, appIndex) => (
                          <span
                            key={appIndex}
                            className='bg-light-gray px-3 py-1 rounded-full text-sm text-gray-700'
                          >
                            {app}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  <Link href='/contact'>
                    <Button className='w-full bg-accent-yellow text-primary-blue hover:bg-accent-yellow/90 font-semibold'>
                      Get Quote
                    </Button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className='py-20 bg-light-gray'>
        <div className='max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center'>
          <h2 className='font-poppins font-bold text-4xl text-primary-blue mb-6'>
            Ready to Transform Your Power Solutions?
          </h2>
          <p className='text-xl text-gray-600 mb-8'>
            Let our experts assess your needs and design a solution that works
            for your specific requirements.
          </p>
          <div className='flex flex-col sm:flex-row gap-4 justify-center'>
            <Link href='/contact'>
              <Button
                size='lg'
                className='bg-accent-yellow text-primary-blue hover:bg-accent-yellow/90 font-semibold'
              >
                Request Free Consultation
              </Button>
            </Link>
            <Link href='/portfolio'>
              <Button
                size='lg'
                className='bg-primary-blue text-white hover:bg-primary-blue/90 font-semibold'
              >
                View Our Work
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

import SEO, { SEOConfigs } from '@/components/SEO';
import { Button } from '@/components/ui/button';
import { Link } from 'wouter';

export default function About() {
  const values = [
    {
      title: 'Reliability',
      description:
        'Our foundation is built on decades of experience in mission-critical power. We deliver solutions that are robust, durable, and dependable.',
    },
    {
      title: 'Authenticity',
      description:
        'We supply only original, high-quality generators, inverters, and spare parts—no imitations. Trust is built on transparency.',
    },
    {
      title: 'Expertise',
      description:
        'We are engineers and consultants, not just suppliers. We provide expert guidance based on deep technical knowledge.',
    },
    {
      title: 'Innovation',
      description:
        'We leverage modern technology, from IoT-based monitoring to advanced hybrid inverters and Tier-1 solar components.',
    },
    {
      title: 'Responsibility',
      description:
        'We are responsible to our clients, community, and environment through exceptional service and sustainable practices.',
    },
  ];

  const achievements = [
    { metric: '100+', description: 'Successful Deployments' },
    { metric: '99.9%', description: 'System Uptime Guarantee' },
    { metric: '15+', description: 'Years of Experience' },
    { metric: '60%', description: 'Average Cost Reduction' },
  ];

  return (
    <div className='min-h-screen'>
      <SEO {...SEOConfigs.about} />
      <Navigation />

      {/* Hero Section */}
      <section className='relative bg-gradient-to-r from-green-600 to-blue-600 text-white py-24'>
        <div className='absolute inset-0 bg-black/20'></div>
        <div className='relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='max-w-3xl'>
            <h1 className='font-poppins font-bold text-4xl md:text-6xl mb-6'>
              About Osinachi
            </h1>
            <p className='text-xl md:text-2xl text-gray-200'>
              Powering Nigeria's sustainable energy future with reliable,
              innovative solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className='py-20 bg-white'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='grid lg:grid-cols-2 gap-16 items-center'>
            <div className='space-y-8'>
              <div>
                <h2 className='font-poppins font-bold text-4xl lg:text-5xl text-primary-blue mb-6 leading-tight'>
                  Our Mission
                </h2>
                <div className='w-20 h-1 bg-accent-yellow rounded-full mb-8'></div>
              </div>

              <div className='space-y-6'>
                <p className='text-lg text-gray-700 leading-relaxed'>
                  At Osinachi Renewable Energy, we are on a mission to end the
                  cycle of unreliable power supply in Nigeria by delivering
                  authentic, high-performance, and tailored energy systems—one
                  home, one business, one factory at a time.
                </p>
                <p className='text-lg text-gray-700 leading-relaxed'>
                  We solve your energy problems for good, not temporarily. This
                  means empowering businesses to meet production targets without
                  fear of downtime and allowing families to live in comfort and
                  security, free from the constant disruption of power failures.
                </p>
              </div>

              <div className='space-y-4'>
                <h3 className='font-poppins font-bold text-2xl text-primary-blue'>
                  Our Vision
                </h3>
                <p className='text-lg text-gray-700 leading-relaxed'>
                  To become Nigeria's most trusted provider of dependable and
                  integrated energy solutions, empowering individuals and
                  industries with long-term, sustainable power systems that work
                  every time.
                </p>
              </div>
            </div>

            {/* Image Section with Perfect Circle */}
            <div className='relative flex justify-center lg:justify-end'>
              <div className='relative'>
                {/* Main Circle Image */}
                <div className='w-80 h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden shadow-2xl border-4 border-white circle-glow'>
                  <img
                    src='https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=compress&w=800&h=800&fit=crop'
                    alt='Solar installation in Nigerian setting - African energy landscape'
                    className='w-full h-full object-cover'
                  />
                </div>

                {/* Decorative Elements */}
                <div className='absolute -top-4 -right-4 w-24 h-24 bg-accent-yellow rounded-full opacity-20 floating-animation'></div>
                <div
                  className='absolute -bottom-6 -left-6 w-16 h-16 bg-primary-blue rounded-full opacity-30 floating-animation'
                  style={{ animationDelay: '1s' }}
                ></div>

                {/* Floating Achievement */}
                <div className='absolute top-8 -right-8 bg-white rounded-full p-4 shadow-lg border border-gray-100'>
                  <div className='text-center'>
                    <div className='text-2xl font-bold text-primary-blue'>
                      99.9%
                    </div>
                    <div className='text-xs text-gray-600'>Uptime</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className='py-20 bg-light-gray'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='text-center mb-16'>
            <h2 className='font-poppins font-bold text-4xl text-primary-blue mb-4'>
              Our Core Values
            </h2>
            <div className='w-20 h-1 bg-accent-yellow rounded-full mx-auto mb-8'></div>
            <p className='text-xl text-gray-600 max-w-3xl mx-auto'>
              The principles that guide everything we do
            </p>
          </div>

          <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
            {values.map((value, index) => (
              <div
                key={index}
                className='bg-white p-8 rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border border-gray-100'
              >
                <div className='w-16 h-16 bg-gradient-to-br from-primary-blue to-blue-600 rounded-full flex items-center justify-center mb-6 mx-auto'>
                  <div className='text-white font-bold text-xl'>
                    {index + 1}
                  </div>
                </div>
                <h3 className='font-poppins font-bold text-xl text-primary-blue mb-4 text-center'>
                  {value.title}
                </h3>
                <p className='text-gray-700 text-center leading-relaxed'>
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className='py-20 bg-primary-blue text-white'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='text-center mb-16'>
            <h2 className='font-poppins font-bold text-4xl mb-4'>
              Our Proven Results
            </h2>
            <div className='w-20 h-1 bg-accent-yellow rounded-full mx-auto mb-8'></div>
            <p className='text-xl text-gray-200 max-w-3xl mx-auto'>
              Numbers that speak to our commitment to excellence
            </p>
          </div>

          <div className='grid md:grid-cols-4 gap-8'>
            {achievements.map((achievement, index) => (
              <div key={index} className='text-center group'>
                <div className='relative inline-block mb-4'>
                  <div className='w-24 h-24 bg-gradient-to-br from-accent-yellow to-yellow-500 rounded-full flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-105'>
                    <div className='text-primary-blue font-bold text-2xl'>
                      {achievement.metric}
                    </div>
                  </div>
                  <div className='absolute -bottom-1 -right-1 w-8 h-8 bg-white rounded-full opacity-80'></div>
                </div>
                <div className='text-gray-200 font-medium'>
                  {achievement.description}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className='py-20 bg-white'>
        <div className='max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center'>
          <div className='w-24 h-24 bg-gradient-to-br from-primary-blue to-blue-600 rounded-full flex items-center justify-center mx-auto mb-8 shadow-lg'>
            <svg
              className='w-12 h-12 text-white'
              fill='none'
              stroke='currentColor'
              viewBox='0 0 24 24'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2}
                d='M13 10V3L4 14h7v7l9-11h-7z'
              />
            </svg>
          </div>
          <h2 className='font-poppins font-bold text-4xl text-primary-blue mb-6'>
            Ready to Experience Reliable Power?
          </h2>
          <p className='text-xl text-gray-600 mb-8 max-w-2xl mx-auto'>
            Join the hundreds of satisfied customers who have transformed their
            power challenges into success stories.
          </p>
          <div className='flex flex-col sm:flex-row gap-4 justify-center'>
            <Link href='/contact'>
              <Button
                size='lg'
                className='bg-accent-yellow text-primary-blue hover:bg-accent-yellow/90 font-semibold px-8 py-3 text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105'
              >
                Get Started Today
              </Button>
            </Link>
            <Link href='/portfolio'>
              <Button
                size='lg'
                variant='outline'
                className='border-primary-blue text-primary-blue hover:bg-primary-blue hover:text-white px-8 py-3 text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105'
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

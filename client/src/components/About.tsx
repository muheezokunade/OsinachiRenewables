import { Button } from '@/components/ui/button';
import { Link } from 'wouter';

export default function About() {
  const stats = [
    { value: '100+', label: 'Successful Deployments' },
    { value: '99.9%', label: 'System Uptime' },
    { value: '15+', label: 'Years Experience' },
  ];

  return (
    <section id='about' className='py-20 bg-light-gray'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='grid lg:grid-cols-2 gap-16 items-center'>
          {/* Image Section with Perfect Circle */}
          <div className='relative flex justify-center lg:justify-start'>
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

              {/* Floating Stats */}
              <div className='absolute top-8 -right-8 bg-white rounded-full p-4 shadow-lg border border-gray-100'>
                <div className='text-center'>
                  <div className='text-2xl font-bold text-primary-blue'>
                    15+
                  </div>
                  <div className='text-xs text-gray-600'>Years</div>
                </div>
              </div>

              <div className='absolute bottom-8 -left-8 bg-white rounded-full p-4 shadow-lg border border-gray-100'>
                <div className='text-center'>
                  <div className='text-2xl font-bold text-accent-yellow'>
                    100+
                  </div>
                  <div className='text-xs text-gray-600'>Projects</div>
                </div>
              </div>
            </div>
          </div>

          {/* Content Section */}
          <div className='space-y-8'>
            <div>
              <h2 className='font-poppins font-bold text-4xl lg:text-5xl text-primary-blue mb-6 leading-tight'>
                Our Story
              </h2>
              <div className='w-20 h-1 bg-accent-yellow rounded-full mb-8'></div>
            </div>

            <div className='space-y-6'>
              <p className='text-lg text-gray-700 leading-relaxed'>
                Osinachi Renewable Energy is built on a foundation of decades of
                experience in mission-critical power systems. We began as
                specialists servicing traditional generators—Perkins,
                Caterpillar, Cummins, and Lister—learning firsthand the
                frustrations businesses face with unreliable power.
              </p>
              <p className='text-lg text-gray-700 leading-relaxed'>
                Today, we've evolved into Nigeria's premier integrated power
                solutions provider, combining our proven expertise with
                cutting-edge renewable technology. We don't just supply
                equipment—we engineer complete power ecosystems that work.
              </p>
            </div>

            {/* Stats Grid with Circular Design */}
            <div className='grid grid-cols-3 gap-6 pt-8'>
              {stats.map((stat, index) => (
                <div key={index} className='text-center group'>
                  <div className='relative inline-block'>
                    <div className='w-20 h-20 bg-gradient-to-br from-primary-blue to-blue-600 rounded-full flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-105'>
                      <div className='text-white font-bold text-xl'>
                        {stat.value}
                      </div>
                    </div>
                    <div className='absolute -bottom-1 -right-1 w-6 h-6 bg-accent-yellow rounded-full opacity-80'></div>
                  </div>
                  <div className='mt-4 text-sm font-medium text-gray-600'>
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>

            <div className='pt-6'>
              <Link href='/about'>
                <Button className='bg-primary-blue text-white hover:bg-primary-blue/90 px-8 py-3 text-lg font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105'>
                  Learn More About Us
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

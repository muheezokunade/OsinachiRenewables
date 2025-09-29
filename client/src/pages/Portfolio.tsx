import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Link } from 'wouter';
import { projects } from '../utils/portfolioData';

export default function Portfolio() {
  return (
    <div className='min-h-screen'>
      <Navigation />

      {/* Hero Section */}
      <section
        className='relative min-h-[60vh] flex items-center justify-center'
        style={{
          backgroundImage:
            'url(https://i.postimg.cc/MGmHMP9z/PHOTO-2025-09-29-14-33-35.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <div className='absolute inset-0 bg-black/40'></div>
        <div className='relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='text-center'>
            <h1 className='font-poppins font-bold text-4xl md:text-6xl text-white mb-6'>
              Some of our flagship projects
            </h1>
            <p className='text-xl text-gray-200 max-w-3xl mx-auto'>
              Discover how we're transforming Nigeria's energy landscape through
              innovative solar solutions
            </p>
          </div>
        </div>
      </section>

      {/* Trusted Service Section */}
      <section className='py-16 bg-gray-50'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center'>
          <h2 className='font-poppins font-bold text-3xl md:text-4xl text-primary-blue mb-4'>
            TRUSTED SERVICE
          </h2>
          <p className='text-lg text-gray-600 max-w-3xl mx-auto'>
            In everything we do, we put the client first. We strive to provide
            our clients with the best possible energy solutions and services.
          </p>
        </div>
      </section>

      {/* Portfolio Section */}
      <section className='py-20 bg-white'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
            {projects.map(project => (
              <Link href={`/portfolio/${project.slug}`} key={project.id}>
                <div className='bg-white border border-gray-200 rounded-lg overflow-hidden group hover:shadow-lg transition-shadow duration-300 cursor-pointer'>
                  <img
                    src={project.image}
                    alt={`${project.title} - ${project.client} - ${project.category} project in Nigeria`}
                    className='w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300'
                  />
                  <div className='p-6'>
                    <h3 className='font-poppins font-bold text-xl mb-2 text-primary-blue'>
                      {project.client}
                    </h3>
                    <p className='text-gray-600 text-sm mb-4'>
                      {project.challenge.length > 100
                        ? `${project.challenge.substring(0, 100)}...`
                        : project.challenge}
                    </p>
                    <div className='flex justify-between items-center text-sm'>
                      <span className='text-gray-500'>
                        {project.systemSize} System
                      </span>
                      <span className='text-primary-blue font-semibold'>
                        {project.category.charAt(0).toUpperCase() +
                          project.category.slice(1)}
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className='py-16 bg-gray-50'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='text-center mb-12'>
            <h2 className='font-poppins font-bold text-3xl md:text-4xl text-primary-blue mb-4'>
              Our Impact in Numbers
            </h2>
            <p className='text-lg text-gray-600'>
              Real results for real clients
            </p>
          </div>

          <div className='grid md:grid-cols-4 gap-8'>
            <div className='text-center'>
              <div className='text-4xl font-bold text-primary-blue mb-2'>
                100+
              </div>
              <div className='text-gray-600'>Successful Projects</div>
            </div>
            <div className='text-center'>
              <div className='text-4xl font-bold text-primary-blue mb-2'>
                99.9%
              </div>
              <div className='text-gray-600'>System Uptime</div>
            </div>
            <div className='text-center'>
              <div className='text-4xl font-bold text-primary-blue mb-2'>
                50%+
              </div>
              <div className='text-gray-600'>Average Cost Reduction</div>
            </div>
            <div className='text-center'>
              <div className='text-4xl font-bold text-primary-blue mb-2'>
                1000+
              </div>
              <div className='text-gray-600'>Tons CO2 Saved</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className='py-16 bg-white'>
        <div className='max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center'>
          <h2 className='font-poppins font-bold text-3xl md:text-4xl text-primary-blue mb-6'>
            Ready to Join Our Success Stories?
          </h2>
          <p className='text-lg text-gray-600 mb-8'>
            Let's discuss how we can solve your power challenges and deliver
            results that exceed your expectations.
          </p>
          <Link href='/contact'>
            <button className='bg-primary-blue text-white px-8 py-3 rounded-lg font-semibold hover:bg-primary-blue/90 transition-colors duration-300'>
              Start Your Success Story
            </button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}

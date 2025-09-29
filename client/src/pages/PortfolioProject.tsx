import { useRoute } from 'wouter';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

import SEO from '@/components/SEO';
import { projects } from '../utils/portfolioData';
import { Link } from 'wouter';

export default function PortfolioProject() {
  const [, params] = useRoute('/portfolio/:slug');
  const project = projects.find(p => p.slug === params?.slug);

  if (!project) {
    return (
      <div className='min-h-screen flex flex-col'>
        <Navigation />
        <div className='flex-1 flex flex-col items-center justify-center'>
          <h1 className='text-3xl font-bold text-primary-blue mb-4'>
            Project Not Found
          </h1>
          <Link href='/portfolio'>
            <span className='text-accent-yellow underline'>
              Back to Portfolio
            </span>
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  const seoTitle = `${project.title} | ${project.client} | Osinachi Renewable Energy Portfolio`;
  const seoDescription = `${project.title} for ${project.client}: ${project.challenge} Solution: ${project.solution} Results: ${project.results}`;
  const seoKeywords = `${project.category}, ${project.title}, ${project.client}, solar, generator, Nigeria, case study, power solutions, ${project.systemSize}`;

  return (
    <div className='min-h-screen'>
      <SEO
        title={seoTitle}
        description={seoDescription}
        keywords={seoKeywords}
        canonical={`/portfolio/${project.slug}`}
        ogImage={project.image}
      />
      <Navigation />
      {/* Hero Section with Background Image */}
      <section
        className='relative min-h-[70vh] flex items-center justify-center bg-cover bg-center bg-no-repeat'
        style={{
          backgroundImage: `url(${project.image})`,
        }}
      >
        {/* Overlay */}
        <div className='absolute inset-0 bg-black bg-opacity-40'></div>

        {/* Content */}
        <div className='relative z-10 text-center text-white max-w-4xl mx-auto px-4 sm:px-6 lg:px-8'>
          <h1 className='font-poppins font-bold text-4xl md:text-6xl mb-6'>
            {project.client}
          </h1>
        </div>
      </section>

      <section className='py-16 bg-white'>
        <div className='max-w-4xl mx-auto px-4 sm:px-6 lg:px-8'>
          {/* Challenge Section */}
          <div className='mb-12'>
            <h2 className='font-bold text-2xl text-primary-blue mb-4'>
              Challenge:
            </h2>
            <p className='text-gray-700 text-lg leading-relaxed'>
              {project.challenge}
            </p>
          </div>

          {/* Solution Section */}
          <div className='mb-12'>
            <h2 className='font-bold text-2xl text-primary-blue mb-4'>
              Solution:
            </h2>
            <p className='text-gray-700 text-lg leading-relaxed'>
              {project.solution}
            </p>
          </div>

          {/* Project Metrics */}
          <div className='grid md:grid-cols-3 gap-8 mb-12'>
            <div className='text-center'>
              <h3 className='font-bold text-2xl text-primary-blue mb-2'>
                Solar Power output (kWh)
              </h3>
              <p className='text-3xl font-bold text-gray-800'>
                {project.systemSize === '15kW'
                  ? '18,250'
                  : project.systemSize === '50kW'
                    ? '60,000'
                    : project.systemSize === '75kW'
                      ? '90,000'
                      : project.systemSize === '30kW'
                        ? '36,500'
                        : project.systemSize === '80kW'
                          ? '96,000'
                          : project.systemSize === '120kW'
                            ? '144,000'
                            : '25,000'}
              </p>
            </div>
            <div className='text-center'>
              <h3 className='font-bold text-2xl text-primary-blue mb-2'>
                Uptime
              </h3>
              <p className='text-3xl font-bold text-gray-800'>99%</p>
            </div>
            <div className='text-center'>
              <h3 className='font-bold text-2xl text-primary-blue mb-2'>
                CO2 Emissions Offset (kg)
              </h3>
              <p className='text-3xl font-bold text-gray-800'>
                {project.systemSize === '15kW'
                  ? '10,150'
                  : project.systemSize === '50kW'
                    ? '33,300'
                    : project.systemSize === '75kW'
                      ? '50,000'
                      : project.systemSize === '30kW'
                        ? '20,280'
                        : project.systemSize === '80kW'
                          ? '53,300'
                          : project.systemSize === '120kW'
                            ? '80,000'
                            : '13,900'}
              </p>
            </div>
          </div>

          {/* Project Gallery - Three Images */}
          {project.images && project.images.length >= 3 && (
            <div className='mb-12'>
              <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
                {project.images.slice(0, 3).map((image, index) => (
                  <div key={index} className='group cursor-pointer'>
                    <img
                      src={image}
                      alt={`${project.title} - Image ${index + 1}`}
                      className='w-full h-64 object-cover rounded-lg shadow-lg transition-transform duration-300 group-hover:scale-105'
                    />
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Back to Portfolio */}
          <div className='text-center'>
            <Link href='/portfolio'>
              <button className='bg-primary-blue text-white px-8 py-3 rounded-lg font-semibold hover:bg-primary-blue/90 transition-colors duration-300'>
                Back to Portfolio
              </button>
            </Link>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}

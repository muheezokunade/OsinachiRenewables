import { useRoute } from 'wouter';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

import SEO from '@/components/SEO';
import { projects } from '../utils/portfolioData';
import { Badge } from '@/components/ui/badge';
import { Link } from 'wouter';
import { Button } from '@/components/ui/button';

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
      <section className='relative bg-primary-blue text-white py-20'>
        <div className='max-w-4xl mx-auto px-4 sm:px-6 lg:px-8'>
          <h1 className='font-poppins font-bold text-4xl md:text-5xl mb-4'>
            {project.title}
          </h1>
          <div className='flex flex-wrap gap-4 mb-4'>
            <Badge
              variant='secondary'
              className='bg-accent-yellow/10 text-accent-yellow font-semibold'
            >
              {project.category.toUpperCase()}
            </Badge>
            <span className='text-lg font-semibold'>
              Client: {project.client}
            </span>
            <span className='text-lg font-semibold'>
              System Size: {project.systemSize}
            </span>
          </div>
        </div>
      </section>
      <section className='py-16 bg-white'>
        <div className='max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-12 items-start'>
          <div>
            <img
              src={project.image}
              alt={`${project.title} - ${project.client} - ${project.category} project in Nigeria`}
              className='rounded-2xl shadow-lg w-full h-auto mb-8'
            />
            <div className='mb-6'>
              <h2 className='font-bold text-2xl text-primary-blue mb-2'>
                Challenge
              </h2>
              <p className='text-gray-700'>{project.challenge}</p>
            </div>
            <div className='mb-6'>
              <h2 className='font-bold text-2xl text-primary-blue mb-2'>
                Approach
              </h2>
              <p className='text-gray-700'>{project.approach}</p>
            </div>
            <div className='mb-6'>
              <h2 className='font-bold text-2xl text-primary-blue mb-2'>
                Solution
              </h2>
              <p className='text-gray-700'>{project.solution}</p>
            </div>
            <div className='mb-6'>
              <h2 className='font-bold text-2xl text-primary-blue mb-2'>
                Results
              </h2>
              <p className='text-gray-700'>{project.results}</p>
            </div>
            <div className='mb-6'>
              <h2 className='font-bold text-2xl text-primary-blue mb-2'>
                Client Testimonial
              </h2>
              <blockquote className='italic text-gray-600 border-l-4 border-accent-yellow pl-4'>
                {project.testimonial}
              </blockquote>
            </div>
            <Link href='/portfolio'>
              <Button className='bg-primary-blue text-white hover:bg-primary-blue/90 mt-6'>
                Back to Portfolio
              </Button>
            </Link>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}

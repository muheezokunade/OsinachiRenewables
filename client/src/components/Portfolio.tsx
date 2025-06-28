import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Link } from 'wouter';
import { useDeviceType } from '@/hooks/use-mobile';
import { LazyImage } from '@/components/ui/lazy-image';

export default function Portfolio() {
  const [activeFilter, setActiveFilter] = useState('all');
  const { isMobile, isSmallMobile } = useDeviceType();

  const projects = [
    {
      id: 1,
      category: 'industrial',
      title: 'Manufacturing Facility, Lagos',
      description:
        '50kW hybrid solar system with generator backup, delivering 60% reduction in diesel costs.',
      systemSize: '50kW',
      image:
        'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&w=800&h=600&fit=crop',
    },
    {
      id: 2,
      category: 'commercial',
      title: 'Luxury Hotel, Abuja',
      description:
        'Integrated power solution ensuring 24/7 guest comfort with smart energy management.',
      systemSize: '75kW',
      image:
        'https://images.pexels.com/photos/261102/pexels-photo-261102.jpeg?auto=compress&w=800&h=600&fit=crop',
    },
    {
      id: 3,
      category: 'residential',
      title: 'Private Estate, Port Harcourt',
      description:
        'Complete home energy solution with battery backup for uninterrupted family comfort.',
      systemSize: '15kW',
      image:
        'https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&w=800&h=600&fit=crop',
    },
  ];

  const filters = [
    { id: 'all', label: 'All Projects' },
    { id: 'industrial', label: 'Industrial' },
    { id: 'commercial', label: 'Commercial' },
    { id: 'residential', label: 'Residential' },
  ];

  const filteredProjects =
    activeFilter === 'all'
      ? projects
      : projects.filter(project => project.category === activeFilter);

  return (
    <section
      id='portfolio'
      className={`bg-white ${isMobile ? 'py-12' : 'py-20'}`}
    >
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className={`text-center ${isMobile ? 'mb-10' : 'mb-16'}`}>
          <h2
            className={`font-poppins font-bold text-primary-blue mb-4 ${
              isSmallMobile ? 'text-2xl' : isMobile ? 'text-3xl' : 'text-4xl'
            }`}
          >
            Our Portfolio
          </h2>
          <p
            className={`text-gray-600 ${
              isSmallMobile ? 'text-base' : isMobile ? 'text-lg' : 'text-xl'
            }`}
          >
            Proven results across industries
          </p>
        </div>

        {/* Filter Buttons */}
        <div
          className={`flex justify-center mb-8 ${
            isMobile ? 'flex-wrap gap-2' : 'flex-wrap gap-4 mb-12'
          }`}
        >
          {filters.map(filter => (
            <Button
              key={filter.id}
              variant={activeFilter === filter.id ? 'default' : 'outline'}
              onClick={() => setActiveFilter(filter.id)}
              className={`font-semibold transition-all duration-300 ${
                isMobile
                  ? 'px-4 py-2 text-sm rounded-full'
                  : 'px-6 py-2 rounded-full'
              } ${
                activeFilter === filter.id
                  ? 'bg-primary-blue text-white'
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              {isMobile && filter.label.length > 10
                ? filter.label.replace('Projects', '').trim()
                : filter.label}
            </Button>
          ))}
        </div>

        {/* Project Grid */}
        <div
          className={`grid gap-6 ${
            isSmallMobile
              ? 'grid-cols-1'
              : isMobile
                ? 'grid-cols-1 sm:grid-cols-2'
                : 'md:grid-cols-2 lg:grid-cols-3 gap-8'
          }`}
        >
          {filteredProjects.map(project => (
            <div
              key={project.id}
              className='bg-light-gray rounded-2xl overflow-hidden hover:shadow-lg transition-shadow duration-300'
            >
              <div className='relative'>
                <LazyImage
                  src={project.image}
                  alt={project.title}
                  className={`w-full object-cover ${
                    isMobile ? 'h-40 sm:h-48' : 'h-48'
                  }`}
                />
                <div className='absolute top-3 left-3'>
                  <Badge
                    variant='secondary'
                    className={`bg-accent-yellow/90 text-primary-blue font-semibold backdrop-blur-sm ${
                      isSmallMobile ? 'text-xs px-2 py-1' : 'text-sm px-3 py-1'
                    }`}
                  >
                    {project.category.toUpperCase()}
                  </Badge>
                </div>
              </div>

              <div className={isMobile ? 'p-4' : 'p-6'}>
                <h3
                  className={`font-poppins font-bold mb-3 text-gray-900 ${
                    isSmallMobile ? 'text-lg' : isMobile ? 'text-xl' : 'text-xl'
                  }`}
                >
                  {project.title}
                </h3>

                <p
                  className={`text-gray-600 mb-4 line-clamp-3 ${
                    isSmallMobile ? 'text-sm' : 'text-base'
                  }`}
                >
                  {project.description}
                </p>

                <div className='flex justify-between items-center'>
                  <span
                    className={`text-gray-500 ${
                      isSmallMobile ? 'text-xs' : 'text-sm'
                    }`}
                  >
                    System Size:{' '}
                    <span className='font-semibold text-primary-blue'>
                      {project.systemSize}
                    </span>
                  </span>
                  <Button
                    variant='link'
                    className={`text-primary-blue font-semibold p-0 hover:underline ${
                      isSmallMobile ? 'text-sm' : 'text-base'
                    }`}
                  >
                    View Details →
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Projects Button */}
        <div className={`text-center ${isMobile ? 'mt-8' : 'mt-12'}`}>
          <Link href='/portfolio'>
            <Button
              className={`bg-accent-yellow text-primary-blue hover:bg-accent-yellow/90 font-semibold transition-all duration-300 ${
                isMobile ? 'px-6 py-3 text-base' : 'px-8 py-3 text-lg'
              }`}
            >
              View All Projects
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}

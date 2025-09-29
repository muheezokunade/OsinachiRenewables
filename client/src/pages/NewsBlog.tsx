import React from 'react';
import { Button } from '../components/ui/button';
import { Link } from 'wouter';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

import SEO, { SEOConfigs } from '@/components/SEO';

const NewsBlog: React.FC = () => {
  return (
    <div className='min-h-screen'>
      <SEO {...SEOConfigs.newsBlog} />
      <Navigation />

      {/* Hero Section */}
      <section className='relative bg-gradient-to-r from-green-600 to-blue-600 text-white py-24'>
        <div className='absolute inset-0 bg-black/20'></div>
        <div className='relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='max-w-3xl text-center mx-auto'>
            <h1 className='font-poppins font-bold text-4xl md:text-6xl mb-6'>
              News & Blog
            </h1>
            <p className='text-xl md:text-2xl text-gray-200 mb-8'>
              Stay updated with the latest insights, company news, and industry
              trends in renewable energy.
            </p>
            <div className='flex flex-col sm:flex-row gap-4 justify-center'>
              <Button
                size='lg'
                className='bg-accent-yellow text-primary-blue hover:bg-accent-yellow/90 font-semibold'
              >
                Subscribe to Newsletter
              </Button>
              <Link href='/portfolio'>
                <Button
                  size='lg'
                  className='bg-primary-blue text-white hover:bg-primary-blue/90 font-semibold'
                >
                  View Our Projects
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Coming Soon Section */}
      <section className='py-20 bg-white'>
        <div className='max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center'>
          <div className='mb-8'>
            <div className='w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6'>
              <svg
                className='w-12 h-12 text-green-600'
                fill='none'
                stroke='currentColor'
                viewBox='0 0 24 24'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z'
                />
              </svg>
            </div>
            <h2 className='font-poppins font-bold text-3xl text-primary-blue mb-4'>
              Coming Soon
            </h2>
            <p className='text-lg text-gray-600 mb-8'>
              We're working on bringing you the latest news, insights, and
              updates about renewable energy in Nigeria. Check back soon for
              exciting content!
            </p>
            <div className='flex flex-col sm:flex-row gap-4 justify-center'>
              <Link href='/contact'>
                <Button
                  size='lg'
                  className='bg-green-600 hover:bg-green-700 text-white font-semibold'
                >
                  Get in Touch
                </Button>
              </Link>
              <Link href='/portfolio'>
                <Button
                  size='lg'
                  variant='outline'
                  className='border-green-600 text-green-600 hover:bg-green-50 font-semibold'
                >
                  View Our Work
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default NewsBlog;

import React from 'react';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Link } from 'wouter';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

const Careers: React.FC = () => {
  const benefits = [
    {
      title: 'Health & Wellness',
      description:
        'Comprehensive health insurance, dental coverage, and wellness programs',
      icon: '🏥',
    },
    {
      title: 'Professional Development',
      description:
        'Training programs, certifications, and career advancement opportunities',
      icon: '📚',
    },
    {
      title: 'Flexible Work',
      description:
        'Hybrid work options and flexible scheduling to support work-life balance',
      icon: '🏠',
    },
    {
      title: 'Competitive Pay',
      description: 'Attractive salary packages with performance-based bonuses',
      icon: '💰',
    },
    {
      title: 'Team Events',
      description: 'Regular team building activities and company celebrations',
      icon: '🎉',
    },
    {
      title: 'Impact',
      description: "Contribute to Nigeria's sustainable energy transformation",
      icon: '🌱',
    },
  ];

  const culture = [
    {
      title: 'Innovation',
      description:
        'We encourage creative thinking and embrace new technologies to solve energy challenges.',
    },
    {
      title: 'Collaboration',
      description:
        'Teamwork is at the heart of everything we do, fostering a supportive and inclusive environment.',
    },
    {
      title: 'Excellence',
      description:
        'We maintain the highest standards of quality and professionalism in all our work.',
    },
    {
      title: 'Sustainability',
      description:
        'Our commitment to environmental stewardship guides every decision we make.',
    },
  ];

  return (
    <div className='min-h-screen'>
      <Navigation />

      {/* Hero Section */}
      <section className='relative bg-gradient-to-r from-green-600 to-blue-600 text-white py-24'>
        <div className='absolute inset-0 bg-black/20'></div>
        <div className='relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='max-w-3xl'>
            <h1 className='font-poppins font-bold text-4xl md:text-6xl mb-6'>
              Join Our Mission
            </h1>
            <p className='text-xl md:text-2xl text-gray-200 mb-8'>
              Help us power Nigeria's sustainable energy future. Be part of a
              team that's making a real difference.
            </p>
            <div className='flex flex-col sm:flex-row gap-4'>
              <Button
                size='lg'
                className='bg-accent-yellow text-primary-blue hover:bg-accent-yellow/90 font-semibold'
              >
                View Open Positions
              </Button>
              <Button
                size='lg'
                variant='outline'
                className='border-primary-blue text-primary-blue hover:bg-primary-blue hover:text-white'
              >
                Learn About Culture
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Why Work With Us */}
      <section className='py-20 bg-white'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='text-center mb-16'>
            <h2 className='font-poppins font-bold text-4xl text-primary-blue mb-4'>
              Why Work With Us?
            </h2>
            <p className='text-xl text-gray-600'>
              Join a team that's passionate about making a difference
            </p>
          </div>

          <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
            {benefits.map((benefit, index) => (
              <Card
                key={index}
                className='text-center hover:shadow-lg transition-shadow'
              >
                <CardHeader>
                  <div className='text-4xl mb-4'>{benefit.icon}</div>
                  <CardTitle className='text-primary-blue'>
                    {benefit.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className='text-gray-600'>{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Company Culture */}
      <section className='py-20 bg-light-gray'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='text-center mb-16'>
            <h2 className='font-poppins font-bold text-4xl text-primary-blue mb-4'>
              Our Culture
            </h2>
            <p className='text-xl text-gray-600'>
              The values that drive our success
            </p>
          </div>

          <div className='grid md:grid-cols-2 gap-8'>
            {culture.map((value, index) => (
              <Card key={index} className='border-green-200'>
                <CardHeader>
                  <CardTitle className='text-green-700'>
                    {value.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className='text-gray-600'>{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* No Current Openings */}
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
                  d='M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2-2v2m8 0V6a2 2 0 012 2v6a2 2 0 01-2 2H6a2 2 0 01-2-2V8a2 2 0 012-2V6'
                />
              </svg>
            </div>
            <h2 className='font-poppins font-bold text-3xl text-primary-blue mb-4'>
              No Current Openings
            </h2>
            <p className='text-lg text-gray-600 mb-8'>
              We're not currently hiring, but we're always interested in
              connecting with talented individuals who share our passion for
              renewable energy. Feel free to reach out to us!
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
              <Link href='/ourteam'>
                <Button
                  size='lg'
                  variant='outline'
                  className='border-green-600 text-green-600 hover:bg-green-50 font-semibold'
                >
                  Meet Our Team
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className='py-20 bg-primary-blue text-white'>
        <div className='max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center'>
          <h2 className='font-poppins font-bold text-4xl mb-6'>
            Ready to Make a Difference?
          </h2>
          <p className='text-xl text-gray-200 mb-8'>
            Join our team and help us build a sustainable energy future for
            Nigeria.
          </p>
          <div className='flex flex-col sm:flex-row gap-4 justify-center'>
            <Link href='/contact'>
              <Button
                size='lg'
                className='bg-accent-yellow text-primary-blue hover:bg-accent-yellow/90 font-semibold'
              >
                Contact Us
              </Button>
            </Link>
            <Link href='/ourteam'>
              <Button
                size='lg'
                variant='outline'
                className='border-primary-blue text-primary-blue hover:bg-primary-blue hover:text-white'
              >
                Meet Our Team
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Careers;

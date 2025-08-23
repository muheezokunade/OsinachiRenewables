import React from 'react';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { Button } from '../components/ui/button';
import { Link } from 'wouter';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

import SEO, { SEOConfigs } from '@/components/SEO';
import { LazyImage } from '@/components/ui/lazy-image';

const OurTeam: React.FC = () => {
  const team = [
    {
      name: 'Osinachi Alex',
      role: 'Chief Executive Officer',
      image:
        'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=compress&w=400&h=400&fit=crop',
      bio: "Visionary leader with 15+ years in renewable energy. Founded Osinachi Renewables to transform Nigeria's energy landscape.",
      expertise: [
        'Strategic Planning',
        'Business Development',
        'Energy Policy',
      ],
      linkedin: '#',
    },
    {
      name: 'Yetunde Alakija',
      role: 'Managing Director',
      image:
        'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=compress&w=400&h=400&fit=crop',
      bio: 'Technology visionary with deep expertise in renewable energy systems and digital innovation. Drives our technological advancement and product development.',
      expertise: [
        'Technology Strategy',
        'Product Development',
        'Digital Innovation',
      ],
      linkedin: '#',
    },
    {
      name: 'Onuchukwu Chioma Christabel',
      role: 'Chief Operations Officer',
      image:
        'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=compress&w=400&h=400&fit=crop',
      bio: 'Operations expert with 12+ years managing large-scale energy projects across West Africa.',
      expertise: ['Project Management', 'Operations', 'Quality Control'],
      linkedin: '#',
    },
    {
      name: 'Muheez Okunade',
      role: 'Lead Business Analyst',
      image: '/team/muheez-okunade.jpg',
      bio: 'Experienced technology leader specializing in full-stack development and system architecture. Leads our technical team in building innovative energy solutions.',
      expertise: [
        'Full-Stack Development',
        'System Architecture',
        'Team Leadership',
      ],
      linkedin: 'https://www.linkedin.com/in/muheez-okunade/',
    },
    {
      name: 'Deborah Igwe',
      role: 'Business Analyst',
      image:
        'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=compress&w=400&h=400&fit=crop',
      bio: 'Analyzes business processes and market trends to drive strategic decision-making and operational efficiency.',
      expertise: [
        'Business Analysis',
        'Market Research',
        'Process Optimization',
      ],
      linkedin: '#',
    },
  ];

  return (
    <div className='min-h-screen'>
      <SEO {...SEOConfigs.ourTeam} />
      <Navigation />

      {/* Hero Section */}
      <section className='relative bg-gradient-to-r from-green-600 to-blue-600 text-white py-24'>
        <div className='absolute inset-0 bg-black/20'></div>
        <div className='relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='max-w-3xl'>
            <h1 className='font-poppins font-bold text-4xl md:text-6xl mb-6'>
              Meet Our Team
            </h1>
            <p className='text-xl md:text-2xl text-gray-200'>
              Passionate professionals dedicated to powering Nigeria's
              sustainable energy future.
            </p>
          </div>
        </div>
      </section>

      {/* Team Overview */}
      <section className='py-20 bg-white'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='text-center mb-16'>
            <h2 className='font-poppins font-bold text-4xl text-primary-blue mb-4'>
              Our Expert Team
            </h2>
            <p className='text-xl text-gray-600 max-w-3xl mx-auto'>
              We are a dedicated team of professionals committed to delivering
              reliable, sustainable energy solutions across Nigeria.
            </p>
          </div>

          <div className='grid md:grid-cols-4 gap-8 mb-16'>
            <div className='text-center'>
              <div className='text-4xl font-bold text-green-600 mb-2'>5</div>
              <div className='text-gray-600'>Team Members</div>
            </div>
            <div className='text-center'>
              <div className='text-4xl font-bold text-green-600 mb-2'>15+</div>
              <div className='text-gray-600'>Years Combined Experience</div>
            </div>
            <div className='text-center'>
              <div className='text-4xl font-bold text-green-600 mb-2'>100+</div>
              <div className='text-gray-600'>Projects Completed</div>
            </div>
            <div className='text-center'>
              <div className='text-4xl font-bold text-green-600 mb-2'>24/7</div>
              <div className='text-gray-600'>Support Available</div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Members */}
      <section className='py-20 bg-light-gray'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='text-center mb-16'>
            <h2 className='font-poppins font-bold text-4xl text-primary-blue mb-4'>
              Meet Our Leadership Team
            </h2>
            <p className='text-xl text-gray-600'>
              The visionaries and experts driving our mission forward
            </p>
          </div>

          <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
            {team.map((member, index) => (
              <Card
                key={index}
                className='overflow-hidden hover:shadow-lg transition-shadow'
              >
                <div className='relative'>
                  <LazyImage
                    src={member.image}
                    alt={`${member.name} - ${member.role}`}
                    className='w-full h-64 object-cover'
                  />
                  <div className='absolute top-4 right-4'>
                    <Button
                      size='sm'
                      variant='secondary'
                      className='bg-white text-primary-blue hover:bg-gray-100'
                      asChild
                    >
                      <a
                        href={member.linkedin}
                        target='_blank'
                        rel='noopener noreferrer'
                      >
                        <svg
                          className='w-4 h-4'
                          fill='currentColor'
                          viewBox='0 0 24 24'
                        >
                          <path d='M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z' />
                        </svg>
                      </a>
                    </Button>
                  </div>
                </div>
                <CardHeader>
                  <CardTitle className='text-xl text-primary-blue'>
                    {member.name}
                  </CardTitle>
                  <p className='text-green-600 font-semibold'>{member.role}</p>
                </CardHeader>
                <CardContent>
                  <p className='text-gray-600 mb-4'>{member.bio}</p>
                  <div className='flex flex-wrap gap-2'>
                    {member.expertise.map((skill, skillIndex) => (
                      <Badge
                        key={skillIndex}
                        variant='outline'
                        className='text-xs'
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Join Our Team */}
      <section className='py-20 bg-primary-blue text-white'>
        <div className='max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center'>
          <h2 className='font-poppins font-bold text-4xl mb-6'>
            Join Our Mission
          </h2>
          <p className='text-xl text-gray-200 mb-8'>
            We're always looking for passionate individuals who share our vision
            for a sustainable energy future.
          </p>
          <div className='flex flex-col sm:flex-row gap-4 justify-center'>
            <Link href='/careers'>
              <Button
                size='lg'
                className='bg-accent-yellow text-primary-blue hover:bg-accent-yellow/90 font-semibold'
              >
                View Open Positions
              </Button>
            </Link>
            <Link href='/contact'>
              <Button
                size='lg'
                variant='outline'
                className='border-primary-blue text-primary-blue hover:bg-primary-blue hover:text-white'
              >
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default OurTeam;

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import {
  Zap,
  DollarSign,
  Shield,
  Clock,
  Leaf,
  Users,
  Award,
  TrendingUp,
} from 'lucide-react';
import { useDeviceType } from '@/hooks/use-mobile';

export default function Benefits() {
  const { isMobile, isSmallMobile } = useDeviceType();

  const benefits = [
    {
      icon: Zap,
      title: 'Reliable Power',
      description: 'Uninterrupted power supply with smart backup systems',
      badge: 'Core Benefit',
      color: 'text-yellow-600',
    },
    {
      icon: DollarSign,
      title: 'Cost Savings',
      description:
        'Reduce energy costs by up to 70% with our efficient solutions',
      badge: 'Financial',
      color: 'text-green-600',
    },
    {
      icon: Shield,
      title: 'Proven Reliability',
      description: '99.9% uptime guarantee with 24/7 monitoring and support',
      badge: 'Assurance',
      color: 'text-blue-600',
    },
    {
      icon: Clock,
      title: 'Quick Installation',
      description: 'Professional installation within 2-5 business days',
      badge: 'Efficiency',
      color: 'text-purple-600',
    },
    {
      icon: Leaf,
      title: 'Eco-Friendly',
      description: 'Reduce carbon footprint with clean, renewable energy',
      badge: 'Sustainability',
      color: 'text-green-500',
    },
    {
      icon: Users,
      title: 'Expert Support',
      description: 'Dedicated technical team with 15+ years of experience',
      badge: 'Service',
      color: 'text-indigo-600',
    },
    {
      icon: Award,
      title: 'Quality Guarantee',
      description: 'Premium components with extended warranty coverage',
      badge: 'Quality',
      color: 'text-red-600',
    },
    {
      icon: TrendingUp,
      title: 'Scalable Solutions',
      description: 'Systems that grow with your increasing power needs',
      badge: 'Growth',
      color: 'text-orange-600',
    },
  ];

  return (
    <section className={`bg-light-gray ${isMobile ? 'py-12' : 'py-20'}`}>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className={`text-center ${isMobile ? 'mb-10' : 'mb-16'}`}>
          <h2
            className={`font-poppins font-bold text-primary-blue mb-4 ${
              isSmallMobile ? 'text-2xl' : isMobile ? 'text-3xl' : 'text-4xl'
            }`}
          >
            Why Choose Osinachi Renewable Energy?
          </h2>
          <p
            className={`text-gray-600 max-w-3xl mx-auto ${
              isSmallMobile ? 'text-base' : isMobile ? 'text-lg' : 'text-xl'
            }`}
          >
            Experience the difference of working with Nigeria's leading
            renewable energy experts
          </p>
        </div>

        <div
          className={`grid gap-6 ${
            isSmallMobile
              ? 'grid-cols-1'
              : isMobile
                ? 'grid-cols-1 sm:grid-cols-2'
                : 'md:grid-cols-2 lg:grid-cols-4'
          }`}
        >
          {benefits.map((benefit, index) => (
            <Card
              key={index}
              className={`h-full hover:shadow-lg transition-all duration-300 hover:scale-105 cursor-pointer ${
                isMobile ? 'border-l-4 border-l-accent-yellow' : ''
              }`}
            >
              <CardHeader
                className={`text-center ${isMobile ? 'pb-4' : 'pb-6'}`}
              >
                <div
                  className={`mx-auto mb-4 rounded-full p-3 ${
                    isSmallMobile ? 'w-14 h-14' : 'w-16 h-16'
                  }`}
                  style={{ backgroundColor: 'var(--accent-yellow)' }}
                >
                  <benefit.icon
                    className={`${isSmallMobile ? 'h-8 w-8' : 'h-10 w-10'} ${benefit.color} mx-auto`}
                  />
                </div>

                <div className='space-y-2'>
                  <Badge
                    variant='secondary'
                    className={`${
                      isSmallMobile ? 'text-xs px-2 py-1' : 'text-sm px-3 py-1'
                    } bg-gray-100 text-gray-600`}
                  >
                    {benefit.badge}
                  </Badge>

                  <CardTitle
                    className={`font-poppins font-bold text-primary-blue ${
                      isSmallMobile
                        ? 'text-lg'
                        : isMobile
                          ? 'text-xl'
                          : 'text-xl'
                    }`}
                  >
                    {benefit.title}
                  </CardTitle>
                </div>
              </CardHeader>

              <CardContent
                className={`text-center ${isMobile ? 'pt-0' : 'pt-2'}`}
              >
                <p
                  className={`text-gray-600 leading-relaxed ${
                    isSmallMobile ? 'text-sm' : 'text-base'
                  }`}
                >
                  {benefit.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className={`text-center ${isMobile ? 'mt-10' : 'mt-16'}`}>
          <div
            className={`bg-white rounded-2xl shadow-lg ${
              isMobile ? 'p-6' : 'p-8'
            } max-w-4xl mx-auto`}
          >
            <h3
              className={`font-poppins font-bold text-primary-blue mb-4 ${
                isSmallMobile ? 'text-xl' : isMobile ? 'text-2xl' : 'text-3xl'
              }`}
            >
              Ready to Experience These Benefits?
            </h3>
            <p
              className={`text-gray-600 mb-6 ${
                isSmallMobile ? 'text-sm' : isMobile ? 'text-base' : 'text-lg'
              }`}
            >
              Join hundreds of satisfied customers who've transformed their
              power experience with our solutions.
            </p>

            <div
              className={`flex gap-4 ${
                isMobile ? 'flex-col' : 'flex-row justify-center'
              }`}
            >
              <a
                href='/contact'
                className={`bg-accent-yellow text-primary-blue hover:bg-accent-yellow/90 font-semibold rounded-lg transition-all duration-300 inline-flex items-center justify-center ${
                  isMobile ? 'px-6 py-3 text-base' : 'px-8 py-4 text-lg'
                }`}
              >
                Get Free Consultation
              </a>
              <a
                href='/portfolio'
                className={`bg-primary-blue text-white hover:bg-primary-blue/90 font-semibold rounded-lg transition-all duration-300 inline-flex items-center justify-center ${
                  isMobile ? 'px-6 py-3 text-base' : 'px-8 py-4 text-lg'
                }`}
              >
                View Our Work
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

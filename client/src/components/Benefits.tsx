import { Shield, TrendingUp, Puzzle, Heart, Users } from 'lucide-react';

export default function Benefits() {
  const benefits = [
    {
      icon: Shield,
      title: 'Reliable Power Supply',
      description: '99.9% uptime guaranteed with our integrated systems',
    },
    {
      icon: TrendingUp,
      title: 'Reduced Long-Term Costs',
      description: 'Up to 60% savings on monthly energy expenses',
    },
    {
      icon: Puzzle,
      title: 'Tailored Systems',
      description: 'Custom-designed solutions for your specific needs',
    },
    {
      icon: Heart,
      title: 'Peace of Mind',
      description: 'Comprehensive warranties and ongoing support',
    },
    {
      icon: Users,
      title: 'Professional Support',
      description: 'Expert engineers, not just suppliers',
    },
  ];

  return (
    <section className='py-20 bg-primary-blue text-white'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='text-center mb-16'>
          <h2 className='font-poppins font-bold text-4xl mb-4'>
            Why Choose Osinachi?
          </h2>
          <p className='text-xl text-gray-200'>
            We fix the power struggles others couldn't fix.
          </p>
        </div>

        <div className='grid md:grid-cols-3 lg:grid-cols-5 gap-8'>
          {benefits.map((benefit, index) => {
            const IconComponent = benefit.icon;
            return (
              <div key={index} className='text-center'>
                <div className='bg-accent-yellow w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4'>
                  <IconComponent className='text-primary-blue h-8 w-8' />
                </div>
                <h3 className='font-semibold text-lg mb-2'>{benefit.title}</h3>
                <p className='text-gray-200 text-sm'>{benefit.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

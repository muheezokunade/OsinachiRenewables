import { Button } from '@/components/ui/button';
import { Link } from 'wouter';
import { trackEvent } from '@/lib/analytics';
import { motion } from 'framer-motion';

export default function Hero() {
  const handleConsultationClick = () => {
    trackEvent('click', 'cta', 'hero_consultation');
  };

  const handleViewWorkClick = () => {
    trackEvent('click', 'cta', 'hero_view_work');
  };

  // Animation variants
  const headlineVariants = {
    initial: { opacity: 0, y: 20 },
    animate: {
      opacity: 1,
      y: 0,
      transition: { delay: 0.4, duration: 0.7, ease: 'easeOut' },
    },
  };

  const subtextVariants = {
    initial: { opacity: 0, y: 20 },
    animate: {
      opacity: 1,
      y: 0,
      transition: { delay: 0.6, duration: 0.7, ease: 'easeOut' },
    },
  };

  const ctaVariants = {
    initial: { opacity: 0, scale: 0.95 },
    animate: {
      opacity: 1,
      scale: 1,
      transition: { delay: 0.8, duration: 0.5, ease: 'easeOut' },
    },
  };

  return (
    <section className='relative bg-primary-blue text-white overflow-hidden'>
      {/* Static Background Image */}
      <motion.div
        className='absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat z-0'
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1509391366360-2e959784a276?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1920&h=1080')",
        }}
        initial={{ scale: 1.05, opacity: 0 }}
        animate={{ scale: 1, opacity: 0.2 }}
        transition={{ duration: 2, ease: 'easeOut' }}
      />
      {/* Overlay for readability */}
      <div className='absolute inset-0 bg-gradient-to-r from-primary-blue/90 via-primary-blue/80 to-primary-blue/70 z-10' />
      <div className='relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32 z-20'>
        <div className='max-w-3xl'>
          <motion.h1
            className='font-poppins font-bold text-4xl md:text-6xl leading-tight mb-6'
            variants={headlineVariants}
            initial='initial'
            animate='animate'
          >
            Tired of Unreliable Power?{' '}
            <span className='text-accent-yellow'>
              Get a Solution Built to Last.
            </span>
          </motion.h1>
          <motion.p
            className='text-xl md:text-2xl mb-8 text-gray-200'
            variants={subtextVariants}
            initial='initial'
            animate='animate'
          >
            We combine decades of generator expertise with modern inverter and
            solar technology to deliver power you can trust.
          </motion.p>
          <motion.div
            className='flex flex-col sm:flex-row gap-4'
            variants={ctaVariants}
            initial='initial'
            animate='animate'
          >
            <Link href='/contact'>
              <motion.div
                whileHover={{
                  backgroundColor: '#004aad',
                  color: '#FFD700',
                  y: -3,
                  boxShadow: '0 0 8px #FFD70055',
                  cursor: 'pointer',
                }}
                whileTap={{ scale: 0.97 }}
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                className='rounded'
              >
                <Button
                  size='lg'
                  className='bg-accent-yellow text-primary-blue hover:bg-primary-blue hover:text-accent-yellow font-semibold text-lg px-8 py-6 transition-all duration-300'
                  onClick={handleConsultationClick}
                >
                  Request Free Consultation
                </Button>
              </motion.div>
            </Link>
            <Link href='/portfolio'>
              <motion.div
                whileHover={{
                  backgroundColor: '#004aad',
                  color: '#FFD700',
                  y: -3,
                  boxShadow: '0 0 8px #FFD70055',
                  cursor: 'pointer',
                }}
                whileTap={{ scale: 0.97 }}
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                className='rounded'
              >
                <Button
                  size='lg'
                  className='bg-primary-blue text-white hover:bg-primary-blue/90 font-semibold text-lg px-8 py-6 transition-all duration-300'
                  onClick={handleViewWorkClick}
                >
                  View Our Work
                </Button>
              </motion.div>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

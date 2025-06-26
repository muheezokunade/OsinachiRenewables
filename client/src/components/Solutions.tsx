import { Button } from '@/components/ui/button';
import { Settings, Sun, Check } from 'lucide-react';
import { Link } from 'wouter';

export default function Solutions() {
  return (
    <section className='py-20 bg-white'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='text-center mb-16'>
          <h2 className='font-poppins font-bold text-4xl text-primary-blue mb-4'>
            Power You Can Trust. An Integrated Approach.
          </h2>
          <p className='text-xl text-gray-600 max-w-3xl mx-auto'>
            We don't just supply equipment – we engineer complete power
            solutions that work seamlessly together.
          </p>
        </div>

        <div className='grid md:grid-cols-2 gap-12'>
          {/* Generator Parts & Maintenance */}
          <div className='bg-light-gray rounded-2xl p-8'>
            <img
              src='https://images.pexels.com/photos/3855963/pexels-photo-3855963.jpeg?auto=compress&w=800&h=600&fit=crop'
              alt='Generator maintenance service'
              className='rounded-xl mb-6 w-full h-64 object-cover'
            />
            <div className='flex items-center mb-4'>
              <div className='bg-primary-blue w-12 h-12 rounded-full flex items-center justify-center mr-4'>
                <Settings className='text-white h-6 w-6' />
              </div>
              <h3 className='font-poppins font-bold text-2xl text-primary-blue'>
                Generator Parts & Maintenance
              </h3>
            </div>
            <p className='text-gray-700 mb-6'>
              Keeping your essential power systems running flawlessly with
              genuine parts and expert service for Perkins, Caterpillar,
              Cummins, and Lister.
            </p>
            <ul className='space-y-2 mb-6'>
              <li className='flex items-center'>
                <Check className='text-green-600 h-5 w-5 mr-2' />
                Genuine OEM parts only
              </li>
              <li className='flex items-center'>
                <Check className='text-green-600 h-5 w-5 mr-2' />
                Preventive maintenance schedules
              </li>
              <li className='flex items-center'>
                <Check className='text-green-600 h-5 w-5 mr-2' />
                24/7 emergency support
              </li>
            </ul>
            <Link href='/services'>
              <Button className='bg-primary-blue text-white hover:bg-primary-blue/90'>
                Learn More
              </Button>
            </Link>
          </div>

          {/* Custom Inverter & Solar Systems */}
          <div className='bg-light-gray rounded-2xl p-8'>
            <img
              src='https://images.pexels.com/photos/4254168/pexels-photo-4254168.jpeg?auto=compress&w=800&h=600&fit=crop'
              alt='Solar panel installation'
              className='rounded-xl mb-6 w-full h-64 object-cover'
            />
            <div className='flex items-center mb-4'>
              <div className='bg-accent-yellow w-12 h-12 rounded-full flex items-center justify-center mr-4'>
                <Sun className='text-primary-blue h-6 w-6' />
              </div>
              <h3 className='font-poppins font-bold text-2xl text-primary-blue'>
                Custom Inverter & Solar Systems
              </h3>
            </div>
            <p className='text-gray-700 mb-6'>
              Harness the sun and modern technology for uninterrupted,
              cost-effective power tailored to your exact needs.
            </p>
            <ul className='space-y-2 mb-6'>
              <li className='flex items-center'>
                <Check className='text-green-600 h-5 w-5 mr-2' />
                Tier-1 solar panels
              </li>
              <li className='flex items-center'>
                <Check className='text-green-600 h-5 w-5 mr-2' />
                Smart energy management
              </li>
              <li className='flex items-center'>
                <Check className='text-green-600 h-5 w-5 mr-2' />
                Lithium-ion battery banks
              </li>
            </ul>
            <Link href='/services'>
              <Button className='bg-accent-yellow text-primary-blue hover:bg-accent-yellow/90'>
                Design Your System
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

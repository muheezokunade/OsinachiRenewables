import { Link } from 'wouter';
import {
  Twitter,
  Linkedin,
  Instagram,
  Phone,
  Mail,
  MessageCircle,
} from 'lucide-react';

export default function Footer() {
  const services = [
    'Generator Maintenance',
    'Solar Systems',
    'Inverter Solutions',
    'Energy Audits',
    'IoT Monitoring',
  ];

  const company = ['About Us', 'Our Team', 'Careers', 'News & Blog', 'Contact'];

  const Logo = () => (
    <div className='flex items-center mb-6'>
      <img
        src='/logo.png'
        alt='Osinachi Renewable Energy Logo'
        className='h-12 w-auto filter brightness-0 invert'
      />
    </div>
  );

  return (
    <footer className='bg-primary-blue text-white py-16'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='grid md:grid-cols-4 gap-8 mb-12'>
          <div className='md:col-span-1'>
            <Logo />
            <p className='text-gray-300 mb-6 max-w-md'>
              Nigeria's premier integrated power solutions provider. Reliable.
              Renewable. Responsible.
            </p>
            <div className='flex space-x-4'>
              <a
                href='https://x.com/OsinachiEnergy'
                target='_blank'
                rel='noopener noreferrer'
                className='bg-accent-yellow w-10 h-10 rounded-full flex items-center justify-center text-primary-blue hover:bg-accent-yellow/90 transition duration-300'
              >
                <Twitter className='h-5 w-5' />
              </a>
              <a
                href='https://www.instagram.com/osinachienergy/'
                target='_blank'
                rel='noopener noreferrer'
                className='bg-accent-yellow w-10 h-10 rounded-full flex items-center justify-center text-primary-blue hover:bg-accent-yellow/90 transition duration-300'
              >
                <Instagram className='h-5 w-5' />
              </a>
              <a
                href='https://www.linkedin.com/company/107920640/'
                target='_blank'
                rel='noopener noreferrer'
                className='bg-accent-yellow w-10 h-10 rounded-full flex items-center justify-center text-primary-blue hover:bg-accent-yellow/90 transition duration-300'
              >
                <Linkedin className='h-5 w-5' />
              </a>
              <a
                href='https://www.tiktok.com/@osinachi_energy?lang=en-GB'
                target='_blank'
                rel='noopener noreferrer'
                className='bg-accent-yellow w-10 h-10 rounded-full flex items-center justify-center text-primary-blue hover:bg-accent-yellow/90 transition duration-300'
              >
                <svg
                  className='h-5 w-5'
                  viewBox='0 0 24 24'
                  fill='currentColor'
                >
                  <path d='M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.31-4.64 2.93 2.93 0 01.88.13V9.4a6.84 6.84 0 00-.88-.05A6.33 6.33 0 005 20.1a6.34 6.34 0 0010.86-4.43v-7a8.16 8.16 0 004.77 1.52v-3.4a4.85 4.85 0 01-1-.1z' />
                </svg>
              </a>
            </div>
          </div>

          <div>
            <h4 className='font-poppins font-semibold text-lg mb-4'>
              Services
            </h4>
            <ul className='space-y-2'>
              {services.map((service, index) => (
                <li key={index}>
                  <Link href='/services'>
                    <span className='text-gray-300 hover:text-accent-yellow transition duration-300'>
                      {service}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className='font-poppins font-semibold text-lg mb-4'>Company</h4>
            <ul className='space-y-2'>
              {company.map((item, index) => {
                let href = '#';
                if (item === 'About Us') href = '/about';
                else if (item === 'Our Team') href = '/ourteam';
                else if (item === 'Careers') href = '/careers';
                else if (item === 'News & Blog') href = '/newsblog';
                else if (item === 'Contact') href = '/contact';

                return (
                  <li key={index}>
                    <Link href={href}>
                      <span className='text-gray-300 hover:text-accent-yellow transition duration-300'>
                        {item}
                      </span>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>

          <div>
            <h4 className='font-poppins font-semibold text-lg mb-4'>
              Get In Touch
            </h4>
            <div className='space-y-3'>
              <div className='flex items-center space-x-3'>
                <Phone className='h-4 w-4 text-accent-yellow flex-shrink-0' />
                <a
                  href='tel:+2349060033963'
                  className='text-gray-300 hover:text-accent-yellow transition duration-300'
                >
                  +234 906 003 3963
                </a>
              </div>
              <div className='flex items-center space-x-3'>
                <Mail className='h-4 w-4 text-accent-yellow flex-shrink-0' />
                <a
                  href='mailto:info@osinachirenewables.com'
                  className='text-gray-300 hover:text-accent-yellow transition duration-300'
                >
                  info@osinachirenewables.com
                </a>
              </div>
              <div className='flex items-center space-x-3'>
                <MessageCircle className='h-4 w-4 text-green-400 flex-shrink-0' />
                <a
                  href='https://wa.me/2349060033963'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='text-gray-300 hover:text-green-400 transition duration-300'
                >
                  WhatsApp Chat
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className='border-t border-gray-600 pt-8 flex flex-col md:flex-row justify-between items-center'>
          <div className='text-gray-300 text-sm mb-4 md:mb-0'>
            © 2024 Osinachi Renewable Energy. All rights reserved.
          </div>
          <div className='flex space-x-6 text-sm'>
            <Link href='/privacy-policy'>
              <span className='text-gray-300 hover:text-accent-yellow transition duration-300'>
                Privacy Policy
              </span>
            </Link>
            <Link href='/cookies-policy'>
              <span className='text-gray-300 hover:text-accent-yellow transition duration-300'>
                Cookies Policy
              </span>
            </Link>
            <Link href='/terms-conditions'>
              <span className='text-gray-300 hover:text-accent-yellow transition duration-300'>
                Terms & Conditions
              </span>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

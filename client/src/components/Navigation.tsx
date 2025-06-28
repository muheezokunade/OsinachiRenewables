import { useState } from 'react';
import { Link, useLocation } from 'wouter';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from '@/components/ui/navigation-menu';
import { Menu, X } from 'lucide-react';
import { useDeviceType } from '@/hooks/use-mobile';

export default function Navigation() {
  const [location] = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { isSmallMobile } = useDeviceType();

  const isActive = (path: string) => location === path;

  const Logo = () => (
    <div className='flex items-center space-x-2 sm:space-x-3'>
      <img
        src='/logo.png'
        alt='Osinachi Renewable Energy Logo'
        className={`w-auto ${isSmallMobile ? 'h-10' : 'h-12 sm:h-16'}`}
      />
      <div className='flex flex-col sm:flex-row sm:items-baseline sm:space-x-2'>
        <span
          className={`font-inter font-bold tracking-normal leading-tight ${
            isSmallMobile ? 'text-xs' : 'text-sm sm:text-base lg:text-xl'
          }`}
          style={{ color: '#0166ba' }}
        >
          OSINACHI
        </span>
        <span
          className={`font-inter font-bold tracking-normal leading-tight ${
            isSmallMobile ? 'text-xs' : 'text-sm sm:text-base lg:text-xl'
          }`}
          style={{ color: '#0166ba' }}
        >
          {isSmallMobile ? 'RENEWABLES' : 'RENEWABLE ENERGY'}
        </span>
      </div>
    </div>
  );

  const NavItems = ({ mobile = false, onItemClick = () => {} }) => (
    <>
      <Link href='/' onClick={onItemClick}>
        <span
          className={`font-medium transition-colors duration-300 ${
            isActive('/')
              ? 'text-primary-blue'
              : 'text-gray-700 hover:text-primary-blue'
          } ${mobile ? 'block py-3 px-2 rounded-lg hover:bg-gray-50 text-lg' : ''}`}
        >
          Home
        </span>
      </Link>

      {!mobile ? (
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger className='font-medium text-gray-700 hover:text-primary-blue'>
                Services
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <div className='w-64 p-4'>
                  <Link href='/services' onClick={onItemClick}>
                    <div className='block px-4 py-3 text-sm text-gray-700 hover:bg-light-gray rounded-lg transition-colors'>
                      Generator Parts & Maintenance
                    </div>
                  </Link>
                  <Link href='/services' onClick={onItemClick}>
                    <div className='block px-4 py-3 text-sm text-gray-700 hover:bg-light-gray rounded-lg transition-colors'>
                      Custom Inverter & Solar Systems
                    </div>
                  </Link>
                  <Link href='/services' onClick={onItemClick}>
                    <div className='block px-4 py-3 text-sm text-gray-700 hover:bg-light-gray rounded-lg transition-colors'>
                      Energy Audit & Consultancy
                    </div>
                  </Link>
                </div>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger className='font-medium text-gray-700 hover:text-primary-blue'>
                About Us
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <div className='w-64 p-4'>
                  <Link href='/about' onClick={onItemClick}>
                    <div className='block px-4 py-3 text-sm text-gray-700 hover:bg-light-gray rounded-lg transition-colors'>
                      About Us
                    </div>
                  </Link>
                  <Link href='/ourteam' onClick={onItemClick}>
                    <div className='block px-4 py-3 text-sm text-gray-700 hover:bg-light-gray rounded-lg transition-colors'>
                      Our Team
                    </div>
                  </Link>
                  <Link href='/careers' onClick={onItemClick}>
                    <div className='block px-4 py-3 text-sm text-gray-700 hover:bg-light-gray rounded-lg transition-colors'>
                      Careers
                    </div>
                  </Link>
                  <Link href='/newsblog' onClick={onItemClick}>
                    <div className='block px-4 py-3 text-sm text-gray-700 hover:bg-light-gray rounded-lg transition-colors'>
                      News & Blog
                    </div>
                  </Link>
                  <Link href='/impact' onClick={onItemClick}>
                    <div className='block px-4 py-3 text-sm text-gray-700 hover:bg-light-gray rounded-lg transition-colors'>
                      Impact
                    </div>
                  </Link>
                </div>
              </NavigationMenuContent>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      ) : (
        <div className='space-y-1'>
          {/* Mobile Services Menu */}
          <div className='space-y-1'>
            <span className='block py-3 px-2 text-lg font-medium text-gray-700'>
              Services
            </span>
            <div className='pl-4 space-y-1'>
              <Link href='/services' onClick={onItemClick}>
                <span className='block py-2 px-2 text-base text-gray-600 hover:text-primary-blue hover:bg-gray-50 rounded-lg transition-colors'>
                  Generator Parts & Maintenance
                </span>
              </Link>
              <Link href='/services' onClick={onItemClick}>
                <span className='block py-2 px-2 text-base text-gray-600 hover:text-primary-blue hover:bg-gray-50 rounded-lg transition-colors'>
                  Custom Inverter & Solar Systems
                </span>
              </Link>
              <Link href='/services' onClick={onItemClick}>
                <span className='block py-2 px-2 text-base text-gray-600 hover:text-primary-blue hover:bg-gray-50 rounded-lg transition-colors'>
                  Energy Audit & Consultancy
                </span>
              </Link>
            </div>
          </div>

          {/* Mobile About Menu */}
          <div className='space-y-1'>
            <span className='block py-3 px-2 text-lg font-medium text-gray-700'>
              About Us
            </span>
            <div className='pl-4 space-y-1'>
              <Link href='/about' onClick={onItemClick}>
                <span className='block py-2 px-2 text-base text-gray-600 hover:text-primary-blue hover:bg-gray-50 rounded-lg transition-colors'>
                  About Us
                </span>
              </Link>
              <Link href='/ourteam' onClick={onItemClick}>
                <span className='block py-2 px-2 text-base text-gray-600 hover:text-primary-blue hover:bg-gray-50 rounded-lg transition-colors'>
                  Our Team
                </span>
              </Link>
              <Link href='/careers' onClick={onItemClick}>
                <span className='block py-2 px-2 text-base text-gray-600 hover:text-primary-blue hover:bg-gray-50 rounded-lg transition-colors'>
                  Careers
                </span>
              </Link>
              <Link href='/newsblog' onClick={onItemClick}>
                <span className='block py-2 px-2 text-base text-gray-600 hover:text-primary-blue hover:bg-gray-50 rounded-lg transition-colors'>
                  News & Blog
                </span>
              </Link>
              <Link href='/impact' onClick={onItemClick}>
                <span className='block py-2 px-2 text-base text-gray-600 hover:text-primary-blue hover:bg-gray-50 rounded-lg transition-colors'>
                  Impact
                </span>
              </Link>
            </div>
          </div>
        </div>
      )}

      <Link href='/portfolio' onClick={onItemClick}>
        <span
          className={`font-medium transition-colors duration-300 ${
            isActive('/portfolio')
              ? 'text-primary-blue'
              : 'text-gray-700 hover:text-primary-blue'
          } ${mobile ? 'block py-3 px-2 rounded-lg hover:bg-gray-50 text-lg' : ''}`}
        >
          Portfolio
        </span>
      </Link>

      <Link href='/contact' onClick={onItemClick}>
        <span
          className={`font-medium transition-colors duration-300 ${
            isActive('/contact')
              ? 'text-primary-blue'
              : 'text-gray-700 hover:text-primary-blue'
          } ${mobile ? 'block py-3 px-2 rounded-lg hover:bg-gray-50 text-lg' : ''}`}
        >
          Contact
        </span>
      </Link>
    </>
  );

  return (
    <nav className='bg-white shadow-lg sticky top-0 z-50'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div
          className={`flex justify-between items-center ${
            isSmallMobile ? 'h-14' : 'h-16 sm:h-20'
          }`}
        >
          <Link href='/'>
            <Logo />
          </Link>

          {/* Desktop Navigation */}
          <div className='hidden md:flex items-center space-x-8'>
            <NavItems />
            <Link href='/contact'>
              <Button className='bg-accent-yellow text-primary-blue hover:bg-accent-yellow/90 font-semibold px-6 py-2'>
                Get Quote
              </Button>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className='md:hidden'>
            <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
              <SheetTrigger asChild>
                <Button
                  variant='ghost'
                  size='icon'
                  className='w-10 h-10'
                  aria-label='Open mobile menu'
                >
                  <Menu className='h-6 w-6' />
                </Button>
              </SheetTrigger>
              <SheetContent
                side='right'
                className={`${isSmallMobile ? 'w-[280px]' : 'w-[320px] sm:w-[400px]'} p-0`}
              >
                {/* Mobile Menu Header */}
                <div className='flex items-center justify-between p-4 border-b'>
                  <span className='font-semibold text-lg text-primary-blue'>
                    Menu
                  </span>
                  <Button
                    variant='ghost'
                    size='icon'
                    onClick={() => setIsMobileMenuOpen(false)}
                    className='w-8 h-8'
                    aria-label='Close mobile menu'
                  >
                    <X className='h-4 w-4' />
                  </Button>
                </div>

                {/* Mobile Menu Content */}
                <div className='p-4 space-y-2'>
                  <NavItems
                    mobile={true}
                    onItemClick={() => setIsMobileMenuOpen(false)}
                  />

                  {/* Mobile CTA Button */}
                  <div className='pt-4 mt-4 border-t'>
                    <Link href='/contact'>
                      <Button
                        className='w-full bg-accent-yellow text-primary-blue hover:bg-accent-yellow/90 font-semibold h-12 text-lg'
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        Get Quote
                      </Button>
                    </Link>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
}

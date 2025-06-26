import { useState } from "react";
import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { 
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { Menu, ChevronDown } from "lucide-react";

export default function Navigation() {
  const [location] = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const isActive = (path: string) => location === path;

  const Logo = () => (
    <div className="flex items-center">
      <img 
        src="/logo.png" 
        alt="Osinachi Renewable Energy Logo" 
        className="h-16 w-auto"
      />
    </div>
  );

  const NavItems = ({ mobile = false, onItemClick = () => {} }) => (
    <>
      <Link href="/" onClick={onItemClick}>
        <span className={`font-medium transition-colors duration-300 ${
          isActive("/") ? "text-primary-blue" : "text-gray-700 hover:text-primary-blue"
        } ${mobile ? "block py-2" : ""}`}>
          Home
        </span>
      </Link>
      
      {!mobile ? (
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger className="font-medium text-gray-700 hover:text-primary-blue">
                Services
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <div className="w-64 p-4">
                  <Link href="/services" onClick={onItemClick}>
                    <div className="block px-4 py-3 text-sm text-gray-700 hover:bg-light-gray rounded-lg">
                      Generator Parts & Maintenance
                    </div>
                  </Link>
                  <Link href="/services" onClick={onItemClick}>
                    <div className="block px-4 py-3 text-sm text-gray-700 hover:bg-light-gray rounded-lg">
                      Custom Inverter & Solar Systems
                    </div>
                  </Link>
                  <Link href="/services" onClick={onItemClick}>
                    <div className="block px-4 py-3 text-sm text-gray-700 hover:bg-light-gray rounded-lg">
                      Energy Audit & Consultancy
                    </div>
                  </Link>
                </div>
              </NavigationMenuContent>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      ) : (
        <Link href="/services" onClick={onItemClick}>
          <span className="block py-2 text-gray-700 hover:text-primary-blue">Services</span>
        </Link>
      )}
      
      <Link href="/about" onClick={onItemClick}>
        <span className={`font-medium transition-colors duration-300 ${
          isActive("/about") ? "text-primary-blue" : "text-gray-700 hover:text-primary-blue"
        } ${mobile ? "block py-2" : ""}`}>
          About
        </span>
      </Link>
      
      <Link href="/portfolio" onClick={onItemClick}>
        <span className={`font-medium transition-colors duration-300 ${
          isActive("/portfolio") ? "text-primary-blue" : "text-gray-700 hover:text-primary-blue"
        } ${mobile ? "block py-2" : ""}`}>
          Portfolio
        </span>
      </Link>
      
      <Link href="/contact" onClick={onItemClick}>
        <span className={`font-medium transition-colors duration-300 ${
          isActive("/contact") ? "text-primary-blue" : "text-gray-700 hover:text-primary-blue"
        } ${mobile ? "block py-2" : ""}`}>
          Contact
        </span>
      </Link>
    </>
  );

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Link href="/">
            <Logo />
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <NavItems />
            <Link href="/contact">
              <Button className="bg-accent-yellow text-primary-blue hover:bg-accent-yellow/90 font-semibold">
                Get Quote
              </Button>
            </Link>
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden">
            <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                <div className="mt-6 space-y-4">
                  <NavItems 
                    mobile={true} 
                    onItemClick={() => setIsMobileMenuOpen(false)} 
                  />
                  <Link href="/contact">
                    <Button 
                      className="w-full bg-accent-yellow text-primary-blue hover:bg-accent-yellow/90 font-semibold"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      Get Quote
                    </Button>
                  </Link>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
}

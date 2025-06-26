import { Link } from "wouter";
import { Facebook, Twitter, Linkedin, Instagram } from "lucide-react";

export default function Footer() {
  const services = [
    "Generator Maintenance",
    "Solar Systems",
    "Inverter Solutions",
    "Energy Audits",
    "IoT Monitoring"
  ];

  const company = [
    "About Us",
    "Our Team",
    "Careers",
    "News & Blog",
    "Contact"
  ];

  const legal = [
    "Privacy Policy",
    "Terms & Conditions",
    "Cookie Policy"
  ];

  const Logo = () => (
    <div className="flex items-center mb-6">
      <img 
        src="/logo.png" 
        alt="Osinachi Renewable Energy Logo" 
        className="h-12 w-auto filter brightness-0 invert"
      />
    </div>
  );

  return (
    <footer className="bg-primary-blue text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          <div className="md:col-span-2">
            <Logo />
            <p className="text-gray-300 mb-6 max-w-md">
              Nigeria's premier integrated power solutions provider. Reliable. Renewable. Responsible.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="bg-accent-yellow w-10 h-10 rounded-full flex items-center justify-center text-primary-blue hover:bg-accent-yellow/90 transition duration-300">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="bg-accent-yellow w-10 h-10 rounded-full flex items-center justify-center text-primary-blue hover:bg-accent-yellow/90 transition duration-300">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="bg-accent-yellow w-10 h-10 rounded-full flex items-center justify-center text-primary-blue hover:bg-accent-yellow/90 transition duration-300">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="bg-accent-yellow w-10 h-10 rounded-full flex items-center justify-center text-primary-blue hover:bg-accent-yellow/90 transition duration-300">
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="font-poppins font-semibold text-lg mb-4">Services</h4>
            <ul className="space-y-2">
              {services.map((service, index) => (
                <li key={index}>
                  <Link href="/services">
                    <span className="text-gray-300 hover:text-accent-yellow transition duration-300">
                      {service}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="font-poppins font-semibold text-lg mb-4">Company</h4>
            <ul className="space-y-2">
              {company.map((item, index) => (
                <li key={index}>
                  <Link href={item === "About Us" ? "/about" : item === "Contact" ? "/contact" : "#"}>
                    <span className="text-gray-300 hover:text-accent-yellow transition duration-300">
                      {item}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-600 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="text-gray-300 text-sm mb-4 md:mb-0">
            © 2024 Osinachi Renewable Energy. All rights reserved.
          </div>
          <div className="flex space-x-6 text-sm">
            <Link href="/privacy-policy">
              <span className="text-gray-300 hover:text-accent-yellow transition duration-300">
                Privacy Policy
              </span>
            </Link>
            <Link href="/cookies-policy">
              <span className="text-gray-300 hover:text-accent-yellow transition duration-300">
                Cookies Policy
              </span>
            </Link>
            <Link href="/terms-conditions">
              <span className="text-gray-300 hover:text-accent-yellow transition duration-300">
                Terms & Conditions
              </span>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

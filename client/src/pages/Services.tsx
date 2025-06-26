import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import CookieConsent from "@/components/CookieConsent";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { Settings, Sun, Search, Monitor, Check } from "lucide-react";

export default function Services() {
  const services = [
    {
      icon: Settings,
      title: "Generator Parts & Maintenance",
      description: "Expert maintenance for Nigeria's most trusted generator brands - Perkins, Caterpillar, Cummins, and Lister.",
      features: [
        "Diagnostic Checks",
        "Preventative Maintenance Schedules", 
        "Oil & Filter Changes",
        "Engine Overhauls",
        "Genuine Parts Sourcing & Supply"
      ],
      brands: ["Perkins", "Caterpillar", "Cummins", "Lister"],
      image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600"
    },
    {
      icon: Sun,
      title: "Custom Inverter & Solar Systems",
      description: "Harness the power of the sun with custom-designed solar and inverter systems tailored to your specific needs.",
      features: [
        "Tier-1 Solar Panels",
        "Hybrid Inverters",
        "Lithium-Ion Battery Banks",
        "Smart Energy Management Systems",
        "Professional Installation & Commissioning"
      ],
      applications: ["Oil Vessels", "Gas Stations", "Banks", "Hotels", "Homes", "Clubs", "Factories"],
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600"
    },
    {
      icon: Search,
      title: "Energy Audit & Consultancy",
      description: "Comprehensive energy assessments to optimize your power consumption and identify the most cost-effective solutions.",
      features: [
        "Power Consumption Analysis",
        "Load Profiling",
        "System Efficiency Assessment",
        "ROI Calculations",
        "Custom Recommendations"
      ],
      image: "https://images.unsplash.com/photo-1460472178825-e5240623afd5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600"
    },
    {
      icon: Monitor,
      title: "IoT Monitoring & Management",
      description: "Advanced remote monitoring systems that predict issues before they happen and ensure optimal performance.",
      features: [
        "Real-time System Monitoring",
        "Predictive Maintenance Alerts",
        "Performance Analytics",
        "Remote Troubleshooting",
        "Mobile App Access"
      ],
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600"
    }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative bg-primary-blue text-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="font-poppins font-bold text-4xl md:text-6xl mb-6">
              Our Services
            </h1>
            <p className="text-xl md:text-2xl text-gray-200">
              Comprehensive power solutions designed to meet your specific needs and deliver reliable results.
            </p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-20">
            {services.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <div key={index} className={`grid lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
                  <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                    <div className="flex items-center mb-6">
                      <div className="bg-accent-yellow w-16 h-16 rounded-full flex items-center justify-center mr-4">
                        <IconComponent className="text-primary-blue h-8 w-8" />
                      </div>
                      <h2 className="font-poppins font-bold text-3xl text-primary-blue">{service.title}</h2>
                    </div>
                    <p className="text-lg text-gray-700 mb-6">{service.description}</p>
                    
                    <div className="mb-8">
                      <h3 className="font-poppins font-semibold text-xl text-primary-blue mb-4">Key Features:</h3>
                      <ul className="space-y-2">
                        {service.features.map((feature, idx) => (
                          <li key={idx} className="flex items-center">
                            <Check className="text-green-600 h-5 w-5 mr-3 flex-shrink-0" />
                            <span className="text-gray-700">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {service.brands && (
                      <div className="mb-8">
                        <h3 className="font-poppins font-semibold text-xl text-primary-blue mb-4">Supported Brands:</h3>
                        <div className="flex flex-wrap gap-2">
                          {service.brands.map((brand, idx) => (
                            <span key={idx} className="bg-light-gray px-3 py-1 rounded-full text-sm text-primary-blue font-medium">
                              {brand}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}

                    {service.applications && (
                      <div className="mb-8">
                        <h3 className="font-poppins font-semibold text-xl text-primary-blue mb-4">Applications:</h3>
                        <div className="flex flex-wrap gap-2">
                          {service.applications.map((app, idx) => (
                            <span key={idx} className="bg-light-gray px-3 py-1 rounded-full text-sm text-primary-blue font-medium">
                              {app}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}

                    <Link href="/contact">
                      <Button className="bg-primary-blue text-white hover:bg-primary-blue/90">
                        Get Quote for This Service
                      </Button>
                    </Link>
                  </div>
                  
                  <div className={index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}>
                    <img 
                      src={service.image} 
                      alt={service.title} 
                      className="rounded-2xl shadow-lg w-full h-auto"
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-light-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-poppins font-bold text-4xl text-primary-blue mb-4">Our Service Process</h2>
            <p className="text-xl text-gray-600">A systematic approach to delivering exceptional results</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              "Consultation & Energy Audit",
              "Custom System Design",
              "Professional Installation",
              "Ongoing Support & Monitoring"
            ].map((step, index) => (
              <div key={index} className="text-center">
                <div className="bg-accent-yellow w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-primary-blue font-bold text-2xl">{index + 1}</span>
                </div>
                <h3 className="font-poppins font-semibold text-lg mb-2">{step}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary-blue text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-poppins font-bold text-4xl mb-6">
            Ready to Transform Your Power Infrastructure?
          </h2>
          <p className="text-xl text-gray-200 mb-8">
            Let's discuss your specific needs and design a solution that delivers reliable, cost-effective power.
          </p>
          <Link href="/contact">
            <Button size="lg" className="bg-accent-yellow text-primary-blue hover:bg-accent-yellow/90 font-semibold">
              Schedule Your Free Consultation
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
      <CookieConsent />
    </div>
  );
}

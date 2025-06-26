import { useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import CookieConsent from "@/components/CookieConsent";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "wouter";

export default function Portfolio() {
  const [activeFilter, setActiveFilter] = useState("all");

  const projects = [
    {
      id: 1,
      category: "industrial",
      title: "Manufacturing Facility, Lagos",
      client: "Mid-Sized Factory",
      challenge: "High diesel costs and frequent production losses from grid failures were crippling profitability.",
      approach: "Our team conducted a full energy audit and designed a hybrid system to leverage their existing generator as a final backup, not a primary source.",
      solution: "A 50kW custom solar system with a 100kWh battery bank, integrated with their existing 250kVA generator.",
      results: "60% reduction in monthly diesel costs, 99.9% power uptime, and a projected ROI of 3.5 years.",
      testimonial: "Our production line hasn't stopped once since installation. The ROI exceeded our projections.",
      systemSize: "50kW",
      image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600"
    },
    {
      id: 2,
      category: "commercial",
      title: "Luxury Hotel, Abuja",
      client: "5-Star Hotel",
      challenge: "Frequent power outages were affecting guest experience and operational efficiency, leading to complaints and lost revenue.",
      approach: "Designed an integrated power solution that prioritizes guest comfort while maintaining operational efficiency.",
      solution: "A 75kW hybrid system with smart load management ensuring 24/7 power to critical areas.",
      results: "Zero power interruptions in guest areas, 45% reduction in energy costs, improved guest satisfaction scores.",
      testimonial: "Finally found a power solutions company that understands hospitality. Our guests never experience power issues.",
      systemSize: "75kW",
      image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600"
    },
    {
      id: 3,
      category: "residential",
      title: "Private Estate, Port Harcourt",
      client: "Family Residence",
      challenge: "Unreliable grid power was affecting family comfort, children's studies, and increasing monthly electricity bills.",
      approach: "Comprehensive home energy assessment and design of a family-friendly power solution.",
      solution: "A 15kW solar system with battery backup designed for optimal home comfort and energy independence.",
      results: "Uninterrupted power for study and family activities, 55% reduction in electricity bills.",
      testimonial: "The kids can now study without interruption, and our bills dropped by more than half. Worth every naira!",
      systemSize: "15kW",
      image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600"
    },
    {
      id: 4,
      category: "commercial",
      title: "Banking Branch, Lagos",
      client: "Commercial Bank",
      challenge: "Critical banking operations required 100% uptime with backup systems for ATMs and core banking operations.",
      approach: "Engineered a redundant power system with multiple backup layers for mission-critical operations.",
      solution: "Integrated solar-battery-generator system with automatic failover and UPS backup for sensitive equipment.",
      results: "100% uptime for banking operations, significant cost savings, enhanced customer satisfaction.",
      testimonial: "Our branch operations are now completely reliable. Customer complaints about ATM downtime are zero.",
      systemSize: "30kW",
      image: "https://images.unsplash.com/photo-1541354329998-f4d9a9f9297f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600"
    },
    {
      id: 5,
      category: "industrial",
      title: "Food Processing Plant, Kano",
      client: "Food Manufacturing Company",
      challenge: "Temperature-sensitive production processes required consistent power to maintain quality and prevent spoilage.",
      approach: "Designed a robust power system with quick switchover capabilities to protect sensitive processes.",
      solution: "80kW hybrid system with priority load management for critical refrigeration and processing equipment.",
      results: "Zero production losses due to power issues, 40% reduction in energy costs, improved product quality consistency.",
      testimonial: "Our product quality is now consistent, and we've eliminated costly production losses due to power failures.",
      systemSize: "80kW",
      image: "https://images.unsplash.com/photo-1565814329452-e1efa11c5b89?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600"
    },
    {
      id: 6,
      category: "residential",
      title: "Residential Estate, Abuja",
      client: "Gated Community",
      challenge: "Multiple homes in the estate needed a coordinated power solution for common areas and individual units.",
      approach: "Community-wide power assessment and design of scalable solutions for individual homes and shared facilities.",
      solution: "Distributed solar system with community battery storage and individual home backup systems.",
      results: "Estate-wide power reliability, reduced common area maintenance costs, increased property values.",
      testimonial: "Property values increased and residents are happier with reliable power throughout the estate.",
      systemSize: "120kW",
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600"
    }
  ];

  const filters = [
    { id: "all", label: "All Projects" },
    { id: "industrial", label: "Industrial" },
    { id: "commercial", label: "Commercial" },
    { id: "residential", label: "Residential" }
  ];

  const filteredProjects = activeFilter === "all" 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative bg-primary-blue text-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="font-poppins font-bold text-4xl md:text-6xl mb-6">
              Our Portfolio
            </h1>
            <p className="text-xl md:text-2xl text-gray-200">
              Proven results across industries - from small homes to large industrial facilities.
            </p>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {filters.map((filter) => (
              <Button
                key={filter.id}
                variant={activeFilter === filter.id ? "default" : "outline"}
                onClick={() => setActiveFilter(filter.id)}
                className={`px-6 py-2 rounded-full font-semibold transition-all duration-300 ${
                  activeFilter === filter.id
                    ? "bg-primary-blue text-white"
                    : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                }`}
              >
                {filter.label}
              </Button>
            ))}
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <div key={project.id} className="bg-light-gray rounded-2xl overflow-hidden group hover:shadow-lg transition-shadow duration-300">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="p-6">
                  <Badge 
                    variant="secondary" 
                    className="text-sm text-accent-yellow bg-accent-yellow/10 font-semibold mb-2"
                  >
                    {project.category.toUpperCase()}
                  </Badge>
                  <h3 className="font-poppins font-bold text-xl mb-3">{project.title}</h3>
                  <p className="text-gray-600 mb-4 line-clamp-3">{project.challenge}</p>
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-sm text-gray-500">System Size: {project.systemSize}</span>
                    <span className="text-sm font-semibold text-primary-blue">{project.client}</span>
                  </div>
                  
                  {/* Expandable Details */}
                  <div className="border-t pt-4 mt-4">
                    <div className="space-y-3 text-sm">
                      <div>
                        <span className="font-semibold text-primary-blue">Solution:</span>
                        <p className="text-gray-600 mt-1">{project.solution}</p>
                      </div>
                      <div>
                        <span className="font-semibold text-primary-blue">Results:</span>
                        <p className="text-gray-600 mt-1">{project.results}</p>
                      </div>
                      <div>
                        <span className="font-semibold text-primary-blue">Client Testimonial:</span>
                        <p className="text-gray-600 mt-1 italic">"{project.testimonial}"</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-primary-blue text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-poppins font-bold text-4xl mb-4">Our Impact in Numbers</h2>
            <p className="text-xl text-gray-200">Real results for real clients</p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-5xl font-bold text-accent-yellow mb-2">100+</div>
              <div className="text-gray-200">Successful Projects</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-accent-yellow mb-2">99.9%</div>
              <div className="text-gray-200">System Uptime</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-accent-yellow mb-2">50%+</div>
              <div className="text-gray-200">Average Cost Reduction</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-accent-yellow mb-2">1000+</div>
              <div className="text-gray-200">Tons CO2 Saved</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-light-gray">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-poppins font-bold text-4xl text-primary-blue mb-6">
            Ready to Join Our Success Stories?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Let's discuss how we can solve your power challenges and deliver results that exceed your expectations.
          </p>
          <Link href="/contact">
            <Button size="lg" className="bg-accent-yellow text-primary-blue hover:bg-accent-yellow/90 font-semibold">
              Start Your Success Story
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
      <CookieConsent />
    </div>
  );
}

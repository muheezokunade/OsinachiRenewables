import { useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import CookieConsent from "@/components/CookieConsent";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "wouter";
import { projects } from "../utils/portfolioData";

export default function Portfolio() {
  const [activeFilter, setActiveFilter] = useState("all");

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
              <Link href={`/portfolio/${project.slug}`}>
                <div key={project.id} className="bg-light-gray rounded-2xl overflow-hidden group hover:shadow-lg transition-shadow duration-300 cursor-pointer">
                  <img 
                    src={project.image} 
                    alt={`${project.title} - ${project.client} - ${project.category} project in Nigeria`} 
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
              </Link>
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

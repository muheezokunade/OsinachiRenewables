import { useState } from "react";
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
      description: "50kW hybrid solar system with generator backup, delivering 60% reduction in diesel costs.",
      systemSize: "50kW",
      image: "https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&w=800&h=600&fit=crop"
    },
    {
      id: 2,
      category: "commercial",
      title: "Luxury Hotel, Abuja",
      description: "Integrated power solution ensuring 24/7 guest comfort with smart energy management.",
      systemSize: "75kW",
      image: "https://images.pexels.com/photos/261102/pexels-photo-261102.jpeg?auto=compress&w=800&h=600&fit=crop"
    },
    {
      id: 3,
      category: "residential",
      title: "Private Estate, Port Harcourt",
      description: "Complete home energy solution with battery backup for uninterrupted family comfort.",
      systemSize: "15kW",
      image: "https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&w=800&h=600&fit=crop"
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
    <section id="portfolio" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-poppins font-bold text-4xl text-primary-blue mb-4">Our Portfolio</h2>
          <p className="text-xl text-gray-600">Proven results across industries</p>
        </div>
        
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
            <div key={project.id} className="bg-light-gray rounded-2xl overflow-hidden">
              <img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <Badge 
                  variant="secondary" 
                  className="text-sm text-accent-yellow bg-accent-yellow/10 font-semibold mb-2"
                >
                  {project.category.toUpperCase()}
                </Badge>
                <h3 className="font-poppins font-bold text-xl mb-3">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-500">System Size: {project.systemSize}</span>
                  <Button variant="link" className="text-primary-blue font-semibold p-0">
                    View Details →
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Link href="/portfolio">
            <Button className="bg-accent-yellow text-primary-blue hover:bg-accent-yellow/90 font-semibold">
              View All Projects
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}

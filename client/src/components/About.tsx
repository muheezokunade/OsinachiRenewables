import { Button } from "@/components/ui/button";
import { Link } from "wouter";

export default function About() {
  const stats = [
    { value: "100+", label: "Successful Deployments" },
    { value: "99.9%", label: "System Uptime" },
    { value: "15+", label: "Years Experience" }
  ];

  return (
    <section id="about" className="py-20 bg-light-gray">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <img 
              src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=compress&w=800&h=600&fit=crop" 
              alt="Solar installation in Nigerian setting - African energy landscape" 
              className="rounded-2xl shadow-lg w-full h-auto"
            />
          </div>
          <div>
            <h2 className="font-poppins font-bold text-4xl text-primary-blue mb-6">Our Story</h2>
            <p className="text-lg text-gray-700 mb-6">
              Osinachi Renewable Energy is built on a foundation of decades of experience in mission-critical power systems. We began as specialists servicing traditional generators—Perkins, Caterpillar, Cummins, and Lister—learning firsthand the frustrations businesses face with unreliable power.
            </p>
            <p className="text-lg text-gray-700 mb-8">
              Today, we've evolved into Nigeria's premier integrated power solutions provider, combining our proven expertise with cutting-edge renewable technology. We don't just supply equipment—we engineer complete power ecosystems that work.
            </p>
            
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl font-bold text-accent-yellow">{stat.value}</div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </div>
              ))}
            </div>
            
            <Link href="/about">
              <Button className="bg-primary-blue text-white hover:bg-primary-blue/90">
                Learn More About Us
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

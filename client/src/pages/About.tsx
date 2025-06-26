import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import CookieConsent from "@/components/CookieConsent";
import SEO, { SEOConfigs } from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";

export default function About() {
  const values = [
    {
      title: "Reliability",
      description: "Our foundation is built on decades of experience in mission-critical power. We deliver solutions that are robust, durable, and dependable."
    },
    {
      title: "Authenticity",
      description: "We supply only original, high-quality generators, inverters, and spare parts—no imitations. Trust is built on transparency."
    },
    {
      title: "Expertise",
      description: "We are engineers and consultants, not just suppliers. We provide expert guidance based on deep technical knowledge."
    },
    {
      title: "Innovation",
      description: "We leverage modern technology, from IoT-based monitoring to advanced hybrid inverters and Tier-1 solar components."
    },
    {
      title: "Responsibility",
      description: "We are responsible to our clients, community, and environment through exceptional service and sustainable practices."
    }
  ];

  const achievements = [
    { metric: "100+", description: "Successful Deployments" },
    { metric: "99.9%", description: "System Uptime Guarantee" },
    { metric: "15+", description: "Years of Experience" },
    { metric: "60%", description: "Average Cost Reduction" }
  ];

  return (
    <div className="min-h-screen">
      <SEO {...SEOConfigs.about} />
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative bg-primary-blue text-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="font-poppins font-bold text-4xl md:text-6xl mb-6">
              Our Story
            </h1>
            <p className="text-xl md:text-2xl text-gray-200">
              Building Nigeria's energy future through reliable, renewable, and responsible power solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-poppins font-bold text-4xl text-primary-blue mb-6">Our Mission</h2>
              <p className="text-lg text-gray-700 mb-6">
                At Osinachi Renewable Energy, we are on a mission to end the cycle of unreliable power supply in Nigeria by delivering authentic, high-performance, and tailored energy systems—one home, one business, one factory at a time.
              </p>
              <p className="text-lg text-gray-700 mb-8">
                We solve your energy problems for good, not temporarily. This means empowering businesses to meet production targets without fear of downtime and allowing families to live in comfort and security, free from the constant disruption of power failures.
              </p>
              <h3 className="font-poppins font-bold text-2xl text-primary-blue mb-4">Our Vision</h3>
              <p className="text-lg text-gray-700">
                To become Nigeria's most trusted provider of dependable and integrated energy solutions, empowering individuals and industries with long-term, sustainable power systems that work every time.
              </p>
            </div>
            <div>
              <img 
                src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=compress&w=800&h=600&fit=crop" 
                alt="Solar installation in Nigerian setting - African energy landscape" 
                className="rounded-2xl shadow-lg w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-light-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-poppins font-bold text-4xl text-primary-blue mb-4">Our Core Values</h2>
            <p className="text-xl text-gray-600">The principles that guide everything we do</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl shadow-sm">
                <h3 className="font-poppins font-bold text-xl text-primary-blue mb-4">{value.title}</h3>
                <p className="text-gray-700">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-20 bg-primary-blue text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-poppins font-bold text-4xl mb-4">Our Proven Results</h2>
            <p className="text-xl text-gray-200">Numbers that speak to our commitment to excellence</p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <div key={index} className="text-center">
                <div className="text-5xl font-bold text-accent-yellow mb-2">{achievement.metric}</div>
                <div className="text-gray-200">{achievement.description}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-poppins font-bold text-4xl text-primary-blue mb-6">
            Ready to Experience Reliable Power?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Join the hundreds of satisfied customers who have transformed their power challenges into success stories.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button size="lg" className="bg-accent-yellow text-primary-blue hover:bg-accent-yellow/90 font-semibold">
                Get Your Free Consultation
              </Button>
            </Link>
            <Link href="/portfolio">
              <Button size="lg" variant="outline" className="border-primary-blue text-primary-blue hover:bg-primary-blue hover:text-white">
                View Our Work
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
      <CookieConsent />
    </div>
  );
}

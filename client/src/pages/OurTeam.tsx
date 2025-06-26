import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { Button } from '../components/ui/button';
import { Link } from 'wouter';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import CookieConsent from '@/components/CookieConsent';
import SEO, { SEOConfigs } from '@/components/SEO';

const OurTeam: React.FC = () => {
  const leadership = [
    {
      name: "Chukwudi Osinachi",
      role: "Chief Executive Officer",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=compress&w=400&h=400&fit=crop",
      bio: "Visionary leader with 15+ years in renewable energy. Founded Osinachi Renewables to transform Nigeria's energy landscape.",
      expertise: ["Strategic Planning", "Business Development", "Energy Policy"],
      linkedin: "#"
    },
    {
      name: "Dr. Amina Hassan",
      role: "Chief Technical Officer",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?auto=compress&w=400&h=400&fit=crop",
      bio: "PhD in Electrical Engineering with expertise in solar technology and grid integration. Leads our technical innovation.",
      expertise: ["Solar Engineering", "Grid Integration", "R&D"],
      linkedin: "#"
    },
    {
      name: "Emeka Okonkwo",
      role: "Chief Operations Officer",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=compress&w=400&h=400&fit=crop",
      bio: "Operations expert with 12+ years managing large-scale energy projects across West Africa.",
      expertise: ["Project Management", "Operations", "Quality Control"],
      linkedin: "#"
    }
  ];

  const engineering = [
    {
      name: "Sarah Johnson",
      role: "Senior Solar Engineer",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=compress&w=400&h=400&fit=crop",
      bio: "Certified solar engineer specializing in residential and commercial installations.",
      expertise: ["Solar Design", "Installation", "Maintenance"]
    },
    {
      name: "Kemi Adebayo",
      role: "Electrical Engineer",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=compress&w=400&h=400&fit=crop",
      bio: "Expert in electrical systems integration and energy storage solutions.",
      expertise: ["Electrical Systems", "Battery Storage", "Grid Connection"]
    },
    {
      name: "David Chen",
      role: "Systems Engineer",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=compress&w=400&h=400&fit=crop",
      bio: "Specializes in smart grid technology and IoT-based monitoring systems.",
      expertise: ["Smart Grid", "IoT", "Monitoring Systems"]
    }
  ];

  const sales = [
    {
      name: "Fatima Al-Zahra",
      role: "Sales Director",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?auto=compress&w=400&h=400&fit=crop",
      bio: "Drives business growth through strategic partnerships and customer relationships.",
      expertise: ["Business Development", "Client Relations", "Market Strategy"]
    },
    {
      name: "Michael Okafor",
      role: "Senior Sales Consultant",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=compress&w=400&h=400&fit=crop",
      bio: "Expert in residential solar solutions with 8+ years of customer success.",
      expertise: ["Residential Sales", "Customer Success", "Product Knowledge"]
    }
  ];

  const support = [
    {
      name: "Grace Nwosu",
      role: "Customer Success Manager",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=compress&w=400&h=400&fit=crop",
      bio: "Ensures exceptional customer experience and post-installation support.",
      expertise: ["Customer Support", "Project Coordination", "Client Relations"]
    },
    {
      name: "Ahmed Ibrahim",
      role: "Technical Support Specialist",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=compress&w=400&h=400&fit=crop",
      bio: "Provides technical support and troubleshooting for all installed systems.",
      expertise: ["Technical Support", "Troubleshooting", "System Maintenance"]
    }
  ];

  return (
    <div className="min-h-screen">
      <SEO {...SEOConfigs.ourTeam} />
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-green-600 to-blue-600 text-white py-24">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="font-poppins font-bold text-4xl md:text-6xl mb-6">
              Meet Our Team
            </h1>
            <p className="text-xl md:text-2xl text-gray-200">
              Passionate professionals dedicated to powering Nigeria's sustainable energy future.
            </p>
          </div>
        </div>
      </section>

      {/* Team Overview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-poppins font-bold text-4xl text-primary-blue mb-4">Our Expert Team</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We are a diverse team of engineers, consultants, and energy experts committed to delivering 
              reliable, sustainable energy solutions across Nigeria.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8 mb-16">
            <div className="text-center">
              <div className="text-4xl font-bold text-green-600 mb-2">50+</div>
              <div className="text-gray-600">Team Members</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-green-600 mb-2">15+</div>
              <div className="text-gray-600">Years Combined Experience</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-green-600 mb-2">100+</div>
              <div className="text-gray-600">Projects Completed</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-green-600 mb-2">24/7</div>
              <div className="text-gray-600">Support Available</div>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-20 bg-light-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-poppins font-bold text-4xl text-primary-blue mb-4">Leadership Team</h2>
            <p className="text-xl text-gray-600">Meet the visionaries driving our mission forward</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {leadership.map((member, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="relative">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-full h-64 object-cover"
                  />
                  <div className="absolute top-4 right-4">
                    <Link href={member.linkedin}>
                      <Button size="sm" variant="secondary" className="bg-white/90 hover:bg-white">
                        LinkedIn
                      </Button>
                    </Link>
                  </div>
                </div>
                <CardHeader>
                  <CardTitle className="text-xl text-primary-blue">{member.name}</CardTitle>
                  <p className="text-green-600 font-semibold">{member.role}</p>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">{member.bio}</p>
                  <div className="flex flex-wrap gap-2">
                    {member.expertise.map((skill, skillIndex) => (
                      <Badge key={skillIndex} variant="outline" className="text-xs">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Engineering Team */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-poppins font-bold text-4xl text-primary-blue mb-4">Engineering Excellence</h2>
            <p className="text-xl text-gray-600">Our technical experts ensure quality and innovation</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {engineering.map((member, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
                <img 
                  src={member.image} 
                  alt={member.name}
                  className="w-full h-48 object-cover"
                />
                <CardHeader>
                  <CardTitle className="text-lg text-primary-blue">{member.name}</CardTitle>
                  <p className="text-green-600 font-semibold">{member.role}</p>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">{member.bio}</p>
                  <div className="flex flex-wrap gap-2">
                    {member.expertise.map((skill, skillIndex) => (
                      <Badge key={skillIndex} variant="outline" className="text-xs">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Sales & Support Team */}
      <section className="py-20 bg-light-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16">
            {/* Sales Team */}
            <div>
              <div className="text-center mb-12">
                <h2 className="font-poppins font-bold text-3xl text-primary-blue mb-4">Sales & Business Development</h2>
                <p className="text-gray-600">Building lasting partnerships and driving growth</p>
              </div>

              <div className="space-y-6">
                {sales.map((member, index) => (
                  <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
                    <div className="flex items-center p-6">
                      <img 
                        src={member.image} 
                        alt={member.name}
                        className="w-20 h-20 rounded-full object-cover mr-6"
                      />
                      <div className="flex-1">
                        <h3 className="font-semibold text-primary-blue">{member.name}</h3>
                        <p className="text-green-600 font-medium">{member.role}</p>
                        <p className="text-gray-600 text-sm mt-2">{member.bio}</p>
                        <div className="flex flex-wrap gap-2 mt-3">
                          {member.expertise.map((skill, skillIndex) => (
                            <Badge key={skillIndex} variant="outline" className="text-xs">
                              {skill}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </div>

            {/* Support Team */}
            <div>
              <div className="text-center mb-12">
                <h2 className="font-poppins font-bold text-3xl text-primary-blue mb-4">Customer Support</h2>
                <p className="text-gray-600">Ensuring exceptional customer experience</p>
              </div>

              <div className="space-y-6">
                {support.map((member, index) => (
                  <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
                    <div className="flex items-center p-6">
                      <img 
                        src={member.image} 
                        alt={member.name}
                        className="w-20 h-20 rounded-full object-cover mr-6"
                      />
                      <div className="flex-1">
                        <h3 className="font-semibold text-primary-blue">{member.name}</h3>
                        <p className="text-green-600 font-medium">{member.role}</p>
                        <p className="text-gray-600 text-sm mt-2">{member.bio}</p>
                        <div className="flex flex-wrap gap-2 mt-3">
                          {member.expertise.map((skill, skillIndex) => (
                            <Badge key={skillIndex} variant="outline" className="text-xs">
                              {skill}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Join Our Team */}
      <section className="py-20 bg-primary-blue text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-poppins font-bold text-4xl mb-6">
            Join Our Mission
          </h2>
          <p className="text-xl text-gray-200 mb-8">
            We're always looking for passionate individuals who share our vision for a sustainable energy future.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/careers">
              <Button size="lg" className="bg-accent-yellow text-primary-blue hover:bg-accent-yellow/90 font-semibold">
                View Open Positions
              </Button>
            </Link>
            <Link href="/contact">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary-blue">
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
      <CookieConsent />
    </div>
  );
};

export default OurTeam; 
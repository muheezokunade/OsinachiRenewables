import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Textarea } from '../components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../components/ui/select';
import { Link } from 'wouter';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import CookieConsent from '@/components/CookieConsent';

const Careers: React.FC = () => {
  const [selectedJob, setSelectedJob] = useState<string | null>(null);

  const openPositions = [
    {
      id: "senior-solar-engineer",
      title: "Senior Solar Engineer",
      department: "Engineering",
      location: "Lagos, Nigeria",
      type: "Full-time",
      experience: "5+ years",
      description: "Lead solar system design and installation projects for residential and commercial clients.",
      responsibilities: [
        "Design and optimize solar PV systems",
        "Lead installation teams on complex projects",
        "Conduct site assessments and feasibility studies",
        "Provide technical support to sales team",
        "Ensure compliance with industry standards"
      ],
      requirements: [
        "Bachelor's degree in Electrical Engineering or related field",
        "5+ years experience in solar system design",
        "Certification in solar installation preferred",
        "Strong project management skills",
        "Excellent communication abilities"
      ]
    },
    {
      id: "sales-consultant",
      title: "Sales Consultant",
      department: "Sales",
      location: "Abuja, Nigeria",
      type: "Full-time",
      experience: "3+ years",
      description: "Drive sales growth by building relationships with residential and commercial clients.",
      responsibilities: [
        "Generate and qualify sales leads",
        "Conduct product presentations and demonstrations",
        "Prepare and present proposals to clients",
        "Negotiate contracts and close deals",
        "Maintain customer relationships"
      ],
      requirements: [
        "Bachelor's degree in Business or related field",
        "3+ years in B2B sales experience",
        "Knowledge of renewable energy industry",
        "Strong negotiation and presentation skills",
        "Self-motivated and results-driven"
      ]
    },
    {
      id: "electrical-technician",
      title: "Electrical Technician",
      department: "Operations",
      location: "Port Harcourt, Nigeria",
      type: "Full-time",
      experience: "2+ years",
      description: "Install and maintain electrical systems for solar and hybrid power solutions.",
      responsibilities: [
        "Install solar panels and electrical components",
        "Perform system maintenance and repairs",
        "Troubleshoot electrical issues",
        "Ensure safety compliance on job sites",
        "Document installation procedures"
      ],
      requirements: [
        "Technical certification in electrical work",
        "2+ years experience in electrical installation",
        "Knowledge of solar systems preferred",
        "Strong attention to detail",
        "Ability to work in outdoor conditions"
      ]
    },
    {
      id: "customer-success-manager",
      title: "Customer Success Manager",
      department: "Support",
      location: "Lagos, Nigeria",
      type: "Full-time",
      experience: "3+ years",
      description: "Ensure customer satisfaction and retention through exceptional service delivery.",
      responsibilities: [
        "Manage customer relationships post-sale",
        "Coordinate installation and maintenance schedules",
        "Handle customer inquiries and complaints",
        "Conduct customer satisfaction surveys",
        "Identify upsell opportunities"
      ],
      requirements: [
        "Bachelor's degree in Business or related field",
        "3+ years in customer service or account management",
        "Excellent communication and problem-solving skills",
        "Experience with CRM systems",
        "Ability to work under pressure"
      ]
    }
  ];

  const benefits = [
    {
      title: "Health & Wellness",
      description: "Comprehensive health insurance, dental coverage, and wellness programs",
      icon: "🏥"
    },
    {
      title: "Professional Development",
      description: "Training programs, certifications, and career advancement opportunities",
      icon: "📚"
    },
    {
      title: "Flexible Work",
      description: "Hybrid work options and flexible scheduling to support work-life balance",
      icon: "🏠"
    },
    {
      title: "Competitive Pay",
      description: "Attractive salary packages with performance-based bonuses",
      icon: "💰"
    },
    {
      title: "Team Events",
      description: "Regular team building activities and company celebrations",
      icon: "🎉"
    },
    {
      title: "Impact",
      description: "Contribute to Nigeria's sustainable energy transformation",
      icon: "🌱"
    }
  ];

  const culture = [
    {
      title: "Innovation",
      description: "We encourage creative thinking and embrace new technologies to solve energy challenges."
    },
    {
      title: "Collaboration",
      description: "Teamwork is at the heart of everything we do, fostering a supportive and inclusive environment."
    },
    {
      title: "Excellence",
      description: "We maintain the highest standards of quality and professionalism in all our work."
    },
    {
      title: "Sustainability",
      description: "Our commitment to environmental stewardship guides every decision we make."
    }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-green-600 to-blue-600 text-white py-24">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="font-poppins font-bold text-4xl md:text-6xl mb-6">
              Join Our Mission
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 mb-8">
              Help us power Nigeria's sustainable energy future. Be part of a team that's making a real difference.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-accent-yellow text-primary-blue hover:bg-accent-yellow/90 font-semibold">
                View Open Positions
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary-blue">
                Learn About Culture
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Why Work With Us */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-poppins font-bold text-4xl text-primary-blue mb-4">Why Work With Us?</h2>
            <p className="text-xl text-gray-600">Join a team that's passionate about making a difference</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="text-4xl mb-4">{benefit.icon}</div>
                  <CardTitle className="text-primary-blue">{benefit.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Company Culture */}
      <section className="py-20 bg-light-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-poppins font-bold text-4xl text-primary-blue mb-4">Our Culture</h2>
            <p className="text-xl text-gray-600">The values that drive our success</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {culture.map((value, index) => (
              <Card key={index} className="border-green-200">
                <CardHeader>
                  <CardTitle className="text-green-700">{value.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-poppins font-bold text-4xl text-primary-blue mb-4">Open Positions</h2>
            <p className="text-xl text-gray-600">Find your perfect role in our growing team</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Job Listings */}
            <div className="space-y-6">
              {openPositions.map((job) => (
                <Card 
                  key={job.id} 
                  className={`cursor-pointer transition-all hover:shadow-lg ${
                    selectedJob === job.id ? 'ring-2 ring-green-500' : ''
                  }`}
                  onClick={() => setSelectedJob(job.id)}
                >
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <div>
                        <CardTitle className="text-primary-blue">{job.title}</CardTitle>
                        <p className="text-green-600 font-medium">{job.department}</p>
                      </div>
                      <Badge variant="outline" className="text-green-600 border-green-600">
                        {job.type}
                      </Badge>
                    </div>
                    <div className="flex flex-wrap gap-2 mt-2">
                      <Badge variant="secondary" className="text-xs">
                        📍 {job.location}
                      </Badge>
                      <Badge variant="secondary" className="text-xs">
                        ⏱️ {job.experience}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 text-sm">{job.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Job Details */}
            <div className="lg:sticky lg:top-8">
              {selectedJob ? (
                <Card className="h-fit">
                  <CardHeader>
                    <CardTitle className="text-primary-blue">
                      {openPositions.find(job => job.id === selectedJob)?.title}
                    </CardTitle>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="outline" className="text-green-600 border-green-600">
                        {openPositions.find(job => job.id === selectedJob)?.type}
                      </Badge>
                      <Badge variant="secondary">
                        {openPositions.find(job => job.id === selectedJob)?.location}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-2">Responsibilities:</h4>
                      <ul className="list-disc list-inside space-y-1 text-gray-600">
                        {openPositions.find(job => job.id === selectedJob)?.responsibilities.map((resp, index) => (
                          <li key={index}>{resp}</li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-2">Requirements:</h4>
                      <ul className="list-disc list-inside space-y-1 text-gray-600">
                        {openPositions.find(job => job.id === selectedJob)?.requirements.map((req, index) => (
                          <li key={index}>{req}</li>
                        ))}
                      </ul>
                    </div>
                    <Button className="w-full bg-green-600 hover:bg-green-700">
                      Apply for this Position
                    </Button>
                  </CardContent>
                </Card>
              ) : (
                <Card className="h-fit">
                  <CardContent className="text-center py-12">
                    <div className="text-4xl mb-4">👀</div>
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">Select a Position</h3>
                    <p className="text-gray-600">Choose a job from the list to view details and apply</p>
                  </CardContent>
                </Card>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section className="py-20 bg-light-gray">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-poppins font-bold text-4xl text-primary-blue mb-4">Apply Now</h2>
            <p className="text-xl text-gray-600">Ready to join our team? Submit your application below</p>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Job Application Form</CardTitle>
            </CardHeader>
            <CardContent>
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">First Name</label>
                    <Input placeholder="Enter your first name" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Last Name</label>
                    <Input placeholder="Enter your last name" />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                    <Input type="email" placeholder="Enter your email address" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Phone</label>
                    <Input placeholder="Enter your phone number" />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Position Applied For</label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select a position" />
                    </SelectTrigger>
                    <SelectContent>
                      {openPositions.map((job) => (
                        <SelectItem key={job.id} value={job.id}>
                          {job.title}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Cover Letter</label>
                  <Textarea 
                    placeholder="Tell us why you're interested in this position and what makes you a great fit..."
                    rows={6}
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Resume/CV</label>
                  <Input type="file" accept=".pdf,.doc,.docx" />
                  <p className="text-sm text-gray-500 mt-1">Accepted formats: PDF, DOC, DOCX (Max 5MB)</p>
                </div>

                <div className="flex justify-center">
                  <Button type="submit" className="bg-green-600 hover:bg-green-700 px-8">
                    Submit Application
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary-blue text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-poppins font-bold text-4xl mb-6">
            Ready to Make a Difference?
          </h2>
          <p className="text-xl text-gray-200 mb-8">
            Join our team and help us build a sustainable energy future for Nigeria.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button size="lg" className="bg-accent-yellow text-primary-blue hover:bg-accent-yellow/90 font-semibold">
                Contact Us
              </Button>
            </Link>
            <Link href="/ourteam">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary-blue">
                Meet Our Team
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

export default Careers; 
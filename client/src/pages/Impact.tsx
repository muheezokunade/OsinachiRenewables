import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { Button } from '../components/ui/button';
import { Progress } from '../components/ui/progress';
import { Link } from 'wouter';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import CookieConsent from '@/components/CookieConsent';
import SEO, { SEOConfigs } from '@/components/SEO';

const Impact: React.FC = () => {
  const environmentalStats = [
    {
      metric: "10,000+",
      label: "Tons of CO2 Reduced",
      description: "Equivalent to planting 500,000 trees",
      icon: "🌱"
    },
    {
      metric: "15,000",
      label: "MWh Clean Energy Generated",
      description: "Powering thousands of homes and businesses",
      icon: "⚡"
    },
    {
      metric: "500+",
      label: "Homes Powered",
      description: "Providing reliable electricity to families",
      icon: "🏠"
    },
    {
      metric: "25+",
      label: "Communities Impacted",
      description: "Bringing light to rural areas",
      icon: "🤝"
    }
  ];

  const socialImpact = [
    {
      title: "Rural Electrification",
      description: "Bringing reliable electricity to underserved rural communities across Nigeria",
      impact: "500+ homes electrified",
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=compress&w=400&h=250&fit=crop"
    },
    {
      title: "Job Creation",
      description: "Creating employment opportunities in the renewable energy sector",
      impact: "50+ direct jobs created",
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=compress&w=400&h=250&fit=crop"
    },
    {
      title: "Skills Development",
      description: "Training local technicians and engineers in solar technology",
      impact: "100+ people trained",
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=compress&w=400&h=250&fit=crop"
    },
    {
      title: "Community Partnerships",
      description: "Collaborating with local communities for sustainable development",
      impact: "25+ partnerships formed",
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=compress&w=400&h=250&fit=crop"
    }
  ];

  const caseStudies = [
    {
      title: "Lagos Manufacturing Facility",
      location: "Lagos, Nigeria",
      challenge: "High energy costs and unreliable power supply affecting production",
      solution: "Installed 500kW solar system with battery backup",
      results: [
        "60% reduction in energy costs",
        "99.9% uptime guarantee",
        "2,000 tons CO2 reduction annually",
        "ROI achieved in 3.5 years"
      ],
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=compress&w=400&h=250&fit=crop"
    },
    {
      title: "Rural Community Solar Project",
      location: "Kano State, Nigeria",
      challenge: "No access to electricity in remote village",
      solution: "Community solar microgrid serving 200 households",
      results: [
        "200 homes electrified",
        "Local business growth",
        "Improved education access",
        "Enhanced healthcare services"
      ],
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=compress&w=400&h=250&fit=crop"
    },
    {
      title: "Residential Estate Transformation",
      location: "Abuja, Nigeria",
      challenge: "High electricity bills and frequent power outages",
      solution: "Comprehensive solar installation for 50 homes",
      results: [
        "80% reduction in electricity bills",
        "24/7 reliable power supply",
        "Increased property values",
        "Community sustainability model"
      ],
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=compress&w=400&h=250&fit=crop"
    }
  ];

  const sustainabilityGoals = [
    {
      goal: "Carbon Neutrality",
      target: "2030",
      progress: 75,
      description: "Achieve carbon neutrality across all operations"
    },
    {
      goal: "100% Renewable Energy",
      target: "2025",
      progress: 90,
      description: "Power all facilities with renewable energy"
    },
    {
      goal: "Zero Waste",
      target: "2026",
      progress: 60,
      description: "Implement zero-waste practices across operations"
    },
    {
      goal: "Community Impact",
      target: "Ongoing",
      progress: 85,
      description: "Electrify 1,000+ rural communities"
    }
  ];

  return (
    <div className="min-h-screen">
      <SEO {...SEOConfigs.impact} />
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-green-600 to-blue-600 text-white py-24">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="font-poppins font-bold text-4xl md:text-6xl mb-6">
              Our Impact
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 mb-8">
              Driving positive change through sustainable energy solutions and community development.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-accent-yellow text-primary-blue hover:bg-accent-yellow/90 font-semibold">
                View Case Studies
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary-blue">
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Environmental Impact Stats */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-poppins font-bold text-4xl text-primary-blue mb-4">Environmental Impact</h2>
            <p className="text-xl text-gray-600">Our commitment to reducing carbon emissions and promoting clean energy</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {environmentalStats.map((stat, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="text-4xl mb-4">{stat.icon}</div>
                  <CardTitle className="text-3xl font-bold text-green-600">{stat.metric}</CardTitle>
                  <p className="text-lg font-semibold text-primary-blue">{stat.label}</p>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{stat.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Social Impact */}
      <section className="py-20 bg-light-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-poppins font-bold text-4xl text-primary-blue mb-4">Social Impact</h2>
            <p className="text-xl text-gray-600">Creating positive change in communities across Nigeria</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {socialImpact.map((impact, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
                <img 
                  src={impact.image} 
                  alt={impact.title}
                  className="w-full h-48 object-cover"
                />
                <CardHeader>
                  <CardTitle className="text-primary-blue">{impact.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">{impact.description}</p>
                  <Badge className="bg-green-600 text-white">{impact.impact}</Badge>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-poppins font-bold text-4xl text-primary-blue mb-4">Success Stories</h2>
            <p className="text-xl text-gray-600">Real-world examples of our impact on businesses and communities</p>
          </div>

          <div className="space-y-12">
            {caseStudies.map((study, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="grid lg:grid-cols-2 gap-0">
                  <img 
                    src={study.image} 
                    alt={study.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="p-8">
                    <div className="flex items-center gap-2 mb-4">
                      <Badge variant="outline" className="text-green-600 border-green-600">
                        Case Study
                      </Badge>
                      <span className="text-gray-500">{study.location}</span>
                    </div>
                    <h3 className="text-2xl font-bold text-primary-blue mb-4">{study.title}</h3>
                    
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold text-gray-800 mb-2">Challenge:</h4>
                        <p className="text-gray-600">{study.challenge}</p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-800 mb-2">Solution:</h4>
                        <p className="text-gray-600">{study.solution}</p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-800 mb-2">Results:</h4>
                        <ul className="list-disc list-inside space-y-1 text-gray-600">
                          {study.results.map((result, resultIndex) => (
                            <li key={resultIndex}>{result}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Sustainability Goals */}
      <section className="py-20 bg-light-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-poppins font-bold text-4xl text-primary-blue mb-4">Sustainability Goals</h2>
            <p className="text-xl text-gray-600">Our roadmap to creating a sustainable future</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {sustainabilityGoals.map((goal, index) => (
              <Card key={index} className="border-green-200">
                <CardHeader>
                  <div className="flex justify-between items-start mb-4">
                    <CardTitle className="text-green-700">{goal.goal}</CardTitle>
                    <Badge variant="outline" className="text-green-600 border-green-600">
                      {goal.target}
                    </Badge>
                  </div>
                  <p className="text-gray-600">{goal.description}</p>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">Progress</span>
                      <span className="text-green-600 font-semibold">{goal.progress}%</span>
                    </div>
                    <Progress value={goal.progress} className="h-2" />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Calculator */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-poppins font-bold text-4xl text-primary-blue mb-4">Calculate Your Impact</h2>
            <p className="text-xl text-gray-600">See how switching to solar can reduce your carbon footprint</p>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Solar Impact Calculator</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Current Monthly Electricity Bill (₦)</label>
                    <input 
                      type="number" 
                      placeholder="Enter amount"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">System Size (kW)</label>
                    <select className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500">
                      <option>Select system size</option>
                      <option>3 kW (Small Home)</option>
                      <option>5 kW (Medium Home)</option>
                      <option>10 kW (Large Home)</option>
                      <option>20 kW (Small Business)</option>
                      <option>50 kW (Medium Business)</option>
                    </select>
                  </div>
                  <Button className="w-full bg-green-600 hover:bg-green-700">
                    Calculate Impact
                  </Button>
                </div>
                <div className="bg-green-50 p-6 rounded-lg">
                  <h3 className="font-semibold text-green-800 mb-4">Your Potential Impact:</h3>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-gray-600">CO2 Reduction:</span>
                      <span className="font-semibold text-green-600">-- tons/year</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Energy Savings:</span>
                      <span className="font-semibold text-green-600">-- ₦/year</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Trees Equivalent:</span>
                      <span className="font-semibold text-green-600">-- trees</span>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary-blue text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-poppins font-bold text-4xl mb-6">
            Join Us in Making a Difference
          </h2>
          <p className="text-xl text-gray-200 mb-8">
            Be part of the solution. Switch to renewable energy and help us create a sustainable future for Nigeria.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button size="lg" className="bg-accent-yellow text-primary-blue hover:bg-accent-yellow/90 font-semibold">
                Get Started
              </Button>
            </Link>
            <Link href="/portfolio">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary-blue">
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
};

export default Impact; 
import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { Button } from '../components/ui/button';
import { Progress } from '../components/ui/progress';
import { Input } from '../components/ui/input';
import { Label } from '../components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../components/ui/select';
import { Link } from 'wouter';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import CookieConsent from '@/components/CookieConsent';
import SEO, { SEOConfigs } from '@/components/SEO';
import { Calculator, TrendingUp, Leaf, Zap, DollarSign } from 'lucide-react';

const Impact: React.FC = () => {
  // Impact Calculator State
  const [calculatorData, setCalculatorData] = useState({
    monthlyBill: '',
    systemSize: '',
    location: 'Lagos'
  });

  const [calculatorResults, setCalculatorResults] = useState({
    co2Reduction: 0,
    energySavings: 0,
    treesEquivalent: 0,
    annualSavings: 0,
    paybackPeriod: 0,
    isCalculated: false
  });

  // System size options with their specifications
  const systemSizes = [
    { value: '3', label: '3 kW (Small Home)', annualGeneration: 4380, cost: 1500000 },
    { value: '5', label: '5 kW (Medium Home)', annualGeneration: 7300, cost: 2500000 },
    { value: '10', label: '10 kW (Large Home)', annualGeneration: 14600, cost: 4500000 },
    { value: '20', label: '20 kW (Small Business)', annualGeneration: 29200, cost: 8500000 },
    { value: '50', label: '50 kW (Medium Business)', annualGeneration: 73000, cost: 20000000 }
  ];

  // Calculate impact based on inputs
  const calculateImpact = () => {
    console.log('Calculate button clicked', calculatorData);
    
    if (!calculatorData.monthlyBill || !calculatorData.systemSize) {
      console.log('Missing required data');
      return;
    }

    const monthlyBill = parseFloat(calculatorData.monthlyBill);
    const systemSize = systemSizes.find(size => size.value === calculatorData.systemSize);
    
    if (!systemSize) {
      console.log('System size not found');
      return;
    }

    console.log('Calculating with:', { monthlyBill, systemSize });

    // Calculations based on Nigerian energy context
    const annualBill = monthlyBill * 12;
    const annualGeneration = systemSize.annualGeneration; // kWh
    const systemCost = systemSize.cost;
    
    // CO2 reduction (Nigerian grid emits ~0.5 kg CO2/kWh)
    const co2Reduction = (annualGeneration * 0.5) / 1000; // tons per year
    
    // Energy savings (assuming 80% of generated energy offsets grid consumption)
    const energySavings = annualGeneration * 0.8; // kWh
    
    // Calculate annual savings based on current electricity rate
    // Assuming average Nigerian electricity rate of ₦50/kWh
    const electricityRate = 50; // ₦ per kWh
    const annualSavings = energySavings * electricityRate;
    
    // Trees equivalent (1 tree absorbs ~22 kg CO2 per year)
    const treesEquivalent = Math.round(co2Reduction * 1000 / 22);
    
    // Payback period
    const paybackPeriod = systemCost / annualSavings;

    console.log('Calculation results:', {
      co2Reduction,
      energySavings,
      annualSavings,
      treesEquivalent,
      paybackPeriod
    });

    setCalculatorResults({
      co2Reduction: Math.round(co2Reduction * 10) / 10,
      energySavings: Math.round(energySavings),
      treesEquivalent,
      annualSavings: Math.round(annualSavings),
      paybackPeriod: Math.round(paybackPeriod * 10) / 10,
      isCalculated: true
    });
  };

  // Reset calculator
  const resetCalculator = () => {
    setCalculatorData({
      monthlyBill: '',
      systemSize: '',
      location: 'Lagos'
    });
    setCalculatorResults({
      co2Reduction: 0,
      energySavings: 0,
      treesEquivalent: 0,
      annualSavings: 0,
      paybackPeriod: 0,
      isCalculated: false
    });
  };

  // Environmental Stats
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
              <Button size="lg" variant="outline" className="border-primary-blue text-primary-blue hover:bg-primary-blue hover:text-white">
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
                      value={calculatorData.monthlyBill}
                      onChange={(e) => setCalculatorData(prev => ({ ...prev, monthlyBill: e.target.value }))}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">System Size</label>
                    <select 
                      value={calculatorData.systemSize}
                      onChange={(e) => setCalculatorData(prev => ({ ...prev, systemSize: e.target.value }))}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                    >
                      <option value="">Select system size</option>
                      {systemSizes.map((size) => (
                        <option key={size.value} value={size.value}>
                          {size.label}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Location</label>
                    <select 
                      value={calculatorData.location}
                      onChange={(e) => setCalculatorData(prev => ({ ...prev, location: e.target.value }))}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                    >
                      <option value="Lagos">Lagos</option>
                      <option value="Abuja">Abuja</option>
                      <option value="Kano">Kano</option>
                      <option value="Port Harcourt">Port Harcourt</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                  <div className="flex gap-2">
                    <Button 
                      onClick={calculateImpact}
                      className="flex-1 bg-green-600 hover:bg-green-700"
                      disabled={!calculatorData.monthlyBill || !calculatorData.systemSize}
                    >
                      Calculate Impact
                    </Button>
                    <Button 
                      onClick={resetCalculator}
                      variant="outline"
                      className="px-4"
                    >
                      Reset
                    </Button>
                  </div>
                </div>
                <div className="bg-green-50 p-6 rounded-lg">
                  <h3 className="font-semibold text-green-800 mb-4">Your Potential Impact:</h3>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-gray-600">CO2 Reduction:</span>
                      <span className="font-semibold text-green-600">
                        {calculatorResults.isCalculated ? `${calculatorResults.co2Reduction} tons/year` : '-- tons/year'}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Energy Savings:</span>
                      <span className="font-semibold text-green-600">
                        {calculatorResults.isCalculated ? `${calculatorResults.energySavings.toLocaleString()} kWh/year` : '-- kWh/year'}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Annual Savings:</span>
                      <span className="font-semibold text-green-600">
                        {calculatorResults.isCalculated ? `₦${calculatorResults.annualSavings.toLocaleString()}/year` : '₦--/year'}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Trees Equivalent:</span>
                      <span className="font-semibold text-green-600">
                        {calculatorResults.isCalculated ? `${calculatorResults.treesEquivalent} trees` : '-- trees'}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Payback Period:</span>
                      <span className="font-semibold text-green-600">
                        {calculatorResults.isCalculated ? `${calculatorResults.paybackPeriod} years` : '-- years'}
                      </span>
                    </div>
                  </div>
                  {calculatorResults.isCalculated && (
                    <div className="mt-4 p-3 bg-green-100 rounded-md">
                      <p className="text-sm text-green-800">
                        💡 <strong>Tip:</strong> These calculations are estimates based on average Nigerian conditions. 
                        Contact us for a detailed assessment tailored to your specific needs.
                      </p>
                    </div>
                  )}
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
              <Button size="lg" variant="outline" className="border-primary-blue text-primary-blue hover:bg-primary-blue hover:text-white">
                Get Started Today
              </Button>
            </Link>
            <Link href="/portfolio">
              <Button size="lg" variant="outline" className="border-primary-blue text-primary-blue hover:bg-primary-blue hover:text-white">
                View Case Studies
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
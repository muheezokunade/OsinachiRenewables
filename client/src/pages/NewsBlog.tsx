import React, { useState } from 'react';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Link } from 'wouter';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import CookieConsent from '@/components/CookieConsent';
import SEO, { SEOConfigs } from '@/components/SEO';

const NewsBlog: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const categories = [
    { id: 'all', name: 'All Posts', count: 12 },
    { id: 'company', name: 'Company News', count: 4 },
    { id: 'technology', name: 'Technology', count: 3 },
    { id: 'sustainability', name: 'Sustainability', count: 3 },
    { id: 'industry', name: 'Industry Insights', count: 2 },
  ];

  const featuredArticle = {
    id: 'solar-adoption-nigeria-2024',
    title: 'Solar Energy Adoption in Nigeria: A 2024 Outlook',
    excerpt:
      'Discover the latest trends in solar energy adoption across Nigeria, including government initiatives, market growth, and the role of companies like Osinachi Renewables in driving the transition to clean energy.',
    author: 'Chukwudi Osinachi',
    date: 'March 15, 2024',
    category: 'Industry Insights',
    readTime: '5 min read',
    image:
      'https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=compress&w=800&h=400&fit=crop',
    featured: true,
  };

  const articles = [
    {
      id: 'new-office-lagos',
      title: 'Osinachi Renewables Opens New Office in Lagos',
      excerpt:
        "We're excited to announce the opening of our new state-of-the-art office in Lagos, expanding our presence and service capabilities in Nigeria's commercial hub.",
      author: 'Marketing Team',
      date: 'March 10, 2024',
      category: 'Company News',
      readTime: '3 min read',
      image:
        'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=compress&w=400&h=250&fit=crop',
    },
    {
      id: 'battery-storage-advances',
      title: 'Latest Advances in Battery Storage Technology',
      excerpt:
        'Explore the cutting-edge developments in battery storage technology that are revolutionizing how we store and utilize solar energy in residential and commercial applications.',
      author: 'Dr. Amina Hassan',
      date: 'March 8, 2024',
      category: 'Technology',
      readTime: '7 min read',
      image:
        'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=compress&w=400&h=250&fit=crop',
    },
    {
      id: 'carbon-footprint-reduction',
      title: 'How Solar Energy Reduces Your Carbon Footprint',
      excerpt:
        'Learn about the environmental impact of switching to solar energy and how it contributes to reducing carbon emissions and combating climate change.',
      author: 'Environmental Team',
      date: 'March 5, 2024',
      category: 'Sustainability',
      readTime: '4 min read',
      image:
        'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=compress&w=400&h=250&fit=crop',
    },
    {
      id: 'government-incentives-2024',
      title: 'Government Incentives for Solar Installation in 2024',
      excerpt:
        'Stay updated on the latest government incentives, tax benefits, and support programs available for solar energy adoption in Nigeria this year.',
      author: 'Policy Team',
      date: 'March 1, 2024',
      category: 'Industry Insights',
      readTime: '6 min read',
      image:
        'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=compress&w=400&h=250&fit=crop',
    },
    {
      id: 'team-expansion-announcement',
      title: 'Osinachi Renewables Expands Engineering Team',
      excerpt:
        "We're proud to announce the addition of five new senior engineers to our team, strengthening our technical capabilities and project delivery capacity.",
      author: 'HR Team',
      date: 'February 28, 2024',
      category: 'Company News',
      readTime: '2 min read',
      image:
        'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=compress&w=400&h=250&fit=crop',
    },
    {
      id: 'smart-grid-technology',
      title: 'The Future of Smart Grid Technology in Nigeria',
      excerpt:
        "Discover how smart grid technology is transforming Nigeria's energy infrastructure and enabling more efficient, reliable, and sustainable power distribution.",
      author: 'David Chen',
      date: 'February 25, 2024',
      category: 'Technology',
      readTime: '8 min read',
      image:
        'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=compress&w=400&h=250&fit=crop',
    },
    {
      id: 'community-solar-projects',
      title: 'Community Solar Projects: Powering Rural Nigeria',
      excerpt:
        'Learn about our community solar initiatives that are bringing reliable electricity to rural communities and improving quality of life across Nigeria.',
      author: 'Community Team',
      date: 'February 20, 2024',
      category: 'Sustainability',
      readTime: '5 min read',
      image:
        'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=compress&w=400&h=250&fit=crop',
    },
    {
      id: 'iso-certification-achieved',
      title: 'Osinachi Renewables Achieves ISO 9001:2015 Certification',
      excerpt:
        "We're proud to announce that Osinachi Renewables has successfully achieved ISO 9001:2015 certification, demonstrating our commitment to quality management.",
      author: 'Quality Team',
      date: 'February 15, 2024',
      category: 'Company News',
      readTime: '3 min read',
      image:
        'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=compress&w=400&h=250&fit=crop',
    },
    {
      id: 'energy-storage-solutions',
      title: 'Energy Storage Solutions for Commercial Applications',
      excerpt:
        'Explore the latest energy storage solutions designed specifically for commercial and industrial applications, helping businesses optimize their energy usage.',
      author: 'Sarah Johnson',
      date: 'February 10, 2024',
      category: 'Technology',
      readTime: '6 min read',
      image:
        'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=compress&w=400&h=250&fit=crop',
    },
    {
      id: 'renewable-energy-trends',
      title: "Global Renewable Energy Trends: What's Next for Nigeria?",
      excerpt:
        "Stay ahead of the curve with insights into global renewable energy trends and their implications for Nigeria's energy sector and market opportunities.",
      author: 'Research Team',
      date: 'February 5, 2024',
      category: 'Industry Insights',
      readTime: '7 min read',
      image:
        'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=compress&w=400&h=250&fit=crop',
    },
    {
      id: 'sustainable-business-practices',
      title: 'Sustainable Business Practices: Beyond Solar Installation',
      excerpt:
        'Discover how businesses can implement comprehensive sustainable practices beyond solar energy, creating a holistic approach to environmental responsibility.',
      author: 'Sustainability Team',
      date: 'February 1, 2024',
      category: 'Sustainability',
      readTime: '5 min read',
      image:
        'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=compress&w=400&h=250&fit=crop',
    },
    {
      id: 'customer-success-story',
      title: 'Customer Success Story: Manufacturing Facility Transformation',
      excerpt:
        'Read about how we helped a major manufacturing facility reduce energy costs by 60% through our comprehensive solar and energy management solution.',
      author: 'Customer Success Team',
      date: 'January 28, 2024',
      category: 'Company News',
      readTime: '4 min read',
      image:
        'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=compress&w=400&h=250&fit=crop',
    },
  ];

  const filteredArticles =
    selectedCategory === 'all'
      ? articles
      : articles.filter(article => {
          const categoryMap: { [key: string]: string } = {
            company: 'Company News',
            technology: 'Technology',
            sustainability: 'Sustainability',
            industry: 'Industry Insights',
          };
          return article.category === categoryMap[selectedCategory];
        });

  return (
    <div className='min-h-screen'>
      <SEO {...SEOConfigs.newsBlog} />
      <Navigation />

      {/* Hero Section */}
      <section className='relative bg-gradient-to-r from-green-600 to-blue-600 text-white py-24'>
        <div className='absolute inset-0 bg-black/20'></div>
        <div className='relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='max-w-3xl'>
            <h1 className='font-poppins font-bold text-4xl md:text-6xl mb-6'>
              News & Blog
            </h1>
            <p className='text-xl md:text-2xl text-gray-200 mb-8'>
              Stay updated with the latest insights, company news, and industry
              trends in renewable energy.
            </p>
            <div className='flex flex-col sm:flex-row gap-4'>
              <Button
                size='lg'
                className='bg-accent-yellow text-primary-blue hover:bg-accent-yellow/90 font-semibold'
              >
                Subscribe to Newsletter
              </Button>
              <Link href='/portfolio'>
                <Button
                  size='lg'
                  className='bg-primary-blue text-white hover:bg-primary-blue/90 font-semibold'
                >
                  View Our Projects
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Article */}
      <section className='py-16 bg-white'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='text-center mb-12'>
            <h2 className='font-poppins font-bold text-3xl text-primary-blue mb-4'>
              Featured Article
            </h2>
          </div>

          <Card className='overflow-hidden hover:shadow-lg transition-shadow'>
            <div className='grid lg:grid-cols-2 gap-0'>
              <div className='relative'>
                <img
                  src={featuredArticle.image}
                  alt={featuredArticle.title}
                  className='w-full h-full object-cover'
                />
                <div className='absolute top-4 left-4'>
                  <Badge className='bg-green-600 text-white'>Featured</Badge>
                </div>
              </div>
              <div className='p-8 flex flex-col justify-center'>
                <div className='flex items-center gap-4 mb-4'>
                  <Badge
                    variant='outline'
                    className='text-green-600 border-green-600'
                  >
                    {featuredArticle.category}
                  </Badge>
                  <span className='text-gray-500 text-sm'>
                    {featuredArticle.readTime}
                  </span>
                </div>
                <h3 className='text-2xl font-bold text-primary-blue mb-4'>
                  {featuredArticle.title}
                </h3>
                <p className='text-gray-600 mb-6'>{featuredArticle.excerpt}</p>
                <div className='flex items-center justify-between'>
                  <div className='flex items-center gap-3'>
                    <div className='w-10 h-10 bg-green-100 rounded-full flex items-center justify-center'>
                      <span className='text-green-600 font-semibold'>CO</span>
                    </div>
                    <div>
                      <p className='font-semibold text-gray-800'>
                        {featuredArticle.author}
                      </p>
                      <p className='text-sm text-gray-500'>
                        {featuredArticle.date}
                      </p>
                    </div>
                  </div>
                  <Button className='bg-green-600 hover:bg-green-700'>
                    Read More
                  </Button>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Categories and Search */}
      <section className='py-8 bg-light-gray'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='flex flex-col md:flex-row gap-6 items-center justify-between'>
            <div className='flex flex-wrap gap-2'>
              {categories.map(category => (
                <Button
                  key={category.id}
                  variant={
                    selectedCategory === category.id ? 'default' : 'outline'
                  }
                  onClick={() => setSelectedCategory(category.id)}
                  className={
                    selectedCategory === category.id
                      ? 'bg-green-600 hover:bg-green-700'
                      : 'border-gray-300 hover:bg-gray-50'
                  }
                >
                  {category.name}
                  <Badge
                    variant='secondary'
                    className='ml-2 bg-gray-200 text-gray-700'
                  >
                    {category.count}
                  </Badge>
                </Button>
              ))}
            </div>
            <div className='relative'>
              <Input placeholder='Search articles...' className='w-64 pl-10' />
              <svg
                className='absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400'
                fill='none'
                stroke='currentColor'
                viewBox='0 0 24 24'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z'
                />
              </svg>
            </div>
          </div>
        </div>
      </section>

      {/* Articles Grid */}
      <section className='py-16 bg-white'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
            {filteredArticles.map(article => (
              <Card
                key={article.id}
                className='overflow-hidden hover:shadow-lg transition-shadow'
              >
                <div className='relative'>
                  <img
                    src={article.image}
                    alt={article.title}
                    className='w-full h-48 object-cover'
                  />
                  <div className='absolute top-4 left-4'>
                    <Badge
                      variant='outline'
                      className='bg-white/90 text-green-600 border-green-600'
                    >
                      {article.category}
                    </Badge>
                  </div>
                </div>
                <CardContent className='p-6'>
                  <div className='flex items-center gap-2 mb-3'>
                    <span className='text-sm text-gray-500'>
                      {article.readTime}
                    </span>
                    <span className='text-gray-300'>•</span>
                    <span className='text-sm text-gray-500'>
                      {article.date}
                    </span>
                  </div>
                  <CardTitle className='text-lg font-semibold text-primary-blue mb-3 line-clamp-2'>
                    {article.title}
                  </CardTitle>
                  <p className='text-gray-600 mb-4 line-clamp-3'>
                    {article.excerpt}
                  </p>
                  <div className='flex items-center justify-between'>
                    <div className='flex items-center gap-2'>
                      <div className='w-8 h-8 bg-green-100 rounded-full flex items-center justify-center'>
                        <span className='text-green-600 text-xs font-semibold'>
                          {article.author
                            .split(' ')
                            .map(n => n[0])
                            .join('')}
                        </span>
                      </div>
                      <span className='text-sm font-medium text-gray-700'>
                        {article.author}
                      </span>
                    </div>
                    <Button
                      variant='outline'
                      size='sm'
                      className='text-green-600 border-green-600 hover:bg-green-50'
                    >
                      Read More
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Subscription */}
      <section className='py-16 bg-gradient-to-r from-green-600 to-blue-600 text-white'>
        <div className='max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center'>
          <h2 className='font-poppins font-bold text-3xl mb-4'>Stay Updated</h2>
          <p className='text-xl text-gray-200 mb-8'>
            Subscribe to our newsletter for the latest insights, company
            updates, and industry trends.
          </p>
          <div className='flex flex-col sm:flex-row gap-4 max-w-md mx-auto'>
            <Input
              placeholder='Enter your email'
              className='flex-1 text-gray-900'
            />
            <Button className='bg-accent-yellow text-primary-blue hover:bg-accent-yellow/90 font-semibold'>
              Subscribe
            </Button>
          </div>
        </div>
      </section>

      <Footer />
      <CookieConsent />
    </div>
  );
};

export default NewsBlog;

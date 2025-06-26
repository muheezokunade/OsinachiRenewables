import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { Badge } from '@/components/ui/badge';
import { Mail, Phone, MapPin, MessageCircle } from 'lucide-react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import CookieConsent from '@/components/CookieConsent';
import SEO, { SEOConfigs } from '@/components/SEO';

export default function PrivacyPolicy() {
  return (
    <>
      <Helmet>
        <title>Privacy Policy - Osinachi Renewable Energy</title>
        <meta
          name='description'
          content='Learn how Osinachi Renewable Energy protects your privacy and handles your personal information. Read our comprehensive privacy policy.'
        />
        <meta
          name='keywords'
          content='privacy policy, data protection, personal information, Osinachi Renewable Energy, Nigeria solar energy'
        />

        {/* Open Graph */}
        <meta
          property='og:title'
          content='Privacy Policy - Osinachi Renewable Energy'
        />
        <meta
          property='og:description'
          content='Learn how Osinachi Renewable Energy protects your privacy and handles your personal information.'
        />
        <meta property='og:type' content='website' />
        <meta
          property='og:url'
          content='https://www.osinachienergy.com/privacy-policy'
        />

        {/* Twitter Card */}
        <meta name='twitter:card' content='summary_large_image' />
        <meta
          name='twitter:title'
          content='Privacy Policy - Osinachi Renewable Energy'
        />
        <meta
          name='twitter:description'
          content='Learn how Osinachi Renewable Energy protects your privacy and handles your personal information.'
        />

        {/* Structured Data */}
        <script type='application/ld+json'>
          {JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'WebPage',
            name: 'Privacy Policy',
            description:
              'Learn how Osinachi Renewable Energy protects your privacy and handles your personal information.',
            url: 'https://www.osinachienergy.com/privacy-policy',
            publisher: {
              '@type': 'Organization',
              name: 'Osinachi Renewable Energy',
              url: 'https://www.osinachienergy.com',
            },
          })}
        </script>
      </Helmet>

      <div className='min-h-screen bg-gradient-to-br from-green-50 via-white to-blue-50'>
        {/* Header Section */}
        <div className='bg-white shadow-sm border-b'>
          <div className='container mx-auto px-4 py-16'>
            <div className='text-center'>
              <Badge variant='secondary' className='mb-4'>
                Legal
              </Badge>
              <h1 className='text-4xl md:text-5xl font-bold text-gray-900 mb-4'>
                Privacy Policy
              </h1>
              <p className='text-xl text-gray-600 max-w-3xl mx-auto'>
                Your privacy is important to us. Learn how we protect and handle
                your personal information.
              </p>
              <div className='mt-6 text-sm text-gray-500'>
                <span className='font-semibold'>Effective Date:</span> 26/6/2025
              </div>
            </div>
          </div>
        </div>

        {/* Content Section */}
        <div className='container mx-auto px-4 py-16'>
          <div className='max-w-4xl mx-auto'>
            <Card className='mb-8'>
              <CardHeader>
                <CardTitle className='text-2xl text-gray-900'>
                  Introduction
                </CardTitle>
              </CardHeader>
              <CardContent className='space-y-4 text-gray-700'>
                <p>
                  Osinachi Renewable Energy ("we", "our", or "us") is committed
                  to protecting your privacy. This Privacy Policy explains how
                  we collect, use, disclose, and safeguard your information when
                  you visit our website{' '}
                  <a
                    href='https://www.osinachienergy.com'
                    className='text-green-600 hover:text-green-700 underline'
                  >
                    www.osinachienergy.com
                  </a>{' '}
                  or use our services.
                </p>
              </CardContent>
            </Card>

            <Card className='mb-8'>
              <CardHeader>
                <CardTitle className='text-2xl text-gray-900'>
                  1. Information We Collect
                </CardTitle>
              </CardHeader>
              <CardContent className='space-y-4 text-gray-700'>
                <p>
                  We may collect the following types of personal information
                  when you visit our site or engage with us:
                </p>
                <ul className='list-disc list-inside space-y-2 ml-4'>
                  <li>
                    <strong>Contact Information:</strong> Name, phone number,
                    email address, and business details (if applicable)
                  </li>
                  <li>
                    <strong>Inquiry Details:</strong> Messages or requests
                    submitted through our forms
                  </li>
                  <li>
                    <strong>Usage Data:</strong> Pages visited, time spent,
                    browser type, device type, and IP address
                  </li>
                  <li>
                    <strong>Quote Requests:</strong> Information shared to help
                    us provide accurate energy solutions
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className='mb-8'>
              <CardHeader>
                <CardTitle className='text-2xl text-gray-900'>
                  2. How We Use Your Information
                </CardTitle>
              </CardHeader>
              <CardContent className='space-y-4 text-gray-700'>
                <p>We use your information to:</p>
                <ul className='list-disc list-inside space-y-2 ml-4'>
                  <li>Respond to inquiries and provide quotes</li>
                  <li>Schedule consultations or installations</li>
                  <li>Improve our website performance and services</li>
                  <li>
                    Send important updates or promotional materials (you may opt
                    out at any time)
                  </li>
                  <li>Comply with legal or regulatory obligations</li>
                </ul>
              </CardContent>
            </Card>

            <Card className='mb-8'>
              <CardHeader>
                <CardTitle className='text-2xl text-gray-900'>
                  3. How We Share Your Information
                </CardTitle>
              </CardHeader>
              <CardContent className='space-y-4 text-gray-700'>
                <p>
                  We do not sell or rent your personal information. We may share
                  your data only in the following cases:
                </p>
                <ul className='list-disc list-inside space-y-2 ml-4'>
                  <li>
                    With trusted third-party service providers (e.g., website
                    hosting, marketing tools)
                  </li>
                  <li>When required by law or legal obligation</li>
                  <li>With your explicit consent</li>
                </ul>
              </CardContent>
            </Card>

            <Card className='mb-8'>
              <CardHeader>
                <CardTitle className='text-2xl text-gray-900'>
                  4. Cookies and Tracking Technologies
                </CardTitle>
              </CardHeader>
              <CardContent className='space-y-4 text-gray-700'>
                <p>
                  We use cookies and similar technologies to enhance user
                  experience, track site performance, and analyze usage data.
                  You can adjust your cookie settings through your browser
                  preferences.
                </p>
              </CardContent>
            </Card>

            <Card className='mb-8'>
              <CardHeader>
                <CardTitle className='text-2xl text-gray-900'>
                  5. Data Security
                </CardTitle>
              </CardHeader>
              <CardContent className='space-y-4 text-gray-700'>
                <p>
                  We implement reasonable security measures to protect your
                  personal information. However, no internet transmission is
                  100% secure, and we cannot guarantee absolute security.
                </p>
              </CardContent>
            </Card>

            <Card className='mb-8'>
              <CardHeader>
                <CardTitle className='text-2xl text-gray-900'>
                  6. Your Rights
                </CardTitle>
              </CardHeader>
              <CardContent className='space-y-4 text-gray-700'>
                <p>You have the right to:</p>
                <ul className='list-disc list-inside space-y-2 ml-4'>
                  <li>Access or request a copy of your personal data</li>
                  <li>Correct or update your information</li>
                  <li>
                    Request deletion of your data (subject to legal obligations)
                  </li>
                  <li>Withdraw consent for marketing communications</li>
                </ul>
                <p className='mt-4'>
                  To exercise these rights, contact us at:{' '}
                  <a
                    href='mailto:privacy@osinachienergy.com'
                    className='text-green-600 hover:text-green-700 underline'
                  >
                    privacy@osinachienergy.com
                  </a>
                </p>
              </CardContent>
            </Card>

            <Card className='mb-8'>
              <CardHeader>
                <CardTitle className='text-2xl text-gray-900'>
                  7. Third-Party Links
                </CardTitle>
              </CardHeader>
              <CardContent className='space-y-4 text-gray-700'>
                <p>
                  Our website may contain links to third-party websites. We are
                  not responsible for their content or privacy practices.
                </p>
              </CardContent>
            </Card>

            <Card className='mb-8'>
              <CardHeader>
                <CardTitle className='text-2xl text-gray-900'>
                  8. Updates to This Policy
                </CardTitle>
              </CardHeader>
              <CardContent className='space-y-4 text-gray-700'>
                <p>
                  We may update this Privacy Policy occasionally. We will post
                  the revised policy on our website with a new "Effective Date"
                  at the top.
                </p>
              </CardContent>
            </Card>

            <Card className='mb-8'>
              <CardHeader>
                <CardTitle className='text-2xl text-gray-900'>
                  9. Contact Us
                </CardTitle>
              </CardHeader>
              <CardContent className='space-y-6 text-gray-700'>
                <p>
                  If you have questions or concerns about this Privacy Policy,
                  please contact:
                </p>

                <div className='bg-gray-50 rounded-lg p-6'>
                  <h3 className='text-xl font-semibold text-gray-900 mb-4'>
                    Osinachi Renewable Energy
                  </h3>

                  <div className='space-y-3'>
                    <div className='flex items-start space-x-3'>
                      <MapPin className='w-5 h-5 text-green-600 mt-0.5 flex-shrink-0' />
                      <div>
                        <p className='font-medium'>Address:</p>
                        <p>No. 2 Oladele Street, Ilasamaja Lagos State</p>
                      </div>
                    </div>

                    <div className='flex items-center space-x-3'>
                      <Mail className='w-5 h-5 text-green-600 flex-shrink-0' />
                      <div>
                        <p className='font-medium'>Email:</p>
                        <a
                          href='mailto:info@osinachienergy.com'
                          className='text-green-600 hover:text-green-700 underline'
                        >
                          info@osinachienergy.com
                        </a>
                      </div>
                    </div>

                    <div className='flex items-center space-x-3'>
                      <Phone className='w-5 h-5 text-green-600 flex-shrink-0' />
                      <div>
                        <p className='font-medium'>Phone:</p>
                        <a
                          href='tel:+2349060033963'
                          className='text-green-600 hover:text-green-700 underline'
                        >
                          +234 906 003 3963
                        </a>
                      </div>
                    </div>

                    <div className='flex items-center space-x-3'>
                      <MessageCircle className='w-5 h-5 text-green-600 flex-shrink-0' />
                      <div>
                        <p className='font-medium'>WhatsApp:</p>
                        <a
                          href='https://wa.me/2349060033963'
                          target='_blank'
                          rel='noopener noreferrer'
                          className='text-green-600 hover:text-green-700 underline'
                        >
                          Chat with us
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </>
  );
}

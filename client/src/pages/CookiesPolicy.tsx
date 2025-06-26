import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Mail, Shield, Settings, BarChart3, Target } from 'lucide-react';

export default function CookiesPolicy() {
  return (
    <>
      <Helmet>
        <title>Cookies Policy - Osinachi Renewable Energy</title>
        <meta name="description" content="Learn how Osinachi Renewable Energy uses cookies and similar technologies to improve your browsing experience. Read our comprehensive cookies policy." />
        <meta name="keywords" content="cookies policy, cookie consent, data privacy, Osinachi Renewable Energy, Nigeria solar energy" />
        
        {/* Open Graph */}
        <meta property="og:title" content="Cookies Policy - Osinachi Renewable Energy" />
        <meta property="og:description" content="Learn how Osinachi Renewable Energy uses cookies and similar technologies to improve your browsing experience." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.osinachienergy.com/cookies-policy" />
        
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Cookies Policy - Osinachi Renewable Energy" />
        <meta name="twitter:description" content="Learn how Osinachi Renewable Energy uses cookies and similar technologies to improve your browsing experience." />
        
        {/* Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "name": "Cookies Policy",
            "description": "Learn how Osinachi Renewable Energy uses cookies and similar technologies to improve your browsing experience.",
            "url": "https://www.osinachienergy.com/cookies-policy",
            "publisher": {
              "@type": "Organization",
              "name": "Osinachi Renewable Energy",
              "url": "https://www.osinachienergy.com"
            }
          })}
        </script>
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-blue-50">
        {/* Header Section */}
        <div className="bg-white shadow-sm border-b">
          <div className="container mx-auto px-4 py-16">
            <div className="text-center">
              <Badge variant="secondary" className="mb-4">Legal</Badge>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Cookies Policy
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Learn how we use cookies and similar technologies to improve your browsing experience.
              </p>
              <div className="mt-6 text-sm text-gray-500">
                <span className="font-semibold">Effective Date:</span> 26/6/2025
              </div>
            </div>
          </div>
        </div>

        {/* Content Section */}
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto">
            <Card className="mb-8">
              <CardHeader>
                <CardTitle className="text-2xl text-gray-900">Introduction</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-gray-700">
                <p>
                  This Cookies Policy explains how Osinachi Renewable Energy ("we", "our", or "us") uses cookies 
                  and similar technologies on our website <a href="https://www.osinachienergy.com" className="text-green-600 hover:text-green-700 underline">www.osinachienergy.com</a>. 
                  By continuing to browse or use our site, you agree to the use of cookies as described in this policy.
                </p>
              </CardContent>
            </Card>

            <Card className="mb-8">
              <CardHeader>
                <CardTitle className="text-2xl text-gray-900">1. What Are Cookies?</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-gray-700">
                <p>
                  Cookies are small text files stored on your device when you visit a website. They help us 
                  remember your preferences, improve site functionality, and provide a better user experience.
                </p>
              </CardContent>
            </Card>

            <Card className="mb-8">
              <CardHeader>
                <CardTitle className="text-2xl text-gray-900">2. Types of Cookies We Use</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6 text-gray-700">
                <p>We use the following types of cookies:</p>
                
                <div className="space-y-6">
                  <div className="border-l-4 border-green-500 pl-4">
                    <div className="flex items-center mb-2">
                      <Shield className="w-5 h-5 text-green-600 mr-2" />
                      <h3 className="text-lg font-semibold text-gray-900">a. Essential Cookies</h3>
                    </div>
                    <p>
                      These are necessary for the website to function properly. They enable basic features such as 
                      page navigation, secure login, and access to secure areas of the site.
                    </p>
                  </div>

                  <div className="border-l-4 border-blue-500 pl-4">
                    <div className="flex items-center mb-2">
                      <BarChart3 className="w-5 h-5 text-blue-600 mr-2" />
                      <h3 className="text-lg font-semibold text-gray-900">b. Performance & Analytics Cookies</h3>
                    </div>
                    <p>
                      These cookies collect information about how visitors use our website, such as pages visited 
                      and traffic sources. This helps us improve site performance and user experience. We may use 
                      tools like Google Analytics for this purpose.
                    </p>
                  </div>

                  <div className="border-l-4 border-purple-500 pl-4">
                    <div className="flex items-center mb-2">
                      <Settings className="w-5 h-5 text-purple-600 mr-2" />
                      <h3 className="text-lg font-semibold text-gray-900">c. Functionality Cookies</h3>
                    </div>
                    <p>
                      These cookies allow the website to remember choices you make (such as your name or region) 
                      and provide enhanced, more personalized features.
                    </p>
                  </div>

                  <div className="border-l-4 border-orange-500 pl-4">
                    <div className="flex items-center mb-2">
                      <Target className="w-5 h-5 text-orange-600 mr-2" />
                      <h3 className="text-lg font-semibold text-gray-900">d. Marketing/Targeting Cookies</h3>
                    </div>
                    <p>
                      These cookies track your browsing habits so we can show you relevant ads or offers. These 
                      are used only with your consent and may come from trusted third-party partners.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="mb-8">
              <CardHeader>
                <CardTitle className="text-2xl text-gray-900">3. How to Manage or Disable Cookies</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-gray-700">
                <p>You can control and manage cookies in your browser settings. Most browsers allow you to:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>View what cookies are stored</li>
                  <li>Delete cookies</li>
                  <li>Block third-party or all cookies</li>
                  <li>Set preferences for specific websites</li>
                </ul>
                <p className="mt-4 text-amber-700 bg-amber-50 p-4 rounded-lg">
                  <strong>Please note:</strong> Disabling cookies may affect your ability to use certain features on our website.
                </p>
              </CardContent>
            </Card>

            <Card className="mb-8">
              <CardHeader>
                <CardTitle className="text-2xl text-gray-900">4. Third-Party Cookies</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-gray-700">
                <p>
                  Some cookies may be set by third-party services (e.g., embedded videos, analytics tools) used 
                  on our site. We do not control these cookies. Please check the respective third-party websites 
                  for their cookie policies.
                </p>
              </CardContent>
            </Card>

            <Card className="mb-8">
              <CardHeader>
                <CardTitle className="text-2xl text-gray-900">5. Updates to This Policy</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-gray-700">
                <p>
                  We may update this Cookies Policy periodically. Any changes will be posted on this page with 
                  a revised "Effective Date."
                </p>
              </CardContent>
            </Card>

            <Card className="mb-8">
              <CardHeader>
                <CardTitle className="text-2xl text-gray-900">6. Contact Us</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-gray-700">
                <p>If you have any questions or concerns about our use of cookies, please contact us at:</p>
                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-green-600 flex-shrink-0" />
                  <a href="mailto:privacy@osinachienergy.com" className="text-green-600 hover:text-green-700 underline">
                    privacy@osinachienergy.com
                  </a>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </>
  );
} 
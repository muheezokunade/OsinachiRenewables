import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Mail, MapPin, Phone, MessageCircle } from 'lucide-react';
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import CookieConsent from "@/components/CookieConsent";
import SEO, { SEOConfigs } from "@/components/SEO";

export default function TermsConditions() {
  return (
    <>
      <Helmet>
        <title>Terms and Conditions - Osinachi Renewable Energy</title>
        <meta name="description" content="Read the terms and conditions for using Osinachi Renewable Energy's website and services." />
        <meta name="keywords" content="terms and conditions, legal terms, service agreement, Osinachi Renewable Energy, Nigeria solar energy" />
        <meta property="og:title" content="Terms and Conditions - Osinachi Renewable Energy" />
        <meta property="og:description" content="Read the terms and conditions for using Osinachi Renewable Energy's website and services." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.osinachienergy.com/terms-conditions" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-blue-50">
        <div className="bg-white shadow-sm border-b">
          <div className="container mx-auto px-4 py-16">
            <div className="text-center">
              <Badge variant="secondary" className="mb-4">Legal</Badge>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Terms and Conditions
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Please read these terms carefully before using our website or engaging with our services.
              </p>
              <div className="mt-6 text-sm text-gray-500">
                <span className="font-semibold">Effective Date:</span> 26/6/2025
              </div>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto space-y-8">
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl text-gray-900">Introduction</CardTitle>
              </CardHeader>
              <CardContent className="text-gray-700">
                <p>
                  Welcome to Osinachi Renewable Energy. By accessing or using our website{' '}
                  <a href="https://www.osinachienergy.com" className="text-green-600 hover:text-green-700 underline">
                    www.osinachienergy.com
                  </a>{' '}
                  or engaging with our services, you agree to be bound by the following Terms and Conditions ("Terms"). 
                  Please read them carefully.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-2xl text-gray-900">1. About Us</CardTitle>
              </CardHeader>
              <CardContent className="text-gray-700">
                <p>
                  Osinachi Renewable Energy is a Nigerian-based power solutions company that designs and delivers 
                  solar, inverter, hybrid, and generator systems for residential, commercial, and industrial use.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-2xl text-gray-900">2. Use of Website</CardTitle>
              </CardHeader>
              <CardContent className="text-gray-700">
                <p>You may use this website only for lawful purposes. You agree not to:</p>
                <ul className="list-disc list-inside space-y-2 ml-4 mt-2">
                  <li>Use the website in any way that breaches applicable laws or regulations</li>
                  <li>Attempt to gain unauthorized access to any part of the site</li>
                  <li>Reproduce, duplicate, copy, or sell any part of our website without our written consent</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-2xl text-gray-900">3. Intellectual Property</CardTitle>
              </CardHeader>
              <CardContent className="text-gray-700">
                <p>
                  All content on this website — including text, images, logos, graphics, and software — is the 
                  property of Osinachi Renewable Energy or its licensors and is protected by intellectual property 
                  laws. You may not use, reproduce, or distribute this content without written permission.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-2xl text-gray-900">4. Services and Quotes</CardTitle>
              </CardHeader>
              <CardContent className="text-gray-700">
                <p>
                  All quotes provided via our website or team are based on the information available at the time 
                  and may be subject to change after on-site inspection or further consultation.
                </p>
                <p className="mt-2">We reserve the right to refuse or cancel any service request if:</p>
                <ul className="list-disc list-inside space-y-2 ml-4 mt-2">
                  <li>False or misleading information was provided</li>
                  <li>The proposed location or condition is unsuitable for our systems</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-2xl text-gray-900">5. Payment and Pricing</CardTitle>
              </CardHeader>
              <CardContent className="text-gray-700">
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>All project costs are subject to VAT (where applicable) and clearly communicated in writing before work commences.</li>
                  <li>Payment terms will be agreed upon in your contract or proposal.</li>
                  <li>We do not store or process payment details on our website.</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-2xl text-gray-900">6. Warranty and Liability</CardTitle>
              </CardHeader>
              <CardContent className="text-gray-700">
                <p>
                  Our products and installations are backed by manufacturer and service warranties, the terms of 
                  which will be shared in your service agreement.
                </p>
                <p className="mt-2">We are not liable for:</p>
                <ul className="list-disc list-inside space-y-2 ml-4 mt-2">
                  <li>Losses due to customer misuse or poor maintenance</li>
                  <li>Downtime caused by third-party failures (e.g., grid interruptions, internet outages)</li>
                  <li>Indirect or consequential losses (unless required by law)</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-2xl text-gray-900">7. Cancellation and Refunds</CardTitle>
              </CardHeader>
              <CardContent className="text-gray-700">
                <p>
                  You may cancel a scheduled service or installation within the period defined in your service 
                  agreement. Refunds, where applicable, will be processed based on the terms outlined in your 
                  signed contract.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-2xl text-gray-900">8. Third-Party Links</CardTitle>
              </CardHeader>
              <CardContent className="text-gray-700">
                <p>
                  Our website may contain links to third-party websites. We are not responsible for the content, 
                  security, or privacy policies of those sites.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-2xl text-gray-900">9. Limitation of Liability</CardTitle>
              </CardHeader>
              <CardContent className="text-gray-700">
                <p>
                  To the fullest extent permitted by law, Osinachi Renewable Energy shall not be held liable for 
                  any direct, indirect, incidental, or consequential damages arising from your use of our website 
                  or services.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-2xl text-gray-900">10. Changes to These Terms</CardTitle>
              </CardHeader>
              <CardContent className="text-gray-700">
                <p>
                  We may revise these Terms and Conditions at any time without notice. Your continued use of the 
                  website means you accept the updated Terms.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-2xl text-gray-900">11. Governing Law</CardTitle>
              </CardHeader>
              <CardContent className="text-gray-700">
                <p>
                  These Terms are governed by and construed in accordance with the laws of the Federal Republic 
                  of Nigeria. Any disputes shall be subject to the exclusive jurisdiction of Nigerian courts.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-2xl text-gray-900">12. Contact Information</CardTitle>
              </CardHeader>
              <CardContent className="text-gray-700">
                <p>For any questions or concerns regarding these Terms, contact us at:</p>
                
                <div className="bg-gray-50 rounded-lg p-6 mt-4">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Osinachi Renewable Energy</h3>
                  
                  <div className="space-y-3">
                    <div className="flex items-start space-x-3">
                      <MapPin className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="font-medium">Address:</p>
                        <p>No. 2 Oladele Street, Ilasamaja Lagos State</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-3">
                      <Mail className="w-5 h-5 text-green-600 flex-shrink-0" />
                      <div>
                        <p className="font-medium">Email:</p>
                        <a href="mailto:info@osinachienergy.com" className="text-green-600 hover:text-green-700 underline">
                          info@osinachienergy.com
                        </a>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-3">
                      <Phone className="w-5 h-5 text-green-600 flex-shrink-0" />
                      <div>
                        <p className="font-medium">Phone:</p>
                        <a href="tel:+2349060033963" className="text-green-600 hover:text-green-700 underline">
                          +234 906 003 3963
                        </a>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-3">
                      <MessageCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                      <div>
                        <p className="font-medium">WhatsApp:</p>
                        <a 
                          href="https://wa.me/2349060033963" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-green-600 hover:text-green-700 underline"
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
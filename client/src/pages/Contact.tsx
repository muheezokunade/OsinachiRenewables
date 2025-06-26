import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import CookieConsent from "@/components/CookieConsent";
import Contact from "@/components/Contact";
import SEO, { SEOConfigs } from "@/components/SEO";

export default function ContactPage() {
  return (
    <div className="min-h-screen">
      <SEO {...SEOConfigs.contact} />
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative bg-primary-blue text-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="font-poppins font-bold text-4xl md:text-6xl mb-6">
              Contact Us
            </h1>
            <p className="text-xl md:text-2xl text-gray-200">
              Ready to transform your power challenges into reliable solutions? Let's start the conversation.
            </p>
          </div>
        </div>
      </section>

      <Contact />
      
      {/* FAQ Section */}
      <section className="py-20 bg-light-gray">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-poppins font-bold text-4xl text-primary-blue mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-600">Get answers to common questions about our services</p>
          </div>
          
          <div className="space-y-6">
            {[
              {
                question: "What areas do you serve in Nigeria?",
                answer: "We provide services across Nigeria, with primary operations in Lagos, Abuja, Port Harcourt, and surrounding areas. We can accommodate projects nationwide."
              },
              {
                question: "How long does a typical installation take?",
                answer: "Installation timelines vary based on project complexity. Residential systems typically take 1-3 days, while commercial installations may take 1-2 weeks. We'll provide a detailed timeline during consultation."
              },
              {
                question: "Do you provide maintenance services?",
                answer: "Yes, we offer comprehensive maintenance packages for all our installations. This includes regular inspections, performance monitoring, and preventive maintenance to ensure optimal system performance."
              },
              {
                question: "What warranty do you provide?",
                answer: "We provide comprehensive warranties on all our installations. Equipment warranties vary by manufacturer (typically 5-25 years), and we offer additional workmanship warranties for peace of mind."
              }
            ].map((faq, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="font-semibold text-lg text-primary-blue mb-2">{faq.question}</h3>
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
      <CookieConsent />
    </div>
  );
}

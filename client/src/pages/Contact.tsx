import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import CookieConsent from "@/components/CookieConsent";
import Contact from "@/components/Contact";

export default function ContactPage() {
  return (
    <div className="min-h-screen">
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
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-poppins font-bold text-4xl text-primary-blue mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600">Quick answers to common questions</p>
          </div>
          
          <div className="space-y-8">
            {[
              {
                question: "How long does a typical installation take?",
                answer: "Installation timelines vary based on system size and complexity. Residential systems typically take 1-3 days, while commercial and industrial installations can take 1-4 weeks. We'll provide a detailed timeline during your consultation."
              },
              {
                question: "Do you provide warranties on your systems?",
                answer: "Yes, we provide comprehensive warranties covering equipment and workmanship. Solar panels come with 25-year performance warranties, inverters typically have 5-10 year warranties, and our installation work is guaranteed for 5 years."
              },
              {
                question: "Can you work with my existing generator?",
                answer: "Absolutely! We specialize in integrating new renewable energy systems with existing generators, creating hybrid solutions that maximize efficiency and reliability while reducing fuel costs."
              },
              {
                question: "What maintenance is required for solar systems?",
                answer: "Solar systems require minimal maintenance. We recommend annual professional inspections and basic cleaning. Our IoT monitoring systems can alert us to any issues, and we offer comprehensive maintenance packages."
              },
              {
                question: "How do I know what size system I need?",
                answer: "We conduct thorough energy audits to determine your exact power needs. This includes analyzing your current consumption, growth projections, and critical load requirements to design the optimal system size."
              }
            ].map((faq, index) => (
              <div key={index} className="bg-light-gray rounded-2xl p-8">
                <h3 className="font-poppins font-bold text-xl text-primary-blue mb-4">
                  {faq.question}
                </h3>
                <p className="text-gray-700">{faq.answer}</p>
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

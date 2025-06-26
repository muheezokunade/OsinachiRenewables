import { Quote } from "lucide-react";

export default function Testimonials() {
  const testimonials = [
    {
      name: "John Adebayo",
      role: "Factory Manager",
      testimonial: "Our production line hasn't stopped once since Osinachi installed our hybrid system. The ROI was even better than projected."
    },
    {
      name: "Sarah Okonkwo",
      role: "Hotel General Manager",
      testimonial: "Finally found a power solutions company that understands hospitality. Our guests never experience power interruptions anymore."
    },
    {
      name: "Mr. & Mrs. Okoro",
      role: "Homeowners",
      testimonial: "The kids can now study without interruption, and our electricity bills have dropped by more than half. Worth every naira!"
    }
  ];

  return (
    <section className="py-20 bg-primary-blue text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-poppins font-bold text-4xl mb-4">What Our Clients Say</h2>
          <p className="text-xl text-gray-200">Trust built through results</p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white text-gray-800 p-8 rounded-2xl">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-accent-yellow rounded-full flex items-center justify-center mr-4">
                  <Quote className="text-primary-blue h-6 w-6" />
                </div>
                <div>
                  <div className="font-semibold">{testimonial.name}</div>
                  <div className="text-sm text-gray-600">{testimonial.role}</div>
                </div>
              </div>
              <p className="text-gray-700">"{testimonial.testimonial}"</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

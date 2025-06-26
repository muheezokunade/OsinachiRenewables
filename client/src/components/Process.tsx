export default function Process() {
  const steps = [
    {
      number: "1",
      title: "Consultation & Audit",
      description: "We analyze your current power needs and identify inefficiencies",
      bgColor: "bg-accent-yellow",
      textColor: "text-primary-blue"
    },
    {
      number: "2",
      title: "System Design",
      description: "Custom engineering tailored to your specific requirements",
      bgColor: "bg-primary-blue",
      textColor: "text-white"
    },
    {
      number: "3",
      title: "Professional Installation",
      description: "Expert installation with quality control at every step",
      bgColor: "bg-accent-yellow",
      textColor: "text-primary-blue"
    },
    {
      number: "4",
      title: "Ongoing Support",
      description: "Continuous monitoring and maintenance for optimal performance",
      bgColor: "bg-primary-blue",
      textColor: "text-white"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-poppins font-bold text-4xl text-primary-blue mb-4">Our Proven Process</h2>
          <p className="text-xl text-gray-600">A systematic approach to delivering reliable power solutions</p>
        </div>
        
        <div className="grid md:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="text-center">
              <div className={`${step.bgColor} w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4`}>
                <span className={`${step.textColor} font-bold text-2xl`}>{step.number}</span>
              </div>
              <h3 className="font-poppins font-semibold text-xl mb-3">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

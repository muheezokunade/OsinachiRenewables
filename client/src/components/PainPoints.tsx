import { AlertTriangle, Ban, DollarSign, Zap } from "lucide-react";

export default function PainPoints() {
  const painPoints = [
    {
      icon: AlertTriangle,
      title: "Failing Generators?",
      description: "Constant breakdowns disrupting operations"
    },
    {
      icon: Ban,
      title: "Fake Parts?",
      description: "Counterfeit components causing damage"
    },
    {
      icon: DollarSign,
      title: "Costly Repairs?",
      description: "Expensive maintenance eating profits"
    },
    {
      icon: Zap,
      title: "Unstable Inverters?",
      description: "Unreliable backup power systems"
    }
  ];

  return (
    <section className="py-16 bg-light-gray">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-poppins font-bold text-3xl text-primary-blue mb-4">
            Are You Struggling With...
          </h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {painPoints.map((point, index) => {
            const IconComponent = point.icon;
            return (
              <div key={index} className="text-center">
                <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <IconComponent className="text-red-600 h-8 w-8" />
                </div>
                <h3 className="font-semibold text-lg mb-2">{point.title}</h3>
                <p className="text-gray-600 text-sm">{point.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

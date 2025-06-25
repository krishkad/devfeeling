import { Card, CardContent } from "@/components/ui/card";
import { Users, Clock, DollarSign, Shield, Award, Lightbulb } from "lucide-react";

const WhyChooseUs = () => {
  const features = [
    {
      icon: Users,
      title: "Dedicated In-House Team",
      description: "Work directly with our experienced developers, designers, and project managers - no outsourcing."
    },
    {
      icon: Lightbulb,
      title: "Startup Focused",
      description: "We understand the unique challenges of startups and scale our solutions to grow with your business."
    },
    {
      icon: Clock,
      title: "Fast Turnaround",
      description: "Agile development process ensures quick delivery without compromising on quality."
    },
    {
      icon: DollarSign,
      title: "Transparent Pricing",
      description: "No hidden fees or surprises. Clear, upfront pricing with detailed project breakdowns."
    },
    {
      icon: Shield,
      title: "Quality Assurance",
      description: "Rigorous testing and code review processes to ensure your application is robust and secure."
    },
    {
      icon: Award,
      title: "Proven Track Record",
      description: "100+ successful projects delivered with a 98% client satisfaction rate."
    }
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Why Choose <span className="text-brand-blue-600">Devfeeling</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We&apos;re more than just developers - we&apos;re your technology partners committed 
            to turning your vision into reality.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card 
              key={index}
              className="card-hover bg-white border border-gray-100 shadow-md animate-fade-in group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-brand-blue-500 to-brand-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-20 bg-gradient-to-r from-brand-blue-600 to-brand-blue-600 rounded-3xl p-8 md:p-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center text-white">
            <div>
              <div className="text-3xl md:text-4xl font-bold mb-2">100+</div>
              <div className="text-blue-100">Projects Delivered</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold mb-2">98%</div>
              <div className="text-blue-100">Client Satisfaction</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold mb-2">5+</div>
              <div className="text-blue-100">Years Experience</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold mb-2">24/7</div>
              <div className="text-blue-100">Support</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
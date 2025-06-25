
import { Card, CardContent } from "@/components/ui/card";
import { Search, Palette, Monitor, TestTube, Rocket, Headphones } from "lucide-react";

const Process = () => {
  const steps = [
    {
      icon: Search,
      title: "Discovery",
      description: "We dive deep into your vision, understanding your goals, target audience, and technical requirements.",
      duration: "1-2 weeks"
    },
    {
      icon: Palette,
      title: "Design",
      description: "Creating wireframes, prototypes, and visual designs that align with your brand and user needs.",
      duration: "2-3 weeks"
    },
    {
      icon: Monitor,
      title: "Development",
      description: "Building your application using modern technologies with regular progress updates and demos.",
      duration: "4-12 weeks"
    },
    {
      icon: TestTube,
      title: "Testing",
      description: "Comprehensive testing across devices and browsers to ensure quality and performance.",
      duration: "1-2 weeks"
    },
    {
      icon: Rocket,
      title: "Launch",
      description: "Deploying your application to production with monitoring and performance optimization.",
      duration: "1 week"
    },
    {
      icon: Headphones,
      title: "Support",
      description: "Ongoing maintenance, updates, and support to keep your application running smoothly.",
      duration: "Ongoing"
    }
  ];

  return (
    <section id="process" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Our <span className="text-brand-blue-600">Process</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A proven methodology that ensures your project is delivered on time, 
            within budget, and exceeds expectations.
          </p>
        </div>

        <div className="relative">
          {/* Timeline line for desktop */}
          <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-brand-blue-500 to-brand-blue-600"></div>
          
          <div className="space-y-12 lg:space-y-16">
            {steps.map((step, index) => (
              <div 
                key={index} 
                className={`flex flex-col lg:flex-row items-center gap-8 animate-fade-in ${
                  index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                }`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                {/* Content Card */}
                <div className="flex-1 lg:max-w-md">
                  <Card className="card-hover bg-white shadow-lg border-0">
                    <CardContent className="p-6">
                      <div className="flex items-center mb-4">
                        <div className="w-12 h-12 bg-gradient-to-r from-brand-blue-500 to-brand-blue-600 rounded-full flex items-center justify-center mr-4">
                          <step.icon className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <h3 className="text-xl font-semibold text-gray-900">{step.title}</h3>
                          <span className="text-sm text-brand-blue-600 font-medium">{step.duration}</span>
                        </div>
                      </div>
                      <p className="text-gray-600 leading-relaxed">{step.description}</p>
                    </CardContent>
                  </Card>
                </div>

                {/* Timeline dot */}
                <div className="hidden lg:block w-4 h-4 bg-white border-4 border-brand-blue-500 rounded-full shadow-lg z-10"></div>

                {/* Spacer for alternating layout */}
                <div className="flex-1 lg:max-w-md"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Monitor, Smartphone, Palette, Rocket, Cloud, Settings } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Monitor,
      title: "Web App Development",
      description: "Custom web applications built with modern frameworks like React, Next.js, and Node.js for optimal performance.",
      features: ["React/Next.js", "Full-stack solutions", "API integration"]
    },
    {
      icon: Smartphone,
      title: "Mobile App Development",
      description: "Native and cross-platform mobile applications that deliver exceptional user experiences on iOS and Android.",
      features: ["iOS & Android", "React Native", "Native performance"]
    },
    {
      icon: Palette,
      title: "UI/UX Design",
      description: "User-centered design that combines beautiful aesthetics with intuitive functionality to engage your users.",
      features: ["User research", "Prototyping", "Design systems"]
    },
    {
      icon: Rocket,
      title: "MVP Development",
      description: "Rapid prototyping and MVP development to validate your ideas quickly and cost-effectively.",
      features: ["Fast delivery", "Lean approach", "Market validation"]
    },
    {
      icon: Cloud,
      title: "SaaS Solutions",
      description: "Scalable Software-as-a-Service platforms with subscription management, analytics, and multi-tenancy.",
      features: ["Subscription billing", "Multi-tenant", "Analytics"]
    },
    {
      icon: Settings,
      title: "API Development",
      description: "RESTful and GraphQL APIs that power your applications with secure, scalable backend infrastructure.",
      features: ["RESTful APIs", "GraphQL", "Microservices"]
    }
  ];

  return (
    <section id="services" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Our <span className="text-brand-blue-600">Services</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From concept to deployment, we offer comprehensive software development services 
            tailored to your business needs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="card-hover bg-white border-0 shadow-lg animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-to-r from-brand-blue-500 to-brand-blue-600 rounded-lg flex items-center justify-center mb-4">
                  <service.icon className="w-6 h-6 text-white" />
                </div>
                <CardTitle className="text-xl font-semibold text-gray-900">
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {service.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {service.features.map((feature, featureIndex) => (
                    <span 
                      key={featureIndex}
                      className="px-3 py-1 bg-brand-blue-50 text-brand-blue-700 text-sm font-medium rounded-full"
                    >
                      {feature}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;

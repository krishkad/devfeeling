import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";

const CaseStudies = () => {
  const projects = [
    {
      title: "TaskFlow SaaS Platform",
      client: "ProductivityCorp",
      description: "A comprehensive project management platform that increased team productivity by 40% for over 10,000 users.",
      image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81",
      tech: ["React", "Node.js", "PostgreSQL", "AWS"],
      results: ["40% productivity increase", "10K+ active users", "99.9% uptime"],
      category: "SaaS Platform"
    },
    {
      title: "FinTech Mobile App",
      client: "SecureBank",
      description: "Secure mobile banking application with biometric authentication and real-time transaction monitoring.",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
      tech: ["React Native", "Django", "PostgreSQL", "AWS"],
      results: ["500K+ downloads", "4.8/5 app rating", "Zero security incidents"],
      category: "Mobile App"
    },
    {
      title: "E-commerce Marketplace",
      client: "RetailConnect",
      description: "Multi-vendor marketplace connecting local businesses with customers, featuring real-time inventory and payments.",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b",
      tech: ["Next.js", "Stripe", "MongoDB", "Vercel"],
      results: ["200+ vendors", "$2M+ in sales", "35% month-over-month growth"],
      category: "E-commerce"
    }
  ];

  return (
    <section id="case-studies" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Success <span className="text-brand-blue-600">Stories</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Real projects, real results. See how we&apos;ve helped businesses transform 
            their ideas into successful digital products.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={index}
              className="card-hover bg-white border-0 shadow-lg overflow-hidden animate-scale-in group pt-0"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-brand-blue-600 text-white text-sm font-medium rounded-full">
                    {project.category}
                  </span>
                </div>
              </div>
              
              <CardContent className="p-6">
                <div className="mb-4">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{project.title}</h3>
                  <p className="text-brand-blue-600 font-medium text-sm mb-3">{project.client}</p>
                  <p className="text-gray-600 leading-relaxed">{project.description}</p>
                </div>

                <div className="mb-4">
                  <h4 className="font-semibold text-gray-900 mb-2">Tech Stack:</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, techIndex) => (
                      <span 
                        key={techIndex}
                        className="px-2 py-1 bg-gray-100 text-gray-700 text-xs font-medium rounded"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-2">Results:</h4>
                  <ul className="space-y-1">
                    {project.results.map((result, resultIndex) => (
                      <li key={resultIndex} className="text-sm text-gray-600 flex items-center">
                        <span className="w-1.5 h-1.5 bg-brand-blue-600 rounded-full mr-2"></span>
                        {result}
                      </li>
                    ))}
                  </ul>
                </div>

                <Button 
                  variant="outline" 
                  className="w-full border-brand-blue-500 text-brand-blue-600 hover:bg-brand-blue-50"
                >
                  View Case Study
                  <ExternalLink className="w-4 h-4 ml-2" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;
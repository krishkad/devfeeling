import { Card, CardContent } from "@/components/ui/card";
import { Users, Target, Award } from "lucide-react";

const AboutUs = () => {
  const teamMembers = [
    {
      name: "Alex Thompson",
      role: "CEO & Lead Developer",
      image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=300&h=300&fit=crop&crop=face",
      bio: "10+ years in software development with expertise in React, Node.js, and cloud architecture."
    },
    {
      name: "Jessica Chen",
      role: "Head of Design",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b47c?w=300&h=300&fit=crop&crop=face",
      bio: "Award-winning UX designer passionate about creating intuitive user experiences for complex applications."
    },
    {
      name: "Marcus Rodriguez",
      role: "Lead Backend Developer",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face",
      bio: "Full-stack engineer specializing in scalable backend systems and database optimization."
    }
  ];

  const values = [
    {
      icon: Users,
      title: "Client-Centric Approach",
      description: "We put our clients at the center of everything we do, ensuring their success is our success."
    },
    {
      icon: Target,
      title: "Quality & Innovation",
      description: "We combine cutting-edge technology with proven methodologies to deliver exceptional results."
    },
    {
      icon: Award,
      title: "Long-term Partnership",
      description: "We build lasting relationships, providing ongoing support and growth opportunities."
    }
  ];

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            About <span className="text-brand-blue-600">DevFeeling</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We&apos;re a passionate team of developers, designers, and strategists dedicated 
            to creating exceptional software solutions for startups and growing businesses.
          </p>
        </div>

        {/* Mission Statement */}
        <div className="bg-gradient-to-r from-brand-blue-50 to-brand-orange-50 rounded-3xl p-8 md:p-12 mb-16">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">Our Mission</h3>
            <p className="text-lg text-gray-700 leading-relaxed">
              To empower startups and businesses with innovative software solutions that drive growth, 
              enhance user experiences, and create lasting value. We believe technology should be 
              accessible, reliable, and transformative.
            </p>
          </div>
        </div>

        {/* Values */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {values.map((value, index) => (
            <div 
              key={index}
              className="text-center animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-16 h-16 bg-gradient-to-r from-brand-blue-500 to-brand-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <value.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">{value.title}</h3>
              <p className="text-gray-600 leading-relaxed">{value.description}</p>
            </div>
          ))}
        </div>

        {/* Team */}
        <div>
          <h3 className="text-2xl md:text-3xl font-bold text-gray-900 text-center mb-12">
            Meet Our <span className="text-brand-blue-600">Team</span>
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <Card 
                key={index}
                className="card-hover bg-white border-0 shadow-lg animate-scale-in text-center"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
                  />
                  <h4 className="text-xl font-semibold text-gray-900 mb-1">{member.name}</h4>
                  <p className="text-brand-blue-600 font-medium mb-3">{member.role}</p>
                  <p className="text-gray-600 text-sm leading-relaxed">{member.bio}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
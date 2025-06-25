
import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah Johnson",
      company: "TechStart Inc.",
      role: "CEO",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b47c?w=200&h=200&fit=crop&crop=face",
      rating: 5,
      quote: "CodeCraft Studios transformed our idea into a beautiful, functional platform. Their attention to detail and technical expertise exceeded our expectations. We saw a 300% increase in user engagement after launch."
    },
    {
      name: "Michael Chen",
      company: "DataFlow Solutions",
      role: "CTO", 
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&crop=face",
      rating: 5,
      quote: "The team's deep understanding of modern development practices and startup needs made them the perfect partner. They delivered our MVP ahead of schedule and within budget."
    },
    {
      name: "Emily Rodriguez",
      company: "GrowthHub",
      role: "Founder",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&h=200&fit=crop&crop=face",
      rating: 5,
      quote: "Professional, responsive, and incredibly talented. They took our complex requirements and delivered a solution that perfectly matched our vision. Our investors were impressed!"
    },
    {
      name: "David Kim",
      company: "InnovateLab",
      role: "Product Manager",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop&crop=face",
      rating: 5,
      quote: "From initial consultation to final delivery, the process was seamless. Their expertise in both design and development helped us create a product that our users love."
    }
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            What Our <span className="text-brand-blue-600">Clients Say</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Don&apos;t just take our word for it. Here&apos;s what our clients have to say 
            about their experience working with us.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index}
              className="card-hover bg-white border-0 shadow-lg animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-6">
                {/* Stars */}
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>

                {/* Quote */}
                <blockquote className="text-gray-700 mb-6 leading-relaxed italic">
                  &quot;{testimonial.quote}&quot;
                </blockquote>

                {/* Author */}
                <div className="flex items-center">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full mr-4 object-cover"
                  />
                  <div>
                    <div className="font-semibold text-gray-900">{testimonial.name}</div>
                    <div className="text-brand-blue-600 text-sm">
                      {testimonial.role} at {testimonial.company}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Trust indicators */}
        <div className="mt-16 text-center">
          <div className="inline-flex max-sm:flex-col                                                                items-center space-x-8 text-gray-500">
            <div className="flex items-center">
              <Star className="w-5 h-5 text-yellow-400 fill-current mr-1" />
              <span className="text-lg font-semibold text-gray-900">4.9/5</span>
              <span className="ml-1">Average Rating</span>
            </div>
            <div className="h-6 border-l border-gray-300"></div>
            <div>
              <span className="text-lg font-semibold text-gray-900">50+</span>
              <span className="ml-1">Happy Clients</span>
            </div>
            <div className="h-6 border-l border-gray-300"></div>
            <div>
              <span className="text-lg font-semibold text-gray-900">100%</span>
              <span className="ml-1">Project Success Rate</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
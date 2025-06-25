import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar } from "lucide-react";

const CTA = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-brand-blue-700 to-brand-accent-500">
      <div className="max-w-4xl mx-auto text-center">
        <div className="animate-fade-in">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">
            Have an Idea? Let&apos;s Build It Together.
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto leading-relaxed">
            Ready to turn your vision into reality? Schedule a free consultation
            and let&apos;s discuss how we can help your business grow.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Button
              size="lg"
              className="bg-white text-brand-blue-600 hover:bg-gray-100 px-8 py-3 text-lg font-semibold group"
            >
              <Calendar className="mr-2 h-5 w-5" />
              Book a Free Call
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white bg-transparent text-white hover:bg-white hover:text-blue-600 px-8 py-3 text-lg font-semibold"
            >
              View Our Portfolio
            </Button>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-blue-100">
            <div className="flex items-center">
              <span className="w-2 h-2 bg-white rounded-full mr-2"></span>
              Free consultation & project estimate
            </div>
            <div className="flex items-center">
              <span className="w-2 h-2 bg-white rounded-full mr-2"></span>
              No commitment required
            </div>
            <div className="flex items-center">
              <span className="w-2 h-2 bg-white rounded-full mr-2"></span>
              Response within 24 hours
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;

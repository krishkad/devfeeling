import { Button } from "@/components/ui/button";
import { ArrowRight, Play, Code2, Smartphone, Monitor } from "lucide-react";

const Hero = () => {
  const clientLogos = [
    "TechStart",
    "InnovateCorp",
    "DataFlow",
    "CloudSync",
    "NextGen",
  ];

  return (
    <section className="pt-24 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center animate-fade-in max-md:pt-12">
          {/* Main Headlines */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            What If Your{" "}
            <span className="bg-gradient-to-r from-brand-blue-600 to-brand-accent-500 bg-clip-text text-transparent">
              Startup Grew
            </span>
            <br className="max-md:hidden" />{" "}
            as Fast as Your Vision?
          </h1>

          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            We build future-ready web, mobile, and SaaS platforms that grow with
            your business—seamlessly and securely.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Button
              size="lg"
              className="bg-brand-accent-500 hover:bg-brand-accent-600 text-white px-8 py-3 text-lg font-semibold group"
            >
              Book a Free Call
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-brand-blue-500 text-brand-blue-600 hover:bg-brand-blue-50 px-8 py-3 text-lg font-semibold"
            >
              View Our Work
            </Button>
          </div>

          {/* Interactive Product Showcase */}
          <div className="relative mb-16">
            <div className="relative max-w-6xl mx-auto">
              {/* Background gradient with blue tones */}
              <div className="absolute inset-0 bg-gradient-to-br from-brand-blue-50 via-brand-accent-50 to-brand-blue-100 rounded-3xl transform rotate-1"></div>

              {/* Main showcase container */}
              <div className="relative bg-white rounded-3xl p-8 shadow-2xl overflow-hidden">
                {/* Central dashboard mockup */}
                <div className="relative z-10 mx-auto max-w-3xl animate-fade-in">
                  <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-6 shadow-2xl">
                    {/* Browser chrome */}
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex space-x-2">
                        <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                        <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                        <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                      </div>
                      <div className="bg-gray-700 rounded-lg px-4 py-1 text-gray-300 text-sm">
                        app.yourproject.com
                      </div>
                      <div className="w-6"></div>
                    </div>

                    {/* Dashboard interface */}
                    <div className="bg-gradient-to-br from-brand-blue-50 to-white rounded-xl p-6">
                      {/* Header */}
                      <div className="flex items-center justify-between mb-6">
                        <div className="flex items-center space-x-3">
                          <div className="w-8 h-8 bg-brand-accent-500 rounded-lg"></div>
                          <div className="space-y-1">
                            <div className="w-20 h-2 bg-gray-300 rounded"></div>
                            <div className="w-16 h-1 bg-gray-200 rounded"></div>
                          </div>
                        </div>
                        <div className="w-8 h-8 bg-brand-blue-100 rounded-full"></div>
                      </div>

                      {/* Stats cards */}
                      <div className="grid grid-cols-3 gap-4 mb-6">
                        <div className="bg-white rounded-lg p-4 shadow-sm">
                          <div className="w-full h-2 bg-brand-accent-500 rounded mb-2"></div>
                          <div className="w-3/4 h-1 bg-gray-200 rounded"></div>
                        </div>
                        <div className="bg-white rounded-lg p-4 shadow-sm">
                          <div className="w-full h-2 bg-brand-blue-400 rounded mb-2"></div>
                          <div className="w-2/3 h-1 bg-gray-200 rounded"></div>
                        </div>
                        <div className="bg-white rounded-lg p-4 shadow-sm">
                          <div className="w-full h-2 bg-brand-blue-600 rounded mb-2"></div>
                          <div className="w-1/2 h-1 bg-gray-200 rounded"></div>
                        </div>
                      </div>

                      {/* Chart area */}
                      <div className="bg-white rounded-lg p-4 shadow-sm">
                        <div className="flex items-end space-x-2 h-16">
                          <div className="w-3 h-8 bg-brand-accent-300 rounded-t"></div>
                          <div className="w-3 h-12 bg-brand-accent-500 rounded-t"></div>
                          <div className="w-3 h-6 bg-brand-accent-300 rounded-t"></div>
                          <div className="w-3 h-14 bg-brand-accent-500 rounded-t"></div>
                          <div className="w-3 h-10 bg-brand-accent-400 rounded-t"></div>
                          <div className="w-3 h-16 bg-brand-accent-600 rounded-t"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Floating device mockups */}
                <div className="absolute top-8 -left-8 z-20 transform -rotate-12 animate-slide-in-left">
                  <div className="bg-gray-900 rounded-2xl p-3 shadow-2xl">
                    <div className="bg-white rounded-xl overflow-hidden">
                      <div className="bg-brand-accent-500 h-2 w-full"></div>
                      <div className="p-4 space-y-2">
                        <div className="flex items-center space-x-2">
                          <Monitor className="h-4 w-4 text-brand-blue-500" />
                          <div className="w-16 h-1 bg-gray-300 rounded"></div>
                        </div>
                        <div className="space-y-1">
                          <div className="w-full h-1 bg-gray-200 rounded"></div>
                          <div className="w-3/4 h-1 bg-gray-200 rounded"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="absolute top-12 -right-12 z-20 transform rotate-12 animate-slide-in-right">
                  <div className="bg-gray-900 rounded-3xl p-2 shadow-2xl">
                    <div className="bg-white rounded-2xl overflow-hidden w-24 h-40">
                      <div className="bg-brand-blue-500 h-1 w-full"></div>
                      <div className="p-3 space-y-2">
                        <div className="flex items-center justify-between">
                          <Smartphone className="h-3 w-3 text-brand-accent-500" />
                          <div className="w-2 h-2 bg-brand-blue-300 rounded-full"></div>
                        </div>
                        <div className="space-y-1">
                          <div className="w-full h-1 bg-gray-200 rounded"></div>
                          <div className="w-2/3 h-1 bg-gray-200 rounded"></div>
                          <div className="w-3/4 h-1 bg-gray-200 rounded"></div>
                        </div>
                        <div className="w-full h-8 bg-brand-accent-100 rounded mt-2"></div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Floating UI elements */}
                <div className="absolute bottom-8 left-16 transform animate-float">
                  <div className="bg-white rounded-xl shadow-lg p-3 border border-gray-100">
                    <div className="flex items-center space-x-2">
                      <Code2 className="h-4 w-4 text-brand-accent-500" />
                      <div className="space-y-1">
                        <div className="w-16 h-1 bg-brand-blue-500 rounded"></div>
                        <div className="w-12 h-1 bg-gray-300 rounded"></div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="absolute top-20 right-16 transform animate-float delay-500">
                  <div className="bg-brand-accent-500 rounded-full p-3 shadow-lg">
                    <Play className="h-4 w-4 text-white" />
                  </div>
                </div>

                <div className="absolute bottom-16 right-8 transform animate-float delay-1000">
                  <div className="bg-white rounded-lg shadow-lg p-2 border border-gray-100">
                    <div className="w-3 h-3 bg-brand-blue-500 rounded-full"></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Animated background elements */}
            <div className="absolute -top-4 -left-4 w-12 h-12 bg-brand-accent-500 rounded-full opacity-80 animate-pulse"></div>
            <div className="absolute -bottom-6 -right-6 w-16 h-16 bg-brand-blue-500 rounded-full opacity-60 animate-pulse delay-300"></div>
            <div className="absolute top-1/2 -left-8 w-8 h-8 bg-brand-blue-300 rounded-full opacity-40 animate-pulse delay-700"></div>
          </div>

          {/* Client Logos */}
          <div className="text-center">
            <p className="text-sm text-gray-500 mb-6 font-medium">
              Trusted by innovative companies
            </p>
            <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
              {clientLogos.map((logo, index) => (
                <div
                  key={index}
                  className="text-lg font-semibold text-gray-400 hover:text-gray-600 transition-colors"
                >
                  {logo}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

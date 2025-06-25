import AboutUs from "@/components/AboutUs";
import CaseStudies from "@/components/CaseStudies";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Process from "@/components/Process";
import Services from "@/components/Services";
import Testimonials from "@/components/Testimonials";
import WhyChooseUs from "@/components/WhyChooseUs";

const Home = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <Services />
      <Process />
      <CaseStudies />
      <WhyChooseUs />
      <Testimonials />
      <AboutUs />
      <CTA />
      <Footer />
    </div>
  );
};

export default Home;

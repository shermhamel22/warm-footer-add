import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import BeforeAfterSection from "@/components/BeforeAfterSection";
import ReviewsSection from "@/components/ReviewsSection";
import ServiceAreasSection from "@/components/ServiceAreasSection";
import WhyChooseUsSection from "@/components/WhyChooseUsSection";
import CTABanner from "@/components/CTABanner";
import FAQSection from "@/components/FAQSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
      <ServicesSection />
      <WhyChooseUsSection />
      <BeforeAfterSection />
      <ReviewsSection />
      <ServiceAreasSection />
      <FAQSection />
      <CTABanner />
      </main>
      <Footer />
    </div>
  );
};

export default Index;

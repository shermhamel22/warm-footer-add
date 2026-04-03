import { lazy, Suspense } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";

const ServicesSection = lazy(() => import("@/components/ServicesSection"));
const WhyChooseUsSection = lazy(() => import("@/components/WhyChooseUsSection"));
const BeforeAfterSection = lazy(() => import("@/components/BeforeAfterSection"));
const ReviewsSection = lazy(() => import("@/components/ReviewsSection"));
const ServiceAreasSection = lazy(() => import("@/components/ServiceAreasSection"));
const FAQSection = lazy(() => import("@/components/FAQSection"));
const CTABanner = lazy(() => import("@/components/CTABanner"));
const Footer = lazy(() => import("@/components/Footer"));

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <Suspense fallback={<div className="min-h-[200px]" />}>
        <ServicesSection />
        <WhyChooseUsSection />
        <BeforeAfterSection />
        <ReviewsSection />
        <ServiceAreasSection />
        <FAQSection />
        <CTABanner />
        <Footer />
      </Suspense>
    </div>
  );
};

export default Index;

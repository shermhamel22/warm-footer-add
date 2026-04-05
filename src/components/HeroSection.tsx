import { Phone } from "lucide-react";
import { useState } from "react";
import heroBg from "@/assets/hero-bg.jpg";
import logo from "@/assets/logo.png";

const HeroSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    message: "",
    agree: false,
  });

  return (
    <section className="relative min-h-[700px] lg:min-h-[800px]">
      {/* Background */}
      <div className="absolute inset-0">
        <img src={heroBg} alt="Professional house painting services in Vero Beach Florida" width={1920} height={1080} className="w-full h-full object-cover" fetchPriority="high" />
        <div className="absolute inset-0 bg-hero-dark/75" />
      </div>

      <div className="relative max-w-[1400px] mx-auto px-4 lg:px-8 py-12 lg:py-20">
        <div className="grid lg:grid-cols-2 gap-10 items-start">
          {/* Left Side */}
          <div className="flex flex-col justify-center pt-8">
            {/* Google Reviews Badge */}
            <div className="flex items-center gap-2 mb-6">
              <div className="w-3 h-3 rounded-full bg-accent" />
              <span className="text-primary-foreground/80 text-sm font-heading font-bold uppercase tracking-wider">
                4.9 RATING ON
              </span>
              <span className="text-primary-foreground font-heading font-black text-sm">Google</span>
              <div className="flex gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-star text-sm">★</span>
                ))}
              </div>
            </div>

            <h1 className="font-heading font-black text-primary-foreground text-[48px] lg:text-[64px] leading-[1.05] uppercase mb-6">
              PAINTING SERVICES IN<br />VERO BEACH
            </h1>

            <p className="text-primary-foreground/80 text-[16px] leading-relaxed max-w-[500px] mb-8 font-body">
              Guaranteed quality at an affordable price. At Elite Painting Solutions, we stand by our
              promise to our customers every step of the way. We offer services for your home
              including interior painting, exterior painting, cabinet refinishing, and more.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4">
              <a
                href="tel:+17725392115"
                className="bg-destructive text-destructive-foreground font-heading font-extrabold text-[15px] uppercase tracking-wider px-7 py-3.5 flex items-center gap-3 hover:brightness-110 transition-all rounded-md"
              >
                <Phone className="w-5 h-5" />
                CALL NOW — FREE QUOTE
              </a>
              <a
                href="#services"
                className="border-2 border-primary-foreground text-primary-foreground font-heading font-extrabold text-[15px] uppercase tracking-wider px-7 py-3.5 flex items-center gap-3 hover:bg-primary-foreground/10 transition-colors rounded-md"
              >
                OUR SERVICES
                <span className="text-lg">→</span>
              </a>
            </div>
          </div>

          {/* Right Side - Quote Form */}
          <div className="bg-destructive rounded-lg p-6 lg:p-8 w-full max-w-[540px] lg:ml-auto" id="quote">
            <div className="flex justify-center -mb-8">
              <img src={logo} alt="Elite Painting Solutions" width={330} height={330} className="object-contain -mt-24" fetchPriority="high" />
            </div>
            <h2 className="font-heading font-black text-destructive-foreground text-[36px] lg:text-[44px] text-center uppercase mb-5 leading-tight whitespace-nowrap -mt-16 relative z-10">
              GET A FREE QUOTE
            </h2>

            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <div>
                <label className="text-destructive-foreground font-heading font-bold text-sm mb-1.5 block">
                  Full Name *
                </label>
                <input
                  type="text"
                  placeholder="John Smith"
                  className="w-full px-4 py-3.5 rounded-md bg-background text-foreground text-sm"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                />
              </div>
              <div>
                <label className="text-destructive-foreground font-heading font-bold text-sm mb-1.5 block">
                  Phone *
                </label>
                <input
                  type="tel"
                  placeholder="(808) 555-1234"
                  className="w-full px-4 py-3.5 rounded-md bg-background text-foreground text-sm"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                />
              </div>
              <div>
                <label className="text-destructive-foreground font-heading font-bold text-sm mb-1.5 block">
                  Short message about your needs *
                </label>
                <textarea
                  placeholder="**Your message goes straight to my phone, I'll get back to you as soon as I'm available**"
                  rows={3}
                  className="w-full px-4 py-3.5 rounded-md bg-background text-foreground text-sm resize-none"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                />
              </div>
              <div className="flex items-start gap-3">
                <input
                  type="checkbox"
                  id="agree-checkbox"
                  className="mt-1 w-4 h-4"
                  checked={formData.agree}
                  onChange={(e) => setFormData({ ...formData, agree: e.target.checked })}
                />
                <label htmlFor="agree-checkbox" className="text-destructive-foreground text-xs leading-relaxed font-heading font-semibold">
                  I agree to <a href="#" className="underline text-accent">terms & conditions</a> provided by the company. By providing my phone number, I agree to receive text messages from the business.
                </label>
              </div>
              <button
                type="submit"
                className="w-full bg-accent text-accent-foreground font-heading font-black text-[20px] uppercase py-4 rounded-md hover:brightness-110 transition-all tracking-wider"
              >
                SEND
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

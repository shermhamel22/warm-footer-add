import { CheckCircle2 } from "lucide-react";
import whyChooseImg from "@/assets/why-choose-us.jpg";

const benefits = [
  "Personalized Service",
  "Prompt and Reliable",
  "Competitive Pricing",
  "Customized Solutions",
];

const WhyChooseUsSection = () => {
  return (
    <section className="py-16 lg:py-24 bg-hero-dark">
      <div className="max-w-[1200px] mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="text-primary-foreground/60 font-heading font-extrabold text-[13px] uppercase tracking-[0.2em]">
                Why Choose Us
              </span>
              <div className="h-[2px] w-12 bg-primary-foreground/40" />
            </div>

            <h2 className="font-heading font-black text-primary-foreground text-[32px] lg:text-[42px] leading-tight mb-5 uppercase">
              QUALITY PAINTING WITH TOP TIER PROFESSIONALS
            </h2>

            <p className="text-primary-foreground/70 text-[15px] leading-relaxed mb-8 font-body max-w-[500px]">
              Our certified professionals deliver exceptional results every time,
              using premium materials and proven techniques for a flawless finish
              that stands the test of time.
            </p>

            <div className="grid grid-cols-2 gap-4">
              {benefits.map((benefit) => (
                <div
                  key={benefit}
                  className="flex items-center gap-3 bg-destructive/20 rounded-full px-5 py-3"
                >
                  <CheckCircle2 className="w-5 h-5 text-destructive flex-shrink-0" />
                  <span className="text-primary-foreground font-heading font-bold text-[13px]">
                    {benefit}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Image */}
          <div className="flex justify-center lg:justify-end">
            <div className="rounded-2xl overflow-hidden max-w-[480px] w-full shadow-2xl">
              <img
                src={whyChooseImg}
                alt="Professional painter at work"
                loading="lazy"
                width={443}
                height={590}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;

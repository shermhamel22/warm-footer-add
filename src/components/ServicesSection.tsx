import { Paintbrush, Home, Building2, PaintBucket } from "lucide-react";
import serviceInterior from "@/assets/service-interior.jpg";
import serviceExterior from "@/assets/service-exterior.jpg";
import serviceCommercial from "@/assets/service-commercial.jpg";
import serviceCabinet from "@/assets/service-cabinet.jpg";

const services = [
  {
    title: "Interior Painting",
    description: "For a clean, beautiful, and inviting interior, trust the experts at Super Painters. Contact us today.",
    image: serviceInterior,
    icon: Home,
  },
  {
    title: "Exterior Painting",
    description: "Protect and beautify your home's exterior with our professional painting services. Contact us today.",
    image: serviceExterior,
    icon: Paintbrush,
  },
  {
    title: "Commercial Painting",
    description: "For a clean, safe, and inviting commercial space, trust the experts at Super Painters. Contact us today.",
    image: serviceCommercial,
    icon: Building2,
  },
  {
    title: "Cabinet Refinishing",
    description: "We refinish and repaint your cabinets to look brand new. Contact us today.",
    image: serviceCabinet,
    icon: PaintBucket,
  },
];

const ServicesSection = () => {
  return (
    <section className="py-16 lg:py-24 bg-background" id="services">
      <div className="max-w-[1200px] mx-auto px-4 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-3">
            <div className="h-[2px] w-12 bg-primary" />
            <span className="text-primary font-heading font-extrabold text-[13px] uppercase tracking-[0.2em]">
              Our Best Services
            </span>
            <div className="h-[2px] w-12 bg-primary" />
          </div>
          <h2 className="font-heading font-black text-foreground text-[36px] lg:text-[46px] uppercase">
            Our Best Painting Services For You!
          </h2>
          {/* Toggle buttons */}
          <div className="flex justify-center gap-4 mt-6">
            <button className="bg-primary text-primary-foreground font-heading font-extrabold text-[14px] px-6 py-2.5 rounded-full">
              Residential Painting
            </button>
            <button className="border-2 border-foreground/20 text-foreground font-heading font-extrabold text-[14px] px-6 py-2.5 rounded-full hover:border-primary transition-colors">
              Commercial Painting
            </button>
          </div>
        </div>

        {/* Service Cards Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {services.map((service) => (
            <div
              key={service.title}
              className="bg-card rounded-2xl shadow-lg overflow-hidden flex flex-col sm:flex-row hover:shadow-xl transition-shadow"
            >
              <div className="sm:w-[200px] h-[180px] sm:h-auto flex-shrink-0 overflow-hidden rounded-t-2xl sm:rounded-t-none sm:rounded-l-2xl">
                <img
                  src={service.image}
                  alt={service.title}
                  loading="lazy"
                  width={640}
                  height={512}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6 flex flex-col justify-center">
                <div className="flex items-center gap-3 mb-2">
                  <service.icon className="w-5 h-5 text-primary" />
                  <h3 className="font-heading font-black text-foreground text-[22px]">
                    {service.title}
                  </h3>
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4 font-body">
                  {service.description}
                </p>
                <a
                  href="#"
                  className="inline-block border-2 border-foreground text-foreground font-heading font-extrabold text-[12px] uppercase tracking-wider px-5 py-2 rounded-sm hover:bg-foreground hover:text-background transition-colors w-fit"
                >
                  READ MORE
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;

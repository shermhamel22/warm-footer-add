import { Phone, PhoneCall } from "lucide-react";

const CTABanner = () => {
  return (
    <section className="relative py-16 overflow-hidden">
      {/* Red background with diagonal cuts */}
      <div className="absolute inset-0 bg-destructive">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-4 left-[10%] text-6xl">🎨</div>
          <div className="absolute top-8 left-[30%] text-4xl">🖌️</div>
          <div className="absolute bottom-4 left-[20%] text-5xl">🪣</div>
          <div className="absolute top-6 right-[25%] text-4xl">🎨</div>
          <div className="absolute bottom-6 right-[15%] text-5xl">🖌️</div>
          <div className="absolute top-10 right-[40%] text-3xl">🪣</div>
        </div>
      </div>

      <div className="absolute top-0 left-0 right-0 h-8 bg-background" style={{ clipPath: "polygon(0 0, 100% 0, 100% 0%, 0 100%)" }} />
      <div className="absolute bottom-0 left-0 right-0 h-8 bg-background" style={{ clipPath: "polygon(0 100%, 100% 0%, 100% 100%, 0 100%)" }} />

      <div className="relative max-w-[800px] mx-auto px-4 text-center">
        <p className="text-destructive-foreground/80 font-heading font-extrabold text-[13px] uppercase tracking-[0.2em] mb-2">
          CONTACT US
        </p>
        <h2 className="font-heading font-black text-destructive-foreground text-[32px] lg:text-[42px] uppercase mb-2">
          NEED A PAINTING SERVICE?
        </h2>
        <div className="flex items-center justify-center gap-2 mb-8">
          <div className="h-[2px] w-16 bg-destructive-foreground/40" />
          <div className="w-6 h-6 rounded-full border-2 border-destructive-foreground/40 flex items-center justify-center">
            <div className="w-2 h-2 rounded-full bg-destructive-foreground/40" />
          </div>
          <div className="h-[2px] w-16 bg-destructive-foreground/40" />
        </div>

        <div className="flex flex-wrap justify-center gap-4">
          <a
            href="#contact"
            className="border-2 border-destructive-foreground text-destructive-foreground font-heading font-extrabold text-[15px] uppercase tracking-wider px-8 py-3.5 flex items-center gap-2 hover:bg-destructive-foreground/10 transition-colors rounded-md"
          >
            <PhoneCall className="w-4 h-4" />
            REQUEST A CALL
          </a>
          <a
            href="tel:+17725392115"
            className="bg-accent text-accent-foreground font-heading font-black text-[15px] uppercase tracking-wider px-8 py-3.5 flex items-center gap-2 hover:brightness-110 transition-all rounded-md"
          >
            <Phone className="w-4 h-4" />
            (772) 539-2115
          </a>
        </div>
      </div>
    </section>
  );
};

export default CTABanner;

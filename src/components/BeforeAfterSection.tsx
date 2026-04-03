import { useState, useRef, useCallback } from "react";
import before1 from "@/assets/before-1.jpg";
import after1 from "@/assets/after-1.jpg";
import before2 from "@/assets/before-2.jpg";
import after2 from "@/assets/after-2.jpg";
import before3 from "@/assets/before-3.jpg";
import after3 from "@/assets/after-3.jpg";

const transformations = [
  { before: before1, after: after1, label: "Commercial Exterior" },
  { before: before2, after: after2, label: "Living Room" },
  { before: before3, after: after3, label: "Bedroom" },
];

const BeforeAfterCard = ({
  before,
  after,
  label,
}: {
  before: string;
  after: string;
  label: string;
}) => {
  const [sliderPos, setSliderPos] = useState(100); // 100 = fully showing "before"
  const [isTransformed, setIsTransformed] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<number | null>(null);

  const updateSlider = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const pct = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPos(pct);
  }, []);

  const handlePointerDown = (e: React.PointerEvent) => {
    setIsDragging(true);
    (e.target as HTMLElement).setPointerCapture(e.pointerId);
    updateSlider(e.clientX);
  };

  const handlePointerMove = (e: React.PointerEvent) => {
    if (!isDragging) return;
    updateSlider(e.clientX);
  };

  const handlePointerUp = () => {
    setIsDragging(false);
  };

  const animateSlider = (from: number, to: number) => {
    if (animationRef.current) cancelAnimationFrame(animationRef.current);
    const duration = 800;
    const start = performance.now();

    const step = (now: number) => {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      // Ease out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = from + (to - from) * eased;
      setSliderPos(current);
      if (progress < 1) {
        animationRef.current = requestAnimationFrame(step);
      }
    };
    animationRef.current = requestAnimationFrame(step);
  };

  const handleTransform = () => {
    if (!isTransformed) {
      animateSlider(sliderPos, 0);
      setIsTransformed(true);
    } else {
      animateSlider(sliderPos, 100);
      setIsTransformed(false);
    }
  };

  return (
    <div className="flex flex-col items-center gap-4">
      <div
        ref={containerRef}
        className="relative w-full aspect-[5/4] overflow-hidden rounded-lg cursor-col-resize select-none"
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
        onPointerLeave={handlePointerUp}
      >
        {/* After image (full underneath) */}
        <img
          src={after}
          alt={`${label} after`}
          className="absolute inset-0 w-full h-full object-cover"
          loading="lazy"
          draggable={false}
        />
        {/* Before image (clipped) */}
        <div
          className="absolute inset-0 overflow-hidden"
          style={{ width: `${sliderPos}%` }}
        >
          <img
            src={before}
            alt={`${label} before`}
            className="absolute inset-0 w-full h-full object-cover"
            style={{ width: containerRef.current ? `${containerRef.current.offsetWidth}px` : '100%', maxWidth: 'none' }}
            loading="lazy"
            draggable={false}
          />
        </div>
        {/* Slider line */}
        <div
          className="absolute top-0 bottom-0 w-[3px] bg-primary-foreground z-10"
          style={{ left: `${sliderPos}%`, transform: 'translateX(-50%)' }}
        />
        {/* Slider handle */}
        <div
          className="absolute top-1/2 z-20 w-9 h-9 rounded-full bg-primary-foreground border-2 border-accent flex items-center justify-center shadow-lg"
          style={{ left: `${sliderPos}%`, transform: 'translate(-50%, -50%)' }}
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M5 3L2 8L5 13" stroke="hsl(0 0% 8%)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M11 3L14 8L11 13" stroke="hsl(0 0% 8%)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
        {/* Labels */}
        <span className="absolute top-3 left-3 bg-hero-dark/70 text-primary-foreground text-xs font-heading font-bold px-3 py-1 rounded-md z-10">
          Original
        </span>
        <span className="absolute top-3 right-3 bg-hero-dark/70 text-primary-foreground text-xs font-heading font-bold px-3 py-1 rounded-md z-10">
          Retouched
        </span>
      </div>
      <p className="text-muted-foreground text-sm font-heading font-bold">{label}</p>
      <button
        onClick={handleTransform}
        className="bg-primary-foreground text-hero-dark font-heading font-black text-[14px] uppercase tracking-wider px-8 py-3 rounded-lg hover:bg-primary-foreground/90 transition-colors flex items-center gap-2"
      >
        {isTransformed ? "Reset" : "Transform"}
        <span className="text-accent text-lg">→</span>
      </button>
    </div>
  );
};

const BeforeAfterSection = () => {
  return (
    <section className="bg-hero-dark py-20">
      <div className="max-w-[1200px] mx-auto px-4 lg:px-8">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between mb-14 gap-6">
          <div className="flex-1">
            <div className="inline-block bg-hero-dark text-primary-foreground font-heading font-black text-[12px] uppercase tracking-[0.2em] px-6 py-2.5 mb-5 border border-primary-foreground/20">
              SEE THE DIFFERENCE FOR YOURSELF
            </div>
            <div className="flex items-center gap-5">
              <h2 className="font-heading font-black text-primary-foreground text-[52px] lg:text-[64px] uppercase whitespace-nowrap">
                TRANSFORMATIONS
              </h2>
              <div className="hidden lg:block h-[4px] flex-1 bg-accent" />
            </div>
          </div>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {transformations.map((t, idx) => (
            <BeforeAfterCard key={idx} {...t} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default BeforeAfterSection;

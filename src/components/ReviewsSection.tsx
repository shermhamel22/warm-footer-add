import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";
import googleLogo from "@/assets/google-logo.png";

const allReviews = [
  { name: "Brittany Orr", text: "Service was great! Called on Monday and they were able to come out on Tuesday and perform the work! Customer service was 10/10. Will recommend.", rating: 5 },
  { name: "Michael Scott", text: "Excellent services, can on time, help me with all my questions, told me what other options are excellent.", rating: 5 },
  { name: "Angela Lindley", text: "Excellence Job Well Done Real People if anyone needs a painter Elite Painting Solutions is the one thank you.", rating: 5 },
  { name: "Yukra Pinder", text: "Very professional. Exceptional work!", rating: 5 },
  { name: "Michael Norman", text: "David was able to quickly respond to our request and did a great job restoring the paint for our subdivision entrance.", rating: 5 },
  { name: "Prince & Pryce", text: "Amazing work! Very timely and prices right. Very courteous.", rating: 5 },
  { name: "Abraham Murphy", text: "We were in the dark for two of the hottest days this summer after the storm. They came out and fixed everything quickly.", rating: 5 },
  { name: "Shelly Scurry", text: "Elite Painting Solutions did a great job and was very quick to get out to our house.", rating: 5 },
  { name: "Andrea Hawes", text: "David did an excellent job with the painting work! Professional, knowledgeable, and warm personality. Highly recommend.", rating: 5 },
];

const REVIEWS_PER_PAGE = 3;

const ReviewsSection = () => {
  const [page, setPage] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [slideDirection, setSlideDirection] = useState<"left" | "right">("right");
  const totalPages = Math.ceil(allReviews.length / REVIEWS_PER_PAGE);
  const currentReviews = allReviews.slice(
    page * REVIEWS_PER_PAGE,
    page * REVIEWS_PER_PAGE + REVIEWS_PER_PAGE
  );

  const goToPage = (newPage: number) => {
    if (isAnimating || newPage === page) return;
    setSlideDirection(newPage > page ? "right" : "left");
    setIsAnimating(true);
    setTimeout(() => {
      setPage(newPage);
      setTimeout(() => setIsAnimating(false), 50);
    }, 300);
  };

  return (
    <section className="relative overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img src={heroBg} alt="Painting services background" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-hero-dark/80" />
      </div>

      {/* Top swirly S-curve wave */}
      <div className="absolute top-0 left-0 right-0">
        <svg viewBox="0 0 1440 160" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full" preserveAspectRatio="none" style={{ height: "120px" }}>
          <path d="M0 0H1440V40C1440 40 1380 120 1100 110C820 100 760 30 480 60C200 90 60 140 0 120V0Z" fill="hsl(0 0% 8%)" />
        </svg>
      </div>

      <div className="relative pt-32 pb-8">
        <div className="max-w-[1200px] mx-auto px-4 lg:px-8">
          {/* Header */}
          <div className="flex flex-col lg:flex-row lg:items-center justify-between mb-14 gap-6">
            <div className="flex-1">
              <div className="inline-block bg-hero-dark text-primary-foreground font-heading font-black text-[12px] uppercase tracking-[0.2em] px-6 py-2.5 mb-5 border border-primary-foreground/20">
                DISCOVER WHAT OUR CUSTOMERS HAVE TO SAY ABOUT US
              </div>
              <div className="flex items-center gap-5">
                <h2 className="font-heading font-black text-primary-foreground text-[52px] lg:text-[64px] uppercase whitespace-nowrap">
                  REVIEWS
                </h2>
                <div className="hidden lg:block h-[4px] flex-1 bg-accent" />
                <a
                  href="#contact"
                  className="hidden lg:flex bg-primary-foreground text-hero-dark font-heading font-black text-[15px] uppercase tracking-wider px-8 py-3.5 items-center gap-3 hover:bg-primary-foreground/90 transition-colors rounded-md flex-shrink-0"
                >
                  CONTACT US NOW
                  <span className="text-accent text-xl">→</span>
                </a>
              </div>
            </div>
            <a
              href="#contact"
              className="lg:hidden bg-primary-foreground text-hero-dark font-heading font-black text-[15px] uppercase tracking-wider px-8 py-3.5 flex items-center gap-3 hover:bg-primary-foreground/90 transition-colors rounded-md w-fit"
            >
              CONTACT US NOW
              <span className="text-accent text-xl">→</span>
            </a>
          </div>

          {/* Review Cards with slide animation */}
          <div className="relative overflow-hidden mb-12">
            <div
              className="grid md:grid-cols-3 gap-6"
              style={{
                transition: "transform 0.4s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.3s ease",
                transform: isAnimating
                  ? `translateX(${slideDirection === "right" ? "-30px" : "30px"})`
                  : "translateX(0)",
                opacity: isAnimating ? 0 : 1,
              }}
            >
              {currentReviews.map((review, idx) => (
                <div
                  key={`${page}-${idx}`}
                  className="bg-card rounded-xl p-7 flex flex-col min-h-[280px] shadow-lg"
                  style={{ height: "280px" }}
                >
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-5">
                      <span className="text-accent font-heading font-black text-[24px]">5</span>
                      <div className="flex gap-1">
                        {[...Array(5)].map((_, i) => (
                          <span key={i} className="text-star text-[24px]">★</span>
                        ))}
                      </div>
                    </div>
                    <p className="text-foreground text-[15px] leading-relaxed font-body line-clamp-5">
                      {review.text}
                    </p>
                  </div>
                  <div className="flex items-center justify-between mt-4 pt-4 border-t border-border">
                    <span className="text-muted-foreground text-sm font-heading font-bold">{review.name}</span>
                    <img src={googleLogo} alt="Google" className="w-6 h-6 object-contain" />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Pagination */}
          <div className="flex items-center justify-center gap-2 mb-12">
            <button
              onClick={() => goToPage(Math.max(0, page - 1))}
              disabled={page === 0 || isAnimating}
              aria-label="Previous reviews page"
              className="text-primary-foreground hover:text-accent disabled:opacity-30 transition-colors"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            {Array.from({ length: totalPages }).map((_, i) => (
              <button
                key={i}
                onClick={() => goToPage(i)}
                className={`w-9 h-9 rounded-sm font-heading font-black text-[16px] transition-colors ${
                  i === page
                    ? "bg-primary-foreground text-hero-dark"
                    : "text-primary-foreground/60 hover:text-primary-foreground"
                }`}
              >
                {i + 1}
              </button>
            ))}
            <button
              onClick={() => goToPage(Math.min(totalPages - 1, page + 1))}
              disabled={page === totalPages - 1 || isAnimating}
              className="text-primary-foreground hover:text-accent disabled:opacity-30 transition-colors"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>

          {/* Review Us CTA - black box with white outline */}
          <div className="flex justify-center">
            <div className="bg-hero-dark rounded-xl px-14 py-10 text-center border-[3px] border-primary-foreground">
              <h3 className="font-heading font-black text-primary-foreground text-[34px] lg:text-[42px] uppercase mb-3">
                REVIEW US ON GOOGLE
              </h3>
              <div className="flex justify-center gap-1.5 mb-6">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-star text-[32px]">★</span>
                ))}
              </div>
              <a
                href="#"
                className="inline-block bg-accent text-accent-foreground font-heading font-black text-[16px] uppercase tracking-wider px-10 py-4 hover:brightness-110 transition-all rounded-md"
              >
                LEAVE US A REVIEW
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom swirly S-curve wave */}
      <div className="relative">
        <svg viewBox="0 0 1440 160" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full block" preserveAspectRatio="none" style={{ height: "120px" }}>
          <path d="M0 120C60 140 200 70 480 100C760 130 820 60 1100 50C1380 40 1440 120 1440 120V160H0V120Z" fill="hsl(0 0% 8%)" />
        </svg>
      </div>
    </section>
  );
};

export default ReviewsSection;

import { useState } from "react";
import { ChevronDown, Phone, Menu, X } from "lucide-react";
import logo from "@/assets/logo.png";

const navItems = [
  { label: "HOME", href: "#" },
  {
    label: "SERVICES",
    href: "#services",
    dropdown: [
      "Interior Painting",
      "Exterior Painting",
      "Commercial Painting",
      "Cabinet Refinishing",
    ],
  },
  { label: "GALLERY", href: "#gallery" },
  {
    label: "SERVICE AREAS",
    href: "#areas",
    dropdown: [
      "Vero Beach",
      "Sebastian",
      "Fort Pierce",
      "Port St. Lucie",
      "Example #4",
    ],
  },
  { label: "BLOG", href: "#blog" },
  { label: "CONTACT", href: "#contact" },
];

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  return (
    <nav className="bg-nav-dark sticky top-0 z-50">
      <div className="max-w-[1400px] mx-auto flex items-center justify-between px-4 lg:px-8 h-[75px]">
        {/* Logo */}
        <a href="#" className="flex-shrink-0">
          <img src={logo} alt="Elite Painting Solutions" width={110} height={110} className="object-contain" />
        </a>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-1">
          {navItems.map((item) => (
            <div
              key={item.label}
              className="relative group"
              onMouseEnter={() => item.dropdown && setOpenDropdown(item.label)}
              onMouseLeave={() => setOpenDropdown(null)}
            >
              <a
                href={item.href}
                className="text-primary-foreground font-heading font-extrabold text-[14px] tracking-wider px-4 py-5 flex items-center gap-1 hover:text-accent transition-colors"
              >
                {item.label}
                {item.dropdown && <ChevronDown className="w-3.5 h-3.5" />}
              </a>
              {item.dropdown && openDropdown === item.label && (
                <div className="absolute top-full left-0 bg-nav-dark min-w-[220px] py-2 shadow-xl rounded-b-md">
                  {item.dropdown.map((sub) => (
                    <a
                      key={sub}
                      href="#"
                      className="block px-5 py-2.5 text-primary-foreground text-sm font-heading font-bold hover:bg-accent/20 hover:text-accent transition-colors"
                    >
                      {sub}
                    </a>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* CTA Buttons */}
        <div className="hidden lg:flex items-center gap-3">
          <a
            href="#quote"
            className="bg-destructive text-destructive-foreground font-heading font-black text-[14px] tracking-wider px-6 py-2.5 rounded-md hover:brightness-110 transition-all"
          >
            GET FREE QUOTE
          </a>
          <a
            href="tel:+17725392115"
            className="border-2 border-primary-foreground text-primary-foreground font-heading font-extrabold text-[14px] tracking-wider px-5 py-2 flex items-center gap-2 hover:bg-primary-foreground/10 transition-colors rounded-md"
          >
            <Phone className="w-4 h-4" />
            (772) 539-2115
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          className="lg:hidden text-primary-foreground"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? "Close navigation menu" : "Open navigation menu"}
        >
          {mobileOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-nav-dark border-t border-primary-foreground/10 px-4 pb-6">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="block py-3 text-primary-foreground font-heading font-extrabold text-[14px] tracking-wider border-b border-primary-foreground/10"
            >
              {item.label}
            </a>
          ))}
          <div className="mt-4 flex flex-col gap-3">
            <a href="#quote" className="bg-destructive text-destructive-foreground font-heading font-black text-center py-3 rounded-md">
              GET FREE QUOTE
            </a>
            <a href="tel:+17725392115" className="border-2 border-primary-foreground text-primary-foreground font-heading font-extrabold text-center py-3 flex items-center justify-center gap-2 rounded-md">
              <Phone className="w-4 h-4" /> (772) 539-2115
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

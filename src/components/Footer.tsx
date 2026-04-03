import { MapPin, Phone, Mail, Clock, Facebook, Instagram, Youtube } from "lucide-react";
import logo from "@/assets/logo.png";

const paintingServices = [
  { label: "Interior Painting", href: "#services" },
  { label: "Exterior Painting", href: "#services" },
  { label: "Commercial Painting", href: "#services" },
  { label: "Cabinet Refinishing", href: "#services" },
  { label: "Pressure Washing", href: "#services" },
  { label: "Drywall Repair", href: "#services" },
  { label: "Color Consultation", href: "#services" },
  { label: "Staining & Sealing", href: "#services" },
];

const quickLinks = [
  { label: "Home", href: "#" },
  { label: "About Us", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Service Areas", href: "#areas" },
  { label: "Gallery", href: "#gallery" },
  { label: "Reviews", href: "#reviews" },
  { label: "Blog", href: "#blog" },
  { label: "Contact Us", href: "#contact" },
];

const Footer = () => {
  return (
    <footer className="relative">
      {/* Red top stripe */}
      <div className="h-2 bg-footer-accent" />

      {/* Main footer */}
      <div className="relative bg-footer-dark overflow-hidden">
        {/* Background overlay image effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-footer-dark/95 via-footer-dark/90 to-footer-dark/95" />

        <div className="relative max-w-[1400px] mx-auto px-4 lg:px-8 py-14">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
            {/* Column 1 - Logo & Social */}
            <div className="flex flex-col items-start">
              <img src={logo} alt="Vero Beach Painting" className="h-40 mb-4" />
              <p className="text-footer-foreground text-sm italic mb-6 font-body mt-2">
                Quality painting, every time.
              </p>
              <div className="flex gap-3 mt-1">
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-footer-foreground/20 flex items-center justify-center hover:bg-footer-accent transition-colors"
                >
                  <Facebook className="w-5 h-5 text-footer-heading" />
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-footer-foreground/20 flex items-center justify-center hover:bg-footer-accent transition-colors"
                >
                  <Instagram className="w-5 h-5 text-footer-heading" />
                </a>
                <a
                  href="https://youtube.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-footer-foreground/20 flex items-center justify-center hover:bg-footer-accent transition-colors"
                >
                  <Youtube className="w-5 h-5 text-footer-heading" />
                </a>
              </div>
            </div>

            {/* Column 2 - Services */}
            <div>
              <h3 className="text-footer-heading font-heading font-black text-lg uppercase mb-5 border-b-2 border-footer-accent pb-2 inline-block">
                Painting Services
              </h3>
              <ul className="space-y-2">
                {paintingServices.map((item) => (
                  <li key={item.label}>
                    <a
                      href={item.href}
                      className="text-footer-foreground text-sm hover:text-footer-link-hover transition-colors font-body"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 3 - Quick Links */}
            <div>
              <h3 className="text-footer-heading font-heading font-black text-lg uppercase mb-5 border-b-2 border-footer-accent pb-2 inline-block">
                Quick Links
              </h3>
              <ul className="space-y-2">
                {quickLinks.map((item) => (
                  <li key={item.label}>
                    <a
                      href={item.href}
                      className="text-footer-foreground text-sm hover:text-footer-link-hover transition-colors font-body"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 4 - Contact Info */}
            <div>
              <h3 className="text-footer-heading font-heading font-black text-lg uppercase mb-5 border-b-2 border-footer-accent pb-2 inline-block">
                Contact Us
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-accent flex items-center justify-center shrink-0 mt-0.5">
                    <MapPin className="w-4 h-4 text-accent-foreground" />
                  </div>
                  <a
                    href="https://maps.google.com/?q=Vero+Beach+FL"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-footer-foreground text-sm hover:text-footer-link-hover transition-colors font-body"
                  >
                    Vero Beach, Florida
                  </a>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-accent flex items-center justify-center shrink-0 mt-0.5">
                    <Phone className="w-4 h-4 text-accent-foreground" />
                  </div>
                  <a
                    href="tel:+17725551234"
                    className="text-footer-foreground text-sm hover:text-footer-link-hover transition-colors font-body"
                  >
                    (772) 555-1234
                  </a>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-accent flex items-center justify-center shrink-0 mt-0.5">
                    <Mail className="w-4 h-4 text-accent-foreground" />
                  </div>
                  <a
                    href="mailto:info@verobeachpainting.com"
                    className="text-footer-foreground text-sm hover:text-footer-link-hover transition-colors font-body"
                  >
                    info@verobeachpainting.com
                  </a>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-accent flex items-center justify-center shrink-0 mt-0.5">
                    <Clock className="w-4 h-4 text-accent-foreground" />
                  </div>
                  <span className="text-footer-foreground text-sm font-body">
                    Mon – Sat 7AM–6PM
                  </span>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="mt-12 pt-6 border-t border-footer-foreground/20 text-center">
            <p className="text-footer-foreground/60 text-xs font-body">
              © {new Date().getFullYear()} Vero Beach Painting. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

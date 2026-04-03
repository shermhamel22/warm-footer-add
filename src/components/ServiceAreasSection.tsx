import { MapPin } from "lucide-react";

const cities = [
  "Vero Beach",
  "Sebastian",
  "Fort Pierce",
  "Port St. Lucie",
  "Example #4",
  "Example #5",
];

const areas = [
  "Wabasso Beach",
  "Hutchinson Island",
  "Oslo",
  "Florida Ridge",
  "Orchid",
  "North Beach",
  "Roseland",
  "Sebastian",
  "South Beach",
  "Vero Beach",
  "Vero Beach South",
  "Wabasso",
  "Winter Beach",
  "Four Corners",
  "Fort Pierce",
  "Port St. Lucie",
];

const counties = [
  "Indian River County",
  "St. Lucie County",
  "Example County #4",
  "Example County #5",
];

const ServiceAreasSection = () => {
  return (
    <section className="py-16 lg:py-24 bg-hero-dark" id="areas">
      <div className="max-w-[1200px] mx-auto px-4 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Cities */}
          <div className="lg:w-[220px] flex-shrink-0 space-y-6">
            <div className="bg-destructive rounded-lg p-6">
              <h3 className="font-heading font-black text-destructive-foreground text-[17px] uppercase mb-4 tracking-wider">
                CITIES WE SERVE
              </h3>
              <ul className="space-y-2">
                {cities.map((city) => (
                  <li key={city} className="flex items-center gap-2">
                    <MapPin className="w-3.5 h-3.5 text-accent flex-shrink-0" />
                    <a href="#" className="text-destructive-foreground font-heading font-extrabold text-[13px] uppercase hover:text-accent transition-colors">
                      {city}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-primary rounded-lg p-6">
              <h3 className="font-heading font-black text-primary-foreground text-[17px] uppercase mb-4 tracking-wider">
                COUNTIES
              </h3>
              <ul className="space-y-2">
                {counties.map((county) => (
                  <li key={county} className="flex items-center gap-2">
                    <MapPin className="w-3.5 h-3.5 text-accent flex-shrink-0" />
                    <a href="#" className="text-primary-foreground font-heading font-extrabold text-[13px] uppercase hover:text-accent transition-colors">
                      {county}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Areas Served */}
          <div className="flex-1">
            <h3 className="font-heading font-black text-foreground text-[28px] uppercase mb-6">
              AREAS WE SERVE
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-x-8 gap-y-2.5">
              {areas.map((area) => (
                <div key={area} className="flex items-center gap-2">
                  <MapPin className="w-3.5 h-3.5 text-destructive flex-shrink-0" />
                  <a href="#" className="text-foreground text-sm hover:text-primary transition-colors font-body">
                    {area}
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Interactive Map - Vero Beach, FL */}
        <div className="mt-12 rounded-lg overflow-hidden border border-border h-[350px]">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d113987.43213985595!2d-80.47741045!3d27.6386434!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88d901988b4e9b2d%3A0x5e6124ef28a8b868!2sVero%20Beach%2C%20FL!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Vero Beach Service Area Map"
          />
        </div>

        <div className="flex justify-center mt-8">
          <a href="#" className="bg-accent text-accent-foreground font-heading font-black text-[15px] uppercase tracking-wider px-8 py-3 hover:brightness-110 transition-all rounded-md">
            SEE ALL LOCATIONS
          </a>
        </div>
      </div>
    </section>
  );
};

export default ServiceAreasSection;

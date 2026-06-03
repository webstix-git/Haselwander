"use client";

import Link from "next/link";
import { Phone, Mail, MapPin } from "lucide-react";
import logo from "@/assets/haselwander-logo.png";
import { imageSrc } from "@/lib/image";

const footerLinks = [
  {
    title: "Properties",
    links: [
      { label: "Residential Land", href: "/residential" },
      { label: "Commercial", href: "/commercial" },
      { label: "Office Space", href: "/office-space" },
      { label: "Investment", href: "/investment" },
    ],
  },
  {
    title: "Residential",
    links: [
      { label: "Princeton Valley", href: "/residential/princeton-valley" },
      { label: "Woodhaven", href: "/residential/woodhaven" },
      { label: "Peterson", href: "/residential/peterson" },
      { label: "Hillcrest", href: "/residential/hillcrest" },
      { label: "Hwy P", href: "/residential/hwy-p" },
      { label: "Wakanda Shores", href: "/residential/wakanda-shores" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About Us", href: "/about" },
      { label: "Our Agents", href: "/agents" },
      { label: "Services", href: "/services" },
      { label: "Gallery", href: "/gallery" },
      { label: "Contact Us", href: "/contact" },
    ],
  },
];

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground border-t border-primary-foreground/10">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Main Footer */}
        <div className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1fr] gap-10">
          {/* Brand Column */}
          <div>
            <Link href="/" className="inline-block mb-4">
              <img
                src={imageSrc(logo)}
                alt="Haselwander Real Estate LLC"
                className="h-[100px] w-auto mix-blend-screen"
              />
            </Link>
            <p className="text-primary-foreground/70 text-sm font-body leading-relaxed mb-6">
              Serving the Chippewa Valley with integrity and expertise for over 60 years.
            </p>
            <div className="space-y-3">
              <a
                href="tel:715-831-7077"
                className="flex items-center gap-2 text-sm font-body text-primary-foreground/80 hover:text-gold transition-colors duration-300"
              >
                <Phone className="h-4 w-4 text-gold" />
                715-831-7077
              </a>
              <a
                href="mailto:info@haselwanderrealestatellc.com"
                className="flex items-center gap-2 text-sm font-body text-primary-foreground/80 hover:text-gold transition-colors duration-300"
              >
                <Mail className="h-4 w-4 text-gold shrink-0" />
                info@haselwanderrealestatellc.com
              </a>
              <div className="flex items-start gap-2 text-sm font-body text-primary-foreground/80">
                <MapPin className="h-4 w-4 text-gold shrink-0 mt-0.5" />
                <span>3615 N Hastings Way, Suite 200<br />Eau Claire, WI 54703</span>
              </div>
            </div>
          </div>

          {/* Link Columns */}
          {footerLinks.map((col) => (
            <div key={col.title}>
              <h4 className="font-body text-sm font-semibold uppercase tracking-wider text-gold mb-4">
                {col.title}
              </h4>
              <ul className="space-y-2.5">
                {col.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm font-body text-primary-foreground/70 hover:text-primary-foreground transition-colors duration-200"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary-foreground/10 py-6 flex items-center justify-center">
          <p className="text-xs font-body text-primary-foreground/50">
            © {new Date().getFullYear()} Haselwander Real Estate LLC. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

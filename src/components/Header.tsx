"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronDown, Phone } from "lucide-react";
import logo from "@/assets/haselwander-logo.png";
import { imageSrc } from "@/lib/image";
import { cn } from "@/lib/utils";

interface NavItem {
  label: string;
  href: string;
  children?: { label: string; href: string }[];
}

const navItems: NavItem[] = [
  { label: "Real Estate", href: "/services" },
  {
    label: "Residential",
    href: "/residential",
    children: [
      { label: "Princeton Valley Residential Development", href: "/residential/princeton-valley" },
      { label: "Woodhaven", href: "/residential/woodhaven" },
      { label: "Peterson", href: "/residential/peterson" },
      { label: "Hillcrest", href: "/residential/hillcrest" },
      { label: "Hwy P Lake Hallie - Grand Meadows", href: "/residential/hwy-p" },
      { label: "Wakanda Shores", href: "/residential/wakanda-shores" },
    ],
  },
  {
    label: "Commercial",
    href: "/commercial",
    children: [
      { label: "Melby", href: "/commercial/melby" },
    ],
  },
  {
    label: "Office Space",
    href: "/office-space",
    children: [
      { label: "3603 N Hastings Way", href: "/office-space/3603-n-hastings-way" },
      { label: "3615 N Hastings Way", href: "/office-space/3615-n-hastings-way" },
    ],
  },
  {
    label: "Investment",
    href: "/investment",
  },
  { label: "About", href: "/about" },
  
  
];

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setOpenDropdown(null);
  }, [pathname]);

  const isActive = (href: string) =>
    pathname === href || pathname.startsWith(href + "/");

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 py-2 min-[1140px]:max-[1250px]:py-2 min-[1251px]:max-[1350px]:py-1 transition-all duration-300",
        scrolled ? "bg-background/95 backdrop-blur-md shadow-card" : "bg-transparent"
      )}
    >
      <div className="container mx-auto flex items-center px-4 lg:px-8">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 shrink-0">
          <img
            src={imageSrc(logo)}
            alt="Haselwander Real Estate LLC"
            className={cn(
              "h-[100px] w-auto min-[1140px]:max-[1250px]:h-[75px] min-[1251px]:max-[1350px]:h-[80px]",
              !scrolled && "mix-blend-screen"
            )}
          />
        </Link>

        {/* Desktop Nav + CTA — right aligned */}
        <div className="hidden lg:flex items-center gap-3 ml-auto">
          <nav className="flex items-center gap-0.5">
            {navItems.map((item) => (
              <div
                key={item.label}
                className="relative group"
                onMouseEnter={() => item.children && setOpenDropdown(item.label)}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                <Link
                  href={item.href}
                  className={cn(
                    "flex items-center gap-1 px-2.5 py-2 text-base min-[1140px]:max-[1250px]:text-[15px] font-medium font-body transition-colors duration-300",
                    isActive(item.href)
                      ? "text-primary border-b-2 border-primary"
                      : scrolled
                        ? "text-foreground hover:text-primary"
                        : "text-foreground/80 hover:text-primary"
                  )}
                >
                  {item.label}
                  {item.children && <ChevronDown className="h-3 w-3" />}
                </Link>

                {/* Dropdown */}
                {item.children && openDropdown === item.label && (
                  <div className="absolute top-full right-0 pt-1 min-w-[220px]">
                    <div className="bg-background rounded-lg shadow-hover border border-border py-2">
                      {item.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          className={`block px-4 py-2.5 text-sm font-body transition-colors duration-200 ${
                            isActive(child.href)
                              ? "text-primary bg-muted"
                              : "text-foreground hover:text-primary hover:bg-muted"
                          }`}
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </nav>

          <Link
            href="/contact"
            className="inline-flex items-center gap-2 shrink-0 px-4 min-[1140px]:max-[1250px]:px-[10px] py-2 rounded-md border border-primary bg-primary text-primary-foreground text-sm min-[1140px]:max-[1250px]:text-[15px] font-semibold font-body hover:bg-background hover:text-primary transition-colors duration-300"
          >
            Get in Touch
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="lg:hidden p-2 text-foreground ml-auto"
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="lg:hidden fixed inset-0 top-0 bg-background z-40 overflow-y-auto">
          <div className="flex items-center justify-between p-4 border-b border-border">
            <Link href="/" className="flex items-center gap-3">
              <img
                src={imageSrc(logo)}
                alt="Haselwander Real Estate LLC"
                className="h-[100px] w-auto"
              />
            </Link>
            <button onClick={() => setMobileOpen(false)} className="p-2" aria-label="Close menu">
              <X className="h-6 w-6" />
            </button>
          </div>
          <nav className="p-4 space-y-1">
            {navItems.map((item) => (
              <div key={item.label}>
                <div className="flex items-center justify-between">
                  <Link
                    href={item.href}
                    className={`block py-3 px-3 text-base font-medium font-body transition-colors ${
                      isActive(item.href) ? "text-primary" : "text-foreground"
                    }`}
                  >
                    {item.label}
                  </Link>
                  {item.children && (
                    <button
                      onClick={() =>
                        setOpenDropdown(openDropdown === item.label ? null : item.label)
                      }
                      className="p-3"
                    >
                      <ChevronDown
                        className={`h-4 w-4 transition-transform ${
                          openDropdown === item.label ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                  )}
                </div>
                {item.children && openDropdown === item.label && (
                  <div className="pl-6 space-y-1">
                    {item.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        className={`block py-2 px-3 text-sm font-body ${
                          isActive(child.href) ? "text-primary" : "text-muted-foreground"
                        }`}
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <div className="pt-4 border-t border-border">
              <a
                href="tel:715-831-7077"
                className="flex items-center gap-2 py-3 px-3 text-base font-semibold font-body text-primary"
              >
                <Phone className="h-5 w-5" />
                715-831-7077
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;

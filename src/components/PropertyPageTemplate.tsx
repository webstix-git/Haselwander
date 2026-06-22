"use client";

import Link from "next/link";
import { MapPin, ArrowRight, FileText, ExternalLink } from "lucide-react";
import FadeInSection from "./FadeInSection";
import { Button } from "./ui/button";

interface PropertyDocument {
  title: string;
  href: string;
}

interface PropertyPageTemplateProps {
  title: string;
  subtitle: string;
  status: "Developed" | "To Be Developed";
  description: string;
  location?: string;
  features?: string[];
  documents?: PropertyDocument[];
  parentLink: { label: string; href: string };
}

const PropertyPageTemplate = ({
  title,
  subtitle,
  status,
  description,
  location,
  features,
  documents,
  parentLink,
}: PropertyPageTemplateProps) => {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-deep text-deep-foreground py-24 lg:py-32">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=1920&q=80')] bg-cover bg-center opacity-20" />
        <div className="container mx-auto px-4 lg:px-8 relative">
          <FadeInSection>
            <span className={`inline-block px-3 py-1 text-xs font-body font-semibold uppercase tracking-wider rounded-sm mb-4 ${
              status === "Developed" ? "bg-success/20 text-success" : "bg-gold/20 text-gold-dark"
            }`}>
              {status}
            </span>
            <h1 className="font-heading text-4xl lg:text-5xl font-bold mb-4">{title}</h1>
            <p className="font-body text-lg text-deep-foreground/80 max-w-2xl">{subtitle}</p>
          </FadeInSection>
        </div>
      </section>

      {/* Breadcrumbs */}
      <div className="bg-surface border-b border-border">
        <div className="container mx-auto px-4 lg:px-8">
          <nav className="flex items-center gap-2 text-base font-body text-muted-foreground py-3">
            <Link href="/" className="hover:text-foreground transition-colors">Home</Link>
            <span>/</span>
            <Link href={parentLink.href} className="hover:text-foreground transition-colors">{parentLink.label}</Link>
            <span>/</span>
            <span className="text-primary font-medium">{title}</span>
          </nav>
        </div>
      </div>

      {/* Content */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2 space-y-8">
              <FadeInSection>
                <h2 className="font-heading text-2xl font-semibold text-foreground mb-4">About This Property</h2>
                <p className="font-body text-muted-foreground leading-relaxed">{description}</p>
              </FadeInSection>

              {features && (
                <FadeInSection delay={100}>
                  <h3 className="font-heading text-xl font-semibold text-foreground mb-4">Key Features</h3>
                  <ul className="grid sm:grid-cols-2 gap-3">
                    {features.map((f) => (
                      <li key={f} className="flex items-center gap-2 text-base font-body text-muted-foreground">
                        <span className="h-1.5 w-1.5 rounded-full bg-primary shrink-0" />
                        {f}
                      </li>
                    ))}
                  </ul>
                </FadeInSection>
              )}

              {documents && documents.length > 0 && (
                <FadeInSection delay={150}>
                  <h3 className="font-heading text-xl font-semibold text-foreground mb-4">Property Documents</h3>
                  <div className="flex flex-wrap gap-3">
                    {documents.map((doc) => (
                      <Button key={doc.href} asChild variant="outline">
                        <a href={doc.href} target="_blank" rel="noopener noreferrer">
                          <FileText className="h-4 w-4" />
                          {doc.title}
                          <ExternalLink className="h-4 w-4" />
                        </a>
                      </Button>
                    ))}
                  </div>
                </FadeInSection>
              )}

              {/* Gallery Placeholder */}
              <FadeInSection delay={200}>
                <h3 className="font-heading text-xl font-semibold text-foreground mb-4">Gallery</h3>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {[1, 2, 3, 4, 5, 6].map((i) => (
                    <div key={i} className="aspect-[4/3] bg-muted rounded-lg flex items-center justify-center">
                      <span className="text-base font-body text-muted-foreground">Photo {i}</span>
                    </div>
                  ))}
                </div>
              </FadeInSection>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              <FadeInSection delay={150}>
                <div className="bg-surface rounded-lg p-6 shadow-card">
                  {location && (
                    <div className="flex items-start gap-2 mb-4">
                      <MapPin className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <p className="text-base font-body text-foreground">{location}</p>
                    </div>
                  )}
                  <div className="border-t border-border pt-4 mt-4">
                    <p className="text-base font-body text-muted-foreground mb-4">
                      Interested in this property? Contact our team for more information.
                    </p>
                    <Button asChild className="w-full">
                      <Link href="/contact">
                        Inquire Now <ArrowRight className="h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                </div>
              </FadeInSection>

              <FadeInSection delay={250}>
                <div className="bg-surface rounded-lg p-6 shadow-card">
                  <h4 className="font-heading text-lg font-semibold text-foreground mb-3">Need Guidance?</h4>
                  <p className="text-base font-body text-muted-foreground mb-4">
                    Our experienced agents are here to help you navigate every step.
                  </p>
                  <Button asChild variant="outline" className="w-full">
                    <Link href="/agents">Meet Our Agents</Link>
                  </Button>
                </div>
              </FadeInSection>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default PropertyPageTemplate;

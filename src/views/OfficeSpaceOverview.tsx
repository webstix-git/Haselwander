"use client";

import Link from "next/link";
import { ArrowRight, Building2 } from "lucide-react";
import Layout from "@/components/Layout";
import FadeInSection from "@/components/FadeInSection";
import { Button } from "@/components/ui/button";

const buildings = [
  {
    name: "3603 N Hastings Way",
    href: "/office-space/3603-n-hastings-way",
    desc: "Professional office space available for lease in a well-maintained commercial building.",
  },
  {
    name: "3615 N Hastings Way",
    href: "/office-space/3615-n-hastings-way",
    desc: "Suite 200 office space in a premier commercial location with excellent visibility.",
  },
];

const OfficeSpaceOverview = () => {
  return (
    <Layout>
      <section className="relative bg-deep text-deep-foreground py-24 lg:py-32">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1497366216548-37526070297c?w=1920&q=80')] bg-cover bg-center opacity-15" />
        <div className="container mx-auto px-4 lg:px-8 relative">
          <FadeInSection>
            <div className="flex items-center gap-3 mb-6">
              <span className="h-px w-12 bg-gold" />
              <span className="text-gold text-sm font-body font-semibold uppercase tracking-[0.2em]">Office Space</span>
            </div>
            <h1 className="font-heading text-4xl lg:text-5xl font-bold mb-4">Commercial Office Space</h1>
            <p className="font-body text-lg text-deep-foreground/80 max-w-2xl">
              Professional office space for lease in Eau Claire, WI.
            </p>
          </FadeInSection>
        </div>
      </section>

      <div className="bg-surface border-b border-border">
        <div className="container mx-auto px-4 lg:px-8">
          <nav className="flex items-center gap-2 text-base font-body text-muted-foreground py-3">
            <Link href="/" className="hover:text-foreground transition-colors">Home</Link>
            <span>/</span>
            <span className="text-primary font-medium">Office Space</span>
          </nav>
        </div>
      </div>

      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-4 lg:px-8">
          <FadeInSection>
            <h2 className="font-heading text-3xl font-bold text-foreground mb-4">Available Locations</h2>
            <p className="font-body text-muted-foreground max-w-2xl mb-12">
              Our N Hastings Way properties offer professional office environments with quality amenities and convenient access.
            </p>
          </FadeInSection>

          <div className="grid md:grid-cols-2 gap-8">
            {buildings.map((b, i) => (
              <FadeInSection key={b.name} delay={i * 150}>
                <Link href={b.href} className="group block bg-background rounded-lg overflow-hidden shadow-card hover:shadow-hover transition-all duration-300">
                  <div className="aspect-[16/10] bg-muted flex items-center justify-center">
                    <Building2 className="h-12 w-12 text-muted-foreground/30" />
                  </div>
                  <div className="p-6">
                    <h3 className="font-heading text-[22px] font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">{b.name}</h3>
                    <p className="font-body text-base text-muted-foreground mb-4">{b.desc}</p>
                    <span className="inline-flex items-center gap-1 text-primary text-base font-body font-medium group-hover:gap-2 transition-all">
                      View Details <ArrowRight className="h-4 w-4" />
                    </span>
                  </div>
                </Link>
              </FadeInSection>
            ))}
          </div>

          <FadeInSection delay={400}>
            <div className="text-center mt-16">
              <Button asChild className="bg-primary hover:bg-primary/90 font-body">
                <Link href="/contact">Inquire About Office Space <ArrowRight className="h-4 w-4" /></Link>
              </Button>
            </div>
          </FadeInSection>
        </div>
      </section>
    </Layout>
  );
};

export default OfficeSpaceOverview;

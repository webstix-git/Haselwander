"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Layout from "@/components/Layout";
import FadeInSection from "@/components/FadeInSection";
import { Button } from "@/components/ui/button";

const developments = [
  { name: "Princeton Valley", status: "Developed", href: "/residential/princeton-valley", desc: "An established residential development featuring quality single-family home lots." },
  { name: "Woodhaven", status: "To Be Developed", href: "/residential/woodhaven", desc: "Upcoming residential development with premium lot opportunities." },
  { name: "Peterson", status: "To Be Developed", href: "/residential/peterson", desc: "Future residential lots in a sought-after location." },
  { name: "Hillcrest", status: "To Be Developed", href: "/residential/hillcrest", desc: "Planned development offering elevated views and spacious lots." },
  { name: "Hwy P", status: "To Be Developed", href: "/residential/hwy-p", desc: "Conveniently located residential lots along the Hwy P corridor." },
  { name: "Wakanda Shores", status: "To Be Developed", href: "/residential/wakanda-shores", desc: "Waterfront residential lots with exceptional natural surroundings." },
];

const ResidentialOverview = () => {
  return (
    <Layout>
      <section className="relative bg-deep text-deep-foreground py-24 lg:py-32">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=1920&q=80')] bg-cover bg-center opacity-15" />
        <div className="container mx-auto px-4 lg:px-8 relative">
          <FadeInSection>
            <div className="flex items-center gap-3 mb-6">
              <span className="h-px w-12 bg-gold" />
              <span className="text-gold text-sm font-body font-semibold uppercase tracking-[0.2em]">Residential</span>
            </div>
            <h1 className="font-heading text-4xl lg:text-5xl font-bold mb-4">Residential Land &amp; Lots</h1>
            <p className="font-body text-lg text-deep-foreground/80 max-w-2xl">
              Single-family home lots in premier developments across the Chippewa Valley.
            </p>
          </FadeInSection>
        </div>
      </section>

      {/* Breadcrumbs */}
      <div className="bg-surface border-b border-border">
        <div className="container mx-auto px-4 lg:px-8">
          <nav className="flex items-center gap-2 text-base font-body text-muted-foreground py-3">
            <Link href="/" className="hover:text-foreground transition-colors">Home</Link>
            <span>/</span>
            <span className="text-primary font-medium">Residential</span>
          </nav>
        </div>
      </div>

      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-4 lg:px-8">
          <FadeInSection>
            <h2 className="font-heading text-3xl font-bold text-foreground mb-12">Our Developments</h2>
          </FadeInSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {developments.map((d, i) => (
              <FadeInSection key={d.name} delay={i * 80}>
                <Link href={d.href} className="group block bg-background rounded-lg overflow-hidden shadow-card hover:shadow-hover transition-all duration-300">
                  <div className="aspect-[16/10] bg-muted flex items-center justify-center">
                    <span className="text-base font-body text-muted-foreground">Property Photo</span>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="font-heading text-[22px] font-semibold text-foreground group-hover:text-primary transition-colors">{d.name}</h3>
                      <span className={`text-xs font-body font-semibold px-2 py-0.5 rounded-sm ${
                        d.status === "Developed" ? "bg-success/10 text-success" : "bg-gold/10 text-gold-dark"
                      }`}>{d.status}</span>
                    </div>
                    <p className="font-body text-base text-muted-foreground mb-3">{d.desc}</p>
                    <span className="inline-flex items-center gap-1 text-primary text-base font-body font-medium group-hover:gap-2 transition-all">
                      View Details <ArrowRight className="h-4 w-4" />
                    </span>
                  </div>
                </Link>
              </FadeInSection>
            ))}
          </div>

          <FadeInSection delay={500}>
            <div className="text-center mt-16">
              <Button asChild className="bg-primary hover:bg-primary/90 font-body">
                <Link href="/contact">Inquire About Residential Lots <ArrowRight className="h-4 w-4" /></Link>
              </Button>
            </div>
          </FadeInSection>
        </div>
      </section>
    </Layout>
  );
};

export default ResidentialOverview;

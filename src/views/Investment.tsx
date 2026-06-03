"use client";

import Link from "next/link";
import { ArrowRight, TrendingUp } from "lucide-react";
import Layout from "@/components/Layout";
import FadeInSection from "@/components/FadeInSection";
import { Button } from "@/components/ui/button";

const Investment = () => {
  return (
    <Layout>
      <section className="relative bg-deep text-deep-foreground py-24 lg:py-32">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=1920&q=80')] bg-cover bg-center opacity-15" />
        <div className="container mx-auto px-4 lg:px-8 relative">
          <FadeInSection>
            <div className="flex items-center gap-3 mb-6">
              <span className="h-px w-12 bg-gold" />
              <span className="text-gold text-sm font-body font-semibold uppercase tracking-[0.2em]">Investment</span>
            </div>
            <h1 className="font-heading text-4xl lg:text-5xl font-bold mb-4">Investment Properties</h1>
            <p className="font-body text-lg text-deep-foreground/80 max-w-2xl">
              Multifamily property ownership and rental income opportunities in the Chippewa Valley.
            </p>
          </FadeInSection>
        </div>
      </section>

      <div className="bg-surface border-b border-border">
        <div className="container mx-auto px-4 lg:px-8">
          <nav className="flex items-center gap-2 text-base font-body text-muted-foreground py-3">
            <Link href="/" className="hover:text-foreground transition-colors">Home</Link>
            <span>/</span>
            <span className="text-primary font-medium">Investment</span>
          </nav>
        </div>
      </div>

      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <FadeInSection>
              <h2 className="font-heading text-3xl font-bold text-foreground mb-6">Build Your Portfolio</h2>
              <p className="font-body text-muted-foreground leading-relaxed mb-4">
                Haselwander Real Estate LLC offers investment property opportunities for investors looking to build wealth through real estate ownership. Our focus is on 4-plex and duplex developments that provide consistent rental income potential.
              </p>
              <p className="font-body text-muted-foreground leading-relaxed mb-8">
                With over 60 years of local market knowledge, we provide the expertise and guidance investors need to make informed decisions about multifamily property ownership in the Chippewa Valley.
              </p>

              <div className="bg-surface rounded-lg p-6 shadow-card mb-8">
                <h3 className="font-heading text-lg font-semibold text-foreground mb-4">Why Invest Here</h3>
                <ul className="space-y-3">
                  {[
                    "Strong rental demand in Eau Claire market",
                    "Quality construction and development standards",
                    "Experienced guidance through every step",
                    "60+ years of local real estate expertise",
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-2 text-base font-body text-muted-foreground">
                      <span className="h-1.5 w-1.5 rounded-full bg-primary shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <Button asChild className="font-body">
                <Link href="/contact">Discuss Investment Opportunities <ArrowRight className="h-4 w-4" /></Link>
              </Button>
            </FadeInSection>

            <FadeInSection delay={150}>
              <Link href="/investment/meadows" className="group block bg-background rounded-lg overflow-hidden shadow-card hover:shadow-hover transition-all duration-300">
                <div className="aspect-[16/10] bg-muted flex items-center justify-center">
                  <TrendingUp className="h-12 w-12 text-muted-foreground/30" />
                </div>
                <div className="p-6">
                  <span className="text-xs font-body font-semibold px-2 py-0.5 rounded-sm bg-gold/10 text-gold-dark">4-Plex Development</span>
                  <h3 className="font-heading text-[22px] font-semibold text-foreground mt-2 mb-2 group-hover:text-primary transition-colors">Meadows</h3>
                  <p className="font-body text-base text-muted-foreground mb-3">
                    4-plex development opportunity offering rental income potential in the Chippewa Valley.
                  </p>
                  <span className="inline-flex items-center gap-1 text-primary text-base font-body font-medium group-hover:gap-2 transition-all">
                    View Details <ArrowRight className="h-4 w-4" />
                  </span>
                </div>
              </Link>
            </FadeInSection>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Investment;

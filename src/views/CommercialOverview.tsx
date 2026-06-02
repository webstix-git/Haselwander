"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Layout from "@/components/Layout";
import FadeInSection from "@/components/FadeInSection";
import { Button } from "@/components/ui/button";

const CommercialOverview = () => {
  return (
    <Layout>
      <section className="relative bg-deep text-deep-foreground py-24 lg:py-32">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1920&q=80')] bg-cover bg-center opacity-15" />
        <div className="container mx-auto px-4 lg:px-8 relative">
          <FadeInSection>
            <div className="flex items-center gap-3 mb-6">
              <span className="h-px w-12 bg-gold" />
              <span className="text-gold text-sm font-body font-semibold uppercase tracking-[0.2em]">Commercial</span>
            </div>
            <h1 className="font-heading text-4xl lg:text-5xl font-bold mb-4">Commercial Properties</h1>
            <p className="font-body text-lg text-deep-foreground/80 max-w-2xl">
              Commercial land development opportunities for diverse businesses — industrial, medical, financial, and more.
            </p>
          </FadeInSection>
        </div>
      </section>

      <div className="bg-surface border-b border-border">
        <div className="container mx-auto px-4 lg:px-8">
          <nav className="flex items-center gap-2 text-base font-body text-muted-foreground py-3">
            <Link href="/" className="hover:text-foreground transition-colors">Home</Link>
            <span>/</span>
            <span className="text-primary font-medium">Commercial</span>
          </nav>
        </div>
      </div>

      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <FadeInSection>
              <h2 className="font-heading text-3xl font-bold text-foreground mb-6">Commercial Land Development</h2>
              <p className="font-body text-muted-foreground leading-relaxed mb-6">
                Haselwander Real Estate LLC offers commercial land development opportunities in the Chippewa Valley. Whether you're looking to establish an industrial facility, medical office, financial institution, or retail space, we have opportunities to meet your business needs.
              </p>
              <p className="font-body text-muted-foreground leading-relaxed mb-8">
                With over 60 years of experience in local real estate, our team provides the expertise needed to guide commercial land transactions with efficiency and professionalism.
              </p>
              <Button asChild className="bg-primary hover:bg-primary/90 font-body">
                <Link href="/contact">Inquire About Commercial Land <ArrowRight className="h-4 w-4" /></Link>
              </Button>
            </FadeInSection>

            <FadeInSection delay={150}>
              <Link href="/commercial/melby" className="group block bg-background rounded-lg overflow-hidden shadow-card hover:shadow-hover transition-all duration-300">
                <div className="aspect-[16/10] bg-muted flex items-center justify-center">
                  <span className="text-base font-body text-muted-foreground">Property Photo</span>
                </div>
                <div className="p-6">
                  <span className="text-xs font-body font-semibold px-2 py-0.5 rounded-sm bg-gold/10 text-gold-dark">To Be Developed</span>
                  <h3 className="font-heading text-[22px] font-semibold text-foreground mt-2 mb-2 group-hover:text-primary transition-colors">Melby</h3>
                  <p className="font-body text-base text-muted-foreground mb-3">
                    Commercial land development opportunity in the Chippewa Valley.
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

export default CommercialOverview;

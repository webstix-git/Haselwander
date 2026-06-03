"use client";

import Link from "next/link";
import { Check, ArrowRight } from "lucide-react";
import Layout from "@/components/Layout";
import FadeInSection from "@/components/FadeInSection";
import { Button } from "@/components/ui/button";

const ThankYou = () => {
  return (
    <Layout>
      <section className="py-28 lg:py-40">
        <div className="container mx-auto px-4 lg:px-8">
          <FadeInSection>
            <div className="text-center max-w-lg mx-auto">
              <div className="inline-flex items-center justify-center h-20 w-20 rounded-full bg-success/10 mb-8">
                <Check className="h-10 w-10 text-success" />
              </div>
              <h1 className="font-heading text-4xl lg:text-5xl font-bold text-foreground mb-4">Thank You!</h1>
              <p className="font-body text-lg text-muted-foreground mb-10 leading-relaxed">
                Your message has been received. Our team will review your inquiry and get back to you shortly.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button asChild size="lg" className="font-body font-semibold">
                  <Link href="/">
                    Return Home <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="font-body font-semibold">
                  <Link href="/services">Explore Services</Link>
                </Button>
              </div>
            </div>
          </FadeInSection>
        </div>
      </section>
    </Layout>
  );
};

export default ThankYou;

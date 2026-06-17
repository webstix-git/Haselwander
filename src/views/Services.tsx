"use client";

import Link from "next/link";
import { ArrowRight, Handshake, Users, BookOpen, FileCheck, Shield } from "lucide-react";
import Layout from "@/components/Layout";
import FadeInSection from "@/components/FadeInSection";
import { Button } from "@/components/ui/button";
import businessBasicsImg from "@/assets/business-basics.jpg";
import { imageSrc } from "@/lib/image";

const differentiators = [
  { icon: Handshake, title: "Unique Relationship", desc: "We listen, educate, and strategize to meet each client's unique needs and goals." },
  { icon: Users, title: "Community Expertise", desc: "Seasoned with decades of property knowledge across the Chippewa Valley region." },
  { icon: BookOpen, title: "Market Knowledge", desc: "Knowledgeable and effective with real estate availability in Chippewa Falls, Dunn, and Eau Claire County." },
  { icon: FileCheck, title: "Efficient Process", desc: "A detailed and efficient transaction process from initial consultation to closing." },
  { icon: Shield, title: "Trustworthy Practices", desc: "Business built on accountability, cooperation, devotion, and integrity." },
];

const Services = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative bg-deep text-deep-foreground py-24 lg:py-32">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=1920&q=80')] bg-cover bg-center opacity-10" />
        <div className="container mx-auto px-4 lg:px-8 relative">
          <FadeInSection>
            <div className="flex items-center gap-3 mb-6">
              <span className="h-px w-12 bg-gold" />
              <span className="text-gold text-sm font-body font-semibold uppercase tracking-[0.2em]">What We Do</span>
            </div>
            <h1 className="font-heading text-4xl lg:text-5xl font-bold mb-4">Our Services</h1>
            <p className="font-body text-lg text-deep-foreground/80 max-w-2xl">
              Successful completion of real estate transactions in Chippewa Falls, Dunn, and Eau Claire County.
            </p>
          </FadeInSection>
        </div>
      </section>

      {/* Business Basics — 50/50 Split */}
      <section className="py-20 lg:py-28 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Image */}
            <FadeInSection>
              <div className="relative rounded-xl overflow-hidden shadow-[var(--shadow-hover)]">
                <img
                  src={imageSrc(businessBasicsImg)}
                  alt="Aerial view of Chippewa Valley neighborhood"
                  className="w-full h-[420px] lg:h-[520px] object-cover"
                  loading="lazy"
                  width={960}
                  height={1080}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
              </div>
            </FadeInSection>

            {/* Content */}
            <FadeInSection delay={120}>
              <div className="space-y-8">
                <div>
                  <div className="flex items-center gap-3 mb-5">
                    <span className="h-px w-10 bg-primary" />
                    <span className="text-primary text-xs font-body font-semibold uppercase tracking-[0.2em]">At a Glance</span>
                  </div>
                  <h2 className="font-heading text-3xl lg:text-4xl font-bold text-foreground mb-4">Business Basics</h2>
                  <p className="font-body text-muted-foreground leading-relaxed">
                    A trusted real estate firm rooted in the Chippewa Valley for over six decades, serving buyers, sellers, and investors across the region.
                  </p>
                </div>

                <div className="space-y-6">
                  {[
                    { label: "Established", value: "1965 — Over 60 years of trusted service" },
                    { label: "Service Area", value: "Eau Claire, Chippewa Falls & Dunn County" },
                    { label: "Specialties", value: "Residential, Commercial & Investment Real Estate" },
                    { label: "Foundation", value: "Integrity, accountability & professionalism" },
                  ].map((item, i) => (
                    <div key={item.label} className="flex gap-4 items-baseline">
                      <span className="flex-shrink-0 w-28 font-body text-xs font-semibold uppercase tracking-[0.12em] text-primary">{item.label}</span>
                      <span className="font-body text-foreground leading-relaxed">{item.value}</span>
                    </div>
                  ))}
                </div>

                <div className="pt-2">
                  <Button asChild variant="outline" className="font-body font-semibold">
                    <Link href="/about">Learn Our Story <ArrowRight className="h-4 w-4" /></Link>
                  </Button>
                </div>
              </div>
            </FadeInSection>
          </div>
        </div>
      </section>

      {/* Differentiators */}
      <section className="py-20 lg:py-28 bg-deep text-deep-foreground">
        <div className="container mx-auto px-4 lg:px-8">
          <FadeInSection>
            <div className="text-center mb-16">
              <span className="text-gold text-sm font-body font-semibold uppercase tracking-[0.15em]">Why Choose Us</span>
              <h2 className="font-heading text-3xl lg:text-4xl font-bold text-deep-foreground mt-3">
                Experienced Real Estate Agents<br />in the Chippewa Valley
              </h2>
            </div>
          </FadeInSection>

          <div className="space-y-12">
            {differentiators.map((d, i) => (
              <FadeInSection key={d.title} delay={i * 80}>
                <div className="flex items-start gap-6 max-w-3xl mx-auto">
                  <div className="flex-shrink-0 h-14 w-14 rounded-full bg-gold/15 flex items-center justify-center">
                    <d.icon className="h-6 w-6 text-gold" />
                  </div>
                  <div>
                    <h3 className="font-heading text-xl font-semibold text-deep-foreground mb-2">{d.title}</h3>
                    <p className="font-body text-deep-foreground/70 leading-relaxed">{d.desc}</p>
                  </div>
                </div>
              </FadeInSection>
            ))}
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-20 lg:py-28 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <FadeInSection>
            <div className="text-center mb-12">
              <h2 className="font-heading text-3xl font-bold text-foreground">Our Focus Areas</h2>
            </div>
          </FadeInSection>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: "Residential Land", desc: "Single-family home lots in premier developments.", href: "/residential", icon: "🏡" },
              { title: "Commercial Land", desc: "Land for business ventures across industries.", href: "/commercial", icon: "🏢" },
              { title: "Office Space", desc: "Professional office space for lease.", href: "/office-space", icon: "🏛️" },
              { title: "Investment Properties", desc: "Multifamily properties for investors.", href: "/investment", icon: "📈" },
            ].map((s, i) => (
              <FadeInSection key={s.title} delay={i * 100}>
                <Link href={s.href} className="group flex flex-col h-full bg-surface rounded-xl border border-border p-8 hover:border-primary/30 hover:shadow-hover transition-all duration-300 text-center">
                  <span className="text-3xl mb-4 block">{s.icon}</span>
                  <h3 className="font-heading text-2xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">{s.title}</h3>
                  <p className="font-body text-lg text-muted-foreground mb-5 leading-relaxed flex-grow">{s.desc}</p>
                  <span className="inline-flex items-center justify-center gap-1.5 text-primary text-base font-body font-semibold group-hover:gap-2.5 transition-all mt-auto">
                    Learn More <ArrowRight className="h-4 w-4" />
                  </span>
                </Link>
              </FadeInSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 lg:py-20 bg-primary text-primary-foreground border-b border-primary-foreground/10">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <FadeInSection>
            <h2 className="font-heading text-3xl font-bold mb-4">Ready to Get Started?</h2>
            <p className="font-body text-primary-foreground/80 max-w-lg mx-auto mb-8">
              Contact our team to discuss your real estate needs in the Chippewa Valley.
            </p>
            <Button asChild size="lg" variant="gold" className="font-body font-semibold">
              <Link href="/contact">Contact Us <ArrowRight className="h-4 w-4" /></Link>
            </Button>
          </FadeInSection>
        </div>
      </section>
    </Layout>
  );
};

export default Services;

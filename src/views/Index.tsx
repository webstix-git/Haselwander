"use client";

import Link from "next/link";
import { ArrowRight, Building2, TreePine, Landmark, TrendingUp, Handshake, Users, FileCheck, Shield, Phone } from "lucide-react";
import Layout from "@/components/Layout";
import FadeInSection from "@/components/FadeInSection";
import { Button } from "@/components/ui/button";
import heroBg from "@/assets/hero-bg.jpg";
import { imageSrc } from "@/lib/image";
const featuredProjects = [
  { title: "Melby Subdivision", desc: "Premier commercial lots in a high-traffic corridor, ideal for retail and professional services.", img: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&q=80", href: "/commercial/melby" },
  { title: "Grand Meadows", desc: "Investment-grade multifamily properties offering strong rental income potential.", img: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=600&q=80", href: "/investment/meadows" },
  { title: "Residential Developments", desc: "Thoughtfully planned single-family home lots in the heart of the Chippewa Valley.", img: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=600&q=80", href: "/residential" },
  { title: "Office Spaces", desc: "Professional office suites for lease in Eau Claire's premier business locations.", img: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&q=80", href: "/office-space" },
];

const pillars = [
  { icon: Handshake, title: "Relationship-Driven", desc: "We listen, educate, and strategize to meet each client's unique needs." },
  { icon: Users, title: "Community Expertise", desc: "Seasoned with decades of property knowledge across the Chippewa Valley." },
  { icon: FileCheck, title: "Efficient Transactions", desc: "A detailed and efficient process from start to close." },
  { icon: Shield, title: "Trustworthy Practices", desc: "Built on accountability, cooperation, devotion, and integrity." },
];

const categories = [
  { icon: TreePine, title: "Residential", desc: "Single-family home lots in premier developments.", href: "/residential", img: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=600&q=80" },
  { icon: Landmark, title: "Commercial", desc: "Land opportunities for diverse business ventures.", href: "/commercial", img: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&q=80" },
  { icon: Building2, title: "Office Space", desc: "Professional office space for lease in Eau Claire.", href: "/office-space", img: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&q=80" },
  { icon: TrendingUp, title: "Investment Properties", desc: "Multifamily properties with rental income potential.", href: "/investment", img: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=600&q=80" },
];

const Index = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative min-h-[85vh] flex items-center bg-deep text-deep-foreground overflow-hidden">
        {/* Background image with refined overlay */}
        <div className="absolute inset-0">
          <img src={imageSrc(heroBg)} alt="" className="w-full h-full object-cover" width={1920} height={1080} />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-deep/90 via-deep/70 to-deep/30" />

        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="max-w-2xl">
            <FadeInSection>
              <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                <span className="block">Over 60 Years of</span>
                <span className="block text-gold mt-2">Real Estate Excellence</span>
              </h1>
            </FadeInSection>
            <FadeInSection delay={100}>
              <p className="font-body text-lg text-deep-foreground/80 leading-relaxed mb-8 max-w-lg">
                Highly experienced real estate leadership committed to exceptional personalized service throughout the Chippewa Valley.
              </p>
            </FadeInSection>
            <FadeInSection delay={200}>
              <div className="flex flex-wrap items-center gap-4">
                <Button asChild size="lg" className="bg-gold text-gold-foreground hover:bg-gold-dark font-body font-semibold text-base">
                  <a href="tel:715-831-7077">
                    <Phone className="h-5 w-5" />
                    715-831-7077
                  </a>
                </Button>
                <Button asChild size="lg" variant="outline" className="border-deep-foreground/30 text-foreground bg-deep-foreground/90 hover:bg-deep-foreground font-body font-semibold text-base">
                  <Link href="/services">Our Services</Link>
                </Button>
              </div>
            </FadeInSection>
          </div>
        </div>
      </section>

      {/* Value Pillars */}
      <section className="py-16 lg:py-20 bg-surface">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {pillars.map((p, i) => (
              <FadeInSection key={p.title} delay={i * 100}>
                <div className="text-center">
                  <div className="inline-flex items-center justify-center h-14 w-14 rounded-full bg-primary/10 mb-4">
                    <p.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-heading text-xl font-semibold text-foreground mb-2">{p.title}</h3>
                  <p className="font-body text-base text-muted-foreground leading-relaxed">{p.desc}</p>
                </div>
              </FadeInSection>
            ))}
          </div>
        </div>
      </section>

      {/* Property Categories */}
      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-4 lg:px-8">
          <FadeInSection>
            <div className="flex items-center gap-3 mb-3">
              <span className="h-px w-12 bg-gold" />
              <span className="text-primary text-sm font-body font-semibold uppercase tracking-[0.15em]">Properties</span>
            </div>
            <h2 className="font-heading text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Explore Our Offerings
            </h2>
            <p className="font-body text-muted-foreground max-w-xl mb-12">
              From residential lots to commercial ventures and investment opportunities — find your next property in the Chippewa Valley.
            </p>
          </FadeInSection>

          <div className="grid md:grid-cols-2 gap-6">
            {categories.map((cat, i) => (
              <FadeInSection key={cat.title} delay={i * 100}>
                <Link
                  href={cat.href}
                  className="group relative overflow-hidden rounded-lg block aspect-[16/9] shadow-card hover:shadow-hover transition-shadow duration-300"
                >
                  <img
                    src={cat.img}
                    alt={cat.title}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-deep/90 via-deep/40 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <div className="flex items-center gap-2 mb-2">
                      <cat.icon className="h-5 w-5 text-gold" />
                      <h3 className="font-heading text-2xl font-bold text-deep-foreground">{cat.title}</h3>
                    </div>
                    <p className="font-body text-base text-deep-foreground/80">{cat.desc}</p>
                    <span className="inline-flex items-center gap-1 mt-3 text-gold text-base font-body font-medium group-hover:gap-2 transition-all">
                      View Properties <ArrowRight className="h-4 w-4" />
                    </span>
                  </div>
                </Link>
              </FadeInSection>
            ))}
          </div>
        </div>
      </section>

      {/* Legacy Story */}
      <section className="py-20 lg:py-28 bg-deep text-deep-foreground">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-0 items-stretch">
            {/* Image with years badge */}
            <FadeInSection>
              <div className="relative h-full min-h-[480px] lg:min-h-[560px]">
                <img
                  src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80"
                  alt="Scenic Chippewa Valley real estate landscape"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                {/* Years badge */}
                <div className="absolute bottom-0 right-0 bg-gold text-gold-foreground px-6 py-5 text-center">
                  <span className="block font-heading text-3xl lg:text-4xl font-bold leading-none">60+</span>
                  <span className="block font-body text-xs font-semibold uppercase tracking-[0.15em] mt-1">Years Exp.</span>
                </div>
              </div>
            </FadeInSection>

            {/* Content */}
            <FadeInSection delay={200}>
              <div className="flex flex-col justify-center h-full px-8 lg:px-14 py-12 lg:py-16">
                <div className="flex items-center gap-3 mb-5">
                  <span className="h-[3px] w-10 bg-gold" />
                  <span className="text-gold text-xs font-body font-semibold uppercase tracking-[0.2em]">Who We Are</span>
                </div>
                <h2 className="font-heading text-3xl lg:text-4xl font-bold leading-tight mb-6">
                  Built on Hard Work<br />
                  <span className="text-gold">& Dedication</span>
                </h2>
                <p className="font-body text-deep-foreground/80 leading-relaxed mb-4">
                  Since 1965, the Haselwander family has been a cornerstone of real estate in the Chippewa Valley. What began as a partnership between brothers Neil and Chuck has grown into a trusted organization spanning development, management, and real estate services.
                </p>
                <p className="font-body text-deep-foreground/70 leading-relaxed mb-8">
                  Six decades of hands-on experience, deep community ties, and an unwavering commitment to integrity continue to set Haselwander Real Estate apart.
                </p>

                {/* Stat badges */}
                <div className="flex flex-wrap gap-6 mb-8">
                  {[
                    { icon: Shield, label: "Trusted Legacy", sub: "Since 1965" },
                    { icon: Users, label: "Client-First", sub: "Personalized service" },
                    { icon: Handshake, label: "Full Service", sub: "Development to close" },
                  ].map((stat) => (
                    <div key={stat.label} className="flex items-center gap-3">
                      <div className="h-10 w-10 rounded-full bg-gold/15 flex items-center justify-center shrink-0">
                        <stat.icon className="h-4 w-4 text-gold" />
                      </div>
                      <div>
                        <span className="block font-body text-sm font-semibold uppercase tracking-wider text-deep-foreground">{stat.label}</span>
                        <span className="block font-body text-xs text-deep-foreground/60">{stat.sub}</span>
                      </div>
                    </div>
                  ))}
                </div>

                <div>
                  <Button asChild size="lg" className="bg-gold text-gold-foreground hover:bg-gold-dark font-body font-semibold uppercase tracking-wider">
                    <Link href="/about">
                      Learn Our Story <ArrowRight className="h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </div>
            </FadeInSection>
          </div>
        </div>
      </section>

      {/* Featured Listing Projects */}
      <section className="py-20 lg:py-28 bg-surface">
        <div className="container mx-auto px-4 lg:px-8">
          <FadeInSection>
            <div className="flex items-center gap-3 mb-3">
              <span className="h-px w-12 bg-gold" />
              <span className="text-primary text-sm font-body font-semibold uppercase tracking-[0.15em]">Projects</span>
            </div>
            <h2 className="font-heading text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Featured Listing Projects
            </h2>
            <p className="font-body text-muted-foreground max-w-xl mb-12">
              Explore our signature developments across the Chippewa Valley — each crafted with quality and long-term value in mind.
            </p>
          </FadeInSection>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProjects.map((project, i) => (
              <FadeInSection key={project.title} delay={i * 100}>
                <Link
                  href={project.href}
                  className="group flex flex-col h-full bg-background rounded-lg overflow-hidden shadow-card hover:shadow-hover transition-shadow duration-300"
                >
                  <div className="aspect-[4/3] overflow-hidden">
                    <img
                      src={project.img}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      loading="lazy"
                    />
                  </div>
                  <div className="p-5 flex flex-col flex-grow">
                    <h3 className="font-heading text-2xl font-semibold text-foreground mb-2">{project.title}</h3>
                    <p className="font-body text-lg text-muted-foreground leading-relaxed flex-grow">{project.desc}</p>
                    <span className="inline-flex items-center gap-1 mt-4 text-primary text-base font-body font-medium group-hover:gap-2 transition-all">
                      View Details <ArrowRight className="h-4 w-4" />
                    </span>
                  </div>
                </Link>
              </FadeInSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Band */}
      <section className="py-16 lg:py-20 bg-primary text-primary-foreground border-b border-primary-foreground/10">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <FadeInSection>
            <h2 className="font-heading text-3xl lg:text-4xl font-bold mb-4">
              Find Your Next Opportunity
            </h2>
            <p className="font-body text-primary-foreground/80 max-w-lg mx-auto mb-8">
              Whether you're building, investing, or leasing — our team is ready to guide you through every step.
            </p>
            <Button asChild size="lg" className="bg-gold text-gold-foreground hover:bg-gold-dark font-body font-semibold">
              <Link href="/contact">
                Contact Us Today <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </FadeInSection>
        </div>
      </section>
    </Layout>
  );
};

const MapPlaceholder = () => (
  <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-muted-foreground/40 mx-auto">
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
    <circle cx="12" cy="10" r="3" />
  </svg>
);

export default Index;

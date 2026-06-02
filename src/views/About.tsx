"use client";

import Link from "next/link";
import { Phone, Mail } from "lucide-react";
import Layout from "@/components/Layout";
import FadeInSection from "@/components/FadeInSection";
import { Button } from "@/components/ui/button";

const agents = [
  {
    name: "Neil F. Haselwander",
    title: "Broker / Owner",
    bio: "With over 60 years in the Chippewa Valley real estate industry, Neil Haselwander brings unmatched experience and deep community roots to every transaction. As co-founder of Haselwander Bros., Inc. in 1965, Neil has built a legacy of trust, integrity, and results.",
    phone: "715-831-7077",
    email: "info@haselwanderrealestatellc.com",
  },
  {
    name: "Kim M. Gilmore",
    title: "Real Estate Agent",
    bio: "Kim Gilmore is a dedicated real estate professional with extensive knowledge of the Chippewa Valley market. Known for exceptional client communication and a detail-oriented approach, Kim ensures every transaction is handled with care and professionalism.",
    phone: "715-831-7077",
    email: "info@haselwanderrealestatellc.com",
  },
];

const About = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative bg-deep text-deep-foreground py-24 lg:py-32">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1920&q=80')] bg-cover bg-center opacity-10" />
        <div className="container mx-auto px-4 lg:px-8 relative">
          <FadeInSection>
            <div className="flex items-center gap-3 mb-6">
              <span className="h-px w-12 bg-gold" />
              <span className="text-gold text-sm font-body font-semibold uppercase tracking-[0.2em]">Our Story</span>
            </div>
            <h1 className="font-heading text-4xl lg:text-5xl font-bold mb-4">About Haselwander Real Estate</h1>
            <p className="font-body text-lg text-deep-foreground/80 max-w-2xl">
              For over 60 years, serving the Chippewa Valley with integrity, expertise, and an unwavering commitment to our clients.
            </p>
          </FadeInSection>
        </div>
      </section>

      {/* History */}
      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-16">
            <div className="lg:col-span-3 space-y-8">
              <FadeInSection>
                <h2 className="font-heading text-3xl font-bold text-foreground mb-6">Our History</h2>
                <div className="space-y-5 font-body text-muted-foreground leading-relaxed">
                  <p>
                    Neil Haselwander and his brother, Chuck, started their business with Haselwander Bros., Inc. in 1965. Haselwander Bros., Inc. is a residential and commercial building and development company working in conjunction with Haselwander Companies Inc., a development and management company, and Haselwander Real Estate LLC, which handles all the real estate transactions.
                  </p>
                  <p>
                    These companies are located in the Chippewa Valley of Eau Claire, Wisconsin. This organization has been operating for more than 60 years, establishing deep roots and lasting relationships throughout the community.
                  </p>
                  <p>
                    Our clients always come first, and we take great pride in the relationships we have established over the years. Every transaction is handled with the same level of care, dedication, and professionalism that has defined our business since 1965.
                  </p>
                </div>
              </FadeInSection>
            </div>

            <div className="lg:col-span-2 space-y-6">
              <FadeInSection delay={100}>
                <div className="aspect-[4/5] bg-muted rounded-lg flex items-center justify-center">
                  <span className="text-sm font-body text-muted-foreground">Company Photo</span>
                </div>
              </FadeInSection>
            </div>
          </div>
        </div>
      </section>

      {/* Our Legacy Timeline */}
      <section className="py-20 lg:py-28 bg-deep text-deep-foreground">
        <div className="container mx-auto px-4 lg:px-8">
          <FadeInSection>
            <div className="text-center mb-16">
              <span className="text-primary text-sm font-body font-semibold uppercase tracking-[0.15em]">Our Legacy</span>
              <h2 className="font-heading text-3xl lg:text-4xl font-bold mt-3">
                Six Decades of Commitment
              </h2>
            </div>
          </FadeInSection>

          <div className="relative max-w-3xl mx-auto">
            <div className="absolute left-[22px] md:left-1/2 top-0 bottom-0 w-px bg-deep-foreground/20 -translate-x-1/2" />
            
            {[
              { year: "Today", title: "60+ Years Strong", desc: "Continuing to serve the Chippewa Valley with integrity and expertise." },
              { year: "2000s", title: "Real Estate LLC", desc: "Haselwander Real Estate LLC formed to handle all real estate transactions." },
              { year: "1990s", title: "Diversification", desc: "Launch of Haselwander Companies Inc. for development and management." },
              { year: "1970s", title: "Growth", desc: "Expansion into residential and commercial development across Eau Claire County." },
              { year: "1965", title: "Founded", desc: "Neil and Chuck Haselwander establish Haselwander Bros., Inc. in the Chippewa Valley." },
            ].map((m, i) => (
              <FadeInSection key={m.year} delay={i * 120}>
                <div className={`relative flex items-start gap-6 mb-12 ${
                  i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}>
                  <div className="absolute left-[22px] md:left-1/2 -translate-x-1/2 h-3 w-3 rounded-full bg-gold border-2 border-deep z-10" />
                  
                  <div className={`ml-12 md:ml-0 md:w-1/2 ${i % 2 === 0 ? "md:pr-12 md:text-right" : "md:pl-12"}`}>
                    <span className="text-gold font-heading text-xl font-bold">{m.year}</span>
                    <h3 className="font-heading text-lg font-semibold mt-1">{m.title}</h3>
                    <p className="font-body text-sm text-deep-foreground/70 mt-1 leading-relaxed">{m.desc}</p>
                  </div>
                </div>
              </FadeInSection>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 lg:py-28 bg-surface">
        <div className="container mx-auto px-4 lg:px-8">
          <FadeInSection>
            <div className="text-center mb-16">
              <span className="text-primary text-sm font-body font-semibold uppercase tracking-[0.15em]">Our Values</span>
              <h2 className="font-heading text-3xl lg:text-4xl font-bold text-foreground mt-3">
                The Haselwander Difference
              </h2>
              <p className="font-body text-muted-foreground mt-4 max-w-xl mx-auto">
                What really sets Haselwander Real Estate LLC apart is our longevity and professionalism of real estate experience in the Chippewa Valley.
              </p>
            </div>
          </FadeInSection>

          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-8">
            {[
              { title: "Integrity", desc: "Conducting business with honesty and transparency in every interaction." },
              { title: "Expertise", desc: "Decades of knowledge in Chippewa Valley real estate markets." },
              { title: "Efficiency", desc: "A streamlined, detailed process from listing to close." },
              { title: "Excellence", desc: "Exceeding expectations in service and results." },
              { title: "Professionalism", desc: "Maintaining the highest standards in all we do." },
            ].map((v, i) => (
              <FadeInSection key={v.title} delay={i * 80}>
                <div className="text-center">
                  <div className="h-1 w-12 bg-primary mx-auto mb-4 rounded-full" />
                  <h3 className="font-heading text-lg font-semibold text-foreground mb-2">{v.title}</h3>
                  <p className="font-body text-sm text-muted-foreground leading-relaxed">{v.desc}</p>
                </div>
              </FadeInSection>
            ))}
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-4 lg:px-8">
          <FadeInSection>
            <div className="max-w-3xl mx-auto text-center">
              <span className="text-primary text-sm font-body font-semibold uppercase tracking-[0.15em]">Our Mission</span>
              <blockquote className="font-heading text-2xl lg:text-3xl font-semibold text-foreground mt-6 leading-snug italic">
                "To conduct our business with accountability, cooperation, devotion, and integrity with each and every client."
              </blockquote>
              <div className="h-1 w-16 bg-primary mx-auto mt-8 rounded-full" />
            </div>
          </FadeInSection>
        </div>
      </section>

      {/* Meet Our Agents */}
      <section className="py-20 lg:py-28 bg-surface">
        <div className="container mx-auto px-4 lg:px-8">
          <FadeInSection>
            <div className="text-center mb-16">
              <span className="text-primary text-sm font-body font-semibold uppercase tracking-[0.15em]">Our Team</span>
              <h2 className="font-heading text-3xl lg:text-4xl font-bold text-foreground mt-3">Meet Our Agents</h2>
              <p className="font-body text-muted-foreground mt-4 max-w-xl mx-auto">
                Experienced professionals dedicated to your real estate success in the Chippewa Valley.
              </p>
            </div>
          </FadeInSection>

          <div className="space-y-20">
            {agents.map((agent, i) => (
              <FadeInSection key={agent.name} delay={i * 150}>
                <div className={`grid lg:grid-cols-5 gap-12 items-start ${i % 2 === 1 ? "lg:direction-rtl" : ""}`}>
                  <div className={`lg:col-span-2 ${i % 2 === 1 ? "lg:order-2" : ""}`}>
                    <div className="aspect-[3/4] bg-muted rounded-lg flex items-center justify-center shadow-card">
                      <span className="text-sm font-body text-muted-foreground">Agent Photo</span>
                    </div>
                  </div>
                  <div className={`lg:col-span-3 ${i % 2 === 1 ? "lg:order-1" : ""}`}>
                    <span className="text-primary text-sm font-body font-semibold uppercase tracking-wider">{agent.title}</span>
                    <h3 className="font-heading text-3xl font-bold text-foreground mt-2 mb-4">{agent.name}</h3>
                    <div className="h-1 w-16 bg-primary rounded-full mb-6" />
                    <p className="font-body text-muted-foreground leading-relaxed mb-8">{agent.bio}</p>
                    <div className="flex flex-wrap gap-4">
                      <a href={`tel:${agent.phone}`} className="flex items-center gap-2 text-sm font-body text-primary hover:text-gold-dark transition-colors">
                        <Phone className="h-4 w-4" /> {agent.phone}
                      </a>
                      <a href={`mailto:${agent.email}`} className="flex items-center gap-2 text-sm font-body text-primary hover:text-gold-dark transition-colors">
                        <Mail className="h-4 w-4" /> Email
                      </a>
                    </div>
                    <Button asChild className="mt-6 bg-primary hover:bg-primary/90 font-body">
                      <Link href="/contact">Contact {agent.name.split(" ")[0]}</Link>
                    </Button>
                  </div>
                </div>
              </FadeInSection>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;

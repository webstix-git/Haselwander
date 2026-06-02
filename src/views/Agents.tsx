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

const Agents = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative bg-deep text-deep-foreground py-24 lg:py-32">
        <div className="container mx-auto px-4 lg:px-8 relative">
          <FadeInSection>
            <div className="flex items-center gap-3 mb-6">
              <span className="h-px w-12 bg-gold" />
              <span className="text-gold text-sm font-body font-semibold uppercase tracking-[0.2em]">Our Team</span>
            </div>
            <h1 className="font-heading text-4xl lg:text-5xl font-bold mb-4">Meet Our Agents</h1>
            <p className="font-body text-lg text-deep-foreground/80 max-w-2xl">
              Experienced professionals dedicated to your real estate success in the Chippewa Valley.
            </p>
          </FadeInSection>
        </div>
      </section>

      {/* Agents */}
      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-4 lg:px-8">
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
                    <h2 className="font-heading text-3xl font-bold text-foreground mt-2 mb-4">{agent.name}</h2>
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

export default Agents;

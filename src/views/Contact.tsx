"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Phone, Mail, MapPin, ArrowRight } from "lucide-react";
import Layout from "@/components/Layout";
import FadeInSection from "@/components/FadeInSection";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const interestOptions = [
  { id: "residential", label: "Residential Land / Lots" },
  { id: "commercial", label: "Commercial Land" },
  { id: "office", label: "Office Space" },
  { id: "investment", label: "Investment Properties" },
  { id: "other", label: "Other" },
];

const Contact = () => {
  const router = useRouter();
  const [formData, setFormData] = useState({
    interest: "",
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    router.push("/thank-you");
  };

  return (
    <Layout>
      <section className="relative bg-deep text-deep-foreground py-24 lg:py-32">
        <div className="container mx-auto px-4 lg:px-8 relative">
          <FadeInSection>
            <div className="flex items-center gap-3 mb-6">
              <span className="h-px w-12 bg-gold" />
              <span className="text-gold text-sm font-body font-semibold uppercase tracking-[0.2em]">Get in Touch</span>
            </div>
            <h1 className="font-heading text-4xl lg:text-5xl font-bold mb-4">Contact Us</h1>
            <p className="font-body text-lg text-deep-foreground/80 max-w-2xl">
              We'd love to hear from you. Reach out to discuss your real estate needs.
            </p>
          </FadeInSection>
        </div>
      </section>

      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-12">
            <div className="lg:col-span-3">
              <FadeInSection>
                <form onSubmit={handleSubmit}>
                  <h2 className="font-heading text-2xl font-bold text-foreground mb-2">Send Us a Message</h2>
                  <p className="font-body text-muted-foreground mb-8">Fill out the form below and we'll get back to you shortly.</p>
                  <div className="space-y-5">
                    <div>
                      <label className="text-sm font-body font-medium text-foreground block mb-1.5">Full Name *</label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-3 rounded-lg border border-border bg-background font-body text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors"
                        placeholder="John Smith"
                      />
                    </div>
                    <div className="grid sm:grid-cols-2 gap-5">
                      <div>
                        <label className="text-sm font-body font-medium text-foreground block mb-1.5">Email Address *</label>
                        <input
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className="w-full px-4 py-3 rounded-lg border border-border bg-background font-body text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors"
                          placeholder="john@example.com"
                        />
                      </div>
                      <div>
                        <label className="text-sm font-body font-medium text-foreground block mb-1.5">Phone Number</label>
                        <input
                          type="tel"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          className="w-full px-4 py-3 rounded-lg border border-border bg-background font-body text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors"
                          placeholder="(715) 555-0123"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="text-sm font-body font-medium text-foreground block mb-1.5">What are you looking for?</label>
                      <Select
                        value={formData.interest}
                        onValueChange={(value) => setFormData({ ...formData, interest: value })}
                      >
                        <SelectTrigger className="w-full px-4 py-3 h-auto rounded-lg border border-border bg-background font-body text-sm focus:ring-2 focus:ring-primary/20 focus:ring-offset-0">
                          <SelectValue placeholder="Select an option" />
                        </SelectTrigger>
                        <SelectContent>
                          {interestOptions.map((opt) => (
                            <SelectItem key={opt.id} value={opt.id} className="font-body">
                              {opt.label}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <label className="text-sm font-body font-medium text-foreground block mb-1.5">Message</label>
                      <textarea
                        rows={5}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        className="w-full px-4 py-3 rounded-lg border border-border bg-background font-body text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors resize-none"
                        placeholder="Tell us about your real estate needs..."
                      />
                    </div>
                  </div>
                  <div className="mt-8">
                    <Button type="submit" className="bg-primary hover:bg-primary/90 font-body">
                      Send Message <ArrowRight className="h-4 w-4" />
                    </Button>
                  </div>
                </form>
              </FadeInSection>
            </div>

            <div className="lg:col-span-2 space-y-6">
              <FadeInSection delay={150}>
                <div className="bg-surface rounded-lg p-6 shadow-card">
                  <h3 className="font-heading text-lg font-semibold text-foreground mb-6">Contact Information</h3>
                  <div className="space-y-4">
                    <a href="tel:715-831-7077" className="flex items-center gap-3 font-body text-foreground hover:text-primary transition-colors text-base">
                      <Phone className="h-5 w-5 text-primary shrink-0" />
                      715-831-7077
                    </a>
                    <a href="mailto:info@haselwanderrealestatellc.com" className="flex items-start gap-3 font-body text-foreground hover:text-primary transition-colors text-base">
                      <Mail className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      info@haselwanderrealestatellc.com
                    </a>
                    <div className="flex items-start gap-3 font-body text-foreground text-base">
                      <MapPin className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <span>3615 N Hastings Way, Suite 200<br />Eau Claire, WI 54703</span>
                    </div>
                  </div>
                </div>
              </FadeInSection>

              <FadeInSection delay={250}>
                <div className="rounded-lg overflow-hidden border border-border shadow-card">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2843.5!2d-91.4771!3d44.8281!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x87f8a4e5c7b3b3b3%3A0x0!2s3615+N+Hastings+Way+Suite+200%2C+Eau+Claire%2C+WI+54703!5e0!3m2!1sen!1sus!4v1700000000000"
                    width="100%"
                    height="300"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Haselwander Real Estate LLC location"
                    className="w-full aspect-[4/3]"
                  />
                </div>
              </FadeInSection>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;

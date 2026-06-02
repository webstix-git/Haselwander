"use client";

import { useState } from "react";
import { X } from "lucide-react";
import Layout from "@/components/Layout";
import FadeInSection from "@/components/FadeInSection";

const categories = ["All", "Residential", "Commercial", "Office Space"];

const placeholderImages = Array.from({ length: 12 }, (_, i) => ({
  id: i + 1,
  category: i < 4 ? "Residential" : i < 8 ? "Commercial" : "Office Space",
  alt: `Property photo ${i + 1}`,
}));

const Gallery = () => {
  const [activeFilter, setActiveFilter] = useState("All");
  const [lightbox, setLightbox] = useState<number | null>(null);

  const filtered = activeFilter === "All"
    ? placeholderImages
    : placeholderImages.filter((img) => img.category === activeFilter);

  return (
    <Layout>
      <section className="relative bg-deep text-deep-foreground py-24 lg:py-32">
        <div className="container mx-auto px-4 lg:px-8 relative">
          <FadeInSection>
            <div className="flex items-center gap-3 mb-6">
              <span className="h-px w-12 bg-gold" />
              <span className="text-gold text-sm font-body font-semibold uppercase tracking-[0.2em]">Gallery</span>
            </div>
            <h1 className="font-heading text-4xl lg:text-5xl font-bold mb-4">Photo Gallery</h1>
            <p className="font-body text-lg text-deep-foreground/80 max-w-2xl">
              Browse our portfolio of residential, commercial, and land properties.
            </p>
          </FadeInSection>
        </div>
      </section>

      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-4 lg:px-8">
          {/* Filters */}
          <FadeInSection>
            <div className="flex flex-wrap gap-2 mb-12">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveFilter(cat)}
                  className={`px-4 py-2 text-sm font-body font-medium rounded-sm transition-colors duration-200 ${
                    activeFilter === cat
                      ? "bg-primary text-primary-foreground"
                      : "bg-muted text-muted-foreground hover:bg-muted/80"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </FadeInSection>

          {/* Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {filtered.map((img, i) => (
              <FadeInSection key={img.id} delay={i * 50}>
                <button
                  onClick={() => setLightbox(img.id)}
                  className="group relative aspect-[4/3] bg-muted rounded-lg overflow-hidden w-full shadow-card hover:shadow-hover transition-all duration-300"
                >
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-xs font-body text-muted-foreground">{img.category} — Photo {img.id}</span>
                  </div>
                  <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/10 transition-colors duration-300" />
                </button>
              </FadeInSection>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {lightbox !== null && (
        <div className="fixed inset-0 z-50 bg-foreground/90 flex items-center justify-center p-4" onClick={() => setLightbox(null)}>
          <button className="absolute top-6 right-6 text-background hover:text-gold transition-colors" onClick={() => setLightbox(null)}>
            <X className="h-8 w-8" />
          </button>
          <div className="bg-muted rounded-lg w-full max-w-3xl aspect-[16/10] flex items-center justify-center" onClick={(e) => e.stopPropagation()}>
            <span className="text-sm font-body text-muted-foreground">Photo {lightbox} — Full Size</span>
          </div>
        </div>
      )}
    </Layout>
  );
};

export default Gallery;

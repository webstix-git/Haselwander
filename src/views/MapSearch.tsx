import Layout from "@/components/Layout";
import FadeInSection from "@/components/FadeInSection";

const MapSearch = () => {
  return (
    <Layout>
      <section className="relative bg-deep text-deep-foreground py-24 lg:py-32">
        <div className="container mx-auto px-4 lg:px-8 relative">
          <FadeInSection>
            <div className="flex items-center gap-3 mb-6">
              <span className="h-px w-12 bg-gold" />
              <span className="text-gold text-sm font-body font-semibold uppercase tracking-[0.2em]">Explore</span>
            </div>
            <h1 className="font-heading text-4xl lg:text-5xl font-bold mb-4">Map Search</h1>
            <p className="font-body text-lg text-deep-foreground/80 max-w-2xl">
              Browse available properties across the Chippewa Valley on our interactive map.
            </p>
          </FadeInSection>
        </div>
      </section>

      <section className="py-8 lg:py-12">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-4 gap-6">
            {/* Sidebar Filters */}
            <div className="lg:col-span-1">
              <FadeInSection>
                <div className="bg-surface rounded-lg p-6 shadow-card space-y-6">
                  <div>
                    <h3 className="font-heading text-lg font-semibold text-foreground mb-4">Filter Properties</h3>
                  </div>
                  <div>
                    <label className="text-sm font-body font-medium text-foreground block mb-2">Property Type</label>
                    <div className="space-y-2">
                      {["Residential", "Commercial", "Office Space", "Investment"].map((type) => (
                        <label key={type} className="flex items-center gap-2 text-sm font-body text-muted-foreground cursor-pointer">
                          <input type="checkbox" className="rounded border-border" />
                          {type}
                        </label>
                      ))}
                    </div>
                  </div>
                  <div>
                    <label className="text-sm font-body font-medium text-foreground block mb-2">Status</label>
                    <div className="space-y-2">
                      {["Developed", "To Be Developed"].map((status) => (
                        <label key={status} className="flex items-center gap-2 text-sm font-body text-muted-foreground cursor-pointer">
                          <input type="checkbox" className="rounded border-border" />
                          {status}
                        </label>
                      ))}
                    </div>
                  </div>
                </div>
              </FadeInSection>
            </div>

            {/* Map */}
            <div className="lg:col-span-3">
              <FadeInSection delay={100}>
                <div className="aspect-[16/10] lg:aspect-auto lg:h-[600px] bg-muted rounded-lg flex items-center justify-center border border-border">
                  <div className="text-center">
                    <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-muted-foreground/40 mx-auto mb-3">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
                      <circle cx="12" cy="10" r="3" />
                    </svg>
                    <p className="text-sm font-body text-muted-foreground">Interactive map integration coming soon</p>
                    <p className="text-xs font-body text-muted-foreground/60 mt-1">Mapbox / Google Maps with custom markers</p>
                  </div>
                </div>
              </FadeInSection>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default MapSearch;

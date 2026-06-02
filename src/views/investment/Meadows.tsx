import Layout from "@/components/Layout";
import PropertyPageTemplate from "@/components/PropertyPageTemplate";

const Meadows = () => (
  <Layout>
    <PropertyPageTemplate
      title="Meadows"
      subtitle="4-plex development offering rental income potential."
      status="To Be Developed"
      description="The Meadows development offers 4-plex investment property opportunities in the Chippewa Valley. Designed for investors seeking consistent rental income, these multifamily units provide ownership opportunities in a growing market. Contact our team for development details, financial projections, and investment information. Content for this page will be provided by the client."
      location="Chippewa Valley, WI"
      features={["4-plex units", "Rental income potential", "Investment-grade construction", "Growing market", "Professional property management options"]}
      parentLink={{ label: "Investment", href: "/investment" }}
    />
  </Layout>
);

export default Meadows;

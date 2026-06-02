import Layout from "@/components/Layout";
import PropertyPageTemplate from "@/components/PropertyPageTemplate";

const Melby = () => (
  <Layout>
    <PropertyPageTemplate
      title="Melby"
      subtitle="Commercial land development opportunity in the Chippewa Valley."
      status="To Be Developed"
      description="The Melby commercial development offers land opportunities for a variety of business types including industrial, medical, financial, and retail. Located in the Chippewa Valley, this development is planned to provide quality commercial lots with excellent access and infrastructure. Content for this page will be provided by the client."
      location="Chippewa Valley, WI"
      features={["Commercial zoning", "Multiple business types welcome", "Quality infrastructure planned", "Excellent access", "Chippewa Valley location"]}
      parentLink={{ label: "Commercial", href: "/commercial" }}
    />
  </Layout>
);

export default Melby;

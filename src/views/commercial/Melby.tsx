import Layout from "@/components/Layout";
import PropertyPageTemplate from "@/components/PropertyPageTemplate";

const Melby = () => (
  <Layout>
    <PropertyPageTemplate
      title="Melby"
      subtitle="Commercial site for development in the Chippewa Valley."
      status="To Be Developed"
      description="The Melby commercial development is a 10-acre commercial site for development, totaling 435,600 square feet. The property is adjacent to Hwy 53 North and Melby Road with a private entrance off 118th Street. This commercial site is ideal for auto sales, church, or professional building development."
      location="Adjacent to Hwy 53 North and Melby Road, private entrance off 118th Street"
      features={[
        "10 acres — 435,600 square feet",
        "Adjacent to Hwy 53 North and Melby Road",
        "Private entrance off 118th Street",
        "Commercial site for development",
        "Ideal for auto sales, church, or professional building",
      ]}
      documents={[
        { title: "Survey Map", href: "/documents/melby-survey-map.pdf" },
      ]}
      parentLink={{ label: "Commercial", href: "/commercial" }}
    />
  </Layout>
);

export default Melby;

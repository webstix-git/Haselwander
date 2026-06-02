import Layout from "@/components/Layout";
import PropertyPageTemplate from "@/components/PropertyPageTemplate";

const parentLink = { label: "Residential", href: "/residential" };

export const PrincetonValley = () => (
  <Layout>
    <PropertyPageTemplate
      title="Princeton Valley"
      subtitle="An established residential development in the heart of the Chippewa Valley."
      status="Developed"
      description="Princeton Valley is a fully developed residential community offering quality single-family home lots. This established neighborhood features mature landscaping, well-maintained infrastructure, and convenient access to Eau Claire amenities. Content for this page will be provided by the client."
      location="Eau Claire, WI"
      features={["Fully developed lots", "Established neighborhood", "Quality infrastructure", "Convenient location", "Single-family homes"]}
      parentLink={parentLink}
    />
  </Layout>
);

export const Woodhaven = () => (
  <Layout>
    <PropertyPageTemplate
      title="Woodhaven"
      subtitle="An upcoming residential development with premium lot opportunities."
      status="To Be Developed"
      description="Woodhaven represents an exciting future residential development in the Chippewa Valley. This development will offer premium single-family home lots in a desirable setting. Content for this page will be provided by the client."
      location="Eau Claire County, WI"
      features={["Premium lot sizes", "Future development", "Desirable setting", "Single-family home lots"]}
      parentLink={parentLink}
    />
  </Layout>
);

export const Peterson = () => (
  <Layout>
    <PropertyPageTemplate
      title="Peterson"
      subtitle="Future residential lots in a sought-after location."
      status="To Be Developed"
      description="The Peterson development will bring new single-family home lot opportunities to the Chippewa Valley. Located in a sought-after area, this development is planned to offer quality residential lots. Content for this page will be provided by the client."
      location="Chippewa Valley, WI"
      features={["Sought-after location", "Planned development", "Residential lots", "Quality infrastructure planned"]}
      parentLink={parentLink}
    />
  </Layout>
);

export const Hillcrest = () => (
  <Layout>
    <PropertyPageTemplate
      title="Hillcrest"
      subtitle="Planned development offering elevated views and spacious lots."
      status="To Be Developed"
      description="Hillcrest will offer elevated residential lots with scenic views in the Chippewa Valley. This planned development is designed to provide spacious single-family home lots in a premium setting. Content for this page will be provided by the client."
      location="Chippewa Valley, WI"
      features={["Elevated views", "Spacious lots", "Premium setting", "Single-family homes"]}
      parentLink={parentLink}
    />
  </Layout>
);

export const HwyP = () => (
  <Layout>
    <PropertyPageTemplate
      title="Hwy P"
      subtitle="Conveniently located residential lots along the Hwy P corridor."
      status="To Be Developed"
      description="The Hwy P development will offer conveniently located residential lots along the Hwy P corridor. Easy access to major roadways makes this a desirable location for single-family homes. Content for this page will be provided by the client."
      location="Hwy P Corridor, WI"
      features={["Convenient access", "Highway corridor location", "Residential lots", "Easy commute"]}
      parentLink={parentLink}
    />
  </Layout>
);

export const WakandaShores = () => (
  <Layout>
    <PropertyPageTemplate
      title="Wakanda Shores"
      subtitle="Waterfront residential lots with exceptional natural surroundings."
      status="To Be Developed"
      description="Wakanda Shores will offer waterfront residential lots with exceptional natural beauty. This unique development is planned to provide single-family home lots near water with scenic surroundings. Content for this page will be provided by the client."
      location="Chippewa Valley, WI"
      features={["Waterfront lots", "Natural surroundings", "Scenic views", "Unique setting", "Single-family homes"]}
      parentLink={parentLink}
    />
  </Layout>
);

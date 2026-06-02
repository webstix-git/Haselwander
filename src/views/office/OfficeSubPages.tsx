import Layout from "@/components/Layout";
import PropertyPageTemplate from "@/components/PropertyPageTemplate";

const parentLink = { label: "Office Space", href: "/office-space" };

export const Office3603 = () => (
  <Layout>
    <PropertyPageTemplate
      title="3603 N Hastings Way"
      subtitle="Professional office space available for lease."
      status="Developed"
      description="3603 N Hastings Way offers professional office space for lease in Eau Claire, WI. This well-maintained commercial building provides quality office environments suitable for a variety of businesses. Contact our team for current availability, floor plans, and lease terms. Content for this page will be provided by the client."
      location="3603 N Hastings Way, Eau Claire, WI"
      features={["Professional office space", "Well-maintained building", "Convenient location", "Ample parking", "Quality amenities"]}
      parentLink={parentLink}
    />
  </Layout>
);

export const Office3615 = () => (
  <Layout>
    <PropertyPageTemplate
      title="3615 N Hastings Way"
      subtitle="Premier office space with excellent visibility."
      status="Developed"
      description="3615 N Hastings Way, Suite 200 offers premier office space for lease in Eau Claire, WI. This is also the home of Haselwander Real Estate LLC. The building features excellent visibility, professional amenities, and a convenient location. Contact our team for current availability and lease terms. Content for this page will be provided by the client."
      location="3615 N Hastings Way, Suite 200, Eau Claire, WI"
      features={["Premier office space", "Excellent visibility", "Professional amenities", "Convenient N Hastings Way location", "Suite options available"]}
      parentLink={parentLink}
    />
  </Layout>
);

import Services from "@/views/Services";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "Real Estate Services",
  path: "/services",
});

export default function ServicesPage() {
  return <Services />;
}

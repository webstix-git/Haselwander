import ResidentialOverview from "@/views/ResidentialOverview";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "Residential",
  path: "/residential",
});

export default function ResidentialPage() {
  return <ResidentialOverview />;
}

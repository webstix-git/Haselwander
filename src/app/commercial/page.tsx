import CommercialOverview from "@/views/CommercialOverview";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "Commercial",
  path: "/commercial",
});

export default function CommercialPage() {
  return <CommercialOverview />;
}

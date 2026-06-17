import { PrincetonValley } from "@/views/residential/ResidentialSubPages";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "Princeton Valley Residential Development",
  path: "/residential/princeton-valley",
});

export default function PrincetonValleyPage() {
  return <PrincetonValley />;
}

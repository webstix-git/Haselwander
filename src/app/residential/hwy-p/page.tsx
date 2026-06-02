import { HwyP } from "@/views/residential/ResidentialSubPages";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "Hwy P",
  path: "/residential/hwy-p",
});

export default function HwyPPage() {
  return <HwyP />;
}

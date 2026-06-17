import { HwyP } from "@/views/residential/ResidentialSubPages";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "Hwy P Lake Hallie - Grand Meadows",
  path: "/residential/hwy-p",
});

export default function HwyPPage() {
  return <HwyP />;
}

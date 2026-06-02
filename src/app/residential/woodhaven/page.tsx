import { Woodhaven } from "@/views/residential/ResidentialSubPages";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "Woodhaven",
  path: "/residential/woodhaven",
});

export default function WoodhavenPage() {
  return <Woodhaven />;
}

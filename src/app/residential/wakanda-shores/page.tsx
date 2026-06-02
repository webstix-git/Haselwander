import { WakandaShores } from "@/views/residential/ResidentialSubPages";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "Wakanda Shores",
  path: "/residential/wakanda-shores",
});

export default function WakandaShoresPage() {
  return <WakandaShores />;
}

import { Hillcrest } from "@/views/residential/ResidentialSubPages";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "Hillcrest",
  path: "/residential/hillcrest",
});

export default function HillcrestPage() {
  return <Hillcrest />;
}

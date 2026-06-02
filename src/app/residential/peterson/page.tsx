import { Peterson } from "@/views/residential/ResidentialSubPages";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "Peterson",
  path: "/residential/peterson",
});

export default function PetersonPage() {
  return <Peterson />;
}

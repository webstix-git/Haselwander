import Melby from "@/views/commercial/Melby";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "Melby",
  path: "/commercial/melby",
});

export default function MelbyPage() {
  return <Melby />;
}

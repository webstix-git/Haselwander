import Melby from "@/views/commercial/Melby";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "Melby Subdivision",
  path: "/commercial/melby",
});

export default function MelbyPage() {
  return <Melby />;
}

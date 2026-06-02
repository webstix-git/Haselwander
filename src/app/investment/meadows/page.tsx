import Meadows from "@/views/investment/Meadows";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "The Meadows",
  path: "/investment/meadows",
});

export default function MeadowsPage() {
  return <Meadows />;
}

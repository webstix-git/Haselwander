import MapSearch from "@/views/MapSearch";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "Map Search",
  path: "/map-search",
});

export default function MapSearchPage() {
  return <MapSearch />;
}

import Gallery from "@/views/Gallery";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "Gallery",
  path: "/gallery",
});

export default function GalleryPage() {
  return <Gallery />;
}

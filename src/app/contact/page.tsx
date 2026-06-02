import Contact from "@/views/Contact";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "Contact",
  path: "/contact",
});

export default function ContactPage() {
  return <Contact />;
}

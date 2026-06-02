import About from "@/views/About";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "About",
  description:
    "Learn about Haselwander Real Estate LLC — over 60 years of real estate leadership in the Chippewa Valley.",
  path: "/about",
});

export default function AboutPage() {
  return <About />;
}

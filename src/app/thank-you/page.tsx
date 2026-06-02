import ThankYou from "@/views/ThankYou";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "Thank You",
  path: "/thank-you",
});

export default function ThankYouPage() {
  return <ThankYou />;
}

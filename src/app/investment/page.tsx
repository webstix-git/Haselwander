import Investment from "@/views/Investment";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "Investment Properties",
  path: "/investment",
});

export default function InvestmentPage() {
  return <Investment />;
}

import Agents from "@/views/Agents";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "Our Agents",
  path: "/agents",
});

export default function AgentsPage() {
  return <Agents />;
}

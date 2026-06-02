import OfficeSpaceOverview from "@/views/OfficeSpaceOverview";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "Office Space",
  path: "/office-space",
});

export default function OfficeSpacePage() {
  return <OfficeSpaceOverview />;
}

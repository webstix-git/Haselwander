import { Office3615 } from "@/views/office/OfficeSubPages";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "3615 N Hastings Way",
  path: "/office-space/3615-n-hastings-way",
});

export default function Office3615Page() {
  return <Office3615 />;
}

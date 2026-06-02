import { Office3603 } from "@/views/office/OfficeSubPages";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "3603 N Hastings Way",
  path: "/office-space/3603-n-hastings-way",
});

export default function Office3603Page() {
  return <Office3603 />;
}

import AddVenue from "@/components/AddVenue/AddVenue";
import { uploadVenue } from "./action";

export default function Page() {
  return <AddVenue uploadVenue={uploadVenue} />;
}

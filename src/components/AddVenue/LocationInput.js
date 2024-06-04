import { Input } from "@nextui-org/react";

export default function LocationInput() {
  return (
    <div className="flex flex-col gap-4">
      <Input size="md" type="text" label="streetAddress" />
      <Input size="md" type="text" label="Apt, floor, bldg (if applicable)" />
      <Input size="md" type="text" label="City / town / village" />
      <Input size="md" type="text" label="Province / state / territory (if applicable)" />
    </div>
  );
}

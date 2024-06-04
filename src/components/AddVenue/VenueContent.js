"use client";
import { Input, Textarea } from "@nextui-org/react";
import { useState } from "react";

export default function VenueContent() {
  const [selectedFiles, setSelectedFiles] = useState([]);

  const handleFileChange = (event) => {
    const files = Array.from(event.target.files);
    setSelectedFiles(files);

    setSubmitDisabled(files.length < 5);
  };

  return (
    <div className="flex flex-col gap-4">
      <Input size="md" type="text" label="Enter your venue vame" />
      <Textarea label="Description" placeholder="Enter your description" className="max-w-xs" />
      <Input type="file" multiple accept="image/*" onChange={handleFileChange} />
    </div>
  );
}

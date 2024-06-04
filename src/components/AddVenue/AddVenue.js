"use client";
import { Button, Input, Textarea, Select, SelectItem, Link, Chip } from "@nextui-org/react";
import { useState } from "react";

export default function AddVenue({ uploadVenue }) {
  const [loading, setLoading] = useState(false);
  const [selectedFiles, setSelectedFiles] = useState([]);
  const [disable, setDisable] = useState(true);
  const [error, setError] = useState(null);
  const [body, setBody] = useState({
    name: "",
    venueType: "",
    phone: "",
    capacity: "",
    estimate: "",
    description: "",
    name: "",
    street: "",
    apt: "",
    city: "",
    province: "",
  });

  const onChange = (e) => {
    // console.log(e.target["name"], " + ", e.target["value"]);
    const currentName = e.target["name"];
    const currentValue = e.target["value"];
    setBody((prevBody) => ({
      ...prevBody,
      [currentName]: currentValue,
    }));
  };

  const handleFileChange = (e) => {
    const files = e.target.files;
    setSelectedFiles(files);
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);

    const formData = new FormData();

    formData.append("location", "test location");

    for (const [key, value] of Object.entries(body)) {
      formData.append(key, value);
    }

    for (const file of selectedFiles) {
      formData.append("images", file);
    }

    if (selectedFiles.length < 6) {
      setError(<Chip color="danger">Please upload at least 6 images</Chip>);
      setLoading(false);
      return;
    }

    const res = await uploadVenue(formData);
    setLoading(false);

    if (res.error) {
      setError(<Chip color="danger">{res.message}</Chip>);
    } else {
      setError(null);
      return;
    }
  };

  return (
    <form onSubmit={onSubmit}>
      <div className="flex flex-col gap-4 my-5 text-slate-900">
        <Input
          name="name"
          onChange={onChange}
          size="md"
          type="text"
          placeholder="Enter your venue name"
          label="Venue Name"
        />
        <Textarea
          name="description"
          onChange={onChange}
          label="Venue Description"
          placeholder="Enter some details about your venue"
          className="w-auto"
        />
        <div className="flex justify-around">
          <Select
            onChange={onChange}
            name="venueType"
            label="Venue Type"
            placeholder="Select an venue type"
            className="mx-2"
          >
            <SelectItem key="Hall" value="Hall">
              Hall
            </SelectItem>
            <SelectItem key="Banquet" value="Banquet ">
              Banquet
            </SelectItem>
          </Select>
          <Input
            onChange={onChange}
            className="mx-2"
            name="capacity"
            type="number"
            label="Guest Capacity"
            placeholder="Enter venue guest capacity"
          />
          <Input
            onChange={onChange}
            className="mx-2"
            name="phone"
            type="number"
            label="Phone Number"
            placeholder="Enter your phone number"
          />
          <Input
            onChange={onChange}
            className="mx-2"
            name="estimate"
            type="number"
            label="Venue Booking Fee"
            startContent={
              <div className="pointer-events-none flex items-center">
                <span className="text-default-400 text-small">PKR</span>
              </div>
            }
          />
        </div>

        <h3 className="font-semibold text-lg mt-3">Upload images of your venue</h3>
        <input type="file" name="image" accept="image/*" multiple onChange={handleFileChange} />

        <h3 className="font-semibold text-lg mt-3">Where is your venue located?</h3>
        <Input onChange={onChange} name="street" size="md" type="text" label="Street" />
        <Input onChange={onChange} name="apt" size="md" type="text" label="Apt, floor, bldg (if applicable)" />
        <Input onChange={onChange} name="city" size="md" type="text" label="City / town / village" />
        <Input
          onChange={onChange}
          name="province"
          size="md"
          type="text"
          label="Province / state / territory (if applicable)"
        />
        <div>{error ? error : ""}</div>
      </div>
      <Button type="submit" isLoading={loading}>
        Add Venue
      </Button>
    </form>
  );
}

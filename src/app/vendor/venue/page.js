"use client";
import MyCustomError from "@/components/customError/MyCustomError";
import CardGrid from "@/components/venueCard/CardGrid";
import { Button, Chip } from "@nextui-org/react";
import Link from "next/link";
import { useState } from "react";
import { useEffect } from "react";
import { getVenueList } from "./action";

export default function MyVenues() {
  const [venueList, setVenueList] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const callApi = async () => {
      const res = await getVenueList();

      if (res.error) {
        console.log(res);
        setError(<MyCustomError status={res.code} error={res.error} message={res.message} />);
      } else {
        const { venueList } = res;
        setVenueList(venueList);
      }
    };
    callApi();
  }, []);

  return (
    <>
      {error ? error : ""}
      <CardGrid venueList={venueList} />
      {/* <Button as={Link} href="/vendor/add-venue">
        Add Venue
      </Button> */}
    </>
  );
}

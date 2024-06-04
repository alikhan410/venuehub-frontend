"use client";

import MyCustomError from "@/components/customError/MyCustomError";
import Venue from "@/components/venue/Venue";
import { useState } from "react";
import { useEffect } from "react";
import { getVenue } from "./action";

export default function Home({ params }) {
  const [venue, setVenue] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const get = async (id) => {
      const res = await getVenue(id);

      if (res.error) {
        setError(<MyCustomError status={res.code} error={res.error} message={res.message} />);
      } else {
        setError(null);
        setVenue(res);
      }
    };

    get(params.id);
  }, []);

  return <>{error ? error : <Venue venue={venue} />}</>;
}

"use client";
import MyCustomError from "@/components/customError/MyCustomError";
import BookingTable from "@/components/table/BookingTable";
import { useEffect, useState } from "react";
import { getBookings } from "./action";

export default function Bookings() {
  const [bookings, setBookings] = useState(null);
  const [error, setError] = useState(null);
  useEffect(() => {
    const get = async () => {
      const res = await getBookings();
      if (res.error) {
        setError(<MyCustomError response={res} />);
      } else {
        setError(null);

        if (res.length === 0) {
          setBookings([]);
        } else {
          setBookings(res);
        }
      }
    };

    get();
  }, []);

  return <>{error ? error : <BookingTable bookings={bookings} />}</>;
}

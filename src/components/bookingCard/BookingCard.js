"use client";
import GetCalendar from "./GetCalendar";
import BookingPanel from "./BookingPanel";
import { useEffect } from "react";
import { getBookings } from "./action";
import { useState } from "react";
import { Chip } from "@nextui-org/react";

export default function BookingCard({ venueId }) {
  const [bookings, setBookings] = useState([]);
  const [error, setErrors] = useState(null);

  useEffect(() => {
    const get = async () => {
      const res = await getBookings(venueId);

      if (res.error) {
        setErrors(<Chip color="danger">{res.message} </Chip>);
      } else {
        const { bookingDateDtoList } = res;
        setBookings(bookingDateDtoList);
      }
    };
    get();
  }, []);

  return (
    <div className="mx-16 flex flex-col my-5 lg:flex-row justify-evenly">
      {error == null ? (
        <>
          <GetCalendar dates={bookings} className="grow-0" />
          <BookingPanel dates={bookings} venueId={venueId} />
        </>
      ) : (
        error
      )}
      {/* <GetCalendar className="grow-0" />
      <BookingPanel venueId={venueId} /> */}
    </div>
  );
}

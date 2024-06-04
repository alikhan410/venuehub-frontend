"use client";
import React from "react";
import { Input, DateInput, Button, Link, Chip } from "@nextui-org/react";
import { parseDate } from "@internationalized/date";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function ReservationForm({ formHandler, date, guests, venueId }) {
  const [phone, setPhone] = useState(null);
  const [error, setError] = useState(null);
  const router = useRouter();
  const submitHandler = async (e) => {
    e.preventDefault();
    const res = await formHandler(date, venueId, guests, phone);
    console.log(res);
    if (res.error) {
      setError(<Chip color="danger">{res.message}</Chip>);
    } else {
      setError(null);
      router.push("/bookings");
    }
  };

  return (
    <div className="mx-28">
      <form onSubmit={submitHandler}>
        <div className="w-full flex gap-3 mb-4">
          <DateInput name="date" isReadOnly label={"Booking date"} defaultValue={parseDate(date)} />
          <Input
            onChange={(e) => setPhone(e.currentTarget.value)}
            autoFocus
            className="mx-2"
            name="phone"
            type="number"
            label="Phone Number"
            placeholder="Enter your phone number"
            variant="bordered"
          />
        </div>
        <div className="w-full flex gap-3 mb-4 ">
          <Input
            name="guest"
            type="number"
            defaultValue={guests}
            isReadOnly
            autoFocus
            label="Guests"
            variant="bordered"
          />
        </div>
        <div className="flex justify-around">{error ? error : ""}</div>
        <div className="flex justify-around">
          <Button type="submit" className="px-6 mt-4 " color="primary">
            RESERVE THIS DATE
          </Button>
        </div>
      </form>
      <Link underline="hover" color="primary" href="/how-venuehub-works">
        You wont be charged yet*
      </Link>
    </div>
  );
}

"use server";

import { cookies } from "next/headers";

export const uploadBooking = async (bookingDateTime, venueId, guests, phone) => {
  const myCookies = cookies();

  if (!myCookies.get("session")) {
    console.log("session is null - RESERVATION/ACTION.JS");
    return { message: "User not logged in" };
  }

  const { value } = myCookies.get("session");
  const session = JSON.parse(value);

  if (session.loggedInAs == "VENDOR") {
    return { message: "Log in as USER for Booking reservation" };
  }

  const body = { bookingDateTime: `${bookingDateTime}T00:00:00`, phone, guests };

  const res = await fetch(`${process.env.HOST}/bookings/venue/${venueId}`, {
    cache: "no-store",
    method: "POST",
    body: JSON.stringify(body),
    headers: { "Content-Type": "application/json", Authorization: `Bearer ${session.jwt}` },
  });

  console.log(`Got ${res.status} from /bookings/venue - RESERVATION/ACTION.JS`);
  const data = await res.json();
  return data;
};

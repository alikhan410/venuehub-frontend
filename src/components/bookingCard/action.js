"use server";

export const getBookings = async (venueId) => {
  const res = await fetch(`${process.env.HOST}/bookings/venue/${venueId}`, {
    cache: "no-store",
    method: "GET",
  });

  console.log(`got ${res.status} from /bookings/venue - BookingCard/ACTION.JS`);
  const data = await res.json();
  return data;
};

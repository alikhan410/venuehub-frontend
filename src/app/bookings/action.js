"use server";
import { cookies } from "next/headers";

export const getBookings = async () => {
  const myCookies = cookies();

  if (!myCookies.get("session")) {
    console.log("session is null - BOOKINGS/ACTION.JS");
    return { bookings: [] };
  }

  const { value } = myCookies.get("session");

  if (!value) {
    console.log(`value from session is empty - BOOKINGS/ACTION.JS`);
    return { bookings: [] };
  }

  const session = JSON.parse(value);
  try {
    const res = await fetch(`${process.env.HOST}/bookings/user`, {
      cache: "no-store",
      method: "GET",
      headers: { Authorization: `Bearer ${session.jwt}` },
    });

    console.log(`got ${res.status} from /bookings/user - BOOKINGS/ACTION.JS`);
    const data = await res.json();
    console.log(data);
    return data;
  } catch (error) {
    return { status: 503, error: "Internal Server Error", message: "Service is offline" };
  }
};

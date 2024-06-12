"use server";

import { cookies } from "next/headers";

export const getVenueList = async () => {
  const myCookies = cookies();

  if (!myCookies.get("session")) {
    console.log("session is null - VENDOR/VENUE/ACTION.JS");
    return { venueList: [] };
  }

  const { value } = myCookies.get("session");
  const session = JSON.parse(value);

  try {
    const res = await fetch(`${process.env.HOST}/vendor/venue`, {
      cache: "no-store",
      method: "GET",
      headers: { Authorization: `Bearer ${session.jwt}` },
    });

    const data = await res.json();

    console.log(`got ${res.status} from /vendor/venue - VENDOR/VENUE/ACTION.JS`);
    return data;
  } catch (error) {
    return { status: 503, error: "Internal Server Error", message: "Server is offline" };
  }
};

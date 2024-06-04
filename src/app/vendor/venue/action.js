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

  const res = await fetch(`${process.env.HOST}/vendor/venue`, {
    cache: "no-store",
    method: "GET",
    headers: { Authorization: `Bearer ${session.jwt}` },
  });

  const data = await res.json();
  // if (res.status != 200) {
  //   console.log(`got ${res.status} from /vendor/venue - VENDOR/VENUE/ACTION.JS`);
  //   return data;
  // }

  console.log(`got ${res.status} from /vendor/venue - VENDOR/VENUE/ACTION.JS`);
  return data;
};

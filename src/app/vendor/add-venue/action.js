"use server";
import { cookies } from "next/headers";

export const uploadVenue = async (formData) => {
  const myCookies = cookies();

  if (!myCookies.get("session")) {
    console.log("session is null - VENDOR/ADD-VENUE/ACTION.JS");
    return;
  }

  const { value } = myCookies.get("session");
  const session = JSON.parse(value);

  const res = await fetch(`${process.env.HOST}/venue`, {
    cache: "no-store",
    method: "POST",
    body: formData,
    headers: { Authorization: `Bearer ${session.jwt}` },
  });

  const data = await res.json();
  console.log(`got ${res.status} from /vendor/add-venue - VENDOR/ADD-VENUE/ACTION.JS`);
  return data;
};

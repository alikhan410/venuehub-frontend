"use server";

import { cookies } from "next/headers";

export const signupUser = async (details) => {
  const myCookies = cookies();
  if (myCookies.get("session")) {
    myCookies.set("session", null);
  }

  const res = await fetch(`${process.env.HOST}/user/register`, {
    cache: "no-store",
    method: "POST",
    body: JSON.stringify(details),
    headers: {
      "Content-Type": "application/json",
    },
  });
  if (res.status != 201) {
    const data = await res.json();
    myCookies.set("session", null);
    return data;
  }

  console.log(`got ${res.status} from user/register - IN SIGNUP ACTIONS`);

  const currentUser = await res.json();
  const session = { jwt: currentUser.jwt };
  myCookies.set("session", JSON.stringify(session));

  return currentUser;
};

export const signupVendor = async (details) => {
  const myCookies = cookies();
  if (myCookies.get("session")) {
    myCookies.set("session", null);
  }

  const res = await fetch(`${process.env.HOST}/vendor/register`, {
    cache: "no-store",
    method: "POST",
    body: JSON.stringify(details),
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (res.status != 201) {
    const data = await res.json();
    myCookies.set("session", null);
    return data;
  }

  console.log(`got ${res.status} from vendor/register - IN SIGNUP ACTIONS`);
  const currentUser = await res.json();
  const session = { jwt: currentUser.jwt };
  myCookies.set("session", JSON.stringify(session));

  return currentUser;
};

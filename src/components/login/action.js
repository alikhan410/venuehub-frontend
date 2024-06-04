"use server";

import { cookies } from "next/headers";

export const loginUser = async (username, password) => {
  const myCookies = cookies();
  if (myCookies.get("session")) {
    myCookies.set("session", null);
  }
  const userCredentials = { username, password };
  const res = await fetch(`${process.env.HOST}/user/login`, {
    cache: "no-store",
    method: "POST",
    body: JSON.stringify(userCredentials),
    headers: {
      "Content-Type": "application/json",
    },
  });

  const data = await res.json();

  console.log(data);
  console.log(`got ${res.status} from user/login - IN LOGIN ACTIONS`);

  if (res.status != 200) {
    myCookies.delete("session");
    return data;
  }

  const session = { jwt: data.jwt };
  myCookies.set("session", JSON.stringify(session));

  return data;
};

export const loginVendor = async (username, password) => {
  const myCookies = cookies();
  if (myCookies.get("session")) {
    myCookies.delete("session");
  }
  const userCredentials = { username, password };
  const res = await fetch(`${process.env.HOST}/vendor/login`, {
    cache: "no-store",
    method: "POST",
    body: JSON.stringify(userCredentials),
    headers: {
      "Content-Type": "application/json",
    },
  });
  const data = await res.json();

  console.log(data);
  console.log(`got ${res.status} from vendor/login - IN LOGIN ACTIONS`);

  if (res.status != 200) {
    myCookies.delete("session");
    return data;
  }

  const session = { jwt: data.jwt };
  myCookies.set("session", JSON.stringify(session));

  return data;
};

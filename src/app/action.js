"use server";

import { cookies } from "next/headers";

export const getCurrentUser = async () => {
  console.log("------------------------------------------------");
  const myCookies = cookies();

  if (!myCookies.get("session")) {
    console.log("session is null - LAYOUT/ACTION.JS");
    return { username: null, roles: [], loggedInAs: null, isLogged: false };
  }

  const { value } = myCookies.get("session");

  if (!value) {
    console.log(`value from session is empty - LAYOUT/ACTION.JS`);
    return { username: null, roles: [], isLogged: false, loggedInAs: null };
  }

  const session = JSON.parse(value);

  const res = await fetch(`${process.env.HOST}/current-user`, {
    cache: "no-store",
    method: "GET",
    headers: { Authorization: `Bearer ${session.jwt}` },
  });

  const data = await res.json();

  if (res.status != 200) {
    console.log(`got ${res.status} from /current-user - LAYOUT/ACTION.JS`);
    return { username: null, roles: [], isLogged: false, loggedInAs: null };
  }

  console.log(`got ${res.status} from /current-user - LAYOUT/ACTION.JS`);
  const currentUser = { ...data, isLogged: true };

  return currentUser;
};

export const getVenueList = async () => {
  const res = await fetch(`${process.env.HOST}/venue`, {
    cache: "no-store",
    method: "GET",
  });
  const data = await res.json();

  if (res.status != 200) {
    console.log(`got ${res.status} from /venue - LAYOUT/ACTION.JS`);
    return data;
  }
  console.log(`got ${res.status} from /venue - LAYOUT/ACTION.JS`);
  return data;
};

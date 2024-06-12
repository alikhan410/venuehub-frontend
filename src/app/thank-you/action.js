"use server";

import { cookies } from "next/headers";

export const confirmPayment = async (clientId, clientSecret) => {
  const myCookies = cookies();

  if (!myCookies.get("session")) {
    console.log("session is null - CHECKOUTFORM/ACTION.JS");
    return { status: 401, error: "Unauthorized", message: "Please login and try again" };
  }

  const { value } = myCookies.get("session");

  if (!value) {
    console.log(`value from session is empty - CHECKOUTFORM/ACTION.JS`);
    return { status: 401, error: "Unauthorized", message: "Please login and try again" };
  }

  const session = JSON.parse(value);

  try {
    const res = await fetch(
      `${process.env.HOST}/orders/confirm-payment?clientId=${clientId}&clientSecret=${clientSecret}`,
      {
        cache: "no-store",
        method: "GET",
        headers: { Authorization: `Bearer ${session.jwt}` },
      }
    );

    console.log(`got ${res.status} from /orders/confirm-payment?clientSecret=${clientSecret} - CHECKOUTFORM/ACTION.JS`);
    const data = await res.json();
    console.log(data);
    return data;
  } catch (error) {
    return { status: 503, error: "Internal Server Error", message: "Service is offline" };
  }
};

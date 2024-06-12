"use server";

import { cookies } from "next/headers";

export const createPaymentIntent = async (bookingId) => {
  const myCookies = cookies();

  if (!myCookies.get("session")) {
    console.log("session is null - CREATE-ORDER/ACTION.JS");
    return { status: 401, error: "Unauthorized", message: "Please login and try again" };
  }

  const { value } = myCookies.get("session");

  if (!value) {
    console.log(`value from session is empty - CREATE-ORDER/ACTION.JS`);
    return { status: 401, error: "Unauthorized", message: "Please login and try again" };
  }

  const session = JSON.parse(value);
  const booking = { bookingId };
  try {
    const res = await fetch(`${process.env.HOST}/orders/create-payment-intent`, {
      cache: "no-store",
      method: "POST",
      body: JSON.stringify(booking),
      headers: { "Content-Type": "application/json", Authorization: `Bearer ${session.jwt}` },
    });

    console.log(`got ${res.status} from /orders/create-payment-intent - CREATE-ORDER/ACTION.JS`);
    const data = await res.json();
    return data;
  } catch (error) {
    return { status: 503, error: "Internal Server Error", message: "Service is offline" };
  }
};
export const getOrderStatus = async (orderId) => {
  const myCookies = cookies();

  if (!myCookies.get("session")) {
    console.log("session is null - CREATE-ORDER/ACTION.JS");
    return { status: 401, error: "Unauthorized", message: "Please login and try again" };
  }

  const { value } = myCookies.get("session");

  if (!value) {
    console.log(`value from session is empty - CREATE-ORDER/ACTION.JS`);
    return { status: 401, error: "Unauthorized", message: "Please login and try again" };
  }

  const session = JSON.parse(value);

  try {
    const res = await fetch(`${process.env.HOST}/orders/${orderId}`, {
      cache: "no-store",
      method: "GET",
      headers: { Authorization: `Bearer ${session.jwt}` },
    });

    console.log(`got ${res.status} from /orders/${orderId} - CREATE-ORDER/ACTION.JS`);
    const data = await res.json();
    return data;
  } catch (error) {
    return { status: 503, error: "Internal Server Error", message: "Service is offline" };
  }
};

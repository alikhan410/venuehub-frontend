"use server";
import { cookies } from "next/headers";

export const logoutUser = async () => {
  const myCookies = cookies();

  if (!myCookies.get("session")) {
    return { jwt: null };
  }
  // myCookies.set("session", null);
  myCookies.delete("session");
};

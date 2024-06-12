"use client";
import { useEffect } from "react";
import { confirmPayment } from "./action";

export default function ThankyouPage({ params }) {
  useEffect(() => {
    const clientId = new URLSearchParams(window.location.search).get("clientId");
    const clientSecret = new URLSearchParams(window.location.search).get("clientSecret");

    if (!clientId) {
      return;
    }
    const confirm = async () => {
      const res = await confirmPayment(clientId, clientSecret);

      console.log(res);
    };
    confirm();
  }, []);

  return <p>THANK YOU</p>;
}

"use client";
import React, { useState, useEffect } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "@/components/CheckoutForm";

// Make sure to call loadStripe outside of a component’s render to avoid
// recreating the Stripe object on every render.
// This is a public sample test API key.
// Don’t submit any personally identifiable information in requests made with this key.
// Sign in to see your own test API key embedded in code samples.
const stripePromise = loadStripe(
  "pk_test_51OAMLgJlzKJeJaWJR0Io6NyvMyVIOfTQg3mIUYiQAAgfTetMgeQnZlgUWy8wFBtxRAssiY390waQYuS2QUTTDcB700wqd9Fgm4"
);

export default function Checkout({ searchParams }) {
  const clientSecret = searchParams.payment_intent_client_secret;

  const [isAvailable, setIsAvailable] = useState(false);

  useEffect(() => {
    const getStatus = async () => {
      const res = await axios.get(`/order/${clientSecret}`);

      const status = res.status;

      if (status == "FAILED" || status == "BOOKED" || status == "COMPLETED") {
        setIsAvailable(false);
      } else {
        //if RESERVED
        setIsAvailable(true);
      }
    };

    getStatus();
  }, []);

  const appearance = {
    theme: "stripe",
  };
  const options = {
    clientSecret,
    appearance,
  };

  return (
    <div className="App">
      {isAvailable ? (
        <Elements options={options} stripe={stripePromise}>
          <CheckoutForm />
        </Elements>
      ) : (
        <p>PAYMENT FAILED</p>
      )}
    </div>
  );
}

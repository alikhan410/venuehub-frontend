"use client";
import React, { useState, useEffect } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "@/components/checkoutForm/CheckoutForm";
import { getOrderStatus } from "./action";
import { Spinner } from "@nextui-org/react";
import MyCustomError from "@/components/customError/MyCustomError";

// Make sure to call loadStripe outside of a component’s render to avoid
// recreating the Stripe object on every render.
// This is a public sample test API key.
// Don’t submit any personally identifiable information in requests made with this key.
// Sign in to see your own test API key embedded in code samples.
const stripePromise = loadStripe(
  "pk_test_51OAMLgJlzKJeJaWJR0Io6NyvMyVIOfTQg3mIUYiQAAgfTetMgeQnZlgUWy8wFBtxRAssiY390waQYuS2QUTTDcB700wqd9Fgm4"
);

export default function Checkout({ searchParams }) {
  const [clientSecret, setClientSecret] = useState("");
  const [isAvailable, setIsAvailable] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getStatus = async () => {
      const res = await getOrderStatus(searchParams.orderId);
      console.log(res);
      if (res.error) {
        setError(<MyCustomError response={res} />);
      } else if (res.orderStatus != "PENDING") {
        const err = {
          status: 400,
          error: "Bad Request",
          message: "Payment in processed",
        };
        setError(<MyCustomError response={err} />);
      } else {
        setClientSecret(res.clientSecret);
        setIsAvailable(true);
      }
    };

    getStatus();
  }, []);

  const appearance = {
    theme: "flat",
  };
  // const options = {
  //   clientSecret,
  //   appearance,
  // };

  const options = {
    clientSecret,
    appearance,
    layout: {
      type: "tabs",
      defaultCollapsed: false,
    },
  };

  return (
    <>
      {error ? (
        error
      ) : (
        <div className="App">
          {isAvailable ? (
            <Elements options={options} stripe={stripePromise}>
              <CheckoutForm />
            </Elements>
          ) : (
            <Spinner />
          )}
        </div>
      )}
    </>
  );
}

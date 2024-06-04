"use client";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { Card, CardHeader, CardBody, CardFooter, Divider, Link, Image, Button } from "@nextui-org/react";

export default function Home({ params }) {
  const [order, setOrder] = useState({});
  const [orderStatus, setOrderStatus] = useState({});
  const [bookingStatus, setBookingStatus] = useState(false);

  const orderData = { amount: 44000, bookingId: params.id };

  // const { doRequest } = useRequest({
  //   method: "post",
  //   url: "/order/create-payment-intent",
  //   body: orderData,
  // });

  // const setSecret = () => {
  //   setClientSecret("pi_3PFiUTJlzKJeJaWJ0Us73Ckx_secret_BNueSv6wyRhBdc9I95KDfrXdK");
  // };

  useEffect(() => {
    //make request to /booking/params.id to get booking detail

    const getPaymentIntent = async () => {
      const res = await axios.post("/order/create-payment-intent", orderData);
      setOrder(res.body);
    };

    const getBookingStatus = async () => {
      const res = await axios.get(`/booking/${bookingId}`);
      if (res.status == "FAILED" || res.status == "BOOKED" || res.status == "COMPLETED") {
        setBookingStatus(false);
      } else {
        setBookingStatus(true);
      }
    };

    getBookingStatus();
    getPaymentIntent();

    // setSecret();
  }, []);

  return (
    <Card className="max-w-[400px]">
      <CardHeader className="flex gap-3">
        <Image
          alt="nextui logo"
          height={40}
          radius="sm"
          src="https://avatars.githubusercontent.com/u/86160567?s=200&v=4"
          width={40}
        />
        <div className="flex flex-col">
          <p className="text-md">NextUI</p>
          <p className="text-small text-default-500">nextui.org</p>
        </div>
      </CardHeader>
      <Divider />
      <CardBody>
        <p>Make beautiful websites regardless of your design experience.</p>
      </CardBody>
      <Divider />
      <CardFooter>
        {bookingStatus ? (
          <Button as={Link} href={`/checkout?payment_intent_client_secret=${clientSecret}`}>
            Checkout
          </Button>
        ) : (
          <Button as={Link} isDisable href={`/checkout?payment_intent_client_secret=${clientSecret}`}>
            Checkout
          </Button>
        )}
      </CardFooter>
    </Card>
  );
}

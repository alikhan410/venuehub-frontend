"use client";
import React, { useState, useEffect } from "react";
import { Card, CardHeader, CardBody, CardFooter, Divider, Link, Image, Button, Chip } from "@nextui-org/react";
import { getOrderStatus } from "./action";

export default function CreateOrderPage({ params }) {
  const [order, setOrder] = useState({});
  const [orderStatus, setOrderStatus] = useState({});
  const [bookingStatus, setBookingStatus] = useState(false);
  const [clientSecret, setClientSecret] = useState(null);
  const [isDisabled, setIsDisabled] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getStatus = async () => {
      const res = await getOrderStatus(params.orderId);

      if (res.error) {
        setIsDisabled(true);
        setError(<Chip color="danger">{res.message}</Chip>);
      } else {
        setIsDisabled(false);
        setClientSecret(res.clientSecret);
      }
    };

    getStatus();
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
        <div>{error ? error : ""}</div>
        <Button isDisabled={isDisabled} as={Link} href={`/checkout?payment_intent_client_secret=${clientSecret}`}>
          Checkout
        </Button>
        {/* {bookingStatus ? (
          <Button as={Link} href={`/checkout?payment_intent_client_secret=${clientSecret}`}>
            Checkout
          </Button>
        ) : (
          <Button isDisabled>Checkout</Button>
        )} */}
      </CardFooter>
    </Card>
  );
}

"use client";

import React from "react";
import { Chip, Button } from "@nextui-org/react";
import Link from "next/link";
import { createPaymentIntent, getOrderStatus } from "./action";

const statusColorMap = {
  PENDING: "warning",
  COMPLETED: "success",
  FAILED: "danger",
  BOOKED: "primary",
  RESERVED: "warning",
};

const BookingCell = (booking, columnKey, router) => {
  const clickHandler = async () => {
    const res = await createPaymentIntent(booking.id);
    if (res.error) {
      console.log(res.message);
    } else {
      const order = await getOrderStatus(res.orderId);
      // router.push(`/create-order/${res.orderId}`);
      router.push(`/checkout?orderId=${res.orderId}`);
    }
  };

  const cellValue = booking[columnKey];

  switch (columnKey) {
    case "status":
      return (
        <Chip className="capitalize" color={statusColorMap[booking.status] || "default"} size="sm" variant="flat">
          {cellValue}
        </Chip>
      );
    case "venueName":
      return (
        <Link color="primary" href={`/venue/${booking.id}`}>
          {booking.venueName}
        </Link>
      );

    case "bookingDate":
      return <p>{booking.bookingDate.split("T")[0]}</p>;
    case "actions":
      return (
        <div className="text-start">
          {booking.status === "RESERVED" ? (
            <Button onClick={clickHandler} color="warning" variant="solid">
              Pay now
            </Button>
          ) : (
            <Button isDisabled>No action</Button>
          )}
        </div>
      );
    default:
      return cellValue;
  }
};

export default BookingCell;

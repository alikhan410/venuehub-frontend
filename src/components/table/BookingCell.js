import React from "react";
import { Chip, Button } from "@nextui-org/react";
import { parseDate, parseDateTime } from "@internationalized/date";
import Link from "next/link";

const statusColorMap = {
  PENDING: "warning",
  COMPLETED: "success",
  FAILED: "danger",
  BOOKED: "primary",
  RESERVED: "warning",
};

const BookingCell = (booking, columnKey) => {
  console.log(booking);
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
            <Button href={`/create-order/${booking.id}`} as={Link} color="warning" variant="solid">
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

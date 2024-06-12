"use client";
import React from "react";
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  Chip,
  Button,
  Spinner,
} from "@nextui-org/react";
import { columns } from "./data";
import Link from "next/link";
// import { useCallback } from "react";
import BookingCell from "./BookingCell";
import { useRouter } from "next/navigation";

const statusColorMap = {
  PENDING: "warning",
  COMPLETED: "success",
  FAILED: "danger",
  BOOKED: "primary",
  RESERVED: "warning",
};

export default function BookingTable({ bookings }) {
  const router = useRouter();
  if (!bookings) {
    return (
      <div className="mx-16 grid grid-cols-1">
        <Spinner />
      </div>
    );
  }

  if (bookings.length === 0) {
    return <div className="mx-16 grid grid-cols-1">NO BOOKINGS</div>;
  }

  return (
    <Table isStriped aria-label="Example table with custom cells">
      <TableHeader columns={columns}>
        {(column) => (
          <TableColumn key={column.uid} align="start">
            {column.name}
          </TableColumn>
        )}
      </TableHeader>

      <TableBody items={bookings}>
        {(item) => (
          <TableRow key={item.id}>
            {(columnKey) => <TableCell>{BookingCell(item, columnKey, router)}</TableCell>}
          </TableRow>
        )}
      </TableBody>
    </Table>
  );
}

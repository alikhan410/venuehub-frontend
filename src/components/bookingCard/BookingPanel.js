"use client";
import { Card, CardHeader, CardBody, CardFooter, Divider, Link, Button, Input, chip, Chip } from "@nextui-org/react";
import { DatePicker } from "@nextui-org/react";
import { today, isWeekend, getLocalTimeZone, parseDate } from "@internationalized/date";
import { useLocale } from "@react-aria/i18n";
import { useState } from "react";

export default function BookingPanel({ venueId, dates, venuePrice }) {
  // const [bookingDate, setBookingDate] = useState(today(getLocalTimeZone()));
  const [dateString, setDateString] = useState("");
  const [guest, setGuest] = useState(50);
  const [disabled, setDisabled] = useState(true);
  const [error, setError] = useState(null);

  let now = today(getLocalTimeZone());

  // let disabledRanges = [
  //   [now, now.add({ days: 5 })],
  //   [now.add({ days: 14 }), now.add({ days: 16 })],
  //   [now.add({ days: 23 }), now.add({ days: 24 })],
  // ];

  // let { locale } = useLocale();

  const isDateUnavailable = (date) => {
    let isUnAvailable = false;
    const targetDate = new Date(Date.parse(date)).toDateString();

    for (let i = 0; i < dates.length; i++) {
      const bookingDate = new Date(Date.parse(dates[i].BookingDate)).toDateString();

      if (bookingDate === targetDate) {
        isUnAvailable = true;
        break; // Exit the loop
      }
    }

    return isUnAvailable;
  };
  const dateHandler = (e) => {
    const year = e.year;
    const month = e.month.toString().padStart(2, "0");
    const day = e.day.toString().padStart(2, "0");

    setDateString(`${year}-${month}-${day}`);
  };

  const guestHandler = (e) => {
    if (e.currentTarget.value > 49) {
      setGuest(e.currentTarget.value);
      setError(null);
      setDisabled(false);
    } else {
      setError(<Chip color="danger">Guest must be more than 50</Chip>);
    }
  };

  return (
    <Card className="flex w-96">
      <CardHeader>
        <div>
          <p className="text-lg font-bold">PKR {venuePrice}</p>
        </div>
      </CardHeader>
      <Divider />

      <CardBody className="flex flex-col gap-4 justify-between py-5">
        <div>
          <label htmlFor="bookingDate" className="font-semibold text-medium">
            Date to be reserved
          </label>
          <DatePicker
            onChange={dateHandler}
            isRequired
            // value={value}
            color="warning"
            aria-label="Reservation date"
            isDateUnavailable={isDateUnavailable}
            minValue={today(getLocalTimeZone())}
          />
        </div>
        <div>
          <label htmlFor="guestNumber" className="font-semibold text-medium">
            Guests
          </label>
          <Input
            onChange={guestHandler}
            placeholder={0}
            description="Please provide total number of guests"
            name="guestNumber"
            type="number"
          ></Input>
          {error ? error : ""}
        </div>
        <Button
          isDisabled={disabled}
          as={Link}
          href={`/reservation/?date=${dateString}&venueId=${venueId}&guests=${guest}`}
          radius="full"
          className="text-medium font-semibold bg-gradient-to-tr from-red-500 to-pink-500 text-white shadow-lg"
        >
          Reserve Date
        </Button>
      </CardBody>

      <Divider />
      <CardFooter></CardFooter>
    </Card>
  );
}

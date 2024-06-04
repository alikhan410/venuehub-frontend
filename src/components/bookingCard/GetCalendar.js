"use client";
import React from "react";
import { Calendar } from "@nextui-org/react";
import { today, getLocalTimeZone, isWeekend, parseDateTime, parseDate } from "@internationalized/date";
import { useLocale } from "@react-aria/i18n";

export default function GetCalendar({ dates }) {
  const now = today(getLocalTimeZone());

  // const disabledRanges = [now];

  // const { locale } = useLocale();

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

  // let isDateUnavailable = (date) =>
  //   isWeekend(date, locale) ||
  //   disabledRanges.some((interval) => date.compare(interval[0]) >= 0 && date.compare(interval[1]) <= 0);

  return (
    <div>
      <p className="flex justify-around mb-2 font-medium text-lg text-slate-950">Available Dates</p>
      <Calendar
        // isReadOnly
        showShadow="true"
        color="danger"
        aria-label="Date (Unavailable)"
        isDateUnavailable={isDateUnavailable}
      />
    </div>
  );
}

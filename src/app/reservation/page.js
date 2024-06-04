import ReservationForm from "@/components/reservation/ReservationForm";
import { uploadBooking } from "./action";

export default function Reservation({ searchParams }) {

  return (
    <ReservationForm
      venueId={searchParams.venueId}
      guests={searchParams.guests}
      formHandler={uploadBooking}
      date={searchParams.date}
    />
  );
}

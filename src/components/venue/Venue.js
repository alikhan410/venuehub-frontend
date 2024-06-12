import ImageGrid from "./ImageGrid";
import VenueHeader from "./VenueHeader";
import { Divider, Spinner } from "@nextui-org/react";
import VenueVendor from "./VenueVendor";
import VenueServices from "./VenueServices";
import VenueDescription from "./VenueDescription";
import BookingCard from "../bookingCard/BookingCard";

export default function Venue({ venue }) {
  // console.log(venue);

  if (!venue) {
    return (
      <div className="mx-16 grid grid-cols-1">
        <Spinner />
      </div>
    );
  }

  return (
    <div className="mx-16 grid grid-cols-1">
      <ImageGrid images={venue && venue.imageDataList} />
      <VenueHeader name={venue && venue.name} location={venue && venue.location} />
      <Divider />
      <VenueVendor username={venue && venue.username} />
      <Divider />
      <VenueServices />
      <Divider />
      <VenueDescription description={venue && venue.description} />
      <Divider />
      <BookingCard venueId={venue && venue.id} venuePrice={venue && venue.estimate} />
      <Divider />
    </div>
  );
}
// Free cancellation for 48 hours

// Dive right in
// This is one of the few places in the area with a pool.

// Veluvana is a Superhost
// Superhosts are experienced, highly rated Hosts.

// Free cancellation for 48 hours

// Self check-in
// Check yourself in with the keypad.

// Park for free
// This is one of the few places in the area with free parking.

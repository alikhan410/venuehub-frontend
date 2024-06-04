import VenueCard from "@/components/venueCard/VenueCard";

export default function CardGrid({ venueList }) {
  console.log(venueList);
  return (
    <>
      <div className="grid sm:grid-cols-1 gap-x-6	gap-y-10 lg:grid-cols-4">
        {venueList.map((venue) => (
          <VenueCard key={venue.id} id={venue.id} title={venue.name} image={venue.image.image} price={venue.estimate} />
        ))}
      </div>
    </>
  );
}

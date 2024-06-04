import Link from "next/link";
import React from "react";

export default function VenueHeader({ name, location }) {
  const points = ["Accommodation 150", "Segregation", "Parking"];
  return (
    <div className="my-7">
      <h3 className="font-semibold text-2xl text-slate-950">
        {name}, {location}
      </h3>

      <ul className="text-base leading-7">
        {points.map((p, i) => (
          <React.Fragment key={i}>
            <li className="inline">{p}</li>
            {i !== points.length - 1 && <li className="inline"> · </li>}
          </React.Fragment>
        ))}
      </ul>

      <div className="flex items-center gap-2 leading-7">
        <span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 32 32"
            aria-hidden="true"
            role="presentation"
            focusable="false"
            width={16}
            height={16}
          >
            <path
              fillRule="evenodd"
              d="m15.1 1.58-4.13 8.88-9.86 1.27a1 1 0 0 0-.54 1.74l7.3 6.57-1.97 9.85a1 1 0 0 0 1.48 1.06l8.62-5 8.63 5a1 1 0 0 0 1.48-1.06l-1.97-9.85 7.3-6.57a1 1 0 0 0-.55-1.73l-9.86-1.28-4.12-8.88a1 1 0 0 0-1.82 0z"
            ></path>
          </svg>
        </span>
        <p className="font-semibold text-lg">4.89</p>
        <span className="font-bold"> · </span>
        <Link href="#" className="font-semibold text-lg underline">
          220 reviews
        </Link>
      </div>
    </div>
  );
}

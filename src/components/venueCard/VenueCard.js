import { Card, CardBody, CardFooter, Image, Link } from "@nextui-org/react";

export default function VenueCard({ id, title, price, image }) {
  // console.log(image);

  return (
    <Card radius="md" shadow="none" className="border-none relative">
      <Image
        width="100%"
        alt="Woman listing to music"
        className="h-72 object-cover z-0"
        src={`data:image/jpeg;base64,${image}`}
      />
      {/* <img src={`data:image/jpeg;base64,${image}`} alt="Image" /> */}

      <div className="inset-x-0 top-0 flex justify-between px-4 pt-4 absolute">
        <div>
          <button
            type="button"
            className="w-auto h-8 drop-shadow-md px-4 py-1 shadow-lg bg-white font-normal rounded-full align-center"
          >
            People choice
          </button>
        </div>
        <div className="justify-self-end self-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 32 32"
            aria-hidden="true"
            role="presentation"
            focusable="false"
            width={15}
            height={15}
          >
            <path d="M16 28c7-4.73 14-10 14-17a6.98 6.98 0 0 0-7-7c-1.8 0-3.58.68-4.95 2.05L16 8.1l-2.05-2.05a6.98 6.98 0 0 0-9.9 0A6.98 6.98 0 0 0 2 11c0 7 7 12.27 14 17z"></path>
          </svg>
        </div>
      </div>
      <CardBody className="p-0 pt-3 pb-1 flex-row justify-between">
        <div>
          <Link href={`/venue/${id}`} className="font-medium text-slate-950 leading-5">
            {title}
          </Link>
          <p className="text-slate-500 leading-5">12 kilometers away</p>
          <p className="text-slate-500 leading-5">Mar 10 - 15</p>
        </div>
        <div className="flex items-center self-start">
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 32 32"
              aria-hidden="true"
              role="presentation"
              focusable="false"
              width={12}
              height={12}
            >
              <path
                fillRule="evenodd"
                d="m15.1 1.58-4.13 8.88-9.86 1.27a1 1 0 0 0-.54 1.74l7.3 6.57-1.97 9.85a1 1 0 0 0 1.48 1.06l8.62-5 8.63 5a1 1 0 0 0 1.48-1.06l-1.97-9.85 7.3-6.57a1 1 0 0 0-.55-1.73l-9.86-1.28-4.12-8.88a1 1 0 0 0-1.82 0z"
              ></path>
            </svg>
          </span>
          <span className="pl-1 text-slate-950">4.93</span>
        </div>
      </CardBody>
      <CardFooter className="p-0">
        <p className="text-slate-950">
          <span className="font-medium">{price}</span> night
        </p>
      </CardFooter>
    </Card>
  );
}

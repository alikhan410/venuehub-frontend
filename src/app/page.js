"use client";

import MyCustomError from "@/components/customError/MyCustomError";
import CardGrid from "@/components/venueCard/CardGrid";
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Tab,
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
} from "@nextui-org/react";
import Image from "next/image";
import { useEffect, useState } from "react";
import { getVenueList } from "./action";

export default function Home() {
  const [venueList, setVenueList] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const callApi = async () => {
      const res = await getVenueList();

      if (res.error) {
        setError(<MyCustomError response={res} />);
      } else {
        setError(null);
        const { venueList } = res;
        setVenueList(venueList);
      }
    };

    callApi();
  }, []);

  return (
    <>
      {error ? error : ""}
      <CardGrid venueList={venueList} />

      {/* <body
        className="bg-center bg-cover bg-no-repeat backdrop-blur-md flex justify-center h-screen font-sans relative p-8"
        style="background-image: url('https://images.pexels.com/photos/2876787/pexels-photo-2876787.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2');"
      > */}

      {/* </body> */}

      {/* <div className="text-center p-8">
        <h1 className="text-2xl font-bold">Product Highlight</h1>
        <p className="text-lg text-gray-600 mb-8">Somethings you will get in this product</p>
        <div className="flex flex-wrap justify-center gap-6">
          <div className="bg-gray-50 rounded-lg shadow-md w-64 p-6 text-center">
            <div className="text-4xl text-purple-600 mb-4">🔄</div>
            <h2 className="text-xl font-semibold mb-2">Reusable Blocks</h2>
            <p className="text-gray-600">Easy to customize Screens, & Reusable section</p>
          </div>
          <div className="bg-gray-50 rounded-lg shadow-md w-64 p-6 text-center">
            <div className="text-4xl text-purple-600 mb-4">🖥️</div>
            <h2 className="text-xl font-semibold mb-2">Ready to Every Screen</h2>
            <p className="text-gray-600">Available for Desktop, tablet, & mobile screen</p>
          </div>
          <div className="bg-gray-50 rounded-lg shadow-md w-64 p-6 text-center">
            <div className="text-4xl text-purple-600 mb-4">📂</div>
            <h2 className="text-xl font-semibold mb-2">Organized Layer</h2>
            <p className="text-gray-600">The file named, grouped and well organized</p>
          </div>
          <div className="bg-gray-50 rounded-lg shadow-md w-64 p-6 text-center">
            <div className="text-4xl text-purple-600 mb-4">🔗</div>
            <h2 className="text-xl font-semibold mb-2">Free Icons</h2>
            <p className="text-gray-600">Get +100 icons ready to use form our icon packs</p>
          </div>
          <div className="bg-gray-50 rounded-lg shadow-md w-64 p-6 text-center">
            <div className="text-4xl text-purple-600 mb-4">💻</div>
            <h2 className="text-xl font-semibold mb-2">Ready to develop</h2>
            <p className="text-gray-600">The design code is ready in Figma's dev mode.</p>
          </div>
          <Card className="bg-gray-50 rounded-lg shadow-md w-64 p-6 text-center">
            <div className="text-4xl text-purple-600 mb-4">📡</div>
            <h2 className="text-xl font-semibold mb-2">Ready to Live</h2>
            <p className="text-gray-600">Ready to Live for no code website</p>
          </Card>
        </div>
      </div> */}
    </>
  );
}

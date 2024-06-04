"use client";
import { Button } from "@nextui-org/react";
import Link from "next/link";
import { logoutUser } from "./action";

export const Logout = () => {
  const handlePress = () => {
    logoutUser();
  };

  return (
    <Button as={Link} href="/" onPress={handlePress} className="border-2 border-sky-500" color="white">
      Logout
    </Button>
  );
};

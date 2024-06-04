"use client";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { UserNavbar } from "./UserNavbar";
import { VendorNavbar } from "./VendorNavbar";
import { GuestNavbar } from "./GuestNavbar";

export const Navbar = ({ currentUser }) => {
  const [item, setItem] = useState("");

  useEffect(() => {
    setItem(localStorage.getItem("item"));
  }, []);

  const setItemActive = (e) => {
    localStorage.setItem("item", e.currentTarget["name"]);
  };

  return (
    <>
      {currentUser.loggedInAs === "USER" && (
        <UserNavbar setItemActive={setItemActive} item={item} currentUser={currentUser} />
      )}
      {currentUser.loggedInAs === "VENDOR" && (
        <VendorNavbar setItemActive={setItemActive} item={item} currentUser={currentUser} />
      )}
      {currentUser.loggedInAs === null && (
        <GuestNavbar setItemActive={setItemActive} item={item} currentUser={currentUser} />
      )}
    </>
  );
};

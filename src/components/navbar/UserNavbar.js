"use client";
import React from "react";
import { Navbar as NextUINavbar, NavbarBrand, NavbarContent, NavbarItem, Link } from "@nextui-org/react";
import Login from "../login/Login";
import { Logout } from "../logout/Logout";
import Signup from "../signup/Signup";

export const UserNavbar = ({ setItemActive, item, currentUser }) => {
  return (
    <NextUINavbar>
      <NavbarBrand>
        <Link href="/" className="font-bold text-inherit">
          VENUEHUB
        </Link>
      </NavbarBrand>
      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem isActive={item == "home" ? true : false}>
          <Link name="home" color={item == "home" ? "" : "foreground"} href="/" onClick={setItemActive}>
            Home
          </Link>
        </NavbarItem>
        <NavbarItem isActive={item == "allvenues" ? true : false}>
          <Link name="allvenues" color={item == "allvenues" ? "" : "foreground"} href="/" onClick={setItemActive}>
            All Venues
          </Link>
        </NavbarItem>
        <NavbarItem isActive={item == "mybookings" ? true : false}>
          <Link
            name="mybookings"
            color={item == "mybookings" ? "" : "foreground"}
            href="/bookings"
            onClick={setItemActive}
          >
            My Bookings
          </Link>
        </NavbarItem>
        <NavbarItem isActive={item == "orders" ? true : false}>
          <Link name="orders" color={item == "orders" ? "" : "foreground"} href="/" onClick={setItemActive}>
            Orders
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem className="hidden lg:flex">{currentUser.isLogged ? <Logout /> : <Login />}</NavbarItem>
        <NavbarItem>{currentUser.isLogged ? "" : <Signup />}</NavbarItem>
      </NavbarContent>
    </NextUINavbar>
  );
};

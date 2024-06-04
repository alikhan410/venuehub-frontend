"use client";
import React from "react";
import { Input } from "@nextui-org/react";
import { MailIcon } from "../icons/MailIcon";
import { LockIcon } from "../icons/LockIcon";

export const SignupForm = () => {
  return (
    <>
      <div className="w-full flex gap-3">
        <Input
          name="username"
          autoFocus
          endContent={<MailIcon className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />}
          label="Username"
          placeholder="Enter your username"
          variant="bordered"
        />
        <Input
          name="email"
          autoFocus
          endContent={<MailIcon className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />}
          label="Email"
          placeholder="Enter your email"
          variant="bordered"
        />
      </div>
      <div className="w-full flex gap-3">
        <Input
          name="firstName"
          autoFocus
          endContent={<MailIcon className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />}
          label="First Name"
          placeholder="Enter your First Name"
          variant="bordered"
        />
        <Input
          name="lastName"
          autoFocus
          endContent={<MailIcon className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />}
          label="Last Name"
          placeholder="Enter your Last Name"
          variant="bordered"
        />
      </div>
      <Input
        name="password"
        endContent={<LockIcon className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />}
        label="Password"
        placeholder="Enter your password"
        type="password"
        variant="bordered"
      />
    </>
  );
};

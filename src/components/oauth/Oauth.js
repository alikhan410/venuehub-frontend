"use client";
import FacebookLogin from "@/app/utils/oauthFunction";
import Script from "next/script";

export default function Oauth() {

  return (
    <Script
      strategy="beforeInteractive"
      src="https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v19.0"
      onReady={FacebookLogin}
    />
  );
}

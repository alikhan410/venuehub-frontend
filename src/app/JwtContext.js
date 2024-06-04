"use client";
import { useState } from "react";
import { createContext } from "react";

export const JwtContext = createContext({
  jwt: null, // Default value
  setJwt: (token) => {},
});

export function JwtProvider({ children, token = null }) {
  const [jwt, setJwt] = useState(token);

  const handleSetJwt = (token) => {
    setJwt(token);
  };

  return <JwtContext.Provider value={{ jwt: jwt, setJwt: handleSetJwt }}>{children}</JwtContext.Provider>;
}

"use client";
import React from "react";
import { useUser } from "@/app/provider";
import Image from "next/image";

function WelcomeContainer() {
  const { User } = useUser();

  console.log("User in WelcomeContainer:", User);

  return (
    <div className="bg-white p-5 rounded-xl flex justify-between items-center shadow-md">
      <div>
        <h1 className="text-lg font-bold">
          Welcome Back, {User?.name || "Guest"}
        </h1>
        <h2 className="text-gray-500">
          AI-Driven Interview, Hassle free Hiring.
        </h2>
      </div>
      {User && (
        <Image
          src={User?.picture}
          alt="userAvatar"
          width={40}
          height={40}
          className="rounded-full"
        />
      )}
    </div>
  );
}

export default WelcomeContainer;

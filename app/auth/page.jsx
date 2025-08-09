"use client";
import React from "react";
import Image from "next/image";
import { supabase } from "@/services/supabaseClient";

// This is the login page for the application.
function login() {
  const signInWithGoogle = async () => {
    const { error } = await supabase.auth.signInWithOAuth({
      provider: "google",
    });
    if (error) {
      console.error("Error signing in with Google:", error);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div className="flex flex-col items-center justify-center">
        <Image
          src={"/icon.png"}
          alt="logo"
          width={400}
          height={100}
          className="w-[250px]"
        />

        <div className="flex flex-col items-center justify-center bg-white shadow-lg rounded-lg ">
          <Image
            src={"/logo.png"}
            alt="logo"
            width={400}
            height={400}
            className="w-[400px]h-[250px]
            rounded-lg mb-4"
          />

          <h2 className="text-2xl font-semibold text-center mt-6">
            Welcome to beRecruit!
          </h2>
          <p className="text-gray-600 text-center">Sign in with Google</p>
          <button
            className="mt-4 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 w-full"
            onClick={signInWithGoogle}
          >
            Sign in with Google
          </button>
        </div>
      </div>
    </div>
  );
}

export default login;

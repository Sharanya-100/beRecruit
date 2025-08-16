
"use client";
import React from "react";
import WelcomeContainer from "./_components/WelcomeContainer";
import { useUser } from "@/app/provider";

function Dashboard() {
  const {user}=useUser();
  return (
    <div>
      <WelcomeContainer />
    </div>
  );
}
 
export default Dashboard;

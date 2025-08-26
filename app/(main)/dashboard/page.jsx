"use client";
import React from "react";
import WelcomeContainer from "./_components/WelcomeContainer";
import { useUser } from "@/app/provider";
import CreateOptions from "./_components/CreateOptions";
import LatestInterviewsList from "./_components/LatestInterviewsList";

function Dashboard() {
  const { User } = useUser();
  return (
    <div>
      {/* <WelcomeContainer /> */}
      <h2 className="my-3 text-lg font-bold">Dashboard</h2>
      <CreateOptions />
      <LatestInterviewsList />
      
    </div>
  );
}

export default Dashboard;

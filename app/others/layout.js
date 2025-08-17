import React from "react";
import DashboardProvider from "./provider";

function DashboardLayout({ Children }) {
  return (
    <div className="bg-secondary">
      <DashboardProvider>
        <div className="p-5">{Children}</div>
      </DashboardProvider>
    </div>
  );
}

export default DashboardLayout;

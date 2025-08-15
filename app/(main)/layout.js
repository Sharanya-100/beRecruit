import React, { Children } from "react";
import DashboardProvider from "./provider";

function DashboardLayout({ Children }) {
  return (
    <div>
      <DashboardProvider>{Children}</DashboardProvider>
    </div>
  );
}

export default DashboardLayout;

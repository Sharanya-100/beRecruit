import Image from "next/image";
import Dashboard from "./dashboard/page";
import DashboardProvider from "./provider";


export default function Home() {
  return (
    <div>
      Hello <DashboardProvider/>
    </div>
  );
}

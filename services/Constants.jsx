import { constants } from "buffer";
import { BriefcaseBusinessIcon, Calendar, CircleArrowOutUpLeftIcon, Code2Icon, FolderCode, LayoutDashboard, List, PersonStanding, Settings, Settings2, User2Icon, WalletCards } from "lucide-react";

export const SideBarOptions = [
  {
    name: "Dashboard",
    icon: LayoutDashboard,
    path: "/dashboard",
  },
  {
    name: "Scheduled Interview",
    icon: Calendar,
    path: "/scheduled-interview",
  },
  {
    name: "All Interview",
    icon: List,
    path: "/all-interview",
  },
  {
    name: "Billing",
    icon: WalletCards,
    path: "/billing",
  },
  {
    name: "Settings",
    icon: Settings,
    path: "/settings",
  },
];

export const InterviewType=[
  {
    title:'Technical',
    icon:FolderCode
  },
  {
    title:'Behavioral',
    icon:User2Icon
  },
  {
    title:'Problem-solving',
    icon:Code2Icon
  },
  {
    title:'Cultural Fit',
    icon:BriefcaseBusinessIcon
  },
  {
    title:'Leadership',
    icon:PersonStanding
  }


]
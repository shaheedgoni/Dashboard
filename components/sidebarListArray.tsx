import { sidebarListProps } from "@/types/sidebarListTypes";
import {
  LuLayoutGrid,
  LuUsers,
  LuTrendingUp,
  LuFileText,
  LuFlag,
  LuSettings,
} from "react-icons/lu";

export const sidebarList: sidebarListProps[] = [
  {
    title: "Overview",
    href: "/overview",
    icon: <LuLayoutGrid />,
  },
  {
    title: "Users",
    href: "/users",
    icon: <LuUsers />,
  },
  {
    title: "Analytics",
    href: "/analytics",
    icon: <LuTrendingUp />,
  },
  {
    title: "Content",
    href: "/content",
    icon: <LuFileText />,
  },
  {
    title: "Reports",
    href: "/reports",
    icon: <LuFlag />,
  },
  {
    title: "Settings",
    href: "/settings",
    icon: <LuSettings />,
  },
];

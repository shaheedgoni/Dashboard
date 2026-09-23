import { LuCalendarClock, LuCloudDownload } from "react-icons/lu";
import { MdOutlineCancel } from "react-icons/md";
import { VscReport } from "react-icons/vsc";

export const reportCardDetails = [
  {
    id: "f47ac10b-58cc-4372-a567-0e02b2c3d479",
    icon: <VscReport size={30} />,
    label: "Total Reports",
    value: 325,
  },
  {
    id: "b2c5e821-91a3-4f81-8c42-3e5f6a9b0c12",
    icon: <LuCalendarClock size={30} />,
    label: "Scheduled Rports",
    value: 12,
  },
  {
    id: "7c9e6679-7425-40de-944b-e07fc1f90ae7",
    icon: <LuCloudDownload size={30} />,
    label: "Last Generated",
    value: 2,
  },
  {
    id: "3a1f8b42-d6e9-4c8a-b510-7f2a1e3d9c8b",
    icon: <MdOutlineCancel size={30} />,
    label: "Canceled",
    value: 325,
  },
];

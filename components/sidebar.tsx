"use client";

import { sidebarList } from "./sidebarListArray";
import Link from "next/link";
import logo from "../public/logo-dark.png";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { LuChevronDown } from "react-icons/lu";

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <div className="bg-zinc-900 font-roboto top-0 left-0 w-60 p-5 h-screen fixed z-10 flex flex-col">
      <div className="mb-15">
        <Image src={logo} alt="logo" width={180} priority />
      </div>

      <div>
        <ul className="flex flex-col gap-2">
          {sidebarList.map((item, index) => {
            const isActive = pathname === item.href;

            return (
              <li key={index}>
                <Link
                  href={item.href}
                  className={`flex py-2 px-4 items-center gap-2 rounded-full text-white ${isActive ? "bg-linear-to-t from-sky-700 to-sky-600 border-t border-t-sky-500 border-b border-b-sky-800 outline-none" : "hover:bg-white/6"}`}
                >
                  {item.icon}
                  {item.title}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>

      <div className="mt-auto rounded-lg bg-white border border-gray-200 shadow-sm flex items-center justify-between px-3 py-2.5 cursor-pointer">
        <div className="flex items-center gap-3">
          <div className="bg-green-500 text-white w-9 h-9 justify-center items-center flex rounded-full font-medium text-sm shrink-0">
            U
          </div>
          <div>
            <p className="text-sm font-medium text-black leading-tight">User</p>
            <p className="text-xs text-gray-500 leading-tight">Administrator</p>
          </div>
        </div>
        <LuChevronDown size={16} color="gray" strokeWidth={2.5} />
      </div>
    </div>
  );
}

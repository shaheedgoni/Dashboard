"use client";

import { notificationProps } from "@/types/notificationProps";
import { useEffect } from "react";
import { LuX } from "react-icons/lu";
import { PrimaryButton } from "./page-components/ui/ui";

export default function Notifications({
  setDisplayNotification,
}: notificationProps) {
  useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") {
        setDisplayNotification(false);
      }
    }

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [setDisplayNotification]);

  return (
    <div className="h-full w-full z-15 flex justify-center items-center bg-black/30 backdrop-blur-xs fixed">
      <div className="bg-white rounded-2xl p-5 w-300 h-150">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl">Notifications</h1>

          <PrimaryButton onClick={() => setDisplayNotification(false)}>
            <LuX size={26} />
          </PrimaryButton>
        </div>
      </div>
    </div>
  );
}

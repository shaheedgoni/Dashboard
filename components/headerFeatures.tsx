"use client";

import { useState } from "react";
import Header from "./header";
import Notifications from "./notifications";

export default function HeaderFeatures() {
  const [displayNotification, setDisplayNotification] = useState(false);
  return (
    <>
      <Header
        displayNotification={displayNotification}
        setDisplayNotification={setDisplayNotification}
      />
      <div className={displayNotification ? "" : "hidden"}>
        <Notifications setDisplayNotification={setDisplayNotification} />
      </div>
    </>
  );
}

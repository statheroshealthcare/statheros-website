"use client"; // Ensures this component only runs on the client

import { useEffect } from "react";

export default function AOSWrapper({ children }) {
  useEffect(() => {
    // Import AOS only on client
    const AOS = require("aos");
    AOS.init({
      duration: 800,    // Animation duration in ms
      once: true,       // Only animate once
      easing: "ease-in-out",
    });
  }, []);

  return <>{children}</>;
}

"use client";

import Image from "next/image";
import { useState } from "react";

export default function RetryImage({ src, fallbackSrc, alt = "image", retryDelay = 3000, maxRetries = 2, ...props }) {
  const [currentSrc, setCurrentSrc] = useState(src);
  const [attempt, setAttempt] = useState(0);

  const handleError = () => {
    if (attempt < maxRetries) {
      setCurrentSrc(fallbackSrc); // show placeholder
      setAttempt(attempt + 1);

      setTimeout(() => {
        setCurrentSrc(`${src}?r=${Date.now()}`); // retry original
      }, retryDelay);
    } else {
      setCurrentSrc(fallbackSrc); // final fallback
    }
  };

  return <Image {...props} src={currentSrc} onError={handleError} alt={alt} />;
}

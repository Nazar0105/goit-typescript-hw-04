import React, { useEffect, useRef, ReactNode } from "react";

// Оишу типи для пропсів
type ObserverProps = {
  children: ReactNode;
  onContentEndVisible: () => void;
};

// Встановлю правильний тип для useRef, посилаючись на HTMLDivElement
const endContentRef = useRef<HTMLDivElement | null>(null);

useEffect(() => {
  // Опишу типи для options
  const options: IntersectionObserverInit = {
    rootMargin: "0px",
    threshold: 1.0,
    root: null,
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.intersectionRatio > 0) {
        onContentEndVisible();
        observer.disconnect();
      }
    });
  }, options);

  if (endContentRef.current) {
    observer.observe(endContentRef.current);
  }

  return () => {
    observer.disconnect();
  };
}, [onContentEndVisible]);

"use client";
import { useEffect, useState, RefObject } from "react";

function useVisibility<T extends HTMLElement>(
  nodeRef: RefObject<T>,
  threshold: number = 0.1,
): boolean {
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const [isObserved, setIsObserved] = useState<boolean>(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          } else {
            setIsVisible(false);
          }
        });
      },
      { threshold },
    );

    const currentNode = nodeRef.current;
    if (currentNode && !isObserved) {
      observer.observe(currentNode);
      setIsObserved(true);
    }

    return () => {
      if (currentNode) {
        observer.unobserve(currentNode);
        setIsObserved(false);
      }
    };
  }, [nodeRef, threshold]);

  return isVisible;
}

export default useVisibility;

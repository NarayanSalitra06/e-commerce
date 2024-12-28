import { useRef, useCallback } from "react";

export const useSlider = () => {
  const sliderRef = useRef<HTMLDivElement>(null);

  const scroll = useCallback((direction: "left" | "right") => {
    if (!sliderRef.current) return;

    const scrollAmount = direction === "left" ? -200 : 200;
    sliderRef.current.scrollBy({
      left: scrollAmount,
      behavior: "smooth",
    });
  }, []);

  return {
    sliderRef,
    scroll,
  };
};

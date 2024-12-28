import { useState, useCallback } from "react";

export const useHover = (delay = 0) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = useCallback(() => {
    const timer = setTimeout(() => setIsHovered(true), delay);
    return () => clearTimeout(timer);
  }, [delay]);

  const handleMouseLeave = useCallback(() => {
    const timer = setTimeout(() => setIsHovered(false), delay);
    return () => clearTimeout(timer);
  }, [delay]);

  return {
    isHovered,
    hoverProps: {
      onMouseEnter: handleMouseEnter,
      onMouseLeave: handleMouseLeave,
    },
  };
};

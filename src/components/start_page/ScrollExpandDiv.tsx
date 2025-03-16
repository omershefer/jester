import React, { useState, useEffect } from "react";

interface ScrollExpandDivProps {
  children?: React.ReactNode;
  className?: string;
  fadeDuration?: number; // Duration for fading in (ms)
  expandDuration?: number; // Duration for expanding (ms)
}

const ScrollExpandDiv: React.FC<ScrollExpandDivProps> = ({
  children,
  className = "",
  fadeDuration = 700, // Default 700ms
  expandDuration = 700, // Default 700ms
}) => {
  const [animationStage, setAnimationStage] = useState<
    "hidden" | "fading" | "expanding" | "expanded"
  >("hidden");
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Check if it's a mobile device
    const checkMobile = () => {
      const mobile = window.innerWidth <= 768;
      setIsMobile(mobile);

      // If mobile, start animation automatically after 500ms
      if (mobile && animationStage === "hidden") {
        setTimeout(() => {
          setAnimationStage("fading");
        }, 500);
      }
    };

    // Initial check
    checkMobile();

    // Add resize listener to update mobile status
    window.addEventListener("resize", checkMobile);

    // Scroll listener for non-mobile
    const handleScroll = () => {
      if (animationStage === "hidden" && !isMobile) {
        setAnimationStage("fading");
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("resize", checkMobile);
      window.removeEventListener("scroll", handleScroll);
    };
  }, [animationStage, isMobile]);

  useEffect(() => {
    let fadeTimeout: NodeJS.Timeout;
    let expandTimeout: NodeJS.Timeout;

    if (animationStage === "fading") {
      // Set timeout to complete fade-in
      fadeTimeout = setTimeout(() => {
        setAnimationStage("expanding");
      }, fadeDuration);
    }

    if (animationStage === "expanding") {
      // Set timeout to complete expansion
      expandTimeout = setTimeout(() => {
        setAnimationStage("expanded");
      }, expandDuration);
    }

    return () => {
      if (fadeTimeout) clearTimeout(fadeTimeout);
      if (expandTimeout) clearTimeout(expandTimeout);
    };
  }, [animationStage, fadeDuration, expandDuration]);

  const getStyles = () => {
    switch (animationStage) {
      case "hidden":
        return {
          height: "10%",
          opacity: 0,
          transform: "translateY(20px)",
        };
      case "fading":
        return {
          height: "10%",
          opacity: 1,
          transform: "translateY(0)",
        };
      case "expanding":
        return {
          height: "50vh",
          opacity: 1,
          transform: "translateY(0)",
        };
      case "expanded":
        return {
          height: "50vh",
          opacity: 1,
          transform: "translateY(0)",
        };
    }
  };

  const styles = getStyles();

  return (
    <div
      className={`transition-all ease-out flex shadow-2xl p-2 text-lg font-primary font-medium justify-center items-center rounded-2xl min-w-[45vw] ${className}`}
      style={{
        height: styles.height,
        opacity: styles.opacity,
        transform: styles.transform,
        transition: `height ${expandDuration}ms ease-out, opacity ${fadeDuration}ms, transform ${fadeDuration}ms`,
      }}
    >
      {children}
    </div>
  );
};

export default ScrollExpandDiv;

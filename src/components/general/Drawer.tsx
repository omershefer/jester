import React, { useState } from "react";
import { Menu, X } from "lucide-react";

interface DrawerProps {
  children: React.ReactNode;
  position?: "left" | "right";
  width?: string;
  className?: string;
}

export const Drawer: React.FC<DrawerProps> = ({
  children,
  position = "left",
  width = "w-64",
  className = "",
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const positionClasses = {
    left: `${
      isOpen
        ? `"${
            document.documentElement.lang === "he"
              ? "-translate-x-25"
              : "translate-x-25"
          }`
        : "-translate-x-full"
    }`,
    right: `${isOpen ? "-translate-x-0" : "translate-x-full"}`,
  };

  return (
    <nav>
      <>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="relative z-50"
          aria-label={isOpen ? "סגור תפריט צד" : "פתח תפריט צד"}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        <div
          className={`
        fixed top-0 ${position === "left" ? "left-0" : "right-0"} 
        h-full ${width} bg-red-100 
        transform transition-transform duration-300 ease-in-out
        ${positionClasses[position]}
        shadow-lg z-40
        ${className}
      `}
          aria-label="תפריט צד"
        >
          {children}
        </div>

        {isOpen && (
          <div
            onClick={() => setIsOpen(false)}
            className="fixed inset-0 bg-black opacity-50 z-30"
            aria-hidden="true"
          />
        )}
      </>
    </nav>
  );
};

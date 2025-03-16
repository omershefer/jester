import { useState, useEffect } from "react";

import availableIcon from "../../../public/images/green-checkmark-icon.png";
import unAvailableIcon from "../../../public/images/close-red-icon.png";

interface infoRowProps {
  label: string;
  available: boolean;
  info: string;
}

export default function InfoRow({ label, available, info }: infoRowProps) {
  const [isMobile, setIsMobile] = useState<boolean>(false);

  useEffect(() => {
    setIsMobile(window.innerWidth <= 768);
  }, []);

  return (
    <div className="flex flex-1 flex-row text-lg">
      <div className="flex flex-[1]">
        <div className="flex flex-1 flex-row items-center justify-between px-2">
          <p>{label}</p>
        </div>
      </div>
      <div className="flex flex-[0.1] justify-center items-center">
        <img
          src={available ? availableIcon : unAvailableIcon}
          alt={available ? "זמין" : "לא זמין"}
          className={`w-[25px] ${!isMobile && "mx-16"}`}
        />
      </div>
      <div className="flex flex-[1] justify-center px-2 items-center">
        <p>{info}</p>
      </div>
    </div>
  );
}

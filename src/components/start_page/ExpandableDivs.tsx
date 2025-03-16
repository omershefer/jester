import { useState } from "react";
import LoginComponent from "./LoginComponent";
import SignupComponent from "./SignupComponent";
import { useTranslation } from "react-i18next";

interface ExpandableDivsProps {
  parentWidth?: string;
  parentHeight?: string;
}

const ExpandableDivs: React.FC<ExpandableDivsProps> = ({
  parentWidth = "w-[50vw]", // Default width
  parentHeight = "h-[70vh]", // Default height
}) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const { t } = useTranslation();

  return (
    <>
      <div
        className={`relative space-y-1 flex flex-col ${parentWidth} ${parentHeight} rounded-lg overflow-hidden`}
        aria-label="טפסי התחברות והרשמה"
      >
        {/* Signup Section */}
        <div
          className={`bg-[#42403f16] rounded-xl transition-all duration-500 overflow-hidden flex ${
            isExpanded ? "flex-col h-[8%]" : "flex-col h-[92%]"
          }`}
          aria-expanded={!isExpanded}
          aria-label="אזור הרשמה"
        >
          <button
            className={`transition-all duration-300 mx-2 underline ${
              isExpanded ? "opacity-100 self-start" : "opacity-0 z-10"
            } focus:outline-none focus:ring-2 focus:ring-blue-500`}
            onClick={() => setIsExpanded(false)}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                setIsExpanded(false);
              }
            }}
            tabIndex={isExpanded ? 0 : -1}
            aria-label="הצג טופס הרשמה"
          >
            {t("expandSignupButtonLabel")}
          </button>
          <div
            className={`transition-all duration-300 flex-1 ${
              !isExpanded
                ? "opacity-100 self-start"
                : "opacity-0 pointer-events-none"
            }`}
            aria-hidden={isExpanded}
            aria-expanded={!isExpanded}
          >
            <SignupComponent isExpanded={!isExpanded} />
          </div>
        </div>

        {/* Login Section */}
        <div
          className={`bg-[#42403f16] rounded-xl transition-all duration-500 overflow-hidden flex ${
            !isExpanded ? "flex-col justify-start h-[8%]" : "flex-col h-[92%]"
          }`}
          aria-expanded={isExpanded}
          aria-label="אזור התחברות"
        >
          <button
            className={`transition-all duration-300 mx-2 underline ${
              !isExpanded ? "opacity-100 self-start" : "opacity-0 z-10"
            } focus:outline-none focus:ring-2 focus:ring-blue-500`}
            onClick={() => setIsExpanded(true)}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                setIsExpanded(true);
              }
            }}
            tabIndex={!isExpanded ? 0 : -1}
            aria-label="הצג טופס התחברות"
          >
            {t("expandLoginButtonLabel")}
          </button>
          <div
            className={`transition-all duration-300 flex-1 ${
              isExpanded
                ? "opacity-100 self-start"
                : "opacity-0 pointer-events-none"
            }`}
            tabIndex={isExpanded ? 0 : -1}
            aria-hidden={!isExpanded}
            aria-expanded={isExpanded}
          >
            <LoginComponent isExpanded={isExpanded} />
          </div>
        </div>
      </div>
    </>
  );
};

export default ExpandableDivs;

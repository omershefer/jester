import {
  useParams,
  useNavigate,
  useLocation,
} from "react-router-dom";
import { useTranslation } from "react-i18next";
import "../../services/i18n";
import { useEffect, useState, useRef } from "react";
import HeaderBarButton from "../start_page/HeaderBarButton";
import { Drawer } from "./Drawer";

export default function Header() {
  const [isHebrew, setIsHebrew] = useState<boolean>(true);
  const params = useParams();
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();
  const location = useLocation();
  const [navState, setNavState] = useState<string>();

  const currentPath = location.pathname;
  const pathWithoutLang = currentPath
    .replace(/^\/[^\/]+/, "")
    .replace(/^\//, "");

  // Refs for keyboard navigation
  const menuRefs = useRef<(HTMLButtonElement | null)[]>([]);

  useEffect(() => {
    setIsHebrew(params.lang === "he");
    setNavState(pathWithoutLang === "" ? "home" : pathWithoutLang);
  }, []);

  useEffect(() => {
    document.documentElement.lang = params.lang || "he";
    document.documentElement.dir =
      params.lang === "he" || params.lang === "ar" ? "rtl" : "ltr";
    changeLanguage(params.lang);
  }, [params.lang]);

  const changeLanguage = (newLang: any) => {
    i18n.changeLanguage(newLang);
    setIsHebrew(newLang === "he");
    document.documentElement.dir = newLang === "he" ? "rtl" : "ltr";

    // Get current path without the language prefix
    const currentPath = location.pathname;
    const pathWithoutLang = currentPath.replace(/^\/[^\/]+/, "");

    // Navigate to new language while preserving the rest of the path
    navigate(`/${newLang}${pathWithoutLang}`);
  };

  // Handle keyboard navigation
  const handleKeyDown = (e: React.KeyboardEvent, index: number) => {
    if (e.key === "ArrowDown") {
      e.preventDefault();
      const nextIndex = (index + 1) % menuRefs.current.length;
      menuRefs.current[nextIndex]?.focus();
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      const prevIndex =
        (index - 1 + menuRefs.current.length) % menuRefs.current.length;
      menuRefs.current[prevIndex]?.focus();
    } else if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      menuRefs.current[index]?.click();
    }
  };

  return (
    <>
      <div className="flex flex-1 flex-row w-full z-50 overflow-y-visible min-h-[10vh] bg-[#41b3a649] shadow-lg justify-between items-center p-3">
        {window.innerWidth < 1024 && (
          <div>
            <Drawer className="w-full">
              <div className="flex flex-1 flex-col mt-16 mx-3 gap-y-4 text-lg font-secular">
                {["", "terms", "about", "pricing", "accessibility"].map(
                  (route, index) => (
                    <div key={route} className="active:opacity-75">
                      <button
                        ref={(el) => {
                          menuRefs.current[index] = el; // Just assign, don't return anything
                        }}
                        tabIndex={0}
                        onKeyDown={(e) => handleKeyDown(e, index)}
                        onClick={() => navigate(`/${params.lang}/${route}`)}
                      >
                        <span>
                          {route === ""
                            ? t("navigation.home")
                            : t(`navigation.${route}`)}
                        </span>
                      </button>
                    </div>
                  )
                )}
              </div>
            </Drawer>
          </div>
        )}
        <div className="flex flex-row items-center gap-[5vw]">
          <div className="hidden lg:flex flex-row lg:h-[5vh] items-center lg:bg-[#0000000f] rounded-md">
            <HeaderBarButton
              ariaLabel={t("navigation.changeLangHebrew")}
              active={isHebrew}
              title={t("navigation.hebrew")}
              onClick={() => changeLanguage("he")}
              aria-pressed={isHebrew}
            />
            <HeaderBarButton
              ariaLabel={t("navigation.changeLangEnglish")}
              active={!isHebrew}
              title={t("navigation.english")}
              onClick={() => changeLanguage("en")}
              aria-pressed={!isHebrew}
            />
          </div>
          <div className="hidden lg:flex flex-row lg:w-auto items-center bg-[#0000000f] rounded-md">
            {["home", "about", "pricing", "accessibility", "terms"].map(
              (route, index) => (
                <HeaderBarButton
                  key={route}
                  ariaLabel={t("navigation.navTo", {
                    page: t(`navigation.${route}`),
                  })}
                  active={navState === route}
                  title={t(`navigation.${route}`)}
                  onClick={() =>
                    navigate(`/${params.lang}/${route === "home" ? "" : route}`)
                  }
                  ref={(el: any) => {
                    menuRefs.current[index] = el; // Just assign, don't return anything
                  }}
                  onKeyDown={(e) => handleKeyDown(e, index)}
                />
              )
            )}
          </div>
        </div>
        <img
          src="../images/logo-black.svg"
          className="w-[15vw] lg:w-[15vh]"
          alt={t("navigation.logoAlt")}
        />
      </div>
    </>
  );
}

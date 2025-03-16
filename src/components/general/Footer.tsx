import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";

// Import images
import arrowLeftImg from "../../images/arrow-left.png";
import arrowRightImg from "../../images/arrow-right.png";
import instagramImg from "../../images/instagram-2.png";
import facebookImg from "../../images/facebook-2.png";
import whatsappImg from "../../images/whatsapp.png";
import phoneFlipImg from "../../images/phone-flip.png";
import mailLogoImg from "../../images/mail-logo-2.png";

export default function Footer() {
  const [arrowImgSource, setArrowImgSource] = useState<string>("");
  const [dir, setDir] = useState<"rtl" | "ltr">("rtl");
  const { t } = useTranslation();
  const [isMobile, setIsMobile] = useState<boolean>(true);
  const navigate = useNavigate();
  const params = useParams();

  useEffect(() => {
    document.documentElement.dir === "rtl"
      ? setArrowImgSource(arrowLeftImg)
      : setArrowImgSource(arrowRightImg);
    setIsMobile(window.innerWidth <= 768);
    setDir(document.documentElement.dir as "rtl" | "ltr");
  }, [document.documentElement.dir]);

  return (
    <div>
      <div className="flex flex-1 flex-col pt-4 px-2 lg:pt-0 lg:pb-0 lg:flex-row ">
        {/** title, paragraph and socials */}
        <div
          className={`flex ${
            !isMobile && "flex-1"
          } flex-col lg:p-3 font-secular text-white justify-around`}
        >
          <div className="flex flex-col flex-1">
            <h4
              className={`text-4xl lg:text-5xl ${
                dir === "rtl" ? "text-start" : "text-end"
              }`}
              dir="rtl"
            >
              <span>ג׳סטר</span>
              <span className="text-black">.</span>
              <span>Jester</span>
            </h4>
            <p className="text-md lg:text-lg">{t("footer.description")}</p>
          </div>
          {/** social links- shown here on devices bigger than mobile. */}
          {!isMobile && (
            <div className="flex flex-1 flex-row gap-5 lg:mb-10 items-center justify-center mt-10">
              <div
                tabIndex={0}
                className="w-14 min-h-14 p-1 bg-black rounded-full lg:hover:scale-110 lg:transition-all flex justify-center items-center focus:ring-2 focus:ring-blue-500"
              >
                <img
                  src={instagramImg}
                  className="w-[24px] h-[24px]"
                  alt={t("footer.social.instagram")}
                />
              </div>
              <div
                tabIndex={0}
                className="w-14 min-h-14 p-1 bg-black rounded-full lg:hover:scale-110 lg:transition-all flex justify-center items-center focus:ring-2 focus:ring-blue-500"
              >
                <img
                  src={facebookImg}
                  className="w-[24px] h-[24px]"
                  alt={t("footer.social.facebook")}
                />
              </div>
              <div
                tabIndex={0}
                className="w-14 min-h-14 p-1 bg-black rounded-full lg:hover:scale-110 lg:transition-all flex justify-center items-center focus:ring-2 focus:ring-blue-500"
              >
                <img
                  src={whatsappImg}
                  className="w-[24px] h-[24px]"
                  alt={t("footer.social.whatsapp")}
                />
              </div>
              <div
                tabIndex={0}
                className="w-14 min-h-14 p-1 bg-black rounded-full lg:hover:scale-110 lg:transition-all flex justify-center items-center focus:ring-2 focus:ring-blue-500"
              >
                <img
                  src={phoneFlipImg}
                  className="w-[24px] h-[24px]"
                  alt={t("footer.social.phone")}
                />
              </div>
            </div>
          )}
        </div>
        {/** navigation */}
        <div className="flex flex-1 flex-col mt-8 lg:mt-0 mx-10 lg:mx-0 lg:p-8">
          <div className="lg:mx-12">
            <nav aria-label={t("footer.nav.ariaLabel")}>
              <h5
                className="font-secular text-white text-3xl lg:text-2xl"
                id="nav-heading"
              >
                {t("footer.nav.heading")}
              </h5>

              <ul
                className="flex flex-col gap-y-1.5 mt-2"
                aria-labelledby="nav-heading"
              >
                <li>
                  <a
                    href={`/${params.lang}`}
                    onClick={(e) => {
                      e.preventDefault();
                      navigate(`/${params.lang}`);
                      window.scrollTo({
                        top: 0,
                        behavior: "smooth",
                      });
                    }}
                    className="flex flex-row text-white text-xl lg:text-base font-secular underline w-fit lg:hover:text-green-300 active:opacity-75 focus:ring-2 focus:ring-blue-500"
                    tabIndex={0}
                  >
                    <img
                      src={arrowImgSource}
                      className="w-6 lg:h-auto"
                      alt={t("footer.nav.arrow")}
                      aria-hidden="true"
                    />
                    <span>{t("footer.nav.home")}</span>
                  </a>
                </li>

                <li>
                  <a
                    href={`/${params.lang}/about`}
                    onClick={(e) => {
                      e.preventDefault();
                      navigate(`/${params.lang}/about`);
                      window.scrollTo({
                        top: 1,
                        behavior: "smooth",
                      });
                    }}
                    className="flex flex-row text-white text-xl lg:text-base font-secular underline w-fit lg:hover:text-green-300 active:opacity-75 focus:ring-2 focus:ring-blue-500"
                    tabIndex={0}
                  >
                    <img
                      src={arrowImgSource}
                      className="w-6 lg:h-auto"
                      alt={t("footer.nav.arrow")}
                      aria-hidden="true"
                    />
                    <span>{t("footer.nav.about")}</span>
                  </a>
                </li>
                <li>
                  <a
                    href={`/${params.lang}/pricing`}
                    onClick={(e) => {
                      e.preventDefault();
                      navigate(`/${params.lang}/pricing`);
                      window.scrollTo({
                        top: 1,
                        behavior: "smooth",
                      });
                    }}
                    className="flex flex-row text-white text-xl lg:text-base font-secular underline w-fit lg:hover:text-green-300 active:opacity-75 focus:ring-2 focus:ring-blue-500"
                    tabIndex={0}
                  >
                    <img
                      src={arrowImgSource}
                      className="w-6 lg:h-auto"
                      alt={t("footer.nav.arrow")}
                      aria-hidden="true"
                    />
                    <span>{t("footer.nav.pricing")}</span>
                  </a>
                </li>
                <li>
                  <a
                    href={`/${params.lang}/terms`}
                    onClick={(e) => {
                      e.preventDefault();
                      navigate(`/${params.lang}/terms`);
                      window.scrollTo({
                        top: 0,
                        behavior: "smooth",
                      });
                    }}
                    className="flex flex-row text-white text-xl lg:text-base font-secular underline w-fit lg:hover:text-green-300 active:opacity-75 focus:ring-2 focus:ring-blue-500"
                    tabIndex={0}
                  >
                    <img
                      src={arrowImgSource}
                      className="w-6 lg:h-auto"
                      alt={t("footer.nav.arrow")}
                      aria-hidden="true"
                    />
                    <span>{t("footer.nav.terms")}</span>
                  </a>
                </li>
                <li>
                  <a
                    href={`/${params.lang}/accessibility`}
                    onClick={(e) => {
                      e.preventDefault();
                      navigate(`/${params.lang}/accessibility`);
                      window.scrollTo({
                        top: 1,
                        behavior: "smooth",
                      });
                    }}
                    className="flex flex-row text-white text-xl lg:text-base font-secular underline w-fit lg:hover:text-green-300 active:opacity-75 focus:ring-2 focus:ring-blue-500"
                    tabIndex={0}
                  >
                    <img
                      src={arrowImgSource}
                      className="w-6 lg:h-auto"
                      alt={t("footer.nav.arrow")}
                      aria-hidden="true"
                    />
                    <span>{t("footer.nav.accessibility")}</span>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
        {/** contact info */}
        <div className="flex flex-1 flex-col mt-8 lg:mt-0 mx-10 lg:mx-0 lg:p-8">
          <div>
            <h5 className="font-secular text-white text-3xl lg:text-2xl">
              {t("footer.contact.heading")}
            </h5>
          </div>
          <div className="flex flex-col gap-y-1.5 mt-2">
            <div
              className="flex flex-row text-white text-xl lg:text-base font-secular underline w-fit lg:hover:text-green-300 active:opacity-75 focus:ring-2 focus:ring-blue-500"
              tabIndex={0}
            >
              <img
                src={mailLogoImg}
                className="w-auto h-3 self-center mx-2"
                alt={t("footer.contact.emailIcon")}
              />
              <a href="mailto:contact@jester.com">contact@jester.com</a>
            </div>
            <div
              className="flex flex-row text-white text-xl lg:text-base font-secular underline w-fit lg:hover:text-green-300 active:opacity-75 focus:ring-2 focus:ring-blue-500"
              tabIndex={0}
            >
              <img
                src={phoneFlipImg}
                className="w-auto h-4 mx-2 self-center"
                alt={t("footer.contact.phoneIcon")}
              />
              <button>{t("footer.contact.phone")}</button>
            </div>
          </div>
        </div>
      </div>

      {/** Developer credit */}
      <div className="bg-inherit w-full text-center mt-8 pb-4 text-white text-sm font-secular">
        <p>
          © {new Date().getFullYear()} {t("footer.copyright.jester")}.{" "}
          {t("footer.copyright.developed")}{" "}
          <a
            href="https://yourwebsite.com"
            className="underline hover:text-green-300"
            tabIndex={0}
          >
            {t("footer.copyright.developer")}
          </a>
          💻
        </p>
      </div>
    </div>
  );
}

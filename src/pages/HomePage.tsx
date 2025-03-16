import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import Header from "../components/general/Header";
import { useAuth } from "../context/AuthContext";
import ExpandableDivs from "../components/start_page/ExpandableDivs";
import LoggedInFragment from "../components/start_page/LoggedInComponent"
import ScrollExpandDiv from "../components/start_page/ScrollExpandDiv";
import { changeLanguage } from "i18next";
import yahavImage from "../../public/images/yahav-digital.jpg";
import omerImage from "../../public/images/king-omer.jpeg";
import userImage from "../../public/images/new-user.png";

import Footer from "../components/general/Footer";
import UserExample from "../components/start_page/UserExample";

const HomePage = () => {
  const { t } = useTranslation();
  const { lang } = useParams();
  const { currentUser } = useAuth();

  useEffect(() => {
    document.documentElement.dir = lang === "he" ? "rtl" : "ltr";
    changeLanguage(lang);
  }, [lang]);



  return (
    <>
      <div className="flex flex-1 bg-[#f8fafc] flex-col h-screen lg:grid lg:grid-cols-2 lg:grid-rows-[10%_1fr] lg:gap-x-2 lg:min-h-screen overflow-y-aut">
        {/* Header חלק עליון */}
        <div className="lg:col-span-2" aria-label="החלק העליון של הדף">
          <header>
            <Header />
          </header>
        </div>
        {/* תוכן עיקרי */}
        <main className="lg:col-span-1 lg:flex-1 lg:flex lg:flex-col lg:justify-center lg:mb-5">
          <div className="flex flex-1 flex-col gap-y-4 mt-4 lg:mt-6 lg:w-full lg:flex lg:flex-col lg:justify-center">
            {/* כותרת */}
            <h1
              className="font-headline text-4xl lg:text-5xl"
              aria-live="polite"
            >
              <span style={{ whiteSpace: "pre-line" }}>{t("title")}</span>
              <span
                className="lg:font-semibold lg:text-6xl"
                aria-live="assertive"
              >
                {t("title_bold")}
              </span>
            </h1>
            {/* תיבה מתרחבת עם מידע משתמש / כניסה */}
            <ScrollExpandDiv
              fadeDuration={400}
              expandDuration={700}
              className="w-full h-full"
            >
              {currentUser ? (
                <LoggedInFragment />
              ) : (
                <ExpandableDivs parentHeight="h-full" parentWidth="w-full" />
              )}
            </ScrollExpandDiv>
          </div>
        </main>
        {/* תמונה של מכשירים - מוסתרת בנייד */}
        <div className="hidden py-3 lg:flex lg:flex-1 lg:items-center lg:justify-center">
          <img src="/images/devices.png" alt="" className="lg:w-[95%]" />
        </div>
      </div>
      {/* סקשן תחתון */}
      <div className="bg-slate-700 lg:flex lg:flex-1 lg:flex-col lg:w-full lg:h-[130vh]">
        <h2 className="text-white text-center font-headline text-3xl lg:text-7xl lg:mt-7">
          <span style={{ whiteSpace: "pre-line" }}>
            {t("portfolio_difficulty")}
          </span>
        </h2>
        <h3 className="text-white text-center mt-1.5 mx-1.5 lg:mx-0 lg:mt-7 font-secular lg:text-2xl">
          {t("join_description")}
        </h3>
        <div className="lg:flex lg:flex-col lg:flex-1 lg:w-full lg:gap-y-8 lg:justify-center lg:items-center">
          <UserExample
            imageSrc={yahavImage}
            name={lang === "he" ? "יהב ויצמן" : "Yahav Wizman"}
            jobTitle={t("landing_page_developer")}
          />
          <UserExample
            imageSrc={omerImage}
            name={lang === "he" ? "עומר שפר" : "Omer Shafer"}
            jobTitle={t("web_developer")}
          />
          <UserExample
            preview={true}
            imageSrc={userImage}
            name={t("you")}
            jobTitle=""
          />
        </div>
        <h3 className="text-white text-center text-xl lg:mt-7 font-secular">
          {t("future_building")}
        </h3>
      </div>
      <footer>
        <div className={`flex flex-1 bg-slate-800 w-full p-2`}>
          <Footer />
        </div>
      </footer>
    </>
  );
};

export default HomePage;

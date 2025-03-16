import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import Footer from "../../../amen-yaavod/src/components/general/Footer";
import Header from "../../../amen-yaavod/src/components/general/Header";
import LabelAndIcon from "../components/aboutus/LabelAndIcon";
import realClientsIcon from "../images/group-icon.png";
import realJobsIcon from "../images/briefcase-icon.png";
import honestFeedbackIcon from "../images/decision-icon.png";
import expierienceIcon from "../images/weightlifting-icon.png";
import communicationIcon from "../images/business-communication-icon.png";
import immidietStartIcon from "../images/rocket-launch-icon.png";

export default function About() {
  const [isMobile, setIsMobile] = useState<boolean>(true);
  const { t } = useTranslation();

  useEffect(() => {
    setIsMobile(window.innerWidth <= 768);
  }, []);

  return (
    <div className="flex flex-1 bg-[#f8fafc] flex-col overflow-y-scroll">
      <header aria-label={t("common.pageHeader")}>
        <Header />
      </header>
      <main>
        <div className="p-6">
          <div className="flex flex-1 flex-col py-20">
            <h1 className="text-5xl mb-5 font-secular">
              {t("aboutUs.pageTitle")}
            </h1>
            <div className="bg-white shadow-xl flex flex-col py-5 px-2 rounded-3xl font-secular text-2xl">
              <h2 className="text-3xl mb-6">{t("aboutUs.title")}</h2>
              <p>{t("aboutUs.description1")}</p>
              <p className="mt-6">{t("aboutUs.description2")}</p>
            </div>
          </div>
          {!isMobile && (
            <div className="flex flex-1 mb-5">
              <div className="grid grid-cols-3 grid-rows-2 gap-4 h-full w-full">
                <LabelAndIcon
                  iconSrc={realClientsIcon}
                  label={t("aboutUs.features.realClients")}
                />
                <LabelAndIcon
                  iconSrc={honestFeedbackIcon}
                  label={t("aboutUs.features.honestFeedback")}
                />
                <LabelAndIcon
                  iconSrc={communicationIcon}
                  label={t("aboutUs.features.personalCommunication")}
                />
                <LabelAndIcon
                  iconSrc={realJobsIcon}
                  label={t("aboutUs.features.realJobs")}
                />
                <LabelAndIcon
                  iconSrc={expierienceIcon}
                  label={t("aboutUs.features.experience")}
                />
                <LabelAndIcon
                  iconSrc={immidietStartIcon}
                  label={t("aboutUs.features.immediateStart")}
                />
              </div>
            </div>
          )}
        </div>
      </main>
      <footer>
        <div className={`flex flex-1 bg-slate-800 w-full p-2`}>
          <Footer />
        </div>
      </footer>
    </div>
  );
}

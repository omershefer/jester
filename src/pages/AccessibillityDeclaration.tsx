import { useTranslation } from "react-i18next";
import Footer from "../../../amen-yaavod/src/components/general/Footer";
import Header from "../../../amen-yaavod/src/components/general/Header";

export default function AccessibilityDecleration() {
  const { t } = useTranslation()



  return (
    <>
      <div className="bg-[#f8fafc] flex flex-1 flex-col overflow-y-scroll">
        <header aria-label={t("accessibility.headerLabel")}>
          <Header />
        </header>
        <main>
          <div className="flex flex-1 flex-col gap-y-3">
            <h1 className="text-5xl font-secular mt-7 mx-7">
              {t("accessibility.title")}
            </h1>
            <div className="bg-white shadow-2xl flex flex-col py-5 px-3 mx-5 mb-4 rounded-3xl font-secular text-2xl">
              <div>
                <h2>{t("accessibility.updateDate")}</h2>
                <br />
                <p>{t("accessibility.intro")}</p>
                <br />
                <h2>{t("accessibility.sectionAccessibleWebsite")}</h2>
                <br />
                <p>{t("accessibility.accessibleWebsiteDesc")}</p>
                <br />
                <h2>{t("accessibility.sectionModifications")}</h2>
                <br />
                <p>{t("accessibility.modificationsDesc1")}</p>
                <p>{t("accessibility.modificationsDesc2")}</p>
                <p>{t("accessibility.modificationsDesc3")}</p>
                <br />
                <h2>{t("accessibility.sectionBestPractices")}</h2>
                <br />
                <p>{t("accessibility.bestPracticesDesc")}</p>
                <br />
                <h2>{t("accessibility.sectionContact")}</h2>
                <br />
                <p>{t("accessibility.contactIntro")}</p>
                <p>
                  <strong>{t("accessibility.contactName")}</strong>
                </p>
                <p>{t("accessibility.contactPhone")}</p>
                <p>
                  📧{" "}
                  <a href={`mailto:${t("accessibility.contactEmailAddress")}`}>
                    {t("accessibility.contactEmailAddress")}
                  </a>
                </p>
              </div>
            </div>
          </div>
        </main>
        <footer>
          <div className={`flex flex-1 bg-slate-800 w-full p-2`}>
            <Footer />
          </div>
        </footer>
      </div>
    </>
  );
}

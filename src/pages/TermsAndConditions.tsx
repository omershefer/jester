import { useTranslation } from "react-i18next";
import Footer from "../../../amen-yaavod/src/components/general/Footer";
import Header from "../../../amen-yaavod/src/components/general/Header";
import { useEffect } from "react";

export default function TermsAndConditions() {
  const { t } = useTranslation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);

  return (
    <div className="bg-[#f8fafc] flex flex-1 flex-col overflow-y-scroll">
      <header aria-label={t("header.ariaLabel")}>
        <Header />
      </header>
      <main>
        <div className="flex flex-1 flex-col gap-y-3">
          <h1 className="text-5xl font-secular mt-7 mx-7">
            {t("termsAndConditionsPage.title")}
          </h1>
          <div className="bg-white shadow-2xl flex flex-col py-5 px-3 mx-5 mb-4 rounded-3xl font-secular text-2xl">
            <div>
              <h2>{t("termsAndConditionsPage.sections.intro.title")}</h2>
              <p>{t("termsAndConditionsPage.sections.intro.content")}</p>

              <br />

              <h2>
                {t("termsAndConditionsPage.sections.serviceDefinition.title")}
              </h2>
              <p>
                {t("termsAndConditionsPage.sections.serviceDefinition.content")}
              </p>

              <br />

              <h2>{t("termsAndConditionsPage.sections.usageRights.title")}</h2>
              <p>{t("termsAndConditionsPage.sections.usageRights.content")}</p>

              <br />

              <h2>{t("termsAndConditionsPage.sections.registration.title")}</h2>
              <p>{t("termsAndConditionsPage.sections.registration.content")}</p>

              <br />

              <h2>{t("termsAndConditionsPage.sections.usageTerms.title")}</h2>
              <ul>
                <li>
                  <strong>
                    {t(
                      "termsAndConditionsPage.sections.usageTerms.basicServices"
                    )}
                  </strong>
                </li>
                <li>
                  <strong>
                    {t(
                      "termsAndConditionsPage.sections.usageTerms.paidServices"
                    )}
                  </strong>
                </li>
              </ul>

              <br />

              <h2>
                {t(
                  "termsAndConditionsPage.sections.paymentAndSubscriptions.title"
                )}
              </h2>
              <p>
                {t(
                  "termsAndConditionsPage.sections.paymentAndSubscriptions.content"
                )}
              </p>

              <br />

              <h2>{t("termsAndConditionsPage.sections.copyright.title")}</h2>
              <p>{t("termsAndConditionsPage.sections.copyright.content")}</p>

              <br />

              <h2>{t("termsAndConditionsPage.sections.privacy.title")}</h2>
              <p>{t("termsAndConditionsPage.sections.privacy.content")}</p>

              <br />

              <h2>
                {t("termsAndConditionsPage.sections.additionalTerms.title")}
              </h2>
              <p>
                {t("termsAndConditionsPage.sections.additionalTerms.content")}
              </p>

              <br />

              <h2>
                {t("termsAndConditionsPage.sections.terminationOfUse.title")}
              </h2>
              <p>
                {t("termsAndConditionsPage.sections.terminationOfUse.content")}
              </p>

              <br />

              <h2>
                {t("termsAndConditionsPage.sections.changesInTerms.title")}
              </h2>
              <p>
                {t("termsAndConditionsPage.sections.changesInTerms.content")}
              </p>

              <br />

              <h2>
                {t(
                  "termsAndConditionsPage.sections.limitationOfLiability.title"
                )}
              </h2>
              <p>
                {t(
                  "termsAndConditionsPage.sections.limitationOfLiability.content"
                )}
              </p>

              <br />

              <h2>
                {t("termsAndConditionsPage.sections.lawAndJurisdiction.title")}
              </h2>
              <p>
                {t(
                  "termsAndConditionsPage.sections.lawAndJurisdiction.content"
                )}
              </p>
            </div>
          </div>
        </div>
      </main>

      <footer>
        <div className="flex flex-1 bg-slate-800 w-full p-2">
          <Footer />
        </div>
      </footer>
    </div>
  );
}

import { useTranslation } from "react-i18next";
import Footer from "../../../amen-yaavod/src/components/general/Footer";
import Header from "../../../amen-yaavod/src/components/general/Header";
import InfoRow from "../components/pricing/InfoRow";
import { useEffect } from "react";

export default function Pricing() {
  const { t } = useTranslation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);

  return (
    <div className="bg-[#f8fafc] flex flex-1 flex-col overflow-y-scroll">
      <header aria-label={t("common.pageHeader")}>
        <Header />
      </header>
      <main>
        <h1 className="text-5xl font-secular mt-7 mx-7">
          {t("pricingPage.pageTitle")}
        </h1>
        <div className="font-secular lg:flex lg:gap-x-16 p-5 overflow-y-visible py-5">
          {/**row div for both plans */}
          <div className="flex flex-1 flex-col shadow-xl rounded-2xl bg-[#d4d3d320]">
            {/**regular plan */}
            <div className="flex flex-1 flex-col py-7 px-2">
              <h2 className="text-4xl my-6">
                {t("pricingPage.regularPlan.title")}
              </h2>
              <div className="flex flex-1 w-full justify-between items-center px-5 mb-[20%]">
                <h2 className="text-4xl">
                  {t("pricingPage.regularPlan.price")}
                  <span className="font-sans">
                    {t("pricingPage.regularPlan.currency")}
                  </span>
                </h2>
                <p className="text-4xl">
                  {t("pricingPage.regularPlan.pricingLabel")}
                </p>
              </div>
              <div className="flex flex-col gap-y-7 lg:w-full mb-10">
                <InfoRow
                  available={true}
                  label={t("pricingPage.features.receiveService.label")}
                  info={t("pricingPage.features.receiveService.unlimited")}
                />
                <InfoRow
                  available={false}
                  label={t("pricingPage.features.clientLimit.label")}
                  info={t("pricingPage.features.clientLimit.limited")}
                />
                <InfoRow
                  available={true}
                  label={t("pricingPage.features.customerSupport.label")}
                  info={t("pricingPage.features.customerSupport.unlimited")}
                />
                <InfoRow
                  available={false}
                  label={t("pricingPage.features.feedPromotion.label")}
                  info={t("pricingPage.features.feedPromotion.none")}
                />
                <InfoRow
                  available={false}
                  label={t("pricingPage.features.preferredAccess.label")}
                  info={t("pricingPage.features.preferredAccess.none")}
                />
              </div>
            </div>
          </div>
          <div className="flex flex-1 flex-col shadow-xl rounded-2xl bg-[#d4d3d320]">
            {/**paid plan - now styled like the free plan */}
            <div className="flex flex-1 flex-col py-7 px-2">
              <h2 className="text-4xl my-6">
                {t("pricingPage.premiumPlan.title")}
              </h2>
              <div className="flex flex-1 w-full justify-between items-center px-5 mb-[20%]">
                <h2 className="text-4xl">
                  {t("pricingPage.premiumPlan.price")}
                  <span className="font-sans">
                    {t("pricingPage.premiumPlan.currency")}
                  </span>
                </h2>
                <p className="text-4xl">
                  {t("pricingPage.premiumPlan.pricingLabel")}
                </p>
              </div>
              <div className="flex flex-col gap-y-7 lg:w-full mb-10">
                <InfoRow
                  available={true}
                  label={t("pricingPage.features.receiveService.label")}
                  info={t("pricingPage.features.receiveService.unlimited")}
                />
                <InfoRow
                  available={true}
                  label={t("pricingPage.features.clientLimit.label")}
                  info={t("pricingPage.features.clientLimit.unlimited")}
                />
                <InfoRow
                  available={true}
                  label={t("pricingPage.features.customerSupport.label")}
                  info={t("pricingPage.features.customerSupport.unlimited")}
                />
                <InfoRow
                  available={true}
                  label={t("pricingPage.features.feedPromotion.label")}
                  info={t("pricingPage.features.feedPromotion.included")}
                />
                <InfoRow
                  available={true}
                  label={t("pricingPage.features.preferredAccess.label")}
                  info={t("pricingPage.features.preferredAccess.included")}
                />
              </div>
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
  );
}

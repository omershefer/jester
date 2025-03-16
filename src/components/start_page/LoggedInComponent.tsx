import { useEffect, useState } from "react";
import { useAuth } from "../../context/AuthContext";
import { useTranslation } from "react-i18next";


const GreetUser = () => {
    const { t } = useTranslation();
    const { logout, currentUser } = useAuth();
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const delay = (ms: number) =>
      new Promise((resolve) => setTimeout(resolve, ms));

    useEffect(() => {
        const init = async () => {
            await delay(1500);
            setIsLoading(false);
        }
        
        init();
    })

    const handleLogout = async () => {
      setIsLoading(true);
      await delay(300);
      await logout();
      setIsLoading(false);
    }

  return (
    <div className="flex w-full min-h-full rounded-xl bg-gray-100">
      <div className="text-start flex flex-col w-full border p-8 rounded-lg bg-transparent">
        <h1
          className={`${
            isLoading &&
            "animate-pulse bg-gray-100 w-[40%] border h-8 mr-auto ml-auto rounded-lg"
          } text-5xl font-secular text-gray-800`}
        >
          {!isLoading && `${t("loggedIn.hello")} ${currentUser?.displayName} !`}
        </h1>
        <p
          className={`${
            isLoading &&
            "animate-pulse bg-gray-100 w-[60%] border h-8 mr-auto ml-auto rounded-lg"
          } mt-4 text-xl text-gray-600 self-start`}
        >
          {!isLoading && t("loggedIn.greeting")}
        </p>
        <button
          className={`bg-black text-white rounded-xl p-3 mt-auto mr-auto ml-auto w-[30%] ${
            isLoading &&
            "animate-pulse bg-gray-100 w-[20%] border h-6 mr-auto ml-auto rounded-lg"
          }`}
          onClick={() => {
            handleLogout();
          }}
        >
          {!isLoading && t("loggedIn.logout")}
        </button>
      </div>
    </div>
  );
};

export default GreetUser;

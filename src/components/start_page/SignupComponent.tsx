import { useState } from "react";
import { useTranslation } from "react-i18next";
import { useAuth } from "../../context/AuthContext";

import "../../App.css";

interface signupComponentProps {
  isExpanded: boolean;
}

export default function SignupComponent({ isExpanded }: signupComponentProps) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordV, setPasswordV] = useState("");
  const [name, setName] = useState("");
  const [error, setError] = useState("");
  const { t } = useTranslation();
  const { signup } = useAuth();

  const handleSignupSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (password !== passwordV) {
      setError("סיסמאות לא תואמות");
      return;
    }

    try {
      // Do everything in one function for better flow control
      await signup(email, password, name)
    } catch (err) {
      setError(`Failed to sign up. Please try again. ${err}`);
    }
  };

  return (
    <div className="flex flex-1 justify-center align-center items-center h-[100%]">
      <div className="p-6 rounded-lg w-[100%] flex flex-col justify-around">
        <form onSubmit={handleSignupSubmit} className="w-[100%]">
          <fieldset className="border border-gray-300 p-4 rounded-lg">
            <legend className="text-lg font-semibold">
              <h2 className="text-2xl font-secondary mb-4">
                {t("signupTitle")}
              </h2>
            </legend>

            <div className="grid grid-cols-2 grid-rows-2 gap-2 min-w-[10vw] w-[100%]">
              <div>
                <label htmlFor="email" className="sr-only">
                  {t("email")}
                </label>
                <input
                  id="email"
                  type="email"
                  placeholder={t("email")}
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full p-2 border border-black bg-transparent rounded-lg"
                  tabIndex={isExpanded ? 0 : -1}
                  required
                  aria-label={t("email")}
                  aria-describedby={error ? "error-message" : undefined}
                />
              </div>
              <div>
                <label htmlFor="name" className="sr-only">
                  {t("name")}
                </label>
                <input
                  id="name"
                  type="text"
                  placeholder={t("name")}
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full p-2 border border-black bg-transparent rounded-lg"
                  tabIndex={isExpanded ? 0 : -1}
                  required
                  aria-label={t("name")}
                  aria-describedby={error ? "error-message" : undefined}
                />
              </div>
              <div>
                <label htmlFor="password" className="sr-only">
                  {t("password")}
                </label>
                <input
                  id="password"
                  type="password"
                  placeholder={t("password")}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full p-2 border border-black bg-transparent rounded-lg"
                  tabIndex={isExpanded ? 0 : -1}
                  required
                  aria-label={t("password")}
                  aria-describedby={error ? "error-message" : undefined}
                />
              </div>
              <div>
                <label htmlFor="passwordV" className="sr-only">
                  {t("passwordV")}
                </label>
                <input
                  id="passwordV"
                  type="password"
                  placeholder={t("passwordV")}
                  value={passwordV}
                  onChange={(e) => setPasswordV(e.target.value)}
                  className="w-full p-2 border border-black bg-transparent rounded-lg"
                  tabIndex={isExpanded ? 0 : -1}
                  required
                  aria-label={t("passwordV")}
                  aria-describedby={error ? "error-message" : undefined}
                />
              </div>

              <div className="col-span-2">
                <button
                  type="submit"
                  className="w-full bg-black text-white p-2 rounded-xl active:bg-white active:text-black"
                  aria-label={t("signupSubmit")}
                  tabIndex={0} // Ensure it's focusable
                >
                  {t("signupSubmit")}
                </button>
              </div>
            </div>
          </fieldset>
        </form>
        {error && (
          <p
            id="error-message"
            className="text-red-500 text-sm"
            role="alert"
            aria-live="assertive"
          >
            {error}
          </p>
        )}
      </div>
    </div>
  );
}

import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useAuth } from "../../context/AuthContext";

import "../../App.css";

interface loginComponentProps {
  isExpanded: boolean;
}

export default function LoginComponent({ isExpanded }: loginComponentProps) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [lang, setLang] = useState<"he" | "en">("he");
  const navigate = useNavigate();
  const { t } = useTranslation();
  const { login } = useAuth();

  useEffect(() => {
    setLang(document.documentElement.dir === "rtl" ? "he" : "en");
  }, [document.documentElement.dir])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(""); // Reset the error state before trying to log in

    // Try to login using the handleLogin from the hook
    const success = await login(email, password);
    if (success) {
      navigate(`/${lang}`); // Redirect to dashboard after successful login
    } else {
      setError("Invalid credentials. Please try again.");
    }
  };

  return (
    <div className="flex flex-1 justify-center align-center items-center h-[100%]">
      <div className="p-6 rounded-lg w-[100%] flex flex-col justify-around">
        <form onSubmit={handleSubmit} className="w-[100%]">
          <fieldset className="border border-gray-300 p-4 rounded-lg">
            <legend className="text-lg font-semibold">
              <h2 id="login-heading" className="text-2xl font-secondary mb-4">
                {t("loginTitle")}
              </h2>
            </legend>
            <div className="grid grid-cols-2 grid-rows-2 gap-2 min-w-[10vw] w-[100%]">
              <div>
                {/* Using visually hidden but programmatically available labels */}
                <label htmlFor="email" className="block text-sm mb-1">
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
                  aria-invalid={
                    error && error.includes("email") ? "true" : "false"
                  }
                  aria-describedby={error ? "error-message" : undefined}
                />
              </div>
              <div>
                <label htmlFor="password" className="block text-sm mb-1">
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
                  aria-invalid={
                    error && error.includes("password") ? "true" : "false"
                  }
                  aria-describedby={error ? "error-message" : undefined}
                />
              </div>
              <button
                type="submit"
                className="w-full h-[70%] bg-black text-white p-2 rounded-xl active:bg-white active:text-black"
                aria-label={t("signupSubmit")}
                tabIndex={0} // Ensure it's focusable
              >
                {t("loginSubmit")}
              </button>
            </div>
          </fieldset>
        </form>
        {(
          <p
            id="error-message"
            className="text-red-500 text-sm mt-2"
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

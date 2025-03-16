import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Suspense, useEffect } from "react";
import { AuthProvider } from "./context/AuthContext";
import HomePage from "./pages/HomePage";
import AccessibilityDecleration from "./pages/AccessibillityDeclaration";
import Pricing from "./pages/Pricing";
import TermsAndConditions from "./pages/TermsAndConditions";
import About from "./pages/About";
import "./App.css";
import "./services/i18n"; // This will be the i18n configuration file we'll create

// A component to handle language detection and routing
function LanguageRouter() {
  const { i18n } = useTranslation();
  const urlLang = window.location.pathname.split("/")[1];

  useEffect(() => {
    // Check if the URL contains a valid language code
    const isValidLanguage = ["en", "he"].includes(urlLang);

    if (isValidLanguage && i18n.language !== urlLang) {
      // Change language if URL language is different from current
      i18n.changeLanguage(urlLang);
    } else if (!isValidLanguage) {
      // If no valid language in URL, use browser language or default to English
      const browserLang = navigator.language.split("-")[0];
      const defaultLang = ["en", "he"].includes(browserLang)
        ? browserLang
        : "en";
      i18n.changeLanguage(defaultLang);
    }
  }, [urlLang, i18n]);

  return (
    <Routes>
      {/* Redirect root to preferred language */}
      <Route path="/" element={<Navigate replace to={`/${i18n.language}`} />} />

      {/* Language-specific routes */}
      <Route path="/:lang" element={<HomePage />} />
      <Route
        path="/:lang/accessibility"
        element={<AccessibilityDecleration />}
      />
      <Route path="/:lang/pricing" element={<Pricing />} />
      <Route path="/:lang/terms" element={<TermsAndConditions />} />
      <Route path="/:lang/about" element={<About />} />

      {/* Catch all route - redirect to home in current language */}
      <Route path="*" element={<Navigate replace to={`/${i18n.language}`} />} />
    </Routes>
  );
}

function App() {
  return (
    <AuthProvider>
      <Router>
        <div
          className="w-full h-full"
          dir={useTranslation().i18n.language === "he" ? "rtl" : "ltr"}
        >
          <Suspense fallback={<div>Loading...</div>}>
            <LanguageRouter />
          </Suspense>
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;

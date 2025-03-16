import {
  HashRouter as Router,
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
import "./services/i18n";

function LanguageRouter() {
  const { i18n } = useTranslation();
  const urlLang = window.location.hash.split("/")[1]; // Extract lang from URL hash

  useEffect(() => {
    const validLanguages = ["en", "he"];
    if (validLanguages.includes(urlLang) && i18n.language !== urlLang) {
      i18n.changeLanguage(urlLang);
    } else if (!validLanguages.includes(urlLang)) {
      // Get browser language or default to Hebrew
      const browserLang = navigator.language.split("-")[0];
      const defaultLang = validLanguages.includes(browserLang)
        ? browserLang
        : "he";
      i18n.changeLanguage(defaultLang);
    }
  }, [urlLang, i18n]);

  return (
    <Routes>
      {/* Redirect root to language-based home */}
      <Route path="/" element={<Navigate replace to={`/${i18n.language}`} />} />
      {/* Language routes */}
      <Route path="/:lang" element={<HomePage />} />
      <Route
        path="/:lang/accessibility"
        element={<AccessibilityDecleration />}
      />
      <Route path="/:lang/pricing" element={<Pricing />} />
      <Route path="/:lang/terms" element={<TermsAndConditions />} />
      <Route path="/:lang/about" element={<About />} />
      {/* Catch-all redirect */}
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

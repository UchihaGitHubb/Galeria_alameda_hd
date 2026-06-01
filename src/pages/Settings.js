import { useState } from "react";
import { useNavigate } from "react-router-dom";

import MobileContainer from "../components/MobileContainer";
import BottomNav from "../components/BottomNav";

import { useTheme } from "../context/ThemeContext";
import { useLanguage } from "../context/LanguageContext";

import { ChevronLeft, ChevronRight, ChevronDown } from "lucide-react";

import "../styles/Settings.css";

export default function Settings() {
  const navigate = useNavigate();

  const { darkMode, toggleTheme } = useTheme();

  const { language, changeLanguage, t } = useLanguage();

  const [notifications, setNotifications] = useState(true);

  const theme = darkMode ? t.settings.dark : t.settings.light;

  return (
    <MobileContainer background="#F1ECE3">
      <div className="settings-page">
        {/* HEADER */}

        <div className="settings-header">
          <button className="back-button" onClick={() => navigate("/menu")}>
            <ChevronLeft size={28} />
          </button>

          <h1>{t.settings.title}</h1>
        </div>

        {/* NOTIFICACIONES */}

        <div className="settings-row">
          <span>{t.settings.notifications}</span>

          <button
            className={`toggle ${notifications ? "active" : ""}`}
            onClick={() => setNotifications(!notifications)}
          >
            <div className="toggle-circle" />
          </button>
        </div>

        <div className="settings-divider" />

        {/* IDIOMA */}

        <div className="settings-row">
          <span>{t.settings.language}</span>

          <button
            className="select-pill"
            onClick={() => changeLanguage(language === "es" ? "en" : "es")}
          >
            <span>
              {language === "es" ? t.settings.spanish : t.settings.english}
            </span>

            <ChevronDown size={24} />
          </button>
        </div>

        <div className="settings-divider" />

        {/* TEMA */}

        <div className="settings-row">
          <span>{t.settings.theme}</span>

          <button className="select-pill" onClick={toggleTheme}>
            <span>{theme}</span>

            <ChevronDown size={24} />
          </button>
        </div>

        <div className="settings-divider" />

        {/* PRIVACIDAD */}

        <button className="settings-link">
          <span>{t.settings.privacy}</span>

          <ChevronRight size={28} />
        </button>

        <div className="settings-divider" />

        {/* TÉRMINOS */}

        <button className="settings-link">
          <span>{t.settings.terms}</span>

          <ChevronRight size={28} />
        </button>

        <BottomNav />
      </div>
    </MobileContainer>
  );
}

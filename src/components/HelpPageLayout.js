import { useNavigate } from "react-router-dom";
import { ChevronLeft } from "lucide-react";

import MobileContainer from "./MobileContainer";
import BottomNav from "./BottomNav";
import { useTheme } from "../context/ThemeContext";
import { useLanguage } from "../context/LanguageContext";

import "../styles/Help.css";

export default function HelpPageLayout({
  title,
  intro,
  backTo = "/help",
  children,
  centeredTitle = false,
}) {
  const navigate = useNavigate();
  const { darkMode } = useTheme();
  const { t } = useLanguage();

  return (
    <MobileContainer background={darkMode ? "#1B1B1B" : "#FFF8F0"}>
      <div className={`help-page ${darkMode ? "help-page--dark" : ""}`}>
        <header
          className={`help-header ${centeredTitle ? "help-header--centered" : ""}`}
        >
          <button
            type="button"
            className="help-back-button"
            onClick={() => navigate(backTo)}
            aria-label={t.help.common.back}
          >
            <ChevronLeft size={26} strokeWidth={2.5} />
          </button>

          <div className="help-header__text">
            <h1>{title}</h1>
            {intro ? <p className="help-header__intro">{intro}</p> : null}
          </div>
        </header>

        <div className="help-content">{children}</div>

        <BottomNav />
      </div>
    </MobileContainer>
  );
}

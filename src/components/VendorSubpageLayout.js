import { useNavigate } from "react-router-dom";
import { ChevronLeft } from "lucide-react";

import MobileContainer from "./MobileContainer";
import BottomNav from "./BottomNav";
import { useTheme } from "../context/ThemeContext";
import { useLanguage } from "../context/LanguageContext";
import { getVendorPortrait } from "../helper/vendor";

import "../styles/VendorActions.css";

export default function VendorSubpageLayout({
  vendor,
  title,
  intro,
  backTo,
  children,
}) {
  const navigate = useNavigate();
  const { darkMode } = useTheme();
  const { t } = useLanguage();

  return (
    <MobileContainer background={darkMode ? "#1B1B1B" : "#F1ECE3"}>
      <div
        className={`vendor-actions-page ${darkMode ? "vendor-actions-page--dark" : ""}`}
      >
        <header className="vendor-actions-header">
          <button
            type="button"
            className="vendor-actions-back"
            onClick={() => navigate(backTo)}
            aria-label={t.vendor.actions.back}
          >
            <ChevronLeft size={26} strokeWidth={2.5} />
          </button>

          <div className="vendor-actions-header__text">
            <h1>{title}</h1>
            {intro ? <p className="vendor-actions-header__intro">{intro}</p> : null}
          </div>
        </header>

        {vendor ? (
          <div className="vendor-actions-preview">
            <div className="vendor-actions-preview__avatar">
              <img src={getVendorPortrait(vendor)} alt={vendor.name} />
            </div>
            <div className="vendor-actions-preview__text">
              <h2>{vendor.name}</h2>
              <p>{vendor.business}</p>
            </div>
          </div>
        ) : null}

        <div className="vendor-actions-content">{children}</div>

        <BottomNav />
      </div>
    </MobileContainer>
  );
}

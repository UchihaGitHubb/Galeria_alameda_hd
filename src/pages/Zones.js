import { useNavigate } from "react-router-dom";
import { ChevronLeft } from "lucide-react";

import MobileContainer from "../components/MobileContainer";
import BottomNav from "../components/BottomNav";
import { mapaZonasImage, ZONE_PILLS } from "../data/zones";
import { useTheme } from "../context/ThemeContext";
import { useLanguage } from "../context/LanguageContext";

import "../styles/Zones.css";

export default function Zones() {
  const navigate = useNavigate();
  const { darkMode } = useTheme();
  const { t } = useLanguage();

  const handleZoneSelect = (zoneId) => {
    navigate("/map", { state: { selectedZone: zoneId, openFilters: true } });
  };

  return (
    <MobileContainer background={darkMode ? "#1B1B1B" : "#FEF9F0"}>
      <div className={`zones-page ${darkMode ? "zones-page--dark" : ""}`}>
        <header className="zones-header">
          <button
            type="button"
            className="zones-back-button"
            onClick={() => navigate("/home")}
            aria-label={t.zonesPage.back}
          >
            <ChevronLeft size={26} strokeWidth={2.5} />
          </button>

          <h1 className="zones-header-title">{t.zonesPage.title}</h1>
        </header>

        <div className="zones-content">
          <div className="zones-map-wrap">
            <img
              src={mapaZonasImage}
              alt={t.zonesPage.mapAlt}
              className="zones-map-image"
            />

            <div className="zones-compass" aria-hidden>
              <span className="zones-compass__label zones-compass__label--n">
                N
              </span>
              <span className="zones-compass__label zones-compass__label--e">
                E
              </span>
              <span className="zones-compass__label zones-compass__label--s">
                S
              </span>
              <span className="zones-compass__label zones-compass__label--o">
                O
              </span>
              <div className="zones-compass__ring" />
              <div className="zones-compass__needle" />
            </div>
          </div>

          <div className="zones-list">
            {ZONE_PILLS.map((zone) => {
              const label = t.zonesPage.items[zone.id];

              return (
                <button
                  key={zone.id}
                  type="button"
                  className="zones-pill-btn"
                  onClick={() => handleZoneSelect(zone.id)}
                  aria-label={label}
                >
                  <img src={zone.image} alt="" />
                </button>
              );
            })}
          </div>
        </div>

        <BottomNav />
      </div>
    </MobileContainer>
  );
}

import { useNavigate } from "react-router-dom";
import { ChevronLeft } from "lucide-react";

import MobileContainer from "../components/MobileContainer";
import BottomNav from "../components/BottomNav";
import mapaRutas from "../assets/routes/mapa-rutas.transparent.png";
import rutasScroll from "../assets/routes/ruta-cards-scroll.transparent.png";
import { useTheme } from "../context/ThemeContext";
import { useLanguage } from "../context/LanguageContext";

import "../styles/RoutesPage.css";

export default function RoutesPage() {
  const navigate = useNavigate();
  const { darkMode } = useTheme();
  const { t } = useLanguage();

  return (
    <MobileContainer background={darkMode ? "#1B1B1B" : "#FFF8F0"}>
      <div className={`routes-page ${darkMode ? "routes-page--dark" : ""}`}>
        <header className="routes-page__header">
          <button
            type="button"
            className="routes-page__back"
            onClick={() => navigate("/home")}
            aria-label={t.routesPage.back}
          >
            <ChevronLeft size={26} strokeWidth={2.5} />
          </button>
          <h1>{t.routesPage.title}</h1>
        </header>

        <div className="routes-page__content">
          <img
            src={mapaRutas}
            alt={t.routesPage.mapAlt}
            className="routes-page__map"
          />
          <img
            src={rutasScroll}
            alt={t.routesPage.cardsAlt}
            className="routes-page__cards"
          />
        </div>

        <BottomNav />
      </div>
    </MobileContainer>
  );
}

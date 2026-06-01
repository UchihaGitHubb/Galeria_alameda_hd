import { useNavigate } from "react-router-dom";
import { ChevronLeft } from "lucide-react";

import MobileContainer from "../components/MobileContainer";
import BottomNav from "../components/BottomNav";
import mapaRutasLight from "../assets/routes/mapa-rutas.display.png";
import mapaRutasDark from "../assets/routes/mapa-rutas.display-dark.png";
import rutasScrollLight from "../assets/routes/ruta-cards-scroll.display.png";
import rutasScrollDark from "../assets/routes/ruta-cards-scroll.display-dark.png";
import { useTheme } from "../context/ThemeContext";
import { useLanguage } from "../context/LanguageContext";

import "../styles/RoutesPage.css";

export default function RoutesPage() {
  const navigate = useNavigate();
  const { darkMode } = useTheme();
  const { t } = useLanguage();
  const mapaRutas = darkMode ? mapaRutasDark : mapaRutasLight;
  const rutasScroll = darkMode ? rutasScrollDark : rutasScrollLight;

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
          <section className="routes-page__stack">
            <div className="routes-page__map-wrap">
              <img
                src={mapaRutas}
                alt={t.routesPage.mapAlt}
                className="routes-page__map"
                decoding="async"
              />
            </div>
            <div className="routes-page__cards-wrap">
              <img
                src={rutasScroll}
                alt={t.routesPage.cardsAlt}
                className="routes-page__cards"
                decoding="async"
              />
            </div>
          </section>
        </div>

        <BottomNav />
      </div>
    </MobileContainer>
  );
}

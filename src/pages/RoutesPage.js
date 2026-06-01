import { useNavigate } from "react-router-dom";
import { ChevronLeft } from "lucide-react";

import MobileContainer from "../components/MobileContainer";
import BottomNav from "../components/BottomNav";
import ZoomableMapFrame from "../components/ZoomableMapFrame";
import mapaRutasLight from "../assets/routes/mapa-rutas.display.png";
import mapaRutasDark from "../assets/routes/mapa-rutas.display-dark.png";
import { ROUTE_ITEMS } from "../data/routes";
import { useTheme } from "../context/ThemeContext";
import { useLanguage } from "../context/LanguageContext";

import "../styles/RoutesPage.css";

export default function RoutesPage() {
  const navigate = useNavigate();
  const { darkMode } = useTheme();
  const { t } = useLanguage();
  const mapaRutas = darkMode ? mapaRutasDark : mapaRutasLight;

  const handleRouteTap = (routeId) => {
    navigate("/map", {
      state: { selectedRoute: routeId, openFilters: true },
    });
  };

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
          <section className="routes-page__map-card">
            <div className="routes-page__map-frame">
              <ZoomableMapFrame src={mapaRutas} alt={t.routesPage.mapAlt} />
            </div>
          </section>

          <p className="routes-page__hint">
            {t.routesPage.hint} · {t.mapFrame.hint}
          </p>

          <div className="routes-page__list">
            {ROUTE_ITEMS.map((route) => {
              const data = t.routesPage.routes[route.id];

              return (
                <button
                  key={route.id}
                  type="button"
                  className="route-card"
                  style={{
                    "--route-accent": route.accent,
                    "--route-soft": route.soft,
                  }}
                  onClick={() => handleRouteTap(route.id)}
                >
                  <div className="route-card__head">
                    <span className="route-card__icon-wrap">
                      <img src={route.icon} alt="" className="route-card__icon" />
                    </span>
                    <div className="route-card__title-wrap">
                      <span className="route-card__badge">#{route.id}</span>
                      <h2 className="route-card__name">{data.name}</h2>
                    </div>
                  </div>

                  <ul className="route-card__stops">
                    {data.stops.map((stop) => (
                      <li key={`${route.id}-${stop.zone}`} className="route-card__stop">
                        <span
                          className="route-card__zone"
                          style={{ background: route.accent }}
                        >
                          {stop.zone}
                        </span>
                        <div className="route-card__stop-text">
                          <span className="route-card__stop-title">{stop.title}</span>
                          <span className="route-card__locals">
                            {t.routesPage.localsLabel} {stop.locals}
                          </span>
                        </div>
                      </li>
                    ))}
                  </ul>
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

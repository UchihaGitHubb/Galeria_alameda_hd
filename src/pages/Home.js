import MobileContainer from "../components/MobileContainer";
import { useNavigate } from "react-router-dom";

import logoAlameda from "../assets/logos/logo-alameda.png";
import BottomNav from "../components/BottomNav";

import rutasIcon from "../assets/icons/rutas.png";
import zonasIcon from "../assets/icons/zonas.png";
import dondonaIcon from "../assets/icons/dondona.png";
import nombreLocalIcon from "../assets/icons/nombrelocal.png";
import localIcon from "../assets/icons/local.png";
import productoIcon from "../assets/icons/producto.png";

import { Menu, CircleHelp } from "lucide-react";

import { useTheme } from "../context/ThemeContext";
import { useLanguage } from "../context/LanguageContext";

export default function Home() {
  const navigate = useNavigate();

  const { darkMode } = useTheme();
  const { t } = useLanguage();
  const accent = darkMode ? "#FFFFFF" : "#D9774A";
  const textMuted = darkMode ? "#D8D8D8" : "#A67A4F";

  const categories = [
    { icon: rutasIcon, label: t.homePage.routes, path: "/routes" },
    { icon: zonasIcon, label: t.homePage.zones, path: "/zones" },
    { icon: dondonaIcon, label: t.homePage.owner, path: "/search/owner" },
    {
      icon: nombreLocalIcon,
      label: t.homePage.businessName,
      path: "/search/business",
    },
    { icon: localIcon, label: t.homePage.localNumber, path: "/search/local" },
    { icon: productoIcon, label: t.homePage.product, path: "/search/product" },
  ];

  return (
    <MobileContainer background={darkMode ? "#1B1B1B" : "#F1ECE3"}>
      <div className="screen-fill">
        <div className="home-header">
          <button
            type="button"
            className="home-header__icon-btn"
            onClick={() => navigate("/menu")}
            style={{ color: accent }}
            aria-label={t.nav.menu}
          >
            <Menu size={28} />
          </button>

          <img
            src={logoAlameda}
            alt="Galería Alameda"
            className="home-header__logo"
          />

          <button
            type="button"
            className="home-header__icon-btn"
            onClick={() => navigate("/help", { state: { from: "/home" } })}
            style={{ color: accent }}
            aria-label={t.settings.help}
          >
            <CircleHelp size={28} />
          </button>
        </div>

        <div className="home-scroll-content">
          <h1
            style={{
              margin: 0,
              color: accent,
              fontFamily: "DistressedSherlock",
              fontWeight: "normal",
              lineHeight: 1,
            }}
          >
            {t.homePage.welcome}
          </h1>

          <p
            className="home-desc"
            style={{
              marginTop: "24px",
              color: textMuted,
              fontFamily: "Quicksand",
              fontWeight: "500",
              lineHeight: "1.6",
            }}
          >
            {t.homePage.description}
          </p>

          <button
            type="button"
            className="home-cta"
            onClick={() => navigate("/map")}
            style={{
              display: "block",
              border: "none",
              borderRadius: "40px",
              background: "#DF7A4D",
              color: "#FFF6EB",
              fontFamily: "Quicksand",
              fontWeight: "700",
              cursor: "pointer",
            }}
          >
            {t.homePage.exploreMap}
          </button>

          <div
            style={{
              height: "1px",
              background: accent,
              opacity: 0.2,
              margin: "clamp(24px, 5dvh, 40px) 0 clamp(20px, 4dvh, 30px)",
            }}
          />

          <h2
            style={{
              margin: "0 0 clamp(20px, 4dvh, 30px)",
              color: accent,
              fontFamily: "DistressedSherlock",
              fontWeight: "normal",
              textAlign: "center",
            }}
          >
            {t.homePage.categories}
          </h2>

          <div className="home-category-grid">
            {categories.map((item) => (
              <button
                key={item.label}
                type="button"
                className="home-category-btn"
                onClick={() => item.path && navigate(item.path)}
                style={{
                  border: "none",
                  background: darkMode ? "#2A2A2A" : "#DF7A4D",
                  cursor: "pointer",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <img
                  src={item.icon}
                  alt={item.label}
                  style={{
                    width: "clamp(32px, 9vw, 42px)",
                    height: "clamp(32px, 9vw, 42px)",
                    objectFit: "contain",
                    marginBottom: "8px",
                  }}
                />

                <span
                  style={{
                    fontFamily: "Quicksand",
                    fontWeight: "600",
                    textAlign: "center",
                    lineHeight: "1.2",
                    color: "#FFFFFF",
                  }}
                >
                  {item.label}
                </span>
              </button>
            ))}
          </div>
        </div>

        <BottomNav />
      </div>
    </MobileContainer>
  );
}

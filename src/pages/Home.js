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

  const categories = [
    {
      icon: rutasIcon,
      label: t.homePage.routes,
    },
    {
      icon: zonasIcon,
      label: t.homePage.zones,
    },
    {
      icon: dondonaIcon,
      label: t.homePage.owner,
    },
    {
      icon: nombreLocalIcon,
      label: t.homePage.businessName,
    },
    {
      icon: localIcon,
      label: t.homePage.localNumber,
    },
    {
      icon: productoIcon,
      label: t.homePage.product,
    },
  ];

  return (
    <MobileContainer background={darkMode ? "#1B1B1B" : "#F1ECE3"}>
      <div
        style={{
          height: "100%",
          display: "flex",
          flexDirection: "column",
          overflow: "hidden",
        }}
      >
        {/* HEADER */}

        <div
          style={{
            height: "80px",
            padding: "0 20px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexShrink: 0,
          }}
        >
          <button
            style={{
              background: "transparent",
              border: "none",
              padding: 0,
              color: darkMode ? "#FFFFFF" : "#D9774A",
              cursor: "pointer",
            }}
          >
            <Menu size={30} />
          </button>

          <img
            src={logoAlameda}
            alt="Galería Alameda"
            style={{
              height: "220px",
              width: "auto",
              maxWidth: "220px",
              objectFit: "contain",
            }}
          />

          <button
            style={{
              background: "transparent",
              border: "none",
              padding: 0,
              color: darkMode ? "#FFFFFF" : "#D9774A",
              cursor: "pointer",
            }}
          >
            <CircleHelp size={30} />
          </button>
        </div>

        {/* CONTENIDO */}

        <div
          style={{
            flex: 1,
            overflowY: "auto",
            overflowX: "hidden",
            padding: "24px 20px 140px",
            WebkitOverflowScrolling: "touch",
          }}
        >
          <h1
            style={{
              margin: 0,
              color: darkMode ? "#FFFFFF" : "#D9774A",
              fontFamily: "DistressedSherlock",
              fontSize: "58px",
              fontWeight: "normal",
              lineHeight: 1,
            }}
          >
            {t.homePage.welcome}
          </h1>

          <p
            style={{
              marginTop: "24px",
              color: darkMode ? "#D8D8D8" : "#A67A4F",
              fontFamily: "Quicksand",
              fontSize: "18px",
              fontWeight: "500",
              lineHeight: "1.6",
            }}
          >
            {t.homePage.description}
          </p>

          <button
            onClick={() => navigate("/map")}
            style={{
              width: "100%",
              maxWidth: "320px",
              height: "60px",
              display: "block",
              margin: "32px auto 0",
              border: "none",
              borderRadius: "40px",
              background: "#DF7A4D",
              color: "#FFF6EB",
              fontFamily: "Quicksand",
              fontSize: "22px",
              fontWeight: "700",
              cursor: "pointer",
            }}
          >
            {t.homePage.exploreMap}
          </button>

          <div
            style={{
              height: "1px",
              background: darkMode ? "#FFFFFF" : "#D9774A",
              opacity: 0.2,
              margin: "40px 0 30px",
            }}
          />

          <h2
            style={{
              margin: "0 0 30px",
              color: darkMode ? "#FFFFFF" : "#D9774A",
              fontFamily: "DistressedSherlock",
              fontSize: "32px",
              fontWeight: "normal",
              textAlign: "center",
            }}
          >
            {t.homePage.categories}
          </h2>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: "18px",
            }}
          >
            {categories.map((item) => (
              <button
                key={item.label}
                style={{
                  border: "none",
                  background: darkMode ? "#2A2A2A" : "#DF7A4D",
                  borderRadius: "28px",
                  aspectRatio: "1",
                  cursor: "pointer",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  padding: "10px",
                }}
              >
                <img
                  src={item.icon}
                  alt={item.label}
                  style={{
                    width: "42px",
                    height: "42px",
                    objectFit: "contain",
                    marginBottom: "10px",
                  }}
                />

                <span
                  style={{
                    fontFamily: "Quicksand",
                    fontSize: item.label.length > 12 ? "12px" : "14px",
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

import { useNavigate, useLocation } from "react-router-dom";

import homeIcon from "../assets/nav-icons/home.png";
import mapIcon from "../assets/nav-icons/map.png";
import searchIcon from "../assets/nav-icons/search.png";
import heartIcon from "../assets/nav-icons/heart.png";
import menuIcon from "../assets/nav-icons/menu.png";
import { getTheme } from "../helper/theme";
import { useTheme } from "../context/ThemeContext";
export default function BottomNav() {
  const navigate = useNavigate();
  const location = useLocation();

  const isDark = getTheme() === "dark";
  const isActive = (path) => location.pathname === path;
  const { darkMode } = useTheme();

  return (
    <div
      style={{
        position: "absolute",
        left: 0,
        right: 0,
        bottom: 0,
        height: "60px",
        background: darkMode ? "#1B1B1B" : "#F1ECE3",
        borderTop: darkMode
          ? "1px solid rgba(255,255,255,0.08)"
          : "1px solid rgba(217,119,74,0.15)",
        zIndex: 9999,
        display: "flex",
        alignItems: "center",
        flexShrink: 0,
      }}
    >
      <div
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
        }}
      >
        <NavItem
          active={isActive("/home")}
          icon={homeIcon}
          label="Inicio"
          onClick={() => navigate("/home")}
        />

        <NavItem
          active={isActive("/map")}
          icon={mapIcon}
          label="Mapa"
          onClick={() => navigate("/map")}
        />

        <NavItem
          active={isActive("/search")}
          icon={searchIcon}
          label="Buscar"
        />

        <NavItem
          active={isActive("/favorites")}
          icon={heartIcon}
          label="Favoritos"
          onClick={() => navigate("/favorites")}
        />

        <NavItem
          active={isActive("/menu")}
          icon={menuIcon}
          label="Menú"
          onClick={() => navigate("/menu")}
        />
      </div>
    </div>
  );
}

function NavItem({ icon, label, active, onClick }) {
  return (
    <div
      onClick={onClick}
      style={{
        cursor: "pointer",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "2px",
      }}
    >
      <img
        src={icon}
        alt={label}
        style={{
          width: "20px",
          height: "20px",
          objectFit: "contain",

          filter: active
            ? "brightness(0) saturate(100%) invert(56%) sepia(56%) saturate(1285%) hue-rotate(335deg) brightness(80%) contrast(92%)"
            : "brightness(0) saturate(100%) invert(52%) sepia(16%) saturate(1109%) hue-rotate(349deg) brightness(93%) contrast(88%)",
        }}
      />

      <span
        style={{
          fontFamily: "Quicksand",
          fontSize: "10px",
          lineHeight: 1,
          color: active ? "#D9774A" : "#A67C52",
          fontWeight: active ? 700 : 500,
        }}
      >
        {label}
      </span>
    </div>
  );
}

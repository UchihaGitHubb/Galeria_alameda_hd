import { useNavigate, useLocation } from "react-router-dom";

import homeIcon from "../assets/nav-icons/home.png";
import mapIcon from "../assets/nav-icons/map.png";
import searchIcon from "../assets/nav-icons/search.png";
import heartIcon from "../assets/nav-icons/heart.png";
import menuIcon from "../assets/nav-icons/menu.png";
import { useTheme } from "../context/ThemeContext";
import { useLanguage } from "../context/LanguageContext";

export default function BottomNav() {
  const navigate = useNavigate();
  const location = useLocation();

  const isActive = (path) => location.pathname === path;
  const isMapActive =
    location.pathname === "/map" || location.pathname === "/zones";
  const isSearchActive =
    location.pathname === "/search" ||
    location.pathname.startsWith("/search/");
  const isZonesPage = location.pathname === "/zones";
  const { darkMode } = useTheme();
  const { t } = useLanguage();

  const navBackground = darkMode
    ? "#1B1B1B"
    : isZonesPage
      ? "#FEF9F0"
      : "#F1ECE3";

  return (
    <nav
      className={`bottom-nav ${darkMode ? "bottom-nav--dark" : ""}`}
      style={{ background: navBackground }}
      aria-label={t.nav.menu}
    >
      <div className="bottom-nav__items">
        <NavItem
          active={isActive("/home")}
          icon={homeIcon}
          label={t.nav.home}
          onClick={() => navigate("/home")}
        />

        <NavItem
          active={isMapActive}
          icon={mapIcon}
          label={t.nav.map}
          onClick={() => navigate("/map")}
        />

        <NavItem
          active={isSearchActive}
          icon={searchIcon}
          label={t.nav.search}
          onClick={() => navigate("/search")}
        />

        <NavItem
          active={isActive("/favorites")}
          icon={heartIcon}
          label={t.nav.favorites}
          onClick={() => navigate("/favorites")}
        />

        <NavItem
          active={isActive("/menu")}
          icon={menuIcon}
          label={t.nav.menu}
          onClick={() => navigate("/menu")}
        />
      </div>
    </nav>
  );
}

function NavItem({ icon, label, active, onClick }) {
  const color = active ? "#D9774A" : "#A67C52";

  return (
    <button
      type="button"
      className={`bottom-nav__item ${active ? "bottom-nav__item--active" : ""}`}
      onClick={onClick}
      aria-label={label}
      aria-current={active ? "page" : undefined}
    >
      <img
        src={icon}
        alt=""
        style={{
          filter: active
            ? "brightness(0) saturate(100%) invert(56%) sepia(56%) saturate(1285%) hue-rotate(335deg) brightness(80%) contrast(92%)"
            : "brightness(0) saturate(100%) invert(52%) sepia(16%) saturate(1109%) hue-rotate(349deg) brightness(93%) contrast(88%)",
        }}
      />
      <span style={{ color }}>{label}</span>
    </button>
  );
}

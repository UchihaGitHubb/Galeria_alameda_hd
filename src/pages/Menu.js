import { useNavigate } from "react-router-dom";

import MobileContainer from "../components/MobileContainer";
import BottomNav from "../components/BottomNav";

import { Heart, MapPinned, CircleHelp, Settings, LogOut } from "lucide-react";

import { useTheme } from "../context/ThemeContext";
import { useLanguage } from "../context/LanguageContext";

import profileAvatar from "../assets/profile/profile-avatar-anime.png";

import "../styles/Menu.css";

export default function Menu() {
  const navigate = useNavigate();
  const { darkMode } = useTheme();
  const { t } = useLanguage();

  return (
    <MobileContainer background={darkMode ? "#1B1B1B" : "#F1ECE3"}>
      <div className={`menu-page ${darkMode ? "menu-dark" : ""}`}>
        <div className="profile-section">
          <div className="profile-avatar">
            <img src={profileAvatar} alt="" />
          </div>

          <div className="profile-info">
            <h2>Isabella Perilla</h2>

            <button className="profile-link">{t.menu.viewProfile}</button>
          </div>
        </div>

        <div className="menu-divider" />

        <div className="menu-options">
          <MenuItem
            icon={<Heart />}
            label={t.menu.myFavorites}
            onClick={() => navigate("/favorites")}
          />

          <MenuItem icon={<MapPinned />} label={t.menu.myRoutes} />

          <MenuItem
            icon={<CircleHelp />}
            label={t.settings.help}
            onClick={() => navigate("/help", { state: { from: "/menu" } })}
          />
        </div>

        <div className="menu-divider" />

        <div className="menu-options">
          <MenuItem
            icon={<Settings />}
            label={t.settings.title}
            onClick={() => navigate("/settings")}
          />
        </div>

        <div className="menu-divider" />

        <div className="menu-options">
          <MenuItem
            icon={<LogOut />}
            label={t.menu.logout}
            onClick={() => navigate("/login")}
          />
        </div>

        <BottomNav />
      </div>
    </MobileContainer>
  );
}

function MenuItem({ icon, label, onClick }) {
  return (
    <button className="menu-item" onClick={onClick}>
      {icon}
      <span>{label}</span>
    </button>
  );
}

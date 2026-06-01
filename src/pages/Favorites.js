import { useEffect, useState } from "react";
import { Heart } from "lucide-react";
import { useLocation } from "react-router-dom";

import MobileContainer from "../components/MobileContainer";
import BottomNav from "../components/BottomNav";
import VendorCard from "../components/VendorCard";

import { vendors } from "../data/vendors";
import { getFavorites } from "../helper/favorites";

import { useTheme } from "../context/ThemeContext";
import { useLanguage } from "../context/LanguageContext";

import "../styles/Favorites.css";

export default function Favorites() {
  const location = useLocation();

  const { darkMode } = useTheme();
  const { t } = useLanguage();

  const [favoriteIds, setFavoriteIds] = useState(getFavorites());

  useEffect(() => {
    setFavoriteIds(getFavorites());
  }, [location]);

  const favoriteVendors = vendors.filter((vendor) =>
    favoriteIds.includes(vendor.id)
  );

  return (
    <MobileContainer>
      <div
        className="favorites-page"
        style={{
          background: darkMode ? "#1B1B1B" : "#F1ECE3",
        }}
      >
        <div className="favorites-header">
          <h1
            className="favorites-title"
            style={{
              color: darkMode ? "#FFFFFF" : "#D9774A",
            }}
          >
            {t.nav.favorites}
          </h1>

          <div
            className="favorites-count"
            style={{
              background: darkMode ? "#2A2A2A" : "#FFF7EF",
              border: darkMode
                ? "2px solid rgba(255,255,255,0.08)"
                : "2px solid #DFCDBB",
              color: darkMode ? "#FFFFFF" : "#D9774A",
            }}
          >
            <Heart size={16} fill="#D9774A" color="#D9774A" />

            <span>{favoriteVendors.length}</span>
          </div>
        </div>

        {favoriteVendors.length === 0 ? (
          <div
            className="favorites-empty"
            style={{
              color: darkMode ? "#FFFFFF" : "#D9774A",
            }}
          >
            <Heart size={50} strokeWidth={1.5} />

            <h2>{t.favorites.emptyTitle}</h2>

            <p
              style={{
                color: darkMode ? "#BDBDBD" : "#9F876C",
              }}
            >
              {t.favorites.emptyDesc}
            </p>
          </div>
        ) : (
          <div className="favorites-list">
            {favoriteVendors.map((vendor) => (
              <VendorCard key={vendor.id} vendor={vendor} />
            ))}
          </div>
        )}

        <BottomNav />
      </div>
    </MobileContainer>
  );
}

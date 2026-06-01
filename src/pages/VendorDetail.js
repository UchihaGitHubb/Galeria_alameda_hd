import { useParams, useNavigate } from "react-router-dom";
import { useState } from "react";

import {
  Heart,
  ChevronLeft,
  ChevronRight,
  MessageCircle,
  Share2,
} from "lucide-react";

import { vendors } from "../data/vendors";

import MobileContainer from "../components/MobileContainer";
import BottomNav from "../components/BottomNav";

import colombiaChiquita from "../assets/brands/colombia.png";

import { isFavorite, toggleFavorite } from "../helper/favorites";
import {
  formatMessage,
  getVendorDescription,
  getVendorPortrait,
} from "../helper/vendor";
import { useTheme } from "../context/ThemeContext";
import { useLanguage } from "../context/LanguageContext";

import "../styles/VendorDetail.css";

export default function VendorDetail() {
  const { id } = useParams();
  const navigate = useNavigate();

  const { darkMode } = useTheme();
  const { t, language } = useLanguage();

  const vendor = vendors.find((v) => v.id === Number(id));

  const [favorite, setFavorite] = useState(
    vendor ? isFavorite(vendor.id) : false
  );

  if (!vendor) return null;

  return (
    <MobileContainer>
      <div className={`vendor-detail-page ${darkMode ? "vendor-dark" : ""}`}>
        {/* HERO */}
        <div className="vendor-hero">
          <img
            src={vendor.photo}
            alt={vendor.name}
            className="vendor-hero-image"
          />

          <button className="hero-circle left" onClick={() => navigate(-1)}>
            <ChevronLeft size={28} />
          </button>

          <button
            className="hero-circle right"
            onClick={() => {
              toggleFavorite(vendor.id);
              setFavorite(!favorite);
            }}
          >
            <Heart
              size={22}
              fill={favorite ? "#D9774A" : "none"}
              color="#D9774A"
            />
          </button>
        </div>

        {/* CONTENT */}
        <div className="vendor-detail-content">
          <div className="vendor-avatar-wrapper">
            <div className="vendor-avatar">
              <img src={getVendorPortrait(vendor)} alt={vendor.name} />
            </div>

            <img src={colombiaChiquita} alt="" className="vendor-badge" />
          </div>

          <h1>{vendor.name}</h1>

          <h2>{vendor.business}</h2>

          <div className="info-row">
            <div className="info-item">
              <span>{t.vendor.route}</span>

              <div className="route-chip">
                <img
                  src={vendor.routeIcon}
                  alt={t.vendor.route}
                  className="route-icon"
                />
              </div>
            </div>

            <div className="info-item">
              <span>{t.vendor.zone}</span>

              <div
                className="zone-chip"
                style={{
                  background: vendor.zoneColor,
                }}
              >
                {vendor.zone}
              </div>
            </div>

            <div className="info-item">
              <span>{t.vendor.local}</span>

              <div className="local-chip">{vendor.local}</div>
            </div>
          </div>

          <div className="section-divider" />

          <section>
            <h3>{t.vendor.description}</h3>

            <p>{getVendorDescription(vendor, language)}</p>
          </section>

          <div className="section-divider" />

          <section>
            <h3>{t.vendor.products}</h3>

            <div className="products-grid">
              {vendor.products.map((product, index) => (
                <div key={index} className="product-circle">
                  <img src={product} alt="" />
                </div>
              ))}
            </div>
          </section>

          <div className="section-divider" />

          <section>
            <h3>{t.vendor.location}</h3>

            <div className="location-row">
              <span>
                {formatMessage(t.vendor.zoneLine, {
                  zone: vendor.zone,
                  route: vendor.route,
                  local: vendor.local,
                })}
              </span>

              <button
                className="map-link"
                onClick={() =>
                  navigate("/map", {
                    state: {
                      selectedVendorId: vendor.id,
                    },
                  })
                }
              >
                {t.vendor.viewMap}
              </button>
            </div>

            <button
              className="route-btn"
              onClick={() =>
                navigate("/map", {
                  state: {
                    selectedVendorId: vendor.id,
                    markRoute: true,
                  },
                })
              }
            >
              {t.vendor.markRoute}
              <ChevronRight size={18} />
            </button>
          </section>

          <div className="section-divider" />

          <section>
            <h3>{t.vendor.schedule}</h3>

            <div className="schedule-row">
              <span>{t.vendor.scheduleDays}</span>

              <span>{vendor.schedule}</span>
            </div>
          </section>

          <div className="section-divider" />

          <div className="action-buttons">
            <button>
              <MessageCircle size={18} />
              {t.vendor.comment}
            </button>

            <button>
              <Share2 size={18} />
              {t.vendor.share}
            </button>
          </div>

          <div style={{ height: 120 }} />
        </div>

        <BottomNav />
      </div>
    </MobileContainer>
  );
}

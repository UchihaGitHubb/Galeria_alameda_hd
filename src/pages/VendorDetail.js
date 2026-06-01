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
import { getVendorPortrait } from "../helper/vendor";
import { useTheme } from "../context/ThemeContext";

import "../styles/VendorDetail.css";

export default function VendorDetail() {
  const { id } = useParams();
  const navigate = useNavigate();

  const { darkMode } = useTheme();

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
              <span>Ruta</span>

              <div className="route-chip">
                <img src={vendor.routeIcon} alt="Ruta" className="route-icon" />
              </div>
            </div>

            <div className="info-item">
              <span>Zona</span>

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
              <span>Local</span>

              <div className="local-chip">{vendor.local}</div>
            </div>
          </div>

          <div className="section-divider" />

          <section>
            <h3>Descripción</h3>

            <p>{vendor.description}</p>
          </section>

          <div className="section-divider" />

          <section>
            <h3>Productos</h3>

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
            <h3>Ubicación</h3>

            <div className="location-row">
              <span>
                Zona {vendor.zone} · Ruta {vendor.route} · Local {vendor.local}
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
                Ver mapa
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
              Marcar ruta
              <ChevronRight size={18} />
            </button>
          </section>

          <div className="section-divider" />

          <section>
            <h3>Horario</h3>

            <div className="schedule-row">
              <span>Lunes - Domingo</span>

              <span>{vendor.schedule}</span>
            </div>
          </section>

          <div className="section-divider" />

          <div className="action-buttons">
            <button>
              <MessageCircle size={18} />
              Comentar
            </button>

            <button>
              <Share2 size={18} />
              Compartir
            </button>
          </div>

          <div style={{ height: 120 }} />
        </div>

        <BottomNav />
      </div>
    </MobileContainer>
  );
}

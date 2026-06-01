import colombiaChiquita from "../assets/brands/colombia.png";

import { useState } from "react";
import { isFavorite, toggleFavorite } from "../helper/favorites";

import { useNavigate } from "react-router-dom";

import { Heart, ChevronRight } from "lucide-react";

import { useTheme } from "../context/ThemeContext";

export default function VendorCard({ vendor, onMarkRoute }) {
  const navigate = useNavigate();

  const { darkMode } = useTheme();

  const products = vendor?.products || [];

  const [favorite, setFavorite] = useState(isFavorite(vendor.id));

  return (
    <div
      style={{
        background: darkMode ? "#2A2A2A" : "#F1ECE3",

        border: darkMode
          ? "2px solid rgba(255,255,255,0.08)"
          : "2px solid #DFCDBB",

        borderRadius: "40px",
        padding: "14px",
        boxSizing: "border-box",
      }}
    >
      <div
        style={{
          display: "flex",
          gap: "14px",
          alignItems: "flex-start",
        }}
      >
        {/* FOTO */}
        <div
          style={{
            width: "105px",
            flexShrink: 0,
          }}
        >
          <img
            src={vendor.photo}
            alt={vendor.name}
            style={{
              width: "105px",
              height: "105px",
              borderRadius: "16px",
              objectFit: "cover",
              display: "block",
            }}
          />

          <img
            src={colombiaChiquita}
            alt=""
            style={{
              width: "135px",
              marginTop: "-18px",
              marginLeft: "-16px",
              display: "block",
            }}
          />
        </div>

        {/* CONTENIDO */}
        <div
          style={{
            flex: 1,
            minWidth: 0,
          }}
        >
          {/* HEADER */}
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "flex-start",
              gap: "8px",
            }}
          >
            <div>
              <h2
                style={{
                  margin: 0,
                  color: darkMode ? "#FFFFFF" : "#D9774A",

                  fontFamily: "Quicksand",
                  fontSize: "20px",
                  fontWeight: "700",
                  lineHeight: 1.1,
                }}
              >
                {vendor.name}
              </h2>

              <p
                style={{
                  margin: "5px 0 0",

                  color: darkMode ? "#D8D8D8" : "#D9774A",

                  fontFamily: "Quicksand",
                  fontSize: "14px",
                }}
              >
                {vendor.business}
              </p>
            </div>

            <button
              onClick={() => {
                toggleFavorite(vendor.id);
                setFavorite(!favorite);
              }}
              style={{
                width: "38px",
                height: "38px",
                borderRadius: "50%",

                border: darkMode
                  ? "2px solid rgba(255,255,255,0.12)"
                  : "2px solid #DFCDBB",

                background: "transparent",

                cursor: "pointer",

                display: "flex",
                alignItems: "center",
                justifyContent: "center",

                flexShrink: 0,
              }}
            >
              <Heart
                size={18}
                fill={favorite ? "#D9774A" : "none"}
                color="#D9774A"
              />
            </button>
          </div>

          {/* DATOS */}
          <div
            style={{
              display: "flex",
              alignItems: "flex-start",
              gap: "10px",
              marginTop: "14px",
            }}
          >
            {/* Ruta */}
            <div>
              <div
                style={{
                  fontSize: "11px",
                  color: darkMode ? "#FFFFFF" : "#D9774A",

                  marginBottom: "4px",
                }}
              >
                Ruta
              </div>

              <div
                style={{
                  width: "24px",
                  height: "24px",

                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <img
                  src={vendor.routeIcon}
                  alt="Ruta"
                  style={{
                    width: "40px",
                    height: "40px",
                    objectFit: "contain",
                  }}
                />
              </div>
            </div>

            {/* Zona */}
            <div>
              <div
                style={{
                  fontSize: "11px",
                  color: darkMode ? "#FFFFFF" : "#D9774A",

                  marginBottom: "4px",
                }}
              >
                Zona
              </div>

              <div
                style={{
                  width: "24px",
                  height: "24px",
                  borderRadius: "50%",
                  background: vendor.zoneColor,

                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",

                  fontWeight: "700",
                  fontSize: "13px",
                }}
              >
                {vendor.zone}
              </div>
            </div>

            {/* Local */}
            <div>
              <div
                style={{
                  fontSize: "11px",
                  color: darkMode ? "#FFFFFF" : "#D9774A",

                  marginBottom: "4px",
                }}
              >
                Local
              </div>

              <div
                style={{
                  height: "24px",
                  padding: "0 10px",

                  borderRadius: "15px",

                  background: "#D9774A",
                  color: "#FFF",

                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",

                  fontWeight: "700",
                  fontSize: "10px",
                }}
              >
                {vendor.local}
              </div>
            </div>

            {/* Productos */}
            <div
              style={{
                flex: 1,
                minWidth: 0,
              }}
            >
              <div
                style={{
                  fontSize: "11px",

                  color: darkMode ? "#FFFFFF" : "#D9774A",

                  marginBottom: "6px",
                }}
              >
                Productos
              </div>

              <div
                style={{
                  display: "flex",
                  gap: "4px",
                  flexWrap: "wrap",
                }}
              >
                {products.map((product, index) => (
                  <div
                    key={index}
                    style={{
                      width: "20px",
                      height: "20px",

                      borderRadius: "50%",

                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",

                      flexShrink: 0,
                    }}
                  >
                    <img
                      src={product}
                      alt=""
                      style={{
                        width: "40px",
                        height: "40px",
                        objectFit: "contain",
                      }}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* BOTONES */}
          <div
            style={{
              display: "flex",
              gap: "8px",
              marginTop: "12px",
            }}
          >
            {onMarkRoute && (
              <button
                onClick={() => onMarkRoute(vendor)}
                style={{
                  flex: 1,
                  height: "32px",

                  border: "none",
                  borderRadius: "20px",

                  background: "#D9774A",
                  color: "#FFF",

                  fontFamily: "Quicksand",
                  fontWeight: "700",
                  fontSize: "13px",

                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "2px",

                  cursor: "pointer",
                }}
              >
                Marcar ruta
                <ChevronRight size={15} />
              </button>
            )}

            <button
              onClick={() => navigate(`/vendor/${vendor.id}`)}
              style={{
                flex: 1,
                height: "32px",

                borderRadius: "20px",

                border: darkMode ? "2px solid #FFFFFF" : "2px solid #D9774A",

                background: "transparent",

                color: darkMode ? "#FFFFFF" : "#D9774A",

                fontFamily: "Quicksand",
                fontWeight: "700",
                fontSize: "13px",

                cursor: "pointer",
              }}
            >
              Ver detalles
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

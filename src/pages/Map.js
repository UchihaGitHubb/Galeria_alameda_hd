import { useState, useRef, useEffect } from "react";

import donaMargotPhoto from "../assets/vendors/dona-margot.png";
import donaPaolaPhoto from "../assets/vendors/dona-paola.png";
import donaLesviaPhoto from "../assets/vendors/dona-lesvia.png";
import donJuanPhoto from "../assets/vendors/don-juan.png";
import { useLocation } from "react-router-dom";

import mapaAlameda from "../assets/maps/mapa-alameda.png";

import SelectedMapMarker from "../components/SelectedMapMarker";
import MobileContainer from "../components/MobileContainer";
import MapMarker from "../components/MapMarker";
import BottomNav from "../components/BottomNav";
import VendorCard from "../components/VendorCard";
import producto1 from "../assets/products/producto1.png";
import producto2 from "../assets/products/producto2.png";
import producto3 from "../assets/products/producto3.png";
import producto4 from "../assets/products/producto4.png";
import producto5 from "../assets/products/producto5.png";
import producto6 from "../assets/products/producto6.png";
import producto7 from "../assets/products/producto7.png";
import producto8 from "../assets/products/producto8.png";
import producto9 from "../assets/products/producto9.png";
import producto10 from "../assets/products/producto10.png";
import producto11 from "../assets/products/producto11.png";
import { vendors } from "../data/vendors";
import { useTheme } from "../context/ThemeContext";

import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";

import {
  Search,
  SlidersHorizontal,
  LocateFixed,
  Compass,
  Plus,
  Minus,
} from "lucide-react";

import "../styles/Map.css";

export default function Map() {
  const { darkMode } = useTheme();
  const [selectedVendor, setSelectedVendor] = useState(null);
  const [activeRoute, setActiveRoute] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");

  const [showFilters, setShowFilters] = useState(false);

  const [selectedRoute, setSelectedRoute] = useState(null);
  const [selectedZone, setSelectedZone] = useState(null);

  const mapRef = useRef(null);
  const location = useLocation();

  useEffect(() => {
    const vendorId = location.state?.selectedVendorId;

    if (!vendorId) return;

    const vendor = vendors.find((v) => v.id === vendorId);

    if (!vendor) return;

    setSelectedVendor(vendor);

    if (location.state?.markRoute) {
      activateVendorRoute(vendor);
    }
  }, [location]);

  const margotRoute = [
    { x: 30, y: 59.9 },
    { x: 45, y: 63 },
    { x: 45.5, y: 61.8 },
    { x: 65, y: 66 },
    { x: 65.2, y: 64 },
  ];

  const lesviaRoute = [
    { x: 30, y: 59.9 },
    { x: 41, y: 61.9 },
    { x: 45, y: 53 },
    { x: 46, y: 53 },
  ];

  const paolaRoute = [
    { x: 30, y: 59.9 },
    { x: 40.5, y: 61.9 },
    { x: 47, y: 48.6 },
    { x: 63, y: 51.8 },
    { x: 63.3, y: 51.3 },
    { x: 74, y: 53.8 },
    { x: 74.9, y: 52.7 },
  ];

  const juanRoute = [
    { x: 30, y: 59.9 },
    { x: 40.5, y: 61.9 },
    { x: 42.9, y: 56.5 },
    { x: 59.4, y: 60 },
    { x: 60.2, y: 58.9 },
  ];
  const activateVendorRoute = (vendor) => {
    switch (vendor.id) {
      case 1:
        setActiveRoute(margotRoute);
        break;

      case 2:
        setActiveRoute(lesviaRoute);
        break;

      case 3:
        setActiveRoute(paolaRoute);
        break;

      case 4:
        setActiveRoute(juanRoute);
        break;

      default:
        setActiveRoute(null);
    }
  };
  useEffect(() => {
    const vendorId = location.state?.selectedVendorId;

    if (!vendorId) return;

    const vendor = vendors.find((v) => v.id === vendorId);

    if (!vendor) return;

    setSelectedVendor(vendor);

    setSearchTerm(vendor.name);

    if (location.state?.markRoute) {
      activateVendorRoute(vendor);
    }
  }, [location]);

  const filteredVendors = vendors.filter((vendor) => {
    const matchesSearch =
      searchTerm.trim() === ""
        ? false
        : [
            vendor.name,
            vendor.business,
            vendor.local,
            vendor.zone,
            vendor.route,
          ]
            .join(" ")
            .toLowerCase()
            .includes(searchTerm.toLowerCase());

    const matchesRoute =
      selectedRoute === null ? true : vendor.route === selectedRoute;

    const matchesZone =
      selectedZone === null ? true : vendor.zone === selectedZone;

    if (
      searchTerm.trim() === "" &&
      selectedRoute === null &&
      selectedZone === null
    ) {
      return false;
    }

    return (
      (searchTerm.trim() === "" || matchesSearch) && matchesRoute && matchesZone
    );
  });

  return (
    <MobileContainer background="#F1ECE3">
      <div className="map-page">
        {/* BUSCADOR */}
        <div className="search-wrapper">
          <div className="search-bar">
            <Search
              size={20}
              strokeWidth={2.3}
              color={darkMode ? "#FFFFFF" : "#D47D55"}
            />

            <input
              className="search-input"
              type="text"
              value={searchTerm}
              placeholder="BUSCA EN EL MERCADO"
              onChange={(e) => {
                setSearchTerm(e.target.value);
                setSelectedVendor(null);
              }}
            />
          </div>

          <button className="filter-btn" onClick={() => setShowFilters(true)}>
            <SlidersHorizontal
              size={20}
              strokeWidth={2.3}
              color={darkMode ? "#FFFFFF" : "#D47D55"}
            />
          </button>
        </div>

        {/* MAPA */}
        <TransformWrapper
          initialScale={1}
          minScale={1}
          maxScale={4}
          centerOnInit
          wheel={{ disabled: true }}
          doubleClick={{ disabled: true }}
        >
          {({ zoomIn, zoomOut, resetTransform }) => (
            <>
              <TransformComponent
                wrapperStyle={{
                  width: "100%",
                  height: "100%",
                }}
              >
                <div
                  ref={mapRef}
                  className="map-container"
                  onClick={() => {
                    setSelectedVendor(null);
                    setActiveRoute(null);
                  }}
                >
                  <img
                    src={mapaAlameda}
                    alt="Mapa Alameda"
                    className="map-image"
                  />

                  {activeRoute && (
                    <svg
                      className="route-svg"
                      viewBox="0 0 100 100"
                      preserveAspectRatio="none"
                    >
                      {/* Sombra */}
                      <polyline
                        points={activeRoute
                          .map((point) => `${point.x},${point.y}`)
                          .join(" ")}
                        fill="none"
                        strokeWidth="1"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />

                      {/* Ruta */}
                      <polyline
                        points={activeRoute
                          .map((point) => `${point.x},${point.y}`)
                          .join(" ")}
                        fill="none"
                        stroke={darkMode ? "#FFFFFF" : "#D9774A"}
                        strokeWidth="0.55"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  )}

                  {filteredVendors.map((vendor) => (
                    <div
                      key={vendor.id}
                      className="marker-wrapper"
                      style={{
                        left: `${vendor.x}%`,
                        top: `${vendor.y}%`,
                        zIndex: selectedVendor?.id === vendor.id ? 100 : 50,
                      }}
                      onClick={(e) => {
                        e.stopPropagation();
                        setSelectedVendor(vendor);
                      }}
                    >
                      {selectedVendor?.id === vendor.id ? (
                        <SelectedMapMarker photo={vendor.photo} />
                      ) : (
                        <MapMarker />
                      )}
                    </div>
                  ))}
                </div>
              </TransformComponent>

              {/* CONTROLES */}
              <div
                className={`map-controls ${selectedVendor ? "card-open" : ""}`}
              >
                <button
                  className="control-circle"
                  onClick={() => resetTransform()}
                >
                  <LocateFixed size={18} />
                </button>

                <button className="control-circle">
                  <Compass size={18} />
                </button>

                <div className="zoom-group">
                  <button onClick={() => zoomIn()}>
                    <Plus size={18} />
                  </button>

                  <button onClick={() => zoomOut()}>
                    <Minus size={18} />
                  </button>
                </div>
              </div>
            </>
          )}
        </TransformWrapper>

        {/* CARD */}
        {selectedVendor && (
          <div className="vendor-card-wrapper">
            <VendorCard
              vendor={selectedVendor}
              onMarkRoute={(vendor) => {
                switch (vendor.id) {
                  case 1:
                    setActiveRoute(margotRoute);
                    break;

                  case 2:
                    setActiveRoute(lesviaRoute);
                    break;

                  case 3:
                    setActiveRoute(paolaRoute);
                    break;

                  case 4:
                    setActiveRoute(juanRoute);
                    break;

                  default:
                    setActiveRoute(null);
                }
              }}
            />
          </div>
        )}

        {/* FILTROS */}
        {showFilters && (
          <>
            <div
              className="filter-overlay"
              onClick={() => setShowFilters(false)}
            />

            <div
              className="filter-sheet"
              style={{
                height: "50vh",
              }}
            >
              <div className="filter-section">
                <div className="filter-label">Filtrar por Ruta</div>

                <div className="filter-options">
                  {["1", "2", "3", "4", "5", "6", "7"].map((route) => (
                    <button
                      key={route}
                      className={`filter-chip ${
                        selectedRoute === route ? "active" : ""
                      }`}
                      onClick={() =>
                        setSelectedRoute(selectedRoute === route ? null : route)
                      }
                    >
                      {route}
                    </button>
                  ))}
                </div>
              </div>

              <div className="filter-section">
                <div className="filter-label">Filtrar por Zona</div>

                <div className="filter-options">
                  {["1", "2", "3", "4", "5", "6", "7"].map((zone) => (
                    <button
                      key={zone}
                      className={`filter-chip ${
                        selectedZone === zone ? "active" : ""
                      }`}
                      onClick={() =>
                        setSelectedZone(selectedZone === zone ? null : zone)
                      }
                    >
                      {zone}
                    </button>
                  ))}
                </div>
              </div>

              <div className="filter-actions">
                <button
                  className="clear-btn"
                  onClick={() => {
                    setSelectedRoute(null);
                    setSelectedZone(null);
                    setSearchTerm("");
                    setSelectedVendor(null);
                    setActiveRoute(null);
                  }}
                >
                  Limpiar
                </button>

                <button
                  className="apply-btn"
                  onClick={() => setShowFilters(false)}
                >
                  Aplicar
                </button>
              </div>
            </div>
          </>
        )}

        <BottomNav />
      </div>
    </MobileContainer>
  );
}

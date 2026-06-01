import { useState, useRef, useEffect, useCallback } from "react";
import { useLocation } from "react-router-dom";

import mapaAlameda from "../assets/maps/mapa-alameda.png";

import SelectedMapMarker from "../components/SelectedMapMarker";
import MobileContainer from "../components/MobileContainer";
import MapMarker from "../components/MapMarker";
import BottomNav from "../components/BottomNav";
import VendorCard from "../components/VendorCard";
import { vendors } from "../data/vendors";
import { useTheme } from "../context/ThemeContext";
import { useLanguage } from "../context/LanguageContext";

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

const MARGOT_ROUTE = [
  { x: 30, y: 59.9 },
  { x: 45, y: 63 },
  { x: 45.5, y: 61.8 },
  { x: 65, y: 66 },
  { x: 65.2, y: 64 },
];

const LESVIA_ROUTE = [
  { x: 30, y: 59.9 },
  { x: 41, y: 61.9 },
  { x: 45, y: 53 },
  { x: 46, y: 53 },
];

const PAOLA_ROUTE = [
  { x: 30, y: 59.9 },
  { x: 40.5, y: 61.9 },
  { x: 47, y: 48.6 },
  { x: 63, y: 51.8 },
  { x: 63.3, y: 51.3 },
  { x: 74, y: 53.8 },
  { x: 74.9, y: 52.7 },
];

const JUAN_ROUTE = [
  { x: 30, y: 59.9 },
  { x: 40.5, y: 61.9 },
  { x: 42.9, y: 56.5 },
  { x: 59.4, y: 60 },
  { x: 60.2, y: 58.9 },
];

const VENDOR_ROUTES = {
  1: MARGOT_ROUTE,
  2: LESVIA_ROUTE,
  3: PAOLA_ROUTE,
  4: JUAN_ROUTE,
};

const MAP_ANIMATION = 250;

export default function Map() {
  const { darkMode } = useTheme();
  const { t } = useLanguage();
  const [selectedVendor, setSelectedVendor] = useState(null);
  const [activeRoute, setActiveRoute] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [showFilters, setShowFilters] = useState(false);
  const [selectedRoute, setSelectedRoute] = useState(null);
  const [selectedZone, setSelectedZone] = useState(null);

  const mapRef = useRef(null);
  const transformRef = useRef(null);
  const location = useLocation();

  const accentColor = darkMode ? "#FFFFFF" : "#D47D55";
  const mapBg = darkMode ? "#1B1B1B" : "#F1ECE3";

  const activateVendorRoute = useCallback((vendor) => {
    setActiveRoute(VENDOR_ROUTES[vendor.id] ?? null);
  }, []);

  useEffect(() => {
    const zoneFromNav = location.state?.selectedZone;
    if (zoneFromNav) {
      setSelectedZone(String(zoneFromNav));
      if (location.state?.openFilters) {
        setShowFilters(true);
      }
    }

    const vendorId = location.state?.selectedVendorId;
    if (!vendorId) return;

    const vendor = vendors.find((v) => v.id === vendorId);
    if (!vendor) return;

    setSelectedVendor(vendor);
    setSearchTerm(vendor.name);

    if (location.state?.markRoute) {
      activateVendorRoute(vendor);
    }
  }, [location, activateVendorRoute]);

  const handleResetMapView = () => {
    const api = transformRef.current;
    if (!api) return;

    api.resetTransform(MAP_ANIMATION, "easeOut");
    api.centerView(1, MAP_ANIMATION, "easeOut");
  };

  const handleCompass = () => {
    const api = transformRef.current;
    if (!api) return;

    api.centerView(1, MAP_ANIMATION, "easeOut");
  };

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
    <MobileContainer background={mapBg}>
      <div className="map-page">
        <div className="search-wrapper">
          <div className="search-bar">
            <Search size={20} strokeWidth={2.3} color={accentColor} />

            <input
              className="search-input"
              type="text"
              value={searchTerm}
              placeholder={t.map.searchPlaceholder}
              onChange={(e) => {
                setSearchTerm(e.target.value);
                setSelectedVendor(null);
              }}
            />
          </div>

          <button
            type="button"
            className="filter-btn"
            onClick={() => setShowFilters(true)}
            aria-label={t.map.filterRoute}
          >
            <SlidersHorizontal size={20} strokeWidth={2.3} color={accentColor} />
          </button>
        </div>

        <TransformWrapper
          ref={transformRef}
          initialScale={1}
          minScale={1}
          maxScale={4}
          centerOnInit
          limitToBounds
          wheel={{ disabled: true }}
          doubleClick={{ disabled: true }}
        >
          {({ zoomIn, zoomOut }) => (
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
                      <polyline
                        points={activeRoute
                          .map((point) => `${point.x},${point.y}`)
                          .join(" ")}
                        fill="none"
                        strokeWidth="1"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />

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

              <div
                className={`map-controls ${selectedVendor ? "card-open" : ""}`}
              >
                <button
                  type="button"
                  className="control-circle"
                  onClick={handleResetMapView}
                  aria-label="Centrar mapa"
                >
                  <LocateFixed
                    size={18}
                    strokeWidth={2.3}
                    color={accentColor}
                  />
                </button>

                <button
                  type="button"
                  className="control-circle"
                  onClick={handleCompass}
                  aria-label="Brújula"
                >
                  <Compass size={18} strokeWidth={2.3} color={accentColor} />
                </button>

                <div className="zoom-group">
                  <button type="button" onClick={() => zoomIn()}>
                    <Plus size={18} strokeWidth={2.5} />
                  </button>

                  <button type="button" onClick={() => zoomOut()}>
                    <Minus size={18} strokeWidth={2.5} />
                  </button>
                </div>
              </div>
            </>
          )}
        </TransformWrapper>

        {selectedVendor && (
          <div className="vendor-card-wrapper">
            <VendorCard
              vendor={selectedVendor}
              onMarkRoute={(vendor) => activateVendorRoute(vendor)}
            />
          </div>
        )}

        {showFilters && (
          <>
            <div
              className="filter-overlay"
              onClick={() => setShowFilters(false)}
            />

            <div className="filter-sheet" style={{ height: "50vh" }}>
              <div className="filter-section">
                <div className="filter-label">{t.map.filterRoute}</div>

                <div className="filter-options">
                  {["1", "2", "3", "4", "5", "6", "7"].map((route) => (
                    <button
                      key={route}
                      type="button"
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
                <div className="filter-label">{t.map.filterZone}</div>

                <div className="filter-options">
                  {["1", "2", "3", "4", "5", "6", "7", "8"].map((zone) => (
                    <button
                      key={zone}
                      type="button"
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
                  type="button"
                  className="clear-btn"
                  onClick={() => {
                    setSelectedRoute(null);
                    setSelectedZone(null);
                    setSearchTerm("");
                    setSelectedVendor(null);
                    setActiveRoute(null);
                  }}
                >
                  {t.map.clear}
                </button>

                <button
                  type="button"
                  className="apply-btn"
                  onClick={() => setShowFilters(false)}
                >
                  {t.map.apply}
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

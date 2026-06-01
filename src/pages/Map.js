import { useState, useRef, useEffect, useCallback } from "react";
import { useLocation } from "react-router-dom";

import mapaAlameda from "../assets/maps/mapa-alameda.png";

import SelectedMapMarker from "../components/SelectedMapMarker";
import MobileContainer from "../components/MobileContainer";
import MapMarker from "../components/MapMarker";
import BottomNav from "../components/BottomNav";
import VendorCard from "../components/VendorCard";
import MapCategoryFilter from "../components/MapCategoryFilter";
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
import "../styles/MapCategoryFilter.css";

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
  const [ownerGenderFilter, setOwnerGenderFilter] = useState(null);
  const [activeFilterCategory, setActiveFilterCategory] = useState(null);

  const [pendingCategory, setPendingCategory] = useState(null);
  const [pendingRoute, setPendingRoute] = useState(null);
  const [pendingZone, setPendingZone] = useState(null);
  const [pendingOwner, setPendingOwner] = useState(null);

  const mapRef = useRef(null);
  const transformRef = useRef(null);
  const location = useLocation();

  const accentColor = darkMode ? "#FFFFFF" : "#D47D55";
  const controlIconColor = "#FFFFFF";
  const mapBg = darkMode ? "#1B1B1B" : "#F1ECE3";

  const activateVendorRoute = useCallback((vendor) => {
    setActiveRoute(VENDOR_ROUTES[vendor.id] ?? null);
  }, []);

  useEffect(() => {
    const zoneFromNav = location.state?.selectedZone;
    if (zoneFromNav) {
      setSelectedZone(String(zoneFromNav));
      setActiveFilterCategory("zone");
      if (location.state?.openFilters) {
        setShowFilters(true);
      }
    }

    const routeFromNav = location.state?.selectedRoute;
    if (routeFromNav) {
      setSelectedRoute(String(routeFromNav));
      setActiveFilterCategory("route");
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
    const q = searchTerm.trim().toLowerCase();
    const hasFilter =
      q !== "" ||
      selectedRoute !== null ||
      selectedZone !== null ||
      ownerGenderFilter !== null ||
      activeFilterCategory === "product";

    if (!hasFilter) return false;

    const matchesSearch =
      q === "" ||
      [vendor.name, vendor.business, vendor.local, vendor.zone, vendor.route]
        .join(" ")
        .toLowerCase()
        .includes(q);

    const matchesRoute =
      selectedRoute === null || activeFilterCategory === "owner"
        ? true
        : vendor.route === selectedRoute;

    const matchesZone =
      selectedZone === null ? true : vendor.zone === selectedZone;

    const matchesOwner =
      ownerGenderFilter === null ? true : vendor.gender === ownerGenderFilter;

    const matchesCategory =
      activeFilterCategory === "local"
        ? q === "" || vendor.local.toLowerCase().includes(q)
        : activeFilterCategory === "business"
          ? q === "" || vendor.business.toLowerCase().includes(q)
          : activeFilterCategory === "product"
            ? (vendor.products || []).length > 0
            : true;

    return (
      matchesSearch &&
      matchesRoute &&
      matchesZone &&
      matchesOwner &&
      matchesCategory
    );
  });

  const openFilters = () => {
    setPendingCategory(activeFilterCategory);
    setPendingRoute(selectedRoute);
    setPendingZone(selectedZone);
    setPendingOwner(ownerGenderFilter);
    setShowFilters(true);
  };

  const applyFilters = () => {
    setActiveFilterCategory(pendingCategory);
    if (pendingCategory === "route") {
      setSelectedRoute(pendingRoute);
      setSelectedZone(null);
      setOwnerGenderFilter(null);
    } else if (pendingCategory === "zone") {
      setSelectedZone(pendingZone);
      setSelectedRoute(null);
      setOwnerGenderFilter(null);
    } else if (pendingCategory === "owner") {
      setOwnerGenderFilter(pendingOwner);
      setSelectedRoute(null);
      setSelectedZone(null);
    } else {
      setSelectedRoute(null);
      setSelectedZone(null);
      setOwnerGenderFilter(null);
    }
    setSelectedVendor(null);
    setShowFilters(false);
  };

  const clearFilters = () => {
    setPendingCategory(null);
    setPendingRoute(null);
    setPendingZone(null);
    setPendingOwner(null);
    setActiveFilterCategory(null);
    setSelectedRoute(null);
    setSelectedZone(null);
    setOwnerGenderFilter(null);
    setSearchTerm("");
    setSelectedVendor(null);
    setActiveRoute(null);
    setShowFilters(false);
  };

  return (
    <MobileContainer background={mapBg}>
      <div className={`map-page ${darkMode ? "map-page--dark" : ""}`}>
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
            onClick={openFilters}
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
                  aria-label={t.map.centerMap}
                >
                  <LocateFixed
                    size={18}
                    strokeWidth={2.3}
                    color={controlIconColor}
                  />
                </button>

                <button
                  type="button"
                  className="control-circle"
                  onClick={handleCompass}
                  aria-label={t.map.compass}
                >
                  <Compass size={18} strokeWidth={2.3} color={controlIconColor} />
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

        <MapCategoryFilter
          t={t}
          open={showFilters}
          onClose={() => setShowFilters(false)}
          selectedCategory={pendingCategory}
          onSelectCategory={setPendingCategory}
          selectedRoute={pendingRoute}
          selectedZone={pendingZone}
          ownerGender={pendingOwner}
          onSelectRoute={setPendingRoute}
          onSelectZone={setPendingZone}
          onSelectOwner={setPendingOwner}
          onApply={applyFilters}
          onClear={clearFilters}
        />

        <BottomNav />
      </div>
    </MobileContainer>
  );
}

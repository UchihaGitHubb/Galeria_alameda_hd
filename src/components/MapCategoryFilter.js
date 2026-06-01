import { CATEGORY_ICONS } from "../data/categoryIcons";

import "../styles/MapCategoryFilter.css";

const CATEGORIES = [
  { id: "route", icon: CATEGORY_ICONS.route },
  { id: "zone", icon: CATEGORY_ICONS.zone },
  { id: "owner", icon: CATEGORY_ICONS.owner },
  { id: "local", icon: CATEGORY_ICONS.local },
  { id: "business", icon: CATEGORY_ICONS.business },
  { id: "product", icon: CATEGORY_ICONS.product },
];

export default function MapCategoryFilter({
  t,
  open,
  onClose,
  selectedCategory,
  onSelectCategory,
  selectedRoute,
  selectedZone,
  ownerGender,
  onSelectRoute,
  onSelectZone,
  onSelectOwner,
  onApply,
  onClear,
}) {
  if (!open) return null;

  const labels = {
    route: t.map.filterCategories.routes,
    zone: t.map.filterCategories.zones,
    owner: t.map.filterCategories.owner,
    local: t.map.filterCategories.local,
    business: t.map.filterCategories.businessName,
    product: t.map.filterCategories.product,
  };

  return (
    <>
      <div className="map-cat-filter-overlay" onClick={onClose} />

      <div className="map-cat-filter-sheet" role="dialog" aria-modal="true">
        <h2>{t.map.filterSelectTitle}</h2>

        <div className="map-cat-filter-grid">
          {CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              type="button"
              className={`map-cat-filter-tile ${
                selectedCategory === cat.id ? "active" : ""
              }`}
              onClick={() => onSelectCategory(cat.id)}
            >
              <img src={cat.icon} alt="" className="map-cat-filter-tile__icon" />
              <span>{labels[cat.id]}</span>
            </button>
          ))}
        </div>

        {selectedCategory === "route" ? (
          <div className="map-cat-filter-sub">
            <p className="map-cat-filter-sub__label">{t.map.filterRoute}</p>
            <div className="map-cat-filter-chips">
              {["1", "2", "3", "4", "5", "6", "7"].map((route) => (
                <button
                  key={route}
                  type="button"
                  className={`map-cat-filter-chip ${
                    selectedRoute === route ? "active" : ""
                  }`}
                  onClick={() =>
                    onSelectRoute(selectedRoute === route ? null : route)
                  }
                >
                  {route}
                </button>
              ))}
            </div>
          </div>
        ) : null}

        {selectedCategory === "zone" ? (
          <div className="map-cat-filter-sub">
            <p className="map-cat-filter-sub__label">{t.map.filterZone}</p>
            <div className="map-cat-filter-chips">
              {["1", "2", "3", "4", "5", "6", "7", "8"].map((zone) => (
                <button
                  key={zone}
                  type="button"
                  className={`map-cat-filter-chip ${
                    selectedZone === zone ? "active" : ""
                  }`}
                  onClick={() =>
                    onSelectZone(selectedZone === zone ? null : zone)
                  }
                >
                  {zone}
                </button>
              ))}
            </div>
          </div>
        ) : null}

        {selectedCategory === "owner" ? (
          <div className="map-cat-filter-sub map-cat-filter-sub--row">
            <button
              type="button"
              className={`map-cat-filter-owner ${
                ownerGender === "dona" ? "active" : ""
              }`}
              onClick={() =>
                onSelectOwner(ownerGender === "dona" ? null : "dona")
              }
            >
              {t.map.filterOwnerDona}
            </button>
            <button
              type="button"
              className={`map-cat-filter-owner ${
                ownerGender === "don" ? "active" : ""
              }`}
              onClick={() =>
                onSelectOwner(ownerGender === "don" ? null : "don")
              }
            >
              {t.map.filterOwnerDon}
            </button>
          </div>
        ) : null}

        <div className="map-cat-filter-actions">
          <button type="button" className="map-cat-filter-apply" onClick={onApply}>
            {t.map.filterApplyCategories}
          </button>
          <button type="button" className="map-cat-filter-clear" onClick={onClear}>
            {t.map.clear}
          </button>
        </div>
      </div>
    </>
  );
}

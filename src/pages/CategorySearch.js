import { useMemo, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Search as SearchIcon, ChevronLeft } from "lucide-react";

import MobileContainer from "../components/MobileContainer";
import BottomNav from "../components/BottomNav";
import VendorCard from "../components/VendorCard";
import SearchLocaleCard from "../components/SearchLocaleCard";
import { vendors } from "../data/vendors";
import { searchLocales } from "../data/searchLocales";
import { useTheme } from "../context/ThemeContext";
import { useLanguage } from "../context/LanguageContext";

import "../styles/CategorySearch.css";

const MODES = ["business", "local", "product", "owner"];

function match(fields, q) {
  if (!q) return true;
  return fields.join(" ").toLowerCase().includes(q);
}

export default function CategorySearch() {
  const { mode } = useParams();
  const navigate = useNavigate();
  const { darkMode } = useTheme();
  const { t } = useLanguage();
  const [query, setQuery] = useState("");

  const activeMode = MODES.includes(mode) ? mode : "business";
  const cfg = t.categorySearch[activeMode];

  const { mapResults, localeResults, sectionLabel } = useMemo(() => {
    const q = query.trim().toLowerCase();

    const map = vendors.filter((v) => {
      const base = [v.name, v.business, v.local, v.zone, v.route, v.description];
      if (activeMode === "owner") {
        if (q.includes("doña") || q.includes("dona"))
          return v.gender === "dona" && match(base, q);
        if (/\bdon\b/.test(q)) return v.gender === "don" && match(base, q);
        return match(base, q);
      }
      if (activeMode === "local") return match([v.local, v.business, v.name, ...base], q);
      if (activeMode === "business") return match([v.business, v.name, ...base], q);
      if (activeMode === "product")
        return match([v.description, v.business, "producto", ...base], q);
      return match(base, q);
    });

    const locales = searchLocales.filter((loc) => {
      const base = [
        loc.business,
        loc.local,
        loc.owner,
        loc.products,
        loc.route,
      ];
      if (activeMode === "owner") {
        if (q.includes("doña") || q.includes("dona"))
          return loc.gender === "dona" && match(base, q);
        if (/\bdon\b/.test(q)) return loc.gender === "don" && match(base, q);
        return match(base, q);
      }
      if (activeMode === "local") return match([loc.local, loc.business, ...base], q);
      if (activeMode === "business") return match([loc.business, loc.owner, ...base], q);
      if (activeMode === "product") return match([loc.products, loc.business, ...base], q);
      return match(base, q);
    });

    let label = null;
    if (activeMode === "product" && map.length > 0) {
      const v = map[0];
      label = `${v.business}, Zona ${v.zone}`;
    }

    return { mapResults: map, localeResults: locales, sectionLabel: label };
  }, [activeMode, query]);

  const total = mapResults.length + localeResults.length;

  if (!MODES.includes(mode)) return null;

  return (
    <MobileContainer background={darkMode ? "#1B1B1B" : "#FFF8F0"}>
      <div className={`cat-search ${darkMode ? "cat-search--dark" : ""}`}>
        <header className="cat-search__header">
          <button
            type="button"
            className="cat-search__back"
            onClick={() => navigate("/home")}
            aria-label={t.categorySearch.back}
          >
            <ChevronLeft size={26} strokeWidth={2.5} />
          </button>
          <h1>{cfg.title}</h1>
        </header>

        <div className="cat-search__bar">
          <SearchIcon size={20} strokeWidth={2.3} />
          <input
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder={cfg.placeholder}
            aria-label={cfg.placeholder}
          />
        </div>

        <div className="cat-search__results">
          {sectionLabel ? (
            <p className="cat-search__section">{sectionLabel}</p>
          ) : (
            <p className="cat-search__section">{t.search.results}</p>
          )}

          {total === 0 ? (
            <p className="cat-search__empty">{t.search.noResults}</p>
          ) : (
            <div className="cat-search__list">
              {mapResults.map((v) => (
                <VendorCard key={`m-${v.id}`} vendor={v} displayMode={activeMode} />
              ))}
              {localeResults.map((loc) => (
                <SearchLocaleCard key={loc.id} locale={loc} displayMode={activeMode} />
              ))}
            </div>
          )}
        </div>

        <BottomNav />
      </div>
    </MobileContainer>
  );
}

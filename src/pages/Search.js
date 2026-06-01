import { useMemo, useState } from "react";
import { Search as SearchIcon } from "lucide-react";

import MobileContainer from "../components/MobileContainer";
import BottomNav from "../components/BottomNav";
import VendorCard from "../components/VendorCard";
import SearchLocaleCard from "../components/SearchLocaleCard";
import { vendors } from "../data/vendors";
import { searchLocales } from "../data/searchLocales";
import { useTheme } from "../context/ThemeContext";
import { useLanguage } from "../context/LanguageContext";

import "../styles/Search.css";

const TABS = ["locals", "products", "routes", "owners"];

function matchesQuery(fields, q) {
  if (!q) return true;
  return fields.join(" ").toLowerCase().includes(q);
}

export default function Search() {
  const { darkMode } = useTheme();
  const { t } = useLanguage();

  const [query, setQuery] = useState("");
  const [tab, setTab] = useState("locals");

  const tabLabels = {
    locals: t.search.tabs.locals,
    products: t.search.tabs.products,
    routes: t.search.tabs.routes,
    owners: t.search.tabs.owners,
  };

  const { mapResults, localeResults } = useMemo(() => {
    const q = query.trim().toLowerCase();

    const map = vendors.filter((v) => {
      const fields = [
        v.name,
        v.business,
        v.local,
        v.zone,
        v.route,
        v.description,
      ];

      if (tab === "routes") {
        return matchesQuery(fields, q) || (q && v.route === q.replace(/\D/g, ""));
      }
      if (tab === "owners") {
        const ownerQ = q.includes("doña") || q.includes("dona");
        const donQ = /\bdon\b/.test(q);
        if (ownerQ) return v.gender === "dona" && matchesQuery(fields, q);
        if (donQ) return v.gender === "don" && matchesQuery(fields, q);
        return matchesQuery(fields, q);
      }
      if (tab === "products") {
        return matchesQuery([...fields, "producto"], q);
      }
      return matchesQuery(fields, q);
    });

    const locales = searchLocales.filter((loc) => {
      const fields = [
        loc.business,
        loc.local,
        loc.owner,
        loc.products,
        loc.route,
        loc.routeLabel,
      ];

      if (tab === "routes") {
        return (
          matchesQuery(fields, q) ||
          (q && loc.route === q.replace(/\D/g, ""))
        );
      }
      if (tab === "owners") {
        const ownerQ = q.includes("doña") || q.includes("dona");
        const donQ = /\bdon\b/.test(q);
        if (ownerQ) return loc.gender === "dona" && matchesQuery(fields, q);
        if (donQ) return loc.gender === "don" && matchesQuery(fields, q);
        return matchesQuery(fields, q);
      }
      if (tab === "products") {
        return matchesQuery([loc.products, loc.business], q);
      }
      return matchesQuery(fields, q);
    });

    return { mapResults: map, localeResults: locales };
  }, [query, tab]);

  const totalCount = mapResults.length + localeResults.length;

  return (
    <MobileContainer background={darkMode ? "#1B1B1B" : "#FFF8F0"}>
      <div className={`search-page ${darkMode ? "search-page--dark" : ""}`}>
        <div className="search-top">
          <div className="search-bar-wrap">
            <SearchIcon size={20} strokeWidth={2.3} />
            <input
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder={t.search.placeholder}
              aria-label={t.search.placeholder}
            />
          </div>

          <div className="search-tabs" role="tablist">
            {TABS.map((key) => (
              <button
                key={key}
                type="button"
                role="tab"
                aria-selected={tab === key}
                className={`search-tab ${tab === key ? "active" : ""}`}
                onClick={() => setTab(key)}
              >
                {tabLabels[key]}
              </button>
            ))}
          </div>
        </div>

        <div className="search-results">
          <h2>{t.search.results}</h2>

          <div className="search-results-list">
            {totalCount === 0 ? (
              <p className="search-empty">{t.search.noResults}</p>
            ) : (
              <>
                {mapResults.map((vendor) => (
                  <VendorCard key={`map-${vendor.id}`} vendor={vendor} />
                ))}
                {localeResults.map((locale) => (
                  <SearchLocaleCard key={locale.id} locale={locale} />
                ))}
              </>
            )}
          </div>
        </div>

        <BottomNav />
      </div>
    </MobileContainer>
  );
}

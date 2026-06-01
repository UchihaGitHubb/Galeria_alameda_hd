import { useTheme } from "../context/ThemeContext";
import { formatMessage, getVendorPortrait } from "../helper/vendor";
import { useLanguage } from "../context/LanguageContext";

export default function SearchLocaleCard({ locale, displayMode }) {
  const { darkMode } = useTheme();
  const { t } = useLanguage();
  const portrait = getVendorPortrait({ gender: locale.gender });

  let title =
    locale.local.toLowerCase() === "por confirmar"
      ? locale.business
      : locale.local.startsWith("#")
        ? locale.local
        : `Local #${locale.local}`;

  let subtitle =
    locale.business.toLowerCase() === "local sin nombre"
      ? locale.owner
      : locale.business;

  if (displayMode === "business") {
    title = locale.business;
    subtitle = locale.owner !== "Por confirmar" ? locale.owner : locale.local;
  } else if (displayMode === "owner") {
    title = locale.owner !== "Por confirmar" ? locale.owner : locale.business;
    subtitle = locale.business;
  } else if (displayMode === "product") {
    title = locale.business;
    subtitle = locale.products;
  }

  return (
    <div
      className="search-locale-card"
      style={{
        background: darkMode ? "#2A2A2A" : "#F1ECE3",
        border: darkMode
          ? "2px solid rgba(255,255,255,0.08)"
          : "2px solid #DFCDBB",
      }}
    >
      <img src={portrait} alt="" className="search-locale-card__avatar" />
      <div className="search-locale-card__body">
        <h3 style={{ color: darkMode ? "#FFFFFF" : "#D9774A" }}>{title}</h3>
        <p style={{ color: darkMode ? "#D8D8D8" : "#D9774A" }}>{subtitle}</p>
        <p
          className="search-locale-card__meta"
          style={{ color: darkMode ? "#AAAAAA" : "#A67A4F" }}
        >
          {formatMessage(t.vendor.routeMeta, { route: locale.route })}
          {locale.owner && locale.owner !== "Por confirmar"
            ? ` · ${locale.owner}`
            : ""}
        </p>
        <p
          className="search-locale-card__products"
          style={{ color: darkMode ? "#CCCCCC" : "#A67A4F" }}
        >
          {locale.products}
        </p>
      </div>
    </div>
  );
}

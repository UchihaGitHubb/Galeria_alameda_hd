import { useMemo, useState } from "react";
import {
  Search,
  ChevronDown,
  Info,
  MapPinned,
  Store,
  UserCog,
  Heart,
  AlertTriangle,
} from "lucide-react";

import HelpPageLayout from "../components/HelpPageLayout";
import { useLanguage } from "../context/LanguageContext";
import { FAQ_CATEGORIES, getFaqData } from "../data/faqContent";

const ICONS = {
  info: Info,
  map: MapPinned,
  store: Store,
  user: UserCog,
  heart: Heart,
  alert: AlertTriangle,
};

export default function HelpFaq() {
  const { t, language } = useLanguage();
  const faqData = getFaqData(language);

  const [query, setQuery] = useState("");
  const [openId, setOpenId] = useState(null);

  const categories = useMemo(() => {
    return FAQ_CATEGORIES.map((cat) => {
      const meta = t.help.faq.categories[cat.id];
      const items = faqData[cat.id]?.items || [];
      const q = query.trim().toLowerCase();

      const filteredItems = q
        ? items.filter(
            (item) =>
              item.q.toLowerCase().includes(q) ||
              item.a.toLowerCase().includes(q)
          )
        : items;

      return {
        ...cat,
        title: meta.title,
        description: meta.description,
        items: filteredItems,
      };
    }).filter((cat) => !query.trim() || cat.items.length > 0);
  }, [faqData, query, t]);

  return (
    <HelpPageLayout title={t.help.faq.title} intro={t.help.faq.intro}>
      <div className="help-search">
        <span className="help-search__icon">
          <Search size={18} strokeWidth={2.5} />
        </span>
        <input
          type="search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder={t.help.faq.searchPlaceholder}
          aria-label={t.help.faq.searchPlaceholder}
        />
      </div>

      <div className="help-faq-list">
        {categories.length === 0 ? (
          <p className="help-empty">{t.help.faq.noResults}</p>
        ) : (
          categories.map((cat) => {
            const Icon = ICONS[cat.icon];
            const isOpen = openId === cat.id;

            return (
              <div
                key={cat.id}
                className={`help-faq-card ${isOpen ? "help-faq-card--open" : ""}`}
              >
                <button
                  type="button"
                  className="help-faq-card__head"
                  onClick={() => setOpenId(isOpen ? null : cat.id)}
                  aria-expanded={isOpen}
                >
                  <span className="help-faq-card__icon">
                    <Icon size={20} strokeWidth={2.2} />
                  </span>
                  <span className="help-faq-card__text">
                    <h3>{cat.title}</h3>
                    <p>{cat.description}</p>
                  </span>
                  <ChevronDown
                    size={22}
                    className="help-faq-card__chevron"
                    strokeWidth={2.5}
                  />
                </button>

                {isOpen && cat.items.length > 0 ? (
                  <div className="help-faq-card__body">
                    {cat.items.map((item) => (
                      <div key={item.q} className="help-faq-item">
                        <h4>{item.q}</h4>
                        <p>{item.a}</p>
                      </div>
                    ))}
                  </div>
                ) : null}
              </div>
            );
          })
        )}
      </div>
    </HelpPageLayout>
  );
}

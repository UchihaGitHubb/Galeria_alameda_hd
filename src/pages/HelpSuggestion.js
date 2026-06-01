import { useState } from "react";
import { ChevronDown, Mail } from "lucide-react";

import HelpPageLayout from "../components/HelpPageLayout";
import { useLanguage } from "../context/LanguageContext";

const MAX_CHARS = 500;

export default function HelpSuggestion() {
  const { t } = useLanguage();

  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const categoryOptions = [
    { value: "", label: t.help.suggestion.categoryPlaceholder },
    { value: "experience", label: t.help.suggestion.catExperience },
    { value: "routes", label: t.help.suggestion.catRoutes },
    { value: "design", label: t.help.suggestion.catDesign },
    { value: "other", label: t.help.suggestion.catOther },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!category || !description.trim()) {
      return;
    }

    const payload = {
      type: "suggestion",
      category,
      description: description.trim(),
      email: email.trim() || null,
    };

    const stored = JSON.parse(localStorage.getItem("ga_reports") || "[]");
    stored.push({ ...payload, createdAt: new Date().toISOString() });
    localStorage.setItem("ga_reports", JSON.stringify(stored));

    setSubmitted(true);
    setCategory("");
    setDescription("");
    setEmail("");
  };

  const canSubmit = category && description.trim().length > 0;

  return (
    <HelpPageLayout
      title={t.help.suggestion.title}
      intro={t.help.suggestion.intro}
      centeredTitle
    >
      <form className="help-form" onSubmit={handleSubmit}>
        <div className="help-field">
          <label htmlFor="suggest-cat">{t.help.suggestion.categoryLabel}</label>
          <div className="help-select-wrap">
            <select
              id="suggest-cat"
              className="help-select"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              required
            >
              {categoryOptions.map((opt) => (
                <option key={opt.value} value={opt.value} disabled={!opt.value}>
                  {opt.label}
                </option>
              ))}
            </select>
            <ChevronDown size={20} />
          </div>
        </div>

        <div className="help-field">
          <label htmlFor="suggest-desc">{t.help.suggestion.descLabel}</label>
          <textarea
            id="suggest-desc"
            className="help-textarea"
            placeholder={t.help.suggestion.descPlaceholder}
            value={description}
            maxLength={MAX_CHARS}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
          <div className="help-textarea-footer">
            {description.length}/{MAX_CHARS}
          </div>
        </div>

        <div className="help-field">
          <label htmlFor="suggest-email">{t.help.suggestion.emailLabel}</label>
          <div className="help-input-wrap">
            <Mail size={18} />
            <input
              id="suggest-email"
              type="email"
              className="help-input"
              placeholder={t.help.suggestion.emailPlaceholder}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
        </div>

        <div className="help-submit-wrap">
          <button
            type="submit"
            className="help-submit-btn"
            disabled={!canSubmit}
          >
            {t.help.suggestion.submit}
          </button>
        </div>

        {submitted ? (
          <p className="help-toast" role="status">
            {t.help.suggestion.success}
          </p>
        ) : null}
      </form>
    </HelpPageLayout>
  );
}

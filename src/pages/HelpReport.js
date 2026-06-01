import { useState, useRef } from "react";
import { ChevronDown, Mail, ImagePlus } from "lucide-react";

import HelpPageLayout from "../components/HelpPageLayout";
import { useLanguage } from "../context/LanguageContext";

const MAX_CHARS = 500;
const MAX_FILE_SIZE = 5 * 1024 * 1024;

export default function HelpReport() {
  const { t } = useLanguage();
  const fileRef = useRef(null);

  const [issueType, setIssueType] = useState("");
  const [description, setDescription] = useState("");
  const [email, setEmail] = useState("");
  const [screenshot, setScreenshot] = useState(null);
  const [screenshotName, setScreenshotName] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const issueOptions = [
    { value: "", label: t.help.report.issuePlaceholder },
    { value: "app", label: t.help.report.issueApp },
    { value: "map", label: t.help.report.issueMap },
    { value: "account", label: t.help.report.issueAccount },
    { value: "other", label: t.help.report.issueOther },
  ];

  const handleFile = (e) => {
    const file = e.target.files?.[0];
    if (!file) return;

    if (!file.type.match(/^image\/(jpeg|jpg|png)$/i)) {
      alert(t.help.report.fileTypeError);
      return;
    }

    if (file.size > MAX_FILE_SIZE) {
      alert(t.help.report.fileSizeError);
      return;
    }

    const reader = new FileReader();
    reader.onload = () => {
      setScreenshot(reader.result);
      setScreenshotName(file.name);
    };
    reader.readAsDataURL(file);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!issueType || !description.trim() || !email.trim()) {
      return;
    }

    const payload = {
      type: "problem",
      issueType,
      description: description.trim(),
      email: email.trim(),
      screenshot: screenshotName || null,
    };

    const stored = JSON.parse(localStorage.getItem("ga_reports") || "[]");
    stored.push({ ...payload, createdAt: new Date().toISOString() });
    localStorage.setItem("ga_reports", JSON.stringify(stored));

    setSubmitted(true);
    setIssueType("");
    setDescription("");
    setEmail("");
    setScreenshot(null);
    setScreenshotName("");
    if (fileRef.current) fileRef.current.value = "";
  };

  const canSubmit =
    issueType && description.trim().length > 0 && email.trim().includes("@");

  return (
    <HelpPageLayout
      title={t.help.report.title}
      intro={t.help.report.intro}
      centeredTitle
    >
      <form className="help-form" onSubmit={handleSubmit}>
        <div className="help-field">
          <label htmlFor="issue-type">{t.help.report.issueLabel}</label>
          <div className="help-select-wrap">
            <select
              id="issue-type"
              className="help-select"
              value={issueType}
              onChange={(e) => setIssueType(e.target.value)}
              required
            >
              {issueOptions.map((opt) => (
                <option key={opt.value} value={opt.value} disabled={!opt.value}>
                  {opt.label}
                </option>
              ))}
            </select>
            <ChevronDown size={20} />
          </div>
        </div>

        <div className="help-field">
          <label htmlFor="issue-desc">{t.help.report.descLabel}</label>
          <textarea
            id="issue-desc"
            className="help-textarea"
            placeholder={t.help.report.descPlaceholder}
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
          <label>{t.help.report.uploadLabel}</label>
          <label className="help-upload">
            <input
              ref={fileRef}
              type="file"
              accept="image/jpeg,image/png,image/jpg"
              onChange={handleFile}
            />
            {screenshot ? (
              <img
                src={screenshot}
                alt=""
                className="help-upload__preview"
              />
            ) : (
              <span>{t.help.report.uploadHint}</span>
            )}
            {screenshotName ? (
              <span style={{ fontSize: 12 }}>{screenshotName}</span>
            ) : null}
            {!screenshot ? <ImagePlus size={22} /> : null}
          </label>
        </div>

        <div className="help-field">
          <label htmlFor="issue-email">{t.help.report.emailLabel}</label>
          <div className="help-input-wrap">
            <Mail size={18} />
            <input
              id="issue-email"
              type="email"
              className="help-input"
              placeholder={t.help.report.emailPlaceholder}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
        </div>

        <div className="help-submit-wrap">
          <button
            type="submit"
            className="help-submit-btn"
            disabled={!canSubmit}
          >
            {t.help.report.submit}
          </button>
        </div>

        {submitted ? (
          <p className="help-toast" role="status">
            {t.help.report.success}
          </p>
        ) : null}
      </form>
    </HelpPageLayout>
  );
}

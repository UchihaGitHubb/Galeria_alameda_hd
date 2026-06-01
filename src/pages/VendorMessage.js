import { useMemo, useState } from "react";
import { useParams } from "react-router-dom";

import { vendors } from "../data/vendors";
import VendorSubpageLayout from "../components/VendorSubpageLayout";
import { useLanguage } from "../context/LanguageContext";
import {
  addVendorComment,
  getVendorComments,
} from "../helper/vendorComments";

const MAX_CHARS = 400;

function formatCommentDate(iso, language) {
  try {
    return new Intl.DateTimeFormat(language === "en" ? "en-US" : "es-CO", {
      dateStyle: "medium",
      timeStyle: "short",
    }).format(new Date(iso));
  } catch {
    return "";
  }
}

export default function VendorMessage() {
  const { id } = useParams();
  const { t, language } = useLanguage();

  const vendor = vendors.find((v) => v.id === Number(id));
  const copy = t.vendor.message;

  const [author, setAuthor] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [comments, setComments] = useState(() =>
    vendor ? getVendorComments(vendor.id) : []
  );

  const canSubmit = message.trim().length > 0;

  const displayAuthor = useMemo(() => {
    return (name) => name || copy.anonymous;
  }, [copy.anonymous]);

  if (!vendor) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!canSubmit) return;

    addVendorComment({
      vendorId: vendor.id,
      author: author.trim() || copy.anonymous,
      message: message.trim(),
    });

    setComments(getVendorComments(vendor.id));
    setMessage("");
    setSubmitted(true);
  };

  return (
    <VendorSubpageLayout
      vendor={vendor}
      title={copy.title}
      intro={copy.intro}
      backTo={`/vendor/${vendor.id}`}
    >
      <form className="vendor-actions-form" onSubmit={handleSubmit}>
        <div className="vendor-actions-field">
          <label htmlFor="vendor-msg-author">{copy.nameLabel}</label>
          <input
            id="vendor-msg-author"
            type="text"
            className="vendor-actions-input"
            placeholder={copy.namePlaceholder}
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            maxLength={60}
          />
        </div>

        <div className="vendor-actions-field">
          <label htmlFor="vendor-msg-body">{copy.messageLabel}</label>
          <textarea
            id="vendor-msg-body"
            className="vendor-actions-textarea"
            placeholder={copy.messagePlaceholder}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            maxLength={MAX_CHARS}
            required
          />
          <div className="vendor-actions-textarea-footer">
            {message.length}/{MAX_CHARS}
          </div>
        </div>

        <div className="vendor-actions-submit-wrap">
          <button
            type="submit"
            className="vendor-actions-submit"
            disabled={!canSubmit}
          >
            {copy.submit}
          </button>
        </div>

        {submitted ? (
          <p className="vendor-actions-toast" role="status">
            {copy.success}
          </p>
        ) : null}
      </form>

      <h3 className="vendor-actions-section-title">{copy.recentTitle}</h3>

      {comments.length === 0 ? (
        <p className="vendor-actions-empty">{copy.empty}</p>
      ) : (
        <div className="vendor-actions-comments">
          {comments.map((item) => (
            <article key={item.id} className="vendor-actions-comment">
              <div className="vendor-actions-comment__head">
                <p className="vendor-actions-comment__author">
                  {displayAuthor(item.author)}
                </p>
                <time
                  className="vendor-actions-comment__date"
                  dateTime={item.createdAt}
                >
                  {formatCommentDate(item.createdAt, language)}
                </time>
              </div>
              <p>{item.message}</p>
            </article>
          ))}
        </div>
      )}
    </VendorSubpageLayout>
  );
}

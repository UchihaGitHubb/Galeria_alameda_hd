import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Copy, MessageCircle, Share2, Store } from "lucide-react";

import { vendors } from "../data/vendors";
import { CONTACT } from "../data/contactInfo";
import VendorSubpageLayout from "../components/VendorSubpageLayout";
import { useLanguage } from "../context/LanguageContext";
import { formatMessage } from "../helper/vendor";
import {
  copyVendorShareUrl,
  getVendorShareUrl,
  nativeShareVendor,
  openWhatsAppShare,
} from "../helper/vendorShare";

export default function VendorShare() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { t } = useLanguage();

  const vendor = vendors.find((v) => v.id === Number(id));
  const copy = t.vendor.sharePage;

  const [copied, setCopied] = useState(false);
  const [shareError, setShareError] = useState(false);

  if (!vendor) return null;

  const shareUrl = getVendorShareUrl(vendor.id);
  const shareText = formatMessage(copy.shareText, {
    name: vendor.name,
    business: vendor.business,
  });

  const handleCopy = async () => {
    try {
      await copyVendorShareUrl(vendor.id);
      setCopied(true);
      setShareError(false);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      setShareError(true);
    }
  };

  const handleWhatsApp = () => {
    openWhatsAppShare({
      phone: CONTACT.whatsapp.phone,
      text: `${shareText}\n${shareUrl}`,
    });
  };

  const handleNativeShare = async () => {
    if (!navigator.share) {
      await handleCopy();
      return;
    }

    try {
      await nativeShareVendor({
        title: vendor.name,
        text: shareText,
        url: shareUrl,
      });
      setShareError(false);
    } catch (err) {
      if (err?.name === "AbortError") return;
      setShareError(true);
    }
  };

  const options = [
    {
      key: "copy",
      icon: Copy,
      title: copied ? copy.copied : copy.copy,
      desc: copy.copyDesc,
      action: handleCopy,
    },
    {
      key: "whatsapp",
      icon: MessageCircle,
      title: copy.whatsapp,
      desc: copy.whatsappDesc,
      action: handleWhatsApp,
    },
    {
      key: "native",
      icon: Share2,
      title: copy.nativeShare,
      desc: copy.nativeShareDesc,
      action: handleNativeShare,
    },
    {
      key: "open",
      icon: Store,
      title: copy.openVendor,
      desc: copy.openVendorDesc,
      action: () => navigate(`/vendor/${vendor.id}`),
    },
  ];

  return (
    <VendorSubpageLayout
      vendor={vendor}
      title={copy.title}
      intro={copy.intro}
      backTo={`/vendor/${vendor.id}`}
    >
      <div className="vendor-actions-link-box">
        <label>{copy.linkLabel}</label>
        <p>{shareUrl}</p>
      </div>

      <div className="vendor-actions-share-list">
        {options.map((option) => (
          <button
            key={option.key}
            type="button"
            className="vendor-actions-share-card"
            onClick={option.action}
          >
            <span className="vendor-actions-share-card__icon">
              <option.icon size={20} strokeWidth={2.2} />
            </span>
            <span>
              <h3>{option.title}</h3>
              <p>{option.desc}</p>
            </span>
          </button>
        ))}
      </div>

      {shareError ? (
        <p className="vendor-actions-toast" role="alert">
          {copy.shareError}
        </p>
      ) : null}
    </VendorSubpageLayout>
  );
}

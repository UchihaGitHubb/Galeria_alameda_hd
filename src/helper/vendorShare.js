import { SITE_URL } from "../data/appConfig";

export function getVendorShareUrl(vendorId) {
  const base = SITE_URL.replace(/\/$/, "");
  return `${base}/vendor/${vendorId}`;
}
export async function copyVendorShareUrl(vendorId) {
  const url = getVendorShareUrl(vendorId);
  if (navigator.clipboard?.writeText) {
    await navigator.clipboard.writeText(url);
    return url;
  }

  const textarea = document.createElement("textarea");
  textarea.value = url;
  textarea.setAttribute("readonly", "");
  textarea.style.position = "absolute";
  textarea.style.left = "-9999px";
  document.body.appendChild(textarea);
  textarea.select();
  document.execCommand("copy");
  document.body.removeChild(textarea);
  return url;
}

export function openWhatsAppShare({ phone, text }) {
  const url = `https://wa.me/${phone}?text=${encodeURIComponent(text)}`;
  window.open(url, "_blank", "noopener,noreferrer");
}

export async function nativeShareVendor({ title, text, url }) {
  if (!navigator.share) {
    return false;
  }

  await navigator.share({ title, text, url });
  return true;
}

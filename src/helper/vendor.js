import donAvatar from "../assets/vendors/don-avatar.png";
import donaAvatar from "../assets/vendors/dona-avatar.png";

export function getVendorPortrait(vendor) {
  if (!vendor) return donaAvatar;
  return vendor.gender === "don" ? donAvatar : donaAvatar;
}

export function formatMessage(template, vars = {}) {
  return Object.entries(vars).reduce(
    (text, [key, value]) =>
      text.replace(new RegExp(`\\{${key}\\}`, "g"), String(value)),
    template
  );
}

export function getVendorDescription(vendor, language) {
  if (!vendor) return "";
  if (language === "en" && vendor.descriptionEn) return vendor.descriptionEn;
  return vendor.description;
}

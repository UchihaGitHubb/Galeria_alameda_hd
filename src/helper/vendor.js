import donAvatar from "../assets/vendors/don-avatar.png";
import donaAvatar from "../assets/vendors/dona-avatar.png";

export function getVendorPortrait(vendor) {
  if (!vendor) return donaAvatar;
  return vendor.gender === "don" ? donAvatar : donaAvatar;
}

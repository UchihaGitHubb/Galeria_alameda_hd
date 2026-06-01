const STORAGE_KEY = "ga_vendor_comments";

function readAll() {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY) || "[]");
  } catch {
    return [];
  }
}

function writeAll(items) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
}

export function getVendorComments(vendorId) {
  const id = Number(vendorId);
  return readAll()
    .filter((item) => item.vendorId === id)
    .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
}

export function addVendorComment({ vendorId, author, message }) {
  const entry = {
    id: Date.now(),
    vendorId: Number(vendorId),
    author: author.trim(),
    message: message.trim(),
    createdAt: new Date().toISOString(),
  };

  const items = readAll();
  items.push(entry);
  writeAll(items);
  return entry;
}

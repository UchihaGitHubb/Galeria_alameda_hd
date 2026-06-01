import sharp from "sharp";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, "..");

const BLACK_THRESHOLD = 55;

async function removeBlackToAlpha(inputPath) {
  const { data, info } = await sharp(inputPath)
    .ensureAlpha()
    .raw()
    .toBuffer({ resolveWithObject: true });

  const pixels = new Uint8Array(data);

  for (let i = 0; i < pixels.length; i += 4) {
    const r = pixels[i];
    const g = pixels[i + 1];
    const b = pixels[i + 2];

    if (r <= BLACK_THRESHOLD && g <= BLACK_THRESHOLD && b <= BLACK_THRESHOLD) {
      pixels[i + 3] = 0;
    }
  }

  return sharp(pixels, {
    raw: {
      width: info.width,
      height: info.height,
      channels: 4,
    },
  });
}

async function toDisplay(inputPath, background, suffix, { trim = false } = {}) {
  const baseName = inputPath.replace(/\.png$/i, "");
  let pipeline = await removeBlackToAlpha(inputPath);

  if (trim) {
    pipeline = pipeline.trim({ threshold: 12 });
  }

  const displayPath = `${baseName}.${suffix}.png`;

  await pipeline
    .flatten({ background })
    .png({ compressionLevel: 6, effort: 8 })
    .toFile(displayPath);

  console.log(`Created: ${displayPath}`);
}

const darkBg = { r: 27, g: 27, b: 27 };

const jobs = [
  {
    file: path.join(root, "src/assets/zones/mapa-zonas.png"),
    light: { r: 254, g: 249, b: 240 },
    dark: darkBg,
  },
  {
    file: path.join(root, "src/assets/routes/mapa-rutas.png"),
    light: { r: 255, g: 248, b: 240 },
    dark: darkBg,
  },
  {
    file: path.join(root, "src/assets/routes/ruta-cards-scroll.png"),
    light: { r: 255, g: 248, b: 240 },
    dark: darkBg,
    trim: true,
  },
];

for (const job of jobs) {
  await toDisplay(job.file, job.light, "display", { trim: job.trim });
  await toDisplay(job.file, job.dark, "display-dark", { trim: job.trim });
}

import sharp from "sharp";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const targets = process.argv.slice(2).length
  ? process.argv.slice(2)
  : [
      path.join(__dirname, "../src/assets/zones/mapa-zonas.png"),
      path.join(__dirname, "../src/assets/routes/mapa-rutas.png"),
      path.join(__dirname, "../src/assets/routes/ruta-cards-scroll.png"),
    ];

const BLACK_THRESHOLD = 55;

async function removeBlackBackground(filePath) {
  const { data, info } = await sharp(filePath)
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

  const outputPath = filePath.replace(/\.png$/i, ".transparent.png");

  await sharp(pixels, {
    raw: {
      width: info.width,
      height: info.height,
      channels: 4,
    },
  })
    .png()
    .toFile(outputPath);

  console.log(`Created: ${outputPath}`);
}

for (const mapPath of targets) {
  await removeBlackBackground(mapPath);
}

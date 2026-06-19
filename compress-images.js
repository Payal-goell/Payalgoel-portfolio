import sharp from "sharp";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function compressImages() {
  const assetsDir = path.join(__dirname, "src", "assets");

  // Compress profile.png
  const profilePath = path.join(assetsDir, "profile.png");
  const backupPath = path.join(assetsDir, "profile.png.bak");

  if (fs.existsSync(profilePath)) {
    // Create backup
    fs.copyFileSync(profilePath, backupPath);

    console.log("Compressing profile.png...");
    const stats = fs.statSync(profilePath);
    const originalSize = (stats.size / 1024 / 1024).toFixed(2);

    // Compress with aggressive settings
    await sharp(profilePath)
      .resize(800, 800, {
        fit: "cover",
        position: "center",
      })
      .png({ quality: 80, compressionLevel: 9 })
      .toFile(profilePath + ".temp");

    // Replace original with compressed
    fs.renameSync(profilePath + ".temp", profilePath);

    const newStats = fs.statSync(profilePath);
    const newSize = (newStats.size / 1024 / 1024).toFixed(2);
    const reduction = (((stats.size - newStats.size) / stats.size) * 100).toFixed(1);

    console.log(`✓ Compressed profile.png`);
    console.log(`  Original: ${originalSize} MB`);
    console.log(`  Compressed: ${newSize} MB`);
    console.log(`  Reduction: ${reduction}%`);
  }
}

compressImages().catch(console.error);

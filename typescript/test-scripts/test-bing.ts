/**
 * Smoke test: downloads a few cat images from Bing.
 * Run with: npx tsc && node dist/test-bing.js
 */

import { Bing } from "../src/bing.js";

async function main() {
  const bing = new Bing({
    query: "cats",
    limit: 3,
    outputDir: "./test-output",
    adult: "moderate",
    verbose: true,
  });

  console.log("Starting Bing image download test...\n");
  await bing.run();

  console.log("\n=== Results ===");
  console.log(`Images downloaded: ${bing.images.length}`);
  console.log(`Skipped (existing): ${bing.skipped}`);
  console.log(`Errors: ${bing.errors.length}`);
  console.log(`No results found: ${bing.noResultsFound}`);

  for (const img of bing.images) {
    console.log(`  - ${img.path} (${img.sizeBytes} bytes, ${img.mimeType})`);
  }

  if (bing.errors.length > 0) {
    console.log("\nErrors:");
    for (const e of bing.errors) {
      console.log(`  - ${e.url}: ${e.error.message}`);
    }
  }
}

main().catch(console.error);

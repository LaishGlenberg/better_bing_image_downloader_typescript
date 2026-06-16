/**
 * better-bing-image-downloader — TypeScript port
 *
 * Usage:
 *   import { Bing } from "better-bing-image-downloader";
 *   const bing = new Bing({ query: "cats", limit: 5, outputDir: "./cats" });
 *   await bing.run();
 *   console.log(`Downloaded ${bing.images.length} images`);
 */

export { Bing } from "./bing.js";
export type { BingOptions } from "./bing.js";

export type { ImageResult, Result } from "./types.js";

export {
  ImageSaveError,
  NetworkError,
  InvalidImageError,
  DuplicateImageError,
  WriteError,
} from "./errors.js";

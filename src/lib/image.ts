/** Resolves Next.js static image imports (object) or URL strings (SVG). */
export function imageSrc(src: string | { src: string }): string {
  return typeof src === "string" ? src : src.src;
}

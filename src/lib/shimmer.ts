/**
 * Lightweight blur-up placeholder for next/image.
 *
 * Produces a base64-encoded SVG with a soft muted gradient that renders while
 * the real image loads, giving a smooth "blur-up" reveal instead of an abrupt
 * pop-in. Works on both server (SSR) and client.
 */
const shimmer = (w: number, h: number) => `
<svg width="${w}" height="${h}" viewBox="0 0 ${w} ${h}" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="g" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#1f2230" />
      <stop offset="50%" stop-color="#2a2e40" />
      <stop offset="100%" stop-color="#1f2230" />
    </linearGradient>
  </defs>
  <rect width="${w}" height="${h}" fill="url(#g)" />
</svg>`;

const toBase64 = (str: string) =>
  typeof window === "undefined"
    ? Buffer.from(str).toString("base64")
    : window.btoa(str);

export const shimmerDataURL = (w = 16, h = 10) =>
  `data:image/svg+xml;base64,${toBase64(shimmer(w, h))}`;

import { publicPath } from "@/lib/public-path";

// SITE_URL is the origin; NEXT_PUBLIC_BASE_PATH identifies the project directory.
export const siteUrl = new URL(process.env.SITE_URL || "http://localhost:3000");

if (!["http:", "https:"].includes(siteUrl.protocol) || siteUrl.username || siteUrl.password) {
  throw new Error("SITE_URL must be an HTTP(S) origin without credentials.");
}

siteUrl.pathname = "/";
siteUrl.search = "";
siteUrl.hash = "";

export function absoluteSiteUrl(path: string) {
  return new URL(publicPath(path), siteUrl).href;
}

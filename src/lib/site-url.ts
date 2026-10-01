// Set SITE_URL to the public origin before building the deployed site.
export const siteUrl = new URL(process.env.SITE_URL || "http://localhost:3000");

if (!["http:", "https:"].includes(siteUrl.protocol) || siteUrl.username || siteUrl.password) {
  throw new Error("SITE_URL must be an HTTP(S) origin without credentials.");
}

siteUrl.pathname = "/";
siteUrl.search = "";
siteUrl.hash = "";

import { sanityClient } from "sanity:client";
import { defaultHome, defaultSettings } from "./defaults";
import type { Home, SiteSettings } from "./types";

export const isSanityConfigured = Boolean(
  import.meta.env.PUBLIC_SANITY_PROJECT_ID,
);

async function fetchOr<T>(query: string, fallback: T): Promise<T> {
  if (!isSanityConfigured) return fallback;
  const doc = await sanityClient.fetch<T | null>(query);
  return doc ?? fallback;
}

export const getHome = () => fetchOr<Home>(`*[_id == "home"][0]`, defaultHome);

export const getSettings = () =>
  fetchOr<SiteSettings>(`*[_id == "siteSettings"][0]`, defaultSettings);

// Populates the Sanity dataset with the default content in src/lib/defaults.ts.
// Run with: pnpm seed   (requires `pnpm dlx sanity login` first)
// Only creates documents that don't exist yet, so it never overwrites edits.
import { getCliClient } from "sanity/cli";
import { defaultHome, defaultSettings } from "../src/lib/defaults";

const client = getCliClient({ apiVersion: "2025-01-01" });

// Array items need stable _keys for the Studio editor.
const withKeys = (value: unknown): unknown => {
  if (Array.isArray(value))
    return value.map((item, i) =>
      item && typeof item === "object" && !Array.isArray(item)
        ? { _key: `k${i}`, ...(withKeys(item) as object) }
        : item,
    );
  if (value && typeof value === "object")
    return Object.fromEntries(
      Object.entries(value).map(([k, v]) => [k, withKeys(v)]),
    );
  return value;
};

await client
  .transaction()
  .createIfNotExists({ _id: "home", _type: "home", ...(withKeys(defaultHome) as object) })
  .createIfNotExists({
    _id: "siteSettings",
    _type: "siteSettings",
    ...(withKeys(defaultSettings) as object),
  })
  .commit();

console.log("Seeded home and siteSettings.");

import { home } from "./home";
import { link } from "./link";
import { siteSettings } from "./siteSettings";

export const schemaTypes = [home, siteSettings, link];

export const singletonTypes = new Set(["home", "siteSettings"]);

import { createImageUrlBuilder } from "@sanity/image-url";
import { sanityClient } from "sanity:client";
import type { SanityImage } from "./types";

const builder = createImageUrlBuilder(sanityClient);

export const urlFor = (source: SanityImage) => builder.image(source).auto("format");

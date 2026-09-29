import type { PortableTextBlock } from "@portabletext/types";

export type Link = { label: string; href: string };

type Section = { hidden?: boolean; heading: string };

export type SanityImage = {
  asset: { _ref: string };
  alt?: string;
  hotspot?: unknown;
  crop?: unknown;
};

export type Home = {
  seo?: { title?: string; description?: string };
  hero: {
    eyebrow?: string;
    headline: string;
    subheadline?: string;
    primaryCta?: Link;
    secondaryCta?: Link;
    image?: SanityImage;
  };
  features?: Section & { items?: { title: string; body?: string }[] };
  steps?: Section & { items?: { title: string; body?: string }[] };
  manifesto?: Section & { body?: PortableTextBlock[]; signature?: string };
  artists?: Section & { body?: string; bullets?: string[]; cta?: Link };
  faq?: Section & { items?: { question: string; answer?: string }[] };
  finalCta?: Section & { body?: string; cta?: Link };
};

export type SiteSettings = {
  siteName: string;
  appUrl?: string;
  contactEmail?: string;
  navLinks?: Link[];
  footerLinks?: Link[];
};

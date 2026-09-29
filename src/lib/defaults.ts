import type { PortableTextBlock } from "@portabletext/types";
import type { Home, SiteSettings } from "./types";

// Shown until a Sanity project is connected, and used by `pnpm seed`
// to populate the dataset with a starting point.

const APP_URL = "https://app.side0.com";

let key = 0;
const paragraph = (text: string, strong = false): PortableTextBlock => ({
  _type: "block",
  _key: `p${key++}`,
  style: "normal",
  markDefs: [],
  children: [
    { _type: "span", _key: `s${key++}`, text, marks: strong ? ["strong"] : [] },
  ],
});

export const defaultSettings: SiteSettings = {
  siteName: "Side0",
  appUrl: APP_URL,
  contactEmail: "hello@side0.com",
  navLinks: [
    { label: "Features", href: "#features" },
    { label: "How it works", href: "#how-it-works" },
    { label: "For artists", href: "#artists" },
    { label: "FAQ", href: "#faq" },
  ],
  footerLinks: [
    { label: "Privacy Policy", href: `${APP_URL}/privacy` },
    { label: "Terms of Service", href: `${APP_URL}/terms-and-conditions` },
    { label: "Guidelines", href: `${APP_URL}/community-guidelines` },
    { label: "Contact", href: "mailto:hello@side0.com" },
  ],
};

export const defaultHome: Home = {
  seo: {
    title: "Side0 — music discovery before the algorithm",
    description:
      "Discover independent artists and local scenes — no algorithms, just music nearby.",
  },
  hero: {
    eyebrow: "No algorithms. Just music nearby.",
    headline: "Find the band playing down the street.",
    subheadline:
      "Side0 is a level playing field for independent artists to share their music and connect with new listeners — without all the added nonsense.",
    primaryCta: { label: "Start listening", href: APP_URL },
    secondaryCta: {
      label: "I make music",
      href: `${APP_URL}/login?register=true`,
    },
  },
  features: {
    heading: "Discovery, the way it used to feel",
    items: [
      {
        title: "No algorithm",
        body: "Nothing deciding what you'd probably like. No trending carousel, no paying your way onto the main feed.",
      },
      {
        title: "Local scenes",
        body: "Tap Nearby and hear artists from your city first. Your next favorite band might live two blocks over.",
      },
      {
        title: "Short clips",
        body: "Flip through quick song clips and follow what grabs you. Filter by genre when you know what you're in the mood for.",
      },
      {
        title: "Looking for gigs",
        body: "Artists can flag that they're booking shows, so venues and promoters can find local talent fast.",
      },
    ],
  },
  steps: {
    heading: "How it works",
    items: [
      { title: "Open the feed", body: "No account needed to start listening." },
      {
        title: "Go nearby",
        body: "Share your location to hear your local scene.",
      },
      {
        title: "Follow the jams",
        body: "Dig into an artist's profile, clips, and links.",
      },
    ],
  },
  manifesto: {
    heading: "Another music platform?",
    body: [
      paragraph("That's a fair question."),
      paragraph(
        "Streaming services are great at helping us revisit what we already enjoy. But somewhere along the way, discovering something completely new got dragged below the depths of recommendation engines, trending content, and algorithms deciding what deserves our attention.",
      ),
      paragraph(
        "There's no algorithm here trying to feed you what it thinks you'd like to hear. No recommendation engine. No popularity contest.",
      ),
      paragraph(
        "Just let the jams speak for themselves. That's the main idea.",
        true,
      ),
    ],
    signature: "— Alex",
  },
  artists: {
    heading: "For artists",
    body: "You shouldn't have to sell your soul to get somebody to hear your music.",
    bullets: [
      "Upload a clip in minutes — trim it right in the browser",
      "Show up for listeners in your city",
      "Let venues know you're looking for gigs",
      "Free, and every artist gets the same shot",
    ],
    cta: {
      label: "Create your profile",
      href: `${APP_URL}/login?register=true`,
    },
  },
  faq: {
    heading: "Questions",
    items: [
      {
        question: "Is Side0 free?",
        answer: "Yes — for listeners and artists.",
      },
      {
        question: "How is the feed ordered if there's no algorithm?",
        answer:
          "Simply. Nearby artists and your genre filters shape what you see — not engagement scores or who paid for placement.",
      },
      {
        question: "Do I need an account to listen?",
        answer:
          "No. You only need one to create an artist profile and upload clips.",
      },
    ],
  },
  finalCta: {
    heading: "Go hear something new.",
    body: "Your local scene is already on it.",
    cta: { label: "Open Side0", href: APP_URL },
  },
};

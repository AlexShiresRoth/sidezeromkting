import { HomeIcon } from "@sanity/icons/Home";
import { defineArrayMember, defineField, defineType } from "sanity";

const heading = (name = "heading") =>
  defineField({ name, type: "string", validation: (r) => r.required() });

const section = (
  name: string,
  title: string,
  fields: ReturnType<typeof defineField>[],
) =>
  defineField({
    name,
    title,
    type: "object",
    group: name,
    options: { collapsible: false },
    fields: [
      defineField({
        name: "hidden",
        title: "Hide this section",
        type: "boolean",
        initialValue: false,
      }),
      ...fields,
    ],
  });

export const home = defineType({
  name: "home",
  title: "Home page",
  type: "document",
  icon: HomeIcon,
  groups: [
    { name: "hero", title: "Hero", default: true },
    { name: "features", title: "Features" },
    { name: "steps", title: "How it works" },
    { name: "manifesto", title: "Manifesto" },
    { name: "artists", title: "For artists" },
    { name: "faq", title: "FAQ" },
    { name: "finalCta", title: "Closing CTA" },
    { name: "seo", title: "SEO" },
  ],
  fields: [
    defineField({
      name: "seo",
      title: "SEO",
      type: "object",
      group: "seo",
      fields: [
        defineField({ name: "title", type: "string" }),
        defineField({ name: "description", type: "text", rows: 3 }),
      ],
    }),
    defineField({
      name: "hero",
      title: "Hero",
      type: "object",
      group: "hero",
      options: { collapsible: false },
      fields: [
        defineField({
          name: "eyebrow",
          type: "string",
          description: "Small amber line above the headline",
        }),
        heading("headline"),
        defineField({ name: "subheadline", type: "text", rows: 3 }),
        defineField({ name: "primaryCta", title: "Primary button", type: "link" }),
        defineField({ name: "secondaryCta", title: "Secondary link", type: "link" }),
        defineField({
          name: "image",
          type: "image",
          description: "Optional app screenshot. Without one, the spinning record is shown.",
          options: { hotspot: true },
          fields: [defineField({ name: "alt", title: "Alt text", type: "string" })],
        }),
      ],
    }),
    section("features", "Features", [
      heading(),
      defineField({
        name: "items",
        type: "array",
        of: [
          defineArrayMember({
            type: "object",
            name: "feature",
            fields: [
              defineField({ name: "title", type: "string", validation: (r) => r.required() }),
              defineField({ name: "body", type: "text", rows: 3 }),
            ],
          }),
        ],
      }),
    ]),
    section("steps", "How it works", [
      heading(),
      defineField({
        name: "items",
        type: "array",
        of: [
          defineArrayMember({
            type: "object",
            name: "step",
            fields: [
              defineField({ name: "title", type: "string", validation: (r) => r.required() }),
              defineField({ name: "body", type: "text", rows: 3 }),
            ],
          }),
        ],
      }),
    ]),
    section("manifesto", "Manifesto", [
      heading(),
      defineField({
        name: "body",
        type: "array",
        of: [defineArrayMember({ type: "block" })],
      }),
      defineField({ name: "signature", type: "string" }),
    ]),
    section("artists", "For artists", [
      heading(),
      defineField({ name: "body", type: "text", rows: 3 }),
      defineField({
        name: "bullets",
        type: "array",
        of: [defineArrayMember({ type: "string" })],
      }),
      defineField({ name: "cta", title: "Button", type: "link" }),
    ]),
    section("faq", "FAQ", [
      heading(),
      defineField({
        name: "items",
        type: "array",
        of: [
          defineArrayMember({
            type: "object",
            name: "faqItem",
            fields: [
              defineField({ name: "question", type: "string", validation: (r) => r.required() }),
              defineField({ name: "answer", type: "text", rows: 4 }),
            ],
            preview: { select: { title: "question" } },
          }),
        ],
      }),
    ]),
    section("finalCta", "Closing CTA", [
      heading(),
      defineField({ name: "body", type: "text", rows: 2 }),
      defineField({ name: "cta", title: "Button", type: "link" }),
    ]),
  ],
  preview: { prepare: () => ({ title: "Home page" }) },
});

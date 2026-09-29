import { CogIcon } from "@sanity/icons/Cog";
import { defineArrayMember, defineField, defineType } from "sanity";

export const siteSettings = defineType({
  name: "siteSettings",
  title: "Site settings",
  type: "document",
  icon: CogIcon,
  fields: [
    defineField({ name: "siteName", type: "string", validation: (r) => r.required() }),
    defineField({
      name: "appUrl",
      title: "App URL",
      type: "url",
      description: "Where the \"Open Side0\" button in the nav goes",
    }),
    defineField({ name: "contactEmail", type: "string" }),
    defineField({
      name: "navLinks",
      title: "Navigation links",
      type: "array",
      of: [defineArrayMember({ type: "link" })],
    }),
    defineField({
      name: "footerLinks",
      type: "array",
      of: [defineArrayMember({ type: "link" })],
    }),
  ],
  preview: { prepare: () => ({ title: "Site settings" }) },
});

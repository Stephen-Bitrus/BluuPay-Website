import { defineArrayMember, defineField, defineType } from "sanity";

const feeRow = defineArrayMember({
  type: "object",
  name: "feeRow",
  fields: [
    defineField({ name: "channel", type: "string", validation: (rule) => rule.required() }),
    defineField({ name: "fee", type: "string", validation: (rule) => rule.required() }),
    defineField({ name: "note", type: "string" }),
  ],
  preview: { select: { title: "channel", subtitle: "fee" } },
});

export const feature = defineType({
  name: "feature",
  title: "Feature",
  type: "document",
  fields: [
    defineField({ name: "title", type: "string", validation: (rule) => rule.required() }),
    defineField({ name: "body", type: "text", rows: 3, validation: (rule) => rule.required() }),
    defineField({
      name: "group",
      type: "string",
      options: { list: ["Sell", "Get paid", "Run the shop", "Grow"] },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "status",
      type: "string",
      options: {
        list: [
          { title: "Live", value: "live" },
          { title: "Coming soon", value: "soon" },
        ],
      },
      validation: (rule) => rule.required(),
    }),
    defineField({ name: "order", type: "number" }),
  ],
  preview: { select: { title: "title", subtitle: "status" } },
});

export const vertical = defineType({
  name: "vertical",
  title: "Vertical",
  type: "document",
  fields: [
    defineField({ name: "name", type: "string", validation: (rule) => rule.required() }),
    defineField({ name: "body", type: "text", rows: 3, validation: (rule) => rule.required() }),
    defineField({ name: "order", type: "number" }),
  ],
});

export const story = defineType({
  name: "story",
  title: "Story",
  type: "document",
  fields: [
    defineField({ name: "quote", type: "text", rows: 3, validation: (rule) => rule.required() }),
    defineField({ name: "name", type: "string", validation: (rule) => rule.required() }),
    defineField({ name: "place", type: "string", validation: (rule) => rule.required() }),
    defineField({ name: "order", type: "number" }),
  ],
});

export const faq = defineType({
  name: "faq",
  title: "FAQ",
  type: "document",
  fields: [
    defineField({ name: "question", type: "string", validation: (rule) => rule.required() }),
    defineField({ name: "answer", type: "text", rows: 4, validation: (rule) => rule.required() }),
    defineField({
      name: "placement",
      type: "string",
      options: {
        list: [
          { title: "General", value: "general" },
          { title: "Pricing", value: "pricing" },
        ],
      },
      validation: (rule) => rule.required(),
    }),
    defineField({ name: "order", type: "number" }),
  ],
});

export const paymentProvider = defineType({
  name: "paymentProvider",
  title: "Payment provider",
  type: "document",
  fields: [
    defineField({ name: "name", type: "string", validation: (rule) => rule.required() }),
    defineField({ name: "settlement", type: "string", validation: (rule) => rule.required() }),
    defineField({ name: "summary", type: "text", rows: 3, validation: (rule) => rule.required() }),
    defineField({ name: "collections", type: "array", of: [feeRow] }),
    defineField({ name: "payouts", type: "array", of: [feeRow] }),
    defineField({ name: "order", type: "number" }),
  ],
});

export const legalPage = defineType({
  name: "legalPage",
  title: "Legal page",
  type: "document",
  fields: [
    defineField({ name: "title", type: "string", validation: (rule) => rule.required() }),
    defineField({ name: "slug", type: "slug", validation: (rule) => rule.required() }),
    defineField({ name: "updated", type: "string" }),
    defineField({ name: "description", type: "text", rows: 2 }),
    defineField({
      name: "body",
      type: "array",
      of: [{ type: "block" }],
    }),
  ],
});

export const schemaTypes = [feature, vertical, story, faq, paymentProvider, legalPage];

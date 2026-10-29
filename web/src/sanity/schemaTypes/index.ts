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

export const lead = defineType({
  name: "lead",
  title: "Lead",
  type: "document",
  fields: [
    defineField({
      name: "kind",
      type: "string",
      options: {
        list: [
          { title: "Demo request", value: "demo" },
          { title: "Agent application", value: "agent" },
        ],
      },
      readOnly: true,
      validation: (rule) => rule.required(),
    }),
    defineField({ name: "name", type: "string", readOnly: true, validation: (rule) => rule.required() }),
    defineField({ name: "business", title: "Business name", type: "string", readOnly: true }),
    defineField({ name: "phone", type: "string", readOnly: true }),
    defineField({ name: "email", type: "string", readOnly: true }),
    defineField({ name: "vertical", title: "Kind of business", type: "string", readOnly: true }),
    defineField({ name: "city", type: "string", readOnly: true }),
    defineField({ name: "note", type: "text", rows: 4, readOnly: true }),
    defineField({ name: "receivedAt", title: "Received", type: "datetime", readOnly: true }),
  ],
  preview: {
    select: { title: "name", subtitle: "business", kind: "kind" },
    prepare({ title, subtitle, kind }) {
      const label = kind === "agent" ? "Agent" : "Demo";
      return { title: title || "Lead", subtitle: [label, subtitle].filter(Boolean).join(" · ") };
    },
  },
});

export const post = defineType({
  name: "post",
  title: "Post",
  type: "document",
  fields: [
    defineField({ name: "title", type: "string", validation: (rule) => rule.required() }),
    defineField({
      name: "slug",
      type: "slug",
      options: { source: "title", maxLength: 80 },
      validation: (rule) => rule.required(),
    }),
    defineField({ name: "excerpt", type: "text", rows: 3, validation: (rule) => rule.required() }),
    defineField({
      name: "publishedAt",
      title: "Published",
      type: "datetime",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "author",
      type: "string",
      initialValue: "BluuPay",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "image",
      title: "Featured image",
      type: "image",
      options: { hotspot: true },
      fields: [
        defineField({
          name: "alt",
          title: "Alt text",
          type: "string",
          validation: (rule) => rule.required(),
        }),
      ],
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "body",
      type: "array",
      of: [
        defineArrayMember({
          type: "block",
          styles: [
            { title: "Normal", value: "normal" },
            { title: "Heading", value: "h2" },
            { title: "Subheading", value: "h3" },
          ],
          lists: [
            { title: "Bullet", value: "bullet" },
            { title: "Numbered", value: "number" },
          ],
          marks: {
            decorators: [
              { title: "Strong", value: "strong" },
              { title: "Emphasis", value: "em" },
            ],
            annotations: [
              {
                name: "link",
                type: "object",
                title: "Link",
                fields: [
                  defineField({
                    name: "href",
                    type: "url",
                    validation: (rule) => rule.uri({ allowRelative: true, scheme: ["http", "https", "mailto"] }),
                  }),
                ],
              },
            ],
          },
        }),
      ],
      validation: (rule) => rule.required().min(1),
    }),
  ],
  orderings: [{ title: "Published", name: "publishedAtDesc", by: [{ field: "publishedAt", direction: "desc" }] }],
  preview: {
    select: { title: "title", subtitle: "publishedAt", media: "image" },
  },
});

export const schemaTypes = [lead, post, feature, vertical, story, faq, paymentProvider, legalPage];

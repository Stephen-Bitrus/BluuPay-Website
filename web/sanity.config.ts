import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { schemaTypes } from "./src/sanity/schemaTypes";

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "placeholder";
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || "production";

export default defineConfig({
  name: "bluupay",
  title: "BluuPay",
  projectId,
  dataset,
  basePath: "/studio",
  plugins: [
    structureTool({
      structure: (S) =>
        S.list()
          .title("Content")
          .items([
            S.listItem()
              .title("Demo requests")
              .child(S.documentList().title("Demo requests").filter('_type == "lead" && kind == "demo"')),
            S.listItem()
              .title("Agent applications")
              .child(S.documentList().title("Agent applications").filter('_type == "lead" && kind == "agent"')),
            S.divider(),
            S.listItem().title("Posts").child(S.documentTypeList("post").title("Posts")),
            S.divider(),
            ...S.documentTypeListItems().filter((item) => !["lead", "post"].includes(item.getId() || "")),
          ]),
    }),
  ],
  schema: { types: schemaTypes },
});

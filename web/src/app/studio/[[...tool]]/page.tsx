"use client";

import { NextStudio } from "next-sanity/studio";
import config from "../../../../sanity.config";

export default function StudioPage() {
  const configured = Boolean(process.env.NEXT_PUBLIC_SANITY_PROJECT_ID);
  if (!configured) {
    return (
      <main className="mx-auto max-w-xl px-4 py-16">
        <h1 className="text-3xl font-semibold">Sanity studio is not connected</h1>
        <p className="mt-4 leading-7">
          Set NEXT_PUBLIC_SANITY_PROJECT_ID and NEXT_PUBLIC_SANITY_DATASET, then open this page again.
          The public site already renders the seeded pages without a project.
        </p>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-white">
      <NextStudio config={config} />
    </main>
  );
}

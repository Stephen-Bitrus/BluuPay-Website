"use client";

import { useEffect, useState, type ReactNode } from "react";

export default function StudioPage() {
  const configured = Boolean(process.env.NEXT_PUBLIC_SANITY_PROJECT_ID);
  const [studio, setStudio] = useState<ReactNode>(null);

  useEffect(() => {
    if (!configured) return;
    let cancelled = false;
    void Promise.all([import("next-sanity/studio"), import("../../../../sanity.config")]).then(
      ([mod, config]) => {
        if (cancelled) return;
        const NextStudio = mod.NextStudio;
        setStudio(<NextStudio config={config.default} />);
      },
    );
    return () => {
      cancelled = true;
    };
  }, [configured]);

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

  return <main className="min-h-screen bg-white">{studio ?? <p className="p-8">Loading studio…</p>}</main>;
}

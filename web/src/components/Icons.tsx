import type { ReactNode, SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;

function Glyph({ children, ...props }: IconProps & { children: ReactNode }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      {children}
    </svg>
  );
}

export function GroupIcon({ group, className = "h-5 w-5" }: { group: string; className?: string }) {
  if (group === "Get paid") {
    return (
      <Glyph className={className}>
        <rect x="3" y="6" width="18" height="12" rx="2" />
        <path d="M3 10h18" />
      </Glyph>
    );
  }
  if (group === "Run the shop") {
    return (
      <Glyph className={className}>
        <path d="M4 10h16l-1 9H5L4 10z" />
        <path d="M8 10V7a4 4 0 0 1 8 0v3" />
      </Glyph>
    );
  }
  if (group === "Grow") {
    return (
      <Glyph className={className}>
        <path d="M4 16l5-5 3 3 7-7" />
        <path d="M14 7h5v5" />
      </Glyph>
    );
  }
  return (
    <Glyph className={className}>
      <path d="M6 7h12l1 13H5L6 7z" />
      <path d="M9 7V6a3 3 0 0 1 6 0v1" />
    </Glyph>
  );
}

export function CheckIcon({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <Glyph className={className}>
      <path d="M5 12.5l4.2 4.2L19 7.5" />
    </Glyph>
  );
}

export function ClockIcon({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <Glyph className={className}>
      <circle cx="12" cy="12" r="8" />
      <path d="M12 8v5l3 2" />
    </Glyph>
  );
}

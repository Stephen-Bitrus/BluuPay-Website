import { LegalDocument } from "@/components/LegalDocument";
import { termsOfService } from "@/content/legal";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta(termsOfService.title, termsOfService.description, termsOfService.path);

export default function TermsPage() {
  return <LegalDocument doc={termsOfService} />;
}

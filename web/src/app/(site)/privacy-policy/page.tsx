import { LegalDocument } from "@/components/LegalDocument";
import { privacyPolicy } from "@/content/legal";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta(privacyPolicy.title, privacyPolicy.description, privacyPolicy.path);

export default function PrivacyPage() {
  return <LegalDocument doc={privacyPolicy} />;
}

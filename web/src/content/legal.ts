export type LegalBlock =
  | { type: "p"; text: string }
  | { type: "h3"; text: string }
  | { type: "ul"; items: string[] };

export type LegalSection = {
  heading: string;
  blocks: LegalBlock[];
};

export type LegalDoc = {
  title: string;
  updated: string;
  path: string;
  description: string;
  sections: LegalSection[];
};

export const privacyPolicy: LegalDoc = {
  title: "Privacy Policy",
  updated: "June 2026",
  path: "/privacy-policy",
  description:
    "How BluuPay collects, uses, shares, and protects personal and business information.",
  sections: [
    {
      heading: "Introduction",
      blocks: [
        {
          type: "p",
          text: "Welcome to BluuPay (“BluuPay”, “we”, “our”, or “us”).",
        },
        {
          type: "p",
          text: "At BluuPay, we are committed to protecting your privacy and ensuring that your personal information is handled responsibly, securely, and transparently. This Privacy Policy explains how we collect, use, disclose, store, and protect information when you access or use our website, mobile applications, products, and services.",
        },
        {
          type: "p",
          text: "By using BluuPay’s services, you agree to the collection and use of information in accordance with this Privacy Policy.",
        },
      ],
    },
    {
      heading: "1. Information We Collect",
      blocks: [
        {
          type: "p",
          text: "We may collect the following categories of information:",
        },
        { type: "h3", text: "Personal Information" },
        {
          type: "p",
          text: "Information that identifies or can reasonably be used to identify you, including:",
        },
        {
          type: "ul",
          items: [
            "Full name",
            "Email address",
            "Phone number",
            "Business name",
            "Business address",
            "Government-issued identification (where required)",
            "Date of birth",
            "Bank account details",
            "Payment information",
          ],
        },
        { type: "h3", text: "Business Information" },
        {
          type: "p",
          text: "To provide our merchant services, we may collect:",
        },
        {
          type: "ul",
          items: [
            "Business registration information",
            "Tax identification information",
            "Business transaction history",
            "Sales records",
            "Inventory records",
            "Merchant profile information",
          ],
        },
        { type: "h3", text: "Transaction Information" },
        {
          type: "p",
          text: "We collect information relating to payments and transactions processed through our platform, including:",
        },
        {
          type: "ul",
          items: [
            "Transaction amounts",
            "Transaction dates and times",
            "Payment methods",
            "Transaction references",
            "Settlement records",
          ],
        },
        { type: "h3", text: "Device and Usage Information" },
        {
          type: "p",
          text: "When you use our platform, we may automatically collect:",
        },
        {
          type: "ul",
          items: [
            "IP address",
            "Device information",
            "Browser type",
            "Operating system",
            "App usage information",
            "Log data",
            "Location data (where permitted)",
          ],
        },
      ],
    },
    {
      heading: "2. How We Use Your Information",
      blocks: [
        { type: "p", text: "We use the information we collect to:" },
        {
          type: "ul",
          items: [
            "Provide and operate our services",
            "Process payments and settlements",
            "Verify user identity",
            "Comply with legal and regulatory obligations",
            "Prevent fraud and unauthorized activity",
            "Improve our products and services",
            "Generate business insights and reports",
            "Provide customer support",
            "Communicate important service updates",
            "Maintain platform security",
          ],
        },
      ],
    },
    {
      heading: "3. Legal Basis for Processing",
      blocks: [
        {
          type: "p",
          text: "Where applicable, we process personal information based on:",
        },
        {
          type: "ul",
          items: [
            "Your consent",
            "Performance of a contract",
            "Compliance with legal obligations",
            "Legitimate business interests",
            "Fraud prevention and security requirements",
          ],
        },
      ],
    },
    {
      heading: "4. Sharing of Information",
      blocks: [
        { type: "p", text: "We do not sell personal information." },
        { type: "p", text: "We may share information with:" },
        { type: "h3", text: "Payment Infrastructure Partners" },
        {
          type: "p",
          text: "To facilitate payment processing and settlements, we may share information with licensed financial institutions and payment service providers.",
        },
        { type: "h3", text: "Service Providers" },
        {
          type: "p",
          text: "We may engage trusted third-party providers for:",
        },
        {
          type: "ul",
          items: [
            "Cloud hosting",
            "Analytics",
            "Customer support",
            "Communication services",
            "Security monitoring",
          ],
        },
        { type: "h3", text: "Regulatory Authorities" },
        {
          type: "p",
          text: "We may disclose information when required by law, court order, regulatory requirement, or government request.",
        },
        { type: "h3", text: "Business Transfers" },
        {
          type: "p",
          text: "In the event of a merger, acquisition, restructuring, or sale of assets, information may be transferred as part of the transaction.",
        },
      ],
    },
    {
      heading: "5. Data Security",
      blocks: [
        {
          type: "p",
          text: "We implement appropriate technical and organizational safeguards designed to protect personal and business information from:",
        },
        {
          type: "ul",
          items: [
            "Unauthorized access",
            "Accidental loss",
            "Misuse",
            "Alteration",
            "Disclosure",
          ],
        },
        {
          type: "p",
          text: "While we strive to protect your information, no method of transmission or storage is completely secure, and we cannot guarantee absolute security.",
        },
      ],
    },
    {
      heading: "6. Data Retention",
      blocks: [
        {
          type: "p",
          text: "We retain information only for as long as necessary to:",
        },
        {
          type: "ul",
          items: [
            "Provide our services",
            "Fulfill contractual obligations",
            "Comply with legal and regulatory requirements",
            "Resolve disputes",
            "Enforce our agreements",
          ],
        },
        {
          type: "p",
          text: "When information is no longer required, it will be securely deleted or anonymized.",
        },
      ],
    },
    {
      heading: "7. Your Rights",
      blocks: [
        {
          type: "p",
          text: "Subject to applicable laws, you may have the right to:",
        },
        {
          type: "ul",
          items: [
            "Access your personal information",
            "Correct inaccurate information",
            "Request deletion of information",
            "Restrict processing",
            "Object to certain processing activities",
            "Withdraw consent where consent is relied upon",
            "Request a copy of your data",
          ],
        },
        {
          type: "p",
          text: "To exercise any of these rights, please contact us using the details provided below.",
        },
      ],
    },
    {
      heading: "8. Cookies and Tracking Technologies",
      blocks: [
        {
          type: "p",
          text: "Our website may use cookies and similar technologies to:",
        },
        {
          type: "ul",
          items: [
            "Improve user experience",
            "Analyze website traffic",
            "Remember preferences",
            "Enhance security",
          ],
        },
        {
          type: "p",
          text: "You may manage cookie preferences through your browser settings.",
        },
      ],
    },
    {
      heading: "9. Third-Party Services",
      blocks: [
        {
          type: "p",
          text: "Our services may contain links to third-party websites, products, or services.",
        },
        {
          type: "p",
          text: "BluuPay is not responsible for the privacy practices or content of third-party services. We encourage users to review the privacy policies of those services before providing any information.",
        },
      ],
    },
    {
      heading: "10. Children’s Privacy",
      blocks: [
        {
          type: "p",
          text: "BluuPay’s services are intended for individuals and businesses that are legally capable of entering into binding agreements.",
        },
        {
          type: "p",
          text: "We do not knowingly collect personal information from children under the age of 18.",
        },
      ],
    },
    {
      heading: "11. International Data Transfers",
      blocks: [
        {
          type: "p",
          text: "Where necessary, your information may be processed or stored in jurisdictions outside your country of residence. In such cases, we take reasonable steps to ensure appropriate safeguards are in place to protect your information.",
        },
      ],
    },
    {
      heading: "12. Changes to This Privacy Policy",
      blocks: [
        {
          type: "p",
          text: "We may update this Privacy Policy from time to time.",
        },
        {
          type: "p",
          text: "When changes are made, we will update the “Last Updated” date and, where appropriate, notify users through our website, application, or other communication channels.",
        },
        {
          type: "p",
          text: "Your continued use of our services after any updates constitutes acceptance of the revised Privacy Policy.",
        },
      ],
    },
    {
      heading: "13. Contact Us",
      blocks: [
        {
          type: "p",
          text: "If you have questions about this Privacy Policy or how your information is handled, please contact us:",
        },
        { type: "p", text: "BluuPay" },
        { type: "p", text: "Email: privacy@bluupay.co" },
        { type: "p", text: "Website: www.bluupay.co" },
      ],
    },
  ],
};

export const termsOfService: LegalDoc = {
  title: "Terms of Service",
  updated: "June 2026",
  path: "/terms-of-service",
  description:
    "The terms that govern access to and use of BluuPay’s website, applications, and services.",
  sections: [
    {
      heading: "1. Introduction",
      blocks: [
        { type: "p", text: "Welcome to BluuPay." },
        {
          type: "p",
          text: "These Terms of Service (“Terms”) govern your access to and use of BluuPay’s website, applications, products, software, and services (collectively, the “Services”).",
        },
        {
          type: "p",
          text: "By accessing or using BluuPay, you agree to be bound by these Terms. If you do not agree with these Terms, you may not access or use our Services.",
        },
        {
          type: "p",
          text: "Throughout these Terms, “BluuPay”, “we”, “our”, and “us” refer to BluuPay, while “you” and “your” refer to the individual or business using our Services.",
        },
      ],
    },
    {
      heading: "2. About BluuPay",
      blocks: [
        {
          type: "p",
          text: "BluuPay provides businesses with tools for payment acceptance, sales tracking, inventory management, reporting, reconciliation, and related business operations.",
        },
        {
          type: "p",
          text: "BluuPay may integrate with licensed payment service providers, financial institutions, and other third-party partners to facilitate certain services.",
        },
      ],
    },
    {
      heading: "3. Eligibility",
      blocks: [
        { type: "p", text: "To use BluuPay, you must:" },
        {
          type: "ul",
          items: [
            "Be at least 18 years old",
            "Have the legal capacity to enter into binding agreements",
            "Provide accurate and complete registration information",
            "Comply with all applicable laws and regulations",
          ],
        },
        {
          type: "p",
          text: "If you are registering on behalf of a business, you represent that you have authority to bind that business to these Terms.",
        },
      ],
    },
    {
      heading: "4. Account Registration",
      blocks: [
        {
          type: "p",
          text: "You may be required to create an account to access certain features.",
        },
        { type: "p", text: "You agree to:" },
        {
          type: "ul",
          items: [
            "Provide accurate information",
            "Keep account information current",
            "Protect your login credentials",
            "Notify us immediately of unauthorized account activity",
          ],
        },
        {
          type: "p",
          text: "You are responsible for all activities conducted through your account.",
        },
      ],
    },
    {
      heading: "5. Verification and Compliance",
      blocks: [
        {
          type: "p",
          text: "To comply with regulatory requirements, BluuPay may request:",
        },
        {
          type: "ul",
          items: [
            "Business registration documents",
            "Identity verification documents",
            "Banking information",
            "Additional compliance information",
          ],
        },
        {
          type: "p",
          text: "We reserve the right to suspend, restrict, or terminate access if required information is not provided or cannot be verified.",
        },
      ],
    },
    {
      heading: "6. Use of Services",
      blocks: [
        {
          type: "p",
          text: "You may use BluuPay only for lawful business purposes.",
        },
        { type: "p", text: "You agree not to:" },
        {
          type: "ul",
          items: [
            "Use the platform for fraudulent activity",
            "Violate any law or regulation",
            "Attempt unauthorized access to our systems",
            "Interfere with the operation of the Services",
            "Upload malicious software or harmful code",
            "Use the platform to facilitate illegal transactions",
          ],
        },
        {
          type: "p",
          text: "We reserve the right to investigate suspected violations.",
        },
      ],
    },
    {
      heading: "7. Payment Processing",
      blocks: [
        {
          type: "p",
          text: "BluuPay may work with licensed payment processors and financial institutions to facilitate transactions.",
        },
        { type: "p", text: "By using our Services, you acknowledge that:" },
        {
          type: "ul",
          items: [
            "Payment processing may be performed by third-party partners",
            "Settlement timelines may vary",
            "Transactions may be reviewed for compliance and fraud prevention purposes",
            "Certain transactions may be delayed, restricted, or declined where required by law or risk controls",
          ],
        },
        {
          type: "p",
          text: "BluuPay does not guarantee uninterrupted payment processing.",
        },
      ],
    },
    {
      heading: "8. Fees",
      blocks: [
        { type: "p", text: "Certain Services may be subject to fees." },
        { type: "p", text: "Applicable fees will be communicated through:" },
        {
          type: "ul",
          items: [
            "Pricing schedules",
            "Service agreements",
            "Product documentation",
            "Platform notifications",
          ],
        },
        {
          type: "p",
          text: "You authorize BluuPay to deduct applicable fees where permitted.",
        },
        {
          type: "p",
          text: "Fees are generally non-refundable unless otherwise required by law.",
        },
      ],
    },
    {
      heading: "9. Merchant Responsibilities",
      blocks: [
        { type: "p", text: "As a merchant, you are responsible for:" },
        {
          type: "ul",
          items: [
            "Maintaining accurate business records",
            "Complying with tax obligations",
            "Ensuring the legality of products and services sold",
            "Resolving disputes with customers",
            "Protecting customer information",
          ],
        },
        {
          type: "p",
          text: "BluuPay is not responsible for the quality, safety, legality, or delivery of goods and services sold by merchants.",
        },
      ],
    },
    {
      heading: "10. Intellectual Property",
      blocks: [
        {
          type: "p",
          text: "All content, trademarks, logos, software, technology, and intellectual property associated with BluuPay remain the property of BluuPay or its licensors.",
        },
        {
          type: "p",
          text: "Nothing in these Terms grants ownership rights to users.",
        },
        { type: "p", text: "You may not:" },
        {
          type: "ul",
          items: [
            "Copy",
            "Modify",
            "Reverse engineer",
            "Distribute",
            "Reproduce",
          ],
        },
        {
          type: "p",
          text: "any part of the Services without written permission.",
        },
      ],
    },
    {
      heading: "11. Data and Privacy",
      blocks: [
        {
          type: "p",
          text: "Your use of BluuPay is subject to our Privacy Policy.",
        },
        {
          type: "p",
          text: "By using the Services, you consent to the collection, use, and processing of information as described in the Privacy Policy.",
        },
      ],
    },
    {
      heading: "12. Service Availability",
      blocks: [
        {
          type: "p",
          text: "We strive to maintain reliable service availability but do not guarantee uninterrupted access.",
        },
        { type: "p", text: "Services may be unavailable due to:" },
        {
          type: "ul",
          items: [
            "Maintenance",
            "Technical issues",
            "Third-party service disruptions",
            "Regulatory requirements",
            "Events beyond our reasonable control",
          ],
        },
        {
          type: "p",
          text: "We are not liable for losses arising from temporary service interruptions.",
        },
      ],
    },
    {
      heading: "13. Suspension and Termination",
      blocks: [
        { type: "p", text: "We may suspend or terminate access to the Services if:" },
        {
          type: "ul",
          items: [
            "You violate these Terms",
            "Fraudulent activity is suspected",
            "Regulatory requirements require action",
            "Risk concerns arise",
            "Your account presents a security threat",
          ],
        },
        { type: "p", text: "You may stop using the Services at any time." },
        {
          type: "p",
          text: "Termination does not remove obligations that arose before termination.",
        },
      ],
    },
    {
      heading: "14. Limitation of Liability",
      blocks: [
        {
          type: "p",
          text: "To the maximum extent permitted by law, BluuPay shall not be liable for:",
        },
        {
          type: "ul",
          items: [
            "Indirect damages",
            "Consequential damages",
            "Loss of profits",
            "Loss of business opportunities",
            "Loss of data",
            "Business interruption",
          ],
        },
        {
          type: "p",
          text: "Our total liability arising from your use of the Services shall not exceed the fees paid by you to BluuPay during the six months preceding the claim.",
        },
      ],
    },
    {
      heading: "15. Indemnification",
      blocks: [
        {
          type: "p",
          text: "You agree to indemnify and hold harmless BluuPay, its officers, employees, partners, and affiliates from claims, losses, damages, liabilities, and expenses arising from:",
        },
        {
          type: "ul",
          items: [
            "Your use of the Services",
            "Violation of these Terms",
            "Violation of applicable laws",
            "Disputes involving your customers",
          ],
        },
      ],
    },
    {
      heading: "16. Third-Party Services",
      blocks: [
        {
          type: "p",
          text: "The Services may integrate with third-party providers.",
        },
        { type: "p", text: "BluuPay does not control and is not responsible for:" },
        {
          type: "ul",
          items: [
            "Third-party websites",
            "Third-party products",
            "Third-party services",
            "Third-party payment infrastructure",
          ],
        },
        {
          type: "p",
          text: "Your use of such services may be governed by separate agreements.",
        },
      ],
    },
    {
      heading: "17. Changes to the Services",
      blocks: [
        {
          type: "p",
          text: "We may modify, improve, suspend, or discontinue any part of the Services at any time.",
        },
        {
          type: "p",
          text: "We reserve the right to update features, pricing, functionality, and service offerings without prior notice where permitted by law.",
        },
      ],
    },
    {
      heading: "18. Changes to These Terms",
      blocks: [
        { type: "p", text: "We may update these Terms from time to time." },
        {
          type: "p",
          text: "Updated versions will be posted on our website or within our applications.",
        },
        {
          type: "p",
          text: "Your continued use of the Services after updates become effective constitutes acceptance of the revised Terms.",
        },
      ],
    },
    {
      heading: "19. Governing Law",
      blocks: [
        {
          type: "p",
          text: "These Terms shall be governed by and construed in accordance with the laws of the Federal Republic of Nigeria.",
        },
        {
          type: "p",
          text: "Any dispute arising under these Terms shall be subject to the jurisdiction of the competent courts of Nigeria.",
        },
      ],
    },
    {
      heading: "20. Contact Information",
      blocks: [
        {
          type: "p",
          text: "If you have questions regarding these Terms, please contact:",
        },
        { type: "p", text: "BluuPay" },
        { type: "p", text: "Email: legal@bluupay.co" },
        { type: "p", text: "Website: www.bluupay.co" },
        {
          type: "p",
          text: "By using BluuPay, you acknowledge that you have read, understood, and agreed to these Terms of Service.",
        },
      ],
    },
  ],
};

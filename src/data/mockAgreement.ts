export type Attention = "high" | "medium" | "low";

export type Clause = {
  id: number;
  title: string;
  category: string;
  attention: Attention;
  summary: string;
  detail: string;
  source: string;
  original: string;
};

export const clauses: Clause[] = [
  {
    id: 1,
    title: "Automatic renewal",
    category: "Payment",
    attention: "high",
    summary: "Your subscription renews automatically unless you cancel before the renewal date.",
    detail: "If you forget to cancel before the current billing period ends, the service can charge you for another period.",
    source: "Section 5.2 — Subscription Renewal",
    original: "Your subscription shall automatically renew for successive billing periods unless cancelled by the User prior to the end of the then-current billing period."
  },
  {
    id: 2,
    title: "Data sharing",
    category: "Privacy",
    attention: "medium",
    summary: "Certain information may be shared with service providers and affiliated partners.",
    detail: "The agreement allows sharing for specified business and service-related purposes. It does not by itself establish that your information is sold.",
    source: "Section 8 — Information Sharing",
    original: "The Company may disclose information to affiliated entities and third-party service providers where reasonably necessary to provide, maintain, or improve the Service."
  },
  {
    id: 3,
    title: "Content usage rights",
    category: "Rights",
    attention: "low",
    summary: "You keep ownership of your content, but give the service certain rights to use it.",
    detail: "The license is described as non-exclusive and related to operating and improving the service.",
    source: "Section 7 — User Content",
    original: "You retain ownership of User Content. You grant the Company a non-exclusive, worldwide, royalty-free license to host, reproduce, and display User Content for operation and improvement of the Service."
  },
  {
    id: 4,
    title: "Dispute resolution",
    category: "Legal",
    attention: "medium",
    summary: "Some disputes may be handled through arbitration rather than a court proceeding.",
    detail: "Review the dispute section for the scope of arbitration, exceptions, and any process requirements.",
    source: "Section 12 — Dispute Resolution",
    original: "Except where prohibited by applicable law, disputes arising from or relating to the Service shall be resolved through binding arbitration in accordance with the procedures described below."
  }
];

export const questions = [
  "Can they share my data?",
  "How do I cancel?",
  "Can they use my photos?",
  "What happens if I break the rules?"
];

export const answers: Record<string, { text: string; source: string }> = {
  "Can they share my data?": {
    text: "Potentially. The agreement allows the company to share certain information with affiliated entities and third-party service providers for specified service-related purposes. The agreement does not explicitly say that your data can be sold.",
    source: "Section 8 — Information Sharing"
  },
  "How do I cancel?": {
    text: "The agreement says you need to cancel before the end of your current billing period to prevent the next automatic renewal. The exact cancellation process may be described in your account settings or subscription page.",
    source: "Section 5.2 — Subscription Renewal"
  },
  "Can they use my photos?": {
    text: "If your photos count as User Content, the agreement grants the company a non-exclusive license to host, reproduce, and display that content for operating and improving the service.",
    source: "Section 7 — User Content"
  },
  "What happens if I break the rules?": {
    text: "The agreement gives the company rights to take action when users violate its rules. Check the termination section for the specific actions and notice requirements that apply.",
    source: "Section 10 — Account Termination"
  }
};
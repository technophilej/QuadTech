export type Source = {
  title: string;
  url: string;
  publisher: string;
};

export type ResourcePost = {
  slug: string;
  title: string;
  description: string;
  image: string;
  date: string;
  readingTime: string;
  tags: string[];
  takeaways?: string[];
  content: string[];
  relatedServiceSlugs?: string[];
  sources: Source[];
};

export const resourcePosts: ResourcePost[] = [
  {
    slug: "small-business-cybersecurity-basics",
    title:
      "Small Business Cybersecurity Basics: The First 5 Controls to Implement",
    description:
      "A practical starter checklist to reduce risk quickly, without buying every security tool on the market.",
    image: "/images/resource-cybersecurity.jpg",
    date: "2025-12-01",
    readingTime: "6 min read",
    tags: ["Cybersecurity", "Best Practices"],
    takeaways: [
      "Turn on MFA for email and admin accounts first.",
      "Standardize patching and endpoint protection to reduce easy wins for attackers.",
      "Limit admin access and remove stale accounts/permissions.",
      "Backups must be isolated, and restores should be tested regularly.",
    ],
    content: [
      "Most breaches don't start with sophisticated hacking. They start with weak passwords, unpatched systems, and phishing. The goal isn't perfection; it's reducing risk fast with controls that actually move the needle.",
      "Start with multi-factor authentication (MFA) everywhere it's supported, especially on email accounts. Then standardize device updates and patching so security fixes aren't optional.",
      "Next, protect endpoints (laptops/desktops) with modern antivirus/EDR, restrict admin access, and train your team on phishing and suspicious attachments.",
      "Finally, make sure you have backups that are isolated from your main environment. A ransomware incident is survivable when you can restore quickly.",
    ],
    relatedServiceSlugs: [
      "security-assessments",
      "cybersecurity-training",
      "compliance-security",
    ],
    sources: [
      {
        title: "CIS Controls v8",
        url: "https://www.cisecurity.org/controls",
        publisher: "Center for Internet Security",
      },
      {
        title: "Small Business Cybersecurity Corner",
        url: "https://www.cisa.gov/small-business",
        publisher: "CISA",
      },
      {
        title: "2024 Data Breach Investigations Report",
        url: "https://www.verizon.com/business/resources/reports/dbir/",
        publisher: "Verizon",
      },
    ],
  },
  {
    slug: "m365-migration-playbook",
    title:
      "Microsoft 365 Migration Playbook: How to Avoid Downtime and Data Loss",
    description:
      "What to plan before migrating email and files, and how to keep your team productive during the cutover.",
    image: "/images/resource-m365.jpg",
    date: "2025-11-20",
    readingTime: "7 min read",
    tags: ["Microsoft 365", "Email"],
    takeaways: [
      "Inventory mailboxes, aliases, shared mailboxes, and DNS records before you touch anything.",
      "Prefer staged migrations and validate authentication + mail flow early.",
      "Plan DNS cutover with reduced TTL and a controlled change window.",
      "Post-cutover: enforce MFA, audit forwarding rules, and confirm backups.",
    ],
    content: [
      "A smooth Microsoft 365 migration starts with the inventory: mailboxes, aliases, shared mailboxes, and DNS records. If you don't map these up front, surprises happen during cutover.",
      "Plan a staged migration when possible. Validate authentication, test mail flow, and confirm mobile/desktop clients before moving everyone at once.",
      "DNS changes are often the biggest source of downtime. Document current records, reduce TTL values ahead of time, and make the cutover in a controlled window.",
      "After migration, enforce MFA, review mailbox forwarding rules, and ensure backups are in place for M365 data. Migration is a great time to improve security posture.",
    ],
    relatedServiceSlugs: [
      "email-domain-migration",
      "managed-it-services",
      "it-consulting-vcio",
    ],
    sources: [
      {
        title: "Microsoft 365 Migration Guide",
        url: "https://learn.microsoft.com/en-us/exchange/mailbox-migration/mailbox-migration",
        publisher: "Microsoft Learn",
      },
      {
        title: "Exchange Online Best Practices",
        url: "https://learn.microsoft.com/en-us/microsoft-365/enterprise/best-practices-for-using-office-365-on-a-slow-network",
        publisher: "Microsoft",
      },
    ],
  },
  {
    slug: "backup-and-disaster-recovery-rto-rpo",
    title:
      "Backup and Disaster Recovery Explained: RTO, RPO, and What Your Business Actually Needs",
    description:
      "A plain English guide to recovery planning so you can choose backups that match your risk and budget.",
    image: "/images/resource-backup.jpg",
    date: "2025-10-28",
    readingTime: "5 min read",
    tags: ["Backups", "Business Continuity"],
    takeaways: [
      "Define RPO (acceptable data loss) and RTO (acceptable downtime) before choosing tools.",
      "Backups protect data; disaster recovery restores operations.",
      "Testing restores is the difference between a plan and a false sense of security.",
      "Align your recovery plan with your budget and real business impact.",
    ],
    content: [
      "Backup is about protecting data. Disaster recovery is about restoring operations. Both matter, but businesses often buy tools without defining recovery goals.",
      "RPO (Recovery Point Objective) is how much data you can afford to lose. RTO (Recovery Time Objective) is how long you can afford to be offline.",
      "If your team can tolerate a few hours of downtime, your solution can be simpler and cheaper. If you can't, you need faster restores, redundancy, and regular testing.",
      "The biggest mistake is not testing restores. A backup that can't be restored quickly isn't a backup; it's a false sense of security.",
    ],
    relatedServiceSlugs: [
      "backup-disaster-recovery",
      "cloud-solutions",
      "managed-it-services",
    ],
    sources: [
      {
        title: "Business Continuity Planning Suite",
        url: "https://www.ready.gov/business-continuity-planning-suite",
        publisher: "Ready.gov (FEMA)",
      },
      {
        title: "NIST Cybersecurity Framework",
        url: "https://www.nist.gov/cyberframework",
        publisher: "NIST",
      },
    ],
  },
  {
    slug: "phishing-awareness-training-guide",
    title: "Phishing Awareness: How to Train Your Team to Spot Scams",
    description:
      "A guide to building a security-aware culture that catches phishing attempts before they cause damage.",
    image: "/images/resource-phishing.jpg",
    date: "2025-10-15",
    readingTime: "5 min read",
    tags: ["Cybersecurity", "Training"],
    takeaways: [
      "Training should build habits: verify senders, hover links, and question urgency.",
      "Use phishing simulations with immediate coaching and a no-blame culture.",
      "Make reporting suspicious email fast and easy.",
      "Pair training with MFA and endpoint protections for real risk reduction.",
    ],
    content: [
      "Phishing remains the #1 attack vector for businesses of all sizes. According to the FBI's IC3 report, business email compromise (BEC) alone caused over $2.9 billion in losses in 2023.",
      "Effective training isn't about scaring employees; it's about building habits. Teach your team to verify sender addresses, hover over links before clicking, and question urgent requests for money or credentials.",
      "Simulated phishing campaigns help, but only when paired with immediate feedback. When someone clicks a test link, show them exactly what they missed and how to spot it next time.",
      "Create a no-blame reporting culture. If employees fear punishment, they won't report real incidents. Make it easy to flag suspicious emails and reward vigilance.",
    ],
    relatedServiceSlugs: [
      "cybersecurity-training",
      "security-assessments",
      "managed-it-services",
    ],
    sources: [
      {
        title: "2023 Internet Crime Report",
        url: "https://www.ic3.gov/Media/PDF/AnnualReport/2023_IC3Report.pdf",
        publisher: "FBI IC3",
      },
      {
        title: "Phishing Activity Trends Report",
        url: "https://apwg.org/trendsreports/",
        publisher: "Anti-Phishing Working Group",
      },
      {
        title: "Security Awareness Training Guidelines",
        url: "https://www.sans.org/security-awareness-training/",
        publisher: "SANS Institute",
      },
    ],
  },
  {
    slug: "zero-trust-security-explained",
    title: "Zero Trust Security: What It Actually Means for Small Businesses",
    description:
      "Cut through the buzzwords and learn how Zero Trust principles can protect your business without enterprise budgets.",
    image: "/images/resource-zero-trust.jpg",
    date: "2025-09-28",
    readingTime: "6 min read",
    tags: ["Cybersecurity", "Zero Trust"],
    takeaways: [
      "Zero Trust is a strategy: verify identity, device, and access every time.",
      "Start with MFA + conditional access and remove unnecessary permissions.",
      "Segment access so one compromised device can’t reach everything.",
      "Adopt it iteratively with small, measurable improvements instead of one big project.",
    ],
    content: [
      "Zero Trust isn't a product you buy; it's a security philosophy. The core principle: never trust, always verify. Every user, device, and connection must prove it belongs before accessing resources.",
      "For small businesses, Zero Trust starts with identity. Implement MFA everywhere, use conditional access policies, and verify devices before granting access to sensitive data.",
      "Network segmentation is another key principle. Don't let a compromised laptop access everything. Limit what each user and device can reach based on their actual needs.",
      "Start small: enforce MFA, audit who has access to what, and remove unnecessary permissions. You don't need a million-dollar budget to adopt Zero Trust principles.",
    ],
    relatedServiceSlugs: [
      "security-assessments",
      "compliance-security",
      "managed-it-services",
    ],
    sources: [
      {
        title: "Zero Trust Maturity Model",
        url: "https://www.cisa.gov/zero-trust-maturity-model",
        publisher: "CISA",
      },
      {
        title: "NIST SP 800-207: Zero Trust Architecture",
        url: "https://csrc.nist.gov/publications/detail/sp/800-207/final",
        publisher: "NIST",
      },
      {
        title: "Zero Trust Adoption Report",
        url: "https://www.microsoft.com/en-us/security/business/zero-trust",
        publisher: "Microsoft Security",
      },
    ],
  },
  {
    slug: "cloud-security-best-practices",
    title:
      "Cloud Security Best Practices: Protecting Your Data in AWS, Azure, and Google Cloud",
    description:
      "Essential security configurations every business should implement when moving to the cloud.",
    image: "/images/resource-cloud.jpg",
    date: "2025-09-10",
    readingTime: "7 min read",
    tags: ["Cloud", "Security"],
    takeaways: [
      "Most cloud breaches come from misconfigurations. Lock down access and defaults.",
      "Use least privilege and audit IAM regularly.",
      "Turn on logging/monitoring from day one.",
      "Encrypt data in transit/at rest and keep your own backup strategy.",
    ],
    content: [
      "The cloud can be secure by default, but only if you configure it correctly. Misconfigurations are the leading cause of cloud breaches, not sophisticated attacks.",
      "Start with identity and access management (IAM). Use the principle of least privilege: give users only the permissions they need. Audit access regularly and remove unused accounts.",
      "Enable logging and monitoring from day one. CloudTrail (AWS), Azure Monitor, and Google Cloud Logging help you detect suspicious activity before it becomes a breach.",
      "Encrypt data at rest and in transit. Most cloud providers offer this by default, but verify it's enabled. Use customer-managed keys for sensitive workloads.",
      "Finally, backup your cloud data. Cloud providers protect against infrastructure failures, but not against accidental deletion or ransomware. You need your own backup strategy.",
    ],
    relatedServiceSlugs: [
      "cloud-solutions",
      "security-assessments",
      "backup-disaster-recovery",
    ],
    sources: [
      {
        title: "AWS Well-Architected Framework - Security Pillar",
        url: "https://docs.aws.amazon.com/wellarchitected/latest/security-pillar/welcome.html",
        publisher: "Amazon Web Services",
      },
      {
        title: "Azure Security Best Practices",
        url: "https://learn.microsoft.com/en-us/azure/security/fundamentals/best-practices-and-patterns",
        publisher: "Microsoft Azure",
      },
      {
        title: "Google Cloud Security Best Practices",
        url: "https://cloud.google.com/security/best-practices",
        publisher: "Google Cloud",
      },
    ],
  },
  {
    slug: "password-management-business-guide",
    title:
      "Password Management for Business: Why Your Team Needs a Password Manager",
    description:
      "How to eliminate password reuse, reduce help desk tickets, and improve security with enterprise password management.",
    image: "/images/resource-password.jpg",
    date: "2025-08-25",
    readingTime: "5 min read",
    tags: ["Security", "Productivity"],
    takeaways: [
      "Password reuse is a business risk and a help desk time sink.",
      "Choose a manager with secure sharing, admin controls, and audit logs.",
      "Roll out in phases and make adoption easy with imports and training.",
      "Pair password managers with MFA and access reviews.",
    ],
    content: [
      "The average employee manages 100+ passwords. Without a password manager, they'll reuse passwords, write them down, or use weak ones. All of these create security risks.",
      "A business password manager solves this by generating strong, unique passwords and storing them securely. Employees only need to remember one master password.",
      "Look for features like secure sharing (for team accounts), admin controls, breach monitoring, and SSO integration. Most enterprise plans cost $5-8 per user per month.",
      "Adoption is the hardest part. Start with IT and leadership, then roll out department by department. Provide training and make it easy to import existing passwords.",
    ],
    relatedServiceSlugs: [
      "managed-it-services",
      "cybersecurity-training",
      "security-assessments",
    ],
    sources: [
      {
        title: "NIST Digital Identity Guidelines",
        url: "https://pages.nist.gov/800-63-3/sp800-63b.html",
        publisher: "NIST",
      },
      {
        title: "Password Security Report",
        url: "https://www.lastpass.com/resources/ebook/psychology-of-passwords-2022",
        publisher: "LastPass",
      },
    ],
  },
  {
    slug: "ransomware-prevention-response",
    title: "Ransomware Prevention and Response: A Business Survival Guide",
    description:
      "How to prevent ransomware attacks and what to do if your business gets hit.",
    image: "/images/resource-ransomware.jpg",
    date: "2025-08-10",
    readingTime: "8 min read",
    tags: ["Cybersecurity", "Ransomware"],
    takeaways: [
      "Ransomware resilience is built on MFA, patching, training, and backups.",
      "Segment access so one infection can’t encrypt everything.",
      "Write an incident response plan before you need it.",
      "Test restores and recovery processes regularly.",
    ],
    content: [
      "Ransomware attacks increased 73% in 2023, with the average ransom payment exceeding $1.5 million. Small businesses are increasingly targeted because they often lack security resources.",
      "Prevention starts with the basics: patch systems promptly, use MFA everywhere, train employees on phishing, and maintain offline backups. Most ransomware enters through phishing or unpatched vulnerabilities.",
      "Segment your network so ransomware can't spread easily. If one computer gets infected, it shouldn't be able to encrypt your entire file server.",
      "Have an incident response plan before you need it. Know who to call, what to disconnect, and how to restore from backups. The FBI recommends against paying ransoms because it funds criminals and doesn't guarantee recovery.",
      "If you're hit, isolate affected systems immediately, preserve evidence, and contact law enforcement. Then begin restoration from clean backups.",
    ],
    relatedServiceSlugs: [
      "backup-disaster-recovery",
      "security-assessments",
      "managed-it-services",
    ],
    sources: [
      {
        title: "Stop Ransomware Guide",
        url: "https://www.cisa.gov/stopransomware",
        publisher: "CISA",
      },
      {
        title: "Ransomware: What It Is and How to Prevent It",
        url: "https://www.fbi.gov/how-we-can-help-you/scams-and-safety/common-scams-and-crimes/ransomware",
        publisher: "FBI",
      },
      {
        title: "2024 Ransomware Report",
        url: "https://www.sophos.com/en-us/content/state-of-ransomware",
        publisher: "Sophos",
      },
    ],
  },
];

export function getResourcePost(slug: string) {
  return resourcePosts.find((p) => p.slug === slug);
}

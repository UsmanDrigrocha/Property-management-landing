export const site = {
  name: "Amaze",
  fullName: "Amaze Property Management Solutions Pvt Ltd",
  parent: "ACTION GROUP of Companies",
  tagline: "One-stop solutions for every property management need",
  founded: 2001,
  founder: {
    name: "Subhani Abdul",
    title: "Founder & Managing Director",
    bio: "An Indian Navy veteran and Certified Security Practitioner, Subhani Abdul built Amaze on a simple principle: every service delivered in-house, every standard held to military discipline.",
  },
  contact: {
    address: "4th Floor, High Mark Chambers, Khajaguda X Road, Cyberabad, Hyderabad – 500008",
    phones: ["+91 99085 38137", "+91 91006 94137"],
    email: "info@amazepms.com",
  },
  social: {
    facebook: "#",
    instagram: "#",
    linkedin: "#",
  },
} as const;

export const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Strength", href: "#strength" },
  { label: "Presence", href: "#presence" },
  { label: "Careers", href: "#careers" },
  { label: "Contact", href: "#contact" },
] as const;

export const stats = [
  { value: 15000, suffix: "+", label: "Workforce Professionals" },
  { value: 200, suffix: "+", label: "Valued Clients" },
  { value: 20, suffix: "M+", label: "Sq. Ft. Under Management" },
  { value: new Date().getFullYear() - site.founded, suffix: "+", label: "Years of Excellence" },
] as const;

export const services = [
  {
    title: "Security Services",
    description: "Trained, background-verified personnel with round-the-clock deployment and rapid emergency response.",
    icon: "ShieldCheck",
  },
  {
    title: "House Keeping",
    description: "Meticulous daily upkeep protocols that keep every corner of your property presentation-ready.",
    icon: "Sparkles",
  },
  {
    title: "Technical Services",
    description: "Skilled technicians handling day-to-day facility operations with proactive maintenance schedules.",
    icon: "Wrench",
  },
  {
    title: "Landscaping",
    description: "Horticulture and grounds management that keeps green spaces healthy across every season.",
    icon: "Trees",
  },
  {
    title: "Pest Control",
    description: "Scheduled, compliant pest management programs tailored to residential and commercial sites.",
    icon: "Bug",
  },
  {
    title: "Help Desk Management",
    description: "A single point of contact for residents and tenants, resolving requests with tracked SLAs.",
    icon: "Headset",
  },
  {
    title: "Parking Management",
    description: "Organized access control and space allocation that keeps traffic flow safe and efficient.",
    icon: "SquareParking",
  },
  {
    title: "MEP Services",
    description: "Mechanical, electrical and plumbing operations run by certified engineers and technicians.",
    icon: "Zap",
  },
  {
    title: "STP & WTP",
    description: "Sewage and water treatment plant operations maintained to strict environmental compliance.",
    icon: "Droplets",
  },
  {
    title: "Swimming Pool Maintenance",
    description: "Water quality testing, filtration upkeep and safety checks on a fixed maintenance calendar.",
    icon: "Waves",
  },
  {
    title: "Office Support",
    description: "Front-desk, mailroom and administrative support that keeps workplaces running smoothly.",
    icon: "Building2",
  },
  {
    title: "Deep Cleaning",
    description: "Intensive, scheduled deep-clean programs for high-traffic and specialty areas.",
    icon: "SprayCan",
  },
] as const;

export const whyChooseUs = [
  {
    title: "Fully In-House Teams",
    description: "No subcontracting — every service line is delivered and supervised by our own trained staff.",
    icon: "Users",
  },
  {
    title: "Emergency Backup Staffing",
    description: "Reserve personnel on standby to cover absences instantly, with zero disruption to your site.",
    icon: "ShieldAlert",
  },
  {
    title: "Continuous Training",
    description: "Structured yearly training programs keep every team current on protocol and technique.",
    icon: "GraduationCap",
  },
  {
    title: "Regular Risk Audits",
    description: "Scheduled risk assessments and equipment audits catch issues before they become incidents.",
    icon: "ClipboardCheck",
  },
  {
    title: "Site-Specific SOPs",
    description: "Standard operating procedures built around each property's unique layout and needs.",
    icon: "FileText",
  },
  {
    title: "Cost Optimization",
    description: "Internal audit systems and AMC/vendor negotiation that keep operating costs under control.",
    icon: "TrendingDown",
  },
  {
    title: "Compliance Management",
    description: "EHS, security, and fire-safety compliance audits handled end-to-end, including liaison work.",
    icon: "BadgeCheck",
  },
  {
    title: "Staff Welfare Programs",
    description: "Insurance, bonuses and educational rewards that keep our workforce motivated and loyal.",
    icon: "HeartHandshake",
  },
] as const;

export const presence = [
  "Telangana",
  "Andhra Pradesh",
  "Karnataka",
  "Tamil Nadu",
  "Odisha",
] as const;

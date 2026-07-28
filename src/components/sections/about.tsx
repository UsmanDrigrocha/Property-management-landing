import { Anchor, BadgeCheck, Building2, CalendarDays } from "lucide-react";

import { site } from "@/lib/content";
import { Badge } from "@/components/ui/badge";
import { Reveal } from "@/components/motion/reveal";

const credentials = [
  { icon: Anchor, label: "Indian Navy Veteran" },
  { icon: BadgeCheck, label: "Certified Security Practitioner" },
  { icon: CalendarDays, label: `Founded ${site.founded}` },
  { icon: Building2, label: site.parent },
];

export function About() {
  return (
    <section id="about" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6 sm:px-8">
        <div className="grid items-center gap-16 lg:grid-cols-[0.85fr_1.15fr]">
          <Reveal>
            <div className="relative mx-auto max-w-sm">
              <div className="glass relative aspect-[4/5] w-full overflow-hidden rounded-3xl">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/25 via-transparent to-indigo-500/10" />
                <div className="absolute inset-0 bg-grid opacity-40" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="flex size-28 items-center justify-center rounded-full border border-primary/30 bg-primary/10 text-4xl font-semibold text-primary">
                    SA
                  </span>
                </div>
              </div>
              <div className="glass absolute -bottom-6 -right-6 max-w-[220px] rounded-2xl p-4 shadow-xl">
                <p className="text-sm font-semibold">{site.founder.name}</p>
                <p className="text-xs text-muted-foreground">{site.founder.title}</p>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <Badge>About Us</Badge>
            <h2 className="mt-4 text-balance text-3xl font-semibold tracking-tight sm:text-4xl md:text-5xl">
              Built on discipline. Run with precision.
            </h2>
            <p className="mt-6 leading-relaxed text-muted-foreground">
              {site.founder.bio} That principle still guides {site.fullName} today —
              an integrated property management company delivering security,
              housekeeping, technical and facility operations to residential,
              commercial and institutional clients across India.
            </p>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              From a single site in {site.founded} to safeguarding over 20 million
              square feet today, our growth has been powered by one idea: keep every
              service in-house, and hold it to a standard worth being proud of.
            </p>

            <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4">
              {credentials.map((c) => (
                <div
                  key={c.label}
                  className="glass flex flex-col items-start gap-2 rounded-xl p-3.5"
                >
                  <c.icon className="size-4 text-primary" />
                  <span className="text-xs leading-tight text-foreground/85">{c.label}</span>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

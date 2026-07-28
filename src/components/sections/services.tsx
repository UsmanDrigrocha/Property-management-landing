import { ArrowUpRight } from "lucide-react";

import { services } from "@/lib/content";
import { iconMap } from "@/components/icon-map";
import { Badge } from "@/components/ui/badge";
import { Reveal, RevealGroup, RevealItem } from "@/components/motion/reveal";

export function Services() {
  return (
    <section id="services" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6 sm:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <Badge>Services</Badge>
          <h2 className="mt-4 text-balance text-3xl font-semibold tracking-tight sm:text-4xl md:text-5xl">
            Every discipline, one accountable team
          </h2>
          <p className="mt-4 text-balance text-muted-foreground">
            Twelve integrated service lines, all delivered by our own people — never
            subcontracted, always accountable.
          </p>
        </Reveal>

        <RevealGroup
          className="mt-16 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3"
          stagger={0.06}
        >
          {services.map((service) => {
            const Icon = iconMap[service.icon];
            return (
              <RevealItem key={service.title} className="group relative">
                <div className="relative h-full overflow-hidden rounded-2xl border border-white/10 bg-card/60 p-6 transition-all duration-500 hover:-translate-y-1 hover:border-primary/30 hover:bg-card/90 hover:shadow-[0_20px_50px_-20px_rgba(0,0,0,0.5)]">
                  <div
                    className="pointer-events-none absolute -right-10 -top-10 size-32 rounded-full bg-primary/10 blur-2xl transition-opacity duration-500 opacity-0 group-hover:opacity-100"
                    aria-hidden
                  />
                  <div className="flex items-start justify-between">
                    <span className="flex size-12 items-center justify-center rounded-xl bg-primary/10 text-primary ring-1 ring-primary/20 transition-transform duration-500 group-hover:scale-110">
                      <Icon className="size-[22px]" strokeWidth={1.75} />
                    </span>
                    <ArrowUpRight className="size-4 text-muted-foreground opacity-0 transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:opacity-100" />
                  </div>
                  <h3 className="mt-5 text-lg font-semibold tracking-tight">{service.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {service.description}
                  </p>
                </div>
              </RevealItem>
            );
          })}
        </RevealGroup>
      </div>
    </section>
  );
}

import { MapPin } from "lucide-react";

import { presence, site } from "@/lib/content";
import { Badge } from "@/components/ui/badge";
import { Reveal, RevealGroup, RevealItem } from "@/components/motion/reveal";

export function Presence() {
  return (
    <section id="presence" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6 sm:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <Badge>Presence</Badge>
          <h2 className="mt-4 text-balance text-3xl font-semibold tracking-tight sm:text-4xl md:text-5xl">
            Operating pan-India, rooted in Cyberabad
          </h2>
          <p className="mt-4 text-balance text-muted-foreground">
            Headquartered in Hyderabad, with active operations across five states and
            counting.
          </p>
        </Reveal>

        <div className="mt-16 grid gap-4 lg:grid-cols-[1.1fr_1.4fr]">
          <Reveal className="glass relative flex flex-col justify-between overflow-hidden rounded-3xl p-8">
            <div className="pointer-events-none absolute -bottom-16 -left-16 size-56 rounded-full bg-primary/15 blur-3xl" />
            <div className="relative">
              <span className="flex size-12 items-center justify-center rounded-xl bg-primary/10 text-primary ring-1 ring-primary/20">
                <MapPin className="size-5" strokeWidth={1.75} />
              </span>
              <h3 className="mt-6 text-xl font-semibold tracking-tight">Headquarters</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {site.contact.address}
              </p>
            </div>
            <p className="relative mt-8 text-xs uppercase tracking-widest text-muted-foreground">
              Cyberabad, Telangana
            </p>
          </Reveal>

          <RevealGroup className="grid grid-cols-2 gap-4 sm:grid-cols-3" stagger={0.06}>
            {presence.map((state, i) => (
              <RevealItem
                key={state}
                className="group glass flex flex-col justify-between gap-6 rounded-2xl p-6 transition-colors duration-500 hover:bg-white/10"
              >
                <span className="font-mono text-xs text-muted-foreground">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="text-base font-medium tracking-tight">{state}</span>
              </RevealItem>
            ))}
            <RevealItem className="flex flex-col items-start justify-center gap-2 rounded-2xl border border-dashed border-white/15 p-6 text-muted-foreground">
              <span className="text-sm">Expanding further,</span>
              <span className="text-sm">state by state.</span>
            </RevealItem>
          </RevealGroup>
        </div>
      </div>
    </section>
  );
}

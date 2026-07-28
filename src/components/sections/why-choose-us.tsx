import { whyChooseUs } from "@/lib/content";
import { iconMap } from "@/components/icon-map";
import { Badge } from "@/components/ui/badge";
import { Reveal, RevealGroup, RevealItem } from "@/components/motion/reveal";

export function WhyChooseUs() {
  return (
    <section id="strength" className="relative py-24 sm:py-32">
      <div className="bg-grid pointer-events-none absolute inset-0 mask-fade-x opacity-30" />
      <div className="relative mx-auto max-w-6xl px-6 sm:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <Badge>Our Strength</Badge>
          <h2 className="mt-4 text-balance text-3xl font-semibold tracking-tight sm:text-4xl md:text-5xl">
            Why clients stay with us for decades
          </h2>
          <p className="mt-4 text-balance text-muted-foreground">
            Discipline borrowed from the forces, applied to facility management.
          </p>
        </Reveal>

        <RevealGroup
          className="mt-16 grid grid-cols-1 gap-px overflow-hidden rounded-3xl border border-white/10 bg-white/10 sm:grid-cols-2 lg:grid-cols-4"
          stagger={0.05}
        >
          {whyChooseUs.map((item) => {
            const Icon = iconMap[item.icon];
            return (
              <RevealItem
                key={item.title}
                className="group relative bg-background/95 p-7 transition-colors duration-500 hover:bg-card"
              >
                <span className="flex size-11 items-center justify-center rounded-xl bg-primary/10 text-primary ring-1 ring-primary/20">
                  <Icon className="size-5" strokeWidth={1.75} />
                </span>
                <h3 className="mt-5 text-base font-semibold tracking-tight">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {item.description}
                </p>
              </RevealItem>
            );
          })}
        </RevealGroup>
      </div>
    </section>
  );
}

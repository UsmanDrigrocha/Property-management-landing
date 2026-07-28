import { stats } from "@/lib/content";
import { Counter } from "@/components/motion/counter";
import { RevealGroup, RevealItem } from "@/components/motion/reveal";

export function Stats() {
  return (
    <section className="relative border-y border-white/10 bg-secondary/30">
      <div className="mx-auto max-w-6xl px-6 py-14 sm:px-8">
        <RevealGroup className="grid grid-cols-2 gap-8 lg:grid-cols-4 lg:gap-6" stagger={0.1}>
          {stats.map((stat) => (
            <RevealItem key={stat.label} className="text-center lg:text-left">
              <div className="font-mono text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
                <Counter value={stat.value} suffix={stat.suffix} />
              </div>
              <p className="mt-2 text-sm text-muted-foreground">{stat.label}</p>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}

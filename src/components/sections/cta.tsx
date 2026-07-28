import { ArrowRight, Mail, Phone } from "lucide-react";

import { site } from "@/lib/content";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/motion/reveal";

export function Cta() {
  return (
    <section id="careers" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6 sm:px-8">
        <Reveal>
          <div className="glass relative overflow-hidden rounded-3xl px-8 py-16 text-center sm:px-16">
            <div className="pointer-events-none absolute -top-24 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-primary/25 blur-[100px]" />
            <div className="bg-grid pointer-events-none absolute inset-0 mask-fade-x opacity-30" />

            <div className="relative">
              <h2 className="mx-auto max-w-2xl text-balance text-3xl font-semibold tracking-tight sm:text-4xl md:text-5xl">
                Let&apos;s make your property amaze.
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-balance text-muted-foreground">
                Talk to our team about a tailored, in-house facility management plan for
                your site — residential, commercial or institutional.
              </p>

              <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
                <Button size="lg" asChild>
                  <a href={`mailto:${site.contact.email}`}>
                    Request a Proposal
                    <ArrowRight className="size-4" />
                  </a>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <a href={`tel:${site.contact.phones[0].replace(/\s/g, "")}`}>
                    <Phone className="size-4" />
                    {site.contact.phones[0]}
                  </a>
                </Button>
              </div>

              <div className="mt-8 flex items-center justify-center gap-2 text-sm text-muted-foreground">
                <Mail className="size-4" />
                <a href={`mailto:${site.contact.email}`} className="hover:text-foreground">
                  {site.contact.email}
                </a>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

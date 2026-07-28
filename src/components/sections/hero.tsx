"use client";

import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";

import { site } from "@/lib/content";
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section id="home" className="relative flex min-h-screen items-center overflow-hidden pt-32 pb-20">
      <div className="bg-grid pointer-events-none absolute inset-0 mask-fade-x" />
      <div className="pointer-events-none absolute inset-0 [mask-image:radial-gradient(ellipse_60%_60%_at_50%_0%,black,transparent)]">
        <div className="bg-noise absolute inset-0" />
      </div>

      <motion.div
        aria-hidden
        className="pointer-events-none absolute -top-32 left-1/2 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-primary/25 blur-[120px]"
        animate={{ opacity: [0.5, 0.8, 0.5] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        aria-hidden
        className="pointer-events-none absolute -top-10 right-[8%] h-72 w-72 rounded-full bg-indigo-500/10 blur-[100px]"
        animate={{ y: [0, 24, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="relative mx-auto flex w-full max-w-6xl flex-col items-center px-6 text-center sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="glass mb-8 inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-medium text-foreground/85 sm:text-sm"
        >
          <Sparkles className="size-3.5 text-primary" />
          Pan-India · In-house teams since {site.founded}
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="text-balance text-4xl font-semibold leading-[1.08] tracking-tight sm:text-6xl md:text-7xl"
        >
          Property management,
          <br />
          <span className="gradient-text">engineered to amaze.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="mt-6 max-w-2xl text-balance text-base text-muted-foreground sm:text-lg"
        >
          Security, housekeeping, technical and facility operations — delivered entirely
          in-house by 15,000+ trained professionals, safeguarding 20M+ sq. ft. for 200+
          clients across India.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="mt-10 flex flex-col items-center gap-3 sm:flex-row"
        >
          <Button size="lg" asChild>
            <a href="#contact">
              Get a Quote
              <ArrowRight className="size-4" />
            </a>
          </Button>
          <Button size="lg" variant="glass" asChild>
            <a href="#services">Explore Services</a>
          </Button>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.9, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
          className="flex h-9 w-6 items-start justify-center rounded-full border border-white/15 p-1.5"
        >
          <span className="h-1.5 w-1 rounded-full bg-primary" />
        </motion.div>
      </motion.div>
    </section>
  );
}

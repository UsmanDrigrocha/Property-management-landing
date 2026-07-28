"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import { Menu, ShieldCheck } from "lucide-react";

import { navLinks, site } from "@/lib/content";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetClose, SheetTrigger } from "@/components/ui/sheet";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrolled(latest > 16);
  });

  useEffect(() => {
    if (open) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <motion.header
      initial={{ y: -32, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="fixed inset-x-0 top-0 z-50 flex justify-center px-4 pt-4"
    >
      <div
        className={cn(
          "flex w-full max-w-6xl items-center justify-between rounded-full px-4 py-2.5 transition-all duration-500 sm:px-6",
          scrolled ? "glass shadow-lg shadow-black/20" : "border border-transparent bg-transparent"
        )}
      >
        <a href="#home" className="flex items-center gap-2.5 font-semibold tracking-tight">
          <span className="flex size-9 items-center justify-center rounded-full bg-primary/15 text-primary ring-1 ring-primary/30">
            <ShieldCheck className="size-[18px]" strokeWidth={2.25} />
          </span>
          <span className="text-base">{site.name}</span>
        </a>

        <nav className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="rounded-full px-4 py-2 text-sm text-muted-foreground transition-colors hover:bg-white/5 hover:text-foreground"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden lg:flex">
          <Button size="sm" asChild>
            <a href="#contact">Get a Quote</a>
          </Button>
        </div>

        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="lg:hidden" aria-label="Open menu">
              <Menu className="size-5" />
            </Button>
          </SheetTrigger>
          <SheetContent>
            <span className="flex items-center gap-2.5 font-semibold tracking-tight">
              <span className="flex size-9 items-center justify-center rounded-full bg-primary/15 text-primary ring-1 ring-primary/30">
                <ShieldCheck className="size-[18px]" strokeWidth={2.25} />
              </span>
              {site.name}
            </span>
            <nav className="mt-4 flex flex-col gap-1">
              {navLinks.map((link) => (
                <SheetClose asChild key={link.href}>
                  <a
                    href={link.href}
                    className="rounded-xl px-3 py-3 text-base text-foreground/90 transition-colors hover:bg-white/5"
                  >
                    {link.label}
                  </a>
                </SheetClose>
              ))}
            </nav>
            <SheetClose asChild>
              <Button asChild className="mt-auto w-full">
                <a href="#contact">Get a Quote</a>
              </Button>
            </SheetClose>
          </SheetContent>
        </Sheet>
      </div>
    </motion.header>
  );
}

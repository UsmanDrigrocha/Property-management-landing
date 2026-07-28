import { Mail, MapPin, Phone, ShieldCheck } from "lucide-react";

import { navLinks, presence, site } from "@/lib/content";
import { Separator } from "@/components/ui/separator";
import { FacebookIcon, InstagramIcon, LinkedinIcon } from "@/components/icons/social";

const socials = [
  { icon: FacebookIcon, href: site.social.facebook, label: "Facebook" },
  { icon: InstagramIcon, href: site.social.instagram, label: "Instagram" },
  { icon: LinkedinIcon, href: site.social.linkedin, label: "LinkedIn" },
];

export function Footer() {
  return (
    <footer id="contact" className="relative border-t border-white/10 bg-secondary/40">
      <div className="bg-grid pointer-events-none absolute inset-0 mask-fade-x opacity-40" />
      <div className="relative mx-auto max-w-6xl px-6 py-16 sm:px-8">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_0.8fr_0.8fr_1.2fr]">
          <div>
            <a href="#home" className="flex items-center gap-2.5 font-semibold tracking-tight">
              <span className="flex size-9 items-center justify-center rounded-full bg-primary/15 text-primary ring-1 ring-primary/30">
                <ShieldCheck className="size-[18px]" strokeWidth={2.25} />
              </span>
              <span className="text-base">{site.name}</span>
            </a>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted-foreground">
              {site.fullName}, part of the {site.parent}. In-house property management
              solutions trusted pan-India since {site.founded}.
            </p>
            <div className="mt-6 flex items-center gap-3">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  className="glass flex size-10 items-center justify-center rounded-full text-muted-foreground transition-colors hover:text-primary"
                >
                  <s.icon className="size-4" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-foreground">Menu</h4>
            <ul className="mt-4 space-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-foreground">Presence</h4>
            <ul className="mt-4 space-y-3">
              {presence.map((state) => (
                <li key={state} className="text-sm text-muted-foreground">
                  {state}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-foreground">Contact</h4>
            <ul className="mt-4 space-y-4">
              <li className="flex gap-3 text-sm text-muted-foreground">
                <MapPin className="mt-0.5 size-4 shrink-0 text-primary" />
                <span>{site.contact.address}</span>
              </li>
              {site.contact.phones.map((phone) => (
                <li key={phone} className="flex items-center gap-3 text-sm text-muted-foreground">
                  <Phone className="size-4 shrink-0 text-primary" />
                  <a href={`tel:${phone.replace(/\s/g, "")}`} className="hover:text-foreground">
                    {phone}
                  </a>
                </li>
              ))}
              <li className="flex items-center gap-3 text-sm text-muted-foreground">
                <Mail className="size-4 shrink-0 text-primary" />
                <a href={`mailto:${site.contact.email}`} className="hover:text-foreground">
                  {site.contact.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <Separator className="my-10" />

        <div className="flex flex-col items-center justify-between gap-4 text-xs text-muted-foreground sm:flex-row">
          <p>
            © {new Date().getFullYear()} {site.fullName}. All rights reserved.
          </p>
          <p>Designed &amp; built with care.</p>
        </div>
      </div>
    </footer>
  );
}

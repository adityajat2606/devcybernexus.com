import Link from "next/link";
import { Check, MapPin } from "lucide-react";
import { PageShell } from "@/components/shared/page-shell";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { SITE_CONFIG } from "@/lib/site-config";

const roles = [
  {
    title: "Senior Security Editor",
    location: "Remote (US/EU overlap)",
    type: "Full-time",
    level: "Senior",
    blurb: "Shape coverage across AppSec, cloud, and incident response. Partner with researchers to ship authoritative features.",
  },
  {
    title: "Staff Frontend Engineer",
    location: "Hybrid · New York",
    type: "Full-time",
    level: "Staff",
    blurb: "Own reading surfaces, performance, and accessibility for a publication-scale Next.js experience.",
  },
  {
    title: "Technical Illustrator",
    location: "Contract",
    type: "Contract",
    level: "Mid",
    blurb: "Translate complex architectures into crisp diagrams and hero visuals that match our orange-on-white system.",
  },
];

const benefits = [
  "Remote-first with intentional in-person weeks",
  "Health, dental, and vision for full-time roles",
  "Dedicated learning budget for conferences & labs",
  "Editorial coaching for anyone new to publishing",
];

export default function CareersPage() {
  return (
    <PageShell
      title="Careers"
      description={`Join ${SITE_CONFIG.name} to build a publication-quality home for security writing.`}
      actions={
        <Button asChild className="rounded-full bg-[#FF5C00] text-white hover:bg-[#e65300]">
          <Link href="/contact">Start a conversation</Link>
        </Button>
      }
    >
      <section className="mb-12 rounded-[2rem] border border-neutral-200/90 bg-gradient-to-br from-white via-orange-50/40 to-white p-8 shadow-[0_24px_70px_rgba(0,0,0,0.05)] sm:p-10">
        <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[#FF5C00]">Company</p>
        <h2 className="mt-3 max-w-3xl text-3xl font-semibold tracking-[-0.04em] text-neutral-950 sm:text-4xl">
          Small team, high bar: ship stories that practitioners return to all quarter.
        </h2>
        <p className="mt-5 max-w-2xl text-sm leading-7 text-neutral-600">
          We hire editors, engineers, and operators who care about clarity and craft. If you like orange accents, tight type, and calm interfaces, you will feel at home in our stack and our review culture.
        </p>
      </section>

      <div className="grid gap-8 lg:grid-cols-[1.15fr_0.85fr]">
        <div className="space-y-5">
          {roles.map((role) => (
            <Card key={role.title} className="border-neutral-200/90 bg-white shadow-sm transition hover:border-[#FF5C00]/25">
              <CardContent className="p-6 sm:p-7">
                <div className="flex flex-wrap items-center gap-2">
                  <Badge className="rounded-full bg-neutral-950 text-white hover:bg-neutral-950">{role.level}</Badge>
                  <Badge variant="outline" className="rounded-full border-neutral-300">
                    {role.type}
                  </Badge>
                </div>
                <h3 className="mt-4 text-xl font-semibold text-neutral-950">{role.title}</h3>
                <p className="mt-1 flex items-center gap-1.5 text-sm text-neutral-500">
                  <MapPin className="h-3.5 w-3.5" />
                  {role.location}
                </p>
                <p className="mt-4 text-sm leading-7 text-neutral-600">{role.blurb}</p>
                <Button variant="outline" className="mt-5 rounded-full border-neutral-300" asChild>
                  <Link href="/contact">Discuss this role</Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="h-fit border-neutral-200/90 bg-neutral-950 text-white shadow-[0_24px_70px_rgba(0,0,0,0.12)]">
          <CardContent className="p-7 sm:p-8">
            <p className="text-[11px] font-semibold uppercase tracking-[0.26em] text-white/55">Why join</p>
            <h3 className="mt-3 text-2xl font-semibold tracking-[-0.03em]">{SITE_CONFIG.name}</h3>
            <p className="mt-4 text-sm leading-7 text-white/75">
              We are building a focused editorial product—not a generic social platform. Your work ships to readers who care about depth.
            </p>
            <ul className="mt-6 space-y-3 text-sm text-white/85">
              {benefits.map((benefit) => (
                <li key={benefit} className="flex gap-3">
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#FF5C00]">
                    <Check className="h-3 w-3 text-white" />
                  </span>
                  <span>{benefit}</span>
                </li>
              ))}
            </ul>
            <Button asChild className="mt-8 w-full rounded-full bg-white text-neutral-950 hover:bg-neutral-100">
              <Link href="/articles">Read what we publish</Link>
            </Button>
          </CardContent>
        </Card>
      </div>
    </PageShell>
  );
}

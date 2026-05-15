import Link from "next/link";
import { ArrowRight, BookOpen, LineChart, Shield } from "lucide-react";
import { PageShell } from "@/components/shared/page-shell";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { SITE_CONFIG } from "@/lib/site-config";

const pillars = [
  {
    icon: Shield,
    title: "Signal over noise",
    body: "We prioritize primary sources, reproducible steps, and honest tradeoffs so practitioners can trust what they read.",
  },
  {
    icon: LineChart,
    title: "Built for practitioners",
    body: "Editors and contributors write for people shipping controls, reviewing vendors, and teaching teams—not for clickbait.",
  },
  {
    icon: BookOpen,
    title: "Reading-first layout",
    body: "Typography, spacing, and navigation are tuned for long sessions: fewer boxes, clearer hierarchy, calmer motion.",
  },
];

export default function AboutPage() {
  return (
    <PageShell
      title="About"
      description={`${SITE_CONFIG.name} is an article-led desk for security analysis, explainers, and field notes.`}
      actions={
        <>
          <Button variant="outline" asChild className="rounded-full border-neutral-300">
            <Link href="/articles">Browse articles</Link>
          </Button>
          <Button asChild className="rounded-full bg-[#FF5C00] text-white hover:bg-[#e65300]">
            <Link href="/contact">Contact editorial</Link>
          </Button>
        </>
      }
    >
      <section className="mb-12 overflow-hidden rounded-[2rem] border border-neutral-200/90 bg-gradient-to-br from-orange-50/60 via-white to-white p-8 shadow-[0_28px_80px_rgba(0,0,0,0.06)] sm:p-10 lg:grid lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:gap-10">
        <div>
          <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[#FF5C00]">Company</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-[-0.04em] text-neutral-950 sm:text-4xl">
            A calmer place to publish security thinking that actually gets read.
          </h2>
          <p className="mt-5 max-w-xl text-sm leading-7 text-neutral-600">
            {SITE_CONFIG.name} exists so sharp analysis does not disappear into noisy feeds. We combine editorial standards with a product-grade layout system—orange signal accents, black type, generous white space—so every story feels part of one publication.
          </p>
                  </div>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:mt-0">
          <div className="rounded-2xl border border-neutral-200 bg-white/90 p-5 shadow-sm">
            <p className="text-xs font-medium uppercase tracking-wider text-neutral-500">Focus</p>
            <p className="mt-2 text-2xl font-semibold text-neutral-950">Articles</p>
            <p className="mt-1 text-xs text-neutral-500">Core surface</p>
            <div className="mt-4 h-2 overflow-hidden rounded-full bg-neutral-100">
              <div className="h-full w-[78%] rounded-full bg-[#FF5C00]" />
            </div>
          </div>
          <div className="rounded-2xl border border-neutral-200 bg-neutral-950 p-5 text-white">
            <p className="text-xs font-medium uppercase tracking-wider text-white/60">Cadence</p>
            <p className="mt-2 text-2xl font-semibold">Weekly drops</p>
            <p className="mt-1 text-xs text-white/65">Issues, features, and explainers on a steady rhythm.</p>
          </div>
        </div>
      </section>

      <div className="grid gap-5 md:grid-cols-3">
        {pillars.map((p) => (
          <Card key={p.title} className="border-neutral-200/90 bg-white shadow-sm transition hover:-translate-y-0.5 hover:shadow-md">
            <CardContent className="p-6">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-orange-500/10 text-[#FF5C00]">
                <p.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-neutral-950">{p.title}</h3>
              <p className="mt-2 text-sm leading-7 text-neutral-600">{p.body}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </PageShell>
  );
}

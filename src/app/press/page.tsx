'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Newspaper } from 'lucide-react'
import { PageShell } from '@/components/shared/page-shell'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog'
import { useToast } from '@/components/ui/use-toast'
import { mockPressAssets, mockPressCoverage } from '@/data/mock-data'

export default function PressPage() {
  const { toast } = useToast()
  const [activeAssetId, setActiveAssetId] = useState<string | null>(null)
  const activeAsset = mockPressAssets.find((asset) => asset.id === activeAssetId)

  return (
    <PageShell
      title="Press"
      description="Brand assets, product imagery, and recent coverage—aligned with our orange-on-white editorial system."
    >
      <section className="mb-10 rounded-[2rem] border border-neutral-200/90 bg-gradient-to-br from-orange-50/50 via-white to-white p-8 shadow-sm sm:p-10">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
          <div className="max-w-2xl">
            <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[#FF5C00]">Company</p>
            <h2 className="mt-3 text-2xl font-semibold tracking-[-0.03em] text-neutral-950 sm:text-3xl">
              Media-ready materials with the same sharp geometry as our reader experience.
            </h2>
            <p className="mt-4 text-sm leading-7 text-neutral-600">
              Download logos, wordmarks, and UI captures for coverage. Prefer line-art icons and high-contrast orange sparingly—let white space carry the story.
            </p>
          </div>
          <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-2xl border border-neutral-200 bg-white text-[#FF5C00] shadow-inner">
            <Newspaper className="h-9 w-9" />
          </div>
        </div>
      </section>

      <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
        <Card className="border-neutral-200/90 bg-white shadow-[0_20px_60px_rgba(0,0,0,0.05)]">
          <CardContent className="space-y-5 p-6 sm:p-8">
            <div>
              <h2 className="text-lg font-semibold text-neutral-950">Press kit</h2>
              <p className="mt-2 text-sm leading-7 text-neutral-600">
                Preview assets before download. File types reflect what our newsroom keeps current for partners.
              </p>
            </div>
            <div className="grid gap-3">
              {mockPressAssets.map((asset) => (
                <div
                  key={asset.id}
                  className="rounded-2xl border border-neutral-200/90 bg-neutral-50/60 px-4 py-4 transition hover:border-[#FF5C00]/35"
                >
                  <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                    <div>
                      <p className="text-sm font-semibold text-neutral-950">{asset.title}</p>
                      <p className="mt-1 text-xs leading-relaxed text-neutral-500">{asset.description}</p>
                    </div>
                    <div className="flex flex-wrap items-center gap-2">
                      <Badge variant="secondary" className="rounded-full">
                        {asset.fileType}
                      </Badge>
                      <Button size="sm" variant="outline" className="rounded-full border-neutral-300" onClick={() => setActiveAssetId(asset.id)}>
                        Preview
                      </Button>
                      <Button
                        size="sm"
                        className="rounded-full bg-[#FF5C00] text-white hover:bg-[#e65300]"
                        onClick={() =>
                          toast({
                            title: 'Download started',
                            description: `${asset.title} is downloading.`,
                          })
                        }
                      >
                        Download
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <div className="space-y-4">
          <p className="text-[11px] font-semibold uppercase tracking-[0.26em] text-neutral-500">Coverage</p>
          {mockPressCoverage.map((item) => (
            <Card
              key={item.id}
              className="border-neutral-200/90 bg-white transition hover:-translate-y-0.5 hover:border-[#FF5C00]/25 hover:shadow-md"
            >
              <CardContent className="p-6">
                <div className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#FF5C00]">{item.outlet}</div>
                <p className="mt-3 text-sm font-medium leading-relaxed text-neutral-900">{item.headline}</p>
                <p className="mt-3 text-xs text-neutral-500">{item.date}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      <Dialog open={Boolean(activeAsset)} onOpenChange={() => setActiveAssetId(null)}>
        <DialogContent className="max-w-3xl border-neutral-200">
          <DialogHeader>
            <DialogTitle>{activeAsset?.title}</DialogTitle>
          </DialogHeader>
          {activeAsset?.previewUrl && (
            <div className="relative aspect-video overflow-hidden rounded-2xl border border-neutral-200 bg-neutral-100">
              <Image src={activeAsset.previewUrl} alt={activeAsset.title} fill className="object-cover" />
            </div>
          )}
          <p className="text-sm text-neutral-600">{activeAsset?.description}</p>
          <DialogFooter className="gap-2 sm:gap-0">
            <Button variant="outline" className="rounded-full" onClick={() => setActiveAssetId(null)}>
              Close
            </Button>
            <Button
              className="rounded-full bg-[#FF5C00] text-white hover:bg-[#e65300]"
              onClick={() =>
                toast({
                  title: 'Download started',
                  description: `${activeAsset?.title} is downloading.`,
                })
              }
            >
              Download {activeAsset?.fileType}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </PageShell>
  )
}

'use client'

import { motion } from 'framer-motion'
import { FileText, BookOpen, Clock, Users } from 'lucide-react'

const stats = [
  {
    icon: FileText,
    value: '180+',
    label: 'Published features',
    description: 'Long-form cybersecurity analysis and explainers',
  },
  {
    icon: BookOpen,
    value: '42',
    label: 'Topic lanes',
    description: 'Structured coverage across architecture, AppSec, and ops',
  },
  {
    icon: Clock,
    value: 'Weekly',
    label: 'Release cadence',
    description: 'Editorial drops on a predictable reading rhythm',
  },
  {
    icon: Users,
    value: 'Global',
    label: 'Practitioner audience',
    description: 'Built for builders, buyers, and security leaders',
  },
]

export function StatsSection() {
  return (
    <section className="border-b border-border bg-secondary/30 py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 text-center">
          <h2 className="text-2xl font-bold text-foreground sm:text-3xl">
            Platform in Numbers
          </h2>
          <p className="mt-2 text-muted-foreground">
            Join our thriving community of creators and businesses
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="text-center"
            >
              <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-accent/10">
                <stat.icon className="h-7 w-7 text-accent" />
              </div>
              <div className="text-3xl font-bold text-foreground">{stat.value}</div>
              <div className="mt-1 font-medium text-foreground">{stat.label}</div>
              <div className="mt-1 text-sm text-muted-foreground">{stat.description}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

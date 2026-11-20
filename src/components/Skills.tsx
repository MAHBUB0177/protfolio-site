"use client";

import { motion } from "framer-motion";
import { skillGroups, languages } from "@/data/profile";
import { GlassCard } from "@/components/GlassCard";
import { SectionHeading } from "@/components/SectionHeading";

export function Skills() {
  return (
    <section id="skills" className="relative z-10 section-pad py-20 sm:py-24">
      <div className="container-max">
        <SectionHeading
          eyebrow="Skills"
          title="Tools I use to ship reliable software"
          description="A practical stack centered on JavaScript, React, Next.js, and the systems around production delivery."
        />

        <div className="grid gap-5 md:grid-cols-2">
          {skillGroups.map((group, index) => (
            <motion.div
              key={group.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{
                duration: 0.5,
                delay: index * 0.06,
                ease: [0.22, 1, 0.36, 1],
              }}
              whileHover={{ y: -6 }}
            >
              <GlassCard className="h-full p-6 cursor-pointer">
                <h3 className="font-display text-lg text-ink">{group.title}</h3>
                <div className="mt-4 flex flex-wrap gap-2">
                  {group.items.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-lg border border-border bg-[var(--surface-strong)] px-3 py-1.5 text-sm text-ink-soft"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mt-5"
        >
          <GlassCard className="flex flex-wrap items-center gap-4 p-5 sm:gap-8">
            <p className="text-sm font-medium tracking-[0.14em] text-muted uppercase">
              Languages
            </p>
            {languages.map((lang) => (
              <p key={lang.name} className="text-sm text-ink-soft">
                <span className="font-medium text-ink">{lang.name}</span>
                <span className="mx-2 text-muted">·</span>
                {lang.level}
              </p>
            ))}
          </GlassCard>
        </motion.div>
      </div>
    </section>
  );
}

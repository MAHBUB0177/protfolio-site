"use client";

import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";
import { education } from "@/data/profile";
import { GlassCard } from "@/components/GlassCard";
import { SectionHeading } from "@/components/SectionHeading";

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.3,
      delayChildren: 0.2,
    },
  },
};

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 40,
    scale: 0.96,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  },
};

export function Education() {
  return (
    <section
      id="education"
      className="relative z-10 section-pad py-20 sm:py-24"
    >
      <div className="container-max">
        <SectionHeading
          eyebrow="Education"
          title="Academic foundation in computer science"
          description="A strong CSE background supporting practical engineering across modern web platforms."
        />

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid gap-5 md:grid-cols-2"
        >
          {education.map((item) => (
            <motion.div
              key={item.degree}
              variants={cardVariants}
              whileHover={{ y: -8 }}
            >
              <GlassCard className="h-full p-6 sm:p-7 cursor-pointer">
                <div className="mb-5 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-accent-soft text-accent">
                  <GraduationCap size={20} />
                </div>

                <h3 className="font-display text-xl leading-snug text-ink">
                  {item.degree}
                </h3>

                <p className="mt-3 text-base font-medium text-accent">
                  {item.school}
                </p>

                <p className="mt-2 text-sm text-muted">
                  {item.period} · {item.location}
                </p>

                <p className="mt-5 border-t border-border pt-4 text-sm font-medium text-ink-soft">
                  {item.score}
                </p>
              </GlassCard>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

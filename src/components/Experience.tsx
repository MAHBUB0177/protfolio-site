"use client";

import { motion } from "framer-motion";
import { experience } from "@/data/profile";
import { GlassCard } from "@/components/GlassCard";
import { SectionHeading } from "@/components/SectionHeading";

export function Experience() {
  return (
    <section
      id="experience"
      className="relative z-10 section-pad py-20 sm:py-24"
    >
      <div className="container-max">
        <SectionHeading
          eyebrow="Experience"
          title="Roles where I delivered production software"
          description="From junior engineering to full ownership of frontend and full-stack product delivery."
        />

        <div className="relative space-y-5 before:absolute before:top-3 before:bottom-3 before:left-[1.15rem] before:w-px before:bg-border sm:before:left-[1.35rem]">
          {experience.map((job, index) => (
            <motion.div
              key={`${job.company}-${job.period}`}
              initial={{ opacity: 0, x: -18 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{
                duration: 0.55,
                delay: index * 0.08,
                ease: [0.22, 1, 0.36, 1],
              }}
              whileHover={{ y: -8 }}
              className="relative pl-10 sm:pl-12 cursor-pointer"
            >
              <span className="absolute top-7 left-[0.85rem] h-3 w-3 rounded-full border-2 border-accent bg-bg sm:left-[1.05rem]" />
              <GlassCard strong className="p-6 sm:p-7">
                <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                  <div>
                    <h3 className="font-display text-xl text-ink">
                      {job.role}
                    </h3>
                    <p className="mt-1 text-base text-accent">
                      {job.company}
                      {job.note ? (
                        <span className="text-muted"> · {job.note}</span>
                      ) : null}
                    </p>
                  </div>
                  <div className="text-sm text-muted sm:text-right">
                    <p>{job.period}</p>
                    <p className="mt-1">{job.location}</p>
                  </div>
                </div>
                <ul className="mt-5 space-y-2.5">
                  {job.highlights.map((item) => (
                    <li
                      key={item}
                      className="relative pl-4 text-sm leading-relaxed text-ink-soft before:absolute before:top-2 before:left-0 before:h-1.5 before:w-1.5 before:rounded-full before:bg-accent"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

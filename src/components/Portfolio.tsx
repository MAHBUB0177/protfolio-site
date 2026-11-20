"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { projects } from "@/data/profile";
import { GlassCard } from "@/components/GlassCard";
import { SectionHeading } from "@/components/SectionHeading";

const ease = [0.16, 1, 0.3, 1] as const;

export function Portfolio() {
  return (
    <section
      id="portfolio"
      className="relative z-10 section-pad py-20 sm:py-24"
    >
      <div className="container-max">
        <SectionHeading
          eyebrow="Portfolio"
          title="Selected work across industries"
          description="Travel booking, e-commerce, education, and banking products built with a focus on UX, security, and scale."
        />

        <div className="grid gap-5 lg:grid-cols-2">
          {projects.map((project, index) => {
            const image = "image" in project ? project.image : undefined;
            const link = "link" in project ? project.link : undefined;

            const card = (
              <GlassCard
                strong
                className="group h-full overflow-hidden transition-transform duration-300 hover:-translate-y-1"
              >
                <div className="relative h-48 overflow-hidden bg-[linear-gradient(135deg,var(--bg-soft),var(--bg-circle)_45%,rgba(253,111,0,0.45))] sm:h-56">
                  {image ? (
                    <Image
                      src={image}
                      alt={project.title}
                      fill
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                    />
                  ) : (
                    <div className="absolute inset-0 opacity-40 [background-image:radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.25),transparent_35%),linear-gradient(90deg,rgba(255,255,255,0.08)_1px,transparent_1px)] [background-size:auto,24px_24px]" />
                  )}

                  <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-black/10 to-transparent" />

                  <div className="absolute right-5 bottom-5 z-10 inline-flex h-10 w-10 items-center justify-center group-hover:text-accent rounded-xl bg-[var(--surface-strong)] text-ink backdrop-blur-md transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1">
                    <ArrowUpRight size={18} />
                  </div>
                  <p className="absolute top-5 left-5 z-10 text-xs tracking-[0.18em] text-ink-soft uppercase">
                    Case {String(index + 1).padStart(2, "0")}
                  </p>
                </div>
                <div className="p-6 sm:p-7">
                  <p className="text-sm text-accent">{project.subtitle}</p>
                  <h3 className="mt-2 font-display text-2xl text-ink">
                    {project.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-ink-soft">
                    {project.description}
                  </p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-lg bg-[var(--surface-strong)] px-2.5 py-1 text-xs text-ink-soft"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </GlassCard>
            );

            return (
              <motion.article
                key={project.title}
                className="h-full"
                initial={{ opacity: 0, y: 56, scale: 0.96 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{
                  once: true,
                  amount: 0.35,
                  margin: "0px 0px -8% 0px",
                }}
                transition={{
                  duration: 1.1,
                  ease,
                  delay: (index % 2) * 0.12,
                }}
              >
                {link ? (
                  <a
                    href={link}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Open ${project.title}`}
                    className="block h-full"
                  >
                    {card}
                  </a>
                ) : (
                  card
                )}
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

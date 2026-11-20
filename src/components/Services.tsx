"use client";

import { motion } from "framer-motion";
import {
  Code2,
  Layers3,
  ShieldCheck,
  LayoutDashboard,
  ShoppingBag,
  Gauge,
} from "lucide-react";
import { services } from "@/data/profile";
import { GlassCard } from "@/components/GlassCard";
import { SectionHeading } from "@/components/SectionHeading";

const icons = [
  Code2,
  Layers3,
  ShieldCheck,
  LayoutDashboard,
  ShoppingBag,
  Gauge,
];

export function Services() {
  return (
    <section id="services" className="relative z-10 section-pad py-20 sm:py-24">
      <div className="container-max">
        <SectionHeading
          eyebrow="Services"
          title="How I can help your product move faster"
          description="Practical engineering support for teams that need polished interfaces, solid systems, and dependable delivery."
        />

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => {
            const Icon = icons[index] ?? Code2;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 26 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.05,
                  ease: [0.22, 1, 0.36, 1],
                }}
                whileHover={{ y: -4 }}
              >
                <GlassCard className="h-full p-6 transition-shadow duration-300 hover:shadow-[var(--shadow)]">
                  <div className="mb-5 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-accent-soft text-accent">
                    <Icon size={20} />
                  </div>
                  <h3 className="font-display text-xl text-ink">
                    {service.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-ink-soft">
                    {service.description}
                  </p>
                </GlassCard>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

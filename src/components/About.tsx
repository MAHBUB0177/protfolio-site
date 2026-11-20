"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Download } from "lucide-react";
import { profile } from "@/data/profile";

const ease = [0.16, 1, 0.3, 1] as const;

export function About() {
  return (
    <section id="about" className="relative z-10 section-pad py-20 sm:py-28">
      <div className="container-max">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.8, ease }}
          className="mb-14 text-center sm:mb-16"
        >
          <h2 className="font-display text-3xl font-semibold text-ink sm:text-4xl">
            About Me
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm tracking-[0.04em] text-muted uppercase sm:text-base">
            {profile.about.tagline}
          </p>
        </motion.div>

        <div className="grid items-center gap-10 justify-center  mx-auto lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.94, y: 24 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 1, ease }}
            className="relative mx-auto w-full max-w-[380px]"
          >
            <div className="group relative aspect-[3/4] overflow-hidden rounded-[2rem] bg-[#0a0a0a] shadow-[0_24px_60px_rgba(0,0,0,0.45)]">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.1, delay: 0.15, ease }}
                className="absolute top-[12%] left-1/2 aspect-square w-[88%] -translate-x-1/2 rounded-full bg-[#2a2a2a]"
                aria-hidden
              />

              <motion.div
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1.15, delay: 0.25, ease }}
                className="absolute inset-x-[6%] top-[4%] bottom-0"
              >
                <Image
                  src={profile.photoUrl}
                  alt={profile.name}
                  fill
                  sizes="(max-width: 1024px) 90vw, 380px"
                  className="object-cover object-[center_12%] grayscale transition-[filter] duration-500 ease-out group-hover:grayscale-0"
                />
              </motion.div>

              <div
                className="pointer-events-none absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/70 to-transparent"
                aria-hidden
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 36 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.9, delay: 0.1, ease }}
            className="max-w-xl lg:justify-self-start"
          >
            <p className="text-base leading-8 text-ink-soft sm:text-lg sm:leading-9">
              {profile.about.body}
            </p>

            <a
              href={profile.resumeUrl}
              download
              className="btn-primary mt-8 inline-flex gap-2"
            >
              <Download size={16} />
              Download CV
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

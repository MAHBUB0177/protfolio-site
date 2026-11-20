"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { animate, motion } from "framer-motion";
import { GithubIcon, LinkedinIcon } from "@/components/SocialIcons";
import { profile } from "@/data/profile";

const ease = [0.16, 1, 0.3, 1] as const;

function CountUp({
  value,
  duration = 2.4,
  delay = 0,
}: {
  value: string;
  duration?: number;
  delay?: number;
}) {
  const match = value.match(/^(\d+)(.*)$/);
  const target = match ? Number(match[1]) : 0;
  const suffix = match?.[2] ?? "";
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    const controls = animate(0, target, {
      duration,
      delay,
      ease,
      onUpdate: (latest) => setDisplay(Math.round(latest)),
    });

    return () => controls.stop();
  }, [target, duration, delay]);

  return (
    <>
      {display}
      {suffix}
    </>
  );
}

const textContainer = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.18,
      delayChildren: 0.15,
    },
  },
};

const textItem = {
  hidden: { opacity: 0, y: 36 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1.05,
      ease,
    },
  },
};

const imageBlock = {
  hidden: { opacity: 0, x: 48, scale: 0.94 },
  show: {
    opacity: 1,
    x: 0,
    scale: 1,
    transition: {
      duration: 1.35,
      delay: 0.35,
      ease,
    },
  },
};

const circleBlock = {
  hidden: { opacity: 0, scale: 0.85 },
  show: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 1.2,
      delay: 0.2,
      ease,
    },
  },
};

const statVariants = {
  initial: { scale: 1 },
  hover: {
    scale: 1.4,
    transition: {
      duration: 0.4,
      ease: "easeInOut",
    },
  },
};
export function Hero() {
  return (
    <section
      id="home"
      className="relative z-10 flex min-h-screen items-center overflow-hidden section-pad pb-16 pt-28 sm:pb-20 sm:pt-32"
    >
      <div
        className="pointer-events-none absolute inset-0 -z-10"
        aria-hidden
        style={{
          background:
            "radial-gradient(ellipse 55% 50% at 18% 48%, var(--accent-glow), transparent 68%)",
        }}
      />

      <div className="container-max grid w-full items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-8">
        <motion.div variants={textContainer} initial="hidden" animate="show">
          <motion.p
            variants={textItem}
            className="text-base text-muted sm:text-lg"
          >
            {profile.greeting}
          </motion.p>

          <motion.h1
            variants={textItem}
            className="mt-2 font-display text-[clamp(2.4rem,5.5vw,3.75rem)] leading-tight font-semibold tracking-tight text-ink"
          >
            {profile.name}
          </motion.h1>

          <motion.p
            variants={textItem}
            className="mt-3 font-display text-[clamp(2.2rem,6vw,4.25rem)] leading-[1.05] font-bold text-accent"
          >
            {profile.title}
          </motion.p>

          <motion.div
            variants={textItem}
            className="mt-7 flex items-center gap-3"
          >
            <a
              href={profile.social.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub profile"
              className="social-orb"
            >
              <GithubIcon size={16} />
            </a>
            <a
              href={profile.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn profile"
              className="social-orb"
            >
              <LinkedinIcon size={16} />
            </a>
            <a
              href={`mailto:${profile.email}`}
              aria-label="Send email"
              className="social-orb"
            >
              <MailGlyph />
            </a>
          </motion.div>

          <motion.div
            variants={textItem}
            className="mt-8 flex flex-wrap items-center gap-3"
          >
            <a href="#contact" className="btn-primary min-w-[8.5rem]">
              Hire Me
            </a>
            <a
              href={profile.resumeUrl}
              download
              className="btn-outline min-w-[8.5rem]"
            >
              Download CV
            </a>
          </motion.div>

          <motion.div
            variants={textItem}
            className="glass mt-10 grid max-w-xl grid-cols-3 overflow-hidden rounded-2xl"
          >
            {profile.stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial="initial"
                whileHover="hover"
                className={`px-3 py-5 text-center sm:px-5 sm:py-6 cursor-pointer ${
                  index > 0 ? "border-l border-border" : ""
                }`}
              >
                <motion.p
                  variants={statVariants}
                  className="font-display text-2xl font-bold text-accent sm:text-3xl"
                >
                  <CountUp
                    value={stat.value}
                    duration={2.6}
                    delay={1.1 + index * 0.15}
                  />
                </motion.p>

                <p className="mt-1 text-xs text-ink-soft sm:text-sm">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        <motion.div
          variants={imageBlock}
          initial="hidden"
          animate="show"
          className="relative mx-auto flex h-[420px] w-full max-w-[460px] items-center justify-center sm:h-[520px] lg:h-[560px] lg:max-w-none"
        >
          <motion.div
            variants={circleBlock}
            initial="hidden"
            animate="show"
            className="relative aspect-square w-[min(100%,400px)] overflow-hidden rounded-full bg-[var(--bg-circle)]"
          >
            <Image
              src={profile.photoUrl}
              alt={profile.name}
              fill
              priority
              sizes="(max-width: 1024px) 90vw, 400px"
              className="object-cover object-center"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

function MailGlyph() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M4 6.75A1.75 1.75 0 0 1 5.75 5h12.5A1.75 1.75 0 0 1 20 6.75v10.5A1.75 1.75 0 0 1 18.25 19H5.75A1.75 1.75 0 0 1 4 17.25V6.75Z"
        stroke="currentColor"
        strokeWidth="1.6"
      />
      <path
        d="m5 7 7 5.5L19 7"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

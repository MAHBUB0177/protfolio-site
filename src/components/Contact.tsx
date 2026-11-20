"use client";

import { useEffect, useRef, useState, type FormEvent } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { CheckCircle2, Mail, Phone, Send, X } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/SocialIcons";
import { profile } from "@/data/profile";
import { GlassCard } from "@/components/GlassCard";
import { SectionHeading } from "@/components/SectionHeading";

type Status = "idle" | "sending" | "sent";

export function Contact() {
  const formRef = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<Status>("idle");
  const [showToast, setShowToast] = useState(false);

  useEffect(() => {
    if (!showToast) return;

    const hideTimer = window.setTimeout(() => setShowToast(false), 3500);
    return () => window.clearTimeout(hideTimer);
  }, [showToast]);

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (status === "sending") return;

    setStatus("sending");

    window.setTimeout(() => {
      setStatus("sent");
      setShowToast(true);
      formRef.current?.reset();

      window.setTimeout(() => setStatus("idle"), 400);
    }, 5000);
  };

  return (
    <section id="contact" className="relative z-10 section-pad py-20 sm:py-28">
      <div className="container-max">
        <SectionHeading
          eyebrow="Contact"
          title="Let’s build something dependable"
          description="Open to software engineering roles, freelance delivery, and collaboration on product-focused web work."
        />

        <div className="grid gap-5 lg:grid-cols-[0.9fr_1.1fr]">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
            className="space-y-4"
          >
            <GlassCard className="p-6">
              <a
                href={`mailto:${profile.email}`}
                className="flex items-start gap-4 text-ink-soft transition-colors hover:text-ink"
              >
                <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-accent-soft text-accent">
                  <Mail size={18} />
                </span>
                <span>
                  <span className="block text-sm text-muted">Email</span>
                  <span className="mt-1 block font-medium text-ink">
                    {profile.email}
                  </span>
                </span>
              </a>
            </GlassCard>

            <GlassCard className="p-6">
              <a
                href={`tel:${profile.phone}`}
                className="flex items-start gap-4 text-ink-soft transition-colors hover:text-ink"
              >
                <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-accent-soft text-accent">
                  <Phone size={18} />
                </span>
                <span>
                  <span className="block text-sm text-muted">Phone</span>
                  <span className="mt-1 block font-medium text-ink">
                    {profile.phone}
                  </span>
                </span>
              </a>
            </GlassCard>

            <GlassCard className="flex gap-3 p-6">
              <a
                href={profile.social.github}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline flex-1"
              >
                <GithubIcon size={16} />
                GitHub
              </a>
              <a
                href={profile.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline flex-1"
              >
                <LinkedinIcon size={16} />
                LinkedIn
              </a>
            </GlassCard>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: 0.08 }}
          >
            <GlassCard strong className="p-6 sm:p-8">
              <form ref={formRef} onSubmit={onSubmit} className="space-y-4">
                <div>
                  <label
                    htmlFor="name"
                    className="mb-2 block text-sm text-ink-soft"
                  >
                    Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    required
                    disabled={status === "sending"}
                    className="w-full rounded-xl border border-border bg-[var(--surface-strong)] px-4 py-3 text-ink outline-none transition focus:border-accent disabled:opacity-60"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="mb-2 block text-sm text-ink-soft"
                  >
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    disabled={status === "sending"}
                    className="w-full rounded-xl border border-border bg-[var(--surface-strong)] px-4 py-3 text-ink outline-none transition focus:border-accent disabled:opacity-60"
                    placeholder="you@example.com"
                  />
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="mb-2 block text-sm text-ink-soft"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    disabled={status === "sending"}
                    className="w-full resize-y rounded-xl border border-border bg-[var(--surface-strong)] px-4 py-3 text-ink outline-none transition focus:border-accent disabled:opacity-60"
                    placeholder="Tell me about the role or project"
                  />
                </div>
                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="btn-primary cursor-pointer disabled:cursor-not-allowed disabled:opacity-70"
                >
                  {status === "sending" ? "Sending..." : "Send message"}
                  <Send size={15} />
                </button>
              </form>
            </GlassCard>
          </motion.div>
        </div>
      </div>

      <AnimatePresence>
        {showToast ? (
          <motion.div
            role="status"
            aria-live="polite"
            initial={{ opacity: 0, y: 24, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.96 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="fixed right-4 bottom-4 z-[80] flex max-w-sm items-center gap-3 rounded-2xl border border-border bg-[var(--bg-elevated)] px-4 py-3 shadow-[var(--shadow)] sm:right-6 sm:bottom-6"
          >
            <span className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-accent-soft text-accent">
              <CheckCircle2 size={18} />
            </span>
            <div className="min-w-0 flex-1">
              <p className="text-sm font-medium text-ink">Message sent</p>
              <p className="text-xs text-muted">
                Thanks! I’ll get back to you soon.
              </p>
            </div>
            <button
              type="button"
              aria-label="Dismiss notification"
              onClick={() => setShowToast(false)}
              className="rounded-lg p-1 text-muted transition-colors hover:text-ink"
            >
              <X size={16} />
            </button>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </section>
  );
}

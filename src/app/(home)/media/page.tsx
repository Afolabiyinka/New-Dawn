"use client";

import { socialLinks } from "@/lib/page-data";
import { ArrowUpRightIcon } from "@phosphor-icons/react/dist/ssr";
import { motion, MotionConfig } from "framer-motion";
import { fadeUp } from "@/lib/motion";
import type { CSSProperties } from "react";

const brandColors: Record<string, string> = {
  instagram: "#E4405F",
  youtube: "#FF0000",
  tiktok: "#000000",
};

export default function MediaPage() {
  return (
    <MotionConfig reducedMotion="user">
      <main className="mx-auto max-w-7xl px-6 py-24 md:py-32">
        <motion.header
          {...fadeUp}
          className="mx-auto mb-16 max-w-2xl text-center"
        >
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.18em] text-black/50">
            Media
          </p>
          <h1 className="text-4xl font-semibold tracking-tight md:text-6xl">
            Stay connected with us
          </h1>
          <p className="mt-5 text-base leading-7 text-black/60">
            Sermons, events and moments from the New Dawn family. Follow along
            wherever you are.
          </p>
        </motion.header>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {socialLinks.map(({ label, href, Icon }, i) => {
            const brand = brandColors[label.toLowerCase()] ?? "#111111";

            return (
              <motion.div
                key={label}
                initial={{ opacity: 0, y: 32, scale: 0.97 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{
                  duration: 0.6,
                  ease: "easeOut",
                  delay: Math.min(i, 5) * 0.1,
                }}
              >
                <a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ "--brand": brand } as CSSProperties}
                  className="group relative flex min-h-64 flex-col justify-between overflow-hidden rounded-3xl border border-black/10 bg-white p-7 transition-all duration-500 hover:-translate-y-2 hover:border-transparent hover:bg-[var(--brand)] hover:shadow-[0_24px_50px_-12px_var(--brand)]"
                >
                  {/* Ghost icon */}
                  <Icon
                    weight="fill"
                    className="pointer-events-none absolute -bottom-10 -right-10 size-56 text-black/[0.04] transition-all duration-700 group-hover:-bottom-4 group-hover:-right-4 group-hover:rotate-[-12deg] group-hover:scale-110 group-hover:text-white/20"
                  />

                  <div className="relative flex items-start justify-between">
                    <span className="flex size-14 items-center justify-center rounded-2xl bg-[var(--brand)] text-white transition-all duration-500 group-hover:scale-110 group-hover:rotate-6 group-hover:bg-white group-hover:text-[var(--brand)]">
                      <Icon size={28} weight="fill" />
                    </span>

                    <ArrowUpRightIcon
                      size={22}
                      className="text-black/30 transition-all duration-500 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-white"
                    />
                  </div>

                  <div className="relative">
                    <h2 className="text-2xl font-semibold transition-colors duration-500 group-hover:text-white">
                      {label}
                    </h2>
                    <p className="mt-1 text-sm text-black/50 transition-colors duration-500 group-hover:text-white/80">
                      Follow us on {label}
                    </p>
                  </div>
                </a>
              </motion.div>
            );
          })}
        </div>
      </main>
    </MotionConfig>
  );
}

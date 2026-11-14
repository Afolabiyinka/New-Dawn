"use client";

import Image from "next/image";
import { leaders } from "@/lib/page-data";
import { motion, MotionConfig } from "framer-motion";
import { fadeUp } from "@/lib/motion";

type Leader = (typeof leaders)[number];

function LeaderCard({
  leader,
  featured = false,
  index = 0,
}: {
  leader: Leader;
  featured?: boolean;
  index?: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{
        duration: 0.5,
        ease: "easeOut",
        delay: Math.min(index, 3) * 0.08,
      }}
      className="group text-left"
    >
      <span
        className={`relative block w-full overflow-hidden rounded-3xl bg-black/5 ${
          featured ? "aspect-4/5 md:aspect-3/4" : "aspect-3/4"
        }`}
      >
        <Image
          src={leader.image}
          alt={leader.name}
          fill
          priority={featured}
          sizes={
            featured
              ? "(min-width: 768px) 50vw, 100vw"
              : "(min-width: 1024px) 25vw, (min-width: 768px) 33vw, 50vw"
          }
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />

        {featured && (
          <>
            <span className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent" />
            <span className="absolute inset-x-0 bottom-0 block p-6 text-white md:p-8">
              <span className="block text-3xl font-bold md:text-4xl">
                {leader.name}
              </span>
              <span className="mt-1 block text-sm font-semibold uppercase tracking-widest text-primary">
                {leader.role}
              </span>
              <span className="mt-3 block max-w-md text-sm text-white/80">
                {leader.description}
              </span>
            </span>
          </>
        )}
      </span>

      {!featured && (
        <span className="mt-4 block">
          <span className="block text-lg font-bold leading-tight">
            {leader.name}
          </span>
          <span className="mt-1 block text-sm text-[#5b5850]">
            {leader.role}
          </span>
        </span>
      )}
    </motion.div>
  );
}

export default function LeadersPage() {
  const featured = leaders.slice(0, 2);
  const rest = leaders.slice(2);

  return (
    <MotionConfig reducedMotion="user">
      <section className="mx-auto w-full max-w-6xl px-5 pb-20 pt-32 md:pb-24">
        <motion.div {...fadeUp} className="mx-auto max-w-3xl text-center">
          <h1 className="text-4xl font-bold md:text-5xl">Meet our leaders</h1>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-[#5b5850]">
            Pastor Nelson Apata and his wife serve New Dawn Assembly as Pastor
            in Charge and Assistant Pastor.
          </p>
        </motion.div>

        {/* Featured: first 2 */}
        <div className="mt-12 grid grid-cols-1 gap-6 md:mt-16 md:grid-cols-2 md:gap-8">
          {featured.map((leader, i) => (
            <LeaderCard key={leader.name} leader={leader} featured index={i} />
          ))}
        </div>

        {/* Everyone else */}
        {rest.length > 0 && (
          <div className="mt-12 grid grid-cols-2 gap-x-4 gap-y-10 md:grid-cols-3 md:gap-x-6 lg:grid-cols-4">
            {rest.map((leader, i) => (
              <LeaderCard key={leader.name} leader={leader} index={i} />
            ))}
          </div>
        )}
      </section>
    </MotionConfig>
  );
}

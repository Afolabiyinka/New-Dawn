"use client";

import Image from "next/image";
import { motion, type Variants } from "framer-motion";
import CustomBtn from "../common/CustomBtn";
import Link from "next/link";
import { leaders } from "@/lib/page-data";

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.2 } },
};

const item: Variants = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut" },
  },
};

const LeadersSnippet = () => {
  return (
    <section className="mx-auto w-full max-w-7xl px-5 py-16 sm:px-8 md:py-24">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-3xl font-bold tracking-tight md:text-5xl">
          Meet Our Leaders
        </h2>
        <p className="mt-4 text-base leading-7 text-muted-foreground">
          Meet the people dedicated to leading, serving, and growing our church
          community.
        </p>
      </div>

      <motion.div
        className="mx-auto mt-10 grid w-full max-w-4xl grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-8"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
      >
        {leaders.slice(0, 2).map(({ name, role, image }) => (
          <motion.div
            key={name}
            variants={item}
            className="group relative mx-auto aspect-[4/5] w-full max-w-sm overflow-hidden rounded-2xl bg-neutral-100 shadow-sm"
          >
            <Image
              src={image}
              alt={name}
              fill
              sizes="(min-width: 640px) 384px, 90vw"
              className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />

            <div className="absolute inset-x-0 bottom-0 p-5 sm:p-6">
              <h3 className="text-xl font-bold text-white sm:text-2xl">
                {name}
              </h3>
              <p className="mt-2 text-sm text-white/80">{role}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>

      <div className="mt-10 flex justify-center">
        <Link href={`/leaders`}>
          <CustomBtn>Meet Our Whole Team</CustomBtn>
        </Link>
      </div>
    </section>
  );
};

export default LeadersSnippet;

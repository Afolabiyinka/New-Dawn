"use client";
import Image from "next/image";
import { motion, type Variants } from "framer-motion";
import leader1 from "@/assets/leaders/Daddy.jpeg";
import leader2 from "@/assets/leaders/Mummy.jpeg";

const leaders = [
  { name: "Pastor Nelson Apata", role: "Pastor in Charge", image: leader1 },
  { name: "Pastor's Wife", role: "Assistant Pastor", image: leader2 },
];

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.2 } },
};

const item: Variants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
};

const LeadersSnippet = () => {
  return (
    <section className="mx-auto w-full max-w-6xl px-5 py-16">
      <h2 className="text-center text-3xl font-bold md:text-5xl">
        Meet our leaders
      </h2>

      <motion.div
        className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
      >
        {leaders.map(({ name, role, image }) => (
          <motion.div
            key={name}
            variants={item}
            className="group relative aspect-4/5 overflow-hidden rounded-2xl"
          >
            <Image
              src={image}
              alt={name}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
            <div className="absolute bottom-0 left-0 p-6 text-white">
              <h3 className="text-xl font-bold md:text-2xl">{name}</h3>
              <p className="mt-1 text-sm text-white/70">{role}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default LeadersSnippet;

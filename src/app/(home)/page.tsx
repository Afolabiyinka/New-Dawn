"use client";
import { motion, Variants } from "framer-motion";
import { fade, fadeUp } from "@/lib/motion";
import Link from "next/link";
import CustomBtn from "../components/common/CustomBtn";
import {
  HandHeartIcon,
  UserIcon,
  YoutubeLogoIcon,
} from "@phosphor-icons/react";
import { images } from "@/lib/images";
import Image from "next/image";
import AboutSnippet from "../components/pages/about_snippet";

import LeadersSnippet from "../components/pages/leader_snippet";
import WorshipSnippet from "../components/pages/worship_snippet";

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.2, delayChildren: 0.3 } },
};

const item: Variants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
};

const Home = () => {
  return (
    <div className="w-full min-h-screen flex flex-col items-center justify-center">
      {/* Hero */}
      <section className="relative h-screen flex items-center justify-center text-center w-[99%] rounded-2xl mt-2 overflow-hidden ">
        <motion.div
          className="absolute inset-0"
          initial={{ scale: 1.15 }}
          animate={{ scale: 1 }}
          transition={{ duration: 10, ease: "easeOut" }}
        >
          <Image
            src={images.backgrounds.home}
            alt="Home Background"
            fill
            priority
            className="object-cover"
          />
        </motion.div>

        <div className="h-full w-full flex justify-center items-center bg-black/80 relative">
          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            className="relative px-6 max-w-3xl text-white z-10 flex flex-col items-center"
          >
            {/* Eyebrow: who/where */}
            <motion.div variants={item} className="mb-6 space-y-1">
              {/* <p className="uppercase tracking-[0.3em] text-xs md:text-sm font-bold text-primary">
                Welcome to New Dawn Assembly
              </p> */}
              <p className="uppercase tracking-widest text-xs md:text-lg text-white/70">
                Lagos Province 72 · Zonal Headquarters
              </p>
            </motion.div>

            {/* Headline */}
            <motion.h1
              variants={item}
              className="text-4xl md:text-7xl font-extrabold leading-tight"
            >
              A place to belong, <br className="hidden md:block" /> a faith to
              grow in.
            </motion.h1>

            {/* Service times, next to the CTA */}
            <motion.p
              variants={item}
              className="mt-6 uppercase tracking-[0.2em] text-sm text-white/80"
            >
              Sundays · 8:00 AM &amp; 11:30 AM
            </motion.p>

            <motion.div
              variants={item}
              className="mt-8 flex gap-2 md:gap-5 flex-col md:flex-row items-center justify-center"
              // whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link href="/live-streams">
                <CustomBtn
                  size="lg"
                  variant="secondary"
                  children="Join us live"
                  icon={<YoutubeLogoIcon weight="fill" fill="red" />}
                  iconPosition="right"
                />
              </Link>
              <Link href="/about">
                <CustomBtn
                  size="lg"
                  variant="secondary"
                  children="About Us"
                  icon={<UserIcon />}
                />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <AboutSnippet />
      <WorshipSnippet />
      <LeadersSnippet />

      {/* Give */}

      <section id="give" className="max-w-3xl mx-auto px-6 py-24 text-center">
        <motion.div {...fadeUp}>
          <h2 className="text-4xl mb-4">Give</h2>
          <p className="text-[#5b5850] mb-8">
            Your generosity fuels our mission and our community.
          </p>
          <Link href="/donations">
            <CustomBtn icon={<HandHeartIcon />} iconPosition="right">
              Give online
            </CustomBtn>
          </Link>
        </motion.div>
      </section>

      {/* Footer */}
    </div>
  );
};

export default Home;

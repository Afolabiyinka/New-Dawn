"use client";
import { motion, Variants } from "framer-motion";
import { fade } from "@/lib/motion";
import Link from "next/link";
import CustomBtn from "../components/common/CustomBtn";
import { HandHeartIcon, YoutubeLogoIcon } from "@phosphor-icons/react";
import home_background from "@/assets/home_background.jpg";
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
    <div className="w-full min-h-screen">
      {/* Hero */}
      <section className="relative h-screen flex items-center justify-center text-center w-full overflow-hidden">
        <motion.div
          className="absolute inset-0"
          initial={{ scale: 1.15 }}
          animate={{ scale: 1 }}
          transition={{ duration: 10, ease: "easeOut" }}
        >
          <Image
            src={home_background}
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
            className="relative px-6 max-w-3xl text-white z-10"
          >
            <motion.p
              variants={item}
              className="uppercase tracking-[0.3em] text-sm mb-4 text-primary font-bold"
            >
              Sundays · 9:00 AM &amp; 11:30 AM
            </motion.p>

            <motion.h3
              variants={item}
              className="text-2xl font-bold tracking-widest"
            >
              Welcome to New Dawn Assembly
            </motion.h3>

            <motion.h1
              variants={item}
              className="text-4xl md:text-7xl font-bold leading-tight"
            >
              A place to belong, <br /> a faith to grow in.
            </motion.h1>

            <motion.div
              variants={item}
              className="mt-8 flex flex-col md:flex-row gap-4 justify-center items-center"
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {/* <Link href="/visit">
                  <CustomBtn children="Join us Sunday" />
                </Link> */}
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
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
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <AboutSnippet />
      <WorshipSnippet />
      <LeadersSnippet />

      {/* Give */}
      <section id="give" className="max-w-3xl mx-auto px-6 py-24 text-center">
        <motion.div {...fade}>
          <h2 className={`text-4xl mb-4`}>Give</h2>
          <p className="text-[#5b5850] mb-8">
            Your generosity fuels our mission and our community.
          </p>
          <Link href="#">
            <CustomBtn
              children="Give online"
              icon={<HandHeartIcon />}
              iconPosition="right"
            />
          </Link>
        </motion.div>
      </section>

      {/* Footer */}
    </div>
  );
};

export default Home;

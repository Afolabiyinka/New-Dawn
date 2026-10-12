"use client";
import CustomBtn from "@/app/components/common/CustomBtn";
import { YoutubeLogoIcon } from "@phosphor-icons/react";
import Image from "next/image";
import Link from "next/link";
import { motion, type Variants } from "framer-motion";
import home_background from "@/assets/livestream.jpg";

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.2, delayChildren: 0.3 } },
};

const item: Variants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
};

const LiveStreams = () => {
  return (
    <div className="w-full h-screen flex flex-col items-center justify-center relative overflow-hidden">
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

      <div className="h-full w-full flex justify-center items-center bg-black/70 relative  p-6">
        <motion.div
          className="max-w-2xl text-center space-y-6 relative z-10 text-white"
          variants={container}
          initial="hidden"
          animate="show"
        >
          <motion.h1
            variants={item}
            className="text-4xl tracking-widest text-primary"
          >
            LIVESTREAM
          </motion.h1>

          <motion.h4
            variants={item}
            className="underline underline-offset-8 decoration-2 decoration-primary text-2xl"
          >
            Worship with us, Anywhere
          </motion.h4>

          <motion.p
            variants={item}
            className="leading-relaxed text-lg md:text-xl mt-4"
          >
            Watch the livestream of our programs. From worship to sermons, all
            at your fingertips. No matter where you are, you can get teachings
            of the Word and fellowship with us.
          </motion.p>

          <motion.div
            variants={item}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block"
          >
            <Link
              href="https://www.youtube.com/@rccgnewdawnassemblylp72/streams"
              target="_blank"
            >
              <CustomBtn
                variant="secondary"
                children="Watch live"
                icon={<YoutubeLogoIcon weight="fill" fill="red" />}
                iconPosition="right"
              />
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default LiveStreams;

"use client";
import { motion, Variants } from "framer-motion";
import { fade } from "@/lib/motion";
import Link from "next/link";
import CustomBtn from "../components/common/CustomBtn";
import { HandHeartIcon, YoutubeLogoIcon } from "@phosphor-icons/react";
import home_background from "@/assets/home_background.jpg";
import Image from "next/image";
import AboutSnippet from "../components/pages/about_snippet";
import img1 from "@/assets/service-shots/Daddy_on_the_altar.jpeg";
import img2 from "@/assets/service-shots/WhatsApp Image 2026-10-08 at 4.19.37 PM.jpeg";
import img3 from "@/assets/service-shots/random_shot.jpeg";
import img4 from "@/assets/service-shots/2random_shot.jpeg";
import LeadersSnippet from "../components/pages/leader_snippet";

const images = [img1, img2, img3, img4];

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.2, delayChildren: 0.3 } },
};

const item: Variants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
};

const programs = [
  {
    day: "Sunday",
    title: "Sunday Service",
    time: "8:30 AM – 10:00 AM",
  },
  {
    day: "Thursday",
    title: "Digging Deep",
    time: "Time to be announced",
  },
];

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
                <Link href="/visit">
                  <CustomBtn children="Join us Sunday" />
                </Link>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link href="/live-streams">
                  <CustomBtn
                    variant="secondary"
                    children="Watch live"
                    icon={<YoutubeLogoIcon weight="fill" fill="red" />}
                    iconPosition="right"
                  />
                </Link>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* About */}

      <AboutSnippet />

      <section className="mx-auto w-full max-w-6xl px-5 py-16">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          {/* Left: programs */}
          <div>
            <h1 className="text-3xl font-bold md:text-5xl">Worship with us</h1>
            <h6 className="mt-2 text-lg text-muted-foreground">Our Programs</h6>

            <div className="mt-8 flex flex-col gap-4">
              {programs.map((program) => (
                <div
                  key={program.day}
                  className="rounded-2xl border p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                >
                  <p className="text-sm font-medium text-primary">
                    {program.day}
                  </p>
                  <h3 className="mt-2 text-xl font-bold">{program.title}</h3>
                  <p className="mt-3 text-sm text-muted-foreground">
                    {program.time}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right: picture grid */}
          <div className="grid grid-cols-2 gap-4">
            {images.map((src, i) => (
              <div
                key={i}
                className={`relative overflow-hidden rounded-2xl ${
                  i % 2 === 0 ? "aspect-3/4" : "aspect-square"
                } ${i % 2 === 1 ? "mt-6" : ""}`}
              >
                <Image
                  src={src}
                  alt={`Church program ${i + 1}`}
                  fill
                  className="object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

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

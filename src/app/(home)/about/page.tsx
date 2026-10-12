import { fade } from "@/lib/motion";
import { motion } from "framer-motion";
import React from "react";

const About = () => {
  return (
    <div>
      <section id="about" className="max-w-4xl mx-auto px-6 py-24 text-center">
        <div>
          <h2 className={`text-4xl mb-6`}>One big Family</h2>
          <p className="text-lg leading-relaxed text-[#5b5850]">
            We are a family of believers committed to loving God, loving people,
            and serving our community. Whoever you are, wherever you are on your
            journey, there is a seat for you.
          </p>
        </div>
      </section>

      <section id="sermons" className="bg-[#1F3D2B] text-white py-24">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="uppercase tracking-widest text-xs text-[#E8B87A] mb-3">
              Latest message
            </p>
            <h2 className={` text-4xl mb-4`}>Walking in Purpose</h2>
            <p className="text-white/70 mb-6">
              Pastor John Doe · Series: Rooted · Oct 4
            </p>
            <a href="#" className="underline underline-offset-4">
              Browse all sermons →
            </a>
          </div>
          <div
            // {...fade}
            className="aspect-video rounded-2xl bg-black/40 flex items-center justify-center"
          >
            <span className="text-5xl">▶</span>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;

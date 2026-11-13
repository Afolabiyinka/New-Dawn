"use client";
import Gallery from "@/app/components/pages/gallery";
import { fade, fadeUp, stagger, item } from "@/lib/motion";
import { CheckIcon } from "@phosphor-icons/react/ssr";
import { motion } from "framer-motion";

const vision = [
  "To make heaven.",
  "To take as many people with us.",
  "To have a member of RCCG in every family of all nations.",
  "To accomplish No. 1 and No. 2 above through holiness, living a life of holiness as a lifestyle inside and outside the Church.",
  "To plant churches within five minutes' walking distance in every city and town of developed nations.",
];

const mission = [
  "To preach the gospel of Jesus Christ to all people worldwide.",
  "To disciple believers, teaching them to obey God's Word and grow spiritually.",
  "To build strong, Christ-centered families and communities.",
  "To equip members for ministry and service in the body of Christ.",
];

const StatementCard = ({
  title,
  items,
}: {
  title: string;
  items: string[];
}) => (
  <motion.div
    {...fade}
    className="rounded-2xl bg-white p-8 md:p-10 shadow-sm border border-black/5"
  >
    <motion.h3
      {...fadeUp}
      className="text-2xl md:text-3xl uppercase tracking-wide text-[#1F3D2B] mb-8 text-center"
    >
      {title}
    </motion.h3>
    <motion.ul
      variants={stagger}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      className="space-y-5"
    >
      {items.map((text) => (
        <motion.li
          key={text}
          variants={item}
          className="flex items-start gap-4"
        >
          <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary">
            <CheckIcon
              className="h-4 w-4 text-primary-foreground"
              strokeWidth={3}
            />
          </span>
          <span className="text-[#5b5850] leading-relaxed">{text}</span>
        </motion.li>
      ))}
    </motion.ul>
  </motion.div>
);

const About = () => {
  return (
    <div>
      <section id="about" className="max-w-4xl mx-auto px-6 py-36 text-center">
        <div>
          <h2 className="text-4xl sm:text-6xl mb-6">One big Family</h2>
          <p className="text-lg leading-relaxed text-[#5b5850]">
            We are a family of believers committed to loving God, loving people,
            and serving our community. Whoever you are, wherever you are on your
            journey, there is a seat for you.
          </p>
        </div>
      </section>

      <Gallery />

      <section id="vision-mission" className="bg-[#f6f3ec] py-24">
        <div className="max-w-6xl mx-auto px-6">
          <p className="uppercase tracking-widest text-xs text-[#B8873F] mb-3 text-center">
            What drives us
          </p>
          <h2 className="text-4xl mb-14 text-center">Our Vision & Mission</h2>
          <div className="grid md:grid-cols-2 gap-8 items-start">
            <StatementCard title="Vision Statement" items={vision} />
            <StatementCard title="Mission Statement" items={mission} />
          </div>
        </div>
      </section>
      {/* <WorshipSnippet /> */}
    </div>
  );
};

export default About;

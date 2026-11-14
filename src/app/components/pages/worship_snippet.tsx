import Image from "next/image";
import { MotionConfig, motion } from "framer-motion";
import { images } from "@/lib/images";
import { worshipPrograms } from "@/lib/worship";
import { fadeUp } from "@/lib/motion";

const WorshipSnippet = () => {
  return (
    <MotionConfig reducedMotion="user">
      <section className="mx-auto w-full max-w-6xl px-5 py-16">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          {/* Left: programs */}
          <motion.div {...fadeUp}>
            <h1 className="text-3xl font-bold md:text-5xl">Worship with us</h1>
            <h6 className="mt-2 text-lg text-muted-foreground">Our Programs</h6>

            <div className="mt-8 flex flex-col gap-4">
              <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
                {worshipPrograms.map(({ day, title, time, icon: Icon }) => (
                  <div
                    key={day}
                    className="flex flex-col items-start gap-4 rounded-3xl border p-6 transition-all duration-300 hover:-translate-y-1"
                  >
                    <div className="flex size-14 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                      <Icon size={28} weight="duotone" />
                    </div>

                    <div>
                      <p className="text-sm font-medium text-primary">{day}</p>
                      <h3 className="mt-1 text-xl font-bold">{title}</h3>
                      <p className="mt-2 text-sm text-muted-foreground">
                        {time}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right: picture grid */}
          <motion.div {...fadeUp} className="grid grid-cols-2 gap-4">
            {images.worship.slice(0, 4).map(({ src, alt }, i) => (
              <div
                key={i}
                className={`relative overflow-hidden rounded-2xl ${
                  i % 2 === 0 ? "aspect-3/4" : "aspect-square"
                } ${i % 2 === 1 ? "mt-6" : ""}`}
              >
                <Image
                  src={src}
                  alt={alt}
                  fill
                  className="object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
            ))}
          </motion.div>
        </div>
      </section>
    </MotionConfig>
  );
};

export default WorshipSnippet;

import {
  BookOpenTextIcon,
  ChurchIcon,
  HandsPrayingIcon,
  SunHorizonIcon,
} from "@phosphor-icons/react";
import Image from "next/image";
import { images } from "@/lib/images";

export const programs = [
  {
    day: "First Day of the Month",
    title: " ",
    time: "7:00 AM – 8:00 AM",
    icon: SunHorizonIcon,
  },
  {
    day: "Sunday",
    title: "Sunday Service",
    time: "8:00 AM – 10:30 AM",
    icon: ChurchIcon,
  },
  {
    day: "Tuesday",
    title: "Digging Deep",
    time: "6:30 PM – 8:00 PM",
    icon: BookOpenTextIcon,
  },
  {
    day: "Thursday",
    title: "Faith Clinic",
    time: "6:30 PM – 7:30 PM",
    icon: HandsPrayingIcon,
  },
];

const WorshipSnippet = () => {
  return (
    <section className="mx-auto w-full max-w-6xl px-5 py-16">
      <div className="grid items-center gap-10 lg:grid-cols-2">
        {/* Left: programs */}
        <div>
          <h1 className="text-3xl font-bold md:text-5xl">Worship with us</h1>
          <h6 className="mt-2 text-lg text-muted-foreground">Our Programs</h6>

          <div className="mt-8 flex flex-col gap-4">
            <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
              {programs.map(({ day, title, time, icon: Icon }) => (
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
                    <p className="mt-2 text-sm text-muted-foreground">{time}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right: picture grid */}
        <div className="grid grid-cols-2 gap-4">
          {images.worship.map(({ src, alt }, i) => (
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
        </div>
      </div>
    </section>
  );
};

export default WorshipSnippet;

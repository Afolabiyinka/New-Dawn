import {
  BookOpenTextIcon,
  ChurchIcon,
  HandsPrayingIcon,
  SunHorizonIcon,
} from "@phosphor-icons/react";
import Image from "next/image";
import img1 from "@/assets/service-shots/Daddy_on_the_altar.jpeg";
import img2 from "@/assets/service-shots/WhatsApp Image 2026-10-08 at 4.19.37 PM.jpeg";
import img3 from "@/assets/service-shots/random_shot.jpeg";
import img4 from "@/assets/service-shots/2random_shot.jpeg";

const programs = [
  {
    day: "First Day of the Month",
    title: "Sunday Service",
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

const images = [img1, img2, img3, img4];

const WorshipSnippet = () => {
  return (
    <section className="mx-auto w-full max-w-6xl px-5 py-16">
      <div className="grid items-center gap-10 lg:grid-cols-2">
        {/* Left: programs */}
        <div>
          <h1 className="text-3xl font-bold md:text-5xl">Worship with us</h1>
          <h6 className="mt-2 text-lg text-muted-foreground">Our Programs</h6>

          <div className="mt-8 flex flex-col gap-4">
            {programs.map(({ day, title, time, icon: Icon }) => (
              <div
                key={day}
                className="flex items-start gap-5  p-6 transition-all duration-300 hover:-translate-y-1 border rounded-3xl"
              >
                {/* <div className="flex size-20  shrink-0 items-center justify-center rounded-full">
                  <Icon size={40} weight="duotone" />
                </div> */}

                <div>
                  <p className="text-sm font-medium text-primary">{day}</p>
                  <h3 className="mt-1 text-xl font-bold">{title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{time}</p>
                </div>
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
  );
};

export default WorshipSnippet;

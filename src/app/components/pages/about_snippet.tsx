"use client";

import { fade } from "@/lib/motion";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { CaretLeftIcon, CaretRightIcon } from "@phosphor-icons/react";

import "swiper/css";

import mensPicture from "@/assets/Men.jpeg";
import womensPicture from "@/assets/Women.jpeg";
import youthPicture from "@/assets/Youth.jpeg";
import outreach from "@/assets/Outreach.jpeg";

const slides = [
  { src: mensPicture, alt: "Men's ministry" },
  { src: womensPicture, alt: "Women's ministry" },
  { src: youthPicture, alt: "Youth ministry" },
  { src: outreach, alt: "Community outreach" },
];

const AboutSnippet = () => {
  return (
    <section
      id="about"
      className="flex min-h-screen w-full flex-col items-center justify-center gap-10 px-5 py-16 text-left sm:px-8 sm:py-20 md:flex-row md:gap-10 md:px-10 lg:gap-16 lg:py-24"
    >
      <motion.div {...fade} className="w-full max-w-xl md:w-[45%] md:flex-none">
        <h2 className="mb-4 text-3xl font-extrabold text-primary  sm:text-4xl lg:text-5xl">
          One Big Family
        </h2>

        <p className="text-base leading-relaxed text-muted-foreground sm:text-lg">
          We are a family of believers committed to loving God, loving people,
          and serving our community. Whoever you are, wherever you are on your
          journey, there is a seat for you.
        </p>
      </motion.div>

      <div className="flex w-full min-w-0 flex-col items-center gap-4 md:flex-1">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          loop
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
          }}
          navigation={{
            prevEl: ".about-prev",
            nextEl: ".about-next",
          }}
          pagination={{
            el: ".about-pagination",
            clickable: true,
          }}
          className="aspect-[4/3] w-full overflow-hidden rounded-2xl sm:aspect-[16/10] sm:rounded-3xl lg:aspect-[4/3]"
        >
          {slides.map((slide) => (
            <Swiper
              modules={[Navigation, Pagination, Autoplay]}
              loop
              speed={800}
              autoplay={{
                delay: 4000,
                disableOnInteraction: false,
                pauseOnMouseEnter: true,
              }}
              navigation={{
                prevEl: ".about-prev",
                nextEl: ".about-next",
              }}
              pagination={{
                el: ".about-pagination",
                clickable: true,
              }}
              className="aspect-[4/3] w-full overflow-hidden rounded-2xl sm:aspect-[16/10] sm:rounded-3xl lg:aspect-[4/3] [&_.swiper-wrapper]:ease-[cubic-bezier(0.22,1,0.36,1)]"
            >
              {slides.map((slide) => (
                <SwiperSlide key={slide.alt} className="h-full">
                  <Image
                    src={slide.src}
                    alt={slide.alt}
                    sizes="(max-width: 767px) 100vw, 55vw"
                    className="h-full w-full object-cover"
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          ))}
        </Swiper>

        <div className="flex h-12 w-full max-w-sm items-center justify-between gap-3 rounded-full bg-muted px-3 sm:w-[70%] sm:max-w-md">
          <button
            type="button"
            aria-label="Previous slide"
            className="about-prev flex size-9 shrink-0 items-center justify-center rounded-full transition-colors hover:bg-background"
          >
            <CaretLeftIcon size={22} weight="bold" />
          </button>

          <div className="about-pagination flex min-w-0 flex-1 items-center justify-center gap-2 [&_.swiper-pagination-bullet]:size-2 [&_.swiper-pagination-bullet]:shrink-0 [&_.swiper-pagination-bullet]:cursor-pointer [&_.swiper-pagination-bullet]:rounded-full [&_.swiper-pagination-bullet]:bg-muted-foreground/40 [&_.swiper-pagination-bullet]:transition-all [&_.swiper-pagination-bullet-active]:w-5 [&_.swiper-pagination-bullet-active]:bg-primary" />

          <button
            type="button"
            aria-label="Next slide"
            className="about-next flex size-9 shrink-0 items-center justify-center rounded-full transition-colors hover:bg-background"
          >
            <CaretRightIcon size={22} weight="bold" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default AboutSnippet;

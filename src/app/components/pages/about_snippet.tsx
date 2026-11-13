"use client";

import { fade } from "@/lib/motion";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { CaretLeftIcon, CaretRightIcon } from "@phosphor-icons/react";
import { images } from "@/lib/images";

import "swiper/css";

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
          speed={800}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          navigation={{ prevEl: ".about-prev", nextEl: ".about-next" }}
          pagination={{ el: ".about-pagination", clickable: true }}
          className="aspect-4/3 w-full overflow-hidden rounded-2xl sm:aspect-16/10 sm:rounded-3xl lg:aspect-4/3 [&_.swiper-wrapper]:ease-[cubic-bezier(0.22,1,0.36,1)]"
        >
          {images.about.map((slide) => (
            <SwiperSlide
              key={slide.id}
              className="relative h-full overflow-hidden"
            >
              {({ isActive }) => (
                <motion.div
                  className="absolute inset-0"
                  initial={false}
                  animate={{ scale: isActive ? 1 : 1.15 }}
                  transition={
                    isActive
                      ? { duration: 5, ease: "easeOut" }
                      : { duration: 0, delay: 0.8 }
                  }
                >
                  <Image
                    src={slide.src}
                    alt={slide.alt}
                    fill
                    sizes="(min-width: 768px) 55vw, 90vw"
                    className="object-cover"
                  />
                </motion.div>
              )}
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="flex h-12 w-auto max-w-full items-center justify-between gap-3 rounded-full bg-muted px-3">
          <button
            type="button"
            aria-label="Previous slide"
            className="about-prev flex size-9 shrink-0 items-center justify-center rounded-full transition-colors hover:bg-background"
          >
            <CaretLeftIcon size={22} weight="bold" />
          </button>

          <div className="about-pagination flex min-w-0 flex-1 items-center justify-center gap-1 sm:gap-2 [&_.swiper-pagination-bullet]:size-2 [&_.swiper-pagination-bullet]:shrink-0 [&_.swiper-pagination-bullet]:cursor-pointer [&_.swiper-pagination-bullet]:rounded-full [&_.swiper-pagination-bullet]:bg-muted-foreground/40 [&_.swiper-pagination-bullet]:transition-all [&_.swiper-pagination-bullet-active]:w-5 [&_.swiper-pagination-bullet-active]:bg-primary" />

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

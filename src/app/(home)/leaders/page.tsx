"use client";

import { useState } from "react";
import Image from "next/image";
import { images } from "@/lib/images";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
} from "@/app/components/ui/dialog";

const leaders = [
  {
    name: "Pastor Nelson Apata",
    role: "Pastor in Charge",
    image: images.leaders.pastor,
    description:
      "Pastor Nelson serves as Pastor in Charge, helping guide the congregation and ministry of New Dawn Assembly.",
  },
  {
    name: "Pastor's Wife",
    role: "Assistant Pastor",
    image: images.leaders.pastorWife,
    description:
      "As Assistant Pastor, she serves with Pastor Nelson in the leadership of New Dawn Assembly.",
  },
];

export default function LeadersPage() {
  const [selectedLeader, setSelectedLeader] = useState<
    (typeof leaders)[number] | null
  >(null);

  return (
    <section className="mx-auto w-full max-w-6xl px-5 pb-20 pt-32 md:pb-24">
      <header className="mx-auto max-w-3xl text-center">
        <h1 className="text-4xl font-bold md:text-5xl">Meet our leaders</h1>
        <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-[#5b5850]">
          Pastor Nelson Apata and his wife serve New Dawn Assembly as Pastor in
          Charge and Assistant Pastor.
        </p>
      </header>

      <div className="mt-12 grid grid-cols-1 gap-12 md:mt-16 md:grid-cols-2 md:gap-8">
        {leaders.map((leader) => (
          <button
            key={leader.name}
            type="button"
            aria-label={`View profile for ${leader.name}`}
            aria-haspopup="dialog"
            onClick={() => setSelectedLeader(leader)}
            className="group flex flex-col items-center text-center focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary"
          >
            <span className="relative block size-40 overflow-hidden rounded-full ring-4 ring-primary/20 md:size-48">
              <Image
                src={leader.image}
                alt={leader.name}
                fill
                sizes="(min-width: 768px) 192px, 160px"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </span>
            <span className="mt-5 block text-2xl font-bold">{leader.name}</span>
            <span className="mt-1 block text-sm text-[#5b5850]">
              {leader.role}
            </span>
            <span className="mt-3 block text-sm underline underline-offset-4 decoration-primary/60">
              View profile
            </span>
          </button>
        ))}
      </div>

      <Dialog
        open={selectedLeader !== null}
        onOpenChange={(open) => {
          if (!open) setSelectedLeader(null);
        }}
      >
        {selectedLeader && (
          <DialogContent className="max-h-[calc(100dvh-2rem)] max-w-3xl overflow-y-auto p-0 sm:max-w-3xl">
            <div className="flex flex-col md:flex-row">
              <div className="relative aspect-[4/3] w-full md:aspect-auto md:min-h-[30rem] md:w-1/2 md:shrink-0">
                <Image
                  src={selectedLeader.image}
                  alt={selectedLeader.name}
                  fill
                  sizes="(min-width: 768px) 24rem, 100vw"
                  className="object-cover"
                />
              </div>
              <div className="flex flex-col justify-center p-6 pt-12 sm:p-8 sm:pt-12 md:w-1/2">
                <DialogTitle className="text-3xl font-bold leading-tight">
                  {selectedLeader.name}
                </DialogTitle>
                <DialogDescription className="mt-3 text-base font-semibold text-primary">
                  {selectedLeader.role}
                </DialogDescription>
                <p className="mt-5 text-base leading-relaxed text-[#5b5850]">
                  {selectedLeader.description}
                </p>
              </div>
            </div>
          </DialogContent>
        )}
      </Dialog>
    </section>
  );
}

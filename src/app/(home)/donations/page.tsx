"use client";
import CustomBtn from "@/app/components/common/CustomBtn";
import { CheckIcon, CopyIcon, WhatsappLogoIcon } from "@phosphor-icons/react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { motion, type Variants } from "framer-motion";
import home_background from "@/assets/donation.jpg";

const whatsappNumber = "2348000000000";
const whatsappMessage =
  "Hello, I just made a donation to New Dawn Assembly. Here is my payment confirmation.";

const accounts = [
  {
    bank: "Polaris Bank",
    purpose: "Tithes & Offering",
    number: "4091281426",
  },
  {
    bank: "Zenith Bank",
    purpose: "Project & Development",
    number: "1226496990",
  },
];

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.2, delayChildren: 0.3 } },
};

const item: Variants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
};

const Donations = () => {
  const [copied, setCopied] = useState<string | null>(null);

  const copyAccount = async (number: string) => {
    await navigator.clipboard.writeText(number);
    setCopied(number);
    setTimeout(() => setCopied(null), 2000);
  };

  return (
    <div className="w-full min-h-screen flex flex-col items-center justify-center relative overflow-hidden">
      <motion.div
        className="absolute inset-0"
        initial={{ scale: 1.15 }}
        animate={{ scale: 1 }}
        transition={{ duration: 10, ease: "easeOut" }}
      >
        <Image
          src={home_background}
          alt="Donations Background"
          fill
          priority
          className="object-cover"
        />
      </motion.div>

      <div className="min-h-screen w-full flex justify-center items-center bg-black/70 relative p-6 py-20">
        <motion.div
          className="max-w-3xl w-full text-center space-y-6 relative z-10 text-white"
          variants={container}
          initial="hidden"
          animate="show"
        >
          <motion.h1
            variants={item}
            className="text-4xl tracking-widest text-primary"
          >
            ONLINE GIVING
          </motion.h1>

          <motion.h4
            variants={item}
            className="underline underline-offset-8 decoration-2 decoration-primary text-2xl"
          >
            Give to the work of God
          </motion.h4>

          <motion.p
            variants={item}
            className="leading-relaxed text-lg md:text-xl mt-4"
          >
            Send your gift to the appropriate account below, then confirm your
            payment on WhatsApp.
          </motion.p>

          <motion.div
            variants={item}
            className="grid gap-4 md:grid-cols-2 text-left"
          >
            {accounts.map(({ bank, purpose, number }) => (
              <div
                key={number}
                className="rounded-lg border border-white/20 bg-white/10 p-5 backdrop-blur-md"
              >
                <p className="text-xs uppercase tracking-widest text-white/60">
                  {purpose} Account
                </p>
                <p className="mt-1 text-lg font-medium">{bank}</p>
                <div className="mt-3 flex items-center justify-between">
                  <span className="text-2xl font-semibold tracking-wider">
                    {number}
                  </span>
                  <button
                    onClick={() => copyAccount(number)}
                    aria-label={`Copy ${bank} account number`}
                    className="flex items-center gap-1.5 text-sm transition hover:text-white/60"
                  >
                    {copied === number ? (
                      <CheckIcon size={18} />
                    ) : (
                      <CopyIcon size={18} />
                    )}
                    {copied === number ? "Copied" : "Copy"}
                  </button>
                </div>
              </div>
            ))}
          </motion.div>

          <motion.div
            variants={item}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block"
          >
            <Link
              href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
                whatsappMessage,
              )}`}
              target="_blank"
            >
              <CustomBtn
                variant="secondary"
                children="Confirm payment"
                icon={<WhatsappLogoIcon weight="fill" fill="#25D366" />}
                iconPosition="right"
              />
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Donations;

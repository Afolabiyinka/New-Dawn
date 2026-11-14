"use client";

import Link from "next/link";
import { EMAIL, PHONE_DISPLAY, socialLinks } from "@/lib/page-data";
import { ArrowUpIcon } from "@phosphor-icons/react/dist/ssr";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Contact", href: "/contact" },
];

const Footer = () => {
  return (
    <footer
      id="visit"
      className="relative rounded-t-[3rem] border-t border-black/10 bg-white text-black md:rounded-t-[5rem]"
    >
      <div className="mx-auto max-w-7xl px-6 pb-10 pt-20 md:pt-28">
        <div className="grid gap-12 md:grid-cols-3 md:gap-10">
          {/* Keep in touch */}
          <div className="space-y-5">
            <h3 className="text-2xl font-semibold text-black">Keep in Touch</h3>
            <a
              href="tel:+2348000000000"
              className="block text-black/60 transition hover:text-black"
            >
              {PHONE_DISPLAY}
            </a>
            <a
              href={`mailto:${EMAIL}`}
              className="block text-black/60 transition hover:text-black"
            >
              {EMAIL}
            </a>

            {/* Socials */}
            <div className="flex items-center gap-3 pt-2">
              {socialLinks.map(({ label, href, Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="flex size-11 items-center justify-center rounded-full bg-black text-white shadow-lg shadow-black/20 transition-all duration-300 hover:-translate-y-1.5 hover:scale-110 hover:shadow-[0_8px_30px_-4px_rgba(0,0,0,0.5)]"
                >
                  <Icon size={20} weight="fill" />
                </a>
              ))}
            </div>
          </div>

          {/* Location */}
          <div className="space-y-5">
            <h3 className="text-2xl font-semibold text-black">
              Church Location
            </h3>
            <p className="max-w-xs leading-8 text-black/60">
              18 Popoola Oladunni Street, Off Isijola Street, Ikotun, Lagos.
            </p>
          </div>

          {/* Stay connected */}
          <div className="space-y-5">
            <h3 className="text-2xl font-semibold text-black">
              Stay Connected
            </h3>
            <p className="max-w-sm leading-8 text-black/60">
              Sign up with your email address to receive newsletters from New
              Dawn Assembly.
            </p>
          </div>
        </div>

        {/* Bottom row */}
        <div className="mt-20 flex flex-col gap-6 border-t border-black/10 pt-8 md:flex-row md:items-center md:justify-between">
          <nav className="flex flex-wrap gap-8">
            {navLinks.map(({ label, href }, i) => (
              <Link
                key={label}
                href={href}
                className={`text-sm font-semibold uppercase tracking-wide transition hover:text-black ${
                  i === 0 ? "text-black" : "text-black/60"
                }`}
              >
                {label}
              </Link>
            ))}
          </nav>

          <p className="text-sm text-black/50">
            © {new Date().getFullYear()} - All Rights Reserved - New Dawn
            Assembly.
          </p>
        </div>
      </div>

      {/* Back to top */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        aria-label="Back to top"
        className="fixed bottom-8 right-8 z-50 flex size-14 items-center justify-center rounded-full bg-primary text-white shadow-xl transition hover:scale-110"
      >
        <ArrowUpIcon size={24} weight="bold" />
      </button>
    </footer>
  );
};

export default Footer;

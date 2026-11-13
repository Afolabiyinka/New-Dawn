import { socials } from "@/app/(home)/contact/page";
import { programs } from "../../pages/worship_snippet";
import Logo from "../Logo";
import {
  ClockIcon,
  EnvelopeSimpleIcon,
  MapPinIcon,
  PhoneIcon,
  ArrowUpRightIcon,
} from "@phosphor-icons/react/dist/ssr";
import { Button } from "../../ui/button";

const Footer = () => {
  return (
    <footer id="visit" className="border-t border-black/10 bg-[#faf9f6]">
      <div className="mx-auto max-w-7xl px-6 py-16 md:py-20">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr] lg:gap-16">
          {/* Brand */}
          <div className="space-y-6">
            <Logo />

            <p className="max-w-sm text-sm leading-7 text-black/60">
              A place to encounter God, grow in faith, and build meaningful
              relationships. We would love to worship with you.
            </p>

            <div className="flex items-start gap-3 text-sm leading-6 text-black/60">
              <MapPinIcon
                size={19}
                weight="regular"
                className="mt-0.5 shrink-0 text-black"
              />
              <span className="max-w-xs">
                18 Popoola Oladunni Street, Off Isijola Street, Ikotun, Lagos.
              </span>
            </div>

            <div className="flex items-center gap-2 pt-1">
              {socials.map(({ label, href, Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="flex size-10 items-center justify-center rounded-full border border-black/10 text-black/60 transition-all duration-300 hover:border-black hover:bg-black hover:text-white"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Service times */}
          <div>
            <h3 className="mb-7 text-xs font-semibold uppercase tracking-[0.18em] text-black">
              Join us for worship
            </h3>

            <ul className="space-y-5">
              {programs.map((program, i) => (
                <li key={i} className="flex items-start gap-3">
                  <ClockIcon
                    size={19}
                    className="mt-0.5 shrink-0 text-black/50"
                  />
                  <div className="space-y-1">
                    <p className="text-sm font-medium text-black">
                      {program.day}
                    </p>
                    <p className="text-sm text-black/50">{program.time}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="mb-7 text-xs font-semibold uppercase tracking-[0.18em] text-black">
              Get in touch
            </h3>

            <ul className="space-y-5">
              <li>
                <a
                  href="mailto:newdawn@gmail.com"
                  className="group flex items-center gap-3 text-sm text-black/60 transition hover:text-black"
                >
                  <EnvelopeSimpleIcon size={19} className="shrink-0" />
                  <span>newdawn@gmail.com</span>
                  <ArrowUpRightIcon
                    size={14}
                    className="opacity-0 transition group-hover:opacity-100"
                  />
                </a>
              </li>

              <li>
                <a
                  href="tel:+2348000000000"
                  className="group flex items-center gap-3 text-sm text-black/60 transition hover:text-black"
                >
                  <PhoneIcon size={19} className="shrink-0" />
                  <span>+234 800 000 0000</span>
                  <ArrowUpRightIcon
                    size={14}
                    className="opacity-0 transition group-hover:opacity-100"
                  />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-black/10">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-6 py-6 text-xs text-black/40 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} New Dawn Assembly. All rights reserved.
          </p>

          <Button
            variant={`ghost`}
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            Back to top ↑
          </Button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

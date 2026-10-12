import React from "react";
import {
  Clock,
  EnvelopeSimple,
  FacebookLogo,
  InstagramLogo,
  MapPin,
  Phone,
  YoutubeLogo,
} from "@phosphor-icons/react";
import Logo from "../Logo";

const socials = [
  { label: "Facebook", href: "#", icon: FacebookLogo },
  { label: "Instagram", href: "#", icon: InstagramLogo },
  { label: "YouTube", href: "#", icon: YoutubeLogo },
];

const Footer = () => {
  return (
    <footer id="visit" className="border-t border-black/10 pt-16">
      <div className="max-w-6xl mx-auto px-6 grid gap-12 md:grid-cols-3 text-sm text-black/70">
        {/* Brand */}
        <div className="space-y-5">
          <Logo />
          <p className="flex items-start gap-3 leading-relaxed">
            <MapPin size={16} className="mt-0.5 shrink-0 text-black" />
            18 Popoola Oladunni Street, Off Isijola Street, Ikotun, Lagos.
          </p>
          <div className="flex gap-3 pt-1">
            {socials.map(({ label, href, icon: Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="flex size-9 items-center justify-center rounded-full border border-black/20 text-black transition hover:border-black hover:bg-black hover:text-white"
              >
                <Icon size={18} />
              </a>
            ))}
          </div>
        </div>

        {/* Service times */}
        <div>
          <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-black">
            Service times
          </p>
          <ul className="space-y-3">
            <li className="flex items-start gap-3">
              <Clock size={16} className="mt-0.5 shrink-0 text-black" />
              <span>
                <span className="block text-black">Sunday</span>
                9:00 AM &amp; 11:30 AM
              </span>
            </li>
            <li className="flex items-start gap-3">
              <Clock size={16} className="mt-0.5 shrink-0 text-black" />
              <span>
                <span className="block text-black">Wednesday Bible Study</span>
                6:00 PM
              </span>
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-black">
            Contact
          </p>
          <ul className="space-y-3">
            <li>
              <a
                href="mailto:newdawn@gmail.com"
                className="flex items-center gap-3 transition hover:text-black"
              >
                <EnvelopeSimple size={16} className="shrink-0 text-black" />
                newdawn@gmail.com
              </a>
            </li>
            <li>
              <a
                href="tel:+2348000000000"
                className="flex items-center gap-3 transition hover:text-black"
              >
                <Phone size={16} className="shrink-0 text-black" />
                +234 800 000 0000
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="mt-14 border-t border-black/10 py-6">
        <p className="max-w-6xl mx-auto px-6 text-xs text-black/50 text-center md:text-left">
          &copy; {new Date().getFullYear()} New Dawn Assembly. All rights
          reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;

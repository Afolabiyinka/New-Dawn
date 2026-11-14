"use client";
import { Button } from "@/app/components/ui/button";
import { PaperPlaneRightIcon, WhatsappLogoIcon } from "@phosphor-icons/react";
import { EMAIL, PHONE_DISPLAY, socialLinks } from "@/lib/page-data";

import { useState } from "react";

const field =
  "w-full border-b border-[#1F3D2B]/30 bg-transparent py-3 text-lg text-[#1F3D2B] placeholder:text-[#5b5850]/50 focus:border-[#1F3D2B] focus:outline-none";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const update =
    (key: keyof typeof form) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
      setForm((f) => ({ ...f, [key]: e.target.value }));

  // No backend yet: opens the visitor's mail app with the message filled in.
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Message from ${form.name}`);
    const body = encodeURIComponent(
      `${form.message}\n\n${form.name}\n${form.email}`,
    );
    window.location.href = `mailto:${EMAIL}?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="pt-36 pb-24">
      <div className="max-w-5xl mx-auto px-6 grid md:grid-cols-2 gap-16">
        <div>
          <h2 className="text-4xl mb-6">Contact us</h2>
          <p className="text-lg leading-relaxed text-[#5b5850] max-w-sm">
            Questions, prayer requests, or coming for the first time? Call,
            message or write to us.
          </p>

          <dl className="mt-12 space-y-8">
            <div>
              <dt className="text-sm text-[#5b5850]">Phone and WhatsApp</dt>
              <dd className="mt-1 text-2xl text-[#1F3D2B]">
                <a
                  href="tel:+2349053825497"
                  className="hover:underline underline-offset-4"
                >
                  {PHONE_DISPLAY}
                </a>
                <a
                  href="https://wa.me/2349053825497"
                  target="_blank"
                  rel="noreferrer"
                  className="ml-4 text-base text-[#B8873F] underline underline-offset-4"
                >
                  Chat on WhatsApp
                </a>
              </dd>
            </div>
            <div>
              <dt className="text-sm text-[#5b5850]">Email</dt>
              <dd className="mt-1 break-all text-2xl text-[#1F3D2B]">
                <a
                  href={`mailto:${EMAIL}`}
                  className="hover:underline underline-offset-4"
                >
                  {EMAIL}
                </a>
              </dd>
            </div>
            <div>
              <dt className="text-sm text-[#5b5850]">
                Follow us @rccgnewdawnassemblylp72
              </dt>
              <dd className="mt-3 flex gap-4">
                {socialLinks.map(({ label, href, Icon }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={label}
                    className="flex h-16 w-16 items-center justify-center rounded-full border border-[#1F3D2B]/30 text-[#1F3D2B] transition hover:border-[#B8873F] hover:bg-[#B8873F] hover:text-white"
                  >
                    <Icon size={32} />
                  </a>
                ))}
              </dd>
            </div>
          </dl>
        </div>

        <form onSubmit={handleSubmit} className="space-y-8">
          <input
            required
            aria-label="Your name"
            placeholder="Your name"
            value={form.name}
            onChange={update("name")}
            className={field}
          />
          <input
            required
            type="email"
            aria-label="Your email"
            placeholder="Your email"
            value={form.email}
            onChange={update("email")}
            className={field}
          />
          <textarea
            required
            rows={4}
            aria-label="Message"
            placeholder="Your message"
            value={form.message}
            onChange={update("message")}
            className={field}
          />
          {/* <button
            type="submit"
            className="rounded-md bg-[#1F3D2B] px-6 py-3 text-white transition hover:bg-[#2a5239]"
          >
            Send
          </button> */}
          <div className="flex gap-3">
            <Button>
              Send through email <PaperPlaneRightIcon />
            </Button>
            <Button className={`bg-[#1F3D2B] text-white`}>
              Send through whatsapp <WhatsappLogoIcon />
            </Button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;

"use client";
import { AnimatePresence, motion } from "motion/react";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Logo from "../Logo";
import MenuButton from "../menubutton";
import { navItems } from "@/lib/nav";
import Link from "next/link";
import { linkVariants, menuVariants } from "@/lib/motion";
import { Button } from "../../ui/button";

const MobileNav = () => {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    if (!open) return;

    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  const MotionLink = motion.create(Link);

  return (
    <>
      <div className="flex w-full items-center justify-between bg-background/90 p-5 backdrop-blur-sm">
        <Logo />
        <MenuButton open={open} onClick={() => setOpen((o) => !o)} />
      </div>

      <AnimatePresence>
        {open && (
          <motion.nav
            role="dialog"
            aria-modal="true"
            aria-label="Navigation menu"
            variants={menuVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="fixed inset-0 z-50 flex h-dvh w-screen flex-col items-center justify-center bg-background"
          >
            <div className="flex flex-col items-center gap-10">
              {navItems.map(({ href, title, icon: Icon }, i) => {
                const isActive = pathname === href;

                return (
                  <MotionLink
                    key={href}
                    href={href}
                    onClick={() => setOpen(false)}
                    variants={linkVariants}
                    whileTap={{ scale: 0.97 }}
                    className={`flex items-center gap-2 text-3xl tracking-tight transition ${
                      isActive
                        ? "underline underline-offset-8 decoration-2 decoration-primary/50"
                        : ""
                    }`}
                  >
                    <Icon
                      className="h-6 w-6"
                      weight={isActive ? "bold" : "regular"}
                    />
                    {title}
                  </MotionLink>
                );
              })}
            </div>
            <Link
              href={`/contact`}
              onClick={() => setOpen(false)}
              className="mt-10"
            >
              <Button>Contact Us</Button>
            </Link>
          </motion.nav>
        )}
      </AnimatePresence>
    </>
  );
};

export default MobileNav;

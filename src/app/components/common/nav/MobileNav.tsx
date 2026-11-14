"use client";
import { AnimatePresence, motion } from "motion/react";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Logo from "../Logo";
import MenuButton from "../menubutton";
import { navItems } from "@/lib/nav";

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

  return (
    <>
      <div className="flex w-full items-center justify-between bg-background/90 p-3 backdrop-blur-sm">
        <Logo />
        <MenuButton open={open} onClick={() => setOpen((o) => !o)} />
      </div>

      <AnimatePresence>
        {open && (
          <motion.nav
            role="dialog"
            aria-modal="true"
            aria-label="Navigation menu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-50 flex h-dvh w-screen flex-col items-center justify-center bg-background"
          >
            <div className="flex flex-col items-center gap-10">
              {navItems.map(({ href, title, icon: Icon }, i) => {
                const isActive = pathname === href;

                return (
                  <motion.a
                    key={href}
                    href={href}
                    onClick={() => setOpen(false)}
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 + i * 0.08 }}
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
                  </motion.a>
                );
              })}
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </>
  );
};

export default MobileNav;

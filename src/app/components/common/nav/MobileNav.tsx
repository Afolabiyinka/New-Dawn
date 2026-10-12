import { motion } from "motion/react";
import { useState } from "react";
import { useLocation } from "react-router";
import { Dialog, DialogContent, DialogTitle } from "@/app/components/ui/dialog";
import Logo from "../Logo";
import MenuButton from "../menubutton";
import { navItems } from "@/lib/nav";
import { usePathname } from "next/navigation";

const MobileNav = () => {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const activeHash = pathname;

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <div className="fixed top-0 z-40 flex w-full flex-col items-center justify-between bg-background/90 p-4 backdrop-blur-sm">
        <span className="flex w-full items-center justify-between">
          <Logo />
          <MenuButton open={open} onClick={() => setOpen(!open)} />
        </span>

        <DialogContent
          className="max-w-xs rounded-3xl p-8"
          showCloseButton={false}
        >
          <DialogTitle className="sr-only">Navigation menu</DialogTitle>
          <div className="flex flex-col items-center gap-8">
            {navItems.map(({ href, title, icon: Icon }, i) => {
              const isActive = activeHash === href;

              return (
                <motion.a
                  key={href}
                  href={href}
                  onClick={() => setOpen(false)}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.08 }}
                  className={`relative flex items-center gap-1 text-xl tracking-tight transition ${
                    pathname === href
                      ? "underline underline-offset-8 decoration-2 decoration-primary/50"
                      : ""
                  }`}
                >
                  <Icon
                    className="h-5 w-5"
                    weight={isActive ? "bold" : "regular"}
                  />
                  {title}
                  {isActive && (
                    <motion.span
                      layoutId="mobile-nav-underline"
                      className="absolute -bottom-2 left-0 right-0 h-0.5 rounded-full bg-primary-blue"
                    />
                  )}
                </motion.a>
              );
            })}
          </div>
        </DialogContent>
      </div>
    </Dialog>
  );
};

export default MobileNav;

import Logo from "../Logo";
import { navItems } from "@/lib/nav";
import Link from "next/link";
import { Button } from "../../ui/button";
import { usePathname } from "next/navigation";

const DesktopNav = () => {
  const pathname = usePathname();

  return (
    <div className="hidden lg:flex justify-center items-center h-full w-full ">
      <div className="w-[80%] items-center justify-around gap-8  p-2 px-4  md:flex rounded-full backdrop-blur-lg bg-muted fixed top-3 z-50">
        <Logo />

        <nav className="flex gap-10">
          {navItems.map(({ href, icon: Icon, title }) => (
            <Link
              href={href}
              key={title}
              className={`flex items-center text-sm gap-2 transition-colors hover:underline hover:underline-offset-8 ${
                pathname === href
                  ? "underline underline-offset-8 decoration-2 decoration-primary/50"
                  : ""
              }`}
            >
              <Icon
                className="h-5 w-5"
                weight={pathname === href ? "bold" : "regular"}
              />
              <span>{title}</span>
            </Link>
          ))}
        </nav>

        <Button>Contact Us</Button>
      </div>
    </div>
  );
};

export default DesktopNav;

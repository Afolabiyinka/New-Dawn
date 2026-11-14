import Logo from "../Logo";
import { navItems } from "@/lib/nav";
import Link from "next/link";
import { Button } from "../../ui/button";
import { usePathname } from "next/navigation";

const DesktopNav = () => {
  const pathname = usePathname();

  return (
    <div className="w-full  hidden lg:flex items-center justify-around gap-8  p-4 px-4  md:flex top-0  backdrop-blur-lg">
      <Logo />

      <nav className="flex gap-10">
        {navItems.map(({ href, icon: Icon, title }) => (
          <Link
            href={href}
            key={title}
            className={`flex items-center text-sm gap-2 transition-colors hover:underline hover:underline-offset-8 ${
              pathname === href
                ? "underline underline-offset-4 decoration-2 decoration-primary/50"
                : ""
            }`}
          >
            <Icon
              className="h-5 w-5"
              weight={pathname === href ? "fill" : "regular"}
            />
            <span>{title}</span>
          </Link>
        ))}
      </nav>

      <Link href={`/contact`}>
        <Button>Contact Us</Button>
      </Link>
    </div>
    // </div>
  );
};

export default DesktopNav;

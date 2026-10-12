import React from "react";
import Image from "next/image";
import logo from "@/assets/RCCG Logo Sticker – Redemption Store.jpg";
import { usePathname } from "next/navigation";
import Link from "next/link";

const Logo = () => {
  const location = usePathname();
  return (
    <Link className="flex items-center gap-2" href={`/`}>
      <Image src={logo} alt="Logo" className="h-10 w-10 rounded-full" />
      <p className={`text-lg lg:text-sm font-extrabold`}>New Dawn Assembly</p>
    </Link>
  );
};

export default Logo;

"use client";

import { useIsMobile } from "@/hooks/useMobile";
import DesktopNav from "./DesktopNav";
import MobileNav from "./MobileNav";

const NavLayout = () => {
  const isMobile = useIsMobile(1024);
  return (
    <div className="bg-background/50 backdrop-blur-lg ">
      <DesktopNav />

      {isMobile && <MobileNav />}
    </div>
  );
};

export default NavLayout;

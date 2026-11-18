"use client";

import { useIsMobile } from "@/hooks/useMobile";
import DesktopNav from "./DesktopNav";
import MobileNav from "./MobileNav";

const NavLayout = () => {
  const isMobile = useIsMobile();
  return (
    <div className="bg-background/50 backdrop-blur-lg ">
      {isMobile ? <MobileNav /> : <DesktopNav />}
    </div>
  );
};

export default NavLayout;

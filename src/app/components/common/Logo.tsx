import Image from "next/image";
import { images } from "@/lib/images";
import { usePathname } from "next/navigation";
import Link from "next/link";

const Logo = () => {
  const location = usePathname();
  return (
    <Link className="flex items-center gap-2" href={`/`}>
      <Image src={images.logo} alt="Logo" className="h-10 w-10 rounded-full" />
      <p
        className={`text-md lg:text-sm font-extrabold uppercase tracking-wide`}
      >
        New Dawn Assembly
      </p>
    </Link>
  );
};

export default Logo;

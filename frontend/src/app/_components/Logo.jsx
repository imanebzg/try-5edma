import Image from "next/image";
import Link from "next/link";
import logo from "@/public/hackin-logo.png";

function Logo() {
  return (
    <Link href="/">
      <Image
        src={logo}
        height="120"
        width="120"
        className="max-md:w-24 max-md:h-9"
        alt="TryKhedme"
        quality={90}
      />
    </Link>
  );
}

export default Logo;

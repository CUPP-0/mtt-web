"use client";

import Image from "next/image";
import Link from "next/link";

interface Props {
  scrolled: boolean;
}

export default function Logo({ scrolled }: Props) {
  return (
    <Link href="/" className="flex items-center">
      <Image
        src={scrolled ? "/logo-mitra.png" : "/logo-mitra.png"}
        alt="MTT Logo"
        width={170}
        height={48}
        priority
        className="h-10 w-auto transition-all duration-300"
      />
    </Link>
  );
}
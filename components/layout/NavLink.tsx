"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";

interface Props {
  title: string;
  href: string;
  scrolled: boolean;
}

export default function NavLink({
  title,
  href,
  scrolled,
}: Props) {
  const pathname = usePathname();

  const active = pathname === href;

  return (
    <Link
      href={href}
      className={clsx(
        "group relative py-2 font-medium transition",
        scrolled
          ? "text-slate-700 hover:text-[#0B4EA2]"
          : "text-white hover:text-white",
        active &&
          (scrolled ? "text-[#0B4EA2]" : "text-white")
      )}
    >
      {title}

      <span
        className={clsx(
          "absolute bottom-0 left-0 h-[2px] bg-[#00A9E0] transition-all duration-300",
          active ? "w-full" : "w-0 group-hover:w-full"
        )}
      />
    </Link>
  );
}
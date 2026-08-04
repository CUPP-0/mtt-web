"use client";

import { navigation } from "@/constants/navigation";
import NavLink from "./NavLink";

interface Props {
  scrolled: boolean;
}

export default function DesktopNav({
  scrolled,
}: Props) {
  return (
    <div className="hidden items-center gap-10 lg:flex">
      {navigation.map((item) => (
        <NavLink
          key={item.href}
          title={item.title}
          href={item.href}
          scrolled={scrolled}
        />
      ))}
    </div>
  );
}
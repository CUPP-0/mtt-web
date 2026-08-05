"use client";

import clsx from "clsx";

import Container from "./Container";
import Logo from "./Logo";
import DesktopNav from "./DesktopNav";
import MobileNav from "./MobileNav";

import useNavbar from "@/hooks/useNavbar";
import Link from "next/link";

export default function Navbar() {
  const scrolled = useNavbar();

  return (
    <header
      className={clsx(
        "fixed inset-x-0 top-0 z-50 transition-all duration-500",
        scrolled ? "pt-3" : "pt-0"
      )}
    >
      <Container>
        <div
          className={clsx(
            "flex items-center justify-between transition-all duration-500",
            scrolled
              ? "h-20 rounded-full bg-white/90 px-8 shadow-xl backdrop-blur-xl"
              : "h-24"
          )}
        >
          <Logo scrolled={scrolled} />

          <DesktopNav scrolled={scrolled} />

          <div className="hidden lg:block">
            <Link
  href="/contact-proposal"
  className={clsx(
    "rounded-full px-6 py-3 font-semibold transition-all duration-300",
    scrolled
      ? "bg-gradient-to-r from-[#0B4EA2] to-[#00A9E0] text-white shadow-lg hover:scale-105"
      : "border border-white text-white hover:bg-white hover:text-[#0B4EA2]"
  )}
>
  Request Proposal
</Link>
          </div>

          <MobileNav scrolled={scrolled} />
        </div>
      </Container>
    </header>
  );
}
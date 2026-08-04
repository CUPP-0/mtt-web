"use client";

import Link from "next/link";
import { Menu } from "lucide-react";

import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";

import { navigation } from "@/constants/navigation";

interface Props {
  scrolled: boolean;
}

export default function MobileNav({ scrolled }: Props) {
  return (
    <div className="lg:hidden">
      <Sheet>
        <SheetTrigger className="lg:hidden">
  <Menu
    size={28}
    className={scrolled ? "text-slate-700" : "text-white"}
  />
</SheetTrigger>

        <SheetContent side="right" className="w-[320px]">
          <div className="mt-12 flex flex-col gap-7">
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-lg font-medium"
              >
                {item.title}
              </Link>
            ))}

            <button
              type="button"
              className="mt-5 rounded-full bg-[#0B4EA2] px-5 py-3 text-white"
            >
              Request Proposal
            </button>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
}
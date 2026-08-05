"use client";

import Link from "next/link";
import { Menu, ArrowRight, Phone, Mail } from "lucide-react";

import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";

import Logo from "./Logo";
import { navigation } from "@/constants/navigation";

interface Props {
  scrolled: boolean;
}

export default function MobileNav({ scrolled }: Props) {
  return (
    <div className="lg:hidden">
      <Sheet>
        <SheetTrigger className="flex items-center">
          <Menu
            size={28}
            className={scrolled ? "text-slate-700" : "text-white"}
          />
        </SheetTrigger>

        <SheetContent side="right" className="flex w-[340px] flex-col p-0">
          {/* Header */}
          <div className="border-b border-slate-200 p-8">
            <Logo scrolled />

            <p className="mt-3 text-sm leading-6 text-slate-500">
              Corporate Travel &
              <br />
              Business Solution
            </p>
          </div>

          {/* Navigation */}
          <div className="flex-1 px-8 py-8">
            <p className="mb-6 text-sm font-semibold uppercase tracking-[0.2em] text-slate-400">
              Navigation
            </p>

            <div className="space-y-2">
              {navigation.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="group flex items-center justify-between rounded-2xl px-4 py-4 font-medium text-slate-700 transition hover:bg-blue-50 hover:text-[#0B4EA2]"
                >
                  {item.title}

                  <ArrowRight
                    size={18}
                    className="transition group-hover:translate-x-1"
                  />
                </Link>
              ))}
            </div>

            <Link
              href="/request-proposal"
              className="mt-8 flex w-full items-center justify-center rounded-full bg-gradient-to-r from-[#0B4EA2] to-[#00A9E0] px-6 py-4 font-semibold text-white shadow-lg transition hover:scale-[1.02]"
            >
              Request Proposal
            </Link>
          </div>

          {/* Footer */}
          <div className="border-t border-slate-200 p-8">
            <div className="space-y-4 text-sm">
              <div className="flex items-center gap-3 text-slate-600">
                <Phone size={18} className="text-[#0B4EA2]" />
                <span>+62 21 xxxx xxxx</span>
              </div>

              <div className="flex items-center gap-3 text-slate-600">
                <Mail size={18} className="text-[#0B4EA2]" />
                <span>info@mitratourtravel.com</span>
              </div>
            </div>

            <div className="mt-8 border-t border-slate-100 pt-6 text-xs text-slate-400">
              © 2026 Mitra Tour & Travel
            </div>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
}
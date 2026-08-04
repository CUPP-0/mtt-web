"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
  <Image
    src="/hero-bg.jpg"
    alt="MTT Hero"
    fill
    priority
    className="object-cover object-center"
  />
</div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#001B3A]/85 via-[#002B5B]/70 to-[#003E7E]/55" />

      {/* Content */}
      <div className="relative z-10 flex h-full items-center">
        <div className="mx-auto w-full max-w-7xl px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-3xl text-white"
          >
            <div className="mb-6 inline-flex items-center rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-medium backdrop-blur-md">
              PT Mitra Tours & Travel
            </div>

            <h1 className="text-5xl font-bold leading-tight tracking-tight lg:text-7xl">
              Integrated Corporate Travel Solutions
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-white/85 lg:text-xl">
              Solusi perjalanan bisnis yang efisien, aman, dan terintegrasi
              untuk perusahaan modern. Kami membantu organisasi mengelola
              perjalanan dinas, MICE, hotel, dan transportasi dalam satu
              ekosistem layanan.
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Link
                href="/products"
                className="inline-flex items-center justify-center rounded-full bg-white px-7 py-4 text-base font-semibold text-[#0B4EA2] transition hover:scale-[1.02] hover:shadow-2xl"
              >
                Explore Business
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>

              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-full border border-white/30 bg-white/10 px-7 py-4 text-base font-semibold text-white backdrop-blur-md transition hover:bg-white hover:text-[#0B4EA2]"
              >
                Contact Us
              </Link>
            </div>

            {/* Service Pills */}
            <div className="mt-12 flex flex-wrap gap-3">
              {["Corporate Travel", "MICE", "Hotel", "Transportation"].map(
                (item) => (
                  <span
                    key={item}
                    className="rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm text-white backdrop-blur-md"
                  >
                    {item}
                  </span>
                )
              )}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2">
        <div className="flex flex-col items-center text-white/70">
          <span className="mb-2 text-xs tracking-[0.25em]">SCROLL</span>
          <div className="h-10 w-6 rounded-full border border-white/40 p-1">
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ repeat: Infinity, duration: 1.6 }}
              className="h-2 w-2 rounded-full bg-white"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
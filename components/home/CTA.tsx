import Image from "next/image";
import Link from "next/link";
import Container from "@/components/layout/Container";
import { ArrowRight, Phone } from "lucide-react";

export default function CTA() {
  return (
    <section className="relative overflow-hidden py-28">
      {/* Background Image */}
      <Image
        src="/cta.png"
        alt="CTA Background"
        fill
        priority
        className="object-cover"
      />

      {/* Overlay */}
<div className="absolute inset-0 bg-[#0B4EA2]/40" />

{/* Soft Gradient */}
<div className="absolute inset-0 bg-gradient-to-r from-[#0B4EA2]/25 via-transparent to-[#0B4EA2]/25" />

      <Container>
        <div className="relative z-10 mx-auto max-w-4xl text-center text-white">
          <span className="rounded-full border border-white/30 bg-white/10 px-4 py-2 text-sm font-medium backdrop-blur">
            Let's Work Together
          </span>

          <h2 className="mt-8 text-5xl font-bold leading-tight">
            Ready to Elevate
            <br />
            Your Business Travel?
          </h2>

          <p className="mx-auto mt-8 max-w-2xl text-lg leading-8 text-white/80">
            Discover integrated corporate travel, accommodation,
            transportation, and MICE solutions designed to support
            your business efficiently across Indonesia.
          </p>

          <div className="mt-12 flex flex-col justify-center gap-4 sm:flex-row">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-8 py-4 font-semibold text-[#0B4EA2] transition hover:scale-105"
            >
              <Phone size={18} />
              Contact Us
            </Link>

            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/40 px-8 py-4 font-semibold text-white transition hover:bg-white hover:text-[#0B4EA2]"
            >
              Request Proposal
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}
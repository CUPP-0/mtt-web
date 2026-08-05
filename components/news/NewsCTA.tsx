import Image from "next/image";
import Link from "next/link";
import Container from "@/components/layout/Container";

export default function NewsCTA() {
  return (
    <section className="relative overflow-hidden py-28">
      {/* Background */}
      <Image
        src="/cta-about.png"
        alt="Corporate Travel"
        fill
        className="object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-[#0B4EA2]/30" />

      <Container>
        <div className="relative z-10 mx-auto max-w-4xl text-center text-white">
          <span className="rounded-full border border-white/30 bg-white/10 px-4 py-2 text-sm font-semibold backdrop-blur">
            Stay Connected
          </span>

          <h2 className="mt-6 text-5xl font-bold leading-tight">
            Looking for a Reliable
            <br />
            Corporate Travel Partner?
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-white/90">
            From business trips and MICE events to integrated travel
            management, Mitra Tour & Travel is ready to support your company's
            journey.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className="rounded-full bg-white px-8 py-4 font-semibold text-[#0B4EA2] transition hover:scale-105"
            >
              Contact Us
            </Link>

            <Link
              href="/products"
              className="rounded-full border border-white/40 px-8 py-4 font-semibold text-white transition hover:bg-white hover:text-[#0B4EA2]"
            >
              Explore Services
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}
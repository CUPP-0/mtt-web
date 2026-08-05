import Image from "next/image";
import Link from "next/link";
import Container from "@/components/layout/Container";

export default function AboutCTA() {
  return (
    <section className="relative overflow-hidden py-28">
      {/* Background */}
      <Image
        src="/cta-about.png"
        alt="About CTA"
        fill
        className="object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-[#0B4EA2]/30" />

      <Container>
        <div className="relative z-10 mx-auto max-w-4xl text-center text-white">
          <span className="rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-medium backdrop-blur">
            Let's Work Together
          </span>

          <h2 className="mt-8 text-5xl font-bold leading-tight">
            Ready to Partner with MTT?
          </h2>

          <p className="mt-6 text-lg leading-8 text-white/85">
            We are committed to delivering reliable, efficient, and integrated
            corporate travel solutions that support your business growth across
            Indonesia.
          </p>

          <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
            <Link
              href="/contact"
              className="rounded-full bg-white px-8 py-4 font-semibold text-[#0B4EA2] transition hover:scale-105"
            >
              Contact Us
            </Link>

            <Link
              href="/products"
              className="rounded-full border border-white px-8 py-4 font-semibold text-white transition hover:bg-white hover:text-[#0B4EA2]"
            >
              Explore Our Services
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}
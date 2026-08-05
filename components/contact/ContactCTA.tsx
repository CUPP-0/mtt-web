import Image from "next/image";
import Link from "next/link";
import Container from "@/components/layout/Container";

export default function ContactCTA() {
  return (
    <section className="relative overflow-hidden py-28">
      <Image
        src="/cta-about.png"
        alt="Contact CTA"
        fill
        className="object-cover"
      />

      <div className="absolute inset-0 bg-[#0B4EA2]/30" />

      <Container>
        <div className="relative z-10 mx-auto max-w-4xl text-center text-white">
          <span className="rounded-full border border-white/30 bg-white/10 px-4 py-2 text-sm font-semibold backdrop-blur">
            We're Ready to Help
          </span>

          <h2 className="mt-6 text-5xl font-bold">
            Let's Discuss Your
            <br />
            Corporate Travel Needs
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-white/90">
            Whether you need business travel management, MICE services,
            or transportation solutions, our team is here to provide
            the right solution for your company.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Link
              href="tel:+6221xxxxxxxx"
              className="rounded-full bg-white px-8 py-4 font-semibold text-[#0B4EA2] transition hover:scale-105"
            >
              Call Us
            </Link>

            <Link
              href="mailto:info@mitratour.com"
              className="rounded-full border border-white/40 px-8 py-4 font-semibold text-white transition hover:bg-white hover:text-[#0B4EA2]"
            >
              Email Us
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}
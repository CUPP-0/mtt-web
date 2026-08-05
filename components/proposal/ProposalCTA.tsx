import Image from "next/image";
import Link from "next/link";
import Container from "@/components/layout/Container";

export default function ProposalCTA() {
  return (
    <section className="relative overflow-hidden py-28">
      {/* Background */}
      <Image
        src="/cta-about.png"
        alt="Corporate Meeting"
        fill
        className="object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-[#0B4EA2]/30" />

      <Container>
        <div className="relative z-10 mx-auto max-w-4xl text-center text-white">
          <span className="rounded-full border border-white/30 bg-white/10 px-4 py-2 text-sm font-semibold backdrop-blur">
            Need More Information?
          </span>

          <h2 className="mt-6 text-5xl font-bold leading-tight">
            Let's Discuss Your
            <br />
            Business Requirements
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-white/90">
            Not ready to submit your proposal yet? Our corporate travel
            consultants are available to discuss your project, answer your
            questions, and recommend the best solution for your business.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className="rounded-full bg-white px-8 py-4 font-semibold text-[#0B4EA2] transition hover:scale-105"
            >
              Contact Our Team
            </Link>

            <Link
              href="tel:+6221xxxxxxxx"
              className="rounded-full border border-white/40 px-8 py-4 font-semibold text-white transition hover:bg-white hover:text-[#0B4EA2]"
            >
              Call Now
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}
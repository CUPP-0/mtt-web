import Image from "next/image";
import Container from "@/components/layout/Container";

interface PageHeroProps {
  title: string;
  subtitle: string;
  image: string;
}

export default function PageHero({
  title,
  subtitle,
  image,
}: PageHeroProps) {
  return (
    <section className="relative flex h-[480px] items-center overflow-hidden">
      {/* Background */}
      <Image
        src={image}
        alt={title}
        fill
        priority
        className="object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-[#0B4EA2]/45" />

      {/* Content */}
      <Container>
        <div className="relative z-10 max-w-3xl text-white">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-white/80">
            {title}
          </p>

          <h1 className="text-5xl font-bold leading-tight lg:text-6xl">
            {subtitle}
          </h1>

          <div className="mt-6 flex items-center gap-2 text-white/80">
            <span>Home</span>
            <span>/</span>
            <span>{title}</span>
          </div>
        </div>
      </Container>
    </section>
  );
}
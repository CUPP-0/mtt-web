import Image from "next/image";
import Link from "next/link";
import Container from "@/components/layout/Container";
import { ArrowRight, Calendar } from "lucide-react";
import { featuredNews } from "@/data/news";

export default function FeaturedNews() {
  return (
    <section className="bg-white py-28">
      <Container>
        {/* Heading */}
        <div className="mb-16 text-center">
          <span className="rounded-full bg-blue-50 px-4 py-2 text-sm font-semibold text-[#0B4EA2]">
            Featured Article
          </span>

          <h2 className="mt-6 text-5xl font-bold text-slate-900">
            Latest Highlight
          </h2>
        </div>

        <div className="overflow-hidden rounded-[32px] border border-slate-200 bg-white shadow-sm lg:grid lg:grid-cols-2">
          {/* Image */}
          <div className="relative h-[350px] lg:h-full">
            <Image
              src={featuredNews.image}
              alt={featuredNews.title}
              fill
              className="object-cover transition duration-700 hover:scale-105"
            />
          </div>

          {/* Content */}
          <div className="flex flex-col justify-center p-10 lg:p-14">
            <span className="w-fit rounded-full bg-blue-50 px-3 py-1 text-sm font-semibold text-[#0B4EA2]">
              {featuredNews.category}
            </span>

            <h3 className="mt-6 text-4xl font-bold leading-tight text-slate-900">
              {featuredNews.title}
            </h3>

            <p className="mt-6 text-lg leading-8 text-slate-600">
              {featuredNews.excerpt}
            </p>

            <div className="mt-8 flex items-center gap-2 text-slate-500">
              <Calendar size={18} />
              <span>{featuredNews.date}</span>
            </div>

            <Link
              href={`/news/${featuredNews.slug}`}
              className="mt-10 inline-flex w-fit items-center gap-2 rounded-full bg-[#0B4EA2] px-7 py-4 font-semibold text-white transition hover:bg-[#083d7d]"
            >
              Read Article
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import Container from "@/components/layout/Container";
import NewsCard from "./NewsCard";
import { news } from "@/data/news";

export default function LatestNews() {
  return (
    <section className="py-28 bg-slate-50">
      <Container>
        <div className="mb-16 flex items-end justify-between">
          <div className="max-w-2xl">
            <span className="rounded-full bg-blue-50 px-4 py-2 text-sm font-semibold text-[#0B4EA2]">
              Latest News
            </span>

            <h2 className="mt-6 text-5xl font-bold text-slate-900">
              News & Insights
            </h2>

            <p className="mt-6 text-lg leading-8 text-slate-500">
              Stay informed with the latest updates, corporate activities,
              and business travel insights from MTT.
            </p>
          </div>

          <Link
            href="/news"
            className="hidden items-center gap-2 rounded-full border border-slate-300 px-6 py-3 font-medium transition hover:bg-[#0B4EA2] hover:text-white lg:inline-flex"
          >
            View All
            <ArrowRight size={18} />
          </Link>
        </div>

        <div className="grid gap-8 lg:grid-cols-3">
          {news.map((item) => (
            <NewsCard key={item.slug} {...item} />
          ))}
        </div>
      </Container>
    </section>
  );
}
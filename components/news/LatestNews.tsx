import Container from "@/components/layout/Container";
import NewsCard from "./NewsCard";
import { latestNews } from "@/data/news";

export default function LatestNews() {
  return (
    <section className="bg-slate-50 py-28">
      <Container>
        <div className="text-center">
          <span className="rounded-full bg-blue-50 px-4 py-2 text-sm font-semibold text-[#0B4EA2]">
            Latest News
          </span>

          <h2 className="mt-6 text-5xl font-bold text-slate-900">
            Recent Articles
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-600">
            Stay informed with our latest updates, business travel insights,
            and company news.
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {latestNews.map((item) => (
            <NewsCard key={item.id} {...item} />
          ))}
        </div>
      </Container>
    </section>
  );
}
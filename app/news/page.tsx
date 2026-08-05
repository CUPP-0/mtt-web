import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import PageHero from "@/components/common/PageHero";
import FeaturedNews from "@/components/news/FeaturedNews";
import LatestNews from "@/components/news/LatestNews";
import NewsCTA from "@/components/news/NewsCTA";

export default function NewsPage() {
  return (
    <>
      <Navbar />

      <main>
        <PageHero
          title="News"
          subtitle="Latest News & Corporate Travel Insights"
          image="/hero-about.png"
        />

        {/* Featured News */}
        <FeaturedNews />

        {/* Latest News */}
        <LatestNews />

        {/* CTA */}
        <NewsCTA />
      </main>

      <Footer />
    </>
  );
}
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import PageHero from "@/components/common/PageHero";
import Introduction from "@/components/products/Introduction";
import BusinessProcess from "@/components/products/BusinessProcess";
import FAQ from "@/components/products/FAQ";
import ProductCTA from "@/components/products/ProductCTA";

export default function ProductsPage() {
  return (
    <>
      <Navbar />

      <main>
  <PageHero
    title="Products"
    subtitle="Integrated Corporate Travel Solutions"
    image="/hero-about.png"
  />

  <Introduction />

  <BusinessProcess />
    <FAQ />

  {/* CTA */}
    <ProductCTA />
</main>

      <Footer />
    </>
  );
}
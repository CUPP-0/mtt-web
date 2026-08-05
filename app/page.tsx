import Navbar from '@/components/layout/Navbar';
import Hero from '@/components/home/Hero';
import WhyMTT from "@/components/home/WhyMTT";
import Products from "@/components/home/Products";
import AboutMTT from "@/components/home/AboutMTT";
import OurClients from "@/components/home/OurClients";
import LatestNews from "@/components/home/LatestNews";
import CTA from "@/components/home/CTA";
import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <WhyMTT />
      <Products />
      <AboutMTT />
      <OurClients/>
      <LatestNews />
      <CTA />
      <Footer />
    </main>
  );
}
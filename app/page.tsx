import Navbar from '@/components/layout/Navbar';
import Hero from '@/components/home/Hero';
import WhyMTT from "@/components/home/WhyMTT";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <WhyMTT />
    </main>
  );
}
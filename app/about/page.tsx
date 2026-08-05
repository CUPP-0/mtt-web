import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import PageHero from "@/components/common/PageHero";
import WhoWeAre from "@/components/about/WhoWeAre";
import CoreValues from "@/components/about/CoreValues";
import Timeline from "@/components/about/Timeline";
import Journey from "@/components/about/Journey";
import Statistics from "@/components/about/Statistics";
import AboutCTA from "@/components/about/AboutCTA";

export default function AboutPage() {
  return (
    <>
      <Navbar />

      <main>
        <PageHero
          title="About Us"
          subtitle="Building Better Business Travel"
          image="/hero-about.png"
        />
        <WhoWeAre />
        <CoreValues />
        <Journey />
        <Statistics/>
        <AboutCTA />
      </main>

      <Footer />
    </>
  );
}
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import PageHero from "@/components/common/PageHero";
import WhyProposal from "@/components/proposal/WhyProposal";
import ProposalProcess from "@/components/proposal/ProposalProcess";
import ProposalForm from "@/components/proposal/ProposalForm";
import ProposalFAQ from "@/components/proposal/ProposalFAQ";
import ProposalCTA from "@/components/proposal/ProposalCTA";

export default function RequestProposalPage() {
  return (
    <>
      <Navbar />

      <main>
        <PageHero
          title="Request Proposal"
          subtitle="Tell Us Your Business Travel Requirements"
          image="/hero-about.png"
        />

        {/* Why Request Proposal */}
        <WhyProposal />

        {/* Proposal Process */}
        <ProposalProcess />

        {/* Proposal Form */}
        <ProposalForm />

        {/* FAQ */}
        <ProposalFAQ />

        {/* CTA */}
        <ProposalCTA />
      </main>

      <Footer />
    </>
  );
}
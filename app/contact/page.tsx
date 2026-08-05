import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import PageHero from "@/components/common/PageHero";
import ContactInfo from "@/components/contact/ContactInfo";
import ContactForm from "@/components/contact/ContactForm";
import ContactCTA from "@/components/contact/ContactCTA";

export default function ContactPage() {
  return (
    <>
      <Navbar />

      <main>
        <PageHero
          title="Contact"
          subtitle="Let's Start the Conversation"
          image="/hero-about.png"
        />

        {/* Contact Information */}
        <ContactInfo />

        {/* Contact Form */}
        <ContactForm />

        {/* Office Hours */}

        {/* CTA */}
        <ContactCTA />
      </main>

      <Footer />
    </>
  );
}
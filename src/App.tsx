import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppFloat } from "@/components/layout/WhatsAppFloat";
import { Analytics } from "@/components/seo/Analytics";
import { DocumentHead } from "@/components/seo/DocumentHead";
import { Audiences } from "@/components/sections/Audiences";
import { BeforeAfter } from "@/components/sections/BeforeAfter";
import { Contact } from "@/components/sections/Contact";
import { Faq } from "@/components/sections/Faq";
import { FinalCta } from "@/components/sections/FinalCta";
import { FixedImageReveal } from "@/components/sections/FixedImageReveal";
import { Hero } from "@/components/sections/Hero";
import { Process } from "@/components/sections/Process";
import { Services } from "@/components/sections/Services";
import { Testimonials } from "@/components/sections/Testimonials";
import { TickerBar } from "@/components/sections/TickerBar";
import { TrustBar } from "@/components/sections/TrustBar";

export default function App() {
  return (
    <>
      <DocumentHead />
      <Analytics />
      <a
        href="#contenido"
        className="sr-only focus:not-sr-only focus:absolute focus:top-3 focus:left-3 focus:z-[60] focus:bg-graphite focus:px-4 focus:py-2 focus:text-ivory"
      >
        Saltar al contenido
      </a>
      <Header />
      <main id="contenido">
        <Hero />
        <TickerBar />
        <TrustBar />
        <Services />
        <Process />
        <Audiences />
        <FixedImageReveal />
        <BeforeAfter />
        <Testimonials />
        <Faq />
        <Contact />
        <FinalCta />
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  );
}

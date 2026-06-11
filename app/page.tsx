import { CompareSection } from "./components/CompareSection";
import { FaqSection } from "./components/FaqSection";
import { FinalCtaSection } from "./components/FinalCtaSection";
import { Footer } from "./components/Footer";
import { GallerySection } from "./components/GallerySection";
import { Header } from "./components/Header";
import { HeroSection } from "./components/HeroSection";
import { HowItWorksSection } from "./components/HowItWorksSection";
import { StatementSection } from "./components/StatementSection";
import { WhoItsForSection } from "./components/WhoItsForSection";

export default function Home() {
  return (
    <>
      <Header />

      <main>
        <HeroSection />
        <GallerySection />
        <StatementSection />
        <CompareSection />
        <HowItWorksSection />
        <WhoItsForSection />
        <FaqSection />
        <FinalCtaSection />
      </main>

      <Footer />
    </>
  );
}

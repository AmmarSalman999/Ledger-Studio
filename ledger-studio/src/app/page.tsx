import PublicNavbar from "@/components/public/Navbar";
import Hero from "@/components/public/Hero";
import Services from "@/components/public/Services";
import Methodology from "@/components/public/Methodology";
import CtaSection from "@/components/public/CtaSection";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <PublicNavbar />
      <main>
        <Hero />
        <Services />
        <Methodology />
        <CtaSection />
      </main>
    </div>
  );
}

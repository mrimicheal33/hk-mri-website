import { HeroCompany } from "@/components/home/HeroCompany";
import { ProductPortfolio } from "@/components/home/ProductPortfolio";
import { WhyChoose } from "@/components/home/WhyChoose";
import { PartnersSection } from "@/components/home/PartnersSection";
import { ConnectCTA } from "@/components/home/ConnectCTA";

export default function HomePage() {
  return (
    <>
      <HeroCompany />
      <ProductPortfolio />
      <WhyChoose />
      <PartnersSection />
      <ConnectCTA />
    </>
  );
}

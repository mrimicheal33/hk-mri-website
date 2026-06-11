import { HeroSonoEye } from "@/components/home/HeroSonoEye";
import { ServicesSection } from "@/components/home/ServicesSection";
import { BrandShowcase } from "@/components/home/BrandShowcase";
import { CTABanner } from "@/components/home/CTABanner";

export default function HomePage() {
  return (
    <>
      <HeroSonoEye />
      <ServicesSection />
      <BrandShowcase />
      <CTABanner />
    </>
  );
}

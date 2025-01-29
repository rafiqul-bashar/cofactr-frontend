import HeroSection from "../components/custom/homepage/HeroSection";
import { DownloadApp, Service, TopRated } from "../components/custom/homepage";
export default function HomePage() {
  return (
    <>
      <HeroSection />
      <TopRated />
      <Service />
      <DownloadApp />
    </>
  );
}

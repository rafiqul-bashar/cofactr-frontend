import HeroSection from "../components/custom/homepage/HeroSection";

import { DownloadApp, Service, TopRated } from "../components/custom/homepage";

export default function HomePage() {
  return (
    <div>
      <HeroSection />
      <TopRated />
      <Service />
      <DownloadApp />
    </div>
  );
}

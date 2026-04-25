import MainHero from '@/components/MainHero';
import ReferEarnBanner from '@/components/ReferEarnBanner';
import HowItWorks from '@/components/HowItWorks';
import BrowseByDomain from '@/components/BrowseByDomain';
import TrendingProjects from '@/components/TrendingProjects';
import SidebarInitializer from '@/components/SidebarInitializer';

export default function Home() {
  return (
    <div className="main-content-wrapper">
      <SidebarInitializer />
      <main className="main-content">
        <MainHero />
        <ReferEarnBanner />
        <div className="content-section">
          <HowItWorks />
        </div>
        <div className="content-section">
          <BrowseByDomain />
        </div>
        <div className="content-section">
          <TrendingProjects />
        </div>
      </main>
    </div>
  );
}

import TopNavbar from '@/components/TopNavbar';
import MainNavbar from '@/components/MainNavbar';
import SidebarMenu from '@/components/SidebarMenu';
import HeroSection from '@/components/HeroSection';
import FeaturedProjects from '@/components/FeaturedProjects';

export default function Home() {
  return (
    <div className="app-container">
      <TopNavbar />
      <MainNavbar />
      <SidebarMenu />
      
      <div className="main-content-wrapper">
        <main className="main-content">
          <HeroSection />
          
          <div className="content-section">
            <FeaturedProjects />
          </div>
        </main>
      </div>
    </div>
  );
}
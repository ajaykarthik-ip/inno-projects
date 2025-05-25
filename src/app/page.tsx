import TopNavbar from '@/components/TopNavbar';
import MainNavbar from '@/components/MainNavbar';
import SidebarMenu from '@/components/SidebarMenu';
import HeroSection from '@/components/HeroSection';
import FeaturedProjects from '@/components/FeaturedProjects';
import TechnologySection from '@/components/TechnologySection';

export default function Home() {
  return (
    <div>
      <TopNavbar />
      <MainNavbar />
      
      <div className="page-content">
        <SidebarMenu />
        
        <main className="main-content">
          <HeroSection />
          
          <div className="hello-world-section">
            <FeaturedProjects />
            <TechnologySection />
          </div>
        </main>
      </div>
    </div>
  );
}
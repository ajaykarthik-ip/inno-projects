import TopNavbar from '@/components/TopNavbar';
import MainNavbar from '@/components/MainNavbar';
import SidebarMenu from '@/components/SidebarMenu';
import HeroSection from '@/components/HeroSection';

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
           
          </div>
        </main>
      </div>
    </div>
  );
}
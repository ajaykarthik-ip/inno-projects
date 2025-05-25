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
            <h2>Hello World!</h2>
            <p>Welcome to our Final Year Projects platform. Stay tuned for more exciting content.</p>
          </div>
        </main>
      </div>
    </div>
  );
}
import Header from '@/components/Header';
import EmergencyBanner from '@/components/EmergencyBanner';
import HeroSection from '@/components/HeroSection';
import ServicesSection from '@/components/ServicesSection';
import StatsSection from '@/components/StatsSection';
import DoctorsSection from '@/components/DoctorsSection';
import AppointmentSection from '@/components/AppointmentSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <EmergencyBanner />
      <Header />
      <main>
        <HeroSection />
        <ServicesSection />
        <StatsSection />
        <DoctorsSection />
        <AppointmentSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;

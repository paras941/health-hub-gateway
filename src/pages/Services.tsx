import Header from '@/components/Header';
import EmergencyBanner from '@/components/EmergencyBanner';
import ServicesSection from '@/components/ServicesSection';
import Footer from '@/components/Footer';

const Services = () => {
  return (
    <div className="min-h-screen">
      <EmergencyBanner />
      <Header />
      <main>
        <ServicesSection />
      </main>
      <Footer />
    </div>
  );
};

export default Services;

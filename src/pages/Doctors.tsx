import Header from '@/components/Header';
import EmergencyBanner from '@/components/EmergencyBanner';
import DoctorsSection from '@/components/DoctorsSection';
import Footer from '@/components/Footer';

const Doctors = () => {
  return (
    <div className="min-h-screen">
      <EmergencyBanner />
      <Header />
      <main>
        <DoctorsSection />
      </main>
      <Footer />
    </div>
  );
};

export default Doctors;

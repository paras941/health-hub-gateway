import Header from '@/components/Header';
import EmergencyBanner from '@/components/EmergencyBanner';
import AppointmentSection from '@/components/AppointmentSection';
import Footer from '@/components/Footer';

const Appointment = () => {
  return (
    <div className="min-h-screen">
      <EmergencyBanner />
      <Header />
      <main>
        <AppointmentSection />
      </main>
      <Footer />
    </div>
  );
};

export default Appointment;

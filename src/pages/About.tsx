import Header from '@/components/Header';
import EmergencyBanner from '@/components/EmergencyBanner';
import StatsSection from '@/components/StatsSection';
import Footer from '@/components/Footer';
import { Award, Heart, Shield, Users } from 'lucide-react';

const About = () => {
  return (
    <div className="min-h-screen">
      <EmergencyBanner />
      <Header />
      <main>
        {/* About Hero */}
        <section className="hospital-section bg-hospital-cream">
          <div className="hospital-container">
            <div className="text-center mb-16">
              <span className="text-primary font-semibold text-sm uppercase tracking-wider">
                About Us
              </span>
              <h2 className="section-title mt-2">Who We Are</h2>
              <p className="section-subtitle">
                MediCare is a leading multi-specialty hospital committed to providing 
                world-class healthcare with compassion and excellence.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <img
                  src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=600&h=400&fit=crop"
                  alt="Hospital building"
                  className="rounded-3xl shadow-lg w-full h-80 object-cover"
                />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-hospital-navy mb-4 font-sans">
                  25+ Years of Trusted Healthcare
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Since our founding, MediCare has grown into a premier healthcare institution 
                  serving over 50,000 patients annually. Our state-of-the-art facility combines 
                  advanced medical technology with a patient-first approach.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { icon: Shield, label: 'Patient Safety' },
                    { icon: Award, label: 'Accredited' },
                    { icon: Users, label: 'Expert Team' },
                    { icon: Heart, label: 'Compassionate Care' },
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-3 bg-card p-3 rounded-xl shadow-sm">
                      <item.icon className="w-5 h-5 text-primary" />
                      <span className="text-sm font-medium">{item.label}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <StatsSection />
      </main>
      <Footer />
    </div>
  );
};

export default About;

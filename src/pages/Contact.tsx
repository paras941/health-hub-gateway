import Header from '@/components/Header';
import EmergencyBanner from '@/components/EmergencyBanner';
import Footer from '@/components/Footer';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';

const Contact = () => {
  return (
    <div className="min-h-screen">
      <EmergencyBanner />
      <Header />
      <main>
        <section className="hospital-section bg-hospital-cream">
          <div className="hospital-container">
            <div className="text-center mb-16">
              <span className="text-primary font-semibold text-sm uppercase tracking-wider">
                Get In Touch
              </span>
              <h2 className="section-title mt-2">Contact Us</h2>
              <p className="section-subtitle">
                Have questions? Reach out to us and our team will get back to you promptly.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12">
              {/* Contact Info */}
              <div className="space-y-6">
                {[
                  { icon: MapPin, title: 'Address', text: '123 Healthcare Blvd, Medical City, MC 12345' },
                  { icon: Phone, title: 'Phone', text: '+1 (555) 123-4567' },
                  { icon: Mail, title: 'Email', text: 'info@medicare.com' },
                  { icon: Clock, title: 'Working Hours', text: 'Mon - Sat: 8:00 AM - 8:00 PM' },
                ].map((item, i) => (
                  <div key={i} className="hospital-card flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <item.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-bold text-hospital-navy font-sans">{item.title}</h4>
                      <p className="text-muted-foreground text-sm">{item.text}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Map Embed */}
              <div className="hospital-card !p-0 overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.835434509374!2d144.9537353!3d-37.8162791!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzfCsDQ4JzU4LjYiUyAxNDTCsDU3JzEzLjQiRQ!5e0!3m2!1sen!2s!4v1234567890"
                  width="100%"
                  height="100%"
                  style={{ border: 0, minHeight: '400px' }}
                  allowFullScreen
                  loading="lazy"
                  title="Hospital Location"
                />
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;

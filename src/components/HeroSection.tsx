import { ArrowRight, Shield, Clock, Award } from 'lucide-react';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  const features = [
    { icon: Shield, text: '100% Patient Safety' },
    { icon: Clock, text: '24/7 Care Available' },
    { icon: Award, text: 'Award Winning Staff' },
  ];

  return (
    <section id="home" className="relative overflow-hidden bg-hospital-cream">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 right-20 w-72 h-72 bg-primary/10 rounded-full blur-3xl floating-element" />
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-secondary/10 rounded-full blur-3xl floating-element" style={{ animationDelay: '-3s' }} />
      </div>

      <div className="hospital-container relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center py-16 md:py-24">
          {/* Content */}
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6 animate-slide-in">
              <span className="w-2 h-2 bg-primary rounded-full pulse-element" />
              Trusted by 50,000+ Patients
            </div>
            
            <h1 className="section-title text-4xl md:text-5xl lg:text-6xl !leading-tight animate-slide-in-delay-1">
              Your Health Is Our
              <span className="text-gradient block">Top Priority</span>
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground mt-6 max-w-xl mx-auto lg:mx-0 animate-slide-in-delay-2">
              Experience world-class healthcare with our team of renowned specialists. 
              We combine cutting-edge technology with compassionate care to deliver 
              exceptional medical services.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mt-8 justify-center lg:justify-start animate-slide-in-delay-3">
              <Link to="/appointment" className="hospital-btn-secondary group">
                Book Appointment
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link to="/services" className="hospital-btn-outline">
                Our Services
              </Link>
            </div>

            {/* Feature Pills */}
            <div className="flex flex-wrap gap-4 mt-10 justify-center lg:justify-start">
              {features.map((feature, index) => (
                <div 
                  key={index} 
                  className="flex items-center gap-2 bg-card px-4 py-2 rounded-full shadow-sm"
                >
                  <feature.icon className="w-5 h-5 text-primary" />
                  <span className="text-sm font-medium">{feature.text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Hero Image/Illustration */}
          <div className="relative hidden lg:block">
            <div className="relative z-10">
              <div className="w-full h-[500px] rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?w=600&h=700&fit=crop"
                  alt="Doctor with patient"
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Floating Cards */}
              <div className="absolute -bottom-6 -left-6 bg-card rounded-2xl p-4 shadow-lg animate-slide-in-delay-2">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-accent flex items-center justify-center">
                    <Shield className="w-6 h-6 text-accent-foreground" />
                  </div>
                  <div>
                    <p className="font-bold text-lg">150+</p>
                    <p className="text-sm text-muted-foreground">Expert Doctors</p>
                  </div>
                </div>
              </div>

              <div className="absolute -top-6 -right-6 bg-card rounded-2xl p-4 shadow-lg animate-slide-in-delay-3">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <Award className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="font-bold text-lg">25+</p>
                    <p className="text-sm text-muted-foreground">Years Experience</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

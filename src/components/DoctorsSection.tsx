import { Star, Phone, Calendar } from 'lucide-react';

const DoctorsSection = () => {
  const doctors = [
    {
      name: 'Dr. Sarah Johnson',
      specialty: 'Cardiologist',
      experience: '15+ Years',
      rating: 4.9,
      image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&h=400&fit=crop',
    },
    {
      name: 'Dr. Michael Chen',
      specialty: 'Neurologist',
      experience: '12+ Years',
      rating: 4.8,
      image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=400&h=400&fit=crop',
    },
    {
      name: 'Dr. Emily Williams',
      specialty: 'Pediatrician',
      experience: '10+ Years',
      rating: 4.9,
      image: 'https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=400&h=400&fit=crop',
    },
    {
      name: 'Dr. James Anderson',
      specialty: 'Orthopedic Surgeon',
      experience: '18+ Years',
      rating: 4.7,
      image: 'https://images.unsplash.com/photo-1537368910025-700350fe46c7?w=400&h=400&fit=crop',
    },
  ];

  return (
    <section id="doctors" className="hospital-section bg-hospital-cream">
      <div className="hospital-container">
        <div className="text-center mb-16">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">
            Meet Our Experts
          </span>
          <h2 className="section-title mt-2">Our Specialist Doctors</h2>
          <p className="section-subtitle">
            Our team of experienced and compassionate doctors are committed to 
            providing you with the highest quality of care.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {doctors.map((doctor, index) => (
            <div key={index} className="doctor-card group">
              <div className="relative overflow-hidden">
                <img
                  src={doctor.image}
                  alt={doctor.name}
                  className="doctor-card-image group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="flex items-center gap-1 text-secondary mb-1">
                    <Star className="w-4 h-4 fill-current" />
                    <span className="text-primary-foreground font-semibold">{doctor.rating}</span>
                  </div>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-lg font-bold text-hospital-navy font-sans">
                  {doctor.name}
                </h3>
                <p className="text-primary font-medium text-sm">{doctor.specialty}</p>
                <p className="text-muted-foreground text-sm mt-1">{doctor.experience} Experience</p>
                
                <div className="flex gap-2 mt-4">
                  <button className="flex-1 flex items-center justify-center gap-2 py-2 px-3 rounded-lg bg-primary/10 text-primary text-sm font-medium hover:bg-primary hover:text-primary-foreground transition-colors">
                    <Calendar className="w-4 h-4" />
                    Book
                  </button>
                  <button className="flex items-center justify-center p-2 rounded-lg border border-border hover:bg-muted transition-colors">
                    <Phone className="w-4 h-4 text-muted-foreground" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a href="#" className="hospital-btn-outline">
            View All Doctors
          </a>
        </div>
      </div>
    </section>
  );
};

export default DoctorsSection;

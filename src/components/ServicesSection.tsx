import { 
  Heart, 
  Brain, 
  Bone, 
  Eye, 
  Stethoscope, 
  Baby,
  Activity,
  Pill
} from 'lucide-react';

const ServicesSection = () => {
  const services = [
    {
      icon: Heart,
      title: 'Cardiology',
      description: 'Comprehensive heart care with advanced diagnostics and treatment for cardiovascular diseases.',
      image: 'https://images.unsplash.com/photo-1628348068343-c6a848d2b6dd?w=400&h=260&fit=crop',
    },
    {
      icon: Brain,
      title: 'Neurology',
      description: 'Expert care for brain and nervous system disorders with cutting-edge technology.',
      image: 'https://images.unsplash.com/photo-1559757175-5700dde675bc?w=400&h=260&fit=crop',
    },
    {
      icon: Bone,
      title: 'Orthopedics',
      description: 'Specialized treatment for bone, joint, and muscle conditions with minimally invasive procedures.',
      image: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=400&h=260&fit=crop',
    },
    {
      icon: Eye,
      title: 'Ophthalmology',
      description: 'Complete eye care services from routine exams to advanced surgical treatments.',
      image: 'https://images.unsplash.com/photo-1551884170-09fb70a3a2ed?w=400&h=260&fit=crop',
    },
    {
      icon: Stethoscope,
      title: 'General Medicine',
      description: 'Primary healthcare services for diagnosis and treatment of common medical conditions.',
      image: 'https://images.unsplash.com/photo-1631815588090-d4bfec5b1ccb?w=400&h=260&fit=crop',
    },
    {
      icon: Baby,
      title: 'Pediatrics',
      description: 'Dedicated care for infants, children, and adolescents with child-friendly facilities.',
      image: 'https://images.unsplash.com/photo-1581594693702-fbdc51b2763b?w=400&h=260&fit=crop',
    },
    {
      icon: Activity,
      title: 'Emergency Care',
      description: '24/7 emergency services with rapid response team and state-of-the-art trauma center.',
      image: 'https://images.unsplash.com/photo-1516549655169-df83a0774514?w=400&h=260&fit=crop',
    },
    {
      icon: Pill,
      title: 'Pharmacy',
      description: 'In-house pharmacy with prescription services and medication counseling.',
      image: 'https://images.unsplash.com/photo-1585435557343-3b092031a831?w=400&h=260&fit=crop',
    },
  ];

  return (
    <section id="services" className="hospital-section bg-background">
      <div className="hospital-container">
        <div className="text-center mb-16">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">
            What We Offer
          </span>
          <h2 className="section-title mt-2">Our Medical Services</h2>
          <p className="section-subtitle">
            We provide a comprehensive range of medical services delivered by 
            experienced specialists using the latest technology.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="hospital-card group cursor-pointer !p-0 overflow-hidden"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative h-44 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/40 to-transparent" />
                <div className="absolute bottom-3 left-3 service-icon !mb-0 !w-12 !h-12 bg-card/90 backdrop-blur-sm">
                  <service.icon className="w-6 h-6" />
                </div>
              </div>
              <div className="p-5">
                <h3 className="text-xl font-bold text-hospital-navy mb-2 font-sans">
                  {service.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a href="#" className="hospital-btn-outline">
            View All Services
          </a>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;

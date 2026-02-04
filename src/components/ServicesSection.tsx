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
    },
    {
      icon: Brain,
      title: 'Neurology',
      description: 'Expert care for brain and nervous system disorders with cutting-edge technology.',
    },
    {
      icon: Bone,
      title: 'Orthopedics',
      description: 'Specialized treatment for bone, joint, and muscle conditions with minimally invasive procedures.',
    },
    {
      icon: Eye,
      title: 'Ophthalmology',
      description: 'Complete eye care services from routine exams to advanced surgical treatments.',
    },
    {
      icon: Stethoscope,
      title: 'General Medicine',
      description: 'Primary healthcare services for diagnosis and treatment of common medical conditions.',
    },
    {
      icon: Baby,
      title: 'Pediatrics',
      description: 'Dedicated care for infants, children, and adolescents with child-friendly facilities.',
    },
    {
      icon: Activity,
      title: 'Emergency Care',
      description: '24/7 emergency services with rapid response team and state-of-the-art trauma center.',
    },
    {
      icon: Pill,
      title: 'Pharmacy',
      description: 'In-house pharmacy with prescription services and medication counseling.',
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
              className="hospital-card group cursor-pointer"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="service-icon group-hover:scale-110 transition-transform duration-300">
                <service.icon className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-hospital-navy mb-2 font-sans">
                {service.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {service.description}
              </p>
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

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: 'Amit Kumar',
      role: 'Heart Surgery Patient',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop',
      quote:
        'The care I received was exceptional. The doctors were highly skilled and the staff was supportive throughout my treatment.',
    },
    {
      name: 'Sunita Patel',
      role: 'Parent of Pediatric Patient',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=80&h=80&fit=crop',
      quote:
        'The pediatric team was warm and professional. They made a difficult phase much easier for our family.',
    },
    {
      name: 'Raghav Singh',
      role: 'Orthopedic Patient',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=80&h=80&fit=crop',
      quote:
        'After surgery and rehab here, I am finally pain-free. The care standards were excellent from day one.',
    },
  ];

  return (
    <section className="hospital-section bg-hospital-cream">
      <div className="hospital-container">
        <div className="text-center mb-16 reveal">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">Testimonials</span>
          <h2 className="section-title mt-2">What Our Patients Say</h2>
          <p className="section-subtitle">Real stories from patients who trusted CityCare with their health.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((item) => (
            <article key={item.name} className="hospital-card interactive-card reveal">
              <p className="text-muted-foreground leading-relaxed">"{item.quote}"</p>
              <div className="flex items-center gap-3 mt-6">
                <img src={item.image} alt={item.name} className="w-12 h-12 rounded-full object-cover" />
                <div>
                  <p className="font-semibold text-hospital-navy">{item.name}</p>
                  <p className="text-sm text-muted-foreground">{item.role}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;

import { Users, Award, Building, Heart } from 'lucide-react';

const StatsSection = () => {
  const stats = [
    { icon: Users, value: '50,000+', label: 'Happy Patients' },
    { icon: Award, value: '150+', label: 'Expert Doctors' },
    { icon: Building, value: '25+', label: 'Years of Service' },
    { icon: Heart, value: '98%', label: 'Success Rate' },
  ];

  return (
    <section className="py-12 bg-hero-gradient relative overflow-hidden">
      {/* Pattern Overlay */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{ 
          backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
          backgroundSize: '40px 40px' 
        }} />
      </div>

      <div className="hospital-container relative">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center text-white">
              <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center">
                <stat.icon className="w-8 h-8" />
              </div>
              <p className="text-3xl md:text-4xl font-bold mb-1">{stat.value}</p>
              <p className="text-white/80 text-sm md:text-base">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;

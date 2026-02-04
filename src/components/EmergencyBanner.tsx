import { Phone, AlertCircle } from 'lucide-react';

const EmergencyBanner = () => {
  return (
    <div className="emergency-banner">
      <div className="hospital-container flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-6 text-center sm:text-left">
        <div className="flex items-center gap-2">
          <AlertCircle className="w-5 h-5 pulse-element" />
          <span className="font-semibold">24/7 Emergency Services Available</span>
        </div>
        <div className="flex items-center gap-2 bg-white/20 rounded-full px-4 py-1">
          <Phone className="w-4 h-4" />
          <a href="tel:911" className="font-bold text-lg">
            Call: 911
          </a>
        </div>
      </div>
    </div>
  );
};

export default EmergencyBanner;

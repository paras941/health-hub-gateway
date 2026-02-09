import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Phone, Menu, X, Clock, MapPin } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Services', href: '/services' },
    { name: 'Doctors', href: '/doctors' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-card/95 backdrop-blur-md border-b border-border">
      {/* Top Bar */}
      <div className="bg-hospital-teal-light border-b border-border">
        <div className="hospital-container py-2 flex flex-wrap justify-between items-center text-sm">
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2 text-muted-foreground">
              <Clock className="w-4 h-4 text-hospital-teal" />
              <span>Mon - Sat: 8:00 AM - 8:00 PM</span>
            </div>
            <div className="hidden sm:flex items-center gap-2 text-muted-foreground">
              <MapPin className="w-4 h-4 text-hospital-teal" />
              <span>123 Healthcare Blvd, Medical City</span>
            </div>
          </div>
          <div className="flex items-center gap-2 font-semibold text-hospital-teal">
            <Phone className="w-4 h-4" />
            <span>+1 (555) 123-4567</span>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="hospital-container py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-xl bg-hero-gradient flex items-center justify-center">
              <span className="text-2xl font-bold text-primary-foreground">+</span>
            </div>
            <div>
              <h1 className="text-xl font-bold text-hospital-navy font-sans">MediCare</h1>
              <p className="text-xs text-muted-foreground">Multi-Specialty Hospital</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-2">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className={`nav-link ${location.pathname === link.href ? 'text-primary' : ''}`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Link to="/appointment" className="hospital-btn-secondary text-sm py-3 px-6">
              Book Appointment
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-lg hover:bg-muted transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-border pt-4 animate-slide-in">
            <div className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  className={`px-4 py-3 rounded-lg hover:bg-muted transition-colors font-medium ${location.pathname === link.href ? 'bg-muted text-primary' : ''}`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
              <Link to="/appointment" className="hospital-btn-secondary text-center mt-2" onClick={() => setIsMenuOpen(false)}>
                Book Appointment
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;

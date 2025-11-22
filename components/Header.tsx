import React, { useState, useEffect } from 'react';
import { Zap, Menu, X } from 'lucide-react';

interface HeaderProps {
  onStart: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onStart }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setIsMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-4 sm:px-6 lg:px-8 pt-4 ${
        isScrolled ? 'py-4' : 'py-6'
      }`}
    >
      <div className={`mx-auto max-w-7xl rounded-2xl transition-all duration-500 border ${
        isScrolled 
          ? 'bg-background/80 backdrop-blur-md border-white/10 shadow-[0_8px_30px_rgb(0,0,0,0.12)] p-4' 
          : 'bg-transparent border-transparent p-0'
      }`}>
        <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center gap-2 cursor-pointer group" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
                <div className="w-8 h-8 rounded bg-primary flex items-center justify-center group-hover:shadow-[0_0_15px_rgba(20,241,149,0.5)] transition-shadow">
                    <Zap className="w-5 h-5 text-black fill-current" />
                </div>
                <span className="font-bold text-xl tracking-tight text-white">NeonGen</span>
            </div>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center gap-8">
                <button onClick={() => scrollToSection('showcase')} className="text-sm font-medium text-gray-300 hover:text-primary transition-colors">Showcase</button>
                <button onClick={() => scrollToSection('features')} className="text-sm font-medium text-gray-300 hover:text-primary transition-colors">Features</button>
                <button onClick={() => scrollToSection('pricing')} className="text-sm font-medium text-gray-300 hover:text-primary transition-colors">Pricing</button>
            </nav>

            {/* CTA */}
            <div className="hidden md:flex items-center gap-4">
                 <button onClick={onStart} className="text-sm font-medium text-white hover:text-primary transition-colors">Sign In</button>
                 <button 
                    onClick={onStart}
                    className="bg-white text-black px-5 py-2 rounded-full text-sm font-bold hover:bg-primary hover:scale-105 transition-all"
                 >
                    Get Started
                 </button>
            </div>

            {/* Mobile Toggle */}
            <button 
                className="md:hidden text-white p-2"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
                {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
            <div className="md:hidden mt-4 pt-4 border-t border-white/10 flex flex-col space-y-4 animate-in slide-in-from-top-5 fade-in duration-200">
                 <button onClick={() => scrollToSection('showcase')} className="text-left text-gray-300 hover:text-primary py-2">Showcase</button>
                <button onClick={() => scrollToSection('features')} className="text-left text-gray-300 hover:text-primary py-2">Features</button>
                <button onClick={() => scrollToSection('pricing')} className="text-left text-gray-300 hover:text-primary py-2">Pricing</button>
                <div className="pt-2">
                  <button onClick={onStart} className="w-full bg-primary text-black py-3 rounded-xl font-bold hover:bg-primary-dim transition-colors">Get Started</button>
                </div>
            </div>
        )}
      </div>
    </header>
  );
};
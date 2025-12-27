
import React from 'react';
import { ChevronDown } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <div className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&q=80&w=2000")',
          backgroundPosition: 'center',
          backgroundSize: 'cover'
        }}
      >
        <div className="absolute inset-0 bg-black/50" />
      </div>

      <div className="relative z-10 text-center px-4 max-w-4xl">
        <span className="text-lucca-gold uppercase tracking-[0.3em] text-sm font-semibold mb-4 block">
          Helena's Premier Italian Destination
        </span>
        <h1 className="text-5xl md:text-8xl text-white font-serif mb-6 leading-tight">
          Lucca's Fine Italian
        </h1>
        <p className="text-xl md:text-2xl text-stone-200 font-light mb-10 italic">
          "The Best Restaurant in Montana" — Business Insider
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a 
            href="#menu"
            className="px-8 py-4 bg-lucca-gold text-white rounded-full font-medium hover:bg-lucca-gold/90 transition-all w-full sm:w-auto text-center"
          >
            Explore Menu
          </a>
          <a 
            href="#contact"
            className="px-8 py-4 bg-white/10 backdrop-blur-md text-white border border-white/30 rounded-full font-medium hover:bg-white/20 transition-all w-full sm:w-auto text-center"
          >
            Reservations
          </a>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
        <ChevronDown className="text-white/60 w-8 h-8" />
      </div>
    </div>
  );
};

export default Hero;

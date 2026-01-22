import React from 'react';
import { AlertTriangle } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative h-screen w-full flex flex-col items-center justify-center overflow-hidden bg-neutral-900 text-white">
      {/* Background visual effects handled by global CSS noise-bg */}
      
      <div className="z-10 flex flex-col items-center text-center px-4">
        
        {/* Logo - No Frame, Large Size */}
        <div className="mb-10 relative group">
          <div className="absolute inset-0 bg-gain-yellow blur-3xl opacity-10 group-hover:opacity-20 transition-opacity duration-300 animate-pulse-fast"></div>
          <img 
            src="https://wkkeyyrknmnynlcefugq.supabase.co/storage/v1/object/public/neww/fap__2_-removebg-preview.png" 
            alt="Disgainer Logo" 
            className="w-48 h-48 md:w-80 md:h-80 object-contain drop-shadow-[0_0_15px_rgba(0,0,0,0.5)] animate-glitch relative z-10"
          />
        </div>

        {/* Glitch Text */}
        <h1 className="text-4xl md:text-7xl font-pixel text-[#FAFF00] mb-4 tracking-tighter" style={{ textShadow: '4px 4px 0px #000, -2px -2px 0 #333' }}>
          $GAIN
        </h1>

        <div className="bg-black/80 px-4 py-2 border border-[#FAFF00] mb-12 transform -skew-x-12">
           <h2 className="text-xl md:text-3xl font-retro text-white tracking-widest uppercase animate-pulse">
            DISGAINER COIN
          </h2>
        </div>

        {/* Scroll Instruction */}
        <div className="absolute bottom-12 animate-bounce">
          <p className="font-pixel text-xs md:text-sm text-white mb-2">SCROLL DOWN</p>
          <div className="w-full flex justify-center">
            <AlertTriangle className="text-[#FAFF00] w-6 h-6" />
          </div>
        </div>
      </div>
      
      {/* Vignette */}
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.6)_100%)]"></div>
    </section>
  );
};

export default Hero;
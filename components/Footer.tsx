import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gain-black text-white py-12 border-t border-[#FAFF00]">
      <div className="container mx-auto px-4 text-center font-mono">
        <div className="flex justify-center items-center gap-4 mb-8">
            <a href="#" className="hover:text-[#FAFF00] uppercase">[Twitter/X]</a>
            <span className="text-gray-600">|</span>
            <a href="https://t.me/disgainercoin" target="_blank" rel="noopener noreferrer" className="hover:text-[#FAFF00] uppercase">[Telegram]</a>
            <span className="text-gray-600">|</span>
            <a href="#" className="hover:text-[#FAFF00] uppercase">[DexScreener]</a>
        </div>
        <p className="text-xs text-gray-500 max-w-2xl mx-auto leading-relaxed">
          © 2024 DISGAINER COIN ($GAIN). 
          <br/>
          This website is a parody. However, the gains might be real. 
          Do not operate heavy machinery while checking the chart.
          <br/>
          Disgainer is a memecoin with no intrinsic value or expectation of financial return, 
          except for the part where it goes up.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
import React from 'react';

const NavBar: React.FC = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 flex justify-center py-6 mix-blend-difference text-white/90">
      <ul className="flex space-x-6 md:space-x-12 font-mono text-xs md:text-sm tracking-widest">
        {['HOME', 'WARNING', 'TOKENOMICS', 'HOW TO BUY'].map((item) => (
          <li key={item}>
            <button 
              onClick={() => scrollToSection(item.toLowerCase().replace(/ /g, '-'))}
              className="hover:text-[#FAFF00] hover:underline decoration-2 underline-offset-4 transition-all uppercase cursor-pointer"
            >
              {item}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavBar;
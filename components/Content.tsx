import React from 'react';
import { TrendingUp, AlertOctagon, DollarSign, XCircle } from 'lucide-react';

const WarningBanner: React.FC<{ text: string }> = ({ text }) => (
  <div className="w-full bg-[#FAFF00] py-2 px-4 border-y-4 border-black mb-8 overflow-hidden">
    <div className="whitespace-nowrap animate-[marquee_20s_linear_infinite] font-mono font-bold text-black uppercase tracking-wider text-sm md:text-base">
      {text} — {text} — {text} — {text}
    </div>
  </div>
);

const Content: React.FC = () => {
  return (
    <section id="warning" className="relative w-full bg-[#E5E5E5] text-black py-16 md:py-24 px-4 min-h-screen">
      <div className="max-w-4xl mx-auto border-4 border-black p-4 md:p-12 shadow-[15px_15px_0px_0px_rgba(0,0,0,1)] bg-[#F0F0F0]">
        
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-6xl font-retro uppercase border-b-8 border-dashed border-black pb-4 mb-8 inline-block">
            DISGAINER PROTOCOL
          </h2>
        </div>

        {/* The "Warning" Block */}
        <div className="flex flex-col md:flex-row items-center gap-6 mb-12 bg-white border-4 border-black p-6">
          <div className="flex-shrink-0">
             <img 
                src="https://wkkeyyrknmnynlcefugq.supabase.co/storage/v1/object/public/neww/fap__2_-removebg-preview.png" 
                alt="Warning" 
                className="w-24 h-24 object-contain animate-spin"
                style={{ animationDuration: '3s' }}
              />
          </div>
          <div className="font-mono text-sm md:text-base">
            <p className="bg-[#FAFF00] inline-block px-2 font-bold mb-2">
              WARNING: SUCCESS IMMINENT
            </p>
            <p className="uppercase leading-relaxed">
              DISCLAIMER: THIS IS NOT FINANCIAL ADVICE. THIS IS A FINANCIAL PROPHECY. 
              DISGAINER ($GAIN) HAS NO UTILITY, BUT IT HAS MAXIMUM VELOCITY.
              "DIS" STANDS FOR "THIS". "GAINER" STANDS FOR "NUMBER GO UP".
              DO YOU UNDERSTAND?
            </p>
          </div>
        </div>

        {/* Narrative Text */}
        <div className="font-mono space-y-6 text-sm md:text-lg leading-relaxed text-justify mb-16">
          <p>
            Memecoins are usually pure PVP. You buy, you pray, you get rugged. 
            <strong>Disgainer</strong> is different. We are brutally honest about our dishonesty.
            While other coins promise you "community" and "tech", we promise you purely unintentional, 
            catastrophic gains.
          </p>
          <p>
            You see, "Dis" implies a negative prefix, like "Disaster" or "Disappointment". 
            But in street vernacular, "Dis" simply means "This". So when we say Disgainer, 
            we literally mean: <strong>THIS IS A GAINER.</strong>
          </p>
          <p>
             We are issuing a formal warning to all bears, jeets, and skepticism enthusiasts:
             Exposure to $GAIN may result in sudden wealth syndrome, an inability to relate to 
             people who work 9-5, and excessive use of rocket emojis.
          </p>
          <div className="p-4 border-l-4 border-[#FAFF00] bg-gray-200 italic">
            "I tried to short it, but the disclaimer said it would pump, so I went long instead. 
            Now I own a small island." - Anonymous $GAIN Holder
          </div>
        </div>

        <WarningBanner text="CAUTION: UNCONTROLLABLE GREEN CANDLES DETECTED // DO NOT FADE // PUMP IN PROGRESS" />

        {/* Features / Tokenomics */}
        <div id="tokenomics" className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
           <div className="border-2 border-black p-6 hover:bg-black hover:text-[#FAFF00] transition-colors cursor-crosshair group">
              <TrendingUp className="w-12 h-12 mb-4 group-hover:animate-bounce" />
              <h3 className="font-pixel text-lg mb-2">100% FAIR LAUNCH</h3>
              <p className="font-mono text-sm">No team tokens. No hidden wallets. Just pure, unadulterated market chaos.</p>
           </div>
           <div className="border-2 border-black p-6 hover:bg-black hover:text-[#FAFF00] transition-colors cursor-crosshair group">
              <AlertOctagon className="w-12 h-12 mb-4 group-hover:animate-pulse" />
              <h3 className="font-pixel text-lg mb-2">LP BURNT</h3>
              <p className="font-mono text-sm">We lit the liquidity on fire so we can't rug you even if we wanted to (we don't).</p>
           </div>
           <div className="border-2 border-black p-6 hover:bg-black hover:text-[#FAFF00] transition-colors cursor-crosshair group">
              <DollarSign className="w-12 h-12 mb-4 group-hover:rotate-180 transition-transform" />
              <h3 className="font-pixel text-lg mb-2">ZERO TAX</h3>
              <p className="font-mono text-sm">Because paying taxes is for people who don't hold $GAIN.</p>
           </div>
           <div className="border-2 border-black p-6 hover:bg-black hover:text-[#FAFF00] transition-colors cursor-crosshair group">
              <XCircle className="w-12 h-12 mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="font-pixel text-lg mb-2">NO ROADMAP</h3>
              <p className="font-mono text-sm">Where we're going, we don't need roads. We need spacesuits.</p>
           </div>
        </div>

        {/* CTA */}
        <div id="how-to-buy" className="text-center bg-black text-[#FAFF00] p-8 md:p-12 border-4 border-[#FAFF00]">
          <h2 className="font-pixel text-2xl md:text-3xl mb-6">FINAL WARNING</h2>
          <p className="font-mono mb-8 max-w-2xl mx-auto">
            Should you decide to proceed, you acknowledge that you aren't entitled to: 
            refunds, complaints, or a normal heart rate. 
            <br/><br/>
            <strong>CONTRACT ADDRESS:</strong>
          </p>
          <div className="bg-[#FAFF00] text-black font-mono font-bold py-3 px-2 md:px-6 mb-8 break-all border-2 border-white select-all cursor-copy hover:scale-105 transition-transform">
            xxxxxxxxxxxxxxxxxxxxxxx
          </div>
          
          <button className="bg-red-600 hover:bg-red-500 text-white font-pixel py-4 px-8 border-b-4 border-r-4 border-red-900 active:border-0 active:translate-y-1 transition-all">
            I ACCEPT THE GAINS
          </button>

          <p className="mt-6 text-xs font-mono text-gray-500">
            FOR THE FINAL TIME. PLEASE. JUST DO IT.
          </p>
        </div>

      </div>
    </section>
  );
};

export default Content;
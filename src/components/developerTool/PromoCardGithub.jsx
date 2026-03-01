import React from 'react';
import { Heart, Github, Twitter } from 'lucide-react'; // Optional: icon library

const PromoCardGithub = () => {
  return (
    <div className="flex items-center  p-6 bg-slate-50 bg-white dark:bg-[#18181b] min-h-[200px]">
      <div className="relative group overflow-hidden w-full max-w-sm rounded-xl p-6 
                      bg-gradient-to-br from-white via-[#2563eb] to-[#1e293b] via-20% from-emerald-500 to-teal-700 
                      text-white shadow-lg transition-transform hover:scale-[1.02]">
        
        {/* Heart Icon */}
        <div className="mb-4">
          <Heart 
            className="w-8 h-8 opacity-90 stroke-[1.5px]" 
            aria-hidden="true" 
          />
        </div>

        {/* Text Content */}
        <h2 className="text-2xl font-bold mb-3 tracking-tight">
          You like toolskit?
        </h2>
        
        <p className="text-emerald-50 leading-relaxed font-medium">
          Give us a star on{' '}
          <a 
            href="https://github.com/Saketmishra14/Portfolio-SM" 
            target="_blank" 
            rel="noopener noreferrer"
            className="underline underline-offset-4 decoration-white/40 hover:decoration-white transition-colors"
          >
         GitHub
          </a>
          . Thank you! ♡
        </p>

        {/* Subtle Background Glow for Dark Mode Optimization */}
        <div className="absolute -right-4 -top-4 w-24 h-24 bg-white/10 rounded-full blur-2xl pointer-events-none" />
      </div>
    </div>
  );
};

export default PromoCardGithub;
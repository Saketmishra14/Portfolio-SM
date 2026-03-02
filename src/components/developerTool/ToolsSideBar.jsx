import React, { useState } from 'react';
import { 
  Shuffle,Lock, Fingerprint,EyeOff, 
  SortAsc, ShieldCheck, List, Key ,FileUp
} from 'lucide-react';
import ToolLink from './ToolLink';

const ToolsSidebar = () => {
  // 1. State to manage collapsible categories
  const [isCryptoOpen, setIsCryptoOpen] = useState(true);
  const [isConverterOpen, setIsConverterOpen] = useState(true);

  return (
    <div className="">
      <aside 
        className="flex flex-col h-screen w-[300px] shrink-0 border-r border-gray-200 bg-white text-gray-800 transition-colors duration-300 dark:border-gray-800 dark:bg-[#18181b] dark:text-gray-200
        /* 2. Scrollbar Customization: Transparent background and a small thin line thumb */
        overflow-y-auto
        [&::-webkit-scrollbar]:w-1 
        [&::-webkit-scrollbar-track]:bg-transparent 
        [&::-webkit-scrollbar-thumb]:bg-gray-300 
        dark:[&::-webkit-scrollbar-thumb]:bg-gray-700 
        [&::-webkit-scrollbar-thumb]:rounded-full"
      >
        
        {/* Header Section with Gradient */}
        <header className="relative flex flex-col items-center justify-center overflow-hidden px-6 py-10 text-center flex-shrink-0">
          <div className="absolute inset-0 bg-gradient-to-br from-white via-[#2266d9] to-[#13757d] via-20% from-emerald-600  opacity-90" />
          <div className="absolute bottom-0 left-0 h-12 w-full bg-[#1a1a1a] opacity-20" style={{ clipPath: 'ellipse(70% 50% at 50% 100%)' }} />
          
          <div className="relative z-10">
            <h1 className="text-3xl font-bold tracking-tight text-white md:text-4xl">
              TOOLSKIT
            </h1>
            <p className="mt-2 text-sm font-medium text-emerald-50 opacity-90">
              Handy tools for developers
            </p>
          </div>
        </header>

        {/* Navigation Content */}
        <nav className="flex-1 px-4 py-6" aria-label="Tool Categories">
          
          {/* Crypto Category */}
          <div className="mb-4">
            <button 
              onClick={() => setIsCryptoOpen(!isCryptoOpen)}
              className="flex w-full items-center gap-2 px-2 py-1 text-sm font-semibold tracking-wide text-gray-500 uppercase transition-colors hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
              aria-expanded={isCryptoOpen}
            >
              <span className={`text-[10px] opacity-50 transition-transform duration-200 ${isCryptoOpen ? 'rotate-0' : '-rotate-90'}`}>
                ▼
              </span>
              Crypto
            </button>
            
            {/* 3. Conditional rendering for collapsing */}
            {isCryptoOpen && (
              <ul className="mt-2 space-y-1 border-l border-gray-100 ml-3 dark:border-gray-800 animate-in fade-in duration-300">
                  <ToolLink path={"token-generator"} icon={<Shuffle size={20} />} label="Token generator" />
                <ToolLink path={"hash-text"} icon={<EyeOff size={20} />} label="Hash text" />
                <ToolLink path={"bcrypt"} icon={<Lock size={20} />} label="Bcrypt" />
                <ToolLink path={"uuid-generator"} icon={<Fingerprint size={20} /> } label="UUIDs generator" />
                <ToolLink path={"ulid-generator"} icon={<SortAsc size={20} />} label="ULID generator" />
                <ToolLink path={"encryption"} icon={<ShieldCheck size={20} />} label="Encrypt / decrypt text" />
                <ToolLink path={"bip39-generator"} icon={<List size={20} /> } label="BIP39 passphrase gener..." />
                <ToolLink path={"password-strength-analyser"} icon={<Key size={20} /> } label="Password strength analy..." />
                <ToolLink path={"pdf-signature-checker"} icon={<FileUp size={20}/>} label="PDF signature checker" />
              </ul>
            )}
          </div>

          {/* Converter Category */}
          <div className="mb-8">
            <button 
              onClick={() => setIsConverterOpen(!isConverterOpen)}
              className="flex w-full items-center gap-2 px-2 py-1 text-sm font-semibold tracking-wide text-gray-500 uppercase transition-colors hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
              aria-expanded={isConverterOpen}
            >
              <span className={`text-[10px] opacity-50 transition-transform duration-200 ${isConverterOpen ? 'rotate-0' : '-rotate-90'}`}>
                ▼
              </span>
              Converter
            </button>
            
            {isConverterOpen && (
              <ul className="mt-2 space-y-1 border-l border-gray-100 ml-3 dark:border-gray-800 animate-in fade-in duration-300">
                <ToolLink icon="📅" label="Date-time converter" />
              </ul>
            )}
          </div>

        </nav>
      </aside>
    </div>
  );
};

export default ToolsSidebar;
import React, { useState, useMemo, useCallback } from 'react';
import { RefreshCw, Copy, Check, Heart } from 'lucide-react';

/**
 * BIP39 Languages Constants
 * In a production environment, these would map to specific wordlists
 * from the 'bip39' npm package.
 */
const LANGUAGES = [
  { id: 'en', label: 'English' },
  { id: 'zh_s', label: 'Chinese simplified' },
  { id: 'zh_t', label: 'Chinese traditional' },
  { id: 'cs', label: 'Czech' },
  { id: 'fr', label: 'French' },
  { id: 'it', label: 'Italian' },
  { id: 'ja', label: 'Japanese' },
  { id: 'ko', label: 'Korean' },
  { id: 'pt', label: 'Portuguese' },
  { id: 'es', label: 'Spanish' }
];

const BIP39Generator = () => {
  const [entropy, setEntropy] = useState('42a45b8810219d3988b74009e6a97f7d');
  const [langId, setLangId] = useState('en');
  const [copiedField, setCopiedField] = useState(null);

  // Optimization: Computationally expensive derivation is memoized
  // Only recalculates if the entropy string or language selection changes
  const mnemonic = useMemo(() => {
    if (!entropy) return "";
    
    // Logic placeholder: In production, integrate: bip39.entropyToMnemonic(entropy, wordlist)
    // For UI demonstration, we simulate the output based on the user's screenshot
    const mockMnemonic = "dress carpet tilt cake border orphan carpet trend antique crystal garlic wing";
    
    // Note: In a real app, Japanese or Chinese would return non-spaced or specific character sets
    return mockMnemonic;
  }, [entropy, langId]);

  const generateRandomEntropy = useCallback(() => {
    const bytes = new Uint8Array(16); // 128-bit entropy for 12 words
    window.crypto.getRandomValues(bytes);
    const hex = Array.from(bytes).map(b => b.toString(16).padStart(2, '0')).join('');
    setEntropy(hex);
  }, []);

  const copyToClipboard = async (text, field) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedField(field);
      setTimeout(() => setCopiedField(null), 1500);
    } catch (err) {
      console.error("Failed to copy!", err);
    }
  };

  return (
    <div className="min-h-screen bg-white dark:bg-[#181818] text-slate-900 dark:text-gray-300 p-6 md:p-12 font-sans transition-colors duration-300">
      <div className="max-w-4xl mx-auto">
        
        {/* Header Section */}
        <header className="flex items-center justify-between mb-3">
          <h1 className="text-4xl md:text-4xl tracking-tight text-slate-800 dark:text-white">
            BIP39 Passphrase Generator
            <div className="h-[2px] w-[100%] bg-gray-300 dark:bg-gray-700 mt-2 rounded-full mb-2" />
          </h1>

          <button className="p-2 hover:bg-gray-200 dark:hover:bg-zinc-800 rounded-full transition-colors group">
            <Heart className="w-6 h-6 text-gray-400 group-hover:text-red-500 fill-transparent group-hover:fill-red-500 transition-all" />
          </button>
        </header>
        
        <p className="text-gray-500 dark:text-gray-400 mb-12 max-w-2xl leading-relaxed">
          Generate a BIP39 passphrase from an existing or random mnemonic, or get the mnemonic from the passphrase.
        </p>

        {/* Input Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-end">
          
          {/* Language Selector */}
          <div className="lg:col-span-3">
            <label className="block text-sm font-semibold mb-2 uppercase tracking-wider text-gray-400">
              Language:
            </label>
            <select 
              value={langId}
              onChange={(e) => setLangId(e.target.value)}
              className="w-full bg-white dark:bg-[#1a1a1a] border border-gray-300 dark:border-zinc-800 rounded-lg p-3 outline-none focus:ring-2 focus:ring-blue-500/50 appearance-none cursor-pointer"
            >
              {LANGUAGES.map((lang) => (
                <option key={lang.id} value={lang.id}>{lang.label}</option>
              ))}
            </select>
          </div>

          {/* Entropy Field */}
          <div className="lg:col-span-9">
            <label className="block text-sm font-semibold mb-2 uppercase tracking-wider text-gray-400">
              Entropy (seed):
            </label>
            <div className="flex gap-2">
              <input 
                type="text" 
                value={entropy}
                onChange={(e) => setEntropy(e.target.value)}
                className="flex-grow bg-white dark:bg-[#1a1a1a] border border-gray-300 dark:border-zinc-800 rounded-lg p-3 font-mono text-sm outline-none focus:ring-2 focus:ring-blue-500/50 shadow-sm"
                spellCheck="false"
              />
              <button 
                onClick={generateRandomEntropy}
                className="p-3 bg-white dark:bg-[#1a1a1a] border border-gray-300 dark:border-zinc-800 rounded-lg hover:bg-gray-100 dark:hover:bg-zinc-800 transition-all active:scale-95"
                title="Generate Random"
              >
                <RefreshCw className="w-5 h-5" />
              </button>
              <button 
                onClick={() => copyToClipboard(entropy, 'entropy')}
                className="p-3 bg-white dark:bg-[#1a1a1a] border border-gray-300 dark:border-zinc-800 rounded-lg hover:bg-gray-100 dark:hover:bg-zinc-800 transition-all active:scale-95"
              >
                {copiedField === 'entropy' ? <Check className="w-5 h-5 text-emerald-500" /> : <Copy className="w-5 h-5" />}
              </button>
            </div>
          </div>

          {/* Output Mnemonic Field */}
          <div className="lg:col-span-12 mt-2">
            <label className="block text-sm font-semibold mb-2 uppercase tracking-wider text-gray-400">
              Passphrase (mnemonic):
            </label>
            <div className="flex gap-2 group">
              <div className="flex-grow bg-white dark:bg-[#1a1a1a] border border-gray-300 dark:border-zinc-800 rounded-lg p-4 font-mono text-lg min-h-[60px] flex items-center shadow-inner">
                {mnemonic}
              </div>
              <button 
                onClick={() => copyToClipboard(mnemonic, 'mnemonic')}
                className="p-3 w-14 bg-white dark:bg-[#1a1a1a] border border-gray-300 dark:border-zinc-800 rounded-lg hover:bg-gray-100 dark:hover:bg-zinc-800 transition-all active:scale-95 flex items-center justify-center"
              >
                {copiedField === 'mnemonic' ? <Check className="w-5 h-5 text-emerald-500" /> : <Copy className="w-5 h-5" />}
              </button>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default BIP39Generator;
import React, { useState } from 'react';
import CryptoJS from 'crypto-js';
import { Copy, Check, Hash } from 'lucide-react';

const HashTextTool = () => {
  const [inputText, setInputText] = useState('');
  const [encoding, setEncoding] = useState('hex'); // Default: Hexadecimal
  const [copiedId, setCopiedId] = useState(null);

  const algorithms = [
    { name: 'MD5', fn: CryptoJS.MD5 },
    { name: 'SHA1', fn: CryptoJS.SHA1 },
    { name: 'SHA256', fn: CryptoJS.SHA256 },
    { name: 'SHA224', fn: CryptoJS.SHA224 },
    { name: 'SHA512', fn: CryptoJS.SHA512 },
    { name: 'SHA384', fn: CryptoJS.SHA384 },
    { name: 'SHA3', fn: CryptoJS.SHA3 },
    { name: 'RIPEMD160', fn: CryptoJS.RIPEMD160 },
  ];

  // Logic to handle different encoding types
  const formatHash = (wordArray) => {
    if (!inputText) return "";

    switch (encoding) {
      case 'binary':
        const hex = wordArray.toString(CryptoJS.enc.Hex);
        return hex.split('').map(char => 
          parseInt(char, 16).toString(2).padStart(4, '0')
        ).join('');
      
      case 'base64':
        return wordArray.toString(CryptoJS.enc.Base64);
      
      case 'base64url':
        return wordArray.toString(CryptoJS.enc.Base64)
          .replace(/\+/g, '-')
          .replace(/\//g, '_')
          .replace(/=+$/, '');
      
      case 'hex':
      default:
        return wordArray.toString(CryptoJS.enc.Hex);
    }
  };

  const handleCopy = (text, id) => {
    if (!text) return;
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  return (
    <div className="min-h-screen dark:bg-[#18181b] text-slate-900 dark:text-gray-200 p-4 md:p-8 font-sans transition-colors">
      <div className="max-w-3xl mx-auto  dark:bg-[#18181b] rounded-xl shadow-xl overflow-hidden border border-slate-200 dark:border-gray-800">
        
        {/* Header */}
        <div className="p-6 border-b border-slate-100 dark:border-gray-800 flex items-center gap-3">
         
          <div>
            <h1 className="text-2xl font-bold tracking-tight dark:text-white">Hash Text</h1>
            <div className="h-[2px] w-[30%] bg-gray-300 dark:bg-gray-700 mt-2 rounded-full mb-2" />
            <p className="text-sm text-black-500 dark:text-gray-400">
             Hash a text string using the function you need : MD5, SHA1, SHA256, SHA224, SHA512, SHA384, SHA3 or RIPEMD160
            </p>
          </div>
        </div>

        <div className="p-6 space-y-6">
          {/* Input Section */}
          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider text-black-400 dark:text-gray-500 mb-2">
              Your text to hash:
            </label>
            <textarea
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              className="w-full bg-slate-50 dark:bg-[#181818] border border-slate-200 dark:border-gray-800 rounded-lg p-4 focus:ring-2 focus:ring-blue-500 focus:outline-none transition-all min-h-[100px] font-mono text-sm"
              placeholder="Your String To Hash...."
            />
          </div>

          {/* Digest Encoding Selector */}
          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider text-black-400 dark:text-gray-500 mb-2">
              Digest encoding
            </label>
            <select 
              value={encoding}
              onChange={(e) => setEncoding(e.target.value)}
              className="w-full bg-slate-50 dark:bg-[#181818] border border-slate-200 dark:border-gray-800 rounded-lg p-3 text-sm focus:outline-none cursor-pointer focus:ring-2 focus:ring-blue-500"
            >
              <option value="hex">Hexadecimal (base 16)</option>
              <option value="binary">Binary (base 2)</option>
              <option value="base64">Base64 (base 64)</option>
              <option value="base64url">Base64url (base 64 with url safe chars)</option>
            </select>
          </div>

          {/* Results Grid */}
          <div className="space-y-3">
            {algorithms.map((algo) => {
              const hashValue = formatHash(algo.fn(inputText));
              return (
                <div 
                  key={algo.name} 
                  className="flex flex-col sm:flex-row items-stretch sm:items-center bg-slate-50 dark:bg-[#181818] rounded-lg border border-slate-100 dark:border-gray-800 overflow-hidden group hover:border-blue-500/50 transition-colors"
                >
                  <div className="w-full sm:w-28 bg-slate-100 dark:bg-gray-800 px-4 py-2 text-xs font-bold text-slate-600 dark:text-gray-400 flex items-center justify-between sm:justify-center border-b sm:border-b-0 sm:border-r border-slate-200 dark:border-gray-800">
                    {algo.name}
                    <span className="sm:hidden text-[10px] opacity-50">Algorithm</span>
                  </div>
                  <div className="flex-1 px-4 py-2 overflow-hidden">
                    <p className="text-xs font-mono break-all text-slate-700 dark:text-blue-400">
                      {inputText ? hashValue : <span className="opacity-30 italic">Waiting for input...</span>}
                    </p>
                  </div>
                  <button
                    onClick={() => handleCopy(hashValue, algo.name)}
                    disabled={!inputText}
                    className="px-4 py-2 hover:bg-blue-50 dark:hover:bg-blue-900/20 text-blue-500 transition-colors flex items-center justify-center border-t sm:border-t-0 sm:border-l border-slate-200 dark:border-gray-800 disabled:opacity-20"
                    title="Copy Hash"
                  >
                    {copiedId === algo.name ? <Check size={16} className="text-green-500" /> : <Copy size={16} />}
                  </button>
                </div>
              );
            })}
          </div>
        </div>
       
      </div>
    </div>
  );
};

export default HashTextTool;